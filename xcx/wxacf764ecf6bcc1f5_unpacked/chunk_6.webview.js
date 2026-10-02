$gwx_XC_41 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_41 || [];

        function gz$gwx_XC_41_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_41_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_41_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_41_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'showBadge']
                ])
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
                                    [1, 'data-v-082ac988']
                                ],
                                [
                                    [2, '?:'],
                                    [
                                        [2, '>'],
                                        [
                                            [7],
                                            [3, 'num']
                                        ],
                                        [1, 9]
                                    ],
                                    [1, 'long-badge'],
                                    [1, '']
                                ]
                            ],
                            [
                                [2, '?:'],
                                [
                                    [7],
                                    [3, 'needScale']
                                ],
                                [1, 'needScale'],
                                [1, '']
                            ]
                        ],
                        [
                            [2, '?:'],
                            [1, true],
                            [1, 'kv-badgeAnimation'],
                            [1, '']
                        ]
                    ]
                ])
                Z([
                    [2, '+'],
                    [
                        [2, '+'],
                        [1, 'background-color:'],
                        [
                            [7],
                            [3, 'bgColor']
                        ]
                    ],
                    [1, ';']
                ])
                Z([3, 'kv-badge-num data-v-082ac988'])
                Z([
                    [2, '+'],
                    [
                        [2, '+'],
                        [1, 'color:'],
                        [
                            [7],
                            [3, 'color']
                        ]
                    ],
                    [1, ';']
                ])
                Z([a, [
                    [7],
                    [3, 'formatBadgeNumber']
                ]])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_41_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_41_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_41 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_41 = true;
        var x = ['./node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_41_1()
            var bQLB = _v()
            _(r, bQLB)
            if (_oz(z, 0, e, s, gg)) {
                bQLB.wxVkey = 1
                var oRLB = _mz(z, 'view', ['class', 1, 'style', 1], [], e, s, gg)
                var xSLB = _mz(z, 'text', ['class', 3, 'style', 1], [], e, s, gg)
                var oTLB = _oz(z, 5, e, s, gg)
                _(xSLB, oTLB)
                _(oRLB, xSLB)
                _(bQLB, oRLB)
            }
            bQLB.wxXCkey = 1
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
                g = "$gwx_XC_41";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_41();
if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation.wxml'] = [$gwx_XC_41, './node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation.wxml'];
else __wxAppCode__['node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation.wxml'] = $gwx_XC_41('./node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation.wxss'] = setCssToHead([".", [1], "kv-badgeAnimation.", [1], "data-v-082ac988{-webkit-align-items:center;align-items:center;background:#f43000;border:", [0, 4], " solid #fff;border-radius:50%;border-radius:", [0, 9999], ";box-sizing:border-box;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;font-size:0;height:", [0, 56], ";-webkit-justify-content:center;justify-content:center;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:center;transform-origin:center;width:", [0, 56], "}\n.", [1], "kv-badgeAnimation.", [1], "needScale.", [1], "data-v-082ac988{animation:badgescale-data-v-082ac988 .3s ease-in-out forwards;-webkit-animation:badgescale-data-v-082ac988 .3s ease-in-out forwards}\n.", [1], "kv-badgeAnimation.", [1], "long-badge.", [1], "data-v-082ac988{width:", [0, 68], "}\n.", [1], "kv-badgeAnimation .", [1], "kv-badge-num.", [1], "data-v-082ac988{color:#fff;display:inline-block;font-size:", [0, 36], ";font-weight:700;margin-bottom:", [0, 2], "}\n@keyframes badgescale-data-v-082ac988{0%{-webkit-transform:scale(0);transform:scale(0)}\n50%{-webkit-transform:scale(.6);transform:scale(.6)}\n100%{-webkit-transform:scale(.5);transform:scale(.5)}\n}@-webkit-keyframes badgescale-data-v-082ac988{0%{-webkit-transform:scale(0);transform:scale(0)}\n50%{-webkit-transform:scale(.6);transform:scale(.6)}\n100%{-webkit-transform:scale(.5);transform:scale(.5)}\n}", ], undefined, {
        path: "./node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation.wxss"
    });
}