"""
地理工具 —— 经纬度自动对齐到品类围栏。

逆向发现: 门店列表接口返回的 businesslist[].fenceRange 里带着**门店真实坐标**
和围栏半径, 服务端下单时会校验距离。所以坐标不该由用户随手填, 而应该
跟着「门店 + 品类」自动走:

    茶叶(天使城)  -> 34.036053, 113.846651  围栏 50km
    茶叶(时代广场) -> 34.018280, 113.833242  围栏 50km
    医药(二胖店)  -> 35.298586, 113.870255  围栏 100km

另外做 ±随机偏移: 每次都精确落在围栏正中心反而像脚本, 在围栏内随机偏移
几十米既能过距离校验, 又不重复。
"""
from __future__ import annotations

import math
import random
from typing import Optional

EARTH_R = 6371000.0  # 米


def haversine(lat1: float, lng1: float, lat2: float, lng2: float) -> float:
    """两点球面距离(米)。"""
    p1, p2 = math.radians(lat1), math.radians(lat2)
    dp = math.radians(lat2 - lat1)
    dl = math.radians(lng2 - lng1)
    a = math.sin(dp / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2
    return 2 * EARTH_R * math.asin(math.sqrt(a))


def offset(lat: float, lng: float, meters: float, bearing_deg: Optional[float] = None) -> tuple[float, str]:
    """从 (lat,lng) 沿某方位角前进 meters 米, 返回新坐标。"""
    br = math.radians(random.uniform(0, 360) if bearing_deg is None else bearing_deg)
    dlat = (meters * math.cos(br)) / EARTH_R
    dlng = (meters * math.sin(br)) / (EARTH_R * math.cos(math.radians(lat)))
    return round(lat + math.degrees(dlat), 6), round(lng + math.degrees(dlng), 6)


def in_fence(lat: str, lng: str, center_lat: str, center_lng: str, radius_m: int) -> tuple[bool, float]:
    """
    判断坐标是否在品类围栏内。返回 (是否通过, 距中心米数)。
    center/radius 为空时视为无围栏 -> 通过。
    """
    try:
        la, ln = float(lat), float(lng)
        cla, cln = float(center_lat), float(center_lng)
    except (TypeError, ValueError):
        return False, float("inf")
    if not radius_m or radius_m <= 0:
        return True, haversine(la, ln, cla, cln)
    return haversine(la, ln, cla, cln) <= radius_m, haversine(la, ln, cla, cln)


def auto_coord(center_lat: str, center_lng: str, radius_m: int,
               jitter: bool = True) -> tuple[str, str]:
    """
    自动生成"合规坐标": 优先取品类围栏中心, 可选在围栏内随机偏移。

    偏移量取 min(围栏半径 * 5%, 800m) 且不超过 1.5km —— 既稳稳在围栏内,
    又不会每次重复。半径为 0 (无围栏) 时偏移 0, 直接用中心。
    """
    if not center_lat or not center_lng:
        return "", ""
    if not jitter or not radius_m:
        return center_lat, center_lng
    # 限制在 1.5km 内, 相对大围栏(100km)也足够随机
    span = min(radius_m * 0.05, 1500.0)
    la, ln = offset(float(center_lat), float(center_lng), random.uniform(0, span))
    return f"{la:.6f}", f"{ln:.6f}"


def fence_text(lat: str, lng: str, biz) -> tuple[str, bool, str]:
    """
    生成围栏状态文案。返回 (文案, 是否通过, 颜色键)。
    biz 需具备 center_lat / center_lng / radius_m / title / fence。
    """
    if not getattr(biz, "fence", False):
        return f"{biz.title}无围栏", True, "text3"
    ok, dist = in_fence(lat, lng, biz.center_lat, biz.center_lng, biz.radius_m)
    rkm = biz.radius_m / 1000
    dkm = dist / 1000 if dist != float("inf") else 999
    if not biz.center_lat:
        return f"{biz.title}限{rkm:.0f}km · 未取到门店坐标", False, "danger"
    if ok:
        return f"{biz.title} · 距门店 {dkm:.2f}km / 限 {rkm:.0f}km ✓", True, "ok"
    return f"{biz.title} · 距门店 {dkm:.2f}km / 限 {rkm:.0f}km ✗ 超出围栏", False, "danger"
