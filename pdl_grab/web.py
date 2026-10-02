"""
本地 Web 服务 —— 替代桌面 Tkinter UI。

设计要点:
  - 零新依赖, 只用标准库 http.server / ThreadingHTTPServer
  - 只监听 127.0.0.1, 不对外暴露
  - 日志用 SSE (text/event-stream) 实时推送
  - 抢购逻辑完全复用 pdl_grab 核心(client / mqtt / multi / captcha), 不重复实现

启动:  python -m pdl_grab.cli web [--port 8765] [--no-browser]
"""
from __future__ import annotations

import json
import os
import queue
import threading
import time
import webbrowser
from collections import deque
from datetime import datetime
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Any, Optional
from urllib.parse import urlparse

from .captcha import CaptchaSolver
from .catalog import fetch as fetch_catalog, to_stores
from .client import PDLClient
from .config import _merge_account, load_accounts, load_config
from .discover import list_stores, list_stru_shoppe
from .errors import PDLException
from .geo import auto_coord, fence_text
from .multi import MultiAccountGrabber
from .mqtt_grab import ScheduledGrabber
from .regions import CITIES, get_city
from .session import Session, is_bookable, load_sessions

HTML = Path(__file__).with_name("webui.html")
# 配置读写要用同一个路径, 否则"保存"和"读取"会指向不同文件
CONFIG_FILE = os.environ.get("PDL_CONFIG") or "config.json"


class State:
    """全局状态(单进程单用户, 无需加锁以外的复杂同步)。"""

    def __init__(self):
        self.lock = threading.RLock()
        self.cfg = load_config()
        self.accounts: list[dict] = self._load_accounts()
        self.sessions: list[Session] = []
        self.target: Optional[Session] = None
        self.stores: list = []
        self.city = "许昌市"
        self.logs: deque[str] = deque(maxlen=500)
        self.listeners: list[queue.Queue] = []
        self.busy = False
        self.stop_flag = threading.Event()
        self.last_result: list[dict] = []

    def _load_accounts(self) -> list[dict]:
        try:
            return [{"name": n, "token": c.user.token, "device_id": c.user.device_id,
                     "session_code": c.grab.session_code, "verify_token": c.grab.verify_token}
                    for n, c in load_accounts()]
        except Exception:
            return []

    # ---- 日志 ----
    def log(self, msg: str):
        with self.lock:
            self.logs.append(msg)
            for q in list(self.listeners):
                try:
                    q.put_nowait(msg)
                except queue.Full:
                    pass

    def subscribe(self) -> queue.Queue:
        q: queue.Queue = queue.Queue(maxsize=1000)
        with self.lock:
            self.listeners.append(q)
        return q

    def unsubscribe(self, q: queue.Queue):
        with self.lock:
            if q in self.listeners:
                self.listeners.remove(q)

    # ---- 账号 ----
    def account_cfgs(self) -> list[tuple[str, Any]]:
        with self.lock:
            base = self.cfg
            accs = [(a.get("name") or "账号", _merge_account(base, a, i))
                    for i, a in enumerate(self.accounts) if (a.get("token") or "").strip()]
        return accs or ([(base.store.name or "账号1", base)] if base.user.token else [])

    def apply(self, data: dict):
        """把前端提交的配置合并进 self.cfg。"""
        with self.lock:
            c = self.cfg
            if "channel" in data: c.channel = data["channel"] or "market"
            if "token" in data: c.user.token = (data["token"] or "").strip()
            for f in ("store_code", "business_code", "structure_code", "shoppe_code"):
                if f in data: setattr(c.store, f, (data[f] or "").strip())
            for f in ("session_code", "verify_token", "captcha_ticket", "captcha_randstr"):
                if f in data: setattr(c.grab, f, (data[f] or "").strip())
            latlng = (data.get("latlng") or "").replace("，", ",").replace(" ", "")
            parts = [x for x in latlng.split(",") if x]
            if len(parts) == 2:
                try:
                    c.user.lat, c.user.lng = parts[0], parts[1]
                except ValueError:
                    pass
            if data.get("city"): self.city = data["city"]
            return c

    def to_dict(self) -> dict:
        with self.lock:
            c = self.cfg
            return {
                "channel": c.channel, "token": c.user.token,
                "lat": c.user.lat, "lng": c.user.lng, "city": self.city,
                "store_code": c.store.store_code, "business_code": c.store.business_code,
                "structure_code": c.store.structure_code, "shoppe_code": c.store.shoppe_code,
                "session_code": c.grab.session_code, "verify_token": c.grab.verify_token,
                "captcha_ticket": c.grab.captcha_ticket, "captcha_randstr": c.grab.captcha_randstr,
                "accounts": list(self.accounts), "busy": self.busy,
                "cities": [c2.name for c2 in CITIES],
                "city_xy": {c2.name: [c2.lat, c2.lng] for c2 in CITIES},
                "stores": [{"code": s.code, "title": s.title, "pos": s.pos,
                            "businesses": [{"code": b.code, "title": b.title, "fence": b.fence,
                                            "radius_m": b.radius_m, "remark": b.remark,
                                            "center_lat": b.center_lat, "center_lng": b.center_lng}
                                           for b in s.businesses]} for s in self.stores],
                "sessions": [{"code": s.code, "name": s.name, "date": s.date,
                              "booking_start": s.booking_start.isoformat() if s.booking_start else "",
                              "bookable": s.bookable, "status": s.status,
                              "status_desc": s.status_desc,
                              "fire_at": s.fire_at.isoformat() if s.fire_at else ""}
                             for s in self.sessions],
                "target": ({"code": self.target.code, "name": self.target.name,
                            "fire_at": self.target.fire_at.isoformat() if self.target.fire_at else ""}
                           if self.target else None),
                "logs": list(self.logs), "last_result": self.last_result,
            }


