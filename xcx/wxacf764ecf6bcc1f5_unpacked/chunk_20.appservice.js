$gwx_XC_13 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_13 || [];

        function gz$gwx_XC_13_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_13_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_13_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_13_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [4],
                    [
                        [5],
                        [
                            [5],
                            [
                                [5],
                                [1, 'data-v-49fc548c']
                            ],
                            [1, 'vue-ref']
                        ],
                        [1, 'kv-nav-bar-list']
                    ]
                ])
                Z([3, 'navBarList'])
                Z([3, 'kvNavBarList'])
                Z([
                    [7],
                    [3, 'positionFormat']
                ])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'type']
                    ],
                    [1, 'flex']
                ])
                Z([
                    [4],
                    [
                        [5],
                        [
                            [5],
                            [
                                [5],
                                [1, 'kv-nav-bar-container']
                            ],
                            [1, 'data-v-49fc548c']
                        ],
                        [
                            [7],
                            [3, 'classFormat']
                        ]
                    ]
                ])
                Z([1, true])
                Z([3, 'kvNavBarContainer'])
                Z(z[6])
                Z([
                    [7],
                    [3, 'styleFormat']
                ])
                Z([
                    [7],
                    [3, 'show']
                ])
                Z([
                    [2, '&&'],
                    [
                        [2, '!'],
                        [
                            [7],
                            [3, 'hasSubText']
                        ]
                    ],
                    [
                        [2, '!'],
                        [
                            [7],
                            [3, 'hideActiveLine']
                        ]
                    ]
                ])
                Z(z[5])
                Z(z[6])
                Z(z[7])
                Z(z[6])
                Z(z[9])
                Z(z[10])
                Z(z[11])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'position']
                    ],
                    [1, 'sticky']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_13_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_13_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_13 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_13 = true;
        var x = ['./node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_13_1()
            var t9G = _mz(z, 'view', ['class', 0, 'data-ref', 1, 'id', 1, 'style', 2], [], e, s, gg)
            var e0G = _v()
            _(t9G, e0G)
            if (_oz(z, 4, e, s, gg)) {
                e0G.wxVkey = 1
                var oBH = _mz(z, 'view', ['class', 5, 'enableFlex', 1, 'id', 2, 'scrollX', 3, 'style', 4], [], e, s, gg)
                var xCH = _v()
                _(oBH, xCH)
                if (_oz(z, 10, e, s, gg)) {
                    xCH.wxVkey = 1
                    var fEH = _n('slot')
                    _(xCH, fEH)
                }
                var oDH = _v()
                _(oBH, oDH)
                if (_oz(z, 11, e, s, gg)) {
                    oDH.wxVkey = 1
                }
                xCH.wxXCkey = 1
                oDH.wxXCkey = 1
                _(e0G, oBH)
            } else {
                e0G.wxVkey = 2
                var cFH = _mz(z, 'scroll-view', ['class', 12, 'enableFlex', 1, 'id', 2, 'scrollX', 3, 'style', 4], [], e, s, gg)
                var hGH = _v()
                _(cFH, hGH)
                if (_oz(z, 17, e, s, gg)) {
                    hGH.wxVkey = 1
                    var cIH = _n('slot')
                    _(hGH, cIH)
                }
                var oHH = _v()
                _(cFH, oHH)
                if (_oz(z, 18, e, s, gg)) {
                    oHH.wxVkey = 1
                }
                hGH.wxXCkey = 1
                oHH.wxXCkey = 1
                _(e0G, cFH)
            }
            var bAH = _v()
            _(t9G, bAH)
            if (_oz(z, 19, e, s, gg)) {
                bAH.wxVkey = 1
            }
            e0G.wxXCkey = 1
            bAH.wxXCkey = 1
            _(r, t9G)
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
                g = "$gwx_XC_13";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_13();
if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList.wxml'] = [$gwx_XC_13, './node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList.wxml'];
else __wxAppCode__['node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList.wxml'] = $gwx_XC_13('./node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList.wxml');;
__wxRoute = "node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList.js";
define("node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    (global.webpackJsonp = global.webpackJsonp || []).push([
        ["node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList"], {
            "0dfc": function(t, e, n) {
                (function(t) {
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.default = void 0;
                    var o = function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }(n("a34a"));

                    function i(t, e, n, o, i, a, r) {
                        try {
                            var c = t[a](r),
                                u = c.value
                        } catch (t) {
                            return void n(t)
                        }
                        c.done ? e(u) : Promise.resolve(u).then(o, i)
                    }

                    function a(t) {
                        return function() {
                            var e = this,
                                n = arguments;
                            return new Promise((function(o, a) {
                                var r = t.apply(e, n);

                                function c(t) {
                                    i(r, o, a, c, u, "next", t)
                                }

                                function u(t) {
                                    i(r, o, a, c, u, "throw", t)
                                }
                                c(void 0)
                            }))
                        }
                    }
                    e.default = {
                        props: {
                            dynamicList: {
                                type: Array,
                                default: function() {
                                    return []
                                }
                            },
                            defaultIndex: {
                                type: Number,
                                default: 0
                            },
                            direction: {
                                type: String,
                                default: "horizontal"
                            },
                            activeLineColor: {
                                type: String,
                                default: ""
                            },
                            itemColor: {
                                type: String,
                                default: ""
                            },
                            itemFontSize: {
                                type: String,
                                default: ""
                            },
                            activeColor: {
                                type: String,
                                default: ""
                            },
                            activeFontSize: {
                                type: String,
                                default: ""
                            },
                            backgroundColor: {
                                type: String,
                                default: ""
                            },
                            secondBackgroundColor: {
                                type: String,
                                default: ""
                            },
                            backgroundImage: {
                                type: String,
                                default: ""
                            },
                            subTextColor: {
                                type: String,
                                default: ""
                            },
                            subTextFontSize: {
                                type: String,
                                default: ""
                            },
                            type: {
                                type: String,
                                default: ""
                            },
                            hideActiveLine: {
                                type: [Boolean, String],
                                default: !1
                            },
                            hasSubText: {
                                type: [Boolean, String],
                                default: !1
                            },
                            activeSubTextColor: {
                                type: String,
                                default: ""
                            },
                            activeSubTextFontSize: {
                                type: String,
                                default: ""
                            },
                            activeSubTextLeftBgColor: {
                                type: String,
                                default: "rgba(255,161,24,1)"
                            },
                            activeSubTextRightBgColor: {
                                type: String,
                                default: "rgba(255,104,10,1)"
                            },
                            position: {
                                type: String,
                                default: "static"
                            },
                            top: {
                                type: String,
                                default: "0rpx"
                            }
                        },
                        data: function() {
                            return {
                                show: !1,
                                theme: t.getStorageSync("theme"),
                                bottomLineStyle: null,
                                childrenList: []
                            }
                        },
                        computed: {
                            classFormat: function() {
                                return "".concat(this.direction, " ").concat(this.type, " ").concat(this.hasSubText ? "sub-nav-bar" : "")
                            },
                            styleFormat: function() {
                                return this.backgroundImage ? "background:".concat(this.backgroundColor || "", ' url("').concat(this.backgroundImage, '") center center / 100% 100% no-repeat') : this.backgroundColor ? this.secondBackgroundColor ? "background:linear-gradient(270deg, ".concat(this.secondBackgroundColor, " 0%, ").concat(this.backgroundColor, " 100%)") : "background-color:".concat(this.backgroundColor) : void 0
                            },
                            positionFormat: function() {
                                return "sticky" === this.position ? "position: -webkit-sticky;position: sticky; top: ".concat(this.top) : "position: ".concat(this.position, "; top: ").concat(this.top)
                            }
                        },
                        watch: {
                            itemColor: function() {
                                this.setCustomStyle()
                            },
                            itemFontSize: function() {
                                this.setCustomStyle()
                            },
                            activeColor: function() {
                                this.setCustomStyle()
                            },
                            activeFontSize: function() {
                                this.setCustomStyle()
                            },
                            defaultIndex: function(t) {
                                var e = this,
                                    n = this.$children;
                                n && n.forEach(function() {
                                    var n = a(o.default.mark((function n(i, a) {
                                        return o.default.wrap((function(n) {
                                            for (;;) switch (n.prev = n.next) {
                                                case 0:
                                                    if (a !== t) {
                                                        n.next = 7;
                                                        break
                                                    }
                                                    return i.setActiveIndex(!0), n.next = 4, i.$nextTick();
                                                case 4:
                                                    e.setActiveLinePosition(i), n.next = 8;
                                                    break;
                                                case 7:
                                                    i.setActiveIndex(!1);
                                                case 8:
                                                case "end":
                                                    return n.stop()
                                            }
                                        }), n)
                                    })));
                                    return function(t, e) {
                                        return n.apply(this, arguments)
                                    }
                                }())
                            },
                            dynamicList: function() {
                                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                                t.length !== e.length && this.initBaseConfig()
                            }
                        },
                        mounted: function() {
                            this.initBaseConfig()
                        },
                        methods: {
                            initBaseConfig: function() {
                                var t = this;
                                return a(o.default.mark((function e() {
                                    return o.default.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return t.show = !0, e.next = 3, t.$nextTick();
                                            case 3:
                                                t.scrollLeft = 0, 50, setTimeout((function() {
                                                    t.setDefaultIndex()
                                                }), 50);
                                            case 6:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))()
                            },
                            setCustomStyle: function(t) {
                                var e = t || this.$children,
                                    n = {
                                        normal: {
                                            color: this.itemColor,
                                            fontSize: this.itemFontSize
                                        },
                                        active: {
                                            color: this.activeColor || this.theme.mainColor,
                                            fontSize: this.activeFontSize
                                        },
                                        subText: {
                                            color: this.subTextColor,
                                            fontSize: this.subTextFontSize
                                        },
                                        activeSubText: {
                                            color: this.activeSubTextColor || this.theme.mainColor,
                                            fontSize: this.activeSubTextFontSize,
                                            background: "linear-gradient(270deg, ".concat(this.activeSubTextRightBgColor, " 0%,").concat(this.activeSubTextLeftBgColor, " 100%)")
                                        }
                                    };
                                e.forEach((function(t) {
                                    return t.setNavBarItemStyle(n)
                                }))
                            },
                            setDefaultIndex: function() {
                                var t = this,
                                    e = this.$children;
                                this.setCustomStyle(e), e.forEach((function(e, n) {
                                    t.type || e.setFixedMargin(), n === t.defaultIndex ? (e.setActiveIndex(!0), e.$nextTick(t.setActiveLinePosition(e))) : e.setActiveIndex(!1), void 0 !== t.hasSubText && e.setSubText(!0), t.listenNavBarItemTap(e)
                                }))
                            },
                            listenNavBarItemTap: function(t) {
                                var e = this;
                                t.$on("tapSelect", (function(t) {
                                    e.changeActiveNavBarItem(t)
                                }))
                            },
                            changeActiveNavBarItem: function(t) {
                                var e = this.$children,
                                    n = e.findIndex((function(e) {
                                        return e.dataId === t
                                    })),
                                    o = e[n];
                                e.map((function(e) {
                                    e.setActiveIndex(e.dataId === t)
                                })), this.setActiveLinePosition(o), this.$emit("onActiveChange", {
                                    activeId: t,
                                    activeIndex: n
                                })
                            },
                            getkvNavBarListBoundingClientRect: function() {
                                var e = this;
                                return a(o.default.mark((function n() {
                                    return o.default.wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return n.abrupt("return", new Promise((function(n) {
                                                    t.createSelectorQuery().in(e).select("#kvNavBarList").boundingClientRect((function(t) {
                                                        console.warn(t), n(t.left)
                                                    })).exec()
                                                })));
                                            case 1:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                })))()
                            },
                            setActiveLinePosition: function(t) {
                                var e = this;
                                t.$nextTick(a(o.default.mark((function n() {
                                    var i, a, r;
                                    return o.default.wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return n.next = 2, t.getNavBarItemDomElement();
                                            case 2:
                                                return i = n.sent, n.next = 5, e.getkvNavBarListBoundingClientRect();
                                            case 5:
                                                return a = n.sent, n.next = 8, e.getNavBarScrollPosition();
                                            case 8:
                                                r = n.sent, e.bottomLineStyle = "transform:translateX(".concat(i.left - a + r.scrollLeft, "px);width: ").concat(i.width, "px;background-color: ").concat(e.activeLineColor || e.theme.mainColor || "");
                                            case 10:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                }))))
                            },
                            getNavBarScrollPosition: function() {
                                var e = this;
                                return new Promise((function(n) {
                                    t.createSelectorQuery().in(e).select("#kvNavBarContainer").fields({
                                        scrollOffset: !0
                                    }, (function(t) {
                                        console.warn(t), n(t)
                                    })).exec()
                                }))
                            }
                        }
                    }
                }).call(this, n("543d").default)
            },
            "2ff9": function(t, e, n) {
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
            },
            "5f0b": function(t, e, n) {},
            bf663: function(t, e, n) {
                n.r(e);
                var o = n("2ff9"),
                    i = n("fe008");
                for (var a in i)["default"].indexOf(a) < 0 && function(t) {
                    n.d(e, t, (function() {
                        return i[t]
                    }))
                }(a);
                n("e4b7");
                var r = n("f0c5"),
                    c = Object(r.a)(i.default, o.b, o.c, !1, null, "49fc548c", null, !1, o.a, void 0);
                e.default = c.exports
            },
            e4b7: function(t, e, n) {
                var o = n("5f0b");
                n.n(o).a
            },
            fe008: function(t, e, n) {
                n.r(e);
                var o = n("0dfc"),
                    i = n.n(o);
                for (var a in o)["default"].indexOf(a) < 0 && function(t) {
                    n.d(e, t, (function() {
                        return o[t]
                    }))
                }(a);
                e.default = i.a
            }
        }
    ]), (global.webpackJsonp = global.webpackJsonp || []).push(["node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList-create-component", {
            "node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList-create-component": function(t, e, n) {
                n("543d").createComponent(n("bf663"))
            }
        },
        [
            ["node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList-create-component"]
        ]
    ]);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList.js'
});
require("node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList.js");