/*v0.5vv_20211229_syb_scopedata*/
global.__wcc_version__ = 'v0.5vv_20211229_syb_scopedata';
global.__wcc_version_info__ = {
    "customComponents": true,
    "fixZeroRpx": true,
    "propValueDeepCopy": false
};
var $gwxc
var $gaic = {}
$gwx15 = function(_, _v, _n, _p, _s, _wp, _wl, $gwn, $gwl, $gwh, wh, $gstack, $gwrt, gra, grb, TestTest, wfor, _ca, _da, _r, _rz, _o, _oz, _1, _1z, _2, _2z, _m, _mz, nv_getDate, nv_getRegExp, nv_console, nv_parseInt, nv_parseFloat, nv_isNaN, nv_isFinite, nv_decodeURI, nv_decodeURIComponent, nv_encodeURI, nv_encodeURIComponent, $gdc, nv_JSON, _af, _gv, _ai, _grp, _gd, _gapi, $ixc, _ic, _w, _ev, _tsd) {
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
        var z = __WXML_GLOBAL__.ops_set.$gwx15 || [];
        __WXML_GLOBAL__.ops_set.$gwx15 = z;
        __WXML_GLOBAL__.ops_init.$gwx15 = true;
        var nv_require = function() {
            var nnm = {
                "p_./packageAssets/coupon/coupon/components/ADMovable/ADMovable.wxs": np_0,
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
        f_['./packageAssets/coupon/coupon/components/ADMovable/ADMovable.wxml'] = {};
        f_['./packageAssets/coupon/coupon/components/ADMovable/ADMovable.wxml']['test'] = f_['./packageAssets/coupon/coupon/components/ADMovable/ADMovable.wxs'] || nv_require("p_./packageAssets/coupon/coupon/components/ADMovable/ADMovable.wxs");
        f_['./packageAssets/coupon/coupon/components/ADMovable/ADMovable.wxml']['test']();

        f_['./packageAssets/coupon/coupon/components/ADMovable/ADMovable.wxs'] = nv_require("p_./packageAssets/coupon/coupon/components/ADMovable/ADMovable.wxs");

        function np_0() {
            var nv_module = {
                nv_exports: {}
            };
            var nv_startX = 0;
            var nv_startY = 0;
            var nv_lastLeft = 0;
            var nv_lastTop = 0;
            var nv_width = 0;
            var nv_height = 0;
            var nv_windowWidth = 0;
            var nv_windowHeight = 0;
            var nv_topHeight = 0;
            var nv_bottomHeight = 0;

            function nv_touchstart(nv_event, nv_ins) {
                var nv_dataset = nv_ins.nv_selectComponent('.ad-movable').nv_getDataset();
                var nv_touch = nv_event.nv_touches[(0)] || nv_event.nv_changedTouches[(0)];
                nv_startX = nv_touch.nv_pageX;
                nv_startY = nv_touch.nv_pageY;
                nv_width = nv_dataset.nv_width;
                nv_height = nv_dataset.nv_height;
                nv_windowWidth = nv_dataset.nv_windowWidth;
                nv_windowHeight = nv_dataset.nv_windowHeight;
                nv_topHeight = nv_dataset.nv_topHeight;
                nv_bottomHeight = nv_dataset.nv_bottomHeight;
                if (nv_lastTop === 0 && nv_lastLeft === 0) {
                    nv_lastLeft = nv_dataset.nv_left;
                    nv_lastTop = nv_dataset.nv_top
                }
            };

            function nv_touchmove(nv_event, nv_ins) {
                var nv_touch = nv_event.nv_touches[(0)] || nv_event.nv_changedTouches[(0)];
                var nv_pageX = nv_touch.nv_pageX;
                var nv_pageY = nv_touch.nv_pageY;
                var nv_left = nv_pageX - nv_startX + nv_lastLeft;
                var nv_top = nv_pageY - nv_startY + nv_lastTop;
                nv_left = nv_left >= nv_windowWidth - nv_width ? nv_windowWidth - nv_width : nv_left;
                nv_left = nv_left < 0 ? 0 : nv_left;
                nv_top = nv_top >= nv_windowHeight - nv_height - nv_bottomHeight ? nv_windowHeight - nv_height - nv_bottomHeight : nv_top;
                nv_top = nv_top < nv_topHeight ? nv_topHeight : nv_top;
                nv_ins.nv_selectComponent('.ad-movable').nv_setStyle(({
                    nv_left: nv_left + 'px',
                    nv_top: nv_top + 'px',
                }))
            };

            function nv_touchend(nv_event, nv_ins) {
                var nv_dataset = nv_ins.nv_selectComponent('.ad-movable').nv_getDataset();
                var nv_touch = nv_event.nv_touches[(0)] || nv_event.nv_changedTouches[(0)];
                var nv_pageY = nv_touch.nv_pageY;
                var nv_top = nv_pageY - nv_startY + nv_lastTop;
                nv_top = nv_top >= nv_windowHeight - nv_height - nv_bottomHeight ? nv_windowHeight - nv_height - nv_bottomHeight : nv_top;
                nv_top = nv_top < nv_topHeight ? nv_topHeight : nv_top;
                nv_lastLeft = nv_dataset.nv_left;
                nv_lastTop = nv_top;
                nv_ins.nv_selectComponent('.ad-movable').nv_setStyle(({
                    nv_left: nv_dataset.nv_left + 'px',
                    nv_top: nv_top + 'px',
                }))
            };
            nv_module.nv_exports = ({
                nv_touchstart: nv_touchstart,
                nv_touchmove: nv_touchmove,
                nv_touchend: nv_touchend,
            });
            return nv_module.nv_exports;
        }

        var x = [];
        if (path && e_[path]) {
            return function(env, dd, global) {
                $gwxc = 0;
                var root = {
                    "tag": "wx-page"
                };
                root.children = [];
                g = "$gwx15";
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
if (__vd_version_info__.delayedGwx || true) $gwx15();;
__wxRoute = undefined;
__wxRouteBegin = undefined;
__wxAppCurrentFile__ = undefined;
define("packageAssets/common/vendor.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../@babel/runtime/helpers/Arrayincludes");
    var t = require("../../@babel/runtime/helpers/typeof");
    (global.webpackJsonp = global.webpackJsonp || []).push([
        ["packageAssets/common/vendor"], {
            "0307": function(e, n, r) {
                function o(e) {
                    return (o = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                        return t(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                    })(e)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var i = function() {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function(e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    u = function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }(r("030c")),
                    a = r("64e4");
                var c = function(t) {
                    function e(t, n) {
                        return function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, e),
                            function(t, e) {
                                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !e || "object" !== o(e) && "function" != typeof e ? t : e
                            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, a.A_START_CHAR + t, n))
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + o(e));
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(e, t), i(e, [{
                        key: "valid",
                        value: function() {
                            return new RegExp("^" + a.A_CHARS + "+$").test(this.data)
                        }
                    }]), e
                }(u.default);
                n.default = c
            },
            "030c": function(e, n, r) {
                function o(e) {
                    return (o = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                        return t(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                    })(e)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var i = function() {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function(e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    u = c(r("d6c6")),
                    a = r("64e4");

                function c(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function f(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" !== o(e) && "function" != typeof e ? t : e
                }
                var s = function(t) {
                    function e(t, n) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        var r = f(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t.substring(1), n));
                        return r.bytes = t.split("").map((function(t) {
                            return t.charCodeAt(0)
                        })), r
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + o(e));
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(e, t), i(e, [{
                        key: "valid",
                        value: function() {
                            return /^[\x00-\x7F\xC8-\xD3]+$/.test(this.data)
                        }
                    }, {
                        key: "encode",
                        value: function() {
                            var t = this.bytes,
                                n = t.shift() - 105,
                                r = a.SET_BY_CODE[n];
                            if (void 0 === r) throw new RangeError("The encoding does not start with a start character.");
                            !0 === this.shouldEncodeAsEan128() && t.unshift(a.FNC1);
                            var o = e.next(t, 1, r);
                            return {
                                text: this.text === this.data ? this.text.replace(/[^\x20-\x7E]/g, "") : this.text,
                                data: e.getBar(n) + o.result + e.getBar((o.checksum + n) % a.MODULO) + e.getBar(a.STOP)
                            }
                        }
                    }, {
                        key: "shouldEncodeAsEan128",
                        value: function() {
                            var t = this.options.ean128 || !1;
                            return "string" == typeof t && (t = "true" === t.toLowerCase()), t
                        }
                    }], [{
                        key: "getBar",
                        value: function(t) {
                            return a.BARS[t] ? a.BARS[t].toString() : ""
                        }
                    }, {
                        key: "correctIndex",
                        value: function(t, e) {
                            if (e === a.SET_A) {
                                var n = t.shift();
                                return n < 32 ? n + 64 : n - 32
                            }
                            return e === a.SET_B ? t.shift() - 32 : 10 * (t.shift() - 48) + t.shift() - 48
                        }
                    }, {
                        key: "next",
                        value: function(t, n, r) {
                            if (!t.length) return {
                                result: "",
                                checksum: 0
                            };
                            var o = void 0,
                                i = void 0;
                            if (t[0] >= 200) {
                                i = t.shift() - 105;
                                var u = a.SWAP[i];
                                void 0 !== u ? o = e.next(t, n + 1, u) : (r !== a.SET_A && r !== a.SET_B || i !== a.SHIFT || (t[0] = r === a.SET_A ? t[0] > 95 ? t[0] - 96 : t[0] : t[0] < 32 ? t[0] + 96 : t[0]), o = e.next(t, n + 1, r))
                            } else i = e.correctIndex(t, r), o = e.next(t, n + 1, r);
                            var c = i * n;
                            return {
                                result: e.getBar(i) + o.result,
                                checksum: c + o.checksum
                            }
                        }
                    }]), e
                }(u.default);
                n.default = s
            },
            "0675": function(e, n, r) {
                function o(e) {
                    return (o = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                        return t(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                    })(e)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var i = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }();
                n.checksum = s;
                var u = a(r("3971"));

                function a(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function c(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" !== o(e) && "function" != typeof e ? t : e
                }
                var f = function(t) {
                    function e(t, n) {
                        (function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        })(this, e), -1 !== t.search(/^[0-9]{11}$/) && (t += s(t));
                        var r = c(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                        return r.displayValue = n.displayValue, n.fontSize > 10 * n.width ? r.fontSize = 10 * n.width : r.fontSize = n.fontSize, r.guardHeight = n.height + r.fontSize / 2 + n.textMargin, r
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + o(e));
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(e, t), i(e, [{
                        key: "valid",
                        value: function() {
                            return -1 !== this.data.search(/^[0-9]{12}$/) && this.data[11] == s(this.data)
                        }
                    }, {
                        key: "encode",
                        value: function() {
                            return this.options.flat ? this.flatEncoding() : this.guardedEncoding()
                        }
                    }, {
                        key: "flatEncoding",
                        value: function() {
                            var t = "";
                            return t += "101", t += (0, u.default)(this.data.substr(0, 6), "LLLLLL"), t += "01010", t += (0, u.default)(this.data.substr(6, 6), "RRRRRR"), {
                                data: t += "101",
                                text: this.text
                            }
                        }
                    }, {
                        key: "guardedEncoding",
                        value: function() {
                            var t = [];
                            return this.displayValue && t.push({
                                data: "00000000",
                                text: this.text.substr(0, 1),
                                options: {
                                    textAlign: "left",
                                    fontSize: this.fontSize
                                }
                            }), t.push({
                                data: "101" + (0, u.default)(this.data[0], "L"),
                                options: {
                                    height: this.guardHeight
                                }
                            }), t.push({
                                data: (0, u.default)(this.data.substr(1, 5), "LLLLL"),
                                text: this.text.substr(1, 5),
                                options: {
                                    fontSize: this.fontSize
                                }
                            }), t.push({
                                data: "01010",
                                options: {
                                    height: this.guardHeight
                                }
                            }), t.push({
                                data: (0, u.default)(this.data.substr(6, 5), "RRRRR"),
                                text: this.text.substr(6, 5),
                                options: {
                                    fontSize: this.fontSize
                                }
                            }), t.push({
                                data: (0, u.default)(this.data[11], "R") + "101",
                                options: {
                                    height: this.guardHeight
                                }
                            }), this.displayValue && t.push({
                                data: "00000000",
                                text: this.text.substr(11, 1),
                                options: {
                                    textAlign: "right",
                                    fontSize: this.fontSize
                                }
                            }), t
                        }
                    }]), e
                }(a(r("d6c6")).default);

                function s(t) {
                    var e, n = 0;
                    for (e = 1; e < 11; e += 2) n += parseInt(t[e]);
                    for (e = 0; e < 11; e += 2) n += 3 * parseInt(t[e]);
                    return (10 - n % 10) % 10
                }
                n.default = f
            },
            "072f": function(t, e, n) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var r = getApp().globalData;
                e.default = {
                    data: function() {
                        return {
                            theme: r.$dmall.dmallApi.getTheme(),
                            emptyImg: r.isTemplate ? "https://img.dmallcdn.com/dshop/202105/00d5f719-8944-4de9-91f3-285aa5682f77" : "https://img.dmallcdn.com/dshop/202006/2e56e4ba-78e8-40df-aca3-cbee8b99ccff",
                            showCustomLoading: !1
                        }
                    },
                    methods: {
                        closeRulesTip: function() {
                            this.setData({
                                rulesTipShow: !1
                            })
                        }
                    }
                }
            },
            "0a06": function(e, n, r) {
                function o(e) {
                    return (o = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                        return t(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                    })(e)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var i = function() {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function(e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    u = r("1548"),
                    a = c(r("3971"));

                function c(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function f(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" !== o(e) && "function" != typeof e ? t : e
                }
                var s = function(t) {
                    function e(t, n) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        var r = f(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                        return r.fontSize = !n.flat && n.fontSize > 10 * n.width ? 10 * n.width : n.fontSize, r.guardHeight = n.height + r.fontSize / 2 + n.textMargin, r
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + o(e));
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(e, t), i(e, [{
                        key: "encode",
                        value: function() {
                            return this.options.flat ? this.encodeFlat() : this.encodeGuarded()
                        }
                    }, {
                        key: "leftText",
                        value: function(t, e) {
                            return this.text.substr(t, e)
                        }
                    }, {
                        key: "leftEncode",
                        value: function(t, e) {
                            return (0, a.default)(t, e)
                        }
                    }, {
                        key: "rightText",
                        value: function(t, e) {
                            return this.text.substr(t, e)
                        }
                    }, {
                        key: "rightEncode",
                        value: function(t, e) {
                            return (0, a.default)(t, e)
                        }
                    }, {
                        key: "encodeGuarded",
                        value: function() {
                            var t = {
                                    fontSize: this.fontSize
                                },
                                e = {
                                    height: this.guardHeight
                                };
                            return [{
                                data: u.SIDE_BIN,
                                options: e
                            }, {
                                data: this.leftEncode(),
                                text: this.leftText(),
                                options: t
                            }, {
                                data: u.MIDDLE_BIN,
                                options: e
                            }, {
                                data: this.rightEncode(),
                                text: this.rightText(),
                                options: t
                            }, {
                                data: u.SIDE_BIN,
                                options: e
                            }]
                        }
                    }, {
                        key: "encodeFlat",
                        value: function() {
                            return {
                                data: [u.SIDE_BIN, this.leftEncode(), u.MIDDLE_BIN, this.rightEncode(), u.SIDE_BIN].join(""),
                                text: this.text
                            }
                        }
                    }]), e
                }(c(r("d6c6")).default);
                n.default = s
            },
            "0a90": function(e, n, r) {
                function o(e) {
                    return (o = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                        return t(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                    })(e)
                }

                function i(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function u(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? i(Object(n), !0).forEach((function(e) {
                            a(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }

                function a(t, e, n) {
                    return (e = function(t) {
                        var e = function(t, e) {
                            if ("object" != o(t) || !t) return t;
                            var n = t[Symbol.toPrimitive];
                            if (void 0 !== n) {
                                var r = n.call(t, e || "default");
                                if ("object" != o(r)) return r;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === e ? String : Number)(t)
                        }(t, "string");
                        return "symbol" == o(e) ? e : e + ""
                    }(e)) in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.default = void 0;
                var c = getApp().globalData.$dmall,
                    f = c.ajax,
                    s = c.HOST,
                    l = c.EVT,
                    d = c.dmallApi;
                n.default = {
                    apiList: {
                        contDetail: "".concat(s.weixinapp, "/config/getConsumeDetail")
                    },
                    url: function(t) {
                        return l + this.apiList[t] || ""
                    },
                    getContDetail: function() {
                        var t = this,
                            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = d.getStorageSync("platformInfo") || {},
                            r = n.platform;
                        return new Promise((function(n, o) {
                            f.request({
                                url: t.url("contDetail"),
                                data: u({
                                    platform: r
                                }, e),
                                callback: function(t) {
                                    "0000" === t.code ? n(t) : o(t)
                                }
                            })
                        }))
                    }
                }
            },
            "0b40": function(e, n, r) {
                function o(e) {
                    return (o = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                        return t(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                    })(e)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var i = a(r("030c")),
                    u = a(r("e05d"));

                function a(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function c(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" !== o(e) && "function" != typeof e ? t : e
                }
                var f = function(t) {
                    function e(t, n) {
                        if (function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, e), /^[\x00-\x7F\xC8-\xD3]+$/.test(t)) var r = c(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, (0, u.default)(t), n));
                        else r = c(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                        return c(r)
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + o(e));
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(e, t), e
                }(i.default);
                n.default = f
            },
            "0e74": function(t, e, n) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0, e.default = {
                    data: function() {
                        return {
                            timer: null,
                            timeStamp: (new Date).getTime()
                        }
                    },
                    onShow: function() {
                        this.clock()
                    },
                    onHide: function() {
                        clearInterval(this.timer)
                    },
                    onUnload: function() {
                        clearInterval(this.timer)
                    },
                    methods: {
                        clock: function() {
                            var t = this;
                            this.clearInterval(), this.timer = setInterval((function() {
                                t.timeStamp += 1e3
                            }), 1e3)
                        },
                        clearInterval: function(t) {
                            function e() {
                                return t.apply(this, arguments)
                            }
                            return e.toString = function() {
                                return t.toString()
                            }, e
                        }((function() {
                            this.timer && (clearInterval(this.timer), this.timer = null)
                        }))
                    }
                }
            },
            "12c3": function(e, n, r) {
                function o(e) {
                    return (o = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                        return t(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                    })(e)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.default = void 0;
                var i = function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }(r("a34a")),
                    u = r("7836");

                function a(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function c(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? a(Object(n), !0).forEach((function(e) {
                            f(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }

                function f(t, e, n) {
                    return (e = function(t) {
                        var e = function(t, e) {
                            if ("object" != o(t) || !t) return t;
                            var n = t[Symbol.toPrimitive];
                            if (void 0 !== n) {
                                var r = n.call(t, e || "default");
                                if ("object" != o(r)) return r;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === e ? String : Number)(t)
                        }(t, "string");
                        return "symbol" == o(e) ? e : e + ""
                    }(e)) in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                }

                function s(t, e, n, r, o, i, u) {
                    try {
                        var a = t[i](u),
                            c = a.value
                    } catch (t) {
                        return void n(t)
                    }
                    a.done ? e(c) : Promise.resolve(c).then(r, o)
                }

                function l(t) {
                    return function() {
                        var e = this,
                            n = arguments;
                        return new Promise((function(r, o) {
                            var i = t.apply(e, n);

                            function u(t) {
                                s(i, r, o, u, a, "next", t)
                            }

                            function a(t) {
                                s(i, r, o, u, a, "throw", t)
                            }
                            u(void 0)
                        }))
                    }
                }
                var d = getApp().globalData,
                    p = d.$dmall,
                    b = p.dmallApi,
                    h = p.ajax,
                    y = p.HOST,
                    m = p.EVT;
                n.default = {
                    apiList: {
                        paidUpMemberBenefit: "".concat(y.weixinapp, "/app/vip/paidUpMemberBenefit"),
                        paidUpMemberPurchaseRecord: "".concat(y.weixinapp, "/app/vip/paidUpMemberPurchaseRecord"),
                        createOrder: "".concat(y.memberGateway, "/paidUpMember/createOrder")
                    },
                    url: function(t) {
                        return m + this.apiList[t] || ""
                    },
                    getMemberCode: function() {
                        var t = arguments,
                            e = this;
                        return l(i.default.mark((function n() {
                            var r, o, a, c;
                            return i.default.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return r = t.length > 0 && void 0 !== t[0] ? t[0] : {}, n.next = 3, u.storeInfoNew.initStoreInfo();
                                    case 3:
                                        return o = n.sent, a = o.venderId, c = o.storeId, r.venderId = r.venderId && "undefined" !== r.venderId ? Number(r.venderId) : a, r.storeId = r.storeId && "undefined" !== r.storeId ? Number(r.storeId) : c, n.abrupt("return", new Promise((function(t) {
                                            h.request({
                                                url: e.url("paidUpMemberBenefit"),
                                                data: r,
                                                method: "POST",
                                                callback: function(e) {
                                                    t(e)
                                                }
                                            })
                                        })));
                                    case 9:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    getVipBuyRecord: function() {
                        var t = arguments,
                            e = this;
                        return l(i.default.mark((function n() {
                            var r;
                            return i.default.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return r = t.length > 0 && void 0 !== t[0] ? t[0] : {}, n.abrupt("return", new Promise((function(t) {
                                            h.request({
                                                url: e.url("paidUpMemberPurchaseRecord"),
                                                data: r,
                                                method: "POST",
                                                callback: function(e) {
                                                    t(e)
                                                }
                                            })
                                        })));
                                    case 2:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    createOrder: function() {
                        var t = arguments,
                            e = this;
                        return l(i.default.mark((function n() {
                            var r;
                            return i.default.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return r = t.length > 0 && void 0 !== t[0] ? t[0] : {}, n.abrupt("return", new Promise((function(t) {
                                            h.request({
                                                url: e.url("createOrder"),
                                                data: r,
                                                method: "POST",
                                                callback: function(e) {
                                                    t(e)
                                                }
                                            })
                                        })));
                                    case 2:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    getCmsTemplate: function(t) {
                        return l(i.default.mark((function e() {
                            var n, r, o, u, a;
                            return i.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = t.currentPage, r = t.requestUrl, o = b.getStorageSync("userInfo") || {}, u = o.userId, a = void 0 === u ? "" : u, e.abrupt("return", new Promise((function(t) {
                                            h.request({
                                                url: r,
                                                header: {
                                                    userId: a,
                                                    version: "4.2.0"
                                                },
                                                data: {
                                                    currentPage: n
                                                },
                                                callback: function(e) {
                                                    t(e)
                                                }
                                            })
                                        })));
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    getCmsAsync: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = e.layoutIds,
                            r = e.tempId,
                            o = b.getStorageSync("userInfo") || {},
                            i = o.userId,
                            u = void 0 === i ? "" : i,
                            a = o.levelInfoVO,
                            f = {
                                hideLoader: !0,
                                mainScene: d.mainScene || "",
                                currentScene: d.currentScene || "",
                                wareClassifyTabId: e.wareClassifyTabId,
                                userLevel: (null == a ? void 0 : a.level) || ""
                            };
                        return e.shipmentType && (f.shipmentType = e.shipmentType), e.specifiedStoreId && (f.specifiedStoreId = e.specifiedStoreId), new Promise((function(e, o) {
                            h.request({
                                url: t,
                                data: c({
                                    pageId: r,
                                    layoutIds: n
                                }, f),
                                method: "POST",
                                header: {
                                    version: "4.7.0",
                                    userId: u
                                },
                                callback: function(t) {
                                    "0000" === t.code && t.data ? e(t.data) : o("获取cms配置异常")
                                }
                            })
                        }))
                    }
                }
            },
            "14e4": function(t, e, n) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var r = u(n("a34a")),
                    o = u(n("a4dc")),
                    i = n("7836");

                function u(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function a(t, e, n, r, o, i, u) {
                    try {
                        var a = t[i](u),
                            c = a.value
                    } catch (t) {
                        return void n(t)
                    }
                    a.done ? e(c) : Promise.resolve(c).then(r, o)
                }
                var c = getApp().globalData.$dmall,
                    f = c.EVT,
                    s = c.HOST,
                    l = {
                        getZhuangXiuMemberDiscount: "".concat(s.cmszhuangxiu, "/memberDiscount/getMemberDiscountInfo/")
                    };
                e.default = {
                    url: function(t) {
                        return f + l[t] || ""
                    },
                    getMemberDiscount: function(t) {
                        var e = this;
                        return function(t) {
                            return function() {
                                var e = this,
                                    n = arguments;
                                return new Promise((function(r, o) {
                                    var i = t.apply(e, n);

                                    function u(t) {
                                        a(i, r, o, u, c, "next", t)
                                    }

                                    function c(t) {
                                        a(i, r, o, u, c, "throw", t)
                                    }
                                    u(void 0)
                                }))
                            }
                        }(r.default.mark((function n() {
                            var u, a;
                            return r.default.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return u = i.storeInfoNew.getCurrentStore() || {}, u.switchSystem, a = "".concat(e.url("getZhuangXiuMemberDiscount")).concat(t.layoutId, "/").concat(t.userId, "/").concat(t.currentPage), n.abrupt("return", new Promise((function(e) {
                                            o.default.request({
                                                url: a,
                                                method: "POST",
                                                data: t,
                                                callback: function(t) {
                                                    e(t)
                                                }
                                            })
                                        })));
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    }
                }
            },
            1548: function(t, e, n) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.SIDE_BIN = "101", e.MIDDLE_BIN = "01010", e.BINARIES = {
                    L: ["0001101", "0011001", "0010011", "0111101", "0100011", "0110001", "0101111", "0111011", "0110111", "0001011"],
                    G: ["0100111", "0110011", "0011011", "0100001", "0011101", "0111001", "0000101", "0010001", "0001001", "0010111"],
                    R: ["1110010", "1100110", "1101100", "1000010", "1011100", "1001110", "1010000", "1000100", "1001000", "1110100"],
                    O: ["0001101", "0011001", "0010011", "0111101", "0100011", "0110001", "0101111", "0111011", "0110111", "0001011"],
                    E: ["0100111", "0110011", "0011011", "0100001", "0011101", "0111001", "0000101", "0010001", "0001001", "0010111"]
                }, e.EAN2_STRUCTURE = ["LL", "LG", "GL", "GG"], e.EAN5_STRUCTURE = ["GGLLL", "GLGLL", "GLLGL", "GLLLG", "LGGLL", "LLGGL", "LLLGG", "LGLGL", "LGLLG", "LLGLG"], e.EAN13_STRUCTURE = ["LLLLLL", "LLGLGG", "LLGGLG", "LLGGGL", "LGLLGG", "LGGLLG", "LGGGLL", "LGLGLG", "LGLGGL", "LGGLGL"]
            },
            "207e": function(t, e, n) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.UPCE = e.UPC = e.EAN2 = e.EAN5 = e.EAN8 = e.EAN13 = void 0;
                var r = f(n("4aba")),
                    o = f(n("e5e4")),
                    i = f(n("ab86")),
                    u = f(n("62f0")),
                    a = f(n("0675")),
                    c = f(n("593f"));

                function f(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                e.EAN13 = r.default, e.EAN8 = o.default, e.EAN5 = i.default, e.EAN2 = u.default, e.UPC = a.default, e.UPCE = c.default
            },
            "2acc": function(e, n, r) {
                function o(e) {
                    return (o = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                        return t(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                    })(e)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.GenericBarcode = void 0;
                var i = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }();
                var u = function(t) {
                    function e(t, n) {
                        return function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, e),
                            function(t, e) {
                                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !e || "object" !== o(e) && "function" != typeof e ? t : e
                            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n))
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + o(e));
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(e, t), i(e, [{
                        key: "encode",
                        value: function() {
                            return {
                                data: "10101010101010101010101010101010101010101",
                                text: this.text
                            }
                        }
                    }, {
                        key: "valid",
                        value: function() {
                            return !0
                        }
                    }]), e
                }(function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(r("d6c6")).default);
                n.GenericBarcode = u
            },
            "2d62": function(e, n, r) {
                function o(e) {
                    return (o = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                        return t(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                    })(e)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var i = function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }(r("f73f")),
                    u = r("9a21");
                var a = function(t) {
                    function e(t, n) {
                        return function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, e),
                            function(t, e) {
                                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !e || "object" !== o(e) && "function" != typeof e ? t : e
                            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t + (0, u.mod10)(t), n))
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + o(e));
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(e, t), e
                }(i.default);
                n.default = a
            },
            "2e78": function(t, e, n) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.MODULE_NAME = void 0;
                e.MODULE_NAME = "超值卡"
            },
            "2e88": function(e, n, r) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.default = void 0;
                var o = a(r("23b2")),
                    i = a(r("f14f")),
                    u = a(r("07a4"));

                function a(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function c(e) {
                    return (c = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                        return t(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                    })(e)
                }

                function f(t, e) {
                    var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (!n) {
                        if (Array.isArray(t) || (n = function(t, e) {
                                if (t) {
                                    if ("string" == typeof t) return s(t, e);
                                    var n = {}.toString.call(t).slice(8, -1);
                                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(t, e) : void 0
                                }
                            }(t)) || e && t && "number" == typeof t.length) {
                            n && (t = n);
                            var r = 0,
                                o = function() {};
                            return {
                                s: o,
                                n: function() {
                                    return r >= t.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: t[r++]
                                    }
                                },
                                e: function(t) {
                                    throw t
                                },
                                f: o
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var i, u = !0,
                        a = !1;
                    return {
                        s: function() {
                            n = n.call(t)
                        },
                        n: function() {
                            var t = n.next();
                            return u = t.done, t
                        },
                        e: function(t) {
                            a = !0, i = t
                        },
                        f: function() {
                            try {
                                u || null == n.return || n.return()
                            } finally {
                                if (a) throw i
                            }
                        }
                    }
                }

                function s(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                    return r
                }

                function l(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function d(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? l(Object(n), !0).forEach((function(e) {
                            p(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }

                function p(t, e, n) {
                    return (e = function(t) {
                        var e = function(t, e) {
                            if ("object" != c(t) || !t) return t;
                            var n = t[Symbol.toPrimitive];
                            if (void 0 !== n) {
                                var r = n.call(t, e || "default");
                                if ("object" != c(r)) return r;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === e ? String : Number)(t)
                        }(t, "string");
                        return "symbol" == c(e) ? e : e + ""
                    }(e)) in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                }
                var b = ["miniprogramo2otosingle", "miniprogrammalltosingle", "presaletosingle", "reservecommallvtosingle"];
                n.default = {
                    data: function() {
                        return {
                            source: "",
                            sku: "",
                            count: ""
                        }
                    },
                    onLoad: function(t) {
                        this.setData(d(d({}, t), {}, {
                            validCardInfos: JSON.parse(t.validCardInfos)
                        })), this.checkOrderStore = "metro" === t.source ? "checkoutMetroData" : "checkoutData";
                        var e;
                        e = "DSCheckOrder" === t.source ? u.default.get("DSCheckOrderCouponData") || {} : this.getCheckoutData("coupon"), this.initCouponInfo(d({}, e))
                    },
                    methods: {
                        getCheckoutData: function(t) {
                            var e = u.default.get(this.checkOrderStore) || {};
                            if (t && "global" === t) return e.global;
                            if (!t) return e;
                            var n, r = f(e.moduleList);
                            try {
                                for (r.s(); !(n = r.n()).done;) {
                                    var o = n.value;
                                    if (t === o.moduleName) return o.data
                                }
                            } catch (t) {
                                r.e(t)
                            } finally {
                                r.f()
                            }
                        },
                        checkCoupon: function(t, e) {
                            var n = this;
                            this.showCustomLoading = !0, i.default.request("checkCoupon", t).then((function(t) {
                                n.showCustomLoading = !1, e(t)
                            })).catch((function() {
                                n.showCustomLoading = !1, e(!1)
                            }))
                        },
                        choseCoupon: function(t, e) {
                            var n = this;
                            if ("metro" === this.source) {
                                var r = this.count,
                                    o = this.sku;
                                "undefined" !== r && "undefined" !== o && (t.reqWares = [{
                                    count: r,
                                    skuId: o
                                }])
                            }
                            this.validCardInfos && this.validCardInfos.length > 0 && (t.validCardInfos = this.validCardInfos), this.allWareInfoJson && (t.allWareInfoJson = this.allWareInfoJson), this.couponExtMap && (t.couponExtMap = this.couponExtMap), this.showCustomLoading = !0, i.default.request("choseCoupon", t).then((function(t) {
                                t && t.couponExtMap && (n.couponExtMap = JSON.stringify(t.couponExtMap)), n.showCustomLoading = !1, e(t)
                            })).catch((function() {
                                n.showCustomLoading = !1, e(!1)
                            }))
                        },
                        getChoseCouponParams: function() {
                            var t = u.default.get(this.checkOrderStore) || {},
                                e = t.global,
                                n = t.moduleList,
                                r = null,
                                i = null;
                            "address" === n[0].moduleName && (i = n[0]), "shipment" === n[1].moduleName && (r = n[1]), r && i || n.forEach((function(t) {
                                "address" === t.moduleName && (i = t), "shipment" === t.moduleName && (r = t)
                            }));
                            var a = o.default.getStorageSync("platformInfo") || {},
                                c = {
                                    tradeConfId: e.tradeConfId,
                                    storeId: e.storeId,
                                    source: Number(a.platform || 9),
                                    shipmentType: r.data.shipTime.defaultShipType,
                                    shipmentDate: r.data.shipTime.currentShipTimeItem[0] ? r.data.shipTime.currentShipTimeItem[0].date : null,
                                    shipmentTime: r.data.shipTime.currentShipTimeItem[0] ? r.data.shipTime.currentShipTimeItem[0].timeList_[0].displayValue : null,
                                    timeInfoType: r.data.shipTime.currentShipTimeItem[0] ? r.data.shipTime.currentShipTimeItem[0].timeList_[0].timeInfoType : null,
                                    latitude: i.data.currentAddr ? i.data.currentAddr.latitude : "",
                                    longitude: i.data.currentAddr ? i.data.currentAddr.longitude : "",
                                    couponReqVOList: []
                                };
                            return this.performanceType && (c.performanceType = this.performanceType), this.settlementPenetrateStoreVO && (c.settlementPenetrateStoreVOStr = JSON.parse(decodeURIComponent(this.settlementPenetrateStoreVO))), e.tradeConfId && b.includes(e.tradeConfId) && e.reqWares && (c.reqWares = e.reqWares), c
                        },
                        submitCoupon: function(t) {
                            this.setCheckoutData(t, "coupon")
                        },
                        setCheckoutData: function(t, e) {
                            for (var n = u.default.get(this.checkOrderStore) || {}, r = n.moduleList, o = 0; o < r.length; ++o)
                                if (r[o].moduleName === e) return n.moduleList[o].data = t, void u.default.set(this.checkOrderStore, n)
                        }
                    }
                }
            },
            "303e": function(e, n, r) {
                function o(e) {
                    return (o = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                        return t(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                    })(e)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var i = function() {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function(e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    u = function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }(r("030c")),
                    a = r("64e4");
                var c = function(t) {
                    function e(t, n) {
                        return function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, e),
                            function(t, e) {
                                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !e || "object" !== o(e) && "function" != typeof e ? t : e
                            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, a.C_START_CHAR + t, n))
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + o(e));
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(e, t), i(e, [{
                        key: "valid",
                        value: function() {
                            return new RegExp("^" + a.C_CHARS + "+$").test(this.data)
                        }
                    }]), e
                }(u.default);
                n.default = c
            },
            3971: function(t, e, n) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var r = n("1548");
                e.default = function(t, e, n) {
                    var o = t.split("").map((function(t, n) {
                        return r.BINARIES[e[n]]
                    })).map((function(e, n) {
                        return e ? e[t[n]] : ""
                    }));
                    if (n) {
                        var i = t.length - 1;
                        o = o.map((function(t, e) {
                            return e < i ? t + n : t
                        }))
                    }
                    return o.join("")
                }
            },
            "3b77": function(e, n, r) {
                function o(e) {
                    return (o = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                        return t(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                    })(e)
                }

                function i(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function u(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? i(Object(n), !0).forEach((function(e) {
                            a(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }

                function a(t, e, n) {
                    return (e = function(t) {
                        var e = function(t, e) {
                            if ("object" != o(t) || !t) return t;
                            var n = t[Symbol.toPrimitive];
                            if (void 0 !== n) {
                                var r = n.call(t, e || "default");
                                if ("object" != o(r)) return r;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === e ? String : Number)(t)
                        }(t, "string");
                        return "symbol" == o(e) ? e : e + ""
                    }(e)) in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.default = void 0;
                var c = getApp().globalData.$dmall,
                    f = c.ajax,
                    s = c.HOST,
                    l = c.EVT,
                    d = c.dmallApi;
                n.default = {
                    apiList: {
                        getGrowth: "".concat(s.weixinapp, "/member/queryMemberGrowthDetails")
                    },
                    url: function(t) {
                        return l + this.apiList[t] || ""
                    },
                    getGrowth: function() {
                        var t = this,
                            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = d.getStorageSync("platformInfo") || {},
                            r = n.platform;
                        return new Promise((function(n, o) {
                            f.request({
                                url: t.url("getGrowth"),
                                data: u({
                                    platform: r
                                }, e),
                                callback: function(t) {
                                    "0000" === t.code ? n(t) : (d.showToast({
                                        title: "".concat(t.result, " ").concat(t.code)
                                    }), o(new Error("获取成长值明细异常")))
                                }
                            })
                        }))
                    }
                }
            },
            "414f": function(e, n, r) {
                function o(e) {
                    return (o = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                        return t(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                    })(e)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.default = void 0;
                var i = l(r("a34a")),
                    u = r("7836"),
                    a = l(r("d6f6")),
                    c = l(r("8347")),
                    f = l(r("6564")),
                    s = r("2e78");

                function l(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function d(t, e) {
                    return function(t) {
                        if (Array.isArray(t)) return t
                    }(t) || function(t, e) {
                        var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (null != n) {
                            var r, o, i, u, a = [],
                                c = !0,
                                f = !1;
                            try {
                                if (i = (n = n.call(t)).next, 0 === e) {
                                    if (Object(n) !== n) return;
                                    c = !1
                                } else
                                    for (; !(c = (r = i.call(n)).done) && (a.push(r.value), a.length !== e); c = !0);
                            } catch (t) {
                                f = !0, o = t
                            } finally {
                                try {
                                    if (!c && null != n.return && (u = n.return(), Object(u) !== u)) return
                                } finally {
                                    if (f) throw o
                                }
                            }
                            return a
                        }
                    }(t, e) || function(t, e) {
                        if (t) {
                            if ("string" == typeof t) return p(t, e);
                            var n = {}.toString.call(t).slice(8, -1);
                            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(t, e) : void 0
                        }
                    }(t, e) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function p(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                    return r
                }

                function b(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function h(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? b(Object(n), !0).forEach((function(e) {
                            y(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : b(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }

                function y(t, e, n) {
                    return (e = function(t) {
                        var e = function(t, e) {
                            if ("object" != o(t) || !t) return t;
                            var n = t[Symbol.toPrimitive];
                            if (void 0 !== n) {
                                var r = n.call(t, e || "default");
                                if ("object" != o(r)) return r;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === e ? String : Number)(t)
                        }(t, "string");
                        return "symbol" == o(e) ? e : e + ""
                    }(e)) in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                }

                function m(t, e, n, r, o, i, u) {
                    try {
                        var a = t[i](u),
                            c = a.value
                    } catch (t) {
                        return void n(t)
                    }
                    a.done ? e(c) : Promise.resolve(c).then(r, o)
                }

                function v(t) {
                    return function() {
                        var e = this,
                            n = arguments;
                        return new Promise((function(r, o) {
                            var i = t.apply(e, n);

                            function u(t) {
                                m(i, r, o, u, a, "next", t)
                            }

                            function a(t) {
                                m(i, r, o, u, a, "throw", t)
                            }
                            u(void 0)
                        }))
                    }
                }
                var g = getApp().globalData,
                    O = g.$dmall,
                    S = O.dmallApi,
                    w = O.router,
                    _ = O.pathMap,
                    E = "https://img.dmallcdn.com/dshop/202206/523d4015-45ee-4219-9cc3-b37317b4f5df",
                    C = "https://img.dmallcdn.com/dshop/202206/a7942efb-75dc-4851-8564-06a2e9896218";
                n.default = {
                    data: function() {
                        return {
                            theme: S.getTheme(),
                            cardList: [],
                            userPaidCouponCount: 0,
                            tempId: "",
                            pageStatus: 0,
                            currentPage: 1,
                            pageSize: 100,
                            hasMore: !0,
                            showLoading: !0,
                            needShare: !0,
                            dataInfo: {},
                            addressStoreInfo: {},
                            storeList: [],
                            showDialog: !1,
                            cancleFlag: !0
                        }
                    },
                    onLoad: function(t) {
                        var e = this;
                        return v(i.default.mark((function n() {
                            var r;
                            return i.default.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        S.setNavigationBarTitle({
                                            title: "省钱".concat(s.MODULE_NAME)
                                        }), r = c.default.typeSet(t), r.share ? (e.showDialog = !0, e.handleOptions = r) : e.getLocationInfo();
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))()
                    },
                    onShow: function() {
                        this.getPageData()
                    },
                    onShareAppMessage: function() {
                        var t = this.addressStoreInfo,
                            e = t.addressName,
                            n = t.latitude,
                            r = t.longitude,
                            o = t.storeName,
                            i = t.storeId,
                            u = t.venderId,
                            a = t.storeAddress;
                        return {
                            title: "省钱".concat(s.MODULE_NAME),
                            path: "".concat(_.SvCardList.path, "?addressName=").concat(e, "&storeName=").concat(o, "&latitude=").concat(n, "&longitude=").concat(r, "&storeId=").concat(i, "&venderId=").concat(u, "&storeAddress=").concat(a, "&share=true"),
                            imageUrl: E
                        }
                    },
                    onShareTimeline: function() {
                        var t = this.addressStoreInfo,
                            e = t.addressName,
                            n = t.latitude,
                            r = t.longitude,
                            o = t.storeName,
                            i = t.storeId,
                            u = t.venderId,
                            a = t.storeAddress;
                        return {
                            title: "省钱".concat(s.MODULE_NAME),
                            path: _.SvcardList.path,
                            imageUrl: C,
                            query: "addressName=".concat(e, "&storeName=").concat(o, "&latitude=").concat(n, "&longitude=").concat(r, "&storeId=").concat(i, "&venderId=").concat(u, "&storeAddress=").concat(a, "&share=true")
                        }
                    },
                    methods: {
                        getLocationInfo: function() {
                            var t = this;
                            return v(i.default.mark((function e() {
                                var n, r, o, c, f;
                                return i.default.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (n = (g || {}).address, r = (void 0 === n ? {} : n).currentAddress, o = void 0 === r ? {} : r, c = a.default.get("poi") || {}, Object.keys(o).length || Object.keys(c).length || !t.cancleFlag) {
                                                e.next = 8;
                                                break
                                            }
                                            return e.next = 6, u.addressInfoNew.requestPOI();
                                        case 6:
                                            f = e.sent, 2 !== g.locationFailReason || Object.keys(c).length ? f ? t.getPageData() : t.getWxOpenLocationTip() : t.getSystemOpenLocationTip();
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        getPageData: function() {
                            var t = this;
                            return v(i.default.mark((function e() {
                                var n, r, o, u;
                                return i.default.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (n = a.default.get("poi") || {}, 2 !== g.locationFailReason || Object.keys(n).length) {
                                                e.next = 5;
                                                break
                                            }
                                            t.getSystemOpenLocationTip(), e.next = 15;
                                            break;
                                        case 5:
                                            return e.next = 7, t.getCacheInfo();
                                        case 7:
                                            if (r = t.addressStoreInfo, o = r.latitude, u = r.longitude, o || u) {
                                                e.next = 10;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 10:
                                            return t.cardList = [], t.showLoading || (t.showLoading = !0), t.currentPage = 1, e.next = 15, t.getStoreList();
                                        case 15:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        getCacheInfo: function() {
                            var t = this;
                            return v(i.default.mark((function e() {
                                var n, r, o, c, f, s, l, d, p, b, h, y, m, v, O;
                                return i.default.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, u.storeInfoNew.initStoreInfo();
                                        case 2:
                                            n = e.sent, r = n.venderId, c = (o = g || {}).address, f = void 0 === c ? {} : c, s = o.storeInfo, l = void 0 === s ? {} : s, p = (d = f || {}).currentAddress, b = d.POI, h = p || b || {}, y = (l || {}).currentSelectedStore, m = void 0 === y ? {} : y, v = a.default.get("poi") || {}, O = a.default.get("currentStore") || {}, t.addressStoreInfo = {
                                                addressName: v.addressName || (null == h ? void 0 : h.addressName),
                                                latitude: v.latitude || (null == h ? void 0 : h.latitude),
                                                longitude: v.longitude || (null == h ? void 0 : h.longitude),
                                                storeName: O.storeName || (null == m ? void 0 : m.storeName),
                                                storeId: O.storeId || (null == m ? void 0 : m.storeId),
                                                venderId: O.venderId || (null == m ? void 0 : m.venderId) || r,
                                                storeAddress: O.storeAddress || (null == m ? void 0 : m.address)
                                            };
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        setDataInfo: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "https://img.dmallcdn.com/dshop/202312/dc867833-a664-4642-b085-2fc7f24b01d5",
                                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                            this.dataInfo = {
                                tip: t,
                                srcUrl: n,
                                confirmBtnText: e,
                                cancelBtnText: r
                            }
                        },
                        getSystemOpenLocationTip: function() {
                            this.showLoading = !1, this.pageStatus = 2, this.setDataInfo("请开启手机位置信息或通过左上角手动选择地址，为你展示附近门店及活动～", "", "https://img.dmallcdn.com/dshop/202107/6153bc28-af61-43d6-8730-1fbba8420db3")
                        },
                        getWxOpenLocationTip: function() {
                            this.showLoading = !1, this.pageStatus = 2, this.setDataInfo("定位服务未开启，无法获取到您附近的门店", "开启定位", "https://img.dmallcdn.com/dshop/202107/6153bc28-af61-43d6-8730-1fbba8420db3", "选择地址")
                        },
                        restAddress: function() {
                            this.getPageData()
                        },
                        handelAddressClick: function() {
                            w.navigateTo(_.selectAddress.path)
                        },
                        handleStoreClick: function() {
                            a.default.set("storeList", this.storeList), w.navigateTo(_.selectStore.path)
                        },
                        tapCancel: function() {
                            var t = this;
                            return v(i.default.mark((function e() {
                                return i.default.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            t.showDialog = !1, t.cancleFlag = !0, t.getLocationInfo();
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        tapEnsure: function() {
                            var t = this.handleOptions,
                                e = t.addressName,
                                n = t.latitude,
                                r = t.longitude,
                                o = t.storeName,
                                i = t.storeId,
                                u = t.venderId,
                                c = t.storeAddress;
                            a.default.set("isChangeAddress", !0), a.default.set("isChangeStore", !0), a.default.set("poi", {
                                addressName: e,
                                latitude: n,
                                longitude: r
                            }), a.default.set("currentStore", {
                                storeName: o,
                                storeId: i,
                                venderId: u,
                                storeAddress: c
                            }), this.showDialog = !1, this.cancleFlag = !1, this.getPageData()
                        },
                        loadMore: function() {
                            this.hasMore && (this.currentPage++, this.getCardList())
                        },
                        refreshList: function() {
                            this.currentPage = 1, this.getCardList()
                        },
                        getStoreList: function() {
                            var t = this;
                            return v(i.default.mark((function e() {
                                var n, r, o, u, a, c, s, l;
                                return i.default.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, t.showLoading = !0, n = t.addressStoreInfo, r = n.latitude, o = n.longitude, u = n.venderId, e.next = 5, f.default.getStoreList({
                                                venderId: u,
                                                latitude: r,
                                                longitude: o
                                            });
                                        case 5:
                                            if (a = e.sent, c = a.code, s = a.data, l = void 0 === s ? [] : s, t.pageStatus = 2, t.storeList = l || [], "0000" !== c) {
                                                e.next = 21;
                                                break
                                            }
                                            if (!l.length) {
                                                e.next = 19;
                                                break
                                            }
                                            return e.next = 15, t.setCurrentStoreFn(l);
                                        case 15:
                                            return e.next = 17, t.getCacheInfo();
                                        case 17:
                                            return e.next = 19, t.getCardList();
                                        case 19:
                                            e.next = 22;
                                            break;
                                        case 21:
                                            t.setDataInfo("当前地址附近没有覆盖的门店，请修改地址", "修改地址");
                                        case 22:
                                            t.showLoading = !1, e.next = 31;
                                            break;
                                        case 25:
                                            e.prev = 25, e.t0 = e.catch(0), t.pageStatus = 2, t.showLoading = !1, t.storeList = [], t.setDataInfo("哎呦~，出错了，请稍后再试！");
                                        case 31:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 25]
                                ])
                            })))()
                        },
                        setCurrentStoreFn: function(t) {
                            var e, n, r, o, i = a.default.get("isChangeAddress"),
                                u = a.default.get("isChangeStore"),
                                c = a.default.get("currentStore"),
                                f = (g || {}).storeInfo,
                                s = ((void 0 === f ? {} : f) || {}).currentSelectedStore,
                                l = (void 0 === s ? {} : s) || {},
                                d = {
                                    storeName: l.storeName,
                                    storeId: l.storeId,
                                    venderId: l.venderId,
                                    storeAddress: l.address
                                };
                            o = null !== (e = this.handleOptions) && void 0 !== e && e.share && this.cancleFlag || i ? u ? c : t[0] : u ? c : d, a.default.set("currentStore", h(h({}, o), {}, {
                                storeAddress: (null === (n = o) || void 0 === n ? void 0 : n.address) || (null === (r = o) || void 0 === r ? void 0 : r.storeAddress)
                            }))
                        },
                        getCardList: function() {
                            var t = this;
                            return v(i.default.mark((function e() {
                                var n, r, o, u, a, c, s, l, p, b, h, y, m;
                                return i.default.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = t.addressStoreInfo, r = n.venderId, o = n.storeId, e.next = 3, f.default.getCardList({
                                                vendorId: r,
                                                storeId: o,
                                                currentPage: t.currentPage,
                                                pageSize: t.pageSize
                                            });
                                        case 3:
                                            if (u = e.sent, a = d(u, 2), c = a[0], s = a[1], l = void 0 === s ? {} : s, !c) {
                                                e.next = 11;
                                                break
                                            }
                                            return t.$pageView.showToast({
                                                title: c || "接口请求失败"
                                            }), e.abrupt("return");
                                        case 11:
                                            t.showLoading = !1, p = l.userPaidCouponCount, b = void 0 === p ? 0 : p, h = l.packagePageList, y = void 0 === h ? {} : h, t.userPaidCouponCount = b, m = y.result, t.hasMore = t.currentPage * t.pageSize < y.totalCount, 1 === t.currentPage && (t.cardList = []), t.cardList = t.cardList.concat(m), t.pageStatus = t.cardList.length > 0 ? 1 : 2, t.cardList.length || (t.pageStatus = 2, t.setDataInfo("当前门店没有可购买的券包"));
                                        case 20:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        getTemplateId: function() {
                            var t = this;
                            return v(i.default.mark((function e() {
                                var n, r, o, u, a;
                                return i.default.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = t.addressStoreInfo.venderId, e.next = 3, f.default.getWechatTemplateId({
                                                vendorId: n,
                                                type: 1
                                            });
                                        case 3:
                                            r = e.sent, o = d(r, 2), u = o[0], a = o[1], u && t.$pageView.showToast({
                                                title: u || "接口请求失败"
                                            }), t.tempIds = a;
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        touchEvent: function(t) {
                            var e = this;
                            return v(i.default.mark((function n() {
                                var r, o, u, a, c;
                                return i.default.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (r = e.addressStoreInfo, o = r.venderId, u = r.storeId, a = r.latitude, c = r.longitude, console.log(t, "item"), "myCardList" != t.type) {
                                                n.next = 6;
                                                break
                                            }
                                            w.navigateTo(_.SvMyCardList.path, {
                                                vendorId: o
                                            }), n.next = 17;
                                            break;
                                        case 6:
                                            if ("cardDetail" != t.type && ("btn" != t.type || 3 != t.status)) {
                                                n.next = 10;
                                                break
                                            }
                                            w.navigateTo(_.SvCardDetail.path, {
                                                packageId: t.data.packageId,
                                                vendorId: o,
                                                storeId: u,
                                                latitude: a,
                                                longitude: c
                                            }), n.next = 17;
                                            break;
                                        case 10:
                                            if ("btn" != t.type || 1 != t.status) {
                                                n.next = 14;
                                                break
                                            }
                                            e.$pageView.sendMessage({
                                                scene: "SUPER_VALUE_CARD_READY",
                                                repeatUse: !0
                                            }, function() {
                                                var n = v(i.default.mark((function n(r) {
                                                    return i.default.wrap((function(n) {
                                                        for (;;) switch (n.prev = n.next) {
                                                            case 0:
                                                                return n.next = 2, e.remindStarted(t.data.packageId);
                                                            case 2:
                                                            case "end":
                                                                return n.stop()
                                                        }
                                                    }), n)
                                                })));
                                                return function(t) {
                                                    return n.apply(this, arguments)
                                                }
                                            }()), n.next = 17;
                                            break;
                                        case 14:
                                            if ("btn" != t.type || 7 != t.status) {
                                                n.next = 17;
                                                break
                                            }
                                            return n.next = 17, e.remindStopped(t.data.packageId);
                                        case 17:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })))()
                        },
                        remindStarted: function(t) {
                            var e = this;
                            return v(i.default.mark((function n() {
                                var r, o, u, a;
                                return i.default.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return r = e.addressStoreInfo.venderId, n.next = 3, f.default.setCardRemind({
                                                vendorId: r,
                                                packageId: t
                                            });
                                        case 3:
                                            if (o = n.sent, u = d(o, 1), !(a = u[0])) {
                                                n.next = 9;
                                                break
                                            }
                                            return e.$pageView.showToast({
                                                title: a || "接口请求失败"
                                            }), n.abrupt("return");
                                        case 9:
                                            e.refreshList();
                                        case 10:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })))()
                        },
                        remindStopped: function(t) {
                            var e = this;
                            return v(i.default.mark((function n() {
                                var r, o, u, a;
                                return i.default.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            return r = e.addressStoreInfo.venderId, n.next = 3, f.default.stopCardRemind({
                                                vendorId: r,
                                                packageId: t
                                            });
                                        case 3:
                                            if (o = n.sent, u = d(o, 1), !(a = u[0])) {
                                                n.next = 9;
                                                break
                                            }
                                            return e.$pageView.showToast({
                                                title: a || "接口请求失败"
                                            }), n.abrupt("return");
                                        case 9:
                                            e.refreshList();
                                        case 10:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })))()
                        }
                    }
                }
            },
            "46c0": function(e, n, r) {
                function o(e) {
                    return (o = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                        return t(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                    })(e)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.default = void 0;
                var i = c(r("a34a")),
                    u = r("7836"),
                    a = c(r("f14f"));

                function c(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function f(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function s(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? f(Object(n), !0).forEach((function(e) {
                            l(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }

                function l(t, e, n) {
                    return (e = function(t) {
                        var e = function(t, e) {
                            if ("object" != o(t) || !t) return t;
                            var n = t[Symbol.toPrimitive];
                            if (void 0 !== n) {
                                var r = n.call(t, e || "default");
                                if ("object" != o(r)) return r;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === e ? String : Number)(t)
                        }(t, "string");
                        return "symbol" == o(e) ? e : e + ""
                    }(e)) in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                }

                function d(t, e, n, r, o, i, u) {
                    try {
                        var a = t[i](u),
                            c = a.value
                    } catch (t) {
                        return void n(t)
                    }
                    a.done ? e(c) : Promise.resolve(c).then(r, o)
                }

                function p(t) {
                    return function() {
                        var e = this,
                            n = arguments;
                        return new Promise((function(r, o) {
                            var i = t.apply(e, n);

                            function u(t) {
                                d(i, r, o, u, a, "next", t)
                            }

                            function a(t) {
                                d(i, r, o, u, a, "throw", t)
                            }
                            u(void 0)
                        }))
                    }
                }
                var b = getApp().globalData,
                    h = b.$dmall,
                    y = h.dmallApi,
                    m = h.router;
                n.default = {
                    data: function() {
                        return {
                            ADData: {},
                            showCustomLoading: !1,
                            storeDistanceList: [],
                            scanCodeInfo: {},
                            notificationCouponIndex: null,
                            barCodeModalInfo: {}
                        }
                    },
                    onLoad: function() {
                        this.notifyCouponTimer = null, this.notifyCouponTimeoutTimer = null
                    },
                    onShow: function() {
                        var t = this;
                        return p(i.default.mark((function e() {
                            var n;
                            return i.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, m.checkIntercept();
                                    case 2:
                                        if (!e.sent) {
                                            e.next = 11;
                                            break
                                        }
                                        if ((n = u.storeInfoNew.getCurrentStore()) && "{}" !== JSON.stringify(n)) {
                                            e.next = 10;
                                            break
                                        }
                                        return e.next = 8, u.addressInfoNew.initAddress();
                                    case 8:
                                        return e.next = 10, u.storeInfoNew.initStoreInfo();
                                    case 10:
                                        t.getCouponInfo();
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    onUnload: function() {
                        this.clearNotifyCouponTimer()
                    },
                    methods: {
                        getCouponInfo: function() {
                            var t = this;
                            return p(i.default.mark((function e() {
                                var n, r, o, c, f, s, l;
                                return i.default.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t.refresherTriggered || (t.showCustomLoading = !0), n = {}, r = u.storeInfoNew.getCurrentStore() || {}, 0, o = {
                                                    couponType: 0
                                                }, r.venderId && r.storeId) {
                                                e.next = 13;
                                                break
                                            }
                                            return e.next = 8, u.storeInfoNew.initStoreInfo();
                                        case 8:
                                            c = e.sent, f = c.venderId, s = c.storeId, o.venderId = f, o.storeId = s;
                                        case 13:
                                            return e.prev = 13, e.next = 16, a.default.request("couponListNew", o);
                                        case 16:
                                            n = e.sent, e.next = 23;
                                            break;
                                        case 19:
                                            e.prev = 19, e.t0 = e.catch(13), y.showToast({
                                                title: "获取数据失败，请重试~"
                                            }), l = setTimeout((function() {
                                                clearTimeout(l), l = null, m.navigateBack()
                                            }), 1500);
                                        case 23:
                                            t.showCustomLoading = !1, t.initCouponInfo(n);
                                        case 25:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [13, 19]
                                ])
                            })))()
                        },
                        exchange: function(t) {
                            var e = this,
                                n = u.storeInfoNew.getCurrentStore() || {},
                                r = {
                                    code: t,
                                    storeId: n.storeId,
                                    venderId: n.venderId,
                                    isSmartPurchase: !1,
                                    isSelfCounter: !1,
                                    cardBindType: -1
                                };
                            a.default.request("commonScanCode", r).then((function(t) {
                                if (t.includes("message")) {
                                    var n = t.split("message=")[1];
                                    if (y.showToast({
                                            title: n
                                        }), "成功" === n) var r = setTimeout((function() {
                                        e.getCouponInfo(), clearTimeout(r), r = null
                                    }), 2e3)
                                } else t.includes("scanResult") && y.showToast({
                                    title: "请输入正确的优惠券兑换码"
                                })
                            }))
                        },
                        getAdvertisement: function() {
                            var t = this;
                            a.default.getAdvertisement().then((function(e) {
                                t.setData({
                                    ADData: e
                                })
                            }))
                        },
                        showStoreDistanceList: function(t) {
                            var e = this,
                                n = t.params,
                                r = t.notifyStoresTitle,
                                o = b && b.address ? b.address : {},
                                i = (o.currentAddress || o.POI || {}).latitude;
                            (void 0 === i ? "" : i) ? a.default.request("calcStoreDistance", n).then((function(t) {
                                e.setData({
                                    storeDistanceListShow: !0,
                                    storeDistanceList: t.storeDistanceList,
                                    notifyStoresTitle: r
                                })
                            })).catch((function(t) {
                                y.showToast({
                                    title: t.result
                                })
                            })): y.showToast({
                                title: "当前未获取到小程序定位，请前往首页查看～"
                            })
                        },
                        showScanCodeModal: function(t, e) {
                            var n = this,
                                r = {
                                    code: t.couponCode,
                                    couponCode: t.couponCode
                                };
                            a.default.request("genCode", r).then((function(r) {
                                r.title = t.frontDisplayName, n.setData({
                                    scanCodeInfo: r,
                                    scanCodeModalShow: !0,
                                    notificationCouponIndex: e
                                }), n.checkNotifyCouponUsed(t.couponCode, r.loopSec), r.codeTimeoutSec && (n.notifyCouponTimeoutTimer = setTimeout((function() {
                                    n.clearNotifyCouponTimer(), n.showScanCodeModal(t)
                                }), 1e3 * r.codeTimeoutSec))
                            })).catch((function(t) {
                                y.showToast({
                                    title: t.result
                                })
                            }))
                        },
                        checkNotifyCouponUsed: function(t, e) {
                            var n = this;
                            this.notifyCouponTimer = setTimeout((function() {
                                a.default.request("checkNotifyCouponUsed", {
                                    code: t
                                }).then((function(r) {
                                    r.success ? (n.useCodeSuccess = !0, n.clearNotifyCouponTimer()) : n.checkNotifyCouponUsed(t, e)
                                })).catch((function(t) {
                                    n.checkNotifyCouponUsed(), console.warn(t.result)
                                }))
                            }), 1e3 * e)
                        },
                        closeModal: function(t) {
                            if ("scanCodeModal" === t.type && (this.clearNotifyCouponTimer(), this.useCodeSuccess)) {
                                var e = this.couponList[this.notificationCouponIndex];
                                e && (e.statusCode = 4, e.buttonDesc = "已使用"), this.notificationCouponIndex = null, this.useCodeSuccess = !1
                            }
                            this["".concat(t.type, "Show")] = !1
                        },
                        clearNotifyCouponTimer: function() {
                            this.notifyCouponTimeoutTimer && (clearTimeout(this.notifyCouponTimeoutTimer), this.notifyCouponTimeoutTimer = null), this.notifyCouponTimer && (clearTimeout(this.notifyCouponTimer), this.notifyCouponTimer = null)
                        },
                        getBarCode: function(t) {
                            this.setData({
                                barCodeModalInfo: t,
                                barCodeModalShow: !0
                            })
                        },
                        LockInCoupons: function(t) {
                            return p(i.default.mark((function e() {
                                var n, r, o, c, f;
                                return i.default.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = y.getStorageSync("userInfo") || {}, r = n.userId, o = void 0 === r ? "" : r, c = u.storeInfoNew.getCurrentStore() || {}, f = c.venderId, e.prev = 2, e.next = 5, a.default.request("multiLockInCoupons", s({
                                                userId: o,
                                                venderId: f
                                            }, t));
                                        case 5:
                                            return e.abrupt("return", e.sent);
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(2), y.showToast({
                                                title: "赠送失败"
                                            });
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [2, 8]
                                ])
                            })))()
                        }
                    }
                }
            },
            "4aba": function(e, n, r) {
                function o(e) {
                    return (o = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                        return t(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                    })(e)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var i = function() {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function(e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    u = function t(e, n, r) {
                        null === e && (e = Function.prototype);
                        var o = Object.getOwnPropertyDescriptor(e, n);
                        if (void 0 === o) {
                            var i = Object.getPrototypeOf(e);
                            return null === i ? void 0 : t(i, n, r)
                        }
                        if ("value" in o) return o.value;
                        var u = o.get;
                        return void 0 !== u ? u.call(r) : void 0
                    },
                    a = r("1548"),
                    c = function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }(r("0a06"));

                function f(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" !== o(e) && "function" != typeof e ? t : e
                }
                var s = function(t) {
                        return (10 - t.substr(0, 12).split("").map((function(t) {
                            return +t
                        })).reduce((function(t, e, n) {
                            return n % 2 ? t + 3 * e : t + e
                        }), 0) % 10) % 10
                    },
                    l = function(t) {
                        function e(t, n) {
                            (function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            })(this, e), -1 !== t.search(/^[0-9]{12}$/) && (t += s(t));
                            var r = f(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                            return r.lastChar = n.lastChar, r
                        }
                        return function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + o(e));
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                        }(e, t), i(e, [{
                            key: "valid",
                            value: function() {
                                return -1 !== this.data.search(/^[0-9]{13}$/) && +this.data[12] === s(this.data)
                            }
                        }, {
                            key: "leftText",
                            value: function() {
                                return u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "leftText", this).call(this, 1, 6)
                            }
                        }, {
                            key: "leftEncode",
                            value: function() {
                                var t = this.data.substr(1, 6),
                                    n = a.EAN13_STRUCTURE[this.data[0]];
                                return u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "leftEncode", this).call(this, t, n)
                            }
                        }, {
                            key: "rightText",
                            value: function() {
                                return u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "rightText", this).call(this, 7, 6)
                            }
                        }, {
                            key: "rightEncode",
                            value: function() {
                                var t = this.data.substr(7, 6);
                                return u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "rightEncode", this).call(this, t, "RRRRRR")
                            }
                        }, {
                            key: "encodeGuarded",
                            value: function() {
                                var t = u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "encodeGuarded", this).call(this);
                                return this.options.displayValue && (t.unshift({
                                    data: "000000000000",
                                    text: this.text.substr(0, 1),
                                    options: {
                                        textAlign: "left",
                                        fontSize: this.fontSize
                                    }
                                }), this.options.lastChar && (t.push({
                                    data: "00"
                                }), t.push({
                                    data: "00000",
                                    text: this.options.lastChar,
                                    options: {
                                        fontSize: this.fontSize
                                    }
                                }))), t
                            }
                        }]), e
                    }(c.default);
                n.default = l
            },
            "4e0b": function(e, n, r) {
                function o(e) {
                    return (o = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                        return t(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                    })(e)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var i = function() {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function(e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    u = function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }(r("53f0"));
                var a = function(t) {
                        var e = t.substr(0, 13).split("").map((function(t) {
                            return parseInt(t, 10)
                        })).reduce((function(t, e, n) {
                            return t + e * (3 - n % 2 * 2)
                        }), 0);
                        return 10 * Math.ceil(e / 10) - e
                    },
                    c = function(t) {
                        function e(t, n) {
                            return function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, e), -1 !== t.search(/^[0-9]{13}$/) && (t += a(t)),
                                function(t, e) {
                                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" !== o(e) && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n))
                        }
                        return function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + o(e));
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                        }(e, t), i(e, [{
                            key: "valid",
                            value: function() {
                                return -1 !== this.data.search(/^[0-9]{14}$/) && +this.data[13] === a(this.data)
                            }
                        }]), e
                    }(u.default);
                n.default = c
            },
            "53f0": function(e, n, r) {
                function o(e) {
                    return (o = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                        return t(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                    })(e)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var i = function() {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function(e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    u = r("8fba");

                function a(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function c(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" !== o(e) && "function" != typeof e ? t : e
                }
                var f = function(t) {
                    function e() {
                        return a(this, e), c(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + o(e));
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(e, t), i(e, [{
                        key: "valid",
                        value: function() {
                            return -1 !== this.data.search(/^([0-9]{2})+$/)
                        }
                    }, {
                        key: "encode",
                        value: function() {
                            var t = this,
                                e = this.data.match(/.{2}/g).map((function(e) {
                                    return t.encodePair(e)
                                })).join("");
                            return {
                                data: u.START_BIN + e + u.END_BIN,
                                text: this.text
                            }
                        }
                    }, {
                        key: "encodePair",
                        value: function(t) {
                            var e = u.BINARIES[t[1]];
                            return u.BINARIES[t[0]].split("").map((function(t, n) {
                                return ("1" === t ? "111" : "1") + ("1" === e[n] ? "000" : "0")
                            })).join("")
                        }
                    }]), e
                }(function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(r("d6c6")).default);
                n.default = f
            },
            "593f": function(e, n, r) {
                function o(e) {
                    return (o = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                        return t(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                    })(e)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var i = function() {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function(e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    u = f(r("3971")),
                    a = f(r("d6c6")),
                    c = r("0675");

                function f(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function s(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" !== o(e) && "function" != typeof e ? t : e
                }
                var l = ["XX00000XXX", "XX10000XXX", "XX20000XXX", "XXX00000XX", "XXXX00000X", "XXXXX00005", "XXXXX00006", "XXXXX00007", "XXXXX00008", "XXXXX00009"],
                    d = [
                        ["EEEOOO", "OOOEEE"],
                        ["EEOEOO", "OOEOEE"],
                        ["EEOOEO", "OOEEOE"],
                        ["EEOOOE", "OOEEEO"],
                        ["EOEEOO", "OEOOEE"],
                        ["EOOEEO", "OEEOOE"],
                        ["EOOOEE", "OEEEOO"],
                        ["EOEOEO", "OEOEOE"],
                        ["EOEOOE", "OEOEEO"],
                        ["EOOEOE", "OEEOEO"]
                    ],
                    p = function(t) {
                        function e(t, n) {
                            ! function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, e);
                            var r = s(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                            if (r.isValid = !1, -1 !== t.search(/^[0-9]{6}$/)) r.middleDigits = t, r.upcA = b(t, "0"), r.text = n.text || "" + r.upcA[0] + t + r.upcA[r.upcA.length - 1], r.isValid = !0;
                            else {
                                if (-1 === t.search(/^[01][0-9]{7}$/)) return s(r);
                                if (r.middleDigits = t.substring(1, t.length - 1), r.upcA = b(r.middleDigits, t[0]), r.upcA[r.upcA.length - 1] !== t[t.length - 1]) return s(r);
                                r.isValid = !0
                            }
                            return r.displayValue = n.displayValue, n.fontSize > 10 * n.width ? r.fontSize = 10 * n.width : r.fontSize = n.fontSize, r.guardHeight = n.height + r.fontSize / 2 + n.textMargin, r
                        }
                        return function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + o(e));
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                        }(e, t), i(e, [{
                            key: "valid",
                            value: function() {
                                return this.isValid
                            }
                        }, {
                            key: "encode",
                            value: function() {
                                return this.options.flat ? this.flatEncoding() : this.guardedEncoding()
                            }
                        }, {
                            key: "flatEncoding",
                            value: function() {
                                var t = "";
                                return t += "101", t += this.encodeMiddleDigits(), {
                                    data: t += "010101",
                                    text: this.text
                                }
                            }
                        }, {
                            key: "guardedEncoding",
                            value: function() {
                                var t = [];
                                return this.displayValue && t.push({
                                    data: "00000000",
                                    text: this.text[0],
                                    options: {
                                        textAlign: "left",
                                        fontSize: this.fontSize
                                    }
                                }), t.push({
                                    data: "101",
                                    options: {
                                        height: this.guardHeight
                                    }
                                }), t.push({
                                    data: this.encodeMiddleDigits(),
                                    text: this.text.substring(1, 7),
                                    options: {
                                        fontSize: this.fontSize
                                    }
                                }), t.push({
                                    data: "010101",
                                    options: {
                                        height: this.guardHeight
                                    }
                                }), this.displayValue && t.push({
                                    data: "00000000",
                                    text: this.text[7],
                                    options: {
                                        textAlign: "right",
                                        fontSize: this.fontSize
                                    }
                                }), t
                            }
                        }, {
                            key: "encodeMiddleDigits",
                            value: function() {
                                var t = this.upcA[0],
                                    e = this.upcA[this.upcA.length - 1],
                                    n = d[parseInt(e)][parseInt(t)];
                                return (0, u.default)(this.middleDigits, n)
                            }
                        }]), e
                    }(a.default);

                function b(t, e) {
                    for (var n = parseInt(t[t.length - 1]), r = l[n], o = "", i = 0, u = 0; u < r.length; u++) {
                        var a = r[u];
                        o += "X" === a ? t[i++] : a
                    }
                    return "" + (o = "" + e + o) + (0, c.checksum)(o)
                }
                n.default = p
            },
            "5caf": function(e, n, r) {
                function o(e) {
                    return (o = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                        return t(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                    })(e)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var i = function() {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function(e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    u = function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }(r("030c")),
                    a = r("64e4");
                var c = function(t) {
                    function e(t, n) {
                        return function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, e),
                            function(t, e) {
                                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !e || "object" !== o(e) && "function" != typeof e ? t : e
                            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, a.B_START_CHAR + t, n))
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + o(e));
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(e, t), i(e, [{
                        key: "valid",
                        value: function() {
                            return new RegExp("^" + a.B_CHARS + "+$").test(this.data)
                        }
                    }]), e
                }(u.default);
                n.default = c
            },
            "62f0": function(e, n, r) {
                function o(e) {
                    return (o = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                        return t(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                    })(e)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var i = function() {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function(e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    u = r("1548"),
                    a = c(r("3971"));

                function c(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                var f = function(t) {
                    function e(t, n) {
                        return function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, e),
                            function(t, e) {
                                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !e || "object" !== o(e) && "function" != typeof e ? t : e
                            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n))
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + o(e));
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(e, t), i(e, [{
                        key: "valid",
                        value: function() {
                            return -1 !== this.data.search(/^[0-9]{2}$/)
                        }
                    }, {
                        key: "encode",
                        value: function() {
                            var t = u.EAN2_STRUCTURE[parseInt(this.data) % 4];
                            return {
                                data: "1011" + (0, a.default)(this.data, t, "01"),
                                text: this.text
                            }
                        }
                    }]), e
                }(c(r("d6c6")).default);
                n.default = f
            },
            "64e4": function(t, e, n) {
                var r;

                function o(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                }
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var i = e.SET_A = 0,
                    u = e.SET_B = 1,
                    a = e.SET_C = 2,
                    c = (e.SHIFT = 98, e.START_A = 103),
                    f = e.START_B = 104,
                    s = e.START_C = 105;
                e.MODULO = 103, e.STOP = 106, e.FNC1 = 207, e.SET_BY_CODE = (o(r = {}, c, i), o(r, f, u), o(r, s, a), r), e.SWAP = {
                    101: i,
                    100: u,
                    99: a
                }, e.A_START_CHAR = String.fromCharCode(208), e.B_START_CHAR = String.fromCharCode(209), e.C_START_CHAR = String.fromCharCode(210), e.A_CHARS = "[\0-_È-Ï]", e.B_CHARS = "[ -È-Ï]", e.C_CHARS = "(Ï*[0-9]{2}Ï*)", e.BARS = [11011001100, 11001101100, 11001100110, 10010011e3, 10010001100, 10001001100, 10011001e3, 10011000100, 10001100100, 11001001e3, 11001000100, 11000100100, 10110011100, 10011011100, 10011001110, 10111001100, 10011101100, 10011100110, 11001110010, 11001011100, 11001001110, 11011100100, 11001110100, 11101101110, 11101001100, 11100101100, 11100100110, 11101100100, 11100110100, 11100110010, 11011011e3, 11011000110, 11000110110, 10100011e3, 10001011e3, 10001000110, 10110001e3, 10001101e3, 10001100010, 11010001e3, 11000101e3, 11000100010, 10110111e3, 10110001110, 10001101110, 10111011e3, 10111000110, 10001110110, 11101110110, 11010001110, 11000101110, 11011101e3, 11011100010, 11011101110, 11101011e3, 11101000110, 11100010110, 11101101e3, 11101100010, 11100011010, 11101111010, 11001000010, 11110001010, 1010011e4, 10100001100, 1001011e4, 10010000110, 10000101100, 10000100110, 1011001e4, 10110000100, 1001101e4, 10011000010, 10000110100, 10000110010, 11000010010, 1100101e4, 11110111010, 11000010100, 10001111010, 10100111100, 10010111100, 10010011110, 10111100100, 10011110100, 10011110010, 11110100100, 11110010100, 11110010010, 11011011110, 11011110110, 11110110110, 10101111e3, 10100011110, 10001011110, 10111101e3, 10111100010, 11110101e3, 11110100010, 10111011110, 10111101110, 11101011110, 11110101110, 11010000100, 1101001e4, 11010011100, 1100011101011]
            },
            6564: function(e, n, r) {
                function o(e) {
                    return (o = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                        return t(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                    })(e)
                }

                function i(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function u(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? i(Object(n), !0).forEach((function(e) {
                            a(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }

                function a(t, e, n) {
                    return (e = function(t) {
                        var e = function(t, e) {
                            if ("object" != o(t) || !t) return t;
                            var n = t[Symbol.toPrimitive];
                            if (void 0 !== n) {
                                var r = n.call(t, e || "default");
                                if ("object" != o(r)) return r;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === e ? String : Number)(t)
                        }(t, "string");
                        return "symbol" == o(e) ? e : e + ""
                    }(e)) in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.default = void 0;
                var c = getApp().globalData,
                    f = c.$dmall,
                    s = f.HOST,
                    l = f.EVT,
                    d = function(t) {
                        return function(e, n) {
                            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            return new Promise((function(o) {
                                try {
                                    c.$dmall.ajax.request(u({
                                        url: "".concat(l).concat(n.isWxApi ? s.weixinapp : s.pointmall).concat(e),
                                        method: t,
                                        data: n,
                                        callback: function(t) {
                                            if ("0000" !== t.code)
                                                if (n.isWxApi) o(t);
                                                else {
                                                    var e = t.msg || t.result;
                                                    o([e, void 0])
                                                } else n.isWxApi ? o(t) : o([null, t.data])
                                        }
                                    }, r))
                                } catch (t) {
                                    console.log("request -> e", t), o(["网络异常", void 0])
                                }
                            }))
                        }
                    },
                    p = d("GET"),
                    b = d("POST");
                n.default = {
                    getUserPackageList: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return p("/paidcoupon/getUserPackageList", t, {
                            dataType: "json"
                        })
                    },
                    getUserPackageDetail: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return p("/paidcoupon/packageDetail", t)
                    },
                    getNearbyStores: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return p("/paidcoupon/getNearbyStores", t)
                    },
                    sendGifting: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return b("/paidcoupon/sendGifting", t, {
                            dataType: "json"
                        })
                    },
                    getQrCodes: function(t) {
                        return p("/paidcoupon/getQrCodes", t)
                    },
                    getGiftingInfo: function(t) {
                        return p("/paidcoupon/getGiftingInfo", t)
                    },
                    receiveGiftingInfo: function(t) {
                        return p("/paidcoupon/receiveGiftingInfo", t)
                    },
                    cancelGiftingInfo: function(t) {
                        return p("/paidcoupon/cancelGiftingInfo", t)
                    },
                    getCardList: function(t) {
                        return p("/paidcoupon/paidCouponList", t)
                    },
                    setCardRemind: function(t) {
                        return p("/paidcoupon/remindStarted", t)
                    },
                    stopCardRemind: function(t) {
                        return p("/paidcoupon/remindStop", t)
                    },
                    getCardUseRecord: function(t) {
                        return p("/paidcoupon/getUseRecords", t)
                    },
                    getCardDetail: function(t) {
                        return p("/paidcoupon/paidCouponDetail", t)
                    },
                    cardOrderSubmit: function(t) {
                        return p("/paidcoupon/orderSubmit", t)
                    },
                    getWechatTemplateId: function(t) {
                        return p("/paidcoupon/getWechatTemplateId", t)
                    },
                    getNearbyStoresByBatchId: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return p("/paidcoupon/getNearbyStoresByBatchId", t)
                    },
                    getStoreList: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return p("/store/getStoreList", u(u({}, t), {}, {
                            isWxApi: !0
                        }))
                    }
                }
            },
            8347: function(e, n, r) {
                (function(e) {
                    function o(e) {
                        return (o = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                            return t(e)
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                        })(e)
                    }
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }), n.default = void 0;
                    var i = function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }(r("a34a"));

                    function u(t, e) {
                        var n = Object.keys(t);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(t);
                            e && (r = r.filter((function(e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }))), n.push.apply(n, r)
                        }
                        return n
                    }

                    function a(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? u(Object(n), !0).forEach((function(e) {
                                c(t, e, n[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                            }))
                        }
                        return t
                    }

                    function c(t, e, n) {
                        return (e = function(t) {
                            var e = function(t, e) {
                                if ("object" != o(t) || !t) return t;
                                var n = t[Symbol.toPrimitive];
                                if (void 0 !== n) {
                                    var r = n.call(t, e || "default");
                                    if ("object" != o(r)) return r;
                                    throw new TypeError("@@toPrimitive must return a primitive value.")
                                }
                                return ("string" === e ? String : Number)(t)
                            }(t, "string");
                            return "symbol" == o(e) ? e : e + ""
                        }(e)) in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n, t
                    }

                    function f(t, e, n, r, o, i, u) {
                        try {
                            var a = t[i](u),
                                c = a.value
                        } catch (t) {
                            return void n(t)
                        }
                        a.done ? e(c) : Promise.resolve(c).then(r, o)
                    }

                    function s(t) {
                        return function() {
                            var e = this,
                                n = arguments;
                            return new Promise((function(r, o) {
                                var i = t.apply(e, n);

                                function u(t) {
                                    f(i, r, o, u, a, "next", t)
                                }

                                function a(t) {
                                    f(i, r, o, u, a, "throw", t)
                                }
                                u(void 0)
                            }))
                        }
                    }
                    var l = getApp().globalData.$dmall.dmallApi,
                        d = function(t) {
                            return !isNaN(parseFloat(t)) && isFinite(t)
                        },
                        p = {
                            formatTime: function(t) {
                                if (!t) return "";
                                var e = Math.floor(t / 864e5),
                                    n = Math.floor(t % 864e5 / 36e5),
                                    r = Math.floor(t % 36e5 / 6e4),
                                    o = Math.floor(t % 6e4 / 1e3),
                                    i = "";
                                return e && (i += "".concat(e, "天")), n && (i += "".concat(n, "时")), r && (i += "".concat(r, "分")), o && (i += "".concat(o, "秒")), i
                            },
                            getCardStatus: function(t, e) {
                                if (!t.status) return {};
                                var n = {},
                                    r = e.mainColor,
                                    o = t.status;
                                switch (1 == t.status && t.reminderStatus && 2 == t.reminderStatus && (o = 7), o) {
                                    case 1:
                                        return n.type = "unable", n.btnBg = r, n.btnFontColor = "#ffffff", n.btnText = "未开始", {
                                            btnColorObj: n,
                                            status: o
                                        };
                                    case 2:
                                        return n.type = "unable", n.btnFontColor = "#ffffff", n.btnBg = r, n.btnText = "已抢光", {
                                            btnColorObj: n,
                                            status: o
                                        };
                                    case 3:
                                        return n.btnBorderColor = r, n.btnFontColor = "#ffffff", n.btnBg = r, n.btnText = "立即抢购", {
                                            btnColorObj: n,
                                            status: o
                                        };
                                    case 4:
                                    case 5:
                                        return n.type = "unable", n.btnFontColor = "#ffffff", n.btnBg = r, n.btnText = "已结束", {
                                            btnColorObj: n,
                                            status: o
                                        };
                                    case 6:
                                        return n.type = "unable", n.btnFontColor = "#ffffff", n.btnBg = r, n.btnText = "超过购买限制", console.log(n, "btnColorObj"), {
                                            btnColorObj: n,
                                            status: o
                                        };
                                    case 7:
                                        return n.btnBorderColor = "#CCCCCC", n.btnFontColor = "#CCCCCC", n.btnBg = "#ffffff", n.btnText = "已预约", {
                                            btnColorObj: n,
                                            status: o
                                        };
                                    case 8:
                                        return n.type = "unable", n.btnFontColor = "#ffffff", n.btnBg = r, n.btnText = "门店不可售", {
                                            btnColorObj: n,
                                            status: o
                                        };
                                    case 9:
                                        return n.type = "unable", n.btnFontColor = "#ffffff", n.btnBg = r, n.btnText = "门店库存不足", {
                                            btnColorObj: n,
                                            status: o
                                        };
                                    default:
                                        return n.btnBorderColor = r, n.btnFontColor = "#ffffff", n.btnBg = r, n.btnText = "立即抢购", {
                                            btnColorObj: n,
                                            status: o
                                        }
                                }
                            },
                            requestSubscribeMessage: function() {
                                var t = arguments;
                                return s(i.default.mark((function e() {
                                    var n, r, o;
                                    return i.default.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (n = t.length > 0 && void 0 !== t[0] ? t[0] : [], r = t.length > 1 && void 0 !== t[1] && t[1], 0 != n.length) {
                                                    e.next = 4;
                                                    break
                                                }
                                                return e.abrupt("return", "cancel:tempIds");
                                            case 4:
                                                return e.next = 6, l.requestSubscribeMessage(n);
                                            case 6:
                                                if (o = e.sent, console.log(o, "res"), !o.errMsg || "requestSubscribeMessage:ok" !== o.errMsg) {
                                                    e.next = 10;
                                                    break
                                                }
                                                return e.abrupt("return", o[n[0]]);
                                            case 10:
                                                if (!o.errCode) {
                                                    e.next = 28;
                                                    break
                                                }
                                                if (console.log(o.errCode, "订阅消息errCode返回"), 20004 != o.errCode) {
                                                    e.next = 17;
                                                    break
                                                }
                                                return l.showToast({
                                                    title: "请前往小程序设置中开启订阅通知以便接收相关消息"
                                                }), e.abrupt("return", "accept");
                                            case 17:
                                                if (!r) {
                                                    e.next = 21;
                                                    break
                                                }
                                                l.showToast({
                                                    title: "授权失败～"
                                                }), e.next = 27;
                                                break;
                                            case 21:
                                                if (20001 != o.errCode) {
                                                    e.next = 26;
                                                    break
                                                }
                                                return l.showToast({
                                                    title: "当前无可用消息模板，无法开启提醒，请联系客服"
                                                }), e.abrupt("return", "accept");
                                            case 26:
                                                console.warn("授权失败～".concat(o.errMsg));
                                            case 27:
                                                return e.abrupt("return", "error");
                                            case 28:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))()
                            },
                            queryMultipleNodes: function(t, n) {
                                var r = "";
                                return (r = e.createSelectorQuery().in(n)).select("#".concat(t)).boundingClientRect(), r.selectViewport().scrollOffset(), new Promise((function(t) {
                                    r.exec((function() {
                                        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                                        t(a(a({}, n[0][1]), n[0][0]))
                                    }))
                                }))
                            },
                            typeSet: function(t) {
                                for (var e in t) d(t[e]) && (t[e] = Number(t[e]));
                                return t || {}
                            }
                        };
                    n.default = p
                }).call(this, r("543d").default)
            },
            8696: function(e, n, r) {
                function o(e) {
                    return (o = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                        return t(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                    })(e)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var i = function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }(r("f73f")),
                    u = r("9a21");
                var a = function(t) {
                    function e(t, n) {
                        return function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, e),
                            function(t, e) {
                                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !e || "object" !== o(e) && "function" != typeof e ? t : e
                            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t + (0, u.mod11)(t), n))
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + o(e));
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(e, t), e
                }(i.default);
                n.default = a
            },
            "86c7": function(e, n, r) {
                function o(e) {
                    return (o = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                        return t(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                    })(e)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var i = function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }(r("f73f")),
                    u = r("9a21");
                var a = function(t) {
                    function e(t, n) {
                        return function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, e), t += (0, u.mod10)(t), t += (0, u.mod10)(t),
                            function(t, e) {
                                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !e || "object" !== o(e) && "function" != typeof e ? t : e
                            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n))
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + o(e));
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(e, t), e
                }(i.default);
                n.default = a
            },
            "8db0": function(t, e, n) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var r = getApp().globalData.$dmall,
                    o = r.ajax,
                    i = r.HOST,
                    u = r.EVT;
                e.default = {
                    apiList: {
                        getBonusPoint: "/web/points/queryPoints.jsonp",
                        getSbybBonusPoint: "/web/points/new/queryPoints.jsonp",
                        getHistoryPoints: "/web/points/queryHistoryPoints.jsonp"
                    },
                    url: function(t) {
                        return u + i.appapi + this.apiList[t] || ""
                    },
                    jsonp: function(t) {
                        t.data.callback = "jsonp", o.request({
                            url: t.url,
                            data: t.data,
                            callback: function(e) {
                                var n = e.replace("jsonp(", "");
                                n = n.substring(0, n.length - 1), t.callback(JSON.parse(n))
                            }
                        })
                    },
                    getBonusPoint: function(t) {
                        var e = this;
                        return new Promise((function(n, r) {
                            e.jsonp({
                                url: e.url("getBonusPoint"),
                                data: t,
                                callback: function(t) {
                                    "0000" === t.code ? n(t.data) : r(t)
                                }
                            })
                        }))
                    },
                    getSbybBonusPoint: function(t) {
                        var e = this;
                        return new Promise((function(n, r) {
                            e.jsonp({
                                url: e.url("getSbybBonusPoint"),
                                data: t,
                                method: "get",
                                callback: function(t) {
                                    "0000" === t.code ? n(t.data) : r(t)
                                }
                            })
                        }))
                    },
                    getHistoryPoints: function(t) {
                        var e = this;
                        return new Promise((function(n, r) {
                            e.jsonp({
                                url: e.url("getHistoryPoints"),
                                data: t,
                                method: "get",
                                callback: function(t) {
                                    "0000" === t.code ? n(t.data) : r(t)
                                }
                            })
                        }))
                    }
                }
            },
            "8e49": function(e, n, r) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.touristReceiveConfEnum = n.touristReceiveConf = n.statusEnum = n.shareConf = n.roleEnum = n.revokePopConf = n.receiveConfEnum = n.receiveConf = n.oneMinute = n.oneHour = n.oneDay = n.giveRulePopupConf = n.giveConfEnum = n.giveConf = void 0;
                var o = r("2e78");

                function i(e) {
                    return (i = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                        return t(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                    })(e)
                }

                function u(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function a(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? u(Object(n), !0).forEach((function(e) {
                            c(t, e, n[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                        }))
                    }
                    return t
                }

                function c(t, e, n) {
                    return (e = function(t) {
                        var e = function(t, e) {
                            if ("object" != i(t) || !t) return t;
                            var n = t[Symbol.toPrimitive];
                            if (void 0 !== n) {
                                var r = n.call(t, e || "default");
                                if ("object" != i(r)) return r;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === e ? String : Number)(t)
                        }(t, "string");
                        return "symbol" == i(e) ? e : e + ""
                    }(e)) in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                }
                n.roleEnum = {
                    GIVER: 1,
                    TOURIST: 2,
                    RECEIVER: 3
                }, n.statusEnum = {
                    UNRECEIVE: 1,
                    RECEIVED: 2,
                    REVOKED: 3,
                    TIMEOUT: 4
                };
                var f = n.giveConf = {
                        UNRECEIVE: {
                            TITLE: "等待领取中",
                            SUB_TITLE: "未被领取，将自动退回您的账户",
                            CONFIRM_TEXT: "送给Ta",
                            CANCLE_TEXT: "撤销赠送"
                        },
                        RECEIVED: {
                            TITLE: "赠送成功",
                            SUB_TITLE: "领取了礼包",
                            CONFIRM_TEXT: "已赠送"
                        },
                        REVOKED: {
                            TITLE: "赠送失败",
                            SUB_TITLE: "本次赠送已撤销～",
                            CONFIRM_TEXT: "已失效"
                        },
                        TIMEOUT: {
                            TITLE: "赠送失败",
                            SUB_TITLE: "24小时内未被领取，已自动退回您的账户",
                            CONFIRM_TEXT: "已失效"
                        }
                    },
                    s = n.receiveConf = {
                        UNRECEIVE: {
                            TITLE: "礼物包含",
                            CONFIRM_TEXT: "立即领取"
                        },
                        RECEIVED: {
                            TITLE: "礼物包含",
                            TIP: "已放入「我的".concat(o.MODULE_NAME, "」，可前往查收"),
                            CONFIRM_TEXT: "已领取",
                            TOURIST_TIP: "已被 name 领取",
                            TOURIST_CONFIRM_TEXT: "已被领取"
                        },
                        REVOKED: {
                            TITLE: "礼物包含",
                            TIP: "本次赠送已被撤销",
                            CONFIRM_TEXT: "已被撤销"
                        },
                        TIMEOUT: {
                            TITLE: "礼物包含",
                            TIP: "24小时内未被领取，赠送失败",
                            CONFIRM_TEXT: "已失效"
                        }
                    },
                    l = n.touristReceiveConf = a(a({}, s), {}, {
                        RECEIVED: {
                            TITLE: "礼物包含",
                            TIP: "已被 name 领取",
                            CONFIRM_TEXT: "已被领取"
                        }
                    }),
                    d = (n.giveConfEnum = {
                        1: f.UNRECEIVE,
                        2: f.RECEIVED,
                        3: f.REVOKED,
                        4: f.TIMEOUT
                    }, n.receiveConfEnum = {
                        1: s.UNRECEIVE,
                        2: s.RECEIVED,
                        3: s.REVOKED,
                        4: s.TIMEOUT
                    });
                n.touristReceiveConfEnum = a(a({}, d), {}, {
                    2: l.RECEIVED
                }), n.giveRulePopupConf = {
                    TITLE: "赠送规则",
                    CONTENT: ["1、发起赠送后，该".concat(o.MODULE_NAME, "将暂不可用，您可在「使用/失效记录」查看赠送或撤回赠送；"), "2、此赠送方式为非指向好友赠送，发起赠送后，发起赠送后也可以转发给其他好友；", "3、若在24小时内无人领取或撤回赠送，可以重新使用；", "4、撤销赠送后，好友将无法领取，".concat(o.MODULE_NAME, "将退回至「我的").concat(o.MODULE_NAME, "」。")]
                }, n.revokePopConf = {
                    TITLE: "撤销须知",
                    CONTENT: "撤销赠送后，好友将无法领取，".concat(o.MODULE_NAME, "将退回至「我的").concat(o.MODULE_NAME, "」"),
                    CONFIRM_TEXT: "确认撤销"
                }, n.shareConf = {
                    TITLE: "送你一张省钱".concat(o.MODULE_NAME),
                    IMAGE_URL: "https://img.dmallcdn.com/dshop/202206/3ea8f079-fafa-41a3-87b2-33de3a719053",
                    PATH: "SvGift"
                }, n.oneMinute = 6e4, n.oneHour = 36e5, n.oneDay = 864e5
            },
            "8fba": function(t, e, n) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.START_BIN = "1010", e.END_BIN = "11101", e.BINARIES = ["00110", "10001", "01001", "11000", "00101", "10100", "01100", "00011", "10010", "01010"]
            },
            "914c": function(t, e, n) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.ITF14 = e.ITF = void 0;
                var r = i(n("53f0")),
                    o = i(n("4e0b"));

                function i(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                e.ITF = r.default, e.ITF14 = o.default
            },
            "92ab": function(t, e, n) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.pageEnum = e.oneMinute = e.oneHour = e.oneDay = e.loadStatusEnum = e.lastExpiredTextEnum = e.imageEnum = void 0;
                var r = n("2e78");
                e.pageEnum = {
                    BUY: "SvCardList",
                    DETAIL: "SvMyCardDetail",
                    MORE: "SvCardList",
                    RECORD: "SvUseRecord"
                }, e.loadStatusEnum = {
                    DEFAULT: 0,
                    LOADING: 1,
                    LOADED: 2,
                    LOADALL: 3
                }, e.imageEnum = {
                    EMPTY: "https://img.dmallcdn.com/dshop/202208/c0ce4ec5-bf24-4aed-8d78-d144e52cb0c2"
                }, e.lastExpiredTextEnum = {
                    DEFAULT: "",
                    DAY: "天后过期",
                    HOUR: "小时后过期",
                    MINUTE: "分钟后过期",
                    EXPIRE: "".concat(r.MODULE_NAME, "已失效")
                }, e.oneMinute = 6e4, e.oneHour = 36e5, e.oneDay = 864e5
            },
            "9a21": function(t, e, n) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.mod10 = function(t) {
                    for (var e = 0, n = 0; n < t.length; n++) {
                        var r = parseInt(t[n]);
                        (n + t.length) % 2 == 0 ? e += r : e += 2 * r % 10 + Math.floor(2 * r / 10)
                    }
                    return (10 - e % 10) % 10
                }, e.mod11 = function(t) {
                    for (var e = 0, n = [2, 3, 4, 5, 6, 7], r = 0; r < t.length; r++) {
                        var o = parseInt(t[t.length - 1 - r]);
                        e += n[r % n.length] * o
                    }
                    return (11 - e % 11) % 11
                }
            },
            "9bb3": function(t, e, n) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.storeEnum = e.slideTipEnum = e.pageEnum = e.giveRulePopupConf = e.givePopConf = e.couponStatusEnum = e.couponSortEnum = e.cardStatusTipEnum = e.cardStatusEnum = void 0;
                var r = n("2e78");
                e.cardStatusEnum = {
                    YES: 1,
                    NO: 2
                }, e.couponStatusEnum = {
                    UNUSE: "2",
                    USED: "4",
                    EXPIRED: "8",
                    GIVING: "128",
                    GIVED: "1128"
                }, e.couponSortEnum = {
                    2: 1,
                    4: 4,
                    8: 5,
                    128: 2,
                    1128: 3
                }, e.pageEnum = {
                    BUY: "SvCardList",
                    STORE: "SvStoreList",
                    ORDER: "orderDetail",
                    GIFT: "SvGift"
                }, e.slideTipEnum = {
                    0: "向右滑动切换至条形码",
                    1: "向左滑动切换至二维码"
                }, e.givePopConf = {
                    TITLE: "赠送须知",
                    CONTENT: ["发起赠送后，该".concat(r.MODULE_NAME, "将暂不可用，您可以在「使用/失效记录」查看赠送或撤回赠送。"), "若在 24 小时内无人领取或撤回赠送，可以重新使用"],
                    CONFIRM_TEXT: "去赠送"
                }, e.giveRulePopupConf = {
                    TITLE: "赠送规则",
                    CONTENT: ["1、发起赠送后，该".concat(r.MODULE_NAME, "将暂不可用，您可在「使用/失效记录」查看赠送或撤回赠送；"), "2、此赠送方式为非指向好友赠送，发起赠送后，发起赠送后也可以转发给其他好友；", "3、若在24小时内无人领取或撤回赠送，可以重新使用；", "4、撤销赠送后，好友将无法领取，".concat(r.MODULE_NAME, "将退回至「我的").concat(r.MODULE_NAME, "」。")]
                }, e.cardStatusTipEnum = {
                    DEFAULT: "",
                    USEDUP: "".concat(r.MODULE_NAME, "已经用光啦～"),
                    EXPIRED: "已经过期了哟～"
                }, e.storeEnum = {
                    0: "全门店可用",
                    1: "部分门店可用",
                    3: "本门店可用"
                }
            },
            aa961: function(e, n, r) {
                function o(e) {
                    return (o = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                        return t(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                    })(e)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.CODE39 = void 0;
                var i = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }();
                var u = function(t) {
                        function e(t, n) {
                            return function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, e), t = t.toUpperCase(), n.mod43 && (t += function(t) {
                                    return a[t]
                                }(function(t) {
                                    for (var e = 0, n = 0; n < t.length; n++) e += s(t[n]);
                                    return e %= 43
                                }(t))),
                                function(t, e) {
                                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" !== o(e) && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n))
                        }
                        return function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + o(e));
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                        }(e, t), i(e, [{
                            key: "encode",
                            value: function() {
                                for (var t = f("*"), e = 0; e < this.data.length; e++) t += f(this.data[e]) + "0";
                                return {
                                    data: t += f("*"),
                                    text: this.text
                                }
                            }
                        }, {
                            key: "valid",
                            value: function() {
                                return -1 !== this.data.search(/^[0-9A-Z\-\.\ \$\/\+\%]+$/)
                            }
                        }]), e
                    }(function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }(r("d6c6")).default),
                    a = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-", ".", " ", "$", "/", "+", "%", "*"],
                    c = [20957, 29783, 23639, 30485, 20951, 29813, 23669, 20855, 29789, 23645, 29975, 23831, 30533, 22295, 30149, 24005, 21623, 29981, 23837, 22301, 30023, 23879, 30545, 22343, 30161, 24017, 21959, 30065, 23921, 22385, 29015, 18263, 29141, 17879, 29045, 18293, 17783, 29021, 18269, 17477, 17489, 17681, 20753, 35770];

                function f(t) {
                    return function(t) {
                        return c[t].toString(2)
                    }(s(t))
                }

                function s(t) {
                    return a.indexOf(t)
                }
                n.CODE39 = u
            },
            ab86: function(e, n, r) {
                function o(e) {
                    return (o = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                        return t(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                    })(e)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var i = function() {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function(e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    u = r("1548"),
                    a = f(r("3971")),
                    c = f(r("d6c6"));

                function f(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                var s = function(t) {
                    function e(t, n) {
                        return function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, e),
                            function(t, e) {
                                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !e || "object" !== o(e) && "function" != typeof e ? t : e
                            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n))
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + o(e));
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(e, t), i(e, [{
                        key: "valid",
                        value: function() {
                            return -1 !== this.data.search(/^[0-9]{5}$/)
                        }
                    }, {
                        key: "encode",
                        value: function() {
                            var t = u.EAN5_STRUCTURE[function(t) {
                                return t.split("").map((function(t) {
                                    return +t
                                })).reduce((function(t, e, n) {
                                    return n % 2 ? t + 9 * e : t + 3 * e
                                }), 0) % 10
                            }(this.data)];
                            return {
                                data: "1011" + (0, a.default)(this.data, t, "01"),
                                text: this.text
                            }
                        }
                    }]), e
                }(c.default);
                n.default = s
            },
            b425: function(t, e, n) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var r = getApp().globalData.$dmall,
                    o = r.ajax,
                    i = r.EVT,
                    u = r.HOST,
                    a = {
                        choseCoupon: "/trade/gate/mini/choseCouponGift",
                        offlinecheckcoupon: "/trade/coupon/offlinecheckcoupon"
                    };
                e.default = {
                    request: function(t, e) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "POST",
                            r = u.appapi;
                        "choseCoupon" === t && (r = u.trade), "offlinecheckcoupon" === t && (r = u.gwtrading);
                        var c = i + r + a[t] || "";
                        return new Promise((function(r, i) {
                            o.request({
                                url: c,
                                data: e,
                                method: n,
                                callback: function(e) {
                                    switch (t) {
                                        case "offlinecheckcoupon":
                                            "0000" === e.code ? r(e.data.couponVO) : i(e);
                                            break;
                                        case "commonScanCode":
                                            "0000" === e.code ? r(e.action) : i(e);
                                            break;
                                        default:
                                            "0000" === e.code ? r(e.data) : i(e)
                                    }
                                }
                            })
                        }))
                    }
                }
            },
            b8374: function(t, e, n) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var r = function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }(n("a34a")),
                    o = n("7836"),
                    i = n("ed51");

                function u(t, e) {
                    return function(t) {
                        if (Array.isArray(t)) return t
                    }(t) || function(t, e) {
                        var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                        if (null != n) {
                            var r, o, i, u, a = [],
                                c = !0,
                                f = !1;
                            try {
                                if (i = (n = n.call(t)).next, 0 === e) {
                                    if (Object(n) !== n) return;
                                    c = !1
                                } else
                                    for (; !(c = (r = i.call(n)).done) && (a.push(r.value), a.length !== e); c = !0);
                            } catch (t) {
                                f = !0, o = t
                            } finally {
                                try {
                                    if (!c && null != n.return && (u = n.return(), Object(u) !== u)) return
                                } finally {
                                    if (f) throw o
                                }
                            }
                            return a
                        }
                    }(t, e) || function(t, e) {
                        if (t) {
                            if ("string" == typeof t) return a(t, e);
                            var n = {}.toString.call(t).slice(8, -1);
                            return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(t, e) : void 0
                        }
                    }(t, e) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()
                }

                function a(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                    return r
                }

                function c(t, e, n, r, o, i, u) {
                    try {
                        var a = t[i](u),
                            c = a.value
                    } catch (t) {
                        return void n(t)
                    }
                    a.done ? e(c) : Promise.resolve(c).then(r, o)
                }

                function f(t) {
                    return function() {
                        var e = this,
                            n = arguments;
                        return new Promise((function(r, o) {
                            var i = t.apply(e, n);

                            function u(t) {
                                c(i, r, o, u, a, "next", t)
                            }

                            function a(t) {
                                c(i, r, o, u, a, "throw", t)
                            }
                            u(void 0)
                        }))
                    }
                }
                var s = "scope.userLocation",
                    l = (0, i.promiseifyUni)("showModal"),
                    d = (0, i.promiseifyUni)("openSetting", {
                        withSubscriptions: !1
                    }),
                    p = (0, i.promiseifyUni)("getSystemInfo"),
                    b = function() {
                        var t = f(r.default.mark((function t(e) {
                            var n, o, a, c;
                            return r.default.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, (0, i.to)(p());
                                    case 2:
                                        if (n = t.sent, o = u(n, 2), a = o[0], c = o[1], !a) {
                                            t.next = 8;
                                            break
                                        }
                                        return t.abrupt("return", Promise.reject(a));
                                    case 8:
                                        if (c.locationEnabled) {
                                            t.next = 11;
                                            break
                                        }
                                        return e || l({
                                            title: "检测到您没开启系统定位",
                                            content: "请通过【手机设置】开启",
                                            confirmText: "确认",
                                            showCancel: !1
                                        }), t.abrupt("return", Promise.reject(-1));
                                    case 11:
                                        if (c.locationAuthorized) {
                                            t.next = 14;
                                            break
                                        }
                                        return e || l({
                                            title: "微信无法访问您的位置信息",
                                            content: "请在".concat("ios" === c.platform ? "【手机设置】-【隐私】-【定位服务】" : "【手机设置】-【应用管理】", "中进行设置"),
                                            confirmText: "确认",
                                            showCancel: !1
                                        }), t.abrupt("return", Promise.reject(-1));
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })));
                        return function(e) {
                            return t.apply(this, arguments)
                        }
                    }(),
                    h = function() {
                        var t = f(r.default.mark((function t() {
                            var e, n, a, c, f, p, h, y, m, v, g, O, S, w = arguments;
                            return r.default.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (e = w.length > 0 && void 0 !== w[0] && w[0], t.prev = 1, 2 !== (n = getApp().globalData).locationFailReason) {
                                            t.next = 11;
                                            break
                                        }
                                        return t.next = 6, (0, i.to)(b(e));
                                    case 6:
                                        if (a = t.sent, c = u(a, 1), !c[0]) {
                                            t.next = 11;
                                            break
                                        }
                                        return t.abrupt("return", Promise.reject(-1));
                                    case 11:
                                        if (1 !== n.locationFailReason) {
                                            t.next = 30;
                                            break
                                        }
                                        if (!e) {
                                            t.next = 14;
                                            break
                                        }
                                        return t.abrupt("return", Promise.reject(-1));
                                    case 14:
                                        return t.next = 16, (0, i.to)(l({
                                            title: "提示",
                                            content: "检测到您没打开位置信息权限，去设置打开",
                                            confirmText: "确认",
                                            cancelText: "取消"
                                        }));
                                    case 16:
                                        if (f = t.sent, p = u(f, 2), h = p[0], y = p[1], !h && y.confirm) {
                                            t.next = 22;
                                            break
                                        }
                                        return t.abrupt("return", Promise.reject(-1));
                                    case 22:
                                        return t.next = 24, (0, i.to)(d());
                                    case 24:
                                        if (m = t.sent, v = u(m, 2), g = v[0], O = v[1], !g && O && O.authSetting[s]) {
                                            t.next = 30;
                                            break
                                        }
                                        return t.abrupt("return", Promise.reject(-1));
                                    case 30:
                                        return t.next = 32, o.addressInfoNew.getLngLat();
                                    case 32:
                                        return S = t.sent, t.abrupt("return", Promise.resolve(S));
                                    case 36:
                                        return t.prev = 36, t.t0 = t.catch(1), console.log("getLocation -> e", t.t0), t.abrupt("return", Promise.reject(-1));
                                    case 40:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [1, 36]
                            ])
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }();
                e.default = h
            },
            bc41: function(e, n, r) {
                function o(e) {
                    return (o = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                        return t(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                    })(e)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var i = function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }(r("f73f")),
                    u = r("9a21");
                var a = function(t) {
                    function e(t, n) {
                        return function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, e), t += (0, u.mod11)(t), t += (0, u.mod10)(t),
                            function(t, e) {
                                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !e || "object" !== o(e) && "function" != typeof e ? t : e
                            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n))
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + o(e));
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(e, t), e
                }(i.default);
                n.default = a
            },
            c050: function(e, n, r) {
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.default = void 0;
                var o = u(r("07a4")),
                    i = u(r("f14f"));

                function u(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function a(e) {
                    return (a = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                        return t(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                    })(e)
                }

                function c(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter((function(e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function f(t, e, n) {
                    return (e = function(t) {
                        var e = function(t, e) {
                            if ("object" != a(t) || !t) return t;
                            var n = t[Symbol.toPrimitive];
                            if (void 0 !== n) {
                                var r = n.call(t, e || "default");
                                if ("object" != a(r)) return r;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === e ? String : Number)(t)
                        }(t, "string");
                        return "symbol" == a(e) ? e : e + ""
                    }(e)) in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t
                }
                n.default = {
                    onLoad: function() {
                        var t = o.default.get("checkoutCoupon");
                        this.initCouponInfo(function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? c(Object(n), !0).forEach((function(e) {
                                    f(t, e, n[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                }))
                            }
                            return t
                        }({}, t))
                    },
                    methods: {
                        choseCoupon: function(t, e) {
                            var n = this;
                            this.showCustomLoading = !0, i.default.request("offlinecheckcoupon", t).then((function(t) {
                                n.showCustomLoading = !1, e(t)
                            })).catch((function() {
                                n.showCustomLoading = !1, e(!1)
                            }))
                        },
                        submitCoupon: function(t) {
                            this.couponInfo.selectedCouponCodes = t, o.default.set("checkoutCoupon", this.couponInfo)
                        }
                    }
                }
            },
            c18f: function(t, e, n) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.MSI1110 = e.MSI1010 = e.MSI11 = e.MSI10 = e.MSI = void 0;
                var r = c(n("f73f")),
                    o = c(n("2d62")),
                    i = c(n("8696")),
                    u = c(n("86c7")),
                    a = c(n("bc41"));

                function c(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                e.MSI = r.default, e.MSI10 = o.default, e.MSI11 = i.default, e.MSI1010 = u.default, e.MSI1110 = a.default
            },
            c19a: function(t, e, n) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var r = getApp().globalData.$dmall,
                    o = r.ajax,
                    i = r.HOST,
                    u = r.EVT;
                e.default = {
                    apiList: {
                        queryMemberLevelConfig: "/member/queryMemberLevelConfig",
                        receiveUpgradeWelfare: "/member/receiveUpgradeWelfare",
                        queryReceivedWelfares: "/member/queryReceivedWelfares"
                    },
                    url: function(t) {
                        return u + i.weixinapp + this.apiList[t] || ""
                    },
                    queryMemberLevelConfig: function(t) {
                        var e = this;
                        return new Promise((function(n, r) {
                            o.request({
                                url: e.url("queryMemberLevelConfig"),
                                data: t,
                                method: "post",
                                callback: function(t) {
                                    "0000" === t.code ? n(t) : r(t)
                                }
                            })
                        }))
                    },
                    receiveUpgradeWelfare: function(t) {
                        var e = this;
                        return new Promise((function(n, r) {
                            o.request({
                                url: e.url("receiveUpgradeWelfare"),
                                data: t,
                                method: "post",
                                callback: function(t) {
                                    "0000" === t.code ? n(t) : r(t)
                                }
                            })
                        }))
                    },
                    queryReceivedWelfares: function(t) {
                        var e = this;
                        return new Promise((function(n, r) {
                            o.request({
                                url: e.url("queryReceivedWelfares"),
                                data: t,
                                method: "post",
                                callback: function(t) {
                                    "0000" === t.code ? n(t) : r(t)
                                }
                            })
                        }))
                    }
                }
            },
            c835: function(t, e, n) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0, e.default = {
                    data: function() {
                        return {
                            theme: null,
                            unable: "",
                            couponShow: !1,
                            unableTheme: {}
                        }
                    },
                    methods: {
                        getTheme: function(t) {
                            var e = getApp().globalData.$dmall.dmallApi.getTheme();
                            e.backgroundColor = e.secondColor.colorRgb(.15), e.checkMarkColor = e.secondColor.colorRgb(.3);
                            var n = {
                                    mainColor: "#ccc",
                                    secondColor: "#ccc",
                                    graColor: "#ccc",
                                    backgroundColor: "#ccc",
                                    checkMarkColor: "#ccc"
                                },
                                r = t ? n : e;
                            r.unableReason = e.secondColor, this.couponShow || (this.couponShow = !0), this.setData({
                                theme: r,
                                unableTheme: n,
                                unable: t
                            })
                        }
                    }
                }
            },
            cd78: function(t, e, n) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var r = getApp().globalData.$dmall,
                    o = r.ajax,
                    i = r.EVT,
                    u = r.HOST;
                e.default = {
                    apiList: {
                        promoCodeList: "/app/user/promoCodeList"
                    },
                    url: function(t) {
                        return i + u.weixinapp + this.apiList[t] || ""
                    },
                    getPromoCodeList: function() {
                        var t = this,
                            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return new Promise((function(n, r) {
                            o.request({
                                url: t.url("promoCodeList"),
                                method: "POST",
                                data: e,
                                callback: function(t) {
                                    "0000" === t.code && t.data ? n(t.data) : r(t)
                                }
                            })
                        }))
                    }
                }
            },
            d329: function(t, e, n) {
                (function(t) {
                    function r(t) {
                        return function(t) {
                            if (Array.isArray(t)) return o(t)
                        }(t) || function(t) {
                            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                        }(t) || function(t, e) {
                            if (t) {
                                if ("string" == typeof t) return o(t, e);
                                var n = {}.toString.call(t).slice(8, -1);
                                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(t, e) : void 0
                            }
                        }(t) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }()
                    }

                    function o(t, e) {
                        (null == e || e > t.length) && (e = t.length);
                        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                        return r
                    }
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.default = void 0;
                    var i = n("f2b5").default,
                        u = {};
                    u = function(e, n, o, u, a) {
                        var c, f, s, l, d, p;
                        if (l = n, d = u, p = a, function(t) {
                                t.marginTop = null == t.marginTop ? t.margin : t.marginTop, t.marginBottom = null == t.marginBottom ? t.margin : t.marginBottom, t.marginRight = null == t.marginRight ? t.margin : t.marginRight, t.marginLeft = null == t.marginLeft ? t.margin : t.marginLeft
                            }(c = Object.assign({}, o)), "" == c.text || "" == e) return !1;
                        f = e, s = t.createCanvasContext(l, f);
                        var b = function(t, e) {
                            var n, o = [],
                                i = e.marginLeft + e.marginRight;
                            return Array.isArray(t) ? o = r(t) : o[0] = JSON.parse(JSON.stringify(t)), o.forEach((function(t, r) {
                                var u = s.measureText(o[r].text ? o[r].text : "").width,
                                    a = o[r].data.length * e.width,
                                    c = 0;
                                e.displayValue && a < u && ("center" == e.textAlign ? c = Math.floor((u - a) / 2) : "left" == e.textAlign ? c = 0 : "right" == e.textAlign && (c = Math.floor(u - a))), o[r].barcodePadding = c, o[r].width = Math.ceil(Math.max(u, a)), i += o[r].width, o[r].options && null != o[r].options.height ? o[r].height = o[r].options.height : o[r].height = n = e.height
                            })), {
                                encodings: o,
                                width: i,
                                height: n
                            }
                        }(new(i[c.format.toUpperCase()])(c.text, c).encode(), c);
                        d({
                            width: b.width,
                            height: b.height
                        }), setTimeout((function() {
                            h.render(c, b)
                        }), 50);
                        var h = {
                            render: function(t, e) {
                                var n = this;
                                this.prepare(t, e), e.encodings.forEach((function(e, r) {
                                    n.barcode(t, e), n.move(e)
                                })), this.draw(t, e)
                            },
                            barcode: function(t, e) {
                                var n, r = e.data;
                                n = "top" == t.textPosition ? t.marginTop + t.fontSize + t.textMargin : t.marginTop, s.fillStyle = t.lineColor;
                                for (var o = 0; o < r.length; o++) {
                                    var i = o * t.width + e.barcodePadding,
                                        u = t.height;
                                    e.options && null != e.options.height && (u = e.options.height), "1" === r[o] ? s.fillRect(i, n, t.width, u) : r[o] && s.fillRect(i, n, t.width, u * r[o])
                                }
                            },
                            text: function(t, e) {
                                var n, r, o, i;
                                t.displayValue && (r = "top" == t.textPosition ? t.marginTop + t.fontSize : t.height + t.textMargin + t.marginTop + t.fontSize, e.options ? (null != e.options.textAlign && (o = e.options.textAlign), null != e.options.fontSize && (i = e.options.fontSize)) : (o = t.textAlign, i = t.fontSize), s.setFontSize(i), "left" == o || e.barcodePadding > 0 ? (n = 0, s.setTextAlign("left")) : "right" == o ? (n = e.width - 1, s.setTextAlign("right")) : (n = e.width / 2, s.setTextAlign("center")), s.fillStyle = t.fontColor, null != e.text && s.fillText(e.text, n, r))
                            },
                            move: function(t) {
                                s.translate(t.width, 0)
                            },
                            prepare: function(t, e) {
                                t.background && (s.fillStyle = t.background, s.fillRect(0, 0, e.width, e.height)), s.translate(t.marginLeft, 0)
                            },
                            draw: function(t, e) {
                                var n = this;
                                s.draw(!1, (function() {
                                    n.toImgs(t, e)
                                }))
                            },
                            toImgs: function(e, n) {
                                setTimeout((function() {
                                    t.canvasToTempFilePath({
                                        width: n.width,
                                        height: n.height,
                                        destWidth: n.width,
                                        destHeight: n.height,
                                        canvasId: l,
                                        fileType: "png",
                                        success: function(t) {
                                            p(t.tempFilePath)
                                        },
                                        fail: function(t) {
                                            p(t)
                                        },
                                        complete: function() {
                                            t.hideLoading()
                                        }
                                    }, f)
                                }), e.text.length + 100)
                            }
                        }
                    }, e.default = u
                }).call(this, n("543d").default)
            },
            d6c6: function(t, e) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                e.default = function t(e, n) {
                    (function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    })(this, t), this.data = e, this.text = n.text || e, this.options = n
                }
            },
            de352: function(e, n, r) {
                function o(e) {
                    return (o = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                        return t(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                    })(e)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.codabar = void 0;
                var i = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }();

                function u(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" !== o(e) && "function" != typeof e ? t : e
                }
                var a = function(t) {
                    function e(t, n) {
                        (function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        })(this, e), 0 === t.search(/^[0-9\-\$\:\.\+\/]+$/) && (t = "A".concat(t, "A"));
                        var r = u(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t.toUpperCase(), n));
                        return r.text = r.options.text || r.text.replace(/[A-D]/g, ""), r
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not ".concat(o(e)));
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(e, t), i(e, [{
                        key: "valid",
                        value: function() {
                            return -1 !== this.data.search(/^[A-D][0-9\-\$\:\.\+\/]+[A-D]$/)
                        }
                    }, {
                        key: "encode",
                        value: function() {
                            for (var t = [], e = this.getEncodings(), n = 0; n < this.data.length; n++) t.push(e[this.data.charAt(n)]), n !== this.data.length - 1 && t.push("0");
                            return {
                                text: this.text,
                                data: t.join("")
                            }
                        }
                    }, {
                        key: "getEncodings",
                        value: function() {
                            return {
                                0: "101010011",
                                1: "101011001",
                                2: "101001011",
                                3: "110010101",
                                4: "101101001",
                                5: "110101001",
                                6: "100101011",
                                7: "100101101",
                                8: "100110101",
                                9: "110100101",
                                "-": "101001101",
                                $: "101100101",
                                ":": "1101011011",
                                "/": "1101101011",
                                ".": "1101101101",
                                "+": "101100110011",
                                A: "1011001001",
                                B: "1001001011",
                                C: "1010010011",
                                D: "1010011001"
                            }
                        }
                    }]), e
                }(function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(r("d6c6")).default);
                n.codabar = a
            },
            e05d: function(t, e, n) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var r = n("64e4"),
                    o = function(t) {
                        return t.match(new RegExp("^" + r.A_CHARS + "*"))[0].length
                    },
                    i = function(t) {
                        return t.match(new RegExp("^" + r.B_CHARS + "*"))[0].length
                    },
                    u = function(t) {
                        return t.match(new RegExp("^" + r.C_CHARS + "*"))[0]
                    };

                function a(t, e) {
                    var n = e ? r.A_CHARS : r.B_CHARS,
                        o = t.match(new RegExp("^(" + n + "+?)(([0-9]{2}){2,})([^0-9]|$)"));
                    if (o) return o[1] + String.fromCharCode(204) + c(t.substring(o[1].length));
                    var i = t.match(new RegExp("^" + n + "+"))[0];
                    return i.length === t.length ? t : i + String.fromCharCode(e ? 205 : 206) + a(t.substring(i.length), !e)
                }

                function c(t) {
                    var e = u(t),
                        n = e.length;
                    if (n === t.length) return t;
                    t = t.substring(n);
                    var r = o(t) >= i(t);
                    return e + String.fromCharCode(r ? 206 : 205) + a(t, r)
                }
                e.default = function(t) {
                    var e = void 0;
                    if (u(t).length >= 2) e = r.C_START_CHAR + c(t);
                    else {
                        var n = o(t) > i(t);
                        e = (n ? r.A_START_CHAR : r.B_START_CHAR) + a(t, n)
                    }
                    return e.replace(/[\xCD\xCE]([^])[\xCD\xCE]/, (function(t, e) {
                        return String.fromCharCode(203) + e
                    }))
                }
            },
            e5e4: function(e, n, r) {
                function o(e) {
                    return (o = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                        return t(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                    })(e)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var i = function() {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function(e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    u = function t(e, n, r) {
                        null === e && (e = Function.prototype);
                        var o = Object.getOwnPropertyDescriptor(e, n);
                        if (void 0 === o) {
                            var i = Object.getPrototypeOf(e);
                            return null === i ? void 0 : t(i, n, r)
                        }
                        if ("value" in o) return o.value;
                        var u = o.get;
                        return void 0 !== u ? u.call(r) : void 0
                    },
                    a = function(t) {
                        return t && t.__esModule ? t : {
                            default: t
                        }
                    }(r("0a06"));
                var c = function(t) {
                        return (10 - t.substr(0, 7).split("").map((function(t) {
                            return +t
                        })).reduce((function(t, e, n) {
                            return n % 2 ? t + e : t + 3 * e
                        }), 0) % 10) % 10
                    },
                    f = function(t) {
                        function e(t, n) {
                            return function(t, e) {
                                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                                }(this, e), -1 !== t.search(/^[0-9]{7}$/) && (t += c(t)),
                                function(t, e) {
                                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return !e || "object" !== o(e) && "function" != typeof e ? t : e
                                }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n))
                        }
                        return function(t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + o(e));
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                        }(e, t), i(e, [{
                            key: "valid",
                            value: function() {
                                return -1 !== this.data.search(/^[0-9]{8}$/) && +this.data[7] === c(this.data)
                            }
                        }, {
                            key: "leftText",
                            value: function() {
                                return u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "leftText", this).call(this, 0, 4)
                            }
                        }, {
                            key: "leftEncode",
                            value: function() {
                                var t = this.data.substr(0, 4);
                                return u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "leftEncode", this).call(this, t, "LLLL")
                            }
                        }, {
                            key: "rightText",
                            value: function() {
                                return u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "rightText", this).call(this, 4, 4)
                            }
                        }, {
                            key: "rightEncode",
                            value: function() {
                                var t = this.data.substr(4, 4);
                                return u(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "rightEncode", this).call(this, t, "RRRR")
                            }
                        }]), e
                    }(a.default);
                n.default = f
            },
            ecd6: function(t, e, n) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.CODE128C = e.CODE128B = e.CODE128A = e.CODE128 = void 0;
                var r = a(n("0b40")),
                    o = a(n("0307")),
                    i = a(n("5caf")),
                    u = a(n("303e"));

                function a(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }
                e.CODE128 = r.default, e.CODE128A = o.default, e.CODE128B = i.default, e.CODE128C = u.default
            },
            ed51: function(e, n, r) {
                (function(e) {
                    function r(e) {
                        return (r = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                            return t(e)
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                        })(e)
                    }

                    function o(t, e) {
                        var n = Object.keys(t);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(t);
                            e && (r = r.filter((function(e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable
                            }))), n.push.apply(n, r)
                        }
                        return n
                    }

                    function i(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? o(Object(n), !0).forEach((function(e) {
                                u(t, e, n[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                            }))
                        }
                        return t
                    }

                    function u(t, e, n) {
                        return (e = a(e)) in t ? Object.defineProperty(t, e, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = n, t
                    }

                    function a(t) {
                        var e = function(t, e) {
                            if ("object" != r(t) || !t) return t;
                            var n = t[Symbol.toPrimitive];
                            if (void 0 !== n) {
                                var o = n.call(t, e || "default");
                                if ("object" != r(o)) return o;
                                throw new TypeError("@@toPrimitive must return a primitive value.")
                            }
                            return ("string" === e ? String : Number)(t)
                        }(t, "string");
                        return "symbol" == r(e) ? e : e + ""
                    }
                    Object.defineProperty(n, "__esModule", {
                        value: !0
                    }), n.to = n.sleep = n.promiseifyUni = void 0, n.promiseifyUni = function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return function() {
                            for (var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, o = arguments.length, u = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) u[a - 1] = arguments[a];
                            return new Promise((function(o, a) {
                                var c;
                                (c = e)[t].apply(c, [i(i(i({}, n), r), {}, {
                                    success: o,
                                    fail: a
                                })].concat(u))
                            }))
                        }
                    }, n.to = function(t) {
                        return t.then((function(t) {
                            return [null, t]
                        })).catch((function(t) {
                            return [t, void 0]
                        }))
                    }, n.sleep = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        return new Promise((function(e) {
                            return setTimeout((function() {
                                e()
                            }), t)
                        }))
                    }
                }).call(this, r("543d").default)
            },
            ed58: function(e, n, r) {
                function o(e) {
                    return (o = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                        return t(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                    })(e)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                }), n.pharmacode = void 0;
                var i = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }();

                function u(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" !== o(e) && "function" != typeof e ? t : e
                }
                var a = function(t) {
                    function e(t, n) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        var r = u(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                        return r.number = parseInt(t, 10), r
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not ".concat(o(e)));
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(e, t), i(e, [{
                        key: "encode",
                        value: function() {
                            for (var t = this.number, e = ""; !isNaN(t) && 0 != t;) t % 2 == 0 ? (e = "11100".concat(e), t = (t - 2) / 2) : (e = "100".concat(e), t = (t - 1) / 2);
                            return {
                                data: e = e.slice(0, -2),
                                text: this.text
                            }
                        }
                    }, {
                        key: "valid",
                        value: function() {
                            return this.number >= 3 && this.number <= 131070
                        }
                    }]), e
                }(function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(r("d6c6")).default);
                n.pharmacode = a
            },
            f2b5: function(t, e, n) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var r = n("aa961"),
                    o = n("ecd6"),
                    i = n("207e"),
                    u = n("914c"),
                    a = n("c18f"),
                    c = n("ed58"),
                    f = n("de352"),
                    s = n("2acc");
                e.default = {
                    CODE39: r.CODE39,
                    CODE128: o.CODE128,
                    CODE128A: o.CODE128A,
                    CODE128B: o.CODE128B,
                    CODE128C: o.CODE128C,
                    EAN13: i.EAN13,
                    EAN8: i.EAN8,
                    EAN5: i.EAN5,
                    EAN2: i.EAN2,
                    UPC: i.UPC,
                    UPCE: i.UPCE,
                    ITF14: u.ITF14,
                    ITF: u.ITF,
                    MSI: a.MSI,
                    MSI10: a.MSI10,
                    MSI11: a.MSI11,
                    MSI1010: a.MSI1010,
                    MSI1110: a.MSI1110,
                    PHARMACODE: c.pharmacode,
                    CODABAR: f.codabar,
                    GENERICBARCODE: s.GenericBarcode
                }
            },
            f688: function(t, e, n) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var r = i(n("a34a")),
                    o = i(n("f14f"));

                function i(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function u(t, e, n, r, o, i, u) {
                    try {
                        var a = t[i](u),
                            c = a.value
                    } catch (t) {
                        return void n(t)
                    }
                    a.done ? e(c) : Promise.resolve(c).then(r, o)
                }
                var a = getApp().globalData.$dmall,
                    c = a.dmallApi,
                    f = a.router;
                e.default = {
                    onLoad: function() {
                        this.getCouponInfo()
                    },
                    methods: {
                        getCouponInfo: function() {
                            var t = this;
                            return function(t) {
                                return function() {
                                    var e = this,
                                        n = arguments;
                                    return new Promise((function(r, o) {
                                        var i = t.apply(e, n);

                                        function a(t) {
                                            u(i, r, o, a, c, "next", t)
                                        }

                                        function c(t) {
                                            u(i, r, o, a, c, "throw", t)
                                        }
                                        a(void 0)
                                    }))
                                }
                            }(r.default.mark((function e() {
                                var n, i;
                                return r.default.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t.showCustomLoading = !0, n = {}, e.prev = 2, e.next = 5, o.default.request("couponListNew", {
                                                couponType: 1
                                            });
                                        case 5:
                                            n = e.sent, e.next = 12;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(2), c.showToast({
                                                title: "获取数据失败，请重试~"
                                            }), i = setTimeout((function() {
                                                clearTimeout(i), i = null, f.navigateBack()
                                            }), 1500);
                                        case 12:
                                            t.showCustomLoading = !1, t.initCouponInfo(n);
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [2, 8]
                                ])
                            })))()
                        }
                    }
                }
            },
            f73f: function(e, n, r) {
                function o(e) {
                    return (o = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e) {
                        return t(e)
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : t(e)
                    })(e)
                }
                Object.defineProperty(n, "__esModule", {
                    value: !0
                });
                var i = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n), r && t(e, r), e
                    }
                }();
                var u = function(t) {
                    function e(t, n) {
                        return function(t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                            }(this, e),
                            function(t, e) {
                                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return !e || "object" !== o(e) && "function" != typeof e ? t : e
                            }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n))
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + o(e));
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(e, t), i(e, [{
                        key: "encode",
                        value: function() {
                            for (var t = "110", e = 0; e < this.data.length; e++) {
                                var n = parseInt(this.data[e]).toString(2);
                                n = a(n, 4 - n.length);
                                for (var r = 0; r < n.length; r++) t += "0" == n[r] ? "100" : "110"
                            }
                            return {
                                data: t += "1001",
                                text: this.text
                            }
                        }
                    }, {
                        key: "valid",
                        value: function() {
                            return -1 !== this.data.search(/^[0-9]+$/)
                        }
                    }]), e
                }(function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(r("d6c6")).default);

                function a(t, e) {
                    for (var n = 0; n < e; n++) t = "0" + t;
                    return t
                }
                n.default = u
            },
            fb20: function(t, e, n) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var r = u(n("a34a")),
                    o = n("7836"),
                    i = u(n("f14f"));

                function u(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }

                function a(t, e, n, r, o, i, u) {
                    try {
                        var a = t[i](u),
                            c = a.value
                    } catch (t) {
                        return void n(t)
                    }
                    a.done ? e(c) : Promise.resolve(c).then(r, o)
                }

                function c(t) {
                    return function() {
                        var e = this,
                            n = arguments;
                        return new Promise((function(r, o) {
                            var i = t.apply(e, n);

                            function u(t) {
                                a(i, r, o, u, c, "next", t)
                            }

                            function c(t) {
                                a(i, r, o, u, c, "throw", t)
                            }
                            u(void 0)
                        }))
                    }
                }
                var f = getApp().globalData.$dmall,
                    s = f.dmallApi,
                    l = f.router;
                e.default = {
                    data: function() {
                        return {
                            showCustomLoading: !1,
                            barCodeModalInfo: {}
                        }
                    },
                    onShow: function() {
                        var t = this;
                        return c(r.default.mark((function e() {
                            var n;
                            return r.default.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, l.checkIntercept();
                                    case 2:
                                        if (!e.sent) {
                                            e.next = 11;
                                            break
                                        }
                                        if ((n = o.storeInfoNew.getCurrentStore()) && "{}" !== JSON.stringify(n)) {
                                            e.next = 10;
                                            break
                                        }
                                        return e.next = 8, o.addressInfoNew.initAddress();
                                    case 8:
                                        return e.next = 10, o.storeInfoNew.initStoreInfo();
                                    case 10:
                                        t.getCouponInfo();
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    methods: {
                        getCouponInfo: function() {
                            var t = this;
                            return c(r.default.mark((function e() {
                                var n, o;
                                return r.default.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t.refresherTriggered || (t.showCustomLoading = !0), n = {}, e.prev = 2, e.next = 5, i.default.request("couponListNew", {
                                                couponType: 2
                                            });
                                        case 5:
                                            n = e.sent, t.refresherTriggered ? t.getCouponListById(n) : t.initCouponInfo(n), e.next = 13;
                                            break;
                                        case 9:
                                            e.prev = 9, e.t0 = e.catch(2), s.showToast({
                                                title: "获取数据失败，请重试~"
                                            }), o = setTimeout((function() {
                                                clearTimeout(o), o = null, l.navigateBack()
                                            }), 1500);
                                        case 13:
                                            t.showCustomLoading = !1;
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [2, 9]
                                ])
                            })))()
                        },
                        getBarCode: function(t) {
                            this.setData({
                                barCodeModalInfo: t,
                                barCodeModalShow: !0
                            })
                        },
                        closeModal: function(t) {
                            this["".concat(t.type, "Show")] = !1
                        }
                    }
                }
            }
        }
    ]);
}, {
    isPage: false,
    isComponent: false,
    currentFile: 'packageAssets/common/vendor.js'
});