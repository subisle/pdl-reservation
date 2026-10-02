"""
核心 HTTP 客户端。

逆向对应: 门店预约走独立网关 pdlzbyy1.azpdl.net/dlapi,
请求头固定带 token(登录 token) + deviceId; 401 触发重新登录。
"""
from __future__ import annotations

import json
import random
import string
import time
import uuid
from typing import Any, Optional

import requests

from .config import DLAPI_BASE, MAOTAI_APPAPI, AppConfig
from .errors import APIError, AuthError
from .wechat import load_device


def _rand_str(n: int = 16) -> str:
    alphabet = string.ascii_letters + string.digits
    return "".join(random.choice(alphabet) for _ in range(n))


class PDLClient:
    """胖东来开放接口客户端。"""

    def __init__(self, cfg: AppConfig, session: Optional[requests.Session] = None):
        self.cfg = cfg
        self.base = DLAPI_BASE
        self.maotai_base = MAOTAI_APPAPI
        self.device = load_device()
        self.http = session or requests.Session()
        self.http.headers.update(self.device.headers())
        self._token = cfg.user.token

    # ---------- 基础请求 ----------
    def _headers(self, need_auth: bool = True) -> dict[str, str]:
        # 走微信手机端指纹: UA/Referer 固定, token 未登录时回落到 deviceId
        h = dict(self.device.headers())
        if need_auth and self.cfg.user.device_id:
            h["deviceId"] = self.cfg.user.device_id
            h["token"] = self._token or self.cfg.user.device_id
            if self._token:
                h["Authorization"] = "Bearer " + self._token
        # HTTP 头必须 latin-1 可编码; 占位符/中文 token 直接判定为未配置
        for k, v in list(h.items()):
            try:
                v.encode("latin-1")
            except UnicodeEncodeError:
                raise AuthError(f"请求头 {k} 含非法字符(疑似未替换的占位符), 请先在配置中填入真实 token")
        return h

    def request(
        self,
        path: str,
        data: Optional[dict] = None,
        method: str = "POST",
        base: Optional[str] = None,
        need_auth: bool = True,
        timeout: int = 15,
        retry: int = 2,
    ) -> dict[str, Any]:
        url = (base or self.base) + path
        last_exc: Optional[Exception] = None
        for attempt in range(retry + 1):
            try:
                r = self.http.request(
                    method, url, json=data or {},
                    headers=self._headers(need_auth), timeout=timeout,
                )
                try:
                    body = r.json()
                except ValueError:
                    raise APIError(f"非 JSON 响应 (HTTP {r.status_code}): {r.text[:200]}")
                code = body.get("code")
                # 401 -> token 失效
                if code == 401 or r.status_code == 401:
                    raise AuthError(body.get("msg") or body.get("message") or "登录已过期")
                if code is not None and code != 200:
                    raise APIError(body.get("msg") or body.get("message") or f"业务错误 code={code}",
                                   code=code, data=body.get("data"))
                return body
            except AuthError:
                raise
            except (APIError, requests.RequestException) as e:
                last_exc = e
                if attempt < retry:
                    time.sleep(0.4 * (attempt + 1))
        # 统一包装: 网络异常 -> APIError, 便于上层捕获
        if isinstance(last_exc, requests.RequestException):
            raise APIError(f"网络请求失败: {last_exc}") from last_exc
        assert last_exc is not None
        raise last_exc

    # ---------- 门店预约(排队/叫号) ----------
    def booking_page_info(self, **extra: Any) -> dict[str, Any]:
        """门店预约页初始化: 门店/专柜信息 + 风控(emqx/captcha) + 场次。"""
        return self.request(
            f"{self.cfg.prefix}/bookingpage/infov4" if self.cfg.channel == "market"
            else f"{self.cfg.prefix}/bookingpage/info",
            data={"storeCode": self.cfg.store.store_code,
                  "shoppeCode": self.cfg.store.shoppe_code, **extra},
        )

    def booking_context(self, **extra: Any) -> dict[str, Any]:
        """
        一次 infov4 调用聚合预约上下文(逆向自消费者预约页):
        返回 { sessions, nowdate, emqx, captchaInfo, user, raw }
          sessions   : datemap(日期->场次列表) 展平后的场次字典列表
          nowdate    : 服务端当前日期
          emqx       : MQTT 凭证 {username, password}
          captchaInfo: {enabled, appId, ticket}
          user       : {status, statusDesc} (status=="0000" 才可约)
        """
        data = self.booking_page_info(**extra).get("data") or {}
        datemap = data.get("datemap") or {}
        sessions: list[dict] = []
        if isinstance(datemap, dict):
            for date, lst in datemap.items():
                for sess in (lst or []):
                    if isinstance(sess, dict):
                        sess.setdefault("date", date)
                        sessions.append(sess)
        elif isinstance(datemap, list):
            sessions = [x for x in datemap if isinstance(x, dict)]
        return {
            "sessions": sessions,
            "nowdate": data.get("nowdate", ""),
            "emqx": data.get("emqx") or {},
            "captchaInfo": data.get("captchaInfo") or {},
            "user": data.get("user") or {},
            "raw": data,
        }

    def booking_page_home(self, **extra: Any) -> dict[str, Any]:
        path = ("/bookingpage/homev2" if self.cfg.channel == "market" else "/bookingpage/home")
        return self.request(f"{self.cfg.prefix}{path}",
                            data={"storeCode": self.cfg.store.store_code,
                                  "shoppeCode": self.cfg.store.shoppe_code, **extra})

    def list_of_session(self, **extra: Any) -> dict[str, Any]:
        """按日期拉取场次列表。"""
        path = "/bookingpage/listOfSessionv2" if self.cfg.channel == "market" else "/bookingpage/listOfSession"
        return self.request(f"{self.cfg.prefix}{path}",
                            data={"storeCode": self.cfg.store.store_code,
                                  "shoppeCode": self.cfg.store.shoppe_code, **extra})

    def session_items(self, store_code: str, shoppe_code: str, business_code: str = "",
                      lat: str = "", lng: str = "", area_code: str = "") -> list[dict]:
        """
        拉某门店+专柜下的场次清单(逆向自预约详情页 sessionlist)。

        POST /business/bookingpage/listOfSessionv2
            {token, storeCode, businessCode, shoppeCode, lat, lng, areaCode}
        返回 data.list —— 与 infov4 的 datemap 相比更轻, 只查一个专柜,
        适合做"选完分类立刻刷出可约场次"的下拉。
        """
        body = {"token": self._token, "storeCode": store_code, "shoppeCode": shoppe_code,
                "businessCode": business_code, "lat": lat, "lng": lng, "areaCode": area_code}
        data = self.list_of_session(**body).get("data") or {}
        return data if isinstance(data, list) else (data.get("list") or [])

    def list_bookings(self, **extra: Any) -> dict[str, Any]:
        path = "/bookingpage/listv3" if self.cfg.channel == "market" else "/bookingpage/list"
        return self.request(f"{self.cfg.prefix}{path}",
                            data={"storeCode": self.cfg.store.store_code,
                                  "shoppeCode": self.cfg.store.shoppe_code, **extra})

    def nearby_stores(self, lat: str, lng: str) -> dict[str, Any]:
        """
        按经纬度返回附近门店及其可预约品类(逆向自门店选择页 storelist)。

        这是整个发现链路的入口, 且**无需 token**:
            data.storelist[] = {
                code, title, distance, pos,
                businesslist[] = {code, title, remark, fenceFlag, fenceRange:{type,center,radius}}
            }
        fenceFlag==1 表示该品类有电子围栏, fenceRange.center 是门店真实坐标。
        """
        return self.booking_page_home(lat=lat, lng=lng)

    def stru_shoppe(self, store_code: str, business_code: str,
                    stru_code: str = "all") -> dict[str, Any]:
        """
        门店+品类 -> 业态列表(strulist) + 分类列表(shoppelist)。

        逆向自预约详情页: POST /business/bookingpage/listv3
            {token, storeCode, businessCode, struCode}
        注意: 此接口**需要真实登录 token**, 未登录返回"未找到门店品类信息"。
        struCode 可从返回的 strulist[].code 逐级下钻。
        """
        return self.request(
            # market -> /business/bookingpage/listv3 ; tea -> /tealeaves/bookingpage/list
            # (漏掉这个分流的话, channel=tea 时"加载业态/分类"会直接 404)
            (f"{self.cfg.prefix}/bookingpage/listv3" if self.cfg.channel == "market"
             else f"{self.cfg.prefix}/bookingpage/list"),
            data={"token": self._token, "storeCode": store_code,
                  "businessCode": business_code, "struCode": stru_code},
        )

    def rule_info(self, **extra: Any) -> dict[str, Any]:
        # 两条业务线挂载位置不同(源码):
        #   /business/bookingpage/ruleinfo  vs  /tealeaves/homepage/ruleinfo
        path = "/bookingpage/ruleinfo" if self.cfg.channel == "market" else "/homepage/ruleinfo"
        return self.request(f"{self.cfg.prefix}{path}",
                            data={"storeCode": self.cfg.store.store_code,
                                  "shoppeCode": self.cfg.store.shoppe_code, **extra})

    def my_books(self, **extra: Any) -> dict[str, Any]:
        path = "/homepage/mybooks"
        return self.request(f"{self.cfg.prefix}{path}", data=dict(extra))

    def verify_captcha(self, ticket: str, randstr: str, session_code: str) -> dict[str, Any]:
        """提交腾讯防水墙票据, 换取 verifyToken。"""
        return self.request(
            f"{self.cfg.prefix}/bookingpage/verifyCaptcha",
            data={"token": self._token,
                  "storeCode": self.cfg.store.store_code,
                  "shoppeCode": self.cfg.store.shoppe_code,
                  "sessionCode": session_code,
                  "ticket": ticket, "randstr": randstr},
        )

    def subscription_notice(self, code: str, session_code: str, rule_id: str = "") -> dict[str, Any]:
        return self.request(
            f"{self.cfg.prefix}/bookingpage/subscriptionnotice",
            data={"token": self._token, "code": code, "templateId": "",
                  "sessionCode": session_code, "sessionId": rule_id,
                  "subscribeEvent": "entrance:notify"},
        )

    # ---------- 茅台预购抽签 ----------
    def maotai_remain_times(self) -> dict[str, Any]:
        return self.request("/app/lottery/queryUserRemainTimes", data={},
                            base=self.maotai_base, need_auth=True)

    def maotai_exec_lottery(self, **extra: Any) -> dict[str, Any]:
        return self.request("/app/lottery/execLottery", data=dict(extra),
                            base=self.maotai_base, need_auth=True)

    def maotai_qualification(self, **extra: Any) -> dict[str, Any]:
        return self.request("/app/lottery/queryUserTaskRewardCollectInfo", data=dict(extra),
                            base=self.maotai_base)

    # ---------- 品类 / 门店 / 专柜 发现 ----------
    def module_areas(self) -> dict[str, Any]:
        """模块首页: 返回可预约区域列表(areas)。"""
        return self.request("/business/modulehomepage/init", data={}, need_auth=True)

    def homepage_init(self, area_code: str = "", business_code: str = "") -> dict[str, Any]:
        """
        预约首页: 按区域+品类返回门店与业务信息。
        business_code 为空时服务端返回该区域默认品类(茶叶)。
        """
        return self.request(f"{self.cfg.prefix}/homepage/init" + ("v4" if self.cfg.channel == "market" else ""),
                            data={"token": self._token, "areaCode": area_code,
                                  "businessCode": business_code})

    def my_booking_page(self, page: int = 1, page_size: int = 20, **extra: Any) -> dict[str, Any]:
        path = "/mybookingpage/page" + ("v2" if self.cfg.channel == "market" else "")
        return self.request(f"{self.cfg.prefix}{path}",
                            data={"token": self._token, "page": page,
                                  "pageSize": page_size, **extra})

    def my_booking_info(self, **extra: Any) -> dict[str, Any]:
        path = "/mybookingpage/info" + ("v2" if self.cfg.channel == "market" else "")
        return self.request(f"{self.cfg.prefix}{path}", data={"token": self._token, **extra})

    def companion_list(self, **extra: Any) -> dict[str, Any]:
        return self.request(f"{self.cfg.prefix}/mybookingpage/companionlist",
                            data={"token": self._token, **extra})
