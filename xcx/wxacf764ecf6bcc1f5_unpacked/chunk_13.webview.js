$gwx_XC_5 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_5 || [];

        function gz$gwx_XC_5_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1 = [];
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
                            [1, 'data-v-1e0ab034']
                        ],
                        [
                            [2, '?:'],
                            [
                                [7],
                                [3, 'isMask']
                            ],
                            [1, 'CustomLoading mask'],
                            [1, 'CustomLoading']
                        ]
                    ]
                ])
                Z([
                    [4],
                    [
                        [5],
                        [
                            [5],
                            [1, 'data-v-1e0ab034']
                        ],
                        [
                            [2, '?:'],
                            [
                                [2, '||'],
                                [
                                    [7],
                                    [3, 'isTemplate']
                                ],
                                [
                                    [7],
                                    [3, 'isTemplateFlag']
                                ]
                            ],
                            [1, 'templateLoadingImg'],
                            [1, 'loadingImg']
                        ]
                    ]
                ])
                Z([
                    [2, '+'],
                    [
                        [2, '+'],
                        [1, 'transform:'],
                        [
                            [2, '+'],
                            [
                                [2, '+'],
                                [1, 'translate(-50%,-50%) scale('],
                                [
                                    [7],
                                    [3, 'scale']
                                ]
                            ],
                            [1, ')']
                        ]
                    ],
                    [1, ';']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_5_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_5_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_5 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_5 = true;
        var x = ['./node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_5_1()
            var lSN = _n('view')
            _rz(z, lSN, 'class', 0, e, s, gg)
            var aTN = _mz(z, 'view', ['class', 1, 'style', 1], [], e, s, gg)
            _(lSN, aTN)
            _(r, lSN)
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
                g = "$gwx_XC_5";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_5();
if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading.wxml'] = [$gwx_XC_5, './node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading.wxml'];
else __wxAppCode__['node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading.wxml'] = $gwx_XC_5('./node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading.wxss'] = setCssToHead([".", [1], "CustomLoading.", [1], "data-v-1e0ab034{height:100%;left:0;position:fixed;top:0;width:100%;z-index:200}\n.", [1], "CustomLoading.", [1], "mask.", [1], "data-v-1e0ab034{background:rgba(0,0,0,.3)}\n.", [1], "CustomLoading .", [1], "loadingImg.", [1], "data-v-1e0ab034{-webkit-animation:globalLoading-data-v-1e0ab034 .9s steps(25) infinite;animation:globalLoading-data-v-1e0ab034 .9s steps(25) infinite;background-image:url(https://img.dmallcdn.com//dshop/201903/40208262-8001-4c19-ad20-370a039ed243)}\n.", [1], "CustomLoading .", [1], "loadingImg.", [1], "data-v-1e0ab034,.", [1], "CustomLoading .", [1], "templateLoadingImg.", [1], "data-v-1e0ab034{background-position:0 0;background-repeat:no-repeat;background-size:auto 140px;height:140px;left:50%;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%) scale(.25);transform:translate(-50%,-50%) scale(.25);width:140px;z-index:1004}\n.", [1], "CustomLoading .", [1], "templateLoadingImg.", [1], "data-v-1e0ab034{-webkit-animation:templateLoading-data-v-1e0ab034 .9s steps(22) infinite;animation:templateLoading-data-v-1e0ab034 .9s steps(22) infinite;background-image:url(https://img.dmallcdn.com/dshop/202203/8170ec25-ab26-4594-af04-6039696dfc37)}\n@-webkit-keyframes globalLoading-data-v-1e0ab034{100%{background-position:-3500px 0}\n}@keyframes globalLoading-data-v-1e0ab034{100%{background-position:-3500px 0}\n}@-webkit-keyframes templateLoading-data-v-1e0ab034{100%{background-position:-3080px 0}\n}@keyframes templateLoading-data-v-1e0ab034{100%{background-position:-3080px 0}\n}", ], undefined, {
        path: "./node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading.wxss"
    });
}