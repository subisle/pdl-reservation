"""
token 直登助手: 用 wx.login code 直接换 token (无需抓包整个会话)。

逆向链路:
  wx.login() -> code
  POST https://passport.dmall.com/wechatApplet/loginInSilence
       Content-Type: application/x-www-form-urlencoded
       body: code=<code>&...   ->  { data: { token, ticketName, ... } }

用法:
  python -m pdl_grab.login <wx.login code>
  PDL_LOGIN_CODE=<code> python -m pdl_grab.login

说明: 拿 code 本身仍需要一个微信小程序运行环境(见 TOKEN获取指南.md 的
Frida / 自动化框架等方法); 本脚本负责把 code 兑换成 token,省去抓包。
"""
from __future__ import annotations

import os
import sys

import requests

PASSPORT = "https://passport.dmall.com"
LOGIN_URL = f"{PASSPORT}/wechatApplet/loginInSilence"


def exchange_code(code: str, timeout: int = 15) -> dict:
    """用 wx.login code 静默登录, 返回解析出的 token 信息。"""
    resp = requests.post(
        LOGIN_URL,
        data={"code": code, "source": 9},
        headers={
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) "
                          "AppleWebKit/605.1.15 MicroMessenger/8.0.40 miniProgram",
        },
        timeout=timeout,
    )
    try:
        body = resp.json()
    except ValueError:
        raise SystemExit(f"非 JSON 响应 (HTTP {resp.status_code}): {resp.text[:300]}")

    if body.get("code") not in (200, "200", 0, None):
        raise SystemExit(f"登录失败: code={body.get('code')} msg={body.get('msg') or body.get('message')}")

    data = body.get("data") or body
    token = data.get("token") or data.get("ticketName")
    if not token:
        raise SystemExit(f"响应中未找到 token, 原文: {str(body)[:300]}")
    return {
        "token": token,
        "ticketName": data.get("ticketName") or "",
        "userId": data.get("userId") or data.get("id") or "",
        "raw": body,
    }


def main(argv=None):
    argv = argv if argv is not None else sys.argv[1:]
    code = argv[0] if argv else os.environ.get("PDL_LOGIN_CODE", "")
    if not code:
        print(__doc__)
        print("用法: python -m pdl_grab.login <wx.login code>")
        return 1
    info = exchange_code(code.strip())
    print("✓ 登录成功")
    print("token      :", info["token"])
    if info["ticketName"]:
        print("ticketName :", info["ticketName"])
    print("\n把 token 填入桌面工具「配置」页, 或:")
    print(f'  export PDL_TOKEN="{info["token"]}"')
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
