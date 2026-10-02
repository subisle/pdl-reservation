$gwx_XC_41 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_41 || [];

        function gz$gwx_XC_41_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_41_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_41_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_41_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'showBadge']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_41_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_41_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_41 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_41 = true;
        var x = ['./node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_41_1()
            var oDS = _v()
            _(r, oDS)
            if (_oz(z, 0, e, s, gg)) {
                oDS.wxVkey = 1
            }
            oDS.wxXCkey = 1
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
                g = "$gwx_XC_41";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_41();
if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation.wxml'] = [$gwx_XC_41, './node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation.wxml'];
else __wxAppCode__['node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation.wxml'] = $gwx_XC_41('./node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation.wxml');;
__wxRoute = "node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation.js";
define("node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    (global.webpackJsonp = global.webpackJsonp || []).push([
        ["node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation"], {
            "4f95": function(n, e, t) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0, e.default = {
                    name: "BadgeAnimation",
                    props: {
                        num: {
                            type: [Number, String],
                            default: 0
                        },
                        bgColor: {
                            type: String,
                            default: ""
                        },
                        color: {
                            type: String,
                            default: ""
                        }
                    },
                    data: function() {
                        return {
                            needScale: !1,
                            showBadge: !1
                        }
                    },
                    computed: {
                        formatBadgeNumber: function() {
                            return parseInt(this.num, 10) > 99 ? "99" : this.num
                        }
                    },
                    watch: {
                        num: function(n, e) {
                            (0 === e || !e) && n > 0 ? (this.showBadge = !0, this.needScale = !0) : e > 0 && n > 0 ? (this.showBadge = !0, this.needScale = !1) : (this.showBadge = !1, this.needScale = !1)
                        }
                    },
                    mounted: function() {
                        this.num > 0 ? this.showBadge = !0 : this.showBadge = !1
                    }
                }
            },
            "62b2": function(n, e, t) {
                t.r(e);
                var o = t("8afa"),
                    a = t("68a4");
                for (var i in a)["default"].indexOf(i) < 0 && function(n) {
                    t.d(e, n, (function() {
                        return a[n]
                    }))
                }(i);
                t("6b29");
                var d = t("f0c5"),
                    u = Object(d.a)(a.default, o.b, o.c, !1, null, "082ac988", null, !1, o.a, void 0);
                e.default = u.exports
            },
            "68a4": function(n, e, t) {
                t.r(e);
                var o = t("4f95"),
                    a = t.n(o);
                for (var i in o)["default"].indexOf(i) < 0 && function(n) {
                    t.d(e, n, (function() {
                        return o[n]
                    }))
                }(i);
                e.default = a.a
            },
            "6b29": function(n, e, t) {
                var o = t("725d0");
                t.n(o).a
            },
            "725d0": function(n, e, t) {},
            "8afa": function(n, e, t) {
                t.d(e, "b", (function() {
                    return o
                })), t.d(e, "c", (function() {
                    return a
                })), t.d(e, "a", (function() {}));
                var o = function() {
                        this.$createElement;
                        this._self._c
                    },
                    a = []
            }
        }
    ]), (global.webpackJsonp = global.webpackJsonp || []).push(["node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation-create-component", {
            "node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation-create-component": function(n, e, t) {
                t("543d").createComponent(t("62b2"))
            }
        },
        [
            ["node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation-create-component"]
        ]
    ]);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation.js'
});
require("node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation.js");