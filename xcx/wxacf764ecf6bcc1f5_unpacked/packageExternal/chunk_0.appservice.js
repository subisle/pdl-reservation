$gwx18_XC_0 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx18_XC_0 || [];

        function gz$gwx18_XC_0_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx18_XC_0_1) return __WXML_GLOBAL__.ops_cached.$gwx18_XC_0_1
            __WXML_GLOBAL__.ops_cached.$gwx18_XC_0_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
            })(__WXML_GLOBAL__.ops_cached.$gwx18_XC_0_1);
            return __WXML_GLOBAL__.ops_cached.$gwx18_XC_0_1
        }
        __WXML_GLOBAL__.ops_set.$gwx18_XC_0 = z;
        __WXML_GLOBAL__.ops_init.$gwx18_XC_0 = true;
        var x = ['./packageExternal/components/clock/clock.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx18_XC_0_1()
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
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx18_XC_0";
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                } catch (err) {
                    console.log(err)
                };
                g = "";
                return root;
            }
        }
    }
}(__g.a, __g.b, __g.c, __g.d, __g.e, __g.f, __g.g, __g.h, __g.i, __g.j, __g.k, __g.l, __g.m, __g.n, __g.o, __g.p, __g.q, __g.r, __g.s, __g.t, __g.u, __g.v, __g.w, __g.x, __g.y, __g.z, __g.A, __g.B, __g.C, __g.D, __g.E, __g.F, __g.G, __g.H, __g.I, __g.J, __g.K, __g.L, __g.M, __g.N, __g.O, __g.P, __g.Q, __g.R, __g.S, __g.T, __g.U, __g.V, __g.W, __g.X, __g.Y, __g.Z, __g.aa);
if (__vd_version_info__.delayedGwx || false) $gwx18_XC_0();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packageExternal/components/clock/clock.wxml'] = [$gwx18_XC_0, './packageExternal/components/clock/clock.wxml'];
else __wxAppCode__['packageExternal/components/clock/clock.wxml'] = $gwx18_XC_0('./packageExternal/components/clock/clock.wxml');;
__wxRoute = "packageExternal/components/clock/clock";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packageExternal/components/clock/clock.js";
define("packageExternal/components/clock/clock.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
        ["packageExternal/components/clock/clock"], {
            "1e51": function(n, t, e) {
                e.r(t);
                var c = e("d991"),
                    o = e.n(c);
                for (var r in c)["default"].indexOf(r) < 0 && function(n) {
                    e.d(t, n, (function() {
                        return c[n]
                    }))
                }(r);
                t.default = o.a
            },
            "27ac": function(n, t, e) {
                e.r(t);
                var c = e("e8de"),
                    o = e("1e51");
                for (var r in o)["default"].indexOf(r) < 0 && function(n) {
                    e.d(t, n, (function() {
                        return o[n]
                    }))
                }(r);
                e("efe4");
                var a = e("f0c5"),
                    i = Object(a.a)(o.default, c.b, c.c, !1, null, "3643fdd3", null, !1, c.a, void 0);
                t.default = i.exports
            },
            d991: function(n, t) {
                n.exports = {
                    data: function() {
                        return {
                            currentTime: new Date,
                            timer: null
                        }
                    },
                    computed: {
                        formattedTime: function() {
                            var n = this.currentTime.getHours().toString().padStart(2, "0"),
                                t = this.currentTime.getMinutes().toString().padStart(2, "0"),
                                e = this.currentTime.getSeconds().toString().padStart(2, "0");
                            return "".concat(n, ":").concat(t, ":").concat(e)
                        }
                    },
                    mounted: function() {
                        var n = this;
                        this.timer = setInterval((function() {
                            n.currentTime = new Date
                        }), 1e3)
                    },
                    destroyed: function() {
                        clearInterval(this.timer)
                    }
                }
            },
            e045: function(n, t, e) {},
            e8de: function(n, t, e) {
                e.d(t, "b", (function() {
                    return c
                })), e.d(t, "c", (function() {
                    return o
                })), e.d(t, "a", (function() {}));
                var c = function() {
                        this.$createElement;
                        this._self._c
                    },
                    o = []
            },
            efe4: function(n, t, e) {
                var c = e("e045");
                e.n(c).a
            }
        }
    ]), (global.webpackJsonp = global.webpackJsonp || []).push(["packageExternal/components/clock/clock-create-component", {
            "packageExternal/components/clock/clock-create-component": function(n, t, e) {
                e("543d").createComponent(e("27ac"))
            }
        },
        [
            ["packageExternal/components/clock/clock-create-component"]
        ]
    ]);
}, {
    isPage: false,
    isComponent: true,
    currentFile: 'packageExternal/components/clock/clock.js'
});
require("packageExternal/components/clock/clock.js");