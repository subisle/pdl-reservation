"""配置管理: 从 JSON 文件 + 环境变量加载。"""
from __future__ import annotations

import json
import os
import uuid
from dataclasses import dataclass, field, asdict
from pathlib import Path
from typing import Any, Optional

from .errors import ConfigError
from .wechat import make_device_id

# ---- 逆向得到的固定常量(不可配置) ----
DLAPI_BASE = "https://pdlzbyy1.azpdl.net/dlapi"
# 注意: 超市(通用)/business 与 茶叶/tealeaves 使用不同的 MQTT broker(逆向自两套 api map)
MQTT_HOSTS = {
    "market": "pdlzbyy3.azpdl.net",            # /business/*  -> mtqqurl
    "tea": "pdlreservation3.azpdl.net",         # /tealeaves/* -> mtqqurl
}
MQTT_HOST = MQTT_HOSTS["tea"]                   # 兼容旧引用(默认茶叶)
MQTT_PORT = 443
MQTT_SUB_TOPIC = "booking/result/"               # subTopic
MQTT_PUB_TOPIC = "order_topic"                   # pubTopic
MAOTAI_APPAPI = "https://appapi.dmall.com"


def _get(env: str, default: Optional[str] = None) -> Optional[str]:
    return os.environ.get(env, default)


# ---- 字段中文名与填写指引(报错时只说人话, 不给英文字段名) ----
FIELD_LABELS = {
    "store_code":     ("门店",     "「目标」页选城市和门店后自动带出"),
    "business_code":  ("品类",     "「目标」页选门店后自动带出"),
    "structure_code": ("业态",     "「目标」页点「加载业态/分类」后选择"),
    "shoppe_code":    ("专柜分类", "「目标」页点「加载业态/分类」后选择"),
    "session_code":   ("场次",     "「场次」页加载后点击某个场次"),
    "token":          ("登录 token", "「账号」页填写, 从微信小程序抓包获取"),
    "lat":            ("纬度",     "「目标」页选品类后自动按门店围栏填入"),
    "lng":            ("经度",     "「目标」页选品类后自动按门店围栏填入"),
    "verify_token":   ("验证码 token", "抢到时若弹验证窗, 人工过一次后自动缓存"),
}


def missing_msg(fields) -> str:
    """把字段列表渲染成中文提示, 并说明去哪里填。"""
    names = [f for f in fields if f in FIELD_LABELS]
    unknown = [f for f in fields if f not in FIELD_LABELS]
    if not names and not unknown:
        return ""
    lines = ["还差这些没填:"]
    for f in names:
        label, how = FIELD_LABELS[f]
        lines.append(f"  · {label} —— {how}")
    for f in unknown:
        lines.append(f"  · {f}")
    return "\n".join(lines)


@dataclass
class StoreConfig:
    """门店/专柜信息(预约抢购的目标)。"""
    store_code: str = ""          # storeCode 门店编码
    business_code: str = ""       # businessCode 业务编码
    structure_code: str = ""      # structureCode 结构编码
    shoppe_code: str = ""         # shoppeCode 专柜编码
    name: str = ""                # 备注名

    def validate(self) -> None:
        missing = [f for f in ("store_code", "business_code", "structure_code", "shoppe_code")
                   if not getattr(self, f)]
        if missing:
            raise ConfigError(missing_msg(missing))


@dataclass
class UserConfig:
    """用户认证信息。"""
    token: str = ""               # 小程序 loginInfo.token(Bearer)
    device_id: str = field(default_factory=lambda: uuid.uuid4().hex)
    lat: str = ""                 # 纬度(部分门店做围栏校验)
    lng: str = ""                 # 经度
    openid: str = ""              # 可选


@dataclass
class GrabConfig:
    """抢购行为配置。"""
    session_code: str = ""        # 目标场次编码 sessionCode
    verify_token: str = ""        # 验证码 verifyToken(有风控时必填)
    captcha_ticket: str = ""      # t-captcha ticket(人工验证后, 与 randstr 一起换 verifyToken)
    captcha_randstr: str = ""     # t-captcha randstr
    # 预热: 提前多久连好 MQTT / 开始轮询(秒)
    warmup_seconds: int = 5
    # 收到 flag=2001(要验证码) 时是否自动用已有 verify_token 重试
    auto_retry_on_captcha: bool = True
    max_publish: int = 3          # 单场次最多 publish 次数(防风控)
    result_timeout: int = 15      # 等待下单结果超时(秒)


