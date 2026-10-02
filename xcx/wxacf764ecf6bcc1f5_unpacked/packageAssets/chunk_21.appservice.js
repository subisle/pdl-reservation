$gwx15_XC_14 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx15_XC_14 || [];

        function gz$gwx15_XC_14_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx15_XC_14_1) return __WXML_GLOBAL__.ops_cached.$gwx15_XC_14_1
            __WXML_GLOBAL__.ops_cached.$gwx15_XC_14_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'growthValue data-v-e7dc37a2'])
                Z([
                    [2, '>'],
                    [
                        [7],
                        [3, 'scrollTop']
                    ],
                    [1, 0]
                ])
                Z([3, 'container data-v-e7dc37a2'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'homepageStyles']
                    ],
                    [3, 'container']
                ])
                Z([
                    [7],
                    [3, 'headBgColor']
                ])
                Z([
                    [2, '!'],
                    [
                        [7],
                        [3, 'showEmpty']
                    ]
                ])
                Z([3, 'detail-wrapper data-v-e7dc37a2'])
                Z([
                    [6],
                    [
                        [7],
                        [3, '$root']
                    ],
                    [3, 'g0']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, '$root']
                    ],
                    [3, 'g1']
                ])
                Z([3, '__l'])
                Z([3, 'data-v-e7dc37a2'])
                Z([3, '没有更多内容了'])
                Z([3, '352578a5-1'])
                Z([
                    [7],
                    [3, 'showEmpty']
                ])
                Z(z[9])
                Z(z[10])
                Z([
                    [7],
                    [3, 'emptyHeight']
                ])
                Z([3, 'record'])
                Z([3, '未查询到相关记录哦！'])
                Z([3, '352578a5-2'])
            })(__WXML_GLOBAL__.ops_cached.$gwx15_XC_14_1);
            return __WXML_GLOBAL__.ops_cached.$gwx15_XC_14_1
        }
        __WXML_GLOBAL__.ops_set.$gwx15_XC_14 = z;
        __WXML_GLOBAL__.ops_init.$gwx15_XC_14 = true;
        var x = ['./packageAssets/growthValue/growthValue.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx15_XC_14_1()
            var h1I = _n('view')
            _rz(z, h1I, 'class', 0, e, s, gg)
            var o2I = _v()
            _(h1I, o2I)
            if (_oz(z, 1, e, s, gg)) {
                o2I.wxVkey = 1
            }
            var c3I = _mz(z, 'view', ['class', 2, 'style', 1], [], e, s, gg)
            var o4I = _v()
            _(c3I, o4I)
            if (_oz(z, 4, e, s, gg)) {
                o4I.wxVkey = 1
            }
            var l5I = _v()
            _(c3I, l5I)
            if (_oz(z, 5, e, s, gg)) {
                l5I.wxVkey = 1
                var t7I = _n('view')
                _rz(z, t7I, 'class', 6, e, s, gg)
                var e8I = _v()
                _(t7I, e8I)
                if (_oz(z, 7, e, s, gg)) {
                    e8I.wxVkey = 1
                }
                var b9I = _v()
                _(t7I, b9I)
                if (_oz(z, 8, e, s, gg)) {
                    b9I.wxVkey = 1
                    var o0I = _mz(z, 'ga-footer-view', ['bind:__l', 9, 'class', 1, 'footerText', 2, 'vueId', 3], [], e, s, gg)
                    _(b9I, o0I)
                }
                e8I.wxXCkey = 1
                b9I.wxXCkey = 1
                b9I.wxXCkey = 3
                _(l5I, t7I)
            }
            var a6I = _v()
            _(c3I, a6I)
            if (_oz(z, 13, e, s, gg)) {
                a6I.wxVkey = 1
                var xAJ = _mz(z, 'empty-status', ['bind:__l', 14, 'class', 1, 'defaultHeight', 2, 'logoUrl', 3, 'tipText', 4, 'vueId', 5], [], e, s, gg)
                _(a6I, xAJ)
            }
            o4I.wxXCkey = 1
            l5I.wxXCkey = 1
            l5I.wxXCkey = 3
            a6I.wxXCkey = 1
            a6I.wxXCkey = 3
            _(h1I, c3I)
            o2I.wxXCkey = 1
            _(r, h1I)
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
                g = "$gwx15_XC_14";
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
if (__vd_version_info__.delayedGwx || false) $gwx15_XC_14();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packageAssets/growthValue/growthValue.wxml'] = [$gwx15_XC_14, './packageAssets/growthValue/growthValue.wxml'];
else __wxAppCode__['packageAssets/growthValue/growthValue.wxml'] = $gwx15_XC_14('./packageAssets/growthValue/growthValue.wxml');;
__wxRoute = "packageAssets/growthValue/growthValue";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packageAssets/growthValue/growthValue.js";
define("packageAssets/growthValue/growthValue.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
        ["packageAssets/growthValue/growthValue"], {
            "330b": function(t, e, n) {
                (function(t, e) {
                    n("6cdc"), r(n("66fd"));
                    var o = r(n("e358"));

                    function r(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }
                    t.__webpack_require_UNI_MP_PLUGIN__ = n, e(o.default)
                }).call(this, n("bc2e").default, n("543d").createPage)
            },
            9163: function(t, e, n) {
                n.r(e);
                var o = n("a861"),
                    r = n.n(o);
                for (var a in o)["default"].indexOf(a) < 0 && function(t) {
                    n.d(e, t, (function() {
                        return o[t]
                    }))
                }(a);
                e.default = r.a
            },
            a861: function(t, e, n) {
                (function(t) {
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.default = void 0;
                    var o = c(n("a34a")),
                        r = n("7836"),
                        a = c(n("3b77")),
                        i = c(n("2f30"));

                    function c(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }

                    function u(t) {
                        return function(t) {
                            if (Array.isArray(t)) return h(t)
                        }(t) || function(t) {
                            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                        }(t) || function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return h(t, e);
                                var n = {}.toString.call(t).slice(8, -1);
                                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? h(t, e) : void 0
                            }
                        }(t) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function h(t, e) {
                        (null == e || e > t.length) && (e = t.length);
                        for (var n = 0, o = Array(e); n < e; n++) o[n] = t[n];
                        return o
                    }

                    function s(t, e, n, o, r, a, i) {
                        try {
                            var c = t[a](i),
                                u = c.value
                        } catch (t) {
                            return void n(t)
                        }
                        c.done ? e(u) : Promise.resolve(u).then(o, r)
                    }

                    function l(t) {
                        return function() {
                            var e = this,
                                n = arguments;
                            return new Promise((function(o, r) {
                                var a = t.apply(e, n);

                                function i(t) {
                                    s(a, o, r, i, c, "next", t)
                                }

                                function c(t) {
                                    s(a, o, r, i, c, "throw", t)
                                }
                                i(void 0)
                            }))
                        }
                    }
                    var f = getApp().globalData.$dmall,
                        g = f.dmallApi,
                        d = f.router,
                        p = f.EVT,
                        m = f.DOMAIN;
                    e.default = {
                        data: function() {
                            return {
                                theme: {},
                                navHeight: 0,
                                menuButtonHeight: 0,
                                emptyHeight: 0,
                                systemInfo: {},
                                scrollTop: 0,
                                headBgColor: "",
                                headfontColor: "",
                                growth: "0",
                                growthDesc: "0",
                                instructionsUrl: "",
                                growthList: [],
                                pageNum: 1,
                                hasMore: !1,
                                showEmpty: !1
                            }
                        },
                        computed: {
                            homepageStyles: function() {
                                return {
                                    headerLogoBg: "padding-top: ".concat(this.navHeight, "px; height: ").concat(this.navHeight + this.menuButtonHeight, "px;"),
                                    navHead: "height: ".concat(this.navHeight + this.menuButtonHeight, "px; background: ").concat(this.headBgColor),
                                    headerArrow: "width: ".concat(this.menuButtonHeight, "px;height: ").concat(this.menuButtonHeight, "px; top: ").concat(this.navHeight),
                                    container: "margin-top: ".concat(this.navHeight + this.menuButtonHeight, "px;min-height: ").concat(this.systemInfo.screenHeight - this.navHeight - this.menuButtonHeight, "px")
                                }
                            }
                        },
                        onLoad: function() {
                            var e = this;
                            g.getSystemInfoAsync().then((function(n) {
                                e.systemInfo = n;
                                var o = t.getMenuButtonBoundingClientRect();
                                e.navHeight = n.statusBarHeight, e.menuButtonHeight = 2 * (o.top - n.statusBarHeight) + o.height, e.emptyHeight = n.windowHeight - e.navHeight - e.menuButtonHeight - g.toPx(264)
                            }))
                        },
                        onShow: function() {
                            this.theme = r.mytheme.getTheme(), this.getVipLevelConfig(), this.getGrowth()
                        },
                        onReachBottom: function() {
                            if (!this.hasMore) return !1;
                            this.getGrowth()
                        },
                        onPageScroll: function(t) {
                            this.scrollTop = t.scrollTop
                        },
                        methods: {
                            getVipLevelConfig: function() {
                                var t = this;
                                return l(o.default.mark((function e() {
                                    var n, r, a, c, u;
                                    return o.default.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, i.default.getVipLevelConfig();
                                            case 3:
                                                (n = e.sent) && n.data && n.data.memberLevelInfo && ((r = n.data.memberLevelInfo || {}).levelConfigInfo && (a = r.levelConfigInfo, c = JSON.parse(a.backgroundColorVal) || {}, u = JSON.parse(a.nameColorVal) || {}, t.headBgColor = c.hex || "", t.headfontColor = u.hex || "")), e.next = 10;
                                                break;
                                            case 7:
                                                e.prev = 7, e.t0 = e.catch(0), console.warn(e.t0);
                                            case 10:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 7]
                                    ])
                                })))()
                            },
                            getGrowth: function() {
                                var t = this;
                                return l(o.default.mark((function e() {
                                    var n, r;
                                    return o.default.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.prev = 0, e.next = 3, a.default.getGrowth({
                                                    pageSize: 20,
                                                    pageNum: t.pageNum
                                                });
                                            case 3:
                                                (n = e.sent) && n.data && n.data.growthDetails && (r = n.data.growthDetails, t.growth = r.growth, t.growthDesc = r.growthDesc, t.instructionsUrl = r.rule || "".concat(p, "a.").concat(m, "/act/rjLNEeXoG85Hhn.html?nopos=0&tpc=a_466122"), t.growthList = [].concat(u(t.growthList), u(r.recordList)), t.hasMore = r.hasMore, t.pageNum += 1, t.growthList.length ? t.showEmpty = !1 : t.showEmpty = !0), e.next = 10;
                                                break;
                                            case 7:
                                                e.prev = 7, e.t0 = e.catch(0), console.warn(e.t0);
                                            case 10:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e, null, [
                                        [0, 7]
                                    ])
                                })))()
                            },
                            jumpUrl: function(t) {
                                switch (t) {
                                    case "back":
                                        d.navigateBack();
                                        break;
                                    case "help":
                                        d.navigateTo(this.instructionsUrl)
                                }
                            }
                        }
                    }
                }).call(this, n("543d").default)
            },
            af5f: function(t, e, n) {},
            c3ca: function(t, e, n) {
                var o = n("af5f");
                n.n(o).a
            },
            dee6: function(t, e, n) {
                n.d(e, "b", (function() {
                    return o
                })), n.d(e, "c", (function() {
                    return r
                })), n.d(e, "a", (function() {}));
                var o = function() {
                        var t = this,
                            e = (t.$createElement, t._self._c, t.showEmpty ? null : t.growthList.length),
                            n = t.showEmpty ? null : t.growthList.length;
                        t.$mp.data = Object.assign({}, {
                            $root: {
                                g0: e,
                                g1: n
                            }
                        })
                    },
                    r = []
            },
            e358: function(t, e, n) {
                n.r(e);
                var o = n("dee6"),
                    r = n("9163");
                for (var a in r)["default"].indexOf(a) < 0 && function(t) {
                    n.d(e, t, (function() {
                        return r[t]
                    }))
                }(a);
                n("c3ca");
                var i = n("f0c5"),
                    c = Object(i.a)(r.default, o.b, o.c, !1, null, "e7dc37a2", null, !1, o.a, void 0);
                e.default = c.exports
            }
        },
        [
            ["330b", "common/runtime", "common/vendor", "packageAssets/common/vendor"]
        ]
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packageAssets/growthValue/growthValue.js'
});
require("packageAssets/growthValue/growthValue.js");