$gwx_XC_16 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_16 || [];

        function gz$gwx_XC_16_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_16_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_16_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_16_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_16 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_16 = true;
        var x = ['./node-modules/@dmall/jimoui-mp/components/SkeletonItem/SkeletonItem.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_16_1()
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
                g = "$gwx_XC_16";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_16();
if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/@dmall/jimoui-mp/components/SkeletonItem/SkeletonItem.wxml'] = [$gwx_XC_16, './node-modules/@dmall/jimoui-mp/components/SkeletonItem/SkeletonItem.wxml'];
else __wxAppCode__['node-modules/@dmall/jimoui-mp/components/SkeletonItem/SkeletonItem.wxml'] = $gwx_XC_16('./node-modules/@dmall/jimoui-mp/components/SkeletonItem/SkeletonItem.wxml');;
__wxRoute = "node-modules/@dmall/jimoui-mp/components/SkeletonItem/SkeletonItem";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "node-modules/@dmall/jimoui-mp/components/SkeletonItem/SkeletonItem.js";
define("node-modules/@dmall/jimoui-mp/components/SkeletonItem/SkeletonItem.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    (global.webpackJsonp = global.webpackJsonp || []).push([
        ["node-modules/@dmall/jimoui-mp/components/SkeletonItem/SkeletonItem"], {
            1859: function(e, t, n) {
                n.r(t);
                var o = n("e205"),
                    u = n.n(o);
                for (var i in o)["default"].indexOf(i) < 0 && function(e) {
                    n.d(t, e, (function() {
                        return o[e]
                    }))
                }(i);
                t.default = u.a
            },
            "36a1": function(e, t, n) {
                n.r(t);
                var o = n("97da"),
                    u = n("1859");
                for (var i in u)["default"].indexOf(i) < 0 && function(e) {
                    n.d(t, e, (function() {
                        return u[e]
                    }))
                }(i);
                n("b2b6");
                var a = n("f0c5"),
                    l = Object(a.a)(u.default, o.b, o.c, !1, null, "462f3cb5", null, !1, o.a, void 0);
                t.default = l.exports
            },
            "97da": function(e, t, n) {
                n.d(t, "b", (function() {
                    return o
                })), n.d(t, "c", (function() {
                    return u
                })), n.d(t, "a", (function() {}));
                var o = function() {
                        this.$createElement;
                        this._self._c
                    },
                    u = []
            },
            b2b6: function(e, t, n) {
                var o = n("cd84e");
                n.n(o).a
            },
            cd84e: function(e, t, n) {},
            e205: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var o = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n("bd49"));
                t.default = {
                    mixins: [o.default],
                    props: {
                        width: {
                            type: String | Number,
                            default: ""
                        },
                        height: {
                            type: String | Number,
                            default: ""
                        },
                        shape: {
                            type: String,
                            default: ""
                        }
                    },
                    computed: {
                        classFormat: function() {
                            return this.shape
                        },
                        styleFormat: function() {
                            var e = {};
                            return this.width && (e.width = this.width), this.height && (e.height = this.height), this.styleParse(e)
                        }
                    }
                }
            }
        }
    ]), (global.webpackJsonp = global.webpackJsonp || []).push(["node-modules/@dmall/jimoui-mp/components/SkeletonItem/SkeletonItem-create-component", {
            "node-modules/@dmall/jimoui-mp/components/SkeletonItem/SkeletonItem-create-component": function(e, t, n) {
                n("543d").createComponent(n("36a1"))
            }
        },
        [
            ["node-modules/@dmall/jimoui-mp/components/SkeletonItem/SkeletonItem-create-component"]
        ]
    ]);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'node-modules/@dmall/jimoui-mp/components/SkeletonItem/SkeletonItem.js'
});
require("node-modules/@dmall/jimoui-mp/components/SkeletonItem/SkeletonItem.js");