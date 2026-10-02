$gwx15_XC_30 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx15_XC_30 || [];

        function gz$gwx15_XC_30_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx15_XC_30_1) return __WXML_GLOBAL__.ops_cached.$gwx15_XC_30_1
            __WXML_GLOBAL__.ops_cached.$gwx15_XC_30_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'rulesTipShow']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx15_XC_30_1);
            return __WXML_GLOBAL__.ops_cached.$gwx15_XC_30_1
        }
        __WXML_GLOBAL__.ops_set.$gwx15_XC_30 = z;
        __WXML_GLOBAL__.ops_init.$gwx15_XC_30 = true;
        var x = ['./packageAssets/coupon/components/UsageRules/UsageRules.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx15_XC_30_1()
            var oFS = _v()
            _(r, oFS)
            if (_oz(z, 0, e, s, gg)) {
                oFS.wxVkey = 1
            }
            oFS.wxXCkey = 1
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
                g = "$gwx15_XC_30";
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
if (__vd_version_info__.delayedGwx || false) $gwx15_XC_30();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packageAssets/coupon/components/UsageRules/UsageRules.wxml'] = [$gwx15_XC_30, './packageAssets/coupon/components/UsageRules/UsageRules.wxml'];
else __wxAppCode__['packageAssets/coupon/components/UsageRules/UsageRules.wxml'] = $gwx15_XC_30('./packageAssets/coupon/components/UsageRules/UsageRules.wxml');;
__wxRoute = "packageAssets/coupon/components/UsageRules/UsageRules";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packageAssets/coupon/components/UsageRules/UsageRules.js";
define("packageAssets/coupon/components/UsageRules/UsageRules.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
        ["packageAssets/coupon/components/UsageRules/UsageRules"], {
            "06c2": function(e, n, t) {
                t.r(n);
                var a = t("4dea"),
                    o = t.n(a);
                for (var s in a)["default"].indexOf(s) < 0 && function(e) {
                    t.d(n, e, (function() {
                        return a[e]
                    }))
                }(s);
                n.default = o.a
            },
            "4dea": function(e, n, t) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.default = void 0;
                var a = new(t("b49c").BuriedPoint),
                    o = getApp().globalData.$dmall,
                    s = o.dmallApi;
                o.router, n.default = {
                    name: "UsageRules",
                    props: {
                        rulesTipShow: {
                            type: Boolean,
                            default: !0
                        },
                        modalInfo: {
                            type: Object,
                            default: {}
                        },
                        pageType: {
                            type: String,
                            default: "my"
                        },
                        touTiaoUseManual: {
                            type: String,
                            default: ""
                        }
                    },
                    methods: {
                        showModal: function() {
                            var e = this.modalInfo,
                                n = this.pageType,
                                t = (this.touTiaoUseManual, s.getTheme(), "my" === n ? "我的优惠券" : "优惠券"),
                                o = "my" === n ? "mycoupon-gzsm" : "jiesuan_quan_sygz",
                                u = "my" === n ? "优惠券_规则说明" : "结算页优惠券规则说明";
                            a.overlayClickTrack({
                                element_id: o,
                                element_name: u,
                                page_title: t
                            }), this.$pageView.showDialog({
                                title: e.title,
                                content: e.content,
                                ensureText: "我知道了",
                                contentAlign: "left"
                            })
                        }
                    }
                }
            },
            "81cb": function(e, n, t) {},
            a5fa: function(e, n, t) {
                t.r(n);
                var a = t("e2a8"),
                    o = t("06c2");
                for (var s in o)["default"].indexOf(s) < 0 && function(e) {
                    t.d(n, e, (function() {
                        return o[e]
                    }))
                }(s);
                t("c688");
                var u = t("f0c5"),
                    c = Object(u.a)(o.default, a.b, a.c, !1, null, "9f6e6266", null, !1, a.a, void 0);
                n.default = c.exports
            },
            c688: function(e, n, t) {
                var a = t("81cb");
                t.n(a).a
            },
            e2a8: function(e, n, t) {
                t.d(n, "b", (function() {
                    return a
                })), t.d(n, "c", (function() {
                    return o
                })), t.d(n, "a", (function() {}));
                var a = function() {
                        this.$createElement;
                        this._self._c
                    },
                    o = []
            }
        }
    ]), (global.webpackJsonp = global.webpackJsonp || []).push(["packageAssets/coupon/components/UsageRules/UsageRules-create-component", {
            "packageAssets/coupon/components/UsageRules/UsageRules-create-component": function(e, n, t) {
                t("543d").createComponent(t("a5fa"))
            }
        },
        [
            ["packageAssets/coupon/components/UsageRules/UsageRules-create-component"]
        ]
    ]);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'packageAssets/coupon/components/UsageRules/UsageRules.js'
});
require("packageAssets/coupon/components/UsageRules/UsageRules.js");