$gwx_XC_12 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_12 || [];

        function gz$gwx_XC_12_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_12_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, '__l'])
                Z([3, '__e'])
                Z([3, 'data-v-c8039174'])
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
                                    [1, '^onInit']
                                ],
                                [
                                    [4],
                                    [
                                        [5],
                                        [
                                            [4],
                                            [
                                                [5],
                                                [1, 'getStatusHeight']
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ])
                Z([
                    [7],
                    [3, 'bgColor']
                ])
                Z([
                    [7],
                    [3, 'position']
                ])
                Z([3, '2c7933dc-1'])
                Z([
                    [4],
                    [
                        [5],
                        [1, 'default']
                    ]
                ])
                Z([3, 'nav-head data-v-c8039174'])
                Z([
                    [2, '!'],
                    [
                        [7],
                        [3, 'onlyShowBack']
                    ]
                ])
                Z([
                    [7],
                    [3, 'onlyShowBack']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_12_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_1
        }

        function gz$gwx_XC_12_2() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_12_2) return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_2
            __WXML_GLOBAL__.ops_cached.$gwx_XC_12_2 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'custom-nav-bar data-v-53eab51e'])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'position']
                    ],
                    [1, 'sticky']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_12_2);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_12_2
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_12 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_12 = true;
        var x = ['./components/SubCustomNavBar/CustomNavBar.wxml', './node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_12_1()
            var xYG = _mz(z, 'g-a-custom-nav-bar', ['bind:__l', 0, 'bind:onInit', 1, 'class', 1, 'data-event-opts', 2, 'navBarColor', 3, 'position', 4, 'vueId', 5, 'vueSlots', 6], [], e, s, gg)
            var oZG = _n('view')
            _rz(z, oZG, 'class', 8, e, s, gg)
            var f1G = _v()
            _(oZG, f1G)
            if (_oz(z, 9, e, s, gg)) {
                f1G.wxVkey = 1
            }
            var c2G = _v()
            _(oZG, c2G)
            if (_oz(z, 10, e, s, gg)) {
                c2G.wxVkey = 1
            }
            var h3G = _n('slot')
            _(oZG, h3G)
            f1G.wxXCkey = 1
            c2G.wxXCkey = 1
            _(xYG, oZG)
            _(r, xYG)
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
            var z = gz$gwx_XC_12_2()
            var c5G = _n('view')
            _rz(z, c5G, 'class', 0, e, s, gg)
            var l7G = _n('slot')
            _(c5G, l7G)
            var o6G = _v()
            _(c5G, o6G)
            if (_oz(z, 1, e, s, gg)) {
                o6G.wxVkey = 1
            }
            o6G.wxXCkey = 1
            _(r, c5G)
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
                g = "$gwx_XC_12";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_12();
if (__vd_version_info__.delayedGwx) __wxAppCode__['components/SubCustomNavBar/CustomNavBar.wxml'] = [$gwx_XC_12, './components/SubCustomNavBar/CustomNavBar.wxml'];
else __wxAppCode__['components/SubCustomNavBar/CustomNavBar.wxml'] = $gwx_XC_12('./components/SubCustomNavBar/CustomNavBar.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar.wxml'] = [$gwx_XC_12, './node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar.wxml'];
else __wxAppCode__['node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar.wxml'] = $gwx_XC_12('./node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar.wxml');;
__wxRoute = "components/SubCustomNavBar/CustomNavBar";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "components/SubCustomNavBar/CustomNavBar.js";
define("components/SubCustomNavBar/CustomNavBar.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    (global.webpackJsonp = global.webpackJsonp || []).push([
        ["components/SubCustomNavBar/CustomNavBar"], {
            2870: function(t, e, n) {
                n.r(e);
                var a = n("a945"),
                    o = n("fead");
                for (var i in o)["default"].indexOf(i) < 0 && function(t) {
                    n.d(e, t, (function() {
                        return o[t]
                    }))
                }(i);
                n("3a11");
                var u = n("f0c5"),
                    c = Object(u.a)(o.default, a.b, a.c, !1, null, "c8039174", null, !1, a.a, void 0);
                e.default = c.exports
            },
            "3a11": function(t, e, n) {
                var a = n("ebff");
                n.n(a).a
            },
            a945: function(t, e, n) {
                n.d(e, "b", (function() {
                    return a
                })), n.d(e, "c", (function() {
                    return o
                })), n.d(e, "a", (function() {}));
                var a = function() {
                        this.$createElement;
                        this._self._c
                    },
                    o = []
            },
            e120: function(t, e, n) {
                (function(t) {
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.default = void 0;
                    var a = getApp().globalData,
                        o = a.$dmall,
                        i = (o.dmallApi, o.router),
                        u = o.pathMap;
                    e.default = {
                        name: "CustomNavBar",
                        components: {
                            GACustomNavBar: function() {
                                Promise.all([n.e("common/vendor"), n.e("node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar")]).then(function() {
                                    return resolve(n("1649"))
                                }.bind(null, n)).catch(n.oe)
                            }
                        },
                        props: {
                            backBtnWrapStyle: {
                                type: String,
                                default: ""
                            },
                            title: {
                                type: String,
                                default: ""
                            },
                            bgColor: {
                                type: String,
                                default: "#ffffff"
                            },
                            onlyShowBack: {
                                type: Boolean,
                                default: !1
                            },
                            position: {
                                type: String,
                                default: "sticky"
                            },
                            isBgLight: {
                                type: Boolean,
                                default: !1
                            },
                            backBtnWrapStyleV2: {
                                type: String,
                                default: ""
                            }
                        },
                        data: function() {
                            return {
                                load: !1,
                                homeBtnHeight: 0
                            }
                        },
                        computed: {
                            navStyle: function() {
                                return {
                                    navLeft: "height: ".concat(this.homeBtnHeight, "px; width: ").concat(this.homeBtnHeight / 64 * 174, "px;"),
                                    navBtn: "height: ".concat(this.homeBtnHeight, "px; width: ").concat(this.homeBtnHeight / 128 * 174, "px;")
                                }
                            }
                        },
                        mounted: function() {
                            var e = t.getMenuButtonBoundingClientRect();
                            this.homeBtnHeight = e.height
                        },
                        methods: {
                            getStatusHeight: function(t) {
                                this.$emit("getNavHeight", t.navBarHeight)
                            },
                            goHome: function() {
                                this.$emit("track"), i.navigateTo(u.home.path, {
                                    businessScene: a.mainScene
                                })
                            },
                            navigateJump: function(t) {
                                "home" === t ? i.reLaunch(u.home.path) : this.isBgLight ? this.emitGoBack() : i.navigateBack()
                            },
                            emitGoBack: function() {
                                this.$emit("goBack")
                            }
                        }
                    }
                }).call(this, n("543d").default)
            },
            ebff: function(t, e, n) {},
            fead: function(t, e, n) {
                n.r(e);
                var a = n("e120"),
                    o = n.n(a);
                for (var i in a)["default"].indexOf(i) < 0 && function(t) {
                    n.d(e, t, (function() {
                        return a[t]
                    }))
                }(i);
                e.default = o.a
            }
        }
    ]), (global.webpackJsonp = global.webpackJsonp || []).push(["components/SubCustomNavBar/CustomNavBar-create-component", {
            "components/SubCustomNavBar/CustomNavBar-create-component": function(t, e, n) {
                n("543d").createComponent(n("2870"))
            }
        },
        [
            ["components/SubCustomNavBar/CustomNavBar-create-component"]
        ]
    ]);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'components/SubCustomNavBar/CustomNavBar.js'
});
require("components/SubCustomNavBar/CustomNavBar.js");;
__wxRoute = "node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar.js";
define("node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var t = require("../../../../../@babel/runtime/helpers/typeof");
    (global.webpackJsonp = global.webpackJsonp || []).push([
        ["node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar"], {
            "0dc0": function(e, n, a) {
                (function(e) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }), n.default = void 0;
                    var i = function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }(a("bd49"));

                    function o(e) {
                        return (o = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                            return t(e)
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                        })(e)
                    }
                    var s = "__jimo_customBar",
                        r = "__jimo_menu",
                        u = "systemInfo",
                        c = e.getStorageSync(r) || {};
                    if (!(c && Object.keys(c).length > 0)) {
                        var l = e.getMenuButtonBoundingClientRect();
                        e.setStorageSync(r, l), c = l
                    }
                    var h = e.getLaunchOptionsSync();
                    n.default = {
                        name: "CustomNavBar",
                        mixins: [i.default],
                        props: {
                            backgroundImage: {
                                type: String,
                                default: ""
                            },
                            backgroundSize: {
                                type: String,
                                default: "100% 100%"
                            },
                            backgroundPosition: {
                                type: String,
                                default: "center center"
                            },
                            navBarColor: {
                                type: String,
                                default: "transparent"
                            },
                            statusBarColor: {
                                type: String,
                                default: "transparent"
                            },
                            position: {
                                type: 0,
                                default: "fixed"
                            },
                            zIndex: {
                                type: Number,
                                default: 9
                            },
                            avoidAutoPaddingLeft: {
                                type: Boolean,
                                default: !1
                            }
                        },
                        data: function() {
                            return {
                                statusHeight: 0,
                                navBarHeight: 0,
                                fullHeight: 0
                            }
                        },
                        computed: {
                            statusBarStyle: function() {
                                return this.styleParse({
                                    height: this.statusHeight + "px",
                                    "background-color": this.statusBarColor
                                })
                            },
                            navBarStyle: function() {
                                var t = {
                                    position: "sticky" === this.position ? "fixed" : this.position,
                                    "z-index": this.zIndex
                                };
                                return this.backgroundImage ? t.background = "".concat(this.navBarColor, ' url("').concat(this.backgroundImage, '") ').concat(this.backgroundPosition, " / ").concat(this.backgroundSize, " no-repeat") : t.background = "".concat(this.navBarColor), this.styleParse(t)
                            },
                            placeHolderStyle: function() {
                                return this.styleParse({
                                    height: this.fullHeight + "px"
                                })
                            },
                            contentWrapperStyle: function() {
                                return this.styleParse({
                                    height: this.navBarHeight + "px"
                                })
                            }
                        },
                        beforeMount: function() {
                            var t = this;
                            this.initStatusBarMessage().then((function(e) {
                                e && t.$nextTick((function() {
                                    t.getContainerPosition()
                                }))
                            }))
                        },
                        methods: {
                            initStatusBarMessage: function() {
                                var t = this,
                                    n = e.getStorageSync(s) || null;
                                return new Promise((function(a) {
                                    if (n && n.statusHeight) t.statusHeight = n.statusHeight, t.fullHeight = n.fullHeight, t.navBarHeight = n.navBarHeight, a(!1), t.$emit("onInit", {
                                        statusBarHeight: t.statusHeight,
                                        navBarHeight: t.fullHeight
                                    });
                                    else {
                                        var i = e.getStorageSync(u) || null;
                                        i && Object.keys(i).length > 0 ? (t.statusHeight = i.statusBarHeight, a(!0)) : e.getSystemInfo({
                                            success: function(e) {
                                                "object" === o(e) && Object.keys(e).length > 0 && (t.statusHeight = e.statusBarHeight, a(!0))
                                            }
                                        })
                                    }
                                }))
                            },
                            getContainerPosition: function() {
                                var t = this.statusHeight,
                                    n = c;
                                1434 === h.scene ? this.navBarHeight = 44 : this.navBarHeight = n.height + 2 * (n.top - t), this.fullHeight = this.navBarHeight + t, e.setStorage({
                                    key: s,
                                    data: {
                                        statusHeight: this.statusHeight,
                                        navBarHeight: this.navBarHeight,
                                        fullHeight: this.fullHeight
                                    }
                                }), this.$emit("onInit", {
                                    statusBarHeight: this.statusHeight,
                                    navBarHeight: this.fullHeight
                                })
                            }
                        }
                    }
                }).call(this, a("543d").default)
            },
            1649: function(t, e, n) {
                n.r(e);
                var a = n("ab5b"),
                    i = n("d518");
                for (var o in i)["default"].indexOf(o) < 0 && function(t) {
                    n.d(e, t, (function() {
                        return i[t]
                    }))
                }(o);
                n("6e24");
                var s = n("f0c5"),
                    r = Object(s.a)(i.default, a.b, a.c, !1, null, "53eab51e", null, !1, a.a, void 0);
                e.default = r.exports
            },
            "3f6c": function(t, e, n) {},
            "6e24": function(t, e, n) {
                var a = n("3f6c");
                n.n(a).a
            },
            ab5b: function(t, e, n) {
                n.d(e, "b", (function() {
                    return a
                })), n.d(e, "c", (function() {
                    return i
                })), n.d(e, "a", (function() {}));
                var a = function() {
                        this.$createElement;
                        this._self._c
                    },
                    i = []
            },
            d518: function(t, e, n) {
                n.r(e);
                var a = n("0dc0"),
                    i = n.n(a);
                for (var o in a)["default"].indexOf(o) < 0 && function(t) {
                    n.d(e, t, (function() {
                        return a[t]
                    }))
                }(o);
                e.default = i.a
            }
        }
    ]), (global.webpackJsonp = global.webpackJsonp || []).push(["node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar-create-component", {
            "node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar-create-component": function(t, e, n) {
                n("543d").createComponent(n("1649"))
            }
        },
        [
            ["node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar-create-component"]
        ]
    ]);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar.js'
});
require("node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar.js");