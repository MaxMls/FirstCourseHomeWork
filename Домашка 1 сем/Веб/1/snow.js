! function t(e, n, i) {
    function r(a, o) {
        if (!n[a]) {
            if (!e[a]) {
                var h = "function" == typeof require && require;
                if (!o && h) return h(a, !0);
                if (s) return s(a, !0);
                var u = new Error("Cannot find module '" + a + "'");
                throw u.code = "MODULE_NOT_FOUND", u
            }
            var l = n[a] = {
                exports: {}
            };
            e[a][0].call(l.exports, function(t) {
                var n = e[a][1][t];
                return r(n ? n : t)
            }, l, l.exports, t, e, n, i)
        }
        return n[a].exports
    }
    for (var s = "function" == typeof require && require, a = 0; a < i.length; a++) r(i[a]);
    return r
}({
    1: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e
                }
            }(),
            s = function() {
                function t() {
                    i(this, t)
                }
                return r(t, [{
                    key: "track",
                    value: function(t, e, n) {
                        window.ga && window.ga("send", "event", t, e, n)
                    }
                }, {
                    key: "buttonClicked",
                    value: function(t) {
                        this.track("Button", "clicked", t)
                    }
                }, {
                    key: "rangeInputChanged",
                    value: function(t) {
                        console.log("hoi"), this.track("Range input", "updated", t)
                    }
                }]), t
            }();
        n.default = s
    }, {}],
    2: [function(t, e, n) {
        "use strict";

        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e
                }
            }(),
            a = t("./SubBranch.js"),
            o = i(a),
            h = function() {
                function t(e, n) {
                    r(this, t), this.paper = e, this.length = n, this.graphic = new this.paper.Group, this.subBranchAmount = 4
                }
                return s(t, [{
                    key: "init",
                    value: function() {
                        var t = new this.paper.Path.Line({
                            from: [0, 0],
                            to: [0, this.length],
                            strokeColor: "white",
                            strokeCap: "round",
                            pivot: [0, 0]
                        });
                        this.graphic.addChild(t);
                        for (var e = 0; e < this.subBranchAmount - 1; e++) {
                            var n = this.length / this.subBranchAmount * (e + 1),
                                i = Math.random() * this.length / 3,
                                r = new o.default(this.paper, n, i);
                            r.init(), this.graphic.addChild(r.graphic)
                        }
                    }
                }]), t
            }();
        n.default = h
    }, {
        "./SubBranch.js": 5
    }],
    3: [function(t, e, n) {
        "use strict";

        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e
                }
            }(),
            a = t("./Branch.js"),
            o = i(a),
            h = function() {
                function t(e) {
                    r(this, t), this.paper = e, this.location = this.paper.view.center, this.radius = 150, this.branchAmount = 6, this.subBranchAmount = 3, this.graphic = new this.paper.Group, this.graphic.name = "Snowflake", this.scaleFactor = .5, this.baseStrokeWidth = this.radius / 5, this.branches = []
                }
                return s(t, [{
                    key: "init",
                    value: function() {
                        var t = new o.default(this.paper, this.radius);
                        t.subBranchAmount = this.subBranchAmount, t.init(), t.graphic.pivot = [0, 0], t.graphic.position = this.location, this.graphic.removeChildren(), this.graphic.addChild(t.graphic), this.branches.push(t);
                        for (var e = 1; e < this.branchAmount; e++) {
                            var n = t.graphic.clone(),
                                i = 360 / this.branchAmount * e;
                            n.rotate(i), this.graphic.addChild(n), this.branches.push(n)
                        }
                        this.updateStrokeWidth()
                    }
                }, {
                    key: "updateSubBranches",
                    value: function() {
                        this.init()
                    }
                }, {
                    key: "updateStrokeWidth",
                    value: function() {
                        this.baseStrokeWidth = this.radius / 5, this.graphic.strokeWidth = this.baseStrokeWidth * this.scaleFactor
                    }
                }]), t
            }();
        n.default = h
    }, {
        "./Branch.js": 2
    }],
    4: [function(t, e, n) {
        "use strict";

        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function r(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e
                }
            }(),
            a = t("./Snowflake.js"),
            o = i(a),
            h = function() {
                function t(e) {
                    r(this, t), this.paper = e, this.scaleFactor = .5, this.subBranchAmount = 3, this.group = new this.paper.Group, this.group.name = "Snowflakes", this.snowflakes = []
                }
                return s(t, [{
                    key: "init",
                    value: function() {
                        this.snowflakes = [], this.group.removeChildren();
                        for (var t = this.paper.view.viewSize.width, e = this.paper.view.viewSize.height, n = t / 8, i = n; i < e; i += n)
                            for (var r = n; r < t; r += n) {
                                var s = new o.default(this.paper);
                                s.location = [r, i], s.subBranchAmount = this.subBranchAmount, s.radius = n / 3, s.init(), this.group.addChild(s.graphic), this.snowflakes.push(s)
                            }
                        this.updateStrokeWidth()
                    }
                }, {
                    key: "updateStrokeWidth",
                    value: function() {
                        var t = this;
                        this.snowflakes.forEach(function(e) {
                            e.scaleFactor = t.scaleFactor, e.updateStrokeWidth()
                        })
                    }
                }]), t
            }();
        n.default = h
    }, {
        "./Snowflake.js": 3
    }],
    5: [function(t, e, n) {
        "use strict";

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = function() {
                function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                return function(e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e
                }
            }(),
            s = function() {
                function t(e, n, r) {
                    i(this, t), this.paper = e, this.yPosition = n, this.offset = r
                }
                return r(t, [{
                    key: "init",
                    value: function() {
                        var t = this.offset;
                        this.graphic = new this.paper.Path.Line({
                            segments: [
                                [-t, t],
                                [0, 0],
                                [t, t]
                            ],
                            strokeColor: "white",
                            strokeCap: "round",
                            position: [0, this.yPosition]
                        })
                    }
                }]), t
            }();
        n.default = s
    }, {}],
    6: [function(t, e, n) {
        "use strict";

        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var r = t("Paper"),
            s = i(r),
            a = t("Moment"),
            o = i(a),
            h = t("file-saver"),
            u = i(h),
            l = t("./Snowflake.js"),
            c = i(l),
            d = t("./SnowflakeGrid.js"),
            f = i(d),
            _ = t("./Analytics.js"),
            g = i(_);
        window.onload = function() {
            function t() {
                b.removeChildren(), S.removeChildren()
            }

            function e() {
                t(), w.radius = s.default.view.viewSize.height / 3, w.location = s.default.view.center, w.init(), b.addChild(w.graphic)
            }

            function n() {
                t(), x.init(), S.addChild(x.group)
            }

            function i(t) {
                t && (w.scaleFactor = t, x.scaleFactor = t), w.updateStrokeWidth(), x.updateStrokeWidth()
            }

            function r(t) {
                t && (w.subBranchAmount = t, x.subBranchAmount = t), P.checked && n(), M.checked && e()
            }

            function a(t) {
                window.innerWidth;
                s.default.view.viewSize = h(), P.checked && n(), M.checked && e(), i()
            }

            function h() {
                return window.innerWidth < 800 ? [window.innerWidth, .75 * window.innerWidth] : [800, 600]
            }

            function l() {
                y.visible = !0;
                var t = s.default.project.exportSVG({
                        asString: !0,
                        matchShapes: !0
                    }),
                    e = new Blob([t], {
                        type: "image/svg+xml;charset=utf-8"
                    });
                u.default.saveAs(e, "snowflaker-" + (0, o.default)().format() + ".svg"), y.visible = !1
            }
            var d = new g.default,
                _ = document.getElementById("canvas"),
                v = 800,
                p = 600;
            s.default.setup(_), _.width = v, _.height = p, s.default.view.viewSize = h();
            var m = new s.default.Rectangle(0, 0, v, p);
            m.center = new s.default.Point(v / 2, p / 2);
            var y = new s.default.Path.Rectangle(m);
            y.fillColor = "#181919", y.selected = !1, y.visible = !1;
            var w = new c.default(s.default),
                x = new f.default(s.default),
                b = new s.default.Layer,
                S = new s.default.Layer;
            e();
            var C = document.querySelector(".js-strokeWidthSlider");
            C.addEventListener("input", function() {
                i(C.value)
            }), C.addEventListener("change", function() {
                d.rangeInputChanged("Change strokeWidth")
            });
            var k = document.querySelector(".js-subBranchAmountSlider");
            k.addEventListener("input", function() {
                r(k.value)
            }), k.addEventListener("change", function() {
                d.rangeInputChanged("Change subBranchAmount")
            });
            var M = document.querySelector(".js-singleViewRadioButton");
            M.addEventListener("click", function() {
                e(), d.buttonClicked("Single view")
            });
            var P = document.querySelector(".js-gridViewRadioButton");
            P.addEventListener("click", function() {
                n(), d.buttonClicked("Grid view")
            });
            var O = document.querySelector(".js-regenerateButton");
            O.addEventListener("click", function() {
                P.checked && x.init(), M.checked && w.init(), d.buttonClicked("Regenerate")
            }), window.onresize = a;
            var T = document.querySelector(".js-saveAsSVGButton");
            T.addEventListener("click", function() {
                l(), d.buttonClicked("Save as .SVG")
            });
            var I = document.querySelector(".js-socialFacebookButton");
            I.addEventListener("click", function() {
                d.buttonClicked("Facebook share")
            });
            var A = document.querySelector(".js-socialTwitterButton");
            A.addEventListener("click", function() {
                d.buttonClicked("Twitter share")
            });
            var D = document.querySelector(".js-socialAuthorButton");
            D.addEventListener("click", function() {
                d.buttonClicked("Look up author")
            })
        }
    }, {
        "./Analytics.js": 1,
        "./Snowflake.js": 3,
        "./SnowflakeGrid.js": 4,
        Moment: 7,
        Paper: 8,
        "file-saver": 10
    }],
    7: [function(t, e, n) {
        ! function(t, i) {
            "object" == typeof n && "undefined" != typeof e ? e.exports = i() : "function" == typeof define && define.amd ? define(i) : t.moment = i()
        }(this, function() {
            "use strict";

            function n() {
                return pi.apply(null, arguments)
            }

            function i(t) {
                pi = t
            }

            function r(t) {
                return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
            }

            function s(t) {
                return null != t && "[object Object]" === Object.prototype.toString.call(t)
            }

            function a(t) {
                var e;
                for (e in t) return !1;
                return !0
            }

            function o(t) {
                return "number" == typeof value || "[object Number]" === Object.prototype.toString.call(t)
            }

            function h(t) {
                return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
            }

            function u(t, e) {
                var n, i = [];
                for (n = 0; n < t.length; ++n) i.push(e(t[n], n));
                return i
            }

            function l(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }

            function c(t, e) {
                for (var n in e) l(e, n) && (t[n] = e[n]);
                return l(e, "toString") && (t.toString = e.toString), l(e, "valueOf") && (t.valueOf = e.valueOf), t
            }

            function d(t, e, n, i) {
                return ye(t, e, n, i, !0).utc()
            }

            function f() {
                return {
                    empty: !1,
                    unusedTokens: [],
                    unusedInput: [],
                    overflow: -2,
                    charsLeftOver: 0,
                    nullInput: !1,
                    invalidMonth: null,
                    invalidFormat: !1,
                    userInvalidated: !1,
                    iso: !1,
                    parsedDateParts: [],
                    meridiem: null
                }
            }

            function _(t) {
                return null == t._pf && (t._pf = f()), t._pf
            }

            function g(t) {
                if (null == t._isValid) {
                    var e = _(t),
                        n = yi.call(e.parsedDateParts, function(t) {
                            return null != t
                        }),
                        i = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && n);
                    if (t._strict && (i = i && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour), null != Object.isFrozen && Object.isFrozen(t)) return i;
                    t._isValid = i
                }
                return t._isValid
            }

            function v(t) {
                var e = d(NaN);
                return null != t ? c(_(e), t) : _(e).userInvalidated = !0, e
            }

            function p(t) {
                return void 0 === t
            }

            function m(t, e) {
                var n, i, r;
                if (p(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject), p(e._i) || (t._i = e._i), p(e._f) || (t._f = e._f), p(e._l) || (t._l = e._l), p(e._strict) || (t._strict = e._strict), p(e._tzm) || (t._tzm = e._tzm), p(e._isUTC) || (t._isUTC = e._isUTC), p(e._offset) || (t._offset = e._offset), p(e._pf) || (t._pf = _(e)), p(e._locale) || (t._locale = e._locale), wi.length > 0)
                    for (n in wi) i = wi[n], r = e[i], p(r) || (t[i] = r);
                return t
            }

            function y(t) {
                m(this, t), this._d = new Date(null != t._d ? t._d.getTime() : NaN), xi === !1 && (xi = !0, n.updateOffset(this), xi = !1)
            }

            function w(t) {
                return t instanceof y || null != t && null != t._isAMomentObject
            }

            function x(t) {
                return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
            }

            function b(t) {
                var e = +t,
                    n = 0;
                return 0 !== e && isFinite(e) && (n = x(e)), n
            }

            function S(t, e, n) {
                var i, r = Math.min(t.length, e.length),
                    s = Math.abs(t.length - e.length),
                    a = 0;
                for (i = 0; i < r; i++)(n && t[i] !== e[i] || !n && b(t[i]) !== b(e[i])) && a++;
                return a + s
            }

            function C(t) {
                n.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + t)
            }

            function k(t, e) {
                var i = !0;
                return c(function() {
                    if (null != n.deprecationHandler && n.deprecationHandler(null, t), i) {
                        for (var r, s = [], a = 0; a < arguments.length; a++) {
                            if (r = "", "object" == typeof arguments[a]) {
                                r += "\n[" + a + "] ";
                                for (var o in arguments[0]) r += o + ": " + arguments[0][o] + ", ";
                                r = r.slice(0, -2)
                            } else r = arguments[a];
                            s.push(r)
                        }
                        C(t + "\nArguments: " + Array.prototype.slice.call(s).join("") + "\n" + (new Error).stack), i = !1
                    }
                    return e.apply(this, arguments)
                }, e)
            }

            function M(t, e) {
                null != n.deprecationHandler && n.deprecationHandler(t, e), bi[t] || (C(e), bi[t] = !0)
            }

            function P(t) {
                return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
            }

            function O(t) {
                var e, n;
                for (n in t) e = t[n], P(e) ? this[n] = e : this["_" + n] = e;
                this._config = t, this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
            }

            function T(t, e) {
                var n, i = c({}, t);
                for (n in e) l(e, n) && (s(t[n]) && s(e[n]) ? (i[n] = {}, c(i[n], t[n]), c(i[n], e[n])) : null != e[n] ? i[n] = e[n] : delete i[n]);
                for (n in t) l(t, n) && !l(e, n) && s(t[n]) && (i[n] = c({}, i[n]));
                return i
            }

            function I(t) {
                null != t && this.set(t)
            }

            function A(t, e, n) {
                var i = this._calendar[t] || this._calendar.sameElse;
                return P(i) ? i.call(e, n) : i
            }

            function D(t) {
                var e = this._longDateFormat[t],
                    n = this._longDateFormat[t.toUpperCase()];
                return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function(t) {
                    return t.slice(1)
                }), this._longDateFormat[t])
            }

            function z() {
                return this._invalidDate
            }

            function L(t) {
                return this._ordinal.replace("%d", t)
            }

            function E(t, e, n, i) {
                var r = this._relativeTime[n];
                return P(r) ? r(t, e, n, i) : r.replace(/%d/i, t)
            }

            function N(t, e) {
                var n = this._relativeTime[t > 0 ? "future" : "past"];
                return P(n) ? n(e) : n.replace(/%s/i, e)
            }

            function R(t, e) {
                var n = t.toLowerCase();
                Di[n] = Di[n + "s"] = Di[e] = t
            }

            function j(t) {
                return "string" == typeof t ? Di[t] || Di[t.toLowerCase()] : void 0
            }

            function F(t) {
                var e, n, i = {};
                for (n in t) l(t, n) && (e = j(n), e && (i[e] = t[n]));
                return i
            }

            function Y(t, e) {
                zi[t] = e
            }

            function B(t) {
                var e = [];
                for (var n in t) e.push({
                    unit: n,
                    priority: zi[n]
                });
                return e.sort(function(t, e) {
                    return t.priority - e.priority
                }), e
            }

            function V(t, e) {
                return function(i) {
                    return null != i ? (U(this, t, i), n.updateOffset(this, e), this) : W(this, t)
                }
            }

            function W(t, e) {
                return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
            }

            function U(t, e, n) {
                t.isValid() && t._d["set" + (t._isUTC ? "UTC" : "") + e](n)
            }

            function q(t) {
                return t = j(t), P(this[t]) ? this[t]() : this
            }

            function H(t, e) {
                if ("object" == typeof t) {
                    t = F(t);
                    for (var n = B(t), i = 0; i < n.length; i++) this[n[i].unit](t[n[i].unit])
                } else if (t = j(t), P(this[t])) return this[t](e);
                return this
            }

            function G(t, e, n) {
                var i = "" + Math.abs(t),
                    r = e - i.length,
                    s = t >= 0;
                return (s ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + i
            }

            function Z(t, e, n, i) {
                var r = i;
                "string" == typeof i && (r = function() {
                    return this[i]()
                }), t && (Ri[t] = r), e && (Ri[e[0]] = function() {
                    return G(r.apply(this, arguments), e[1], e[2])
                }), n && (Ri[n] = function() {
                    return this.localeData().ordinal(r.apply(this, arguments), t)
                })
            }

            function $(t) {
                return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
            }

            function J(t) {
                var e, n, i = t.match(Li);
                for (e = 0, n = i.length; e < n; e++) Ri[i[e]] ? i[e] = Ri[i[e]] : i[e] = $(i[e]);
                return function(e) {
                    var r, s = "";
                    for (r = 0; r < n; r++) s += i[r] instanceof Function ? i[r].call(e, t) : i[r];
                    return s
                }
            }

            function X(t, e) {
                return t.isValid() ? (e = K(e, t.localeData()), Ni[e] = Ni[e] || J(e), Ni[e](t)) : t.localeData().invalidDate()
            }

            function K(t, e) {
                function n(t) {
                    return e.longDateFormat(t) || t
                }
                var i = 5;
                for (Ei.lastIndex = 0; i >= 0 && Ei.test(t);) t = t.replace(Ei, n), Ei.lastIndex = 0, i -= 1;
                return t
            }

            function Q(t, e, n) {
                er[t] = P(e) ? e : function(t, i) {
                    return t && n ? n : e
                }
            }

            function tt(t, e) {
                return l(er, t) ? er[t](e._strict, e._locale) : new RegExp(et(t))
            }

            function et(t) {
                return nt(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, n, i, r) {
                    return e || n || i || r
                }))
            }

            function nt(t) {
                return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
            }

            function it(t, e) {
                var n, i = e;
                for ("string" == typeof t && (t = [t]), o(e) && (i = function(t, n) {
                        n[e] = b(t)
                    }), n = 0; n < t.length; n++) nr[t[n]] = i
            }

            function rt(t, e) {
                it(t, function(t, n, i, r) {
                    i._w = i._w || {}, e(t, i._w, i, r)
                })
            }

            function st(t, e, n) {
                null != e && l(nr, t) && nr[t](e, n._a, n, t)
            }

            function at(t, e) {
                return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
            }

            function ot(t, e) {
                return t ? r(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || fr).test(e) ? "format" : "standalone"][t.month()] : this._months
            }

            function ht(t, e) {
                return t ? r(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[fr.test(e) ? "format" : "standalone"][t.month()] : this._monthsShort
            }

            function ut(t, e, n) {
                var i, r, s, a = t.toLocaleLowerCase();
                if (!this._monthsParse)
                    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], i = 0; i < 12; ++i) s = d([2e3, i]), this._shortMonthsParse[i] = this.monthsShort(s, "").toLocaleLowerCase(), this._longMonthsParse[i] = this.months(s, "").toLocaleLowerCase();
                return n ? "MMM" === e ? (r = dr.call(this._shortMonthsParse, a), r !== -1 ? r : null) : (r = dr.call(this._longMonthsParse, a), r !== -1 ? r : null) : "MMM" === e ? (r = dr.call(this._shortMonthsParse, a), r !== -1 ? r : (r = dr.call(this._longMonthsParse, a), r !== -1 ? r : null)) : (r = dr.call(this._longMonthsParse, a), r !== -1 ? r : (r = dr.call(this._shortMonthsParse, a), r !== -1 ? r : null))
            }

            function lt(t, e, n) {
                var i, r, s;
                if (this._monthsParseExact) return ut.call(this, t, e, n);
                for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; i < 12; i++) {
                    if (r = d([2e3, i]), n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), n || this._monthsParse[i] || (s = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[i] = new RegExp(s.replace(".", ""), "i")), n && "MMMM" === e && this._longMonthsParse[i].test(t)) return i;
                    if (n && "MMM" === e && this._shortMonthsParse[i].test(t)) return i;
                    if (!n && this._monthsParse[i].test(t)) return i
                }
            }

            function ct(t, e) {
                var n;
                if (!t.isValid()) return t;
                if ("string" == typeof e)
                    if (/^\d+$/.test(e)) e = b(e);
                    else if (e = t.localeData().monthsParse(e), !o(e)) return t;
                return n = Math.min(t.date(), at(t.year(), e)), t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n), t
            }

            function dt(t) {
                return null != t ? (ct(this, t), n.updateOffset(this, !0), this) : W(this, "Month")
            }

            function ft() {
                return at(this.year(), this.month())
            }

            function _t(t) {
                return this._monthsParseExact ? (l(this, "_monthsRegex") || vt.call(this), t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = vr), this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
            }

            function gt(t) {
                return this._monthsParseExact ? (l(this, "_monthsRegex") || vt.call(this), t ? this._monthsStrictRegex : this._monthsRegex) : (l(this, "_monthsRegex") || (this._monthsRegex = pr), this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
            }

            function vt() {
                function t(t, e) {
                    return e.length - t.length
                }
                var e, n, i = [],
                    r = [],
                    s = [];
                for (e = 0; e < 12; e++) n = d([2e3, e]), i.push(this.monthsShort(n, "")), r.push(this.months(n, "")), s.push(this.months(n, "")), s.push(this.monthsShort(n, ""));
                for (i.sort(t), r.sort(t), s.sort(t), e = 0; e < 12; e++) i[e] = nt(i[e]), r[e] = nt(r[e]);
                for (e = 0; e < 24; e++) s[e] = nt(s[e]);
                this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
            }

            function pt(t) {
                return mt(t) ? 366 : 365
            }

            function mt(t) {
                return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
            }

            function yt() {
                return mt(this.year())
            }

            function wt(t, e, n, i, r, s, a) {
                var o = new Date(t, e, n, i, r, s, a);
                return t < 100 && t >= 0 && isFinite(o.getFullYear()) && o.setFullYear(t), o
            }

            function xt(t) {
                var e = new Date(Date.UTC.apply(null, arguments));
                return t < 100 && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t), e
            }

            function bt(t, e, n) {
                var i = 7 + e - n,
                    r = (7 + xt(t, 0, i).getUTCDay() - e) % 7;
                return -r + i - 1
            }

            function St(t, e, n, i, r) {
                var s, a, o = (7 + n - i) % 7,
                    h = bt(t, i, r),
                    u = 1 + 7 * (e - 1) + o + h;
                return u <= 0 ? (s = t - 1, a = pt(s) + u) : u > pt(t) ? (s = t + 1, a = u - pt(t)) : (s = t, a = u), {
                    year: s,
                    dayOfYear: a
                }
            }

            function Ct(t, e, n) {
                var i, r, s = bt(t.year(), e, n),
                    a = Math.floor((t.dayOfYear() - s - 1) / 7) + 1;
                return a < 1 ? (r = t.year() - 1, i = a + kt(r, e, n)) : a > kt(t.year(), e, n) ? (i = a - kt(t.year(), e, n), r = t.year() + 1) : (r = t.year(), i = a), {
                    week: i,
                    year: r
                }
            }

            function kt(t, e, n) {
                var i = bt(t, e, n),
                    r = bt(t + 1, e, n);
                return (pt(t) - i + r) / 7
            }

            function Mt(t) {
                return Ct(t, this._week.dow, this._week.doy).week
            }

            function Pt() {
                return this._week.dow
            }

            function Ot() {
                return this._week.doy
            }

            function Tt(t) {
                var e = this.localeData().week(this);
                return null == t ? e : this.add(7 * (t - e), "d")
            }

            function It(t) {
                var e = Ct(this, 1, 4).week;
                return null == t ? e : this.add(7 * (t - e), "d")
            }

            function At(t, e) {
                return "string" != typeof t ? t : isNaN(t) ? (t = e.weekdaysParse(t), "number" == typeof t ? t : null) : parseInt(t, 10)
            }

            function Dt(t, e) {
                return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t
            }

            function zt(t, e) {
                return t ? r(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(e) ? "format" : "standalone"][t.day()] : this._weekdays
            }

            function Lt(t) {
                return t ? this._weekdaysShort[t.day()] : this._weekdaysShort
            }

            function Et(t) {
                return t ? this._weekdaysMin[t.day()] : this._weekdaysMin
            }

            function Nt(t, e, n) {
                var i, r, s, a = t.toLocaleLowerCase();
                if (!this._weekdaysParse)
                    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], i = 0; i < 7; ++i) s = d([2e3, 1]).day(i), this._minWeekdaysParse[i] = this.weekdaysMin(s, "").toLocaleLowerCase(), this._shortWeekdaysParse[i] = this.weekdaysShort(s, "").toLocaleLowerCase(), this._weekdaysParse[i] = this.weekdays(s, "").toLocaleLowerCase();
                return n ? "dddd" === e ? (r = dr.call(this._weekdaysParse, a), r !== -1 ? r : null) : "ddd" === e ? (r = dr.call(this._shortWeekdaysParse, a), r !== -1 ? r : null) : (r = dr.call(this._minWeekdaysParse, a), r !== -1 ? r : null) : "dddd" === e ? (r = dr.call(this._weekdaysParse, a), r !== -1 ? r : (r = dr.call(this._shortWeekdaysParse, a), r !== -1 ? r : (r = dr.call(this._minWeekdaysParse, a), r !== -1 ? r : null))) : "ddd" === e ? (r = dr.call(this._shortWeekdaysParse, a), r !== -1 ? r : (r = dr.call(this._weekdaysParse, a), r !== -1 ? r : (r = dr.call(this._minWeekdaysParse, a), r !== -1 ? r : null))) : (r = dr.call(this._minWeekdaysParse, a), r !== -1 ? r : (r = dr.call(this._weekdaysParse, a), r !== -1 ? r : (r = dr.call(this._shortWeekdaysParse, a), r !== -1 ? r : null)))
            }

            function Rt(t, e, n) {
                var i, r, s;
                if (this._weekdaysParseExact) return Nt.call(this, t, e, n);
                for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), i = 0; i < 7; i++) {
                    if (r = d([2e3, 1]).day(i), n && !this._fullWeekdaysParse[i] && (this._fullWeekdaysParse[i] = new RegExp("^" + this.weekdays(r, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[i] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[i] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[i] || (s = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[i] = new RegExp(s.replace(".", ""), "i")), n && "dddd" === e && this._fullWeekdaysParse[i].test(t)) return i;
                    if (n && "ddd" === e && this._shortWeekdaysParse[i].test(t)) return i;
                    if (n && "dd" === e && this._minWeekdaysParse[i].test(t)) return i;
                    if (!n && this._weekdaysParse[i].test(t)) return i
                }
            }

            function jt(t) {
                if (!this.isValid()) return null != t ? this : NaN;
                var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                return null != t ? (t = At(t, this.localeData()), this.add(t - e, "d")) : e
            }

            function Ft(t) {
                if (!this.isValid()) return null != t ? this : NaN;
                var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
                return null == t ? e : this.add(t - e, "d")
            }

            function Yt(t) {
                if (!this.isValid()) return null != t ? this : NaN;
                if (null != t) {
                    var e = Dt(t, this.localeData());
                    return this.day(this.day() % 7 ? e : e - 7)
                }
                return this.day() || 7
            }

            function Bt(t) {
                return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Ut.call(this), t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = Sr), this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
            }

            function Vt(t) {
                return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Ut.call(this), t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Cr), this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
            }

            function Wt(t) {
                return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Ut.call(this), t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = kr), this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
            }

            function Ut() {
                function t(t, e) {
                    return e.length - t.length
                }
                var e, n, i, r, s, a = [],
                    o = [],
                    h = [],
                    u = [];
                for (e = 0; e < 7; e++) n = d([2e3, 1]).day(e), i = this.weekdaysMin(n, ""), r = this.weekdaysShort(n, ""), s = this.weekdays(n, ""), a.push(i), o.push(r), h.push(s), u.push(i), u.push(r), u.push(s);
                for (a.sort(t), o.sort(t), h.sort(t), u.sort(t), e = 0; e < 7; e++) o[e] = nt(o[e]), h[e] = nt(h[e]), u[e] = nt(u[e]);
                this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
            }

            function qt() {
                return this.hours() % 12 || 12
            }

            function Ht() {
                return this.hours() || 24
            }

            function Gt(t, e) {
                Z(t, 0, 0, function() {
                    return this.localeData().meridiem(this.hours(), this.minutes(), e)
                })
            }

            function Zt(t, e) {
                return e._meridiemParse
            }

            function $t(t) {
                return "p" === (t + "").toLowerCase().charAt(0)
            }

            function Jt(t, e, n) {
                return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
            }

            function Xt(t) {
                return t ? t.toLowerCase().replace("_", "-") : t
            }

            function Kt(t) {
                for (var e, n, i, r, s = 0; s < t.length;) {
                    for (r = Xt(t[s]).split("-"), e = r.length, n = Xt(t[s + 1]), n = n ? n.split("-") : null; e > 0;) {
                        if (i = Qt(r.slice(0, e).join("-"))) return i;
                        if (n && n.length >= e && S(r, n, !0) >= e - 1) break;
                        e--
                    }
                    s++
                }
                return null
            }

            function Qt(n) {
                var i = null;
                if (!Ir[n] && "undefined" != typeof e && e && e.exports) try {
                    i = Mr._abbr, t("./locale/" + n), te(i)
                } catch (t) {}
                return Ir[n]
            }

            function te(t, e) {
                var n;
                return t && (n = p(e) ? ie(t) : ee(t, e), n && (Mr = n)), Mr._abbr
            }

            function ee(t, e) {
                if (null !== e) {
                    var n = Tr;
                    if (e.abbr = t, null != Ir[t]) M("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = Ir[t]._config;
                    else if (null != e.parentLocale) {
                        if (null == Ir[e.parentLocale]) return Ar[e.parentLocale] || (Ar[e.parentLocale] = []), Ar[e.parentLocale].push({
                            name: t,
                            config: e
                        }), null;
                        n = Ir[e.parentLocale]._config
                    }
                    return Ir[t] = new I(T(n, e)), Ar[t] && Ar[t].forEach(function(t) {
                        ee(t.name, t.config)
                    }), te(t), Ir[t]
                }
                return delete Ir[t], null
            }

            function ne(t, e) {
                if (null != e) {
                    var n, i = Tr;
                    null != Ir[t] && (i = Ir[t]._config), e = T(i, e), n = new I(e), n.parentLocale = Ir[t], Ir[t] = n, te(t)
                } else null != Ir[t] && (null != Ir[t].parentLocale ? Ir[t] = Ir[t].parentLocale : null != Ir[t] && delete Ir[t]);
                return Ir[t]
            }

            function ie(t) {
                var e;
                if (t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t) return Mr;
                if (!r(t)) {
                    if (e = Qt(t)) return e;
                    t = [t]
                }
                return Kt(t)
            }

            function re() {
                return ki(Ir)
            }

            function se(t) {
                var e, n = t._a;
                return n && _(t).overflow === -2 && (e = n[rr] < 0 || n[rr] > 11 ? rr : n[sr] < 1 || n[sr] > at(n[ir], n[rr]) ? sr : n[ar] < 0 || n[ar] > 24 || 24 === n[ar] && (0 !== n[or] || 0 !== n[hr] || 0 !== n[ur]) ? ar : n[or] < 0 || n[or] > 59 ? or : n[hr] < 0 || n[hr] > 59 ? hr : n[ur] < 0 || n[ur] > 999 ? ur : -1, _(t)._overflowDayOfYear && (e < ir || e > sr) && (e = sr), _(t)._overflowWeeks && e === -1 && (e = lr), _(t)._overflowWeekday && e === -1 && (e = cr), _(t).overflow = e), t
            }

            function ae(t) {
                var e, n, i, r, s, a, o = t._i,
                    h = Dr.exec(o) || zr.exec(o);
                if (h) {
                    for (_(t).iso = !0, e = 0, n = Er.length; e < n; e++)
                        if (Er[e][1].exec(h[1])) {
                            r = Er[e][0], i = Er[e][2] !== !1;
                            break
                        } if (null == r) return void(t._isValid = !1);
                    if (h[3]) {
                        for (e = 0, n = Nr.length; e < n; e++)
                            if (Nr[e][1].exec(h[3])) {
                                s = (h[2] || " ") + Nr[e][0];
                                break
                            } if (null == s) return void(t._isValid = !1)
                    }
                    if (!i && null != s) return void(t._isValid = !1);
                    if (h[4]) {
                        if (!Lr.exec(h[4])) return void(t._isValid = !1);
                        a = "Z"
                    }
                    t._f = r + (s || "") + (a || ""), de(t)
                } else t._isValid = !1
            }

            function oe(t) {
                var e = Rr.exec(t._i);
                return null !== e ? void(t._d = new Date((+e[1]))) : (ae(t), void(t._isValid === !1 && (delete t._isValid, n.createFromInputFallback(t))))
            }

            function he(t, e, n) {
                return null != t ? t : null != e ? e : n
            }

            function ue(t) {
                var e = new Date(n.now());
                return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()]
            }

            function le(t) {
                var e, n, i, r, s = [];
                if (!t._d) {
                    for (i = ue(t), t._w && null == t._a[sr] && null == t._a[rr] && ce(t), t._dayOfYear && (r = he(t._a[ir], i[ir]), t._dayOfYear > pt(r) && (_(t)._overflowDayOfYear = !0), n = xt(r, 0, t._dayOfYear), t._a[rr] = n.getUTCMonth(), t._a[sr] = n.getUTCDate()), e = 0; e < 3 && null == t._a[e]; ++e) t._a[e] = s[e] = i[e];
                    for (; e < 7; e++) t._a[e] = s[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                    24 === t._a[ar] && 0 === t._a[or] && 0 === t._a[hr] && 0 === t._a[ur] && (t._nextDay = !0, t._a[ar] = 0), t._d = (t._useUTC ? xt : wt).apply(null, s), null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm), t._nextDay && (t._a[ar] = 24)
                }
            }

            function ce(t) {
                var e, n, i, r, s, a, o, h;
                if (e = t._w, null != e.GG || null != e.W || null != e.E) s = 1, a = 4, n = he(e.GG, t._a[ir], Ct(we(), 1, 4).year), i = he(e.W, 1), r = he(e.E, 1), (r < 1 || r > 7) && (h = !0);
                else {
                    s = t._locale._week.dow, a = t._locale._week.doy;
                    var u = Ct(we(), s, a);
                    n = he(e.gg, t._a[ir], u.year), i = he(e.w, u.week), null != e.d ? (r = e.d, (r < 0 || r > 6) && (h = !0)) : null != e.e ? (r = e.e + s, (e.e < 0 || e.e > 6) && (h = !0)) : r = s
                }
                i < 1 || i > kt(n, s, a) ? _(t)._overflowWeeks = !0 : null != h ? _(t)._overflowWeekday = !0 : (o = St(n, i, r, s, a), t._a[ir] = o.year, t._dayOfYear = o.dayOfYear)
            }

            function de(t) {
                if (t._f === n.ISO_8601) return void ae(t);
                t._a = [], _(t).empty = !0;
                var e, i, r, s, a, o = "" + t._i,
                    h = o.length,
                    u = 0;
                for (r = K(t._f, t._locale).match(Li) || [], e = 0; e < r.length; e++) s = r[e], i = (o.match(tt(s, t)) || [])[0], i && (a = o.substr(0, o.indexOf(i)), a.length > 0 && _(t).unusedInput.push(a), o = o.slice(o.indexOf(i) + i.length), u += i.length), Ri[s] ? (i ? _(t).empty = !1 : _(t).unusedTokens.push(s), st(s, i, t)) : t._strict && !i && _(t).unusedTokens.push(s);
                _(t).charsLeftOver = h - u, o.length > 0 && _(t).unusedInput.push(o), t._a[ar] <= 12 && _(t).bigHour === !0 && t._a[ar] > 0 && (_(t).bigHour = void 0), _(t).parsedDateParts = t._a.slice(0), _(t).meridiem = t._meridiem, t._a[ar] = fe(t._locale, t._a[ar], t._meridiem), le(t), se(t)
            }

            function fe(t, e, n) {
                var i;
                return null == n ? e : null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? (i = t.isPM(n), i && e < 12 && (e += 12), i || 12 !== e || (e = 0), e) : e
            }

            function _e(t) {
                var e, n, i, r, s;
                if (0 === t._f.length) return _(t).invalidFormat = !0, void(t._d = new Date(NaN));
                for (r = 0; r < t._f.length; r++) s = 0, e = m({}, t), null != t._useUTC && (e._useUTC = t._useUTC), e._f = t._f[r], de(e), g(e) && (s += _(e).charsLeftOver, s += 10 * _(e).unusedTokens.length, _(e).score = s, (null == i || s < i) && (i = s, n = e));
                c(t, n || e)
            }

            function ge(t) {
                if (!t._d) {
                    var e = F(t._i);
                    t._a = u([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function(t) {
                        return t && parseInt(t, 10)
                    }), le(t)
                }
            }

            function ve(t) {
                var e = new y(se(pe(t)));
                return e._nextDay && (e.add(1, "d"), e._nextDay = void 0), e
            }

            function pe(t) {
                var e = t._i,
                    n = t._f;
                return t._locale = t._locale || ie(t._l), null === e || void 0 === n && "" === e ? v({
                    nullInput: !0
                }) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)), w(e) ? new y(se(e)) : (h(e) ? t._d = e : r(n) ? _e(t) : n ? de(t) : me(t), g(t) || (t._d = null), t))
            }

            function me(t) {
                var e = t._i;
                void 0 === e ? t._d = new Date(n.now()) : h(e) ? t._d = new Date(e.valueOf()) : "string" == typeof e ? oe(t) : r(e) ? (t._a = u(e.slice(0), function(t) {
                    return parseInt(t, 10)
                }), le(t)) : "object" == typeof e ? ge(t) : o(e) ? t._d = new Date(e) : n.createFromInputFallback(t)
            }

            function ye(t, e, n, i, o) {
                var h = {};
                return n !== !0 && n !== !1 || (i = n, n = void 0), (s(t) && a(t) || r(t) && 0 === t.length) && (t = void 0), h._isAMomentObject = !0, h._useUTC = h._isUTC = o, h._l = n, h._i = t, h._f = e, h._strict = i, ve(h)
            }

            function we(t, e, n, i) {
                return ye(t, e, n, i, !1)
            }

            function xe(t, e) {
                var n, i;
                if (1 === e.length && r(e[0]) && (e = e[0]), !e.length) return we();
                for (n = e[0], i = 1; i < e.length; ++i) e[i].isValid() && !e[i][t](n) || (n = e[i]);
                return n
            }

            function be() {
                var t = [].slice.call(arguments, 0);
                return xe("isBefore", t)
            }

            function Se() {
                var t = [].slice.call(arguments, 0);
                return xe("isAfter", t)
            }

            function Ce(t) {
                var e = F(t),
                    n = e.year || 0,
                    i = e.quarter || 0,
                    r = e.month || 0,
                    s = e.week || 0,
                    a = e.day || 0,
                    o = e.hour || 0,
                    h = e.minute || 0,
                    u = e.second || 0,
                    l = e.millisecond || 0;
                this._milliseconds = +l + 1e3 * u + 6e4 * h + 1e3 * o * 60 * 60, this._days = +a + 7 * s, this._months = +r + 3 * i + 12 * n, this._data = {}, this._locale = ie(), this._bubble()
            }

            function ke(t) {
                return t instanceof Ce
            }

            function Me(t) {
                return t < 0 ? Math.round(-1 * t) * -1 : Math.round(t)
            }

            function Pe(t, e) {
                Z(t, 0, 0, function() {
                    var t = this.utcOffset(),
                        n = "+";
                    return t < 0 && (t = -t, n = "-"), n + G(~~(t / 60), 2) + e + G(~~t % 60, 2)
                })
            }

            function Oe(t, e) {
                var n = (e || "").match(t);
                if (null === n) return null;
                var i = n[n.length - 1] || [],
                    r = (i + "").match(Br) || ["-", 0, 0],
                    s = +(60 * r[1]) + b(r[2]);
                return 0 === s ? 0 : "+" === r[0] ? s : -s
            }

            function Te(t, e) {
                var i, r;
                return e._isUTC ? (i = e.clone(), r = (w(t) || h(t) ? t.valueOf() : we(t).valueOf()) - i.valueOf(), i._d.setTime(i._d.valueOf() + r), n.updateOffset(i, !1), i) : we(t).local()
            }

            function Ie(t) {
                return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
            }

            function Ae(t, e) {
                var i, r = this._offset || 0;
                if (!this.isValid()) return null != t ? this : NaN;
                if (null != t) {
                    if ("string" == typeof t) {
                        if (t = Oe(Ki, t), null === t) return this
                    } else Math.abs(t) < 16 && (t = 60 * t);
                    return !this._isUTC && e && (i = Ie(this)),
                        this._offset = t, this._isUTC = !0, null != i && this.add(i, "m"), r !== t && (!e || this._changeInProgress ? Ge(this, Ve(t - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, n.updateOffset(this, !0), this._changeInProgress = null)), this
                }
                return this._isUTC ? r : Ie(this)
            }

            function De(t, e) {
                return null != t ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this) : -this.utcOffset()
            }

            function ze(t) {
                return this.utcOffset(0, t)
            }

            function Le(t) {
                return this._isUTC && (this.utcOffset(0, t), this._isUTC = !1, t && this.subtract(Ie(this), "m")), this
            }

            function Ee() {
                if (null != this._tzm) this.utcOffset(this._tzm);
                else if ("string" == typeof this._i) {
                    var t = Oe(Xi, this._i);
                    null != t ? this.utcOffset(t) : this.utcOffset(0, !0)
                }
                return this
            }

            function Ne(t) {
                return !!this.isValid() && (t = t ? we(t).utcOffset() : 0, (this.utcOffset() - t) % 60 === 0)
            }

            function Re() {
                return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
            }

            function je() {
                if (!p(this._isDSTShifted)) return this._isDSTShifted;
                var t = {};
                if (m(t, this), t = pe(t), t._a) {
                    var e = t._isUTC ? d(t._a) : we(t._a);
                    this._isDSTShifted = this.isValid() && S(t._a, e.toArray()) > 0
                } else this._isDSTShifted = !1;
                return this._isDSTShifted
            }

            function Fe() {
                return !!this.isValid() && !this._isUTC
            }

            function Ye() {
                return !!this.isValid() && this._isUTC
            }

            function Be() {
                return !!this.isValid() && (this._isUTC && 0 === this._offset)
            }

            function Ve(t, e) {
                var n, i, r, s = t,
                    a = null;
                return ke(t) ? s = {
                    ms: t._milliseconds,
                    d: t._days,
                    M: t._months
                } : o(t) ? (s = {}, e ? s[e] = t : s.milliseconds = t) : (a = Vr.exec(t)) ? (n = "-" === a[1] ? -1 : 1, s = {
                    y: 0,
                    d: b(a[sr]) * n,
                    h: b(a[ar]) * n,
                    m: b(a[or]) * n,
                    s: b(a[hr]) * n,
                    ms: b(Me(1e3 * a[ur])) * n
                }) : (a = Wr.exec(t)) ? (n = "-" === a[1] ? -1 : 1, s = {
                    y: We(a[2], n),
                    M: We(a[3], n),
                    w: We(a[4], n),
                    d: We(a[5], n),
                    h: We(a[6], n),
                    m: We(a[7], n),
                    s: We(a[8], n)
                }) : null == s ? s = {} : "object" == typeof s && ("from" in s || "to" in s) && (r = qe(we(s.from), we(s.to)), s = {}, s.ms = r.milliseconds, s.M = r.months), i = new Ce(s), ke(t) && l(t, "_locale") && (i._locale = t._locale), i
            }

            function We(t, e) {
                var n = t && parseFloat(t.replace(",", "."));
                return (isNaN(n) ? 0 : n) * e
            }

            function Ue(t, e) {
                var n = {
                    milliseconds: 0,
                    months: 0
                };
                return n.months = e.month() - t.month() + 12 * (e.year() - t.year()), t.clone().add(n.months, "M").isAfter(e) && --n.months, n.milliseconds = +e - +t.clone().add(n.months, "M"), n
            }

            function qe(t, e) {
                var n;
                return t.isValid() && e.isValid() ? (e = Te(e, t), t.isBefore(e) ? n = Ue(t, e) : (n = Ue(e, t), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : {
                    milliseconds: 0,
                    months: 0
                }
            }

            function He(t, e) {
                return function(n, i) {
                    var r, s;
                    return null === i || isNaN(+i) || (M(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), s = n, n = i, i = s), n = "string" == typeof n ? +n : n, r = Ve(n, i), Ge(this, r, t), this
                }
            }

            function Ge(t, e, i, r) {
                var s = e._milliseconds,
                    a = Me(e._days),
                    o = Me(e._months);
                t.isValid() && (r = null == r || r, s && t._d.setTime(t._d.valueOf() + s * i), a && U(t, "Date", W(t, "Date") + a * i), o && ct(t, W(t, "Month") + o * i), r && n.updateOffset(t, a || o))
            }

            function Ze(t, e) {
                var n = t.diff(e, "days", !0);
                return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
            }

            function $e(t, e) {
                var i = t || we(),
                    r = Te(i, this).startOf("day"),
                    s = n.calendarFormat(this, r) || "sameElse",
                    a = e && (P(e[s]) ? e[s].call(this, i) : e[s]);
                return this.format(a || this.localeData().calendar(s, this, we(i)))
            }

            function Je() {
                return new y(this)
            }

            function Xe(t, e) {
                var n = w(t) ? t : we(t);
                return !(!this.isValid() || !n.isValid()) && (e = j(p(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(e).valueOf())
            }

            function Ke(t, e) {
                var n = w(t) ? t : we(t);
                return !(!this.isValid() || !n.isValid()) && (e = j(p(e) ? "millisecond" : e), "millisecond" === e ? this.valueOf() < n.valueOf() : this.clone().endOf(e).valueOf() < n.valueOf())
            }

            function Qe(t, e, n, i) {
                return i = i || "()", ("(" === i[0] ? this.isAfter(t, n) : !this.isBefore(t, n)) && (")" === i[1] ? this.isBefore(e, n) : !this.isAfter(e, n))
            }

            function tn(t, e) {
                var n, i = w(t) ? t : we(t);
                return !(!this.isValid() || !i.isValid()) && (e = j(e || "millisecond"), "millisecond" === e ? this.valueOf() === i.valueOf() : (n = i.valueOf(), this.clone().startOf(e).valueOf() <= n && n <= this.clone().endOf(e).valueOf()))
            }

            function en(t, e) {
                return this.isSame(t, e) || this.isAfter(t, e)
            }

            function nn(t, e) {
                return this.isSame(t, e) || this.isBefore(t, e)
            }

            function rn(t, e, n) {
                var i, r, s, a;
                return this.isValid() ? (i = Te(t, this), i.isValid() ? (r = 6e4 * (i.utcOffset() - this.utcOffset()), e = j(e), "year" === e || "month" === e || "quarter" === e ? (a = sn(this, i), "quarter" === e ? a /= 3 : "year" === e && (a /= 12)) : (s = this - i, a = "second" === e ? s / 1e3 : "minute" === e ? s / 6e4 : "hour" === e ? s / 36e5 : "day" === e ? (s - r) / 864e5 : "week" === e ? (s - r) / 6048e5 : s), n ? a : x(a)) : NaN) : NaN
            }

            function sn(t, e) {
                var n, i, r = 12 * (e.year() - t.year()) + (e.month() - t.month()),
                    s = t.clone().add(r, "months");
                return e - s < 0 ? (n = t.clone().add(r - 1, "months"), i = (e - s) / (s - n)) : (n = t.clone().add(r + 1, "months"), i = (e - s) / (n - s)), -(r + i) || 0
            }

            function an() {
                return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
            }

            function on() {
                var t = this.clone().utc();
                return 0 < t.year() && t.year() <= 9999 ? P(Date.prototype.toISOString) ? this.toDate().toISOString() : X(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : X(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
            }

            function hn() {
                if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
                var t = "moment",
                    e = "";
                this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", e = "Z");
                var n = "[" + t + '("]',
                    i = 0 < this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                    r = "-MM-DD[T]HH:mm:ss.SSS",
                    s = e + '[")]';
                return this.format(n + i + r + s)
            }

            function un(t) {
                t || (t = this.isUtc() ? n.defaultFormatUtc : n.defaultFormat);
                var e = X(this, t);
                return this.localeData().postformat(e)
            }

            function ln(t, e) {
                return this.isValid() && (w(t) && t.isValid() || we(t).isValid()) ? Ve({
                    to: this,
                    from: t
                }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
            }

            function cn(t) {
                return this.from(we(), t)
            }

            function dn(t, e) {
                return this.isValid() && (w(t) && t.isValid() || we(t).isValid()) ? Ve({
                    from: this,
                    to: t
                }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
            }

            function fn(t) {
                return this.to(we(), t)
            }

            function _n(t) {
                var e;
                return void 0 === t ? this._locale._abbr : (e = ie(t), null != e && (this._locale = e), this)
            }

            function gn() {
                return this._locale
            }

            function vn(t) {
                switch (t = j(t)) {
                    case "year":
                        this.month(0);
                    case "quarter":
                    case "month":
                        this.date(1);
                    case "week":
                    case "isoWeek":
                    case "day":
                    case "date":
                        this.hours(0);
                    case "hour":
                        this.minutes(0);
                    case "minute":
                        this.seconds(0);
                    case "second":
                        this.milliseconds(0)
                }
                return "week" === t && this.weekday(0), "isoWeek" === t && this.isoWeekday(1), "quarter" === t && this.month(3 * Math.floor(this.month() / 3)), this
            }

            function pn(t) {
                return t = j(t), void 0 === t || "millisecond" === t ? this : ("date" === t && (t = "day"), this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"))
            }

            function mn() {
                return this._d.valueOf() - 6e4 * (this._offset || 0)
            }

            function yn() {
                return Math.floor(this.valueOf() / 1e3)
            }

            function wn() {
                return new Date(this.valueOf())
            }

            function xn() {
                var t = this;
                return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
            }

            function bn() {
                var t = this;
                return {
                    years: t.year(),
                    months: t.month(),
                    date: t.date(),
                    hours: t.hours(),
                    minutes: t.minutes(),
                    seconds: t.seconds(),
                    milliseconds: t.milliseconds()
                }
            }

            function Sn() {
                return this.isValid() ? this.toISOString() : null
            }

            function Cn() {
                return g(this)
            }

            function kn() {
                return c({}, _(this))
            }

            function Mn() {
                return _(this).overflow
            }

            function Pn() {
                return {
                    input: this._i,
                    format: this._f,
                    locale: this._locale,
                    isUTC: this._isUTC,
                    strict: this._strict
                }
            }

            function On(t, e) {
                Z(0, [t, t.length], 0, e)
            }

            function Tn(t) {
                return zn.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
            }

            function In(t) {
                return zn.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
            }

            function An() {
                return kt(this.year(), 1, 4)
            }

            function Dn() {
                var t = this.localeData()._week;
                return kt(this.year(), t.dow, t.doy)
            }

            function zn(t, e, n, i, r) {
                var s;
                return null == t ? Ct(this, i, r).year : (s = kt(t, i, r), e > s && (e = s), Ln.call(this, t, e, n, i, r))
            }

            function Ln(t, e, n, i, r) {
                var s = St(t, e, n, i, r),
                    a = xt(s.year, 0, s.dayOfYear);
                return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this
            }

            function En(t) {
                return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
            }

            function Nn(t) {
                var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                return null == t ? e : this.add(t - e, "d")
            }

            function Rn(t, e) {
                e[ur] = b(1e3 * ("0." + t))
            }

            function jn() {
                return this._isUTC ? "UTC" : ""
            }

            function Fn() {
                return this._isUTC ? "Coordinated Universal Time" : ""
            }

            function Yn(t) {
                return we(1e3 * t)
            }

            function Bn() {
                return we.apply(null, arguments).parseZone()
            }

            function Vn(t) {
                return t
            }

            function Wn(t, e, n, i) {
                var r = ie(),
                    s = d().set(i, e);
                return r[n](s, t)
            }

            function Un(t, e, n) {
                if (o(t) && (e = t, t = void 0), t = t || "", null != e) return Wn(t, e, n, "month");
                var i, r = [];
                for (i = 0; i < 12; i++) r[i] = Wn(t, i, n, "month");
                return r
            }

            function qn(t, e, n, i) {
                "boolean" == typeof t ? (o(e) && (n = e, e = void 0), e = e || "") : (e = t, n = e, t = !1, o(e) && (n = e, e = void 0), e = e || "");
                var r = ie(),
                    s = t ? r._week.dow : 0;
                if (null != n) return Wn(e, (n + s) % 7, i, "day");
                var a, h = [];
                for (a = 0; a < 7; a++) h[a] = Wn(e, (a + s) % 7, i, "day");
                return h
            }

            function Hn(t, e) {
                return Un(t, e, "months")
            }

            function Gn(t, e) {
                return Un(t, e, "monthsShort")
            }

            function Zn(t, e, n) {
                return qn(t, e, n, "weekdays")
            }

            function $n(t, e, n) {
                return qn(t, e, n, "weekdaysShort")
            }

            function Jn(t, e, n) {
                return qn(t, e, n, "weekdaysMin")
            }

            function Xn() {
                var t = this._data;
                return this._milliseconds = ts(this._milliseconds), this._days = ts(this._days), this._months = ts(this._months), t.milliseconds = ts(t.milliseconds), t.seconds = ts(t.seconds), t.minutes = ts(t.minutes), t.hours = ts(t.hours), t.months = ts(t.months), t.years = ts(t.years), this
            }

            function Kn(t, e, n, i) {
                var r = Ve(e, n);
                return t._milliseconds += i * r._milliseconds, t._days += i * r._days, t._months += i * r._months, t._bubble()
            }

            function Qn(t, e) {
                return Kn(this, t, e, 1)
            }

            function ti(t, e) {
                return Kn(this, t, e, -1)
            }

            function ei(t) {
                return t < 0 ? Math.floor(t) : Math.ceil(t)
            }

            function ni() {
                var t, e, n, i, r, s = this._milliseconds,
                    a = this._days,
                    o = this._months,
                    h = this._data;
                return s >= 0 && a >= 0 && o >= 0 || s <= 0 && a <= 0 && o <= 0 || (s += 864e5 * ei(ri(o) + a), a = 0, o = 0), h.milliseconds = s % 1e3, t = x(s / 1e3), h.seconds = t % 60, e = x(t / 60), h.minutes = e % 60, n = x(e / 60), h.hours = n % 24, a += x(n / 24), r = x(ii(a)), o += r, a -= ei(ri(r)), i = x(o / 12), o %= 12, h.days = a, h.months = o, h.years = i, this
            }

            function ii(t) {
                return 4800 * t / 146097
            }

            function ri(t) {
                return 146097 * t / 4800
            }

            function si(t) {
                var e, n, i = this._milliseconds;
                if (t = j(t), "month" === t || "year" === t) return e = this._days + i / 864e5, n = this._months + ii(e), "month" === t ? n : n / 12;
                switch (e = this._days + Math.round(ri(this._months)), t) {
                    case "week":
                        return e / 7 + i / 6048e5;
                    case "day":
                        return e + i / 864e5;
                    case "hour":
                        return 24 * e + i / 36e5;
                    case "minute":
                        return 1440 * e + i / 6e4;
                    case "second":
                        return 86400 * e + i / 1e3;
                    case "millisecond":
                        return Math.floor(864e5 * e) + i;
                    default:
                        throw new Error("Unknown unit " + t)
                }
            }

            function ai() {
                return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * b(this._months / 12)
            }

            function oi(t) {
                return function() {
                    return this.as(t)
                }
            }

            function hi(t) {
                return t = j(t), this[t + "s"]()
            }

            function ui(t) {
                return function() {
                    return this._data[t]
                }
            }

            function li() {
                return x(this.days() / 7)
            }

            function ci(t, e, n, i, r) {
                return r.relativeTime(e || 1, !!n, t, i)
            }

            function di(t, e, n) {
                var i = Ve(t).abs(),
                    r = vs(i.as("s")),
                    s = vs(i.as("m")),
                    a = vs(i.as("h")),
                    o = vs(i.as("d")),
                    h = vs(i.as("M")),
                    u = vs(i.as("y")),
                    l = r < ps.s && ["s", r] || s <= 1 && ["m"] || s < ps.m && ["mm", s] || a <= 1 && ["h"] || a < ps.h && ["hh", a] || o <= 1 && ["d"] || o < ps.d && ["dd", o] || h <= 1 && ["M"] || h < ps.M && ["MM", h] || u <= 1 && ["y"] || ["yy", u];
                return l[2] = e, l[3] = +t > 0, l[4] = n, ci.apply(null, l)
            }

            function fi(t) {
                return void 0 === t ? vs : "function" == typeof t && (vs = t, !0)
            }

            function _i(t, e) {
                return void 0 !== ps[t] && (void 0 === e ? ps[t] : (ps[t] = e, !0))
            }

            function gi(t) {
                var e = this.localeData(),
                    n = di(this, !t, e);
                return t && (n = e.pastFuture(+this, n)), e.postformat(n)
            }

            function vi() {
                var t, e, n, i = ms(this._milliseconds) / 1e3,
                    r = ms(this._days),
                    s = ms(this._months);
                t = x(i / 60), e = x(t / 60), i %= 60, t %= 60, n = x(s / 12), s %= 12;
                var a = n,
                    o = s,
                    h = r,
                    u = e,
                    l = t,
                    c = i,
                    d = this.asSeconds();
                return d ? (d < 0 ? "-" : "") + "P" + (a ? a + "Y" : "") + (o ? o + "M" : "") + (h ? h + "D" : "") + (u || l || c ? "T" : "") + (u ? u + "H" : "") + (l ? l + "M" : "") + (c ? c + "S" : "") : "P0D"
            }
            var pi, mi;
            mi = Array.prototype.some ? Array.prototype.some : function(t) {
                for (var e = Object(this), n = e.length >>> 0, i = 0; i < n; i++)
                    if (i in e && t.call(this, e[i], i, e)) return !0;
                return !1
            };
            var yi = mi,
                wi = n.momentProperties = [],
                xi = !1,
                bi = {};
            n.suppressDeprecationWarnings = !1, n.deprecationHandler = null;
            var Si;
            Si = Object.keys ? Object.keys : function(t) {
                var e, n = [];
                for (e in t) l(t, e) && n.push(e);
                return n
            };
            var Ci, ki = Si,
                Mi = {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                Pi = {
                    LTS: "h:mm:ss A",
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                },
                Oi = "Invalid date",
                Ti = "%d",
                Ii = /\d{1,2}/,
                Ai = {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                Di = {},
                zi = {},
                Li = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                Ei = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                Ni = {},
                Ri = {},
                ji = /\d/,
                Fi = /\d\d/,
                Yi = /\d{3}/,
                Bi = /\d{4}/,
                Vi = /[+-]?\d{6}/,
                Wi = /\d\d?/,
                Ui = /\d\d\d\d?/,
                qi = /\d\d\d\d\d\d?/,
                Hi = /\d{1,3}/,
                Gi = /\d{1,4}/,
                Zi = /[+-]?\d{1,6}/,
                $i = /\d+/,
                Ji = /[+-]?\d+/,
                Xi = /Z|[+-]\d\d:?\d\d/gi,
                Ki = /Z|[+-]\d\d(?::?\d\d)?/gi,
                Qi = /[+-]?\d+(\.\d{1,3})?/,
                tr = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
                er = {},
                nr = {},
                ir = 0,
                rr = 1,
                sr = 2,
                ar = 3,
                or = 4,
                hr = 5,
                ur = 6,
                lr = 7,
                cr = 8;
            Ci = Array.prototype.indexOf ? Array.prototype.indexOf : function(t) {
                var e;
                for (e = 0; e < this.length; ++e)
                    if (this[e] === t) return e;
                return -1
            };
            var dr = Ci;
            Z("M", ["MM", 2], "Mo", function() {
                return this.month() + 1
            }), Z("MMM", 0, 0, function(t) {
                return this.localeData().monthsShort(this, t)
            }), Z("MMMM", 0, 0, function(t) {
                return this.localeData().months(this, t)
            }), R("month", "M"), Y("month", 8), Q("M", Wi), Q("MM", Wi, Fi), Q("MMM", function(t, e) {
                return e.monthsShortRegex(t)
            }), Q("MMMM", function(t, e) {
                return e.monthsRegex(t)
            }), it(["M", "MM"], function(t, e) {
                e[rr] = b(t) - 1
            }), it(["MMM", "MMMM"], function(t, e, n, i) {
                var r = n._locale.monthsParse(t, i, n._strict);
                null != r ? e[rr] = r : _(n).invalidMonth = t
            });
            var fr = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                _r = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                gr = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                vr = tr,
                pr = tr;
            Z("Y", 0, 0, function() {
                var t = this.year();
                return t <= 9999 ? "" + t : "+" + t
            }), Z(0, ["YY", 2], 0, function() {
                return this.year() % 100
            }), Z(0, ["YYYY", 4], 0, "year"), Z(0, ["YYYYY", 5], 0, "year"), Z(0, ["YYYYYY", 6, !0], 0, "year"), R("year", "y"), Y("year", 1), Q("Y", Ji), Q("YY", Wi, Fi), Q("YYYY", Gi, Bi), Q("YYYYY", Zi, Vi), Q("YYYYYY", Zi, Vi), it(["YYYYY", "YYYYYY"], ir), it("YYYY", function(t, e) {
                e[ir] = 2 === t.length ? n.parseTwoDigitYear(t) : b(t)
            }), it("YY", function(t, e) {
                e[ir] = n.parseTwoDigitYear(t)
            }), it("Y", function(t, e) {
                e[ir] = parseInt(t, 10)
            }), n.parseTwoDigitYear = function(t) {
                return b(t) + (b(t) > 68 ? 1900 : 2e3)
            };
            var mr = V("FullYear", !0);
            Z("w", ["ww", 2], "wo", "week"), Z("W", ["WW", 2], "Wo", "isoWeek"), R("week", "w"), R("isoWeek", "W"), Y("week", 5), Y("isoWeek", 5), Q("w", Wi), Q("ww", Wi, Fi), Q("W", Wi), Q("WW", Wi, Fi), rt(["w", "ww", "W", "WW"], function(t, e, n, i) {
                e[i.substr(0, 1)] = b(t)
            });
            var yr = {
                dow: 0,
                doy: 6
            };
            Z("d", 0, "do", "day"), Z("dd", 0, 0, function(t) {
                return this.localeData().weekdaysMin(this, t)
            }), Z("ddd", 0, 0, function(t) {
                return this.localeData().weekdaysShort(this, t)
            }), Z("dddd", 0, 0, function(t) {
                return this.localeData().weekdays(this, t)
            }), Z("e", 0, 0, "weekday"), Z("E", 0, 0, "isoWeekday"), R("day", "d"), R("weekday", "e"), R("isoWeekday", "E"), Y("day", 11), Y("weekday", 11), Y("isoWeekday", 11), Q("d", Wi), Q("e", Wi), Q("E", Wi), Q("dd", function(t, e) {
                return e.weekdaysMinRegex(t)
            }), Q("ddd", function(t, e) {
                return e.weekdaysShortRegex(t)
            }), Q("dddd", function(t, e) {
                return e.weekdaysRegex(t)
            }), rt(["dd", "ddd", "dddd"], function(t, e, n, i) {
                var r = n._locale.weekdaysParse(t, i, n._strict);
                null != r ? e.d = r : _(n).invalidWeekday = t
            }), rt(["d", "e", "E"], function(t, e, n, i) {
                e[i] = b(t)
            });
            var wr = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                xr = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                br = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                Sr = tr,
                Cr = tr,
                kr = tr;
            Z("H", ["HH", 2], 0, "hour"), Z("h", ["hh", 2], 0, qt), Z("k", ["kk", 2], 0, Ht), Z("hmm", 0, 0, function() {
                return "" + qt.apply(this) + G(this.minutes(), 2)
            }), Z("hmmss", 0, 0, function() {
                return "" + qt.apply(this) + G(this.minutes(), 2) + G(this.seconds(), 2)
            }), Z("Hmm", 0, 0, function() {
                return "" + this.hours() + G(this.minutes(), 2)
            }), Z("Hmmss", 0, 0, function() {
                return "" + this.hours() + G(this.minutes(), 2) + G(this.seconds(), 2)
            }), Gt("a", !0), Gt("A", !1), R("hour", "h"), Y("hour", 13), Q("a", Zt), Q("A", Zt), Q("H", Wi), Q("h", Wi), Q("HH", Wi, Fi), Q("hh", Wi, Fi), Q("hmm", Ui), Q("hmmss", qi), Q("Hmm", Ui), Q("Hmmss", qi), it(["H", "HH"], ar), it(["a", "A"], function(t, e, n) {
                n._isPm = n._locale.isPM(t), n._meridiem = t
            }), it(["h", "hh"], function(t, e, n) {
                e[ar] = b(t), _(n).bigHour = !0
            }), it("hmm", function(t, e, n) {
                var i = t.length - 2;
                e[ar] = b(t.substr(0, i)), e[or] = b(t.substr(i)), _(n).bigHour = !0
            }), it("hmmss", function(t, e, n) {
                var i = t.length - 4,
                    r = t.length - 2;
                e[ar] = b(t.substr(0, i)), e[or] = b(t.substr(i, 2)), e[hr] = b(t.substr(r)), _(n).bigHour = !0
            }), it("Hmm", function(t, e, n) {
                var i = t.length - 2;
                e[ar] = b(t.substr(0, i)), e[or] = b(t.substr(i))
            }), it("Hmmss", function(t, e, n) {
                var i = t.length - 4,
                    r = t.length - 2;
                e[ar] = b(t.substr(0, i)), e[or] = b(t.substr(i, 2)), e[hr] = b(t.substr(r))
            });
            var Mr, Pr = /[ap]\.?m?\.?/i,
                Or = V("Hours", !0),
                Tr = {
                    calendar: Mi,
                    longDateFormat: Pi,
                    invalidDate: Oi,
                    ordinal: Ti,
                    ordinalParse: Ii,
                    relativeTime: Ai,
                    months: _r,
                    monthsShort: gr,
                    week: yr,
                    weekdays: wr,
                    weekdaysMin: br,
                    weekdaysShort: xr,
                    meridiemParse: Pr
                },
                Ir = {},
                Ar = {},
                Dr = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                zr = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                Lr = /Z|[+-]\d\d(?::?\d\d)?/,
                Er = [
                    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                    ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                    ["YYYY-DDD", /\d{4}-\d{3}/],
                    ["YYYY-MM", /\d{4}-\d\d/, !1],
                    ["YYYYYYMMDD", /[+-]\d{10}/],
                    ["YYYYMMDD", /\d{8}/],
                    ["GGGG[W]WWE", /\d{4}W\d{3}/],
                    ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                    ["YYYYDDD", /\d{7}/]
                ],
                Nr = [
                    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                    ["HH:mm", /\d\d:\d\d/],
                    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                    ["HHmmss", /\d\d\d\d\d\d/],
                    ["HHmm", /\d\d\d\d/],
                    ["HH", /\d\d/]
                ],
                Rr = /^\/?Date\((\-?\d+)/i;
            n.createFromInputFallback = k("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(t) {
                t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
            }), n.ISO_8601 = function() {};
            var jr = k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                    var t = we.apply(null, arguments);
                    return this.isValid() && t.isValid() ? t < this ? this : t : v()
                }),
                Fr = k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                    var t = we.apply(null, arguments);
                    return this.isValid() && t.isValid() ? t > this ? this : t : v()
                }),
                Yr = function() {
                    return Date.now ? Date.now() : +new Date
                };
            Pe("Z", ":"), Pe("ZZ", ""), Q("Z", Ki), Q("ZZ", Ki), it(["Z", "ZZ"], function(t, e, n) {
                n._useUTC = !0, n._tzm = Oe(Ki, t)
            });
            var Br = /([\+\-]|\d\d)/gi;
            n.updateOffset = function() {};
            var Vr = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                Wr = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
            Ve.fn = Ce.prototype;
            var Ur = He(1, "add"),
                qr = He(-1, "subtract");
            n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", n.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
            var Hr = k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
                return void 0 === t ? this.localeData() : this.locale(t)
            });
            Z(0, ["gg", 2], 0, function() {
                return this.weekYear() % 100
            }), Z(0, ["GG", 2], 0, function() {
                return this.isoWeekYear() % 100
            }), On("gggg", "weekYear"), On("ggggg", "weekYear"), On("GGGG", "isoWeekYear"), On("GGGGG", "isoWeekYear"), R("weekYear", "gg"), R("isoWeekYear", "GG"), Y("weekYear", 1), Y("isoWeekYear", 1), Q("G", Ji), Q("g", Ji), Q("GG", Wi, Fi), Q("gg", Wi, Fi), Q("GGGG", Gi, Bi), Q("gggg", Gi, Bi), Q("GGGGG", Zi, Vi), Q("ggggg", Zi, Vi), rt(["gggg", "ggggg", "GGGG", "GGGGG"], function(t, e, n, i) {
                e[i.substr(0, 2)] = b(t)
            }), rt(["gg", "GG"], function(t, e, i, r) {
                e[r] = n.parseTwoDigitYear(t)
            }), Z("Q", 0, "Qo", "quarter"), R("quarter", "Q"), Y("quarter", 7), Q("Q", ji), it("Q", function(t, e) {
                e[rr] = 3 * (b(t) - 1)
            }), Z("D", ["DD", 2], "Do", "date"), R("date", "D"), Y("date", 9), Q("D", Wi), Q("DD", Wi, Fi), Q("Do", function(t, e) {
                return t ? e._ordinalParse : e._ordinalParseLenient
            }), it(["D", "DD"], sr), it("Do", function(t, e) {
                e[sr] = b(t.match(Wi)[0], 10)
            });
            var Gr = V("Date", !0);
            Z("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), R("dayOfYear", "DDD"), Y("dayOfYear", 4), Q("DDD", Hi), Q("DDDD", Yi), it(["DDD", "DDDD"], function(t, e, n) {
                n._dayOfYear = b(t)
            }), Z("m", ["mm", 2], 0, "minute"), R("minute", "m"), Y("minute", 14), Q("m", Wi), Q("mm", Wi, Fi), it(["m", "mm"], or);
            var Zr = V("Minutes", !1);
            Z("s", ["ss", 2], 0, "second"), R("second", "s"), Y("second", 15), Q("s", Wi), Q("ss", Wi, Fi), it(["s", "ss"], hr);
            var $r = V("Seconds", !1);
            Z("S", 0, 0, function() {
                return ~~(this.millisecond() / 100)
            }), Z(0, ["SS", 2], 0, function() {
                return ~~(this.millisecond() / 10)
            }), Z(0, ["SSS", 3], 0, "millisecond"), Z(0, ["SSSS", 4], 0, function() {
                return 10 * this.millisecond()
            }), Z(0, ["SSSSS", 5], 0, function() {
                return 100 * this.millisecond()
            }), Z(0, ["SSSSSS", 6], 0, function() {
                return 1e3 * this.millisecond()
            }), Z(0, ["SSSSSSS", 7], 0, function() {
                return 1e4 * this.millisecond()
            }), Z(0, ["SSSSSSSS", 8], 0, function() {
                return 1e5 * this.millisecond()
            }), Z(0, ["SSSSSSSSS", 9], 0, function() {
                return 1e6 * this.millisecond()
            }), R("millisecond", "ms"), Y("millisecond", 16), Q("S", Hi, ji), Q("SS", Hi, Fi), Q("SSS", Hi, Yi);
            var Jr;
            for (Jr = "SSSS"; Jr.length <= 9; Jr += "S") Q(Jr, $i);
            for (Jr = "S"; Jr.length <= 9; Jr += "S") it(Jr, Rn);
            var Xr = V("Milliseconds", !1);
            Z("z", 0, 0, "zoneAbbr"), Z("zz", 0, 0, "zoneName");
            var Kr = y.prototype;
            Kr.add = Ur, Kr.calendar = $e, Kr.clone = Je, Kr.diff = rn, Kr.endOf = pn, Kr.format = un, Kr.from = ln, Kr.fromNow = cn, Kr.to = dn, Kr.toNow = fn, Kr.get = q, Kr.invalidAt = Mn, Kr.isAfter = Xe, Kr.isBefore = Ke, Kr.isBetween = Qe, Kr.isSame = tn, Kr.isSameOrAfter = en, Kr.isSameOrBefore = nn, Kr.isValid = Cn, Kr.lang = Hr, Kr.locale = _n, Kr.localeData = gn, Kr.max = Fr, Kr.min = jr, Kr.parsingFlags = kn, Kr.set = H, Kr.startOf = vn, Kr.subtract = qr, Kr.toArray = xn, Kr.toObject = bn, Kr.toDate = wn, Kr.toISOString = on, Kr.inspect = hn, Kr.toJSON = Sn, Kr.toString = an, Kr.unix = yn, Kr.valueOf = mn, Kr.creationData = Pn, Kr.year = mr, Kr.isLeapYear = yt, Kr.weekYear = Tn, Kr.isoWeekYear = In, Kr.quarter = Kr.quarters = En, Kr.month = dt, Kr.daysInMonth = ft, Kr.week = Kr.weeks = Tt, Kr.isoWeek = Kr.isoWeeks = It, Kr.weeksInYear = Dn, Kr.isoWeeksInYear = An, Kr.date = Gr, Kr.day = Kr.days = jt, Kr.weekday = Ft, Kr.isoWeekday = Yt, Kr.dayOfYear = Nn, Kr.hour = Kr.hours = Or, Kr.minute = Kr.minutes = Zr, Kr.second = Kr.seconds = $r, Kr.millisecond = Kr.milliseconds = Xr, Kr.utcOffset = Ae, Kr.utc = ze, Kr.local = Le, Kr.parseZone = Ee, Kr.hasAlignedHourOffset = Ne, Kr.isDST = Re, Kr.isLocal = Fe, Kr.isUtcOffset = Ye, Kr.isUtc = Be, Kr.isUTC = Be, Kr.zoneAbbr = jn, Kr.zoneName = Fn, Kr.dates = k("dates accessor is deprecated. Use date instead.", Gr), Kr.months = k("months accessor is deprecated. Use month instead", dt), Kr.years = k("years accessor is deprecated. Use year instead", mr), Kr.zone = k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", De), Kr.isDSTShifted = k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", je);
            var Qr = I.prototype;
            Qr.calendar = A, Qr.longDateFormat = D, Qr.invalidDate = z, Qr.ordinal = L, Qr.preparse = Vn, Qr.postformat = Vn, Qr.relativeTime = E, Qr.pastFuture = N, Qr.set = O, Qr.months = ot, Qr.monthsShort = ht, Qr.monthsParse = lt, Qr.monthsRegex = gt, Qr.monthsShortRegex = _t, Qr.week = Mt, Qr.firstDayOfYear = Ot, Qr.firstDayOfWeek = Pt, Qr.weekdays = zt, Qr.weekdaysMin = Et, Qr.weekdaysShort = Lt, Qr.weekdaysParse = Rt, Qr.weekdaysRegex = Bt, Qr.weekdaysShortRegex = Vt, Qr.weekdaysMinRegex = Wt, Qr.isPM = $t, Qr.meridiem = Jt, te("en", {
                ordinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(t) {
                    var e = t % 10,
                        n = 1 === b(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
                    return t + n
                }
            }), n.lang = k("moment.lang is deprecated. Use moment.locale instead.", te), n.langData = k("moment.langData is deprecated. Use moment.localeData instead.", ie);
            var ts = Math.abs,
                es = oi("ms"),
                ns = oi("s"),
                is = oi("m"),
                rs = oi("h"),
                ss = oi("d"),
                as = oi("w"),
                os = oi("M"),
                hs = oi("y"),
                us = ui("milliseconds"),
                ls = ui("seconds"),
                cs = ui("minutes"),
                ds = ui("hours"),
                fs = ui("days"),
                _s = ui("months"),
                gs = ui("years"),
                vs = Math.round,
                ps = {
                    s: 45,
                    m: 45,
                    h: 22,
                    d: 26,
                    M: 11
                },
                ms = Math.abs,
                ys = Ce.prototype;
            return ys.abs = Xn, ys.add = Qn, ys.subtract = ti, ys.as = si, ys.asMilliseconds = es, ys.asSeconds = ns, ys.asMinutes = is, ys.asHours = rs, ys.asDays = ss, ys.asWeeks = as, ys.asMonths = os, ys.asYears = hs, ys.valueOf = ai, ys._bubble = ni, ys.get = hi, ys.milliseconds = us, ys.seconds = ls, ys.minutes = cs, ys.hours = ds, ys.days = fs, ys.weeks = li, ys.months = _s, ys.years = gs, ys.humanize = gi, ys.toISOString = vi, ys.toString = vi, ys.toJSON = vi, ys.locale = _n, ys.localeData = gn, ys.toIsoString = k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", vi), ys.lang = Hr, Z("X", 0, 0, "unix"), Z("x", 0, 0, "valueOf"), Q("x", Ji), Q("X", Qi), it("X", function(t, e, n) {
                n._d = new Date(1e3 * parseFloat(t, 10))
            }), it("x", function(t, e, n) {
                n._d = new Date(b(t))
            }), n.version = "2.16.0", i(we), n.fn = Kr, n.min = be, n.max = Se, n.now = Yr, n.utc = d, n.unix = Yn, n.months = Hn, n.isDate = h, n.locale = te, n.invalid = v, n.duration = Ve, n.isMoment = w, n.weekdays = Zn, n.parseZone = Bn, n.localeData = ie, n.isDuration = ke, n.monthsShort = Gn, n.weekdaysMin = Jn, n.defineLocale = ee, n.updateLocale = ne, n.locales = re, n.weekdaysShort = $n, n.normalizeUnits = j, n.relativeTimeRounding = fi, n.relativeTimeThreshold = _i, n.calendarFormat = Ze, n.prototype = Kr, n
        })
    }, {}],
    8: [function(t, e, n) {
        var i = function(n, r) {
            var s = n ? n.window : t("./node/window"),
                a = s && s.document;
            n = n || s;
            var o = new function() {
                function t(t, e, n, r, s) {
                    function a(i, a) {
                        a = a || (a = u(e, i)) && (a.get ? a : a.value), "string" == typeof a && "#" === a[0] && (a = t[a.substring(1)] || a);
                        var l, d = "function" == typeof a,
                            f = a,
                            _ = s || d && !a.base ? a && a.get ? i in t : t[i] : null;
                        s && _ || (d && _ && (a.base = _), d && r !== !1 && (l = i.match(/^([gs]et|is)(([A-Z])(.*))$/)) && (h[l[3].toLowerCase() + l[4]] = l[2]), f && !d && f.get && "function" == typeof f.get && o.isPlainObject(f) || (f = {
                            value: f,
                            writable: !0
                        }), (u(t, i) || {
                            configurable: !0
                        }).configurable && (f.configurable = !0, f.enumerable = n), c(t, i, f))
                    }
                    var h = {};
                    if (e) {
                        for (var l in e) e.hasOwnProperty(l) && !i.test(l) && a(l);
                        for (var l in h) {
                            var d = h[l],
                                f = t["set" + d],
                                _ = t["get" + d] || f && t["is" + d];
                            !_ || r !== !0 && 0 !== _.length || a(l, {
                                get: _,
                                set: f
                            })
                        }
                    }
                    return t
                }

                function e(t, e, n) {
                    return t && ("length" in t && !t.getLength && "number" == typeof t.length ? s : a).call(t, e, n = n || t), n
                }

                function n(t, e, n) {
                    for (var i = n, r = e.length; i < r; i++) {
                        var s = e[i];
                        for (var a in s) s.hasOwnProperty(a) && (t[a] = s[a])
                    }
                    return t
                }
                var i = /^(statics|enumerable|beans|preserve)$/,
                    s = [].forEach || function(t, e) {
                        for (var n = 0, i = this.length; n < i; n++) t.call(e, this[n], n, this)
                    },
                    a = function(t, e) {
                        for (var n in this) this.hasOwnProperty(n) && t.call(e, this[n], n, this)
                    },
                    h = Object.create || function(t) {
                        return {
                            __proto__: t
                        }
                    },
                    u = Object.getOwnPropertyDescriptor || function(t, e) {
                        var n = t.__lookupGetter__ && t.__lookupGetter__(e);
                        return n ? {
                            get: n,
                            set: t.__lookupSetter__(e),
                            enumerable: !0,
                            configurable: !0
                        } : t.hasOwnProperty(e) ? {
                            value: t[e],
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        } : null
                    },
                    l = Object.defineProperty || function(t, e, n) {
                        return (n.get || n.set) && t.__defineGetter__ ? (n.get && t.__defineGetter__(e, n.get), n.set && t.__defineSetter__(e, n.set)) : t[e] = n.value, t
                    },
                    c = function(t, e, n) {
                        return delete t[e], l(t, e, n)
                    };
                return t(function() {
                    n(this, arguments, 0)
                }, {
                    inject: function(e) {
                        if (e) {
                            var n = e.statics === !0 ? e : e.statics,
                                i = e.beans,
                                r = e.preserve;
                            n !== e && t(this.prototype, e, e.enumerable, i, r), t(this, n, !0, i, r)
                        }
                        for (var s = 1, a = arguments.length; s < a; s++) this.inject(arguments[s]);
                        return this
                    },
                    extend: function() {
                        for (var e, n, i, r = this, s = 0, a = arguments.length; s < a && (!e || !n); s++) i = arguments[s], e = e || i.initialize, n = n || i.prototype;
                        return e = e || function() {
                            r.apply(this, arguments)
                        }, n = e.prototype = n || h(this.prototype), c(n, "constructor", {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }), t(e, this, !0), arguments.length && this.inject.apply(e, arguments), e.base = r, e
                    }
                }, !0).inject({
                    inject: function() {
                        for (var e = 0, n = arguments.length; e < n; e++) {
                            var i = arguments[e];
                            i && t(this, i, i.enumerable, i.beans, i.preserve)
                        }
                        return this
                    },
                    extend: function() {
                        var t = h(this);
                        return t.inject.apply(t, arguments)
                    },
                    each: function(t, n) {
                        return e(this, t, n)
                    },
                    set: function() {
                        return n(this, arguments, 0)
                    },
                    clone: function() {
                        return new this.constructor(this)
                    },
                    statics: {
                        each: e,
                        create: h,
                        define: c,
                        describe: u,
                        set: function(t) {
                            return n(t, arguments, 1)
                        },
                        clone: function(t) {
                            return n(new t.constructor, arguments, 0)
                        },
                        isPlainObject: function(t) {
                            var e = null != t && t.constructor;
                            return e && (e === Object || e === o || "Object" === e.name)
                        },
                        pick: function(t, e) {
                            return t !== r ? t : e
                        }
                    }
                })
            };
            "undefined" != typeof e && (e.exports = o), o.inject({
                toString: function() {
                    return null != this._id ? (this._class || "Object") + (this._name ? " '" + this._name + "'" : " @" + this._id) : "{ " + o.each(this, function(t, e) {
                        if (!/^_/.test(e)) {
                            var n = typeof t;
                            this.push(e + ": " + ("number" === n ? c.instance.number(t) : "string" === n ? "'" + t + "'" : t))
                        }
                    }, []).join(", ") + " }"
                },
                getClassName: function() {
                    return this._class || ""
                },
                importJSON: function(t) {
                    return o.importJSON(t, this)
                },
                exportJSON: function(t) {
                    return o.exportJSON(this, t)
                },
                toJSON: function() {
                    return o.serialize(this)
                },
                _set: function(t) {
                    if (t && o.isPlainObject(t)) return o.filter(this, t)
                },
                statics: {
                    exports: {
                        enumerable: !0
                    },
                    extend: function t() {
                        var e = t.base.apply(this, arguments),
                            n = e.prototype._class;
                        return n && !o.exports[n] && (o.exports[n] = e), e
                    },
                    equals: function(t, e) {
                        if (t === e) return !0;
                        if (t && t.equals) return t.equals(e);
                        if (e && e.equals) return e.equals(t);
                        if (t && e && "object" == typeof t && "object" == typeof e) {
                            if (Array.isArray(t) && Array.isArray(e)) {
                                var n = t.length;
                                if (n !== e.length) return !1;
                                for (; n--;)
                                    if (!o.equals(t[n], e[n])) return !1
                            } else {
                                var i = Object.keys(t),
                                    n = i.length;
                                if (n !== Object.keys(e).length) return !1;
                                for (; n--;) {
                                    var r = i[n];
                                    if (!e.hasOwnProperty(r) || !o.equals(t[r], e[r])) return !1
                                }
                            }
                            return !0
                        }
                        return !1
                    },
                    read: function(t, e, n, i) {
                        if (this === o) {
                            var s = this.peek(t, e);
                            return t.__index++, s
                        }
                        var a = this.prototype,
                            h = a._readIndex,
                            u = e || h && t.__index || 0;
                        i || (i = t.length - u);
                        var l = t[u];
                        return l instanceof this || n && n.readNull && null == l && i <= 1 ? (h && (t.__index = u + 1), l && n && n.clone ? l.clone() : l) : (l = o.create(this.prototype), h && (l.__read = !0), l = l.initialize.apply(l, u > 0 || i < t.length ? Array.prototype.slice.call(t, u, u + i) : t) || l, h && (t.__index = u + l.__read, l.__read = r), l)
                    },
                    peek: function(t, e) {
                        return t[t.__index = e || t.__index || 0]
                    },
                    remain: function(t) {
                        return t.length - (t.__index || 0)
                    },
                    readAll: function(t, e, n) {
                        for (var i, r = [], s = e || 0, a = t.length; s < a; s++) r.push(Array.isArray(i = t[s]) ? this.read(i, 0, n) : this.read(t, s, n, 1));
                        return r
                    },
                    readNamed: function(t, e, n, i, s) {
                        var a = this.getNamed(t, e),
                            h = a !== r;
                        if (h) {
                            var u = t._filtered;
                            u || (u = t._filtered = o.create(t[0]), u._filtering = t[0]), u[e] = r
                        }
                        return this.read(h ? [a] : t, n, i, s)
                    },
                    getNamed: function(t, e) {
                        var n = t[0];
                        if (t._hasObject === r && (t._hasObject = 1 === t.length && o.isPlainObject(n)), t._hasObject) return e ? n[e] : t._filtered || n
                    },
                    hasNamed: function(t, e) {
                        return !!this.getNamed(t, e)
                    },
                    filter: function(t, e, n) {
                        for (var i = Object.keys(e._filtering || e), s = 0, a = i.length; s < a; s++) {
                            var o = i[s];
                            if (!n || !n[o]) {
                                var h = e[o];
                                h !== r && (t[o] = h)
                            }
                        }
                        return t
                    },
                    isPlainValue: function(t, e) {
                        return this.isPlainObject(t) || Array.isArray(t) || e && "string" == typeof t
                    },
                    serialize: function(t, e, n, i) {
                        e = e || {};
                        var r, s = !i;
                        if (s && (e.formatter = new c(e.precision), i = {
                                length: 0,
                                definitions: {},
                                references: {},
                                add: function(t, e) {
                                    var n = "#" + t._id,
                                        i = this.references[n];
                                    if (!i) {
                                        this.length++;
                                        var r = e.call(t),
                                            s = t._class;
                                        s && r[0] !== s && r.unshift(s), this.definitions[n] = r, i = this.references[n] = [n]
                                    }
                                    return i
                                }
                            }), t && t._serialize) {
                            r = t._serialize(e, i);
                            var a = t._class;
                            !a || t._compactSerialize || !s && n || r[0] === a || r.unshift(a)
                        } else if (Array.isArray(t)) {
                            r = [];
                            for (var h = 0, u = t.length; h < u; h++) r[h] = o.serialize(t[h], e, n, i)
                        } else if (o.isPlainObject(t)) {
                            r = {};
                            for (var l = Object.keys(t), h = 0, u = l.length; h < u; h++) {
                                var d = l[h];
                                r[d] = o.serialize(t[d], e, n, i)
                            }
                        } else r = "number" == typeof t ? e.formatter.number(t, e.precision) : t;
                        return s && i.length > 0 ? [
                            ["dictionary", i.definitions], r
                        ] : r
                    },
                    deserialize: function(t, e, n, i, r) {
                        var s = t,
                            a = !n,
                            h = a && t && t.length && "dictionary" === t[0][0];
                        if (n = n || {}, Array.isArray(t)) {
                            var u = t[0],
                                l = "dictionary" === u;
                            if (1 == t.length && /^#/.test(u)) return n.dictionary[u];
                            u = o.exports[u], s = [];
                            for (var c = u ? 1 : 0, d = t.length; c < d; c++) s.push(o.deserialize(t[c], e, n, l, h));
                            if (u) {
                                var f = s;
                                e ? s = e(u, f, a || r) : (s = o.create(u.prototype), u.apply(s, f))
                            }
                        } else if (o.isPlainObject(t)) {
                            s = {}, i && (n.dictionary = s);
                            for (var _ in t) s[_] = o.deserialize(t[_], e, n)
                        }
                        return h ? s[1] : s
                    },
                    exportJSON: function(t, e) {
                        var n = o.serialize(t, e);
                        return e && e.asString === !1 ? n : JSON.stringify(n)
                    },
                    importJSON: function(t, e) {
                        return o.deserialize("string" == typeof t ? JSON.parse(t) : t, function(t, n, i) {
                            var r = i && e && e.constructor === t,
                                s = r ? e : o.create(t.prototype);
                            if (1 === n.length && s instanceof S && (r || !(s instanceof k))) {
                                var a = n[0];
                                o.isPlainObject(a) && (a.insert = !1)
                            }
                            return (r ? s._set : t).apply(s, n), r && (e = null), s
                        })
                    },
                    splice: function(t, e, n, i) {
                        var s = e && e.length,
                            a = n === r;
                        n = a ? t.length : n, n > t.length && (n = t.length);
                        for (var o = 0; o < s; o++) e[o]._index = n + o;
                        if (a) return t.push.apply(t, e), [];
                        var h = [n, i];
                        e && h.push.apply(h, e);
                        for (var u = t.splice.apply(t, h), o = 0, l = u.length; o < l; o++) u[o]._index = r;
                        for (var o = n + s, l = t.length; o < l; o++) t[o]._index = o;
                        return u
                    },
                    capitalize: function(t) {
                        return t.replace(/\b[a-z]/g, function(t) {
                            return t.toUpperCase()
                        })
                    },
                    camelize: function(t) {
                        return t.replace(/-(.)/g, function(t, e) {
                            return e.toUpperCase()
                        })
                    },
                    hyphenate: function(t) {
                        return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
                    }
                }
            });
            var h = {
                    on: function(t, e) {
                        if ("string" != typeof t) o.each(t, function(t, e) {
                            this.on(e, t)
                        }, this);
                        else {
                            var n = this._eventTypes,
                                i = n && n[t],
                                r = this._callbacks = this._callbacks || {};
                            r = r[t] = r[t] || [], r.indexOf(e) === -1 && (r.push(e), i && i.install && 1 === r.length && i.install.call(this, t))
                        }
                        return this
                    },
                    off: function(t, e) {
                        if ("string" != typeof t) return void o.each(t, function(t, e) {
                            this.off(e, t)
                        }, this);
                        var n, i = this._eventTypes,
                            r = i && i[t],
                            s = this._callbacks && this._callbacks[t];
                        return s && (!e || (n = s.indexOf(e)) !== -1 && 1 === s.length ? (r && r.uninstall && r.uninstall.call(this, t), delete this._callbacks[t]) : n !== -1 && s.splice(n, 1)), this
                    },
                    once: function(t, e) {
                        return this.on(t, function() {
                            e.apply(this, arguments), this.off(t, e)
                        })
                    },
                    emit: function(t, e) {
                        var n = this._callbacks && this._callbacks[t];
                        if (!n) return !1;
                        var i = [].slice.call(arguments, 1),
                            r = e && e.target && !e.currentTarget;
                        n = n.slice(), r && (e.currentTarget = this);
                        for (var s = 0, a = n.length; s < a; s++)
                            if (n[s].apply(this, i) === !1) {
                                e && e.stop && e.stop();
                                break
                            } return r && delete e.currentTarget, !0
                    },
                    responds: function(t) {
                        return !(!this._callbacks || !this._callbacks[t])
                    },
                    attach: "#on",
                    detach: "#off",
                    fire: "#emit",
                    _installEvents: function(t) {
                        var e = this._eventTypes,
                            n = this._callbacks,
                            i = t ? "install" : "uninstall";
                        if (e)
                            for (var r in n)
                                if (n[r].length > 0) {
                                    var s = e[r],
                                        a = s && s[i];
                                    a && a.call(this, r)
                                }
                    },
                    statics: {
                        inject: function t(e) {
                            var n = e._events;
                            if (n) {
                                var i = {};
                                o.each(n, function(t, n) {
                                    var r = "string" == typeof t,
                                        s = r ? t : n,
                                        a = o.capitalize(s),
                                        h = s.substring(2).toLowerCase();
                                    i[h] = r ? {} : t, s = "_" + s, e["get" + a] = function() {
                                        return this[s]
                                    }, e["set" + a] = function(t) {
                                        var e = this[s];
                                        e && this.off(h, e), t && this.on(h, t), this[s] = t
                                    }
                                }), e._eventTypes = i
                            }
                            return t.base.apply(this, arguments)
                        }
                    }
                },
                u = o.extend({
                    _class: "PaperScope",
                    initialize: function t() {
                        i = this, this.settings = new o({
                            applyMatrix: !0,
                            insertItems: !0,
                            handleSize: 4,
                            hitTolerance: 0
                        }), this.project = null, this.projects = [], this.tools = [], this.palettes = [], this._id = t._id++, t._scopes[this._id] = this;
                        var e = t.prototype;
                        if (!this.support) {
                            var r = it.getContext(1, 1) || {};
                            e.support = {
                                nativeDash: "setLineDash" in r || "mozDash" in r,
                                nativeBlendModes: rt.nativeModes
                            }, it.release(r)
                        }
                        if (!this.agent) {
                            var s = n.navigator.userAgent.toLowerCase(),
                                a = (/(darwin|win|mac|linux|freebsd|sunos)/.exec(s) || [])[0],
                                h = "darwin" === a ? "mac" : a,
                                u = e.agent = e.browser = {
                                    platform: h
                                };
                            h && (u[h] = !0), s.replace(/(opera|chrome|safari|webkit|firefox|msie|trident|atom|node)\/?\s*([.\d]+)(?:.*version\/([.\d]+))?(?:.*rv\:v?([.\d]+))?/g, function(t, e, n, i, r) {
                                if (!u.chrome) {
                                    var s = "opera" === e ? i : /^(node|trident)$/.test(e) ? r : n;
                                    u.version = s, u.versionNumber = parseFloat(s), e = "trident" === e ? "msie" : e, u.name = e, u[e] = !0
                                }
                            }), u.chrome && delete u.webkit, u.atom && delete u.chrome
                        }
                    },
                    version: "0.10.2",
                    getView: function() {
                        var t = this.project;
                        return t && t._view
                    },
                    getPaper: function() {
                        return this
                    },
                    execute: function(t, e) {
                        i.PaperScript.execute(t, this, e), Z.updateFocus()
                    },
                    install: function(t) {
                        var e = this;
                        o.each(["project", "view", "tool"], function(n) {
                            o.define(t, n, {
                                configurable: !0,
                                get: function() {
                                    return e[n]
                                }
                            })
                        });
                        for (var n in this) !/^_/.test(n) && this[n] && (t[n] = this[n])
                    },
                    setup: function(t) {
                        return i = this, this.project = new b(t), this
                    },
                    createCanvas: function(t, e) {
                        return it.getCanvas(t, e)
                    },
                    activate: function() {
                        i = this
                    },
                    clear: function() {
                        for (var t = this.projects, e = this.tools, n = this.palettes, i = t.length - 1; i >= 0; i--) t[i].remove();
                        for (var i = e.length - 1; i >= 0; i--) e[i].remove();
                        for (var i = n.length - 1; i >= 0; i--) n[i].remove()
                    },
                    remove: function() {
                        this.clear(), delete u._scopes[this._id]
                    },
                    statics: new function() {
                        function t(t) {
                            return t += "Attribute",
                                function(e, n) {
                                    return e[t](n) || e[t]("data-paper-" + n)
                                }
                        }
                        return {
                            _scopes: {},
                            _id: 0,
                            get: function(t) {
                                return this._scopes[t] || null
                            },
                            getAttribute: t("get"),
                            hasAttribute: t("has")
                        }
                    }
                }),
                l = o.extend(h, {
                    initialize: function(t) {
                        this._scope = i, this._index = this._scope[this._list].push(this) - 1, !t && this._scope[this._reference] || this.activate()
                    },
                    activate: function() {
                        if (!this._scope) return !1;
                        var t = this._scope[this._reference];
                        return t && t !== this && t.emit("deactivate"), this._scope[this._reference] = this, this.emit("activate", t), !0
                    },
                    isActive: function() {
                        return this._scope[this._reference] === this
                    },
                    remove: function() {
                        return null != this._index && (o.splice(this._scope[this._list], null, this._index, 1), this._scope[this._reference] == this && (this._scope[this._reference] = null), this._scope = null, !0)
                    },
                    getView: function() {
                        return this._scope.getView()
                    }
                }),
                c = o.extend({
                    initialize: function(t) {
                        this.precision = o.pick(t, 5), this.multiplier = Math.pow(10, this.precision)
                    },
                    number: function(t) {
                        return this.precision < 16 ? Math.round(t * this.multiplier) / this.multiplier : t
                    },
                    pair: function(t, e, n) {
                        return this.number(t) + (n || ",") + this.number(e)
                    },
                    point: function(t, e) {
                        return this.number(t.x) + (e || ",") + this.number(t.y)
                    },
                    size: function(t, e) {
                        return this.number(t.width) + (e || ",") + this.number(t.height)
                    },
                    rectangle: function(t, e) {
                        return this.point(t, e) + (e || ",") + this.size(t, e)
                    }
                });
            c.instance = new c;
            var d = new function() {
                    function t(t, e, n) {
                        return t < e ? e : t > n ? n : t
                    }

                    function e(t, e, n) {
                        function i(t) {
                            var e = 134217729 * t,
                                n = t - e,
                                i = n + e,
                                r = t - i;
                            return [i, r]
                        }
                        var r = e * e - t * n,
                            a = e * e + t * n;
                        if (3 * s(r) < a) {
                            var o = i(t),
                                h = i(e),
                                u = i(n),
                                l = e * e,
                                c = h[0] * h[0] - l + 2 * h[0] * h[1] + h[1] * h[1],
                                d = t * n,
                                f = o[0] * u[0] - d + o[0] * u[1] + o[1] * u[0] + o[1] * u[1];
                            r = l - d + (c - f)
                        }
                        return r
                    }

                    function n() {
                        var t = Math.max.apply(Math, arguments);
                        return t && (t < 1e-8 || t > 1e8) ? o(2, -Math.round(h(t))) : 0
                    }
                    var i = [
                            [.5773502691896257],
                            [0, .7745966692414834],
                            [.33998104358485626, .8611363115940526],
                            [0, .5384693101056831, .906179845938664],
                            [.2386191860831969, .6612093864662645, .932469514203152],
                            [0, .4058451513773972, .7415311855993945, .9491079123427585],
                            [.1834346424956498, .525532409916329, .7966664774136267, .9602898564975363],
                            [0, .3242534234038089, .6133714327005904, .8360311073266358, .9681602395076261],
                            [.14887433898163122, .4333953941292472, .6794095682990244, .8650633666889845, .9739065285171717],
                            [0, .26954315595234496, .5190961292068118, .7301520055740494, .8870625997680953, .978228658146057],
                            [.1252334085114689, .3678314989981802, .5873179542866175, .7699026741943047, .9041172563704749, .9815606342467192],
                            [0, .2304583159551348, .44849275103644687, .6423493394403402, .8015780907333099, .9175983992229779, .9841830547185881],
                            [.10805494870734367, .31911236892788974, .5152486363581541, .6872929048116855, .827201315069765, .9284348836635735, .9862838086968123],
                            [0, .20119409399743451, .3941513470775634, .5709721726085388, .7244177313601701, .8482065834104272, .937273392400706, .9879925180204854],
                            [.09501250983763744, .2816035507792589, .45801677765722737, .6178762444026438, .755404408355003, .8656312023878318, .9445750230732326, .9894009349916499]
                        ],
                        r = [
                            [1],
                            [.8888888888888888, .5555555555555556],
                            [.6521451548625461, .34785484513745385],
                            [.5688888888888889, .47862867049936647, .23692688505618908],
                            [.46791393457269104, .3607615730481386, .17132449237917036],
                            [.4179591836734694, .3818300505051189, .27970539148927664, .1294849661688697],
                            [.362683783378362, .31370664587788727, .22238103445337448, .10122853629037626],
                            [.3302393550012598, .31234707704000286, .26061069640293544, .1806481606948574, .08127438836157441],
                            [.29552422471475287, .26926671930999635, .21908636251598204, .1494513491505806, .06667134430868814],
                            [.2729250867779006, .26280454451024665, .23319376459199048, .18629021092773426, .1255803694649046, .05566856711617366],
                            [.24914704581340277, .2334925365383548, .20316742672306592, .16007832854334622, .10693932599531843, .04717533638651183],
                            [.2325515532308739, .22628318026289723, .2078160475368885, .17814598076194574, .13887351021978725, .09212149983772845, .04048400476531588],
                            [.2152638534631578, .2051984637212956, .18553839747793782, .15720316715819355, .12151857068790319, .08015808715976021, .03511946033175186],
                            [.2025782419255613, .19843148532711158, .1861610000155622, .16626920581699392, .13957067792615432, .10715922046717194, .07036604748810812, .03075324199611727],
                            [.1894506104550685, .18260341504492358, .16915651939500254, .14959598881657674, .12462897125553388, .09515851168249279, .062253523938647894, .027152459411754096]
                        ],
                        s = Math.abs,
                        a = Math.sqrt,
                        o = Math.pow,
                        h = Math.log2 || function(t) {
                            return Math.log(t) * Math.LOG2E
                        },
                        u = 1e-12,
                        l = 1.12e-16;
                    return {
                        TOLERANCE: 1e-6,
                        EPSILON: u,
                        MACHINE_EPSILON: l,
                        CURVETIME_EPSILON: 4e-7,
                        GEOMETRIC_EPSILON: 2e-7,
                        WINDING_EPSILON: 2e-7,
                        TRIGONOMETRIC_EPSILON: 1e-7,
                        CLIPPING_EPSILON: 1e-9,
                        KAPPA: 4 * (a(2) - 1) / 3,
                        isZero: function(t) {
                            return t >= -u && t <= u
                        },
                        clamp: t,
                        integrate: function(t, e, n, s) {
                            for (var a = i[s - 2], o = r[s - 2], h = .5 * (n - e), u = h + e, l = 0, c = s + 1 >> 1, d = 1 & s ? o[l++] * t(u) : 0; l < c;) {
                                var f = h * a[l];
                                d += o[l++] * (t(u + f) + t(u - f))
                            }
                            return h * d
                        },
                        findRoot: function(t, e, n, i, r, a, o) {
                            for (var h = 0; h < a; h++) {
                                var u = t(n),
                                    l = u / e(n),
                                    c = n - l;
                                if (s(l) < o) return c;
                                u > 0 ? (r = n, n = c <= i ? .5 * (i + r) : c) : (i = n, n = c >= r ? .5 * (i + r) : c)
                            }
                            return n
                        },
                        solveQuadratic: function(i, r, o, h, c, d) {
                            var f, _ = 1 / 0;
                            if (s(i) < u) {
                                if (s(r) < u) return s(o) < u ? -1 : 0;
                                f = -o / r
                            } else {
                                r *= -.5;
                                var g = e(i, r, o);
                                if (g && s(g) < l) {
                                    var v = n(s(i), s(r), s(o));
                                    v && (i *= v, r *= v, o *= v, g = e(i, r, o))
                                }
                                if (g >= -l) {
                                    var p = g < 0 ? 0 : a(g),
                                        m = r + (r < 0 ? -p : p);
                                    0 === m ? (f = o / i, _ = -f) : (f = m / i, _ = o / m)
                                }
                            }
                            var y = 0,
                                w = null == c,
                                x = c - u,
                                b = d + u;
                            return isFinite(f) && (w || f > x && f < b) && (h[y++] = w ? f : t(f, c, d)), _ !== f && isFinite(_) && (w || _ > x && _ < b) && (h[y++] = w ? _ : t(_, c, d)), y
                        },
                        solveCubic: function(e, i, r, h, c, f, _) {
                            function g(t) {
                                v = t;
                                var n = e * v;
                                p = n + i, m = p * v + r, y = (n + p) * v + m, w = m * v + h
                            }
                            var v, p, m, y, w, x = n(s(e), s(i), s(r), s(h));
                            if (x && (e *= x, i *= x, r *= x, h *= x), s(e) < u) e = i, p = r, m = h, v = 1 / 0;
                            else if (s(h) < u) p = i, m = r, v = 0;
                            else {
                                g(-(i / e) / 3);
                                var b = w / e,
                                    S = o(s(b), 1 / 3),
                                    C = b < 0 ? -1 : 1,
                                    k = -y / e,
                                    M = k > 0 ? 1.324717957244746 * Math.max(S, a(k)) : S,
                                    P = v - C * M;
                                if (P !== v) {
                                    do g(P), P = 0 === y ? v : v - w / y / (1 + l); while (C * P > C * v);
                                    s(e) * v * v > s(h / v) && (m = -h / v, p = (m - r) / v)
                                }
                            }
                            var O = d.solveQuadratic(e, p, m, c, f, _),
                                T = null == f;
                            return isFinite(v) && (0 === O || O > 0 && v !== c[0] && v !== c[1]) && (T || v > f - u && v < _ + u) && (c[O++] = T ? v : t(v, f, _)), O
                        }
                    }
                },
                f = {
                    _id: 1,
                    _pools: {},
                    get: function(t) {
                        if (t) {
                            var e = this._pools[t];
                            return e || (e = this._pools[t] = {
                                _id: 1
                            }), e._id++
                        }
                        return this._id++
                    }
                },
                _ = o.extend({
                    _class: "Point",
                    _readIndex: !0,
                    initialize: function(t, e) {
                        var n = typeof t;
                        if ("number" === n) {
                            var i = "number" == typeof e;
                            this.x = t, this.y = i ? e : t, this.__read && (this.__read = i ? 2 : 1)
                        } else if ("undefined" === n || null === t) this.x = this.y = 0, this.__read && (this.__read = null === t ? 1 : 0);
                        else {
                            var r = "string" === n ? t.split(/[\s,]+/) || [] : t;
                            Array.isArray(r) ? (this.x = r[0], this.y = r.length > 1 ? r[1] : r[0]) : "x" in r ? (this.x = r.x, this.y = r.y) : "width" in r ? (this.x = r.width, this.y = r.height) : "angle" in r ? (this.x = r.length, this.y = 0, this.setAngle(r.angle)) : (this.x = this.y = 0, this.__read && (this.__read = 0)), this.__read && (this.__read = 1)
                        }
                    },
                    set: function(t, e) {
                        return this.x = t, this.y = e, this
                    },
                    equals: function(t) {
                        return this === t || t && (this.x === t.x && this.y === t.y || Array.isArray(t) && this.x === t[0] && this.y === t[1]) || !1
                    },
                    clone: function() {
                        return new _(this.x, this.y)
                    },
                    toString: function() {
                        var t = c.instance;
                        return "{ x: " + t.number(this.x) + ", y: " + t.number(this.y) + " }"
                    },
                    _serialize: function(t) {
                        var e = t.formatter;
                        return [e.number(this.x), e.number(this.y)]
                    },
                    getLength: function() {
                        return Math.sqrt(this.x * this.x + this.y * this.y)
                    },
                    setLength: function(t) {
                        if (this.isZero()) {
                            var e = this._angle || 0;
                            this.set(Math.cos(e) * t, Math.sin(e) * t)
                        } else {
                            var n = t / this.getLength();
                            d.isZero(n) && this.getAngle(), this.set(this.x * n, this.y * n)
                        }
                    },
                    getAngle: function() {
                        return 180 * this.getAngleInRadians.apply(this, arguments) / Math.PI
                    },
                    setAngle: function(t) {
                        this.setAngleInRadians.call(this, t * Math.PI / 180)
                    },
                    getAngleInDegrees: "#getAngle",
                    setAngleInDegrees: "#setAngle",
                    getAngleInRadians: function() {
                        if (arguments.length) {
                            var t = _.read(arguments),
                                e = this.getLength() * t.getLength();
                            if (d.isZero(e)) return NaN;
                            var n = this.dot(t) / e;
                            return Math.acos(n < -1 ? -1 : n > 1 ? 1 : n)
                        }
                        return this.isZero() ? this._angle || 0 : this._angle = Math.atan2(this.y, this.x)
                    },
                    setAngleInRadians: function(t) {
                        if (this._angle = t, !this.isZero()) {
                            var e = this.getLength();
                            this.set(Math.cos(t) * e, Math.sin(t) * e)
                        }
                    },
                    getQuadrant: function() {
                        return this.x >= 0 ? this.y >= 0 ? 1 : 4 : this.y >= 0 ? 2 : 3
                    }
                }, {
                    beans: !1,
                    getDirectedAngle: function() {
                        var t = _.read(arguments);
                        return 180 * Math.atan2(this.cross(t), this.dot(t)) / Math.PI
                    },
                    getDistance: function() {
                        var t = _.read(arguments),
                            e = t.x - this.x,
                            n = t.y - this.y,
                            i = e * e + n * n,
                            r = o.read(arguments);
                        return r ? i : Math.sqrt(i)
                    },
                    normalize: function(t) {
                        t === r && (t = 1);
                        var e = this.getLength(),
                            n = 0 !== e ? t / e : 0,
                            i = new _(this.x * n, this.y * n);
                        return n >= 0 && (i._angle = this._angle), i
                    },
                    rotate: function(t, e) {
                        if (0 === t) return this.clone();
                        t = t * Math.PI / 180;
                        var n = e ? this.subtract(e) : this,
                            i = Math.sin(t),
                            r = Math.cos(t);
                        return n = new _(n.x * r - n.y * i, n.x * i + n.y * r), e ? n.add(e) : n
                    },
                    transform: function(t) {
                        return t ? t._transformPoint(this) : this
                    },
                    add: function() {
                        var t = _.read(arguments);
                        return new _(this.x + t.x, this.y + t.y)
                    },
                    subtract: function() {
                        var t = _.read(arguments);
                        return new _(this.x - t.x, this.y - t.y)
                    },
                    multiply: function() {
                        var t = _.read(arguments);
                        return new _(this.x * t.x, this.y * t.y)
                    },
                    divide: function() {
                        var t = _.read(arguments);
                        return new _(this.x / t.x, this.y / t.y)
                    },
                    modulo: function() {
                        var t = _.read(arguments);
                        return new _(this.x % t.x, this.y % t.y)
                    },
                    negate: function() {
                        return new _((-this.x), (-this.y))
                    },
                    isInside: function() {
                        return m.read(arguments).contains(this)
                    },
                    isClose: function() {
                        var t = _.read(arguments),
                            e = o.read(arguments);
                        return this.getDistance(t) <= e
                    },
                    isCollinear: function() {
                        var t = _.read(arguments);
                        return _.isCollinear(this.x, this.y, t.x, t.y)
                    },
                    isColinear: "#isCollinear",
                    isOrthogonal: function() {
                        var t = _.read(arguments);
                        return _.isOrthogonal(this.x, this.y, t.x, t.y)
                    },
                    isZero: function() {
                        return d.isZero(this.x) && d.isZero(this.y)
                    },
                    isNaN: function() {
                        return isNaN(this.x) || isNaN(this.y)
                    },
                    dot: function() {
                        var t = _.read(arguments);
                        return this.x * t.x + this.y * t.y
                    },
                    cross: function() {
                        var t = _.read(arguments);
                        return this.x * t.y - this.y * t.x
                    },
                    project: function() {
                        var t = _.read(arguments),
                            e = t.isZero() ? 0 : this.dot(t) / t.dot(t);
                        return new _(t.x * e, t.y * e)
                    },
                    statics: {
                        min: function() {
                            var t = _.read(arguments),
                                e = _.read(arguments);
                            return new _(Math.min(t.x, e.x), Math.min(t.y, e.y))
                        },
                        max: function() {
                            var t = _.read(arguments),
                                e = _.read(arguments);
                            return new _(Math.max(t.x, e.x), Math.max(t.y, e.y))
                        },
                        random: function() {
                            return new _(Math.random(), Math.random())
                        },
                        isCollinear: function(t, e, n, i) {
                            return Math.abs(t * i - e * n) <= 1e-7 * Math.sqrt((t * t + e * e) * (n * n + i * i))
                        },
                        isOrthogonal: function(t, e, n, i) {
                            return Math.abs(t * n + e * i) <= 1e-7 * Math.sqrt((t * t + e * e) * (n * n + i * i))
                        }
                    }
                }, o.each(["round", "ceil", "floor", "abs"], function(t) {
                    var e = Math[t];
                    this[t] = function() {
                        return new _(e(this.x), e(this.y))
                    }
                }, {})),
                g = _.extend({
                    initialize: function(t, e, n, i) {
                        this._x = t, this._y = e, this._owner = n, this._setter = i
                    },
                    set: function(t, e, n) {
                        return this._x = t, this._y = e, n || this._owner[this._setter](this), this
                    },
                    getX: function() {
                        return this._x
                    },
                    setX: function(t) {
                        this._x = t, this._owner[this._setter](this)
                    },
                    getY: function() {
                        return this._y
                    },
                    setY: function(t) {
                        this._y = t, this._owner[this._setter](this)
                    },
                    isSelected: function() {
                        return !!(this._owner._selection & this._getSelection())
                    },
                    setSelected: function(t) {
                        this._owner.changeSelection(this._getSelection(), t)
                    },
                    _getSelection: function() {
                        return "setPosition" === this._setter ? 4 : 0
                    }
                }),
                v = o.extend({
                    _class: "Size",
                    _readIndex: !0,
                    initialize: function(t, e) {
                        var n = typeof t;
                        if ("number" === n) {
                            var i = "number" == typeof e;
                            this.width = t, this.height = i ? e : t, this.__read && (this.__read = i ? 2 : 1)
                        } else if ("undefined" === n || null === t) this.width = this.height = 0, this.__read && (this.__read = null === t ? 1 : 0);
                        else {
                            var r = "string" === n ? t.split(/[\s,]+/) || [] : t;
                            Array.isArray(r) ? (this.width = r[0], this.height = r.length > 1 ? r[1] : r[0]) : "width" in r ? (this.width = r.width, this.height = r.height) : "x" in r ? (this.width = r.x, this.height = r.y) : (this.width = this.height = 0, this.__read && (this.__read = 0)), this.__read && (this.__read = 1)
                        }
                    },
                    set: function(t, e) {
                        return this.width = t, this.height = e, this
                    },
                    equals: function(t) {
                        return t === this || t && (this.width === t.width && this.height === t.height || Array.isArray(t) && this.width === t[0] && this.height === t[1]) || !1
                    },
                    clone: function() {
                        return new v(this.width, this.height)
                    },
                    toString: function() {
                        var t = c.instance;
                        return "{ width: " + t.number(this.width) + ", height: " + t.number(this.height) + " }"
                    },
                    _serialize: function(t) {
                        var e = t.formatter;
                        return [e.number(this.width), e.number(this.height)]
                    },
                    add: function() {
                        var t = v.read(arguments);
                        return new v(this.width + t.width, this.height + t.height)
                    },
                    subtract: function() {
                        var t = v.read(arguments);
                        return new v(this.width - t.width, this.height - t.height)
                    },
                    multiply: function() {
                        var t = v.read(arguments);
                        return new v(this.width * t.width, this.height * t.height)
                    },
                    divide: function() {
                        var t = v.read(arguments);
                        return new v(this.width / t.width, this.height / t.height)
                    },
                    modulo: function() {
                        var t = v.read(arguments);
                        return new v(this.width % t.width, this.height % t.height)
                    },
                    negate: function() {
                        return new v((-this.width), (-this.height))
                    },
                    isZero: function() {
                        return d.isZero(this.width) && d.isZero(this.height)
                    },
                    isNaN: function() {
                        return isNaN(this.width) || isNaN(this.height)
                    },
                    statics: {
                        min: function(t, e) {
                            return new v(Math.min(t.width, e.width), Math.min(t.height, e.height))
                        },
                        max: function(t, e) {
                            return new v(Math.max(t.width, e.width), Math.max(t.height, e.height))
                        },
                        random: function() {
                            return new v(Math.random(), Math.random())
                        }
                    }
                }, o.each(["round", "ceil", "floor", "abs"], function(t) {
                    var e = Math[t];
                    this[t] = function() {
                        return new v(e(this.width), e(this.height))
                    }
                }, {})),
                p = v.extend({
                    initialize: function(t, e, n, i) {
                        this._width = t, this._height = e, this._owner = n, this._setter = i
                    },
                    set: function(t, e, n) {
                        return this._width = t, this._height = e, n || this._owner[this._setter](this), this
                    },
                    getWidth: function() {
                        return this._width
                    },
                    setWidth: function(t) {
                        this._width = t, this._owner[this._setter](this)
                    },
                    getHeight: function() {
                        return this._height
                    },
                    setHeight: function(t) {
                        this._height = t, this._owner[this._setter](this)
                    }
                }),
                m = o.extend({
                    _class: "Rectangle",
                    _readIndex: !0,
                    beans: !0,
                    initialize: function(t, e, n, i) {
                        var s = typeof t,
                            a = 0;
                        if ("number" === s ? (this.x = t, this.y = e, this.width = n, this.height = i, a = 4) : "undefined" === s || null === t ? (this.x = this.y = this.width = this.height = 0, a = null === t ? 1 : 0) : 1 === arguments.length && (Array.isArray(t) ? (this.x = t[0], this.y = t[1], this.width = t[2], this.height = t[3], a = 1) : t.x !== r || t.width !== r ? (this.x = t.x || 0, this.y = t.y || 0, this.width = t.width || 0, this.height = t.height || 0, a = 1) : t.from === r && t.to === r && (this.x = this.y = this.width = this.height = 0, this._set(t), a = 1)), !a) {
                            var h = _.readNamed(arguments, "from"),
                                u = o.peek(arguments);
                            if (this.x = h.x, this.y = h.y, u && u.x !== r || o.hasNamed(arguments, "to")) {
                                var l = _.readNamed(arguments, "to");
                                this.width = l.x - h.x, this.height = l.y - h.y, this.width < 0 && (this.x = l.x, this.width = -this.width), this.height < 0 && (this.y = l.y, this.height = -this.height)
                            } else {
                                var c = v.read(arguments);
                                this.width = c.width, this.height = c.height
                            }
                            a = arguments.__index
                        }
                        this.__read && (this.__read = a)
                    },
                    set: function(t, e, n, i) {
                        return this.x = t, this.y = e, this.width = n, this.height = i, this
                    },
                    clone: function() {
                        return new m(this.x, this.y, this.width, this.height)
                    },
                    equals: function(t) {
                        var e = o.isPlainValue(t) ? m.read(arguments) : t;
                        return e === this || e && this.x === e.x && this.y === e.y && this.width === e.width && this.height === e.height || !1
                    },
                    toString: function() {
                        var t = c.instance;
                        return "{ x: " + t.number(this.x) + ", y: " + t.number(this.y) + ", width: " + t.number(this.width) + ", height: " + t.number(this.height) + " }"
                    },
                    _serialize: function(t) {
                        var e = t.formatter;
                        return [e.number(this.x), e.number(this.y), e.number(this.width), e.number(this.height)]
                    },
                    getPoint: function(t) {
                        var e = t ? _ : g;
                        return new e(this.x, this.y, this, "setPoint")
                    },
                    setPoint: function() {
                        var t = _.read(arguments);
                        this.x = t.x, this.y = t.y
                    },
                    getSize: function(t) {
                        var e = t ? v : p;
                        return new e(this.width, this.height, this, "setSize")
                    },
                    setSize: function() {
                        var t = v.read(arguments);
                        this._fixX && (this.x += (this.width - t.width) * this._fixX), this._fixY && (this.y += (this.height - t.height) * this._fixY), this.width = t.width, this.height = t.height, this._fixW = 1, this._fixH = 1
                    },
                    getLeft: function() {
                        return this.x
                    },
                    setLeft: function(t) {
                        this._fixW || (this.width -= t - this.x), this.x = t, this._fixX = 0
                    },
                    getTop: function() {
                        return this.y
                    },
                    setTop: function(t) {
                        this._fixH || (this.height -= t - this.y), this.y = t, this._fixY = 0
                    },
                    getRight: function() {
                        return this.x + this.width
                    },
                    setRight: function(t) {
                        this._fixX !== r && 1 !== this._fixX && (this._fixW = 0), this._fixW ? this.x = t - this.width : this.width = t - this.x, this._fixX = 1
                    },
                    getBottom: function() {
                        return this.y + this.height
                    },
                    setBottom: function(t) {
                        this._fixY !== r && 1 !== this._fixY && (this._fixH = 0), this._fixH ? this.y = t - this.height : this.height = t - this.y, this._fixY = 1
                    },
                    getCenterX: function() {
                        return this.x + .5 * this.width
                    },
                    setCenterX: function(t) {
                        this.x = t - .5 * this.width, this._fixX = .5
                    },
                    getCenterY: function() {
                        return this.y + .5 * this.height
                    },
                    setCenterY: function(t) {
                        this.y = t - .5 * this.height, this._fixY = .5
                    },
                    getCenter: function(t) {
                        var e = t ? _ : g;
                        return new e(this.getCenterX(), this.getCenterY(), this, "setCenter")
                    },
                    setCenter: function() {
                        var t = _.read(arguments);
                        return this.setCenterX(t.x), this.setCenterY(t.y), this
                    },
                    getArea: function() {
                        return this.width * this.height
                    },
                    isEmpty: function() {
                        return 0 === this.width || 0 === this.height
                    },
                    contains: function(t) {
                        return t && t.width !== r || 4 === (Array.isArray(t) ? t : arguments).length ? this._containsRectangle(m.read(arguments)) : this._containsPoint(_.read(arguments))
                    },
                    _containsPoint: function(t) {
                        var e = t.x,
                            n = t.y;
                        return e >= this.x && n >= this.y && e <= this.x + this.width && n <= this.y + this.height
                    },
                    _containsRectangle: function(t) {
                        var e = t.x,
                            n = t.y;
                        return e >= this.x && n >= this.y && e + t.width <= this.x + this.width && n + t.height <= this.y + this.height
                    },
                    intersects: function() {
                        var t = m.read(arguments);
                        return t.x + t.width > this.x && t.y + t.height > this.y && t.x < this.x + this.width && t.y < this.y + this.height
                    },
                    touches: function() {
                        var t = m.read(arguments);
                        return t.x + t.width >= this.x && t.y + t.height >= this.y && t.x <= this.x + this.width && t.y <= this.y + this.height
                    },
                    intersect: function() {
                        var t = m.read(arguments),
                            e = Math.max(this.x, t.x),
                            n = Math.max(this.y, t.y),
                            i = Math.min(this.x + this.width, t.x + t.width),
                            r = Math.min(this.y + this.height, t.y + t.height);
                        return new m(e, n, i - e, r - n)
                    },
                    unite: function() {
                        var t = m.read(arguments),
                            e = Math.min(this.x, t.x),
                            n = Math.min(this.y, t.y),
                            i = Math.max(this.x + this.width, t.x + t.width),
                            r = Math.max(this.y + this.height, t.y + t.height);
                        return new m(e, n, i - e, r - n)
                    },
                    include: function() {
                        var t = _.read(arguments),
                            e = Math.min(this.x, t.x),
                            n = Math.min(this.y, t.y),
                            i = Math.max(this.x + this.width, t.x),
                            r = Math.max(this.y + this.height, t.y);
                        return new m(e, n, i - e, r - n)
                    },
                    expand: function() {
                        var t = v.read(arguments),
                            e = t.width,
                            n = t.height;
                        return new m(this.x - e / 2, this.y - n / 2, this.width + e, this.height + n)
                    },
                    scale: function(t, e) {
                        return this.expand(this.width * t - this.width, this.height * (e === r ? t : e) - this.height)
                    }
                }, o.each([
                    ["Top", "Left"],
                    ["Top", "Right"],
                    ["Bottom", "Left"],
                    ["Bottom", "Right"],
                    ["Left", "Center"],
                    ["Top", "Center"],
                    ["Right", "Center"],
                    ["Bottom", "Center"]
                ], function(t, e) {
                    var n = t.join(""),
                        i = /^[RL]/.test(n);
                    e >= 4 && (t[1] += i ? "Y" : "X");
                    var r = t[i ? 0 : 1],
                        s = t[i ? 1 : 0],
                        a = "get" + r,
                        o = "get" + s,
                        h = "set" + r,
                        u = "set" + s,
                        l = "get" + n,
                        c = "set" + n;
                    this[l] = function(t) {
                        var e = t ? _ : g;
                        return new e(this[a](), this[o](), this, c)
                    }, this[c] = function() {
                        var t = _.read(arguments);
                        this[h](t.x), this[u](t.y)
                    }
                }, {
                    beans: !0
                })),
                y = m.extend({
                    initialize: function(t, e, n, i, r, s) {
                        this.set(t, e, n, i, !0), this._owner = r, this._setter = s
                    },
                    set: function(t, e, n, i, r) {
                        return this._x = t, this._y = e, this._width = n, this._height = i, r || this._owner[this._setter](this), this
                    }
                }, new function() {
                    var t = m.prototype;
                    return o.each(["x", "y", "width", "height"], function(t) {
                        var e = o.capitalize(t),
                            n = "_" + t;
                        this["get" + e] = function() {
                            return this[n]
                        }, this["set" + e] = function(t) {
                            this[n] = t, this._dontNotify || this._owner[this._setter](this)
                        }
                    }, o.each(["Point", "Size", "Center", "Left", "Top", "Right", "Bottom", "CenterX", "CenterY", "TopLeft", "TopRight", "BottomLeft", "BottomRight", "LeftCenter", "TopCenter", "RightCenter", "BottomCenter"], function(e) {
                        var n = "set" + e;
                        this[n] = function() {
                            this._dontNotify = !0, t[n].apply(this, arguments), this._dontNotify = !1, this._owner[this._setter](this)
                        }
                    }, {
                        isSelected: function() {
                            return !!(2 & this._owner._selection)
                        },
                        setSelected: function(t) {
                            var e = this._owner;
                            e.changeSelection && e.changeSelection(2, t)
                        }
                    }))
                }),
                w = o.extend({
                    _class: "Matrix",
                    initialize: function t(e) {
                        var n = arguments.length,
                            i = !0;
                        if (6 === n ? this.set.apply(this, arguments) : 1 === n ? e instanceof t ? this.set(e._a, e._b, e._c, e._d, e._tx, e._ty) : Array.isArray(e) ? this.set.apply(this, e) : i = !1 : 0 === n ? this.reset() : i = !1, !i) throw new Error("Unsupported matrix parameters")
                    },
                    set: function(t, e, n, i, r, s, a) {
                        return this._a = t, this._b = e, this._c = n, this._d = i, this._tx = r, this._ty = s, a || this._changed(), this
                    },
                    _serialize: function(t, e) {
                        return o.serialize(this.getValues(), t, !0, e)
                    },
                    _changed: function() {
                        var t = this._owner;
                        t && (t._applyMatrix ? t.transform(null, !0) : t._changed(9))
                    },
                    clone: function() {
                        return new w(this._a, this._b, this._c, this._d, this._tx, this._ty)
                    },
                    equals: function(t) {
                        return t === this || t && this._a === t._a && this._b === t._b && this._c === t._c && this._d === t._d && this._tx === t._tx && this._ty === t._ty
                    },
                    toString: function() {
                        var t = c.instance;
                        return "[[" + [t.number(this._a), t.number(this._c), t.number(this._tx)].join(", ") + "], [" + [t.number(this._b), t.number(this._d), t.number(this._ty)].join(", ") + "]]"
                    },
                    reset: function(t) {
                        return this._a = this._d = 1, this._b = this._c = this._tx = this._ty = 0, t || this._changed(), this
                    },
                    apply: function(t, e) {
                        var n = this._owner;
                        return !!n && (n.transform(null, !0, o.pick(t, !0), e), this.isIdentity())
                    },
                    translate: function() {
                        var t = _.read(arguments),
                            e = t.x,
                            n = t.y;
                        return this._tx += e * this._a + n * this._c, this._ty += e * this._b + n * this._d, this._changed(), this
                    },
                    scale: function() {
                        var t = _.read(arguments),
                            e = _.read(arguments, 0, {
                                readNull: !0
                            });
                        return e && this.translate(e), this._a *= t.x, this._b *= t.x, this._c *= t.y, this._d *= t.y, e && this.translate(e.negate()), this._changed(), this
                    },
                    rotate: function(t) {
                        t *= Math.PI / 180;
                        var e = _.read(arguments, 1),
                            n = e.x,
                            i = e.y,
                            r = Math.cos(t),
                            s = Math.sin(t),
                            a = n - n * r + i * s,
                            o = i - n * s - i * r,
                            h = this._a,
                            u = this._b,
                            l = this._c,
                            c = this._d;
                        return this._a = r * h + s * l, this._b = r * u + s * c, this._c = -s * h + r * l, this._d = -s * u + r * c, this._tx += a * h + o * l, this._ty += a * u + o * c, this._changed(), this
                    },
                    shear: function() {
                        var t = _.read(arguments),
                            e = _.read(arguments, 0, {
                                readNull: !0
                            });
                        e && this.translate(e);
                        var n = this._a,
                            i = this._b;
                        return this._a += t.y * this._c, this._b += t.y * this._d, this._c += t.x * n, this._d += t.x * i, e && this.translate(e.negate()), this._changed(), this
                    },
                    skew: function() {
                        var t = _.read(arguments),
                            e = _.read(arguments, 0, {
                                readNull: !0
                            }),
                            n = Math.PI / 180,
                            i = new _(Math.tan(t.x * n), Math.tan(t.y * n));
                        return this.shear(i, e)
                    },
                    append: function(t) {
                        if (t) {
                            var e = this._a,
                                n = this._b,
                                i = this._c,
                                r = this._d,
                                s = t._a,
                                a = t._c,
                                o = t._b,
                                h = t._d,
                                u = t._tx,
                                l = t._ty;
                            this._a = s * e + o * i, this._c = a * e + h * i, this._b = s * n + o * r, this._d = a * n + h * r, this._tx += u * e + l * i, this._ty += u * n + l * r, this._changed()
                        }
                        return this
                    },
                    prepend: function(t) {
                        if (t) {
                            var e = this._a,
                                n = this._b,
                                i = this._c,
                                r = this._d,
                                s = this._tx,
                                a = this._ty,
                                o = t._a,
                                h = t._c,
                                u = t._b,
                                l = t._d,
                                c = t._tx,
                                d = t._ty;
                            this._a = o * e + h * n, this._c = o * i + h * r, this._b = u * e + l * n, this._d = u * i + l * r, this._tx = o * s + h * a + c, this._ty = u * s + l * a + d, this._changed()
                        }
                        return this
                    },
                    appended: function(t) {
                        return this.clone().append(t)
                    },
                    prepended: function(t) {
                        return this.clone().prepend(t)
                    },
                    invert: function() {
                        var t = this._a,
                            e = this._b,
                            n = this._c,
                            i = this._d,
                            r = this._tx,
                            s = this._ty,
                            a = t * i - e * n,
                            o = null;
                        return a && !isNaN(a) && isFinite(r) && isFinite(s) && (this._a = i / a, this._b = -e / a, this._c = -n / a, this._d = t / a, this._tx = (n * s - i * r) / a, this._ty = (e * r - t * s) / a, o = this), o
                    },
                    inverted: function() {
                        return this.clone().invert()
                    },
                    concatenate: "#append",
                    preConcatenate: "#prepend",
                    chain: "#appended",
                    _shiftless: function() {
                        return new w(this._a, this._b, this._c, this._d, 0, 0)
                    },
                    _orNullIfIdentity: function() {
                        return this.isIdentity() ? null : this
                    },
                    isIdentity: function() {
                        return 1 === this._a && 0 === this._b && 0 === this._c && 1 === this._d && 0 === this._tx && 0 === this._ty
                    },
                    isInvertible: function() {
                        var t = this._a * this._d - this._c * this._b;
                        return t && !isNaN(t) && isFinite(this._tx) && isFinite(this._ty)
                    },
                    isSingular: function() {
                        return !this.isInvertible()
                    },
                    transform: function(t, e, n) {
                        return arguments.length < 3 ? this._transformPoint(_.read(arguments)) : this._transformCoordinates(t, e, n)
                    },
                    _transformPoint: function(t, e, n) {
                        var i = t.x,
                            r = t.y;
                        return e || (e = new _), e.set(i * this._a + r * this._c + this._tx, i * this._b + r * this._d + this._ty, n)
                    },
                    _transformCoordinates: function(t, e, n) {
                        for (var i = 0, r = 2 * n; i < r; i += 2) {
                            var s = t[i],
                                a = t[i + 1];
                            e[i] = s * this._a + a * this._c + this._tx, e[i + 1] = s * this._b + a * this._d + this._ty
                        }
                        return e
                    },
                    _transformCorners: function(t) {
                        var e = t.x,
                            n = t.y,
                            i = e + t.width,
                            r = n + t.height,
                            s = [e, n, i, n, i, r, e, r];
                        return this._transformCoordinates(s, s, 4)
                    },
                    _transformBounds: function(t, e, n) {
                        for (var i = this._transformCorners(t), r = i.slice(0, 2), s = r.slice(), a = 2; a < 8; a++) {
                            var o = i[a],
                                h = 1 & a;
                            o < r[h] ? r[h] = o : o > s[h] && (s[h] = o)
                        }
                        return e || (e = new m), e.set(r[0], r[1], s[0] - r[0], s[1] - r[1], n)
                    },
                    inverseTransform: function() {
                        return this._inverseTransform(_.read(arguments))
                    },
                    _inverseTransform: function(t, e, n) {
                        var i = this._a,
                            r = this._b,
                            s = this._c,
                            a = this._d,
                            o = this._tx,
                            h = this._ty,
                            u = i * a - r * s,
                            l = null;
                        if (u && !isNaN(u) && isFinite(o) && isFinite(h)) {
                            var c = t.x - this._tx,
                                d = t.y - this._ty;
                            e || (e = new _), l = e.set((c * a - d * s) / u, (d * i - c * r) / u, n)
                        }
                        return l
                    },
                    decompose: function() {
                        var t, e, n, i = this._a,
                            r = this._b,
                            s = this._c,
                            a = this._d,
                            o = i * a - r * s,
                            h = Math.sqrt,
                            u = Math.atan2,
                            l = 180 / Math.PI;
                        if (0 !== i || 0 !== r) {
                            var c = h(i * i + r * r);
                            t = Math.acos(i / c) * (r > 0 ? 1 : -1), e = [c, o / c], n = [u(i * s + r * a, c * c), 0]
                        } else if (0 !== s || 0 !== a) {
                            var d = h(s * s + a * a);
                            t = Math.asin(s / d) * (a > 0 ? 1 : -1), e = [o / d, d], n = [0, u(i * s + r * a, d * d)]
                        } else t = 0, n = e = [0, 0];
                        return {
                            translation: this.getTranslation(),
                            rotation: t * l,
                            scaling: new _(e),
                            skewing: new _(n[0] * l, n[1] * l)
                        }
                    },
                    getValues: function() {
                        return [this._a, this._b, this._c, this._d, this._tx, this._ty]
                    },
                    getTranslation: function() {
                        return new _(this._tx, this._ty)
                    },
                    getScaling: function() {
                        return (this.decompose() || {}).scaling
                    },
                    getRotation: function() {
                        return (this.decompose() || {}).rotation
                    },
                    applyToContext: function(t) {
                        this.isIdentity() || t.transform(this._a, this._b, this._c, this._d, this._tx, this._ty)
                    }
                }, o.each(["a", "b", "c", "d", "tx", "ty"], function(t) {
                    var e = o.capitalize(t),
                        n = "_" + t;
                    this["get" + e] = function() {
                        return this[n]
                    }, this["set" + e] = function(t) {
                        this[n] = t, this._changed()
                    }
                }, {})),
                x = o.extend({
                    _class: "Line",
                    initialize: function(t, e, n, i, r) {
                        var s = !1;
                        arguments.length >= 4 ? (this._px = t, this._py = e, this._vx = n, this._vy = i, s = r) : (this._px = t.x, this._py = t.y, this._vx = e.x, this._vy = e.y, s = n), s || (this._vx -= this._px, this._vy -= this._py)
                    },
                    getPoint: function() {
                        return new _(this._px, this._py)
                    },
                    getVector: function() {
                        return new _(this._vx, this._vy)
                    },
                    getLength: function() {
                        return this.getVector().getLength()
                    },
                    intersect: function(t, e) {
                        return x.intersect(this._px, this._py, this._vx, this._vy, t._px, t._py, t._vx, t._vy, !0, e)
                    },
                    getSide: function(t, e) {
                        return x.getSide(this._px, this._py, this._vx, this._vy, t.x, t.y, !0, e)
                    },
                    getDistance: function(t) {
                        return Math.abs(x.getSignedDistance(this._px, this._py, this._vx, this._vy, t.x, t.y, !0))
                    },
                    isCollinear: function(t) {
                        return _.isCollinear(this._vx, this._vy, t._vx, t._vy)
                    },
                    isOrthogonal: function(t) {
                        return _.isOrthogonal(this._vx, this._vy, t._vx, t._vy)
                    },
                    statics: {
                        intersect: function(t, e, n, i, r, s, a, o, h, u) {
                            h || (n -= t, i -= e, a -= r, o -= s);
                            var l = n * o - i * a;
                            if (!d.isZero(l)) {
                                var c = t - r,
                                    f = e - s,
                                    g = (a * f - o * c) / l,
                                    v = (n * f - i * c) / l,
                                    p = 1e-12,
                                    m = -p,
                                    y = 1 + p;
                                if (u || m < g && g < y && m < v && v < y) return u || (g = g <= 0 ? 0 : g >= 1 ? 1 : g), new _(t + g * n, e + g * i)
                            }
                        },
                        getSide: function(t, e, n, i, r, s, a, o) {
                            a || (n -= t, i -= e);
                            var h = r - t,
                                u = s - e,
                                l = h * i - u * n;
                            return 0 !== l || o || (l = (h * n + h * n) / (n * n + i * i), l >= 0 && l <= 1 && (l = 0)), l < 0 ? -1 : l > 0 ? 1 : 0
                        },
                        getSignedDistance: function(t, e, n, i, r, s, a) {
                            return a || (n -= t, i -= e), 0 === n ? i > 0 ? r - t : t - r : 0 === i ? n < 0 ? s - e : e - s : ((r - t) * i - (s - e) * n) / Math.sqrt(n * n + i * i)
                        }
                    }
                }),
                b = l.extend({
                    _class: "Project",
                    _list: "projects",
                    _reference: "project",
                    _compactSerialize: !0,
                    initialize: function(t) {
                        l.call(this, !0), this._children = [], this._namedChildren = {}, this._activeLayer = null, this._currentStyle = new q(null, null, this), this._view = Z.create(this, t || it.getCanvas(1, 1)), this._selectionItems = {}, this._selectionCount = 0, this._updateVersion = 0
                    },
                    _serialize: function(t, e) {
                        return o.serialize(this._children, t, !0, e)
                    },
                    _changed: function(t, e) {
                        if (1 & t) {
                            var n = this._view;
                            n && (n._needsUpdate = !0, !n._requested && n._autoUpdate && n.requestUpdate())
                        }
                        var i = this._changes;
                        if (i && e) {
                            var r = this._changesById,
                                s = e._id,
                                a = r[s];
                            a ? a.flags |= t : i.push(r[s] = {
                                item: e,
                                flags: t
                            })
                        }
                    },
                    clear: function() {
                        for (var t = this._children, e = t.length - 1; e >= 0; e--) t[e].remove()
                    },
                    isEmpty: function() {
                        return 0 === this._children.length
                    },
                    remove: function t() {
                        return !!t.base.call(this) && (this._view && this._view.remove(), !0)
                    },
                    getView: function() {
                        return this._view
                    },
                    getCurrentStyle: function() {
                        return this._currentStyle
                    },
                    setCurrentStyle: function(t) {
                        this._currentStyle.initialize(t)
                    },
                    getIndex: function() {
                        return this._index
                    },
                    getOptions: function() {
                        return this._scope.settings
                    },
                    getLayers: function() {
                        return this._children
                    },
                    getActiveLayer: function() {
                        return this._activeLayer || new k({
                            project: this,
                            insert: !0
                        })
                    },
                    getSymbolDefinitions: function() {
                        var t = [],
                            e = {};
                        return this.getItems({
                            class: O,
                            match: function(n) {
                                var i = n._definition,
                                    r = i._id;
                                return e[r] || (e[r] = !0, t.push(i)), !1
                            }
                        }), t
                    },
                    getSymbols: "getSymbolDefinitions",
                    getSelectedItems: function() {
                        var t = this._selectionItems,
                            e = [];
                        for (var n in t) {
                            var i = t[n],
                                r = i._selection;
                            1 & r && i.isInserted() ? e.push(i) : r || this._updateSelection(i)
                        }
                        return e
                    },
                    _updateSelection: function(t) {
                        var e = t._id,
                            n = this._selectionItems;
                        t._selection ? n[e] !== t && (this._selectionCount++, n[e] = t) : n[e] === t && (this._selectionCount--, delete n[e])
                    },
                    selectAll: function() {
                        for (var t = this._children, e = 0, n = t.length; e < n; e++) t[e].setFullySelected(!0)
                    },
                    deselectAll: function() {
                        var t = this._selectionItems;
                        for (var e in t) t[e].setFullySelected(!1)
                    },
                    addLayer: function(t) {
                        return this.insertLayer(r, t)
                    },
                    insertLayer: function(t, e) {
                        if (e instanceof k) {
                            e._remove(!1, !0), o.splice(this._children, [e], t, 0), e._setProject(this, !0);
                            var n = e._name;
                            n && e.setName(n), this._changes && e._changed(5), this._activeLayer || (this._activeLayer = e)
                        } else e = null;
                        return e
                    },
                    _insertItem: function(t, e, n, i) {
                        return e = this.insertLayer(t, e) || (this._activeLayer || this._insertItem(r, new k(S.NO_INSERT), !0, !0)).insertChild(t, e, n), i && e.activate && e.activate(), e
                    },
                    getItems: function(t) {
                        return S._getItems(this, t)
                    },
                    getItem: function(t) {
                        return S._getItems(this, t, null, null, !0)[0] || null
                    },
                    importJSON: function(t) {
                        this.activate();
                        var e = this._activeLayer;
                        return o.importJSON(t, e && e.isEmpty() && e)
                    },
                    removeOn: function(t) {
                        var e = this._removeSets;
                        if (e) {
                            "mouseup" === t && (e.mousedrag = null);
                            var n = e[t];
                            if (n) {
                                for (var i in n) {
                                    var r = n[i];
                                    for (var s in e) {
                                        var a = e[s];
                                        a && a != n && delete a[r._id]
                                    }
                                    r.remove()
                                }
                                e[t] = null
                            }
                        }
                    },
                    draw: function(t, e, n) {
                        this._updateVersion++, t.save(), e.applyToContext(t);
                        for (var i = this._children, r = new o({
                                offset: new _(0, 0),
                                pixelRatio: n,
                                viewMatrix: e.isIdentity() ? null : e,
                                matrices: [new w],
                                updateMatrix: !0
                            }), s = 0, a = i.length; s < a; s++) i[s].draw(t, r);
                        if (t.restore(), this._selectionCount > 0) {
                            t.save(), t.strokeWidth = 1;
                            var h = this._selectionItems,
                                u = this._scope.settings.handleSize,
                                l = this._updateVersion;
                            for (var c in h) h[c]._drawSelection(t, e, u, h, l);
                            t.restore()
                        }
                    }
                }),
                S = o.extend(h, {
                    statics: {
                        extend: function t(e) {
                            return e._serializeFields && (e._serializeFields = o.set({}, this.prototype._serializeFields, e._serializeFields)), t.base.apply(this, arguments)
                        },
                        NO_INSERT: {
                            insert: !1
                        }
                    },
                    _class: "Item",
                    _name: null,
                    _applyMatrix: !0,
                    _canApplyMatrix: !0,
                    _canScaleStroke: !1,
                    _pivot: null,
                    _visible: !0,
                    _blendMode: "normal",
                    _opacity: 1,
                    _locked: !1,
                    _guide: !1,
                    _clipMask: !1,
                    _selection: 0,
                    _selectBounds: !0,
                    _selectChildren: !1,
                    _serializeFields: {
                        name: null,
                        applyMatrix: null,
                        matrix: new w,
                        pivot: null,
                        visible: !0,
                        blendMode: "normal",
                        opacity: 1,
                        locked: !1,
                        guide: !1,
                        clipMask: !1,
                        selected: !1,
                        data: {}
                    }
                }, new function() {
                    var t = ["onMouseDown", "onMouseUp", "onMouseDrag", "onClick", "onDoubleClick", "onMouseMove", "onMouseEnter", "onMouseLeave"];
                    return o.each(t, function(t) {
                        this._events[t] = {
                            install: function(t) {
                                this.getView()._countItemEvent(t, 1)
                            },
                            uninstall: function(t) {
                                this.getView()._countItemEvent(t, -1)
                            }
                        }
                    }, {
                        _events: {
                            onFrame: {
                                install: function() {
                                    this.getView()._animateItem(this, !0)
                                },
                                uninstall: function() {
                                    this.getView()._animateItem(this, !1)
                                }
                            },
                            onLoad: {},
                            onError: {}
                        },
                        statics: {
                            _itemHandlers: t
                        }
                    })
                }, {
                    initialize: function() {},
                    _initialize: function(t, e) {
                        var n = t && o.isPlainObject(t),
                            s = n && t.internal === !0,
                            a = this._matrix = new w,
                            h = n && t.project || i.project,
                            u = i.settings;
                        return this._id = s ? null : f.get(), this._parent = this._index = null, this._applyMatrix = this._canApplyMatrix && u.applyMatrix, e && a.translate(e), a._owner = this, this._style = new q(h._currentStyle, this, h), s || n && t.insert === !1 || !u.insertItems && (!n || t.insert !== !0) ? this._setProject(h) : (n && t.parent || h)._insertItem(r, this, !0, !0), n && t !== S.NO_INSERT && o.filter(this, t, {
                            internal: !0,
                            insert: !0,
                            project: !0,
                            parent: !0
                        }), n
                    },
                    _serialize: function(t, e) {
                        function n(n) {
                            for (var s in n) {
                                var a = r[s];
                                o.equals(a, "leading" === s ? 1.2 * n.fontSize : n[s]) || (i[s] = o.serialize(a, t, "data" !== s, e))
                            }
                        }
                        var i = {},
                            r = this;
                        return n(this._serializeFields), this instanceof C || n(this._style._defaults), [this._class, i]
                    },
                    _changed: function(t) {
                        var e = this._symbol,
                            n = this._parent || e,
                            i = this._project;
                        8 & t && (this._bounds = this._position = this._decomposed = this._globalMatrix = r), n && 40 & t && S._clearBoundsCache(n), 2 & t && S._clearBoundsCache(this), i && i._changed(t, this), e && e._changed(t)
                    },
                    set: function(t) {
                        return t && this._set(t), this
                    },
                    getId: function() {
                        return this._id
                    },
                    getName: function() {
                        return this._name
                    },
                    setName: function(t) {
                        if (this._name && this._removeNamed(), t === +t + "") throw new Error("Names consisting only of numbers are not supported.");
                        var e = this._getOwner();
                        if (t && e) {
                            var n = e._children,
                                i = e._namedChildren;
                            (i[t] = i[t] || []).push(this), t in n || (n[t] = this)
                        }
                        this._name = t || r, this._changed(128)
                    },
                    getStyle: function() {
                        return this._style
                    },
                    setStyle: function(t) {
                        this.getStyle().set(t)
                    }
                }, o.each(["locked", "visible", "blendMode", "opacity", "guide"], function(t) {
                    var e = o.capitalize(t),
                        t = "_" + t;
                    this["get" + e] = function() {
                        return this[t]
                    }, this["set" + e] = function(e) {
                        e != this[t] && (this[t] = e, this._changed("_locked" === t ? 128 : 129))
                    }
                }, {}), {
                    beans: !0,
                    getSelection: function() {
                        return this._selection
                    },
                    setSelection: function(t) {
                        if (t !== this._selection) {
                            this._selection = t;
                            var e = this._project;
                            e && (e._updateSelection(this), this._changed(129))
                        }
                    },
                    changeSelection: function(t, e) {
                        var n = this._selection;
                        this.setSelection(e ? n | t : n & ~t)
                    },
                    isSelected: function() {
                        if (this._selectChildren)
                            for (var t = this._children, e = 0, n = t.length; e < n; e++)
                                if (t[e].isSelected()) return !0;
                        return !!(1 & this._selection)
                    },
                    setSelected: function(t) {
                        if (this._selectChildren)
                            for (var e = this._children, n = 0, i = e.length; n < i; n++) e[n].setSelected(t);
                        this.changeSelection(1, t)
                    },
                    isFullySelected: function() {
                        var t = this._children,
                            e = !!(1 & this._selection);
                        if (t && e) {
                            for (var n = 0, i = t.length; n < i; n++)
                                if (!t[n].isFullySelected()) return !1;
                            return !0
                        }
                        return e
                    },
                    setFullySelected: function(t) {
                        var e = this._children;
                        if (e)
                            for (var n = 0, i = e.length; n < i; n++) e[n].setFullySelected(t);
                        this.changeSelection(1, t)
                    },
                    isClipMask: function() {
                        return this._clipMask
                    },
                    setClipMask: function(t) {
                        this._clipMask != (t = !!t) && (this._clipMask = t, t && (this.setFillColor(null), this.setStrokeColor(null)), this._changed(129), this._parent && this._parent._changed(1024))
                    },
                    getData: function() {
                        return this._data || (this._data = {}), this._data
                    },
                    setData: function(t) {
                        this._data = t
                    },
                    getPosition: function(t) {
                        var e = this._position,
                            n = t ? _ : g;
                        if (!e) {
                            var i = this._pivot;
                            e = this._position = i ? this._matrix._transformPoint(i) : this.getBounds().getCenter(!0)
                        }
                        return new n(e.x, e.y, this, "setPosition")
                    },
                    setPosition: function() {
                        this.translate(_.read(arguments).subtract(this.getPosition(!0)))
                    },
                    getPivot: function(t) {
                        var e = this._pivot;
                        if (e) {
                            var n = t ? _ : g;
                            e = new n(e.x, e.y, this, "setPivot")
                        }
                        return e
                    },
                    setPivot: function() {
                        this._pivot = _.read(arguments, 0, {
                            clone: !0,
                            readNull: !0
                        }), this._position = r
                    }
                }, o.each({
                    getStrokeBounds: {
                        stroke: !0
                    },
                    getHandleBounds: {
                        handle: !0
                    },
                    getInternalBounds: {
                        internal: !0
                    }
                }, function(t, e) {
                    this[e] = function(e) {
                        return this.getBounds(e, t)
                    }
                }, {
                    beans: !0,
                    getBounds: function(t, e) {
                        var n = e || t instanceof w,
                            i = o.set({}, n ? e : t, this._boundsOptions);
                        i.stroke && !this.getStrokeScaling() || (i.cacheItem = this);
                        var r = this._getCachedBounds(n && t, i);
                        return 0 === arguments.length ? new y(r.x, r.y, r.width, r.height, this, "setBounds") : r
                    },
                    setBounds: function() {
                        var t = m.read(arguments),
                            e = this.getBounds(),
                            n = this._matrix,
                            i = new w,
                            r = t.getCenter();
                        i.translate(r), t.width == e.width && t.height == e.height || (n.isInvertible() || (n.initialize(n._backup || (new w).translate(n.getTranslation())), e = this.getBounds()), i.scale(0 !== e.width ? t.width / e.width : 0, 0 !== e.height ? t.height / e.height : 0)), r = e.getCenter(), i.translate(-r.x, -r.y), this.transform(i)
                    },
                    _getBounds: function(t, e) {
                        var n = this._children;
                        return n && 0 !== n.length ? (S._updateBoundsCache(this, e.cacheItem), S._getBounds(n, t, e)) : new m
                    },
                    _getCachedBounds: function(t, e) {
                        t = t && t._orNullIfIdentity();
                        var n = e.internal,
                            i = e.cacheItem,
                            r = n ? null : this._matrix._orNullIfIdentity(),
                            s = i && (!t || t.equals(r)) && [e.stroke ? 1 : 0, e.handle ? 1 : 0, n ? 1 : 0].join("");
                        if (S._updateBoundsCache(this._parent || this._symbol, i), s && this._bounds && s in this._bounds) return this._bounds[s].rect.clone();
                        var a = this._getBounds(t || r, e);
                        if (s) {
                            this._bounds || (this._bounds = {});
                            this._bounds[s] = {
                                rect: a.clone(),
                                internal: e.internal
                            }
                        }
                        return a
                    },
                    _getStrokeMatrix: function(t, e) {
                        var n = this.getStrokeScaling() ? null : e && e.internal ? this : this._parent || this._symbol && this._symbol._item,
                            i = n ? n.getViewMatrix().invert() : t;
                        return i && i._shiftless()
                    },
                    statics: {
                        _updateBoundsCache: function(t, e) {
                            if (t && e) {
                                var n = e._id,
                                    i = t._boundsCache = t._boundsCache || {
                                        ids: {},
                                        list: []
                                    };
                                i.ids[n] || (i.list.push(e), i.ids[n] = e)
                            }
                        },
                        _clearBoundsCache: function(t) {
                            var e = t._boundsCache;
                            if (e) {
                                t._bounds = t._position = t._boundsCache = r;
                                for (var n = 0, i = e.list, s = i.length; n < s; n++) {
                                    var a = i[n];
                                    a !== t && (a._bounds = a._position = r, a._boundsCache && S._clearBoundsCache(a))
                                }
                            }
                        },
                        _getBounds: function(t, e, n) {
                            var i = 1 / 0,
                                r = -i,
                                s = i,
                                a = r;
                            n = n || {};
                            for (var o = 0, h = t.length; o < h; o++) {
                                var u = t[o];
                                if (u._visible && !u.isEmpty()) {
                                    var l = u._getCachedBounds(e && e.appended(u._matrix), n);
                                    i = Math.min(l.x, i), s = Math.min(l.y, s), r = Math.max(l.x + l.width, r), a = Math.max(l.y + l.height, a)
                                }
                            }
                            return isFinite(i) ? new m(i, s, r - i, a - s) : new m
                        }
                    }
                }), {
                    beans: !0,
                    _decompose: function() {
                        return this._decomposed || (this._decomposed = this._matrix.decompose())
                    },
                    getRotation: function() {
                        var t = this._decompose();
                        return t && t.rotation
                    },
                    setRotation: function(t) {
                        var e = this.getRotation();
                        null != e && null != t && this.rotate(t - e)
                    },
                    getScaling: function(t) {
                        var e = this._decompose(),
                            n = e && e.scaling,
                            i = t ? _ : g;
                        return n && new i(n.x, n.y, this, "setScaling")
                    },
                    setScaling: function() {
                        var t = this.getScaling(),
                            e = _.read(arguments, 0, {
                                clone: !0,
                                readNull: !0
                            });
                        t && e && this.scale(e.x / t.x, e.y / t.y)
                    },
                    getMatrix: function() {
                        return this._matrix
                    },
                    setMatrix: function() {
                        var t = this._matrix;
                        t.initialize.apply(t, arguments)
                    },
                    getGlobalMatrix: function(t) {
                        var e = this._globalMatrix,
                            n = this._project._updateVersion;
                        if (e && e._updateVersion !== n && (e = null), !e) {
                            e = this._globalMatrix = this._matrix.clone();
                            var i = this._parent;
                            i && e.prepend(i.getGlobalMatrix(!0)), e._updateVersion = n
                        }
                        return t ? e : e.clone()
                    },
                    getViewMatrix: function() {
                        return this.getGlobalMatrix().prepend(this.getView()._matrix)
                    },
                    getApplyMatrix: function() {
                        return this._applyMatrix
                    },
                    setApplyMatrix: function(t) {
                        (this._applyMatrix = this._canApplyMatrix && !!t) && this.transform(null, !0)
                    },
                    getTransformContent: "#getApplyMatrix",
                    setTransformContent: "#setApplyMatrix"
                }, {
                    getProject: function() {
                        return this._project
                    },
                    _setProject: function(t, e) {
                        if (this._project !== t) {
                            this._project && this._installEvents(!1), this._project = t;
                            for (var n = this._children, i = 0, r = n && n.length; i < r; i++) n[i]._setProject(t);
                            e = !0
                        }
                        e && this._installEvents(!0)
                    },
                    getView: function() {
                        return this._project._view
                    },
                    _installEvents: function t(e) {
                        t.base.call(this, e);
                        for (var n = this._children, i = 0, r = n && n.length; i < r; i++) n[i]._installEvents(e)
                    },
                    getLayer: function() {
                        for (var t = this; t = t._parent;)
                            if (t instanceof k) return t;
                        return null
                    },
                    getParent: function() {
                        return this._parent
                    },
                    setParent: function(t) {
                        return t.addChild(this)
                    },
                    _getOwner: "#getParent",
                    getChildren: function() {
                        return this._children
                    },
                    setChildren: function(t, e) {
                        this.removeChildren(), this.addChildren(t, e)
                    },
                    getFirstChild: function() {
                        return this._children && this._children[0] || null
                    },
                    getLastChild: function() {
                        return this._children && this._children[this._children.length - 1] || null
                    },
                    getNextSibling: function() {
                        var t = this._getOwner();
                        return t && t._children[this._index + 1] || null
                    },
                    getPreviousSibling: function() {
                        var t = this._getOwner();
                        return t && t._children[this._index - 1] || null
                    },
                    getIndex: function() {
                        return this._index
                    },
                    equals: function(t) {
                        return t === this || t && this._class === t._class && this._style.equals(t._style) && this._matrix.equals(t._matrix) && this._locked === t._locked && this._visible === t._visible && this._blendMode === t._blendMode && this._opacity === t._opacity && this._clipMask === t._clipMask && this._guide === t._guide && this._equals(t) || !1
                    },
                    _equals: function(t) {
                        return o.equals(this._children, t._children)
                    },
                    clone: function(t) {
                        var e = new this.constructor(S.NO_INSERT),
                            n = this._children,
                            i = o.pick(t ? t.insert : r, t === r || t === !0),
                            s = o.pick(t ? t.deep : r, !0);
                        n && e.copyAttributes(this), n && !s || e.copyContent(this), n || e.copyAttributes(this), i && e.insertAbove(this);
                        var a = this._name,
                            h = this._parent;
                        if (a && h) {
                            for (var n = h._children, u = a, l = 1; n[a];) a = u + " " + l++;
                            a !== u && e.setName(a)
                        }
                        return e
                    },
                    copyContent: function(t) {
                        for (var e = t._children, n = 0, i = e && e.length; n < i; n++) this.addChild(e[n].clone(!1), !0)
                    },
                    copyAttributes: function(t, e) {
                        this.setStyle(t._style);
                        for (var n = ["_locked", "_visible", "_blendMode", "_opacity", "_clipMask", "_guide"], i = 0, r = n.length; i < r; i++) {
                            var s = n[i];
                            t.hasOwnProperty(s) && (this[s] = t[s])
                        }
                        e || this._matrix.initialize(t._matrix), this.setApplyMatrix(t._applyMatrix), this.setPivot(t._pivot), this.setSelection(t._selection);
                        var a = t._data,
                            h = t._name;
                        this._data = a ? o.clone(a) : null, h && this.setName(h)
                    },
                    rasterize: function(t, e) {
                        var n = this.getStrokeBounds(),
                            i = (t || this.getView().getResolution()) / 72,
                            s = n.getTopLeft().floor(),
                            a = n.getBottomRight().ceil(),
                            h = new v(a.subtract(s)),
                            u = new P(S.NO_INSERT);
                        if (!h.isZero()) {
                            var l = it.getCanvas(h.multiply(i)),
                                c = l.getContext("2d"),
                                d = (new w).scale(i).translate(s.negate());
                            c.save(), d.applyToContext(c), this.draw(c, new o({
                                matrices: [d]
                            })), c.restore(), u.setCanvas(l)
                        }
                        return u.transform((new w).translate(s.add(h.divide(2))).scale(1 / i)), (e === r || e) && u.insertAbove(this), u
                    },
                    contains: function() {
                        return !!this._contains(this._matrix._inverseTransform(_.read(arguments)))
                    },
                    _contains: function(t) {
                        var e = this._children;
                        if (e) {
                            for (var n = e.length - 1; n >= 0; n--)
                                if (e[n].contains(t)) return !0;
                            return !1
                        }
                        return t.isInside(this.getInternalBounds())
                    },
                    isInside: function() {
                        return m.read(arguments).contains(this.getBounds())
                    },
                    _asPathItem: function() {
                        return new N.Rectangle({
                            rectangle: this.getInternalBounds(),
                            matrix: this._matrix,
                            insert: !1
                        })
                    },
                    intersects: function(t, e) {
                        return t instanceof S && this._asPathItem().getIntersections(t._asPathItem(), null, e, !0).length > 0
                    }
                }, new function() {
                    function t() {
                        return this._hitTest(_.read(arguments), I.getOptions(arguments))
                    }

                    function e() {
                        var t = _.read(arguments),
                            e = I.getOptions(arguments),
                            n = e.match,
                            i = [];
                        return e = o.set({}, e, {
                            match: function(t) {
                                n && !n(t) || i.push(t)
                            }
                        }), this._hitTest(t, e), i
                    }

                    function n(t, e, n, i) {
                        var r = this._children;
                        if (r)
                            for (var s = r.length - 1; s >= 0; s--) {
                                var a = r[s],
                                    o = a !== i && a._hitTest(t, e, n);
                                if (o) return o
                            }
                        return null
                    }
                    return b.inject({
                        hitTest: t,
                        hitTestAll: e,
                        _hitTest: n
                    }), {
                        hitTest: t,
                        hitTestAll: e,
                        _hitTestChildren: n
                    }
                }, {
                    _hitTest: function(t, e, n) {
                        function i(t) {
                            return !_ || t && _(t) ? t : null
                        }

                        function r(e, n) {
                            var i = c["get" + n]();
                            if (t.subtract(i).divide(l).length <= 1) return new I(e, g, {
                                name: o.hyphenate(n),
                                point: i
                            })
                        }
                        if (this._locked || !this._visible || this._guide && !e.guides || this.isEmpty()) return null;
                        var s = this._matrix,
                            a = n ? n.appended(s) : this.getGlobalMatrix().prepend(this.getView()._matrix),
                            h = this.getStrokeScaling() ? null : a.inverted()._shiftless(),
                            u = Math.max(e.tolerance, 1e-6),
                            l = e._tolerancePadding = new v(N._getStrokePadding(u, h));
                        if (t = s._inverseTransform(t), !t || !this._children && !this.getBounds({
                                internal: !0,
                                stroke: !0,
                                handle: !0
                            }).expand(l.multiply(2))._containsPoint(t)) return null;
                        var c, d, f = !(e.guides && !this._guide || e.selected && !this.isSelected() || e.type && e.type !== o.hyphenate(this._class) || e.class && !(this instanceof e.class)),
                            _ = e.match,
                            g = this;
                        if (f && (e.center || e.bounds) && this._parent) {
                            if (c = this.getInternalBounds(), e.center && (d = r("center", "Center")), !d && e.bounds)
                                for (var p = ["TopLeft", "TopRight", "BottomLeft", "BottomRight", "LeftCenter", "TopCenter", "RightCenter", "BottomCenter"], m = 0; m < 8 && !d; m++) d = r("bounds", p[m]);
                            d = i(d)
                        }
                        return d || (d = this._hitTestChildren(t, e, a) || f && i(this._hitTestSelf(t, e, a, h)) || null), d && d.point && (d.point = s.transform(d.point)), d
                    },
                    _hitTestSelf: function(t, e) {
                        if (e.fill && this.hasFill() && this._contains(t)) return new I("fill", this)
                    },
                    matches: function(t, e) {
                        function n(t, e) {
                            for (var i in t)
                                if (t.hasOwnProperty(i)) {
                                    var r = t[i],
                                        s = e[i];
                                    if (o.isPlainObject(r) && o.isPlainObject(s)) {
                                        if (!n(r, s)) return !1
                                    } else if (!o.equals(r, s)) return !1
                                } return !0
                        }
                        var i = typeof t;
                        if ("object" === i) {
                            for (var r in t)
                                if (t.hasOwnProperty(r) && !this.matches(r, t[r])) return !1;
                            return !0
                        }
                        if ("function" === i) return t(this);
                        if ("match" === t) return e(this);
                        var s = /^(empty|editable)$/.test(t) ? this["is" + o.capitalize(t)]() : "type" === t ? o.hyphenate(this._class) : this[t];
                        if ("class" === t) {
                            if ("function" == typeof e) return this instanceof e;
                            s = this._class
                        }
                        if ("function" == typeof e) return !!e(s);
                        if (e) {
                            if (e.test) return e.test(s);
                            if (o.isPlainObject(e)) return n(e, s)
                        }
                        return o.equals(s, e)
                    },
                    getItems: function(t) {
                        return S._getItems(this, t, this._matrix)
                    },
                    getItem: function(t) {
                        return S._getItems(this, t, this._matrix, null, !0)[0] || null
                    },
                    statics: {
                        _getItems: function t(e, n, i, r, s) {
                            if (!r) {
                                var a = "object" == typeof n && n,
                                    h = a && a.overlapping,
                                    u = a && a.inside,
                                    l = h || u,
                                    c = l && m.read([l]);
                                r = {
                                    items: [],
                                    recursive: a && a.recursive !== !1,
                                    inside: !!u,
                                    overlapping: !!h,
                                    rect: c,
                                    path: h && new N.Rectangle({
                                        rectangle: c,
                                        insert: !1
                                    })
                                }, a && (n = o.filter({}, n, {
                                    recursive: !0,
                                    inside: !0,
                                    overlapping: !0
                                }))
                            }
                            var d = e._children,
                                f = r.items,
                                c = r.rect;
                            i = c && (i || new w);
                            for (var _ = 0, g = d && d.length; _ < g; _++) {
                                var v = d[_],
                                    p = i && i.appended(v._matrix),
                                    y = !0;
                                if (c) {
                                    var l = v.getBounds(p);
                                    if (!c.intersects(l)) continue;
                                    c.contains(l) || r.overlapping && (l.contains(c) || r.path.intersects(v, p)) || (y = !1)
                                }
                                if (y && v.matches(n) && (f.push(v), s)) break;
                                if (r.recursive !== !1 && t(v, n, p, r, s), s && f.length > 0) break
                            }
                            return f
                        }
                    }
                }, {
                    importJSON: function(t) {
                        var e = o.importJSON(t, this);
                        return e !== this ? this.addChild(e) : e
                    },
                    addChild: function(t, e) {
                        return this.insertChild(r, t, e)
                    },
                    insertChild: function(t, e, n) {
                        var i = e ? this.insertChildren(t, [e], n) : null;
                        return i && i[0]
                    },
                    addChildren: function(t, e) {
                        return this.insertChildren(this._children.length, t, e)
                    },
                    insertChildren: function(t, e, n, i) {
                        var r = this._children;
                        if (r && e && e.length > 0) {
                            e = Array.prototype.slice.apply(e);
                            for (var s = e.length - 1; s >= 0; s--) {
                                var a = e[s];
                                a && (!i || a instanceof i) ? a._remove(!1, !0) : e.splice(s, 1)
                            }
                            o.splice(r, e, t, 0);
                            for (var h = this._project, u = h._changes, s = 0, l = e.length; s < l; s++) {
                                var a = e[s],
                                    c = a._name;
                                a._parent = this, a._setProject(h, !0), c && a.setName(c), u && this._changed(5)
                            }
                            this._changed(11)
                        } else e = null;
                        return e
                    },
                    _insertItem: "#insertChild",
                    _insertAt: function(t, e, n) {
                        var i = this;
                        if (i !== t) {
                            var r = t && t._getOwner();
                            r ? (i._remove(!1, !0), r._insertItem(t._index + e, i, n)) : i = null
                        }
                        return i
                    },
                    insertAbove: function(t, e) {
                        return this._insertAt(t, 1, e)
                    },
                    insertBelow: function(t, e) {
                        return this._insertAt(t, 0, e)
                    },
                    sendToBack: function() {
                        var t = this._getOwner();
                        return t ? t._insertItem(0, this) : null
                    },
                    bringToFront: function() {
                        var t = this._getOwner();
                        return t ? t._insertItem(r, this) : null
                    },
                    appendTop: "#addChild",
                    appendBottom: function(t) {
                        return this.insertChild(0, t)
                    },
                    moveAbove: "#insertAbove",
                    moveBelow: "#insertBelow",
                    copyTo: function(t) {
                        return t._insertItem(r, this.clone(!1))
                    },
                    reduce: function(t) {
                        var e = this._children;
                        if (e && 1 === e.length) {
                            var n = e[0].reduce(t);
                            return this._parent ? (n.insertAbove(this), this.remove()) : n.remove(), n
                        }
                        return this
                    },
                    _removeNamed: function() {
                        var t = this._getOwner();
                        if (t) {
                            var e = t._children,
                                n = t._namedChildren,
                                i = this._name,
                                r = n[i],
                                s = r ? r.indexOf(this) : -1;
                            s !== -1 && (e[i] == this && delete e[i], r.splice(s, 1), r.length ? e[i] = r[0] : delete n[i])
                        }
                    },
                    _remove: function(t, e) {
                        var n = this._getOwner(),
                            i = this._project,
                            r = this._index;
                        return !!n && (null != r && (i._activeLayer === this && (i._activeLayer = this.getNextSibling() || this.getPreviousSibling()), o.splice(n._children, null, r, 1)), this._name && this._removeNamed(), this._installEvents(!1), t && i._changes && this._changed(5), e && n._changed(11, this), this._parent = null, !0)
                    },
                    remove: function() {
                        return this._remove(!0, !0)
                    },
                    replaceWith: function(t) {
                        var e = t && t.insertBelow(this);
                        return e && this.remove(), e
                    },
                    removeChildren: function(t, e) {
                        if (!this._children) return null;
                        t = t || 0, e = o.pick(e, this._children.length);
                        for (var n = o.splice(this._children, null, t, e - t), i = n.length - 1; i >= 0; i--) n[i]._remove(!0, !1);
                        return n.length > 0 && this._changed(11), n
                    },
                    clear: "#removeChildren",
                    reverseChildren: function() {
                        if (this._children) {
                            this._children.reverse();
                            for (var t = 0, e = this._children.length; t < e; t++) this._children[t]._index = t;
                            this._changed(11)
                        }
                    },
                    isEmpty: function() {
                        return !this._children || 0 === this._children.length
                    },
                    isEditable: function() {
                        for (var t = this; t;) {
                            if (!t._visible || t._locked) return !1;
                            t = t._parent
                        }
                        return !0
                    },
                    hasFill: function() {
                        return this.getStyle().hasFill()
                    },
                    hasStroke: function() {
                        return this.getStyle().hasStroke()
                    },
                    hasShadow: function() {
                        return this.getStyle().hasShadow()
                    },
                    _getOrder: function(t) {
                        function e(t) {
                            var e = [];
                            do e.unshift(t); while (t = t._parent);
                            return e
                        }
                        for (var n = e(this), i = e(t), r = 0, s = Math.min(n.length, i.length); r < s; r++)
                            if (n[r] != i[r]) return n[r]._index < i[r]._index ? 1 : -1;
                        return 0
                    },
                    hasChildren: function() {
                        return this._children && this._children.length > 0
                    },
                    isInserted: function() {
                        return !!this._parent && this._parent.isInserted()
                    },
                    isAbove: function(t) {
                        return this._getOrder(t) === -1
                    },
                    isBelow: function(t) {
                        return 1 === this._getOrder(t)
                    },
                    isParent: function(t) {
                        return this._parent === t
                    },
                    isChild: function(t) {
                        return t && t._parent === this
                    },
                    isDescendant: function(t) {
                        for (var e = this; e = e._parent;)
                            if (e === t) return !0;
                        return !1
                    },
                    isAncestor: function(t) {
                        return !!t && t.isDescendant(this)
                    },
                    isSibling: function(t) {
                        return this._parent === t._parent
                    },
                    isGroupedWith: function(t) {
                        for (var e = this._parent; e;) {
                            if (e._parent && /^(Group|Layer|CompoundPath)$/.test(e._class) && t.isDescendant(e)) return !0;
                            e = e._parent
                        }
                        return !1
                    }
                }, o.each(["rotate", "scale", "shear", "skew"], function(t) {
                    var e = "rotate" === t;
                    this[t] = function() {
                        var n = (e ? o : _).read(arguments),
                            i = _.read(arguments, 0, {
                                readNull: !0
                            });
                        return this.transform((new w)[t](n, i || this.getPosition(!0)))
                    }
                }, {
                    translate: function() {
                        var t = new w;
                        return this.transform(t.translate.apply(t, arguments))
                    },
                    transform: function(t, e, n, i) {
                        t && t.isIdentity() && (t = null);
                        var r = this._matrix,
                            s = (e || this._applyMatrix) && (!r.isIdentity() || t || e && n && this._children);
                        if (!t && !s) return this;
                        if (t && (!t.isInvertible() && r.isInvertible() && (r._backup = r.getValues()), r.prepend(t)), s = s && this._transformContent(r, n, i)) {
                            var a = this._pivot,
                                o = this._style,
                                h = o.getFillColor(!0),
                                u = o.getStrokeColor(!0);
                            a && r._transformPoint(a, a, !0), h && h.transform(r), u && u.transform(r), r.reset(!0), i && this._canApplyMatrix && (this._applyMatrix = !0)
                        }
                        var l = this._bounds,
                            c = this._position;
                        this._changed(9);
                        var d = l && t && t.decompose();
                        if (d && !d.shearing && d.rotation % 90 === 0) {
                            for (var f in l) {
                                var _ = l[f];
                                if (s || !_.internal) {
                                    var g = _.rect;
                                    t._transformBounds(g, g)
                                }
                            }
                            var v = this._boundsGetter,
                                g = l[v && v.getBounds || v || "getBounds"];
                            g && (this._position = g.getCenter(!0)), this._bounds = l
                        } else t && c && (this._position = t._transformPoint(c, c));
                        return this
                    },
                    _transformContent: function(t, e, n) {
                        var i = this._children;
                        if (i) {
                            for (var r = 0, s = i.length; r < s; r++) i[r].transform(t, !0, e, n);
                            return !0
                        }
                    },
                    globalToLocal: function() {
                        return this.getGlobalMatrix(!0)._inverseTransform(_.read(arguments))
                    },
                    localToGlobal: function() {
                        return this.getGlobalMatrix(!0)._transformPoint(_.read(arguments))
                    },
                    parentToLocal: function() {
                        return this._matrix._inverseTransform(_.read(arguments))
                    },
                    localToParent: function() {
                        return this._matrix._transformPoint(_.read(arguments))
                    },
                    fitBounds: function(t, e) {
                        t = m.read(arguments);
                        var n = this.getBounds(),
                            i = n.height / n.width,
                            r = t.height / t.width,
                            s = (e ? i > r : i < r) ? t.width / n.width : t.height / n.height,
                            a = new m(new _, new v(n.width * s, n.height * s));
                        a.setCenter(t.getCenter()), this.setBounds(a)
                    }
                }), {
                    _setStyles: function(t, e, n) {
                        var r = this._style;
                        if (r.hasFill() && (t.fillStyle = r.getFillColor().toCanvasStyle(t)), r.hasStroke()) {
                            t.strokeStyle = r.getStrokeColor().toCanvasStyle(t), t.lineWidth = r.getStrokeWidth();
                            var s = r.getStrokeJoin(),
                                a = r.getStrokeCap(),
                                o = r.getMiterLimit();
                            if (s && (t.lineJoin = s), a && (t.lineCap = a), o && (t.miterLimit = o), i.support.nativeDash) {
                                var h = r.getDashArray(),
                                    u = r.getDashOffset();
                                h && h.length && ("setLineDash" in t ? (t.setLineDash(h), t.lineDashOffset = u) : (t.mozDash = h, t.mozDashOffset = u))
                            }
                        }
                        if (r.hasShadow()) {
                            var l = e.pixelRatio || 1,
                                c = n._shiftless().prepend((new w).scale(l, l)),
                                d = c.transform(new _(r.getShadowBlur(), 0)),
                                f = c.transform(this.getShadowOffset());
                            t.shadowColor = r.getShadowColor().toCanvasStyle(t), t.shadowBlur = d.getLength(), t.shadowOffsetX = f.x, t.shadowOffsetY = f.y
                        }
                    },
                    draw: function(t, e, n) {
                        var i = this._updateVersion = this._project._updateVersion;
                        if (this._visible && 0 !== this._opacity) {
                            var r = e.matrices,
                                s = e.viewMatrix,
                                a = this._matrix,
                                o = r[r.length - 1].appended(a);
                            if (o.isInvertible()) {
                                s = s ? s.appended(o) : o, r.push(o), e.updateMatrix && (o._updateVersion = i, this._globalMatrix = o);
                                var h, u, l, c = this._blendMode,
                                    d = this._opacity,
                                    f = "normal" === c,
                                    _ = rt.nativeModes[c],
                                    g = f && 1 === d || e.dontStart || e.clip || (_ || f && d < 1) && this._canComposite(),
                                    v = e.pixelRatio || 1;
                                if (!g) {
                                    var p = this.getStrokeBounds(s);
                                    if (!p.width || !p.height) return;
                                    l = e.offset, u = e.offset = p.getTopLeft().floor(), h = t, t = it.getContext(p.getSize().ceil().add(1).multiply(v)), 1 !== v && t.scale(v, v)
                                }
                                t.save();
                                var m = n ? n.appended(a) : this._canScaleStroke && !this.getStrokeScaling(!0) && s,
                                    y = !g && e.clipItem,
                                    w = !m || y;
                                if (g ? (t.globalAlpha = d, _ && (t.globalCompositeOperation = c)) : w && t.translate(-u.x, -u.y), w && (g ? a : s).applyToContext(t), y && e.clipItem.draw(t, e.extend({
                                        clip: !0
                                    })), m) {
                                    t.setTransform(v, 0, 0, v, 0, 0);
                                    var x = e.offset;
                                    x && t.translate(-x.x, -x.y)
                                }
                                this._draw(t, e, s, m), t.restore(), r.pop(), e.clip && !e.dontFinish && t.clip(), g || (rt.process(c, t, h, d, u.subtract(l).multiply(v)), it.release(t), e.offset = l)
                            }
                        }
                    },
                    _isUpdated: function(t) {
                        var e = this._parent;
                        if (e instanceof R) return e._isUpdated(t);
                        var n = this._updateVersion === t;
                        return !n && e && e._visible && e._isUpdated(t) && (this._updateVersion = t, n = !0), n
                    },
                    _drawSelection: function(t, e, n, i, r) {
                        var s = this._selection,
                            a = 1 & s,
                            o = 2 & s || a && this._selectBounds,
                            h = 4 & s;
                        if (this._drawSelected || (a = !1), (a || o || h) && this._isUpdated(r)) {
                            var u, l = this.getSelectedColor(!0) || (u = this.getLayer()) && u.getSelectedColor(!0),
                                c = e.appended(this.getGlobalMatrix(!0)),
                                d = n / 2;
                            if (t.strokeStyle = t.fillStyle = l ? l.toCanvasStyle(t) : "#009dec", a && this._drawSelected(t, c, i), h) {
                                var f = this.getPosition(!0),
                                    _ = f.x,
                                    g = f.y;
                                t.beginPath(), t.arc(_, g, d, 0, 2 * Math.PI, !0), t.stroke();
                                for (var v = [
                                        [0, -1],
                                        [1, 0],
                                        [0, 1],
                                        [-1, 0]
                                    ], p = d, m = n + 1, y = 0; y < 4; y++) {
                                    var w = v[y],
                                        x = w[0],
                                        b = w[1];
                                    t.moveTo(_ + x * p, g + b * p), t.lineTo(_ + x * m, g + b * m), t.stroke()
                                }
                            }
                            if (o) {
                                var S = c._transformCorners(this.getInternalBounds());
                                t.beginPath();
                                for (var y = 0; y < 8; y++) t[0 === y ? "moveTo" : "lineTo"](S[y], S[++y]);
                                t.closePath(), t.stroke();
                                for (var y = 0; y < 8; y++) t.fillRect(S[y] - d, S[++y] - d, n, n)
                            }
                        }
                    },
                    _canComposite: function() {
                        return !1
                    }
                }, o.each(["down", "drag", "up", "move"], function(t) {
                    this["removeOn" + o.capitalize(t)] = function() {
                        var e = {};
                        return e[t] = !0, this.removeOn(e)
                    }
                }, {
                    removeOn: function(t) {
                        for (var e in t)
                            if (t[e]) {
                                var n = "mouse" + e,
                                    i = this._project,
                                    r = i._removeSets = i._removeSets || {};
                                r[n] = r[n] || {}, r[n][this._id] = this
                            } return this
                    }
                })),
                C = S.extend({
                    _class: "Group",
                    _selectBounds: !1,
                    _selectChildren: !0,
                    _serializeFields: {
                        children: []
                    },
                    initialize: function(t) {
                        this._children = [], this._namedChildren = {}, this._initialize(t) || this.addChildren(Array.isArray(t) ? t : arguments)
                    },
                    _changed: function t(e) {
                        t.base.call(this, e), 1026 & e && (this._clipItem = r)
                    },
                    _getClipItem: function() {
                        var t = this._clipItem;
                        if (t === r) {
                            t = null;
                            for (var e = this._children, n = 0, i = e.length; n < i; n++)
                                if (e[n]._clipMask) {
                                    t = e[n];
                                    break
                                } this._clipItem = t
                        }
                        return t
                    },
                    isClipped: function() {
                        return !!this._getClipItem()
                    },
                    setClipped: function(t) {
                        var e = this.getFirstChild();
                        e && e.setClipMask(t)
                    },
                    _getBounds: function t(e, n) {
                        var i = this._getClipItem();
                        return i ? i._getCachedBounds(e && e.appended(i._matrix), o.set({}, n, {
                            stroke: !1
                        })) : t.base.call(this, e, n)
                    },
                    _hitTestChildren: function t(e, n, i) {
                        var r = this._getClipItem();
                        return (!r || r.contains(e)) && t.base.call(this, e, n, i, r)
                    },
                    _draw: function(t, e) {
                        var n = e.clip,
                            i = !n && this._getClipItem();
                        e = e.extend({
                            clipItem: i,
                            clip: !1
                        }), n ? (t.beginPath(), e.dontStart = e.dontFinish = !0) : i && i.draw(t, e.extend({
                            clip: !0
                        }));
                        for (var r = this._children, s = 0, a = r.length; s < a; s++) {
                            var o = r[s];
                            o !== i && o.draw(t, e)
                        }
                    }
                }),
                k = C.extend({
                    _class: "Layer",
                    initialize: function() {
                        C.apply(this, arguments)
                    },
                    _getOwner: function() {
                        return this._parent || null != this._index && this._project
                    },
                    isInserted: function t() {
                        return this._parent ? t.base.call(this) : null != this._index
                    },
                    activate: function() {
                        this._project._activeLayer = this
                    },
                    _hitTestSelf: function() {}
                }),
                M = S.extend({
                    _class: "Shape",
                    _applyMatrix: !1,
                    _canApplyMatrix: !1,
                    _canScaleStroke: !0,
                    _serializeFields: {
                        type: null,
                        size: null,
                        radius: null
                    },
                    initialize: function(t) {
                        this._initialize(t)
                    },
                    _equals: function(t) {
                        return this._type === t._type && this._size.equals(t._size) && o.equals(this._radius, t._radius)
                    },
                    copyContent: function(t) {
                        this.setType(t._type), this.setSize(t._size), this.setRadius(t._radius)
                    },
                    getType: function() {
                        return this._type
                    },
                    setType: function(t) {
                        this._type = t
                    },
                    getShape: "#getType",
                    setShape: "#setType",
                    getSize: function() {
                        var t = this._size;
                        return new p(t.width, t.height, this, "setSize")
                    },
                    setSize: function() {
                        var t = v.read(arguments);
                        if (this._size) {
                            if (!this._size.equals(t)) {
                                var e = this._type,
                                    n = t.width,
                                    i = t.height;
                                if ("rectangle" === e) {
                                    var r = v.min(this._radius, t.divide(2));
                                    this._radius.set(r.width, r.height)
                                } else "circle" === e ? (n = i = (n + i) / 2, this._radius = n / 2) : "ellipse" === e && this._radius.set(n / 2, i / 2);
                                this._size.set(n, i), this._changed(9)
                            }
                        } else this._size = t.clone()
                    },
                    getRadius: function() {
                        var t = this._radius;
                        return "circle" === this._type ? t : new p(t.width, t.height, this, "setRadius")
                    },
                    setRadius: function(t) {
                        var e = this._type;
                        if ("circle" === e) {
                            if (t === this._radius) return;
                            var n = 2 * t;
                            this._radius = t, this._size.set(n, n)
                        } else if (t = v.read(arguments), this._radius) {
                            if (this._radius.equals(t)) return;
                            if (this._radius.set(t.width, t.height), "rectangle" === e) {
                                var n = v.max(this._size, t.multiply(2));
                                this._size.set(n.width, n.height)
                            } else "ellipse" === e && this._size.set(2 * t.width, 2 * t.height)
                        } else this._radius = t.clone();
                        this._changed(9)
                    },
                    isEmpty: function() {
                        return !1
                    },
                    toPath: function(t) {
                        var e = new(N[o.capitalize(this._type)])({
                            center: new _,
                            size: this._size,
                            radius: this._radius,
                            insert: !1
                        });
                        return e.copyAttributes(this), i.settings.applyMatrix && e.setApplyMatrix(!0), (t === r || t) && e.insertAbove(this), e
                    },
                    toShape: "#clone",
                    _draw: function(t, e, n, i) {
                        var r = this._style,
                            s = r.hasFill(),
                            a = r.hasStroke(),
                            o = e.dontFinish || e.clip,
                            h = !i;
                        if (s || a || o) {
                            var u = this._type,
                                l = this._radius,
                                c = "circle" === u;
                            if (e.dontStart || t.beginPath(), h && c) t.arc(0, 0, l, 0, 2 * Math.PI, !0);
                            else {
                                var d = c ? l : l.width,
                                    f = c ? l : l.height,
                                    _ = this._size,
                                    g = _.width,
                                    v = _.height;
                                if (h && "rectangle" === u && 0 === d && 0 === f) t.rect(-g / 2, -v / 2, g, v);
                                else {
                                    var p = g / 2,
                                        m = v / 2,
                                        y = .44771525016920644,
                                        w = d * y,
                                        x = f * y,
                                        b = [-p, -m + f, -p, -m + x, -p + w, -m, -p + d, -m, p - d, -m, p - w, -m, p, -m + x, p, -m + f, p, m - f, p, m - x, p - w, m, p - d, m, -p + d, m, -p + w, m, -p, m - x, -p, m - f];
                                    i && i.transform(b, b, 32), t.moveTo(b[0], b[1]), t.bezierCurveTo(b[2], b[3], b[4], b[5], b[6], b[7]), p !== d && t.lineTo(b[8], b[9]), t.bezierCurveTo(b[10], b[11], b[12], b[13], b[14], b[15]), m !== f && t.lineTo(b[16], b[17]), t.bezierCurveTo(b[18], b[19], b[20], b[21], b[22], b[23]), p !== d && t.lineTo(b[24], b[25]), t.bezierCurveTo(b[26], b[27], b[28], b[29], b[30], b[31])
                                }
                            }
                            t.closePath()
                        }
                        o || !s && !a || (this._setStyles(t, e, n), s && (t.fill(r.getFillRule()), t.shadowColor = "rgba(0,0,0,0)"), a && t.stroke())
                    },
                    _canComposite: function() {
                        return !(this.hasFill() && this.hasStroke())
                    },
                    _getBounds: function(t, e) {
                        var n = new m(this._size).setCenter(0, 0),
                            i = this._style,
                            r = e.stroke && i.hasStroke() && i.getStrokeWidth();
                        return t && (n = t._transformBounds(n)), r ? n.expand(N._getStrokePadding(r, this._getStrokeMatrix(t, e))) : n
                    }
                }, new function() {
                    function t(t, e, n) {
                        var i = t._radius;
                        if (!i.isZero())
                            for (var r = t._size.divide(2), s = 0; s < 4; s++) {
                                var a = new _(1 & s ? 1 : -1, s > 1 ? 1 : -1),
                                    o = a.multiply(r),
                                    h = o.subtract(a.multiply(i)),
                                    u = new m(o, h);
                                if ((n ? u.expand(n) : u).contains(e)) return h
                            }
                    }

                    function e(t, e, n, i) {
                        var r = t.divide(e);
                        return (!i || r.quadrant === i) && r.subtract(r.normalize()).multiply(e).divide(n).length <= 1
                    }
                    return {
                        _contains: function e(n) {
                            if ("rectangle" === this._type) {
                                var i = t(this, n);
                                return i ? n.subtract(i).divide(this._radius).getLength() <= 1 : e.base.call(this, n)
                            }
                            return n.divide(this.size).getLength() <= .5
                        },
                        _hitTestSelf: function n(i, r, s, a) {
                            var o = !1,
                                h = this._style,
                                u = r.stroke && h.hasStroke(),
                                l = r.fill && h.hasFill();
                            if (u || l) {
                                var c = this._type,
                                    d = this._radius,
                                    f = u ? h.getStrokeWidth() / 2 : 0,
                                    _ = r._tolerancePadding.add(N._getStrokePadding(f, !h.getStrokeScaling() && a));
                                if ("rectangle" === c) {
                                    var g = _.multiply(2),
                                        v = t(this, i, g);
                                    if (v) o = e(i.subtract(v), d, _, v.getQuadrant());
                                    else {
                                        var p = new m(this._size).setCenter(0, 0),
                                            y = p.expand(g),
                                            w = p.expand(g.negate());
                                        o = y._containsPoint(i) && !w._containsPoint(i)
                                    }
                                } else o = e(i, d, _)
                            }
                            return o ? new I(u ? "stroke" : "fill", this) : n.base.apply(this, arguments)
                        }
                    }
                }, {
                    statics: new function() {
                        function t(t, e, n, i, r) {
                            var s = new M(o.getNamed(r));
                            return s._type = t, s._size = n, s._radius = i, s.translate(e)
                        }
                        return {
                            Circle: function() {
                                var e = _.readNamed(arguments, "center"),
                                    n = o.readNamed(arguments, "radius");
                                return t("circle", e, new v(2 * n), n, arguments)
                            },
                            Rectangle: function() {
                                var e = m.readNamed(arguments, "rectangle"),
                                    n = v.min(v.readNamed(arguments, "radius"), e.getSize(!0).divide(2));
                                return t("rectangle", e.getCenter(!0), e.getSize(!0), n, arguments)
                            },
                            Ellipse: function() {
                                var e = M._readEllipse(arguments),
                                    n = e.radius;
                                return t("ellipse", e.center, n.multiply(2), n, arguments)
                            },
                            _readEllipse: function(t) {
                                var e, n;
                                if (o.hasNamed(t, "radius")) e = _.readNamed(t, "center"), n = v.readNamed(t, "radius");
                                else {
                                    var i = m.readNamed(t, "rectangle");
                                    e = i.getCenter(!0), n = i.getSize(!0).divide(2)
                                }
                                return {
                                    center: e,
                                    radius: n
                                }
                            }
                        }
                    }
                }),
                P = S.extend({
                    _class: "Raster",
                    _applyMatrix: !1,
                    _canApplyMatrix: !1,
                    _boundsOptions: {
                        stroke: !1,
                        handle: !1
                    },
                    _serializeFields: {
                        crossOrigin: null,
                        source: null
                    },
                    initialize: function(t, e) {
                        if (!this._initialize(t, e !== r && _.read(arguments, 1))) {
                            var n = "string" == typeof t ? a.getElementById(t) : t;
                            n ? this.setImage(n) : this.setSource(t)
                        }
                        this._size || (this._size = new v, this._loaded = !1)
                    },
                    _equals: function(t) {
                        return this.getSource() === t.getSource()
                    },
                    copyContent: function(t) {
                        var e = t._image,
                            n = t._canvas;
                        if (e) this._setImage(e);
                        else if (n) {
                            var i = it.getCanvas(t._size);
                            i.getContext("2d").drawImage(n, 0, 0), this._setImage(i)
                        }
                        this._crossOrigin = t._crossOrigin
                    },
                    getSize: function() {
                        var t = this._size;
                        return new p(t ? t.width : 0, t ? t.height : 0, this, "setSize")
                    },
                    setSize: function() {
                        var t = v.read(arguments);
                        if (!t.equals(this._size))
                            if (t.width > 0 && t.height > 0) {
                                var e = this.getElement();
                                this._setImage(it.getCanvas(t)), e && this.getContext(!0).drawImage(e, 0, 0, t.width, t.height)
                            } else this._canvas && it.release(this._canvas), this._size = t.clone()
                    },
                    getWidth: function() {
                        return this._size ? this._size.width : 0
                    },
                    setWidth: function(t) {
                        this.setSize(t, this.getHeight())
                    },
                    getHeight: function() {
                        return this._size ? this._size.height : 0
                    },
                    setHeight: function(t) {
                        this.setSize(this.getWidth(), t)
                    },
                    getLoaded: function() {
                        return this._loaded
                    },
                    isEmpty: function() {
                        var t = this._size;
                        return !t || 0 === t.width && 0 === t.height
                    },
                    getResolution: function() {
                        var t = this._matrix,
                            e = new _(0, 0).transform(t),
                            n = new _(1, 0).transform(t).subtract(e),
                            i = new _(0, 1).transform(t).subtract(e);
                        return new v(72 / n.getLength(), 72 / i.getLength())
                    },
                    getPpi: "#getResolution",
                    getImage: function() {
                        return this._image
                    },
                    setImage: function(t) {
                        function e(t) {
                            var e = n.getView(),
                                r = t && t.type || "load";
                            e && n.responds(r) && (i = e._scope, n.emit(r, new J(t)))
                        }
                        var n = this;
                        this._setImage(t), this._loaded ? setTimeout(e, 0) : t && G.add(t, {
                            load: function(i) {
                                n._setImage(t), e(i)
                            },
                            error: e
                        })
                    },
                    _setImage: function(t) {
                        this._canvas && it.release(this._canvas), t && t.getContext ? (this._image = null, this._canvas = t, this._loaded = !0) : (this._image = t, this._canvas = null, this._loaded = !!(t && t.src && t.complete)), this._size = new v(t ? t.naturalWidth || t.width : 0, t ? t.naturalHeight || t.height : 0), this._context = null, this._changed(521)
                    },
                    getCanvas: function() {
                        if (!this._canvas) {
                            var t = it.getContext(this._size);
                            try {
                                this._image && t.drawImage(this._image, 0, 0), this._canvas = t.canvas
                            } catch (e) {
                                it.release(t)
                            }
                        }
                        return this._canvas
                    },
                    setCanvas: "#setImage",
                    getContext: function(t) {
                        return this._context || (this._context = this.getCanvas().getContext("2d")), t && (this._image = null, this._changed(513)), this._context
                    },
                    setContext: function(t) {
                        this._context = t
                    },
                    getSource: function() {
                        var t = this._image;
                        return t && t.src || this.toDataURL()
                    },
                    setSource: function(t) {
                        var e = new s.Image,
                            n = this._crossOrigin;
                        n && (e.crossOrigin = n), e.src = t, this.setImage(e)
                    },
                    getCrossOrigin: function() {
                        var t = this._image;
                        return t && t.crossOrigin || this._crossOrigin || ""
                    },
                    setCrossOrigin: function(t) {
                        this._crossOrigin = t;
                        var e = this._image;
                        e && (e.crossOrigin = t)
                    },
                    getElement: function() {
                        return this._canvas || this._loaded && this._image
                    }
                }, {
                    beans: !1,
                    getSubCanvas: function() {
                        var t = m.read(arguments),
                            e = it.getContext(t.getSize());
                        return e.drawImage(this.getCanvas(), t.x, t.y, t.width, t.height, 0, 0, t.width, t.height), e.canvas
                    },
                    getSubRaster: function() {
                        var t = m.read(arguments),
                            e = new P(S.NO_INSERT);
                        return e._setImage(this.getSubCanvas(t)), e.translate(t.getCenter().subtract(this.getSize().divide(2))), e._matrix.prepend(this._matrix), e.insertAbove(this), e
                    },
                    toDataURL: function() {
                        var t = this._image,
                            e = t && t.src;
                        if (/^data:/.test(e)) return e;
                        var n = this.getCanvas();
                        return n ? n.toDataURL.apply(n, arguments) : null
                    },
                    drawImage: function(t) {
                        var e = _.read(arguments, 1);
                        this.getContext(!0).drawImage(t, e.x, e.y)
                    },
                    getAverageColor: function(t) {
                        var e, n;
                        if (t ? t instanceof E ? (n = t, e = t.getBounds()) : "object" == typeof t && ("width" in t ? e = new m(t) : "x" in t && (e = new m(t.x - .5, t.y - .5, 1, 1))) : e = this.getBounds(), !e) return null;
                        var i = 32,
                            r = Math.min(e.width, i),
                            s = Math.min(e.height, i),
                            a = P._sampleContext;
                        a ? a.clearRect(0, 0, i + 1, i + 1) : a = P._sampleContext = it.getContext(new v(i)), a.save();
                        var h = (new w).scale(r / e.width, s / e.height).translate(-e.x, -e.y);
                        h.applyToContext(a), n && n.draw(a, new o({
                            clip: !0,
                            matrices: [h]
                        })), this._matrix.applyToContext(a);
                        var u = this.getElement(),
                            l = this._size;
                        u && a.drawImage(u, -l.width / 2, -l.height / 2), a.restore();
                        for (var c = a.getImageData(.5, .5, Math.ceil(r), Math.ceil(s)).data, d = [0, 0, 0], f = 0, _ = 0, g = c.length; _ < g; _ += 4) {
                            var p = c[_ + 3];
                            f += p, p /= 255, d[0] += c[_] * p, d[1] += c[_ + 1] * p, d[2] += c[_ + 2] * p
                        }
                        for (var _ = 0; _ < 3; _++) d[_] /= f;
                        return f ? V.read(d) : null
                    },
                    getPixel: function() {
                        var t = _.read(arguments),
                            e = this.getContext().getImageData(t.x, t.y, 1, 1).data;
                        return new V("rgb", [e[0] / 255, e[1] / 255, e[2] / 255], e[3] / 255)
                    },
                    setPixel: function() {
                        var t = _.read(arguments),
                            e = V.read(arguments),
                            n = e._convert("rgb"),
                            i = e._alpha,
                            r = this.getContext(!0),
                            s = r.createImageData(1, 1),
                            a = s.data;
                        a[0] = 255 * n[0], a[1] = 255 * n[1], a[2] = 255 * n[2], a[3] = null != i ? 255 * i : 255, r.putImageData(s, t.x, t.y)
                    },
                    createImageData: function() {
                        var t = v.read(arguments);
                        return this.getContext().createImageData(t.width, t.height)
                    },
                    getImageData: function() {
                        var t = m.read(arguments);
                        return t.isEmpty() && (t = new m(this._size)), this.getContext().getImageData(t.x, t.y, t.width, t.height)
                    },
                    setImageData: function(t) {
                        var e = _.read(arguments, 1);
                        this.getContext(!0).putImageData(t, e.x, e.y)
                    },
                    _getBounds: function(t, e) {
                        var n = new m(this._size).setCenter(0, 0);
                        return t ? t._transformBounds(n) : n
                    },
                    _hitTestSelf: function(t) {
                        if (this._contains(t)) {
                            var e = this;
                            return new I("pixel", e, {
                                offset: t.add(e._size.divide(2)).round(),
                                color: {
                                    get: function() {
                                        return e.getPixel(this.offset)
                                    }
                                }
                            })
                        }
                    },
                    _draw: function(t) {
                        var e = this.getElement();
                        e && (t.globalAlpha = this._opacity, t.drawImage(e, -this._size.width / 2, -this._size.height / 2))
                    },
                    _canComposite: function() {
                        return !0
                    }
                }),
                O = S.extend({
                    _class: "SymbolItem",
                    _applyMatrix: !1,
                    _canApplyMatrix: !1,
                    _boundsOptions: {
                        stroke: !0
                    },
                    _serializeFields: {
                        symbol: null
                    },
                    initialize: function(t, e) {
                        this._initialize(t, e !== r && _.read(arguments, 1)) || this.setDefinition(t instanceof T ? t : new T(t))
                    },
                    _equals: function(t) {
                        return this._definition === t._definition
                    },
                    copyContent: function(t) {
                        this.setDefinition(t._definition)
                    },
                    getDefinition: function() {
                        return this._definition
                    },
                    setDefinition: function(t) {
                        this._definition = t, this._changed(9)
                    },
                    getSymbol: "#getDefinition",
                    setSymbol: "#setDefinition",
                    isEmpty: function() {
                        return this._definition._item.isEmpty()
                    },
                    _getBounds: function(t, e) {
                        var n = this._definition._item;
                        return n._getCachedBounds(n._matrix.prepended(t), e)
                    },
                    _hitTestSelf: function(t, e, n, i) {
                        var r = this._definition._item._hitTest(t, e, n);
                        return r && (r.item = this), r
                    },
                    _draw: function(t, e) {
                        this._definition._item.draw(t, e)
                    }
                }),
                T = o.extend({
                    _class: "SymbolDefinition",
                    initialize: function(t, e) {
                        this._id = f.get(), this.project = i.project, t && this.setItem(t, e)
                    },
                    _serialize: function(t, e) {
                        return e.add(this, function() {
                            return o.serialize([this._class, this._item], t, !1, e)
                        })
                    },
                    _changed: function(t) {
                        8 & t && S._clearBoundsCache(this), 1 & t && this.project._changed(t)
                    },
                    getItem: function() {
                        return this._item
                    },
                    setItem: function(t, e) {
                        t._symbol && (t = t.clone()), this._item && (this._item._symbol = null), this._item = t, t.remove(), t.setSelected(!1), e || t.setPosition(new _), t._symbol = this, this._changed(9)
                    },
                    getDefinition: "#getItem",
                    setDefinition: "#setItem",
                    place: function(t) {
                        return new O(this, t)
                    },
                    clone: function() {
                        return new T(this._item.clone(!1))
                    },
                    equals: function(t) {
                        return t === this || t && this._item.equals(t._item) || !1
                    }
                }),
                I = o.extend({
                    _class: "HitResult",
                    initialize: function(t, e, n) {
                        this.type = t, this.item = e, n && (n.enumerable = !0, this.inject(n))
                    },
                    statics: {
                        getOptions: function(t) {
                            var e = t && o.read(t);
                            return o.set({
                                type: null,
                                tolerance: i.settings.hitTolerance,
                                fill: !e,
                                stroke: !e,
                                segments: !e,
                                handles: !1,
                                ends: !1,
                                center: !1,
                                bounds: !1,
                                guides: !1,
                                selected: !1
                            }, e)
                        }
                    }
                }),
                A = o.extend({
                    _class: "Segment",
                    beans: !0,
                    _selection: 0,
                    initialize: function(t, e, n, i, s, a) {
                        var o, h, u, l, c = arguments.length;
                        0 === c || (1 === c ? t && "point" in t ? (o = t.point, h = t.handleIn, u = t.handleOut, l = t.selection) : o = t : null == t || "object" == typeof t ? (o = t, h = e, u = n, l = i) : (o = t !== r ? [t, e] : null, h = n !== r ? [n, i] : null, u = s !== r ? [s, a] : null)), new D(o, this, "_point"), new D(h, this, "_handleIn"), new D(u, this, "_handleOut"), l && this.setSelection(l)
                    },
                    _serialize: function(t, e) {
                        var n = this._point,
                            i = this._selection,
                            r = i || this.hasHandles() ? [n, this._handleIn, this._handleOut] : n;
                        return i && r.push(i), o.serialize(r, t, !0, e)
                    },
                    _changed: function(t) {
                        var e = this._path;
                        if (e) {
                            var n, i = e._curves,
                                r = this._index;
                            i && (t && t !== this._point && t !== this._handleIn || !(n = r > 0 ? i[r - 1] : e._closed ? i[i.length - 1] : null) || n._changed(), t && t !== this._point && t !== this._handleOut || !(n = i[r]) || n._changed()), e._changed(25)
                        }
                    },
                    getPoint: function() {
                        return this._point
                    },
                    setPoint: function() {
                        var t = _.read(arguments);
                        this._point.set(t.x, t.y)
                    },
                    getHandleIn: function() {
                        return this._handleIn
                    },
                    setHandleIn: function() {
                        var t = _.read(arguments);
                        this._handleIn.set(t.x, t.y)
                    },
                    getHandleOut: function() {
                        return this._handleOut
                    },
                    setHandleOut: function() {
                        var t = _.read(arguments);
                        this._handleOut.set(t.x, t.y)
                    },
                    hasHandles: function() {
                        return !this._handleIn.isZero() || !this._handleOut.isZero()
                    },
                    clearHandles: function() {
                        this._handleIn.set(0, 0), this._handleOut.set(0, 0)
                    },
                    getSelection: function() {
                        return this._selection
                    },
                    setSelection: function(t) {
                        var e = this._selection,
                            n = this._path;
                        this._selection = t = t || 0, n && t !== e && (n._updateSelection(this, e, t), n._changed(129))
                    },
                    changeSelection: function(t, e) {
                        var n = this._selection;
                        this.setSelection(e ? n | t : n & ~t)
                    },
                    isSelected: function() {
                        return !!(7 & this._selection)
                    },
                    setSelected: function(t) {
                        this.changeSelection(7, t)
                    },
                    getIndex: function() {
                        return this._index !== r ? this._index : null
                    },
                    getPath: function() {
                        return this._path || null
                    },
                    getCurve: function() {
                        var t = this._path,
                            e = this._index;
                        return t ? (e > 0 && !t._closed && e === t._segments.length - 1 && e--, t.getCurves()[e] || null) : null
                    },
                    getLocation: function() {
                        var t = this.getCurve();
                        return t ? new L(t, this === t._segment1 ? 0 : 1) : null
                    },
                    getNext: function() {
                        var t = this._path && this._path._segments;
                        return t && (t[this._index + 1] || this._path._closed && t[0]) || null
                    },
                    smooth: function(t, e, n) {
                        var i = t || {},
                            s = i.type,
                            a = i.factor,
                            o = this.getPrevious(),
                            h = this.getNext(),
                            u = (o || this)._point,
                            l = this._point,
                            c = (h || this)._point,
                            d = u.getDistance(l),
                            f = l.getDistance(c);
                        if (s && "catmull-rom" !== s) {
                            if ("geometric" !== s) throw new Error("Smoothing method '" + s + "' not supported.");
                            if (o && h) {
                                var g = u.subtract(c),
                                    v = a === r ? .4 : a,
                                    p = v * d / (d + f);
                                e || this.setHandleIn(g.multiply(p)), n || this.setHandleOut(g.multiply(p - v))
                            }
                        } else {
                            var m = a === r ? .5 : a,
                                y = Math.pow(d, m),
                                w = y * y,
                                x = Math.pow(f, m),
                                b = x * x;
                            if (!e && o) {
                                var S = 2 * b + 3 * x * y + w,
                                    C = 3 * x * (x + y);
                                this.setHandleIn(0 !== C ? new _((b * u._x + S * l._x - w * c._x) / C - l._x, (b * u._y + S * l._y - w * c._y) / C - l._y) : new _)
                            }
                            if (!n && h) {
                                var S = 2 * w + 3 * y * x + b,
                                    C = 3 * y * (y + x);
                                this.setHandleOut(0 !== C ? new _((w * c._x + S * l._x - b * u._x) / C - l._x, (w * c._y + S * l._y - b * u._y) / C - l._y) : new _)
                            }
                        }
                    },
                    getPrevious: function() {
                        var t = this._path && this._path._segments;
                        return t && (t[this._index - 1] || this._path._closed && t[t.length - 1]) || null
                    },
                    isFirst: function() {
                        return 0 === this._index
                    },
                    isLast: function() {
                        var t = this._path;
                        return t && this._index === t._segments.length - 1 || !1
                    },
                    reverse: function() {
                        var t = this._handleIn,
                            e = this._handleOut,
                            n = t._x,
                            i = t._y;
                        t.set(e._x, e._y), e.set(n, i)
                    },
                    reversed: function() {
                        return new A(this._point, this._handleOut, this._handleIn)
                    },
                    remove: function() {
                        return !!this._path && !!this._path.removeSegment(this._index)
                    },
                    clone: function() {
                        return new A(this._point, this._handleIn, this._handleOut)
                    },
                    equals: function(t) {
                        return t === this || t && this._class === t._class && this._point.equals(t._point) && this._handleIn.equals(t._handleIn) && this._handleOut.equals(t._handleOut) || !1
                    },
                    toString: function() {
                        var t = ["point: " + this._point];
                        return this._handleIn.isZero() || t.push("handleIn: " + this._handleIn), this._handleOut.isZero() || t.push("handleOut: " + this._handleOut), "{ " + t.join(", ") + " }"
                    },
                    transform: function(t) {
                        this._transformCoordinates(t, new Array(6), !0), this._changed()
                    },
                    interpolate: function(t, e, n) {
                        var i = 1 - n,
                            r = n,
                            s = t._point,
                            a = e._point,
                            o = t._handleIn,
                            h = e._handleIn,
                            u = e._handleOut,
                            l = t._handleOut;
                        this._point.set(i * s._x + r * a._x, i * s._y + r * a._y, !0), this._handleIn.set(i * o._x + r * h._x, i * o._y + r * h._y, !0), this._handleOut.set(i * l._x + r * u._x, i * l._y + r * u._y, !0), this._changed()
                    },
                    _transformCoordinates: function(t, e, n) {
                        var i = this._point,
                            r = n && this._handleIn.isZero() ? null : this._handleIn,
                            s = n && this._handleOut.isZero() ? null : this._handleOut,
                            a = i._x,
                            o = i._y,
                            h = 2;
                        return e[0] = a, e[1] = o, r && (e[h++] = r._x + a, e[h++] = r._y + o), s && (e[h++] = s._x + a, e[h++] = s._y + o), t && (t._transformCoordinates(e, e, h / 2), a = e[0], o = e[1], n ? (i._x = a, i._y = o, h = 2, r && (r._x = e[h++] - a, r._y = e[h++] - o), s && (s._x = e[h++] - a, s._y = e[h++] - o)) : (r || (e[h++] = a, e[h++] = o), s || (e[h++] = a, e[h++] = o))), e
                    }
                }),
                D = _.extend({
                    initialize: function(t, e, n) {
                        var i, s, a;
                        if (t)
                            if ((i = t[0]) !== r) s = t[1];
                            else {
                                var o = t;
                                (i = o.x) === r && (o = _.read(arguments), i = o.x), s = o.y, a = o.selected
                            }
                        else i = s = 0;
                        this._x = i, this._y = s, this._owner = e, e[n] = this, a && this.setSelected(!0)
                    },
                    set: function(t, e) {
                        return this._x = t, this._y = e, this._owner._changed(this), this
                    },
                    getX: function() {
                        return this._x
                    },
                    setX: function(t) {
                        this._x = t, this._owner._changed(this)
                    },
                    getY: function() {
                        return this._y
                    },
                    setY: function(t) {
                        this._y = t, this._owner._changed(this)
                    },
                    isZero: function() {
                        return d.isZero(this._x) && d.isZero(this._y)
                    },
                    isSelected: function() {
                        return !!(this._owner._selection & this._getSelection())
                    },
                    setSelected: function(t) {
                        this._owner.changeSelection(this._getSelection(), t)
                    },
                    _getSelection: function() {
                        var t = this._owner;
                        return this === t._point ? 1 : this === t._handleIn ? 2 : this === t._handleOut ? 4 : 0
                    }
                }),
                z = o.extend({
                    _class: "Curve",
                    initialize: function(t, e, n, i, r, s, a, o) {
                        var h, u, l, c, d, f, _ = arguments.length;
                        3 === _ ? (this._path = t, h = e, u = n) : 0 === _ ? (h = new A, u = new A) : 1 === _ ? "segment1" in t ? (h = new A(t.segment1), u = new A(t.segment2)) : "point1" in t ? (l = t.point1, d = t.handle1, f = t.handle2, c = t.point2) : Array.isArray(t) && (l = [t[0], t[1]], c = [t[6], t[7]], d = [t[2] - t[0], t[3] - t[1]], f = [t[4] - t[6], t[5] - t[7]]) : 2 === _ ? (h = new A(t), u = new A(e)) : 4 === _ ? (l = t, d = e, f = n, c = i) : 8 === _ && (l = [t, e], c = [a, o], d = [n - t, i - e], f = [r - a, s - o]), this._segment1 = h || new A(l, null, d), this._segment2 = u || new A(c, f, null)
                    },
                    _serialize: function(t, e) {
                        return o.serialize(this.hasHandles() ? [this.getPoint1(), this.getHandle1(), this.getHandle2(), this.getPoint2()] : [this.getPoint1(), this.getPoint2()], t, !0, e)
                    },
                    _changed: function() {
                        this._length = this._bounds = r
                    },
                    clone: function() {
                        return new z(this._segment1, this._segment2)
                    },
                    toString: function() {
                        var t = ["point1: " + this._segment1._point];
                        return this._segment1._handleOut.isZero() || t.push("handle1: " + this._segment1._handleOut), this._segment2._handleIn.isZero() || t.push("handle2: " + this._segment2._handleIn), t.push("point2: " + this._segment2._point), "{ " + t.join(", ") + " }"
                    },
                    remove: function() {
                        var t = !1;
                        if (this._path) {
                            var e = this._segment2,
                                n = e._handleOut;
                            t = e.remove(), t && this._segment1._handleOut.set(n.x, n.y)
                        }
                        return t
                    },
                    getPoint1: function() {
                        return this._segment1._point
                    },
                    setPoint1: function() {
                        var t = _.read(arguments);
                        this._segment1._point.set(t.x, t.y)
                    },
                    getPoint2: function() {
                        return this._segment2._point
                    },
                    setPoint2: function() {
                        var t = _.read(arguments);
                        this._segment2._point.set(t.x, t.y)
                    },
                    getHandle1: function() {
                        return this._segment1._handleOut
                    },
                    setHandle1: function() {
                        var t = _.read(arguments);
                        this._segment1._handleOut.set(t.x, t.y)
                    },
                    getHandle2: function() {
                        return this._segment2._handleIn
                    },
                    setHandle2: function() {
                        var t = _.read(arguments);
                        this._segment2._handleIn.set(t.x, t.y)
                    },
                    getSegment1: function() {
                        return this._segment1
                    },
                    getSegment2: function() {
                        return this._segment2
                    },
                    getPath: function() {
                        return this._path
                    },
                    getIndex: function() {
                        return this._segment1._index
                    },
                    getNext: function() {
                        var t = this._path && this._path._curves;
                        return t && (t[this._segment1._index + 1] || this._path._closed && t[0]) || null
                    },
                    getPrevious: function() {
                        var t = this._path && this._path._curves;
                        return t && (t[this._segment1._index - 1] || this._path._closed && t[t.length - 1]) || null
                    },
                    isFirst: function() {
                        return 0 === this._segment1._index
                    },
                    isLast: function() {
                        var t = this._path;
                        return t && this._segment1._index === t._curves.length - 1 || !1
                    },
                    isSelected: function() {
                        return this.getPoint1().isSelected() && this.getHandle2().isSelected() && this.getHandle2().isSelected() && this.getPoint2().isSelected()
                    },
                    setSelected: function(t) {
                        this.getPoint1().setSelected(t), this.getHandle1().setSelected(t), this.getHandle2().setSelected(t), this.getPoint2().setSelected(t)
                    },
                    getValues: function(t) {
                        return z.getValues(this._segment1, this._segment2, t)
                    },
                    getPoints: function() {
                        for (var t = this.getValues(), e = [], n = 0; n < 8; n += 2) e.push(new _(t[n], t[n + 1]));
                        return e
                    },
                    getLength: function() {
                        return null == this._length && (this._length = z.getLength(this.getValues(), 0, 1)), this._length
                    },
                    getArea: function() {
                        return z.getArea(this.getValues())
                    },
                    getLine: function() {
                        return new x(this._segment1._point, this._segment2._point)
                    },
                    getPart: function(t, e) {
                        return new z(z.getPart(this.getValues(), t, e))
                    },
                    getPartLength: function(t, e) {
                        return z.getLength(this.getValues(), t, e)
                    },
                    getIntersections: function(t) {
                        return z._getIntersections(this.getValues(), t && t !== this ? t.getValues() : null, this, t, [], {})
                    },
                    divideAt: function(t) {
                        return this.divideAtTime(t && t.curve === this ? t.time : t)
                    },
                    divideAtTime: function(t, e) {
                        var n = 4e-7,
                            i = 1 - n,
                            r = null;
                        if (t >= n && t <= i) {
                            var s = z.subdivide(this.getValues(), t),
                                a = s[0],
                                o = s[1],
                                h = e || this.hasHandles(),
                                u = this._segment1,
                                l = this._segment2,
                                c = this._path;
                            h && (u._handleOut.set(a[2] - a[0], a[3] - a[1]), l._handleIn.set(o[4] - o[6], o[5] - o[7]));
                            var d = a[6],
                                f = a[7],
                                g = new A(new _(d, f), h && new _(a[4] - d, a[5] - f), h && new _(o[2] - d, o[3] - f));
                            c ? (c.insert(u._index + 1, g), r = this.getNext()) : (this._segment2 = g, this._changed(), r = new z(g, l))
                        }
                        return r
                    },
                    splitAt: function(t) {
                        return this._path ? this._path.splitAt(t) : null
                    },
                    splitAtTime: function(t) {
                        return this.splitAt(this.getLocationAtTime(t))
                    },
                    divide: function(t, e) {
                        return this.divideAtTime(t === r ? .5 : e ? t : this.getTimeAt(t))
                    },
                    split: function(t, e) {
                        return this.splitAtTime(t === r ? .5 : e ? t : this.getTimeAt(t))
                    },
                    reversed: function() {
                        return new z(this._segment2.reversed(), this._segment1.reversed())
                    },
                    clearHandles: function() {
                        this._segment1._handleOut.set(0, 0), this._segment2._handleIn.set(0, 0)
                    },
                    statics: {
                        getValues: function(t, e, n) {
                            var i = t._point,
                                r = t._handleOut,
                                s = e._handleIn,
                                a = e._point,
                                o = [i._x, i._y, i._x + r._x, i._y + r._y, a._x + s._x, a._y + s._y, a._x, a._y];
                            return n && n._transformCoordinates(o, o, 4), o
                        },
                        subdivide: function(t, e) {
                            var n = t[0],
                                i = t[1],
                                s = t[2],
                                a = t[3],
                                o = t[4],
                                h = t[5],
                                u = t[6],
                                l = t[7];
                            e === r && (e = .5);
                            var c = 1 - e,
                                d = c * n + e * s,
                                f = c * i + e * a,
                                _ = c * s + e * o,
                                g = c * a + e * h,
                                v = c * o + e * u,
                                p = c * h + e * l,
                                m = c * d + e * _,
                                y = c * f + e * g,
                                w = c * _ + e * v,
                                x = c * g + e * p,
                                b = c * m + e * w,
                                S = c * y + e * x;
                            return [
                                [n, i, d, f, m, y, b, S],
                                [b, S, w, x, v, p, u, l]
                            ]
                        },
                        solveCubic: function(t, e, n, i, r, s) {
                            var a = t[e],
                                o = t[e + 2],
                                h = t[e + 4],
                                u = t[e + 6],
                                l = 0;
                            if (!(a < n && u < n && o < n && h < n || a > n && u > n && o > n && h > n)) {
                                var c = 3 * (o - a),
                                    f = 3 * (h - o) - c,
                                    _ = u - a - c - f;
                                l = d.solveCubic(_, f, c, a - n, i, r, s)
                            }
                            return l
                        },
                        getTimeOf: function(t, e) {
                            var n = new _(t[0], t[1]),
                                i = new _(t[6], t[7]),
                                r = 1e-12,
                                s = e.isClose(n, r) ? 0 : e.isClose(i, r) ? 1 : null;
                            if (null !== s) return s;
                            for (var a = [e.x, e.y], o = [], h = 2e-7, u = 0; u < 2; u++)
                                for (var l = z.solveCubic(t, u, a[u], o, 0, 1), c = 0; c < l; c++)
                                    if (s = o[c], e.isClose(z.getPoint(t, s), h)) return s;
                            return e.isClose(n, h) ? 0 : e.isClose(i, h) ? 1 : null
                        },
                        getNearestTime: function(t, e) {
                            function n(n) {
                                if (n >= 0 && n <= 1) {
                                    var i = e.getDistance(z.getPoint(t, n), !0);
                                    if (i < d) return d = i, f = n, !0
                                }
                            }
                            if (z.isStraight(t)) {
                                var i = t[0],
                                    r = t[1],
                                    s = t[6],
                                    a = t[7],
                                    o = s - i,
                                    h = a - r,
                                    u = o * o + h * h;
                                if (0 === u) return 0;
                                var l = ((e.x - i) * o + (e.y - r) * h) / u;
                                return l < 1e-12 ? 0 : l > .999999999999 ? 1 : z.getTimeOf(t, new _(i + l * o, r + l * h))
                            }
                            for (var c = 100, d = 1 / 0, f = 0, g = 0; g <= c; g++) n(g / c);
                            for (var v = 1 / (2 * c); v > 4e-7;) n(f - v) || n(f + v) || (v /= 2);
                            return f
                        },
                        getPart: function(t, e, n) {
                            var i = e > n;
                            if (i) {
                                var r = e;
                                e = n, n = r
                            }
                            return e > 0 && (t = z.subdivide(t, e)[1]), n < 1 && (t = z.subdivide(t, (n - e) / (1 - e))[0]), i ? [t[6], t[7], t[4], t[5], t[2], t[3], t[0], t[1]] : t
                        },
                        isFlatEnough: function(t, e) {
                            var n = t[0],
                                i = t[1],
                                r = t[2],
                                s = t[3],
                                a = t[4],
                                o = t[5],
                                h = t[6],
                                u = t[7],
                                l = 3 * r - 2 * n - h,
                                c = 3 * s - 2 * i - u,
                                d = 3 * a - 2 * h - n,
                                f = 3 * o - 2 * u - i;
                            return Math.max(l * l, d * d) + Math.max(c * c, f * f) <= 16 * e * e
                        },
                        getArea: function(t) {
                            var e = t[0],
                                n = t[1],
                                i = t[2],
                                r = t[3],
                                s = t[4],
                                a = t[5],
                                o = t[6],
                                h = t[7];
                            return 3 * ((h - n) * (i + s) - (o - e) * (r + a) + r * (e - s) - i * (n - a) + h * (s + e / 3) - o * (a + n / 3)) / 20
                        },
                        getBounds: function(t) {
                            for (var e = t.slice(0, 2), n = e.slice(), i = [0, 0], r = 0; r < 2; r++) z._addBounds(t[r], t[r + 2], t[r + 4], t[r + 6], r, 0, e, n, i);
                            return new m(e[0], e[1], n[0] - e[0], n[1] - e[1])
                        },
                        _addBounds: function(t, e, n, i, r, s, a, o, h) {
                            function u(t, e) {
                                var n = t - e,
                                    i = t + e;
                                n < a[r] && (a[r] = n), i > o[r] && (o[r] = i)
                            }
                            s /= 2;
                            var l = a[r] - s,
                                c = o[r] + s;
                            if (t < l || e < l || n < l || i < l || t > c || e > c || n > c || i > c)
                                if (e < t != e < i && n < t != n < i) u(t, s), u(i, s);
                                else {
                                    var f = 3 * (e - n) - t + i,
                                        _ = 2 * (t + n) - 4 * e,
                                        g = e - t,
                                        v = d.solveQuadratic(f, _, g, h),
                                        p = 4e-7,
                                        m = 1 - p;
                                    u(i, 0);
                                    for (var y = 0; y < v; y++) {
                                        var w = h[y],
                                            x = 1 - w;
                                        p < w && w < m && u(x * x * x * t + 3 * x * x * w * e + 3 * x * w * w * n + w * w * w * i, s)
                                    }
                                }
                        }
                    }
                }, o.each(["getBounds", "getStrokeBounds", "getHandleBounds"], function(t) {
                    this[t] = function() {
                        this._bounds || (this._bounds = {});
                        var e = this._bounds[t];
                        return e || (e = this._bounds[t] = N[t]([this._segment1, this._segment2], !1, this._path)), e.clone()
                    }
                }, {}), o.each({
                    isStraight: function(t, e, n) {
                        if (e.isZero() && n.isZero()) return !0;
                        var i = t.getVector(),
                            r = 2e-7;
                        if (i.isZero()) return !1;
                        if (t.getDistance(e) < r && t.getDistance(n) < r) {
                            var s = i.dot(i),
                                a = i.dot(e) / s,
                                o = i.dot(n) / s;
                            return a >= 0 && a <= 1 && o <= 0 && o >= -1
                        }
                        return !1
                    },
                    isLinear: function(t, e, n) {
                        var i = t.getVector().divide(3);
                        return e.equals(i) && n.negate().equals(i)
                    }
                }, function(t, e) {
                    this[e] = function() {
                        var e = this._segment1,
                            n = this._segment2;
                        return t(new x(e._point, n._point), e._handleOut, n._handleIn)
                    }, this.statics[e] = function(e) {
                        var n = e[0],
                            i = e[1],
                            r = e[6],
                            s = e[7];
                        return t(new x(n, i, r, s), new _(e[2] - n, e[3] - i), new _(e[4] - r, e[5] - s))
                    }
                }, {
                    statics: {},
                    hasHandles: function() {
                        return !this._segment1._handleOut.isZero() || !this._segment2._handleIn.isZero()
                    },
                    isCollinear: function(t) {
                        return t && this.isStraight() && t.isStraight() && this.getLine().isCollinear(t.getLine())
                    },
                    isHorizontal: function() {
                        return this.isStraight() && Math.abs(this.getTangentAtTime(.5).y) < 1e-7
                    },
                    isVertical: function() {
                        return this.isStraight() && Math.abs(this.getTangentAtTime(.5).x) < 1e-7
                    }
                }), {
                    beans: !1,
                    getLocationAt: function(t, e) {
                        return this.getLocationAtTime(e ? t : this.getTimeAt(t))
                    },
                    getLocationAtTime: function(t) {
                        return null != t && t >= 0 && t <= 1 ? new L(this, t) : null
                    },
                    getTimeAt: function(t, e) {
                        return z.getTimeAt(this.getValues(), t, e)
                    },
                    getParameterAt: "#getTimeAt",
                    getOffsetAtTime: function(t) {
                        return this.getPartLength(0, t)
                    },
                    getLocationOf: function() {
                        return this.getLocationAtTime(this.getTimeOf(_.read(arguments)))
                    },
                    getOffsetOf: function() {
                        var t = this.getLocationOf.apply(this, arguments);
                        return t ? t.getOffset() : null
                    },
                    getTimeOf: function() {
                        return z.getTimeOf(this.getValues(), _.read(arguments))
                    },
                    getParameterOf: "#getTimeOf",
                    getNearestLocation: function() {
                        var t = _.read(arguments),
                            e = this.getValues(),
                            n = z.getNearestTime(e, t),
                            i = z.getPoint(e, n);
                        return new L(this, n, i, null, t.getDistance(i))
                    },
                    getNearestPoint: function() {
                        var t = this.getNearestLocation.apply(this, arguments);
                        return t ? t.getPoint() : t
                    }
                }, new function() {
                    var t = ["getPoint", "getTangent", "getNormal", "getWeightedTangent", "getWeightedNormal", "getCurvature"];
                    return o.each(t, function(t) {
                        this[t + "At"] = function(e, n) {
                            var i = this.getValues();
                            return z[t](i, n ? e : z.getTimeAt(i, e))
                        }, this[t + "AtTime"] = function(e) {
                            return z[t](this.getValues(), e)
                        }
                    }, {
                        statics: {
                            _evaluateMethods: t
                        }
                    })
                }, new function() {
                    function t(t) {
                        var e = t[0],
                            n = t[1],
                            i = t[2],
                            r = t[3],
                            s = t[4],
                            a = t[5],
                            o = t[6],
                            h = t[7],
                            u = 9 * (i - s) + 3 * (o - e),
                            l = 6 * (e + s) - 12 * i,
                            c = 3 * (i - e),
                            d = 9 * (r - a) + 3 * (h - n),
                            f = 6 * (n + a) - 12 * r,
                            _ = 3 * (r - n);
                        return function(t) {
                            var e = (u * t + l) * t + c,
                                n = (d * t + f) * t + _;
                            return Math.sqrt(e * e + n * n)
                        }
                    }

                    function e(t, e) {
                        return Math.max(2, Math.min(16, Math.ceil(32 * Math.abs(e - t))))
                    }

                    function n(t, e, n, i) {
                        if (null == e || e < 0 || e > 1) return null;
                        var r = t[0],
                            s = t[1],
                            a = t[2],
                            o = t[3],
                            h = t[4],
                            u = t[5],
                            l = t[6],
                            c = t[7],
                            f = d.isZero;
                        f(a - r) && f(o - s) && (a = r, o = s), f(h - l) && f(u - c) && (h = l, u = c);
                        var g, v, p = 3 * (a - r),
                            m = 3 * (h - a) - p,
                            y = l - r - p - m,
                            w = 3 * (o - s),
                            x = 3 * (u - o) - w,
                            b = c - s - w - x;
                        if (0 === n) g = 0 === e ? r : 1 === e ? l : ((y * e + m) * e + p) * e + r, v = 0 === e ? s : 1 === e ? c : ((b * e + x) * e + w) * e + s;
                        else {
                            var S = 4e-7,
                                C = 1 - S;
                            if (e < S ? (g = p, v = w) : e > C ? (g = 3 * (l - h), v = 3 * (c - u)) : (g = (3 * y * e + 2 * m) * e + p, v = (3 * b * e + 2 * x) * e + w), i) {
                                0 === g && 0 === v && (e < S || e > C) && (g = h - a, v = u - o);
                                var k = Math.sqrt(g * g + v * v);
                                k && (g /= k, v /= k)
                            }
                            if (3 === n) {
                                var M = 6 * y * e + 2 * m,
                                    P = 6 * b * e + 2 * x,
                                    O = Math.pow(g * g + v * v, 1.5);
                                g = 0 !== O ? (g * P - v * M) / O : 0, v = 0
                            }
                        }
                        return 2 === n ? new _(v, (-g)) : new _(g, v)
                    }
                    return {
                        statics: {
                            getLength: function(n, i, s, a) {
                                if (i === r && (i = 0), s === r && (s = 1), z.isStraight(n)) {
                                    var o = n;
                                    s < 1 && (o = z.subdivide(o, s)[0], i /= s), i > 0 && (o = z.subdivide(o, i)[1]);
                                    var h = o[6] - o[0],
                                        u = o[7] - o[1];
                                    return Math.sqrt(h * h + u * u)
                                }
                                return d.integrate(a || t(n), i, s, e(i, s))
                            },
                            getTimeAt: function(n, i, s) {
                                function a(t) {
                                    return p += d.integrate(f, s, t, e(s, t)), s = t, p - i
                                }
                                if (s === r && (s = i < 0 ? 1 : 0), 0 === i) return s;
                                var o = Math.abs,
                                    h = 1e-12,
                                    u = i > 0,
                                    l = u ? s : 0,
                                    c = u ? 1 : s,
                                    f = t(n),
                                    _ = z.getLength(n, l, c, f),
                                    g = o(i) - _;
                                if (o(g) < h) return u ? c : l;
                                if (g > h) return null;
                                var v = i / _,
                                    p = 0;
                                return d.findRoot(a, f, s + v, l, c, 32, 1e-12)
                            },
                            getPoint: function(t, e) {
                                return n(t, e, 0, !1)
                            },
                            getTangent: function(t, e) {
                                return n(t, e, 1, !0)
                            },
                            getWeightedTangent: function(t, e) {
                                return n(t, e, 1, !1)
                            },
                            getNormal: function(t, e) {
                                return n(t, e, 2, !0)
                            },
                            getWeightedNormal: function(t, e) {
                                return n(t, e, 2, !1)
                            },
                            getCurvature: function(t, e) {
                                return n(t, e, 3, !1).x
                            }
                        }
                    }
                }, new function() {
                    function t(t, e, n, i, r, s, a, o, h, u, l) {
                        var c = !l && e.excludeStart,
                            d = !l && e.excludeEnd,
                            f = 4e-7,
                            _ = 1 - f;
                        if (null == r && (r = z.getTimeOf(n, s)), null !== r && r >= (c ? f : 0) && r <= (d ? _ : 1) && (null == h && (h = z.getTimeOf(a, u)), null !== h && h >= (d ? f : 0) && h <= (c ? _ : 1))) {
                            var g = e.renormalize;
                            if (g) {
                                var v = g(r, h);
                                r = v[0], h = v[1]
                            }
                            var p = new L(i, r, s || z.getPoint(n, r), l),
                                m = new L(o, h, u || z.getPoint(a, h), l),
                                y = p.getPath() === m.getPath() && p.getIndex() > m.getIndex(),
                                w = y ? m : p,
                                x = e.include;
                            p._intersection = m, m._intersection = p, x && !x(w) || L.insert(t, w, !0)
                        }
                    }

                    function e(r, s, a, o, h, u, l, c, d, f, _, g, v) {
                        if (++g >= 48 || ++v > 4096) return v;
                        var p, m, y = s[0],
                            w = s[1],
                            b = s[6],
                            S = s[7],
                            C = x.getSignedDistance,
                            k = C(y, w, b, S, s[2], s[3]),
                            M = C(y, w, b, S, s[4], s[5]),
                            P = k * M > 0 ? .75 : 4 / 9,
                            O = P * Math.min(0, k, M),
                            T = P * Math.max(0, k, M),
                            I = C(y, w, b, S, r[0], r[1]),
                            A = C(y, w, b, S, r[2], r[3]),
                            D = C(y, w, b, S, r[4], r[5]),
                            L = C(y, w, b, S, r[6], r[7]),
                            E = n(I, A, D, L),
                            N = E[0],
                            R = E[1];
                        if (0 === k && 0 === M && 0 === I && 0 === A && 0 === D && 0 === L || null == (p = i(N, R, O, T)) || null == (m = i(N.reverse(), R.reverse(), O, T))) return v;
                        var j = l + (c - l) * p,
                            F = l + (c - l) * m;
                        if (Math.max(f - d, F - j) < 1e-9) {
                            var Y = (j + F) / 2,
                                B = (d + f) / 2;
                            r = a.getValues(), s = o.getValues(), t(h, u, _ ? s : r, _ ? o : a, _ ? B : Y, null, _ ? r : s, _ ? a : o, _ ? Y : B, null)
                        } else if (r = z.getPart(r, p, m), m - p > .8)
                            if (F - j > f - d) {
                                var V = z.subdivide(r, .5),
                                    Y = (j + F) / 2;
                                v = e(s, V[0], o, a, h, u, d, f, j, Y, !_, g, v), v = e(s, V[1], o, a, h, u, d, f, Y, F, !_, g, v)
                            } else {
                                var V = z.subdivide(s, .5),
                                    B = (d + f) / 2;
                                v = e(V[0], r, o, a, h, u, d, B, j, F, !_, g, v), v = e(V[1], r, o, a, h, u, B, f, j, F, !_, g, v)
                            }
                        else v = e(s, r, o, a, h, u, d, f, j, F, !_, g, v);
                        return v
                    }

                    function n(t, e, n, i) {
                        var r, s = [0, t],
                            a = [1 / 3, e],
                            o = [2 / 3, n],
                            h = [1, i],
                            u = e - (2 * t + i) / 3,
                            l = n - (t + 2 * i) / 3;
                        if (u * l < 0) r = [
                            [s, a, h],
                            [s, o, h]
                        ];
                        else {
                            var c = u / l;
                            r = [c >= 2 ? [s, a, h] : c <= .5 ? [s, o, h] : [s, a, o, h],
                                [s, h]
                            ]
                        }
                        return (u || l) < 0 ? r.reverse() : r
                    }

                    function i(t, e, n, i) {
                        return t[0][1] < n ? r(t, !0, n) : e[0][1] > i ? r(e, !1, i) : t[0][0]
                    }

                    function r(t, e, n) {
                        for (var i = t[0][0], r = t[0][1], s = 1, a = t.length; s < a; s++) {
                            var o = t[s][0],
                                h = t[s][1];
                            if (e ? h >= n : h <= n) return h === n ? o : i + (n - r) * (o - i) / (h - r);
                            i = o, r = h
                        }
                        return null
                    }

                    function s(e, n, i, r, s, a) {
                        for (var o = z.isStraight(e), h = o ? n : e, u = o ? e : n, l = u[0], c = u[1], f = u[6], _ = u[7], g = f - l, v = _ - c, p = Math.atan2(-v, g), m = Math.sin(p), y = Math.cos(p), w = [], x = 0; x < 8; x += 2) {
                            var b = h[x] - l,
                                S = h[x + 1] - c;
                            w.push(b * y - S * m, b * m + S * y)
                        }
                        for (var C = [], k = z.solveCubic(w, 1, 0, C, 0, 1), x = 0; x < k; x++) {
                            var M = C[x],
                                P = z.getPoint(h, M),
                                O = z.getTimeOf(u, P);
                            if (null !== O) {
                                var T = z.getPoint(u, O),
                                    I = o ? O : M,
                                    A = o ? M : O;
                                (!a.excludeEnd || A > d.CURVETIME_EPSILON) && t(s, a, e, i, I, o ? T : P, n, r, A, o ? P : T)
                            }
                        }
                    }

                    function a(e, n, i, r, s, a) {
                        var o = x.intersect(e[0], e[1], e[6], e[7], n[0], n[1], n[6], n[7]);
                        o && t(s, a, e, i, null, o, n, r, null, o)
                    }
                    return {
                        statics: {
                            _getIntersections: function(n, i, r, o, h, u) {
                                if (!i) return z._getSelfIntersection(n, r, h, u);
                                var l = 2e-7,
                                    c = n[0],
                                    d = n[1],
                                    f = n[6],
                                    g = n[7],
                                    v = i[0],
                                    p = i[1],
                                    m = i[6],
                                    y = i[7],
                                    w = (3 * n[2] + c) / 4,
                                    x = (3 * n[3] + d) / 4,
                                    b = (3 * n[4] + f) / 4,
                                    S = (3 * n[5] + g) / 4,
                                    C = (3 * i[2] + v) / 4,
                                    k = (3 * i[3] + p) / 4,
                                    M = (3 * i[4] + m) / 4,
                                    P = (3 * i[5] + y) / 4,
                                    O = Math.min,
                                    T = Math.max;
                                if (!(T(c, w, b, f) + l > O(v, C, M, m) && O(c, w, b, f) - l < T(v, C, M, m) && T(d, x, S, g) + l > O(p, k, P, y) && O(d, x, S, g) - l < T(p, k, P, y))) return h;
                                var I = z.getOverlaps(n, i);
                                if (I) {
                                    for (var A = 0; A < 2; A++) {
                                        var D = I[A];
                                        t(h, u, n, r, D[0], null, i, o, D[1], null, !0)
                                    }
                                    return h
                                }
                                var L = z.isStraight(n),
                                    E = z.isStraight(i),
                                    N = L && E,
                                    R = h.length;
                                if ((N ? a : L || E ? s : e)(n, i, r, o, h, u, 0, 1, 0, 1, 0, 0, 0), N && h.length > R) return h;
                                var j = new _(c, d),
                                    F = new _(f, g),
                                    Y = new _(v, p),
                                    B = new _(m, y);
                                return j.isClose(Y, l) && t(h, u, n, r, 0, j, i, o, 0, Y), !u.excludeStart && j.isClose(B, l) && t(h, u, n, r, 0, j, i, o, 1, B), !u.excludeEnd && F.isClose(Y, l) && t(h, u, n, r, 1, F, i, o, 0, Y), F.isClose(B, l) && t(h, u, n, r, 1, F, i, o, 1, B), h
                            },
                            _getSelfIntersection: function(t, e, n, i) {
                                var r = t[0],
                                    s = t[1],
                                    a = t[2],
                                    o = t[3],
                                    h = t[4],
                                    u = t[5],
                                    l = t[6],
                                    c = t[7],
                                    f = new x(r, s, l, c, (!1)),
                                    g = f.getSide(new _(a, o), !0),
                                    v = f.getSide(new _(h, u), !0);
                                if (g === v) {
                                    var p = (r - h) * (o - c) + (a - l) * (u - s);
                                    if (p * g > 0) return n
                                }
                                var m = l - 3 * h + 3 * a - r,
                                    y = h - 2 * a + r,
                                    w = a - r,
                                    b = c - 3 * u + 3 * o - s,
                                    S = u - 2 * o + s,
                                    C = o - s,
                                    k = b * w - m * C,
                                    M = b * y - m * S,
                                    P = S * w - y * C;
                                if (k * k - 4 * M * P < 0) {
                                    var O, T = [],
                                        I = d.solveCubic(m * m + b * b, 3 * (m * y + b * S), 2 * (y * y + S * S) + m * w + b * C, y * w + S * C, T, 0, 1);
                                    if (I > 0) {
                                        for (var A = 0, D = 0; A < I; A++) {
                                            var L = Math.abs(e.getCurvatureAtTime(T[A]));
                                            L > D && (D = L, O = T[A])
                                        }
                                        var E = z.subdivide(t, O);
                                        i.excludeEnd = !0, i.renormalize = function(t, e) {
                                            return [t * O, e * (1 - O) + O]
                                        }, z._getIntersections(E[0], E[1], e, e, n, i)
                                    }
                                }
                                return n
                            },
                            getOverlaps: function(t, e) {
                                function n(t) {
                                    var e = t[6] - t[0],
                                        n = t[7] - t[1];
                                    return e * e + n * n
                                }
                                var i = Math.abs,
                                    r = 4e-7,
                                    s = 2e-7,
                                    a = z.isStraight(t),
                                    o = z.isStraight(e),
                                    h = a && o,
                                    u = n(t) < n(e),
                                    l = u ? e : t,
                                    c = u ? t : e,
                                    d = new x(l[0], l[1], l[6], l[7]);
                                if (d.getDistance(new _(c[0], c[1])) < s && d.getDistance(new _(c[6], c[7])) < s) !h && d.getDistance(new _(l[2], l[3])) < s && d.getDistance(new _(l[4], l[5])) < s && d.getDistance(new _(c[2], c[3])) < s && d.getDistance(new _(c[4], c[5])) < s && (a = o = h = !0);
                                else if (h) return null;
                                if (a ^ o) return null;
                                for (var f = [t, e], g = [], v = 0, p = 0; v < 2 && g.length < 2; v += 0 === p ? 0 : 1, p = 1 ^ p) {
                                    var m = z.getTimeOf(f[1 ^ v], new _(f[v][0 === p ? 0 : 6], f[v][0 === p ? 1 : 7]));
                                    if (null != m) {
                                        var y = 0 === v ? [p, m] : [m, p];
                                        (0 === g.length || i(y[0] - g[0][0]) > r && i(y[1] - g[0][1]) > r) && g.push(y)
                                    }
                                    if (1 === v && 0 === g.length) break
                                }
                                if (2 !== g.length) g = null;
                                else if (!h) {
                                    var w = z.getPart(t, g[0][0], g[1][0]),
                                        b = z.getPart(e, g[0][1], g[1][1]);
                                    (i(b[2] - w[2]) > s || i(b[3] - w[3]) > s || i(b[4] - w[4]) > s || i(b[5] - w[5]) > s) && (g = null)
                                }
                                return g
                            }
                        }
                    }
                }),
                L = o.extend({
                    _class: "CurveLocation",
                    beans: !0,
                    initialize: function(t, e, n, i, r) {
                        if (e > .9999996) {
                            var s = t.getNext();
                            s && (e = 0, t = s)
                        }
                        this._setCurve(t), this._time = e, this._point = n || t.getPointAtTime(e), this._overlap = i, this._distance = r, this._intersection = this._next = this._previous = null
                    },
                    _setCurve: function(t) {
                        var e = t._path;
                        this._path = e, this._version = e ? e._version : 0, this._curve = t, this._segment = null, this._segment1 = t._segment1, this._segment2 = t._segment2
                    },
                    _setSegment: function(t) {
                        this._setCurve(t.getCurve()), this._segment = t, this._time = t === this._segment1 ? 0 : 1, this._point = t._point.clone()
                    },
                    getSegment: function() {
                        var t = this.getCurve(),
                            e = this._segment;
                        if (!e) {
                            var n = this.getTime();
                            0 === n ? e = t._segment1 : 1 === n ? e = t._segment2 : null != n && (e = t.getPartLength(0, n) < t.getPartLength(n, 1) ? t._segment1 : t._segment2), this._segment = e
                        }
                        return e
                    },
                    getCurve: function() {
                        function t(t) {
                            var e = t && t.getCurve();
                            if (e && null != (n._time = e.getTimeOf(n._point))) return n._setCurve(e), n._segment = t, e
                        }
                        var e = this._path,
                            n = this;
                        return e && e._version !== this._version && (this._time = this._curve = this._offset = null), this._curve || t(this._segment) || t(this._segment1) || t(this._segment2.getPrevious())
                    },
                    getPath: function() {
                        var t = this.getCurve();
                        return t && t._path
                    },
                    getIndex: function() {
                        var t = this.getCurve();
                        return t && t.getIndex()
                    },
                    getTime: function() {
                        var t = this.getCurve(),
                            e = this._time;
                        return t && null == e ? this._time = t.getTimeOf(this._point) : e
                    },
                    getParameter: "#getTime",
                    getPoint: function() {
                        return this._point
                    },
                    getOffset: function() {
                        var t = this._offset;
                        if (null == t) {
                            t = 0;
                            var e = this.getPath(),
                                n = this.getIndex();
                            if (e && null != n)
                                for (var i = e.getCurves(), r = 0; r < n; r++) t += i[r].getLength();
                            this._offset = t += this.getCurveOffset()
                        }
                        return t
                    },
                    getCurveOffset: function() {
                        var t = this.getCurve(),
                            e = this.getTime();
                        return null != e && t && t.getPartLength(0, e)
                    },
                    getIntersection: function() {
                        return this._intersection
                    },
                    getDistance: function() {
                        return this._distance
                    },
                    divide: function() {
                        var t = this.getCurve(),
                            e = null;
                        return t && (e = t.divideAtTime(this.getTime()), e && this._setSegment(e._segment1)), e
                    },
                    split: function() {
                        var t = this.getCurve();
                        return t ? t.splitAtTime(this.getTime()) : null
                    },
                    equals: function(t, e) {
                        var n = this === t,
                            i = 2e-7;
                        if (!n && t instanceof L && this.getPath() === t.getPath() && this.getPoint().isClose(t.getPoint(), i)) {
                            var r = this.getCurve(),
                                s = t.getCurve(),
                                a = Math.abs,
                                o = a((r.isLast() && s.isFirst() ? -1 : r.getIndex()) + this.getTime() - ((s.isLast() && r.isFirst() ? -1 : s.getIndex()) + t.getTime()));
                            n = (o < 4e-7 || (o = a(this.getOffset() - t.getOffset())) < i || a(this.getPath().getLength() - o) < i) && (e || !this._intersection && !t._intersection || this._intersection && this._intersection.equals(t._intersection, !0))
                        }
                        return n
                    },
                    toString: function() {
                        var t = [],
                            e = this.getPoint(),
                            n = c.instance;
                        e && t.push("point: " + e);
                        var i = this.getIndex();
                        null != i && t.push("index: " + i);
                        var r = this.getTime();
                        return null != r && t.push("time: " + n.number(r)), null != this._distance && t.push("distance: " + n.number(this._distance)), "{ " + t.join(", ") + " }"
                    },
                    isTouching: function() {
                        var t = this._intersection;
                        if (t && this.getTangent().isCollinear(t.getTangent())) {
                            var e = this.getCurve(),
                                n = t.getCurve();
                            return !(e.isStraight() && n.isStraight() && e.getLine().intersect(n.getLine()))
                        }
                        return !1
                    },
                    isCrossing: function() {
                        function t(t, e, n) {
                            return e < n ? t > e && t < n : t > e || t < n
                        }
                        var e = this._intersection;
                        if (!e) return !1;
                        var n = this.getTime(),
                            i = e.getTime(),
                            r = 4e-7,
                            s = 1 - r,
                            a = n > r && n < s,
                            o = i > r && i < s;
                        if (a && o) return !this.isTouching();
                        var h = this.getCurve(),
                            u = n <= r ? h.getPrevious() : h,
                            l = e.getCurve(),
                            c = i <= r ? l.getPrevious() : l;
                        if (n >= s && (h = h.getNext()), i >= s && (l = l.getNext()), !(u && h && c && l)) return !1;
                        var d = [];
                        a || d.push(u.getLength(), h.getLength()), o || d.push(c.getLength(), l.getLength());
                        var f = this.getPoint(),
                            _ = Math.min.apply(Math, d) / 64,
                            g = a ? h.getTangentAtTime(n) : h.getPointAt(_).subtract(f),
                            v = a ? g.negate() : u.getPointAt(-_).subtract(f),
                            p = o ? l.getTangentAtTime(i) : l.getPointAt(_).subtract(f),
                            m = o ? p.negate() : c.getPointAt(-_).subtract(f),
                            y = v.getAngle(),
                            w = g.getAngle(),
                            x = m.getAngle(),
                            b = p.getAngle();
                        return !!(a ? t(y, x, b) ^ t(w, x, b) && t(y, b, x) ^ t(w, b, x) : t(x, y, w) ^ t(b, y, w) && t(x, w, y) ^ t(b, w, y))
                    },
                    hasOverlap: function() {
                        return !!this._overlap
                    }
                }, o.each(z._evaluateMethods, function(t) {
                    var e = t + "At";
                    this[t] = function() {
                        var t = this.getCurve(),
                            n = this.getTime();
                        return null != n && t && t[e](n, !0)
                    }
                }, {
                    preserve: !0
                }), new function() {
                    function t(t, e, n) {
                        function i(n, i) {
                            for (var s = n + i; s >= -1 && s <= r; s += i) {
                                var a = t[(s % r + r) % r];
                                if (!e.getPoint().isClose(a.getPoint(), 2e-7)) break;
                                if (e.equals(a)) return a
                            }
                            return null
                        }
                        for (var r = t.length, s = 0, a = r - 1; s <= a;) {
                            var o, h = s + a >>> 1,
                                u = t[h];
                            if (n && (o = e.equals(u) ? u : i(h, -1) || i(h, 1))) return e._overlap && (o._overlap = o._intersection._overlap = !0), o;
                            var l = e.getPath(),
                                c = u.getPath(),
                                d = l === c ? e.getIndex() + e.getTime() - (u.getIndex() + u.getTime()) : l._id - c._id;
                            d < 0 ? a = h - 1 : s = h + 1
                        }
                        return t.splice(s, 0, e), e
                    }
                    return {
                        statics: {
                            insert: t,
                            expand: function(e) {
                                for (var n = e.slice(), i = e.length - 1; i >= 0; i--) t(n, e[i]._intersection, !1);
                                return n
                            }
                        }
                    }
                }),
                E = S.extend({
                    _class: "PathItem",
                    _selectBounds: !1,
                    _canScaleStroke: !0,
                    initialize: function() {},
                    statics: {
                        create: function(t) {
                            var e = (t && t.match(/m/gi) || []).length > 1 || /z\s*\S+/i.test(t) ? R : N;
                            return new e(t)
                        }
                    },
                    _asPathItem: function() {
                        return this
                    },
                    setPathData: function(t) {
                        function e(t, e) {
                            var n = +i[t];
                            return o && (n += h[e]), n
                        }

                        function n(t) {
                            return new _(e(t, "x"), e(t + 1, "y"))
                        }
                        var i, r, s, a = t && t.match(/[mlhvcsqtaz][^mlhvcsqtaz]*/gi),
                            o = !1,
                            h = new _,
                            u = new _;
                        this.clear();
                        for (var l = 0, c = a && a.length; l < c; l++) {
                            var d = a[l],
                                f = d[0],
                                g = f.toLowerCase();
                            i = d.match(/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g);
                            var p = i && i.length;
                            switch (o = f === g, "z" !== r || /[mz]/.test(g) || this.moveTo(h = u), g) {
                                case "m":
                                case "l":
                                    for (var m = "m" === g, y = 0; y < p; y += 2) this[0 === y && m ? "moveTo" : "lineTo"](h = n(y));
                                    s = h, m && (u = h);
                                    break;
                                case "h":
                                case "v":
                                    for (var w = "h" === g ? "x" : "y", y = 0; y < p; y++) h[w] = e(y, w), this.lineTo(h);
                                    s = h;
                                    break;
                                case "c":
                                    for (var y = 0; y < p; y += 6) this.cubicCurveTo(n(y), s = n(y + 2), h = n(y + 4));
                                    break;
                                case "s":
                                    for (var y = 0; y < p; y += 4) this.cubicCurveTo(/[cs]/.test(r) ? h.multiply(2).subtract(s) : h, s = n(y), h = n(y + 2)), r = g;
                                    break;
                                case "q":
                                    for (var y = 0; y < p; y += 4) this.quadraticCurveTo(s = n(y), h = n(y + 2));
                                    break;
                                case "t":
                                    for (var y = 0; y < p; y += 2) this.quadraticCurveTo(s = /[qt]/.test(r) ? h.multiply(2).subtract(s) : h, h = n(y)), r = g;
                                    break;
                                case "a":
                                    for (var y = 0; y < p; y += 7) this.arcTo(h = n(y + 5), new v((+i[y]), (+i[y + 1])), +i[y + 2], +i[y + 4], +i[y + 3]);
                                    break;
                                case "z":
                                    this.closePath(1e-12)
                            }
                            r = g
                        }
                    },
                    _canComposite: function() {
                        return !(this.hasFill() && this.hasStroke())
                    },
                    _contains: function(t) {
                        var e = t.isInside(this.getBounds({
                            internal: !0,
                            handle: !0
                        })) && this._getWinding(t);
                        return !!("evenodd" === this.getFillRule() ? 1 & e : e)
                    },
                    getIntersections: function(t, e, n, i) {
                        var r = this === t || !t,
                            s = this._matrix._orNullIfIdentity(),
                            a = r ? s : (n || t._matrix)._orNullIfIdentity();
                        if (!r && !this.getBounds(s).touches(t.getBounds(a))) return [];
                        for (var o, t, h = this.getCurves(), u = r ? h : t.getCurves(), l = h.length, c = r ? l : u.length, d = [], f = [], _ = 0; _ < c; _++) d[_] = u[_].getValues(a);
                        for (var _ = 0; _ < l; _++) {
                            var g = h[_],
                                v = r ? d[_] : g.getValues(s),
                                p = g.getPath();
                            p !== t && (t = p, o = [], f.push(o)), r && z._getSelfIntersection(v, g, o, {
                                include: e,
                                excludeStart: 1 === l && g.getPoint1().equals(g.getPoint2())
                            });
                            for (var m = r ? _ + 1 : 0; m < c; m++) {
                                if (i && o.length) return o;
                                var y = u[m];
                                z._getIntersections(v, d[m], g, y, o, {
                                    include: e,
                                    excludeStart: r && g.getPrevious() === y,
                                    excludeEnd: r && g.getNext() === y
                                })
                            }
                        }
                        o = [];
                        for (var _ = 0, w = f.length; _ < w; _++) o.push.apply(o, f[_]);
                        return o
                    },
                    getCrossings: function(t) {
                        return this.getIntersections(t, function(t) {
                            return t._overlap || t.isCrossing()
                        })
                    },
                    getNearestLocation: function() {
                        for (var t = _.read(arguments), e = this.getCurves(), n = 1 / 0, i = null, r = 0, s = e.length; r < s; r++) {
                            var a = e[r].getNearestLocation(t);
                            a._distance < n && (n = a._distance, i = a)
                        }
                        return i
                    },
                    getNearestPoint: function() {
                        var t = this.getNearestLocation.apply(this, arguments);
                        return t ? t.getPoint() : t
                    },
                    interpolate: function(t, e, n) {
                        var i = !this._children,
                            r = i ? "_segments" : "_children",
                            s = t[r],
                            a = e[r],
                            o = this[r];
                        if (!s || !a || s.length !== a.length) throw new Error("Invalid operands in interpolate() call: " + t + ", " + e);
                        var h = o.length,
                            u = a.length;
                        if (h < u)
                            for (var l = i ? A : N, c = h; c < u; c++) this.add(new l);
                        else h > u && this[i ? "removeSegments" : "removeChildren"](u, h);
                        for (var c = 0; c < u; c++) o[c].interpolate(s[c], a[c], n);
                        i && (this.setClosed(t._closed), this._changed(9))
                    }
                }),
                N = E.extend({
                    _class: "Path",
                    _serializeFields: {
                        segments: [],
                        closed: !1
                    },
                    initialize: function(t) {
                        this._closed = !1, this._segments = [], this._version = 0;
                        var e = Array.isArray(t) ? "object" == typeof t[0] ? t : arguments : !t || t.size !== r || t.x === r && t.point === r ? null : arguments;
                        e && e.length > 0 ? this.setSegments(e) : (this._curves = r, this._segmentSelection = 0, e || "string" != typeof t || (this.setPathData(t), t = null)), this._initialize(!e && t)
                    },
                    _equals: function(t) {
                        return this._closed === t._closed && o.equals(this._segments, t._segments)
                    },
                    copyContent: function(t) {
                        this.setSegments(t._segments), this._closed = t._closed;
                        var e = t._clockwise;
                        e !== r && (this._clockwise = e)
                    },
                    _changed: function t(e) {
                        if (t.base.call(this, e), 8 & e) {
                            if (this._length = this._area = this._clockwise = this._monoCurves = r, 16 & e) this._version++;
                            else if (this._curves)
                                for (var n = 0, i = this._curves.length; n < i; n++) this._curves[n]._changed()
                        } else 32 & e && (this._bounds = r)
                    },
                    getStyle: function() {
                        var t = this._parent;
                        return (t instanceof R ? t : this)._style
                    },
                    getSegments: function() {
                        return this._segments
                    },
                    setSegments: function(t) {
                        var e = this.isFullySelected();
                        this._segments.length = 0, this._segmentSelection = 0, this._curves = r, t && t.length > 0 && this._add(A.readAll(t)), e && this.setFullySelected(!0)
                    },
                    getFirstSegment: function() {
                        return this._segments[0]
                    },
                    getLastSegment: function() {
                        return this._segments[this._segments.length - 1]
                    },
                    getCurves: function() {
                        var t = this._curves,
                            e = this._segments;
                        if (!t) {
                            var n = this._countCurves();
                            t = this._curves = new Array(n);
                            for (var i = 0; i < n; i++) t[i] = new z(this, e[i], e[i + 1] || e[0])
                        }
                        return t
                    },
                    getFirstCurve: function() {
                        return this.getCurves()[0]
                    },
                    getLastCurve: function() {
                        var t = this.getCurves();
                        return t[t.length - 1]
                    },
                    isClosed: function() {
                        return this._closed
                    },
                    setClosed: function(t) {
                        if (this._closed != (t = !!t)) {
                            if (this._closed = t, this._curves) {
                                var e = this._curves.length = this._countCurves();
                                t && (this._curves[e - 1] = new z(this, this._segments[e - 1], this._segments[0]))
                            }
                            this._changed(25)
                        }
                    }
                }, {
                    beans: !0,
                    getPathData: function(t, e) {
                        function n(e, n) {
                            e._transformCoordinates(t, g), i = g[0], r = g[1], v ? (p.push("M" + _.pair(i, r)), v = !1) : (o = g[2], h = g[3], o === i && h === r && u === s && l === a ? n || p.push("l" + _.pair(i - s, r - a)) : p.push("c" + _.pair(u - s, l - a) + " " + _.pair(o - s, h - a) + " " + _.pair(i - s, r - a))), s = i, a = r, u = g[4], l = g[5]
                        }
                        var i, r, s, a, o, h, u, l, d = this._segments,
                            f = d.length,
                            _ = new c(e),
                            g = new Array(6),
                            v = !0,
                            p = [];
                        if (0 === f) return "";
                        for (var m = 0; m < f; m++) n(d[m]);
                        return this._closed && f > 0 && (n(d[0], !0), p.push("z")), p.join("")
                    },
                    isEmpty: function() {
                        return 0 === this._segments.length
                    },
                    _transformContent: function(t) {
                        for (var e = this._segments, n = new Array(6), i = 0, r = e.length; i < r; i++) e[i]._transformCoordinates(t, n, !0);
                        return !0
                    },
                    _add: function(t, e) {
                        for (var n = this._segments, i = this._curves, r = t.length, s = null == e, e = s ? n.length : e, a = 0; a < r; a++) {
                            var o = t[a];
                            o._path && (o = t[a] = o.clone()), o._path = this, o._index = e + a, o._selection && this._updateSelection(o, 0, o._selection)
                        }
                        if (s) n.push.apply(n, t);
                        else {
                            n.splice.apply(n, [e, 0].concat(t));
                            for (var a = e + r, h = n.length; a < h; a++) n[a]._index = a
                        }
                        if (i) {
                            var u = this._countCurves(),
                                l = e > 0 && e + r - 1 === u ? e - 1 : e,
                                c = l,
                                d = Math.min(l + r, u);
                            t._curves && (i.splice.apply(i, [l, 0].concat(t._curves)), c += t._curves.length);
                            for (var a = c; a < d; a++) i.splice(a, 0, new z(this, null, null));
                            this._adjustCurves(l, d)
                        }
                        return this._changed(25), t
                    },
                    _adjustCurves: function(t, e) {
                        for (var n, i = this._segments, r = this._curves, s = t; s < e; s++) n = r[s], n._path = this, n._segment1 = i[s], n._segment2 = i[s + 1] || i[0], n._changed();
                        (n = r[this._closed && 0 === t ? i.length - 1 : t - 1]) && (n._segment2 = i[t] || i[0], n._changed()), (n = r[e]) && (n._segment1 = i[e], n._changed())
                    },
                    _countCurves: function() {
                        var t = this._segments.length;
                        return !this._closed && t > 0 ? t - 1 : t
                    },
                    add: function(t) {
                        return arguments.length > 1 && "number" != typeof t ? this._add(A.readAll(arguments)) : this._add([A.read(arguments)])[0]
                    },
                    insert: function(t, e) {
                        return arguments.length > 2 && "number" != typeof e ? this._add(A.readAll(arguments, 1), t) : this._add([A.read(arguments, 1)], t)[0]
                    },
                    addSegment: function() {
                        return this._add([A.read(arguments)])[0]
                    },
                    insertSegment: function(t) {
                        return this._add([A.read(arguments, 1)], t)[0]
                    },
                    addSegments: function(t) {
                        return this._add(A.readAll(t))
                    },
                    insertSegments: function(t, e) {
                        return this._add(A.readAll(e), t)
                    },
                    removeSegment: function(t) {
                        return this.removeSegments(t, t + 1)[0] || null
                    },
                    removeSegments: function(t, e, n) {
                        t = t || 0, e = o.pick(e, this._segments.length);
                        var i = this._segments,
                            r = this._curves,
                            s = i.length,
                            a = i.splice(t, e - t),
                            h = a.length;
                        if (!h) return a;
                        for (var u = 0; u < h; u++) {
                            var l = a[u];
                            l._selection && this._updateSelection(l, l._selection, 0), l._index = l._path = null
                        }
                        for (var u = t, c = i.length; u < c; u++) i[u]._index = u;
                        if (r) {
                            for (var d = t > 0 && e === s + (this._closed ? 1 : 0) ? t - 1 : t, r = r.splice(d, h), u = r.length - 1; u >= 0; u--) r[u]._path = null;
                            n && (a._curves = r.slice(1)), this._adjustCurves(d, d)
                        }
                        return this._changed(25), a
                    },
                    clear: "#removeSegments",
                    hasHandles: function() {
                        for (var t = this._segments, e = 0, n = t.length; e < n; e++)
                            if (t[e].hasHandles()) return !0;
                        return !1
                    },
                    clearHandles: function() {
                        for (var t = this._segments, e = 0, n = t.length; e < n; e++) t[e].clearHandles()
                    },
                    getLength: function() {
                        if (null == this._length) {
                            for (var t = this.getCurves(), e = 0, n = 0, i = t.length; n < i; n++) e += t[n].getLength();
                            this._length = e
                        }
                        return this._length
                    },
                    getArea: function(t) {
                        var e = t === r,
                            n = this._area;
                        if (!e || null == n) {
                            var i = this._segments,
                                s = i.length,
                                a = e ? this._closed : t,
                                o = s - 1;
                            n = 0;
                            for (var h = 0, u = a ? s : o; h < u; h++) n += z.getArea(z.getValues(i[h], i[h < o ? h + 1 : 0]));
                            e && (this._area = n)
                        }
                        return n
                    },
                    isClockwise: function() {
                        return this._clockwise !== r ? this._clockwise : this.getArea() >= 0
                    },
                    setClockwise: function(t) {
                        this.isClockwise() != (t = !!t) && this.reverse(), this._clockwise = t
                    },
                    isFullySelected: function() {
                        var t = this._segments.length;
                        return this.isSelected() && t > 0 && this._segmentSelection === 7 * t
                    },
                    setFullySelected: function(t) {
                        t && this._selectSegments(!0), this.setSelected(t)
                    },
                    setSelection: function t(e) {
                        1 & e || this._selectSegments(!1), t.base.call(this, e)
                    },
                    _selectSegments: function(t) {
                        var e = this._segments,
                            n = e.length,
                            i = t ? 7 : 0;
                        this._segmentSelection = i * n;
                        for (var r = 0; r < n; r++) e[r]._selection = i
                    },
                    _updateSelection: function(t, e, n) {
                        t._selection = n;
                        var i = this._segmentSelection += n - e;
                        i > 0 && this.setSelected(!0)
                    },
                    splitAt: function(t) {
                        var e = "number" == typeof t ? this.getLocationAt(t) : t,
                            n = e && e.index,
                            i = e && e.time,
                            r = 4e-7,
                            s = 1 - r;
                        i >= s && (n++, i = 0);
                        var a = this.getCurves();
                        if (n >= 0 && n < a.length) {
                            i >= r && a[n++].divideAtTime(i);
                            var o, h = this.removeSegments(n, this._segments.length, !0);
                            return this._closed ? (this.setClosed(!1), o = this) : (o = new N(S.NO_INSERT), o.insertAbove(this, !0), o.copyAttributes(this)), o._add(h, 0), this.addSegment(h[0]), o
                        }
                        return null
                    },
                    split: function(t, e) {
                        var n, i = e === r ? t : (n = this.getCurves()[t]) && n.getLocationAtTime(e);
                        return null != i ? this.splitAt(i) : null
                    },
                    join: function(t, e) {
                        var n = e || 0;
                        if (t && t !== this) {
                            var i = t._segments,
                                r = this.getLastSegment(),
                                s = t.getLastSegment();
                            if (!s) return this;
                            r && r._point.isClose(s._point, n) && t.reverse();
                            var a = t.getFirstSegment();
                            if (r && r._point.isClose(a._point, n)) r.setHandleOut(a._handleOut), this._add(i.slice(1));
                            else {
                                var o = this.getFirstSegment();
                                o && o._point.isClose(a._point, n) && t.reverse(), s = t.getLastSegment(), o && o._point.isClose(s._point, n) ? (o.setHandleIn(s._handleIn), this._add(i.slice(0, i.length - 1), 0)) : this._add(i.slice())
                            }
                            t._closed && this._add([i[0]]), t.remove()
                        }
                        var h = this.getFirstSegment(),
                            u = this.getLastSegment();
                        return h !== u && h._point.isClose(u._point, n) && (h.setHandleIn(u._handleIn), u.remove(), this.setClosed(!0)), this
                    },
                    reduce: function(t) {
                        for (var e = this.getCurves(), n = t && t.simplify, i = n ? 2e-7 : 0, r = e.length - 1; r >= 0; r--) {
                            var s = e[r];
                            !s.hasHandles() && (s.getLength() < i || n && s.isCollinear(s.getNext())) && s.remove()
                        }
                        return this
                    },
                    reverse: function() {
                        this._segments.reverse();
                        for (var t = 0, e = this._segments.length; t < e; t++) {
                            var n = this._segments[t],
                                i = n._handleIn;
                            n._handleIn = n._handleOut, n._handleOut = i, n._index = t
                        }
                        this._curves = null, this._clockwise !== r && (this._clockwise = !this._clockwise), this._changed(9)
                    },
                    flatten: function(t) {
                        for (var e = new j(this, t || .25, 256, (!0)), n = e.parts, i = n.length, r = [], s = 0; s < i; s++) r.push(new A(n[s].curve.slice(0, 2)));
                        !this._closed && i > 0 && r.push(new A(n[i - 1].curve.slice(6))), this.setSegments(r)
                    },
                    simplify: function(t) {
                        var e = new F(this).fit(t || 2.5);
                        return e && this.setSegments(e), !!e
                    },
                    smooth: function(t) {
                        function e(t, e) {
                            var i = t && t.index;
                            if (null != i) {
                                var r = t.path;
                                if (r && r !== n) throw new Error(t._class + " " + i + " of " + r + " is not part of " + n);
                                e && t instanceof z && i++
                            } else i = "number" == typeof t ? t : e;
                            return Math.min(i < 0 && h ? i % o : i < 0 ? i + o : i, o - 1)
                        }
                        var n = this,
                            i = t || {},
                            s = i.type || "asymmetric",
                            a = this._segments,
                            o = a.length,
                            h = this._closed,
                            u = h && i.from === r && i.to === r,
                            l = e(i.from, 0),
                            c = e(i.to, o - 1);
                        if (l > c)
                            if (h) l -= o;
                            else {
                                var d = l;
                                l = c, c = d
                            } if (/^(?:asymmetric|continuous)$/.test(s)) {
                            var f = "asymmetric" === s,
                                _ = Math.min,
                                g = c - l + 1,
                                v = g - 1,
                                p = u ? _(g, 4) : 1,
                                m = p,
                                y = p,
                                w = [];
                            if (h || (m = _(1, l), y = _(1, o - c - 1)), v += m + y, v <= 1) return;
                            for (var x = 0, b = l - m; x <= v; x++, b++) w[x] = a[(b < 0 ? b + o : b) % o]._point;
                            for (var S = w[0]._x + 2 * w[1]._x, C = w[0]._y + 2 * w[1]._y, k = 2, M = v - 1, P = [S], O = [C], T = [k], I = [], A = [], x = 1; x < v; x++) {
                                var D = x < M,
                                    L = D ? 1 : f ? 1 : 2,
                                    E = D ? 4 : f ? 2 : 7,
                                    N = D ? 4 : f ? 3 : 8,
                                    R = D ? 2 : f ? 0 : 1,
                                    j = L / k;
                                k = T[x] = E - j, S = P[x] = N * w[x]._x + R * w[x + 1]._x - j * S, C = O[x] = N * w[x]._y + R * w[x + 1]._y - j * C
                            }
                            I[M] = P[M] / T[M], A[M] = O[M] / T[M];
                            for (var x = v - 2; x >= 0; x--) I[x] = (P[x] - I[x + 1]) / T[x], A[x] = (O[x] - A[x + 1]) / T[x];
                            I[v] = (3 * w[v]._x - I[M]) / 2, A[v] = (3 * w[v]._y - A[M]) / 2;
                            for (var x = m, F = v - y, b = l; x <= F; x++, b++) {
                                var Y = a[b < 0 ? b + o : b],
                                    B = Y._point,
                                    V = I[x] - B._x,
                                    W = A[x] - B._y;
                                (u || x < F) && Y.setHandleOut(V, W), (u || x > m) && Y.setHandleIn(-V, -W)
                            }
                        } else
                            for (var x = l; x <= c; x++) a[x < 0 ? x + o : x].smooth(i, !u && x === l, !u && x === c)
                    },
                    toShape: function(t) {
                        function e(t, e) {
                            var n = l[t],
                                i = n.getNext(),
                                r = l[e],
                                s = r.getNext();
                            return n._handleOut.isZero() && i._handleIn.isZero() && r._handleOut.isZero() && s._handleIn.isZero() && i._point.subtract(n._point).isCollinear(s._point.subtract(r._point))
                        }

                        function n(t) {
                            var e = l[t],
                                n = e.getPrevious(),
                                i = e.getNext();
                            return n._handleOut.isZero() && e._handleIn.isZero() && e._handleOut.isZero() && i._handleIn.isZero() && e._point.subtract(n._point).isOrthogonal(i._point.subtract(e._point))
                        }

                        function i(t) {
                            var e = l[t],
                                n = e.getNext(),
                                i = e._handleOut,
                                r = n._handleIn,
                                s = .5522847498307936;
                            if (i.isOrthogonal(r)) {
                                var a = e._point,
                                    o = n._point,
                                    h = new x(a, i, (!0)).intersect(new x(o, r, (!0)), !0);
                                return h && d.isZero(i.getLength() / h.subtract(a).getLength() - s) && d.isZero(r.getLength() / h.subtract(o).getLength() - s)
                            }
                            return !1
                        }

                        function s(t, e) {
                            return l[t]._point.getDistance(l[e]._point)
                        }
                        if (!this._closed) return null;
                        var a, o, h, u, l = this._segments;
                        if (!this.hasHandles() && 4 === l.length && e(0, 2) && e(1, 3) && n(1) ? (a = M.Rectangle, o = new v(s(0, 3), s(0, 1)), u = l[1]._point.add(l[2]._point).divide(2)) : 8 === l.length && i(0) && i(2) && i(4) && i(6) && e(1, 5) && e(3, 7) ? (a = M.Rectangle, o = new v(s(1, 6), s(0, 3)), h = o.subtract(new v(s(0, 7), s(1, 2))).divide(2), u = l[3]._point.add(l[4]._point).divide(2)) : 4 === l.length && i(0) && i(1) && i(2) && i(3) && (d.isZero(s(0, 2) - s(1, 3)) ? (a = M.Circle, h = s(0, 2) / 2) : (a = M.Ellipse, h = new v(s(2, 0) / 2, s(3, 1) / 2)), u = l[1]._point), a) {
                            var c = this.getPosition(!0),
                                f = new a({
                                    center: c,
                                    size: o,
                                    radius: h,
                                    insert: !1
                                });
                            return f.copyAttributes(this, !0), f._matrix.prepend(this._matrix), f.rotate(u.subtract(c).getAngle() + 90), (t === r || t) && f.insertAbove(this), f
                        }
                        return null
                    },
                    toPath: "#clone",
                    _hitTestSelf: function(t, e, n, i) {
                        function r(e, n) {
                            return t.subtract(e).divide(n).length <= 1
                        }

                        function s(t, n, i) {
                            if (!e.selected || n.isSelected()) {
                                var s = t._point;
                                if (n !== s && (n = n.add(s)), r(n, x)) return new I(i, g, {
                                    segment: t,
                                    point: n
                                })
                            }
                        }

                        function a(t, n) {
                            return (n || e.segments) && s(t, t._point, "segment") || !n && e.handles && (s(t, t._handleIn, "handle-in") || s(t, t._handleOut, "handle-out"))
                        }

                        function o(t) {
                            d.add(t)
                        }

                        function h(e) {
                            if (("round" !== u || "round" !== l) && (d = new N({
                                    internal: !0,
                                    closed: !0
                                }), y || e._index > 0 && e._index < m - 1 ? "round" !== u && (e._handleIn.isZero() || e._handleOut.isZero()) && N._addBevelJoin(e, u, k, c, null, i, o, !0) : "round" !== l && N._addSquareCap(e, l, k, null, i, o, !0), !d.isEmpty())) {
                                var n;
                                return d.contains(t) || (n = d.getNearestLocation(t)) && r(n.getPoint(), w)
                            }
                            return r(e._point, x)
                        }
                        var u, l, c, d, f, _, g = this,
                            v = this.getStyle(),
                            p = this._segments,
                            m = p.length,
                            y = this._closed,
                            w = e._tolerancePadding,
                            x = w,
                            b = e.stroke && v.hasStroke(),
                            S = e.fill && v.hasFill(),
                            C = e.curves,
                            k = b ? v.getStrokeWidth() / 2 : S && e.tolerance > 0 || C ? 0 : null;
                        if (null !== k && (k > 0 ? (u = v.getStrokeJoin(), l = v.getStrokeCap(), c = k * v.getMiterLimit(), x = x.add(N._getStrokePadding(k, i))) : u = l = "round"), !e.ends || e.segments || y) {
                            if (e.segments || e.handles)
                                for (var M = 0; M < m; M++)
                                    if (_ = a(p[M])) return _
                        } else if (_ = a(p[0], !0) || a(p[m - 1], !0)) return _;
                        if (null !== k) {
                            if (f = this.getNearestLocation(t)) {
                                var P = f.getTime();
                                0 === P || 1 === P && m > 1 ? h(f.getSegment()) || (f = null) : r(f.getPoint(), x) || (f = null)
                            }
                            if (!f && "miter" === u && m > 1)
                                for (var M = 0; M < m; M++) {
                                    var O = p[M];
                                    if (t.getDistance(O._point) <= c && h(O)) {
                                        f = O.getLocation();
                                        break
                                    }
                                }
                        }
                        return !f && S && this._contains(t) || f && !b && !C ? new I("fill", this) : f ? new I(b ? "stroke" : "curve", this, {
                            location: f,
                            point: f.getPoint()
                        }) : null
                    }
                }, o.each(z._evaluateMethods, function(t) {
                    this[t + "At"] = function(e) {
                        var n = this.getLocationAt(e);
                        return n && n[t]()
                    }
                }, {
                    beans: !1,
                    getLocationOf: function() {
                        for (var t = _.read(arguments), e = this.getCurves(), n = 0, i = e.length; n < i; n++) {
                            var r = e[n].getLocationOf(t);
                            if (r) return r
                        }
                        return null
                    },
                    getOffsetOf: function() {
                        var t = this.getLocationOf.apply(this, arguments);
                        return t ? t.getOffset() : null
                    },
                    getLocationAt: function(t) {
                        for (var e = this.getCurves(), n = 0, i = 0, r = e.length; i < r; i++) {
                            var s = n,
                                a = e[i];
                            if (n += a.getLength(), n > t) return a.getLocationAt(t - s)
                        }
                        return e.length > 0 && t <= this.getLength() ? new L(e[e.length - 1], 1) : null
                    }
                }), new function() {
                    function t(t, e, n, i) {
                        function r(e) {
                            var n = h[e],
                                i = h[e + 1];
                            s == n && a == i || (t.beginPath(), t.moveTo(s, a), t.lineTo(n, i), t.stroke(), t.beginPath(), t.arc(n, i, o, 0, 2 * Math.PI, !0), t.fill())
                        }
                        for (var s, a, o = i / 2, h = new Array(6), u = 0, l = e.length; u < l; u++) {
                            var c = e[u],
                                d = c._selection;
                            if (c._transformCoordinates(n, h), s = h[0], a = h[1], 2 & d && r(2), 4 & d && r(4), t.fillRect(s - o, a - o, i, i), !(1 & d)) {
                                var f = t.fillStyle;
                                t.fillStyle = "#ffffff", t.fillRect(s - o + 1, a - o + 1, i - 2, i - 2), t.fillStyle = f
                            }
                        }
                    }

                    function e(t, e, n) {
                        function i(e) {
                            if (n) e._transformCoordinates(n, _), r = _[0], s = _[1];
                            else {
                                var i = e._point;
                                r = i._x, s = i._y
                            }
                            if (g) t.moveTo(r, s), g = !1;
                            else {
                                if (n) h = _[2], u = _[3];
                                else {
                                    var d = e._handleIn;
                                    h = r + d._x, u = s + d._y
                                }
                                h === r && u === s && l === a && c === o ? t.lineTo(r, s) : t.bezierCurveTo(l, c, h, u, r, s)
                            }
                            if (a = r, o = s, n) l = _[4], c = _[5];
                            else {
                                var d = e._handleOut;
                                l = a + d._x, c = o + d._y
                            }
                        }
                        for (var r, s, a, o, h, u, l, c, d = e._segments, f = d.length, _ = new Array(6), g = !0, v = 0; v < f; v++) i(d[v]);
                        e._closed && f > 0 && i(d[0])
                    }
                    return {
                        _draw: function(t, n, r, s) {
                            function a(t) {
                                return d[(t % f + f) % f]
                            }
                            var o = n.dontStart,
                                h = n.dontFinish || n.clip,
                                u = this.getStyle(),
                                l = u.hasFill(),
                                c = u.hasStroke(),
                                d = u.getDashArray(),
                                f = !i.support.nativeDash && c && d && d.length;
                            if (o || t.beginPath(), (l || c && !f || h) && (e(t, this, s), this._closed && t.closePath()), !h && (l || c) && (this._setStyles(t, n, r), l && (t.fill(u.getFillRule()), t.shadowColor = "rgba(0,0,0,0)"), c)) {
                                if (f) {
                                    o || t.beginPath();
                                    var _, g = new j(this, .25, 32, (!1), s),
                                        v = g.length,
                                        p = -u.getDashOffset(),
                                        m = 0;
                                    for (p %= v; p > 0;) p -= a(m--) + a(m--);
                                    for (; p < v;) _ = p + a(m++), (p > 0 || _ > 0) && g.drawPart(t, Math.max(p, 0), Math.max(_, 0)), p = _ + a(m++)
                                }
                                t.stroke()
                            }
                        },
                        _drawSelected: function(n, r) {
                            n.beginPath(), e(n, this, r), n.stroke(), t(n, this._segments, r, i.settings.handleSize)
                        }
                    }
                }, new function() {
                    function t(t) {
                        var e = t._segments;
                        if (0 === e.length) throw new Error("Use a moveTo() command first");
                        return e[e.length - 1]
                    }
                    return {
                        moveTo: function() {
                            var t = this._segments;
                            1 === t.length && this.removeSegment(0), t.length || this._add([new A(_.read(arguments))])
                        },
                        moveBy: function() {
                            throw new Error("moveBy() is unsupported on Path items.")
                        },
                        lineTo: function() {
                            this._add([new A(_.read(arguments))])
                        },
                        cubicCurveTo: function() {
                            var e = _.read(arguments),
                                n = _.read(arguments),
                                i = _.read(arguments),
                                r = t(this);
                            r.setHandleOut(e.subtract(r._point)), this._add([new A(i, n.subtract(i))])
                        },
                        quadraticCurveTo: function() {
                            var e = _.read(arguments),
                                n = _.read(arguments),
                                i = t(this)._point;
                            this.cubicCurveTo(e.add(i.subtract(e).multiply(1 / 3)), e.add(n.subtract(e).multiply(1 / 3)), n)
                        },
                        curveTo: function() {
                            var e = _.read(arguments),
                                n = _.read(arguments),
                                i = o.pick(o.read(arguments), .5),
                                r = 1 - i,
                                s = t(this)._point,
                                a = e.subtract(s.multiply(r * r)).subtract(n.multiply(i * i)).divide(2 * i * r);
                            if (a.isNaN()) throw new Error("Cannot put a curve through points with parameter = " + i);
                            this.quadraticCurveTo(a, n)
                        },
                        arcTo: function() {
                            var e, n, i, r, s, a = t(this),
                                h = a._point,
                                u = _.read(arguments),
                                l = o.peek(arguments),
                                c = o.pick(l, !0);
                            if ("boolean" == typeof c) var f = h.add(u).divide(2),
                                e = f.add(f.subtract(h).rotate(c ? -90 : 90));
                            else if (o.remain(arguments) <= 2) e = u, u = _.read(arguments);
                            else {
                                var g = v.read(arguments),
                                    p = d.isZero;
                                if (p(g.width) || p(g.height)) return this.lineTo(u);
                                var m = o.read(arguments),
                                    c = !!o.read(arguments),
                                    y = !!o.read(arguments),
                                    f = h.add(u).divide(2),
                                    b = h.subtract(f).rotate(-m),
                                    S = b.x,
                                    C = b.y,
                                    k = Math.abs,
                                    M = k(g.width),
                                    P = k(g.height),
                                    O = M * M,
                                    T = P * P,
                                    I = S * S,
                                    D = C * C,
                                    z = Math.sqrt(I / O + D / T);
                                if (z > 1 && (M *= z, P *= z, O = M * M, T = P * P), z = (O * T - O * D - T * I) / (O * D + T * I), k(z) < 1e-12 && (z = 0), z < 0) throw new Error("Cannot create an arc with the given arguments");
                                n = new _(M * C / P, -P * S / M).multiply((y === c ? -1 : 1) * Math.sqrt(z)).rotate(m).add(f), s = (new w).translate(n).rotate(m).scale(M, P), r = s._inverseTransform(h), i = r.getDirectedAngle(s._inverseTransform(u)), !c && i > 0 ? i -= 360 : c && i < 0 && (i += 360)
                            }
                            if (e) {
                                var L = new x(h.add(e).divide(2), e.subtract(h).rotate(90), (!0)),
                                    E = new x(e.add(u).divide(2), u.subtract(e).rotate(90), (!0)),
                                    N = new x(h, u),
                                    R = N.getSide(e);
                                if (n = L.intersect(E, !0), !n) {
                                    if (!R) return this.lineTo(u);
                                    throw new Error("Cannot create an arc with the given arguments")
                                }
                                r = h.subtract(n), i = r.getDirectedAngle(u.subtract(n));
                                var j = N.getSide(n);
                                0 === j ? i = R * Math.abs(i) : R === j && (i += i < 0 ? 360 : -360)
                            }
                            for (var F = Math.abs(i), Y = F >= 360 ? 4 : Math.ceil(F / 90), B = i / Y, V = B * Math.PI / 360, W = 4 / 3 * Math.sin(V) / (1 + Math.cos(V)), U = [], q = 0; q <= Y; q++) {
                                var b = u,
                                    H = null;
                                if (q < Y && (H = r.rotate(90).multiply(W), s ? (b = s._transformPoint(r), H = s._transformPoint(r.add(H)).subtract(b)) : b = n.add(r)), 0 === q) a.setHandleOut(H);
                                else {
                                    var G = r.rotate(-90).multiply(W);
                                    s && (G = s._transformPoint(r.add(G)).subtract(b)), U.push(new A(b, G, H))
                                }
                                r = r.rotate(B)
                            }
                            this._add(U)
                        },
                        lineBy: function() {
                            var e = _.read(arguments),
                                n = t(this)._point;
                            this.lineTo(n.add(e))
                        },
                        curveBy: function() {
                            var e = _.read(arguments),
                                n = _.read(arguments),
                                i = o.read(arguments),
                                r = t(this)._point;
                            this.curveTo(r.add(e), r.add(n), i)
                        },
                        cubicCurveBy: function() {
                            var e = _.read(arguments),
                                n = _.read(arguments),
                                i = _.read(arguments),
                                r = t(this)._point;
                            this.cubicCurveTo(r.add(e), r.add(n), r.add(i))
                        },
                        quadraticCurveBy: function() {
                            var e = _.read(arguments),
                                n = _.read(arguments),
                                i = t(this)._point;
                            this.quadraticCurveTo(i.add(e), i.add(n))
                        },
                        arcBy: function() {
                            var e = t(this)._point,
                                n = e.add(_.read(arguments)),
                                i = o.pick(o.peek(arguments), !0);
                            "boolean" == typeof i ? this.arcTo(n, i) : this.arcTo(n, e.add(_.read(arguments)))
                        },
                        closePath: function(t) {
                            this.setClosed(!0), this.join(this, t)
                        }
                    }
                }, {
                    _getBounds: function(t, e) {
                        var n = e.handle ? "getHandleBounds" : e.stroke ? "getStrokeBounds" : "getBounds";
                        return N[n](this._segments, this._closed, this, t, e)
                    },
                    statics: {
                        getBounds: function(t, e, n, i, r, s) {
                            function a(t) {
                                t._transformCoordinates(i, h);
                                for (var e = 0; e < 2; e++) z._addBounds(u[e], u[e + 4], h[e + 2], h[e], e, s ? s[e] : 0, l, c, d);
                                var n = u;
                                u = h, h = n
                            }
                            var o = t[0];
                            if (!o) return new m;
                            for (var h = new Array(6), u = o._transformCoordinates(i, new Array(6)), l = u.slice(0, 2), c = l.slice(), d = new Array(2), f = 1, _ = t.length; f < _; f++) a(t[f]);
                            return e && a(o), new m(l[0], l[1], c[0] - l[0], c[1] - l[1])
                        },
                        getStrokeBounds: function(t, e, n, i, r) {
                            function s(t) {
                                _ = _.include(t)
                            }

                            function a(t) {
                                _ = _.unite(x.setCenter(t._point.transform(i)))
                            }

                            function o(t, e) {
                                var n = t._handleIn,
                                    r = t._handleOut;
                                "round" === e || !n.isZero() && !r.isZero() && n.isCollinear(r) ? a(t) : N._addBevelJoin(t, e, g, w, i, d, s)
                            }

                            function h(t, e) {
                                "round" === e ? a(t) : N._addSquareCap(t, e, g, i, d, s)
                            }
                            var u = n.getStyle(),
                                l = u.hasStroke(),
                                c = u.getStrokeWidth(),
                                d = l && n._getStrokeMatrix(i, r),
                                f = l && N._getStrokePadding(c, d),
                                _ = N.getBounds(t, e, n, i, r, f);
                            if (!l) return _;
                            for (var g = c / 2, p = u.getStrokeJoin(), y = u.getStrokeCap(), w = g * u.getMiterLimit(), x = new m(new v(f)), b = t.length - (e ? 0 : 1), S = 1; S < b; S++) o(t[S], p);
                            return e ? o(t[0], p) : b > 0 && (h(t[0], y), h(t[t.length - 1], y)), _
                        },
                        _getStrokePadding: function(t, e) {
                            if (!e) return [t, t];
                            var n = new _(t, 0).transform(e),
                                i = new _(0, t).transform(e),
                                r = n.getAngleInRadians(),
                                s = n.getLength(),
                                a = i.getLength(),
                                o = Math.sin(r),
                                h = Math.cos(r),
                                u = Math.tan(r),
                                l = Math.atan2(a * u, s),
                                c = Math.atan2(a, u * s);
                            return [Math.abs(s * Math.cos(l) * h + a * Math.sin(l) * o), Math.abs(a * Math.sin(c) * h + s * Math.cos(c) * o)]
                        },
                        _addBevelJoin: function(t, e, n, i, r, s, a, o) {
                            var h = t.getCurve(),
                                u = h.getPrevious(),
                                l = h.getPointAtTime(0),
                                c = u.getNormalAtTime(1),
                                d = h.getNormalAtTime(0),
                                f = c.getDirectedAngle(d) < 0 ? -n : n;
                            if (c.setLength(f), d.setLength(f), r && r._transformPoint(l, l), s && (s._transformPoint(c, c), s._transformPoint(d, d)), o && (a(l), a(l.add(c))), "miter" === e) {
                                var g = new x(l.add(c), new _((-c.y), c.x), (!0)).intersect(new x(l.add(d), new _((-d.y), d.x), (!0)), !0);
                                if (g && l.getDistance(g) <= i && (a(g), !o)) return
                            }
                            o || a(l.add(c)), a(l.add(d))
                        },
                        _addSquareCap: function(t, e, n, i, r, s, a) {
                            var o = t._point,
                                h = t.getLocation(),
                                u = h.getNormal().multiply(n);
                            i && i._transformPoint(o, o), r && r._transformPoint(u, u), a && (s(o.subtract(u)), s(o.add(u))), "square" === e && (o = o.add(u.rotate(0 === h.getTime() ? -90 : 90))), s(o.add(u)), s(o.subtract(u))
                        },
                        getHandleBounds: function(t, e, n, i, r) {
                            var s, a, o = n.getStyle(),
                                h = r.stroke && o.hasStroke();
                            if (h) {
                                var u = n._getStrokeMatrix(i, r),
                                    l = o.getStrokeWidth() / 2,
                                    c = l;
                                "miter" === o.getStrokeJoin() && (c = l * o.getMiterLimit()), "square" === o.getStrokeCap() && (c = Math.max(c, l * Math.sqrt(2))), s = N._getStrokePadding(l, u), a = N._getStrokePadding(c, u)
                            }
                            for (var d = new Array(6), f = 1 / 0, _ = -f, g = f, v = _, p = 0, y = t.length; p < y; p++) {
                                var w = t[p];
                                w._transformCoordinates(i, d);
                                for (var x = 0; x < 6; x += 2) {
                                    var b = 0 === x ? a : s,
                                        S = b ? b[0] : 0,
                                        C = b ? b[1] : 0,
                                        k = d[x],
                                        M = d[x + 1],
                                        P = k - S,
                                        O = k + S,
                                        T = M - C,
                                        I = M + C;
                                    P < f && (f = P), O > _ && (_ = O), T < g && (g = T), I > v && (v = I)
                                }
                            }
                            return new m(f, g, _ - f, v - g)
                        }
                    }
                });
            N.inject({
                statics: new function() {
                    function t(t, e, n) {
                        var i = o.getNamed(n),
                            r = new N(i && i.insert === !1 && S.NO_INSERT);
                        return r._add(t), r._closed = e, r.set(i)
                    }

                    function e(e, n, r) {
                        for (var s = new Array(4), a = 0; a < 4; a++) {
                            var o = i[a];
                            s[a] = new A(o._point.multiply(n).add(e), o._handleIn.multiply(n), o._handleOut.multiply(n))
                        }
                        return t(s, !0, r)
                    }
                    var n = .5522847498307936,
                        i = [new A([-1, 0], [0, n], [0, -n]), new A([0, -1], [-n, 0], [n, 0]), new A([1, 0], [0, -n], [0, n]), new A([0, 1], [n, 0], [-n, 0])];
                    return {
                        Line: function() {
                            return t([new A(_.readNamed(arguments, "from")), new A(_.readNamed(arguments, "to"))], !1, arguments)
                        },
                        Circle: function() {
                            var t = _.readNamed(arguments, "center"),
                                n = o.readNamed(arguments, "radius");
                            return e(t, new v(n), arguments)
                        },
                        Rectangle: function() {
                            var e, i = m.readNamed(arguments, "rectangle"),
                                r = v.readNamed(arguments, "radius", 0, {
                                    readNull: !0
                                }),
                                s = i.getBottomLeft(!0),
                                a = i.getTopLeft(!0),
                                o = i.getTopRight(!0),
                                h = i.getBottomRight(!0);
                            if (!r || r.isZero()) e = [new A(s), new A(a), new A(o), new A(h)];
                            else {
                                r = v.min(r, i.getSize(!0).divide(2));
                                var u = r.width,
                                    l = r.height,
                                    c = u * n,
                                    d = l * n;
                                e = [new A(s.add(u, 0), null, [-c, 0]), new A(s.subtract(0, l), [0, d]), new A(a.add(0, l), null, [0, -d]), new A(a.add(u, 0), [-c, 0], null), new A(o.subtract(u, 0), null, [c, 0]), new A(o.add(0, l), [0, -d], null), new A(h.subtract(0, l), null, [0, d]), new A(h.subtract(u, 0), [c, 0])]
                            }
                            return t(e, !0, arguments)
                        },
                        RoundRectangle: "#Rectangle",
                        Ellipse: function() {
                            var t = M._readEllipse(arguments);
                            return e(t.center, t.radius, arguments)
                        },
                        Oval: "#Ellipse",
                        Arc: function() {
                            var t = _.readNamed(arguments, "from"),
                                e = _.readNamed(arguments, "through"),
                                n = _.readNamed(arguments, "to"),
                                i = o.getNamed(arguments),
                                r = new N(i && i.insert === !1 && S.NO_INSERT);
                            return r.moveTo(t), r.arcTo(e, n), r.set(i)
                        },
                        RegularPolygon: function() {
                            for (var e = _.readNamed(arguments, "center"), n = o.readNamed(arguments, "sides"), i = o.readNamed(arguments, "radius"), r = 360 / n, s = n % 3 === 0, a = new _(0, s ? -i : i), h = s ? -1 : .5, u = new Array(n), l = 0; l < n; l++) u[l] = new A(e.add(a.rotate((l + h) * r)));
                            return t(u, !0, arguments)
                        },
                        Star: function() {
                            for (var e = _.readNamed(arguments, "center"), n = 2 * o.readNamed(arguments, "points"), i = o.readNamed(arguments, "radius1"), r = o.readNamed(arguments, "radius2"), s = 360 / n, a = new _(0, (-1)), h = new Array(n), u = 0; u < n; u++) h[u] = new A(e.add(a.rotate(s * u).multiply(u % 2 ? r : i)));
                            return t(h, !0, arguments)
                        }
                    }
                }
            });
            var R = E.extend({
                _class: "CompoundPath",
                _serializeFields: {
                    children: []
                },
                initialize: function(t) {
                    this._children = [], this._namedChildren = {}, this._initialize(t) || ("string" == typeof t ? this.setPathData(t) : this.addChildren(Array.isArray(t) ? t : arguments))
                },
                insertChildren: function t(e, n, i) {
                    for (var s = n.length - 1; s >= 0; s--) {
                        var a = n[s];
                        a instanceof R && (n = n.slice(), n.splice.apply(n, [s, 1].concat(a.removeChildren())), a.remove())
                    }
                    n = t.base.call(this, e, n, i, N);
                    for (var s = 0, o = !i && n && n.length; s < o; s++) {
                        var a = n[s];
                        a._clockwise === r && a.setClockwise(0 === a._index)
                    }
                    return n
                },
                reduce: function t(e) {
                    for (var n = this._children, i = n.length - 1; i >= 0; i--) {
                        var r = n[i].reduce(e);
                        r.isEmpty() && r.remove()
                    }
                    if (0 === n.length) {
                        var r = new N(S.NO_INSERT);
                        return r.copyAttributes(this), r.insertAbove(this), this.remove(), r
                    }
                    return t.base.call(this)
                },
                isClockwise: function() {
                    var t = this.getFirstChild();
                    return t && t.isClockwise()
                },
                setClockwise: function(t) {
                    this.isClockwise() ^ !!t && this.reverse()
                },
                getFirstSegment: function() {
                    var t = this.getFirstChild();
                    return t && t.getFirstSegment()
                },
                getLastSegment: function() {
                    var t = this.getLastChild();
                    return t && t.getLastSegment()
                },
                getCurves: function() {
                    for (var t = this._children, e = [], n = 0, i = t.length; n < i; n++) e.push.apply(e, t[n].getCurves());
                    return e
                },
                getFirstCurve: function() {
                    var t = this.getFirstChild();
                    return t && t.getFirstCurve()
                },
                getLastCurve: function() {
                    var t = this.getLastChild();
                    return t && t.getFirstCurve()
                },
                getArea: function() {
                    for (var t = this._children, e = 0, n = 0, i = t.length; n < i; n++) e += t[n].getArea();
                    return e
                }
            }, {
                beans: !0,
                getPathData: function(t, e) {
                    for (var n = this._children, i = [], r = 0, s = n.length; r < s; r++) {
                        var a = n[r],
                            o = a._matrix;
                        i.push(a.getPathData(t && !o.isIdentity() ? t.appended(o) : t, e))
                    }
                    return i.join(" ")
                }
            }, {
                _hitTestChildren: function t(e, n, i) {
                    return t.base.call(this, e, n.class === N || "path" === n.type ? n : o.set({}, n, {
                        fill: !1
                    }), i)
                },
                _draw: function(t, e, n, i) {
                    var r = this._children;
                    if (0 !== r.length) {
                        e = e.extend({
                            dontStart: !0,
                            dontFinish: !0
                        }), t.beginPath();
                        for (var s = 0, a = r.length; s < a; s++) r[s].draw(t, e, i);
                        if (!e.clip) {
                            this._setStyles(t, e, n);
                            var o = this._style;
                            o.hasFill() && (t.fill(o.getFillRule()), t.shadowColor = "rgba(0,0,0,0)"), o.hasStroke() && t.stroke()
                        }
                    }
                },
                _drawSelected: function(t, e, n) {
                    for (var i = this._children, r = 0, s = i.length; r < s; r++) {
                        var a = i[r],
                            o = a._matrix;
                        n[a._id] || a._drawSelected(t, o.isIdentity() ? e : e.appended(o))
                    }
                }
            }, new function() {
                function t(t, e) {
                    var n = t._children;
                    if (e && 0 === n.length) throw new Error("Use a moveTo() command first");
                    return n[n.length - 1]
                }
                return o.each(["lineTo", "cubicCurveTo", "quadraticCurveTo", "curveTo", "arcTo", "lineBy", "cubicCurveBy", "quadraticCurveBy", "curveBy", "arcBy"], function(e) {
                    this[e] = function() {
                        var n = t(this, !0);
                        n[e].apply(n, arguments)
                    }
                }, {
                    moveTo: function() {
                        var e = t(this),
                            n = e && e.isEmpty() ? e : new N(S.NO_INSERT);
                        n !== e && this.addChild(n), n.moveTo.apply(n, arguments)
                    },
                    moveBy: function() {
                        var e = t(this, !0),
                            n = e && e.getLastSegment(),
                            i = _.read(arguments);
                        this.moveTo(n ? i.add(n._point) : i)
                    },
                    closePath: function(e) {
                        t(this, !0).closePath(e)
                    }
                })
            }, o.each(["reverse", "flatten", "simplify", "smooth"], function(t) {
                this[t] = function(e) {
                    for (var n, i = this._children, r = 0, s = i.length; r < s; r++) n = i[r][t](e) || n;
                    return n
                }
            }, {}));
            E.inject(new function() {
                function t(t, e) {
                    var n = t.clone(!1).reduce({
                        simplify: !0
                    }).transform(null, !0, !0);
                    return e ? n.resolveCrossings() : n
                }

                function e(t, e, n, i, r) {
                    var s = new t(S.NO_INSERT);
                    return s.addChildren(e, !0), n && (s = s.reduce({
                        simplify: !0
                    })), s.insertAbove(r && i.isSibling(r) && i.getIndex() < r.getIndex() ? r : i), s.copyAttributes(i, !0), s
                }

                function n(n, r, a) {
                    function o(t) {
                        for (var e = 0, n = t.length; e < n; e++) {
                            var i = t[e];
                            g.push.apply(g, i._segments), v.push.apply(v, i._getMonoCurves()), i._overlapsOnly = i._validOverlapsOnly = !0
                        }
                    }
                    var c = l[a];
                    if (c[a] = !0, !n._children && !n._closed) return i(n, r, c);
                    var d = t(n, !0),
                        f = r && n !== r && t(r, !0);
                    f && (c.subtract || c.exclude) ^ (f.isClockwise() ^ d.isClockwise()) && f.reverse();
                    var _ = s(L.expand(d.getCrossings(f))),
                        g = [],
                        v = [];
                    o(d._children || [d]), f && o(f._children || [f]);
                    for (var p = 0, m = _.length; p < m; p++) h(_[p]._segment, d, f, v, c);
                    for (var p = 0, m = g.length; p < m; p++) {
                        var y = g[p],
                            w = y._intersection;
                        if (null == y._winding && h(y, d, f, v, c), !w || !w._overlap) {
                            var x = y._path;
                            x._overlapsOnly = !1, c[y._winding] && (x._validOverlapsOnly = !1)
                        }
                    }
                    return e(R, u(g, c), !0, n, r)
                }

                function i(n, i, r) {
                    function s(t) {
                        if (o.contains(t.getPointAt(t.getLength() / 2)) ^ u) return l.unshift(t), !0
                    }
                    if (!i || !i._children && !i._closed || !r.subtract && !r.intersect) return null;
                    for (var a = t(n, !1), o = t(i, !1), h = a.getCrossings(o), u = r.subtract, l = [], c = h.length - 1; c >= 0; c--) {
                        var d = h[c].split();
                        d && (s(d) && d.getFirstSegment().setHandleIn(0, 0), a.getLastSegment().setHandleOut(0, 0))
                    }
                    return s(a), e(C, l, !1, n, i)
                }

                function r(t, e) {
                    for (var n = t; n;) {
                        if (n === e) return;
                        n = n._previous
                    }
                    for (; t._next && t._next !== e;) t = t._next;
                    if (!t._next) {
                        for (; e._previous;) e = e._previous;
                        t._next = e, e._previous = t
                    }
                }

                function s(t, e) {
                    for (var n, i, s = e && [], a = 4e-7, o = 1 - a, h = !1, u = [], l = t.length - 1; l >= 0; l--) {
                        var c = t[l];
                        if (e) {
                            if (!e(c)) continue;
                            s.unshift(c)
                        }
                        var d, f = c._curve,
                            _ = c._time,
                            g = _;
                        if (f !== n ? h = !f.hasHandles() : i >= a && i <= o && (_ /= i), _ < a) d = f._segment1;
                        else if (_ > o) d = f._segment2;
                        else {
                            var v = f.divideAtTime(_, !0);
                            h && u.push(f, v), d = v._segment1
                        }
                        c._setSegment(d);
                        var p = d._intersection,
                            m = c._intersection;
                        if (p) {
                            r(p, m);
                            for (var y = p; y;) r(y._intersection, p), y = y._next
                        } else d._intersection = m;
                        n = f, i = g
                    }
                    for (var l = 0, w = u.length; l < w; l++) u[l].clearHandles();
                    return s || t
                }

                function a(t, e, n) {
                    var i = 2e-7,
                        r = t.x,
                        s = t.y,
                        o = 0,
                        h = 0,
                        u = e.length,
                        l = [],
                        c = Math.abs;
                    if (n) {
                        for (var d = -(1 / 0), f = 1 / 0, g = s - i, v = s + i, p = 0; p < u; p++)
                            for (var m = e[p].values, y = z.solveCubic(m, 0, r, l, 0, 1), w = y - 1; w >= 0; w--) {
                                var x = z.getPoint(m, l[w]).y;
                                x < g && x > d ? d = x : x > v && x < f && (f = x)
                            }
                        d = (d + s) / 2, f = (f + s) / 2, d > -(1 / 0) && (o = a(new _(r, d), e).winding), f < 1 / 0 && (h = a(new _(r, f), e).winding)
                    } else {
                        for (var b, S, C = r - i, k = r + i, M = 0, P = 0, O = !1, p = 0; p < u; p++) {
                            var T = e[p],
                                I = T.winding,
                                m = T.values,
                                A = m[1],
                                D = m[7];
                            if (T.last && (b = T.last.winding, S = T.last.values[6], O = !1), s >= A && s <= D || s >= D && s <= A)
                                if (I) {
                                    var L = s === A ? m[0] : s === D ? m[6] : 1 === z.solveCubic(m, 1, s, l, 0, 1) ? z.getPoint(m, l[0]).x : null;
                                    null != L && (L >= C && L <= k ? O = !0 : s === A && I === b || s === A && (r - L) * (r - S) < 0 || (L < C ? o += I : L > k && (h += I))), b = I, S = m[6]
                                } else(r - m[0]) * (r - m[6]) <= 0 && (O = !0);
                            O && (p >= u - 1 || e[p + 1].last) && (M += 1, P -= 1)
                        }
                        0 === o && 0 === h && (o = M, h = P)
                    }
                    return {
                        winding: Math.max(c(o), c(h)),
                        contour: !o ^ !h
                    }
                }

                function h(t, e, n, i, r) {
                    var s, o = [],
                        h = t,
                        u = 0;
                    do {
                        var l = t.getCurve(),
                            c = l.getLength();
                        o.push({
                            segment: t,
                            curve: l,
                            length: c
                        }), u += c, t = t.getNext()
                    } while (t && !t._intersection && t !== h);
                    for (var c = u / 2, d = 0, f = o.length; d < f; d++) {
                        var _ = o[d],
                            g = _.length;
                        if (c <= g) {
                            var l = _.curve,
                                v = l._path,
                                p = v._parent,
                                m = l.getTimeAt(c),
                                y = l.getPointAtTime(m),
                                w = Math.abs(l.getTangentAtTime(m).y) < 1e-7;
                            p instanceof R && (v = p), s = r.subtract && n && (v === e && n._getWinding(y, w) || v === n && !e._getWinding(y, w)) ? {
                                winding: 0
                            } : a(y, i, w);
                            break
                        }
                        c -= g
                    }
                    for (var d = o.length - 1; d >= 0; d--) {
                        var x = o[d].segment;
                        x._winding = s.winding, x._contour = s.contour
                    }
                }

                function u(t, e) {
                    function n(t, n) {
                        return !(!t || t._visited || !(!e || e[t._winding] || !n && e.unite && t._contour))
                    }

                    function i(t) {
                        return t === s || t === a
                    }

                    function r(t, r) {
                        if (!t._next) return t;
                        for (; t;) {
                            var s = t._segment,
                                a = s.getNext(),
                                o = a && a._intersection;
                            if (s !== r && (i(s) || i(a) || !s._visited && !a._visited && (!e || n(s) && (n(a) || o && n(o._segment))))) return t;
                            t = t._next
                        }
                        return null
                    }
                    for (var s, a, h = [], u = 0, l = t.length; u < l; u++) {
                        var c, f = null,
                            _ = !1,
                            g = t[u],
                            v = g._intersection;
                        if (!g._visited && g._path._overlapsOnly) {
                            var p = g._path,
                                m = v._segment._path,
                                y = p._segments,
                                w = m._segments;
                            if (o.equals(y, w)) {
                                (e.unite || e.intersect) && p.getArea() && h.push(p.clone(!1));
                                for (var x = 0, b = y.length; x < b; x++) y[x]._visited = w[x]._visited = !0
                            }
                        }
                        if (n(g, !0) && (g._path._validOverlapsOnly || !v || !v._overlap)) {
                            for (s = a = null;;) {
                                v = v && r(v, g) || v;
                                var C = v && v._segment;
                                if (i(g) ? _ = !0 : C && (i(C) ? (_ = !0, g = C) : n(C, n(g, !0)) && (e && (e.intersect || e.subtract) && (g._visited = !0), g = C)), _ || g._visited) {
                                    g._visited = !0;
                                    break
                                }
                                if (g._path._validOverlapsOnly && !n(g)) break;
                                f || (f = new N(S.NO_INSERT), s = g, a = C);
                                var k = g.getNext();
                                f.add(new A(g._point, c, k && g._handleOut)), g._visited = !0, g = k || g._path.getFirstSegment(), c = k && k._handleIn, v = g._intersection
                            }
                            if (_) f.firstSegment.setHandleIn(c), f.setClosed(!0);
                            else if (f) {
                                var M = f.getArea(!0);
                                Math.abs(M) >= 2e-7 && console.error("Boolean operation resulted in open path", "segments =", f._segments.length, "length =", f.getLength(), "area=", M), f = null
                            }
                            f && (f._segments.length > 8 || !d.isZero(f.getArea())) && (h.push(f), f = null)
                        }
                    }
                    return h
                }
                var l = {
                    unite: {
                        1: !0
                    },
                    intersect: {
                        2: !0
                    },
                    subtract: {
                        1: !0
                    },
                    exclude: {
                        1: !0
                    }
                };
                return {
                    _getWinding: function(t, e) {
                        return a(t, this._getMonoCurves(), e).winding
                    },
                    unite: function(t) {
                        return n(this, t, "unite")
                    },
                    intersect: function(t) {
                        return n(this, t, "intersect")
                    },
                    subtract: function(t) {
                        return n(this, t, "subtract")
                    },
                    exclude: function(t) {
                        return n(this, t, "exclude")
                    },
                    divide: function(t) {
                        return e(C, [this.subtract(t), this.intersect(t)], !0, this, t)
                    },
                    resolveCrossings: function() {
                        function t(t) {
                            var e = t && t._intersection;
                            return e && e._overlap
                        }
                        var e = this._children,
                            n = e || [this],
                            i = !1,
                            r = !1,
                            a = this.getIntersections(null, function(t) {
                                return t._overlap && (i = !0) || t.isCrossing() && (r = !0)
                            });
                        if (a = L.expand(a), i)
                            for (var h = s(a, function(t) {
                                    return t._overlap
                                }), l = h.length - 1; l >= 0; l--) {
                                var c = h[l]._segment,
                                    d = c.getPrevious(),
                                    f = c.getNext();
                                if (c._path && t(d) && t(f)) {
                                    c.remove(), d._handleOut.set(0, 0), f._handleIn.set(0, 0);
                                    var _ = d.getCurve();
                                    _.isStraight() && 0 === _.getLength() && d.remove()
                                }
                            }
                        r && (s(a, i && function(t) {
                            var e = t.getCurve(),
                                n = t._intersection._curve,
                                i = t._segment;
                            return !!(e && n && e._path && n._path) || void(i && (i._intersection = null))
                        }), n = u(o.each(n, function(t) {
                            this.push.apply(this, t._segments)
                        }, [])));
                        var g, v = n.length;
                        if (v > 1) {
                            n = n.slice().sort(function(t, e) {
                                return e.getBounds().getArea() - t.getBounds().getArea()
                            });
                            for (var p = n[0], m = [p], y = {}, w = "nonzero" === this.getFillRule(), x = w && o.each(n, function(t) {
                                    this.push(t.isClockwise() ? 1 : -1)
                                }, []), l = 1; l < v; l++) {
                                for (var b = n[l], C = b.getInteriorPoint(), k = !1, M = null, P = !1, O = l - 1; O >= 0 && !M; O--)
                                    if (n[O].contains(C)) {
                                        if (w && !k && (x[l] += x[O], x[l] && x[O])) {
                                            P = y[l] = !0;
                                            break
                                        }
                                        k = !0, M = !y[O] && n[O]
                                    } P || (b.setClockwise(M ? !M.isClockwise() : p.isClockwise()), m.push(b))
                            }
                            n = m, v = m.length
                        }
                        return v > 1 && e ? (n !== e && this.setChildren(n, !0), g = this) : 1 !== v || e || (n[0] !== this && this.setSegments(n[0].removeSegments()), g = this), g || (g = new R(S.NO_INSERT), g.addChildren(n, !0), g = g.reduce(), g.copyAttributes(this), this.replaceWith(g)), g
                    }
                }
            }), N.inject({
                _getMonoCurves: function() {
                    function t(t) {
                        var e = t[1],
                            r = t[7],
                            s = Math.abs((e - r) / (t[0] - t[6])) < 2e-7 ? 0 : e > r ? -1 : 1,
                            a = {
                                values: t,
                                winding: s
                            };
                        i.push(a), s && (n = a)
                    }

                    function e(e) {
                        if (0 !== z.getLength(e)) {
                            var n = e[1],
                                i = e[3],
                                r = e[5],
                                s = e[7];
                            if (z.isStraight(e) || n >= i == i >= r && i >= r == r >= s) t(e);
                            else {
                                var a = 3 * (i - r) - n + s,
                                    o = 2 * (n + r) - 4 * i,
                                    h = i - n,
                                    u = 4e-7,
                                    l = 1 - u,
                                    c = [],
                                    f = d.solveQuadratic(a, o, h, c, u, l);
                                if (f < 1) t(e);
                                else {
                                    c.sort();
                                    var _ = c[0],
                                        g = z.subdivide(e, _);
                                    t(g[0]), f > 1 && (_ = (c[1] - _) / (1 - _), g = z.subdivide(g[1], _), t(g[0])), t(g[1])
                                }
                            }
                        }
                    }
                    var n, i = this._monoCurves;
                    if (!i) {
                        i = this._monoCurves = [];
                        for (var r = this.getCurves(), s = this._segments, a = 0, o = r.length; a < o; a++) e(r[a].getValues());
                        if (!this._closed && s.length > 1) {
                            var h = s[s.length - 1]._point,
                                u = s[0]._point,
                                l = h._x,
                                c = h._y,
                                f = u._x,
                                _ = u._y;
                            e([l, c, l, c, f, _, f, _])
                        }
                        i.length > 0 && (i[0].last = n)
                    }
                    return i
                },
                getInteriorPoint: function() {
                    var t = this.getBounds(),
                        e = t.getCenter(!0);
                    if (!this.contains(e)) {
                        for (var n = this._getMonoCurves(), i = [], r = e.y, s = [], a = 0, o = n.length; a < o; a++) {
                            var h = n[a].values;
                            if (1 === n[a].winding && r > h[1] && r <= h[7] || r >= h[7] && r < h[1])
                                for (var u = z.solveCubic(h, 1, r, i, 0, 1), l = u - 1; l >= 0; l--) s.push(z.getPoint(h, i[l]).x)
                        }
                        s.sort(function(t, e) {
                            return t - e
                        }), e.x = (s[0] + s[1]) / 2
                    }
                    return e
                }
            }), R.inject({
                _getMonoCurves: function() {
                    for (var t = this._children, e = [], n = 0, i = t.length; n < i; n++) e.push.apply(e, t[n]._getMonoCurves());
                    return e
                }
            });
            var j = o.extend({
                    _class: "PathIterator",
                    initialize: function(t, e, n, i, r) {
                        function s(t, e) {
                            var n = z.getValues(t, e, r);
                            h.push(n), a(n, t._index, 0, 1)
                        }

                        function a(t, n, r, s) {
                            if (!(s - r > c) || i && z.isStraight(t) || z.isFlatEnough(t, e || .25)) {
                                var o = t[6] - t[0],
                                    h = t[7] - t[1],
                                    d = Math.sqrt(o * o + h * h);
                                d > 0 && (l += d, u.push({
                                    offset: l,
                                    curve: t,
                                    index: n,
                                    time: s
                                }))
                            } else {
                                var f = z.subdivide(t, .5),
                                    _ = (r + s) / 2;
                                a(f[0], n, r, _), a(f[1], n, _, s)
                            }
                        }
                        for (var o, h = [], u = [], l = 0, c = 1 / (n || 32), d = t._segments, f = d[0], _ = 1, g = d.length; _ < g; _++) o = d[_], s(f, o), f = o;
                        t._closed && s(o, d[0]), this.curves = h, this.parts = u, this.length = l, this.index = 0
                    },
                    _get: function(t) {
                        for (var e, n = this.index; e = n, !(0 === n || this.parts[--n].offset < t););
                        for (var i = this.parts.length; e < i; e++) {
                            var r = this.parts[e];
                            if (r.offset >= t) {
                                this.index = e;
                                var s = this.parts[e - 1],
                                    a = s && s.index === r.index ? s.time : 0,
                                    o = s ? s.offset : 0;
                                return {
                                    index: r.index,
                                    time: a + (r.time - a) * (t - o) / (r.offset - o)
                                }
                            }
                        }
                        var r = this.parts[this.parts.length - 1];
                        return {
                            index: r.index,
                            time: 1
                        }
                    },
                    drawPart: function(t, e, n) {
                        for (var i = this._get(e), r = this._get(n), s = i.index, a = r.index; s <= a; s++) {
                            var o = z.getPart(this.curves[s], s === i.index ? i.time : 0, s === r.index ? r.time : 1);
                            s === i.index && t.moveTo(o[0], o[1]), t.bezierCurveTo.apply(t, o.slice(2))
                        }
                    }
                }, o.each(z._evaluateMethods, function(t) {
                    this[t + "At"] = function(e) {
                        var n = this._get(e);
                        return z[t](this.curves[n.index], n.time)
                    }
                }, {})),
                F = o.extend({
                    initialize: function(t) {
                        for (var e, n = this.points = [], i = t._segments, r = t._closed, s = 0, a = i.length; s < a; s++) {
                            var o = i[s].point;
                            e && e.equals(o) || n.push(e = o.clone())
                        }
                        r && (n.unshift(n[n.length - 1]), n.push(n[1])), this.closed = r
                    },
                    fit: function(t) {
                        var e = this.points,
                            n = e.length,
                            i = null;
                        return n > 0 && (i = [new A(e[0])], n > 1 && (this.fitCubic(i, t, 0, n - 1, e[1].subtract(e[0]), e[n - 2].subtract(e[n - 1])), this.closed && (i.shift(), i.pop()))), i
                    },
                    fitCubic: function(t, e, n, i, r, s) {
                        var a = this.points;
                        if (i - n === 1) {
                            var o = a[n],
                                h = a[i],
                                u = o.getDistance(h) / 3;
                            return void this.addCurve(t, [o, o.add(r.normalize(u)), h.add(s.normalize(u)), h])
                        }
                        for (var l, c = this.chordLengthParameterize(n, i), d = Math.max(e, e * e), f = !0, _ = 0; _ <= 4; _++) {
                            var g = this.generateBezier(n, i, c, r, s),
                                v = this.findMaxError(n, i, g, c);
                            if (v.error < e && f) return void this.addCurve(t, g);
                            if (l = v.index, v.error >= d) break;
                            f = this.reparameterize(n, i, c, g), d = v.error
                        }
                        var p = a[l - 1].subtract(a[l + 1]);
                        this.fitCubic(t, e, n, l, r, p), this.fitCubic(t, e, l, i, p.negate(), s)
                    },
                    addCurve: function(t, e) {
                        var n = t[t.length - 1];
                        n.setHandleOut(e[1].subtract(e[0])), t.push(new A(e[3], e[2].subtract(e[3])))
                    },
                    generateBezier: function(t, e, n, i, r) {
                        for (var s = 1e-12, a = Math.abs, o = this.points, h = o[t], u = o[e], l = [
                                [0, 0],
                                [0, 0]
                            ], c = [0, 0], d = 0, f = e - t + 1; d < f; d++) {
                            var _ = n[d],
                                g = 1 - _,
                                v = 3 * _ * g,
                                p = g * g * g,
                                m = v * g,
                                y = v * _,
                                w = _ * _ * _,
                                x = i.normalize(m),
                                b = r.normalize(y),
                                S = o[t + d].subtract(h.multiply(p + m)).subtract(u.multiply(y + w));
                            l[0][0] += x.dot(x), l[0][1] += x.dot(b), l[1][0] = l[0][1], l[1][1] += b.dot(b), c[0] += x.dot(S), c[1] += b.dot(S)
                        }
                        var C, k, M = l[0][0] * l[1][1] - l[1][0] * l[0][1];
                        if (a(M) > s) {
                            var P = l[0][0] * c[1] - l[1][0] * c[0],
                                O = c[0] * l[1][1] - c[1] * l[0][1];
                            C = O / M, k = P / M
                        } else {
                            var T = l[0][0] + l[0][1],
                                I = l[1][0] + l[1][1];
                            C = k = a(T) > s ? c[0] / T : a(I) > s ? c[1] / I : 0
                        }
                        var A, D, z = u.getDistance(h),
                            L = s * z;
                        if (C < L || k < L) C = k = z / 3;
                        else {
                            var E = u.subtract(h);
                            A = i.normalize(C), D = r.normalize(k), A.dot(E) - D.dot(E) > z * z && (C = k = z / 3, A = D = null)
                        }
                        return [h, h.add(A || i.normalize(C)), u.add(D || r.normalize(k)), u]
                    },
                    reparameterize: function(t, e, n, i) {
                        for (var r = t; r <= e; r++) n[r - t] = this.findRoot(i, this.points[r], n[r - t]);
                        for (var r = 1, s = n.length; r < s; r++)
                            if (n[r] <= n[r - 1]) return !1;
                        return !0
                    },
                    findRoot: function(t, e, n) {
                        for (var i = [], r = [], s = 0; s <= 2; s++) i[s] = t[s + 1].subtract(t[s]).multiply(3);
                        for (var s = 0; s <= 1; s++) r[s] = i[s + 1].subtract(i[s]).multiply(2);
                        var a = this.evaluate(3, t, n),
                            o = this.evaluate(2, i, n),
                            h = this.evaluate(1, r, n),
                            u = a.subtract(e),
                            l = o.dot(o) + u.dot(h);
                        return Math.abs(l) < 1e-6 ? n : n - u.dot(o) / l
                    },
                    evaluate: function(t, e, n) {
                        for (var i = e.slice(), r = 1; r <= t; r++)
                            for (var s = 0; s <= t - r; s++) i[s] = i[s].multiply(1 - n).add(i[s + 1].multiply(n));
                        return i[0]
                    },
                    chordLengthParameterize: function(t, e) {
                        for (var n = [0], i = t + 1; i <= e; i++) n[i - t] = n[i - t - 1] + this.points[i].getDistance(this.points[i - 1]);
                        for (var i = 1, r = e - t; i <= r; i++) n[i] /= n[r];
                        return n
                    },
                    findMaxError: function(t, e, n, i) {
                        for (var r = Math.floor((e - t + 1) / 2), s = 0, a = t + 1; a < e; a++) {
                            var o = this.evaluate(3, n, i[a - t]),
                                h = o.subtract(this.points[a]),
                                u = h.x * h.x + h.y * h.y;
                            u >= s && (s = u, r = a)
                        }
                        return {
                            error: s,
                            index: r
                        }
                    }
                }),
                Y = S.extend({
                    _class: "TextItem",
                    _applyMatrix: !1,
                    _canApplyMatrix: !1,
                    _serializeFields: {
                        content: null
                    },
                    _boundsOptions: {
                        stroke: !1,
                        handle: !1
                    },
                    initialize: function(t) {
                        this._content = "", this._lines = [];
                        var e = t && o.isPlainObject(t) && t.x === r && t.y === r;
                        this._initialize(e && t, !e && _.read(arguments))
                    },
                    _equals: function(t) {
                        return this._content === t._content
                    },
                    copyContent: function(t) {
                        this.setContent(t._content)
                    },
                    getContent: function() {
                        return this._content
                    },
                    setContent: function(t) {
                        this._content = "" + t, this._lines = this._content.split(/\r\n|\n|\r/gm), this._changed(265)
                    },
                    isEmpty: function() {
                        return !this._content
                    },
                    getCharacterStyle: "#getStyle",
                    setCharacterStyle: "#setStyle",
                    getParagraphStyle: "#getStyle",
                    setParagraphStyle: "#setStyle"
                }),
                B = Y.extend({
                    _class: "PointText",
                    initialize: function() {
                        Y.apply(this, arguments)
                    },
                    getPoint: function() {
                        var t = this._matrix.getTranslation();
                        return new g(t.x, t.y, this, "setPoint")
                    },
                    setPoint: function() {
                        var t = _.read(arguments);
                        this.translate(t.subtract(this._matrix.getTranslation()))
                    },
                    _draw: function(t, e, n) {
                        if (this._content) {
                            this._setStyles(t, e, n);
                            var i = this._lines,
                                r = this._style,
                                s = r.hasFill(),
                                a = r.hasStroke(),
                                o = r.getLeading(),
                                h = t.shadowColor;
                            t.font = r.getFontStyle(), t.textAlign = r.getJustification();
                            for (var u = 0, l = i.length; u < l; u++) {
                                t.shadowColor = h;
                                var c = i[u];
                                s && (t.fillText(c, 0, 0), t.shadowColor = "rgba(0,0,0,0)"), a && t.strokeText(c, 0, 0), t.translate(0, o)
                            }
                        }
                    },
                    _getBounds: function(t, e) {
                        var n = this._style,
                            i = this._lines,
                            r = i.length,
                            s = n.getJustification(),
                            a = n.getLeading(),
                            o = this.getView().getTextWidth(n.getFontStyle(), i),
                            h = 0;
                        "left" !== s && (h -= o / ("center" === s ? 2 : 1));
                        var u = new m(h, r ? -.75 * a : 0, o, r * a);
                        return t ? t._transformBounds(u, u) : u
                    }
                }),
                V = o.extend(new function() {
                    function t(t) {
                        var n, i = t.match(/^#(\w{1,2})(\w{1,2})(\w{1,2})$/);
                        if (i) {
                            n = [0, 0, 0];
                            for (var a = 0; a < 3; a++) {
                                var o = i[a + 1];
                                n[a] = parseInt(1 == o.length ? o + o : o, 16) / 255
                            }
                        } else if (i = t.match(/^rgba?\((.*)\)$/)) {
                            n = i[1].split(",");
                            for (var a = 0, h = n.length; a < h; a++) {
                                var o = +n[a];
                                n[a] = a < 3 ? o / 255 : o
                            }
                        } else if (s) {
                            var u = r[t];
                            if (!u) {
                                e || (e = it.getContext(1, 1), e.globalCompositeOperation = "copy"), e.fillStyle = "rgba(0,0,0,0)", e.fillStyle = t, e.fillRect(0, 0, 1, 1);
                                var l = e.getImageData(0, 0, 1, 1).data;
                                u = r[t] = [l[0] / 255, l[1] / 255, l[2] / 255]
                            }
                            n = u.slice()
                        } else n = [0, 0, 0];
                        return n
                    }
                    var e, n = {
                            gray: ["gray"],
                            rgb: ["red", "green", "blue"],
                            hsb: ["hue", "saturation", "brightness"],
                            hsl: ["hue", "saturation", "lightness"],
                            gradient: ["gradient", "origin", "destination", "highlight"]
                        },
                        i = {},
                        r = {},
                        a = [
                            [0, 3, 1],
                            [2, 0, 1],
                            [1, 0, 3],
                            [1, 2, 0],
                            [3, 1, 0],
                            [0, 1, 2]
                        ],
                        h = {
                            "rgb-hsb": function(t, e, n) {
                                var i = Math.max(t, e, n),
                                    r = Math.min(t, e, n),
                                    s = i - r,
                                    a = 0 === s ? 0 : 60 * (i == t ? (e - n) / s + (e < n ? 6 : 0) : i == e ? (n - t) / s + 2 : (t - e) / s + 4);
                                return [a, 0 === i ? 0 : s / i, i]
                            },
                            "hsb-rgb": function(t, e, n) {
                                t = (t / 60 % 6 + 6) % 6;
                                var i = Math.floor(t),
                                    r = t - i,
                                    i = a[i],
                                    s = [n, n * (1 - e), n * (1 - e * r), n * (1 - e * (1 - r))];
                                return [s[i[0]], s[i[1]], s[i[2]]]
                            },
                            "rgb-hsl": function(t, e, n) {
                                var i = Math.max(t, e, n),
                                    r = Math.min(t, e, n),
                                    s = i - r,
                                    a = 0 === s,
                                    o = a ? 0 : 60 * (i == t ? (e - n) / s + (e < n ? 6 : 0) : i == e ? (n - t) / s + 2 : (t - e) / s + 4),
                                    h = (i + r) / 2,
                                    u = a ? 0 : h < .5 ? s / (i + r) : s / (2 - i - r);
                                return [o, u, h]
                            },
                            "hsl-rgb": function(t, e, n) {
                                if (t = (t / 360 % 1 + 1) % 1, 0 === e) return [n, n, n];
                                for (var i = [t + 1 / 3, t, t - 1 / 3], r = n < .5 ? n * (1 + e) : n + e - n * e, s = 2 * n - r, a = [], o = 0; o < 3; o++) {
                                    var h = i[o];
                                    h < 0 && (h += 1), h > 1 && (h -= 1), a[o] = 6 * h < 1 ? s + 6 * (r - s) * h : 2 * h < 1 ? r : 3 * h < 2 ? s + (r - s) * (2 / 3 - h) * 6 : s
                                }
                                return a
                            },
                            "rgb-gray": function(t, e, n) {
                                return [.2989 * t + .587 * e + .114 * n]
                            },
                            "gray-rgb": function(t) {
                                return [t, t, t]
                            },
                            "gray-hsb": function(t) {
                                return [0, 0, t]
                            },
                            "gray-hsl": function(t) {
                                return [0, 0, t]
                            },
                            "gradient-rgb": function() {
                                return []
                            },
                            "rgb-gradient": function() {
                                return []
                            }
                        };
                    return o.each(n, function(t, e) {
                        i[e] = [], o.each(t, function(t, r) {
                            var s = o.capitalize(t),
                                a = /^(hue|saturation)$/.test(t),
                                h = i[e][r] = "gradient" === t ? function(t) {
                                    var e = this._components[0];
                                    return t = W.read(Array.isArray(t) ? t : arguments, 0, {
                                        readNull: !0
                                    }), e !== t && (e && e._removeOwner(this), t && t._addOwner(this)), t
                                } : "gradient" === e ? function() {
                                    return _.read(arguments, 0, {
                                        readNull: "highlight" === t,
                                        clone: !0
                                    })
                                } : function(t) {
                                    return null == t || isNaN(t) ? 0 : t
                                };
                            this["get" + s] = function() {
                                return this._type === e || a && /^hs[bl]$/.test(this._type) ? this._components[r] : this._convert(e)[r]
                            }, this["set" + s] = function(t) {
                                this._type === e || a && /^hs[bl]$/.test(this._type) || (this._components = this._convert(e), this._properties = n[e], this._type = e), this._components[r] = h.call(this, t), this._changed()
                            }
                        }, this)
                    }, {
                        _class: "Color",
                        _readIndex: !0,
                        initialize: function e(r) {
                            var s, a, o, h, u = Array.prototype.slice,
                                l = arguments,
                                c = this.__read,
                                d = 0;
                            Array.isArray(r) && (l = r, r = l[0]);
                            var f = null != r && typeof r;
                            if ("string" === f && r in n && (s = r, r = l[1], Array.isArray(r) ? (a = r, o = l[2]) : (c && (d = 1), l = u.call(l, 1), f = typeof r)), !a) {
                                if (h = "number" === f ? l : "object" === f && null != r.length ? r : null) {
                                    s || (s = h.length >= 3 ? "rgb" : "gray");
                                    var _ = n[s].length;
                                    o = h[_], c && (d += h === arguments ? _ + (null != o ? 1 : 0) : 1), h.length > _ && (h = u.call(h, 0, _))
                                } else if ("string" === f) s = "rgb", a = t(r), 4 === a.length && (o = a[3], a.length--);
                                else if ("object" === f)
                                    if (r.constructor === e) {
                                        if (s = r._type, a = r._components.slice(), o = r._alpha, "gradient" === s)
                                            for (var g = 1, v = a.length; g < v; g++) {
                                                var p = a[g];
                                                p && (a[g] = p.clone())
                                            }
                                    } else if (r.constructor === W) s = "gradient", h = l;
                                else {
                                    s = "hue" in r ? "lightness" in r ? "hsl" : "hsb" : "gradient" in r || "stops" in r || "radial" in r ? "gradient" : "gray" in r ? "gray" : "rgb";
                                    var m = n[s],
                                        y = i[s];
                                    this._components = a = [];
                                    for (var g = 0, v = m.length; g < v; g++) {
                                        var w = r[m[g]];
                                        null == w && 0 === g && "gradient" === s && "stops" in r && (w = {
                                            stops: r.stops,
                                            radial: r.radial
                                        }), w = y[g].call(this, w), null != w && (a[g] = w)
                                    }
                                    o = r.alpha
                                }
                                c && s && (d = 1)
                            }
                            if (this._type = s || "rgb", !a) {
                                this._components = a = [];
                                for (var y = i[this._type], g = 0, v = y.length; g < v; g++) {
                                    var w = y[g].call(this, h && h[g]);
                                    null != w && (a[g] = w)
                                }
                            }
                            this._components = a, this._properties = n[this._type], this._alpha = o, c && (this.__read = d)
                        },
                        _set: "#initialize",
                        _serialize: function(t, e) {
                            var n = this.getComponents();
                            return o.serialize(/^(gray|rgb)$/.test(this._type) ? n : [this._type].concat(n), t, !0, e)
                        },
                        _changed: function() {
                            this._canvasStyle = null, this._owner && this._owner._changed(65)
                        },
                        _convert: function(t) {
                            var e;
                            return this._type === t ? this._components.slice() : (e = h[this._type + "-" + t]) ? e.apply(this, this._components) : h["rgb-" + t].apply(this, h[this._type + "-rgb"].apply(this, this._components))
                        },
                        convert: function(t) {
                            return new V(t, this._convert(t), this._alpha)
                        },
                        getType: function() {
                            return this._type
                        },
                        setType: function(t) {
                            this._components = this._convert(t), this._properties = n[t], this._type = t
                        },
                        getComponents: function() {
                            var t = this._components.slice();
                            return null != this._alpha && t.push(this._alpha), t
                        },
                        getAlpha: function() {
                            return null != this._alpha ? this._alpha : 1
                        },
                        setAlpha: function(t) {
                            this._alpha = null == t ? null : Math.min(Math.max(t, 0), 1), this._changed()
                        },
                        hasAlpha: function() {
                            return null != this._alpha
                        },
                        equals: function(t) {
                            var e = o.isPlainValue(t, !0) ? V.read(arguments) : t;
                            return e === this || e && this._class === e._class && this._type === e._type && this._alpha === e._alpha && o.equals(this._components, e._components) || !1
                        },
                        toString: function() {
                            for (var t = this._properties, e = [], n = "gradient" === this._type, i = c.instance, r = 0, s = t.length; r < s; r++) {
                                var a = this._components[r];
                                null != a && e.push(t[r] + ": " + (n ? a : i.number(a)))
                            }
                            return null != this._alpha && e.push("alpha: " + i.number(this._alpha)), "{ " + e.join(", ") + " }"
                        },
                        toCSS: function(t) {
                            function e(t) {
                                return Math.round(255 * (t < 0 ? 0 : t > 1 ? 1 : t))
                            }
                            var n = this._convert("rgb"),
                                i = t || null == this._alpha ? 1 : this._alpha;
                            return n = [e(n[0]), e(n[1]), e(n[2])], i < 1 && n.push(i < 0 ? 0 : i), t ? "#" + ((1 << 24) + (n[0] << 16) + (n[1] << 8) + n[2]).toString(16).slice(1) : (4 == n.length ? "rgba(" : "rgb(") + n.join(",") + ")"
                        },
                        toCanvasStyle: function(t) {
                            if (this._canvasStyle) return this._canvasStyle;
                            if ("gradient" !== this._type) return this._canvasStyle = this.toCSS();
                            var e, n = this._components,
                                i = n[0],
                                r = i._stops,
                                s = n[1],
                                a = n[2];
                            if (i._radial) {
                                var o = a.getDistance(s),
                                    h = n[3];
                                if (h) {
                                    var u = h.subtract(s);
                                    u.getLength() > o && (h = s.add(u.normalize(o - .1)))
                                }
                                var l = h || s;
                                e = t.createRadialGradient(l.x, l.y, 0, s.x, s.y, o)
                            } else e = t.createLinearGradient(s.x, s.y, a.x, a.y);
                            for (var c = 0, d = r.length; c < d; c++) {
                                var f = r[c];
                                e.addColorStop(f._offset || c / (d - 1), f._color.toCanvasStyle())
                            }
                            return this._canvasStyle = e
                        },
                        transform: function(t) {
                            if ("gradient" === this._type) {
                                for (var e = this._components, n = 1, i = e.length; n < i; n++) {
                                    var r = e[n];
                                    t._transformPoint(r, r, !0)
                                }
                                this._changed()
                            }
                        },
                        statics: {
                            _types: n,
                            random: function() {
                                var t = Math.random;
                                return new V(t(), t(), t())
                            }
                        }
                    })
                }, new function() {
                    var t = {
                        add: function(t, e) {
                            return t + e
                        },
                        subtract: function(t, e) {
                            return t - e
                        },
                        multiply: function(t, e) {
                            return t * e
                        },
                        divide: function(t, e) {
                            return t / e
                        }
                    };
                    return o.each(t, function(t, e) {
                        this[e] = function(e) {
                            e = V.read(arguments);
                            for (var n = this._type, i = this._components, r = e._convert(n), s = 0, a = i.length; s < a; s++) r[s] = t(i[s], r[s]);
                            return new V(n, r, null != this._alpha ? t(this._alpha, e.getAlpha()) : null)
                        }
                    }, {})
                }),
                W = o.extend({
                    _class: "Gradient",
                    initialize: function(t, e) {
                        this._id = f.get(), t && this._set(t) && (t = e = null), this._stops || this.setStops(t || ["white", "black"]), null == this._radial && this.setRadial("string" == typeof e && "radial" === e || e || !1)
                    },
                    _serialize: function(t, e) {
                        return e.add(this, function() {
                            return o.serialize([this._stops, this._radial], t, !0, e)
                        })
                    },
                    _changed: function() {
                        for (var t = 0, e = this._owners && this._owners.length; t < e; t++) this._owners[t]._changed()
                    },
                    _addOwner: function(t) {
                        this._owners || (this._owners = []), this._owners.push(t)
                    },
                    _removeOwner: function(t) {
                        var e = this._owners ? this._owners.indexOf(t) : -1;
                        e != -1 && (this._owners.splice(e, 1), 0 === this._owners.length && (this._owners = r))
                    },
                    clone: function() {
                        for (var t = [], e = 0, n = this._stops.length; e < n; e++) t[e] = this._stops[e].clone();
                        return new W(t, this._radial)
                    },
                    getStops: function() {
                        return this._stops
                    },
                    setStops: function(t) {
                        if (t.length < 2) throw new Error("Gradient stop list needs to contain at least two stops.");
                        var e = this._stops;
                        if (e)
                            for (var n = 0, i = e.length; n < i; n++) e[n]._owner = r;
                        e = this._stops = U.readAll(t, 0, {
                            clone: !0
                        });
                        for (var n = 0, i = e.length; n < i; n++) e[n]._owner = this;
                        this._changed()
                    },
                    getRadial: function() {
                        return this._radial
                    },
                    setRadial: function(t) {
                        this._radial = t, this._changed()
                    },
                    equals: function(t) {
                        if (t === this) return !0;
                        if (t && this._class === t._class) {
                            var e = this._stops,
                                n = t._stops,
                                i = e.length;
                            if (i === n.length) {
                                for (var r = 0; r < i; r++)
                                    if (!e[r].equals(n[r])) return !1;
                                return !0
                            }
                        }
                        return !1
                    }
                }),
                U = o.extend({
                    _class: "GradientStop",
                    initialize: function(t, e) {
                        var n = t,
                            i = e;
                        "object" == typeof t && e === r && (Array.isArray(t) && "number" != typeof t[0] ? (n = t[0], i = t[1]) : ("color" in t || "offset" in t || "rampPoint" in t) && (n = t.color, i = t.offset || t.rampPoint || 0)), this.setColor(n), this.setOffset(i)
                    },
                    clone: function() {
                        return new U(this._color.clone(), this._offset)
                    },
                    _serialize: function(t, e) {
                        var n = this._color,
                            i = this._offset;
                        return o.serialize(null == i ? [n] : [n, i], t, !0, e)
                    },
                    _changed: function() {
                        this._owner && this._owner._changed(65)
                    },
                    getOffset: function() {
                        return this._offset
                    },
                    setOffset: function(t) {
                        this._offset = t, this._changed()
                    },
                    getRampPoint: "#getOffset",
                    setRampPoint: "#setOffset",
                    getColor: function() {
                        return this._color
                    },
                    setColor: function() {
                        var t = V.read(arguments, 0, {
                            clone: !0
                        });
                        t && (t._owner = this), this._color = t, this._changed()
                    },
                    equals: function(t) {
                        return t === this || t && this._class === t._class && this._color.equals(t._color) && this._offset == t._offset || !1
                    }
                }),
                q = o.extend(new function() {
                    var t = {
                            fillColor: null,
                            fillRule: "nonzero",
                            strokeColor: null,
                            strokeWidth: 1,
                            strokeCap: "butt",
                            strokeJoin: "miter",
                            strokeScaling: !0,
                            miterLimit: 10,
                            dashOffset: 0,
                            dashArray: [],
                            shadowColor: null,
                            shadowBlur: 0,
                            shadowOffset: new _,
                            selectedColor: null
                        },
                        e = o.set({}, t, {
                            fontFamily: "sans-serif",
                            fontWeight: "normal",
                            fontSize: 12,
                            leading: null,
                            justification: "left"
                        }),
                        n = o.set({}, e, {
                            fillColor: new V
                        }),
                        s = {
                            strokeWidth: 97,
                            strokeCap: 97,
                            strokeJoin: 97,
                            strokeScaling: 105,
                            miterLimit: 97,
                            fontFamily: 9,
                            fontWeight: 9,
                            fontSize: 9,
                            font: 9,
                            leading: 9,
                            justification: 9
                        },
                        a = {
                            beans: !0
                        },
                        h = {
                            _class: "Style",
                            beans: !0,
                            initialize: function(r, s, a) {
                                this._values = {}, this._owner = s, this._project = s && s._project || a || i.project, this._defaults = !s || s instanceof C ? e : s instanceof Y ? n : t, r && this.set(r)
                            }
                        };
                    return o.each(e, function(t, e) {
                        var n = /Color$/.test(e),
                            i = "shadowOffset" === e,
                            u = o.capitalize(e),
                            l = s[e],
                            c = "set" + u,
                            d = "get" + u;
                        h[c] = function(t) {
                            var i = this._owner,
                                s = i && i._children;
                            if (s && s.length > 0 && !(i instanceof R))
                                for (var a = 0, o = s.length; a < o; a++) s[a]._style[c](t);
                            else if (e in this._defaults) {
                                var h = this._values[e];
                                h !== t && (n && (h && h._owner !== r && (h._owner = r), t && t.constructor === V && (t._owner && (t = t.clone()), t._owner = i)), this._values[e] = t, i && i._changed(l || 65))
                            }
                        }, h[d] = function(t) {
                            var s, a = this._owner,
                                h = a && a._children;
                            if (e in this._defaults && (!h || 0 === h.length || t || a instanceof R)) {
                                var s = this._values[e];
                                if (s === r) s = this._defaults[e], s && s.clone && (s = s.clone());
                                else {
                                    var u = n ? V : i ? _ : null;
                                    !u || s && s.constructor === u || (this._values[e] = s = u.read([s], 0, {
                                        readNull: !0,
                                        clone: !0
                                    }), s && n && (s._owner = a))
                                }
                            } else if (h)
                                for (var l = 0, c = h.length; l < c; l++) {
                                    var f = h[l]._style[d]();
                                    if (0 === l) s = f;
                                    else if (!o.equals(s, f)) return r
                                }
                            return s
                        }, a[d] = function(t) {
                            return this._style[d](t)
                        }, a[c] = function(t) {
                            this._style[c](t)
                        }
                    }), o.each({
                        Font: "FontFamily",
                        WindingRule: "FillRule"
                    }, function(t, e) {
                        var n = "get" + e,
                            i = "set" + e;
                        h[n] = a[n] = "#get" + t, h[i] = a[i] = "#set" + t
                    }), S.inject(a), h
                }, {
                    set: function(t) {
                        var e = t instanceof q,
                            n = e ? t._values : t;
                        if (n)
                            for (var i in n)
                                if (i in this._defaults) {
                                    var r = n[i];
                                    this[i] = r && e && r.clone ? r.clone() : r
                                }
                    },
                    equals: function(t) {
                        return t === this || t && this._class === t._class && o.equals(this._values, t._values) || !1
                    },
                    hasFill: function() {
                        var t = this.getFillColor();
                        return !!t && t.alpha > 0
                    },
                    hasStroke: function() {
                        var t = this.getStrokeColor();
                        return !!t && t.alpha > 0 && this.getStrokeWidth() > 0
                    },
                    hasShadow: function() {
                        var t = this.getShadowColor();
                        return !!t && t.alpha > 0 && (this.getShadowBlur() > 0 || !this.getShadowOffset().isZero())
                    },
                    getView: function() {
                        return this._project._view
                    },
                    getFontStyle: function() {
                        var t = this.getFontSize();
                        return this.getFontWeight() + " " + t + (/[a-z]/i.test(t + "") ? " " : "px ") + this.getFontFamily()
                    },
                    getFont: "#getFontFamily",
                    setFont: "#setFontFamily",
                    getLeading: function t() {
                        var e = t.base.call(this),
                            n = this.getFontSize();
                        return /pt|em|%|px/.test(n) && (n = this.getView().getPixelSize(n)), null != e ? e : 1.2 * n
                    }
                }),
                H = new function() {
                    function t(t, e, n, i) {
                        for (var r = ["", "webkit", "moz", "Moz", "ms", "o"], s = e[0].toUpperCase() + e.substring(1), a = 0; a < 6; a++) {
                            var o = r[a],
                                h = o ? o + s : e;
                            if (h in t) {
                                if (!n) return t[h];
                                t[h] = i;
                                break
                            }
                        }
                    }
                    return {
                        getStyles: function(t) {
                            var e = t && 9 !== t.nodeType ? t.ownerDocument : t,
                                n = e && e.defaultView;
                            return n && n.getComputedStyle(t, "")
                        },
                        getBounds: function(t, e) {
                            var n, i = t.ownerDocument,
                                r = i.body,
                                s = i.documentElement;
                            try {
                                n = t.getBoundingClientRect()
                            } catch (t) {
                                n = {
                                    left: 0,
                                    top: 0,
                                    width: 0,
                                    height: 0
                                }
                            }
                            var a = n.left - (s.clientLeft || r.clientLeft || 0),
                                o = n.top - (s.clientTop || r.clientTop || 0);
                            if (!e) {
                                var h = i.defaultView;
                                a += h.pageXOffset || s.scrollLeft || r.scrollLeft, o += h.pageYOffset || s.scrollTop || r.scrollTop
                            }
                            return new m(a, o, n.width, n.height)
                        },
                        getViewportBounds: function(t) {
                            var e = t.ownerDocument,
                                n = e.defaultView,
                                i = e.documentElement;
                            return new m(0, 0, n.innerWidth || i.clientWidth, n.innerHeight || i.clientHeight)
                        },
                        getOffset: function(t, e) {
                            return H.getBounds(t, e).getPoint()
                        },
                        getSize: function(t) {
                            return H.getBounds(t, !0).getSize()
                        },
                        isInvisible: function(t) {
                            return H.getSize(t).equals(new v(0, 0))
                        },
                        isInView: function(t) {
                            return !H.isInvisible(t) && H.getViewportBounds(t).intersects(H.getBounds(t, !0))
                        },
                        isInserted: function(t) {
                            return a.body.contains(t)
                        },
                        getPrefixed: function(e, n) {
                            return e && t(e, n)
                        },
                        setPrefixed: function(e, n, i) {
                            if ("object" == typeof n)
                                for (var r in n) t(e, r, !0, n[r]);
                            else t(e, n, !0, i)
                        }
                    }
                },
                G = {
                    add: function(t, e) {
                        if (t)
                            for (var n in e)
                                for (var i = e[n], r = n.split(/[\s,]+/g), s = 0, a = r.length; s < a; s++) t.addEventListener(r[s], i, !1)
                    },
                    remove: function(t, e) {
                        if (t)
                            for (var n in e)
                                for (var i = e[n], r = n.split(/[\s,]+/g), s = 0, a = r.length; s < a; s++) t.removeEventListener(r[s], i, !1)
                    },
                    getPoint: function(t) {
                        var e = t.targetTouches ? t.targetTouches.length ? t.targetTouches[0] : t.changedTouches[0] : t;
                        return new _(e.pageX || e.clientX + a.documentElement.scrollLeft, e.pageY || e.clientY + a.documentElement.scrollTop)
                    },
                    getTarget: function(t) {
                        return t.target || t.srcElement
                    },
                    getRelatedTarget: function(t) {
                        return t.relatedTarget || t.toElement
                    },
                    getOffset: function(t, e) {
                        return G.getPoint(t).subtract(H.getOffset(e || G.getTarget(t)))
                    }
                };
            G.requestAnimationFrame = new function() {
                function t() {
                    var e = r;
                    r = [];
                    for (var s = 0, a = e.length; s < a; s++) e[s]();
                    i = n && r.length, i && n(t)
                }
                var e, n = H.getPrefixed(s, "requestAnimationFrame"),
                    i = !1,
                    r = [];
                return function(s) {
                    r.push(s), n ? i || (n(t), i = !0) : e || (e = setInterval(t, 1e3 / 60))
                }
            };
            var Z = o.extend(h, {
                    _class: "View",
                    initialize: function t(e, n) {
                        function r(t) {
                            return n[t] || parseInt(n.getAttribute(t), 10)
                        }

                        function o() {
                            var t = H.getSize(n);
                            return t.isNaN() || t.isZero() ? new v(r("width"), r("height")) : t
                        }
                        var h;
                        if (s && n) {
                            this._id = n.getAttribute("id"), null == this._id && n.setAttribute("id", this._id = "view-" + t._id++), G.add(n, this._viewEvents);
                            var l = "none";
                            if (H.setPrefixed(n.style, {
                                    userDrag: l,
                                    userSelect: l,
                                    touchCallout: l,
                                    contentZooming: l,
                                    tapHighlightColor: "rgba(0,0,0,0)"
                                }), u.hasAttribute(n, "resize")) {
                                var c = this;
                                G.add(s, this._windowEvents = {
                                    resize: function() {
                                        c.setViewSize(o())
                                    }
                                })
                            }
                            if (h = o(), u.hasAttribute(n, "stats") && "undefined" != typeof Stats) {
                                this._stats = new Stats;
                                var d = this._stats.domElement,
                                    f = d.style,
                                    _ = H.getOffset(n);
                                f.position = "absolute", f.left = _.x + "px", f.top = _.y + "px", a.body.appendChild(d)
                            }
                        } else h = new v(n), n = null;
                        this._project = e, this._scope = e._scope, this._element = n, this._pixelRatio || (this._pixelRatio = s && s.devicePixelRatio || 1), this._setElementSize(h.width, h.height), this._viewSize = h, t._views.push(this), t._viewsById[this._id] = this, (this._matrix = new w)._owner = this, this._zoom = 1, t._focused || (t._focused = this), this._frameItems = {}, this._frameItemCount = 0, this._itemEvents = {
                            native: {},
                            virtual: {}
                        }, this._autoUpdate = !i.agent.node, this._needsUpdate = !1
                    },
                    remove: function() {
                        if (!this._project) return !1;
                        Z._focused === this && (Z._focused = null), Z._views.splice(Z._views.indexOf(this), 1), delete Z._viewsById[this._id];
                        var t = this._project;
                        return t._view === this && (t._view = null), G.remove(this._element, this._viewEvents), G.remove(s, this._windowEvents), this._element = this._project = null, this.off("frame"), this._animate = !1, this._frameItems = {}, !0
                    },
                    _events: o.each(S._itemHandlers.concat(["onResize", "onKeyDown", "onKeyUp"]), function(t) {
                        this[t] = {}
                    }, {
                        onFrame: {
                            install: function() {
                                this.play()
                            },
                            uninstall: function() {
                                this.pause()
                            }
                        }
                    }),
                    _animate: !1,
                    _time: 0,
                    _count: 0,
                    getAutoUpdate: function() {
                        return this._autoUpdate
                    },
                    setAutoUpdate: function(t) {
                        this._autoUpdate = t, t && this.requestUpdate()
                    },
                    update: function() {},
                    draw: function() {
                        this.update()
                    },
                    requestUpdate: function() {
                        if (!this._requested) {
                            var t = this;
                            G.requestAnimationFrame(function() {
                                if (t._requested = !1, t._animate) {
                                    t.requestUpdate();
                                    var e = t._element;
                                    H.getPrefixed(a, "hidden") && "true" !== u.getAttribute(e, "keepalive") || !H.isInView(e) || t._handleFrame()
                                }
                                t._autoUpdate && t.update()
                            }), this._requested = !0
                        }
                    },
                    play: function() {
                        this._animate = !0, this.requestUpdate()
                    },
                    pause: function() {
                        this._animate = !1
                    },
                    _handleFrame: function() {
                        i = this._scope;
                        var t = Date.now() / 1e3,
                            e = this._last ? t - this._last : 0;
                        this._last = t, this.emit("frame", new o({
                            delta: e,
                            time: this._time += e,
                            count: this._count++
                        })), this._stats && this._stats.update()
                    },
                    _animateItem: function(t, e) {
                        var n = this._frameItems;
                        e ? (n[t._id] = {
                            item: t,
                            time: 0,
                            count: 0
                        }, 1 === ++this._frameItemCount && this.on("frame", this._handleFrameItems)) : (delete n[t._id], 0 === --this._frameItemCount && this.off("frame", this._handleFrameItems))
                    },
                    _handleFrameItems: function(t) {
                        for (var e in this._frameItems) {
                            var n = this._frameItems[e];
                            n.item.emit("frame", new o(t, {
                                time: n.time += t.delta,
                                count: n.count++
                            }))
                        }
                    },
                    _changed: function() {
                        this._project._changed(2049), this._bounds = null
                    },
                    getElement: function() {
                        return this._element
                    },
                    getPixelRatio: function() {
                        return this._pixelRatio
                    },
                    getResolution: function() {
                        return 72 * this._pixelRatio
                    },
                    getViewSize: function() {
                        var t = this._viewSize;
                        return new p(t.width, t.height, this, "setViewSize")
                    },
                    setViewSize: function() {
                        var t = v.read(arguments),
                            e = t.width,
                            n = t.height,
                            i = t.subtract(this._viewSize);
                        i.isZero() || (this._setElementSize(e, n), this._viewSize.set(e, n), this.emit("resize", {
                            size: t,
                            delta: i
                        }), this._changed(), this._autoUpdate && this.requestUpdate())
                    },
                    _setElementSize: function(t, e) {
                        var n = this._element;
                        n && (n.width !== t && (n.width = t), n.height !== e && (n.height = e))
                    },
                    getBounds: function() {
                        return this._bounds || (this._bounds = this._matrix.inverted()._transformBounds(new m(new _, this._viewSize))), this._bounds
                    },
                    getSize: function() {
                        return this.getBounds().getSize()
                    },
                    getCenter: function() {
                        return this.getBounds().getCenter()
                    },
                    setCenter: function() {
                        var t = _.read(arguments);
                        this.translate(this.getCenter().subtract(t))
                    },
                    getZoom: function() {
                        return this._zoom
                    },
                    setZoom: function(t) {
                        this.transform((new w).scale(t / this._zoom, this.getCenter())), this._zoom = t
                    },
                    getMatrix: function() {
                        return this._matrix
                    },
                    setMatrix: function() {
                        var t = this._matrix;
                        t.initialize.apply(t, arguments)
                    },
                    isVisible: function() {
                        return H.isInView(this._element)
                    },
                    isInserted: function() {
                        return H.isInserted(this._element)
                    },
                    getPixelSize: function(t) {
                        var e, n = this._element;
                        if (n) {
                            var i = n.parentNode,
                                r = a.createElement("div");
                            r.style.fontSize = t, i.appendChild(r), e = parseFloat(H.getStyles(r).fontSize), i.removeChild(r)
                        } else e = parseFloat(e);
                        return e
                    },
                    getTextWidth: function(t, e) {
                        return 0
                    }
                }, o.each(["rotate", "scale", "shear", "skew"], function(t) {
                    var e = "rotate" === t;
                    this[t] = function() {
                        var n = (e ? o : _).read(arguments),
                            i = _.read(arguments, 0, {
                                readNull: !0
                            });
                        return this.transform((new w)[t](n, i || this.getCenter(!0)))
                    }
                }, {
                    translate: function() {
                        var t = new w;
                        return this.transform(t.translate.apply(t, arguments))
                    },
                    transform: function(t) {
                        this._matrix.append(t)
                    },
                    scrollBy: function() {
                        this.translate(_.read(arguments).negate())
                    }
                }), {
                    projectToView: function() {
                        return this._matrix._transformPoint(_.read(arguments))
                    },
                    viewToProject: function() {
                        return this._matrix._inverseTransform(_.read(arguments))
                    },
                    getEventPoint: function(t) {
                        return this.viewToProject(G.getOffset(t, this._element))
                    }
                }, {
                    statics: {
                        _views: [],
                        _viewsById: {},
                        _id: 0,
                        create: function(t, e) {
                            a && "string" == typeof e && (e = a.getElementById(e));
                            var n = s ? $ : Z;
                            return new n(t, e)
                        }
                    }
                }, new function() {
                    function t(t) {
                        var e = G.getTarget(t);
                        return e.getAttribute && Z._viewsById[e.getAttribute("id")]
                    }

                    function e() {
                        var t = Z._focused;
                        if (!t || !t.isVisible())
                            for (var e = 0, n = Z._views.length; e < n; e++)
                                if ((t = Z._views[e]).isVisible()) {
                                    Z._focused = u = t;
                                    break
                                }
                    }

                    function n(t, e, n) {
                        t._handleMouseEvent("mousemove", e, n)
                    }

                    function r(t, e, n, i, r, s, a) {
                        function o(t, n) {
                            if (t.responds(n)) {
                                if (h || (h = new Q(n, i, r, e || t, s ? r.subtract(s) : null)), t.emit(n, h) && (P = !0, h.prevented && (O = !0), h.stopped)) return u = !0
                            } else {
                                var a = T[n];
                                if (a) return o(t, a)
                            }
                        }
                        for (var h, u = !1; t && t !== a && !o(t, n);) t = t._parent;
                        return u
                    }

                    function o(t, e, n, i, s, a) {
                        return t._project.removeOn(n), O = P = !1, S && r(S, null, n, i, s, a) || e && e !== S && !e.isDescendant(S) && r(e, null, T[n] || n, i, s, a, S) || r(t, S || e || t, n, i, s, a)
                    }
                    if (s) {
                        var h, u, l, c, d, f = !1,
                            _ = !1,
                            g = s.navigator;
                        g.pointerEnabled || g.msPointerEnabled ? (l = "pointerdown MSPointerDown", c = "pointermove MSPointerMove", d = "pointerup pointercancel MSPointerUp MSPointerCancel") : (l = "touchstart", c = "touchmove", d = "touchend touchcancel", "ontouchstart" in s && g.userAgent.match(/mobile|tablet|ip(ad|hone|od)|android|silk/i) || (l += " mousedown", c += " mousemove", d += " mouseup"));
                        var v = {},
                            p = {
                                mouseout: function(t) {
                                    var e = Z._focused,
                                        i = G.getRelatedTarget(t);
                                    if (e && (!i || "HTML" === i.nodeName)) {
                                        var r = G.getOffset(t, e._element),
                                            s = r.x,
                                            a = Math.abs,
                                            o = a(s),
                                            h = 1 << 25,
                                            u = o - h;
                                        r.x = a(u) < o ? u * (s < 0 ? -1 : 1) : s, n(e, t, e.viewToProject(r))
                                    }
                                },
                                scroll: e
                            };
                        v[l] = function(e) {
                            var n = Z._focused = t(e);
                            f || (f = !0, n._handleMouseEvent("mousedown", e))
                        }, p[c] = function(i) {
                            var r = Z._focused;
                            if (!_) {
                                var s = t(i);
                                s ? r !== s && (r && n(r, i), h || (h = r), r = Z._focused = u = s) : u && u === r && (h && !h.isInserted() && (h = null), r = Z._focused = h, h = null, e())
                            }
                            r && n(r, i)
                        }, p[l] = function() {
                            _ = !0
                        }, p[d] = function(t) {
                            var e = Z._focused;
                            e && f && e._handleMouseEvent("mouseup", t), _ = f = !1
                        }, G.add(a, p), G.add(s, {
                            load: e
                        });
                        var m, y, w, x, b, S, C, k, M, P = !1,
                            O = !1,
                            T = {
                                doubleclick: "click",
                                mousedrag: "mousemove"
                            },
                            I = !1,
                            A = {
                                mousedown: {
                                    mousedown: 1,
                                    mousedrag: 1,
                                    click: 1,
                                    doubleclick: 1
                                },
                                mouseup: {
                                    mouseup: 1,
                                    mousedrag: 1,
                                    click: 1,
                                    doubleclick: 1
                                },
                                mousemove: {
                                    mousedrag: 1,
                                    mousemove: 1,
                                    mouseenter: 1,
                                    mouseleave: 1
                                }
                            };
                        return {
                            _viewEvents: v,
                            _handleMouseEvent: function(t, e, n) {
                                function i(t) {
                                    return s.virtual[t] || l.responds(t) || u && u.responds(t)
                                }
                                var s = this._itemEvents,
                                    a = s.native[t],
                                    h = "mousemove" === t,
                                    u = this._scope.tool,
                                    l = this;
                                h && f && i("mousedrag") && (t = "mousedrag"), n || (n = this.getEventPoint(e));
                                var c = this.getBounds().contains(n),
                                    d = a && c && l._project.hitTest(n, {
                                        tolerance: 0,
                                        fill: !0,
                                        stroke: !0
                                    }),
                                    _ = d && d.item || null,
                                    g = !1,
                                    v = {};
                                v[t.substr(5)] = !0, a && _ !== b && (b && r(b, null, "mouseleave", e, n), _ && r(_, null, "mouseenter", e, n), b = _), I ^ c && (r(this, null, c ? "mouseenter" : "mouseleave", e, n), m = c ? this : null, g = !0), !c && !v.drag || n.equals(w) || (o(this, _, h ? t : "mousemove", e, n, w), g = !0), I = c, (v.down && c || v.up && y) && (o(this, _, t, e, n, y), v.down ? (M = _ === C && Date.now() - k < 300, x = C = _, S = !O && _, y = n) : v.up && (O || _ !== x || (k = Date.now(), o(this, _, M ? "doubleclick" : "click", e, n, y), M = !1), x = S = null), I = !1, g = !0), w = n, g && u && (P = u._handleMouseEvent(t, e, n, v) || P), (P && !v.move || v.down && i("mouseup")) && e.preventDefault()
                            },
                            _handleKeyEvent: function(t, e, n, r) {
                                function s(s) {
                                    s.responds(t) && (i = o, s.emit(t, a = a || new X(t, e, n, r)))
                                }
                                var a, o = this._scope,
                                    h = o.tool;
                                this.isVisible() && (s(this), h && h.responds(t) && s(h))
                            },
                            _countItemEvent: function(t, e) {
                                var n = this._itemEvents,
                                    i = n.native,
                                    r = n.virtual;
                                for (var s in A) i[s] = (i[s] || 0) + (A[s][t] || 0) * e;
                                r[t] = (r[t] || 0) + e
                            },
                            statics: {
                                updateFocus: e
                            }
                        }
                    }
                }),
                $ = Z.extend({
                    _class: "CanvasView",
                    initialize: function(t, e) {
                        if (!(e instanceof s.HTMLCanvasElement)) {
                            var n = v.read(arguments, 1);
                            if (n.isZero()) throw new Error("Cannot create CanvasView with the provided argument: " + [].slice.call(arguments, 1));
                            e = it.getCanvas(n)
                        }
                        var i = this._context = e.getContext("2d");
                        if (i.save(), this._pixelRatio = 1, !/^off|false$/.test(u.getAttribute(e, "hidpi"))) {
                            var r = s.devicePixelRatio || 1,
                                a = H.getPrefixed(i, "backingStorePixelRatio") || 1;
                            this._pixelRatio = r / a
                        }
                        Z.call(this, t, e), this._needsUpdate = !0
                    },
                    remove: function t() {
                        return this._context.restore(), t.base.call(this)
                    },
                    _setElementSize: function t(e, n) {
                        var i = this._pixelRatio;
                        if (t.base.call(this, e * i, n * i), 1 !== i) {
                            var r = this._element,
                                s = this._context;
                            if (!u.hasAttribute(r, "resize")) {
                                var a = r.style;
                                a.width = e + "px", a.height = n + "px"
                            }
                            s.restore(), s.save(), s.scale(i, i)
                        }
                    },
                    getPixelSize: function t(e) {
                        var n, r = i.agent;
                        if (r && r.firefox) n = t.base.call(this, e);
                        else {
                            var s = this._context,
                                a = s.font;
                            s.font = e + " serif", n = parseFloat(s.font), s.font = a
                        }
                        return n
                    },
                    getTextWidth: function(t, e) {
                        var n = this._context,
                            i = n.font,
                            r = 0;
                        n.font = t;
                        for (var s = 0, a = e.length; s < a; s++) r = Math.max(r, n.measureText(e[s]).width);
                        return n.font = i, r
                    },
                    update: function() {
                        if (!this._needsUpdate) return !1;
                        var t = this._project,
                            e = this._context,
                            n = this._viewSize;
                        return e.clearRect(0, 0, n.width + 1, n.height + 1), t && t.draw(e, this._matrix, this._pixelRatio), this._needsUpdate = !1, !0
                    }
                }),
                J = o.extend({
                    _class: "Event",
                    initialize: function(t) {
                        this.event = t, this.type = t && t.type
                    },
                    prevented: !1,
                    stopped: !1,
                    preventDefault: function() {
                        this.prevented = !0, this.event.preventDefault()
                    },
                    stopPropagation: function() {
                        this.stopped = !0, this.event.stopPropagation()
                    },
                    stop: function() {
                        this.stopPropagation(), this.preventDefault()
                    },
                    getTimeStamp: function() {
                        return this.event.timeStamp
                    },
                    getModifiers: function() {
                        return K.modifiers
                    }
                }),
                X = J.extend({
                    _class: "KeyEvent",
                    initialize: function(t, e, n, i) {
                        this.type = t, this.event = e, this.key = n, this.character = i
                    },
                    toString: function() {
                        return "{ type: '" + this.type + "', key: '" + this.key + "', character: '" + this.character + "', modifiers: " + this.getModifiers() + " }"
                    }
                }),
                K = new function() {
                    function t(t) {
                        var e = t.key || t.keyIdentifier;
                        return e = /^U\+/.test(e) ? String.fromCharCode(parseInt(e.substr(2), 16)) : /^Arrow[A-Z]/.test(e) ? e.substr(5) : "Unidentified" === e ? String.fromCharCode(t.keyCode) : e, h[e] || (e.length > 1 ? o.hyphenate(e) : e.toLowerCase())
                    }

                    function e(t, r, s, a) {
                        var h, u = Z._focused;
                        if (l[r] = t, t ? c[r] = s : delete c[r], r.length > 1 && (h = o.camelize(r)) in d) {
                            d[h] = t;
                            var f = i && i.agent;
                            if ("meta" === h && f && f.mac)
                                if (t) n = {};
                                else {
                                    for (var _ in n) _ in c && e(!1, _, n[_], a);
                                    n = null
                                }
                        } else t && n && (n[r] = s);
                        u && u._handleKeyEvent(t ? "keydown" : "keyup", a, r, s)
                    }
                    var n, r, h = {
                            "\t": "tab",
                            " ": "space",
                            "\b": "backspace",
                            "": "delete",
                            Spacebar: "space",
                            Del: "delete",
                            Win: "meta",
                            Esc: "escape"
                        },
                        u = {
                            tab: "\t",
                            space: " ",
                            enter: "\r"
                        },
                        l = {},
                        c = {},
                        d = new o({
                            shift: !1,
                            control: !1,
                            alt: !1,
                            meta: !1,
                            capsLock: !1,
                            space: !1
                        }).inject({
                            option: {
                                get: function() {
                                    return this.alt
                                }
                            },
                            command: {
                                get: function() {
                                    var t = i && i.agent;
                                    return t && t.mac ? this.meta : this.control
                                }
                            }
                        });
                    return G.add(a, {
                        keydown: function(n) {
                            var s = t(n),
                                a = i && i.agent;
                            s.length > 1 || a && a.chrome && (n.altKey || a.mac && n.metaKey || !a.mac && n.ctrlKey) ? e(!0, s, u[s] || (s.length > 1 ? "" : s), n) : r = s
                        },
                        keypress: function(n) {
                            if (r) {
                                var i = t(n),
                                    s = n.charCode,
                                    a = s >= 32 ? String.fromCharCode(s) : i.length > 1 ? "" : i;
                                i !== r && (i = a.toLowerCase()), e(!0, i, a, n), r = null
                            }
                        },
                        keyup: function(n) {
                            var i = t(n);
                            i in c && e(!1, i, c[i], n)
                        }
                    }), G.add(s, {
                        blur: function(t) {
                            for (var n in c) e(!1, n, c[n], t)
                        }
                    }), {
                        modifiers: d,
                        isDown: function(t) {
                            return !!l[t]
                        }
                    }
                },
                Q = J.extend({
                    _class: "MouseEvent",
                    initialize: function(t, e, n, i, r) {
                        this.type = t, this.event = e, this.point = n, this.target = i, this.delta = r
                    },
                    toString: function() {
                        return "{ type: '" + this.type + "', point: " + this.point + ", target: " + this.target + (this.delta ? ", delta: " + this.delta : "") + ", modifiers: " + this.getModifiers() + " }"
                    }
                }),
                tt = J.extend({
                    _class: "ToolEvent",
                    _item: null,
                    initialize: function(t, e, n) {
                        this.tool = t, this.type = e, this.event = n
                    },
                    _choosePoint: function(t, e) {
                        return t ? t : e ? e.clone() : null
                    },
                    getPoint: function() {
                        return this._choosePoint(this._point, this.tool._point)
                    },
                    setPoint: function(t) {
                        this._point = t
                    },
                    getLastPoint: function() {
                        return this._choosePoint(this._lastPoint, this.tool._lastPoint)
                    },
                    setLastPoint: function(t) {
                        this._lastPoint = t
                    },
                    getDownPoint: function() {
                        return this._choosePoint(this._downPoint, this.tool._downPoint)
                    },
                    setDownPoint: function(t) {
                        this._downPoint = t
                    },
                    getMiddlePoint: function() {
                        return !this._middlePoint && this.tool._lastPoint ? this.tool._point.add(this.tool._lastPoint).divide(2) : this._middlePoint
                    },
                    setMiddlePoint: function(t) {
                        this._middlePoint = t
                    },
                    getDelta: function() {
                        return !this._delta && this.tool._lastPoint ? this.tool._point.subtract(this.tool._lastPoint) : this._delta
                    },
                    setDelta: function(t) {
                        this._delta = t
                    },
                    getCount: function() {
                        return this.tool[/^mouse(down|up)$/.test(this.type) ? "_downCount" : "_moveCount"]
                    },
                    setCount: function(t) {
                        this.tool[/^mouse(down|up)$/.test(this.type) ? "downCount" : "count"] = t
                    },
                    getItem: function() {
                        if (!this._item) {
                            var t = this.tool._scope.project.hitTest(this.getPoint());
                            if (t) {
                                for (var e = t.item, n = e._parent;
                                    /^(Group|CompoundPath)$/.test(n._class);) e = n, n = n._parent;
                                this._item = e
                            }
                        }
                        return this._item
                    },
                    setItem: function(t) {
                        this._item = t
                    },
                    toString: function() {
                        return "{ type: " + this.type + ", point: " + this.getPoint() + ", count: " + this.getCount() + ", modifiers: " + this.getModifiers() + " }"
                    }
                }),
                et = l.extend({
                    _class: "Tool",
                    _list: "tools",
                    _reference: "tool",
                    _events: ["onMouseDown", "onMouseUp", "onMouseDrag", "onMouseMove", "onActivate", "onDeactivate", "onEditOptions", "onKeyDown", "onKeyUp"],
                    initialize: function(t) {
                        l.call(this), this._moveCount = -1, this._downCount = -1, this._set(t)
                    },
                    getMinDistance: function() {
                        return this._minDistance
                    },
                    setMinDistance: function(t) {
                        this._minDistance = t, null != t && null != this._maxDistance && t > this._maxDistance && (this._maxDistance = t)
                    },
                    getMaxDistance: function() {
                        return this._maxDistance
                    },
                    setMaxDistance: function(t) {
                        this._maxDistance = t, null != this._minDistance && null != t && t < this._minDistance && (this._minDistance = t)
                    },
                    getFixedDistance: function() {
                        return this._minDistance == this._maxDistance ? this._minDistance : null
                    },
                    setFixedDistance: function(t) {
                        this._minDistance = this._maxDistance = t
                    },
                    _handleMouseEvent: function(t, e, n, r) {
                        function s(t, e) {
                            var i = n,
                                s = o ? d._point : d._downPoint || i;
                            if (o) {
                                if (d._moveCount && i.equals(s)) return !1;
                                if (s && (null != t || null != e)) {
                                    var a = i.subtract(s),
                                        h = a.getLength();
                                    if (h < (t || 0)) return !1;
                                    e && (i = s.add(a.normalize(Math.min(h, e))))
                                }
                                d._moveCount++
                            }
                            return d._point = i, d._lastPoint = s || i, r.down && (d._moveCount = -1, d._downPoint = i, d._downCount++), !0
                        }

                        function a() {
                            h && (c = d.emit(t, new tt(d, t, e)) || c)
                        }
                        i = this._scope, r.drag && !this.responds(t) && (t = "mousemove");
                        var o = r.move || r.drag,
                            h = this.responds(t),
                            u = this.minDistance,
                            l = this.maxDistance,
                            c = !1,
                            d = this;
                        if (r.down) s(), a();
                        else if (r.up) s(null, l), a();
                        else if (h)
                            for (; s(u, l);) a();
                        return c
                    }
                }),
                nt = {
                    request: function(t) {
                        var e = new s.XMLHttpRequest;
                        return e.open((t.method || "get").toUpperCase(), t.url, o.pick(t.async, !0)), t.mimeType && e.overrideMimeType(t.mimeType), e.onload = function() {
                            var n = e.status;
                            0 === n || 200 === n ? t.onLoad && t.onLoad.call(e, e.responseText) : e.onerror()
                        }, e.onerror = function() {
                            var n = e.status,
                                i = 'Could not load "' + t.url + '" (Status: ' + n + ")";
                            if (!t.onError) throw new Error(i);
                            t.onError(i, n)
                        }, e.send(null)
                    }
                },
                it = {
                    canvases: [],
                    getCanvas: function(t, e) {
                        if (!s) return null;
                        var n, i = !0;
                        "object" == typeof t && (e = t.height, t = t.width), this.canvases.length ? n = this.canvases.pop() : (n = a.createElement("canvas"), i = !1);
                        var r = n.getContext("2d");
                        if (!r) throw new Error("Canvas " + n + " is unable toprovide a 2D context.");
                        return n.width === t && n.height === e ? i && r.clearRect(0, 0, t + 1, e + 1) : (n.width = t, n.height = e), r.save(), n
                    },
                    getContext: function(t, e) {
                        var n = this.getCanvas(t, e);
                        return n ? n.getContext("2d") : null
                    },
                    release: function(t) {
                        var e = t && t.canvas ? t.canvas : t;
                        e && e.getContext && (e.getContext("2d").restore(), this.canvases.push(e))
                    }
                },
                rt = new function() {
                    function t(t, e, n) {
                        return .2989 * t + .587 * e + .114 * n
                    }

                    function e(e, n, i, r) {
                        var s = r - t(e, n, i);
                        f = e + s, _ = n + s, g = i + s;
                        var r = t(f, _, g),
                            a = v(f, _, g),
                            o = p(f, _, g);
                        if (a < 0) {
                            var h = r - a;
                            f = r + (f - r) * r / h, _ = r + (_ - r) * r / h, g = r + (g - r) * r / h
                        }
                        if (o > 255) {
                            var u = 255 - r,
                                l = o - r;
                            f = r + (f - r) * u / l, _ = r + (_ - r) * u / l, g = r + (g - r) * u / l
                        }
                    }

                    function n(t, e, n) {
                        return p(t, e, n) - v(t, e, n)
                    }

                    function i(t, e, n, i) {
                        var r, s = [t, e, n],
                            a = p(t, e, n),
                            o = v(t, e, n);
                        o = o === t ? 0 : o === e ? 1 : 2, a = a === t ? 0 : a === e ? 1 : 2, r = 0 === v(o, a) ? 1 === p(o, a) ? 2 : 1 : 0, s[a] > s[o] ? (s[r] = (s[r] - s[o]) * i / (s[a] - s[o]), s[a] = i) : s[r] = s[a] = 0, s[o] = 0, f = s[0], _ = s[1], g = s[2]
                    }
                    var r, s, a, h, u, l, c, d, f, _, g, v = Math.min,
                        p = Math.max,
                        m = Math.abs,
                        y = {
                            multiply: function() {
                                f = u * r / 255, _ = l * s / 255, g = c * a / 255
                            },
                            screen: function() {
                                f = u + r - u * r / 255, _ = l + s - l * s / 255, g = c + a - c * a / 255
                            },
                            overlay: function() {
                                f = u < 128 ? 2 * u * r / 255 : 255 - 2 * (255 - u) * (255 - r) / 255, _ = l < 128 ? 2 * l * s / 255 : 255 - 2 * (255 - l) * (255 - s) / 255, g = c < 128 ? 2 * c * a / 255 : 255 - 2 * (255 - c) * (255 - a) / 255
                            },
                            "soft-light": function() {
                                var t = r * u / 255;
                                f = t + u * (255 - (255 - u) * (255 - r) / 255 - t) / 255, t = s * l / 255, _ = t + l * (255 - (255 - l) * (255 - s) / 255 - t) / 255, t = a * c / 255, g = t + c * (255 - (255 - c) * (255 - a) / 255 - t) / 255
                            },
                            "hard-light": function() {
                                f = r < 128 ? 2 * r * u / 255 : 255 - 2 * (255 - r) * (255 - u) / 255, _ = s < 128 ? 2 * s * l / 255 : 255 - 2 * (255 - s) * (255 - l) / 255, g = a < 128 ? 2 * a * c / 255 : 255 - 2 * (255 - a) * (255 - c) / 255
                            },
                            "color-dodge": function() {
                                f = 0 === u ? 0 : 255 === r ? 255 : v(255, 255 * u / (255 - r)), _ = 0 === l ? 0 : 255 === s ? 255 : v(255, 255 * l / (255 - s)), g = 0 === c ? 0 : 255 === a ? 255 : v(255, 255 * c / (255 - a))
                            },
                            "color-burn": function() {
                                f = 255 === u ? 255 : 0 === r ? 0 : p(0, 255 - 255 * (255 - u) / r), _ = 255 === l ? 255 : 0 === s ? 0 : p(0, 255 - 255 * (255 - l) / s), g = 255 === c ? 255 : 0 === a ? 0 : p(0, 255 - 255 * (255 - c) / a)
                            },
                            darken: function() {
                                f = u < r ? u : r, _ = l < s ? l : s, g = c < a ? c : a
                            },
                            lighten: function() {
                                f = u > r ? u : r, _ = l > s ? l : s, g = c > a ? c : a
                            },
                            difference: function() {
                                f = u - r, f < 0 && (f = -f), _ = l - s, _ < 0 && (_ = -_), g = c - a, g < 0 && (g = -g)
                            },
                            exclusion: function() {
                                f = u + r * (255 - u - u) / 255, _ = l + s * (255 - l - l) / 255, g = c + a * (255 - c - c) / 255
                            },
                            hue: function() {
                                i(r, s, a, n(u, l, c)), e(f, _, g, t(u, l, c))
                            },
                            saturation: function() {
                                i(u, l, c, n(r, s, a)), e(f, _, g, t(u, l, c))
                            },
                            luminosity: function() {
                                e(u, l, c, t(r, s, a))
                            },
                            color: function() {
                                e(r, s, a, t(u, l, c))
                            },
                            add: function() {
                                f = v(u + r, 255), _ = v(l + s, 255), g = v(c + a, 255)
                            },
                            subtract: function() {
                                f = p(u - r, 0), _ = p(l - s, 0), g = p(c - a, 0)
                            },
                            average: function() {
                                f = (u + r) / 2, _ = (l + s) / 2, g = (c + a) / 2
                            },
                            negation: function() {
                                f = 255 - m(255 - r - u), _ = 255 - m(255 - s - l), g = 255 - m(255 - a - c)
                            }
                        },
                        w = this.nativeModes = o.each(["source-over", "source-in", "source-out", "source-atop", "destination-over", "destination-in", "destination-out", "destination-atop", "lighter", "darker", "copy", "xor"], function(t) {
                            this[t] = !0
                        }, {}),
                        x = it.getContext(1, 1);
                    x && (o.each(y, function(t, e) {
                        var n = "darken" === e,
                            i = !1;
                        x.save();
                        try {
                            x.fillStyle = n ? "#300" : "#a00", x.fillRect(0, 0, 1, 1), x.globalCompositeOperation = e, x.globalCompositeOperation === e && (x.fillStyle = n ? "#a00" : "#300", x.fillRect(0, 0, 1, 1), i = x.getImageData(0, 0, 1, 1).data[0] !== n ? 170 : 51)
                        } catch (t) {}
                        x.restore(), w[e] = i
                    }), it.release(x)), this.process = function(t, e, n, i, o) {
                        var v = e.canvas,
                            p = "normal" === t;
                        if (p || w[t]) n.save(), n.setTransform(1, 0, 0, 1, 0, 0), n.globalAlpha = i, p || (n.globalCompositeOperation = t), n.drawImage(v, o.x, o.y), n.restore();
                        else {
                            var m = y[t];
                            if (!m) return;
                            for (var x = n.getImageData(o.x, o.y, v.width, v.height), b = x.data, S = e.getImageData(0, 0, v.width, v.height).data, C = 0, k = b.length; C < k; C += 4) {
                                r = S[C], u = b[C], s = S[C + 1], l = b[C + 1], a = S[C + 2], c = b[C + 2], h = S[C + 3], d = b[C + 3], m();
                                var M = h * i / 255,
                                    P = 1 - M;
                                b[C] = M * f + P * u, b[C + 1] = M * _ + P * l, b[C + 2] = M * g + P * c, b[C + 3] = h * i + P * d
                            }
                            n.putImageData(x, o.x, o.y)
                        }
                    }
                },
                st = new function() {
                    function t(t, e, r) {
                        return n(a.createElementNS(i, t), e, r)
                    }

                    function e(t, e) {
                        var n = o[e],
                            i = n ? t.getAttributeNS(n, e) : t.getAttribute(e);
                        return "null" === i ? null : i
                    }

                    function n(t, e, n) {
                        for (var i in e) {
                            var r = e[i],
                                s = o[i];
                            "number" == typeof r && n && (r = n.number(r)), s ? t.setAttributeNS(s, i, r) : t.setAttribute(i, r)
                        }
                        return t
                    }
                    var i = "http://www.w3.org/2000/svg",
                        r = "http://www.w3.org/2000/xmlns",
                        s = "http://www.w3.org/1999/xlink",
                        o = {
                            href: s,
                            xlink: r,
                            xmlns: r + "/",
                            "xmlns:xlink": r + "/"
                        };
                    return {
                        svg: i,
                        xmlns: r,
                        xlink: s,
                        create: t,
                        get: e,
                        set: n
                    }
                },
                at = o.each({
                    fillColor: ["fill", "color"],
                    fillRule: ["fill-rule", "string"],
                    strokeColor: ["stroke", "color"],
                    strokeWidth: ["stroke-width", "number"],
                    strokeCap: ["stroke-linecap", "string"],
                    strokeJoin: ["stroke-linejoin", "string"],
                    strokeScaling: ["vector-effect", "lookup", {
                        true: "none",
                        false: "non-scaling-stroke"
                    }, function(t, e) {
                        return !e && (t instanceof E || t instanceof M || t instanceof Y)
                    }],
                    miterLimit: ["stroke-miterlimit", "number"],
                    dashArray: ["stroke-dasharray", "array"],
                    dashOffset: ["stroke-dashoffset", "number"],
                    fontFamily: ["font-family", "string"],
                    fontWeight: ["font-weight", "string"],
                    fontSize: ["font-size", "number"],
                    justification: ["text-anchor", "lookup", {
                        left: "start",
                        center: "middle",
                        right: "end"
                    }],
                    opacity: ["opacity", "number"],
                    blendMode: ["mix-blend-mode", "style"]
                }, function(t, e) {
                    var n = o.capitalize(e),
                        i = t[2];
                    this[e] = {
                        type: t[1],
                        property: e,
                        attribute: t[0],
                        toSVG: i,
                        fromSVG: i && o.each(i, function(t, e) {
                            this[t] = e
                        }, {}),
                        exportFilter: t[3],
                        get: "get" + n,
                        set: "set" + n
                    }
                }, {});
            return new function() {
                function t(t, e, n) {
                    var i = new o,
                        r = t.getTranslation();
                    if (e) {
                        t = t._shiftless();
                        var s = t._inverseTransform(r);
                        i[n ? "cx" : "x"] = s.x, i[n ? "cy" : "y"] = s.y, r = null
                    }
                    if (!t.isIdentity()) {
                        var a = t.decompose();
                        if (a) {
                            var h = [],
                                u = a.rotation,
                                l = a.scaling,
                                c = a.skewing;
                            r && !r.isZero() && h.push("translate(" + C.point(r) + ")"), u && h.push("rotate(" + C.number(u) + ")"), d.isZero(l.x - 1) && d.isZero(l.y - 1) || h.push("scale(" + C.point(l) + ")"), c && c.x && h.push("skewX(" + C.number(c.x) + ")"), c && c.y && h.push("skewY(" + C.number(c.y) + ")"), i.transform = h.join(" ")
                        } else i.transform = "matrix(" + t.getValues().join(",") + ")"
                    }
                    return i
                }

                function e(e, n) {
                    for (var i = t(e._matrix), r = e._children, s = st.create("g", i, C), a = 0, o = r.length; a < o; a++) {
                        var h = r[a],
                            u = y(h, n);
                        if (u)
                            if (h.isClipMask()) {
                                var l = st.create("clipPath");
                                l.appendChild(u), v(h, l, "clip"), st.set(s, {
                                    "clip-path": "url(#" + l.id + ")"
                                })
                            } else s.appendChild(u)
                    }
                    return s
                }

                function n(e, n) {
                    var i = t(e._matrix, !0),
                        r = e.getSize(),
                        s = e.getImage();
                    return i.x -= r.width / 2, i.y -= r.height / 2, i.width = r.width, i.height = r.height, i.href = n.embedImages === !1 && s && s.src || e.toDataURL(), st.create("image", i, C)
                }

                function i(e, n) {
                    var i = n.matchShapes;
                    if (i) {
                        var s = e.toShape(!1);
                        if (s) return r(s, n)
                    }
                    var a, o = e._segments,
                        h = o.length,
                        u = t(e._matrix);
                    if (i && h >= 2 && !e.hasHandles())
                        if (h > 2) {
                            a = e._closed ? "polygon" : "polyline";
                            for (var l = [], c = 0; c < h; c++) l.push(C.point(o[c]._point));
                            u.points = l.join(" ")
                        } else {
                            a = "line";
                            var d = o[0]._point,
                                f = o[1]._point;
                            u.set({
                                x1: d.x,
                                y1: d.y,
                                x2: f.x,
                                y2: f.y
                            })
                        }
                    else a = "path", u.d = e.getPathData(null, n.precision);
                    return st.create(a, u, C)
                }

                function r(e) {
                    var n = e._type,
                        i = e._radius,
                        r = t(e._matrix, !0, "rectangle" !== n);
                    if ("rectangle" === n) {
                        n = "rect";
                        var s = e._size,
                            a = s.width,
                            o = s.height;
                        r.x -= a / 2, r.y -= o / 2, r.width = a, r.height = o, i.isZero() && (i = null)
                    }
                    return i && ("circle" === n ? r.r = i : (r.rx = i.width, r.ry = i.height)), st.create(n, r, C)
                }

                function a(e, n) {
                    var i = t(e._matrix),
                        r = e.getPathData(null, n.precision);
                    return r && (i.d = r), st.create("path", i, C)
                }

                function h(e, n) {
                    var i = t(e._matrix, !0),
                        r = e._definition,
                        s = g(r, "symbol"),
                        a = r._item,
                        o = a.getBounds();
                    return s || (s = st.create("symbol", {
                        viewBox: C.rectangle(o)
                    }), s.appendChild(y(a, n)), v(r, s, "symbol")), i.href = "#" + s.id, i.x += o.x, i.y += o.y, i.width = o.width, i.height = o.height, i.overflow = "visible", st.create("use", i, C)
                }

                function u(t) {
                    var e = g(t, "color");
                    if (!e) {
                        var n, i = t.getGradient(),
                            r = i._radial,
                            s = t.getOrigin(),
                            a = t.getDestination();
                        if (r) {
                            n = {
                                cx: s.x,
                                cy: s.y,
                                r: s.getDistance(a)
                            };
                            var o = t.getHighlight();
                            o && (n.fx = o.x, n.fy = o.y)
                        } else n = {
                            x1: s.x,
                            y1: s.y,
                            x2: a.x,
                            y2: a.y
                        };
                        n.gradientUnits = "userSpaceOnUse", e = st.create((r ? "radial" : "linear") + "Gradient", n, C);
                        for (var h = i._stops, u = 0, l = h.length; u < l; u++) {
                            var c = h[u],
                                d = c._color,
                                f = d.getAlpha();
                            n = {
                                offset: c._offset || u / (l - 1)
                            }, d && (n["stop-color"] = d.toCSS(!0)), f < 1 && (n["stop-opacity"] = f), e.appendChild(st.create("stop", n, C))
                        }
                        v(t, e, "color")
                    }
                    return "url(#" + e.id + ")"
                }

                function l(e) {
                    var n = st.create("text", t(e._matrix, !0), C);
                    return n.textContent = e._content, n
                }

                function _(t, e, n) {
                    var i = {},
                        r = !n && t.getParent(),
                        s = [];
                    return null != t._name && (i.id = t._name), o.each(at, function(e) {
                        var n = e.get,
                            a = e.type,
                            h = t[n]();
                        if (e.exportFilter ? e.exportFilter(t, h) : !r || !o.equals(r[n](), h)) {
                            if ("color" === a && null != h) {
                                var l = h.getAlpha();
                                l < 1 && (i[e.attribute + "-opacity"] = l)
                            }
                            "style" === a ? s.push(e.attribute + ": " + h) : i[e.attribute] = null == h ? "none" : "color" === a ? h.gradient ? u(h, t) : h.toCSS(!0) : "array" === a ? h.join(",") : "lookup" === a ? e.toSVG[h] : h
                        }
                    }), s.length && (i.style = s.join(";")), 1 === i.opacity && delete i.opacity, t._visible || (i.visibility = "hidden"), st.set(e, i, C)
                }

                function g(t, e) {
                    k || (k = {
                        ids: {},
                        svgs: {}
                    });
                    var n = t._id || t.__id || (t.__id = f.get("svg"));
                    return t && k.svgs[e + "-" + n]
                }

                function v(t, e, n) {
                    k || g();
                    var i = k.ids[n] = (k.ids[n] || 0) + 1;
                    e.id = n + "-" + i, k.svgs[n + "-" + (t._id || t.__id)] = e
                }

                function p(t, e) {
                    var n = t,
                        i = null;
                    if (k) {
                        n = "svg" === t.nodeName.toLowerCase() && t;
                        for (var r in k.svgs) i || (n || (n = st.create("svg"), n.appendChild(t)), i = n.insertBefore(st.create("defs"), n.firstChild)), i.appendChild(k.svgs[r]);
                        k = null
                    }
                    return e.asString ? (new s.XMLSerializer).serializeToString(n) : n
                }

                function y(t, e, n) {
                    var i = M[t._class],
                        r = i && i(t, e);
                    if (r) {
                        var s = e.onExport;
                        s && (r = s(t, r, e) || r);
                        var a = JSON.stringify(t._data);
                        a && "{}" !== a && "null" !== a && r.setAttribute("data-paper-data", a)
                    }
                    return r && _(t, r, n)
                }

                function x(t) {
                    return t || (t = {}), C = new c(t.precision), t
                }
                var C, k, M = {
                    Group: e,
                    Layer: e,
                    Raster: n,
                    Path: i,
                    Shape: r,
                    CompoundPath: a,
                    SymbolItem: h,
                    PointText: l
                };
                S.inject({
                    exportSVG: function(t) {
                        return t = x(t), p(y(this, t, !0), t)
                    }
                }), b.inject({
                    exportSVG: function(e) {
                        e = x(e);
                        var n = this._children,
                            i = this.getView(),
                            r = o.pick(e.bounds, "view"),
                            s = e.matrix || "view" === r && i._matrix,
                            a = s && w.read([s]),
                            h = "view" === r ? new m([0, 0], i.getViewSize()) : "content" === r ? S._getBounds(n, a, {
                                stroke: !0
                            }) : m.read([r], 0, {
                                readNull: !0
                            }),
                            u = {
                                version: "1.1",
                                xmlns: st.svg,
                                "xmlns:xlink": st.xlink
                            };
                        h && (u.width = h.width, u.height = h.height, (h.x || h.y) && (u.viewBox = C.rectangle(h)));
                        var l = st.create("svg", u, C),
                            c = l;
                        a && !a.isIdentity() && (c = l.appendChild(st.create("g", t(a), C)));
                        for (var d = 0, f = n.length; d < f; d++) c.appendChild(y(n[d], e, !0));
                        return p(l, e)
                    }
                })
            }, new function() {
                function t(t, e, n, i, r) {
                    var s = st.get(t, e),
                        a = null == s ? i ? null : n ? "" : 0 : n ? s : parseFloat(s);
                    return /%\s*$/.test(s) ? a / 100 * (r ? 1 : I[/x|^width/.test(e) ? "width" : "height"]) : a
                }

                function e(e, n, i, r, s) {
                    return n = t(e, n || "x", !1, r, s), i = t(e, i || "y", !1, r, s), !r || null != n && null != i ? new _(n, i) : null
                }

                function n(e, n, i, r, s) {
                    return n = t(e, n || "width", !1, r, s), i = t(e, i || "height", !1, r, s), !r || null != n && null != i ? new v(n, i) : null
                }

                function h(t, e, n) {
                    return "none" === t ? null : "number" === e ? parseFloat(t) : "array" === e ? t ? t.split(/[\s,]+/g).map(parseFloat) : [] : "color" === e ? x(t) || t : "lookup" === e ? n[t] : t
                }

                function u(t, e, n, i) {
                    var r = t.childNodes,
                        s = "clippath" === e,
                        a = "defs" === e,
                        o = new C,
                        h = o._project,
                        u = h._currentStyle,
                        l = [];
                    if (s || a || (o = y(o, t, i), h._currentStyle = o._style.clone()), i)
                        for (var c = t.querySelectorAll("defs"), d = 0, f = c.length; d < f; d++) k(c[d], n, !1);
                    for (var d = 0, f = r.length; d < f; d++) {
                        var _, g = r[d];
                        1 !== g.nodeType || /^defs$/i.test(g.nodeName) || !(_ = k(g, n, !1)) || _ instanceof T || l.push(_)
                    }
                    return o.addChildren(l), s && (o = y(o.reduce(), t, i)), h._currentStyle = u, (s || a) && (o.remove(), o = null), o
                }

                function l(t, e) {
                    for (var n = t.getAttribute("points").match(/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g), i = [], r = 0, s = n.length; r < s; r += 2) i.push(new _(parseFloat(n[r]), parseFloat(n[r + 1])));
                    var a = new N(i);
                    return "polygon" === e && a.closePath(), a
                }

                function c(t) {
                    return E.create(t.getAttribute("d"))
                }

                function d(n, i) {
                    var r, s = (t(n, "href", !0) || "").substring(1),
                        a = "radialgradient" === i;
                    if (s) r = A[s].getGradient(), r._radial ^ a && (r = r.clone(), r._radial = a);
                    else {
                        for (var o = n.childNodes, h = [], u = 0, l = o.length; u < l; u++) {
                            var c = o[u];
                            1 === c.nodeType && h.push(y(new U, c))
                        }
                        r = new W(h, a)
                    }
                    var d, f, _, g = "userSpaceOnUse" !== t(n, "gradientUnits", !0);
                    a ? (d = e(n, "cx", "cy", !1, g), f = d.add(t(n, "r", !1, !1, g), 0), _ = e(n, "fx", "fy", !0, g)) : (d = e(n, "x1", "y1", !1, g), f = e(n, "x2", "y2", !1, g));
                    var v = y(new V(r, d, f, _), n);
                    return v._scaleToBounds = g, null
                }

                function f(t, e, n, i) {
                    if (t.transform) {
                        for (var r = (i.getAttribute(n) || "").split(/\)\s*/g), s = new w, a = 0, o = r.length; a < o; a++) {
                            var h = r[a];
                            if (!h) break;
                            for (var u = h.split(/\(\s*/), l = u[0], c = u[1].split(/[\s,]+/g), d = 0, f = c.length; d < f; d++) c[d] = parseFloat(c[d]);
                            switch (l) {
                                case "matrix":
                                    s.append(new w(c[0], c[1], c[2], c[3], c[4], c[5]));
                                    break;
                                case "rotate":
                                    s.rotate(c[0], c[1], c[2]);
                                    break;
                                case "translate":
                                    s.translate(c[0], c[1]);
                                    break;
                                case "scale":
                                    s.scale(c);
                                    break;
                                case "skewX":
                                    s.skew(c[0], 0);
                                    break;
                                case "skewY":
                                    s.skew(0, c[0])
                            }
                        }
                        t.transform(s)
                    }
                }

                function g(t, e, n) {
                    var i = "fill-opacity" === n ? "getFillColor" : "getStrokeColor",
                        r = t[i] && t[i]();
                    r && r.setAlpha(parseFloat(e))
                }

                function p(t, e, n) {
                    var i = t.attributes[e],
                        s = i && i.value;
                    if (!s) {
                        var a = o.camelize(e);
                        s = t.style[a], s || n.node[a] === n.parent[a] || (s = n.node[a])
                    }
                    return s ? "none" === s ? null : s : r
                }

                function y(t, e, n) {
                    var i = e.parentNode,
                        s = {
                            node: H.getStyles(e) || {},
                            parent: !n && !/^defs$/i.test(i.tagName) && H.getStyles(i) || {}
                        };
                    return o.each(z, function(n, i) {
                        var a = p(e, i, s);
                        t = a !== r && n(t, a, i, e, s) || t
                    }), t
                }

                function x(t) {
                    var e = t && t.match(/\((?:["'#]*)([^"')]+)/),
                        n = e && A[e[1].replace(s.location.href.split("#")[0] + "#", "")];
                    return n && n._scaleToBounds && (n = n.clone(), n._scaleToBounds = !0), n
                }

                function k(t, e, r) {
                    var s, h, u, l = t.nodeName.toLowerCase(),
                        c = "#document" !== l,
                        d = a.body;
                    r && c && (I = n(t, null, null, !0) || i.getView().getSize(), s = st.create("svg", {
                        style: "stroke-width: 1px; stroke-miterlimit: 10"
                    }), h = t.parentNode, u = t.nextSibling, s.appendChild(t), d.appendChild(s));
                    var f = i.settings,
                        _ = f.applyMatrix,
                        g = f.insertItems;
                    f.applyMatrix = !1, f.insertItems = !1;
                    var v = D[l],
                        p = v && v(t, l, e, r) || null;
                    if (f.insertItems = g, f.applyMatrix = _, p) {
                        !c || p instanceof C || (p = y(p, t, r));
                        var m = e.onImport,
                            w = c && t.getAttribute("data-paper-data");
                        m && (p = m(t, p, e) || p), e.expandShapes && p instanceof M && (p.remove(), p = p.toPath()), w && (p._data = JSON.parse(w))
                    }
                    return s && (d.removeChild(s), h && (u ? h.insertBefore(t, u) : h.appendChild(t))), r && (A = {}, p && o.pick(e.applyMatrix, _) && p.matrix.apply(!0, !0)), p
                }

                function O(t, e, n) {
                    function o(a) {
                        try {
                            var o = "object" == typeof a ? a : (new s.DOMParser).parseFromString(a, "image/svg+xml");
                            if (!o.nodeName) throw o = null, new Error("Unsupported SVG source: " + t);
                            i = u, l = k(o, e, !0), e && e.insert === !1 || n._insertItem(r, l);
                            var c = e.onLoad;
                            c && c(l, a)
                        } catch (t) {
                            h(t)
                        }
                    }

                    function h(t, n) {
                        var i = e.onError;
                        if (!i) throw new Error(t);
                        i(t, n)
                    }
                    if (!t) return null;
                    e = "function" == typeof e ? {
                        onLoad: e
                    } : e || {};
                    var u = i,
                        l = null;
                    if ("string" != typeof t || /^.*</.test(t)) {
                        if ("undefined" != typeof File && t instanceof File) {
                            var c = new FileReader;
                            return c.onload = function() {
                                o(c.result)
                            }, c.onerror = function() {
                                h(c.error)
                            }, c.readAsText(t)
                        }
                        o(t)
                    } else {
                        var d = a.getElementById(t);
                        d ? o(d) : nt.request({
                            url: t,
                            async: !0,
                            onLoad: o,
                            onError: h
                        })
                    }
                    return l
                }
                var I, A = {},
                    D = {
                        "#document": function(t, e, n, i) {
                            for (var r = t.childNodes, s = 0, a = r.length; s < a; s++) {
                                var o = r[s];
                                if (1 === o.nodeType) return k(o, n, i)
                            }
                        },
                        g: u,
                        svg: u,
                        clippath: u,
                        polygon: l,
                        polyline: l,
                        path: c,
                        lineargradient: d,
                        radialgradient: d,
                        image: function(i) {
                            var r = new P(t(i, "href", !0));
                            return r.on("load", function() {
                                var t = n(i);
                                this.setSize(t);
                                var r = this._matrix._transformPoint(e(i).add(t.divide(2)));
                                this.translate(r)
                            }), r
                        },
                        symbol: function(t, e, n, i) {
                            return new T(u(t, e, n, i), (!0))
                        },
                        defs: u,
                        use: function(n) {
                            var i = (t(n, "href", !0) || "").substring(1),
                                r = A[i],
                                s = e(n);
                            return r ? r instanceof T ? r.place(s) : r.clone().translate(s) : null
                        },
                        circle: function(n) {
                            return new M.Circle(e(n, "cx", "cy"), t(n, "r"))
                        },
                        ellipse: function(t) {
                            return new M.Ellipse({
                                center: e(t, "cx", "cy"),
                                radius: n(t, "rx", "ry")
                            })
                        },
                        rect: function(t) {
                            return new M.Rectangle(new m(e(t), n(t)), n(t, "rx", "ry"))
                        },
                        line: function(t) {
                            return new N.Line(e(t, "x1", "y1"), e(t, "x2", "y2"))
                        },
                        text: function(t) {
                            var n = new B(e(t).add(e(t, "dx", "dy")));
                            return n.setContent(t.textContent.trim() || ""), n
                        }
                    },
                    z = o.set(o.each(at, function(t) {
                        this[t.attribute] = function(e, n) {
                            if (e[t.set] && (e[t.set](h(n, t.type, t.fromSVG)), "color" === t.type)) {
                                var i = e[t.get]();
                                if (i) {
                                    if (i._scaleToBounds) {
                                        var r = e.getBounds();
                                        i.transform((new w).translate(r.getPoint()).scale(r.getSize()))
                                    }
                                    e instanceof M && i.transform((new w).translate(e.getPosition(!0).negate()))
                                }
                            }
                        }
                    }, {}), {
                        id: function(t, e) {
                            A[e] = t, t.setName && t.setName(e)
                        },
                        "clip-path": function(t, e) {
                            var n = x(e);
                            if (n) {
                                if (n = n.clone(), n.setClipMask(!0), !(t instanceof C)) return new C(n, t);
                                t.insertChild(0, n)
                            }
                        },
                        gradientTransform: f,
                        transform: f,
                        "fill-opacity": g,
                        "stroke-opacity": g,
                        visibility: function(t, e) {
                            t.setVisible && t.setVisible("visible" === e)
                        },
                        display: function(t, e) {
                            t.setVisible && t.setVisible(null !== e)
                        },
                        "stop-color": function(t, e) {
                            t.setColor && t.setColor(e)
                        },
                        "stop-opacity": function(t, e) {
                            t._color && t._color.setAlpha(parseFloat(e))
                        },
                        offset: function(t, e) {
                            if (t.setOffset) {
                                var n = e.match(/(.*)%$/);
                                t.setOffset(n ? n[1] / 100 : parseFloat(e))
                            }
                        },
                        viewBox: function(t, e, i, r, s) {
                            var a, o, u = new m(h(e, "array")),
                                l = n(r, null, null, !0);
                            if (t instanceof C) {
                                var c = l ? l.divide(u.getSize()) : 1,
                                    o = (new w).scale(c).translate(u.getPoint().negate());
                                a = t
                            } else t instanceof T && (l && u.setSize(l), a = t._item);
                            if (a) {
                                if ("visible" !== p(r, "overflow", s)) {
                                    var d = new M.Rectangle(u);
                                    d.setClipMask(!0), a.addChild(d)
                                }
                                o && a.transform(o)
                            }
                        }
                    });
                S.inject({
                    importSVG: function(t, e) {
                        return O(t, e, this)
                    }
                }), b.inject({
                    importSVG: function(t, e) {
                        return this.activate(), O(t, e, this)
                    }
                })
            }, o.exports.PaperScript = function() {
                function t(t, e, n) {
                    var i = y[e];
                    if (t && t[i]) {
                        var r = t[i](n);
                        return "!=" === e ? !r : r
                    }
                    switch (e) {
                        case "+":
                            return t + n;
                        case "-":
                            return t - n;
                        case "*":
                            return t * n;
                        case "/":
                            return t / n;
                        case "%":
                            return t % n;
                        case "==":
                            return t == n;
                        case "!=":
                            return t != n
                    }
                }

                function n(t, e) {
                    var n = w[t];
                    if (n && e && e[n]) return e[n]();
                    switch (t) {
                        case "+":
                            return +e;
                        case "-":
                            return -e
                    }
                }

                function r(t, e) {
                    return m.acorn.parse(t, e)
                }

                function h(t, e) {
                    function n(t) {
                        for (var e = 0, n = f.length; e < n; e++) {
                            var i = f[e];
                            if (i[0] >= t) break;
                            t += i[1]
                        }
                        return t
                    }

                    function o(e) {
                        return t.substring(n(e.range[0]), n(e.range[1]))
                    }

                    function h(e, i) {
                        return t.substring(n(e.range[1]), n(i.range[0]))
                    }

                    function u(e, i) {
                        for (var r = n(e.range[0]), s = n(e.range[1]), a = 0, o = f.length - 1; o >= 0; o--)
                            if (r > f[o][0]) {
                                a = o + 1;
                                break
                            } f.splice(a, 0, [r, i.length - s + r]), t = t.substring(0, r) + i + t.substring(s)
                    }

                    function l(t, e) {
                        if (t) {
                            for (var n in t)
                                if ("range" !== n && "loc" !== n) {
                                    var i = t[n];
                                    if (Array.isArray(i))
                                        for (var r = 0, s = i.length; r < s; r++) l(i[r], t);
                                    else i && "object" == typeof i && l(i, t)
                                } switch (t.type) {
                                case "UnaryExpression":
                                    if (t.operator in w && "Literal" !== t.argument.type) {
                                        var a = o(t.argument);
                                        u(t, '$__("' + t.operator + '", ' + a + ")")
                                    }
                                    break;
                                case "BinaryExpression":
                                    if (t.operator in y && "Literal" !== t.left.type) {
                                        var c = o(t.left),
                                            d = o(t.right),
                                            f = h(t.left, t.right),
                                            _ = t.operator;
                                        u(t, "__$__(" + c + "," + f.replace(new RegExp("\\" + _), '"' + _ + '"') + ", " + d + ")")
                                    }
                                    break;
                                case "UpdateExpression":
                                case "AssignmentExpression":
                                    var g = e && e.type;
                                    if (!("ForStatement" === g || "BinaryExpression" === g && /^[=!<>]/.test(e.operator) || "MemberExpression" === g && e.computed))
                                        if ("UpdateExpression" === t.type) {
                                            var a = o(t.argument),
                                                v = "__$__(" + a + ', "' + t.operator[0] + '", 1)',
                                                p = a + " = " + v;
                                            t.prefix || "AssignmentExpression" !== g && "VariableDeclarator" !== g || (o(e.left || e.id) === a && (p = v), p = a + "; " + p), u(t, p)
                                        } else if (/^.=$/.test(t.operator) && "Literal" !== t.left.type) {
                                        var c = o(t.left),
                                            d = o(t.right);
                                        u(t, c + " = __$__(" + c + ', "' + t.operator[0] + '", ' + d + ")")
                                    }
                            }
                        }
                    }

                    function c(t) {
                        var e = "",
                            n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                        for (t = (Math.abs(t) << 1) + (t < 0 ? 1 : 0); t || !e;) {
                            var i = 31 & t;
                            t >>= 5, t && (i |= 32), e += n[i]
                        }
                        return e
                    }
                    if (!t) return "";
                    e = e || {};
                    var d, f = [],
                        _ = e.url || "",
                        g = i.agent,
                        v = g.versionNumber,
                        p = !1,
                        m = e.sourceMaps,
                        x = e.source || t,
                        b = /\r\n|\n|\r/gm,
                        S = e.offset || 0;
                    if (m && (g.chrome && v >= 30 || g.webkit && v >= 537.76 || g.firefox && v >= 23 || g.node)) {
                        if (g.node) S -= 2;
                        else if (s && _ && !s.location.href.indexOf(_)) {
                            var C = a.getElementsByTagName("html")[0].innerHTML;
                            S = C.substr(0, C.indexOf(t) + 1).match(b).length + 1
                        }
                        p = S > 0 && !(g.chrome && v >= 36 || g.safari && v >= 600 || g.firefox && v >= 40 || g.node);
                        var k = ["AA" + c(p ? 0 : S) + "A"];
                        k.length = (t.match(b) || []).length + 1 + (p ? S : 0),
                            d = {
                                version: 3,
                                file: _,
                                names: [],
                                mappings: k.join(";AACA"),
                                sourceRoot: "",
                                sources: [_],
                                sourcesContent: [x]
                            }
                    }
                    return l(r(t, {
                        ranges: !0
                    })), d && (p && (t = new Array(S + 1).join("\n") + t), /^(inline|both)$/.test(m) && (t += "\n//# sourceMappingURL=data:application/json;base64," + s.btoa(unescape(encodeURIComponent(JSON.stringify(d))))), t += "\n//# sourceURL=" + (_ || "paperscript")), {
                        url: _,
                        source: x,
                        code: t,
                        map: d
                    }
                }

                function l(e, r, s) {
                    function u(t, n) {
                        for (var i in t) !n && /^_/.test(i) || !new RegExp("([\\b\\s\\W]|^)" + i.replace(/\$/g, "\\$") + "\\b").test(e) || (v.push(i), p.push(t[i]))
                    }
                    i = r;
                    var l, c = r.getView(),
                        d = /\btool\.\w+|\s+on(?:Key|Mouse)(?:Up|Down|Move|Drag)\b/.test(e) && !/\bnew\s+Tool\b/.test(e) ? new et : null,
                        f = d ? d._events : [],
                        g = ["onFrame", "onResize"].concat(f),
                        v = [],
                        p = [],
                        m = "object" == typeof e ? e : h(e, s);
                    e = m.code, u({
                        __$__: t,
                        $__: n,
                        paper: r,
                        view: c,
                        tool: d
                    }, !0), u(r), g = o.each(g, function(t) {
                        new RegExp("\\s+" + t + "\\b").test(e) && (v.push(t), this.push(t + ": " + t))
                    }, []).join(", "), g && (e += "\nreturn { " + g + " };");
                    var y = i.agent;
                    if (a && (y.chrome || y.firefox && y.versionNumber < 40)) {
                        var w = a.createElement("script"),
                            x = a.head || a.getElementsByTagName("head")[0];
                        y.firefox && (e = "\n" + e), w.appendChild(a.createTextNode("paper._execute = function(" + v + ") {" + e + "\n}")), x.appendChild(w), l = i._execute, delete i._execute, x.removeChild(w)
                    } else l = Function(v, e);
                    var b = l.apply(r, p) || {};
                    return o.each(f, function(t) {
                        var e = b[t];
                        e && (d[t] = e)
                    }), c && (b.onResize && c.setOnResize(b.onResize), c.emit("resize", {
                        size: c.size,
                        delta: new _
                    }), b.onFrame && c.setOnFrame(b.onFrame), c.requestUpdate()), m
                }

                function c(t) {
                    if (/^text\/(?:x-|)paperscript$/.test(t.type) && "true" !== u.getAttribute(t, "ignore")) {
                        var e = u.getAttribute(t, "canvas"),
                            n = a.getElementById(e),
                            i = t.src || t.getAttribute("data-src"),
                            r = u.hasAttribute(t, "async"),
                            s = "data-paper-scope";
                        if (!n) throw new Error('Unable to find canvas with id "' + e + '"');
                        var o = u.get(n.getAttribute(s)) || (new u).setup(n);
                        return n.setAttribute(s, o._id), i ? nt.request({
                            url: i,
                            async: r,
                            mimeType: "text/plain",
                            onLoad: function(t) {
                                l(t, o, i)
                            }
                        }) : l(t.innerHTML, o, t.baseURI), t.setAttribute("data-paper-ignore", "true"), o
                    }
                }

                function d() {
                    o.each(a && a.getElementsByTagName("script"), c)
                }

                function f(t) {
                    return t ? c(t) : d()
                }
                var g, p, m = this;
                ! function(t, n) {
                    return "object" == typeof g && "object" == typeof e ? n(g) : "function" == typeof p && p.amd ? p(["exports"], n) : void n(t.acorn || (t.acorn = {}))
                }(this, function(t) {
                    "use strict";

                    function e(t) {
                        ct = t || {};
                        for (var e in gt) Object.prototype.hasOwnProperty.call(ct, e) || (ct[e] = gt[e]);
                        _t = ct.sourceFile || null
                    }

                    function n(t, e) {
                        var n = vt(dt, t);
                        e += " (" + n.line + ":" + n.column + ")";
                        var i = new SyntaxError(e);
                        throw i.pos = t, i.loc = n, i.raisedAt = pt, i
                    }

                    function i(t) {
                        function e(t) {
                            if (1 == t.length) return n += "return str === " + JSON.stringify(t[0]) + ";";
                            n += "switch(str){";
                            for (var e = 0; e < t.length; ++e) n += "case " + JSON.stringify(t[e]) + ":";
                            n += "return true}return false;"
                        }
                        t = t.split(" ");
                        var n = "",
                            i = [];
                        t: for (var r = 0; r < t.length; ++r) {
                            for (var s = 0; s < i.length; ++s)
                                if (i[s][0].length == t[r].length) {
                                    i[s].push(t[r]);
                                    continue t
                                } i.push([t[r]])
                        }
                        if (i.length > 3) {
                            i.sort(function(t, e) {
                                return e.length - t.length
                            }), n += "switch(str.length){";
                            for (var r = 0; r < i.length; ++r) {
                                var a = i[r];
                                n += "case " + a[0].length + ":", e(a)
                            }
                            n += "}"
                        } else e(t);
                        return new Function("str", n)
                    }

                    function r() {
                        this.line = kt, this.column = pt - Mt
                    }

                    function s() {
                        kt = 1, pt = Mt = 0, Ct = !0, u()
                    }

                    function a(t, e) {
                        yt = pt, ct.locations && (xt = new r), bt = t, u(), St = e, Ct = t.beforeExpr
                    }

                    function o() {
                        var t = ct.onComment && ct.locations && new r,
                            e = pt,
                            i = dt.indexOf("*/", pt += 2);
                        if (-1 === i && n(pt - 2, "Unterminated comment"), pt = i + 2, ct.locations) {
                            Je.lastIndex = e;
                            for (var s;
                                (s = Je.exec(dt)) && s.index < pt;) ++kt, Mt = s.index + s[0].length
                        }
                        ct.onComment && ct.onComment(!0, dt.slice(e + 2, i), e, pt, t, ct.locations && new r)
                    }

                    function h() {
                        for (var t = pt, e = ct.onComment && ct.locations && new r, n = dt.charCodeAt(pt += 2); ft > pt && 10 !== n && 13 !== n && 8232 !== n && 8233 !== n;) ++pt, n = dt.charCodeAt(pt);
                        ct.onComment && ct.onComment(!1, dt.slice(t + 2, pt), t, pt, e, ct.locations && new r)
                    }

                    function u() {
                        for (; ft > pt;) {
                            var t = dt.charCodeAt(pt);
                            if (32 === t) ++pt;
                            else if (13 === t) {
                                ++pt;
                                var e = dt.charCodeAt(pt);
                                10 === e && ++pt, ct.locations && (++kt, Mt = pt)
                            } else if (10 === t || 8232 === t || 8233 === t) ++pt, ct.locations && (++kt, Mt = pt);
                            else if (t > 8 && 14 > t) ++pt;
                            else if (47 === t) {
                                var e = dt.charCodeAt(pt + 1);
                                if (42 === e) o();
                                else {
                                    if (47 !== e) break;
                                    h()
                                }
                            } else if (160 === t) ++pt;
                            else {
                                if (!(t >= 5760 && Ue.test(String.fromCharCode(t)))) break;
                                ++pt
                            }
                        }
                    }

                    function l() {
                        var t = dt.charCodeAt(pt + 1);
                        return t >= 48 && 57 >= t ? C(!0) : (++pt, a(we))
                    }

                    function c() {
                        var t = dt.charCodeAt(pt + 1);
                        return Ct ? (++pt, x()) : 61 === t ? w(Ce, 2) : w(be, 1)
                    }

                    function d() {
                        var t = dt.charCodeAt(pt + 1);
                        return 61 === t ? w(Ce, 2) : w(Ne, 1)
                    }

                    function f(t) {
                        var e = dt.charCodeAt(pt + 1);
                        return e === t ? w(124 === t ? Pe : Oe, 2) : 61 === e ? w(Ce, 2) : w(124 === t ? Te : Ae, 1)
                    }

                    function _() {
                        var t = dt.charCodeAt(pt + 1);
                        return 61 === t ? w(Ce, 2) : w(Ie, 1)
                    }

                    function g(t) {
                        var e = dt.charCodeAt(pt + 1);
                        return e === t ? 45 == e && 62 == dt.charCodeAt(pt + 2) && $e.test(dt.slice(Ot, pt)) ? (pt += 3, h(), u(), y()) : w(ke, 2) : 61 === e ? w(Ce, 2) : w(Ee, 1)
                    }

                    function v(t) {
                        var e = dt.charCodeAt(pt + 1),
                            n = 1;
                        return e === t ? (n = 62 === t && 62 === dt.charCodeAt(pt + 2) ? 3 : 2, 61 === dt.charCodeAt(pt + n) ? w(Ce, n + 1) : w(Le, n)) : 33 == e && 60 == t && 45 == dt.charCodeAt(pt + 2) && 45 == dt.charCodeAt(pt + 3) ? (pt += 4, h(), u(), y()) : (61 === e && (n = 61 === dt.charCodeAt(pt + 2) ? 3 : 2), w(ze, n))
                    }

                    function p(t) {
                        var e = dt.charCodeAt(pt + 1);
                        return 61 === e ? w(De, 61 === dt.charCodeAt(pt + 2) ? 3 : 2) : w(61 === t ? Se : Me, 1)
                    }

                    function m(t) {
                        switch (t) {
                            case 46:
                                return l();
                            case 40:
                                return ++pt, a(ge);
                            case 41:
                                return ++pt, a(ve);
                            case 59:
                                return ++pt, a(me);
                            case 44:
                                return ++pt, a(pe);
                            case 91:
                                return ++pt, a(ce);
                            case 93:
                                return ++pt, a(de);
                            case 123:
                                return ++pt, a(fe);
                            case 125:
                                return ++pt, a(_e);
                            case 58:
                                return ++pt, a(ye);
                            case 63:
                                return ++pt, a(xe);
                            case 48:
                                var e = dt.charCodeAt(pt + 1);
                                if (120 === e || 88 === e) return S();
                            case 49:
                            case 50:
                            case 51:
                            case 52:
                            case 53:
                            case 54:
                            case 55:
                            case 56:
                            case 57:
                                return C(!1);
                            case 34:
                            case 39:
                                return k(t);
                            case 47:
                                return c(t);
                            case 37:
                            case 42:
                                return d();
                            case 124:
                            case 38:
                                return f(t);
                            case 94:
                                return _();
                            case 43:
                            case 45:
                                return g(t);
                            case 60:
                            case 62:
                                return v(t);
                            case 61:
                            case 33:
                                return p(t);
                            case 126:
                                return w(Me, 1)
                        }
                        return !1
                    }

                    function y(t) {
                        if (t ? pt = mt + 1 : mt = pt, ct.locations && (wt = new r), t) return x();
                        if (pt >= ft) return a(jt);
                        var e = dt.charCodeAt(pt);
                        if (Xe(e) || 92 === e) return O();
                        var i = m(e);
                        if (i === !1) {
                            var s = String.fromCharCode(e);
                            if ("\\" === s || Ge.test(s)) return O();
                            n(pt, "Unexpected character '" + s + "'")
                        }
                        return i
                    }

                    function w(t, e) {
                        var n = dt.slice(pt, pt + e);
                        pt += e, a(t, n)
                    }

                    function x() {
                        for (var t, e, i = "", r = pt;;) {
                            pt >= ft && n(r, "Unterminated regular expression");
                            var s = dt.charAt(pt);
                            if ($e.test(s) && n(r, "Unterminated regular expression"), t) t = !1;
                            else {
                                if ("[" === s) e = !0;
                                else if ("]" === s && e) e = !1;
                                else if ("/" === s && !e) break;
                                t = "\\" === s
                            }++pt
                        }
                        var i = dt.slice(r, pt);
                        ++pt;
                        var o = P();
                        o && !/^[gmsiy]*$/.test(o) && n(r, "Invalid regexp flag");
                        try {
                            var h = new RegExp(i, o)
                        } catch (t) {
                            t instanceof SyntaxError && n(r, t.message), n(t)
                        }
                        return a(Et, h)
                    }

                    function b(t, e) {
                        for (var n = pt, i = 0, r = 0, s = null == e ? 1 / 0 : e; s > r; ++r) {
                            var a, o = dt.charCodeAt(pt);
                            if (a = o >= 97 ? o - 97 + 10 : o >= 65 ? o - 65 + 10 : o >= 48 && 57 >= o ? o - 48 : 1 / 0, a >= t) break;
                            ++pt, i = i * t + a
                        }
                        return pt === n || null != e && pt - n !== e ? null : i
                    }

                    function S() {
                        pt += 2;
                        var t = b(16);
                        return null == t && n(mt + 2, "Expected hexadecimal number"), Xe(dt.charCodeAt(pt)) && n(pt, "Identifier directly after number"), a(Lt, t)
                    }

                    function C(t) {
                        var e = pt,
                            i = !1,
                            r = 48 === dt.charCodeAt(pt);
                        t || null !== b(10) || n(e, "Invalid number"), 46 === dt.charCodeAt(pt) && (++pt, b(10), i = !0);
                        var s = dt.charCodeAt(pt);
                        69 !== s && 101 !== s || (s = dt.charCodeAt(++pt), 43 !== s && 45 !== s || ++pt, null === b(10) && n(e, "Invalid number"), i = !0), Xe(dt.charCodeAt(pt)) && n(pt, "Identifier directly after number");
                        var o, h = dt.slice(e, pt);
                        return i ? o = parseFloat(h) : r && 1 !== h.length ? /[89]/.test(h) || Dt ? n(e, "Invalid number") : o = parseInt(h, 8) : o = parseInt(h, 10), a(Lt, o)
                    }

                    function k(t) {
                        pt++;
                        for (var e = "";;) {
                            pt >= ft && n(mt, "Unterminated string constant");
                            var i = dt.charCodeAt(pt);
                            if (i === t) return ++pt, a(Nt, e);
                            if (92 === i) {
                                i = dt.charCodeAt(++pt);
                                var r = /^[0-7]+/.exec(dt.slice(pt, pt + 3));
                                for (r && (r = r[0]); r && parseInt(r, 8) > 255;) r = r.slice(0, -1);
                                if ("0" === r && (r = null), ++pt, r) Dt && n(pt - 2, "Octal literal in strict mode"), e += String.fromCharCode(parseInt(r, 8)), pt += r.length - 1;
                                else switch (i) {
                                    case 110:
                                        e += "\n";
                                        break;
                                    case 114:
                                        e += "\r";
                                        break;
                                    case 120:
                                        e += String.fromCharCode(M(2));
                                        break;
                                    case 117:
                                        e += String.fromCharCode(M(4));
                                        break;
                                    case 85:
                                        e += String.fromCharCode(M(8));
                                        break;
                                    case 116:
                                        e += "\t";
                                        break;
                                    case 98:
                                        e += "\b";
                                        break;
                                    case 118:
                                        e += "\v";
                                        break;
                                    case 102:
                                        e += "\f";
                                        break;
                                    case 48:
                                        e += "\0";
                                        break;
                                    case 13:
                                        10 === dt.charCodeAt(pt) && ++pt;
                                    case 10:
                                        ct.locations && (Mt = pt, ++kt);
                                        break;
                                    default:
                                        e += String.fromCharCode(i)
                                }
                            } else 13 !== i && 10 !== i && 8232 !== i && 8233 !== i || n(mt, "Unterminated string constant"), e += String.fromCharCode(i), ++pt
                        }
                    }

                    function M(t) {
                        var e = b(16, t);
                        return null === e && n(mt, "Bad character escape sequence"), e
                    }

                    function P() {
                        je = !1;
                        for (var t, e = !0, i = pt;;) {
                            var r = dt.charCodeAt(pt);
                            if (Ke(r)) je && (t += dt.charAt(pt)), ++pt;
                            else {
                                if (92 !== r) break;
                                je || (t = dt.slice(i, pt)), je = !0, 117 != dt.charCodeAt(++pt) && n(pt, "Expecting Unicode escape sequence \\uXXXX"), ++pt;
                                var s = M(4),
                                    a = String.fromCharCode(s);
                                a || n(pt - 1, "Invalid Unicode escape"), (e ? Xe(s) : Ke(s)) || n(pt - 4, "Invalid Unicode escape"), t += a
                            }
                            e = !1
                        }
                        return je ? t : dt.slice(i, pt)
                    }

                    function O() {
                        var t = P(),
                            e = Rt;
                        return !je && We(t) && (e = le[t]), a(e, t)
                    }

                    function T() {
                        Pt = mt, Ot = yt, Tt = xt, y()
                    }

                    function I(t) {
                        if (Dt = t, pt = mt, ct.locations)
                            for (; Mt > pt;) Mt = dt.lastIndexOf("\n", Mt - 2) + 1, --kt;
                        u(), y()
                    }

                    function A() {
                        this.type = null, this.start = mt, this.end = null
                    }

                    function D() {
                        this.start = wt, this.end = null, null !== _t && (this.source = _t)
                    }

                    function z() {
                        var t = new A;
                        return ct.locations && (t.loc = new D), ct.directSourceFile && (t.sourceFile = ct.directSourceFile), ct.ranges && (t.range = [mt, 0]), t
                    }

                    function L(t) {
                        var e = new A;
                        return e.start = t.start, ct.locations && (e.loc = new D, e.loc.start = t.loc.start), ct.ranges && (e.range = [t.range[0], 0]), e
                    }

                    function E(t, e) {
                        return t.type = e, t.end = Ot, ct.locations && (t.loc.end = Tt), ct.ranges && (t.range[1] = Ot), t
                    }

                    function N(t) {
                        return ct.ecmaVersion >= 5 && "ExpressionStatement" === t.type && "Literal" === t.expression.type && "use strict" === t.expression.value
                    }

                    function R(t) {
                        return bt === t ? (T(), !0) : void 0
                    }

                    function j() {
                        return !ct.strictSemicolons && (bt === jt || bt === _e || $e.test(dt.slice(Ot, mt)))
                    }

                    function F() {
                        R(me) || j() || B()
                    }

                    function Y(t) {
                        bt === t ? T() : B()
                    }

                    function B() {
                        n(mt, "Unexpected token")
                    }

                    function V(t) {
                        "Identifier" !== t.type && "MemberExpression" !== t.type && n(t.start, "Assigning to rvalue"), Dt && "Identifier" === t.type && Ve(t.name) && n(t.start, "Assigning to " + t.name + " in strict mode")
                    }

                    function W(t) {
                        Pt = Ot = pt, ct.locations && (Tt = new r), It = Dt = null, At = [], y();
                        var e = t || z(),
                            n = !0;
                        for (t || (e.body = []); bt !== jt;) {
                            var i = U();
                            e.body.push(i), n && N(i) && I(!0), n = !1
                        }
                        return E(e, "Program")
                    }

                    function U() {
                        (bt === be || bt === Ce && "/=" == St) && y(!0);
                        var t = bt,
                            e = z();
                        switch (t) {
                            case Ft:
                            case Vt:
                                T();
                                var i = t === Ft;
                                R(me) || j() ? e.label = null : bt !== Rt ? B() : (e.label = lt(), F());
                                for (var r = 0; r < At.length; ++r) {
                                    var s = At[r];
                                    if (null == e.label || s.name === e.label.name) {
                                        if (null != s.kind && (i || "loop" === s.kind)) break;
                                        if (e.label && i) break
                                    }
                                }
                                return r === At.length && n(e.start, "Unsyntactic " + t.keyword), E(e, i ? "BreakStatement" : "ContinueStatement");
                            case Wt:
                                return T(), F(), E(e, "DebuggerStatement");
                            case qt:
                                return T(), At.push(Qe), e.body = U(), At.pop(), Y(ne), e.test = q(), F(), E(e, "DoWhileStatement");
                            case Zt:
                                if (T(), At.push(Qe), Y(ge), bt === me) return G(e, null);
                                if (bt === ee) {
                                    var a = z();
                                    return T(), $(a, !0), E(a, "VariableDeclaration"), 1 === a.declarations.length && R(ue) ? Z(e, a) : G(e, a)
                                }
                                var a = J(!1, !0);
                                return R(ue) ? (V(a), Z(e, a)) : G(e, a);
                            case $t:
                                return T(), ht(e, !0);
                            case Jt:
                                return T(), e.test = q(), e.consequent = U(), e.alternate = R(Ht) ? U() : null, E(e, "IfStatement");
                            case Xt:
                                return It || ct.allowReturnOutsideFunction || n(mt, "'return' outside of function"), T(), R(me) || j() ? e.argument = null : (e.argument = J(), F()), E(e, "ReturnStatement");
                            case Kt:
                                T(), e.discriminant = q(), e.cases = [], Y(fe), At.push(tn);
                                for (var o, h; bt != _e;)
                                    if (bt === Yt || bt === Ut) {
                                        var u = bt === Yt;
                                        o && E(o, "SwitchCase"), e.cases.push(o = z()), o.consequent = [], T(), u ? o.test = J() : (h && n(Pt, "Multiple default clauses"), h = !0, o.test = null), Y(ye)
                                    } else o || B(), o.consequent.push(U());
                                return o && E(o, "SwitchCase"), T(), At.pop(), E(e, "SwitchStatement");
                            case Qt:
                                return T(), $e.test(dt.slice(Ot, mt)) && n(Ot, "Illegal newline after throw"), e.argument = J(), F(), E(e, "ThrowStatement");
                            case te:
                                if (T(), e.block = H(), e.handler = null, bt === Bt) {
                                    var l = z();
                                    T(), Y(ge), l.param = lt(), Dt && Ve(l.param.name) && n(l.param.start, "Binding " + l.param.name + " in strict mode"), Y(ve), l.guard = null, l.body = H(), e.handler = E(l, "CatchClause")
                                }
                                return e.guardedHandlers = zt, e.finalizer = R(Gt) ? H() : null, e.handler || e.finalizer || n(e.start, "Missing catch or finally clause"), E(e, "TryStatement");
                            case ee:
                                return T(), $(e), F(), E(e, "VariableDeclaration");
                            case ne:
                                return T(), e.test = q(), At.push(Qe), e.body = U(), At.pop(), E(e, "WhileStatement");
                            case ie:
                                return Dt && n(mt, "'with' in strict mode"), T(), e.object = q(), e.body = U(), E(e, "WithStatement");
                            case fe:
                                return H();
                            case me:
                                return T(), E(e, "EmptyStatement");
                            default:
                                var c = St,
                                    d = J();
                                if (t === Rt && "Identifier" === d.type && R(ye)) {
                                    for (var r = 0; r < At.length; ++r) At[r].name === c && n(d.start, "Label '" + c + "' is already declared");
                                    var f = bt.isLoop ? "loop" : bt === Kt ? "switch" : null;
                                    return At.push({
                                        name: c,
                                        kind: f
                                    }), e.body = U(), At.pop(), e.label = d, E(e, "LabeledStatement")
                                }
                                return e.expression = d, F(), E(e, "ExpressionStatement")
                        }
                    }

                    function q() {
                        Y(ge);
                        var t = J();
                        return Y(ve), t
                    }

                    function H(t) {
                        var e, n = z(),
                            i = !0,
                            r = !1;
                        for (n.body = [], Y(fe); !R(_e);) {
                            var s = U();
                            n.body.push(s), i && t && N(s) && (e = r, I(r = !0)), i = !1
                        }
                        return r && !e && I(!1), E(n, "BlockStatement")
                    }

                    function G(t, e) {
                        return t.init = e, Y(me), t.test = bt === me ? null : J(), Y(me), t.update = bt === ve ? null : J(), Y(ve), t.body = U(), At.pop(), E(t, "ForStatement")
                    }

                    function Z(t, e) {
                        return t.left = e, t.right = J(), Y(ve), t.body = U(), At.pop(), E(t, "ForInStatement")
                    }

                    function $(t, e) {
                        for (t.declarations = [], t.kind = "var";;) {
                            var i = z();
                            if (i.id = lt(), Dt && Ve(i.id.name) && n(i.id.start, "Binding " + i.id.name + " in strict mode"), i.init = R(Se) ? J(!0, e) : null, t.declarations.push(E(i, "VariableDeclarator")), !R(pe)) break
                        }
                        return t
                    }

                    function J(t, e) {
                        var n = X(e);
                        if (!t && bt === pe) {
                            var i = L(n);
                            for (i.expressions = [n]; R(pe);) i.expressions.push(X(e));
                            return E(i, "SequenceExpression")
                        }
                        return n
                    }

                    function X(t) {
                        var e = K(t);
                        if (bt.isAssign) {
                            var n = L(e);
                            return n.operator = St, n.left = e, T(), n.right = X(t), V(e), E(n, "AssignmentExpression")
                        }
                        return e
                    }

                    function K(t) {
                        var e = Q(t);
                        if (R(xe)) {
                            var n = L(e);
                            return n.test = e, n.consequent = J(!0), Y(ye), n.alternate = J(!0, t), E(n, "ConditionalExpression")
                        }
                        return e
                    }

                    function Q(t) {
                        return tt(et(), -1, t)
                    }

                    function tt(t, e, n) {
                        var i = bt.binop;
                        if (null != i && (!n || bt !== ue) && i > e) {
                            var r = L(t);
                            r.left = t, r.operator = St;
                            var s = bt;
                            T(), r.right = tt(et(), i, n);
                            var a = E(r, s === Pe || s === Oe ? "LogicalExpression" : "BinaryExpression");
                            return tt(a, e, n)
                        }
                        return t
                    }

                    function et() {
                        if (bt.prefix) {
                            var t = z(),
                                e = bt.isUpdate;
                            return t.operator = St, t.prefix = !0, Ct = !0, T(), t.argument = et(), e ? V(t.argument) : Dt && "delete" === t.operator && "Identifier" === t.argument.type && n(t.start, "Deleting local variable in strict mode"), E(t, e ? "UpdateExpression" : "UnaryExpression")
                        }
                        for (var i = nt(); bt.postfix && !j();) {
                            var t = L(i);
                            t.operator = St, t.prefix = !1, t.argument = i, V(i), T(), i = E(t, "UpdateExpression")
                        }
                        return i
                    }

                    function nt() {
                        return it(rt())
                    }

                    function it(t, e) {
                        if (R(we)) {
                            var n = L(t);
                            return n.object = t, n.property = lt(!0), n.computed = !1, it(E(n, "MemberExpression"), e)
                        }
                        if (R(ce)) {
                            var n = L(t);
                            return n.object = t, n.property = J(), n.computed = !0, Y(de), it(E(n, "MemberExpression"), e)
                        }
                        if (!e && R(ge)) {
                            var n = L(t);
                            return n.callee = t, n.arguments = ut(ve, !1), it(E(n, "CallExpression"), e)
                        }
                        return t
                    }

                    function rt() {
                        switch (bt) {
                            case se:
                                var t = z();
                                return T(), E(t, "ThisExpression");
                            case Rt:
                                return lt();
                            case Lt:
                            case Nt:
                            case Et:
                                var t = z();
                                return t.value = St, t.raw = dt.slice(mt, yt), T(), E(t, "Literal");
                            case ae:
                            case oe:
                            case he:
                                var t = z();
                                return t.value = bt.atomValue, t.raw = bt.keyword, T(), E(t, "Literal");
                            case ge:
                                var e = wt,
                                    n = mt;
                                T();
                                var i = J();
                                return i.start = n, i.end = yt, ct.locations && (i.loc.start = e, i.loc.end = xt), ct.ranges && (i.range = [n, yt]), Y(ve), i;
                            case ce:
                                var t = z();
                                return T(), t.elements = ut(de, !0, !0), E(t, "ArrayExpression");
                            case fe:
                                return at();
                            case $t:
                                var t = z();
                                return T(), ht(t, !1);
                            case re:
                                return st();
                            default:
                                B()
                        }
                    }

                    function st() {
                        var t = z();
                        return T(), t.callee = it(rt(), !0), R(ge) ? t.arguments = ut(ve, !1) : t.arguments = zt, E(t, "NewExpression")
                    }

                    function at() {
                        var t = z(),
                            e = !0,
                            i = !1;
                        for (t.properties = [], T(); !R(_e);) {
                            if (e) e = !1;
                            else if (Y(pe), ct.allowTrailingCommas && R(_e)) break;
                            var r, s = {
                                    key: ot()
                                },
                                a = !1;
                            if (R(ye) ? (s.value = J(!0), r = s.kind = "init") : ct.ecmaVersion >= 5 && "Identifier" === s.key.type && ("get" === s.key.name || "set" === s.key.name) ? (a = i = !0, r = s.kind = s.key.name, s.key = ot(), bt !== ge && B(), s.value = ht(z(), !1)) : B(), "Identifier" === s.key.type && (Dt || i))
                                for (var o = 0; o < t.properties.length; ++o) {
                                    var h = t.properties[o];
                                    if (h.key.name === s.key.name) {
                                        var u = r == h.kind || a && "init" === h.kind || "init" === r && ("get" === h.kind || "set" === h.kind);
                                        u && !Dt && "init" === r && "init" === h.kind && (u = !1), u && n(s.key.start, "Redefinition of property")
                                    }
                                }
                            t.properties.push(s)
                        }
                        return E(t, "ObjectExpression")
                    }

                    function ot() {
                        return bt === Lt || bt === Nt ? rt() : lt(!0)
                    }

                    function ht(t, e) {
                        bt === Rt ? t.id = lt() : e ? B() : t.id = null, t.params = [];
                        var i = !0;
                        for (Y(ge); !R(ve);) i ? i = !1 : Y(pe), t.params.push(lt());
                        var r = It,
                            s = At;
                        if (It = !0, At = [], t.body = H(!0), It = r, At = s, Dt || t.body.body.length && N(t.body.body[0]))
                            for (var a = t.id ? -1 : 0; a < t.params.length; ++a) {
                                var o = 0 > a ? t.id : t.params[a];
                                if ((Be(o.name) || Ve(o.name)) && n(o.start, "Defining '" + o.name + "' in strict mode"), a >= 0)
                                    for (var h = 0; a > h; ++h) o.name === t.params[h].name && n(o.start, "Argument name clash in strict mode")
                            }
                        return E(t, e ? "FunctionDeclaration" : "FunctionExpression")
                    }

                    function ut(t, e, n) {
                        for (var i = [], r = !0; !R(t);) {
                            if (r) r = !1;
                            else if (Y(pe), e && ct.allowTrailingCommas && R(t)) break;
                            n && bt === pe ? i.push(null) : i.push(J(!0))
                        }
                        return i
                    }

                    function lt(t) {
                        var e = z();
                        return t && "everywhere" == ct.forbidReserved && (t = !1), bt === Rt ? (!t && (ct.forbidReserved && (3 === ct.ecmaVersion ? Fe : Ye)(St) || Dt && Be(St)) && -1 == dt.slice(mt, yt).indexOf("\\") && n(mt, "The keyword '" + St + "' is reserved"), e.name = St) : t && bt.keyword ? e.name = bt.keyword : B(), Ct = !1, T(), E(e, "Identifier")
                    }
                    t.version = "0.5.0";
                    var ct, dt, ft, _t;
                    t.parse = function(t, n) {
                        return dt = String(t), ft = dt.length, e(n), s(), W(ct.program)
                    };
                    var gt = t.defaultOptions = {
                            ecmaVersion: 5,
                            strictSemicolons: !1,
                            allowTrailingCommas: !0,
                            forbidReserved: !1,
                            allowReturnOutsideFunction: !1,
                            locations: !1,
                            onComment: null,
                            ranges: !1,
                            program: null,
                            sourceFile: null,
                            directSourceFile: null
                        },
                        vt = t.getLineInfo = function(t, e) {
                            for (var n = 1, i = 0;;) {
                                Je.lastIndex = i;
                                var r = Je.exec(t);
                                if (!(r && r.index < e)) break;
                                ++n, i = r.index + r[0].length
                            }
                            return {
                                line: n,
                                column: e - i
                            }
                        };
                    t.tokenize = function(t, n) {
                        function i(t) {
                            return Ot = yt, y(t), r.start = mt, r.end = yt, r.startLoc = wt, r.endLoc = xt, r.type = bt, r.value = St, r
                        }
                        dt = String(t), ft = dt.length, e(n), s();
                        var r = {};
                        return i.jumpTo = function(t, e) {
                            if (pt = t, ct.locations) {
                                kt = 1, Mt = Je.lastIndex = 0;
                                for (var n;
                                    (n = Je.exec(dt)) && n.index < t;) ++kt, Mt = n.index + n[0].length
                            }
                            Ct = e, u()
                        }, i
                    };
                    var pt, mt, yt, wt, xt, bt, St, Ct, kt, Mt, Pt, Ot, Tt, It, At, Dt, zt = [],
                        Lt = {
                            type: "num"
                        },
                        Et = {
                            type: "regexp"
                        },
                        Nt = {
                            type: "string"
                        },
                        Rt = {
                            type: "name"
                        },
                        jt = {
                            type: "eof"
                        },
                        Ft = {
                            keyword: "break"
                        },
                        Yt = {
                            keyword: "case",
                            beforeExpr: !0
                        },
                        Bt = {
                            keyword: "catch"
                        },
                        Vt = {
                            keyword: "continue"
                        },
                        Wt = {
                            keyword: "debugger"
                        },
                        Ut = {
                            keyword: "default"
                        },
                        qt = {
                            keyword: "do",
                            isLoop: !0
                        },
                        Ht = {
                            keyword: "else",
                            beforeExpr: !0
                        },
                        Gt = {
                            keyword: "finally"
                        },
                        Zt = {
                            keyword: "for",
                            isLoop: !0
                        },
                        $t = {
                            keyword: "function"
                        },
                        Jt = {
                            keyword: "if"
                        },
                        Xt = {
                            keyword: "return",
                            beforeExpr: !0
                        },
                        Kt = {
                            keyword: "switch"
                        },
                        Qt = {
                            keyword: "throw",
                            beforeExpr: !0
                        },
                        te = {
                            keyword: "try"
                        },
                        ee = {
                            keyword: "var"
                        },
                        ne = {
                            keyword: "while",
                            isLoop: !0
                        },
                        ie = {
                            keyword: "with"
                        },
                        re = {
                            keyword: "new",
                            beforeExpr: !0
                        },
                        se = {
                            keyword: "this"
                        },
                        ae = {
                            keyword: "null",
                            atomValue: null
                        },
                        oe = {
                            keyword: "true",
                            atomValue: !0
                        },
                        he = {
                            keyword: "false",
                            atomValue: !1
                        },
                        ue = {
                            keyword: "in",
                            binop: 7,
                            beforeExpr: !0
                        },
                        le = {
                            break: Ft,
                            case: Yt,
                            catch: Bt,
                            continue: Vt,
                            debugger: Wt,
                            default: Ut,
                            do: qt,
                            else: Ht,
                            finally: Gt,
                            for: Zt,
                            function: $t,
                            if: Jt,
                            return: Xt,
                            switch: Kt,
                            throw: Qt,
                            try: te,
                            var: ee,
                            while: ne,
                            with: ie,
                            null: ae,
                            true: oe,
                            false: he,
                            new: re,
                            in: ue,
                            instanceof: {
                                keyword: "instanceof",
                                binop: 7,
                                beforeExpr: !0
                            },
                            this: se,
                            typeof: {
                                keyword: "typeof",
                                prefix: !0,
                                beforeExpr: !0
                            },
                            void: {
                                keyword: "void",
                                prefix: !0,
                                beforeExpr: !0
                            },
                            delete: {
                                keyword: "delete",
                                prefix: !0,
                                beforeExpr: !0
                            }
                        },
                        ce = {
                            type: "[",
                            beforeExpr: !0
                        },
                        de = {
                            type: "]"
                        },
                        fe = {
                            type: "{",
                            beforeExpr: !0
                        },
                        _e = {
                            type: "}"
                        },
                        ge = {
                            type: "(",
                            beforeExpr: !0
                        },
                        ve = {
                            type: ")"
                        },
                        pe = {
                            type: ",",
                            beforeExpr: !0
                        },
                        me = {
                            type: ";",
                            beforeExpr: !0
                        },
                        ye = {
                            type: ":",
                            beforeExpr: !0
                        },
                        we = {
                            type: "."
                        },
                        xe = {
                            type: "?",
                            beforeExpr: !0
                        },
                        be = {
                            binop: 10,
                            beforeExpr: !0
                        },
                        Se = {
                            isAssign: !0,
                            beforeExpr: !0
                        },
                        Ce = {
                            isAssign: !0,
                            beforeExpr: !0
                        },
                        ke = {
                            postfix: !0,
                            prefix: !0,
                            isUpdate: !0
                        },
                        Me = {
                            prefix: !0,
                            beforeExpr: !0
                        },
                        Pe = {
                            binop: 1,
                            beforeExpr: !0
                        },
                        Oe = {
                            binop: 2,
                            beforeExpr: !0
                        },
                        Te = {
                            binop: 3,
                            beforeExpr: !0
                        },
                        Ie = {
                            binop: 4,
                            beforeExpr: !0
                        },
                        Ae = {
                            binop: 5,
                            beforeExpr: !0
                        },
                        De = {
                            binop: 6,
                            beforeExpr: !0
                        },
                        ze = {
                            binop: 7,
                            beforeExpr: !0
                        },
                        Le = {
                            binop: 8,
                            beforeExpr: !0
                        },
                        Ee = {
                            binop: 9,
                            prefix: !0,
                            beforeExpr: !0
                        },
                        Ne = {
                            binop: 10,
                            beforeExpr: !0
                        };
                    t.tokTypes = {
                        bracketL: ce,
                        bracketR: de,
                        braceL: fe,
                        braceR: _e,
                        parenL: ge,
                        parenR: ve,
                        comma: pe,
                        semi: me,
                        colon: ye,
                        dot: we,
                        question: xe,
                        slash: be,
                        eq: Se,
                        name: Rt,
                        eof: jt,
                        num: Lt,
                        regexp: Et,
                        string: Nt
                    };
                    for (var Re in le) t.tokTypes["_" + Re] = le[Re];
                    var je, Fe = i("abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile"),
                        Ye = i("class enum extends super const export import"),
                        Be = i("implements interface let package private protected public static yield"),
                        Ve = i("eval arguments"),
                        We = i("break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this"),
                        Ue = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
                        qe = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
                        He = "̀-ͯ҃-֑҇-ׇֽֿׁׂׅׄؐ-ؚؠ-ىٲ-ۓۧ-ۨۻ-ۼܰ-݊ࠀ-ࠔࠛ-ࠣࠥ-ࠧࠩ-࠭ࡀ-ࡗࣤ-ࣾऀ-ःऺ-़ा-ॏ॑-ॗॢ-ॣ०-९ঁ-ঃ়া-ৄেৈৗয়-ৠਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢ-ૣ૦-૯ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୟ-ୠ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఁ-ఃె-ైొ-్ౕౖౢ-ౣ౦-౯ಂಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢ-ೣ೦-೯ംഃെ-ൈൗൢ-ൣ൦-൯ංඃ්ා-ුූෘ-ෟෲෳิ-ฺเ-ๅ๐-๙ິ-ູ່-ໍ໐-໙༘༙༠-༩༹༵༷ཁ-ཇཱ-྄྆-྇ྍ-ྗྙ-ྼ࿆က-ဩ၀-၉ၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟ᜎ-ᜐᜠ-ᜰᝀ-ᝐᝲᝳក-ឲ៝០-៩᠋-᠍᠐-᠙ᤠ-ᤫᤰ-᤻ᥑ-ᥭᦰ-ᧀᧈ-ᧉ᧐-᧙ᨀ-ᨕᨠ-ᩓ᩠-᩿᩼-᪉᪐-᪙ᭆ-ᭋ᭐-᭙᭫-᭳᮰-᮹᯦-᯳ᰀ-ᰢ᱀-᱉ᱛ-ᱽ᳐-᳒ᴀ-ᶾḁ-ἕ‌‍‿⁀⁔⃐-⃥⃜⃡-⃰ⶁ-ⶖⷠ-ⷿ〡-〨゙゚Ꙁ-ꙭꙴ-꙽ꚟ꛰-꛱ꟸ-ꠀ꠆ꠋꠣ-ꠧꢀ-ꢁꢴ-꣄꣐-꣙ꣳ-ꣷ꤀-꤉ꤦ-꤭ꤰ-ꥅꦀ-ꦃ꦳-꧀ꨀ-ꨧꩀ-ꩁꩌ-ꩍ꩐-꩙ꩻꫠ-ꫩꫲ-ꫳꯀ-ꯡ꯬꯭꯰-꯹ﬠ-ﬨ︀-️︠-︦︳︴﹍-﹏０-９＿",
                        Ge = new RegExp("[" + qe + "]"),
                        Ze = new RegExp("[" + qe + He + "]"),
                        $e = /[\n\r\u2028\u2029]/,
                        Je = /\r\n|[\n\r\u2028\u2029]/g,
                        Xe = t.isIdentifierStart = function(t) {
                            return 65 > t ? 36 === t : 91 > t || (97 > t ? 95 === t : 123 > t || t >= 170 && Ge.test(String.fromCharCode(t)))
                        },
                        Ke = t.isIdentifierChar = function(t) {
                            return 48 > t ? 36 === t : 58 > t || !(65 > t) && (91 > t || (97 > t ? 95 === t : 123 > t || t >= 170 && Ze.test(String.fromCharCode(t))))
                        },
                        Qe = {
                            kind: "loop"
                        },
                        tn = {
                            kind: "switch"
                        }
                });
                var y = {
                        "+": "__add",
                        "-": "__subtract",
                        "*": "__multiply",
                        "/": "__divide",
                        "%": "__modulo",
                        "==": "__equals",
                        "!=": "__equals"
                    },
                    w = {
                        "-": "__negate",
                        "+": null
                    },
                    x = o.each(["add", "subtract", "multiply", "divide", "modulo", "equals", "negate"], function(t) {
                        this["__" + t] = "#" + t
                    }, {});
                return _.inject(x), v.inject(x), V.inject(x), s && ("complete" === a.readyState ? setTimeout(d) : G.add(s, {
                    load: d
                })), {
                    compile: h,
                    execute: l,
                    load: f,
                    parse: r
                }
            }.call(this), i = new(u.inject(o.exports, {
                enumerable: !0,
                Base: o,
                Numerical: d,
                Key: K,
                DomEvent: G,
                DomElement: H,
                document: a,
                window: s,
                Symbol: T,
                PlacedSymbol: O
            })), i.agent.node && t("./node/extend")(i), "function" == typeof define && define.amd ? define("paper", i) : "object" == typeof e && e && (e.exports = i), i
        }.call(this, "object" == typeof self ? self : null)
    }, {
        "./node/extend": 9,
        "./node/window": 9
    }],
    9: [function(t, e, n) {}, {}],
    10: [function(t, e, n) {
        var i = i || function(t) {
            "use strict";
            if (!("undefined" == typeof t || "undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
                var e = t.document,
                    n = function() {
                        return t.URL || t.webkitURL || t
                    },
                    i = e.createElementNS("http://www.w3.org/1999/xhtml", "a"),
                    r = "download" in i,
                    s = function(t) {
                        var e = new MouseEvent("click");
                        t.dispatchEvent(e)
                    },
                    a = /constructor/i.test(t.HTMLElement) || t.safari,
                    o = /CriOS\/[\d]+/.test(navigator.userAgent),
                    h = function(e) {
                        (t.setImmediate || t.setTimeout)(function() {
                            throw e
                        }, 0)
                    },
                    u = "application/octet-stream",
                    l = 4e4,
                    c = function(t) {
                        var e = function() {
                            "string" == typeof t ? n().revokeObjectURL(t) : t.remove()
                        };
                        setTimeout(e, l)
                    },
                    d = function(t, e, n) {
                        e = [].concat(e);
                        for (var i = e.length; i--;) {
                            var r = t["on" + e[i]];
                            if ("function" == typeof r) try {
                                r.call(t, n || t)
                            } catch (t) {
                                h(t)
                            }
                        }
                    },
                    f = function(t) {
                        return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob([String.fromCharCode(65279), t], {
                            type: t.type
                        }) : t
                    },
                    _ = function(e, h, l) {
                        l || (e = f(e));
                        var _, g = this,
                            v = e.type,
                            p = v === u,
                            m = function() {
                                d(g, "writestart progress write writeend".split(" "))
                            },
                            y = function() {
                                if ((o || p && a) && t.FileReader) {
                                    var i = new FileReader;
                                    return i.onloadend = function() {
                                        var e = o ? i.result : i.result.replace(/^data:[^;]*;/, "data:attachment/file;"),
                                            n = t.open(e, "_blank");
                                        n || (t.location.href = e), e = void 0, g.readyState = g.DONE, m()
                                    }, i.readAsDataURL(e), void(g.readyState = g.INIT)
                                }
                                if (_ || (_ = n().createObjectURL(e)), p) t.location.href = _;
                                else {
                                    var r = t.open(_, "_blank");
                                    r || (t.location.href = _)
                                }
                                g.readyState = g.DONE, m(), c(_)
                            };
                        return g.readyState = g.INIT, r ? (_ = n().createObjectURL(e), void setTimeout(function() {
                            i.href = _, i.download = h, s(i), m(), c(_), g.readyState = g.DONE
                        })) : void y()
                    },
                    g = _.prototype,
                    v = function(t, e, n) {
                        return new _(t, e || t.name || "download", n)
                    };
                return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function(t, e, n) {
                    return e = e || t.name || "download", n || (t = f(t)), navigator.msSaveOrOpenBlob(t, e)
                } : (g.abort = function() {}, g.readyState = g.INIT = 0, g.WRITING = 1, g.DONE = 2, g.error = g.onwritestart = g.onprogress = g.onwrite = g.onabort = g.onerror = g.onwriteend = null, v)
            }
        }("undefined" != typeof self && self || "undefined" != typeof window && window || this.content);
        "undefined" != typeof e && e.exports ? e.exports.saveAs = i : "undefined" != typeof define && null !== define && null !== define.amd && define("FileSaver.js", function() {
            return i
        })
    }, {}]
}, {}, [6]);
//# sourceMappingURL=main.js.map