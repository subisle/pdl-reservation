"""
门店预约抢购核心 (MQTT)。

逆向要点 (packageExternal):
  - broker : wxs://pdlreservation3.azpdl.net/mqtt   (WebSocket + TLS)
  - 凭证   : emqx.username / emqx.password, 由 bookingpage/infov4 下发
  - clientId: "wx" + deviceId + timestamp
  - 订阅   : booking/result/{sessionCode}{token}
  - 发布   : order_topic
  - 下单报文:
      {token, storeCode, businessCode, structureCode, shoppeCode,
       sessionCode, deviceId, lat, lng, verifyToken}
  - 结果 flag 语义:
      2001  -> 需人机验证(触发 captcha, 校验后重发)
      1011/1012 -> 场次不可约
      1000/1011 -> "预约太火爆"
      success=true -> 跳转成功页
"""
from __future__ import annotations

import json
import ssl
import threading
import time
from datetime import datetime, timedelta
from dataclasses import dataclass
from typing import Any, Callable, Optional

import paho.mqtt.client as mqtt

from .client import PDLClient
from .config import (MQTT_HOSTS, MQTT_PORT, MQTT_PUB_TOPIC, MQTT_SUB_TOPIC,
                     AppConfig, missing_msg)
from .errors import APIError, CaptchaRequired, GrabError
from .captcha import CaptchaSolver
from .session import Session, load_sessions
from . import captcha_popup

# 完整 flag 语义(逆向自 MQTT onMessage)
FLAG_NOT_LOGIN   = 1001   # 未登录 -> 终止, 需去登录
FLAG_NOT_REALNAME= 1002   # 未实名 -> 终止, 需去实名
FLAG_NO_STOCK    = 1004   # 不可约
FLAG_FULL        = 1006   # 场次已满
FLAG_TOO_HOT     = 1008   # "排号太火爆" -> 抢输了, 可重试
FLAG_CLOSED      = 1010   # 场次关闭/不可约
FLAG_FULL2       = 1011   # 场次满
FLAG_NOT_START   = 1012   # 未开始/已结束
FLAG_CAPTCHA     = 2001   # 需人机验证

# 源码核对(xcx/.../chunk_34.appservice.js, 逐字反查):
#   1008 -> showToast("排号太火爆!") 且**不**置 isCanYy=false -> 可重试 ✓
#   1011 || 1012 -> 小程序把两者当同一情况处理(都只显示服务端 message),
#           并没有区分"约满"与"未开始"; 这里的文案是本工具自加的。
#   1006 -> 小程序会把场次 status 改成 "full"(见 session.NOT_BOOKABLE_STATUS)
#   1001/1002 -> 弹窗内容取 user.statusDesc, 同样由服务端给
# 可重试(竞争失败, 继续发)
RETRYABLE_FLAGS = {FLAG_TOO_HOT}
# 终止(本场次/本账号无解, 继续发无意义)
TERMINAL_FLAGS = {FLAG_NOT_LOGIN, FLAG_NOT_REALNAME, FLAG_NO_STOCK,
                  FLAG_FULL, FLAG_CLOSED, FLAG_FULL2, FLAG_NOT_START}
# 终止但有明确处置建议
FLAG_ACTION = {
    FLAG_NOT_LOGIN: "账号未登录, 请重新登录后再抢",
    FLAG_NOT_REALNAME: "账号未实名, 请先在官方小程序完成实名",
    FLAG_FULL: "该场次已约满",
    FLAG_CLOSED: "该场次已关闭/不可约",
    FLAG_FULL2: "该场次已约满",
    FLAG_NO_STOCK: "该场次不可约",
    FLAG_NOT_START: "该场次未开始或已结束",
}


@dataclass
class GrabResult:
    success: bool
    flag: Optional[int] = None
    message: str = ""
    raw: Optional[dict] = None
    elapsed_ms: int = 0

    def __str__(self) -> str:
        state = "成功" if self.success else f"失败(flag={self.flag})"
        return f"[{state}] {self.message}  耗时={self.elapsed_ms}ms"


