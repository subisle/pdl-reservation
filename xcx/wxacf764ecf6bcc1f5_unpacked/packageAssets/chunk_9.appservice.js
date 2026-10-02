$gwx15_XC_34 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx15_XC_34 || [];

        function gz$gwx15_XC_34_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx15_XC_34_1) return __WXML_GLOBAL__.ops_cached.$gwx15_XC_34_1
            __WXML_GLOBAL__.ops_cached.$gwx15_XC_34_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'index'])
                Z([3, 'item'])
                Z([
                    [7],
                    [3, 'tabList']
                ])
                Z([3, 'tabId'])
                Z([3, '__e'])
                Z([3, 'tab-item data-v-2ad060f3'])
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
                                                    [
                                                        [5],
                                                        [1, 'changeTab']
                                                    ],
                                                    [
                                                        [4],
                                                        [
                                                            [5],
                                                            [
                                                                [5],
                                                                [
                                                                    [7],
                                                                    [3, 'index']
                                                                ]
                                                            ],
                                                            [1, '$0']
                                                        ]
                                                    ]
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
                                                                    [4],
                                                                    [
                                                                        [5],
                                                                        [
                                                                            [5],
                                                                            [
                                                                                [5],
                                                                                [1, 'tabList']
                                                                            ],
                                                                            [1, 'tabId']
                                                                        ],
                                                                        [
                                                                            [6],
                                                                            [
                                                                                [7],
                                                                                [3, 'item']
                                                                            ],
                                                                            [3, 'tabId']
                                                                        ]
                                                                    ]
                                                                ]
                                                            ]
                                                        ]
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
                    [2, '==='],
                    [
                        [7],
                        [3, 'currentTab']
                    ],
                    [
                        [7],
                        [3, 'index']
                    ]
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx15_XC_34_1);
            return __WXML_GLOBAL__.ops_cached.$gwx15_XC_34_1
        }
        __WXML_GLOBAL__.ops_set.$gwx15_XC_34 = z;
        __WXML_GLOBAL__.ops_init.$gwx15_XC_34 = true;
        var x = ['./packageAssets/coupon/coupon/components/CouponTab/CouponTab.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx15_XC_34_1()
            var c2U = _v()
            _(r, c2U)
            var h3U = function(c5U, o4U, o6U, gg) {
                var a8U = _mz(z, 'view', ['bindtap', 4, 'class', 1, 'data-event-opts', 2], [], c5U, o4U, gg)
                var t9U = _v()
                _(a8U, t9U)
                if (_oz(z, 7, c5U, o4U, gg)) {
                    t9U.wxVkey = 1
                }
                t9U.wxXCkey = 1
                _(o6U, a8U)
                return o6U
            }
            c2U.wxXCkey = 2
            _2z(z, 2, h3U, e, s, gg, c2U, 'item', 'index', 'tabId')
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
                g = "$gwx15_XC_34";
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
if (__vd_version_info__.delayedGwx || false) $gwx15_XC_34();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packageAssets/coupon/coupon/components/CouponTab/CouponTab.wxml'] = [$gwx15_XC_34, './packageAssets/coupon/coupon/components/CouponTab/CouponTab.wxml'];
else __wxAppCode__['packageAssets/coupon/coupon/components/CouponTab/CouponTab.wxml'] = $gwx15_XC_34('./packageAssets/coupon/coupon/components/CouponTab/CouponTab.wxml');;
__wxRoute = "packageAssets/coupon/coupon/components/CouponTab/CouponTab";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packageAssets/coupon/coupon/components/CouponTab/CouponTab.js";
define("packageAssets/coupon/coupon/components/CouponTab/CouponTab.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
        ["packageAssets/coupon/coupon/components/CouponTab/CouponTab"], {
            "0c70": function(n, o, e) {
                var t = e("39ed");
                e.n(t).a
            },
            3368: function(n, o, e) {
                e.r(o);
                var t = e("33cd"),
                    a = e.n(t);
                for (var c in t)["default"].indexOf(c) < 0 && function(n) {
                    e.d(o, n, (function() {
                        return t[n]
                    }))
                }(c);
                o.default = a.a
            },
            "33cd": function(n, o, e) {
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0, o.default = {
                    name: "CouponTab",
                    props: {
                        tabList: {
                            type: Array,
                            default: {}
                        },
                        currentTab: {
                            type: Number,
                            default: 0
                        }
                    },
                    data: function() {
                        return {
                            theme: getApp().globalData.$dmall.dmallApi.getTheme()
                        }
                    },
                    methods: {
                        changeTab: function(n, o) {
                            var e = o.tabId,
                                t = o.buriedPoint;
                            this.currentTab !== n && this.$emit("changeTab", {
                                currentTab: n,
                                tabId: e,
                                buriedPoint: t
                            })
                        }
                    }
                }
            },
            "39ed": function(n, o, e) {},
            "5d9e": function(n, o, e) {
                e.r(o);
                var t = e("7540"),
                    a = e("3368");
                for (var c in a)["default"].indexOf(c) < 0 && function(n) {
                    e.d(o, n, (function() {
                        return a[n]
                    }))
                }(c);
                e("0c70");
                var u = e("f0c5"),
                    p = Object(u.a)(a.default, t.b, t.c, !1, null, "2ad060f3", null, !1, t.a, void 0);
                o.default = p.exports
            },
            7540: function(n, o, e) {
                e.d(o, "b", (function() {
                    return t
                })), e.d(o, "c", (function() {
                    return a
                })), e.d(o, "a", (function() {}));
                var t = function() {
                        this.$createElement;
                        this._self._c
                    },
                    a = []
            }
        }
    ]), (global.webpackJsonp = global.webpackJsonp || []).push(["packageAssets/coupon/coupon/components/CouponTab/CouponTab-create-component", {
            "packageAssets/coupon/coupon/components/CouponTab/CouponTab-create-component": function(n, o, e) {
                e("543d").createComponent(e("5d9e"))
            }
        },
        [
            ["packageAssets/coupon/coupon/components/CouponTab/CouponTab-create-component"]
        ]
    ]);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'packageAssets/coupon/coupon/components/CouponTab/CouponTab.js'
});
require("packageAssets/coupon/coupon/components/CouponTab/CouponTab.js");