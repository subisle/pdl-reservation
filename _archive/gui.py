"""
胖东来预约抢购 —— 桌面 UI (极简风)。

  python -m pdl_grab.cli gui      /      双击 胖东来预约.app
"""
from __future__ import annotations

import json
import queue
import threading
import tkinter as tk
from datetime import datetime, timedelta
from tkinter import ttk, messagebox
from typing import Optional

from .captcha import CaptchaSolver
from .catalog import fetch as fetch_catalog, to_stores
from .client import PDLClient
from .config import load_config
from .discover import list_stores, list_stru_shoppe
from .regions import CITIES, get_city, city_names
from .errors import CaptchaRequired, PDLException
from .mqtt_grab import ScheduledGrabber
from .multi import MultiAccountGrabber
from .session import Session, load_sessions
from .ui_kit import LineEdit, RoundedButton, Select, SidebarItem, Theme, hairline

NAV = [("抢购", "grab"), ("目标", "target"), ("场次", "sessions"),
       ("账号", "accounts"), ("配置", "config"), ("日志", "log")]


class GrabApp(tk.Tk):
    def __init__(self):
        super().__init__()
        self.title("胖东来预约")
        self.th = Theme(self)
        self.configure(bg=self.th["bg"])
        self.geometry("940x600")
        self.minsize(880, 560)

        self.cfg = load_config()
        self.sessions: list[Session] = []
        self.accounts: list[dict] = []
        self.target: Optional[Session] = None
        self.log_q: queue.Queue = queue.Queue()
        self.busy = False
        self._closing = False
        self.vars: dict[str, tk.StringVar] = {}
        # 依据已配置的经纬度预选城市(目标页下拉框初值)
        self._city0 = city_names()[0]
        for _c in CITIES:
            if _c.lat == (self.cfg.user.lat or "") and _c.lng == (self.cfg.user.lng or ""):
                self._city0 = _c.name; break
        # 编码类字段由「目标」页级联写入, 无输入框但需承载值
        self.vars["token"] = tk.StringVar(value=self.cfg.user.token)
        for k in ("store_code", "business_code", "structure_code", "shoppe_code", "latlng"):
            self.vars[k] = tk.StringVar()
        self._stores: list = []
        self._strus: list = []
        self._shoppes: list = []

        self._build()
        self._load_config_to_ui()
        self._sync_city_display()
        self._load_accounts()
        self._show_page("grab")
        self.after(120, self._tick)
        self.after(400, self._autoload_catalog)

    # ================= 布局 =================
    def _build(self):
        th = self.th
        # 侧边栏
        self.sidebar = tk.Frame(self, bg=th["bg"], width=176)
        self.sidebar.pack(side="left", fill="y")
        self.sidebar.pack_propagate(False)
        tk.Label(self.sidebar, text="胖东来预约", bg=th["bg"], fg=th["text"],
                 font=th.sizes["head"]).pack(anchor="w", padx=20, pady=(28, 20))
        self.nav_items: dict[str, SidebarItem] = {}
        for label, key in NAV:
            it = SidebarItem(self.sidebar, label, lambda k=key: self._show_page(k), th)
            it.pack(fill="x", pady=1)
            self.nav_items[key] = it
        self.status_lbl = tk.Label(self.sidebar, text="就绪", bg=th["bg"], fg=th["text3"],
                                   font=th.sizes["cap"], anchor="w")
        self.status_lbl.pack(side="bottom", fill="x", padx=20, pady=18)

        # 内容区
        self.content = tk.Frame(self, bg=th["bg"])
        self.content.pack(side="left", fill="both", expand=True)
        self.pages = {}
        for _, key in NAV:
            self.pages[key] = tk.Frame(self.content, bg=th["bg"])
        self._page_grab(); self._page_target(); self._page_sessions()
        self._page_accounts(); self._page_config(); self._page_log()

    def _title(self, page, text, sub=""):
        th = self.th
        f = tk.Frame(page, bg=th["bg"])
        f.pack(fill="x", padx=44, pady=(36, 0))
        tk.Label(f, text=text, bg=th["bg"], fg=th["text"], font=th.sizes["title"]).pack(anchor="w")
        if sub:
            tk.Label(f, text=sub, bg=th["bg"], fg=th["text2"], font=th.sizes["sub"]).pack(anchor="w", pady=(4, 0))
        return f

    # ---------- 抢购页 ----------
    def _page_grab(self):
        th = self.th
        p = self.pages["grab"]
        self._title(p, "抢购")
        # 时钟
        self.lbl_clock = tk.Label(p, text="--:--:--", bg=th["bg"], fg=th["text"], font=th.clock)
        self.lbl_clock.pack(anchor="w", padx=44, pady=(30, 0))
        self.lbl_date = tk.Label(p, text="", bg=th["bg"], fg=th["text3"], font=th.sizes["sub"])
        self.lbl_date.pack(anchor="w", padx=44, pady=(2, 0))
        # 倒计时
        self.lbl_count = tk.Label(p, text="—", bg=th["bg"], fg=th["text2"], font=th.countdown)
        self.lbl_count.pack(anchor="w", padx=44, pady=(24, 0))
        self.lbl_target = tk.Label(p, text="在「场次」页双击选择目标场次", bg=th["bg"], fg=th["text3"], font=th.sizes["sub"])
        self.lbl_target.pack(anchor="w", padx=44, pady=(8, 0))
        hairline(p, th["sep"], pady=26)
        # 按钮
        ops = tk.Frame(p, bg=th["bg"]); ops.pack(fill="x", padx=44)
        self.btn_load = RoundedButton(ops, "加载场次", self._on_load_sessions, th, "ghost", 110)
        self.btn_load.pack(side="left", padx=(0, 8))
        self.btn_sched = RoundedButton(ops, "定时抢购", self._on_scheduled, th, "primary", 120)
        self.btn_sched.pack(side="left", padx=4)
        self.btn_now = RoundedButton(ops, "立即抢购", self._on_grab_now, th, "ghost", 110)
        self.btn_now.pack(side="left", padx=8)
        self.btn_stop = RoundedButton(ops, "停止", self._on_stop, th, "ghost", 80)
        self.btn_stop.pack(side="left", padx=4); self.btn_stop.set_enabled(False)
        # 场次速览
        self.quick_lbl = tk.Label(p, text="—", bg=th["bg"], fg=th["text2"], font=th.sizes["body"],
                                  justify="left", anchor="nw")
        self.quick_lbl.pack(anchor="w", padx=44, pady=(24, 0))

    # ---------- 目标页(级联选择, 免手填编码) ----------
    def _page_target(self):
        th = self.th
        p = self.pages["target"]
        self._title(p, "预约目标", "城市 → 门店 → 品类")

        form = tk.Frame(p, bg=th["bg"]); form.pack(fill="x", padx=44, pady=(26, 0))
        form.grid_columnconfigure(1, weight=1)

        self.city_sel = Select(form, th, values=city_names(), width=330, font=th.sizes["body"],
                               on_change=self._on_pick_city)
        self.city_sel.grid(row=0, column=0, sticky="ew", pady=(0, 10))
        self.lbl_coord = tk.Label(form, text="", bg=th["bg"], fg=th["text3"], font=th.mono,
                                  anchor="w")
        self.lbl_coord.grid(row=0, column=1, sticky="w", padx=(18, 0))

        self.cb_store = _Sel(Select(form, th, width=330, on_change=self._on_pick_store), "门店")
        self.cb_biz = _Sel(Select(form, th, width=330, on_change=self._on_pick_biz), "品类")
        self.cb_stru = _Sel(Select(form, th, width=330, on_change=self._on_pick_stru), "业态")
        self.cb_shoppe = _Sel(Select(form, th, width=330, on_change=self._on_pick_shoppe), "分类")
        for i, sel in enumerate((self.cb_store, self.cb_biz, self.cb_stru, self.cb_shoppe), 1):
            sel.box.grid(row=i, column=0, sticky="ew", pady=(0, 10))
            sel.label = tk.Label(form, text=sel.name, bg=th["bg"], fg=th["text3"],
                                 font=th.sizes["cap"], anchor="w")
            sel.label.grid(row=i, column=1, sticky="w", padx=(18, 0))

        self.coord_edit = LineEdit(form, th, width=330, font=th.mono)
        self.coord_edit.grid(row=5, column=0, sticky="ew", pady=(14, 0))
        self.coord_edit.set_placeholder("纬度,经度")
        tk.Label(form, text="可改", bg=th["bg"], fg=th["text3"], font=th.sizes["cap"],
                 anchor="w").grid(row=5, column=1, sticky="w", padx=(18, 0), pady=(14, 0))

        self.lbl_fence = tk.Label(form, text="", bg=th["bg"], fg=th["warn"],
                                  font=th.sizes["cap"], anchor="w", justify="left")
        self.lbl_fence.grid(row=6, column=0, columnspan=2, sticky="w", pady=(16, 0))

        btns = tk.Frame(form, bg=th["bg"]); btns.grid(row=7, column=0, sticky="w", pady=(20, 0))
        RoundedButton(btns, "刷新", self._on_load_stores, th, "ghost", 88).pack(side="left", padx=(0, 8))
        RoundedButton(btns, "应用", self._on_apply_target, th, "primary", 88).pack(side="left")

    # ---- 目标级联 ----
    def _cur_store(self):
        i = self.cb_store.box.current()
        return self._stores[i] if 0 <= i < len(self._stores) else None

    def _cur_biz(self):
        st = self._cur_store(); i = self.cb_biz.box.current()
        return st.businesses[i] if st and 0 <= i < len(st.businesses) else None

    def _cur_coord(self) -> tuple[str, str]:
        """当前坐标: 优先手动输入, 否则回落到所选城市。"""
        raw = (self.coord_edit.get() or "").replace("，", ",").replace(" ", "")
        parts = [x for x in raw.split(",") if x]
        if len(parts) == 2:
            try:
                float(parts[0]); float(parts[1])
                return parts[0], parts[1]
            except ValueError:
                pass
        c = get_city(self.city_sel.get())
        return c.lat, c.lng

    def _set_coord_display(self):
        lat, lng = self._cur_coord()
        self.lbl_coord.configure(text=f"{lat}, {lng}")

    def _on_pick_city(self, _e=None):
        c = get_city(self.city_sel.get())
        self._city0 = c.name
        self.coord_edit.var.set(f"{c.lat},{c.lng}")
        self._set_coord_display()
        self._on_load_stores()

    def _on_load_stores(self, _e=None):
        self._city0 = get_city(self.city_sel.get()).name
        lat, lng = self._cur_coord()
        self._log(f"加载门店 {lat},{lng} …")
        self._run_bg(lambda: self._load_stores((self._city0, lat, lng)), "加载门店")

    def _load_stores(self, triple):
        city_name, lat, lng = triple
        stores = list_stores(PDLClient(self.cfg), lat, lng)
        # worker 不能直接操作 Tk, 统一投队列由主线程渲染
        self.log_q.put(("__STORES__", city_name, stores))

    def _fill_stores(self, city_name, stores):
        self._stores = stores
        for sel in (self.cb_biz, self.cb_stru, self.cb_shoppe):
            sel.box.set_values([], keep=False)
        if not stores:
            self.lbl_fence.configure(text="未查到门店", fg=self.th["warn"])
            self._log("✗ 未查到门店")
            return
        self.cb_store.box.set_values([s.label() for s in stores])
        self._log(f"✓ {city_name} 门店 {len(stores)} 家")
        self._on_pick_store()

    def _on_pick_store(self, _e=None):
        st = self._cur_store()
        if not st: return
        self.cb_biz.box.set_values([b.label() for b in st.businesses])
        self.cb_stru.box.set_values([], keep=False)
        self.cb_shoppe.box.set_values([], keep=False)
        self._on_pick_biz()

    def _on_pick_biz(self, _e=None):
        b = self._cur_biz()
        if not b: return
        if b.fence:
            # 只保留决策信息: 限距 + 门店坐标。原始 remark 文案冗长且会截断。
            self.lbl_fence.configure(
                text=f"{b.title}限 {b.radius_m//1000}km · 门店 {b.center_lat},{b.center_lng}",
                fg=self.th["warn"])
        else:
            self.lbl_fence.configure(text=f"{b.title}无围栏", fg=self.th["text3"])

    def _on_load_stru(self, _e=None):
        st, b = self._cur_store(), self._cur_biz()
        if not (st and b):
            self._log("请先选择门店和品类"); return
        if not self.cfg.user.token:
            self._log("✗ 需先在「配置」页填登录 token"); return
        self._run_bg(lambda: self._load_stru(st, b), "加载业态")

    def _load_stru(self, st, b):
        strus, shoppes = list_stru_shoppe(PDLClient(self._ui_to_config()), st.code, b.code)
        self.log_q.put(("__STRU__", strus, shoppes))

    def _on_pick_stru(self, _e=None):
        i = self.cb_stru.box.current()
        st, b = self._cur_store(), self._cur_biz()
        if i < 0 or not (st and b and getattr(self, "_strus", None)): return
        try:
            _, shoppes = list_stru_shoppe(PDLClient(self._ui_to_config()),
                                          st.code, b.code, self._strus[i].get("code") or "all")
        except PDLException as e:
            self._log(f"✗ 加载分类失败: {e}"); return
        f = lambda x: str(x.get("title") or x.get("name") or "")
        self.cb_shoppe.box.set_values([f"{f(x)}({x.get('code')})" for x in shoppes])

    def _fill_stru(self, strus, shoppes):
        self._strus, self._shoppes = strus, shoppes
        f = lambda x: str(x.get("title") or x.get("name") or "")
        self.cb_stru.box.set_values([f"{f(x)}({x.get('code')})" for x in strus])
        self.cb_shoppe.box.set_values([f"{f(x)}({x.get('code')})" for x in shoppes])
        self._log(f"✓ 业态 {len(strus)} · 分类 {len(shoppes)}")

    def _on_pick_shoppe(self, _e=None):
        self._on_apply_target(auto=True)

    def _on_apply_target(self, auto: bool = False):
        lat, lng = self._cur_coord()
        self._city0 = get_city(self.city_sel.get()).name
        st, b = self._cur_store(), self._cur_biz()
        vals = {"latlng": f"{lat},{lng}"}
        if st: vals["store_code"] = st.code
        if b: vals["business_code"] = b.code
        i = self.cb_stru.box.current()
        if i >= 0 and getattr(self, "_strus", None):
            vals["structure_code"] = str(self._strus[i].get("code") or "")
        j = self.cb_shoppe.box.current()
        if j >= 0 and getattr(self, "_shoppes", None):
            vals["shoppe_code"] = str(self._shoppes[j].get("code") or "")
        for k, v in vals.items():
            if k in self.vars: self.vars[k].set(v)
        self._refresh_target_summary()
        if not auto:
            self._log("✓ 已应用 " + " ".join(f"{k}={v}" for k, v in vals.items() if v))

    def _refresh_target_summary(self):
        if not hasattr(self, "lbl_target_sum"): return
        g = lambda k: (self.vars[k].get() or "").strip() if k in self.vars else ""
        c = get_city(getattr(self, "_city0", "") or "")
        st, b = self._cur_store(), self._cur_biz()
        st_txt = f"{st.title}" if st else (g("store_code") or "—")
        b_txt = f"{b.title}" if b else (g("business_code") or "—")
        txt = f"{c.name} · {st_txt} · {b_txt}"
        self.lbl_target_sum.configure(text=txt, fg=self.th["text"] if st else self.th["text3"])

    def _sync_city_display(self):
        """按已保存的坐标反推城市。"""
        lat, lng = self._cur_coord()
        for c in CITIES:
            if c.lat == lat and c.lng == lng:
                self.city_sel.set_current(city_names().index(c.name))
                self._city0 = c.name; break
        if not self.coord_edit.get():
            self.coord_edit.var.set(f"{lat},{lng}")
        self._set_coord_display()

    def _autoload_catalog(self):
        """启动即拉真实门店/品类数据, 免手动刷新。"""
        c = get_city(getattr(self, "_city0", "") or "")
        lat, lng = self._cur_coord()
        self.log_q.put(f"加载 {c.name} 门店 …")

        def run():
            try:
                payload = fetch_catalog(lat, lng, c.name, self.cfg)
                self.log_q.put(("__STORES__", c.name, to_stores(payload)))
            except Exception as e:
                self.log_q.put(f"✗ 门店加载失败: {e}")
        threading.Thread(target=run, daemon=True).start()

    def _run_bg(self, fn, name):
        def run():
            try: fn()
            except PDLException as e: self._log(f"✗ [{name}] 失败: {e}")
            except Exception as e: self._log(f"✗ [{name}] 异常: {e}")
        threading.Thread(target=run, daemon=True).start()

    # ---------- 场次页 ----------
    def _page_sessions(self):
        th = self.th
        p = self.pages["sessions"]
        self._title(p, "场次", "双击选择目标场次")
        wrap = tk.Frame(p, bg=th["bg"]); wrap.pack(fill="both", expand=True, padx=44, pady=20)
        style = ttk.Style(); style.theme_use("clam")
        style.configure("S.Treeview", background=th["bg"], fieldbackground=th["bg"],
                        foreground=th["text"], rowheight=34, font=th.sizes["body"],
                        borderwidth=0, relief="flat")
        style.configure("S.Treeview.Heading", background=th["bg"], foreground=th["text2"],
                        font=th.sizes["cap"], relief="flat", borderwidth=0)
        style.map("S.Treeview.Heading", background=[("active", th["bg"])])
        self.tree = ttk.Treeview(wrap, columns=("code", "name", "date", "start", "status"),
                                 show="headings", style="S.Treeview")
        for c, t, w in zip(("code", "name", "date", "start", "status"),
                           ("场次编码", "名称", "日期", "预约开始", "状态"), (170, 140, 100, 160, 80)):
            self.tree.heading(c, text=t); self.tree.column(c, width=w, anchor="center")
        self.tree.pack(fill="both", expand=True)
        self.tree.bind("<Double-1>", self._on_pick_session)

    # ---------- 账号页 ----------
    def _page_accounts(self):
        th = self.th
        p = self.pages["accounts"]
        hdr = self._title(p, "账号", "多账号并发下单")
        btns = tk.Frame(p, bg=th["bg"]); btns.pack(fill="x", padx=44, pady=(14, 0))
        RoundedButton(btns, "+ 添加", self._on_add_account, th, "primary", 88, height=28).pack(side="left", padx=(0, 6))
        RoundedButton(btns, "删除", self._on_del_account, th, "ghost", 76, height=28).pack(side="left", padx=6)
        self.acc_count = tk.Label(btns, text="", bg=th["bg"], fg=th["text3"], font=th.sizes["sub"])
        self.acc_count.pack(side="left", padx=10)
        wrap = tk.Frame(p, bg=th["bg"]); wrap.pack(fill="both", expand=True, padx=44, pady=16)
        style = ttk.Style(); style.theme_use("clam")
        style.configure("A.Treeview", background=th["bg"], fieldbackground=th["bg"],
                        foreground=th["text"], rowheight=32, font=th.sizes["body"], borderwidth=0)
        style.configure("A.Treeview.Heading", background=th["bg"], foreground=th["text2"],
                        font=th.sizes["cap"], relief="flat", borderwidth=0)
        self.acc_tree = ttk.Treeview(wrap, columns=("name", "token", "session", "verify"),
                                     show="headings", style="A.Treeview", height=5)
        for c, t, w in zip(("name", "token", "session", "verify"), ("账号名", "token", "场次", "验证码"),
                           (130, 200, 130, 80)):
            self.acc_tree.heading(c, text=t); self.acc_tree.column(c, width=w, anchor="center")
        self.acc_tree.pack(fill="both", expand=True)
        self.acc_tree.bind("<<TreeviewSelect>>", self._on_pick_account)
        # 编辑表单
        hairline(p, th["sep"])
        form = tk.Frame(p, bg=th["bg"]); form.pack(fill="x", padx=44, pady=16)
        fields = [("账号名", "acc_name"), ("token", "acc_token"), ("设备ID(可空)", "acc_device"),
                  ("专属场次(可空继承)", "acc_session"), ("verifyToken(可空)", "acc_verify")]
        for i, (label, key) in enumerate(fields):
            tk.Label(form, text=label, bg=th["bg"], fg=th["text2"], font=th.sizes["sub"],
                     width=18, anchor="e").grid(row=i, column=0, sticky="e", padx=(0, 14), pady=5)
            e = LineEdit(form, th, width=300, font=th.sizes["body"])
            e.grid(row=i, column=1, sticky="w", pady=5)
            self.vars[key] = e.var
        fb = tk.Frame(form, bg=th["bg"]); fb.grid(row=len(fields), column=1, sticky="w", pady=(12, 0))
        RoundedButton(fb, "应用到选中", self._on_apply_account, th, "ghost", 130).pack(side="left", padx=(0, 8))
        RoundedButton(fb, "保存全部", self._save_accounts, th, "primary", 110).pack(side="left")

    # ---------- 配置页 ----------
    def _page_config(self):
        th = self.th
        p = self.pages["config"]
        self._title(p, "配置")

        form = tk.Frame(p, bg=th["bg"]); form.pack(fill="x", padx=44, pady=22)

        def entry(row, label, key, width=300, placeholder="", mono=False):
            tk.Label(form, text=label, bg=th["bg"], fg=th["text2"], font=th.sizes["sub"],
                     width=18, anchor="e").grid(row=row, column=0, sticky="e", padx=(0, 14), pady=6)
            e = LineEdit(form, th, width=width, font=th.mono if mono else th.sizes["body"])
            e.grid(row=row, column=1, sticky="w", pady=6)
            if placeholder: e.set_placeholder(placeholder)
            self.vars[key] = e.var
            return e

        # 目标摘要(只读, 由「目标」页维护)
        tk.Label(form, text="当前目标", bg=th["bg"], fg=th["text2"], font=th.sizes["sub"],
                 width=18, anchor="e").grid(row=0, column=0, sticky="e", padx=(0, 14), pady=6)
        self.lbl_target_sum = tk.Label(form, text="未选择", bg=th["bg"], fg=th["text3"],
                                       font=th.sizes["body"], anchor="w", justify="left")
        self.lbl_target_sum.grid(row=0, column=1, sticky="w", pady=6)
        RoundedButton(form, "去选择目标", lambda: self._show_page("target"), th, "ghost", 110).grid(
            row=0, column=2, sticky="w", padx=(14, 0), pady=6)

        r = 1
        entry(r, "登录 token", "token")            # _ui_to_config 需要
        tk.Label(form, text="业务线", bg=th["bg"], fg=th["text2"], font=th.sizes["sub"],
                 width=18, anchor="e").grid(row=r + 1, column=0, sticky="e", padx=(0, 14), pady=6)
        self.chan_sel = Select(form, th, values=["market", "tea"], width=300)
        self.chan_sel.grid(row=r + 1, column=1, sticky="w", pady=6)
        self.vars["channel"] = self.chan_sel.var
        r += 2
        entry(r, "场次 sessionCode", "session_code")
        entry(r + 1, "自定义开抢 HH:MM:SS", "fire_at")

        # 验证码区
        hairline(form, th["sep"])
        tk.Label(form, text="人机验证(遇弹窗人工过)", bg=th["bg"], fg=th["text3"],
                 font=th.sizes["cap"]).grid(row=r + 2, column=1, sticky="w", pady=(14, 2))
        base = r + 3
        for j, (label, key) in enumerate([("ticket", "captcha_ticket"), ("randstr", "captcha_randstr"),
                                          ("verifyToken", "verify_token")]):
            entry(base + j, label, key)
        self.captcha_status = tk.Label(form, text="", bg=th["bg"], fg=th["text3"], font=th.sizes["cap"])
        self.captcha_status.grid(row=base + 3, column=1, sticky="w", pady=(6, 0))
        fb = tk.Frame(form, bg=th["bg"]); fb.grid(row=base + 4, column=1, sticky="w", pady=(14, 0))
        RoundedButton(fb, "兑换并缓存 verifyToken", self._on_verify_captcha, th, "ghost", 190).pack(side="left", padx=(0, 8))
        RoundedButton(fb, "保存配置", self._on_save, th, "primary", 110).pack(side="left")

    # ---------- 日志页 ----------
    def _page_log(self):
        th = self.th
        p = self.pages["log"]
        self._title(p, "日志")
        wrap = tk.Frame(p, bg=th["bg"]); wrap.pack(fill="both", expand=True, padx=44, pady=20)
        self.log = tk.Text(wrap, bg=th["bg"], fg=th["text"], insertbackground=th["text"],
                           relief="flat", bd=0, font=(th.mono, 10), wrap="word",
                           padx=2, pady=2, highlightthickness=0, state="disabled")
        sb = ttk.Scrollbar(wrap, orient="vertical", command=self.log.yview)
        self.log.configure(yscrollcommand=sb.set)
        self.log.pack(side="left", fill="both", expand=True)
        sb.pack(side="right", fill="y")

    def _show_page(self, key):
        for k, frame in self.pages.items():
            frame.pack(fill="both", expand=True) if k == key else frame.pack_forget()
        for k, it in self.nav_items.items():
            it.set_selected(k == key)

    # ================= 配置 =================
    def _load_config_to_ui(self):
        c = self.cfg
        m = {"channel": c.channel, "store_code": c.store.store_code, "business_code": c.store.business_code,
             "structure_code": c.store.structure_code, "shoppe_code": c.store.shoppe_code,
             "session_code": c.grab.session_code, "verify_token": c.grab.verify_token,
             "captcha_ticket": c.grab.captcha_ticket, "captcha_randstr": c.grab.captcha_randstr,
             "latlng": f"{c.user.lat},{c.user.lng}" if c.user.lat or c.user.lng else "", "fire_at": ""}
        for k, v in m.items():
            if k in self.vars: self.vars[k].set(v)
        self._refresh_target_summary()

    def _ui_to_config(self):
        c = self.cfg
        g = lambda k: self.vars.get(k).get().strip() if self.vars.get(k) else ""
        c.channel = g("channel") or "market"
        c.user.token = g("token")
        for f in ("store_code", "business_code", "structure_code", "shoppe_code"):
            setattr(c.store, f, g(f))
        for f in ("session_code", "verify_token", "captcha_ticket", "captcha_randstr"):
            setattr(c.grab, f, g(f))
        ll = g("latlng")
        if ll and "," in ll:
            a, b = ll.split(",", 1); c.user.lat, c.user.lng = a.strip(), b.strip()
        return c

    def _on_save(self):
        c = self._ui_to_config()
        dump = {"channel": c.channel,
                "user": {"token": c.user.token, "device_id": c.user.device_id,
                         "lat": c.user.lat, "lng": c.user.lng},
                "city": getattr(self, "_city0", ""),
                "store": {"store_code": c.store.store_code, "business_code": c.store.business_code,
                          "structure_code": c.store.structure_code, "shoppe_code": c.store.shoppe_code, "name": c.store.name},
                "grab": {"session_code": c.grab.session_code, "verify_token": c.grab.verify_token,
                          "captcha_ticket": c.grab.captcha_ticket, "captcha_randstr": c.grab.captcha_randstr,
                          "warmup_seconds": c.grab.warmup_seconds, "auto_retry_on_captcha": c.grab.auto_retry_on_captcha,
                          "max_publish": c.grab.max_publish, "result_timeout": c.grab.result_timeout},
                "accounts": [{k: a.get(k, "") for k in ("name", "token", "device_id", "session_code", "verify_token")}
                             for a in self.accounts],
                "verbose": c.verbose}
        with open("config.json", "w", encoding="utf-8") as f:
            json.dump(dump, f, ensure_ascii=False, indent=2)
        self._log("✓ 配置已保存")

    # ================= 账号 =================
    def _load_accounts(self):
        from .config import load_accounts
        try: accs = load_accounts()
        except Exception: accs = []
        self.accounts = [{"name": n, "token": c.user.token, "device_id": c.user.device_id,
                          "session_code": c.grab.session_code, "verify_token": c.grab.verify_token}
                         for n, c in accs]
        self._refresh_accounts()

    def _save_accounts(self):
        base = self._ui_to_config()
        dump = {"channel": base.channel,
                "user": {"token": base.user.token, "device_id": base.user.device_id,
                         "lat": base.user.lat, "lng": base.user.lng},
                "city": getattr(self, "_city0", ""),
                "store": {f: getattr(base.store, f) for f in ("store_code", "business_code", "structure_code", "shoppe_code", "name")},
                "grab": {"session_code": base.grab.session_code, "verify_token": base.grab.verify_token,
                          "captcha_ticket": base.grab.captcha_ticket, "captcha_randstr": base.grab.captcha_randstr,
                          "warmup_seconds": base.grab.warmup_seconds, "auto_retry_on_captcha": base.grab.auto_retry_on_captcha,
                          "max_publish": base.grab.max_publish, "result_timeout": base.grab.result_timeout},
                "accounts": [{k: a.get(k, "") for k in ("name", "token", "device_id", "session_code", "verify_token")} for a in self.accounts],
                "verbose": base.verbose}
        with open("config.json", "w", encoding="utf-8") as f:
            json.dump(dump, f, ensure_ascii=False, indent=2)
        self._log(f"✓ 已保存 {len(self.accounts)} 个账号")

    def _refresh_accounts(self):
        if not hasattr(self, "acc_tree"): return
        for i in self.acc_tree.get_children(): self.acc_tree.delete(i)
        for idx, a in enumerate(self.accounts):
            tok = a.get("token", "")
            self.acc_tree.insert("", "end", iid=str(idx), values=(
                a.get("name", ""), (tok[:12] + "…") if len(tok) > 12 else (tok or "-"),
                a.get("session_code", "") or "继承", "有" if a.get("verify_token") else "-"))
        self.acc_count.configure(text=f"共 {len(self.accounts)} 个 · 抢购时全部并发")

    def _on_add_account(self):
        self.accounts.append({"name": f"账号{len(self.accounts)+1}", "token": "", "device_id": "",
                              "session_code": "", "verify_token": ""})
        self._refresh_accounts(); self.acc_tree.selection_set(str(len(self.accounts) - 1))

    def _on_del_account(self):
        sel = self.acc_tree.selection()
        if sel: self.accounts.pop(int(sel[0])); self._refresh_accounts()

    def _on_pick_account(self, _e=None):
        sel = self.acc_tree.selection()
        if not sel: return
        a = self.accounts[int(sel[0])]
        for k, f in (("acc_name", "name"), ("acc_token", "token"), ("acc_device", "device_id"),
                     ("acc_session", "session_code"), ("acc_verify", "verify_token")):
            if k in self.vars: self.vars[k].set(a.get(f, ""))

    def _on_apply_account(self):
        sel = self.acc_tree.selection()
        if not sel: return
        a = self.accounts[int(sel[0])]
        a["name"] = self.vars["acc_name"].get().strip() or a.get("name", "")
        a["token"] = self.vars["acc_token"].get().strip()
        if self.vars["acc_device"].get().strip(): a["device_id"] = self.vars["acc_device"].get().strip()
        a["session_code"] = self.vars["acc_session"].get().strip()
        a["verify_token"] = self.vars["acc_verify"].get().strip()
        self._refresh_accounts()

    # ================= 后台任务 =================
    def _bg(self, fn, name):
        if self.busy:
            self._log(f"[{name}] 已有任务运行中"); return
        self.busy = True
        for b in (self.btn_load, self.btn_sched, self.btn_now): b.set_enabled(False)
        self.btn_stop.set_enabled(True); self.status_lbl.configure(text=name)
        def run():
            try: fn()
            except CaptchaRequired as e:
                self._log(f"✗ 需要人机验证: {e}")
            except PDLException as e: self._log(f"✗ [{name}] 失败: {e}")
            except Exception as e: self._log(f"✗ [{name}] 异常: {e}")
            finally: self.log_q.put("__DONE__")
        threading.Thread(target=run, daemon=True).start()

    def _on_stop(self): self._log("已请求停止(当前请求完成后生效)")

    def _on_load_sessions(self): self._bg(self._load_sessions, "加载场次")

    def _load_sessions(self):
        cfg = self._ui_to_config(); cfg.validate()
        ctx = PDLClient(cfg).booking_context()
        self.sessions = load_sessions(ctx.get("sessions"))
        self.log_q.put(f"__SESSIONS__{len(self.sessions)}")
        user = ctx.get("user") or {}
        st = str(user.get("status", ""))
        if st and st != "0000": self._log(f"⚠ 账号状态 {st}: {user.get('statusDesc','')}")
        if (ctx.get("captchaInfo") or {}).get("enabled"): self._log("⚠ 该门店启用了人机验证")
        for s in self.sessions:
            self._log(f"  {s.code}  {s.name}  {s.date}  开始={s.booking_start}  可约={s.bookable}")

    def _on_pick_session(self, _e=None):
        sel = self.tree.selection()
        if not sel: return
        s = next((x for x in self.sessions if x.code == sel[0]), None)
        if not s: return
        self.target = s
        if self.vars.get("session_code"): self.vars["session_code"].set(s.code)
        lines = [f"{s.code}  {s.name}", f"预约开始  {s.booking_start or '-'}",
                 f"状态  {'可约' if s.bookable else (s.status or '-')}"]
        self.quick_lbl.configure(text="\n".join(lines))
        if s.fire_at: self.lbl_target.configure(text=f"目标 {s.code} · 开抢 {s.fire_at:%m-%d %H:%M:%S}")
        self._log(f"✓ 已选场次 {s.code}")

    def _fire_at(self):
        if self.target and self.target.fire_at: return self.target.fire_at
        raw = self.vars.get("fire_at").get().strip() if self.vars.get("fire_at") else ""
        if raw:
            try:
                now = datetime.now()
                t = datetime.strptime(raw, "%H:%M:%S").replace(year=now.year, month=now.month, day=now.day)
                return t if t >= now else t + timedelta(days=1)
            except ValueError: self._log("开抢时间格式应为 HH:MM:SS")
        return None

    def _accounts(self, cfg):
        from .config import _merge_account
        accs = [(a.get("name") or "账号", _merge_account(cfg, a, i))
                for i, a in enumerate(self.accounts) if (a.get("token") or "").strip()]
        return accs or ([(cfg.store.name or "账号1", cfg)] if cfg.user.token else [])

    def _on_scheduled(self):
        fire_at = self._fire_at()
        if fire_at is None:
            messagebox.showinfo("提示", "请先在「场次」页双击选择场次, 或在「配置」填写开抢时间"); return
        cfg = self._ui_to_config()
        self._bg(lambda: self._scheduled(cfg, fire_at), "定时抢购")

    def _scheduled(self, cfg, fire_at):
        accs = self._accounts(cfg)
        if len(accs) > 1:
            with MultiAccountGrabber(accs, on_log=self._grab_log) as mg:
                for r in mg.run_scheduled(fire_at):
                    self._log(f"  {'✓' if r.success else '✗'} {r.name}: {r.message}")
            return
        with ScheduledGrabber(cfg, on_log=self._grab_log) as g:
            self._log(f"抢购结果: {g.run_scheduled(fire_at)}")

    def _on_grab_now(self):
        cfg = self._ui_to_config()
        self._bg(lambda: self._grab_now(cfg), "立即抢购")

    def _grab_now(self, cfg):
        accs = self._accounts(cfg)
        if len(accs) > 1:
            with MultiAccountGrabber(accs, on_log=self._grab_log) as mg:
                for r in mg.grab_now():
                    self._log(f"  {'✓' if r.success else '✗'} {r.name}: {r.message}")
            return
        with ScheduledGrabber(cfg, on_log=self._grab_log) as g:
            g.prepare(); self._log(f"抢购结果: {g.grab()}")

    def _grab_log(self, msg): self.log_q.put(msg)

    def _on_verify_captcha(self):
        cfg = self._ui_to_config(); session = cfg.grab.session_code
        if not session: self.captcha_status.configure(text="⚠ 请先选择场次", fg=self.th["warn"]); return
        if not cfg.grab.captcha_ticket: self.captcha_status.configure(text="⚠ 请先填入 ticket", fg=self.th["warn"]); return
        self.captcha_status.configure(text="兑换中 ...", fg=self.th["text2"])
        self._bg(lambda: self._verify_captcha(cfg, session), "兑换验证码")

    def _verify_captcha(self, cfg, session):
        try:
            token = CaptchaSolver(cfg).exchange(cfg.grab.captcha_ticket, cfg.grab.captcha_randstr, session)
            self.log_q.put(f"__CAPTCHA_OK__{token}")
        except Exception as e:
            self.log_q.put(f"__CAPTCHA_FAIL__{e}")

    # ================= 时钟/日志 =================
    def _log(self, t): self.log_q.put(t)

    def _append_log(self, text):
        self.log.configure(state="normal")
        for line in text.splitlines() or [""]: self.log.insert("end", line + "\n")
        self.log.see("end"); self.log.configure(state="disabled")

    def _refresh_table(self, n):
        for i in self.tree.get_children(): self.tree.delete(i)
        for s in self.sessions:
            self.tree.insert("", "end", iid=s.code, values=(
                s.code, s.name, s.date or "-",
                s.booking_start.strftime("%m-%d %H:%M:%S") if s.booking_start else "-",
                "可约" if s.bookable else ("已满" if s.status == "full" else (s.status or "-"))))
        self.status_lbl.configure(text=f"{n} 个场次")

    def _tick(self):
        now = datetime.now()
        self.lbl_clock.configure(text=now.strftime("%H:%M:%S"))
        self.lbl_date.configure(text=now.strftime("%Y.%m.%d  %A"))
        fire = self.target.fire_at if (self.target and self.target.fire_at) else self._fire_at()
        if fire:
            left = (fire - now).total_seconds()
            self.lbl_count.configure(text=("已开抢" if left <= 0 else f"{self._fmt(left)} 后开抢"),
                                     fg=self.th["danger"] if 0 < left <= 60 else self.th["text"])
        try:
            while True:
                m = self.log_q.get_nowait()
                if isinstance(m, tuple) and m and m[0] == "__STORES__":
                    self._stores = m[2]; self._fill_stores(m[1], m[2])
                elif isinstance(m, tuple) and m and m[0] == "__STRU__":
                    self._fill_stru(m[1], m[2])
                elif m == "__DONE__":
                    self.busy = False
                    for b in (self.btn_load, self.btn_sched, self.btn_now): b.set_enabled(True)
                    self.btn_stop.set_enabled(False); self.status_lbl.configure(text="就绪")
                elif m.startswith("__SESSIONS__"): self._refresh_table(int(m.split("__SESSIONS__")[1]))
                elif m.startswith("__CAPTCHA_OK__"):
                    self.vars["verify_token"].set(m.split("__CAPTCHA_OK__")[1])
                    self.captcha_status.configure(text="✓ 已缓存 verifyToken", fg=self.th["ok"])
                elif m.startswith("__CAPTCHA_FAIL__"):
                    self.captcha_status.configure(text=f"✗ {m.split('__CAPTCHA_FAIL__')[1]}", fg=self.th["danger"])
                else: self._append_log(m)
        except queue.Empty: pass
        if not self._closing: self.after(150, self._tick)

    @staticmethod
    def _fmt(sec):
        sec = int(max(0, sec)); h, r = divmod(sec, 3600); m, s = divmod(r, 60)
        if h: return f"{h}时{m:02d}分"
        if m: return f"{m}分{s:02d}秒"
        return f"{s}秒"

    def _on_close(self):
        self._closing = True; self.destroy()


def main():
    app = GrabApp(); app.mainloop()


if __name__ == "__main__":
    main()


class _Sel:
    """下拉框包装, 便于级联读取/设置。"""
    __slots__ = ("box", "var", "name", "label")

    def __init__(self, box, name):
        self.box, self.name = box, name
        self.var = box.var