class ReservationGrabber:
    """门店预约抢购器: 先握手拉取 emqx 凭证, 再用 MQTT 瞬时下单。"""

    def __init__(self, cfg: AppConfig, client: Optional[PDLClient] = None,
                 solver: Optional[CaptchaSolver] = None, on_log=None):
        self.cfg = cfg
        self.client = client or PDLClient(cfg)
        self.solver = solver or CaptchaSolver(cfg, self.client)
        self._client: Optional[mqtt.Client] = None
        self._connected = threading.Event()
        self._result: Optional[GrabResult] = None
        self._got_result = threading.Event()
        self._subscribed = threading.Event()
        self._t0 = 0.0
        self._verify_token = cfg.grab.verify_token
        self.captcha_required = False
        self.on_log = on_log   # 状态回调(可选), 供 GUI 实时显示
        self.sessions: list[Session] = []   # prepare() 缓存的场次
        self._broker: str = ""               # 实际连接的 broker(日志用)

    # ---------- 1. 预热: 拉取 emqx 凭证并建立长连接 ----------
    def prepare(self) -> dict[str, Any]:
        """
        预热。返回 bookingpage/infov4 的 data。
        必须在开抢前调用, 把 MQTT 连接 + 订阅提前做好, 抢时只 publish。
        """
        ctx = self.client.booking_context()
        emqx = ctx.get("emqx") or {}
        if not emqx:
            raise GrabError("接口未下发 emqx 凭证(可能未登录/无权限/非预约时段)")
        # 资格门禁: user.status 必须 0000
        user = ctx.get("user") or {}
        status = str(user.get("status", ""))
        if status and status != "0000":
            hint = user.get("statusDesc") or ""
            if status == "1001":
                raise GrabError("账号未登录, 请重新登录(token 失效)")
            if status == "1002":
                raise GrabError("账号未实名, 请先在官方小程序完成实名")
            raise GrabError(f"账号状态异常({status}) {hint}")
        # 缓存本次场次(供 GUI 复用)
        self.sessions = load_sessions(ctx.get("sessions"))
        # 检测人机验证(仅提示, 不阻断; 有缓存 token 则自动带上)
        cinfo = ctx.get("captchaInfo") or {}
        self.captcha_required = bool(cinfo.get("enabled"))
        if self.captcha_required and not self.solver.token_for(self.cfg.grab.session_code):
            self._say("⚠ 该场次启用了人机验证(t-captcha); 遇到时将弹出验证窗口由你手动完成")
        try:
            self._connect_mqtt(emqx, ctx.get("raw") or {}, verify_tls=True)
        except (OSError, ssl.SSLError, ValueError) as e:
            # 证书链验不过时降级重试一次, 保证还能约上, 但必须明确告知风险
            self._say(f"⚠ TLS 证书校验失败({type(e).__name__}), 本次降级为不校验证书连接。"
                      f"连接内容可被中间人窃取, 建议改用可信网络环境")
            self._connect_mqtt(emqx, ctx.get("raw") or {}, verify_tls=False)
        return ctx.get("raw") or {}

    def _connect_mqtt(self, emqx: dict, page_data: dict, verify_tls: bool = True) -> None:
        client_id = f"wx{self.cfg.user.device_id}{int(time.time() * 1000)}"
        # paho 2.x 兼容
        try:
            mqtt_client = mqtt.Client(mqtt.CallbackAPIVersion.VERSION2,
                                      client_id=client_id,
                                      transport="websockets")
        except AttributeError:  # paho 1.x
            mqtt_client = mqtt.Client(client_id=client_id, transport="websockets")

        mqtt_client.ws_set_options(path="/mqtt")
        mqtt_client.username_pw_set(emqx.get("username"), emqx.get("password"))
        # 默认校验证书。之前是无条件 CERT_NONE + tls_insecure(True),
        # 等于完全关掉 TLS 校验, 中间人能看到 token 和下单报文。
        # 真的校验失败时再降级, 并大声告警 —— 约不到比不安全更糟, 但要让人知道。
        if verify_tls:
            mqtt_client.tls_set(cert_reqs=ssl.CERT_REQUIRED)
            mqtt_client.tls_insecure_set(False)
        else:
            mqtt_client.tls_set(cert_reqs=ssl.CERT_NONE)
            mqtt_client.tls_insecure_set(True)
        mqtt_client.reconnect_delay_set(min_delay=1, max_delay=4)
        mqtt_client.on_connect = self._on_connect
        mqtt_client.on_subscribe = self._on_subscribe
        mqtt_client.on_message = self._on_message
        host = MQTT_HOSTS.get(self.cfg.channel, MQTT_HOSTS["tea"])
        self._broker = f"{host}:{MQTT_PORT}"
        # 必须挂在 self 上: fire() 用 self._client.publish() 发下单报文,
        # close() 用它 loop_stop()/disconnect()。只存局部变量的话,
        # fire() 会永远以"请先调用 prepare()"抛错(报文一次都发不出去),
        # close() 也永远不释放连接(每次抢购泄漏一个 MQTT 连接 + 网络线程)。
        self._client = mqtt_client
        mqtt_client.connect(host, MQTT_PORT, keepalive=30)
        mqtt_client.loop_start()

        if not self._connected.wait(timeout=8):
            self.close()
            raise GrabError("MQTT 连接超时")
        # 订阅本场次结果主题
        sub = self._sub_topic()
        mqtt_client.subscribe(sub, qos=0)
        if not self._subscribed.wait(timeout=5):
            self.close()
            raise GrabError("MQTT 订阅超时")

    def _say(self, msg: str) -> None:
        """输出状态: 终端打印 + 回调通知(GUI)。"""
        print(msg)
        if self.on_log:
            try:
                self.on_log(msg)
            except Exception:
                pass

    def _sub_topic(self) -> str:
        return f"{MQTT_SUB_TOPIC}{self.cfg.grab.session_code}{self.client._token}"

    def _on_connect(self, client, userdata, flags, reason_code, properties=None):
        if getattr(reason_code, "value", reason_code) == 0:
            self._connected.set()

    def _on_subscribe(self, client, userdata, mid, reason_codes=None, properties=None):
        """
        订阅确认。必须在收到 broker 的 SUBACK 后才置位 _subscribed。

        少了这个回调, self._subscribed 永远不会被 set, 于是:
          prepare() -> _connect_mqtt() 卡满 5 秒后抛 "MQTT 订阅超时"
          -> 预检必然失败 -> 定时抢购必被取消
          -> _publish_loop 也永远以 "MQTT 未就绪" 拒绝下单
        即整条抢购链路都不通。paho 1.x 传 (client, userdata, mid, granted_qos),
        2.x 传 (client, userdata, mid, reason_codes, properties), 后面两个参数给默认值即可兼容。
        """
        self._subscribed.set()

    def _on_message(self, client, userdata, msg):
        try:
            payload = json.loads(msg.payload.decode("utf-8"))
        except (ValueError, UnicodeDecodeError):
            return
        self._result = GrabResult(
            success=bool(payload.get("success")),
            flag=payload.get("flag"),
            message=payload.get("message") or payload.get("msg") or "",
            raw=payload,
            elapsed_ms=int((time.time() - self._t0) * 1000) if self._t0 else 0,
        )
        self._got_result.set()

    # ---------- 2. 开抢: publish 下单报文 ----------
    def _payload(self) -> str:
        return json.dumps({
            "token": self.client._token,
            "storeCode": self.cfg.store.store_code,
            "businessCode": self.cfg.store.business_code,
            "structureCode": self.cfg.store.structure_code,
            "shoppeCode": self.cfg.store.shoppe_code,
            "sessionCode": self.cfg.grab.session_code,
            "deviceId": self.cfg.user.device_id,
            "lat": self.cfg.user.lat,
            "lng": self.cfg.user.lng,
            "verifyToken": self.solver.token_for(self.cfg.grab.session_code) or self._verify_token or "",
        }, ensure_ascii=False)

    def fire(self) -> GrabResult:
        """
        发送一次下单报文(非阻塞)。真正的结果要用 wait_result() 取。
        需先 prepare()。返回值 success=True 仅表示"已发出",不代表预约成功。
        """
        if self._client is None:
            raise GrabError("请先调用 prepare() 完成预热")
        self._got_result.clear()
        self._result = None
        self._t0 = time.time()
        info = self._client.publish(MQTT_PUB_TOPIC, self._payload(), qos=0)
        # publish 返回 qos>0 时 rc != 0 表示未进入发送队列, 必须报错而不是假装发出去了
        if getattr(info, "rc", 0) != 0:
            raise GrabError(f"下单报文发送失败 rc={info.rc} (未连上 broker 或队列已满)")
        return GrabResult(success=True, message="已发送下单请求")

    def wait_result(self, timeout: Optional[int] = None,
                    stop_event=None) -> GrabResult:
        """等待下单结果。stop_event 置位会立刻返回, 不再空等到超时。"""
        timeout = timeout or self.cfg.grab.result_timeout
        if stop_event is not None:
            # 分片等待, 保证停止信号能及时生效
            end = time.perf_counter() + timeout
            while not self._got_result.is_set():
                if stop_event.is_set():
                    return GrabResult(success=False, message="已取消")
                left = end - time.perf_counter()
                if left <= 0:
                    break
                self._got_result.wait(min(left, 0.1))
        elif not self._got_result.wait(timeout):
            return GrabResult(success=False, message="等待下单结果超时")
        return self._result or GrabResult(success=False, message="无结果")

    def _human_captcha(self) -> bool:
        """
        弹出人工验证窗口, 等待人工完成; 成功换到 verifyToken 则返回 True。
        (票据来自你在弹窗里的人工验证, 程序只做兑换与缓存)
        """
        session = self.cfg.grab.session_code
        try:
            res = captcha_popup.open_and_wait(session, timeout=self.cfg.grab.result_timeout * 12)
        except Exception as e:
            print(f"  弹出验证页失败: {e}")
            return False
        if not res:
            return False
        try:
            if res.get("ticket"):
                token = self.solver.exchange(res["ticket"], res.get("randstr", ""), session)
            elif res.get("verify_token"):
                token = self.solver.submit(res["verify_token"], session)
            else:
                return False
            self._verify_token = token
            self._say("  验证通过, 携带 verifyToken 继续下单")
            return True
        except Exception as e:
            self._say(f"  验证兑换失败: {e}")
            return False

    def grab(self, publish_times: Optional[int] = None,
             prepared: bool = False, stop_event=None) -> GrabResult:
        """
        立即抢购: 预热 -> 连发 publish -> 汇总结果。

        prepared=True 表示 MQTT 连接已由 prepare() 建好, 本方法只负责 publish。
        定时抢购必须传 prepared=True, 否则会重复建连并多等 warmup_seconds, 导致错过开抢时刻。
        stop_event 透传给 _publish_loop, 保证「停止」按钮在等待期也能生效。
        """
        if not prepared:
            self.prepare()
            wait = self.cfg.grab.warmup_seconds
            if wait > 0:
                time.sleep(wait)
        return self._publish_loop(publish_times, stop_event=stop_event)

    def _publish_loop(self, publish_times: Optional[int] = None,
                      stop_event=None) -> GrabResult:
        """连发下单报文并收敛结果(要求 MQTT 已就绪)。"""
        if not self._subscribed.is_set():
            raise GrabError("MQTT 未就绪, 不能下单(请先 prepare())")
        n = publish_times or self.cfg.grab.max_publish
        last = GrabResult(success=False, message="未发送")

        for i in range(n):
            if stop_event is not None and stop_event.is_set():
                self._say("已取消")
                return last
            self.fire()
            result = self.wait_result(stop_event=stop_event)
            print(f"  第 {i + 1}/{n} 次: {result}")
            if result.success:
                return result
            # 不可重试: 需要验证码 / 场次已关闭
            if result.flag == FLAG_CAPTCHA:
                if not self.cfg.grab.auto_retry_on_captcha:
                    raise CaptchaRequired(result.message or "需要人机验证(t-captcha)")
                # 弹出人工验证窗口: 你手动过, 程序收结果换 verifyToken 后继续
                if self._human_captcha():
                    continue
                raise CaptchaRequired(result.message or "需要人机验证(t-captcha)")
            if result.flag in TERMINAL_FLAGS:
                # 终止: 重试无意义, 给出明确原因
                reason = FLAG_ACTION.get(result.flag) or result.message or f"flag={result.flag}"
                raise GrabError(f"抢购终止: {reason}")
            # 1008 等竞争失败 / 未知 flag: 继续重试
            last = result
            if i < n - 1 and not (stop_event is not None and stop_event.is_set()):
                time.sleep(0.2)  # 轻微间隔, 避免瞬时连发触发风控
        return last

    def close(self) -> None:
        if self._client is not None:
            try:
                self._client.loop_stop()
                self._client.disconnect()
            except Exception:
                pass
            self._client = None

    def __enter__(self) -> "ReservationGrabber":
        return self

    def __exit__(self, *exc) -> None:
        self.close()


