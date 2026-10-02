/*v0.5vv_20211229_syb_scopedata*/
global.__wcc_version__ = 'v0.5vv_20211229_syb_scopedata';
global.__wcc_version_info__ = {
    "customComponents": true,
    "fixZeroRpx": true,
    "propValueDeepCopy": false
};
var $gwxc
var $gaic = {}
$gwx8 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx8 || [];
        __WXML_GLOBAL__.ops_set.$gwx8 = z;
        __WXML_GLOBAL__.ops_init.$gwx8 = true;
        var nv_require = function() {
            var nnm = {
                "p_./packageCmsComp/components/CMS/components/Gashapon/Gashapon.wxs": np_0,
            };
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
        f_['./packageCmsComp/components/CMS/components/Gashapon/Gashapon.wxml'] = {};
        f_['./packageCmsComp/components/CMS/components/Gashapon/Gashapon.wxml']['utils'] = f_['./packageCmsComp/components/CMS/components/Gashapon/Gashapon.wxs'] || nv_require("p_./packageCmsComp/components/CMS/components/Gashapon/Gashapon.wxs");
        f_['./packageCmsComp/components/CMS/components/Gashapon/Gashapon.wxml']['utils']();

        f_['./packageCmsComp/components/CMS/components/Gashapon/Gashapon.wxs'] = nv_require("p_./packageCmsComp/components/CMS/components/Gashapon/Gashapon.wxs");

        function np_0() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_left = 0;
            var nv_right = 362;
            var nv_top = 206;
            var nv_bottom = 0;
            var nv_ballArr = [({
                nv_index: 1,
                nv_x: 280,
                nv_y: 120,
                nv_deg: 0,
            }), ({
                nv_index: 2,
                nv_x: 170,
                nv_y: 84,
                nv_deg: 0,
            }), ({
                nv_index: 3,
                nv_x: 50,
                nv_y: 0,
                nv_deg: 0,
            }), ({
                nv_index: 4,
                nv_x: 140,
                nv_y: 0,
                nv_deg: 0,
            }), ({
                nv_index: 5,
                nv_x: 348,
                nv_y: 30,
                nv_deg: 0,
            }), ({
                nv_index: 6,
                nv_x: 18,
                nv_y: 66,
                nv_deg: 0,
            }), ({
                nv_index: 7,
                nv_x: 70,
                nv_y: 68,
                nv_deg: 0,
            }), ({
                nv_index: 8,
                nv_x: 122,
                nv_y: 72,
                nv_deg: 0,
            }), ({
                nv_index: 9,
                nv_x: 228,
                nv_y: 72,
                nv_deg: 0,
            }), ({
                nv_index: 10,
                nv_x: 318,
                nv_y: 72,
                nv_deg: 0,
            }), ({
                nv_index: 11,
                nv_x: 4,
                nv_y: 0,
                nv_deg: 0,
            }), ({
                nv_index: 12,
                nv_x: 94,
                nv_y: 0,
                nv_deg: 0,
            }), ({
                nv_index: 13,
                nv_x: 184,
                nv_y: 0,
                nv_deg: 0,
            }), ({
                nv_index: 14,
                nv_x: 274,
                nv_y: 0,
                nv_deg: 0,
            }), ({
                nv_index: 15,
                nv_x: 360,
                nv_y: 0,
                nv_deg: 0,
            })];
            var nv_initArr = [({
                nv_index: 1,
                nv_x: 280,
                nv_y: 120,
                nv_deg: -45,
                nv_step: 0,
            }), ({
                nv_index: 2,
                nv_x: 170,
                nv_y: 84,
                nv_deg: 27,
                nv_step: 0,
            }), ({
                nv_index: 3,
                nv_x: 50,
                nv_y: 0,
                nv_deg: 120,
                nv_step: 0,
            }), ({
                nv_index: 4,
                nv_x: 140,
                nv_y: 0,
                nv_deg: 67,
                nv_step: 0,
            }), ({
                nv_index: 5,
                nv_x: 348,
                nv_y: 30,
                nv_deg: -38,
                nv_step: 0,
            }), ({
                nv_index: 6,
                nv_x: 18,
                nv_y: 66,
                nv_deg: 27,
                nv_step: 0,
            }), ({
                nv_index: 7,
                nv_x: 70,
                nv_y: 68,
                nv_deg: -60,
                nv_step: 0,
            }), ({
                nv_index: 8,
                nv_x: 122,
                nv_y: 72,
                nv_deg: 130,
                nv_step: 0,
            }), ({
                nv_index: 9,
                nv_x: 228,
                nv_y: 72,
                nv_deg: 72,
                nv_step: 0,
            }), ({
                nv_index: 10,
                nv_x: 318,
                nv_y: 72,
                nv_deg: 160,
                nv_step: 0,
            }), ({
                nv_index: 11,
                nv_x: 4,
                nv_y: 0,
                nv_deg: -45,
                nv_step: 0,
            }), ({
                nv_index: 12,
                nv_x: 94,
                nv_y: 0,
                nv_deg: 27,
                nv_step: 0,
            }), ({
                nv_index: 13,
                nv_x: 184,
                nv_y: 0,
                nv_deg: -30,
                nv_step: 0,
            }), ({
                nv_index: 14,
                nv_x: 274,
                nv_y: 0,
                nv_deg: 90,
                nv_step: 0,
            }), ({
                nv_index: 15,
                nv_x: 360,
                nv_y: 0,
                nv_deg: 5,
                nv_step: 0,
            })];
            var nv_count = 0;

            function nv_init(nv_newValue, nv_oldValue, nv_ownerInstance, nv_instance) {
                if (nv_newValue === true && nv_count === 0) {
                    nv_count = 70;
                    nv_ballArr.nv_forEach((function(nv_item, nv_index) {
                        nv_assignRandomProperties(nv_item);
                        nv_setXY(nv_ownerInstance, nv_index)
                    }))
                }
            };

            function nv_assignRandomProperties(nv_item) {
                nv_item.nv_directionX = Math.nv_random() > 0.5 ? 1 : -1;
                nv_item.nv_directionY = 1;
                nv_item.nv_rotateD = Math.nv_random() > 0.5 ? 1 : -1;
                nv_item.nv_transformSpeed = (Math.nv_random() * 2 + 1).nv_toFixed(2) * 1;
                nv_item.nv_speedX = (Math.nv_random() * 2 + 1).nv_toFixed(2) * 1;
                nv_item.nv_speedY = (Math.nv_random() * 2 + 1).nv_toFixed(2) * 1
            };

            function nv_setXY(nv_ownerInstance, nv_index) {
                nv_calculate(nv_ballArr[((nt_0 = (nv_index), null == nt_0 ? undefined : 'number' === typeof nt_0 ? nt_0 : "nv_" + nt_0))]);
                if (nv_count > 0) {
                    nv_count--;
                    var nv_ballComponent = nv_ownerInstance.nv_selectAllComponents('.ball-animate')[((nt_1 = (nv_index), null == nt_1 ? undefined : 'number' === typeof nt_1 ? nt_1 : "nv_" + nt_1))];
                    nv_ballComponent.nv_setStyle(({
                        "nv_transform": "translate3d(" + nv_ballArr[((nt_2 = (nv_index), null == nt_2 ? undefined : 'number' === typeof nt_2 ? nt_2 : "nv_" + nt_2))].nv_x + "rpx, -" + nv_ballArr[((nt_3 = (nv_index), null == nt_3 ? undefined : 'number' === typeof nt_3 ? nt_3 : "nv_" + nt_3))].nv_y + "rpx, 0) rotate(" + nv_ballArr[((nt_4 = (nv_index), null == nt_4 ? undefined : 'number' === typeof nt_4 ? nt_4 : "nv_" + nt_4))].nv_deg + "deg)",
                        "nv_transition": "transform " + (nv_ballArr[((nt_5 = (nv_index), null == nt_5 ? undefined : 'number' === typeof nt_5 ? nt_5 : "nv_" + nt_5))].nv_step / 400) * nv_ballArr[((nt_6 = (nv_index), null == nt_6 ? undefined : 'number' === typeof nt_6 ? nt_6 : "nv_" + nt_6))].nv_transformSpeed + "s linear 0s",
                    }))
                } else {
                    nv_ballArr = nv_JSON.nv_parse(nv_JSON.nv_stringify(nv_initArr));
                    nv_ballArr.nv_forEach((function(nv_item, nv_forIndex) {
                        var nv_ballComponent = nv_ownerInstance.nv_selectAllComponents('.ball-animate')[((nt_7 = (nv_forIndex), null == nt_7 ? undefined : 'number' === typeof nt_7 ? nt_7 : "nv_" + nt_7))];
                        nv_ballComponent.nv_setStyle(({
                            "nv_transform": "translate3d(" + nv_item.nv_x + "rpx, -" + nv_item.nv_y + "rpx, 0) rotate(" + nv_item.nv_deg + "deg)",
                            "nv_transition": "transform 0s linear 0s",
                        }))
                    }));
                    nv_ownerInstance.nv_callMethod('animateFish')
                }
            };

            function nv_interval(nv_event, nv_ownerInstance) {
                nv_setXY(nv_ownerInstance, nv_event.nv_currentTarget.nv_dataset.nv_index)
            };

            function nv_calculate(nv_ballObj) {
                nv_ballObj.nv_distanceX = nv_ballObj.nv_directionX == 1 ? nv_right - nv_ballObj.nv_x : nv_ballObj.nv_x - nv_left;
                nv_ballObj.nv_distanceY = nv_ballObj.nv_directionY == 1 ? nv_top - nv_ballObj.nv_y : nv_ballObj.nv_y - nv_bottom;
                if (nv_ballObj.nv_distanceX / nv_ballObj.nv_speedX < nv_ballObj.nv_distanceY / nv_ballObj.nv_speedY) {
                    nv_ballObj.nv_direction = 'x';
                    nv_ballObj.nv_step = (nv_ballObj.nv_distanceX / nv_ballObj.nv_speedX * nv_ballObj.nv_speedY).nv_toFixed(2) * 1
                } else {
                    nv_ballObj.nv_direction = 'y';
                    nv_ballObj.nv_step = (nv_ballObj.nv_distanceY / nv_ballObj.nv_speedY * nv_ballObj.nv_speedX).nv_toFixed(2) * 1
                };
                if (nv_ballObj.nv_direction == 'x') {
                    nv_ballObj.nv_x = nv_ballObj.nv_directionX == 1 ? nv_right : nv_left;
                    nv_ballObj.nv_y = (nv_ballObj.nv_step * nv_ballObj.nv_directionY + nv_ballObj.nv_y).nv_toFixed(2) * 1;
                    nv_ballObj.nv_directionX = -nv_ballObj.nv_directionX
                } else {
                    nv_ballObj.nv_x = (nv_ballObj.nv_step * nv_ballObj.nv_directionX + nv_ballObj.nv_x).nv_toFixed(2) * 1;
                    nv_ballObj.nv_y = nv_ballObj.nv_directionY == 1 ? nv_top : nv_bottom;
                    nv_ballObj.nv_directionY = -nv_ballObj.nv_directionY
                };
                nv_ballObj.nv_deg = (nv_ballObj.nv_deg + (nv_ballObj.nv_step * 2 * nv_ballObj.nv_rotateD)).nv_toFixed(2) * 1
            };
            nv_module.nv_exports = ({
                nv_init: nv_init,
                nv_interval: nv_interval,
            });
            return nv_module.nv_exports;
        }

        var x = [];
        if (path && e_[path]) {
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx8";
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
if (__vd_version_info__.delayedGwx || true) $gwx8();;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("packageCmsComp/common/vendor.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../@babel/runtime/helpers/Arrayincludes");
    var e = require("../../@babel/runtime/helpers/typeof");
    (global.webpackJsonp = global.webpackJsonp || []).push([
        ["packageCmsComp/common/vendor"], {
            "10d8": function(t, n, r) {
                (function(t) {
                    function o(t) {
                        return (o = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
                            return e(t)
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t)
                        })(t)
                    }
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }), n.default = void 0;
                    var i = function(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            }
                        }(r("a34a")),
                        a = r("b49c"),
                        s = r("7836");

                    function c(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            t && (r = r.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), n.push.apply(n, r)
                        }
                        return n
                    }

                    function u(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? c(Object(n), !0).forEach((function(t) {
                                l(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }

                    function l(e, t, n) {
                        return (t = function(e) {
                            var t = function(e, t) {
                                if ("object" != o(e) || !e) return e;
                                var n = e[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var r = n.call(e, t || "default");
                                    if ("object" != o(r)) return r;
                                    throw new TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == o(t) ? t : t + ""
                        }(t)) in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n, e
                    }

                    function d(e, t, n, r, o, i, a) {
                        try {
                            var s = e[i](a),
                                c = s.value
                        } catch (e) {
                            return void n(e)
                        }
                        s.done ? t(c) : Promise.resolve(c).then(r, o)
                    }

                    function f(e) {
                        return function() {
                            var t = this,
                                n = arguments;
                            return new Promise((function(r, o) {
                                var i = e.apply(t, n);

                                function a(e) {
                                    d(i, r, o, a, s, "next", e)
                                }

                                function s(e) {
                                    d(i, r, o, a, s, "throw", e)
                                }
                                a(void 0)
                            }))
                        }
                    }
                    var p = new a.BuriedPoint,
                        h = getApp().globalData,
                        m = h.$dmall,
                        g = m.dmallApi,
                        w = m.router,
                        v = m.pathMap;
                    n.default = {
                        data: function() {
                            return {
                                name: "CMS",
                                sloganImg: h.extCommonConfig && h.extCommonConfig.sloganUrl ? h.extCommonConfig.sloganUrl : "https://img.dmallcdn.com/dshop/202103/00291bfc-a747-4507-b2ac-7328c0d8a907",
                                emptyImg: "https://img.dmallcdn.com/dshop/202207/bddade01-4dfe-4d6a-8179-baf2b515c996",
                                rectTarget: {},
                                windowWidth: 0,
                                cmsHeight: 0,
                                isPageOnLoad: !1,
                                specWareItem: null,
                                specWareParentItem: null,
                                propsParams: {
                                    customNavBar: !0,
                                    appletType: h.extCommonConfig.appletType
                                },
                                currentBack: "",
                                blur: 0,
                                pageAutoPlay: !0,
                                isC9: h.extCommonConfig.uniqueCode && h.extCommonConfig.uniqueCode.includes("c9")
                            }
                        },
                        computed: {
                            commonMargin: function() {
                                var e = this;
                                return function(t) {
                                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                        r = 0;
                                    return r = (e.firstFloorIsCurrent(200) || e.firstFloorIsCurrent(202)) && e.isImmerse ? 1 === t ? -130 : n : 0 === t ? 0 : n, "".concat(g.toPx(r), "px")
                                }
                            },
                            paddingStyle: function() {
                                var e = "".concat(this.paddingTop + (this.firstFloorIsCurrent(200) ? g.toPx(this.cmsFloorInfo[0].bannerHeight + 162) : this.firstFloorIsCurrent(202) ? this.caculateNewMemberHeight() : 0), "px"),
                                    t = "url(".concat(this.currentBack, "); background-size: 100% auto; background-position: center ").concat(this.cmsFloorInfo && this.cmsFloorInfo.length && 200 === this.cmsFloorInfo[0].type ? "bottom" : "-".concat(g.toPx(326) - this.paddingTop, "px")),
                                    n = "blur(".concat(this.blur, ")");
                                return this.isImmerse ? this.firstFloorIsCurrent(200) || this.firstFloorIsCurrent(202) ? "height: ".concat(e, "; background: ").concat(t, "; filter: ").concat(n, ";") : (console.log("this.paddingTop", this.paddingTop), "height: ".concat(this.paddingTop, "px;")) : "height: 0;"
                            }
                        },
                        watch: {
                            cmsFloorInfo: {
                                handler: function(e, t) {
                                    var n = this;
                                    if (!e || !e.length) return !1;
                                    this.isPageOnLoad = !1, t && e.length === t.length && 89 !== t[0].type ? (this.showFloorInfo = this.floorDateDeal(e), this.$nextTick((function() {
                                        n.initCmsNavArr(), n.isPageOnLoad = !0
                                    }))) : this.checkParams()
                                },
                                immediate: !0,
                                deep: !0
                            },
                            systemInfo: {
                                handler: function(e, t) {
                                    e && Object.keys(e).length
                                },
                                immediate: !0,
                                deep: !0
                            }
                        },
                        mounted: function() {},
                        onPageShow: function() {
                            this.pageAutoPlay = !0
                        },
                        onPageHide: function() {
                            this.pageAutoPlay = !1
                        },
                        methods: {
                            showCmsTextNoticeDialog: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                    n = e.dialogContent || "";
                                n && (this.$pageView.showDialog({
                                    content: n,
                                    ensureText: "关闭",
                                    cancelText: ""
                                }), this.tracker(e, t))
                            },
                            checkParams: function() {
                                var e = this,
                                    t = this.enableType,
                                    n = this.unableType,
                                    r = this.cmsFloorInfo;
                                t = t instanceof Array ? t : [], n = n instanceof Array ? n : [];
                                var o = [];
                                o = r.filter((function(e) {
                                    return t.length ? e.type && t.includes(e.type) && !n.includes(e.type) : e.type && !n.includes(e.type)
                                })), o = this.floorDateDeal(o), this.showFloorInfo = o, this.showFloorInfo.forEach((function(t, n) {
                                    35 === t.type && !t.subConfigList.length && t.positionLimit ? e.preTwoEight(t.positionLimit, n) : 83 !== t.type || t.subConfigList && t.subConfigList.length || !t.spId ? 90 !== t.type || t.subConfigList.length || e.preNewSecKillCoupon(n) : e.preNewSecKill(t.spId, n)
                                })), this.$nextTick((function() {
                                    e.initViewTop(), e.initCmsNavArr(), e.isPageOnLoad = !0
                                }))
                            },
                            handleJumpClick: function(e, n) {
                                var r = this,
                                    o = n.type;
                                if (36 !== o || 1 !== e.interaction) {
                                    var i = e.taskId,
                                        a = void 0 === i ? "" : i,
                                        s = e.coupon,
                                        c = e.itemType,
                                        u = e.positionId;
                                    if (!a && s && s.taskId && (a = s.taskId), [19, 24, 46].includes(o)) {
                                        var l = e.clickTrackUrl,
                                            d = void 0 === l ? "" : l;
                                        if (d) d.split(",").forEach((function(e) {
                                            p.requestDynamicAdUrl(e)
                                        }))
                                    }
                                    var f = e.subscribeTemplates,
                                        h = void 0 === f ? [] : f;
                                    this.subscribeMessage({
                                        subscribeStatusList: h,
                                        cmsIndex: "".concat(o, "-").concat(u)
                                    }, (function() {
                                        if (87 === o) v.homeSub && w.navigateTo("".concat(v.homeSub.path, "?bizCode=").concat(n.viceFormatCode));
                                        else if (81 === o) {
                                            var i = e.liveActivityInfo && e.liveActivityInfo.activity && e.liveActivityInfo.activity.liveActivityId || "",
                                                s = e.liveActivityInfo && e.liveActivityInfo.activity && e.liveActivityInfo.activity.liveRoom && e.liveActivityInfo.activity.liveRoom.liveRoomId || "";
                                            if (!i) return !1;
                                            w.navigateTo(v.livingPage.path, {
                                                liveActivityId: i,
                                                liveRoomId: s
                                            })
                                        } else if (83 === o) {
                                            var u = n.spId,
                                                l = e.sku,
                                                d = void 0 === l ? "" : l,
                                                f = e.forwardUrl,
                                                p = void 0 === f ? "" : f;
                                            if (!u) return !1;
                                            v.seckill ? w.navigateTo("".concat(v.seckill.path, "?sku=").concat(d, "&activityId=").concat(u)) : p && w.navigateTo("".concat(p, "&sku=").concat(d))
                                        } else {
                                            if (46 === o && a) return r.subscribeMessage({
                                                scene: "CMS_IMG_GET_COUPON",
                                                element_id: "coupon_dy_click",
                                                element_name: "优惠券楼层订阅回调点击"
                                            }, (function() {
                                                r.handleDrawCoupon(e, n)
                                            })), !1;
                                            if (90 === o) {
                                                var h = e.forwardUrl,
                                                    m = void 0 === h ? "" : h;
                                                m && w.navigateTo(m)
                                            } else if ([75, 20, 30, 40, 34, 88, 19, 24, 46, 200].includes(o) && 32 === c) {
                                                var b = JSON.parse(e.resource);
                                                if (1002 === b.type) r.jumpToUrl(b.context);
                                                else {
                                                    if (1003 !== b.type) return;
                                                    if (!b.corpId) return;
                                                    t.openCustomerServiceChat({
                                                        extInfo: {
                                                            url: b.context
                                                        },
                                                        corpId: b.corpId,
                                                        success: function(e) {
                                                            console.log(e, "Res")
                                                        },
                                                        fail: function(e) {
                                                            console.log(e, "err"), e.errMsg && g.showToast({
                                                                title: e.errMsg
                                                            })
                                                        }
                                                    })
                                                }
                                            } else if (33 === c) {
                                                var I = e.designStoreId,
                                                    T = e.latitude,
                                                    y = e.longitude;
                                                r.handleChangeStore({
                                                    storeId: I,
                                                    latitude: T,
                                                    longitude: y
                                                })
                                            } else {
                                                var C = e.resource,
                                                    k = void 0 === C ? "" : C,
                                                    x = e.needSelectReward,
                                                    _ = void 0 !== x && x;
                                                if (a && /^[0-9]*$/.test(a)) return _ ? r.showPrizePopDialog(e, n) : r.handleDrawCoupon(e, n);
                                                if (k && 3 === c && !e.hasWare) return r.handleGoodsDetail(e, n);
                                                if (k && k.includes("atlas.dmall.com/click")) {
                                                    var S = r.atlasToOriginUrl(k);
                                                    r.jumpToUrl(S)
                                                } else r.jumpToUrl(k)
                                            }
                                        }
                                        r.tracker(e, n)
                                    }))
                                } else this.showCmsTextNoticeDialog(e, n)
                            },
                            handleDrawCoupon: function(e, t) {
                                var n = this;
                                return f(i.default.mark((function r() {
                                    var o, a, s, c, u, l, d, p, h, m, b, I;
                                    return i.default.wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                if (o = t.type, a = e.taskId, s = e.coupon, c = void 0 === s ? {} : s, u = e.positionId, l = e.subscribeTemplates, d = void 0 === l ? [] : l, p = e.rewardItemIds, h = void 0 === p ? "" : p, m = e.rewardType, b = void 0 === m ? null : m, !a && c && c.taskId && (a = c.taskId), a) {
                                                    r.next = 5;
                                                    break
                                                }
                                                return r.abrupt("return", !1);
                                            case 5:
                                                if (n.isLogin) {
                                                    r.next = 7;
                                                    break
                                                }
                                                return r.abrupt("return", w.navigateTo(v.login.path));
                                            case 7:
                                                I = 1, [95, 96, 97, 89, 99, 108].includes(o) && (I = 2), n.subscribeMessage({
                                                    subscribeStatusList: d,
                                                    cmsIndex: "".concat(o, "-").concat(u)
                                                }, f(i.default.mark((function r() {
                                                    var o, s, c, u, l, d;
                                                    return i.default.wrap((function(r) {
                                                        for (;;) switch (r.prev = r.next) {
                                                            case 0:
                                                                if (21 !== b) {
                                                                    r.next = 3;
                                                                    break
                                                                }
                                                                return n.receiveWxCoupon(e), r.abrupt("return");
                                                            case 3:
                                                                return r.prev = 3, r.next = 6, n.drawCoupon({
                                                                    taskId: a,
                                                                    type: I,
                                                                    rewardItemIds: h
                                                                });
                                                            case 6:
                                                                return o = r.sent, s = o.code, c = o.result, u = o.data, "0000" === s && u ? (l = Array.isArray(u), u.planCouponFlag && u.planCouponToken ? n.$emit("drawCouponSuccess", u) : (e.couponPackage ? e.couponPackage.forEach((function(t) {
                                                                    Object.assign(t, {
                                                                        titleGoTuUse: u.statusName,
                                                                        buttonName: u.statusName,
                                                                        statusCode: u.taskStatus,
                                                                        statusName: u.statusName,
                                                                        outActivityLink: u.outActivityLink,
                                                                        validDateRemark: u.validDateRemark || e.validDateRemark,
                                                                        buttonType: 0 === u.statusCode || 1 === u.statusCode ? 2 : 4,
                                                                        receiveState: 0 === u.statusCode || 1 === u.statusCode ? 2 : e.receiveState
                                                                    })
                                                                })) : l ? (d = u[0] || {}, Object.assign(e, {
                                                                    statusCode: d.rewardStatus
                                                                })) : Object.assign(e, {
                                                                    titleGoTuUse: u.statusName,
                                                                    buttonName: u.statusName,
                                                                    statusCode: u.taskStatus,
                                                                    statusName: u.statusName,
                                                                    outActivityLink: u.outActivityLink,
                                                                    validDateRemark: u.validDateRemark || e.validDateRemark,
                                                                    buttonType: 0 === u.statusCode || 1 === u.statusCode ? 2 : 4,
                                                                    receiveState: 0 === u.statusCode || 1 === u.statusCode ? 2 : e.receiveState
                                                                }), c && g.showToast({
                                                                    title: c
                                                                }), h && n.hidePrizePopDialog())) : ("1004" === s && Object.assign(e, {
                                                                    statusCode: 5
                                                                }), g.showToast({
                                                                    title: c || "领取失败，请稍后重试~"
                                                                })), e.action_type = 3, n.tracker(e, t), r.abrupt("return", "");
                                                            case 14:
                                                                r.prev = 14, r.t0 = r.catch(3), console.log("领券事件报错 :>> ", r.t0);
                                                            case 17:
                                                            case "end":
                                                                return r.stop()
                                                        }
                                                    }), r, null, [
                                                        [3, 14]
                                                    ])
                                                }))));
                                            case 10:
                                            case "end":
                                                return r.stop()
                                        }
                                    }), r)
                                })))()
                            },
                            receiveWxCoupon: function(e) {
                                var n = this;
                                return f(i.default.mark((function r() {
                                    var o, a, s, c, u, l, d, f, p;
                                    return i.default.wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                if (o = e.taskId, a = e.rewardItemId, s = e.statusCode, ![5, 6, 7].includes(s)) {
                                                    r.next = 3;
                                                    break
                                                }
                                                return r.abrupt("return");
                                            case 3:
                                                return r.next = 5, n.getWxCouponToken({
                                                    taskId: o,
                                                    rewardItemId: a,
                                                    targetType: 25
                                                });
                                            case 5:
                                                if (c = r.sent, l = (u = c || {}).code, d = u.result, f = u.data, p = "", "0000" !== l || !f) {
                                                    r.next = 12;
                                                    break
                                                }
                                                p = f, r.next = 14;
                                                break;
                                            case 12:
                                                return g.showToast({
                                                    title: d || "领取失败，请稍后重试~"
                                                }), r.abrupt("return");
                                            case 14:
                                                if (!p) {
                                                    r.next = 29;
                                                    break
                                                }
                                                if (r.prev = 15, !t.openBusinessView) {
                                                    r.next = 20;
                                                    break
                                                }
                                                t.openBusinessView({
                                                    businessType: "wxpayCouponUse",
                                                    extraData: {
                                                        action: "receiveCoupon",
                                                        token: p
                                                    },
                                                    success: function(e) {
                                                        var t = (e.extraData || {}).productPath || "";
                                                        t && w.navigateTo(t), console.debug("openBusinessView success: ", e)
                                                    },
                                                    fail: function(e) {
                                                        console.debug("openBusinessView failed:", e)
                                                    },
                                                    complete: function(e) {
                                                        console.debug("openBusinessView completed: ", e)
                                                    }
                                                }), r.next = 22;
                                                break;
                                            case 20:
                                                return g.showToast({
                                                    title: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试"
                                                }), r.abrupt("return");
                                            case 22:
                                                r.next = 29;
                                                break;
                                            case 24:
                                                return r.prev = 24, r.t0 = r.catch(15), console.log("领券事件报错 :>> ", r.t0), g.showToast({
                                                    title: "领取失败，请稍后重试~"
                                                }), r.abrupt("return");
                                            case 29:
                                            case "end":
                                                return r.stop()
                                        }
                                    }), r, null, [
                                        [15, 24]
                                    ])
                                })))()
                            },
                            alipayCouponRefresh: function(e, t) {
                                var n = t.type,
                                    r = t.id,
                                    o = e.positionId,
                                    i = e.tabIndex,
                                    a = void 0 === i ? -1 : i,
                                    s = e.couponIndex,
                                    c = void 0 === s ? -1 : s,
                                    l = e.couponPackage;
                                if (99 === n && o) {
                                    var d = t.subConfigList.findIndex((function(e) {
                                        return e.positionId === o
                                    }));
                                    d >= 0 && t.subConfigList.splice(d, 1, e)
                                } else if ([95, 96, 97, 105].includes(n) && c >= 0)
                                    if (105 === n) t.subConfigList.splice(c, 1, e);
                                    else {
                                        var f = u(u({}, t.subConfigList[c]), {}, {
                                            coupon: e
                                        });
                                        t.subConfigList.splice(c, 1, f)
                                    } else 108 === n && a >= 0 && c >= 0 && (l && l.length ? l.forEach((function(e) {
                                    t.subConfigList[a].classifyCouponList.splice(e.couponIndex, 1, e)
                                })) : t.subConfigList[a].classifyCouponList.splice(c, 1, e));
                                this.$set(this.cmsFloorInfo, this.cmsFloorInfo.findIndex((function(e) {
                                    return e.id === r
                                })), t)
                            },
                            handleGoodsDetail: function(e, t) {
                                var n = this,
                                    r = t.type,
                                    o = e.venderId,
                                    a = void 0 === o ? "" : o,
                                    s = e.storeId,
                                    c = void 0 === s ? "" : s,
                                    u = e.businessType,
                                    l = void 0 === u ? "" : u,
                                    d = e.sku,
                                    p = e.skuId,
                                    h = e.spId,
                                    m = e.id,
                                    g = e.resource,
                                    b = void 0 === g ? "" : g,
                                    I = e.positionId,
                                    T = void 0 === I ? "" : I,
                                    y = e.subscribeTemplates,
                                    C = void 0 === y ? [] : y;
                                d = d || p || h, this.subscribeMessage({
                                    subscribeStatusList: C,
                                    cmsIndex: "".concat(r, "-").concat(T)
                                }, f(i.default.mark((function r() {
                                    return i.default.wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                if (!b || !b.includes("dLink://wareDetail")) {
                                                    r.next = 4;
                                                    break
                                                }
                                                w.navigateTo(b), r.next = 7;
                                                break;
                                            case 4:
                                                if (d) {
                                                    r.next = 6;
                                                    break
                                                }
                                                return r.abrupt("return");
                                            case 6:
                                                a && c ? w.navigateTo(v.wareDetail.path, {
                                                    id: [a, c, d, l].join("-")
                                                }) : m && w.navigateTo(v.wareDetail.path, {
                                                    id: m
                                                });
                                            case 7:
                                                n.tracker(e, t);
                                            case 8:
                                            case "end":
                                                return r.stop()
                                        }
                                    }), r)
                                }))))
                            },
                            getNearestCoupon: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                if (!e.length) return t;
                                if (1 === e.length) return e[0];
                                var n = Date.now(),
                                    r = t,
                                    o = Math.abs(Number(t.endDate) - n);
                                return e.forEach((function(e) {
                                    var t = Math.abs(Number(e.endDate) - n);
                                    t >= 0 && t < o && (o = t, r = e)
                                })), r
                            },
                            showCouponBarCode: function(e, t, n) {
                                var r = this.getNearestCoupon(n, t),
                                    o = r.couponBarCode,
                                    i = r.startDate,
                                    a = r.endDateStr,
                                    s = r.frontDisplayName;
                                e.frontDisplayName = s, e.couponBarCode = o, e.startDate = i, e.endDateStr = a, this.$refs.CouponBarCode.show(e)
                            },
                            couponToUse: function(e, t) {
                                var n = this;
                                return f(i.default.mark((function r() {
                                    var o, a, c, u, l, d, f, p, m, b, I, T, y, C, k, x, _;
                                    return i.default.wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                if (o = e.batchId, a = e.batchIds, c = e.storeId, 2 !== e.resourceType) {
                                                    r.next = 5;
                                                    break
                                                }
                                                return n.$refs.CouponBarCode.show(e), r.abrupt("return");
                                            case 5:
                                                return u = t.couponToUseVersion, l = void 0 !== u && u, d = t.type, r.next = 8, n.getCouponInfo({
                                                    applyIds: a && a.length ? a : [o]
                                                });
                                            case 8:
                                                if ((f = r.sent) && f.length) {
                                                    r.next = 12;
                                                    break
                                                }
                                                return w.navigateTo(v.coupon.path), r.abrupt("return");
                                            case 12:
                                                if (p = f.find((function(e) {
                                                        return e.usable
                                                    })) || {}, o || (o = p.batchId), !(l && 2 === p.limitScene || !l && [108, 109].includes(d))) {
                                                    r.next = 18;
                                                    break
                                                }
                                                return n.showCouponBarCode(e, p, f), r.abrupt("return");
                                            case 18:
                                                return m = p.couponCode, b = s.storeInfoNew.getCurrentStore(), I = b && "{}" !== JSON.stringify(b), r.next = 23, n.getCouponJumpUrl({
                                                    batchId: o,
                                                    storeId: I ? b.storeId : c,
                                                    couponCode: m
                                                });
                                            case 23:
                                                if (T = r.sent, y = T.outActivityLink, C = void 0 === y ? "" : y, k = T.storeStatus, x = void 0 === k ? 0 : k, C) {
                                                    r.next = 31;
                                                    break
                                                }
                                                return g.showToast({
                                                    title: "优惠券正在发放中，请稍后使用"
                                                }), r.abrupt("return");
                                            case 31:
                                                if (l) {
                                                    r.next = 34;
                                                    break
                                                }
                                                return w.navigateTo(C), r.abrupt("return");
                                            case 34:
                                                if (!(h.subBusiness && h.subBusiness.length && h.subBusiness.some((function(e) {
                                                        return "bld" === e.scene
                                                    })))) {
                                                    r.next = 42;
                                                    break
                                                }
                                                if ("bld" !== h.currentScene) {
                                                    r.next = 40;
                                                    break
                                                }
                                                if (!I || 1 !== x) {
                                                    r.next = 40;
                                                    break
                                                }
                                                return _ = "".concat(C).concat(C.includes("?") ? "&" : "?", "routerType=redirect&businessScene=bld&shipmentType=2"), w.navigateTo(_), r.abrupt("return");
                                            case 40:
                                                return w.navigateTo(v.deliverySelection.path, {
                                                    businessScene: "bld",
                                                    from: "coupon",
                                                    batchId: o,
                                                    couponCode: m
                                                }), r.abrupt("return");
                                            case 42:
                                                w.navigateTo(C);
                                            case 43:
                                            case "end":
                                                return r.stop()
                                        }
                                    }), r)
                                })))()
                            },
                            handleChangeStore: function(e) {
                                this.$emit("handleChangeStore", e)
                            },
                            jumpToUrl: function(e) {
                                e ? w.navigateTo(e) : console.warn("未配置跳转链接啊！")
                            },
                            subscribeMessage: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = arguments.length > 1 ? arguments[1] : void 0,
                                    n = arguments.length > 2 ? arguments[2] : void 0;
                                this.$pageView.sendMessage(e, (function(e) {
                                    e && n && "function" == typeof n ? n() : t && "function" == typeof t && t()
                                }))
                            },
                            showSpecDialog: function(e, t) {
                                var n = this;
                                this.specWareItem = e, this.specWareParentItem = t;
                                var r = this.$refs.specificationsComponent;
                                this.$nextTick((function() {
                                    r && r.show(n.specWareItem)
                                }))
                            },
                            showPrizePopDialog: function(e, t) {
                                this.$refs.PrizePop.show(e, t)
                            },
                            hidePrizePopDialog: function() {
                                var e = this.$refs.PrizePop;
                                e && e.close()
                            },
                            hideSpecDialog: function() {
                                var e = this.$refs.specificationsComponent;
                                e && e.hide()
                            },
                            onCloseNav: function() {
                                this.$refs.navNew && this.$refs.navNew.forEach((function(e) {
                                    e.moreStatus = !1
                                }))
                            },
                            scrolToNav: function(e, t) {
                                var n = this;
                                return f(i.default.mark((function r() {
                                    return i.default.wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                return r.next = 2, n.selectLayoutId(e.id).then((function(r) {
                                                    if (r && r[0]) {
                                                        var o = e.ceiling ? 44 : 0,
                                                            i = r[0].top + n.scrollTop - n.fixToTop - o;
                                                        g.pageScrollTo({
                                                            scrollTop: i,
                                                            duration: 0,
                                                            complete: function() {
                                                                t(!0)
                                                            }
                                                        })
                                                    } else t(!1)
                                                }));
                                            case 2:
                                            case "end":
                                                return r.stop()
                                        }
                                    }), r)
                                })))()
                            },
                            initCmsNavArr: function() {
                                var e = this;
                                setTimeout((function() {
                                    e.showFloorInfo.forEach((function(t) {
                                        if (100 === t.type) {
                                            var n = t.ceiling ? 44 : 0;
                                            t.subConfigList.forEach(function() {
                                                var t = f(i.default.mark((function t(r, o) {
                                                    var a;
                                                    return i.default.wrap((function(t) {
                                                        for (;;) switch (t.prev = t.next) {
                                                            case 0:
                                                                return t.next = 2, e.selectLayoutId(r.resource);
                                                            case 2:
                                                                a = t.sent, e.$set(r, "navTop", a && a[0] ? a[0].top - e.fixToTop - n : 0), e.$set(r, "navIndex", o);
                                                            case 5:
                                                            case "end":
                                                                return t.stop()
                                                        }
                                                    }), t)
                                                })));
                                                return function(e, n) {
                                                    return t.apply(this, arguments)
                                                }
                                            }())
                                        }
                                    }))
                                }), 2e3)
                            },
                            selectLayoutId: function(e) {
                                var t = this;
                                return new Promise((function(n) {
                                    g.createSelectorQuery().in(t).selectAll(".cms".concat(e)).boundingClientRect((function(e) {
                                        n(e)
                                    })).exec()
                                }))
                            },
                            specAddCart: function(e, t) {
                                this.addCart([e, this.specWareItem], this.specWareParentItem)
                            },
                            secKillFinish: function() {
                                this.freshNavTwoHeight(), this.$emit("secKillFinish")
                            },
                            twoEightFinish: function() {
                                this.freshNavTwoHeight(), this.$emit("twoEightFinish")
                            },
                            freshNavTwoHeight: function() {
                                this.initViewTop()
                            },
                            setReactTarget: function(e) {
                                this.rectTarget = e
                            },
                            animationStart: function(e) {
                                this.isRunAddAnimate ? this.$pageView.animationStart(e) : g.showToast({
                                    title: "加购成功"
                                })
                            },
                            pageScrollTo: function(e) {
                                this.$emit("pageScrollTo", e)
                            },
                            loadMore: function() {
                                this.$refs.navGroup && this.$refs.navGroup[0].loadMore(), this.$refs.navTwo && this.$refs.navTwo[0].loadMore()
                            },
                            tracker: function(e, t) {
                                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "element_click";
                                try {
                                    console.log("------------------------------------------------------------------------"), console.log("-------------------------------这是埋点上报-------------------------------"), console.log("------------------------------------------------------------------------"), console.log("subItem :>> ", e), console.log("item :>> ", t);
                                    var r = getCurrentPages(),
                                        o = r[r.length - 1].route,
                                        i = o.indexOf("homepage") > -1 ? 1 : o.indexOf("cmsTemplate") > -1 ? 7 : 0,
                                        a = t.type,
                                        s = t.orderNo,
                                        c = void 0 === s ? 1 : s,
                                        l = t.name,
                                        d = void 0 === l ? "" : l,
                                        f = t.parentId,
                                        h = void 0 === f ? "" : f,
                                        m = t.id,
                                        g = void 0 === m ? "" : m,
                                        w = t.customName,
                                        v = void 0 === w ? "" : w,
                                        b = e.orderNo,
                                        I = void 0 === b ? 1 : b,
                                        T = e.templateId,
                                        y = e.positionId,
                                        C = void 0 === y ? 0 : y,
                                        k = e.sku,
                                        x = void 0 === k ? "" : k,
                                        _ = e.skuId,
                                        S = void 0 === _ ? "" : _,
                                        L = e.batchId,
                                        P = void 0 === L ? "" : L,
                                        D = e.action_type,
                                        R = void 0 === D ? 1 : D,
                                        N = e.groupFeature,
                                        A = void 0 === N ? {} : N,
                                        F = e.customName,
                                        U = void 0 === F ? "" : F,
                                        $ = e.name,
                                        O = void 0 === $ ? "" : $,
                                        E = e.stockStatus,
                                        M = void 0 === E ? 0 : E,
                                        j = e.isRecData,
                                        B = void 0 !== j && j,
                                        W = !!(e.promotionList && e.promotionList.find((function(e) {
                                            return 2 === e.tagType
                                        })) || e.promotionTagList && e.promotionTagList.find((function(e) {
                                            return 2 === e.tagType
                                        }))),
                                        V = A.titleNew,
                                        z = void 0 === V ? "" : V,
                                        G = d || z || "",
                                        J = "".concat(a, "_").concat(c, "_").concat(I),
                                        q = G,
                                        H = u({
                                            page_tab_id: "",
                                            layer_template_id: T,
                                            layer_template_schedule_id: "",
                                            layer_type: a,
                                            floor_id: h > 0 ? h : g,
                                            layer_first_order_no: c,
                                            layer_second_order_no: I,
                                            layout_name: G,
                                            position_id: C,
                                            sku_id: x || S,
                                            action_type: R,
                                            coupon_code: P,
                                            page_vender_id: "",
                                            page_store_id: "",
                                            floor_custom_name: v,
                                            customName: U,
                                            ware_rank: I,
                                            is_recommend_ware: B,
                                            is_pre_sale: e.preSale || e.presale ? 1 : 0,
                                            is_flash_sale: W ? 1 : 0,
                                            ref_source: G,
                                            module_name: G
                                        }, this.activityInfo || {});
                                    if (79 === a) {
                                        var Q = e.currentTab,
                                            K = void 0 === Q ? 1 : Q,
                                            X = e.itemTotalIndex,
                                            Y = void 0 === X ? "" : X,
                                            Z = e.layer_tab_name,
                                            ee = void 0 === Z ? "" : Z,
                                            te = e.layer_tab_type,
                                            ne = void 0 === te ? 1 : te,
                                            re = e.tab1,
                                            oe = void 0 === re ? "" : re,
                                            ie = e.displayType,
                                            ae = void 0 === ie ? 1 : ie;
                                        J = "".concat(a, "_").concat(c, "_").concat(K).concat(Y ? "_" + Y : ""), H = u(u({}, H), {}, {
                                            layer_tab_name: ee,
                                            layer_tab_order_no: K,
                                            layer_tab_type: ne,
                                            tab1: oe,
                                            sku_id: x || S,
                                            action_type: R,
                                            rec: ae
                                        })
                                    }
                                    console.log("element_id :>> ", J), console.log("element_name :>> ", q), console.log("element_params :>> ", H), p.overlayClickTrack({
                                        element_id: J,
                                        element_name: q,
                                        element_params: H,
                                        sku_id: x || S,
                                        ware_name: O,
                                        status: M,
                                        ref_source: i
                                    }, n)
                                } catch (e) {
                                    console.warn("CMS埋点方法出错,错误信息:", e)
                                }
                            },
                            floorDateDeal: function(e) {
                                return JSON.parse(JSON.stringify(e)).map((function(e) {
                                    var t = u({}, e);
                                    if ([55, 29, 28, 26, 70, 89, 104].includes(t.type)) {
                                        var n = /^[0-9]+.?[0-9]*$/;
                                        (t.subConfigList || []).forEach((function(e) {
                                            n.test(e.additional.promotionPrice) ? (e.additional.isNumber = !0, e.additional.promotionPrice = g.formatPrice(e.additional.promotionPrice)) : e.additional.isNumber = !1, n.test(e.additional.price) && (e.additional.price = g.formatPrice(e.additional.price)), e.sku = e.additional.sku, e.wareType = e.additional.wareType, e.stockStatus = e.additional.wareStatus
                                        }))
                                    } else 35 === t.type && t.subConfigList && t.subConfigList.length ? t.subConfigList.length > 6 ? t.subConfigList.length = 6 : t.subConfigList.length > 2 && (t.subConfigList.length - 2) % 4 != 0 && (t.subConfigList.length = t.subConfigList.length - (t.subConfigList.length - 2) % 4) : 81 === t.type ? t.subConfigList = t.subConfigList.filter((function(e) {
                                        return e.liveActivityInfo
                                    })) : 108 === t.type ? t.subConfigList = t.subConfigList.filter((function(e) {
                                        var t;
                                        return null === (t = e.classifyCouponList) || void 0 === t ? void 0 : t.length
                                    })) : 201 === t.type && (t.subConfigList = t.subConfigList.map((function(e) {
                                        return e.cornerMark = e.cornerMark && e.cornerMark.split(",") || "", e
                                    })));
                                    return t
                                }))
                            },
                            atlasToOriginUrl: function(e) {
                                var t = function(e) {
                                    var t = e.split("?")[1],
                                        n = t.split("&"),
                                        r = {};
                                    return n.forEach((function(e) {
                                        var t = e.indexOf("="),
                                            n = e.substring(0, t),
                                            o = e.substring(t + 1, e.length);
                                        r[n] = o
                                    })), r
                                }(e);
                                return g.base64.decode(t.ext)
                            },
                            changeBackground: function(e) {
                                this.currentBack = e.backgroundUrl, this.$emit("changeTheme", {
                                    fontColor: e.fontColor,
                                    buttonColor: e.buttonColor
                                })
                            },
                            changeBackgroundBlur: function(e) {
                                this.blur = e
                            },
                            firstFloorIsCurrent: function(e) {
                                return this.cmsFloorInfo && this.cmsFloorInfo.length && this.cmsFloorInfo[0].type === e
                            }
                        }
                    }
                }).call(this, r("bc2e").default)
            },
            "15da": function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var r = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(n("a34a"));

                function o(e, t, n, r, o, i, a) {
                    try {
                        var s = e[i](a),
                            c = s.value
                    } catch (e) {
                        return void n(e)
                    }
                    s.done ? t(c) : Promise.resolve(c).then(r, o)
                }

                function i(e) {
                    return function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(r, i) {
                            var a = e.apply(t, n);

                            function s(e) {
                                o(a, r, i, s, c, "next", e)
                            }

                            function c(e) {
                                o(a, r, i, s, c, "throw", e)
                            }
                            s(void 0)
                        }))
                    }
                }
                var a = new(n("b49c").BuriedPoint),
                    s = getApp().globalData.$dmall,
                    c = s.router,
                    u = s.pathMap;
                t.default = {
                    data: function() {
                        return {
                            turnTableData: {},
                            getTimesSuccess: !1,
                            remainTimes: 0,
                            lotteryDrawInfos: [],
                            timesLeft: "",
                            timesRight: "",
                            integral: "",
                            token: "",
                            winnerInfoShow: !1,
                            userRewardShow: !1,
                            winnerList: [],
                            userWinningList: [],
                            currentPriceTab: 0,
                            showPriceToast: !1,
                            toastContent: "",
                            title: "",
                            dialogContent: "",
                            ensureText: "",
                            cancelText: "",
                            rewardTitle: "",
                            rewardContent: "",
                            rewardEnsureText: "",
                            rewardCancelText: "",
                            confirmText: "",
                            buttonUrl: "",
                            winAwardImg: "",
                            winAwardName: "",
                            moreRewardTip: "",
                            isStartAnimate: !1,
                            rewardRecordId: "",
                            taskId: ""
                        }
                    },
                    props: {
                        isLogin: {
                            type: Boolean,
                            default: !1
                        },
                        floorItem: {
                            type: Object,
                            default: function() {
                                return {}
                            }
                        },
                        floorInfo: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        },
                        background: {
                            type: String,
                            default: ""
                        },
                        bgColor: {
                            type: String,
                            default: ""
                        },
                        userRemainTimes: {
                            type: Function,
                            default: null
                        },
                        execLottery: {
                            type: Function,
                            default: null
                        },
                        queryCollectUserInfo: {
                            type: Function,
                            default: null
                        },
                        saveCollectUserInfo: {
                            type: Function,
                            default: null
                        },
                        onReservationSubmit: {
                            type: Function,
                            default: null
                        }
                    },
                    mounted: function() {
                        this.floorInfo[0] && (this.turnTableData = this.floorInfo[0] || {}), this.floorInfo[1] && (this.lotteryDrawInfos = this.floorInfo[1].lotteryDrawInfos || []), this.init()
                    },
                    computed: {
                        backgroundStyle: function() {
                            return this.background ? "background:url(".concat(this.background, ") no-repeat; background-size: 100% auto; background-position: top;") : "background: ".concat(this.bgColor)
                        }
                    },
                    methods: {
                        init: function() {
                            var e = this;
                            return i(r.default.mark((function t() {
                                var n, o, i;
                                return r.default.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, e.initWinnerInfo(), e.starting = !1, e.taskId = e.turnTableData.taskId || "", t.next = 6, e.userRemainTimes(e.taskId);
                                        case 6:
                                            (n = t.sent) && n.userTaskQualification ? (e.getTimesSuccess = !0, o = n.userTaskQualification, e.remainTimes = o.remainTimes, e.failureReason = o.failureReason || "", i = o.consumeResourceList || [], e.replaceN(i)) : e.getTimesSuccess = !1, t.next = 14;
                                            break;
                                        case 10:
                                            t.prev = 10, t.t0 = t.catch(0), e.getTimesSuccess = !1, console.warn(t.t0);
                                        case 14:
                                            return t.next = 16, e.$nextTick();
                                        case 16:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 10]
                                ])
                            })))()
                        },
                        initWinnerInfo: function() {
                            var e = this;
                            return i(r.default.mark((function t() {
                                var n;
                                return r.default.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (e.floorInfo[2] && 16 === e.floorInfo[2].displayType) {
                                                t.next = 2;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 2:
                                            e.winnerInfoShow = e.floorInfo[2].winnerInfoShow || !1, e.winnerList = e.floorInfo[2].winningList || [], e.userRewardShow = e.floorInfo[2].userRewardShow || !1, e.userWinningList = e.floorInfo[2].userWinningList || [], e.currentPriceTab = e.winnerInfoShow ? 0 : 1, e.winnerList.length > 4 && (n = e.winnerList.slice(0, 4), e.winnerList = e.winnerList.concat(n));
                                        case 8:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        start: function() {
                            var e = this;
                            return i(r.default.mark((function t() {
                                return r.default.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (e.track(!1), e.isLogin) {
                                                t.next = 4;
                                                break
                                            }
                                            return c.navigateTo(u.login.path), t.abrupt("return", !1);
                                        case 4:
                                            if (e.starting) {
                                                t.next = 17;
                                                break
                                            }
                                            if (e.starting = !0, !e.getTimesSuccess) {
                                                t.next = 15;
                                                break
                                            }
                                            if (!(e.remainTimes <= 0 && e.failureReason)) {
                                                t.next = 11;
                                                break
                                            }
                                            e.checkRules(e.failureReason), t.next = 13;
                                            break;
                                        case 11:
                                            return t.next = 13, e.getWinnerInfo();
                                        case 13:
                                            t.next = 17;
                                            break;
                                        case 15:
                                            return t.next = 17, e.getWinnerInfo();
                                        case 17:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        getWinnerInfo: function() {
                            var e = this;
                            return i(r.default.mark((function t() {
                                var n, o, i, a;
                                return r.default.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, e.execLottery(e.taskId);
                                        case 3:
                                            (n = t.sent) && n.rewardInfoList ? (n.userTaskQualification ? (e.getTimesSuccess = !0, o = n.userTaskQualification, e.remainTimes = o.remainTimes, e.failureReason = o.failureReason || "", i = o.consumeResourceList || [], e.replaceN(i)) : e.getTimesSuccess = !1, a = n.rewardInfoList, e.rewardItemId = a[0].rewardItemId, e.rewardRecordId = a[0].rewardRecordId, a.length > 1 ? e.moreRewardTip = e.floorItem.moreRewardTip || "" : e.moreRewardTip = "", e.checkRewardInfo(e.rewardItemId)) : n.failureReasonType ? e.checkRules(n.failureReasonType) : (e.$refs.lottieCom.showToast("活动太火爆了，请稍后再试~"), e.starting = !1), t.next = 12;
                                            break;
                                        case 7:
                                            t.prev = 7, t.t0 = t.catch(0), console.warn(t.t0), e.$refs.lottieCom.showToast(t.t0.result || "活动太火爆了，请稍后再试~"), e.starting = !1;
                                        case 12:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 7]
                                ])
                            })))()
                        },
                        checkRewardInfo: function(e) {
                            var t = this.turnTableData.awards.findIndex((function(t) {
                                return t.rewardItemId === e
                            }));
                            t >= 0 && this.startAnimate(this.turnTableData.awards[t], t), this.track(!0)
                        },
                        showRewardDialog: function(e) {
                            var t = !1,
                                n = 1 === e.scene;
                            1 !== e.collectType || n ? t = !1 : (t = !0, this.$refs.lottieCom.queryCollectInfo(this.rewardItemId, this.rewardRecordId, 0)), this.rewardContent = e.rewardName, n ? (this.rewardCancelText = "", this.rewardEnsureText = "去预约", this.buttonForwardUrl = "") : 1 === e.collectType ? e.buttonForwardUrl ? (this.rewardCancelText = e.buttonInfo, this.buttonForwardUrl = e.buttonForwardUrl, this.rewardEnsureText = "提交") : (this.rewardCancelText = "", this.rewardEnsureText = "提交", this.buttonForwardUrl = "") : e.buttonForwardUrl ? (this.rewardCancelText = "知道了", this.rewardEnsureText = e.buttonInfo, this.buttonForwardUrl = e.buttonForwardUrl) : (this.rewardCancelText = "", this.rewardEnsureText = "知道了", this.buttonForwardUrl = "");
                            var r = n ? {
                                taskId: this.taskId,
                                rewardRecordId: this.rewardRecordId,
                                rewardItemId: e.rewardItemId
                            } : null;
                            1 === e.winAwardTipsType ? (7 === e.rewardType ? this.rewardTitle = "" : this.rewardTitle = "恭喜您获得", this.$refs.lottieCom.showNormalRewardDialog({
                                rewardTitle: this.rewardTitle,
                                rewardContent: this.rewardContent,
                                rewardEnsureText: this.rewardEnsureText,
                                rewardCancelText: this.rewardCancelText,
                                buttonForwardUrl: this.buttonForwardUrl,
                                needCollect: t,
                                reservationScene: n,
                                reservationPayload: r,
                                batchId: e.batchId
                            })) : 2 === e.winAwardTipsType ? (this.winAwardImg = e.winAwardImg, this.$refs.lottieCom.showSpecialRewardDialog({
                                winAwardImg: this.winAwardImg,
                                rewardContent: this.rewardContent,
                                rewardEnsureText: this.rewardEnsureText,
                                rewardCancelText: this.rewardCancelText,
                                buttonForwardUrl: this.buttonForwardUrl,
                                needCollect: t,
                                reservationScene: n,
                                reservationPayload: r,
                                batchId: e.batchId
                            })) : 3 === e.winAwardTipsType && (this.winAwardImg = e.winAwardImg, this.$refs.lottieCom.showPictureRewardDialog({
                                winAwardImg: this.winAwardImg,
                                buttonColor: this.turnTableData.buttonColor,
                                buttonTextColor: this.turnTableData.buttonTextColor,
                                buttonName: 7 === e.rewardType ? this.turnTableData.noRewardButtonText : this.turnTableData.haveRewardButtonText,
                                batchId: e.batchId
                            })), this.starting = !1, this.resetWinnerInfo(e)
                        },
                        resetWinnerInfo: function(e) {
                            this.userRewardShow && this.userWinningList.unshift({
                                winAwardInfo: e.rewardName,
                                rewardType: e.rewardType,
                                rewardTime: (new Date).getTime(),
                                winAwardTipsType: e.winAwardTipsType,
                                buttonForwardUrl: e.buttonForwardUrl,
                                buttonInfo: e.buttonInfo,
                                winAwardImg: e.winAwardImg,
                                id: e.rewardItemId,
                                rewardRecordId: this.rewardRecordId,
                                collectType: e.collectType,
                                collectUserType: 0,
                                scene: e.scene,
                                hasAppointmented: !0 === e.hasAppointmented,
                                batchId: e.batchId || null
                            })
                        },
                        checkRules: function(e) {
                            var t = this.turnTableData.rules.find((function(t) {
                                return t.code === e
                            }));
                            t && (1 === t.type ? this.$refs.lottieCom.showToast(t.tipsInfo) : 2 === t.type && (this.dialogContent = t.tipsInfo, t.buttonForwardUrl ? (this.cancelText = "知道了", this.ensureText = t.buttonInfo, this.buttonForwardUrl = t.buttonForwardUrl) : (this.cancelText = "", this.ensureText = "知道了", this.buttonForwardUrl = ""), this.$refs.lottieCom.showFailureRemindDialog({
                                title: "",
                                dialogContent: this.dialogContent,
                                ensureText: this.ensureText,
                                cancelText: this.cancelText,
                                buttonForwardUrl: this.buttonForwardUrl
                            }))), this.starting = !1
                        },
                        replaceN: function(e) {
                            var t = this;
                            this.lotteryDrawInfos.forEach((function(n) {
                                if (!n.drawInfo) return !1;
                                1 === n.code ? (t.timesLeft = n.drawInfo.split("N")[0], t.timesRight = n.drawInfo.split("N")[1]) : 2 === n.code && e.length ? e.forEach((function(e) {
                                    if (n.code === e.type) {
                                        var r = n.drawInfo.split("N")[0],
                                            o = n.drawInfo.split("N")[1];
                                        t.integral = r + e.remains + o
                                    }
                                })) : 8 === n.code && e.length && e.forEach((function(e) {
                                    if (n.code === e.type) {
                                        var r = n.drawInfo.split("N")[0],
                                            o = n.drawInfo.split("N")[1];
                                        t.token = r + e.remains + o
                                    }
                                }))
                            }))
                        },
                        changePriceTab: function(e) {
                            this.currentPriceTab = e.activeId
                        },
                        saveMessageSuccess: function(e) {
                            this.userWinningList[e].collectUserType = 1
                        },
                        showReward: function() {
                            this.$emit("showReward")
                        },
                        closeReward: function() {
                            this.$emit("closeReward")
                        },
                        track: function(e) {
                            try {
                                var t = this.floorItem,
                                    n = t.type,
                                    r = t.orderNo,
                                    o = void 0 === r ? 0 : r,
                                    i = t.name,
                                    s = void 0 === i ? "" : i,
                                    c = t.parentId,
                                    u = void 0 === c ? "" : c,
                                    l = t.id,
                                    d = void 0 === l ? "" : l,
                                    f = "".concat(n, "_").concat(o),
                                    p = "".concat(s, "_").concat(o),
                                    h = {
                                        page_tab_id: "",
                                        layer_template_id: "",
                                        layer_template_schedule_id: "",
                                        layer_type: n,
                                        floor_id: u > 0 ? u : d,
                                        layer_first_order_no: o,
                                        layer_second_order_no: "",
                                        layout_name: s,
                                        position_id: "",
                                        sku_id: "",
                                        action_type: 8,
                                        page_vender_id: "",
                                        page_store_id: "",
                                        task_id: this.taskId
                                    };
                                e && (h.success = 1), a.overlayClickTrack({
                                    element_id: f,
                                    element_name: p,
                                    element_params: h
                                })
                            } catch (e) {
                                console.warn("CMS埋点方法出错,错误信息:", e)
                            }
                        }
                    }
                }
            }
        }
    ]);
}, {
    isPage: false,
    isComponent: false,
    currentFile: 'packageCmsComp/common/vendor.js'
});