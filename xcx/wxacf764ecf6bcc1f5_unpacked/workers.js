define("workers/@babel/runtime/helpers/Arrayincludes.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
        value: function(r, e) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var t = Object(this),
                n = t.length >>> 0;
            if (0 == n) return !1;
            for (var i, o, a = 0 | e, u = Math.max(0 <= a ? a : n - Math.abs(a), 0); u < n;) {
                if ((i = t[u]) === (o = r) || "number" == typeof i && "number" == typeof o && isNaN(i) && isNaN(o)) return !0;
                u++
            }
            return !1
        }
    });
});
define("workers/@babel/runtime/helpers/classCallCheck.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    function _classCallCheck(a, l) {
        if (!(a instanceof l)) throw new TypeError("Cannot call a class as a function")
    }
    module.exports = _classCallCheck;
});
define("workers/@babel/runtime/helpers/createClass.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    var toPropertyKey = require("./toPropertyKey");

    function _defineProperties(e, r) {
        for (var t = 0; t < r.length; t++) {
            var o = r[t];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey(o.key), o)
        }
    }

    function _createClass(e, r, t) {
        return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e
    }
    module.exports = _createClass;
});
define("workers/@babel/runtime/helpers/toPrimitive.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    var _typeof = require("./typeof");

    function _toPrimitive(r, t) {
        if ("object" !== _typeof(r) || null === r) return r;
        var e = r[Symbol.toPrimitive];
        if (void 0 !== e) {
            var i = e.call(r, t || "default");
            if ("object" !== _typeof(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === t ? String : Number)(r)
    }
    module.exports = _toPrimitive;
});
define("workers/@babel/runtime/helpers/toPropertyKey.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    var _typeof = require("./typeof"),
        toPrimitive = require("./toPrimitive");

    function _toPropertyKey(r) {
        var t = toPrimitive(r, "string");
        return "symbol" === _typeof(t) ? t : String(t)
    }
    module.exports = _toPropertyKey;
});
define("workers/@babel/runtime/helpers/typeof.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    function _typeof(o) {
        return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
            return typeof o
        } : function(o) {
            return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o
        }, _typeof(o)
    }
    module.exports = _typeof;
});
define("workers/request/ChildThreadInterface.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    var e = require("../../workers/@babel/runtime/helpers/typeof"),
        r = require("../../workers/@babel/runtime/helpers/classCallCheck"),
        t = require("../../workers/@babel/runtime/helpers/createClass"),
        o = null;
    module.exports = function() {
        function n() {
            r(this, n), this.worker = worker
        }
        return t(n, [{
            key: "getWorker",
            value: function() {
                return this.worker
            }
        }, {
            key: "_childThreadLog",
            value: function(r) {
                "object" === e(r) ? console.warn("[child thread] Log! ", r) : console.warn("[child thread] Log! ".concat(r))
            }
        }, {
            key: "addMessageEventToThread",
            value: function(e) {
                var r = this;
                return new Promise((function(t) {
                    r.worker.onMessage((function(o) {
                        r._childThreadLog("子线程接收数据："), r._childThreadLog(o), e && "function" == typeof e && e(o), t(o)
                    }))
                }))
            }
        }, {
            key: "childThreadMessagePoster",
            value: function() {
                var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    type: "",
                    data: {}
                };
                return r && "object" === e(r) && Object.keys(r).length > 0 ? r.type && "string" == typeof r.type && r.type.length > 0 ? (this._childThreadLog("子线程即将推送数据"), this._childThreadLog(r), void this.worker.postMessage(r)) : this._childThreadLog("消息体类型不能为空！") : this._childThreadLog("子线程未发送任何数据！")
            }
        }], [{
            key: "singleInstance",
            value: function() {
                return o || (o = new n), o
            }
        }]), n
    }();
});
define("workers/request/childThreadHandler.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
    require("../../workers/@babel/runtime/helpers/Arrayincludes");
    var e = require("./ChildThreadInterface"),
        r = function(e, r) {
            return console.warn(e, r), r.map((function(r) {
                return r.storeGroup = r.storeGroup.map((function(r) {
                    return r.checkoutInfo.checked = e, r.wareList = r.wareList.map((function(r) {
                        return r.map((function(r) {
                            return r.checked = e, r
                        }))
                    })), r
                })), r
            }))
        },
        t = function(e, r, t) {
            var n = r.wareList,
                a = t.map((function(e) {
                    return e.storeGroup = e.storeGroup.map((function(e) {
                        return e.wareList = e.wareList.map((function(e) {
                            return e.map((function(e) {
                                return n.forEach((function(r) {
                                    r.forEach((function(t, n) {
                                        e.sku != t.sku || e.storeId != t.storeId || 3 == t.wareType || e.suit || t.suit || (e.checked = t.checked), e.suit && n == r.length - 1 && r[r.length - 1].suitBar && r[r.length - 1].suitId == e.suitId && r[r.length - 1].storeId == e.storeId && (e.checked = r[r.length - 1].checked)
                                    }))
                                })), e
                            }))
                        })), e
                    })), e
                })),
                u = 1;
            if (!(a && a.length > 0)) return {
                storeChecked: u,
                rangeBusinessGroup: a
            };
            var s = a.map((function(r) {
                return r.storeGroup = r.storeGroup.map((function(r) {
                    return r.checkoutInfo.checked = 1, r.wareList = r.wareList.map((function(t) {
                        return t.map((function(t) {
                            var n = 4 === t.wareType || 3 === t.wareType;
                            if (e) 0 !== t.checked || n || (r.checkoutInfo.checked = 0, u = 0);
                            else {
                                var a = 1 === t.stockStatus || 2 === t.stockStatus || 5 === t.stockStatus || 8 === t.stockStatus || 9 === t.stockStatus || 20 === t.stockStatus;
                                0 !== r.checkoutInfo.checked || a || n || (r.checkoutInfo.checked = 0, u = 0)
                            }
                            return t
                        }))
                    })), r
                })), r
            }));
            return {
                storeChecked: u,
                rangeBusinessGroup: s
            }
        },
        n = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                r = [];
            e.forEach((function(e) {
                e.storeGroup.forEach((function(e) {
                    var t = [];
                    e.wareList.filter((function(e) {
                        return e.filter((function(e) {
                            1 === e.checked && (e.wareType ? 3 != e.wareType && 4 !== e.wareType && t.push(e) : t.push(e))
                        }))
                    })), r.push([t])
                }))
            }));
            var t = [];
            return r.filter((function(e) {
                if (e.length <= 0) return !1;
                var r = [];
                e.filter((function(e) {
                    if (!(e && Array.isArray(e) && e.length > 0)) return !1;
                    var t = e.filter((function(e) {
                        return e.sku || e.suitId
                    }));
                    r.push(t)
                })), r && r.length > 0 && t.push(r)
            })), t
        },
        a = function(e) {
            var r = [];
            e.forEach((function(e) {
                e.storeGroup.forEach((function(e) {
                    var t = [];
                    e.wareList.filter((function(e) {
                        return e.filter((function(e) {
                            t.push(e)
                        }))
                    })), r.push([t])
                }))
            }));
            var t = [];
            return r.filter((function(e) {
                if (e.length <= 0) return !1;
                var r = [];
                e.filter((function(e) {
                    if (!(e && Array.isArray(e) && e.length > 0)) return !1;
                    var t = e.filter((function(e) {
                        return e.sku || e.suitId
                    }));
                    r.push(t)
                })), r && r.length > 0 && t.push(r)
            })), t
        },
        u = e.singleInstance();
    u.addMessageEventToThread((function(e) {
        var s = e.type,
            c = e.data;
        switch (s) {
            case "configSelectAll":
                u.childThreadMessagePoster({
                    type: "configSelectAllEnd",
                    data: {
                        flag: c.flag,
                        rangeBusinessGroup: r(c.flag, c.rangeBusinessGroup)
                    }
                });
                break;
            case "configSelectSingle":
                var o = t(c.deleteFlag, c.param, c.rangeBusinessGroup);
                u.childThreadMessagePoster({
                    type: "configSelectSingleEnd",
                    data: {
                        rangeBusinessGroup: o.rangeBusinessGroup,
                        storeChecked: o.storeChecked
                    }
                });
                break;
            case "deleteWareItem":
                var i = n(c.wareList);
                u.childThreadMessagePoster({
                    type: "deleteWareItemEnd",
                    data: {
                        deleteWareData: i
                    }
                });
                break;
            case "deleteUnRangeItem":
                var f = a(c.wareList);
                u.childThreadMessagePoster({
                    type: "deleteUnRangeItemEnd",
                    data: {
                        deleteUnRange: f
                    }
                })
        }
    }));
});
define("workers/response/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
    "use strict";
});