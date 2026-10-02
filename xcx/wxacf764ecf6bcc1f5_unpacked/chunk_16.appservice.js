$gwx_XC_8 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_8 || [];

        function gz$gwx_XC_8_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_8_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'kv-footerView data-v-2b34c0d2'])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'type']
                    ],
                    [1, 'text']
                ])
                Z([
                    [7],
                    [3, 'clickText']
                ])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'type']
                    ],
                    [1, 'img']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_8_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_8 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_8 = true;
        var x = ['./node-modules/@dmall/jimoui-mp/components/FooterView/FooterView.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_8_1()
            var eHG = _n('view')
            _rz(z, eHG, 'class', 0, e, s, gg)
            var bIG = _v()
            _(eHG, bIG)
            if (_oz(z, 1, e, s, gg)) {
                bIG.wxVkey = 1
                var oJG = _v()
                _(bIG, oJG)
                if (_oz(z, 2, e, s, gg)) {
                    oJG.wxVkey = 1
                }
                oJG.wxXCkey = 1
            } else {
                bIG.wxVkey = 2
                var xKG = _v()
                _(bIG, xKG)
                if (_oz(z, 3, e, s, gg)) {
                    xKG.wxVkey = 1
                }
                xKG.wxXCkey = 1
            }
            bIG.wxXCkey = 1
            _(r, eHG)
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
                g = "$gwx_XC_8";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_8();
if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/@dmall/jimoui-mp/components/FooterView/FooterView.wxml'] = [$gwx_XC_8, './node-modules/@dmall/jimoui-mp/components/FooterView/FooterView.wxml'];
else __wxAppCode__['node-modules/@dmall/jimoui-mp/components/FooterView/FooterView.wxml'] = $gwx_XC_8('./node-modules/@dmall/jimoui-mp/components/FooterView/FooterView.wxml');;
__wxRoute = "node-modules/@dmall/jimoui-mp/components/FooterView/FooterView";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "node-modules/@dmall/jimoui-mp/components/FooterView/FooterView.js";
define("node-modules/@dmall/jimoui-mp/components/FooterView/FooterView.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    (global.webpackJsonp = global.webpackJsonp || []).push([
        ["node-modules/@dmall/jimoui-mp/components/FooterView/FooterView"], {
            "3cf6": function(e, t, o) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0, t.default = {
                    props: {
                        type: {
                            type: String,
                            default: "text"
                        },
                        imgType: {
                            type: String,
                            default: "default"
                        },
                        footerText: {
                            type: String,
                            default: "您已经拉到底了"
                        },
                        footerTextColor: {
                            type: String,
                            default: "#CCCCCC"
                        },
                        clickText: {
                            type: String,
                            default: ""
                        },
                        clickTextColor: {
                            type: String,
                            default: "#FF680A"
                        },
                        footerImg: {
                            type: String,
                            default: ""
                        }
                    },
                    data: function() {
                        return {
                            grayImg: "https://img.dmallcdn.com/dshop/202107/d4309226-8d0c-4f13-bca5-d76945cbc87c",
                            colorImg: "https://img.dmallcdn.com/dshop/202107/23c0d2b0-e358-49f5-a713-e3094e1e3c66"
                        }
                    },
                    methods: {
                        clickEvent: function() {
                            this.$emit("clickMoreText")
                        }
                    }
                }
            },
            "3fa7": function(e, t, o) {
                o.d(t, "b", (function() {
                    return n
                })), o.d(t, "c", (function() {
                    return c
                })), o.d(t, "a", (function() {}));
                var n = function() {
                        this.$createElement;
                        this._self._c
                    },
                    c = []
            },
            "41db": function(e, t, o) {
                o.r(t);
                var n = o("3cf6"),
                    c = o.n(n);
                for (var i in n)["default"].indexOf(i) < 0 && function(e) {
                    o.d(t, e, (function() {
                        return n[e]
                    }))
                }(i);
                t.default = c.a
            },
            80304: function(e, t, o) {},
            9465: function(e, t, o) {
                var n = o("80304");
                o.n(n).a
            },
            "98d7": function(e, t, o) {
                o.r(t);
                var n = o("3fa7"),
                    c = o("41db");
                for (var i in c)["default"].indexOf(i) < 0 && function(e) {
                    o.d(t, e, (function() {
                        return c[e]
                    }))
                }(i);
                o("9465");
                var d = o("f0c5"),
                    a = Object(d.a)(c.default, n.b, n.c, !1, null, "2b34c0d2", null, !1, n.a, void 0);
                t.default = a.exports
            }
        }
    ]), (global.webpackJsonp = global.webpackJsonp || []).push(["node-modules/@dmall/jimoui-mp/components/FooterView/FooterView-create-component", {
            "node-modules/@dmall/jimoui-mp/components/FooterView/FooterView-create-component": function(e, t, o) {
                o("543d").createComponent(o("98d7"))
            }
        },
        [
            ["node-modules/@dmall/jimoui-mp/components/FooterView/FooterView-create-component"]
        ]
    ]);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'node-modules/@dmall/jimoui-mp/components/FooterView/FooterView.js'
});
require("node-modules/@dmall/jimoui-mp/components/FooterView/FooterView.js");