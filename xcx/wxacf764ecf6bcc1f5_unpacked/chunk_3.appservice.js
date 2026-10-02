$gwx_XC_23 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_23 || [];

        function gz$gwx_XC_23_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_23_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_23_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_23_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, '__l'])
                Z([3, 'data-v-6d6748d0'])
                Z([3, '318c2702-1'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_23_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_23_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_23 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_23 = true;
        var x = ['./components/TabBar/TabBar.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_23_1()
            var aJJ = _mz(z, 'safe-bottom', ['bind:__l', 0, 'class', 1, 'vueId', 1], [], e, s, gg)
            _(r, aJJ)
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
                g = "$gwx_XC_23";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_23();
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/TabBar/TabBar.wxml'] = [$gwx_XC_23, './components/TabBar/TabBar.wxml'];
else __wxAppCode__['components/TabBar/TabBar.wxml'] = $gwx_XC_23('./components/TabBar/TabBar.wxml');;
__wxRoute = "components/TabBar/TabBar";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "components/TabBar/TabBar.js";
define("components/TabBar/TabBar.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    (global.webpackJsonp = global.webpackJsonp || []).push([
        ["components/TabBar/TabBar"], {
            3303: function(n, t, a) {
                (function(n) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = void 0;
                    var a = getApp().globalData,
                        e = a.$dmall,
                        o = e.dmallApi,
                        r = e.router;
                    t.default = {
                        name: "CustomTabBar",
                        data: function() {
                            return {
                                tabBarConfig: {},
                                currentPagePath: ""
                            }
                        },
                        mounted: function() {
                            this.initTabBarConfig()
                        },
                        methods: {
                            initTabBarConfig: function() {
                                var n = this;
                                o.toRpx;
                                var t = a.extCommonConfig.subBusiness,
                                    e = getCurrentPages(),
                                    r = e[e.length - 1] || {},
                                    i = r.options || {},
                                    c = t.find((function(n) {
                                        return n.scene === i.scene
                                    }));
                                this.currentPagePath = r.route, this.tabBarConfig = c.tabBar, console.warn("SubBusiness TabBar Config:", c.tabBar), this.$nextTick((function() {
                                    n.getTabBarHeight()
                                }))
                            },
                            resetSystemInfo: function(n) {
                                var t = a.systemInfo;
                                t.windowHeight -= n, a.systemInfo = t
                            },
                            getTabBarHeight: function() {
                                var t = this;
                                n.createSelectorQuery().in(this).select("#wxTabBar").boundingClientRect((function(n) {
                                    console.warn(n);
                                    var a = n.height;
                                    t.resetSystemInfo(a)
                                })).exec()
                            },
                            switchHandler: function() {
                                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = n.pagePath;
                                t ? r.navigateTo(t) : console.warn("Warning!!!TabBar未配置目标页面链接！")
                            }
                        }
                    }
                }).call(this, a("543d").default)
            },
            8953: function(n, t, a) {
                a.d(t, "b", (function() {
                    return e
                })), a.d(t, "c", (function() {
                    return o
                })), a.d(t, "a", (function() {}));
                var e = function() {
                        this.$createElement;
                        this._self._c
                    },
                    o = []
            },
            "917f": function(n, t, a) {
                a.r(t);
                var e = a("3303"),
                    o = a.n(e);
                for (var r in e)["default"].indexOf(r) < 0 && function(n) {
                    a.d(t, n, (function() {
                        return e[n]
                    }))
                }(r);
                t.default = o.a
            },
            "9d6f": function(n, t, a) {
                a.r(t);
                var e = a("8953"),
                    o = a("917f");
                for (var r in o)["default"].indexOf(r) < 0 && function(n) {
                    a.d(t, n, (function() {
                        return o[n]
                    }))
                }(r);
                a("d8ad");
                var i = a("f0c5"),
                    c = Object(i.a)(o.default, e.b, e.c, !1, null, "6d6748d0", null, !1, e.a, void 0);
                t.default = c.exports
            },
            a140: function(n, t, a) {},
            d8ad: function(n, t, a) {
                var e = a("a140");
                a.n(e).a
            }
        }
    ]), (global.webpackJsonp = global.webpackJsonp || []).push(["components/TabBar/TabBar-create-component", {
            "components/TabBar/TabBar-create-component": function(n, t, a) {
                a("543d").createComponent(a("9d6f"))
            }
        },
        [
            ["components/TabBar/TabBar-create-component"]
        ]
    ]);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'components/TabBar/TabBar.js'
});
require("components/TabBar/TabBar.js");