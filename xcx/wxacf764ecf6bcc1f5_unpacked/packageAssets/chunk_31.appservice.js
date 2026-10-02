$gwx15_XC_25 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx15_XC_25 || [];

        function gz$gwx15_XC_25_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx15_XC_25_1) return __WXML_GLOBAL__.ops_cached.$gwx15_XC_25_1
            __WXML_GLOBAL__.ops_cached.$gwx15_XC_25_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, '__l'])
                Z([3, 'data-v-e81aad48'])
                Z([3, '75b6c0ac-1'])
                Z([
                    [4],
                    [
                        [5],
                        [1, 'default']
                    ]
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx15_XC_25_1);
            return __WXML_GLOBAL__.ops_cached.$gwx15_XC_25_1
        }
        __WXML_GLOBAL__.ops_set.$gwx15_XC_25 = z;
        __WXML_GLOBAL__.ops_init.$gwx15_XC_25 = true;
        var x = ['./packageAssets/superValueCard/selectCity/selectCity.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx15_XC_25_1()
            var o2Q = _mz(z, 'page-view', ['bind:__l', 0, 'class', 1, 'vueId', 1, 'vueSlots', 2], [], e, s, gg)
            _(r, o2Q)
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
                g = "$gwx15_XC_25";
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
if (__vd_version_info__.delayedGwx || false) $gwx15_XC_25();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packageAssets/superValueCard/selectCity/selectCity.wxml'] = [$gwx15_XC_25, './packageAssets/superValueCard/selectCity/selectCity.wxml'];
else __wxAppCode__['packageAssets/superValueCard/selectCity/selectCity.wxml'] = $gwx15_XC_25('./packageAssets/superValueCard/selectCity/selectCity.wxml');;
__wxRoute = "packageAssets/superValueCard/selectCity/selectCity";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packageAssets/superValueCard/selectCity/selectCity.js";
define("packageAssets/superValueCard/selectCity/selectCity.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
        ["packageAssets/superValueCard/selectCity/selectCity"], {
            "0525": function(e, t, n) {
                n.r(t);
                var a = n("0a34"),
                    r = n.n(a);
                for (var i in a)["default"].indexOf(i) < 0 && function(e) {
                    n.d(t, e, (function() {
                        return a[e]
                    }))
                }(i);
                t.default = r.a
            },
            "0a34": function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var a = u(n("a34a")),
                    r = n("7836"),
                    i = u(n("24b4")),
                    o = u(n("d6f6"));

                function u(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function c(e, t, n, a, r, i, o) {
                    try {
                        var u = e[i](o),
                            c = u.value
                    } catch (e) {
                        return void n(e)
                    }
                    u.done ? t(c) : Promise.resolve(c).then(a, r)
                }
                var f = getApp().globalData.$dmall,
                    d = f.router,
                    s = f.dmallApi;
                t.default = {
                    mixins: [i.default],
                    data: function() {
                        return {
                            cityList: [],
                            theme: s.getTheme(),
                            currentCity: {}
                        }
                    },
                    onLoad: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        this.pageParam = e
                    },
                    onShow: function() {
                        this.getCityList()
                    },
                    methods: {
                        getCityList: function() {
                            var e = this;
                            return function(e) {
                                return function() {
                                    var t = this,
                                        n = arguments;
                                    return new Promise((function(a, r) {
                                        var i = e.apply(t, n);

                                        function o(e) {
                                            c(i, a, r, o, u, "next", e)
                                        }

                                        function u(e) {
                                            c(i, a, r, o, u, "throw", e)
                                        }
                                        o(void 0)
                                    }))
                                }
                            }(a.default.mark((function t() {
                                var n, i;
                                return a.default.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, r.addressInfoNew.getConvenienceCity();
                                        case 3:
                                            n = t.sent, i = n.data, e.cityList = e.formateCity(i), t.next = 11;
                                            break;
                                        case 8:
                                            t.prev = 8, t.t0 = t.catch(0), console.log(t.t0, "e");
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 8]
                                ])
                            })))()
                        },
                        formateCity: function(e) {
                            return e.map((function(e) {
                                return e.cityList.forEach((function(e) {
                                    e.areaId = e.cityCode, e.areaName = e.cityName
                                })), {
                                    areaId: e.provinceCode,
                                    areaName: e.provinceName,
                                    areaList: e.cityList
                                }
                            }))
                        },
                        goBack: function(e) {
                            var t = {
                                areaName: e.areaName,
                                areaId: e.areaId
                            };
                            this.setCurrentCity(t), d.navigateBack()
                        },
                        setCurrentCity: function(e) {
                            o.default.set("currentCity", e)
                        }
                    }
                }
            },
            "2c20": function(e, t, n) {
                n.r(t);
                var a = n("a966"),
                    r = n("0525");
                for (var i in r)["default"].indexOf(i) < 0 && function(e) {
                    n.d(t, e, (function() {
                        return r[e]
                    }))
                }(i);
                n("f782");
                var o = n("f0c5"),
                    u = Object(o.a)(r.default, a.b, a.c, !1, null, "e81aad48", null, !1, a.a, void 0);
                t.default = u.exports
            },
            "581f": function(e, t, n) {
                (function(e, t) {
                    n("6cdc"), r(n("66fd"));
                    var a = r(n("2c20"));

                    function r(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    e.__webpack_require_UNI_MP_PLUGIN__ = n, t(a.default)
                }).call(this, n("bc2e").default, n("543d").createPage)
            },
            a685: function(e, t, n) {},
            a966: function(e, t, n) {
                n.d(t, "b", (function() {
                    return r
                })), n.d(t, "c", (function() {
                    return i
                })), n.d(t, "a", (function() {
                    return a
                }));
                var a = {
                        PageView: function() {
                            return Promise.all([n.e("common/vendor"), n.e("components/PageView/PageView")]).then(n.bind(null, "5741"))
                        }
                    },
                    r = function() {
                        this.$createElement;
                        this._self._c
                    },
                    i = []
            },
            f782: function(e, t, n) {
                var a = n("a685");
                n.n(a).a
            }
        },
        [
            ["581f", "common/runtime", "common/vendor"]
        ]
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packageAssets/superValueCard/selectCity/selectCity.js'
});
require("packageAssets/superValueCard/selectCity/selectCity.js");