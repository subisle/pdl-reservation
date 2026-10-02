"""
城市预设 —— 经纬度不再手填, 直接选城市。

门店列表接口 bookingpage/homev2 是按经纬度返回附近门店的, 所以
"选城市" 本质上就是 "填经纬度"。这里把常用城市的坐标固化下来。

注意: 胖东来 5 家门店(天使城/时代广场/大胖/二胖/三胖)全部位于
许昌市区。茶叶预约带 50km 电子围栏(逆向自 businesslist[].fenceRange),
站在郑州(距许昌 65~83km)会超出围栏导致下单被服务端拒绝。
"""
from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class City:
    name: str
    lat: str
    lng: str
    note: str = ""


# 逆向自实际接口返回的门店距离: 郑州 -> 大胖店 65km
CITIES: list[City] = [
    City("许昌市", "34.035700", "113.883800", "5 家门店均在许昌, 推荐"),
    City("郑州市", "34.746600", "113.625400", "距门店 65~83km, 茶叶预约会超 50km 围栏"),
]

DEFAULT_CITY = CITIES[0].name

_BY_NAME = {c.name: c for c in CITIES}


def get_city(name: str) -> City:
    return _BY_NAME.get((name or "").strip()) or CITIES[0]


def city_names() -> list[str]:
    return [c.name for c in CITIES]