@dataclass
class AppConfig:
    user: UserConfig = field(default_factory=UserConfig)
    store: StoreConfig = field(default_factory=StoreConfig)
    grab: GrabConfig = field(default_factory=GrabConfig)
    # 业务线: market(超市/茶叶预约) / tea(茶叶)
    channel: str = "market"       # market -> /business/*, tea -> /tealeaves/*
    verbose: bool = True

    @property
    def prefix(self) -> str:
        """业务线对应的 API 路径前缀(逆向自 bookingpage/infov4 vs info)。"""
        return "/business" if self.channel == "market" else "/tealeaves"

    def validate(self) -> None:
        missing = []
        if not self.user.token:
            missing.append("token")
        if not self.user.lat or not self.user.lng:
            missing += ["lat", "lng"]
        if missing:
            raise ConfigError(missing_msg(missing))
        self.store.validate()
        if not self.grab.session_code:
            raise ConfigError(missing_msg(["session_code"]))


def load_config(path: Optional[str] = None) -> AppConfig:
    """
    加载配置。优先级: 环境变量 > JSON 文件 > 默认值。
    环境变量:
      PDL_TOKEN, PDL_DEVICE_ID, PDL_LAT, PDL_LNG,
      PDL_STORE_CODE, PDL_BUSINESS_CODE, PDL_STRUCTURE_CODE, PDL_SHOPPE_CODE,
      PDL_SESSION_CODE, PDL_VERIFY_TOKEN, PDL_CHANNEL
    """
    data: dict[str, Any] = {}
    cfg_path = path or _get("PDL_CONFIG", "config.json")
    if cfg_path and Path(cfg_path).exists():
        data = json.loads(Path(cfg_path).read_text(encoding="utf-8"))

    user = UserConfig(
        token=_get("PDL_TOKEN") or data.get("user", {}).get("token", ""),
        device_id=_get("PDL_DEVICE_ID") or data.get("user", {}).get("device_id") or uuid.uuid4().hex,
        lat=str(_get("PDL_LAT") or data.get("user", {}).get("lat", "")),
        lng=str(_get("PDL_LNG") or data.get("user", {}).get("lng", "")),
        openid=data.get("user", {}).get("openid", ""),
    )
    store = StoreConfig(
        store_code=_get("PDL_STORE_CODE") or data.get("store", {}).get("store_code", ""),
        business_code=_get("PDL_BUSINESS_CODE") or data.get("store", {}).get("business_code", ""),
        structure_code=_get("PDL_STRUCTURE_CODE") or data.get("store", {}).get("structure_code", ""),
        shoppe_code=_get("PDL_SHOPPE_CODE") or data.get("store", {}).get("shoppe_code", ""),
        name=data.get("store", {}).get("name", ""),
    )
    grab = GrabConfig(
        session_code=_get("PDL_SESSION_CODE") or data.get("grab", {}).get("session_code", ""),
        verify_token=_get("PDL_VERIFY_TOKEN") or data.get("grab", {}).get("verify_token", ""),
        captcha_ticket=_get("PDL_CAPTCHA_TICKET") or data.get("grab", {}).get("captcha_ticket", ""),
        captcha_randstr=_get("PDL_CAPTCHA_RANDSTR") or data.get("grab", {}).get("captcha_randstr", ""),
        warmup_seconds=int(data.get("grab", {}).get("warmup_seconds", 5)),
        auto_retry_on_captcha=bool(data.get("grab", {}).get("auto_retry_on_captcha", True)),
        max_publish=int(data.get("grab", {}).get("max_publish", 3)),
        result_timeout=int(data.get("grab", {}).get("result_timeout", 15)),
    )
    cfg = AppConfig(
        user=user, store=store, grab=grab,
        channel=_get("PDL_CHANNEL") or data.get("channel", "market"),
        verbose=bool(data.get("verbose", True)),
    )
    return cfg


def dump_template(path: str = "config.json") -> None:
    """生成配置模板。"""
    tpl = {
        "_comment": "胖东来预约抢购配置。token 从微信小程序 loginInfo 获取; verify_token 在开启人机验证时必填。",
        "channel": "market",
        "user": {"token": "PASTE_LOGIN_TOKEN_HERE", "device_id": "PASTE_OR_AUTO_DEVICE_ID", "lat": "", "lng": ""},
        "store": {
            "store_code": "PASTE_STORE_CODE", "business_code": "PASTE_BUSINESS_CODE",
            "structure_code": "PASTE_STRUCTURE_CODE", "shoppe_code": "PASTE_SHOPPE_CODE", "name": "门店备注",
        },
        "grab": {"session_code": "PASTE_SESSION_CODE", "verify_token": "",
                  "captcha_ticket": "", "captcha_randstr": "", "warmup_seconds": 5,
                  "auto_retry_on_captcha": True, "max_publish": 3, "result_timeout": 15},
        "verbose": True,
    }
    Path(path).write_text(json.dumps(tpl, ensure_ascii=False, indent=2), encoding="utf-8")