ST = State()


# ==================== 业务动作 ====================
def _client() -> PDLClient:
    return PDLClient(ST.cfg)


def _run_async(fn):
    def run():
        try:
            fn()
        except PDLException as e:
            ST.log(f"✗ {e}")
        except Exception as e:
            ST.log(f"✗ 异常: {e}")
        finally:
            ST.busy = False
    threading.Thread(target=run, daemon=True).start()


def action_catalog(data: dict):
    city = get_city(data.get("city") or ST.city)
    latlng = (data.get("latlng") or "").replace(" ", "")
    parts = [x for x in latlng.split(",") if x]
    if len(parts) == 2:
        lat, lng = parts
    else:
        lat, lng = city.lat, city.lng
    ST.log(f"加载 {city.name} 门店 {lat},{lng} …")
    payload = fetch_catalog(lat, lng, city.name, ST.cfg, use_cache=not data.get("refresh"))
    ST.city = city.name
    ST.stores = to_stores(payload)
    ST.log(f"✓ {city.name} 门店 {len(ST.stores)} 家")


def action_stru(data: dict):
    strus, shoppes = list_stru_shoppe(_client(), data["store_code"], data["business_code"],
                                      data.get("stru_code") or "all")
    f = lambda x: str(x.get("title") or x.get("name") or "")
    ST.log(f"✓ 业态 {len(strus)} · 分类 {len(shoppes)}")
    return {"strus": [{"code": x.get("code"), "title": f(x)} for x in strus],
            "shoppes": [{"code": x.get("code"), "title": f(x)} for x in shoppes]}


def action_preflight(data: dict):
    """开抢前预检: 逐项验通 token/场次/MQTT, 有问题立刻报, 不等到点。"""
    ST.apply(data)
    accs = ST.account_cfgs()
    if not accs:
        raise PDLException("未配置账号 token")
    fire_at = _pick_fire_at(data)
    if len(accs) > 1:
        with MultiAccountGrabber(accs, on_log=ST.log) as mg:
            res = mg.preflight(fire_at)
    else:
        with ScheduledGrabber(accs[0][1], on_log=ST.log) as g:
            res = [(accs[0][0], "ok" if g.preflight(fire_at) else "未知")]
    bad = [(n, e) for n, e in res if e != "ok"]
    return {"ok": not bad, "results": [{"name": n, "ok": e == "ok", "msg": e} for n, e in res]}


