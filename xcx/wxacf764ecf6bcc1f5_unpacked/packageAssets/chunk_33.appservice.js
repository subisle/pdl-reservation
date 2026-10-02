$gwx15_XC_27 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx15_XC_27 || [];

        function gz$gwx15_XC_27_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx15_XC_27_1) return __WXML_GLOBAL__.ops_cached.$gwx15_XC_27_1
            __WXML_GLOBAL__.ops_cached.$gwx15_XC_27_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, '__l'])
                Z([3, 'data-v-653b7de8'])
                Z([3, 'e5f5fbcc-1'])
                Z([
                    [4],
                    [
                        [5],
                        [1, 'default']
                    ]
                ])
                Z([3, 'use-record data-v-653b7de8'])
                Z([1, true])
                Z([
                    [2, '=='],
                    [
                        [7],
                        [3, 'pageStatus']
                    ],
                    [1, 1]
                ])
                Z(z[0])
                Z(z[1])
                Z([
                    [2, '+'],
                    [
                        [2, '+'],
                        [1, 'e5f5fbcc-2'],
                        [1, ',']
                    ],
                    [1, 'e5f5fbcc-1']
                ])
                Z([
                    [2, '=='],
                    [
                        [7],
                        [3, 'pageStatus']
                    ],
                    [1, 2]
                ])
                Z(z[0])
                Z(z[1])
                Z([
                    [7],
                    [3, 'emptyUrl']
                ])
                Z([3, '暂无使用记录'])
                Z([
                    [2, '+'],
                    [
                        [2, '+'],
                        [1, 'e5f5fbcc-3'],
                        [1, ',']
                    ],
                    [1, 'e5f5fbcc-1']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx15_XC_27_1);
            return __WXML_GLOBAL__.ops_cached.$gwx15_XC_27_1
        }
        __WXML_GLOBAL__.ops_set.$gwx15_XC_27 = z;
        __WXML_GLOBAL__.ops_init.$gwx15_XC_27 = true;
        var x = ['./packageAssets/superValueCard/useRecord/useRecord.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx15_XC_27_1()
            var cJR = _mz(z, 'page-view', ['bind:__l', 0, 'class', 1, 'vueId', 1, 'vueSlots', 2], [], e, s, gg)
            var hKR = _mz(z, 'scroll-view', ['class', 4, 'scrollY', 1], [], e, s, gg)
            var oLR = _v()
            _(hKR, oLR)
            if (_oz(z, 6, e, s, gg)) {
                oLR.wxVkey = 1
                var oNR = _mz(z, 'safe-bottom', ['bind:__l', 7, 'class', 1, 'vueId', 2], [], e, s, gg)
                _(oLR, oNR)
            }
            var cMR = _v()
            _(hKR, cMR)
            if (_oz(z, 10, e, s, gg)) {
                cMR.wxVkey = 1
                var lOR = _mz(z, 'empty-status', ['bind:__l', 11, 'class', 1, 'logoUrl', 2, 'titleText', 3, 'vueId', 4], [], e, s, gg)
                _(cMR, lOR)
            }
            oLR.wxXCkey = 1
            oLR.wxXCkey = 3
            cMR.wxXCkey = 1
            cMR.wxXCkey = 3
            _(cJR, hKR)
            _(r, cJR)
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
                g = "$gwx15_XC_27";
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
if (__vd_version_info__.delayedGwx || false) $gwx15_XC_27();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packageAssets/superValueCard/useRecord/useRecord.wxml'] = [$gwx15_XC_27, './packageAssets/superValueCard/useRecord/useRecord.wxml'];
else __wxAppCode__['packageAssets/superValueCard/useRecord/useRecord.wxml'] = $gwx15_XC_27('./packageAssets/superValueCard/useRecord/useRecord.wxml');;
__wxRoute = "packageAssets/superValueCard/useRecord/useRecord";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packageAssets/superValueCard/useRecord/useRecord.js";
define("packageAssets/superValueCard/useRecord/useRecord.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
        ["packageAssets/superValueCard/useRecord/useRecord"], {
            "0093": function(e, t, n) {
                n.r(t);
                var r = n("e3ba"),
                    a = n("4749");
                for (var o in a)["default"].indexOf(o) < 0 && function(e) {
                    n.d(t, e, (function() {
                        return a[e]
                    }))
                }(o);
                n("140a");
                var c = n("f0c5"),
                    u = Object(c.a)(a.default, r.b, r.c, !1, null, "653b7de8", null, !1, r.a, void 0);
                t.default = u.exports
            },
            "01d9": function(e, t, n) {
                (function(e, t) {
                    n("6cdc"), a(n("66fd"));
                    var r = a(n("0093"));

                    function a(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    e.__webpack_require_UNI_MP_PLUGIN__ = n, t(r.default)
                }).call(this, n("bc2e").default, n("543d").createPage)
            },
            "140a": function(e, t, n) {
                var r = n("ed4c"),
                    a = n.n(r);
                a.a
            },
            4749: function(e, t, n) {
                n.r(t);
                var r = n("a28b"),
                    a = n.n(r);
                for (var o in r)["default"].indexOf(o) < 0 && function(e) {
                    n.d(t, e, (function() {
                        return r[e]
                    }))
                }(o);
                t.default = a.a
            },
            a28b: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var r = o(n("a34a")),
                    a = o(n("6564"));

                function o(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function c(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, t) {
                        var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                        if (null != n) {
                            var r, a, o, c, u = [],
                                i = !0,
                                l = !1;
                            try {
                                if (o = (n = n.call(e)).next, 0 === t) {
                                    if (Object(n) !== n) return;
                                    i = !1
                                } else
                                    for (; !(i = (r = o.call(n)).done) && (u.push(r.value), u.length !== t); i = !0);
                            } catch (e) {
                                l = !0, a = e
                            } finally {
                                try {
                                    if (!i && null != n.return && (c = n.return(), Object(c) !== c)) return
                                } finally {
                                    if (l) throw a
                                }
                            }
                            return u
                        }
                    }(e, t) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return u(e, t);
                            var n = {}.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(e, t) : void 0
                        }
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function u(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                    return r
                }

                function i(e, t, n, r, a, o, c) {
                    try {
                        var u = e[o](c),
                            i = u.value
                    } catch (e) {
                        return void n(e)
                    }
                    u.done ? t(i) : Promise.resolve(i).then(r, a)
                }
                var l = getApp().globalData.$dmall,
                    d = l.dmallApi,
                    f = l.router,
                    s = l.pathMap,
                    p = {
                        1: "已使用",
                        2: "已过期",
                        3: "转赠中",
                        4: "转赠失败",
                        5: "已转赠"
                    };
                t.default = {
                    filters: {
                        formatTime: function(e) {
                            var t = new Date(e),
                                n = t.getFullYear(),
                                r = "0".concat(t.getMonth() + 1).slice(-2),
                                a = "0".concat(t.getDate()).slice(-2),
                                o = "0".concat(t.getHours()).slice(-2),
                                c = "0".concat(t.getMinutes()).slice(-2),
                                u = "0".concat(t.getSeconds()).slice(-2);
                            return "".concat(n, ".").concat(r, ".").concat(a, " ").concat(o, ":").concat(c, ":").concat(u)
                        },
                        getUseTypeText: function(e) {
                            return e ? p[e] : ""
                        }
                    },
                    data: function() {
                        return {
                            pageStatus: 0,
                            theme: d.getTheme(),
                            recordList: [],
                            emptyUrl: "https://img.dmallcdn.com/dshop/202205/4e77cd75-49fe-4a88-a7b0-cafcf33a5bce"
                        }
                    },
                    onLoad: function(e) {
                        this.vendorId = e.vendorId, d.hideShareMenu()
                    },
                    onShow: function() {
                        this.getRecordList()
                    },
                    methods: {
                        getRecordList: function() {
                            var e = this;
                            return function(e) {
                                return function() {
                                    var t = this,
                                        n = arguments;
                                    return new Promise((function(r, a) {
                                        var o = e.apply(t, n);

                                        function c(e) {
                                            i(o, r, a, c, u, "next", e)
                                        }

                                        function u(e) {
                                            i(o, r, a, c, u, "throw", e)
                                        }
                                        c(void 0)
                                    }))
                                }
                            }(r.default.mark((function t() {
                                var n, o, u, i, l;
                                return r.default.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.next = 2, a.default.getCardUseRecord({
                                                vendorId: e.vendorId
                                            });
                                        case 2:
                                            if (n = t.sent, o = c(n, 2), u = o[0], i = o[1], l = void 0 === i ? [] : i, console.log(u, "errr"), !u) {
                                                t.next = 11;
                                                break
                                            }
                                            return e.$pageView.showToast({
                                                title: u || "接口请求失败"
                                            }), t.abrupt("return");
                                        case 11:
                                            e.recordList = l, e.pageStatus = l.length > 0 ? 1 : 2;
                                        case 13:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        jumpGift: function(e) {
                            console.log(e, "item"), 1 != e.useType && 2 != e.useType || f.navigateTo(s.SvMyCardDetail.path, {
                                vendorId: this.vendorId,
                                packageId: e.packageId,
                                packageCode: e.packageCode
                            }), 3 != e.useType && 4 != e.useType && 5 != e.useType || !e.giftingId || f.navigateTo(s.SvGift.path, {
                                giftingId: e.giftingId
                            })
                        }
                    }
                }
            },
            e3ba: function(e, t, n) {
                n.d(t, "b", (function() {
                    return a
                })), n.d(t, "c", (function() {
                    return o
                })), n.d(t, "a", (function() {
                    return r
                }));
                var r = {
                        PageView: function() {
                            return Promise.all([n.e("common/vendor"), n.e("components/PageView/PageView")]).then(n.bind(null, "5741"))
                        }
                    },
                    a = function() {
                        var e = this,
                            t = (e.$createElement, e._self._c, 1 == e.pageStatus ? e.__map(e.recordList, (function(t, n) {
                                return {
                                    $orig: e.__get_orig(t),
                                    f0: e._f("getUseTypeText")(t.useType),
                                    f1: e._f("formatTime")(t.useTimestamp)
                                }
                            })) : null);
                        e.$mp.data = Object.assign({}, {
                            $root: {
                                l0: t
                            }
                        })
                    },
                    o = []
            },
            ed4c: function(e, t, n) {}
        },
        [
            ["01d9", "common/runtime", "common/vendor", "packageAssets/common/vendor"]
        ]
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packageAssets/superValueCard/useRecord/useRecord.js'
});
require("packageAssets/superValueCard/useRecord/useRecord.js");