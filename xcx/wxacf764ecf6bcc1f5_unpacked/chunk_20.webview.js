$gwx_XC_13 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_13 || [];

        function gz$gwx_XC_13_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_13_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_13_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_13_1 = [];
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
                                [1, 'data-v-49fc548c']
                            ],
                            [1, 'vue-ref']
                        ],
                        [1, 'kv-nav-bar-list']
                    ]
                ])
                Z([3, 'navBarList'])
                Z([3, 'kvNavBarList'])
                Z([
                    [7],
                    [3, 'positionFormat']
                ])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'type']
                    ],
                    [1, 'flex']
                ])
                Z([
                    [4],
                    [
                        [5],
                        [
                            [5],
                            [
                                [5],
                                [1, 'kv-nav-bar-container']
                            ],
                            [1, 'data-v-49fc548c']
                        ],
                        [
                            [7],
                            [3, 'classFormat']
                        ]
                    ]
                ])
                Z([1, true])
                Z([3, 'kvNavBarContainer'])
                Z(z[6])
                Z([
                    [7],
                    [3, 'styleFormat']
                ])
                Z([
                    [7],
                    [3, 'show']
                ])
                Z([
                    [2, '&&'],
                    [
                        [2, '!'],
                        [
                            [7],
                            [3, 'hasSubText']
                        ]
                    ],
                    [
                        [2, '!'],
                        [
                            [7],
                            [3, 'hideActiveLine']
                        ]
                    ]
                ])
                Z([3, 'bottom-line data-v-49fc548c'])
                Z([
                    [2, '!'],
                    [
                        [7],
                        [3, 'bottomLineStyle']
                    ]
                ])
                Z([
                    [7],
                    [3, 'bottomLineStyle']
                ])
                Z(z[5])
                Z(z[6])
                Z(z[7])
                Z(z[6])
                Z(z[9])
                Z(z[10])
                Z(z[11])
                Z(z[12])
                Z(z[13])
                Z(z[14])
                Z([
                    [2, '==='],
                    [
                        [7],
                        [3, 'position']
                    ],
                    [1, 'sticky']
                ])
                Z([3, 'kv-nav-bar-placeholder data-v-49fc548c'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_13_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_13_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_13 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_13 = true;
        var x = ['./node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_13_1()
            var oNQ = _mz(z, 'view', ['class', 0, 'data-ref', 1, 'id', 1, 'style', 2], [], e, s, gg)
            var xOQ = _v()
            _(oNQ, xOQ)
            if (_oz(z, 4, e, s, gg)) {
                xOQ.wxVkey = 1
                var fQQ = _mz(z, 'view', ['class', 5, 'enableFlex', 1, 'id', 2, 'scrollX', 3, 'style', 4], [], e, s, gg)
                var cRQ = _v()
                _(fQQ, cRQ)
                if (_oz(z, 10, e, s, gg)) {
                    cRQ.wxVkey = 1
                    var oTQ = _n('slot')
                    _(cRQ, oTQ)
                }
                var hSQ = _v()
                _(fQQ, hSQ)
                if (_oz(z, 11, e, s, gg)) {
                    hSQ.wxVkey = 1
                    var cUQ = _mz(z, 'view', ['class', 12, 'hidden', 1, 'style', 2], [], e, s, gg)
                    _(hSQ, cUQ)
                }
                cRQ.wxXCkey = 1
                hSQ.wxXCkey = 1
                _(xOQ, fQQ)
            } else {
                xOQ.wxVkey = 2
                var oVQ = _mz(z, 'scroll-view', ['class', 15, 'enableFlex', 1, 'id', 2, 'scrollX', 3, 'style', 4], [], e, s, gg)
                var lWQ = _v()
                _(oVQ, lWQ)
                if (_oz(z, 20, e, s, gg)) {
                    lWQ.wxVkey = 1
                    var tYQ = _n('slot')
                    _(lWQ, tYQ)
                }
                var aXQ = _v()
                _(oVQ, aXQ)
                if (_oz(z, 21, e, s, gg)) {
                    aXQ.wxVkey = 1
                    var eZQ = _mz(z, 'view', ['class', 22, 'hidden', 1, 'style', 2], [], e, s, gg)
                    _(aXQ, eZQ)
                }
                lWQ.wxXCkey = 1
                aXQ.wxXCkey = 1
                _(xOQ, oVQ)
            }
            var oPQ = _v()
            _(oNQ, oPQ)
            if (_oz(z, 25, e, s, gg)) {
                oPQ.wxVkey = 1
                var b1Q = _n('view')
                _rz(z, b1Q, 'class', 26, e, s, gg)
                _(oPQ, b1Q)
            }
            xOQ.wxXCkey = 1
            oPQ.wxXCkey = 1
            _(r, oNQ)
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
                g = "$gwx_XC_13";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_13();
if (__vd_version_info__.delayedGwx) __wxAppCode__['node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList.wxml'] = [$gwx_XC_13, './node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList.wxml'];
else __wxAppCode__['node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList.wxml'] = $gwx_XC_13('./node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList.wxss'] = setCssToHead([".", [1], "kv-nav-bar-list.", [1], "data-v-49fc548c{height:", [0, 88], ";width:100%;z-index:5}\n.", [1], "kv-nav-bar-list .", [1], "kv-nav-bar-container.", [1], "data-v-49fc548c{background-color:#fff;font-size:0;height:100%;position:relative;white-space:nowrap;width:100%}\n.", [1], "kv-nav-bar-list .", [1], "kv-nav-bar-container.", [1], "data-v-49fc548c::-webkit-scrollbar{display:none}\n.", [1], "kv-nav-bar-list .", [1], "kv-nav-bar-container.", [1], "horizontal.", [1], "data-v-49fc548c{background-color:#fff;width:100%}\n.", [1], "kv-nav-bar-list .", [1], "kv-nav-bar-container.", [1], "flex.", [1], "data-v-49fc548c{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-justify-content:space-around;justify-content:space-around}\n.", [1], "kv-nav-bar-list .", [1], "kv-nav-bar-container.", [1], "sub-nav-bar.", [1], "data-v-49fc548c{height:", [0, 100], "}\n.", [1], "kv-nav-bar-list .", [1], "kv-nav-bar-placeholder.", [1], "data-v-49fc548c{height:100%;width:100%}\n.", [1], "bottom-line.", [1], "data-v-49fc548c{border-radius:", [0, 4], ";height:", [0, 6], ";left:0;position:absolute;top:", [0, 80], ";transition:all .2s ease-in-out}\n", ], undefined, {
        path: "./node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList.wxss"
    });
}