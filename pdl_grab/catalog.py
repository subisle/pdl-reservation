"""
真实数据目录 —— 启动即用, 无需 token。

实测结论(2026-09-28 逐端点探测, 空 token):
  ✅ /business/modulehomepage/init   -> areas[] + departments[]  (区域/品类入口)
  ✅ /business/bookingpage/homev2    -> storelist[] + businesslist[] + fenceRange (门店/品类/围栏)
  ✅ /business/homepage/popup        -> 弹窗开关(基本为空)
  ❌ /business/bookingpage/listv3    -> "未找到门店品类信息"  (需真实 token: 业态/分类)
  ❌ /business/bookingpage/infov4    -> "业态编码为空"        (需真实 token: 场次/验证码)
  ❌ /business/bookingpage/ruleinfo  -> 返回 {}              (需真实 token)
  ❌ /business/support               -> 401                  (需真实 token)

所以"不填任何东西也能拿到的真实数据"就是: 区域、品类入口、门店、距离、
品类地理围栏、门店真实坐标。场次/分类/验证码必须登录。

本模块带磁盘缓存(默认 6 小时), 避免每次启动都打接口。
"""
from __future__ import annotations

import json
import time
from dataclasses import asdict, dataclass, field
from pathlib import Path
from typing import Optional

from .client import PDLClient
from .config import AppConfig
from .discover import list_stores

CACHE = Path.home() / ".pdl_grab" / "catalog.json"
TTL = 6 * 3600


@dataclass
class Department:
    """品类入口(modulehomepage 顶层, 与门店级 businesslist 不同)。"""
    code: str
    name: str
    tag: str = ""
    bookable: bool = False
    img: str = ""
    jump_page: str = ""


@dataclass
class Catalog:
    """一份可直接喂给 UI 的真实数据快照。"""
    lat: str = ""
    lng: str = ""
    city: str = ""
    fetched_at: float = 0.0
    areas: list[dict] = field(default_factory=list)
    stores: list = field(default_factory=list)


def _cache_key(lat: str, lng: str) -> str:
    return f"{lat},{lng}"


def _read_cache(lat: str, lng: str) -> Optional[dict]:
    try:
        raw = json.loads(CACHE.read_text(encoding="utf-8"))
    except Exception:
        return None
    entry = raw.get(_cache_key(lat, lng))
    if not entry or time.time() - entry.get("fetched_at", 0) > TTL:
        return None
    return entry


def _write_cache(lat: str, lng: str, payload: dict) -> None:
    try:
        CACHE.parent.mkdir(parents=True, exist_ok=True)
        raw = {}
        if CACHE.exists():
            raw = json.loads(CACHE.read_text(encoding="utf-8"))
        raw[_cache_key(lat, lng)] = payload
        CACHE.write_text(json.dumps(raw, ensure_ascii=False), encoding="utf-8")
    except Exception:
        pass  # 缓存失败不影响主流程


def list_departments(client: PDLClient) -> list[Department]:
    """区域下的品类入口(珠宝 02 / 茶叶 03)。"""
    data = client.module_areas().get("data") or {}
    out: list[Department] = []
    for area in data.get("areas") or []:
        for d in area.get("departments") or []:
            out.append(Department(code=str(d.get("code") or ""), name=str(d.get("name") or ""),
                                  tag=str(d.get("tagName") or ""), bookable=bool(d.get("bookable")),
                                  img=str(d.get("img") or ""), jump_page=str(d.get("jumpPage") or "")))
    return out


def list_areas(client: PDLClient) -> list[dict]:
    data = client.module_areas().get("data") or {}
    return [{"code": str(a.get("code") or ""), "name": str(a.get("name") or "")}
            for a in (data.get("areas") or [])]


def fetch(lat: str, lng: str, city: str = "", cfg: Optional[AppConfig] = None,
          use_cache: bool = True) -> dict:
    """
    拉取(或读缓存)一份真实数据快照。

    返回 {city, lat, lng, fetched_at, areas, departments, stores}
    stores 里每个门店已带 businesslist(品类) 与 fenceRange(围栏)。
    """
    if use_cache:
        c = _read_cache(lat, lng)
        if c:
            return c
    client = PDLClient(cfg or AppConfig())
    payload = {
        "city": city, "lat": lat, "lng": lng, "fetched_at": time.time(),
        "areas": list_areas(client),
        "departments": [asdict(d) for d in list_departments(client)],
        "stores": [asdict(s) for s in list_stores(client, lat, lng)],
    }
    _write_cache(lat, lng, payload)
    return payload


def to_stores(payload: dict) -> list:
    """把缓存/接口的 dict 还原成 discover.Store 对象(供 UI 级联使用)。"""
    from .discover import Biz, Store
    out = []
    for s in payload.get("stores") or []:
        st = Store(code=s.get("code", ""), title=s.get("title", ""),
                   distance=s.get("distance", 0.0), pos=s.get("pos", ""))
        for b in s.get("businesses") or []:
            st.businesses.append(Biz(code=b.get("code", ""), title=b.get("title", ""),
                                     fence=b.get("fence", False), remark=b.get("remark", ""),
                                     center_lat=b.get("center_lat", ""), center_lng=b.get("center_lng", ""),
                                     radius_m=b.get("radius_m", 0)))
        out.append(st)
    return out
