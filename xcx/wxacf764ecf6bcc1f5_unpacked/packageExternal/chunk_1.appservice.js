$gwx18_XC_1 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function(path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {};
            else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        var e_ = {}
        if (typeof(global.entrys) === 'undefined') global.entrys = {};
        e_ = global.entrys;
        var d_ = {}
        if (typeof(global.defines) === 'undefined') global.defines = {};
        d_ = global.defines;
        var f_ = {}
        if (typeof(global.modules) === 'undefined') global.modules = {};
        f_ = global.modules || {};
        var p_ = {}
        __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
        __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
        __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
        var z = __WXML_GLOBAL__.ops_set.$gwx18_XC_1 || [];

        function gz$gwx18_XC_1_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx18_XC_1_1) return __WXML_GLOBAL__.ops_cached.$gwx18_XC_1_1
            __WXML_GLOBAL__.ops_cached.$gwx18_XC_1_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'uni-countdown data-v-ddb56868'])
                Z([
                    [7],
                    [3, 'showDay']
                ])
                Z(z[1])
                Z([
                    [7],
                    [3, 'showHour']
                ])
                Z(z[3])
                Z([
                    [7],
                    [3, 'showMinute']
                ])
                Z(z[5])
                Z([
                    [2, '!'],
                    [
                        [7],
                        [3, 'showColon']
                    ]
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx18_XC_1_1);
            return __WXML_GLOBAL__.ops_cached.$gwx18_XC_1_1
        }
        __WXML_GLOBAL__.ops_set.$gwx18_XC_1 = z;
        __WXML_GLOBAL__.ops_init.$gwx18_XC_1 = true;
        var x = ['./packageExternal/components/countdown-sync/countdown-sync.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx18_XC_1_1()
            var xC = _n('view')
            _rz(z, xC, 'class', 0, e, s, gg)
            var oD = _v()
            _(xC, oD)
            if (_oz(z, 1, e, s, gg)) {
                oD.wxVkey = 1
            }
            var fE = _v()
            _(xC, fE)
            if (_oz(z, 2, e, s, gg)) {
                fE.wxVkey = 1
            }
            var cF = _v()
            _(xC, cF)
            if (_oz(z, 3, e, s, gg)) {
                cF.wxVkey = 1
            }
            var hG = _v()
            _(xC, hG)
            if (_oz(z, 4, e, s, gg)) {
                hG.wxVkey = 1
            }
            var oH = _v()
            _(xC, oH)
            if (_oz(z, 5, e, s, gg)) {
                oH.wxVkey = 1
            }
            var cI = _v()
            _(xC, cI)
            if (_oz(z, 6, e, s, gg)) {
                cI.wxVkey = 1
            }
            var oJ = _v()
            _(xC, oJ)
            if (_oz(z, 7, e, s, gg)) {
                oJ.wxVkey = 1
            }
            oD.wxXCkey = 1
            fE.wxXCkey = 1
            cF.wxXCkey = 1
            hG.wxXCkey = 1
            oH.wxXCkey = 1
            cI.wxXCkey = 1
            oJ.wxXCkey = 1
            _(r, xC)
            return r
        }
        e_[x[0]] = {
            f: m0,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        if (path && e_[path]) {
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx18_XC_1";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                } catch (err) {
                    console.log(err)
                };
                g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx18_XC_1();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packageExternal/components/countdown-sync/countdown-sync.wxml'] = [$gwx18_XC_1, './packageExternal/components/countdown-sync/countdown-sync.wxml'];
else __wxAppCode__['packageExternal/components/countdown-sync/countdown-sync.wxml'] = $gwx18_XC_1('./packageExternal/components/countdown-sync/countdown-sync.wxml');;
__wxRoute = "packageExternal/components/countdown-sync/countdown-sync";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packageExternal/components/countdown-sync/countdown-sync.js";
define("packageExternal/components/countdown-sync/countdown-sync.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
        ["packageExternal/components/countdown-sync/countdown-sync"], {
            "1bef": function(t, e, n) {
                n.r(e);
                var o = n("81e6"),
                    i = n.n(o);
                for (var s in o)["default"].indexOf(s) < 0 && function(t) {
                    n.d(e, t, (function() {
                        return o[t]
                    }))
                }(s);
                e.default = i.a
            },
            "81e6": function(t, e, n) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0, e.default = {
                    name: "CountdownSync",
                    emits: ["timeup"],
                    props: {
                        endTimestamp: {
                            type: Number,
                            default: 0
                        },
                        serverOffset: {
                            type: Number,
                            default: 0
                        },
                        start: {
                            type: Boolean,
                            default: !0
                        },
                        showDay: {
                            type: Boolean,
                            default: !0
                        },
                        showHour: {
                            type: Boolean,
                            default: !0
                        },
                        showMinute: {
                            type: Boolean,
                            default: !0
                        },
                        showColon: {
                            type: Boolean,
                            default: !0
                        },
                        backgroundColor: {
                            type: String,
                            default: ""
                        },
                        color: {
                            type: String,
                            default: "#333"
                        },
                        fontSize: {
                            type: Number,
                            default: 14
                        },
                        splitorColor: {
                            type: String,
                            default: "#333"
                        },
                        dayText: {
                            type: String,
                            default: "天"
                        },
                        hourText: {
                            type: String,
                            default: "时"
                        },
                        minuteText: {
                            type: String,
                            default: "分"
                        },
                        secondText: {
                            type: String,
                            default: "秒"
                        }
                    },
                    data: function() {
                        return {
                            timer: null,
                            hasTimeup: !1,
                            d: "00",
                            h: "00",
                            i: "00",
                            s: "00"
                        }
                    },
                    computed: {
                        timeStyle: function() {
                            var t = this.color,
                                e = this.backgroundColor,
                                n = this.fontSize;
                            return {
                                color: t,
                                backgroundColor: e,
                                fontSize: "".concat(n, "px"),
                                width: "".concat(22 * n / 14, "px"),
                                lineHeight: "".concat(20 * n / 14, "px"),
                                borderRadius: "".concat(3 * n / 14, "px")
                            }
                        },
                        splitorStyle: function() {
                            var t = this.splitorColor,
                                e = this.fontSize,
                                n = this.backgroundColor;
                            return {
                                color: t,
                                fontSize: "".concat(12 * e / 14, "px"),
                                margin: n ? "".concat(4 * e / 14, "px") : ""
                            }
                        }
                    },
                    watch: {
                        endTimestamp: function() {
                            this.restart()
                        },
                        serverOffset: function() {
                            this.tick()
                        },
                        start: {
                            immediate: !1,
                            handler: function(t) {
                                t ? this.restart() : this.clear()
                            }
                        }
                    },
                    created: function() {
                        this.start ? this.restart() : this.tick()
                    },
                    destroyed: function() {
                        this.clear()
                    },
                    methods: {
                        nowAligned: function() {
                            return Date.now() + (this.serverOffset || 0)
                        },
                        pad: function(t) {
                            return (t = Math.floor(t)) < 10 ? "0" + t : "" + t
                        },
                        tick: function() {
                            if (this.endTimestamp) {
                                var t = this.endTimestamp - this.nowAligned();
                                if (t <= 0) return this.d = this.h = this.i = this.s = "00", void(this.hasTimeup || (this.hasTimeup = !0, this.clear(), this.$emit("timeup")));
                                this.hasTimeup = !1;
                                var e = Math.floor(t / 1e3),
                                    n = Math.floor(e / 86400),
                                    o = Math.floor(e / 3600) - 24 * n,
                                    i = Math.floor(e / 60) - 24 * n * 60 - 60 * o,
                                    s = e - 86400 * n - 3600 * o - 60 * i;
                                this.d = this.pad(n), this.h = this.pad(o), this.i = this.pad(i), this.s = this.pad(s)
                            } else this.d = this.h = this.i = this.s = "00"
                        },
                        restart: function() {
                            var t = this;
                            this.clear(), this.hasTimeup = !1, this.tick(), this.endTimestamp && (this.timer = setInterval((function() {
                                t.tick()
                            }), 1e3))
                        },
                        clear: function() {
                            this.timer && (clearInterval(this.timer), this.timer = null)
                        },
                        update: function() {
                            this.restart()
                        }
                    }
                }
            },
            "9f6a": function(t, e, n) {
                n.r(e);
                var o = n("af324"),
                    i = n("1bef");
                for (var s in i)["default"].indexOf(s) < 0 && function(t) {
                    n.d(e, t, (function() {
                        return i[t]
                    }))
                }(s);
                n("d8cd");
                var a = n("f0c5"),
                    r = Object(a.a)(i.default, o.b, o.c, !1, null, "ddb56868", null, !1, o.a, void 0);
                e.default = r.exports
            },
            af324: function(t, e, n) {
                n.d(e, "b", (function() {
                    return o
                })), n.d(e, "c", (function() {
                    return i
                })), n.d(e, "a", (function() {}));
                var o = function() {
                        var t = this,
                            e = (t.$createElement, t._self._c, t.showDay ? t.__get_style([t.timeStyle]) : null),
                            n = t.showDay ? t.__get_style([t.splitorStyle]) : null,
                            o = t.showHour ? t.__get_style([t.timeStyle]) : null,
                            i = t.showHour ? t.__get_style([t.splitorStyle]) : null,
                            s = t.showMinute ? t.__get_style([t.timeStyle]) : null,
                            a = t.showMinute ? t.__get_style([t.splitorStyle]) : null,
                            r = t.__get_style([t.timeStyle]),
                            l = t.showColon ? null : t.__get_style([t.splitorStyle]);
                        t.$mp.data = Object.assign({}, {
                            $root: {
                                s0: e,
                                s1: n,
                                s2: o,
                                s3: i,
                                s4: s,
                                s5: a,
                                s6: r,
                                s7: l
                            }
                        })
                    },
                    i = []
            },
            bf6a: function(t, e, n) {},
            d8cd: function(t, e, n) {
                var o = n("bf6a");
                n.n(o).a
            }
        }
    ]), (global.webpackJsonp = global.webpackJsonp || []).push(["packageExternal/components/countdown-sync/countdown-sync-create-component", {
            "packageExternal/components/countdown-sync/countdown-sync-create-component": function(t, e, n) {
                n("543d").createComponent(n("9f6a"))
            }
        },
        [
            ["packageExternal/components/countdown-sync/countdown-sync-create-component"]
        ]
    ]);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'packageExternal/components/countdown-sync/countdown-sync.js'
});
require("packageExternal/components/countdown-sync/countdown-sync.js");