"""
定时链路时序验证 —— 全部打桩, 不碰网络, 可随时跑。

    PYTHONPATH=. .venv/bin/python tests/test_timing.py

覆盖: 落点精度 / prepare 只做一次 / 停止可响应 / 未预热拒发 /
      多账号并发一致性 / 预热失败剔除 / 全失败中止。
"""
import threading, time
from datetime import datetime, timedelta
from pdl_grab.mqtt_grab import ScheduledGrabber, GrabResult
from pdl_grab.multi import MultiAccountGrabber
from pdl_grab.config import AppConfig
from pdl_grab.errors import GrabError

FAILS = []
def check(name, cond, detail=""):
    print(f"  {'PASS' if cond else 'FAIL'}  {name}  {detail}")
    if not cond: FAILS.append(name.strip())

def mkcfg(name="t"):
    c = AppConfig()
    c.grab.warmup_seconds = 5      # 保留默认 5s, 验证它不再拖慢定时路径
    c.grab.max_publish = 1
    c.store.name = name
    return c

class Stub(ScheduledGrabber):
    def __init__(self, cfg, t0, **kw):
        super().__init__(cfg, on_log=None)
        self.T0 = t0; self.events = []
        self._subscribed.set()
    def prepare(self): self.events.append(("prepare", (time.time() - self.T0) * 1000))
    def fire(self):
        self.events.append(("FIRE", (time.time() - self.T0) * 1000))
        self._got_result.set(); self._result = GrabResult(True, 0, "ok")
    def wait_result(self, timeout=None, stop_event=None): return GrabResult(True, 0, "ok")

print("\n[1] 单账号: fire 落在 T0 (原缺陷是 +5006ms)")
errs, nps = [], []
for i in range(5):
    T0 = time.time() + 3.0
    g = Stub(mkcfg(), T0)
    g.run_scheduled(datetime.fromtimestamp(T0), preheat=1.0)
    ev = dict(g.events)
    errs.append(ev["FIRE"]); nps.append(len([e for e in g.events if e[0]=="prepare"]))
    print(f"    试{i+1}: fire 偏差 {ev['FIRE']:+.2f}ms  prepare 次数={nps[-1]}")
check("fire 偏差全部 <50ms", all(abs(e) < 50 for e in errs), f"max={max(errs, key=abs):+.2f}ms")
check("prepare 只调一次", all(n == 1 for n in nps), f"{nps}")

print("\n[2] stop_event 能中断长等待")
T0 = time.time() + 60
g = Stub(mkcfg(), T0)
ev = threading.Event(); threading.Timer(0.8, ev.set).start()
t = time.time()
try:
    g.run_scheduled(datetime.fromtimestamp(T0), preheat=1.0, stop_event=ev)
    check("取消时抛 GrabError", False, "居然正常返回")
except GrabError as e:
    took = time.time() - t
    check("取消时抛 GrabError", "取消" in str(e), str(e))
    check("取消响应 <1.5s", took < 1.5, f"{took:.2f}s")
    check("取消后没有 fire", not any(e[0]=="FIRE" for e in g.events))

print("\n[3] 未预热直接 publish 应报错")
g = Stub(mkcfg(), time.time()); g._subscribed.clear()
try:
    g._publish_loop(1); check("未就绪时报错", False, "没报错")
except GrabError as e: check("未就绪时报错", True, str(e))

print("\n[4] 多账号并发落点一致 + 绝对精度")
for i in range(3):
    T0 = time.time() + 3.0
    fires = []
    class M(Stub):
        def fire(self):
            fires.append((self.cfg.store.name, (time.time() - self.T0) * 1000))
            self._got_result.set(); self._result = GrabResult(True, 0, "ok")
    MultiAccountGrabber._make = lambda self, n, c: M(c, T0)
    cfgs = [(f"a{j}", mkcfg(f"a{j}")) for j in range(3)]
    res = MultiAccountGrabber(cfgs, on_log=lambda m: None).run_scheduled(
        datetime.fromtimestamp(T0), preheat=1.0)
    spread = max(v for _,v in fires) - min(v for _,v in fires)
    avg = sum(v for _,v in fires)/len(fires)
    print(f"    试{i+1}: 偏差 {[f'{v:+.2f}' for _,v in fires]}ms  极差 {spread:.2f}ms  成功 {sum(r.success for r in res)}/3")
    check(f"试{i+1} 组内极差 <50ms", spread < 50, f"{spread:.2f}ms")
    check(f"试{i+1} 绝对偏差 <50ms", abs(avg) < 50, f"{avg:+.2f}ms")

print("\n[5] 预热失败的账号不参与下单")
fired = []
class Bad(Stub):
    def prepare(self): raise GrabError("模拟 token 失效")
class Good(Stub):
    def fire(self):
        fired.append(self.cfg.store.name)
        self._got_result.set(); self._result = GrabResult(True, 0, "ok")
def mk(self, n, c): return Bad(c, time.time()) if n == "bad" else Good(c, time.time())
MultiAccountGrabber._make = mk
res = MultiAccountGrabber([("bad", mkcfg("bad")), ("good", mkcfg("good"))],
                          on_log=lambda m: None).run_scheduled(
    datetime.now() + timedelta(seconds=0.2), preheat=0.1)
check("失败账号未 fire", fired == ["good"], f"fired={fired}")
check("失败账号在结果中标明", any(not r.success and "预热失败" in r.message for r in res))
check("成功账号成功", any(r.success and r.name == "good" for r in res))

print("\n[6] 全部预热失败要明确报错")
MultiAccountGrabber._make = lambda self, n, c: Bad(c, time.time())
try:
    MultiAccountGrabber([("x", mkcfg())], on_log=lambda m: None).run_scheduled(
        datetime.now() + timedelta(seconds=0.2), preheat=0.1)
    check("全部失败抛错", False, "没抛")
except GrabError as e: check("全部失败抛错", "预热失败" in str(e), str(e))

print("\n" + "="*50)
print("全部通过 ✓" if not FAILS else f"失败 {len(FAILS)} 项: {FAILS}")
