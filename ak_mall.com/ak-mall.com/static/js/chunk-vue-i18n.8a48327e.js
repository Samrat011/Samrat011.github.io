(window.webpackJsonp = window.webpackJsonp || []).push([
    ["chunk-vue-i18n"], {
        "47e2": function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return H
            })), a.d(t, "b", (function() {
                return A
            }));
            var n = a("f83d"),
                l = a("f92f"),
                r = a("402e"),
                o = a("625a"),
                c = a("7a23"),
                s = a("3f4e"),
                i = a("85a3");
            /*!
             * vue-i18n v9.1.9
             * (c) 2021 kazuya kawaguchi
             * Released under the MIT License.
             */
            function u(e) {
                return Object(l.b)(e, null, void 0)
            }
            const _ = "__INTLIFY_META__",
                m = Object(n.r)("__transrateVNode"),
                b = Object(n.r)("__datetimeParts"),
                f = Object(n.r)("__numberParts"),
                p = Object(n.r)("__enableEmitter"),
                O = Object(n.r)("__disableEmitter"),
                g = Object(n.r)("__setPluralRules");
            Object(n.r)("__intlifyMeta");
            const v = Object(n.r)("__injectWithOption");
            let j = 0;

            function d(e) {
                return (t, a, n, l) => e(a, n, Object(c.getCurrentInstance)() || void 0, l)
            }

            function h(e, t) {
                const {
                    messages: a,
                    __i18n: l
                } = t, o = Object(n.o)(a) ? a : Object(n.h)(l) ? {} : {
                    [e]: {}
                };
                if (Object(n.h)(l) && l.forEach(({
                        locale: e,
                        resource: t
                    }) => {
                        e ? (o[e] = o[e] || {}, k(t, o[e])) : k(t, o)
                    }), t.flatJson)
                    for (const e in o) Object(n.g)(o, e) && Object(r.a)(o[e]);
                return o
            }
            const y = e => !Object(n.n)(e) || Object(n.h)(e);

            function k(e, t) {
                if (y(e) || y(t)) throw u(20);
                for (const a in e) Object(n.g)(e, a) && (y(e[a]) || y(t[a]) ? t[a] = e[a] : k(e[a], t[a]))
            }
            const L = () => {
                var e = Object(c.getCurrentInstance)();
                return e && e.type[_] ? {
                    __INTLIFY_META__: e.type[_]
                } : null
            };

            function I(e = {}) {
                const t = e.__root,
                    a = void 0 === t;
                let l = !Object(n.i)(e.inheritLocale) || e.inheritLocale;
                const s = Object(c.ref)(t && l ? t.locale.value : Object(n.q)(e.locale) ? e.locale : "en-US"),
                    i = Object(c.ref)(t && l ? t.fallbackLocale.value : Object(n.q)(e.fallbackLocale) || Object(n.h)(e.fallbackLocale) || Object(n.o)(e.fallbackLocale) || !1 === e.fallbackLocale ? e.fallbackLocale : s.value),
                    _ = Object(c.ref)(h(s.value, e)),
                    p = Object(c.ref)(Object(n.o)(e.datetimeFormats) ? e.datetimeFormats : {
                        [s.value]: {}
                    }),
                    O = Object(c.ref)(Object(n.o)(e.numberFormats) ? e.numberFormats : {
                        [s.value]: {}
                    });
                let y = t ? t.missingWarn : !Object(n.i)(e.missingWarn) && !Object(n.p)(e.missingWarn) || e.missingWarn,
                    I = t ? t.fallbackWarn : !Object(n.i)(e.fallbackWarn) && !Object(n.p)(e.fallbackWarn) || e.fallbackWarn,
                    F = t ? t.fallbackRoot : !Object(n.i)(e.fallbackRoot) || e.fallbackRoot,
                    E = !!e.fallbackFormat,
                    N = Object(n.l)(e.missing) ? e.missing : null,
                    T = Object(n.l)(e.missing) ? d(e.missing) : null,
                    M = Object(n.l)(e.postTranslation) ? e.postTranslation : null,
                    D = !Object(n.i)(e.warnHtmlMessage) || e.warnHtmlMessage,
                    w = !!e.escapeParameter;
                const P = t ? t.modifiers : Object(n.o)(e.modifiers) ? e.modifiers : {};
                let V, S = e.pluralRules || t && t.pluralRules;
                V = Object(o.f)({
                    version: "9.1.9",
                    locale: s.value,
                    fallbackLocale: i.value,
                    messages: _.value,
                    datetimeFormats: p.value,
                    numberFormats: O.value,
                    modifiers: P,
                    pluralRules: S,
                    missing: null === T ? void 0 : T,
                    missingWarn: y,
                    fallbackWarn: I,
                    fallbackFormat: E,
                    unresolving: !0,
                    postTranslation: null === M ? void 0 : M,
                    warnHtmlMessage: D,
                    escapeParameter: w,
                    __datetimeFormatters: Object(n.o)(V) ? V.__datetimeFormatters : void 0,
                    __numberFormatters: Object(n.o)(V) ? V.__numberFormatters : void 0,
                    __v_emitter: Object(n.o)(V) ? V.__v_emitter : void 0,
                    __meta: {
                        framework: "vue"
                    }
                }), Object(o.q)(V, s.value, i.value);
                var W = Object(c.computed)({
                        get: () => s.value,
                        set: e => {
                            s.value = e, V.locale = s.value
                        }
                    }),
                    $ = Object(c.computed)({
                        get: () => i.value,
                        set: e => {
                            i.value = e, V.fallbackLocale = i.value, Object(o.q)(V, s.value, e)
                        }
                    }),
                    U = Object(c.computed)(() => _.value),
                    q = Object(c.computed)(() => p.value),
                    C = Object(c.computed)(() => O.value);

                function R(e, a, l, r, c, m) {
                    let b;
                    if (s.value, i.value, _.value, p.value, O.value, __INTLIFY_PROD_DEVTOOLS__) try {
                        Object(o.n)(L()), b = e(V)
                    } finally {
                        Object(o.n)(null)
                    } else b = e(V);
                    if (Object(n.m)(b) && b === o.b) {
                        var [a] = a();
                        return t && F ? r(t) : c(a)
                    }
                    if (m(b)) return b;
                    throw u(14)
                }

                function H(...e) {
                    return R(t => Object(o.p)(t, ...e), () => Object(o.l)(...e), 0, t => t.t(...e), e => e, e => Object(n.q)(e))
                }
                const A = {
                    normalize: function(e) {
                        return e.map(e => Object(n.q)(e) ? Object(c.createVNode)(c.Text, null, e, 0) : e)
                    },
                    interpolate: e => e,
                    type: "vnode"
                };

                function Y(e) {
                    return _.value[e] || {}
                }
                return j++, t && (Object(c.watch)(t.locale, e => {
                    l && (s.value = e, V.locale = e, Object(o.q)(V, s.value, i.value))
                }), Object(c.watch)(t.fallbackLocale, e => {
                    l && (i.value = e, V.fallbackLocale = e, Object(o.q)(V, s.value, i.value))
                })), {
                    id: j,
                    locale: W,
                    fallbackLocale: $,
                    get inheritLocale() {
                        return l
                    },
                    set inheritLocale(e) {
                        (l = e) && t && (s.value = t.locale.value, i.value = t.fallbackLocale.value, Object(o.q)(V, s.value, i.value))
                    },
                    get availableLocales() {
                        return Object.keys(_.value).sort()
                    },
                    messages: U,
                    datetimeFormats: q,
                    numberFormats: C,
                    get modifiers() {
                        return P
                    },
                    get pluralRules() {
                        return S || {}
                    },
                    get isGlobal() {
                        return a
                    },
                    get missingWarn() {
                        return y
                    },
                    set missingWarn(e) {
                        y = e, V.missingWarn = y
                    },
                    get fallbackWarn() {
                        return I
                    },
                    set fallbackWarn(e) {
                        I = e, V.fallbackWarn = I
                    },
                    get fallbackRoot() {
                        return F
                    },
                    set fallbackRoot(e) {
                        F = e
                    },
                    get fallbackFormat() {
                        return E
                    },
                    set fallbackFormat(e) {
                        E = e, V.fallbackFormat = E
                    },
                    get warnHtmlMessage() {
                        return D
                    },
                    set warnHtmlMessage(e) {
                        D = e, V.warnHtmlMessage = e
                    },
                    get escapeParameter() {
                        return w
                    },
                    set escapeParameter(e) {
                        w = e, V.escapeParameter = e
                    },
                    t: H,
                    rt: function(...e) {
                        var [t, a, e] = e;
                        if (e && !Object(n.n)(e)) throw u(15);
                        return H(t, a, Object(n.a)({
                            resolvedMessage: !0
                        }, e || {}))
                    },
                    d: function(...e) {
                        return R(t => Object(o.g)(t, ...e), () => Object(o.j)(...e), 0, t => t.d(...e), () => o.a, e => Object(n.q)(e))
                    },
                    n: function(...e) {
                        return R(t => Object(o.i)(t, ...e), () => Object(o.k)(...e), 0, t => t.n(...e), () => o.a, e => Object(n.q)(e))
                    },
                    te: function(e, t) {
                        return t = Y(Object(n.q)(t) ? t : s.value), null !== Object(r.b)(t, e)
                    },
                    tm: function(e) {
                        var a = function(e) {
                            let t = null;
                            var a = Object(o.h)(V, i.value, s.value);
                            for (let l = 0; l < a.length; l++) {
                                var n = _.value[a[l]] || {};
                                if (null != (n = Object(r.b)(n, e))) {
                                    t = n;
                                    break
                                }
                            }
                            return t
                        }(e);
                        return null != a ? a : t && t.tm(e) || {}
                    },
                    getLocaleMessage: Y,
                    setLocaleMessage: function(e, t) {
                        _.value[e] = t, V.messages = _.value
                    },
                    mergeLocaleMessage: function(e, t) {
                        _.value[e] = _.value[e] || {}, k(t, _.value[e]), V.messages = _.value
                    },
                    getDateTimeFormat: function(e) {
                        return p.value[e] || {}
                    },
                    setDateTimeFormat: function(e, t) {
                        p.value[e] = t, V.datetimeFormats = p.value, Object(o.c)(V, e, t)
                    },
                    mergeDateTimeFormat: function(e, t) {
                        p.value[e] = Object(n.a)(p.value[e] || {}, t), V.datetimeFormats = p.value, Object(o.c)(V, e, t)
                    },
                    getNumberFormat: function(e) {
                        return O.value[e] || {}
                    },
                    setNumberFormat: function(e, t) {
                        O.value[e] = t, V.numberFormats = O.value, Object(o.d)(V, e, t)
                    },
                    mergeNumberFormat: function(e, t) {
                        O.value[e] = Object(n.a)(O.value[e] || {}, t), V.numberFormats = O.value, Object(o.d)(V, e, t)
                    },
                    getPostTranslationHandler: function() {
                        return Object(n.l)(M) ? M : null
                    },
                    setPostTranslationHandler: function(e) {
                        M = e, V.postTranslation = e
                    },
                    getMissingHandler: function() {
                        return N
                    },
                    setMissingHandler: function(e) {
                        null !== e && (T = d(e)), N = e, V.missing = T
                    },
                    [m]: function(...e) {
                        return R(t => {
                            let a;
                            const n = t;
                            try {
                                n.processor = A, a = Object(o.p)(n, ...e)
                            } finally {
                                n.processor = null
                            }
                            return a
                        }, () => Object(o.l)(...e), 0, t => t[m](...e), e => [Object(c.createVNode)(c.Text, null, e, 0)], e => Object(n.h)(e))
                    },
                    [f]: function(...e) {
                        return R(t => Object(o.i)(t, ...e), () => Object(o.k)(...e), 0, t => t[f](...e), () => [], e => Object(n.q)(e) || Object(n.h)(e))
                    },
                    [b]: function(...e) {
                        return R(t => Object(o.g)(t, ...e), () => Object(o.j)(...e), 0, t => t[b](...e), () => [], e => Object(n.q)(e) || Object(n.h)(e))
                    },
                    [g]: function(e) {
                        S = e, V.pluralRules = S
                    },
                    [v]: e.__injectWithOption
                }
            }

            function F(e = {}) {
                const t = I(function(e) {
                        var t = Object(n.q)(e.locale) ? e.locale : "en-US",
                            a = Object(n.q)(e.fallbackLocale) || Object(n.h)(e.fallbackLocale) || Object(n.o)(e.fallbackLocale) || !1 === e.fallbackLocale ? e.fallbackLocale : t,
                            l = Object(n.l)(e.missing) ? e.missing : void 0,
                            r = !Object(n.i)(e.silentTranslationWarn) && !Object(n.p)(e.silentTranslationWarn) || !e.silentTranslationWarn,
                            o = !Object(n.i)(e.silentFallbackWarn) && !Object(n.p)(e.silentFallbackWarn) || !e.silentFallbackWarn,
                            c = !Object(n.i)(e.fallbackRoot) || e.fallbackRoot,
                            s = !!e.formatFallbackMessages,
                            i = Object(n.o)(e.modifiers) ? e.modifiers : {},
                            u = e.pluralizationRules,
                            _ = Object(n.l)(e.postTranslation) ? e.postTranslation : void 0,
                            m = !Object(n.q)(e.warnHtmlInMessage) || "off" !== e.warnHtmlInMessage,
                            b = !!e.escapeParameterHtml,
                            f = !Object(n.i)(e.sync) || e.sync;
                        let p = e.messages;
                        if (Object(n.o)(e.sharedMessages)) {
                            const t = e.sharedMessages;
                            p = Object.keys(t).reduce((e, a) => {
                                var l = e[a] || (e[a] = {});
                                return Object(n.a)(l, t[a]), e
                            }, p || {})
                        }
                        var {
                            __i18n: O,
                            __root: g,
                            __injectWithOption: v
                        } = e, j = e.datetimeFormats, d = e.numberFormats;
                        return {
                            locale: t,
                            fallbackLocale: a,
                            messages: p,
                            flatJson: e = e.flatJson,
                            datetimeFormats: j,
                            numberFormats: d,
                            missing: l,
                            missingWarn: r,
                            fallbackWarn: o,
                            fallbackRoot: c,
                            fallbackFormat: s,
                            modifiers: i,
                            pluralRules: u,
                            postTranslation: _,
                            warnHtmlMessage: m,
                            escapeParameter: b,
                            inheritLocale: f,
                            __i18n: O,
                            __root: g,
                            __injectWithOption: v
                        }
                    }(e)),
                    a = {
                        id: t.id,
                        get locale() {
                            return t.locale.value
                        },
                        set locale(e) {
                            t.locale.value = e
                        },
                        get fallbackLocale() {
                            return t.fallbackLocale.value
                        },
                        set fallbackLocale(e) {
                            t.fallbackLocale.value = e
                        },
                        get messages() {
                            return t.messages.value
                        },
                        get datetimeFormats() {
                            return t.datetimeFormats.value
                        },
                        get numberFormats() {
                            return t.numberFormats.value
                        },
                        get availableLocales() {
                            return t.availableLocales
                        },
                        get formatter() {
                            return {
                                interpolate: () => []
                            }
                        },
                        set formatter(e) {},
                        get missing() {
                            return t.getMissingHandler()
                        },
                        set missing(e) {
                            t.setMissingHandler(e)
                        },
                        get silentTranslationWarn() {
                            return Object(n.i)(t.missingWarn) ? !t.missingWarn : t.missingWarn
                        },
                        set silentTranslationWarn(e) {
                            t.missingWarn = Object(n.i)(e) ? !e : e
                        },
                        get silentFallbackWarn() {
                            return Object(n.i)(t.fallbackWarn) ? !t.fallbackWarn : t.fallbackWarn
                        },
                        set silentFallbackWarn(e) {
                            t.fallbackWarn = Object(n.i)(e) ? !e : e
                        },
                        get modifiers() {
                            return t.modifiers
                        },
                        get formatFallbackMessages() {
                            return t.fallbackFormat
                        },
                        set formatFallbackMessages(e) {
                            t.fallbackFormat = e
                        },
                        get postTranslation() {
                            return t.getPostTranslationHandler()
                        },
                        set postTranslation(e) {
                            t.setPostTranslationHandler(e)
                        },
                        get sync() {
                            return t.inheritLocale
                        },
                        set sync(e) {
                            t.inheritLocale = e
                        },
                        get warnHtmlInMessage() {
                            return t.warnHtmlMessage ? "warn" : "off"
                        },
                        set warnHtmlInMessage(e) {
                            t.warnHtmlMessage = "off" !== e
                        },
                        get escapeParameterHtml() {
                            return t.escapeParameter
                        },
                        set escapeParameterHtml(e) {
                            t.escapeParameter = e
                        },
                        get preserveDirectiveContent() {
                            return !0
                        },
                        set preserveDirectiveContent(e) {},
                        get pluralizationRules() {
                            return t.pluralRules || {}
                        },
                        __composer: t,
                        t(...e) {
                            var [a, l, e] = e;
                            const r = {};
                            let o = null,
                                c = null;
                            if (!Object(n.q)(a)) throw u(15);
                            return Object(n.q)(l) ? r.locale = l : Object(n.h)(l) ? o = l : Object(n.o)(l) && (c = l), Object(n.h)(e) ? o = e : Object(n.o)(e) && (c = e), t.t(a, o || c || {}, r)
                        },
                        rt: (...e) => t.rt(...e),
                        tc(...e) {
                            var [a, l, e] = e;
                            const r = {
                                plural: 1
                            };
                            let o = null,
                                c = null;
                            if (!Object(n.q)(a)) throw u(15);
                            return Object(n.q)(l) ? r.locale = l : Object(n.m)(l) ? r.plural = l : Object(n.h)(l) ? o = l : Object(n.o)(l) && (c = l), Object(n.q)(e) ? r.locale = e : Object(n.h)(e) ? o = e : Object(n.o)(e) && (c = e), t.t(a, o || c || {}, r)
                        },
                        te: (e, a) => t.te(e, a),
                        tm: e => t.tm(e),
                        getLocaleMessage: e => t.getLocaleMessage(e),
                        setLocaleMessage(e, a) {
                            t.setLocaleMessage(e, a)
                        },
                        mergeLocaleMessage(e, a) {
                            t.mergeLocaleMessage(e, a)
                        },
                        d: (...e) => t.d(...e),
                        getDateTimeFormat: e => t.getDateTimeFormat(e),
                        setDateTimeFormat(e, a) {
                            t.setDateTimeFormat(e, a)
                        },
                        mergeDateTimeFormat(e, a) {
                            t.mergeDateTimeFormat(e, a)
                        },
                        n: (...e) => t.n(...e),
                        getNumberFormat: e => t.getNumberFormat(e),
                        setNumberFormat(e, a) {
                            t.setNumberFormat(e, a)
                        },
                        mergeNumberFormat(e, a) {
                            t.mergeNumberFormat(e, a)
                        },
                        getChoiceIndex: (e, t) => -1,
                        __onComponentInstanceCreated(t) {
                            const n = e.componentInstanceCreatedListener;
                            n && n(t, a)
                        }
                    };
                return a
            }
            a = {
                tag: {
                    type: [String, Object]
                },
                locale: {
                    type: String
                },
                scope: {
                    type: String,
                    validator: e => "parent" === e || "global" === e,
                    default: "parent"
                },
                i18n: {
                    type: Object
                }
            };
            const E = {
                name: "i18n-t",
                props: Object(n.a)({
                    keypath: {
                        type: String,
                        required: !0
                    },
                    plural: {
                        type: [Number, String],
                        validator: e => Object(n.m)(e) || !isNaN(e)
                    }
                }, a),
                setup(e, t) {
                    const {
                        slots: a,
                        attrs: l
                    } = t, r = e.i18n || A({
                        useScope: e.scope,
                        __useComponent: !0
                    }), o = Object.keys(a).filter(e => "_" !== e);
                    return () => {
                        const a = {};
                        e.locale && (a.locale = e.locale), void 0 !== e.plural && (a.plural = Object(n.q)(e.plural) ? +e.plural : e.plural);
                        var s, i = ([s, u] = [t.slots, o], 1 === u.length && "default" === u[0] ? s.default ? s.default() : [] : u.reduce((e, t) => {
                                const a = s[t];
                                return a && (e[t] = a()), e
                            }, {})),
                            u = r[m](e.keypath, i, a);
                        i = Object(n.a)({}, l);
                        return Object(n.q)(e.tag) || Object(n.n)(e.tag) ? Object(c.h)(e.tag, i, u) : Object(c.h)(c.Fragment, i, u)
                    }
                }
            };

            function N(e, t, a, l) {
                const {
                    slots: r,
                    attrs: o
                } = t;
                return () => {
                    const t = {
                        part: !0
                    };
                    let s = {};
                    e.locale && (t.locale = e.locale), Object(n.q)(e.format) ? t.key = e.format : Object(n.n)(e.format) && (Object(n.q)(e.format.key) && (t.key = e.format.key), s = Object.keys(e.format).reduce((t, l) => a.includes(l) ? Object(n.a)({}, t, {
                        [l]: e.format[l]
                    }) : t, {}));
                    const i = l(e.value, t, s);
                    let u = [t.key];
                    Object(n.h)(i) ? u = i.map((e, t) => {
                        const a = r[e.type];
                        return a ? a({
                            [e.type]: e.value,
                            index: t,
                            parts: i
                        }) : [e.value]
                    }) : Object(n.q)(i) && (u = [i]);
                    var _ = Object(n.a)({}, o);
                    return Object(n.q)(e.tag) || Object(n.n)(e.tag) ? Object(c.h)(e.tag, _, u) : Object(c.h)(c.Fragment, _, u)
                }
            }
            const T = ["localeMatcher", "style", "unit", "unitDisplay", "currency", "currencyDisplay", "useGrouping", "numberingSystem", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "notation", "formatMatcher"],
                M = {
                    name: "i18n-n",
                    props: Object(n.a)({
                        value: {
                            type: Number,
                            required: !0
                        },
                        format: {
                            type: [String, Object]
                        }
                    }, a),
                    setup(e, t) {
                        const a = e.i18n || A({
                            useScope: "parent",
                            __useComponent: !0
                        });
                        return N(e, t, T, (...e) => a[f](...e))
                    }
                },
                D = ["dateStyle", "timeStyle", "fractionalSecondDigits", "calendar", "dayPeriod", "numberingSystem", "localeMatcher", "timeZone", "hour12", "hourCycle", "formatMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName"],
                w = {
                    name: "i18n-d",
                    props: Object(n.a)({
                        value: {
                            type: [Number, Date],
                            required: !0
                        },
                        format: {
                            type: [String, Object]
                        }
                    }, a),
                    setup(e, t) {
                        const a = e.i18n || A({
                            useScope: "parent",
                            __useComponent: !0
                        });
                        return N(e, t, D, (...e) => a[b](...e))
                    }
                };
            const P = "vue-i18n: composer properties";
            let V;
            async function S(e, t) {
                return new Promise((a, l) => {
                    try {
                        Object(s.a)({
                            id: "vue-devtools-plugin-vue-i18n",
                            label: i.a["vue-devtools-plugin-vue-i18n"],
                            packageName: "vue-i18n",
                            homepage: "https://vue-i18n.intlify.dev",
                            logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
                            componentStateTypes: [P],
                            app: e
                        }, l => {
                            (V = l).on.visitComponentTree(({
                                componentInstance: e,
                                treeNode: a
                            }) => {
                                ! function(e, t, a) {
                                    a = "composition" === a.mode ? a.global : a.global.__composer, e && e.vnode.el.__VUE_I18N__ && e.vnode.el.__VUE_I18N__ !== a && (e = {
                                        label: `i18n (${e.type.name||e.type.displayName||e.type.__file} Scope)`,
                                        textColor: 0,
                                        backgroundColor: 16764185
                                    }, t.tags.push(e))
                                }(e, a, t)
                            }), l.on.inspectComponent(({
                                componentInstance: e,
                                instanceData: a
                            }) => {
                                e.vnode.el.__VUE_I18N__ && a && ("legacy" !== t.mode || e.vnode.el.__VUE_I18N__ !== t.global.__composer) && function(e, t) {
                                    var a = P;
                                    e.state.push({
                                        type: a,
                                        key: "locale",
                                        editable: !0,
                                        value: t.locale.value
                                    }), e.state.push({
                                        type: a,
                                        key: "availableLocales",
                                        editable: !1,
                                        value: t.availableLocales
                                    }), e.state.push({
                                        type: a,
                                        key: "fallbackLocale",
                                        editable: !0,
                                        value: t.fallbackLocale.value
                                    }), e.state.push({
                                        type: a,
                                        key: "inheritLocale",
                                        editable: !0,
                                        value: t.inheritLocale
                                    }), e.state.push({
                                        type: a,
                                        key: "messages",
                                        editable: !1,
                                        value: W(t.messages.value)
                                    }), e.state.push({
                                        type: a,
                                        key: "datetimeFormats",
                                        editable: !1,
                                        value: t.datetimeFormats.value
                                    }), e.state.push({
                                        type: a,
                                        key: "numberFormats",
                                        editable: !1,
                                        value: t.numberFormats.value
                                    })
                                }(a, e.vnode.el.__VUE_I18N__)
                            }), l.addInspector({
                                id: "vue-i18n-resource-inspector",
                                label: i.a["vue-i18n-resource-inspector"],
                                icon: "language",
                                treeFilterPlaceholder: i.b["vue-i18n-resource-inspector"]
                            }), l.on.getInspectorTree(a => {
                                a.app === e && "vue-i18n-resource-inspector" === a.inspectorId && function(e, t) {
                                    e.rootNodes.push({
                                        id: "global",
                                        label: "Global Scope"
                                    });
                                    var a = "composition" === t.mode ? t.global : t.global.__composer;
                                    for (var [n, l] of t.__instances) {
                                        const r = "composition" === t.mode ? l : l.__composer;
                                        a !== r && (n = n.type.name || n.type.displayName || n.type.__file, e.rootNodes.push({
                                            id: r.id.toString(),
                                            label: n + " Scope"
                                        }))
                                    }
                                }(a, t)
                            }), l.on.getInspectorState(a => {
                                a.app === e && "vue-i18n-resource-inspector" === a.inspectorId && function(e, t) {
                                    (t = q(e.nodeId, t)) && (e.state = function(e) {
                                        const t = {},
                                            a = "Locale related info",
                                            n = [{
                                                type: a,
                                                key: "locale",
                                                editable: !0,
                                                value: e.locale.value
                                            }, {
                                                type: a,
                                                key: "fallbackLocale",
                                                editable: !0,
                                                value: e.fallbackLocale.value
                                            }, {
                                                type: a,
                                                key: "availableLocales",
                                                editable: !1,
                                                value: e.availableLocales
                                            }, {
                                                type: a,
                                                key: "inheritLocale",
                                                editable: !0,
                                                value: e.inheritLocale
                                            }];
                                        t[a] = n;
                                        var l = "Locale messages info",
                                            r = [{
                                                type: l,
                                                key: "messages",
                                                editable: !1,
                                                value: W(e.messages.value)
                                            }];
                                        return t[l] = r, r = [{
                                            type: l = "Datetime formats info",
                                            key: "datetimeFormats",
                                            editable: !1,
                                            value: e.datetimeFormats.value
                                        }], t[l] = r, e = [{
                                            type: r = "Datetime formats info",
                                            key: "numberFormats",
                                            editable: !1,
                                            value: e.numberFormats.value
                                        }], t[r] = e, t
                                    }(t))
                                }(a, t)
                            }), l.on.editInspectorState(a => {
                                a.app === e && "vue-i18n-resource-inspector" === a.inspectorId && function(e, t) {
                                    const a = q(e.nodeId, t);
                                    a && ([t] = e.path, "locale" === t && Object(n.q)(e.state.value) ? a.locale.value = e.state.value : "fallbackLocale" === t && (Object(n.q)(e.state.value) || Object(n.h)(e.state.value) || Object(n.n)(e.state.value)) ? a.fallbackLocale.value = e.state.value : "inheritLocale" === t && Object(n.i)(e.state.value) && (a.inheritLocale = e.state.value))
                                }(a, t)
                            }), l.addTimelineLayer({
                                id: "vue-i18n-timeline",
                                label: i.a["vue-i18n-timeline"],
                                color: i.c["vue-i18n-timeline"]
                            }), a(!0)
                        })
                    } catch (e) {
                        l(!1)
                    }
                })
            }

            function W(e) {
                const t = {};
                return Object.keys(e).forEach(a => {
                    var l = e[a];
                    Object(n.l)(l) && "source" in l ? t[a] = function(e) {
                        return {
                            _custom: {
                                type: "function",
                                display: "<span>ƒ</span> " + (e = e.source ? `("${function(e){return e.replace(/[<>"&]/g,U)}(e.source)}")` : "(?)")
                            }
                        }
                    }(l) : Object(n.n)(l) ? t[a] = W(l) : t[a] = l
                }), t
            }
            const $ = {
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "&": "&amp;"
            };

            function U(e) {
                return $[e] || e
            }

            function q(e, t) {
                if ("global" === e) return "composition" === t.mode ? t.global : t.global.__composer;
                var a = Array.from(t.__instances.values()).find(t => t.id.toString() === e);
                return a ? "composition" === t.mode ? a : a.__composer : null
            }

            function C(e, t) {
                if (V) {
                    let a;
                    t && "groupId" in t && (a = t.groupId, delete t.groupId), V.addTimelineEvent({
                        layerId: "vue-i18n-timeline",
                        event: {
                            title: e,
                            groupId: a,
                            time: Date.now(),
                            meta: {},
                            data: t || {},
                            logType: "compile-error" === e ? "error" : "fallback" === e || "missing" === e ? "warning" : "default"
                        }
                    })
                }
            }

            function R(e, t) {
                e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[g](t.pluralizationRules || e.pluralizationRules);
                const a = h(e.locale, {
                    messages: t.messages,
                    __i18n: t.__i18n
                });
                return Object.keys(a).forEach(t => e.mergeLocaleMessage(t, a[t])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach(a => e.mergeDateTimeFormat(a, t.datetimeFormats[a])), t.numberFormats && Object.keys(t.numberFormats).forEach(a => e.mergeNumberFormat(a, t.numberFormats[a])), e
            }

            function H(e = {}) {
                const t = __VUE_I18N_LEGACY_API__ && Object(n.i)(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__,
                    a = !!e.globalInjection,
                    l = new Map,
                    r = (__VUE_I18N_LEGACY_API__ && t ? F : I)(e),
                    o = Object(n.r)(""),
                    s = {
                        get mode() {
                            return __VUE_I18N_LEGACY_API__ && t ? "legacy" : "composition"
                        },
                        async install(e, ...l) {
                            var i, _, m;
                            if (__VUE_I18N_PROD_DEVTOOLS__ && (e.__VUE_I18N__ = s), e.__VUE_I18N_SYMBOL__ = o, e.provide(e.__VUE_I18N_SYMBOL__, s), !t && a && function(e, t) {
                                    const a = Object.create(null);
                                    Y.forEach(e => {
                                        const n = Object.getOwnPropertyDescriptor(t, e);
                                        if (!n) throw u(22);
                                        var l = Object(c.isRef)(n.value) ? {
                                            get: () => n.value.value,
                                            set(e) {
                                                n.value.value = e
                                            }
                                        } : {
                                            get: () => n.get && n.get()
                                        };
                                        Object.defineProperty(a, e, l)
                                    }), e.config.globalProperties.$i18n = a, G.forEach(a => {
                                        var n = Object.getOwnPropertyDescriptor(t, a);
                                        if (!n || !n.value) throw u(22);
                                        Object.defineProperty(e.config.globalProperties, "$" + a, n)
                                    })
                                }(e, s.global), __VUE_I18N_FULL_INSTALL__ && function(e, t, ...a) {
                                    var l = Object(n.o)(a[0]) ? a[0] : {};
                                    a = !!l.useI18nComponentName;
                                    Object(n.i)(l.globalInstall) && !l.globalInstall || (e.component(a ? "i18n" : E.name, E), e.component(M.name, M), e.component(w.name, w)), e.directive("t", function(e) {
                                        var t = (t, {
                                            instance: a,
                                            value: l
                                        }) => {
                                            if (!a || !a.$) throw u(22);
                                            const r = function(e, t) {
                                                const a = e;
                                                return "composition" === e.mode ? a.__getInstance(t) || e.global : (null != (t = a.__getInstance(t)) ? t : e.global).__composer
                                            }(e, a.$);
                                            l = function(e) {
                                                if (Object(n.q)(e)) return {
                                                    path: e
                                                };
                                                if (Object(n.o)(e)) {
                                                    if (!("path" in e)) throw u(19);
                                                    return e
                                                }
                                                throw u(20)
                                            }(l), t.textContent = r.t(... function(e) {
                                                const {
                                                    path: t,
                                                    locale: a,
                                                    args: l,
                                                    choice: r,
                                                    plural: o
                                                } = e, c = {}, s = l || {};
                                                return Object(n.q)(a) && (c.locale = a), Object(n.m)(r) && (c.plural = r), Object(n.m)(o) && (c.plural = o), [t, s, c]
                                            }(l))
                                        };
                                        return {
                                            beforeMount: t,
                                            beforeUpdate: t
                                        }
                                    }(t))
                                }(e, s, ...l), __VUE_I18N_LEGACY_API__ && t && e.mixin((i = r, _ = r.__composer, m = s, {
                                    beforeCreate() {
                                        var e = Object(c.getCurrentInstance)();
                                        if (!e) throw u(22);
                                        var t = this.$options;
                                        if (t.i18n) {
                                            const e = t.i18n;
                                            t.__i18n && (e.__i18n = t.__i18n), e.__root = _, this === this.$root ? this.$i18n = R(i, e) : (e.__injectWithOption = !0, this.$i18n = F(e))
                                        } else t.__i18n ? this === this.$root ? this.$i18n = R(i, t) : this.$i18n = F({
                                            __i18n: t.__i18n,
                                            __injectWithOption: !0,
                                            __root: _
                                        }) : this.$i18n = i;
                                        i.__onComponentInstanceCreated(this.$i18n), m.__setInstance(e, this.$i18n), this.$t = (...e) => this.$i18n.t(...e), this.$rt = (...e) => this.$i18n.rt(...e), this.$tc = (...e) => this.$i18n.tc(...e), this.$te = (e, t) => this.$i18n.te(e, t), this.$d = (...e) => this.$i18n.d(...e), this.$n = (...e) => this.$i18n.n(...e), this.$tm = e => this.$i18n.tm(e)
                                    },
                                    mounted() {
                                        if (__VUE_I18N_PROD_DEVTOOLS__) {
                                            this.$el.__VUE_I18N__ = this.$i18n.__composer;
                                            const e = this.__v_emitter = Object(n.b)(),
                                                t = this.$i18n;
                                            t.__enableEmitter && t.__enableEmitter(e), e.on("*", C)
                                        }
                                    },
                                    beforeUnmount() {
                                        var e = Object(c.getCurrentInstance)();
                                        if (!e) throw u(22);
                                        if (__VUE_I18N_PROD_DEVTOOLS__) {
                                            this.__v_emitter && (this.__v_emitter.off("*", C), delete this.__v_emitter);
                                            const e = this.$i18n;
                                            e.__disableEmitter && e.__disableEmitter(), delete this.$el.__VUE_I18N__
                                        }
                                        delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, m.__deleteInstance(e), delete this.$i18n
                                    }
                                })), __VUE_I18N_PROD_DEVTOOLS__) {
                                if (!await S(e, s)) throw u(21);
                                const a = Object(n.b)();
                                if (t) {
                                    const e = r;
                                    e.__enableEmitter && e.__enableEmitter(a)
                                } else {
                                    const e = r;
                                    e[p] && e[p](a)
                                }
                                a.on("*", C)
                            }
                        },
                        get global() {
                            return r
                        },
                        __instances: l,
                        __getInstance: e => l.get(e) || null,
                        __setInstance(e, t) {
                            l.set(e, t)
                        },
                        __deleteInstance(e) {
                            l.delete(e)
                        }
                    };
                return s
            }

            function A(e = {}) {
                var t = Object(c.getCurrentInstance)();
                if (null == t) throw u(16);
                if (!t.appContext.app.__VUE_I18N_SYMBOL__) throw u(17);
                var a = Object(c.inject)(t.appContext.app.__VUE_I18N_SYMBOL__);
                if (!a) throw u(22);
                const l = "composition" === a.mode ? a.global : a.global.__composer;
                var r = Object(n.k)(e) ? "__i18n" in t.type ? "local" : "global" : e.useScope || "local";
                if ("global" === r) {
                    let a = Object(n.n)(e.messages) ? e.messages : {};
                    "__i18nGlobal" in t.type && (a = h(l.locale.value, {
                        messages: a,
                        __i18n: t.type.__i18nGlobal
                    }));
                    const r = Object.keys(a);
                    if (r.length && r.forEach(e => {
                            l.mergeLocaleMessage(e, a[e])
                        }), Object(n.n)(e.datetimeFormats)) {
                        const t = Object.keys(e.datetimeFormats);
                        t.length && t.forEach(t => {
                            l.mergeDateTimeFormat(t, e.datetimeFormats[t])
                        })
                    }
                    if (Object(n.n)(e.numberFormats)) {
                        const t = Object.keys(e.numberFormats);
                        t.length && t.forEach(t => {
                            l.mergeNumberFormat(t, e.numberFormats[t])
                        })
                    }
                    return l
                }
                if ("parent" === r) {
                    let n = function(e, t, a = !1) {
                        let n = null;
                        var l = t.root;
                        let r = t.parent;
                        for (; null != r;) {
                            const t = e;
                            var o;
                            if ("composition" === e.mode ? n = t.__getInstance(r) : (null != (o = t.__getInstance(r)) && (n = o.__composer), a && n && !n[v] && (n = null)), null != n) break;
                            if (l === r) break;
                            r = r.parent
                        }
                        return n
                    }(a, t, e.__useComponent);
                    return null == n && (n = l), n
                }
                if ("legacy" === a.mode) throw u(18);
                const o = a;
                let s = o.__getInstance(t);
                if (null == s) {
                    a = t.type;
                    const r = Object(n.a)({}, e);
                    a.__i18n && (r.__i18n = a.__i18n), l && (r.__root = l), s = I(r),
                        function(e, t, a) {
                            let l = null;
                            Object(c.onMounted)(() => {
                                if (__VUE_I18N_PROD_DEVTOOLS__ && t.vnode.el) {
                                    t.vnode.el.__VUE_I18N__ = a, l = Object(n.b)();
                                    const e = a;
                                    e[p] && e[p](l), l.on("*", C)
                                }
                            }, t), Object(c.onUnmounted)(() => {
                                if (__VUE_I18N_PROD_DEVTOOLS__ && t.vnode.el && t.vnode.el.__VUE_I18N__) {
                                    l && l.off("*", C);
                                    const e = a;
                                    e[O] && e[O](), delete t.vnode.el.__VUE_I18N__
                                }
                                e.__deleteInstance(t)
                            }, t)
                        }(o, t, s), o.__setInstance(t, s)
                }
                return s
            }
            const Y = ["locale", "fallbackLocale", "availableLocales"],
                G = ["t", "rt", "d", "n", "tm"];
            if (Object(o.m)(o.e), function() {
                    let e = !1;
                    "boolean" != typeof __VUE_I18N_FULL_INSTALL__ && (e = !0, Object(n.f)().__VUE_I18N_FULL_INSTALL__ = !0), "boolean" != typeof __VUE_I18N_LEGACY_API__ && (e = !0, Object(n.f)().__VUE_I18N_LEGACY_API__ = !0), "boolean" != typeof __VUE_I18N_PROD_DEVTOOLS__ && (e = !0, Object(n.f)().__VUE_I18N_PROD_DEVTOOLS__ = !1), "boolean" != typeof __INTLIFY_PROD_DEVTOOLS__ && (Object(n.f)().__INTLIFY_PROD_DEVTOOLS__ = !1)
                }(), __INTLIFY_PROD_DEVTOOLS__) {
                const e = Object(n.f)();
                e.__INTLIFY__ = !0, Object(o.o)(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)
            }
        }
    }
]);