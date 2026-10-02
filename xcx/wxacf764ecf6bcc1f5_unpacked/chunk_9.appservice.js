$gwx_XC_44 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_44 || [];

        function gz$gwx_XC_44_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_44_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_44_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_44_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_44_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_44_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_44 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_44 = true;
        var x = ['./node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_44_1()
            var c4S = _n('slot')
            _(r, c4S)
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
                g = "$gwx_XC_44";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_44();
if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup.wxml'] = [$gwx_XC_44, './node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup.wxml'];
else __wxAppCode__['node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup.wxml'] = $gwx_XC_44('./node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup.wxml');;
__wxRoute = "node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup.js";
define("node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    (global.webpackJsonp = global.webpackJsonp || []).push([
        ["node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup"], {
            "0bbf": function(n, e, o) {},
            3728: function(n, e, o) {
                var l = o("0bbf");
                o.n(l).a
            },
            3767: function(n, e, o) {
                o.r(e);
                var l = o("49f6"),
                    t = o.n(l);
                for (var u in l)["default"].indexOf(u) < 0 && function(n) {
                    o.d(e, n, (function() {
                        return l[n]
                    }))
                }(u);
                e.default = t.a
            },
            "49f6": function(n, e, o) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0, e.default = {
                    name: "CellGroup",
                    props: {},
                    data: function() {
                        return {}
                    },
                    methods: {}
                }
            },
            6569: function(n, e, o) {
                o.d(e, "b", (function() {
                    return l
                })), o.d(e, "c", (function() {
                    return t
                })), o.d(e, "a", (function() {}));
                var l = function() {
                        this.$createElement;
                        this._self._c
                    },
                    t = []
            },
            "7e3c": function(n, e, o) {
                o.r(e);
                var l = o("6569"),
                    t = o("3767");
                for (var u in t)["default"].indexOf(u) < 0 && function(n) {
                    o.d(e, n, (function() {
                        return t[n]
                    }))
                }(u);
                o("3728");
                var a = o("f0c5"),
                    c = Object(a.a)(t.default, l.b, l.c, !1, null, "eaa98cd0", null, !1, l.a, void 0);
                e.default = c.exports
            }
        }
    ]), (global.webpackJsonp = global.webpackJsonp || []).push(["node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup-create-component", {
            "node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup-create-component": function(n, e, o) {
                o("543d").createComponent(o("7e3c"))
            }
        },
        [
            ["node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup-create-component"]
        ]
    ]);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup.js'
});
require("node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup.js");