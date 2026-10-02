"""
多账号并发预约抢购。

每个账号一套独立 MQTT 连接(独立 deviceId/clientId、独立 token/订阅主题),
在同一个开抢时刻并发 publish, 谁先成谁先得, 互不影响。

用法:
  from pdl_grab.config import load_accounts
  from pdl_grab.multi import MultiAccountGrabber
  accounts = load_accounts()          # [(名字, AppConfig), ...]
  MultiAccountGrabber(accounts).run_scheduled(fire_at)
"""
from __future__ import annotations

import threading
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from dataclasses import dataclass
from datetime import datetime
from typing import Callable, Optional

from .errors import GrabError, PDLException
from .mqtt_grab import GrabResult, ScheduledGrabber


@dataclass
class AccountResult:
    name: str
    success: bool = False
    message: str = ""
    flag: Optional[int] = None
    elapsed_ms: int = 0

    def __str__(self) -> str:
        state = "✓ 成功" if self.success else "✗ 失败"
        return f"[{self.name}] {state} {self.message}"


class MultiAccountGrabber:
    """多账号并发定时/立即抢购。"""

    def __init__(self, accounts: list[tuple[str, object]], on_log: Optional[Callable] = None):
        # accounts: [(name, AppConfig), ...]
        self.accounts = accounts
        self.on_log = on_log
        self.results: list[AccountResult] = []
        self._grabbers: list[ScheduledGrabber] = []

    def _say(self, msg: str) -> None:
        print(msg)
        if self.on_log:
            try:
                self.on_log(msg)
            except Exception:
                pass

    def _make(self, name: str, cfg) -> ScheduledGrabber:
        return ScheduledGrabber(cfg, on_log=lambda m, n=name: self._say(f"  [{n}] {m}"))

    # ---------- 立即并发抢 ----------
    def _run_one(self, name: str, cfg) -> AccountResult:
        t0 = time.time()
        g = self._make(name, cfg)
        self._grabbers.append(g)
        try:
            res = g.grab()
            return AccountResult(name, res.success, res.message, res.flag, int((time.time() - t0) * 1000))
        except PDLException as e:
            return AccountResult(name, False, str(e), None, int((time.time() - t0) * 1000))
        except Exception as e:
            return AccountResult(name, False, f"异常: {e}", None, int((time.time() - t0) * 1000))
        finally:
            g.close()

    def grab_now(self) -> list[AccountResult]:
        """所有账号立即并发抢购。"""
        self._say(f"▶ 多账号并发抢购 ×{len(self.accounts)}")
        self.results = []
        with ThreadPoolExecutor(max_workers=len(self.accounts)) as ex:
            futs = {ex.submit(self._run_one, n, c): n for n, c in self.accounts}
            for fut in as_completed(futs):
                self.results.append(fut.result())
        self.results.sort(key=lambda r: (not r.success, r.elapsed_ms))  # 成功优先
        self._say("── 结果 ──")
        for r in self.results:
            self._say("  " + str(r))
        return self.results

    def preflight(self, fire_at: Optional[datetime] = None,
                  preheat: float = 10.0) -> list[tuple[str, str]]:
        """
        多账号预检。返回 [(账号名, "ok" 或 错误原因)], 全部通过才返回全 ok。
        逐账号独立预检, 一个坏号不影响其他号给出结论。
        """
        self._say(f"▶ 预检 ×{len(self.accounts)}")
        out: list[tuple[str, str]] = []
        lock = threading.Lock()

        def one(name, cfg):
            g = self._make(name, cfg)
            try:
                g.preflight(fire_at, preheat)
                r = (name, "ok")
            except PDLException as e:
                r = (name, str(e))
            except Exception as e:
                r = (name, f"{type(e).__name__}: {e}")
            finally:
                g.close()
            with lock:
                out.append(r)

        with ThreadPoolExecutor(max_workers=max(1, len(self.accounts))) as ex:
            list(ex.map(lambda nc: one(*nc), self.accounts))
        bad = [x for x in out if x[1] != "ok"]
        for n, e in sorted(out, key=lambda x: x[1] == "ok"):
            self._say(f"  {'✓' if e == 'ok' else '✗'} {n} {'' if e == 'ok' else e}".rstrip())
        self._say(f"── 预检 {len(out) - len(bad)}/{len(out)} 通过 ──")
        return out

    # ---------- 并发定时抢 ----------
    def run_scheduled(self, fire_at: datetime, preheat: float = 10.0,
                      stop_event=None) -> list[AccountResult]:
        """
        并发定时: T0-preheat 各账号并行预热建连, T0 同时 publish。

        预热失败的账号会被剔除(不再下单), 并在结果里标出原因, 避免用一条
        死连接去 publish 浪费掉这个名额。
        """
        now = datetime.now()
        lead = (fire_at - now).total_seconds()
        if lead > 0 and lead < preheat:
            self._say(f"⚠ 距开抢仅 {lead:.1f}s, 预热窗口不足(建议 ≥{preheat:.0f}s)")
        elif lead <= -5:
            self._say(f"⚠ 开抢时刻已过 {-lead:.0f}s, 将立即尝试")

        wait = lead - preheat
        self._say(f"▶ 多账号定时抢购 ×{len(self.accounts)}  目标 {fire_at:%m-%d %H:%M:%S}")
        if wait > 0:
            self._say(f"  {wait:.1f}s 后开始并行预热")
            if not ScheduledGrabber._sleep(wait, stop_event):
                self._say("已取消")
                return []

        # ---- 并行预热 ----
        self._say("  并行预热(建立各账号 MQTT 连接)...")
        errs: dict[str, str] = {}
        ok_list: list[tuple[str, ScheduledGrabber]] = []
        lock = threading.Lock()

        def prep(name, cfg):
            g = self._make(name, cfg)
            try:
                g.prepare()
                with lock:
                    ok_list.append((name, g))       # 只登记成功的
            except PDLException as e:
                with lock:
                    errs[name] = str(e)
                g.close()

        with ThreadPoolExecutor(max_workers=max(1, len(self.accounts))) as ex:
            list(ex.map(lambda nc: prep(*nc), self.accounts))

        self._grabbers = [g for _, g in ok_list]
        for n, e in errs.items():
            self._say(f"  [{n}] 预热失败, 已跳过: {e}")
        if not ok_list:
            raise GrabError("所有账号预热失败, 无法定时下单")
        self._say(f"  ✓ {len(ok_list)}/{len(self.accounts)} 个账号就绪")

        # ---- 精确定时(与单账号同一套 _sleep, 保证多账号偏差在毫秒级) ----
        remain = (fire_at - datetime.now()).total_seconds()
        if remain > 0:
            self._say(f"  等待开抢, 剩余 {remain:.2f}s ...")
            if not ScheduledGrabber._sleep(remain, stop_event):
                self._say("已取消")
                return []
        self._say("  ⚡ 开抢!")

        # ---- 并发下单 ----
        self.results = []
        with ThreadPoolExecutor(max_workers=max(1, len(ok_list))) as ex:
            futs = [ex.submit(self._fire_and_wait, g, n, stop_event)
                    for n, g in ok_list]
            for fut in as_completed(futs):
                self.results.append(fut.result())
        # 预热失败的账号也出现在结果里, 但明确标为失败
        for n, e in errs.items():
            self.results.append(AccountResult(n, False, f"预热失败: {e}"))
        self.results.sort(key=lambda r: (not r.success, r.elapsed_ms))
        self._say("── 结果 ──")
        for r in self.results:
            self._say("  " + str(r))
        return self.results

    def _fire_and_wait(self, g: ScheduledGrabber, name: str,
                       stop_event=None) -> AccountResult:
        t0 = time.time()
        try:
            g.fire()
            res = g.wait_result(stop_event=stop_event)
            if not res.success and "超时" in (res.message or ""):
                # wait_result 超时(而非被 stop 取消): 报文确实发出去了但没收到应答。
                # 这时既不能算成功, 也不能算失败 —— 必须提示去「我的预约」核对。
                res = GrabResult(False, None, "已发送但未收到结果(可能已约上, 稍后查我的预约)")
            return AccountResult(name, res.success, res.message, res.flag, int((time.time() - t0) * 1000))
        except PDLException as e:
            return AccountResult(name, False, str(e), None, int((time.time() - t0) * 1000))
        except Exception as e:
            return AccountResult(name, False, f"异常: {e}", None, int((time.time() - t0) * 1000))

    def close(self) -> None:
        for g in self._grabbers:
            try:
                g.close()
            except Exception:
                pass
        self._grabbers.clear()

    def __enter__(self):
        return self

    def __exit__(self, *exc):
        self.close()