def action_sessionlist(data: dict):
    """
    拉某个门店+专柜下的场次, 供「目标」页的场次下拉使用。

    比 infov4 轻: 只查一个专柜, 不牵动 MQTT 凭证。
    """
    ST.apply(data)
    c = ST.cfg
    need = [("门店", c.store.store_code), ("品类", c.store.business_code),
            ("专柜分类", c.store.shoppe_code)]
    miss = [n for n, v in need if not v]
    if miss:
        raise PDLException("请先选择 " + "、".join(miss))
    if not c.user.token:
        raise PDLException("需要登录 token 才能查询场次(「账号」页填写)")
    items = _client().session_items(c.store.store_code, c.store.shoppe_code,
                                    c.store.business_code, c.user.lat, c.user.lng)
    out = []
    for it in items:
        code = it.get("code") or it.get("sessionCode") or ""
        if not code:
            continue
        bs = it.get("bookingStartTime") or ""
        out.append({
            "code": code,
            "name": it.get("name") or it.get("sessionName") or code,
            "date": it.get("sessionDate") or it.get("date") or "",
            "booking_start": bs,
            "bookable": _bookable(it),
            "status": it.get("status") or "",
            "status_desc": it.get("statusDesc") or "",
        })
    ST.log(f"✓ {c.store.name or c.store.store_code} 场次 {len(out)} 个"
           f"(可约 {sum(1 for x in out if x['bookable'])})")
    return {"sessions": out}




def _bookable(it: dict) -> bool:
    """场次可约判定。统一走 session.is_bookable, 避免与预检/场次页两套标准打架。"""
    return is_bookable(it)


def action_sessions(data: dict):
    ST.apply(data)
    c = ST.cfg
    c.validate()
    ctx = _client().booking_context()
    ST.sessions = load_sessions(ctx.get("sessions"))
    user = ctx.get("user") or {}
    stt = str(user.get("status", ""))
    if stt and stt != "0000":
        ST.log(f"⚠ 账号状态 {stt}: {user.get('statusDesc','')}")
    if (ctx.get("captchaInfo") or {}).get("enabled"):
        ST.log("⚠ 该门店启用了人机验证")
    for s in ST.sessions:
        ST.log(f"  {s.code}  {s.name}  开始={s.booking_start}  可约={s.bookable}")
    ST.log(f"✓ 共 {len(ST.sessions)} 个场次")


def _pick_fire_at(data: dict) -> Optional[datetime]:
    """
    定开抢时刻。优先级: 已选场次的 bookingStartTime > 手填时间。

    手填时间允许 "HH:MM:SS" / "MM-DD HH:MM:SS" / "YYYY-MM-DD HH:MM:SS"。
    前两种缺少年份, 必须结合日期还原 —— 直接 strptime("%H:%M:%S") 会得到
    1900-01-01, 预检必然判定"开抢时刻已过 40 亿秒", 定时抢购会被静默取消。
    """
    code = (data.get("session_code") or "").strip()
    s = next((x for x in ST.sessions if x.code == code), None) if code else None
    if s and s.fire_at:
        return s.fire_at
    t = (data.get("fire_at") or "").strip()
    if not t:
        return None
    # 日期基准: 优先场次当天, 其次今天
    day = (s.booking_start or s.fire_at).date() if s else datetime.now().date()
    for fmt in ("%Y-%m-%d %H:%M:%S", "%m-%d %H:%M:%S", "%H:%M:%S"):
        try:
            got = datetime.strptime(t, fmt)
        except ValueError:
            continue
        if fmt == "%Y-%m-%d %H:%M:%S":
            return got
        if fmt == "%m-%d %H:%M:%S":
            return got.replace(year=day.year)
        return datetime.combine(day, got.time())   # "%H:%M:%S"
    return None


