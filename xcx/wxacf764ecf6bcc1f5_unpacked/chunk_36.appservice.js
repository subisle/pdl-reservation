$gwx_XC_30 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_30 || [];

        function gz$gwx_XC_30_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_30_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_30_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_30_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_30_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_30_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_30 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_30 = true;
        var x = ['./pages/itemdetail/itemdetail.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_30_1()
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
                g = "$gwx_XC_30";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_30();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/itemdetail/itemdetail.wxml'] = [$gwx_XC_30, './pages/itemdetail/itemdetail.wxml'];
else __wxAppCode__['pages/itemdetail/itemdetail.wxml'] = $gwx_XC_30('./pages/itemdetail/itemdetail.wxml');;
__wxRoute = "pages/itemdetail/itemdetail";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/itemdetail/itemdetail.js";
define("pages/itemdetail/itemdetail.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    (global.webpackJsonp = global.webpackJsonp || []).push([
        ["pages/itemdetail/itemdetail"], {
            "40df": function(e, t, n) {
                n.r(t);
                var a = n("7f0e"),
                    u = n.n(a);
                for (var o in a)["default"].indexOf(o) < 0 && function(e) {
                    n.d(t, e, (function() {
                        return a[e]
                    }))
                }(o);
                t.default = u.a
            },
            "725d": function(e, t, n) {
                (function(e, t) {
                    n("6cdc"), u(n("66fd"));
                    var a = u(n("9745"));

                    function u(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    e.__webpack_require_UNI_MP_PLUGIN__ = n, t(a.default)
                }).call(this, n("bc2e").default, n("543d").createPage)
            },
            "7f0e": function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var a = getApp().globalData;
                t.default = {
                    onLoad: function(e) {
                        setTimeout((function() {
                            var t = a.$dmall.dmallApi.jsonToParamStr(e) || "";
                            a.$dmall.router.redirectTo(a.$dmall.pathMap.wareDetail.path + (t.length > 0 ? "?" : "") + t)
                        }), 300)
                    }
                }
            },
            9745: function(e, t, n) {
                n.r(t);
                var a = n("c6fe"),
                    u = n("40df");
                for (var o in u)["default"].indexOf(o) < 0 && function(e) {
                    n.d(t, e, (function() {
                        return u[e]
                    }))
                }(o);
                var f = n("f0c5"),
                    r = Object(f.a)(u.default, a.b, a.c, !1, null, "1588832c", null, !1, a.a, void 0);
                t.default = r.exports
            },
            c6fe: function(e, t, n) {
                n.d(t, "b", (function() {
                    return a
                })), n.d(t, "c", (function() {
                    return u
                })), n.d(t, "a", (function() {}));
                var a = function() {
                        this.$createElement;
                        this._self._c
                    },
                    u = []
            }
        },
        [
            ["725d", "common/runtime", "common/vendor"]
        ]
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'pages/itemdetail/itemdetail.js'
});
require("pages/itemdetail/itemdetail.js");