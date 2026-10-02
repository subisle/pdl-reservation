$gwx18_XC_32 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx18_XC_32 || [];

        function gz$gwx18_XC_32_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx18_XC_32_1) return __WXML_GLOBAL__.ops_cached.$gwx18_XC_32_1
            __WXML_GLOBAL__.ops_cached.$gwx18_XC_32_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'uni-countdown data-v-439a2ad4'])
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
            })(__WXML_GLOBAL__.ops_cached.$gwx18_XC_32_1);
            return __WXML_GLOBAL__.ops_cached.$gwx18_XC_32_1
        }
        __WXML_GLOBAL__.ops_set.$gwx18_XC_32 = z;
        __WXML_GLOBAL__.ops_init.$gwx18_XC_32 = true;
        var x = ['./packageExternal/uni_modules/uni-countdown/components/uni-countdown/uni-countdown.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx18_XC_32_1()
            var aPR = _n('view')
            _rz(z, aPR, 'class', 0, e, s, gg)
            var tQR = _v()
            _(aPR, tQR)
            if (_oz(z, 1, e, s, gg)) {
                tQR.wxVkey = 1
            }
            var eRR = _v()
            _(aPR, eRR)
            if (_oz(z, 2, e, s, gg)) {
                eRR.wxVkey = 1
            }
            var bSR = _v()
            _(aPR, bSR)
            if (_oz(z, 3, e, s, gg)) {
                bSR.wxVkey = 1
            }
            var oTR = _v()
            _(aPR, oTR)
            if (_oz(z, 4, e, s, gg)) {
                oTR.wxVkey = 1
            }
            var xUR = _v()
            _(aPR, xUR)
            if (_oz(z, 5, e, s, gg)) {
                xUR.wxVkey = 1
            }
            var oVR = _v()
            _(aPR, oVR)
            if (_oz(z, 6, e, s, gg)) {
                oVR.wxVkey = 1
            }
            var fWR = _v()
            _(aPR, fWR)
            if (_oz(z, 7, e, s, gg)) {
                fWR.wxVkey = 1
            }
            tQR.wxXCkey = 1
            eRR.wxXCkey = 1
            bSR.wxXCkey = 1
            oTR.wxXCkey = 1
            xUR.wxXCkey = 1
            oVR.wxXCkey = 1
            fWR.wxXCkey = 1
            _(r, aPR)
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
                g = "$gwx18_XC_32";
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
if (__vd_version_info__.delayedGwx || false) $gwx18_XC_32();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packageExternal/uni_modules/uni-countdown/components/uni-countdown/uni-countdown.wxml'] = [$gwx18_XC_32, './packageExternal/uni_modules/uni-countdown/components/uni-countdown/uni-countdown.wxml'];
else __wxAppCode__['packageExternal/uni_modules/uni-countdown/components/uni-countdown/uni-countdown.wxml'] = $gwx18_XC_32('./packageExternal/uni_modules/uni-countdown/components/uni-countdown/uni-countdown.wxml');;
__wxRoute = "packageExternal/uni_modules/uni-countdown/components/uni-countdown/uni-countdown";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packageExternal/uni_modules/uni-countdown/components/uni-countdown/uni-countdown.js";
define("packageExternal/uni_modules/uni-countdown/components/uni-countdown/uni-countdown.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
        ["packageExternal/uni_modules/uni-countdown/components/uni-countdown/uni-countdown"], {
            "156f": function(t, n, e) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.default = void 0;
                var o = e("37dc"),
                    i = function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }(e("4723"));
                var u = (0, o.initVueI18n)(i.default).t;
                n.default = {
                    name: "UniCountdown",
                    emits: ["timeup"],
                    props: {
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
                        start: {
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
                        day: {
                            type: Number,
                            default: 0
                        },
                        hour: {
                            type: Number,
                            default: 0
                        },
                        minute: {
                            type: Number,
                            default: 0
                        },
                        second: {
                            type: Number,
                            default: 0
                        },
                        timestamp: {
                            type: Number,
                            default: 0
                        }
                    },
                    data: function() {
                        return {
                            timer: null,
                            syncFlag: !1,
                            d: "00",
                            h: "00",
                            i: "00",
                            s: "00",
                            leftTime: 0,
                            seconds: 0
                        }
                    },
                    computed: {
                        dayText: function() {
                            return u("uni-countdown.day")
                        },
                        hourText: function(t) {
                            return u("uni-countdown.h")
                        },
                        minuteText: function(t) {
                            return u("uni-countdown.m")
                        },
                        secondText: function(t) {
                            return u("uni-countdown.s")
                        },
                        timeStyle: function() {
                            var t = this.color,
                                n = this.backgroundColor,
                                e = this.fontSize;
                            return {
                                color: t,
                                backgroundColor: n,
                                fontSize: "".concat(e, "px"),
                                width: "".concat(22 * e / 14, "px"),
                                lineHeight: "".concat(20 * e / 14, "px"),
                                borderRadius: "".concat(3 * e / 14, "px")
                            }
                        },
                        splitorStyle: function() {
                            var t = this.splitorColor,
                                n = this.fontSize,
                                e = this.backgroundColor;
                            return {
                                color: t,
                                fontSize: "".concat(12 * n / 14, "px"),
                                margin: e ? "".concat(4 * n / 14, "px") : ""
                            }
                        }
                    },
                    watch: {
                        day: function(t) {
                            this.changeFlag()
                        },
                        hour: function(t) {
                            this.changeFlag()
                        },
                        minute: function(t) {
                            this.changeFlag()
                        },
                        second: function(t) {
                            this.changeFlag()
                        },
                        start: {
                            immediate: !0,
                            handler: function(t, n) {
                                if (t) this.startData();
                                else {
                                    if (!n) return;
                                    clearInterval(this.timer)
                                }
                            }
                        }
                    },
                    created: function(t) {
                        this.seconds = this.toSeconds(this.timestamp, this.day, this.hour, this.minute, this.second), this.countDown()
                    },
                    destroyed: function() {
                        clearInterval(this.timer)
                    },
                    methods: {
                        toSeconds: function(t, n, e, o, i) {
                            return t ? t - parseInt((new Date).getTime() / 1e3, 10) : 60 * n * 60 * 24 + 60 * e * 60 + 60 * o + i
                        },
                        timeUp: function() {
                            clearInterval(this.timer), this.$emit("timeup")
                        },
                        countDown: function() {
                            var t = this.seconds,
                                n = 0,
                                e = 0,
                                o = 0,
                                i = 0;
                            t > 0 ? (n = Math.floor(t / 86400), e = Math.floor(t / 3600) - 24 * n, o = Math.floor(t / 60) - 24 * n * 60 - 60 * e, i = Math.floor(t) - 24 * n * 60 * 60 - 60 * e * 60 - 60 * o) : this.timeUp(), n < 10 && (n = "0" + n), e < 10 && (e = "0" + e), o < 10 && (o = "0" + o), i < 10 && (i = "0" + i), this.d = n, this.h = e, this.i = o, this.s = i
                        },
                        startData: function() {
                            var t = this;
                            if (this.seconds = this.toSeconds(this.timestamp, this.day, this.hour, this.minute, this.second), this.seconds <= 0) return this.seconds = this.toSeconds(0, 0, 0, 0, 0), void this.countDown();
                            clearInterval(this.timer), this.countDown(), this.timer = setInterval((function() {
                                t.seconds--, t.seconds < 0 ? t.timeUp() : t.countDown()
                            }), 1e3)
                        },
                        update: function() {
                            this.startData()
                        },
                        changeFlag: function() {
                            this.syncFlag || (this.seconds = this.toSeconds(this.timestamp, this.day, this.hour, this.minute, this.second), this.startData(), this.syncFlag = !0)
                        }
                    }
                }
            },
            "2cae": function(t, n, e) {
                e.r(n);
                var o = e("37af"),
                    i = e("74a7");
                for (var u in i)["default"].indexOf(u) < 0 && function(t) {
                    e.d(n, t, (function() {
                        return i[t]
                    }))
                }(u);
                e("6c60");
                var s = e("f0c5"),
                    a = Object(s.a)(i.default, o.b, o.c, !1, null, "439a2ad4", null, !1, o.a, void 0);
                n.default = a.exports
            },
            "37af": function(t, n, e) {
                e.d(n, "b", (function() {
                    return o
                })), e.d(n, "c", (function() {
                    return i
                })), e.d(n, "a", (function() {}));
                var o = function() {
                        var t = this,
                            n = (t.$createElement, t._self._c, t.showDay ? t.__get_style([t.timeStyle]) : null),
                            e = t.showDay ? t.__get_style([t.splitorStyle]) : null,
                            o = t.showHour ? t.__get_style([t.timeStyle]) : null,
                            i = t.showHour ? t.__get_style([t.splitorStyle]) : null,
                            u = t.showMinute ? t.__get_style([t.timeStyle]) : null,
                            s = t.showMinute ? t.__get_style([t.splitorStyle]) : null,
                            a = t.__get_style([t.timeStyle]),
                            c = t.showColon ? null : t.__get_style([t.splitorStyle]);
                        t.$mp.data = Object.assign({}, {
                            $root: {
                                s0: n,
                                s1: e,
                                s2: o,
                                s3: i,
                                s4: u,
                                s5: s,
                                s6: a,
                                s7: c
                            }
                        })
                    },
                    i = []
            },
            "6c60": function(t, n, e) {
                var o = e("fbe9");
                e.n(o).a
            },
            "74a7": function(t, n, e) {
                e.r(n);
                var o = e("156f"),
                    i = e.n(o);
                for (var u in o)["default"].indexOf(u) < 0 && function(t) {
                    e.d(n, t, (function() {
                        return o[t]
                    }))
                }(u);
                n.default = i.a
            },
            fbe9: function(t, n, e) {}
        }
    ]), (global.webpackJsonp = global.webpackJsonp || []).push(["packageExternal/uni_modules/uni-countdown/components/uni-countdown/uni-countdown-create-component", {
            "packageExternal/uni_modules/uni-countdown/components/uni-countdown/uni-countdown-create-component": function(t, n, e) {
                e("543d").createComponent(e("2cae"))
            }
        },
        [
            ["packageExternal/uni_modules/uni-countdown/components/uni-countdown/uni-countdown-create-component"]
        ]
    ]);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'packageExternal/uni_modules/uni-countdown/components/uni-countdown/uni-countdown.js'
});
require("packageExternal/uni_modules/uni-countdown/components/uni-countdown/uni-countdown.js");