def action_grab(data: dict):
    ST.apply(data)
    mode = data.get("mode") or "schedule"
    accs = ST.account_cfgs()
    if not accs:
        raise PDLException("未配置账号 token")
    # 每次开抢前重置停止标志 —— 否则上一次的"停止"会让本次永远被取消
    ST.stop_flag.clear()

    if mode == "schedule":
        fire_at = _pick_fire_at(data)
        if fire_at is None:
            raise PDLException("未指定开抢时间")
        # 时钟偏差自查: 预约开始时间来自服务端, 本地时钟不准会整体偏移
        drift = (datetime.now() - fire_at).total_seconds()
        if drift > 5:
            ST.log(f"⚠ 本机时间比开抢时刻晚 {drift:.0f}s, 疑似系统时钟不准")
        ST.log(f"定时抢购 → {fire_at:%m-%d %H:%M:%S}  ({len(accs)} 个账号)")

        def run():
            ev = ST.stop_flag
            # 上膛前先预检: 有问题就地失败, 绝不让用户白等一场
            try:
                action_preflight(data)
            except PDLException as e:
                ST.log(f"✗ 预检未通过, 已取消定时: {e}")
                return
            if len(accs) > 1:
                with MultiAccountGrabber(accs, on_log=ST.log) as mg:
                    ST.last_result = [r.__dict__ for r in mg.run_scheduled(fire_at, stop_event=ev)]
            else:
                with ScheduledGrabber(accs[0][1], on_log=ST.log) as g:
                    r = g.run_scheduled(fire_at, stop_event=ev)
                    ST.last_result = [r.__dict__]
            ST.log(_summary(ST.last_result))
        _run_async(run)
    else:
        ST.log(f"立即抢购 ({len(accs)} 个账号)")

        def run():
            ev = ST.stop_flag
            if len(accs) > 1:
                with MultiAccountGrabber(accs, on_log=ST.log) as mg:
                    ST.last_result = [r.__dict__ for r in mg.grab_now()]
            else:
                with ScheduledGrabber(accs[0][1], on_log=ST.log) as g:
                    # 用 grab() 而不是裸 fire+wait: 它会先 prepare() 建连, 再走
                    # _publish_loop(flag 终止判定 / 竞争失败重试 / 验证码弹窗 / 停止信号)。
                    # 注意这里必须让 grab 自己 prepare —— 传 prepared=True 会跳过建连,
                    # 而本分支从没单独调过 prepare(), 结果是 _subscribed 永不置位,
                    # _publish_loop 直接以"MQTT 未就绪"拒绝下单。
                    res = g.grab(stop_event=ev)
                    ST.last_result = [res.__dict__]
            ST.log(_summary(ST.last_result))
        _run_async(run)


def _summary(results: list[dict]) -> str:
    """把结果列表汇总成一行, 避免前端刷屏。"""
    if not results:
        return "── 无结果 ──"
    ok = [r for r in results if r.get("success")]
    lines = [f"── 结果 {len(ok)}/{len(results)} 成功 ──"]
    for r in results:
        mark = "✓" if r.get("success") else "✗"
        name = r.get("name") or ""
        lines.append(f"  {mark} {name} flag={r.get('flag')} {r.get('message') or ''}".rstrip())
    return "\n".join(lines)


def action_verify(data: dict):
    ST.apply(data)
    c = ST.cfg
    code = c.grab.session_code
    if not (c.grab.captcha_ticket and c.grab.captcha_randstr):
        raise PDLException("缺少 ticket / randstr")
    solver = CaptchaSolver(c)
    res = solver.exchange(c.grab.captcha_ticket, c.grab.captcha_randstr, code)
    c.grab.verify_token = res
    ST.log("✓ 已缓存 verifyToken")


# 需要占用 busy 标志的动作(同一时刻只允许一个)
ASYNC = {"sessions", "grab", "stru", "preflight", "sessionlist"}
# 其中只有 grab 是"自己起后台线程"的, busy 由 _run_async 在线程收尾时复位;
# 其余是同步动作, 必须在返回前复位, 否则一次成功就把程序永久锁死在 409。
THREADED = {"grab"}


def _act_config(d: dict):
    ST.apply(d); _persist(ST); ST.log("✓ 已保存配置")


def _act_stop(d: dict):
    ST.stop_flag.set(); ST.log("已请求停止")


