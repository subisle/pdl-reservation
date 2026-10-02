"""
场次(Session)模型: 解析预约场次的时间字段, 供定时抢购对齐。

逆向字段 (bookingpage/listOfSession):
  code/sessionCode      场次编码
  bookingStartTime      预约(抢购)开始时间  <- 定时抢购的触发时刻
  bookingEndTime        预约结束时间
  entranceStartTime     入场开始时间
  entranceEndTime       入场结束时间
  bookingDate/entranceDate  日期
  status                inner=可约, 其他=不可约
"""
from __future__ import annotations

import re
from dataclasses import dataclass, field
from datetime import datetime, timedelta
from typing import Any, Optional

_TS_RE = re.compile(r"(\d{4}-\d{2}-\d{2}[ T]\d{2}:\d{2}(:\d{2})?)?")


def parse_time(v: Any) -> Optional[datetime]:
    """把接口返回的时间字段解析为 datetime。兼容时间戳(秒/毫秒)与字符串。"""
    if v in (None, "", 0):
        return None
    if isinstance(v, datetime):
        return v
    if isinstance(v, (int, float)):
        n = float(v)
        if n > 1e12:      # 毫秒
            n /= 1000.0
        if n <= 0:
            return None
        return datetime.fromtimestamp(n)
    s = str(v).strip()
    # 纯数字时间戳
    if s.isdigit():
        return parse_time(int(s))
    m = _TS_RE.search(s)
    if not m:
        return None
    txt = m.group(0).replace("T", " ")
    for fmt in ("%Y-%m-%d %H:%M:%S", "%Y-%m-%d %H:%M"):
        try:
            return datetime.strptime(txt, fmt)
        except ValueError:
            continue
    return None


# 服务端若直接给了显式可约标记/剩余量, 优先采信(比 status 文案更硬)
_BOOKABLE_KEYS = ("bookable", "isBookable", "canBook", "bookableCount", "surplusCount")

# 不可约的 status 取值 —— 这是从小程序源码逐字反查出来的权威判定:
#   chunk_34/25/16.appservice.js:
#     if ("after" !== i.status && "full" !== i.status
#         && "zyyy" !== i.status && "zwzg" !== i.status) { /* 可预约 */ }
#
# 两个关键点:
#   1) 是**黑名单**不是白名单 —— 只要 status 不在这四个值里就是可约,
#      所以不能用 "status in (某几个白名单值)" 的写法, 否则会漏掉大量正常场次。
#   2) 旧实现写的 status == "inner" 是误读: 整个解包源码里 "inner" 出现 498 次,
#      但全部是 CSS 类名(如 "xxx-inner")和 innerScrollTop, 与场次状态无关。
NOT_BOOKABLE_STATUS = {"after", "full", "zyyy", "zwzg"}


def is_bookable(raw: dict) -> bool:
    """
    从原始场次字典判断是否可约, 规则与小程序完全一致。

    显式布尔/剩余量字段优先; 否则按 status 黑名单判定。
    空 status 按可约处理 —— 与小程序 `"" !== "after" && ...` 的结果一致。
    """
    for k in _BOOKABLE_KEYS:
        v = raw.get(k)
        if isinstance(v, bool):
            return v
        if isinstance(v, (int, float)):
            return v > 0
    return str(raw.get("status") or "").strip().lower() not in NOT_BOOKABLE_STATUS


@dataclass
class Session:
    code: str
    name: str = ""
    status: str = ""
    status_desc: str = ""           # 服务端状态文案(小程序直接显示它, 不要自造中文)
    booking_start: Optional[datetime] = None
    booking_end: Optional[datetime] = None
    entrance_start: Optional[datetime] = None
    entrance_end: Optional[datetime] = None
    end_ts: Optional[datetime] = None   # endTimestamp(倒计时用)
    date: str = ""                       # datemap 的日期键
    raw: dict = field(default_factory=dict)
    # 由 from_api 按 is_bookable() 统一判定; 直接构造时默认 True(未知不等于约满)
    bookable: bool = True

    @property
    def fire_at(self) -> Optional[datetime]:
        """定时抢购的触发时刻 = 预约开始时间。"""
        return self.booking_start

    def seconds_until_start(self, now: Optional[datetime] = None) -> Optional[float]:
        now = now or datetime.now()
        if self.fire_at is None:
            return None
        return (self.fire_at - now).total_seconds()

    @classmethod
    def from_api(cls, d: dict) -> "Session":
        return cls(
            code=str(d.get("code") or d.get("sessionCode") or ""),
            name=str(d.get("name") or d.get("sessionName") or ""),
            status=str(d.get("status") or ""),
            status_desc=str(d.get("statusDesc") or d.get("statusDescription") or ""),
            booking_start=parse_time(d.get("bookingStartTime")),
            booking_end=parse_time(d.get("bookingEndTime")),
            entrance_start=parse_time(d.get("entranceStartTime")),
            entrance_end=parse_time(d.get("entranceEndTime")),
            end_ts=parse_time(d.get("endTimestamp")),
            date=str(d.get("date") or ""),
            raw=d,
            bookable=is_bookable(d),
        )


def load_sessions(list_data: Any) -> list[Session]:
    """把 listOfSession 返回(可能是 {list:[...]} 或 [...])解析为 Session 列表。"""
    if isinstance(list_data, dict):
        items = list_data.get("list") or list_data.get("sessions") or []
    elif isinstance(list_data, list):
        items = list_data
    else:
        items = []
    return [Session.from_api(i) for i in items if isinstance(i, dict) and
            (i.get("code") or i.get("sessionCode"))]
