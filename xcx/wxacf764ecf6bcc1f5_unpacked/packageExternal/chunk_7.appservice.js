$gwx18_XC_36 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx18_XC_36 || [];

        function gz$gwx18_XC_36_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx18_XC_36_1) return __WXML_GLOBAL__.ops_cached.$gwx18_XC_36_1
            __WXML_GLOBAL__.ops_cached.$gwx18_XC_36_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'container data-v-3db4998a'])
                Z([3, 'scan-area data-v-3db4998a'])
                Z([
                    [2, '&&'],
                    [
                        [7],
                        [3, 'showCamera']
                    ],
                    [
                        [2, '!'],
                        [
                            [7],
                            [3, 'showHistoryPopup']
                        ]
                    ]
                ])
                Z([3, 'camera-error data-v-3db4998a'])
                Z([
                    [7],
                    [3, 'canRetry']
                ])
                Z([
                    [7],
                    [3, 'needAuth']
                ])
                Z([3, 'result-area data-v-3db4998a'])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'scanState']
                    ],
                    [1, 'idle']
                ])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'scanState']
                    ],
                    [1, 'verifying']
                ])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'scanState']
                    ],
                    [1, 'success']
                ])
                Z([3, 'status-card status-success data-v-3db4998a'])
                Z([3, 'verify-info data-v-3db4998a'])
                Z([3, 'info-left data-v-3db4998a'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'currentResult']
                    ],
                    [3, 'sessionNum']
                ])
                Z([
                    [2, '>'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'currentResult']
                        ],
                        [3, 'companionCount']
                    ],
                    [1, 0]
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'currentResult']
                    ],
                    [3, 'isReentry']
                ])
                Z([3, 'info-reentry data-v-3db4998a'])
                Z([
                    [2, '>='],
                    [
                        [6],
                        [
                            [7],
                            [3, 'currentResult']
                        ],
                        [3, 'reentryRemaining']
                    ],
                    [1, 0]
                ])
                Z([
                    [2, '==='],
                    [
                        [6],
                        [
                            [7],
                            [3, 'currentResult']
                        ],
                        [3, 'reentryRemaining']
                    ],
                    [
                        [2, '-'],
                        [1, 1]
                    ]
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'currentResult']
                    ],
                    [3, 'sortOrder']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, '$root']
                    ],
                    [3, 'g0']
                ])
                Z([3, 'companion-inline data-v-3db4998a'])
                Z([3, 'index'])
                Z([3, 'person'])
                Z([
                    [7],
                    [3, 'displayCompanions']
                ])
                Z(z[22])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'person']
                    ],
                    [3, 'relation']
                ])
                Z([
                    [2, '>'],
                    [
                        [6],
                        [
                            [7],
                            [3, '$root']
                        ],
                        [3, 'g1']
                    ],
                    [
                        [7],
                        [3, 'maxDisplayCompanions']
                    ]
                ])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'scanState']
                    ],
                    [1, 'fail']
                ])
                Z([
                    [7],
                    [3, 'showHistoryPopup']
                ])
                Z([3, '__e'])
                Z([3, 'history-overlay data-v-3db4998a'])
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
                                                    [1, 'closeHistoryPopup']
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
                Z(z[30])
                Z([3, 'history-modal data-v-3db4998a'])
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
                Z([
                    [6],
                    [
                        [7],
                        [3, '$root']
                    ],
                    [3, 'g3']
                ])
                Z(z[22])
                Z([3, 'record'])
                Z([
                    [7],
                    [3, 'historyRecords']
                ])
                Z(z[22])
                Z([3, 'history-info data-v-3db4998a'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'record']
                    ],
                    [3, 'sessionNum']
                ])
                Z([
                    [2, '&&'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'record']
                        ],
                        [3, 'sortOrder']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'record']
                        ],
                        [3, 'success']
                    ]
                ])
                Z([
                    [2, '&&'],
                    [
                        [2, '!'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'record']
                            ],
                            [3, 'success']
                        ]
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'record']
                        ],
                        [3, 'message']
                    ]
                ])
                Z([
                    [2, '&&'],
                    [
                        [2, '||'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'record']
                            ],
                            [3, 'isReentry']
                        ],
                        [
                            [2, '>'],
                            [
                                [6],
                                [
                                    [7],
                                    [3, 'record']
                                ],
                                [3, 'companionCount']
                            ],
                            [1, 0]
                        ]
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'record']
                        ],
                        [3, 'success']
                    ]
                ])
                Z([3, 'history-row-footer data-v-3db4998a'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'record']
                    ],
                    [3, 'isReentry']
                ])
                Z([
                    [4],
                    [
                        [5],
                        [
                            [5],
                            [
                                [5],
                                [1, 'data-v-3db4998a']
                            ],
                            [1, 'history-meta']
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
                                                [3, 'record']
                                            ],
                                            [3, 'reentryRemaining']
                                        ],
                                        [1, 1]
                                    ],
                                    [1, 'history-meta-warn'],
                                    [1, '']
                                ]
                            ]
                        ]
                    ]
                ])
                Z([
                    [2, '>='],
                    [
                        [6],
                        [
                            [7],
                            [3, 'record']
                        ],
                        [3, 'reentryRemaining']
                    ],
                    [1, 0]
                ])
                Z([
                    [2, '==='],
                    [
                        [6],
                        [
                            [7],
                            [3, 'record']
                        ],
                        [3, 'reentryRemaining']
                    ],
                    [
                        [2, '-'],
                        [1, 1]
                    ]
                ])
                Z([
                    [2, '&&'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'record']
                        ],
                        [3, 'isReentry']
                    ],
                    [
                        [2, '>'],
                        [
                            [6],
                            [
                                [7],
                                [3, 'record']
                            ],
                            [3, 'companionCount']
                        ],
                        [1, 0]
                    ]
                ])
                Z([
                    [2, '>'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'record']
                        ],
                        [3, 'companionCount']
                    ],
                    [1, 0]
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, '$root']
                    ],
                    [3, 'g4']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx18_XC_36_1);
            return __WXML_GLOBAL__.ops_cached.$gwx18_XC_36_1
        }
        __WXML_GLOBAL__.ops_set.$gwx18_XC_36 = z;
        __WXML_GLOBAL__.ops_init.$gwx18_XC_36 = true;
        var x = ['./packageExternal/modelEmployee/scancode/scancode.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx18_XC_36_1()
            var fAS = _n('view')
            _rz(z, fAS, 'class', 0, e, s, gg)
            var hCS = _n('view')
            _rz(z, hCS, 'class', 1, e, s, gg)
            var oDS = _v()
            _(hCS, oDS)
            if (_oz(z, 2, e, s, gg)) {
                oDS.wxVkey = 1
            } else {
                oDS.wxVkey = 2
                var cES = _n('view')
                _rz(z, cES, 'class', 3, e, s, gg)
                var oFS = _v()
                _(cES, oFS)
                if (_oz(z, 4, e, s, gg)) {
                    oFS.wxVkey = 1
                }
                var lGS = _v()
                _(cES, lGS)
                if (_oz(z, 5, e, s, gg)) {
                    lGS.wxVkey = 1
                }
                oFS.wxXCkey = 1
                lGS.wxXCkey = 1
                _(oDS, cES)
            }
            oDS.wxXCkey = 1
            _(fAS, hCS)
            var aHS = _n('view')
            _rz(z, aHS, 'class', 6, e, s, gg)
            var tIS = _v()
            _(aHS, tIS)
            if (_oz(z, 7, e, s, gg)) {
                tIS.wxVkey = 1
            } else {
                tIS.wxVkey = 2
                var eJS = _v()
                _(tIS, eJS)
                if (_oz(z, 8, e, s, gg)) {
                    eJS.wxVkey = 1
                } else {
                    eJS.wxVkey = 2
                    var bKS = _v()
                    _(eJS, bKS)
                    if (_oz(z, 9, e, s, gg)) {
                        bKS.wxVkey = 1
                        var oLS = _n('view')
                        _rz(z, oLS, 'class', 10, e, s, gg)
                        var oNS = _n('view')
                        _rz(z, oNS, 'class', 11, e, s, gg)
                        var cPS = _n('view')
                        _rz(z, cPS, 'class', 12, e, s, gg)
                        var hQS = _v()
                        _(cPS, hQS)
                        if (_oz(z, 13, e, s, gg)) {
                            hQS.wxVkey = 1
                        }
                        var oRS = _v()
                        _(cPS, oRS)
                        if (_oz(z, 14, e, s, gg)) {
                            oRS.wxVkey = 1
                        }
                        var cSS = _v()
                        _(cPS, cSS)
                        if (_oz(z, 15, e, s, gg)) {
                            cSS.wxVkey = 1
                            var oTS = _n('view')
                            _rz(z, oTS, 'class', 16, e, s, gg)
                            var lUS = _v()
                            _(oTS, lUS)
                            if (_oz(z, 17, e, s, gg)) {
                                lUS.wxVkey = 1
                            }
                            var aVS = _v()
                            _(oTS, aVS)
                            if (_oz(z, 18, e, s, gg)) {
                                aVS.wxVkey = 1
                            }
                            lUS.wxXCkey = 1
                            aVS.wxXCkey = 1
                            _(cSS, oTS)
                        }
                        hQS.wxXCkey = 1
                        oRS.wxXCkey = 1
                        cSS.wxXCkey = 1
                        _(oNS, cPS)
                        var fOS = _v()
                        _(oNS, fOS)
                        if (_oz(z, 19, e, s, gg)) {
                            fOS.wxVkey = 1
                        }
                        fOS.wxXCkey = 1
                        _(oLS, oNS)
                        var xMS = _v()
                        _(oLS, xMS)
                        if (_oz(z, 20, e, s, gg)) {
                            xMS.wxVkey = 1
                            var tWS = _n('view')
                            _rz(z, tWS, 'class', 21, e, s, gg)
                            var bYS = _v()
                            _(tWS, bYS)
                            var oZS = function(o2S, x1S, f3S, gg) {
                                var h5S = _v()
                                _(f3S, h5S)
                                if (_oz(z, 26, o2S, x1S, gg)) {
                                    h5S.wxVkey = 1
                                }
                                h5S.wxXCkey = 1
                                return f3S
                            }
                            bYS.wxXCkey = 2
                            _2z(z, 24, oZS, e, s, gg, bYS, 'person', 'index', 'index')
                            var eXS = _v()
                            _(tWS, eXS)
                            if (_oz(z, 27, e, s, gg)) {
                                eXS.wxVkey = 1
                            }
                            eXS.wxXCkey = 1
                            _(xMS, tWS)
                        }
                        xMS.wxXCkey = 1
                        _(bKS, oLS)
                    } else {
                        bKS.wxVkey = 2
                        var o6S = _v()
                        _(bKS, o6S)
                        if (_oz(z, 28, e, s, gg)) {
                            o6S.wxVkey = 1
                        }
                        o6S.wxXCkey = 1
                    }
                    bKS.wxXCkey = 1
                }
                eJS.wxXCkey = 1
            }
            tIS.wxXCkey = 1
            _(fAS, aHS)
            var cBS = _v()
            _(fAS, cBS)
            if (_oz(z, 29, e, s, gg)) {
                cBS.wxVkey = 1
                var c7S = _mz(z, 'view', ['bindtap', 30, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
                var o8S = _mz(z, 'view', ['catchtap', 33, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
                var l9S = _v()
                _(o8S, l9S)
                if (_oz(z, 36, e, s, gg)) {
                    l9S.wxVkey = 1
                } else {
                    l9S.wxVkey = 2
                    var tAT = _v()
                    _(l9S, tAT)
                    var eBT = function(oDT, bCT, xET, gg) {
                        var fGT = _n('view')
                        _rz(z, fGT, 'class', 41, oDT, bCT, gg)
                        var cHT = _v()
                        _(fGT, cHT)
                        if (_oz(z, 42, oDT, bCT, gg)) {
                            cHT.wxVkey = 1
                        }
                        var hIT = _v()
                        _(fGT, hIT)
                        if (_oz(z, 43, oDT, bCT, gg)) {
                            hIT.wxVkey = 1
                        }
                        var oJT = _v()
                        _(fGT, oJT)
                        if (_oz(z, 44, oDT, bCT, gg)) {
                            oJT.wxVkey = 1
                        }
                        var cKT = _v()
                        _(fGT, cKT)
                        if (_oz(z, 45, oDT, bCT, gg)) {
                            cKT.wxVkey = 1
                            var oLT = _n('view')
                            _rz(z, oLT, 'class', 46, oDT, bCT, gg)
                            var lMT = _v()
                            _(oLT, lMT)
                            if (_oz(z, 47, oDT, bCT, gg)) {
                                lMT.wxVkey = 1
                                var ePT = _n('text')
                                _rz(z, ePT, 'class', 48, oDT, bCT, gg)
                                var bQT = _v()
                                _(ePT, bQT)
                                if (_oz(z, 49, oDT, bCT, gg)) {
                                    bQT.wxVkey = 1
                                }
                                var oRT = _v()
                                _(ePT, oRT)
                                if (_oz(z, 50, oDT, bCT, gg)) {
                                    oRT.wxVkey = 1
                                }
                                bQT.wxXCkey = 1
                                oRT.wxXCkey = 1
                                _(lMT, ePT)
                            }
                            var aNT = _v()
                            _(oLT, aNT)
                            if (_oz(z, 51, oDT, bCT, gg)) {
                                aNT.wxVkey = 1
                            }
                            var tOT = _v()
                            _(oLT, tOT)
                            if (_oz(z, 52, oDT, bCT, gg)) {
                                tOT.wxVkey = 1
                            }
                            lMT.wxXCkey = 1
                            aNT.wxXCkey = 1
                            tOT.wxXCkey = 1
                            _(cKT, oLT)
                        }
                        cHT.wxXCkey = 1
                        hIT.wxXCkey = 1
                        oJT.wxXCkey = 1
                        cKT.wxXCkey = 1
                        _(xET, fGT)
                        return xET
                    }
                    tAT.wxXCkey = 2
                    _2z(z, 39, eBT, e, s, gg, tAT, 'record', 'index', 'index')
                }
                var a0S = _v()
                _(o8S, a0S)
                if (_oz(z, 53, e, s, gg)) {
                    a0S.wxVkey = 1
                }
                l9S.wxXCkey = 1
                a0S.wxXCkey = 1
                _(c7S, o8S)
                _(cBS, c7S)
            }
            cBS.wxXCkey = 1
            _(r, fAS)
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
                g = "$gwx18_XC_36";
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
if (__vd_version_info__.delayedGwx || false) $gwx18_XC_36();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packageExternal/modelEmployee/scancode/scancode.wxml'] = [$gwx18_XC_36, './packageExternal/modelEmployee/scancode/scancode.wxml'];
else __wxAppCode__['packageExternal/modelEmployee/scancode/scancode.wxml'] = $gwx18_XC_36('./packageExternal/modelEmployee/scancode/scancode.wxml');;
__wxRoute = "packageExternal/modelEmployee/scancode/scancode";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packageExternal/modelEmployee/scancode/scancode.js";
define("packageExternal/modelEmployee/scancode/scancode.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
        ["packageExternal/modelEmployee/scancode/scancode"], {
            "155a": function(t, e, n) {
                n.r(e);
                var a = n("b2f3"),
                    o = n("7929");
                for (var i in o)["default"].indexOf(i) < 0 && function(t) {
                    n.d(e, t, (function() {
                        return o[t]
                    }))
                }(i);
                n("fa2f");
                var s = n("f0c5"),
                    r = Object(s.a)(o.default, a.b, a.c, !1, null, "3db4998a", null, !1, a.a, void 0);
                e.default = r.exports
            },
            "38be": function(t, e, n) {
                (function(t, e) {
                    n("6cdc"), o(n("66fd"));
                    var a = o(n("155a"));

                    function o(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }
                    t.__webpack_require_UNI_MP_PLUGIN__ = n, e(a.default)
                }).call(this, n("bc2e").default, n("543d").createPage)
            },
            "4c00": function(t, e, n) {
                (function(t) {
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.default = void 0;
                    var a = function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }(n("8bd1"));
                    var o = n("ff25");
                    e.default = {
                        data: function() {
                            return {
                                scanState: "idle",
                                currentResult: null,
                                scanFunctionIsUseable: !0,
                                showCamera: !0,
                                cameraStatus: "摄像头加载中...",
                                errorMessage: "摄像头启动失败",
                                canRetry: !1,
                                needAuth: !1,
                                animationData: {},
                                _animation: null,
                                _timer: null,
                                autoResetTimer: null,
                                countdown: 0,
                                isContinuous: !0,
                                audioContext: null,
                                maxDisplayCompanions: 4,
                                isReentry: !1,
                                reentryCount: 0,
                                reentryRemaining: -1,
                                showHistoryPopup: !1,
                                historyRecords: []
                            }
                        },
                        onLoad: function() {
                            this.audioContext = t.createInnerAudioContext(), this.audioContext.src = "/packageExternal/static/pass.mp3", this.checkCameraPermission()
                        },
                        onUnload: function() {
                            this.audioContext && (this.audioContext.destroy(), this.audioContext = null), this._timer && (clearTimeout(this._timer), this._timer = null), this.autoResetTimer && (clearInterval(this.autoResetTimer), this.autoResetTimer = null)
                        },
                        computed: {
                            displayCompanions: function() {
                                return this.currentResult && this.currentResult.companionInfo ? this.currentResult.companionInfo.slice(0, this.maxDisplayCompanions) : []
                            }
                        },
                        methods: {
                            showAllCompanions: function() {
                                if (this.currentResult && this.currentResult.companionInfo) {
                                    var e = this.currentResult.companionInfo,
                                        n = e.map((function(t, e) {
                                            return "".concat(e + 1, ". ").concat(t.name).concat(t.relation ? " · " + t.relation : "")
                                        })).join("\n");
                                    t.showModal({
                                        title: "随行人员（共".concat(e.length, "人）"),
                                        content: n,
                                        showCancel: !1,
                                        confirmText: "关闭",
                                        confirmColor: "#826642"
                                    })
                                }
                            },
                            onContinuousChange: function(t) {
                                this.isContinuous = t.detail.value
                            },
                            checkCameraPermission: function() {
                                var e = this;
                                t.getSetting({
                                    success: function(n) {
                                        !1 === n.authSetting["scope.camera"] ? (e.showCamera = !1, e.needAuth = !0, e.errorMessage = "需要摄像头权限才能扫码") : void 0 === n.authSetting["scope.camera"] ? t.authorize({
                                            scope: "scope.camera",
                                            success: function() {
                                                console.log("摄像头权限授权成功"), e.showCamera = !0
                                            },
                                            fail: function() {
                                                e.showCamera = !1, e.needAuth = !0, e.errorMessage = "需要摄像头权限才能扫码"
                                            }
                                        }) : e.showCamera = !0
                                    }
                                })
                            },
                            onCameraReady: function(t) {
                                console.log("摄像头初始化成功", t), this.cameraStatus = "对准二维码/条码自动识别", this.canRetry = !1, this.startScanAnimation()
                            },
                            startScanAnimation: function() {
                                this._animation = t.createAnimation({
                                    timingFunction: "linear"
                                }), this.loopAnimation()
                            },
                            loopAnimation: function() {
                                var e = this;
                                this.showCamera && (this._animation.translateY(0).opacity(0).step({
                                    duration: 0
                                }), this.animationData = this._animation.export(), setTimeout((function() {
                                    if (e.showCamera) {
                                        var n = t.upx2px(500);
                                        e._animation.translateY(n).opacity(.8).step({
                                            duration: 2500
                                        }), e.animationData = e._animation.export()
                                    }
                                }), 50), this._timer = setTimeout((function() {
                                    e.loopAnimation()
                                }), 2600))
                            },
                            onScanCode: function(t) {
                                var e = this;
                                if (this.scanFunctionIsUseable && "fail" !== this.scanState && "success" !== this.scanState && !this.showHistoryPopup) {
                                    this.autoResetTimer && (clearInterval(this.autoResetTimer), this.autoResetTimer = null), this.scanFunctionIsUseable = !1;
                                    var n = t.detail.result,
                                        a = t.detail.scanType || "QR_CODE";
                                    this.handleScanResult(n, a), setTimeout((function() {
                                        e.scanFunctionIsUseable = !0
                                    }), 1e3)
                                }
                            },
                            onCameraError: function(t) {
                                this.showHistoryPopup || (console.error("Camera Error:", t), this.showCamera = !1, this.canRetry = !0, t.detail && t.detail.errMsg && t.detail.errMsg.includes("auth") ? (this.needAuth = !0, this.errorMessage = "需要摄像头权限才能扫码") : this.errorMessage = "摄像头启动失败，请在真机上预览")
                            },
                            retryCamera: function() {
                                this.showCamera = !0, this.canRetry = !1, this.cameraStatus = "摄像头加载中...", this.checkCameraPermission()
                            },
                            openSetting: function() {
                                var e = this;
                                t.openSetting({
                                    success: function(n) {
                                        n.authSetting["scope.camera"] ? (e.needAuth = !1, e.showCamera = !0, e.cameraStatus = "摄像头加载中...") : t.showToast({
                                            title: "请开启摄像头权限",
                                            icon: "none"
                                        })
                                    }
                                })
                            },
                            handleScanResult: function(e, n) {
                                var i = this;
                                t.vibrateShort(), this.scanState = "verifying";
                                var s = t.getStorageSync("employeeToken");
                                if (!s) return this.currentResult = {
                                    code: e,
                                    type: "QR_CODE" === n ? "二维码" : "条形码",
                                    message: "未登录，请先登录"
                                }, this.scanState = "fail", t.vibrateLong(), void setTimeout((function() {
                                    a.default.goEmployeeLogin()
                                }), 500);
                                a.default.request({
                                    url: o.miniAppVerify,
                                    method: "POST",
                                    header: {
                                        "Content-Type": "application/json",
                                        Authorization: "Bearer " + s
                                    },
                                    data: {
                                        orderCode: e
                                    }
                                }).then((function(a) {
                                    var o = a.data;
                                    200 === o.code ? (i.currentResult = {
                                        code: e,
                                        type: "QR_CODE" === n ? "二维码" : "条形码",
                                        message: o.msg || "核验通过，允许放行",
                                        companionCount: o.data && o.data.companionCount ? o.data.companionCount : 0,
                                        companionInfo: o.data && o.data.companionInfo ? o.data.companionInfo : null,
                                        isReentry: o.data && o.data.isReentry || !1,
                                        reentryCount: o.data && o.data.reentryCount || 0,
                                        reentryRemaining: o.data && void 0 !== o.data.reentryRemaining ? o.data.reentryRemaining : -1,
                                        reentryLimit: o.data && o.data.reentryLimit || 0,
                                        isLastChance: o.data && o.data.isReentry && 1 === o.data.reentryRemaining,
                                        avatar: o.data && o.data.avatar || "",
                                        sortOrder: o.data && o.data.sortOrder || "",
                                        sessionNum: o.data && o.data.sessionNum || ""
                                    }, i.scanState = "success", i.saveToHistory(i.currentResult), i.audioContext && (i.audioContext.stop(), i.audioContext.seek(0), i.audioContext.play()), i.isContinuous ? (i.countdown = 2, i.autoResetTimer = setInterval((function() {
                                        i.countdown--, i.countdown <= 0 && i.resetScanState()
                                    }), 1e3)) : i.countdown = 0) : (i.currentResult = {
                                        code: o.code || "ERROR",
                                        type: "QR_CODE" === n ? "二维码" : "条形码",
                                        message: o.msg || "核验失败"
                                    }, i.scanState = "fail", i.saveToHistory(i.currentResult), t.vibrateLong())
                                })).catch((function(e) {
                                    e && 401 !== e.code && (i.currentResult = {
                                        code: "NETWORK_ERROR",
                                        type: "QR_CODE" === n ? "二维码" : "条形码",
                                        message: "网络连接失败，请检查网络后重试"
                                    }, i.scanState = "fail", i.saveToHistory(i.currentResult), t.vibrateLong())
                                }))
                            },
                            resetScanState: function() {
                                this.autoResetTimer && (clearInterval(this.autoResetTimer), this.autoResetTimer = null), this.countdown = 0, this.scanState = "idle", this.currentResult = null, this.scanFunctionIsUseable = !0
                            },
                            saveToHistory: function(e) {
                                var n = new Date,
                                    a = {
                                        scanTime: "".concat(n.getMonth() + 1, "/").concat(n.getDate(), " ").concat(String(n.getHours()).padStart(2, "0"), ":").concat(String(n.getMinutes()).padStart(2, "0"), ":").concat(String(n.getSeconds()).padStart(2, "0")),
                                        timestamp: n.getTime(),
                                        code: e.code || "",
                                        success: "success" === this.scanState,
                                        message: e.message || "",
                                        avatar: e.avatar || "",
                                        sessionNum: e.sessionNum || "",
                                        sortOrder: e.sortOrder || "",
                                        isReentry: e.isReentry || !1,
                                        reentryCount: e.reentryCount || 0,
                                        reentryRemaining: void 0 !== e.reentryRemaining ? e.reentryRemaining : -1,
                                        companionCount: e.companionCount || 0,
                                        companionInfo: e.companionInfo || null
                                    },
                                    o = t.getStorageSync("scanHistory") || [];
                                o.unshift(a), o = o.slice(0, 10), t.setStorageSync("scanHistory", o), this.historyRecords = o
                            },
                            openHistoryPopup: function() {
                                this.historyRecords = t.getStorageSync("scanHistory") || [], this.showHistoryPopup = !0
                            },
                            closeHistoryPopup: function() {
                                this.showHistoryPopup = !1
                            },
                            clearHistory: function() {
                                t.removeStorageSync("scanHistory"), this.historyRecords = []
                            },
                            formatTime: function(t) {
                                var e = t.getHours().toString().padStart(2, "0"),
                                    n = t.getMinutes().toString().padStart(2, "0"),
                                    a = t.getSeconds().toString().padStart(2, "0");
                                return "".concat(e, ":").concat(n, ":").concat(a)
                            }
                        }
                    }
                }).call(this, n("543d").default)
            },
            7929: function(t, e, n) {
                n.r(e);
                var a = n("4c00"),
                    o = n.n(a);
                for (var i in a)["default"].indexOf(i) < 0 && function(t) {
                    n.d(e, t, (function() {
                        return a[t]
                    }))
                }(i);
                e.default = o.a
            },
            "9e56": function(t, e, n) {},
            b2f3: function(t, e, n) {
                n.d(e, "b", (function() {
                    return a
                })), n.d(e, "c", (function() {
                    return o
                })), n.d(e, "a", (function() {}));
                var a = function() {
                        var t = this,
                            e = (t.$createElement, t._self._c, "idle" !== t.scanState && "verifying" !== t.scanState && "success" === t.scanState ? t.currentResult.companionCount > 0 && t.currentResult.companionInfo && t.currentResult.companionInfo.length > 0 : null),
                            n = "idle" !== t.scanState && "verifying" !== t.scanState && "success" === t.scanState && e ? t.currentResult.companionInfo.length : null,
                            a = "idle" !== t.scanState && "verifying" !== t.scanState && "success" === t.scanState && e && n > t.maxDisplayCompanions ? t.currentResult.companionInfo.length : null,
                            o = t.showHistoryPopup ? !t.historyRecords || 0 === t.historyRecords.length : null,
                            i = t.showHistoryPopup ? t.historyRecords && t.historyRecords.length > 0 : null;
                        t.$mp.data = Object.assign({}, {
                            $root: {
                                g0: e,
                                g1: n,
                                g2: a,
                                g3: o,
                                g4: i
                            }
                        })
                    },
                    o = []
            },
            fa2f: function(t, e, n) {
                var a = n("9e56");
                n.n(a).a
            }
        },
        [
            ["38be", "common/runtime", "common/vendor", "packageExternal/common/vendor"]
        ]
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packageExternal/modelEmployee/scancode/scancode.js'
});
require("packageExternal/modelEmployee/scancode/scancode.js");