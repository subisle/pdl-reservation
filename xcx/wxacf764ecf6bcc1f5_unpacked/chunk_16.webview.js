$gwx_XC_8 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_8 || [];

        function gz$gwx_XC_8_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_8_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'kv-footerView data-v-2b34c0d2'])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'type']
                    ],
                    [1, 'text']
                ])
                Z([3, 'base-footerView data-v-2b34c0d2'])
                Z([3, 'footerText data-v-2b34c0d2'])
                Z([
                    [2, '+'],
                    [
                        [2, '+'],
                        [1, 'color:'],
                        [
                            [7],
                            [3, 'footerTextColor']
                        ]
                    ],
                    [1, ';']
                ])
                Z([a, [
                    [7],
                    [3, 'footerText']
                ]])
                Z([
                    [7],
                    [3, 'clickText']
                ])
                Z([3, '__e'])
                Z([3, 'clickText data-v-2b34c0d2'])
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
                                                    [1, 'clickEvent']
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
                        [1, 'color:'],
                        [
                            [7],
                            [3, 'clickTextColor']
                        ]
                    ],
                    [1, ';']
                ])
                Z([a, [
                    [2, '+'],
                    [
                        [7],
                        [3, 'clickText']
                    ],
                    [1, '']
                ]])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'type']
                    ],
                    [1, 'img']
                ])
                Z([3, 'footerImg data-v-2b34c0d2'])
                Z([
                    [2, '?:'],
                    [
                        [7],
                        [3, 'footerImg']
                    ],
                    [
                        [7],
                        [3, 'footerImg']
                    ],
                    [
                        [2, '?:'],
                        [
                            [2, '==='],
                            [
                                [7],
                                [3, 'imgType']
                            ],
                            [1, 'default']
                        ],
                        [
                            [7],
                            [3, 'grayImg']
                        ],
                        [
                            [7],
                            [3, 'colorImg']
                        ]
                    ]
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_8_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_8 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_8 = true;
        var x = ['./node-modules/@dmall/jimoui-mp/components/FooterView/FooterView.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_8_1()
            var c8O = _n('view')
            _rz(z, c8O, 'class', 0, e, s, gg)
            var h9O = _v()
            _(c8O, h9O)
            if (_oz(z, 1, e, s, gg)) {
                h9O.wxVkey = 1
                var o0O = _n('view')
                _rz(z, o0O, 'class', 2, e, s, gg)
                var oBP = _mz(z, 'text', ['class', 3, 'style', 1], [], e, s, gg)
                var lCP = _oz(z, 5, e, s, gg)
                _(oBP, lCP)
                _(o0O, oBP)
                var cAP = _v()
                _(o0O, cAP)
                if (_oz(z, 6, e, s, gg)) {
                    cAP.wxVkey = 1
                    var aDP = _mz(z, 'text', ['bindtap', 7, 'class', 1, 'data-event-opts', 2, 'style', 3], [], e, s, gg)
                    var tEP = _oz(z, 11, e, s, gg)
                    _(aDP, tEP)
                    _(cAP, aDP)
                }
                cAP.wxXCkey = 1
                _(h9O, o0O)
            } else {
                h9O.wxVkey = 2
                var eFP = _v()
                _(h9O, eFP)
                if (_oz(z, 12, e, s, gg)) {
                    eFP.wxVkey = 1
                    var bGP = _mz(z, 'image', ['alt', -1, 'class', 13, 'src', 1], [], e, s, gg)
                    _(eFP, bGP)
                }
                eFP.wxXCkey = 1
            }
            h9O.wxXCkey = 1
            _(r, c8O)
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
                g = "$gwx_XC_8";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_8();
if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/@dmall/jimoui-mp/components/FooterView/FooterView.wxml'] = [$gwx_XC_8, './node-modules/@dmall/jimoui-mp/components/FooterView/FooterView.wxml'];
else __wxAppCode__['node-modules/@dmall/jimoui-mp/components/FooterView/FooterView.wxml'] = $gwx_XC_8('./node-modules/@dmall/jimoui-mp/components/FooterView/FooterView.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['node-modules/@dmall/jimoui-mp/components/FooterView/FooterView.wxss'] = setCssToHead([".", [1], "kv-footerView.", [1], "data-v-2b34c0d2{overflow:hidden;text-align:center}\n.", [1], "kv-footerView .", [1], "base-footerView.", [1], "data-v-2b34c0d2{-webkit-align-items:center;align-items:center;box-sizing:border-box;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;font-size:", [0, 26], ";height:", [0, 144], ";-webkit-justify-content:center;justify-content:center;padding:0 ", [0, 80], ";width:100%}\n.", [1], "kv-footerView .", [1], "base-footerView .", [1], "clickText.", [1], "data-v-2b34c0d2{line-height:", [0, 80], ";margin-left:", [0, 45], "}\n.", [1], "kv-footerView .", [1], "footerImg.", [1], "data-v-2b34c0d2{height:", [0, 144], ";width:", [0, 750], "}\n", ], undefined, {
        path: "./node-modules/@dmall/jimoui-mp/components/FooterView/FooterView.wxss"
    });
}