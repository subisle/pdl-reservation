/*v0.5vv_20211229_syb_scopedata*/
global.__wcc_version__ = 'v0.5vv_20211229_syb_scopedata';
global.__wcc_version_info__ = {
    "customComponents": true,
    "fixZeroRpx": true,
    "propValueDeepCopy": false
};
var $gwxc
var $gaic = {}
$gwx3 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function(path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {};
            else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        if (typeof $gwx === 'function') $gwx('init', global);
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
        var z = __WXML_GLOBAL__.ops_set.$gwx3 || [];
        __WXML_GLOBAL__.ops_set.$gwx3 = z;
        __WXML_GLOBAL__.ops_init.$gwx3 = true;
        var nv_require = function() {
            var nnm = {};
            var nom = {};
            return function(n) {
                if (n[0] === 'p' && n[1] === '_' && f_[n.slice(2)]) return f_[n.slice(2)];
                return function() {
                    if (!nnm[n]) return undefined;
                    try {
                        if (!nom[n]) nom[n] = nnm[n]();
                        return nom[n];
                    } catch (e) {
                        e.message = e.message.replace(/nv_/g, '');
                        var tmp = e.stack.substring(0, e.stack.lastIndexOf(n));
                        e.stack = tmp.substring(0, tmp.lastIndexOf('\n'));
                        e.stack = e.stack.replace(/\snv_/g, ' ');
                        e.stack = $gstack(e.stack);
                        e.stack += '\n    at ' + n.substring(2);
                        console.error(e);
                    }
                }
            }
        }()
        var x = [];
        if (path && e_[path]) {
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx3";
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
if (__vd_version_info__.delayedGwx || true) $gwx3();;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("packageWare/common/vendor.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../@babel/runtime/helpers/typeof");
    (global.webpackJsonp = global.webpackJsonp || []).push([
        ["packageWare/common/vendor"], {
            "1a13": function(t, r, a) {
                function n(t) {
                    return (n = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
                        return e(t)
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t)
                    })(t)
                }

                function o(e) {
                    return function(e) {
                        if (Array.isArray(e)) return i(e)
                    }(e) || function(e) {
                        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                    }(e) || function(e, t) {
                        if (e) {
                            if ("string" == typeof e) return i(e, t);
                            var r = {}.toString.call(e).slice(8, -1);
                            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? i(e, t) : void 0
                        }
                    }(e) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function i(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = Array(t); r < t; r++) a[r] = e[r];
                    return a
                }

                function c(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), r.push.apply(r, a)
                    }
                    return r
                }

                function u(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? c(Object(r), !0).forEach((function(t) {
                            s(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }

                function s(e, t, r) {
                    return (t = function(e) {
                        var t = function(e, t) {
                            if ("object" != n(e) || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                                var a = r.call(e, t || "default");
                                if ("object" != n(a)) return a;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === t ? String : Number)(e)
                        }(e, "string");
                        return "symbol" == n(t) ? t : t + ""
                    }(t)) in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r, e
                }
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r.default = void 0;
                var d = getApp().globalData.$dmall.dmallApi;
                r.default = {
                    installComboDetailData: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.globalObject || {},
                            r = [],
                            a = [],
                            n = {},
                            i = {},
                            c = [],
                            s = e.floorModuleResponseList || [];
                        return s.forEach((function(e) {
                            (e.data || []).forEach((function(e) {
                                switch (e.subFloorName) {
                                    case "warebase":
                                        var a = e.data.adWords,
                                            n = void 0 === a ? [] : a;
                                        if (n && n.length) {
                                            var i = n.filter((function(e) {
                                                return 2 === e.type
                                            }));
                                            e.data.adWords = i.length ? i[0] : n[0]
                                        }
                                        t = u(u({}, t), e.data);
                                        break;
                                    case "waresap_set_meal":
                                        e.data.setMealGroupVoList = e.data.setMealGroupVoList.map((function(e) {
                                            var t = (e.setMealWareVoListV2 || e.setMealWareVoList || []).map((function(e) {
                                                var t = e.skuInfo,
                                                    r = e.aggInfo,
                                                    a = e.skuId;
                                                if (t) return u(u({}, t), {}, {
                                                    formatAddPrice: d.formatPrice(t.addPrice),
                                                    formatLinePrice: d.formatPrice(t.linePrice),
                                                    isAggWare: !1
                                                });
                                                if (r) {
                                                    var n = r.aggSkuSpecInfo.skus.find((function(e) {
                                                        return e.selected
                                                    })) || {};
                                                    return u(u(u({}, r), n), {}, {
                                                        isAggWare: !0
                                                    })
                                                }
                                                return a ? u(u({}, e), {}, {
                                                    formatAddPrice: d.formatPrice(e.addPrice),
                                                    formatLinePrice: d.formatPrice(e.linePrice),
                                                    isAggWare: !1
                                                }) : e
                                            }));
                                            return e.setMealWareVoList = t, e
                                        })), (e.data.setMealGroupVoList || []).forEach((function(e) {
                                            var t = e.setMealWareVoList.filter((function(e) {
                                                    return 1 === e.wareStatus
                                                })),
                                                r = e.setMealWareVoList.filter((function(e) {
                                                    return 1 !== e.wareStatus
                                                }));
                                            t.length > 1 && (e.setMealWareVoList = [].concat(o(r), o(t.slice(0, 1))), e.selloutArr = t.slice(1))
                                        })), r = e.data.setMealGroupVoList || [];
                                        break;
                                    case "promotion":
                                        t.comboPromoTagList = e.data.promoTagList || [], t.comboPromoInfo = e.data.promotionWareVO || {}, t.comboCouponInfo = e.data.couponInfoVO || {};
                                        break;
                                    case "graphic":
                                        e.data && c.push(e.data)
                                }
                            }))
                        })), {
                            comboMainData: t,
                            comboSubList: r,
                            comboPromoTagList: a,
                            comboPromoInfo: n,
                            comboCouponInfo: i,
                            comboGraphicList: c,
                            comboFloorList: s
                        }
                    }
                }
            },
            3082: function(e, t, r) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0, t.default = {
                    getRefSource: function() {
                        var e = getCurrentPages(),
                            t = e[e.length - 2] ? e[e.length - 2].route : "",
                            r = "";
                        switch (!0) {
                            case t.indexOf("homepage") > -1:
                                r = 1;
                                break;
                            case t.indexOf("category") > -1:
                                r = 2;
                                break;
                            case t.indexOf("wareDetail") > -1:
                                r = 4;
                                break;
                            case t.indexOf("search") > -1:
                            case t.indexOf("dshop") > -1 || t.indexOf("webview") > -1:
                                r = 5;
                                break;
                            case t.indexOf("living") > -1:
                                r = 36;
                                break;
                            default:
                                r = 0
                        }
                        return r
                    },
                    getRefSubSource: function() {
                        var e = getCurrentPages(),
                            t = e[e.length - 2] ? e[e.length - 2].route : "",
                            r = "";
                        switch (!0) {
                            case t.indexOf("homepage") > -1:
                            case t.indexOf("category") > -1:
                            case t.indexOf("wareDetail") > -1:
                            case t.indexOf("search") > -1:
                            case t.indexOf("dshop") > -1 || t.indexOf("webview") > -1:
                            default:
                                r = ""
                        }
                        return r
                    }
                }
            },
            7853: function(e, t, r) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var a = u(r("a34a")),
                    n = r("c2e9"),
                    o = u(r("6085")),
                    i = r("7836"),
                    c = r("1080");

                function u(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function s(e, t, r, a, n, o, i) {
                    try {
                        var c = e[o](i),
                            u = c.value
                    } catch (e) {
                        return void r(e)
                    }
                    c.done ? t(u) : Promise.resolve(u).then(a, n)
                }

                function d(e) {
                    return function() {
                        var t = this,
                            r = arguments;
                        return new Promise((function(a, n) {
                            var o = e.apply(t, r);

                            function i(e) {
                                s(o, a, n, i, c, "next", e)
                            }

                            function c(e) {
                                s(o, a, n, i, c, "throw", e)
                            }
                            i(void 0)
                        }))
                    }
                }
                var l = getApp().globalData,
                    f = l.$dmall,
                    p = f.router,
                    m = (f.dmallApi, f.pathMap);
                t.default = {
                    data: function() {
                        return {
                            suitGroupData: [],
                            pageParam: {},
                            showDialog: !1,
                            content: "",
                            theme: i.mytheme.getTheme()
                        }
                    },
                    onLoad: function(e) {
                        var t = this;
                        return d(a.default.mark((function r() {
                            var n, o, c, u;
                            return a.default.wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return t.pageParam = e, t.forceUpdate = !1, r.next = 4, i.storeInfoNew.getCurrentStore();
                                    case 4:
                                        if (n = r.sent, !t.forceUpdate && n) {
                                            r.next = 12;
                                            break
                                        }
                                        return r.next = 8, i.addressInfoNew.initAddress();
                                    case 8:
                                        return o = i.addressInfoNew.getCurrentAddress() || {}, c = o.longitude, u = o.latitude, r.next = 11, i.storeInfoNew.initStoreInfo({
                                            forceUpdate: t.forceUpdate,
                                            longitude: t.forceUpdate ? c : "",
                                            latitude: t.forceUpdate ? u : ""
                                        });
                                    case 11:
                                        t.forceUpdate = !1;
                                    case 12:
                                        t.getSuitGroupData();
                                    case 13:
                                    case "end":
                                        return r.stop()
                                }
                            }), r)
                        })))()
                    },
                    onShow: function() {
                        var e = this;
                        return d(a.default.mark((function t() {
                            return a.default.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, c.login.isLogin();
                                    case 2:
                                        e.isLogin = t.sent;
                                    case 3:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    methods: {
                        getSuitGroupData: function() {
                            var e = this;
                            return d(a.default.mark((function t() {
                                var r, n, i, c, u;
                                return a.default.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return r = e.pageParam.shipmentType, t.next = 3, o.default.getSuitGroupData({
                                                shipmentType: r,
                                                skuId: e.pageParam.skuId,
                                                erpStoreId: e.pageParam.erpStoreId,
                                                venderId: e.pageParam.venderId
                                            });
                                        case 3:
                                            n = t.sent, i = (null == n ? void 0 : n.data) || {}, c = i.suitGroupDetailList, (u = void 0 === c ? [] : c).forEach((function(e, t) {
                                                e.showDetail = 1 === u.length, (e.groupSuitSkuList || []).forEach((function(e) {
                                                    var t = [];
                                                    (e.suitWareList || []).forEach((function(r) {
                                                        r.sell && r.check && t.push(r.skuId), e.selectedList = t
                                                    }))
                                                }))
                                            })), e.suitGroupData = u;
                                        case 7:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        handleConfirm: function() {
                            this.addCartParam.detail.cartConfig = {
                                canReplaceCustomSuitFlag: 1
                            }, this.addCart(this.addCartParam), this.showDialog = !1
                        },
                        cartWareReplace: function(e, t) {
                            this.addCartParam = t, this.content = e, this.showDialog = !0
                        },
                        addCart: function(e) {
                            var t = this;
                            return d(a.default.mark((function r() {
                                var o, i, c, u, s, d, f, b, v;
                                return a.default.wrap((function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            if (t.isLogin) {
                                                r.next = 3;
                                                break
                                            }
                                            return p.navigateTo(m.login.path), r.abrupt("return");
                                        case 3:
                                            return r.next = 5, n.actionCart.doAddCart(e);
                                        case 5:
                                            o = r.sent, i = o.code, c = o.data, u = (void 0 === c ? [] : c)[0] || {}, s = u.code, d = u.result, f = u.sourceMsg, "0000" === i ? (t.$pageView.showToast({
                                                title: "加购成功"
                                            }), "bld" === l.currentScene && (b = m.bldCategorySub.path, (v = (getCurrentPages() || []).reverse().findIndex((function(e) {
                                                return e.route === b
                                            }))) > 0 ? p.navigateBack(v) : p.redirectTo("".concat(b, "?shipmentType=").concat(t.pageParam.shipmentType)))) : "CART201116" === s ? t.cartWareReplace(f, e) : t.$pageView.showToast({
                                                title: d || "加购失败"
                                            });
                                        case 9:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r)
                            })))()
                        }
                    }
                }
            },
            abaf: function(t, r, a) {
                function n(t) {
                    return (n = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
                        return e(t)
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t)
                    })(t)
                }
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r.default = void 0;
                var o = function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }(a("a34a")),
                    i = a("7836");

                function c(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        t && (a = a.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), r.push.apply(r, a)
                    }
                    return r
                }

                function u(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? c(Object(r), !0).forEach((function(t) {
                            s(e, t, r[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                        }))
                    }
                    return e
                }

                function s(e, t, r) {
                    return (t = function(e) {
                        var t = function(e, t) {
                            if ("object" != n(e) || !e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                                var a = r.call(e, t || "default");
                                if ("object" != n(a)) return a;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === t ? String : Number)(e)
                        }(e, "string");
                        return "symbol" == n(t) ? t : t + ""
                    }(t)) in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r, e
                }

                function d(e, t, r, a, n, o, i) {
                    try {
                        var c = e[o](i),
                            u = c.value
                    } catch (e) {
                        return void r(e)
                    }
                    c.done ? t(u) : Promise.resolve(u).then(a, n)
                }

                function l(e) {
                    return function() {
                        var t = this,
                            r = arguments;
                        return new Promise((function(a, n) {
                            var o = e.apply(t, r);

                            function i(e) {
                                d(o, a, n, i, c, "next", e)
                            }

                            function c(e) {
                                d(o, a, n, i, c, "throw", e)
                            }
                            i(void 0)
                        }))
                    }
                }
                var f = getApp().globalData,
                    p = f.$dmall,
                    m = p.dmallApi,
                    b = p.ajax,
                    v = p.EVT,
                    g = p.HOST,
                    h = {
                        getCmsTemplate: "".concat(g.cmsapi, "/app/web/activity"),
                        getRecFavorite: "".concat(g.rec, "/rec/app/home/favorite")
                    };
                r.default = {
                    url: function(e) {
                        return v + h[e] || ""
                    },
                    getCmsTemplate: function(e) {
                        return l(o.default.mark((function t() {
                            var r, a, n, c, u, s, d, l, p, v, g, h, y, I, w, P;
                            return o.default.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (e.tempId, e.currentPage, r = e.requestUrl, e.isPreview, a = e.longitude, n = e.latitude, c = e.pointWareExchangeId, u = e.userLevel, s = e.pageCode, d = e.specifiedStoreId, l = m.getStorageSync("userInfo") || {}, p = l.userId, v = void 0 === p ? "" : p, g = {}, "group" !== f.currentScene) {
                                            t.next = 9;
                                            break
                                        }
                                        if (f.currentGroupInfo) {
                                            t.next = 6;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 6:
                                        g = f.currentGroupInfo, t.next = 13;
                                        break;
                                    case 9:
                                        return t.next = 11, i.storeInfoNew.initStoreInfo();
                                    case 11:
                                        (g = t.sent) || "bld" !== f.currentScene || (g = f.mainSceneStoreInfo);
                                    case 13:
                                        return y = (h = g).venderId, I = h.storeId, w = "".concat(r.replace("{pageCode}", s).replace("{storeId}", I).replace("{venderId}", y)), P = {
                                            mainScene: f.mainScene || "",
                                            currentScene: f.currentScene || "",
                                            addressParam: i.addressInfoNew.getPCACodeAndName()
                                        }, a && n && (P = {
                                            mainScene: f.mainScene || "",
                                            currentScene: f.currentScene || "",
                                            longitude: a,
                                            latitude: n
                                        }), e.shipmentType && (P.shipmentType = e.shipmentType), d && (P.specifiedStoreId = d), c && (P.pointWareExchangeId = c), void 0 !== u && (P.userLevel = u), t.abrupt("return", new Promise((function(e) {
                                            b.request({
                                                url: w,
                                                header: {
                                                    userId: v,
                                                    version: "4.2.0"
                                                },
                                                method: "POST",
                                                data: P,
                                                callback: function(t) {
                                                    e(t)
                                                }
                                            })
                                        })));
                                    case 22:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    getRecFavorite: function(e, t) {
                        var r = this;
                        return l(o.default.mark((function a() {
                            var n, c, u, s, d, l, p;
                            return o.default.wrap((function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        return n = m.getStorageSync("userInfo") || {}, c = n.userId, u = void 0 === c ? "" : c, a.next = 3, i.storeInfoNew.initStoreInfo();
                                    case 3:
                                        return s = a.sent, d = s.storeId, l = s.venderId, p = s.businessType, a.abrupt("return", new Promise((function(a, n) {
                                            f.$dmall.ajax.request({
                                                url: r.url("getRecFavorite"),
                                                data: {
                                                    storeId: d,
                                                    venderId: l,
                                                    businessType: p,
                                                    userId: u,
                                                    limit: 20,
                                                    offset: t,
                                                    tabId: e,
                                                    layerType: 2
                                                },
                                                method: "POST",
                                                callback: function(e) {
                                                    "0000" === e.code ? a(e) : n(e)
                                                }
                                            })
                                        })));
                                    case 8:
                                    case "end":
                                        return a.stop()
                                }
                            }), a)
                        })))()
                    },
                    getCmsAsync: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = t.layoutIds,
                            a = t.tempId,
                            n = m.getStorageSync("userInfo") || {},
                            o = n.userId,
                            c = void 0 === o ? "" : o,
                            s = n.levelInfoVO,
                            d = {
                                hideLoader: !0,
                                mainScene: f.mainScene || "",
                                currentScene: f.currentScene || "",
                                wareClassifyTabId: t.wareClassifyTabId,
                                userLevel: (null == s ? void 0 : s.level) || "",
                                addressParam: i.addressInfoNew.getPCACodeAndName()
                            };
                        return t.shipmentType && (d.shipmentType = t.shipmentType), t.specifiedStoreId && (d.specifiedStoreId = t.specifiedStoreId), new Promise((function(t, n) {
                            b.request({
                                url: e,
                                data: u({
                                    pageId: a,
                                    layoutIds: r
                                }, d),
                                method: "POST",
                                header: {
                                    version: "4.7.0",
                                    userId: c
                                },
                                callback: function(e) {
                                    "0000" === e.code && e.data ? t(e.data) : n("获取cms配置异常")
                                }
                            })
                        }))
                    }
                }
            },
            e948: function(e, t, r) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var a = function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }(r("a34a")),
                    n = r("7836");

                function o(e, t) {
                    var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (!r) {
                        if (Array.isArray(e) || (r = i(e)) || t && e && "number" == typeof e.length) {
                            r && (e = r);
                            var a = 0,
                                n = function() {};
                            return {
                                s: n,
                                n: function() {
                                    return a >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[a++]
                                    }
                                },
                                e: function(e) {
                                    throw e
                                },
                                f: n
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var o, c = !0,
                        u = !1;
                    return {
                        s: function() {
                            r = r.call(e)
                        },
                        n: function() {
                            var e = r.next();
                            return c = e.done, e
                        },
                        e: function(e) {
                            u = !0, o = e
                        },
                        f: function() {
                            try {
                                c || null == r.return || r.return()
                            } finally {
                                if (u) throw o
                            }
                        }
                    }
                }

                function i(e, t) {
                    if (e) {
                        if ("string" == typeof e) return c(e, t);
                        var r = {}.toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? c(e, t) : void 0
                    }
                }

                function c(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, a = Array(t); r < t; r++) a[r] = e[r];
                    return a
                }

                function u(e, t, r, a, n, o, i) {
                    try {
                        var c = e[o](i),
                            u = c.value
                    } catch (e) {
                        return void r(e)
                    }
                    c.done ? t(u) : Promise.resolve(u).then(a, n)
                }

                function s(e) {
                    return function() {
                        var t = this,
                            r = arguments;
                        return new Promise((function(a, n) {
                            var o = e.apply(t, r);

                            function i(e) {
                                u(o, a, n, i, c, "next", e)
                            }

                            function c(e) {
                                u(o, a, n, i, c, "throw", e)
                            }
                            i(void 0)
                        }))
                    }
                }
                var d = getApp().globalData,
                    l = d.$dmall.dmallApi;
                t.default = {
                    installPageParams: function() {
                        var e = arguments;
                        return s(a.default.mark((function t() {
                            var r, o, i, c, u, s, l, f, p, m, b, v, g, h, y, I, w, P, S, k, O, x;
                            return a.default.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (r = e.length > 0 && void 0 !== e[0] ? e[0] : {}, o = r.share, i = r.id, c = r.tpc, u = void 0 === c ? "" : c, s = r.sharePrice, l = r.noPrice, f = void 0 === l ? "" : l, p = r.shipmentType, m = void 0 === p ? "" : p, b = r.addLaterBack, v = r.skuId, g = void 0 === v ? "" : v, h = r.tdcStoreId, y = void 0 === h ? "" : h, I = i ? i.split("-") : [], w = "", P = "", S = o ? parseInt(I[0], 10) : "", k = o ? parseInt(I[1], 10) : "", "bld" !== d.currentScene) {
                                            t.next = 16;
                                            break
                                        }
                                        return t.next = 10, n.storeInfoNew.getCurrentStore();
                                    case 10:
                                        O = t.sent, w = parseInt(I[0], 10) || (null == O ? void 0 : O.venderId) || "", P = parseInt(I[1], 10) || (null == O ? void 0 : O.storeId) || "", y && (P = y, k = y), t.next = 21;
                                        break;
                                    case 16:
                                        return t.next = 18, n.storeInfoNew.initStoreInfo();
                                    case 18:
                                        x = t.sent, w = o && (999999 !== x.storeId || g) ? x.venderId : parseInt(I[0], 10) || "", P = o && (999999 !== x.storeId || g) ? x.storeId : parseInt(I[1], 10) || "";
                                    case 21:
                                        return t.abrupt("return", {
                                            tpc: u,
                                            share: o,
                                            noPrice: f,
                                            shipmentType: m || d.shipmentType,
                                            addLaterBack: b,
                                            pageId: r.id,
                                            shareVenderId: S,
                                            shareStoreId: k,
                                            sharePrice: o && s ? Number(s) : "",
                                            venderId: w,
                                            storeId: P,
                                            skuId: g || parseInt(I[2], 10),
                                            businessType: parseInt(I[3], 10) || 1
                                        });
                                    case 22:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    installWareDataOrder: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = [];
                        return e.floorModuleResponseList.forEach((function(e, r) {
                            t.push({
                                floorType: e.floorType,
                                subFloorName: []
                            }), e.data.forEach((function(e) {
                                t[r].subFloorName.push(e.subFloorName)
                            }))
                        })), t
                    },
                    installNavigatorData: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = [];
                        return e.floorModuleResponseList.forEach((function(r) {
                            e.menuBarList.forEach((function(e) {
                                e.floorType === r.floorType && t.push(e)
                            }))
                        })), t
                    },
                    installWareDetailData: function(e) {
                        var t, r = {},
                            a = {
                                has_multi: 0,
                                rec_skus: "",
                                isAdWords: 0
                            },
                            n = o(e.floorModuleResponseList);
                        try {
                            for (n.s(); !(t = n.n()).done;) {
                                var i, c = o(t.value.data);
                                try {
                                    for (c.s(); !(i = c.n()).done;) {
                                        var u = i.value;
                                        switch (u.subFloorName) {
                                            case "spec_info":
                                                r.specInfo = u.data, u.data.relatedSkuList && (a.has_multi = 1);
                                                break;
                                            case "sellpackage":
                                                r.sellpackage = u.data;
                                                break;
                                            case "warebase":
                                                if (console.log("商品信息楼层信息：", u.data), u.data.adWords) {
                                                    var s = u.data.adWords.filter((function(e) {
                                                        return 2 === e.type
                                                    }));
                                                    u.data.adWords = s.length ? s.slice(0, 1) : u.data.adWords.slice(0, 1), a.isAdWords = s.length ? 2 : 1
                                                } else a.isAdWords = 3;
                                                u.data.promotionPrice = l.formatPrice(u.data.promotionPrice), u.data.originalPrice = l.formatPrice(u.data.originalPrice), r.warebase = u.data, r.secKillActVO = u.data.secKillActVO, r.isSecKillPreSale = u.data.promotionWareVO ? u.data.promotionWareVO.commonPriceType : 0;
                                                break;
                                            case "shipment":
                                                console.log("业态配送时效楼层", u.data), r.shipment = u.data;
                                                break;
                                            case "new_comments":
                                                console.log("评价楼层", u.data);
                                                var d = u.data.rateTotalCount;
                                                u.data.rateTotalCount = d < 1e4 ? d : "".concat(Math.round(d / 1e3) / 10, "万"), r.comments = u.data;
                                                break;
                                            case "graphic":
                                                r.description && r.description.length ? r.description.push(u.data) : r.description = [u.data];
                                                break;
                                            case "recommend":
                                                if (!u.data) continue;
                                                u.data && (r.recommend = u.data);
                                                break;
                                            case "marketing_brand_warebase":
                                                console.log("品牌属性", u.data), r.brandAttribute = u.data, u.data.relatedSkuList && (a.has_multi = 1);
                                                break;
                                            case "coupon":
                                                console.log("优惠卷楼层", u.data), r.coupon = u.data;
                                                break;
                                            case "promotion":
                                                r.promotion = this.installPromotionData(u.data), console.log("促销楼层", r.promotion);
                                                break;
                                            case "activity":
                                                r.activity = u.data;
                                                break;
                                            case "cart":
                                                r.cart = u.data;
                                                break;
                                            case "rank":
                                                r.rank = u.data, console.log("榜单楼层", u.data);
                                                break;
                                            case "paidUpMember":
                                                r.paidUpMember = u.data;
                                                break;
                                            case "marketing_tag":
                                                r.active = u.data;
                                                break;
                                            case "category_info":
                                                r.stroll = u.data;
                                                break;
                                            case "cloud_market_service":
                                                r.cloudMarket = u.data
                                        }
                                    }
                                } catch (e) {
                                    c.e(e)
                                } finally {
                                    c.f()
                                }
                            }
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                        return {
                            wareDetailData: r,
                            trackData: a
                        }
                    },
                    installPromotionData: function(e) {
                        var t = e.promotionDisplayItemList;
                        return t && t.length && t.forEach((function(t) {
                            2 === Number(t.type) && (e.hasValidePromotion = !0)
                        })), e
                    }
                }
            }
        }
    ]);
}, {
    isPage: false,
    isComponent: false,
    currentFile: 'packageWare/common/vendor.js'
});