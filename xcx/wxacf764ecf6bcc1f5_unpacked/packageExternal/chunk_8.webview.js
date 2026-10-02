$gwx18_XC_37 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx18_XC_37 || [];

        function gz$gwx18_XC_37_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx18_XC_37_1) return __WXML_GLOBAL__.ops_cached.$gwx18_XC_37_1
            __WXML_GLOBAL__.ops_cached.$gwx18_XC_37_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'container'])
                Z([3, 'header'])
                Z([3, '__e'])
                Z([3, 'picker-box'])
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
                                    [1, 'change']
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
                                                    [1, 'onSessionChange']
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
                Z([3, 'selector'])
                Z([
                    [7],
                    [3, 'sessions']
                ])
                Z([3, 'name'])
                Z([3, 'session-picker'])
                Z([3, 'session-label'])
                Z([3, '当前场次：'])
                Z([3, 'session-text'])
                Z([a, [
                    [2, '?:'],
                    [
                        [7],
                        [3, 'currentSession']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'currentSession']
                        ],
                        [3, 'name']
                    ],
                    [1, '请选择场次']
                ]])
                Z([3, 'picker-arrow'])
                Z([3, '▼'])
                Z([3, 'stats-bar'])
                Z([3, 'stats-left'])
                Z([3, 'stat-item'])
                Z([a, [
                    [2, '+'],
                    [1, '总人数: '],
                    [
                        [6],
                        [
                            [7],
                            [3, '$root']
                        ],
                        [3, 'g0']
                    ]
                ]])
                Z(z[17])
                Z([a, [
                    [2, '+'],
                    [1, '待入场: '],
                    [
                        [6],
                        [
                            [7],
                            [3, '$root']
                        ],
                        [3, 'm0']
                    ]
                ]])
                Z(z[2])
                Z([3, 'refresh-btn'])
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
                                                    [1, 'loadBookingRules']
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
                Z([3, 'refresh-btn-hover'])
                Z([3, 'refresh-icon'])
                Z([3, 'aspectFit'])
                Z([3, '/packageExternal/static/icon_reset.png'])
                Z([3, 'tabs'])
                Z([3, 'index'])
                Z([3, 'tab'])
                Z([
                    [6],
                    [
                        [7],
                        [3, '$root']
                    ],
                    [3, 'l0']
                ])
                Z(z[29])
                Z(z[2])
                Z([
                    [4],
                    [
                        [5],
                        [
                            [5],
                            [1, 'tab-item']
                        ],
                        [
                            [2, '?:'],
                            [
                                [2, '==='],
                                [
                                    [7],
                                    [3, 'currentTab']
                                ],
                                [
                                    [7],
                                    [3, 'index']
                                ]
                            ],
                            [1, 'active'],
                            [1, '']
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
                                                    [1, 'switchTab']
                                                ],
                                                [
                                                    [4],
                                                    [
                                                        [5],
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
                ])
                Z([3, 'tab-content'])
                Z([3, 'tab-name'])
                Z([a, [
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'tab']
                        ],
                        [3, '$orig']
                    ],
                    [3, 'name']
                ]])
                Z([
                    [2, '>'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'tab']
                        ],
                        [3, 'm1']
                    ],
                    [1, 0]
                ])
                Z([3, 'tab-count'])
                Z([a, [
                    [2, '+'],
                    [
                        [2, '+'],
                        [1, '('],
                        [
                            [6],
                            [
                                [7],
                                [3, 'tab']
                            ],
                            [3, 'm2']
                        ]
                    ],
                    [1, ')']
                ]])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'currentTab']
                    ],
                    [
                        [7],
                        [3, 'index']
                    ]
                ])
                Z([3, 'tab-line'])
                Z([3, 'content'])
                Z([
                    [7],
                    [3, 'scrollTop']
                ])
                Z([1, true])
                Z([
                    [2, '&&'],
                    [
                        [2, '==='],
                        [
                            [7],
                            [3, 'currentTab']
                        ],
                        [1, 0]
                    ],
                    [
                        [2, '==='],
                        [
                            [6],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'tabs']
                                ],
                                [
                                    [7],
                                    [3, 'currentTab']
                                ]
                            ],
                            [3, 'status']
                        ],
                        [1, 1]
                    ]
                ])
                Z(z[2])
                Z([3, 'queue-preview-card'])
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
                                                    [1, 'switchToQueueTab']
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
                Z([3, 'queue-preview-main'])
                Z([3, 'queue-preview-text'])
                Z([3, 'queue-preview-title'])
                Z([3, '排队区'])
                Z([3, 'queue-preview-metric'])
                Z([3, 'queue-preview-number'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, '$root']
                    ],
                    [3, 'm3']
                ]])
                Z([3, 'queue-preview-unit'])
                Z([3, '人等待中'])
                Z([3, 'queue-preview-cta'])
                Z([3, 'queue-preview-cta-text'])
                Z([3, '查看'])
                Z([3, 'queue-preview-cta-arrow'])
                Z([3, '›'])
                Z([
                    [2, '==='],
                    [
                        [6],
                        [
                            [7],
                            [3, '$root']
                        ],
                        [3, 'g1']
                    ],
                    [1, 0]
                ])
                Z([3, 'empty-tip'])
                Z([3, '当前区域暂无人员'])
                Z([3, 'user-list'])
                Z(z[29])
                Z([3, 'item'])
                Z([
                    [7],
                    [3, 'currentList']
                ])
                Z([3, 'id'])
                Z([3, 'user-card'])
                Z([3, 'card-left'])
                Z([
                    [4],
                    [
                        [5],
                        [
                            [5],
                            [1, 'code-circle']
                        ],
                        [
                            [2, '+'],
                            [1, 'bg-status-'],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'item']
                                ],
                                [3, 'status']
                            ]
                        ]
                    ]
                ])
                Z([3, 'code-text'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'code']
                ]])
                Z([3, 'user-info'])
                Z([3, 'user-name'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'name']
                ]])
                Z([3, 'user-phone'])
                Z([a, [
                    [2, '||'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'phone']
                    ],
                    [1, '']
                ]])
                Z([3, 'card-right'])
                Z([
                    [2, '==='],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'status']
                    ],
                    [1, 1]
                ])
                Z([3, 'card-actions'])
                Z(z[2])
                Z([3, 'mini-btn warn-btn'])
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
                                                        [1, 'moveToExpired']
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
                                                                                [1, 'currentList']
                                                                            ],
                                                                            [1, 'id']
                                                                        ],
                                                                        [
                                                                            [6],
                                                                            [
                                                                                [7],
                                                                                [3, 'item']
                                                                            ],
                                                                            [3, 'id']
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
                Z([3, 'mini'])
                Z([3, '过号'])
                Z(z[2])
                Z([3, 'mini-btn primary-btn'])
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
                                                        [1, 'manualVerify']
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
                                                                                [1, 'currentList']
                                                                            ],
                                                                            [1, 'id']
                                                                        ],
                                                                        [
                                                                            [6],
                                                                            [
                                                                                [7],
                                                                                [3, 'item']
                                                                            ],
                                                                            [3, 'id']
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
                Z(z[89])
                Z([3, '核验'])
                Z([
                    [2, '==='],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'status']
                    ],
                    [1, 0]
                ])
                Z(z[85])
                Z([3, 'status-text text-gray'])
                Z([3, '等待叫号'])
                Z([
                    [2, '==='],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'status']
                    ],
                    [1, 2]
                ])
                Z(z[85])
                Z([3, 'status-text text-green'])
                Z([3, '已入场'])
                Z([3, 'time-text'])
                Z([a, [
                    [2, '||'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'entryTime']
                    ],
                    [1, '刚刚']
                ]])
                Z([
                    [2, '==='],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'status']
                    ],
                    [1, 3]
                ])
                Z(z[85])
                Z(z[2])
                Z([3, 'mini-btn default-btn'])
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
                                                        [1, 'restoreToQueue']
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
                                                                                [1, 'currentList']
                                                                            ],
                                                                            [1, 'id']
                                                                        ],
                                                                        [
                                                                            [6],
                                                                            [
                                                                                [7],
                                                                                [3, 'item']
                                                                            ],
                                                                            [3, 'id']
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
                Z(z[89])
                Z([3, '重排'])
                Z([3, 'bottom-spacer'])
                Z([3, 'footer'])
                Z([
                    [2, '||'],
                    [
                        [2, '==='],
                        [
                            [6],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'tabs']
                                ],
                                [
                                    [7],
                                    [3, 'currentTab']
                                ]
                            ],
                            [3, 'status']
                        ],
                        [1, 1]
                    ],
                    [
                        [2, '==='],
                        [
                            [6],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'tabs']
                                ],
                                [
                                    [7],
                                    [3, 'currentTab']
                                ]
                            ],
                            [3, 'status']
                        ],
                        [1, 0]
                    ]
                ])
                Z([3, 'call-control'])
                Z([3, 'control-header'])
                Z([3, 'control-left'])
                Z([3, 'control-title'])
                Z([3, '快捷叫号'])
                Z([3, 'btn-group'])
                Z(z[2])
                Z([3, 'call-btn call-btn-1'])
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
                                                    [1, 'onCallClick']
                                                ],
                                                [
                                                    [4],
                                                    [
                                                        [5],
                                                        [1, 1]
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
                Z([3, 'btn-hover'])
                Z([3, '叫 1 人'])
                Z(z[2])
                Z([3, 'call-btn call-btn-5'])
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
                                                    [1, 'onCallClick']
                                                ],
                                                [
                                                    [4],
                                                    [
                                                        [5],
                                                        [1, 5]
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
                Z(z[125])
                Z([3, '叫 5 人'])
                Z(z[2])
                Z([3, 'call-btn call-btn-10'])
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
                                                    [1, 'onCallClick']
                                                ],
                                                [
                                                    [4],
                                                    [
                                                        [5],
                                                        [1, 10]
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
                Z(z[125])
                Z([3, '叫 10 人'])
                Z([
                    [7],
                    [3, 'callAnimVisible']
                ])
                Z([3, 'call-anim-layer'])
                Z([3, 'idx'])
                Z([3, 'n'])
                Z([
                    [7],
                    [3, 'callAnimIconCount']
                ])
                Z(z[139])
                Z([3, 'fake-person'])
                Z([
                    [2, '+'],
                    [
                        [2, '+'],
                        [1, 'animation-delay:'],
                        [
                            [2, '+'],
                            [
                                [2, '*'],
                                [
                                    [7],
                                    [3, 'idx']
                                ],
                                [1, 40]
                            ],
                            [1, 'ms']
                        ]
                    ],
                    [1, ';']
                ])
                Z([3, 'fp-head'])
                Z([3, 'fp-body'])
                Z([
                    [2, '>'],
                    [
                        [7],
                        [3, 'callAnimCount']
                    ],
                    [
                        [7],
                        [3, 'callAnimIconCount']
                    ]
                ])
                Z([3, 'fake-person-plus'])
                Z([a, [
                    [2, '+'],
                    [1, '+'],
                    [
                        [2, '-'],
                        [
                            [7],
                            [3, 'callAnimCount']
                        ],
                        [
                            [7],
                            [3, 'callAnimIconCount']
                        ]
                    ]
                ]])
                Z([3, 'main-actions'])
                Z(z[2])
                Z([3, 'scan-btn'])
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
                                                    [1, 'handleScanCode']
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
                Z([3, 'scan-btn-hover'])
                Z([3, 'primary'])
                Z([3, 'scan-text'])
                Z([3, '扫码核验'])
                Z([
                    [7],
                    [3, 'showUserDetailModal']
                ])
                Z(z[2])
                Z([3, 'user-detail-modal'])
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
                                                    [1, 'closeUserDetailModal']
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
                Z(z[2])
                Z([3, 'modal-content'])
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
                                                    [1, '']
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
                Z([3, 'modal-header'])
                Z([3, 'modal-store-name'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, '$root']
                    ],
                    [3, 'm4']
                ]])
                Z([3, 'modal-session-time'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, '$root']
                    ],
                    [3, 'm5']
                ]])
                Z([3, 'modal-body'])
                Z([3, 'avatar-container'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'userDetailData']
                    ],
                    [3, 'realAuthImg']
                ])
                Z([3, 'user-avatar'])
                Z([3, 'aspectFill'])
                Z(z[172])
                Z([3, 'user-avatar-placeholder'])
                Z([3, 'avatar-text'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, '$root']
                    ],
                    [3, 'g2']
                ]])
                Z([3, 'info-container'])
                Z([3, 'info-item'])
                Z([3, 'info-label'])
                Z([3, '预约用户'])
                Z([3, 'info-value'])
                Z([a, [
                    [2, '||'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'userDetailData']
                        ],
                        [3, 'realName']
                    ],
                    [1, '']
                ]])
                Z(z[180])
                Z(z[181])
                Z([3, '预约手机'])
                Z(z[183])
                Z([a, [
                    [2, '||'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'userDetailData']
                        ],
                        [3, 'mobile']
                    ],
                    [1, '***']
                ]])
                Z(z[180])
                Z(z[181])
                Z([3, '预约证件'])
                Z(z[183])
                Z([a, [
                    [2, '||'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'userDetailData']
                        ],
                        [3, 'idNumber']
                    ],
                    [1, '***']
                ]])
                Z([3, 'queue-info-item'])
                Z([3, 'queue-label'])
                Z([3, '预约排号'])
                Z([3, 'queue-number'])
                Z([a, [
                    [2, '||'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'userDetailData']
                        ],
                        [3, 'sortOrder']
                    ],
                    [1, '']
                ]])
                Z([
                    [2, '&&'],
                    [
                        [7],
                        [3, 'userDetailData']
                    ],
                    [
                        [2, '>'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'userDetailData']
                            ],
                            [3, 'companionCount']
                        ],
                        [1, 0]
                    ]
                ])
                Z([3, 'companion-section'])
                Z([3, 'companion-header'])
                Z([3, 'companion-title'])
                Z([3, '随行人员'])
                Z([3, 'companion-count'])
                Z([a, [
                    [2, '+'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'userDetailData']
                        ],
                        [3, 'companionCount']
                    ],
                    [1, '人']
                ]])
                Z([3, 'companion-items'])
                Z(z[29])
                Z([3, 'person'])
                Z([
                    [7],
                    [3, 'displayCompanions']
                ])
                Z(z[29])
                Z([3, 'companion-item'])
                Z([3, 'companion-name'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'person']
                    ],
                    [3, 'name']
                ]])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'person']
                    ],
                    [3, 'relation']
                ])
                Z([3, 'companion-relation'])
                Z([a, [
                    [6],
                    [
                        [7],
                        [3, 'person']
                    ],
                    [3, 'relation']
                ]])
                Z([
                    [7],
                    [3, 'hasMoreCompanions']
                ])
                Z(z[2])
                Z([3, 'companion-more'])
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
                                                    [1, 'toggleCompanionExpand']
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
                Z([3, 'companion-more-text'])
                Z([a, [
                    [2, '?:'],
                    [
                        [7],
                        [3, 'companionExpanded']
                    ],
                    [1, '收起'],
                    [
                        [2, '+'],
                        [
                            [2, '+'],
                            [1, '+'],
                            [
                                [2, '-'],
                                [
                                    [6],
                                    [
                                        [7],
                                        [3, 'userDetailData']
                                    ],
                                    [3, 'companionCount']
                                ],
                                [1, 3]
                            ]
                        ],
                        [1, '人 · 查看全部']
                    ]
                ]])
                Z([
                    [4],
                    [
                        [5],
                        [
                            [5],
                            [1, 'companion-more-arrow']
                        ],
                        [
                            [2, '?:'],
                            [
                                [7],
                                [3, 'companionExpanded']
                            ],
                            [1, 'arrow-up'],
                            [1, '']
                        ]
                    ]
                ])
                Z(z[64])
                Z([
                    [6],
                    [
                        [7],
                        [3, '$root']
                    ],
                    [3, 'g3']
                ])
                Z(z[29])
                Z(z[209])
                Z([
                    [6],
                    [
                        [7],
                        [3, '$root']
                    ],
                    [3, 'l1']
                ])
                Z(z[212])
                Z(z[213])
                Z([a, z[214][1]])
                Z(z[215])
                Z(z[216])
                Z([a, z[217][1]])
                Z([3, 'modal-footer'])
                Z(z[2])
                Z([3, 'modal-btn modal-btn-cancel'])
                Z(z[161])
                Z([3, '关闭'])
                Z(z[2])
                Z([3, 'modal-btn modal-btn-confirm'])
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
                                                    [1, 'confirmUserEntry']
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
                Z([3, '确认核验'])
            })(__WXML_GLOBAL__.ops_cached.$gwx18_XC_37_1);
            return __WXML_GLOBAL__.ops_cached.$gwx18_XC_37_1
        }
        __WXML_GLOBAL__.ops_set.$gwx18_XC_37 = z;
        __WXML_GLOBAL__.ops_init.$gwx18_XC_37 = true;
        var x = ['./packageExternal/modelEmployee/writeoffnotes/writeoffnotes.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx18_XC_37_1()
            var bQ6C = _n('view')
            _rz(z, bQ6C, 'class', 0, e, s, gg)
            var xS6C = _n('view')
            _rz(z, xS6C, 'class', 1, e, s, gg)
            var oT6C = _mz(z, 'picker', ['bindchange', 2, 'class', 1, 'data-event-opts', 2, 'mode', 3, 'range', 4, 'rangeKey', 5], [], e, s, gg)
            var fU6C = _n('view')
            _rz(z, fU6C, 'class', 8, e, s, gg)
            var cV6C = _n('text')
            _rz(z, cV6C, 'class', 9, e, s, gg)
            var hW6C = _oz(z, 10, e, s, gg)
            _(cV6C, hW6C)
            _(fU6C, cV6C)
            var oX6C = _n('text')
            _rz(z, oX6C, 'class', 11, e, s, gg)
            var cY6C = _oz(z, 12, e, s, gg)
            _(oX6C, cY6C)
            _(fU6C, oX6C)
            var oZ6C = _n('text')
            _rz(z, oZ6C, 'class', 13, e, s, gg)
            var l16C = _oz(z, 14, e, s, gg)
            _(oZ6C, l16C)
            _(fU6C, oZ6C)
            _(oT6C, fU6C)
            _(xS6C, oT6C)
            var a26C = _n('view')
            _rz(z, a26C, 'class', 15, e, s, gg)
            var t36C = _n('view')
            _rz(z, t36C, 'class', 16, e, s, gg)
            var e46C = _n('text')
            _rz(z, e46C, 'class', 17, e, s, gg)
            var b56C = _oz(z, 18, e, s, gg)
            _(e46C, b56C)
            _(t36C, e46C)
            var o66C = _n('text')
            _rz(z, o66C, 'class', 19, e, s, gg)
            var x76C = _oz(z, 20, e, s, gg)
            _(o66C, x76C)
            _(t36C, o66C)
            _(a26C, t36C)
            var o86C = _mz(z, 'button', ['bindtap', 21, 'class', 1, 'data-event-opts', 2, 'hoverClass', 3], [], e, s, gg)
            var f96C = _mz(z, 'image', ['class', 25, 'mode', 1, 'src', 2], [], e, s, gg)
            _(o86C, f96C)
            _(a26C, o86C)
            _(xS6C, a26C)
            _(bQ6C, xS6C)
            var c06C = _n('view')
            _rz(z, c06C, 'class', 28, e, s, gg)
            var hA7C = _v()
            _(c06C, hA7C)
            var oB7C = function(oD7C, cC7C, lE7C, gg) {
                var tG7C = _mz(z, 'view', ['bindtap', 33, 'class', 1, 'data-event-opts', 2], [], oD7C, cC7C, gg)
                var bI7C = _n('view')
                _rz(z, bI7C, 'class', 36, oD7C, cC7C, gg)
                var xK7C = _n('text')
                _rz(z, xK7C, 'class', 37, oD7C, cC7C, gg)
                var oL7C = _oz(z, 38, oD7C, cC7C, gg)
                _(xK7C, oL7C)
                _(bI7C, xK7C)
                var oJ7C = _v()
                _(bI7C, oJ7C)
                if (_oz(z, 39, oD7C, cC7C, gg)) {
                    oJ7C.wxVkey = 1
                    var fM7C = _n('text')
                    _rz(z, fM7C, 'class', 40, oD7C, cC7C, gg)
                    var cN7C = _oz(z, 41, oD7C, cC7C, gg)
                    _(fM7C, cN7C)
                    _(oJ7C, fM7C)
                }
                oJ7C.wxXCkey = 1
                _(tG7C, bI7C)
                var eH7C = _v()
                _(tG7C, eH7C)
                if (_oz(z, 42, oD7C, cC7C, gg)) {
                    eH7C.wxVkey = 1
                    var hO7C = _n('view')
                    _rz(z, hO7C, 'class', 43, oD7C, cC7C, gg)
                    _(eH7C, hO7C)
                }
                eH7C.wxXCkey = 1
                _(lE7C, tG7C)
                return lE7C
            }
            hA7C.wxXCkey = 2
            _2z(z, 31, oB7C, e, s, gg, hA7C, 'tab', 'index', 'index')
            _(bQ6C, c06C)
            var oP7C = _mz(z, 'scroll-view', ['class', 44, 'scrollTop', 1, 'scrollY', 2], [], e, s, gg)
            var cQ7C = _v()
            _(oP7C, cQ7C)
            if (_oz(z, 47, e, s, gg)) {
                cQ7C.wxVkey = 1
                var lS7C = _mz(z, 'view', ['bindtap', 48, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
                var aT7C = _n('view')
                _rz(z, aT7C, 'class', 51, e, s, gg)
                var tU7C = _n('view')
                _rz(z, tU7C, 'class', 52, e, s, gg)
                var eV7C = _n('text')
                _rz(z, eV7C, 'class', 53, e, s, gg)
                var bW7C = _oz(z, 54, e, s, gg)
                _(eV7C, bW7C)
                _(tU7C, eV7C)
                var oX7C = _n('view')
                _rz(z, oX7C, 'class', 55, e, s, gg)
                var xY7C = _n('text')
                _rz(z, xY7C, 'class', 56, e, s, gg)
                var oZ7C = _oz(z, 57, e, s, gg)
                _(xY7C, oZ7C)
                _(oX7C, xY7C)
                var f17C = _n('text')
                _rz(z, f17C, 'class', 58, e, s, gg)
                var c27C = _oz(z, 59, e, s, gg)
                _(f17C, c27C)
                _(oX7C, f17C)
                _(tU7C, oX7C)
                _(aT7C, tU7C)
                _(lS7C, aT7C)
                var h37C = _n('view')
                _rz(z, h37C, 'class', 60, e, s, gg)
                var o47C = _n('text')
                _rz(z, o47C, 'class', 61, e, s, gg)
                var c57C = _oz(z, 62, e, s, gg)
                _(o47C, c57C)
                _(h37C, o47C)
                var o67C = _n('text')
                _rz(z, o67C, 'class', 63, e, s, gg)
                var l77C = _oz(z, 64, e, s, gg)
                _(o67C, l77C)
                _(h37C, o67C)
                _(lS7C, h37C)
                _(cQ7C, lS7C)
            }
            var oR7C = _v()
            _(oP7C, oR7C)
            if (_oz(z, 65, e, s, gg)) {
                oR7C.wxVkey = 1
                var a87C = _n('view')
                _rz(z, a87C, 'class', 66, e, s, gg)
                var t97C = _n('text')
                var e07C = _oz(z, 67, e, s, gg)
                _(t97C, e07C)
                _(a87C, t97C)
                _(oR7C, a87C)
            } else {
                oR7C.wxVkey = 2
                var bA8C = _n('view')
                _rz(z, bA8C, 'class', 68, e, s, gg)
                var oB8C = _v()
                _(bA8C, oB8C)
                var xC8C = function(fE8C, oD8C, cF8C, gg) {
                    var oH8C = _n('view')
                    _rz(z, oH8C, 'class', 73, fE8C, oD8C, gg)
                    var cI8C = _n('view')
                    _rz(z, cI8C, 'class', 74, fE8C, oD8C, gg)
                    var oJ8C = _n('view')
                    _rz(z, oJ8C, 'class', 75, fE8C, oD8C, gg)
                    var lK8C = _n('text')
                    _rz(z, lK8C, 'class', 76, fE8C, oD8C, gg)
                    var aL8C = _oz(z, 77, fE8C, oD8C, gg)
                    _(lK8C, aL8C)
                    _(oJ8C, lK8C)
                    _(cI8C, oJ8C)
                    var tM8C = _n('view')
                    _rz(z, tM8C, 'class', 78, fE8C, oD8C, gg)
                    var eN8C = _n('text')
                    _rz(z, eN8C, 'class', 79, fE8C, oD8C, gg)
                    var bO8C = _oz(z, 80, fE8C, oD8C, gg)
                    _(eN8C, bO8C)
                    _(tM8C, eN8C)
                    var oP8C = _n('text')
                    _rz(z, oP8C, 'class', 81, fE8C, oD8C, gg)
                    var xQ8C = _oz(z, 82, fE8C, oD8C, gg)
                    _(oP8C, xQ8C)
                    _(tM8C, oP8C)
                    _(cI8C, tM8C)
                    _(oH8C, cI8C)
                    var oR8C = _n('view')
                    _rz(z, oR8C, 'class', 83, fE8C, oD8C, gg)
                    var fS8C = _v()
                    _(oR8C, fS8C)
                    if (_oz(z, 84, fE8C, oD8C, gg)) {
                        fS8C.wxVkey = 1
                        var cT8C = _n('view')
                        _rz(z, cT8C, 'class', 85, fE8C, oD8C, gg)
                        var hU8C = _mz(z, 'button', ['catchtap', 86, 'class', 1, 'data-event-opts', 2, 'size', 3], [], fE8C, oD8C, gg)
                        var oV8C = _oz(z, 90, fE8C, oD8C, gg)
                        _(hU8C, oV8C)
                        _(cT8C, hU8C)
                        var cW8C = _mz(z, 'button', ['catchtap', 91, 'class', 1, 'data-event-opts', 2, 'size', 3], [], fE8C, oD8C, gg)
                        var oX8C = _oz(z, 95, fE8C, oD8C, gg)
                        _(cW8C, oX8C)
                        _(cT8C, cW8C)
                        _(fS8C, cT8C)
                    } else {
                        fS8C.wxVkey = 2
                        var lY8C = _v()
                        _(fS8C, lY8C)
                        if (_oz(z, 96, fE8C, oD8C, gg)) {
                            lY8C.wxVkey = 1
                            var aZ8C = _n('view')
                            _rz(z, aZ8C, 'class', 97, fE8C, oD8C, gg)
                            var t18C = _n('text')
                            _rz(z, t18C, 'class', 98, fE8C, oD8C, gg)
                            var e28C = _oz(z, 99, fE8C, oD8C, gg)
                            _(t18C, e28C)
                            _(aZ8C, t18C)
                            _(lY8C, aZ8C)
                        } else {
                            lY8C.wxVkey = 2
                            var b38C = _v()
                            _(lY8C, b38C)
                            if (_oz(z, 100, fE8C, oD8C, gg)) {
                                b38C.wxVkey = 1
                                var o48C = _n('view')
                                _rz(z, o48C, 'class', 101, fE8C, oD8C, gg)
                                var x58C = _n('text')
                                _rz(z, x58C, 'class', 102, fE8C, oD8C, gg)
                                var o68C = _oz(z, 103, fE8C, oD8C, gg)
                                _(x58C, o68C)
                                _(o48C, x58C)
                                var f78C = _n('text')
                                _rz(z, f78C, 'class', 104, fE8C, oD8C, gg)
                                var c88C = _oz(z, 105, fE8C, oD8C, gg)
                                _(f78C, c88C)
                                _(o48C, f78C)
                                _(b38C, o48C)
                            } else {
                                b38C.wxVkey = 2
                                var h98C = _v()
                                _(b38C, h98C)
                                if (_oz(z, 106, fE8C, oD8C, gg)) {
                                    h98C.wxVkey = 1
                                    var o08C = _n('view')
                                    _rz(z, o08C, 'class', 107, fE8C, oD8C, gg)
                                    var cA9C = _mz(z, 'button', ['catchtap', 108, 'class', 1, 'data-event-opts', 2, 'size', 3], [], fE8C, oD8C, gg)
                                    var oB9C = _oz(z, 112, fE8C, oD8C, gg)
                                    _(cA9C, oB9C)
                                    _(o08C, cA9C)
                                    _(h98C, o08C)
                                }
                                h98C.wxXCkey = 1
                            }
                            b38C.wxXCkey = 1
                        }
                        lY8C.wxXCkey = 1
                    }
                    fS8C.wxXCkey = 1
                    _(oH8C, oR8C)
                    _(cF8C, oH8C)
                    return cF8C
                }
                oB8C.wxXCkey = 2
                _2z(z, 71, xC8C, e, s, gg, oB8C, 'item', 'index', 'id')
                _(oR7C, bA8C)
            }
            var lC9C = _n('view')
            _rz(z, lC9C, 'class', 113, e, s, gg)
            _(oP7C, lC9C)
            cQ7C.wxXCkey = 1
            oR7C.wxXCkey = 1
            _(bQ6C, oP7C)
            var aD9C = _n('view')
            _rz(z, aD9C, 'class', 114, e, s, gg)
            var tE9C = _v()
            _(aD9C, tE9C)
            if (_oz(z, 115, e, s, gg)) {
                tE9C.wxVkey = 1
                var eF9C = _n('view')
                _rz(z, eF9C, 'class', 116, e, s, gg)
                var oH9C = _n('view')
                _rz(z, oH9C, 'class', 117, e, s, gg)
                var xI9C = _n('view')
                _rz(z, xI9C, 'class', 118, e, s, gg)
                var oJ9C = _n('text')
                _rz(z, oJ9C, 'class', 119, e, s, gg)
                var fK9C = _oz(z, 120, e, s, gg)
                _(oJ9C, fK9C)
                _(xI9C, oJ9C)
                _(oH9C, xI9C)
                _(eF9C, oH9C)
                var cL9C = _n('view')
                _rz(z, cL9C, 'class', 121, e, s, gg)
                var hM9C = _mz(z, 'button', ['bindtap', 122, 'class', 1, 'data-event-opts', 2, 'hoverClass', 3], [], e, s, gg)
                var oN9C = _oz(z, 126, e, s, gg)
                _(hM9C, oN9C)
                _(cL9C, hM9C)
                var cO9C = _mz(z, 'button', ['bindtap', 127, 'class', 1, 'data-event-opts', 2, 'hoverClass', 3], [], e, s, gg)
                var oP9C = _oz(z, 131, e, s, gg)
                _(cO9C, oP9C)
                _(cL9C, cO9C)
                var lQ9C = _mz(z, 'button', ['bindtap', 132, 'class', 1, 'data-event-opts', 2, 'hoverClass', 3], [], e, s, gg)
                var aR9C = _oz(z, 136, e, s, gg)
                _(lQ9C, aR9C)
                _(cL9C, lQ9C)
                _(eF9C, cL9C)
                var bG9C = _v()
                _(eF9C, bG9C)
                if (_oz(z, 137, e, s, gg)) {
                    bG9C.wxVkey = 1
                    var tS9C = _n('view')
                    _rz(z, tS9C, 'class', 138, e, s, gg)
                    var bU9C = _v()
                    _(tS9C, bU9C)
                    var oV9C = function(oX9C, xW9C, fY9C, gg) {
                        var h19C = _mz(z, 'view', ['class', 143, 'style', 1], [], oX9C, xW9C, gg)
                        var o29C = _n('view')
                        _rz(z, o29C, 'class', 145, oX9C, xW9C, gg)
                        _(h19C, o29C)
                        var c39C = _n('view')
                        _rz(z, c39C, 'class', 146, oX9C, xW9C, gg)
                        _(h19C, c39C)
                        _(fY9C, h19C)
                        return fY9C
                    }
                    bU9C.wxXCkey = 2
                    _2z(z, 141, oV9C, e, s, gg, bU9C, 'n', 'idx', 'idx')
                    var eT9C = _v()
                    _(tS9C, eT9C)
                    if (_oz(z, 147, e, s, gg)) {
                        eT9C.wxVkey = 1
                        var o49C = _n('text')
                        _rz(z, o49C, 'class', 148, e, s, gg)
                        var l59C = _oz(z, 149, e, s, gg)
                        _(o49C, l59C)
                        _(eT9C, o49C)
                    }
                    eT9C.wxXCkey = 1
                    _(bG9C, tS9C)
                }
                bG9C.wxXCkey = 1
                _(tE9C, eF9C)
            }
            var a69C = _n('view')
            _rz(z, a69C, 'class', 150, e, s, gg)
            var t79C = _mz(z, 'button', ['bindtap', 151, 'class', 1, 'data-event-opts', 2, 'hoverClass', 3, 'type', 4], [], e, s, gg)
            var e89C = _n('text')
            _rz(z, e89C, 'class', 156, e, s, gg)
            var b99C = _oz(z, 157, e, s, gg)
            _(e89C, b99C)
            _(t79C, e89C)
            _(a69C, t79C)
            _(aD9C, a69C)
            tE9C.wxXCkey = 1
            _(bQ6C, aD9C)
            var oR6C = _v()
            _(bQ6C, oR6C)
            if (_oz(z, 158, e, s, gg)) {
                oR6C.wxVkey = 1
                var o09C = _mz(z, 'view', ['bindtap', 159, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
                var xA0C = _mz(z, 'view', ['catchtap', 162, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
                var fC0C = _n('view')
                _rz(z, fC0C, 'class', 165, e, s, gg)
                var cD0C = _n('text')
                _rz(z, cD0C, 'class', 166, e, s, gg)
                var hE0C = _oz(z, 167, e, s, gg)
                _(cD0C, hE0C)
                _(fC0C, cD0C)
                var oF0C = _n('text')
                _rz(z, oF0C, 'class', 168, e, s, gg)
                var cG0C = _oz(z, 169, e, s, gg)
                _(oF0C, cG0C)
                _(fC0C, oF0C)
                _(xA0C, fC0C)
                var oH0C = _n('view')
                _rz(z, oH0C, 'class', 170, e, s, gg)
                var lI0C = _n('view')
                _rz(z, lI0C, 'class', 171, e, s, gg)
                var aJ0C = _v()
                _(lI0C, aJ0C)
                if (_oz(z, 172, e, s, gg)) {
                    aJ0C.wxVkey = 1
                    var tK0C = _mz(z, 'image', ['class', 173, 'mode', 1, 'src', 2], [], e, s, gg)
                    _(aJ0C, tK0C)
                } else {
                    aJ0C.wxVkey = 2
                    var eL0C = _n('view')
                    _rz(z, eL0C, 'class', 176, e, s, gg)
                    var bM0C = _n('text')
                    _rz(z, bM0C, 'class', 177, e, s, gg)
                    var oN0C = _oz(z, 178, e, s, gg)
                    _(bM0C, oN0C)
                    _(eL0C, bM0C)
                    _(aJ0C, eL0C)
                }
                aJ0C.wxXCkey = 1
                _(oH0C, lI0C)
                var xO0C = _n('view')
                _rz(z, xO0C, 'class', 179, e, s, gg)
                var oP0C = _n('view')
                _rz(z, oP0C, 'class', 180, e, s, gg)
                var fQ0C = _n('text')
                _rz(z, fQ0C, 'class', 181, e, s, gg)
                var cR0C = _oz(z, 182, e, s, gg)
                _(fQ0C, cR0C)
                _(oP0C, fQ0C)
                var hS0C = _n('text')
                _rz(z, hS0C, 'class', 183, e, s, gg)
                var oT0C = _oz(z, 184, e, s, gg)
                _(hS0C, oT0C)
                _(oP0C, hS0C)
                _(xO0C, oP0C)
                var cU0C = _n('view')
                _rz(z, cU0C, 'class', 185, e, s, gg)
                var oV0C = _n('text')
                _rz(z, oV0C, 'class', 186, e, s, gg)
                var lW0C = _oz(z, 187, e, s, gg)
                _(oV0C, lW0C)
                _(cU0C, oV0C)
                var aX0C = _n('text')
                _rz(z, aX0C, 'class', 188, e, s, gg)
                var tY0C = _oz(z, 189, e, s, gg)
                _(aX0C, tY0C)
                _(cU0C, aX0C)
                _(xO0C, cU0C)
                var eZ0C = _n('view')
                _rz(z, eZ0C, 'class', 190, e, s, gg)
                var b10C = _n('text')
                _rz(z, b10C, 'class', 191, e, s, gg)
                var o20C = _oz(z, 192, e, s, gg)
                _(b10C, o20C)
                _(eZ0C, b10C)
                var x30C = _n('text')
                _rz(z, x30C, 'class', 193, e, s, gg)
                var o40C = _oz(z, 194, e, s, gg)
                _(x30C, o40C)
                _(eZ0C, x30C)
                _(xO0C, eZ0C)
                var f50C = _n('view')
                _rz(z, f50C, 'class', 195, e, s, gg)
                var c60C = _n('text')
                _rz(z, c60C, 'class', 196, e, s, gg)
                var h70C = _oz(z, 197, e, s, gg)
                _(c60C, h70C)
                _(f50C, c60C)
                var o80C = _n('text')
                _rz(z, o80C, 'class', 198, e, s, gg)
                var c90C = _oz(z, 199, e, s, gg)
                _(o80C, c90C)
                _(f50C, o80C)
                _(xO0C, f50C)
                _(oH0C, xO0C)
                _(xA0C, oH0C)
                var oB0C = _v()
                _(xA0C, oB0C)
                if (_oz(z, 200, e, s, gg)) {
                    oB0C.wxVkey = 1
                    var o00C = _n('view')
                    _rz(z, o00C, 'class', 201, e, s, gg)
                    var lAAD = _n('view')
                    _rz(z, lAAD, 'class', 202, e, s, gg)
                    var aBAD = _n('text')
                    _rz(z, aBAD, 'class', 203, e, s, gg)
                    var tCAD = _oz(z, 204, e, s, gg)
                    _(aBAD, tCAD)
                    _(lAAD, aBAD)
                    var eDAD = _n('text')
                    _rz(z, eDAD, 'class', 205, e, s, gg)
                    var bEAD = _oz(z, 206, e, s, gg)
                    _(eDAD, bEAD)
                    _(lAAD, eDAD)
                    _(o00C, lAAD)
                    var oFAD = _n('view')
                    _rz(z, oFAD, 'class', 207, e, s, gg)
                    var fIAD = _v()
                    _(oFAD, fIAD)
                    var cJAD = function(oLAD, hKAD, cMAD, gg) {
                        var lOAD = _n('view')
                        _rz(z, lOAD, 'class', 212, oLAD, hKAD, gg)
                        var tQAD = _n('text')
                        _rz(z, tQAD, 'class', 213, oLAD, hKAD, gg)
                        var eRAD = _oz(z, 214, oLAD, hKAD, gg)
                        _(tQAD, eRAD)
                        _(lOAD, tQAD)
                        var aPAD = _v()
                        _(lOAD, aPAD)
                        if (_oz(z, 215, oLAD, hKAD, gg)) {
                            aPAD.wxVkey = 1
                            var bSAD = _n('text')
                            _rz(z, bSAD, 'class', 216, oLAD, hKAD, gg)
                            var oTAD = _oz(z, 217, oLAD, hKAD, gg)
                            _(bSAD, oTAD)
                            _(aPAD, bSAD)
                        }
                        aPAD.wxXCkey = 1
                        _(cMAD, lOAD)
                        return cMAD
                    }
                    fIAD.wxXCkey = 2
                    _2z(z, 210, cJAD, e, s, gg, fIAD, 'person', 'index', 'index')
                    var xGAD = _v()
                    _(oFAD, xGAD)
                    if (_oz(z, 218, e, s, gg)) {
                        xGAD.wxVkey = 1
                        var xUAD = _mz(z, 'view', ['catchtap', 219, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
                        var oVAD = _n('text')
                        _rz(z, oVAD, 'class', 222, e, s, gg)
                        var fWAD = _oz(z, 223, e, s, gg)
                        _(oVAD, fWAD)
                        _(xUAD, oVAD)
                        var cXAD = _n('text')
                        _rz(z, cXAD, 'class', 224, e, s, gg)
                        var hYAD = _oz(z, 225, e, s, gg)
                        _(cXAD, hYAD)
                        _(xUAD, cXAD)
                        _(xGAD, xUAD)
                    }
                    var oHAD = _v()
                    _(oFAD, oHAD)
                    if (_oz(z, 226, e, s, gg)) {
                        oHAD.wxVkey = 1
                        var oZAD = _n('view')
                        var c1AD = _v()
                        _(oZAD, c1AD)
                        var o2AD = function(a4AD, l3AD, t5AD, gg) {
                            var b7AD = _n('view')
                            _rz(z, b7AD, 'class', 230, a4AD, l3AD, gg)
                            var x9AD = _n('text')
                            _rz(z, x9AD, 'class', 231, a4AD, l3AD, gg)
                            var o0AD = _oz(z, 232, a4AD, l3AD, gg)
                            _(x9AD, o0AD)
                            _(b7AD, x9AD)
                            var o8AD = _v()
                            _(b7AD, o8AD)
                            if (_oz(z, 233, a4AD, l3AD, gg)) {
                                o8AD.wxVkey = 1
                                var fABD = _n('text')
                                _rz(z, fABD, 'class', 234, a4AD, l3AD, gg)
                                var cBBD = _oz(z, 235, a4AD, l3AD, gg)
                                _(fABD, cBBD)
                                _(o8AD, fABD)
                            }
                            o8AD.wxXCkey = 1
                            _(t5AD, b7AD)
                            return t5AD
                        }
                        c1AD.wxXCkey = 2
                        _2z(z, 229, o2AD, e, s, gg, c1AD, 'person', 'index', '')
                        _(oHAD, oZAD)
                    }
                    xGAD.wxXCkey = 1
                    oHAD.wxXCkey = 1
                    _(o00C, oFAD)
                    _(oB0C, o00C)
                }
                var hCBD = _n('view')
                _rz(z, hCBD, 'class', 236, e, s, gg)
                var oDBD = _mz(z, 'button', ['bindtap', 237, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
                var cEBD = _oz(z, 240, e, s, gg)
                _(oDBD, cEBD)
                _(hCBD, oDBD)
                var oFBD = _mz(z, 'button', ['bindtap', 241, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
                var lGBD = _oz(z, 244, e, s, gg)
                _(oFBD, lGBD)
                _(hCBD, oFBD)
                _(xA0C, hCBD)
                oB0C.wxXCkey = 1
                _(o09C, xA0C)
                _(oR6C, o09C)
            }
            oR6C.wxXCkey = 1
            _(r, bQ6C)
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
                g = "$gwx18_XC_37";
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
if (__vd_version_info__.delayedGwx || false) $gwx18_XC_37();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packageExternal/modelEmployee/writeoffnotes/writeoffnotes.wxml'] = [$gwx18_XC_37, './packageExternal/modelEmployee/writeoffnotes/writeoffnotes.wxml'];
else __wxAppCode__['packageExternal/modelEmployee/writeoffnotes/writeoffnotes.wxml'] = $gwx18_XC_37('./packageExternal/modelEmployee/writeoffnotes/writeoffnotes.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['packageExternal/modelEmployee/writeoffnotes/writeoffnotes.wxss'] = setCssToHead([".", [1], "container{background-color:#f6f7fb;color:#111827;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Helvetica Neue,Arial,sans-serif;height:100vh}\n.", [1], "header{background-color:initial;padding:", [0, 20], " ", [0, 20], " 0;z-index:10}\n.", [1], "session-picker{-webkit-align-items:center;align-items:center;background-color:#fff;border:", [0, 1], " solid #e7eaf0;border-radius:", [0, 18], ";box-shadow:0 ", [0, 10], " ", [0, 30], " rgba(17,24,39,.05);display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;padding:", [0, 22], "}\n.", [1], "session-label{color:#6b7280;font-size:", [0, 24], "}\n.", [1], "session-text{color:#111827;-webkit-flex:1;flex:1;font-size:", [0, 30], ";font-weight:600;text-align:center}\n.", [1], "picker-arrow{color:#9ca3af;font-size:", [0, 22], "}\n.", [1], "stats-bar{-webkit-align-items:center;align-items:center;color:#6b7280;font-size:", [0, 22], ";-webkit-justify-content:space-between;justify-content:space-between;margin-top:", [0, 16], ";padding:0 ", [0, 6], "}\n.", [1], "stats-bar,.", [1], "stats-left{display:-webkit-flex;display:flex}\n.", [1], "stats-left{-webkit-flex:1;flex:1;gap:", [0, 12], "}\n.", [1], "stat-item{background-color:hsla(0,0%,100%,.8);border:", [0, 1], " solid #eef0f4;border-radius:", [0, 999], ";padding:", [0, 10], " ", [0, 14], "}\n.", [1], "refresh-btn{-webkit-align-items:center;align-items:center;background-color:hsla(0,0%,100%,.9);border:", [0, 1], " solid #e7eaf0;border-radius:", [0, 999], ";box-shadow:0 ", [0, 4], " ", [0, 12], " rgba(17,24,39,.06);color:#6b7280;display:-webkit-flex;display:flex;font-size:", [0, 22], ";height:", [0, 52], ";-webkit-justify-content:center;justify-content:center;line-height:normal;margin:0;min-width:", [0, 60], ";padding:", [0, 10], " ", [0, 14], "}\n.", [1], "refresh-btn-hover{background-color:#fff;-webkit-transform:scale(.96);transform:scale(.96)}\n.", [1], "refresh-icon{height:", [0, 32], ";width:", [0, 32], "}\n.", [1], "tabs{background-color:hsla(0,0%,100%,.7);border:", [0, 1], " solid #e7eaf0;margin:", [0, 16], " ", [0, 20], " 0;padding:", [0, 6], "}\n.", [1], "tab-item,.", [1], "tabs{border-radius:", [0, 999], ";display:-webkit-flex;display:flex}\n.", [1], "tab-item{-webkit-align-items:center;align-items:center;-webkit-flex:1;flex:1;height:", [0, 72], ";-webkit-justify-content:center;justify-content:center;position:relative}\n.", [1], "tab-item.", [1], "active{background-color:#fff;box-shadow:0 ", [0, 10], " ", [0, 26], " rgba(17,24,39,.08)}\n.", [1], "tab-content{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.", [1], "tab-name{color:#6b7280;font-size:", [0, 26], ";font-weight:500}\n.", [1], "tab-count{color:#9ca3af;font-size:", [0, 22], ";margin-left:", [0, 4], "}\n.", [1], "tab-item.", [1], "active .", [1], "tab-name{color:#111827;font-weight:700}\n.", [1], "tab-item.", [1], "active .", [1], "tab-count{color:#111827}\n.", [1], "tab-line{display:none}\n.", [1], "content{box-sizing:border-box;-webkit-flex:1;flex:1;overflow:hidden;padding:", [0, 16], " ", [0, 20], " 0}\n.", [1], "queue-preview-card{-webkit-align-items:center;align-items:center;background-color:hsla(0,0%,100%,.92);border:", [0, 1], " solid rgba(219,234,254,.95);border-radius:", [0, 20], ";box-shadow:0 ", [0, 14], " ", [0, 32], " rgba(17,24,39,.06);display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:", [0, 16], ";overflow:hidden;padding:", [0, 16], ";position:relative;transition:-webkit-transform .12s ease,-webkit-filter .12s ease;transition:transform .12s ease,filter .12s ease;transition:transform .12s ease,filter .12s ease,-webkit-transform .12s ease,-webkit-filter .12s ease}\n.", [1], "queue-preview-card:active{-webkit-filter:brightness(.985);filter:brightness(.985);-webkit-transform:translateY(", [0, 1], ");transform:translateY(", [0, 1], ")}\n.", [1], "queue-preview-card::before{background:radial-gradient(", [0, 600], " ", [0, 160], " at 18% 0,rgba(0,210,255,.16) 0,rgba(0,210,255,0) 55%),radial-gradient(", [0, 520], " ", [0, 160], " at 85% 10%,rgba(58,123,213,.14) 0,rgba(58,123,213,0) 55%);content:\x22\x22;inset:0;pointer-events:none;position:absolute}\n.", [1], "queue-preview-main{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;gap:", [0, 14], ";min-width:0;position:relative;z-index:1}\n.", [1], "queue-preview-icon{background:linear-gradient(135deg,#3a7bd5,#00d2ff);border-radius:", [0, 14], ";box-shadow:0 ", [0, 14], " ", [0, 24], " rgba(0,210,255,.22);height:", [0, 44], ";overflow:hidden;position:relative;width:", [0, 44], "}\n.", [1], "queue-preview-icon::after{background:linear-gradient(120deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.26) 42%,hsla(0,0%,100%,0) 78%);content:\x22\x22;inset:0;position:absolute;-webkit-transform:translateX(-18%);transform:translateX(-18%)}\n.", [1], "queue-preview-text{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;gap:", [0, 12], ";min-width:0}\n.", [1], "queue-preview-title{color:#111827;font-size:", [0, 26], ";font-weight:800;white-space:nowrap}\n.", [1], "queue-preview-metric{-webkit-align-items:baseline;align-items:baseline;background-color:rgba(219,234,254,.6);border:", [0, 1], " solid rgba(219,234,254,.9);border-radius:", [0, 999], ";display:-webkit-inline-flex;display:inline-flex;gap:", [0, 6], ";padding:", [0, 8], " ", [0, 12], ";white-space:nowrap}\n.", [1], "queue-preview-number{color:#1d4ed8;font-size:", [0, 28], ";font-weight:900}\n.", [1], "queue-preview-unit{color:#374151;font-size:", [0, 22], ";font-weight:700}\n.", [1], "queue-preview-cta{-webkit-align-items:center;align-items:center;background-color:hsla(0,0%,100%,.7);border:", [0, 1], " solid rgba(238,240,244,.9);border-radius:", [0, 999], ";display:-webkit-flex;display:flex;gap:", [0, 6], ";padding:", [0, 8], " ", [0, 10], ";position:relative;z-index:1}\n.", [1], "queue-preview-cta-text{color:#6b7280;font-size:", [0, 22], ";font-weight:800}\n.", [1], "queue-preview-cta-arrow{color:#9ca3af;font-size:", [0, 28], ";font-weight:900;line-height:1}\n.", [1], "empty-tip{-webkit-align-items:center;align-items:center;color:#9ca3af;display:-webkit-flex;display:flex;font-size:", [0, 28], ";height:", [0, 400], ";-webkit-justify-content:center;justify-content:center}\n.", [1], "user-list{padding-bottom:", [0, 20], "}\n.", [1], "user-card{background-color:#fff;border:", [0, 1], " solid #e7eaf0;border-radius:", [0, 18], ";box-shadow:0 ", [0, 10], " ", [0, 30], " rgba(17,24,39,.05);-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:", [0, 16], ";padding:", [0, 20], "}\n.", [1], "card-left,.", [1], "code-circle,.", [1], "user-card{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex}\n.", [1], "code-circle{border:", [0, 1], " solid hsla(0,0%,100%,.35);border-radius:", [0, 20], ";box-shadow:0 ", [0, 14], " ", [0, 30], " rgba(17,24,39,.1);height:", [0, 92], ";-webkit-justify-content:center;justify-content:center;margin-right:", [0, 18], ";overflow:hidden;position:relative;width:", [0, 92], "}\n.", [1], "code-circle::before{background:radial-gradient(circle at 30% 25%,hsla(0,0%,100%,.4),hsla(0,0%,100%,0) 55%);content:\x22\x22;height:120%;left:-20%;position:absolute;top:-40%;width:140%}\n.", [1], "code-text{color:#fff;font-size:", [0, 32], ";font-weight:800;letter-spacing:", [0, .5], ";position:relative;text-shadow:0 ", [0, 2], " ", [0, 10], " rgba(0,0,0,.18);z-index:1}\n.", [1], "bg-status-0{background:linear-gradient(135deg,#6366f1,#a5b4fc)}\n.", [1], "bg-status-1{background:linear-gradient(135deg,#3a7bd5,#00d2ff)}\n.", [1], "bg-status-2{background:linear-gradient(135deg,#11998e,#38ef7d)}\n.", [1], "bg-status-3{background:linear-gradient(135deg,#f96,#ff5e62)}\n.", [1], "user-info{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column}\n.", [1], "user-name{color:#111827;font-size:", [0, 30], ";font-weight:650;margin-bottom:", [0, 8], "}\n.", [1], "user-phone{color:#9ca3af;font-size:", [0, 22], "}\n.", [1], "card-right{-webkit-align-items:flex-end;align-items:flex-end;-webkit-flex-direction:column;flex-direction:column}\n.", [1], "card-actions,.", [1], "card-right{display:-webkit-flex;display:flex}\n.", [1], "card-actions{-webkit-align-items:center;align-items:center;gap:", [0, 16], "}\n.", [1], "mini-btn{-webkit-align-items:center!important;align-items:center!important;border:", [0, 1], " solid transparent!important;border-radius:", [0, 999], "!important;box-shadow:0 ", [0, 10], " ", [0, 18], " rgba(17,24,39,.08)!important;display:-webkit-inline-flex!important;display:inline-flex!important;font-size:", [0, 24], "!important;font-weight:700!important;height:", [0, 54], "!important;-webkit-justify-content:center!important;justify-content:center!important;line-height:", [0, 54], "!important;margin:0!important;padding:0 ", [0, 20], "!important;-webkit-transform:translateY(0);transform:translateY(0);transition:-webkit-transform .12s ease,-webkit-filter .12s ease;transition:transform .12s ease,filter .12s ease;transition:transform .12s ease,filter .12s ease,-webkit-transform .12s ease,-webkit-filter .12s ease}\n.", [1], "mini-btn:active{-webkit-filter:brightness(.96) saturate(1.02);filter:brightness(.96) saturate(1.02);-webkit-transform:translateY(", [0, 1], ");transform:translateY(", [0, 1], ")}\n.", [1], "warn-btn{background:linear-gradient(135deg,#f96,#ff5e62)!important;box-shadow:0 ", [0, 12], " ", [0, 22], " rgba(255,94,98,.25)!important;color:#fff!important}\n.", [1], "primary-btn{background:linear-gradient(135deg,#3a7bd5,#00d2ff)!important;box-shadow:0 ", [0, 12], " ", [0, 22], " rgba(0,210,255,.22)!important;color:#fff!important}\n.", [1], "default-btn{background:linear-gradient(135deg,#fff,#eef2ff)!important;border:", [0, 1], " solid #dbeafe!important;box-shadow:0 ", [0, 12], " ", [0, 22], " rgba(37,99,235,.12)!important;color:#1d4ed8!important}\n.", [1], "status-text{font-size:", [0, 24], "}\n.", [1], "text-gray{color:#9ca3af}\n.", [1], "text-green{color:#059669;font-weight:700}\n.", [1], "time-text{color:#9ca3af;font-size:", [0, 22], ";margin-top:", [0, 6], "}\n.", [1], "bottom-spacer{height:", [0, 280], "}\n.", [1], "footer{background-color:hsla(0,0%,100%,.92);border-top:", [0, 1], " solid #eef0f4;bottom:0;box-shadow:0 ", [0, -12], " ", [0, 30], " rgba(17,24,39,.06);left:0;padding:", [0, 16], " ", [0, 20], " ", [0, 30], ";position:fixed;right:0;z-index:100}\n.", [1], "call-control,.", [1], "footer{display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;gap:", [0, 16], "}\n.", [1], "call-control{background-color:#fff;border:", [0, 1], " solid #e7eaf0;border-radius:", [0, 18], ";overflow:visible;padding:", [0, 16], ";position:relative}\n.", [1], "control-header{-webkit-align-items:center;align-items:center;-webkit-justify-content:space-between;justify-content:space-between}\n.", [1], "control-header,.", [1], "control-left{display:-webkit-flex;display:flex}\n.", [1], "control-left{-webkit-flex-direction:column;flex-direction:column}\n.", [1], "control-title{color:#111827;font-size:", [0, 26], ";font-weight:700}\n.", [1], "control-desc{color:#9ca3af;font-size:", [0, 22], "}\n.", [1], "btn-group{gap:", [0, 20], "}\n.", [1], "btn-group,.", [1], "call-anim-layer{display:-webkit-flex;display:flex}\n.", [1], "call-anim-layer{bottom:", [0, 92], ";gap:", [0, 14], ";height:0;-webkit-justify-content:center;justify-content:center;left:0;pointer-events:none;position:absolute;right:0;z-index:2}\n.", [1], "fake-person{-webkit-animation:fp-fly .52s ease-out forwards;animation:fp-fly .52s ease-out forwards;height:", [0, 46], ";opacity:0;position:relative;-webkit-transform:translateZ(0) scale(.94);transform:translateZ(0) scale(.94);width:", [0, 30], ";will-change:transform,opacity}\n.", [1], "fp-head{background:#0ea5e9;border-radius:", [0, 999], ";box-shadow:0 ", [0, 6], " ", [0, 14], " rgba(2,132,199,.18);height:", [0, 18], ";margin:0 auto;width:", [0, 18], "}\n.", [1], "fp-body{background:#38bdf8;border-radius:", [0, 12], ";box-shadow:0 ", [0, 6], " ", [0, 14], " rgba(2,132,199,.14);height:", [0, 26], ";margin:", [0, 2], " auto 0;width:", [0, 26], "}\n.", [1], "fake-person-plus{-webkit-animation:fp-plus .52s ease-out forwards;animation:fp-plus .52s ease-out forwards;color:#0ea5e9;font-size:", [0, 22], ";font-weight:800;opacity:0;-webkit-transform:translateZ(0);transform:translateZ(0);will-change:transform,opacity}\n@-webkit-keyframes fp-fly{0%{opacity:0;-webkit-transform:translate3d(0,", [0, 10], ",0) scale(.9);transform:translate3d(0,", [0, 10], ",0) scale(.9)}\n20%{opacity:1;-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}\n100%{opacity:0;-webkit-transform:translate3d(0,", [0, -70], ",0) scale(1);transform:translate3d(0,", [0, -70], ",0) scale(1)}\n}@keyframes fp-fly{0%{opacity:0;-webkit-transform:translate3d(0,", [0, 10], ",0) scale(.9);transform:translate3d(0,", [0, 10], ",0) scale(.9)}\n20%{opacity:1;-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}\n100%{opacity:0;-webkit-transform:translate3d(0,", [0, -70], ",0) scale(1);transform:translate3d(0,", [0, -70], ",0) scale(1)}\n}@-webkit-keyframes fp-plus{0%{opacity:0;-webkit-transform:translate3d(0,", [0, 10], ",0);transform:translate3d(0,", [0, 10], ",0)}\n25%{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}\n100%{opacity:0;-webkit-transform:translate3d(0,", [0, -70], ",0);transform:translate3d(0,", [0, -70], ",0)}\n}@keyframes fp-plus{0%{opacity:0;-webkit-transform:translate3d(0,", [0, 10], ",0);transform:translate3d(0,", [0, 10], ",0)}\n25%{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}\n100%{opacity:0;-webkit-transform:translate3d(0,", [0, -70], ",0);transform:translate3d(0,", [0, -70], ",0)}\n}.", [1], "call-btn{background-color:hsla(0,0%,100%,.92);border:", [0, 1], " solid #e5e7eb;border-radius:", [0, 999], ";box-shadow:0 ", [0, 8], " ", [0, 16], " rgba(17,24,39,.06);color:#111827;-webkit-flex:1;flex:1;font-size:", [0, 26], ";font-weight:700;height:", [0, 70], ";line-height:", [0, 70], ";padding:0;-webkit-transform:translateY(0);transform:translateY(0);transition:-webkit-transform .12s ease,-webkit-filter .12s ease;transition:transform .12s ease,filter .12s ease;transition:transform .12s ease,filter .12s ease,-webkit-transform .12s ease,-webkit-filter .12s ease}\n.", [1], "call-btn:active{-webkit-filter:brightness(.96) saturate(1.02);filter:brightness(.96) saturate(1.02);-webkit-transform:translateY(", [0, 1], ");transform:translateY(", [0, 1], ")}\n.", [1], "btn-hover{-webkit-filter:brightness(.98) saturate(1.06);filter:brightness(.98) saturate(1.06)}\n.", [1], "call-btn-1{background-color:#f0f9ff;border-color:#bae6fd;box-shadow:0 ", [0, 8], " ", [0, 16], " rgba(2,132,199,.12);color:#0369a1}\n.", [1], "call-btn-5{background-color:#e0f2fe;border-color:#7dd3fc;box-shadow:0 ", [0, 8], " ", [0, 16], " rgba(2,132,199,.14);color:#075985}\n.", [1], "call-btn-10{background-color:#dbeafe;border-color:#93c5fd;box-shadow:0 ", [0, 8], " ", [0, 16], " rgba(37,99,235,.16);color:#1d4ed8}\n.", [1], "main-actions,.", [1], "scan-btn{width:100%}\n.", [1], "scan-btn{-webkit-align-items:center;align-items:center;background:linear-gradient(135deg,#3a7bd5,#00d2ff)!important;border-radius:", [0, 999], ";box-shadow:0 ", [0, 16], " ", [0, 36], " rgba(0,210,255,.24);display:-webkit-flex;display:flex;font-size:", [0, 32], ";font-weight:700;height:", [0, 96], ";-webkit-justify-content:center;justify-content:center;line-height:", [0, 96], ";overflow:hidden;position:relative}\n.", [1], "scan-btn-hover{-webkit-filter:brightness(.98) saturate(1.08);filter:brightness(.98) saturate(1.08)}\n.", [1], "scan-btn:active{-webkit-filter:brightness(.96) saturate(1.02);filter:brightness(.96) saturate(1.02);-webkit-transform:translateY(", [0, 1], ");transform:translateY(", [0, 1], ")}\n.", [1], "scan-btn::before{background:linear-gradient(120deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.22) 35%,hsla(0,0%,100%,0) 70%);content:\x22\x22;height:100%;left:-40%;opacity:.9;position:absolute;top:0;-webkit-transform:skewX(-18deg);transform:skewX(-18deg);width:60%}\n.", [1], "scan-text{color:#fff;letter-spacing:", [0, 2], "}\n.", [1], "call-btn::after,.", [1], "mini-btn::after,.", [1], "scan-btn::after{border:none!important}\n.", [1], "user-detail-modal{-webkit-align-items:center;align-items:center;background-color:rgba(0,0,0,.6);bottom:0;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;left:0;padding:", [0, 40], ";position:fixed;right:0;top:0;z-index:9999}\n.", [1], "modal-content{background-color:#f5f5f5;border-radius:", [0, 24], ";box-shadow:0 ", [0, 20], " ", [0, 50], " rgba(0,0,0,.3);max-height:80vh;max-width:", [0, 640], ";overflow:hidden;overflow-y:auto;width:100%}\n.", [1], "modal-header{background-color:#fff;border-bottom:", [0, 1], " solid #e5e5e5;padding:", [0, 24], " ", [0, 32], ";text-align:center}\n.", [1], "modal-store-name{color:#333;display:block;font-size:", [0, 32], ";font-weight:700;margin-bottom:", [0, 8], "}\n.", [1], "modal-session-time{color:#666;display:block;font-size:", [0, 26], ";font-weight:400}\n.", [1], "modal-body{-webkit-align-items:stretch;align-items:stretch;background-color:#f5f5f5;display:-webkit-flex;display:flex;gap:", [0, 24], ";padding:", [0, 32], "}\n.", [1], "avatar-container{-webkit-flex-shrink:0;flex-shrink:0}\n.", [1], "user-avatar,.", [1], "user-avatar-placeholder{background-color:#fff;border:", [0, 2], " solid #e5e5e5;border-radius:", [0, 16], ";height:100%;min-height:", [0, 240], ";width:", [0, 220], "}\n.", [1], "user-avatar-placeholder{-webkit-align-items:center;align-items:center;background:linear-gradient(135deg,#a8a8a8,#d0d0d0);display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center}\n.", [1], "avatar-text{color:#fff;font-size:", [0, 72], ";font-weight:700}\n.", [1], "info-container{-webkit-flex:1;flex:1;-webkit-flex-direction:column;flex-direction:column}\n.", [1], "info-container,.", [1], "info-item{display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between}\n.", [1], "info-item{-webkit-align-items:center;align-items:center;background-color:#fff;border-radius:", [0, 12], ";margin-bottom:", [0, 12], ";padding:", [0, 16], " ", [0, 20], "}\n.", [1], "info-item:last-of-type{margin-bottom:0}\n.", [1], "info-label{color:#666;font-size:", [0, 24], ";font-weight:400}\n.", [1], "info-value{color:#333;font-size:", [0, 26], ";font-weight:600}\n.", [1], "queue-info-item{-webkit-align-items:center;align-items:center;background-color:#fff;border-radius:", [0, 12], ";display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;padding:", [0, 16], " ", [0, 20], "}\n.", [1], "queue-label{color:#666;font-size:", [0, 24], ";font-weight:400}\n.", [1], "queue-number{color:#ff5e62;font-size:", [0, 42], ";font-weight:900;letter-spacing:", [0, 2], "}\n.", [1], "modal-footer{background-color:#f5f5f5;gap:", [0, 20], ";padding:", [0, 24], " ", [0, 32], " ", [0, 32], "}\n.", [1], "modal-btn,.", [1], "modal-footer{display:-webkit-flex;display:flex}\n.", [1], "modal-btn{-webkit-align-items:center;align-items:center;border:none;border-radius:", [0, 12], ";-webkit-flex:1;flex:1;font-size:", [0, 30], ";font-weight:700;height:", [0, 88], ";-webkit-justify-content:center;justify-content:center;line-height:", [0, 88], ";transition:all .12s ease}\n.", [1], "modal-btn::after{border:none!important}\n.", [1], "modal-btn-cancel{background-color:#fff;border:", [0, 2], " solid #e5e5e5;color:#666}\n.", [1], "modal-btn-cancel:active{background-color:#f5f5f5;-webkit-transform:scale(.98);transform:scale(.98)}\n.", [1], "modal-btn-confirm{background:linear-gradient(135deg,#3a7bd5,#00d2ff);box-shadow:0 ", [0, 8], " ", [0, 20], " rgba(0,210,255,.3);color:#fff}\n.", [1], "modal-btn-confirm:active{-webkit-filter:brightness(.95);filter:brightness(.95);-webkit-transform:scale(.98);transform:scale(.98)}\n.", [1], "modal-btn-confirm[disabled]{background:linear-gradient(135deg,#bbb,#ddd);box-shadow:none;color:#fff;opacity:.6}\n.", [1], "companion-section{background-color:#fff;border-radius:", [0, 12], ";margin:0 ", [0, 32], ";padding:", [0, 20], " ", [0, 24], "}\n.", [1], "companion-header{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;margin-bottom:", [0, 16], "}\n.", [1], "companion-title{color:#333;font-size:", [0, 26], ";font-weight:600}\n.", [1], "companion-count{background-color:rgba(130,102,66,.1);border-radius:", [0, 20], ";color:#826642;font-size:", [0, 24], ";font-weight:700;padding:", [0, 4], " ", [0, 16], "}\n.", [1], "companion-items{border-top:", [0, 1], " solid #f0f0f0;padding-top:", [0, 12], "}\n.", [1], "companion-item{-webkit-align-items:center;align-items:center;border-bottom:", [0, 1], " solid #f8f8f8;display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;padding:", [0, 14], " 0}\n.", [1], "companion-item:last-child{border-bottom:none}\n.", [1], "companion-name{color:#333;font-size:", [0, 26], ";font-weight:500}\n.", [1], "companion-relation{background-color:rgba(130,102,66,.1);border-radius:", [0, 16], ";color:#826642;font-size:", [0, 22], ";padding:", [0, 4], " ", [0, 16], "}\n.", [1], "companion-more{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;padding:", [0, 16], " 0 ", [0, 8], "}\n.", [1], "companion-more-text{color:#826642;font-size:", [0, 24], ";font-weight:500}\n.", [1], "companion-more-arrow{color:#826642;font-size:", [0, 28], ";font-weight:700;margin-left:", [0, 6], ";-webkit-transform:rotate(90deg);transform:rotate(90deg);transition:-webkit-transform .2s ease;transition:transform .2s ease;transition:transform .2s ease,-webkit-transform .2s ease}\n.", [1], "companion-more-arrow.", [1], "arrow-up{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./packageExternal/modelEmployee/writeoffnotes/writeoffnotes.wxss:1:16839)", {
        path: "./packageExternal/modelEmployee/writeoffnotes/writeoffnotes.wxss"
    });
}