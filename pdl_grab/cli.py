"""
统一命令行入口。

    python -m pdl_grab.cli web                 # 本地 Web UI (推荐, 双击 胖东来预约.app 同效)
    python -m pdl_grab.cli init                 # 生成配置模板
    python -m pdl_grab.cli web [--port 8765]         # 本地 Web UI, 双击 胖东来预约.app 同效
    python -m pdl_grab.cli catalog [--city 郑州市]   # 真实数据目录(无需 token)
    python -m pdl_grab.cli stores [--city 郑州市]   # 列门店+品类(无需 token)
    python -m pdl_grab.cli tree                    # 城市→门店→品类→业态→分类
    python -m pdl_grab.cli sessions             # 列出目标门店可约场次
    python -m pdl_grab.cli my                  # 我的预约
    python -m pdl_grab.cli grab                # 门店预约抢购(MQTT)
    python -m pdl_grab.cli maotai [--times N]  # 茅台抽签
"""
from __future__ import annotations

import argparse
import json
import sys

from .client import PDLClient
from .config import dump_template, load_config
from .discover import print_stores, print_tree
from .errors import AuthError, CaptchaRequired, PDLException
from .maotai import MaotaiLottery
from .mqtt_grab import ReservationGrabber


def _load(args):
    cfg = load_config(args.config)
    if getattr(args, "area", None):
        pass
    return cfg


def cmd_init(args):
    path = args.config or "config.json"
    dump_template(path)
    print(f"已生成配置模板: {path}")



def cmd_web(args):
    from .web import serve
    serve(host=args.host, port=args.port, open_browser=not args.no_browser)


def cmd_stores(args):
    cfg = _load(args)
    print_stores(cfg, args.city or "")


def cmd_catalog(args):
    """打印真实数据目录(无需 token)。"""
    from .catalog import fetch, to_stores
    from .regions import get_city
    c = get_city(args.city or "")
    d = fetch(c.lat, c.lng, c.name, _load(args), use_cache=not args.refresh)
    print(f"城市 {c.name}  lat={c.lat} lng={c.lng}")
    print(f"区域: " + ", ".join(f"{a['name']}({a['code']})" for a in d["areas"]))
    print("品类入口: " + ", ".join(
        f"{x['name']}({x['code']}){'可约' if x['bookable'] else '未开放'}" for x in d["departments"]))
    print(f"门店 {len(d['stores'])} 家:")
    for st in to_stores(d):
        print(f"  {st.title}  storeCode={st.code}  {st.pos}")
        for b in st.businesses:
            fence = f"  围栏{b.radius_m}m" if b.fence else ""
            print(f"      {b.title}  businessCode={b.code}{fence}")


def cmd_tree(args):
    cfg = _load(args)
    print_tree(cfg, args.city or "")


def cmd_sessions(args):
    cfg = _load(args)
    client = PDLClient(cfg)
    data = client.list_of_session().get("data")
    print(json.dumps(data, ensure_ascii=False, indent=2))


def cmd_my(args):
    cfg = _load(args)
    client = PDLClient(cfg)
    print(json.dumps(client.my_booking_page().get("data"), ensure_ascii=False, indent=2))


def cmd_grab(args):
    cfg = _load(args)
    cfg.validate()
    with ReservationGrabber(cfg) as grabber:
        print("预热中(建立 MQTT 长连接)...")
        info = grabber.prepare()
        sess = _dig_session(info)
        print(f"已连接并订阅: session={sess or cfg.grab.session_code}")
        print(f"开始抢购 (最多 {cfg.grab.max_publish} 次)...")
        # prepared=True: 上面已经建好连接, 别再重复预热 + 多等 warmup_seconds
        result = grabber.grab(publish_times=args.times, prepared=True)
        print("结果:", result)


def _dig_session(info):
    for k in ("curSession", "session", "sessionInfo"):
        if isinstance(info, dict) and isinstance(info.get(k), dict):
            return info[k].get("code")
    return None


def cmd_maotai(args):
    cfg = _load(args)
    lottery = MaotaiLottery(cfg)
    try:
        print("剩余抽签次数:", lottery.remain_times())
    except PDLException as e:
        print("查询次数失败:", e)
    results = lottery.grab(times=args.times)
    print(json.dumps(results, ensure_ascii=False, indent=2))


def main(argv=None):
    p = argparse.ArgumentParser(prog="pdl_grab", description="胖东来预约抢购客户端")
    p.add_argument("-c", "--config", help="配置文件路径(默认 config.json 或 $PDL_CONFIG)")
    sub = p.add_subparsers(dest="cmd", required=True)

    sub.add_parser("init", help="生成配置模板").set_defaults(func=cmd_init)
    sp = sub.add_parser("web", help="启动本地 Web UI 并打开浏览器")
    sp.add_argument("--host", default="127.0.0.1")
    sp.add_argument("--port", type=int, default=8765)
    sp.add_argument("--no-browser", action="store_true")
    sp.set_defaults(func=cmd_web)

    sp = sub.add_parser("stores", help="列出某城市附近门店与可预约品类(无需 token)")
    sp.add_argument("--city", default="", help="城市名, 默认许昌市")
    sp.set_defaults(func=cmd_stores)

    sp = sub.add_parser("catalog", help="打印真实数据目录: 区域/品类/门店/围栏(无需 token)")
    sp.add_argument("--city", default="", help="城市名, 默认许昌市")
    sp.add_argument("--refresh", action="store_true", help="忽略缓存强制刷新")
    sp.set_defaults(func=cmd_catalog)

    sp = sub.add_parser("tree", help="打印完整预约树(业态/分类/场次需 token)")
    sp.add_argument("--city", default="", help="城市名, 默认许昌市")
    sp.set_defaults(func=cmd_tree)

    sub.add_parser("sessions", help="列出可约场次").set_defaults(func=cmd_sessions)
    sub.add_parser("my", help="我的预约").set_defaults(func=cmd_my)

    sp = sub.add_parser("grab", help="门店预约抢购")
    sp.add_argument("--times", type=int, default=None, help="发送次数")
    sp.set_defaults(func=cmd_grab)

    sp = sub.add_parser("maotai", help="茅台抽签")
    sp.add_argument("--times", type=int, default=5, help="触发次数")
    sp.set_defaults(func=cmd_maotai)

    args = p.parse_args(argv)
    try:
        args.func(args)
    except AuthError as e:
        print("认证失败(token 失效):", e, file=sys.stderr)
        sys.exit(2)
    except CaptchaRequired as e:
        print("需要人机验证:", e, file=sys.stderr)
        print("请在官方小程序完成验证后, 把 verifyToken 填入配置再重试。", file=sys.stderr)
        sys.exit(3)
    except PDLException as e:
        print("错误:", e, file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
