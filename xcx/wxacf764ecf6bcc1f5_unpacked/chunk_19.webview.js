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
                Z([3, 'text _span data-v-77b3eac4'])
                Z([
                    [7],
                    [3, 'styleFormat']
                ])
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
                Z([3, 'subText _p data-v-77b3eac4'])
                Z([3, '_span data-v-77b3eac4'])
                Z([
                    [7],
                    [3, 'subStyleFormat']
                ])
                Z([3, '_i data-v-77b3eac4'])
                Z([a, [
                    [7],
                    [3, 'subText']
                ]])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_11_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_11_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_11 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_11 = true;
        var x = ['./node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_11_1()
            var aRP = _mz(z, 'view', ['bindtap', 0, 'class', 1, 'data-event-opts', 1, 'data-ref', 2, 'id', 3], [], e, s, gg)
            var tSP = _n('view')
            _rz(z, tSP, 'class', 5, e, s, gg)
            var bUP = _mz(z, 'label', ['class', 6, 'style', 1], [], e, s, gg)
            var oVP = _n('slot')
            _(bUP, oVP)
            _(tSP, bUP)
            var eTP = _v()
            _(tSP, eTP)
            if (_oz(z, 8, e, s, gg)) {
                eTP.wxVkey = 1
                var xWP = _n('view')
                _rz(z, xWP, 'class', 9, e, s, gg)
                var oXP = _mz(z, 'label', ['class', 10, 'style', 1], [], e, s, gg)
                var fYP = _n('view')
                _rz(z, fYP, 'class', 12, e, s, gg)
                var cZP = _oz(z, 13, e, s, gg)
                _(fYP, cZP)
                _(oXP, fYP)
                _(xWP, oXP)
                _(eTP, xWP)
            }
            eTP.wxXCkey = 1
            _(aRP, tSP)
            _(r, aRP)
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
                g = "$gwx_XC_11";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_11();
if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem.wxml'] = [$gwx_XC_11, './node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem.wxml'];
else __wxAppCode__['node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem.wxml'] = $gwx_XC_11('./node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem.wxss'] = setCssToHead([".", [1], "kv-nav-bar-item.", [1], "data-v-77b3eac4{height:100%}\n.", [1], "kv-nav-bar-item.", [1], "data-v-77b3eac4:before{content:\x22\x22;display:inline-block;height:100%;vertical-align:middle}\n.", [1], "kv-nav-bar-item .", [1], "middle-fragment.", [1], "data-v-77b3eac4{display:inline-block;font-size:0;line-height:1;vertical-align:middle}\n.", [1], "kv-nav-bar-item .", [1], "text.", [1], "data-v-77b3eac4{color:#999;display:block;font-size:", [0, 32], ";text-align:center;transition:color .2s ease-in-out;vertical-align:middle}\n.", [1], "kv-nav-bar-item .", [1], "subText.", [1], "data-v-77b3eac4{font-size:0;margin-top:", [0, 4], ";text-align:center}\n.", [1], "kv-nav-bar-item .", [1], "subText.", [1], "data-v-77b3eac4:before{content:\x22\x22;display:inline-block;height:100%;vertical-align:middle}\n.", [1], "kv-nav-bar-item .", [1], "subText .", [1], "_span.", [1], "data-v-77b3eac4{border-radius:", [0, 9999], ";color:#666;display:inline-block;font-size:", [0, 22], ";padding:", [0, 2], " ", [0, 6], ";vertical-align:middle}\n.", [1], "kv-nav-bar-item .", [1], "subText .", [1], "_span .", [1], "_i.", [1], "data-v-77b3eac4{display:inline-block;-webkit-transform:scale(.91);transform:scale(.91);-webkit-transform-origin:50% 50%;transform-origin:50% 50%}\n.", [1], "kv-nav-bar-item.", [1], "active .", [1], "text.", [1], "data-v-77b3eac4{font-size:", [0, 32], ";font-weight:700}\n.", [1], "kv-nav-bar-item.", [1], "active .", [1], "subText .", [1], "_span.", [1], "data-v-77b3eac4{color:#fff}\n.", [1], "kv-nav-bar-item.", [1], "fixedMargin.", [1], "data-v-77b3eac4{display:inline-block;margin-left:", [0, 40], ";vertical-align:middle}\n.", [1], "kv-nav-bar-item.", [1], "has-sub.", [1], "active .", [1], "text.", [1], "data-v-77b3eac4{font-size:", [0, 32], "}\n", ], undefined, {
        path: "./node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem.wxss"
    });
}