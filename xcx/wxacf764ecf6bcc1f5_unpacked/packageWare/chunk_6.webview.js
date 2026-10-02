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
                Z([3, 'suit-bar bar data-v-7a56b5fa'])
                Z([
                    [7],
                    [3, 'currentSuit']
                ])
                Z([1, true])
                Z(z[9])
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
                Z(z[11])
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
                Z([3, 'name data-v-7a56b5fa'])
                Z([a, [
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'suit']
                        ],
                        [3, '$orig']
                    ],
                    [3, 'suitName']
                ]])
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
                Z([3, 'divider data-v-7a56b5fa'])
                Z([3, 'amount data-v-7a56b5fa'])
                Z([a, [
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
                ]])
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
                Z([3, 'group-bar bar data-v-7a56b5fa'])
                Z([
                    [7],
                    [3, 'currentGroup']
                ])
                Z(z[9])
                Z(z[9])
                Z(z[11])
                Z([3, 'group'])
                Z([
                    [7],
                    [3, 'groupSuitSkuList']
                ])
                Z(z[11])
                Z(z[15])
                Z([3, 'group-item data-v-7a56b5fa'])
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
                                                                    [1, 'Group']
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
                                                                                [1, 'groupSuitSkuList']
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
                    [1, 'Group'],
                    [
                        [7],
                        [3, 'index']
                    ]
                ])
                Z([
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
                                    [3, 'currentGroupIndex']
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
                ])
                Z(z[20])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'group']
                    ],
                    [3, 'groupName']
                ]])
                Z([3, 'type data-v-7a56b5fa'])
                Z([a, [
                    [2, '+'],
                    [
                        [2, '+'],
                        [1, '（多选'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'group']
                            ],
                            [3, 'enjoyTriggerNum']
                        ]
                    ],
                    [1, '）']
                ]])
                Z([3, 'ware-domain data-v-7a56b5fa'])
                Z(z[9])
                Z(z[9])
                Z([1, false])
                Z([3, 'ware-list data-v-7a56b5fa'])
                Z(z[11])
                Z([3, 'ware'])
                Z([
                    [6],
                    [
                        [7],
                        [3, '$root']
                    ],
                    [3, 'l1']
                ])
                Z(z[11])
                Z(z[15])
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
                Z(z[26])
                Z([3, 'select-btn data-v-7a56b5fa'])
                Z([
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
                ])
                Z([
                    [4],
                    [
                        [5],
                        [
                            [5],
                            [1, 'data-v-7a56b5fa']
                        ],
                        [
                            [2, '?:'],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'ware']
                                ],
                                [3, 'm0']
                            ],
                            [1, 'icon_checked iconfont'],
                            [1, 'icon_unchecked iconfont']
                        ]
                    ]
                ])
                Z([
                    [2, '+'],
                    [
                        [2, '+'],
                        [1, 'color:'],
                        [
                            [2, '?:'],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'ware']
                                ],
                                [3, 'm1']
                            ],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'theme']
                                ],
                                [3, 'mainColor']
                            ],
                            [1, '#DDDDDD']
                        ]
                    ],
                    [1, ';']
                ])
                Z([3, 'diabled _img data-v-7a56b5fa'])
                Z([3, 'https://img.dmallcdn.com/dshop/202312/e9dea689-65ba-4c12-921d-cd5aafa82cf7'])
                Z([3, 'placeholder data-v-7a56b5fa'])
                Z([3, 'ware-info data-v-7a56b5fa'])
                Z([3, 'img-box data-v-7a56b5fa'])
                Z([3, 'img _img data-v-7a56b5fa'])
                Z([
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'ware']
                        ],
                        [3, '$orig']
                    ],
                    [3, 'imgUrl']
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
                Z([3, 'empty data-v-7a56b5fa'])
                Z([3, 'text data-v-7a56b5fa'])
                Z([3, '售罄'])
                Z([3, 'right data-v-7a56b5fa'])
                Z(z[20])
                Z([a, [
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'ware']
                        ],
                        [3, '$orig']
                    ],
                    [3, 'skuName']
                ]])
                Z([3, 'bottom data-v-7a56b5fa'])
                Z(z[24])
                Z([
                    [2, '+'],
                    [
                        [2, '+'],
                        [1, 'color:'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'theme']
                            ],
                            [3, 'secondColor']
                        ]
                    ],
                    [1, ';']
                ])
                Z([3, '￥'])
                Z(z[1])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'ware']
                    ],
                    [3, 'm2']
                ]])
                Z([3, 'num data-v-7a56b5fa'])
                Z([a, [
                    [2, '+'],
                    [1, 'x'],
                    [
                        [2, '||'],
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
                            [3, 'rewardQty']
                        ],
                        [1, 1]
                    ]
                ]])
                Z([3, 'tip data-v-7a56b5fa'])
                Z([3, '您已经拉到底了'])
                Z([3, 'footer data-v-7a56b5fa'])
                Z(z[26])
                Z([
                    [6],
                    [
                        [7],
                        [3, '$root']
                    ],
                    [3, 'g1']
                ])
                Z([3, 'select-ware data-v-7a56b5fa'])
                Z(z[1])
                Z([
                    [7],
                    [3, 'selectWareContent']
                ])
                Z(z[75])
                Z([3, 'left data-v-7a56b5fa'])
                Z([3, 'price data-v-7a56b5fa'])
                Z([3, 'suit-price data-v-7a56b5fa'])
                Z(z[77])
                Z(z[78])
                Z(z[1])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, '$root']
                    ],
                    [3, 'm3']
                ]])
                Z([3, 'origin-price data-v-7a56b5fa'])
                Z([a, [
                    [2, '+'],
                    [1, '￥'],
                    [
                        [6],
                        [
                            [7],
                            [3, '$root']
                        ],
                        [3, 'm4']
                    ]
                ]])
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
                Z([3, 'remark data-v-7a56b5fa'])
                Z([a, [
                    [2, '+'],
                    [
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
                    ],
                    [1, '件起购']
                ]])
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
                        [3, 'sell']
                    ]
                ])
                Z(z[15])
                Z(z[72])
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
                                                    [1, 'addCart']
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
                    [2, '+'],
                    [
                        [2, '+'],
                        [1, 'background:'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'theme']
                            ],
                            [3, 'mainColor']
                        ]
                    ],
                    [1, ';']
                ])
                Z([3, '加入购物车'])
                Z([3, 'right disabled data-v-7a56b5fa'])
                Z([a, [
                    [2, '+'],
                    [
                        [2, '+'],
                        [1, ''],
                        [
                            [2, '||'],
                            [
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
                                    [3, 'sellContent']
                                ]
                            ],
                            [1, '抢光了']
                        ]
                    ],
                    [1, '']
                ]])
                Z(z[0])
                Z(z[15])
                Z(z[15])
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
                Z(z[1])
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
            var fICB = _mz(z, 'page-view', ['bind:__l', 0, 'class', 1, 'vueId', 1, 'vueSlots', 2], [], e, s, gg)
            var cJCB = _v()
            _(fICB, cJCB)
            if (_oz(z, 4, e, s, gg)) {
                cJCB.wxVkey = 1
                var hKCB = _n('view')
                _rz(z, hKCB, 'class', 5, e, s, gg)
                var oLCB = _n('view')
                _rz(z, oLCB, 'class', 6, e, s, gg)
                var oNCB = _mz(z, 'scroll-view', ['class', 7, 'scrollIntoView', 1, 'scrollWithAnimation', 2, 'scrollX', 3], [], e, s, gg)
                var lOCB = _v()
                _(oNCB, lOCB)
                var aPCB = function(eRCB, tQCB, bSCB, gg) {
                    var xUCB = _mz(z, 'view', ['bindtap', 15, 'class', 1, 'data-event-opts', 2, 'id', 3, 'style', 4], [], eRCB, tQCB, gg)
                    var fWCB = _n('view')
                    _rz(z, fWCB, 'class', 20, eRCB, tQCB, gg)
                    var cXCB = _oz(z, 21, eRCB, tQCB, gg)
                    _(fWCB, cXCB)
                    _(xUCB, fWCB)
                    var oVCB = _v()
                    _(xUCB, oVCB)
                    if (_oz(z, 22, eRCB, tQCB, gg)) {
                        oVCB.wxVkey = 1
                        var hYCB = _n('view')
                        _rz(z, hYCB, 'class', 23, eRCB, tQCB, gg)
                        _(oVCB, hYCB)
                        var oZCB = _n('view')
                        _rz(z, oZCB, 'class', 24, eRCB, tQCB, gg)
                        var c1CB = _oz(z, 25, eRCB, tQCB, gg)
                        _(oZCB, c1CB)
                        _(oVCB, oZCB)
                    }
                    oVCB.wxXCkey = 1
                    _(bSCB, xUCB)
                    return bSCB
                }
                lOCB.wxXCkey = 2
                _2z(z, 13, aPCB, e, s, gg, lOCB, 'suit', 'index', 'index')
                _(oLCB, oNCB)
                var cMCB = _v()
                _(oLCB, cMCB)
                if (_oz(z, 26, e, s, gg)) {
                    cMCB.wxVkey = 1
                    var o2CB = _mz(z, 'scroll-view', ['class', 27, 'scrollIntoView', 1, 'scrollWithAnimation', 2, 'scrollX', 3], [], e, s, gg)
                    var l3CB = _v()
                    _(o2CB, l3CB)
                    var a4CB = function(e6CB, t5CB, b7CB, gg) {
                        var x9CB = _mz(z, 'view', ['bindtap', 35, 'class', 1, 'data-event-opts', 2, 'id', 3, 'style', 4], [], e6CB, t5CB, gg)
                        var o0CB = _n('view')
                        _rz(z, o0CB, 'class', 40, e6CB, t5CB, gg)
                        var fADB = _oz(z, 41, e6CB, t5CB, gg)
                        _(o0CB, fADB)
                        _(x9CB, o0CB)
                        var cBDB = _n('view')
                        _rz(z, cBDB, 'class', 42, e6CB, t5CB, gg)
                        var hCDB = _oz(z, 43, e6CB, t5CB, gg)
                        _(cBDB, hCDB)
                        _(x9CB, cBDB)
                        _(b7CB, x9CB)
                        return b7CB
                    }
                    l3CB.wxXCkey = 2
                    _2z(z, 33, a4CB, e, s, gg, l3CB, 'group', 'index', 'index')
                    _(cMCB, o2CB)
                }
                cMCB.wxXCkey = 1
                _(hKCB, oLCB)
                var oDDB = _mz(z, 'scroll-view', ['class', 44, 'enhanced', 1, 'scrollY', 2, 'showScrollbar', 3], [], e, s, gg)
                var cEDB = _n('view')
                _rz(z, cEDB, 'class', 48, e, s, gg)
                var oFDB = _v()
                _(cEDB, oFDB)
                var lGDB = function(tIDB, aHDB, eJDB, gg) {
                    var oLDB = _mz(z, 'view', ['bindtap', 53, 'class', 1, 'data-event-opts', 2], [], tIDB, aHDB, gg)
                    var xMDB = _v()
                    _(oLDB, xMDB)
                    if (_oz(z, 56, tIDB, aHDB, gg)) {
                        xMDB.wxVkey = 1
                        var oNDB = _n('view')
                        _rz(z, oNDB, 'class', 57, tIDB, aHDB, gg)
                        var fODB = _v()
                        _(oNDB, fODB)
                        if (_oz(z, 58, tIDB, aHDB, gg)) {
                            fODB.wxVkey = 1
                            var cPDB = _mz(z, 'text', ['class', 59, 'style', 1], [], tIDB, aHDB, gg)
                            _(fODB, cPDB)
                        } else {
                            fODB.wxVkey = 2
                            var hQDB = _mz(z, 'image', ['class', 61, 'src', 1], [], tIDB, aHDB, gg)
                            _(fODB, hQDB)
                        }
                        fODB.wxXCkey = 1
                        _(xMDB, oNDB)
                    } else {
                        xMDB.wxVkey = 2
                        var oRDB = _n('view')
                        _rz(z, oRDB, 'class', 63, tIDB, aHDB, gg)
                        _(xMDB, oRDB)
                    }
                    var cSDB = _n('view')
                    _rz(z, cSDB, 'class', 64, tIDB, aHDB, gg)
                    var oTDB = _n('view')
                    _rz(z, oTDB, 'class', 65, tIDB, aHDB, gg)
                    var aVDB = _mz(z, 'image', ['class', 66, 'src', 1], [], tIDB, aHDB, gg)
                    _(oTDB, aVDB)
                    var lUDB = _v()
                    _(oTDB, lUDB)
                    if (_oz(z, 68, tIDB, aHDB, gg)) {
                        lUDB.wxVkey = 1
                        var tWDB = _n('view')
                        _rz(z, tWDB, 'class', 69, tIDB, aHDB, gg)
                        var eXDB = _n('text')
                        _rz(z, eXDB, 'class', 70, tIDB, aHDB, gg)
                        var bYDB = _oz(z, 71, tIDB, aHDB, gg)
                        _(eXDB, bYDB)
                        _(tWDB, eXDB)
                        _(lUDB, tWDB)
                    }
                    lUDB.wxXCkey = 1
                    _(cSDB, oTDB)
                    var oZDB = _n('view')
                    _rz(z, oZDB, 'class', 72, tIDB, aHDB, gg)
                    var x1DB = _n('view')
                    _rz(z, x1DB, 'class', 73, tIDB, aHDB, gg)
                    var o2DB = _oz(z, 74, tIDB, aHDB, gg)
                    _(x1DB, o2DB)
                    _(oZDB, x1DB)
                    var f3DB = _n('view')
                    _rz(z, f3DB, 'class', 75, tIDB, aHDB, gg)
                    var c4DB = _mz(z, 'view', ['class', 76, 'style', 1], [], tIDB, aHDB, gg)
                    var h5DB = _oz(z, 78, tIDB, aHDB, gg)
                    _(c4DB, h5DB)
                    var o6DB = _n('text')
                    _rz(z, o6DB, 'class', 79, tIDB, aHDB, gg)
                    var c7DB = _oz(z, 80, tIDB, aHDB, gg)
                    _(o6DB, c7DB)
                    _(c4DB, o6DB)
                    _(f3DB, c4DB)
                    var o8DB = _n('view')
                    _rz(z, o8DB, 'class', 81, tIDB, aHDB, gg)
                    var l9DB = _oz(z, 82, tIDB, aHDB, gg)
                    _(o8DB, l9DB)
                    _(f3DB, o8DB)
                    _(oZDB, f3DB)
                    _(cSDB, oZDB)
                    _(oLDB, cSDB)
                    xMDB.wxXCkey = 1
                    _(eJDB, oLDB)
                    return eJDB
                }
                oFDB.wxXCkey = 2
                _2z(z, 51, lGDB, e, s, gg, oFDB, 'ware', 'index', 'index')
                _(oDDB, cEDB)
                var a0DB = _n('view')
                _rz(z, a0DB, 'class', 83, e, s, gg)
                var tAEB = _oz(z, 84, e, s, gg)
                _(a0DB, tAEB)
                _(oDDB, a0DB)
                _(hKCB, oDDB)
                var eBEB = _n('view')
                _rz(z, eBEB, 'class', 85, e, s, gg)
                var bCEB = _v()
                _(eBEB, bCEB)
                if (_oz(z, 86, e, s, gg)) {
                    bCEB.wxVkey = 1
                    var oDEB = _v()
                    _(bCEB, oDEB)
                    if (_oz(z, 87, e, s, gg)) {
                        oDEB.wxVkey = 1
                        var xEEB = _n('view')
                        _rz(z, xEEB, 'class', 88, e, s, gg)
                        var oFEB = _mz(z, 'rich-text', ['class', 89, 'nodes', 1], [], e, s, gg)
                        _(xEEB, oFEB)
                        _(oDEB, xEEB)
                    }
                    oDEB.wxXCkey = 1
                }
                var fGEB = _n('view')
                _rz(z, fGEB, 'class', 91, e, s, gg)
                var hIEB = _n('view')
                _rz(z, hIEB, 'class', 92, e, s, gg)
                var cKEB = _n('view')
                _rz(z, cKEB, 'class', 93, e, s, gg)
                var oLEB = _mz(z, 'view', ['class', 94, 'style', 1], [], e, s, gg)
                var lMEB = _oz(z, 96, e, s, gg)
                _(oLEB, lMEB)
                var aNEB = _n('text')
                _rz(z, aNEB, 'class', 97, e, s, gg)
                var tOEB = _oz(z, 98, e, s, gg)
                _(aNEB, tOEB)
                _(oLEB, aNEB)
                _(cKEB, oLEB)
                var ePEB = _n('view')
                _rz(z, ePEB, 'class', 99, e, s, gg)
                var bQEB = _oz(z, 100, e, s, gg)
                _(ePEB, bQEB)
                _(cKEB, ePEB)
                _(hIEB, cKEB)
                var oJEB = _v()
                _(hIEB, oJEB)
                if (_oz(z, 101, e, s, gg)) {
                    oJEB.wxVkey = 1
                    var oREB = _n('view')
                    _rz(z, oREB, 'class', 102, e, s, gg)
                    var xSEB = _oz(z, 103, e, s, gg)
                    _(oREB, xSEB)
                    _(oJEB, oREB)
                }
                oJEB.wxXCkey = 1
                _(fGEB, hIEB)
                var cHEB = _v()
                _(fGEB, cHEB)
                if (_oz(z, 104, e, s, gg)) {
                    cHEB.wxVkey = 1
                    var oTEB = _mz(z, 'view', ['bindtap', 105, 'class', 1, 'data-event-opts', 2, 'style', 3], [], e, s, gg)
                    var fUEB = _oz(z, 109, e, s, gg)
                    _(oTEB, fUEB)
                    _(cHEB, oTEB)
                } else {
                    cHEB.wxVkey = 2
                    var cVEB = _n('view')
                    _rz(z, cVEB, 'class', 110, e, s, gg)
                    var hWEB = _oz(z, 111, e, s, gg)
                    _(cVEB, hWEB)
                    _(cHEB, cVEB)
                }
                cHEB.wxXCkey = 1
                _(eBEB, fGEB)
                bCEB.wxXCkey = 1
                _(hKCB, eBEB)
                var oXEB = _mz(z, 'ga-dialog', ['bind:__l', 112, 'bind:tapCancel', 1, 'bind:tapEnsure', 2, 'cancelText', 3, 'class', 4, 'content', 5, 'data-event-opts', 6, 'data-ref', 7, 'ensureText', 8, 'theme', 9, 'value', 10, 'vueId', 11], [], e, s, gg)
                _(hKCB, oXEB)
                _(cJCB, hKCB)
            } else {
                cJCB.wxVkey = 2
                var cYEB = _v()
                _(cJCB, cYEB)
                if (_oz(z, 124, e, s, gg)) {
                    cYEB.wxVkey = 1
                    var oZEB = _n('view')
                    _rz(z, oZEB, 'class', 125, e, s, gg)
                    var l1EB = _mz(z, 'empty-status', ['bind:__l', 126, 'class', 1, 'logoUrl', 2, 'style', 3, 'titleText', 4, 'vueId', 5], [], e, s, gg)
                    _(oZEB, l1EB)
                    _(cYEB, oZEB)
                }
                cYEB.wxXCkey = 1
                cYEB.wxXCkey = 3
            }
            cJCB.wxXCkey = 1
            cJCB.wxXCkey = 3
            cJCB.wxXCkey = 3
            _(r, fICB)
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
            outerGlobal.__wxml_comp_version__ = 0.02
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_6();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packageWare/wareSuitGroup/wareSuitGroup.wxml'] = [$gwx3_XC_6, './packageWare/wareSuitGroup/wareSuitGroup.wxml'];
else __wxAppCode__['packageWare/wareSuitGroup/wareSuitGroup.wxml'] = $gwx3_XC_6('./packageWare/wareSuitGroup/wareSuitGroup.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['packageWare/wareSuitGroup/wareSuitGroup.wxss'] = setCssToHead([".", [1], "container.", [1], "data-v-7a56b5fa{background:#f5f5f5;box-sizing:border-box;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;height:100vh;min-height:100vh;width:100%}\n.", [1], "container .", [1], "header.", [1], "data-v-7a56b5fa{background:#fff}\n.", [1], "container .", [1], "header .", [1], "bar.", [1], "data-v-7a56b5fa{-webkit-align-items:center;align-items:center;box-sizing:border-box;display:-webkit-flex;display:flex;padding:", [0, 20], ";white-space:nowrap;width:100%}\n.", [1], "container .", [1], "header .", [1], "suit-bar.", [1], "data-v-7a56b5fa{height:", [0, 100], "}\n.", [1], "container .", [1], "header .", [1], "suit-bar .", [1], "suit-item.", [1], "data-v-7a56b5fa{border-radius:", [0, 30], ";box-sizing:border-box;display:inline-block;font-size:", [0, 26], ";margin-left:", [0, 20], ";padding:", [0, 10], " ", [0, 20], ";-webkit-transform:scale(1);transform:scale(1)}\n.", [1], "container .", [1], "header .", [1], "suit-bar .", [1], "suit-item.", [1], "data-v-7a56b5fa:first-child{margin-left:0}\n.", [1], "container .", [1], "header .", [1], "suit-bar .", [1], "suit-item wx-view.", [1], "data-v-7a56b5fa{display:inline-block}\n.", [1], "container .", [1], "header .", [1], "suit-bar .", [1], "suit-item .", [1], "name.", [1], "data-v-7a56b5fa{font-weight:500}\n.", [1], "container .", [1], "header .", [1], "suit-bar .", [1], "suit-item .", [1], "divider.", [1], "data-v-7a56b5fa{background:#d9d9d9;height:", [0, 11], ";margin:0 ", [0, 8], " ", [0, 4], ";width:", [0, 1], "}\n.", [1], "container .", [1], "header .", [1], "suit-bar .", [1], "suit-item .", [1], "amount.", [1], "data-v-7a56b5fa{font-weight:400}\n.", [1], "container .", [1], "header .", [1], "group-bar.", [1], "data-v-7a56b5fa{height:", [0, 80], "}\n.", [1], "container .", [1], "header .", [1], "group-bar .", [1], "group-item.", [1], "data-v-7a56b5fa{box-sizing:border-box;display:inline-block;font-size:", [0, 26], ";padding:0 ", [0, 30], "}\n.", [1], "container .", [1], "header .", [1], "group-bar .", [1], "group-item wx-view.", [1], "data-v-7a56b5fa{display:inline-block}\n.", [1], "container .", [1], "ware-domain.", [1], "data-v-7a56b5fa{background:#f5f5f5;box-sizing:border-box;-webkit-flex:1;flex:1;overflow:scroll;padding:", [0, 20], ";width:100%}\n.", [1], "container .", [1], "ware-domain .", [1], "ware-list.", [1], "data-v-7a56b5fa{background:#fff;border-radius:", [0, 16], ";padding:", [0, 10], " 0}\n.", [1], "container .", [1], "ware-domain .", [1], "ware-list .", [1], "ware-item.", [1], "data-v-7a56b5fa{-webkit-align-items:center;align-items:center;box-sizing:border-box;display:-webkit-flex;display:flex;height:", [0, 180], ";margin:", [0, 20], " 0;padding:", [0, 10], " ", [0, 20], ";width:100%}\n.", [1], "container .", [1], "ware-domain .", [1], "ware-list .", [1], "ware-item .", [1], "select-btn.", [1], "data-v-7a56b5fa{margin-right:", [0, 6], "}\n.", [1], "container .", [1], "ware-domain .", [1], "ware-list .", [1], "ware-item .", [1], "select-btn .", [1], "iconfont.", [1], "data-v-7a56b5fa{font-size:", [0, 40], "}\n.", [1], "container .", [1], "ware-domain .", [1], "ware-list .", [1], "ware-item .", [1], "select-btn .", [1], "diabled.", [1], "data-v-7a56b5fa{height:", [0, 40], ";width:", [0, 40], "}\n.", [1], "container .", [1], "ware-domain .", [1], "ware-list .", [1], "ware-item .", [1], "placeholder.", [1], "data-v-7a56b5fa{height:", [0, 40], ";width:", [0, 46], "}\n.", [1], "container .", [1], "ware-domain .", [1], "ware-list .", [1], "ware-item .", [1], "ware-info.", [1], "data-v-7a56b5fa{display:-webkit-flex;display:flex;-webkit-flex:1;flex:1;height:100%;width:100%}\n.", [1], "container .", [1], "ware-domain .", [1], "ware-list .", [1], "ware-item .", [1], "ware-info .", [1], "img-box.", [1], "data-v-7a56b5fa{height:", [0, 156], ";margin-right:", [0, 10], ";position:relative;width:", [0, 156], "}\n.", [1], "container .", [1], "ware-domain .", [1], "ware-list .", [1], "ware-item .", [1], "ware-info .", [1], "img-box .", [1], "img.", [1], "data-v-7a56b5fa{height:", [0, 156], ";width:", [0, 156], "}\n.", [1], "container .", [1], "ware-domain .", [1], "ware-list .", [1], "ware-item .", [1], "ware-info .", [1], "img-box .", [1], "empty.", [1], "data-v-7a56b5fa{-webkit-align-items:center;align-items:center;background:hsla(0,0%,100%,.8);display:-webkit-flex;display:flex;height:", [0, 156], ";-webkit-justify-content:center;justify-content:center;left:0;position:absolute;top:0;width:", [0, 156], "}\n.", [1], "container .", [1], "ware-domain .", [1], "ware-list .", [1], "ware-item .", [1], "ware-info .", [1], "img-box .", [1], "empty .", [1], "text.", [1], "data-v-7a56b5fa{-webkit-align-items:center;align-items:center;background:rgba(0,0,0,.3);border-radius:", [0, 999], ";color:#fff;display:-webkit-flex;display:flex;font-size:", [0, 24], ";height:", [0, 40], ";-webkit-justify-content:center;justify-content:center;padding:", [0, 2], " ", [0, 20], ";width:", [0, 80], "}\n.", [1], "container .", [1], "ware-domain .", [1], "ware-list .", [1], "ware-item .", [1], "ware-info .", [1], "right.", [1], "data-v-7a56b5fa{border-bottom:", [0, 1], " solid #f5f5f5;display:-webkit-flex;display:flex;-webkit-flex:1;flex:1;-webkit-flex-direction:column;flex-direction:column;height:100%;-webkit-justify-content:space-around;justify-content:space-around;padding-bottom:", [0, 20], "}\n.", [1], "container .", [1], "ware-domain .", [1], "ware-list .", [1], "ware-item .", [1], "ware-info .", [1], "right .", [1], "name.", [1], "data-v-7a56b5fa{-webkit-box-orient:vertical;-webkit-line-clamp:1;color:#222;display:-webkit-box;font-size:", [0, 24], ";overflow:hidden;text-overflow:ellipsis}\n.", [1], "container .", [1], "ware-domain .", [1], "ware-list .", [1], "ware-item .", [1], "ware-info .", [1], "right .", [1], "bottom.", [1], "data-v-7a56b5fa{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between}\n.", [1], "container .", [1], "ware-domain .", [1], "ware-list .", [1], "ware-item .", [1], "ware-info .", [1], "right .", [1], "bottom .", [1], "amount.", [1], "data-v-7a56b5fa{font-size:", [0, 24], ";font-weight:600}\n.", [1], "container .", [1], "ware-domain .", [1], "ware-list .", [1], "ware-item .", [1], "ware-info .", [1], "right .", [1], "bottom .", [1], "amount wx-text.", [1], "data-v-7a56b5fa{font-family:Avenir;font-size:", [0, 40], ";font-weight:900}\n.", [1], "container .", [1], "ware-domain .", [1], "ware-list .", [1], "ware-item .", [1], "ware-info .", [1], "right .", [1], "bottom .", [1], "num.", [1], "data-v-7a56b5fa{color:#191919;font-size:", [0, 24], "}\n.", [1], "container .", [1], "ware-domain .", [1], "ware-list .", [1], "ware-item:last-of-type .", [1], "ware-info .", [1], "right.", [1], "data-v-7a56b5fa{border-bottom:none}\n.", [1], "container .", [1], "ware-domain .", [1], "tip.", [1], "data-v-7a56b5fa{color:#999;height:", [0, 160], ";-webkit-justify-content:center;justify-content:center;width:100%}\n.", [1], "container .", [1], "footer .", [1], "select-ware.", [1], "data-v-7a56b5fa,.", [1], "container .", [1], "ware-domain .", [1], "tip.", [1], "data-v-7a56b5fa{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;font-size:", [0, 24], "}\n.", [1], "container .", [1], "footer .", [1], "select-ware.", [1], "data-v-7a56b5fa{background:#fdfbec;box-sizing:border-box;color:#191919;font-weight:400;padding:", [0, 16], " ", [0, 20], "}\n.", [1], "container .", [1], "footer .", [1], "bottom.", [1], "data-v-7a56b5fa{background:#fff;height:", [0, 120], ";-webkit-justify-content:space-between;justify-content:space-between;padding:", [0, 20], " ", [0, 30], " ", [0, 50], "}\n.", [1], "container .", [1], "footer .", [1], "bottom .", [1], "left .", [1], "price.", [1], "data-v-7a56b5fa,.", [1], "container .", [1], "footer .", [1], "bottom.", [1], "data-v-7a56b5fa{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.", [1], "container .", [1], "footer .", [1], "bottom .", [1], "left .", [1], "price .", [1], "suit-price.", [1], "data-v-7a56b5fa{font-size:", [0, 24], ";font-weight:600}\n.", [1], "container .", [1], "footer .", [1], "bottom .", [1], "left .", [1], "price .", [1], "suit-price wx-text.", [1], "data-v-7a56b5fa{font-family:Avenir;font-size:", [0, 40], "}\n.", [1], "container .", [1], "footer .", [1], "bottom .", [1], "left .", [1], "price .", [1], "origin-price.", [1], "data-v-7a56b5fa{color:#999;font-size:", [0, 24], ";margin-left:", [0, 8], ";text-decoration:line-through}\n.", [1], "container .", [1], "footer .", [1], "bottom .", [1], "left .", [1], "remark.", [1], "data-v-7a56b5fa{color:#222;font-size:", [0, 22], "}\n.", [1], "container .", [1], "footer .", [1], "bottom .", [1], "right.", [1], "data-v-7a56b5fa{-webkit-align-items:center;align-items:center;border-radius:", [0, 40], ";color:#fff;display:-webkit-flex;display:flex;font-size:", [0, 32], ";font-weight:600;height:", [0, 80], ";-webkit-justify-content:center;justify-content:center;width:", [0, 224], "}\n.", [1], "container .", [1], "footer .", [1], "bottom .", [1], "right.", [1], "disabled.", [1], "data-v-7a56b5fa{background:#ddd}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./packageWare/wareSuitGroup/wareSuitGroup.wxss:1:5630)", {
        path: "./packageWare/wareSuitGroup/wareSuitGroup.wxss"
    });
}