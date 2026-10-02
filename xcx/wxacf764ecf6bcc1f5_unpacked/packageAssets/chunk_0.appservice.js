$gwx15_XC_0 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx15_XC_0 || [];

        function gz$gwx15_XC_0_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx15_XC_0_1) return __WXML_GLOBAL__.ops_cached.$gwx15_XC_0_1
            __WXML_GLOBAL__.ops_cached.$gwx15_XC_0_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, '__l'])
                Z([3, 'data-v-3bffa5d1'])
                Z([3, '5a68da46-1'])
                Z([
                    [4],
                    [
                        [5],
                        [1, 'default']
                    ]
                ])
                Z([3, 'legalRightDetail data-v-3bffa5d1'])
                Z([
                    [7],
                    [3, 'equityDescription']
                ])
                Z([3, 'giftTitle data-v-3bffa5d1'])
                Z([
                    [2, '==='],
                    [
                        [6],
                        [
                            [7],
                            [3, 'equityDescription']
                        ],
                        [3, 'voucherType']
                    ],
                    [1, 2]
                ])
                Z([
                    [2, '>'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'equityDescription']
                        ],
                        [3, 'remainTimes']
                    ],
                    [1, 0]
                ])
                Z([
                    [2, '&&'],
                    [
                        [7],
                        [3, 'equityDescription']
                    ],
                    [
                        [2, '<='],
                        [
                            [6],
                            [
                                [7],
                                [3, 'equityDescription']
                            ],
                            [3, 'remainTimes']
                        ],
                        [1, 0]
                    ]
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx15_XC_0_1);
            return __WXML_GLOBAL__.ops_cached.$gwx15_XC_0_1
        }
        __WXML_GLOBAL__.ops_set.$gwx15_XC_0 = z;
        __WXML_GLOBAL__.ops_init.$gwx15_XC_0 = true;
        var x = ['./packageAssets/benefits/detail.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx15_XC_0_1()
            var oB = _mz(z, 'page-view', ['bind:__l', 0, 'class', 1, 'vueId', 1, 'vueSlots', 2], [], e, s, gg)
            var xC = _n('view')
            _rz(z, xC, 'class', 4, e, s, gg)
            var oD = _v()
            _(xC, oD)
            if (_oz(z, 5, e, s, gg)) {
                oD.wxVkey = 1
            }
            var fE = _n('view')
            _rz(z, fE, 'class', 6, e, s, gg)
            var cF = _v()
            _(fE, cF)
            if (_oz(z, 7, e, s, gg)) {
                cF.wxVkey = 1
            } else {
                cF.wxVkey = 2
                var hG = _v()
                _(cF, hG)
                if (_oz(z, 8, e, s, gg)) {
                    hG.wxVkey = 1
                } else {
                    hG.wxVkey = 2
                    var oH = _v()
                    _(hG, oH)
                    if (_oz(z, 9, e, s, gg)) {
                        oH.wxVkey = 1
                    }
                    oH.wxXCkey = 1
                }
                hG.wxXCkey = 1
            }
            cF.wxXCkey = 1
            _(xC, fE)
            oD.wxXCkey = 1
            _(oB, xC)
            _(r, oB)
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
                g = "$gwx15_XC_0";
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
if (__vd_version_info__.delayedGwx || false) $gwx15_XC_0();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packageAssets/benefits/detail.wxml'] = [$gwx15_XC_0, './packageAssets/benefits/detail.wxml'];
else __wxAppCode__['packageAssets/benefits/detail.wxml'] = $gwx15_XC_0('./packageAssets/benefits/detail.wxml');;
__wxRoute = "packageAssets/benefits/detail";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packageAssets/benefits/detail.js";
define("packageAssets/benefits/detail.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
        ["packageAssets/benefits/detail"], {
            "0142": function(e, t, n) {},
            "25f1": function(e, t, n) {
                var i = n("0142");
                n.n(i).a
            },
            "7feb": function(e, t, n) {
                n.r(t);
                var i = n("a872"),
                    r = n.n(i);
                for (var a in i)["default"].indexOf(a) < 0 && function(e) {
                    n.d(t, e, (function() {
                        return i[e]
                    }))
                }(a);
                t.default = r.a
            },
            a1df: function(e, t, n) {
                (function(e, t) {
                    n("6cdc"), r(n("66fd"));
                    var i = r(n("d190"));

                    function r(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    e.__webpack_require_UNI_MP_PLUGIN__ = n, t(i.default)
                }).call(this, n("bc2e").default, n("543d").createPage)
            },
            a872: function(e, t, n) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var i = o(n("a34a")),
                    r = o(n("07a4")),
                    a = o(n("c19a"));

                function o(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }

                function c(e, t, n, i, r, a, o) {
                    try {
                        var c = e[a](o),
                            s = c.value
                    } catch (e) {
                        return void n(e)
                    }
                    c.done ? t(s) : Promise.resolve(s).then(i, r)
                }

                function s(e) {
                    return function() {
                        var t = this,
                            n = arguments;
                        return new Promise((function(i, r) {
                            var a = e.apply(t, n);

                            function o(e) {
                                c(a, i, r, o, s, "next", e)
                            }

                            function s(e) {
                                c(a, i, r, o, s, "throw", e)
                            }
                            o(void 0)
                        }))
                    }
                }
                t.default = {
                    data: function() {
                        return {
                            theme: {},
                            navHeight: 0,
                            statusHeight: 0,
                            scrollWrapperHeight: 0,
                            Upward: !0,
                            couponFlag: !1,
                            giftList: 0,
                            styleObject: {},
                            nowCardNumber: 0,
                            startPosition: 0,
                            initDistance: 0,
                            slideArr: [],
                            cardArr: [],
                            equityDescription: {},
                            discountCode: [],
                            detailContentHeight: 0,
                            styleObjectLeft: ""
                        }
                    },
                    computed: {},
                    onLoad: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e;
                        this.requestParam = e, this.theme = this.$dmallApi.getTheme(), console.log("点击的第几个", t.currentlevel), this.cardArr = r.default.get("memberDataCache")[t.levelValue].levelWelfares, this.equityDescription = this.cardArr[t.currentlevel], this.codeItem(t.currentlevel)
                    },
                    methods: {
                        getNavHeight: function(e) {
                            this.navHeight = e
                        },
                        contentEvent: function() {
                            this.Upward = !this.Upward
                        },
                        hideFn: function() {
                            this.couponFlag = !1
                        },
                        catchFn: function() {
                            return !1
                        },
                        getItNowFn: function() {
                            var e = this;
                            return s(i.default.mark((function t() {
                                var n, o, c, s, u, l;
                                return i.default.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (n = JSON.parse(JSON.stringify(e.equityDescription)), 2 === Number(n.voucherType) || !(n.remainTimes <= 0) && n.canReceive) {
                                                t.next = 3;
                                                break
                                            }
                                            return t.abrupt("return");
                                        case 3:
                                            return o = r.default.get("memberDataCache"), c = o[e.requestParam.levelValue], t.next = 7, a.default.receiveUpgradeWelfare({
                                                welfareId: n.id,
                                                welfareVersion: n.welfareVersion,
                                                levelId: c.id
                                            });
                                        case 7:
                                            if (s = t.sent, 1 !== n.voucherType && 19 !== n.voucherType) {
                                                t.next = 12;
                                                break
                                            }!s || "0000" !== s.code && "51510001" !== s.code ? e.$pageView.showToast({
                                                title: s.errMsg,
                                                icon: 2
                                            }) : (u = s.data, n.remainTimes -= 1, u && u.receiveResult && (c.levelWelfares[e.nowCardNumber].remainTimes = u.receiveResult.remainTimes), r.default.set("cardEquityDataCache", o), e.$pageView.showToast({
                                                title: "领取成功",
                                                icon: 1
                                            })), t.next = 17;
                                            break;
                                        case 12:
                                            return t.next = 14, a.default.queryReceivedWelfares({
                                                welfareId: n.id,
                                                welfareVersion: n.welfareVersion,
                                                levelId: c.id
                                            });
                                        case 14:
                                            l = t.sent, e.discountCode = l.receivedWelfares.upgradeWelfares, e.couponFlag = !0;
                                        case 17:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        codeItem: function(e) {
                            var t = this;
                            return s(i.default.mark((function n() {
                                return i.default.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return n.next = 2, t.$nextTick();
                                        case 2:
                                            return t.styleObjectLeft = "".concat(285 - 180 * e, "rpx"), t.nowCardNumber = e, t.equityDescription = t.cardArr[e], n.next = 7, t.$nextTick();
                                        case 7:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })))()
                        },
                        touchStart: function(e) {
                            console.log(e), console.log("获取开始滚动时的距离", e.changedTouches[0].pageX), this.startPosition = e.changedTouches[0].pageX
                        },
                        touchMove: function(e) {
                            console.log(e), e.preventDefault();
                            var t = e.changedTouches[0].pageX - this.startPosition;
                            this.styleObjectLeft = "".concat(this.initDistance + t, "rpx")
                        },
                        touchEnd: function(e) {
                            var t = this,
                                n = this;
                            return n.styleObject.transition = "all 0.4s ease-in-out", console.log("滑动距离数组", n.slideArr), console.log("滑动到最后一个的距离", n.initDistance), n.initDistance = parseInt(n.styleObject.left), n.initDistance > n.slideArr[0] ? (n.codeItem(0), this.equityDescription = this.cardArr[0], console.log("礼包详情高度3", this.$refs.detailContent.offsetHeight), this.detailContentHeight = this.$refs.detailContent.offsetHeight || 0, !1) : n.initDistance < n.slideArr[n.slideArr.length - 1] ? (n.codeItem(n.slideArr.length - 1), this.equityDescription = this.cardArr[n.slideArr.length - 1], console.log("礼包详情高度4", this.$refs.detailContent.offsetHeight), this.detailContentHeight = this.$refs.detailContent.offsetHeight || 0, !1) : void n.slideArr.forEach((function(e, i) {
                                if (Math.abs(n.initDistance - e) < t.$refs.everyItem[0].offsetWidth / 2) return n.codeItem(i), t.equityDescription = t.cardArr[i], t.$nextTick((function() {
                                    console.log("礼包详情高度5", t.$refs.detailContent.offsetHeight), t.detailContentHeight = t.$refs.detailContent.offsetHeight || 0
                                })), !1
                            }))
                        },
                        copyText: function(e, t) {
                            this.$dmallApi.setClipboardData("".concat(e), "复制成功"), t ? this.$dmRouter.navigateTo(t) : this.couponFlag = !0
                        }
                    }
                }
            },
            d0fe: function(e, t, n) {
                n.d(t, "b", (function() {
                    return r
                })), n.d(t, "c", (function() {
                    return a
                })), n.d(t, "a", (function() {
                    return i
                }));
                var i = {
                        PageView: function() {
                            return Promise.all([n.e("common/vendor"), n.e("components/PageView/PageView")]).then(n.bind(null, "5741"))
                        }
                    },
                    r = function() {
                        this.$createElement;
                        this._self._c
                    },
                    a = []
            },
            d190: function(e, t, n) {
                n.r(t);
                var i = n("d0fe"),
                    r = n("7feb");
                for (var a in r)["default"].indexOf(a) < 0 && function(e) {
                    n.d(t, e, (function() {
                        return r[e]
                    }))
                }(a);
                n("25f1");
                var o = n("f0c5"),
                    c = Object(o.a)(r.default, i.b, i.c, !1, null, "3bffa5d1", null, !1, i.a, void 0);
                t.default = c.exports
            }
        },
        [
            ["a1df", "common/runtime", "common/vendor", "packageAssets/common/vendor"]
        ]
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packageAssets/benefits/detail.js'
});
require("packageAssets/benefits/detail.js");