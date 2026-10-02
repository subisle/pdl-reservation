$gwx_XC_4 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_4 || [];

        function gz$gwx_XC_4_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_4_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_4_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_4 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_4 = true;
        var x = ['./node-modules/@dmall/jimoui-mp/components/CountDownBase/CountDownBase.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_4_1()
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
                g = "$gwx_XC_4";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_4();
if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/@dmall/jimoui-mp/components/CountDownBase/CountDownBase.wxml'] = [$gwx_XC_4, './node-modules/@dmall/jimoui-mp/components/CountDownBase/CountDownBase.wxml'];
else __wxAppCode__['node-modules/@dmall/jimoui-mp/components/CountDownBase/CountDownBase.wxml'] = $gwx_XC_4('./node-modules/@dmall/jimoui-mp/components/CountDownBase/CountDownBase.wxml');;
__wxRoute = "node-modules/@dmall/jimoui-mp/components/CountDownBase/CountDownBase";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "node-modules/@dmall/jimoui-mp/components/CountDownBase/CountDownBase.js";
define("node-modules/@dmall/jimoui-mp/components/CountDownBase/CountDownBase.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../../../../@babel/runtime/helpers/Arrayincludes"), (global.webpackJsonp = global.webpackJsonp || []).push([
        ["node-modules/@dmall/jimoui-mp/components/CountDownBase/CountDownBase"], {
            "024c": function(e, n, t) {
                var o = t("6744");
                t.n(o).a
            },
            "0f89": function(e, n, t) {
                t.r(n);
                var o = t("ec14"),
                    a = t.n(o);
                for (var u in o)["default"].indexOf(u) < 0 && function(e) {
                    t.d(n, e, (function() {
                        return o[e]
                    }))
                }(u);
                n.default = a.a
            },
            "2dc8": function(e, n, t) {
                t.r(n);
                var o = t("e0ed"),
                    a = t("0f89");
                for (var u in a)["default"].indexOf(u) < 0 && function(e) {
                    t.d(n, e, (function() {
                        return a[e]
                    }))
                }(u);
                t("024c");
                var c = t("f0c5"),
                    d = Object(c.a)(a.default, o.b, o.c, !1, null, "d72a8036", null, !1, o.a, void 0);
                n.default = d.exports
            },
            6744: function(e, n, t) {},
            e0ed: function(e, n, t) {
                t.d(n, "b", (function() {
                    return o
                })), t.d(n, "c", (function() {
                    return a
                })), t.d(n, "a", (function() {}));
                var o = function() {
                        this.$createElement;
                        this._self._c
                    },
                    a = []
            },
            ec14: function(e, n, t) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.default = void 0;
                var o = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(t("b35a"));
                n.default = {
                    name: "CountDownBase",
                    mixins: [o.default],
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
                        customStyles: {
                            type: Object | String,
                            default: ""
                        }
                    },
                    data: function() {
                        return {
                            countDownText: "00:00",
                            showStyles: ""
                        }
                    },
                    created: function() {
                        var e = this.getShowStyle(this.customStyles);
                        e && (this.showStyles = e)
                    },
                    methods: {
                        formatCountDown: function() {
                            var e = this.time,
                                n = this.format,
                                t = this.canChangeFormat,
                                o = {
                                    dd: "0",
                                    hh: "00",
                                    mm: "00",
                                    ss: "00"
                                },
                                a = "";
                            if (this.time > 0) {
                                var u = Math.floor(e / 864e5),
                                    c = Math.floor(e / 36e5 % 24),
                                    d = Math.floor(e / 6e4 % 60),
                                    i = Math.floor(e / 1e3 % 60);
                                n.includes("dd") || (c += 24 * u), n.includes("hh") || (d += 60 * c), n.includes("mm") || (i += 60 * d), o = {
                                    dd: u,
                                    hh: c >= 10 ? c : "0".concat(c),
                                    mm: d >= 10 ? d : "0".concat(d),
                                    ss: i >= 10 ? i : "0".concat(i)
                                }
                            }
                            var l = (n.includes("dd") && t && o.dd < 1 ? n.split("dd:")[1] : n).split(":");
                            l.forEach((function(e, n) {
                                a += "dd" === e ? "".concat(o[e], "天") : n === l.length - 1 ? o[e] : "".concat(o[e], ":")
                            })), this.countDownText = a
                        }
                    }
                }
            }
        }
    ]), (global.webpackJsonp = global.webpackJsonp || []).push(["node-modules/@dmall/jimoui-mp/components/CountDownBase/CountDownBase-create-component", {
            "node-modules/@dmall/jimoui-mp/components/CountDownBase/CountDownBase-create-component": function(e, n, t) {
                t("543d").createComponent(t("2dc8"))
            }
        },
        [
            ["node-modules/@dmall/jimoui-mp/components/CountDownBase/CountDownBase-create-component"]
        ]
    ]);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'node-modules/@dmall/jimoui-mp/components/CountDownBase/CountDownBase.js'
});
require("node-modules/@dmall/jimoui-mp/components/CountDownBase/CountDownBase.js");