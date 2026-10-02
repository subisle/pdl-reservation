$gwx_XC_37 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx_XC_37 || [];

        function gz$gwx_XC_37_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_XC_37_1) return __WXML_GLOBAL__.ops_cached.$gwx_XC_37_1
            __WXML_GLOBAL__.ops_cached.$gwx_XC_37_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, '__l'])
                Z([3, 'data-v-1bb180ad'])
                Z([1, true])
                Z([3, '07fe69c0-1'])
                Z([
                    [4],
                    [
                        [5],
                        [1, 'default']
                    ]
                ])
                Z([3, 'picker-demo-page data-v-1bb180ad'])
                Z([3, 'picker-demo-card data-v-1bb180ad'])
                Z([3, 'picker-demo-title data-v-1bb180ad'])
                Z([3, 'pickerDemo'])
                Z([3, 'picker-demo-row data-v-1bb180ad'])
                Z([3, 'picker-demo-label data-v-1bb180ad'])
                Z([3, '模拟时间戳'])
                Z([3, 'picker-demo-value data-v-1bb180ad'])
                Z([a, [
                    [7],
                    [3, 'sourceTimestamp']
                ]])
                Z(z[9])
                Z(z[10])
                Z([3, '本地解析日期'])
                Z(z[12])
                Z([a, [
                    [7],
                    [3, 'sourceLocalDate']
                ]])
                Z(z[9])
                Z(z[10])
                Z([3, 'UTC 日期'])
                Z(z[12])
                Z([a, [
                    [7],
                    [3, 'sourceUtcDate']
                ]])
                Z(z[9])
                Z(z[10])
                Z([3, '当前时区偏移'])
                Z(z[12])
                Z([a, [
                    [7],
                    [3, 'timezoneOffsetText']
                ]])
                Z([3, '__e'])
                Z(z[1])
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
                                    [1, 'change']
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
                                                    [1, 'onPickerChange']
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
                    [7],
                    [3, 'endDate']
                ])
                Z([3, 'date'])
                Z([
                    [7],
                    [3, 'startDate']
                ])
                Z([
                    [7],
                    [3, 'pickerValue']
                ])
                Z([3, 'picker-demo-picker data-v-1bb180ad'])
                Z(z[10])
                Z([3, '选择日期'])
                Z([3, 'picker-demo-picker-value data-v-1bb180ad'])
                Z(z[1])
                Z([a, [
                    [2, '||'],
                    [
                        [7],
                        [3, 'pickerValue']
                    ],
                    [1, '请选择日期']
                ]])
                Z([3, 'picker-demo-arrow data-v-1bb180ad'])
                Z([3, '›'])
                Z(z[9])
                Z(z[10])
                Z([3, '选中日期'])
                Z(z[12])
                Z([a, [
                    [2, '||'],
                    [
                        [7],
                        [3, 'pickedDate']
                    ],
                    [1, '暂无']
                ]])
                Z(z[9])
                Z(z[10])
                Z([3, '转回时间戳'])
                Z(z[12])
                Z([a, [
                    [2, '||'],
                    [
                        [7],
                        [3, 'pickedTimestamp']
                    ],
                    [1, '暂无']
                ]])
                Z([3, 'picker-demo-actions data-v-1bb180ad'])
                Z(z[29])
                Z([3, 'picker-demo-button data-v-1bb180ad'])
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
                                                    [1, 'resetDemo']
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
                Z([3, 'true'])
                Z([3, 'primary'])
                Z([3, '重置'])
                Z([3, 'picker-demo-note data-v-1bb180ad'])
                Z([3, '模拟时间戳固定为 1785513600000。切换设备或模拟器时区后重新进入页面，再观察本地解析日期和转回时间戳。'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_XC_37_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_XC_37_1
        }
        __WXML_GLOBAL__.ops_set.$gwx_XC_37 = z;
        __WXML_GLOBAL__.ops_init.$gwx_XC_37 = true;
        var x = ['./pages/pickerDemo/pickerDemo.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_XC_37_1()
            var t5JB = _mz(z, 'page-view', ['bind:__l', 0, 'class', 1, 'disableSpec', 1, 'vueId', 2, 'vueSlots', 3], [], e, s, gg)
            var e6JB = _n('view')
            _rz(z, e6JB, 'class', 5, e, s, gg)
            var b7JB = _n('view')
            _rz(z, b7JB, 'class', 6, e, s, gg)
            var o8JB = _n('view')
            _rz(z, o8JB, 'class', 7, e, s, gg)
            var x9JB = _oz(z, 8, e, s, gg)
            _(o8JB, x9JB)
            _(b7JB, o8JB)
            var o0JB = _n('view')
            _rz(z, o0JB, 'class', 9, e, s, gg)
            var fAKB = _n('text')
            _rz(z, fAKB, 'class', 10, e, s, gg)
            var cBKB = _oz(z, 11, e, s, gg)
            _(fAKB, cBKB)
            _(o0JB, fAKB)
            var hCKB = _n('text')
            _rz(z, hCKB, 'class', 12, e, s, gg)
            var oDKB = _oz(z, 13, e, s, gg)
            _(hCKB, oDKB)
            _(o0JB, hCKB)
            _(b7JB, o0JB)
            var cEKB = _n('view')
            _rz(z, cEKB, 'class', 14, e, s, gg)
            var oFKB = _n('text')
            _rz(z, oFKB, 'class', 15, e, s, gg)
            var lGKB = _oz(z, 16, e, s, gg)
            _(oFKB, lGKB)
            _(cEKB, oFKB)
            var aHKB = _n('text')
            _rz(z, aHKB, 'class', 17, e, s, gg)
            var tIKB = _oz(z, 18, e, s, gg)
            _(aHKB, tIKB)
            _(cEKB, aHKB)
            _(b7JB, cEKB)
            var eJKB = _n('view')
            _rz(z, eJKB, 'class', 19, e, s, gg)
            var bKKB = _n('text')
            _rz(z, bKKB, 'class', 20, e, s, gg)
            var oLKB = _oz(z, 21, e, s, gg)
            _(bKKB, oLKB)
            _(eJKB, bKKB)
            var xMKB = _n('text')
            _rz(z, xMKB, 'class', 22, e, s, gg)
            var oNKB = _oz(z, 23, e, s, gg)
            _(xMKB, oNKB)
            _(eJKB, xMKB)
            _(b7JB, eJKB)
            var fOKB = _n('view')
            _rz(z, fOKB, 'class', 24, e, s, gg)
            var cPKB = _n('text')
            _rz(z, cPKB, 'class', 25, e, s, gg)
            var hQKB = _oz(z, 26, e, s, gg)
            _(cPKB, hQKB)
            _(fOKB, cPKB)
            var oRKB = _n('text')
            _rz(z, oRKB, 'class', 27, e, s, gg)
            var cSKB = _oz(z, 28, e, s, gg)
            _(oRKB, cSKB)
            _(fOKB, oRKB)
            _(b7JB, fOKB)
            var oTKB = _mz(z, 'picker', ['bindchange', 29, 'class', 1, 'data-event-opts', 2, 'end', 3, 'mode', 4, 'start', 5, 'value', 6], [], e, s, gg)
            var lUKB = _n('view')
            _rz(z, lUKB, 'class', 36, e, s, gg)
            var aVKB = _n('text')
            _rz(z, aVKB, 'class', 37, e, s, gg)
            var tWKB = _oz(z, 38, e, s, gg)
            _(aVKB, tWKB)
            _(lUKB, aVKB)
            var eXKB = _n('view')
            _rz(z, eXKB, 'class', 39, e, s, gg)
            var bYKB = _n('text')
            _rz(z, bYKB, 'class', 40, e, s, gg)
            var oZKB = _oz(z, 41, e, s, gg)
            _(bYKB, oZKB)
            _(eXKB, bYKB)
            var x1KB = _n('text')
            _rz(z, x1KB, 'class', 42, e, s, gg)
            var o2KB = _oz(z, 43, e, s, gg)
            _(x1KB, o2KB)
            _(eXKB, x1KB)
            _(lUKB, eXKB)
            _(oTKB, lUKB)
            _(b7JB, oTKB)
            var f3KB = _n('view')
            _rz(z, f3KB, 'class', 44, e, s, gg)
            var c4KB = _n('text')
            _rz(z, c4KB, 'class', 45, e, s, gg)
            var h5KB = _oz(z, 46, e, s, gg)
            _(c4KB, h5KB)
            _(f3KB, c4KB)
            var o6KB = _n('text')
            _rz(z, o6KB, 'class', 47, e, s, gg)
            var c7KB = _oz(z, 48, e, s, gg)
            _(o6KB, c7KB)
            _(f3KB, o6KB)
            _(b7JB, f3KB)
            var o8KB = _n('view')
            _rz(z, o8KB, 'class', 49, e, s, gg)
            var l9KB = _n('text')
            _rz(z, l9KB, 'class', 50, e, s, gg)
            var a0KB = _oz(z, 51, e, s, gg)
            _(l9KB, a0KB)
            _(o8KB, l9KB)
            var tALB = _n('text')
            _rz(z, tALB, 'class', 52, e, s, gg)
            var eBLB = _oz(z, 53, e, s, gg)
            _(tALB, eBLB)
            _(o8KB, tALB)
            _(b7JB, o8KB)
            var bCLB = _n('view')
            _rz(z, bCLB, 'class', 54, e, s, gg)
            var oDLB = _mz(z, 'button', ['bindtap', 55, 'class', 1, 'data-event-opts', 2, 'plain', 3, 'type', 4], [], e, s, gg)
            var xELB = _oz(z, 60, e, s, gg)
            _(oDLB, xELB)
            _(bCLB, oDLB)
            _(b7JB, bCLB)
            var oFLB = _n('view')
            _rz(z, oFLB, 'class', 61, e, s, gg)
            var fGLB = _oz(z, 62, e, s, gg)
            _(oFLB, fGLB)
            _(b7JB, oFLB)
            _(e6JB, b7JB)
            _(t5JB, e6JB)
            _(r, t5JB)
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
                g = "$gwx_XC_37";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_37();
if (__vd_version_info__.delayedGwx) __wxAppCode__['pages/pickerDemo/pickerDemo.wxml'] = [$gwx_XC_37, './pages/pickerDemo/pickerDemo.wxml'];
else __wxAppCode__['pages/pickerDemo/pickerDemo.wxml'] = $gwx_XC_37('./pages/pickerDemo/pickerDemo.wxml');

var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    __wxAppCode__['pages/pickerDemo/pickerDemo.wxss'] = setCssToHead([".", [1], "picker-demo-page.", [1], "data-v-1bb180ad{background:linear-gradient(180deg,#f4f7ff,#eef2ff);min-height:100vh;padding:", [0, 32], " ", [0, 24], "}\n.", [1], "picker-demo-card.", [1], "data-v-1bb180ad{background:#fff;border-radius:", [0, 24], ";box-shadow:0 ", [0, 12], " ", [0, 40], " rgba(60,70,120,.14);padding:", [0, 28], " ", [0, 24], " ", [0, 32], "}\n.", [1], "picker-demo-title.", [1], "data-v-1bb180ad{color:#1f2a44;font-size:", [0, 34], ";font-weight:700;margin-bottom:", [0, 20], "}\n.", [1], "picker-demo-picker.", [1], "data-v-1bb180ad,.", [1], "picker-demo-row.", [1], "data-v-1bb180ad{-webkit-align-items:center;align-items:center;background:#f7f9ff;border-radius:", [0, 16], ";display:-webkit-flex;display:flex;-webkit-justify-content:space-between;justify-content:space-between;margin-top:", [0, 18], ";padding:", [0, 20], " ", [0, 18], "}\n.", [1], "picker-demo-label.", [1], "data-v-1bb180ad{color:#5b6480;font-size:", [0, 26], "}\n.", [1], "picker-demo-value.", [1], "data-v-1bb180ad{color:#1f2a44;font-size:", [0, 26], ";text-align:right;word-break:break-all}\n.", [1], "picker-demo-picker-value.", [1], "data-v-1bb180ad{-webkit-align-items:center;align-items:center;color:#1f2a44;display:-webkit-flex;display:flex;font-size:", [0, 26], ";gap:", [0, 8], "}\n.", [1], "picker-demo-arrow.", [1], "data-v-1bb180ad{color:#9aa3bd;font-size:", [0, 34], "}\n.", [1], "picker-demo-actions.", [1], "data-v-1bb180ad{margin-top:", [0, 24], "}\n.", [1], "picker-demo-button.", [1], "data-v-1bb180ad{width:100%}\n.", [1], "picker-demo-note.", [1], "data-v-1bb180ad{color:#7a839d;font-size:", [0, 24], ";line-height:1.6;margin-top:", [0, 16], "}\n", ], undefined, {
        path: "./pages/pickerDemo/pickerDemo.wxss"
    });
}