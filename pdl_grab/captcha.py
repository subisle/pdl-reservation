"""
人机验证(t-captcha / 腾讯防水墙)支持 —— 人工介入模式。

逆向 (packageExternal):
  - 检测: bookingpage/infov4 返回 captchaInfo { enabled, appId, ticket }
          appId = "195504199" (腾讯防水墙)
  - 兑换: POST {前缀}/bookingpage/verifyCaptcha
          data: { token, storeCode, shoppeCode, sessionCode, ticket, randstr }
          resp: { code:200, data:{ verified:true, verifyToken:"..." } }
  - 下单: MQTT 报文带 verifyToken; 服务端 flag=2001 表示"需先完成人机验证"

设计原则(重要):
  本模块**不做自动打码 / 不绕过验证码**。t-captcha 是专门区分人机的反爬机制,
  自动化破解既不可靠也越界。这里采用 human-in-the-loop:
    1) 程序检测到该场次需要人机验证(captchaInfo.enabled 或 flag=2001);
    2) 由人在官方小程序/浏览器完成一次验证,拿到 ticket+randstr(方式见 TOKEN/验证码指南);
    3) 本模块用 verifyCaptcha 把 ticket+randstr 兑换成 verifyToken,并按场次缓存;
    4) 后续下单自动带上缓存的 verifyToken;过期(flag=2001)再提示人工验证一次。

这样既尊重反爬机制,又让预约流程不被验证码卡死。
"""
from __future__ import annotations

import threading
from typing import Optional

from .client import PDLClient
from .config import AppConfig
from .errors import APIError, CaptchaRequired

CAPTCHA_APPID = "195504199"   # 腾讯防水墙 appId


class CaptchaSolver:
    """人机验证兑换 + 按场次缓存 verifyToken。"""

    def __init__(self, cfg: AppConfig, client: Optional[PDLClient] = None):
        self.cfg = cfg
        self.client = client or PDLClient(cfg)
        self._tokens: dict[str, str] = {}      # session_code -> verifyToken
        self._lock = threading.Lock()

    # ---------- 检测 ----------
    def captcha_info(self, **extra) -> dict:
        """从 bookingpage/infov4 拿 captchaInfo。"""
        try:
            data = self.client.booking_page_info(**extra).get("data") or {}
        except APIError:
            return {}
        return data.get("captchaInfo") or {}

    def needs_captcha(self, **extra) -> bool:
        """该门店/场次当前是否启用了人机验证。"""
        info = self.captcha_info(**extra)
        return bool(info.get("enabled") and (info.get("appId") or info.get("ticket")))

    # ---------- 缓存 ----------
    def token_for(self, session_code: str) -> str:
        with self._lock:
            return self._tokens.get(session_code, "")

    def set_token(self, session_code: str, verify_token: str) -> None:
        with self._lock:
            if verify_token:
                self._tokens[session_code] = verify_token
            else:
                self._tokens.pop(session_code, None)

    def clear(self, session_code: Optional[str] = None) -> None:
        with self._lock:
            if session_code:
                self._tokens.pop(session_code, None)
            else:
                self._tokens.clear()

    # ---------- 兑换 ----------
    def exchange(self, ticket: str, randstr: str, session_code: str) -> str:
        """
        用人工验证得到的 ticket+randstr 兑换 verifyToken,成功后按场次缓存。
        返回 verifyToken;失败抛 APIError。
        """
        if not ticket:
            raise CaptchaRequired("缺少 ticket(请先在官方小程序/浏览器完成人机验证)")
        body = self.client.verify_captcha(ticket, randstr, session_code)
        data = body.get("data") or {}
        if not data.get("verified"):
            raise APIError(data.get("reason") or body.get("msg") or "验证未通过", code=body.get("code"))
        token = data.get("verifyToken") or ""
        self.set_token(session_code, token)
        return token

    def submit(self, verify_token: str, session_code: str) -> str:
        """直接登记一个已获取的 verifyToken(例如从抓包中拿到的)。"""
        if not verify_token:
            raise CaptchaRequired("缺少 verifyToken")
        self.set_token(session_code, verify_token)
        return verify_token

    def ensure(self, session_code: str, ticket: str = "", randstr: str = "") -> str:
        """
        确保该场次有可用 verifyToken:
        已有缓存 -> 直接返回;给了 ticket -> 兑换;都没有 -> 抛 CaptchaRequired。
        """
        cached = self.token_for(session_code)
        if cached:
            return cached
        if ticket:
            return self.exchange(ticket, randstr, session_code)
        raise CaptchaRequired(
            "该场次需要人机验证(t-captcha)。请先在官方小程序完成验证, "
            "把 ticket+randstr 或 verifyToken 提供给程序。")
