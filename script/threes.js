! function() {
    var e, t;
    (function() { t = {} }).call(this),
        function() {
            (function() {
                var e = this,
                    n = e._,
                    i = {},
                    r = Array.prototype,
                    o = Object.prototype,
                    s = Function.prototype,
                    a = r.push,
                    l = r.slice,
                    u = r.concat,
                    c = o.toString,
                    h = o.hasOwnProperty,
                    d = r.forEach,
                    f = r.map,
                    p = r.reduce,
                    g = r.reduceRight,
                    m = r.filter,
                    v = r.every,
                    _ = r.some,
                    y = r.indexOf,
                    b = r.lastIndexOf,
                    w = Array.isArray,
                    k = Object.keys,
                    x = s.bind,
                    C = function(e) { return e instanceof C ? e : this instanceof C ? (this._wrapped = e, void 0) : new C(e) };
                "undefined" != typeof t ? ("undefined" != typeof module && module.exports && (t = module.exports = C), t._ = C) : e._ = C, C.VERSION = "1.5.2";
                var T = C.each = C.forEach = function(e, t, n) {
                    if (null != e)
                        if (d && e.forEach === d) e.forEach(t, n);
                        else if (e.length === +e.length) {
                        for (var r = 0, o = e.length; o > r; r++)
                            if (t.call(n, e[r], r, e) === i) return
                    } else
                        for (var s = C.keys(e), r = 0, o = s.length; o > r; r++)
                            if (t.call(n, e[s[r]], s[r], e) === i) return
                };
                C.map = C.collect = function(e, t, n) { var i = []; return null == e ? i : f && e.map === f ? e.map(t, n) : (T(e, function(e, r, o) { i.push(t.call(n, e, r, o)) }), i) };
                var E = "Reduce of empty array with no initial value";
                C.reduce = C.foldl = C.inject = function(e, t, n, i) { var r = arguments.length > 2; if (null == e && (e = []), p && e.reduce === p) return i && (t = C.bind(t, i)), r ? e.reduce(t, n) : e.reduce(t); if (T(e, function(e, o, s) { r ? n = t.call(i, n, e, o, s) : (n = e, r = !0) }), !r) throw new TypeError(E); return n }, C.reduceRight = C.foldr = function(e, t, n, i) {
                    var r = arguments.length > 2;
                    if (null == e && (e = []), g && e.reduceRight === g) return i && (t = C.bind(t, i)), r ? e.reduceRight(t, n) : e.reduceRight(t);
                    var o = e.length;
                    if (o !== +o) {
                        var s = C.keys(e);
                        o = s.length
                    }
                    if (T(e, function(a, l, u) { l = s ? s[--o] : --o, r ? n = t.call(i, n, e[l], l, u) : (n = e[l], r = !0) }), !r) throw new TypeError(E);
                    return n
                }, C.find = C.detect = function(e, t, n) { var i; return D(e, function(e, r, o) { return t.call(n, e, r, o) ? (i = e, !0) : void 0 }), i }, C.filter = C.select = function(e, t, n) { var i = []; return null == e ? i : m && e.filter === m ? e.filter(t, n) : (T(e, function(e, r, o) { t.call(n, e, r, o) && i.push(e) }), i) }, C.reject = function(e, t, n) { return C.filter(e, function(e, i, r) { return !t.call(n, e, i, r) }, n) }, C.every = C.all = function(e, t, n) { t || (t = C.identity); var r = !0; return null == e ? r : v && e.every === v ? e.every(t, n) : (T(e, function(e, o, s) { return (r = r && t.call(n, e, o, s)) ? void 0 : i }), !!r) };
                var D = C.some = C.any = function(e, t, n) { t || (t = C.identity); var r = !1; return null == e ? r : _ && e.some === _ ? e.some(t, n) : (T(e, function(e, o, s) { return r || (r = t.call(n, e, o, s)) ? i : void 0 }), !!r) };
                C.contains = C.include = function(e, t) { return null == e ? !1 : y && e.indexOf === y ? -1 != e.indexOf(t) : D(e, function(e) { return e === t }) }, C.invoke = function(e, t) {
                    var n = l.call(arguments, 2),
                        i = C.isFunction(t);
                    return C.map(e, function(e) { return (i ? t : e[t]).apply(e, n) })
                }, C.pluck = function(e, t) { return C.map(e, function(e) { return e[t] }) }, C.where = function(e, t, n) {
                    return C.isEmpty(t) ? n ? void 0 : [] : C[n ? "find" : "filter"](e, function(e) {
                        for (var n in t)
                            if (t[n] !== e[n]) return !1;
                        return !0
                    })
                }, C.findWhere = function(e, t) { return C.where(e, t, !0) }, C.max = function(e, t, n) {
                    if (!t && C.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
                    if (!t && C.isEmpty(e)) return -1 / 0;
                    var i = { computed: -1 / 0, value: -1 / 0 };
                    return T(e, function(e, r, o) {
                        var s = t ? t.call(n, e, r, o) : e;
                        s > i.computed && (i = { value: e, computed: s })
                    }), i.value
                }, C.min = function(e, t, n) {
                    if (!t && C.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
                    if (!t && C.isEmpty(e)) return 1 / 0;
                    var i = { computed: 1 / 0, value: 1 / 0 };
                    return T(e, function(e, r, o) {
                        var s = t ? t.call(n, e, r, o) : e;
                        s < i.computed && (i = { value: e, computed: s })
                    }), i.value
                }, C.shuffle = function(e) {
                    var t, n = 0,
                        i = [];
                    return T(e, function(e) { t = C.random(n++), i[n - 1] = i[t], i[t] = e }), i
                }, C.sample = function(e, t, n) { return arguments.length < 2 || n ? e[C.random(e.length - 1)] : C.shuffle(e).slice(0, Math.max(0, t)) };
                var S = function(e) { return C.isFunction(e) ? e : function(t) { return t[e] } };
                C.sortBy = function(e, t, n) {
                    var i = S(t);
                    return C.pluck(C.map(e, function(e, t, r) { return { value: e, index: t, criteria: i.call(n, e, t, r) } }).sort(function(e, t) {
                        var n = e.criteria,
                            i = t.criteria;
                        if (n !== i) { if (n > i || void 0 === n) return 1; if (i > n || void 0 === i) return -1 }
                        return e.index - t.index
                    }), "value")
                };
                var P = function(e) {
                    return function(t, n, i) {
                        var r = {},
                            o = null == n ? C.identity : S(n);
                        return T(t, function(n, s) {
                            var a = o.call(i, n, s, t);
                            e(r, a, n)
                        }), r
                    }
                };
                C.groupBy = P(function(e, t, n) {
                    (C.has(e, t) ? e[t] : e[t] = []).push(n)
                }), C.indexBy = P(function(e, t, n) { e[t] = n }), C.countBy = P(function(e, t) { C.has(e, t) ? e[t]++ : e[t] = 1 }), C.sortedIndex = function(e, t, n, i) {
                    n = null == n ? C.identity : S(n);
                    for (var r = n.call(i, t), o = 0, s = e.length; s > o;) {
                        var a = o + s >>> 1;
                        n.call(i, e[a]) < r ? o = a + 1 : s = a
                    }
                    return o
                }, C.toArray = function(e) { return e ? C.isArray(e) ? l.call(e) : e.length === +e.length ? C.map(e, C.identity) : C.values(e) : [] }, C.size = function(e) { return null == e ? 0 : e.length === +e.length ? e.length : C.keys(e).length }, C.first = C.head = C.take = function(e, t, n) { return null == e ? void 0 : null == t || n ? e[0] : l.call(e, 0, t) }, C.initial = function(e, t, n) { return l.call(e, 0, e.length - (null == t || n ? 1 : t)) }, C.last = function(e, t, n) { return null == e ? void 0 : null == t || n ? e[e.length - 1] : l.call(e, Math.max(e.length - t, 0)) }, C.rest = C.tail = C.drop = function(e, t, n) { return l.call(e, null == t || n ? 1 : t) }, C.compact = function(e) { return C.filter(e, C.identity) };
                var N = function(e, t, n) { return t && C.every(e, C.isArray) ? u.apply(n, e) : (T(e, function(e) { C.isArray(e) || C.isArguments(e) ? t ? a.apply(n, e) : N(e, t, n) : n.push(e) }), n) };
                C.flatten = function(e, t) { return N(e, t, []) }, C.without = function(e) { return C.difference(e, l.call(arguments, 1)) }, C.uniq = C.unique = function(e, t, n, i) {
                    C.isFunction(t) && (i = n, n = t, t = !1);
                    var r = n ? C.map(e, n, i) : e,
                        o = [],
                        s = [];
                    return T(r, function(n, i) {
                        (t ? i && s[s.length - 1] === n : C.contains(s, n)) || (s.push(n), o.push(e[i]))
                    }), o
                }, C.union = function() { return C.uniq(C.flatten(arguments, !0)) }, C.intersection = function(e) { var t = l.call(arguments, 1); return C.filter(C.uniq(e), function(e) { return C.every(t, function(t) { return C.indexOf(t, e) >= 0 }) }) }, C.difference = function(e) { var t = u.apply(r, l.call(arguments, 1)); return C.filter(e, function(e) { return !C.contains(t, e) }) }, C.zip = function() { for (var e = C.max(C.pluck(arguments, "length").concat(0)), t = new Array(e), n = 0; e > n; n++) t[n] = C.pluck(arguments, "" + n); return t }, C.object = function(e, t) { if (null == e) return {}; for (var n = {}, i = 0, r = e.length; r > i; i++) t ? n[e[i]] = t[i] : n[e[i][0]] = e[i][1]; return n }, C.indexOf = function(e, t, n) {
                    if (null == e) return -1;
                    var i = 0,
                        r = e.length;
                    if (n) {
                        if ("number" != typeof n) return i = C.sortedIndex(e, t), e[i] === t ? i : -1;
                        i = 0 > n ? Math.max(0, r + n) : n
                    }
                    if (y && e.indexOf === y) return e.indexOf(t, n);
                    for (; r > i; i++)
                        if (e[i] === t) return i;
                    return -1
                }, C.lastIndexOf = function(e, t, n) {
                    if (null == e) return -1;
                    var i = null != n;
                    if (b && e.lastIndexOf === b) return i ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
                    for (var r = i ? n : e.length; r--;)
                        if (e[r] === t) return r;
                    return -1
                }, C.range = function(e, t, n) { arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1; for (var i = Math.max(Math.ceil((t - e) / n), 0), r = 0, o = new Array(i); i > r;) o[r++] = e, e += n; return o };
                var I = function() {};
                C.bind = function(e, t) {
                    var n, i;
                    if (x && e.bind === x) return x.apply(e, l.call(arguments, 1));
                    if (!C.isFunction(e)) throw new TypeError;
                    return n = l.call(arguments, 2), i = function() {
                        if (!(this instanceof i)) return e.apply(t, n.concat(l.call(arguments)));
                        I.prototype = e.prototype;
                        var r = new I;
                        I.prototype = null;
                        var o = e.apply(r, n.concat(l.call(arguments)));
                        return Object(o) === o ? o : r
                    }
                }, C.partial = function(e) { var t = l.call(arguments, 1); return function() { return e.apply(this, t.concat(l.call(arguments))) } }, C.bindAll = function(e) { var t = l.call(arguments, 1); if (0 === t.length) throw new Error("bindAll must be passed function names"); return T(t, function(t) { e[t] = C.bind(e[t], e) }), e }, C.memoize = function(e, t) {
                    var n = {};
                    return t || (t = C.identity),
                        function() { var i = t.apply(this, arguments); return C.has(n, i) ? n[i] : n[i] = e.apply(this, arguments) }
                }, C.delay = function(e, t) { var n = l.call(arguments, 2); return setTimeout(function() { return e.apply(null, n) }, t) }, C.defer = function(e) { return C.delay.apply(C, [e, 1].concat(l.call(arguments, 1))) }, C.throttle = function(e, t, n) {
                    var i, r, o, s = null,
                        a = 0;
                    n || (n = {});
                    var l = function() { a = n.leading === !1 ? 0 : new Date, s = null, o = e.apply(i, r) };
                    return function() {
                        var u = new Date;
                        a || n.leading !== !1 || (a = u);
                        var c = t - (u - a);
                        return i = this, r = arguments, 0 >= c ? (clearTimeout(s), s = null, a = u, o = e.apply(i, r)) : s || n.trailing === !1 || (s = setTimeout(l, c)), o
                    }
                }, C.debounce = function(e, t, n) {
                    var i, r, o, s, a;
                    return function() {
                        o = this, r = arguments, s = new Date;
                        var l = function() {
                                var u = new Date - s;
                                t > u ? i = setTimeout(l, t - u) : (i = null, n || (a = e.apply(o, r)))
                            },
                            u = n && !i;
                        return i || (i = setTimeout(l, t)), u && (a = e.apply(o, r)), a
                    }
                }, C.once = function(e) { var t, n = !1; return function() { return n ? t : (n = !0, t = e.apply(this, arguments), e = null, t) } }, C.wrap = function(e, t) { return function() { var n = [e]; return a.apply(n, arguments), t.apply(this, n) } }, C.compose = function() { var e = arguments; return function() { for (var t = arguments, n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)]; return t[0] } }, C.after = function(e, t) { return function() { return --e < 1 ? t.apply(this, arguments) : void 0 } }, C.keys = k || function(e) { if (e !== Object(e)) throw new TypeError("Invalid object"); var t = []; for (var n in e) C.has(e, n) && t.push(n); return t }, C.values = function(e) { for (var t = C.keys(e), n = t.length, i = new Array(n), r = 0; n > r; r++) i[r] = e[t[r]]; return i }, C.pairs = function(e) { for (var t = C.keys(e), n = t.length, i = new Array(n), r = 0; n > r; r++) i[r] = [t[r], e[t[r]]]; return i }, C.invert = function(e) { for (var t = {}, n = C.keys(e), i = 0, r = n.length; r > i; i++) t[e[n[i]]] = n[i]; return t }, C.functions = C.methods = function(e) { var t = []; for (var n in e) C.isFunction(e[n]) && t.push(n); return t.sort() }, C.extend = function(e) {
                    return T(l.call(arguments, 1), function(t) {
                        if (t)
                            for (var n in t) e[n] = t[n]
                    }), e
                }, C.pick = function(e) {
                    var t = {},
                        n = u.apply(r, l.call(arguments, 1));
                    return T(n, function(n) { n in e && (t[n] = e[n]) }), t
                }, C.omit = function(e) {
                    var t = {},
                        n = u.apply(r, l.call(arguments, 1));
                    for (var i in e) C.contains(n, i) || (t[i] = e[i]);
                    return t
                }, C.defaults = function(e) {
                    return T(l.call(arguments, 1), function(t) {
                        if (t)
                            for (var n in t) void 0 === e[n] && (e[n] = t[n])
                    }), e
                }, C.clone = function(e) { return C.isObject(e) ? C.isArray(e) ? e.slice() : C.extend({}, e) : e }, C.tap = function(e, t) { return t(e), e };
                var M = function(e, t, n, i) {
                    if (e === t) return 0 !== e || 1 / e == 1 / t;
                    if (null == e || null == t) return e === t;
                    e instanceof C && (e = e._wrapped), t instanceof C && (t = t._wrapped);
                    var r = c.call(e);
                    if (r != c.call(t)) return !1;
                    switch (r) {
                        case "[object String]":
                            return e == String(t);
                        case "[object Number]":
                            return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
                        case "[object Date]":
                        case "[object Boolean]":
                            return +e == +t;
                        case "[object RegExp]":
                            return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
                    }
                    if ("object" != typeof e || "object" != typeof t) return !1;
                    for (var o = n.length; o--;)
                        if (n[o] == e) return i[o] == t;
                    var s = e.constructor,
                        a = t.constructor;
                    if (s !== a && !(C.isFunction(s) && s instanceof s && C.isFunction(a) && a instanceof a)) return !1;
                    n.push(e), i.push(t);
                    var l = 0,
                        u = !0;
                    if ("[object Array]" == r) {
                        if (l = e.length, u = l == t.length)
                            for (; l-- && (u = M(e[l], t[l], n, i)););
                    } else {
                        for (var h in e)
                            if (C.has(e, h) && (l++, !(u = C.has(t, h) && M(e[h], t[h], n, i)))) break;
                        if (u) {
                            for (h in t)
                                if (C.has(t, h) && !l--) break;
                            u = !l
                        }
                    }
                    return n.pop(), i.pop(), u
                };
                C.isEqual = function(e, t) { return M(e, t, [], []) }, C.isEmpty = function(e) {
                    if (null == e) return !0;
                    if (C.isArray(e) || C.isString(e)) return 0 === e.length;
                    for (var t in e)
                        if (C.has(e, t)) return !1;
                    return !0
                }, C.isElement = function(e) { return !(!e || 1 !== e.nodeType) }, C.isArray = w || function(e) { return "[object Array]" == c.call(e) }, C.isObject = function(e) { return e === Object(e) }, T(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) { C["is" + e] = function(t) { return c.call(t) == "[object " + e + "]" } }), C.isArguments(arguments) || (C.isArguments = function(e) { return !(!e || !C.has(e, "callee")) }), "function" != typeof /./ && (C.isFunction = function(e) { return "function" == typeof e }), C.isFinite = function(e) { return isFinite(e) && !isNaN(parseFloat(e)) }, C.isNaN = function(e) { return C.isNumber(e) && e != +e }, C.isBoolean = function(e) { return e === !0 || e === !1 || "[object Boolean]" == c.call(e) }, C.isNull = function(e) { return null === e }, C.isUndefined = function(e) { return void 0 === e }, C.has = function(e, t) { return h.call(e, t) }, C.noConflict = function() { return e._ = n, this }, C.identity = function(e) { return e }, C.times = function(e, t, n) { for (var i = Array(Math.max(0, e)), r = 0; e > r; r++) i[r] = t.call(n, r); return i }, C.random = function(e, t) { return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1)) };
                var A = { escape: { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;" } };
                A.unescape = C.invert(A.escape);
                var O = { escape: new RegExp("[" + C.keys(A.escape).join("") + "]", "g"), unescape: new RegExp("(" + C.keys(A.unescape).join("|") + ")", "g") };
                C.each(["escape", "unescape"], function(e) { C[e] = function(t) { return null == t ? "" : ("" + t).replace(O[e], function(t) { return A[e][t] }) } }), C.result = function(e, t) { if (null == e) return void 0; var n = e[t]; return C.isFunction(n) ? n.call(e) : n }, C.mixin = function(e) {
                    T(C.functions(e), function(t) {
                        var n = C[t] = e[t];
                        C.prototype[t] = function() { var e = [this._wrapped]; return a.apply(e, arguments), L.call(this, n.apply(C, e)) }
                    })
                };
                var j = 0;
                C.uniqueId = function(e) { var t = ++j + ""; return e ? e + t : t }, C.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g };
                var R = /(.)^/,
                    H = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "	": "t", "\u2028": "u2028", "\u2029": "u2029" },
                    $ = /\\|'|\r|\n|\t|\u2028|\u2029/g;
                C.template = function(e, t, n) {
                    var i;
                    n = C.defaults({}, n, C.templateSettings);
                    var r = new RegExp([(n.escape || R).source, (n.interpolate || R).source, (n.evaluate || R).source].join("|") + "|$", "g"),
                        o = 0,
                        s = "__p+='";
                    e.replace(r, function(t, n, i, r, a) { return s += e.slice(o, a).replace($, function(e) { return "\\" + H[e] }), n && (s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), i && (s += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"), r && (s += "';\n" + r + "\n__p+='"), o = a + t.length, t }), s += "';\n", n.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
                    try { i = new Function(n.variable || "obj", "_", s) } catch (a) { throw a.source = s, a }
                    if (t) return i(t, C);
                    var l = function(e) { return i.call(this, e, C) };
                    return l.source = "function(" + (n.variable || "obj") + "){\n" + s + "}", l
                }, C.chain = function(e) { return C(e).chain() };
                var L = function(e) { return this._chain ? C(e).chain() : e };
                C.mixin(C), T(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
                    var t = r[e];
                    C.prototype[e] = function() { var n = this._wrapped; return t.apply(n, arguments), "shift" != e && "splice" != e || 0 !== n.length || delete n[0], L.call(this, n) }
                }), T(["concat", "join", "slice"], function(e) {
                    var t = r[e];
                    C.prototype[e] = function() { return L.call(this, t.apply(this._wrapped, arguments)) }
                }), C.extend(C.prototype, { chain: function() { return this._chain = !0, this }, value: function() { return this._wrapped } })
            }).call(this)
        }.call(this),
        function() { e = t._ }.call(this), "undefined" == typeof Package && (Package = {}), Package.underscore = { _: e }
}(),
function() {
    var e, t = Package.underscore._;
    (function() { e = { isClient: !0, isServer: !1 }, "object" == typeof __meteor_runtime_config__ && __meteor_runtime_config__.PUBLIC_SETTINGS && (e.settings = { "public": __meteor_runtime_config__.PUBLIC_SETTINGS }) }).call(this),
        function() {
            if (e.isServer) var n = Npm.require("fibers/future");
            "object" == typeof __meteor_runtime_config__ && __meteor_runtime_config__.meteorRelease && (e.release = __meteor_runtime_config__.meteorRelease), t.extend(e, {
                _get: function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        if (!(arguments[t] in e)) return void 0;
                        e = e[arguments[t]]
                    }
                    return e
                },
                _ensure: function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        n in e || (e[n] = {}), e = e[n]
                    }
                    return e
                },
                _delete: function(e) {
                    for (var t = [e], n = !0, i = 1; i < arguments.length - 1; i++) {
                        var r = arguments[i];
                        if (!(r in e)) { n = !1; break }
                        if (e = e[r], "object" != typeof e) break;
                        t.push(e)
                    }
                    for (var i = t.length - 1; i >= 0; i--) {
                        var r = arguments[i + 1];
                        if (n) n = !1;
                        else
                            for (var o in t[i][r]) return;
                        delete t[i][r]
                    }
                },
                _wrapAsync: function(i) {
                    return function() {
                        for (var r, o, s = this, a = t.toArray(arguments), l = function(t) { return t ? e._debug("Exception in callback of async function", t.stack ? t.stack : t) : void 0 }; a.length > 0 && "undefined" == typeof a[a.length - 1];) a.pop();
                        a.length > 0 && a[a.length - 1] instanceof Function ? r = a.pop() : e.isClient ? r = l : (o = new n, r = o.resolver()), a.push(e.bindEnvironment(r));
                        var u = i.apply(s, a);
                        return o ? o.wait() : u
                    }
                }
            })
        }.call(this),
        function() {
            "use strict";

            function t() { if (r.setImmediate) { var e = function(e) { r.setImmediate(e) }; return e.implementation = "setImmediate", e } return null }

            function n() {
                function e(e, t) { return "string" == typeof e && e.substring(0, t.length) === t }

                function t(t) { if (t.source === r && e(t.data, a)) { var n = t.data.substring(a.length); try { s[n] && s[n]() } finally { delete s[n] } } }
                if (!r.postMessage || r.importScripts) return null;
                var n = !0,
                    i = r.onmessage;
                if (r.onmessage = function() { n = !1 }, r.postMessage("", "*"), r.onmessage = i, !n) return null;
                var o = 0,
                    s = {},
                    a = "Meteor._setImmediate." + Math.random() + ".";
                r.addEventListener ? r.addEventListener("message", t, !1) : r.attachEvent("onmessage", t);
                var l = function(e) {++o, s[o] = e, r.postMessage(a + o, "*") };
                return l.implementation = "postMessage", l
            }

            function i() { var e = function(e) { r.setTimeout(e, 0) }; return e.implementation = "setTimeout", e }
            var r = this;
            e._setImmediate = t() || n() || i()
        }.call(this),
        function() {
            var n = function(e) { if (Package.livedata) { var t = Package.livedata.DDP._CurrentInvocation; if (t.get() && t.get().isSimulation) throw new Error("Can't set timers inside simulations"); return function() { t.withValue(null, e) } } return e },
                i = function(t, i) { return e.bindEnvironment(n(i), t) };
            t.extend(e, { setTimeout: function(e, t) { return setTimeout(i("setTimeout callback", e), t) }, setInterval: function(e, t) { return setInterval(i("setInterval callback", e), t) }, clearInterval: function(e) { return clearInterval(e) }, clearTimeout: function(e) { return clearTimeout(e) }, defer: function(t) { e._setImmediate(i("defer callback", t)) } })
        }.call(this),
        function() {
            var t = function(e, t) {
                var n = function() {};
                n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
            };
            e.makeErrorType = function(e, n) {
                var i = function() {
                    var t = this;
                    if (Error.captureStackTrace) Error.captureStackTrace(t, i);
                    else {
                        var r = new Error;
                        r.__proto__ = i.prototype, r instanceof i && (t = r)
                    }
                    return n.apply(t, arguments), t.errorType = e, t
                };
                return t(i, Error), i
            }, e.Error = e.makeErrorType("Meteor.Error", function(e, t, n) {
                var i = this;
                i.error = e, i.reason = t, i.details = n, i.message = i.reason ? i.reason + " [" + i.error + "]" : "[" + i.error + "]"
            }), e.Error.prototype.clone = function() { var t = this; return new e.Error(t.error, t.reason, t.details) }
        }.call(this),
        function() {
            e._noYieldsAllowed = function(e) { return e() }, e._SynchronousQueue = function() {
                var e = this;
                e._tasks = [], e._running = !1
            }, t.extend(e._SynchronousQueue.prototype, {
                runTask: function(n) {
                    var i = this;
                    if (!i.safeToRunTask()) throw new Error("Could not synchronously run a task from a running task");
                    i._tasks.push(n);
                    var r = i._tasks;
                    i._tasks = [], i._running = !0;
                    try {
                        for (; !t.isEmpty(r);) {
                            var o = r.shift();
                            try { o() } catch (s) {
                                if (t.isEmpty(r)) throw s;
                                e._debug("Exception in queued task: " + s.stack)
                            }
                        }
                    } finally { i._running = !1 }
                },
                queueTask: function(e) {
                    var n = this,
                        i = t.isEmpty(n._tasks);
                    n._tasks.push(e), i && setTimeout(t.bind(n.flush, n), 0)
                },
                flush: function() {
                    var e = this;
                    e.runTask(function() {})
                },
                drain: function() {
                    var e = this;
                    if (e.safeToRunTask())
                        for (; !t.isEmpty(e._tasks);) e.flush()
                },
                safeToRunTask: function() { var e = this; return !e._running }
            })
        }.call(this),
        function() {
            var t = [],
                n = "loaded" === document.readyState || "complete" == document.readyState,
                i = function() { for (n = !0; t.length;) t.shift()() };
            document.addEventListener ? (document.addEventListener("DOMContentLoaded", i, !1), window.addEventListener("load", i, !1)) : (document.attachEvent("onreadystatechange", function() { "complete" === document.readyState && i() }), window.attachEvent("load", i)), e.startup = function(i) {
                var r = !document.addEventListener && document.documentElement.doScroll;
                if (r && window === top) {
                    try { r("left") } catch (o) { return setTimeout(function() { e.startup(i) }, 50), void 0 }
                    i()
                } else n ? i() : t.push(i)
            }
        }.call(this),
        function() {
            var t = 0;
            e._debug = function() {
                if (t) return t--, void 0;
                if ("undefined" != typeof console && "undefined" != typeof console.log)
                    if (0 == arguments.length) console.log("");
                    else if ("function" == typeof console.log.apply) {
                    for (var e = !0, n = 0; n < arguments.length; n++) "string" != typeof arguments[n] && (e = !1);
                    e ? console.log.apply(console, [Array.prototype.join.call(arguments, " ")]) : console.log.apply(console, arguments)
                } else if ("function" == typeof Function.prototype.bind) {
                    var i = Function.prototype.bind.call(console.log, console);
                    i.apply(console, arguments)
                } else Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments))
            }, e._suppress_log = function(e) { t += e }
        }.call(this),
        function() {
            var n = 0,
                i = [];
            e.EnvironmentVariable = function() { this.slot = n++ }, t.extend(e.EnvironmentVariable.prototype, { get: function() { return i[this.slot] }, withValue: function(e, t) { var n = i[this.slot]; try { i[this.slot] = e; var r = t() } finally { i[this.slot] = n } return r } }), e.bindEnvironment = function(n, r, o) {
                var s = t.clone(i);
                if (!r || "string" == typeof r) {
                    var a = r || "callback of async function";
                    r = function(t) { e._debug("Exception in " + a + ":", t && t.stack || t) }
                }
                return function() { var e = i; try { i = s; var a = n.apply(o, t.toArray(arguments)) } catch (l) { r(l) } finally { i = e } return a }
            }
        }.call(this),
        function() { e.absoluteUrl = function(n, i) { i || "object" != typeof n || (i = n, n = void 0), i = t.extend({}, e.absoluteUrl.defaultOptions, i || {}); var r = i.rootUrl; if (!r) throw new Error("Must pass options.rootUrl or set ROOT_URL in the server environment"); return /^http[s]?:\/\//i.test(r) || (r = "http://" + r), /\/$/.test(r) || (r += "/"), n && (r += n), i.secure && /^http:/.test(r) && !/http:\/\/localhost[:\/]/.test(r) && !/http:\/\/127\.0\.0\.1[:\/]/.test(r) && (r = r.replace(/^http:/, "https:")), i.replaceLocalhost && (r = r.replace(/^http:\/\/localhost([:\/].*)/, "http://127.0.0.1$1")), r }, e.absoluteUrl.defaultOptions = {}, "object" == typeof __meteor_runtime_config__ && __meteor_runtime_config__.ROOT_URL && (e.absoluteUrl.defaultOptions.rootUrl = __meteor_runtime_config__.ROOT_URL), e._relativeToSiteRootUrl = function(e) { return "object" == typeof __meteor_runtime_config__ && "/" === e.substr(0, 1) && (e = (__meteor_runtime_config__.ROOT_URL_PATH_PREFIX || "") + e), e } }.call(this), "undefined" == typeof Package && (Package = {}), Package.meteor = { Meteor: e }
}(),
function() { Package.meteor.Meteor; "undefined" == typeof Package && (Package = {}), Package.less = {} }(),
function() {
    {
        var e, t = Package.meteor.Meteor;
        Package.underscore._
    }(function() {
        if (t.isServer) var n = Npm.require("crypto");
        var i = function() {
                function e() {
                    var e = 4022871197,
                        t = function(t) {
                            t = t.toString();
                            for (var n = 0; n < t.length; n++) {
                                e += t.charCodeAt(n);
                                var i = .02519603282416938 * e;
                                e = i >>> 0, i -= e, i *= e, e = i >>> 0, i -= e, e += 4294967296 * i
                            }
                            return 2.3283064365386963e-10 * (e >>> 0)
                        };
                    return t.version = "Mash 0.9", t
                }
                return function(t) {
                    var n = 0,
                        i = 0,
                        r = 0,
                        o = 1;
                    0 == t.length && (t = [+new Date]);
                    var s = e();
                    n = s(" "), i = s(" "), r = s(" ");
                    for (var a = 0; a < t.length; a++) n -= s(t[a]), 0 > n && (n += 1), i -= s(t[a]), 0 > i && (i += 1), r -= s(t[a]), 0 > r && (r += 1);
                    s = null;
                    var l = function() { var e = 2091639 * n + 2.3283064365386963e-10 * o; return n = i, i = r, r = e - (o = 0 | e) };
                    return l.uint32 = function() { return 4294967296 * l() }, l.fract53 = function() { return l() + 1.1102230246251565e-16 * (2097152 * l() | 0) }, l.version = "Alea 0.9", l.args = t, l
                }(Array.prototype.slice.call(arguments))
            },
            r = "23456789ABCDEFGHJKLMNPQRSTWXYZabcdefghijkmnopqrstuvwxyz",
            o = function(e) {
                var t = this;
                void 0 !== e && (t.alea = i.apply(null, e))
            };
        o.prototype.fraction = function() { var e = this; if (e.alea) return e.alea(); if (n) { var t = parseInt(e.hexString(8), 16); return 2.3283064365386963e-10 * t } if ("undefined" != typeof window && window.crypto && window.crypto.getRandomValues) { var i = new Uint32Array(1); return window.crypto.getRandomValues(i), 2.3283064365386963e-10 * i[0] } }, o.prototype.hexString = function(e) { var t = this; if (n && !t.alea) { var i, r = Math.ceil(e / 2); try { i = n.randomBytes(r) } catch (o) { i = n.pseudoRandomBytes(r) } var s = i.toString("hex"); return s.substring(0, e) } for (var a = [], l = 0; e > l; ++l) a.push(t.choice("0123456789abcdef")); return a.join("") }, o.prototype.id = function() { for (var e = [], t = this, n = 0; 17 > n; n++) e[n] = t.choice(r); return e.join("") }, o.prototype.choice = function(e) { var t = Math.floor(this.fraction() * e.length); return "string" == typeof e ? e.substr(t, 1) : e[t] };
        var s = "undefined" != typeof window && window.innerHeight || "undefined" != typeof document && document.documentElement && document.documentElement.clientHeight || "undefined" != typeof document && document.body && document.body.clientHeight || 1,
            a = "undefined" != typeof window && window.innerWidth || "undefined" != typeof document && document.documentElement && document.documentElement.clientWidth || "undefined" != typeof document && document.body && document.body.clientWidth || 1,
            l = "undefined" != typeof navigator && navigator.userAgent || "";
        e = n || "undefined" != typeof window && window.crypto && window.crypto.getRandomValues ? new o : new o([new Date, s, a, l, Math.random()]), e.create = function() { return new o(arguments) }
    }).call(this),
        function() {
            t.uuid = function() {
                for (var t = "0123456789abcdef", n = [], i = 0; 36 > i; i++) n[i] = e.choice(t);
                n[14] = "4", n[19] = t.substr(3 & parseInt(n[19], 16) | 8, 1), n[8] = n[13] = n[18] = n[23] = "-";
                var r = n.join("");
                return r
            }
        }.call(this), "undefined" == typeof Package && (Package = {}), Package.random = { Random: e }
}(),
function() {
    {
        var e, t;
        Package.meteor.Meteor
    }(function() {
        ! function(e, t) {
            function n(e) { var t = pt[e] = {}; return G.each(e.split(tt), function(e, n) { t[n] = !0 }), t }

            function i(e, n, i) {
                if (i === t && 1 === e.nodeType) {
                    var r = "data-" + n.replace(mt, "-$1").toLowerCase();
                    if (i = e.getAttribute(r), "string" == typeof i) {
                        try { i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null : +i + "" === i ? +i : gt.test(i) ? G.parseJSON(i) : i } catch (o) {}
                        G.data(e, n, i)
                    } else i = t
                }
                return i
            }

            function r(e) {
                var t;
                for (t in e)
                    if (("data" !== t || !G.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
                return !0
            }

            function o() { return !1 }

            function s() { return !0 }

            function a(e) { return !e || !e.parentNode || 11 === e.parentNode.nodeType }

            function l(e, t) { do e = e[t]; while (e && 1 !== e.nodeType); return e }

            function u(e, t, n) {
                if (t = t || 0, G.isFunction(t)) return G.grep(e, function(e, i) { var r = !!t.call(e, i, e); return r === n });
                if (t.nodeType) return G.grep(e, function(e) { return e === t === n });
                if ("string" == typeof t) {
                    var i = G.grep(e, function(e) { return 1 === e.nodeType });
                    if (Rt.test(t)) return G.filter(t, i, !n);
                    t = G.filter(t, i)
                }
                return G.grep(e, function(e) { return G.inArray(e, t) >= 0 === n })
            }

            function c(e) {
                var t = Lt.split("|"),
                    n = e.createDocumentFragment();
                if (n.createElement)
                    for (; t.length;) n.createElement(t.pop());
                return n
            }

            function h(e, t) { return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t)) }

            function d(e, t) {
                if (1 === t.nodeType && G.hasData(e)) {
                    var n, i, r, o = G._data(e),
                        s = G._data(t, o),
                        a = o.events;
                    if (a) {
                        delete s.handle, s.events = {};
                        for (n in a)
                            for (i = 0, r = a[n].length; r > i; i++) G.event.add(t, n, a[n][i])
                    }
                    s.data && (s.data = G.extend({}, s.data))
                }
            }

            function f(e, t) {
                var n;
                1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), G.support.html5Clone && e.innerHTML && !G.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Xt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.selected = e.defaultSelected : "input" === n || "textarea" === n ? t.defaultValue = e.defaultValue : "script" === n && t.text !== e.text && (t.text = e.text), t.removeAttribute(G.expando))
            }

            function p(e) { return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName("*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll("*") : [] }

            function g(e) { Xt.test(e.type) && (e.defaultChecked = e.checked) }

            function m(e, t) {
                if (t in e) return t;
                for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = _n.length; r--;)
                    if (t = _n[r] + n, t in e) return t;
                return i
            }

            function v(e, t) { return e = t || e, "none" === G.css(e, "display") || !G.contains(e.ownerDocument, e) }

            function _(e, t) { for (var n, i, r = [], o = 0, s = e.length; s > o; o++) n = e[o], n.style && (r[o] = G._data(n, "olddisplay"), t ? (r[o] || "none" !== n.style.display || (n.style.display = ""), "" === n.style.display && v(n) && (r[o] = G._data(n, "olddisplay", k(n.nodeName)))) : (i = nn(n, "display"), r[o] || "none" === i || G._data(n, "olddisplay", i))); for (o = 0; s > o; o++) n = e[o], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? r[o] || "" : "none")); return e }

            function y(e, t, n) { var i = hn.exec(t); return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t }

            function b(e, t, n, i) { for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > r; r += 2) "margin" === n && (o += G.css(e, n + vn[r], !0)), i ? ("content" === n && (o -= parseFloat(nn(e, "padding" + vn[r])) || 0), "margin" !== n && (o -= parseFloat(nn(e, "border" + vn[r] + "Width")) || 0)) : (o += parseFloat(nn(e, "padding" + vn[r])) || 0, "padding" !== n && (o += parseFloat(nn(e, "border" + vn[r] + "Width")) || 0)); return o }

            function w(e, t, n) {
                var i = "width" === t ? e.offsetWidth : e.offsetHeight,
                    r = !0,
                    o = G.support.boxSizing && "border-box" === G.css(e, "boxSizing");
                if (0 >= i || null == i) {
                    if (i = nn(e, t), (0 > i || null == i) && (i = e.style[t]), dn.test(i)) return i;
                    r = o && (G.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
                }
                return i + b(e, t, n || (o ? "border" : "content"), r) + "px"
            }

            function k(e) {
                if (pn[e]) return pn[e];
                var t = G("<" + e + ">").appendTo(z.body),
                    n = t.css("display");
                return t.remove(), ("none" === n || "" === n) && (rn = z.body.appendChild(rn || G.extend(z.createElement("iframe"), { frameBorder: 0, width: 0, height: 0 })), on && rn.createElement || (on = (rn.contentWindow || rn.contentDocument).document, on.write("<!doctype html><html><body>"), on.close()), t = on.body.appendChild(on.createElement(e)), n = nn(t, "display"), z.body.removeChild(rn)), pn[e] = n, n
            }

            function x(e, t, n, i) {
                var r;
                if (G.isArray(t)) G.each(t, function(t, r) { n || wn.test(e) ? i(e, r) : x(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i) });
                else if (n || "object" !== G.type(t)) i(e, t);
                else
                    for (r in t) x(e + "[" + r + "]", t[r], n, i)
            }

            function C(e) {
                return function(t, n) {
                    "string" != typeof t && (n = t, t = "*");
                    var i, r, o, s = t.toLowerCase().split(tt),
                        a = 0,
                        l = s.length;
                    if (G.isFunction(n))
                        for (; l > a; a++) i = s[a], o = /^\+/.test(i), o && (i = i.substr(1) || "*"), r = e[i] = e[i] || [], r[o ? "unshift" : "push"](n)
                }
            }

            function T(e, n, i, r, o, s) { o = o || n.dataTypes[0], s = s || {}, s[o] = !0; for (var a, l = e[o], u = 0, c = l ? l.length : 0, h = e === Hn; c > u && (h || !a); u++) a = l[u](n, i, r), "string" == typeof a && (!h || s[a] ? a = t : (n.dataTypes.unshift(a), a = T(e, n, i, r, a, s))); return !h && a || s["*"] || (a = T(e, n, i, r, "*", s)), a }

            function E(e, n) {
                var i, r, o = G.ajaxSettings.flatOptions || {};
                for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
                r && G.extend(!0, e, r)
            }

            function D(e, n, i) {
                var r, o, s, a, l = e.contents,
                    u = e.dataTypes,
                    c = e.responseFields;
                for (o in c) o in i && (n[c[o]] = i[o]);
                for (;
                    "*" === u[0];) u.shift(), r === t && (r = e.mimeType || n.getResponseHeader("content-type"));
                if (r)
                    for (o in l)
                        if (l[o] && l[o].test(r)) { u.unshift(o); break }
                if (u[0] in i) s = u[0];
                else {
                    for (o in i) {
                        if (!u[0] || e.converters[o + " " + u[0]]) { s = o; break }
                        a || (a = o)
                    }
                    s = s || a
                }
                return s ? (s !== u[0] && u.unshift(s), i[s]) : void 0
            }

            function S(e, t) {
                var n, i, r, o, s = e.dataTypes.slice(),
                    a = s[0],
                    l = {},
                    u = 0;
                if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), s[1])
                    for (n in e.converters) l[n.toLowerCase()] = e.converters[n];
                for (; r = s[++u];)
                    if ("*" !== r) {
                        if ("*" !== a && a !== r) {
                            if (n = l[a + " " + r] || l["* " + r], !n)
                                for (i in l)
                                    if (o = i.split(" "), o[1] === r && (n = l[a + " " + o[0]] || l["* " + o[0]])) { n === !0 ? n = l[i] : l[i] !== !0 && (r = o[0], s.splice(u--, 0, r)); break }
                            if (n !== !0)
                                if (n && e["throws"]) t = n(t);
                                else try { t = n(t) } catch (c) { return { state: "parsererror", error: n ? c : "No conversion from " + a + " to " + r } }
                        }
                        a = r
                    }
                return { state: "success", data: t }
            }

            function P() { try { return new e.XMLHttpRequest } catch (t) {} }

            function N() { try { return new e.ActiveXObject("Microsoft.XMLHTTP") } catch (t) {} }

            function I() { return setTimeout(function() { Qn = t }, 0), Qn = G.now() }

            function M(e, t) {
                G.each(t, function(t, n) {
                    for (var i = (ei[t] || []).concat(ei["*"]), r = 0, o = i.length; o > r; r++)
                        if (i[r].call(e, t, n)) return
                })
            }

            function A(e, t, n) {
                var i, r = 0,
                    o = Zn.length,
                    s = G.Deferred().always(function() { delete a.elem }),
                    a = function() { for (var t = Qn || I(), n = Math.max(0, l.startTime + l.duration - t), i = 1 - (n / l.duration || 0), r = 0, o = l.tweens.length; o > r; r++) l.tweens[r].run(i); return s.notifyWith(e, [l, i, n]), 1 > i && o ? n : (s.resolveWith(e, [l]), !1) },
                    l = s.promise({ elem: e, props: G.extend({}, t), opts: G.extend(!0, { specialEasing: {} }, n), originalProperties: t, originalOptions: n, startTime: Qn || I(), duration: n.duration, tweens: [], createTween: function(t, n) { var i = G.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing); return l.tweens.push(i), i }, stop: function(t) { for (var n = 0, i = t ? l.tweens.length : 0; i > n; n++) l.tweens[n].run(1); return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this } }),
                    u = l.props;
                for (O(u, l.opts.specialEasing); o > r; r++)
                    if (i = Zn[r].call(l, e, u, l.opts)) return i;
                return M(l, u), G.isFunction(l.opts.start) && l.opts.start.call(e, l), G.fx.timer(G.extend(a, { anim: l, queue: l.opts.queue, elem: e })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
            }

            function O(e, t) {
                var n, i, r, o, s;
                for (n in e)
                    if (i = G.camelCase(n), r = t[i], o = e[n], G.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), s = G.cssHooks[i], s && "expand" in s) { o = s.expand(o), delete e[i]; for (n in o) n in e || (e[n] = o[n], t[n] = r) } else t[i] = r
            }

            function j(e, t, n) {
                var i, r, o, s, a, l, u, c, h = this,
                    d = e.style,
                    f = {},
                    p = [],
                    g = e.nodeType && v(e);
                n.queue || (u = G._queueHooks(e, "fx"), null == u.unqueued && (u.unqueued = 0, c = u.empty.fire, u.empty.fire = function() {
                    u.unqueued || c()
                }), u.unqueued++, h.always(function() { h.always(function() { u.unqueued--, G.queue(e, "fx").length || u.empty.fire() }) })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === G.css(e, "display") && "none" === G.css(e, "float") && (G.support.inlineBlockNeedsLayout && "inline" !== k(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", G.support.shrinkWrapBlocks || h.done(function() { d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2] }));
                for (i in t)
                    if (o = t[i], Jn.exec(o)) {
                        if (delete t[i], o === (g ? "hide" : "show")) continue;
                        p.push(i)
                    }
                if (s = p.length)
                    for (a = G._data(e, "fxshow") || G._data(e, "fxshow", {}), g ? G(e).show() : h.done(function() { G(e).hide() }), h.done(function() {
                            var t;
                            G.removeData(e, "fxshow", !0);
                            for (t in f) G.style(e, t, f[t])
                        }), i = 0; s > i; i++) r = p[i], l = h.createTween(r, g ? a[r] : 0), f[r] = a[r] || G.style(e, r), r in a || (a[r] = l.start, g && (l.end = l.start, l.start = "width" === r || "height" === r ? 1 : 0))
            }

            function R(e, t, n, i, r) { return new R.prototype.init(e, t, n, i, r) }

            function H(e, t) {
                var n, i = { height: e },
                    r = 0;
                for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = vn[r], i["margin" + n] = i["padding" + n] = e;
                return t && (i.opacity = i.width = e), i
            }

            function $(e) { return G.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1 }
            var L, F, z = e.document,
                B = e.location,
                W = e.navigator,
                q = e.jQuery,
                U = e.$,
                V = Array.prototype.push,
                Y = Array.prototype.slice,
                Q = Array.prototype.indexOf,
                X = Object.prototype.toString,
                J = Object.prototype.hasOwnProperty,
                K = String.prototype.trim,
                G = function(e, t) { return new G.fn.init(e, t, L) },
                Z = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
                et = /\S/,
                tt = /\s+/,
                nt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                it = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                rt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
                ot = /^[\],:{}\s]*$/,
                st = /(?:^|:|,)(?:\s*\[)+/g,
                at = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
                lt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
                ut = /^-ms-/,
                ct = /-([\da-z])/gi,
                ht = function(e, t) { return (t + "").toUpperCase() },
                dt = function() { z.addEventListener ? (z.removeEventListener("DOMContentLoaded", dt, !1), G.ready()) : "complete" === z.readyState && (z.detachEvent("onreadystatechange", dt), G.ready()) },
                ft = {};
            G.fn = G.prototype = {
                constructor: G,
                init: function(e, n, i) {
                    var r, o, s;
                    if (!e) return this;
                    if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
                    if ("string" == typeof e) {
                        if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : it.exec(e), !r || !r[1] && n) return !n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e);
                        if (r[1]) return n = n instanceof G ? n[0] : n, s = n && n.nodeType ? n.ownerDocument || n : z, e = G.parseHTML(r[1], s, !0), rt.test(r[1]) && G.isPlainObject(n) && this.attr.call(e, n, !0), G.merge(this, e);
                        if (o = z.getElementById(r[2]), o && o.parentNode) {
                            if (o.id !== r[2]) return i.find(e);
                            this.length = 1, this[0] = o
                        }
                        return this.context = z, this.selector = e, this
                    }
                    return G.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), G.makeArray(e, this))
                },
                selector: "",
                jquery: "1.8.2",
                length: 0,
                size: function() { return this.length },
                toArray: function() { return Y.call(this) },
                get: function(e) { return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e] },
                pushStack: function(e, t, n) { var i = G.merge(this.constructor(), e); return i.prevObject = this, i.context = this.context, "find" === t ? i.selector = this.selector + (this.selector ? " " : "") + n : t && (i.selector = this.selector + "." + t + "(" + n + ")"), i },
                each: function(e, t) { return G.each(this, e, t) },
                ready: function(e) { return G.ready.promise().done(e), this },
                eq: function(e) { return e = +e, -1 === e ? this.slice(e) : this.slice(e, e + 1) },
                first: function() { return this.eq(0) },
                last: function() { return this.eq(-1) },
                slice: function() { return this.pushStack(Y.apply(this, arguments), "slice", Y.call(arguments).join(",")) },
                map: function(e) { return this.pushStack(G.map(this, function(t, n) { return e.call(t, n, t) })) },
                end: function() { return this.prevObject || this.constructor(null) },
                push: V,
                sort: [].sort,
                splice: [].splice
            }, G.fn.init.prototype = G.fn, G.extend = G.fn.extend = function() {
                var e, n, i, r, o, s, a = arguments[0] || {},
                    l = 1,
                    u = arguments.length,
                    c = !1;
                for ("boolean" == typeof a && (c = a, a = arguments[1] || {}, l = 2), "object" == typeof a || G.isFunction(a) || (a = {}), u === l && (a = this, --l); u > l; l++)
                    if (null != (e = arguments[l]))
                        for (n in e) i = a[n], r = e[n], a !== r && (c && r && (G.isPlainObject(r) || (o = G.isArray(r))) ? (o ? (o = !1, s = i && G.isArray(i) ? i : []) : s = i && G.isPlainObject(i) ? i : {}, a[n] = G.extend(c, s, r)) : r !== t && (a[n] = r));
                return a
            }, G.extend({
                noConflict: function(t) { return e.$ === G && (e.$ = U), t && e.jQuery === G && (e.jQuery = q), G },
                isReady: !1,
                readyWait: 1,
                holdReady: function(e) { e ? G.readyWait++ : G.ready(!0) },
                ready: function(e) {
                    if (e === !0 ? !--G.readyWait : !G.isReady) {
                        if (!z.body) return setTimeout(G.ready, 1);
                        G.isReady = !0, e !== !0 && --G.readyWait > 0 || (F.resolveWith(z, [G]), G.fn.trigger && G(z).trigger("ready").off("ready"))
                    }
                },
                isFunction: function(e) { return "function" === G.type(e) },
                isArray: Array.isArray || function(e) { return "array" === G.type(e) },
                isWindow: function(e) { return null != e && e == e.window },
                isNumeric: function(e) { return !isNaN(parseFloat(e)) && isFinite(e) },
                type: function(e) { return null == e ? String(e) : ft[X.call(e)] || "object" },
                isPlainObject: function(e) { if (!e || "object" !== G.type(e) || e.nodeType || G.isWindow(e)) return !1; try { if (e.constructor && !J.call(e, "constructor") && !J.call(e.constructor.prototype, "isPrototypeOf")) return !1 } catch (n) { return !1 } var i; for (i in e); return i === t || J.call(e, i) },
                isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 },
                error: function(e) { throw new Error(e) },
                parseHTML: function(e, t, n) { var i; return e && "string" == typeof e ? ("boolean" == typeof t && (n = t, t = 0), t = t || z, (i = rt.exec(e)) ? [t.createElement(i[1])] : (i = G.buildFragment([e], t, n ? null : []), G.merge([], (i.cacheable ? G.clone(i.fragment) : i.fragment).childNodes))) : null },
                parseJSON: function(t) { return t && "string" == typeof t ? (t = G.trim(t), e.JSON && e.JSON.parse ? e.JSON.parse(t) : ot.test(t.replace(at, "@").replace(lt, "]").replace(st, "")) ? new Function("return " + t)() : (G.error("Invalid JSON: " + t), void 0)) : null },
                parseXML: function(n) { var i, r; if (!n || "string" != typeof n) return null; try { e.DOMParser ? (r = new DOMParser, i = r.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n)) } catch (o) { i = t } return i && i.documentElement && !i.getElementsByTagName("parsererror").length || G.error("Invalid XML: " + n), i },
                noop: function() {},
                globalEval: function(t) { t && et.test(t) && (e.execScript || function(t) { e.eval.call(e, t) })(t) },
                camelCase: function(e) { return e.replace(ut, "ms-").replace(ct, ht) },
                nodeName: function(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() },
                each: function(e, n, i) {
                    var r, o = 0,
                        s = e.length,
                        a = s === t || G.isFunction(e);
                    if (i)
                        if (a) {
                            for (r in e)
                                if (n.apply(e[r], i) === !1) break
                        } else
                            for (; s > o && n.apply(e[o++], i) !== !1;);
                    else if (a) {
                        for (r in e)
                            if (n.call(e[r], r, e[r]) === !1) break
                    } else
                        for (; s > o && n.call(e[o], o, e[o++]) !== !1;);
                    return e
                },
                trim: K && !K.call("ï»¿Â ") ? function(e) { return null == e ? "" : K.call(e) } : function(e) { return null == e ? "" : (e + "").replace(nt, "") },
                makeArray: function(e, t) { var n, i = t || []; return null != e && (n = G.type(e), null == e.length || "string" === n || "function" === n || "regexp" === n || G.isWindow(e) ? V.call(i, e) : G.merge(i, e)), i },
                inArray: function(e, t, n) {
                    var i;
                    if (t) {
                        if (Q) return Q.call(t, e, n);
                        for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                            if (n in t && t[n] === e) return n
                    }
                    return -1
                },
                merge: function(e, n) {
                    var i = n.length,
                        r = e.length,
                        o = 0;
                    if ("number" == typeof i)
                        for (; i > o; o++) e[r++] = n[o];
                    else
                        for (; n[o] !== t;) e[r++] = n[o++];
                    return e.length = r, e
                },
                grep: function(e, t, n) {
                    var i, r = [],
                        o = 0,
                        s = e.length;
                    for (n = !!n; s > o; o++) i = !!t(e[o], o), n !== i && r.push(e[o]);
                    return r
                },
                map: function(e, n, i) {
                    var r, o, s = [],
                        a = 0,
                        l = e.length,
                        u = e instanceof G || l !== t && "number" == typeof l && (l > 0 && e[0] && e[l - 1] || 0 === l || G.isArray(e));
                    if (u)
                        for (; l > a; a++) r = n(e[a], a, i), null != r && (s[s.length] = r);
                    else
                        for (o in e) r = n(e[o], o, i), null != r && (s[s.length] = r);
                    return s.concat.apply([], s)
                },
                guid: 1,
                proxy: function(e, n) { var i, r, o; return "string" == typeof n && (i = e[n], n = e, e = i), G.isFunction(e) ? (r = Y.call(arguments, 2), o = function() { return e.apply(n, r.concat(Y.call(arguments))) }, o.guid = e.guid = e.guid || G.guid++, o) : t },
                access: function(e, n, i, r, o, s, a) {
                    var l, u = null == i,
                        c = 0,
                        h = e.length;
                    if (i && "object" == typeof i) {
                        for (c in i) G.access(e, n, c, i[c], 1, s, r);
                        o = 1
                    } else if (r !== t) {
                        if (l = a === t && G.isFunction(r), u && (l ? (l = n, n = function(e, t, n) { return l.call(G(e), n) }) : (n.call(e, r), n = null)), n)
                            for (; h > c; c++) n(e[c], i, l ? r.call(e[c], c, n(e[c], i)) : r, a);
                        o = 1
                    }
                    return o ? e : u ? n.call(e) : h ? n(e[0], i) : s
                },
                now: function() { return (new Date).getTime() }
            }), G.ready.promise = function(t) {
                if (!F)
                    if (F = G.Deferred(), "complete" === z.readyState) setTimeout(G.ready, 1);
                    else if (z.addEventListener) z.addEventListener("DOMContentLoaded", dt, !1), e.addEventListener("load", G.ready, !1);
                else {
                    z.attachEvent("onreadystatechange", dt), e.attachEvent("onload", G.ready);
                    var n = !1;
                    try { n = null == e.frameElement && z.documentElement } catch (i) {}
                    n && n.doScroll && ! function r() {
                        if (!G.isReady) {
                            try { n.doScroll("left") } catch (e) { return setTimeout(r, 50) }
                            G.ready()
                        }
                    }()
                }
                return F.promise(t)
            }, G.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) { ft["[object " + t + "]"] = t.toLowerCase() }), L = G(z);
            var pt = {};
            G.Callbacks = function(e) {
                e = "string" == typeof e ? pt[e] || n(e) : G.extend({}, e);
                var i, r, o, s, a, l, u = [],
                    c = !e.once && [],
                    h = function(t) {
                        for (i = e.memory && t, r = !0, l = s || 0, s = 0, a = u.length, o = !0; u && a > l; l++)
                            if (u[l].apply(t[0], t[1]) === !1 && e.stopOnFalse) { i = !1; break }
                        o = !1, u && (c ? c.length && h(c.shift()) : i ? u = [] : d.disable())
                    },
                    d = {
                        add: function() { if (u) { var t = u.length;! function n(t) { G.each(t, function(t, i) { var r = G.type(i); "function" !== r || e.unique && d.has(i) ? i && i.length && "string" !== r && n(i) : u.push(i) }) }(arguments), o ? a = u.length : i && (s = t, h(i)) } return this },
                        remove: function() {
                            return u && G.each(arguments, function(e, t) {
                                for (var n;
                                    (n = G.inArray(t, u, n)) > -1;) u.splice(n, 1), o && (a >= n && a--, l >= n && l--)
                            }), this
                        },
                        has: function(e) { return G.inArray(e, u) > -1 },
                        empty: function() { return u = [], this },
                        disable: function() { return u = c = i = t, this },
                        disabled: function() { return !u },
                        lock: function() { return c = t, i || d.disable(), this },
                        locked: function() { return !c },
                        fireWith: function(e, t) { return t = t || [], t = [e, t.slice ? t.slice() : t], !u || r && !c || (o ? c.push(t) : h(t)), this },
                        fire: function() { return d.fireWith(this, arguments), this },
                        fired: function() { return !!r }
                    };
                return d
            }, G.extend({
                Deferred: function(e) {
                    var t = [
                            ["resolve", "done", G.Callbacks("once memory"), "resolved"],
                            ["reject", "fail", G.Callbacks("once memory"), "rejected"],
                            ["notify", "progress", G.Callbacks("memory")]
                        ],
                        n = "pending",
                        i = {
                            state: function() { return n },
                            always: function() { return r.done(arguments).fail(arguments), this },
                            then: function() {
                                var e = arguments;
                                return G.Deferred(function(n) {
                                    G.each(t, function(t, i) {
                                        var o = i[0],
                                            s = e[t];
                                        r[i[1]](G.isFunction(s) ? function() {
                                            var e = s.apply(this, arguments);
                                            e && G.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === r ? n : this, [e])
                                        } : n[o])
                                    }), e = null
                                }).promise()
                            },
                            promise: function(e) { return null != e ? G.extend(e, i) : i }
                        },
                        r = {};
                    return i.pipe = i.then, G.each(t, function(e, o) {
                        var s = o[2],
                            a = o[3];
                        i[o[1]] = s.add, a && s.add(function() { n = a }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = s.fire, r[o[0] + "With"] = s.fireWith
                    }), i.promise(r), e && e.call(r, r), r
                },
                when: function(e) {
                    var t, n, i, r = 0,
                        o = Y.call(arguments),
                        s = o.length,
                        a = 1 !== s || e && G.isFunction(e.promise) ? s : 0,
                        l = 1 === a ? e : G.Deferred(),
                        u = function(e, n, i) { return function(r) { n[e] = this, i[e] = arguments.length > 1 ? Y.call(arguments) : r, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i) } };
                    if (s > 1)
                        for (t = new Array(s), n = new Array(s), i = new Array(s); s > r; r++) o[r] && G.isFunction(o[r].promise) ? o[r].promise().done(u(r, i, o)).fail(l.reject).progress(u(r, n, t)) : --a;
                    return a || l.resolveWith(i, o), l.promise()
                }
            }), G.support = function() {
                var t, n, i, r, o, s, a, l, u, c, h, d = z.createElement("div");
                if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*"), i = d.getElementsByTagName("a")[0], i.style.cssText = "top:1px;float:left;opacity:.5", !n || !n.length) return {};
                r = z.createElement("select"), o = r.appendChild(z.createElement("option")), s = d.getElementsByTagName("input")[0], t = { leadingWhitespace: 3 === d.firstChild.nodeType, tbody: !d.getElementsByTagName("tbody").length, htmlSerialize: !!d.getElementsByTagName("link").length, style: /top/.test(i.getAttribute("style")), hrefNormalized: "/a" === i.getAttribute("href"), opacity: /^0.5/.test(i.style.opacity), cssFloat: !!i.style.cssFloat, checkOn: "on" === s.value, optSelected: o.selected, getSetAttribute: "t" !== d.className, enctype: !!z.createElement("form").enctype, html5Clone: "<:nav></:nav>" !== z.createElement("nav").cloneNode(!0).outerHTML, boxModel: "CSS1Compat" === z.compatMode, submitBubbles: !0, changeBubbles: !0, focusinBubbles: !1, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, boxSizingReliable: !0, pixelPosition: !1 }, s.checked = !0, t.noCloneChecked = s.cloneNode(!0).checked, r.disabled = !0, t.optDisabled = !o.disabled;
                try { delete d.test } catch (f) { t.deleteExpando = !1 }
                if (!d.addEventListener && d.attachEvent && d.fireEvent && (d.attachEvent("onclick", h = function() { t.noCloneEvent = !1 }), d.cloneNode(!0).fireEvent("onclick"), d.detachEvent("onclick", h)), s = z.createElement("input"), s.value = "t", s.setAttribute("type", "radio"), t.radioValue = "t" === s.value, s.setAttribute("checked", "checked"), s.setAttribute("name", "t"), d.appendChild(s), a = z.createDocumentFragment(), a.appendChild(d.lastChild), t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = s.checked, a.removeChild(s), a.appendChild(d), d.attachEvent)
                    for (u in { submit: !0, change: !0, focusin: !0 }) l = "on" + u, c = l in d, c || (d.setAttribute(l, "return;"), c = "function" == typeof d[l]), t[u + "Bubbles"] = c;
                return G(function() {
                    var n, i, r, o, s = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                        a = z.getElementsByTagName("body")[0];
                    a && (n = z.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", a.insertBefore(n, a.firstChild), i = z.createElement("div"), n.appendChild(i), i.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = i.getElementsByTagName("td"), r[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === r[0].offsetHeight, r[0].style.display = "", r[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === r[0].offsetHeight, i.innerHTML = "", i.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === i.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== a.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(i, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(i, null) || { width: "4px" }).width, o = z.createElement("div"), o.style.cssText = i.style.cssText = s, o.style.marginRight = o.style.width = "0", i.style.width = "1px", i.appendChild(o), t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), "undefined" != typeof i.style.zoom && (i.innerHTML = "", i.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === i.offsetWidth, i.style.display = "block", i.style.overflow = "visible", i.innerHTML = "<div></div>", i.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== i.offsetWidth, n.style.zoom = 1), a.removeChild(n), n = i = r = o = null)
                }), a.removeChild(d), n = i = r = o = s = a = d = null, t
            }();
            var gt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
                mt = /([A-Z])/g;
            G.extend({
                cache: {},
                deletedIds: [],
                uuid: 0,
                expando: "jQuery" + (G.fn.jquery + Math.random()).replace(/\D/g, ""),
                noData: { embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0 },
                hasData: function(e) { return e = e.nodeType ? G.cache[e[G.expando]] : e[G.expando], !!e && !r(e) },
                data: function(e, n, i, r) {
                    if (G.acceptData(e)) {
                        var o, s, a = G.expando,
                            l = "string" == typeof n,
                            u = e.nodeType,
                            c = u ? G.cache : e,
                            h = u ? e[a] : e[a] && a;
                        if (h && c[h] && (r || c[h].data) || !l || i !== t) return h || (u ? e[a] = h = G.deletedIds.pop() || G.guid++ : h = a), c[h] || (c[h] = {}, u || (c[h].toJSON = G.noop)), ("object" == typeof n || "function" == typeof n) && (r ? c[h] = G.extend(c[h], n) : c[h].data = G.extend(c[h].data, n)), o = c[h], r || (o.data || (o.data = {}), o = o.data), i !== t && (o[G.camelCase(n)] = i), l ? (s = o[n], null == s && (s = o[G.camelCase(n)])) : s = o, s
                    }
                },
                removeData: function(e, t, n) {
                    if (G.acceptData(e)) {
                        var i, o, s, a = e.nodeType,
                            l = a ? G.cache : e,
                            u = a ? e[G.expando] : G.expando;
                        if (l[u]) { if (t && (i = n ? l[u] : l[u].data)) { G.isArray(t) || (t in i ? t = [t] : (t = G.camelCase(t), t = t in i ? [t] : t.split(" "))); for (o = 0, s = t.length; s > o; o++) delete i[t[o]]; if (!(n ? r : G.isEmptyObject)(i)) return }(n || (delete l[u].data, r(l[u]))) && (a ? G.cleanData([e], !0) : G.support.deleteExpando || l != l.window ? delete l[u] : l[u] = null) }
                    }
                },
                _data: function(e, t, n) { return G.data(e, t, n, !0) },
                acceptData: function(e) { var t = e.nodeName && G.noData[e.nodeName.toLowerCase()]; return !t || t !== !0 && e.getAttribute("classid") === t }
            }), G.fn.extend({
                data: function(e, n) {
                    var r, o, s, a, l, u = this[0],
                        c = 0,
                        h = null;
                    if (e === t) {
                        if (this.length && (h = G.data(u), 1 === u.nodeType && !G._data(u, "parsedAttrs"))) {
                            for (s = u.attributes, l = s.length; l > c; c++) a = s[c].name, a.indexOf("data-") || (a = G.camelCase(a.substring(5)), i(u, a, h[a]));
                            G._data(u, "parsedAttrs", !0)
                        }
                        return h
                    }
                    return "object" == typeof e ? this.each(function() { G.data(this, e) }) : (r = e.split(".", 2), r[1] = r[1] ? "." + r[1] : "", o = r[1] + "!", G.access(this, function(n) {
                        return n === t ? (h = this.triggerHandler("getData" + o, [r[0]]), h === t && u && (h = G.data(u, e), h = i(u, e, h)), h === t && r[1] ? this.data(r[0]) : h) : (r[1] = n, this.each(function() {
                            var t = G(this);
                            t.triggerHandler("setData" + o, r), G.data(this, e, n), t.triggerHandler("changeData" + o, r)
                        }), void 0)
                    }, null, n, arguments.length > 1, null, !1))
                },
                removeData: function(e) { return this.each(function() { G.removeData(this, e) }) }
            }), G.extend({
                queue: function(e, t, n) { var i; return e ? (t = (t || "fx") + "queue", i = G._data(e, t), n && (!i || G.isArray(n) ? i = G._data(e, t, G.makeArray(n)) : i.push(n)), i || []) : void 0 },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = G.queue(e, t),
                        i = n.length,
                        r = n.shift(),
                        o = G._queueHooks(e, t),
                        s = function() { G.dequeue(e, t) };
                    "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, s, o)), !i && o && o.empty.fire()
                },
                _queueHooks: function(e, t) { var n = t + "queueHooks"; return G._data(e, n) || G._data(e, n, { empty: G.Callbacks("once memory").add(function() { G.removeData(e, t + "queue", !0), G.removeData(e, n, !0) }) }) }
            }), G.fn.extend({
                queue: function(e, n) {
                    var i = 2;
                    return "string" != typeof e && (n = e, e = "fx", i--), arguments.length < i ? G.queue(this[0], e) : n === t ? this : this.each(function() {
                        var t = G.queue(this, e, n);
                        G._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && G.dequeue(this, e)
                    })
                },
                dequeue: function(e) { return this.each(function() { G.dequeue(this, e) }) },
                delay: function(e, t) {
                    return e = G.fx ? G.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                        var i = setTimeout(t, e);
                        n.stop = function() { clearTimeout(i) }
                    })
                },
                clearQueue: function(e) { return this.queue(e || "fx", []) },
                promise: function(e, n) {
                    var i, r = 1,
                        o = G.Deferred(),
                        s = this,
                        a = this.length,
                        l = function() {--r || o.resolveWith(s, [s]) };
                    for ("string" != typeof e && (n = e, e = t), e = e || "fx"; a--;) i = G._data(s[a], e + "queueHooks"), i && i.empty && (r++, i.empty.add(l));
                    return l(), o.promise(n)
                }
            });
            var vt, _t, yt, bt = /[\t\r\n]/g,
                wt = /\r/g,
                kt = /^(?:button|input)$/i,
                xt = /^(?:button|input|object|select|textarea)$/i,
                Ct = /^a(?:rea|)$/i,
                Tt = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
                Et = G.support.getSetAttribute;
            G.fn.extend({
                attr: function(e, t) { return G.access(this, G.attr, e, t, arguments.length > 1) },
                removeAttr: function(e) { return this.each(function() { G.removeAttr(this, e) }) },
                prop: function(e, t) { return G.access(this, G.prop, e, t, arguments.length > 1) },
                removeProp: function(e) { return e = G.propFix[e] || e, this.each(function() { try { this[e] = t, delete this[e] } catch (n) {} }) },
                addClass: function(e) {
                    var t, n, i, r, o, s, a;
                    if (G.isFunction(e)) return this.each(function(t) { G(this).addClass(e.call(this, t, this.className)) });
                    if (e && "string" == typeof e)
                        for (t = e.split(tt), n = 0, i = this.length; i > n; n++)
                            if (r = this[n], 1 === r.nodeType)
                                if (r.className || 1 !== t.length) {
                                    for (o = " " + r.className + " ", s = 0, a = t.length; a > s; s++) o.indexOf(" " + t[s] + " ") < 0 && (o += t[s] + " ");
                                    r.className = G.trim(o)
                                } else r.className = e;
                    return this
                },
                removeClass: function(e) {
                    var n, i, r, o, s, a, l;
                    if (G.isFunction(e)) return this.each(function(t) { G(this).removeClass(e.call(this, t, this.className)) });
                    if (e && "string" == typeof e || e === t)
                        for (n = (e || "").split(tt), a = 0, l = this.length; l > a; a++)
                            if (r = this[a], 1 === r.nodeType && r.className) {
                                for (i = (" " + r.className + " ").replace(bt, " "), o = 0, s = n.length; s > o; o++)
                                    for (; i.indexOf(" " + n[o] + " ") >= 0;) i = i.replace(" " + n[o] + " ", " ");
                                r.className = e ? G.trim(i) : ""
                            }
                    return this
                },
                toggleClass: function(e, t) {
                    var n = typeof e,
                        i = "boolean" == typeof t;
                    return G.isFunction(e) ? this.each(function(n) { G(this).toggleClass(e.call(this, n, this.className, t), t) }) : this.each(function() {
                        if ("string" === n)
                            for (var r, o = 0, s = G(this), a = t, l = e.split(tt); r = l[o++];) a = i ? a : !s.hasClass(r), s[a ? "addClass" : "removeClass"](r);
                        else("undefined" === n || "boolean" === n) && (this.className && G._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : G._data(this, "__className__") || "")
                    })
                },
                hasClass: function(e) {
                    for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                        if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(bt, " ").indexOf(t) >= 0) return !0;
                    return !1
                },
                val: function(e) {
                    var n, i, r, o = this[0]; {
                        if (arguments.length) return r = G.isFunction(e), this.each(function(i) {
                            var o, s = G(this);
                            1 === this.nodeType && (o = r ? e.call(this, i, s.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : G.isArray(o) && (o = G.map(o, function(e) { return null == e ? "" : e + "" })), n = G.valHooks[this.type] || G.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, o, "value") !== t || (this.value = o))
                        });
                        if (o) return n = G.valHooks[o.type] || G.valHooks[o.nodeName.toLowerCase()], n && "get" in n && (i = n.get(o, "value")) !== t ? i : (i = o.value, "string" == typeof i ? i.replace(wt, "") : null == i ? "" : i)
                    }
                }
            }), G.extend({
                valHooks: {
                    option: { get: function(e) { var t = e.attributes.value; return !t || t.specified ? e.value : e.text } },
                    select: {
                        get: function(e) {
                            var t, n, i, r, o = e.selectedIndex,
                                s = [],
                                a = e.options,
                                l = "select-one" === e.type;
                            if (0 > o) return null;
                            for (n = l ? o : 0, i = l ? o + 1 : a.length; i > n; n++)
                                if (r = a[n], !(!r.selected || (G.support.optDisabled ? r.disabled : null !== r.getAttribute("disabled")) || r.parentNode.disabled && G.nodeName(r.parentNode, "optgroup"))) {
                                    if (t = G(r).val(), l) return t;
                                    s.push(t)
                                }
                            return l && !s.length && a.length ? G(a[o]).val() : s
                        },
                        set: function(e, t) { var n = G.makeArray(t); return G(e).find("option").each(function() { this.selected = G.inArray(G(this).val(), n) >= 0 }), n.length || (e.selectedIndex = -1), n }
                    }
                },
                attrFn: {},
                attr: function(e, n, i, r) { var o, s, a, l = e.nodeType; if (e && 3 !== l && 8 !== l && 2 !== l) return r && G.isFunction(G.fn[n]) ? G(e)[n](i) : "undefined" == typeof e.getAttribute ? G.prop(e, n, i) : (a = 1 !== l || !G.isXMLDoc(e), a && (n = n.toLowerCase(), s = G.attrHooks[n] || (Tt.test(n) ? _t : vt)), i !== t ? null === i ? (G.removeAttr(e, n), void 0) : s && "set" in s && a && (o = s.set(e, i, n)) !== t ? o : (e.setAttribute(n, i + ""), i) : s && "get" in s && a && null !== (o = s.get(e, n)) ? o : (o = e.getAttribute(n), null === o ? t : o)) },
                removeAttr: function(e, t) {
                    var n, i, r, o, s = 0;
                    if (t && 1 === e.nodeType)
                        for (i = t.split(tt); s < i.length; s++) r = i[s], r && (n = G.propFix[r] || r, o = Tt.test(r), o || G.attr(e, r, ""), e.removeAttribute(Et ? r : n), o && n in e && (e[n] = !1))
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (kt.test(e.nodeName) && e.parentNode) G.error("type property can't be changed");
                            else if (!G.support.radioValue && "radio" === t && G.nodeName(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t }
                        }
                    },
                    value: { get: function(e, t) { return vt && G.nodeName(e, "button") ? vt.get(e, t) : t in e ? e.value : null }, set: function(e, t, n) { return vt && G.nodeName(e, "button") ? vt.set(e, t, n) : (e.value = t, void 0) } }
                },
                propFix: { tabindex: "tabIndex", readonly: "readOnly", "for": "htmlFor", "class": "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" },
                prop: function(e, n, i) { var r, o, s, a = e.nodeType; if (e && 3 !== a && 8 !== a && 2 !== a) return s = 1 !== a || !G.isXMLDoc(e), s && (n = G.propFix[n] || n, o = G.propHooks[n]), i !== t ? o && "set" in o && (r = o.set(e, i, n)) !== t ? r : e[n] = i : o && "get" in o && null !== (r = o.get(e, n)) ? r : e[n] },
                propHooks: { tabIndex: { get: function(e) { var n = e.getAttributeNode("tabindex"); return n && n.specified ? parseInt(n.value, 10) : xt.test(e.nodeName) || Ct.test(e.nodeName) && e.href ? 0 : t } } }
            }), _t = { get: function(e, n) { var i, r = G.prop(e, n); return r === !0 || "boolean" != typeof r && (i = e.getAttributeNode(n)) && i.nodeValue !== !1 ? n.toLowerCase() : t }, set: function(e, t, n) { var i; return t === !1 ? G.removeAttr(e, n) : (i = G.propFix[n] || n, i in e && (e[i] = !0), e.setAttribute(n, n.toLowerCase())), n } }, Et || (yt = { name: !0, id: !0, coords: !0 }, vt = G.valHooks.button = { get: function(e, n) { var i; return i = e.getAttributeNode(n), i && (yt[n] ? "" !== i.value : i.specified) ? i.value : t }, set: function(e, t, n) { var i = e.getAttributeNode(n); return i || (i = z.createAttribute(n), e.setAttributeNode(i)), i.value = t + "" } }, G.each(["width", "height"], function(e, t) { G.attrHooks[t] = G.extend(G.attrHooks[t], { set: function(e, n) { return "" === n ? (e.setAttribute(t, "auto"), n) : void 0 } }) }), G.attrHooks.contenteditable = { get: vt.get, set: function(e, t, n) { "" === t && (t = "false"), vt.set(e, t, n) } }), G.support.hrefNormalized || G.each(["href", "src", "width", "height"], function(e, n) { G.attrHooks[n] = G.extend(G.attrHooks[n], { get: function(e) { var i = e.getAttribute(n, 2); return null === i ? t : i } }) }), G.support.style || (G.attrHooks.style = { get: function(e) { return e.style.cssText.toLowerCase() || t }, set: function(e, t) { return e.style.cssText = t + "" } }), G.support.optSelected || (G.propHooks.selected = G.extend(G.propHooks.selected, { get: function(e) { var t = e.parentNode; return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null } })), G.support.enctype || (G.propFix.enctype = "encoding"), G.support.checkOn || G.each(["radio", "checkbox"], function() { G.valHooks[this] = { get: function(e) { return null === e.getAttribute("value") ? "on" : e.value } } }), G.each(["radio", "checkbox"], function() { G.valHooks[this] = G.extend(G.valHooks[this], { set: function(e, t) { return G.isArray(t) ? e.checked = G.inArray(G(e).val(), t) >= 0 : void 0 } }) });
            var Dt = /^(?:textarea|input|select)$/i,
                St = /^([^\.]*|)(?:\.(.+)|)$/,
                Pt = /(?:^|\s)hover(\.\S+|)\b/,
                Nt = /^key/,
                It = /^(?:mouse|contextmenu)|click/,
                Mt = /^(?:focusinfocus|focusoutblur)$/,
                At = function(e) { return G.event.special.hover ? e : e.replace(Pt, "mouseenter$1 mouseleave$1") };
            G.event = {
                    add: function(e, n, i, r, o) {
                        var s, a, l, u, c, h, d, f, p, g, m;
                        if (3 !== e.nodeType && 8 !== e.nodeType && n && i && (s = G._data(e))) {
                            for (i.handler && (p = i, i = p.handler, o = p.selector), i.guid || (i.guid = G.guid++), l = s.events, l || (s.events = l = {}), a = s.handle, a || (s.handle = a = function(e) { return "undefined" == typeof G || e && G.event.triggered === e.type ? t : G.event.dispatch.apply(a.elem, arguments) }, a.elem = e), n = G.trim(At(n)).split(" "), u = 0; u < n.length; u++) c = St.exec(n[u]) || [], h = c[1], d = (c[2] || "").split(".").sort(), m = G.event.special[h] || {}, h = (o ? m.delegateType : m.bindType) || h, m = G.event.special[h] || {}, f = G.extend({ type: h, origType: c[1], data: r, handler: i, guid: i.guid, selector: o, needsContext: o && G.expr.match.needsContext.test(o), namespace: d.join(".") }, p), g = l[h], g || (g = l[h] = [], g.delegateCount = 0, m.setup && m.setup.call(e, r, d, a) !== !1 || (e.addEventListener ? e.addEventListener(h, a, !1) : e.attachEvent && e.attachEvent("on" + h, a))), m.add && (m.add.call(e, f), f.handler.guid || (f.handler.guid = i.guid)), o ? g.splice(g.delegateCount++, 0, f) : g.push(f), G.event.global[h] = !0;
                            e = null
                        }
                    },
                    global: {},
                    remove: function(e, t, n, i, r) {
                        var o, s, a, l, u, c, h, d, f, p, g, m = G.hasData(e) && G._data(e);
                        if (m && (d = m.events)) {
                            for (t = G.trim(At(t || "")).split(" "), o = 0; o < t.length; o++)
                                if (s = St.exec(t[o]) || [], a = l = s[1], u = s[2], a) {
                                    for (f = G.event.special[a] || {}, a = (i ? f.delegateType : f.bindType) || a, p = d[a] || [], c = p.length, u = u ? new RegExp("(^|\\.)" + u.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, h = 0; h < p.length; h++) g = p[h], !r && l !== g.origType || n && n.guid !== g.guid || u && !u.test(g.namespace) || i && i !== g.selector && ("**" !== i || !g.selector) || (p.splice(h--, 1), g.selector && p.delegateCount--, f.remove && f.remove.call(e, g));
                                    0 === p.length && c !== p.length && (f.teardown && f.teardown.call(e, u, m.handle) !== !1 || G.removeEvent(e, a, m.handle), delete d[a])
                                } else
                                    for (a in d) G.event.remove(e, a + t[o], n, i, !0);
                            G.isEmptyObject(d) && (delete m.handle, G.removeData(e, "events", !0))
                        }
                    },
                    customEvent: { getData: !0, setData: !0, changeData: !0 },
                    trigger: function(n, i, r, o) {
                        if (!r || 3 !== r.nodeType && 8 !== r.nodeType) {
                            var s, a, l, u, c, h, d, f, p, g, m = n.type || n,
                                v = [];
                            if (!Mt.test(m + G.event.triggered) && (m.indexOf("!") >= 0 && (m = m.slice(0, -1), a = !0), m.indexOf(".") >= 0 && (v = m.split("."), m = v.shift(), v.sort()), r && !G.event.customEvent[m] || G.event.global[m]))
                                if (n = "object" == typeof n ? n[G.expando] ? n : new G.Event(m, n) : new G.Event(m), n.type = m, n.isTrigger = !0, n.exclusive = a, n.namespace = v.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, h = m.indexOf(":") < 0 ? "on" + m : "", r) {
                                    if (n.result = t, n.target || (n.target = r), i = null != i ? G.makeArray(i) : [], i.unshift(n), d = G.event.special[m] || {}, !d.trigger || d.trigger.apply(r, i) !== !1) {
                                        if (p = [
                                                [r, d.bindType || m]
                                            ], !o && !d.noBubble && !G.isWindow(r)) {
                                            for (g = d.delegateType || m, u = Mt.test(g + m) ? r : r.parentNode, c = r; u; u = u.parentNode) p.push([u, g]), c = u;
                                            c === (r.ownerDocument || z) && p.push([c.defaultView || c.parentWindow || e, g])
                                        }
                                        for (l = 0; l < p.length && !n.isPropagationStopped(); l++) u = p[l][0], n.type = p[l][1], f = (G._data(u, "events") || {})[n.type] && G._data(u, "handle"), f && f.apply(u, i), f = h && u[h], f && G.acceptData(u) && f.apply && f.apply(u, i) === !1 && n.preventDefault();
                                        return n.type = m, o || n.isDefaultPrevented() || d._default && d._default.apply(r.ownerDocument, i) !== !1 || "click" === m && G.nodeName(r, "a") || !G.acceptData(r) || h && r[m] && ("focus" !== m && "blur" !== m || 0 !== n.target.offsetWidth) && !G.isWindow(r) && (c = r[h], c && (r[h] = null), G.event.triggered = m, r[m](), G.event.triggered = t, c && (r[h] = c)), n.result
                                    }
                                } else { s = G.cache; for (l in s) s[l].events && s[l].events[m] && G.event.trigger(n, i, s[l].handle.elem, !0) }
                        }
                    },
                    dispatch: function(n) {
                        n = G.event.fix(n || e.event);
                        var i, r, o, s, a, l, u, c, h, d = (G._data(this, "events") || {})[n.type] || [],
                            f = d.delegateCount,
                            p = Y.call(arguments),
                            g = !n.exclusive && !n.namespace,
                            m = G.event.special[n.type] || {},
                            v = [];
                        if (p[0] = n, n.delegateTarget = this, !m.preDispatch || m.preDispatch.call(this, n) !== !1) {
                            if (f && (!n.button || "click" !== n.type))
                                for (o = n.target; o != this; o = o.parentNode || this)
                                    if (o.disabled !== !0 || "click" !== n.type) {
                                        for (a = {}, u = [], i = 0; f > i; i++) c = d[i], h = c.selector, a[h] === t && (a[h] = c.needsContext ? G(h, this).index(o) >= 0 : G.find(h, this, null, [o]).length), a[h] && u.push(c);
                                        u.length && v.push({ elem: o, matches: u })
                                    }
                            for (d.length > f && v.push({ elem: this, matches: d.slice(f) }), i = 0; i < v.length && !n.isPropagationStopped(); i++)
                                for (l = v[i], n.currentTarget = l.elem, r = 0; r < l.matches.length && !n.isImmediatePropagationStopped(); r++) c = l.matches[r], (g || !n.namespace && !c.namespace || n.namespace_re && n.namespace_re.test(c.namespace)) && (n.data = c.data, n.handleObj = c, s = ((G.event.special[c.origType] || {}).handle || c.handler).apply(l.elem, p), s !== t && (n.result = s, s === !1 && (n.preventDefault(), n.stopPropagation())));
                            return m.postDispatch && m.postDispatch.call(this, n), n.result
                        }
                    },
                    props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                    fixHooks: {},
                    keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(e, t) { return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e } },
                    mouseHooks: {
                        props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                        filter: function(e, n) {
                            var i, r, o, s = n.button,
                                a = n.fromElement;
                            return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || z, r = i.documentElement, o = i.body, e.pageX = n.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
                        }
                    },
                    fix: function(e) {
                        if (e[G.expando]) return e;
                        var t, n, i = e,
                            r = G.event.fixHooks[e.type] || {},
                            o = r.props ? this.props.concat(r.props) : this.props;
                        for (e = G.Event(i), t = o.length; t;) n = o[--t], e[n] = i[n];
                        return e.target || (e.target = i.srcElement || z), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, r.filter ? r.filter(e, i) : e
                    },
                    special: { load: { noBubble: !0 }, focus: { delegateType: "focusin" }, blur: { delegateType: "focusout" }, beforeunload: { setup: function(e, t, n) { G.isWindow(this) && (this.onbeforeunload = n) }, teardown: function(e, t) { this.onbeforeunload === t && (this.onbeforeunload = null) } } },
                    simulate: function(e, t, n, i) {
                        var r = G.extend(new G.Event, n, { type: e, isSimulated: !0, originalEvent: {} });
                        i ? G.event.trigger(r, null, t) : G.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault()
                    }
                }, G.event.handle = G.event.dispatch, G.removeEvent = z.removeEventListener ? function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n, !1) } : function(e, t, n) {
                    var i = "on" + t;
                    e.detachEvent && ("undefined" == typeof e[i] && (e[i] = null), e.detachEvent(i, n))
                }, G.Event = function(e, t) { return this instanceof G.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? s : o) : this.type = e, t && G.extend(this, t), this.timeStamp = e && e.timeStamp || G.now(), this[G.expando] = !0, void 0) : new G.Event(e, t) }, G.Event.prototype = {
                    preventDefault: function() {
                        this.isDefaultPrevented = s;
                        var e = this.originalEvent;
                        e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
                    },
                    stopPropagation: function() {
                        this.isPropagationStopped = s;
                        var e = this.originalEvent;
                        e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
                    },
                    stopImmediatePropagation: function() { this.isImmediatePropagationStopped = s, this.stopPropagation() },
                    isDefaultPrevented: o,
                    isPropagationStopped: o,
                    isImmediatePropagationStopped: o
                }, G.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function(e, t) {
                    G.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function(e) {
                            {
                                var n, i = this,
                                    r = e.relatedTarget,
                                    o = e.handleObj;
                                o.selector
                            }
                            return (!r || r !== i && !G.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                        }
                    }
                }), G.support.submitBubbles || (G.event.special.submit = {
                    setup: function() {
                        return G.nodeName(this, "form") ? !1 : (G.event.add(this, "click._submit keypress._submit", function(e) {
                            var n = e.target,
                                i = G.nodeName(n, "input") || G.nodeName(n, "button") ? n.form : t;
                            i && !G._data(i, "_submit_attached") && (G.event.add(i, "submit._submit", function(e) { e._submit_bubble = !0 }), G._data(i, "_submit_attached", !0))
                        }), void 0)
                    },
                    postDispatch: function(e) { e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && G.event.simulate("submit", this.parentNode, e, !0)) },
                    teardown: function() { return G.nodeName(this, "form") ? !1 : (G.event.remove(this, "._submit"), void 0) }
                }), G.support.changeBubbles || (G.event.special.change = {
                    setup: function() {
                        return Dt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (G.event.add(this, "propertychange._change", function(e) { "checked" === e.originalEvent.propertyName && (this._just_changed = !0) }), G.event.add(this, "click._change", function(e) { this._just_changed && !e.isTrigger && (this._just_changed = !1), G.event.simulate("change", this, e, !0) })), !1) : (G.event.add(this, "beforeactivate._change", function(e) {
                            var t = e.target;
                            Dt.test(t.nodeName) && !G._data(t, "_change_attached") && (G.event.add(t, "change._change", function(e) {!this.parentNode || e.isSimulated || e.isTrigger || G.event.simulate("change", this.parentNode, e, !0) }), G._data(t, "_change_attached", !0))
                        }), void 0)
                    },
                    handle: function(e) { var t = e.target; return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0 },
                    teardown: function() { return G.event.remove(this, "._change"), !Dt.test(this.nodeName) }
                }), G.support.focusinBubbles || G.each({ focus: "focusin", blur: "focusout" }, function(e, t) {
                    var n = 0,
                        i = function(e) { G.event.simulate(t, e.target, G.event.fix(e), !0) };
                    G.event.special[t] = { setup: function() { 0 === n++ && z.addEventListener(e, i, !0) }, teardown: function() { 0 === --n && z.removeEventListener(e, i, !0) } }
                }), G.fn.extend({
                    on: function(e, n, i, r, s) {
                        var a, l;
                        if ("object" == typeof e) { "string" != typeof n && (i = i || n, n = t); for (l in e) this.on(l, n, i, e[l], s); return this }
                        if (null == i && null == r ? (r = n, i = n = t) : null == r && ("string" == typeof n ? (r = i, i = t) : (r = i, i = n, n = t)), r === !1) r = o;
                        else if (!r) return this;
                        return 1 === s && (a = r, r = function(e) { return G().off(e), a.apply(this, arguments) }, r.guid = a.guid || (a.guid = G.guid++)), this.each(function() { G.event.add(this, e, r, i, n) })
                    },
                    one: function(e, t, n, i) { return this.on(e, t, n, i, 1) },
                    off: function(e, n, i) { var r, s; if (e && e.preventDefault && e.handleObj) return r = e.handleObj, G(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" == typeof e) { for (s in e) this.off(s, n, e[s]); return this } return (n === !1 || "function" == typeof n) && (i = n, n = t), i === !1 && (i = o), this.each(function() { G.event.remove(this, e, i, n) }) },
                    bind: function(e, t, n) { return this.on(e, null, t, n) },
                    unbind: function(e, t) { return this.off(e, null, t) },
                    live: function(e, t, n) { return G(this.context).on(e, this.selector, t, n), this },
                    die: function(e, t) { return G(this.context).off(e, this.selector || "**", t), this },
                    delegate: function(e, t, n, i) { return this.on(t, e, n, i) },
                    undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) },
                    trigger: function(e, t) { return this.each(function() { G.event.trigger(e, t, this) }) },
                    triggerHandler: function(e, t) { return this[0] ? G.event.trigger(e, t, this[0], !0) : void 0 },
                    toggle: function(e) {
                        var t = arguments,
                            n = e.guid || G.guid++,
                            i = 0,
                            r = function(n) { var r = (G._data(this, "lastToggle" + e.guid) || 0) % i; return G._data(this, "lastToggle" + e.guid, r + 1), n.preventDefault(), t[r].apply(this, arguments) || !1 };
                        for (r.guid = n; i < t.length;) t[i++].guid = n;
                        return this.click(r)
                    },
                    hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) }
                }), G.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) { G.fn[t] = function(e, n) { return null == n && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t) }, Nt.test(t) && (G.event.fixHooks[t] = G.event.keyHooks), It.test(t) && (G.event.fixHooks[t] = G.event.mouseHooks) }),
                function(e, t) {
                    function n(e, t, n, i) {
                        n = n || [], t = t || I;
                        var r, o, s, a, l = t.nodeType;
                        if (!e || "string" != typeof e) return n;
                        if (1 !== l && 9 !== l) return [];
                        if (s = w(t), !s && !i && (r = nt.exec(e)))
                            if (a = r[1]) { if (9 === l) { if (o = t.getElementById(a), !o || !o.parentNode) return n; if (o.id === a) return n.push(o), n } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && k(t, o) && o.id === a) return n.push(o), n } else { if (r[2]) return R.apply(n, H.call(t.getElementsByTagName(e), 0)), n; if ((a = r[3]) && dt && t.getElementsByClassName) return R.apply(n, H.call(t.getElementsByClassName(a), 0)), n }
                        return g(e.replace(K, "$1"), t, n, i, s)
                    }

                    function i(e) { return function(t) { var n = t.nodeName.toLowerCase(); return "input" === n && t.type === e } }

                    function r(e) { return function(t) { var n = t.nodeName.toLowerCase(); return ("input" === n || "button" === n) && t.type === e } }

                    function o(e) { return L(function(t) { return t = +t, L(function(n, i) { for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r])) }) }) }

                    function s(e, t, n) {
                        if (e === t) return n;
                        for (var i = e.nextSibling; i;) {
                            if (i === t) return -1;
                            i = i.nextSibling
                        }
                        return 1
                    }

                    function a(e, t) {
                        var i, r, o, s, a, l, u, c = B[P][e];
                        if (c) return t ? 0 : c.slice(0);
                        for (a = e, l = [], u = y.preFilter; a;) {
                            (!i || (r = Z.exec(a))) && (r && (a = a.slice(r[0].length)), l.push(o = [])), i = !1, (r = et.exec(a)) && (o.push(i = new N(r.shift())), a = a.slice(i.length), i.type = r[0].replace(K, " "));
                            for (s in y.filter) !(r = at[s].exec(a)) || u[s] && !(r = u[s](r, I, !0)) || (o.push(i = new N(r.shift())), a = a.slice(i.length), i.type = s, i.matches = r);
                            if (!i) break
                        }
                        return t ? a.length : a ? n.error(e) : B(e, l).slice(0)
                    }

                    function l(e, t, n) {
                        var i = t.dir,
                            r = n && "parentNode" === t.dir,
                            o = O++;
                        return t.first ? function(t, n, o) {
                            for (; t = t[i];)
                                if (r || 1 === t.nodeType) return e(t, n, o)
                        } : function(t, n, s) {
                            if (s) {
                                for (; t = t[i];)
                                    if ((r || 1 === t.nodeType) && e(t, n, s)) return t
                            } else
                                for (var a, l = A + " " + o + " ", u = l + v; t = t[i];)
                                    if (r || 1 === t.nodeType) {
                                        if ((a = t[P]) === u) return t.sizset;
                                        if ("string" == typeof a && 0 === a.indexOf(l)) { if (t.sizset) return t } else {
                                            if (t[P] = u, e(t, n, s)) return t.sizset = !0, t;
                                            t.sizset = !1
                                        }
                                    }
                        }
                    }

                    function u(e) {
                        return e.length > 1 ? function(t, n, i) {
                            for (var r = e.length; r--;)
                                if (!e[r](t, n, i)) return !1;
                            return !0
                        } : e[0]
                    }

                    function c(e, t, n, i, r) { for (var o, s = [], a = 0, l = e.length, u = null != t; l > a; a++)(o = e[a]) && (!n || n(o, i, r)) && (s.push(o), u && t.push(a)); return s }

                    function h(e, t, n, i, r, o) {
                        return i && !i[P] && (i = h(i)), r && !r[P] && (r = h(r, o)), L(function(o, s, a, l) {
                            if (!o || !r) {
                                var u, h, d, f = [],
                                    g = [],
                                    m = s.length,
                                    v = o || p(t || "*", a.nodeType ? [a] : a, [], o),
                                    _ = !e || !o && t ? v : c(v, f, e, a, l),
                                    y = n ? r || (o ? e : m || i) ? [] : s : _;
                                if (n && n(_, y, a, l), i)
                                    for (d = c(y, g), i(d, [], a, l), u = d.length; u--;)(h = d[u]) && (y[g[u]] = !(_[g[u]] = h));
                                if (o)
                                    for (u = e && y.length; u--;)(h = y[u]) && (o[f[u]] = !(s[f[u]] = h));
                                else y = c(y === s ? y.splice(m, y.length) : y), r ? r(null, s, y, l) : R.apply(s, y)
                            }
                        })
                    }

                    function d(e) {
                        for (var t, n, i, r = e.length, o = y.relative[e[0].type], s = o || y.relative[" "], a = o ? 1 : 0, c = l(function(e) { return e === t }, s, !0), f = l(function(e) { return $.call(t, e) > -1 }, s, !0), p = [function(e, n, i) { return !o && (i || n !== E) || ((t = n).nodeType ? c(e, n, i) : f(e, n, i)) }]; r > a; a++)
                            if (n = y.relative[e[a].type]) p = [l(u(p), n)];
                            else {
                                if (n = y.filter[e[a].type].apply(null, e[a].matches), n[P]) { for (i = ++a; r > i && !y.relative[e[i].type]; i++); return h(a > 1 && u(p), a > 1 && e.slice(0, a - 1).join("").replace(K, "$1"), n, i > a && d(e.slice(a, i)), r > i && d(e = e.slice(i)), r > i && e.join("")) }
                                p.push(n)
                            }
                        return u(p)
                    }

                    function f(e, t) {
                        var i = t.length > 0,
                            r = e.length > 0,
                            o = function(s, a, l, u, h) {
                                var d, f, p, g = [],
                                    m = 0,
                                    _ = "0",
                                    b = s && [],
                                    w = null != h,
                                    k = E,
                                    x = s || r && y.find.TAG("*", h && a.parentNode || a),
                                    C = A += null == k ? 1 : Math.E;
                                for (w && (E = a !== I && a, v = o.el); null != (d = x[_]); _++) {
                                    if (r && d) {
                                        for (f = 0; p = e[f]; f++)
                                            if (p(d, a, l)) { u.push(d); break }
                                        w && (A = C, v = ++o.el)
                                    }
                                    i && ((d = !p && d) && m--, s && b.push(d))
                                }
                                if (m += _, i && _ !== m) {
                                    for (f = 0; p = t[f]; f++) p(b, g, a, l);
                                    if (s) {
                                        if (m > 0)
                                            for (; _--;) b[_] || g[_] || (g[_] = j.call(u));
                                        g = c(g)
                                    }
                                    R.apply(u, g), w && !s && g.length > 0 && m + t.length > 1 && n.uniqueSort(u)
                                }
                                return w && (A = C, E = k), b
                            };
                        return o.el = 0, i ? L(o) : o
                    }

                    function p(e, t, i, r) { for (var o = 0, s = t.length; s > o; o++) n(e, t[o], i, r); return i }

                    function g(e, t, n, i, r) {
                        {
                            var o, s, l, u, c, h = a(e);
                            h.length
                        }
                        if (!i && 1 === h.length) {
                            if (s = h[0] = h[0].slice(0), s.length > 2 && "ID" === (l = s[0]).type && 9 === t.nodeType && !r && y.relative[s[1].type]) {
                                if (t = y.find.ID(l.matches[0].replace(st, ""), t, r)[0], !t) return n;
                                e = e.slice(s.shift().length)
                            }
                            for (o = at.POS.test(e) ? -1 : s.length - 1; o >= 0 && (l = s[o], !y.relative[u = l.type]); o--)
                                if ((c = y.find[u]) && (i = c(l.matches[0].replace(st, ""), it.test(s[0].type) && t.parentNode || t, r))) { if (s.splice(o, 1), e = i.length && s.join(""), !e) return R.apply(n, H.call(i, 0)), n; break }
                        }
                        return x(e, h)(i, t, r, n, it.test(e)), n
                    }

                    function m() {}
                    var v, _, y, b, w, k, x, C, T, E, D = !0,
                        S = "undefined",
                        P = ("sizcache" + Math.random()).replace(".", ""),
                        N = String,
                        I = e.document,
                        M = I.documentElement,
                        A = 0,
                        O = 0,
                        j = [].pop,
                        R = [].push,
                        H = [].slice,
                        $ = [].indexOf || function(e) {
                            for (var t = 0, n = this.length; n > t; t++)
                                if (this[t] === e) return t;
                            return -1
                        },
                        L = function(e, t) { return e[P] = null == t || t, e },
                        F = function() {
                            var e = {},
                                t = [];
                            return L(function(n, i) { return t.push(n) > y.cacheLength && delete e[t.shift()], e[n] = i }, e)
                        },
                        z = F(),
                        B = F(),
                        W = F(),
                        q = "[\\x20\\t\\r\\n\\f]",
                        U = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
                        V = U.replace("w", "w#"),
                        Y = "([*^$|!~]?=)",
                        Q = "\\[" + q + "*(" + U + ")" + q + "*(?:" + Y + q + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + V + ")|)|)" + q + "*\\]",
                        X = ":(" + U + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + Q + ")|[^:]|\\\\.)*|.*))\\)|)",
                        J = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + q + "*((?:-\\d)?\\d*)" + q + "*\\)|)(?=[^-]|$)",
                        K = new RegExp("^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$", "g"),
                        Z = new RegExp("^" + q + "*," + q + "*"),
                        et = new RegExp("^" + q + "*([\\x20\\t\\r\\n\\f>+~])" + q + "*"),
                        tt = new RegExp(X),
                        nt = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
                        it = /[\x20\t\r\n\f]*[+~]/,
                        rt = /h\d/i,
                        ot = /input|select|textarea|button/i,
                        st = /\\(?!\\)/g,
                        at = { ID: new RegExp("^#(" + U + ")"), CLASS: new RegExp("^\\.(" + U + ")"), NAME: new RegExp("^\\[name=['\"]?(" + U + ")['\"]?\\]"), TAG: new RegExp("^(" + U.replace("w", "w*") + ")"), ATTR: new RegExp("^" + Q), PSEUDO: new RegExp("^" + X), POS: new RegExp(J, "i"), CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + q + "*(even|odd|(([+-]|)(\\d*)n|)" + q + "*(?:([+-]|)" + q + "*(\\d+)|))" + q + "*\\)|)", "i"), needsContext: new RegExp("^" + q + "*[>+~]|" + J, "i") },
                        lt = function(e) { var t = I.createElement("div"); try { return e(t) } catch (n) { return !1 } finally { t = null } },
                        ut = lt(function(e) { return e.appendChild(I.createComment("")), !e.getElementsByTagName("*").length }),
                        ct = lt(function(e) { return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== S && "#" === e.firstChild.getAttribute("href") }),
                        ht = lt(function(e) { e.innerHTML = "<select></select>"; var t = typeof e.lastChild.getAttribute("multiple"); return "boolean" !== t && "string" !== t }),
                        dt = lt(function(e) { return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1 }),
                        ft = lt(function(e) { e.id = P + 0, e.innerHTML = "<a name='" + P + "'></a><div name='" + P + "'></div>", M.insertBefore(e, M.firstChild); var t = I.getElementsByName && I.getElementsByName(P).length === 2 + I.getElementsByName(P + 0).length; return _ = !I.getElementById(P), M.removeChild(e), t });
                    try { H.call(M.childNodes, 0)[0].nodeType } catch (pt) { H = function(e) { for (var t, n = []; t = this[e]; e++) n.push(t); return n } }
                    n.matches = function(e, t) { return n(e, null, null, t) }, n.matchesSelector = function(e, t) { return n(t, null, null, [e]).length > 0 }, b = n.getText = function(e) {
                        var t, n = "",
                            i = 0,
                            r = e.nodeType;
                        if (r) { if (1 === r || 9 === r || 11 === r) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += b(e) } else if (3 === r || 4 === r) return e.nodeValue } else
                            for (; t = e[i]; i++) n += b(t);
                        return n
                    }, w = n.isXML = function(e) { var t = e && (e.ownerDocument || e).documentElement; return t ? "HTML" !== t.nodeName : !1 }, k = n.contains = M.contains ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                            i = t && t.parentNode;
                        return e === i || !!(i && 1 === i.nodeType && n.contains && n.contains(i))
                    } : M.compareDocumentPosition ? function(e, t) { return t && !!(16 & e.compareDocumentPosition(t)) } : function(e, t) {
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                        return !1
                    }, n.attr = function(e, t) { var n, i = w(e); return i || (t = t.toLowerCase()), (n = y.attrHandle[t]) ? n(e) : i || ht ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? "boolean" == typeof e[t] ? e[t] ? t : null : n.specified ? n.value : null : null) }, y = n.selectors = {
                        cacheLength: 50,
                        createPseudo: L,
                        match: at,
                        attrHandle: ct ? {} : { href: function(e) { return e.getAttribute("href", 2) }, type: function(e) { return e.getAttribute("type") } },
                        find: { ID: _ ? function(e, t, n) { if (typeof t.getElementById !== S && !n) { var i = t.getElementById(e); return i && i.parentNode ? [i] : [] } } : function(e, n, i) { if (typeof n.getElementById !== S && !i) { var r = n.getElementById(e); return r ? r.id === e || typeof r.getAttributeNode !== S && r.getAttributeNode("id").value === e ? [r] : t : [] } }, TAG: ut ? function(e, t) { return typeof t.getElementsByTagName !== S ? t.getElementsByTagName(e) : void 0 } : function(e, t) { var n = t.getElementsByTagName(e); if ("*" === e) { for (var i, r = [], o = 0; i = n[o]; o++) 1 === i.nodeType && r.push(i); return r } return n }, NAME: ft && function(e, t) { return typeof t.getElementsByName !== S ? t.getElementsByName(name) : void 0 }, CLASS: dt && function(e, t, n) { return typeof t.getElementsByClassName === S || n ? void 0 : t.getElementsByClassName(e) } },
                        relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                        preFilter: { ATTR: function(e) { return e[1] = e[1].replace(st, ""), e[3] = (e[4] || e[5] || "").replace(st, ""), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1] ? (e[2] || n.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * ("even" === e[2] || "odd" === e[2])), e[4] = +(e[6] + e[7] || "odd" === e[2])) : e[2] && n.error(e[0]), e }, PSEUDO: function(e) { var t, n; return at.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[3] : (t = e[4]) && (tt.test(t) && (n = a(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n), e[0] = e[0].slice(0, n)), e[2] = t), e.slice(0, 3)) } },
                        filter: {
                            ID: _ ? function(e) {
                                return e = e.replace(st, ""),
                                    function(t) { return t.getAttribute("id") === e }
                            } : function(e) {
                                return e = e.replace(st, ""),
                                    function(t) { var n = typeof t.getAttributeNode !== S && t.getAttributeNode("id"); return n && n.value === e }
                            },
                            TAG: function(e) { return "*" === e ? function() { return !0 } : (e = e.replace(st, "").toLowerCase(), function(t) { return t.nodeName && t.nodeName.toLowerCase() === e }) },
                            CLASS: function(e) {
                                var t = z[P][e];
                                return t || (t = z(e, new RegExp("(^|" + q + ")" + e + "(" + q + "|$)"))),
                                    function(e) { return t.test(e.className || typeof e.getAttribute !== S && e.getAttribute("class") || "") }
                            },
                            ATTR: function(e, t, i) { return function(r) { var o = n.attr(r, e); return null == o ? "!=" === t : t ? (o += "", "=" === t ? o === i : "!=" === t ? o !== i : "^=" === t ? i && 0 === o.indexOf(i) : "*=" === t ? i && o.indexOf(i) > -1 : "$=" === t ? i && o.substr(o.length - i.length) === i : "~=" === t ? (" " + o + " ").indexOf(i) > -1 : "|=" === t ? o === i || o.substr(0, i.length + 1) === i + "-" : !1) : !0 } },
                            CHILD: function(e, t, n, i) {
                                return "nth" === e ? function(e) {
                                    var t, r, o = e.parentNode;
                                    if (1 === n && 0 === i) return !0;
                                    if (o)
                                        for (r = 0, t = o.firstChild; t && (1 !== t.nodeType || (r++, e !== t)); t = t.nextSibling);
                                    return r -= i, r === n || r % n === 0 && r / n >= 0
                                } : function(t) {
                                    var n = t;
                                    switch (e) {
                                        case "only":
                                        case "first":
                                            for (; n = n.previousSibling;)
                                                if (1 === n.nodeType) return !1;
                                            if ("first" === e) return !0;
                                            n = t;
                                        case "last":
                                            for (; n = n.nextSibling;)
                                                if (1 === n.nodeType) return !1;
                                            return !0
                                    }
                                }
                            },
                            PSEUDO: function(e, t) { var i, r = y.pseudos[e] || y.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e); return r[P] ? r(t) : r.length > 1 ? (i = [e, e, "", t], y.setFilters.hasOwnProperty(e.toLowerCase()) ? L(function(e, n) { for (var i, o = r(e, t), s = o.length; s--;) i = $.call(e, o[s]), e[i] = !(n[i] = o[s]) }) : function(e) { return r(e, 0, i) }) : r }
                        },
                        pseudos: {
                            not: L(function(e) {
                                var t = [],
                                    n = [],
                                    i = x(e.replace(K, "$1"));
                                return i[P] ? L(function(e, t, n, r) { for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o)) }) : function(e, r, o) { return t[0] = e, i(t, null, o, n), !n.pop() }
                            }),
                            has: L(function(e) { return function(t) { return n(e, t).length > 0 } }),
                            contains: L(function(e) { return function(t) { return (t.textContent || t.innerText || b(t)).indexOf(e) > -1 } }),
                            enabled: function(e) { return e.disabled === !1 },
                            disabled: function(e) { return e.disabled === !0 },
                            checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected },
                            selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, e.selected === !0 },
                            parent: function(e) { return !y.pseudos.empty(e) },
                            empty: function(e) {
                                var t;
                                for (e = e.firstChild; e;) {
                                    if (e.nodeName > "@" || 3 === (t = e.nodeType) || 4 === t) return !1;
                                    e = e.nextSibling
                                }
                                return !0
                            },
                            header: function(e) { return rt.test(e.nodeName) },
                            text: function(e) { var t, n; return "input" === e.nodeName.toLowerCase() && "text" === (t = e.type) && (null == (n = e.getAttribute("type")) || n.toLowerCase() === t) },
                            radio: i("radio"),
                            checkbox: i("checkbox"),
                            file: i("file"),
                            password: i("password"),
                            image: i("image"),
                            submit: r("submit"),
                            reset: r("reset"),
                            button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t },
                            input: function(e) { return ot.test(e.nodeName) },
                            focus: function(e) { var t = e.ownerDocument; return !(e !== t.activeElement || t.hasFocus && !t.hasFocus() || !e.type && !e.href) },
                            active: function(e) { return e === e.ownerDocument.activeElement },
                            first: o(function() { return [0] }),
                            last: o(function(e, t) { return [t - 1] }),
                            eq: o(function(e, t, n) { return [0 > n ? n + t : n] }),
                            even: o(function(e, t) { for (var n = 0; t > n; n += 2) e.push(n); return e }),
                            odd: o(function(e, t) { for (var n = 1; t > n; n += 2) e.push(n); return e }),
                            lt: o(function(e, t, n) { for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i); return e }),
                            gt: o(function(e, t, n) { for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i); return e })
                        }
                    }, C = M.compareDocumentPosition ? function(e, t) { return e === t ? (T = !0, 0) : (e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) : e.compareDocumentPosition) ? -1 : 1 } : function(e, t) {
                        if (e === t) return T = !0, 0;
                        if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
                        var n, i, r = [],
                            o = [],
                            a = e.parentNode,
                            l = t.parentNode,
                            u = a;
                        if (a === l) return s(e, t);
                        if (!a) return -1;
                        if (!l) return 1;
                        for (; u;) r.unshift(u), u = u.parentNode;
                        for (u = l; u;) o.unshift(u), u = u.parentNode;
                        n = r.length, i = o.length;
                        for (var c = 0; n > c && i > c; c++)
                            if (r[c] !== o[c]) return s(r[c], o[c]);
                        return c === n ? s(e, o[c], -1) : s(r[c], t, 1)
                    }, [0, 0].sort(C), D = !T, n.uniqueSort = function(e) {
                        var t, n = 1;
                        if (T = D, e.sort(C), T)
                            for (; t = e[n]; n++) t === e[n - 1] && e.splice(n--, 1);
                        return e
                    }, n.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, x = n.compile = function(e, t) {
                        var n, i = [],
                            r = [],
                            o = W[P][e];
                        if (!o) {
                            for (t || (t = a(e)), n = t.length; n--;) o = d(t[n]), o[P] ? i.push(o) : r.push(o);
                            o = W(e, f(r, i))
                        }
                        return o
                    }, I.querySelectorAll && ! function() {
                        var e, t = g,
                            i = /'|\\/g,
                            r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                            o = [":focus"],
                            s = [":active", ":focus"],
                            l = M.matchesSelector || M.mozMatchesSelector || M.webkitMatchesSelector || M.oMatchesSelector || M.msMatchesSelector;
                        lt(function(e) { e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || o.push("\\[" + q + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || o.push(":checked") }), lt(function(e) { e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && o.push("[*^$]=" + q + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled") }), o = new RegExp(o.join("|")), g = function(e, n, r, s, l) {
                            if (!(s || l || o && o.test(e))) {
                                var u, c, h = !0,
                                    d = P,
                                    f = n,
                                    p = 9 === n.nodeType && e;
                                if (1 === n.nodeType && "object" !== n.nodeName.toLowerCase()) {
                                    for (u = a(e), (h = n.getAttribute("id")) ? d = h.replace(i, "\\$&") : n.setAttribute("id", d), d = "[id='" + d + "'] ", c = u.length; c--;) u[c] = d + u[c].join("");
                                    f = it.test(e) && n.parentNode || n, p = u.join(",")
                                }
                                if (p) try { return R.apply(r, H.call(f.querySelectorAll(p), 0)), r } catch (g) {} finally { h || n.removeAttribute("id") }
                            }
                            return t(e, n, r, s, l)
                        }, l && (lt(function(t) { e = l.call(t, "div"); try { l.call(t, "[test!='']:sizzle"), s.push("!=", X) } catch (n) {} }), s = new RegExp(s.join("|")), n.matchesSelector = function(t, i) {
                            if (i = i.replace(r, "='$1']"), !(w(t) || s.test(i) || o && o.test(i))) try { var a = l.call(t, i); if (a || e || t.document && 11 !== t.document.nodeType) return a } catch (u) {}
                            return n(i, null, null, [t]).length > 0
                        })
                    }(), y.pseudos.nth = y.pseudos.eq, y.filters = m.prototype = y.pseudos, y.setFilters = new m, n.attr = G.attr, G.find = n, G.expr = n.selectors, G.expr[":"] = G.expr.pseudos, G.unique = n.uniqueSort, G.text = n.getText, G.isXMLDoc = n.isXML, G.contains = n.contains
                }(e);
            var Ot = /Until$/,
                jt = /^(?:parents|prev(?:Until|All))/,
                Rt = /^.[^:#\[\.,]*$/,
                Ht = G.expr.match.needsContext,
                $t = { children: !0, contents: !0, next: !0, prev: !0 };
            G.fn.extend({
                find: function(e) {
                    var t, n, i, r, o, s, a = this;
                    if ("string" != typeof e) return G(e).filter(function() {
                        for (t = 0, n = a.length; n > t; t++)
                            if (G.contains(a[t], this)) return !0
                    });
                    for (s = this.pushStack("", "find", e), t = 0, n = this.length; n > t; t++)
                        if (i = s.length, G.find(e, this[t], s), t > 0)
                            for (r = i; r < s.length; r++)
                                for (o = 0; i > o; o++)
                                    if (s[o] === s[r]) { s.splice(r--, 1); break }
                    return s
                },
                has: function(e) {
                    var t, n = G(e, this),
                        i = n.length;
                    return this.filter(function() {
                        for (t = 0; i > t; t++)
                            if (G.contains(this, n[t])) return !0
                    })
                },
                not: function(e) { return this.pushStack(u(this, e, !1), "not", e) },
                filter: function(e) { return this.pushStack(u(this, e, !0), "filter", e) },
                is: function(e) { return !!e && ("string" == typeof e ? Ht.test(e) ? G(e, this.context).index(this[0]) >= 0 : G.filter(e, this).length > 0 : this.filter(e).length > 0) },
                closest: function(e, t) {
                    for (var n, i = 0, r = this.length, o = [], s = Ht.test(e) || "string" != typeof e ? G(e, t || this.context) : 0; r > i; i++)
                        for (n = this[i]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
                            if (s ? s.index(n) > -1 : G.find.matchesSelector(n, e)) { o.push(n); break }
                            n = n.parentNode
                        }
                    return o = o.length > 1 ? G.unique(o) : o, this.pushStack(o, "closest", e)
                },
                index: function(e) { return e ? "string" == typeof e ? G.inArray(this[0], G(e)) : G.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1 },
                add: function(e, t) {
                    var n = "string" == typeof e ? G(e, t) : G.makeArray(e && e.nodeType ? [e] : e),
                        i = G.merge(this.get(), n);
                    return this.pushStack(a(n[0]) || a(i[0]) ? i : G.unique(i))
                },
                addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }
            }), G.fn.andSelf = G.fn.addBack, G.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return G.dir(e, "parentNode") }, parentsUntil: function(e, t, n) { return G.dir(e, "parentNode", n) }, next: function(e) { return l(e, "nextSibling") }, prev: function(e) { return l(e, "previousSibling") }, nextAll: function(e) { return G.dir(e, "nextSibling") }, prevAll: function(e) { return G.dir(e, "previousSibling") }, nextUntil: function(e, t, n) { return G.dir(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return G.dir(e, "previousSibling", n) }, siblings: function(e) { return G.sibling((e.parentNode || {}).firstChild, e) }, children: function(e) { return G.sibling(e.firstChild) }, contents: function(e) { return G.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : G.merge([], e.childNodes) } }, function(e, t) { G.fn[e] = function(n, i) { var r = G.map(this, t, n); return Ot.test(e) || (i = n), i && "string" == typeof i && (r = G.filter(i, r)), r = this.length > 1 && !$t[e] ? G.unique(r) : r, this.length > 1 && jt.test(e) && (r = r.reverse()), this.pushStack(r, e, Y.call(arguments).join(",")) } }), G.extend({ filter: function(e, t, n) { return n && (e = ":not(" + e + ")"), 1 === t.length ? G.find.matchesSelector(t[0], e) ? [t[0]] : [] : G.find.matches(e, t) }, dir: function(e, n, i) { for (var r = [], o = e[n]; o && 9 !== o.nodeType && (i === t || 1 !== o.nodeType || !G(o).is(i));) 1 === o.nodeType && r.push(o), o = o[n]; return r }, sibling: function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n } });
            var Lt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
                Ft = / jQuery\d+="(?:null|\d+)"/g,
                zt = /^\s+/,
                Bt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
                Wt = /<([\w:]+)/,
                qt = /<tbody/i,
                Ut = /<|&#?\w+;/,
                Vt = /<(?:script|style|link)/i,
                Yt = /<(?:script|object|embed|option|style)/i,
                Qt = new RegExp("<(?:" + Lt + ")[\\s/>]", "i"),
                Xt = /^(?:checkbox|radio)$/,
                Jt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Kt = /\/(java|ecma)script/i,
                Gt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
                Zt = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area: [1, "<map>", "</map>"], _default: [0, "", ""] },
                en = c(z),
                tn = en.appendChild(z.createElement("div"));
            Zt.optgroup = Zt.option, Zt.tbody = Zt.tfoot = Zt.colgroup = Zt.caption = Zt.thead, Zt.th = Zt.td, G.support.htmlSerialize || (Zt._default = [1, "X<div>", "</div>"]), G.fn.extend({
                    text: function(e) { return G.access(this, function(e) { return e === t ? G.text(this) : this.empty().append((this[0] && this[0].ownerDocument || z).createTextNode(e)) }, null, e, arguments.length) },
                    wrapAll: function(e) {
                        if (G.isFunction(e)) return this.each(function(t) { G(this).wrapAll(e.call(this, t)) });
                        if (this[0]) {
                            var t = G(e, this[0].ownerDocument).eq(0).clone(!0);
                            this[0].parentNode && t.insertBefore(this[0]), t.map(function() { for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild; return e }).append(this)
                        }
                        return this
                    },
                    wrapInner: function(e) {
                        return G.isFunction(e) ? this.each(function(t) { G(this).wrapInner(e.call(this, t)) }) : this.each(function() {
                            var t = G(this),
                                n = t.contents();
                            n.length ? n.wrapAll(e) : t.append(e)
                        })
                    },
                    wrap: function(e) { var t = G.isFunction(e); return this.each(function(n) { G(this).wrapAll(t ? e.call(this, n) : e) }) },
                    unwrap: function() { return this.parent().each(function() { G.nodeName(this, "body") || G(this).replaceWith(this.childNodes) }).end() },
                    append: function() {
                        return this.domManip(arguments, !0, function(e) {
                            (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(e)
                        })
                    },
                    prepend: function() {
                        return this.domManip(arguments, !0, function(e) {
                            (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(e, this.firstChild)
                        })
                    },
                    before: function() { if (!a(this[0])) return this.domManip(arguments, !1, function(e) { this.parentNode.insertBefore(e, this) }); if (arguments.length) { var e = G.clean(arguments); return this.pushStack(G.merge(e, this), "before", this.selector) } },
                    after: function() { if (!a(this[0])) return this.domManip(arguments, !1, function(e) { this.parentNode.insertBefore(e, this.nextSibling) }); if (arguments.length) { var e = G.clean(arguments); return this.pushStack(G.merge(this, e), "after", this.selector) } },
                    remove: function(e, t) { for (var n, i = 0; null != (n = this[i]); i++)(!e || G.filter(e, [n]).length) && (t || 1 !== n.nodeType || (G.cleanData(n.getElementsByTagName("*")), G.cleanData([n])), n.parentNode && n.parentNode.removeChild(n)); return this },
                    empty: function() {
                        for (var e, t = 0; null != (e = this[t]); t++)
                            for (1 === e.nodeType && G.cleanData(e.getElementsByTagName("*")); e.firstChild;) e.removeChild(e.firstChild);
                        return this
                    },
                    clone: function(e, t) { return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() { return G.clone(this, e, t) }) },
                    html: function(e) {
                        return G.access(this, function(e) {
                            var n = this[0] || {},
                                i = 0,
                                r = this.length;
                            if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Ft, "") : t;
                            if (!("string" != typeof e || Vt.test(e) || !G.support.htmlSerialize && Qt.test(e) || !G.support.leadingWhitespace && zt.test(e) || Zt[(Wt.exec(e) || ["", ""])[1].toLowerCase()])) {
                                e = e.replace(Bt, "<$1></$2>");
                                try {
                                    for (; r > i; i++) n = this[i] || {}, 1 === n.nodeType && (G.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
                                    n = 0
                                } catch (o) {}
                            }
                            n && this.empty().append(e)
                        }, null, e, arguments.length)
                    },
                    replaceWith: function(e) {
                        return a(this[0]) ? this.length ? this.pushStack(G(G.isFunction(e) ? e() : e), "replaceWith", e) : this : G.isFunction(e) ? this.each(function(t) {
                            var n = G(this),
                                i = n.html();
                            n.replaceWith(e.call(this, t, i))
                        }) : ("string" != typeof e && (e = G(e).detach()), this.each(function() {
                            var t = this.nextSibling,
                                n = this.parentNode;
                            G(this).remove(), t ? G(t).before(e) : G(n).append(e)
                        }))
                    },
                    detach: function(e) { return this.remove(e, !0) },
                    domManip: function(e, n, i) {
                        e = [].concat.apply([], e);
                        var r, o, s, a, l = 0,
                            u = e[0],
                            c = [],
                            d = this.length;
                        if (!G.support.checkClone && d > 1 && "string" == typeof u && Jt.test(u)) return this.each(function() { G(this).domManip(e, n, i) });
                        if (G.isFunction(u)) return this.each(function(r) {
                            var o = G(this);
                            e[0] = u.call(this, r, n ? o.html() : t), o.domManip(e, n, i)
                        });
                        if (this[0]) {
                            if (r = G.buildFragment(e, this, c), s = r.fragment, o = s.firstChild, 1 === s.childNodes.length && (s = o), o)
                                for (n = n && G.nodeName(o, "tr"), a = r.cacheable || d - 1; d > l; l++) i.call(n && G.nodeName(this[l], "table") ? h(this[l], "tbody") : this[l], l === a ? s : G.clone(s, !0, !0));
                            s = o = null, c.length && G.each(c, function(e, t) { t.src ? G.ajax ? G.ajax({ url: t.src, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) : G.error("no ajax") : G.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Gt, "")), t.parentNode && t.parentNode.removeChild(t) })
                        }
                        return this
                    }
                }), G.buildFragment = function(e, n, i) { var r, o, s, a = e[0]; return n = n || z, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, !(1 === e.length && "string" == typeof a && a.length < 512 && n === z && "<" === a.charAt(0)) || Yt.test(a) || !G.support.checkClone && Jt.test(a) || !G.support.html5Clone && Qt.test(a) || (o = !0, r = G.fragments[a], s = r !== t), r || (r = n.createDocumentFragment(), G.clean(e, n, r, i), o && (G.fragments[a] = s && r)), { fragment: r, cacheable: o } }, G.fragments = {}, G.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, t) {
                    G.fn[e] = function(n) {
                        var i, r = 0,
                            o = [],
                            s = G(n),
                            a = s.length,
                            l = 1 === this.length && this[0].parentNode;
                        if ((null == l || l && 11 === l.nodeType && 1 === l.childNodes.length) && 1 === a) return s[t](this[0]), this;
                        for (; a > r; r++) i = (r > 0 ? this.clone(!0) : this).get(), G(s[r])[t](i), o = o.concat(i);
                        return this.pushStack(o, e, s.selector)
                    }
                }), G.extend({
                    clone: function(e, t, n) {
                        var i, r, o, s;
                        if (G.support.html5Clone || G.isXMLDoc(e) || !Qt.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (tn.innerHTML = e.outerHTML, tn.removeChild(s = tn.firstChild)), !(G.support.noCloneEvent && G.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || G.isXMLDoc(e)))
                            for (f(e, s), i = p(e), r = p(s), o = 0; i[o]; ++o) r[o] && f(i[o], r[o]);
                        if (t && (d(e, s), n))
                            for (i = p(e), r = p(s), o = 0; i[o]; ++o) d(i[o], r[o]);
                        return i = r = null, s
                    },
                    clean: function(e, t, n, i) {
                        var r, o, s, a, l, u, h, d, f, p, m, v = t === z && en,
                            _ = [];
                        for (t && "undefined" != typeof t.createDocumentFragment || (t = z), r = 0; null != (s = e[r]); r++)
                            if ("number" == typeof s && (s += ""), s) {
                                if ("string" == typeof s)
                                    if (Ut.test(s)) {
                                        for (v = v || c(t), h = t.createElement("div"), v.appendChild(h), s = s.replace(Bt, "<$1></$2>"), a = (Wt.exec(s) || ["", ""])[1].toLowerCase(), l = Zt[a] || Zt._default, u = l[0], h.innerHTML = l[1] + s + l[2]; u--;) h = h.lastChild;
                                        if (!G.support.tbody)
                                            for (d = qt.test(s), f = "table" !== a || d ? "<table>" !== l[1] || d ? [] : h.childNodes : h.firstChild && h.firstChild.childNodes, o = f.length - 1; o >= 0; --o) G.nodeName(f[o], "tbody") && !f[o].childNodes.length && f[o].parentNode.removeChild(f[o]);
                                        !G.support.leadingWhitespace && zt.test(s) && h.insertBefore(t.createTextNode(zt.exec(s)[0]), h.firstChild), s = h.childNodes, h.parentNode.removeChild(h)
                                    } else s = t.createTextNode(s);
                                s.nodeType ? _.push(s) : G.merge(_, s)
                            }
                        if (h && (s = h = v = null), !G.support.appendChecked)
                            for (r = 0; null != (s = _[r]); r++) G.nodeName(s, "input") ? g(s) : "undefined" != typeof s.getElementsByTagName && G.grep(s.getElementsByTagName("input"), g);
                        if (n)
                            for (p = function(e) { return !e.type || Kt.test(e.type) ? i ? i.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e) : void 0 }, r = 0; null != (s = _[r]); r++) G.nodeName(s, "script") && p(s) || (n.appendChild(s), "undefined" != typeof s.getElementsByTagName && (m = G.grep(G.merge([], s.getElementsByTagName("script")), p), _.splice.apply(_, [r + 1, 0].concat(m)), r += m.length));
                        return _
                    },
                    cleanData: function(e, t) {
                        for (var n, i, r, o, s = 0, a = G.expando, l = G.cache, u = G.support.deleteExpando, c = G.event.special; null != (r = e[s]); s++)
                            if ((t || G.acceptData(r)) && (i = r[a], n = i && l[i])) {
                                if (n.events)
                                    for (o in n.events) c[o] ? G.event.remove(r, o) : G.removeEvent(r, o, n.handle);
                                l[i] && (delete l[i], u ? delete r[a] : r.removeAttribute ? r.removeAttribute(a) : r[a] = null, G.deletedIds.push(i))
                            }
                    }
                }),
                function() {
                    var e, t;
                    G.uaMatch = function(e) { e = e.toLowerCase(); var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || []; return { browser: t[1] || "", version: t[2] || "0" } }, e = G.uaMatch(W.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), G.browser = t, G.sub = function() {
                        function e(t, n) { return new e.fn.init(t, n) }
                        G.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(n, i) { return i && i instanceof G && !(i instanceof e) && (i = e(i)), G.fn.init.call(this, n, i, t) }, e.fn.init.prototype = e.fn;
                        var t = e(z);
                        return e
                    }
                }();
            var nn, rn, on, sn = /alpha\([^)]*\)/i,
                an = /opacity=([^)]*)/,
                ln = /^(top|right|bottom|left)$/,
                un = /^(none|table(?!-c[ea]).+)/,
                cn = /^margin/,
                hn = new RegExp("^(" + Z + ")(.*)$", "i"),
                dn = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
                fn = new RegExp("^([-+])=(" + Z + ")", "i"),
                pn = {},
                gn = { position: "absolute", visibility: "hidden", display: "block" },
                mn = { letterSpacing: 0, fontWeight: 400 },
                vn = ["Top", "Right", "Bottom", "Left"],
                _n = ["Webkit", "O", "Moz", "ms"],
                yn = G.fn.toggle;
            G.fn.extend({
                css: function(e, n) { return G.access(this, function(e, n, i) { return i !== t ? G.style(e, n, i) : G.css(e, n) }, e, n, arguments.length > 1) },
                show: function() { return _(this, !0) },
                hide: function() { return _(this) },
                toggle: function(e, t) {
                    var n = "boolean" == typeof e;
                    return G.isFunction(e) && G.isFunction(t) ? yn.apply(this, arguments) : this.each(function() {
                        (n ? e : v(this)) ? G(this).show(): G(this).hide()
                    })
                }
            }), G.extend({
                cssHooks: { opacity: { get: function(e, t) { if (t) { var n = nn(e, "opacity"); return "" === n ? "1" : n } } } },
                cssNumber: { fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
                cssProps: { "float": G.support.cssFloat ? "cssFloat" : "styleFloat" },
                style: function(e, n, i, r) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var o, s, a, l = G.camelCase(n),
                            u = e.style;
                        if (n = G.cssProps[l] || (G.cssProps[l] = m(u, l)), a = G.cssHooks[n] || G.cssHooks[l], i === t) return a && "get" in a && (o = a.get(e, !1, r)) !== t ? o : u[n];
                        if (s = typeof i, "string" === s && (o = fn.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(G.css(e, n)), s = "number"), !(null == i || "number" === s && isNaN(i) || ("number" !== s || G.cssNumber[l] || (i += "px"), a && "set" in a && (i = a.set(e, i, r)) === t))) try { u[n] = i } catch (c) {}
                    }
                },
                css: function(e, n, i, r) { var o, s, a, l = G.camelCase(n); return n = G.cssProps[l] || (G.cssProps[l] = m(e.style, l)), a = G.cssHooks[n] || G.cssHooks[l], a && "get" in a && (o = a.get(e, !0, r)), o === t && (o = nn(e, n)), "normal" === o && n in mn && (o = mn[n]), i || r !== t ? (s = parseFloat(o), i || G.isNumeric(s) ? s || 0 : o) : o },
                swap: function(e, t, n) {
                    var i, r, o = {};
                    for (r in t) o[r] = e.style[r], e.style[r] = t[r];
                    i = n.call(e);
                    for (r in t) e.style[r] = o[r];
                    return i
                }
            }), e.getComputedStyle ? nn = function(t, n) {
                var i, r, o, s, a = e.getComputedStyle(t, null),
                    l = t.style;
                return a && (i = a[n], "" !== i || G.contains(t.ownerDocument, t) || (i = G.style(t, n)), dn.test(i) && cn.test(n) && (r = l.width, o = l.minWidth, s = l.maxWidth, l.minWidth = l.maxWidth = l.width = i, i = a.width, l.width = r, l.minWidth = o, l.maxWidth = s)), i
            } : z.documentElement.currentStyle && (nn = function(e, t) {
                var n, i, r = e.currentStyle && e.currentStyle[t],
                    o = e.style;
                return null == r && o && o[t] && (r = o[t]), dn.test(r) && !ln.test(t) && (n = o.left, i = e.runtimeStyle && e.runtimeStyle.left, i && (e.runtimeStyle.left = e.currentStyle.left), o.left = "fontSize" === t ? "1em" : r, r = o.pixelLeft + "px", o.left = n, i && (e.runtimeStyle.left = i)), "" === r ? "auto" : r
            }), G.each(["height", "width"], function(e, t) { G.cssHooks[t] = { get: function(e, n, i) { return n ? 0 === e.offsetWidth && un.test(nn(e, "display")) ? G.swap(e, gn, function() { return w(e, t, i) }) : w(e, t, i) : void 0 }, set: function(e, n, i) { return y(e, n, i ? b(e, t, i, G.support.boxSizing && "border-box" === G.css(e, "boxSizing")) : 0) } } }), G.support.opacity || (G.cssHooks.opacity = {
                get: function(e, t) { return an.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "" },
                set: function(e, t) {
                    var n = e.style,
                        i = e.currentStyle,
                        r = G.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                        o = i && i.filter || n.filter || "";
                    n.zoom = 1, t >= 1 && "" === G.trim(o.replace(sn, "")) && n.removeAttribute && (n.removeAttribute("filter"), i && !i.filter) || (n.filter = sn.test(o) ? o.replace(sn, r) : o + " " + r)
                }
            }), G(function() { G.support.reliableMarginRight || (G.cssHooks.marginRight = { get: function(e, t) { return G.swap(e, { display: "inline-block" }, function() { return t ? nn(e, "marginRight") : void 0 }) } }), !G.support.pixelPosition && G.fn.position && G.each(["top", "left"], function(e, t) { G.cssHooks[t] = { get: function(e, n) { if (n) { var i = nn(e, t); return dn.test(i) ? G(e).position()[t] + "px" : i } } } }) }), G.expr && G.expr.filters && (G.expr.filters.hidden = function(e) { return 0 === e.offsetWidth && 0 === e.offsetHeight || !G.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || nn(e, "display")) }, G.expr.filters.visible = function(e) { return !G.expr.filters.hidden(e) }), G.each({ margin: "", padding: "", border: "Width" }, function(e, t) {
                G.cssHooks[e + t] = {
                    expand: function(n) {
                        var i, r = "string" == typeof n ? n.split(" ") : [n],
                            o = {};
                        for (i = 0; 4 > i; i++) o[e + vn[i] + t] = r[i] || r[i - 2] || r[0];
                        return o
                    }
                }, cn.test(e) || (G.cssHooks[e + t].set = y)
            });
            var bn = /%20/g,
                wn = /\[\]$/,
                kn = /\r?\n/g,
                xn = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
                Cn = /^(?:select|textarea)/i;
            G.fn.extend({ serialize: function() { return G.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { return this.elements ? G.makeArray(this.elements) : this }).filter(function() { return this.name && !this.disabled && (this.checked || Cn.test(this.nodeName) || xn.test(this.type)) }).map(function(e, t) { var n = G(this).val(); return null == n ? null : G.isArray(n) ? G.map(n, function(e) { return { name: t.name, value: e.replace(kn, "\r\n") } }) : { name: t.name, value: n.replace(kn, "\r\n") } }).get() } }), G.param = function(e, n) {
                var i, r = [],
                    o = function(e, t) { t = G.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t) };
                if (n === t && (n = G.ajaxSettings && G.ajaxSettings.traditional), G.isArray(e) || e.jquery && !G.isPlainObject(e)) G.each(e, function() { o(this.name, this.value) });
                else
                    for (i in e) x(i, e[i], n, o);
                return r.join("&").replace(bn, "+")
            };
            var Tn, En, Dn = /#.*$/,
                Sn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
                Pn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
                Nn = /^(?:GET|HEAD)$/,
                In = /^\/\//,
                Mn = /\?/,
                An = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
                On = /([?&])_=[^&]*/,
                jn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
                Rn = G.fn.load,
                Hn = {},
                $n = {},
                Ln = ["*/"] + ["*"];
            try { En = B.href } catch (Fn) { En = z.createElement("a"), En.href = "", En = En.href }
            Tn = jn.exec(En.toLowerCase()) || [], G.fn.load = function(e, n, i) {
                if ("string" != typeof e && Rn) return Rn.apply(this, arguments);
                if (!this.length) return this;
                var r, o, s, a = this,
                    l = e.indexOf(" ");
                return l >= 0 && (r = e.slice(l, e.length), e = e.slice(0, l)), G.isFunction(n) ? (i = n, n = t) : n && "object" == typeof n && (o = "POST"), G.ajax({ url: e, type: o, dataType: "html", data: n, complete: function(e, t) { i && a.each(i, s || [e.responseText, t, e]) } }).done(function(e) { s = arguments, a.html(r ? G("<div>").append(e.replace(An, "")).find(r) : e) }), this
            }, G.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) { G.fn[t] = function(e) { return this.on(t, e) } }), G.each(["get", "post"], function(e, n) { G[n] = function(e, i, r, o) { return G.isFunction(i) && (o = o || r, r = i, i = t), G.ajax({ type: n, url: e, data: i, success: r, dataType: o }) } }), G.extend({
                getScript: function(e, n) { return G.get(e, t, n, "script") },
                getJSON: function(e, t, n) { return G.get(e, t, n, "json") },
                ajaxSetup: function(e, t) { return t ? E(e, G.ajaxSettings) : (t = e, e = G.ajaxSettings), E(e, t), e },
                ajaxSettings: { url: En, isLocal: Pn.test(Tn[1]), global: !0, type: "GET", contentType: "application/x-www-form-urlencoded; charset=UTF-8", processData: !0, async: !0, accepts: { xml: "application/xml, text/xml", html: "text/html", text: "text/plain", json: "application/json, text/javascript", "*": Ln }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText" }, converters: { "* text": e.String, "text html": !0, "text json": G.parseJSON, "text xml": G.parseXML }, flatOptions: { context: !0, url: !0 } },
                ajaxPrefilter: C(Hn),
                ajaxTransport: C($n),
                ajax: function(e, n) {
                    function i(e, n, i, s) {
                        var u, h, _, y, w, x = n;
                        2 !== b && (b = 2, l && clearTimeout(l), a = t, o = s || "", k.readyState = e > 0 ? 4 : 0, i && (y = D(d, k, i)), e >= 200 && 300 > e || 304 === e ? (d.ifModified && (w = k.getResponseHeader("Last-Modified"), w && (G.lastModified[r] = w), w = k.getResponseHeader("Etag"), w && (G.etag[r] = w)), 304 === e ? (x = "notmodified", u = !0) : (u = S(d, y), x = u.state, h = u.data, _ = u.error, u = !_)) : (_ = x, (!x || e) && (x = "error", 0 > e && (e = 0))), k.status = e, k.statusText = (n || x) + "", u ? g.resolveWith(f, [h, x, k]) : g.rejectWith(f, [k, x, _]), k.statusCode(v), v = t, c && p.trigger("ajax" + (u ? "Success" : "Error"), [k, d, u ? h : _]), m.fireWith(f, [k, x]), c && (p.trigger("ajaxComplete", [k, d]), --G.active || G.event.trigger("ajaxStop")))
                    }
                    "object" == typeof e && (n = e, e = t), n = n || {};
                    var r, o, s, a, l, u, c, h, d = G.ajaxSetup({}, n),
                        f = d.context || d,
                        p = f !== d && (f.nodeType || f instanceof G) ? G(f) : G.event,
                        g = G.Deferred(),
                        m = G.Callbacks("once memory"),
                        v = d.statusCode || {},
                        _ = {},
                        y = {},
                        b = 0,
                        w = "canceled",
                        k = {
                            readyState: 0,
                            setRequestHeader: function(e, t) {
                                if (!b) {
                                    var n = e.toLowerCase();
                                    e = y[n] = y[n] || e, _[e] = t
                                }
                                return this
                            },
                            getAllResponseHeaders: function() { return 2 === b ? o : null },
                            getResponseHeader: function(e) {
                                var n;
                                if (2 === b) {
                                    if (!s)
                                        for (s = {}; n = Sn.exec(o);) s[n[1].toLowerCase()] = n[2];
                                    n = s[e.toLowerCase()]
                                }
                                return n === t ? null : n
                            },
                            overrideMimeType: function(e) { return b || (d.mimeType = e), this },
                            abort: function(e) { return e = e || w, a && a.abort(e), i(0, e), this }
                        };
                    if (g.promise(k), k.success = k.done, k.error = k.fail, k.complete = m.add, k.statusCode = function(e) {
                            if (e) {
                                var t;
                                if (2 > b)
                                    for (t in e) v[t] = [v[t], e[t]];
                                else t = e[k.status], k.always(t)
                            }
                            return this
                        }, d.url = ((e || d.url) + "").replace(Dn, "").replace(In, Tn[1] + "//"), d.dataTypes = G.trim(d.dataType || "*").toLowerCase().split(tt), null == d.crossDomain && (u = jn.exec(d.url.toLowerCase()) || !1, d.crossDomain = u && u.join(":") + (u[3] ? "" : "http:" === u[1] ? 80 : 443) !== Tn.join(":") + (Tn[3] ? "" : "http:" === Tn[1] ? 80 : 443)), d.data && d.processData && "string" != typeof d.data && (d.data = G.param(d.data, d.traditional)), T(Hn, d, n, k), 2 === b) return k;
                    if (c = d.global, d.type = d.type.toUpperCase(), d.hasContent = !Nn.test(d.type), c && 0 === G.active++ && G.event.trigger("ajaxStart"), !d.hasContent && (d.data && (d.url += (Mn.test(d.url) ? "&" : "?") + d.data, delete d.data), r = d.url, d.cache === !1)) {
                        var x = G.now(),
                            C = d.url.replace(On, "$1_=" + x);
                        d.url = C + (C === d.url ? (Mn.test(d.url) ? "&" : "?") + "_=" + x : "")
                    }(d.data && d.hasContent && d.contentType !== !1 || n.contentType) && k.setRequestHeader("Content-Type", d.contentType), d.ifModified && (r = r || d.url, G.lastModified[r] && k.setRequestHeader("If-Modified-Since", G.lastModified[r]), G.etag[r] && k.setRequestHeader("If-None-Match", G.etag[r])), k.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Ln + "; q=0.01" : "") : d.accepts["*"]);
                    for (h in d.headers) k.setRequestHeader(h, d.headers[h]);
                    if (d.beforeSend && (d.beforeSend.call(f, k, d) === !1 || 2 === b)) return k.abort();
                    w = "abort";
                    for (h in { success: 1, error: 1, complete: 1 }) k[h](d[h]);
                    if (a = T($n, d, n, k)) {
                        k.readyState = 1, c && p.trigger("ajaxSend", [k, d]), d.async && d.timeout > 0 && (l = setTimeout(function() { k.abort("timeout") }, d.timeout));
                        try { b = 1, a.send(_, i) } catch (E) {
                            if (!(2 > b)) throw E;
                            i(-1, E)
                        }
                    } else i(-1, "No Transport");
                    return k
                },
                active: 0,
                lastModified: {},
                etag: {}
            });
            var zn = [],
                Bn = /\?/,
                Wn = /(=)\?(?=&|$)|\?\?/,
                qn = G.now();
            G.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = zn.pop() || G.expando + "_" + qn++; return this[e] = !0, e } }), G.ajaxPrefilter("json jsonp", function(n, i, r) {
                var o, s, a, l = n.data,
                    u = n.url,
                    c = n.jsonp !== !1,
                    h = c && Wn.test(u),
                    d = c && !h && "string" == typeof l && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Wn.test(l);
                return "jsonp" === n.dataTypes[0] || h || d ? (o = n.jsonpCallback = G.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, s = e[o], h ? n.url = u.replace(Wn, "$1" + o) : d ? n.data = l.replace(Wn, "$1" + o) : c && (n.url += (Bn.test(u) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() { return a || G.error(o + " was not called"), a[0] }, n.dataTypes[0] = "json", e[o] = function() { a = arguments }, r.always(function() { e[o] = s, n[o] && (n.jsonpCallback = i.jsonpCallback, zn.push(o)), a && G.isFunction(s) && s(a[0]), a = s = t }), "script") : void 0
            }), G.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /javascript|ecmascript/ }, converters: { "text script": function(e) { return G.globalEval(e), e } } }), G.ajaxPrefilter("script", function(e) { e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1) }), G.ajaxTransport("script", function(e) {
                if (e.crossDomain) {
                    var n, i = z.head || z.getElementsByTagName("head")[0] || z.documentElement;
                    return {
                        send: function(r, o) {
                            n = z.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, r) {
                                (r || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, i && n.parentNode && i.removeChild(n), n = t, r || o(200, "success"))
                            }, i.insertBefore(n, i.firstChild)
                        },
                        abort: function() { n && n.onload(0, 1) }
                    }
                }
            });
            var Un, Vn = e.ActiveXObject ? function() { for (var e in Un) Un[e](0, 1) } : !1,
                Yn = 0;
            G.ajaxSettings.xhr = e.ActiveXObject ? function() { return !this.isLocal && P() || N() } : P,
                function(e) { G.extend(G.support, { ajax: !!e, cors: !!e && "withCredentials" in e }) }(G.ajaxSettings.xhr()), G.support.ajax && G.ajaxTransport(function(n) {
                    if (!n.crossDomain || G.support.cors) {
                        var i;
                        return {
                            send: function(r, o) {
                                var s, a, l = n.xhr();
                                if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)
                                    for (a in n.xhrFields) l[a] = n.xhrFields[a];
                                n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                                try { for (a in r) l.setRequestHeader(a, r[a]) } catch (u) {}
                                l.send(n.hasContent && n.data || null), i = function(e, r) {
                                    var a, u, c, h, d;
                                    try {
                                        if (i && (r || 4 === l.readyState))
                                            if (i = t, s && (l.onreadystatechange = G.noop, Vn && delete Un[s]), r) 4 !== l.readyState && l.abort();
                                            else {
                                                a = l.status, c = l.getAllResponseHeaders(), h = {}, d = l.responseXML, d && d.documentElement && (h.xml = d);
                                                try { h.text = l.responseText } catch (e) {}
                                                try { u = l.statusText } catch (f) { u = "" }
                                                a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = h.text ? 200 : 404
                                            }
                                    } catch (p) { r || o(-1, p) }
                                    h && o(a, u, h, c)
                                }, n.async ? 4 === l.readyState ? setTimeout(i, 0) : (s = ++Yn, Vn && (Un || (Un = {}, G(e).unload(Vn)), Un[s] = i), l.onreadystatechange = i) : i()
                            },
                            abort: function() { i && i(0, 1) }
                        }
                    }
                });
            var Qn, Xn, Jn = /^(?:toggle|show|hide)$/,
                Kn = new RegExp("^(?:([-+])=|)(" + Z + ")([a-z%]*)$", "i"),
                Gn = /queueHooks$/,
                Zn = [j],
                ei = {
                    "*": [function(e, t) {
                        var n, i, r = this.createTween(e, t),
                            o = Kn.exec(t),
                            s = r.cur(),
                            a = +s || 0,
                            l = 1,
                            u = 20;
                        if (o) {
                            if (n = +o[2], i = o[3] || (G.cssNumber[e] ? "" : "px"), "px" !== i && a) {
                                a = G.css(r.elem, e, !0) || n || 1;
                                do l = l || ".5", a /= l, G.style(r.elem, e, a + i); while (l !== (l = r.cur() / s) && 1 !== l && --u)
                            }
                            r.unit = i, r.start = a, r.end = o[1] ? a + (o[1] + 1) * n : n
                        }
                        return r
                    }]
                };
            G.Animation = G.extend(A, { tweener: function(e, t) { G.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" "); for (var n, i = 0, r = e.length; r > i; i++) n = e[i], ei[n] = ei[n] || [], ei[n].unshift(t) }, prefilter: function(e, t) { t ? Zn.unshift(e) : Zn.push(e) } }), G.Tween = R, R.prototype = { constructor: R, init: function(e, t, n, i, r, o) { this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (G.cssNumber[n] ? "" : "px") }, cur: function() { var e = R.propHooks[this.prop]; return e && e.get ? e.get(this) : R.propHooks._default.get(this) }, run: function(e) { var t, n = R.propHooks[this.prop]; return this.pos = t = this.options.duration ? G.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : R.propHooks._default.set(this), this } }, R.prototype.init.prototype = R.prototype, R.propHooks = { _default: { get: function(e) { var t; return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = G.css(e.elem, e.prop, !1, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop] }, set: function(e) { G.fx.step[e.prop] ? G.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[G.cssProps[e.prop]] || G.cssHooks[e.prop]) ? G.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now } } }, R.propHooks.scrollTop = R.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, G.each(["toggle", "show", "hide"], function(e, t) {
                var n = G.fn[t];
                G.fn[t] = function(i, r, o) { return null == i || "boolean" == typeof i || !e && G.isFunction(i) && G.isFunction(r) ? n.apply(this, arguments) : this.animate(H(t, !0), i, r, o) }
            }), G.fn.extend({
                fadeTo: function(e, t, n, i) { return this.filter(v).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i) },
                animate: function(e, t, n, i) {
                    var r = G.isEmptyObject(e),
                        o = G.speed(t, n, i),
                        s = function() {
                            var t = A(this, G.extend({}, e), o);
                            r && t.stop(!0)
                        };
                    return r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
                },
                stop: function(e, n, i) {
                    var r = function(e) {
                        var t = e.stop;
                        delete e.stop, t(i)
                    };
                    return "string" != typeof e && (i = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            n = null != e && e + "queueHooks",
                            o = G.timers,
                            s = G._data(this);
                        if (n) s[n] && s[n].stop && r(s[n]);
                        else
                            for (n in s) s[n] && s[n].stop && Gn.test(n) && r(s[n]);
                        for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(i), t = !1, o.splice(n, 1));
                        (t || !i) && G.dequeue(this, e)
                    })
                }
            }), G.each({ slideDown: H("show"), slideUp: H("hide"), slideToggle: H("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, t) { G.fn[e] = function(e, n, i) { return this.animate(t, e, n, i) } }), G.speed = function(e, t, n) { var i = e && "object" == typeof e ? G.extend({}, e) : { complete: n || !n && t || G.isFunction(e) && e, duration: e, easing: n && t || t && !G.isFunction(t) && t }; return i.duration = G.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in G.fx.speeds ? G.fx.speeds[i.duration] : G.fx.speeds._default, (null == i.queue || i.queue === !0) && (i.queue = "fx"), i.old = i.complete, i.complete = function() { G.isFunction(i.old) && i.old.call(this), i.queue && G.dequeue(this, i.queue) }, i }, G.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 } }, G.timers = [], G.fx = R.prototype.init, G.fx.tick = function() {
                for (var e, t = G.timers, n = 0; n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
                t.length || G.fx.stop()
            }, G.fx.timer = function(e) { e() && G.timers.push(e) && !Xn && (Xn = setInterval(G.fx.tick, G.fx.interval)) }, G.fx.interval = 13, G.fx.stop = function() { clearInterval(Xn), Xn = null }, G.fx.speeds = { slow: 600, fast: 200, _default: 400 }, G.fx.step = {}, G.expr && G.expr.filters && (G.expr.filters.animated = function(e) { return G.grep(G.timers, function(t) { return e === t.elem }).length });
            var ti = /^(?:body|html)$/i;
            G.fn.offset = function(e) {
                if (arguments.length) return e === t ? this : this.each(function(t) { G.offset.setOffset(this, e, t) });
                var n, i, r, o, s, a, l, u = { top: 0, left: 0 },
                    c = this[0],
                    h = c && c.ownerDocument;
                if (h) return (i = h.body) === c ? G.offset.bodyOffset(c) : (n = h.documentElement, G.contains(n, c) ? ("undefined" != typeof c.getBoundingClientRect && (u = c.getBoundingClientRect()), r = $(h), o = n.clientTop || i.clientTop || 0, s = n.clientLeft || i.clientLeft || 0, a = r.pageYOffset || n.scrollTop, l = r.pageXOffset || n.scrollLeft, { top: u.top + a - o, left: u.left + l - s }) : u)
            }, G.offset = {
                bodyOffset: function(e) {
                    var t = e.offsetTop,
                        n = e.offsetLeft;
                    return G.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(G.css(e, "marginTop")) || 0, n += parseFloat(G.css(e, "marginLeft")) || 0), { top: t, left: n }
                },
                setOffset: function(e, t, n) {
                    var i = G.css(e, "position");
                    "static" === i && (e.style.position = "relative");
                    var r, o, s = G(e),
                        a = s.offset(),
                        l = G.css(e, "top"),
                        u = G.css(e, "left"),
                        c = ("absolute" === i || "fixed" === i) && G.inArray("auto", [l, u]) > -1,
                        h = {},
                        d = {};
                    c ? (d = s.position(), r = d.top, o = d.left) : (r = parseFloat(l) || 0, o = parseFloat(u) || 0), G.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (h.top = t.top - a.top + r), null != t.left && (h.left = t.left - a.left + o), "using" in t ? t.using.call(e, h) : s.css(h)
                }
            }, G.fn.extend({
                position: function() {
                    if (this[0]) {
                        var e = this[0],
                            t = this.offsetParent(),
                            n = this.offset(),
                            i = ti.test(t[0].nodeName) ? { top: 0, left: 0 } : t.offset();
                        return n.top -= parseFloat(G.css(e, "marginTop")) || 0, n.left -= parseFloat(G.css(e, "marginLeft")) || 0, i.top += parseFloat(G.css(t[0], "borderTopWidth")) || 0, i.left += parseFloat(G.css(t[0], "borderLeftWidth")) || 0, { top: n.top - i.top, left: n.left - i.left }
                    }
                },
                offsetParent: function() { return this.map(function() { for (var e = this.offsetParent || z.body; e && !ti.test(e.nodeName) && "static" === G.css(e, "position");) e = e.offsetParent; return e || z.body }) }
            }), G.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(e, n) {
                var i = /Y/.test(n);
                G.fn[e] = function(r) { return G.access(this, function(e, r, o) { var s = $(e); return o === t ? s ? n in s ? s[n] : s.document.documentElement[r] : e[r] : (s ? s.scrollTo(i ? G(s).scrollLeft() : o, i ? o : G(s).scrollTop()) : e[r] = o, void 0) }, e, r, arguments.length, null) }
            }), G.each({ Height: "height", Width: "width" }, function(e, n) {
                G.each({ padding: "inner" + e, content: n, "": "outer" + e }, function(i, r) {
                    G.fn[r] = function(r, o) {
                        var s = arguments.length && (i || "boolean" != typeof r),
                            a = i || (r === !0 || o === !0 ? "margin" : "border");
                        return G.access(this, function(n, i, r) { var o; return G.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : r === t ? G.css(n, i, r, a) : G.style(n, i, r, a) }, n, s ? r : t, s, null)
                    }
                })
            }), e.jQuery = e.$ = G, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() { return G })
        }(window)
    }).call(this),
        function() { e = t = window.jQuery.noConflict() }.call(this), "undefined" == typeof Package && (Package = {}), Package.jquery = { $: e, jQuery: t }
}(),
function() {
    var e, t = (Package.meteor.Meteor, Package.jquery.$, Package.jquery.jQuery, Package.underscore._);
    (function() {
        e = {};
        var n = function(e, n) { if (!document.querySelectorAll) throw new Error("This browser doesn't support querySelectorAll."); var i = n; return p(n, "DomUtils_findAllBySelector_scope", function(n) { var r = t.map(e.split(","), function(e) { return n + " " + e }).join(","); return i.querySelectorAll(r) }) },
            i = window.Sizzle || window.jQuery && window.jQuery.find || n,
            r = document.createElement("div");
        r.innerHTML = "   <link/><table></table><select><!----></select>";
        var o = document.createElement("div");
        o.innerHTML = "<select><option selected>Foo</option></select>", o.firstChild.setAttribute("name", "myname");
        var s = { leadingWhitespaceKilled: 3 !== r.firstChild.nodeType, tbodyInsertion: r.getElementsByTagName("tbody").length > 0, tagsLost: 0 === r.getElementsByTagName("link").length, commentsLost: !r.getElementsByTagName("select")[0].firstChild, selectValueMustBeFromAttribute: "Foo" !== o.firstChild.value, mustSetNameInCreateElement: o.firstChild.outerHTML && -1 === o.firstChild.outerHTML.indexOf("myname") },
            a = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area: [1, "<map>", "</map>"], _default: [0, "", ""] };
        t.extend(a, { optgroup: a.option, tbody: a.thead, tfoot: a.thead, colgroup: a.thead, caption: a.thead, th: a.td }), s.tagsLost && (a._default = [1, "div<div>", "</div>"]);
        var l = /^\s+/,
            u = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            c = /<([\w:]+)/,
            h = /<tbody/i,
            d = /<|&#?\w+;/;
        e.htmlToFragment = function(e) {
            var n = document,
                i = n.createDocumentFragment();
            if (e.length)
                if (d.test(e)) {
                    e = e.replace(u, "<$1></$2>");
                    var r = c.exec(e),
                        o = r ? r[1].toLowerCase() : "",
                        f = a[o] || a._default,
                        p = f[1] + e + f[2];
                    s.commentsLost && (p = p.replace(/<\s*(select|option)\b/gi, '<ins domutilsrealtagname="$1"'), p = p.replace(/<\/\s*(select|option)\b/gi, "</ins"));
                    var g = n.createElement("div");
                    g.innerHTML = p;
                    for (var m = f[0]; m--;) g = g.lastChild;
                    if (s.tbodyInsertion && !h.test(e)) {
                        var v = g.getElementsByTagName("tbody");
                        t.each(v, function(e) { e.firstChild || e.parentNode.removeChild(e) })
                    }
                    if (s.leadingWhitespaceKilled) {
                        var _ = l.exec(e);
                        _ && g.insertBefore(n.createTextNode(_[0]), g.firstChild)
                    }
                    if (s.commentsLost) {
                        var y = [];
                        t.each(g.getElementsByTagName("ins"), function(e) { e.getAttribute("domutilsrealtagname") && y.push(e) }), t.each(y, function(e) {
                            var n = e.getAttribute("domutilsrealtagname");
                            s.mustSetNameInCreateElement && e.getAttribute("name") && (n = "<" + n + " name='" + t.escape(e.getAttribute("name")) + "'/>");
                            var i = document.createElement(n);
                            e.removeAttribute("domutilsrealtagname");
                            for (var r = e.attributes, o = 0; o < r.length; ++o) {
                                var a = r.item(o);
                                if (a.specified) {
                                    var l = a.name.toLowerCase(),
                                        u = String(a.value);
                                    "selected" === l && "" === u && (u = "selected"), i.setAttribute(l, u)
                                }
                            }
                            for (; e.firstChild;) i.appendChild(e.firstChild);
                            e.parentNode.replaceChild(i, e)
                        })
                    }
                    for (; g.firstChild;) i.appendChild(g.firstChild)
                } else i.appendChild(n.createTextNode(e));
            else;
            return i
        }, e.fragmentToHtml = function(t) { return t = t.cloneNode(!0), e.fragmentToContainer(t).innerHTML }, e.fragmentToContainer = function(e) {
            for (var t = document, n = e.firstChild; n && 1 !== n.nodeType;) n = n.nextSibling;
            var i = t.createElement("div");
            if (n) {
                var r = n.nodeName,
                    o = a[r] || a._default;
                i.innerHTML = o[1] + o[2];
                for (var s = o[0]; s--;) i = i.lastChild;
                i.appendChild(e)
            } else i.appendChild(e);
            return i
        }, e.elementContains = function(e, t) { return 1 !== e.nodeType ? !1 : e === t ? !1 : e.compareDocumentPosition ? 16 & e.compareDocumentPosition(t) : (t = t.parentNode, t && 1 === t.nodeType ? e === t ? !0 : e.contains(t) : !1) }, e.findAll = function(t, n) { if (11 === t.nodeType) { for (var r = t, o = e.fragmentToContainer(r), s = i(n, o); o.firstChild;) r.appendChild(o.firstChild); return s } return i(n, t) }, e.find = function(t, n) { var i = e.findAll(t, n); return i.length ? i[0] : null };
        var f = function(t, n, i) { return e.elementContains(t, n) ? !1 : e.compareElementIndex(n, t) <= 0 && e.compareElementIndex(t, i) <= 0 };
        e.findAllClipped = function(n, i, r, o) { for (; r !== o && 1 !== r.nodeType;) r = r.nextSibling; for (; r !== o && 1 !== o.nodeType;) o = o.previousSibling; if (1 !== r.nodeType) return []; var s = e.findAll(n, i); return t.reject(s, function(e) { return !f(e, r, o) }) }, e.findClipped = function(t, n, i, r) { var o = e.findAllClipped(t, n, i, r); return o.length ? o[0] : null };
        var p = function(e, t, n) {
                var i = !1;
                e.getAttribute("id") || (e.setAttribute("id", t), i = !0);
                try { var r = e.getAttribute("id").replace(/'/g, "\\$&"); return n("[id='" + r + "']") } finally { i && e.removeAttribute("id") }
            },
            g = function(t, n, i, r, o) {
                for (var s = i.split(","), a = 0, l = s.length; l > a; a++) {
                    var u = p(t, "DomUtils_matchesSelector_target", function(s) {
                        var a, l = i.match(/\S.*?(?=\s*$)/)[0],
                            u = l + s;
                        return a = r ? e.findClipped(n, u, r, o) : e.find(n, u), a === t
                    });
                    if (u) return !0
                }
                return !1
            };
        e.matchesSelector = function(e, t, n) { return g(e, t, n) }, e.matchesSelectorClipped = function(e, t, n, i, r) { return g(e, t, n, i, r) }, e.compareElementIndex = function(e, t) { if (e === t) return 0; if (e.compareDocumentPosition) { var n = e.compareDocumentPosition(t); return 24 & n ? 0 : 4 & n ? -1 : 1 } return e.contains(t) || t.contains(e) ? 0 : e.sourceIndex < t.sourceIndex ? -1 : 1 }, e.wrapFragmentForContainer = function(e, n) {
            if (n && "TABLE" === n.nodeName && t.any(e.childNodes, function(e) { return "TR" === e.nodeName })) {
                var i = document.createElement("TBODY");
                i.appendChild(e), e.appendChild(i)
            }
        }, e.isInDocument = function(t) { return t === document ? !0 : (1 !== t.nodeType && (t = t.parentNode), t && 1 === t.nodeType ? t === document.body ? !0 : e.elementContains(document.body, t) : !1) }, e.rangeToHtml = function(t, n) { for (var i = document.createDocumentFragment(), r = t, o = n.nextSibling; r && r !== o; r = r.nextSibling) i.appendChild(r.cloneNode(!0)); return e.fragmentToHtml(i) }, e.outerHtml = function(t) { return e.rangeToHtml(t, t) }, e.setElementValue = function(t, n) {
            if (t.value = n, t.value !== n && "SELECT" === t.nodeName)
                for (var i = e.findAll(t, "option"), r = 0; r < i.length; ++r)
                    if (e.getElementValue(i[r]) === n) return i[r].selected = !0, void 0
        }, e.getElementValue = function(t) { if (!s.selectValueMustBeFromAttribute) return t.value; if ("OPTION" === t.nodeName) { var n = t.attributes.value; return !n || n.specified ? t.value : t.text } return "SELECT" === t.nodeName ? t.selectedIndex < 0 ? null : e.getElementValue(t.options[t.selectedIndex]) : t.value }
    }).call(this), "undefined" == typeof Package && (Package = {}), Package.domutils = { DomUtils: e }
}(),
function() {
    {
        var e;
        Package.meteor.Meteor
    }(function() {
        var t = function() { var e = document.createTextNode(""); try { e.test = 123 } catch (t) {} return 123 !== e.test ? !1 : document.documentMode ? !1 : !0 }(),
            n = function(e, n) {
                if (t) return [e, n];
                if (3 === e.nodeType) {
                    var i = document.createComment("IE");
                    e.parentNode.insertBefore(i, e), e = i
                }
                if (3 === n.nodeType) {
                    var i = document.createComment("IE");
                    n.parentNode.insertBefore(i, n.nextSibling), n = i
                }
                return [e, n]
            };
        e = function(e, t, r, o) {
            if (11 === t.nodeType) r = t.lastChild, t = t.firstChild;
            else if (!t.parentNode) throw new Error("LiveRange start and end must have a parent");
            r = r || t, this.tag = e;
            var s = n(t, r);
            t = this._ensureTag(s[0]), r = this._ensureTag(s[1]);
            var a = i(t[e][0], !0, r, t, o),
                l = i(r[e][1], !1, t, r, o);
            this._insertEntries(t, 0, a, [this]), this._insertEntries(r, 1, l, [this])
        };
        var i = function(e, t, n, i, r) { for (var o, s = t ? n.parentNode.lastChild : i, a = t ? !r : r, l = 0, u = s; l <= e.length; l++) { for (var c = e[l], h = c && (t ? c._end : c._start); u !== h && u !== n;) u = u.previousSibling; if (h === n) { if (o = l, a) break } else if (u === n) { o = l; break } } return o };
        e.prototype._ensureTag = function(e) {
            return this.tag in e || (e[this.tag] = [
                [],
                []
            ]), e
        };
        var r = function() {
            var e = document.createElement("DIV"),
                t = !1;
            try { e.test = 12, delete e.test, t = !0 } catch (n) {}
            return t
        }();
        e._cleanNode = function(e, t, n) { var i = t[e];!i || i[0].length + i[1].length && !n || (r ? delete t[e] : t.removeAttribute(e)) }, e.prototype.destroy = function(t) {
            var n = this;
            if (t) {
                if (this.visit(function(e, t) { e && (t._start = null, t._end = null) }, function(t, i) {
                        if (!t)
                            for (var r = i.firstChild; r; r = r.nextSibling) e._cleanNode(n.tag, r, !0)
                    }), this._removeEntries(this._start, 0, this._startIndex), this._removeEntries(this._end, 1, 0, this._endIndex + 1), this._start !== this._end) {
                    for (var i = this._start.nextSibling; i !== this._end; i = i.nextSibling) e._cleanNode(n.tag, i, !0);
                    this._start[n.tag] && this._removeEntries(this._start, 1), this._end[n.tag] && this._removeEntries(this._end, 0)
                }
                this._start = this._end = null
            } else this._removeEntries(this._start, 0, this._startIndex, this._startIndex + 1), this._removeEntries(this._end, 1, this._endIndex, this._endIndex + 1), this._start = this._end = null
        }, e.prototype.firstNode = function() { return this._start }, e.prototype.lastNode = function() { return this._end }, e.prototype.containerNode = function() { return this._start.parentNode }, e.prototype.visit = function(e, t) {
            e = e || function() {}, t = t || function() {};
            var n = this.tag,
                i = function(r, o, s) {
                    for (var a = s || 0, l = o.nextSibling, u = r; u && u !== l; u = u.nextSibling) {
                        var c = u[n] && u[n][0];
                        if (c && a < c.length) {
                            var h = c[a],
                                d = h._start,
                                f = h._end;
                            e(!0, h) !== !1 && i(d, f, a + 1), e(!1, h), u = f
                        } else t(!0, u) !== !1 && u.firstChild && i(u.firstChild, u.lastChild), t(!1, u);
                        a = 0
                    }
                };
            i(this._start, this._end, this._startIndex + 1)
        }, e.prototype._removeEntries = function(t, n, i, r) {
            var o = t[this.tag][n];
            i = i || 0, r = r || 0 === r ? r : o.length;
            for (var s = o.splice(i, r - i), a = i; a < o.length; a++) n ? o[a]._endIndex = a : o[a]._startIndex = a;
            return o.length || e._cleanNode(this.tag, t), s
        }, e.prototype._insertEntries = function(e, t, n, i) {
            var r = e[this.tag][t];
            Array.prototype.splice.apply(r, [n, 0].concat(i));
            for (var o = n; o < r.length; o++) t ? (r[o]._end = e, r[o]._endIndex = o) : (r[o]._start = e, r[o]._startIndex = o)
        }, e.prototype.replaceContents = function(e) { if (!e.firstChild) throw new Error("replaceContents requires non-empty fragment"); return this.operate(function(t, n) { t.parentNode.insertBefore(e, t); for (var i = t.ownerDocument.createDocumentFragment(), r = t;;) { var o = r.nextSibling; if (i.appendChild(r), r === n) break; if (r = o, !r) throw new Error("LiveRanges must begin and end on siblings in order") } return i }) }, e.prototype.operate = function(e) {
            var t = this._start,
                i = this._end,
                r = this._removeEntries(t, 0, 0, this._startIndex + 1),
                o = this._removeEntries(i, 1, this._endIndex),
                s = t.parentNode,
                a = t.previousSibling,
                l = i.nextSibling,
                u = null;
            u = e(t, i);
            var c = a ? a.nextSibling : s.firstChild,
                h = l ? l.previousSibling : s.lastChild;
            if (!c || c === l) throw new Error("Ranges must contain at least one element");
            var d = n(c, h);
            return c = this._ensureTag(d[0]), h = this._ensureTag(d[1]), this._insertEntries(c, 0, 0, r), this._insertEntries(h, 1, h[this.tag][1].length, o), u
        }, e.transplantTag = function(e, t, n) { if (n[e]) { t[e] = n[e], n[e] = null; for (var i = t[e][0], r = t[e][1], o = 0; o < i.length; o++) i[o]._start = t; for (var o = 0; o < r.length; o++) r[o]._end = t } }, e.transplantRange = function(e, t, n) { n._ensureTag(e), t !== e && n._ensureTag(t), n._insertEntries(e, 0, 0, n._start[n.tag][0].slice(0, n._startIndex + 1)), n._insertEntries(t, 1, 0, n._end[n.tag][1].slice(n._endIndex)) }, e.prototype.insertBefore = function(e) {
            var t = e.firstChild;
            t && (this._start.parentNode.insertBefore(e, this._start), this._ensureTag(t), this._insertEntries(t, 0, 0, this._removeEntries(this._start, 0, 0, this._startIndex)))
        }, e.prototype.insertAfter = function(e) {
            var t = e.lastChild;
            t && (this._end.parentNode.insertBefore(e, this._end.nextSibling), this._ensureTag(t), this._insertEntries(t, 1, t[this.tag][1].length, this._removeEntries(this._end, 1, this._endIndex + 1)))
        }, e.prototype.extract = function() {
            if (this._startIndex > 0 && this._start[this.tag][0][this._startIndex - 1]._end === this._end) return null;
            var e = this._start.previousSibling,
                t = this._end.nextSibling,
                n = this._start.parentNode;
            this._startIndex > 0 && (this._ensureTag(t), this._insertEntries(t, 0, 0, this._removeEntries(this._start, 0, 0, this._startIndex))), this._endIndex < this._end[this.tag][1].length - 1 && (this._ensureTag(e), this._insertEntries(e, 1, e[this.tag][1].length, this._removeEntries(this._end, 1, this._endIndex + 1)));
            for (var i, r = document.createDocumentFragment(); i = e ? e.nextSibling : n.firstChild, i && i !== t;) r.appendChild(i);
            return r
        }, e.prototype.findParent = function(t) { var n = o(this.tag, this._end, this._endIndex); return n ? n : t ? null : e.findRange(this.tag, this.containerNode()) }, e.findRange = function(t, n) { var i = o(t, n); return i ? i : n.parentNode ? e.findRange(t, n.parentNode) : null };
        var o = function(e, t, n) {
            if ("undefined" == typeof n && (n = -1), t[e] && n + 1 < t[e][1].length) return t[e][1][n + 1];
            for (var i = t.nextSibling; i;) {
                var n = 0,
                    r = i[e] && i[e][0];
                if (r && r.length) {
                    var o = r[0];
                    i = o._end, n = o._endIndex + 1
                }
                if (i[e] && n < i[e][1].length) return i[e][1][n];
                i = i.nextSibling
            }
            return null
        }
    }).call(this), "undefined" == typeof Package && (Package = {}), Package.liverange = { LiveRange: e }
}(),
function() {
    var e, t = (Package.meteor.Meteor, Package.underscore._),
        n = Package.domutils.DomUtils;
    (function() {
        var n, i = [],
            r = function() { return !1 },
            o = function() { return !0 },
            s = function(e) {
                var t = e.stopPropagation,
                    n = e.preventDefault;
                e.isPropagationStopped = r, e.isImmediatePropagationStopped = r, e.isDefaultPrevented = r, e.stopPropagation = function() { e.isPropagationStopped = o, t ? t.call(e) : e.cancelBubble = !0 }, e.preventDefault = function() { e.isDefaultPrevented = o, n ? n.call(e) : e.returnValue = !1 }, e.stopImmediatePropagation = function() { e.stopPropagation(), e.isImmediatePropagationStopped = o };
                var i = e.type;
                if (void 0 === e.metaKey && (e.metaKey = e.ctrlKey), /^key/.test(i)) null == e.which && (e.which = null != e.charCode ? e.charCode : e.keyCode);
                else if (/^(?:mouse|contextmenu)|click/.test(i) && (!e.relatedTarget && e.fromElement && (e.relatedTarget = e.fromElement === e.target ? e.toElement : e.fromElement), !e.which && void 0 !== e.button)) {
                    var s = e.button;
                    e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0
                }
                return e
            },
            a = function(e) { e = s(e), t.each(i, function(t) { t.types[e.type] && (!t._checkIECompliance || e.currentTarget["_uevents_test_eventtype_" + e.type]) && t.handler.call(null, e) }) },
            l = function() { return n || (n = document.addEventListener ? new e._impl.w3c(a) : new e._impl.ie(a)), n },
            u = {};
        e = function(e, t) { this.handler = e, this.types = {}, this.impl = l(), this._checkIECompliance = t, i.push(this) }, t.extend(e.prototype, {
            addType: function(e) { this.types[e] || (this.types[e] = !0, u[e] = (u[e] || 0) + 1, 1 === u[e] && this.impl.addType(e)) },
            removeType: function(e) { this.types[e] && (delete this.types[e], u[e]--, u[e] || this.impl.removeType(e)) },
            installHandler: function(e, n) { 1 === e.nodeType && (this.impl.installHandler(e, n), this._checkIECompliance && (e["_uevents_test_eventtype_" + n] = e, e.firstChild && t.each(e.getElementsByTagName("*"), function(e) { e["_uevents_test_eventtype_" + n] = e }))) },
            destroy: function() {
                var e = this;
                i = t.without(i, e), t.each(t.keys(e.types), function(t) { e.removeType(t) })
            }
        })
    }).call(this),
        function() {
            var i = 0,
                r = 1,
                o = 2;
            e._impl = e._impl || {}, e._impl.w3c = function(e) { this.deliver = e, this.typeCounts = {}, this.boundHandler = t.bind(this.handler, this), this.boundCapturer = t.bind(this.capturer, this), this.focusBlurMode = "onfocusin" in document.createElement("DIV") ? i : o, this.simulateMouseEnterLeave = !window.opera }, t.extend(e._impl.w3c.prototype, {
                addType: function(e) { this._listen(this._expandEventType(e)) },
                removeType: function(e) { this._unlisten(this._expandEventType(e)) },
                installHandler: function() {},
                _expandEventType: function(e) { var t = [e]; return this.focusBlurMode === r ? "focus" === e ? t.push("focusin") : "blur" === e && t.push("focusout") : this.focusBlurMode === o && ("focusin" === e ? t.push("focus") : "focusout" === e && t.push("blur")), this.simulateMouseEnterLeave && ("mouseenter" === e ? t.push("mouseover") : "mouseleave" === e && t.push("mouseout")), "tap" === e && (t.push("touchmove"), t.push("touchend")), t },
                _listen: function(e) {
                    var n = this;
                    t.each(e, function(e) { 1 === (n.typeCounts[e] = (n.typeCounts[e] || 0) + 1) && document.addEventListener(e, n.boundCapturer, !0) })
                },
                _unlisten: function(e) {
                    var n = this;
                    t.each(e, function(e) {--n.typeCounts[e] || document.removeEventListener(e, n.boundCapturer, !0) })
                },
                capturer: function(e) {
                    3 === e.target.nodeType && (e.target = e.target.parentNode);
                    var n = e.type,
                        i = e.bubbles,
                        r = e.target;
                    r.addEventListener(n, this.boundHandler, !1);
                    var o;
                    if (i) { o = []; for (var s = r.parentNode; s; s = s.parentNode) s.addEventListener(n, this.boundHandler, !1), o.push(s) }
                    setTimeout(function() { r.removeEventListener(n, this.boundHandler, !1), i && t.each(o, function(e) { e.removeEventListener(n, this.boundHandler, !1) }) }, 0)
                },
                handler: function(e) {
                    var t = function(e, t, n, i, r) {
                        var o = document.createEvent("UIEvents");
                        o.initUIEvent(e, n, i, window, r), o.synthetic = !0, t.dispatchEvent(o)
                    };
                    if (e.currentTarget === e.target && (this.focusBlurMode === r ? "focusin" === e.type ? t("focus", e.target, !1) : "focusout" === e.type && t("blur", e.target, !1) : this.focusBlurMode === o && ("focus" === e.type ? t("focusin", e.target, !0) : "blur" === e.type && t("focusout", e.target, !0))), this.focusBlurMode === r) { if (("focus" === e.type || "blur" === e.type) && !e.synthetic) return } else if (this.focusBlurMode === o && ("focusin" === e.type || "focusout" === e.type) && !e.synthetic) return;
                    (!this.simulateMouseEnterLeave || "mouseenter" !== e.type && "mouseleave" !== e.type || e.synthetic) && (this.deliver(e), !this.simulateMouseEnterLeave || e.relatedTarget && (e.currentTarget === e.relatedTarget || n.elementContains(e.currentTarget, e.relatedTarget)) || ("mouseover" === e.type ? t("mouseenter", e.currentTarget, !1) : "mouseout" === e.type && t("mouseleave", e.currentTarget, !1)), "touchmove" === e.type && (e.currentTarget._notTapping = !0), "touchend" === e.type && (e.currentTarget._notTapping || t("tap", e.currentTarget, !0), delete e.currentTarget._notTapping))
                }
            })
        }.call(this),
        function() {
            e._impl = e._impl || {}, e._impl.ie = function(e) {
                var t = this;
                this.deliver = e, this.curriedHandler = function() { t.handler.call(this, t) }, document.attachEvent("ondatasetcomplete", function() {
                    var e = window.event,
                        t = e && e.srcElement;
                    e.synthetic && t && "FORM" === t.nodeName && e.returnValue !== !1 && t.submit()
                })
            }, t.extend(e._impl.ie.prototype, {
                addType: function() {},
                removeType: function() {},
                installHandler: function(e, t) { var n = "on" + t; if (1 === e.nodeType) { this._install(e, n); for (var i = e.getElementsByTagName("*"), r = 0, o = i.length; o > r; r++) this._install(i[r], n) } },
                _install: function(e, t) { var n = [t]; "onfocus" === t ? n.push("onfocusin") : "onblur" === t ? n.push("onfocusout") : "onchange" === t ? ("INPUT" !== e.nodeName || "checkbox" !== e.type && "radio" !== e.type || (n = ["onpropertychange"]), n.push("oncellchange")) : "onsubmit" === t && n.push("ondatasetcomplete"); for (var i = 0; i < n.length; i++) e[n[i]] = this.curriedHandler },
                handler: function(e) {
                    var t = function(e, t) { var n = document.createEventObject(); return n.synthetic = !0, t.fireEvent(e, n), n.returnValue },
                        n = window.event,
                        i = n.type,
                        r = n.srcElement || document;
                    if (n.target = r, 1 === this.nodeType) { n.currentTarget = this; var o = this; if (o !== r || n.synthetic || ("focusin" === i ? t("onfocus", o) : "focusout" === i ? t("onblur", o) : "change" === i ? t("oncellchange", o) : "propertychange" === i ? "checked" === n.propertyName && t("oncellchange", o) : "submit" === i && t("ondatasetcomplete", o)), ("focus" === i || "blur" === n.type || "change" === n.type || "submit" === n.type) && !n.synthetic) return "submit" === n.type && (n.returnValue = !1), void 0; "cellchange" === i && n.synthetic && (i = n.type = "change"), "datasetcomplete" === i && n.synthetic && (i = n.type = "submit"), e.deliver(n) }
                }
            })
        }.call(this), "undefined" == typeof Package && (Package = {}), Package["universal-events"] = { UniversalEventListener: e }
}(),
function() {
    var e, t = (Package.meteor.Meteor, Package.underscore._);
    (function() {
        var n = function(e, t, n, i) { return { key: e, value: t, next: n, prev: i } };
        e = function() {
            var e = this;
            e._dict = {}, e._first = null, e._last = null, e._size = 0;
            var n = t.toArray(arguments);
            e._stringify = function(e) { return e }, "function" == typeof n[0] && (e._stringify = n.shift()), t.each(n, function(t) { e.putBefore(t[0], t[1], null) })
        }, t.extend(e.prototype, {
            _k: function(e) { return " " + this._stringify(e) },
            empty: function() { var e = this; return !e._first },
            size: function() { var e = this; return e._size },
            _linkEltIn: function(e) {
                var t = this;
                e.next ? (e.prev = e.next.prev, e.next.prev = e, e.prev && (e.prev.next = e)) : (e.prev = t._last, t._last && (t._last.next = e), t._last = e), (null === t._first || t._first === e.next) && (t._first = e)
            },
            _linkEltOut: function(e) {
                var t = this;
                e.next && (e.next.prev = e.prev), e.prev && (e.prev.next = e.next), e === t._last && (t._last = e.prev), e === t._first && (t._first = e.next)
            },
            putBefore: function(e, t, i) {
                var r = this;
                if (r._dict[r._k(e)]) throw new Error("Item " + e + " already present in OrderedDict");
                var o = i ? n(e, t, r._dict[r._k(i)]) : n(e, t, null);
                if (void 0 === o.next) throw new Error("could not find item to put this one before");
                r._linkEltIn(o), r._dict[r._k(e)] = o, r._size++
            },
            append: function(e, t) {
                var n = this;
                n.putBefore(e, t, null)
            },
            remove: function(e) {
                var t = this,
                    n = t._dict[t._k(e)];
                if (void 0 === n) throw new Error("Item " + e + " not present in OrderedDict");
                return t._linkEltOut(n), t._size--, delete t._dict[t._k(e)], n.value
            },
            get: function(e) { var t = this; return t.has(e) ? t._dict[t._k(e)].value : void 0 },
            has: function(e) { var n = this; return t.has(n._dict, n._k(e)) },
            forEach: function(t) {
                for (var n = this, i = 0, r = n._first; null !== r;) {
                    var o = t(r.value, r.key, i);
                    if (o === e.BREAK) return;
                    r = r.next, i++
                }
            },
            first: function() { var e = this; return e.empty() ? void 0 : e._first.key },
            firstValue: function() { var e = this; return e.empty() ? void 0 : e._first.value },
            last: function() { var e = this; return e.empty() ? void 0 : e._last.key },
            lastValue: function() { var e = this; return e.empty() ? void 0 : e._last.value },
            prev: function(e) { var t = this; if (t.has(e)) { var n = t._dict[t._k(e)]; if (n.prev) return n.prev.key } return null },
            next: function(e) { var t = this; if (t.has(e)) { var n = t._dict[t._k(e)]; if (n.next) return n.next.key } return null },
            moveBefore: function(e, t) {
                var n = this,
                    i = n._dict[n._k(e)],
                    r = t ? n._dict[n._k(t)] : null;
                if (void 0 === i) throw new Error("Item to move is not present");
                if (void 0 === r) throw new Error("Could not find element to move this one before");
                r !== i.next && (n._linkEltOut(i), i.next = r, n._linkEltIn(i))
            },
            indexOf: function(t) {
                var n = this,
                    i = null;
                return n.forEach(function(r, o, s) { return n._k(o) === n._k(t) ? (i = s, e.BREAK) : void 0 }), i
            },
            _checkRep: function() {
                var e = this;
                t.each(e._dict, function(e, t) { if (t.next === t) throw new Error("Next is a loop"); if (t.prev === t) throw new Error("Prev is a loop") })
            }
        }), e.BREAK = { "break": !0 }
    }).call(this), "undefined" == typeof Package && (Package = {}), Package["ordered-dict"] = { OrderedDict: e }
}(),
function() {
    var e, t = Package.meteor.Meteor,
        n = Package.underscore._;
    (function() {
        e = {}, e.active = !1, e.currentComputation = null;
        var i = function(t) { e.currentComputation = t, e.active = !!t },
            r = function() { return "undefined" != typeof t ? t._debug : "undefined" != typeof console && console.log ? console.log : function() {} },
            o = 1,
            s = [],
            a = !1,
            l = !1,
            u = !1,
            c = [],
            h = function() { a || (setTimeout(e.flush, 0), a = !0) },
            d = !1;
        e.Computation = function(e, t) {
            if (!d) throw new Error("Deps.Computation constructor is private; use Deps.autorun");
            d = !1;
            var n = this;
            n.stopped = !1, n.invalidated = !1, n.firstRun = !0, n._id = o++, n._onInvalidateCallbacks = [], n._parent = t, n._func = e, n._recomputing = !1;
            var i = !0;
            try { n._compute(), i = !1 } finally { n.firstRun = !1, i && n.stop() }
        }, n.extend(e.Computation.prototype, {
            onInvalidate: function(t) {
                var n = this;
                if ("function" != typeof t) throw new Error("onInvalidate requires a function");
                var i = function() { e.nonreactive(function() { t(n) }) };
                n.invalidated ? i() : n._onInvalidateCallbacks.push(i)
            },
            invalidate: function() {
                var e = this;
                if (!e.invalidated) {
                    e._recomputing || e.stopped || (h(), s.push(this)), e.invalidated = !0;
                    for (var t, n = 0; t = e._onInvalidateCallbacks[n]; n++) t();
                    e._onInvalidateCallbacks = []
                }
            },
            stop: function() { this.stopped || (this.stopped = !0, this.invalidate()) },
            _compute: function() {
                var t = this;
                t.invalidated = !1;
                var n = e.currentComputation;
                i(t);
                u = !0;
                try { t._func(t) } finally { i(n), u = !1 }
            },
            _recompute: function() {
                var e = this;
                for (e._recomputing = !0; e.invalidated && !e.stopped;) try { e._compute() } catch (t) { r()("Exception from Deps recompute:", t.stack || t.message) }
                e._recomputing = !1
            }
        }), e.Dependency = function() { this._dependentsById = {} }, n.extend(e.Dependency.prototype, {
            depend: function(t) {
                if (!t) {
                    if (!e.active) return !1;
                    t = e.currentComputation
                }
                var n = this,
                    i = t._id;
                return i in n._dependentsById ? !1 : (n._dependentsById[i] = t, t.onInvalidate(function() { delete n._dependentsById[i] }), !0)
            },
            changed: function() { var e = this; for (var t in e._dependentsById) e._dependentsById[t].invalidate() },
            hasDependents: function() { var e = this; for (var t in e._dependentsById) return !0; return !1 }
        }), n.extend(e, {
            flush: function() {
                if (l) throw new Error("Can't call Deps.flush while flushing");
                if (u) throw new Error("Can't flush inside Deps.autorun");
                for (l = !0, a = !0; s.length || c.length;) {
                    var e = s;
                    s = [];
                    for (var t, n = 0; t = e[n]; n++) t._recompute();
                    if (c.length) { var i = c.shift(); try { i() } catch (o) { r()("Exception from Deps afterFlush function:", o.stack || o.message) } }
                }
                l = !1, a = !1
            },
            autorun: function(t) {
                if ("function" != typeof t) throw new Error("Deps.autorun requires a function argument");
                d = !0;
                var n = new e.Computation(t, e.currentComputation);
                return e.active && e.onInvalidate(function() { n.stop() }), n
            },
            nonreactive: function(t) {
                var n = e.currentComputation;
                i(null);
                try { return t() } finally { i(n) }
            },
            _makeNonreactive: function(t) {
                if (t.$isNonreactive) return t;
                var i = function() {
                    var i, r = this,
                        o = n.toArray(arguments);
                    return e.nonreactive(function() { i = t.apply(r, o) }), i
                };
                return i.$isNonreactive = !0, i
            },
            onInvalidate: function(t) {
                if (!e.active) throw new Error("Deps.onInvalidate requires a currentComputation");
                e.currentComputation.onInvalidate(t)
            },
            afterFlush: function(e) { c.push(e), h() }
        })
    }).call(this),
        function() { t.flush = e.flush, t.autorun = e.autorun, t.autosubscribe = e.autorun, e.depend = function(e) { return e.depend() } }.call(this), "undefined" == typeof Package && (Package = {}), Package.deps = { Deps: e }
}(),
function() {
    var Meteor = Package.meteor.Meteor,
        JSON;
    (function() { window.JSON && (JSON = window.JSON) }).call(this),
        function() {
            "object" != typeof JSON && (JSON = {}),
                function() {
                    "use strict";

                    function f(e) { return 10 > e ? "0" + e : e }

                    function quote(e) { return escapable.lastIndex = 0, escapable.test(e) ? '"' + e.replace(escapable, function(e) { var t = meta[e]; return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4) }) + '"' : '"' + e + '"' }

                    function str(e, t) {
                        var n, i, r, o, s, a = gap,
                            l = t[e];
                        switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(e)), "function" == typeof rep && (l = rep.call(t, e, l)), typeof l) {
                            case "string":
                                return quote(l);
                            case "number":
                                return isFinite(l) ? String(l) : "null";
                            case "boolean":
                            case "null":
                                return String(l);
                            case "object":
                                if (!l) return "null";
                                if (gap += indent, s = [], "[object Array]" === Object.prototype.toString.apply(l)) { for (o = l.length, n = 0; o > n; n += 1) s[n] = str(n, l) || "null"; return r = 0 === s.length ? "[]" : gap ? "[\n" + gap + s.join(",\n" + gap) + "\n" + a + "]" : "[" + s.join(",") + "]", gap = a, r }
                                if (rep && "object" == typeof rep)
                                    for (o = rep.length, n = 0; o > n; n += 1) "string" == typeof rep[n] && (i = rep[n], r = str(i, l), r && s.push(quote(i) + (gap ? ": " : ":") + r));
                                else
                                    for (i in l) Object.prototype.hasOwnProperty.call(l, i) && (r = str(i, l), r && s.push(quote(i) + (gap ? ": " : ":") + r));
                                return r = 0 === s.length ? "{}" : gap ? "{\n" + gap + s.join(",\n" + gap) + "\n" + a + "}" : "{" + s.join(",") + "}", gap = a, r
                        }
                    }
                    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() { return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() { return this.valueOf() });
                    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                        gap, indent, meta = { "\b": "\\b", "	": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" },
                        rep;
                    "function" != typeof JSON.stringify && (JSON.stringify = function(e, t, n) {
                        var i;
                        if (gap = "", indent = "", "number" == typeof n)
                            for (i = 0; n > i; i += 1) indent += " ";
                        else "string" == typeof n && (indent = n);
                        if (rep = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw new Error("JSON.stringify");
                        return str("", { "": e })
                    }), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
                        function walk(e, t) {
                            var n, i, r = e[t];
                            if (r && "object" == typeof r)
                                for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (i = walk(r, n), void 0 !== i ? r[n] = i : delete r[n]);
                            return reviver.call(e, t, r)
                        }
                        var j;
                        if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) { return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4) })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({ "": j }, "") : j;
                        throw new SyntaxError("JSON.parse")
                    })
                }()
        }.call(this), "undefined" == typeof Package && (Package = {}), Package.json = { JSON: JSON }
}(),
function() {
    var e, t, n, i, r = (Package.meteor.Meteor, Package.json.JSON),
        o = Package.underscore._;
    (function() {
        e = {}, t = {};
        var s = {};
        e.addType = function(e, t) {
            if (o.has(s, e)) throw new Error("Type " + e + " already present");
            s[e] = t
        };
        var a = function(e) { return o.isNaN(e) || 1 / 0 === e || e === -1 / 0 },
            l = [{ matchJSONValue: function(e) { return o.has(e, "$date") && 1 === o.size(e) }, matchObject: function(e) { return e instanceof Date }, toJSONValue: function(e) { return { $date: e.getTime() } }, fromJSONValue: function(e) { return new Date(e.$date) } }, { matchJSONValue: function(e) { return o.has(e, "$InfNaN") && 1 === o.size(e) }, matchObject: a, toJSONValue: function(e) { var t; return t = o.isNaN(e) ? 0 : 1 / 0 === e ? 1 : -1, { $InfNaN: t } }, fromJSONValue: function(e) { return e.$InfNaN / 0 } }, { matchJSONValue: function(e) { return o.has(e, "$binary") && 1 === o.size(e) }, matchObject: function(e) { return "undefined" != typeof Uint8Array && e instanceof Uint8Array || e && o.has(e, "$Uint8ArrayPolyfill") }, toJSONValue: function(e) { return { $binary: n(e) } }, fromJSONValue: function(e) { return i(e.$binary) } }, { matchJSONValue: function(e) { return o.has(e, "$escape") && 1 === o.size(e) }, matchObject: function(e) { return o.isEmpty(e) || o.size(e) > 2 ? !1 : o.any(l, function(t) { return t.matchJSONValue(e) }) }, toJSONValue: function(t) { var n = {}; return o.each(t, function(t, i) { n[i] = e.toJSONValue(t) }), { $escape: n } }, fromJSONValue: function(t) { var n = {}; return o.each(t.$escape, function(t, i) { n[i] = e.fromJSONValue(t) }), n } }, {
                matchJSONValue: function(e) { return o.has(e, "$type") && o.has(e, "$value") && 2 === o.size(e) },
                matchObject: function(t) { return e._isCustomType(t) },
                toJSONValue: function(e) { return { $type: e.typeName(), $value: e.toJSONValue() } },
                fromJSONValue: function(e) {
                    var t = e.$type,
                        n = s[t];
                    return n(e.$value)
                }
            }];
        e._isCustomType = function(e) { return e && "function" == typeof e.toJSONValue && "function" == typeof e.typeName && o.has(s, e.typeName()) };
        var u = e._adjustTypesToJSONValue = function(e) { if (null === e) return null; var t = c(e); return void 0 !== t ? t : "object" != typeof e ? e : (o.each(e, function(t, n) { if ("object" == typeof t || void 0 === t || a(t)) { var i = c(t); return i ? (e[n] = i, void 0) : (u(t), void 0) } }), e) },
            c = function(e) { for (var t = 0; t < l.length; t++) { var n = l[t]; if (n.matchObject(e)) return n.toJSONValue(e) } return void 0 };
        e.toJSONValue = function(t) { var n = c(t); return void 0 !== n ? n : ("object" == typeof t && (t = e.clone(t), u(t)), t) };
        var h = e._adjustTypesFromJSONValue = function(e) {
                if (null === e) return null;
                var t = d(e);
                return t !== e ? t : "object" != typeof e ? e : (o.each(e, function(t, n) {
                    if ("object" == typeof t) {
                        var i = d(t);
                        if (t !== i) return e[n] = i, void 0;
                        h(t)
                    }
                }), e)
            },
            d = function(e) {
                if ("object" == typeof e && null !== e && o.size(e) <= 2 && o.all(e, function(e, t) { return "string" == typeof t && "$" === t.substr(0, 1) }))
                    for (var t = 0; t < l.length; t++) { var n = l[t]; if (n.matchJSONValue(e)) return n.fromJSONValue(e) }
                return e
            };
        e.fromJSONValue = function(t) { var n = d(t); return n === t && "object" == typeof t ? (t = e.clone(t), h(t), t) : n }, e.stringify = function(t, n) { var i = e.toJSONValue(t); return n && (n.canonical || n.indent) ? e._canonicalStringify(i, n) : r.stringify(i) }, e.parse = function(t) { if ("string" != typeof t) throw new Error("EJSON.parse argument should be a string"); return e.fromJSONValue(r.parse(t)) }, e.isBinary = function(e) { return !!("undefined" != typeof Uint8Array && e instanceof Uint8Array || e && e.$Uint8ArrayPolyfill) }, e.equals = function(t, n, i) {
            var r, s = !(!i || !i.keyOrderSensitive);
            if (t === n) return !0;
            if (o.isNaN(t) && o.isNaN(n)) return !0;
            if (!t || !n) return !1;
            if ("object" != typeof t || "object" != typeof n) return !1;
            if (t instanceof Date && n instanceof Date) return t.valueOf() === n.valueOf();
            if (e.isBinary(t) && e.isBinary(n)) {
                if (t.length !== n.length) return !1;
                for (r = 0; r < t.length; r++)
                    if (t[r] !== n[r]) return !1;
                return !0
            }
            if ("function" == typeof t.equals) return t.equals(n, i);
            if (t instanceof Array) {
                if (!(n instanceof Array)) return !1;
                if (t.length !== n.length) return !1;
                for (r = 0; r < t.length; r++)
                    if (!e.equals(t[r], n[r], i)) return !1;
                return !0
            }
            var a;
            if (s) { var l = []; return o.each(n, function(e, t) { l.push(t) }), r = 0, a = o.all(t, function(t, o) { return r >= l.length ? !1 : o !== l[r] ? !1 : e.equals(t, n[l[r]], i) ? (r++, !0) : !1 }), a && r === l.length }
            return r = 0, a = o.all(t, function(t, s) { return o.has(n, s) ? e.equals(t, n[s], i) ? (r++, !0) : !1 : !1 }), a && o.size(n) === r
        }, e.clone = function(t) { var n; if ("object" != typeof t) return t; if (null === t) return null; if (t instanceof Date) return new Date(t.getTime()); if (e.isBinary(t)) { n = e.newBinary(t.length); for (var i = 0; i < t.length; i++) n[i] = t[i]; return n } if (o.isArray(t) || o.isArguments(t)) { for (n = [], i = 0; i < t.length; i++) n[i] = e.clone(t[i]); return n } return "function" == typeof t.clone ? t.clone() : (n = {}, o.each(t, function(t, i) { n[i] = e.clone(t) }), n) }
    }).call(this),
        function() {
            function t(e) { return r.stringify(e) }
            var n = function(e, i, r, s, a) {
                var l, u, c, h, d = s,
                    f = i[e];
                switch (typeof f) {
                    case "string":
                        return t(f);
                    case "number":
                        return isFinite(f) ? String(f) : "null";
                    case "boolean":
                        return String(f);
                    case "object":
                        if (!f) return "null";
                        if (d = s + r, h = [], o.isArray(f) || o.isArguments(f)) { for (c = f.length, l = 0; c > l; l += 1) h[l] = n(l, f, r, d, a) || "null"; return u = 0 === h.length ? "[]" : d ? "[\n" + d + h.join(",\n" + d) + "\n" + s + "]" : "[" + h.join(",") + "]" }
                        var p = o.keys(f);
                        return a && (p = p.sort()), o.each(p, function(e) { u = n(e, f, r, d, a), u && h.push(t(e) + (d ? ": " : ":") + u) }), u = 0 === h.length ? "{}" : d ? "{\n" + d + h.join(",\n" + d) + "\n" + s + "}" : "{" + h.join(",") + "}"
                }
            };
            e._canonicalStringify = function(e, t) {
                if (t = o.extend({ indent: "", canonical: !1 }, t), t.indent === !0) t.indent = "  ";
                else if ("number" == typeof t.indent) {
                    for (var i = "", r = 0; r < t.indent; r++) i += " ";
                    t.indent = i
                }
                return n("", { "": e }, t.indent, "", t.canonical)
            }
        }.call(this),
        function() {
            for (var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = {}, s = 0; s < r.length; s++) o[r.charAt(s)] = s;
            n = function(e) {
                for (var t = [], n = null, i = null, r = null, o = null, s = 0; s < e.length; s++) switch (s % 3) {
                    case 0:
                        n = e[s] >> 2 & 63, i = (3 & e[s]) << 4;
                        break;
                    case 1:
                        i |= e[s] >> 4 & 15, r = (15 & e[s]) << 2;
                        break;
                    case 2:
                        r |= e[s] >> 6 & 3, o = 63 & e[s], t.push(a(n)), t.push(a(i)), t.push(a(r)), t.push(a(o)), n = null, i = null, r = null, o = null
                }
                return null != n && (t.push(a(n)), t.push(a(i)), null == r ? t.push("=") : t.push(a(r)), null == o && t.push("=")), t.join("")
            };
            var a = function(e) { return r.charAt(e) },
                l = function(e) { return "=" === e ? -1 : o[e] };
            e.newBinary = function(e) { if ("undefined" == typeof Uint8Array || "undefined" == typeof ArrayBuffer) { for (var t = [], n = 0; e > n; n++) t.push(0); return t.$Uint8ArrayPolyfill = !0, t } return new Uint8Array(new ArrayBuffer(e)) }, i = function(t) {
                var n = Math.floor(3 * t.length / 4);
                "=" == t.charAt(t.length - 1) && (n--, "=" == t.charAt(t.length - 2) && n--);
                for (var i = e.newBinary(n), r = null, o = null, s = null, a = 0, u = 0; u < t.length; u++) {
                    var c = t.charAt(u),
                        h = l(c);
                    switch (u % 4) {
                        case 0:
                            if (0 > h) throw new Error("invalid base64 string");
                            r = h << 2;
                            break;
                        case 1:
                            if (0 > h) throw new Error("invalid base64 string");
                            r |= h >> 4, i[a++] = r, o = (15 & h) << 4;
                            break;
                        case 2:
                            h >= 0 && (o |= h >> 2, i[a++] = o, s = (3 & h) << 6);
                            break;
                        case 3:
                            h >= 0 && (i[a++] = s | h)
                    }
                }
                return i
            }, t.base64Encode = n, t.base64Decode = i
        }.call(this), "undefined" == typeof Package && (Package = {}), Package.ejson = { EJSON: e, EJSONTest: t }
}(),
function() {
    {
        var e, t;
        Package.meteor.Meteor
    }(function() { t = { exports: {} } }).call(this),
        function() {
            ! function() {
                function e(e) {
                    for (var t = [], n = [], i = 0; i < e[0].length; i++) t.push(e[0][i][1]), n.push(e[0][i][0]);
                    return t = t.sort(function(e, t) { return e - t }), n = n.sort(function(e, t) { return e - t }), [
                        [t[0], n[0]],
                        [t[t.length - 1], n[n.length - 1]]
                    ]
                }

                function n(e, t, n) {
                    for (var i = [
                            [0, 0]
                        ], r = 0; r < n.length; r++) {
                        for (var o = 0; o < n[r].length; o++) i.push(n[r][o]);
                        i.push([0, 0])
                    }
                    for (var s = !1, r = 0, o = i.length - 1; r < i.length; o = r++) i[r][0] > t != i[o][0] > t && e < (i[o][1] - i[r][1]) * (t - i[r][0]) / (i[o][0] - i[r][0]) + i[r][1] && (s = !s);
                    return s
                }
                var i = {};
                "undefined" != typeof t && t.exports && (t.exports = i), i.lineStringsIntersect = function(e, t) {
                    for (var n = [], i = 0; i <= e.coordinates.length - 2; ++i)
                        for (var r = 0; r <= t.coordinates.length - 2; ++r) {
                            var o = { x: e.coordinates[i][1], y: e.coordinates[i][0] },
                                s = { x: e.coordinates[i + 1][1], y: e.coordinates[i + 1][0] },
                                a = { x: t.coordinates[r][1], y: t.coordinates[r][0] },
                                l = { x: t.coordinates[r + 1][1], y: t.coordinates[r + 1][0] },
                                u = (l.x - a.x) * (o.y - a.y) - (l.y - a.y) * (o.x - a.x),
                                c = (s.x - o.x) * (o.y - a.y) - (s.y - o.y) * (o.x - a.x),
                                h = (l.y - a.y) * (s.x - o.x) - (l.x - a.x) * (s.y - o.y);
                            if (0 != h) {
                                var d = u / h,
                                    f = c / h;
                                d >= 0 && 1 >= d && f >= 0 && 1 >= f && n.push({ type: "Point", coordinates: [o.x + d * (s.x - o.x), o.y + d * (s.y - o.y)] })
                            }
                        }
                    return 0 == n.length && (n = !1), n
                }, i.pointInBoundingBox = function(e, t) { return !(e.coordinates[1] < t[0][0] || e.coordinates[1] > t[1][0] || e.coordinates[0] < t[0][1] || e.coordinates[0] > t[1][1]) }, i.pointInPolygon = function(t, r) { for (var o = "Polygon" == r.type ? [r.coordinates] : r.coordinates, s = !1, a = 0; a < o.length; a++) i.pointInBoundingBox(t, e(o[a])) && (s = !0); if (!s) return !1; for (var l = !1, a = 0; a < o.length; a++) n(t.coordinates[1], t.coordinates[0], o[a]) && (l = !0); return l }, i.numberToRadius = function(e) { return e * Math.PI / 180 }, i.numberToDegree = function(e) { return 180 * e / Math.PI }, i.drawCircle = function(e, t, n) {
                    for (var r = [t.coordinates[1], t.coordinates[0]], o = e / 1e3 / 6371, s = [i.numberToRadius(r[0]), i.numberToRadius(r[1])], n = n || 15, a = [
                            [r[0], r[1]]
                        ], l = 0; n > l; l++) {
                        var u = 2 * Math.PI * l / n,
                            c = Math.asin(Math.sin(s[0]) * Math.cos(o) + Math.cos(s[0]) * Math.sin(o) * Math.cos(u)),
                            h = s[1] + Math.atan2(Math.sin(u) * Math.sin(o) * Math.cos(s[0]), Math.cos(o) - Math.sin(s[0]) * Math.sin(c));
                        a[l] = [], a[l][1] = i.numberToDegree(c), a[l][0] = i.numberToDegree(h)
                    }
                    return { type: "Polygon", coordinates: [a] }
                }, i.rectangleCentroid = function(e) {
                    var t = e.coordinates[0],
                        n = t[0][0],
                        i = t[0][1],
                        r = t[2][0],
                        o = t[2][1],
                        s = r - n,
                        a = o - i;
                    return { type: "Point", coordinates: [n + s / 2, i + a / 2] }
                }, i.pointDistance = function(e, t) {
                    var n = e.coordinates[0],
                        r = e.coordinates[1],
                        o = t.coordinates[0],
                        s = t.coordinates[1],
                        a = i.numberToRadius(s - r),
                        l = i.numberToRadius(o - n),
                        u = Math.pow(Math.sin(a / 2), 2) + Math.cos(i.numberToRadius(r)) * Math.cos(i.numberToRadius(s)) * Math.pow(Math.sin(l / 2), 2),
                        c = 2 * Math.atan2(Math.sqrt(u), Math.sqrt(1 - u));
                    return 6371 * c * 1e3
                }, i.geometryWithinRadius = function(e, t, n) {
                    if ("Point" == e.type) return i.pointDistance(e, t) <= n;
                    if ("LineString" == e.type || "Polygon" == e.type) {
                        var r, o = {};
                        r = "Polygon" == e.type ? e.coordinates[0] : e.coordinates;
                        for (var s in r)
                            if (o.coordinates = r[s], i.pointDistance(o, t) > n) return !1
                    }
                    return !0
                }, i.area = function(e) {
                    for (var t, n, i = 0, r = e.coordinates[0], o = r.length - 1, s = 0; s < r.length; o = s++) {
                        var t = { x: r[s][1], y: r[s][0] },
                            n = { x: r[o][1], y: r[o][0] };
                        i += t.x * n.y, i -= t.y * n.x
                    }
                    return i /= 2
                }, i.centroid = function(e) {
                    for (var t, n, r, o = 0, s = 0, a = e.coordinates[0], l = a.length - 1, u = 0; u < a.length; l = u++) {
                        var n = { x: a[u][1], y: a[u][0] },
                            r = { x: a[l][1], y: a[l][0] };
                        t = n.x * r.y - r.x * n.y, o += (n.x + r.x) * t, s += (n.y + r.y) * t
                    }
                    return t = 6 * i.area(e), { type: "Point", coordinates: [s / t, o / t] }
                }, i.simplify = function(e, t) {
                    t = t || 20, e = e.map(function(e) { return { lng: e.coordinates[0], lat: e.coordinates[1] } });
                    var n, i, r, o, s, a, l, u, c, h, d, f, p, g, m, v, _, y, b, w = Math.PI / 180 * .5,
                        k = new Array,
                        x = new Array,
                        C = new Array;
                    if (e.length < 3) return e;
                    for (n = e.length, h = 360 * t / (2 * Math.PI * 6378137), h *= h, r = 0, x[0] = 0, C[0] = n - 1, i = 1; i > 0;)
                        if (o = x[i - 1], s = C[i - 1], i--, s - o > 1) {
                            for (d = e[s].lng() - e[o].lng(), f = e[s].lat() - e[o].lat(), Math.abs(d) > 180 && (d = 360 - Math.abs(d)), d *= Math.cos(w * (e[s].lat() + e[o].lat())), p = d * d + f * f, a = o + 1, l = o, c = -1; s > a; a++) g = e[a].lng() - e[o].lng(), m = e[a].lat() - e[o].lat(), Math.abs(g) > 180 && (g = 360 - Math.abs(g)), g *= Math.cos(w * (e[a].lat() + e[o].lat())), v = g * g + m * m, _ = e[a].lng() - e[s].lng(), y = e[a].lat() - e[s].lat(), Math.abs(_) > 180 && (_ = 360 - Math.abs(_)), _ *= Math.cos(w * (e[a].lat() + e[s].lat())), b = _ * _ + y * y, u = v >= p + b ? b : b >= p + v ? v : (g * f - m * d) * (g * f - m * d) / p, u > c && (l = a, c = u);
                            h > c ? (k[r] = o, r++) : (i++, x[i - 1] = l, C[i - 1] = s, i++, x[i - 1] = o, C[i - 1] = l)
                        } else k[r] = o, r++;
                    k[r] = n - 1, r++;
                    for (var T = new Array, a = 0; r > a; a++) T.push(e[k[a]]);
                    return T.map(function(e) { return { type: "Point", coordinates: [e.lng, e.lat] } })
                }, i.destinationPoint = function(e, t, n) {
                    n /= 6371, t = i.numberToRadius(t);
                    var r = i.numberToRadius(e.coordinates[0]),
                        o = i.numberToRadius(e.coordinates[1]),
                        s = Math.asin(Math.sin(r) * Math.cos(n) + Math.cos(r) * Math.sin(n) * Math.cos(t)),
                        a = o + Math.atan2(Math.sin(t) * Math.sin(n) * Math.cos(r), Math.cos(n) - Math.sin(r) * Math.sin(s));
                    return a = (a + 3 * Math.PI) % (2 * Math.PI) - Math.PI, { type: "Point", coordinates: [i.numberToDegree(s), i.numberToDegree(a)] }
                }
            }()
        }.call(this),
        function() { e = t.exports }.call(this), "undefined" == typeof Package && (Package = {}), Package["geojson-utils"] = { GeoJSON: e }
}(),
function() {
    var e, t, n, i, r, o = Package.meteor.Meteor,
        s = Package.underscore._,
        a = Package.json.JSON,
        l = Package.ejson.EJSON,
        u = Package["ordered-dict"].OrderedDict,
        c = Package.deps.Deps,
        h = Package.random.Random,
        d = Package["geojson-utils"].GeoJSON;
    (function() {
        e = function(e) { this.name = e, this.docs = {}, this._observeQueue = new o._SynchronousQueue, this.next_qid = 1, this.queries = {}, this._savedOriginals = null, this.paused = !1 }, t = {}, e._applyChanges = function(e, t) { s.each(t, function(t, n) { void 0 === t ? delete e[n] : e[n] = t }) }, n = function(e) { var t = new Error(e); return t.name = "MinimongoError", t }, e.prototype.find = function(t, n) { return 0 === arguments.length && (t = {}), new e.Cursor(this, t, n) }, e.Cursor = function(t, n, o) {
            var s = this;
            if (o || (o = {}), this.collection = t, e._selectorIsId(n)) s.selector_id = e._idStringify(n), s.selector_f = e._compileSelector(n, s), s.sort_f = void 0;
            else {
                if (r(n)) throw new Error("$near can't be inside $or/$and/$nor/$not");
                s.selector_id = void 0, s.selector_f = e._compileSelector(n, s), s.sort_f = i(n) || o.sort ? e._compileSort(o.sort || [], s) : null
            }
            s.skip = o.skip, s.limit = o.limit, s.fields = o.fields, s.fields && (s.projection_f = e._compileProjection(s.fields)), s._transform = o.transform && "undefined" != typeof c ? c._makeNonreactive(o.transform) : o.transform, s.db_objects = null, s.cursor_pos = 0, "undefined" != typeof c && (s.reactive = void 0 === o.reactive ? !0 : o.reactive)
        }, e.Cursor.prototype.rewind = function() {
            var e = this;
            e.db_objects = null, e.cursor_pos = 0
        }, e.prototype.findOne = function(e, t) { return 0 === arguments.length && (e = {}), t = t || {}, t.limit = 1, this.find(e, t).fetch()[0] }, e.Cursor.prototype.forEach = function(e, t) {
            var n = this;
            for (null === n.db_objects && (n.db_objects = n._getRawObjects(!0)), n.reactive && n._depend({ addedBefore: !0, removed: !0, changed: !0, movedBefore: !0 }); n.cursor_pos < n.db_objects.length;) {
                var i = l.clone(n.db_objects[n.cursor_pos]);
                n.projection_f && (i = n.projection_f(i)), n._transform && (i = n._transform(i)), e.call(t, i, n.cursor_pos, n), ++n.cursor_pos
            }
        }, e.Cursor.prototype.getTransform = function() { var e = this; return e._transform }, e.Cursor.prototype.map = function(e, t) {
            var n = this,
                i = [];
            return n.forEach(function(r, o) { i.push(e.call(t, r, o, n)) }), i
        }, e.Cursor.prototype.fetch = function() {
            var e = this,
                t = [];
            return e.forEach(function(e) { t.push(e) }), t
        }, e.Cursor.prototype.count = function() { var e = this; return e.reactive && e._depend({ added: !0, removed: !0 }, !0), null === e.db_objects && (e.db_objects = e._getRawObjects(!0)), e.db_objects.length }, e.Cursor.prototype._publishCursor = function(e) { var t = this; if (!t.collection.name) throw new Error("Can't publish a cursor from a collection without a name."); var n = t.collection.name; return o.Collection._publishCursor(t, e, n) }, e._observeChangesCallbacksAreOrdered = function(e) { if (e.added && e.addedBefore) throw new Error("Please specify only one of added() and addedBefore()"); return !(!e.addedBefore && !e.movedBefore) }, e._observeCallbacksAreOrdered = function(e) { if (e.addedAt && e.added) throw new Error("Please specify only one of added() and addedAt()"); if (e.changedAt && e.changed) throw new Error("Please specify only one of changed() and changedAt()"); if (e.removed && e.removedAt) throw new Error("Please specify only one of removed() and removedAt()"); return !!(e.addedAt || e.movedTo || e.changedAt || e.removedAt) }, e.ObserveHandle = function() {}, s.extend(e.Cursor.prototype, {
            observe: function(t) { var n = this; return e._observeFromObserveChanges(n, t) },
            observeChanges: function(t) {
                var n = this,
                    i = e._observeChangesCallbacksAreOrdered(t);
                if (!t._allow_unordered && !i && (n.skip || n.limit)) throw new Error("must use ordered observe with skip or limit");
                var r, o = { selector_f: n.selector_f, sort_f: i && n.sort_f, results_snapshot: null, ordered: i, cursor: n, observeChanges: t.observeChanges, fields: n.fields, projection_f: n.projection_f };
                n.reactive && (r = n.collection.next_qid++, n.collection.queries[r] = o), o.results = n._getRawObjects(i), n.collection.paused && (o.results_snapshot = i ? [] : {});
                var a = function(e, t, i) {
                    return e ? function() {
                        var r = this,
                            o = arguments;
                        void 0 !== t && n.projection_f && (o[t] = n.projection_f(o[t]), i && s.isEmpty(o[t])) || n.collection.paused || n.collection._observeQueue.queueTask(function() { e.apply(r, o) })
                    } : function() {}
                };
                o.added = a(t.added, 1), o.changed = a(t.changed, 1, !0), o.removed = a(t.removed), i && (o.addedBefore = a(t.addedBefore, 1), o.movedBefore = a(t.movedBefore)), t._suppress_initial || n.collection.paused || s.each(o.results, function(e) {
                    var t = l.clone(e);
                    delete t._id, i && o.addedBefore(e._id, t, null), o.added(e._id, t)
                });
                var u = new e.ObserveHandle;
                return s.extend(u, { collection: n.collection, stop: function() { n.reactive && delete n.collection.queries[r] } }), n.reactive && c.active && c.onInvalidate(function() { u.stop() }), n.collection._observeQueue.drain(), u
            }
        }), e.Cursor.prototype._getRawObjects = function(e) {
            var t = this,
                n = e ? [] : {};
            if (t.selector_id) {
                if (t.skip) return n;
                if (s.has(t.collection.docs, t.selector_id)) {
                    var i = t.collection.docs[t.selector_id];
                    e ? n.push(i) : n[t.selector_id] = i
                }
                return n
            }
            for (var r in t.collection.docs) { var o = t.collection.docs[r]; if (t.selector_f(o) && (e ? n.push(o) : n[r] = o), t.limit && !t.skip && !t.sort_f && n.length === t.limit) return n }
            if (!e) return n;
            t.sort_f && n.sort(t.sort_f);
            var a = t.skip || 0,
                l = t.limit ? t.limit + a : n.length;
            return n.slice(a, l)
        }, e.Cursor.prototype._depend = function(e, t) {
            var n = this;
            if (c.active) {
                var i = new c.Dependency;
                i.depend();
                var r = s.bind(i.changed, i),
                    o = { _suppress_initial: !0, _allow_unordered: t };
                s.each(["added", "changed", "removed", "addedBefore", "movedBefore"], function(t) { e[t] && (o[t] = r) }), n.observeChanges(o)
            }
        }, e.prototype.insert = function(t, i) {
            var r = this;
            t = l.clone(t), s.has(t, "_id") || (t._id = e._useOID ? new e._ObjectID : h.id());
            var a = e._idStringify(t._id);
            if (s.has(r.docs, a)) throw n("Duplicate _id '" + t._id + "'");
            r._saveOriginal(a, void 0), r.docs[a] = t;
            var u = [];
            for (var c in r.queries) {
                var d = r.queries[c];
                d.selector_f(t) && (d.cursor.skip || d.cursor.limit ? u.push(c) : e._insertInResults(d, t))
            }
            return s.each(u, function(t) { r.queries[t] && e._recomputeResults(r.queries[t]) }), r._observeQueue.drain(), i && o.defer(function() { i(null, t._id) }), t._id
        }, e.prototype.remove = function(t, n) {
            var i = this,
                r = [],
                a = [],
                l = e._compileSelector(t, i),
                u = e._idsMatchedBySelector(t);
            if (u) s.each(u, function(t) {
                var n = e._idStringify(t);
                s.has(i.docs, n) && l(i.docs[n]) && r.push(n)
            });
            else
                for (var c in i.docs) {
                    var h = i.docs[c];
                    l(h) && r.push(c)
                }
            for (var d = [], f = 0; f < r.length; f++) {
                var p = r[f],
                    g = i.docs[p];
                s.each(i.queries, function(e, t) { e.selector_f(g) && (e.cursor.skip || e.cursor.limit ? a.push(t) : d.push({ qid: t, doc: g })) }), i._saveOriginal(p, g), delete i.docs[p]
            }
            s.each(d, function(t) {
                var n = i.queries[t.qid];
                n && e._removeFromResults(n, t.doc)
            }), s.each(a, function(t) {
                var n = i.queries[t];
                n && e._recomputeResults(n)
            }), i._observeQueue.drain();
            var m = r.length;
            return n && o.defer(function() { n(null, m) }), m
        }, e.prototype.update = function(t, n, i, r) {
            var a = this;
            !r && i instanceof Function && (r = i, i = null), i || (i = {});
            var u = e._compileSelector(t, a),
                c = {};
            s.each(a.queries, function(e, t) {!e.cursor.skip && !e.cursor.limit || e.paused || (c[t] = l.clone(e.results)) });
            var h = {},
                d = 0;
            for (var f in a.docs) { var p = a.docs[f]; if (u(p) && (a._saveOriginal(f, p), a._modifyAndNotify(p, n, h), ++d, !i.multi)) break }
            s.each(h, function(t, n) {
                var i = a.queries[n];
                i && e._recomputeResults(i, c[n])
            }), a._observeQueue.drain();
            var g;
            if (0 === d && i.upsert) {
                var m = e._removeDollarOperators(t);
                e._modify(m, n, !0), !m._id && i.insertedId && (m._id = i.insertedId), g = a.insert(m), d = 1
            }
            var v;
            return i._returnObject ? (v = { numberAffected: d }, void 0 !== g && (v.insertedId = g)) : v = d, r && o.defer(function() { r(null, v) }), v
        }, e.prototype.upsert = function(e, t, n, i) { var r = this; return i || "function" != typeof n || (i = n, n = {}), r.update(e, t, s.extend({}, n, { upsert: !0, _returnObject: !0 }), i) }, e.prototype._modifyAndNotify = function(t, n, i) {
            var r = this,
                o = {};
            for (var a in r.queries) {
                var u = r.queries[a];
                o[a] = u.ordered ? u.selector_f(t) : s.has(u.results, e._idStringify(t._id))
            }
            var c = l.clone(t);
            e._modify(t, n);
            for (a in r.queries) {
                u = r.queries[a];
                var h = o[a],
                    d = u.selector_f(t);
                u.cursor.skip || u.cursor.limit ? (h || d) && (i[a] = !0) : h && !d ? e._removeFromResults(u, t) : !h && d ? e._insertInResults(u, t) : h && d && e._updateInResults(u, t, c)
            }
        }, e._insertInResults = function(t, n) {
            var i = l.clone(n);
            if (delete i._id, t.ordered) {
                if (t.sort_f) {
                    var r = e._insertInSortedList(t.sort_f, t.results, n),
                        o = t.results[r + 1];
                    o = o ? o._id : null, t.addedBefore(n._id, i, o)
                } else t.addedBefore(n._id, i, null), t.results.push(n);
                t.added(n._id, i)
            } else t.added(n._id, i), t.results[e._idStringify(n._id)] = n
        }, e._removeFromResults = function(t, n) {
            if (t.ordered) {
                var i = e._findInOrderedResults(t, n);
                t.removed(n._id), t.results.splice(i, 1)
            } else {
                var r = e._idStringify(n._id);
                t.removed(n._id), delete t.results[r]
            }
        }, e._updateInResults = function(t, n, i) {
            if (!l.equals(n._id, i._id)) throw new Error("Can't change a doc's _id while updating");
            var r = e._makeChangedFields(n, i);
            if (!t.ordered) return s.isEmpty(r) || (t.changed(n._id, r), t.results[e._idStringify(n._id)] = n), void 0;
            var o = e._findInOrderedResults(t, n);
            if (s.isEmpty(r) || t.changed(n._id, r), t.sort_f) {
                t.results.splice(o, 1);
                var a = e._insertInSortedList(t.sort_f, t.results, n);
                if (o !== a) {
                    var u = t.results[a + 1];
                    u = u ? u._id : null, t.movedBefore && t.movedBefore(n._id, u)
                }
            }
        }, e._recomputeResults = function(t, n) { n || (n = t.results), t.results = t.cursor._getRawObjects(t.ordered), t.paused || e._diffQueryChanges(t.ordered, n, t.results, t) }, e._findInOrderedResults = function(e, t) {
            if (!e.ordered) throw new Error("Can't call _findInOrderedResults on unordered query");
            for (var n = 0; n < e.results.length; n++)
                if (e.results[n] === t) return n;
            throw Error("object missing from query")
        }, e._binarySearch = function(e, t, n) {
            for (var i = 0, r = t.length; r > 0;) {
                var o = Math.floor(r / 2);
                e(n, t[i + o]) >= 0 ? (i += o + 1, r -= o + 1) : r = o
            }
            return i
        }, e._insertInSortedList = function(t, n, i) { if (0 === n.length) return n.push(i), 0; var r = e._binarySearch(t, n, i); return n.splice(r, 0, i), r }, e.prototype.saveOriginals = function() {
            var e = this;
            if (e._savedOriginals) throw new Error("Called saveOriginals twice without retrieveOriginals");
            e._savedOriginals = {}
        }, e.prototype.retrieveOriginals = function() { var e = this; if (!e._savedOriginals) throw new Error("Called retrieveOriginals without saveOriginals"); var t = e._savedOriginals; return e._savedOriginals = null, t }, e.prototype._saveOriginal = function(e, t) {
            var n = this;
            n._savedOriginals && (s.has(n._savedOriginals, e) || (n._savedOriginals[e] = l.clone(t)))
        }, e.prototype.pauseObservers = function() {
            if (!this.paused) {
                this.paused = !0;
                for (var e in this.queries) {
                    var t = this.queries[e];
                    t.results_snapshot = l.clone(t.results)
                }
            }
        }, e.prototype.resumeObservers = function() {
            var t = this;
            if (this.paused) {
                this.paused = !1;
                for (var n in this.queries) {
                    var i = t.queries[n];
                    e._diffQueryChanges(i.ordered, i.results_snapshot, i.results, i), i.results_snapshot = null
                }
                t._observeQueue.drain()
            }
        }, e._idStringify = function(t) { if (t instanceof e._ObjectID) return t.valueOf(); if ("string" == typeof t) return "" === t ? t : "-" === t.substr(0, 1) || "~" === t.substr(0, 1) || e._looksLikeObjectID(t) || "{" === t.substr(0, 1) ? "-" + t : t; if (void 0 === t) return "-"; if ("object" == typeof t && null !== t) throw new Error("Meteor does not currently support objects other than ObjectID as ids"); return "~" + a.stringify(t) }, e._idParse = function(t) { return "" === t ? t : "-" === t ? void 0 : "-" === t.substr(0, 1) ? t.substr(1) : "~" === t.substr(0, 1) ? a.parse(t.substr(1)) : e._looksLikeObjectID(t) ? new e._ObjectID(t) : t }, e._makeChangedFields = function(t, n) { var i = {}; return e._diffObjects(n, t, { leftOnly: function(e) { i[e] = void 0 }, rightOnly: function(e, t) { i[e] = t }, both: function(e, t, n) { l.equals(t, n) || (i[e] = n) } }), i };
        var i = function(e) { return s.any(e, function(e, t) { return "$near" === t || s.isObject(e) && i(e) }) },
            r = function(e) { return s.any(e, function(e, t) { return s.contains(["$or", "$and", "$nor", "$not"], t) ? i(e) : s.isObject(e) && r(e) }) }
    }).call(this),
        function() {
            var n = function(e) { return s.isArray(e) && !l.isBinary(e) },
                i = function(e, t) { return n(e) ? s.any(e, t) : t(e) },
                r = function(e, t) { return t(e) ? !0 : n(e) && s.any(e, t) },
                o = function(e) {
                    var t = void 0;
                    for (var n in e) {
                        var i = "$" === n.substr(0, 1);
                        if (void 0 === t) t = i;
                        else if (t !== i) throw new Error("Inconsistent selector: " + e)
                    }
                    return !!t
                },
                u = function(t, a, l) {
                    if (null == t) return function(e) { return i(e, function(e) { return null == e }) };
                    if (!s.isObject(t)) return function(e) { return i(e, function(e) { return e === t }) };
                    if (t instanceof RegExp) return function(e) { return void 0 === e ? !1 : i(e, function(e) { return t.test(e) }) };
                    if (n(t)) return function(i) { return n(i) ? r(i, function(n) { return e._f._equal(t, n) }) : !1 };
                    if (o(t)) {
                        var u = [];
                        return s.each(t, function(e, n) {
                                if (!s.has(h, n)) throw new Error("Unrecognized operator: " + n);
                                u.push(h[n](e, t, l))
                            }),
                            function(e, t) { return s.all(u, function(n) { return n(e, t) }) }
                    }
                    return function(n) { return i(n, function(n) { return e._f._equal(t, n) }) }
                },
                c = {
                    $and: function(e, t, i) { if (!n(e) || s.isEmpty(e)) throw Error("$and/$or/$nor must be nonempty array"); var r = s.map(e, function(e) { return f(e, i) }); return function(e, t) { return s.all(r, function(n) { return n(e, t) }) } },
                    $or: function(e, t, i) { if (!n(e) || s.isEmpty(e)) throw Error("$and/$or/$nor must be nonempty array"); var r = s.map(e, function(e) { return f(e, i) }); return function(e, t) { return s.any(r, function(n) { return n(e, t) }) } },
                    $nor: function(e, t, i) { if (!n(e) || s.isEmpty(e)) throw Error("$and/$or/$nor must be nonempty array"); var r = s.map(e, function(e) { return f(e, i) }); return function(e, t) { return s.all(r, function(n) { return !n(e, t) }) } },
                    $where: function(e) {
                        return e instanceof Function || (e = Function("return " + e)),
                            function(t) { return e.call(t) }
                    }
                },
                h = {
                    $in: function(t) { if (!n(t)) throw new Error("Argument to $in must be array"); return function(n) { return r(n, function(n) { return s.any(t, function(t) { return e._f._equal(t, n) }) }) } },
                    $all: function(t) { if (!n(t)) throw new Error("Argument to $all must be array"); return function(i) { return n(i) ? s.all(t, function(t) { return s.any(i, function(n) { return e._f._equal(t, n) }) }) : !1 } },
                    $lt: function(t) { return function(n) { return i(n, function(n) { return e._f._cmp(n, t) < 0 }) } },
                    $lte: function(t) { return function(n) { return i(n, function(n) { return e._f._cmp(n, t) <= 0 }) } },
                    $gt: function(t) { return function(n) { return i(n, function(n) { return e._f._cmp(n, t) > 0 }) } },
                    $gte: function(t) { return function(n) { return i(n, function(n) { return e._f._cmp(n, t) >= 0 }) } },
                    $ne: function(t) { return function(n) { return !r(n, function(n) { return e._f._equal(n, t) }) } },
                    $nin: function(e) { if (!n(e)) throw new Error("Argument to $nin must be array"); var t = h.$in(e); return function(e, n) { return void 0 === e ? !0 : !t(e, n) } },
                    $exists: function(e) { return function(t) { return e === (void 0 !== t) } },
                    $mod: function(e) {
                        var t = e[0],
                            n = e[1];
                        return function(e) { return i(e, function(e) { return e % t === n }) }
                    },
                    $size: function(e) { return function(t) { return n(t) && e === t.length } },
                    $type: function(t) { return function(n) { return void 0 === n ? !1 : i(n, function(n) { return e._f._type(n) === t }) } },
                    $regex: function(e, t) {
                        var n = t.$options;
                        if (void 0 !== n) {
                            if (/[^gim]/.test(n)) throw new Error("Only the i, m, and g regexp options are supported");
                            var r = e instanceof RegExp ? e.source : e;
                            e = new RegExp(r, n)
                        } else e instanceof RegExp || (e = new RegExp(e));
                        return function(t) { return void 0 === t ? !1 : i(t, function(t) { return e.test(t) }) }
                    },
                    $options: function() { return function() { return !0 } },
                    $elemMatch: function(e, t, i) { var r = f(e, i); return function(e, t) { return n(e) ? s.any(e, function(e) { return r(e, t) }) : !1 } },
                    $not: function(e, t, n) { var i = u(e, t, n); return function(e, t) { return !i(e, t) } },
                    $near: function(e, t, n) {
                        function i(e, t) {
                            e = r(e), t = r(t);
                            var n = e[0] - t[0],
                                i = e[1] - t[1];
                            return s.isNaN(n) || s.isNaN(i) ? null : Math.sqrt(n * n + i * i)
                        }

                        function r(e) { return s.map(e, s.identity) }
                        var o = s.isObject(e) && s.has(e, "$geometry") ? "2dsphere" : "2d",
                            a = "2d" === o ? t.$maxDistance : e.$maxDistance,
                            l = "2d" === o ? e : e.$geometry;
                        return function(e, t) {
                            var r = null;
                            switch (o) {
                                case "2d":
                                    r = i(l, e);
                                    break;
                                case "2dsphere":
                                    r = "Point" === e.type ? d.pointDistance(l, e) : d.geometryWithinRadius(e, l, a) ? 0 : a + 1
                            }
                            return n && (n._distance || (n._distance = {}), n._distance[t._id] = r), null === r ? !1 : void 0 === a ? !0 : a >= r
                        }
                    },
                    $maxDistance: function() { return function() { return !0 } }
                };
            e._f = {
                _type: function(t) { return "number" == typeof t ? 1 : "string" == typeof t ? 2 : "boolean" == typeof t ? 8 : n(t) ? 4 : null === t ? 10 : t instanceof RegExp ? 11 : "function" == typeof t ? 13 : t instanceof Date ? 9 : l.isBinary(t) ? 5 : t instanceof e._ObjectID ? 7 : 3 },
                _equal: function(e, t) { return l.equals(e, t, { keyOrderSensitive: !0 }) },
                _typeorder: function(e) { return [-1, 1, 2, 3, 4, 5, -1, 6, 7, 8, 0, 9, -1, 100, 2, 100, 1, 8, 1][e] },
                _cmp: function(t, n) {
                    if (void 0 === t) return void 0 === n ? 0 : -1;
                    if (void 0 === n) return 1;
                    var i = e._f._type(t),
                        r = e._f._type(n),
                        o = e._f._typeorder(i),
                        s = e._f._typeorder(r);
                    if (o !== s) return s > o ? -1 : 1;
                    if (i !== r) throw Error("Missing type coercion logic in _cmp");
                    if (7 === i && (i = r = 2, t = t.toHexString(), n = n.toHexString()), 9 === i && (i = r = 1, t = t.getTime(), n = n.getTime()), 1 === i) return t - n;
                    if (2 === r) return n > t ? -1 : t === n ? 0 : 1;
                    if (3 === i) { var a = function(e) { var t = []; for (var n in e) t.push(n), t.push(e[n]); return t }; return e._f._cmp(a(t), a(n)) }
                    if (4 === i)
                        for (var l = 0;; l++) { if (l === t.length) return l === n.length ? 0 : -1; if (l === n.length) return 1; var u = e._f._cmp(t[l], n[l]); if (0 !== u) return u }
                    if (5 === i) { if (t.length !== n.length) return t.length - n.length; for (l = 0; l < t.length; l++) { if (t[l] < n[l]) return -1; if (t[l] > n[l]) return 1 } return 0 }
                    if (8 === i) return t ? n ? 0 : 1 : n ? -1 : 0;
                    if (10 === i) return 0;
                    if (11 === i) throw Error("Sorting not supported on regular expression");
                    if (13 === i) throw Error("Sorting not supported on Javascript code");
                    throw Error("Unknown type to sort")
                }
            }, t.matches = function(t, n) { return e._compileSelector(t)(n) }, e._makeLookupFunction = function(t) {
                var i, r, o, a = t.indexOf(".");
                if (-1 === a) i = t;
                else {
                    i = t.substr(0, a);
                    var l = t.substr(a + 1);
                    r = e._makeLookupFunction(l), o = /^\d+(\.|$)/.test(l)
                }
                return function(e) { if (null == e) return [void 0]; var t = e[i]; return r ? n(t) && 0 === t.length ? [void 0] : ((!n(t) || o) && (t = [t]), Array.prototype.concat.apply([], s.map(t, r))) : [t] }
            };
            var f = function(t, n) {
                var i = [];
                return s.each(t, function(r, o) {
                        if ("$" === o.substr(0, 1)) {
                            if (!s.has(c, o)) throw new Error("Unrecognized logical operator: " + o);
                            i.push(c[o](r, t, n))
                        } else {
                            var a = e._makeLookupFunction(o),
                                l = u(r, t, n);
                            i.push(function(e, t) {
                                var n = a(e),
                                    i = r && (r.$not || r.$ne || r.$nin) ? s.all : s.any;
                                return i(n, function(e) { return l(e, t) })
                            })
                        }
                    }),
                    function(e, t) { return void 0 === t && (t = e), s.all(i, function(n) { return n(e, t) }) }
            };
            e._compileSelector = function(t, i) { if (t instanceof Function) return function(e) { return t.call(e) }; if (e._selectorIsId(t)) return function(e) { return l.equals(e._id, t) }; if (!t || "_id" in t && !t._id) return function() { return !1 }; if ("boolean" == typeof t || n(t) || l.isBinary(t)) throw new Error("Invalid selector: " + t); return f(t, i) }, e._compileSort = function(t, i) {
                var r = [];
                if (t instanceof Array)
                    for (var o = 0; o < t.length; o++) "string" == typeof t[o] ? r.push({ lookup: e._makeLookupFunction(t[o]), ascending: !0 }) : r.push({ lookup: e._makeLookupFunction(t[o][0]), ascending: "desc" !== t[o][1] });
                else { if ("object" != typeof t) throw Error("Bad sort specification: ", a.stringify(t)); for (var l in t) r.push({ lookup: e._makeLookupFunction(l), ascending: t[l] >= 0 }) }
                if (0 === r.length) return function(e, t) { return i && i._distance ? i._distance[e._id] - i._distance[t._id] : 0 };
                var u = function(t, i) {
                    var r, o = !0;
                    return s.each(t, function(t) {
                        n(t) || (t = [t]), n(t) && 0 === t.length && (t = [void 0]), s.each(t, function(t) {
                            if (o) r = t, o = !1;
                            else {
                                var n = e._f._cmp(r, t);
                                (i && n > 0 || !i && 0 > n) && (r = t)
                            }
                        })
                    }), r
                };
                return function(t, n) {
                    for (var i = 0; i < r.length; ++i) {
                        var o = r[i],
                            s = u(o.lookup(t), o.ascending),
                            a = u(o.lookup(n), o.ascending),
                            l = e._f._cmp(s, a);
                        if (0 !== l) return o.ascending ? l : -l
                    }
                    return 0
                }
            }
        }.call(this),
        function() {
            e._compileProjection = function(t) {
                e._checkSupportedProjection(t);
                var n = s.isUndefined(t._id) ? !0 : t._id,
                    r = i(t),
                    o = function(e, t) { if (s.isArray(e)) return s.map(e, function(e) { return o(e, t) }); var n = r.including ? {} : l.clone(e); return s.each(t, function(t, i) { s.has(e, i) && (s.isObject(t) ? s.isObject(e[i]) && (n[i] = o(e[i], t)) : r.including ? n[i] = l.clone(e[i]) : delete n[i]) }), n };
                return function(e) { var t = o(e, r.tree); return n && s.has(e, "_id") && (t._id = e._id), !n && s.has(t, "_id") && delete t._id, t }
            }, i = function(e) {
                var t = s.keys(e).sort();
                t.length > 0 && (1 !== t.length || "_id" !== t[0]) && (t = s.reject(t, function(e) { return "_id" === e }));
                var i = null;
                s.each(t, function(t) { var r = !!e[t]; if (null === i && (i = r), i !== r) throw n("You cannot currently mix including and excluding fields.") });
                var o = r(t, function() { return i }, function(e, t, i) {
                    var r = i,
                        o = t;
                    throw n("both " + r + " and " + o + " found in fields option, using both of them may trigger unexpected behavior. Did you mean to use only one of them?")
                });
                return { tree: o, including: i }
            }, r = function(e, t, n, i) {
                return i = i || {}, s.each(e, function(e) {
                    var r = i,
                        o = e.split("."),
                        a = s.all(o.slice(0, -1), function(t, i) { if (s.has(r, t)) { if (!s.isObject(r[t]) && (r[t] = n(r[t], o.slice(0, i + 1).join("."), e), !s.isObject(r[t]))) return !1 } else r[t] = {}; return r = r[t], !0 });
                    if (a) {
                        var l = s.last(o);
                        r[l] = s.has(r, l) ? n(r[l], e, e) : t(e)
                    }
                }), i
            }, e._checkSupportedProjection = function(e) {
                if (!s.isObject(e) || s.isArray(e)) throw n("fields option must be an object");
                s.each(e, function(e, t) { if (s.contains(t.split("."), "$")) throw n("Minimongo doesn't support $ operator in projections yet."); if (-1 === s.indexOf([1, 0, !0, !1], e)) throw n("Projection values should be one of 1, 0, true, or false") })
            }
        }.call(this),
        function() {
            e._modify = function(t, i, r) {
                var o = !1;
                for (var a in i) { o = "$" === a.substr(0, 1); break }
                var u;
                if (o) {
                    var u = l.clone(t);
                    for (var c in i) {
                        var h = e._modifiers[c];
                        if (r && "$setOnInsert" === c && (h = e._modifiers.$set), !h) throw n("Invalid modifier specified " + c);
                        for (var d in i[c]) {
                            if (d.length && "." === d[d.length - 1]) throw n("Invalid mod field name, may not end in a period");
                            var f = i[c][d],
                                p = d.split("."),
                                g = !!e._noCreateModifiers[c],
                                m = "$rename" === c,
                                v = e._findModTarget(u, p, g, m),
                                _ = p.pop();
                            h(v, _, f, d, u)
                        }
                    }
                } else {
                    if (i._id && !l.equals(t._id, i._id)) throw n("Cannot change the _id of a document");
                    for (var a in i) { if ("$" === a.substr(0, 1)) throw n("When replacing document, field name may not start with '$'"); if (/\./.test(a)) throw n("When replacing document, field name may not contain '.'") }
                    u = i
                }
                s.each(s.keys(t), function(e) {
                    ("_id" !== e || r) && delete t[e]
                });
                for (var a in u) t[a] = u[a]
            }, e._findModTarget = function(e, t, i, r) {
                for (var o = 0; o < t.length; o++) {
                    var s = o === t.length - 1,
                        l = t[o],
                        u = /^[0-9]+$/.test(l);
                    if (!(!i || "object" == typeof e && l in e)) return void 0;
                    if (e instanceof Array) {
                        if (r) return null;
                        if (!u) throw n("can't append to array using string field name [" + l + "]");
                        for (l = parseInt(l), s && (t[o] = l); e.length < l;) e.push(null);
                        if (!s)
                            if (e.length === l) e.push({});
                            else if ("object" != typeof e[l]) throw n("can't modify field '" + t[o + 1] + "' of list value " + a.stringify(e[l]))
                    } else s || l in e || (e[l] = {});
                    if (s) return e;
                    e = e[l]
                }
            }, e._noCreateModifiers = { $unset: !0, $pop: !0, $rename: !0, $pull: !0, $pullAll: !0 }, e._modifiers = {
                $inc: function(e, t, i) {
                    if ("number" != typeof i) throw n("Modifier $inc allowed for numbers only");
                    if (t in e) {
                        if ("number" != typeof e[t]) throw n("Cannot apply $inc modifier to non-number");
                        e[t] += i
                    } else e[t] = i
                },
                $set: function(e, t, i) {
                    if (!s.isObject(e)) { var r = n("Cannot set property on non-object field"); throw r.setPropertyError = !0, r }
                    if (null === e) { var r = n("Cannot set property on null"); throw r.setPropertyError = !0, r }
                    if ("_id" === t && !l.equals(i, e._id)) throw n("Cannot change the _id of a document");
                    e[t] = l.clone(i)
                },
                $setOnInsert: function() {},
                $unset: function(e, t) { void 0 !== e && (e instanceof Array ? t in e && (e[t] = null) : delete e[t]) },
                $push: function(t, i, r) {
                    if (void 0 === t[i] && (t[i] = []), !(t[i] instanceof Array)) throw n("Cannot apply $push modifier to non-array");
                    if (!r || !r.$each) return t[i].push(l.clone(r)), void 0;
                    var o = r.$each;
                    if (!(o instanceof Array)) throw n("$each must be an array");
                    var s = void 0;
                    if ("$slice" in r) {
                        if ("number" != typeof r.$slice) throw n("$slice must be a numeric value");
                        if (r.$slice > 0) throw n("$slice in $push must be zero or negative");
                        s = r.$slice
                    }
                    var a = void 0;
                    if (r.$sort) {
                        if (void 0 === s) throw n("$sort requires $slice to be present");
                        a = e._compileSort(r.$sort);
                        for (var u = 0; u < o.length; u++)
                            if (3 !== e._f._type(o[u])) throw n("$push like modifiers using $sort require all elements to be objects")
                    }
                    for (var c = 0; c < o.length; c++) t[i].push(l.clone(o[c]));
                    a && t[i].sort(a), void 0 !== s && (t[i] = 0 === s ? [] : t[i].slice(s))
                },
                $pushAll: function(e, t, i) {
                    if (!("object" == typeof i && i instanceof Array)) throw n("Modifier $pushAll/pullAll allowed for arrays only");
                    var r = e[t];
                    if (void 0 === r) e[t] = i;
                    else { if (!(r instanceof Array)) throw n("Cannot apply $pushAll modifier to non-array"); for (var o = 0; o < i.length; o++) r.push(i[o]) }
                },
                $addToSet: function(t, i, r) {
                    var o = t[i];
                    if (void 0 === o) t[i] = [r];
                    else {
                        if (!(o instanceof Array)) throw n("Cannot apply $addToSet modifier to non-array");
                        var a = !1;
                        if ("object" == typeof r)
                            for (var u in r) { "$each" === u && (a = !0); break }
                        var c = a ? r.$each : [r];
                        s.each(c, function(t) {
                            for (var n = 0; n < o.length; n++)
                                if (e._f._equal(t, o[n])) return;
                            o.push(l.clone(t))
                        })
                    }
                },
                $pop: function(e, t, i) { if (void 0 !== e) { var r = e[t]; if (void 0 !== r) { if (!(r instanceof Array)) throw n("Cannot apply $pop modifier to non-array"); "number" == typeof i && 0 > i ? r.splice(0, 1) : r.pop() } } },
                $pull: function(t, i, r) {
                    if (void 0 !== t) {
                        var o = t[i];
                        if (void 0 !== o) {
                            if (!(o instanceof Array)) throw n("Cannot apply $pull/pullAll modifier to non-array");
                            var s = [];
                            if ("object" != typeof r || r instanceof Array)
                                for (var a = 0; a < o.length; a++) e._f._equal(o[a], r) || s.push(o[a]);
                            else
                                for (var l = e._compileSelector(r), a = 0; a < o.length; a++) l(o[a]) || s.push(o[a]);
                            t[i] = s
                        }
                    }
                },
                $pullAll: function(t, i, r) {
                    if (!("object" == typeof r && r instanceof Array)) throw n("Modifier $pushAll/pullAll allowed for arrays only");
                    if (void 0 !== t) {
                        var o = t[i];
                        if (void 0 !== o) {
                            if (!(o instanceof Array)) throw n("Cannot apply $pull/pullAll modifier to non-array");
                            for (var s = [], a = 0; a < o.length; a++) {
                                for (var l = !1, u = 0; u < r.length; u++)
                                    if (e._f._equal(o[a], r[u])) { l = !0; break }
                                l || s.push(o[a])
                            }
                            t[i] = s
                        }
                    }
                },
                $rename: function(t, i, r, o, s) {
                    if (o === r) throw n("$rename source must differ from target");
                    if (null === t) throw n("$rename source field invalid");
                    if ("string" != typeof r) throw n("$rename target must be a string");
                    if (void 0 !== t) {
                        var a = t[i];
                        delete t[i];
                        var l = r.split("."),
                            u = e._findModTarget(s, l, !1, !0);
                        if (null === u) throw n("$rename target field invalid");
                        var c = l.pop();
                        u[c] = a
                    }
                },
                $bit: function() { throw n("$bit is not supported") }
            }, e._removeDollarOperators = function(e) { var t = {}; for (var n in e) "$" !== n.substr(0, 1) && (t[n] = e[n]); return t }
        }.call(this),
        function() {
            e._diffQueryChanges = function(t, n, i, r) { t ? e._diffQueryOrderedChanges(n, i, r) : e._diffQueryUnorderedChanges(n, i, r) }, e._diffQueryUnorderedChanges = function(t, n, i) {
                if (i.movedBefore) throw new Error("_diffQueryUnordered called with a movedBefore observer!");
                s.each(n, function(n) {
                    if (s.has(t, n._id)) {
                        var r = t[n._id];
                        i.changed && !l.equals(r, n) && i.changed(n._id, e._makeChangedFields(n, r))
                    } else {
                        var o = l.clone(n);
                        delete o._id, i.added && i.added(n._id, o)
                    }
                }), i.removed && s.each(t, function(e) { s.has(n, e._id) || i.removed(e._id) })
            }, e._diffQueryOrderedChanges = function(t, n, i) {
                var r = {};
                s.each(n, function(e) { r[e._id] && o._debug("Duplicate _id in new_results"), r[e._id] = !0 });
                var a = {};
                s.each(t, function(e, t) { e._id in a && o._debug("Duplicate _id in old_results"), a[e._id] = t });
                for (var u = [], c = 0, h = n.length, d = new Array(h), f = new Array(h), p = function(e) { return a[n[e]._id] }, g = 0; h > g; g++)
                    if (void 0 !== a[n[g]._id]) {
                        for (var m = c; m > 0 && !(p(d[m - 1]) < p(g));) m--;
                        f[g] = 0 === m ? -1 : d[m - 1], d[m] = g, m + 1 > c && (c = m + 1)
                    }
                for (var v = 0 === c ? -1 : d[c - 1]; v >= 0;) u.push(v), v = f[v];
                u.reverse(), u.push(n.length), s.each(t, function(e) { r[e._id] || i.removed && i.removed(e._id) });
                var _ = 0;
                s.each(u, function(r) {
                    for (var o, u, c, h = n[r] ? n[r]._id : null, d = _; r > d; d++) u = n[d], s.has(a, u._id) ? (o = t[a[u._id]], c = e._makeChangedFields(u, o), s.isEmpty(c) || i.changed && i.changed(u._id, c), i.movedBefore && i.movedBefore(u._id, h)) : (c = l.clone(u), delete c._id, i.addedBefore && i.addedBefore(u._id, c, h), i.added && i.added(u._id, c));
                    h && (u = n[r], o = t[a[u._id]], c = e._makeChangedFields(u, o), s.isEmpty(c) || i.changed && i.changed(u._id, c)), _ = r + 1
                })
            }, e._diffObjects = function(e, t, n) { s.each(e, function(e, i) { s.has(t, i) ? n.both && n.both(i, e, t[i]) : n.leftOnly && n.leftOnly(i, e) }), n.rightOnly && s.each(t, function(t, i) { s.has(e, i) || n.rightOnly(i, t) }) }
        }.call(this),
        function() {
            e._IdMap = function() {
                var e = this;
                e._map = {}
            }, s.extend(e._IdMap.prototype, {
                get: function(t) {
                    var n = this,
                        i = e._idStringify(t);
                    return n._map[i]
                },
                set: function(t, n) {
                    var i = this,
                        r = e._idStringify(t);
                    i._map[r] = n
                },
                remove: function(t) {
                    var n = this,
                        i = e._idStringify(t);
                    delete n._map[i]
                },
                has: function(t) {
                    var n = this,
                        i = e._idStringify(t);
                    return s.has(n._map, i)
                },
                empty: function() { var e = this; return s.isEmpty(e._map) },
                clear: function() {
                    var e = this;
                    e._map = {}
                },
                forEach: function(t) {
                    var n = this;
                    s.each(n._map, function(n, i, r) {
                        var o = this;
                        t.call(o, n, e._idParse(i), r)
                    })
                },
                setDefault: function(t, n) {
                    var i = this,
                        r = e._idStringify(t);
                    return s.has(i._map, r) ? i._map[r] : (i._map[r] = n, n)
                }
            })
        }.call(this),
        function() {
            e._CachingChangeObserver = function(t) {
                var n = this;
                t = t || {};
                var i = t.callbacks && e._observeChangesCallbacksAreOrdered(t.callbacks);
                if (s.has(t, "ordered")) { if (n.ordered = t.ordered, t.callbacks && t.ordered !== i) throw Error("ordered option doesn't match callbacks") } else {
                    if (!t.callbacks) throw Error("must provide ordered or callbacks");
                    n.ordered = i
                }
                var r = t.callbacks || {};
                n.ordered ? (n.docs = new u(e._idStringify), n.applyChange = {
                    addedBefore: function(e, t, i) {
                        var o = l.clone(t);
                        o._id = e, r.addedBefore && r.addedBefore.call(n, e, t, i), r.added && r.added.call(n, e, t), n.docs.putBefore(e, o, i || null)
                    },
                    movedBefore: function(e, t) {
                        n.docs.get(e);
                        r.movedBefore && r.movedBefore.call(n, e, t), n.docs.moveBefore(e, t || null)
                    }
                }) : (n.docs = new e._IdMap, n.applyChange = {
                    added: function(e, t) {
                        var i = l.clone(t);
                        r.added && r.added.call(n, e, t), i._id = e, n.docs.set(e, i)
                    }
                }), n.applyChange.changed = function(t, i) {
                    var o = n.docs.get(t);
                    if (!o) throw new Error("Unknown id for changed: " + t);
                    r.changed && r.changed.call(n, t, l.clone(i)), e._applyChanges(o, i)
                }, n.applyChange.removed = function(e) { r.removed && r.removed.call(n, e), n.docs.remove(e) }
            }, e._observeFromObserveChanges = function(t, n) {
                var i, r = t.getTransform() || function(e) { return e },
                    o = !!n._suppress_initial;
                if (e._observeCallbacksAreOrdered(n)) {
                    var a = !n._no_indices;
                    i = {
                        addedBefore: function(e, t, i) {
                            var l = this;
                            if (!o && (n.addedAt || n.added)) {
                                var u = r(s.extend(t, { _id: e }));
                                if (n.addedAt) {
                                    var c = a ? i ? l.docs.indexOf(i) : l.docs.size() : -1;
                                    n.addedAt(u, c, i)
                                } else n.added(u)
                            }
                        },
                        changed: function(t, i) {
                            var o = this;
                            if (n.changedAt || n.changed) {
                                var s = l.clone(o.docs.get(t));
                                if (!s) throw new Error("Unknown id for changed: " + t);
                                var u = r(l.clone(s));
                                if (e._applyChanges(s, i), s = r(s), n.changedAt) {
                                    var c = a ? o.docs.indexOf(t) : -1;
                                    n.changedAt(s, u, c)
                                } else n.changed(s, u)
                            }
                        },
                        movedBefore: function(e, t) {
                            var i = this;
                            if (n.movedTo) {
                                var o = a ? i.docs.indexOf(e) : -1,
                                    s = a ? t ? i.docs.indexOf(t) : i.docs.size() : -1;
                                s > o && --s, n.movedTo(r(l.clone(i.docs.get(e))), o, s, t || null)
                            }
                        },
                        removed: function(e) {
                            var t = this;
                            if (n.removedAt || n.removed) {
                                var i = r(t.docs.get(e));
                                if (n.removedAt) {
                                    var o = a ? t.docs.indexOf(e) : -1;
                                    n.removedAt(i, o)
                                } else n.removed(i)
                            }
                        }
                    }
                } else i = {
                    added: function(e, t) {
                        if (!o && n.added) {
                            var i = s.extend(t, { _id: e });
                            n.added(r(i))
                        }
                    },
                    changed: function(t, i) {
                        var o = this;
                        if (n.changed) {
                            var s = o.docs.get(t),
                                a = l.clone(s);
                            e._applyChanges(a, i), n.changed(r(a), r(s))
                        }
                    },
                    removed: function(e) {
                        var t = this;
                        n.removed && n.removed(r(t.docs.get(e)))
                    }
                };
                var u = new e._CachingChangeObserver({ callbacks: i }),
                    c = t.observeChanges(u.applyChange);
                return o = !1, c
            }
        }.call(this),
        function() {
            e._looksLikeObjectID = function(e) { return 24 === e.length && e.match(/^[0-9a-f]*$/) }, e._ObjectID = function(t) {
                var n = this;
                if (t) {
                    if (t = t.toLowerCase(), !e._looksLikeObjectID(t)) throw new Error("Invalid hexadecimal string for creating an ObjectID");
                    n._str = t
                } else n._str = h.hexString(24)
            }, e._ObjectID.prototype.toString = function() { var e = this; return 'ObjectID("' + e._str + '")' }, e._ObjectID.prototype.equals = function(t) { var n = this; return t instanceof e._ObjectID && n.valueOf() === t.valueOf() }, e._ObjectID.prototype.clone = function() { var t = this; return new e._ObjectID(t._str) }, e._ObjectID.prototype.typeName = function() { return "oid" }, e._ObjectID.prototype.getTimestamp = function() { var e = this; return parseInt(e._str.substr(0, 8), 16) }, e._ObjectID.prototype.valueOf = e._ObjectID.prototype.toJSONValue = e._ObjectID.prototype.toHexString = function() { return this._str }, e._selectorIsId = function(t) { return "string" == typeof t || "number" == typeof t || t instanceof e._ObjectID }, e._selectorIsIdPerhapsAsObject = function(t) { return e._selectorIsId(t) || t && "object" == typeof t && t._id && e._selectorIsId(t._id) && 1 === s.size(t) }, e._idsMatchedBySelector = function(t) {
                if (e._selectorIsId(t)) return [t];
                if (!t) return null;
                if (s.has(t, "_id")) return e._selectorIsId(t._id) ? [t._id] : t._id && t._id.$in && s.isArray(t._id.$in) && !s.isEmpty(t._id.$in) && s.all(t._id.$in, e._selectorIsId) ? t._id.$in : null;
                if (t.$and && s.isArray(t.$and))
                    for (var n = 0; n < t.$and.length; ++n) { var i = e._idsMatchedBySelector(t.$and[n]); if (i) return i }
                return null
            }, l.addType("oid", function(t) { return new e._ObjectID(t) })
        }.call(this), "undefined" == typeof Package && (Package = {}), Package.minimongo = { LocalCollection: e, MinimongoTest: t }
}(),
function() {
    var e, t, n, i, r, o, s, a = Package.meteor.Meteor,
        l = Package.underscore._,
        u = Package.random.Random,
        c = Package.domutils.DomUtils,
        h = Package.liverange.LiveRange,
        d = Package["universal-events"].UniversalEventListener,
        f = Package["ordered-dict"].OrderedDict,
        p = Package.deps.Deps,
        g = Package.ejson.EJSON;
    (function() {
        e = {}, t = {};
        var s = function() {
            var e = null;
            return {
                get: function() { return e },
                withValue: function(t, n) {
                    var i = e;
                    e = t;
                    try { return n() } finally { e = i }
                }
            }
        }();
        n = "_spark_" + u.id(), t.TAG = n, e._TAG = n;
        var a = "data",
            m = "isolate",
            v = "events",
            _ = "watch",
            y = "label",
            b = "landmark",
            w = "list",
            k = "item",
            x = !1;
        t.setCheckIECompliance = function(e) { x = e };
        var C = {};
        e._addGlobalPreserve = function(e, t) { C[e] = t };
        var T = function(e, t, i, r) { var o = new h(n, t, i, r); return o.type = e, o },
            E = function(e, t) { for (var i = h.findRange(n, t); i && i.type !== e;) i = i.findParent(); return i },
            D = function(e, t) { do t = t.findParent(); while (t && t.type !== e); return t },
            S = function(e, t) {
                for (var i = new h(n, e, t, !0), r = i; r; r = r.findParent()) r.type === _ && r.notify();
                i.destroy()
            },
            P = !1,
            N = function(e) {
                var t = P;
                P = !0;
                try { return e() } finally { P = t }
            };
        i = function() { this.annotations = {}, this._branchNotes = {}, this.currentBranch = this.newLabelStack(), this.landmarkRanges = [], this.pc = new A }, l.extend(i.prototype, {
            annotate: function(e, t, n) {
                if ("function" != typeof n) {
                    var i = n;
                    n = function(e) { e && l.extend(e, i) }
                }
                var r = (t || "") + ":" + u.id();
                return this.annotations[r] = function(e, i) {
                    if (!e || !t) return n(null), void 0;
                    var r = T(t, e, i);
                    n(r)
                }, "<$" + r + ">" + e + "</$" + r + ">"
            },
            newLabelStack: function() {
                var e = [this._branchNotes];
                return {
                    pushLabel: function(t) {
                        var n = e[e.length - 1],
                            i = "_" + t;
                        e.push(n[i] = n[i] || {})
                    },
                    popLabel: function() { e.pop() },
                    getNotes: function() { var t = e[e.length - 1]; return t },
                    mark: function(t) { for (var n = e.length - 1; n >= 0 && !e[n][t]; n--) e[n][t] = !0 }
                }
            },
            materialize: function(e) {
                var t = this,
                    n = s.withValue(t, e);
                n = t.annotate(n);
                var i, r = {},
                    o = function(e) {
                        for (var t = e.firstChild; t;) {
                            var n = t.nextSibling;
                            if (8 === t.nodeType) {
                                var i = r[t.nodeValue];
                                if (i === !1) throw new Error("Spark HTML fragments may only be used once. Second use in " + c.fragmentToHtml(e));
                                i && (r[t.nodeValue] = !1, c.wrapFragmentForContainer(i, t.parentNode), t.parentNode.replaceChild(i, t))
                            } else 1 === t.nodeType && o(t);
                            t = n
                        }
                    },
                    a = [
                        []
                    ],
                    u = [],
                    h = /<(\/?)\$([^<>]+)>|<|[^<]+/g;
                h.lastIndex = 0;
                for (var d; d = h.exec(n);) {
                    var f = !d[1],
                        p = d[2],
                        g = t.annotations[p];
                    if (g === !1) throw new Error("Spark HTML fragments may be used only once. Second use of: " + c.fragmentToHtml(r[p]));
                    if (g)
                        if (f) u.push(p), a.push([]);
                        else {
                            var m = u.pop();
                            if (m !== p) throw new Error("Range mismatch: " + m + " / " + p);
                            var v = c.htmlToFragment(a.pop().join(""));
                            if (o(v), v.firstChild || v.appendChild(document.createComment("empty")), g(v.firstChild, v.lastChild), t.annotations[p] = !1, !u.length) { i = v; break }
                            r[p] = v, a[a.length - 1].push("<!--" + p + "-->")
                        }
                    else a[a.length - 1].push(d[0])
                }
                return M(i, t.landmarkRanges), t.landmarkRanges = [], l.each(t.annotations, function(e) { e && e() }), t.annotations = {}, l.each(c.findAll(i, "[value], textarea, select"), function(e) { e._sparkOriginalRenderedValue = [c.getElementValue(e)] }), l.each(c.findAll(i, "input[type=checkbox], input[type=radio]"), function(e) { e._sparkOriginalRenderedChecked = [!!e.checked] }), i
            }
        });
        var I = function(e) {
                return function() {
                    var t = s.get(),
                        n = l.toArray(arguments);
                    return t ? (n.push(t), e.apply(null, n)) : n.pop()
                }
            },
            M = function(t, i) {
                var r = new h(n, t),
                    o = !1;
                r.finalize = function() { o = !0 }, p.afterFlush(function() {
                    if (!o) {
                        if (!c.isInDocument(r.firstNode())) { for (var t = r.firstNode(); t.parentNode;) t = t.parentNode; if (!t._protect) return e.finalize(t), void 0 }
                        l.each(i, function(e) { e.isPreservedConstant || e.rendered.call(e.landmark) });
                        for (var n = r; n = D(b, n);) n.rendered.call(n.landmark);
                        S(r.firstNode(), r.lastNode()), r.destroy()
                    }
                })
            };
        e.render = function(e) {
            var t = new i,
                n = t.materialize(e);
            return n
        };
        var A = function() { this.roots = [], this.regionPreservations = [] };
        l.extend(A.prototype, {
            addRoot: function(e, t, n, i) {
                var r = this;
                r.roots.push({ context: i, preserve: e, fromRange: t, toRange: n })
            },
            addConstantRegion: function(e, t) {
                var n = this;
                n.regionPreservations.push({ type: "region", fromStart: e.firstNode(), fromEnd: e.lastNode(), newRange: t })
            },
            computePreservations: function(e, t) {
                var i = this,
                    r = l.clone(i.regionPreservations),
                    o = function(e, t, n, i, r) {
                        e = e || t.containerNode();
                        var o = c.findAllClipped(e, i, t.firstNode(), t.lastNode());
                        l.each(o, function(e) {
                            var t = n(e);
                            t && r(e, t)
                        })
                    };
                l.each(i.roots, function(e) { e.fromNodesByLabel = {}, l.each(e.preserve, function(t, n) { e.fromNodesByLabel[n] = {}, o(e.context, e.fromRange, t, n, function(t, i) { e.fromNodesByLabel[n][i] = t }) }) });
                var s = new h(n, t.firstNode(), t.lastNode()),
                    a = document.createDocumentFragment();
                a.appendChild(document.createComment(""));
                var u = s.replaceContents(a),
                    d = new h(n, u);
                e.insertBefore(u), l.each(i.roots, function(e) {
                    l.each(e.preserve, function(t, n) {
                        o(e.context, e.toRange, t, n, function(t, i) {
                            var o = e.fromNodesByLabel[n][i];
                            o && (r.push({ type: "node", from: o, to: t }), e.fromNodesByLabel[n][i] = null)
                        })
                    })
                });
                var f = d.extract();
                return d.destroy(), s.replaceContents(f), s.destroy(), r
            }
        });
        e.renderToRange = function(t, r) {
            var s = t.firstNode();
            if (s && s.parentNode) {
                var a = new i,
                    u = function(e, t) {
                        var n = a.newLabelStack();
                        e.visit(function(e, i) { i.type === y ? e ? n.pushLabel(i.label) : n.popLabel() : i.type === b && e && t(i, n.getNotes()) })
                    };
                u(t, function(e, t) { t.originalRange = e });
                var d = c.findAllClipped(t.containerNode(), "input[type=radio]", t.firstNode(), t.lastNode());
                l.each(d, function(e) { e._currentChecked = [!!e.checked] });
                var f = a.materialize(r);
                c.wrapFragmentForContainer(f, t.containerNode());
                var p = new h(n, f),
                    g = a.pc;
                u(p, function(e, t) { t.originalRange && (e.constant && g.addConstantRegion(t.originalRange, e), g.addRoot(e.preserve, t.originalRange, e)) });
                for (var m = t;
                    (m = m.findParent()) && m.firstNode().parentNode;) m.type === b, m && g.addRoot(m.preserve, t, p, m.containerNode());
                g.addRoot(C, t, p);
                var v = g.computePreservations(t, p);
                p.destroy();
                var _ = {};
                N(function() { t.operate(function(t, n) { e.finalize(t, n), o(t.parentNode, f, t.previousSibling, n.nextSibling, v, _) }) }), l.each(_.regionPreservations, function(e) { e.isPreservedConstant = !0 })
            }
        }, e.finalize = function(e, t) {
            if (!e.parentNode && 11 !== e.nodeType) {
                var i = document.createDocumentFragment();
                i.appendChild(e), e = i, t = null
            }
            var r = new h(n, e, t);
            r.visit(function(e, t) { e && t.finalize && t.finalize() }), r.destroy(!0)
        }, e.setDataContext = I(function(e, t, n) { return n.annotate(t, a, { data: e }) }), e.getDataContext = function(e) { var t = E(a, e); return t && t.data };
        var O = null,
            j = function() {
                return O || (O = new d(function(e) {
                    if (!P) {
                        for (var t = [], n = E(v, e.currentTarget); n;) t.push(n), n = D(v, n);
                        l.each(t, function(t) { t.handler(e) })
                    }
                }, x)), O
            };
        e.attachEvents = I(function(t, n, i) {
            var r = j(),
                o = {};
            l.each(t, function(e, t) {
                "function" == typeof e && (e = [e]);
                var n = t.split(/,\s+/);
                l.each(n, function(t) {
                    var n = t.split(/\s+/);
                    if (0 !== n.length) {
                        var i = n.shift(),
                            r = n.join(" ");
                        o[i] = o[i] || [], l.each(e, function(e) { o[i].push({ selector: r, callback: e }) })
                    }
                })
            });
            var s = l.keys(o),
                a = function(e) { l.each(s, function(t) { for (var n = e.firstNode(), i = e.lastNode().nextSibling; n && n !== i; n = n.nextSibling) r.installHandler(n, t) }) };
            n = i.annotate(n, _, { notify: function() { a(this) } });
            var u = !1;
            return n = i.annotate(n, v, function(t) {
                t && (l.each(s, function(e) { r.addType(e) }), a(t), t.finalize = function() { u = !0 }, t.handler = function(n) {
                    for (var i = o[n.type] || [], r = 0; r < i.length; r++) {
                        if (u || n.isImmediatePropagationStopped()) return;
                        var s = i[r],
                            a = s.callback,
                            l = s.selector;
                        if (l) { if (!c.matchesSelectorClipped(n.currentTarget, t.containerNode(), l, t.firstNode(), t.lastNode())) continue } else if (n.currentTarget !== n.target) continue;
                        var h = e.getDataContext(n.currentTarget) || {},
                            d = D(b, t),
                            f = d && d.landmark,
                            p = a.call(h, n, f);
                        p === !1 && (n.stopImmediatePropagation(), n.preventDefault())
                    }
                })
            })
        }), e.isolate = function(t) { var n = s.get(); if (!n) return t(); var i, r, o = !0; return p.autorun(function(s) { o ? (r = n.annotate(t(), m, function(e) { e ? (i = e, i.finalize = function() { s.stop() }) : s.stop() }), o = !1) : e.renderToRange(i, t) }), r };
        var R = function(e, t) { l.each(t, function(t, n) { void 0 === t ? delete e[n] : e[n] = t }) };
        r = Package.minimongo ? Package.minimongo.LocalCollection._idStringify : function(e) { return e }, e.list = function(t, n, i) {
            i = i || function() { return "" };
            var o = {},
                a = {};
            l.each(["addedBefore", "removed", "movedBefore", "changed"], function(e) { a[e] = function() { return o[e].apply(null, arguments) } });
            var u = new f(r);
            l.extend(o, {
                addedBefore: function(e, t, n) {
                    var i = g.clone(t);
                    i._id = e;
                    var r = { doc: i, liveRange: null };
                    u.putBefore(e, r, n)
                }
            });
            var h, d = t.observeChanges(a),
                m = s.get(),
                v = m ? l.bind(m.annotate, m) : function(e) { return e },
                _ = function(e) { return t.getTransform && t.getTransform() ? t.getTransform()(g.clone(e)) : e },
                y = "";
            u.empty() ? y = i() : u.forEach(function(e) { y += v(n(_(e.doc)), k, function(t) { e.liveRange = t }) });
            var x = !1,
                C = function() { d.stop(), x = !0 };
            y = v(y, w, function(e) { e ? (h = e, h.finalize = C) : C() }), m || C();
            var E = function() { for (var e = h; e = D(b, e);) e.rendered.call(e.landmark) },
                S = function(e) { p.afterFlush(function() { x || N(e) }) };
            return l.extend(o, {
                addedBefore: function(t, i, r) {
                    S(function() {
                        var o = g.clone(i);
                        o._id = t;
                        var s = e.render(l.bind(n, null, _(o)));
                        c.wrapFragmentForContainer(s, h.containerNode());
                        var a = T(k, s);
                        u.empty() ? e.finalize(h.replaceContents(s)) : null === r ? u.lastValue().liveRange.insertAfter(s) : u.get(r).liveRange.insertBefore(s), u.putBefore(t, { doc: o, liveRange: a }, r)
                    })
                },
                removed: function(t) {
                    S(function() {
                        if (u.first() === u.last()) {
                            var n = e.render(i);
                            c.wrapFragmentForContainer(n, h.containerNode()), e.finalize(h.replaceContents(n))
                        } else e.finalize(u.get(t).liveRange.extract());
                        u.remove(t), E()
                    })
                },
                movedBefore: function(e, t) {
                    S(function() {
                        var n = u.get(e).liveRange.extract();
                        null === t ? u.lastValue().liveRange.insertAfter(n) : u.get(t).liveRange.insertBefore(n), u.moveBefore(e, t), E()
                    })
                },
                changed: function(t, i) {
                    S(function() {
                        var r = u.get(t);
                        if (!r) throw new Error("Unknown id for changed: " + t);
                        R(r.doc, i), e.renderToRange(r.liveRange, l.bind(n, null, _(r.doc)))
                    })
                }
            }), y
        };
        var H = 1;
        e.Landmark = function() { this.id = H++, this._range = null }, l.extend(e.Landmark.prototype, { firstNode: function() { return this._range.firstNode() }, lastNode: function() { return this._range.lastNode() }, find: function(e) { var t = this._range; return c.findClipped(t.containerNode(), e, t.firstNode(), t.lastNode()) }, findAll: function(e) { var t = this._range; return c.findAllClipped(t.containerNode(), e, t.firstNode(), t.lastNode()) }, hasDom: function() { return !!this._range } }), e.UNIQUE_LABEL = ["UNIQUE_LABEL"], e.labelBranch = function(t, n) {
            var i = s.get();
            if (!i || null === t) return n();
            t === e.UNIQUE_LABEL && (t = u.id()), i.currentBranch.pushLabel(t);
            var r = n(),
                o = i.currentBranch.getNotes().occupied;
            return i.currentBranch.popLabel(), o ? i.annotate(r, y, { label: t }) : r
        }, e.createLandmark = function(t, n) {
            var i = s.get();
            if (!i) {
                var r = new e.Landmark;
                t.created && t.created.call(r);
                var o = n(r);
                return t.destroyed && t.destroyed.call(r), o
            }
            var a = {};
            l.isArray(t.preserve) ? l.each(t.preserve, function(e) { a[e] = !0 }) : a = t.preserve || {};
            for (var u in a) "function" != typeof a[u] && (a[u] = function() { return !0 });
            i.currentBranch.mark("occupied");
            var r, c = i.currentBranch.getNotes();
            if (c.originalRange) {
                if (c.originalRange.superceded) throw new Error("Can't create second landmark in same branch");
                c.originalRange.superceded = !0, r = c.originalRange.landmark
            } else r = new e.Landmark, t.created && p.nonreactive(function() { t.created.call(r) });
            c.landmark = r;
            var o = n(r);
            return i.annotate(o, b, function(e) { return e ? (l.extend(e, { preserve: a, constant: !!t.constant, rendered: t.rendered || function() {}, destroyed: t.destroyed || function() {}, landmark: r, finalize: function() { this.superceded || (this.landmark._range = null, this.destroyed.call(this.landmark)) } }), r._range = e, i.landmarkRanges.push(e), i = null, void 0) : (t.destroyed && t.destroyed.call(r), void 0) })
        }, t.getEnclosingLandmark = function(e) { var t = E(b, e); return t ? t.landmark : null }
    }).call(this),
        function() {
            o = function(e, t, i, r, a, u) {
                var d = function(e, t) { h.transplantTag(n, e, t) },
                    f = new s(e, t, i, r),
                    p = function(e, t, n, i) { for (var r = t ? t.nextSibling : e.firstChild; r && r !== n; r = r.nextSibling) i(r) !== !1 && r.firstChild && p(r, null, null, i) };
                u = u || {};
                var g = u.regionPreservations = u.regionPreservations || [],
                    m = null;
                return p(t, null, null, function(e) {
                    var t = l.find(a, function(t) { return "region" === t.type && t.newRange.firstNode() === e }) || l.find(a, function(t) { return "node" === t.type && t.to === e });
                    if (t) {
                        var n = "region" === t.type ? t.fromStart : t.from;
                        if (!m || c.compareElementIndex(m, n) < 0)
                            if ("region" === t.type) f.match(t.fromStart, t.newRange.firstNode(), d, !0) && (f.skipToSiblings(t.fromEnd, t.newRange.lastNode()), h.transplantRange(t.fromStart, t.fromEnd, t.newRange), g.push(t.newRange));
                            else if ("node" === t.type && f.match(n, e, d)) return m = n, (n.firstChild || e.firstChild) && "TEXTAREA" !== n.nodeName && "SELECT" !== n.nodeName && o(n, e, null, null, a), !1
                    }
                    return !0
                }), f.finish(), u
            }, s = function(e, t, n, i) { this.tgtParent = e, this.srcParent = t, this.tgtBefore = n, this.tgtAfter = i, this.lastKeptTgtNode = null, this.lastKeptSrcNode = null }, s.prototype.match = function(e, t, n, i) {
                var r = this.lastKeptTgtNode,
                    o = this.lastKeptSrcNode,
                    a = e,
                    l = t;
                if (!a != !l) return !1;
                var u = !r,
                    h = !a;
                if (!u) { for (; !(r.parentNode === this.tgtParent || a && c.elementContains(r.parentNode, a));) this._replaceNodes(r, null, o, null), r = r.parentNode, o = o.parentNode; if (this.lastKeptTgtNode = r, this.lastKeptSrcNode = o, !h && (c.elementContains(o, l) || o.parentNode !== this.srcParent && !c.elementContains(o.parentNode, l))) return !1 }
                if (h) this._replaceNodes(r, null, o, null, this.tgtParent, this.srcParent);
                else {
                    if (!i && a.nodeName !== l.nodeName) return !1;
                    for (var d = a.parentNode, f = l.parentNode; d !== (u ? this.tgtParent : r.parentNode); d = d.parentNode, f = f.parentNode) { if (f === (u ? this.srcParent : o.parentNode)) return !1; if (d.nodeName !== f.nodeName) return !1 }
                    if (f !== (u ? this.srcParent : o.parentNode)) return !1;
                    for (var p = !0;;) {
                        if (p && i || (1 === a.nodeType && s._copyAttributes(a, l), n && n(a, l)), p = !1, (u ? this.tgtParent : r.parentNode) === a.parentNode) { this._replaceNodes(r, a, o, l); break }
                        this._replaceNodes(null, a, null, l), a = a.parentNode, l = l.parentNode
                    }
                }
                return this.lastKeptTgtNode = e, this.lastKeptSrcNode = t, !0
            }, s.prototype.skipToSiblings = function(e, t) {
                var n = this.lastKeptTgtNode,
                    i = this.lastKeptSrcNode;
                return n && n.parentNode === e.parentNode ? i && i.parentNode === t.parentNode ? (this.lastKeptTgtNode = e, this.lastKeptSrcNode = t, !0) : !1 : !1
            }, s.prototype.finish = function() { return this.match(null, null) }, s.prototype._replaceNodes = function(e, t, n, i, r, o) {
                var s = r || (e || t).parentNode,
                    a = o || (n || i).parentNode;
                s === this.tgtParent && (e = e || this.tgtBefore, t = t || this.tgtAfter), a === this.srcParent && (n = n || this.srcBefore, i = i || this.srcAfter);
                for (var l;
                    (l = e ? e.nextSibling : s.firstChild) && l !== t;) s.removeChild(l);
                for (var u;
                    (u = n ? n.nextSibling : a.firstChild) && u !== i;) s.insertBefore(u, t || null)
            }, s._copyAttributes = function(e, t) {
                var n = t.attributes,
                    i = e.attributes,
                    r = e === document.activeElement;
                e.style.cssText && (e.style.cssText = "");
                var o = !1,
                    s = null;
                if ("INPUT" === e.nodeName && (o = "radio" === e.type, o || "checkbox" === e.type)) {
                    var a = !!e._sparkOriginalRenderedChecked && e._sparkOriginalRenderedChecked[0],
                        l = !!t._sparkOriginalRenderedChecked && t._sparkOriginalRenderedChecked[0],
                        u = e._currentChecked ? e._currentChecked[0] : e.checked;
                    a === l ? s = u : (s = l, e._sparkOriginalRenderedChecked = [s])
                }
                for (var h = i.length - 1; h >= 0; h--) {
                    var d = i[h];
                    if (d.specified) {
                        var f = d.name;
                        if (i[f] && "id" !== f && "type" !== f && (!o || "name" !== f) && "value" !== f && "src" !== f) {
                            var p = e[f];
                            (!p || "object" != typeof p && !/^jQuery/.test(f)) && e.removeAttributeNode(d)
                        }
                    }
                }
                if (e.mergeAttributes) {
                    var g = t._sparkOriginalRenderedValue;
                    t.removeAttribute("_sparkOriginalRenderedValue"), e.mergeAttributes(t), g && (t._sparkOriginalRenderedValue = g), t.name && (e.name = t.name)
                } else
                    for (var h = 0, m = n.length; m > h; h++) {
                        var v = n.item(h);
                        if (v.specified) {
                            var f = v.name.toLowerCase(),
                                _ = String(v.value);
                            if ("type" === f);
                            else if ("checked" === f);
                            else if ("style" === f) e.style.cssText = t.style.cssText;
                            else if ("class" === f) e.className = t.className;
                            else if ("value" === f);
                            else if ("src" === f) t.src !== e.src && (e.src = t.src);
                            else try { e.setAttribute(f, _) } catch (y) { throw new Error("Error copying attribute '" + f + "': " + y) }
                        }
                    }
                var b = function(e) { return e._sparkOriginalRenderedValue ? e._sparkOriginalRenderedValue[0] : null },
                    w = b(t),
                    k = b(e),
                    x = c.getElementValue(e);
                if ("SELECT" === e.nodeName) {
                    for (; e.firstChild;) e.removeChild(e.firstChild);
                    for (; t.firstChild;) e.insertBefore(t.firstChild, null);
                    c.setElementValue(e, x)
                }
                w === k || x !== w && r || (x !== w && c.setElementValue(e, w), e._sparkOriginalRenderedValue = [w]), null !== s && (e.checked !== s && (e.checked = s), e.defaultChecked = s, s ? e.setAttribute("checked", "checked") : e.removeAttribute("checked"))
            }, t.Patcher = s
        }.call(this),
        function() { a.render = function(t) { return e.render(function() { return e.isolate("function" == typeof t ? t : function() { return String(t) }) }) }, a.renderList = function(t, n, i) { return e.render(function() { return e.list(t, function(t) { var i = t._id ? r(t._id) : null; return e.labelBranch(i, function() { return e.isolate(l.bind(n, null, t)) }) }, function() { return i ? e.isolate(i) : "" }) }) } }.call(this),
        function() {
            e._labelFromIdOrName = function(e) {
                var t = null;
                if (1 === e.nodeType)
                    if (e.getAttribute("id")) t = "#" + e.getAttribute("id");
                    else if (e.getAttribute("name"))
                    for (t = e.getAttribute("name"), "INPUT" !== e.nodeName || "radio" !== e.type && "checkbox" !== e.type || !e.value || (t = t + ":" + e.value); e.parentNode && 1 === e.parentNode.nodeType;) {
                        if (e = e.parentNode, e.id) { t = "#" + e.id + "/" + t; break }
                        e.getAttribute("name") && (t = e.getAttribute("name") + "/" + t)
                    }
                return t
            }
        }.call(this), "undefined" == typeof Package && (Package = {}), Package.spark = { Spark: e, SparkTest: t }
}(),
function() {
    var e = (Package.meteor.Meteor, Package.underscore._),
        t = Package.spark.Spark;
    (function() {
        var n = "input textarea button select option".split(" "),
            i = e.map(n, function(e) { return e.replace(/^.*$/, "$&[id], $&[name]") }).join(", ");
        t._addGlobalPreserve(i, t._labelFromIdOrName)
    }).call(this), "undefined" == typeof Package && (Package = {}), Package["preserve-inputs"] = {}
}(),
function() {
    var e, t = Package.meteor.Meteor,
        n = Package.underscore._,
        i = Package.ejson.EJSON;
    (function() {
        e = function() { return e.info.apply(this, arguments) };
        var r = 0,
            o = [],
            s = 0;
        e._intercept = function(e) { r += e }, e._suppress = function(e) { s += e }, e._intercepted = function() { var e = o; return o = [], r = 0, e }, e.outputFormat = "json";
        var a = { debug: "green", warn: "magenta", error: "red" },
            l = "blue",
            u = ["time", "timeInexact", "level", "file", "line", "program", "originApp", "satellite", "stderr"],
            c = u.concat(["app", "message"]),
            h = function(n) {
                var i = e.format(n),
                    r = n.level;
                "undefined" != typeof console && console[r] ? console[r](i) : t._debug(i)
            };
        e._getCallerDetails = function() {
            var e = function() {
                    var e = new Error,
                        t = e.stack;
                    return t
                },
                t = e();
            if (!t) return {};
            for (var n, i = t.split("\n"), r = 1; r < i.length; ++r) { if (n = i[r], n.match(/^\s*at eval \(eval/)) return { file: "eval" }; if (!n.match(/packages\/logging(?:\/|(?::tests)?\.js)/)) break }
            var o = {},
                s = /(?:[@(]| at )([^(]+?):([0-9:]+)(?:\)|$)/.exec(n);
            return s ? (o.line = s[2].split(":")[0], o.file = s[1].split("/").slice(-1)[0].split("?")[0], o) : o
        }, n.each(["debug", "info", "warn", "error"], function(a) {
            e[a] = function(l) {
                if (s) return s--, void 0;
                var c = !1;
                r && (r--, c = !0);
                var d = !n.isObject(l) || n.isRegExp(l) || n.isDate(l) ? { message: new String(l).toString() } : l;
                if (n.each(u, function(e) { if (d[e]) throw new Error("Can't set '" + e + "' in log message") }), n.has(d, "message") && !n.isString(d.message)) throw new Error("The 'message' field in log objects must be a string");
                if (d = n.extend(e._getCallerDetails(), d), d.time = new Date, d.level = a, "debug" !== a)
                    if (c) o.push(i.stringify(d));
                    else if (t.isServer)
                    if ("colored-text" === e.outputFormat) console.log(e.format(d, { color: !0 }));
                    else {
                        if ("json" !== e.outputFormat) throw new Error("Unknown logging output format: " + e.outputFormat);
                        console.log(i.stringify(d))
                    }
                else h(d)
            }
        }), e.parse = function(e) {
            var t = null;
            if (e && "{" === e.charAt(0)) try { t = i.parse(e) } catch (n) {}
            return t && t.time && t.time instanceof Date ? t : null
        }, e.format = function(e, r) {
            e = i.clone(e), r = r || {};
            var o = e.time;
            if (!(o instanceof Date)) throw new Error("'time' must be a Date object");
            var s = e.timeInexact,
                u = e.level || "info",
                h = e.file,
                d = e.line,
                f = e.app || "",
                p = e.originApp,
                g = e.message || "",
                m = e.program || "",
                v = e.satellite,
                _ = e.stderr || "";
            n.each(c, function(t) { delete e[t] }), n.isEmpty(e) || (g && (g += " "), g += i.stringify(e));
            var y = function(e) { return 10 > e ? "0" + e : e.toString() },
                b = function(e) { return 100 > e ? "0" + y(e) : e.toString() },
                w = o.getFullYear().toString() + y(o.getMonth() + 1) + y(o.getDate()),
                k = y(o.getHours()) + ":" + y(o.getMinutes()) + ":" + y(o.getSeconds()) + "." + b(o.getMilliseconds()),
                x = "(" + -((new Date).getTimezoneOffset() / 60) + ")",
                C = "";
            f && (C += f), p && p !== f && (C += " via " + p), C && (C = "[" + C + "] ");
            var T = h && d ? ["(", m ? m + ":" : "", h, ":", d, ") "].join("") : "";
            v && (T += ["[", v, "]"].join(""));
            var E = _ ? "(STDERR) " : "",
                D = [u.charAt(0).toUpperCase(), w, "-", k, x, s ? "? " : " ", C, T, E].join(""),
                S = function(e, n) { return r.color && t.isServer && n ? Npm.require("cli-color")[n](e) : e };
            return S(D, l) + S(g, a[u])
        }, e.objFromText = function(e, t) { var i = { message: e, level: "info", time: new Date, timeInexact: !0 }; return n.extend(i, t) }
    }).call(this), "undefined" == typeof Package && (Package = {}), Package.logging = { Log: e }
}(),
function() {
    var e, t = Package.meteor.Meteor,
        n = Package.underscore._,
        i = (Package.logging.Log, Package.json.JSON);
    (function() {
        var r, o = "Meteor_Reload",
            s = 3e4,
            a = {};
        "undefined" != typeof sessionStorage && sessionStorage && (r = sessionStorage.getItem(o), sessionStorage.removeItem(o)), r || (r = "{}");
        var l = {};
        try { l = i.parse(r), "object" != typeof l && (t._debug("Got bad data on reload. Ignoring."), l = {}) } catch (u) { t._debug("Got invalid JSON on reload. Ignoring.") }
        l.reload && "object" == typeof l.data && l.time + s > (new Date).getTime() && (a = l.data);
        var c = [];
        e = {}, e._onMigrate = function(e, t) { t || (t = e, e = void 0), c.push({ name: e, callback: t }) }, e._migrationData = function(e) { return a[e] };
        var h = !1;
        e._reload = function() {
            if (!h) {
                h = !0;
                var e = function() {
                    n.defer(function() {
                        for (var r = {}, s = n.clone(c); s.length;) {
                            var a = s.shift(),
                                l = a.callback(e);
                            if (!l[0]) return;
                            l.length > 1 && a.name && (r[a.name] = l[1])
                        }
                        try { var u = i.stringify({ time: (new Date).getTime(), data: r, reload: !0 }) } catch (h) { throw t._debug("Couldn't serialize data for migration", r), h }
                        "undefined" != typeof sessionStorage && sessionStorage ? sessionStorage.setItem(o, u) : t._debug("Browser does not support sessionStorage. Not saving migration state."), window.location.reload()
                    })
                };
                e()
            }
        }
    }).call(this),
        function() { t._reload = { onMigrate: e._onMigrate, migrationData: e._migrationData, reload: e._reload } }.call(this), "undefined" == typeof Package && (Package = {}), Package.reload = { Reload: e }
}(),
function() {
    var e, t, n = Package.meteor.Meteor,
        i = Package.underscore._,
        r = Package.ejson.EJSON;
    (function() {
        var o = new n.EnvironmentVariable;
        e = function(e, n) {
            var i = o.get();
            i && i.checking(e);
            try { h(e, n) } catch (r) { throw r instanceof t.Error && r.path && (r.message += " in field " + r.path), r }
        }, t = {
            Optional: function(e) { return new s(e) },
            OneOf: function() { return new a(i.toArray(arguments)) },
            Any: ["__any__"],
            Where: function(e) { return new l(e) },
            ObjectIncluding: function(e) { return new u(e) },
            Integer: ["__integer__"],
            Error: n.makeErrorType("Match.Error", function(e) { this.message = "Match error: " + e, this.path = "", this.sanitizedError = new n.Error(400, "Match failed") }),
            test: function(e, n) { try { return h(e, n), !0 } catch (i) { if (i instanceof t.Error) return !1; throw i } },
            _failIfArgumentsAreNotAllChecked: function(e, t, n, i) {
                var r = new d(n, i),
                    s = o.withValue(r, function() { return e.apply(t, n) });
                return r.throwUnlessAllArgumentsHaveBeenChecked(), s
            }
        };
        var s = function(e) { this.pattern = e },
            a = function(e) {
                if (i.isEmpty(e)) throw new Error("Must provide at least one choice to Match.OneOf");
                this.choices = e
            },
            l = function(e) { this.condition = e },
            u = function(e) { this.pattern = e },
            c = [
                [String, "string"],
                [Number, "number"],
                [Boolean, "boolean"],
                [void 0, "undefined"]
            ],
            h = function(e, n) {
                if (n !== t.Any) {
                    for (var o = 0; o < c.length; ++o)
                        if (n === c[o][0]) { if (typeof e === c[o][1]) return; throw new t.Error("Expected " + c[o][1] + ", got " + typeof e) }
                    if (null === n) { if (null === e) return; throw new t.Error("Expected null, got " + r.stringify(e)) }
                    if (n === t.Integer) { if ("number" == typeof e && (0 | e) === e) return; throw new t.Error("Expected Integer, got " + (e instanceof Object ? r.stringify(e) : e)) }
                    if (n === Object && (n = t.ObjectIncluding({})), n instanceof Array) { if (1 !== n.length) throw Error("Bad pattern: arrays must have one type element" + r.stringify(n)); if (!i.isArray(e) && !i.isArguments(e)) throw new t.Error("Expected array, got " + r.stringify(e)); return i.each(e, function(e, i) { try { h(e, n[0]) } catch (r) { throw r instanceof t.Error && (r.path = p(i, r.path)), r } }), void 0 }
                    if (n instanceof l) { if (n.condition(e)) return; throw new t.Error("Failed Match.Where validation") }
                    if (n instanceof s && (n = t.OneOf(void 0, n.pattern)), n instanceof a) {
                        for (var o = 0; o < n.choices.length; ++o) try { return h(e, n.choices[o]), void 0 } catch (d) { if (!(d instanceof t.Error)) throw d }
                        throw new t.Error("Failed Match.OneOf or Match.Optional validation")
                    }
                    if (n instanceof Function) { if (e instanceof n) return; throw new t.Error("Expected " + n.name) }
                    var f = !1;
                    if (n instanceof u && (f = !0, n = n.pattern), "object" != typeof n) throw Error("Bad pattern: unknown pattern type");
                    if ("object" != typeof e) throw new t.Error("Expected object, got " + typeof e);
                    if (null === e) throw new t.Error("Expected object, got null");
                    if (e.constructor !== Object) throw new t.Error("Expected plain object");
                    var g = {},
                        m = {};
                    i.each(n, function(e, t) { e instanceof s ? m[t] = e.pattern : g[t] = e }), i.each(e, function(e, n) {
                        try {
                            if (i.has(g, n)) h(e, g[n]), delete g[n];
                            else if (i.has(m, n)) h(e, m[n]);
                            else if (!f) throw new t.Error("Unknown key")
                        } catch (r) { throw r instanceof t.Error && (r.path = p(n, r.path)), r }
                    }), i.each(g, function(e, n) { throw new t.Error("Missing key '" + n + "'") })
                }
            },
            d = function(e, t) {
                var n = this;
                n.args = i.clone(e), n.args.reverse(), n.description = t
            };
        i.extend(d.prototype, {
            checking: function(e) {
                var t = this;
                t._checkingOneValue(e) || (i.isArray(e) || i.isArguments(e)) && i.each(e, i.bind(t._checkingOneValue, t))
            },
            _checkingOneValue: function(e) {
                for (var t = this, n = 0; n < t.args.length; ++n)
                    if (e === t.args[n]) return t.args.splice(n, 1), !0;
                return !1
            },
            throwUnlessAllArgumentsHaveBeenChecked: function() { var e = this; if (!i.isEmpty(e.args)) throw new Error("Did not check() all arguments during " + e.description) }
        });
        var f = ["do", "if", "in", "for", "let", "new", "try", "var", "case", "else", "enum", "eval", "false", "null", "this", "true", "void", "with", "break", "catch", "class", "const", "super", "throw", "while", "yield", "delete", "export", "import", "public", "return", "static", "switch", "typeof", "default", "extends", "finally", "package", "private", "continue", "debugger", "function", "arguments", "interface", "protected", "implements", "instanceof"],
            p = function(e, t) { return "number" == typeof e || e.match(/^[0-9]+$/) ? e = "[" + e + "]" : (!e.match(/^[a-z_$][0-9a-z_$]*$/i) || i.contains(f, e)) && (e = JSON.stringify([e])), t && "[" !== t[0] ? e + "." + t : e + t }
    }).call(this), "undefined" == typeof Package && (Package = {}), Package.check = { check: e, Match: t }
}(),
function() {
    var e, t, n, i, r, o, s, a, l, u, c, h = Package.meteor.Meteor,
        d = (Package.check.check, Package.check.Match, Package.random.Random),
        f = Package.ejson.EJSON,
        p = Package.json.JSON,
        g = Package.underscore._,
        m = Package.deps.Deps,
        v = (Package.logging.Log, Package.minimongo.LocalCollection);
    (function() { t = {} }).call(this),
        function() {
            n = function(e) {
                var t = this;
                g.extend(t, g.defaults(g.clone(e || {}), { baseTimeout: 1e3, exponent: 2.2, maxTimeout: 3e5, minTimeout: 10, minCount: 2, fuzz: .5 })), t.retryTimer = null
            }, g.extend(n.prototype, {
                clear: function() {
                    var e = this;
                    e.retryTimer && clearTimeout(e.retryTimer), e.retryTimer = null
                },
                _timeout: function(e) { var t = this; if (e < t.minCount) return t.minTimeout; var n = Math.min(t.maxTimeout, t.baseTimeout * Math.pow(t.exponent, e)); return n *= d.fraction() * t.fuzz + (1 - t.fuzz / 2) },
                retryLater: function(e, t) {
                    var n = this,
                        i = n._timeout(e);
                    return n.retryTimer && clearTimeout(n.retryTimer), n.retryTimer = setTimeout(t, i), i
                }
            })
        }.call(this),
        function() {
            i = function() {
                var e = document,
                    t = window,
                    n = {},
                    i = function() {};
                i.prototype.addEventListener = function(e, t) { this._listeners || (this._listeners = {}), e in this._listeners || (this._listeners[e] = []); var i = this._listeners[e]; - 1 === n.arrIndexOf(i, t) && i.push(t) }, i.prototype.removeEventListener = function(e, t) {
                    if (this._listeners && e in this._listeners) {
                        var i = this._listeners[e],
                            r = n.arrIndexOf(i, t);
                        return -1 !== r ? (i.length > 1 ? this._listeners[e] = i.slice(0, r).concat(i.slice(r + 1)) : delete this._listeners[e], void 0) : void 0
                    }
                }, i.prototype.dispatchEvent = function(e) {
                    var t = e.type,
                        n = Array.prototype.slice.call(arguments, 0);
                    if (this["on" + t] && this["on" + t].apply(this, n), this._listeners && t in this._listeners)
                        for (var i = 0; i < this._listeners[t].length; i++) this._listeners[t][i].apply(this, n)
                };
                var r = function(e, t) {
                    if (this.type = e, "undefined" != typeof t)
                        for (var n in t) t.hasOwnProperty(n) && (this[n] = t[n])
                };
                r.prototype.toString = function() {
                    var e = [];
                    for (var t in this)
                        if (this.hasOwnProperty(t)) { var n = this[t]; "function" == typeof n && (n = "[function]"), e.push(t + "=" + n) }
                    return "SimpleEvent(" + e.join(", ") + ")"
                };
                var o = function(e) {
                    var t = this;
                    t._events = e || [], t._listeners = {}
                };
                o.prototype.emit = function(e) {
                    var t = this;
                    if (t._verifyType(e), !t._nuked) {
                        var n = Array.prototype.slice.call(arguments, 1);
                        if (t["on" + e] && t["on" + e].apply(t, n), e in t._listeners)
                            for (var i = 0; i < t._listeners[e].length; i++) t._listeners[e][i].apply(t, n)
                    }
                }, o.prototype.on = function(e, t) {
                    var n = this;
                    n._verifyType(e), n._nuked || (e in n._listeners || (n._listeners[e] = []), n._listeners[e].push(t))
                }, o.prototype._verifyType = function(e) { var t = this; - 1 === n.arrIndexOf(t._events, e) && n.log("Event " + p.stringify(e) + " not listed " + p.stringify(t._events) + " in " + t) }, o.prototype.nuke = function() {
                    var e = this;
                    e._nuked = !0;
                    for (var t = 0; t < e._events.length; t++) delete e[e._events[t]];
                    e._listeners = {}
                };
                var s = "abcdefghijklmnopqrstuvwxyz0123456789_";
                n.random_string = function(e, t) { t = t || s.length; var n, i = []; for (n = 0; e > n; n++) i.push(s.substr(Math.floor(Math.random() * t), 1)); return i.join("") }, n.random_number = function(e) { return Math.floor(Math.random() * e) }, n.random_number_string = function(e) {
                    var t = ("" + (e - 1)).length,
                        i = Array(t + 1).join("0");
                    return (i + n.random_number(e)).slice(-t)
                }, n.getOrigin = function(e) { e += "/"; var t = e.split("/").slice(0, 3); return t.join("/") }, n.isSameOriginUrl = function(e, n) { return n || (n = t.location.href), e.split("/").slice(0, 3).join("/") === n.split("/").slice(0, 3).join("/") }, n.isSameOriginScheme = function(e, n) { return n || (n = t.location.href), e.split(":")[0] === n.split(":")[0] }, n.getParentDomain = function(e) { if (/^[0-9.]*$/.test(e)) return e; if (/^\[/.test(e)) return e; if (!/[.]/.test(e)) return e; var t = e.split(".").slice(1); return t.join(".") }, n.objectExtend = function(e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]); return e };
                var a = "_jp";
                n.polluteGlobalNamespace = function() { a in t || (t[a] = {}) }, n.closeFrame = function(e, t) { return "c" + p.stringify([e, t]) }, n.userSetCode = function(e) { return 1e3 === e || e >= 3e3 && 4999 >= e }, n.countRTO = function(e) { var t; return t = e > 100 ? 3 * e : e + 200 }, n.log = function() { t.console && console.log && console.log.apply && console.log.apply(console, arguments) }, n.bind = function(e, t) { return e.bind ? e.bind(t) : function() { return e.apply(t, arguments) } }, n.flatUrl = function(e) { return -1 === e.indexOf("?") && -1 === e.indexOf("#") }, n.amendUrl = function(t) {
                    var i = e.location;
                    if (!t) throw new Error("Wrong url for SockJS");
                    if (!n.flatUrl(t)) throw new Error("Only basic urls are supported in SockJS");
                    0 === t.indexOf("//") && (t = i.protocol + t), 0 === t.indexOf("/") && (t = i.protocol + "//" + i.host + t), t = t.replace(/[/]+$/, "");
                    var r = t.split("/");
                    return ("http:" === r[0] && /:80$/.test(r[2]) || "https:" === r[0] && /:443$/.test(r[2])) && (r[2] = r[2].replace(/:(80|443)$/, "")), t = r.join("/")
                }, n.arrIndexOf = function(e, t) {
                    for (var n = 0; n < e.length; n++)
                        if (e[n] === t) return n;
                    return -1
                }, n.arrSkip = function(e, t) { var i = n.arrIndexOf(e, t); if (-1 === i) return e.slice(); var r = e.slice(0, i); return r.concat(e.slice(i + 1)) }, n.isArray = Array.isArray || function(e) { return {}.toString.call(e).indexOf("Array") >= 0 }, n.delay = function(e, t) { return "function" == typeof e && (t = e, e = 0), setTimeout(t, e) };
                var l, u = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                    c = { "\x00": "\\u0000", "": "\\u0001", "": "\\u0002", "": "\\u0003", "": "\\u0004", "": "\\u0005", "": "\\u0006", "": "\\u0007", "\b": "\\b", "	": "\\t", "\n": "\\n", "": "\\u000b", "\f": "\\f", "\r": "\\r", "": "\\u000e", "": "\\u000f", "": "\\u0010", "": "\\u0011", "": "\\u0012", "": "\\u0013", "": "\\u0014", "": "\\u0015", "": "\\u0016", "": "\\u0017", "": "\\u0018", "": "\\u0019", "": "\\u001a", "": "\\u001b", "": "\\u001c", "": "\\u001d", "": "\\u001e", "": "\\u001f", '"': '\\"', "\\": "\\\\", "": "\\u007f", "Â€": "\\u0080", "Â": "\\u0081", "Â‚": "\\u0082", "Âƒ": "\\u0083", "Â„": "\\u0084", "Â…": "\\u0085", "Â†": "\\u0086", "Â‡": "\\u0087", "Âˆ": "\\u0088", "Â‰": "\\u0089", "ÂŠ": "\\u008a", "Â‹": "\\u008b", "ÂŒ": "\\u008c", "Â": "\\u008d", "ÂŽ": "\\u008e", "Â": "\\u008f", "Â": "\\u0090", "Â‘": "\\u0091", "Â’": "\\u0092", "Â“": "\\u0093", "Â”": "\\u0094", "Â•": "\\u0095", "Â–": "\\u0096", "Â—": "\\u0097", "Â˜": "\\u0098", "Â™": "\\u0099", "Âš": "\\u009a", "Â›": "\\u009b", "Âœ": "\\u009c", "Â": "\\u009d", "Âž": "\\u009e", "ÂŸ": "\\u009f", "Â­": "\\u00ad", "Ø€": "\\u0600", "Ø": "\\u0601", "Ø‚": "\\u0602", "Øƒ": "\\u0603", "Ø„": "\\u0604", "Ü": "\\u070f", "áž´": "\\u17b4", "ážµ": "\\u17b5", "â€Œ": "\\u200c", "â€": "\\u200d", "â€Ž": "\\u200e", "â€": "\\u200f", "\u2028": "\\u2028", "\u2029": "\\u2029", "â€ª": "\\u202a", "â€«": "\\u202b", "â€¬": "\\u202c", "â€­": "\\u202d", "â€®": "\\u202e", "â€¯": "\\u202f", "â ": "\\u2060", "â¡": "\\u2061", "â¢": "\\u2062", "â£": "\\u2063", "â¤": "\\u2064", "â¥": "\\u2065", "â¦": "\\u2066", "â§": "\\u2067", "â¨": "\\u2068", "â©": "\\u2069", "âª": "\\u206a", "â«": "\\u206b", "â¬": "\\u206c", "â­": "\\u206d", "â®": "\\u206e", "â¯": "\\u206f", "ï»¿": "\\ufeff", "ï¿°": "\\ufff0", "ï¿±": "\\ufff1", "ï¿²": "\\ufff2", "ï¿³": "\\ufff3", "ï¿´": "\\ufff4", "ï¿µ": "\\ufff5", "ï¿¶": "\\ufff6", "ï¿·": "\\ufff7", "ï¿¸": "\\ufff8", "ï¿¹": "\\ufff9", "ï¿º": "\\ufffa", "ï¿»": "\\ufffb", "ï¿¼": "\\ufffc", "ï¿½": "\\ufffd", "ï¿¾": "\\ufffe", "ï¿¿": "\\uffff" },
                    h = /[\x00-\x1f\ud800-\udfff\ufffe\uffff\u0300-\u0333\u033d-\u0346\u034a-\u034c\u0350-\u0352\u0357-\u0358\u035c-\u0362\u0374\u037e\u0387\u0591-\u05af\u05c4\u0610-\u0617\u0653-\u0654\u0657-\u065b\u065d-\u065e\u06df-\u06e2\u06eb-\u06ec\u0730\u0732-\u0733\u0735-\u0736\u073a\u073d\u073f-\u0741\u0743\u0745\u0747\u07eb-\u07f1\u0951\u0958-\u095f\u09dc-\u09dd\u09df\u0a33\u0a36\u0a59-\u0a5b\u0a5e\u0b5c-\u0b5d\u0e38-\u0e39\u0f43\u0f4d\u0f52\u0f57\u0f5c\u0f69\u0f72-\u0f76\u0f78\u0f80-\u0f83\u0f93\u0f9d\u0fa2\u0fa7\u0fac\u0fb9\u1939-\u193a\u1a17\u1b6b\u1cda-\u1cdb\u1dc0-\u1dcf\u1dfc\u1dfe\u1f71\u1f73\u1f75\u1f77\u1f79\u1f7b\u1f7d\u1fbb\u1fbe\u1fc9\u1fcb\u1fd3\u1fdb\u1fe3\u1feb\u1fee-\u1fef\u1ff9\u1ffb\u1ffd\u2000-\u2001\u20d0-\u20d1\u20d4-\u20d7\u20e7-\u20e9\u2126\u212a-\u212b\u2329-\u232a\u2adc\u302b-\u302c\uaab2-\uaab3\uf900-\ufa0d\ufa10\ufa12\ufa15-\ufa1e\ufa20\ufa22\ufa25-\ufa26\ufa2a-\ufa2d\ufa30-\ufa6d\ufa70-\ufad9\ufb1d\ufb1f\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufb4e\ufff0-\uffff]/g,
                    d = p && p.stringify || function(e) { return u.lastIndex = 0, u.test(e) && (e = e.replace(u, function(e) { return c[e] })), '"' + e + '"' },
                    f = function(e) {
                        var t, n = {},
                            i = [];
                        for (t = 0; 65536 > t; t++) i.push(String.fromCharCode(t));
                        return e.lastIndex = 0, i.join("").replace(e, function(e) { return n[e] = "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4), "" }), e.lastIndex = 0, n
                    };
                n.quote = function(e) { var t = d(e); return h.lastIndex = 0, h.test(t) ? (l || (l = f(h)), t.replace(h, function(e) { return l[e] })) : t };
                var g = ["websocket", "xdr-streaming", "xhr-streaming", "iframe-eventsource", "iframe-htmlfile", "xdr-polling", "xhr-polling", "iframe-xhr-polling", "jsonp-polling"];
                n.probeProtocols = function() {
                    for (var e = {}, t = 0; t < g.length; t++) {
                        var n = g[t];
                        e[n] = T[n] && T[n].enabled()
                    }
                    return e
                }, n.detectProtocols = function(e, t, n) {
                    var i = {},
                        r = [];
                    t || (t = g);
                    for (var o = 0; o < t.length; o++) {
                        var s = t[o];
                        i[s] = e[s]
                    }
                    var a = function(e) {
                        var t = e.shift();
                        i[t] ? r.push(t) : e.length > 0 && a(e)
                    };
                    return n.websocket !== !1 && a(["websocket"]), i["xhr-streaming"] && !n.null_origin ? r.push("xhr-streaming") : !i["xdr-streaming"] || n.cookie_needed || n.null_origin ? a(["iframe-eventsource", "iframe-htmlfile"]) : r.push("xdr-streaming"), i["xhr-polling"] && !n.null_origin ? r.push("xhr-polling") : !i["xdr-polling"] || n.cookie_needed || n.null_origin ? a(["iframe-xhr-polling", "jsonp-polling"]) : r.push("xdr-polling"), r
                };
                var m = "_sockjs_global";
                n.createHook = function() {
                    var e = "a" + n.random_string(8);
                    if (!(m in t)) {
                        var i = {};
                        t[m] = function(e) { return e in i || (i[e] = { id: e, del: function() { delete i[e] } }), i[e] }
                    }
                    return t[m](e)
                }, n.attachMessage = function(e) { n.attachEvent("message", e) }, n.attachEvent = function(n, i) { "undefined" != typeof t.addEventListener ? t.addEventListener(n, i, !1) : (e.attachEvent("on" + n, i), t.attachEvent("on" + n, i)) }, n.detachMessage = function(e) { n.detachEvent("message", e) }, n.detachEvent = function(n, i) { "undefined" != typeof t.addEventListener ? t.removeEventListener(n, i, !1) : (e.detachEvent("on" + n, i), t.detachEvent("on" + n, i)) };
                var v = {},
                    _ = !1,
                    y = function() { for (var e in v) v[e](), delete v[e] },
                    b = function() { _ || (_ = !0, y()) };
                n.attachEvent("unload", b), n.unload_add = function(e) { var t = n.random_string(8); return v[t] = e, _ && n.delay(y), t }, n.unload_del = function(e) { e in v && delete v[e] }, n.createIframe = function(t, i) {
                    var r, o, s = e.createElement("iframe"),
                        a = function() {
                            clearTimeout(r);
                            try { s.onload = null } catch (e) {}
                            s.onerror = null
                        },
                        l = function() { s && (a(), setTimeout(function() { s && s.parentNode.removeChild(s), s = null }, 0), n.unload_del(o)) },
                        u = function(e) { s && (l(), i(e)) },
                        c = function(e, t) {
                            try {
                                s && s.contentWindow && s.contentWindow.postMessage(e, t)
                            } catch (n) {}
                        };
                    return s.src = t, s.style.display = "none", s.style.position = "absolute", s.onerror = function() { u("onerror") }, s.onload = function() { clearTimeout(r), r = setTimeout(function() { u("onload timeout") }, 2e3) }, e.body.appendChild(s), r = setTimeout(function() { u("timeout") }, 15e3), o = n.unload_add(l), { post: c, cleanup: l, loaded: a }
                }, n.createHtmlfile = function(e, i) {
                    var r, o, s, l = new ActiveXObject("htmlfile"),
                        u = function() { clearTimeout(r) },
                        c = function() { l && (u(), n.unload_del(o), s.parentNode.removeChild(s), s = l = null, CollectGarbage()) },
                        h = function(e) { l && (c(), i(e)) },
                        d = function(e, t) { try { s && s.contentWindow && s.contentWindow.postMessage(e, t) } catch (n) {} };
                    l.open(), l.write('<html><script>document.domain="' + document.domain + '";</script></html>'), l.close(), l.parentWindow[a] = t[a];
                    var f = l.createElement("div");
                    return l.body.appendChild(f), s = l.createElement("iframe"), f.appendChild(s), s.src = e, r = setTimeout(function() { h("timeout") }, 15e3), o = n.unload_add(c), { post: d, cleanup: c, loaded: u }
                };
                var w = function() {};
                w.prototype = new o(["chunk", "finish"]), w.prototype._start = function(e, i, r, o) {
                    var s = this;
                    try { s.xhr = new XMLHttpRequest } catch (a) {}
                    if (!s.xhr) try { s.xhr = new t.ActiveXObject("Microsoft.XMLHTTP") } catch (a) {}(t.ActiveXObject || t.XDomainRequest) && (i += (-1 === i.indexOf("?") ? "?" : "&") + "t=" + +new Date), s.unload_ref = n.unload_add(function() { s._cleanup(!0) });
                    try { s.xhr.open(e, i, !0) } catch (l) { return s.emit("finish", 0, ""), s._cleanup(), void 0 }
                    if (o && o.no_credentials || (s.xhr.withCredentials = "true"), o && o.headers)
                        for (var u in o.headers) s.xhr.setRequestHeader(u, o.headers[u]);
                    s.xhr.onreadystatechange = function() {
                        if (s.xhr) {
                            var e = s.xhr;
                            switch (e.readyState) {
                                case 3:
                                    try {
                                        var t = e.status,
                                            n = e.responseText
                                    } catch (e) {}
                                    1223 === t && (t = 204), n && n.length > 0 && s.emit("chunk", t, n);
                                    break;
                                case 4:
                                    var t = e.status;
                                    1223 === t && (t = 204), s.emit("finish", t, e.responseText), s._cleanup(!1)
                            }
                        }
                    }, s.xhr.send(r)
                }, w.prototype._cleanup = function(e) {
                    var t = this;
                    if (t.xhr) {
                        if (n.unload_del(t.unload_ref), t.xhr.onreadystatechange = function() {}, e) try { t.xhr.abort() } catch (i) {}
                        t.unload_ref = t.xhr = null
                    }
                }, w.prototype.close = function() {
                    var e = this;
                    e.nuke(), e._cleanup(!0)
                };
                var k = n.XHRCorsObject = function() {
                    var e = this,
                        t = arguments;
                    n.delay(function() { e._start.apply(e, t) })
                };
                k.prototype = new w;
                var x = n.XHRLocalObject = function(e, t, i) {
                    var r = this;
                    n.delay(function() { r._start(e, t, i, { no_credentials: !0 }) })
                };
                x.prototype = new w;
                var C = n.XDRObject = function(e, t, i) {
                    var r = this;
                    n.delay(function() { r._start(e, t, i) })
                };
                C.prototype = new o(["chunk", "finish"]), C.prototype._start = function(e, t, i) {
                    var r = this,
                        o = new XDomainRequest;
                    t += (-1 === t.indexOf("?") ? "?" : "&") + "t=" + +new Date;
                    var s = o.ontimeout = o.onerror = function() { r.emit("finish", 0, ""), r._cleanup(!1) };
                    o.onprogress = function() { r.emit("chunk", 200, o.responseText) }, o.onload = function() { r.emit("finish", 200, o.responseText), r._cleanup(!1) }, r.xdr = o, r.unload_ref = n.unload_add(function() { r._cleanup(!0) });
                    try { r.xdr.open(e, t), r.xdr.send(i) } catch (a) { s() }
                }, C.prototype._cleanup = function(e) {
                    var t = this;
                    if (t.xdr) {
                        if (n.unload_del(t.unload_ref), t.xdr.ontimeout = t.xdr.onerror = t.xdr.onprogress = t.xdr.onload = null, e) try { t.xdr.abort() } catch (i) {}
                        t.unload_ref = t.xdr = null
                    }
                }, C.prototype.close = function() {
                    var e = this;
                    e.nuke(), e._cleanup(!0)
                }, n.isXHRCorsCapable = function() { return t.XMLHttpRequest && "withCredentials" in new XMLHttpRequest ? 1 : t.XDomainRequest && e.domain ? 2 : $.enabled() ? 3 : 4 };
                var T = function(e, t, i) {
                    if (!(this instanceof T)) return new T(e, t, i);
                    var r, o = this;
                    o._options = { devel: !1, debug: !1, protocols_whitelist: [], info: void 0, rtt: void 0 }, i && n.objectExtend(o._options, i), o._base_url = n.amendUrl(e), o._server = o._options.server || n.random_number_string(1e3), o._options.protocols_whitelist && o._options.protocols_whitelist.length ? r = o._options.protocols_whitelist : (r = "string" == typeof t && t.length > 0 ? [t] : n.isArray(t) ? t : null, r && o._debug('Deprecated API: Use "protocols_whitelist" option instead of supplying protocol list as a second parameter to SockJS constructor.')), o._protocols = [], o.protocol = null, o.readyState = T.CONNECTING, o._ir = U(o._base_url), o._ir.onfinish = function(e, t) { o._ir = null, e ? (o._options.info && (e = n.objectExtend(e, o._options.info)), o._options.rtt && (t = o._options.rtt), o._applyInfo(e, t, r), o._didClose()) : o._didClose(1002, "Can't connect to server", !0) }
                };
                T.prototype = new i, T.version = "0.3.4", T.CONNECTING = 0, T.OPEN = 1, T.CLOSING = 2, T.CLOSED = 3, T.prototype._debug = function() { this._options.debug && n.log.apply(n, arguments) }, T.prototype._dispatchOpen = function() {
                    var e = this;
                    e.readyState === T.CONNECTING ? (e._transport_tref && (clearTimeout(e._transport_tref), e._transport_tref = null), e.readyState = T.OPEN, e.dispatchEvent(new r("open"))) : e._didClose(1006, "Server lost session")
                }, T.prototype._dispatchMessage = function(e) {
                    var t = this;
                    t.readyState === T.OPEN && t.dispatchEvent(new r("message", { data: e }))
                }, T.prototype._dispatchHeartbeat = function() {
                    var e = this;
                    e.readyState === T.OPEN && e.dispatchEvent(new r("heartbeat", {}))
                }, T.prototype._didClose = function(e, t, i) {
                    var o = this;
                    if (o.readyState !== T.CONNECTING && o.readyState !== T.OPEN && o.readyState !== T.CLOSING) throw new Error("INVALID_STATE_ERR");
                    o._ir && (o._ir.nuke(), o._ir = null), o._transport && (o._transport.doCleanup(), o._transport = null);
                    var s = new r("close", { code: e, reason: t, wasClean: n.userSetCode(e) });
                    if (!n.userSetCode(e) && o.readyState === T.CONNECTING && !i) {
                        if (o._try_next_protocol(s)) return;
                        s = new r("close", { code: 2e3, reason: "All transports failed", wasClean: !1, last_event: s })
                    }
                    o.readyState = T.CLOSED, n.delay(function() { o.dispatchEvent(s) })
                }, T.prototype._didMessage = function(e) {
                    var t = this,
                        n = e.slice(0, 1);
                    switch (n) {
                        case "o":
                            t._dispatchOpen();
                            break;
                        case "a":
                            for (var i = p.parse(e.slice(1) || "[]"), r = 0; r < i.length; r++) t._dispatchMessage(i[r]);
                            break;
                        case "m":
                            var i = p.parse(e.slice(1) || "null");
                            t._dispatchMessage(i);
                            break;
                        case "c":
                            var i = p.parse(e.slice(1) || "[]");
                            t._didClose(i[0], i[1]);
                            break;
                        case "h":
                            t._dispatchHeartbeat()
                    }
                }, T.prototype._try_next_protocol = function(t) {
                    var i = this;
                    for (i.protocol && (i._debug("Closed transport:", i.protocol, "" + t), i.protocol = null), i._transport_tref && (clearTimeout(i._transport_tref), i._transport_tref = null);;) {
                        var r = i.protocol = i._protocols.shift();
                        if (!r) return !1;
                        if (T[r] && T[r].need_body === !0 && (!e.body || "undefined" != typeof e.readyState && "complete" !== e.readyState)) return i._protocols.unshift(r), i.protocol = "waiting-for-load", n.attachEvent("load", function() { i._try_next_protocol() }), !0;
                        if (T[r] && T[r].enabled(i._options)) {
                            var o = T[r].roundTrips || 1,
                                s = (i._options.rto || 0) * o || 5e3;
                            i._transport_tref = n.delay(s, function() { i.readyState === T.CONNECTING && i._didClose(2007, "Transport timeouted") });
                            var a = n.random_string(8),
                                l = i._base_url + "/" + i._server + "/" + a;
                            return i._debug("Opening transport:", r, " url:" + l, " RTO:" + i._options.rto), i._transport = new T[r](i, l, i._base_url), !0
                        }
                        i._debug("Skipping transport:", r)
                    }
                }, T.prototype.close = function(e, t) { var i = this; if (e && !n.userSetCode(e)) throw new Error("INVALID_ACCESS_ERR"); return i.readyState !== T.CONNECTING && i.readyState !== T.OPEN ? !1 : (i.readyState = T.CLOSING, i._didClose(e || 1e3, t || "Normal closure"), !0) }, T.prototype.send = function(e) { var t = this; if (t.readyState === T.CONNECTING) throw new Error("INVALID_STATE_ERR"); return t.readyState === T.OPEN && t._transport.doSend(n.quote("" + e)), !0 }, T.prototype._applyInfo = function(t, i, r) {
                    var o = this;
                    o._options.info = t, o._options.rtt = i, o._options.rto = n.countRTO(i), o._options.info.null_origin = !e.domain, t.base_url && (o._base_url = n.amendUrl(t.base_url));
                    var s = n.probeProtocols();
                    o._protocols = n.detectProtocols(s, r, t), n.isSameOriginScheme(o._base_url) || 2 !== n.isXHRCorsCapable() || (o._protocols = ["jsonp-polling"])
                };
                var E = T.websocket = function(e, i) {
                    var r = this,
                        o = i + "/websocket";
                    o = "https" === o.slice(0, 5) ? "wss" + o.slice(5) : "ws" + o.slice(4), r.ri = e, r.url = o;
                    var s = t.WebSocket || t.MozWebSocket;
                    r.ws = new s(r.url), r.ws.onmessage = function(e) { r.ri._didMessage(e.data) }, r.unload_ref = n.unload_add(function() { r.ws.close() }), r.ws.onclose = function() { r.ri._didMessage(n.closeFrame(1006, "WebSocket connection broken")) }
                };
                E.prototype.doSend = function(e) { this.ws.send("[" + e + "]") }, E.prototype.doCleanup = function() {
                    var e = this,
                        t = e.ws;
                    t && (t.onmessage = t.onclose = null, t.close(), n.unload_del(e.unload_ref), e.unload_ref = e.ri = e.ws = null)
                }, E.enabled = function() { return !(!t.WebSocket && !t.MozWebSocket) }, E.roundTrips = 2;
                var D = function() {};
                D.prototype.send_constructor = function(e) {
                    var t = this;
                    t.send_buffer = [], t.sender = e
                }, D.prototype.doSend = function(e) {
                    var t = this;
                    t.send_buffer.push(e), t.send_stop || t.send_schedule()
                }, D.prototype.send_schedule_wait = function() {
                    var e, t = this;
                    t.send_stop = function() { t.send_stop = null, clearTimeout(e) }, e = n.delay(25, function() { t.send_stop = null, t.send_schedule() })
                }, D.prototype.send_schedule = function() {
                    var e = this;
                    if (e.send_buffer.length > 0) {
                        var t = "[" + e.send_buffer.join(",") + "]";
                        e.send_stop = e.sender(e.trans_url, t, function(t, n) { e.send_stop = null, t === !1 ? e.ri._didClose(1006, "Sending error " + n) : e.send_schedule_wait() }), e.send_buffer = []
                    }
                }, D.prototype.send_destructor = function() {
                    var e = this;
                    e._send_stop && e._send_stop(), e._send_stop = null
                };
                var S = function(t, i, r) {
                        var o = this;
                        if (!("_send_form" in o)) {
                            var s = o._send_form = e.createElement("form"),
                                a = o._send_area = e.createElement("textarea");
                            a.name = "d", s.style.display = "none", s.style.position = "absolute", s.method = "POST", s.enctype = "application/x-www-form-urlencoded", s.acceptCharset = "UTF-8", s.appendChild(a), e.body.appendChild(s)
                        }
                        var s = o._send_form,
                            a = o._send_area,
                            l = "a" + n.random_string(8);
                        s.target = l, s.action = t + "/jsonp_send?i=" + l;
                        var u;
                        try { u = e.createElement('<iframe name="' + l + '">') } catch (c) { u = e.createElement("iframe"), u.name = l }
                        u.id = l, s.appendChild(u), u.style.display = "none";
                        try { a.value = i } catch (h) { n.log("Your browser is seriously broken. Go home! " + h.message) }
                        s.submit();
                        var d = function() { u.onerror && (u.onreadystatechange = u.onerror = u.onload = null, n.delay(500, function() { u.parentNode.removeChild(u), u = null }), a.value = "", r(!0)) };
                        return u.onerror = u.onload = d, u.onreadystatechange = function() { "complete" == u.readyState && d() }, d
                    },
                    P = function(e) {
                        return function(t, n, i) {
                            var r = new e("POST", t + "/xhr_send", n);
                            return r.onfinish = function(e) { i(200 === e || 204 === e, "http status " + e) },
                                function(e) { i(!1, e) }
                        }
                    },
                    N = function(t, i) {
                        var r, o, s = e.createElement("script"),
                            a = function(e) { o && (o.parentNode.removeChild(o), o = null), s && (clearTimeout(r), s.parentNode.removeChild(s), s.onreadystatechange = s.onerror = s.onload = s.onclick = null, s = null, i(e), i = null) },
                            l = !1,
                            u = null;
                        if (s.id = "a" + n.random_string(8), s.src = t, s.type = "text/javascript", s.charset = "UTF-8", s.onerror = function() { u || (u = setTimeout(function() { l || a(n.closeFrame(1006, "JSONP script loaded abnormally (onerror)")) }, 1e3)) }, s.onload = function() { a(n.closeFrame(1006, "JSONP script loaded abnormally (onload)")) }, s.onreadystatechange = function() {
                                if (/loaded|closed/.test(s.readyState)) {
                                    if (s && s.htmlFor && s.onclick) { l = !0; try { s.onclick() } catch (e) {} }
                                    s && a(n.closeFrame(1006, "JSONP script loaded abnormally (onreadystatechange)"))
                                }
                            }, "undefined" == typeof s.async && e.attachEvent)
                            if (/opera/i.test(navigator.userAgent)) o = e.createElement("script"), o.text = "try{var a = document.getElementById('" + s.id + "'); if(a)a.onerror();}catch(x){};", s.async = o.async = !1;
                            else {
                                try { s.htmlFor = s.id, s.event = "onclick" } catch (c) {}
                                s.async = !0
                            }
                            "undefined" != typeof s.async && (s.async = !0), r = setTimeout(function() { a(n.closeFrame(1006, "JSONP script loaded abnormally (timeout)")) }, 35e3);
                        var h = e.getElementsByTagName("head")[0];
                        return h.insertBefore(s, h.firstChild), o && h.insertBefore(o, h.firstChild), a
                    },
                    I = T["jsonp-polling"] = function(e, t) {
                        n.polluteGlobalNamespace();
                        var i = this;
                        i.ri = e, i.trans_url = t, i.send_constructor(S), i._schedule_recv()
                    };
                I.prototype = new D, I.prototype._schedule_recv = function() {
                    var e = this,
                        t = function(t) { e._recv_stop = null, t && (e._is_closing || e.ri._didMessage(t)), e._is_closing || e._schedule_recv() };
                    e._recv_stop = M(e.trans_url + "/jsonp", N, t)
                }, I.enabled = function() { return !0 }, I.need_body = !0, I.prototype.doCleanup = function() {
                    var e = this;
                    e._is_closing = !0, e._recv_stop && e._recv_stop(), e.ri = e._recv_stop = null, e.send_destructor()
                };
                var M = function(e, i, r) {
                        var o = "a" + n.random_string(6),
                            s = e + "?c=" + escape(a + "." + o),
                            l = 0,
                            u = function(e) {
                                switch (l) {
                                    case 0:
                                        delete t[a][o], r(e);
                                        break;
                                    case 1:
                                        r(e), l = 2;
                                        break;
                                    case 2:
                                        delete t[a][o]
                                }
                            },
                            c = i(s, u);
                        t[a][o] = c;
                        var h = function() { t[a][o] && (l = 1, t[a][o](n.closeFrame(1e3, "JSONP user aborted read"))) };
                        return h
                    },
                    A = function() {};
                A.prototype = new D, A.prototype.run = function(e, t, n, i, r) {
                    var o = this;
                    o.ri = e, o.trans_url = t, o.send_constructor(P(r)), o.poll = new Z(e, i, t + n, r)
                }, A.prototype.doCleanup = function() {
                    var e = this;
                    e.poll && (e.poll.abort(), e.poll = null)
                };
                var O = T["xhr-streaming"] = function(e, t) { this.run(e, t, "/xhr_streaming", rt, n.XHRCorsObject) };
                O.prototype = new A, O.enabled = function() { return t.XMLHttpRequest && "withCredentials" in new XMLHttpRequest && !/opera/i.test(navigator.userAgent) }, O.roundTrips = 2, O.need_body = !0;
                var j = T["xdr-streaming"] = function(e, t) { this.run(e, t, "/xhr_streaming", rt, n.XDRObject) };
                j.prototype = new A, j.enabled = function() { return !!t.XDomainRequest }, j.roundTrips = 2;
                var R = T["xhr-polling"] = function(e, t) { this.run(e, t, "/xhr", rt, n.XHRCorsObject) };
                R.prototype = new A, R.enabled = O.enabled, R.roundTrips = 2;
                var H = T["xdr-polling"] = function(e, t) { this.run(e, t, "/xhr", rt, n.XDRObject) };
                H.prototype = new A, H.enabled = j.enabled, H.roundTrips = 2;
                var $ = function() {};
                $.prototype.i_constructor = function(e, t, i) {
                    var r = this;
                    r.ri = e, r.origin = n.getOrigin(i), r.base_url = i, r.trans_url = t;
                    var o = i + "/iframe.html";
                    r.ri._options.devel && (o += "?t=" + +new Date), r.window_id = n.random_string(8), o += "#" + r.window_id, r.iframeObj = n.createIframe(o, function(e) { r.ri._didClose(1006, "Unable to load an iframe (" + e + ")") }), r.onmessage_cb = n.bind(r.onmessage, r), n.attachMessage(r.onmessage_cb)
                }, $.prototype.doCleanup = function() {
                    var e = this;
                    if (e.iframeObj) {
                        n.detachMessage(e.onmessage_cb);
                        try { e.iframeObj.iframe.contentWindow && e.postMessage("c") } catch (t) {}
                        e.iframeObj.cleanup(), e.iframeObj = null, e.onmessage_cb = e.iframeObj = null
                    }
                }, $.prototype.onmessage = function(e) {
                    var t = this;
                    if (e.origin === t.origin) {
                        var n = e.data.slice(0, 8),
                            i = e.data.slice(8, 9),
                            r = e.data.slice(9);
                        if (n === t.window_id) switch (i) {
                            case "s":
                                t.iframeObj.loaded(), t.postMessage("s", p.stringify([T.version, t.protocol, t.trans_url, t.base_url]));
                                break;
                            case "t":
                                t.ri._didMessage(r)
                        }
                    }
                }, $.prototype.postMessage = function(e, t) {
                    var n = this;
                    n.iframeObj.post(n.window_id + e + (t || ""), n.origin)
                }, $.prototype.doSend = function(e) { this.postMessage("m", e) }, $.enabled = function() { var e = navigator && navigator.userAgent && -1 !== navigator.userAgent.indexOf("Konqueror"); return ("function" == typeof t.postMessage || "object" == typeof t.postMessage) && !e };
                var L, F = function(e, i) { parent !== t ? parent.postMessage(L + e + (i || ""), "*") : n.log("Can't postMessage, no parent window.", e, i) },
                    z = function() {};
                z.prototype._didClose = function(e, t) { F("t", n.closeFrame(e, t)) }, z.prototype._didMessage = function(e) { F("t", e) }, z.prototype._doSend = function(e) { this._transport.doSend(e) }, z.prototype._doCleanup = function() { this._transport.doCleanup() }, n.parent_origin = void 0, T.bootstrap_iframe = function() {
                    var i;
                    L = e.location.hash.slice(1);
                    var r = function(e) {
                        if (e.source === parent && ("undefined" == typeof n.parent_origin && (n.parent_origin = e.origin), e.origin === n.parent_origin)) {
                            var r = e.data.slice(0, 8),
                                o = e.data.slice(8, 9),
                                s = e.data.slice(9);
                            if (r === L) switch (o) {
                                case "s":
                                    var a = p.parse(s),
                                        l = a[0],
                                        u = a[1],
                                        c = a[2],
                                        h = a[3];
                                    if (l !== T.version && n.log('Incompatibile SockJS! Main site uses: "' + l + '", the iframe: "' + T.version + '".'), !n.flatUrl(c) || !n.flatUrl(h)) return n.log("Only basic urls are supported in SockJS"), void 0;
                                    if (!n.isSameOriginUrl(c) || !n.isSameOriginUrl(h)) return n.log("Can't connect to different domain from within an iframe. (" + p.stringify([t.location.href, c, h]) + ")"), void 0;
                                    i = new z, i._transport = new z[u](i, c, h);
                                    break;
                                case "m":
                                    i._doSend(s);
                                    break;
                                case "c":
                                    i && i._doCleanup(), i = null
                            }
                        }
                    };
                    n.attachMessage(r), F("s")
                };
                var B = function(e, t) {
                    var i = this;
                    n.delay(function() { i.doXhr(e, t) })
                };
                B.prototype = new o(["finish"]), B.prototype.doXhr = function(e, t) {
                    var i = this,
                        r = (new Date).getTime(),
                        o = new t("GET", e + "/info?cb=" + n.random_string(10)),
                        s = n.delay(8e3, function() { o.ontimeout() });
                    o.onfinish = function(e, t) {
                        if (clearTimeout(s), s = null, 200 === e) {
                            var n = (new Date).getTime() - r,
                                o = p.parse(t);
                            "object" != typeof o && (o = {}), i.emit("finish", o, n)
                        } else i.emit("finish")
                    }, o.ontimeout = function() { o.close(), i.emit("finish") }
                };
                var W = function(t) {
                    var i = this,
                        r = function() {
                            var e = new $;
                            e.protocol = "w-iframe-info-receiver";
                            var n = function(t) {
                                    if ("string" == typeof t && "m" === t.substr(0, 1)) {
                                        var n = p.parse(t.substr(1)),
                                            r = n[0],
                                            o = n[1];
                                        i.emit("finish", r, o)
                                    } else i.emit("finish");
                                    e.doCleanup(), e = null
                                },
                                r = { _options: {}, _didClose: n, _didMessage: n };
                            e.i_constructor(r, t, t)
                        };
                    e.body ? r() : n.attachEvent("load", r)
                };
                W.prototype = new o(["finish"]);
                var q = function() {
                    var e = this;
                    n.delay(function() { e.emit("finish", {}, 2e3) })
                };
                q.prototype = new o(["finish"]);
                var U = function(e) {
                        if (n.isSameOriginUrl(e)) return new B(e, n.XHRLocalObject);
                        switch (n.isXHRCorsCapable()) {
                            case 1:
                                return new B(e, n.XHRLocalObject);
                            case 2:
                                return n.isSameOriginScheme(e) ? new B(e, n.XDRObject) : new q;
                            case 3:
                                return new W(e);
                            default:
                                return new q
                        }
                    },
                    V = z["w-iframe-info-receiver"] = function(e, t, i) {
                        var r = new B(i, n.XHRLocalObject);
                        r.onfinish = function(t, n) { e._didMessage("m" + p.stringify([t, n])), e._didClose() }
                    };
                V.prototype.doCleanup = function() {};
                var Y = T["iframe-eventsource"] = function() {
                    var e = this;
                    e.protocol = "w-iframe-eventsource", e.i_constructor.apply(e, arguments)
                };
                Y.prototype = new $, Y.enabled = function() { return "EventSource" in t && $.enabled() }, Y.need_body = !0, Y.roundTrips = 3;
                var Q = z["w-iframe-eventsource"] = function(e, t) { this.run(e, t, "/eventsource", et, n.XHRLocalObject) };
                Q.prototype = new A;
                var X = T["iframe-xhr-polling"] = function() {
                    var e = this;
                    e.protocol = "w-iframe-xhr-polling", e.i_constructor.apply(e, arguments)
                };
                X.prototype = new $, X.enabled = function() { return t.XMLHttpRequest && $.enabled() }, X.need_body = !0, X.roundTrips = 3;
                var J = z["w-iframe-xhr-polling"] = function(e, t) { this.run(e, t, "/xhr", rt, n.XHRLocalObject) };
                J.prototype = new A;
                var K = T["iframe-htmlfile"] = function() {
                    var e = this;
                    e.protocol = "w-iframe-htmlfile", e.i_constructor.apply(e, arguments)
                };
                K.prototype = new $, K.enabled = function() { return $.enabled() }, K.need_body = !0, K.roundTrips = 3;
                var G = z["w-iframe-htmlfile"] = function(e, t) { this.run(e, t, "/htmlfile", it, n.XHRLocalObject) };
                G.prototype = new A;
                var Z = function(e, t, n, i) {
                    var r = this;
                    r.ri = e, r.Receiver = t, r.recv_url = n, r.AjaxObject = i, r._scheduleRecv()
                };
                Z.prototype._scheduleRecv = function() {
                    var e = this,
                        t = e.poll = new e.Receiver(e.recv_url, e.AjaxObject),
                        n = 0;
                    t.onmessage = function(t) { n += 1, e.ri._didMessage(t.data) }, t.onclose = function(n) { e.poll = t = t.onmessage = t.onclose = null, e.poll_is_closing || ("permanent" === n.reason ? e.ri._didClose(1006, "Polling error (" + n.reason + ")") : e._scheduleRecv()) }
                }, Z.prototype.abort = function() {
                    var e = this;
                    e.poll_is_closing = !0, e.poll && e.poll.abort()
                };
                var et = function(e) {
                    var t = this,
                        i = new EventSource(e);
                    i.onmessage = function(e) { t.dispatchEvent(new r("message", { data: unescape(e.data) })) }, t.es_close = i.onerror = function(e, o) {
                        var s = o ? "user" : 2 !== i.readyState ? "network" : "permanent";
                        t.es_close = i.onmessage = i.onerror = null, i.close(), i = null, n.delay(200, function() { t.dispatchEvent(new r("close", { reason: s })) })
                    }
                };
                et.prototype = new i, et.prototype.abort = function() {
                    var e = this;
                    e.es_close && e.es_close({}, !0)
                };
                var tt, nt = function() {
                        if (void 0 === tt)
                            if ("ActiveXObject" in t) try { tt = !!new ActiveXObject("htmlfile") } catch (e) {} else tt = !1;
                        return tt
                    },
                    it = function(e) {
                        var i = this;
                        n.polluteGlobalNamespace(), i.id = "a" + n.random_string(6, 26), e += (-1 === e.indexOf("?") ? "?" : "&") + "c=" + escape(a + "." + i.id);
                        var o, s = nt() ? n.createHtmlfile : n.createIframe;
                        t[a][i.id] = { start: function() { o.loaded() }, message: function(e) { i.dispatchEvent(new r("message", { data: e })) }, stop: function() { i.iframe_close({}, "network") } }, i.iframe_close = function(e, n) { o.cleanup(), i.iframe_close = o = null, delete t[a][i.id], i.dispatchEvent(new r("close", { reason: n })) }, o = s(e, function() { i.iframe_close({}, "permanent") })
                    };
                it.prototype = new i, it.prototype.abort = function() {
                    var e = this;
                    e.iframe_close && e.iframe_close({}, "user")
                };
                var rt = function(e, t) {
                    var n = this,
                        i = 0;
                    n.xo = new t("POST", e, null), n.xo.onchunk = function(e, t) {
                        if (200 === e)
                            for (;;) {
                                var o = t.slice(i),
                                    s = o.indexOf("\n");
                                if (-1 === s) break;
                                i += s + 1;
                                var a = o.slice(0, s);
                                n.dispatchEvent(new r("message", { data: a }))
                            }
                    }, n.xo.onfinish = function(e, t) {
                        n.xo.onchunk(e, t), n.xo = null;
                        var i = 200 === e ? "network" : "permanent";
                        n.dispatchEvent(new r("close", { reason: i }))
                    }
                };
                return rt.prototype = new i, rt.prototype.abort = function() {
                    var e = this;
                    e.xo && (e.xo.close(), e.dispatchEvent(new r("close", { reason: "user" })), e.xo = null)
                }, T.getUtils = function() { return n }, T.getIframeTransport = function() { return $ }, T
            }(), "_sockjs_onload" in window && setTimeout(_sockjs_onload, 1), "function" == typeof define && define.amd && define("sockjs", [], function() { return i })
        }.call(this),
        function() {
            t.ClientStream = function(e, t) {
                var n = this;
                n.options = g.extend({ retry: !0 }, t), n._initCommon(), n.HEARTBEAT_TIMEOUT = 6e4, n.rawUrl = e, n.socket = null, n.heartbeatTimer = null, "undefined" != typeof window && window.addEventListener && window.addEventListener("online", g.bind(n._online, n), !1), n._launchConnection()
            }, g.extend(t.ClientStream.prototype, {
                send: function(e) {
                    var t = this;
                    t.currentStatus.connected && t.socket.send(e)
                },
                _changeUrl: function(e) {
                    var t = this;
                    t.rawUrl = e
                },
                _connected: function() {
                    var e = this;
                    e.connectionTimer && (clearTimeout(e.connectionTimer), e.connectionTimer = null), e.currentStatus.connected || (e.currentStatus.status = "connected", e.currentStatus.connected = !0, e.currentStatus.retryCount = 0, e.statusChanged(), g.each(e.eventCallbacks.reset, function(e) { e() }))
                },
                _cleanup: function() {
                    var e = this;
                    e._clearConnectionAndHeartbeatTimers(), e.socket && (e.socket.onmessage = e.socket.onclose = e.socket.onerror = e.socket.onheartbeat = function() {}, e.socket.close(), e.socket = null)
                },
                _clearConnectionAndHeartbeatTimers: function() {
                    var e = this;
                    e.connectionTimer && (clearTimeout(e.connectionTimer), e.connectionTimer = null), e.heartbeatTimer && (clearTimeout(e.heartbeatTimer), e.heartbeatTimer = null)
                },
                _heartbeat_timeout: function() {
                    var e = this;
                    h._debug("Connection timeout. No heartbeat received."), e._lostConnection()
                },
                _heartbeat_received: function() {
                    var e = this;
                    e._forcedToDisconnect || (e.heartbeatTimer && clearTimeout(e.heartbeatTimer), e.heartbeatTimer = setTimeout(g.bind(e._heartbeat_timeout, e), e.HEARTBEAT_TIMEOUT))
                },
                _sockjsProtocolsWhitelist: function() {
                    var e = ["xdr-polling", "xhr-polling", "iframe-xhr-polling", "jsonp-polling"],
                        t = navigator && /iPhone|iPad|iPod/.test(navigator.userAgent) && /OS 4_|OS 5_/.test(navigator.userAgent);
                    return t || (e = ["websocket"].concat(e)), e
                },
                _launchConnection: function() {
                    var e = this;
                    e._cleanup(), e.socket = new i(r(e.rawUrl), void 0, { debug: !1, protocols_whitelist: e._sockjsProtocolsWhitelist() }), e.socket.onopen = function() { e._connected() }, e.socket.onmessage = function(t) { e._heartbeat_received(), e.currentStatus.connected && g.each(e.eventCallbacks.message, function(e) { e(t.data) }) }, e.socket.onclose = function() { e._lostConnection() }, e.socket.onerror = function() { h._debug("stream error", g.toArray(arguments), (new Date).toDateString()) }, e.socket.onheartbeat = function() { e._heartbeat_received() }, e.connectionTimer && clearTimeout(e.connectionTimer), e.connectionTimer = setTimeout(g.bind(e._lostConnection, e), e.CONNECT_TIMEOUT)
                }
            })
        }.call(this),
        function() {
            var e = function(e, t) { return e.length >= t.length && e.substring(0, t.length) === t },
                i = function(e, t) { return e.length >= t.length && e.substring(e.length - t.length) === t },
                s = function(t, n, r) {
                    n || (n = "http");
                    var o, s = t.match(/^ddp(i?)\+sockjs:\/\//),
                        a = t.match(/^http(s?):\/\//);
                    if (s) {
                        var l = t.substr(s[0].length);
                        o = "i" === s[1] ? n : n + "s";
                        var u = l.indexOf("/"),
                            c = -1 === u ? l : l.substr(0, u),
                            f = -1 === u ? "" : l.substr(u);
                        return c = c.replace(/\*/g, function() { return Math.floor(10 * d.fraction()) }), o + "://" + c + f
                    }
                    if (a) {
                        o = a[1] ? n + "s" : n;
                        var p = t.substr(a[0].length);
                        t = o + "://" + p
                    }
                    return -1 !== t.indexOf("://") || e(t, "/") || (t = n + "://" + t), t = h._relativeToSiteRootUrl(t), i(t, "/") ? t + r : t + "/" + r
                };
            r = function(e) { return s(e, "http", "sockjs") }, o = function(e) { var t = s(e, "ws", "websocket"); return t }, t.toSockjsUrl = r, g.extend(t.ClientStream.prototype, {
                on: function(e, t) {
                    var n = this;
                    if ("message" !== e && "reset" !== e) throw new Error("unknown event type: " + e);
                    n.eventCallbacks[e] || (n.eventCallbacks[e] = []), n.eventCallbacks[e].push(t)
                },
                _initCommon: function() {
                    var e = this;
                    e.CONNECT_TIMEOUT = 1e4, e.eventCallbacks = {}, e._forcedToDisconnect = !1, e.currentStatus = { status: "connecting", connected: !1, retryCount: 0 }, e.statusListeners = "undefined" != typeof m && new m.Dependency, e.statusChanged = function() { e.statusListeners && e.statusListeners.changed() }, e._retry = new n, e.connectionTimer = null
                },
                reconnect: function(e) { var t = this; return e = e || {}, e.url && t._changeUrl(e.url), t.currentStatus.connected ? ((e._force || e.url) && t._lostConnection(), void 0) : ("connecting" === t.currentStatus.status && t._lostConnection(), t._retry.clear(), t.currentStatus.retryCount -= 1, t._retryNow(), void 0) },
                disconnect: function(e) {
                    var t = this;
                    e = e || {}, t._forcedToDisconnect || (e._permanent && (t._forcedToDisconnect = !0), t._cleanup(), t._retry.clear(), t.currentStatus = { status: e._permanent ? "failed" : "offline", connected: !1, retryCount: 0 }, e._permanent && e._error && (t.currentStatus.reason = e._error), t.statusChanged())
                },
                _lostConnection: function() {
                    var e = this;
                    e._cleanup(), e._retryLater()
                },
                _online: function() { "offline" != this.currentStatus.status && this.reconnect() },
                _retryLater: function() {
                    var e = this,
                        t = 0;
                    e.options.retry && (t = e._retry.retryLater(e.currentStatus.retryCount, g.bind(e._retryNow, e))), e.currentStatus.status = "waiting", e.currentStatus.connected = !1, e.currentStatus.retryTime = (new Date).getTime() + t, e.statusChanged()
                },
                _retryNow: function() {
                    var e = this;
                    e._forcedToDisconnect || (e.currentStatus.retryCount += 1, e.currentStatus.status = "connecting", e.currentStatus.connected = !1, delete e.currentStatus.retryTime, e.statusChanged(), e._launchConnection())
                },
                status: function() { var e = this; return e.statusListeners && e.statusListeners.depend(), e.currentStatus }
            })
        }.call(this),
        function() {
            e = {}, s = ["pre1"], t.SUPPORTED_DDP_VERSIONS = s, a = function(e) { this.isSimulation = e.isSimulation, this._unblock = e.unblock || function() {}, this._calledUnblock = !1, this.userId = e.userId, this._setUserId = e.setUserId || function() {}, this.connection = e.connection }, g.extend(a.prototype, {
                unblock: function() {
                    var e = this;
                    e._calledUnblock = !0, e._unblock()
                },
                setUserId: function(e) {
                    var t = this;
                    if (t._calledUnblock) throw new Error("Can't call setUserId in a method after calling unblock");
                    t.userId = e, t._setUserId(e)
                }
            }), l = function(e) { try { var t = p.parse(e) } catch (n) { return h._debug("Discarding message with invalid JSON", e), null } return null === t || "object" != typeof t ? (h._debug("Discarding non-object DDP message", e), null) : (g.has(t, "cleared") && (g.has(t, "fields") || (t.fields = {}), g.each(t.cleared, function(e) { t.fields[e] = void 0 }), delete t.cleared), g.each(["fields", "params", "result"], function(e) { g.has(t, e) && (t[e] = f._adjustTypesFromJSONValue(t[e])) }), t) }, u = function(e) {
                var t = f.clone(e);
                if (g.has(e, "fields")) {
                    var n = [];
                    g.each(e.fields, function(e, i) { void 0 === e && (n.push(i), delete t.fields[i]) }), g.isEmpty(n) || (t.cleared = n), g.isEmpty(t.fields) && delete t.fields
                }
                if (g.each(["fields", "params", "result"], function(e) { g.has(t, e) && (t[e] = f._adjustTypesToJSONValue(t[e])) }), e.id && "string" != typeof e.id) throw new Error("Message id is not a string");
                return p.stringify(t)
            }, e._CurrentInvocation = new h.EnvironmentVariable, e._Retry = n
        }.call(this),
        function() {
            if (h.isServer) var n = Npm.require("path"),
                i = (Npm.require("fibers"), Npm.require(n.join("fibers", "future")));
            var r = function(e, n) {
                    var i = this;
                    n = g.extend({ onConnected: function() {}, onDDPVersionNegotiationFailure: function(e) { h._debug(e) }, reloadWithOutstanding: !1, supportedDDPVersions: s, retry: !0 }, n), i.onReconnect = null, i._stream = "object" == typeof e ? e : new t.ClientStream(e, { retry: n.retry }), i._lastSessionId = null, i._versionSuggestion = null, i._version = null, i._stores = {}, i._methodHandlers = {}, i._nextMethodId = 1, i._supportedDDPVersions = n.supportedDDPVersions, i._methodInvokers = {}, i._outstandingMethodBlocks = [], i._documentsWrittenByStub = {}, i._serverDocuments = {}, i._afterUpdateCallbacks = [], i._messagesBufferedUntilQuiescence = [], i._methodsBlockingQuiescence = {}, i._subsBeingRevived = {}, i._resetStores = !1, i._updatesForUnknownStores = {}, i._retryMigrate = null, i._subscriptions = {}, i._userId = null, i._userIdDeps = "undefined" != typeof m && new m.Dependency, h.isClient && Package.reload && !n.reloadWithOutstanding && Package.reload.Reload._onMigrate(function(e) { if (i._readyToMigrate()) return [!0]; if (i._retryMigrate) throw new Error("Two migrations in progress?"); return i._retryMigrate = e, !1 });
                    var r = function(e) {
                            try { var t = l(e) } catch (r) { return h._debug("Exception while parsing DDP", r), void 0 }
                            if (null === t || !t.msg) return t && t.server_id || h._debug("discarding invalid livedata message", t), void 0;
                            if ("connected" === t.msg) i._version = i._versionSuggestion, n.onConnected(), i._livedata_connected(t);
                            else if ("failed" == t.msg)
                                if (g.contains(i._supportedDDPVersions, t.version)) i._versionSuggestion = t.version, i._stream.reconnect({ _force: !0 });
                                else {
                                    var o = "DDP version negotiation failed; server requested version " + t.version;
                                    i._stream.disconnect({ _permanent: !0, _error: o }), n.onDDPVersionNegotiationFailure(o)
                                }
                            else g.include(["added", "changed", "removed", "ready", "updated"], t.msg) ? i._livedata_data(t) : "nosub" === t.msg ? i._livedata_nosub(t) : "result" === t.msg ? i._livedata_result(t) : "error" === t.msg ? i._livedata_error(t) : h._debug("discarding unknown livedata message type", t)
                        },
                        o = function() {
                            var e = { msg: "connect" };
                            i._lastSessionId && (e.session = i._lastSessionId), e.version = i._versionSuggestion || i._supportedDDPVersions[0], i._versionSuggestion = e.version, e.support = i._supportedDDPVersions, i._send(e), !g.isEmpty(i._outstandingMethodBlocks) && g.isEmpty(i._outstandingMethodBlocks[0].methods) && i._outstandingMethodBlocks.shift(), g.each(i._methodInvokers, function(e) { e.sentMessage = !1 }), i.onReconnect ? i._callOnReconnectAndSendAppropriateOutstandingMethods() : i._sendOutstandingMethods(), g.each(i._subscriptions, function(e, t) { i._send({ msg: "sub", id: t, name: e.name, params: e.params }) })
                        };
                    h.isServer ? (i._stream.on("message", h.bindEnvironment(r, h._debug)), i._stream.on("reset", h.bindEnvironment(o, h._debug))) : (i._stream.on("message", r), i._stream.on("reset", o))
                },
                o = function(e) {
                    var t = this;
                    t.methodId = e.methodId, t.sentMessage = !1, t._callback = e.callback, t._connection = e.connection, t._message = e.message, t._onResultReceived = e.onResultReceived || function() {}, t._wait = e.wait, t._methodResult = null, t._dataVisible = !1, t._connection._methodInvokers[t.methodId] = t
                };
            g.extend(o.prototype, {
                sendMessage: function() {
                    var e = this;
                    if (e.gotResult()) throw new Error("sendingMethod is called on method with result");
                    e._dataVisible = !1, e.sentMessage = !0, e._wait && (e._connection._methodsBlockingQuiescence[e.methodId] = !0), e._connection._send(e._message)
                },
                _maybeInvokeCallback: function() {
                    var e = this;
                    e._methodResult && e._dataVisible && (e._callback(e._methodResult[0], e._methodResult[1]), delete e._connection._methodInvokers[e.methodId], e._connection._outstandingMethodFinished())
                },
                receiveResult: function(e, t) {
                    var n = this;
                    if (n.gotResult()) throw new Error("Methods should only receive results once");
                    n._methodResult = [e, t], n._onResultReceived(e, t), n._maybeInvokeCallback()
                },
                dataVisible: function() {
                    var e = this;
                    e._dataVisible = !0, e._maybeInvokeCallback()
                },
                gotResult: function() { var e = this; return !!e._methodResult }
            }), g.extend(r.prototype, {
                registerStore: function(e, t) {
                    var n = this;
                    if (e in n._stores) return !1;
                    var i = {};
                    g.each(["update", "beginUpdate", "endUpdate", "saveOriginals", "retrieveOriginals"], function(e) { i[e] = function() { return t[e] ? t[e].apply(t, arguments) : void 0 } }), n._stores[e] = i;
                    var r = n._updatesForUnknownStores[e];
                    return r && (i.beginUpdate(r.length, !1), g.each(r, function(e) { i.update(e) }), i.endUpdate(), delete n._updatesForUnknownStores[e]), !0
                },
                subscribe: function(e) {
                    var t = this,
                        n = Array.prototype.slice.call(arguments, 1),
                        i = {};
                    if (n.length) { var r = n[n.length - 1]; "function" == typeof r ? i.onReady = n.pop() : !r || "function" != typeof r.onReady && "function" != typeof r.onError || (i = n.pop()) }
                    var o, s = g.find(t._subscriptions, function(t) { return t.inactive && t.name === e && f.equals(t.params, n) });
                    s ? (o = s.id, s.inactive = !1, i.onReady && (s.ready || (s.readyCallback = i.onReady)), i.onError && (s.errorCallback = i.onError)) : (o = d.id(), t._subscriptions[o] = { id: o, name: e, params: n, inactive: !1, ready: !1, readyDeps: "undefined" != typeof m && new m.Dependency, readyCallback: i.onReady, errorCallback: i.onError }, t._send({ msg: "sub", id: o, name: e, params: n }));
                    var a = { stop: function() { g.has(t._subscriptions, o) && (t._send({ msg: "unsub", id: o }), delete t._subscriptions[o]) }, ready: function() { if (!g.has(t._subscriptions, o)) return !1; var e = t._subscriptions[o]; return e.readyDeps && e.readyDeps.depend(), e.ready } };
                    return m.active && m.onInvalidate(function() {
                        g.has(t._subscriptions, o) && (t._subscriptions[o].inactive = !0), m.afterFlush(function() {
                            g.has(t._subscriptions, o) && t._subscriptions[o].inactive && a.stop()
                        })
                    }), a
                },
                _subscribeAndWait: function(e, t, n) {
                    var r = this,
                        o = new i,
                        s = !1;
                    t = t || [], t.push({ onReady: function() { s = !0, o["return"]() }, onError: function(e) { s ? n && n.onLateError && n.onLateError(e) : o["throw"](e) } }), r.subscribe.apply(r, [e].concat(t)), o.wait()
                },
                methods: function(e) {
                    var t = this;
                    g.each(e, function(e, n) {
                        if (t._methodHandlers[n]) throw new Error("A method named '" + n + "' is already defined");
                        t._methodHandlers[n] = e
                    })
                },
                call: function(e) { var t = Array.prototype.slice.call(arguments, 1); if (t.length && "function" == typeof t[t.length - 1]) var n = t.pop(); return this.apply(e, t, n) },
                apply: function(t, n, r, s) {
                    var l = this;
                    s || "function" != typeof r || (s = r, r = {}), r = r || {}, s && (s = h.bindEnvironment(s, "delivering result of invoking '" + t + "'"));
                    var u = function() { var e; return function() { return void 0 === e && (e = "" + l._nextMethodId++), e } }(),
                        c = e._CurrentInvocation.get(),
                        d = c && c.isSimulation,
                        p = l._methodHandlers[t];
                    if (p) {
                        var m = function(e) { l.setUserId(e) },
                            v = new a({ isSimulation: !0, userId: l.userId(), setUserId: m });
                        d || l._saveOriginals();
                        try { var _ = e._CurrentInvocation.withValue(v, function() { return h.isServer ? h._noYieldsAllowed(function() { return p.apply(v, f.clone(n)) }) : p.apply(v, f.clone(n)) }) } catch (y) { var b = y }
                        d || l._retrieveAndStoreOriginals(u())
                    }
                    if (d) { if (s) return s(b, _), void 0; if (b) throw b; return _ }
                    if (b && !b.expected && h._debug("Exception while simulating the effect of invoking '" + t + "'", b, b.stack), !s)
                        if (h.isClient) s = function() {};
                        else {
                            var w = new i;
                            s = w.resolver()
                        }
                    var k = new o({ methodId: u(), callback: s, connection: l, onResultReceived: r.onResultReceived, wait: !!r.wait, message: { msg: "method", method: t, params: n, id: u() } });
                    return r.wait ? l._outstandingMethodBlocks.push({ wait: !0, methods: [k] }) : ((g.isEmpty(l._outstandingMethodBlocks) || g.last(l._outstandingMethodBlocks).wait) && l._outstandingMethodBlocks.push({ wait: !1, methods: [] }), g.last(l._outstandingMethodBlocks).methods.push(k)), 1 === l._outstandingMethodBlocks.length && k.sendMessage(), w ? w.wait() : void 0
                },
                _saveOriginals: function() {
                    var e = this;
                    g.each(e._stores, function(e) { e.saveOriginals() })
                },
                _retrieveAndStoreOriginals: function(e) {
                    var t = this;
                    if (t._documentsWrittenByStub[e]) throw new Error("Duplicate methodId in _retrieveAndStoreOriginals");
                    var n = [];
                    g.each(t._stores, function(i, r) {
                        var o = i.retrieveOriginals();
                        g.each(o, function(i, o) {
                            if ("string" != typeof o) throw new Error("id is not a string");
                            n.push({ collection: r, id: o });
                            var s = h._ensure(t._serverDocuments, r, o);
                            s.writtenByStubs ? s.writtenByStubs[e] = !0 : (s.document = i, s.flushCallbacks = [], s.writtenByStubs = {}, s.writtenByStubs[e] = !0)
                        })
                    }), g.isEmpty(n) || (t._documentsWrittenByStub[e] = n)
                },
                _unsubscribeAll: function() {
                    var e = this;
                    g.each(g.clone(e._subscriptions), function(t, n) { "meteor_autoupdate_clientVersions" !== t.name && (e._send({ msg: "unsub", id: n }), delete e._subscriptions[n]) })
                },
                _send: function(e) {
                    var t = this;
                    t._stream.send(u(e))
                },
                status: function() { var e = this; return e._stream.status.apply(e._stream, arguments) },
                reconnect: function() { var e = this; return e._stream.reconnect.apply(e._stream, arguments) },
                disconnect: function() { var e = this; return e._stream.disconnect.apply(e._stream, arguments) },
                close: function() { var e = this; return e._stream.disconnect({ _permanent: !0 }) },
                userId: function() { var e = this; return e._userIdDeps && e._userIdDeps.depend(), e._userId },
                setUserId: function(e) {
                    var t = this;
                    t._userId !== e && (t._userId = e, t._userIdDeps && t._userIdDeps.changed())
                },
                _waitingForQuiescence: function() { var e = this; return !g.isEmpty(e._subsBeingRevived) || !g.isEmpty(e._methodsBlockingQuiescence) },
                _anyMethodsAreOutstanding: function() { var e = this; return g.any(g.pluck(e._methodInvokers, "sentMessage")) },
                _livedata_connected: function(e) {
                    var t = this;
                    if (t._lastSessionId && (t._resetStores = !0), "string" == typeof e.session) {
                        var n = t._lastSessionId === e.session;
                        t._lastSessionId = e.session
                    }
                    n || (t._updatesForUnknownStores = {}, t._resetStores && (t._documentsWrittenByStub = {}, t._serverDocuments = {}), t._afterUpdateCallbacks = [], t._subsBeingRevived = {}, g.each(t._subscriptions, function(e, n) { e.ready && (t._subsBeingRevived[n] = !0) }), t._methodsBlockingQuiescence = {}, t._resetStores && g.each(t._methodInvokers, function(e) { e.gotResult() ? t._afterUpdateCallbacks.push(g.bind(e.dataVisible, e)) : e.sentMessage && (t._methodsBlockingQuiescence[e.methodId] = !0) }), t._messagesBufferedUntilQuiescence = [], t._waitingForQuiescence() || (t._resetStores && (g.each(t._stores, function(e) { e.beginUpdate(0, !0), e.endUpdate() }), t._resetStores = !1), t._runAfterUpdateCallbacks()))
                },
                _processOneDataMessage: function(e, t) {
                    var n = this;
                    n["_process_" + e.msg](e, t)
                },
                _livedata_data: function(e) {
                    var t = this,
                        n = {};
                    if (t._waitingForQuiescence()) {
                        if (t._messagesBufferedUntilQuiescence.push(e), "nosub" === e.msg && delete t._subsBeingRevived[e.id], g.each(e.subs || [], function(e) { delete t._subsBeingRevived[e] }), g.each(e.methods || [], function(e) { delete t._methodsBlockingQuiescence[e] }), t._waitingForQuiescence()) return;
                        g.each(t._messagesBufferedUntilQuiescence, function(e) { t._processOneDataMessage(e, n) }), t._messagesBufferedUntilQuiescence = []
                    } else t._processOneDataMessage(e, n);
                    (t._resetStores || !g.isEmpty(n)) && (g.each(t._stores, function(e, i) { e.beginUpdate(g.has(n, i) ? n[i].length : 0, t._resetStores) }), t._resetStores = !1, g.each(n, function(e, n) {
                        var i = t._stores[n];
                        i ? g.each(e, function(e) { i.update(e) }) : (g.has(t._updatesForUnknownStores, n) || (t._updatesForUnknownStores[n] = []), Array.prototype.push.apply(t._updatesForUnknownStores[n], e))
                    }), g.each(t._stores, function(e) { e.endUpdate() })), t._runAfterUpdateCallbacks()
                },
                _runAfterUpdateCallbacks: function() {
                    var e = this,
                        t = e._afterUpdateCallbacks;
                    e._afterUpdateCallbacks = [], g.each(t, function(e) { e() })
                },
                _pushUpdate: function(e, t, n) { g.has(e, t) || (e[t] = []), e[t].push(n) },
                _process_added: function(e, t) {
                    var n = this,
                        i = h._get(n._serverDocuments, e.collection, e.id);
                    if (i) {
                        if (void 0 !== i.document) throw new Error("It doesn't make sense to be adding something we know exists: " + e.id);
                        i.document = e.fields || {}, i.document._id = v._idParse(e.id)
                    } else n._pushUpdate(t, e.collection, e)
                },
                _process_changed: function(e, t) {
                    var n = this,
                        i = h._get(n._serverDocuments, e.collection, e.id);
                    if (i) {
                        if (void 0 === i.document) throw new Error("It doesn't make sense to be changing something we don't think exists: " + e.id);
                        v._applyChanges(i.document, e.fields)
                    } else n._pushUpdate(t, e.collection, e)
                },
                _process_removed: function(e, t) {
                    var n = this,
                        i = h._get(n._serverDocuments, e.collection, e.id);
                    if (i) {
                        if (void 0 === i.document) throw new Error("It doesn't make sense to be deleting something we don't know exists: " + e.id);
                        i.document = void 0
                    } else n._pushUpdate(t, e.collection, { msg: "removed", collection: e.collection, id: e.id })
                },
                _process_updated: function(e, t) {
                    var n = this;
                    g.each(e.methods, function(e) {
                        g.each(n._documentsWrittenByStub[e], function(i) {
                            var r = h._get(n._serverDocuments, i.collection, i.id);
                            if (!r) throw new Error("Lost serverDoc for " + p.stringify(i));
                            if (!r.writtenByStubs[e]) throw new Error("Doc " + p.stringify(i) + " not written by  method " + e);
                            delete r.writtenByStubs[e], g.isEmpty(r.writtenByStubs) && (n._pushUpdate(t, i.collection, { msg: "replace", id: i.id, replace: r.document }), g.each(r.flushCallbacks, function(e) { e() }), delete n._serverDocuments[i.collection][i.id])
                        }), delete n._documentsWrittenByStub[e];
                        var i = n._methodInvokers[e];
                        if (!i) throw new Error("No callback invoker for method " + e);
                        n._runWhenAllServerDocsAreFlushed(g.bind(i.dataVisible, i))
                    })
                },
                _process_ready: function(e) {
                    var t = this;
                    g.each(e.subs, function(e) {
                        t._runWhenAllServerDocsAreFlushed(function() {
                            var n = t._subscriptions[e];
                            n && (n.ready || (n.readyCallback && n.readyCallback(), n.ready = !0, n.readyDeps && n.readyDeps.changed()))
                        })
                    })
                },
                _runWhenAllServerDocsAreFlushed: function(e) {
                    var t = this,
                        n = function() { t._afterUpdateCallbacks.push(e) },
                        i = 0,
                        r = function() {--i, 0 === i && n() };
                    g.each(t._serverDocuments, function(e) {
                        g.each(e, function(e) {
                            var n = g.any(e.writtenByStubs, function(e, n) { var i = t._methodInvokers[n]; return i && i.sentMessage });
                            n && (++i, e.flushCallbacks.push(r))
                        })
                    }), 0 === i && n()
                },
                _livedata_nosub: function(e) {
                    var t = this;
                    if (t._livedata_data(e), g.has(t._subscriptions, e.id)) {
                        var n = t._subscriptions[e.id].errorCallback;
                        delete t._subscriptions[e.id], n && e.error && n(new h.Error(e.error.error, e.error.reason, e.error.details))
                    }
                },
                _process_nosub: function() {},
                _livedata_result: function(e) { var t = this; if (g.isEmpty(t._outstandingMethodBlocks)) return h._debug("Received method result but no methods outstanding"), void 0; for (var n, i = t._outstandingMethodBlocks[0].methods, r = 0; r < i.length && (n = i[r], n.methodId !== e.id); r++); return n ? (i.splice(r, 1), g.has(e, "error") ? n.receiveResult(new h.Error(e.error.error, e.error.reason, e.error.details)) : n.receiveResult(void 0, e.result), void 0) : (h._debug("Can't match method response to original method call", e), void 0) },
                _outstandingMethodFinished: function() {
                    var e = this;
                    if (!e._anyMethodsAreOutstanding()) {
                        if (!g.isEmpty(e._outstandingMethodBlocks)) {
                            var t = e._outstandingMethodBlocks.shift();
                            if (!g.isEmpty(t.methods)) throw new Error("No methods outstanding but nonempty block: " + p.stringify(t));
                            g.isEmpty(e._outstandingMethodBlocks) || e._sendOutstandingMethods()
                        }
                        e._maybeMigrate()
                    }
                },
                _sendOutstandingMethods: function() {
                    var e = this;
                    g.isEmpty(e._outstandingMethodBlocks) || g.each(e._outstandingMethodBlocks[0].methods, function(e) { e.sendMessage() })
                },
                _livedata_error: function(e) { h._debug("Received error from server: ", e.reason), e.offendingMessage && h._debug("For: ", e.offendingMessage) },
                _callOnReconnectAndSendAppropriateOutstandingMethods: function() {
                    var e = this,
                        t = e._outstandingMethodBlocks;
                    if (e._outstandingMethodBlocks = [], e.onReconnect(), !g.isEmpty(t)) {
                        if (g.isEmpty(e._outstandingMethodBlocks)) return e._outstandingMethodBlocks = t, e._sendOutstandingMethods(), void 0;
                        g.last(e._outstandingMethodBlocks).wait || t[0].wait || (g.each(t[0].methods, function(t) { g.last(e._outstandingMethodBlocks).methods.push(t), 1 === e._outstandingMethodBlocks.length && t.sendMessage() }), t.shift()), g.each(t, function(t) { e._outstandingMethodBlocks.push(t) })
                    }
                },
                _readyToMigrate: function() { var e = this; return g.isEmpty(e._methodInvokers) },
                _maybeMigrate: function() {
                    var e = this;
                    e._retryMigrate && e._readyToMigrate() && (e._retryMigrate(), e._retryMigrate = null)
                }
            }), t.Connection = r, e.connect = function(e, t) { var n = new r(e, t); return c.push(n), n }, c = [], e._allSubscriptionsReady = function() { return g.all(c, function(e) { return g.all(e._subscriptions, function(e) { return e.ready }) }) }
        }.call(this),
        function() {
            if (h.refresh = function() {}, h.isClient) {
                var t = "/";
                "undefined" != typeof __meteor_runtime_config__ && __meteor_runtime_config__.DDP_DEFAULT_CONNECTION_URL && (t = __meteor_runtime_config__.DDP_DEFAULT_CONNECTION_URL);
                var i = new n,
                    r = function(e) {
                        if (h._debug(e), Package.reload) {
                            var t = Package.reload.Reload._migrationData("livedata") || {},
                                n = t.DDPVersionNegotiationFailures || 0;
                            ++n, Package.reload.Reload._onMigrate("livedata", function() { return [!0, { DDPVersionNegotiationFailures: n }] }), i.retryLater(n, function() { Package.reload.Reload._reload() })
                        }
                    };
                h.connection = e.connect(t, { onDDPVersionNegotiationFailure: r }), g.each(["subscribe", "methods", "call", "apply", "status", "reconnect", "disconnect"], function(e) { h[e] = g.bind(h.connection[e], h.connection) })
            } else h.connection = null;
            h.default_connection = h.connection, h.connect = e.connect
        }.call(this), "undefined" == typeof Package && (Package = {}), Package.livedata = { DDP: e, LivedataTest: t }
}(),
function() {
    {
        var e;
        Package.meteor.Meteor, Package.logging.Log, Package.underscore._, Package.livedata.DDP, Package.ejson.EJSON
    }
    "undefined" == typeof Package && (Package = {}), Package["follower-livedata"] = { Follower: e }
}(),
function() { Package.meteor.Meteor, Package.logging.Log, Package.underscore._, Package.livedata.DDP, Package.ejson.EJSON, Package["follower-livedata"].Follower; "undefined" == typeof Package && (Package = {}), Package["application-configuration"] = {} }(),
function() {
    var e, t = Package.meteor.Meteor,
        n = Package.random.Random,
        i = Package.ejson.EJSON,
        r = (Package.json.JSON, Package.underscore._),
        o = Package.minimongo.LocalCollection,
        s = (Package.logging.Log, Package.livedata.DDP),
        a = Package.deps.Deps,
        l = Package.check.check,
        u = Package.check.Match;
    (function() {
        e = function() {
            var e = this;
            e.noConnCollections = {}
        };
        var t = function(e, t) { return e in t || (t[e] = new o(e)), t[e] };
        r.extend(e.prototype, { open: function(e, n) { var i = this; return e ? n ? (n._mongo_livedata_collections || (n._mongo_livedata_collections = {}), t(e, n._mongo_livedata_collections)) : t(e, i.noConnCollections) : new o } }), e = new e
    }).call(this),
        function() {
            t.Collection = function(i, s) {
                var l = this;
                if (!(l instanceof t.Collection)) throw new Error('use "new" to construct a Meteor.Collection');
                switch (s && s.methods && (s = { connection: s }), s && s.manager && !s.connection && (s.connection = s.manager), s = r.extend({ connection: void 0, idGeneration: "STRING", transform: null, _driver: void 0, _preventAutopublish: !1 }, s), s.idGeneration) {
                    case "MONGO":
                        l._makeNewID = function() { return new t.Collection.ObjectID };
                        break;
                    case "STRING":
                    default:
                        l._makeNewID = function() { return n.id() }
                }
                if (l._transform = s.transform ? a._makeNonreactive(s.transform) : null, i || null === i || t._debug("Warning: creating anonymous collection. It will not be saved or synchronized over the network. (Pass null for the collection name to turn off this warning.)"), l._connection = i && null !== s.connection ? s.connection ? s.connection : t.isClient ? t.connection : t.server : null, s._driver || (s._driver = i && l._connection === t.server && "undefined" != typeof MongoInternals && MongoInternals.defaultRemoteCollectionDriver ? MongoInternals.defaultRemoteCollectionDriver() : e), l._collection = s._driver.open(i, l._connection), l._name = i, l._connection && l._connection.registerStore) {
                    var u = l._connection.registerStore(i, {
                        beginUpdate: function(e, t) {
                            (e > 1 || t) && l._collection.pauseObservers(), t && l._collection.remove({})
                        },
                        update: function(e) {
                            var t = o._idParse(e.id),
                                n = l._collection.findOne(t);
                            if ("replace" === e.msg) { var i = e.replace; return i ? n ? l._collection.update(t, i) : l._collection.insert(i) : n && l._collection.remove(t), void 0 }
                            if ("added" === e.msg) {
                                if (n) throw new Error("Expected not to find a document already present for an add");
                                l._collection.insert(r.extend({ _id: t }, e.fields))
                            } else if ("removed" === e.msg) {
                                if (!n) throw new Error("Expected to find a document already present for removed");
                                l._collection.remove(t)
                            } else {
                                if ("changed" !== e.msg) throw new Error("I don't know how to deal with this message");
                                if (!n) throw new Error("Expected to find a document to change");
                                if (!r.isEmpty(e.fields)) {
                                    var s = {};
                                    r.each(e.fields, function(e, t) { void 0 === e ? (s.$unset || (s.$unset = {}), s.$unset[t] = 1) : (s.$set || (s.$set = {}), s.$set[t] = e) }), l._collection.update(t, s)
                                }
                            }
                        },
                        endUpdate: function() { l._collection.resumeObservers() },
                        saveOriginals: function() { l._collection.saveOriginals() },
                        retrieveOriginals: function() { return l._collection.retrieveOriginals() }
                    });
                    if (!u) throw new Error("There is already a collection named '" + i + "'")
                }
                l._defineMutationMethods(), Package.autopublish && !s._preventAutopublish && l._connection && l._connection.publish && l._connection.publish(null, function() { return l.find() }, { is_auto: !0 })
            }, r.extend(t.Collection.prototype, {
                _getFindSelector: function(e) { return 0 == e.length ? {} : e[0] },
                _getFindOptions: function(e) { var t = this; return e.length < 2 ? { transform: t._transform } : r.extend({ transform: t._transform }, e[1]) },
                find: function() {
                    var e = this,
                        t = r.toArray(arguments);
                    return e._collection.find(e._getFindSelector(t), e._getFindOptions(t))
                },
                findOne: function() {
                    var e = this,
                        t = r.toArray(arguments);
                    return e._collection.findOne(e._getFindSelector(t), e._getFindOptions(t))
                }
            }), t.Collection._publishCursor = function(e, t, n) {
                var i = e.observeChanges({ added: function(e, i) { t.added(n, e, i) }, changed: function(e, i) { t.changed(n, e, i) }, removed: function(e) { t.removed(n, e) } });
                t.onStop(function() { i.stop() })
            }, t.Collection._rewriteSelector = function(e) { if (o._selectorIsId(e) && (e = { _id: e }), !e || "_id" in e && !e._id) return { _id: n.id() }; var i = {}; return r.each(e, function(e, n) { e instanceof RegExp ? i[n] = c(e) : e && e.$regex instanceof RegExp ? (i[n] = c(e.$regex), void 0 !== e.$options && (i[n].$options = e.$options)) : i[n] = r.contains(["$or", "$and", "$nor"], n) ? r.map(e, function(e) { return t.Collection._rewriteSelector(e) }) : e }), i };
            var c = function(e) {
                    l(e, RegExp);
                    var t = { $regex: e.source },
                        n = "";
                    return e.ignoreCase && (n += "i"), e.multiline && (n += "m"), n && (t.$options = n), t
                },
                h = function(e, n) { if (!o._selectorIsIdPerhapsAsObject(e)) throw new t.Error(403, "Not permitted. Untrusted code may only " + n + " documents by ID.") };
            r.each(["insert", "update", "remove"], function(e) {
                    t.Collection.prototype[e] = function() {
                        var n, i, o, a = this,
                            l = r.toArray(arguments);
                        if (l.length && l[l.length - 1] instanceof Function && (n = l.pop()), "insert" === e) { if (!l.length) throw new Error("insert requires an argument"); if (l[0] = r.extend({}, l[0]), "_id" in l[0]) { if (i = l[0]._id, !i || !("string" == typeof i || i instanceof t.Collection.ObjectID)) throw new Error("Meteor requires document _id fields to be non-empty strings or ObjectIDs") } else i = l[0]._id = a._makeNewID() } else if (l[0] = t.Collection._rewriteSelector(l[0]), "update" === e) {
                            var u = l[2] = r.clone(l[2]) || {};
                            if (u && "function" != typeof u && u.upsert)
                                if (u.insertedId) { if (!("string" == typeof u.insertedId || u.insertedId instanceof t.Collection.ObjectID)) throw new Error("insertedId must be string or ObjectID") } else u.insertedId = a._makeNewID()
                        }
                        var c, d = function(t) { return "insert" === e ? i : t };
                        if (n && (c = function(e, t) { n(e, !e && d(t)) }), a._connection && a._connection !== t.server) {
                            var f = s._CurrentInvocation.get(),
                                p = f && f.isSimulation;
                            !t.isClient || c || p || (c = function(n) { n && t._debug(e + " failed: " + (n.reason || n.stack)) }), p || "insert" === e || h(l[0], e), o = d(a._connection.apply(a._prefix + e, l, c))
                        } else {
                            l.push(c);
                            try {
                                var g = a._collection[e].apply(a._collection, l);
                                o = d(g)
                            } catch (m) { if (n) return n(m), null; throw m }
                        }
                        return o
                    }
                }), t.Collection.prototype.upsert = function(e, t, n, i) { var o = this; return i || "function" != typeof n || (i = n, n = {}), o.update(e, t, r.extend({}, n, { _returnObject: !0, upsert: !0 }), i) }, t.Collection.prototype._ensureIndex = function(e, t) {
                    var n = this;
                    if (!n._collection._ensureIndex) throw new Error("Can only call _ensureIndex on server collections");
                    n._collection._ensureIndex(e, t)
                }, t.Collection.prototype._dropIndex = function(e) {
                    var t = this;
                    if (!t._collection._dropIndex) throw new Error("Can only call _dropIndex on server collections");
                    t._collection._dropIndex(e)
                }, t.Collection.prototype._dropCollection = function() {
                    var e = this;
                    if (!e._collection.dropCollection) throw new Error("Can only call _dropCollection on server collections");
                    e._collection.dropCollection()
                }, t.Collection.prototype._createCappedCollection = function(e) {
                    var t = this;
                    if (!t._collection._createCappedCollection) throw new Error("Can only call _createCappedCollection on server collections");
                    t._collection._createCappedCollection(e)
                }, t.Collection.ObjectID = o._ObjectID,
                function() {
                    var e = function(e, t) {
                        var n = ["insert", "update", "remove", "fetch", "transform"];
                        r.each(r.keys(t), function(t) { if (!r.contains(n, t)) throw new Error(e + ": Invalid key: " + t) });
                        var i = this;
                        if (i._restricted = !0, r.each(["insert", "update", "remove"], function(n) {
                                if (t[n]) {
                                    if (!(t[n] instanceof Function)) throw new Error(e + ": Value for `" + n + "` must be a function");
                                    i._transform && null !== t.transform && (t[n].transform = i._transform), t.transform && (t[n].transform = a._makeNonreactive(t.transform)), i._validators[n][e].push(t[n])
                                }
                            }), t.update || t.remove || t.fetch) {
                            if (t.fetch && !(t.fetch instanceof Array)) throw new Error(e + ": Value for `fetch` must be an array");
                            i._updateFetch(t.fetch)
                        }
                    };
                    t.Collection.prototype.allow = function(t) { e.call(this, "allow", t) }, t.Collection.prototype.deny = function(t) { e.call(this, "deny", t) }
                }(), t.Collection.prototype._defineMutationMethods = function() {
                    var e = this;
                    if (e._restricted = !1, e._insecure = void 0, e._validators = { insert: { allow: [], deny: [] }, update: { allow: [], deny: [] }, remove: { allow: [], deny: [] }, upsert: { allow: [], deny: [] }, fetch: [], fetchAllFields: !1 }, e._name && (e._prefix = "/" + e._name + "/", e._connection)) {
                        var n = {};
                        r.each(["insert", "update", "remove"], function(i) {
                            n[e._prefix + i] = function() {
                                l(arguments, [u.Any]);
                                try {
                                    if (this.isSimulation) return e._collection[i].apply(e._collection, r.toArray(arguments));
                                    if ("insert" !== i && h(arguments[0], i), e._restricted) {
                                        if (0 === e._validators[i].allow.length) throw new t.Error(403, "Access denied. No allow validators set on restricted collection for method '" + i + "'.");
                                        var n = "_validated" + i.charAt(0).toUpperCase() + i.slice(1),
                                            o = [this.userId].concat(r.toArray(arguments));
                                        return e[n].apply(e, o)
                                    }
                                    if (e._isInsecure()) return e._collection[i].apply(e._collection, r.toArray(arguments));
                                    throw new t.Error(403, "Access denied")
                                } catch (s) { throw "MongoError" === s.name || "MinimongoError" === s.name ? new t.Error(409, s.toString()) : s }
                            }
                        }), (t.isClient || e._connection === t.server) && e._connection.methods(n)
                    }
                }, t.Collection.prototype._updateFetch = function(e) {
                    var t = this;
                    t._validators.fetchAllFields || (e ? t._validators.fetch = r.union(t._validators.fetch, e) : (t._validators.fetchAllFields = !0, t._validators.fetch = null))
                }, t.Collection.prototype._isInsecure = function() { var e = this; return void 0 === e._insecure ? !!Package.insecure : e._insecure };
            var d = function(e, t) { var n = t; return e.transform && (n = e.transform(i.clone(t))), n };
            t.Collection.prototype._validatedInsert = function(e, n) {
                var i = this;
                if (r.any(i._validators.insert.deny, function(t) { return t(e, d(t, n)) })) throw new t.Error(403, "Access denied");
                if (r.all(i._validators.insert.allow, function(t) { return !t(e, d(t, n)) })) throw new t.Error(403, "Access denied");
                i._collection.insert.call(i._collection, n)
            };
            var f = function(e, t) { return e.transform ? e.transform(t) : t };
            t.Collection.prototype._validatedUpdate = function(e, n, i, s) {
                var a = this;
                if (s = s || {}, !o._selectorIsIdPerhapsAsObject(n)) throw new Error("validated update should be of a single ID");
                if (s.upsert) throw new t.Error(403, "Access denied. Upserts not allowed in a restricted collection.");
                var l = [];
                r.each(i, function(e, n) {
                    if ("$" !== n.charAt(0)) throw new t.Error(403, "Access denied. In a restricted collection you can only update documents, not replace them. Use a Mongo update operator, such as '$set'.");
                    if (!r.has(p, n)) throw new t.Error(403, "Access denied. Operator " + n + " not allowed in a restricted collection.");
                    r.each(r.keys(e), function(e) {-1 !== e.indexOf(".") && (e = e.substring(0, e.indexOf("."))), r.contains(l, e) || l.push(e) })
                });
                var u = { transform: null };
                a._validators.fetchAllFields || (u.fields = {}, r.each(a._validators.fetch, function(e) { u.fields[e] = 1 }));
                var c = a._collection.findOne(n, u);
                if (c) {
                    var h;
                    if (r.any(a._validators.update.deny, function(t) { return h || (h = f(t, c)), t(e, h, l, i) })) throw new t.Error(403, "Access denied");
                    if (r.all(a._validators.update.allow, function(t) { return h || (h = f(t, c)), !t(e, h, l, i) })) throw new t.Error(403, "Access denied");
                    a._collection.update.call(a._collection, n, i, s)
                }
            };
            var p = { $inc: 1, $set: 1, $unset: 1, $addToSet: 1, $pop: 1, $pullAll: 1, $pull: 1, $pushAll: 1, $push: 1, $bit: 1 };
            t.Collection.prototype._validatedRemove = function(e, n) {
                var i = this,
                    o = { transform: null };
                i._validators.fetchAllFields || (o.fields = {}, r.each(i._validators.fetch, function(e) { o.fields[e] = 1 }));
                var s = i._collection.findOne(n, o);
                if (s) {
                    if (r.any(i._validators.remove.deny, function(t) { return t(e, f(t, s)) })) throw new t.Error(403, "Access denied");
                    if (r.all(i._validators.remove.allow, function(t) { return !t(e, f(t, s)) })) throw new t.Error(403, "Access denied");
                    i._collection.remove.call(i._collection, n)
                }
            }
        }.call(this), "undefined" == typeof Package && (Package = {}), Package["mongo-livedata"] = {}
}(),
function() {
    var e, t = Package.meteor.Meteor,
        n = Package.deps.Deps,
        i = Package.livedata.DDP;
    (function() {
        var r = __meteor_runtime_config__.autoupdateVersion || "unknown",
            o = new t.Collection("meteor_autoupdate_clientVersions");
        e = {}, e.newClientAvailable = function() { return !!o.findOne({ $and: [{ current: !0 }, { _id: { $ne: r } }] }) };
        var s = new i._Retry({ minCount: 0, baseTimeout: 3e4 }),
            a = 0;
        e._retrySubscription = function() { t.subscribe("meteor_autoupdate_clientVersions", { onError: function(n) { t._debug("autoupdate subscription failed:", n), a++, s.retryLater(a, function() { e._retrySubscription() }) }, onReady: function() { Package.reload && n.autorun(function(e) { o.findOne({ current: !0 }) && !o.findOne({ _id: r }) && (e.stop(), Package.reload.Reload._reload()) }) } }) }, e._retrySubscription()
    }).call(this), "undefined" == typeof Package && (Package = {}), Package.autoupdate = { Autoupdate: e }
}(),
function() { Package.meteor.Meteor, Package.reload.Reload, Package.autoupdate.Autoupdate; "undefined" == typeof Package && (Package = {}), Package["standard-app-packages"] = {} }(),
function() {
    var Meteor = Package.meteor.Meteor,
        $ = Package.jquery.$,
        jQuery = Package.jquery.jQuery;
    (function() {
        ! function(e, t) {
            function n(t, n) { var r, o, s, a = t.nodeName.toLowerCase(); return "area" === a ? (r = t.parentNode, o = r.name, t.href && o && "map" === r.nodeName.toLowerCase() ? (s = e("img[usemap=#" + o + "]")[0], !!s && i(s)) : !1) : (/input|select|textarea|button|object/.test(a) ? !t.disabled : "a" === a ? t.href || n : n) && i(t) }

            function i(t) { return e.expr.filters.visible(t) && !e(t).parents().andSelf().filter(function() { return "hidden" === e.css(this, "visibility") }).length }
            var r = 0,
                o = /^ui-id-\d+$/;
            e.ui = e.ui || {}, e.ui.version || (e.extend(e.ui, { version: "1.9.2", keyCode: { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 } }), e.fn.extend({
                _focus: e.fn.focus,
                focus: function(t, n) {
                    return "number" == typeof t ? this.each(function() {
                        var i = this;
                        setTimeout(function() { e(i).focus(), n && n.call(i) }, t)
                    }) : this._focus.apply(this, arguments)
                },
                scrollParent: function() { var t; return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() { return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x")) }).eq(0) : this.parents().filter(function() { return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x")) }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t },
                zIndex: function(n) {
                    if (n !== t) return this.css("zIndex", n);
                    if (this.length)
                        for (var i, r, o = e(this[0]); o.length && o[0] !== document;) {
                            if (i = o.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (r = parseInt(o.css("zIndex"), 10), !isNaN(r) && 0 !== r)) return r;
                            o = o.parent()
                        }
                    return 0
                },
                uniqueId: function() { return this.each(function() { this.id || (this.id = "ui-id-" + ++r) }) },
                removeUniqueId: function() { return this.each(function() { o.test(this.id) && e(this).removeAttr("id") }) }
            }), e.extend(e.expr[":"], {
                data: e.expr.createPseudo ? e.expr.createPseudo(function(t) { return function(n) { return !!e.data(n, t) } }) : function(t, n, i) { return !!e.data(t, i[3]) },
                focusable: function(t) { return n(t, !isNaN(e.attr(t, "tabindex"))) },
                tabbable: function(t) {
                    var i = e.attr(t, "tabindex"),
                        r = isNaN(i);
                    return (r || i >= 0) && n(t, !r)
                }
            }), e(function() {
                var t = document.body,
                    n = t.appendChild(n = document.createElement("div"));
                n.offsetHeight, e.extend(n.style, { minHeight: "100px", height: "auto", padding: 0, borderWidth: 0 }), e.support.minHeight = 100 === n.offsetHeight, e.support.selectstart = "onselectstart" in n, t.removeChild(n).style.display = "none"
            }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(n, i) {
                function r(t, n, i, r) { return e.each(o, function() { n -= parseFloat(e.css(t, "padding" + this)) || 0, i && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), r && (n -= parseFloat(e.css(t, "margin" + this)) || 0) }), n }
                var o = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                    s = i.toLowerCase(),
                    a = { innerWidth: e.fn.innerWidth, innerHeight: e.fn.innerHeight, outerWidth: e.fn.outerWidth, outerHeight: e.fn.outerHeight };
                e.fn["inner" + i] = function(n) { return n === t ? a["inner" + i].call(this) : this.each(function() { e(this).css(s, r(this, n) + "px") }) }, e.fn["outer" + i] = function(t, n) { return "number" != typeof t ? a["outer" + i].call(this, t) : this.each(function() { e(this).css(s, r(this, t, !0, n) + "px") }) }
            }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) { return function(n) { return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this) } }(e.fn.removeData)), function() {
                var t = /msie ([\w.]+)/.exec(navigator.userAgent.toLowerCase()) || [];
                e.ui.ie = t.length ? !0 : !1, e.ui.ie6 = 6 === parseFloat(t[1], 10)
            }(), e.fn.extend({ disableSelection: function() { return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) { e.preventDefault() }) }, enableSelection: function() { return this.unbind(".ui-disableSelection") } }), e.extend(e.ui, {
                plugin: {
                    add: function(t, n, i) { var r, o = e.ui[t].prototype; for (r in i) o.plugins[r] = o.plugins[r] || [], o.plugins[r].push([n, i[r]]) },
                    call: function(e, t, n) {
                        var i, r = e.plugins[t];
                        if (r && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)
                            for (i = 0; i < r.length; i++) e.options[r[i][0]] && r[i][1].apply(e.element, n)
                    }
                },
                contains: e.contains,
                hasScroll: function(t, n) {
                    if ("hidden" === e(t).css("overflow")) return !1;
                    var i = n && "left" === n ? "scrollLeft" : "scrollTop",
                        r = !1;
                    return t[i] > 0 ? !0 : (t[i] = 1, r = t[i] > 0, t[i] = 0, r)
                },
                isOverAxis: function(e, t, n) { return e > t && t + n > e },
                isOver: function(t, n, i, r, o, s) { return e.ui.isOverAxis(t, i, o) && e.ui.isOverAxis(n, r, s) }
            }))
        }(jQuery),
        function(e, t) {
            var n = 0,
                i = Array.prototype.slice,
                r = e.cleanData;
            e.cleanData = function(t) {
                for (var n, i = 0; null != (n = t[i]); i++) try { e(n).triggerHandler("remove") } catch (o) {}
                r(t)
            }, e.widget = function(t, n, i) {
                var r, o, s, a, l = t.split(".")[0];
                t = t.split(".")[1], r = l + "-" + t, i || (i = n, n = e.Widget), e.expr[":"][r.toLowerCase()] = function(t) { return !!e.data(t, r) }, e[l] = e[l] || {}, o = e[l][t], s = e[l][t] = function(e, t) { return this._createWidget ? (arguments.length && this._createWidget(e, t), void 0) : new s(e, t) }, e.extend(s, o, { version: i.version, _proto: e.extend({}, i), _childConstructors: [] }), a = new n, a.options = e.widget.extend({}, a.options), e.each(i, function(t, r) {
                    e.isFunction(r) && (i[t] = function() {
                        var e = function() { return n.prototype[t].apply(this, arguments) },
                            i = function(e) { return n.prototype[t].apply(this, e) };
                        return function() {
                            var t, n = this._super,
                                o = this._superApply;
                            return this._super = e, this._superApply = i, t = r.apply(this, arguments), this._super = n, this._superApply = o, t
                        }
                    }())
                }), s.prototype = e.widget.extend(a, { widgetEventPrefix: o ? a.widgetEventPrefix : t }, i, { constructor: s, namespace: l, widgetName: t, widgetBaseClass: r, widgetFullName: r }), o ? (e.each(o._childConstructors, function(t, n) {
                    var i = n.prototype;
                    e.widget(i.namespace + "." + i.widgetName, s, n._proto)
                }), delete o._childConstructors) : n._childConstructors.push(s), e.widget.bridge(t, s)
            }, e.widget.extend = function(n) {
                for (var r, o, s = i.call(arguments, 1), a = 0, l = s.length; l > a; a++)
                    for (r in s[a]) o = s[a][r], s[a].hasOwnProperty(r) && o !== t && (n[r] = e.isPlainObject(o) ? e.isPlainObject(n[r]) ? e.widget.extend({}, n[r], o) : e.widget.extend({}, o) : o);
                return n
            }, e.widget.bridge = function(n, r) {
                var o = r.prototype.widgetFullName || n;
                e.fn[n] = function(s) {
                    var a = "string" == typeof s,
                        l = i.call(arguments, 1),
                        u = this;
                    return s = !a && l.length ? e.widget.extend.apply(null, [s].concat(l)) : s, a ? this.each(function() { var i, r = e.data(this, o); return r ? e.isFunction(r[s]) && "_" !== s.charAt(0) ? (i = r[s].apply(r, l), i !== r && i !== t ? (u = i && i.jquery ? u.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + s + "' for " + n + " widget instance") : e.error("cannot call methods on " + n + " prior to initialization; attempted to call method '" + s + "'") }) : this.each(function() {
                        var t = e.data(this, o);
                        t ? t.option(s || {})._init() : e.data(this, o, new r(s, this))
                    }), u
                }
            }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
                widgetName: "widget",
                widgetEventPrefix: "",
                defaultElement: "<div>",
                options: { disabled: !1, create: null },
                _createWidget: function(t, i) { i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetName, this), e.data(i, this.widgetFullName, this), this._on(!0, this.element, { remove: function(e) { e.target === i && this.destroy() } }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init() },
                _getCreateOptions: e.noop,
                _getCreateEventData: e.noop,
                _create: e.noop,
                _init: e.noop,
                destroy: function() { this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus") },
                _destroy: e.noop,
                widget: function() { return this.element },
                option: function(n, i) {
                    var r, o, s, a = n;
                    if (0 === arguments.length) return e.widget.extend({}, this.options);
                    if ("string" == typeof n)
                        if (a = {}, r = n.split("."), n = r.shift(), r.length) {
                            for (o = a[n] = e.widget.extend({}, this.options[n]), s = 0; s < r.length - 1; s++) o[r[s]] = o[r[s]] || {}, o = o[r[s]];
                            if (n = r.pop(), i === t) return o[n] === t ? null : o[n];
                            o[n] = i
                        } else {
                            if (i === t) return this.options[n] === t ? null : this.options[n];
                            a[n] = i
                        }
                    return this._setOptions(a), this
                },
                _setOptions: function(e) { var t; for (t in e) this._setOption(t, e[t]); return this },
                _setOption: function(e, t) { return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this },
                enable: function() { return this._setOption("disabled", !1) },
                disable: function() { return this._setOption("disabled", !0) },
                _on: function(t, n, i) {
                    var r, o = this;
                    "boolean" != typeof t && (i = n, n = t, t = !1), i ? (n = r = e(n), this.bindings = this.bindings.add(n)) : (i = n, n = this.element, r = this.widget()), e.each(i, function(i, s) {
                        function a() { return t || o.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof s ? o[s] : s).apply(o, arguments) : void 0 }
                        "string" != typeof s && (a.guid = s.guid = s.guid || a.guid || e.guid++);
                        var l = i.match(/^(\w+)\s*(.*)$/),
                            u = l[1] + o.eventNamespace,
                            c = l[2];
                        c ? r.delegate(c, u, a) : n.bind(u, a)
                    })
                },
                _off: function(e, t) { t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t) },
                _delay: function(e, t) {
                    function n() { return ("string" == typeof e ? i[e] : e).apply(i, arguments) }
                    var i = this;
                    return setTimeout(n, t || 0)
                },
                _hoverable: function(t) { this.hoverable = this.hoverable.add(t), this._on(t, { mouseenter: function(t) { e(t.currentTarget).addClass("ui-state-hover") }, mouseleave: function(t) { e(t.currentTarget).removeClass("ui-state-hover") } }) },
                _focusable: function(t) { this.focusable = this.focusable.add(t), this._on(t, { focusin: function(t) { e(t.currentTarget).addClass("ui-state-focus") }, focusout: function(t) { e(t.currentTarget).removeClass("ui-state-focus") } }) },
                _trigger: function(t, n, i) {
                    var r, o, s = this.options[t];
                    if (i = i || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], o = n.originalEvent)
                        for (r in o) r in n || (n[r] = o[r]);
                    return this.element.trigger(n, i), !(e.isFunction(s) && s.apply(this.element[0], [n].concat(i)) === !1 || n.isDefaultPrevented())
                }
            }, e.each({ show: "fadeIn", hide: "fadeOut" }, function(t, n) {
                e.Widget.prototype["_" + t] = function(i, r, o) {
                    "string" == typeof r && (r = { effect: r });
                    var s, a = r ? r === !0 || "number" == typeof r ? n : r.effect || n : t;
                    r = r || {}, "number" == typeof r && (r = { duration: r }), s = !e.isEmptyObject(r), r.complete = o, r.delay && i.delay(r.delay), s && e.effects && (e.effects.effect[a] || e.uiBackCompat !== !1 && e.effects[a]) ? i[t](r) : a !== t && i[a] ? i[a](r.duration, r.easing, o) : i.queue(function(n) { e(this)[t](), o && o.call(i[0]), n() })
                }
            }), e.uiBackCompat !== !1 && (e.Widget.prototype._getCreateOptions = function() { return e.metadata && e.metadata.get(this.element[0])[this.widgetName] })
        }(jQuery),
        function(e) {
            var t = !1;
            e(document).mouseup(function() { t = !1 }), e.widget("ui.mouse", {
                version: "1.9.2",
                options: { cancel: "input,textarea,button,select,option", distance: 1, delay: 0 },
                _mouseInit: function() {
                    var t = this;
                    this.element.bind("mousedown." + this.widgetName, function(e) { return t._mouseDown(e) }).bind("click." + this.widgetName, function(n) { return !0 === e.data(n.target, t.widgetName + ".preventClickEvent") ? (e.removeData(n.target, t.widgetName + ".preventClickEvent"), n.stopImmediatePropagation(), !1) : void 0 }), this.started = !1
                },
                _mouseDestroy: function() { this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate) },
                _mouseDown: function(n) {
                    if (!t) {
                        this._mouseStarted && this._mouseUp(n), this._mouseDownEvent = n;
                        var i = this,
                            r = 1 === n.which,
                            o = "string" == typeof this.options.cancel && n.target.nodeName ? e(n.target).closest(this.options.cancel).length : !1;
                        return r && !o && this._mouseCapture(n) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() { i.mouseDelayMet = !0 }, this.options.delay)), this._mouseDistanceMet(n) && this._mouseDelayMet(n) && (this._mouseStarted = this._mouseStart(n) !== !1, !this._mouseStarted) ? (n.preventDefault(), !0) : (!0 === e.data(n.target, this.widgetName + ".preventClickEvent") && e.removeData(n.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) { return i._mouseMove(e) }, this._mouseUpDelegate = function(e) { return i._mouseUp(e) }, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), n.preventDefault(), t = !0, !0)) : !0
                    }
                },
                _mouseMove: function(t) { return !e.ui.ie || document.documentMode >= 9 || t.button ? this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) : this._mouseUp(t) },
                _mouseUp: function(t) { return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1 },
                _mouseDistanceMet: function(e) { return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance },
                _mouseDelayMet: function() { return this.mouseDelayMet },
                _mouseStart: function() {},
                _mouseDrag: function() {},
                _mouseStop: function() {},
                _mouseCapture: function() { return !0 }
            })
        }(jQuery),
        function(e, t) {
            function n(e, t, n) { return [parseInt(e[0], 10) * (d.test(e[0]) ? t / 100 : 1), parseInt(e[1], 10) * (d.test(e[1]) ? n / 100 : 1)] }

            function i(t, n) { return parseInt(e.css(t, n), 10) || 0 }
            e.ui = e.ui || {};
            var r, o = Math.max,
                s = Math.abs,
                a = Math.round,
                l = /left|center|right/,
                u = /top|center|bottom/,
                c = /[\+\-]\d+%?/,
                h = /^\w+/,
                d = /%$/,
                f = e.fn.position;
            e.position = {
                    scrollbarWidth: function() {
                        if (r !== t) return r;
                        var n, i, o = e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                            s = o.children()[0];
                        return e("body").append(o), n = s.offsetWidth, o.css("overflow", "scroll"), i = s.offsetWidth, n === i && (i = o[0].clientWidth), o.remove(), r = n - i
                    },
                    getScrollInfo: function(t) {
                        var n = t.isWindow ? "" : t.element.css("overflow-x"),
                            i = t.isWindow ? "" : t.element.css("overflow-y"),
                            r = "scroll" === n || "auto" === n && t.width < t.element[0].scrollWidth,
                            o = "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight;
                        return { width: r ? e.position.scrollbarWidth() : 0, height: o ? e.position.scrollbarWidth() : 0 }
                    },
                    getWithinInfo: function(t) {
                        var n = e(t || window),
                            i = e.isWindow(n[0]);
                        return { element: n, isWindow: i, offset: n.offset() || { left: 0, top: 0 }, scrollLeft: n.scrollLeft(), scrollTop: n.scrollTop(), width: i ? n.width() : n.outerWidth(), height: i ? n.height() : n.outerHeight() }
                    }
                }, e.fn.position = function(t) {
                    if (!t || !t.of) return f.apply(this, arguments);
                    t = e.extend({}, t);
                    var r, d, p, g, m, v = e(t.of),
                        _ = e.position.getWithinInfo(t.within),
                        y = e.position.getScrollInfo(_),
                        b = v[0],
                        w = (t.collision || "flip").split(" "),
                        k = {};
                    return 9 === b.nodeType ? (d = v.width(), p = v.height(), g = { top: 0, left: 0 }) : e.isWindow(b) ? (d = v.width(), p = v.height(), g = { top: v.scrollTop(), left: v.scrollLeft() }) : b.preventDefault ? (t.at = "left top", d = p = 0, g = { top: b.pageY, left: b.pageX }) : (d = v.outerWidth(), p = v.outerHeight(), g = v.offset()), m = e.extend({}, g), e.each(["my", "at"], function() {
                        var e, n, i = (t[this] || "").split(" ");
                        1 === i.length && (i = l.test(i[0]) ? i.concat(["center"]) : u.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = l.test(i[0]) ? i[0] : "center", i[1] = u.test(i[1]) ? i[1] : "center", e = c.exec(i[0]), n = c.exec(i[1]), k[this] = [e ? e[0] : 0, n ? n[0] : 0], t[this] = [h.exec(i[0])[0], h.exec(i[1])[0]]
                    }), 1 === w.length && (w[1] = w[0]), "right" === t.at[0] ? m.left += d : "center" === t.at[0] && (m.left += d / 2), "bottom" === t.at[1] ? m.top += p : "center" === t.at[1] && (m.top += p / 2), r = n(k.at, d, p), m.left += r[0], m.top += r[1], this.each(function() {
                        var l, u, c = e(this),
                            h = c.outerWidth(),
                            f = c.outerHeight(),
                            b = i(this, "marginLeft"),
                            x = i(this, "marginTop"),
                            C = h + b + i(this, "marginRight") + y.width,
                            T = f + x + i(this, "marginBottom") + y.height,
                            E = e.extend({}, m),
                            D = n(k.my, c.outerWidth(), c.outerHeight());
                        "right" === t.my[0] ? E.left -= h : "center" === t.my[0] && (E.left -= h / 2), "bottom" === t.my[1] ? E.top -= f : "center" === t.my[1] && (E.top -= f / 2), E.left += D[0], E.top += D[1], e.support.offsetFractions || (E.left = a(E.left), E.top = a(E.top)), l = { marginLeft: b, marginTop: x }, e.each(["left", "top"], function(n, i) { e.ui.position[w[n]] && e.ui.position[w[n]][i](E, { targetWidth: d, targetHeight: p, elemWidth: h, elemHeight: f, collisionPosition: l, collisionWidth: C, collisionHeight: T, offset: [r[0] + D[0], r[1] + D[1]], my: t.my, at: t.at, within: _, elem: c }) }), e.fn.bgiframe && c.bgiframe(), t.using && (u = function(e) {
                            var n = g.left - E.left,
                                i = n + d - h,
                                r = g.top - E.top,
                                a = r + p - f,
                                l = { target: { element: v, left: g.left, top: g.top, width: d, height: p }, element: { element: c, left: E.left, top: E.top, width: h, height: f }, horizontal: 0 > i ? "left" : n > 0 ? "right" : "center", vertical: 0 > a ? "top" : r > 0 ? "bottom" : "middle" };
                            h > d && s(n + i) < d && (l.horizontal = "center"), f > p && s(r + a) < p && (l.vertical = "middle"), l.important = o(s(n), s(i)) > o(s(r), s(a)) ? "horizontal" : "vertical", t.using.call(this, e, l)
                        }), c.offset(e.extend(E, { using: u }))
                    })
                }, e.ui.position = {
                    fit: {
                        left: function(e, t) {
                            var n, i = t.within,
                                r = i.isWindow ? i.scrollLeft : i.offset.left,
                                s = i.width,
                                a = e.left - t.collisionPosition.marginLeft,
                                l = r - a,
                                u = a + t.collisionWidth - s - r;
                            t.collisionWidth > s ? l > 0 && 0 >= u ? (n = e.left + l + t.collisionWidth - s - r, e.left += l - n) : e.left = u > 0 && 0 >= l ? r : l > u ? r + s - t.collisionWidth : r : l > 0 ? e.left += l : u > 0 ? e.left -= u : e.left = o(e.left - a, e.left)
                        },
                        top: function(e, t) {
                            var n, i = t.within,
                                r = i.isWindow ? i.scrollTop : i.offset.top,
                                s = t.within.height,
                                a = e.top - t.collisionPosition.marginTop,
                                l = r - a,
                                u = a + t.collisionHeight - s - r;
                            t.collisionHeight > s ? l > 0 && 0 >= u ? (n = e.top + l + t.collisionHeight - s - r, e.top += l - n) : e.top = u > 0 && 0 >= l ? r : l > u ? r + s - t.collisionHeight : r : l > 0 ? e.top += l : u > 0 ? e.top -= u : e.top = o(e.top - a, e.top)
                        }
                    },
                    flip: {
                        left: function(e, t) {
                            var n, i, r = t.within,
                                o = r.offset.left + r.scrollLeft,
                                a = r.width,
                                l = r.isWindow ? r.scrollLeft : r.offset.left,
                                u = e.left - t.collisionPosition.marginLeft,
                                c = u - l,
                                h = u + t.collisionWidth - a - l,
                                d = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
                                f = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
                                p = -2 * t.offset[0];
                            0 > c ? (n = e.left + d + f + p + t.collisionWidth - a - o, (0 > n || n < s(c)) && (e.left += d + f + p)) : h > 0 && (i = e.left - t.collisionPosition.marginLeft + d + f + p - l, (i > 0 || s(i) < h) && (e.left += d + f + p))
                        },
                        top: function(e, t) {
                            var n, i, r = t.within,
                                o = r.offset.top + r.scrollTop,
                                a = r.height,
                                l = r.isWindow ? r.scrollTop : r.offset.top,
                                u = e.top - t.collisionPosition.marginTop,
                                c = u - l,
                                h = u + t.collisionHeight - a - l,
                                d = "top" === t.my[1],
                                f = d ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
                                p = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
                                g = -2 * t.offset[1];
                            0 > c ? (i = e.top + f + p + g + t.collisionHeight - a - o, e.top + f + p + g > c && (0 > i || i < s(c)) && (e.top += f + p + g)) : h > 0 && (n = e.top - t.collisionPosition.marginTop + f + p + g - l, e.top + f + p + g > h && (n > 0 || s(n) < h) && (e.top += f + p + g))
                        }
                    },
                    flipfit: { left: function() { e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments) }, top: function() { e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments) } }
                },
                function() {
                    var t, n, i, r, o, s = document.getElementsByTagName("body")[0],
                        a = document.createElement("div");
                    t = document.createElement(s ? "div" : "body"), i = { visibility: "hidden", width: 0, height: 0, border: 0, margin: 0, background: "none" }, s && e.extend(i, { position: "absolute", left: "-1000px", top: "-1000px" });
                    for (o in i) t.style[o] = i[o];
                    t.appendChild(a), n = s || document.documentElement, n.insertBefore(t, n.firstChild), a.style.cssText = "position: absolute; left: 10.7432222px;", r = e(a).offset().left, e.support.offsetFractions = r > 10 && 11 > r, t.innerHTML = "", n.removeChild(t)
                }(), e.uiBackCompat !== !1 && ! function(e) {
                    var n = e.fn.position;
                    e.fn.position = function(i) {
                        if (!i || !i.offset) return n.call(this, i);
                        var r = i.offset.split(" "),
                            o = i.at.split(" ");
                        return 1 === r.length && (r[1] = r[0]), /^\d/.test(r[0]) && (r[0] = "+" + r[0]), /^\d/.test(r[1]) && (r[1] = "+" + r[1]), 1 === o.length && (/left|center|right/.test(o[0]) ? o[1] = "center" : (o[1] = o[0], o[0] = "center")), n.call(this, e.extend(i, { at: o[0] + r[0] + " " + o[1] + r[1], offset: t }))
                    }
                }(jQuery)
        }(jQuery),
        function(e) {
            e.widget("ui.draggable", e.ui.mouse, {
                version: "1.9.2",
                widgetEventPrefix: "drag",
                options: { addClasses: !0, appendTo: "parent", axis: !1, connectToSortable: !1, containment: !1, cursor: "auto", cursorAt: !1, grid: !1, handle: !1, helper: "original", iframeFix: !1, opacity: !1, refreshPositions: !1, revert: !1, revertDuration: 500, scope: "default", scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, snap: !1, snapMode: "both", snapTolerance: 20, stack: !1, zIndex: !1 },
                _create: function() { "original" != this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit() },
                _destroy: function() { this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy() },
                _mouseCapture: function(t) { var n = this.options; return this.helper || n.disabled || e(t.target).is(".ui-resizable-handle") ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(n.iframeFix === !0 ? "iframe" : n.iframeFix).each(function() { e('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({ width: this.offsetWidth + "px", height: this.offsetHeight + "px", position: "absolute", opacity: "0.001", zIndex: 1e3 }).css(e(this).offset()).appendTo("body") }), !0) : !1) },
                _mouseStart: function(t) { var n = this.options; return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }, e.extend(this.offset, { click: { left: t.pageX - this.offset.left, top: t.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, n.cursorAt && this._adjustOffsetFromHelper(n.cursorAt), n.containment && this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0) },
                _mouseDrag: function(t, n) {
                    if (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), !n) {
                        var i = this._uiHash();
                        if (this._trigger("drag", t, i) === !1) return this._mouseUp({}), !1;
                        this.position = i.position
                    }
                    return this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px"), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
                },
                _mouseStop: function(t) {
                    var n = !1;
                    e.ui.ddmanager && !this.options.dropBehaviour && (n = e.ui.ddmanager.drop(this, t)), this.dropped && (n = this.dropped, this.dropped = !1);
                    for (var i = this.element[0], r = !1; i && (i = i.parentNode);) i == document && (r = !0);
                    if (!r && "original" === this.options.helper) return !1;
                    if ("invalid" == this.options.revert && !n || "valid" == this.options.revert && n || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, n)) {
                        var o = this;
                        e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() { o._trigger("stop", t) !== !1 && o._clear() })
                    } else this._trigger("stop", t) !== !1 && this._clear();
                    return !1
                },
                _mouseUp: function(t) { return e("div.ui-draggable-iframeFix").each(function() { this.parentNode.removeChild(this) }), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), e.ui.mouse.prototype._mouseUp.call(this, t) },
                cancel: function() { return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this },
                _getHandle: function(t) { var n = this.options.handle && e(this.options.handle, this.element).length ? !1 : !0; return e(this.options.handle, this.element).find("*").andSelf().each(function() { this == t.target && (n = !0) }), n },
                _createHelper: function(t) {
                    var n = this.options,
                        i = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t])) : "clone" == n.helper ? this.element.clone().removeAttr("id") : this.element;
                    return i.parents("body").length || i.appendTo("parent" == n.appendTo ? this.element[0].parentNode : n.appendTo), i[0] == this.element[0] || /(fixed|absolute)/.test(i.css("position")) || i.css("position", "absolute"), i
                },
                _adjustOffsetFromHelper: function(t) { "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top) },
                _getParentOffset: function() { this.offsetParent = this.helper.offsetParent(); var t = this.offsetParent.offset(); return "absolute" == this.cssPosition && this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = { top: 0, left: 0 }), { top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) } },
                _getRelativeOffset: function() { if ("relative" == this.cssPosition) { var e = this.element.position(); return { top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft() } } return { top: 0, left: 0 } },
                _cacheMargins: function() { this.margins = { left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0 } },
                _cacheHelperProportions: function() { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } },
                _setContainment: function() {
                    var t = this.options;
                    if ("parent" == t.containment && (t.containment = this.helper[0].parentNode), ("document" == t.containment || "window" == t.containment) && (this.containment = ["document" == t.containment ? 0 : e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, "document" == t.containment ? 0 : e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, ("document" == t.containment ? 0 : e(window).scrollLeft()) + e("document" == t.containment ? document : window).width() - this.helperProportions.width - this.margins.left, ("document" == t.containment ? 0 : e(window).scrollTop()) + (e("document" == t.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(t.containment) || t.containment.constructor == Array) t.containment.constructor == Array && (this.containment = t.containment);
                    else {
                        var n = e(t.containment),
                            i = n[0];
                        if (!i) return;
                        var r = (n.offset(), "hidden" != e(i).css("overflow"));
                        this.containment = [(parseInt(e(i).css("borderLeftWidth"), 10) || 0) + (parseInt(e(i).css("paddingLeft"), 10) || 0), (parseInt(e(i).css("borderTopWidth"), 10) || 0) + (parseInt(e(i).css("paddingTop"), 10) || 0), (r ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(e(i).css("borderLeftWidth"), 10) || 0) - (parseInt(e(i).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (r ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(e(i).css("borderTopWidth"), 10) || 0) - (parseInt(e(i).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = n
                    }
                },
                _convertPositionTo: function(t, n) {
                    n || (n = this.position);
                    var i = "absolute" == t ? 1 : -1,
                        r = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent),
                        o = /(html|body)/i.test(r[0].tagName);
                    return { top: n.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : r.scrollTop()) * i, left: n.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : r.scrollLeft()) * i }
                },
                _generatePosition: function(t) {
                    var n = this.options,
                        i = "absolute" != this.cssPosition || this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                        r = /(html|body)/i.test(i[0].tagName),
                        o = t.pageX,
                        s = t.pageY;
                    if (this.originalPosition) {
                        var a;
                        if (this.containment) {
                            if (this.relative_container) {
                                var l = this.relative_container.offset();
                                a = [this.containment[0] + l.left, this.containment[1] + l.top, this.containment[2] + l.left, this.containment[3] + l.top]
                            } else a = this.containment;
                            t.pageX - this.offset.click.left < a[0] && (o = a[0] + this.offset.click.left), t.pageY - this.offset.click.top < a[1] && (s = a[1] + this.offset.click.top), t.pageX - this.offset.click.left > a[2] && (o = a[2] + this.offset.click.left), t.pageY - this.offset.click.top > a[3] && (s = a[3] + this.offset.click.top)
                        }
                        if (n.grid) {
                            var u = n.grid[1] ? this.originalPageY + Math.round((s - this.originalPageY) / n.grid[1]) * n.grid[1] : this.originalPageY;
                            s = a ? u - this.offset.click.top < a[1] || u - this.offset.click.top > a[3] ? u - this.offset.click.top < a[1] ? u + n.grid[1] : u - n.grid[1] : u : u;
                            var c = n.grid[0] ? this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0] : this.originalPageX;
                            o = a ? c - this.offset.click.left < a[0] || c - this.offset.click.left > a[2] ? c - this.offset.click.left < a[0] ? c + n.grid[0] : c - n.grid[0] : c : c
                        }
                    }
                    return { top: s - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : r ? 0 : i.scrollTop()), left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : r ? 0 : i.scrollLeft()) }
                },
                _clear: function() { this.helper.removeClass("ui-draggable-dragging"), this.helper[0] == this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1 },
                _trigger: function(t, n, i) { return i = i || this._uiHash(), e.ui.plugin.call(this, t, [n, i]), "drag" == t && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, n, i) },
                plugins: {},
                _uiHash: function() { return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs } }
            }), e.ui.plugin.add("draggable", "connectToSortable", {
                start: function(t, n) {
                    var i = e(this).data("draggable"),
                        r = i.options,
                        o = e.extend({}, n, { item: i.element });
                    i.sortables = [], e(r.connectToSortable).each(function() {
                        var n = e.data(this, "sortable");
                        n && !n.options.disabled && (i.sortables.push({ instance: n, shouldRevert: n.options.revert }), n.refreshPositions(), n._trigger("activate", t, o))
                    })
                },
                stop: function(t, n) {
                    var i = e(this).data("draggable"),
                        r = e.extend({}, n, { item: i.element });
                    e.each(i.sortables, function() { this.instance.isOver ? (this.instance.isOver = 0, i.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = !0), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, "original" == i.options.helper && this.instance.currentItem.css({ top: "auto", left: "auto" })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, r)) })
                },
                drag: function(t, n) {
                    var i = e(this).data("draggable"),
                        r = this;
                    e.each(i.sortables, function() {
                        var o = !1,
                            s = this;
                        this.instance.positionAbs = i.positionAbs, this.instance.helperProportions = i.helperProportions, this.instance.offset.click = i.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (o = !0, e.each(i.sortables, function() { return this.instance.positionAbs = i.positionAbs, this.instance.helperProportions = i.helperProportions, this.instance.offset.click = i.offset.click, this != s && this.instance._intersectsWith(this.instance.containerCache) && e.ui.contains(s.instance.element[0], this.instance.element[0]) && (o = !1), o })), o ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(r).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() { return n.helper[0] }, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = i.offset.click.top, this.instance.offset.click.left = i.offset.click.left, this.instance.offset.parent.left -= i.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= i.offset.parent.top - this.instance.offset.parent.top, i._trigger("toSortable", t), i.dropped = this.instance.element, i.currentItem = i.element, this.instance.fromOutside = i), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), i._trigger("fromSortable", t), i.dropped = !1)
                    })
                }
            }), e.ui.plugin.add("draggable", "cursor", {
                start: function() {
                    var t = e("body"),
                        n = e(this).data("draggable").options;
                    t.css("cursor") && (n._cursor = t.css("cursor")), t.css("cursor", n.cursor)
                },
                stop: function() {
                    var t = e(this).data("draggable").options;
                    t._cursor && e("body").css("cursor", t._cursor)
                }
            }), e.ui.plugin.add("draggable", "opacity", {
                start: function(t, n) {
                    var i = e(n.helper),
                        r = e(this).data("draggable").options;
                    i.css("opacity") && (r._opacity = i.css("opacity")), i.css("opacity", r.opacity)
                },
                stop: function(t, n) {
                    var i = e(this).data("draggable").options;
                    i._opacity && e(n.helper).css("opacity", i._opacity)
                }
            }), e.ui.plugin.add("draggable", "scroll", {
                start: function() {
                    var t = e(this).data("draggable");
                    t.scrollParent[0] != document && "HTML" != t.scrollParent[0].tagName && (t.overflowOffset = t.scrollParent.offset())
                },
                drag: function(t) {
                    var n = e(this).data("draggable"),
                        i = n.options,
                        r = !1;
                    n.scrollParent[0] != document && "HTML" != n.scrollParent[0].tagName ? (i.axis && "x" == i.axis || (n.overflowOffset.top + n.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? n.scrollParent[0].scrollTop = r = n.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - n.overflowOffset.top < i.scrollSensitivity && (n.scrollParent[0].scrollTop = r = n.scrollParent[0].scrollTop - i.scrollSpeed)), i.axis && "y" == i.axis || (n.overflowOffset.left + n.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? n.scrollParent[0].scrollLeft = r = n.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - n.overflowOffset.left < i.scrollSensitivity && (n.scrollParent[0].scrollLeft = r = n.scrollParent[0].scrollLeft - i.scrollSpeed))) : (i.axis && "x" == i.axis || (t.pageY - e(document).scrollTop() < i.scrollSensitivity ? r = e(document).scrollTop(e(document).scrollTop() - i.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < i.scrollSensitivity && (r = e(document).scrollTop(e(document).scrollTop() + i.scrollSpeed))), i.axis && "y" == i.axis || (t.pageX - e(document).scrollLeft() < i.scrollSensitivity ? r = e(document).scrollLeft(e(document).scrollLeft() - i.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < i.scrollSensitivity && (r = e(document).scrollLeft(e(document).scrollLeft() + i.scrollSpeed)))), r !== !1 && e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(n, t)
                }
            }), e.ui.plugin.add("draggable", "snap", {
                start: function() {
                    var t = e(this).data("draggable"),
                        n = t.options;
                    t.snapElements = [], e(n.snap.constructor != String ? n.snap.items || ":data(draggable)" : n.snap).each(function() {
                        var n = e(this),
                            i = n.offset();
                        this != t.element[0] && t.snapElements.push({ item: this, width: n.outerWidth(), height: n.outerHeight(), top: i.top, left: i.left })
                    })
                },
                drag: function(t, n) {
                    for (var i = e(this).data("draggable"), r = i.options, o = r.snapTolerance, s = n.offset.left, a = s + i.helperProportions.width, l = n.offset.top, u = l + i.helperProportions.height, c = i.snapElements.length - 1; c >= 0; c--) {
                        var h = i.snapElements[c].left,
                            d = h + i.snapElements[c].width,
                            f = i.snapElements[c].top,
                            p = f + i.snapElements[c].height;
                        if (s > h - o && d + o > s && l > f - o && p + o > l || s > h - o && d + o > s && u > f - o && p + o > u || a > h - o && d + o > a && l > f - o && p + o > l || a > h - o && d + o > a && u > f - o && p + o > u) {
                            if ("inner" != r.snapMode) {
                                var g = Math.abs(f - u) <= o,
                                    m = Math.abs(p - l) <= o,
                                    v = Math.abs(h - a) <= o,
                                    _ = Math.abs(d - s) <= o;
                                g && (n.position.top = i._convertPositionTo("relative", { top: f - i.helperProportions.height, left: 0 }).top - i.margins.top), m && (n.position.top = i._convertPositionTo("relative", { top: p, left: 0 }).top - i.margins.top), v && (n.position.left = i._convertPositionTo("relative", { top: 0, left: h - i.helperProportions.width }).left - i.margins.left), _ && (n.position.left = i._convertPositionTo("relative", { top: 0, left: d }).left - i.margins.left)
                            }
                            var y = g || m || v || _;
                            if ("outer" != r.snapMode) {
                                var g = Math.abs(f - l) <= o,
                                    m = Math.abs(p - u) <= o,
                                    v = Math.abs(h - s) <= o,
                                    _ = Math.abs(d - a) <= o;
                                g && (n.position.top = i._convertPositionTo("relative", { top: f, left: 0 }).top - i.margins.top), m && (n.position.top = i._convertPositionTo("relative", { top: p - i.helperProportions.height, left: 0 }).top - i.margins.top), v && (n.position.left = i._convertPositionTo("relative", { top: 0, left: h }).left - i.margins.left), _ && (n.position.left = i._convertPositionTo("relative", { top: 0, left: d - i.helperProportions.width }).left - i.margins.left)
                            }!i.snapElements[c].snapping && (g || m || v || _ || y) && i.options.snap.snap && i.options.snap.snap.call(i.element, t, e.extend(i._uiHash(), { snapItem: i.snapElements[c].item })), i.snapElements[c].snapping = g || m || v || _ || y
                        } else i.snapElements[c].snapping && i.options.snap.release && i.options.snap.release.call(i.element, t, e.extend(i._uiHash(), { snapItem: i.snapElements[c].item })), i.snapElements[c].snapping = !1
                    }
                }
            }), e.ui.plugin.add("draggable", "stack", {
                start: function() {
                    var t = e(this).data("draggable").options,
                        n = e.makeArray(e(t.stack)).sort(function(t, n) { return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(n).css("zIndex"), 10) || 0) });
                    if (n.length) {
                        var i = parseInt(n[0].style.zIndex) || 0;
                        e(n).each(function(e) { this.style.zIndex = i + e }), this[0].style.zIndex = i + n.length
                    }
                }
            }), e.ui.plugin.add("draggable", "zIndex", {
                start: function(t, n) {
                    var i = e(n.helper),
                        r = e(this).data("draggable").options;
                    i.css("zIndex") && (r._zIndex = i.css("zIndex")), i.css("zIndex", r.zIndex)
                },
                stop: function(t, n) {
                    var i = e(this).data("draggable").options;
                    i._zIndex && e(n.helper).css("zIndex", i._zIndex)
                }
            })
        }(jQuery),
        function(e) {
            e.widget("ui.droppable", {
                version: "1.9.2",
                widgetEventPrefix: "drop",
                options: { accept: "*", activeClass: !1, addClasses: !0, greedy: !1, hoverClass: !1, scope: "default", tolerance: "intersect" },
                _create: function() {
                    var t = this.options,
                        n = t.accept;
                    this.isover = 0, this.isout = 1, this.accept = e.isFunction(n) ? n : function(e) { return e.is(n) }, this.proportions = { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight }, e.ui.ddmanager.droppables[t.scope] = e.ui.ddmanager.droppables[t.scope] || [], e.ui.ddmanager.droppables[t.scope].push(this), t.addClasses && this.element.addClass("ui-droppable")
                },
                _destroy: function() {
                    for (var t = e.ui.ddmanager.droppables[this.options.scope], n = 0; n < t.length; n++) t[n] == this && t.splice(n, 1);
                    this.element.removeClass("ui-droppable ui-droppable-disabled")
                },
                _setOption: function(t, n) { "accept" == t && (this.accept = e.isFunction(n) ? n : function(e) { return e.is(n) }), e.Widget.prototype._setOption.apply(this, arguments) },
                _activate: function(t) {
                    var n = e.ui.ddmanager.current;
                    this.options.activeClass && this.element.addClass(this.options.activeClass), n && this._trigger("activate", t, this.ui(n))
                },
                _deactivate: function(t) {
                    var n = e.ui.ddmanager.current;
                    this.options.activeClass && this.element.removeClass(this.options.activeClass), n && this._trigger("deactivate", t, this.ui(n))
                },
                _over: function(t) {
                    var n = e.ui.ddmanager.current;
                    n && (n.currentItem || n.element)[0] != this.element[0] && this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(n)))
                },
                _out: function(t) {
                    var n = e.ui.ddmanager.current;
                    n && (n.currentItem || n.element)[0] != this.element[0] && this.accept.call(this.element[0], n.currentItem || n.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(n)))
                },
                _drop: function(t, n) {
                    var i = n || e.ui.ddmanager.current;
                    if (!i || (i.currentItem || i.element)[0] == this.element[0]) return !1;
                    var r = !1;
                    return this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function() {
                        var t = e.data(this, "droppable");
                        return t.options.greedy && !t.options.disabled && t.options.scope == i.options.scope && t.accept.call(t.element[0], i.currentItem || i.element) && e.ui.intersect(i, e.extend(t, { offset: t.element.offset() }), t.options.tolerance) ? (r = !0, !1) : void 0
                    }), r ? !1 : this.accept.call(this.element[0], i.currentItem || i.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(i)), this.element) : !1
                },
                ui: function(e) { return { draggable: e.currentItem || e.element, helper: e.helper, position: e.position, offset: e.positionAbs } }
            }), e.ui.intersect = function(t, n, i) {
                if (!n.offset) return !1;
                var r = (t.positionAbs || t.position.absolute).left,
                    o = r + t.helperProportions.width,
                    s = (t.positionAbs || t.position.absolute).top,
                    a = s + t.helperProportions.height,
                    l = n.offset.left,
                    u = l + n.proportions.width,
                    c = n.offset.top,
                    h = c + n.proportions.height;
                switch (i) {
                    case "fit":
                        return r >= l && u >= o && s >= c && h >= a;
                    case "intersect":
                        return l < r + t.helperProportions.width / 2 && o - t.helperProportions.width / 2 < u && c < s + t.helperProportions.height / 2 && a - t.helperProportions.height / 2 < h;
                    case "pointer":
                        var d = (t.positionAbs || t.position.absolute).left + (t.clickOffset || t.offset.click).left,
                            f = (t.positionAbs || t.position.absolute).top + (t.clickOffset || t.offset.click).top,
                            p = e.ui.isOver(f, d, c, l, n.proportions.height, n.proportions.width);
                        return p;
                    case "touch":
                        return (s >= c && h >= s || a >= c && h >= a || c > s && a > h) && (r >= l && u >= r || o >= l && u >= o || l > r && o > u);
                    default:
                        return !1
                }
            }, e.ui.ddmanager = {
                current: null,
                droppables: { "default": [] },
                prepareOffsets: function(t, n) {
                    var i = e.ui.ddmanager.droppables[t.options.scope] || [],
                        r = n ? n.type : null,
                        o = (t.currentItem || t.element).find(":data(droppable)").andSelf();
                    e: for (var s = 0; s < i.length; s++)
                        if (!(i[s].options.disabled || t && !i[s].accept.call(i[s].element[0], t.currentItem || t.element))) {
                            for (var a = 0; a < o.length; a++)
                                if (o[a] == i[s].element[0]) { i[s].proportions.height = 0; continue e }
                            i[s].visible = "none" != i[s].element.css("display"), i[s].visible && ("mousedown" == r && i[s]._activate.call(i[s], n), i[s].offset = i[s].element.offset(), i[s].proportions = { width: i[s].element[0].offsetWidth, height: i[s].element[0].offsetHeight })
                        }
                },
                drop: function(t, n) { var i = !1; return e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function() { this.options && (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance) && (i = this._drop.call(this, n) || i), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = 1, this.isover = 0, this._deactivate.call(this, n))) }), i },
                dragStart: function(t, n) { t.element.parentsUntil("body").bind("scroll.droppable", function() { t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n) }) },
                drag: function(t, n) {
                    t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, n), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function() {
                        if (!this.options.disabled && !this.greedyChild && this.visible) {
                            var i = e.ui.intersect(t, this, this.options.tolerance),
                                r = i || 1 != this.isover ? i && 0 == this.isover ? "isover" : null : "isout";
                            if (r) {
                                var o;
                                if (this.options.greedy) {
                                    var s = this.options.scope,
                                        a = this.element.parents(":data(droppable)").filter(function() { return e.data(this, "droppable").options.scope === s });
                                    a.length && (o = e.data(a[0], "droppable"), o.greedyChild = "isover" == r ? 1 : 0)
                                }
                                o && "isover" == r && (o.isover = 0, o.isout = 1, o._out.call(o, n)), this[r] = 1, this["isout" == r ? "isover" : "isout"] = 0, this["isover" == r ? "_over" : "_out"].call(this, n), o && "isout" == r && (o.isout = 0, o.isover = 1, o._over.call(o, n))
                            }
                        }
                    })
                },
                dragStop: function(t, n) { t.element.parentsUntil("body").unbind("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, n) }
            }
        }(jQuery),
        function(e) {
            e.widget("ui.resizable", e.ui.mouse, {
                version: "1.9.2",
                widgetEventPrefix: "resize",
                options: { alsoResize: !1, animate: !1, animateDuration: "slow", animateEasing: "swing", aspectRatio: !1, autoHide: !1, containment: !1, ghost: !1, grid: !1, handles: "e,s,se", helper: !1, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 1e3 },
                _create: function() {
                    var t = this,
                        n = this.options;
                    if (this.element.addClass("ui-resizable"), e.extend(this, { _aspectRatio: !!n.aspectRatio, aspectRatio: n.aspectRatio, originalElement: this.element, _proportionallyResizeElements: [], _helper: n.helper || n.ghost || n.animate ? n.helper || "ui-resizable-helper" : null }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({ position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left") })), this.element = this.element.parent().data("resizable", this.element.data("resizable")), this.elementIsWrapper = !0, this.element.css({ marginLeft: this.originalElement.css("marginLeft"), marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom") }), this.originalElement.css({ marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0 }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({ position: "static", zoom: 1, display: "block" })), this.originalElement.css({ margin: this.originalElement.css("margin") }), this._proportionallyResize()), this.handles = n.handles || (e(".ui-resizable-handle", this.element).length ? { n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw" } : "e,s,se"), this.handles.constructor == String) {
                        "all" == this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw");
                        var i = this.handles.split(",");
                        this.handles = {};
                        for (var r = 0; r < i.length; r++) {
                            var o = e.trim(i[r]),
                                s = "ui-resizable-" + o,
                                a = e('<div class="ui-resizable-handle ' + s + '"></div>');
                            a.css({ zIndex: n.zIndex }), "se" == o && a.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[o] = ".ui-resizable-" + o, this.element.append(a)
                        }
                    }
                    this._renderAxis = function(t) {
                        t = t || this.element;
                        for (var n in this.handles) {
                            if (this.handles[n].constructor == String && (this.handles[n] = e(this.handles[n], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                                var i = e(this.handles[n], this.element),
                                    r = 0;
                                r = /sw|ne|nw|se|n|s/.test(n) ? i.outerHeight() : i.outerWidth();
                                var o = ["padding", /ne|nw|n/.test(n) ? "Top" : /se|sw|s/.test(n) ? "Bottom" : /^e$/.test(n) ? "Right" : "Left"].join("");
                                t.css(o, r), this._proportionallyResize()
                            }
                            e(this.handles[n]).length
                        }
                    }, this._renderAxis(this.element), this._handles = e(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                        if (!t.resizing) {
                            if (this.className) var e = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                            t.axis = e && e[1] ? e[1] : "se"
                        }
                    }), n.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function() { n.disabled || (e(this).removeClass("ui-resizable-autohide"), t._handles.show()) }).mouseleave(function() { n.disabled || t.resizing || (e(this).addClass("ui-resizable-autohide"), t._handles.hide()) })), this._mouseInit()
                },
                _destroy: function() {
                    this._mouseDestroy();
                    var t = function(t) { e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove() };
                    if (this.elementIsWrapper) {
                        t(this.element);
                        var n = this.element;
                        this.originalElement.css({ position: n.css("position"), width: n.outerWidth(), height: n.outerHeight(), top: n.css("top"), left: n.css("left") }).insertAfter(n), n.remove()
                    }
                    return this.originalElement.css("resize", this.originalResizeStyle), t(this.originalElement), this
                },
                _mouseCapture: function(t) { var n = !1; for (var i in this.handles) e(this.handles[i])[0] == t.target && (n = !0); return !this.options.disabled && n },
                _mouseStart: function(n) {
                    var i = this.options,
                        r = this.element.position(),
                        o = this.element;
                    this.resizing = !0, this.documentScroll = { top: e(document).scrollTop(), left: e(document).scrollLeft() }, (o.is(".ui-draggable") || /absolute/.test(o.css("position"))) && o.css({ position: "absolute", top: r.top, left: r.left }), this._renderProxy();
                    var s = t(this.helper.css("left")),
                        a = t(this.helper.css("top"));
                    i.containment && (s += e(i.containment).scrollLeft() || 0, a += e(i.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = { left: s, top: a }, this.size = this._helper ? { width: o.outerWidth(), height: o.outerHeight() } : { width: o.width(), height: o.height() }, this.originalSize = this._helper ? { width: o.outerWidth(), height: o.outerHeight() } : { width: o.width(), height: o.height() }, this.originalPosition = { left: s, top: a }, this.sizeDiff = { width: o.outerWidth() - o.width(), height: o.outerHeight() - o.height() }, this.originalMousePosition = { left: n.pageX, top: n.pageY }, this.aspectRatio = "number" == typeof i.aspectRatio ? i.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
                    var l = e(".ui-resizable-" + this.axis).css("cursor");
                    return e("body").css("cursor", "auto" == l ? this.axis + "-resize" : l), o.addClass("ui-resizable-resizing"), this._propagate("start", n), !0
                },
                _mouseDrag: function(e) {
                    var t = this.helper,
                        n = (this.options, this.originalMousePosition),
                        i = this.axis,
                        r = e.pageX - n.left || 0,
                        o = e.pageY - n.top || 0,
                        s = this._change[i];
                    if (!s) return !1;
                    var a = s.apply(this, [e, r, o]);
                    return this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (a = this._updateRatio(a, e)), a = this._respectSize(a, e), this._propagate("resize", e), t.css({ top: this.position.top + "px", left: this.position.left + "px", width: this.size.width + "px", height: this.size.height + "px" }), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), this._updateCache(a), this._trigger("resize", e, this.ui()), !1
                },
                _mouseStop: function(t) {
                    this.resizing = !1;
                    var n = this.options,
                        i = this;
                    if (this._helper) {
                        var r = this._proportionallyResizeElements,
                            o = r.length && /textarea/i.test(r[0].nodeName),
                            s = o && e.ui.hasScroll(r[0], "left") ? 0 : i.sizeDiff.height,
                            a = o ? 0 : i.sizeDiff.width,
                            l = { width: i.helper.width() - a, height: i.helper.height() - s },
                            u = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                            c = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
                        n.animate || this.element.css(e.extend(l, { top: c, left: u })), i.helper.height(i.size.height), i.helper.width(i.size.width), this._helper && !n.animate && this._proportionallyResize()
                    }
                    return e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
                },
                _updateVirtualBoundaries: function(e) {
                    var t, i, r, o, s, a = this.options;
                    s = { minWidth: n(a.minWidth) ? a.minWidth : 0, maxWidth: n(a.maxWidth) ? a.maxWidth : 1 / 0, minHeight: n(a.minHeight) ? a.minHeight : 0, maxHeight: n(a.maxHeight) ? a.maxHeight : 1 / 0 }, (this._aspectRatio || e) && (t = s.minHeight * this.aspectRatio, r = s.minWidth / this.aspectRatio, i = s.maxHeight * this.aspectRatio, o = s.maxWidth / this.aspectRatio, t > s.minWidth && (s.minWidth = t), r > s.minHeight && (s.minHeight = r), i < s.maxWidth && (s.maxWidth = i), o < s.maxHeight && (s.maxHeight = o)), this._vBoundaries = s
                },
                _updateCache: function(e) {
                    this.options;
                    this.offset = this.helper.offset(), n(e.left) && (this.position.left = e.left), n(e.top) && (this.position.top = e.top), n(e.height) && (this.size.height = e.height), n(e.width) && (this.size.width = e.width)
                },
                _updateRatio: function(e) {
                    var t = (this.options, this.position),
                        i = this.size,
                        r = this.axis;
                    return n(e.height) ? e.width = e.height * this.aspectRatio : n(e.width) && (e.height = e.width / this.aspectRatio), "sw" == r && (e.left = t.left + (i.width - e.width), e.top = null), "nw" == r && (e.top = t.top + (i.height - e.height), e.left = t.left + (i.width - e.width)), e
                },
                _respectSize: function(e, t) {
                    var i = (this.helper, this._vBoundaries),
                        r = (this._aspectRatio || t.shiftKey, this.axis),
                        o = n(e.width) && i.maxWidth && i.maxWidth < e.width,
                        s = n(e.height) && i.maxHeight && i.maxHeight < e.height,
                        a = n(e.width) && i.minWidth && i.minWidth > e.width,
                        l = n(e.height) && i.minHeight && i.minHeight > e.height;
                    a && (e.width = i.minWidth), l && (e.height = i.minHeight), o && (e.width = i.maxWidth), s && (e.height = i.maxHeight);
                    var u = this.originalPosition.left + this.originalSize.width,
                        c = this.position.top + this.size.height,
                        h = /sw|nw|w/.test(r),
                        d = /nw|ne|n/.test(r);
                    a && h && (e.left = u - i.minWidth), o && h && (e.left = u - i.maxWidth), l && d && (e.top = c - i.minHeight), s && d && (e.top = c - i.maxHeight);
                    var f = !e.width && !e.height;
                    return f && !e.left && e.top ? e.top = null : f && !e.top && e.left && (e.left = null), e
                },
                _proportionallyResize: function() {
                    this.options;
                    if (this._proportionallyResizeElements.length)
                        for (var t = this.helper || this.element, n = 0; n < this._proportionallyResizeElements.length; n++) {
                            var i = this._proportionallyResizeElements[n];
                            if (!this.borderDif) {
                                var r = [i.css("borderTopWidth"), i.css("borderRightWidth"), i.css("borderBottomWidth"), i.css("borderLeftWidth")],
                                    o = [i.css("paddingTop"), i.css("paddingRight"), i.css("paddingBottom"), i.css("paddingLeft")];
                                this.borderDif = e.map(r, function(e, t) {
                                    var n = parseInt(e, 10) || 0,
                                        i = parseInt(o[t], 10) || 0;
                                    return n + i
                                })
                            }
                            i.css({ height: t.height() - this.borderDif[0] - this.borderDif[2] || 0, width: t.width() - this.borderDif[1] - this.borderDif[3] || 0 })
                        }
                },
                _renderProxy: function() {
                    var t = this.element,
                        n = this.options;
                    if (this.elementOffset = t.offset(), this._helper) {
                        this.helper = this.helper || e('<div style="overflow:hidden;"></div>');
                        var i = e.ui.ie6 ? 1 : 0,
                            r = e.ui.ie6 ? 2 : -1;
                        this.helper.addClass(this._helper).css({ width: this.element.outerWidth() + r, height: this.element.outerHeight() + r, position: "absolute", left: this.elementOffset.left - i + "px", top: this.elementOffset.top - i + "px", zIndex: ++n.zIndex }), this.helper.appendTo("body").disableSelection()
                    } else this.helper = this.element
                },
                _change: {
                    e: function(e, t) { return { width: this.originalSize.width + t } },
                    w: function(e, t) {
                        var n = (this.options, this.originalSize),
                            i = this.originalPosition;
                        return { left: i.left + t, width: n.width - t }
                    },
                    n: function(e, t, n) {
                        var i = (this.options, this.originalSize),
                            r = this.originalPosition;
                        return { top: r.top + n, height: i.height - n }
                    },
                    s: function(e, t, n) { return { height: this.originalSize.height + n } },
                    se: function(t, n, i) { return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, n, i])) },
                    sw: function(t, n, i) { return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, n, i])) },
                    ne: function(t, n, i) { return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, n, i])) },
                    nw: function(t, n, i) { return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, n, i])) }
                },
                _propagate: function(t, n) { e.ui.plugin.call(this, t, [n, this.ui()]), "resize" != t && this._trigger(t, n, this.ui()) },
                plugins: {},
                ui: function() { return { originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition } }
            }), e.ui.plugin.add("resizable", "alsoResize", {
                start: function() {
                    var t = e(this).data("resizable"),
                        n = t.options,
                        i = function(t) {
                            e(t).each(function() {
                                var t = e(this);
                                t.data("resizable-alsoresize", { width: parseInt(t.width(), 10), height: parseInt(t.height(), 10), left: parseInt(t.css("left"), 10), top: parseInt(t.css("top"), 10) })
                            })
                        };
                    "object" != typeof n.alsoResize || n.alsoResize.parentNode ? i(n.alsoResize) : n.alsoResize.length ? (n.alsoResize = n.alsoResize[0], i(n.alsoResize)) : e.each(n.alsoResize, function(e) { i(e) })
                },
                resize: function(t, n) {
                    var i = e(this).data("resizable"),
                        r = i.options,
                        o = i.originalSize,
                        s = i.originalPosition,
                        a = { height: i.size.height - o.height || 0, width: i.size.width - o.width || 0, top: i.position.top - s.top || 0, left: i.position.left - s.left || 0 },
                        l = function(t, i) {
                            e(t).each(function() {
                                var t = e(this),
                                    r = e(this).data("resizable-alsoresize"),
                                    o = {},
                                    s = i && i.length ? i : t.parents(n.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                                e.each(s, function(e, t) {
                                    var n = (r[t] || 0) + (a[t] || 0);
                                    n && n >= 0 && (o[t] = n || null)
                                }), t.css(o)
                            })
                        };
                    "object" != typeof r.alsoResize || r.alsoResize.nodeType ? l(r.alsoResize) : e.each(r.alsoResize, function(e, t) { l(e, t) })
                },
                stop: function() { e(this).removeData("resizable-alsoresize") }
            }), e.ui.plugin.add("resizable", "animate", {
                stop: function(t) {
                    var n = e(this).data("resizable"),
                        i = n.options,
                        r = n._proportionallyResizeElements,
                        o = r.length && /textarea/i.test(r[0].nodeName),
                        s = o && e.ui.hasScroll(r[0], "left") ? 0 : n.sizeDiff.height,
                        a = o ? 0 : n.sizeDiff.width,
                        l = { width: n.size.width - a, height: n.size.height - s },
                        u = parseInt(n.element.css("left"), 10) + (n.position.left - n.originalPosition.left) || null,
                        c = parseInt(n.element.css("top"), 10) + (n.position.top - n.originalPosition.top) || null;
                    n.element.animate(e.extend(l, c && u ? { top: c, left: u } : {}), {
                        duration: i.animateDuration,
                        easing: i.animateEasing,
                        step: function() {
                            var i = { width: parseInt(n.element.css("width"), 10), height: parseInt(n.element.css("height"), 10), top: parseInt(n.element.css("top"), 10), left: parseInt(n.element.css("left"), 10) };
                            r && r.length && e(r[0]).css({ width: i.width, height: i.height }), n._updateCache(i), n._propagate("resize", t)
                        }
                    })
                }
            }), e.ui.plugin.add("resizable", "containment", {
                start: function() {
                    var n = e(this).data("resizable"),
                        i = n.options,
                        r = n.element,
                        o = i.containment,
                        s = o instanceof e ? o.get(0) : /parent/.test(o) ? r.parent().get(0) : o;
                    if (s)
                        if (n.containerElement = e(s), /document/.test(o) || o == document) n.containerOffset = { left: 0, top: 0 }, n.containerPosition = { left: 0, top: 0 }, n.parentData = { element: e(document), left: 0, top: 0, width: e(document).width(), height: e(document).height() || document.body.parentNode.scrollHeight };
                        else {
                            var a = e(s),
                                l = [];
                            e(["Top", "Right", "Left", "Bottom"]).each(function(e, n) { l[e] = t(a.css("padding" + n)) }), n.containerOffset = a.offset(), n.containerPosition = a.position(), n.containerSize = { height: a.innerHeight() - l[3], width: a.innerWidth() - l[1] };
                            var u = n.containerOffset,
                                c = n.containerSize.height,
                                h = n.containerSize.width,
                                d = e.ui.hasScroll(s, "left") ? s.scrollWidth : h,
                                f = e.ui.hasScroll(s) ? s.scrollHeight : c;
                            n.parentData = { element: s, left: u.left, top: u.top, width: d, height: f }
                        }
                },
                resize: function(t) {
                    var n = e(this).data("resizable"),
                        i = n.options,
                        r = (n.containerSize, n.containerOffset),
                        o = (n.size, n.position),
                        s = n._aspectRatio || t.shiftKey,
                        a = { top: 0, left: 0 },
                        l = n.containerElement;
                    l[0] != document && /static/.test(l.css("position")) && (a = r), o.left < (n._helper ? r.left : 0) && (n.size.width = n.size.width + (n._helper ? n.position.left - r.left : n.position.left - a.left), s && (n.size.height = n.size.width / n.aspectRatio), n.position.left = i.helper ? r.left : 0), o.top < (n._helper ? r.top : 0) && (n.size.height = n.size.height + (n._helper ? n.position.top - r.top : n.position.top), s && (n.size.width = n.size.height * n.aspectRatio), n.position.top = n._helper ? r.top : 0), n.offset.left = n.parentData.left + n.position.left, n.offset.top = n.parentData.top + n.position.top;
                    var u = Math.abs((n._helper ? n.offset.left - a.left : n.offset.left - a.left) + n.sizeDiff.width),
                        c = Math.abs((n._helper ? n.offset.top - a.top : n.offset.top - r.top) + n.sizeDiff.height),
                        h = n.containerElement.get(0) == n.element.parent().get(0),
                        d = /relative|absolute/.test(n.containerElement.css("position"));
                    h && d && (u -= n.parentData.left), u + n.size.width >= n.parentData.width && (n.size.width = n.parentData.width - u, s && (n.size.height = n.size.width / n.aspectRatio)), c + n.size.height >= n.parentData.height && (n.size.height = n.parentData.height - c, s && (n.size.width = n.size.height * n.aspectRatio))
                },
                stop: function() {
                    var t = e(this).data("resizable"),
                        n = t.options,
                        i = (t.position, t.containerOffset),
                        r = t.containerPosition,
                        o = t.containerElement,
                        s = e(t.helper),
                        a = s.offset(),
                        l = s.outerWidth() - t.sizeDiff.width,
                        u = s.outerHeight() - t.sizeDiff.height;
                    t._helper && !n.animate && /relative/.test(o.css("position")) && e(this).css({ left: a.left - r.left - i.left, width: l, height: u }), t._helper && !n.animate && /static/.test(o.css("position")) && e(this).css({ left: a.left - r.left - i.left, width: l, height: u })
                }
            }), e.ui.plugin.add("resizable", "ghost", {
                start: function() {
                    var t = e(this).data("resizable"),
                        n = t.options,
                        i = t.size;
                    t.ghost = t.originalElement.clone(), t.ghost.css({ opacity: .25, display: "block", position: "relative", height: i.height, width: i.width, margin: 0, left: 0, top: 0 }).addClass("ui-resizable-ghost").addClass("string" == typeof n.ghost ? n.ghost : ""), t.ghost.appendTo(t.helper)
                },
                resize: function() {
                    {
                        var t = e(this).data("resizable");
                        t.options
                    }
                    t.ghost && t.ghost.css({ position: "relative", height: t.size.height, width: t.size.width })
                },
                stop: function() {
                    {
                        var t = e(this).data("resizable");
                        t.options
                    }
                    t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
                }
            }), e.ui.plugin.add("resizable", "grid", {
                resize: function(t) {
                    {
                        var n = e(this).data("resizable"),
                            i = n.options,
                            r = n.size,
                            o = n.originalSize,
                            s = n.originalPosition,
                            a = n.axis;
                        i._aspectRatio || t.shiftKey
                    }
                    i.grid = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid;
                    var l = Math.round((r.width - o.width) / (i.grid[0] || 1)) * (i.grid[0] || 1),
                        u = Math.round((r.height - o.height) / (i.grid[1] || 1)) * (i.grid[1] || 1);
                    /^(se|s|e)$/.test(a) ? (n.size.width = o.width + l, n.size.height = o.height + u) : /^(ne)$/.test(a) ? (n.size.width = o.width + l, n.size.height = o.height + u, n.position.top = s.top - u) : /^(sw)$/.test(a) ? (n.size.width = o.width + l, n.size.height = o.height + u, n.position.left = s.left - l) : (n.size.width = o.width + l, n.size.height = o.height + u, n.position.top = s.top - u, n.position.left = s.left - l)
                }
            });
            var t = function(e) { return parseInt(e, 10) || 0 },
                n = function(e) { return !isNaN(parseInt(e, 10)) }
        }(jQuery),
        function(e) {
            e.widget("ui.selectable", e.ui.mouse, {
                version: "1.9.2",
                options: { appendTo: "body", autoRefresh: !0, distance: 0, filter: "*", tolerance: "touch" },
                _create: function() {
                    var t = this;
                    this.element.addClass("ui-selectable"), this.dragged = !1;
                    var n;
                    this.refresh = function() {
                        n = e(t.options.filter, t.element[0]), n.addClass("ui-selectee"), n.each(function() {
                            var t = e(this),
                                n = t.offset();
                            e.data(this, "selectable-item", { element: this, $element: t, left: n.left, top: n.top, right: n.left + t.outerWidth(), bottom: n.top + t.outerHeight(), startselected: !1, selected: t.hasClass("ui-selected"), selecting: t.hasClass("ui-selecting"), unselecting: t.hasClass("ui-unselecting") })
                        })
                    }, this.refresh(), this.selectees = n.addClass("ui-selectee"), this._mouseInit(), this.helper = e("<div class='ui-selectable-helper'></div>")
                },
                _destroy: function() { this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy() },
                _mouseStart: function(t) {
                    var n = this;
                    if (this.opos = [t.pageX, t.pageY], !this.options.disabled) {
                        var i = this.options;
                        this.selectees = e(i.filter, this.element[0]), this._trigger("start", t), e(i.appendTo).append(this.helper), this.helper.css({ left: t.clientX, top: t.clientY, width: 0, height: 0 }), i.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                            var i = e.data(this, "selectable-item");
                            i.startselected = !0, t.metaKey || t.ctrlKey || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, n._trigger("unselecting", t, { unselecting: i.element }))
                        }), e(t.target).parents().andSelf().each(function() { var i = e.data(this, "selectable-item"); if (i) { var r = !t.metaKey && !t.ctrlKey || !i.$element.hasClass("ui-selected"); return i.$element.removeClass(r ? "ui-unselecting" : "ui-selected").addClass(r ? "ui-selecting" : "ui-unselecting"), i.unselecting = !r, i.selecting = r, i.selected = r, r ? n._trigger("selecting", t, { selecting: i.element }) : n._trigger("unselecting", t, { unselecting: i.element }), !1 } })
                    }
                },
                _mouseDrag: function(t) {
                    var n = this;
                    if (this.dragged = !0, !this.options.disabled) {
                        var i = this.options,
                            r = this.opos[0],
                            o = this.opos[1],
                            s = t.pageX,
                            a = t.pageY;
                        if (r > s) {
                            var l = s;
                            s = r, r = l
                        }
                        if (o > a) {
                            var l = a;
                            a = o, o = l
                        }
                        return this.helper.css({ left: r, top: o, width: s - r, height: a - o }), this.selectees.each(function() { var l = e.data(this, "selectable-item"); if (l && l.element != n.element[0]) { var u = !1; "touch" == i.tolerance ? u = !(l.left > s || l.right < r || l.top > a || l.bottom < o) : "fit" == i.tolerance && (u = l.left > r && l.right < s && l.top > o && l.bottom < a), u ? (l.selected && (l.$element.removeClass("ui-selected"), l.selected = !1), l.unselecting && (l.$element.removeClass("ui-unselecting"), l.unselecting = !1), l.selecting || (l.$element.addClass("ui-selecting"), l.selecting = !0, n._trigger("selecting", t, { selecting: l.element }))) : (l.selecting && ((t.metaKey || t.ctrlKey) && l.startselected ? (l.$element.removeClass("ui-selecting"), l.selecting = !1, l.$element.addClass("ui-selected"), l.selected = !0) : (l.$element.removeClass("ui-selecting"), l.selecting = !1, l.startselected && (l.$element.addClass("ui-unselecting"), l.unselecting = !0), n._trigger("unselecting", t, { unselecting: l.element }))), l.selected && (t.metaKey || t.ctrlKey || l.startselected || (l.$element.removeClass("ui-selected"), l.selected = !1, l.$element.addClass("ui-unselecting"), l.unselecting = !0, n._trigger("unselecting", t, { unselecting: l.element })))) } }), !1
                    }
                },
                _mouseStop: function(t) {
                    var n = this;
                    this.dragged = !1;
                    this.options;
                    return e(".ui-unselecting", this.element[0]).each(function() {
                        var i = e.data(this, "selectable-item");
                        i.$element.removeClass("ui-unselecting"), i.unselecting = !1, i.startselected = !1, n._trigger("unselected", t, { unselected: i.element })
                    }), e(".ui-selecting", this.element[0]).each(function() {
                        var i = e.data(this, "selectable-item");
                        i.$element.removeClass("ui-selecting").addClass("ui-selected"), i.selecting = !1, i.selected = !0, i.startselected = !0, n._trigger("selected", t, { selected: i.element })
                    }), this._trigger("stop", t), this.helper.remove(), !1
                }
            })
        }(jQuery),
        function(e) {
            e.widget("ui.sortable", e.ui.mouse, {
                version: "1.9.2",
                widgetEventPrefix: "sort",
                ready: !1,
                options: { appendTo: "parent", axis: !1, connectWith: !1, containment: !1, cursor: "auto", cursorAt: !1, dropOnEmpty: !0, forcePlaceholderSize: !1, forceHelperSize: !1, grid: !1, handle: !1, helper: "original", items: "> *", opacity: !1, placeholder: !1, revert: !1, scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1e3 },
                _create: function() {
                    var e = this.options;
                    this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === e.axis || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
                },
                _destroy: function() { this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy(); for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item"); return this },
                _setOption: function(t, n) { "disabled" === t ? (this.options[t] = n, this.widget().toggleClass("ui-sortable-disabled", !!n)) : e.Widget.prototype._setOption.apply(this, arguments) },
                _mouseCapture: function(t, n) {
                    var i = this;
                    if (this.reverting) return !1;
                    if (this.options.disabled || "static" == this.options.type) return !1;
                    this._refreshItems(t); {
                        var r = null;
                        e(t.target).parents().each(function() { return e.data(this, i.widgetName + "-item") == i ? (r = e(this), !1) : void 0 })
                    }
                    if (e.data(t.target, i.widgetName + "-item") == i && (r = e(t.target)), !r) return !1;
                    if (this.options.handle && !n) { var o = !1; if (e(this.options.handle, r).find("*").andSelf().each(function() { this == t.target && (o = !0) }), !o) return !1 }
                    return this.currentItem = r, this._removeCurrentsFromItems(), !0
                },
                _mouseStart: function(t, n, i) {
                    var r = this.options;
                    if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }, e.extend(this.offset, { click: { left: t.pageX - this.offset.left, top: t.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, r.cursorAt && this._adjustOffsetFromHelper(r.cursorAt), this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] }, this.helper[0] != this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), r.containment && this._setContainment(), r.cursor && (e("body").css("cursor") && (this._storedCursor = e("body").css("cursor")), e("body").css("cursor", r.cursor)), r.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", r.opacity)), r.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", r.zIndex)), this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !i)
                        for (var o = this.containers.length - 1; o >= 0; o--) this.containers[o]._trigger("activate", t, this._uiHash(this));
                    return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !r.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
                },
                _mouseDrag: function(t) {
                    if (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll) {
                        var n = this.options,
                            i = !1;
                        this.scrollParent[0] != document && "HTML" != this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < n.scrollSensitivity ? this.scrollParent[0].scrollTop = i = this.scrollParent[0].scrollTop + n.scrollSpeed : t.pageY - this.overflowOffset.top < n.scrollSensitivity && (this.scrollParent[0].scrollTop = i = this.scrollParent[0].scrollTop - n.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < n.scrollSensitivity ? this.scrollParent[0].scrollLeft = i = this.scrollParent[0].scrollLeft + n.scrollSpeed : t.pageX - this.overflowOffset.left < n.scrollSensitivity && (this.scrollParent[0].scrollLeft = i = this.scrollParent[0].scrollLeft - n.scrollSpeed)) : (t.pageY - e(document).scrollTop() < n.scrollSensitivity ? i = e(document).scrollTop(e(document).scrollTop() - n.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < n.scrollSensitivity && (i = e(document).scrollTop(e(document).scrollTop() + n.scrollSpeed)), t.pageX - e(document).scrollLeft() < n.scrollSensitivity ? i = e(document).scrollLeft(e(document).scrollLeft() - n.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < n.scrollSensitivity && (i = e(document).scrollLeft(e(document).scrollLeft() + n.scrollSpeed))), i !== !1 && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)
                    }
                    this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" == this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" == this.options.axis || (this.helper[0].style.top = this.position.top + "px");
                    for (var r = this.items.length - 1; r >= 0; r--) {
                        var o = this.items[r],
                            s = o.item[0],
                            a = this._intersectsWithPointer(o);
                        if (a && o.instance === this.currentContainer && s != this.currentItem[0] && this.placeholder[1 == a ? "next" : "prev"]()[0] != s && !e.contains(this.placeholder[0], s) && ("semi-dynamic" == this.options.type ? !e.contains(this.element[0], s) : !0)) {
                            if (this.direction = 1 == a ? "down" : "up", "pointer" != this.options.tolerance && !this._intersectsWithSides(o)) break;
                            this._rearrange(t, o), this._trigger("change", t, this._uiHash());
                            break
                        }
                    }
                    return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
                },
                _mouseStop: function(t, n) {
                    if (t) {
                        if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
                            var i = this,
                                r = this.placeholder.offset();
                            this.reverting = !0, e(this.helper).animate({ left: r.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft), top: r.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop) }, parseInt(this.options.revert, 10) || 500, function() { i._clear(t) })
                        } else this._clear(t, n);
                        return !1
                    }
                },
                cancel: function() { if (this.dragging) { this._mouseUp({ target: null }), "original" == this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show(); for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0) } return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" != this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), e.extend(this, { helper: null, dragging: !1, reverting: !1, _noFinalSort: null }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), this },
                serialize: function(t) {
                    var n = this._getItemsAsjQuery(t && t.connected),
                        i = [];
                    return t = t || {}, e(n).each(function() {
                        var n = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[-=_](.+)/);
                        n && i.push((t.key || n[1] + "[]") + "=" + (t.key && t.expression ? n[1] : n[2]))
                    }), !i.length && t.key && i.push(t.key + "="), i.join("&")
                },
                toArray: function(t) {
                    var n = this._getItemsAsjQuery(t && t.connected),
                        i = [];
                    return t = t || {}, n.each(function() { i.push(e(t.item || this).attr(t.attribute || "id") || "") }), i
                },
                _intersectsWith: function(e) {
                    var t = this.positionAbs.left,
                        n = t + this.helperProportions.width,
                        i = this.positionAbs.top,
                        r = i + this.helperProportions.height,
                        o = e.left,
                        s = o + e.width,
                        a = e.top,
                        l = a + e.height,
                        u = this.offset.click.top,
                        c = this.offset.click.left,
                        h = i + u > a && l > i + u && t + c > o && s > t + c;
                    return "pointer" == this.options.tolerance || this.options.forcePointerForContainers || "pointer" != this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? h : o < t + this.helperProportions.width / 2 && n - this.helperProportions.width / 2 < s && a < i + this.helperProportions.height / 2 && r - this.helperProportions.height / 2 < l
                },
                _intersectsWithPointer: function(t) {
                    var n = "x" === this.options.axis || e.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                        i = "y" === this.options.axis || e.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                        r = n && i,
                        o = this._getDragVerticalDirection(),
                        s = this._getDragHorizontalDirection();
                    return r ? this.floating ? s && "right" == s || "down" == o ? 2 : 1 : o && ("down" == o ? 2 : 1) : !1
                },
                _intersectsWithSides: function(t) {
                    var n = e.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                        i = e.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                        r = this._getDragVerticalDirection(),
                        o = this._getDragHorizontalDirection();
                    return this.floating && o ? "right" == o && i || "left" == o && !i : r && ("down" == r && n || "up" == r && !n)
                },
                _getDragVerticalDirection: function() { var e = this.positionAbs.top - this.lastPositionAbs.top; return 0 != e && (e > 0 ? "down" : "up") },
                _getDragHorizontalDirection: function() { var e = this.positionAbs.left - this.lastPositionAbs.left; return 0 != e && (e > 0 ? "right" : "left") },
                refresh: function(e) { return this._refreshItems(e), this.refreshPositions(), this },
                _connectWith: function() { var e = this.options; return e.connectWith.constructor == String ? [e.connectWith] : e.connectWith },
                _getItemsAsjQuery: function(t) {
                    var n = [],
                        i = [],
                        r = this._connectWith();
                    if (r && t)
                        for (var o = r.length - 1; o >= 0; o--)
                            for (var s = e(r[o]), a = s.length - 1; a >= 0; a--) {
                                var l = e.data(s[a], this.widgetName);
                                l && l != this && !l.options.disabled && i.push([e.isFunction(l.options.items) ? l.options.items.call(l.element) : e(l.options.items, l.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), l])
                            }
                    i.push([e.isFunction(this.options.items) ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
                    for (var o = i.length - 1; o >= 0; o--) i[o][0].each(function() { n.push(this) });
                    return e(n)
                },
                _removeCurrentsFromItems: function() {
                    var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
                    this.items = e.grep(this.items, function(e) {
                        for (var n = 0; n < t.length; n++)
                            if (t[n] == e.item[0]) return !1;
                        return !0
                    })
                },
                _refreshItems: function(t) {
                    this.items = [], this.containers = [this];
                    var n = this.items,
                        i = [
                            [e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, { item: this.currentItem }) : e(this.options.items, this.element), this]
                        ],
                        r = this._connectWith();
                    if (r && this.ready)
                        for (var o = r.length - 1; o >= 0; o--)
                            for (var s = e(r[o]), a = s.length - 1; a >= 0; a--) {
                                var l = e.data(s[a], this.widgetName);
                                l && l != this && !l.options.disabled && (i.push([e.isFunction(l.options.items) ? l.options.items.call(l.element[0], t, { item: this.currentItem }) : e(l.options.items, l.element), l]), this.containers.push(l))
                            }
                    for (var o = i.length - 1; o >= 0; o--)
                        for (var u = i[o][1], c = i[o][0], a = 0, h = c.length; h > a; a++) {
                            var d = e(c[a]);
                            d.data(this.widgetName + "-item", u), n.push({ item: d, instance: u, width: 0, height: 0, left: 0, top: 0 })
                        }
                },
                refreshPositions: function(t) {
                    this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                    for (var n = this.items.length - 1; n >= 0; n--) {
                        var i = this.items[n];
                        if (i.instance == this.currentContainer || !this.currentContainer || i.item[0] == this.currentItem[0]) {
                            var r = this.options.toleranceElement ? e(this.options.toleranceElement, i.item) : i.item;
                            t || (i.width = r.outerWidth(), i.height = r.outerHeight());
                            var o = r.offset();
                            i.left = o.left, i.top = o.top
                        }
                    }
                    if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                    else
                        for (var n = this.containers.length - 1; n >= 0; n--) {
                            var o = this.containers[n].element.offset();
                            this.containers[n].containerCache.left = o.left, this.containers[n].containerCache.top = o.top, this.containers[n].containerCache.width = this.containers[n].element.outerWidth(), this.containers[n].containerCache.height = this.containers[n].element.outerHeight()
                        }
                    return this
                },
                _createPlaceholder: function(t) {
                    t = t || this;
                    var n = t.options;
                    if (!n.placeholder || n.placeholder.constructor == String) {
                        var i = n.placeholder;
                        n.placeholder = {
                            element: function() { var n = e(document.createElement(t.currentItem[0].nodeName)).addClass(i || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0]; return i || (n.style.visibility = "hidden"), n },
                            update: function(e, r) {
                                (!i || n.forcePlaceholderSize) && (r.height() || r.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), r.width() || r.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                            }
                        }
                    }
                    t.placeholder = e(n.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), n.placeholder.update(t, t.placeholder)
                },
                _contactContainers: function(t) {
                    for (var n = null, i = null, r = this.containers.length - 1; r >= 0; r--)
                        if (!e.contains(this.currentItem[0], this.containers[r].element[0]))
                            if (this._intersectsWith(this.containers[r].containerCache)) {
                                if (n && e.contains(this.containers[r].element[0], n.element[0])) continue;
                                n = this.containers[r], i = r
                            } else this.containers[r].containerCache.over && (this.containers[r]._trigger("out", t, this._uiHash(this)), this.containers[r].containerCache.over = 0);
                    if (n)
                        if (1 === this.containers.length) this.containers[i]._trigger("over", t, this._uiHash(this)), this.containers[i].containerCache.over = 1;
                        else {
                            for (var o = 1e4, s = null, a = this.containers[i].floating ? "left" : "top", l = this.containers[i].floating ? "width" : "height", u = this.positionAbs[a] + this.offset.click[a], c = this.items.length - 1; c >= 0; c--)
                                if (e.contains(this.containers[i].element[0], this.items[c].item[0]) && this.items[c].item[0] != this.currentItem[0]) {
                                    var h = this.items[c].item.offset()[a],
                                        d = !1;
                                    Math.abs(h - u) > Math.abs(h + this.items[c][l] - u) && (d = !0, h += this.items[c][l]), Math.abs(h - u) < o && (o = Math.abs(h - u), s = this.items[c], this.direction = d ? "up" : "down")
                                }
                            if (!s && !this.options.dropOnEmpty) return;
                            this.currentContainer = this.containers[i], s ? this._rearrange(t, s, null, !0) : this._rearrange(t, null, this.containers[i].element, !0), this._trigger("change", t, this._uiHash()), this.containers[i]._trigger("change", t, this._uiHash(this)), this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[i]._trigger("over", t, this._uiHash(this)), this.containers[i].containerCache.over = 1
                        }
                },
                _createHelper: function(t) {
                    var n = this.options,
                        i = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [t, this.currentItem])) : "clone" == n.helper ? this.currentItem.clone() : this.currentItem;
                    return i.parents("body").length || e("parent" != n.appendTo ? n.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), i[0] == this.currentItem[0] && (this._storedCSS = { width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left") }), ("" == i[0].style.width || n.forceHelperSize) && i.width(this.currentItem.width()), ("" == i[0].style.height || n.forceHelperSize) && i.height(this.currentItem.height()), i
                },
                _adjustOffsetFromHelper: function(t) { "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = { left: +t[0], top: +t[1] || 0 }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top) },
                _getParentOffset: function() { this.offsetParent = this.helper.offsetParent(); var t = this.offsetParent.offset(); return "absolute" == this.cssPosition && this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && "html" == this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = { top: 0, left: 0 }), { top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) } },
                _getRelativeOffset: function() { if ("relative" == this.cssPosition) { var e = this.currentItem.position(); return { top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft() } } return { top: 0, left: 0 } },
                _cacheMargins: function() { this.margins = { left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0 } },
                _cacheHelperProportions: function() { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } },
                _setContainment: function() {
                    var t = this.options;
                    if ("parent" == t.containment && (t.containment = this.helper[0].parentNode), ("document" == t.containment || "window" == t.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, e("document" == t.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (e("document" == t.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), !/^(document|window|parent)$/.test(t.containment)) {
                        var n = e(t.containment)[0],
                            i = e(t.containment).offset(),
                            r = "hidden" != e(n).css("overflow");
                        this.containment = [i.left + (parseInt(e(n).css("borderLeftWidth"), 10) || 0) + (parseInt(e(n).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(e(n).css("borderTopWidth"), 10) || 0) + (parseInt(e(n).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (r ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(e(n).css("borderLeftWidth"), 10) || 0) - (parseInt(e(n).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (r ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(e(n).css("borderTopWidth"), 10) || 0) - (parseInt(e(n).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
                    }
                },
                _convertPositionTo: function(t, n) {
                    n || (n = this.position);
                    var i = "absolute" == t ? 1 : -1,
                        r = (this.options, "absolute" != this.cssPosition || this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent),
                        o = /(html|body)/i.test(r[0].tagName);
                    return { top: n.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : r.scrollTop()) * i, left: n.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : r.scrollLeft()) * i }
                },
                _generatePosition: function(t) {
                    var n = this.options,
                        i = "absolute" != this.cssPosition || this.scrollParent[0] != document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                        r = /(html|body)/i.test(i[0].tagName);
                    "relative" != this.cssPosition || this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset());
                    var o = t.pageX,
                        s = t.pageY;
                    if (this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (s = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (s = this.containment[3] + this.offset.click.top)), n.grid)) {
                        var a = this.originalPageY + Math.round((s - this.originalPageY) / n.grid[1]) * n.grid[1];
                        s = this.containment ? a - this.offset.click.top < this.containment[1] || a - this.offset.click.top > this.containment[3] ? a - this.offset.click.top < this.containment[1] ? a + n.grid[1] : a - n.grid[1] : a : a;
                        var l = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0];
                        o = this.containment ? l - this.offset.click.left < this.containment[0] || l - this.offset.click.left > this.containment[2] ? l - this.offset.click.left < this.containment[0] ? l + n.grid[0] : l - n.grid[0] : l : l
                    }
                    return { top: s - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" == this.cssPosition ? -this.scrollParent.scrollTop() : r ? 0 : i.scrollTop()), left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" == this.cssPosition ? -this.scrollParent.scrollLeft() : r ? 0 : i.scrollLeft()) }
                },
                _rearrange: function(e, t, n, i) {
                    n ? n[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" == this.direction ? t.item[0] : t.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                    var r = this.counter;
                    this._delay(function() { r == this.counter && this.refreshPositions(!i) })
                },
                _clear: function(t, n) {
                    this.reverting = !1;
                    var i = [];
                    if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] == this.currentItem[0]) {
                        for (var r in this._storedCSS)("auto" == this._storedCSS[r] || "static" == this._storedCSS[r]) && (this._storedCSS[r] = "");
                        this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                    } else this.currentItem.show();
                    this.fromOutside && !n && i.push(function(e) { this._trigger("receive", e, this._uiHash(this.fromOutside)) }), !this.fromOutside && this.domPosition.prev == this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent == this.currentItem.parent()[0] || n || i.push(function(e) { this._trigger("update", e, this._uiHash()) }), this !== this.currentContainer && (n || (i.push(function(e) { this._trigger("remove", e, this._uiHash()) }), i.push(function(e) { return function(t) { e._trigger("receive", t, this._uiHash(this)) } }.call(this, this.currentContainer)), i.push(function(e) { return function(t) { e._trigger("update", t, this._uiHash(this)) } }.call(this, this.currentContainer))));
                    for (var r = this.containers.length - 1; r >= 0; r--) n || i.push(function(e) { return function(t) { e._trigger("deactivate", t, this._uiHash(this)) } }.call(this, this.containers[r])), this.containers[r].containerCache.over && (i.push(function(e) { return function(t) { e._trigger("out", t, this._uiHash(this)) } }.call(this, this.containers[r])), this.containers[r].containerCache.over = 0);
                    if (this._storedCursor && e("body").css("cursor", this._storedCursor), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" == this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                        if (!n) {
                            this._trigger("beforeStop", t, this._uiHash());
                            for (var r = 0; r < i.length; r++) i[r].call(this, t);
                            this._trigger("stop", t, this._uiHash())
                        }
                        return this.fromOutside = !1, !1
                    }
                    if (n || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] != this.currentItem[0] && this.helper.remove(), this.helper = null, !n) {
                        for (var r = 0; r < i.length; r++) i[r].call(this, t);
                        this._trigger("stop", t, this._uiHash())
                    }
                    return this.fromOutside = !1, !0
                },
                _trigger: function() { e.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel() },
                _uiHash: function(t) { var n = t || this; return { helper: n.helper, placeholder: n.placeholder || e([]), position: n.position, originalPosition: n.originalPosition, offset: n.positionAbs, item: n.currentItem, sender: t ? t.element : null } }
            })
        }(jQuery),
        function(e) {
            var t = 0,
                n = {},
                i = {};
            n.height = n.paddingTop = n.paddingBottom = n.borderTopWidth = n.borderBottomWidth = "hide", i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "show", e.widget("ui.accordion", {
                version: "1.9.2",
                options: { active: 0, animate: {}, collapsible: !1, event: "click", header: "> li > :first-child,> :not(li):even", heightStyle: "auto", icons: { activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e" }, activate: null, beforeActivate: null },
                _create: function() {
                    var n = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++t),
                        i = this.options;
                    this.prevShow = this.prevHide = e(), this.element.addClass("ui-accordion ui-widget ui-helper-reset"), this.headers = this.element.find(i.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this._hoverable(this.headers), this._focusable(this.headers), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").hide(), i.collapsible || i.active !== !1 && null != i.active || (i.active = 0), i.active < 0 && (i.active += this.headers.length), this.active = this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active").toggleClass("ui-corner-all ui-corner-top"), this.active.next().addClass("ui-accordion-content-active").show(), this._createIcons(), this.refresh(), this.element.attr("role", "tablist"), this.headers.attr("role", "tab").each(function(t) {
                        var i = e(this),
                            r = i.attr("id"),
                            o = i.next(),
                            s = o.attr("id");
                        r || (r = n + "-header-" + t, i.attr("id", r)), s || (s = n + "-panel-" + t, o.attr("id", s)), i.attr("aria-controls", s), o.attr("aria-labelledby", r)
                    }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({ "aria-selected": "false", tabIndex: -1 }).next().attr({ "aria-expanded": "false", "aria-hidden": "true" }).hide(), this.active.length ? this.active.attr({ "aria-selected": "true", tabIndex: 0 }).next().attr({ "aria-expanded": "true", "aria-hidden": "false" }) : this.headers.eq(0).attr("tabIndex", 0), this._on(this.headers, { keydown: "_keydown" }), this._on(this.headers.next(), { keydown: "_panelKeyDown" }), this._setupEvents(i.event)
                },
                _getCreateEventData: function() { return { header: this.active, content: this.active.length ? this.active.next() : e() } },
                _createIcons: function() {
                    var t = this.options.icons;
                    t && (e("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
                },
                _destroyIcons: function() { this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove() },
                _destroy: function() {
                    var e;
                    this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() { /^ui-accordion/.test(this.id) && this.removeAttribute("id") }), this._destroyIcons(), e = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() { /^ui-accordion/.test(this.id) && this.removeAttribute("id") }), "content" !== this.options.heightStyle && e.css("height", "")
                },
                _setOption: function(e, t) { return "active" === e ? (this._activate(t), void 0) : ("event" === e && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), "collapsible" !== e || t || this.options.active !== !1 || this._activate(0), "icons" === e && (this._destroyIcons(), t && this._createIcons()), "disabled" === e && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t), void 0) },
                _keydown: function(t) {
                    if (!t.altKey && !t.ctrlKey) {
                        var n = e.ui.keyCode,
                            i = this.headers.length,
                            r = this.headers.index(t.target),
                            o = !1;
                        switch (t.keyCode) {
                            case n.RIGHT:
                            case n.DOWN:
                                o = this.headers[(r + 1) % i];
                                break;
                            case n.LEFT:
                            case n.UP:
                                o = this.headers[(r - 1 + i) % i];
                                break;
                            case n.SPACE:
                            case n.ENTER:
                                this._eventHandler(t);
                                break;
                            case n.HOME:
                                o = this.headers[0];
                                break;
                            case n.END:
                                o = this.headers[i - 1]
                        }
                        o && (e(t.target).attr("tabIndex", -1), e(o).attr("tabIndex", 0), o.focus(), t.preventDefault())
                    }
                },
                _panelKeyDown: function(t) { t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().focus() },
                refresh: function() {
                    var t, n, i = this.options.heightStyle,
                        r = this.element.parent();
                    "fill" === i ? (e.support.minHeight || (n = r.css("overflow"), r.css("overflow", "hidden")), t = r.height(), this.element.siblings(":visible").each(function() {
                        var n = e(this),
                            i = n.css("position");
                        "absolute" !== i && "fixed" !== i && (t -= n.outerHeight(!0))
                    }), n && r.css("overflow", n), this.headers.each(function() { t -= e(this).outerHeight(!0) }), this.headers.next().each(function() { e(this).height(Math.max(0, t - e(this).innerHeight() + e(this).height())) }).css("overflow", "auto")) : "auto" === i && (t = 0, this.headers.next().each(function() { t = Math.max(t, e(this).css("height", "").height()) }).height(t))
                },
                _activate: function(t) {
                    var n = this._findActive(t)[0];
                    n !== this.active[0] && (n = n || this.active[0], this._eventHandler({ target: n, currentTarget: n, preventDefault: e.noop }))
                },
                _findActive: function(t) { return "number" == typeof t ? this.headers.eq(t) : e() },
                _setupEvents: function(t) {
                    var n = {};
                    t && (e.each(t.split(" "), function(e, t) { n[t] = "_eventHandler" }), this._on(this.headers, n))
                },
                _eventHandler: function(t) {
                    var n = this.options,
                        i = this.active,
                        r = e(t.currentTarget),
                        o = r[0] === i[0],
                        s = o && n.collapsible,
                        a = s ? e() : r.next(),
                        l = i.next(),
                        u = { oldHeader: i, oldPanel: l, newHeader: s ? e() : r, newPanel: a };
                    t.preventDefault(), o && !n.collapsible || this._trigger("beforeActivate", t, u) === !1 || (n.active = s ? !1 : this.headers.index(r), this.active = o ? e() : r, this._toggle(u), i.removeClass("ui-accordion-header-active ui-state-active"), n.icons && i.children(".ui-accordion-header-icon").removeClass(n.icons.activeHeader).addClass(n.icons.header), o || (r.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), n.icons && r.children(".ui-accordion-header-icon").removeClass(n.icons.header).addClass(n.icons.activeHeader), r.next().addClass("ui-accordion-content-active")))
                },
                _toggle: function(t) {
                    var n = t.newPanel,
                        i = this.prevShow.length ? this.prevShow : t.oldPanel;
                    this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = n, this.prevHide = i, this.options.animate ? this._animate(n, i, t) : (i.hide(), n.show(), this._toggleComplete(t)), i.attr({ "aria-expanded": "false", "aria-hidden": "true" }), i.prev().attr("aria-selected", "false"), n.length && i.length ? i.prev().attr("tabIndex", -1) : n.length && this.headers.filter(function() { return 0 === e(this).attr("tabIndex") }).attr("tabIndex", -1), n.attr({ "aria-expanded": "true", "aria-hidden": "false" }).prev().attr({ "aria-selected": "true", tabIndex: 0 })
                },
                _animate: function(e, t, r) {
                    var o, s, a, l = this,
                        u = 0,
                        c = e.length && (!t.length || e.index() < t.index()),
                        h = this.options.animate || {},
                        d = c && h.down || h,
                        f = function() { l._toggleComplete(r) };
                    return "number" == typeof d && (a = d), "string" == typeof d && (s = d), s = s || d.easing || h.easing, a = a || d.duration || h.duration, t.length ? e.length ? (o = e.show().outerHeight(), t.animate(n, { duration: a, easing: s, step: function(e, t) { t.now = Math.round(e) } }), e.hide().animate(i, { duration: a, easing: s, complete: f, step: function(e, n) { n.now = Math.round(e), "height" !== n.prop ? u += n.now : "content" !== l.options.heightStyle && (n.now = Math.round(o - t.outerHeight() - u), u = 0) } }), void 0) : t.animate(n, a, s, f) : e.animate(i, a, s, f)
                },
                _toggleComplete: function(e) {
                    var t = e.oldPanel;
                    t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, e)
                }
            }), e.uiBackCompat !== !1 && (! function(e, t) {
                e.extend(t.options, { navigation: !1, navigationFilter: function() { return this.href.toLowerCase() === location.href.toLowerCase() } });
                var n = t._create;
                t._create = function() {
                    if (this.options.navigation) {
                        var t = this,
                            i = this.element.find(this.options.header),
                            r = i.next(),
                            o = i.add(r).find("a").filter(this.options.navigationFilter)[0];
                        o && i.add(r).each(function(n) { return e.contains(this, o) ? (t.options.active = Math.floor(n / 2), !1) : void 0 })
                    }
                    n.call(this)
                }
            }(jQuery, jQuery.ui.accordion.prototype), function(e, t) {
                e.extend(t.options, { heightStyle: null, autoHeight: !0, clearStyle: !1, fillSpace: !1 });
                var n = t._create,
                    i = t._setOption;
                e.extend(t, {
                    _create: function() { this.options.heightStyle = this.options.heightStyle || this._mergeHeightStyle(), n.call(this) },
                    _setOption: function(e) {
                        ("autoHeight" === e || "clearStyle" === e || "fillSpace" === e) && (this.options.heightStyle = this._mergeHeightStyle()), i.apply(this, arguments)
                    },
                    _mergeHeightStyle: function() { var e = this.options; return e.fillSpace ? "fill" : e.clearStyle ? "content" : e.autoHeight ? "auto" : void 0 }
                })
            }(jQuery, jQuery.ui.accordion.prototype), function(e, t) {
                e.extend(t.options.icons, { activeHeader: null, headerSelected: "ui-icon-triangle-1-s" });
                var n = t._createIcons;
                t._createIcons = function() { this.options.icons && (this.options.icons.activeHeader = this.options.icons.activeHeader || this.options.icons.headerSelected), n.call(this) }
            }(jQuery, jQuery.ui.accordion.prototype), function(e, t) {
                t.activate = t._activate;
                var n = t._findActive;
                t._findActive = function(e) { return -1 === e && (e = !1), e && "number" != typeof e && (e = this.headers.index(this.headers.filter(e)), -1 === e && (e = !1)), n.call(this, e) }
            }(jQuery, jQuery.ui.accordion.prototype), jQuery.ui.accordion.prototype.resize = jQuery.ui.accordion.prototype.refresh, function(e, t) {
                e.extend(t.options, { change: null, changestart: null });
                var n = t._trigger;
                t._trigger = function(e, t, i) { var r = n.apply(this, arguments); return r ? ("beforeActivate" === e ? r = n.call(this, "changestart", t, { oldHeader: i.oldHeader, oldContent: i.oldPanel, newHeader: i.newHeader, newContent: i.newPanel }) : "activate" === e && (r = n.call(this, "change", t, { oldHeader: i.oldHeader, oldContent: i.oldPanel, newHeader: i.newHeader, newContent: i.newPanel })), r) : !1 }
            }(jQuery, jQuery.ui.accordion.prototype), function(e, t) {
                e.extend(t.options, { animate: null, animated: "slide" });
                var n = t._create;
                t._create = function() {
                    var e = this.options;
                    null === e.animate && (e.animate = e.animated ? "slide" === e.animated ? 300 : "bounceslide" === e.animated ? { duration: 200, down: { easing: "easeOutBounce", duration: 1e3 } } : e.animated : !1), n.call(this)
                }
            }(jQuery, jQuery.ui.accordion.prototype))
        }(jQuery),
        function(e) {
            var t = 0;
            e.widget("ui.autocomplete", {
                version: "1.9.2",
                defaultElement: "<input>",
                options: { appendTo: "body", autoFocus: !1, delay: 300, minLength: 1, position: { my: "left top", at: "left bottom", collision: "none" }, source: null, change: null, close: null, focus: null, open: null, response: null, search: null, select: null },
                pending: 0,
                _create: function() {
                    var t, n, i;
                    this.isMultiLine = this._isMultiLine(), this.valueMethod = this.element[this.element.is("input,textarea") ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                        keydown: function(r) {
                            if (this.element.prop("readOnly")) return t = !0, i = !0, n = !0, void 0;
                            t = !1, i = !1, n = !1;
                            var o = e.ui.keyCode;
                            switch (r.keyCode) {
                                case o.PAGE_UP:
                                    t = !0, this._move("previousPage", r);
                                    break;
                                case o.PAGE_DOWN:
                                    t = !0, this._move("nextPage", r);
                                    break;
                                case o.UP:
                                    t = !0, this._keyEvent("previous", r);
                                    break;
                                case o.DOWN:
                                    t = !0, this._keyEvent("next", r);
                                    break;
                                case o.ENTER:
                                case o.NUMPAD_ENTER:
                                    this.menu.active && (t = !0, r.preventDefault(), this.menu.select(r));
                                    break;
                                case o.TAB:
                                    this.menu.active && this.menu.select(r);
                                    break;
                                case o.ESCAPE:
                                    this.menu.element.is(":visible") && (this._value(this.term), this.close(r), r.preventDefault());
                                    break;
                                default:
                                    n = !0, this._searchTimeout(r)
                            }
                        },
                        keypress: function(i) {
                            if (t) return t = !1, i.preventDefault(), void 0;
                            if (!n) {
                                var r = e.ui.keyCode;
                                switch (i.keyCode) {
                                    case r.PAGE_UP:
                                        this._move("previousPage", i);
                                        break;
                                    case r.PAGE_DOWN:
                                        this._move("nextPage", i);
                                        break;
                                    case r.UP:
                                        this._keyEvent("previous", i);
                                        break;
                                    case r.DOWN:
                                        this._keyEvent("next", i)
                                }
                            }
                        },
                        input: function(e) { return i ? (i = !1, e.preventDefault(), void 0) : (this._searchTimeout(e), void 0) },
                        focus: function() { this.selectedItem = null, this.previous = this._value() },
                        blur: function(e) { return this.cancelBlur ? (delete this.cancelBlur, void 0) : (clearTimeout(this.searching), this.close(e), this._change(e), void 0) }
                    }), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete").appendTo(this.document.find(this.options.appendTo || "body")[0]).menu({ input: e(), role: null }).zIndex(this.element.zIndex() + 1).hide().data("menu"), this._on(this.menu.element, {
                        mousedown: function(t) {
                            t.preventDefault(), this.cancelBlur = !0, this._delay(function() { delete this.cancelBlur });
                            var n = this.menu.element[0];
                            e(t.target).closest(".ui-menu-item").length || this._delay(function() {
                                var t = this;
                                this.document.one("mousedown", function(i) { i.target === t.element[0] || i.target === n || e.contains(n, i.target) || t.close() })
                            })
                        },
                        menufocus: function(t, n) { if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type))) return this.menu.blur(), this.document.one("mousemove", function() { e(t.target).trigger(t.originalEvent) }), void 0; var i = n.item.data("ui-autocomplete-item") || n.item.data("item.autocomplete");!1 !== this._trigger("focus", t, { item: i }) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(i.value) : this.liveRegion.text(i.value) },
                        menuselect: function(e, t) {
                            var n = t.item.data("ui-autocomplete-item") || t.item.data("item.autocomplete"),
                                i = this.previous;
                            this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = i, this._delay(function() { this.previous = i, this.selectedItem = n })), !1 !== this._trigger("select", e, { item: n }) && this._value(n.value), this.term = this._value(), this.close(e), this.selectedItem = n
                        }
                    }), this.liveRegion = e("<span>", { role: "status", "aria-live": "polite" }).addClass("ui-helper-hidden-accessible").insertAfter(this.element), e.fn.bgiframe && this.menu.element.bgiframe(), this._on(this.window, { beforeunload: function() { this.element.removeAttr("autocomplete") } })
                },
                _destroy: function() { clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove() },
                _setOption: function(e, t) { this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this.document.find(t || "body")[0]), "disabled" === e && t && this.xhr && this.xhr.abort() },
                _isMultiLine: function() { return this.element.is("textarea") ? !0 : this.element.is("input") ? !1 : this.element.prop("isContentEditable") },
                _initSource: function() {
                    var t, n, i = this;
                    e.isArray(this.options.source) ? (t = this.options.source, this.source = function(n, i) { i(e.ui.autocomplete.filter(t, n.term)) }) : "string" == typeof this.options.source ? (n = this.options.source, this.source = function(t, r) { i.xhr && i.xhr.abort(), i.xhr = e.ajax({ url: n, data: t, dataType: "json", success: function(e) { r(e) }, error: function() { r([]) } }) }) : this.source = this.options.source
                },
                _searchTimeout: function(e) { clearTimeout(this.searching), this.searching = this._delay(function() { this.term !== this._value() && (this.selectedItem = null, this.search(null, e)) }, this.options.delay) },
                search: function(e, t) { return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : void 0 },
                _search: function(e) { this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({ term: e }, this._response()) },
                _response: function() {
                    var e = this,
                        n = ++t;
                    return function(i) { n === t && e.__response(i), e.pending--, e.pending || e.element.removeClass("ui-autocomplete-loading") }
                },
                __response: function(e) { e && (e = this._normalize(e)), this._trigger("response", null, { content: e }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close() },
                close: function(e) { this.cancelSearch = !0, this._close(e) },
                _close: function(e) { this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e)) },
                _change: function(e) { this.previous !== this._value() && this._trigger("change", e, { item: this.selectedItem }) },
                _normalize: function(t) { return t.length && t[0].label && t[0].value ? t : e.map(t, function(t) { return "string" == typeof t ? { label: t, value: t } : e.extend({ label: t.label || t.value, value: t.value || t.label }, t) }) },
                _suggest: function(t) {
                    var n = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
                    this._renderMenu(n, t), this.menu.refresh(), n.show(), this._resizeMenu(), n.position(e.extend({ of: this.element }, this.options.position)), this.options.autoFocus && this.menu.next()
                },
                _resizeMenu: function() {
                    var e = this.menu.element;
                    e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
                },
                _renderMenu: function(t, n) {
                    var i = this;
                    e.each(n, function(e, n) { i._renderItemData(t, n) })
                },
                _renderItemData: function(e, t) { return this._renderItem(e, t).data("ui-autocomplete-item", t) },
                _renderItem: function(t, n) { return e("<li>").append(e("<a>").text(n.label)).appendTo(t) },
                _move: function(e, t) { return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this._value(this.term), this.menu.blur(), void 0) : (this.menu[e](t), void 0) : (this.search(null, t), void 0) },
                widget: function() { return this.menu.element },
                _value: function() { return this.valueMethod.apply(this.element, arguments) },
                _keyEvent: function(e, t) {
                    (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault())
                }
            }), e.extend(e.ui.autocomplete, { escapeRegex: function(e) { return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&") }, filter: function(t, n) { var i = new RegExp(e.ui.autocomplete.escapeRegex(n), "i"); return e.grep(t, function(e) { return i.test(e.label || e.value || e) }) } }), e.widget("ui.autocomplete", e.ui.autocomplete, {
                options: { messages: { noResults: "No search results.", results: function(e) { return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate." } } },
                __response: function(e) {
                    var t;
                    this._superApply(arguments), this.options.disabled || this.cancelSearch || (t = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.text(t))
                }
            })
        }(jQuery),
        function(e) {
            var t, n, i, r, o = "ui-button ui-widget ui-state-default ui-corner-all",
                s = "ui-state-hover ui-state-active ",
                a = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
                l = function() {
                    var t = e(this).find(":ui-button");
                    setTimeout(function() { t.button("refresh") }, 1)
                },
                u = function(t) {
                    var n = t.name,
                        i = t.form,
                        r = e([]);
                    return n && (r = i ? e(i).find("[name='" + n + "']") : e("[name='" + n + "']", t.ownerDocument).filter(function() { return !this.form })), r
                };
            e.widget("ui.button", {
                version: "1.9.2",
                defaultElement: "<button>",
                options: { disabled: null, text: !0, label: null, icons: { primary: null, secondary: null } },
                _create: function() {
                    this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, l), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
                    var s = this,
                        a = this.options,
                        c = "checkbox" === this.type || "radio" === this.type,
                        h = c ? "" : "ui-state-active",
                        d = "ui-state-focus";
                    null === a.label && (a.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(o).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() { a.disabled || this === t && e(this).addClass("ui-state-active") }).bind("mouseleave" + this.eventNamespace, function() { a.disabled || e(this).removeClass(h) }).bind("click" + this.eventNamespace, function(e) { a.disabled && (e.preventDefault(), e.stopImmediatePropagation()) }), this.element.bind("focus" + this.eventNamespace, function() { s.buttonElement.addClass(d) }).bind("blur" + this.eventNamespace, function() { s.buttonElement.removeClass(d) }), c && (this.element.bind("change" + this.eventNamespace, function() { r || s.refresh() }), this.buttonElement.bind("mousedown" + this.eventNamespace, function(e) { a.disabled || (r = !1, n = e.pageX, i = e.pageY) }).bind("mouseup" + this.eventNamespace, function(e) { a.disabled || (n !== e.pageX || i !== e.pageY) && (r = !0) })), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() { return a.disabled || r ? !1 : (e(this).toggleClass("ui-state-active"), s.buttonElement.attr("aria-pressed", s.element[0].checked), void 0) }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                        if (a.disabled || r) return !1;
                        e(this).addClass("ui-state-active"), s.buttonElement.attr("aria-pressed", "true");
                        var t = s.element[0];
                        u(t).not(t).map(function() { return e(this).button("widget")[0] }).removeClass("ui-state-active").attr("aria-pressed", "false")
                    }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() { return a.disabled ? !1 : (e(this).addClass("ui-state-active"), t = this, s.document.one("mouseup", function() { t = null }), void 0) }).bind("mouseup" + this.eventNamespace, function() { return a.disabled ? !1 : (e(this).removeClass("ui-state-active"), void 0) }).bind("keydown" + this.eventNamespace, function(t) { return a.disabled ? !1 : ((t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active"), void 0) }).bind("keyup" + this.eventNamespace, function() { e(this).removeClass("ui-state-active") }), this.buttonElement.is("a") && this.buttonElement.keyup(function(t) { t.keyCode === e.ui.keyCode.SPACE && e(this).click() })), this._setOption("disabled", a.disabled), this._resetButton()
                },
                _determineButtonType: function() {
                    var e, t, n;
                    this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (e = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible"), n = this.element.is(":checked"), n && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", n)) : this.buttonElement = this.element
                },
                widget: function() { return this.buttonElement },
                _destroy: function() { this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(o + " " + s + " " + a).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title") },
                _setOption: function(e, t) { return this._super(e, t), "disabled" === e ? (t ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1), void 0) : (this._resetButton(), void 0) },
                refresh: function() {
                    var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
                    t !== this.options.disabled && this._setOption("disabled", t), "radio" === this.type ? u(this.element[0]).each(function() { e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false") }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
                },
                _resetButton: function() {
                    if ("input" === this.type) return this.options.label && this.element.val(this.options.label), void 0;
                    var t = this.buttonElement.removeClass(a),
                        n = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
                        i = this.options.icons,
                        r = i.primary && i.secondary,
                        o = [];
                    i.primary || i.secondary ? (this.options.text && o.push("ui-button-text-icon" + (r ? "s" : i.primary ? "-primary" : "-secondary")), i.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + i.primary + "'></span>"), i.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + i.secondary + "'></span>"), this.options.text || (o.push(r ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", e.trim(n)))) : o.push("ui-button-text-only"), t.addClass(o.join(" "))
                }
            }), e.widget("ui.buttonset", {
                version: "1.9.2",
                options: { items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(button)" },
                _create: function() { this.element.addClass("ui-buttonset") },
                _init: function() { this.refresh() },
                _setOption: function(e, t) { "disabled" === e && this.buttons.button("option", e, t), this._super(e, t) },
                refresh: function() {
                    var t = "rtl" === this.element.css("direction");
                    this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() { return e(this).button("widget")[0] }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
                },
                _destroy: function() { this.element.removeClass("ui-buttonset"), this.buttons.map(function() { return e(this).button("widget")[0] }).removeClass("ui-corner-left ui-corner-right").end().button("destroy") }
            })
        }(jQuery),
        function($, undefined) {
            function Datepicker() { this.debug = !1, this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: "" }, this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1 }, $.extend(this._defaults, this.regional[""]), this.dpDiv = bindHover($('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) }

            function bindHover(e) { var t = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a"; return e.delegate(t, "mouseout", function() { $(this).removeClass("ui-state-hover"), -1 != this.className.indexOf("ui-datepicker-prev") && $(this).removeClass("ui-datepicker-prev-hover"), -1 != this.className.indexOf("ui-datepicker-next") && $(this).removeClass("ui-datepicker-next-hover") }).delegate(t, "mouseover", function() { $.datepicker._isDisabledDatepicker(instActive.inline ? e.parent()[0] : instActive.input[0]) || ($(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), $(this).addClass("ui-state-hover"), -1 != this.className.indexOf("ui-datepicker-prev") && $(this).addClass("ui-datepicker-prev-hover"), -1 != this.className.indexOf("ui-datepicker-next") && $(this).addClass("ui-datepicker-next-hover")) }) }

            function extendRemove(e, t) { $.extend(e, t); for (var n in t)(null == t[n] || t[n] == undefined) && (e[n] = t[n]); return e }
            $.extend($.ui, { datepicker: { version: "1.9.2" } });
            var PROP_NAME = "datepicker",
                dpuuid = (new Date).getTime(),
                instActive;
            $.extend(Datepicker.prototype, {
                markerClassName: "hasDatepicker",
                maxRows: 4,
                log: function() { this.debug && console.log.apply("", arguments) },
                _widgetDatepicker: function() { return this.dpDiv },
                setDefaults: function(e) { return extendRemove(this._defaults, e || {}), this },
                _attachDatepicker: function(target, settings) {
                    var inlineSettings = null;
                    for (var attrName in this._defaults) { var attrValue = target.getAttribute("date:" + attrName); if (attrValue) { inlineSettings = inlineSettings || {}; try { inlineSettings[attrName] = eval(attrValue) } catch (err) { inlineSettings[attrName] = attrValue } } }
                    var nodeName = target.nodeName.toLowerCase(),
                        inline = "div" == nodeName || "span" == nodeName;
                    target.id || (this.uuid += 1, target.id = "dp" + this.uuid);
                    var inst = this._newInst($(target), inline);
                    inst.settings = $.extend({}, settings || {}, inlineSettings || {}), "input" == nodeName ? this._connectDatepicker(target, inst) : inline && this._inlineDatepicker(target, inst)
                },
                _newInst: function(e, t) { var n = e[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1"); return { id: n, input: e, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: t, dpDiv: t ? bindHover($('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>')) : this.dpDiv } },
                _connectDatepicker: function(e, t) {
                    var n = $(e);
                    t.append = $([]), t.trigger = $([]), n.hasClass(this.markerClassName) || (this._attachments(n, t), n.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function(e, n, i) { t.settings[n] = i }).bind("getData.datepicker", function(e, n) { return this._get(t, n) }), this._autoSize(t), $.data(e, PROP_NAME, t), t.settings.disabled && this._disableDatepicker(e))
                },
                _attachments: function(e, t) {
                    var n = this._get(t, "appendText"),
                        i = this._get(t, "isRTL");
                    t.append && t.append.remove(), n && (t.append = $('<span class="' + this._appendClass + '">' + n + "</span>"), e[i ? "before" : "after"](t.append)), e.unbind("focus", this._showDatepicker), t.trigger && t.trigger.remove();
                    var r = this._get(t, "showOn");
                    if (("focus" == r || "both" == r) && e.focus(this._showDatepicker), "button" == r || "both" == r) {
                        var o = this._get(t, "buttonText"),
                            s = this._get(t, "buttonImage");
                        t.trigger = $(this._get(t, "buttonImageOnly") ? $("<img/>").addClass(this._triggerClass).attr({ src: s, alt: o, title: o }) : $('<button type="button"></button>').addClass(this._triggerClass).html("" == s ? o : $("<img/>").attr({ src: s, alt: o, title: o }))), e[i ? "before" : "after"](t.trigger), t.trigger.click(function() { return $.datepicker._datepickerShowing && $.datepicker._lastInput == e[0] ? $.datepicker._hideDatepicker() : $.datepicker._datepickerShowing && $.datepicker._lastInput != e[0] ? ($.datepicker._hideDatepicker(), $.datepicker._showDatepicker(e[0])) : $.datepicker._showDatepicker(e[0]), !1 })
                    }
                },
                _autoSize: function(e) {
                    if (this._get(e, "autoSize") && !e.inline) {
                        var t = new Date(2009, 11, 20),
                            n = this._get(e, "dateFormat");
                        if (n.match(/[DM]/)) {
                            var i = function(e) { for (var t = 0, n = 0, i = 0; i < e.length; i++) e[i].length > t && (t = e[i].length, n = i); return n };
                            t.setMonth(i(this._get(e, n.match(/MM/) ? "monthNames" : "monthNamesShort"))), t.setDate(i(this._get(e, n.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - t.getDay())
                        }
                        e.input.attr("size", this._formatDate(e, t).length)
                    }
                },
                _inlineDatepicker: function(e, t) {
                    var n = $(e);
                    n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(t.dpDiv).bind("setData.datepicker", function(e, n, i) { t.settings[n] = i }).bind("getData.datepicker", function(e, n) { return this._get(t, n) }), $.data(e, PROP_NAME, t), this._setDate(t, this._getDefaultDate(t), !0), this._updateDatepicker(t), this._updateAlternate(t), t.settings.disabled && this._disableDatepicker(e), t.dpDiv.css("display", "block"))
                },
                _dialogDatepicker: function(e, t, n, i, r) {
                    var o = this._dialogInst;
                    if (!o) {
                        this.uuid += 1;
                        var s = "dp" + this.uuid;
                        this._dialogInput = $('<input type="text" id="' + s + '" style="position: absolute; top: -100px; width: 0px;"/>'), this._dialogInput.keydown(this._doKeyDown), $("body").append(this._dialogInput), o = this._dialogInst = this._newInst(this._dialogInput, !1), o.settings = {}, $.data(this._dialogInput[0], PROP_NAME, o)
                    }
                    if (extendRemove(o.settings, i || {}), t = t && t.constructor == Date ? this._formatDate(o, t) : t, this._dialogInput.val(t), this._pos = r ? r.length ? r : [r.pageX, r.pageY] : null, !this._pos) {
                        var a = document.documentElement.clientWidth,
                            l = document.documentElement.clientHeight,
                            u = document.documentElement.scrollLeft || document.body.scrollLeft,
                            c = document.documentElement.scrollTop || document.body.scrollTop;
                        this._pos = [a / 2 - 100 + u, l / 2 - 150 + c]
                    }
                    return this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), o.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), $.blockUI && $.blockUI(this.dpDiv), $.data(this._dialogInput[0], PROP_NAME, o), this
                },
                _destroyDatepicker: function(e) {
                    var t = $(e),
                        n = $.data(e, PROP_NAME);
                    if (t.hasClass(this.markerClassName)) {
                        var i = e.nodeName.toLowerCase();
                        $.removeData(e, PROP_NAME), "input" == i ? (n.append.remove(), n.trigger.remove(), t.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" == i || "span" == i) && t.removeClass(this.markerClassName).empty()
                    }
                },
                _enableDatepicker: function(e) {
                    var t = $(e),
                        n = $.data(e, PROP_NAME);
                    if (t.hasClass(this.markerClassName)) {
                        var i = e.nodeName.toLowerCase();
                        if ("input" == i) e.disabled = !1, n.trigger.filter("button").each(function() { this.disabled = !1 }).end().filter("img").css({ opacity: "1.0", cursor: "" });
                        else if ("div" == i || "span" == i) {
                            var r = t.children("." + this._inlineClass);
                            r.children().removeClass("ui-state-disabled"), r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)
                        }
                        this._disabledInputs = $.map(this._disabledInputs, function(t) { return t == e ? null : t })
                    }
                },
                _disableDatepicker: function(e) {
                    var t = $(e),
                        n = $.data(e, PROP_NAME);
                    if (t.hasClass(this.markerClassName)) {
                        var i = e.nodeName.toLowerCase();
                        if ("input" == i) e.disabled = !0, n.trigger.filter("button").each(function() { this.disabled = !0 }).end().filter("img").css({ opacity: "0.5", cursor: "default" });
                        else if ("div" == i || "span" == i) {
                            var r = t.children("." + this._inlineClass);
                            r.children().addClass("ui-state-disabled"), r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)
                        }
                        this._disabledInputs = $.map(this._disabledInputs, function(t) { return t == e ? null : t }), this._disabledInputs[this._disabledInputs.length] = e
                    }
                },
                _isDisabledDatepicker: function(e) {
                    if (!e) return !1;
                    for (var t = 0; t < this._disabledInputs.length; t++)
                        if (this._disabledInputs[t] == e) return !0;
                    return !1
                },
                _getInst: function(e) { try { return $.data(e, PROP_NAME) } catch (t) { throw "Missing instance data for this datepicker" } },
                _optionDatepicker: function(e, t, n) {
                    var i = this._getInst(e);
                    if (2 == arguments.length && "string" == typeof t) return "defaults" == t ? $.extend({}, $.datepicker._defaults) : i ? "all" == t ? $.extend({}, i.settings) : this._get(i, t) : null;
                    var r = t || {};
                    if ("string" == typeof t && (r = {}, r[t] = n), i) {
                        this._curInst == i && this._hideDatepicker();
                        var o = this._getDateDatepicker(e, !0),
                            s = this._getMinMaxDate(i, "min"),
                            a = this._getMinMaxDate(i, "max");
                        extendRemove(i.settings, r), null !== s && r.dateFormat !== undefined && r.minDate === undefined && (i.settings.minDate = this._formatDate(i, s)), null !== a && r.dateFormat !== undefined && r.maxDate === undefined && (i.settings.maxDate = this._formatDate(i, a)), this._attachments($(e), i), this._autoSize(i), this._setDate(i, o), this._updateAlternate(i), this._updateDatepicker(i)
                    }
                },
                _changeDatepicker: function(e, t, n) { this._optionDatepicker(e, t, n) },
                _refreshDatepicker: function(e) {
                    var t = this._getInst(e);
                    t && this._updateDatepicker(t)
                },
                _setDateDatepicker: function(e, t) {
                    var n = this._getInst(e);
                    n && (this._setDate(n, t), this._updateDatepicker(n), this._updateAlternate(n))
                },
                _getDateDatepicker: function(e, t) { var n = this._getInst(e); return n && !n.inline && this._setDateFromField(n, t), n ? this._getDate(n) : null },
                _doKeyDown: function(e) {
                    var t = $.datepicker._getInst(e.target),
                        n = !0,
                        i = t.dpDiv.is(".ui-datepicker-rtl");
                    if (t._keyEvent = !0, $.datepicker._datepickerShowing) switch (e.keyCode) {
                        case 9:
                            $.datepicker._hideDatepicker(), n = !1;
                            break;
                        case 13:
                            var r = $("td." + $.datepicker._dayOverClass + ":not(." + $.datepicker._currentClass + ")", t.dpDiv);
                            r[0] && $.datepicker._selectDay(e.target, t.selectedMonth, t.selectedYear, r[0]);
                            var o = $.datepicker._get(t, "onSelect");
                            if (o) {
                                var s = $.datepicker._formatDate(t);
                                o.apply(t.input ? t.input[0] : null, [s, t])
                            } else $.datepicker._hideDatepicker();
                            return !1;
                        case 27:
                            $.datepicker._hideDatepicker();
                            break;
                        case 33:
                            $.datepicker._adjustDate(e.target, e.ctrlKey ? -$.datepicker._get(t, "stepBigMonths") : -$.datepicker._get(t, "stepMonths"), "M");
                            break;
                        case 34:
                            $.datepicker._adjustDate(e.target, e.ctrlKey ? +$.datepicker._get(t, "stepBigMonths") : +$.datepicker._get(t, "stepMonths"), "M");
                            break;
                        case 35:
                            (e.ctrlKey || e.metaKey) && $.datepicker._clearDate(e.target), n = e.ctrlKey || e.metaKey;
                            break;
                        case 36:
                            (e.ctrlKey || e.metaKey) && $.datepicker._gotoToday(e.target), n = e.ctrlKey || e.metaKey;
                            break;
                        case 37:
                            (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, i ? 1 : -1, "D"), n = e.ctrlKey || e.metaKey, e.originalEvent.altKey && $.datepicker._adjustDate(e.target, e.ctrlKey ? -$.datepicker._get(t, "stepBigMonths") : -$.datepicker._get(t, "stepMonths"), "M");
                            break;
                        case 38:
                            (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, -7, "D"), n = e.ctrlKey || e.metaKey;
                            break;
                        case 39:
                            (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, i ? -1 : 1, "D"), n = e.ctrlKey || e.metaKey, e.originalEvent.altKey && $.datepicker._adjustDate(e.target, e.ctrlKey ? +$.datepicker._get(t, "stepBigMonths") : +$.datepicker._get(t, "stepMonths"), "M");
                            break;
                        case 40:
                            (e.ctrlKey || e.metaKey) && $.datepicker._adjustDate(e.target, 7, "D"), n = e.ctrlKey || e.metaKey;
                            break;
                        default:
                            n = !1
                    } else 36 == e.keyCode && e.ctrlKey ? $.datepicker._showDatepicker(this) : n = !1;
                    n && (e.preventDefault(), e.stopPropagation())
                },
                _doKeyPress: function(e) {
                    var t = $.datepicker._getInst(e.target);
                    if ($.datepicker._get(t, "constrainInput")) {
                        var n = $.datepicker._possibleChars($.datepicker._get(t, "dateFormat")),
                            i = String.fromCharCode(e.charCode == undefined ? e.keyCode : e.charCode);
                        return e.ctrlKey || e.metaKey || " " > i || !n || n.indexOf(i) > -1
                    }
                },
                _doKeyUp: function(e) {
                    var t = $.datepicker._getInst(e.target);
                    if (t.input.val() != t.lastVal) try {
                        var n = $.datepicker.parseDate($.datepicker._get(t, "dateFormat"), t.input ? t.input.val() : null, $.datepicker._getFormatConfig(t));
                        n && ($.datepicker._setDateFromField(t), $.datepicker._updateAlternate(t), $.datepicker._updateDatepicker(t))
                    } catch (i) { $.datepicker.log(i) }
                    return !0
                },
                _showDatepicker: function(e) {
                    if (e = e.target || e, "input" != e.nodeName.toLowerCase() && (e = $("input", e.parentNode)[0]), !$.datepicker._isDisabledDatepicker(e) && $.datepicker._lastInput != e) {
                        var t = $.datepicker._getInst(e);
                        $.datepicker._curInst && $.datepicker._curInst != t && ($.datepicker._curInst.dpDiv.stop(!0, !0), t && $.datepicker._datepickerShowing && $.datepicker._hideDatepicker($.datepicker._curInst.input[0]));
                        var n = $.datepicker._get(t, "beforeShow"),
                            i = n ? n.apply(e, [e, t]) : {};
                        if (i !== !1) {
                            extendRemove(t.settings, i), t.lastVal = null, $.datepicker._lastInput = e, $.datepicker._setDateFromField(t), $.datepicker._inDialog && (e.value = ""), $.datepicker._pos || ($.datepicker._pos = $.datepicker._findPos(e), $.datepicker._pos[1] += e.offsetHeight);
                            var r = !1;
                            $(e).parents().each(function() { return r |= "fixed" == $(this).css("position"), !r });
                            var o = { left: $.datepicker._pos[0], top: $.datepicker._pos[1] };
                            if ($.datepicker._pos = null, t.dpDiv.empty(), t.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }), $.datepicker._updateDatepicker(t), o = $.datepicker._checkOffset(t, o, r), t.dpDiv.css({ position: $.datepicker._inDialog && $.blockUI ? "static" : r ? "fixed" : "absolute", display: "none", left: o.left + "px", top: o.top + "px" }), !t.inline) {
                                var s = $.datepicker._get(t, "showAnim"),
                                    a = $.datepicker._get(t, "duration"),
                                    l = function() {
                                        var e = t.dpDiv.find("iframe.ui-datepicker-cover");
                                        if (e.length) {
                                            var n = $.datepicker._getBorders(t.dpDiv);
                                            e.css({ left: -n[0], top: -n[1], width: t.dpDiv.outerWidth(), height: t.dpDiv.outerHeight() })
                                        }
                                    };
                                t.dpDiv.zIndex($(e).zIndex() + 1), $.datepicker._datepickerShowing = !0, $.effects && ($.effects.effect[s] || $.effects[s]) ? t.dpDiv.show(s, $.datepicker._get(t, "showOptions"), a, l) : t.dpDiv[s || "show"](s ? a : null, l), s && a || l(), t.input.is(":visible") && !t.input.is(":disabled") && t.input.focus(), $.datepicker._curInst = t
                            }
                        }
                    }
                },
                _updateDatepicker: function(e) {
                    this.maxRows = 4;
                    var t = $.datepicker._getBorders(e.dpDiv);
                    instActive = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
                    var n = e.dpDiv.find("iframe.ui-datepicker-cover");
                    n.length && n.css({ left: -t[0], top: -t[1], width: e.dpDiv.outerWidth(), height: e.dpDiv.outerHeight() }), e.dpDiv.find("." + this._dayOverClass + " a").mouseover();
                    var i = this._getNumberOfMonths(e),
                        r = i[1],
                        o = 17;
                    if (e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), r > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + r).css("width", o * r + "em"), e.dpDiv[(1 != i[0] || 1 != i[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e == $.datepicker._curInst && $.datepicker._datepickerShowing && e.input && e.input.is(":visible") && !e.input.is(":disabled") && e.input[0] != document.activeElement && e.input.focus(), e.yearshtml) {
                        var s = e.yearshtml;
                        setTimeout(function() { s === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), s = e.yearshtml = null }, 0)
                    }
                },
                _getBorders: function(e) { var t = function(e) { return { thin: 1, medium: 2, thick: 3 }[e] || e }; return [parseFloat(t(e.css("border-left-width"))), parseFloat(t(e.css("border-top-width")))] },
                _checkOffset: function(e, t, n) {
                    var i = e.dpDiv.outerWidth(),
                        r = e.dpDiv.outerHeight(),
                        o = e.input ? e.input.outerWidth() : 0,
                        s = e.input ? e.input.outerHeight() : 0,
                        a = document.documentElement.clientWidth + (n ? 0 : $(document).scrollLeft()),
                        l = document.documentElement.clientHeight + (n ? 0 : $(document).scrollTop());
                    return t.left -= this._get(e, "isRTL") ? i - o : 0, t.left -= n && t.left == e.input.offset().left ? $(document).scrollLeft() : 0, t.top -= n && t.top == e.input.offset().top + s ? $(document).scrollTop() : 0, t.left -= Math.min(t.left, t.left + i > a && a > i ? Math.abs(t.left + i - a) : 0), t.top -= Math.min(t.top, t.top + r > l && l > r ? Math.abs(r + s) : 0), t
                },
                _findPos: function(e) { for (var t = this._getInst(e), n = this._get(t, "isRTL"); e && ("hidden" == e.type || 1 != e.nodeType || $.expr.filters.hidden(e));) e = e[n ? "previousSibling" : "nextSibling"]; var i = $(e).offset(); return [i.left, i.top] },
                _hideDatepicker: function(e) {
                    var t = this._curInst;
                    if (t && (!e || t == $.data(e, PROP_NAME)) && this._datepickerShowing) {
                        var n = this._get(t, "showAnim"),
                            i = this._get(t, "duration"),
                            r = function() { $.datepicker._tidyDialog(t) };
                        $.effects && ($.effects.effect[n] || $.effects[n]) ? t.dpDiv.hide(n, $.datepicker._get(t, "showOptions"), i, r) : t.dpDiv["slideDown" == n ? "slideUp" : "fadeIn" == n ? "fadeOut" : "hide"](n ? i : null, r), n || r(), this._datepickerShowing = !1;
                        var o = this._get(t, "onClose");
                        o && o.apply(t.input ? t.input[0] : null, [t.input ? t.input.val() : "", t]), this._lastInput = null, this._inDialog && (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }), $.blockUI && ($.unblockUI(), $("body").append(this.dpDiv))), this._inDialog = !1
                    }
                },
                _tidyDialog: function(e) { e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar") },
                _checkExternalClick: function(e) {
                    if ($.datepicker._curInst) {
                        var t = $(e.target),
                            n = $.datepicker._getInst(t[0]);
                        (t[0].id != $.datepicker._mainDivId && 0 == t.parents("#" + $.datepicker._mainDivId).length && !t.hasClass($.datepicker.markerClassName) && !t.closest("." + $.datepicker._triggerClass).length && $.datepicker._datepickerShowing && (!$.datepicker._inDialog || !$.blockUI) || t.hasClass($.datepicker.markerClassName) && $.datepicker._curInst != n) && $.datepicker._hideDatepicker()
                    }
                },
                _adjustDate: function(e, t, n) {
                    var i = $(e),
                        r = this._getInst(i[0]);
                    this._isDisabledDatepicker(i[0]) || (this._adjustInstDate(r, t + ("M" == n ? this._get(r, "showCurrentAtPos") : 0), n), this._updateDatepicker(r))
                },
                _gotoToday: function(e) {
                    var t = $(e),
                        n = this._getInst(t[0]);
                    if (this._get(n, "gotoCurrent") && n.currentDay) n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear;
                    else {
                        var i = new Date;
                        n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()
                    }
                    this._notifyChange(n), this._adjustDate(t)
                },
                _selectMonthYear: function(e, t, n) {
                    var i = $(e),
                        r = this._getInst(i[0]);
                    r["selected" + ("M" == n ? "Month" : "Year")] = r["draw" + ("M" == n ? "Month" : "Year")] = parseInt(t.options[t.selectedIndex].value, 10), this._notifyChange(r), this._adjustDate(i)
                },
                _selectDay: function(e, t, n, i) {
                    var r = $(e);
                    if (!$(i).hasClass(this._unselectableClass) && !this._isDisabledDatepicker(r[0])) {
                        var o = this._getInst(r[0]);
                        o.selectedDay = o.currentDay = $("a", i).html(), o.selectedMonth = o.currentMonth = t, o.selectedYear = o.currentYear = n, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear))
                    }
                },
                _clearDate: function(e) {
                    {
                        var t = $(e);
                        this._getInst(t[0])
                    }
                    this._selectDate(t, "")
                },
                _selectDate: function(e, t) {
                    var n = $(e),
                        i = this._getInst(n[0]);
                    t = null != t ? t : this._formatDate(i), i.input && i.input.val(t), this._updateAlternate(i);
                    var r = this._get(i, "onSelect");
                    r ? r.apply(i.input ? i.input[0] : null, [t, i]) : i.input && i.input.trigger("change"), i.inline ? this._updateDatepicker(i) : (this._hideDatepicker(), this._lastInput = i.input[0], "object" != typeof i.input[0] && i.input.focus(), this._lastInput = null)
                },
                _updateAlternate: function(e) {
                    var t = this._get(e, "altField");
                    if (t) {
                        var n = this._get(e, "altFormat") || this._get(e, "dateFormat"),
                            i = this._getDate(e),
                            r = this.formatDate(n, i, this._getFormatConfig(e));
                        $(t).each(function() { $(this).val(r) })
                    }
                },
                noWeekends: function(e) { var t = e.getDay(); return [t > 0 && 6 > t, ""] },
                iso8601Week: function(e) {
                    var t = new Date(e.getTime());
                    t.setDate(t.getDate() + 4 - (t.getDay() || 7));
                    var n = t.getTime();
                    return t.setMonth(0), t.setDate(1), Math.floor(Math.round((n - t) / 864e5) / 7) + 1
                },
                parseDate: function(e, t, n) {
                    if (null == e || null == t) throw "Invalid arguments";
                    if (t = "object" == typeof t ? t.toString() : t + "", "" == t) return null;
                    var i = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff;
                    i = "string" != typeof i ? i : (new Date).getFullYear() % 100 + parseInt(i, 10);
                    for (var r = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort, o = (n ? n.dayNames : null) || this._defaults.dayNames, s = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort, a = (n ? n.monthNames : null) || this._defaults.monthNames, l = -1, u = -1, c = -1, h = -1, d = !1, f = function(t) { var n = _ + 1 < e.length && e.charAt(_ + 1) == t; return n && _++, n }, p = function(e) {
                            var n = f(e),
                                i = "@" == e ? 14 : "!" == e ? 20 : "y" == e && n ? 4 : "o" == e ? 3 : 2,
                                r = new RegExp("^\\d{1," + i + "}"),
                                o = t.substring(v).match(r);
                            if (!o) throw "Missing number at position " + v;
                            return v += o[0].length, parseInt(o[0], 10)
                        }, g = function(e, n, i) {
                            var r = $.map(f(e) ? i : n, function(e, t) {
                                    return [
                                        [t, e]
                                    ]
                                }).sort(function(e, t) { return -(e[1].length - t[1].length) }),
                                o = -1;
                            if ($.each(r, function(e, n) { var i = n[1]; return t.substr(v, i.length).toLowerCase() == i.toLowerCase() ? (o = n[0], v += i.length, !1) : void 0 }), -1 != o) return o + 1;
                            throw "Unknown name at position " + v
                        }, m = function() {
                            if (t.charAt(v) != e.charAt(_)) throw "Unexpected literal at position " + v;
                            v++
                        }, v = 0, _ = 0; _ < e.length; _++)
                        if (d) "'" != e.charAt(_) || f("'") ? m() : d = !1;
                        else switch (e.charAt(_)) {
                            case "d":
                                c = p("d");
                                break;
                            case "D":
                                g("D", r, o);
                                break;
                            case "o":
                                h = p("o");
                                break;
                            case "m":
                                u = p("m");
                                break;
                            case "M":
                                u = g("M", s, a);
                                break;
                            case "y":
                                l = p("y");
                                break;
                            case "@":
                                var y = new Date(p("@"));
                                l = y.getFullYear(), u = y.getMonth() + 1, c = y.getDate();
                                break;
                            case "!":
                                var y = new Date((p("!") - this._ticksTo1970) / 1e4);
                                l = y.getFullYear(), u = y.getMonth() + 1, c = y.getDate();
                                break;
                            case "'":
                                f("'") ? m() : d = !0;
                                break;
                            default:
                                m()
                        }
                    if (v < t.length) { var b = t.substr(v); if (!/^\s+/.test(b)) throw "Extra/unparsed characters found in date: " + b }
                    if (-1 == l ? l = (new Date).getFullYear() : 100 > l && (l += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (i >= l ? 0 : -100)), h > -1)
                        for (u = 1, c = h;;) {
                            var w = this._getDaysInMonth(l, u - 1);
                            if (w >= c) break;
                            u++, c -= w
                        }
                    var y = this._daylightSavingAdjust(new Date(l, u - 1, c));
                    if (y.getFullYear() != l || y.getMonth() + 1 != u || y.getDate() != c) throw "Invalid date";
                    return y
                },
                ATOM: "yy-mm-dd",
                COOKIE: "D, dd M yy",
                ISO_8601: "yy-mm-dd",
                RFC_822: "D, d M y",
                RFC_850: "DD, dd-M-y",
                RFC_1036: "D, d M y",
                RFC_1123: "D, d M yy",
                RFC_2822: "D, d M yy",
                RSS: "D, d M y",
                TICKS: "!",
                TIMESTAMP: "@",
                W3C: "yy-mm-dd",
                _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
                formatDate: function(e, t, n) {
                    if (!t) return "";
                    var i = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                        r = (n ? n.dayNames : null) || this._defaults.dayNames,
                        o = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                        s = (n ? n.monthNames : null) || this._defaults.monthNames,
                        a = function(t) { var n = d + 1 < e.length && e.charAt(d + 1) == t; return n && d++, n },
                        l = function(e, t, n) {
                            var i = "" + t;
                            if (a(e))
                                for (; i.length < n;) i = "0" + i;
                            return i
                        },
                        u = function(e, t, n, i) { return a(e) ? i[t] : n[t] },
                        c = "",
                        h = !1;
                    if (t)
                        for (var d = 0; d < e.length; d++)
                            if (h) "'" != e.charAt(d) || a("'") ? c += e.charAt(d) : h = !1;
                            else switch (e.charAt(d)) {
                                case "d":
                                    c += l("d", t.getDate(), 2);
                                    break;
                                case "D":
                                    c += u("D", t.getDay(), i, r);
                                    break;
                                case "o":
                                    c += l("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                    break;
                                case "m":
                                    c += l("m", t.getMonth() + 1, 2);
                                    break;
                                case "M":
                                    c += u("M", t.getMonth(), o, s);
                                    break;
                                case "y":
                                    c += a("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
                                    break;
                                case "@":
                                    c += t.getTime();
                                    break;
                                case "!":
                                    c += 1e4 * t.getTime() + this._ticksTo1970;
                                    break;
                                case "'":
                                    a("'") ? c += "'" : h = !0;
                                    break;
                                default:
                                    c += e.charAt(d)
                            }
                    return c
                },
                _possibleChars: function(e) {
                    for (var t = "", n = !1, i = function(t) { var n = r + 1 < e.length && e.charAt(r + 1) == t; return n && r++, n }, r = 0; r < e.length; r++)
                        if (n) "'" != e.charAt(r) || i("'") ? t += e.charAt(r) : n = !1;
                        else switch (e.charAt(r)) {
                            case "d":
                            case "m":
                            case "y":
                            case "@":
                                t += "0123456789";
                                break;
                            case "D":
                            case "M":
                                return null;
                            case "'":
                                i("'") ? t += "'" : n = !0;
                                break;
                            default:
                                t += e.charAt(r)
                        }
                    return t
                },
                _get: function(e, t) { return e.settings[t] !== undefined ? e.settings[t] : this._defaults[t] },
                _setDateFromField: function(e, t) {
                    if (e.input.val() != e.lastVal) {
                        var n, i, r = this._get(e, "dateFormat"),
                            o = e.lastVal = e.input ? e.input.val() : null;
                        n = i = this._getDefaultDate(e);
                        var s = this._getFormatConfig(e);
                        try { n = this.parseDate(r, o, s) || i } catch (a) { this.log(a), o = t ? "" : o }
                        e.selectedDay = n.getDate(), e.drawMonth = e.selectedMonth = n.getMonth(), e.drawYear = e.selectedYear = n.getFullYear(), e.currentDay = o ? n.getDate() : 0, e.currentMonth = o ? n.getMonth() : 0, e.currentYear = o ? n.getFullYear() : 0, this._adjustInstDate(e)
                    }
                },
                _getDefaultDate: function(e) { return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date)) },
                _determineDate: function(e, t, n) {
                    var i = function(e) { var t = new Date; return t.setDate(t.getDate() + e), t },
                        r = function(t) {
                            try { return $.datepicker.parseDate($.datepicker._get(e, "dateFormat"), t, $.datepicker._getFormatConfig(e)) } catch (n) {}
                            for (var i = (t.toLowerCase().match(/^c/) ? $.datepicker._getDate(e) : null) || new Date, r = i.getFullYear(), o = i.getMonth(), s = i.getDate(), a = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = a.exec(t); l;) {
                                switch (l[2] || "d") {
                                    case "d":
                                    case "D":
                                        s += parseInt(l[1], 10);
                                        break;
                                    case "w":
                                    case "W":
                                        s += 7 * parseInt(l[1], 10);
                                        break;
                                    case "m":
                                    case "M":
                                        o += parseInt(l[1], 10), s = Math.min(s, $.datepicker._getDaysInMonth(r, o));
                                        break;
                                    case "y":
                                    case "Y":
                                        r += parseInt(l[1], 10), s = Math.min(s, $.datepicker._getDaysInMonth(r, o))
                                }
                                l = a.exec(t)
                            }
                            return new Date(r, o, s)
                        },
                        o = null == t || "" === t ? n : "string" == typeof t ? r(t) : "number" == typeof t ? isNaN(t) ? n : i(t) : new Date(t.getTime());
                    return o = o && "Invalid Date" == o.toString() ? n : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o)
                },
                _daylightSavingAdjust: function(e) { return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null },
                _setDate: function(e, t, n) {
                    var i = !t,
                        r = e.selectedMonth,
                        o = e.selectedYear,
                        s = this._restrictMinMax(e, this._determineDate(e, t, new Date));
                    e.selectedDay = e.currentDay = s.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = s.getMonth(), e.drawYear = e.selectedYear = e.currentYear = s.getFullYear(), r == e.selectedMonth && o == e.selectedYear || n || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(i ? "" : this._formatDate(e))
                },
                _getDate: function(e) { var t = !e.currentYear || e.input && "" == e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay)); return t },
                _attachHandlers: function(e) {
                    var t = this._get(e, "stepMonths"),
                        n = "#" + e.id.replace(/\\\\/g, "\\");
                    e.dpDiv.find("[data-handler]").map(function() {
                        var e = { prev: function() { window["DP_jQuery_" + dpuuid].datepicker._adjustDate(n, -t, "M") }, next: function() { window["DP_jQuery_" + dpuuid].datepicker._adjustDate(n, +t, "M") }, hide: function() { window["DP_jQuery_" + dpuuid].datepicker._hideDatepicker() }, today: function() { window["DP_jQuery_" + dpuuid].datepicker._gotoToday(n) }, selectDay: function() { return window["DP_jQuery_" + dpuuid].datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1 }, selectMonth: function() { return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(n, this, "M"), !1 }, selectYear: function() { return window["DP_jQuery_" + dpuuid].datepicker._selectMonthYear(n, this, "Y"), !1 } };
                        $(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
                    })
                },
                _generateHTML: function(e) {
                    var t = new Date;
                    t = this._daylightSavingAdjust(new Date(t.getFullYear(), t.getMonth(), t.getDate()));
                    var n = this._get(e, "isRTL"),
                        i = this._get(e, "showButtonPanel"),
                        r = this._get(e, "hideIfNoPrevNext"),
                        o = this._get(e, "navigationAsDateFormat"),
                        s = this._getNumberOfMonths(e),
                        a = this._get(e, "showCurrentAtPos"),
                        l = this._get(e, "stepMonths"),
                        u = 1 != s[0] || 1 != s[1],
                        c = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                        h = this._getMinMaxDate(e, "min"),
                        d = this._getMinMaxDate(e, "max"),
                        f = e.drawMonth - a,
                        p = e.drawYear;
                    if (0 > f && (f += 12, p--), d) { var g = this._daylightSavingAdjust(new Date(d.getFullYear(), d.getMonth() - s[0] * s[1] + 1, d.getDate())); for (g = h && h > g ? h : g; this._daylightSavingAdjust(new Date(p, f, 1)) > g;) f--, 0 > f && (f = 11, p--) }
                    e.drawMonth = f, e.drawYear = p;
                    var m = this._get(e, "prevText");
                    m = o ? this.formatDate(m, this._daylightSavingAdjust(new Date(p, f - l, 1)), this._getFormatConfig(e)) : m;
                    var v = this._canAdjustMonth(e, -1, p, f) ? '<a class="ui-datepicker-prev ui-corner-all" data-handler="prev" data-event="click" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "e" : "w") + '">' + m + "</span></a>" : r ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + m + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "e" : "w") + '">' + m + "</span></a>",
                        _ = this._get(e, "nextText");
                    _ = o ? this.formatDate(_, this._daylightSavingAdjust(new Date(p, f + l, 1)), this._getFormatConfig(e)) : _;
                    var y = this._canAdjustMonth(e, 1, p, f) ? '<a class="ui-datepicker-next ui-corner-all" data-handler="next" data-event="click" title="' + _ + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "w" : "e") + '">' + _ + "</span></a>" : r ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + _ + '"><span class="ui-icon ui-icon-circle-triangle-' + (n ? "w" : "e") + '">' + _ + "</span></a>",
                        b = this._get(e, "currentText"),
                        w = this._get(e, "gotoCurrent") && e.currentDay ? c : t;
                    b = o ? this.formatDate(b, w, this._getFormatConfig(e)) : b;
                    var k = e.inline ? "" : '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" data-handler="hide" data-event="click">' + this._get(e, "closeText") + "</button>",
                        x = i ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (n ? k : "") + (this._isInRange(e, w) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" data-handler="today" data-event="click">' + b + "</button>" : "") + (n ? "" : k) + "</div>" : "",
                        C = parseInt(this._get(e, "firstDay"), 10);
                    C = isNaN(C) ? 0 : C;
                    for (var T = this._get(e, "showWeek"), E = this._get(e, "dayNames"), D = (this._get(e, "dayNamesShort"), this._get(e, "dayNamesMin")), S = this._get(e, "monthNames"), P = this._get(e, "monthNamesShort"), N = this._get(e, "beforeShowDay"), I = this._get(e, "showOtherMonths"), M = this._get(e, "selectOtherMonths"), A = (this._get(e, "calculateWeek") || this.iso8601Week, this._getDefaultDate(e)), O = "", j = 0; j < s[0]; j++) {
                        var R = "";
                        this.maxRows = 4;
                        for (var H = 0; H < s[1]; H++) {
                            var L = this._daylightSavingAdjust(new Date(p, f, e.selectedDay)),
                                F = " ui-corner-all",
                                z = "";
                            if (u) {
                                if (z += '<div class="ui-datepicker-group', s[1] > 1) switch (H) {
                                    case 0:
                                        z += " ui-datepicker-group-first", F = " ui-corner-" + (n ? "right" : "left");
                                        break;
                                    case s[1] - 1:
                                        z += " ui-datepicker-group-last", F = " ui-corner-" + (n ? "left" : "right");
                                        break;
                                    default:
                                        z += " ui-datepicker-group-middle", F = ""
                                }
                                z += '">'
                            }
                            z += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + F + '">' + (/all|left/.test(F) && 0 == j ? n ? y : v : "") + (/all|right/.test(F) && 0 == j ? n ? v : y : "") + this._generateMonthYearHeader(e, f, p, h, d, j > 0 || H > 0, S, P) + '</div><table class="ui-datepicker-calendar"><thead><tr>';
                            for (var B = T ? '<th class="ui-datepicker-week-col">' + this._get(e, "weekHeader") + "</th>" : "", W = 0; 7 > W; W++) {
                                var q = (W + C) % 7;
                                B += "<th" + ((W + C + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + E[q] + '">' + D[q] + "</span></th>"
                            }
                            z += B + "</tr></thead><tbody>";
                            var U = this._getDaysInMonth(p, f);
                            p == e.selectedYear && f == e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, U));
                            var V = (this._getFirstDayOfMonth(p, f) - C + 7) % 7,
                                Y = Math.ceil((V + U) / 7),
                                Q = u ? this.maxRows > Y ? this.maxRows : Y : Y;
                            this.maxRows = Q;
                            for (var X = this._daylightSavingAdjust(new Date(p, f, 1 - V)), J = 0; Q > J; J++) {
                                z += "<tr>";
                                for (var K = T ? '<td class="ui-datepicker-week-col">' + this._get(e, "calculateWeek")(X) + "</td>" : "", W = 0; 7 > W; W++) {
                                    var G = N ? N.apply(e.input ? e.input[0] : null, [X]) : [!0, ""],
                                        Z = X.getMonth() != f,
                                        et = Z && !M || !G[0] || h && h > X || d && X > d;
                                    K += '<td class="' + ((W + C + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (Z ? " ui-datepicker-other-month" : "") + (X.getTime() == L.getTime() && f == e.selectedMonth && e._keyEvent || A.getTime() == X.getTime() && A.getTime() == L.getTime() ? " " + this._dayOverClass : "") + (et ? " " + this._unselectableClass + " ui-state-disabled" : "") + (Z && !I ? "" : " " + G[1] + (X.getTime() == c.getTime() ? " " + this._currentClass : "") + (X.getTime() == t.getTime() ? " ui-datepicker-today" : "")) + '"' + (Z && !I || !G[2] ? "" : ' title="' + G[2] + '"') + (et ? "" : ' data-handler="selectDay" data-event="click" data-month="' + X.getMonth() + '" data-year="' + X.getFullYear() + '"') + ">" + (Z && !I ? "&#xa0;" : et ? '<span class="ui-state-default">' + X.getDate() + "</span>" : '<a class="ui-state-default' + (X.getTime() == t.getTime() ? " ui-state-highlight" : "") + (X.getTime() == c.getTime() ? " ui-state-active" : "") + (Z ? " ui-priority-secondary" : "") + '" href="#">' + X.getDate() + "</a>") + "</td>", X.setDate(X.getDate() + 1), X = this._daylightSavingAdjust(X)
                                }
                                z += K + "</tr>"
                            }
                            f++, f > 11 && (f = 0, p++), z += "</tbody></table>" + (u ? "</div>" + (s[0] > 0 && H == s[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : ""), R += z
                        }
                        O += R
                    }
                    return O += x + ($.ui.ie6 && !e.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : ""), e._keyEvent = !1, O
                },
                _generateMonthYearHeader: function(e, t, n, i, r, o, s, a) {
                    var l = this._get(e, "changeMonth"),
                        u = this._get(e, "changeYear"),
                        c = this._get(e, "showMonthAfterYear"),
                        h = '<div class="ui-datepicker-title">',
                        d = "";
                    if (o || !l) d += '<span class="ui-datepicker-month">' + s[t] + "</span>";
                    else {
                        var f = i && i.getFullYear() == n,
                            p = r && r.getFullYear() == n;
                        d += '<select class="ui-datepicker-month" data-handler="selectMonth" data-event="change">';
                        for (var g = 0; 12 > g; g++)(!f || g >= i.getMonth()) && (!p || g <= r.getMonth()) && (d += '<option value="' + g + '"' + (g == t ? ' selected="selected"' : "") + ">" + a[g] + "</option>");
                        d += "</select>"
                    }
                    if (c || (h += d + (!o && l && u ? "" : "&#xa0;")), !e.yearshtml)
                        if (e.yearshtml = "", o || !u) h += '<span class="ui-datepicker-year">' + n + "</span>";
                        else {
                            var m = this._get(e, "yearRange").split(":"),
                                v = (new Date).getFullYear(),
                                _ = function(e) { var t = e.match(/c[+-].*/) ? n + parseInt(e.substring(1), 10) : e.match(/[+-].*/) ? v + parseInt(e, 10) : parseInt(e, 10); return isNaN(t) ? v : t },
                                y = _(m[0]),
                                b = Math.max(y, _(m[1] || ""));
                            for (y = i ? Math.max(y, i.getFullYear()) : y, b = r ? Math.min(b, r.getFullYear()) : b, e.yearshtml += '<select class="ui-datepicker-year" data-handler="selectYear" data-event="change">'; b >= y; y++) e.yearshtml += '<option value="' + y + '"' + (y == n ? ' selected="selected"' : "") + ">" + y + "</option>";
                            e.yearshtml += "</select>", h += e.yearshtml, e.yearshtml = null
                        }
                    return h += this._get(e, "yearSuffix"), c && (h += (!o && l && u ? "" : "&#xa0;") + d), h += "</div>"
                },
                _adjustInstDate: function(e, t, n) {
                    var i = e.drawYear + ("Y" == n ? t : 0),
                        r = e.drawMonth + ("M" == n ? t : 0),
                        o = Math.min(e.selectedDay, this._getDaysInMonth(i, r)) + ("D" == n ? t : 0),
                        s = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(i, r, o)));
                    e.selectedDay = s.getDate(), e.drawMonth = e.selectedMonth = s.getMonth(), e.drawYear = e.selectedYear = s.getFullYear(), ("M" == n || "Y" == n) && this._notifyChange(e)
                },
                _restrictMinMax: function(e, t) {
                    var n = this._getMinMaxDate(e, "min"),
                        i = this._getMinMaxDate(e, "max"),
                        r = n && n > t ? n : t;
                    return r = i && r > i ? i : r
                },
                _notifyChange: function(e) {
                    var t = this._get(e, "onChangeMonthYear");
                    t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
                },
                _getNumberOfMonths: function(e) { var t = this._get(e, "numberOfMonths"); return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t },
                _getMinMaxDate: function(e, t) { return this._determineDate(e, this._get(e, t + "Date"), null) },
                _getDaysInMonth: function(e, t) { return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate() },
                _getFirstDayOfMonth: function(e, t) { return new Date(e, t, 1).getDay() },
                _canAdjustMonth: function(e, t, n, i) {
                    var r = this._getNumberOfMonths(e),
                        o = this._daylightSavingAdjust(new Date(n, i + (0 > t ? t : r[0] * r[1]), 1));
                    return 0 > t && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(e, o)
                },
                _isInRange: function(e, t) {
                    var n = this._getMinMaxDate(e, "min"),
                        i = this._getMinMaxDate(e, "max");
                    return (!n || t.getTime() >= n.getTime()) && (!i || t.getTime() <= i.getTime())
                },
                _getFormatConfig: function(e) { var t = this._get(e, "shortYearCutoff"); return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), { shortYearCutoff: t, dayNamesShort: this._get(e, "dayNamesShort"), dayNames: this._get(e, "dayNames"), monthNamesShort: this._get(e, "monthNamesShort"), monthNames: this._get(e, "monthNames") } },
                _formatDate: function(e, t, n, i) { t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear); var r = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(i, n, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay)); return this.formatDate(this._get(e, "dateFormat"), r, this._getFormatConfig(e)) }
            }), $.fn.datepicker = function(e) {
                if (!this.length) return this;
                $.datepicker.initialized || ($(document).mousedown($.datepicker._checkExternalClick).find(document.body).append($.datepicker.dpDiv), $.datepicker.initialized = !0);
                var t = Array.prototype.slice.call(arguments, 1);
                return "string" != typeof e || "isDisabled" != e && "getDate" != e && "widget" != e ? "option" == e && 2 == arguments.length && "string" == typeof arguments[1] ? $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this[0]].concat(t)) : this.each(function() { "string" == typeof e ? $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this].concat(t)) : $.datepicker._attachDatepicker(this, e) }) : $.datepicker["_" + e + "Datepicker"].apply($.datepicker, [this[0]].concat(t))
            }, $.datepicker = new Datepicker, $.datepicker.initialized = !1, $.datepicker.uuid = (new Date).getTime(), $.datepicker.version = "1.9.2", window["DP_jQuery_" + dpuuid] = $
        }(jQuery),
        function(e, t) {
            var n = "ui-dialog ui-widget ui-widget-content ui-corner-all ",
                i = { buttons: !0, height: !0, maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0, width: !0 },
                r = { maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0 };
            e.widget("ui.dialog", {
                version: "1.9.2",
                options: {
                    autoOpen: !0,
                    buttons: {},
                    closeOnEscape: !0,
                    closeText: "close",
                    dialogClass: "",
                    draggable: !0,
                    hide: null,
                    height: "auto",
                    maxHeight: !1,
                    maxWidth: !1,
                    minHeight: 150,
                    minWidth: 150,
                    modal: !1,
                    position: {
                        my: "center",
                        at: "center",
                        of: window,
                        collision: "fit",
                        using: function(t) {
                            var n = e(this).css(t).offset().top;
                            0 > n && e(this).css("top", t.top - n)
                        }
                    },
                    resizable: !0,
                    show: null,
                    stack: !0,
                    title: "",
                    width: 300,
                    zIndex: 1e3
                },
                _create: function() {
                    this.originalTitle = this.element.attr("title"), "string" != typeof this.originalTitle && (this.originalTitle = ""), this.oldPosition = { parent: this.element.parent(), index: this.element.parent().children().index(this.element) }, this.options.title = this.options.title || this.originalTitle;
                    var t, i, r, o, s, a = this,
                        l = this.options,
                        u = l.title || "&#160;";
                    t = (this.uiDialog = e("<div>")).addClass(n + l.dialogClass).css({ display: "none", outline: 0, zIndex: l.zIndex }).attr("tabIndex", -1).keydown(function(t) { l.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === e.ui.keyCode.ESCAPE && (a.close(t), t.preventDefault()) }).mousedown(function(e) { a.moveToTop(!1, e) }).appendTo("body"), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(t), i = (this.uiDialogTitlebar = e("<div>")).addClass("ui-dialog-titlebar  ui-widget-header  ui-corner-all  ui-helper-clearfix").bind("mousedown", function() { t.focus() }).prependTo(t), r = e("<a href='#'></a>").addClass("ui-dialog-titlebar-close  ui-corner-all").attr("role", "button").click(function(e) { e.preventDefault(), a.close(e) }).appendTo(i), (this.uiDialogTitlebarCloseText = e("<span>")).addClass("ui-icon ui-icon-closethick").text(l.closeText).appendTo(r), o = e("<span>").uniqueId().addClass("ui-dialog-title").html(u).prependTo(i), s = (this.uiDialogButtonPane = e("<div>")).addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), (this.uiButtonSet = e("<div>")).addClass("ui-dialog-buttonset").appendTo(s), t.attr({ role: "dialog", "aria-labelledby": o.attr("id") }), i.find("*").add(i).disableSelection(), this._hoverable(r), this._focusable(r), l.draggable && e.fn.draggable && this._makeDraggable(), l.resizable && e.fn.resizable && this._makeResizable(), this._createButtons(l.buttons), this._isOpen = !1, e.fn.bgiframe && t.bgiframe(), this._on(t, {
                        keydown: function(n) {
                            if (l.modal && n.keyCode === e.ui.keyCode.TAB) {
                                var i = e(":tabbable", t),
                                    r = i.filter(":first"),
                                    o = i.filter(":last");
                                return n.target !== o[0] || n.shiftKey ? n.target === r[0] && n.shiftKey ? (o.focus(1), !1) : void 0 : (r.focus(1), !1)
                            }
                        }
                    })
                },
                _init: function() { this.options.autoOpen && this.open() },
                _destroy: function() {
                    var e, t = this.oldPosition;
                    this.overlay && this.overlay.destroy(), this.uiDialog.hide(), this.element.removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body"), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), e = t.parent.children().eq(t.index), e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element)
                },
                widget: function() { return this.uiDialog },
                close: function(t) { var n, i, r = this; if (this._isOpen && !1 !== this._trigger("beforeClose", t)) return this._isOpen = !1, this.overlay && this.overlay.destroy(), this.options.hide ? this._hide(this.uiDialog, this.options.hide, function() { r._trigger("close", t) }) : (this.uiDialog.hide(), this._trigger("close", t)), e.ui.dialog.overlay.resize(), this.options.modal && (n = 0, e(".ui-dialog").each(function() { this !== r.uiDialog[0] && (i = e(this).css("z-index"), isNaN(i) || (n = Math.max(n, i))) }), e.ui.dialog.maxZ = n), this },
                isOpen: function() { return this._isOpen },
                moveToTop: function(t, n) { var i, r = this.options; return r.modal && !t || !r.stack && !r.modal ? this._trigger("focus", n) : (r.zIndex > e.ui.dialog.maxZ && (e.ui.dialog.maxZ = r.zIndex), this.overlay && (e.ui.dialog.maxZ += 1, e.ui.dialog.overlay.maxZ = e.ui.dialog.maxZ, this.overlay.$el.css("z-index", e.ui.dialog.overlay.maxZ)), i = { scrollTop: this.element.scrollTop(), scrollLeft: this.element.scrollLeft() }, e.ui.dialog.maxZ += 1, this.uiDialog.css("z-index", e.ui.dialog.maxZ), this.element.attr(i), this._trigger("focus", n), this) },
                open: function() {
                    if (!this._isOpen) {
                        var t, n = this.options,
                            i = this.uiDialog;
                        return this._size(), this._position(n.position), i.show(n.show), this.overlay = n.modal ? new e.ui.dialog.overlay(this) : null, this.moveToTop(!0), t = this.element.find(":tabbable"), t.length || (t = this.uiDialogButtonPane.find(":tabbable"), t.length || (t = i)), t.eq(0).focus(), this._isOpen = !0, this._trigger("open"), this
                    }
                },
                _createButtons: function(t) {
                    var n = this,
                        i = !1;
                    this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), "object" == typeof t && null !== t && e.each(t, function() { return !(i = !0) }), i ? (e.each(t, function(t, i) {
                        var r, o;
                        i = e.isFunction(i) ? { click: i, text: t } : i, i = e.extend({ type: "button" }, i), o = i.click, i.click = function() { o.apply(n.element[0], arguments) }, r = e("<button></button>", i).appendTo(n.uiButtonSet), e.fn.button && r.button()
                    }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog)) : this.uiDialog.removeClass("ui-dialog-buttons")
                },
                _makeDraggable: function() {
                    function t(e) { return { position: e.position, offset: e.offset } }
                    var n = this,
                        i = this.options;
                    this.uiDialog.draggable({ cancel: ".ui-dialog-content, .ui-dialog-titlebar-close", handle: ".ui-dialog-titlebar", containment: "document", start: function(i, r) { e(this).addClass("ui-dialog-dragging"), n._trigger("dragStart", i, t(r)) }, drag: function(e, i) { n._trigger("drag", e, t(i)) }, stop: function(r, o) { i.position = [o.position.left - n.document.scrollLeft(), o.position.top - n.document.scrollTop()], e(this).removeClass("ui-dialog-dragging"), n._trigger("dragStop", r, t(o)), e.ui.dialog.overlay.resize() } })
                },
                _makeResizable: function(n) {
                    function i(e) { return { originalPosition: e.originalPosition, originalSize: e.originalSize, position: e.position, size: e.size } }
                    n = n === t ? this.options.resizable : n;
                    var r = this,
                        o = this.options,
                        s = this.uiDialog.css("position"),
                        a = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
                    this.uiDialog.resizable({ cancel: ".ui-dialog-content", containment: "document", alsoResize: this.element, maxWidth: o.maxWidth, maxHeight: o.maxHeight, minWidth: o.minWidth, minHeight: this._minHeight(), handles: a, start: function(t, n) { e(this).addClass("ui-dialog-resizing"), r._trigger("resizeStart", t, i(n)) }, resize: function(e, t) { r._trigger("resize", e, i(t)) }, stop: function(t, n) { e(this).removeClass("ui-dialog-resizing"), o.height = e(this).height(), o.width = e(this).width(), r._trigger("resizeStop", t, i(n)), e.ui.dialog.overlay.resize() } }).css("position", s).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
                },
                _minHeight: function() { var e = this.options; return "auto" === e.height ? e.minHeight : Math.min(e.minHeight, e.height) },
                _position: function(t) {
                    var n, i = [],
                        r = [0, 0];
                    t ? (("string" == typeof t || "object" == typeof t && "0" in t) && (i = t.split ? t.split(" ") : [t[0], t[1]], 1 === i.length && (i[1] = i[0]), e.each(["left", "top"], function(e, t) {+i[e] === i[e] && (r[e] = i[e], i[e] = t) }), t = { my: i[0] + (r[0] < 0 ? r[0] : "+" + r[0]) + " " + i[1] + (r[1] < 0 ? r[1] : "+" + r[1]), at: i.join(" ") }), t = e.extend({}, e.ui.dialog.prototype.options.position, t)) : t = e.ui.dialog.prototype.options.position, n = this.uiDialog.is(":visible"), n || this.uiDialog.show(), this.uiDialog.position(t), n || this.uiDialog.hide()
                },
                _setOptions: function(t) {
                    var n = this,
                        o = {},
                        s = !1;
                    e.each(t, function(e, t) { n._setOption(e, t), e in i && (s = !0), e in r && (o[e] = t) }), s && this._size(), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", o)
                },
                _setOption: function(t, i) {
                    var r, o, s = this.uiDialog;
                    switch (t) {
                        case "buttons":
                            this._createButtons(i);
                            break;
                        case "closeText":
                            this.uiDialogTitlebarCloseText.text("" + i);
                            break;
                        case "dialogClass":
                            s.removeClass(this.options.dialogClass).addClass(n + i);
                            break;
                        case "disabled":
                            i ? s.addClass("ui-dialog-disabled") : s.removeClass("ui-dialog-disabled");
                            break;
                        case "draggable":
                            r = s.is(":data(draggable)"), r && !i && s.draggable("destroy"), !r && i && this._makeDraggable();
                            break;
                        case "position":
                            this._position(i);
                            break;
                        case "resizable":
                            o = s.is(":data(resizable)"), o && !i && s.resizable("destroy"), o && "string" == typeof i && s.resizable("option", "handles", i), o || i === !1 || this._makeResizable(i);
                            break;
                        case "title":
                            e(".ui-dialog-title", this.uiDialogTitlebar).html("" + (i || "&#160;"))
                    }
                    this._super(t, i)
                },
                _size: function() {
                    var t, n, i, r = this.options,
                        o = this.uiDialog.is(":visible");
                    this.element.show().css({ width: "auto", minHeight: 0, height: 0 }), r.minWidth > r.width && (r.width = r.minWidth), t = this.uiDialog.css({ height: "auto", width: r.width }).outerHeight(), n = Math.max(0, r.minHeight - t), "auto" === r.height ? e.support.minHeight ? this.element.css({ minHeight: n, height: "auto" }) : (this.uiDialog.show(), i = this.element.css("height", "auto").height(), o || this.uiDialog.hide(), this.element.height(Math.max(i, n))) : this.element.height(Math.max(r.height - t, 0)), this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
                }
            }), e.extend(e.ui.dialog, { uuid: 0, maxZ: 0, getTitleId: function(e) { var t = e.attr("id"); return t || (this.uuid += 1, t = this.uuid), "ui-dialog-title-" + t }, overlay: function(t) { this.$el = e.ui.dialog.overlay.create(t) } }), e.extend(e.ui.dialog.overlay, {
                instances: [],
                oldInstances: [],
                maxZ: 0,
                events: e.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function(e) { return e + ".dialog-overlay" }).join(" "),
                create: function(t) {
                    0 === this.instances.length && (setTimeout(function() { e.ui.dialog.overlay.instances.length && e(document).bind(e.ui.dialog.overlay.events, function(t) { return e(t.target).zIndex() < e.ui.dialog.overlay.maxZ ? !1 : void 0 }) }, 1), e(window).bind("resize.dialog-overlay", e.ui.dialog.overlay.resize));
                    var n = this.oldInstances.pop() || e("<div>").addClass("ui-widget-overlay");
                    return e(document).bind("keydown.dialog-overlay", function(i) {
                        var r = e.ui.dialog.overlay.instances;
                        0 !== r.length && r[r.length - 1] === n && t.options.closeOnEscape && !i.isDefaultPrevented() && i.keyCode && i.keyCode === e.ui.keyCode.ESCAPE && (t.close(i), i.preventDefault())
                    }), n.appendTo(document.body).css({ width: this.width(), height: this.height() }), e.fn.bgiframe && n.bgiframe(), this.instances.push(n), n
                },
                destroy: function(t) {
                    var n = e.inArray(t, this.instances),
                        i = 0; - 1 !== n && this.oldInstances.push(this.instances.splice(n, 1)[0]), 0 === this.instances.length && e([document, window]).unbind(".dialog-overlay"), t.height(0).width(0).remove(), e.each(this.instances, function() { i = Math.max(i, this.css("z-index")) }), this.maxZ = i
                },
                height: function() { var t, n; return e.ui.ie ? (t = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight), n = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight), n > t ? e(window).height() + "px" : t + "px") : e(document).height() + "px" },
                width: function() { var t, n; return e.ui.ie ? (t = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), n = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth), n > t ? e(window).width() + "px" : t + "px") : e(document).width() + "px" },
                resize: function() {
                    var t = e([]);
                    e.each(e.ui.dialog.overlay.instances, function() { t = t.add(this) }), t.css({ width: 0, height: 0 }).css({ width: e.ui.dialog.overlay.width(), height: e.ui.dialog.overlay.height() })
                }
            }), e.extend(e.ui.dialog.overlay.prototype, { destroy: function() { e.ui.dialog.overlay.destroy(this.$el) } })
        }(jQuery),
        function(e) {
            var t = !1;
            e.widget("ui.menu", {
                version: "1.9.2",
                defaultElement: "<ul>",
                delay: 300,
                options: { icons: { submenu: "ui-icon-carat-1-e" }, menus: "ul", position: { my: "left top", at: "right top" }, role: "menu", blur: null, focus: null, select: null },
                _create: function() {
                    this.activeMenu = this.element, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({ role: this.options.role, tabIndex: 0 }).bind("click" + this.eventNamespace, e.proxy(function(e) { this.options.disabled && e.preventDefault() }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                        "mousedown .ui-menu-item > a": function(e) { e.preventDefault() },
                        "click .ui-state-disabled > a": function(e) { e.preventDefault() },
                        "click .ui-menu-item:has(a)": function(n) { var i = e(n.target).closest(".ui-menu-item");!t && i.not(".ui-state-disabled").length && (t = !0, this.select(n), i.has(".ui-menu").length ? this.expand(n) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer))) },
                        "mouseenter .ui-menu-item": function(t) {
                            var n = e(t.currentTarget);
                            n.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(t, n)
                        },
                        mouseleave: "collapseAll",
                        "mouseleave .ui-menu": "collapseAll",
                        focus: function(e, t) {
                            var n = this.active || this.element.children(".ui-menu-item").eq(0);
                            t || this.focus(e, n)
                        },
                        blur: function(t) { this._delay(function() { e.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t) }) },
                        keydown: "_keydown"
                    }), this.refresh(), this._on(this.document, { click: function(n) { e(n.target).closest(".ui-menu").length || this.collapseAll(n), t = !1 } })
                },
                _destroy: function() {
                    this.element.removeAttr("aria-activedescendant").find(".ui-menu").andSelf().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                        var t = e(this);
                        t.data("ui-menu-submenu-carat") && t.remove()
                    }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
                },
                _keydown: function(t) {
                    function n(e) { return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&") }
                    var i, r, o, s, a, l = !0;
                    switch (t.keyCode) {
                        case e.ui.keyCode.PAGE_UP:
                            this.previousPage(t);
                            break;
                        case e.ui.keyCode.PAGE_DOWN:
                            this.nextPage(t);
                            break;
                        case e.ui.keyCode.HOME:
                            this._move("first", "first", t);
                            break;
                        case e.ui.keyCode.END:
                            this._move("last", "last", t);
                            break;
                        case e.ui.keyCode.UP:
                            this.previous(t);
                            break;
                        case e.ui.keyCode.DOWN:
                            this.next(t);
                            break;
                        case e.ui.keyCode.LEFT:
                            this.collapse(t);
                            break;
                        case e.ui.keyCode.RIGHT:
                            this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                            break;
                        case e.ui.keyCode.ENTER:
                        case e.ui.keyCode.SPACE:
                            this._activate(t);
                            break;
                        case e.ui.keyCode.ESCAPE:
                            this.collapse(t);
                            break;
                        default:
                            l = !1, r = this.previousFilter || "", o = String.fromCharCode(t.keyCode), s = !1, clearTimeout(this.filterTimer), o === r ? s = !0 : o = r + o, a = new RegExp("^" + n(o), "i"), i = this.activeMenu.children(".ui-menu-item").filter(function() { return a.test(e(this).children("a").text()) }), i = s && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (o = String.fromCharCode(t.keyCode), a = new RegExp("^" + n(o), "i"), i = this.activeMenu.children(".ui-menu-item").filter(function() { return a.test(e(this).children("a").text()) })), i.length ? (this.focus(t, i), i.length > 1 ? (this.previousFilter = o, this.filterTimer = this._delay(function() { delete this.previousFilter }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
                    }
                    l && t.preventDefault()
                },
                _activate: function(e) { this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(e) : this.select(e)) },
                refresh: function() {
                    var t, n = this.options.icons.submenu,
                        i = this.element.find(this.options.menus);
                    i.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({ role: this.options.role, "aria-hidden": "true", "aria-expanded": "false" }).each(function() {
                        var t = e(this),
                            i = t.prev("a"),
                            r = e("<span>").addClass("ui-menu-icon ui-icon " + n).data("ui-menu-submenu-carat", !0);
                        i.attr("aria-haspopup", "true").prepend(r), t.attr("aria-labelledby", i.attr("id"))
                    }), t = i.add(this.element), t.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({ tabIndex: -1, role: this._itemRole() }), t.children(":not(.ui-menu-item)").each(function() { var t = e(this); /[^\-â€”â€“\s]/.test(t.text()) || t.addClass("ui-widget-content ui-menu-divider") }), t.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !e.contains(this.element[0], this.active[0]) && this.blur()
                },
                _itemRole: function() { return { menu: "menuitem", listbox: "option" }[this.options.role] },
                focus: function(e, t) {
                    var n, i;
                    this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), i = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", i.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), e && "keydown" === e.type ? this._close() : this.timer = this._delay(function() { this._close() }, this.delay), n = t.children(".ui-menu"), n.length && /^mouse/.test(e.type) && this._startOpening(n), this.activeMenu = t.parent(), this._trigger("focus", e, { item: t })
                },
                _scrollIntoView: function(t) {
                    var n, i, r, o, s, a;
                    this._hasScroll() && (n = parseFloat(e.css(this.activeMenu[0], "borderTopWidth")) || 0, i = parseFloat(e.css(this.activeMenu[0], "paddingTop")) || 0, r = t.offset().top - this.activeMenu.offset().top - n - i, o = this.activeMenu.scrollTop(), s = this.activeMenu.height(), a = t.height(), 0 > r ? this.activeMenu.scrollTop(o + r) : r + a > s && this.activeMenu.scrollTop(o + r - s + a))
                },
                blur: function(e, t) { t || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", e, { item: this.active })) },
                _startOpening: function(e) { clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function() { this._close(), this._open(e) }, this.delay)) },
                _open: function(t) {
                    var n = e.extend({ of: this.active }, this.options.position);
                    clearTimeout(this.timer), this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true"), t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(n)
                },
                collapseAll: function(t, n) {
                    clearTimeout(this.timer), this.timer = this._delay(function() {
                        var i = n ? this.element : e(t && t.target).closest(this.element.find(".ui-menu"));
                        i.length || (i = this.element), this._close(i), this.blur(t), this.activeMenu = i
                    }, this.delay)
                },
                _close: function(e) {
                    e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
                },
                collapse: function(e) {
                    var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                    t && t.length && (this._close(), this.focus(e, t))
                },
                expand: function(e) {
                    var t = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
                    t && t.length && (this._open(t.parent()), this._delay(function() { this.focus(e, t) }))
                },
                next: function(e) { this._move("next", "first", e) },
                previous: function(e) { this._move("prev", "last", e) },
                isFirstItem: function() { return this.active && !this.active.prevAll(".ui-menu-item").length },
                isLastItem: function() { return this.active && !this.active.nextAll(".ui-menu-item").length },
                _move: function(e, t, n) {
                    var i;
                    this.active && (i = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)), i && i.length && this.active || (i = this.activeMenu.children(".ui-menu-item")[t]()), this.focus(n, i)
                },
                nextPage: function(t) { var n, i, r; return this.active ? (this.isLastItem() || (this._hasScroll() ? (i = this.active.offset().top, r = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() { return n = e(this), n.offset().top - i - r < 0 }), this.focus(t, n)) : this.focus(t, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())), void 0) : (this.next(t), void 0) },
                previousPage: function(t) { var n, i, r; return this.active ? (this.isFirstItem() || (this._hasScroll() ? (i = this.active.offset().top, r = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() { return n = e(this), n.offset().top - i + r > 0 }), this.focus(t, n)) : this.focus(t, this.activeMenu.children(".ui-menu-item").first())), void 0) : (this.next(t), void 0) },
                _hasScroll: function() { return this.element.outerHeight() < this.element.prop("scrollHeight") },
                select: function(t) {
                    this.active = this.active || e(t.target).closest(".ui-menu-item");
                    var n = { item: this.active };
                    this.active.has(".ui-menu").length || this.collapseAll(t, !0), this._trigger("select", t, n)
                }
            })
        }(jQuery),
        function(e, t) {
            e.widget("ui.progressbar", {
                version: "1.9.2",
                options: { value: 0, max: 100 },
                min: 0,
                _create: function() { this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({ role: "progressbar", "aria-valuemin": this.min, "aria-valuemax": this.options.max, "aria-valuenow": this._value() }), this.valueDiv = e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this.oldValue = this._value(), this._refreshValue() },
                _destroy: function() { this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove() },
                value: function(e) { return e === t ? this._value() : (this._setOption("value", e), this) },
                _setOption: function(e, t) { "value" === e && (this.options.value = t, this._refreshValue(), this._value() === this.options.max && this._trigger("complete")), this._super(e, t) },
                _value: function() { var e = this.options.value; return "number" != typeof e && (e = 0), Math.min(this.options.max, Math.max(this.min, e)) },
                _percentage: function() { return 100 * this._value() / this.options.max },
                _refreshValue: function() {
                    var e = this.value(),
                        t = this._percentage();
                    this.oldValue !== e && (this.oldValue = e, this._trigger("change")), this.valueDiv.toggle(e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(t.toFixed(0) + "%"), this.element.attr("aria-valuenow", e)
                }
            })
        }(jQuery),
        function(e) {
            var t = 5;
            e.widget("ui.slider", e.ui.mouse, {
                version: "1.9.2",
                widgetEventPrefix: "slide",
                options: { animate: !1, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null },
                _create: function() {
                    var n, i, r = this.options,
                        o = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                        s = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
                        a = [];
                    for (this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all" + (r.disabled ? " ui-slider-disabled ui-disabled" : "")), this.range = e([]), r.range && (r.range === !0 && (r.values || (r.values = [this._valueMin(), this._valueMin()]), r.values.length && 2 !== r.values.length && (r.values = [r.values[0], r.values[0]])), this.range = e("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + ("min" === r.range || "max" === r.range ? " ui-slider-range-" + r.range : ""))), i = r.values && r.values.length || 1, n = o.length; i > n; n++) a.push(s);
                    this.handles = o.add(e(a.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.add(this.range).filter("a").click(function(e) { e.preventDefault() }).mouseenter(function() { r.disabled || e(this).addClass("ui-state-hover") }).mouseleave(function() { e(this).removeClass("ui-state-hover") }).focus(function() { r.disabled ? e(this).blur() : (e(".ui-slider .ui-state-focus").removeClass("ui-state-focus"), e(this).addClass("ui-state-focus")) }).blur(function() { e(this).removeClass("ui-state-focus") }), this.handles.each(function(t) { e(this).data("ui-slider-handle-index", t) }), this._on(this.handles, {
                        keydown: function(n) {
                            var i, r, o, s, a = e(n.target).data("ui-slider-handle-index");
                            switch (n.keyCode) {
                                case e.ui.keyCode.HOME:
                                case e.ui.keyCode.END:
                                case e.ui.keyCode.PAGE_UP:
                                case e.ui.keyCode.PAGE_DOWN:
                                case e.ui.keyCode.UP:
                                case e.ui.keyCode.RIGHT:
                                case e.ui.keyCode.DOWN:
                                case e.ui.keyCode.LEFT:
                                    if (n.preventDefault(), !this._keySliding && (this._keySliding = !0, e(n.target).addClass("ui-state-active"), i = this._start(n, a), i === !1)) return
                            }
                            switch (s = this.options.step, r = o = this.options.values && this.options.values.length ? this.values(a) : this.value(), n.keyCode) {
                                case e.ui.keyCode.HOME:
                                    o = this._valueMin();
                                    break;
                                case e.ui.keyCode.END:
                                    o = this._valueMax();
                                    break;
                                case e.ui.keyCode.PAGE_UP:
                                    o = this._trimAlignValue(r + (this._valueMax() - this._valueMin()) / t);
                                    break;
                                case e.ui.keyCode.PAGE_DOWN:
                                    o = this._trimAlignValue(r - (this._valueMax() - this._valueMin()) / t);
                                    break;
                                case e.ui.keyCode.UP:
                                case e.ui.keyCode.RIGHT:
                                    if (r === this._valueMax()) return;
                                    o = this._trimAlignValue(r + s);
                                    break;
                                case e.ui.keyCode.DOWN:
                                case e.ui.keyCode.LEFT:
                                    if (r === this._valueMin()) return;
                                    o = this._trimAlignValue(r - s)
                            }
                            this._slide(n, a, o)
                        },
                        keyup: function(t) {
                            var n = e(t.target).data("ui-slider-handle-index");
                            this._keySliding && (this._keySliding = !1, this._stop(t, n), this._change(t, n), e(t.target).removeClass("ui-state-active"))
                        }
                    }), this._refreshValue(), this._animateOff = !1
                },
                _destroy: function() { this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy() },
                _mouseCapture: function(t) {
                    var n, i, r, o, s, a, l, u, c = this,
                        h = this.options;
                    return h.disabled ? !1 : (this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }, this.elementOffset = this.element.offset(), n = { x: t.pageX, y: t.pageY }, i = this._normValueFromMouse(n), r = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
                        var n = Math.abs(i - c.values(t));
                        r > n && (r = n, o = e(this), s = t)
                    }), h.range === !0 && this.values(1) === h.min && (s += 1, o = e(this.handles[s])), a = this._start(t, s), a === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = s, o.addClass("ui-state-active").focus(), l = o.offset(), u = !e(t.target).parents().andSelf().is(".ui-slider-handle"), this._clickOffset = u ? { left: 0, top: 0 } : { left: t.pageX - l.left - o.width() / 2, top: t.pageY - l.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0) }, this.handles.hasClass("ui-state-hover") || this._slide(t, s, i), this._animateOff = !0, !0))
                },
                _mouseStart: function() { return !0 },
                _mouseDrag: function(e) {
                    var t = { x: e.pageX, y: e.pageY },
                        n = this._normValueFromMouse(t);
                    return this._slide(e, this._handleIndex, n), !1
                },
                _mouseStop: function(e) { return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1 },
                _detectOrientation: function() { this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal" },
                _normValueFromMouse: function(e) { var t, n, i, r, o; return "horizontal" === this.orientation ? (t = this.elementSize.width, n = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, n = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), i = n / t, i > 1 && (i = 1), 0 > i && (i = 0), "vertical" === this.orientation && (i = 1 - i), r = this._valueMax() - this._valueMin(), o = this._valueMin() + i * r, this._trimAlignValue(o) },
                _start: function(e, t) { var n = { handle: this.handles[t], value: this.value() }; return this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("start", e, n) },
                _slide: function(e, t, n) {
                    var i, r, o;
                    this.options.values && this.options.values.length ? (i = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && n > i || 1 === t && i > n) && (n = i), n !== this.values(t) && (r = this.values(), r[t] = n, o = this._trigger("slide", e, { handle: this.handles[t], value: n, values: r }), i = this.values(t ? 0 : 1), o !== !1 && this.values(t, n, !0))) : n !== this.value() && (o = this._trigger("slide", e, { handle: this.handles[t], value: n }), o !== !1 && this.value(n))
                },
                _stop: function(e, t) {
                    var n = { handle: this.handles[t], value: this.value() };
                    this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("stop", e, n)
                },
                _change: function(e, t) {
                    if (!this._keySliding && !this._mouseSliding) {
                        var n = { handle: this.handles[t], value: this.value() };
                        this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), this._trigger("change", e, n)
                    }
                },
                value: function(e) { return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0), void 0) : this._value() },
                values: function(t, n) {
                    var i, r, o;
                    if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(n), this._refreshValue(), this._change(null, t), void 0;
                    if (!arguments.length) return this._values();
                    if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
                    for (i = this.options.values, r = arguments[0], o = 0; o < i.length; o += 1) i[o] = this._trimAlignValue(r[o]), this._change(null, o);
                    this._refreshValue()
                },
                _setOption: function(t, n) {
                    var i, r = 0;
                    switch (e.isArray(this.options.values) && (r = this.options.values.length), e.Widget.prototype._setOption.apply(this, arguments), t) {
                        case "disabled":
                            n ? (this.handles.filter(".ui-state-focus").blur(), this.handles.removeClass("ui-state-hover"), this.handles.prop("disabled", !0), this.element.addClass("ui-disabled")) : (this.handles.prop("disabled", !1), this.element.removeClass("ui-disabled"));
                            break;
                        case "orientation":
                            this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                            break;
                        case "value":
                            this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                            break;
                        case "values":
                            for (this._animateOff = !0, this._refreshValue(), i = 0; r > i; i += 1) this._change(null, i);
                            this._animateOff = !1;
                            break;
                        case "min":
                        case "max":
                            this._animateOff = !0, this._refreshValue(), this._animateOff = !1
                    }
                },
                _value: function() { var e = this.options.value; return e = this._trimAlignValue(e) },
                _values: function(e) { var t, n, i; if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t); for (n = this.options.values.slice(), i = 0; i < n.length; i += 1) n[i] = this._trimAlignValue(n[i]); return n },
                _trimAlignValue: function(e) {
                    if (e <= this._valueMin()) return this._valueMin();
                    if (e >= this._valueMax()) return this._valueMax();
                    var t = this.options.step > 0 ? this.options.step : 1,
                        n = (e - this._valueMin()) % t,
                        i = e - n;
                    return 2 * Math.abs(n) >= t && (i += n > 0 ? t : -t), parseFloat(i.toFixed(5))
                },
                _valueMin: function() { return this.options.min },
                _valueMax: function() { return this.options.max },
                _refreshValue: function() {
                    var t, n, i, r, o, s = this.options.range,
                        a = this.options,
                        l = this,
                        u = this._animateOff ? !1 : a.animate,
                        c = {};
                    this.options.values && this.options.values.length ? this.handles.each(function(i) { n = (l.values(i) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, c["horizontal" === l.orientation ? "left" : "bottom"] = n + "%", e(this).stop(1, 1)[u ? "animate" : "css"](c, a.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === i && l.range.stop(1, 1)[u ? "animate" : "css"]({ left: n + "%" }, a.animate), 1 === i && l.range[u ? "animate" : "css"]({ width: n - t + "%" }, { queue: !1, duration: a.animate })) : (0 === i && l.range.stop(1, 1)[u ? "animate" : "css"]({ bottom: n + "%" }, a.animate), 1 === i && l.range[u ? "animate" : "css"]({ height: n - t + "%" }, { queue: !1, duration: a.animate }))), t = n }) : (i = this.value(), r = this._valueMin(), o = this._valueMax(), n = o !== r ? (i - r) / (o - r) * 100 : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = n + "%", this.handle.stop(1, 1)[u ? "animate" : "css"](c, a.animate), "min" === s && "horizontal" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({ width: n + "%" }, a.animate), "max" === s && "horizontal" === this.orientation && this.range[u ? "animate" : "css"]({ width: 100 - n + "%" }, { queue: !1, duration: a.animate }), "min" === s && "vertical" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({ height: n + "%" }, a.animate), "max" === s && "vertical" === this.orientation && this.range[u ? "animate" : "css"]({ height: 100 - n + "%" }, { queue: !1, duration: a.animate }))
                }
            })
        }(jQuery),
        function(e) {
            function t(e) {
                return function() {
                    var t = this.element.val();
                    e.apply(this, arguments), this._refresh(), t !== this.element.val() && this._trigger("change")
                }
            }
            e.widget("ui.spinner", {
                version: "1.9.2",
                defaultElement: "<input>",
                widgetEventPrefix: "spin",
                options: { culture: null, icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" }, incremental: !0, max: null, min: null, numberFormat: null, page: 10, step: 1, change: null, spin: null, start: null, stop: null },
                _create: function() { this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, { beforeunload: function() { this.element.removeAttr("autocomplete") } }) },
                _getCreateOptions: function() {
                    var t = {},
                        n = this.element;
                    return e.each(["min", "max", "step"], function(e, i) {
                        var r = n.attr(i);
                        void 0 !== r && r.length && (t[i] = r)
                    }), t
                },
                _events: {
                    keydown: function(e) { this._start(e) && this._keydown(e) && e.preventDefault() },
                    keyup: "_stop",
                    focus: function() { this.previous = this.element.val() },
                    blur: function(e) { return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._refresh(), this.previous !== this.element.val() && this._trigger("change", e), void 0) },
                    mousewheel: function(e, t) {
                        if (t) {
                            if (!this.spinning && !this._start(e)) return !1;
                            this._spin((t > 0 ? 1 : -1) * this.options.step, e), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() { this.spinning && this._stop(e) }, 100), e.preventDefault()
                        }
                    },
                    "mousedown .ui-spinner-button": function(t) {
                        function n() {
                            var e = this.element[0] === this.document[0].activeElement;
                            e || (this.element.focus(), this.previous = i, this._delay(function() { this.previous = i }))
                        }
                        var i;
                        i = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), t.preventDefault(), n.call(this), this.cancelBlur = !0, this._delay(function() { delete this.cancelBlur, n.call(this) }), this._start(t) !== !1 && this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
                    },
                    "mouseup .ui-spinner-button": "_stop",
                    "mouseenter .ui-spinner-button": function(t) { return e(t.currentTarget).hasClass("ui-state-active") ? this._start(t) === !1 ? !1 : (this._repeat(null, e(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t), void 0) : void 0 },
                    "mouseleave .ui-spinner-button": "_stop"
                },
                _draw: function() {
                    var e = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
                    this.element.attr("role", "spinbutton"), this.buttons = e.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * e.height()) && e.height() > 0 && e.height(e.height()), this.options.disabled && this.disable()
                },
                _keydown: function(t) {
                    var n = this.options,
                        i = e.ui.keyCode;
                    switch (t.keyCode) {
                        case i.UP:
                            return this._repeat(null, 1, t), !0;
                        case i.DOWN:
                            return this._repeat(null, -1, t), !0;
                        case i.PAGE_UP:
                            return this._repeat(null, n.page, t), !0;
                        case i.PAGE_DOWN:
                            return this._repeat(null, -n.page, t), !0
                    }
                    return !1
                },
                _uiSpinnerHtml: function() { return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>" },
                _buttonHtml: function() { return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;</span></a>" },
                _start: function(e) { return this.spinning || this._trigger("start", e) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1 },
                _repeat: function(e, t, n) { e = e || 500, clearTimeout(this.timer), this.timer = this._delay(function() { this._repeat(40, t, n) }, e), this._spin(t * this.options.step, n) },
                _spin: function(e, t) {
                    var n = this.value() || 0;
                    this.counter || (this.counter = 1), n = this._adjustValue(n + e * this._increment(this.counter)), this.spinning && this._trigger("spin", t, { value: n }) === !1 || (this._value(n), this.counter++)
                },
                _increment: function(t) { var n = this.options.incremental; return n ? e.isFunction(n) ? n(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1 },
                _precision: function() { var e = this._precisionOf(this.options.step); return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e },
                _precisionOf: function(e) {
                    var t = e.toString(),
                        n = t.indexOf(".");
                    return -1 === n ? 0 : t.length - n - 1
                },
                _adjustValue: function(e) { var t, n, i = this.options; return t = null !== i.min ? i.min : 0, n = e - t, n = Math.round(n / i.step) * i.step, e = t + n, e = parseFloat(e.toFixed(this._precision())), null !== i.max && e > i.max ? i.max : null !== i.min && e < i.min ? i.min : e },
                _stop: function(e) { this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", e)) },
                _setOption: function(e, t) { if ("culture" === e || "numberFormat" === e) { var n = this._parse(this.element.val()); return this.options[e] = t, this.element.val(this._format(n)), void 0 }("max" === e || "min" === e || "step" === e) && "string" == typeof t && (t = this._parse(t)), this._super(e, t), "disabled" === e && (t ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable"))) },
                _setOptions: t(function(e) { this._super(e), this._value(this.element.val()) }),
                _parse: function(e) { return "string" == typeof e && "" !== e && (e = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(e, 10, this.options.culture) : +e), "" === e || isNaN(e) ? null : e },
                _format: function(e) { return "" === e ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(e, this.options.numberFormat, this.options.culture) : e },
                _refresh: function() { this.element.attr({ "aria-valuemin": this.options.min, "aria-valuemax": this.options.max, "aria-valuenow": this._parse(this.element.val()) }) },
                _value: function(e, t) { var n; "" !== e && (n = this._parse(e), null !== n && (t || (n = this._adjustValue(n)), e = this._format(n))), this.element.val(e), this._refresh() },
                _destroy: function() { this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element) },
                stepUp: t(function(e) { this._stepUp(e) }),
                _stepUp: function(e) { this._spin((e || 1) * this.options.step) },
                stepDown: t(function(e) { this._stepDown(e) }),
                _stepDown: function(e) { this._spin((e || 1) * -this.options.step) },
                pageUp: t(function(e) { this._stepUp((e || 1) * this.options.page) }),
                pageDown: t(function(e) { this._stepDown((e || 1) * this.options.page) }),
                value: function(e) { return arguments.length ? (t(this._value).call(this, e), void 0) : this._parse(this.element.val()) },
                widget: function() { return this.uiSpinner }
            })
        }(jQuery),
        function(e, t) {
            function n() { return ++r }

            function i(e) { return e.hash.length > 1 && e.href.replace(o, "") === location.href.replace(o, "").replace(/\s/g, "%20") }
            var r = 0,
                o = /#.*$/;
            e.widget("ui.tabs", {
                version: "1.9.2",
                delay: 300,
                options: { active: null, collapsible: !1, event: "click", heightStyle: "content", hide: null, show: null, activate: null, beforeActivate: null, beforeLoad: null, load: null },
                _create: function() {
                    var t = this,
                        n = this.options,
                        i = n.active,
                        r = location.hash.substring(1);
                    this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", n.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function(t) { e(this).is(".ui-state-disabled") && t.preventDefault() }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() { e(this).closest("li").is(".ui-state-disabled") && this.blur() }), this._processTabs(), null === i && (r && this.tabs.each(function(t, n) { return e(n).attr("aria-controls") === r ? (i = t, !1) : void 0 }), null === i && (i = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === i || -1 === i) && (i = this.tabs.length ? 0 : !1)), i !== !1 && (i = this.tabs.index(this.tabs.eq(i)), -1 === i && (i = n.collapsible ? !1 : 0)), n.active = i, !n.collapsible && n.active === !1 && this.anchors.length && (n.active = 0), e.isArray(n.disabled) && (n.disabled = e.unique(n.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"), function(e) { return t.tabs.index(e) }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(this.options.active) : e(), this._refresh(), this.active.length && this.load(n.active)
                },
                _getCreateEventData: function() { return { tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : e() } },
                _tabKeydown: function(t) {
                    var n = e(this.document[0].activeElement).closest("li"),
                        i = this.tabs.index(n),
                        r = !0;
                    if (!this._handlePageNav(t)) {
                        switch (t.keyCode) {
                            case e.ui.keyCode.RIGHT:
                            case e.ui.keyCode.DOWN:
                                i++;
                                break;
                            case e.ui.keyCode.UP:
                            case e.ui.keyCode.LEFT:
                                r = !1, i--;
                                break;
                            case e.ui.keyCode.END:
                                i = this.anchors.length - 1;
                                break;
                            case e.ui.keyCode.HOME:
                                i = 0;
                                break;
                            case e.ui.keyCode.SPACE:
                                return t.preventDefault(), clearTimeout(this.activating), this._activate(i), void 0;
                            case e.ui.keyCode.ENTER:
                                return t.preventDefault(), clearTimeout(this.activating), this._activate(i === this.options.active ? !1 : i), void 0;
                            default:
                                return
                        }
                        t.preventDefault(), clearTimeout(this.activating), i = this._focusNextTab(i, r), t.ctrlKey || (n.attr("aria-selected", "false"), this.tabs.eq(i).attr("aria-selected", "true"), this.activating = this._delay(function() { this.option("active", i) }, this.delay))
                    }
                },
                _panelKeydown: function(t) { this._handlePageNav(t) || t.ctrlKey && t.keyCode === e.ui.keyCode.UP && (t.preventDefault(), this.active.focus()) },
                _handlePageNav: function(t) { return t.altKey && t.keyCode === e.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === e.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0 },
                _findNextTab: function(t, n) {
                    function i() { return t > r && (t = 0), 0 > t && (t = r), t }
                    for (var r = this.tabs.length - 1; - 1 !== e.inArray(i(), this.options.disabled);) t = n ? t + 1 : t - 1;
                    return t
                },
                _focusNextTab: function(e, t) { return e = this._findNextTab(e, t), this.tabs.eq(e).focus(), e },
                _setOption: function(e, t) { return "active" === e ? (this._activate(t), void 0) : "disabled" === e ? (this._setupDisabled(t), void 0) : (this._super(e, t), "collapsible" === e && (this.element.toggleClass("ui-tabs-collapsible", t), t || this.options.active !== !1 || this._activate(0)), "event" === e && this._setupEvents(t), "heightStyle" === e && this._setupHeightStyle(t), void 0) },
                _tabId: function(e) { return e.attr("aria-controls") || "ui-tabs-" + n() },
                _sanitizeSelector: function(e) { return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "" },
                refresh: function() {
                    var t = this.options,
                        n = this.tablist.children(":has(a[href])");
                    t.disabled = e.map(n.filter(".ui-state-disabled"), function(e) { return n.index(e) }), this._processTabs(), t.active !== !1 && this.anchors.length ? this.active.length && !e.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = e()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = e()), this._refresh()
                },
                _refresh: function() { this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({ "aria-selected": "false", tabIndex: -1 }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({ "aria-expanded": "false", "aria-hidden": "true" }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({ "aria-selected": "true", tabIndex: 0 }), this._getPanelForTab(this.active).show().attr({ "aria-expanded": "true", "aria-hidden": "false" })) : this.tabs.eq(0).attr("tabIndex", 0) },
                _processTabs: function() {
                    var t = this;
                    this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({ role: "tab", tabIndex: -1 }), this.anchors = this.tabs.map(function() { return e("a", this)[0] }).addClass("ui-tabs-anchor").attr({ role: "presentation", tabIndex: -1 }), this.panels = e(), this.anchors.each(function(n, r) {
                        var o, s, a, l = e(r).uniqueId().attr("id"),
                            u = e(r).closest("li"),
                            c = u.attr("aria-controls");
                        i(r) ? (o = r.hash, s = t.element.find(t._sanitizeSelector(o))) : (a = t._tabId(u), o = "#" + a, s = t.element.find(o), s.length || (s = t._createPanel(a), s.insertAfter(t.panels[n - 1] || t.tablist)), s.attr("aria-live", "polite")), s.length && (t.panels = t.panels.add(s)), c && u.data("ui-tabs-aria-controls", c), u.attr({ "aria-controls": o.substring(1), "aria-labelledby": l }), s.attr("aria-labelledby", l)
                    }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
                },
                _getList: function() { return this.element.find("ol,ul").eq(0) },
                _createPanel: function(t) { return e("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0) },
                _setupDisabled: function(t) {
                    e.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
                    for (var n, i = 0; n = this.tabs[i]; i++) t === !0 || -1 !== e.inArray(i, t) ? e(n).addClass("ui-state-disabled").attr("aria-disabled", "true") : e(n).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                    this.options.disabled = t
                },
                _setupEvents: function(t) {
                    var n = { click: function(e) { e.preventDefault() } };
                    t && e.each(t.split(" "), function(e, t) { n[t] = "_eventHandler" }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, n), this._on(this.tabs, { keydown: "_tabKeydown" }), this._on(this.panels, { keydown: "_panelKeydown" }), this._focusable(this.tabs), this._hoverable(this.tabs)
                },
                _setupHeightStyle: function(t) {
                    var n, i, r = this.element.parent();
                    "fill" === t ? (e.support.minHeight || (i = r.css("overflow"), r.css("overflow", "hidden")), n = r.height(), this.element.siblings(":visible").each(function() {
                        var t = e(this),
                            i = t.css("position");
                        "absolute" !== i && "fixed" !== i && (n -= t.outerHeight(!0))
                    }), i && r.css("overflow", i), this.element.children().not(this.panels).each(function() { n -= e(this).outerHeight(!0) }), this.panels.each(function() { e(this).height(Math.max(0, n - e(this).innerHeight() + e(this).height())) }).css("overflow", "auto")) : "auto" === t && (n = 0, this.panels.each(function() { n = Math.max(n, e(this).height("").height()) }).height(n))
                },
                _eventHandler: function(t) {
                    var n = this.options,
                        i = this.active,
                        r = e(t.currentTarget),
                        o = r.closest("li"),
                        s = o[0] === i[0],
                        a = s && n.collapsible,
                        l = a ? e() : this._getPanelForTab(o),
                        u = i.length ? this._getPanelForTab(i) : e(),
                        c = { oldTab: i, oldPanel: u, newTab: a ? e() : o, newPanel: l };
                    t.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || s && !n.collapsible || this._trigger("beforeActivate", t, c) === !1 || (n.active = a ? !1 : this.tabs.index(o), this.active = s ? e() : o, this.xhr && this.xhr.abort(), u.length || l.length || e.error("jQuery UI Tabs: Mismatching fragment identifier."), l.length && this.load(this.tabs.index(o), t), this._toggle(t, c))
                },
                _toggle: function(t, n) {
                    function i() { o.running = !1, o._trigger("activate", t, n) }

                    function r() { n.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), s.length && o.options.show ? o._show(s, o.options.show, i) : (s.show(), i()) }
                    var o = this,
                        s = n.newPanel,
                        a = n.oldPanel;
                    this.running = !0, a.length && this.options.hide ? this._hide(a, this.options.hide, function() { n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r() }) : (n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), a.hide(), r()), a.attr({ "aria-expanded": "false", "aria-hidden": "true" }), n.oldTab.attr("aria-selected", "false"), s.length && a.length ? n.oldTab.attr("tabIndex", -1) : s.length && this.tabs.filter(function() { return 0 === e(this).attr("tabIndex") }).attr("tabIndex", -1), s.attr({ "aria-expanded": "true", "aria-hidden": "false" }), n.newTab.attr({ "aria-selected": "true", tabIndex: 0 })
                },
                _activate: function(t) {
                    var n, i = this._findActive(t);
                    i[0] !== this.active[0] && (i.length || (i = this.active), n = i.find(".ui-tabs-anchor")[0], this._eventHandler({ target: n, currentTarget: n, preventDefault: e.noop }))
                },
                _findActive: function(t) { return t === !1 ? e() : this.tabs.eq(t) },
                _getIndex: function(e) { return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + e + "']"))), e },
                _destroy: function() {
                    this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeData("href.tabs").removeData("load.tabs").removeUniqueId(), this.tabs.add(this.panels).each(function() { e.data(this, "ui-tabs-destroy") ? e(this).remove() : e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role") }), this.tabs.each(function() {
                        var t = e(this),
                            n = t.data("ui-tabs-aria-controls");
                        n ? t.attr("aria-controls", n) : t.removeAttr("aria-controls")
                    }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
                },
                enable: function(n) {
                    var i = this.options.disabled;
                    i !== !1 && (n === t ? i = !1 : (n = this._getIndex(n), i = e.isArray(i) ? e.map(i, function(e) { return e !== n ? e : null }) : e.map(this.tabs, function(e, t) { return t !== n ? t : null })), this._setupDisabled(i))
                },
                disable: function(n) {
                    var i = this.options.disabled;
                    if (i !== !0) {
                        if (n === t) i = !0;
                        else {
                            if (n = this._getIndex(n), -1 !== e.inArray(n, i)) return;
                            i = e.isArray(i) ? e.merge([n], i).sort() : [n]
                        }
                        this._setupDisabled(i)
                    }
                },
                load: function(t, n) {
                    t = this._getIndex(t);
                    var r = this,
                        o = this.tabs.eq(t),
                        s = o.find(".ui-tabs-anchor"),
                        a = this._getPanelForTab(o),
                        l = { tab: o, panel: a };
                    i(s[0]) || (this.xhr = e.ajax(this._ajaxSettings(s, n, l)), this.xhr && "canceled" !== this.xhr.statusText && (o.addClass("ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.success(function(e) { setTimeout(function() { a.html(e), r._trigger("load", n, l) }, 1) }).complete(function(e, t) { setTimeout(function() { "abort" === t && r.panels.stop(!1, !0), o.removeClass("ui-tabs-loading"), a.removeAttr("aria-busy"), e === r.xhr && delete r.xhr }, 1) })))
                },
                _ajaxSettings: function(t, n, i) { var r = this; return { url: t.attr("href"), beforeSend: function(t, o) { return r._trigger("beforeLoad", n, e.extend({ jqXHR: t, ajaxSettings: o }, i)) } } },
                _getPanelForTab: function(t) { var n = e(t).attr("aria-controls"); return this.element.find(this._sanitizeSelector("#" + n)) }
            }), e.uiBackCompat !== !1 && (e.ui.tabs.prototype._ui = function(e, t) { return { tab: e, panel: t, index: this.anchors.index(e) } }, e.widget("ui.tabs", e.ui.tabs, { url: function(e, t) { this.anchors.eq(e).attr("href", t) } }), e.widget("ui.tabs", e.ui.tabs, {
                options: { ajaxOptions: null, cache: !1 },
                _create: function() {
                    this._super();
                    var t = this;
                    this._on({ tabsbeforeload: function(n, i) { return e.data(i.tab[0], "cache.tabs") ? (n.preventDefault(), void 0) : (i.jqXHR.success(function() { t.options.cache && e.data(i.tab[0], "cache.tabs", !0) }), void 0) } })
                },
                _ajaxSettings: function(t, n, i) { var r = this.options.ajaxOptions; return e.extend({}, r, { error: function(e, t) { try { r.error(e, t, i.tab.closest("li").index(), i.tab[0]) } catch (n) {} } }, this._superApply(arguments)) },
                _setOption: function(e, t) { "cache" === e && t === !1 && this.anchors.removeData("cache.tabs"), this._super(e, t) },
                _destroy: function() { this.anchors.removeData("cache.tabs"), this._super() },
                url: function(e) { this.anchors.eq(e).removeData("cache.tabs"), this._superApply(arguments) }
            }), e.widget("ui.tabs", e.ui.tabs, {
                abort: function() {
                    this.xhr && this.xhr.abort()
                }
            }), e.widget("ui.tabs", e.ui.tabs, {
                options: { spinner: "<em>Loading&#8230;</em>" },
                _create: function() {
                    this._super(), this._on({
                        tabsbeforeload: function(e, t) {
                            if (e.target === this.element[0] && this.options.spinner) {
                                var n = t.tab.find("span"),
                                    i = n.html();
                                n.html(this.options.spinner), t.jqXHR.complete(function() { n.html(i) })
                            }
                        }
                    })
                }
            }), e.widget("ui.tabs", e.ui.tabs, {
                options: { enable: null, disable: null },
                enable: function(t) {
                    var n, i = this.options;
                    (t && i.disabled === !0 || e.isArray(i.disabled) && -1 !== e.inArray(t, i.disabled)) && (n = !0), this._superApply(arguments), n && this._trigger("enable", null, this._ui(this.anchors[t], this.panels[t]))
                },
                disable: function(t) {
                    var n, i = this.options;
                    (t && i.disabled === !1 || e.isArray(i.disabled) && -1 === e.inArray(t, i.disabled)) && (n = !0), this._superApply(arguments), n && this._trigger("disable", null, this._ui(this.anchors[t], this.panels[t]))
                }
            }), e.widget("ui.tabs", e.ui.tabs, {
                options: { add: null, remove: null, tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>" },
                add: function(n, i, r) {
                    r === t && (r = this.anchors.length);
                    var o, s, a = this.options,
                        l = e(a.tabTemplate.replace(/#\{href\}/g, n).replace(/#\{label\}/g, i)),
                        u = n.indexOf("#") ? this._tabId(l) : n.replace("#", "");
                    return l.addClass("ui-state-default ui-corner-top").data("ui-tabs-destroy", !0), l.attr("aria-controls", u), o = r >= this.tabs.length, s = this.element.find("#" + u), s.length || (s = this._createPanel(u), o ? r > 0 ? s.insertAfter(this.panels.eq(-1)) : s.appendTo(this.element) : s.insertBefore(this.panels[r])), s.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").hide(), o ? l.appendTo(this.tablist) : l.insertBefore(this.tabs[r]), a.disabled = e.map(a.disabled, function(e) { return e >= r ? ++e : e }), this.refresh(), 1 === this.tabs.length && a.active === !1 && this.option("active", 0), this._trigger("add", null, this._ui(this.anchors[r], this.panels[r])), this
                },
                remove: function(t) {
                    t = this._getIndex(t);
                    var n = this.options,
                        i = this.tabs.eq(t).remove(),
                        r = this._getPanelForTab(i).remove();
                    return i.hasClass("ui-tabs-active") && this.anchors.length > 2 && this._activate(t + (t + 1 < this.anchors.length ? 1 : -1)), n.disabled = e.map(e.grep(n.disabled, function(e) { return e !== t }), function(e) { return e >= t ? --e : e }), this.refresh(), this._trigger("remove", null, this._ui(i.find("a")[0], r[0])), this
                }
            }), e.widget("ui.tabs", e.ui.tabs, { length: function() { return this.anchors.length } }), e.widget("ui.tabs", e.ui.tabs, { options: { idPrefix: "ui-tabs-" }, _tabId: function(t) { var i = t.is("li") ? t.find("a[href]") : t; return i = i[0], e(i).closest("li").attr("aria-controls") || i.title && i.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF\-]/g, "") || this.options.idPrefix + n() } }), e.widget("ui.tabs", e.ui.tabs, { options: { panelTemplate: "<div></div>" }, _createPanel: function(t) { return e(this.options.panelTemplate).attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0) } }), e.widget("ui.tabs", e.ui.tabs, {
                _create: function() {
                    var e = this.options;
                    null === e.active && e.selected !== t && (e.active = -1 === e.selected ? !1 : e.selected), this._super(), e.selected = e.active, e.selected === !1 && (e.selected = -1)
                },
                _setOption: function(e, t) {
                    if ("selected" !== e) return this._super(e, t);
                    var n = this.options;
                    this._super("active", -1 === t ? !1 : t), n.selected = n.active, n.selected === !1 && (n.selected = -1)
                },
                _eventHandler: function() { this._superApply(arguments), this.options.selected = this.options.active, this.options.selected === !1 && (this.options.selected = -1) }
            }), e.widget("ui.tabs", e.ui.tabs, { options: { show: null, select: null }, _create: function() { this._super(), this.options.active !== !1 && this._trigger("show", null, this._ui(this.active.find(".ui-tabs-anchor")[0], this._getPanelForTab(this.active)[0])) }, _trigger: function(e, t, n) { var i, r, o = this._superApply(arguments); return o ? ("beforeActivate" === e ? (i = n.newTab.length ? n.newTab : n.oldTab, r = n.newPanel.length ? n.newPanel : n.oldPanel, o = this._super("select", t, { tab: i.find(".ui-tabs-anchor")[0], panel: r[0], index: i.closest("li").index() })) : "activate" === e && n.newTab.length && (o = this._super("show", t, { tab: n.newTab.find(".ui-tabs-anchor")[0], panel: n.newPanel[0], index: n.newTab.closest("li").index() })), o) : !1 } }), e.widget("ui.tabs", e.ui.tabs, {
                select: function(e) {
                    if (e = this._getIndex(e), -1 === e) {
                        if (!this.options.collapsible || -1 === this.options.selected) return;
                        e = this.options.selected
                    }
                    this.anchors.eq(e).trigger(this.options.event + this.eventNamespace)
                }
            }), function() {
                var t = 0;
                e.widget("ui.tabs", e.ui.tabs, {
                    options: { cookie: null },
                    _create: function() {
                        var e, t = this.options;
                        null == t.active && t.cookie && (e = parseInt(this._cookie(), 10), -1 === e && (e = !1), t.active = e), this._super()
                    },
                    _cookie: function(n) { var i = [this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + ++t)]; return arguments.length && (i.push(n === !1 ? -1 : n), i.push(this.options.cookie)), e.cookie.apply(null, i) },
                    _refresh: function() { this._super(), this.options.cookie && this._cookie(this.options.active, this.options.cookie) },
                    _eventHandler: function() { this._superApply(arguments), this.options.cookie && this._cookie(this.options.active, this.options.cookie) },
                    _destroy: function() { this._super(), this.options.cookie && this._cookie(null, this.options.cookie) }
                })
            }(), e.widget("ui.tabs", e.ui.tabs, { _trigger: function(t, n, i) { var r = e.extend({}, i); return "load" === t && (r.panel = r.panel[0], r.tab = r.tab.find(".ui-tabs-anchor")[0]), this._super(t, n, r) } }), e.widget("ui.tabs", e.ui.tabs, {
                options: { fx: null },
                _getFx: function() { var t, n, i = this.options.fx; return i && (e.isArray(i) ? (t = i[0], n = i[1]) : t = n = i), i ? { show: n, hide: t } : null },
                _toggle: function(e, t) {
                    function n() { r.running = !1, r._trigger("activate", e, t) }

                    function i() { t.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), o.length && a.show ? o.animate(a.show, a.show.duration, function() { n() }) : (o.show(), n()) }
                    var r = this,
                        o = t.newPanel,
                        s = t.oldPanel,
                        a = this._getFx();
                    return a ? (r.running = !0, s.length && a.hide ? s.animate(a.hide, a.hide.duration, function() { t.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), i() }) : (t.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), s.hide(), i()), void 0) : this._super(e, t)
                }
            }))
        }(jQuery),
        function(e) {
            function t(t, n) {
                var i = (t.attr("aria-describedby") || "").split(/\s+/);
                i.push(n), t.data("ui-tooltip-id", n).attr("aria-describedby", e.trim(i.join(" ")))
            }

            function n(t) {
                var n = t.data("ui-tooltip-id"),
                    i = (t.attr("aria-describedby") || "").split(/\s+/),
                    r = e.inArray(n, i); - 1 !== r && i.splice(r, 1), t.removeData("ui-tooltip-id"), i = e.trim(i.join(" ")), i ? t.attr("aria-describedby", i) : t.removeAttr("aria-describedby")
            }
            var i = 0;
            e.widget("ui.tooltip", {
                version: "1.9.2",
                options: { content: function() { return e(this).attr("title") }, hide: !0, items: "[title]:not([disabled])", position: { my: "left top+15", at: "left bottom", collision: "flipfit flip" }, show: !0, tooltipClass: null, track: !1, close: null, open: null },
                _create: function() { this._on({ mouseover: "open", focusin: "open" }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable() },
                _setOption: function(t, n) { var i = this; return "disabled" === t ? (this[n ? "_disable" : "_enable"](), this.options[t] = n, void 0) : (this._super(t, n), "content" === t && e.each(this.tooltips, function(e, t) { i._updateContent(t) }), void 0) },
                _disable: function() {
                    var t = this;
                    e.each(this.tooltips, function(n, i) {
                        var r = e.Event("blur");
                        r.target = r.currentTarget = i[0], t.close(r, !0)
                    }), this.element.find(this.options.items).andSelf().each(function() {
                        var t = e(this);
                        t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).attr("title", "")
                    })
                },
                _enable: function() {
                    this.element.find(this.options.items).andSelf().each(function() {
                        var t = e(this);
                        t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
                    })
                },
                open: function(t) {
                    var n = this,
                        i = e(t ? t.target : this.element).closest(this.options.items);
                    i.length && !i.data("ui-tooltip-id") && (i.attr("title") && i.data("ui-tooltip-title", i.attr("title")), i.data("ui-tooltip-open", !0), t && "mouseover" === t.type && i.parents().each(function() {
                        var t, i = e(this);
                        i.data("ui-tooltip-open") && (t = e.Event("blur"), t.target = t.currentTarget = this, n.close(t, !0)), i.attr("title") && (i.uniqueId(), n.parents[this.id] = { element: this, title: i.attr("title") }, i.attr("title", ""))
                    }), this._updateContent(i, t))
                },
                _updateContent: function(e, t) {
                    var n, i = this.options.content,
                        r = this,
                        o = t ? t.type : null;
                    return "string" == typeof i ? this._open(t, e, i) : (n = i.call(e[0], function(n) { e.data("ui-tooltip-open") && r._delay(function() { t && (t.type = o), this._open(t, e, n) }) }), n && this._open(t, e, n), void 0)
                },
                _open: function(n, i, r) {
                    function o(e) { u.of = e, s.is(":hidden") || s.position(u) }
                    var s, a, l, u = e.extend({}, this.options.position);
                    if (r) {
                        if (s = this._find(i), s.length) return s.find(".ui-tooltip-content").html(r), void 0;
                        i.is("[title]") && (n && "mouseover" === n.type ? i.attr("title", "") : i.removeAttr("title")), s = this._tooltip(i), t(i, s.attr("id")), s.find(".ui-tooltip-content").html(r), this.options.track && n && /^mouse/.test(n.type) ? (this._on(this.document, { mousemove: o }), o(n)) : s.position(e.extend({ of: i }, this.options.position)), s.hide(), this._show(s, this.options.show), this.options.show && this.options.show.delay && (l = setInterval(function() { s.is(":visible") && (o(u.of), clearInterval(l)) }, e.fx.interval)), this._trigger("open", n, { tooltip: s }), a = {
                            keyup: function(t) {
                                if (t.keyCode === e.ui.keyCode.ESCAPE) {
                                    var n = e.Event(t);
                                    n.currentTarget = i[0], this.close(n, !0)
                                }
                            },
                            remove: function() { this._removeTooltip(s) }
                        }, n && "mouseover" !== n.type || (a.mouseleave = "close"), n && "focusin" !== n.type || (a.focusout = "close"), this._on(!0, i, a)
                    }
                },
                close: function(t) {
                    var i = this,
                        r = e(t ? t.currentTarget : this.element),
                        o = this._find(r);
                    this.closing || (r.data("ui-tooltip-title") && r.attr("title", r.data("ui-tooltip-title")), n(r), o.stop(!0), this._hide(o, this.options.hide, function() { i._removeTooltip(e(this)) }), r.removeData("ui-tooltip-open"), this._off(r, "mouseleave focusout keyup"), r[0] !== this.element[0] && this._off(r, "remove"), this._off(this.document, "mousemove"), t && "mouseleave" === t.type && e.each(this.parents, function(t, n) { e(n.element).attr("title", n.title), delete i.parents[t] }), this.closing = !0, this._trigger("close", t, { tooltip: o }), this.closing = !1)
                },
                _tooltip: function(t) {
                    var n = "ui-tooltip-" + i++,
                        r = e("<div>").attr({ id: n, role: "tooltip" }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
                    return e("<div>").addClass("ui-tooltip-content").appendTo(r), r.appendTo(this.document[0].body), e.fn.bgiframe && r.bgiframe(), this.tooltips[n] = t, r
                },
                _find: function(t) { var n = t.data("ui-tooltip-id"); return n ? e("#" + n) : e() },
                _removeTooltip: function(e) { e.remove(), delete this.tooltips[e.attr("id")] },
                _destroy: function() {
                    var t = this;
                    e.each(this.tooltips, function(n, i) {
                        var r = e.Event("blur");
                        r.target = r.currentTarget = i[0], t.close(r, !0), e("#" + n).remove(), i.data("ui-tooltip-title") && (i.attr("title", i.data("ui-tooltip-title")), i.removeData("ui-tooltip-title"))
                    })
                }
            })
        }(jQuery), jQuery.effects || function(e, t) {
                var n = e.uiBackCompat !== !1,
                    i = "ui-effects-";
                e.effects = { effect: {} },
                    function(t, n) {
                        function i(e, t, n) { var i = d[t.type] || {}; return null == e ? n || !t.def ? null : t.def : (e = i.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : i.mod ? (e + i.mod) % i.mod : 0 > e ? 0 : i.max < e ? i.max : e) }

                        function r(e) {
                            var n = c(),
                                i = n._rgba = [];
                            return e = e.toLowerCase(), g(u, function(t, r) {
                                var o, s = r.re.exec(e),
                                    a = s && r.parse(s),
                                    l = r.space || "rgba";
                                return a ? (o = n[l](a), n[h[l].cache] = o[h[l].cache], i = n._rgba = o._rgba, !1) : void 0
                            }), i.length ? ("0,0,0,0" === i.join() && t.extend(i, s.transparent), n) : s[e]
                        }

                        function o(e, t, n) { return n = (n + 1) % 1, 1 > 6 * n ? e + (t - e) * n * 6 : 1 > 2 * n ? t : 2 > 3 * n ? e + (t - e) * (2 / 3 - n) * 6 : e }
                        var s, a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor".split(" "),
                            l = /^([\-+])=\s*(\d+\.?\d*)/,
                            u = [{ re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/, parse: function(e) { return [e[1], e[2], e[3], e[4]] } }, { re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/, parse: function(e) { return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]] } }, { re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function(e) { return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] } }, { re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function(e) { return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)] } }, { re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function(e) { return [e[1], e[2] / 100, e[3] / 100, e[4]] } }],
                            c = t.Color = function(e, n, i, r) { return new t.Color.fn.parse(e, n, i, r) },
                            h = { rgba: { props: { red: { idx: 0, type: "byte" }, green: { idx: 1, type: "byte" }, blue: { idx: 2, type: "byte" } } }, hsla: { props: { hue: { idx: 0, type: "degrees" }, saturation: { idx: 1, type: "percent" }, lightness: { idx: 2, type: "percent" } } } },
                            d = { "byte": { floor: !0, max: 255 }, percent: { max: 1 }, degrees: { mod: 360, floor: !0 } },
                            f = c.support = {},
                            p = t("<p>")[0],
                            g = t.each;
                        p.style.cssText = "background-color:rgba(1,1,1,.5)", f.rgba = p.style.backgroundColor.indexOf("rgba") > -1, g(h, function(e, t) { t.cache = "_" + e, t.props.alpha = { idx: 3, type: "percent", def: 1 } }), c.fn = t.extend(c.prototype, {
                            parse: function(o, a, l, u) {
                                if (o === n) return this._rgba = [null, null, null, null], this;
                                (o.jquery || o.nodeType) && (o = t(o).css(a), a = n);
                                var d = this,
                                    f = t.type(o),
                                    p = this._rgba = [];
                                return a !== n && (o = [o, a, l, u], f = "array"), "string" === f ? this.parse(r(o) || s._default) : "array" === f ? (g(h.rgba.props, function(e, t) { p[t.idx] = i(o[t.idx], t) }), this) : "object" === f ? (o instanceof c ? g(h, function(e, t) { o[t.cache] && (d[t.cache] = o[t.cache].slice()) }) : g(h, function(t, n) {
                                    var r = n.cache;
                                    g(n.props, function(e, t) {
                                        if (!d[r] && n.to) {
                                            if ("alpha" === e || null == o[e]) return;
                                            d[r] = n.to(d._rgba)
                                        }
                                        d[r][t.idx] = i(o[e], t, !0)
                                    }), d[r] && e.inArray(null, d[r].slice(0, 3)) < 0 && (d[r][3] = 1, n.from && (d._rgba = n.from(d[r])))
                                }), this) : void 0
                            },
                            is: function(e) {
                                var t = c(e),
                                    n = !0,
                                    i = this;
                                return g(h, function(e, r) { var o, s = t[r.cache]; return s && (o = i[r.cache] || r.to && r.to(i._rgba) || [], g(r.props, function(e, t) { return null != s[t.idx] ? n = s[t.idx] === o[t.idx] : void 0 })), n }), n
                            },
                            _space: function() {
                                var e = [],
                                    t = this;
                                return g(h, function(n, i) { t[i.cache] && e.push(n) }), e.pop()
                            },
                            transition: function(e, t) {
                                var n = c(e),
                                    r = n._space(),
                                    o = h[r],
                                    s = 0 === this.alpha() ? c("transparent") : this,
                                    a = s[o.cache] || o.to(s._rgba),
                                    l = a.slice();
                                return n = n[o.cache], g(o.props, function(e, r) {
                                    var o = r.idx,
                                        s = a[o],
                                        u = n[o],
                                        c = d[r.type] || {};
                                    null !== u && (null === s ? l[o] = u : (c.mod && (u - s > c.mod / 2 ? s += c.mod : s - u > c.mod / 2 && (s -= c.mod)), l[o] = i((u - s) * t + s, r)))
                                }), this[r](l)
                            },
                            blend: function(e) {
                                if (1 === this._rgba[3]) return this;
                                var n = this._rgba.slice(),
                                    i = n.pop(),
                                    r = c(e)._rgba;
                                return c(t.map(n, function(e, t) { return (1 - i) * r[t] + i * e }))
                            },
                            toRgbaString: function() {
                                var e = "rgba(",
                                    n = t.map(this._rgba, function(e, t) { return null == e ? t > 2 ? 1 : 0 : e });
                                return 1 === n[3] && (n.pop(), e = "rgb("), e + n.join() + ")"
                            },
                            toHslaString: function() {
                                var e = "hsla(",
                                    n = t.map(this.hsla(), function(e, t) { return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e });
                                return 1 === n[3] && (n.pop(), e = "hsl("), e + n.join() + ")"
                            },
                            toHexString: function(e) {
                                var n = this._rgba.slice(),
                                    i = n.pop();
                                return e && n.push(~~(255 * i)), "#" + t.map(n, function(e) { return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e }).join("")
                            },
                            toString: function() { return 0 === this._rgba[3] ? "transparent" : this.toRgbaString() }
                        }), c.fn.parse.prototype = c.fn, h.hsla.to = function(e) {
                            if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                            var t, n, i = e[0] / 255,
                                r = e[1] / 255,
                                o = e[2] / 255,
                                s = e[3],
                                a = Math.max(i, r, o),
                                l = Math.min(i, r, o),
                                u = a - l,
                                c = a + l,
                                h = .5 * c;
                            return t = l === a ? 0 : i === a ? 60 * (r - o) / u + 360 : r === a ? 60 * (o - i) / u + 120 : 60 * (i - r) / u + 240, n = 0 === h || 1 === h ? h : .5 >= h ? u / c : u / (2 - c), [Math.round(t) % 360, n, h, null == s ? 1 : s]
                        }, h.hsla.from = function(e) {
                            if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
                            var t = e[0] / 360,
                                n = e[1],
                                i = e[2],
                                r = e[3],
                                s = .5 >= i ? i * (1 + n) : i + n - i * n,
                                a = 2 * i - s;
                            return [Math.round(255 * o(a, s, t + 1 / 3)), Math.round(255 * o(a, s, t)), Math.round(255 * o(a, s, t - 1 / 3)), r]
                        }, g(h, function(e, r) {
                            var o = r.props,
                                s = r.cache,
                                a = r.to,
                                u = r.from;
                            c.fn[e] = function(e) {
                                if (a && !this[s] && (this[s] = a(this._rgba)), e === n) return this[s].slice();
                                var r, l = t.type(e),
                                    h = "array" === l || "object" === l ? e : arguments,
                                    d = this[s].slice();
                                return g(o, function(e, t) {
                                    var n = h["object" === l ? e : t.idx];
                                    null == n && (n = d[t.idx]), d[t.idx] = i(n, t)
                                }), u ? (r = c(u(d)), r[s] = d, r) : c(d)
                            }, g(o, function(n, i) {
                                c.fn[n] || (c.fn[n] = function(r) {
                                    var o, s = t.type(r),
                                        a = "alpha" === n ? this._hsla ? "hsla" : "rgba" : e,
                                        u = this[a](),
                                        c = u[i.idx];
                                    return "undefined" === s ? c : ("function" === s && (r = r.call(this, c), s = t.type(r)), null == r && i.empty ? this : ("string" === s && (o = l.exec(r), o && (r = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1))), u[i.idx] = r, this[a](u)))
                                })
                            })
                        }), g(a, function(e, n) {
                            t.cssHooks[n] = {
                                set: function(e, i) {
                                    var o, s, a = "";
                                    if ("string" !== t.type(i) || (o = r(i))) {
                                        if (i = c(o || i), !f.rgba && 1 !== i._rgba[3]) {
                                            for (s = "backgroundColor" === n ? e.parentNode : e;
                                                ("" === a || "transparent" === a) && s && s.style;) try { a = t.css(s, "backgroundColor"), s = s.parentNode } catch (l) {}
                                            i = i.blend(a && "transparent" !== a ? a : "_default")
                                        }
                                        i = i.toRgbaString()
                                    }
                                    try { e.style[n] = i } catch (u) {}
                                }
                            }, t.fx.step[n] = function(e) { e.colorInit || (e.start = c(e.elem, n), e.end = c(e.end), e.colorInit = !0), t.cssHooks[n].set(e.elem, e.start.transition(e.end, e.pos)) }
                        }), t.cssHooks.borderColor = { expand: function(e) { var t = {}; return g(["Top", "Right", "Bottom", "Left"], function(n, i) { t["border" + i + "Color"] = e }), t } }, s = t.Color.names = { aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff" }
                    }(jQuery),
                    function() {
                        function n() {
                            var t, n, i = this.ownerDocument.defaultView ? this.ownerDocument.defaultView.getComputedStyle(this, null) : this.currentStyle,
                                r = {};
                            if (i && i.length && i[0] && i[i[0]])
                                for (n = i.length; n--;) t = i[n], "string" == typeof i[t] && (r[e.camelCase(t)] = i[t]);
                            else
                                for (t in i) "string" == typeof i[t] && (r[t] = i[t]);
                            return r
                        }

                        function i(t, n) { var i, r, s = {}; for (i in n) r = n[i], t[i] !== r && (o[i] || (e.fx.step[i] || !isNaN(parseFloat(r))) && (s[i] = r)); return s }
                        var r = ["add", "remove", "toggle"],
                            o = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 };
                        e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, n) {
                            e.fx.step[n] = function(e) {
                                ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (jQuery.style(e.elem, n, e.end), e.setAttr = !0)
                            }
                        }), e.effects.animateClass = function(t, o, s, a) {
                            var l = e.speed(o, s, a);
                            return this.queue(function() {
                                var o, s = e(this),
                                    a = s.attr("class") || "",
                                    u = l.children ? s.find("*").andSelf() : s;
                                u = u.map(function() { var t = e(this); return { el: t, start: n.call(this) } }), o = function() { e.each(r, function(e, n) { t[n] && s[n + "Class"](t[n]) }) }, o(), u = u.map(function() { return this.end = n.call(this.el[0]), this.diff = i(this.start, this.end), this }), s.attr("class", a), u = u.map(function() {
                                    var t = this,
                                        n = e.Deferred(),
                                        i = jQuery.extend({}, l, { queue: !1, complete: function() { n.resolve(t) } });
                                    return this.el.animate(this.diff, i), n.promise()
                                }), e.when.apply(e, u.get()).done(function() {
                                    o(), e.each(arguments, function() {
                                        var t = this.el;
                                        e.each(this.diff, function(e) { t.css(e, "") })
                                    }), l.complete.call(s[0])
                                })
                            })
                        }, e.fn.extend({ _addClass: e.fn.addClass, addClass: function(t, n, i, r) { return n ? e.effects.animateClass.call(this, { add: t }, n, i, r) : this._addClass(t) }, _removeClass: e.fn.removeClass, removeClass: function(t, n, i, r) { return n ? e.effects.animateClass.call(this, { remove: t }, n, i, r) : this._removeClass(t) }, _toggleClass: e.fn.toggleClass, toggleClass: function(n, i, r, o, s) { return "boolean" == typeof i || i === t ? r ? e.effects.animateClass.call(this, i ? { add: n } : { remove: n }, r, o, s) : this._toggleClass(n, i) : e.effects.animateClass.call(this, { toggle: n }, i, r, o) }, switchClass: function(t, n, i, r, o) { return e.effects.animateClass.call(this, { add: n, remove: t }, i, r, o) } })
                    }(),
                    function() {
                        function r(t, n, i, r) { return e.isPlainObject(t) && (n = t, t = t.effect), t = { effect: t }, null == n && (n = {}), e.isFunction(n) && (r = n, i = null, n = {}), ("number" == typeof n || e.fx.speeds[n]) && (r = i, i = n, n = {}), e.isFunction(i) && (r = i, i = null), n && e.extend(t, n), i = i || n.duration, t.duration = e.fx.off ? 0 : "number" == typeof i ? i : i in e.fx.speeds ? e.fx.speeds[i] : e.fx.speeds._default, t.complete = r || n.complete, t }

                        function o(t) { return !t || "number" == typeof t || e.fx.speeds[t] ? !0 : "string" != typeof t || e.effects.effect[t] ? !1 : n && e.effects[t] ? !1 : !0 }
                        e.extend(e.effects, {
                            version: "1.9.2",
                            save: function(e, t) { for (var n = 0; n < t.length; n++) null !== t[n] && e.data(i + t[n], e[0].style[t[n]]) },
                            restore: function(e, n) { var r, o; for (o = 0; o < n.length; o++) null !== n[o] && (r = e.data(i + n[o]), r === t && (r = ""), e.css(n[o], r)) },
                            setMode: function(e, t) { return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t },
                            getBaseline: function(e, t) {
                                var n, i;
                                switch (e[0]) {
                                    case "top":
                                        n = 0;
                                        break;
                                    case "middle":
                                        n = .5;
                                        break;
                                    case "bottom":
                                        n = 1;
                                        break;
                                    default:
                                        n = e[0] / t.height
                                }
                                switch (e[1]) {
                                    case "left":
                                        i = 0;
                                        break;
                                    case "center":
                                        i = .5;
                                        break;
                                    case "right":
                                        i = 1;
                                        break;
                                    default:
                                        i = e[1] / t.width
                                }
                                return { x: i, y: n }
                            },
                            createWrapper: function(t) {
                                if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                                var n = { width: t.outerWidth(!0), height: t.outerHeight(!0), "float": t.css("float") },
                                    i = e("<div></div>").addClass("ui-effects-wrapper").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }),
                                    r = { width: t.width(), height: t.height() },
                                    o = document.activeElement;
                                try { o.id } catch (s) { o = document.body }
                                return t.wrap(i), (t[0] === o || e.contains(t[0], o)) && e(o).focus(), i = t.parent(), "static" === t.css("position") ? (i.css({ position: "relative" }), t.css({ position: "relative" })) : (e.extend(n, { position: t.css("position"), zIndex: t.css("z-index") }), e.each(["top", "left", "bottom", "right"], function(e, i) { n[i] = t.css(i), isNaN(parseInt(n[i], 10)) && (n[i] = "auto") }), t.css({ position: "relative", top: 0, left: 0, right: "auto", bottom: "auto" })), t.css(r), i.css(n).show()
                            },
                            removeWrapper: function(t) { var n = document.activeElement; return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === n || e.contains(t[0], n)) && e(n).focus()), t },
                            setTransition: function(t, n, i, r) {
                                return r = r || {}, e.each(n, function(e, n) {
                                    var o = t.cssUnit(n);
                                    o[0] > 0 && (r[n] = o[0] * i + o[1])
                                }), r
                            }
                        }), e.fn.extend({
                            effect: function() {
                                function t(t) {
                                    function n() { e.isFunction(o) && o.call(r[0]), e.isFunction(t) && t() }
                                    var r = e(this),
                                        o = i.complete,
                                        s = i.mode;
                                    (r.is(":hidden") ? "hide" === s : "show" === s) ? n(): a.call(r[0], i, n)
                                }
                                var i = r.apply(this, arguments),
                                    o = i.mode,
                                    s = i.queue,
                                    a = e.effects.effect[i.effect],
                                    l = !a && n && e.effects[i.effect];
                                return e.fx.off || !a && !l ? o ? this[o](i.duration, i.complete) : this.each(function() { i.complete && i.complete.call(this) }) : a ? s === !1 ? this.each(t) : this.queue(s || "fx", t) : l.call(this, { options: i, duration: i.duration, callback: i.complete, mode: i.mode })
                            },
                            _show: e.fn.show,
                            show: function(e) { if (o(e)) return this._show.apply(this, arguments); var t = r.apply(this, arguments); return t.mode = "show", this.effect.call(this, t) },
                            _hide: e.fn.hide,
                            hide: function(e) { if (o(e)) return this._hide.apply(this, arguments); var t = r.apply(this, arguments); return t.mode = "hide", this.effect.call(this, t) },
                            __toggle: e.fn.toggle,
                            toggle: function(t) { if (o(t) || "boolean" == typeof t || e.isFunction(t)) return this.__toggle.apply(this, arguments); var n = r.apply(this, arguments); return n.mode = "toggle", this.effect.call(this, n) },
                            cssUnit: function(t) {
                                var n = this.css(t),
                                    i = [];
                                return e.each(["em", "px", "%", "pt"], function(e, t) { n.indexOf(t) > 0 && (i = [parseFloat(n), t]) }), i
                            }
                        })
                    }(),
                    function() {
                        var t = {};
                        e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(e, n) { t[n] = function(t) { return Math.pow(t, e + 2) } }), e.extend(t, { Sine: function(e) { return 1 - Math.cos(e * Math.PI / 2) }, Circ: function(e) { return 1 - Math.sqrt(1 - e * e) }, Elastic: function(e) { return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15) }, Back: function(e) { return e * e * (3 * e - 2) }, Bounce: function(e) { for (var t, n = 4; e < ((t = Math.pow(2, --n)) - 1) / 11;); return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2) } }), e.each(t, function(t, n) { e.easing["easeIn" + t] = n, e.easing["easeOut" + t] = function(e) { return 1 - n(1 - e) }, e.easing["easeInOut" + t] = function(e) { return .5 > e ? n(2 * e) / 2 : 1 - n(-2 * e + 2) / 2 } })
                    }()
            }(jQuery),
            function(e) {
                var t = /up|down|vertical/,
                    n = /up|left|vertical|horizontal/;
                e.effects.effect.blind = function(i, r) {
                    var o, s, a, l = e(this),
                        u = ["position", "top", "bottom", "left", "right", "height", "width"],
                        c = e.effects.setMode(l, i.mode || "hide"),
                        h = i.direction || "up",
                        d = t.test(h),
                        f = d ? "height" : "width",
                        p = d ? "top" : "left",
                        g = n.test(h),
                        m = {},
                        v = "show" === c;
                    l.parent().is(".ui-effects-wrapper") ? e.effects.save(l.parent(), u) : e.effects.save(l, u), l.show(), o = e.effects.createWrapper(l).css({ overflow: "hidden" }), s = o[f](), a = parseFloat(o.css(p)) || 0, m[f] = v ? s : 0, g || (l.css(d ? "bottom" : "right", 0).css(d ? "top" : "left", "auto").css({ position: "absolute" }), m[p] = v ? a : s + a), v && (o.css(f, 0), g || o.css(p, a + s)), o.animate(m, { duration: i.duration, easing: i.easing, queue: !1, complete: function() { "hide" === c && l.hide(), e.effects.restore(l, u), e.effects.removeWrapper(l), r() } })
                }
            }(jQuery),
            function(e) {
                e.effects.effect.bounce = function(t, n) {
                    var i, r, o, s = e(this),
                        a = ["position", "top", "bottom", "left", "right", "height", "width"],
                        l = e.effects.setMode(s, t.mode || "effect"),
                        u = "hide" === l,
                        c = "show" === l,
                        h = t.direction || "up",
                        d = t.distance,
                        f = t.times || 5,
                        p = 2 * f + (c || u ? 1 : 0),
                        g = t.duration / p,
                        m = t.easing,
                        v = "up" === h || "down" === h ? "top" : "left",
                        _ = "up" === h || "left" === h,
                        y = s.queue(),
                        b = y.length;
                    for ((c || u) && a.push("opacity"), e.effects.save(s, a), s.show(), e.effects.createWrapper(s), d || (d = s["top" === v ? "outerHeight" : "outerWidth"]() / 3), c && (o = { opacity: 1 }, o[v] = 0, s.css("opacity", 0).css(v, _ ? 2 * -d : 2 * d).animate(o, g, m)), u && (d /= Math.pow(2, f - 1)), o = {}, o[v] = 0, i = 0; f > i; i++) r = {}, r[v] = (_ ? "-=" : "+=") + d, s.animate(r, g, m).animate(o, g, m), d = u ? 2 * d : d / 2;
                    u && (r = { opacity: 0 }, r[v] = (_ ? "-=" : "+=") + d, s.animate(r, g, m)), s.queue(function() { u && s.hide(), e.effects.restore(s, a), e.effects.removeWrapper(s), n() }), b > 1 && y.splice.apply(y, [1, 0].concat(y.splice(b, p + 1))), s.dequeue()
                }
            }(jQuery),
            function(e) {
                e.effects.effect.clip = function(t, n) {
                    var i, r, o, s = e(this),
                        a = ["position", "top", "bottom", "left", "right", "height", "width"],
                        l = e.effects.setMode(s, t.mode || "hide"),
                        u = "show" === l,
                        c = t.direction || "vertical",
                        h = "vertical" === c,
                        d = h ? "height" : "width",
                        f = h ? "top" : "left",
                        p = {};
                    e.effects.save(s, a), s.show(), i = e.effects.createWrapper(s).css({ overflow: "hidden" }), r = "IMG" === s[0].tagName ? i : s, o = r[d](), u && (r.css(d, 0), r.css(f, o / 2)), p[d] = u ? o : 0, p[f] = u ? 0 : o / 2, r.animate(p, { queue: !1, duration: t.duration, easing: t.easing, complete: function() { u || s.hide(), e.effects.restore(s, a), e.effects.removeWrapper(s), n() } })
                }
            }(jQuery),
            function(e) {
                e.effects.effect.drop = function(t, n) {
                    var i, r = e(this),
                        o = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
                        s = e.effects.setMode(r, t.mode || "hide"),
                        a = "show" === s,
                        l = t.direction || "left",
                        u = "up" === l || "down" === l ? "top" : "left",
                        c = "up" === l || "left" === l ? "pos" : "neg",
                        h = { opacity: a ? 1 : 0 };
                    e.effects.save(r, o), r.show(), e.effects.createWrapper(r), i = t.distance || r["top" === u ? "outerHeight" : "outerWidth"](!0) / 2, a && r.css("opacity", 0).css(u, "pos" === c ? -i : i), h[u] = (a ? "pos" === c ? "+=" : "-=" : "pos" === c ? "-=" : "+=") + i, r.animate(h, { queue: !1, duration: t.duration, easing: t.easing, complete: function() { "hide" === s && r.hide(), e.effects.restore(r, o), e.effects.removeWrapper(r), n() } })
                }
            }(jQuery),
            function(e) {
                e.effects.effect.explode = function(t, n) {
                    function i() { y.push(this), y.length === h * d && r() }

                    function r() { f.css({ visibility: "visible" }), e(y).remove(), g || f.hide(), n() }
                    var o, s, a, l, u, c, h = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3,
                        d = h,
                        f = e(this),
                        p = e.effects.setMode(f, t.mode || "hide"),
                        g = "show" === p,
                        m = f.show().css("visibility", "hidden").offset(),
                        v = Math.ceil(f.outerWidth() / d),
                        _ = Math.ceil(f.outerHeight() / h),
                        y = [];
                    for (o = 0; h > o; o++)
                        for (l = m.top + o * _, c = o - (h - 1) / 2, s = 0; d > s; s++) a = m.left + s * v, u = s - (d - 1) / 2, f.clone().appendTo("body").wrap("<div></div>").css({ position: "absolute", visibility: "visible", left: -s * v, top: -o * _ }).parent().addClass("ui-effects-explode").css({ position: "absolute", overflow: "hidden", width: v, height: _, left: a + (g ? u * v : 0), top: l + (g ? c * _ : 0), opacity: g ? 0 : 1 }).animate({ left: a + (g ? 0 : u * v), top: l + (g ? 0 : c * _), opacity: g ? 1 : 0 }, t.duration || 500, t.easing, i)
                }
            }(jQuery),
            function(e) {
                e.effects.effect.fade = function(t, n) {
                    var i = e(this),
                        r = e.effects.setMode(i, t.mode || "toggle");
                    i.animate({ opacity: r }, { queue: !1, duration: t.duration, easing: t.easing, complete: n })
                }
            }(jQuery),
            function(e) {
                e.effects.effect.fold = function(t, n) {
                    var i, r, o = e(this),
                        s = ["position", "top", "bottom", "left", "right", "height", "width"],
                        a = e.effects.setMode(o, t.mode || "hide"),
                        l = "show" === a,
                        u = "hide" === a,
                        c = t.size || 15,
                        h = /([0-9]+)%/.exec(c),
                        d = !!t.horizFirst,
                        f = l !== d,
                        p = f ? ["width", "height"] : ["height", "width"],
                        g = t.duration / 2,
                        m = {},
                        v = {};
                    e.effects.save(o, s), o.show(), i = e.effects.createWrapper(o).css({ overflow: "hidden" }), r = f ? [i.width(), i.height()] : [i.height(), i.width()], h && (c = parseInt(h[1], 10) / 100 * r[u ? 0 : 1]), l && i.css(d ? { height: 0, width: c } : { height: c, width: 0 }), m[p[0]] = l ? r[0] : c, v[p[1]] = l ? r[1] : 0, i.animate(m, g, t.easing).animate(v, g, t.easing, function() { u && o.hide(), e.effects.restore(o, s), e.effects.removeWrapper(o), n() })
                }
            }(jQuery),
            function(e) {
                e.effects.effect.highlight = function(t, n) {
                    var i = e(this),
                        r = ["backgroundImage", "backgroundColor", "opacity"],
                        o = e.effects.setMode(i, t.mode || "show"),
                        s = { backgroundColor: i.css("backgroundColor") };
                    "hide" === o && (s.opacity = 0), e.effects.save(i, r), i.show().css({ backgroundImage: "none", backgroundColor: t.color || "#ffff99" }).animate(s, { queue: !1, duration: t.duration, easing: t.easing, complete: function() { "hide" === o && i.hide(), e.effects.restore(i, r), n() } })
                }
            }(jQuery),
            function(e) {
                e.effects.effect.pulsate = function(t, n) {
                    var i, r = e(this),
                        o = e.effects.setMode(r, t.mode || "show"),
                        s = "show" === o,
                        a = "hide" === o,
                        l = s || "hide" === o,
                        u = 2 * (t.times || 5) + (l ? 1 : 0),
                        c = t.duration / u,
                        h = 0,
                        d = r.queue(),
                        f = d.length;
                    for ((s || !r.is(":visible")) && (r.css("opacity", 0).show(), h = 1), i = 1; u > i; i++) r.animate({ opacity: h }, c, t.easing), h = 1 - h;
                    r.animate({ opacity: h }, c, t.easing), r.queue(function() { a && r.hide(), n() }), f > 1 && d.splice.apply(d, [1, 0].concat(d.splice(f, u + 1))), r.dequeue()
                }
            }(jQuery),
            function(e) {
                e.effects.effect.puff = function(t, n) {
                    var i = e(this),
                        r = e.effects.setMode(i, t.mode || "hide"),
                        o = "hide" === r,
                        s = parseInt(t.percent, 10) || 150,
                        a = s / 100,
                        l = { height: i.height(), width: i.width(), outerHeight: i.outerHeight(), outerWidth: i.outerWidth() };
                    e.extend(t, { effect: "scale", queue: !1, fade: !0, mode: r, complete: n, percent: o ? s : 100, from: o ? l : { height: l.height * a, width: l.width * a, outerHeight: l.outerHeight * a, outerWidth: l.outerWidth * a } }), i.effect(t)
                }, e.effects.effect.scale = function(t, n) {
                    var i = e(this),
                        r = e.extend(!0, {}, t),
                        o = e.effects.setMode(i, t.mode || "effect"),
                        s = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "hide" === o ? 0 : 100),
                        a = t.direction || "both",
                        l = t.origin,
                        u = { height: i.height(), width: i.width(), outerHeight: i.outerHeight(), outerWidth: i.outerWidth() },
                        c = { y: "horizontal" !== a ? s / 100 : 1, x: "vertical" !== a ? s / 100 : 1 };
                    r.effect = "size", r.queue = !1, r.complete = n, "effect" !== o && (r.origin = l || ["middle", "center"], r.restore = !0), r.from = t.from || ("show" === o ? { height: 0, width: 0, outerHeight: 0, outerWidth: 0 } : u), r.to = { height: u.height * c.y, width: u.width * c.x, outerHeight: u.outerHeight * c.y, outerWidth: u.outerWidth * c.x }, r.fade && ("show" === o && (r.from.opacity = 0, r.to.opacity = 1), "hide" === o && (r.from.opacity = 1, r.to.opacity = 0)), i.effect(r)
                }, e.effects.effect.size = function(t, n) {
                    var i, r, o, s = e(this),
                        a = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                        l = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                        u = ["width", "height", "overflow"],
                        c = ["fontSize"],
                        h = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                        d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                        f = e.effects.setMode(s, t.mode || "effect"),
                        p = t.restore || "effect" !== f,
                        g = t.scale || "both",
                        m = t.origin || ["middle", "center"],
                        v = s.css("position"),
                        _ = p ? a : l,
                        y = { height: 0, width: 0, outerHeight: 0, outerWidth: 0 };
                    "show" === f && s.show(), i = { height: s.height(), width: s.width(), outerHeight: s.outerHeight(), outerWidth: s.outerWidth() }, "toggle" === t.mode && "show" === f ? (s.from = t.to || y, s.to = t.from || i) : (s.from = t.from || ("show" === f ? y : i), s.to = t.to || ("hide" === f ? y : i)), o = { from: { y: s.from.height / i.height, x: s.from.width / i.width }, to: { y: s.to.height / i.height, x: s.to.width / i.width } }, ("box" === g || "both" === g) && (o.from.y !== o.to.y && (_ = _.concat(h), s.from = e.effects.setTransition(s, h, o.from.y, s.from), s.to = e.effects.setTransition(s, h, o.to.y, s.to)), o.from.x !== o.to.x && (_ = _.concat(d), s.from = e.effects.setTransition(s, d, o.from.x, s.from), s.to = e.effects.setTransition(s, d, o.to.x, s.to))), ("content" === g || "both" === g) && o.from.y !== o.to.y && (_ = _.concat(c).concat(u), s.from = e.effects.setTransition(s, c, o.from.y, s.from), s.to = e.effects.setTransition(s, c, o.to.y, s.to)), e.effects.save(s, _), s.show(), e.effects.createWrapper(s), s.css("overflow", "hidden").css(s.from), m && (r = e.effects.getBaseline(m, i), s.from.top = (i.outerHeight - s.outerHeight()) * r.y, s.from.left = (i.outerWidth - s.outerWidth()) * r.x, s.to.top = (i.outerHeight - s.to.outerHeight) * r.y, s.to.left = (i.outerWidth - s.to.outerWidth) * r.x), s.css(s.from), ("content" === g || "both" === g) && (h = h.concat(["marginTop", "marginBottom"]).concat(c), d = d.concat(["marginLeft", "marginRight"]), u = a.concat(h).concat(d), s.find("*[width]").each(function() {
                        var n = e(this),
                            i = { height: n.height(), width: n.width(), outerHeight: n.outerHeight(), outerWidth: n.outerWidth() };
                        p && e.effects.save(n, u), n.from = { height: i.height * o.from.y, width: i.width * o.from.x, outerHeight: i.outerHeight * o.from.y, outerWidth: i.outerWidth * o.from.x }, n.to = { height: i.height * o.to.y, width: i.width * o.to.x, outerHeight: i.height * o.to.y, outerWidth: i.width * o.to.x }, o.from.y !== o.to.y && (n.from = e.effects.setTransition(n, h, o.from.y, n.from), n.to = e.effects.setTransition(n, h, o.to.y, n.to)), o.from.x !== o.to.x && (n.from = e.effects.setTransition(n, d, o.from.x, n.from), n.to = e.effects.setTransition(n, d, o.to.x, n.to)), n.css(n.from), n.animate(n.to, t.duration, t.easing, function() { p && e.effects.restore(n, u) })
                    })), s.animate(s.to, {
                        queue: !1,
                        duration: t.duration,
                        easing: t.easing,
                        complete: function() {
                            0 === s.to.opacity && s.css("opacity", s.from.opacity), "hide" === f && s.hide(), e.effects.restore(s, _), p || ("static" === v ? s.css({ position: "relative", top: s.to.top, left: s.to.left }) : e.each(["top", "left"], function(e, t) {
                                s.css(t, function(t, n) {
                                    var i = parseInt(n, 10),
                                        r = e ? s.to.left : s.to.top;
                                    return "auto" === n ? r + "px" : i + r + "px"
                                })
                            })), e.effects.removeWrapper(s), n()
                        }
                    })
                }
            }(jQuery),
            function(e) {
                e.effects.effect.shake = function(t, n) {
                    var i, r = e(this),
                        o = ["position", "top", "bottom", "left", "right", "height", "width"],
                        s = e.effects.setMode(r, t.mode || "effect"),
                        a = t.direction || "left",
                        l = t.distance || 20,
                        u = t.times || 3,
                        c = 2 * u + 1,
                        h = Math.round(t.duration / c),
                        d = "up" === a || "down" === a ? "top" : "left",
                        f = "up" === a || "left" === a,
                        p = {},
                        g = {},
                        m = {},
                        v = r.queue(),
                        _ = v.length;
                    for (e.effects.save(r, o), r.show(), e.effects.createWrapper(r), p[d] = (f ? "-=" : "+=") + l, g[d] = (f ? "+=" : "-=") + 2 * l, m[d] = (f ? "-=" : "+=") + 2 * l, r.animate(p, h, t.easing), i = 1; u > i; i++) r.animate(g, h, t.easing).animate(m, h, t.easing);
                    r.animate(g, h, t.easing).animate(p, h / 2, t.easing).queue(function() { "hide" === s && r.hide(), e.effects.restore(r, o), e.effects.removeWrapper(r), n() }), _ > 1 && v.splice.apply(v, [1, 0].concat(v.splice(_, c + 1))), r.dequeue()
                }
            }(jQuery),
            function(e) {
                e.effects.effect.slide = function(t, n) {
                    var i, r = e(this),
                        o = ["position", "top", "bottom", "left", "right", "width", "height"],
                        s = e.effects.setMode(r, t.mode || "show"),
                        a = "show" === s,
                        l = t.direction || "left",
                        u = "up" === l || "down" === l ? "top" : "left",
                        c = "up" === l || "left" === l,
                        h = {};
                    e.effects.save(r, o), r.show(), i = t.distance || r["top" === u ? "outerHeight" : "outerWidth"](!0), e.effects.createWrapper(r).css({ overflow: "hidden" }), a && r.css(u, c ? isNaN(i) ? "-" + i : -i : i), h[u] = (a ? c ? "+=" : "-=" : c ? "-=" : "+=") + i, r.animate(h, { queue: !1, duration: t.duration, easing: t.easing, complete: function() { "hide" === s && r.hide(), e.effects.restore(r, o), e.effects.removeWrapper(r), n() } })
                }
            }(jQuery),
            function(e) {
                e.effects.effect.transfer = function(t, n) {
                    var i = e(this),
                        r = e(t.to),
                        o = "fixed" === r.css("position"),
                        s = e("body"),
                        a = o ? s.scrollTop() : 0,
                        l = o ? s.scrollLeft() : 0,
                        u = r.offset(),
                        c = { top: u.top - a, left: u.left - l, height: r.innerHeight(), width: r.innerWidth() },
                        h = i.offset(),
                        d = e('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(t.className).css({ top: h.top - a, left: h.left - l, height: i.innerHeight(), width: i.innerWidth(), position: o ? "fixed" : "absolute" }).animate(c, t.duration, t.easing, function() { d.remove(), n() })
                }
            }(jQuery)
    }).call(this), "undefined" == typeof Package && (Package = {}), Package["jquery-ui"] = {}
}(),
function() {
    var e, t, n = Package.meteor.Meteor;
    (function() {
        if (e = {}, e.pageview = function() { console.log("Analytics code is not loaded yet.") }, e.event = function() { console.log("Analytics code is not loaded yet.") }, t = function(e, t, n, i, r, o, s) {
                e.GoogleAnalyticsObject = r, e[r] = e[r] || function() {
                    (e[r].q = e[r].q || []).push(arguments)
                }, e[r].l = 1 * new Date, o = t.createElement(n), s = t.getElementsByTagName(n)[0], o.async = 1, o.src = i, s.parentNode.insertBefore(o, s)
            }, n.settings && void 0 !== n.settings.public && void 0 !== n.settings.public.ga && void 0 !== n.settings.public.ga.account) {
            t(window, document, "script", "//www.google-analytics.com/analytics.js", "ga");
            var i = n.settings.public.ga,
                r = {};
            "undefined" != typeof i.cookieName && (r.cookieName = i.cookieName), "undefined" != typeof i.cookieDomain && (r.cookieDomain = i.cookieDomain), "undefined" != typeof i.cookieExpires && (r.cookieExpires = i.cookieExpires), 0 === Object.keys(r).length && (r = "auto"), ga("create", i.account, r), e.pageview = function(e) { e || (e = window.location.pathname), ga("send", "pageview", e) }, e.event = function(e, t, n, i) { ga("send", "event", e, t, n, i) }
        } else console.log("public.ga.account has not been set in your settings.json file.")
    }).call(this), "undefined" == typeof Package && (Package = {}), Package.GAnalytics = { GAnalytics: e }
}(),
function() { Package.meteor.Meteor; "undefined" == typeof Package && (Package = {}), Package.webapp = {} }(),
function() {
    var e, t = Package.meteor.Meteor,
        n = Package.underscore._,
        i = Package.deps.Deps,
        r = Package.ejson.EJSON;
    (function() {
        var o = function(e) { return void 0 === e ? "undefined" : r.stringify(e) },
            s = function(e) { return void 0 === e || "undefined" === e ? void 0 : r.parse(e) };
        e = function(e) { this.keys = e || {}, this.keyDeps = {}, this.keyValueDeps = {} }, n.extend(e.prototype, {
            set: function(e, t) {
                var i = this;
                t = o(t);
                var r = "undefined";
                if (n.has(i.keys, e) && (r = i.keys[e]), t !== r) {
                    i.keys[e] = t;
                    var s = function(e) { e && e.changed() };
                    s(i.keyDeps[e]), i.keyValueDeps[e] && (s(i.keyValueDeps[e][r]), s(i.keyValueDeps[e][t]))
                }
            },
            setDefault: function(e, t) {
                var n = this;
                void 0 === n.keys[e] && n.set(e, t)
            },
            get: function(e) { var t = this; return t._ensureKey(e), t.keyDeps[e].depend(), s(t.keys[e]) },
            equals: function(e, a) {
                var l = this,
                    u = Package["mongo-livedata"] && t.Collection.ObjectID;
                if (!("string" == typeof a || "number" == typeof a || "boolean" == typeof a || "undefined" == typeof a || a instanceof Date || u && a instanceof u || null === a)) throw new Error("ReactiveDict.equals: value must be scalar");
                var c = o(a);
                if (i.active) {
                    l._ensureKey(e), n.has(l.keyValueDeps[e], c) || (l.keyValueDeps[e][c] = new i.Dependency);
                    var h = l.keyValueDeps[e][c].depend();
                    h && i.onInvalidate(function() { l.keyValueDeps[e][c].hasDependents() || delete l.keyValueDeps[e][c] })
                }
                var d = void 0;
                return n.has(l.keys, e) && (d = s(l.keys[e])), r.equals(d, a)
            },
            _ensureKey: function(e) {
                var t = this;
                e in t.keyDeps || (t.keyDeps[e] = new i.Dependency, t.keyValueDeps[e] = {})
            },
            getMigrationData: function() { return this.keys }
        })
    }).call(this), "undefined" == typeof Package && (Package = {}), Package["reactive-dict"] = { ReactiveDict: e }
}(),
function() {
    {
        var e, t = (Package.meteor.Meteor, Package.underscore._, Package["reactive-dict"].ReactiveDict);
        Package.ejson.EJSON
    }(function() {
        var n = {};
        if (Package.reload) {
            var i = Package.reload.Reload._migrationData("session");
            i && i.keys && (n = i.keys)
        }
        e = new t(n), Package.reload && Package.reload.Reload._onMigrate("session", function() { return [!0, { keys: e.keys }] })
    }).call(this), "undefined" == typeof Package && (Package = {}), Package.session = { Session: e }
}(),
function() {
    var e, t = (Package.meteor.Meteor, Package.underscore._),
        n = Package.spark.Spark;
    (function() {
        e = {}, e.json_ast_to_func = function(t) { return function(n, i) { return e.evaluate(t, n, i) } };
        var i = Package.minimongo ? Package.minimongo.LocalCollection._idStringify : function(e) { return e };
        e._default_helpers = { "with": function(e, t) { return !e || e instanceof Array && !e.length ? t.inverse(this) : t.fn(e) }, each: function(e, r) { var o = this; return e && e.length > 0 ? t.map(e, function(e) { var t = e && e._id && i(e._id) || ("string" == typeof e ? e : null) || n.UNIQUE_LABEL; return n.labelBranch(t, function() { return r.fn(e) }) }).join("") : n.labelBranch("else", function() { return r.inverse(o) }) }, "if": function(e, t) { return !e || e instanceof Array && !e.length ? t.inverse(this) : t.fn(this) }, unless: function(e, t) { return !e || e instanceof Array && !e.length ? t.fn(this) : t.inverse(this) } }, e.registerHelper = function(t, n) {
            if (t in e._default_helpers) throw new Error("There is already a helper '" + t + "'");
            e._default_helpers[t] = n
        }, e._escape = function() {
            var e = { "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;", "&": "&amp;" },
                t = function(t) { return e[t] };
            return function(e) { return e.replace(/[&<>"'`]/g, t) }
        }(), e._defaultThis = function() { return this }(), e.evaluate = function(i, r, o) {
            o = o || {};
            var s = t.extend({}, e._default_helpers);
            t.extend(s, o.helpers || {});
            var a = o.partials || {},
                l = function(e, n) {
                    if ("object" != typeof n) return n;
                    for (var i = 0; i < n[0]; i++) {
                        if (!e.parent) throw new Error("Too many '..' segments");
                        e = e.parent
                    }
                    if (1 === n.length) return e.data;
                    var r = !1;
                    "" === n[1] && (n = n.slice(), n.splice(1, 1), r = !0);
                    var o, a = e.data;
                    if (0 === n[0] && s.hasOwnProperty(n[1]) && !r) o = s[n[1]];
                    else {
                        if (!o instanceof Object && "undefined" != typeof
                            function() {}[n[1]] && !r) throw new Error("Can't call a helper '" + n[1] + "' because it is a built-in function property in JavaScript");
                        o = e.data && e.data[n[1]]
                    }
                    for (var i = 2; i < n.length; i++) {
                        if ("function" == typeof o && (o = o.call(a), a = o), void 0 === o || null === o) { o = ""; break }
                        o = o[n[i]]
                    }
                    return "function" == typeof o ? t.bind(o, a) : o
                },
                u = function(e, n, i, r) {
                    i = i || {}, n = n.slice(0);
                    var o = n[n.length - 1],
                        s = {};
                    "object" != typeof o || o instanceof Array || t.each(n.pop(), function(t, n) {
                        var i = l(e, t);
                        s[n] = "function" == typeof i ? i() : i
                    });
                    for (var a = function(t, n) { for (var i = t.slice(1), r = 0; r < i.length; r++) "function" == typeof i[r] && (i[r] = i[r]()); return n && i.push(n), t[0].apply(e.data, i) }, u = new Array(n.length), c = 0; c < n.length; c++) u[c] = l(e, n[c]);
                    if ("function" != typeof u[0]) return u[0];
                    if (r && u.length > 1) { var h = u[1]; "function" == typeof h && (h = a(u.slice(1), { hash: s })), u = [u[0], h], i.hash = {} } else i.hash = s;
                    return a(u, i)
                },
                c = function(i, r, o) {
                    var s, l = [],
                        h = function(e) { return "string" == typeof e ? e : null === e ? "null" : void 0 === e ? "" : e.toString() },
                        d = function(t, i) { return function(r) { return (r || e._defaultThis) === (i || e._defaultThis) ? t(r) : n.setDataContext(r, t(r)) } },
                        f = function(t) { return t instanceof e.SafeString ? t.toString() : e._escape(h(t)) },
                        p = function() { return (o ? o + "." : "") + s },
                        g = function(e, t) { return n.labelBranch(e + "@" + p(), t) };
                    return t.each(r, function(e, t) {
                        if (s = t, "string" == typeof e) l.push(e);
                        else if ("{" === e[0]) l.push(g(e[1], function() { return f(u(i, e[1])) }));
                        else if ("!" === e[0]) l.push(g(e[1], function() { return h(u(i, e[1] || "")) }));
                        else if ("#" === e[0]) {
                            var n = p(),
                                r = d(function(t) { return c({ parent: i, data: t }, e[2], n) }, i.data);
                            r.fn = r, r.inverse = d(function(t) { return c({ parent: i, data: t }, e[3] || [], n) }, i.data);
                            var o = g(e[1], function() { return h(u(i, e[1], r, !0)) });
                            l.push(o)
                        } else {
                            if (">" !== e[0]) throw new Error("bad element in template");
                            var m = e[1];
                            if (!(m in a)) throw new Error("No such template '" + m + "'");
                            var o = g(m, function() { return h(a[m](i.data)) });
                            l.push(o)
                        }
                    }), l.join("")
                },
                h = (o.name || "") + "#";
            return c({ data: r, parent: null }, i, h)
        }, e.SafeString = function(e) { this.string = e }, e.SafeString.prototype.toString = function() { return this.string.toString() }
    }).call(this), "undefined" == typeof Package && (Package = {}), Package.handlebars = { Handlebars: e }
}(),
function() {
    var e, t = (Package.meteor.Meteor, Package.underscore._),
        n = Package.spark.Spark,
        i = Package.handlebars.Handlebars;
    (function() {
        e = {};
        var r = {},
            o = Package.minimongo ? Package.minimongo.LocalCollection._idStringify : function(e) { return e },
            s = function() {
                s = function() {};
                var e = i._default_helpers.each;
                i._default_helpers.each = function(i, r) { var s = function() { return !i || i instanceof Array || i instanceof Object && "observeChanges" in i }; if (!s()) throw new Error("{{#each}} only accepts arrays, cursors, or falsey values. You passed: " + i); return i && "observeChanges" in i ? n.list(i, function(e) { return n.labelBranch(e && e._id && o(e._id) || n.UNIQUE_LABEL, function() { var i = n.isolate(t.bind(r.fn, null, e)); return n.setDataContext(e, i) }) }, function() { return r.inverse ? n.isolate(r.inverse) : "" }) : e.call(this, i, r) }, t.extend(i._default_helpers, { isolate: function(e) { var t = this; return n.isolate(function() { return e.fn(t) }) }, constant: function(e) { var t = this; return n.createLandmark({ constant: !0 }, function() { return e.fn(t) }) } })
            },
            a = {},
            l = function(e) { var t = a[e.id] || (a[e.id] = { find: function(t) { if (!e.hasDom()) throw new Error("Template not in DOM"); return e.find(t) }, findAll: function(t) { if (!e.hasDom()) throw new Error("Template not in DOM"); return e.findAll(t) } }); return t.firstNode = e.hasDom() ? e.firstNode() : null, t.lastNode = e.hasDom() ? e.lastNode() : null, t },
            u = {
                _tmpl_data: null,
                events: function(e) {
                    var n = this._tmpl_data.events = this._tmpl_data.events || {};
                    t.each(e, function(e, t) { n[t] = n[t] || [], n[t].push(e) })
                },
                preserve: function(e) {
                    var n = this._tmpl_data.preserve = this._tmpl_data.preserve || {};
                    t.isArray(e) ? t.each(e, function(e) { n[e] = !0 }) : t.extend(n, e)
                },
                helpers: function(e) { var t = this._tmpl_data.helpers = this._tmpl_data.helpers || {}; for (var n in e) t[n] = e[n] }
            };
        e.__define__ = function(o, c) {
            if (s(), "__define__" === o) throw new Error("Sorry, '__define__' is a special name and cannot be used as the name of a template");
            var h = function(i) {
                var s = o && e[o] || {},
                    d = s._tmpl_data || {},
                    f = n.labelBranch("Template." + o, function() {
                        var e = n.createLandmark({
                            preserve: d.preserve || {},
                            created: function() {
                                var e = l(this);
                                e.data = i, s.created && s.created.call(e)
                            },
                            rendered: function() {
                                var e = l(this);
                                e.data = i, s.rendered && s.rendered.call(e)
                            },
                            destroyed: function() { s.destroyed && s.destroyed.call(l(this)), delete a[this.id] }
                        }, function() {
                            var e = n.isolate(function() { return c(i, { helpers: t.extend({}, h, d.helpers || {}), partials: r, name: o }) }),
                                a = function(e) { var n = {}; return t.each(e, function(e, i) { "function" == typeof e && (e = [e]), n[i] = t.map(e, function(e) { return function(t, n) { return e.call(this, t, l(n)) } }) }), n },
                                f = s.events !== u.events ? s.events : d.events;
                            return s.events && (e = n.attachEvents(a(f), e)), e
                        });
                        return e = n.setDataContext(i, e)
                    });
                return f
            };
            if (t.extend(h, i.helpers), o) {
                if (e[o]) throw new Error("There are multiple templates named '" + o + "'. Each template needs a unique name.");
                e[o] = h, t.extend(h, u), h._tmpl_data = {}, r[o] = h
            }
            return h
        }
    }).call(this), "undefined" == typeof Package && (Package = {}), Package.templating = { Template: e }
}(), _ = Package.underscore._, GAnalytics = Package.GAnalytics.GAnalytics, Meteor = Package.meteor.Meteor, Log = Package.logging.Log, Deps = Package.deps.Deps, Session = Package.session.Session, DDP = Package.livedata.DDP, Template = Package.templating.Template, Handlebars = Package.handlebars.Handlebars, check = Package.check.check, Match = Package.check.Match, $ = Package.jquery.$, jQuery = Package.jquery.jQuery, Random = Package.random.Random, EJSON = Package.ejson.EJSON, Spark = Package.spark.Spark,
    function() {
        Meteor.startup(function() {
            document.body.appendChild(Spark.render(Template.__define__(null, Package.handlebars.Handlebars.json_ast_to_func([
                [">", "main"], '\n\n  <audio loop id="music-audio" preload="auto">\n      <source src="threes_bees_knees.mp3" type="audio/mp3" />\n  </audio>'
            ]))))
        }), Template.__define__("main", Package.handlebars.Handlebars.json_ast_to_func(['<!-- ??? -->\n  <div id="fb-root"></div>\n\n  ', [">", "header"], "\n  ", [">", "game"], "\n  ", [">", "footer"]])), Template.__define__("header", Package.handlebars.Handlebars.json_ast_to_func(['<div class="header">\n    <h1>Threes<span class="blue">J</span><span class="red">S</span></h1>\n    <h2>A tiny browser clone of <a href="http://www.threesgame.com" target="new">Threes!</a></h2>\n    <p>\n      Use your arrow keys (&larr; &uarr; &rarr; &darr;) to move.\n      <br/><a href="" id="music-control">Play</a> the soundtrack or <a href="http://music.biggiantcircles.com/album/threes-ost" target="new">download</a> it!\n    </p>\n  </div>'])), Template.__define__("game", Package.handlebars.Handlebars.json_ast_to_func(['<div class="game">\n    <div class="board">\n      ', ["#", [
                [0, "times"], 4
            ],
            ['\n      <div class="row">\n        ', ["#", [
                    [0, "times"], 4
                ],
                ['\n          <div class="tile-container"></div>\n        ']
            ], "\n      </div>\n      "]
        ], '\n    </div>\n    <div class="next">\n      <div class="title">Next</div>\n      <div class="tile"></div>\n    </div>\n\n    <div class="new" id="new-game">\n      New game\n    </div>\n  </div>'])), Template.__define__("footer", Package.handlebars.Handlebars.json_ast_to_func(['<div class="footer">\n    <a href="http://www.threesgame.com">Threes!</a> is a game for iOS by <a href="http://twitter.com/ashervo" target="new">Asher</a>, <a href="http://twitter.com/aeiowu" target="new">Greg</a>, and <a href="http://twitter.com/biggiantcircles">Jimmy</a>.\n    <br/>Hackily ported to the web by <a href="http://twitter.com/angelaconstance" target="new">Angela</a>.\n  </div>'])), Template.__define__("tile", Package.handlebars.Handlebars.json_ast_to_func(['<div class="tile" data-coords="', ["{", [
                [0, "row"]
            ]],
            ["{", [
                [0, "col"]
            ]], '">', ["{", [
                [0, "tile"]
            ]], "</div>"
        ])), Template.__define__("endgame", Package.handlebars.Handlebars.json_ast_to_func(['<div class="endgame">\n    <div class="score-intro">Thanks for playing! <strong>^____^</strong> Your score is</div>\n    <div class="score">', ["{", [
            [0, "score"]
        ]], '</div>\n    <a class="btn twitter-btn" href="https://twitter.com/share?text=', ["{", [
            [0, "tweet"]
        ]], '" target="new">Tweet</a>\n    <a class="btn facebook-btn" href="" id="share-facebook" target="new">Facebook</a>\n    </div>\n  </div>']))
    }(),
    function() {
        function e() {
            for (var e = Session.get("tiles"), t = 0; 3 >= t; t++)
                for (var n = 0; 3 >= n; n++) {
                    var i = e[t][n];
                    if (0 != e[t][n]) {
                        var r = Template.tile({ row: t, col: n, tile: i });
                        r = $(r).addClass(document.THREE.util.tile_class(i)), r = $(r).css({ left: 22 + 92 * n, top: 22 + 130 * t }), $(".board").append(r)
                    }
                }
        }

        function t() {
            var e = Session.get("next_tile");
            $(".next .tile").removeClass("red").removeClass("blue").removeClass("number"), $(".next .tile").addClass(document.THREE.util.tile_class(e))
        }

        function n(e) {
            var t = "I scored " + e + " on %23threesjs! %5E_____%5E",
                n = "I scored " + e + " on #threesjs! ^_____^",
                i = $("<div/>", { "class": "overlay" }),
                r = Template.endgame({ score: e, tweet: t });
            i.append(r), $("body").append(i), i.fadeIn(200), $("#share-facebook").click(function(e) { e.preventDefault(), FB.ui({ method: "feed", link: "http://threesjs.com", caption: n }, function() {}) }), $("body").click(function(e) { $(e.target).closest(".endgame").length || i.remove() }), $(window).on("keydown", function(e) { 13 === e.keyCode && i.remove() })
        }

        function i(e, t) {
            var n, i = (e.board, e.moved);
            switch (t) {
                case LEFT:
                    n = function(e) { return { top: e.top, left: e.left - 92 } }, coords = function(e, t) { return String(e) + String(t - 1) };
                    break;
                case RIGHT:
                    n = function(e) { return { top: e.top, left: e.left + 92 } }, coords = function(e, t) { return String(e) + String(t + 1) };
                    break;
                case UP:
                    n = function(e) { return { top: e.top - 130, left: e.left } }, coords = function(e, t) { return String(e - 1) + String(t) };
                    break;
                case DOWN:
                    n = function(e) { return { top: e.top + 130, left: e.left } }, coords = function(e, t) { return String(e + 1) + String(t) }
            }
            $(".tile").css("zIndex", 10), _.each(i, function(e) {
                var t = $("[data-coords=" + String(e.i) + String(e.j) + "]"),
                    i = { top: parseInt(t.css("top")), left: parseInt(t.css("left")) },
                    r = n(i);
                t.css("zIndex", 100), t.animate({ top: r.top, left: r.left }, 200, "easeOutQuart", function() { $("[data-coords=" + coords(e.i, e.j) + "]").remove(), t.attr("data-coords", coords(e.i, e.j)), t.removeClass("blue"), t.removeClass("red"), t.removeClass("number"), t.addClass(document.THREE.util.tile_class(e.t)), t.html(e.t) })
            })
        }

        function r(e, t) {
            var n, i = Session.get("next_tile");
            switch (t) {
                case LEFT:
                    n = function(e, t) { return { top: e, left: t + 92 } };
                    break;
                case RIGHT:
                    n = function(e, t) { return { top: e, left: t - 92 } };
                    break;
                case UP:
                    n = function(e, t) { return { top: e + 130, left: t } };
                    break;
                case DOWN:
                    n = function(e, t) { return { top: e - 130, left: t } }
            }
            var r = Template.tile({ row: e.i, col: e.j, tile: i });
            r = $(r).addClass(document.THREE.util.tile_class(i));
            var o = 22 + 130 * e.i,
                s = 22 + 92 * e.j,
                a = n(o, s);
            r.css({ left: a.left, top: a.top }), $(".board").append(r), r.animate({ top: o, left: s }, 200, "easeOutQuart")
        }
        document.THREE = document.THREE || {}, document.THREE.display = { render_board: e, render_next: t, render_lost: n, animate_move: i, animate_new_tile: r }
    }(),
    function() {
        function e() {
            $(".board .tile").remove();
            for (var e = [
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0]
                ], t = [], n = 0; 9 > n;) {
                var i = Math.floor(4 * Math.random()),
                    r = Math.floor(4 * Math.random());
                _.where(t, { row: i, col: r }).length || (t.push({ row: i, col: r }), n++)
            }
            _.each(t, function(t) { e[t.row][t.col] = document.THREE.util.random_tile() }), Session.set("tiles", e), Session.set("next_tile", document.THREE.util.random_tile()), document.THREE.display.render_board(), document.THREE.display.render_next()
        }

        function t(e) {
            var t = e.which,
                o = n(t);
            if (!_.isEmpty(o.moved)) {
                document.THREE.display.animate_move(o, t), Session.set("tiles", o.board);
                var s = i(o.moved, t);
                document.THREE.display.animate_new_tile(s, t);
                var a = Session.get("tiles");
                a[s.i][s.j] = Session.get("next_tile"), Session.set("tiles", a), r()
            }
        }

        function n(e) {
            var t = Session.get("tiles"),
                n = JSON.parse(JSON.stringify(t)),
                i = [],
                r = function(e, t, r, o) {
                    if (0 !== n[e][t])
                        if (n[e][t] === n[r][o]) {
                            if (1 === n[e][t] || 2 === n[e][t]) return;
                            n[e][t] = 0, n[r][o] *= 2, i.push({ i: e, j: t, t: n[r][o] })
                        } else 0 === n[r][o] ? (n[r][o] = n[e][t], n[e][t] = 0, i.push({ i: e, j: t, t: n[r][o] })) : (1 === n[e][t] && 2 === n[r][o] || 2 === n[e][t] && 1 === n[r][o]) && (n[r][o] = 3, n[e][t] = 0, i.push({ i: e, j: t, t: n[r][o] }))
                };
            switch (e) {
                case LEFT:
                    for (var o = 0; 3 >= o; o++)
                        for (var s = 0; 3 >= s; s++) 0 !== s && r(o, s, o, s - 1);
                    break;
                case RIGHT:
                    for (var o = 0; 3 >= o; o++)
                        for (var s = 3; s >= 0; s--) 3 !== s && r(o, s, o, s + 1);
                    break;
                case UP:
                    for (var s = 0; 3 >= s; s++)
                        for (var o = 0; 3 >= o; o++) 0 !== o && r(o, s, o - 1, s);
                    break;
                case DOWN:
                    for (var s = 0; 3 >= s; s++)
                        for (var o = 3; o >= 0; o--) 3 !== o && r(o, s, o + 1, s)
            }
            return { board: n, moved: i }
        }

        function i(e, t) {
            var n = Session.get("tiles"),
                i = [];
            switch (t) {
                case LEFT:
                    var r = 3,
                        o = _.uniq(_.pluck(e, "i"));
                    _.each(o, function(e) { 0 === n[e][r] && i.push({ i: e, j: r }) });
                    break;
                case RIGHT:
                    var r = 0,
                        o = _.uniq(_.pluck(e, "i"));
                    _.each(o, function(e) { 0 === n[e][r] && i.push({ i: e, j: r }) });
                    break;
                case UP:
                    var s = 3,
                        a = _.uniq(_.pluck(e, "j"));
                    _.each(a, function(e) { 0 === n[s][e] && i.push({ i: s, j: e }) });
                    break;
                case DOWN:
                    var s = 0,
                        a = _.uniq(_.pluck(e, "j"));
                    _.each(a, function(e) { 0 === n[s][e] && i.push({ i: s, j: e }) })
            }
            return _.sample(i)
        }

        function r() {
            var e = Session.get("tiles"),
                t = _.flatten(e);
            if (_.contains(t, 0)) return o(), void 0;
            for (var i = [LEFT, RIGHT, UP, DOWN], r = 0; 3 >= r; r++) { var a = n(i[r]); if (!_.isEmpty(a.moved)) return o(), void 0 }
            setTimeout(s, 500)
        }

        function o() {
            var e = document.THREE.util.random_tile();
            Session.set("next_tile", e), document.THREE.display.render_next()
        }

        function s() {
            var e = Session.get("tiles"),
                t = function(e) { return score = Math.pow(3, Math.log(e / 3) / Math.log(2) + 1), Math.floor(score) },
                n = _.reduce(_.flatten(e), function(e, n) { return e + (1 != n && 2 != n ? t(n) : 0) }, 0);
            document.THREE.display.render_lost(n)
        }
        document.THREE = document.THREE || {}, document.THREE.game = { new_game: e, move: t, generate_new_board: n, insert_new_tile: i, tick: r, next: o, lost: s }
    }(),
    function() {
        function e() {
            var e = Session.get("deck"),
                t = Session.get("current_deck"),
                n = Session.get("tiles"),
                i = _.some(_.flatten(n), function(e) { return e >= 48 });
            if (i && Math.random() <= 1 / 21) {
                var r = _.max(_.flatten(n)),
                    o = Math.log(r / 3) / Math.log(2) - 3,
                    s = _(o).times(function(e) { return 6 * Math.pow(2, e) }),
                    a = _.sample(s);
                return a
            }
            _.isEmpty(t) && (t = _.shuffle(e));
            var a = _.first(t);
            return t = _.rest(t), Session.set("deck", e), Session.set("current_deck", t), a
        }

        function t(e) { return 1 === e ? "blue" : 2 === e ? "red" : "number" }
        document.THREE = document.THREE || {}, Session.set("deck", [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3]), Session.set("current_deck", []), document.THREE.util = { random_tile: e, tile_class: t }
    }(),
    function() {
        document.THREE = document.THREE || {}, LEFT = 37, RIGHT = 39, UP = 38, DOWN = 40, Template.game.times = function(e, t) { for (var n = "", i = 0; e > i; i++) n += t.fn(i); return n }, $(function() {
            GAnalytics.pageview(), Session.get("tiles") ? (document.THREE.display.render_board(), document.THREE.display.render_next()) : document.THREE.game.new_game();
            var e = _.throttle(document.THREE.game.move, 250, !0);
            $(window).on("keydown", function(t) {
                (t.keyCode === LEFT || t.keyCode === RIGHT || t.keyCode === UP || t.keyCode === DOWN) && (t.preventDefault(), e(t))
            }), $("#new-game").click(document.THREE.game.new_game);
            var t = "play";
            $("#music-control").click(function(e) { e.preventDefault(), "play" === t ? ($("#music-audio").get(0).play(), $(this).html("Pause"), t = "pause") : ($("#music-audio").get(0).pause(), $(this).html("Play"), t = "play") }), window.fbAsyncInit = function() { FB.init({ appId: "212828108914831", status: !0, xfbml: !0 }) },
                function(e, t, n) {
                    var i, r = e.getElementsByTagName(t)[0];
                    e.getElementById(n) || (i = e.createElement(t), i.id = n, i.src = "//connect.facebook.net/en_US/all.js", r.parentNode.insertBefore(i, r))
                }(document, "script", "facebook-jssdk")
        })
    }();