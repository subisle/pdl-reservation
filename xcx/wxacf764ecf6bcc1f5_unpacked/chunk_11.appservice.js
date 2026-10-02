$gwx_XC_3 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_3 || [];

        function gz$gwx_XC_3_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'count-down-box data-v-564ea427'])
                Z([3, 'count-down'])
                Z([
                    [2, '+'],
                    [
                        [2, '+'],
                        [1, 'transform:'],
                        [
                            [2, '+'],
                            [
                                [2, '+'],
                                [1, 'scale('],
                                [
                                    [7],
                                    [3, 'scaleValue']
                                ]
                            ],
                            [1, ')']
                        ]
                    ],
                    [1, ';']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, '$root']
                    ],
                    [3, 'g0']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, '$root']
                    ],
                    [3, 'g1']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, '$root']
                    ],
                    [3, 'g2']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, '$root']
                    ],
                    [3, 'g3']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, '$root']
                    ],
                    [3, 'g4']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, '$root']
                    ],
                    [3, 'g5']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_3_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_3_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_3 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_3 = true;
        var x = ['./node-modules/@dmall/jimoui-mp/components/CountDown/CountDown.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_3_1()
            var hIF = _mz(z, 'view', ['class', 0, 'id', 1, 'style', 1], [], e, s, gg)
            var oJF = _v()
            _(hIF, oJF)
            if (_oz(z, 3, e, s, gg)) {
                oJF.wxVkey = 1
            }
            var cKF = _v()
            _(hIF, cKF)
            if (_oz(z, 4, e, s, gg)) {
                cKF.wxVkey = 1
                var aNF = _v()
                _(cKF, aNF)
                if (_oz(z, 5, e, s, gg)) {
                    aNF.wxVkey = 1
                }
                aNF.wxXCkey = 1
            }
            var oLF = _v()
            _(hIF, oLF)
            if (_oz(z, 6, e, s, gg)) {
                oLF.wxVkey = 1
                var tOF = _v()
                _(oLF, tOF)
                if (_oz(z, 7, e, s, gg)) {
                    tOF.wxVkey = 1
                }
                tOF.wxXCkey = 1
            }
            var lMF = _v()
            _(hIF, lMF)
            if (_oz(z, 8, e, s, gg)) {
                lMF.wxVkey = 1
            }
            oJF.wxXCkey = 1
            cKF.wxXCkey = 1
            oLF.wxXCkey = 1
            lMF.wxXCkey = 1
            _(r, hIF)
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
                g = "$gwx_XC_3";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_3();
if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/@dmall/jimoui-mp/components/CountDown/CountDown.wxml'] = [$gwx_XC_3, './node-modules/@dmall/jimoui-mp/components/CountDown/CountDown.wxml'];
else __wxAppCode__['node-modules/@dmall/jimoui-mp/components/CountDown/CountDown.wxml'] = $gwx_XC_3('./node-modules/@dmall/jimoui-mp/components/CountDown/CountDown.wxml');;
__wxRoute = "node-modules/@dmall/jimoui-mp/components/CountDown/CountDown";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "node-modules/@dmall/jimoui-mp/components/CountDown/CountDown.js";
define("node-modules/@dmall/jimoui-mp/components/CountDown/CountDown.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../../../../@babel/runtime/helpers/Arrayincludes"), (global.webpackJsonp = global.webpackJsonp || []).push([
        ["node-modules/@dmall/jimoui-mp/components/CountDown/CountDown"], {
            "1e32": function(t, e, n) {
                n.r(e);
                var o = n("864e"),
                    s = n("208c");
                for (var i in s)["default"].indexOf(i) < 0 && function(t) {
                    n.d(e, t, (function() {
                        return s[t]
                    }))
                }(i);
                n("5374");
                var a = n("f0c5"),
                    l = Object(a.a)(s.default, o.b, o.c, !1, null, "564ea427", null, !1, o.a, void 0);
                e.default = l.exports
            },
            "208c": function(t, e, n) {
                n.r(e);
                var o = n("8f2a"),
                    s = n.n(o);
                for (var i in o)["default"].indexOf(i) < 0 && function(t) {
                    n.d(e, t, (function() {
                        return o[t]
                    }))
                }(i);
                e.default = s.a
            },
            "446c": function(t, e, n) {},
            5374: function(t, e, n) {
                var o = n("446c");
                n.n(o).a
            },
            "864e": function(t, e, n) {
                n.d(e, "b", (function() {
                    return o
                })), n.d(e, "c", (function() {
                    return s
                })), n.d(e, "a", (function() {}));
                var o = function() {
                        var t = this,
                            e = (t.$createElement, t._self._c, t.showFormat.includes("dd")),
                            n = t.showFormat.includes("hh"),
                            o = n ? t.showFormat.includes("ss") || t.showFormat.includes("mm") : null,
                            s = t.showFormat.includes("mm"),
                            i = s ? t.showFormat.includes("ss") : null,
                            a = t.showFormat.includes("ss");
                        t.$mp.data = Object.assign({}, {
                            $root: {
                                g0: e,
                                g1: n,
                                g2: o,
                                g3: s,
                                g4: i,
                                g5: a
                            }
                        })
                    },
                    s = []
            },
            "8f2a": function(t, e, n) {
                (function(t) {
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.default = void 0;
                    var o = i(n("a34a")),
                        s = i(n("b35a"));

                    function i(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }

                    function a(t, e, n, o, s, i, a) {
                        try {
                            var l = t[i](a),
                                u = l.value
                        } catch (t) {
                            return void n(t)
                        }
                        l.done ? e(u) : Promise.resolve(u).then(o, s)
                    }
                    e.default = {
                        name: "CountDown",
                        mixins: [s.default],
                        props: {
                            startTime: {
                                type: [String, Number],
                                default: ""
                            },
                            endTime: {
                                type: [String, Number],
                                default: ""
                            },
                            countDownTime: {
                                type: String | Number,
                                default: null
                            },
                            show: {
                                type: Boolean,
                                default: !0
                            },
                            format: {
                                type: String,
                                default: "hh:mm:ss"
                            },
                            canChangeFormat: {
                                type: Boolean,
                                default: !1
                            },
                            dayStyles: {
                                type: Object | String,
                                default: ""
                            },
                            textStyles: {
                                type: Object | String,
                                default: ""
                            },
                            colonStyles: {
                                type: Object | String,
                                default: ""
                            },
                            colonBoxStyles: {
                                type: Object | String,
                                default: ""
                            },
                            scaleValue: {
                                type: Number,
                                default: 1
                            }
                        },
                        data: function() {
                            return {
                                days: 0,
                                hours: "00",
                                minutes: "00",
                                seconds: "00",
                                showTextStyles: "",
                                showColonStyles: "",
                                showColonBoxStyle: "",
                                showDayStyles: "",
                                scaleSizeStyles: "",
                                scaleStyles: "",
                                showFormat: ""
                            }
                        },
                        watch: {
                            scaleValue: {
                                handler: function(t) {
                                    t && 1 !== t && this.getScaleSize()
                                },
                                immediate: !0
                            },
                            showFormat: {
                                handler: function(t, e) {
                                    e && e !== t && this.getScaleSize()
                                }
                            },
                            countDownTime: {
                                handler: function(t, e) {
                                    e && e !== t && this.getScaleSize()
                                }
                            }
                        },
                        created: function() {
                            this.formatStyle()
                        },
                        methods: {
                            formatStyle: function() {
                                var e = this.textStyles,
                                    n = this.colonStyles,
                                    o = this.dayStyles,
                                    s = this.scaleValue,
                                    i = this.colonBoxStyles,
                                    a = t.getSystemInfoSync(),
                                    l = this.getShowStyle(n),
                                    u = this.getShowStyle(e),
                                    c = this.getShowStyle(o),
                                    r = this.getShowStyle(i);
                                ["devtools", "ios"].includes(a.platform) && (c += "padding-top: 1rpx;", u += "padding-top: 1rpx;"), u && (this.showTextStyles += u), l && (this.showColonStyles += l), c && (this.showDayStyles += c), r && (this.showColonBoxStyle += r), s && 1 !== s && (this.scaleSizeStyles = "visibility: hidden")
                            },
                            formatCountDown: function() {
                                var t = this.time,
                                    e = this.format,
                                    n = this.canChangeFormat;
                                if (!(t < 0)) {
                                    var o = Math.floor(t / 864e5),
                                        s = Math.floor(t / 36e5 % 24),
                                        i = Math.floor(t / 6e4 % 60),
                                        a = Math.floor(t / 1e3 % 60);
                                    e.includes("dd") || (s += 24 * o), e.includes("hh") || (i += 60 * s), e.includes("mm") || (a += 60 * i);
                                    var l = e.includes("dd") && n && o < 1 ? e.split("dd:")[1] : e;
                                    l !== this.showFormat && (this.showFormat = l), this.days !== o && (this.days = o), this.hours !== s && (this.hours = s >= 10 ? s : "0".concat(s)), this.minutes !== i && (this.minutes = i >= 10 ? i : "0".concat(i)), this.seconds = a >= 10 ? a : "0".concat(a)
                                }
                            },
                            getScaleSize: function() {
                                var t = this;
                                this.$nextTick(function(t) {
                                    return function() {
                                        var e = this,
                                            n = arguments;
                                        return new Promise((function(o, s) {
                                            var i = t.apply(e, n);

                                            function l(t) {
                                                a(i, o, s, l, u, "next", t)
                                            }

                                            function u(t) {
                                                a(i, o, s, l, u, "throw", t)
                                            }
                                            l(void 0)
                                        }))
                                    }
                                }(o.default.mark((function e() {
                                    var n;
                                    return o.default.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, t.getElemenInfo("#count-down");
                                            case 2:
                                                n = e.sent, t.scaleSizeStyles = "height: ".concat(n.height, "px; width: ").concat(n.width, "px;");
                                            case 4:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))))
                            },
                            getElemenInfo: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                    n = t.createSelectorQuery().in(this);
                                return new Promise((function(t) {
                                    n.select(e).fields({
                                        size: !0
                                    }, (function(e) {
                                        t(e), n = null
                                    })).exec()
                                }))
                            }
                        }
                    }
                }).call(this, n("543d").default)
            }
        }
    ]), (global.webpackJsonp = global.webpackJsonp || []).push(["node-modules/@dmall/jimoui-mp/components/CountDown/CountDown-create-component", {
            "node-modules/@dmall/jimoui-mp/components/CountDown/CountDown-create-component": function(t, e, n) {
                n("543d").createComponent(n("1e32"))
            }
        },
        [
            ["node-modules/@dmall/jimoui-mp/components/CountDown/CountDown-create-component"]
        ]
    ]);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'node-modules/@dmall/jimoui-mp/components/CountDown/CountDown.js'
});
require("node-modules/@dmall/jimoui-mp/components/CountDown/CountDown.js");