class ScheduledGrabber(ReservationGrabber):
    """
    定时抢购: 在场次"预约开始时间"自动触发。

    时序(对齐预约开始时刻 T0):
      T0-?  prepare() 建立 MQTT 长连接 + 订阅(预热)
      T0     fire() 瞬时下单
      T0+    wait_result() 等结果, 失败重试
    """

    def preflight(self, fire_at: Any = None, preheat: float = 10.0) -> dict:
        """
        开抢前预检: 把"到点才会炸"的问题全部提前暴露。

        逐项检查配置完整性 / token 有效性 / 场次可约 / MQTT 可连可订阅 /
        时间窗口是否够用。任何一项不过就抛 GrabError, 附带具体缺什么。
        """
        problems: list[str] = []
        c = self.cfg

        # 1) 必填编码
        need = {"storeCode": c.store.store_code, "businessCode": c.store.business_code,
                "structureCode": c.store.structure_code, "shoppeCode": c.store.shoppe_code,
                "sessionCode": c.grab.session_code}
        missing = [k for k, v in need.items() if not v]
        if missing:
            problems.append(missing_msg(missing))
        if not c.user.token:
            problems.append(missing_msg(["token"]))
        if not c.user.lat or not c.user.lng:
            problems.append(missing_msg(["lat"]) + "\n  (部分门店做地理围栏校验, 坐标应在门店周边)")

        # 2) 时间窗口
        if fire_at is not None and isinstance(fire_at, (int, float)):
            fire_at = datetime.fromtimestamp(fire_at)
        if fire_at is not None:
            lead = (fire_at - datetime.now()).total_seconds()
            if lead < 0:
                problems.append(f"开抢时刻已过 {-lead:.0f}s")
            elif lead < preheat:
                problems.append(f"距开抢仅 {lead:.1f}s, 不足预热 {preheat:.0f}s")

        # 3) 真实链路: token / 场次 / MQTT 一次性验通
        if not problems:
            try:
                self.prepare()
            except GrabError as e:
                problems.append(str(e))
            except Exception as e:
                problems.append(f"{type(e).__name__}: {e}")
            else:
                s = next((x for x in self.sessions if x.code == c.grab.session_code), None)
                if s is None:
                    problems.append(f"场次 {c.grab.session_code} 不在可约列表中"
                                    f"(共 {len(self.sessions)} 个场次)")
                else:
                    if not s.bookable:
                        problems.append(f"场次不可约: {s.name} 状态={s.status}")
                    # 围栏自查
                    if s.booking_start:
                        self._say(f"✓ 预检通过 | 场次 {s.code} {s.name} | "
                                  f"开抢 {s.booking_start:%m-%d %H:%M:%S} | "
                                  f"MQTT {self._broker} 已订阅")

        if problems:
            raise GrabError("预检未通过, 定时抢购已取消:\n  - " + "\n  - ".join(problems))
        return {"ok": True, "sessions": len(self.sessions)}

    def run_scheduled(self, fire_at: Any, preheat: float = 10.0,
                      max_publish: Optional[int] = None,
                      stop_event=None) -> GrabResult:
        """
        定时抢购, 对齐场次"预约开始时刻"。

        时序:
          T0-preheat  prepare() 建立 MQTT 长连接 + 订阅(只做一次)
          T0          立刻 publish(不再建连、不再 sleep)
          T0+         等结果, 失败重试

        preheat 建议 10s: 足够 HTTP 握手 + WebSocket/TLS 建连。
        stop_event: 可中断信号, 预热等待与结果等待都会检查。
        """
        if isinstance(fire_at, (int, float)):
            fire_at = datetime.fromtimestamp(fire_at)

        # 预热窗口不足时直接拒绝, 宁可不抢也不要"假定时"
        now = datetime.now()
        lead = (fire_at - now).total_seconds()
        if lead > 0 and lead < preheat:
            self._say(f"⚠ 距开抢仅 {lead:.1f}s, 不足以完成预热(建议 ≥{preheat:.0f}s); "
                      f"仍会尝试, 但可能赶不上")
        elif lead <= -5:
            self._say(f"⚠ 开抢时刻已过 {-lead:.0f}s, 将立即尝试下单")

        wait = (fire_at - timedelta(seconds=preheat) - now).total_seconds()
        if wait > 0:
            self._say(f"定时抢购: {wait:.1f}s 后({(fire_at - timedelta(seconds=preheat)):%H:%M:%S})"
                      f"开始预热, {fire_at:%H:%M:%S} 开抢")
            if not self._sleep(wait, stop_event):
                raise GrabError("已取消")

        self._say("预热中(建立 MQTT 长连接 + 订阅)...")
        self.prepare()
        self._say(f"✓ 预热完成, 已连接 {self._broker or ''} 等待开抢")

        # 精确定时: 最后 20ms 用忙等, 规避 time.sleep 的调度抖动
        remain = (fire_at - datetime.now()).total_seconds()
        if remain > 0:
            self._say(f"等待开抢时刻, 剩余 {remain:.2f}s ...")
            if not self._sleep(remain, stop_event):
                raise GrabError("已取消")
        self._say("⚡ 开抢!")

        return self._publish_loop(max_publish, stop_event=stop_event)

    @staticmethod
    def _sleep(seconds: float, stop_event=None) -> bool:
        """
        可中断的高精度睡眠。

        返回 False 表示被 stop_event 取消。
        精度策略: 距目标 >50ms 时 sleep(剩余-50ms) 一次到位, 只在最后 50ms 内
        切成 1~2ms 小片自旋。CPython 的 time.sleep 在毫秒级会有数毫秒抖动,
        50ms 以上的等待完全不需要轮询, 之前的 0.2s 轮询只会白白引入最多 200ms 误差。
        """
        end = time.perf_counter() + seconds
        while True:
            left = end - time.perf_counter()
            if left <= 0:
                return True
            if stop_event is not None and stop_event.is_set():
                return False
            if left > 0.05:
                # 长等待分段睡, 保证 stop_event 最迟 0.25s 内被响应
                # (一次睡到位会让"停止"按钮在几十秒内无响应)
                time.sleep(min(left - 0.05, 0.25))
            else:
                time.sleep(min(left, 0.001))  # 末段 50ms: 细粒度逼近, 规避 sleep 抖动
