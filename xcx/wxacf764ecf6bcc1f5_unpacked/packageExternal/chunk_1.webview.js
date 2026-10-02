$gwx18_XC_1 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx18_XC_1 || [];

        function gz$gwx18_XC_1_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx18_XC_1_1) return __WXML_GLOBAL__.ops_cached.$gwx18_XC_1_1
            __WXML_GLOBAL__.ops_cached.$gwx18_XC_1_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'uni-countdown data-v-ddb56868'])
                Z([
                    [7],
                    [3, 'showDay']
                ])
                Z([3, 'uni-countdown__number data-v-ddb56868'])
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
                Z([3, 'uni-countdown__splitor data-v-ddb56868'])
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
            })(__WXML_GLOBAL__.ops_cached.$gwx18_XC_1_1);
            return __WXML_GLOBAL__.ops_cached.$gwx18_XC_1_1
        }
        __WXML_GLOBAL__.ops_set.$gwx18_XC_1 = z;
        __WXML_GLOBAL__.ops_init.$gwx18_XC_1 = true;
        var x = ['./packageExternal/components/countdown-sync/countdown-sync.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx18_XC_1_1()
            var cF = _n('view')
            _rz(z, cF, 'class', 0, e, s, gg)
            var hG = _v()
            _(cF, hG)
            if (_oz(z, 1, e, s, gg)) {
                hG.wxVkey = 1
                var eN = _mz(z, 'text', ['class', 2, 'style', 1], [], e, s, gg)
                var bO = _oz(z, 4, e, s, gg)
                _(eN, bO)
                _(hG, eN)
            }
            var oH = _v()
            _(cF, oH)
            if (_oz(z, 5, e, s, gg)) {
                oH.wxVkey = 1
                var oP = _mz(z, 'text', ['class', 6, 'style', 1], [], e, s, gg)
                var xQ = _oz(z, 8, e, s, gg)
                _(oP, xQ)
                _(oH, oP)
            }
            var cI = _v()
            _(cF, cI)
            if (_oz(z, 9, e, s, gg)) {
                cI.wxVkey = 1
                var oR = _mz(z, 'text', ['class', 10, 'style', 1], [], e, s, gg)
                var fS = _oz(z, 12, e, s, gg)
                _(oR, fS)
                _(cI, oR)
            }
            var oJ = _v()
            _(cF, oJ)
            if (_oz(z, 13, e, s, gg)) {
                oJ.wxVkey = 1
                var cT = _mz(z, 'text', ['class', 14, 'style', 1], [], e, s, gg)
                var hU = _oz(z, 16, e, s, gg)
                _(cT, hU)
                _(oJ, cT)
            }
            var lK = _v()
            _(cF, lK)
            if (_oz(z, 17, e, s, gg)) {
                lK.wxVkey = 1
                var oV = _mz(z, 'text', ['class', 18, 'style', 1], [], e, s, gg)
                var cW = _oz(z, 20, e, s, gg)
                _(oV, cW)
                _(lK, oV)
            }
            var aL = _v()
            _(cF, aL)
            if (_oz(z, 21, e, s, gg)) {
                aL.wxVkey = 1
                var oX = _mz(z, 'text', ['class', 22, 'style', 1], [], e, s, gg)
                var lY = _oz(z, 24, e, s, gg)
                _(oX, lY)
                _(aL, oX)
            }
            var aZ = _mz(z, 'text', ['class', 25, 'style', 1], [], e, s, gg)
            var t1 = _oz(z, 27, e, s, gg)
            _(aZ, t1)
            _(cF, aZ)
            var tM = _v()
            _(cF, tM)
            if (_oz(z, 28, e, s, gg)) {
                tM.wxVkey = 1
                var e2 = _mz(z, 'text', ['class', 29, 'style', 1], [], e, s, gg)
                var b3 = _oz(z, 31, e, s, gg)
                _(e2, b3)
                _(tM, e2)
            }
            hG.wxXCkey = 1
            oH.wxXCkey = 1
            cI.wxXCkey = 1
            oJ.wxXCkey = 1
            lK.wxXCkey = 1
            aL.wxXCkey = 1
            tM.wxXCkey = 1
            _(r, cF)
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
                g = "$gwx18_XC_1";
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
if (__vd_version_info__.delayedGwx || false) $gwx18_XC_1();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packageExternal/components/countdown-sync/countdown-sync.wxml'] = [$gwx18_XC_1, './packageExternal/components/countdown-sync/countdown-sync.wxml'];
else __wxAppCode__['packageExternal/components/countdown-sync/countdown-sync.wxml'] = $gwx18_XC_1('./packageExternal/components/countdown-sync/countdown-sync.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['packageExternal/components/countdown-sync/countdown-sync.wxss'] = setCssToHead([".", [1], "uni-countdown.", [1], "data-v-ddb56868{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:flex-start;justify-content:flex-start}\n.", [1], "uni-countdown__splitor.", [1], "data-v-ddb56868{color:#333;font-size:14px;margin:0 2px}\n.", [1], "uni-countdown__number.", [1], "data-v-ddb56868{border-radius:3px;font-size:14px;text-align:center}\n", ], undefined, {
        path: "./packageExternal/components/countdown-sync/countdown-sync.wxss"
    });
}