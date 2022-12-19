(window.webpackJsonp = window.webpackJsonp || []).push([
    ["chunk-vue-router"], {
        "6c02": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return Oe
            })), n.d(t, "b", (function() {
                return S
            })), n.d(t, "c", (function() {
                return ke
            })), n.d(t, "d", (function() {
                return Ee
            }));
            var r = n("7a23");
            n("3f4e");
            /*!
             * vue-router v4.0.12
             * (c) 2021 Eduardo San Martin Morote
             * @license MIT
             */
            const o = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag;
            var a, c;
            const s = (t = e => o ? Symbol(e) : "_vr_" + e)("rvlm"),
                i = t("rvd"),
                l = t("r"),
                u = t("rl"),
                f = t("rvl"),
                p = "undefined" != typeof window,
                h = Object.assign;

            function d(e, t) {
                const n = {};
                for (const r in t) {
                    const o = t[r];
                    n[r] = Array.isArray(o) ? o.map(e) : e(o)
                }
                return n
            }
            const m = () => {},
                v = /\/$/;

            function g(e, t, n = "/") {
                let r, o = {},
                    a = "",
                    c = "";
                var s = t.indexOf("?"),
                    i = t.indexOf("#", -1 < s ? s : 0);
                return -1 < s && (r = t.slice(0, s), a = t.slice(s + 1, -1 < i ? i : t.length), o = e(a)), -1 < i && (r = r || t.slice(0, i), c = t.slice(i, t.length)), r = function(e, t) {
                    if (e.startsWith("/")) return e;
                    if (!e) return t;
                    const n = t.split("/"),
                        r = e.split("/");
                    let o, a, c = n.length - 1;
                    for (o = 0; o < r.length; o++)
                        if (a = r[o], 1 !== c && "." !== a) {
                            if (".." !== a) break;
                            c--
                        }
                    return n.slice(0, c).join("/") + "/" + r.slice(o - (o === r.length ? 1 : 0)).join("/")
                }(null != r ? r : t, n), {
                    fullPath: r + (a && "?") + a + c,
                    path: r,
                    query: o,
                    hash: c
                }
            }

            function b(e, t) {
                return t && e.toLowerCase().startsWith(t.toLowerCase()) ? e.slice(t.length) || "/" : e
            }

            function y(e, t) {
                return (e.aliasOf || e) === (t.aliasOf || t)
            }

            function w(e, t) {
                if (Object.keys(e).length !== Object.keys(t).length) return !1;
                for (const o in e)
                    if (n = e[o], r = t[o], !(Array.isArray(n) ? O(n, r) : Array.isArray(r) ? O(r, n) : n === r)) return !1;
                var n, r;
                return !0
            }

            function O(e, t) {
                return Array.isArray(t) ? e.length === t.length && e.every((e, n) => e === t[n]) : 1 === e.length && e[0] === t
            }

            function j(e) {
                if (!e)
                    if (p) {
                        const t = document.querySelector("base");
                        e = (e = t && t.getAttribute("href") || "/").replace(/^\w+:\/\/[^\/]+/, "")
                    } else e = "/";
                return "/" !== e[0] && "#" !== e[0] && (e = "/" + e), (e => e.replace(v, ""))(e)
            }(n = a = a || {}).pop = "pop", n.push = "push", (n = c = c || {}).back = "back", n.forward = "forward", n.unknown = "";
            const E = /^[^#]+#/;

            function k(e, t) {
                return e.replace(E, "#") + t
            }
            const R = () => ({
                left: window.pageXOffset,
                top: window.pageYOffset
            });

            function A(e, t) {
                return (history.state ? history.state.position - t : -1) + e
            }
            const P = new Map;

            function x(e, t) {
                const {
                    pathname: n,
                    search: r,
                    hash: o
                } = t;
                if (-1 < (t = e.indexOf("#"))) {
                    t = o.includes(e.slice(t)) ? e.slice(t).length : 1;
                    let n = o.slice(t);
                    return "/" !== n[0] && (n = "/" + n), b(n, "")
                }
                return b(n, e) + r + o
            }

            function C(e, t, n, r = !1, o = !1) {
                return {
                    back: e,
                    current: t,
                    forward: n,
                    replaced: r,
                    position: window.history.length,
                    scroll: o ? R() : null
                }
            }

            function $(e) {
                const {
                    history: t,
                    location: n
                } = window, r = {
                    value: x(e, n)
                }, o = {
                    value: t.state
                };

                function a(r, a, c) {
                    var s = e.indexOf("#");
                    r = -1 < s ? (n.host && document.querySelector("base") ? e : e.slice(s)) + r : location.protocol + "//" + location.host + e + r;
                    try {
                        t[c ? "replaceState" : "pushState"](a, "", r), o.value = a
                    } catch (a) {
                        n[c ? "replace" : "assign"](r)
                    }
                }
                return o.value || a(r.value, {
                    back: null,
                    current: r.value,
                    forward: null,
                    position: t.length - 1,
                    replaced: !0,
                    scroll: null
                }, !0), {
                    location: r,
                    state: o,
                    push: function(e, n) {
                        var c = h({}, o.value, t.state, {
                            forward: e,
                            scroll: R()
                        });
                        a(c.current, c, !0), a(e, h({}, C(r.value, e, null), {
                            position: c.position + 1
                        }, n), !1), r.value = e
                    },
                    replace: function(e, n) {
                        a(e, h({}, t.state, C(o.value.back, e, o.value.forward, !0), n, {
                            position: o.value.position
                        }), !0), r.value = e
                    }
                }
            }

            function S(e) {
                const t = $(e = j(e)),
                    n = function(e, t, n, r) {
                        let o = [],
                            s = [],
                            i = null;
                        const l = ({
                            state: s
                        }) => {
                            var l = x(e, location);
                            const u = n.value;
                            var f = t.value;
                            let p = 0;
                            if (s) {
                                if (n.value = l, t.value = s, i && i === u) return void(i = null);
                                p = f ? s.position - f.position : 0
                            } else r(l);
                            o.forEach(e => {
                                e(n.value, u, {
                                    delta: p,
                                    type: a.pop,
                                    direction: p ? 0 < p ? c.forward : c.back : c.unknown
                                })
                            })
                        };

                        function u() {
                            const e = window.history;
                            e.state && e.replaceState(h({}, e.state, {
                                scroll: R()
                            }), "")
                        }
                        return window.addEventListener("popstate", l), window.addEventListener("beforeunload", u), {
                            pauseListeners: function() {
                                i = n.value
                            },
                            listen: function(e) {
                                o.push(e);
                                var t = () => {
                                    var t = o.indexOf(e); - 1 < t && o.splice(t, 1)
                                };
                                return s.push(t), t
                            },
                            destroy: function() {
                                for (const e of s) e();
                                s = [], window.removeEventListener("popstate", l), window.removeEventListener("beforeunload", u)
                            }
                        }
                    }(e, t.state, t.location, t.replace);
                return e = h({
                    location: "",
                    base: e,
                    go: function(e, t = !0) {
                        t || n.pauseListeners(), history.go(e)
                    },
                    createHref: k.bind(null, e)
                }, t, n), Object.defineProperty(e, "location", {
                    enumerable: !0,
                    get: () => t.location.value
                }), Object.defineProperty(e, "state", {
                    enumerable: !0,
                    get: () => t.state.value
                }), e
            }

            function q(e) {
                return "string" == typeof e || "symbol" == typeof e
            }
            const L = {
                    path: "/",
                    name: void 0,
                    params: {},
                    query: {},
                    hash: "",
                    fullPath: "/",
                    matched: [],
                    meta: {},
                    redirectedFrom: void 0
                },
                _ = t("nf");

            function B(e, t) {
                return h(new Error, {
                    type: e,
                    [_]: !0
                }, t)
            }

            function G(e, t) {
                return e instanceof Error && _ in e && (null == t || e.type & t)
            }
            const M = {
                    sensitive: !1,
                    strict: !1,
                    start: !0,
                    end: !0
                },
                I = /[.+*?^${}()[\]/\\]/g;

            function T(e, t) {
                let n = 0;
                for (var r = e.score, o = t.score; n < r.length && n < o.length;) {
                    var a = function(e, t) {
                        let n = 0;
                        for (; n < e.length && n < t.length;) {
                            var r = t[n] - e[n];
                            if (r) return r;
                            n++
                        }
                        return e.length < t.length ? 1 === e.length && 80 === e[0] ? -1 : 1 : e.length > t.length ? 1 === t.length && 80 === t[0] ? 1 : -1 : 0
                    }(r[n], o[n]);
                    if (a) return a;
                    n++
                }
                return o.length - r.length
            }
            const U = {
                    type: 0,
                    value: ""
                },
                F = /[a-zA-Z0-9_]/;

            function W(e, t, n) {
                return n = function(e, t) {
                    var n = h({}, M, t);
                    const r = [];
                    let o = n.start ? "^" : "";
                    const a = [];
                    for (const u of e) {
                        const e = u.length ? [] : [90];
                        n.strict && !u.length && (o += "/");
                        for (let r = 0; r < u.length; r++) {
                            const f = u[r];
                            let p = 40 + (n.sensitive ? .25 : 0);
                            if (0 === f.type) r || (o += "/"), o += f.value.replace(I, "\\$&"), p += 40;
                            else if (1 === f.type) {
                                var {
                                    value: c,
                                    repeatable: s,
                                    optional: i,
                                    regexp: l
                                } = f;
                                a.push({
                                    name: c,
                                    repeatable: s,
                                    optional: i
                                });
                                const e = l || "[^/]+?";
                                if ("[^/]+?" !== e) {
                                    p += 10;
                                    try {
                                        new RegExp(`(${e})`)
                                    } catch (t) {
                                        throw new Error(`Invalid custom RegExp for param "${c}" (${e}): ` + t.message)
                                    }
                                }
                                let n = s ? `((?:${e})(?:/(?:${e}))*)` : `(${e})`;
                                r || (n = i && u.length < 2 ? `(?:/${n})` : "/" + n), i && (n += "?"), o += n, p += 20, i && (p += -8), s && (p += -20), ".*" === e && (p += -50)
                            }
                            e.push(p)
                        }
                        r.push(e)
                    }
                    n.strict && n.end && (r[t = r.length - 1][r[t].length - 1] += .7000000000000001), n.strict || (o += "/?"), n.end ? o += "$" : n.strict && (o += "(?:/|$)");
                    const u = new RegExp(o, n.sensitive ? "" : "i");
                    return {
                        re: u,
                        score: r,
                        keys: a,
                        parse: function(e) {
                            var t = e.match(u);
                            const n = {};
                            if (!t) return null;
                            for (let e = 1; e < t.length; e++) {
                                const o = t[e] || "";
                                var r = a[e - 1];
                                n[r.name] = o && r.repeatable ? o.split("/") : o
                            }
                            return n
                        },
                        stringify: function(t) {
                            let n = "",
                                r = !1;
                            for (const s of e) {
                                r && n.endsWith("/") || (n += "/"), r = !1;
                                for (const e of s)
                                    if (0 === e.type) n += e.value;
                                    else if (1 === e.type) {
                                    var {
                                        value: o,
                                        repeatable: a,
                                        optional: c
                                    } = e;
                                    const i = o in t ? t[o] : "";
                                    if (Array.isArray(i) && !a) throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);
                                    if (!(a = Array.isArray(i) ? i.join("/") : i)) {
                                        if (!c) throw new Error(`Missing required param "${o}"`);
                                        s.length < 2 && (n.endsWith("/") ? n = n.slice(0, -1) : r = !0)
                                    }
                                    n += a
                                }
                            }
                            return n
                        }
                    }
                }(function(e) {
                    if (!e) return [
                        []
                    ];
                    if ("/" === e) return [
                        [U]
                    ];
                    if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);

                    function t(e) {
                        throw new Error(`ERR (${n})/"${l}": ` + e)
                    }
                    let n = 0,
                        r = n;
                    const o = [];
                    let a;

                    function c() {
                        a && o.push(a), a = []
                    }
                    let s, i = 0,
                        l = "",
                        u = "";

                    function f() {
                        l && (0 === n ? a.push({
                            type: 0,
                            value: l
                        }) : 1 === n || 2 === n || 3 === n ? (1 < a.length && ("*" === s || "+" === s) && t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`), a.push({
                            type: 1,
                            value: l,
                            regexp: u,
                            repeatable: "*" === s || "+" === s,
                            optional: "*" === s || "?" === s
                        })) : t("Invalid state to consume buffer"), l = "")
                    }

                    function p() {
                        l += s
                    }
                    for (; i < e.length;)
                        if (s = e[i++], "\\" !== s || 2 === n) switch (n) {
                            case 0:
                                "/" === s ? (l && f(), c()) : ":" === s ? (f(), n = 1) : p();
                                break;
                            case 4:
                                p(), n = r;
                                break;
                            case 1:
                                "(" === s ? n = 2 : F.test(s) ? p() : (f(), n = 0, "*" !== s && "?" !== s && "+" !== s && i--);
                                break;
                            case 2:
                                ")" === s ? "\\" == u[u.length - 1] ? u = u.slice(0, -1) + s : n = 3 : u += s;
                                break;
                            case 3:
                                f(), n = 0, "*" !== s && "?" !== s && "+" !== s && i--, u = "";
                                break;
                            default:
                                t("Unknown state")
                        } else r = n, n = 4;
                    return 2 === n && t(`Unfinished custom RegExp for param "${l}"`), f(), c(), o
                }(e.path), n), e = h(n, {
                    record: e,
                    parent: t,
                    children: [],
                    alias: []
                }), t && !e.record.aliasOf == !t.record.aliasOf && t.children.push(e), e
            }

            function D(e, t) {
                const n = [],
                    r = new Map;

                function o(e, c, s) {
                    var i, l = !s;
                    const u = {
                        path: (i = e).path,
                        redirect: i.redirect,
                        name: i.name,
                        meta: i.meta || {},
                        aliasOf: void 0,
                        beforeEnter: i.beforeEnter,
                        props: function(e) {
                            const t = {},
                                n = e.props || !1;
                            if ("component" in e) t.default = n;
                            else
                                for (const r in e.components) t[r] = "boolean" == typeof n ? n : n[r];
                            return t
                        }(i),
                        children: i.children || [],
                        instances: {},
                        leaveGuards: new Set,
                        updateGuards: new Set,
                        enterCallbacks: {},
                        components: "components" in i ? i.components || {} : {
                            default: i.component
                        }
                    };
                    u.aliasOf = s && s.record;
                    var f, p = z(t, e);
                    const d = [u];
                    if ("alias" in e)
                        for (const t of "string" == typeof e.alias ? [e.alias] : e.alias) d.push(h({}, u, {
                            components: (s ? s.record : u).components,
                            path: t,
                            aliasOf: s ? s.record : u
                        }));
                    let v;
                    for (const t of d) {
                        var g, b = t.path;
                        if (c && "/" !== b[0] && (g = "/" === (g = c.record.path)[g.length - 1] ? "" : "/", t.path = c.record.path + (b && g + b)), f = W(t, c, p), s ? s.alias.push(f) : (v = v || f, v !== f && v.alias.push(f), l && e.name && !V(f) && a(e.name)), "children" in u) {
                            var y = u.children;
                            for (let e = 0; e < y.length; e++) o(y[e], f, s && s.children[e])
                        }
                        s = s || f,
                            function(e) {
                                let t = 0;
                                for (; t < n.length && 0 <= T(e, n[t]);) t++;
                                n.splice(t, 0, e), e.record.name && !V(e) && r.set(e.record.name, e)
                            }(f)
                    }
                    return v ? () => {
                        a(v)
                    } : m
                }

                function a(e) {
                    if (q(e)) {
                        const t = r.get(e);
                        t && (r.delete(e), n.splice(n.indexOf(t), 1), t.children.forEach(a), t.alias.forEach(a))
                    } else {
                        var t = n.indexOf(e); - 1 < t && (n.splice(t, 1), e.record.name && r.delete(e.record.name), e.children.forEach(a), e.alias.forEach(a))
                    }
                }
                return t = z({
                    strict: !1,
                    end: !0,
                    sensitive: !1
                }, t), e.forEach(e => o(e)), {
                    addRoute: o,
                    resolve: function(e, t) {
                        let o, a, c, s = {};
                        if ("name" in e && e.name) {
                            if (o = r.get(e.name), !o) throw B(1, {
                                location: e
                            });
                            c = o.record.name, s = h(function(e, t) {
                                const n = {};
                                for (const r of t) r in e && (n[r] = e[r]);
                                return n
                            }(t.params, o.keys.filter(e => !e.optional).map(e => e.name)), e.params), a = o.stringify(s)
                        } else if ("path" in e) a = e.path, o = n.find(e => e.re.test(a)), o && (s = o.parse(a), c = o.record.name);
                        else {
                            if (o = t.name ? r.get(t.name) : n.find(e => e.re.test(t.path)), !o) throw B(1, {
                                location: e,
                                currentLocation: t
                            });
                            c = o.record.name, s = h({}, t.params, e.params), a = o.stringify(s)
                        }
                        const i = [];
                        let l = o;
                        for (; l;) i.unshift(l.record), l = l.parent;
                        return {
                            name: c,
                            path: a,
                            params: s,
                            matched: i,
                            meta: i.reduce((e, t) => h(e, t.meta), {})
                        }
                    },
                    removeRoute: a,
                    getRoutes: function() {
                        return n
                    },
                    getRecordMatcher: function(e) {
                        return r.get(e)
                    }
                }
            }

            function V(e) {
                for (; e;) {
                    if (e.record.aliasOf) return 1;
                    e = e.parent
                }
            }

            function z(e, t) {
                const n = {};
                for (const r in e) n[r] = (r in t ? t : e)[r];
                return n
            }
            const K = /#/g,
                H = /&/g,
                J = /\//g,
                Q = /=/g,
                X = /\?/g,
                Y = /\+/g,
                N = /%5B/g,
                Z = /%5D/g,
                ee = /%5E/g,
                te = /%60/g,
                ne = /%7B/g,
                re = /%7C/g,
                oe = /%7D/g,
                ae = /%20/g;

            function ce(e) {
                return encodeURI("" + e).replace(re, "|").replace(N, "[").replace(Z, "]")
            }

            function se(e) {
                return ce(e).replace(Y, "%2B").replace(ae, "+").replace(K, "%23").replace(H, "%26").replace(te, "`").replace(ne, "{").replace(oe, "}").replace(ee, "^")
            }

            function ie(e) {
                return null == e ? "" : ce(e).replace(K, "%23").replace(X, "%3F").replace(J, "%2F")
            }

            function le(e) {
                try {
                    return decodeURIComponent("" + e)
                } catch (e) {}
                return "" + e
            }

            function ue(e) {
                const t = {};
                if ("" === e || "?" === e) return t;
                const n = ("?" === e[0] ? e.slice(1) : e).split("&");
                for (let e = 0; e < n.length; ++e) {
                    const a = n[e].replace(Y, " ");
                    var r = le((o = a.indexOf("=")) < 0 ? a : a.slice(0, o)),
                        o = o < 0 ? null : le(a.slice(o + 1));
                    if (r in t) {
                        let e = t[r];
                        Array.isArray(e) || (e = t[r] = [e]), e.push(o)
                    } else t[r] = o
                }
                return t
            }

            function fe(e) {
                let t = "";
                for (let n in e) {
                    const r = e[n];
                    if (n = se(n).replace(Q, "%3D"), null != r) {
                        (Array.isArray(r) ? r.map(e => e && se(e)) : [r && se(r)]).forEach(e => {
                            void 0 !== e && (t += (t.length ? "&" : "") + n, null != e && (t += "=" + e))
                        })
                    } else void 0 !== r && (t += (t.length ? "&" : "") + n)
                }
                return t
            }

            function pe() {
                let e = [];
                return {
                    add: function(t) {
                        return e.push(t), () => {
                            var n = e.indexOf(t); - 1 < n && e.splice(n, 1)
                        }
                    },
                    list: () => e,
                    reset: function() {
                        e = []
                    }
                }
            }

            function he(e, t, n, r, o) {
                const a = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
                return () => new Promise((c, s) => {
                    var i = e => {
                            var i;
                            !1 === e ? s(B(4, {
                                from: n,
                                to: t
                            })) : e instanceof Error ? s(e) : "string" == typeof(i = e) || i && "object" == typeof i ? s(B(2, {
                                from: t,
                                to: e
                            })) : (a && r.enterCallbacks[o] === a && "function" == typeof e && a.push(e), c())
                        },
                        l = e.call(r && r.instances[o], t, n, i);
                    let u = Promise.resolve(l);
                    e.length < 3 && (u = u.then(i)), u.catch(e => s(e))
                })
            }

            function de(e, t, n, r) {
                const a = [];
                for (const s of e)
                    for (const e in s.components) {
                        let i = s.components[e];
                        if ("beforeRouteEnter" === t || s.instances[e])
                            if ("object" == typeof(c = i) || "displayName" in c || "props" in c || "__vccOpts" in c)(c = (i.__vccOpts || i)[t]) && a.push(he(c, n, r, s, e));
                            else {
                                let c = i();
                                a.push(() => c.then(a => {
                                    if (!a) return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));
                                    var c;
                                    a = (c = a).__esModule || o && "Module" === c[Symbol.toStringTag] ? a.default : a;
                                    return (a = ((s.components[e] = a).__vccOpts || a)[t]) && he(a, n, r, s, e)()
                                }))
                            }
                    }
                var c;
                return a
            }

            function me(e) {
                const t = Object(r.inject)(l),
                    n = Object(r.inject)(u),
                    o = Object(r.computed)(() => t.resolve(Object(r.unref)(e.to))),
                    a = Object(r.computed)(() => {
                        var e = o.value.matched,
                            t = e.length,
                            r = e[t - 1];
                        const a = n.matched;
                        if (!r || !a.length) return -1;
                        var c = a.findIndex(y.bind(null, r));
                        if (-1 < c) return c;
                        var s = ge(e[t - 2]);
                        return 1 < t && ge(r) === s && a[a.length - 1].path !== s ? a.findIndex(y.bind(null, e[t - 2])) : c
                    });
                var c = Object(r.computed)(() => -1 < a.value && function(e, t) {
                        for (const n in t) {
                            const r = t[n],
                                o = e[n];
                            if ("string" == typeof r) {
                                if (r !== o) return !1
                            } else if (!Array.isArray(o) || o.length !== r.length || r.some((e, t) => e !== o[t])) return !1
                        }
                        return !0
                    }(n.params, o.value.params)),
                    s = Object(r.computed)(() => -1 < a.value && a.value === n.matched.length - 1 && w(n.params, o.value.params));
                return {
                    route: o,
                    href: Object(r.computed)(() => o.value.href),
                    isActive: c,
                    isExactActive: s,
                    navigate: function(n = {}) {
                        return function(e) {
                            if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey || e.defaultPrevented || void 0 !== e.button && 0 !== e.button)) {
                                if (e.currentTarget && e.currentTarget.getAttribute) {
                                    var t = e.currentTarget.getAttribute("target");
                                    if (/\b_blank\b/i.test(t)) return
                                }
                                return e.preventDefault && e.preventDefault(), !0
                            }
                        }(n) ? t[Object(r.unref)(e.replace) ? "replace" : "push"](Object(r.unref)(e.to)).catch(m) : Promise.resolve()
                    }
                }
            }
            const ve = Object(r.defineComponent)({
                name: "RouterLink",
                props: {
                    to: {
                        type: [String, Object],
                        required: !0
                    },
                    replace: Boolean,
                    activeClass: String,
                    exactActiveClass: String,
                    custom: Boolean,
                    ariaCurrentValue: {
                        type: String,
                        default: "page"
                    }
                },
                useLink: me,
                setup(e, {
                    slots: t
                }) {
                    const n = Object(r.reactive)(me(e)),
                        o = Object(r.inject)(l).options,
                        a = Object(r.computed)(() => ({
                            [be(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
                            [be(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
                        }));
                    return () => {
                        var o = t.default && t.default(n);
                        return e.custom ? o : Object(r.h)("a", {
                            "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                            href: n.href,
                            onClick: n.navigate,
                            class: a.value
                        }, o)
                    }
                }
            });

            function ge(e) {
                return e ? (e.aliasOf || e).path : ""
            }
            const be = (e, t, n) => null != e ? e : null != t ? t : n;

            function ye(e, t) {
                return e ? 1 === (t = e(t)).length ? t[0] : t : null
            }
            const we = Object(r.defineComponent)({
                name: "RouterView",
                inheritAttrs: !1,
                props: {
                    name: {
                        type: String,
                        default: "default"
                    },
                    route: Object
                },
                setup(e, {
                    attrs: t,
                    slots: n
                }) {
                    const o = Object(r.inject)(f),
                        a = Object(r.computed)(() => e.route || o.value),
                        c = Object(r.inject)(i, 0),
                        l = Object(r.computed)(() => a.value.matched[c]);
                    Object(r.provide)(i, c + 1), Object(r.provide)(s, l), Object(r.provide)(f, a);
                    const u = Object(r.ref)();
                    return Object(r.watch)(() => [u.value, l.value, e.name], ([e, t, n], [r, o]) => {
                        t && (t.instances[n] = e, o && o !== t && e && e === r && (t.leaveGuards.size || (t.leaveGuards = o.leaveGuards), t.updateGuards.size || (t.updateGuards = o.updateGuards))), !e || !t || o && y(t, o) && r || (t.enterCallbacks[n] || []).forEach(t => t(e))
                    }, {
                        flush: "post"
                    }), () => {
                        var o = a.value;
                        const c = l.value;
                        var s = c && c.components[e.name];
                        const i = e.name;
                        if (!s) return ye(n.default, {
                            Component: s,
                            route: o
                        });
                        const f = c.props[e.name];
                        var p = f ? !0 === f ? o.params : "function" == typeof f ? f(o) : f : null;
                        p = Object(r.h)(s, h({}, p, t, {
                            onVnodeUnmounted: e => {
                                e.component.isUnmounted && (c.instances[i] = null)
                            },
                            ref: u
                        }));
                        return ye(n.default, {
                            Component: p,
                            route: o
                        }) || p
                    }
                }
            });

            function Oe(e) {
                const t = D(e.routes, e),
                    n = e.parseQuery || ue,
                    o = e.stringifyQuery || fe,
                    c = e.history,
                    s = pe(),
                    i = pe(),
                    v = pe(),
                    b = Object(r.shallowRef)(L);
                let O = L;
                p && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
                const j = d.bind(null, e => "" + e),
                    E = d.bind(null, ie),
                    k = d.bind(null, le);

                function x(e, r) {
                    if (r = h({}, r || b.value), "string" == typeof e) {
                        var a = g(n, e, r.path);
                        const o = t.resolve({
                                path: a.path
                            }, r),
                            s = c.createHref(a.fullPath);
                        return h(a, o, {
                            params: k(o.params),
                            hash: le(a.hash),
                            redirectedFrom: void 0,
                            href: s
                        })
                    }
                    let s;
                    if ("path" in e) s = h({}, e, {
                        path: g(n, e.path, r.path).path
                    });
                    else {
                        const t = h({}, e.params);
                        for (const e in t) null == t[e] && delete t[e];
                        s = h({}, e, {
                            params: E(e.params)
                        }), r.params = E(r.params)
                    }
                    const i = t.resolve(s, r);
                    var l = e.hash || "";
                    i.params = j(k(i.params)), a = o, a = (r = h({}, e, {
                        hash: ce(l).replace(ne, "{").replace(oe, "}").replace(ee, "^"),
                        path: i.path
                    })).query ? a(r.query) : "", r = r.path + (a && "?") + a + (r.hash || "");
                    const u = c.createHref(r);
                    return h({
                        fullPath: r,
                        hash: l,
                        query: o === fe ? function(e) {
                            const t = {};
                            for (const n in e) {
                                const r = e[n];
                                void 0 !== r && (t[n] = Array.isArray(r) ? r.map(e => null == e ? null : "" + e) : null == r ? r : "" + r)
                            }
                            return t
                        }(e.query) : e.query || {}
                    }, i, {
                        redirectedFrom: void 0,
                        href: u
                    })
                }

                function C(e) {
                    return "string" == typeof e ? g(n, e, b.value.path) : h({}, e)
                }

                function $(e, t) {
                    if (O !== e) return B(8, {
                        from: t,
                        to: e
                    })
                }

                function S(e) {
                    return M(e)
                }

                function _(e) {
                    var t = e.matched[e.matched.length - 1];
                    if (t && t.redirect) {
                        const n = t.redirect;
                        let r = "function" == typeof n ? n(e) : n;
                        return "string" == typeof r && (r = r.includes("?") || r.includes("#") ? r = C(r) : {
                            path: r
                        }, r.params = {}), h({
                            query: e.query,
                            hash: e.hash,
                            params: e.params
                        }, r)
                    }
                }

                function M(e, t) {
                    var n = O = x(e);
                    const r = b.value,
                        a = e.state,
                        c = e.force,
                        s = !0 === e.replace;
                    var i, l, u = _(n);
                    if (u) return M(h(C(u), {
                        state: a,
                        force: c,
                        replace: s
                    }), t || n);
                    const f = n;
                    let p;
                    return f.redirectedFrom = t, !c && (i = o, e = n, u = (l = r).matched.length - 1, n = e.matched.length - 1, -1 < u && u == n && y(l.matched[u], e.matched[n]) && w(l.params, e.params) && i(l.query) === i(e.query) && l.hash === e.hash) && (p = B(16, {
                        to: f,
                        from: r
                    }), J(r, r, !0, !1)), (p ? Promise.resolve(p) : I(f, r)).catch(e => G(e) ? e : K(e, f, r)).then(e => {
                        if (e) {
                            if (G(e, 2)) return M(h(C(e.to), {
                                state: a,
                                force: c,
                                replace: s
                            }), t || f)
                        } else e = U(f, r, !0, s, a);
                        return T(f, r, e), e
                    })
                }

                function I(e, t) {
                    let n;
                    const [r, o, a] = function(e, t) {
                        const n = [],
                            r = [],
                            o = [],
                            a = Math.max(t.matched.length, e.matched.length);
                        for (let c = 0; c < a; c++) {
                            const a = t.matched[c];
                            a && (e.matched.find(e => y(e, a)) ? r : n).push(a);
                            const s = e.matched[c];
                            s && (t.matched.find(e => y(e, s)) || o.push(s))
                        }
                        return [n, r, o]
                    }(e, t);
                    n = de(r.reverse(), "beforeRouteLeave", e, t);
                    for (const o of r) o.leaveGuards.forEach(r => {
                        n.push(he(r, e, t))
                    });
                    const c = function(e, t) {
                        return (t = $(e, t)) ? Promise.reject(t) : Promise.resolve()
                    }.bind(null, e, t);
                    return n.push(c), je(n).then(() => {
                        n = [];
                        for (const r of s.list()) n.push(he(r, e, t));
                        return n.push(c), je(n)
                    }).then(() => {
                        n = de(o, "beforeRouteUpdate", e, t);
                        for (const r of o) r.updateGuards.forEach(r => {
                            n.push(he(r, e, t))
                        });
                        return n.push(c), je(n)
                    }).then(() => {
                        n = [];
                        for (const r of e.matched)
                            if (r.beforeEnter && !t.matched.includes(r))
                                if (Array.isArray(r.beforeEnter))
                                    for (const o of r.beforeEnter) n.push(he(o, e, t));
                                else n.push(he(r.beforeEnter, e, t));
                        return n.push(c), je(n)
                    }).then(() => (e.matched.forEach(e => e.enterCallbacks = {}), n = de(a, "beforeRouteEnter", e, t), n.push(c), je(n))).then(() => {
                        n = [];
                        for (const r of i.list()) n.push(he(r, e, t));
                        return n.push(c), je(n)
                    }).catch(e => G(e, 8) ? e : Promise.reject(e))
                }

                function T(e, t, n) {
                    for (const r of v.list()) r(e, t, n)
                }

                function U(e, t, n, r, o) {
                    if (s = $(e, t)) return s;
                    var a = t === L,
                        s = p ? history.state : {};
                    n && (r || a ? c.replace(e.fullPath, h({
                        scroll: a && s && s.scroll
                    }, o)) : c.push(e.fullPath, o)), J(b.value = e, t, n, a), H()
                }
                let F;
                let W, V = pe(),
                    z = pe();

                function K(e, t, n) {
                    H(e);
                    const r = z.list();
                    return r.length && r.forEach(r => r(e, t, n)), Promise.reject(e)
                }

                function H(e) {
                    W || (W = !0, F = c.listen((e, t, n) => {
                        const r = x(e);
                        var o = _(r);
                        if (o) M(h(o, {
                            replace: !0
                        }), r).catch(m);
                        else {
                            O = r;
                            const t = b.value;
                            p && (e = A(t.fullPath, n.delta), o = R(), P.set(e, o)), I(r, t).catch(e => G(e, 12) ? e : G(e, 2) ? (M(e.to, r).then(e => {
                                G(e, 20) && !n.delta && n.type === a.pop && c.go(-1, !1)
                            }).catch(m), Promise.reject()) : (n.delta && c.go(-n.delta, !1), K(e, r, t))).then(e => {
                                (e = e || U(r, t, !1)) && (n.delta ? c.go(-n.delta, !1) : n.type === a.pop && G(e, 20) && c.go(-1, !1)), T(r, t, e)
                            }).catch(m)
                        }
                    }), V.list().forEach(([t, n]) => e ? n(e) : t()), V.reset())
                }

                function J(t, n, o, a) {
                    const c = e.scrollBehavior;
                    if (!p || !c) return Promise.resolve();
                    const s = !o && (i = A(t.fullPath, 0), l = P.get(i), P.delete(i), l) || (a || !o) && history.state && history.state.scroll || null;
                    var i, l;
                    return Object(r.nextTick)().then(() => c(t, n, s)).then(e => e && function(e) {
                        let t;
                        if ("el" in e) {
                            const a = e.el;
                            var n = "string" == typeof a && a.startsWith("#"),
                                r = "string" == typeof a ? n ? document.getElementById(a.slice(1)) : document.querySelector(a) : a;
                            if (!r) return;
                            o = r, n = e, r = document.documentElement.getBoundingClientRect(), o = o.getBoundingClientRect(), t = {
                                behavior: n.behavior,
                                left: o.left - r.left - (n.left || 0),
                                top: o.top - r.top - (n.top || 0)
                            }
                        } else t = e;
                        var o;
                        "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(null != t.left ? t.left : window.pageXOffset, null != t.top ? t.top : window.pageYOffset)
                    }(e)).catch(e => K(e, t, n))
                }
                const Q = e => c.go(e);
                let X;
                const Y = new Set;
                return {
                    currentRoute: b,
                    addRoute: function(e, n) {
                        let r, o;
                        return o = q(e) ? (r = t.getRecordMatcher(e), n) : e, t.addRoute(o, r)
                    },
                    removeRoute: function(e) {
                        (e = t.getRecordMatcher(e)) && t.removeRoute(e)
                    },
                    hasRoute: function(e) {
                        return !!t.getRecordMatcher(e)
                    },
                    getRoutes: function() {
                        return t.getRoutes().map(e => e.record)
                    },
                    resolve: x,
                    options: e,
                    push: S,
                    replace: function(e) {
                        return S(h(C(e), {
                            replace: !0
                        }))
                    },
                    go: Q,
                    back: () => Q(-1),
                    forward: () => Q(1),
                    beforeEach: s.add,
                    beforeResolve: i.add,
                    afterEach: v.add,
                    onError: z.add,
                    isReady: function() {
                        return W && b.value !== L ? Promise.resolve() : new Promise((e, t) => {
                            V.add([e, t])
                        })
                    },
                    install(e) {
                        e.component("RouterLink", ve), e.component("RouterView", we), e.config.globalProperties.$router = this, Object.defineProperty(e.config.globalProperties, "$route", {
                            enumerable: !0,
                            get: () => Object(r.unref)(b)
                        }), p && !X && b.value === L && (X = !0, S(c.location).catch(e => {}));
                        const t = {};
                        for (const e in L) t[e] = Object(r.computed)(() => b.value[e]);
                        e.provide(l, this), e.provide(u, Object(r.reactive)(t)), e.provide(f, b);
                        const n = e.unmount;
                        Y.add(e), e.unmount = function() {
                            Y.delete(e), Y.size < 1 && (O = L, F && F(), b.value = L, X = !1, W = !1), n()
                        }
                    }
                }
            }

            function je(e) {
                return e.reduce((e, t) => e.then(() => t()), Promise.resolve())
            }

            function Ee() {
                return Object(r.inject)(l)
            }

            function ke() {
                return Object(r.inject)(u)
            }
        }
    }
]);