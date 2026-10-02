"""
极简 UI 组件库 (Tkinter 自绘)。

设计取向 (极简 / shan-ui):
  - 单色灰阶为主, 仅用「近黑/纯白」作唯一强调色, 克制的高对比
  - 发丝线(1px)分隔, 不用卡片填充/阴影/大圆角
  - 大留白, 轻字重, 清晰的层级
  - 深浅色自动跟随系统
"""
from __future__ import annotations

import subprocess
import tkinter as tk
from tkinter import font as tkfont
from typing import Callable, Optional

# ---------- 单色极简色板 ----------
LIGHT = {
    "bg": "#FFFFFF", "bg_alt": "#FAFAFA", "surface": "#FFFFFF",
    "text": "#1C1C1E", "text2": "#8A8A8F", "text3": "#B9B9BE",
    "sep": "#E9E9EC", "sep_strong": "#D6D6DA",
    "accent": "#1C1C1E", "accent_text": "#FFFFFF",          # 近黑主按钮
    "ghost": "#F2F2F4", "ghost_text": "#1C1C1E",
    "sel": "#F4F4F6", "danger": "#E5484D",
    "ok": "#2FA96B", "warn": "#C88A04",
}
DARK = {
    "bg": "#0D0D0F", "bg_alt": "#131315", "surface": "#161618",
    "text": "#EDEDF0", "text2": "#8B8B90", "text3": "#5A5A60",
    "sep": "#222225", "sep_strong": "#2E2E32",
    "accent": "#F2F2F4", "accent_text": "#0D0D0F",          # 纯白主按钮
    "ghost": "#1C1C1F", "ghost_text": "#EDEDF0",
    "sel": "#1A1A1D", "danger": "#FF6369",
    "ok": "#3DD68C", "warn": "#E3B341",
}


def is_dark() -> bool:
    try:
        r = subprocess.run(["defaults", "read", "-g", "AppleInterfaceStyle"],
                           capture_output=True, text=True, timeout=2)
        return "Dark" in r.stdout
    except Exception:
        return False


class Theme:
    def __init__(self, root: tk.Misc):
        self.dark = is_dark()
        self.c = dict(DARK if self.dark else LIGHT)
        fams = set(tkfont.families(root))
        self.font = next((f for f in ("SF Pro Text", "SF Pro", "PingFang SC", "Helvetica Neue") if f in fams),
                          "PingFang SC" if "PingFang SC" in fams else "Helvetica")
        self.mono = "SF Mono" if "SF Mono" in fams else ("Menlo" if "Menlo" in fams else "Courier")
        def F(size, weight=""):
            opts = {"family": self.font, "size": size}
            if weight:
                opts["weight"] = weight
            return tkfont.Font(root=root, **opts)
        self.sizes = {
            "display": F(34, "bold"), "title": F(20, "bold"), "head": F(14, "bold"),
            "body": F(13), "body_b": F(13, "bold"), "callout": F(12), "sub": F(11), "cap": F(10),
        }
        self.clock = tkfont.Font(root=root, family=self.mono, size=40, weight="bold")
        self.countdown = tkfont.Font(root=root, family=self.mono, size=22, weight="bold")

    def __getitem__(self, k):
        return self.c[k]


def _mgr(parent):
    """探测父容器用的是 pack 还是 grid。"""
    for ch in parent.winfo_children():
        m = ch.winfo_manager()
        if m in ("pack", "grid"):
            return m
    return "pack"


def hairline(parent, color, pady=0):
    """发丝线分隔，自动适配父容器的布局管理器。"""
    f = tk.Frame(parent, bg=color, height=1)
    if _mgr(parent) == "grid":
        f.grid(row=parent.grid_size()[1], column=0, columnspan=99, sticky="ew", pady=pady)
    else:
        f.pack(fill="x", pady=pady)
    return f
    return f


