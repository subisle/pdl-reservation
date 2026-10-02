$gwx18_XC_32 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx18_XC_32 || [];

        function gz$gwx18_XC_32_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx18_XC_32_1) return __WXML_GLOBAL__.ops_cached.$gwx18_XC_32_1
            __WXML_GLOBAL__.ops_cached.$gwx18_XC_32_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'uni-countdown data-v-439a2ad4'])
                Z([
                    [7],
                    [3, 'showDay']
                ])
                Z([3, 'uni-countdown__number data-v-439a2ad4'])
                Z([
                    [6],
                    [
                        [7],
                        [3, '$root']
                    ],
                    [3, 's0']
                ])
                Z([a, [
                    [7],
                    [3, 'd']
                ]])
                Z(z[1])
                Z([3, 'uni-countdown__splitor data-v-439a2ad4'])
                Z([
                    [6],
                    [
                        [7],
                        [3, '$root']
                    ],
                    [3, 's1']
                ])
                Z([a, [
                    [7],
                    [3, 'dayText']
                ]])
                Z([
                    [7],
                    [3, 'showHour']
                ])
                Z(z[2])
                Z([
                    [6],
                    [
                        [7],
                        [3, '$root']
                    ],
                    [3, 's2']
                ])
                Z([a, [
                    [7],
                    [3, 'h']
                ]])
                Z(z[9])
                Z(z[6])
                Z([
                    [6],
                    [
                        [7],
                        [3, '$root']
                    ],
                    [3, 's3']
                ])
                Z([a, [
                    [2, '?:'],
                    [
                        [7],
                        [3, 'showColon']
                    ],
                    [1, ':'],
                    [
                        [7],
                        [3, 'hourText']
                    ]
                ]])
                Z([
                    [7],
                    [3, 'showMinute']
                ])
                Z(z[2])
                Z([
                    [6],
                    [
                        [7],
                        [3, '$root']
                    ],
                    [3, 's4']
                ])
                Z([a, [
                    [7],
                    [3, 'i']
                ]])
                Z(z[17])
                Z(z[6])
                Z([
                    [6],
                    [
                        [7],
                        [3, '$root']
                    ],
                    [3, 's5']
                ])
                Z([a, [
                    [2, '?:'],
                    [
                        [7],
                        [3, 'showColon']
                    ],
                    [1, ':'],
                    [
                        [7],
                        [3, 'minuteText']
                    ]
                ]])
                Z(z[2])
                Z([
                    [6],
                    [
                        [7],
                        [3, '$root']
                    ],
                    [3, 's6']
                ])
                Z([a, [
                    [7],
                    [3, 's']
                ]])
                Z([
                    [2, '!'],
                    [
                        [7],
                        [3, 'showColon']
                    ]
                ])
                Z(z[6])
                Z([
                    [6],
                    [
                        [7],
                        [3, '$root']
                    ],
                    [3, 's7']
                ])
                Z([a, [
                    [7],
                    [3, 'secondText']
                ]])
            })(__WXML_GLOBAL__.ops_cached.$gwx18_XC_32_1);
            return __WXML_GLOBAL__.ops_cached.$gwx18_XC_32_1
        }
        __WXML_GLOBAL__.ops_set.$gwx18_XC_32 = z;
        __WXML_GLOBAL__.ops_init.$gwx18_XC_32 = true;
        var x = ['./packageExternal/uni_modules/uni-countdown/components/uni-countdown/uni-countdown.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx18_XC_32_1()
            var o4OC = _n('view')
            _rz(z, o4OC, 'class', 0, e, s, gg)
            var f5OC = _v()
            _(o4OC, f5OC)
            if (_oz(z, 1, e, s, gg)) {
                f5OC.wxVkey = 1
                var aBPC = _mz(z, 'text', ['class', 2, 'style', 1], [], e, s, gg)
                var tCPC = _oz(z, 4, e, s, gg)
                _(aBPC, tCPC)
                _(f5OC, aBPC)
            }
            var c6OC = _v()
            _(o4OC, c6OC)
            if (_oz(z, 5, e, s, gg)) {
                c6OC.wxVkey = 1
                var eDPC = _mz(z, 'text', ['class', 6, 'style', 1], [], e, s, gg)
                var bEPC = _oz(z, 8, e, s, gg)
                _(eDPC, bEPC)
                _(c6OC, eDPC)
            }
            var h7OC = _v()
            _(o4OC, h7OC)
            if (_oz(z, 9, e, s, gg)) {
                h7OC.wxVkey = 1
                var oFPC = _mz(z, 'text', ['class', 10, 'style', 1], [], e, s, gg)
                var xGPC = _oz(z, 12, e, s, gg)
                _(oFPC, xGPC)
                _(h7OC, oFPC)
            }
            var o8OC = _v()
            _(o4OC, o8OC)
            if (_oz(z, 13, e, s, gg)) {
                o8OC.wxVkey = 1
                var oHPC = _mz(z, 'text', ['class', 14, 'style', 1], [], e, s, gg)
                var fIPC = _oz(z, 16, e, s, gg)
                _(oHPC, fIPC)
                _(o8OC, oHPC)
            }
            var c9OC = _v()
            _(o4OC, c9OC)
            if (_oz(z, 17, e, s, gg)) {
                c9OC.wxVkey = 1
                var cJPC = _mz(z, 'text', ['class', 18, 'style', 1], [], e, s, gg)
                var hKPC = _oz(z, 20, e, s, gg)
                _(cJPC, hKPC)
                _(c9OC, cJPC)
            }
            var o0OC = _v()
            _(o4OC, o0OC)
            if (_oz(z, 21, e, s, gg)) {
                o0OC.wxVkey = 1
                var oLPC = _mz(z, 'text', ['class', 22, 'style', 1], [], e, s, gg)
                var cMPC = _oz(z, 24, e, s, gg)
                _(oLPC, cMPC)
                _(o0OC, oLPC)
            }
            var oNPC = _mz(z, 'text', ['class', 25, 'style', 1], [], e, s, gg)
            var lOPC = _oz(z, 27, e, s, gg)
            _(oNPC, lOPC)
            _(o4OC, oNPC)
            var lAPC = _v()
            _(o4OC, lAPC)
            if (_oz(z, 28, e, s, gg)) {
                lAPC.wxVkey = 1
                var aPPC = _mz(z, 'text', ['class', 29, 'style', 1], [], e, s, gg)
                var tQPC = _oz(z, 31, e, s, gg)
                _(aPPC, tQPC)
                _(lAPC, aPPC)
            }
            f5OC.wxXCkey = 1
            c6OC.wxXCkey = 1
            h7OC.wxXCkey = 1
            o8OC.wxXCkey = 1
            c9OC.wxXCkey = 1
            o0OC.wxXCkey = 1
            lAPC.wxXCkey = 1
            _(r, o4OC)
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
                g = "$gwx18_XC_32";
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
if (__vd_version_info__.delayedGwx || false) $gwx18_XC_32();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packageExternal/uni_modules/uni-countdown/components/uni-countdown/uni-countdown.wxml'] = [$gwx18_XC_32, './packageExternal/uni_modules/uni-countdown/components/uni-countdown/uni-countdown.wxml'];
else __wxAppCode__['packageExternal/uni_modules/uni-countdown/components/uni-countdown/uni-countdown.wxml'] = $gwx18_XC_32('./packageExternal/uni_modules/uni-countdown/components/uni-countdown/uni-countdown.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['packageExternal/uni_modules/uni-countdown/components/uni-countdown/uni-countdown.wxss'] = setCssToHead([".", [1], "uni-countdown.", [1], "data-v-439a2ad4{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:flex-start;justify-content:flex-start}\n.", [1], "uni-countdown__splitor.", [1], "data-v-439a2ad4{color:#333;font-size:14px;margin:0 2px}\n.", [1], "uni-countdown__number.", [1], "data-v-439a2ad4{border-radius:3px;font-size:14px;text-align:center}\n", ], undefined, {
        path: "./packageExternal/uni_modules/uni-countdown/components/uni-countdown/uni-countdown.wxss"
    });
}