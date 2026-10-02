$gwx_XC_11 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_11 || [];

        function gz$gwx_XC_11_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_11_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, '__e'])
                Z([
                    [4],
                    [
                        [5],
                        [
                            [5],
                            [
                                [5],
                                [
                                    [5],
                                    [
                                        [5],
                                        [1, '_section']
                                    ],
                                    [1, 'data-v-77b3eac4']
                                ],
                                [1, 'vue-ref']
                            ],
                            [
                                [7],
                                [3, 'classFormat']
                            ]
                        ],
                        [1, 'kv-nav-bar-item']
                    ]
                ])
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
                                    [1, 'tap']
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
                                                    [1, 'selectHandler']
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
                Z([3, 'navBarItem'])
                Z([
                    [2, '+'],
                    [1, 'navBarItem-'],
                    [
                        [7],
                        [3, 'dataId']
                    ]
                ])
                Z([3, 'middle-fragment _section data-v-77b3eac4'])
                Z([
                    [2, '&&'],
                    [
                        [7],
                        [3, 'showSubText']
                    ],
                    [
                        [7],
                        [3, 'subText']
                    ]
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_11_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_11 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_11 = true;
        var x = ['./node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_11_1()
            var aTG = _mz(z, 'view', ['bindtap', 0, 'class', 1, 'data-event-opts', 1, 'data-ref', 2, 'id', 3], [], e, s, gg)
            var tUG = _n('view')
            _rz(z, tUG, 'class', 5, e, s, gg)
            var bWG = _n('slot')
            _(tUG, bWG)
            var eVG = _v()
            _(tUG, eVG)
            if (_oz(z, 6, e, s, gg)) {
                eVG.wxVkey = 1
            }
            eVG.wxXCkey = 1
            _(aTG, tUG)
            _(r, aTG)
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
                g = "$gwx_XC_11";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_11();
if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem.wxml'] = [$gwx_XC_11, './node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem.wxml'];
else __wxAppCode__['node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem.wxml'] = $gwx_XC_11('./node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem.wxml');;
__wxRoute = "node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem.js";
define("node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    (global.webpackJsonp = global.webpackJsonp || []).push([
        ["node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem"], {
            "7ca6": function(t, e, n) {
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
            "7cc0": function(t, e, n) {
                n.r(e);
                var a = n("7ca6"),
                    i = n("9d05");
                for (var o in i)["default"].indexOf(o) < 0 && function(t) {
                    n.d(e, t, (function() {
                        return i[t]
                    }))
                }(o);
                n("b1e2");
                var c = n("f0c5"),
                    r = Object(c.a)(i.default, a.b, a.c, !1, null, "77b3eac4", null, !1, a.a, void 0);
                e.default = r.exports
            },
            "9d05": function(t, e, n) {
                n.r(e);
                var a = n("cb4b"),
                    i = n.n(a);
                for (var o in a)["default"].indexOf(o) < 0 && function(t) {
                    n.d(e, t, (function() {
                        return a[t]
                    }))
                }(o);
                e.default = i.a
            },
            b1e2: function(t, e, n) {
                var a = n("f120");
                n.n(a).a
            },
            cb4b: function(t, e, n) {
                (function(t) {
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.default = void 0, e.default = {
                        props: {
                            dataId: {
                                type: Number | String,
                                default: 0
                            },
                            subText: {
                                type: Number | String,
                                default: ""
                            }
                        },
                        data: function() {
                            return {
                                active: !1,
                                fixedMargin: !1,
                                navBarItemStyle: {
                                    active: null,
                                    normal: null,
                                    subText: null,
                                    activeSubText: null
                                },
                                showSubText: !1,
                                boundingClientRect: null
                            }
                        },
                        computed: {
                            classFormat: function() {
                                var t = this.fixedMargin ? "fixedMargin" : "",
                                    e = this.active ? "active" : "",
                                    n = this.subText ? "has-sub" : "";
                                return "".concat(e, " ").concat(t, " ").concat(n)
                            },
                            styleFormat: function() {
                                return this._formatStyleString(this.active ? this.navBarItemStyle.active : this.navBarItemStyle.normal)
                            },
                            subStyleFormat: function() {
                                return this._formatStyleString(this.active ? this.navBarItemStyle.activeSubText : this.navBarItemStyle.subText)
                            }
                        },
                        methods: {
                            _formatStyleString: function(t) {
                                var e = "";
                                for (var n in t) e += "".concat(n, ":").concat(t[n], ";");
                                return e
                            },
                            setActiveIndex: function(t) {
                                this.active = t
                            },
                            selectHandler: function() {
                                this.$emit("tapSelect", this.dataId)
                            },
                            getNavBarItemDomElement: function() {
                                var e = this;
                                return new Promise((function(n) {
                                    e.boundingClientRect ? n(e.boundingClientRect) : t.createSelectorQuery().in(e).select("#navBarItem-".concat(e.dataId)).boundingClientRect((function(t) {
                                        console.warn(t), e.boundingClientRect = t, n(t)
                                    })).exec()
                                }))
                            },
                            setFixedMargin: function() {
                                this.fixedMargin = !0
                            },
                            setNavBarItemStyle: function(t) {
                                this.navBarItemStyle = t
                            },
                            setSubText: function(t) {
                                this.showSubText = t
                            }
                        }
                    }
                }).call(this, n("543d").default)
            },
            f120: function(t, e, n) {}
        }
    ]), (global.webpackJsonp = global.webpackJsonp || []).push(["node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem-create-component", {
            "node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem-create-component": function(t, e, n) {
                n("543d").createComponent(n("7cc0"))
            }
        },
        [
            ["node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem-create-component"]
        ]
    ]);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem.js'
});
require("node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem.js");