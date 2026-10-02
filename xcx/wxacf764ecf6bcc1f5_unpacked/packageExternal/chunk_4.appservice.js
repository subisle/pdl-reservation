$gwx18_XC_33 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx18_XC_33 || [];

        function gz$gwx18_XC_33_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx18_XC_33_1) return __WXML_GLOBAL__.ops_cached.$gwx18_XC_33_1
            __WXML_GLOBAL__.ops_cached.$gwx18_XC_33_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'showPreview']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx18_XC_33_1);
            return __WXML_GLOBAL__.ops_cached.$gwx18_XC_33_1
        }
        __WXML_GLOBAL__.ops_set.$gwx18_XC_33 = z;
        __WXML_GLOBAL__.ops_init.$gwx18_XC_33 = true;
        var x = ['./packageExternal/modelEmployee/addrule/addrule.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx18_XC_33_1()
            var hYR = _v()
            _(r, hYR)
            if (_oz(z, 0, e, s, gg)) {
                hYR.wxVkey = 1
            }
            hYR.wxXCkey = 1
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
                g = "$gwx18_XC_33";
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
if (__vd_version_info__.delayedGwx || false) $gwx18_XC_33();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packageExternal/modelEmployee/addrule/addrule.wxml'] = [$gwx18_XC_33, './packageExternal/modelEmployee/addrule/addrule.wxml'];
else __wxAppCode__['packageExternal/modelEmployee/addrule/addrule.wxml'] = $gwx18_XC_33('./packageExternal/modelEmployee/addrule/addrule.wxml');;
__wxRoute = "packageExternal/modelEmployee/addrule/addrule";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packageExternal/modelEmployee/addrule/addrule.js";
define("packageExternal/modelEmployee/addrule/addrule.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
        ["packageExternal/modelEmployee/addrule/addrule"], {
            4786: function(t, e, n) {
                n.r(e);
                var a = n("b064"),
                    o = n.n(a);
                for (var i in a)["default"].indexOf(i) < 0 && function(t) {
                    n.d(e, t, (function() {
                        return a[t]
                    }))
                }(i);
                e.default = o.a
            },
            "650e": function(t, e, n) {},
            a8c8: function(t, e, n) {
                (function(t, e) {
                    n("6cdc"), o(n("66fd"));
                    var a = o(n("b594"));

                    function o(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }
                    t.__webpack_require_UNI_MP_PLUGIN__ = n, e(a.default)
                }).call(this, n("bc2e").default, n("543d").createPage)
            },
            b064: function(t, e, n) {
                (function(t) {
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.default = void 0;
                    var a = function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }(n("8bd1"));
                    var o = n("ff25");
                    e.default = {
                        data: function() {
                            return {
                                formData: {
                                    storeCode: "",
                                    storeName: "",
                                    shoppeCode: "",
                                    shoppeName: "",
                                    bookingStartTime: "",
                                    bookingEndTime: "",
                                    entranceStartTime: "",
                                    entranceEndTime: "",
                                    num: "",
                                    canTotalNum: !1,
                                    fenceFlag: 1,
                                    fenceDistance: 200
                                },
                                showPreview: !1,
                                previewData: {
                                    storeName: "",
                                    shoppeName: "",
                                    bookingStartTime: "",
                                    bookingEndTime: "",
                                    entranceStartTime: "",
                                    entranceEndTime: "",
                                    num: "",
                                    canTotalNum: !1,
                                    fenceFlag: 1,
                                    fenceDistance: 200
                                },
                                timePickerData: [
                                    [],
                                    [],
                                    []
                                ],
                                bookingStartIndex: [0, 0, 0],
                                bookingEndIndex: [0, 0, 0],
                                entranceStartIndex: [0, 0, 0],
                                entranceEndIndex: [0, 0, 0]
                            }
                        },
                        onLoad: function() {
                            this.initTimePicker(), this.loadEmployeeInfo()
                        },
                        methods: {
                            initTimePicker: function() {
                                for (var t = new Date, e = [], n = [], a = [], o = t.getHours(), i = t.getMinutes(), r = 0; r < 30; r++) {
                                    var c = new Date(t.getTime() + 24 * r * 60 * 60 * 1e3),
                                        s = c.getFullYear(),
                                        m = String(c.getMonth() + 1).padStart(2, "0"),
                                        f = String(c.getDate()).padStart(2, "0");
                                    e.push("".concat(s, "-").concat(m, "-").concat(f))
                                }
                                for (var d = 0; d < 24; d++) n.push(String(d).padStart(2, "0"));
                                for (var h = 0; h < 60; h++) a.push(String(h).padStart(2, "0"));
                                this.timePickerData = [e, n, a];
                                var u = [0, o, i];
                                this.bookingStartIndex = [].concat(u), this.bookingEndIndex = [].concat(u), this.entranceStartIndex = [].concat(u), this.entranceEndIndex = [].concat(u)
                            },
                            loadEmployeeInfo: function() {
                                try {
                                    var e = t.getStorageSync("employeeInfo");
                                    e ? (this.formData.storeCode = e.storeCode || "", this.formData.storeName = e.storeName || "", this.formData.shoppeCode = e.shoppeCode || "", this.formData.shoppeName = e.shoppeName || "") : (t.showToast({
                                        title: "请先登录",
                                        icon: "none"
                                    }), setTimeout((function() {
                                        t.navigateBack()
                                    }), 1500))
                                } catch (e) {
                                    console.error("加载员工信息失败:", e), t.showToast({
                                        title: "加载信息失败",
                                        icon: "none"
                                    })
                                }
                            },
                            onBookingStartTimeChange: function(t) {
                                var e = t.detail.value;
                                this.bookingStartIndex = e;
                                var n = this.timePickerData[0][e[0]],
                                    a = this.timePickerData[1][e[1]],
                                    o = this.timePickerData[2][e[2]];
                                this.formData.bookingStartTime = "".concat(n, " ").concat(a, ":").concat(o)
                            },
                            onBookingStartColumnChange: function(t) {
                                var e = t.detail.column,
                                    n = t.detail.value;
                                this.bookingStartIndex[e] = n
                            },
                            onBookingEndTimeChange: function(t) {
                                var e = t.detail.value;
                                this.bookingEndIndex = e;
                                var n = this.timePickerData[0][e[0]],
                                    a = this.timePickerData[1][e[1]],
                                    o = this.timePickerData[2][e[2]];
                                this.formData.bookingEndTime = "".concat(n, " ").concat(a, ":").concat(o)
                            },
                            onBookingEndColumnChange: function(t) {
                                var e = t.detail.column,
                                    n = t.detail.value;
                                this.bookingEndIndex[e] = n
                            },
                            onEntranceStartTimeChange: function(t) {
                                var e = t.detail.value;
                                this.entranceStartIndex = e;
                                var n = this.timePickerData[0][e[0]],
                                    a = this.timePickerData[1][e[1]],
                                    o = this.timePickerData[2][e[2]];
                                this.formData.entranceStartTime = "".concat(n, " ").concat(a, ":").concat(o)
                            },
                            onEntranceStartColumnChange: function(t) {
                                var e = t.detail.column,
                                    n = t.detail.value;
                                this.entranceStartIndex[e] = n
                            },
                            onEntranceEndTimeChange: function(t) {
                                var e = t.detail.value;
                                this.entranceEndIndex = e;
                                var n = this.timePickerData[0][e[0]],
                                    a = this.timePickerData[1][e[1]],
                                    o = this.timePickerData[2][e[2]];
                                this.formData.entranceEndTime = "".concat(n, " ").concat(a, ":").concat(o)
                            },
                            onEntranceEndColumnChange: function(t) {
                                var e = t.detail.column,
                                    n = t.detail.value;
                                this.entranceEndIndex[e] = n
                            },
                            validateForm: function() {
                                if (!this.formData.bookingStartTime) return t.showToast({
                                    title: "请选择预约开始时间",
                                    icon: "none"
                                }), !1;
                                if (!this.formData.bookingEndTime) return t.showToast({
                                    title: "请选择预约结束时间",
                                    icon: "none"
                                }), !1;
                                if (!this.formData.entranceStartTime) return t.showToast({
                                    title: "请选择入场开始时间",
                                    icon: "none"
                                }), !1;
                                if (!this.formData.entranceEndTime) return t.showToast({
                                    title: "请选择入场结束时间",
                                    icon: "none"
                                }), !1;
                                if (!this.formData.num || this.formData.num <= 0) return t.showToast({
                                    title: "请输入有效的预约数量",
                                    icon: "none"
                                }), !1;
                                if (1 === this.formData.fenceFlag) {
                                    var e = Number(this.formData.fenceDistance);
                                    if (!this.formData.fenceDistance || isNaN(e) || e <= 0) return t.showToast({
                                        title: "请输入有效的围栏距离",
                                        icon: "none"
                                    }), !1;
                                    if (e < 10 || e > 1e4) return t.showToast({
                                        title: "围栏距离需在 10 - 10000 米之间",
                                        icon: "none"
                                    }), !1
                                }
                                return !(this.formData.bookingStartTime >= this.formData.bookingEndTime && (t.showToast({
                                    title: "预约结束时间必须大于开始时间",
                                    icon: "none"
                                }), 1))
                            },
                            onSwitchChange: function(t) {
                                this.formData.canTotalNum = t.detail.value
                            },
                            onFenceFlagChange: function(t) {
                                this.formData.fenceFlag = t.detail.value ? 1 : 0, 1 !== this.formData.fenceFlag || this.formData.fenceDistance || (this.formData.fenceDistance = 200)
                            },
                            handlePreview: function() {
                                this.validateForm() && (this.previewData = {
                                    storeName: this.formData.storeName,
                                    shoppeName: this.formData.shoppeName,
                                    bookingStartTime: this.formData.bookingStartTime,
                                    bookingEndTime: this.formData.bookingEndTime,
                                    entranceStartTime: this.formData.entranceStartTime,
                                    entranceEndTime: this.formData.entranceEndTime,
                                    num: this.formData.num,
                                    canTotalNum: this.formData.canTotalNum,
                                    fenceFlag: this.formData.fenceFlag,
                                    fenceDistance: this.formData.fenceDistance
                                }, this.showPreview = !0)
                            },
                            closePreview: function() {
                                this.showPreview = !1
                            },
                            maskClick: function() {},
                            handleSubmit: function() {
                                var e = this;
                                t.showLoading({
                                    title: "提交中..."
                                });
                                var n = t.getStorageSync("employeeToken");
                                if (!n) return t.hideLoading(), t.showToast({
                                    title: "请先登录",
                                    icon: "none"
                                }), void setTimeout((function() {
                                    a.default.goEmployeeLogin()
                                }), 1500);
                                var i = {
                                    storeCode: this.formData.storeCode,
                                    shoppeCode: this.formData.shoppeCode,
                                    bookingStartTime: this.formData.bookingStartTime,
                                    bookingEndTime: this.formData.bookingEndTime,
                                    entranceStartTime: this.formData.entranceStartTime,
                                    entranceEndTime: this.formData.entranceEndTime,
                                    num: parseInt(this.formData.num),
                                    canTotalNum: this.formData.canTotalNum,
                                    fenceFlag: this.formData.fenceFlag,
                                    fenceDistance: 1 === this.formData.fenceFlag ? Number(this.formData.fenceDistance) : 0
                                };
                                a.default.request({
                                    url: o.addBookingRule,
                                    method: "POST",
                                    header: {
                                        "Content-Type": "application/json",
                                        Authorization: "Bearer " + n
                                    },
                                    data: i
                                }).then((function(n) {
                                    t.hideLoading(), n.data && 200 === n.data.code ? (t.showToast({
                                        title: "添加成功",
                                        icon: "success"
                                    }), e.closePreview(), setTimeout((function() {
                                        t.navigateBack()
                                    }), 1500)) : t.showToast({
                                        title: n.data.msg || "添加失败",
                                        icon: "none",
                                        duration: 2e3
                                    })
                                })).catch((function(e) {
                                    t.hideLoading(), e && 401 !== e.code && (console.error("请求失败:", e), t.showToast({
                                        title: "网络请求失败",
                                        icon: "none",
                                        duration: 2e3
                                    }))
                                }))
                            },
                            handleCancel: function() {
                                t.navigateBack()
                            }
                        }
                    }
                }).call(this, n("543d").default)
            },
            b594: function(t, e, n) {
                n.r(e);
                var a = n("f86e"),
                    o = n("4786");
                for (var i in o)["default"].indexOf(i) < 0 && function(t) {
                    n.d(e, t, (function() {
                        return o[t]
                    }))
                }(i);
                n("f192");
                var r = n("f0c5"),
                    c = Object(r.a)(o.default, a.b, a.c, !1, null, "4c76cf95", null, !1, a.a, void 0);
                e.default = c.exports
            },
            f192: function(t, e, n) {
                var a = n("650e");
                n.n(a).a
            },
            f86e: function(t, e, n) {
                n.d(e, "b", (function() {
                    return a
                })), n.d(e, "c", (function() {
                    return o
                })), n.d(e, "a", (function() {}));
                var a = function() {
                        this.$createElement;
                        this._self._c
                    },
                    o = []
            }
        },
        [
            ["a8c8", "common/runtime", "common/vendor", "packageExternal/common/vendor"]
        ]
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packageExternal/modelEmployee/addrule/addrule.js'
});
require("packageExternal/modelEmployee/addrule/addrule.js");