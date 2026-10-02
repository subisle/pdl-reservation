$gwx18_XC_35 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx18_XC_35 || [];

        function gz$gwx18_XC_35_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx18_XC_35_1) return __WXML_GLOBAL__.ops_cached.$gwx18_XC_35_1
            __WXML_GLOBAL__.ops_cached.$gwx18_XC_35_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
            })(__WXML_GLOBAL__.ops_cached.$gwx18_XC_35_1);
            return __WXML_GLOBAL__.ops_cached.$gwx18_XC_35_1
        }
        __WXML_GLOBAL__.ops_set.$gwx18_XC_35 = z;
        __WXML_GLOBAL__.ops_init.$gwx18_XC_35 = true;
        var x = ['./packageExternal/modelEmployee/employeelogin/employeelogin.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx18_XC_35_1()
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
                g = "$gwx18_XC_35";
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
if (__vd_version_info__.delayedGwx || false) $gwx18_XC_35();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packageExternal/modelEmployee/employeelogin/employeelogin.wxml'] = [$gwx18_XC_35, './packageExternal/modelEmployee/employeelogin/employeelogin.wxml'];
else __wxAppCode__['packageExternal/modelEmployee/employeelogin/employeelogin.wxml'] = $gwx18_XC_35('./packageExternal/modelEmployee/employeelogin/employeelogin.wxml');;
__wxRoute = "packageExternal/modelEmployee/employeelogin/employeelogin";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packageExternal/modelEmployee/employeelogin/employeelogin.js";
define("packageExternal/modelEmployee/employeelogin/employeelogin.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
        ["packageExternal/modelEmployee/employeelogin/employeelogin"], {
            "0c38": function(e, t, o) {
                o.d(t, "b", (function() {
                    return a
                })), o.d(t, "c", (function() {
                    return n
                })), o.d(t, "a", (function() {}));
                var a = function() {
                        this.$createElement;
                        this._self._c
                    },
                    n = []
            },
            5483: function(e, t, o) {
                (function(e, t) {
                    o("6cdc"), n(o("66fd"));
                    var a = n(o("eded"));

                    function n(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    e.__webpack_require_UNI_MP_PLUGIN__ = o, t(a.default)
                }).call(this, o("bc2e").default, o("543d").createPage)
            },
            caf1: function(e, t, o) {
                var a = o("e786");
                o.n(a).a
            },
            da7e: function(e, t, o) {
                o.r(t);
                var a = o("e493"),
                    n = o.n(a);
                for (var r in a)["default"].indexOf(r) < 0 && function(e) {
                    o.d(t, e, (function() {
                        return a[e]
                    }))
                }(r);
                t.default = n.a
            },
            e493: function(e, t, o) {
                (function(e) {
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = void 0;
                    var a = r(o("a34a")),
                        n = r(o("8bd1"));

                    function r(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }

                    function s(e, t, o, a, n, r, s) {
                        try {
                            var c = e[r](s),
                                u = c.value
                        } catch (e) {
                            return void o(e)
                        }
                        c.done ? t(u) : Promise.resolve(u).then(a, n)
                    }

                    function c(e) {
                        return function() {
                            var t = this,
                                o = arguments;
                            return new Promise((function(a, n) {
                                var r = e.apply(t, o);

                                function c(e) {
                                    s(r, a, n, c, u, "next", e)
                                }

                                function u(e) {
                                    s(r, a, n, c, u, "throw", e)
                                }
                                c(void 0)
                            }))
                        }
                    }
                    var u = o("ff25");
                    t.default = {
                        data: function() {
                            return {
                                form: {
                                    username: "",
                                    password: ""
                                },
                                showPassword: !1,
                                loading: !1,
                                isChecking: !0
                            }
                        },
                        onLoad: function() {
                            this.checkLoginStatus()
                        },
                        methods: {
                            checkLoginStatus: function() {
                                var t = this;
                                n.default.checkAndRefreshToken().then((function(t) {
                                    console.log("自动登录成功，用户信息:", t);
                                    var o = e.getStorageSync("employeeInfo") || {};
                                    t && (o.userId = t.userId || o.userId, o.userName = t.userName || o.userName, o.storeCode = t.storeCode || o.storeCode, o.storeName = t.storeName || o.storeName, o.shoppeCode = t.shoppeCode || o.shoppeCode, o.shoppeName = t.shoppeName || o.shoppeName, o.authShoppeList = t.authShoppeList || o.authShoppeList, e.setStorageSync("employeeInfo", o)), setTimeout((function() {
                                        e.redirectTo({
                                            url: "/packageExternal/modelEmployee/employee/employee"
                                        })
                                    }), 1e3)
                                })).catch((function(e) {
                                    console.log("Token验证失败:", e), t.isChecking = !1
                                }))
                            },
                            togglePassword: function() {
                                this.showPassword = !this.showPassword
                            },
                            checkShoppeCalledStatus: function(t, o, a) {
                                return new Promise((function(n) {
                                    e.request({
                                        url: u.checkShoppeCalled,
                                        method: "POST",
                                        header: {
                                            "Content-Type": "application/json",
                                            Authorization: "Bearer " + a
                                        },
                                        data: {
                                            storeCode: t,
                                            shoppeCode: o
                                        },
                                        success: function(t) {
                                            if (t.data && 200 === t.data.code) {
                                                var o = t.data.data || 0;
                                                e.setStorageSync("shoppeIsCalled", o), console.log("登录时获取专柜叫号状态:", 1 === o ? "启用" : "不启用")
                                            } else e.setStorageSync("shoppeIsCalled", 0), console.error("查询专柜叫号状态失败:", t.data);
                                            n()
                                        },
                                        fail: function(t) {
                                            e.setStorageSync("shoppeIsCalled", 0), console.error("查询专柜叫号状态请求失败:", t), n()
                                        }
                                    })
                                }))
                            },
                            handleLogin: function() {
                                var t = this;
                                return c(a.default.mark((function o() {
                                    return a.default.wrap((function(o) {
                                        for (;;) switch (o.prev = o.next) {
                                            case 0:
                                                if (t.form.username) {
                                                    o.next = 3;
                                                    break
                                                }
                                                return e.showToast({
                                                    title: "请输入账号",
                                                    icon: "none"
                                                }), o.abrupt("return");
                                            case 3:
                                                if (t.form.password) {
                                                    o.next = 6;
                                                    break
                                                }
                                                return e.showToast({
                                                    title: "请输入密码",
                                                    icon: "none"
                                                }), o.abrupt("return");
                                            case 6:
                                                t.loading = !0, e.request({
                                                    url: u.miniAppLogin,
                                                    method: "POST",
                                                    data: {
                                                        username: t.form.username,
                                                        password: t.form.password,
                                                        token: n.default.getToken()
                                                    },
                                                    header: {
                                                        "Content-Type": "application/json",
                                                        token: n.default.getHeaderToken(),
                                                        deviceId: n.default.getDeviceId()
                                                    },
                                                    success: function() {
                                                        var o = c(a.default.mark((function o(n) {
                                                            var r, s;
                                                            return a.default.wrap((function(o) {
                                                                for (;;) switch (o.prev = o.next) {
                                                                    case 0:
                                                                        if (t.loading = !1, 200 !== (r = n.data).code) {
                                                                            o.next = 20;
                                                                            break
                                                                        }
                                                                        if (!r.data || !r.data.token) {
                                                                            o.next = 18;
                                                                            break
                                                                        }
                                                                        if (o.prev = 4, e.setStorageSync("employeeToken", r.data.token), s = {
                                                                                userId: r.data.userId,
                                                                                userName: r.data.userName,
                                                                                storeCode: r.data.storeCode,
                                                                                avatar: r.data.avatar,
                                                                                shoppeCode: r.data.shoppeCode,
                                                                                storeName: r.data.storeName,
                                                                                shoppeName: r.data.shoppeName,
                                                                                authShoppeList: r.data.authShoppeList,
                                                                                curDate: r.data.curDate,
                                                                                weekDay: r.data.weekDay
                                                                            }, e.setStorageSync("employeeInfo", s), !s.storeCode || !s.shoppeCode) {
                                                                            o.next = 11;
                                                                            break
                                                                        }
                                                                        return o.next = 11, t.checkShoppeCalledStatus(s.storeCode, s.shoppeCode, r.data.token);
                                                                    case 11:
                                                                        e.showToast({
                                                                            title: "登录成功",
                                                                            icon: "success"
                                                                        }), setTimeout((function() {
                                                                            e.redirectTo({
                                                                                url: "/packageExternal/modelEmployee/employee/employee"
                                                                            })
                                                                        }), 500), o.next = 18;
                                                                        break;
                                                                    case 15:
                                                                        o.prev = 15, o.t0 = o.catch(4), console.error("保存用户信息失败:", o.t0);
                                                                    case 18:
                                                                        o.next = 21;
                                                                        break;
                                                                    case 20:
                                                                        e.showToast({
                                                                            title: r.msg || "登录失败",
                                                                            icon: "none",
                                                                            duration: 2e3
                                                                        });
                                                                    case 21:
                                                                    case "end":
                                                                        return o.stop()
                                                                }
                                                            }), o, null, [
                                                                [4, 15]
                                                            ])
                                                        })));
                                                        return function(e) {
                                                            return o.apply(this, arguments)
                                                        }
                                                    }(),
                                                    fail: function(o) {
                                                        t.loading = !1, e.showToast({
                                                            title: "网络请求失败",
                                                            icon: "none",
                                                            duration: 2e3
                                                        })
                                                    }
                                                });
                                            case 8:
                                            case "end":
                                                return o.stop()
                                        }
                                    }), o)
                                })))()
                            }
                        }
                    }
                }).call(this, o("543d").default)
            },
            e786: function(e, t, o) {},
            eded: function(e, t, o) {
                o.r(t);
                var a = o("0c38"),
                    n = o("da7e");
                for (var r in n)["default"].indexOf(r) < 0 && function(e) {
                    o.d(t, e, (function() {
                        return n[e]
                    }))
                }(r);
                o("caf1");
                var s = o("f0c5"),
                    c = Object(s.a)(n.default, a.b, a.c, !1, null, "4bf8bfe2", null, !1, a.a, void 0);
                t.default = c.exports
            }
        },
        [
            ["5483", "common/runtime", "common/vendor", "packageExternal/common/vendor"]
        ]
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packageExternal/modelEmployee/employeelogin/employeelogin.js'
});
require("packageExternal/modelEmployee/employeelogin/employeelogin.js");