def _act_accounts(d: dict):
    ST.accounts = d.get("accounts") or []
    _persist(ST); ST.log(f"✓ 已保存 {len(ST.accounts)} 个账号")


def _act_auto_coord(d: dict) -> dict:
    latlng, fence = _auto(d)
    return {"latlng": latlng, **fence}



ACTIONS = {
    "catalog": action_catalog, "stru": action_stru, "sessions": action_sessions,
    "preflight": action_preflight, "sessionlist": action_sessionlist,
    "grab": action_grab, "verify": action_verify,
    "config": _act_config, "stop": _act_stop,
    "accounts": _act_accounts, "auto_coord": _act_auto_coord,
}

def _auto(d: dict) -> tuple[str, dict]:
    """按门店+品类自动生成合规坐标。"""
    st = next((s for s in ST.stores if s.code == d.get("store_code")), None)
    if not st:
        return "", {}
    b = next((b for b in st.businesses if b.code == d.get("business_code")), None)
    if not b:
        return "", {}
    # 无围栏/无门店坐标时返回空串, 前端会保留用户当前填的坐标
    if not b.center_lat or not b.center_lng:
        return "", {"text": f"{b.title}无围栏" if not b.fence else f"{b.title}未取到门店坐标",
                    "ok": True, "title": b.title}
    la, ln = auto_coord(b.center_lat, b.center_lng, b.radius_m, d.get("jitter", True))
    txt, ok, _ = fence_text(la, ln, b)
    return f"{la},{ln}", {"text": txt, "ok": ok, "title": b.title}


# ==================== HTTP ====================
class Handler(BaseHTTPRequestHandler):
    protocol_version = "HTTP/1.1"

    def log_message(self, *_a):  # 静音
        pass

    def _send(self, code: int, body: bytes, ctype: str, extra: dict | None = None):
        self.send_response(code)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        for k, v in (extra or {}).items():
            self.send_header(k, v)
        self.end_headers()
        self.wfile.write(body)

    def _json(self, obj: Any, code: int = 200):
        self._send(code, json.dumps(obj, ensure_ascii=False).encode(), "application/json; charset=utf-8")

    def do_GET(self):
        path = urlparse(self.path).path
        if path in ("/", "/index.html"):
            self._send(200, HTML.read_bytes(), "text/html; charset=utf-8")
        elif path == "/api/state":
            self._json(ST.to_dict())
        elif path == "/api/stream":
            self._sse()
        else:
            self._json({"error": "not found"}, 404)

    def _origin_ok(self) -> bool:
        """
        同源校验。

        服务只监听 127.0.0.1, 但**任何**本机网页都能往 http://127.0.0.1:8765/api/grab
        发 POST —— 恶意页面只要猜到端口就能替你下单。浏览器会带 Origin 头,
        这里拒绝掉非同源请求(命令行 curl 不带 Origin, 放行)。
        同时校验 Host 头, 挡 DNS rebinding(把 evil.com 解析到 127.0.0.1)。
        """
        host = (self.headers.get("Host") or "").strip()
        # Host 必须是 127.0.0.1[:port] 或 localhost[:port]
        bare = host.rsplit(":", 1)[0] if ":" in host else host
        if bare not in ("127.0.0.1", "localhost", "[::1]"):
            return False
        origin = (self.headers.get("Origin") or "").strip()
        if not origin:
            return True                       # 非浏览器调用(curl/脚本), 无 Origin
        return origin.split("://", 1)[-1] == host

    def do_POST(self):
        if not self._origin_ok():
            return self._json({"error": "拒绝非同源请求"}, 403)
        path = urlparse(self.path).path
        try:
            n = int(self.headers.get("Content-Length") or 0)
            data = json.loads(self.rfile.read(n) or b"{}")
        except Exception:
            data = {}
        if not path.startswith("/api/"):
            return self._json({"error": "not found"}, 404)
        act = path[5:]
        fn = ACTIONS.get(act)
        if fn is None:
            return self._json({"error": f"未知操作 {act}"}, 404)
        if act in ASYNC and ST.busy:
            return self._json({"error": "有任务运行中"}, 409)
        if act in ASYNC:
            ST.busy = True
        try:
            ret = fn(data)
        except PDLException as e:
            ST.busy = False
            return self._json({"error": str(e)}, 400)
        except Exception as e:
            ST.busy = False
            return self._json({"error": f"{type(e).__name__}: {e}"}, 500)
        finally:
            if act in ASYNC and act not in THREADED:
                ST.busy = False
        if act == "config":
            _persist(ST)
        return self._json({"ok": True, "result": ret})

    def _sse(self):
        self.send_response(200)
        self.send_header("Content-Type", "text/event-stream; charset=utf-8")
        self.send_header("Cache-Control", "no-cache")
        self.send_header("Connection", "keep-alive")
        self.end_headers()
        q = ST.subscribe()
        try:
            for line in ST.logs:
                self.wfile.write(f"data: {line}\n\n".encode()); self.wfile.flush()
            while True:
                try:
                    msg = q.get(timeout=15)
                    self.wfile.write(f"data: {msg}\n\n".encode()); self.wfile.flush()
                except queue.Empty:
                    self.wfile.write(b": ping\n\n"); self.wfile.flush()
        except (BrokenPipeError, ConnectionResetError):
            pass
        finally:
            ST.unsubscribe(q)


