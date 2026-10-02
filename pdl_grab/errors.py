"""统一异常定义。"""


class PDLException(Exception):
    """所有 PDL 异常的基类。"""


class ConfigError(PDLException):
    """配置缺失或非法。"""


class AuthError(PDLException):
    """登录 / token 失效。"""


class APIError(PDLException):
    """服务端返回业务错误。"""

    def __init__(self, msg, code=None, flag=None, data=None):
        super().__init__(msg)
        self.msg = msg
        self.code = code
        self.flag = flag
        self.data = data


class CaptchaRequired(PDLException):
    """需要人机验证(腾讯防水墙)。"""

    def __init__(self, message="请先完成人机验证", ticket=None, randstr=None, appid=None):
        super().__init__(message)
        self.ticket = ticket
        self.randstr = randstr
        self.appid = appid


class GrabError(PDLException):
    """抢购(下单)失败。"""
