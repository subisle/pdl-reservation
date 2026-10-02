$gwx15_XC_31 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx15_XC_31 || [];

        function gz$gwx15_XC_31_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx15_XC_31_1) return __WXML_GLOBAL__.ops_cached.$gwx15_XC_31_1
            __WXML_GLOBAL__.ops_cached.$gwx15_XC_31_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
            })(__WXML_GLOBAL__.ops_cached.$gwx15_XC_31_1);
            return __WXML_GLOBAL__.ops_cached.$gwx15_XC_31_1
        }

        function gz$gwx15_XC_31_2() {
            if (__WXML_GLOBAL__.ops_cached.$gwx15_XC_31_2) return __WXML_GLOBAL__.ops_cached.$gwx15_XC_31_2
            __WXML_GLOBAL__.ops_cached.$gwx15_XC_31_2 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'show']
                ])
                Z([3, '__e'])
                Z([3, 'coupon-pop data-v-52641456'])
                Z([
                    [4],
                    [
                        [5],
                        [
                            [4],
                            [
                                [5],
                                [
                                    [5],
                                    [1, 'touchmove']
                                ],
                                [
                                    [4],
                                    [
                                        [5],
                                        [
                                            [4],
                                            [
                                                [5],
                                                [
                                                    [5],
                                                    [1, '']
                                                ],
                                                [
                                                    [4],
                                                    [
                                                        [5],
                                                        [1, '$event']
                                                    ]
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ])
                Z([3, 'content data-v-52641456'])
                Z([3, '__l'])
                Z([3, 'data-v-52641456'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'currentCoupon']
                    ],
                    [3, 'couponBarCode']
                ])
                Z([3, '3fa6f84e-1'])
                Z([3, '100%'])
                Z([
                    [7],
                    [3, 'isShowPayBtn']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx15_XC_31_2);
            return __WXML_GLOBAL__.ops_cached.$gwx15_XC_31_2
        }
        __WXML_GLOBAL__.ops_set.$gwx15_XC_31 = z;
        __WXML_GLOBAL__.ops_init.$gwx15_XC_31 = true;
        var x = ['./packageAssets/coupon/components/barCode/DBarcode.wxml', './packageAssets/coupon/components/popupNew.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx15_XC_31_1()
            return r
        }
        e_[x[0]] = {
            f: m0,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        d_[x[1]] = {}
        var m1 = function(e, s, r, gg) {
            var z = gz$gwx15_XC_31_2()
            var tIS = _v()
            _(r, tIS)
            if (_oz(z, 0, e, s, gg)) {
                tIS.wxVkey = 1
                var eJS = _mz(z, 'view', ['catchtouchmove', 1, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
                var bKS = _n('view')
                _rz(z, bKS, 'class', 4, e, s, gg)
                var xMS = _mz(z, 'd-barcode', ['bind:__l', 5, 'class', 1, 'val', 2, 'vueId', 3, 'width', 4], [], e, s, gg)
                _(bKS, xMS)
                var oLS = _v()
                _(bKS, oLS)
                if (_oz(z, 10, e, s, gg)) {
                    oLS.wxVkey = 1
                }
                oLS.wxXCkey = 1
                _(eJS, bKS)
                _(tIS, eJS)
            }
            tIS.wxXCkey = 1
            tIS.wxXCkey = 3
            return r
        }
        e_[x[1]] = {
            f: m1,
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
                g = "$gwx15_XC_31";
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
if (__vd_version_info__.delayedGwx || false) $gwx15_XC_31();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packageAssets/coupon/components/barCode/DBarcode.wxml'] = [$gwx15_XC_31, './packageAssets/coupon/components/barCode/DBarcode.wxml'];
else __wxAppCode__['packageAssets/coupon/components/barCode/DBarcode.wxml'] = $gwx15_XC_31('./packageAssets/coupon/components/barCode/DBarcode.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['packageAssets/coupon/components/popupNew.wxml'] = [$gwx15_XC_31, './packageAssets/coupon/components/popupNew.wxml'];
else __wxAppCode__['packageAssets/coupon/components/popupNew.wxml'] = $gwx15_XC_31('./packageAssets/coupon/components/popupNew.wxml');;
__wxRoute = "packageAssets/coupon/components/barCode/DBarcode";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packageAssets/coupon/components/barCode/DBarcode.js";
define("packageAssets/coupon/components/barCode/DBarcode.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t = require("../../../../@babel/runtime/helpers/typeof");
    require("../../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
        ["packageAssets/coupon/components/barCode/DBarcode"], {
            "0361": function(t, e, n) {
                n.d(e, "b", (function() {
                    return o
                })), n.d(e, "c", (function() {
                    return r
                })), n.d(e, "a", (function() {}));
                var o = function() {
                        this.$createElement;
                        this._self._c
                    },
                    r = []
            },
            "0a07": function(t, e, n) {
                var o = n("b9b3");
                n.n(o).a
            },
            "203b": function(e, n, o) {
                (function(e) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }), n.default = void 0;
                    var r = function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }(o("d329"));

                    function i(e) {
                        return (i = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                            return t(e)
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                        })(e)
                    }

                    function a(t, e) {
                        var n = Object.keys(t);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(t);
                            e && (o = o.filter((function(e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }))), n.push.apply(n, o)
                        }
                        return n
                    }

                    function u(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? a(Object(n), !0).forEach((function(e) {
                                c(t, e, n[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                            }))
                        }
                        return t
                    }

                    function c(t, e, n) {
                        return (e = function(t) {
                            var e = function(t, e) {
                                if ("object" != i(t) || !t) return t;
                                var n = t[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var o = n.call(t, e || "default");
                                    if ("object" != i(o)) return o;
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
                    var s = {
                        width: 2,
                        height: 72,
                        displayValue: !0,
                        textAlign: "center",
                        textPosition: "bottom",
                        textMargin: 0,
                        fontSize: 24,
                        fontColor: "#000000",
                        lineColor: "#000000",
                        background: "#FFFFFF",
                        margin: 0,
                        marginTop: void 0,
                        marginBottom: void 0,
                        marginLeft: void 0,
                        marginRight: void 0
                    };
                    n.default = {
                        name: "TkiBarcode",
                        props: {
                            show: {
                                type: Boolean,
                                default: !0
                            },
                            cid: {
                                type: String,
                                default: "tki-barcode-canvas"
                            },
                            val: {
                                type: String,
                                default: ""
                            },
                            format: {
                                type: String,
                                default: "CODE128"
                            },
                            options: {
                                type: Object,
                                default: function() {
                                    return {}
                                }
                            },
                            onval: {
                                type: Boolean,
                                default: !0
                            },
                            loadMake: {
                                type: Boolean,
                                default: !0
                            },
                            width: {
                                type: String,
                                default: "540rpx"
                            },
                            height: {
                                type: String,
                                default: "144rpx"
                            }
                        },
                        data: function() {
                            return {
                                result: "",
                                canvasWidth: 0,
                                canvasHeight: 0,
                                defaultOptions: u({}, s)
                            }
                        },
                        onUnload: function() {},
                        watch: {
                            val: function(t, e) {
                                var n = this;
                                this.onval && t != e && setTimeout((function() {
                                    n._makeCode()
                                }), 0)
                            },
                            options: {
                                handler: function(t, e) {
                                    var n = this;
                                    this.onval && (this._empty(t) || setTimeout((function() {
                                        n._makeCode()
                                    }), 0))
                                },
                                deep: !0
                            }
                        },
                        mounted: function() {
                            var t = this;
                            this.loadMake && (this._empty(this.val) || setTimeout((function() {
                                t._makeCode()
                            }), 0))
                        },
                        methods: {
                            _makeCode: function() {
                                var t = this;
                                Object.assign(this.defaultOptions, this.options), t._empty(t.defaultOptions.text) && (t.defaultOptions.text = t.val), t._empty(t.defaultOptions.format) && (t.defaultOptions.format = t.format), new r.default(t, t.cid, t.defaultOptions, (function(e) {
                                    t.canvasWidth = e.width, t.canvasHeight = e.height
                                }), (function(e) {
                                    t._result(e), t.defaultOptions = s
                                }))
                            },
                            _clearCode: function() {
                                this._result("")
                            },
                            _saveCode: function() {
                                "" != this.result && e.saveImageToPhotosAlbum({
                                    filePath: this.result,
                                    success: function() {
                                        e.showToast({
                                            title: "条形码保存成功",
                                            icon: "success",
                                            duration: 2e3
                                        })
                                    }
                                })
                            },
                            _result: function(t) {
                                this.result = t, this.$emit("result", t)
                            },
                            _empty: function(t) {
                                var e = i(t),
                                    n = !1;
                                return "number" == e && "" == String(t) || "undefined" == e ? n = !0 : "object" == e ? "{}" != JSON.stringify(t) && "[]" != JSON.stringify(t) && null != t || (n = !0) : "string" == e ? "" != t && "undefined" != t && "null" != t && "{}" != t && "[]" != t || (n = !0) : "function" == e && (n = !1), n
                            }
                        }
                    }
                }).call(this, o("543d").default)
            },
            3556: function(t, e, n) {
                n.r(e);
                var o = n("0361"),
                    r = n("d767");
                for (var i in r)["default"].indexOf(i) < 0 && function(t) {
                    n.d(e, t, (function() {
                        return r[t]
                    }))
                }(i);
                n("0a07");
                var a = n("f0c5"),
                    u = Object(a.a)(r.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
                e.default = u.exports
            },
            b9b3: function(t, e, n) {},
            d767: function(t, e, n) {
                n.r(e);
                var o = n("203b"),
                    r = n.n(o);
                for (var i in o)["default"].indexOf(i) < 0 && function(t) {
                    n.d(e, t, (function() {
                        return o[t]
                    }))
                }(i);
                e.default = r.a
            }
        }
    ]), (global.webpackJsonp = global.webpackJsonp || []).push(["packageAssets/coupon/components/barCode/DBarcode-create-component", {
            "packageAssets/coupon/components/barCode/DBarcode-create-component": function(t, e, n) {
                n("543d").createComponent(n("3556"))
            }
        },
        [
            ["packageAssets/coupon/components/barCode/DBarcode-create-component"]
        ]
    ]);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'packageAssets/coupon/components/barCode/DBarcode.js'
});
require("packageAssets/coupon/components/barCode/DBarcode.js");;
__wxRoute = "packageAssets/coupon/components/popupNew";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packageAssets/coupon/components/popupNew.js";
define("packageAssets/coupon/components/popupNew.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
        ["packageAssets/coupon/components/popupNew"], {
            "2ae1": function(e, n, t) {
                t.r(n);
                var o = t("8730"),
                    a = t.n(o);
                for (var c in o)["default"].indexOf(c) < 0 && function(e) {
                    t.d(n, e, (function() {
                        return o[e]
                    }))
                }(c);
                n.default = a.a
            },
            "603e": function(e, n, t) {},
            "6cd1b": function(e, n, t) {
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
            },
            8730: function(e, n, t) {
                (function(e) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }), n.default = void 0;
                    var o = c(t("a34a")),
                        a = c(t("0470"));

                    function c(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }

                    function u(e, n, t, o, a, c, u) {
                        try {
                            var r = e[c](u),
                                s = r.value
                        } catch (e) {
                            return void t(e)
                        }
                        r.done ? n(s) : Promise.resolve(s).then(o, a)
                    }

                    function r(e) {
                        return function() {
                            var n = this,
                                t = arguments;
                            return new Promise((function(o, a) {
                                var c = e.apply(n, t);

                                function r(e) {
                                    u(c, o, a, r, s, "next", e)
                                }

                                function s(e) {
                                    u(c, o, a, r, s, "throw", e)
                                }
                                r(void 0)
                            }))
                        }
                    }
                    var s = getApp().globalData,
                        i = s.$dmall.dmallApi;
                    n.default = {
                        name: "HPopup",
                        components: {
                            DBarcode: function() {
                                Promise.all([t.e("packageAssets/common/vendor"), t.e("packageAssets/coupon/components/barCode/DBarcode")]).then(function() {
                                    return resolve(t("3556"))
                                }.bind(null, t)).catch(t.oe)
                            }
                        },
                        props: {
                            show: {
                                type: Boolean,
                                default: !1
                            },
                            currentCoupon: {
                                type: Object
                            }
                        },
                        data: function() {
                            return {
                                wxPay: null,
                                theme: i.getTheme()
                            }
                        },
                        computed: {
                            isShowPayBtn: function() {
                                return s.$systemConfig.myCouponPageConfig.toUseConfig.pay.showWechatPay
                            }
                        },
                        mounted: function() {},
                        methods: {
                            close: function() {
                                this.$emit("close")
                            },
                            getWxPayData: function() {
                                var e = this;
                                return r(o.default.mark((function n() {
                                    var t;
                                    return o.default.wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return n.next = 2, a.default.readyWxPay({
                                                    tenantId: 3
                                                });
                                            case 2:
                                                t = n.sent, e.wxPay = t;
                                            case 4:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                })))()
                            },
                            openPay: function() {
                                var n = this;
                                return r(o.default.mark((function t() {
                                    var a;
                                    return o.default.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2, n.getWxPayData();
                                            case 2:
                                                a = n.wxPay, Object.assign(a, {
                                                    success: function(e) {
                                                        console.log(e, "唤起成功")
                                                    },
                                                    fail: function(e) {
                                                        i.showToast({
                                                            title: "唤起微信支付失败"
                                                        }), console.log("唤起失败"), console.log(JSON.stringify(e))
                                                    }
                                                }), console.log(a), e.openOfflinePayView(a);
                                            case 6:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))()
                            }
                        }
                    }
                }).call(this, t("543d").default)
            },
            "8d57": function(e, n, t) {
                var o = t("603e");
                t.n(o).a
            },
            c94c: function(e, n, t) {
                t.r(n);
                var o = t("6cd1b"),
                    a = t("2ae1");
                for (var c in a)["default"].indexOf(c) < 0 && function(e) {
                    t.d(n, e, (function() {
                        return a[e]
                    }))
                }(c);
                t("8d57");
                var u = t("f0c5"),
                    r = Object(u.a)(a.default, o.b, o.c, !1, null, "52641456", null, !1, o.a, void 0);
                n.default = r.exports
            }
        }
    ]), (global.webpackJsonp = global.webpackJsonp || []).push(["packageAssets/coupon/components/popupNew-create-component", {
            "packageAssets/coupon/components/popupNew-create-component": function(e, n, t) {
                t("543d").createComponent(t("c94c"))
            }
        },
        [
            ["packageAssets/coupon/components/popupNew-create-component"]
        ]
    ]);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'packageAssets/coupon/components/popupNew.js'
});
require("packageAssets/coupon/components/popupNew.js");