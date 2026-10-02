$gwx18_XC_38 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx18_XC_38 || [];

        function gz$gwx18_XC_38_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx18_XC_38_1) return __WXML_GLOBAL__.ops_cached.$gwx18_XC_38_1
            __WXML_GLOBAL__.ops_cached.$gwx18_XC_38_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
            })(__WXML_GLOBAL__.ops_cached.$gwx18_XC_38_1);
            return __WXML_GLOBAL__.ops_cached.$gwx18_XC_38_1
        }
        __WXML_GLOBAL__.ops_set.$gwx18_XC_38 = z;
        __WXML_GLOBAL__.ops_init.$gwx18_XC_38 = true;
        var x = ['./packageExternal/moduleHome/index.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx18_XC_38_1()
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
                g = "$gwx18_XC_38";
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
if (__vd_version_info__.delayedGwx || false) $gwx18_XC_38();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packageExternal/moduleHome/index.wxml'] = [$gwx18_XC_38, './packageExternal/moduleHome/index.wxml'];
else __wxAppCode__['packageExternal/moduleHome/index.wxml'] = $gwx18_XC_38('./packageExternal/moduleHome/index.wxml');;
__wxRoute = "packageExternal/moduleHome/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packageExternal/moduleHome/index.js";
define("packageExternal/moduleHome/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
        ["packageExternal/moduleHome/index"], {
            "0780": function(e, n, o) {},
            "3f57": function(e, n, o) {
                o.d(n, "b", (function() {
                    return t
                })), o.d(n, "c", (function() {
                    return a
                })), o.d(n, "a", (function() {}));
                var t = function() {
                        this.$createElement;
                        this._self._c
                    },
                    a = []
            },
            4870: function(e, n, o) {
                (function(e, n) {
                    o("6cdc"), a(o("66fd"));
                    var t = a(o("8236"));

                    function a(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    e.__webpack_require_UNI_MP_PLUGIN__ = o, n(t.default)
                }).call(this, o("bc2e").default, o("543d").createPage)
            },
            8236: function(e, n, o) {
                o.r(n);
                var t = o("3f57"),
                    a = o("f919");
                for (var d in a)["default"].indexOf(d) < 0 && function(e) {
                    o.d(n, e, (function() {
                        return a[e]
                    }))
                }(d);
                o("cd91");
                var u = o("f0c5"),
                    c = Object(u.a)(a.default, t.b, t.c, !1, null, "6b6800fe", null, !1, t.a, void 0);
                n.default = c.exports
            },
            bdc1: function(e, n, o) {
                (function(e) {
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }), n.default = void 0;
                    var t = function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }(o("8bd1"));
                    var a = o("45b5");
                    n.default = {
                        data: function() {
                            return {
                                isLoad: !1,
                                regions: []
                            }
                        },
                        onLoad: function() {
                            console.log("222222222"), this.loadData()
                        },
                        methods: {
                            loadData: function() {
                                var n = this;
                                e.request({
                                    url: a.modulehomepageinit,
                                    method: "POST",
                                    data: {},
                                    header: {
                                        token: t.default.getHeaderToken(),
                                        deviceId: t.default.getDeviceId()
                                    },
                                    success: function(o) {
                                        var t = o.data;
                                        200 == t.code ? (n.isLoad = !0, n.regions = t.data.areas) : (n.isLoad = !1, e.showToast({
                                            title: t.msg ? t.msg : "系统繁忙",
                                            duration: 2e3,
                                            icon: "none"
                                        }))
                                    },
                                    fail: function(o) {
                                        n.isLoad = !1, console.log(o), e.showToast({
                                            title: "系统繁忙",
                                            duration: 2e3,
                                            icon: "none"
                                        })
                                    },
                                    complete: function() {}
                                })
                            },
                            handleTap: function(n, o) {
                                if (console.log("点击了:", o.name), o.bookable) {
                                    var t = o.jumpPage + "?areaCode=" + n.code + "&businessCode=" + o.code;
                                    e.navigateTo({
                                        url: t
                                    })
                                }
                            }
                        }
                    }
                }).call(this, o("543d").default)
            },
            cd91: function(e, n, o) {
                var t = o("0780");
                o.n(t).a
            },
            f919: function(e, n, o) {
                o.r(n);
                var t = o("bdc1"),
                    a = o.n(t);
                for (var d in t)["default"].indexOf(d) < 0 && function(e) {
                    o.d(n, e, (function() {
                        return t[e]
                    }))
                }(d);
                n.default = a.a
            }
        },
        [
            ["4870", "common/runtime", "common/vendor", "packageExternal/common/vendor"]
        ]
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packageExternal/moduleHome/index.js'
});
require("packageExternal/moduleHome/index.js");