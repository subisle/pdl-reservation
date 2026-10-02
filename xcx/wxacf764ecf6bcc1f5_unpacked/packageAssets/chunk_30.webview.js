$gwx15_XC_24 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx15_XC_24 || [];

        function gz$gwx15_XC_24_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx15_XC_24_1) return __WXML_GLOBAL__.ops_cached.$gwx15_XC_24_1
            __WXML_GLOBAL__.ops_cached.$gwx15_XC_24_1 = [];
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
                                [1, 'data-v-261dcbfa']
                            ],
                            [1, 'coupon-title']
                        ],
                        [
                            [4],
                            [
                                [5],
                                [
                                    [2, '?:'],
                                    [
                                        [2, '!=='],
                                        [
                                            [7],
                                            [3, 'role']
                                        ],
                                        [
                                            [6],
                                            [
                                                [7],
                                                [3, 'roleEnum']
                                            ],
                                            [3, 'GIVER']
                                        ]
                                    ],
                                    [1, 'receiver'],
                                    [1, '']
                                ]
                            ]
                        ]
                    ]
                ])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'role']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'roleEnum']
                        ],
                        [3, 'GIVER']
                    ]
                ])
                Z([3, 'title data-v-261dcbfa'])
                Z([a, [
                    [7],
                    [3, 'giveTitle']
                ]])
                Z([3, 'sub-title data-v-261dcbfa'])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'status']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'statusEnum']
                        ],
                        [3, 'RECEIVED']
                    ]
                ])
                Z([3, 'head-portrait data-v-261dcbfa'])
                Z([3, 'widthFix'])
                Z([
                    [7],
                    [3, 'receivedUserIconUrl']
                ])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'status']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'statusEnum']
                        ],
                        [3, 'UNRECEIVE']
                    ]
                ])
                Z([3, 'diff-time data-v-261dcbfa'])
                Z([a, [
                    [2, '+'],
                    [
                        [2, '+'],
                        [1, ''],
                        [
                            [7],
                            [3, 'diffTime']
                        ]
                    ],
                    [1, '']
                ]])
                Z([3, 'data-v-261dcbfa'])
                Z([a, [
                    [7],
                    [3, 'giveSubTitle']
                ]])
                Z(z[2])
                Z([a, [
                    [7],
                    [3, 'receiveTitle']
                ]])
            })(__WXML_GLOBAL__.ops_cached.$gwx15_XC_24_1);
            return __WXML_GLOBAL__.ops_cached.$gwx15_XC_24_1
        }

        function gz$gwx15_XC_24_2() {
            if (__WXML_GLOBAL__.ops_cached.$gwx15_XC_24_2) return __WXML_GLOBAL__.ops_cached.$gwx15_XC_24_2
            __WXML_GLOBAL__.ops_cached.$gwx15_XC_24_2 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'fixed-button data-v-de21e964'])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'role']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'roleEnum']
                        ],
                        [3, 'GIVER']
                    ]
                ])
                Z([
                    [4],
                    [
                        [5],
                        [
                            [5],
                            [
                                [5],
                                [1, 'data-v-de21e964']
                            ],
                            [1, 'btn confirm']
                        ],
                        [
                            [4],
                            [
                                [5],
                                [
                                    [2, '?:'],
                                    [
                                        [7],
                                        [3, 'disabled']
                                    ],
                                    [1, 'disabled'],
                                    [1, '']
                                ]
                            ]
                        ]
                    ]
                ])
                Z([
                    [7],
                    [3, 'disabled']
                ])
                Z([3, 'share'])
                Z([a, [
                    [2, '+'],
                    [
                        [2, '+'],
                        [1, ''],
                        [
                            [6],
                            [
                                [7],
                                [3, 'giveConf']
                            ],
                            [3, 'CONFIRM_TEXT']
                        ]
                    ],
                    [1, '']
                ]])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'status']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'statusEnum']
                        ],
                        [3, 'UNRECEIVE']
                    ]
                ])
                Z([3, '__e'])
                Z([3, 'btn data-v-de21e964'])
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
                                                    [1, 'onCancel']
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
                Z([a, [
                    [2, '+'],
                    [
                        [2, '+'],
                        [1, ''],
                        [
                            [6],
                            [
                                [7],
                                [3, 'giveConf']
                            ],
                            [3, 'CANCLE_TEXT']
                        ]
                    ],
                    [1, '']
                ]])
                Z([3, 'tip data-v-de21e964'])
                Z([a, [
                    [7],
                    [3, 'tip']
                ]])
                Z(z[7])
                Z(z[2])
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
                                                    [1, 'onConfirm']
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
                Z(z[3])
                Z([a, [
                    [2, '+'],
                    [
                        [2, '+'],
                        [1, ''],
                        [
                            [7],
                            [3, 'confirmText']
                        ]
                    ],
                    [1, '']
                ]])
                Z([3, '__l'])
                Z([3, 'data-v-de21e964'])
                Z([3, 'dfb5ca10-1'])
            })(__WXML_GLOBAL__.ops_cached.$gwx15_XC_24_2);
            return __WXML_GLOBAL__.ops_cached.$gwx15_XC_24_2
        }

        function gz$gwx15_XC_24_3() {
            if (__WXML_GLOBAL__.ops_cached.$gwx15_XC_24_3) return __WXML_GLOBAL__.ops_cached.$gwx15_XC_24_3
            __WXML_GLOBAL__.ops_cached.$gwx15_XC_24_3 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'title-box data-v-e42278a6'])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'role']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'roleEnum']
                        ],
                        [3, 'GIVER']
                    ]
                ])
                Z([3, 'title data-v-e42278a6'])
                Z([3, '好东西当然要大家一起分享～'])
                Z([3, 'sub-title data-v-e42278a6'])
                Z([3, '分享的快乐'])
                Z([3, 'head-portrait data-v-e42278a6'])
                Z([3, 'widthFix'])
                Z([
                    [7],
                    [3, 'sendUserIconUrl']
                ])
                Z([3, 'title receiver data-v-e42278a6'])
                Z([3, 'nick-name data-v-e42278a6'])
                Z([a, [
                    [7],
                    [3, 'sendUserNiceName']
                ]])
                Z([3, 'data-v-e42278a6'])
                Z([3, '送来了一份礼物'])
            })(__WXML_GLOBAL__.ops_cached.$gwx15_XC_24_3);
            return __WXML_GLOBAL__.ops_cached.$gwx15_XC_24_3
        }

        function gz$gwx15_XC_24_4() {
            if (__WXML_GLOBAL__.ops_cached.$gwx15_XC_24_4) return __WXML_GLOBAL__.ops_cached.$gwx15_XC_24_4
            __WXML_GLOBAL__.ops_cached.$gwx15_XC_24_4 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, '__l'])
                Z([3, 'data-v-68208cca'])
                Z([3, '6ac4b88c-1'])
                Z([
                    [4],
                    [
                        [5],
                        [1, 'default']
                    ]
                ])
                Z([3, 'gift data-v-68208cca'])
                Z([
                    [7],
                    [3, 'loaded']
                ])
                Z(z[0])
                Z(z[1])
                Z([
                    [7],
                    [3, 'role']
                ])
                Z([
                    [7],
                    [3, 'sendUserIconUrl']
                ])
                Z([
                    [7],
                    [3, 'sendUserNiceName']
                ])
                Z([
                    [2, '+'],
                    [
                        [2, '+'],
                        [1, '6ac4b88c-2'],
                        [1, ',']
                    ],
                    [1, '6ac4b88c-1']
                ])
                Z(z[0])
                Z([3, '__e'])
                Z(z[1])
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
                                    [1, '^onShowRule']
                                ],
                                [
                                    [4],
                                    [
                                        [5],
                                        [
                                            [4],
                                            [
                                                [5],
                                                [1, 'onShowRule']
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
                    [3, 'titleUrl']
                ])
                Z([1, true])
                Z([
                    [2, '+'],
                    [
                        [2, '+'],
                        [1, '6ac4b88c-3'],
                        [1, ',']
                    ],
                    [1, '6ac4b88c-1']
                ])
                Z([3, 'coupon-box data-v-68208cca'])
                Z(z[0])
                Z(z[13])
                Z(z[13])
                Z(z[1])
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
                                        [1, '^clearInterval']
                                    ],
                                    [
                                        [4],
                                        [
                                            [5],
                                            [
                                                [4],
                                                [
                                                    [5],
                                                    [1, 'clearInterval']
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
                                    [1, '^fetchGiftingInfo']
                                ],
                                [
                                    [4],
                                    [
                                        [5],
                                        [
                                            [4],
                                            [
                                                [5],
                                                [1, 'fetchGiftingInfo']
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
                    [3, 'receivedUserIconUrl']
                ])
                Z([
                    [7],
                    [3, 'receivedUserNiceName']
                ])
                Z(z[8])
                Z([
                    [7],
                    [3, 'sendTime']
                ])
                Z([
                    [7],
                    [3, 'status']
                ])
                Z([
                    [7],
                    [3, 'timeStamp']
                ])
                Z([
                    [2, '+'],
                    [
                        [2, '+'],
                        [1, '6ac4b88c-4'],
                        [1, ',']
                    ],
                    [1, '6ac4b88c-1']
                ])
                Z(z[0])
                Z(z[1])
                Z([
                    [7],
                    [3, 'coupons']
                ])
                Z([3, 'view'])
                Z([
                    [2, '+'],
                    [
                        [2, '+'],
                        [1, '6ac4b88c-5'],
                        [1, ',']
                    ],
                    [1, '6ac4b88c-1']
                ])
                Z(z[0])
                Z(z[1])
                Z([
                    [2, '+'],
                    [
                        [2, '+'],
                        [1, '6ac4b88c-6'],
                        [1, ',']
                    ],
                    [1, '6ac4b88c-1']
                ])
                Z(z[0])
                Z(z[13])
                Z(z[13])
                Z(z[1])
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
                                        [1, '^onConfirm']
                                    ],
                                    [
                                        [4],
                                        [
                                            [5],
                                            [
                                                [4],
                                                [
                                                    [5],
                                                    [1, 'onConfirm']
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
                                    [1, '^onCancel']
                                ],
                                [
                                    [4],
                                    [
                                        [5],
                                        [
                                            [4],
                                            [
                                                [5],
                                                [1, 'onCancel']
                                            ]
                                        ]
                                    ]
                                ]
                            ]
                        ]
                    ]
                ])
                Z(z[26])
                Z(z[8])
                Z(z[29])
                Z([
                    [2, '+'],
                    [
                        [2, '+'],
                        [1, '6ac4b88c-7'],
                        [1, ',']
                    ],
                    [1, '6ac4b88c-1']
                ])
                Z(z[0])
                Z([3, 'data-v-68208cca vue-ref'])
                Z([3, 'revokePop'])
                Z(z[17])
                Z([
                    [2, '+'],
                    [
                        [2, '+'],
                        [1, '6ac4b88c-8'],
                        [1, ',']
                    ],
                    [1, '6ac4b88c-1']
                ])
                Z(z[3])
                Z([3, 'revoke-pop data-v-68208cca'])
                Z([3, 'title data-v-68208cca'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'revokePopConf']
                    ],
                    [3, 'TITLE']
                ]])
                Z([3, 'content data-v-68208cca'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'revokePopConf']
                    ],
                    [3, 'CONTENT']
                ]])
                Z(z[13])
                Z([3, 'btn data-v-68208cca'])
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
                                                    [1, 'onRevoke']
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
                Z([a, [
                    [2, '+'],
                    [
                        [2, '+'],
                        [1, ''],
                        [
                            [6],
                            [
                                [7],
                                [3, 'revokePopConf']
                            ],
                            [3, 'CONFIRM_TEXT']
                        ]
                    ],
                    [1, '']
                ]])
                Z(z[0])
                Z(z[13])
                Z(z[13])
                Z(z[1])
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
                                        [1, '^touchmove']
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
                                    [1, '^input']
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
                                                    [1, '__set_model']
                                                ],
                                                [
                                                    [4],
                                                    [
                                                        [5],
                                                        [
                                                            [5],
                                                            [
                                                                [5],
                                                                [
                                                                    [5],
                                                                    [1, '']
                                                                ],
                                                                [1, 'showGiveRulePopup']
                                                            ],
                                                            [1, '$event']
                                                        ],
                                                        [
                                                            [4],
                                                            [
                                                                [5]
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
                    [6],
                    [
                        [7],
                        [3, 'giveRulePopupConf']
                    ],
                    [3, 'TITLE']
                ])
                Z([
                    [7],
                    [3, 'showGiveRulePopup']
                ])
                Z([
                    [2, '+'],
                    [
                        [2, '+'],
                        [1, '6ac4b88c-9'],
                        [1, ',']
                    ],
                    [1, '6ac4b88c-1']
                ])
                Z(z[3])
                Z([3, 'give-rule-popup data-v-68208cca'])
                Z([3, 'index'])
                Z([3, 'item'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'giveRulePopupConf']
                    ],
                    [3, 'CONTENT']
                ])
                Z(z[74])
                Z([3, 'rule data-v-68208cca'])
                Z([a, [
                    [7],
                    [3, 'item']
                ]])
                Z([
                    [7],
                    [3, 'showLoading']
                ])
                Z(z[0])
                Z(z[1])
                Z([1, false])
                Z(z[17])
                Z([
                    [2, '+'],
                    [
                        [2, '+'],
                        [1, '6ac4b88c-10'],
                        [1, ',']
                    ],
                    [1, '6ac4b88c-1']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx15_XC_24_4);
            return __WXML_GLOBAL__.ops_cached.$gwx15_XC_24_4
        }
        __WXML_GLOBAL__.ops_set.$gwx15_XC_24 = z;
        __WXML_GLOBAL__.ops_init.$gwx15_XC_24 = true;
        var x = ['./packageAssets/superValueCard/gift/components/CouponTitle/CouponTitle.wxml', './packageAssets/superValueCard/gift/components/FixedButton/FixedButton.wxml', './packageAssets/superValueCard/gift/components/Header/Header.wxml', './packageAssets/superValueCard/gift/gift.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx15_XC_24_1()
            var aXIB = _n('view')
            _rz(z, aXIB, 'class', 0, e, s, gg)
            var tYIB = _v()
            _(aXIB, tYIB)
            if (_oz(z, 1, e, s, gg)) {
                tYIB.wxVkey = 1
                var eZIB = _n('view')
                _rz(z, eZIB, 'class', 2, e, s, gg)
                var b1IB = _oz(z, 3, e, s, gg)
                _(eZIB, b1IB)
                _(tYIB, eZIB)
                var o2IB = _n('view')
                _rz(z, o2IB, 'class', 4, e, s, gg)
                var x3IB = _v()
                _(o2IB, x3IB)
                if (_oz(z, 5, e, s, gg)) {
                    x3IB.wxVkey = 1
                    var f5IB = _mz(z, 'image', ['class', 6, 'mode', 1, 'src', 2], [], e, s, gg)
                    _(x3IB, f5IB)
                }
                var o4IB = _v()
                _(o2IB, o4IB)
                if (_oz(z, 9, e, s, gg)) {
                    o4IB.wxVkey = 1
                    var c6IB = _n('text')
                    _rz(z, c6IB, 'class', 10, e, s, gg)
                    var h7IB = _oz(z, 11, e, s, gg)
                    _(c6IB, h7IB)
                    _(o4IB, c6IB)
                }
                var o8IB = _n('text')
                _rz(z, o8IB, 'class', 12, e, s, gg)
                var c9IB = _oz(z, 13, e, s, gg)
                _(o8IB, c9IB)
                _(o2IB, o8IB)
                x3IB.wxXCkey = 1
                o4IB.wxXCkey = 1
                _(tYIB, o2IB)
            } else {
                tYIB.wxVkey = 2
                var o0IB = _n('view')
                _rz(z, o0IB, 'class', 14, e, s, gg)
                var lAJB = _oz(z, 15, e, s, gg)
                _(o0IB, lAJB)
                _(tYIB, o0IB)
            }
            tYIB.wxXCkey = 1
            _(r, aXIB)
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
            var z = gz$gwx15_XC_24_2()
            var tCJB = _n('view')
            _rz(z, tCJB, 'class', 0, e, s, gg)
            var eDJB = _v()
            _(tCJB, eDJB)
            if (_oz(z, 1, e, s, gg)) {
                eDJB.wxVkey = 1
                var oFJB = _mz(z, 'button', ['class', 2, 'disabled', 1, 'openType', 2], [], e, s, gg)
                var xGJB = _oz(z, 5, e, s, gg)
                _(oFJB, xGJB)
                _(eDJB, oFJB)
                var bEJB = _v()
                _(eDJB, bEJB)
                if (_oz(z, 6, e, s, gg)) {
                    bEJB.wxVkey = 1
                    var oHJB = _mz(z, 'view', ['bindtap', 7, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
                    var fIJB = _oz(z, 10, e, s, gg)
                    _(oHJB, fIJB)
                    _(bEJB, oHJB)
                }
                bEJB.wxXCkey = 1
            } else {
                eDJB.wxVkey = 2
                var cJJB = _n('view')
                _rz(z, cJJB, 'class', 11, e, s, gg)
                var hKJB = _oz(z, 12, e, s, gg)
                _(cJJB, hKJB)
                _(eDJB, cJJB)
                var oLJB = _mz(z, 'button', ['bindtap', 13, 'class', 1, 'data-event-opts', 2, 'disabled', 3], [], e, s, gg)
                var cMJB = _oz(z, 17, e, s, gg)
                _(oLJB, cMJB)
                _(eDJB, oLJB)
            }
            var oNJB = _mz(z, 'safe-bottom', ['bind:__l', 18, 'class', 1, 'vueId', 2], [], e, s, gg)
            _(tCJB, oNJB)
            eDJB.wxXCkey = 1
            _(r, tCJB)
            return r
        }
        e_[x[1]] = {
            f: m1,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        d_[x[2]] = {}
        var m2 = function(e, s, r, gg) {
            var z = gz$gwx15_XC_24_3()
            var aPJB = _n('view')
            _rz(z, aPJB, 'class', 0, e, s, gg)
            var tQJB = _v()
            _(aPJB, tQJB)
            if (_oz(z, 1, e, s, gg)) {
                tQJB.wxVkey = 1
                var eRJB = _n('view')
                _rz(z, eRJB, 'class', 2, e, s, gg)
                var bSJB = _oz(z, 3, e, s, gg)
                _(eRJB, bSJB)
                _(tQJB, eRJB)
                var oTJB = _n('view')
                _rz(z, oTJB, 'class', 4, e, s, gg)
                var xUJB = _oz(z, 5, e, s, gg)
                _(oTJB, xUJB)
                _(tQJB, oTJB)
            } else {
                tQJB.wxVkey = 2
                var oVJB = _mz(z, 'image', ['class', 6, 'mode', 1, 'src', 2], [], e, s, gg)
                _(tQJB, oVJB)
                var fWJB = _n('view')
                _rz(z, fWJB, 'class', 9, e, s, gg)
                var cXJB = _n('text')
                _rz(z, cXJB, 'class', 10, e, s, gg)
                var hYJB = _oz(z, 11, e, s, gg)
                _(cXJB, hYJB)
                _(fWJB, cXJB)
                var oZJB = _n('text')
                _rz(z, oZJB, 'class', 12, e, s, gg)
                var c1JB = _oz(z, 13, e, s, gg)
                _(oZJB, c1JB)
                _(fWJB, oZJB)
                _(tQJB, fWJB)
            }
            tQJB.wxXCkey = 1
            _(r, aPJB)
            return r
        }
        e_[x[2]] = {
            f: m2,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        d_[x[3]] = {}
        var m3 = function(e, s, r, gg) {
            var z = gz$gwx15_XC_24_4()
            var l3JB = _mz(z, 'page-view', ['bind:__l', 0, 'class', 1, 'vueId', 1, 'vueSlots', 2], [], e, s, gg)
            var a4JB = _n('view')
            _rz(z, a4JB, 'class', 4, e, s, gg)
            var t5JB = _v()
            _(a4JB, t5JB)
            if (_oz(z, 5, e, s, gg)) {
                t5JB.wxVkey = 1
                var b7JB = _mz(z, 'header', ['bind:__l', 6, 'class', 1, 'role', 2, 'sendUserIconUrl', 3, 'sendUserNiceName', 4, 'vueId', 5], [], e, s, gg)
                _(t5JB, b7JB)
                var o8JB = _mz(z, 'gift-card', ['bind:__l', 12, 'bind:onShowRule', 1, 'class', 2, 'data-event-opts', 3, 'imageUrl', 4, 'showRule', 5, 'vueId', 6], [], e, s, gg)
                _(t5JB, o8JB)
                var x9JB = _n('view')
                _rz(z, x9JB, 'class', 19, e, s, gg)
                var o0JB = _mz(z, 'coupon-title', ['bind:__l', 20, 'bind:clearInterval', 1, 'bind:fetchGiftingInfo', 2, 'class', 3, 'data-event-opts', 4, 'receivedUserIconUrl', 5, 'receivedUserNiceName', 6, 'role', 7, 'sendTime', 8, 'status', 9, 'timeStamp', 10, 'vueId', 11], [], e, s, gg)
                _(x9JB, o0JB)
                var fAKB = _mz(z, 'coupon-cell', ['bind:__l', 32, 'class', 1, 'coupons', 2, 'mode', 3, 'vueId', 4], [], e, s, gg)
                _(x9JB, fAKB)
                var cBKB = _mz(z, 'safe-bottom', ['bind:__l', 37, 'class', 1, 'vueId', 2], [], e, s, gg)
                _(x9JB, cBKB)
                _(t5JB, x9JB)
                var hCKB = _mz(z, 'fixed-button', ['bind:__l', 40, 'bind:onCancel', 1, 'bind:onConfirm', 2, 'class', 3, 'data-event-opts', 4, 'receivedUserNiceName', 5, 'role', 6, 'status', 7, 'vueId', 8], [], e, s, gg)
                _(t5JB, hCKB)
                var oDKB = _mz(z, 'ga-home-pop', ['bind:__l', 49, 'class', 1, 'data-ref', 2, 'isShowClose', 3, 'vueId', 4, 'vueSlots', 5], [], e, s, gg)
                var cEKB = _n('view')
                _rz(z, cEKB, 'class', 55, e, s, gg)
                var oFKB = _n('view')
                _rz(z, oFKB, 'class', 56, e, s, gg)
                var lGKB = _oz(z, 57, e, s, gg)
                _(oFKB, lGKB)
                _(cEKB, oFKB)
                var aHKB = _n('view')
                _rz(z, aHKB, 'class', 58, e, s, gg)
                var tIKB = _oz(z, 59, e, s, gg)
                _(aHKB, tIKB)
                _(cEKB, aHKB)
                var eJKB = _mz(z, 'view', ['bindtap', 60, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
                var bKKB = _oz(z, 63, e, s, gg)
                _(eJKB, bKKB)
                _(cEKB, eJKB)
                _(oDKB, cEKB)
                _(t5JB, oDKB)
                var oLKB = _mz(z, 'ga-popup', ['bind:__l', 64, 'bind:input', 1, 'catch:touchmove', 2, 'class', 3, 'data-event-opts', 4, 'title', 5, 'value', 6, 'vueId', 7, 'vueSlots', 8], [], e, s, gg)
                var xMKB = _n('view')
                _rz(z, xMKB, 'class', 73, e, s, gg)
                var oNKB = _v()
                _(xMKB, oNKB)
                var fOKB = function(hQKB, cPKB, oRKB, gg) {
                    var oTKB = _n('view')
                    _rz(z, oTKB, 'class', 78, hQKB, cPKB, gg)
                    var lUKB = _oz(z, 79, hQKB, cPKB, gg)
                    _(oTKB, lUKB)
                    _(oRKB, oTKB)
                    return oRKB
                }
                oNKB.wxXCkey = 2
                _2z(z, 76, fOKB, e, s, gg, oNKB, 'item', 'index', 'index')
                _(oLKB, xMKB)
                _(t5JB, oLKB)
            }
            var e6JB = _v()
            _(a4JB, e6JB)
            if (_oz(z, 80, e, s, gg)) {
                e6JB.wxVkey = 1
                var aVKB = _mz(z, 'custom-loading', ['bind:__l', 81, 'class', 1, 'isMask', 2, 'isTemplate', 3, 'vueId', 4], [], e, s, gg)
                _(e6JB, aVKB)
            }
            t5JB.wxXCkey = 1
            t5JB.wxXCkey = 3
            e6JB.wxXCkey = 1
            e6JB.wxXCkey = 3
            _(l3JB, a4JB)
            _(r, l3JB)
            return r
        }
        e_[x[3]] = {
            f: m3,
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
                g = "$gwx15_XC_24";
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
if (__vd_version_info__.delayedGwx || false) $gwx15_XC_24();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packageAssets/superValueCard/gift/components/CouponTitle/CouponTitle.wxml'] = [$gwx15_XC_24, './packageAssets/superValueCard/gift/components/CouponTitle/CouponTitle.wxml'];
else __wxAppCode__['packageAssets/superValueCard/gift/components/CouponTitle/CouponTitle.wxml'] = $gwx15_XC_24('./packageAssets/superValueCard/gift/components/CouponTitle/CouponTitle.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['packageAssets/superValueCard/gift/components/FixedButton/FixedButton.wxml'] = [$gwx15_XC_24, './packageAssets/superValueCard/gift/components/FixedButton/FixedButton.wxml'];
else __wxAppCode__['packageAssets/superValueCard/gift/components/FixedButton/FixedButton.wxml'] = $gwx15_XC_24('./packageAssets/superValueCard/gift/components/FixedButton/FixedButton.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['packageAssets/superValueCard/gift/components/Header/Header.wxml'] = [$gwx15_XC_24, './packageAssets/superValueCard/gift/components/Header/Header.wxml'];
else __wxAppCode__['packageAssets/superValueCard/gift/components/Header/Header.wxml'] = $gwx15_XC_24('./packageAssets/superValueCard/gift/components/Header/Header.wxml');
if (__vd_version_info__.delayedGwx) __wxAppCode__['packageAssets/superValueCard/gift/gift.wxml'] = [$gwx15_XC_24, './packageAssets/superValueCard/gift/gift.wxml'];
else __wxAppCode__['packageAssets/superValueCard/gift/gift.wxml'] = $gwx15_XC_24('./packageAssets/superValueCard/gift/gift.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['packageAssets/superValueCard/gift/components/CouponTitle/CouponTitle.wxss'] = setCssToHead([".", [1], "coupon-title.", [1], "data-v-261dcbfa{margin-bottom:", [0, 48], "}\n.", [1], "coupon-title.", [1], "receiver.", [1], "data-v-261dcbfa{margin-bottom:", [0, 32], "}\n.", [1], "coupon-title .", [1], "title.", [1], "data-v-261dcbfa{color:#212121;font-size:", [0, 36], ";font-weight:500;line-height:", [0, 50], ";text-align:center}\n.", [1], "coupon-title .", [1], "sub-title.", [1], "data-v-261dcbfa{-webkit-align-items:center;align-items:center;color:#999;display:-webkit-flex;display:flex;font-size:", [0, 26], ";font-weight:400;-webkit-justify-content:center;justify-content:center;line-height:", [0, 36], ";margin-top:", [0, 16], ";text-align:center}\n.", [1], "coupon-title .", [1], "sub-title .", [1], "head-portrait.", [1], "data-v-261dcbfa{border-radius:50%;height:", [0, 48], ";margin-right:", [0, 15], ";width:", [0, 48], "}\n.", [1], "coupon-title .", [1], "sub-title .", [1], "diff-time.", [1], "data-v-261dcbfa{text-align:left;width:", [0, 115], "}\n", ], undefined, {
        path: "./packageAssets/superValueCard/gift/components/CouponTitle/CouponTitle.wxss"
    });
    __wxAppCode__['packageAssets/superValueCard/gift/components/FixedButton/FixedButton.wxss'] = setCssToHead([".", [1], "fixed-button.", [1], "data-v-de21e964{background:#fff;bottom:0;box-sizing:border-box;left:0;padding:0 ", [0, 48], ";position:fixed;width:100%;z-index:2}\n.", [1], "fixed-button .", [1], "tip.", [1], "data-v-de21e964{color:#666;font-size:", [0, 26], ";font-weight:400;line-height:", [0, 36], ";margin-top:", [0, 16], ";text-align:center}\n.", [1], "fixed-button .", [1], "btn.", [1], "data-v-de21e964{border-radius:", [0, 40], ";color:#999;font-size:", [0, 32], ";font-weight:400;height:", [0, 80], ";line-height:", [0, 80], ";margin-top:", [0, 16], ";text-align:center;width:100%}\n.", [1], "fixed-button .", [1], "btn.", [1], "confirm.", [1], "data-v-de21e964{background:#ff4c58;color:#fff;margin-bottom:", [0, 16], "}\n.", [1], "fixed-button .", [1], "btn.", [1], "confirm.", [1], "disabled.", [1], "data-v-de21e964{opacity:.3}\n", ], undefined, {
        path: "./packageAssets/superValueCard/gift/components/FixedButton/FixedButton.wxss"
    });
    __wxAppCode__['packageAssets/superValueCard/gift/components/Header/Header.wxss'] = setCssToHead([".", [1], "title-box.", [1], "data-v-e42278a6{-webkit-align-items:center;align-items:center;background:#fff5f5;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-justify-content:center;justify-content:center;padding:", [0, 32], " 0}\n.", [1], "title-box .", [1], "head-portrait.", [1], "data-v-e42278a6{border-radius:50%;height:", [0, 120], ";margin-bottom:", [0, 16], ";width:", [0, 120], "}\n.", [1], "title-box .", [1], "title.", [1], "data-v-e42278a6{color:#212121;font-size:", [0, 40], ";font-weight:500;line-height:", [0, 56], "}\n.", [1], "title-box .", [1], "title.", [1], "receiver.", [1], "data-v-e42278a6{font-size:", [0, 32], ";font-weight:400;line-height:", [0, 46], "}\n.", [1], "title-box .", [1], "title.", [1], "receiver .", [1], "nick-name.", [1], "data-v-e42278a6{font-weight:500;margin-right:", [0, 16], "}\n.", [1], "title-box .", [1], "sub-title.", [1], "data-v-e42278a6{color:#999;font-size:", [0, 30], ";font-weight:400;line-height:", [0, 42], ";margin-top:", [0, 8], "}\n", ], undefined, {
        path: "./packageAssets/superValueCard/gift/components/Header/Header.wxss"
    });
    __wxAppCode__['packageAssets/superValueCard/gift/gift.wxss'] = setCssToHead([".", [1], "gift.", [1], "data-v-68208cca{background:#fff;box-sizing:border-box;height:100vh;width:100%}\n.", [1], "gift .", [1], "coupon-box.", [1], "data-v-68208cca{background:#fff;border-radius:", [0, 24], " ", [0, 24], " ", [0, 0], " ", [0, 0], ";box-shadow:", [0, 0], " ", [0, -16], " ", [0, 16], " rgba(0,0,0,.2);box-sizing:border-box;margin-top:", [0, -32], ";padding:", [0, 48], " ", [0, 48], " ", [0, 180], ";position:relative;width:100%;z-index:1}\n.", [1], "gift .", [1], "revoke-pop.", [1], "data-v-68208cca{-webkit-align-items:center;align-items:center;background:#fff;border-radius:", [0, 16], ";box-sizing:border-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;padding:", [0, 40], ";width:", [0, 600], "}\n.", [1], "gift .", [1], "revoke-pop .", [1], "title.", [1], "data-v-68208cca{color:#212121;font-size:", [0, 36], ";font-weight:500;line-height:", [0, 50], ";margin-bottom:", [0, 32], ";text-align:center}\n.", [1], "gift .", [1], "revoke-pop .", [1], "content.", [1], "data-v-68208cca{color:#212121;font-size:", [0, 32], ";font-weight:400;line-height:", [0, 46], ";margin-bottom:", [0, 32], "}\n.", [1], "gift .", [1], "revoke-pop .", [1], "btn.", [1], "data-v-68208cca{background:#ff4c58;border-radius:", [0, 40], ";color:#fff;font-size:", [0, 32], ";font-weight:500;height:", [0, 80], ";line-height:", [0, 80], ";text-align:center;width:", [0, 440], "}\n.", [1], "gift .", [1], "give-rule-popup.", [1], "data-v-68208cca{color:#666;font-size:", [0, 30], ";font-weight:400;line-height:", [0, 42], ";padding:", [0, 32], "}\n.", [1], "gift .", [1], "give-rule-popup .", [1], "rule.", [1], "data-v-68208cca{margin-bottom:", [0, 24], "}\n", ], undefined, {
        path: "./packageAssets/superValueCard/gift/gift.wxss"
    });
}