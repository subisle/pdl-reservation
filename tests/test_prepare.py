"""
prepare() 建连回归测试 —— 防止"只读不写"的属性再次回归。

历史上有两个同类的致命缺陷, 都不可能靠单元测试发现, 因为它们都发生在
真实 paho 回调里:
  1. _subscribed 声明了、也检查了, 但没有 on_subscribe 回调去 set
     -> prepare 必然 5s 超时, 预检必失败, 定时抢购必被取消
  2. self._client 声明为 None, fire()/close() 都读它, 但 _connect_mqtt
     只把 mqtt client 存进局部变量
     -> fire() 永远抛"请先调用 prepare()", 下单报文一次都发不出去
     -> close() 永远不 disconnect, 每次抢购泄漏一个连接 + 网络线程

这里用替身把 paho 的回调链模拟出来, 断言 prepare() 之后这两个状态确实就位。

    PYTHONPATH=. .venv/bin/python tests/test_prepare.py
"""
import sys, pathlib, threading, time
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1]))
import paho.mqtt.client as mqtt
from pdl_grab import mqtt_grab
from pdl_grab.client import PDLClient
from pdl_grab.config import AppConfig

FAILS=[]
def check(name, cond, detail=""):
    print(f"  {'PASS' if cond else 'FAIL'}  {name}  {detail}")
    if not cond: FAILS.append(name)

CTX = {"emqx": {"username": "u", "password": "p"},
       "user": {"status": "0000"},
       # 这里替换的是 booking_context(), 它已把 datemap 展平, 所以直接给 list
       "sessions": [{"code": "S1", "name": "上午场", "status": "",
                     "bookingStartTime": "2026-09-28 10:00:00"}],
       "captchaInfo": {"enabled": False}}

class FakeMsg:
    def __init__(s, p): s.payload = __import__("json").dumps(p).encode()

class FakePaho:
    """按 paho 的真实时序回调: loop_start 后 on_connect, subscribe 后 on_subscribe。"""
    last = None
    def __init__(s, *a, **kw): s.published=[]; s.subs=[]; FakePaho.last=s
    def ws_set_options(s,**k): pass
    def username_pw_set(s,*a): pass
    def tls_set(s,**k): pass
    def tls_insecure_set(s,v): pass
    def reconnect_delay_set(s,**k): pass
    def connect(s,h,p,keepalive=30): s.hostport=(h,p)
    def loop_start(s):
        def up():
            class RC: value=0
            s.on_connect(s,None,None,RC())
        threading.Timer(0.01, up).start()
    def loop_stop(s): s.stopped=True
    def disconnect(s): s.disconnected=True
    def subscribe(s,t,qos=0):
        s.subs.append(t)
        def ack(): s.on_subscribe(s,None,None,None)
        threading.Timer(0.01, ack).start()
    def publish(s,t,payload,qos=0):
        s.published.append((t, __import__("json").loads(payload)))
        class I: pass
        i=I(); i.rc=0
        threading.Timer(0.01, lambda: s.on_message(s,None,FakeMsg(
            {"success":True,"flag":0,"message":"ok"}))).start()
        return i

mqtt_grab.mqtt.Client = FakePaho
PDLClient.booking_context = lambda self, **k: dict(CTX)

def cfg():
    c = AppConfig(); c.user.token="TOK"; c.user.device_id="d"*32
    c.store.store_code="1007"; c.store.business_code="03"
    c.store.structure_code="STU"; c.store.shoppe_code="SHP"
    c.grab.session_code="S1"; c.grab.result_timeout=3
    c.user.lat="34.0"; c.user.lng="113.8"
    return c

print("\n[1] prepare() 之后的状态必须就位")
g = mqtt_grab.ScheduledGrabber(cfg())
info = g.prepare()
check("infov4 场次被解析", len(g.sessions) == 1, f"{len(g.sessions)} 个")
check("_connected 已置位", g._connected.is_set())
check("★ _subscribed 已置位 (曾因缺 on_subscribe 永不置位)", g._subscribed.is_set())
check("★ self._client 已挂上 (曾只存局部变量导致 fire 永远抛错)", g._client is not None)
check("订阅主题正确", FakePaho.last.subs == ["booking/result/S1TOK"], str(FakePaho.last.subs))

print("\n[2] fire() 能真正发出下单报文")
r = g.fire()
check("fire 未抛错", True, r.message)
check("★ 报文已 publish 到 order_topic", len(FakePaho.last.published) == 1,
      str([p[0] for p in FakePaho.last.published]))
res = g.wait_result()
check("收到服务端结果", res.success, res.message)

print("\n[3] close() 真的释放连接 (曾因 self._client 为 None 而永不 disconnect)")
g.close()
check("★ loop_stop 被调用", getattr(FakePaho.last, "stopped", False))
check("★ disconnect 被调用", getattr(FakePaho.last, "disconnected", False))
check("self._client 归 None", g._client is None)

print("\n[4] 连接超时会清理, 不留半成品")
class DeadPaho(FakePaho):
    def loop_start(s): pass          # 永远不回调 on_connect
mqtt_grab.mqtt.Client = DeadPaho
g2 = mqtt_grab.ScheduledGrabber(cfg())
try:
    g2.prepare(); check("超时抛错", False, "没抛")
except mqtt_grab.GrabError as e:
    check("超时抛错", "连接超时" in str(e), str(e))
check("★ 超时后 self._client 已清理", g2._client is None)

print("\n" + "="*50)
print("全部通过 ✓" if not FAILS else f"失败 {len(FAILS)} 项: {FAILS}")
sys.exit(1 if FAILS else 0)