def _persist(st: State):
    c = st.cfg
    data = {
        "channel": c.channel, "city": st.city,
        # user.lat/lng 是"跟着门店+品类自动算出来的合规坐标"(围栏中心+随机偏移),
        # 不是你的真实位置, 落盘无定位价值; 需要时在「目标」页重选城市/品类即可重建。
        "user": {"token": c.user.token, "device_id": c.user.device_id,
                 "lat": c.user.lat, "lng": c.user.lng},
        "store": {f: getattr(c.store, f) for f in
                  ("store_code", "business_code", "structure_code", "shoppe_code", "name")},
        # 经纬度是"跟着门店+品类自动算出来的输入", 不是需要长期留存的定位数据, 不落盘
        "grab": {"session_code": c.grab.session_code, "verify_token": c.grab.verify_token,
                 "captcha_ticket": c.grab.captcha_ticket, "captcha_randstr": c.grab.captcha_randstr,
                 "warmup_seconds": c.grab.warmup_seconds,
                 "auto_retry_on_captcha": c.grab.auto_retry_on_captcha,
                 "max_publish": c.grab.max_publish, "result_timeout": c.grab.result_timeout},
        "accounts": [{k: a.get(k, "") for k in
                      ("name", "token", "device_id", "session_code", "verify_token")}
                     for a in st.accounts],
        "verbose": c.verbose,
    }
    p = Path(CONFIG_FILE)
    try:
        p.parent.mkdir(parents=True, exist_ok=True)
        p.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
        # 文件里有明文 token, 只给本人读写(默认 644 意味着同机其他用户可读)
        os.chmod(p, 0o600)
    except Exception as e:
        st.log(f"✗ 保存失败: {e}")


class _Server(ThreadingHTTPServer):
    """浏览器关掉 SSE 连接会抛 ConnectionReset, 属于正常现象, 不刷栈。"""
    daemon_threads = True

    def handle_error(self, request, client_address):
        import sys
        if sys.exc_info()[0] in (ConnectionResetError, BrokenPipeError):
            return
        super().handle_error(request, client_address)


def serve(host: str = "127.0.0.1", port: int = 8765, open_browser: bool = True):
    display_host = "127.0.0.1" if host in ("0.0.0.0", "::") else host
    ST.log(f"服务已启动 http://{display_host}:{port}")
    srv = _Server((host, port), Handler)
    url = f"http://{display_host}:{port}"
    if open_browser:
        threading.Timer(0.6, lambda: webbrowser.open(url)).start()
    # 后台预热门店目录, 打开即有数据
    threading.Timer(0.2, lambda: _preload()).start()
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        srv.server_close()


def _preload():
    try:
        action_catalog({"city": ST.city})
    except Exception as e:
        ST.log(f"✗ 预加载失败: {e}")
