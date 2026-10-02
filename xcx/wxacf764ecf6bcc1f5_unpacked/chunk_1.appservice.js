$gwx_XC_1 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_1 || [];

        function gz$gwx_XC_1_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_1_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [6],
                    [
                        [7],
                        [3, '$root']
                    ],
                    [3, 'g0']
                ])
                Z([3, 'index'])
                Z([3, 'item'])
                Z([
                    [7],
                    [3, 'customTabBarList']
                ])
                Z(z[1])
                Z([3, '__e'])
                Z([
                    [4],
                    [
                        [5],
                        [
                            [5],
                            [
                                [5],
                                [1, 'data-v-4bce9d98']
                            ],
                            [1, 'cumstom-tabbar-item']
                        ],
                        [
                            [2, '?:'],
                            [
                                [2, '==='],
                                [
                                    [7],
                                    [3, 'index']
                                ],
                                [
                                    [7],
                                    [3, 'current']
                                ]
                            ],
                            [1, 'current'],
                            [1, '']
                        ]
                    ]
                ])
                Z([
                    [4],
                    [
                        [5],
                        [
                            [4],
                            [
                                [5],
                                [
                                    [5],
                                    [1, 'tap']
                                ],
                                [
                                    [4],
                                    [
                                        [5],
                                        [
                                            [4],
                                            [
                                                [5],
                                                [
                                                    [5],
                                                    [1, 'switchTab']
                                                ],
                                                [
                                                    [4],
                                                    [
                                                        [5],
                                                        [1, '$event']
                                                    ]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ])
                Z([
                    [7],
                    [3, 'index']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'pagePath']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'badge']
                ])
                Z([3, '__l'])
                Z([3, 'data-v-4bce9d98'])
                Z(z[10])
                Z([
                    [2, '+'],
                    [1, '7b41bba2-1-'],
                    [
                        [7],
                        [3, 'index']
                    ]
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_1_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_1_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_1 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_1 = true;
        var x = ['./components/CustomTabBar/CustomTabBar.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_1_1()
            var o2E = _v()
            _(r, o2E)
            if (_oz(z, 0, e, s, gg)) {
                o2E.wxVkey = 1
                var f3E = _v()
                _(o2E, f3E)
                var c4E = function(o6E, h5E, c7E, gg) {
                    var l9E = _mz(z, 'view', ['bindtap', 5, 'class', 1, 'data-event-opts', 2, 'data-index', 3, 'data-path', 4], [], o6E, h5E, gg)
                    var a0E = _v()
                    _(l9E, a0E)
                    if (_oz(z, 10, o6E, h5E, gg)) {
                        a0E.wxVkey = 1
                        var tAF = _mz(z, 'ga-badge', ['bind:__l', 11, 'class', 1, 'num', 2, 'vueId', 3], [], o6E, h5E, gg)
                        _(a0E, tAF)
                    }
                    a0E.wxXCkey = 1
                    a0E.wxXCkey = 3
                    _(c7E, l9E)
                    return c7E
                }
                f3E.wxXCkey = 4
                _2z(z, 3, c4E, e, s, gg, f3E, 'item', 'index', 'index')
            }
            o2E.wxXCkey = 1
            o2E.wxXCkey = 3
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
                g = "$gwx_XC_1";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_1();
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/CustomTabBar/CustomTabBar.wxml'] = [$gwx_XC_1, './components/CustomTabBar/CustomTabBar.wxml'];
else __wxAppCode__['components/CustomTabBar/CustomTabBar.wxml'] = $gwx_XC_1('./components/CustomTabBar/CustomTabBar.wxml');;
__wxRoute = "components/CustomTabBar/CustomTabBar";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "components/CustomTabBar/CustomTabBar.js";
define("components/CustomTabBar/CustomTabBar.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t = require("../../@babel/runtime/helpers/typeof");
    (global.webpackJsonp = global.webpackJsonp || []).push([
        ["components/CustomTabBar/CustomTabBar"], {
            "06cf": function(e, r, n) {
                (function(e) {
                    function n(e) {
                        return (n = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                            return t(e)
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                        })(e)
                    }

                    function o(t, e) {
                        var r = Object.keys(t);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(t);
                            e && (n = n.filter((function(e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }))), r.push.apply(r, n)
                        }
                        return r
                    }

                    function a(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var r = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? o(Object(r), !0).forEach((function(e) {
                                i(t, e, r[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                            }))
                        }
                        return t
                    }

                    function i(t, e, r) {
                        return (e = u(e)) in t ? Object.defineProperty(t, e, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = r, t
                    }

                    function u(t) {
                        var e = function(t, e) {
                            if ("object" != n(t) || !t) return t;
                            var r = t[Symbol.toPrimitive];
                            if (void 0 !== r) {
                                var o = r.call(t, e || "default");
                                if ("object" != n(o)) return o;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === e ? String : Number)(t)
                        }(t, "string");
                        return "symbol" == n(e) ? e : e + ""
                    }
                    Object.defineProperty(r, "__esModule", {
                        value: !0
                    }), r.default = void 0;
                    var c = getApp().globalData,
                        s = c.$dmall,
                        b = s.router,
                        f = s.pathMap;
                    r.default = {
                        name: "CustomTabBar",
                        props: {
                            tabBarList: {
                                type: Array,
                                default: function() {
                                    return []
                                }
                            },
                            current: {
                                type: Number,
                                default: 0
                            },
                            selectedColor: {
                                type: String,
                                default: c.extCommonConfig.tabBar.selectedColor
                            }
                        },
                        data: function() {
                            return {
                                path: "",
                                customTabBarList: [],
                                customHeight: 0
                            }
                        },
                        watch: {
                            tabBarList: {
                                handler: function(t) {
                                    if (t && t.length) {
                                        this.customTabBarList = t;
                                        var e = getCurrentPages();
                                        this.isSubHome = e[e.length - 1].route === f.subHome.path, this.isSubHome && 4 === this.tabBarList.length && c && c.customTabbarList && c.customTabbarList.push(this)
                                    }
                                },
                                immediate: !0,
                                deep: !0
                            }
                        },
                        mounted: function() {
                            var t = this;
                            e.createSelectorQuery().in(this).select(".cumstom-tabbar").boundingClientRect((function(e) {
                                console.warn(e), e && (t.$emit("getBarHeight", e.height), t.customHeight = e.height)
                            })).exec(), this.onlyTime = Date.now()
                        },
                        beforeDestroy: function() {
                            var t = this;
                            if (c && c.customTabbarList) {
                                var e = c.customTabbarList.findIndex((function(e) {
                                    return e.onlyTime === t.onlyTime
                                }));
                                c.customTabbarList.splice(e, 1)
                            }
                        },
                        methods: {
                            switchTab: function(t) {
                                var e = t.currentTarget.dataset,
                                    r = e.path;
                                e.index !== this.current && b.navigateTo({
                                    url: "".concat(r)
                                })
                            },
                            setTabBadge: function(t) {
                                var e = t.index,
                                    r = t.badge,
                                    n = void 0 === r ? "" : r;
                                this.customTabBarList && this.customTabBarList.length > 0 && e >= 0 && this.customTabBarList.splice(e, 1, a(a({}, this.customTabBarList[e]), {}, {
                                    badge: n
                                }))
                            }
                        },
                        attached: function() {}
                    }
                }).call(this, n("543d").default)
            },
            "3653e": function(t, e, r) {
                r.d(e, "b", (function() {
                    return n
                })), r.d(e, "c", (function() {
                    return o
                })), r.d(e, "a", (function() {}));
                var n = function() {
                        var t = this,
                            e = (t.$createElement, t._self._c, t.customTabBarList && t.customTabBarList.length > 0);
                        t.$mp.data = Object.assign({}, {
                            $root: {
                                g0: e
                            }
                        })
                    },
                    o = []
            },
            "37f0": function(t, e, r) {
                r.r(e);
                var n = r("3653e"),
                    o = r("5686");
                for (var a in o)["default"].indexOf(a) < 0 && function(t) {
                    r.d(e, t, (function() {
                        return o[t]
                    }))
                }(a);
                r("4e48");
                var i = r("f0c5"),
                    u = Object(i.a)(o.default, n.b, n.c, !1, null, "4bce9d98", null, !1, n.a, void 0);
                e.default = u.exports
            },
            "4e48": function(t, e, r) {
                var n = r("ce12");
                r.n(n).a
            },
            5686: function(t, e, r) {
                r.r(e);
                var n = r("06cf"),
                    o = r.n(n);
                for (var a in n)["default"].indexOf(a) < 0 && function(t) {
                    r.d(e, t, (function() {
                        return n[t]
                    }))
                }(a);
                e.default = o.a
            },
            ce12: function(t, e, r) {}
        }
    ]), (global.webpackJsonp = global.webpackJsonp || []).push(["components/CustomTabBar/CustomTabBar-create-component", {
            "components/CustomTabBar/CustomTabBar-create-component": function(t, e, r) {
                r("543d").createComponent(r("37f0"))
            }
        },
        [
            ["components/CustomTabBar/CustomTabBar-create-component"]
        ]
    ]);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'components/CustomTabBar/CustomTabBar.js'
});
require("components/CustomTabBar/CustomTabBar.js");