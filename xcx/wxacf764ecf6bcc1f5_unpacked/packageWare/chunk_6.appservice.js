$gwx3_XC_6 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_6 || [];

        function gz$gwx3_XC_6_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_6_1) return __WXML_GLOBAL__.ops_cached.$gwx3_XC_6_1
            __WXML_GLOBAL__.ops_cached.$gwx3_XC_6_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, '__l'])
                Z([3, 'data-v-7a56b5fa'])
                Z([3, '5bf4db95-1'])
                Z([
                    [4],
                    [
                        [5],
                        [1, 'default']
                    ]
                ])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'pageState']
                    ],
                    [1, 1]
                ])
                Z([3, 'container data-v-7a56b5fa'])
                Z([3, 'header data-v-7a56b5fa'])
                Z([3, 'index'])
                Z([3, 'suit'])
                Z([
                    [6],
                    [
                        [7],
                        [3, '$root']
                    ],
                    [3, 'l0']
                ])
                Z(z[7])
                Z([3, '__e'])
                Z([3, 'suit-item data-v-7a56b5fa'])
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
                                                    [
                                                        [5],
                                                        [1, 'handleClick']
                                                    ],
                                                    [
                                                        [4],
                                                        [
                                                            [5],
                                                            [
                                                                [5],
                                                                [
                                                                    [5],
                                                                    [1, 'Suit']
                                                                ],
                                                                [
                                                                    [7],
                                                                    [3, 'index']
                                                                ]
                                                            ],
                                                            [1, '$0']
                                                        ]
                                                    ]
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
                                                                    [4],
                                                                    [
                                                                        [5],
                                                                        [
                                                                            [5],
                                                                            [
                                                                                [5],
                                                                                [1, 'suitGroupDetailList']
                                                                            ],
                                                                            [1, '']
                                                                        ],
                                                                        [
                                                                            [7],
                                                                            [3, 'index']
                                                                        ]
                                                                    ]
                                                                ]
                                                            ]
                                                        ]
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
                    [2, '+'],
                    [1, 'Suit'],
                    [
                        [7],
                        [3, 'index']
                    ]
                ])
                Z([
                    [2, '+'],
                    [
                        [2, '+'],
                        [
                            [2, '+'],
                            [
                                [2, '+'],
                                [1, 'color:'],
                                [
                                    [2, '?:'],
                                    [
                                        [2, '==='],
                                        [
                                            [7],
                                            [3, 'currentSuitIndex']
                                        ],
                                        [
                                            [7],
                                            [3, 'index']
                                        ]
                                    ],
                                    [
                                        [6],
                                        [
                                            [7],
                                            [3, 'theme']
                                        ],
                                        [3, 'mainColor']
                                    ],
                                    [1, '#222222']
                                ]
                            ],
                            [1, ';']
                        ],
                        [
                            [2, '+'],
                            [
                                [2, '+'],
                                [1, 'background-color:'],
                                [
                                    [2, '?:'],
                                    [
                                        [2, '==='],
                                        [
                                            [7],
                                            [3, 'currentSuitIndex']
                                        ],
                                        [
                                            [7],
                                            [3, 'index']
                                        ]
                                    ],
                                    [
                                        [2, '?:'],
                                        [
                                            [2, '&&'],
                                            [
                                                [7],
                                                [3, 'theme']
                                            ],
                                            [
                                                [6],
                                                [
                                                    [7],
                                                    [3, 'theme']
                                                ],
                                                [3, 'mainColor']
                                            ]
                                        ],
                                        [
                                            [6],
                                            [
                                                [7],
                                                [3, 'suit']
                                            ],
                                            [3, 'g0']
                                        ],
                                        [1, '']
                                    ],
                                    [1, '#f2f2f2']
                                ]
                            ],
                            [1, ';']
                        ]
                    ],
                    [
                        [2, '+'],
                        [
                            [2, '+'],
                            [1, 'border:'],
                            [
                                [2, '?:'],
                                [
                                    [2, '==='],
                                    [
                                        [7],
                                        [3, 'currentSuitIndex']
                                    ],
                                    [
                                        [7],
                                        [3, 'index']
                                    ]
                                ],
                                [
                                    [2, '+'],
                                    [1, '1rpx solid '],
                                    [
                                        [6],
                                        [
                                            [7],
                                            [3, 'theme']
                                        ],
                                        [3, 'mainColor']
                                    ]
                                ],
                                [
                                    [7],
                                    [3, 'none']
                                ]
                            ]
                        ],
                        [1, ';']
                    ]
                ])
                Z([
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'suit']
                        ],
                        [3, '$orig']
                    ],
                    [3, 'discountContent']
                ])
                Z([
                    [2, '&&'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'suitGroupDetailList']
                        ],
                        [
                            [7],
                            [3, 'currentSuitIndex']
                        ]
                    ],
                    [
                        [2, '==='],
                        [
                            [6],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'suitGroupDetailList']
                                ],
                                [
                                    [7],
                                    [3, 'currentSuitIndex']
                                ]
                            ],
                            [3, 'suitType']
                        ],
                        [1, 2]
                    ]
                ])
                Z(z[7])
                Z([3, 'ware'])
                Z([
                    [6],
                    [
                        [7],
                        [3, '$root']
                    ],
                    [3, 'l1']
                ])
                Z(z[7])
                Z(z[11])
                Z([3, 'ware-item data-v-7a56b5fa'])
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
                                                    [
                                                        [5],
                                                        [1, 'wareItemClick']
                                                    ],
                                                    [
                                                        [4],
                                                        [
                                                            [5],
                                                            [1, '$0']
                                                        ]
                                                    ]
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
                                                                    [4],
                                                                    [
                                                                        [5],
                                                                        [
                                                                            [5],
                                                                            [
                                                                                [5],
                                                                                [1, 'suitWareList']
                                                                            ],
                                                                            [1, '']
                                                                        ],
                                                                        [
                                                                            [7],
                                                                            [3, 'index']
                                                                        ]
                                                                    ]
                                                                ]
                                                            ]
                                                        ]
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
                    [2, '!'],
                    [
                        [6],
                        [
                            [6],
                            [
                                [7],
                                [3, 'ware']
                            ],
                            [3, '$orig']
                        ],
                        [3, 'sell']
                    ]
                ])
                Z([3, 'footer data-v-7a56b5fa'])
                Z(z[17])
                Z([
                    [6],
                    [
                        [7],
                        [3, '$root']
                    ],
                    [3, 'g1']
                ])
                Z([
                    [2, '&&'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'suitGroupDetailList']
                        ],
                        [
                            [7],
                            [3, 'currentSuitIndex']
                        ]
                    ],
                    [
                        [6],
                        [
                            [6],
                            [
                                [7],
                                [3, 'suitGroupDetailList']
                            ],
                            [
                                [7],
                                [3, 'currentSuitIndex']
                            ]
                        ],
                        [3, 'triggerAmount']
                    ]
                ])
                Z(z[0])
                Z(z[11])
                Z(z[11])
                Z([3, '取消'])
                Z([3, 'data-v-7a56b5fa vue-ref'])
                Z([
                    [7],
                    [3, 'content']
                ])
                Z([
                    [4],
                    [
                        [5],
                        [
                            [5],
                            [
                                [4],
                                [
                                    [5],
                                    [
                                        [5],
                                        [1, '^tapCancel']
                                    ],
                                    [
                                        [4],
                                        [
                                            [5],
                                            [
                                                [4],
                                                [
                                                    [5],
                                                    [1, 'e0']
                                                ]
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ],
                        [
                            [4],
                            [
                                [5],
                                [
                                    [5],
                                    [1, '^tapEnsure']
                                ],
                                [
                                    [4],
                                    [
                                        [5],
                                        [
                                            [4],
                                            [
                                                [5],
                                                [1, 'handleConfirm']
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ])
                Z([3, 'dialog'])
                Z([3, '确定'])
                Z([
                    [7],
                    [3, 'theme']
                ])
                Z([
                    [7],
                    [3, 'showDialog']
                ])
                Z([
                    [2, '+'],
                    [
                        [2, '+'],
                        [1, '5bf4db95-2'],
                        [1, ',']
                    ],
                    [1, '5bf4db95-1']
                ])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'pageState']
                    ],
                    [1, 2]
                ])
                Z(z[0])
                Z(z[1])
                Z([3, 'https://img.dmallcdn.com/dshop/202105/c89e90d4-1774-4d8d-9fed-10af2788544a'])
                Z([3, 'width:100%;'])
                Z([3, '当前没有数据哦~'])
                Z([
                    [2, '+'],
                    [
                        [2, '+'],
                        [1, '5bf4db95-3'],
                        [1, ',']
                    ],
                    [1, '5bf4db95-1']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_6_1);
            return __WXML_GLOBAL__.ops_cached.$gwx3_XC_6_1
        }
        __WXML_GLOBAL__.ops_set.$gwx3_XC_6 = z;
        __WXML_GLOBAL__.ops_init.$gwx3_XC_6 = true;
        var x = ['./packageWare/wareSuitGroup/wareSuitGroup.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx3_XC_6_1()
            var o8Q = _mz(z, 'page-view', ['bind:__l', 0, 'class', 1, 'vueId', 1, 'vueSlots', 2], [], e, s, gg)
            var c9Q = _v()
            _(o8Q, c9Q)
            if (_oz(z, 4, e, s, gg)) {
                c9Q.wxVkey = 1
                var o0Q = _n('view')
                _rz(z, o0Q, 'class', 5, e, s, gg)
                var lAR = _n('view')
                _rz(z, lAR, 'class', 6, e, s, gg)
                var tCR = _v()
                _(lAR, tCR)
                var eDR = function(oFR, bER, xGR, gg) {
                    var fIR = _mz(z, 'view', ['bindtap', 11, 'class', 1, 'data-event-opts', 2, 'id', 3, 'style', 4], [], oFR, bER, gg)
                    var cJR = _v()
                    _(fIR, cJR)
                    if (_oz(z, 16, oFR, bER, gg)) {
                        cJR.wxVkey = 1
                    }
                    cJR.wxXCkey = 1
                    _(xGR, fIR)
                    return xGR
                }
                tCR.wxXCkey = 2
                _2z(z, 9, eDR, e, s, gg, tCR, 'suit', 'index', 'index')
                var aBR = _v()
                _(lAR, aBR)
                if (_oz(z, 17, e, s, gg)) {
                    aBR.wxVkey = 1
                }
                aBR.wxXCkey = 1
                _(o0Q, lAR)
                var hKR = _v()
                _(o0Q, hKR)
                var oLR = function(oNR, cMR, lOR, gg) {
                    var tQR = _mz(z, 'view', ['bindtap', 22, 'class', 1, 'data-event-opts', 2], [], oNR, cMR, gg)
                    var eRR = _v()
                    _(tQR, eRR)
                    if (_oz(z, 25, oNR, cMR, gg)) {
                        eRR.wxVkey = 1
                    }
                    eRR.wxXCkey = 1
                    _(lOR, tQR)
                    return lOR
                }
                hKR.wxXCkey = 2
                _2z(z, 20, oLR, e, s, gg, hKR, 'ware', 'index', 'index')
                var bSR = _n('view')
                _rz(z, bSR, 'class', 26, e, s, gg)
                var oTR = _v()
                _(bSR, oTR)
                if (_oz(z, 27, e, s, gg)) {
                    oTR.wxVkey = 1
                    var oVR = _v()
                    _(oTR, oVR)
                    if (_oz(z, 28, e, s, gg)) {
                        oVR.wxVkey = 1
                    }
                    oVR.wxXCkey = 1
                }
                var xUR = _v()
                _(bSR, xUR)
                if (_oz(z, 29, e, s, gg)) {
                    xUR.wxVkey = 1
                }
                oTR.wxXCkey = 1
                xUR.wxXCkey = 1
                _(o0Q, bSR)
                var fWR = _mz(z, 'ga-dialog', ['bind:__l', 30, 'bind:tapCancel', 1, 'bind:tapEnsure', 2, 'cancelText', 3, 'class', 4, 'content', 5, 'data-event-opts', 6, 'data-ref', 7, 'ensureText', 8, 'theme', 9, 'value', 10, 'vueId', 11], [], e, s, gg)
                _(o0Q, fWR)
                _(c9Q, o0Q)
            } else {
                c9Q.wxVkey = 2
                var cXR = _v()
                _(c9Q, cXR)
                if (_oz(z, 42, e, s, gg)) {
                    cXR.wxVkey = 1
                    var hYR = _mz(z, 'empty-status', ['bind:__l', 43, 'class', 1, 'logoUrl', 2, 'style', 3, 'titleText', 4, 'vueId', 5], [], e, s, gg)
                    _(cXR, hYR)
                }
                cXR.wxXCkey = 1
                cXR.wxXCkey = 3
            }
            c9Q.wxXCkey = 1
            c9Q.wxXCkey = 3
            c9Q.wxXCkey = 3
            _(r, o8Q)
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
                g = "$gwx3_XC_6";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_6();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packageWare/wareSuitGroup/wareSuitGroup.wxml'] = [$gwx3_XC_6, './packageWare/wareSuitGroup/wareSuitGroup.wxml'];
else __wxAppCode__['packageWare/wareSuitGroup/wareSuitGroup.wxml'] = $gwx3_XC_6('./packageWare/wareSuitGroup/wareSuitGroup.wxml');;
__wxRoute = "packageWare/wareSuitGroup/wareSuitGroup";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packageWare/wareSuitGroup/wareSuitGroup.js";
define("packageWare/wareSuitGroup/wareSuitGroup.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../@babel/runtime/helpers/Arrayincludes");
    var t = require("../../@babel/runtime/helpers/typeof");
    require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
        ["packageWare/wareSuitGroup/wareSuitGroup"], {
            "05c2": function(t, e, r) {
                r.r(e);
                var n = r("3818"),
                    i = r("97a4");
                for (var u in i)["default"].indexOf(u) < 0 && function(t) {
                    r.d(e, t, (function() {
                        return i[t]
                    }))
                }(u);
                r("9790");
                var a = r("f0c5"),
                    o = Object(a.a)(i.default, n.b, n.c, !1, null, "7a56b5fa", null, !1, n.a, void 0);
                e.default = o.exports
            },
            3818: function(t, e, r) {
                r.d(e, "b", (function() {
                    return i
                })), r.d(e, "c", (function() {
                    return u
                })), r.d(e, "a", (function() {
                    return n
                }));
                var n = {
                        PageView: function() {
                            return Promise.all([r.e("common/vendor"), r.e("components/PageView/PageView")]).then(r.bind(null, "5741"))
                        }
                    },
                    i = function() {
                        var t = this,
                            e = (t.$createElement, t._self._c, 1 === t.pageState ? t.__map(t.suitGroupDetailList, (function(e, r) {
                                return {
                                    $orig: t.__get_orig(e),
                                    g0: t.currentSuitIndex === r && t.theme && t.theme.mainColor ? t.theme.mainColor.colorRgb(.05) : null
                                }
                            })) : null),
                            r = 1 === t.pageState ? t.__map(t.suitWareList, (function(e, r) {
                                return {
                                    $orig: t.__get_orig(e),
                                    m0: t.suitGroupDetailList[t.currentSuitIndex] && 2 === t.suitGroupDetailList[t.currentSuitIndex].suitType && e.sell ? t.isSelected(e) : null,
                                    m1: t.suitGroupDetailList[t.currentSuitIndex] && 2 === t.suitGroupDetailList[t.currentSuitIndex].suitType && e.sell ? t.isSelected(e) : null,
                                    m2: t.fenToYuan(e.rewardPrice)
                                }
                            })) : null,
                            n = 1 === t.pageState && t.suitGroupDetailList[t.currentSuitIndex] && 2 === t.suitGroupDetailList[t.currentSuitIndex].suitType ? t.selectedData.length : null,
                            i = 1 === t.pageState ? t.fenToYuan(t.suitGroupDetailList[t.currentSuitIndex] && t.suitGroupDetailList[t.currentSuitIndex].suitPrice) : null,
                            u = 1 === t.pageState ? t.fenToYuan(t.suitGroupDetailList[t.currentSuitIndex] && t.suitGroupDetailList[t.currentSuitIndex].suitOrigPrice) : null;
                        t._isMounted || (t.e0 = function(e) {
                            t.showDialog = !1
                        }), t.$mp.data = Object.assign({}, {
                            $root: {
                                l0: e,
                                l1: r,
                                g1: n,
                                m3: i,
                                m4: u
                            }
                        })
                    },
                    u = []
            },
            "3bf4": function(t, e, r) {
                (function(t, e) {
                    r("6cdc"), i(r("66fd"));
                    var n = i(r("05c2"));

                    function i(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }
                    t.__webpack_require_UNI_MP_PLUGIN__ = r, e(n.default)
                }).call(this, r("bc2e").default, r("543d").createPage)
            },
            8880: function(e, r, n) {
                function i(e) {
                    return (i = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                        return t(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                    })(e)
                }
                Object.defineProperty(r, "__esModule", {
                    value: !0
                }), r.default = void 0;
                var u = s(n("a34a")),
                    a = n("c2e9"),
                    o = n("7836"),
                    c = s(n("6085"));

                function s(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function l(t) {
                    return function(t) {
                        if (Array.isArray(t)) return d(t)
                    }(t) || function(t) {
                        if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                    }(t) || function(t, e) {
                        if (t) {
                            if ("string" == typeof t) return d(t, e);
                            var r = {}.toString.call(t).slice(8, -1);
                            return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? d(t, e) : void 0
                        }
                    }(t) || function() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function d(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
                    return n
                }

                function f(t, e) {
                    var r = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(t);
                        e && (n = n.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), r.push.apply(r, n)
                    }
                    return r
                }

                function p(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? f(Object(r), !0).forEach((function(e) {
                            h(t, e, r[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : f(Object(r)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                        }))
                    }
                    return t
                }

                function h(t, e, r) {
                    return (e = function(t) {
                        var e = function(t, e) {
                            if ("object" != i(t) || !t) return t;
                            var r = t[Symbol.toPrimitive];
                            if (void 0 !== r) {
                                var n = r.call(t, e || "default");
                                if ("object" != i(n)) return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === e ? String : Number)(t)
                        }(t, "string");
                        return "symbol" == i(e) ? e : e + ""
                    }(e)) in t ? Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = r, t
                }

                function g(t, e, r, n, i, u, a) {
                    try {
                        var o = t[u](a),
                            c = o.value
                    } catch (t) {
                        return void r(t)
                    }
                    o.done ? e(c) : Promise.resolve(c).then(n, i)
                }

                function m(t) {
                    return function() {
                        var e = this,
                            r = arguments;
                        return new Promise((function(n, i) {
                            var u = t.apply(e, r);

                            function a(t) {
                                g(u, n, i, a, o, "next", t)
                            }

                            function o(t) {
                                g(u, n, i, a, o, "throw", t)
                            }
                            a(void 0)
                        }))
                    }
                }
                var v = getApp().globalData,
                    S = v.$dmall,
                    b = S.router,
                    y = S.dmallApi,
                    L = S.pathMap;
                r.default = {
                    data: function() {
                        return {
                            showDialog: !1,
                            content: "",
                            theme: {},
                            currentSuitIndex: 0,
                            currentGroupIndex: 0,
                            currentSuit: "",
                            currentGroup: "",
                            suitGroupDetailList: [],
                            groupSuitSkuList: [],
                            suitWareList: [],
                            cacheData: {},
                            selectedData: [],
                            pageState: 0
                        }
                    },
                    computed: {
                        selectWareContent: function() {
                            var t = this,
                                e = "已选：";
                            return this.selectedData.forEach((function(r, n) {
                                e += "".concat(r.groupName, "（"), r.suitWareList.forEach((function(n, i) {
                                    e += "<span style='color:".concat(t.theme.mainColor, "'>").concat(n.skuName, "</span>x").concat(n.rewardQty).concat(i < r.suitWareList.length - 1 ? "、" : "")
                                })), e += "）".concat(n < t.selectedData.length - 1 ? "，" : "")
                            })), e
                        },
                        isSelected: function() {
                            return function() {
                                var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                return null == e || null === (t = e.selectedList) || void 0 === t ? void 0 : t.includes(e.skuId)
                            }
                        },
                        selectedWare: function() {
                            var t;
                            return (null === (t = this.suitWareList) || void 0 === t ? void 0 : t.filter((function(t) {
                                return t.check
                            }))) || []
                        }
                    },
                    onLoad: function(t) {
                        this.pageParam = t
                    },
                    onShow: function() {
                        this.theme = o.mytheme.getTheme(), this.getSuitGroupData()
                    },
                    methods: {
                        fenToYuan: function(t) {
                            return y.formatPrice(t)
                        },
                        getSuitGroupData: function() {
                            var t = this;
                            return m(u.default.mark((function e() {
                                var r, n, i, a, o, s, l, d, f;
                                return u.default.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, n = t.pageParam, i = n.skuId, a = n.erpStoreId, o = n.venderId, s = n.shipmentType, l = {
                                                skuId: i,
                                                erpStoreId: a,
                                                venderId: o,
                                                shipmentType: s
                                            }, e.next = 5, c.default.getSuitGroupData(l);
                                        case 5:
                                            return d = e.sent, f = d.data, t.suitGroupDetailList = (null == f ? void 0 : f.suitGroupDetailList) || [], null !== (r = t.suitGroupDetailList) && void 0 !== r && r.length ? t.pageState = 1 : t.pageState = 2, t.suitGroupDetailList.forEach((function(e) {
                                                t.cacheData[e.suitCode] = 0, e.groupSuitSkuList.forEach((function(t) {
                                                    var r = [];
                                                    t.suitCode = e.suitCode, t.suitWareList.forEach((function(n) {
                                                        n.suitType = e.suitType, n.sell && n.check && r.push(n.skuId), t.selectedList = r, n.selectedList = r, n.enjoyTriggerNum = t.enjoyTriggerNum
                                                    }))
                                                }))
                                            })), e.next = 12, t.setPageData();
                                        case 12:
                                            e.next = 18;
                                            break;
                                        case 14:
                                            e.prev = 14, e.t0 = e.catch(0), t.pageState = 2, console.log(e.t0);
                                        case 18:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 14]
                                ])
                            })))()
                        },
                        getPriceInfo: function() {
                            var t = this;
                            return m(u.default.mark((function e() {
                                var r, n, i, a, o, s, d, f, h, g, m, v;
                                return u.default.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, r = t.suitGroupDetailList[t.currentSuitIndex], n = r.groupSuitSkuList, i = void 0 === n ? [] : n, a = r.proId, o = [], i.forEach((function(t) {
                                                var e = t.suitWareList || [],
                                                    r = t.selectedList || [],
                                                    n = e.reduce((function(t, e) {
                                                        return t.concat(r.includes(e.skuId) ? p(p({}, e), {}, {
                                                            proId: a
                                                        }) : [])
                                                    }), []);
                                                o = [].concat(l(o), l(n))
                                            })), s = {
                                                skuId: t.pageParam.skuId,
                                                erpStoreId: t.pageParam.erpStoreId,
                                                suitWareCalcRequestList: [{
                                                    proId: a,
                                                    skuVoList: o
                                                }]
                                            }, e.next = 8, c.default.calculatePromotion(s);
                                        case 8:
                                            d = e.sent, f = d.data, h = (void 0 === f ? [] : f)[0] || {}, g = h.suitOrigPrice, m = h.suitPrice, v = h.discountContent, r.suitOrigPrice = g, r.suitPrice = m, r.discountContent = v, e.next = 20;
                                            break;
                                        case 17:
                                            e.prev = 17, e.t0 = e.catch(0), console.log(e.t0);
                                        case 20:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 17]
                                ])
                            })))()
                        },
                        addCart: function() {
                            var t = arguments,
                                e = this;
                            return m(u.default.mark((function r() {
                                var n, i, o, c, s, l, d, f, p, h, g, m, S;
                                return u.default.wrap((function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            if (n = t.length > 0 && void 0 !== t[0] ? t[0] : {}, i = e.suitGroupDetailList[e.currentSuitIndex], (o = e.getGroupList(i)).length) {
                                                r.next = 5;
                                                break
                                            }
                                            return r.abrupt("return", e.$pageView.showToast({
                                                title: "请选择需要加购的商品"
                                            }));
                                        case 5:
                                            return c = {
                                                detail: {
                                                    action: "add",
                                                    showError: !1,
                                                    wareData: [
                                                        [{
                                                            storeId: e.pageParam.erpStoreId,
                                                            suitId: i.suitCode,
                                                            checked: 1,
                                                            count: i.triggerAmount || 1,
                                                            customSuitItemList: o
                                                        }]
                                                    ]
                                                }
                                            }, 1 === i.suitType && delete c.detail.wareData[0][0].customSuitItemList, n.canReplaceCustomSuitFlag && (c.detail.cartConfig = n), e.addCartParam = c, r.next = 11, a.actionCart.doAddCart(e.addCartParam);
                                        case 11:
                                            s = r.sent, l = s.code, d = s.data, f = (void 0 === d ? [] : d)[0] || {}, p = f.code, h = f.result, g = f.sourceMsg, "0000" === l ? (e.$pageView.showToast({
                                                title: "加购成功"
                                            }), "bld" === v.currentScene && (m = L.bldCategorySub.path, (S = (getCurrentPages() || []).reverse().findIndex((function(t) {
                                                return t.route === m
                                            }))) > 0 ? b.navigateBack(S) : b.redirectTo("".concat(m, "?shipmentType=").concat(e.pageParam.shipmentType)))) : "CART201116" === p ? (e.content = g, e.showDialog = !0) : e.$pageView.showToast({
                                                title: h || "加购失败"
                                            });
                                        case 15:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r)
                            })))()
                        },
                        getAllSuitSelectedWare: function() {
                            var t = JSON.parse(JSON.stringify(this.groupSuitSkuList)),
                                e = [];
                            t.forEach((function(t) {
                                t.suitWareList = t.suitWareList.filter((function(t) {
                                    return t.selectedList.includes(t.skuId)
                                })), t.suitWareList.length && e.push(t)
                            })), this.selectedData = e
                        },
                        getGroupList: function(t) {
                            var e = t.groupSuitSkuList,
                                r = [];
                            return (void 0 === e ? [] : e).forEach((function(t) {
                                var e = t.suitWareList || [],
                                    n = t.selectedList || [];
                                e.forEach((function(e) {
                                    var i = e || {},
                                        u = i.skuId,
                                        a = i.rewardQty;
                                    if (n.includes(u)) {
                                        var o = {
                                            groupId: t.groupId,
                                            skuId: u,
                                            suitItemCount: a
                                        };
                                        r.push(o)
                                    }
                                }))
                            })), r
                        },
                        handleConfirm: function() {
                            this.addCart({
                                canReplaceCustomSuitFlag: 1
                            }), this.showDialog = !1
                        },
                        setPageData: function() {
                            var t, e;
                            this.groupSuitSkuList = (null === (t = this.suitGroupDetailList[this.currentSuitIndex]) || void 0 === t ? void 0 : t.groupSuitSkuList) || [], this.suitWareList = (null === (e = this.suitGroupDetailList[this.currentSuitIndex]) || void 0 === e || null === (e = e.groupSuitSkuList[this.currentGroupIndex]) || void 0 === e ? void 0 : e.suitWareList) || [], console.log(this.suitWareList, 1111), this.getAllSuitSelectedWare()
                        },
                        handleClick: function(t, e, r) {
                            "Suit" === t && (this.currentGroupIndex = this.cacheData[r.suitCode]), "Group" === t && (this.cacheData[r.suitCode] = e), this["current".concat(t)] = "".concat(t).concat(e), this["current".concat(t, "Index")] = e, this.setPageData()
                        },
                        wareItemClick: function(t) {
                            var e;
                            if (1 !== t.suitType && t.sell) {
                                var r, n = (null == t ? void 0 : t.enjoyTriggerNum) || 1;
                                if (!(((null == t ? void 0 : t.selectedList) || []).length <= n && this.isSelected(t)))(null == t || null === (e = t.selectedList) || void 0 === e ? void 0 : e.length) >= n && !this.isSelected(t) && (null == t || null === (r = t.selectedList) || void 0 === r || r.shift()), this.updateSelected(t)
                            }
                        },
                        updateSelected: function(t) {
                            var e, r;
                            this.isSelected(t) ? t.selectedList = null == t || null === (e = t.selectedList) || void 0 === e ? void 0 : e.filter((function(e) {
                                return e !== t.skuId
                            })) : null == t || null === (r = t.selectedList) || void 0 === r || r.push(t.skuId), this.getAllSuitSelectedWare(), this.getPriceInfo()
                        }
                    }
                }
            },
            9790: function(t, e, r) {
                var n = r("a704");
                r.n(n).a
            },
            "97a4": function(t, e, r) {
                r.r(e);
                var n = r("8880"),
                    i = r.n(n);
                for (var u in n)["default"].indexOf(u) < 0 && function(t) {
                    r.d(e, t, (function() {
                        return n[t]
                    }))
                }(u);
                e.default = i.a
            },
            a704: function(t, e, r) {}
        },
        [
            ["3bf4", "common/runtime", "common/vendor"]
        ]
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packageWare/wareSuitGroup/wareSuitGroup.js'
});
require("packageWare/wareSuitGroup/wareSuitGroup.js");