def round_rect(canvas, x1, y1, x2, y2, r, **kw):
    r = min(r, (x2 - x1) // 2, (y2 - y1) // 2)
    pts = [x1+r,y1, x2-r,y1, x2,y1, x2,y1+r, x2,y2-r, x2,y2, x2-r,y2, x1+r,y2, x1,y2, x1,y2-r, x1,y1+r, x1,y1]
    return canvas.create_polygon(pts, smooth=True, **kw)


class RoundedButton(tk.Canvas):
    """极简按钮: primary(实心单色) / ghost(浅底) 两种, 极小圆角。"""

    def __init__(self, parent, text, command: Optional[Callable] = None,
                 theme: Optional[Theme] = None, variant: str = "primary",
                 width: int = 140, height: int = 32, font=None, radius: int = 6):
        th = theme or Theme(parent)
        super().__init__(parent, width=width, height=height, highlightthickness=0, bd=0,
                         bg=parent.cget("bg"))
        self.th, self.command, self.variant = th, command, variant
        self.text, self.cw, self.ch, self._r = text, width, height, radius
        self.font = font or th.sizes["body"]
        self._enabled, self._state = True, "normal"
        self.bind("<Configure>", lambda e: self._draw())
        self.bind("<Enter>", lambda e: self._set("hover"))
        self.bind("<Leave>", lambda e: self._set("normal"))
        self.bind("<ButtonPress-1>", lambda e: self._set("press"))
        self.bind("<ButtonRelease-1>", lambda e: self._release())
        self._draw()

    def _colors(self):
        th, v, s = self.th, self.variant, self._state
        if not self._enabled:
            return (th["sep"], th["text3"]) if v == "ghost" else (th["sep"], th["text3"])
        if v == "primary":
            base = th["accent"]
            if s == "hover":
                base = th["text2"] if not th.dark else th["text3"]
            elif s == "press":
                base = th["text3"]
            return base, th["accent_text"]
        # ghost
        g = {"normal": th["ghost"], "hover": th["sel"], "press": th["sep"]}[s]
        return g, th["ghost_text"]

    def _draw(self):
        self.delete("all")
        bg, fg = self._colors()
        round_rect(self, 0, 0, self.cw, self.ch, self._r, fill=bg, outline="")
        self.create_text(self.cw/2, self.ch/2, text=self.text, fill=fg, font=self.font)

    def _set(self, s):
        self._state = s; self._draw()

    def _release(self):
        self._set("hover")
        if self._enabled and self.command:
            self.command()

    def set_text(self, t):
        self.text = t; self._draw()

    def set_enabled(self, en: bool):
        self._enabled = en
        self.cursor = "hand2" if en else "arrow"
        self._draw()


class SidebarItem(tk.Canvas):
    """极简侧边栏项: 选中仅左侧一条细竖线 + 深色文字。"""

    def __init__(self, parent, text, command, theme: Theme, width=180, height=36, selected=False):
        super().__init__(parent, width=width, height=height, highlightthickness=0, bd=0, bg=theme["bg"])
        self.th, self.text, self.command = theme, text, command
        self.cw, self.ch, self._selected, self._hover = width, height, selected, False
        self.bind("<Configure>", lambda e: self._draw())
        self.bind("<Enter>", lambda e: self._set_hover(True))
        self.bind("<Leave>", lambda e: self._set_hover(False))
        self.bind("<Button-1>", lambda e: self.command())
        self._draw()

    def _set_hover(self, h):
        self._hover = h; self._draw()

    def _draw(self):
        self.delete("all")
        th = self.th
        if self._selected:
            self.create_rectangle(0, 6, 3, self.ch - 6, fill=th["accent"], outline="")  # 细竖线
            fg, fnt = th["text"], th.sizes["body_b"]
        else:
            fg = th["text"] if self._hover else th["text2"]
            fnt = th.sizes["body"]
        self.create_text(20, self.ch/2, text=self.text, anchor="w", fill=fg, font=fnt)

    def set_selected(self, s):
        self._selected = s; self._draw()


class LineEdit(tk.Canvas):
    """极简输入框: 无边框, 仅底部一条发丝线, 聚焦时变实色。"""

    def __init__(self, parent, theme: Theme, width: int = 300, height: int = 30,
                 font=None, initial: str = ""):
        super().__init__(parent, width=width, height=height, highlightthickness=0, bd=0,
                         bg=parent.cget("bg"))
        self.th = theme
        self.cw, self.ch = width, height
        self.font = font or theme.sizes["body"]
        self.var = tk.StringVar(value=initial)
        self.var.trace_add("write", lambda *_: self._draw())
        self._focus = False
        self._placeholder = ""
        self.bind("<Configure>", lambda e: self._draw())
        self.bind("<Button-1>", lambda e: self.focus_set())
        self.bind("<FocusIn>", lambda e: (setattr(self, "_focus", True), self._draw()))
        self.bind("<FocusOut>", lambda e: (setattr(self, "_focus", False), self._draw()))
        self._draw()

    def set_placeholder(self, t: str):
        self._placeholder = t; self._draw()

    def get(self) -> str:
        return self.var.get().strip()

    def _draw(self):
        self.delete("all")
        th = self.th
        empty = not self.var.get()
        self.create_text(0, 2, text=self._placeholder if empty else self.var.get(),
                         fill=th["text3"] if empty else th["text"], font=self.font, anchor="w")
        # 只有聚焦时显示底线, 平时完全隐形 —— 减少视觉噪音
        self.create_line(0, self.ch - 1, self.cw, self.ch - 1,
                         fill=th["text3"] if self._focus else th["sep"], width=1)


class Select(tk.Canvas):
    """
    极简下拉框: 常态只有一条发丝线, 选中/悬停才显出填充。
    不用 ttk.Combobox —— 系统控件在深色主题下永远是白底, 无法统一。
    """

    def __init__(self, parent, theme: Theme, values=None, width: int = 300, height: int = 30,
                 font=None, on_change=None):
        super().__init__(parent, width=width, height=height, highlightthickness=0, bd=0,
                         bg=parent.cget("bg"))
        self.th, self.on_change = theme, on_change
        self.cw, self.ch = width, height
        self.font = font or theme.sizes["body"]
        self.values: list[str] = list(values or [])
        self._index = -1
        self._open = False
        self._hover = False
        self.var = tk.StringVar()
        self._popup: Optional[tk.Toplevel] = None
        self._hover_idx = -1
        self.bind("<Configure>", lambda e: self._draw())
        self.bind("<Button-1>", self._toggle)
        self.bind("<Enter>", lambda e: (setattr(self, "_hover", True), self._draw()))
        self.bind("<Leave>", lambda e: (setattr(self, "_hover", False), self._draw()))
        self._draw()

    # ---- 值 ----
    def set_values(self, vals, keep: bool = True):
        cur = self.get()
        self.values = list(vals)
        self._index = self.values.index(cur) if keep and cur in self.values else -1
        if self._index < 0 and self.values:
            self._index = 0
        self.var.set(self.values[self._index] if self._index >= 0 else "")
        self._draw()

    def get(self) -> str:
        return self.var.get().strip()

    def current(self) -> int:
        return self._index

    def set_current(self, i: int):
        if 0 <= i < len(self.values):
            self._index = i; self.var.set(self.values[i]); self._draw()

    def set_enabled(self, en: bool):
        self._enabled = en
        self.cursor = "hand2" if en else "arrow"
        self._draw()

    _enabled = True

    # ---- 绘制 ----
    def _draw(self):
        self.delete("all")
        th = self.th
        if not self._enabled:
            fg, line = th["text3"], th["sep"]
        elif self._open or self._hover:
            fg, line = th["text"], th["sep_strong"]
        else:
            fg, line = th["text"], th["sep"]
        self.create_text(0, self.ch/2, text=self.get(), fill=fg, font=self.font, anchor="w")
        # 右侧小箭头(极细三角, 不用系统箭头位图)
        cx, cy, s = self.cw - 9, self.ch/2, 4
        self.create_polygon(cx-s, cy-2, cx+s, cy-2, cx, cy+3,
                            fill=th["text3"] if self._enabled else th["sep"], outline="")
        self.create_line(0, self.ch-1, self.cw, self.ch-1, fill=line, width=1)

    # ---- 弹层 ----
    def _toggle(self, _e=None):
        if not self._enabled or not self.values:
            return
        self._open = not self._open
        self._draw()
        if self._open: self._show_popup()
        else: self._close_popup()

    def _show_popup(self):
        self._close_popup()
        top = self.winfo_toplevel()
        x = self.winfo_rootx(); y = self.winfo_rooty() + self.ch + 2
        w = self.cw
        h = min(len(self.values), 8) * 30 + 8
        win = tk.Toplevel(top)
        win.overrideredirect(True); win.geometry(f"{w}x{h}+{x}+{y}")
        f = tk.Frame(win, bg=self.th["sep_strong"]); f.pack(fill="both", expand=True)
        inner = tk.Frame(f, bg=self.th["surface"]); inner.pack(fill="both", expand=True, padx=1, pady=1)
        for i, v in enumerate(self.values):
            lbl = tk.Label(inner, text=v, bg=self.th["surface"], fg=self.th["text"],
                           font=self.font, anchor="w", padx=10, height=1)
            lbl.pack(fill="x")
            lbl.bind("<Enter>", lambda e, k=i: self._hover_row(k))
            lbl.bind("<Leave>", lambda e: self._hover_row(-1))
            lbl.bind("<Button-1>", lambda e, k=i: self._pick(k))
        self._popup = win
        # 点击外部关闭
        win.bind("<Button-1>", lambda e: self._close_popup())
        top.bind("<Button-1>", self._outside, add="+")

    def _hover_row(self, i: int):
        self._hover_idx = i
        if self._popup:
            inner = self._popup.winfo_children()[0].winfo_children()[0]
            for k, w in enumerate(inner.winfo_children()):
                w.configure(bg=self.th["sel"] if k == i else self.th["surface"])

    def _pick(self, i: int):
        self._index = i; self.var.set(self.values[i])
        self._close_popup(); self._draw()
        if self.on_change: self.on_change()

    def _close_popup(self):
        if self._popup is not None:
            self._popup.destroy(); self._popup = None
            self._open = False
            try: self.winfo_toplevel().unbind("<Button-1>", self._outside)
            except Exception: pass
            self._draw()

    def _outside(self, e):
        """点击本控件之外 -> 关闭弹层。"""
        if self._popup and not (self._in(self, e) or (self._popup and self._in(self._popup, e))):
            self._close_popup()

    @staticmethod
    def _in(win, e) -> bool:
        try:
            w, h = win.winfo_width(), win.winfo_height()
            return win.winfo_rootx() <= e.x_root < win.winfo_rootx() + w and \
                   win.winfo_rooty() <= e.y_root < win.winfo_rooty() + h
        except Exception:
            return False


class Toggle(tk.Canvas):
    """极简开关: 一个小圆点 + 一条轨道, 无系统控件外观。"""

    def __init__(self, parent, text: str, theme: Theme, on_change=None, value: bool = False,
                 width: int = 92, height: int = 22):
        super().__init__(parent, width=width, height=height, highlightthickness=0, bd=0,
                         bg=parent.cget("bg"))
        self.th, self.text, self.on_change = theme, text, on_change
        self.cw, self.ch, self.value = width, height, value
        self._hover = False
        self.bind("<Configure>", lambda e: self._draw())
        self.bind("<Enter>", lambda e: (setattr(self, "_hover", True), self._draw()))
        self.bind("<Leave>", lambda e: (setattr(self, "_hover", False), self._draw()))
        self.bind("<Button-1>", self._flip)
        self._draw()

    def _flip(self, _e=None):
        self.value = not self.value; self._draw()
        if self.on_change: self.on_change(self.value)

    def set(self, v: bool):
        self.value = v; self._draw()

    def _draw(self):
        self.delete("all")
        th = self.th
        on = self.value
        track = th["text"] if on else th["sep_strong"]
        tw, thh, r = 30, 16, 8
        tx, ty = 0, (self.ch - thh) / 2
        self.create_line(tx + r, ty + thh/2, tx + tw - r, ty + thh/2, fill=track,
                         width=thh, capstyle="round")
        cx = tx + tw - r if on else tx + r
        self.create_oval(cx - r + 1, ty + 1, cx + r - 1, ty + thh - 1,
                         fill=th["bg"] if on else th["text3"], outline="")
        fg = th["text"] if on else th["text3"]
        self.create_text(tw + 12, self.ch/2, text=self.text, fill=fg,
                         font=th.sizes["sub"], anchor="w")
