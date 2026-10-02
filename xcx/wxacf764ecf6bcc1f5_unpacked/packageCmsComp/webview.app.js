var __globalThis = (typeof __vd_version_info__ !== 'undefined' && typeof __vd_version_info__.globalThis !== 'undefined') ? __vd_version_info__.globalThis : window;
var __webviewId__ = __webviewId__;
var __wxAppCode__ = __wxAppCode__ || {};
var __subPageFrameReady__ = __globalThis.__subPageFrameReady__ || function() {};
var __WXML_GLOBAL__ = __WXML_GLOBAL__ || {
    entrys: {},
    defines: {},
    modules: {},
    ops: [],
    wxs_nf_init: undefined,
    total_ops: 0
};
var __subPageFrameStartTime__ = Date.now();; /*v0.5vv_20211229_syb_scopedata*/
__globalThis.__wcc_version__ = 'v0.5vv_20211229_syb_scopedata';
__globalThis.__wcc_version_info__ = {
    "customComponents": true,
    "fixZeroRpx": true,
    "propValueDeepCopy": false
};
var $gwxc
var $gaic = {}
var outerGlobal = typeof __globalThis === 'undefined' ? window : __globalThis;
$gwx8 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
    return function(path, global) {
        if (typeof global === 'undefined') {
            if (typeof __GWX_GLOBAL__ === 'undefined') global = {};
            else global = __GWX_GLOBAL__;
        }
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
        if (typeof $gwx === 'function') $gwx('init', global);
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
        var z = __WXML_GLOBAL__.ops_set.$gwx8 || [];
        __WXML_GLOBAL__.ops_set.$gwx8 = z;
        __WXML_GLOBAL__.ops_init.$gwx8 = true;
        var nv_require = function() {
            var nnm = {
                "p_./packageCmsComp/components/CMS/components/Gashapon/Gashapon.wxs": np_0,
            };
            var nom = {};
            return function(n) {
                if (n[0] === 'p' && n[1] === '_' && f_[n.slice(2)]) return f_[n.slice(2)];
                return function() {
                    if (!nnm[n]) return undefined;
                    try {
                        if (!nom[n]) nom[n] = nnm[n]();
                        return nom[n];
                    } catch (e) {
                        e.message = e.message.replace(/nv_/g, '');
                        var tmp = e.stack.substring(0, e.stack.lastIndexOf(n));
                        e.stack = tmp.substring(0, tmp.lastIndexOf('\n'));
                        e.stack = e.stack.replace(/\snv_/g, ' ');
                        e.stack = $gstack(e.stack);
                        e.stack += '\n    at ' + n.substring(2);
                        console.error(e);
                    }
                }
            }
        }()
        f_['./packageCmsComp/components/CMS/components/Gashapon/Gashapon.wxml'] = {};
        f_['./packageCmsComp/components/CMS/components/Gashapon/Gashapon.wxml']['utils'] = f_['./packageCmsComp/components/CMS/components/Gashapon/Gashapon.wxs'] || nv_require("p_./packageCmsComp/components/CMS/components/Gashapon/Gashapon.wxs");
        f_['./packageCmsComp/components/CMS/components/Gashapon/Gashapon.wxml']['utils']();

        f_['./packageCmsComp/components/CMS/components/Gashapon/Gashapon.wxs'] = nv_require("p_./packageCmsComp/components/CMS/components/Gashapon/Gashapon.wxs");

        function np_0() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_left = 0;
            var nv_right = 362;
            var nv_top = 206;
            var nv_bottom = 0;
            var nv_ballArr = [({
                nv_index: 1,
                nv_x: 280,
                nv_y: 120,
                nv_deg: 0,
            }), ({
                nv_index: 2,
                nv_x: 170,
                nv_y: 84,
                nv_deg: 0,
            }), ({
                nv_index: 3,
                nv_x: 50,
                nv_y: 0,
                nv_deg: 0,
            }), ({
                nv_index: 4,
                nv_x: 140,
                nv_y: 0,
                nv_deg: 0,
            }), ({
                nv_index: 5,
                nv_x: 348,
                nv_y: 30,
                nv_deg: 0,
            }), ({
                nv_index: 6,
                nv_x: 18,
                nv_y: 66,
                nv_deg: 0,
            }), ({
                nv_index: 7,
                nv_x: 70,
                nv_y: 68,
                nv_deg: 0,
            }), ({
                nv_index: 8,
                nv_x: 122,
                nv_y: 72,
                nv_deg: 0,
            }), ({
                nv_index: 9,
                nv_x: 228,
                nv_y: 72,
                nv_deg: 0,
            }), ({
                nv_index: 10,
                nv_x: 318,
                nv_y: 72,
                nv_deg: 0,
            }), ({
                nv_index: 11,
                nv_x: 4,
                nv_y: 0,
                nv_deg: 0,
            }), ({
                nv_index: 12,
                nv_x: 94,
                nv_y: 0,
                nv_deg: 0,
            }), ({
                nv_index: 13,
                nv_x: 184,
                nv_y: 0,
                nv_deg: 0,
            }), ({
                nv_index: 14,
                nv_x: 274,
                nv_y: 0,
                nv_deg: 0,
            }), ({
                nv_index: 15,
                nv_x: 360,
                nv_y: 0,
                nv_deg: 0,
            })];
            var nv_initArr = [({
                nv_index: 1,
                nv_x: 280,
                nv_y: 120,
                nv_deg: -45,
                nv_step: 0,
            }), ({
                nv_index: 2,
                nv_x: 170,
                nv_y: 84,
                nv_deg: 27,
                nv_step: 0,
            }), ({
                nv_index: 3,
                nv_x: 50,
                nv_y: 0,
                nv_deg: 120,
                nv_step: 0,
            }), ({
                nv_index: 4,
                nv_x: 140,
                nv_y: 0,
                nv_deg: 67,
                nv_step: 0,
            }), ({
                nv_index: 5,
                nv_x: 348,
                nv_y: 30,
                nv_deg: -38,
                nv_step: 0,
            }), ({
                nv_index: 6,
                nv_x: 18,
                nv_y: 66,
                nv_deg: 27,
                nv_step: 0,
            }), ({
                nv_index: 7,
                nv_x: 70,
                nv_y: 68,
                nv_deg: -60,
                nv_step: 0,
            }), ({
                nv_index: 8,
                nv_x: 122,
                nv_y: 72,
                nv_deg: 130,
                nv_step: 0,
            }), ({
                nv_index: 9,
                nv_x: 228,
                nv_y: 72,
                nv_deg: 72,
                nv_step: 0,
            }), ({
                nv_index: 10,
                nv_x: 318,
                nv_y: 72,
                nv_deg: 160,
                nv_step: 0,
            }), ({
                nv_index: 11,
                nv_x: 4,
                nv_y: 0,
                nv_deg: -45,
                nv_step: 0,
            }), ({
                nv_index: 12,
                nv_x: 94,
                nv_y: 0,
                nv_deg: 27,
                nv_step: 0,
            }), ({
                nv_index: 13,
                nv_x: 184,
                nv_y: 0,
                nv_deg: -30,
                nv_step: 0,
            }), ({
                nv_index: 14,
                nv_x: 274,
                nv_y: 0,
                nv_deg: 90,
                nv_step: 0,
            }), ({
                nv_index: 15,
                nv_x: 360,
                nv_y: 0,
                nv_deg: 5,
                nv_step: 0,
            })];
            var nv_count = 0;

            function nv_init(nv_newValue, nv_oldValue, nv_ownerInstance, nv_instance) {
                if (nv_newValue === true && nv_count === 0) {
                    nv_count = 70;
                    nv_ballArr.nv_forEach((function(nv_item, nv_index) {
                        nv_assignRandomProperties(nv_item);
                        nv_setXY(nv_ownerInstance, nv_index)
                    }))
                }
            };

            function nv_assignRandomProperties(nv_item) {
                nv_item.nv_directionX = Math.nv_random() > 0.5 ? 1 : -1;
                nv_item.nv_directionY = 1;
                nv_item.nv_rotateD = Math.nv_random() > 0.5 ? 1 : -1;
                nv_item.nv_transformSpeed = (Math.nv_random() * 2 + 1).nv_toFixed(2) * 1;
                nv_item.nv_speedX = (Math.nv_random() * 2 + 1).nv_toFixed(2) * 1;
                nv_item.nv_speedY = (Math.nv_random() * 2 + 1).nv_toFixed(2) * 1
            };

            function nv_setXY(nv_ownerInstance, nv_index) {
                nv_calculate(nv_ballArr[((nt_0 = (nv_index), null == nt_0 ? undefined : 'number' === typeof nt_0 ? nt_0 : "nv_" + nt_0))]);
                if (nv_count > 0) {
                    nv_count--;
                    var nv_ballComponent = nv_ownerInstance.nv_selectAllComponents('.ball-animate')[((nt_1 = (nv_index), null == nt_1 ? undefined : 'number' === typeof nt_1 ? nt_1 : "nv_" + nt_1))];
                    nv_ballComponent.nv_setStyle(({
                        "nv_transform": "translate3d(" + nv_ballArr[((nt_2 = (nv_index), null == nt_2 ? undefined : 'number' === typeof nt_2 ? nt_2 : "nv_" + nt_2))].nv_x + "rpx, -" + nv_ballArr[((nt_3 = (nv_index), null == nt_3 ? undefined : 'number' === typeof nt_3 ? nt_3 : "nv_" + nt_3))].nv_y + "rpx, 0) rotate(" + nv_ballArr[((nt_4 = (nv_index), null == nt_4 ? undefined : 'number' === typeof nt_4 ? nt_4 : "nv_" + nt_4))].nv_deg + "deg)",
                        "nv_transition": "transform " + (nv_ballArr[((nt_5 = (nv_index), null == nt_5 ? undefined : 'number' === typeof nt_5 ? nt_5 : "nv_" + nt_5))].nv_step / 400) * nv_ballArr[((nt_6 = (nv_index), null == nt_6 ? undefined : 'number' === typeof nt_6 ? nt_6 : "nv_" + nt_6))].nv_transformSpeed + "s linear 0s",
                    }))
                } else {
                    nv_ballArr = nv_JSON.nv_parse(nv_JSON.nv_stringify(nv_initArr));
                    nv_ballArr.nv_forEach((function(nv_item, nv_forIndex) {
                        var nv_ballComponent = nv_ownerInstance.nv_selectAllComponents('.ball-animate')[((nt_7 = (nv_forIndex), null == nt_7 ? undefined : 'number' === typeof nt_7 ? nt_7 : "nv_" + nt_7))];
                        nv_ballComponent.nv_setStyle(({
                            "nv_transform": "translate3d(" + nv_item.nv_x + "rpx, -" + nv_item.nv_y + "rpx, 0) rotate(" + nv_item.nv_deg + "deg)",
                            "nv_transition": "transform 0s linear 0s",
                        }))
                    }));
                    nv_ownerInstance.nv_callMethod('animateFish')
                }
            };

            function nv_interval(nv_event, nv_ownerInstance) {
                nv_setXY(nv_ownerInstance, nv_event.nv_currentTarget.nv_dataset.nv_index)
            };

            function nv_calculate(nv_ballObj) {
                nv_ballObj.nv_distanceX = nv_ballObj.nv_directionX == 1 ? nv_right - nv_ballObj.nv_x : nv_ballObj.nv_x - nv_left;
                nv_ballObj.nv_distanceY = nv_ballObj.nv_directionY == 1 ? nv_top - nv_ballObj.nv_y : nv_ballObj.nv_y - nv_bottom;
                if (nv_ballObj.nv_distanceX / nv_ballObj.nv_speedX < nv_ballObj.nv_distanceY / nv_ballObj.nv_speedY) {
                    nv_ballObj.nv_direction = 'x';
                    nv_ballObj.nv_step = (nv_ballObj.nv_distanceX / nv_ballObj.nv_speedX * nv_ballObj.nv_speedY).nv_toFixed(2) * 1
                } else {
                    nv_ballObj.nv_direction = 'y';
                    nv_ballObj.nv_step = (nv_ballObj.nv_distanceY / nv_ballObj.nv_speedY * nv_ballObj.nv_speedX).nv_toFixed(2) * 1
                };
                if (nv_ballObj.nv_direction == 'x') {
                    nv_ballObj.nv_x = nv_ballObj.nv_directionX == 1 ? nv_right : nv_left;
                    nv_ballObj.nv_y = (nv_ballObj.nv_step * nv_ballObj.nv_directionY + nv_ballObj.nv_y).nv_toFixed(2) * 1;
                    nv_ballObj.nv_directionX = -nv_ballObj.nv_directionX
                } else {
                    nv_ballObj.nv_x = (nv_ballObj.nv_step * nv_ballObj.nv_directionX + nv_ballObj.nv_x).nv_toFixed(2) * 1;
                    nv_ballObj.nv_y = nv_ballObj.nv_directionY == 1 ? nv_top : nv_bottom;
                    nv_ballObj.nv_directionY = -nv_ballObj.nv_directionY
                };
                nv_ballObj.nv_deg = (nv_ballObj.nv_deg + (nv_ballObj.nv_step * 2 * nv_ballObj.nv_rotateD)).nv_toFixed(2) * 1
            };
            nv_module.nv_exports = ({
                nv_init: nv_init,
                nv_interval: nv_interval,
            });
            return nv_module.nv_exports;
        }

        var x = [];
        if (path && e_[path]) {
            outerGlobal.__wxml_comp_version__ = 0.02
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx8";
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
if (__vd_version_info__.delayedGwx || true) $gwx8();;
var noCss = typeof __vd_version_info__ !== 'undefined' && __vd_version_info__.noCss === true;
if (!noCss) {
    var BASE_DEVICE_WIDTH = 750;
    var isIOS = navigator.userAgent.match("iPhone");
    var deviceWidth = window.screen.width || 375;
    var deviceDPR = window.devicePixelRatio || 2;
    var checkDeviceWidth = window.__checkDeviceWidth__ || function() {
        var newDeviceWidth = window.screen.width || 375
        var newDeviceDPR = window.devicePixelRatio || 2
        var newDeviceHeight = window.screen.height || 375
        if (window.screen.orientation && /^landscape/.test(window.screen.orientation.type || '')) newDeviceWidth = newDeviceHeight
        if (newDeviceWidth !== deviceWidth || newDeviceDPR !== deviceDPR) {
            deviceWidth = newDeviceWidth
            deviceDPR = newDeviceDPR
        }
    }
    checkDeviceWidth()
    var eps = 1e-4;
    var transformRPX = window.__transformRpx__ || function(number, newDeviceWidth) {
        if (number === 0) return 0;
        number = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
        number = Math.floor(number + eps);
        if (number === 0) {
            if (deviceDPR === 1 || !isIOS) {
                return 1;
            } else {
                return 0.5;
            }
        }
        return number;
    }
    window.__rpxRecalculatingFuncs__ = window.__rpxRecalculatingFuncs__ || [];
    var __COMMON_STYLESHEETS__ = __COMMON_STYLESHEETS__ || {}

    var setCssToHead = function(file, _xcInvalid, info) {
        var Ca = {};
        var css_id;
        var info = info || {};
        var _C = __COMMON_STYLESHEETS__

        function makeup(file, opt) {
            var _n = typeof(file) === "string";
            if (_n && Ca.hasOwnProperty(file)) return "";
            if (_n) Ca[file] = 1;
            var ex = _n ? _C[file] : file;
            var res = "";
            for (var i = ex.length - 1; i >= 0; i--) {
                var content = ex[i];
                if (typeof(content) === "object") {
                    var op = content[0];
                    if (op == 0)
                        res = transformRPX(content[1], opt.deviceWidth) + (window.__convertRpxToVw__ ? "vw" : "px") + res;
                    else if (op == 1)
                        res = opt.suffix + res;
                    else if (op == 2)
                        res = makeup(content[1], opt) + res;
                } else
                    res = content + res
            }
            return res;
        }
        var styleSheetManager = window.__styleSheetManager2__
        var rewritor = function(suffix, opt, style) {
            opt = opt || {};
            suffix = suffix || "";
            opt.suffix = suffix;
            if (opt.allowIllegalSelector != undefined && _xcInvalid != undefined) {
                if (opt.allowIllegalSelector)
                    console.warn("For developer:" + _xcInvalid);
                else {
                    console.error(_xcInvalid);
                }
            }
            Ca = {};
            css = makeup(file, opt);
            if (styleSheetManager) {
                var key = (info.path || Math.random()) + ':' + suffix
                if (!style) {
                    styleSheetManager.addItem(key, info.path);
                    window.__rpxRecalculatingFuncs__.push(function(size) {
                        opt.deviceWidth = size.width;
                        rewritor(suffix, opt, true);
                    });
                }
                styleSheetManager.setCss(key, css);
                return;
            }
            if (!style) {
                var head = document.head || document.getElementsByTagName('head')[0];
                style = document.createElement('style');
                style.type = 'text/css';
                style.setAttribute("wxss:path", info.path);
                head.appendChild(style);
                window.__rpxRecalculatingFuncs__.push(function(size) {
                    opt.deviceWidth = size.width;
                    rewritor(suffix, opt, style);
                });
            }
            if (style.styleSheet) {
                style.styleSheet.cssText = css;
            } else {
                if (style.childNodes.length == 0)
                    style.appendChild(document.createTextNode(css));
                else
                    style.childNodes[0].nodeValue = css;
            }
        }
        return rewritor;
    }
    setCssToHead([])();
    setCssToHead([], undefined, {
        path: "./packageCmsComp/app.wxss"
    })();;;
}
var __subPageFrameEndTime__ = Date.now();
__subPageFrameReady__('/packageCmsComp/');