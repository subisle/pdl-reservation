"""
茅台预购抽签 (packageActive/maotai)。

逆向接口 (appapi.dmall.com):
  POST /app/lottery/queryUserRemainTimes  -> 剩余抽签次数
  POST /app/lottery/execLottery           -> 执行抽签(抢占)
  POST /lottery/queryUserTaskRewardCollectInfo (weixinapp) -> 资格/任务信息

注: 抽签结果由服务端决定, 客户端仅负责在开签瞬间高并发触发 execLottery。
"""
from __future__ import annotations

import time
from typing import Any, Optional

from .client import PDLClient
from .config import AppConfig
from .errors import APIError


class MaotaiLottery:
    def __init__(self, cfg: AppConfig, client: Optional[PDLClient] = None):
        self.cfg = cfg
        self.client = client or PDLClient(cfg)

    def remain_times(self) -> int:
        body = self.client.maotai_remain_times()
        data = body.get("data")
        if isinstance(data, dict):
            return int(data.get("remainTimes") or data.get("times") or 0)
        return int(data or 0)

    def exec_lottery(self, **extra: Any) -> dict[str, Any]:
        return self.client.maotai_exec_lottery(**extra)

    def grab(self, times: int = 5, interval: float = 0.15) -> list[dict[str, Any]]:
        """
        在开签窗口内连续触发抽签, 收集返回。
        返回每次调用的结果字典列表。
        """
        results: list[dict[str, Any]] = []
        for i in range(times):
            try:
                body = self.exec_lottery()
                results.append(body)
                print(f"  第 {i + 1}/{times} 次: code={body.get('code')} msg={body.get('msg')}")
                # 抽中或次数耗尽则停止
                data = body.get("data") or {}
                if data.get("success") or data.get("win") or body.get("code") not in (200, None):
                    break
            except APIError as e:
                results.append({"error": str(e), "code": e.code})
                print(f"  第 {i + 1}/{times} 次: 错误 {e}")
            if i < times - 1:
                time.sleep(interval)
        return results
