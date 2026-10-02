"""
微信小程序手机端模拟。

逆向自 packageExternal 的 request 封装与 util.js:
  - 业务头只有两个: token / deviceId, 全局注入每个请求
      token     : getHeaderToken() -> loginInfo.token, **未登录时回落到 deviceId**
      deviceId  : getDeviceInfo().deviceId, 始终下发
  - token 同时还要放进 body(多数接口 data.token)
  - wx.request 由微信客户端代发, UA 是微信内置 WebView + miniProgram 标记
  - deviceId 决定 MQTT clientId("wx" + deviceId + ts), 必须像真机的 32 位 hex

这里按 iPhone 微信 8.x 的真实形态构造一套设备指纹, 并保证同一台"设备"多次
运行 deviceId 稳定 —— MQTT clientId 前缀复用才不会被服务端判成多设备异常。
"""
from __future__ import annotations

import hashlib
import json
import platform
import uuid
from dataclasses import dataclass, field
from pathlib import Path
from typing import Optional

# 微信内置 WebView UA(iPhone / iOS 17 / 微信 8.0.49)
IOS_UA = ("Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) "
          "AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 "
          "MicroMessenger/8.0.49(0x18003128) NetType/WIFI Language/zh_CN")
# 兜底: 安卓微信
ANDROID_UA = ("Mozilla/5.0 (Linux; Android 14; PGT-AN20 Build/HUAWEIPGT-AN20) "
              "AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 "
              "Chrome/114.0.0.0 Mobile Safari/537.36 MicroMessenger/8.0.49")

DEVICE_FILE = Path.home() / ".pdl_grab" / "device.json"

# 小程序 appid(逆向自 app.json / project.config.json)
APPID = "wxacf764ecf6bcc1f5"


@dataclass
class Device:
    """一台"手机"的稳定指纹。deviceId 持久化, 复用则 MQTT clientId 稳定。"""
    device_id: str
    brand: str = "iPhone"
    model: str = "iPhone 15 Pro"
    system: str = "iOS 17.4"
    platform: str = "ios"
    screen_width: int = 393
    screen_height: int = 852
    dpr: int = 3
    ua: str = IOS_UA
    openid: str = ""
    session_id: str = field(default_factory=lambda: uuid.uuid4().hex)

    def headers(self, token: str = "", device_id: str = "") -> dict[str, str]:
        """
        构造请求头。

        token 为空时按小程序逻辑回落到 deviceId —— 服务端对未登录请求就是
        拿 deviceId 当身份标识, 照做才不会拿到 401。
        """
        did = device_id or self.device_id
        return {
            "Content-Type": "application/json",
            "User-Agent": self.ua,
            "Referer": f"https://servicewechat.com/app/{APPID}/page-frame.html",
            "Accept": "application/json, text/plain, */*",
            "Accept-Language": "zh-CN,zh;q=0.9",
            "X-Requested-With": "XMLHttpRequest",
            "token": token or did,     # 逆向: getHeaderToken() 未登录时返回 deviceId
            "deviceId": did,
        }

    def system_info(self) -> dict:
        """wx.getSystemInfoSync 的等价物, 供需要设备参数的接口使用。"""
        return {"brand": self.brand, "model": self.model, "system": self.system,
                "platform": self.platform, "pixelRatio": self.dpr,
                "screenWidth": self.screen_width, "screenHeight": self.screen_height,
                "language": "zh", "version": "8.0.49", "SDKVersion": "3.7.0",
                "deviceId": self.device_id, "openid": self.openid}

    def fingerprint(self) -> str:
        raw = f"{self.device_id}{self.model}{self.system}{self.brand}"
        return hashlib.md5(raw.encode()).hexdigest()


def load_device(path: Optional[Path] = None) -> Device:
    """读取(或首次生成)本机设备指纹。deviceId 稳定复用。"""
    p = path or DEVICE_FILE
    try:
        d = json.loads(p.read_text(encoding="utf-8"))
        if d.get("device_id"):
            return Device(**{k: v for k, v in d.items() if k in Device.__annotations__})
    except Exception:
        pass
    dev = Device(device_id=uuid.uuid4().hex)
    try:
        p.parent.mkdir(parents=True, exist_ok=True)
        p.write_text(json.dumps(dev.__dict__, ensure_ascii=False, indent=2), encoding="utf-8")
    except Exception:
        pass
    return dev


def make_device_id(seed: str = "") -> str:
    """
    生成 32 位 hex deviceId。

    给定 seed 则可复现(同一账号 -> 同一 deviceId), 便于多账号各自稳定;
    不给则随机。与微信 deviceInfo().deviceId 的形态保持一致。
    """
    if seed:
        return hashlib.md5(seed.encode("utf-8")).hexdigest()
    return uuid.uuid4().hex
