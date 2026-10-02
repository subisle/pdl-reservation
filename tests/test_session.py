"""
场次解析回归测试 —— 判定规则必须与小程序源码逐字一致。

    PYTHONPATH=. .venv/bin/python tests/test_session.py

权威依据 (xcx/wxacf764ecf6bcc1f5_unpacked/packageAssets/chunk_34.appservice.js):
    if ("after" !== s.status && "full" !== s.status
        && "zyyy" !== s.status && "zwzg" !== s.status) { /* 可预约 */ }
"""
import sys, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))

from pdl_grab.session import (NOT_BOOKABLE_STATUS, Session, is_bookable,
                              load_sessions, parse_time)

FAILS = []
def check(name, cond, detail=""):
    print(f"  {'PASS' if cond else 'FAIL'}  {name}  {detail}")
    if not cond: FAILS.append(name)

# 小程序里的原判定, 逐字照抄作为对照实现
def app_bookable(status):
    return status not in ("after", "full", "zyyy", "zwzg")

print("\n[1] 可约判定与小程序逐条对齐")
for st in ["after", "full", "zyyy", "zwzg", "before", "nearby", "", "normal", "inner", "1", None]:
    got = is_bookable({"status": st} if st is not None else {})
    want = app_bookable(st or "")
    check(f"status={st!r:9}", got == want, f"本程序={got} 小程序={want}")

print("\n[2] 黑名单而非白名单 (旧实现 status=='inner' 是误读)")
check("'inner' 属于可约(源码里 inner 全是 CSS 类名)", is_bookable({"status": "inner"}))
check("未知新状态默认可约, 不会误杀", is_bookable({"status": "someNewState"}))
check("黑名单集合正确", NOT_BOOKABLE_STATUS == {"after", "full", "zyyy", "zwzg"})

print("\n[3] 显式字段优先于 status")
check("bookable=False 覆盖 status", is_bookable({"status": "", "bookable": False}) is False)
check("bookableCount=0 不可约", is_bookable({"status": "", "bookableCount": 0}) is False)
check("bookableCount=3 可约", is_bookable({"status": "full", "bookableCount": 3}) is True)

print("\n[4] Session 解析")
ss = load_sessions({"list": [
    {"code": "A1", "name": "上午场", "status": "", "statusDesc": "可预约",
     "bookingStartTime": "2026-09-28 10:00:00"},
    {"code": "B1", "name": "下午场", "status": "full", "statusDesc": "已约满",
     "bookingStartTime": "2026-09-28 15:00:00"},
]})
check("解析出 2 个场次", len(ss) == 2, f"实得 {len(ss)}")
check("A1 可约", ss[0].bookable is True)
check("B1 不可约", ss[1].bookable is False)
check("带出服务端 statusDesc", ss[1].status_desc == "已约满", ss[1].status_desc)
check("fire_at = bookingStartTime", str(ss[0].fire_at) == "2026-09-28 10:00:00", str(ss[0].fire_at))

print("\n[5] parse_time 边界")
check("垃圾串 -> None", parse_time("garbage") is None)
check("0/空 -> None", parse_time(0) is None and parse_time("") is None)
check("T 分隔", str(parse_time("2026-09-28T10:00:00")) == "2026-09-28 10:00:00")
check("无秒补齐", str(parse_time("2026-09-28 10:00")) == "2026-09-28 10:00:00")
check("秒/毫秒时间戳一致", parse_time(1780000000) == parse_time(1780000000000))

print("\n" + "=" * 50)
print("全部通过 ✓" if not FAILS else f"失败 {len(FAILS)} 项: {FAILS}")
sys.exit(1 if FAILS else 0)
