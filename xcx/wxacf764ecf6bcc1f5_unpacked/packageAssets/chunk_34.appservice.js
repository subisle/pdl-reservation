$gwx15_XC_28 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx15_XC_28 || [];

        function gz$gwx15_XC_28_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx15_XC_28_1) return __WXML_GLOBAL__.ops_cached.$gwx15_XC_28_1
            __WXML_GLOBAL__.ops_cached.$gwx15_XC_28_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, '__l'])
                Z([3, 'data-v-4972c579'])
                Z([3, '32385d3b-1'])
                Z([
                    [4],
                    [
                        [5],
                        [1, 'default']
                    ]
                ])
                Z([
                    [7],
                    [3, 'pageStatus']
                ])
                Z([3, 'vip-buy-record-page data-v-4972c579'])
                Z([3, 'index'])
                Z([3, 'item'])
                Z([
                    [6],
                    [
                        [7],
                        [3, '$root']
                    ],
                    [3, 'l0']
                ])
                Z(z[6])
                Z([3, 'vip-buy-record-item data-v-4972c579'])
                Z([
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, '$orig']
                    ],
                    [3, 'payPrice']
                ])
                Z([
                    [2, '!=='],
                    [
                        [6],
                        [
                            [6],
                            [
                                [7],
                                [3, 'item']
                            ],
                            [3, '$orig']
                        ],
                        [3, 'statusType']
                    ],
                    [1, 4]
                ])
                Z(z[0])
                Z(z[1])
                Z([
                    [2, '+'],
                    [
                        [2, '+'],
                        [1, '32385d3b-2'],
                        [1, ',']
                    ],
                    [1, '32385d3b-1']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx15_XC_28_1);
            return __WXML_GLOBAL__.ops_cached.$gwx15_XC_28_1
        }
        __WXML_GLOBAL__.ops_set.$gwx15_XC_28 = z;
        __WXML_GLOBAL__.ops_init.$gwx15_XC_28 = true;
        var x = ['./packageAssets/vipBuyRecord/vipBuyRecord.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx15_XC_28_1()
            var tQR = _mz(z, 'page-view', ['bind:__l', 0, 'class', 1, 'vueId', 1, 'vueSlots', 2], [], e, s, gg)
            var eRR = _v()
            _(tQR, eRR)
            if (_oz(z, 4, e, s, gg)) {
                eRR.wxVkey = 1
                var bSR = _n('view')
                _rz(z, bSR, 'class', 5, e, s, gg)
                var oTR = _v()
                _(bSR, oTR)
                var xUR = function(fWR, oVR, cXR, gg) {
                    var oZR = _n('view')
                    _rz(z, oZR, 'class', 10, fWR, oVR, gg)
                    var c1R = _v()
                    _(oZR, c1R)
                    if (_oz(z, 11, fWR, oVR, gg)) {
                        c1R.wxVkey = 1
                    }
                    var o2R = _v()
                    _(oZR, o2R)
                    if (_oz(z, 12, fWR, oVR, gg)) {
                        o2R.wxVkey = 1
                    }
                    c1R.wxXCkey = 1
                    o2R.wxXCkey = 1
                    _(cXR, oZR)
                    return cXR
                }
                oTR.wxXCkey = 2
                _2z(z, 8, xUR, e, s, gg, oTR, 'item', 'index', 'index')
                var l3R = _mz(z, 'safe-bottom', ['bind:__l', 13, 'class', 1, 'vueId', 2], [], e, s, gg)
                _(bSR, l3R)
                _(eRR, bSR)
            }
            eRR.wxXCkey = 1
            eRR.wxXCkey = 3
            _(r, tQR)
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
                g = "$gwx15_XC_28";
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
if (__vd_version_info__.delayedGwx || false) $gwx15_XC_28();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packageAssets/vipBuyRecord/vipBuyRecord.wxml'] = [$gwx15_XC_28, './packageAssets/vipBuyRecord/vipBuyRecord.wxml'];
else __wxAppCode__['packageAssets/vipBuyRecord/vipBuyRecord.wxml'] = $gwx15_XC_28('./packageAssets/vipBuyRecord/vipBuyRecord.wxml');;
__wxRoute = "packageAssets/vipBuyRecord/vipBuyRecord";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packageAssets/vipBuyRecord/vipBuyRecord.js";
define("packageAssets/vipBuyRecord/vipBuyRecord.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
        ["packageAssets/vipBuyRecord/vipBuyRecord"], {
            "0918": function(e, n, t) {},
            "545a": function(e, n, t) {
                (function(e, n) {
                    t("6cdc"), a(t("66fd"));
                    var r = a(t("f34f"));

                    function a(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    e.__webpack_require_UNI_MP_PLUGIN__ = t, n(r.default)
                }).call(this, t("bc2e").default, t("543d").createPage)
            },
            b1b6: function(e, n, t) {
                t.r(n);
                var r = t("f75b"),
                    a = t.n(r);
                for (var o in r)["default"].indexOf(o) < 0 && function(e) {
                    t.d(n, e, (function() {
                        return r[e]
                    }))
                }(o);
                n.default = a.a
            },
            bab7: function(e, n, t) {
                var r = t("0918");
                t.n(r).a
            },
            c1c1: function(e, n, t) {
                t.d(n, "b", (function() {
                    return a
                })), t.d(n, "c", (function() {
                    return o
                })), t.d(n, "a", (function() {
                    return r
                }));
                var r = {
                        PageView: function() {
                            return Promise.all([t.e("common/vendor"), t.e("components/PageView/PageView")]).then(t.bind(null, "5741"))
                        }
                    },
                    a = function() {
                        var e = this,
                            n = (e.$createElement, e._self._c, e.pageStatus ? e.__map(e.vipRecordList, (function(n, t) {
                                return {
                                    $orig: e.__get_orig(n),
                                    m0: n.payPrice ? e.fenToYuan(n.payPrice) : null
                                }
                            })) : null);
                        e.$mp.data = Object.assign({}, {
                            $root: {
                                l0: n
                            }
                        })
                    },
                    o = []
            },
            f34f: function(e, n, t) {
                t.r(n);
                var r = t("c1c1"),
                    a = t("b1b6");
                for (var o in a)["default"].indexOf(o) < 0 && function(e) {
                    t.d(n, e, (function() {
                        return a[e]
                    }))
                }(o);
                t("bab7");
                var u = t("f0c5"),
                    c = Object(u.a)(a.default, r.b, r.c, !1, null, "4972c579", null, !1, r.a, void 0);
                n.default = c.exports
            },
            f75b: function(e, n, t) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.default = void 0;
                var r = o(t("a34a")),
                    a = o(t("12c3"));

                function o(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function u(e, n, t, r, a, o, u) {
                    try {
                        var c = e[o](u),
                            i = c.value
                    } catch (e) {
                        return void t(e)
                    }
                    c.done ? n(i) : Promise.resolve(i).then(r, a)
                }
                var c = getApp().globalData.$dmall.dmallApi;
                n.default = {
                    data: function() {
                        return {
                            pageStatus: 0,
                            vipRecordList: []
                        }
                    },
                    onLoad: function() {
                        this.getVipBuyRecord()
                    },
                    methods: {
                        getVipBuyRecord: function() {
                            var e = this;
                            return function(e) {
                                return function() {
                                    var n = this,
                                        t = arguments;
                                    return new Promise((function(r, a) {
                                        var o = e.apply(n, t);

                                        function c(e) {
                                            u(o, r, a, c, i, "next", e)
                                        }

                                        function i(e) {
                                            u(o, r, a, c, i, "throw", e)
                                        }
                                        c(void 0)
                                    }))
                                }
                            }(r.default.mark((function n() {
                                var t;
                                return r.default.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.prev = 0, n.next = 3, a.default.getVipBuyRecord();
                                        case 3:
                                            "0000" === (t = n.sent).code && (e.vipRecordList = t.data.paidUpMemberOrderRecordList || []), console.log(t), e.pageStatus = 1, n.next = 13;
                                            break;
                                        case 9:
                                            n.prev = 9, n.t0 = n.catch(0), e.pageStatus = 2, console.log(n.t0);
                                        case 13:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [0, 9]
                                ])
                            })))()
                        },
                        fenToYuan: function(e) {
                            return c.formatPrice(e)
                        }
                    }
                }
            }
        },
        [
            ["545a", "common/runtime", "common/vendor", "packageAssets/common/vendor"]
        ]
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packageAssets/vipBuyRecord/vipBuyRecord.js'
});
require("packageAssets/vipBuyRecord/vipBuyRecord.js");