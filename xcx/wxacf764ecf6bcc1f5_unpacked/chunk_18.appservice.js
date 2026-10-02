$gwx_XC_10 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_10 || [];

        function gz$gwx_XC_10_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_10_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_10_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_10 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_10 = true;
        var x = ['./node-modules/@dmall/jimoui-mp/components/Image/Image.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_10_1()
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
                g = "$gwx_XC_10";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_10();
if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/@dmall/jimoui-mp/components/Image/Image.wxml'] = [$gwx_XC_10, './node-modules/@dmall/jimoui-mp/components/Image/Image.wxml'];
else __wxAppCode__['node-modules/@dmall/jimoui-mp/components/Image/Image.wxml'] = $gwx_XC_10('./node-modules/@dmall/jimoui-mp/components/Image/Image.wxml');;
__wxRoute = "node-modules/@dmall/jimoui-mp/components/Image/Image";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "node-modules/@dmall/jimoui-mp/components/Image/Image.js";
define("node-modules/@dmall/jimoui-mp/components/Image/Image.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../../../../@babel/runtime/helpers/typeof");
    (global.webpackJsonp = global.webpackJsonp || []).push([
        ["node-modules/@dmall/jimoui-mp/components/Image/Image"], {
            "44b7": function(e, t, n) {
                n.r(t);
                var r = n("488f"),
                    o = n.n(r);
                for (var i in r)["default"].indexOf(i) < 0 && function(e) {
                    n.d(t, e, (function() {
                        return r[e]
                    }))
                }(i);
                t.default = o.a
            },
            "488f": function(t, n, r) {
                (function(t) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }), n.default = void 0;
                    var o = u(r("a34a")),
                        i = u(r("bd49"));

                    function u(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }

                    function a(t) {
                        return (a = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
                            return e(t)
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t)
                        })(t)
                    }

                    function c(e, t, n, r, o, i, u) {
                        try {
                            var a = e[i](u),
                                c = a.value
                        } catch (e) {
                            return void n(e)
                        }
                        a.done ? t(c) : Promise.resolve(c).then(r, o)
                    }

                    function l(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), n.push.apply(n, r)
                        }
                        return n
                    }

                    function f(e, t, n) {
                        return (t = function(e) {
                            var t = function(e, t) {
                                if ("object" != a(e) || !e) return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var r = n.call(e, t || "default");
                                    if ("object" != a(r)) return r;
                                    throw new TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == a(t) ? t : t + ""
                        }(t)) in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n, e
                    }
                    n.default = {
                        name: "Image",
                        externalClasses: ["class"],
                        mixins: [i.default],
                        props: {
                            index: {
                                type: Number
                            },
                            src: {
                                type: String,
                                default: ""
                            },
                            mode: {
                                type: String,
                                default: "scaleToFill"
                            },
                            imageStyle: {
                                type: Object,
                                default: function() {
                                    return {}
                                }
                            },
                            showMenuByLongpress: {
                                type: Boolean,
                                default: !1
                            },
                            lazyLoad: {
                                type: Boolean,
                                default: !0
                            }
                        },
                        data: function() {
                            return {
                                isLoad: !1
                            }
                        },
                        computed: {
                            style: function() {
                                var e = JSON.parse(JSON.stringify(this.imageStyle));
                                return this.styleParse(function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? l(Object(n), !0).forEach((function(t) {
                                            f(e, t, n[t])
                                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                        }))
                                    }
                                    return e
                                }({}, e))
                            }
                        },
                        mounted: function() {
                            this.rect = {
                                width: 0,
                                height: 0
                            }
                        },
                        methods: {
                            loadHandler: function(e) {
                                var t = this;
                                return function(e) {
                                    return function() {
                                        var t = this,
                                            n = arguments;
                                        return new Promise((function(r, o) {
                                            var i = e.apply(t, n);

                                            function u(e) {
                                                c(i, r, o, u, a, "next", e)
                                            }

                                            function a(e) {
                                                c(i, r, o, u, a, "throw", e)
                                            }
                                            u(void 0)
                                        }))
                                    }
                                }(o.default.mark((function n() {
                                    return o.default.wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                t.$emit("onLoad", e);
                                            case 1:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                })))()
                            },
                            getImageRect: function() {
                                var e = this;
                                return new Promise((function(n) {
                                    var r = t.createSelectorQuery().in(e);
                                    r.select(".__loader").boundingClientRect(), r.exec((function() {
                                        for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                                        var i = t[0][0];
                                        i && (n({
                                            width: i.width,
                                            height: i.height,
                                            top: i.top,
                                            bottom: i.bottom,
                                            left: i.left,
                                            right: i.right
                                        }), r = null)
                                    }))
                                }))
                            },
                            clickHandler: function(e) {
                                this.$emit("click", e)
                            }
                        }
                    }
                }).call(this, r("543d").default)
            },
            5335: function(e, t, n) {
                var r = n("b4dc");
                n.n(r).a
            },
            b4dc: function(e, t, n) {},
            b69a: function(e, t, n) {
                n.r(t);
                var r = n("d80a3"),
                    o = n("44b7");
                for (var i in o)["default"].indexOf(i) < 0 && function(e) {
                    n.d(t, e, (function() {
                        return o[e]
                    }))
                }(i);
                n("5335");
                var u = n("f0c5"),
                    a = Object(u.a)(o.default, r.b, r.c, !1, null, "b25b3ebe", null, !1, r.a, void 0);
                t.default = a.exports
            },
            d80a3: function(e, t, n) {
                n.d(t, "b", (function() {
                    return r
                })), n.d(t, "c", (function() {
                    return o
                })), n.d(t, "a", (function() {}));
                var r = function() {
                        this.$createElement;
                        this._self._c
                    },
                    o = []
            }
        }
    ]), (global.webpackJsonp = global.webpackJsonp || []).push(["node-modules/@dmall/jimoui-mp/components/Image/Image-create-component", {
            "node-modules/@dmall/jimoui-mp/components/Image/Image-create-component": function(e, t, n) {
                n("543d").createComponent(n("b69a"))
            }
        },
        [
            ["node-modules/@dmall/jimoui-mp/components/Image/Image-create-component"]
        ]
    ]);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'node-modules/@dmall/jimoui-mp/components/Image/Image.js'
});
require("node-modules/@dmall/jimoui-mp/components/Image/Image.js");