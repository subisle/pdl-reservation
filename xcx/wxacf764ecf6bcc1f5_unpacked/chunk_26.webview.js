$gwx_XC_19 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_19 || [];

        function gz$gwx_XC_19_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_19_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_19_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_19_1 = [];
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
                                        [1, 'data-v-0c32e242']
                                    ],
                                    [1, 'vue-ref']
                                ],
                                [
                                    [2, '?:'],
                                    [
                                        [2, '&&'],
                                        [
                                            [2, '!'],
                                            [
                                                [7],
                                                [3, 'disable']
                                            ]
                                        ],
                                        [
                                            [7],
                                            [3, 'value']
                                        ]
                                    ],
                                    [1, 'on'],
                                    [1, '']
                                ]
                            ],
                            [
                                [2, '?:'],
                                [
                                    [7],
                                    [3, 'disable']
                                ],
                                [1, 'disable'],
                                [1, '']
                            ]
                        ],
                        [1, 'kv-switch']
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
                                                    [1, 'changeHandler']
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
                Z([3, 'kvSwitch'])
                Z([
                    [7],
                    [3, 'wrapperStyle']
                ])
                Z([3, 'kv-switch-ball data-v-0c32e242'])
                Z([
                    [2, '?:'],
                    [
                        [7],
                        [3, 'disable']
                    ],
                    [
                        [7],
                        [3, 'disableImg']
                    ],
                    [
                        [2, '?:'],
                        [
                            [7],
                            [3, 'value']
                        ],
                        [
                            [7],
                            [3, 'onImg']
                        ],
                        [
                            [7],
                            [3, 'normalImg']
                        ]
                    ]
                ])
                Z([
                    [7],
                    [3, 'ballStyle']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_19_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_19_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_19 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_19 = true;
        var x = ['./node-modules/@dmall/jimoui-mp/components/Switch/Switch.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_19_1()
            var eXS = _mz(z, 'view', ['bindtap', 0, 'class', 1, 'data-event-opts', 1, 'data-ref', 2, 'style', 3], [], e, s, gg)
            var bYS = _mz(z, 'image', ['alt', -1, 'class', 5, 'src', 1, 'style', 2], [], e, s, gg)
            _(eXS, bYS)
            _(r, eXS)
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
                g = "$gwx_XC_19";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_19();
if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/@dmall/jimoui-mp/components/Switch/Switch.wxml'] = [$gwx_XC_19, './node-modules/@dmall/jimoui-mp/components/Switch/Switch.wxml'];
else __wxAppCode__['node-modules/@dmall/jimoui-mp/components/Switch/Switch.wxml'] = $gwx_XC_19('./node-modules/@dmall/jimoui-mp/components/Switch/Switch.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['node-modules/@dmall/jimoui-mp/components/Switch/Switch.wxss'] = setCssToHead([".", [1], "kv-switch.", [1], "data-v-0c32e242{background-color:#fff;border:", [0, 3], " solid #e5e5e5;border-radius:", [0, 9999], ";box-sizing:border-box;height:", [0, 40], ";position:relative;transition:all .2s linear;width:", [0, 80], "}\n.", [1], "kv-switch \x3e .", [1], "kv-switch-ball.", [1], "data-v-0c32e242{background-color:#fff;border:", [0, 3], " solid #e5e5e5;border-radius:50%;display:inline-block;height:", [0, 22], ";position:absolute;right:calc(100% - ", [0, 30], ");top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);transition:all .2s linear;width:", [0, 22], "}\n.", [1], "kv-switch.", [1], "on.", [1], "data-v-0c32e242{background-color:#ff680a;border:none;height:", [0, 40], ";width:", [0, 80], "}\n.", [1], "kv-switch.", [1], "on \x3e .", [1], "kv-switch-ball.", [1], "data-v-0c32e242{background-color:#fff;border:none;border-radius:50%;content:\x22\x22;display:inline-block;height:", [0, 30], ";position:absolute;right:", [0, 8], ";top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:", [0, 30], "}\n.", [1], "kv-switch.", [1], "disable.", [1], "data-v-0c32e242{background-color:#f5f5f5}\n.", [1], "kv-switch.", [1], "disable \x3e .", [1], "kv-switch-ball.", [1], "data-v-0c32e242{background-color:#f5f5f5;display:block}\n", ], undefined, {
        path: "./node-modules/@dmall/jimoui-mp/components/Switch/Switch.wxss"
    });
}