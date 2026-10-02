$gwx_XC_19 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_19 || [];

        function gz$gwx_XC_19_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_19_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_19_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_19_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_19_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_19_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_19 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_19 = true;
        var x = ['./node-modules/@dmall/jimoui-mp/components/Switch/Switch.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_19_1()
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
                g = "$gwx_XC_19";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_19();
if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/@dmall/jimoui-mp/components/Switch/Switch.wxml'] = [$gwx_XC_19, './node-modules/@dmall/jimoui-mp/components/Switch/Switch.wxml'];
else __wxAppCode__['node-modules/@dmall/jimoui-mp/components/Switch/Switch.wxml'] = $gwx_XC_19('./node-modules/@dmall/jimoui-mp/components/Switch/Switch.wxml');;
__wxRoute = "node-modules/@dmall/jimoui-mp/components/Switch/Switch";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "node-modules/@dmall/jimoui-mp/components/Switch/Switch.js";
define("node-modules/@dmall/jimoui-mp/components/Switch/Switch.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    (global.webpackJsonp = global.webpackJsonp || []).push([
        ["node-modules/@dmall/jimoui-mp/components/Switch/Switch"], {
            "08d0": function(t, e, n) {
                n.r(e);
                var o = n("fcad"),
                    i = n("b5dd");
                for (var a in i)["default"].indexOf(a) < 0 && function(t) {
                    n.d(e, t, (function() {
                        return i[t]
                    }))
                }(a);
                n("f11fc");
                var c = n("f0c5"),
                    d = Object(c.a)(i.default, o.b, o.c, !1, null, "0c32e242", null, !1, o.a, void 0);
                e.default = d.exports
            },
            a7a4: function(t, e, n) {},
            b5dd: function(t, e, n) {
                n.r(e);
                var o = n("c422"),
                    i = n.n(o);
                for (var a in o)["default"].indexOf(a) < 0 && function(t) {
                    n.d(e, t, (function() {
                        return o[t]
                    }))
                }(a);
                e.default = i.a
            },
            c422: function(t, e, n) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var o = a(n("a32f")),
                    i = a(n("bd49"));

                function a(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                e.default = {
                    mixins: [o.default, i.default],
                    model: {
                        prop: "value",
                        event: "input"
                    },
                    props: {
                        value: {
                            type: Boolean,
                            default: !1
                        },
                        disable: {
                            type: Boolean,
                            default: !1
                        },
                        activeColor: {
                            type: String,
                            default: ""
                        },
                        inactiveColor: {
                            type: String,
                            default: ""
                        }
                    },
                    data: function() {
                        return {
                            width: "",
                            height: "",
                            scale: 1,
                            ballSize: "",
                            noBorder: !1,
                            normalImg: "https://img.dmallcdn.com/dshop/202102/97602f4a-4909-48e5-9eff-40cf37fd2c13",
                            onImg: "https://img.dmallcdn.com/dshop/202102/d4b3dfc7-7827-4be5-813c-8337cb64dfb9",
                            disableImg: "https://img.dmallcdn.com/dshop/202102/ceb918a1-7b76-4592-b0d4-c151002f1eb5"
                        }
                    },
                    computed: {
                        wrapperStyle: function() {
                            return this.styleParse({
                                transform: "scale(".concat(this.scale > 1.3 ? 1.3 : this.scale, ")"),
                                background: this.disable ? "" : this.value ? this.activeColor : this.inactiveColor,
                                border: this.disable ? "" : this.noBorder ? "none" : "",
                                borderColor: this.value ? this.activeColor : ""
                            })
                        },
                        ballStyle: function() {
                            return this.styleParse({
                                border: this.disable ? "" : this.noBorder ? "none" : ""
                            })
                        }
                    },
                    created: function() {
                        this.checkAttr(this.$attrs), void 0 !== this.$attrs.noBorder && (this.noBorder = !0)
                    },
                    methods: {
                        checkAttr: function(t) {
                            for (var e in t) void 0 !== t[e] && (this[e] = t[e])
                        },
                        changeHandler: function(t) {
                            this.disable ? this.$emit("tapDisable", t) : this.$emit("input", !this.value)
                        }
                    }
                }
            },
            f11fc: function(t, e, n) {
                var o = n("a7a4");
                n.n(o).a
            },
            fcad: function(t, e, n) {
                n.d(e, "b", (function() {
                    return o
                })), n.d(e, "c", (function() {
                    return i
                })), n.d(e, "a", (function() {}));
                var o = function() {
                        this.$createElement;
                        this._self._c
                    },
                    i = []
            }
        }
    ]), (global.webpackJsonp = global.webpackJsonp || []).push(["node-modules/@dmall/jimoui-mp/components/Switch/Switch-create-component", {
            "node-modules/@dmall/jimoui-mp/components/Switch/Switch-create-component": function(t, e, n) {
                n("543d").createComponent(n("08d0"))
            }
        },
        [
            ["node-modules/@dmall/jimoui-mp/components/Switch/Switch-create-component"]
        ]
    ]);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'node-modules/@dmall/jimoui-mp/components/Switch/Switch.js'
});
require("node-modules/@dmall/jimoui-mp/components/Switch/Switch.js");