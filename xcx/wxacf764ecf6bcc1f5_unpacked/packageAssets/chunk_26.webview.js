$gwx15_XC_19 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx15_XC_19 || [];

        function gz$gwx15_XC_19_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx15_XC_19_1) return __WXML_GLOBAL__.ops_cached.$gwx15_XC_19_1
            __WXML_GLOBAL__.ops_cached.$gwx15_XC_19_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'coupon-cell data-v-1ebc6249'])
                Z([3, 'key'])
                Z([3, 'item'])
                Z([
                    [7],
                    [3, 'coupons']
                ])
                Z([3, 'batchId'])
                Z([3, 'coupon-cell-item data-v-1ebc6249'])
                Z([3, 'coupon-cell__hd data-v-1ebc6249'])
                Z([3, 'icon data-v-1ebc6249'])
                Z([
                    [2, '||'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'iconUrl']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'couponImgUrl']
                    ]
                ])
                Z([3, 'coupon-cell__bd data-v-1ebc6249'])
                Z([a, [
                    [2, '||'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'frontDisplayName']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'couponName']
                    ]
                ]])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'mode']
                    ],
                    [1, 'edit']
                ])
                Z([3, 'coupon-cell__ft edit data-v-1ebc6249'])
                Z([3, '__e'])
                Z([
                    [4],
                    [
                        [5],
                        [
                            [5],
                            [
                                [5],
                                [1, 'data-v-1ebc6249']
                            ],
                            [1, 'iconfont icon_minus_nor']
                        ],
                        [
                            [4],
                            [
                                [5],
                                [
                                    [2, '?:'],
                                    [
                                        [2, '!'],
                                        [
                                            [6],
                                            [
                                                [7],
                                                [3, 'item']
                                            ],
                                            [3, 'giveNum']
                                        ]
                                    ],
                                    [1, 'disabled'],
                                    [1, '']
                                ]
                            ]
                        ]
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
                                                    [1, 'onChangeNum']
                                                ],
                                                [
                                                    [4],
                                                    [
                                                        [5],
                                                        [
                                                            [5],
                                                            [
                                                                [7],
                                                                [3, 'key']
                                                            ]
                                                        ],
                                                        [1, 'sub']
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
                Z([3, 'num data-v-1ebc6249'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'giveNum']
                ]])
                Z(z[13])
                Z([
                    [4],
                    [
                        [5],
                        [
                            [5],
                            [
                                [5],
                                [1, 'data-v-1ebc6249']
                            ],
                            [1, 'iconfont icon_plus_nor']
                        ],
                        [
                            [4],
                            [
                                [5],
                                [
                                    [2, '?:'],
                                    [
                                        [2, '==='],
                                        [
                                            [6],
                                            [
                                                [7],
                                                [3, 'item']
                                            ],
                                            [3, 'giveNum']
                                        ],
                                        [
                                            [6],
                                            [
                                                [7],
                                                [3, 'item']
                                            ],
                                            [3, 'available']
                                        ]
                                    ],
                                    [1, 'disabled'],
                                    [1, '']
                                ]
                            ]
                        ]
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
                                                    [1, 'onChangeNum']
                                                ],
                                                [
                                                    [4],
                                                    [
                                                        [5],
                                                        [
                                                            [5],
                                                            [
                                                                [7],
                                                                [3, 'key']
                                                            ]
                                                        ],
                                                        [1, 'add']
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
                Z([3, 'coupon-cell__ft view data-v-1ebc6249'])
                Z([a, [
                    [2, '+'],
                    [1, 'x'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'couponAmount']
                    ]
                ]])
            })(__WXML_GLOBAL__.ops_cached.$gwx15_XC_19_1);
            return __WXML_GLOBAL__.ops_cached.$gwx15_XC_19_1
        }

        function gz$gwx15_XC_19_2() {
            if (__WXML_GLOBAL__.ops_cached.$gwx15_XC_19_2) return __WXML_GLOBAL__.ops_cached.$gwx15_XC_19_2
            __WXML_GLOBAL__.ops_cached.$gwx15_XC_19_2 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'gift-card data-v-e4e6d922'])
                Z([3, 'decorate data-v-e4e6d922'])
                Z([3, 'widthFix'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'imageEnum']
                    ],
                    [3, 'DECORATE']
                ])
                Z([3, 'card-cover data-v-e4e6d922'])
                Z([3, 'aspectFill'])
                Z([
                    [7],
                    [3, 'imageUrl']
                ])
                Z([3, 'streamer data-v-e4e6d922'])
                Z(z[2])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'imageEnum']
                    ],
                    [3, 'STREAMER']
                ])
                Z([
                    [7],
                    [3, 'showRule']
                ])
                Z([3, '__e'])
                Z([3, 'give-rule data-v-e4e6d922'])
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
                                                    [1, 'onShowRule']
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
                Z([3, '赠送规则'])
            })(__WXML_GLOBAL__.ops_cached.$gwx15_XC_19_2);
            return __WXML_GLOBAL__.ops_cached.$gwx15_XC_19_2
        }
        __WXML_GLOBAL__.ops_set.$gwx15_XC_19 = z;
        __WXML_GLOBAL__.ops_init.$gwx15_XC_19 = true;
        var x = ['./packageAssets/superValueCard/components/CouponCell/CouponCell.wxml', './packageAssets/superValueCard/components/GiftCard/GiftCard.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx15_XC_19_1()
            var t10 = _n('view')
            _rz(z, t10, 'class', 0, e, s, gg)
            var e20 = _v()
            _(t10, e20)
            var b30 = function(x50, o40, o60, gg) {
                var c80 = _n('view')
                _rz(z, c80, 'class', 5, x50, o40, gg)
                var o00 = _n('view')
                _rz(z, o00, 'class', 6, x50, o40, gg)
                var cAAB = _mz(z, 'image', ['class', 7, 'src', 1], [], x50, o40, gg)
                _(o00, cAAB)
                _(c80, o00)
                var oBAB = _n('view')
                _rz(z, oBAB, 'class', 9, x50, o40, gg)
                var lCAB = _oz(z, 10, x50, o40, gg)
                _(oBAB, lCAB)
                _(c80, oBAB)
                var h90 = _v()
                _(c80, h90)
                if (_oz(z, 11, x50, o40, gg)) {
                    h90.wxVkey = 1
                    var aDAB = _n('view')
                    _rz(z, aDAB, 'class', 12, x50, o40, gg)
                    var tEAB = _mz(z, 'text', ['bindtap', 13, 'class', 1, 'data-event-opts', 2], [], x50, o40, gg)
                    _(aDAB, tEAB)
                    var eFAB = _n('text')
                    _rz(z, eFAB, 'class', 16, x50, o40, gg)
                    var bGAB = _oz(z, 17, x50, o40, gg)
                    _(eFAB, bGAB)
                    _(aDAB, eFAB)
                    var oHAB = _mz(z, 'text', ['bindtap', 18, 'class', 1, 'data-event-opts', 2], [], x50, o40, gg)
                    _(aDAB, oHAB)
                    _(h90, aDAB)
                } else {
                    h90.wxVkey = 2
                    var xIAB = _n('view')
                    _rz(z, xIAB, 'class', 21, x50, o40, gg)
                    var oJAB = _oz(z, 22, x50, o40, gg)
                    _(xIAB, oJAB)
                    _(h90, xIAB)
                }
                h90.wxXCkey = 1
                _(o60, c80)
                return o60
            }
            e20.wxXCkey = 2
            _2z(z, 3, b30, e, s, gg, e20, 'item', 'key', 'batchId')
            _(r, t10)
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
            var z = gz$gwx15_XC_19_2()
            var cLAB = _n('view')
            _rz(z, cLAB, 'class', 0, e, s, gg)
            var oNAB = _mz(z, 'image', ['class', 1, 'mode', 1, 'src', 2], [], e, s, gg)
            _(cLAB, oNAB)
            var cOAB = _mz(z, 'image', ['class', 4, 'mode', 1, 'src', 2], [], e, s, gg)
            _(cLAB, cOAB)
            var oPAB = _mz(z, 'image', ['class', 7, 'mode', 1, 'src', 2], [], e, s, gg)
            _(cLAB, oPAB)
            var hMAB = _v()
            _(cLAB, hMAB)
            if (_oz(z, 10, e, s, gg)) {
                hMAB.wxVkey = 1
                var lQAB = _mz(z, 'view', ['bindtap', 11, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
                var aRAB = _oz(z, 14, e, s, gg)
                _(lQAB, aRAB)
                _(hMAB, lQAB)
            }
            hMAB.wxXCkey = 1
            _(r, cLAB)
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
            outerGlobal.__wxml_comp_version__ = 0.02
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx15_XC_19";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                if (typeof(outerGlobal.__webview_engine_version__) != 'undefined' && outerGlobal.__webview_engine_version__ + 1e-6 >= 0.02 + 1e-6 && outerGlobal.__mergeData__) {
                    env = outerGlobal.__mergeData__(env, dd);
                }
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                    if (typeof(outerGlobal.__webview_engine_version__) == 'undefined' || outerGlobal.__webview_engine_version__ + 1e-6 < 0.01 + 1e-6) {
                        return _ev(root);
                    }
                } catch (err) {
                    console.log(err)
                };
                g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx15_XC_19();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packageAssets/superValueCard/components/CouponCell/CouponCell.wxml'] = [$gwx15_XC_19, './packageAssets/superValueCard/components/CouponCell/CouponCell.wxml'];
else __wxAppCode__['packageAssets/superValueCard/components/CouponCell/CouponCell.wxml'] = $gwx15_XC_19('./packageAssets/superValueCard/components/CouponCell/CouponCell.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['packageAssets/superValueCard/components/GiftCard/GiftCard.wxml'] = [$gwx15_XC_19, './packageAssets/superValueCard/components/GiftCard/GiftCard.wxml'];
else __wxAppCode__['packageAssets/superValueCard/components/GiftCard/GiftCard.wxml'] = $gwx15_XC_19('./packageAssets/superValueCard/components/GiftCard/GiftCard.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['packageAssets/superValueCard/components/CouponCell/CouponCell.wxss'] = setCssToHead([".", [1], "coupon-cell-item.", [1], "data-v-1ebc6249{-webkit-align-items:center;align-items:center;background:#fff;border-radius:", [0, 8], ";display:-webkit-flex;display:flex;margin-bottom:", [0, 24], ";padding:", [0, 24], ";position:relative;z-index:1}\n.", [1], "coupon-cell-item.", [1], "data-v-1ebc6249::after{border-radius:inherit;border-width:", [0, 2], "!important;border:", [0, 0], " solid #ebebeb;box-sizing:border-box!important;content:\x22\x22;height:200%!important;left:0;position:absolute;top:0;-webkit-transform:scale(.5)!important;transform:scale(.5)!important;-webkit-transform-origin:0 0;transform-origin:0 0;width:200%!important;z-index:-1}\n.", [1], "coupon-cell-item .", [1], "coupon-cell__hd.", [1], "data-v-1ebc6249{-webkit-align-items:center;align-items:center;background:#f5f5f5;border-radius:50%;display:-webkit-flex;display:flex;height:", [0, 72], ";-webkit-justify-content:center;justify-content:center;margin-right:", [0, 24], ";width:", [0, 72], "}\n.", [1], "coupon-cell-item .", [1], "coupon-cell__hd .", [1], "icon.", [1], "data-v-1ebc6249{height:", [0, 36], ";width:", [0, 36], "}\n.", [1], "coupon-cell-item .", [1], "coupon-cell__bd.", [1], "data-v-1ebc6249{-webkit-flex:1;flex:1}\n.", [1], "coupon-cell-item .", [1], "coupon-cell__ft.", [1], "edit.", [1], "data-v-1ebc6249{-webkit-align-items:center;align-items:center;background:#fff;border:", [0, 1], " solid #ededed;border-radius:", [0, 4], ";box-sizing:border-box;display:-webkit-flex;display:flex;height:", [0, 48], ";min-width:", [0, 158], ";padding:0 ", [0, 12], "}\n.", [1], "coupon-cell-item .", [1], "coupon-cell__ft.", [1], "view.", [1], "data-v-1ebc6249{color:#212121;font-size:", [0, 30], ";font-weight:400;line-height:", [0, 42], "}\n.", [1], "coupon-cell-item .", [1], "coupon-cell__ft .", [1], "iconfont.", [1], "data-v-1ebc6249{position:relative}\n.", [1], "coupon-cell-item .", [1], "coupon-cell__ft .", [1], "iconfont.", [1], "data-v-1ebc6249::after{content:\x22\x22;display:block;height:", [0, 34], ";left:", [0, -5], ";position:absolute;top:", [0, -5], ";width:", [0, 34], "}\n.", [1], "coupon-cell-item .", [1], "coupon-cell__ft .", [1], "icon_minus_nor.", [1], "data-v-1ebc6249,.", [1], "coupon-cell-item .", [1], "coupon-cell__ft .", [1], "icon_plus_nor.", [1], "data-v-1ebc6249{color:#ff4c58;font-size:", [0, 24], ";font-weight:400;height:", [0, 24], ";width:", [0, 24], "}\n.", [1], "coupon-cell-item .", [1], "coupon-cell__ft .", [1], "icon_minus_nor.", [1], "disabled.", [1], "data-v-1ebc6249,.", [1], "coupon-cell-item .", [1], "coupon-cell__ft .", [1], "icon_plus_nor.", [1], "disabled.", [1], "data-v-1ebc6249{opacity:.3}\n.", [1], "coupon-cell-item .", [1], "coupon-cell__ft .", [1], "num.", [1], "data-v-1ebc6249{color:#212121;-webkit-flex:1;flex:1;font-size:", [0, 30], ";font-weight:400;line-height:", [0, 42], ";text-align:center}\n", ], undefined, {
        path: "./packageAssets/superValueCard/components/CouponCell/CouponCell.wxss"
    });
    __wxAppCode__['packageAssets/superValueCard/components/GiftCard/GiftCard.wxss'] = setCssToHead([".", [1], "gift-card.", [1], "data-v-e4e6d922{background:#fff5f5;box-sizing:border-box;padding-top:", [0, 40], ";position:relative;width:100%;z-index:1}\n.", [1], "gift-card .", [1], "decorate.", [1], "data-v-e4e6d922{height:", [0, 227], ";left:5%;position:absolute;top:0;width:90%}\n.", [1], "gift-card .", [1], "card-cover.", [1], "data-v-e4e6d922{border-radius:", [0, 16], ";height:", [0, 337.5], ";left:50%;margin-left:", [0, -270], ";position:relative;width:", [0, 540], "}\n.", [1], "gift-card .", [1], "streamer.", [1], "data-v-e4e6d922{height:", [0, 350], ";left:50%;margin-left:", [0, -278], ";position:absolute;top:", [0, 35], ";width:", [0, 556], ";z-index:2}\n.", [1], "gift-card .", [1], "give-rule.", [1], "data-v-e4e6d922{background:#ff4c58;border-radius:", [0, 24], " ", [0, 0], " ", [0, 0], " ", [0, 24], ";bottom:", [0, 60], ";color:#fff;font-size:", [0, 26], ";font-weight:400;line-height:", [0, 36], ";padding:", [0, 6], " ", [0, 16], ";position:absolute;right:0;text-align:right;z-index:4}\n", ], undefined, {
        path: "./packageAssets/superValueCard/components/GiftCard/GiftCard.wxss"
    });
}