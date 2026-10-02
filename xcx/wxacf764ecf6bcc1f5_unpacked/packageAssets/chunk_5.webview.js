$gwx15_XC_30 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx15_XC_30 || [];

        function gz$gwx15_XC_30_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx15_XC_30_1) return __WXML_GLOBAL__.ops_cached.$gwx15_XC_30_1
            __WXML_GLOBAL__.ops_cached.$gwx15_XC_30_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'usage-rules data-v-9f6e6266'])
                Z([3, '__e'])
                Z([3, 'data-v-9f6e6266'])
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
                                                    [1, 'showModal']
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
                Z([3, '使用规则'])
                Z([
                    [7],
                    [3, 'rulesTipShow']
                ])
                Z([3, 'usage-rules-tip data-v-9f6e6266'])
                Z([3, '遇到问题，点击这里查看相关使用规则哦~'])
            })(__WXML_GLOBAL__.ops_cached.$gwx15_XC_30_1);
            return __WXML_GLOBAL__.ops_cached.$gwx15_XC_30_1
        }
        __WXML_GLOBAL__.ops_set.$gwx15_XC_30 = z;
        __WXML_GLOBAL__.ops_init.$gwx15_XC_30 = true;
        var x = ['./packageAssets/coupon/components/UsageRules/UsageRules.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx15_XC_30_1()
            var oPPB = _n('view')
            _rz(z, oPPB, 'class', 0, e, s, gg)
            var cRPB = _mz(z, 'text', ['bindtap', 1, 'class', 1, 'data-event-opts', 2], [], e, s, gg)
            var hSPB = _oz(z, 4, e, s, gg)
            _(cRPB, hSPB)
            _(oPPB, cRPB)
            var fQPB = _v()
            _(oPPB, fQPB)
            if (_oz(z, 5, e, s, gg)) {
                fQPB.wxVkey = 1
                var oTPB = _n('view')
                _rz(z, oTPB, 'class', 6, e, s, gg)
                var cUPB = _oz(z, 7, e, s, gg)
                _(oTPB, cUPB)
                _(fQPB, oTPB)
            }
            fQPB.wxXCkey = 1
            _(r, oPPB)
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
                g = "$gwx15_XC_30";
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
if (__vd_version_info__.delayedGwx || false) $gwx15_XC_30();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packageAssets/coupon/components/UsageRules/UsageRules.wxml'] = [$gwx15_XC_30, './packageAssets/coupon/components/UsageRules/UsageRules.wxml'];
else __wxAppCode__['packageAssets/coupon/components/UsageRules/UsageRules.wxml'] = $gwx15_XC_30('./packageAssets/coupon/components/UsageRules/UsageRules.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['packageAssets/coupon/components/UsageRules/UsageRules.wxss'] = setCssToHead([".", [1], "usage-rules.", [1], "data-v-9f6e6266{height:", [0, 72], ";position:relative}\n.", [1], "usage-rules wx-text.", [1], "data-v-9f6e6266{color:#999;float:right;font-size:", [0, 26], ";line-height:", [0, 72], ";padding-right:", [0, 20], "}\n.", [1], "usage-rules wx-view.", [1], "data-v-9f6e6266{background:rgba(0,0,0,.5);border-radius:", [0, 20], ";bottom:", [0, -20], ";color:#fff;height:", [0, 40], ";left:auto;line-height:", [0, 40], ";padding:0 ", [0, 14], ";position:absolute;right:", [0, 19], ";text-align:center;top:auto;z-index:8}\n.", [1], "usage-rules wx-view.", [1], "data-v-9f6e6266::before{border:", [0, 7], " solid transparent;border-bottom-color:rgba(0,0,0,.5);bottom:auto;content:\x22\x22;left:auto;position:absolute;right:", [0, 45], ";top:", [0, -12], ";z-index:8}\n", ], "Some selectors are not allowed in component wxss, including tag name selectors, ID selectors, and attribute selectors.(./packageAssets/coupon/components/UsageRules/UsageRules.wxss:1:414)", {
        path: "./packageAssets/coupon/components/UsageRules/UsageRules.wxss"
    });
}