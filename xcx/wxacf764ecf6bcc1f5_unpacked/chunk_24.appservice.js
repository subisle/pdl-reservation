$gwx_XC_17 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_17 || [];

        function gz$gwx_XC_17_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_17_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_17_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_17_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_17_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_17_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_17 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_17 = true;
        var x = ['./node-modules/@dmall/jimoui-mp/components/SkeletonList/SkeletonList.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_17_1()
            var oVH = _n('slot')
            _(r, oVH)
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
                g = "$gwx_XC_17";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_17();
if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/@dmall/jimoui-mp/components/SkeletonList/SkeletonList.wxml'] = [$gwx_XC_17, './node-modules/@dmall/jimoui-mp/components/SkeletonList/SkeletonList.wxml'];
else __wxAppCode__['node-modules/@dmall/jimoui-mp/components/SkeletonList/SkeletonList.wxml'] = $gwx_XC_17('./node-modules/@dmall/jimoui-mp/components/SkeletonList/SkeletonList.wxml');;
__wxRoute = "node-modules/@dmall/jimoui-mp/components/SkeletonList/SkeletonList";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "node-modules/@dmall/jimoui-mp/components/SkeletonList/SkeletonList.js";
define("node-modules/@dmall/jimoui-mp/components/SkeletonList/SkeletonList.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    (global.webpackJsonp = global.webpackJsonp || []).push([
        ["node-modules/@dmall/jimoui-mp/components/SkeletonList/SkeletonList"], {
            "0365": function(n, e, t) {},
            "26db": function(n, e, t) {
                var o = t("0365");
                t.n(o).a
            },
            "5cce": function(n, e, t) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0, e.default = {
                    props: {
                        animation: {
                            type: String,
                            default: ""
                        },
                        layout: {
                            type: String,
                            default: ""
                        }
                    }
                }
            },
            cc89: function(n, e, t) {
                t.d(e, "b", (function() {
                    return o
                })), t.d(e, "c", (function() {
                    return c
                })), t.d(e, "a", (function() {}));
                var o = function() {
                        this.$createElement;
                        this._self._c
                    },
                    c = []
            },
            f58b: function(n, e, t) {
                t.r(e);
                var o = t("5cce"),
                    c = t.n(o);
                for (var l in o)["default"].indexOf(l) < 0 && function(n) {
                    t.d(e, n, (function() {
                        return o[n]
                    }))
                }(l);
                e.default = c.a
            },
            fa3d: function(n, e, t) {
                t.r(e);
                var o = t("cc89"),
                    c = t("f58b");
                for (var l in c)["default"].indexOf(l) < 0 && function(n) {
                    t.d(e, n, (function() {
                        return c[n]
                    }))
                }(l);
                t("26db");
                var i = t("f0c5"),
                    a = Object(i.a)(c.default, o.b, o.c, !1, null, "76449ce8", null, !1, o.a, void 0);
                e.default = a.exports
            }
        }
    ]), (global.webpackJsonp = global.webpackJsonp || []).push(["node-modules/@dmall/jimoui-mp/components/SkeletonList/SkeletonList-create-component", {
            "node-modules/@dmall/jimoui-mp/components/SkeletonList/SkeletonList-create-component": function(n, e, t) {
                t("543d").createComponent(t("fa3d"))
            }
        },
        [
            ["node-modules/@dmall/jimoui-mp/components/SkeletonList/SkeletonList-create-component"]
        ]
    ]);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'node-modules/@dmall/jimoui-mp/components/SkeletonList/SkeletonList.js'
});
require("node-modules/@dmall/jimoui-mp/components/SkeletonList/SkeletonList.js");