# ================= 多账号支持 =================
@dataclass
class Account:
    """一个预约账号(家人各自的号)。字段留空则继承顶层公共配置。"""
    name: str = "账号"
    token: str = ""
    device_id: str = ""
    lat: str = ""
    lng: str = ""
    # 可选的逐账号覆盖(留空继承顶层)
    store_code: str = ""
    business_code: str = ""
    structure_code: str = ""
    shoppe_code: str = ""
    session_code: str = ""
    verify_token: str = ""
    captcha_ticket: str = ""
    captcha_randstr: str = ""


def _merge_account(base: AppConfig, acc: dict, idx: int) -> AppConfig:
    """把一个账号条目(部分字段)合并到 base 之上, 生成独立 AppConfig。"""
    import copy
    cfg = copy.deepcopy(base)
    g = lambda k: (acc.get(k) or "").strip() if isinstance(acc.get(k), str) else acc.get(k)
    name = g("name") or f"账号{idx + 1}"
    if g("token"):
        cfg.user.token = g("token")
    if g("device_id"):
        cfg.user.device_id = g("device_id")
    else:
        # 由"账号名 + token"派生的稳定 deviceId:
        #   同一账号每次运行不变 -> MQTT clientId 前缀稳定, 不会被判成多设备异常
        #   不同账号必然不同   -> 符合真实多设备场景
        cfg.user.device_id = make_device_id(f"{name}|{g('token') or name}")
    if g("lat"):
        cfg.user.lat = g("lat")
    if g("lng"):
        cfg.user.lng = g("lng")
    for f in ("store_code", "business_code", "structure_code", "shoppe_code"):
        v = g(f)
        if v:
            setattr(cfg.store, f, v)
    if g("session_code"):
        cfg.grab.session_code = g("session_code")
    if g("verify_token"):
        cfg.grab.verify_token = g("verify_token")
    if g("captcha_ticket"):
        cfg.grab.captcha_ticket = g("captcha_ticket")
    if g("captcha_randstr"):
        cfg.grab.captcha_randstr = g("captcha_randstr")
    # 账号名挂到 store.name 便于日志区分
    cfg.store.name = name
    return cfg


def load_accounts(path: Optional[str] = None) -> list[tuple[str, AppConfig]]:
    """
    加载所有预约账号。返回 [(账号名, AppConfig), ...]。
    - 若配置含 accounts 列表 -> 每个账号合并到公共配置上
    - 否则 -> 单账号(顶层 user.token), 保持向后兼容
    """
    base = load_config(path)
    data: dict[str, Any] = {}
    cfg_path = path or _get("PDL_CONFIG", "config.json")
    if cfg_path and Path(cfg_path).exists():
        data = json.loads(Path(cfg_path).read_text(encoding="utf-8"))
    accounts = data.get("accounts")
    if isinstance(accounts, list) and accounts:
        out = []
        for i, acc in enumerate(accounts):
            if not isinstance(acc, dict):
                continue
            cfg = _merge_account(base, acc, i)
            name = (acc.get("name") or f"账号{i + 1}").strip()
            out.append((name, cfg))
        return out
    # 单账号回退
    if base.user.token:
        return [(base.store.name or "账号1", base)]
    return []


def dump_multi_template(path: str = "config.json") -> None:
    """多账号配置模板(在公共门店/场次基础上, 列几个账号)。"""
    tpl = {
        "_comment": "多账号预约: accounts 里每个账号可只填 token, 其余继承顶层; "
                    "session_code 留空则跟顶层场次。",
        "channel": "market",
        "store": {"store_code": "PASTE_STORE_CODE", "business_code": "PASTE_BUSINESS_CODE",
                  "structure_code": "PASTE_STRUCTURE_CODE", "shoppe_code": "PASTE_SHOPPE_CODE", "name": "门店"},
        "grab": {"session_code": "PASTE_SESSION_CODE", "verify_token": "", "captcha_ticket": "",
                  "captcha_randstr": "", "warmup_seconds": 5, "auto_retry_on_captcha": True,
                  "max_publish": 3, "result_timeout": 15},
        "accounts": [
            {"name": "妈妈", "token": "PASTE_TOKEN_MAMA"},
            {"name": "我",   "token": "PASTE_TOKEN_ME"},
        ],
        "verbose": True,
    }
    Path(path).write_text(json.dumps(tpl, ensure_ascii=False, indent=2), encoding="utf-8")
