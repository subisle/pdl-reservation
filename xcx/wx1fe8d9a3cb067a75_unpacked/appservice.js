var __wxAppConsole__ = console;
definePlugin("plugin://wx1fe8d9a3cb067a75", function(define, require, module, exports, global, wx, App, Page, Component, Behavior, getApp, getCurrentPages, console, requireMiniProgram, WXWebAssembly, __wxCodeSpace__) {
    var __vd_version_info__ = __vd_version_info__ || {};
    if (typeof console === 'undefined') {
        console = __wxAppConsole__;
    };
    /*v0.5vv_20211229_syb_scopedata*/
    global.__wcc_version__ = 'v0.5vv_20211229_syb_scopedata';
    global.__wcc_version_info__ = {
        "customComponents": true,
        "fixZeroRpx": true,
        "propValueDeepCopy": false
    };
    var $gwxc
    var $gaic = {}
    $gwx_wx1fe8d9a3cb067a75 = function(path, global) {
        if (typeof global === 'undefined') global = {};
        if (typeof __WXML_GLOBAL__ === 'undefined') {
            __WXML_GLOBAL__ = {};
        }
        __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};

        function _(a, b) {
            if (typeof(b) != 'undefined') a.children.push(b);
        }

        function _v(k) {
            if (typeof(k) != 'undefined') return {
                tag: 'virtual',
                'wxKey': k,
                children: []
            };
            return {
                tag: 'virtual',
                children: []
            };
        }

        function _n(tag) {
            return {
                tag: 'wx-' + tag,
                attr: {},
                children: [],
                n: [],
                raw: {},
                generics: {}
            }
        }

        function _p(a, b) {
            b && a.properities.push(b);
        }

        function _s(scope, env, key) {
            return typeof(scope[key]) != 'undefined' ? scope[key] : env[key]
        }

        function _wp(m) {
            console.warn("WXMLRT_$gwx_wx1fe8d9a3cb067a75:" + m)
        }

        function _wl(tname, prefix) {
            _wp(prefix + ':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')
        }
        $gwn = console.warn;
        $gwl = console.log;

        function $gwh() {
            function x() {}
            x.prototype = {
                hn: function(obj, all) {
                    if (typeof(obj) == 'object') {
                        var cnt = 0;
                        var any1 = false,
                            any2 = false;
                        for (var x in obj) {
                            any1 = any1 | x === '__value__';
                            any2 = any2 | x === '__wxspec__';
                            cnt++;
                            if (cnt > 2) break;
                        }
                        return cnt == 2 && any1 && any2 && (all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h') ? "h" : "n";
                    }
                    return "n";
                },
                nh: function(obj, special) {
                    return {
                        __value__: obj,
                        __wxspec__: special ? special : true
                    }
                },
                rv: function(obj) {
                    return this.hn(obj, true) === 'n' ? obj : this.rv(obj.__value__);
                },
                hm: function(obj) {
                    if (typeof(obj) == 'object') {
                        var cnt = 0;
                        var any1 = false,
                            any2 = false;
                        for (var x in obj) {
                            any1 = any1 | x === '__value__';
                            any2 = any2 | x === '__wxspec__';
                            cnt++;
                            if (cnt > 2) break;
                        }
                        return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__));
                    }
                    return false;
                }
            }
            return new x;
        }
        wh = $gwh();

        function $gstack(s) {
            var tmp = s.split('\n ' + ' ' + ' ' + ' ');
            for (var i = 0; i < tmp.length; ++i) {
                if (0 == i) continue;
                if (")" === tmp[i][tmp[i].length - 1])
                    tmp[i] = tmp[i].replace(/\s\(.*\)$/, "");
                else
                    tmp[i] = "at anonymous function";
            }
            return tmp.join('\n ' + ' ' + ' ' + ' ');
        }

        function $gwrt(should_pass_type_info) {
            function ArithmeticEv(ops, e, s, g, o) {
                var _f = false;
                var rop = ops[0][1];
                var _a, _b, _c, _d, _aa, _bb;
                switch (rop) {
                    case '?:':
                        _a = rev(ops[1], e, s, g, o, _f);
                        _c = should_pass_type_info && (wh.hn(_a) === 'h');
                        _d = wh.rv(_a) ? rev(ops[2], e, s, g, o, _f) : rev(ops[3], e, s, g, o, _f);
                        _d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;
                        return _d;
                        break;
                    case '&&':
                        _a = rev(ops[1], e, s, g, o, _f);
                        _c = should_pass_type_info && (wh.hn(_a) === 'h');
                        _d = wh.rv(_a) ? rev(ops[2], e, s, g, o, _f) : wh.rv(_a);
                        _d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;
                        return _d;
                        break;
                    case '||':
                        _a = rev(ops[1], e, s, g, o, _f);
                        _c = should_pass_type_info && (wh.hn(_a) === 'h');
                        _d = wh.rv(_a) ? wh.rv(_a) : rev(ops[2], e, s, g, o, _f);
                        _d = _c && wh.hn(_d) === 'n' ? wh.nh(_d, 'c') : _d;
                        return _d;
                        break;
                    case '+':
                    case '*':
                    case '/':
                    case '%':
                    case '|':
                    case '^':
                    case '&':
                    case '===':
                    case '==':
                    case '!=':
                    case '!==':
                    case '>=':
                    case '<=':
                    case '>':
                    case '<':
                    case '<<':
                    case '>>':
                        _a = rev(ops[1], e, s, g, o, _f);
                        _b = rev(ops[2], e, s, g, o, _f);
                        _c = should_pass_type_info && (wh.hn(_a) === 'h' || wh.hn(_b) === 'h');
                        switch (rop) {
                            case '+':
                                _d = wh.rv(_a) + wh.rv(_b);
                                break;
                            case '*':
                                _d = wh.rv(_a) * wh.rv(_b);
                                break;
                            case '/':
                                _d = wh.rv(_a) / wh.rv(_b);
                                break;
                            case '%':
                                _d = wh.rv(_a) % wh.rv(_b);
                                break;
                            case '|':
                                _d = wh.rv(_a) | wh.rv(_b);
                                break;
                            case '^':
                                _d = wh.rv(_a) ^ wh.rv(_b);
                                break;
                            case '&':
                                _d = wh.rv(_a) & wh.rv(_b);
                                break;
                            case '===':
                                _d = wh.rv(_a) === wh.rv(_b);
                                break;
                            case '==':
                                _d = wh.rv(_a) == wh.rv(_b);
                                break;
                            case '!=':
                                _d = wh.rv(_a) != wh.rv(_b);
                                break;
                            case '!==':
                                _d = wh.rv(_a) !== wh.rv(_b);
                                break;
                            case '>=':
                                _d = wh.rv(_a) >= wh.rv(_b);
                                break;
                            case '<=':
                                _d = wh.rv(_a) <= wh.rv(_b);
                                break;
                            case '>':
                                _d = wh.rv(_a) > wh.rv(_b);
                                break;
                            case '<':
                                _d = wh.rv(_a) < wh.rv(_b);
                                break;
                            case '<<':
                                _d = wh.rv(_a) << wh.rv(_b);
                                break;
                            case '>>':
                                _d = wh.rv(_a) >> wh.rv(_b);
                                break;
                            default:
                                break;
                        }
                        return _c ? wh.nh(_d, "c") : _d;
                        break;
                    case '-':
                        _a = ops.length === 3 ? rev(ops[1], e, s, g, o, _f) : 0;
                        _b = ops.length === 3 ? rev(ops[2], e, s, g, o, _f) : rev(ops[1], e, s, g, o, _f);
                        _c = should_pass_type_info && (wh.hn(_a) === 'h' || wh.hn(_b) === 'h');
                        _d = _c ? wh.rv(_a) - wh.rv(_b) : _a - _b;
                        return _c ? wh.nh(_d, "c") : _d;
                        break;
                    case '!':
                        _a = rev(ops[1], e, s, g, o, _f);
                        _c = should_pass_type_info && (wh.hn(_a) == 'h');
                        _d = !wh.rv(_a);
                        return _c ? wh.nh(_d, "c") : _d;
                    case '~':
                        _a = rev(ops[1], e, s, g, o, _f);
                        _c = should_pass_type_info && (wh.hn(_a) == 'h');
                        _d = ~wh.rv(_a);
                        return _c ? wh.nh(_d, "c") : _d;
                    default:
                        $gwn('unrecognized op' + rop);
                }
            }

            function rev(ops, e, s, g, o, newap) {
                var op = ops[0];
                var _f = false;
                if (typeof newap !== "undefined") o.ap = newap;
                if (typeof(op) === 'object') {
                    var vop = op[0];
                    var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
                    switch (vop) {
                        case 2:
                            return ArithmeticEv(ops, e, s, g, o);
                            break;
                        case 4:
                            return rev(ops[1], e, s, g, o, _f);
                            break;
                        case 5:
                            switch (ops.length) {
                                case 2:
                                    _a = rev(ops[1], e, s, g, o, _f);
                                    return should_pass_type_info ? [_a] : [wh.rv(_a)];
                                    return [_a];
                                    break;
                                case 1:
                                    return [];
                                    break;
                                default:
                                    _a = rev(ops[1], e, s, g, o, _f);
                                    _b = rev(ops[2], e, s, g, o, _f);
                                    _a.push(
                                        should_pass_type_info ?
                                        _b :
                                        wh.rv(_b)
                                    );
                                    return _a;
                                    break;
                            }
                            break;
                        case 6:
                            _a = rev(ops[1], e, s, g, o);
                            var ap = o.ap;
                            _ta = wh.hn(_a) === 'h';
                            _aa = _ta ? wh.rv(_a) : _a;
                            o.is_affected |= _ta;
                            if (should_pass_type_info) {
                                if (_aa === null || typeof(_aa) === 'undefined') {
                                    return _ta ? wh.nh(undefined, 'e') : undefined;
                                }
                                _b = rev(ops[2], e, s, g, o, _f);
                                _tb = wh.hn(_b) === 'h';
                                _bb = _tb ? wh.rv(_b) : _b;
                                o.ap = ap;
                                o.is_affected |= _tb;
                                if (_bb === null || typeof(_bb) === 'undefined' ||
                                    _bb === "__proto__" || _bb === "prototype" || _bb === "caller") {
                                    return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
                                }
                                _d = _aa[_bb];
                                if (typeof _d === 'function' && !ap) _d = undefined;
                                _td = wh.hn(_d) === 'h';
                                o.is_affected |= _td;
                                return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
                            } else {
                                if (_aa === null || typeof(_aa) === 'undefined') {
                                    return undefined;
                                }
                                _b = rev(ops[2], e, s, g, o, _f);
                                _tb = wh.hn(_b) === 'h';
                                _bb = _tb ? wh.rv(_b) : _b;
                                o.ap = ap;
                                o.is_affected |= _tb;
                                if (_bb === null || typeof(_bb) === 'undefined' ||
                                    _bb === "__proto__" || _bb === "prototype" || _bb === "caller") {
                                    return undefined;
                                }
                                _d = _aa[_bb];
                                if (typeof _d === 'function' && !ap) _d = undefined;
                                _td = wh.hn(_d) === 'h';
                                o.is_affected |= _td;
                                return _td ? wh.rv(_d) : _d;
                            }
                        case 7:
                            switch (ops[1][0]) {
                                case 11:
                                    o.is_affected |= wh.hn(g) === 'h';
                                    return g;
                                case 3:
                                    _s = wh.rv(s);
                                    _e = wh.rv(e);
                                    _b = ops[1][1];
                                    if (g && g.f && g.f.hasOwnProperty(_b)) {
                                        _a = g.f;
                                        o.ap = true;
                                    } else {
                                        _a = _s && _s.hasOwnProperty(_b) ?
                                            s : (_e && _e.hasOwnProperty(_b) ? e : undefined);
                                    }
                                    if (should_pass_type_info) {
                                        if (_a) {
                                            _ta = wh.hn(_a) === 'h';
                                            _aa = _ta ? wh.rv(_a) : _a;
                                            _d = _aa[_b];
                                            _td = wh.hn(_d) === 'h';
                                            o.is_affected |= _ta || _td;
                                            _d = _ta && !_td ? wh.nh(_d, 'e') : _d;
                                            return _d;
                                        }
                                    } else {
                                        if (_a) {
                                            _ta = wh.hn(_a) === 'h';
                                            _aa = _ta ? wh.rv(_a) : _a;
                                            _d = _aa[_b];
                                            _td = wh.hn(_d) === 'h';
                                            o.is_affected |= _ta || _td;
                                            return wh.rv(_d);
                                        }
                                    }
                                    return undefined;
                            }
                            break;
                        case 8:
                            _a = {};
                            _a[ops[1]] = rev(ops[2], e, s, g, o, _f);
                            return _a;
                            break;
                        case 9:
                            _a = rev(ops[1], e, s, g, o, _f);
                            _b = rev(ops[2], e, s, g, o, _f);

                            function merge(_a, _b, _ow) {
                                var ka, _bbk;
                                _ta = wh.hn(_a) === 'h';
                                _tb = wh.hn(_b) === 'h';
                                _aa = wh.rv(_a);
                                _bb = wh.rv(_b);
                                for (var k in _bb) {
                                    if (_ow || !_aa.hasOwnProperty(k)) {
                                        _aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k], 'e') : _bb[k]) : wh.rv(_bb[k]);
                                    }
                                }
                                return _a;
                            }
                            var _c = _a
                            var _ow = true
                            if (typeof(ops[1][0]) === "object" && ops[1][0][0] === 10) {
                                _a = _b
                                _b = _c
                                _ow = false
                            }
                            if (typeof(ops[1][0]) === "object" && ops[1][0][0] === 10) {
                                var _r = {}
                                return merge(merge(_r, _a, _ow), _b, _ow);
                            } else
                                return merge(_a, _b, _ow);
                            break;
                        case 10:
                            _a = rev(ops[1], e, s, g, o, _f);
                            _a = should_pass_type_info ? _a : wh.rv(_a);
                            return _a;
                            break;
                        case 12:
                            var _r;
                            _a = rev(ops[1], e, s, g, o);
                            if (!o.ap) {
                                return should_pass_type_info && wh.hn(_a) === 'h' ? wh.nh(_r, 'f') : _r;
                            }
                            var ap = o.ap;
                            _b = rev(ops[2], e, s, g, o, _f);
                            o.ap = ap;
                            _ta = wh.hn(_a) === 'h';
                            _tb = _ca(_b);
                            _aa = wh.rv(_a);
                            _bb = wh.rv(_b);
                            snap_bb = $gdc(_bb, "nv_");
                            try {
                                _r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
                            } catch (e) {
                                e.message = e.message.replace(/nv_/g, "");
                                e.stack = e.stack.substring(0, e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
                                e.stack = e.stack.replace(/\snv_/g, " ");
                                e.stack = $gstack(e.stack);
                                if (g.debugInfo) {
                                    e.stack += "\n " + " " + " " + " at " + g.debugInfo[0] + ":" + g.debugInfo[1] + ":" + g.debugInfo[2];
                                    console.error(e);
                                }
                                _r = undefined;
                            }
                            return should_pass_type_info && (_tb || _ta) ? wh.nh(_r, 'f') : _r;
                    }
                } else {
                    if (op === 3 || op === 1) return ops[1];
                    else if (op === 11) {
                        var _a = '';
                        for (var i = 1; i < ops.length; i++) {
                            var xp = wh.rv(rev(ops[i], e, s, g, o, _f));
                            _a += typeof(xp) === 'undefined' ? '' : xp;
                        }
                        return _a;
                    }
                }
            }

            function wrapper(ops, e, s, g, o, newap) {
                if (ops[0] == '11182016') {
                    g.debugInfo = ops[2];
                    return rev(ops[1], e, s, g, o, newap);
                } else {
                    g.debugInfo = null;
                    return rev(ops, e, s, g, o, newap);
                }
            }
            return wrapper;
        }
        gra = $gwrt(true);
        grb = $gwrt(false);

        function TestTest(expr, ops, e, s, g, expect_a, expect_b, expect_affected) {
            {
                var o = {
                    is_affected: false
                };
                var a = gra(ops, e, s, g, o);
                if (JSON.stringify(a) != JSON.stringify(expect_a) || o.is_affected != expect_affected) {
                    console.warn("A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify(expect_a) + ", " + expect_affected + " is expected");
                }
            } {
                var o = {
                    is_affected: false
                };
                var a = grb(ops, e, s, g, o);
                if (JSON.stringify(a) != JSON.stringify(expect_b) || o.is_affected != expect_affected) {
                    console.warn("B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify(expect_b) + ", " + expect_affected + " is expected");
                }
            }
        }

        function wfor(to_iter, func, env, _s, global, father, itemname, indexname, keyname) {
            var _n = wh.hn(to_iter) === 'n';
            var scope = wh.rv(_s);
            var has_old_item = scope.hasOwnProperty(itemname);
            var has_old_index = scope.hasOwnProperty(indexname);
            var old_item = scope[itemname];
            var old_index = scope[indexname];
            var full = Object.prototype.toString.call(wh.rv(to_iter));
            var type = full[8];
            if (type === 'N' && full[10] === 'l') type = 'X';
            var _y;
            if (_n) {
                if (type === 'A') {
                    var r_iter_item;
                    for (var i = 0; i < to_iter.length; i++) {
                        scope[itemname] = to_iter[i];
                        scope[indexname] = _n ? i : wh.nh(i, 'h');
                        r_iter_item = wh.rv(to_iter[i]);
                        var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
                        _y = _v(key);
                        _(father, _y);
                        func(env, scope, _y, global);
                    }
                } else if (type === 'O') {
                    var i = 0;
                    var r_iter_item;
                    for (var k in to_iter) {
                        scope[itemname] = to_iter[k];
                        scope[indexname] = _n ? k : wh.nh(k, 'h');
                        r_iter_item = wh.rv(to_iter[k]);
                        var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
                        _y = _v(key);
                        _(father, _y);
                        func(env, scope, _y, global);
                        i++;
                    }
                } else if (type === 'S') {
                    for (var i = 0; i < to_iter.length; i++) {
                        scope[itemname] = to_iter[i];
                        scope[indexname] = _n ? i : wh.nh(i, 'h');
                        _y = _v(to_iter[i] + i);
                        _(father, _y);
                        func(env, scope, _y, global);
                    }
                } else if (type === 'N') {
                    for (var i = 0; i < to_iter; i++) {
                        scope[itemname] = i;
                        scope[indexname] = _n ? i : wh.nh(i, 'h');
                        _y = _v(i);
                        _(father, _y);
                        func(env, scope, _y, global);
                    }
                } else {}
            } else {
                var r_to_iter = wh.rv(to_iter);
                var r_iter_item, iter_item;
                if (type === 'A') {
                    for (var i = 0; i < r_to_iter.length; i++) {
                        iter_item = r_to_iter[i];
                        iter_item = wh.hn(iter_item) === 'n' ? wh.nh(iter_item, 'h') : iter_item;
                        r_iter_item = wh.rv(iter_item);
                        scope[itemname] = iter_item
                        scope[indexname] = _n ? i : wh.nh(i, 'h');
                        var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
                        _y = _v(key);
                        _(father, _y);
                        func(env, scope, _y, global);
                    }
                } else if (type === 'O') {
                    var i = 0;
                    for (var k in r_to_iter) {
                        iter_item = r_to_iter[k];
                        iter_item = wh.hn(iter_item) === 'n' ? wh.nh(iter_item, 'h') : iter_item;
                        r_iter_item = wh.rv(iter_item);
                        scope[itemname] = iter_item;
                        scope[indexname] = _n ? k : wh.nh(k, 'h');
                        var key = keyname && r_iter_item ? (keyname === "*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
                        _y = _v(key);
                        _(father, _y);
                        func(env, scope, _y, global);
                        i++
                    }
                } else if (type === 'S') {
                    for (var i = 0; i < r_to_iter.length; i++) {
                        iter_item = wh.nh(r_to_iter[i], 'h');
                        scope[itemname] = iter_item;
                        scope[indexname] = _n ? i : wh.nh(i, 'h');
                        _y = _v(to_iter[i] + i);
                        _(father, _y);
                        func(env, scope, _y, global);
                    }
                } else if (type === 'N') {
                    for (var i = 0; i < r_to_iter; i++) {
                        iter_item = wh.nh(i, 'h');
                        scope[itemname] = iter_item;
                        scope[indexname] = _n ? i : wh.nh(i, 'h');
                        _y = _v(i);
                        _(father, _y);
                        func(env, scope, _y, global);
                    }
                } else {}
            }
            if (has_old_item) {
                scope[itemname] = old_item;
            } else {
                delete scope[itemname];
            }
            if (has_old_index) {
                scope[indexname] = old_index;
            } else {
                delete scope[indexname];
            }
        }

        function _ca(o) {
            if (wh.hn(o) == 'h') return true;
            if (typeof o !== "object") return false;
            for (var i in o) {
                if (o.hasOwnProperty(i)) {
                    if (_ca(o[i])) return true;
                }
            }
            return false;
        }

        function _da(node, attrname, opindex, raw, o) {
            var isaffected = false;
            var value = $gdc(raw, "", 2);
            if (o.ap && value && value.constructor === Function) {
                attrname = "$wxs:" + attrname;
                node.attr["$gdc"] = $gdc;
            }
            if (o.is_affected || _ca(raw)) {
                node.n.push(attrname);
                node.raw[attrname] = raw;
            }
            node.attr[attrname] = value;
        }

        function _r(node, attrname, opindex, env, scope, global) {
            global.opindex = opindex;
            var o = {},
                _env;
            var a = grb(z[opindex], env, scope, global, o);
            _da(node, attrname, opindex, a, o);
        }

        function _rz(z, node, attrname, opindex, env, scope, global) {
            global.opindex = opindex;
            var o = {},
                _env;
            var a = grb(z[opindex], env, scope, global, o);
            _da(node, attrname, opindex, a, o);
        }

        function _o(opindex, env, scope, global) {
            global.opindex = opindex;
            var nothing = {};
            var r = grb(z[opindex], env, scope, global, nothing);
            return (r && r.constructor === Function) ? undefined : r;
        }

        function _oz(z, opindex, env, scope, global) {
            global.opindex = opindex;
            var nothing = {};
            var r = grb(z[opindex], env, scope, global, nothing);
            return (r && r.constructor === Function) ? undefined : r;
        }

        function _1(opindex, env, scope, global, o) {
            var o = o || {};
            global.opindex = opindex;
            return gra(z[opindex], env, scope, global, o);
        }

        function _1z(z, opindex, env, scope, global, o) {
            var o = o || {};
            global.opindex = opindex;
            return gra(z[opindex], env, scope, global, o);
        }

        function _2(opindex, func, env, scope, global, father, itemname, indexname, keyname) {
            var o = {};
            var to_iter = _1(opindex, env, scope, global);
            wfor(to_iter, func, env, scope, global, father, itemname, indexname, keyname);
        }

        function _2z(z, opindex, func, env, scope, global, father, itemname, indexname, keyname) {
            var o = {};
            var to_iter = _1z(z, opindex, env, scope, global);
            wfor(to_iter, func, env, scope, global, father, itemname, indexname, keyname);
        }


        function _m(tag, attrs, generics, env, scope, global) {
            var tmp = _n(tag);
            var base = 0;
            for (var i = 0; i < attrs.length; i += 2) {
                if (base + attrs[i + 1] < 0) {
                    tmp.attr[attrs[i]] = true;
                } else {
                    _r(tmp, attrs[i], base + attrs[i + 1], env, scope, global);
                    if (base === 0) base = attrs[i + 1];
                }
            }
            for (var i = 0; i < generics.length; i += 2) {
                if (base + generics[i + 1] < 0) {
                    tmp.generics[generics[i]] = "";
                } else {
                    var $t = grb(z[base + generics[i + 1]], env, scope, global);
                    if ($t != "") $t = "wx-" + $t;
                    tmp.generics[generics[i]] = $t;
                    if (base === 0) base = generics[i + 1];
                }
            }
            return tmp;
        }

        function _mz(z, tag, attrs, generics, env, scope, global) {
            var tmp = _n(tag);
            var base = 0;
            for (var i = 0; i < attrs.length; i += 2) {
                if (base + attrs[i + 1] < 0) {
                    tmp.attr[attrs[i]] = true;
                } else {
                    _rz(z, tmp, attrs[i], base + attrs[i + 1], env, scope, global);
                    if (base === 0) base = attrs[i + 1];
                }
            }
            for (var i = 0; i < generics.length; i += 2) {
                if (base + generics[i + 1] < 0) {
                    tmp.generics[generics[i]] = "";
                } else {
                    var $t = grb(z[base + generics[i + 1]], env, scope, global);
                    if ($t != "") $t = "wx-" + $t;
                    tmp.generics[generics[i]] = $t;
                    if (base === 0) base = generics[i + 1];
                }
            }
            return tmp;
        }

        var nf_init = function() {
            if (typeof __WXML_GLOBAL__ === "undefined" || undefined === __WXML_GLOBAL__.wxs_nf_init) {
                nf_init_Object();
                nf_init_Function();
                nf_init_Array();
                nf_init_String();
                nf_init_Boolean();
                nf_init_Number();
                nf_init_Math();
                nf_init_Date();
                nf_init_RegExp();
            }
            if (typeof __WXML_GLOBAL__ !== "undefined") __WXML_GLOBAL__.wxs_nf_init = true;
        };
        var nf_init_Object = function() {
            Object.defineProperty(Object.prototype, "nv_constructor", {
                writable: true,
                value: "Object"
            })
            Object.defineProperty(Object.prototype, "nv_toString", {
                writable: true,
                value: function() {
                    return "[object Object]"
                }
            })
        }
        var nf_init_Function = function() {
            Object.defineProperty(Function.prototype, "nv_constructor", {
                writable: true,
                value: "Function"
            })
            Object.defineProperty(Function.prototype, "nv_length", {get: function() {
                    return this.length;
                },
                set: function() {}
            });
            Object.defineProperty(Function.prototype, "nv_toString", {
                writable: true,
                value: function() {
                    return "[function Function]"
                }
            })
        }
        var nf_init_Array = function() {
            Object.defineProperty(Array.prototype, "nv_toString", {
                writable: true,
                value: function() {
                    return this.nv_join();
                }
            })
            Object.defineProperty(Array.prototype, "nv_join", {
                writable: true,
                value: function(s) {
                    s = undefined == s ? ',' : s;
                    var r = "";
                    for (var i = 0; i < this.length; ++i) {
                        if (0 != i) r += s;
                        if (null == this[i] || undefined == this[i]) r += '';
                        else if (typeof this[i] == 'function') r += this[i].nv_toString();
                        else if (typeof this[i] == 'object' && this[i].nv_constructor === "Array") r += this[i].nv_join();
                        else r += this[i].toString();
                    }
                    return r;
                }
            })
            Object.defineProperty(Array.prototype, "nv_constructor", {
                writable: true,
                value: "Array"
            })
            Object.defineProperty(Array.prototype, "nv_concat", {
                writable: true,
                value: Array.prototype.concat
            })
            Object.defineProperty(Array.prototype, "nv_pop", {
                writable: true,
                value: Array.prototype.pop
            })
            Object.defineProperty(Array.prototype, "nv_push", {
                writable: true,
                value: Array.prototype.push
            })
            Object.defineProperty(Array.prototype, "nv_reverse", {
                writable: true,
                value: Array.prototype.reverse
            })
            Object.defineProperty(Array.prototype, "nv_shift", {
                writable: true,
                value: Array.prototype.shift
            })
            Object.defineProperty(Array.prototype, "nv_slice", {
                writable: true,
                value: Array.prototype.slice
            })
            Object.defineProperty(Array.prototype, "nv_sort", {
                writable: true,
                value: Array.prototype.sort
            })
            Object.defineProperty(Array.prototype, "nv_splice", {
                writable: true,
                value: Array.prototype.splice
            })
            Object.defineProperty(Array.prototype, "nv_unshift", {
                writable: true,
                value: Array.prototype.unshift
            })
            Object.defineProperty(Array.prototype, "nv_indexOf", {
                writable: true,
                value: Array.prototype.indexOf
            })
            Object.defineProperty(Array.prototype, "nv_lastIndexOf", {
                writable: true,
                value: Array.prototype.lastIndexOf
            })
            Object.defineProperty(Array.prototype, "nv_every", {
                writable: true,
                value: Array.prototype.every
            })
            Object.defineProperty(Array.prototype, "nv_some", {
                writable: true,
                value: Array.prototype.some
            })
            Object.defineProperty(Array.prototype, "nv_forEach", {
                writable: true,
                value: Array.prototype.forEach
            })
            Object.defineProperty(Array.prototype, "nv_map", {
                writable: true,
                value: Array.prototype.map
            })
            Object.defineProperty(Array.prototype, "nv_filter", {
                writable: true,
                value: Array.prototype.filter
            })
            Object.defineProperty(Array.prototype, "nv_reduce", {
                writable: true,
                value: Array.prototype.reduce
            })
            Object.defineProperty(Array.prototype, "nv_reduceRight", {
                writable: true,
                value: Array.prototype.reduceRight
            })
            Object.defineProperty(Array.prototype, "nv_length", {get: function() {
                    return this.length;
                },
                set: function(value) {
                    this.length = value;
                }
            });
        }
        var nf_init_String = function() {
            Object.defineProperty(String.prototype, "nv_constructor", {
                writable: true,
                value: "String"
            })
            Object.defineProperty(String.prototype, "nv_toString", {
                writable: true,
                value: String.prototype.toString
            })
            Object.defineProperty(String.prototype, "nv_valueOf", {
                writable: true,
                value: String.prototype.valueOf
            })
            Object.defineProperty(String.prototype, "nv_charAt", {
                writable: true,
                value: String.prototype.charAt
            })
            Object.defineProperty(String.prototype, "nv_charCodeAt", {
                writable: true,
                value: String.prototype.charCodeAt
            })
            Object.defineProperty(String.prototype, "nv_concat", {
                writable: true,
                value: String.prototype.concat
            })
            Object.defineProperty(String.prototype, "nv_indexOf", {
                writable: true,
                value: String.prototype.indexOf
            })
            Object.defineProperty(String.prototype, "nv_lastIndexOf", {
                writable: true,
                value: String.prototype.lastIndexOf
            })
            Object.defineProperty(String.prototype, "nv_localeCompare", {
                writable: true,
                value: String.prototype.localeCompare
            })
            Object.defineProperty(String.prototype, "nv_match", {
                writable: true,
                value: String.prototype.match
            })
            Object.defineProperty(String.prototype, "nv_replace", {
                writable: true,
                value: String.prototype.replace
            })
            Object.defineProperty(String.prototype, "nv_search", {
                writable: true,
                value: String.prototype.search
            })
            Object.defineProperty(String.prototype, "nv_slice", {
                writable: true,
                value: String.prototype.slice
            })
            Object.defineProperty(String.prototype, "nv_split", {
                writable: true,
                value: String.prototype.split
            })
            Object.defineProperty(String.prototype, "nv_substring", {
                writable: true,
                value: String.prototype.substring
            })
            Object.defineProperty(String.prototype, "nv_toLowerCase", {
                writable: true,
                value: String.prototype.toLowerCase
            })
            Object.defineProperty(String.prototype, "nv_toLocaleLowerCase", {
                writable: true,
                value: String.prototype.toLocaleLowerCase
            })
            Object.defineProperty(String.prototype, "nv_toUpperCase", {
                writable: true,
                value: String.prototype.toUpperCase
            })
            Object.defineProperty(String.prototype, "nv_toLocaleUpperCase", {
                writable: true,
                value: String.prototype.toLocaleUpperCase
            })
            Object.defineProperty(String.prototype, "nv_trim", {
                writable: true,
                value: String.prototype.trim
            })
            Object.defineProperty(String.prototype, "nv_length", {get: function() {
                    return this.length;
                },
                set: function(value) {
                    this.length = value;
                }
            });
        }
        var nf_init_Boolean = function() {
            Object.defineProperty(Boolean.prototype, "nv_constructor", {
                writable: true,
                value: "Boolean"
            })
            Object.defineProperty(Boolean.prototype, "nv_toString", {
                writable: true,
                value: Boolean.prototype.toString
            })
            Object.defineProperty(Boolean.prototype, "nv_valueOf", {
                writable: true,
                value: Boolean.prototype.valueOf
            })
        }
        var nf_init_Number = function() {
            Object.defineProperty(Number, "nv_MAX_VALUE", {
                writable: false,
                value: Number.MAX_VALUE
            })
            Object.defineProperty(Number, "nv_MIN_VALUE", {
                writable: false,
                value: Number.MIN_VALUE
            })
            Object.defineProperty(Number, "nv_NEGATIVE_INFINITY", {
                writable: false,
                value: Number.NEGATIVE_INFINITY
            })
            Object.defineProperty(Number, "nv_POSITIVE_INFINITY", {
                writable: false,
                value: Number.POSITIVE_INFINITY
            })
            Object.defineProperty(Number.prototype, "nv_constructor", {
                writable: true,
                value: "Number"
            })
            Object.defineProperty(Number.prototype, "nv_toString", {
                writable: true,
                value: Number.prototype.toString
            })
            Object.defineProperty(Number.prototype, "nv_toLocaleString", {
                writable: true,
                value: Number.prototype.toLocaleString
            })
            Object.defineProperty(Number.prototype, "nv_valueOf", {
                writable: true,
                value: Number.prototype.valueOf
            })
            Object.defineProperty(Number.prototype, "nv_toFixed", {
                writable: true,
                value: Number.prototype.toFixed
            })
            Object.defineProperty(Number.prototype, "nv_toExponential", {
                writable: true,
                value: Number.prototype.toExponential
            })
            Object.defineProperty(Number.prototype, "nv_toPrecision", {
                writable: true,
                value: Number.prototype.toPrecision
            })
        }
        var nf_init_Math = function() {
            Object.defineProperty(Math, "nv_E", {
                writable: false,
                value: Math.E
            })
            Object.defineProperty(Math, "nv_LN10", {
                writable: false,
                value: Math.LN10
            })
            Object.defineProperty(Math, "nv_LN2", {
                writable: false,
                value: Math.LN2
            })
            Object.defineProperty(Math, "nv_LOG2E", {
                writable: false,
                value: Math.LOG2E
            })
            Object.defineProperty(Math, "nv_LOG10E", {
                writable: false,
                value: Math.LOG10E
            })
            Object.defineProperty(Math, "nv_PI", {
                writable: false,
                value: Math.PI
            })
            Object.defineProperty(Math, "nv_SQRT1_2", {
                writable: false,
                value: Math.SQRT1_2
            })
            Object.defineProperty(Math, "nv_SQRT2", {
                writable: false,
                value: Math.SQRT2
            })
            Object.defineProperty(Math, "nv_abs", {
                writable: false,
                value: Math.abs
            })
            Object.defineProperty(Math, "nv_acos", {
                writable: false,
                value: Math.acos
            })
            Object.defineProperty(Math, "nv_asin", {
                writable: false,
                value: Math.asin
            })
            Object.defineProperty(Math, "nv_atan", {
                writable: false,
                value: Math.atan
            })
            Object.defineProperty(Math, "nv_atan2", {
                writable: false,
                value: Math.atan2
            })
            Object.defineProperty(Math, "nv_ceil", {
                writable: false,
                value: Math.ceil
            })
            Object.defineProperty(Math, "nv_cos", {
                writable: false,
                value: Math.cos
            })
            Object.defineProperty(Math, "nv_exp", {
                writable: false,
                value: Math.exp
            })
            Object.defineProperty(Math, "nv_floor", {
                writable: false,
                value: Math.floor
            })
            Object.defineProperty(Math, "nv_log", {
                writable: false,
                value: Math.log
            })
            Object.defineProperty(Math, "nv_max", {
                writable: false,
                value: Math.max
            })
            Object.defineProperty(Math, "nv_min", {
                writable: false,
                value: Math.min
            })
            Object.defineProperty(Math, "nv_pow", {
                writable: false,
                value: Math.pow
            })
            Object.defineProperty(Math, "nv_random", {
                writable: false,
                value: Math.random
            })
            Object.defineProperty(Math, "nv_round", {
                writable: false,
                value: Math.round
            })
            Object.defineProperty(Math, "nv_sin", {
                writable: false,
                value: Math.sin
            })
            Object.defineProperty(Math, "nv_sqrt", {
                writable: false,
                value: Math.sqrt
            })
            Object.defineProperty(Math, "nv_tan", {
                writable: false,
                value: Math.tan
            })
        }
        var nf_init_Date = function() {
            Object.defineProperty(Date.prototype, "nv_constructor", {
                writable: true,
                value: "Date"
            })
            Object.defineProperty(Date, "nv_parse", {
                writable: true,
                value: Date.parse
            })
            Object.defineProperty(Date, "nv_UTC", {
                writable: true,
                value: Date.UTC
            })
            Object.defineProperty(Date, "nv_now", {
                writable: true,
                value: Date.now
            })
            Object.defineProperty(Date.prototype, "nv_toString", {
                writable: true,
                value: Date.prototype.toString
            })
            Object.defineProperty(Date.prototype, "nv_toDateString", {
                writable: true,
                value: Date.prototype.toDateString
            })
            Object.defineProperty(Date.prototype, "nv_toTimeString", {
                writable: true,
                value: Date.prototype.toTimeString
            })
            Object.defineProperty(Date.prototype, "nv_toLocaleString", {
                writable: true,
                value: Date.prototype.toLocaleString
            })
            Object.defineProperty(Date.prototype, "nv_toLocaleDateString", {
                writable: true,
                value: Date.prototype.toLocaleDateString
            })
            Object.defineProperty(Date.prototype, "nv_toLocaleTimeString", {
                writable: true,
                value: Date.prototype.toLocaleTimeString
            })
            Object.defineProperty(Date.prototype, "nv_valueOf", {
                writable: true,
                value: Date.prototype.valueOf
            })
            Object.defineProperty(Date.prototype, "nv_getTime", {
                writable: true,
                value: Date.prototype.getTime
            })
            Object.defineProperty(Date.prototype, "nv_getFullYear", {
                writable: true,
                value: Date.prototype.getFullYear
            })
            Object.defineProperty(Date.prototype, "nv_getUTCFullYear", {
                writable: true,
                value: Date.prototype.getUTCFullYear
            })
            Object.defineProperty(Date.prototype, "nv_getMonth", {
                writable: true,
                value: Date.prototype.getMonth
            })
            Object.defineProperty(Date.prototype, "nv_getUTCMonth", {
                writable: true,
                value: Date.prototype.getUTCMonth
            })
            Object.defineProperty(Date.prototype, "nv_getDate", {
                writable: true,
                value: Date.prototype.getDate
            })
            Object.defineProperty(Date.prototype, "nv_getUTCDate", {
                writable: true,
                value: Date.prototype.getUTCDate
            })
            Object.defineProperty(Date.prototype, "nv_getDay", {
                writable: true,
                value: Date.prototype.getDay
            })
            Object.defineProperty(Date.prototype, "nv_getUTCDay", {
                writable: true,
                value: Date.prototype.getUTCDay
            })
            Object.defineProperty(Date.prototype, "nv_getHours", {
                writable: true,
                value: Date.prototype.getHours
            })
            Object.defineProperty(Date.prototype, "nv_getUTCHours", {
                writable: true,
                value: Date.prototype.getUTCHours
            })
            Object.defineProperty(Date.prototype, "nv_getMinutes", {
                writable: true,
                value: Date.prototype.getMinutes
            })
            Object.defineProperty(Date.prototype, "nv_getUTCMinutes", {
                writable: true,
                value: Date.prototype.getUTCMinutes
            })
            Object.defineProperty(Date.prototype, "nv_getSeconds", {
                writable: true,
                value: Date.prototype.getSeconds
            })
            Object.defineProperty(Date.prototype, "nv_getUTCSeconds", {
                writable: true,
                value: Date.prototype.getUTCSeconds
            })
            Object.defineProperty(Date.prototype, "nv_getMilliseconds", {
                writable: true,
                value: Date.prototype.getMilliseconds
            })
            Object.defineProperty(Date.prototype, "nv_getUTCMilliseconds", {
                writable: true,
                value: Date.prototype.getUTCMilliseconds
            })
            Object.defineProperty(Date.prototype, "nv_getTimezoneOffset", {
                writable: true,
                value: Date.prototype.getTimezoneOffset
            })
            Object.defineProperty(Date.prototype, "nv_setTime", {
                writable: true,
                value: Date.prototype.setTime
            })
            Object.defineProperty(Date.prototype, "nv_setMilliseconds", {
                writable: true,
                value: Date.prototype.setMilliseconds
            })
            Object.defineProperty(Date.prototype, "nv_setUTCMilliseconds", {
                writable: true,
                value: Date.prototype.setUTCMilliseconds
            })
            Object.defineProperty(Date.prototype, "nv_setSeconds", {
                writable: true,
                value: Date.prototype.setSeconds
            })
            Object.defineProperty(Date.prototype, "nv_setUTCSeconds", {
                writable: true,
                value: Date.prototype.setUTCSeconds
            })
            Object.defineProperty(Date.prototype, "nv_setMinutes", {
                writable: true,
                value: Date.prototype.setMinutes
            })
            Object.defineProperty(Date.prototype, "nv_setUTCMinutes", {
                writable: true,
                value: Date.prototype.setUTCMinutes
            })
            Object.defineProperty(Date.prototype, "nv_setHours", {
                writable: true,
                value: Date.prototype.setHours
            })
            Object.defineProperty(Date.prototype, "nv_setUTCHours", {
                writable: true,
                value: Date.prototype.setUTCHours
            })
            Object.defineProperty(Date.prototype, "nv_setDate", {
                writable: true,
                value: Date.prototype.setDate
            })
            Object.defineProperty(Date.prototype, "nv_setUTCDate", {
                writable: true,
                value: Date.prototype.setUTCDate
            })
            Object.defineProperty(Date.prototype, "nv_setMonth", {
                writable: true,
                value: Date.prototype.setMonth
            })
            Object.defineProperty(Date.prototype, "nv_setUTCMonth", {
                writable: true,
                value: Date.prototype.setUTCMonth
            })
            Object.defineProperty(Date.prototype, "nv_setFullYear", {
                writable: true,
                value: Date.prototype.setFullYear
            })
            Object.defineProperty(Date.prototype, "nv_setUTCFullYear", {
                writable: true,
                value: Date.prototype.setUTCFullYear
            })
            Object.defineProperty(Date.prototype, "nv_toUTCString", {
                writable: true,
                value: Date.prototype.toUTCString
            })
            Object.defineProperty(Date.prototype, "nv_toISOString", {
                writable: true,
                value: Date.prototype.toISOString
            })
            Object.defineProperty(Date.prototype, "nv_toJSON", {
                writable: true,
                value: Date.prototype.toJSON
            })
        }
        var nf_init_RegExp = function() {
            Object.defineProperty(RegExp.prototype, "nv_constructor", {
                writable: true,
                value: "RegExp"
            })
            Object.defineProperty(RegExp.prototype, "nv_exec", {
                writable: true,
                value: RegExp.prototype.exec
            })
            Object.defineProperty(RegExp.prototype, "nv_test", {
                writable: true,
                value: RegExp.prototype.test
            })
            Object.defineProperty(RegExp.prototype, "nv_toString", {
                writable: true,
                value: RegExp.prototype.toString
            })
            Object.defineProperty(RegExp.prototype, "nv_source", {get: function() {
                    return this.source;
                },
                set: function() {}
            });
            Object.defineProperty(RegExp.prototype, "nv_global", {get: function() {
                    return this.global;
                },
                set: function() {}
            });
            Object.defineProperty(RegExp.prototype, "nv_ignoreCase", {get: function() {
                    return this.ignoreCase;
                },
                set: function() {}
            });
            Object.defineProperty(RegExp.prototype, "nv_multiline", {get: function() {
                    return this.multiline;
                },
                set: function() {}
            });
            Object.defineProperty(RegExp.prototype, "nv_lastIndex", {get: function() {
                    return this.lastIndex;
                },
                set: function(v) {
                    this.lastIndex = v;
                }
            });
        }
        nf_init();
        var nv_getDate = function() {
            var args = Array.prototype.slice.call(arguments);
            args.unshift(Date);
            return new(Function.prototype.bind.apply(Date, args));
        }
        var nv_getRegExp = function() {
            var args = Array.prototype.slice.call(arguments);
            args.unshift(RegExp);
            return new(Function.prototype.bind.apply(RegExp, args));
        }
        var nv_console = {}
        nv_console.nv_log = function() {
            var res = "WXSRT:";
            for (var i = 0; i < arguments.length; ++i) res += arguments[i] + " ";
            console.log(res);
        }
        var nv_parseInt = parseInt,
            nv_parseFloat = parseFloat,
            nv_isNaN = isNaN,
            nv_isFinite = isFinite,
            nv_decodeURI = decodeURI,
            nv_decodeURIComponent = decodeURIComponent,
            nv_encodeURI = encodeURI,
            nv_encodeURIComponent = encodeURIComponent;

        function $gdc(o, p, r) {
            o = wh.rv(o);
            if (o === null || o === undefined) return o;
            if (typeof o === "string" || typeof o === "boolean" || typeof o === "number") return o;
            if (o.constructor === Object) {
                var copy = {};
                for (var k in o)
                    if (Object.prototype.hasOwnProperty.call(o, k))
                        if (undefined === p) copy[k.substring(3)] = $gdc(o[k], p, r);
                        else copy[p + k] = $gdc(o[k], p, r);
                return copy;
            }
            if (o.constructor === Array) {
                var copy = [];
                for (var i = 0; i < o.length; i++) copy.push($gdc(o[i], p, r));
                return copy;
            }
            if (o.constructor === Date) {
                var copy = new Date();
                copy.setTime(o.getTime());
                return copy;
            }
            if (o.constructor === RegExp) {
                var f = "";
                if (o.global) f += "g";
                if (o.ignoreCase) f += "i";
                if (o.multiline) f += "m";
                return (new RegExp(o.source, f));
            }
            if (r && typeof o === "function") {
                if (r == 1) return $gdc(o(), undefined, 2);
                if (r == 2) return o;
            }
            return null;
        }
        var nv_JSON = {}
        nv_JSON.nv_stringify = function(o) {
            JSON.stringify(o);
            return JSON.stringify($gdc(o));
        }
        nv_JSON.nv_parse = function(o) {
            if (o === undefined) return undefined;
            var t = JSON.parse(o);
            return $gdc(t, 'nv_');
        }

        function _af(p, a, r, c) {
            p.extraAttr = {
                "t_action": a,
                "t_rawid": r
            };
            if (typeof(c) != 'undefined') p.extraAttr.t_cid = c;
        }

        function _ai(i, p, e, me, r, c) {
            var x = _grp(p, e, me);
            if (x) i.push(x);
            else {
                i.push('');
                _wp(me + ':import:' + r + ':' + c + ': Path `' + p + '` not found from `' + me + '`.')
            }
        }

        function _grp(p, e, me) {
            if (p[0] != '/') {
                var mepart = me.split('/');
                mepart.pop();
                var ppart = p.split('/');
                for (var i = 0; i < ppart.length; i++) {
                    if (ppart[i] == '..') mepart.pop();
                    else if (!ppart[i] || ppart[i] == '.') continue;
                    else mepart.push(ppart[i]);
                }
                p = mepart.join('/');
            }
            if (me[0] == '.' && p[0] == '/') p = '.' + p;
            if (e[p]) return p;
            if (e[p + '.wxml']) return p + '.wxml';
        }

        function _gd(p, c, e, d) {
            if (!c) return;
            if (d[p][c]) return d[p][c];
            for (var x = e[p].i.length - 1; x >= 0; x--) {
                if (e[p].i[x] && d[e[p].i[x]][c]) return d[e[p].i[x]][c]
            };
            for (var x = e[p].ti.length - 1; x >= 0; x--) {
                var q = _grp(e[p].ti[x], e, p);
                if (q && d[q][c]) return d[q][c]
            }
            var ii = _gapi(e, p);
            for (var x = 0; x < ii.length; x++) {
                if (ii[x] && d[ii[x]][c]) return d[ii[x]][c]
            }
            for (var k = e[p].j.length - 1; k >= 0; k--)
                if (e[p].j[k]) {
                    for (var q = e[e[p].j[k]].ti.length - 1; q >= 0; q--) {
                        var pp = _grp(e[e[p].j[k]].ti[q], e, p);
                        if (pp && d[pp][c]) {
                            return d[pp][c]
                        }
                    }
                }
        }

        function _gapi(e, p) {
            if (!p) return [];
            if ($gaic[p]) {
                return $gaic[p]
            };
            var ret = [],
                q = [],
                h = 0,
                t = 0,
                put = {},
                visited = {};
            q.push(p);
            visited[p] = true;
            t++;
            while (h < t) {
                var a = q[h++];
                for (var i = 0; i < e[a].ic.length; i++) {
                    var nd = e[a].ic[i];
                    var np = _grp(nd, e, a);
                    if (np && !visited[np]) {
                        visited[np] = true;
                        q.push(np);
                        t++;
                    }
                }
                for (var i = 0; a != p && i < e[a].ti.length; i++) {
                    var ni = e[a].ti[i];
                    var nm = _grp(ni, e, a);
                    if (nm && !put[nm]) {
                        put[nm] = true;
                        ret.push(nm);
                    }
                }
            }
            $gaic[p] = ret;
            return ret;
        }
        var $ixc = {};

        function _ic(p, ent, me, e, s, r, gg) {
            var x = _grp(p, ent, me);
            ent[me].j.push(x);
            if (x) {
                if ($ixc[x]) {
                    _wp('-1:include:-1:-1: `' + p + '` is being included in a loop, will be stop.');
                    return;
                }
                $ixc[x] = true;
                try {
                    ent[x].f(e, s, r, gg)
                } catch (e) {}
                $ixc[x] = false;
            } else {
                _wp(me + ':include:-1:-1: Included path `' + p + '` not found from `' + me + '`.')
            }
        }

        function _w(tn, f, line, c) {
            _wp(f + ':template:' + line + ':' + c + ': Template `' + tn + '` not found.');
        }

        function _ev(dom) {
            var changed = false;
            delete dom.properities;
            delete dom.n;
            if (dom.children) {
                do {
                    changed = false;
                    var newch = [];
                    for (var i = 0; i < dom.children.length; i++) {
                        var ch = dom.children[i];
                        if (ch.tag == 'virtual') {
                            changed = true;
                            for (var j = 0; ch.children && j < ch.children.length; j++) {
                                newch.push(ch.children[j]);
                            }
                        } else {
                            newch.push(ch);
                        }
                    }
                    dom.children = newch;
                } while (changed);
                for (var i = 0; i < dom.children.length; i++) {
                    _ev(dom.children[i]);
                }
            }
            return dom;
        }

        function _tsd(root) {
            if (root.tag == "wx-wx-scope") {
                root.tag = "virtual";
                root.wxCkey = "11";
                root['wxScopeData'] = root.attr['wx:scope-data'];
                delete root.n;
                delete root.raw;
                delete root.generics;
                delete root.attr;
            }
            for (var i = 0; root.children && i < root.children.length; i++) {
                _tsd(root.children[i]);
            }
            return root;
        }

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
        var z = __WXML_GLOBAL__.ops_set.$gwx_wx1fe8d9a3cb067a75 || [];

        function gz$gwx_wx1fe8d9a3cb067a75_1() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_wx1fe8d9a3cb067a75_1) return __WXML_GLOBAL__.ops_cached.$gwx_wx1fe8d9a3cb067a75_1
            __WXML_GLOBAL__.ops_cached.$gwx_wx1fe8d9a3cb067a75_1 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([3, 'pCancel'])
                Z([3, 'pConfirm'])
                Z([
                    [7],
                    [3, 'isShowPop']
                ])
                Z([3, 'after'])
                Z([
                    [7],
                    [3, 'aidEncrypted']
                ])
                Z([
                    [2, '||'],
                    [
                        [7],
                        [3, 'appId']
                    ],
                    [
                        [7],
                        [3, 'appid']
                    ]
                ])
                Z([3, 'handlerClose'])
                Z([3, 'handlerError'])
                Z([3, 'handlerReady'])
                Z([3, 'handlerVerify'])
                Z([3, 'captcha'])
                Z([
                    [7],
                    [3, 'lang']
                ])
                Z([
                    [7],
                    [3, 'themeColor']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_wx1fe8d9a3cb067a75_1);
            return __WXML_GLOBAL__.ops_cached.$gwx_wx1fe8d9a3cb067a75_1
        }

        function gz$gwx_wx1fe8d9a3cb067a75_2() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_wx1fe8d9a3cb067a75_2) return __WXML_GLOBAL__.ops_cached.$gwx_wx1fe8d9a3cb067a75_2
            __WXML_GLOBAL__.ops_cached.$gwx_wx1fe8d9a3cb067a75_2 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [2, '!'],
                    [
                        [7],
                        [3, 'isShowCaptcha']
                    ]
                ])
                Z([
                    [7],
                    [3, 'isShowCaptcha']
                ])
                Z([3, 'captcha'])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'insStyles']
                    ],
                    [3, 'length']
                ])
                Z([a, [3, 'captcha-body '],
                    [
                        [7],
                        [3, 'animateName']
                    ]
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'dragElCfg']
                    ],
                    [3, 'length']
                ])
                Z([
                    [7],
                    [3, 'dragElCfg']
                ])
                Z([3, 'pos'])
                Z([3, 'onTouchEnd'])
                Z([3, 'onTouchStart'])
                Z([3, 'onTouchMove'])
                Z([a, [3, 'captcha-fg-item '],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'className']
                    ]
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'id']
                ])
                Z([
                    [7],
                    [3, 'index']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'moveCfg']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'item']
                    ],
                    [3, 'slaveId']
                ])
                Z([a, [3, 'background:'],
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
                                [3, 'className']
                            ],
                            [1, 'slider']
                        ],
                        [
                            [7],
                            [3, 'themeRgbaColor']
                        ],
                        [
                            [2, '+'],
                            [
                                [2, '+'],
                                [1, 'url('],
                                [
                                    [6],
                                    [
                                        [7],
                                        [3, 'spriteConfig']
                                    ],
                                    [3, 'url']
                                ]
                            ],
                            [1, ')']
                        ]
                    ],
                    [3, ';box-shadow:'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'boxShadow']
                    ],
                    [3, ';background-size:'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'spriteConfig']
                        ],
                        [3, 'size']
                    ],
                    [3, ';background-position:'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'pos']
                    ],
                    [3, ';width:'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'width']
                    ],
                    [3, 'px;height:'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'height']
                    ],
                    [3, 'px;top:'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'top']
                    ],
                    [3, 'px;left:'],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'left']
                    ],
                    [3, 'px;z-inde:'],
                    [
                        [2, '+'],
                        [
                            [7],
                            [3, 'index']
                        ],
                        [1, 1]
                    ]
                ])
                Z([
                    [2, '==='],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'className']
                    ],
                    [1, 'slider']
                ])
                Z([
                    [6],
                    [
                        [7],
                        [3, 'clickElCfg']
                    ],
                    [3, 'length']
                ])
                Z([
                    [7],
                    [3, 'clickElCfg']
                ])
                Z([3, 'data'])
                Z([3, 'cancelClickEl'])
                Z([3, 'captcha-click-mark'])
                Z(z[13])
                Z([a, z[16][1],
                    [
                        [7],
                        [3, 'themeRgbaColor']
                    ],
                    [3, ';top:'], z[16][14],
                    [3, ';left:'], z[16][16]
                ])
                Z([
                    [2, '==='],
                    [
                        [6],
                        [
                            [7],
                            [3, 'item']
                        ],
                        [3, 'contentType']
                    ],
                    [1, 'number']
                ])
                Z([
                    [7],
                    [3, 'showVerifyBtn']
                ])
            })(__WXML_GLOBAL__.ops_cached.$gwx_wx1fe8d9a3cb067a75_2);
            return __WXML_GLOBAL__.ops_cached.$gwx_wx1fe8d9a3cb067a75_2
        }

        function gz$gwx_wx1fe8d9a3cb067a75_3() {
            if (__WXML_GLOBAL__.ops_cached.$gwx_wx1fe8d9a3cb067a75_3) return __WXML_GLOBAL__.ops_cached.$gwx_wx1fe8d9a3cb067a75_3
            __WXML_GLOBAL__.ops_cached.$gwx_wx1fe8d9a3cb067a75_3 = [];
            (function(z) {
                var a = 11;

                function Z(ops) {
                    z.push(ops)
                }
                Z([
                    [7],
                    [3, 'isShowPop']
                ])
                Z([3, 'after'])
            })(__WXML_GLOBAL__.ops_cached.$gwx_wx1fe8d9a3cb067a75_3);
            return __WXML_GLOBAL__.ops_cached.$gwx_wx1fe8d9a3cb067a75_3
        }
        __WXML_GLOBAL__.ops_set.$gwx_wx1fe8d9a3cb067a75 = z;
        __WXML_GLOBAL__.ops_init.$gwx_wx1fe8d9a3cb067a75 = true;
        var nv_require = function() {
            var nnm = {};
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
        var x = ['./components/index/index.wxml', './components/main/main.wxml', './components/popup/popup.wxml'];
        d_[x[0]] = {}
        var m0 = function(e, s, r, gg) {
            var z = gz$gwx_wx1fe8d9a3cb067a75_1()
            var oB = _mz(z, 'popup', ['bindcancel', 0, 'bindconfirm', 1, 'isShowPop', 1], [], e, s, gg)
            var xC = _n('view')
            _rz(z, xC, 'slot', 3, e, s, gg)
            var oD = _mz(z, 'captcha', ['aidEncrypted', 4, 'appId', 1, 'bind:close', 2, 'bind:error', 3, 'bind:ready', 4, 'bind:verify', 5, 'id', 6, 'lang', 7, 'themeColor', 8], [], e, s, gg)
            _(xC, oD)
            _(oB, xC)
            _(r, oB)
            return r
        }
        e_[x[0]] = {
            f: m0,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        d_[x[1]] = {}
        var m1 = function(e, s, r, gg) {
            var z = gz$gwx_wx1fe8d9a3cb067a75_2()
            var cF = _v()
            _(r, cF)
            if (_oz(z, 0, e, s, gg)) {
                cF.wxVkey = 1
            }
            var hG = _v()
            _(r, hG)
            if (_oz(z, 1, e, s, gg)) {
                hG.wxVkey = 1
                var oH = _n('view')
                _rz(z, oH, 'class', 2, e, s, gg)
                var cI = _v()
                _(oH, cI)
                if (_oz(z, 3, e, s, gg)) {
                    cI.wxVkey = 1
                }
                var lK = _n('view')
                _rz(z, lK, 'class', 4, e, s, gg)
                var aL = _v()
                _(lK, aL)
                if (_oz(z, 5, e, s, gg)) {
                    aL.wxVkey = 1
                    var eN = _v()
                    _(aL, eN)
                    var bO = function(xQ, oP, oR, gg) {
                        var cT = _mz(z, 'view', ['bindtouchend', 8, 'bindtouchstart', 1, 'catchtouchmove', 2, 'class', 3, 'data-id', 4, 'data-index', 5, 'data-move-cfg', 6, 'data-slave-id', 7, 'style', 8], [], xQ, oP, gg)
                        var hU = _v()
                        _(cT, hU)
                        if (_oz(z, 17, xQ, oP, gg)) {
                            hU.wxVkey = 1
                        }
                        hU.wxXCkey = 1
                        _(oR, cT)
                        return oR
                    }
                    eN.wxXCkey = 2
                    _2z(z, 6, bO, e, s, gg, eN, 'item', 'index', 'pos')
                }
                var tM = _v()
                _(lK, tM)
                if (_oz(z, 18, e, s, gg)) {
                    tM.wxVkey = 1
                    var oV = _v()
                    _(tM, oV)
                    var cW = function(lY, oX, aZ, gg) {
                        var e2 = _mz(z, 'view', ['catchtap', 21, 'class', 1, 'data-index', 2, 'style', 3], [], lY, oX, gg)
                        var b3 = _v()
                        _(e2, b3)
                        if (_oz(z, 25, lY, oX, gg)) {
                            b3.wxVkey = 1
                        }
                        b3.wxXCkey = 1
                        _(aZ, e2)
                        return aZ
                    }
                    oV.wxXCkey = 2
                    _2z(z, 19, cW, e, s, gg, oV, 'item', 'index', 'data')
                }
                aL.wxXCkey = 1
                tM.wxXCkey = 1
                _(oH, lK)
                var oJ = _v()
                _(oH, oJ)
                if (_oz(z, 26, e, s, gg)) {
                    oJ.wxVkey = 1
                }
                cI.wxXCkey = 1
                oJ.wxXCkey = 1
                _(hG, oH)
            }
            cF.wxXCkey = 1
            hG.wxXCkey = 1
            return r
        }
        e_[x[1]] = {
            f: m1,
            j: [],
            i: [],
            ti: [],
            ic: []
        }
        d_[x[2]] = {}
        var m2 = function(e, s, r, gg) {
            var z = gz$gwx_wx1fe8d9a3cb067a75_3()
            var x5 = _v()
            _(r, x5)
            if (_oz(z, 0, e, s, gg)) {
                x5.wxVkey = 1
                var o6 = _n('slot')
                _rz(z, o6, 'name', 1, e, s, gg)
                _(x5, o6)
            }
            x5.wxXCkey = 1
            return r
        }
        e_[x[2]] = {
            f: m2,
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
                root.children = []
                var main = e_[path].f
                if (typeof global === "undefined") global = {};
                global.f = $gdc(f_[path], "", 1);
                try {
                    main(env, {}, root, global);
                    _tsd(root)
                } catch (err) {
                    console.log(err)
                }
                return root;
            }
        }
    }

    global.__wxAppCode__['plugin-private://wx1fe8d9a3cb067a75/components/index/index.json'] = {
        "component": true,
        "usingComponents": {
            "popup": "../popup/popup",
            "captcha": "../main/main"
        }
    };
    if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wx1fe8d9a3cb067a75/components/index/index.wxml'] = [$gwx_wx1fe8d9a3cb067a75, './components/index/index.wxml'];
    else global.__wxAppCode__['plugin-private://wx1fe8d9a3cb067a75/components/index/index.wxml'] = $gwx_wx1fe8d9a3cb067a75('./components/index/index.wxml');
    global.__wxAppCode__['plugin-private://wx1fe8d9a3cb067a75/components/main/main.json'] = {
        "component": true,
        "usingComponents": {}
    };
    if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wx1fe8d9a3cb067a75/components/main/main.wxml'] = [$gwx_wx1fe8d9a3cb067a75, './components/main/main.wxml'];
    else global.__wxAppCode__['plugin-private://wx1fe8d9a3cb067a75/components/main/main.wxml'] = $gwx_wx1fe8d9a3cb067a75('./components/main/main.wxml');
    global.__wxAppCode__['plugin-private://wx1fe8d9a3cb067a75/components/popup/popup.json'] = {
        "component": true,
        "usingComponents": {}
    };
    if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wx1fe8d9a3cb067a75/components/popup/popup.wxml'] = [$gwx_wx1fe8d9a3cb067a75, './components/popup/popup.wxml'];
    else global.__wxAppCode__['plugin-private://wx1fe8d9a3cb067a75/components/popup/popup.wxml'] = $gwx_wx1fe8d9a3cb067a75('./components/popup/popup.wxml');
    global.__wxAppCode__['plugin-private://wx1fe8d9a3cb067a75/plugin.json'] = {
        "publicComponents": {
            "t-captcha": "components/index/index"
        },
        "pages": {},
        "main": "index.js"
    };
    if (__vd_version_info__.delayedGwx) global.__wxAppCode__['plugin-private://wx1fe8d9a3cb067a75/plugin.wxml'] = [$gwx_wx1fe8d9a3cb067a75, './plugin.wxml'];
    else global.__wxAppCode__['plugin-private://wx1fe8d9a3cb067a75/plugin.wxml'] = $gwx_wx1fe8d9a3cb067a75('./plugin.wxml');

    define("@babel/runtime/helpers/arrayLikeToArray.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
        "use strict";

        function _arrayLikeToArray(r, a) {
            (null == a || a > r.length) && (a = r.length);
            for (var e = 0, n = new Array(a); e < a; e++) n[e] = r[e];
            return n
        }
        module.exports = _arrayLikeToArray;
    });
    define("@babel/runtime/helpers/arrayWithoutHoles.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
        "use strict";
        var arrayLikeToArray = require("./arrayLikeToArray");

        function _arrayWithoutHoles(r) {
            if (Array.isArray(r)) return arrayLikeToArray(r)
        }
        module.exports = _arrayWithoutHoles;
    });
    define("@babel/runtime/helpers/classCallCheck.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
        "use strict";

        function _classCallCheck(a, l) {
            if (!(a instanceof l)) throw new TypeError("Cannot call a class as a function")
        }
        module.exports = _classCallCheck;
    });
    define("@babel/runtime/helpers/createClass.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
        "use strict";
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
    define("@babel/runtime/helpers/defineProperty.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
        "use strict";
        var toPropertyKey = require("./toPropertyKey");

        function _defineProperty(e, r, t) {
            return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[r] = t, e
        }
        module.exports = _defineProperty;
    });
    define("@babel/runtime/helpers/iterableToArray.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
        "use strict";

        function _iterableToArray(r) {
            if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r)
        }
        module.exports = _iterableToArray;
    });
    define("@babel/runtime/helpers/nonIterableSpread.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
        "use strict";

        function _nonIterableSpread() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        module.exports = _nonIterableSpread;
    });
    define("@babel/runtime/helpers/objectSpread2.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
        "use strict";
        var defineProperty = require("./defineProperty");

        function ownKeys(e, r) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                r && (o = o.filter((function(r) {
                    return Object.getOwnPropertyDescriptor(e, r).enumerable
                }))), t.push.apply(t, o)
            }
            return t
        }

        function _objectSpread2(e) {
            for (var r = 1; r < arguments.length; r++) {
                var t = null != arguments[r] ? arguments[r] : {};
                r % 2 ? ownKeys(Object(t), !0).forEach((function(r) {
                    defineProperty(e, r, t[r])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
                }))
            }
            return e
        }
        module.exports = _objectSpread2;
    });
    define("@babel/runtime/helpers/toConsumableArray.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
        "use strict";
        var arrayWithoutHoles = require("./arrayWithoutHoles"),
            iterableToArray = require("./iterableToArray"),
            unsupportedIterableToArray = require("./unsupportedIterableToArray"),
            nonIterableSpread = require("./nonIterableSpread");

        function _toConsumableArray(r) {
            return arrayWithoutHoles(r) || iterableToArray(r) || unsupportedIterableToArray(r) || nonIterableSpread()
        }
        module.exports = _toConsumableArray;
    });
    define("@babel/runtime/helpers/toPrimitive.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
        "use strict";
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
    define("@babel/runtime/helpers/toPropertyKey.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
        "use strict";
        var _typeof = require("./typeof"),
            toPrimitive = require("./toPrimitive");

        function _toPropertyKey(r) {
            var t = toPrimitive(r, "string");
            return "symbol" === _typeof(t) ? t : String(t)
        }
        module.exports = _toPropertyKey;
    });
    define("@babel/runtime/helpers/typeof.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
        "use strict";

        function _typeof(o) {
            return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
                return typeof o
            } : function(o) {
                return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o
            }, _typeof(o)
        }
        module.exports = _typeof;
    });
    define("@babel/runtime/helpers/unsupportedIterableToArray.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
        "use strict";
        var arrayLikeToArray = require("./arrayLikeToArray");

        function _unsupportedIterableToArray(r, e) {
            if (r) {
                if ("string" == typeof r) return arrayLikeToArray(r, e);
                var t = Object.prototype.toString.call(r).slice(8, -1);
                return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? arrayLikeToArray(r, e) : void 0
            }
        }
        module.exports = _unsupportedIterableToArray;
    });
    define("index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
        "use strict";
        "use strict";
        module.exports = {};
    });
    define("utils/api.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
        "use strict";
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.VERIFY_URL = exports.REFRESH_URL = exports.PREHANDLE_URL = void 0;
        var e = require("./constant"),
            _ = "".concat(e.API_DOMAIN, "/cap_union_prehandle");
        exports.PREHANDLE_URL = _;
        var o = "".concat(e.API_DOMAIN, "/cap_union_new_getsig");
        exports.REFRESH_URL = o;
        var r = "".concat(e.API_DOMAIN, "/cap_union_new_verify");
        exports.VERIFY_URL = r;
    });
    define("utils/constant.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
        "use strict";
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.API_DOMAIN = void 0;
        exports.API_DOMAIN = "https://turing.captcha.qcloud.com";
    });
    define("utils/error-handle.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
        "use strict";
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.ERROR_TYPE = exports.ERROR_CODE = void 0, exports.getErrorRes = function(R, r) {
            var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            return {
                ret: 0,
                randstr: o(),
                ticket: E(R, r || "", e),
                errorCode: t[R],
                errorMessage: R.toLowerCase()
            }
        }, exports.getErrorTicket = E, exports.getRandStr = o;
        var R, r = require("../@babel/runtime/helpers/defineProperty"),
            e = {
                GET_CAPTCHA_CONFIG_REQUEST_ERROR: "GET_CAPTCHA_CONFIG_REQUEST_ERROR",
                REFRESH_ERROR: "REFRESH_ERROR",
                VERIFY_ERROR: "VERIFY_ERROR"
            };
        exports.ERROR_TYPE = e;
        var t = (r(R = {}, e.GET_CAPTCHA_CONFIG_REQUEST_ERROR, 1006), r(R, e.REFRESH_ERROR, 1012), r(R, e.VERIFY_ERROR, 1013), R);

        function E(R, r) {
            var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            return "trerror_".concat(t[R], "_").concat(r, "_").concat(Math.floor((new Date).getTime() / 1e3)).concat(e ? "_".concat(e) : "")
        }

        function o() {
            return "@".concat(Math.random().toString(36).substring(2))
        }
        exports.ERROR_CODE = t;
    });
    define("utils/img.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
        "use strict";
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.loadImg = void 0;
        var e = {};
        exports.loadImg = function o(s) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                c = s.src,
                i = s.onSuccess,
                n = s.onFail,
                r = s.maxTimes,
                a = void 0 === r ? 3 : r;
            e[c] ? i && i(e[c]) : wx.getImageInfo({
                src: c,
                success: function(o) {
                    e[c] = o, i && i(o)
                },
                fail: function() {
                    (t += 1) >= a ? n && n() : o(s, t)
                }
            })
        };
    });
    define("utils/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
        "use strict";
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.colorRgba = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                a = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/,
                n = "".concat(t.startsWith("#") ? "" : "#").concat(t);
            if (n = n.toLowerCase(), a.test(n)) {
                4 === n.length && (n = "#".padEnd(7, n[1]));
                for (var r = [], o = 1; o < 7; o += 2) r.push(parseInt("0x" + n.slice(o, o + 2)));
                return "rgba(".concat(r.join(","), ",").concat(e, ")")
            }
            return "rgba(26,121,255,".concat(e, ")")
        }, exports.setInRange = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                a = Math.max(t, e[0] || 0);
            return Math.min(a, e[1] || 0)
        };
    });
    define("utils/language.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
        "use strict";
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.LanguageChooser = exports.KEYS_MAP = exports.KEYS = exports.ALL_LANGUAGE = void 0, exports.langTransform = a, exports.languageChooser = void 0;
        var A = require("../@babel/runtime/helpers/classCallCheck"),
            e = require("../@babel/runtime/helpers/createClass"),
            E = {
                FRAME_VERIFICATION: "FRAME_VERIFICATION",
                FRAME_BACK: "FRAME_BACK",
                FRAME_SIMPLE: "FRAME_SIMPLE",
                FRAME_STANDARD: "FRAME_STANDARD",
                FRAME_OK: "FRAME_OK",
                ARIA_VERIFICATION_SIMPLE: "ARIA_VERIFICATION_SIMPLE",
                ARIA_VERIFICATION_STANDARD: "ARIA_VERIFICATION_STANDARD",
                ARIA_CLOSE: "ARIA_CLOSE",
                ARIA_STANDARD: "ARIA_STANDARD",
                ARIA_SIMPLE: "ARIA_SIMPLE",
                ARIA_FEEDBACK: "ARIA_FEEDBACK",
                ARIA_REFRESH: "ARIA_REFRESH",
                NOTE_IMG_LOAD_FAILED: "NOTE_IMG_LOAD_FAILED",
                NOTE_VERIFY_SUCCESS: "NOTE_VERIFY_SUCCESS",
                NOTE_VERIFY_TIMEOUT: "NOTE_VERIFY_TIMEOUT",
                NOTE_VERIFY_FAILED: "NOTE_VERIFY_FAILED",
                NOTE_VERIFY_ERROR: "NOTE_VERIFY_ERROR",
                NOTE_VERIFY_FAILED_MAX: "NOTE_VERIFY_FAILED_MAX",
                NOTE_VERIFY_DEFAULT: "NOTE_VERIFY_DEFAULT",
                NOTE_APPID_REGION_WRONG: "NOTE_APPID_REGION_WRONG",
                AI_WATER_MARK: "AI_WATER_MARK"
            };
        exports.KEYS_MAP = E;
        var _ = [E.FRAME_VERIFICATION, E.FRAME_BACK, E.FRAME_SIMPLE, E.FRAME_STANDARD, E.FRAME_OK, E.ARIA_VERIFICATION_SIMPLE, E.ARIA_VERIFICATION_STANDARD, E.ARIA_CLOSE, E.ARIA_STANDARD, E.ARIA_SIMPLE, E.ARIA_FEEDBACK, E.ARIA_REFRESH, E.NOTE_IMG_LOAD_FAILED, E.NOTE_VERIFY_SUCCESS, E.NOTE_VERIFY_TIMEOUT, E.NOTE_VERIFY_FAILED, E.NOTE_VERIFY_ERROR, E.NOTE_VERIFY_FAILED_MAX, E.NOTE_VERIFY_DEFAULT, E.NOTE_APPID_REGION_WRONG, E.AI_WATER_MARK];
        exports.KEYS = _;
        var I = ["安全验证", "返回", "我不会", "常规验证", "确定", "无障碍验证", "常规验证", "关闭验证", "切换为常规验证方式", "我不会，换一种验证方式", "问题反馈", "刷新验证", "图片加载失败，请点击刷新", "验证成功！", "网络超时，请重试", "验证错误，请重试", "您的操作过于频繁，请稍后再试", "这题有点难呢，已为您更换题目", "网络恍惚了一下(+)，再试一次吧", "appid所属地域与实际使用地域不符，请联系验证码团队处理", "AI生成背景"],
            R = ["安全驗證", "返回", "無障礙方式", "常規驗證", "確定", "無障礙驗證", "常規驗證", "關閉驗證", "切換為常規驗證方式", "我不會，換一種驗證方式", "反映意見", "刷新驗證", "圖片載入失敗，請點擊重新整理", "驗證成功！", "網絡逾時，請重試", "驗證錯誤，請重試", "您的操作過於頻繁，請稍後再試", "這題有點難，已為你更換題目", "網路中斷了一下(+)，再試一次吧", "appid所屬地域與實際使用地域不符，請聯系驗證碼團隊處理", "AI生成背景"],
            t = {
                zh: I,
                "zh-cn": I,
                "zh-hk": R,
                "zh-tw": R,
                en: ["Verification", "Back", "Simple mode", "Standard mode", "OK", "Simple mode", "Standard mode", "Quit verification", "Switch to Standard mode", "Too difficult? Switch to Simple mode", "Feedback", "Try a new captcha", "Image loading failed. Click to refresh", "Verification passed", "Network timed out. Please try again.", "Verification failed. Try again.", "Operation too often. Please retry later.", "Too hard? Try a new one", "Network error (+). Please try again.", "The AppID does not match the actual location. Please contact the Captcha team.", "Generated by AI"]
            };

        function a() {
            var A = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "zh-cn",
                e = A.toLowerCase().replace(/_/, "-");
            return t[e] ? e : e.split("-")[0] || e
        }
        exports.ALL_LANGUAGE = t;
        var r = function() {
            function E(e, _) {
                A(this, E), this.keys = e, this.content = _, this.currentLanguage = "zh-cn", this.curLanguagePack = {}
            }
            return e(E, [{
                key: "init",
                value: function(A) {
                    var e = a(A);
                    this.currentLanguage = e;
                    for (var E = this.content[e], _ = 0; _ < this.keys.length; _++) this.curLanguagePack[this.keys[_]] = E[_]
                }
            }, {
                key: "getWord",
                value: function(A) {
                    var e = this.curLanguagePack[A];
                    if (!e)
                        for (var E = 0; E < this.keys.length; E++)
                            if (this.keys[E] === A) {
                                e = this.content.en[E];
                                break
                            }
                    return Array.isArray(e) ? e[Math.floor(Math.random() * e.length)] : e
                }
            }]), E
        }();
        exports.LanguageChooser = r;
        var o = new r(_, t);
        exports.languageChooser = o;
    });
    global.__wxAppCurrentFile__ = 'plugin-private://wx1fe8d9a3cb067a75/components/index/index.js';
    global.__wxRouteBegin = true;
    define("components/index/index.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
        "use strict";
        "use strict";
        Component({
            behaviors: ["wx://component-export"],
            export: function() {
                return {
                    show: this.show.bind(this),
                    destroy: this.destroy.bind(this),
                    refresh: this.refresh.bind(this)
                }
            },
            properties: {
                aidEncrypted: {
                    type: String,
                    value: ""
                },
                appid: {
                    type: String,
                    value: ""
                },
                appId: {
                    type: String,
                    value: ""
                },
                lang: {
                    type: String,
                    value: "zh-CN"
                },
                themeColor: {
                    type: String,
                    value: "#1A79FF"
                }
            },
            data: {
                isShowPop: !1
            },
            methods: {
                show: function() {
                    var t = this.selectComponent("#captcha");
                    this.setData({
                        isShowPop: !0
                    }, (function() {
                        t.show()
                    }))
                },
                destroy: function() {
                    var t = this.selectComponent("#captcha");
                    this.setData({
                        isShowPop: !1
                    }), t.destroy()
                },
                refresh: function() {
                    this.selectComponent("#captcha").refresh()
                },
                handlerVerify: function(t) {
                    this.triggerEvent("verify", t.detail)
                },
                handlerReady: function() {
                    this.triggerEvent("ready", {})
                },
                handlerClose: function(t) {
                    this.setData({
                        isShowPop: !1
                    }), this.triggerEvent("close", t.detail)
                },
                handlerError: function(t) {
                    this.triggerEvent("error", t.detail)
                }
            }
        });
    });
    require("components/index/index.js");
    global.__wxAppCurrentFile__ = 'plugin-private://wx1fe8d9a3cb067a75/components/main/main.js';
    global.__wxRouteBegin = true;
    define("components/main/main.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
        "use strict";
        "use strict";
        var t = require("../../@babel/runtime/helpers/toConsumableArray"),
            e = require("../../@babel/runtime/helpers/objectSpread2"),
            r = require("../../utils/constant"),
            i = require("../../utils/api"),
            a = require("../../utils/img"),
            s = require("../../utils/index"),
            n = require("../../utils/error-handle"),
            o = require("../../utils/language"),
            c = {
                sess: "",
                sid: "",
                prehandleHttpErrorCount: 0,
                refreshHttpErrorCounter: 0,
                verifyHttpErrorCounter: 0,
                areaBoundary: [],
                fgBindingList: [],
                initDragCfg: [],
                startDragPos: [],
                currDragPos: [],
                currentRequest: null
            };
        Component({
            behaviors: ["wx://component-export"],
            export: function() {
                return {
                    show: this.show.bind(this),
                    refresh: this.refresh.bind(this),
                    destroy: this.destroy.bind(this)
                }
            },
            properties: {
                appId: {
                    type: String,
                    value: ""
                },
                appid: {
                    type: String,
                    value: ""
                },
                aidEncrypted: {
                    type: String,
                    value: ""
                },
                lang: {
                    type: String,
                    value: "zh-CN"
                },
                themeColor: {
                    type: String,
                    value: "#1A79FF",
                    observer: function(t) {
                        this.setData({
                            themeRgbaColor: (0, s.colorRgba)(t)
                        })
                    }
                }
            },
            languageChooser: null,
            data: {
                aiStyle: {
                    display: "none",
                    bottom: "0px"
                },
                aiWaterMark: "",
                isAiTheme: !1,
                themeRgbaColor: "",
                title: "",
                btnVerifyText: "",
                requesting: !1,
                isShowCaptcha: !1,
                showLoadingCover: !1,
                showSuccessCover: !1,
                statusSuccessText: "",
                showLoadFailCover: !1,
                statusLoadFailText: "",
                showVerifyErrorCover: !1,
                verifyErrorText: "",
                sid: "",
                statusFailText: "",
                animateName: "",
                instruction: "",
                imgRate: 1,
                spriteConfig: {
                    url: "",
                    width: 0,
                    height: 0,
                    size: ""
                },
                bgConfig: {
                    url: "",
                    width: 0,
                    height: 0,
                    size_2d: []
                },
                bgStyles: {
                    url: "",
                    height: 0,
                    pos: "",
                    size: ""
                },
                insStyles: [],
                showVerifyBtn: !1,
                clickCfg: null,
                clickElCfg: [],
                dragElCfg: []
            },
            methods: {
                triggerVerify: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.triggerEvent("verify", t)
                },
                triggerError: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        errMsg: ""
                    };
                    this.triggerEvent("error", t)
                },
                getElRect: function(t, e) {
                    this.createSelectorQuery().select(t).boundingClientRect((function(t) {
                        e(t)
                    })).exec()
                },
                getEventPos: function(t) {
                    var e = t.touches[0];
                    return [e.clientX, e.clientY]
                },
                prehandleHttpError: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {};
                    c.prehandleHttpErrorCount += 1, c.prehandleHttpErrorCount < 3 ? this.getPrehandleData(t) : this.verifySuccess((0, n.getErrorRes)(n.ERROR_TYPE.GET_CAPTCHA_CONFIG_REQUEST_ERROR, this.data.appId || this.data.appid))
                },
                resetRequesting: function() {
                    this.setData({
                        requesting: !1
                    })
                },
                getPrehandleData: function() {
                    var t = this,
                        r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {};
                    c.currentRequest && "function" == typeof c.currentRequest.abort && c.currentRequest.abort(), this.data.requesting || (this.setData({
                        requesting: !0
                    }), c.currentRequest = wx.request({
                        timeout: 15e3,
                        url: i.PREHANDLE_URL,
                        data: {
                            lang: (0, o.langTransform)(this.data.lang),
                            userLanguage: (0, o.langTransform)(this.data.lang),
                            customize_aid: this.data.appId || this.data.appid,
                            aid: this.data.appId || this.data.appid,
                            aidEncrypted: this.data.aidEncrypted,
                            pluginVersion: "3"
                        },
                        success: function(i) {
                            if (t.setData({
                                    requesting: !1
                                }), 200 === i.statusCode) {
                                c.prehandleHttpErrorCount = 0;
                                var a = i.data;
                                if (a) try {
                                    var s = "string" == typeof a ? JSON.parse(a.slice(1, -1)) : a,
                                        n = s.subcapclass,
                                        o = {
                                            isAiTheme: !1,
                                            isShowCaptcha: !0
                                        };
                                    n >= 2e3 && n <= 5e3 && (o.isAiTheme = !0), t.setData(e({}, o)), r && r(s)
                                } catch (e) {
                                    t.triggerError({
                                        errMsg: "请升级插件版本2.0,并且使用小程序类型的CaptchaAppId"
                                    }), t.destroy()
                                }
                            } else t.prehandleHttpError(r)
                        },
                        fail: function() {
                            t.setData({
                                requesting: !1
                            }), t.prehandleHttpError(r)
                        }
                    }))
                },
                clearInstruction: function() {
                    this.setData({
                        instruction: ""
                    })
                },
                clearInsStyles: function() {
                    this.setData({
                        insStyles: []
                    })
                },
                clearBg: function() {
                    this.setData({
                        bgConfig: {
                            url: "",
                            width: 0,
                            height: 0,
                            size_2d: []
                        },
                        bgStyles: {
                            url: "",
                            height: 0,
                            pos: "",
                            size: ""
                        }
                    })
                },
                clearEl: function() {
                    this.setData({
                        clickCfg: null,
                        clickElCfg: [],
                        dragElCfg: []
                    })
                },
                clearCover: function() {
                    this.setData({
                        showLoadingCover: !1,
                        showSuccessCover: !1,
                        showLoadFailCover: !1,
                        showVerifyErrorCover: !1
                    })
                },
                clearElements: function() {
                    this.setData({
                        showVerifyBtn: !1,
                        title: ""
                    }), this.clearInstruction(), this.clearBg(), this.clearCover(), this.clearEl(), this.clearInsStyles()
                },
                initConfig: function(t, i) {
                    var s = this,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {};
                    c.sess = t.sess, t.sid && (c.sid = t.sid);
                    var h = i.sprite_url,
                        u = i.bg_elem_cfg,
                        g = void 0 === u ? {} : u,
                        l = i.verify_trigger_cfg,
                        f = void 0 === l ? {} : l,
                        d = i.lang,
                        p = g.img_url,
                        E = g.size_2d,
                        v = g.click_cfg,
                        C = {
                            showVerifyBtn: !!f.verify_icon,
                            clickCfg: v || null
                        };
                    this.languageChooser = this.languageChooser || o.languageChooser, this.languageChooser.init(d), this.setData({
                        title: this.languageChooser.getWord(o.KEYS_MAP.FRAME_VERIFICATION),
                        btnVerifyText: this.languageChooser.getWord(o.KEYS_MAP.FRAME_OK),
                        statusSuccessText: this.languageChooser.getWord(o.KEYS_MAP.NOTE_VERIFY_SUCCESS),
                        statusLoadFailText: this.languageChooser.getWord(o.KEYS_MAP.NOTE_IMG_LOAD_FAILED),
                        aiWaterMark: this.languageChooser.getWord(o.KEYS_MAP.AI_WATER_MARK)
                    }), this.getElRect("#bgImg", (function(t) {
                        var i = t.width / E[0];
                        c.areaBoundary = [E[0] * i, E[1] * i], (0, a.loadImg)({
                            src: "".concat(r.API_DOMAIN).concat(p),
                            onSuccess: function(t) {
                                var o = {
                                    url: "".concat(r.API_DOMAIN).concat(p),
                                    width: t.width,
                                    height: t.height,
                                    size_2d: E
                                };
                                h ? (0, a.loadImg)({
                                    src: "".concat(r.API_DOMAIN).concat(h),
                                    onSuccess: function(t) {
                                        s.setData(e({
                                            bgConfig: o,
                                            imgRate: i,
                                            spriteConfig: {
                                                url: "".concat(r.API_DOMAIN).concat(h),
                                                width: t.width,
                                                height: t.height,
                                                size: "".concat(t.width * i, "px ").concat(t.height * i, "px")
                                            }
                                        }, C), n)
                                    }
                                }) : s.setData(e({
                                    imgRate: i,
                                    bgConfig: o
                                }, C), n)
                            }
                        })
                    }))
                },
                initElments: function(t, e) {
                    var r = this;
                    this.initConfig(t, e, (function() {
                        r.initInstruction(e), r.initBg(e, e.bg_elem_cfg), r.initDragEl(e)
                    }))
                },
                initInstruction: function(t) {
                    var e = t.instruction,
                        r = t.ins_elem_cfg;
                    if (this.setData({
                            instruction: e
                        }), r && r.length) {
                        var i = this.data.imgRate;
                        this.setData({
                            insStyles: r.map((function(t) {
                                return {
                                    width: "".concat(t.size_2d[0] * i, "px"),
                                    height: "".concat(t.size_2d[1] * i, "px"),
                                    pos: "".concat(-t.sprite_pos[0] * i, "px ").concat(-t.sprite_pos[1] * i, "px")
                                }
                            }))
                        })
                    }
                },
                initBg: function(t, e) {
                    var r = e.size_2d,
                        i = e.sprite_pos,
                        a = this.data,
                        s = a.bgConfig,
                        n = a.imgRate,
                        o = a.spriteConfig,
                        c = !!t.fg_elem_list && (t.fg_elem_list && t.fg_elem_list.find((function(t) {
                            return "slider" === t.type
                        }))),
                        h = r[1] * n || 230,
                        u = c ? h - 390 * n : 0;
                    this.data.isAiTheme ? this.setData({
                        aiStyle: {
                            display: "block",
                            bottom: "".concat(u, "px")
                        }
                    }) : this.setData({
                        aiStyle: {
                            display: "none",
                            bottom: "0px"
                        }
                    }), s.url ? this.setData({
                        bgStyles: {
                            url: s.url,
                            height: "".concat(h, "px"),
                            pos: "auto",
                            size: "".concat(s.width * n, "px ").concat(s.height * n, "px")
                        }
                    }) : o.url && i && this.setData({
                        bgStyles: {
                            url: o.url,
                            height: "".concat(h, "px"),
                            pos: "".concat(-i[0] * n, "px ").concat(-i[1] * n, "px"),
                            size: "".concat(s.width * n, "px ").concat(s.height * n, "px")
                        }
                    })
                },
                initDragEl: function(t) {
                    var e = this;
                    if (t.fg_elem_list && t.fg_elem_list.length) {
                        var r = t.fg_elem_list,
                            i = t.fg_binding_list,
                            a = void 0 === i ? [] : i;
                        c.fgBindingList = a || [];
                        var n = this.data.imgRate,
                            o = r.map((function(t) {
                                var r = a.filter((function(e) {
                                    return e.master === t.id
                                }))[0];
                                return {
                                    id: t.id,
                                    className: t.type || "",
                                    boxShadow: "slider" === t.type ? "0 0 ".concat(10 * n, "px ").concat(n, "px ").concat((0, s.colorRgba)(e.data.themeColor, .5)) : "none",
                                    slaveId: r ? r.slave : "",
                                    moveCfg: t.move_cfg,
                                    width: t.size_2d[0] * n,
                                    height: t.size_2d[1] * n,
                                    left: t.init_pos[0] * n,
                                    top: t.init_pos[1] * n,
                                    pos: "".concat(-t.sprite_pos[0] * n, "px ").concat(-t.sprite_pos[1] * n, "px")
                                }
                            }));
                        c.initDragCfg = JSON.parse(JSON.stringify(o)), this.setData({
                            dragElCfg: o
                        })
                    }
                },
                updateDragPos: function(t, e, r) {
                    var i = this.data.dragElCfg,
                        a = [t];
                    r && c.initDragCfg.forEach((function(t, e) {
                        t.id === r && a.push(e)
                    })), a.forEach((function(t) {
                        var r = i[t],
                            a = c.initDragCfg[t],
                            n = a.moveCfg.move_factor || [1, 1];
                        r.left = (0, s.setInRange)(a.left + (e[0] - c.startDragPos[0]) * n[0], [0, c.areaBoundary[0] - a.width]), r.top = (0, s.setInRange)(a.top + (e[1] - c.startDragPos[1]) * n[1], [0, c.areaBoundary[1] - a.height]), i[t] = r
                    })), this.setData({
                        dragElCfg: i
                    })
                },
                onTouchStart: function(t) {
                    var e = t.currentTarget.dataset.moveCfg;
                    !this.data.requesting && e && (c.startDragPos = this.getEventPos(t))
                },
                onTouchMove: function(t) {
                    var e = t.currentTarget.dataset,
                        r = e.moveCfg,
                        i = e.index,
                        a = e.slaveId;
                    !this.data.requesting && r && (c.currDragPos = this.getEventPos(t), this.updateDragPos(i, this.getEventPos(t), a))
                },
                onTouchEnd: function(t) {
                    var e = this,
                        r = t.currentTarget.dataset.moveCfg;
                    if (!this.data.requesting && r) {
                        c.startDragPos = c.currDragPos;
                        var i = [];
                        this.data.dragElCfg.forEach((function(t) {
                            t.moveCfg && t.moveCfg.data_type && t.moveCfg.data_type.length && t.moveCfg.data_type.forEach((function(r) {
                                var a = "";
                                "DynAnswerType_POS" === r && (a = "".concat(Math.floor(t.left / e.data.imgRate), ",").concat(Math.floor(t.top / e.data.imgRate))), "DynAnswerType_CENTER_POS" === r && (a = "".concat(Math.floor((t.left + t.width / 2) / e.data.imgRate), ",").concat(Math.floor((t.top + t.height / 2) / e.data.imgRate))), i.push({
                                    elem_id: t.id,
                                    type: r,
                                    data: a
                                })
                            }))
                        })), this.verify({
                            sess: c.sess,
                            ans: JSON.stringify(i)
                        })
                    }
                },
                handleBgClick: function(e) {
                    var r = this,
                        i = this.data,
                        a = i.clickCfg,
                        s = i.clickElCfg,
                        n = i.bgConfig,
                        o = a ? a.data_type : "";
                    a && o && this.getElRect("#bgImg", (function(i) {
                        var c = s.length,
                            h = r.getEventPos(e),
                            u = h[0] - i.left,
                            g = h[1] - i.top;
                        o.forEach((function(e) {
                            if ("DynAnswerType_POS" === e) {
                                var o;
                                "inc_number" === a.mark_style ? o = c + 1 : "icon" === a.mark_style || (o = void 0);
                                var h = g / i.height,
                                    l = u / i.width,
                                    f = {
                                        top: "".concat(100 * h, "%"),
                                        left: "".concat(100 * l, "%"),
                                        contentType: "number",
                                        id: c + 1,
                                        content: o,
                                        type: e,
                                        data: "".concat((n.size_2d[0] * l).toFixed(0), ",").concat((n.size_2d[1] * h).toFixed(0))
                                    };
                                r.setData({
                                    clickElCfg: [].concat(t(s), [f])
                                })
                            }
                        }))
                    }))
                },
                cancelClickEl: function(t) {
                    var e = t.currentTarget.dataset.index,
                        r = 0 === e ? [] : this.data.clickElCfg.slice(0, e);
                    this.setData({
                        clickElCfg: r
                    })
                },
                initFromPrehandle: function(t) {
                    var e = this;
                    this.getPrehandleData((function(r) {
                        t && t(), e.clearElements();
                        var i = r.data.dyn_show_info;
                        e.initElments(r, i)
                    }))
                },
                verifySuccess: function(t) {
                    var e = this,
                        r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = t.ticket,
                        a = t.randstr;
                    r && this.setData({
                        showSuccessCover: !0
                    }), setTimeout((function() {
                        e.triggerVerify({
                            ret: 0,
                            ticket: i,
                            randstr: a
                        }), e.destroy()
                    }), 600)
                },
                verifyFail: function(t) {
                    var e = this,
                        r = t.errorCode,
                        i = t.ticket,
                        a = t.randstr;
                    this.setData({
                        animateName: "shake",
                        statusFailText: this.languageChooser.getWord(o.KEYS_MAP.NOTE_VERIFY_FAILED)
                    }), setTimeout((function() {
                        e.setData({
                            animateName: "",
                            statusFailText: "",
                            clickElCfg: [],
                            dragElCfg: JSON.parse(JSON.stringify(c.initDragCfg))
                        }), e.triggerVerify({
                            ret: r,
                            ticket: i,
                            randstr: a
                        })
                    }), 1e3)
                },
                verifyFailRefresh: function(t) {
                    var e = this,
                        r = t.errorCode,
                        i = t.ticket,
                        a = t.randstr;
                    this.setData({
                        animateName: "shake",
                        statusFailText: this.languageChooser.getWord(o.KEYS_MAP.NOTE_VERIFY_FAILED_MAX)
                    }), setTimeout((function() {
                        e.setData({
                            animateName: "",
                            statusFailText: ""
                        }, e.refresh), e.triggerVerify({
                            ret: r,
                            ticket: i,
                            randstr: a
                        })
                    }), 1e3)
                },
                verifyError: function(t) {
                    var e = this,
                        r = t.errorCode,
                        i = t.ticket,
                        a = t.randstr,
                        s = "12" === t.errorCode ? o.KEYS_MAP.NOTE_VERIFY_ERROR : "52" === t.errorCode ? o.KEYS_MAP.NOTE_APPID_REGION_WRONG : o.KEYS_MAP.NOTE_VERIFY_DEFAULT;
                    this.setData({
                        showVerifyErrorCover: !0,
                        verifyErrorText: this.languageChooser.getWord(s),
                        sid: c.sid || ""
                    }), setTimeout((function() {
                        e.triggerVerify({
                            ret: r,
                            ticket: i,
                            randstr: a
                        }), e.refresh()
                    }), 1e3)
                },
                verifyTimeout: function(t) {
                    var e = t.errorCode,
                        r = t.ticket,
                        i = t.randstr;
                    this.triggerVerify({
                        ret: e,
                        ticket: r,
                        randstr: i
                    }), this.initFromPrehandle()
                },
                verifyHttpError: function() {
                    var t = this;
                    c.verifyHttpErrorCounter += 1, c.verifyHttpErrorCounter < 3 ? (this.setData({
                        animateName: "shake",
                        statusFailText: this.languageChooser.getWord(o.KEYS_MAP.NOTE_VERIFY_TIMEOUT)
                    }), setTimeout((function() {
                        t.setData({
                            animateName: "",
                            statusFailText: ""
                        }, t.refresh)
                    }), 1e3)) : this.verifySuccess((0, n.getErrorRes)(n.ERROR_TYPE.VERIFY_ERROR, this.data.appId || this.data.appid))
                },
                verify: function(t) {
                    var e = this;
                    if (!this.data.requesting && this.data.isShowCaptcha) {
                        this.setData({
                            requesting: !0
                        });
                        var r = {
                            0: function(t) {
                                return e.verifySuccess(t, !0)
                            },
                            9: function(t) {
                                return e.verifyFailRefresh(t)
                            },
                            12: function(t) {
                                return e.verifyError(t)
                            },
                            20: function(t) {
                                return e.verifyTimeout(t)
                            },
                            50: function(t) {
                                return e.verifyFail(t)
                            },
                            52: function(t) {
                                return e.verifyError(t)
                            },
                            206: function(t) {
                                return e.verifyTimeout(t)
                            },
                            default: function(t) {
                                return e.verifyError(t)
                            }
                        };
                        wx.request({
                            timeout: 15e3,
                            method: "POST",
                            url: i.VERIFY_URL,
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            data: t,
                            success: function(t) {
                                if (e.setData({
                                        requesting: !1
                                    }), 200 === t.statusCode) {
                                    c.verifyHttpErrorCounter = 0;
                                    var i = t.data,
                                        a = i.errorCode,
                                        s = i.sess;
                                    c.sess = s, setTimeout(r[a] || r.default, 0, i)
                                } else e.verifyHttpError()
                            },
                            fail: function() {
                                e.setData({
                                    requesting: !1
                                }, e.verifyHttpError)
                            }
                        })
                    }
                },
                handleClickVerify: function() {
                    var e = this.data.clickElCfg.reduce((function(e, r) {
                            return [].concat(t(e), [{
                                elem_id: r.id,
                                type: r.type,
                                data: r.data
                            }])
                        }), []),
                        r = {
                            ans: JSON.stringify(e),
                            sess: c.sess
                        };
                    this.verify(r)
                },
                show: function() {
                    var t = this;
                    this.setData({
                        themeRgbaColor: (0, s.colorRgba)(this.data.themeColor)
                    }), this.initFromPrehandle((function() {
                        t.triggerEvent("ready", {})
                    }))
                },
                refreshSuccess: function(t) {
                    this.clearEl(), this.clearInsStyles(), this.clearBg(), this.clearCover(), this.initElments(t, t.data)
                },
                refreshHttpError: function() {
                    this.setData({
                        aiWaterMark: ""
                    }), c.refreshHttpErrorCounter += 1, c.refreshHttpErrorCounter < 3 ? this.setData({
                        showLoadFailCover: !0
                    }) : this.verifySuccess((0, n.getErrorRes)(n.ERROR_TYPE.REFRESH_ERROR, this.data.appId || this.data.appid))
                },
                refresh: function() {
                    var t = this;
                    if (!this.data.requesting && this.data.isShowCaptcha) {
                        this.setData({
                            requesting: !0,
                            showLoadFailCover: !1
                        });
                        var e = {
                            0: function(e) {
                                return t.refreshSuccess(e)
                            },
                            default: function() {
                                return t.initFromPrehandle()
                            }
                        };
                        wx.request({
                            timeout: 15e3,
                            method: "POST",
                            header: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            url: i.REFRESH_URL,
                            data: {
                                sess: c.sess
                            },
                            success: function(r) {
                                if (t.setData({
                                        requesting: !1,
                                        aiWaterMark: t.languageChooser.getWord(o.KEYS_MAP.AI_WATER_MARK)
                                    }), 200 === r.statusCode) {
                                    c.refreshHttpErrorCounter = 0;
                                    var i = r.data,
                                        a = e[i.ret] || e.default;
                                    setTimeout(a, 0, i)
                                } else t.refreshHttpError()
                            },
                            fail: function() {
                                t.setData({
                                    requesting: !1
                                }, t.refreshHttpError)
                            }
                        })
                    }
                },
                destroy: function(t) {
                    c.sess = "", c.sid = "", c.prehandleHttpErrorCount = 0, c.refreshHttpErrorCounter = 0, c.verifyHttpErrorCounter = 0, c.areaBoundary = [], c.fgBindingList = [], c.initDragCfg = [], c.startDragPos = [], c.currDragPos = [];
                    var e = t ? 2 : 0;
                    this.clearElements(), this.setData({
                        isShowCaptcha: !1,
                        requesting: !1
                    }), this.triggerEvent("close", {
                        ret: e
                    })
                }
            }
        });
    });
    require("components/main/main.js");
    global.__wxAppCurrentFile__ = 'plugin-private://wx1fe8d9a3cb067a75/components/popup/popup.js';
    global.__wxRouteBegin = true;
    define("components/popup/popup.js", function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, XMLHttpRequest, WebSocket, Reporter, webkit, WeixinJSCore) {
        "use strict";
        "use strict";
        Component({
            properties: {
                isShowPop: {
                    type: Boolean,
                    value: !1
                }
            },
            options: {
                multipleSlots: !0
            }
        });
    });
    require("components/popup/popup.js");

    ;
    global.publishDomainComponents({
        "plugin://wx1fe8d9a3cb067a75/t-captcha": "plugin-private://wx1fe8d9a3cb067a75/components/index/index",
    });
    module.exports = function() {
        return require('index.js')
    }
});
requirePlugin("plugin://wx1fe8d9a3cb067a75");