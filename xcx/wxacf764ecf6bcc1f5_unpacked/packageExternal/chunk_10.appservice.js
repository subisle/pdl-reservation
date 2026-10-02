$gwx18_XC_2 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx18_XC_2 || [];

        function gz$gwx18_XC_2_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx18_XC_2_1) return __WXML_GLOBAL__.ops_cached.$gwx18_XC_2_1
            __WXML_GLOBAL__.ops_cached.$gwx18_XC_2_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'container data-v-70414124'])
                Z([3, 'companion-list data-v-70414124'])
                Z([
                    [7],
                    [3, 'isLoading']
                ])
                Z([
                    [2, '==='],
                    [
                        [6],
                        [
                            [7],
                            [3, '$root']
                        ],
                        [3, 'g0']
                    ],
                    [1, 0]
                ])
                Z([3, 'gIdx'])
                Z([3, 'group'])
                Z([
                    [6],
                    [
                        [7],
                        [3, '$root']
                    ],
                    [3, 'l1']
                ])
                Z(z[4])
                Z([3, 'iIdx'])
                Z([3, 'item'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'group']
                    ],
                    [3, 'l0']
                ])
                Z([3, 'id'])
                Z([
                    [6],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, '$orig']
                    ],
                    [3, 'locked']
                ])
                Z([
                    [7],
                    [3, 'showModal']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx18_XC_2_1);
            return __WXML_GLOBAL__.ops_cached.$gwx18_XC_2_1
        }
        __WXML_GLOBAL__.ops_set.$gwx18_XC_2 = z;
        __WXML_GLOBAL__.ops_init.$gwx18_XC_2 = true;
        var x = ['./packageExternal/moduleMarket/companion/companion.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx18_XC_2_1()
            var aL = _n('view')
            _rz(z, aL, 'class', 0, e, s, gg)
            var eN = _n('view')
            _rz(z, eN, 'class', 1, e, s, gg)
            var bO = _v()
            _(eN, bO)
            if (_oz(z, 2, e, s, gg)) {
                bO.wxVkey = 1
            } else {
                bO.wxVkey = 2
                var oP = _v()
                _(bO, oP)
                if (_oz(z, 3, e, s, gg)) {
                    oP.wxVkey = 1
                } else {
                    oP.wxVkey = 2
                    var xQ = _v()
                    _(oP, xQ)
                    var oR = function(cT, fS, hU, gg) {
                        var cW = _v()
                        _(hU, cW)
                        var oX = function(aZ, lY, t1, gg) {
                            var b3 = _v()
                            _(t1, b3)
                            if (_oz(z, 12, aZ, lY, gg)) {
                                b3.wxVkey = 1
                            }
                            b3.wxXCkey = 1
                            return t1
                        }
                        cW.wxXCkey = 2
                        _2z(z, 10, oX, cT, fS, gg, cW, 'item', 'iIdx', 'id')
                        return hU
                    }
                    xQ.wxXCkey = 2
                    _2z(z, 6, oR, e, s, gg, xQ, 'group', 'gIdx', 'gIdx')
                }
                oP.wxXCkey = 1
            }
            bO.wxXCkey = 1
            _(aL, eN)
            var tM = _v()
            _(aL, tM)
            if (_oz(z, 13, e, s, gg)) {
                tM.wxVkey = 1
            }
            tM.wxXCkey = 1
            _(r, aL)
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
                g = "$gwx18_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx18_XC_2();
if (__vd_version_info__.delayedGwx) __wxAppCode__['packageExternal/moduleMarket/companion/companion.wxml'] = [$gwx18_XC_2, './packageExternal/moduleMarket/companion/companion.wxml'];
else __wxAppCode__['packageExternal/moduleMarket/companion/companion.wxml'] = $gwx18_XC_2('./packageExternal/moduleMarket/companion/companion.wxml');;
__wxRoute = "packageExternal/moduleMarket/companion/companion";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "packageExternal/moduleMarket/companion/companion.js";
define("packageExternal/moduleMarket/companion/companion.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../../@babel/runtime/helpers/Objectvalues");
    var t = require("../../../@babel/runtime/helpers/typeof");
    require("../../common/vendor.js"), (global.webpackJsonp = global.webpackJsonp || []).push([
        ["packageExternal/moduleMarket/companion/companion"], {
            "0776": function(n, e, o) {
                (function(n) {
                    function i(n) {
                        return (i = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(n) {
                            return t(n)
                        } : function(n) {
                            return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : t(n)
                        })(n)
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.default = void 0;
                    var a = function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }(o("8bd1"));

                    function r(t, n) {
                        var e = Object.keys(t);
                        if (Object.getOwnPropertySymbols) {
                            var o = Object.getOwnPropertySymbols(t);
                            n && (o = o.filter((function(n) {
                                return Object.getOwnPropertyDescriptor(t, n).enumerable
                            }))), e.push.apply(e, o)
                        }
                        return e
                    }

                    function c(t) {
                        for (var n = 1; n < arguments.length; n++) {
                            var e = null != arguments[n] ? arguments[n] : {};
                            n % 2 ? r(Object(e), !0).forEach((function(n) {
                                l(t, n, e[n])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : r(Object(e)).forEach((function(n) {
                                Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
                            }))
                        }
                        return t
                    }

                    function l(t, n, e) {
                        return (n = function(t) {
                            var n = function(t, n) {
                                if ("object" != i(t) || !t) return t;
                                var e = t[Symbol.toPrimitive];
                                if (void 0 !== e) {
                                    var o = e.call(t, n || "default");
                                    if ("object" != i(o)) return o;
                                    throw new TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === n ? String : Number)(t)
                            }(t, "string");
                            return "symbol" == i(n) ? n : n + ""
                        }(n)) in t ? Object.defineProperty(t, n, {
                            value: e,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = e, t
                    }

                    function u(t, n) {
                        var e = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (!e) {
                            if (Array.isArray(t) || (e = function(t, n) {
                                    if (t) {
                                        if ("string" == typeof t) return s(t, n);
                                        var e = {}.toString.call(t).slice(8, -1);
                                        return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? s(t, n) : void 0
                                    }
                                }(t)) || n && t && "number" == typeof t.length) {
                                e && (t = e);
                                var o = 0,
                                    i = function() {};
                                return {
                                    s: i,
                                    n: function() {
                                        return o >= t.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: t[o++]
                                        }
                                    },
                                    e: function(t) {
                                        throw t
                                    },
                                    f: i
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var a, r = !0,
                            c = !1;
                        return {
                            s: function() {
                                e = e.call(t)
                            },
                            n: function() {
                                var t = e.next();
                                return r = t.done, t
                            },
                            e: function(t) {
                                c = !0, a = t
                            },
                            f: function() {
                                try {
                                    r || null == e.return || e.return()
                                } finally {
                                    if (c) throw a
                                }
                            }
                        }
                    }

                    function s(t, n) {
                        (null == n || n > t.length) && (n = t.length);
                        for (var e = 0, o = Array(n); e < n; e++) o[e] = t[e];
                        return o
                    }
                    var d = o("5281"),
                        m = {
                            "家属": {
                                type: "family",
                                name: "家属",
                                iconSvg: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTEyIDIxLjM1bC0xLjQ1LTEuMzJDNS40IDE1LjM2IDIgMTIuMjggMiA4LjUgMiA1LjQyIDQuNDIgMyA3LjUgM2MxLjc0IDAgMy40MS44MSA0LjUgMi4wOUMxMy4wOSAzLjgxIDE0Ljc2IDMgMTYuNSAzIDE5LjU4IDMgMjIgNS40MiAyMiA4LjVjMCAzLjc4LTMuNCA2Ljg2LTguNTUgMTEuNTRMMTIgMjEuMzV6Ii8+PC9zdmc+",
                                order: 0
                            },
                            "朋友": {
                                type: "friend",
                                name: "朋友",
                                iconSvg: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTEyIDJMMTUuMDkgOC4yNiAyMiA5LjI3IDE3IDE0LjE0IDE4LjE4IDIxLjAyIDEyIDE3Ljc3IDUuODIgMjEuMDIgNyAxNC4xNCAyIDkuMjcgOC45MSA4LjI2eiIvPjwvc3ZnPg==",
                                order: 1
                            },
                            "其他": {
                                type: "other",
                                name: "其他",
                                iconSvg: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2ZmZiI+PGNpcmNsZSBjeD0iOCIgY3k9IjgiIHI9IjMiLz48Y2lyY2xlIGN4PSIxOCIgY3k9IjkiIHI9IjIuNSIvPjxwYXRoIGQ9Ik0xIDE5YzAtMyAzLTYgNy02czcgMyA3IDZIMXoiLz48cGF0aCBkPSJNMTMgMTljMC0yLjUgMi4yLTQuNSA1LTQuNXM0LjUgMiA0LjUgNC41SDEzeiIvPjwvc3ZnPg==",
                                order: 2
                            }
                        };
                    e.default = {
                        data: function() {
                            return {
                                isLoading: !1,
                                companionList: [],
                                companionLimit: 2,
                                showModal: !1,
                                modalMode: "add",
                                formData: {
                                    id: null,
                                    name: "",
                                    mobile: "",
                                    relation: "家属"
                                },
                                relationOptions: ["家属", "朋友", "其他"],
                                currentRelationIndex: 0
                            }
                        },
                        computed: {
                            groupedList: function() {
                                var t, n = {},
                                    e = u(this.companionList);
                                try {
                                    for (e.s(); !(t = e.n()).done;) {
                                        var o = t.value,
                                            i = o.relation || "其他";
                                        if (!n[i]) {
                                            var a = m[i] || m["其他"];
                                            n[i] = c(c({}, a), {}, {
                                                items: []
                                            })
                                        }
                                        n[i].items.push(o)
                                    }
                                } catch (t) {
                                    e.e(t)
                                } finally {
                                    e.f()
                                }
                                return Object.values(n).sort((function(t, n) {
                                    return t.order - n.order
                                }))
                            }
                        },
                        onLoad: function() {
                            this.loadCompanionList()
                        },
                        methods: {
                            loadCompanionList: function() {
                                var t = this;
                                this.isLoading = !0;
                                var e = a.default.getToken();
                                n.request({
                                    url: d.companionlist,
                                    method: "POST",
                                    data: {
                                        token: e
                                    },
                                    success: function(e) {
                                        var o = e.data;
                                        200 == o.code ? (t.companionList = o.data.list || [], o.data.companionLimit > 0 && (t.companionLimit = o.data.companionLimit)) : n.showToast({
                                            title: o.msg || "加载失败",
                                            icon: "none"
                                        })
                                    },
                                    fail: function() {
                                        n.showToast({
                                            title: "网络异常",
                                            icon: "none"
                                        })
                                    },
                                    complete: function() {
                                        t.isLoading = !1
                                    }
                                })
                            },
                            openAddModal: function() {
                                this.companionList.length >= this.companionLimit ? n.showToast({
                                    title: "最多只能添加" + this.companionLimit + "位常用联系人",
                                    icon: "none"
                                }) : (this.modalMode = "add", this.formData = {
                                    id: null,
                                    name: "",
                                    mobile: "",
                                    relation: "家属"
                                }, this.currentRelationIndex = 0, this.showModal = !0)
                            },
                            openEditModal: function(t) {
                                t.locked ? n.showToast({
                                    title: "添加后 7 天内不可变更，还剩" + t.lockRemainDays + "天解锁",
                                    icon: "none"
                                }) : (this.modalMode = "edit", this.formData = {
                                    id: t.id,
                                    name: t.name || "",
                                    mobile: t.mobile || "",
                                    relation: t.relation || "家属"
                                }, this.currentRelationIndex = this.relationOptions.indexOf(this.formData.relation), this.currentRelationIndex < 0 && (this.currentRelationIndex = 2), this.showModal = !0)
                            },
                            closeModal: function() {
                                this.showModal = !1
                            },
                            onRelationChange: function(t) {
                                this.currentRelationIndex = t.detail.value, this.formData.relation = this.relationOptions[this.currentRelationIndex]
                            },
                            submitForm: function() {
                                var t = this;
                                if (this.formData.name && this.formData.name.trim())
                                    if (this.formData.mobile && this.formData.mobile.trim() && !/^1\d{10}$/.test(this.formData.mobile.trim())) n.showToast({
                                        title: "手机号格式不正确",
                                        icon: "none"
                                    });
                                    else if (this.formData.relation) {
                                    var e = {
                                        token: a.default.getToken(),
                                        action: "add" === this.modalMode ? "add" : "edit",
                                        name: this.formData.name.trim(),
                                        mobile: this.formData.mobile ? this.formData.mobile.trim() : "",
                                        relation: this.formData.relation
                                    };
                                    "edit" === this.modalMode && (e.companionId = this.formData.id), n.request({
                                        url: d.companionedit,
                                        method: "POST",
                                        data: e,
                                        success: function(e) {
                                            var o = e.data;
                                            200 == o.code ? (n.showToast({
                                                title: o.msg,
                                                icon: "success"
                                            }), t.closeModal(), t.loadCompanionList()) : n.showToast({
                                                title: o.msg || "操作失败",
                                                icon: "none"
                                            })
                                        },
                                        fail: function() {
                                            n.showToast({
                                                title: "网络异常",
                                                icon: "none"
                                            })
                                        }
                                    })
                                } else n.showToast({
                                    title: "请选择关系",
                                    icon: "none"
                                });
                                else n.showToast({
                                    title: "请输入姓名",
                                    icon: "none"
                                })
                            },
                            deleteCompanion: function(t) {
                                var e = this;
                                t.locked ? n.showToast({
                                    title: "添加后 7 天内不可删除，还剩" + t.lockRemainDays + "天解锁",
                                    icon: "none"
                                }) : n.showModal({
                                    title: "确认删除",
                                    content: '确定要删除随行人员"'.concat(t.name, '"吗？'),
                                    success: function(o) {
                                        if (o.confirm) {
                                            var i = a.default.getToken();
                                            n.request({
                                                url: d.companionedit,
                                                method: "POST",
                                                data: {
                                                    token: i,
                                                    action: "delete",
                                                    companionId: t.id
                                                },
                                                success: function(t) {
                                                    var o = t.data;
                                                    200 == o.code ? (n.showToast({
                                                        title: o.msg,
                                                        icon: "success"
                                                    }), e.loadCompanionList()) : n.showToast({
                                                        title: o.msg || "删除失败",
                                                        icon: "none"
                                                    })
                                                },
                                                fail: function() {
                                                    n.showToast({
                                                        title: "网络异常",
                                                        icon: "none"
                                                    })
                                                }
                                            })
                                        }
                                    }
                                })
                            }
                        }
                    }
                }).call(this, o("543d").default)
            },
            "298c": function(t, n, e) {},
            3531: function(t, n, e) {
                (function(t, n) {
                    e("6cdc"), i(e("66fd"));
                    var o = i(e("6667"));

                    function i(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }
                    t.__webpack_require_UNI_MP_PLUGIN__ = e, n(o.default)
                }).call(this, e("bc2e").default, e("543d").createPage)
            },
            3791: function(t, n, e) {
                var o = e("298c");
                e.n(o).a
            },
            "5b51": function(t, n, e) {
                e.r(n);
                var o = e("0776"),
                    i = e.n(o);
                for (var a in o)["default"].indexOf(a) < 0 && function(t) {
                    e.d(n, t, (function() {
                        return o[t]
                    }))
                }(a);
                n.default = i.a
            },
            6667: function(t, n, e) {
                e.r(n);
                var o = e("de94"),
                    i = e("5b51");
                for (var a in i)["default"].indexOf(a) < 0 && function(t) {
                    e.d(n, t, (function() {
                        return i[t]
                    }))
                }(a);
                e("3791");
                var r = e("f0c5"),
                    c = Object(r.a)(i.default, o.b, o.c, !1, null, "70414124", null, !1, o.a, void 0);
                n.default = c.exports
            },
            de94: function(t, n, e) {
                e.d(n, "b", (function() {
                    return o
                })), e.d(n, "c", (function() {
                    return i
                })), e.d(n, "a", (function() {}));
                var o = function() {
                        var t = this,
                            n = (t.$createElement, t._self._c, t.isLoading ? null : t.companionList.length),
                            e = t.isLoading || 0 === n ? null : t.__map(t.groupedList, (function(n, e) {
                                return {
                                    $orig: t.__get_orig(n),
                                    g1: n.items.length,
                                    l0: t.__map(n.items, (function(n, e) {
                                        return {
                                            $orig: t.__get_orig(n),
                                            g2: n.name ? n.name.charAt(0) : null
                                        }
                                    }))
                                }
                            }));
                        t._isMounted || (t.e0 = function(n) {
                            t.formData.name = n.detail.value
                        }, t.e1 = function(n) {
                            t.formData.mobile = n.detail.value
                        }), t.$mp.data = Object.assign({}, {
                            $root: {
                                g0: n,
                                l1: e
                            }
                        })
                    },
                    i = []
            }
        },
        [
            ["3531", "common/runtime", "common/vendor", "packageExternal/common/vendor"]
        ]
    ]);
}, {
    isPage: true,
    isComponent: true,
    currentFile: 'packageExternal/moduleMarket/companion/companion.js'
});
require("packageExternal/moduleMarket/companion/companion.js");