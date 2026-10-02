$gwx3_XC_2 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_2 || [];

        function gz$gwx3_XC_2_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_2_1) return __WXML_GLOBAL__.ops_cached.$gwx3_XC_2_1
            __WXML_GLOBAL__.ops_cached.$gwx3_XC_2_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
            })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_2_1);
            return __WXML_GLOBAL__.ops_cached.$gwx3_XC_2_1
        }
        __WXML_GLOBAL__.ops_set.$gwx3_XC_2 = z;
        __WXML_GLOBAL__.ops_init.$gwx3_XC_2 = true;
        var x = ['./packageWare/couponPromotion/couponPromotion.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx3_XC_2_1()
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
                g = "$gwx3_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_2();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packageWare/couponPromotion/couponPromotion.wxml'] = [$gwx3_XC_2, './packageWare/couponPromotion/couponPromotion.wxml'];
else __wxAppCode__['packageWare/couponPromotion/couponPromotion.wxml'] = $gwx3_XC_2('./packageWare/couponPromotion/couponPromotion.wxml');;
__wxRoute = "packageWare/couponPromotion/couponPromotion";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packageWare/couponPromotion/couponPromotion.js";
define("packageWare/couponPromotion/couponPromotion.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
        ["packageWare/couponPromotion/couponPromotion"], {
            "00d6": function(n, e, o) {
                o.r(e);
                var t = o("119e"),
                    a = o.n(t);
                for (var u in t)["default"].indexOf(u) < 0 && function(n) {
                    o.d(e, n, (function() {
                        return t[n]
                    }))
                }(u);
                e.default = a.a
            },
            "07b44": function(n, e, o) {
                (function(n, e) {
                    o("6cdc"), a(o("66fd"));
                    var t = a(o("b035"));

                    function a(n) {
                        return n && n.__esModule ? n : {
                            default: n
                        }
                    }
                    n.__webpack_require_UNI_MP_PLUGIN__ = o, e(t.default)
                }).call(this, o("bc2e").default, o("543d").createPage)
            },
            "119e": function(n, e, o) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var t = getApp().globalData;
                e.default = {
                    onLoad: function(n) {
                        setTimeout((function() {
                            var e = t.$dmall.dmallApi.jsonToParamStr(n) || "";
                            t.$dmall.router.redirectTo(t.$dmall.pathMap.couponPromotion.path + (e.length > 0 ? "?" : "") + e)
                        }), 300)
                    }
                }
            },
            7719: function(n, e, o) {
                o.d(e, "b", (function() {
                    return t
                })), o.d(e, "c", (function() {
                    return a
                })), o.d(e, "a", (function() {}));
                var t = function() {
                        this.$createElement;
                        this._self._c
                    },
                    a = []
            },
            b035: function(n, e, o) {
                o.r(e);
                var t = o("7719"),
                    a = o("00d6");
                for (var u in a)["default"].indexOf(u) < 0 && function(n) {
                    o.d(e, n, (function() {
                        return a[n]
                    }))
                }(u);
                var r = o("f0c5"),
                    c = Object(r.a)(a.default, t.b, t.c, !1, null, "fb0e9f7c", null, !1, t.a, void 0);
                e.default = c.exports
            }
        },
        [
            ["07b44", "common/runtime", "common/vendor"]
        ]
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packageWare/couponPromotion/couponPromotion.js'
});
require("packageWare/couponPromotion/couponPromotion.js");