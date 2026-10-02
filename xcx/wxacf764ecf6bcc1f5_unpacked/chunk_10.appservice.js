$gwx_XC_2 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_2 || [];

        function gz$gwx_XC_2_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, '__e'])
                Z([3, 'cell-wrapper data-v-04311379'])
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
                                                    [1, 'jumpTo']
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
                Z([
                    [7],
                    [3, 'leftIcon']
                ])
                Z([3, 'cell data-v-04311379'])
                Z([
                    [7],
                    [3, 'cellWrapperStyle']
                ])
                Z([
                    [7],
                    [3, 'leftTextSub']
                ])
                Z([
                    [7],
                    [3, 'rightIcon']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_2_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_2_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_2 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_2 = true;
        var x = ['./node-modules/@dmall/jimoui-mp/components/CellItem/CellItem.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_2_1()
            var bCF = _mz(z, 'view', ['bindtap', 0, 'class', 1, 'data-event-opts', 1], [], e, s, gg)
            var oDF = _v()
            _(bCF, oDF)
            if (_oz(z, 3, e, s, gg)) {
                oDF.wxVkey = 1
            }
            var xEF = _mz(z, 'view', ['class', 4, 'style', 1], [], e, s, gg)
            var oFF = _v()
            _(xEF, oFF)
            if (_oz(z, 6, e, s, gg)) {
                oFF.wxVkey = 1
            }
            var fGF = _v()
            _(xEF, fGF)
            if (_oz(z, 7, e, s, gg)) {
                fGF.wxVkey = 1
            }
            oFF.wxXCkey = 1
            fGF.wxXCkey = 1
            _(bCF, xEF)
            oDF.wxXCkey = 1
            _(r, bCF)
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
                g = "$gwx_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_2();
if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/@dmall/jimoui-mp/components/CellItem/CellItem.wxml'] = [$gwx_XC_2, './node-modules/@dmall/jimoui-mp/components/CellItem/CellItem.wxml'];
else __wxAppCode__['node-modules/@dmall/jimoui-mp/components/CellItem/CellItem.wxml'] = $gwx_XC_2('./node-modules/@dmall/jimoui-mp/components/CellItem/CellItem.wxml');;
__wxRoute = "node-modules/@dmall/jimoui-mp/components/CellItem/CellItem";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "node-modules/@dmall/jimoui-mp/components/CellItem/CellItem.js";
define("node-modules/@dmall/jimoui-mp/components/CellItem/CellItem.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    (global.webpackJsonp = global.webpackJsonp || []).push([
        ["node-modules/@dmall/jimoui-mp/components/CellItem/CellItem"], {
            "4d2d": function(e, t, l) {
                l.r(t);
                var n = l("5b1f"),
                    o = l("c49c");
                for (var i in o)["default"].indexOf(i) < 0 && function(e) {
                    l.d(t, e, (function() {
                        return o[e]
                    }))
                }(i);
                l("e71a");
                var r = l("f0c5"),
                    u = Object(r.a)(o.default, n.b, n.c, !1, null, "04311379", null, !1, n.a, void 0);
                t.default = u.exports
            },
            "5b1f": function(e, t, l) {
                l.d(t, "b", (function() {
                    return n
                })), l.d(t, "c", (function() {
                    return o
                })), l.d(t, "a", (function() {}));
                var n = function() {
                        this.$createElement;
                        this._self._c
                    },
                    o = []
            },
            "893d": function(e, t, l) {},
            b8ea: function(e, t, l) {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = void 0;
                var n = function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }(l("bd49"));
                t.default = {
                    name: "Cell",
                    mixins: [n.default],
                    props: {
                        smallSize: {
                            type: Boolean,
                            default: !1
                        },
                        leftIcon: {
                            type: String,
                            default: ""
                        },
                        leftIconSize: {
                            type: String,
                            default: "default"
                        },
                        leftText: {
                            type: String,
                            default: ""
                        },
                        leftTextColor: {
                            type: String,
                            default: "#222222"
                        },
                        leftTextSize: {
                            type: String,
                            default: "15px"
                        },
                        leftTextSub: {
                            type: String,
                            default: ""
                        },
                        leftTextSubColor: {
                            type: String,
                            default: "#999999"
                        },
                        leftTextSubSize: {
                            type: String,
                            default: "12px"
                        },
                        rightIcon: {
                            type: [String, Boolean],
                            default: "https://img.dmallcdn.com/dshop/202010/cd8c22f6-f166-4e74-aa51-dd3979186072"
                        },
                        rightText: {
                            type: String,
                            default: ""
                        },
                        rightTextColor: {
                            type: String,
                            default: "#999999"
                        },
                        rightTextSize: {
                            type: String,
                            default: "13px"
                        },
                        cellHeight: {
                            type: String,
                            default: "60px"
                        },
                        imgCellHeight: {
                            type: String,
                            default: "66px"
                        },
                        cellBorder: {
                            type: String,
                            default: "0.7px solid #EEEEEE"
                        }
                    },
                    data: function() {
                        return {}
                    },
                    computed: {
                        cellWrapperStyle: function() {
                            return this.styleParse({
                                borderBottom: "none" === this.cellBorder ? "none" : "0.7px solid #EEEEEE",
                                height: this.leftIcon ? this.imgCellHeight : this.cellHeight
                            })
                        },
                        leftTextStyle: function() {
                            return this.styleParse({
                                fontSize: this.leftTextSize,
                                color: this.leftTextColor
                            })
                        },
                        leftSubStyle: function() {
                            return this.styleParse({
                                fontSize: this.leftTextSubSize,
                                color: this.leftTextSubColor
                            })
                        },
                        rightTextStyle: function() {
                            return this.styleParse({
                                fontSize: this.rightTextSize,
                                color: this.rightTextColor
                            })
                        }
                    },
                    methods: {
                        jumpTo: function() {
                            this.$emit("clickCell")
                        }
                    }
                }
            },
            c49c: function(e, t, l) {
                l.r(t);
                var n = l("b8ea"),
                    o = l.n(n);
                for (var i in n)["default"].indexOf(i) < 0 && function(e) {
                    l.d(t, e, (function() {
                        return n[e]
                    }))
                }(i);
                t.default = o.a
            },
            e71a: function(e, t, l) {
                var n = l("893d");
                l.n(n).a
            }
        }
    ]), (global.webpackJsonp = global.webpackJsonp || []).push(["node-modules/@dmall/jimoui-mp/components/CellItem/CellItem-create-component", {
            "node-modules/@dmall/jimoui-mp/components/CellItem/CellItem-create-component": function(e, t, l) {
                l("543d").createComponent(l("4d2d"))
            }
        },
        [
            ["node-modules/@dmall/jimoui-mp/components/CellItem/CellItem-create-component"]
        ]
    ]);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'node-modules/@dmall/jimoui-mp/components/CellItem/CellItem.js'
});
require("node-modules/@dmall/jimoui-mp/components/CellItem/CellItem.js");