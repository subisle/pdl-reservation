"""
人工验证码弹窗(本地桥接)。

流程:
  1. 抢购遇到人机验证(flag=2001)或预约页 captchaInfo.enabled 时调用本模块;
  2. 起一个本地 HTTP 服务, 在默认浏览器打开一个验证页:
       - 内嵌腾讯防水墙 H5 组件(自动弹滑块/点选, 你手动过);
       - 同时提供"粘贴"兜底(把官方小程序里拿到的 ticket+randstr 或 verifyToken 贴进来);
  3. 你过完点提交 -> 页面把结果 POST 回本地服务;
  4. 本模块返回 {ticket, randstr} 或 {verify_token}, 由调用方兑换/缓存后继续抢购。

设计: 全程人工。程序只负责"弹窗 -> 收结果 -> 兑换 -> 继续",不自动识别验证码。
"""
from __future__ import annotations

import json
import threading
import webbrowser
from http.server import BaseHTTPRequestHandler, HTTPServer
from typing import Optional
from urllib.parse import urlparse

PAGE = r"""<!doctype html><html><head><meta charset="utf-8">
<title>胖东来预约 · 人工验证</title>
<script src="https://ssl.captcha.qq.com/TCaptcha.js"></script>
<style>
 body{font:14px/1.6 -apple-system,BlinkMacSystemFont,"PingFang SC",sans-serif;
      background:#F2F2F7;color:#000;margin:0;padding:40px;display:flex;justify-content:center}
 .card{background:#fff;border-radius:14px;padding:28px 32px;max-width:520px;width:100%;
       box-shadow:0 4px 24px rgba(0,0,0,.08)}
 h1{font-size:20px;margin:0 0 6px} .sub{color:#6D6D72;margin-bottom:18px}
 .tag{display:inline-block;background:#E8F3FF;color:#007AFF;border-radius:6px;
      padding:2px 8px;font-size:12px;margin-right:8px}
 .btn{background:#007AFF;color:#fff;border:0;border-radius:8px;padding:10px 18px;
      font-size:14px;cursor:pointer;margin-right:8px}
 .btn.ghost{background:#E8E8ED;color:#000}
 textarea{width:100%;box-sizing:border-box;border:1px solid #C6C6C8;border-radius:8px;
      padding:10px;font:12px ui-monospace,Menlo,monospace;min-height:70px;margin:8px 0}
 .hint{color:#98989D;font-size:12px;margin-top:6px}
 .ok{color:#34C759;font-weight:600;display:none}
</style></head><body>
<div class="card">
  <h1>🤖 遇到人机验证</h1>
  <div class="sub">这是腾讯防水墙(t-captcha),需要你手动过一次。过后本工具自动继续抢购。</div>
  <div style="margin-bottom:14px">
    <span class="tag">场次 <b id="sess">__SESSION__</b></span>
    <span class="tag">appId 195504199</span>
  </div>
  <p><b>方式一(推荐):</b>点下面按钮, 在弹出的腾讯验证里手动完成(滑块/点选)。</p>
  <button class="btn" id="go">开始人机验证</button>
  <button class="btn ghost" id="copy">复制本页地址</button>
  <div class="ok" id="ok">✓ 已提交, 可以关闭本页, 程序继续。</div>

  <hr style="border:0;border-top:1px solid #E5E5EA;margin:20px 0">
  <p><b>方式二(兜底):</b>在官方小程序完成验证后, 把结果粘到下面, 点提交。</p>
  <textarea id="ta" placeholder="ticket+randstr(逗号或换行分隔)&#10;或直接粘贴 verifyToken"></textarea>
  <button class="btn" id="submit">提交结果</button>
  <div class="hint">ticket+randstr 来自抓包 verifyCaptcha 请求体;verifyToken 来自其响应。</div>
</div>
<script>
const post = o => fetch('/result',{method:'POST',body:JSON.stringify(o)})
                  .then(()=>{document.getElementById('ok').style.display='block'});
document.getElementById('go').onclick = () => {
  try{
    new TencentCaptcha('195504199', res => {
      if(res.ret === 0){ post({ticket:res.ticket, randstr:res.randstr}); }
    });
  }catch(e){ alert('腾讯验证组件加载失败, 请用方式二粘贴: '+e); }
};
document.getElementById('submit').onclick = () => {
  const v = document.getElementById('ta').value.trim();
  if(!v){ alert('请先粘贴验证结果'); return; }
  // 形如 "ticket,randstr" 或 "ticket\nrandstr" 或单个 verifyToken
  const parts = v.split(/[,\n\s]+/).filter(Boolean);
  if(parts.length >= 2){ post({ticket:parts[0], randstr:parts[1]}); }
  else { post({verify_token:parts[0]}); }
};
document.getElementById('copy').onclick = () => {
  navigator.clipboard.writeText(location.href);
};
</script></body></html>"""


class _Handler(BaseHTTPRequestHandler):
    # result / done 挂在 server 实例上, 不能用类属性:
    # 多账号并发抢时两个账号可能同时撞上 flag=2001, 类属性会让后一个
    # open_and_wait 重置掉前一个正在等的 Event, 并把前一个的 ticket 串给后一个。

    def log_message(self, *a):  # 静默
        pass

    def _send(self, body: bytes, ctype="text/html; charset=utf-8"):
        self.send_response(200)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        if urlparse(self.path).path in ("/", "/index.html"):
            sess = getattr(self.server, "session", "")
            self._send(PAGE.replace("__SESSION__", sess).encode("utf-8"))
        else:
            self._send(b"ok", "text/plain")

    def do_POST(self):
        n = int(self.headers.get("Content-Length", 0))
        raw = self.rfile.read(n).decode("utf-8", "replace") if n else "{}"
        try:
            data = json.loads(raw)
        except ValueError:
            data = {}
        if data.get("ticket") or data.get("verify_token"):
            self.server.result = data
            self.server.done.set()
        self._send(b"ok", "text/plain")


def open_and_wait(session_code: str = "", timeout: int = 180) -> Optional[dict]:
    """
    打开验证页并阻塞等待人工提交, 返回 {ticket, randstr} 或 {verify_token};
    超时/未提交返回 None。
    """
    srv = HTTPServer(("127.0.0.1", 0), _Handler)
    srv.session = session_code
    srv.result = None
    srv.done = threading.Event()   # 每个验证窗口一份, 互不干扰
    port = srv.server_address[1]
    threading.Thread(target=srv.serve_forever, daemon=True).start()

    url = f"http://127.0.0.1:{port}/"
    print(f"⚠ 遇到人机验证, 已打开验证页: {url}")
    print("  请在浏览器里手动完成验证并提交, 提交后本工具自动继续(最多等待 "
          f"{timeout}s)")
    try:
        webbrowser.open(url)
    except Exception:
        print("  无法自动打开浏览器, 请手动访问上面的地址")

    got = srv.done.wait(timeout)
    srv.shutdown()
    if not got:
        print("  等待人工验证超时")
        return None
    res = srv.result or {}
    if res.get("ticket"):
        print("  ✓ 收到 ticket+randstr")
    elif res.get("verify_token"):
        print("  ✓ 收到 verifyToken")
    return res or None
