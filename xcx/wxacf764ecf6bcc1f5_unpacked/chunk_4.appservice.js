$gwx_XC_34 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_34 || [];

        function gz$gwx_XC_34_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_34_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_34_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_34_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_34_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_34_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_34 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_34 = true;
        var x = ['./node-modules/@dmall/jimoui-mp/components/Avator/Avator.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_34_1()
            var t5R = _n('slot')
            _(r, t5R)
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
                g = "$gwx_XC_34";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_34();
if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/@dmall/jimoui-mp/components/Avator/Avator.wxml'] = [$gwx_XC_34, './node-modules/@dmall/jimoui-mp/components/Avator/Avator.wxml'];
else __wxAppCode__['node-modules/@dmall/jimoui-mp/components/Avator/Avator.wxml'] = $gwx_XC_34('./node-modules/@dmall/jimoui-mp/components/Avator/Avator.wxml');;
__wxRoute = "node-modules/@dmall/jimoui-mp/components/Avator/Avator";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "node-modules/@dmall/jimoui-mp/components/Avator/Avator.js";
define("node-modules/@dmall/jimoui-mp/components/Avator/Avator.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t = require("../../../../../@babel/runtime/helpers/typeof");
    (global.webpackJsonp = global.webpackJsonp || []).push([
        ["node-modules/@dmall/jimoui-mp/components/Avator/Avator"], {
            "1ea9": function(t, e, n) {
                n.r(e);
                var r = n("4ec8"),
                    o = n("dd64");
                for (var i in o)["default"].indexOf(i) < 0 && function(t) {
                    n.d(e, t, (function() {
                        return o[t]
                    }))
                }(i);
                n("54f6");
                var c = n("f0c5"),
                    u = Object(c.a)(o.default, r.b, r.c, !1, null, "e5239f9e", null, !1, r.a, void 0);
                e.default = u.exports
            },
            "4ec8": function(t, e, n) {
                n.d(e, "b", (function() {
                    return r
                })), n.d(e, "c", (function() {
                    return o
                })), n.d(e, "a", (function() {}));
                var r = function() {
                        this.$createElement;
                        this._self._c
                    },
                    o = []
            },
            "54f6": function(t, e, n) {
                var r = n("dd20");
                n.n(r).a
            },
            c424: function(e, n, r) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.default = void 0;
                var o = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(r("bd49"));

                function i(e) {
                    return (i = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                        return t(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                    })(e)
                }

                function c(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function u(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? c(Object(n), !0).forEach((function(e) {
                            a(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }

                function a(t, e, n) {
                    return (e = function(t) {
                        var e = function(t, e) {
                            if ("object" != i(t) || !t) return t;
                            var n = t[Symbol.toPrimitive];
                            if (void 0 !== n) {
                                var r = n.call(t, e || "default");
                                if ("object" != i(r)) return r;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === e ? String : Number)(t)
                        }(t, "string");
                        return "symbol" == i(e) ? e : e + ""
                    }(e)) in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                }
                n.default = {
                    name: "Avator",
                    mixins: [o.default],
                    props: {
                        src: {
                            type: String,
                            default: ""
                        },
                        size: {
                            type: [Number, String],
                            default: 112
                        },
                        styles: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        defaultImage: {
                            type: String,
                            default: "https://img.dmallcdn.com/dshop/202011/c1ea605d-6697-4522-b599-8effdc412964"
                        }
                    },
                    computed: {
                        customImgStyle: function() {
                            return this.styleParse({
                                width: "".concat(this.size, "rpx"),
                                height: "".concat(this.size, "rpx")
                            })
                        },
                        customStyle: function() {
                            return this.styleParse(u(u({}, this.styles), {}, {
                                width: "".concat(this.size, "rpx"),
                                height: "".concat(this.size, "rpx")
                            }))
                        },
                        customImageSrc: function() {
                            return this.src || this.defaultImage
                        }
                    }
                }
            },
            dd20: function(t, e, n) {},
            dd64: function(t, e, n) {
                n.r(e);
                var r = n("c424"),
                    o = n.n(r);
                for (var i in r)["default"].indexOf(i) < 0 && function(t) {
                    n.d(e, t, (function() {
                        return r[t]
                    }))
                }(i);
                e.default = o.a
            }
        }
    ]), (global.webpackJsonp = global.webpackJsonp || []).push(["node-modules/@dmall/jimoui-mp/components/Avator/Avator-create-component", {
            "node-modules/@dmall/jimoui-mp/components/Avator/Avator-create-component": function(t, e, n) {
                n("543d").createComponent(n("1ea9"))
            }
        },
        [
            ["node-modules/@dmall/jimoui-mp/components/Avator/Avator-create-component"]
        ]
    ]);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'node-modules/@dmall/jimoui-mp/components/Avator/Avator.js'
});
require("node-modules/@dmall/jimoui-mp/components/Avator/Avator.js");