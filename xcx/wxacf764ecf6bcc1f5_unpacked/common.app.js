var __wxAppData = __wxAppData || {};
var __wxAppCode__ = __wxAppCode__ || {};
var global = global || {};
var __WXML_GLOBAL__ = __WXML_GLOBAL__ || {
    entrys: {},
    defines: {},
    modules: {},
    ops: [],
    wxs_nf_init: undefined,
    total_ops: 0
};
var Component = Component || function() {};
var definePlugin = definePlugin || function() {};
var requirePlugin = requirePlugin || function() {};
var Behavior = Behavior || function() {};
var __vd_version_info__ = __vd_version_info__ || {};
var __GWX_GLOBAL__ = __GWX_GLOBAL__ || {};
if (this && this.__g === undefined) Object.defineProperty(this, "__g", {
    configurable: false,
    enumerable: false,
    writable: false,
    value: function() {
        function D(e, t) {
            if (typeof t != "undefined") e.children.push(t)
        }

        function S(e) {
            if (typeof e != "undefined") return {
                tag: "virtual",
                wxKey: e,
                children: []
            };
            return {
                tag: "virtual",
                children: []
            }
        }

        function v(e) {
            return {
                tag: "wx-" + e,
                attr: {},
                children: [],
                n: [],
                raw: {},
                generics: {}
            }
        }

        function e(e, t) {
            t && e.properities.push(t)
        }

        function t(e, t, r) {
            return typeof e[r] != "undefined" ? e[r] : t[r]
        }

        function u(e) {
            console.warn("WXMLRT_" + g + ":" + e)
        }

        function r(e, t) {
            u(t + ":-1:-1:-1: Template `" + e + "` is being called recursively, will be stop.")
        }
        var s = console.warn;
        var n = console.log;

        function o() {
            function e() {}
            e.prototype = {
                hn: function(e, t) {
                    if (typeof e == "object") {
                        var r = 0;
                        var n = false,
                            o = false;
                        for (var a in e) {
                            n = n | a === "__value__";
                            o = o | a === "__wxspec__";
                            r++;
                            if (r > 2) break
                        }
                        return r == 2 && n && o && (t || e.__wxspec__ !== "m" || this.hn(e.__value__) === "h") ? "h" : "n"
                    }
                    return "n"
                },
                nh: function(e, t) {
                    return {
                        __value__: e,
                        __wxspec__: t ? t : true
                    }
                },
                rv: function(e) {
                    return this.hn(e, true) === "n" ? e : this.rv(e.__value__)
                },
                hm: function(e) {
                    if (typeof e == "object") {
                        var t = 0;
                        var r = false,
                            n = false;
                        for (var o in e) {
                            r = r | o === "__value__";
                            n = n | o === "__wxspec__";
                            t++;
                            if (t > 2) break
                        }
                        return t == 2 && r && n && (e.__wxspec__ === "m" || this.hm(e.__value__))
                    }
                    return false
                }
            };
            return new e
        }
        var A = o();

        function T(e) {
            var t = e.split("\n " + " " + " " + " ");
            for (var r = 0; r < t.length; ++r) {
                if (0 == r) continue;
                if (")" === t[r][t[r].length - 1]) t[r] = t[r].replace(/\s\(.*\)$/, "");
                else t[r] = "at anonymous function"
            }
            return t.join("\n " + " " + " " + " ")
        }

        function a(M) {
            function m(e, t, r, n, o) {
                var a = false;
                var i = e[0][1];
                var p, u, l, f, v, c;
                switch (i) {
                    case "?:":
                        p = x(e[1], t, r, n, o, a);
                        l = M && A.hn(p) === "h";
                        f = A.rv(p) ? x(e[2], t, r, n, o, a) : x(e[3], t, r, n, o, a);
                        f = l && A.hn(f) === "n" ? A.nh(f, "c") : f;
                        return f;
                        break;
                    case "&&":
                        p = x(e[1], t, r, n, o, a);
                        l = M && A.hn(p) === "h";
                        f = A.rv(p) ? x(e[2], t, r, n, o, a) : A.rv(p);
                        f = l && A.hn(f) === "n" ? A.nh(f, "c") : f;
                        return f;
                        break;
                    case "||":
                        p = x(e[1], t, r, n, o, a);
                        l = M && A.hn(p) === "h";
                        f = A.rv(p) ? A.rv(p) : x(e[2], t, r, n, o, a);
                        f = l && A.hn(f) === "n" ? A.nh(f, "c") : f;
                        return f;
                        break;
                    case "+":
                    case "*":
                    case "/":
                    case "%":
                    case "|":
                    case "^":
                    case "&":
                    case "===":
                    case "==":
                    case "!=":
                    case "!==":
                    case ">=":
                    case "<=":
                    case ">":
                    case "<":
                    case "<<":
                    case ">>":
                        p = x(e[1], t, r, n, o, a);
                        u = x(e[2], t, r, n, o, a);
                        l = M && (A.hn(p) === "h" || A.hn(u) === "h");
                        switch (i) {
                            case "+":
                                f = A.rv(p) + A.rv(u);
                                break;
                            case "*":
                                f = A.rv(p) * A.rv(u);
                                break;
                            case "/":
                                f = A.rv(p) / A.rv(u);
                                break;
                            case "%":
                                f = A.rv(p) % A.rv(u);
                                break;
                            case "|":
                                f = A.rv(p) | A.rv(u);
                                break;
                            case "^":
                                f = A.rv(p) ^ A.rv(u);
                                break;
                            case "&":
                                f = A.rv(p) & A.rv(u);
                                break;
                            case "===":
                                f = A.rv(p) === A.rv(u);
                                break;
                            case "==":
                                f = A.rv(p) == A.rv(u);
                                break;
                            case "!=":
                                f = A.rv(p) != A.rv(u);
                                break;
                            case "!==":
                                f = A.rv(p) !== A.rv(u);
                                break;
                            case ">=":
                                f = A.rv(p) >= A.rv(u);
                                break;
                            case "<=":
                                f = A.rv(p) <= A.rv(u);
                                break;
                            case ">":
                                f = A.rv(p) > A.rv(u);
                                break;
                            case "<":
                                f = A.rv(p) < A.rv(u);
                                break;
                            case "<<":
                                f = A.rv(p) << A.rv(u);
                                break;
                            case ">>":
                                f = A.rv(p) >> A.rv(u);
                                break;
                            default:
                                break
                        }
                        return l ? A.nh(f, "c") : f;
                        break;
                    case "-":
                        p = e.length === 3 ? x(e[1], t, r, n, o, a) : 0;
                        u = e.length === 3 ? x(e[2], t, r, n, o, a) : x(e[1], t, r, n, o, a);
                        l = M && (A.hn(p) === "h" || A.hn(u) === "h");
                        f = l ? A.rv(p) - A.rv(u) : p - u;
                        return l ? A.nh(f, "c") : f;
                        break;
                    case "!":
                        p = x(e[1], t, r, n, o, a);
                        l = M && A.hn(p) == "h";
                        f = !A.rv(p);
                        return l ? A.nh(f, "c") : f;
                    case "~":
                        p = x(e[1], t, r, n, o, a);
                        l = M && A.hn(p) == "h";
                        f = ~A.rv(p);
                        return l ? A.nh(f, "c") : f;
                    default:
                        s("unrecognized op" + i)
                }
            }

            function x(e, t, r, n, o, a) {
                var i = e[0];
                var p = false;
                if (typeof a !== "undefined") o.ap = a;
                if (typeof i === "object") {
                    var u = i[0];
                    var l, f, v, c, s, y, b, d, h, _, g;
                    switch (u) {
                        case 2:
                            return m(e, t, r, n, o);
                            break;
                        case 4:
                            return x(e[1], t, r, n, o, p);
                            break;
                        case 5:
                            switch (e.length) {
                                case 2:
                                    l = x(e[1], t, r, n, o, p);
                                    return M ? [l] : [A.rv(l)];
                                    return [l];
                                    break;
                                case 1:
                                    return [];
                                    break;
                                default:
                                    l = x(e[1], t, r, n, o, p);
                                    v = x(e[2], t, r, n, o, p);
                                    l.push(M ? v : A.rv(v));
                                    return l;
                                    break
                            }
                            break;
                        case 6:
                            l = x(e[1], t, r, n, o);
                            var w = o.ap;
                            h = A.hn(l) === "h";
                            f = h ? A.rv(l) : l;
                            o.is_affected |= h;
                            if (M) {
                                if (f === null || typeof f === "undefined") {
                                    return h ? A.nh(undefined, "e") : undefined
                                }
                                v = x(e[2], t, r, n, o, p);
                                _ = A.hn(v) === "h";
                                c = _ ? A.rv(v) : v;
                                o.ap = w;
                                o.is_affected |= _;
                                if (c === null || typeof c === "undefined" || c === "__proto__" || c === "prototype" || c === "caller") {
                                    return h || _ ? A.nh(undefined, "e") : undefined
                                }
                                y = f[c];
                                if (typeof y === "function" && !w) y = undefined;
                                g = A.hn(y) === "h";
                                o.is_affected |= g;
                                return h || _ ? g ? y : A.nh(y, "e") : y
                            } else {
                                if (f === null || typeof f === "undefined") {
                                    return undefined
                                }
                                v = x(e[2], t, r, n, o, p);
                                _ = A.hn(v) === "h";
                                c = _ ? A.rv(v) : v;
                                o.ap = w;
                                o.is_affected |= _;
                                if (c === null || typeof c === "undefined" || c === "__proto__" || c === "prototype" || c === "caller") {
                                    return undefined
                                }
                                y = f[c];
                                if (typeof y === "function" && !w) y = undefined;
                                g = A.hn(y) === "h";
                                o.is_affected |= g;
                                return g ? A.rv(y) : y
                            }
                        case 7:
                            switch (e[1][0]) {
                                case 11:
                                    o.is_affected |= A.hn(n) === "h";
                                    return n;
                                case 3:
                                    b = A.rv(r);
                                    d = A.rv(t);
                                    v = e[1][1];
                                    if (n && n.f && n.f.hasOwnProperty(v)) {
                                        l = n.f;
                                        o.ap = true
                                    } else {
                                        l = b && b.hasOwnProperty(v) ? r : d && d.hasOwnProperty(v) ? t : undefined
                                    }
                                    if (M) {
                                        if (l) {
                                            h = A.hn(l) === "h";
                                            f = h ? A.rv(l) : l;
                                            y = f[v];
                                            g = A.hn(y) === "h";
                                            o.is_affected |= h || g;
                                            y = h && !g ? A.nh(y, "e") : y;
                                            return y
                                        }
                                    } else {
                                        if (l) {
                                            h = A.hn(l) === "h";
                                            f = h ? A.rv(l) : l;
                                            y = f[v];
                                            g = A.hn(y) === "h";
                                            o.is_affected |= h || g;
                                            return A.rv(y)
                                        }
                                    }
                                    return undefined
                            }
                            break;
                        case 8:
                            l = {};
                            l[e[1]] = x(e[2], t, r, n, o, p);
                            return l;
                            break;
                        case 9:
                            l = x(e[1], t, r, n, o, p);
                            v = x(e[2], t, r, n, o, p);

                            function O(e, t, r) {
                                var n, o;
                                h = A.hn(e) === "h";
                                _ = A.hn(t) === "h";
                                f = A.rv(e);
                                c = A.rv(t);
                                for (var a in c) {
                                    if (r || !f.hasOwnProperty(a)) {
                                        f[a] = M ? _ ? A.nh(c[a], "e") : c[a] : A.rv(c[a])
                                    }
                                }
                                return e
                            }
                            var s = l;
                            var j = true;
                            if (typeof e[1][0] === "object" && e[1][0][0] === 10) {
                                l = v;
                                v = s;
                                j = false
                            }
                            if (typeof e[1][0] === "object" && e[1][0][0] === 10) {
                                var P = {};
                                return O(O(P, l, j), v, j)
                            } else return O(l, v, j);
                            break;
                        case 10:
                            l = x(e[1], t, r, n, o, p);
                            l = M ? l : A.rv(l);
                            return l;
                            break;
                        case 12:
                            var P;
                            l = x(e[1], t, r, n, o);
                            if (!o.ap) {
                                return M && A.hn(l) === "h" ? A.nh(P, "f") : P
                            }
                            var w = o.ap;
                            v = x(e[2], t, r, n, o, p);
                            o.ap = w;
                            h = A.hn(l) === "h";
                            _ = N(v);
                            f = A.rv(l);
                            c = A.rv(v);
                            snap_bb = K(c, "nv_");
                            try {
                                P = typeof f === "function" ? K(f.apply(null, snap_bb)) : undefined
                            } catch (t) {
                                t.message = t.message.replace(/nv_/g, "");
                                t.stack = t.stack.substring(0, t.stack.indexOf("\n", t.stack.lastIndexOf("at nv_")));
                                t.stack = t.stack.replace(/\snv_/g, " ");
                                t.stack = T(t.stack);
                                if (n.debugInfo) {
                                    t.stack += "\n " + " " + " " + " at " + n.debugInfo[0] + ":" + n.debugInfo[1] + ":" + n.debugInfo[2];
                                    console.error(t)
                                }
                                P = undefined
                            }
                            return M && (_ || h) ? A.nh(P, "f") : P
                    }
                } else {
                    if (i === 3 || i === 1) return e[1];
                    else if (i === 11) {
                        var l = "";
                        for (var D = 1; D < e.length; D++) {
                            var S = A.rv(x(e[D], t, r, n, o, p));
                            l += typeof S === "undefined" ? "" : S
                        }
                        return l
                    }
                }
            }

            function e(e, t, r, n, o, a) {
                if (e[0] == "11182016") {
                    n.debugInfo = e[2];
                    return x(e[1], t, r, n, o, a)
                } else {
                    n.debugInfo = null;
                    return x(e, t, r, n, o, a)
                }
            }
            return e
        }
        var f = a(true);
        var c = a(false);

        function i(e, t, r, n, o, a, i, p) {
            {
                var u = {
                    is_affected: false
                };
                var l = f(t, r, n, o, u);
                if (JSON.stringify(l) != JSON.stringify(a) || u.is_affected != p) {
                    console.warn("A. " + e + " get result " + JSON.stringify(l) + ", " + u.is_affected + ", but " + JSON.stringify(a) + ", " + p + " is expected")
                }
            } {
                var u = {
                    is_affected: false
                };
                var l = c(t, r, n, o, u);
                if (JSON.stringify(l) != JSON.stringify(i) || u.is_affected != p) {
                    console.warn("B. " + e + " get result " + JSON.stringify(l) + ", " + u.is_affected + ", but " + JSON.stringify(i) + ", " + p + " is expected")
                }
            }
        }

        function y(e, t, r, n, o, a, i, p, u) {
            var l = A.hn(e) === "n";
            var f = A.rv(n);
            var v = f.hasOwnProperty(i);
            var c = f.hasOwnProperty(p);
            var s = f[i];
            var y = f[p];
            var b = Object.prototype.toString.call(A.rv(e));
            var d = b[8];
            if (d === "N" && b[10] === "l") d = "X";
            var h;
            if (l) {
                if (d === "A") {
                    var _;
                    for (var g = 0; g < e.length; g++) {
                        f[i] = e[g];
                        f[p] = l ? g : A.nh(g, "h");
                        _ = A.rv(e[g]);
                        var w = u && _ ? u === "*this" ? _ : A.rv(_[u]) : undefined;
                        h = S(w);
                        D(a, h);
                        t(r, f, h, o)
                    }
                } else if (d === "O") {
                    var g = 0;
                    var _;
                    for (var O in e) {
                        f[i] = e[O];
                        f[p] = l ? O : A.nh(O, "h");
                        _ = A.rv(e[O]);
                        var w = u && _ ? u === "*this" ? _ : A.rv(_[u]) : undefined;
                        h = S(w);
                        D(a, h);
                        t(r, f, h, o);
                        g++
                    }
                } else if (d === "S") {
                    for (var g = 0; g < e.length; g++) {
                        f[i] = e[g];
                        f[p] = l ? g : A.nh(g, "h");
                        h = S(e[g] + g);
                        D(a, h);
                        t(r, f, h, o)
                    }
                } else if (d === "N") {
                    for (var g = 0; g < e; g++) {
                        f[i] = g;
                        f[p] = l ? g : A.nh(g, "h");
                        h = S(g);
                        D(a, h);
                        t(r, f, h, o)
                    }
                } else {}
            } else {
                var j = A.rv(e);
                var _, P;
                if (d === "A") {
                    for (var g = 0; g < j.length; g++) {
                        P = j[g];
                        P = A.hn(P) === "n" ? A.nh(P, "h") : P;
                        _ = A.rv(P);
                        f[i] = P;
                        f[p] = l ? g : A.nh(g, "h");
                        var w = u && _ ? u === "*this" ? _ : A.rv(_[u]) : undefined;
                        h = S(w);
                        D(a, h);
                        t(r, f, h, o)
                    }
                } else if (d === "O") {
                    var g = 0;
                    for (var O in j) {
                        P = j[O];
                        P = A.hn(P) === "n" ? A.nh(P, "h") : P;
                        _ = A.rv(P);
                        f[i] = P;
                        f[p] = l ? O : A.nh(O, "h");
                        var w = u && _ ? u === "*this" ? _ : A.rv(_[u]) : undefined;
                        h = S(w);
                        D(a, h);
                        t(r, f, h, o);
                        g++
                    }
                } else if (d === "S") {
                    for (var g = 0; g < j.length; g++) {
                        P = A.nh(j[g], "h");
                        f[i] = P;
                        f[p] = l ? g : A.nh(g, "h");
                        h = S(e[g] + g);
                        D(a, h);
                        t(r, f, h, o)
                    }
                } else if (d === "N") {
                    for (var g = 0; g < j; g++) {
                        P = A.nh(g, "h");
                        f[i] = P;
                        f[p] = l ? g : A.nh(g, "h");
                        h = S(g);
                        D(a, h);
                        t(r, f, h, o)
                    }
                } else {}
            }
            if (v) {
                f[i] = s
            } else {
                delete f[i]
            }
            if (c) {
                f[p] = y
            } else {
                delete f[p]
            }
        }

        function N(e) {
            if (A.hn(e) == "h") return true;
            if (typeof e !== "object") return false;
            for (var t in e) {
                if (e.hasOwnProperty(t)) {
                    if (N(e[t])) return true
                }
            }
            return false
        }

        function b(e, t, r, n, o) {
            var a = false;
            var i = K(n, "", 2);
            if (o.ap && i && i.constructor === Function) {
                t = "$wxs:" + t;
                e.attr["$gdc"] = K
            }
            if (o.is_affected || N(n)) {
                e.n.push(t);
                e.raw[t] = n
            }
            e.attr[t] = i
        }

        function d(e, t, r, n, o, a) {
            a.opindex = r;
            var i = {},
                p;
            var u = c(z[r], n, o, a, i);
            b(e, t, r, u, i)
        }

        function h(e, t, r, n, o, a, i) {
            i.opindex = n;
            var p = {},
                u;
            var l = c(e[n], o, a, i, p);
            b(t, r, n, l, p)
        }

        function p(e, t, r, n) {
            n.opindex = e;
            var o = {};
            var a = c(z[e], t, r, n, o);
            return a && a.constructor === Function ? undefined : a
        }

        function l(e, t, r, n, o) {
            o.opindex = t;
            var a = {};
            var i = c(e[t], r, n, o, a);
            return i && i.constructor === Function ? undefined : i
        }

        function _(e, t, r, n, o) {
            var o = o || {};
            n.opindex = e;
            return f(z[e], t, r, n, o)
        }

        function w(e, t, r, n, o, a) {
            var a = a || {};
            o.opindex = t;
            return f(e[t], r, n, o, a)
        }

        function O(e, t, r, n, o, a, i, p, u) {
            var l = {};
            var f = _(e, r, n, o);
            y(f, t, r, n, o, a, i, p, u)
        }

        function j(e, t, r, n, o, a, i, p, u, l) {
            var f = {};
            var v = w(e, t, n, o, a);
            y(v, r, n, o, a, i, p, u, l)
        }

        function P(e, t, r, n, o, a) {
            var i = v(e);
            var p = 0;
            for (var u = 0; u < t.length; u += 2) {
                if (p + t[u + 1] < 0) {
                    i.attr[t[u]] = true
                } else {
                    d(i, t[u], p + t[u + 1], n, o, a);
                    if (p === 0) p = t[u + 1]
                }
            }
            for (var u = 0; u < r.length; u += 2) {
                if (p + r[u + 1] < 0) {
                    i.generics[r[u]] = ""
                } else {
                    var l = c(z[p + r[u + 1]], n, o, a);
                    if (l != "") l = "wx-" + l;
                    i.generics[r[u]] = l;
                    if (p === 0) p = r[u + 1]
                }
            }
            return i
        }

        function M(e, t, r, n, o, a, i) {
            var p = v(t);
            var u = 0;
            for (var l = 0; l < r.length; l += 2) {
                if (u + r[l + 1] < 0) {
                    p.attr[r[l]] = true
                } else {
                    h(e, p, r[l], u + r[l + 1], o, a, i);
                    if (u === 0) u = r[l + 1]
                }
            }
            for (var l = 0; l < n.length; l += 2) {
                if (u + n[l + 1] < 0) {
                    p.generics[n[l]] = ""
                } else {
                    var f = c(e[u + n[l + 1]], o, a, i);
                    if (f != "") f = "wx-" + f;
                    p.generics[n[l]] = f;
                    if (u === 0) u = n[l + 1]
                }
            }
            return p
        }
        var m = function() {
            if (typeof __WXML_GLOBAL__ === "undefined" || undefined === __WXML_GLOBAL__.wxs_nf_init) {
                x();
                C();
                k();
                U();
                I();
                L();
                E();
                R();
                F()
            }
            if (typeof __WXML_GLOBAL__ !== "undefined") __WXML_GLOBAL__.wxs_nf_init = true
        };
        var x = function() {
            Object.defineProperty(Object.prototype, "nv_constructor", {
                writable: true,
                value: "Object"
            });
            Object.defineProperty(Object.prototype, "nv_toString", {
                writable: true,
                value: function() {
                    return "[object Object]"
                }
            })
        };
        var C = function() {
            Object.defineProperty(Function.prototype, "nv_constructor", {
                writable: true,
                value: "Function"
            });
            Object.defineProperty(Function.prototype, "nv_length", {get: function() {
                    return this.length
                },
                set: function() {}
            });
            Object.defineProperty(Function.prototype, "nv_toString", {
                writable: true,
                value: function() {
                    return "[function Function]"
                }
            })
        };
        var k = function() {
            Object.defineProperty(Array.prototype, "nv_toString", {
                writable: true,
                value: function() {
                    return this.nv_join()
                }
            });
            Object.defineProperty(Array.prototype, "nv_join", {
                writable: true,
                value: function(e) {
                    e = undefined == e ? "," : e;
                    var t = "";
                    for (var r = 0; r < this.length; ++r) {
                        if (0 != r) t += e;
                        if (null == this[r] || undefined == this[r]) t += "";
                        else if (typeof this[r] == "function") t += this[r].nv_toString();
                        else if (typeof this[r] == "object" && this[r].nv_constructor === "Array") t += this[r].nv_join();
                        else t += this[r].toString()
                    }
                    return t
                }
            });
            Object.defineProperty(Array.prototype, "nv_constructor", {
                writable: true,
                value: "Array"
            });
            Object.defineProperty(Array.prototype, "nv_concat", {
                writable: true,
                value: Array.prototype.concat
            });
            Object.defineProperty(Array.prototype, "nv_pop", {
                writable: true,
                value: Array.prototype.pop
            });
            Object.defineProperty(Array.prototype, "nv_push", {
                writable: true,
                value: Array.prototype.push
            });
            Object.defineProperty(Array.prototype, "nv_reverse", {
                writable: true,
                value: Array.prototype.reverse
            });
            Object.defineProperty(Array.prototype, "nv_shift", {
                writable: true,
                value: Array.prototype.shift
            });
            Object.defineProperty(Array.prototype, "nv_slice", {
                writable: true,
                value: Array.prototype.slice
            });
            Object.defineProperty(Array.prototype, "nv_sort", {
                writable: true,
                value: Array.prototype.sort
            });
            Object.defineProperty(Array.prototype, "nv_splice", {
                writable: true,
                value: Array.prototype.splice
            });
            Object.defineProperty(Array.prototype, "nv_unshift", {
                writable: true,
                value: Array.prototype.unshift
            });
            Object.defineProperty(Array.prototype, "nv_indexOf", {
                writable: true,
                value: Array.prototype.indexOf
            });
            Object.defineProperty(Array.prototype, "nv_lastIndexOf", {
                writable: true,
                value: Array.prototype.lastIndexOf
            });
            Object.defineProperty(Array.prototype, "nv_every", {
                writable: true,
                value: Array.prototype.every
            });
            Object.defineProperty(Array.prototype, "nv_some", {
                writable: true,
                value: Array.prototype.some
            });
            Object.defineProperty(Array.prototype, "nv_forEach", {
                writable: true,
                value: Array.prototype.forEach
            });
            Object.defineProperty(Array.prototype, "nv_map", {
                writable: true,
                value: Array.prototype.map
            });
            Object.defineProperty(Array.prototype, "nv_filter", {
                writable: true,
                value: Array.prototype.filter
            });
            Object.defineProperty(Array.prototype, "nv_reduce", {
                writable: true,
                value: Array.prototype.reduce
            });
            Object.defineProperty(Array.prototype, "nv_reduceRight", {
                writable: true,
                value: Array.prototype.reduceRight
            });
            Object.defineProperty(Array.prototype, "nv_length", {get: function() {
                    return this.length
                },
                set: function(e) {
                    this.length = e
                }
            })
        };
        var U = function() {
            Object.defineProperty(String.prototype, "nv_constructor", {
                writable: true,
                value: "String"
            });
            Object.defineProperty(String.prototype, "nv_toString", {
                writable: true,
                value: String.prototype.toString
            });
            Object.defineProperty(String.prototype, "nv_valueOf", {
                writable: true,
                value: String.prototype.valueOf
            });
            Object.defineProperty(String.prototype, "nv_charAt", {
                writable: true,
                value: String.prototype.charAt
            });
            Object.defineProperty(String.prototype, "nv_charCodeAt", {
                writable: true,
                value: String.prototype.charCodeAt
            });
            Object.defineProperty(String.prototype, "nv_concat", {
                writable: true,
                value: String.prototype.concat
            });
            Object.defineProperty(String.prototype, "nv_indexOf", {
                writable: true,
                value: String.prototype.indexOf
            });
            Object.defineProperty(String.prototype, "nv_lastIndexOf", {
                writable: true,
                value: String.prototype.lastIndexOf
            });
            Object.defineProperty(String.prototype, "nv_localeCompare", {
                writable: true,
                value: String.prototype.localeCompare
            });
            Object.defineProperty(String.prototype, "nv_match", {
                writable: true,
                value: String.prototype.match
            });
            Object.defineProperty(String.prototype, "nv_replace", {
                writable: true,
                value: String.prototype.replace
            });
            Object.defineProperty(String.prototype, "nv_search", {
                writable: true,
                value: String.prototype.search
            });
            Object.defineProperty(String.prototype, "nv_slice", {
                writable: true,
                value: String.prototype.slice
            });
            Object.defineProperty(String.prototype, "nv_split", {
                writable: true,
                value: String.prototype.split
            });
            Object.defineProperty(String.prototype, "nv_substring", {
                writable: true,
                value: String.prototype.substring
            });
            Object.defineProperty(String.prototype, "nv_toLowerCase", {
                writable: true,
                value: String.prototype.toLowerCase
            });
            Object.defineProperty(String.prototype, "nv_toLocaleLowerCase", {
                writable: true,
                value: String.prototype.toLocaleLowerCase
            });
            Object.defineProperty(String.prototype, "nv_toUpperCase", {
                writable: true,
                value: String.prototype.toUpperCase
            });
            Object.defineProperty(String.prototype, "nv_toLocaleUpperCase", {
                writable: true,
                value: String.prototype.toLocaleUpperCase
            });
            Object.defineProperty(String.prototype, "nv_trim", {
                writable: true,
                value: String.prototype.trim
            });
            Object.defineProperty(String.prototype, "nv_length", {get: function() {
                    return this.length
                },
                set: function(e) {
                    this.length = e
                }
            })
        };
        var I = function() {
            Object.defineProperty(Boolean.prototype, "nv_constructor", {
                writable: true,
                value: "Boolean"
            });
            Object.defineProperty(Boolean.prototype, "nv_toString", {
                writable: true,
                value: Boolean.prototype.toString
            });
            Object.defineProperty(Boolean.prototype, "nv_valueOf", {
                writable: true,
                value: Boolean.prototype.valueOf
            })
        };
        var L = function() {
            Object.defineProperty(Number, "nv_MAX_VALUE", {
                writable: false,
                value: Number.MAX_VALUE
            });
            Object.defineProperty(Number, "nv_MIN_VALUE", {
                writable: false,
                value: Number.MIN_VALUE
            });
            Object.defineProperty(Number, "nv_NEGATIVE_INFINITY", {
                writable: false,
                value: Number.NEGATIVE_INFINITY
            });
            Object.defineProperty(Number, "nv_POSITIVE_INFINITY", {
                writable: false,
                value: Number.POSITIVE_INFINITY
            });
            Object.defineProperty(Number.prototype, "nv_constructor", {
                writable: true,
                value: "Number"
            });
            Object.defineProperty(Number.prototype, "nv_toString", {
                writable: true,
                value: Number.prototype.toString
            });
            Object.defineProperty(Number.prototype, "nv_toLocaleString", {
                writable: true,
                value: Number.prototype.toLocaleString
            });
            Object.defineProperty(Number.prototype, "nv_valueOf", {
                writable: true,
                value: Number.prototype.valueOf
            });
            Object.defineProperty(Number.prototype, "nv_toFixed", {
                writable: true,
                value: Number.prototype.toFixed
            });
            Object.defineProperty(Number.prototype, "nv_toExponential", {
                writable: true,
                value: Number.prototype.toExponential
            });
            Object.defineProperty(Number.prototype, "nv_toPrecision", {
                writable: true,
                value: Number.prototype.toPrecision
            })
        };
        var E = function() {
            Object.defineProperty(Math, "nv_E", {
                writable: false,
                value: Math.E
            });
            Object.defineProperty(Math, "nv_LN10", {
                writable: false,
                value: Math.LN10
            });
            Object.defineProperty(Math, "nv_LN2", {
                writable: false,
                value: Math.LN2
            });
            Object.defineProperty(Math, "nv_LOG2E", {
                writable: false,
                value: Math.LOG2E
            });
            Object.defineProperty(Math, "nv_LOG10E", {
                writable: false,
                value: Math.LOG10E
            });
            Object.defineProperty(Math, "nv_PI", {
                writable: false,
                value: Math.PI
            });
            Object.defineProperty(Math, "nv_SQRT1_2", {
                writable: false,
                value: Math.SQRT1_2
            });
            Object.defineProperty(Math, "nv_SQRT2", {
                writable: false,
                value: Math.SQRT2
            });
            Object.defineProperty(Math, "nv_abs", {
                writable: false,
                value: Math.abs
            });
            Object.defineProperty(Math, "nv_acos", {
                writable: false,
                value: Math.acos
            });
            Object.defineProperty(Math, "nv_asin", {
                writable: false,
                value: Math.asin
            });
            Object.defineProperty(Math, "nv_atan", {
                writable: false,
                value: Math.atan
            });
            Object.defineProperty(Math, "nv_atan2", {
                writable: false,
                value: Math.atan2
            });
            Object.defineProperty(Math, "nv_ceil", {
                writable: false,
                value: Math.ceil
            });
            Object.defineProperty(Math, "nv_cos", {
                writable: false,
                value: Math.cos
            });
            Object.defineProperty(Math, "nv_exp", {
                writable: false,
                value: Math.exp
            });
            Object.defineProperty(Math, "nv_floor", {
                writable: false,
                value: Math.floor
            });
            Object.defineProperty(Math, "nv_log", {
                writable: false,
                value: Math.log
            });
            Object.defineProperty(Math, "nv_max", {
                writable: false,
                value: Math.max
            });
            Object.defineProperty(Math, "nv_min", {
                writable: false,
                value: Math.min
            });
            Object.defineProperty(Math, "nv_pow", {
                writable: false,
                value: Math.pow
            });
            Object.defineProperty(Math, "nv_random", {
                writable: false,
                value: Math.random
            });
            Object.defineProperty(Math, "nv_round", {
                writable: false,
                value: Math.round
            });
            Object.defineProperty(Math, "nv_sin", {
                writable: false,
                value: Math.sin
            });
            Object.defineProperty(Math, "nv_sqrt", {
                writable: false,
                value: Math.sqrt
            });
            Object.defineProperty(Math, "nv_tan", {
                writable: false,
                value: Math.tan
            })
        };
        var R = function() {
            Object.defineProperty(Date.prototype, "nv_constructor", {
                writable: true,
                value: "Date"
            });
            Object.defineProperty(Date, "nv_parse", {
                writable: true,
                value: Date.parse
            });
            Object.defineProperty(Date, "nv_UTC", {
                writable: true,
                value: Date.UTC
            });
            Object.defineProperty(Date, "nv_now", {
                writable: true,
                value: Date.now
            });
            Object.defineProperty(Date.prototype, "nv_toString", {
                writable: true,
                value: Date.prototype.toString
            });
            Object.defineProperty(Date.prototype, "nv_toDateString", {
                writable: true,
                value: Date.prototype.toDateString
            });
            Object.defineProperty(Date.prototype, "nv_toTimeString", {
                writable: true,
                value: Date.prototype.toTimeString
            });
            Object.defineProperty(Date.prototype, "nv_toLocaleString", {
                writable: true,
                value: Date.prototype.toLocaleString
            });
            Object.defineProperty(Date.prototype, "nv_toLocaleDateString", {
                writable: true,
                value: Date.prototype.toLocaleDateString
            });
            Object.defineProperty(Date.prototype, "nv_toLocaleTimeString", {
                writable: true,
                value: Date.prototype.toLocaleTimeString
            });
            Object.defineProperty(Date.prototype, "nv_valueOf", {
                writable: true,
                value: Date.prototype.valueOf
            });
            Object.defineProperty(Date.prototype, "nv_getTime", {
                writable: true,
                value: Date.prototype.getTime
            });
            Object.defineProperty(Date.prototype, "nv_getFullYear", {
                writable: true,
                value: Date.prototype.getFullYear
            });
            Object.defineProperty(Date.prototype, "nv_getUTCFullYear", {
                writable: true,
                value: Date.prototype.getUTCFullYear
            });
            Object.defineProperty(Date.prototype, "nv_getMonth", {
                writable: true,
                value: Date.prototype.getMonth
            });
            Object.defineProperty(Date.prototype, "nv_getUTCMonth", {
                writable: true,
                value: Date.prototype.getUTCMonth
            });
            Object.defineProperty(Date.prototype, "nv_getDate", {
                writable: true,
                value: Date.prototype.getDate
            });
            Object.defineProperty(Date.prototype, "nv_getUTCDate", {
                writable: true,
                value: Date.prototype.getUTCDate
            });
            Object.defineProperty(Date.prototype, "nv_getDay", {
                writable: true,
                value: Date.prototype.getDay
            });
            Object.defineProperty(Date.prototype, "nv_getUTCDay", {
                writable: true,
                value: Date.prototype.getUTCDay
            });
            Object.defineProperty(Date.prototype, "nv_getHours", {
                writable: true,
                value: Date.prototype.getHours
            });
            Object.defineProperty(Date.prototype, "nv_getUTCHours", {
                writable: true,
                value: Date.prototype.getUTCHours
            });
            Object.defineProperty(Date.prototype, "nv_getMinutes", {
                writable: true,
                value: Date.prototype.getMinutes
            });
            Object.defineProperty(Date.prototype, "nv_getUTCMinutes", {
                writable: true,
                value: Date.prototype.getUTCMinutes
            });
            Object.defineProperty(Date.prototype, "nv_getSeconds", {
                writable: true,
                value: Date.prototype.getSeconds
            });
            Object.defineProperty(Date.prototype, "nv_getUTCSeconds", {
                writable: true,
                value: Date.prototype.getUTCSeconds
            });
            Object.defineProperty(Date.prototype, "nv_getMilliseconds", {
                writable: true,
                value: Date.prototype.getMilliseconds
            });
            Object.defineProperty(Date.prototype, "nv_getUTCMilliseconds", {
                writable: true,
                value: Date.prototype.getUTCMilliseconds
            });
            Object.defineProperty(Date.prototype, "nv_getTimezoneOffset", {
                writable: true,
                value: Date.prototype.getTimezoneOffset
            });
            Object.defineProperty(Date.prototype, "nv_setTime", {
                writable: true,
                value: Date.prototype.setTime
            });
            Object.defineProperty(Date.prototype, "nv_setMilliseconds", {
                writable: true,
                value: Date.prototype.setMilliseconds
            });
            Object.defineProperty(Date.prototype, "nv_setUTCMilliseconds", {
                writable: true,
                value: Date.prototype.setUTCMilliseconds
            });
            Object.defineProperty(Date.prototype, "nv_setSeconds", {
                writable: true,
                value: Date.prototype.setSeconds
            });
            Object.defineProperty(Date.prototype, "nv_setUTCSeconds", {
                writable: true,
                value: Date.prototype.setUTCSeconds
            });
            Object.defineProperty(Date.prototype, "nv_setMinutes", {
                writable: true,
                value: Date.prototype.setMinutes
            });
            Object.defineProperty(Date.prototype, "nv_setUTCMinutes", {
                writable: true,
                value: Date.prototype.setUTCMinutes
            });
            Object.defineProperty(Date.prototype, "nv_setHours", {
                writable: true,
                value: Date.prototype.setHours
            });
            Object.defineProperty(Date.prototype, "nv_setUTCHours", {
                writable: true,
                value: Date.prototype.setUTCHours
            });
            Object.defineProperty(Date.prototype, "nv_setDate", {
                writable: true,
                value: Date.prototype.setDate
            });
            Object.defineProperty(Date.prototype, "nv_setUTCDate", {
                writable: true,
                value: Date.prototype.setUTCDate
            });
            Object.defineProperty(Date.prototype, "nv_setMonth", {
                writable: true,
                value: Date.prototype.setMonth
            });
            Object.defineProperty(Date.prototype, "nv_setUTCMonth", {
                writable: true,
                value: Date.prototype.setUTCMonth
            });
            Object.defineProperty(Date.prototype, "nv_setFullYear", {
                writable: true,
                value: Date.prototype.setFullYear
            });
            Object.defineProperty(Date.prototype, "nv_setUTCFullYear", {
                writable: true,
                value: Date.prototype.setUTCFullYear
            });
            Object.defineProperty(Date.prototype, "nv_toUTCString", {
                writable: true,
                value: Date.prototype.toUTCString
            });
            Object.defineProperty(Date.prototype, "nv_toISOString", {
                writable: true,
                value: Date.prototype.toISOString
            });
            Object.defineProperty(Date.prototype, "nv_toJSON", {
                writable: true,
                value: Date.prototype.toJSON
            })
        };
        var F = function() {
            Object.defineProperty(RegExp.prototype, "nv_constructor", {
                writable: true,
                value: "RegExp"
            });
            Object.defineProperty(RegExp.prototype, "nv_exec", {
                writable: true,
                value: RegExp.prototype.exec
            });
            Object.defineProperty(RegExp.prototype, "nv_test", {
                writable: true,
                value: RegExp.prototype.test
            });
            Object.defineProperty(RegExp.prototype, "nv_toString", {
                writable: true,
                value: RegExp.prototype.toString
            });
            Object.defineProperty(RegExp.prototype, "nv_source", {get: function() {
                    return this.source
                },
                set: function() {}
            });
            Object.defineProperty(RegExp.prototype, "nv_global", {get: function() {
                    return this.global
                },
                set: function() {}
            });
            Object.defineProperty(RegExp.prototype, "nv_ignoreCase", {get: function() {
                    return this.ignoreCase
                },
                set: function() {}
            });
            Object.defineProperty(RegExp.prototype, "nv_multiline", {get: function() {
                    return this.multiline
                },
                set: function() {}
            });
            Object.defineProperty(RegExp.prototype, "nv_lastIndex", {get: function() {
                    return this.lastIndex
                },
                set: function(e) {
                    this.lastIndex = e
                }
            })
        };
        m();
        var J = function() {
            var e = Array.prototype.slice.call(arguments);
            e.unshift(Date);
            return new(Function.prototype.bind.apply(Date, e))
        };
        var B = function() {
            var e = Array.prototype.slice.call(arguments);
            e.unshift(RegExp);
            return new(Function.prototype.bind.apply(RegExp, e))
        };
        var Y = {};
        Y.nv_log = function() {
            var e = "WXSRT:";
            for (var t = 0; t < arguments.length; ++t) e += arguments[t] + " ";
            console.log(e)
        };
        var G = parseInt,
            X = parseFloat,
            H = isNaN,
            V = isFinite,
            $ = decodeURI,
            W = decodeURIComponent,
            Q = encodeURI,
            q = encodeURIComponent;

        function K(e, t, r) {
            e = A.rv(e);
            if (e === null || e === undefined) return e;
            if (typeof e === "string" || typeof e === "boolean" || typeof e === "number") return e;
            if (e.constructor === Object) {
                var n = {};
                for (var o in e)
                    if (Object.prototype.hasOwnProperty.call(e, o))
                        if (undefined === t) n[o.substring(3)] = K(e[o], t, r);
                        else n[t + o] = K(e[o], t, r);
                return n
            }
            if (e.constructor === Array) {
                var n = [];
                for (var a = 0; a < e.length; a++) n.push(K(e[a], t, r));
                return n
            }
            if (e.constructor === Date) {
                var n = new Date;
                n.setTime(e.getTime());
                return n
            }
            if (e.constructor === RegExp) {
                var i = "";
                if (e.global) i += "g";
                if (e.ignoreCase) i += "i";
                if (e.multiline) i += "m";
                return new RegExp(e.source, i)
            }
            if (r && typeof e === "function") {
                if (r == 1) return K(e(), undefined, 2);
                if (r == 2) return e
            }
            return null
        }
        var Z = {};
        Z.nv_stringify = function(e) {
            JSON.stringify(e);
            return JSON.stringify(K(e))
        };
        Z.nv_parse = function(e) {
            if (e === undefined) return undefined;
            var t = JSON.parse(e);
            return K(t, "nv_")
        };

        function ee(e, t, r, n) {
            e.extraAttr = {
                t_action: t,
                t_rawid: r
            };
            if (typeof n != "undefined") e.extraAttr.t_cid = n
        }

        function te() {
            if (typeof __globalThis.__webview_engine_version__ == "undefined") return 0;
            return __globalThis.__webview_engine_version__
        }

        function re(e, t, r, n, o, a) {
            var i = ne(t, r, n);
            if (i) e.push(i);
            else {
                e.push("");
                u(n + ":import:" + o + ":" + a + ": Path `" + t + "` not found from `" + n + "`.")
            }
        }

        function ne(e, t, r) {
            if (e[0] != "/") {
                var n = r.split("/");
                n.pop();
                var o = e.split("/");
                for (var a = 0; a < o.length; a++) {
                    if (o[a] == "..") n.pop();
                    else if (!o[a] || o[a] == ".") continue;
                    else n.push(o[a])
                }
                e = n.join("/")
            }
            if (r[0] == "." && e[0] == "/") e = "." + e;
            if (t[e]) return e;
            if (t[e + ".wxml"]) return e + ".wxml"
        }

        function oe(e, t, r, n) {
            if (!t) return;
            if (n[e][t]) return n[e][t];
            for (var o = r[e].i.length - 1; o >= 0; o--) {
                if (r[e].i[o] && n[r[e].i[o]][t]) return n[r[e].i[o]][t]
            }
            for (var o = r[e].ti.length - 1; o >= 0; o--) {
                var a = ne(r[e].ti[o], r, e);
                if (a && n[a][t]) return n[a][t]
            }
            var i = ae(r, e);
            for (var o = 0; o < i.length; o++) {
                if (i[o] && n[i[o]][t]) return n[i[o]][t]
            }
            for (var p = r[e].j.length - 1; p >= 0; p--)
                if (r[e].j[p]) {
                    for (var a = r[r[e].j[p]].ti.length - 1; a >= 0; a--) {
                        var u = ne(r[r[e].j[p]].ti[a], r, e);
                        if (u && n[u][t]) {
                            return n[u][t]
                        }
                    }
                }
        }

        function ae(e, t) {
            if (!t) return [];
            if ($gaic[t]) {
                return $gaic[t]
            }
            var r = [],
                n = [],
                o = 0,
                a = 0,
                i = {},
                p = {};
            n.push(t);
            p[t] = true;
            a++;
            while (o < a) {
                var u = n[o++];
                for (var l = 0; l < e[u].ic.length; l++) {
                    var f = e[u].ic[l];
                    var v = ne(f, e, u);
                    if (v && !p[v]) {
                        p[v] = true;
                        n.push(v);
                        a++
                    }
                }
                for (var l = 0; u != t && l < e[u].ti.length; l++) {
                    var c = e[u].ti[l];
                    var s = ne(c, e, u);
                    if (s && !i[s]) {
                        i[s] = true;
                        r.push(s)
                    }
                }
            }
            $gaic[t] = r;
            return r
        }
        var ie = {};

        function pe(e, t, r, n, o, a, i) {
            var p = ne(e, t, r);
            t[r].j.push(p);
            if (p) {
                if (ie[p]) {
                    u("-1:include:-1:-1: `" + e + "` is being included in a loop, will be stop.");
                    return
                }
                ie[p] = true;
                try {
                    t[p].f(n, o, a, i)
                } catch (n) {}
                ie[p] = false
            } else {
                u(r + ":include:-1:-1: Included path `" + e + "` not found from `" + r + "`.")
            }
        }

        function ue(e, t, r, n) {
            u(t + ":template:" + r + ":" + n + ": Template `" + e + "` not found.")
        }

        function le(e) {
            var t = false;
            delete e.properities;
            delete e.n;
            if (e.children) {
                do {
                    t = false;
                    var r = [];
                    for (var n = 0; n < e.children.length; n++) {
                        var o = e.children[n];
                        if (o.tag == "virtual") {
                            t = true;
                            for (var a = 0; o.children && a < o.children.length; a++) {
                                r.push(o.children[a])
                            }
                        } else {
                            r.push(o)
                        }
                    }
                    e.children = r
                } while (t);
                for (var n = 0; n < e.children.length; n++) {
                    le(e.children[n])
                }
            }
            return e
        }

        function fe(e) {
            if (e.tag == "wx-wx-scope") {
                e.tag = "virtual";
                e.wxCkey = "11";
                e["wxScopeData"] = e.attr["wx:scope-data"];
                delete e.n;
                delete e.raw;
                delete e.generics;
                delete e.attr
            }
            for (var t = 0; e.children && t < e.children.length; t++) {
                fe(e.children[t])
            }
            return e
        }
        return {
            a: D,
            b: S,
            c: v,
            d: e,
            e: t,
            f: u,
            g: r,
            h: s,
            i: n,
            j: o,
            k: A,
            l: T,
            m: a,
            n: f,
            o: c,
            p: i,
            q: y,
            r: N,
            s: b,
            t: d,
            u: h,
            v: p,
            w: l,
            x: _,
            y: w,
            z: O,
            A: j,
            B: P,
            C: M,
            D: J,
            E: B,
            F: Y,
            G: G,
            H: X,
            I: H,
            J: V,
            K: $,
            L: W,
            M: Q,
            N: q,
            O: K,
            P: Z,
            Q: ee,
            R: te,
            S: re,
            T: ne,
            U: oe,
            V: ae,
            W: ie,
            X: pe,
            Y: ue,
            Z: le,
            aa: fe
        }
    }()
});
Object.freeze(__g);
g = "";
__wxAppCode__['app.json'] = {
    "pages": ["pages/homepage/homepage", "pages/mine/mine", "pages/category/category", "pages/o2oshopcart/o2oshopcart", "pages/o2oShopCartPage/o2oShopCartPage", "pages/dshop/dshop", "pages/checkout/checkout", "pages/payprocess/payprocess", "pages/payresult/payresult", "pages/shareFriend/shareFriend", "pages/itemdetail/itemdetail", "pages/webview/webview", "pages/jump/jump", "pages/pickerDemo/pickerDemo", "pages/iconList/iconList"],
    "subPackages": [{
        "root": "packageLocation/",
        "pages": ["address/list/list", "address/detail/detail", "address/location/location", "storelist/storelist", "address/citylist/citylist", "address/addresslist/addresslist", "address/orderAddress/orderAddress", "c9ChooseStore/storeList", "couponStoreList/couponStoreList"]
    }, {
        "root": "packageQiyu/",
        "pages": ["pages/chat/chat"],
        "plugins": {
            "qiyu-plugin": {
                "version": "2.12.0",
                "provider": "wxae5e29812005203f",
                "appIds": ["wx2033b55ba0eaf5f2", "wx78703c746eccb0d0", "wxa9dd5762b2ba65d6", "wx9572d0552dfc7579", "wx441e80287946d7b6", "wxc94daee5c5b654ad", "wx4d0b88c307eeaf34"]
            }
        }
    }, {
        "root": "packagePersonal/",
        "pages": ["payprocess/payprocess", "payresult/payresult", "orderdetail/orderdetail", "orderlist/orderlist", "login/login", "register/register", "phoneLogin/phoneLogin", "coupon/coupon", "realname/realname", "vip/vip", "vip/payCode/storePayCode/storePayCode", "vip/payCode/payConfig/payConfig", "vip/payCode/modifyPayCode/modifyPayCode", "vip/payCode/setPayCode/setPayCode", "vip/payCode/phoneValid/phoneValid", "shareFriend/shareFriend", "personal/personal", "userInfo/userInfo", "editpersonal/editpersonal", "editPhone/editPhone", "editIdentityCard/editIdentityCard", "editEmail/editEmail", "editIDcard/editIDcard", "pdlRealname/pdlRealname", "guardianRealname/guardianRealname", "pdlEvaluate/pdlEvaluate", "account/accountManage/accountManage", "account/accountSignout/accountSignout", "account/accountSafe/accountSafe", "account/accountAssets/accountAssets", "account/signoutReason/signoutReason", "account/signoutResult/signoutResult", "editorder/editorder", "feedback/feedback", "feedbackList/feedbackList"]
    }, {
        "root": "packageWare/",
        "pages": ["couponPromotion/couponPromotion", "promoteSales/promoteSales", "cmsTemplate/cmsTemplate", "suitGroup/suitGroup", "wareSuitGroup/wareSuitGroup", "itemdetail/itemdetail", "comboDetail/comboDetail"],
        "plugins": {}
    }, {
        "root": "packageActive/",
        "pages": ["maotai/list/list", "maotai/book/book", "maotai/storeList/storeList", "maotai/buyExplain/buyExplain", "maotai/home/home", "maotai/register/register", "maotai/luckylist/luckylist", "maotai/qualification/qualification", "maotai/extraDesc/extraDesc", "maotai/winList/winList", "maotai/publicity/publicity", "signIn/signIn", "signwebview/signwebview", "cmsTemplate/cmsTemplate", "subscribeInterim/subscribeInterim", "present/presentCoupon"]
    }, {
        "root": "packageGroup/",
        "pages": ["invalidgroup/invalidgroup", "selectguider/selectguider", "guiderlist/guiderlist", "applyguider/applyguider", "applyguiderinfo/applyguiderinfo"]
    }, {
        "root": "packageSubBusi/",
        "pages": ["subHome/subHome", "categorySub/categorySub", "bldSub/categorySub/categorySub", "mineSub/mineSub", "cartSub/cartSub", "bldSub/storeList/storeList", "bldSub/deliverySelection/deliverySelection"],
        "compileToMainPlatform": ["mp-toutiao", "mp-v9tt"]
    }, {
        "root": "packageBaseComp/",
        "pages": ["base_holder/base_holder"]
    }, {
        "root": "packageCmsComp/",
        "pages": ["cms_holder/cms_holder"]
    }, {
        "root": "packageWebview/",
        "pages": ["webview/webview", "dshop/dshop"]
    }, {
        "root": "packageGLeader/",
        "pages": ["ordermanage/ordermanage", "individualcenter/userlist/userlist", "individualcenter/index/index", "individualcenter/userinfo/userinfo", "individualcenter/accountlist/accountlist", "individualcenter/accountdetails/accountdetails", "individualcenter/myBalance/myBalance", "individualcenter/withdraw/withdraw", "individualcenter/withdrawInfo/withdrawInfo", "auth/auth", "orderdetail/orderdetail", "afterSaleDetail/afterSaleDetail", "abnormal/abnormal", "individualcenter/termservice/termservice", "individualcenter/commissionlist/commissionlist", "individualcenter/commissiondesc/commissiondesc", "individualcenter/commissiondetail/commissiondetail", "authManage/authManage", "applyForAuth/applyForAuth", "expressDetail/expressDetail", "invite/invite", "groupBuy/activity", "salesDetail/salesDetail"]
    }, {
        "root": "packageTools/",
        "pages": ["envGroup/envGroup", "defend/defend", "privacy/privacy", "customPrivacy/customPrivacy", "workBench/verifyHome/verifyHome", "workBench/verifyPage/verifyPage", "workBench/verifyResult/verifyResult", "workBench/searchPage/searchPage", "workBench/flowRecords/flowRecords", "workBench/couponRecords/couponRecords", "workBench/expendRefund/expendRefund"]
    }, {
        "root": "packageRec/",
        "pages": ["search/search", "wareRank/wareRank", "wareRank/rankingRule", "seckill/seckill", "couponPromotion/couponPromotion", "promoteSales/promoteSales"]
    }, {
        "root": "packageMarket/",
        "pages": ["userInfoGift/userInfoGift", "spellgroup/groupactivity/groupactivity", "spellgroup/groupActivityDetail/groupActivityDetail", "spellgroup/groupBuying/groupBuying", "spellgroup/storelist/storelist", "spellgroup/groupRecord/groupRecord", "spellgroup/checkorder/checkorder", "printing/index/index", "printing/rewardInfo/rewardInfo", "vote/voteIndex/voteIndex", "vote/voteApply/voteApply", "vote/voteWork/voteWork", "vote/voteRank/voteRank", "newSignIn/newSignIn", "newSignIn/reSignDetail/reSignDetail", "newSignIn/reSignRecord/reSignRecord", "exchange/exchange", "bargain/bargainDetail", "bargain/bargainList", "bargain/cutRecord", "bargain/helpCut", "bargain/awardPage", "pointMarket/home/home", "pointMarket/wareDetail/wareDetail", "pointMarket/more/more", "pointMarket/orderConfirm/orderConfirm", "pointMarket/orderList/orderList", "pointMarket/orderDetail/orderDetail", "pointIntegral/home/home", "pointIntegral/productDetail/productDetail", "pointIntegral/floorProducts/floorProducts", "pointIntegral/exchangeRecord/exchangeRecord", "pointIntegral/exchangeResult/exchangeResult", "pointIntegral/recordDetail/recordDetail", "invitationGift/invitationGift", "giftReward/giftReward", "distribution/home/home", "distribution/activeList/activeList", "distribution/activeDetail/activeDetail", "distribution/orderList/orderList", "distribution/commission/commission", "distribution/withdrawDetail/withdrawDetail", "distribution/withdrawSetting/withdrawSetting"]
    }, {
        "root": "packageTrade/",
        "pages": ["cashier/cashier", "password/password", "payprocess/payprocess", "payresult/payresult", "checkorder/checkorder", "checkorder/invoice/invoice", "orderRemark/orderRemark", "invoiceCenter/home/home", "invoiceCenter/c9Home/c9Home", "invoiceCenter/detail/detail", "invoiceCenter/orderList/orderList", "invoiceCenter/getInvoice/getInvoice", "invoiceCenter/infoInput/infoInput", "invoiceCenter/electronicInvoice/electronicInvoice"]
    }, {
        "root": "packageAssets/",
        "pages": ["premiumMember/premiumMember", "vipBuyRecord/vipBuyRecord", "benefits/list", "benefits/detail", "bonusPoint/bonusPoint", "bonusPoint/sbybPoint", "costDetail/costDetail", "discount/discount", "superValueCard/myCardList/myCardList", "superValueCard/myCardDetail/myCardDetail", "superValueCard/cardList/cardList", "superValueCard/cardDetail/cardDetail", "superValueCard/gift/gift", "superValueCard/useRecord/useRecord", "superValueCard/storeList/storeList", "superValueCard/selectCity/selectCity", "superValueCard/selectAddress/selectAddress", "superValueCard/selectStore/selectStore", "growthValue/growthValue", "giftCard/giftCard", "giftCoupon/giftCoupon", "coupon/coupon", "coupon/couponUsedRecord/couponUsedRecord", "coupon/settlementCouponOnline/settlementCouponOnline", "coupon/settlementCouponOffline/settlementCouponOffline", "coupon/skylCoupon/skylCoupon", "coupon/threePartyCoupon/threePartyCoupon", "couponCode/couponCode"]
    }, {
        "root": "packageOrder/",
        "pages": ["logisticDetail/logisticDetail", "qrbarcode/qrbarcode", "orderdetail/orderdetail", "orderlist/orderlist", "ordersearch/ordersearch", "orderlistSub/orderlistSub", "orderevaluate/evaluate/evaluate", "orderevaluate/evaluateResult/evaluateResult", "orderevaluate/evaluateDetail/evaluateDetail"]
    }, {
        "root": "packageOffline/",
        "pages": ["checkout/checkout", "shopcart/shopcart", "shopcart/storeList/storeList"]
    }, {
        "root": "packageExternal/",
        "pages": ["index/index", "reservationhome/reservationhome", "reservationlist/reservationlist", "reservationinfo/reservationinfo", "myreservationlist/myreservationlist", "myreservationinfo/myreservationinfo", "myreservationhistorylist/myreservationhistorylist", "reservationresult/reservationresult", "rulescenter/rulescenter", "moduleHome/index", "moduleTea/index/index", "moduleTea/reservationhome/reservationhome", "moduleTea/reservationlist/reservationlist", "moduleTea/reservationinfo/reservationinfo", "moduleTea/myreservationlist/myreservationlist", "moduleTea/myreservationinfo/myreservationinfo", "moduleTea/myreservationhistorylist/myreservationhistorylist", "moduleTea/reservationresult/reservationresult", "moduleTea/rulescenter/rulescenter", "moduleMarket/index/index", "moduleMarket/reservationhome/reservationhome", "moduleMarket/companion/companion", "moduleMarket/reservationlist/reservationlist", "moduleMarket/reservationinfo/reservationinfo", "moduleMarket/myreservationlist/myreservationlist", "moduleMarket/myreservationinfo/myreservationinfo", "moduleMarket/myreservationhistorylist/myreservationhistorylist", "moduleMarket/reservationresult/reservationresult", "moduleMarket/rulescenter/rulescenter", "reservationindex/reservationindex", "modelEmployee/employeelogin/employeelogin", "modelEmployee/employee/employee", "modelEmployee/scancode/scancode", "modelEmployee/writeoffnotes/writeoffnotes", "modelEmployee/addrule/addrule"]
    }, {
        "root": "packageDStore/",
        "pages": ["parkHome/parkHome", "storeList/storeList", "orderList/orderList", "orderDetail/orderDetail", "checkOrder/checkOrder", "coupon/coupon", "addPlate/addPlate", "parking/parking"]
    }, {
        "root": "packageAgents/",
        "pages": ["_holder/index"],
        "name": "skills",
        "agent": true,
        "independent": true
    }, {
        "root": "packageAgentDetail/",
        "pages": ["address/addresslist/addresslist", "store/storelist/storelist", "wareList/wareList", "cart/cart", "checkorder/checkorder"],
        "name": "agentDetail"
    }],
    "window": {
        "navigationBarTextStyle": "black",
        "navigationBarTitleText": "",
        "navigationBarBackgroundColor": "#FFFFFF",
        "backgroundColor": "#FFFFFF"
    },
    "tabBar": {
        "custom": false,
        "color": "#666666",
        "selectedColor": "#313232",
        "borderStyle": "white",
        "list": [{
            "pagePath": "pages/homepage/homepage",
            "text": "首页",
            "iconPath": "/static/images/tabbar/home.png",
            "selectedIconPath": "/static/images/tabbar/homeActive.png"
        }, {
            "pagePath": "pages/category/category",
            "text": "分类",
            "iconPath": "/static/images/tabbar/category.png",
            "selectedIconPath": "/static/images/tabbar/categoryActive.png"
        }, {
            "pagePath": "pages/o2oShopCartPage/o2oShopCartPage",
            "text": "购物车",
            "iconPath": "/static/images/tabbar/cart.png",
            "selectedIconPath": "/static/images/tabbar/cartActive.png"
        }, {
            "pagePath": "pages/mine/mine",
            "text": "我的",
            "iconPath": "/static/images/tabbar/mine.png",
            "selectedIconPath": "/static/images/tabbar/mineActive.png",
            "ignorePlatform": ["mp-toutiao", "mp-v9tt"]
        }]
    },
    "preloadRule": {
        "pages/homepage/homepage": {
            "network": "all",
            "packages": ["packageAssets", "packageWare"]
        },
        "pages/mine/mine": {
            "network": "all",
            "packages": ["packageOrder"]
        },
        "pages/jump/jump": {
            "network": "all",
            "packages": ["packageWare"]
        }
    },
    "plugins": {
        "gateway-challenge": {
            "version": "1.4.1",
            "provider": "wxfe70b3f986aad2fb"
        },
        "captcha": {
            "version": "2.1.4",
            "provider": "wx1fe8d9a3cb067a75"
        }
    },
    "debug": false,
    "permission": {
        "scope.userLocation": {
            "desc": "你的位置信息将用于小程序位置接口的效果展示"
        }
    },
    "workers": "workers/",
    "embeddedAppIdList": ["wx2254e48a47f4a372", "wx9572d0552dfc7579", "wx02abda98964d6988", "wx2b4fb2d737c553f3", "wx519f298563f6c893", "wx4564403a7ce5cdcc"],
    "__usePrivacyCheck__": true,
    "usingComponents": {
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "tab-bar": "/components/TabBar/TabBar",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "page-view": "/components/PageView/PageView"
    },
    "lazyCodeLoading": "requiredComponents",
    "requiredPrivateInfos": ["getLocation", "chooseAddress", "chooseLocation"],
    "agent": {
        "skills": [{
            "name": "shopping",
            "description": "小程序购物 Agent 技能，支持按商品名搜索商品、推荐门店热卖商品、展示商品卡片、加购、查看购物车和发起结算。用户输入饮料、牛奶、啤酒、草莓等商品或类目意图时，应调用该技能的 getWares 能力。",
            "path": "packageAgents/skills"
        }],
        "detailPagePackages": [{
            "root": "packageAgentDetail"
        }]
    },
    "__warning__": "无效的 app.json subPackages[1].plugins.qiyu-plugin[\"appIds\"]、app.json subPackages[6][\"compileToMainPlatform\"]、app.json subPackages[20][\"agent\"]、app.json tabBar.list[3][\"ignorePlatform\"]、app.json [\"agent\"]"
};
__wxAppCode__['components/AnimationPoint/AnimationPoint.json'] = {
    "component": true,
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    }
};
__wxAppCode__['components/CountdownProgress/CountdownProgress.json'] = {
    "component": true,
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    }
};
__wxAppCode__['components/CouponChoosePopup/CouponChoosePopup.json'] = {
    "component": true,
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    }
};
__wxAppCode__['components/CouponGoods/CouponGoods.json'] = {
    "component": true,
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    }
};
__wxAppCode__['components/CouponPopup/CouponPopup.json'] = {
    "component": true,
    "usingComponents": {
        "coupon-item": "/packageAssets/coupon/components/couponItem",
        "d-popup-coupon": "/packageAssets/coupon/components/popupNew",
        "bar-code-modal": "/packageAssets/coupon/skylCoupon/components/BarCodeModal/BarCodeModal",
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    },
    "componentPlaceholder": {
        "coupon-item": "view",
        "d-popup-coupon": "view",
        "bar-code-modal": "view"
    }
};
__wxAppCode__['components/CustomTabBar/CustomTabBar.json'] = {
    "component": true,
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    }
};
__wxAppCode__['components/HomePopUp/HomePopUp.json'] = {
    "component": true,
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    }
};
__wxAppCode__['components/PageView/PageView.json'] = {
    "component": true,
    "usingComponents": {
        "subscribe-message": "/components/SubscribeMessage/SubscribeMessage",
        "animation-point": "/components/AnimationPoint/AnimationPoint",
        "countdown-progress": "/components/CountdownProgress/CountdownProgress",
        "specifications": "/components/Specifications/Specifications",
        "home-pop-up": "/components/HomePopUp/HomePopUp",
        "coupon-goods": "/components/CouponGoods/CouponGoods",
        "coupon-choose-popup": "/components/CouponChoosePopup/CouponChoosePopup",
        "coupon-popup": "/components/CouponPopup/CouponPopup",
        "reservation-popup": "/components/ReservationPopup/ReservationPopup",
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    }
};
__wxAppCode__['components/ReservationPopup/ReservationPopup.json'] = {
    "component": true,
    "usingComponents": {
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    }
};
__wxAppCode__['components/Specifications/Specifications.json'] = {
    "component": true,
    "usingComponents": {
        "ware-item": "/packageBaseComp/components/Base/WareItem/WareItem",
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    },
    "componentPlaceholder": {
        "ware-item": "view"
    }
};
__wxAppCode__['components/SubCustomNavBar/CustomNavBar.json'] = {
    "component": true,
    "usingComponents": {
        "g-a-custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    }
};
__wxAppCode__['components/SubscribeMessage/SubscribeMessage.json'] = {
    "component": true,
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    }
};
__wxAppCode__['components/TabBar/TabBar.json'] = {
    "component": true,
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    }
};
__wxAppCode__['node-modules/@dmall/jimoui-mp/components/Avator/Avator.json'] = {
    "component": true,
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    }
};
__wxAppCode__['node-modules/@dmall/jimoui-mp/components/Badge/Badge.json'] = {
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    },
    "component": true
};
__wxAppCode__['node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation.json'] = {
    "component": true,
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    }
};
__wxAppCode__['node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector.json'] = {
    "usingComponents": {
        "g-a-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "tab-bar": "/components/TabBar/TabBar"
    },
    "component": true
};
__wxAppCode__['node-modules/@dmall/jimoui-mp/components/Button/Button.json'] = {
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    },
    "component": true
};
__wxAppCode__['node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup.json'] = {
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    },
    "component": true
};
__wxAppCode__['node-modules/@dmall/jimoui-mp/components/CellItem/CellItem.json'] = {
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    },
    "component": true
};
__wxAppCode__['node-modules/@dmall/jimoui-mp/components/CountDown/CountDown.json'] = {
    "component": true,
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    }
};
__wxAppCode__['node-modules/@dmall/jimoui-mp/components/CountDownBase/CountDownBase.json'] = {
    "component": true,
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    }
};
__wxAppCode__['node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading.json'] = {
    "component": true,
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    }
};
__wxAppCode__['node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar.json'] = {
    "component": true,
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    }
};
__wxAppCode__['node-modules/@dmall/jimoui-mp/components/Dialog/Dialog.json'] = {
    "usingComponents": {
        "g-a-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    },
    "component": true
};
__wxAppCode__['node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus.json'] = {
    "usingComponents": {
        "g-a-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    },
    "component": true
};
__wxAppCode__['node-modules/@dmall/jimoui-mp/components/FooterView/FooterView.json'] = {
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    },
    "component": true
};
__wxAppCode__['node-modules/@dmall/jimoui-mp/components/HomePop/HomePop.json'] = {
    "component": true,
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    }
};
__wxAppCode__['node-modules/@dmall/jimoui-mp/components/Image/Image.json'] = {
    "component": true,
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    }
};
__wxAppCode__['node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem.json'] = {
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    },
    "component": true
};
__wxAppCode__['node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList.json'] = {
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    },
    "component": true
};
__wxAppCode__['node-modules/@dmall/jimoui-mp/components/ProcessLine/ProcessLine.json'] = {
    "component": true,
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    }
};
__wxAppCode__['node-modules/@dmall/jimoui-mp/components/ProcessLineGroup/ProcessLineGroup.json'] = {
    "component": true,
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    }
};
__wxAppCode__['node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom.json'] = {
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    },
    "component": true
};
__wxAppCode__['node-modules/@dmall/jimoui-mp/components/SkeletonItem/SkeletonItem.json'] = {
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    },
    "component": true
};
__wxAppCode__['node-modules/@dmall/jimoui-mp/components/SkeletonList/SkeletonList.json'] = {
    "component": true,
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    }
};
__wxAppCode__['node-modules/@dmall/jimoui-mp/components/SortListMenu/SortListMenu.json'] = {
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    },
    "component": true
};
__wxAppCode__['node-modules/@dmall/jimoui-mp/components/Switch/Switch.json'] = {
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    },
    "component": true
};
__wxAppCode__['node-modules/@dmall/jimoui-mp/components/Toast/Toast.json'] = {
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    },
    "component": true
};
__wxAppCode__['node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips.json'] = {
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    },
    "component": true
};
__wxAppCode__['package.json'] = {
    "industrySDK": true
};
__wxAppCode__['pages/category/category.json'] = {
    "navigationStyle": "custom",
    "usingComponents": {
        "page-view": "/components/PageView/PageView",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "category-component": "/packageSubBusi/components/Category/Category",
        "search-inner": "/packageBaseComp/components/Base/SearchInner/SearchInner",
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    },
    "componentPlaceholder": {
        "category-component": "view",
        "search-inner": "view"
    }
};
__wxAppCode__['pages/checkout/checkout.json'] = {
    "navigationBarBackgroundColor": "#FE524B",
    "navigationBarTitleText": "确认订单",
    "navigationBarTextStyle": "white",
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    }
};
__wxAppCode__['pages/components/HomePage/MemberCode/MemberCode.json'] = {
    "component": true,
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    }
};
__wxAppCode__['pages/components/HomePage/Notice/Notice.json'] = {
    "component": true,
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    }
};
__wxAppCode__['pages/components/HomePage/TempCoupon/TempCoupon.json'] = {
    "component": true,
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    }
};
__wxAppCode__['pages/components/Mine/ColonelMine/ColonelMine.json'] = {
    "component": true,
    "usingComponents": {
        "icon-manage": "/pages/components/Mine/IconManage/IconManage",
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    }
};
__wxAppCode__['pages/components/Mine/IconManage/IconList/IconList.json'] = {
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    },
    "component": true
};
__wxAppCode__['pages/components/Mine/IconManage/IconManage.json'] = {
    "component": true,
    "usingComponents": {
        "icon-list": "/pages/components/Mine/IconManage/IconList/IconList",
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    }
};
__wxAppCode__['pages/dshop/dshop.json'] = {
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    }
};
__wxAppCode__['pages/homepage/components/GroupHomepage/GroupHomepage.json'] = {
    "component": true,
    "usingComponents": {
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "c-m-s": "/packageCmsComp/components/CMS/CMS",
        "share-dialog": "/packageBaseComp/components/Base/SharePop/SharePop",
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    },
    "componentPlaceholder": {
        "c-m-s": "view",
        "share-dialog": "view"
    }
};
__wxAppCode__['pages/homepage/components/O2OHomepage/O2OHomepage.json'] = {
    "component": true,
    "usingComponents": {
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "c-m-s": "/packageCmsComp/components/CMS/CMS",
        "notice": "/pages/components/HomePage/Notice/Notice",
        "temp-coupon": "/pages/components/HomePage/TempCoupon/TempCoupon",
        "member-code": "/pages/components/HomePage/MemberCode/MemberCode",
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    },
    "componentPlaceholder": {
        "c-m-s": "view"
    }
};
__wxAppCode__['pages/homepage/components/VipHomepage/VipHomepage.json'] = {
    "component": true,
    "usingComponents": {
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "c-m-s": "/packageCmsComp/components/CMS/CMS",
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    },
    "componentPlaceholder": {
        "c-m-s": "view"
    }
};
__wxAppCode__['pages/homepage/homepage.json'] = {
    "enablePullDownRefresh": false,
    "navigationStyle": "custom",
    "onReachBottomDistance": 600,
    "usingComponents": {
        "page-view": "/components/PageView/PageView",
        "o2-o-homepage": "/pages/homepage/components/O2OHomepage/O2OHomepage",
        "group-homepage": "/pages/homepage/components/GroupHomepage/GroupHomepage",
        "vip-homepage": "/pages/homepage/components/VipHomepage/VipHomepage",
        "friend-circle": "/packageBaseComp/components/Base/FriendCircle/FriendCircle",
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    },
    "componentPlaceholder": {
        "friend-circle": "view"
    }
};
__wxAppCode__['pages/iconList/iconList.json'] = {
    "navigationBarBackgroundColor": "#ffffff",
    "navigationBarTextStyle": "black",
    "backgroundColor": "#F5F5F5",
    "backgroundTextStyle": "light",
    "usingComponents": {
        "icon-list": "/pages/components/Mine/IconManage/IconList/IconList",
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    }
};
__wxAppCode__['pages/itemdetail/itemdetail.json'] = {
    "navigationStyle": "custom",
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    }
};
__wxAppCode__['pages/jump/jump.json'] = {
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    }
};
__wxAppCode__['pages/mine/mine.json'] = {
    "disableScroll": true,
    "navigationStyle": "custom",
    "enablePullDownRefresh": false,
    "usingComponents": {
        "page-view": "/components/PageView/PageView",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "icon-manage": "/pages/components/Mine/IconManage/IconManage",
        "colonel-mine": "/pages/components/Mine/ColonelMine/ColonelMine",
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    }
};
__wxAppCode__['pages/o2oShopCartPage/o2oShopCartPage.json'] = {
    "disableScroll": false,
    "navigationBarTextStyle": "white",
    "enablePullDownRefresh": true,
    "backgroundTextStyle": "dark",
    "usingComponents": {
        "page-view": "/components/PageView/PageView",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "cart": "/packageSubBusi/components/Cart/Cart",
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    },
    "componentPlaceholder": {
        "cart": "view"
    }
};
__wxAppCode__['pages/o2oshopcart/o2oshopcart.json'] = {
    "disableScroll": false,
    "navigationBarTextStyle": "white",
    "enablePullDownRefresh": true,
    "backgroundTextStyle": "dark",
    "usingComponents": {
        "page-view": "/components/PageView/PageView",
        "cart": "/packageSubBusi/components/Cart/Cart",
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    },
    "componentPlaceholder": {
        "cart": "view"
    }
};
__wxAppCode__['pages/payprocess/payprocess.json'] = {
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    }
};
__wxAppCode__['pages/payresult/payresult.json'] = {
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    }
};
__wxAppCode__['pages/pickerDemo/pickerDemo.json'] = {
    "usingComponents": {
        "page-view": "/components/PageView/PageView",
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    }
};
__wxAppCode__['pages/shareFriend/shareFriend.json'] = {
    "navigationBarTitleText": "分享给好友",
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    }
};
__wxAppCode__['pages/webview/webview.json'] = {
    "usingComponents": {
        "badge-animation": "/node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation",
        "custom-loading": "/node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading",
        "custom-nav-bar": "/node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar",
        "custom-tab-bar": "/components/CustomTabBar/CustomTabBar",
        "empty-status": "/node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus",
        "ga-avator": "/node-modules/@dmall/jimoui-mp/components/Avator/Avator",
        "ga-badge": "/node-modules/@dmall/jimoui-mp/components/Badge/Badge",
        "ga-button": "/node-modules/@dmall/jimoui-mp/components/Button/Button",
        "ga-cell-group": "/node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup",
        "ga-cell-item": "/node-modules/@dmall/jimoui-mp/components/CellItem/CellItem",
        "ga-dialog": "/node-modules/@dmall/jimoui-mp/components/Dialog/Dialog",
        "ga-footer-view": "/node-modules/@dmall/jimoui-mp/components/FooterView/FooterView",
        "ga-home-pop": "/node-modules/@dmall/jimoui-mp/components/HomePop/HomePop",
        "ga-popup": "/node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector",
        "ga-switch": "/node-modules/@dmall/jimoui-mp/components/Switch/Switch",
        "ga-toast": "/node-modules/@dmall/jimoui-mp/components/Toast/Toast",
        "image-loader": "/node-modules/@dmall/jimoui-mp/components/Image/Image",
        "nav-bar-item": "/node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem",
        "nav-bar-list": "/node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList",
        "notify": "/node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips",
        "page-view": "/components/PageView/PageView",
        "safe-bottom": "/node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom",
        "tab-bar": "/components/TabBar/TabBar"
    }
};
__wxAppCode__['project.config.json'] = {
    "miniprogramRoot": "",
    "__compileDebugInfo__": {
        "useSummer": true
    }
};
__wxAppCode__['sitemap.json'] = {
    "desc": "关于本文件的更多信息，请参考文档 https://developers.weixin.qq.com/miniprogram/dev/framework/sitemap.html",
    "rules": [{
        "action": "allow",
        "page": "*"
    }]
};;
var __WXML_DEP__ = __WXML_DEP__ || {};;
var __LAZY_CODE_LOADING_CHUNK_MAP__ = __LAZY_CODE_LOADING_CHUNK_MAP__ || {};
[
    ['chunk_0', ['components/AnimationPoint/AnimationPoint', 'components/CountdownProgress/CountdownProgress', 'components/CouponChoosePopup/CouponChoosePopup', 'components/CouponGoods/CouponGoods', 'components/CouponPopup/CouponPopup', 'components/HomePopUp/HomePopUp', 'components/PageView/PageView', 'components/ReservationPopup/ReservationPopup', 'components/Specifications/Specifications', 'components/SubscribeMessage/SubscribeMessage', ]],
    ['chunk_1', ['components/CustomTabBar/CustomTabBar', ]],
    ['chunk_10', ['node-modules/@dmall/jimoui-mp/components/CellItem/CellItem', ]],
    ['chunk_11', ['node-modules/@dmall/jimoui-mp/components/CountDown/CountDown', ]],
    ['chunk_12', ['node-modules/@dmall/jimoui-mp/components/CountDownBase/CountDownBase', ]],
    ['chunk_13', ['node-modules/@dmall/jimoui-mp/components/CustomLoading/CustomLoading', ]],
    ['chunk_14', ['node-modules/@dmall/jimoui-mp/components/Dialog/Dialog', ]],
    ['chunk_15', ['node-modules/@dmall/jimoui-mp/components/EmptyStatus/EmptyStatus', ]],
    ['chunk_16', ['node-modules/@dmall/jimoui-mp/components/FooterView/FooterView', ]],
    ['chunk_17', ['node-modules/@dmall/jimoui-mp/components/HomePop/HomePop', ]],
    ['chunk_18', ['node-modules/@dmall/jimoui-mp/components/Image/Image', ]],
    ['chunk_19', ['node-modules/@dmall/jimoui-mp/components/NavBarItem/NavBarItem', ]],
    ['chunk_2', ['components/SubCustomNavBar/CustomNavBar', 'node-modules/@dmall/jimoui-mp/components/CustomNavBar/CustomNavBar', ]],
    ['chunk_20', ['node-modules/@dmall/jimoui-mp/components/NavBarList/NavBarList', ]],
    ['chunk_21', ['node-modules/@dmall/jimoui-mp/components/ProcessLine/ProcessLine', ]],
    ['chunk_22', ['node-modules/@dmall/jimoui-mp/components/ProcessLineGroup/ProcessLineGroup', ]],
    ['chunk_23', ['node-modules/@dmall/jimoui-mp/components/SkeletonItem/SkeletonItem', ]],
    ['chunk_24', ['node-modules/@dmall/jimoui-mp/components/SkeletonList/SkeletonList', ]],
    ['chunk_25', ['node-modules/@dmall/jimoui-mp/components/SortListMenu/SortListMenu', ]],
    ['chunk_26', ['node-modules/@dmall/jimoui-mp/components/Switch/Switch', ]],
    ['chunk_27', ['node-modules/@dmall/jimoui-mp/components/Toast/Toast', ]],
    ['chunk_28', ['node-modules/@dmall/jimoui-mp/components/Tooltips/Tooltips', ]],
    ['chunk_29', ['pages/category/category', ]],
    ['chunk_3', ['components/TabBar/TabBar', ]],
    ['chunk_30', ['pages/checkout/checkout', ]],
    ['chunk_31', ['pages/components/HomePage/MemberCode/MemberCode', 'pages/components/HomePage/Notice/Notice', 'pages/components/HomePage/TempCoupon/TempCoupon', 'pages/homepage/components/GroupHomepage/GroupHomepage', 'pages/homepage/components/O2OHomepage/O2OHomepage', 'pages/homepage/components/VipHomepage/VipHomepage', 'pages/homepage/homepage', ]],
    ['chunk_32', ['pages/components/Mine/ColonelMine/ColonelMine', 'pages/components/Mine/IconManage/IconManage', 'pages/mine/mine', ]],
    ['chunk_33', ['pages/components/Mine/IconManage/IconList/IconList', ]],
    ['chunk_34', ['pages/dshop/dshop', ]],
    ['chunk_35', ['pages/iconList/iconList', ]],
    ['chunk_36', ['pages/itemdetail/itemdetail', ]],
    ['chunk_37', ['pages/jump/jump', ]],
    ['chunk_38', ['pages/o2oShopCartPage/o2oShopCartPage', ]],
    ['chunk_39', ['pages/o2oshopcart/o2oshopcart', ]],
    ['chunk_4', ['node-modules/@dmall/jimoui-mp/components/Avator/Avator', ]],
    ['chunk_40', ['pages/payprocess/payprocess', ]],
    ['chunk_41', ['pages/payresult/payresult', ]],
    ['chunk_42', ['pages/pickerDemo/pickerDemo', ]],
    ['chunk_43', ['pages/shareFriend/shareFriend', ]],
    ['chunk_44', ['pages/webview/webview', ]],
    ['chunk_5', ['node-modules/@dmall/jimoui-mp/components/Badge/Badge', ]],
    ['chunk_6', ['node-modules/@dmall/jimoui-mp/components/BadgeAnimation/BadgeAnimation', ]],
    ['chunk_7', ['node-modules/@dmall/jimoui-mp/components/BottomSelector/BottomSelector', 'node-modules/@dmall/jimoui-mp/components/SafeBottom/SafeBottom', ]],
    ['chunk_8', ['node-modules/@dmall/jimoui-mp/components/Button/Button', ]],
    ['chunk_9', ['node-modules/@dmall/jimoui-mp/components/CellGroup/CellGroup', ]],
].forEach(function(a) {
    (a[1] || []).forEach(function(b) {
        __LAZY_CODE_LOADING_CHUNK_MAP__[b] = __LAZY_CODE_LOADING_CHUNK_MAP__[b] || a[0] || ''
    });
});