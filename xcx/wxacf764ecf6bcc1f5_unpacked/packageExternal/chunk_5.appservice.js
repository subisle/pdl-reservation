$gwx18_XC_34 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx18_XC_34 || [];

        function gz$gwx18_XC_34_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx18_XC_34_1) return __WXML_GLOBAL__.ops_cached.$gwx18_XC_34_1
            __WXML_GLOBAL__.ops_cached.$gwx18_XC_34_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, '__i0__'])
                Z([3, 'item'])
                Z([
                    [7],
                    [3, 'shoppeList']
                ])
                Z([3, 'code'])
                Z([3, '__e'])
                Z([
                    [4],
                    [
                        [5],
                        [
                            [5],
                            [
                                [5],
                                [1, 'shoppe-option']
                            ],
                            [1, 'data-v-1e48fd06']
                        ],
                        [
                            [2, '?:'],
                            [
                                [2, '==='],
                                [
                                    [6],
                                    [
                                        [7],
                                        [3, 'item']
                                    ],
                                    [3, 'code']
                                ],
                                [
                                    [6],
                                    [
                                        [7],
                                        [3, 'currentShoppe']
                                    ],
                                    [3, 'code']
                                ]
                            ],
                            [1, 'option-selected'],
                            [1, '']
                        ]
                    ]
                ])
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
                                                    [
                                                        [5],
                                                        [1, 'selectShoppe']
                                                    ],
                                                    [
                                                        [4],
                                                        [
                                                            [5],
                                                            [1, '$0']
                                                        ]
                                                    ]
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
                                                                    [4],
                                                                    [
                                                                        [5],
                                                                        [
                                                                            [5],
                                                                            [
                                                                                [5],
                                                                                [1, 'shoppeList']
                                                                            ],
                                                                            [1, 'code']
                                                                        ],
                                                                        [
                                                                            [6],
                                                                            [
                                                                                [7],
                                                                                [3, 'item']
                                                                            ],
                                                                            [3, 'code']
                                                                        ]
                                                                    ]
                                                                ]
                                                            ]
                                                        ]
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
                Z([3, 'option-hover'])
                Z([
                    [2, '==='],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'code']
                    ],
                    [
                        [6],
                        [
                            [7],
                            [3, 'currentShoppe']
                        ],
                        [3, 'code']
                    ]
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx18_XC_34_1);
            return __WXML_GLOBAL__.ops_cached.$gwx18_XC_34_1
        }
        __WXML_GLOBAL__.ops_set.$gwx18_XC_34 = z;
        __WXML_GLOBAL__.ops_init.$gwx18_XC_34 = true;
        var x = ['./packageExternal/modelEmployee/employee/employee.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx18_XC_34_1()
            var c1R = _v()
            _(r, c1R)
            var o2R = function(a4R, l3R, t5R, gg) {
                var b7R = _mz(z, 'view', ['bindtap', 4, 'class', 1, 'data-event-opts', 2, 'hoverClass', 3], [], a4R, l3R, gg)
                var o8R = _v()
                _(b7R, o8R)
                if (_oz(z, 8, a4R, l3R, gg)) {
                    o8R.wxVkey = 1
                }
                o8R.wxXCkey = 1
                _(t5R, b7R)
                return t5R
            }
            c1R.wxXCkey = 2
            _2z(z, 2, o2R, e, s, gg, c1R, 'item', '__i0__', 'code')
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
                g = "$gwx18_XC_34";
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
if (__vd_version_info__.delayedGwx || false) $gwx18_XC_34();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packageExternal/modelEmployee/employee/employee.wxml'] = [$gwx18_XC_34, './packageExternal/modelEmployee/employee/employee.wxml'];
else __wxAppCode__['packageExternal/modelEmployee/employee/employee.wxml'] = $gwx18_XC_34('./packageExternal/modelEmployee/employee/employee.wxml');;
__wxRoute = "packageExternal/modelEmployee/employee/employee";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packageExternal/modelEmployee/employee/employee.js";
define("packageExternal/modelEmployee/employee/employee.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../../@babel/runtime/helpers/typeof");
    require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
        ["packageExternal/modelEmployee/employee/employee"], {
            "27bd": function(e, t, o) {
                var a = o("29b9");
                o.n(a).a
            },
            "29b9": function(e, t, o) {},
            "3f09": function(e, t, o) {
                o.r(t);
                var a = o("c5a6"),
                    n = o("dd61");
                for (var r in n)["default"].indexOf(r) < 0 && function(e) {
                    o.d(t, e, (function() {
                        return n[e]
                    }))
                }(r);
                o("27bd");
                var c = o("f0c5"),
                    i = Object(c.a)(n.default, a.b, a.c, !1, null, "1e48fd06", null, !1, a.a, void 0);
                t.default = i.exports
            },
            "455b": function(t, o, a) {
                (function(t) {
                    Object.defineProperty(o, "__esModule", {
                        value: !0
                    }), o.default = void 0;
                    var n = function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }(a("8bd1"));

                    function r(t) {
                        return (r = "function" == typeof Symbol && "symbol" == e(Symbol.iterator) ? function(t) {
                            return e(t)
                        } : function(t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : e(t)
                        })(t)
                    }

                    function c(e, t) {
                        var o = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var a = Object.getOwnPropertySymbols(e);
                            t && (a = a.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), o.push.apply(o, a)
                        }
                        return o
                    }

                    function i(e, t, o) {
                        return (t = function(e) {
                            var t = function(e, t) {
                                if ("object" != r(e) || !e) return e;
                                var o = e[Symbol.toPrimitive];
                                if (void 0 !== o) {
                                    var a = o.call(e, t || "default");
                                    if ("object" != r(a)) return a;
                                    throw new TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === t ? String : Number)(e)
                            }(e, "string");
                            return "symbol" == r(t) ? t : t + ""
                        }(t)) in e ? Object.defineProperty(e, t, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = o, e
                    }
                    var s = a("ff25");
                    o.default = {
                        data: function() {
                            return {
                                userInfo: {
                                    name: "",
                                    avatar: "",
                                    storeName: "",
                                    businessType: ""
                                },
                                defaultAvatar: "/packageExternal/static/home.png",
                                isLoadingAvatar: !1,
                                shoppeList: [],
                                currentShoppe: {
                                    code: "",
                                    name: "",
                                    isOriginal: !0
                                },
                                showShoppePicker: !1
                            }
                        },
                        onLoad: function() {},
                        onShow: function() {
                            this.loadEmployeeInfo()
                        },
                        methods: {
                            loadEmployeeInfo: function() {
                                try {
                                    var e = t.getStorageSync("employeeInfo");
                                    if (e) {
                                        this.userInfo = {
                                            name: e.userName || "员工",
                                            avatar: e.avatar || this.defaultAvatar,
                                            storeName: e.storeName || "",
                                            businessType: e.shoppeName || ""
                                        }, this.buildShoppeList(e), e.avatar && e.avatar !== this.defaultAvatar || this.loadAvatarFromBackend();
                                        var o = this.currentShoppe.code || e.shoppeCode;
                                        o && e.storeCode && this.checkShoppeCalledStatus(e.storeCode, o)
                                    } else this.userInfo = {
                                        name: "员工",
                                        avatar: this.defaultAvatar,
                                        storeName: "请先登录",
                                        businessType: ""
                                    }
                                } catch (e) {
                                    console.error("加载员工信息失败:", e), this.userInfo = {
                                        name: "员工",
                                        avatar: this.defaultAvatar,
                                        storeName: "",
                                        businessType: ""
                                    }
                                }
                            },
                            loadAvatarFromBackend: function() {
                                var e = this;
                                if (!this.isLoadingAvatar) {
                                    var o = t.getStorageSync("token");
                                    o ? (this.isLoadingAvatar = !0, t.request({
                                        url: s.getUserInfo,
                                        method: "POST",
                                        header: {
                                            token: n.default.getHeaderToken(),
                                            deviceId: n.default.getDeviceId()
                                        },
                                        data: {
                                            token: o
                                        },
                                        success: function(t) {
                                            if (e.isLoadingAvatar = !1, t.data && 200 === t.data.code && t.data.data) {
                                                var o = t.data.data;
                                                o.avatar && o.avatar !== e.defaultAvatar ? (e.userInfo.avatar = o.avatar, e.updateEmployeeCache({
                                                    avatar: o.avatar
                                                })) : e.userInfo.avatar = e.defaultAvatar
                                            } else e.userInfo.avatar = e.defaultAvatar
                                        },
                                        fail: function(t) {
                                            e.isLoadingAvatar = !1, console.error("获取用户信息失败:", t), e.userInfo.avatar = e.defaultAvatar
                                        }
                                    })) : this.userInfo.avatar = this.defaultAvatar
                                }
                            },
                            updateEmployeeCache: function(e) {
                                try {
                                    var o = t.getStorageSync("employeeInfo") || {},
                                        a = Object.assign({}, o, e);
                                    t.setStorageSync("employeeInfo", a)
                                } catch (e) {
                                    console.error("更新员工缓存失败:", e)
                                }
                            },
                            checkShoppeCalledStatus: function(e, o) {
                                var a = t.getStorageSync("employeeToken");
                                if (!a) return t.showToast({
                                    title: "未登录，请先登录",
                                    icon: "none"
                                }), void setTimeout((function() {
                                    n.default.goEmployeeLogin()
                                }), 1500);
                                n.default.request({
                                    url: s.checkShoppeCalled,
                                    method: "POST",
                                    header: {
                                        "Content-Type": "application/json",
                                        Authorization: "Bearer " + a
                                    },
                                    data: {
                                        storeCode: e,
                                        shoppeCode: o
                                    }
                                }).then((function(e) {
                                    if (e.data && 200 === e.data.code) {
                                        var o = e.data.data || 0;
                                        t.setStorageSync("shoppeIsCalled", o), console.log("专柜叫号状态:", 1 === o ? "启用" : "不启用")
                                    } else t.setStorageSync("shoppeIsCalled", 0), console.error("查询专柜叫号状态失败:", e.data)
                                })).catch((function(e) {
                                    e && 401 !== e.code && (t.setStorageSync("shoppeIsCalled", 0), console.error("查询专柜叫号状态请求失败:", e))
                                }))
                            },
                            handleScan: function() {
                                0 === t.getStorageSync("shoppeIsCalled") ? t.navigateTo({
                                    url: "/packageExternal/modelEmployee/scancode/scancode"
                                }) : t.navigateTo({
                                    url: "/packageExternal/modelEmployee/writeoffnotes/writeoffnotes"
                                })
                            },
                            handleAddRule: function() {
                                t.navigateTo({
                                    url: "/packageExternal/modelEmployee/addrule/addrule"
                                })
                            },
                            buildShoppeList: function(e) {
                                var o = [];
                                e.shoppeCode && o.push({
                                    code: e.shoppeCode,
                                    name: e.shoppeName || "默认专柜",
                                    isOriginal: !0
                                }), e.authShoppeList && e.authShoppeList.length > 0 && e.authShoppeList.forEach((function(t) {
                                    t.code !== e.shoppeCode && o.push({
                                        code: t.code,
                                        name: t.name,
                                        isOriginal: !1
                                    })
                                })), this.shoppeList = o;
                                var a = t.getStorageSync("currentShoppe");
                                a && o.some((function(e) {
                                    return e.code === a.code
                                })) ? this.currentShoppe = a : o.length > 0 && (this.currentShoppe = o[0]), this.userInfo.businessType = this.currentShoppe.name
                            },
                            toggleShoppePicker: function() {
                                this.showShoppePicker = !this.showShoppePicker
                            },
                            closePicker: function() {
                                this.showShoppePicker = !1
                            },
                            selectShoppe: function(e) {
                                if (e.code !== this.currentShoppe.code) {
                                    this.currentShoppe = function(e) {
                                        for (var t = 1; t < arguments.length; t++) {
                                            var o = null != arguments[t] ? arguments[t] : {};
                                            t % 2 ? c(Object(o), !0).forEach((function(t) {
                                                i(e, t, o[t])
                                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : c(Object(o)).forEach((function(t) {
                                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                                            }))
                                        }
                                        return e
                                    }({}, e), this.userInfo.businessType = e.name, this.showShoppePicker = !1, t.setStorageSync("currentShoppe", this.currentShoppe);
                                    try {
                                        var o = t.getStorageSync("employeeInfo") || {};
                                        o.activeShoppeCode = e.code, o.activeShoppeName = e.name, t.setStorageSync("employeeInfo", o)
                                    } catch (e) {
                                        console.error("更新专柜缓存失败:", e)
                                    }
                                    t.removeStorageSync("shoppeIsCalled");
                                    var a = t.getStorageSync("employeeInfo") || {};
                                    a.storeCode && e.code && this.checkShoppeCalledStatus(a.storeCode, e.code), t.showToast({
                                        title: "已切换至" + e.name,
                                        icon: "none",
                                        duration: 1500
                                    })
                                } else this.showShoppePicker = !1
                            },
                            showLogoutDialog: function() {
                                var e = this;
                                t.showModal({
                                    title: "提示",
                                    content: "确认要退出登录吗？",
                                    confirmText: "退出",
                                    cancelText: "取消",
                                    confirmColor: "#ec070b",
                                    success: function(t) {
                                        t.confirm && e.handleLogout()
                                    }
                                })
                            },
                            handleLogout: function() {
                                t.removeStorageSync("employeeToken"), t.removeStorageSync("employeeInfo"), t.removeStorageSync("shoppeIsCalled"), t.removeStorageSync("currentShoppe"), t.showToast({
                                    title: "已退出登录",
                                    icon: "success"
                                }), setTimeout((function() {
                                    t.reLaunch({
                                        url: "/packageExternal/modelEmployee/employeelogin/employeelogin"
                                    })
                                }), 500)
                            }
                        }
                    }
                }).call(this, a("543d").default)
            },
            a593: function(e, t, o) {
                (function(e, t) {
                    o("6cdc"), n(o("66fd"));
                    var a = n(o("3f09"));

                    function n(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    e.__webpack_require_UNI_MP_PLUGIN__ = o, t(a.default)
                }).call(this, o("bc2e").default, o("543d").createPage)
            },
            c5a6: function(e, t, o) {
                o.d(t, "b", (function() {
                    return a
                })), o.d(t, "c", (function() {
                    return n
                })), o.d(t, "a", (function() {}));
                var a = function() {
                        var e = this,
                            t = (e.$createElement, e._self._c, e.shoppeList.length);
                        e.$mp.data = Object.assign({}, {
                            $root: {
                                g0: t
                            }
                        })
                    },
                    n = []
            },
            dd61: function(e, t, o) {
                o.r(t);
                var a = o("455b"),
                    n = o.n(a);
                for (var r in a)["default"].indexOf(r) < 0 && function(e) {
                    o.d(t, e, (function() {
                        return a[e]
                    }))
                }(r);
                t.default = n.a
            }
        },
        [
            ["a593", "common/runtime", "common/vendor", "packageExternal/common/vendor"]
        ]
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packageExternal/modelEmployee/employee/employee.js'
});
require("packageExternal/modelEmployee/employee/employee.js");