"""
预约目标发现: 城市 -> 门店 -> 品类 -> 业态 -> 分类 -> 场次。

实测结论(2026-09, 无需 token 即可跑通前三层):
    1. 附近门店  bookingpage/homev2   {lat,lng}  -> storelist[].businesslist[]
    2. 业态/分类  bookingpage/listv3   {storeCode,businessCode,struCode} -> 需真实 token
    3. 场次       bookingpage/infov4   {storeCode,shoppeCode,...} -> 需真实 token

字段名注意: 接口返回的是 `title`, 不是 `name`(旧版实现按 name 取会全拿到 None)。

用法:
    python -m pdl_grab.cli stores                 # 按默认城市列门店
    python -m pdl_grab.cli stores --city 郑州市
    python -m pdl_grab.cli tree                    # 打印完整预约树(需 token)
"""
from __future__ import annotations

import json
from dataclasses import dataclass, field
from typing import Any, Optional

from .client import PDLClient
from .config import AppConfig
from .regions import CITIES, get_city

# businesslist[].code -> 品类名(逆向自实际接口返回)
BUSINESS_NAMES = {"03": "茶叶", "04": "超市", "05": "医药"}


@dataclass
class Biz:
    """门店下可预约的品类。"""
    code: str
    title: str
    fence: bool = False
    remark: str = ""
    center_lat: str = ""
    center_lng: str = ""
    radius_m: int = 0

    def label(self) -> str:
        return f"{self.title}({self.code})" + ("  ·限门店周边" if self.fence else "")


@dataclass
class Store:
    """门店。"""
    code: str
    title: str
    distance: float = 0.0
    pos: str = ""
    businesses: list[Biz] = field(default_factory=list)

    def label(self) -> str:
        d = f"  {self.pos}" if self.pos else ""
        return f"{self.title}({self.code}){d}"


def _fence(b: dict) -> tuple[bool, str, str, int]:
    """解析 electronic fence: (fenceFlag, center_lat, center_lng, radius)"""
    if not b.get("fenceFlag"):
        return False, "", "", 0
    fr = b.get("fenceRange") or {}
    c = fr.get("center") or {}
    try:
        radius = int(fr.get("radius") or 0)
    except (TypeError, ValueError):
        radius = 0
    return True, str(c.get("lat") or ""), str(c.get("lng") or ""), radius


def list_stores(client: PDLClient, lat: str, lng: str) -> list[Store]:
    """按经纬度列附近门店 + 每个门店的可预约品类。无需 token。"""
    data = client.nearby_stores(lat=lat, lng=lng).get("data") or {}
    out: list[Store] = []
    for s in data.get("storelist") or []:
        st = Store(code=str(s.get("code") or ""), title=str(s.get("title") or s.get("name") or ""),
                   distance=float(s.get("distance") or 0), pos=str(s.get("pos") or ""))
        for b in s.get("businesslist") or []:
            fence, clat, clng, r = _fence(b)
            code = str(b.get("code") or "")
            st.businesses.append(Biz(
                code=code, title=str(b.get("title") or b.get("name") or BUSINESS_NAMES.get(code, "")),
                fence=fence, remark=str(b.get("remark") or ""), center_lat=clat, center_lng=clng, radius_m=r,
            ))
        out.append(st)
    return out


def list_stru_shoppe(client: PDLClient, store_code: str, business_code: str,
                     stru_code: str = "all") -> tuple[list[dict], list[dict]]:
    """门店+品类 -> (strulist, shoppelist)。需要真实 token。"""
    data = client.stru_shoppe(store_code, business_code, stru_code).get("data") or {}
    return (data.get("strulist") or []), (data.get("shoppelist") or [])


def list_sessions(client: PDLClient, store_code: str, shoppe_code: str,
                  business_code: str = "", **extra) -> list[dict]:
    from .config import AppConfig as _C  # noqa: F401
    data = client.list_of_session(storeCode=store_code, shoppeCode=shoppe_code,
                                  businessCode=business_code, **extra).get("data") or {}
    return data if isinstance(data, list) else (data.get("list") or data.get("sessions") or [])


def print_stores(cfg: AppConfig, city: str = "") -> None:
    """打印某城市附近的门店与可预约品类。"""
    c = get_city(city)
    print(f"城市 {c.name}  lat={c.lat} lng={c.lng}  {c.note}")
    for st in list_stores(PDLClient(cfg), c.lat, c.lng):
        print(f"  {st.title}  storeCode={st.code}  {st.pos}")
        for b in st.businesses:
            extra = f"  围栏{b.radius_m}m @{b.center_lat},{b.center_lng}" if b.fence else ""
            print(f"      {b.title}  businessCode={b.code}{extra}")
            if b.remark:
                print(f"        ({b.remark})")


def print_tree(cfg: AppConfig, city: str = "") -> None:
    """完整链路: 城市 -> 门店 -> 品类 -> 业态 -> 分类 -> 场次(后三层需 token)。"""
    c = get_city(city)
    client = PDLClient(cfg)
    print(f"\n=== 城市 {c.name} ({c.lat},{c.lng}) ===")
    for st in list_stores(client, c.lat, c.lng):
        print(f"\n  [门店] {st.title}  storeCode={st.code}  {st.pos}")
        for b in st.businesses:
            print(f"    [品类] {b.title}  businessCode={b.code}"
                  + (f"  围栏{b.radius_m}m" if b.fence else ""))
            try:
                strus, shoppes = list_stru_shoppe(client, st.code, b.code)
            except Exception as e:
                print(f"      (业态/分类需登录 token: {e})")
                continue
            for su in strus or []:
                print(f"      [业态] {su.get('title') or su.get('name')}  structureCode={su.get('code')}")
            for sp in shoppes or []:
                print(f"      [分类] {sp.get('title') or sp.get('name')}  shoppeCode={sp.get('code')}")
