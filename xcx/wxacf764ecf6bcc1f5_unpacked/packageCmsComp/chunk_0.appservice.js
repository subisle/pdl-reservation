$gwx8_XC_0 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx8_XC_0 || [];

        function gz$gwx8_XC_0_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx8_XC_0_1) return __WXML_GLOBAL__.ops_cached.$gwx8_XC_0_1
            __WXML_GLOBAL__.ops_cached.$gwx8_XC_0_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
            })(__WXML_GLOBAL__.ops_cached.$gwx8_XC_0_1);
            return __WXML_GLOBAL__.ops_cached.$gwx8_XC_0_1
        }
        __WXML_GLOBAL__.ops_set.$gwx8_XC_0 = z;
        __WXML_GLOBAL__.ops_init.$gwx8_XC_0 = true;
        var x = ['./packageCmsComp/cms_holder/cms_holder.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx8_XC_0_1()
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
                g = "$gwx8_XC_0";
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
if (__vd_version_info__.delayedGwx || false) $gwx8_XC_0();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packageCmsComp/cms_holder/cms_holder.wxml'] = [$gwx8_XC_0, './packageCmsComp/cms_holder/cms_holder.wxml'];
else __wxAppCode__['packageCmsComp/cms_holder/cms_holder.wxml'] = $gwx8_XC_0('./packageCmsComp/cms_holder/cms_holder.wxml');;
__wxRoute = "packageCmsComp/cms_holder/cms_holder";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packageCmsComp/cms_holder/cms_holder.js";
define("packageCmsComp/cms_holder/cms_holder.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
        ["packageCmsComp/cms_holder/cms_holder"], {
            "5b93": function(e, n, t) {
                (function(e, n) {
                    t("6cdc"), o(t("66fd"));
                    var u = o(t("e09a"));

                    function o(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    e.__webpack_require_UNI_MP_PLUGIN__ = t, n(u.default)
                }).call(this, t("bc2e").default, t("543d").createPage)
            },
            b667: function(e, n, t) {
                t.d(n, "b", (function() {
                    return u
                })), t.d(n, "c", (function() {
                    return o
                })), t.d(n, "a", (function() {}));
                var u = function() {
                        this.$createElement;
                        this._self._c
                    },
                    o = []
            },
            d941: function(e, n, t) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.default = void 0, n.default = {
                    name: "CmsHolder"
                }
            },
            e09a: function(e, n, t) {
                t.r(n);
                var u = t("b667"),
                    o = t("f77a");
                for (var a in o)["default"].indexOf(a) < 0 && function(e) {
                    t.d(n, e, (function() {
                        return o[e]
                    }))
                }(a);
                var c = t("f0c5"),
                    f = Object(c.a)(o.default, u.b, u.c, !1, null, "7f1f2538", null, !1, u.a, void 0);
                n.default = f.exports
            },
            f77a: function(e, n, t) {
                t.r(n);
                var u = t("d941"),
                    o = t.n(u);
                for (var a in u)["default"].indexOf(a) < 0 && function(e) {
                    t.d(n, e, (function() {
                        return u[e]
                    }))
                }(a);
                n.default = o.a
            }
        },
        [
            ["5b93", "common/runtime", "common/vendor"]
        ]
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packageCmsComp/cms_holder/cms_holder.js'
});
require("packageCmsComp/cms_holder/cms_holder.js");