$gwx18_XC_12 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx18_XC_12 || [];

        function gz$gwx18_XC_12_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx18_XC_12_1) return __WXML_GLOBAL__.ops_cached.$gwx18_XC_12_1
            __WXML_GLOBAL__.ops_cached.$gwx18_XC_12_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
            })(__WXML_GLOBAL__.ops_cached.$gwx18_XC_12_1);
            return __WXML_GLOBAL__.ops_cached.$gwx18_XC_12_1
        }
        __WXML_GLOBAL__.ops_set.$gwx18_XC_12 = z;
        __WXML_GLOBAL__.ops_init.$gwx18_XC_12 = true;
        var x = ['./packageExternal/components/prerules/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx18_XC_12_1()
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
                g = "$gwx18_XC_12";
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
if (__vd_version_info__.delayedGwx || false) $gwx18_XC_12();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packageExternal/components/prerules/index.wxml'] = [$gwx18_XC_12, './packageExternal/components/prerules/index.wxml'];
else __wxAppCode__['packageExternal/components/prerules/index.wxml'] = $gwx18_XC_12('./packageExternal/components/prerules/index.wxml');;
__wxRoute = "packageExternal/components/prerules/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packageExternal/components/prerules/index.js";
define("packageExternal/components/prerules/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
        ["packageExternal/components/prerules/index"], {
            "4bda": function(e, n, t) {},
            "5e48": function(e, n, t) {
                t.r(n);
                var o = t("c32e"),
                    a = t("a69ef");
                for (var u in a)["default"].indexOf(u) < 0 && function(e) {
                    t.d(n, e, (function() {
                        return a[e]
                    }))
                }(u);
                t("5f65");
                var c = t("f0c5"),
                    r = Object(c.a)(a.default, o.b, o.c, !1, null, "203dcbfb", null, !1, o.a, void 0);
                n.default = r.exports
            },
            "5f65": function(e, n, t) {
                var o = t("4bda");
                t.n(o).a
            },
            "8b21": function(e, n, t) {
                (function(e) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }), n.default = void 0, n.default = {
                        props: {
                            isleft: {
                                type: Boolean,
                                default: !1
                            },
                            isbottom: {
                                type: Boolean,
                                default: !1
                            },
                            xnum: {
                                type: Number,
                                default: 0
                            },
                            ynum: {
                                type: Number,
                                default: 136
                            },
                            url: {
                                type: String,
                                default: ""
                            }
                        },
                        methods: {
                            golink: function(n) {
                                n && e.navigateTo({
                                    url: n
                                })
                            }
                        }
                    }
                }).call(this, t("543d").default)
            },
            a69ef: function(e, n, t) {
                t.r(n);
                var o = t("8b21"),
                    a = t.n(o);
                for (var u in o)["default"].indexOf(u) < 0 && function(e) {
                    t.d(n, e, (function() {
                        return o[e]
                    }))
                }(u);
                n.default = a.a
            },
            c32e: function(e, n, t) {
                t.d(n, "b", (function() {
                    return o
                })), t.d(n, "c", (function() {
                    return a
                })), t.d(n, "a", (function() {}));
                var o = function() {
                        this.$createElement;
                        this._self._c
                    },
                    a = []
            }
        }
    ]), (global.webpackJsonp = global.webpackJsonp || []).push(["packageExternal/components/prerules/index-create-component", {
            "packageExternal/components/prerules/index-create-component": function(e, n, t) {
                t("543d").createComponent(t("5e48"))
            }
        },
        [
            ["packageExternal/components/prerules/index-create-component"]
        ]
    ]);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'packageExternal/components/prerules/index.js'
});
require("packageExternal/components/prerules/index.js");