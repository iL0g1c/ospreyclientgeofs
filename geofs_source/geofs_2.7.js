/* @preserve
 * Leaflet 1.5.1, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2018 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
! function (t, i) {
    "object" == typeof exports && "undefined" != typeof module ? i(exports) : "function" == typeof define && define.amd ? define(["exports"], i) : i(t.L = {})
}(this, function (t) {
    "use strict";
    var i = Object.freeze;

    function h(t) {
        var i, e, n, o;
        for (e = 1, n = arguments.length; e < n; e++)
            for (i in o = arguments[e]) t[i] = o[i];
        return t
    }
    Object.freeze = function (t) {
        return t
    };
    var s = Object.create || function (t) {
        return e.prototype = t, new e
    };

    function e() { }

    function a(t, i) {
        var e = Array.prototype.slice;
        if (t.bind) return t.bind.apply(t, e.call(arguments, 1));
        var n = e.call(arguments, 2);
        return function () {
            return t.apply(i, n.length ? n.concat(e.call(arguments)) : arguments)
        }
    }
    var n = 0;

    function u(t) {
        return t._leaflet_id = t._leaflet_id || ++n, t._leaflet_id
    }

    function o(t, i, e) {
        var n, o, s, r;
        return r = function () {
            n = !1, o && (s.apply(e, o), o = !1)
        }, s = function () {
            n ? o = arguments : (t.apply(e, arguments), setTimeout(r, i), n = !0)
        }
    }

    function r(t, i, e) {
        var n = i[1],
            o = i[0],
            s = n - o;
        return t === n && e ? t : ((t - o) % s + s) % s + o
    }

    function l() {
        return !1
    }

    function c(t, i) {
        return i = void 0 === i ? 6 : i, +(Math.round(t + "e+" + i) + "e-" + i)
    }

    function _(t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
    }

    function d(t) {
        return _(t).split(/\s+/)
    }

    function p(t, i) {
        for (var e in t.hasOwnProperty("options") || (t.options = t.options ? s(t.options) : {}), i) t.options[e] = i[e];
        return t.options
    }

    function m(t, i, e) {
        var n = [];
        for (var o in t) n.push(encodeURIComponent(e ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
        return (i && -1 !== i.indexOf("?") ? "&" : "?") + n.join("&")
    }
    var f = /\{ *([\w_-]+) *\}/g;

    function g(t, n) {
        return t.replace(f, function (t, i) {
            var e = n[i];
            if (void 0 === e) throw new Error("No value provided for variable " + t);
            return "function" == typeof e && (e = e(n)), e
        })
    }
    var v = Array.isArray || function (t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    };

    function y(t, i) {
        for (var e = 0; e < t.length; e++)
            if (t[e] === i) return e;
        return -1
    }
    var x = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";

    function w(t) {
        return window["webkit" + t] || window["moz" + t] || window["ms" + t]
    }
    var P = 0;

    function b(t) {
        var i = +new Date,
            e = Math.max(0, 16 - (i - P));
        return P = i + e, window.setTimeout(t, e)
    }
    var T = window.requestAnimationFrame || w("RequestAnimationFrame") || b,
        z = window.cancelAnimationFrame || w("CancelAnimationFrame") || w("CancelRequestAnimationFrame") || function (t) {
            window.clearTimeout(t)
        };

    function M(t, i, e) {
        if (!e || T !== b) return T.call(window, a(t, i));
        t.call(i)
    }

    function C(t) {
        t && z.call(window, t)
    }
    var S = (Object.freeze || Object)({
        freeze: i,
        extend: h,
        create: s,
        bind: a,
        lastId: n,
        stamp: u,
        throttle: o,
        wrapNum: r,
        falseFn: l,
        formatNum: c,
        trim: _,
        splitWords: d,
        setOptions: p,
        getParamString: m,
        template: g,
        isArray: v,
        indexOf: y,
        emptyImageUrl: x,
        requestFn: T,
        cancelFn: z,
        requestAnimFrame: M,
        cancelAnimFrame: C
    });

    function Z() { }
    Z.extend = function (t) {
        function i() {
            this.initialize && this.initialize.apply(this, arguments), this.callInitHooks()
        }
        var e = i.__super__ = this.prototype,
            n = s(e);
        for (var o in (n.constructor = i).prototype = n, this) this.hasOwnProperty(o) && "prototype" !== o && "__super__" !== o && (i[o] = this[o]);
        return t.statics && (h(i, t.statics), delete t.statics), t.includes && (function (t) {
            if ("undefined" == typeof L || !L || !L.Mixin) return;
            t = v(t) ? t : [t];
            for (var i = 0; i < t.length; i++) t[i] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", (new Error).stack)
        }(t.includes), h.apply(null, [n].concat(t.includes)), delete t.includes), n.options && (t.options = h(s(n.options), t.options)), h(n, t), n._initHooks = [], n.callInitHooks = function () {
            if (!this._initHooksCalled) {
                e.callInitHooks && e.callInitHooks.call(this), this._initHooksCalled = !0;
                for (var t = 0, i = n._initHooks.length; t < i; t++) n._initHooks[t].call(this)
            }
        }, i
    }, Z.include = function (t) {
        return h(this.prototype, t), this
    }, Z.mergeOptions = function (t) {
        return h(this.prototype.options, t), this
    }, Z.addInitHook = function (t) {
        var i = Array.prototype.slice.call(arguments, 1),
            e = "function" == typeof t ? t : function () {
                this[t].apply(this, i)
            };
        return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(e), this
    };
    var E = {
        on: function (t, i, e) {
            if ("object" == typeof t)
                for (var n in t) this._on(n, t[n], i);
            else
                for (var o = 0, s = (t = d(t)).length; o < s; o++) this._on(t[o], i, e);
            return this
        },
        off: function (t, i, e) {
            if (t)
                if ("object" == typeof t)
                    for (var n in t) this._off(n, t[n], i);
                else
                    for (var o = 0, s = (t = d(t)).length; o < s; o++) this._off(t[o], i, e);
            else delete this._events;
            return this
        },
        _on: function (t, i, e) {
            this._events = this._events || {};
            var n = this._events[t];
            n || (n = [], this._events[t] = n), e === this && (e = void 0);
            for (var o = {
                fn: i,
                ctx: e
            }, s = n, r = 0, a = s.length; r < a; r++)
                if (s[r].fn === i && s[r].ctx === e) return;
            s.push(o)
        },
        _off: function (t, i, e) {
            var n, o, s;
            if (this._events && (n = this._events[t]))
                if (i) {
                    if (e === this && (e = void 0), n)
                        for (o = 0, s = n.length; o < s; o++) {
                            var r = n[o];
                            if (r.ctx === e && r.fn === i) return r.fn = l, this._firingCount && (this._events[t] = n = n.slice()), void n.splice(o, 1)
                        }
                } else {
                    for (o = 0, s = n.length; o < s; o++) n[o].fn = l;
                    delete this._events[t]
                }
        },
        fire: function (t, i, e) {
            if (!this.listens(t, e)) return this;
            var n = h({}, i, {
                type: t,
                target: this,
                sourceTarget: i && i.sourceTarget || this
            });
            if (this._events) {
                var o = this._events[t];
                if (o) {
                    this._firingCount = this._firingCount + 1 || 1;
                    for (var s = 0, r = o.length; s < r; s++) {
                        var a = o[s];
                        a.fn.call(a.ctx || this, n)
                    }
                    this._firingCount--
                }
            }
            return e && this._propagateEvent(n), this
        },
        listens: function (t, i) {
            var e = this._events && this._events[t];
            if (e && e.length) return !0;
            if (i)
                for (var n in this._eventParents)
                    if (this._eventParents[n].listens(t, i)) return !0;
            return !1
        },
        once: function (t, i, e) {
            if ("object" == typeof t) {
                for (var n in t) this.once(n, t[n], i);
                return this
            }
            var o = a(function () {
                this.off(t, i, e).off(t, o, e)
            }, this);
            return this.on(t, i, e).on(t, o, e)
        },
        addEventParent: function (t) {
            return this._eventParents = this._eventParents || {}, this._eventParents[u(t)] = t, this
        },
        removeEventParent: function (t) {
            return this._eventParents && delete this._eventParents[u(t)], this
        },
        _propagateEvent: function (t) {
            for (var i in this._eventParents) this._eventParents[i].fire(t.type, h({
                layer: t.target,
                propagatedFrom: t.target
            }, t), !0)
        }
    };
    E.addEventListener = E.on, E.removeEventListener = E.clearAllEventListeners = E.off, E.addOneTimeEventListener = E.once, E.fireEvent = E.fire, E.hasEventListeners = E.listens;
    var k = Z.extend(E);

    function B(t, i, e) {
        this.x = e ? Math.round(t) : t, this.y = e ? Math.round(i) : i
    }
    var A = Math.trunc || function (t) {
        return 0 < t ? Math.floor(t) : Math.ceil(t)
    };

    function I(t, i, e) {
        return t instanceof B ? t : v(t) ? new B(t[0], t[1]) : null == t ? t : "object" == typeof t && "x" in t && "y" in t ? new B(t.x, t.y) : new B(t, i, e)
    }

    function O(t, i) {
        if (t)
            for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++) this.extend(e[n])
    }

    function R(t, i) {
        return !t || t instanceof O ? t : new O(t, i)
    }

    function N(t, i) {
        if (t)
            for (var e = i ? [t, i] : t, n = 0, o = e.length; n < o; n++) this.extend(e[n])
    }

    function D(t, i) {
        return t instanceof N ? t : new N(t, i)
    }

    function j(t, i, e) {
        if (isNaN(t) || isNaN(i)) throw new Error("Invalid LatLng object: (" + t + ", " + i + ")");
        this.lat = +t, this.lng = +i, void 0 !== e && (this.alt = +e)
    }

    function W(t, i, e) {
        return t instanceof j ? t : v(t) && "object" != typeof t[0] ? 3 === t.length ? new j(t[0], t[1], t[2]) : 2 === t.length ? new j(t[0], t[1]) : null : null == t ? t : "object" == typeof t && "lat" in t ? new j(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : void 0 === i ? null : new j(t, i, e)
    }
    B.prototype = {
        clone: function () {
            return new B(this.x, this.y)
        },
        add: function (t) {
            return this.clone()._add(I(t))
        },
        _add: function (t) {
            return this.x += t.x, this.y += t.y, this
        },
        subtract: function (t) {
            return this.clone()._subtract(I(t))
        },
        _subtract: function (t) {
            return this.x -= t.x, this.y -= t.y, this
        },
        divideBy: function (t) {
            return this.clone()._divideBy(t)
        },
        _divideBy: function (t) {
            return this.x /= t, this.y /= t, this
        },
        multiplyBy: function (t) {
            return this.clone()._multiplyBy(t)
        },
        _multiplyBy: function (t) {
            return this.x *= t, this.y *= t, this
        },
        scaleBy: function (t) {
            return new B(this.x * t.x, this.y * t.y)
        },
        unscaleBy: function (t) {
            return new B(this.x / t.x, this.y / t.y)
        },
        round: function () {
            return this.clone()._round()
        },
        _round: function () {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
        },
        floor: function () {
            return this.clone()._floor()
        },
        _floor: function () {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
        },
        ceil: function () {
            return this.clone()._ceil()
        },
        _ceil: function () {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
        },
        trunc: function () {
            return this.clone()._trunc()
        },
        _trunc: function () {
            return this.x = A(this.x), this.y = A(this.y), this
        },
        distanceTo: function (t) {
            var i = (t = I(t)).x - this.x,
                e = t.y - this.y;
            return Math.sqrt(i * i + e * e)
        },
        equals: function (t) {
            return (t = I(t)).x === this.x && t.y === this.y
        },
        contains: function (t) {
            return t = I(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
        },
        toString: function () {
            return "Point(" + c(this.x) + ", " + c(this.y) + ")"
        }
    }, O.prototype = {
        extend: function (t) {
            return t = I(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this
        },
        getCenter: function (t) {
            return new B((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
        },
        getBottomLeft: function () {
            return new B(this.min.x, this.max.y)
        },
        getTopRight: function () {
            return new B(this.max.x, this.min.y)
        },
        getTopLeft: function () {
            return this.min
        },
        getBottomRight: function () {
            return this.max
        },
        getSize: function () {
            return this.max.subtract(this.min)
        },
        contains: function (t) {
            var i, e;
            return (t = "number" == typeof t[0] || t instanceof B ? I(t) : R(t)) instanceof O ? (i = t.min, e = t.max) : i = e = t, i.x >= this.min.x && e.x <= this.max.x && i.y >= this.min.y && e.y <= this.max.y
        },
        intersects: function (t) {
            t = R(t);
            var i = this.min,
                e = this.max,
                n = t.min,
                o = t.max,
                s = o.x >= i.x && n.x <= e.x,
                r = o.y >= i.y && n.y <= e.y;
            return s && r
        },
        overlaps: function (t) {
            t = R(t);
            var i = this.min,
                e = this.max,
                n = t.min,
                o = t.max,
                s = o.x > i.x && n.x < e.x,
                r = o.y > i.y && n.y < e.y;
            return s && r
        },
        isValid: function () {
            return !(!this.min || !this.max)
        }
    }, N.prototype = {
        extend: function (t) {
            var i, e, n = this._southWest,
                o = this._northEast;
            if (t instanceof j) e = i = t;
            else {
                if (!(t instanceof N)) return t ? this.extend(W(t) || D(t)) : this;
                if (i = t._southWest, e = t._northEast, !i || !e) return this
            }
            return n || o ? (n.lat = Math.min(i.lat, n.lat), n.lng = Math.min(i.lng, n.lng), o.lat = Math.max(e.lat, o.lat), o.lng = Math.max(e.lng, o.lng)) : (this._southWest = new j(i.lat, i.lng), this._northEast = new j(e.lat, e.lng)), this
        },
        pad: function (t) {
            var i = this._southWest,
                e = this._northEast,
                n = Math.abs(i.lat - e.lat) * t,
                o = Math.abs(i.lng - e.lng) * t;
            return new N(new j(i.lat - n, i.lng - o), new j(e.lat + n, e.lng + o))
        },
        getCenter: function () {
            return new j((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
        },
        getSouthWest: function () {
            return this._southWest
        },
        getNorthEast: function () {
            return this._northEast
        },
        getNorthWest: function () {
            return new j(this.getNorth(), this.getWest())
        },
        getSouthEast: function () {
            return new j(this.getSouth(), this.getEast())
        },
        getWest: function () {
            return this._southWest.lng
        },
        getSouth: function () {
            return this._southWest.lat
        },
        getEast: function () {
            return this._northEast.lng
        },
        getNorth: function () {
            return this._northEast.lat
        },
        contains: function (t) {
            t = "number" == typeof t[0] || t instanceof j || "lat" in t ? W(t) : D(t);
            var i, e, n = this._southWest,
                o = this._northEast;
            return t instanceof N ? (i = t.getSouthWest(), e = t.getNorthEast()) : i = e = t, i.lat >= n.lat && e.lat <= o.lat && i.lng >= n.lng && e.lng <= o.lng
        },
        intersects: function (t) {
            t = D(t);
            var i = this._southWest,
                e = this._northEast,
                n = t.getSouthWest(),
                o = t.getNorthEast(),
                s = o.lat >= i.lat && n.lat <= e.lat,
                r = o.lng >= i.lng && n.lng <= e.lng;
            return s && r
        },
        overlaps: function (t) {
            t = D(t);
            var i = this._southWest,
                e = this._northEast,
                n = t.getSouthWest(),
                o = t.getNorthEast(),
                s = o.lat > i.lat && n.lat < e.lat,
                r = o.lng > i.lng && n.lng < e.lng;
            return s && r
        },
        toBBoxString: function () {
            return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
        },
        equals: function (t, i) {
            return !!t && (t = D(t), this._southWest.equals(t.getSouthWest(), i) && this._northEast.equals(t.getNorthEast(), i))
        },
        isValid: function () {
            return !(!this._southWest || !this._northEast)
        }
    };
    var H, F = {
        latLngToPoint: function (t, i) {
            var e = this.projection.project(t),
                n = this.scale(i);
            return this.transformation._transform(e, n)
        },
        pointToLatLng: function (t, i) {
            var e = this.scale(i),
                n = this.transformation.untransform(t, e);
            return this.projection.unproject(n)
        },
        project: function (t) {
            return this.projection.project(t)
        },
        unproject: function (t) {
            return this.projection.unproject(t)
        },
        scale: function (t) {
            return 256 * Math.pow(2, t)
        },
        zoom: function (t) {
            return Math.log(t / 256) / Math.LN2
        },
        getProjectedBounds: function (t) {
            if (this.infinite) return null;
            var i = this.projection.bounds,
                e = this.scale(t);
            return new O(this.transformation.transform(i.min, e), this.transformation.transform(i.max, e))
        },
        infinite: !(j.prototype = {
            equals: function (t, i) {
                return !!t && (t = W(t), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === i ? 1e-9 : i))
            },
            toString: function (t) {
                return "LatLng(" + c(this.lat, t) + ", " + c(this.lng, t) + ")"
            },
            distanceTo: function (t) {
                return U.distance(this, W(t))
            },
            wrap: function () {
                return U.wrapLatLng(this)
            },
            toBounds: function (t) {
                var i = 180 * t / 40075017,
                    e = i / Math.cos(Math.PI / 180 * this.lat);
                return D([this.lat - i, this.lng - e], [this.lat + i, this.lng + e])
            },
            clone: function () {
                return new j(this.lat, this.lng, this.alt)
            }
        }),
        wrapLatLng: function (t) {
            var i = this.wrapLng ? r(t.lng, this.wrapLng, !0) : t.lng;
            return new j(this.wrapLat ? r(t.lat, this.wrapLat, !0) : t.lat, i, t.alt)
        },
        wrapLatLngBounds: function (t) {
            var i = t.getCenter(),
                e = this.wrapLatLng(i),
                n = i.lat - e.lat,
                o = i.lng - e.lng;
            if (0 == n && 0 == o) return t;
            var s = t.getSouthWest(),
                r = t.getNorthEast();
            return new N(new j(s.lat - n, s.lng - o), new j(r.lat - n, r.lng - o))
        }
    },
        U = h({}, F, {
            wrapLng: [-180, 180],
            R: 6371e3,
            distance: function (t, i) {
                var e = Math.PI / 180,
                    n = t.lat * e,
                    o = i.lat * e,
                    s = Math.sin((i.lat - t.lat) * e / 2),
                    r = Math.sin((i.lng - t.lng) * e / 2),
                    a = s * s + Math.cos(n) * Math.cos(o) * r * r,
                    h = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                return this.R * h
            }
        }),
        V = 6378137,
        q = {
            R: V,
            MAX_LATITUDE: 85.0511287798,
            project: function (t) {
                var i = Math.PI / 180,
                    e = this.MAX_LATITUDE,
                    n = Math.max(Math.min(e, t.lat), -e),
                    o = Math.sin(n * i);
                return new B(this.R * t.lng * i, this.R * Math.log((1 + o) / (1 - o)) / 2)
            },
            unproject: function (t) {
                var i = 180 / Math.PI;
                return new j((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * i, t.x * i / this.R)
            },
            bounds: (H = V * Math.PI, new O([-H, -H], [H, H]))
        };

    function G(t, i, e, n) {
        if (v(t)) return this._a = t[0], this._b = t[1], this._c = t[2], void (this._d = t[3]);
        this._a = t, this._b = i, this._c = e, this._d = n
    }

    function K(t, i, e, n) {
        return new G(t, i, e, n)
    }
    G.prototype = {
        transform: function (t, i) {
            return this._transform(t.clone(), i)
        },
        _transform: function (t, i) {
            return i = i || 1, t.x = i * (this._a * t.x + this._b), t.y = i * (this._c * t.y + this._d), t
        },
        untransform: function (t, i) {
            return i = i || 1, new B((t.x / i - this._b) / this._a, (t.y / i - this._d) / this._c)
        }
    };
    var Y, X = h({}, U, {
        code: "EPSG:3857",
        projection: q,
        transformation: (Y = .5 / (Math.PI * q.R), K(Y, .5, -Y, .5))
    }),
        J = h({}, X, {
            code: "EPSG:900913"
        });

    function $(t) {
        return document.createElementNS("http://www.w3.org/2000/svg", t)
    }

    function Q(t, i) {
        var e, n, o, s, r, a, h = "";
        for (e = 0, o = t.length; e < o; e++) {
            for (n = 0, s = (r = t[e]).length; n < s; n++) h += (n ? "L" : "M") + (a = r[n]).x + " " + a.y;
            h += i ? Zt ? "z" : "x" : ""
        }
        return h || "M0 0"
    }
    var tt = document.documentElement.style,
        it = "ActiveXObject" in window,
        et = it && !document.addEventListener,
        nt = "msLaunchUri" in navigator && !("documentMode" in document),
        ot = kt("webkit"),
        st = kt("android"),
        rt = kt("android 2") || kt("android 3"),
        at = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10),
        ht = st && kt("Google") && at < 537 && !("AudioNode" in window),
        ut = !!window.opera,
        lt = kt("chrome"),
        ct = kt("gecko") && !ot && !ut && !it,
        _t = !lt && kt("safari"),
        dt = kt("phantom"),
        pt = "OTransition" in tt,
        mt = 0 === navigator.platform.indexOf("Win"),
        ft = it && "transition" in tt,
        gt = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix && !rt,
        vt = "MozPerspective" in tt,
        yt = !window.L_DISABLE_3D && (ft || gt || vt) && !pt && !dt,
        xt = "undefined" != typeof orientation || kt("mobile"),
        wt = xt && ot,
        Pt = xt && gt,
        Lt = !window.PointerEvent && window.MSPointerEvent,
        bt = !(!window.PointerEvent && !Lt),
        Tt = !window.L_NO_TOUCH && (bt || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        zt = xt && ut,
        Mt = xt && ct,
        Ct = 1 < (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI),
        St = !!document.createElement("canvas").getContext,
        Zt = !(!document.createElementNS || !$("svg").createSVGRect),
        Et = !Zt && function () {
            try {
                var t = document.createElement("div");
                t.innerHTML = '<v:shape adj="1"/>';
                var i = t.firstChild;
                return i.style.behavior = "url(#default#VML)", i && "object" == typeof i.adj
            } catch (t) {
                return !1
            }
        }();

    function kt(t) {
        return 0 <= navigator.userAgent.toLowerCase().indexOf(t)
    }
    var Bt = (Object.freeze || Object)({
        ie: it,
        ielt9: et,
        edge: nt,
        webkit: ot,
        android: st,
        android23: rt,
        androidStock: ht,
        opera: ut,
        chrome: lt,
        gecko: ct,
        safari: _t,
        phantom: dt,
        opera12: pt,
        win: mt,
        ie3d: ft,
        webkit3d: gt,
        gecko3d: vt,
        any3d: yt,
        mobile: xt,
        mobileWebkit: wt,
        mobileWebkit3d: Pt,
        msPointer: Lt,
        pointer: bt,
        touch: Tt,
        mobileOpera: zt,
        mobileGecko: Mt,
        retina: Ct,
        canvas: St,
        svg: Zt,
        vml: Et
    }),
        At = Lt ? "MSPointerDown" : "pointerdown",
        It = Lt ? "MSPointerMove" : "pointermove",
        Ot = Lt ? "MSPointerUp" : "pointerup",
        Rt = Lt ? "MSPointerCancel" : "pointercancel",
        Nt = ["INPUT", "SELECT", "OPTION"],
        Dt = {},
        jt = !1,
        Wt = 0;

    function Ht(t, i, e, n) {
        return "touchstart" === i ? function (t, i, e) {
            var n = a(function (t) {
                if ("mouse" !== t.pointerType && t.MSPOINTER_TYPE_MOUSE && t.pointerType !== t.MSPOINTER_TYPE_MOUSE) {
                    if (!(Nt.indexOf(t.target.tagName) < 0)) return;
                    Di(t)
                }
                qt(t, i)
            });
            t["_leaflet_touchstart" + e] = n, t.addEventListener(At, n, !1), jt || (document.documentElement.addEventListener(At, Ft, !0), document.documentElement.addEventListener(It, Ut, !0), document.documentElement.addEventListener(Ot, Vt, !0), document.documentElement.addEventListener(Rt, Vt, !0), jt = !0)
        }(t, e, n) : "touchmove" === i ? function (t, i, e) {
            var n = function (t) {
                (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) && qt(t, i)
            };
            t["_leaflet_touchmove" + e] = n, t.addEventListener(It, n, !1)
        }(t, e, n) : "touchend" === i && function (t, i, e) {
            var n = function (t) {
                qt(t, i)
            };
            t["_leaflet_touchend" + e] = n, t.addEventListener(Ot, n, !1), t.addEventListener(Rt, n, !1)
        }(t, e, n), this
    }

    function Ft(t) {
        Dt[t.pointerId] = t, Wt++
    }

    function Ut(t) {
        Dt[t.pointerId] && (Dt[t.pointerId] = t)
    }

    function Vt(t) {
        delete Dt[t.pointerId], Wt--
    }

    function qt(t, i) {
        for (var e in t.touches = [], Dt) t.touches.push(Dt[e]);
        t.changedTouches = [t], i(t)
    }
    var Gt = Lt ? "MSPointerDown" : bt ? "pointerdown" : "touchstart",
        Kt = Lt ? "MSPointerUp" : bt ? "pointerup" : "touchend",
        Yt = "_leaflet_";

    function Xt(t, o, i) {
        var s, r, a = !1;

        function e(t) {
            var i;
            if (bt) {
                if (!nt || "mouse" === t.pointerType) return;
                i = Wt
            } else i = t.touches.length;
            if (!(1 < i)) {
                var e = Date.now(),
                    n = e - (s || e);
                r = t.touches ? t.touches[0] : t, a = 0 < n && n <= 250, s = e
            }
        }

        function n(t) {
            if (a && !r.cancelBubble) {
                if (bt) {
                    if (!nt || "mouse" === t.pointerType) return;
                    var i, e, n = {};
                    for (e in r) i = r[e], n[e] = i && i.bind ? i.bind(r) : i;
                    r = n
                }
                r.type = "dblclick", r.button = 0, o(r), s = null
            }
        }
        return t[Yt + Gt + i] = e, t[Yt + Kt + i] = n, t[Yt + "dblclick" + i] = o, t.addEventListener(Gt, e, !1), t.addEventListener(Kt, n, !1), t.addEventListener("dblclick", o, !1), this
    }

    function Jt(t, i) {
        var e = t[Yt + Gt + i],
            n = t[Yt + Kt + i],
            o = t[Yt + "dblclick" + i];
        return t.removeEventListener(Gt, e, !1), t.removeEventListener(Kt, n, !1), nt || t.removeEventListener("dblclick", o, !1), this
    }
    var $t, Qt, ti, ii, ei, ni = yi(["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]),
        oi = yi(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
        si = "webkitTransition" === oi || "OTransition" === oi ? oi + "End" : "transitionend";

    function ri(t) {
        return "string" == typeof t ? document.getElementById(t) : t
    }

    function ai(t, i) {
        var e = t.style[i] || t.currentStyle && t.currentStyle[i];
        if ((!e || "auto" === e) && document.defaultView) {
            var n = document.defaultView.getComputedStyle(t, null);
            e = n ? n[i] : null
        }
        return "auto" === e ? null : e
    }

    function hi(t, i, e) {
        var n = document.createElement(t);
        return n.className = i || "", e && e.appendChild(n), n
    }

    function ui(t) {
        var i = t.parentNode;
        i && i.removeChild(t)
    }

    function li(t) {
        for (; t.firstChild;) t.removeChild(t.firstChild)
    }

    function ci(t) {
        var i = t.parentNode;
        i && i.lastChild !== t && i.appendChild(t)
    }

    function _i(t) {
        var i = t.parentNode;
        i && i.firstChild !== t && i.insertBefore(t, i.firstChild)
    }

    function di(t, i) {
        if (void 0 !== t.classList) return t.classList.contains(i);
        var e = gi(t);
        return 0 < e.length && new RegExp("(^|\\s)" + i + "(\\s|$)").test(e)
    }

    function pi(t, i) {
        if (void 0 !== t.classList)
            for (var e = d(i), n = 0, o = e.length; n < o; n++) t.classList.add(e[n]);
        else if (!di(t, i)) {
            var s = gi(t);
            fi(t, (s ? s + " " : "") + i)
        }
    }

    function mi(t, i) {
        void 0 !== t.classList ? t.classList.remove(i) : fi(t, _((" " + gi(t) + " ").replace(" " + i + " ", " ")))
    }

    function fi(t, i) {
        void 0 === t.className.baseVal ? t.className = i : t.className.baseVal = i
    }

    function gi(t) {
        return t.correspondingElement && (t = t.correspondingElement), void 0 === t.className.baseVal ? t.className : t.className.baseVal
    }

    function vi(t, i) {
        "opacity" in t.style ? t.style.opacity = i : "filter" in t.style && function (t, i) {
            var e = !1,
                n = "DXImageTransform.Microsoft.Alpha";
            try {
                e = t.filters.item(n)
            } catch (t) {
                if (1 === i) return
            }
            i = Math.round(100 * i), e ? (e.Enabled = 100 !== i, e.Opacity = i) : t.style.filter += " progid:" + n + "(opacity=" + i + ")"
        }(t, i)
    }

    function yi(t) {
        for (var i = document.documentElement.style, e = 0; e < t.length; e++)
            if (t[e] in i) return t[e];
        return !1
    }

    function xi(t, i, e) {
        var n = i || new B(0, 0);
        t.style[ni] = (ft ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (e ? " scale(" + e + ")" : "")
    }

    function wi(t, i) {
        t._leaflet_pos = i, yt ? xi(t, i) : (t.style.left = i.x + "px", t.style.top = i.y + "px")
    }

    function Pi(t) {
        return t._leaflet_pos || new B(0, 0)
    }
    if ("onselectstart" in document) $t = function () {
        Ei(window, "selectstart", Di)
    }, Qt = function () {
        Bi(window, "selectstart", Di)
    };
    else {
        var Li = yi(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
        $t = function () {
            if (Li) {
                var t = document.documentElement.style;
                ti = t[Li], t[Li] = "none"
            }
        }, Qt = function () {
            Li && (document.documentElement.style[Li] = ti, ti = void 0)
        }
    }

    function bi() {
        Ei(window, "dragstart", Di)
    }

    function Ti() {
        Bi(window, "dragstart", Di)
    }

    function zi(t) {
        for (; - 1 === t.tabIndex;) t = t.parentNode;
        t.style && (Mi(), ei = (ii = t).style.outline, t.style.outline = "none", Ei(window, "keydown", Mi))
    }

    function Mi() {
        ii && (ii.style.outline = ei, ei = ii = void 0, Bi(window, "keydown", Mi))
    }

    function Ci(t) {
        for (; !((t = t.parentNode).offsetWidth && t.offsetHeight || t === document.body););
        return t
    }

    function Si(t) {
        var i = t.getBoundingClientRect();
        return {
            x: i.width / t.offsetWidth || 1,
            y: i.height / t.offsetHeight || 1,
            boundingClientRect: i
        }
    }
    var Zi = (Object.freeze || Object)({
        TRANSFORM: ni,
        TRANSITION: oi,
        TRANSITION_END: si,
        get: ri,
        getStyle: ai,
        create: hi,
        remove: ui,
        empty: li,
        toFront: ci,
        toBack: _i,
        hasClass: di,
        addClass: pi,
        removeClass: mi,
        setClass: fi,
        getClass: gi,
        setOpacity: vi,
        testProp: yi,
        setTransform: xi,
        setPosition: wi,
        getPosition: Pi,
        disableTextSelection: $t,
        enableTextSelection: Qt,
        disableImageDrag: bi,
        enableImageDrag: Ti,
        preventOutline: zi,
        restoreOutline: Mi,
        getSizedParentNode: Ci,
        getScale: Si
    });

    function Ei(t, i, e, n) {
        if ("object" == typeof i)
            for (var o in i) Ai(t, o, i[o], e);
        else
            for (var s = 0, r = (i = d(i)).length; s < r; s++) Ai(t, i[s], e, n);
        return this
    }
    var ki = "_leaflet_events";

    function Bi(t, i, e, n) {
        if ("object" == typeof i)
            for (var o in i) Ii(t, o, i[o], e);
        else if (i)
            for (var s = 0, r = (i = d(i)).length; s < r; s++) Ii(t, i[s], e, n);
        else {
            for (var a in t[ki]) Ii(t, a, t[ki][a]);
            delete t[ki]
        }
        return this
    }

    function Ai(i, t, e, n) {
        var o = t + u(e) + (n ? "_" + u(n) : "");
        if (i[ki] && i[ki][o]) return this;
        var s = function (t) {
            return e.call(n || i, t || window.event)
        },
            r = s;
        bt && 0 === t.indexOf("touch") ? Ht(i, t, s, o) : !Tt || "dblclick" !== t || bt && lt ? "addEventListener" in i ? "mousewheel" === t ? i.addEventListener("onwheel" in i ? "wheel" : "mousewheel", s, !1) : "mouseenter" === t || "mouseleave" === t ? (s = function (t) {
            t = t || window.event, Ki(i, t) && r(t)
        }, i.addEventListener("mouseenter" === t ? "mouseover" : "mouseout", s, !1)) : ("click" === t && st && (s = function (t) {
            ! function (t, i) {
                var e = t.timeStamp || t.originalEvent && t.originalEvent.timeStamp,
                    n = Ui && e - Ui;
                if (n && 100 < n && n < 500 || t.target._simulatedClick && !t._simulated) return ji(t);
                Ui = e, i(t)
            }(t, r)
        }), i.addEventListener(t, s, !1)) : "attachEvent" in i && i.attachEvent("on" + t, s) : Xt(i, s, o), i[ki] = i[ki] || {}, i[ki][o] = s
    }

    function Ii(t, i, e, n) {
        var o = i + u(e) + (n ? "_" + u(n) : ""),
            s = t[ki] && t[ki][o];
        if (!s) return this;
        bt && 0 === i.indexOf("touch") ? function (t, i, e) {
            var n = t["_leaflet_" + i + e];
            "touchstart" === i ? t.removeEventListener(At, n, !1) : "touchmove" === i ? t.removeEventListener(It, n, !1) : "touchend" === i && (t.removeEventListener(Ot, n, !1), t.removeEventListener(Rt, n, !1))
        }(t, i, o) : !Tt || "dblclick" !== i || bt && lt ? "removeEventListener" in t ? "mousewheel" === i ? t.removeEventListener("onwheel" in t ? "wheel" : "mousewheel", s, !1) : t.removeEventListener("mouseenter" === i ? "mouseover" : "mouseleave" === i ? "mouseout" : i, s, !1) : "detachEvent" in t && t.detachEvent("on" + i, s) : Jt(t, o), t[ki][o] = null
    }

    function Oi(t) {
        return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, Gi(t), this
    }

    function Ri(t) {
        return Ai(t, "mousewheel", Oi), this
    }

    function Ni(t) {
        return Ei(t, "mousedown touchstart dblclick", Oi), Ai(t, "click", qi), this
    }

    function Di(t) {
        return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
    }

    function ji(t) {
        return Di(t), Oi(t), this
    }

    function Wi(t, i) {
        if (!i) return new B(t.clientX, t.clientY);
        var e = Si(i),
            n = e.boundingClientRect;
        return new B((t.clientX - n.left) / e.x - i.clientLeft, (t.clientY - n.top) / e.y - i.clientTop)
    }
    var Hi = mt && lt ? 2 * window.devicePixelRatio : ct ? window.devicePixelRatio : 1;

    function Fi(t) {
        return nt ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / Hi : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0
    }
    var Ui, Vi = {};

    function qi(t) {
        Vi[t.type] = !0
    }

    function Gi(t) {
        var i = Vi[t.type];
        return Vi[t.type] = !1, i
    }

    function Ki(t, i) {
        var e = i.relatedTarget;
        if (!e) return !0;
        try {
            for (; e && e !== t;) e = e.parentNode
        } catch (t) {
            return !1
        }
        return e !== t
    }
    var Yi = (Object.freeze || Object)({
        on: Ei,
        off: Bi,
        stopPropagation: Oi,
        disableScrollPropagation: Ri,
        disableClickPropagation: Ni,
        preventDefault: Di,
        stop: ji,
        getMousePosition: Wi,
        getWheelDelta: Fi,
        fakeStop: qi,
        skipped: Gi,
        isExternalTarget: Ki,
        addListener: Ei,
        removeListener: Bi
    }),
        Xi = k.extend({
            run: function (t, i, e, n) {
                this.stop(), this._el = t, this._inProgress = !0, this._duration = e || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = Pi(t), this._offset = i.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
            },
            stop: function () {
                this._inProgress && (this._step(!0), this._complete())
            },
            _animate: function () {
                this._animId = M(this._animate, this), this._step()
            },
            _step: function (t) {
                var i = +new Date - this._startTime,
                    e = 1e3 * this._duration;
                i < e ? this._runFrame(this._easeOut(i / e), t) : (this._runFrame(1), this._complete())
            },
            _runFrame: function (t, i) {
                var e = this._startPos.add(this._offset.multiplyBy(t));
                i && e._round(), wi(this._el, e), this.fire("step")
            },
            _complete: function () {
                C(this._animId), this._inProgress = !1, this.fire("end")
            },
            _easeOut: function (t) {
                return 1 - Math.pow(1 - t, this._easeOutPower)
            }
        }),
        Ji = k.extend({
            options: {
                crs: X,
                center: void 0,
                zoom: void 0,
                minZoom: void 0,
                maxZoom: void 0,
                layers: [],
                maxBounds: void 0,
                renderer: void 0,
                zoomAnimation: !0,
                zoomAnimationThreshold: 4,
                fadeAnimation: !0,
                markerZoomAnimation: !0,
                transform3DLimit: 8388608,
                zoomSnap: 1,
                zoomDelta: 1,
                trackResize: !0
            },
            initialize: function (t, i) {
                i = p(this, i), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(t), this._initLayout(), this._onResize = a(this._onResize, this), this._initEvents(), i.maxBounds && this.setMaxBounds(i.maxBounds), void 0 !== i.zoom && (this._zoom = this._limitZoom(i.zoom)), i.center && void 0 !== i.zoom && this.setView(W(i.center), i.zoom, {
                    reset: !0
                }), this.callInitHooks(), this._zoomAnimated = oi && yt && !zt && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), Ei(this._proxy, si, this._catchTransitionEnd, this)), this._addLayers(this.options.layers)
            },
            setView: function (t, i, e) {
                if ((i = void 0 === i ? this._zoom : this._limitZoom(i), t = this._limitCenter(W(t), i, this.options.maxBounds), e = e || {}, this._stop(), this._loaded && !e.reset && !0 !== e) && (void 0 !== e.animate && (e.zoom = h({
                    animate: e.animate
                }, e.zoom), e.pan = h({
                    animate: e.animate,
                    duration: e.duration
                }, e.pan)), this._zoom !== i ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, i, e.zoom) : this._tryAnimatedPan(t, e.pan))) return clearTimeout(this._sizeTimer), this;
                return this._resetView(t, i), this
            },
            setZoom: function (t, i) {
                return this._loaded ? this.setView(this.getCenter(), t, {
                    zoom: i
                }) : (this._zoom = t, this)
            },
            zoomIn: function (t, i) {
                return t = t || (yt ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, i)
            },
            zoomOut: function (t, i) {
                return t = t || (yt ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, i)
            },
            setZoomAround: function (t, i, e) {
                var n = this.getZoomScale(i),
                    o = this.getSize().divideBy(2),
                    s = (t instanceof B ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n),
                    r = this.containerPointToLatLng(o.add(s));
                return this.setView(r, i, {
                    zoom: e
                })
            },
            _getBoundsCenterZoom: function (t, i) {
                i = i || {}, t = t.getBounds ? t.getBounds() : D(t);
                var e = I(i.paddingTopLeft || i.padding || [0, 0]),
                    n = I(i.paddingBottomRight || i.padding || [0, 0]),
                    o = this.getBoundsZoom(t, !1, e.add(n));
                if ((o = "number" == typeof i.maxZoom ? Math.min(i.maxZoom, o) : o) === 1 / 0) return {
                    center: t.getCenter(),
                    zoom: o
                };
                var s = n.subtract(e).divideBy(2),
                    r = this.project(t.getSouthWest(), o),
                    a = this.project(t.getNorthEast(), o);
                return {
                    center: this.unproject(r.add(a).divideBy(2).add(s), o),
                    zoom: o
                }
            },
            fitBounds: function (t, i) {
                if (!(t = D(t)).isValid()) throw new Error("Bounds are not valid.");
                var e = this._getBoundsCenterZoom(t, i);
                return this.setView(e.center, e.zoom, i)
            },
            fitWorld: function (t) {
                return this.fitBounds([
                    [-90, -180],
                    [90, 180]
                ], t)
            },
            panTo: function (t, i) {
                return this.setView(t, this._zoom, {
                    pan: i
                })
            },
            panBy: function (t, i) {
                if (i = i || {}, !(t = I(t).round()).x && !t.y) return this.fire("moveend");
                if (!0 !== i.animate && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
                if (this._panAnim || (this._panAnim = new Xi, this._panAnim.on({
                    step: this._onPanTransitionStep,
                    end: this._onPanTransitionEnd
                }, this)), i.noMoveStart || this.fire("movestart"), !1 !== i.animate) {
                    pi(this._mapPane, "leaflet-pan-anim");
                    var e = this._getMapPanePos().subtract(t).round();
                    this._panAnim.run(this._mapPane, e, i.duration || .25, i.easeLinearity)
                } else this._rawPanBy(t), this.fire("move").fire("moveend");
                return this
            },
            flyTo: function (n, o, t) {
                if (!1 === (t = t || {}).animate || !yt) return this.setView(n, o, t);
                this._stop();
                var s = this.project(this.getCenter()),
                    r = this.project(n),
                    i = this.getSize(),
                    a = this._zoom;
                n = W(n), o = void 0 === o ? a : o;
                var h = Math.max(i.x, i.y),
                    u = h * this.getZoomScale(a, o),
                    l = r.distanceTo(s) || 1,
                    c = 1.42,
                    _ = c * c;

                function e(t) {
                    var i = (u * u - h * h + (t ? -1 : 1) * _ * _ * l * l) / (2 * (t ? u : h) * _ * l),
                        e = Math.sqrt(i * i + 1) - i;
                    return e < 1e-9 ? -18 : Math.log(e)
                }

                function d(t) {
                    return (Math.exp(t) - Math.exp(-t)) / 2
                }

                function p(t) {
                    return (Math.exp(t) + Math.exp(-t)) / 2
                }
                var m = e(0);

                function f(t) {
                    return h * (p(m) * function (t) {
                        return d(t) / p(t)
                    }(m + c * t) - d(m)) / _
                }
                var g = Date.now(),
                    v = (e(1) - m) / c,
                    y = t.duration ? 1e3 * t.duration : 1e3 * v * .8;
                return this._moveStart(!0, t.noMoveStart),
                    function t() {
                        var i = (Date.now() - g) / y,
                            e = function (t) {
                                return 1 - Math.pow(1 - t, 1.5)
                            }(i) * v;
                        i <= 1 ? (this._flyToFrame = M(t, this), this._move(this.unproject(s.add(r.subtract(s).multiplyBy(f(e) / l)), a), this.getScaleZoom(h / function (t) {
                            return h * (p(m) / p(m + c * t))
                        }(e), a), {
                            flyTo: !0
                        })) : this._move(n, o)._moveEnd(!0)
                    }.call(this), this
            },
            flyToBounds: function (t, i) {
                var e = this._getBoundsCenterZoom(t, i);
                return this.flyTo(e.center, e.zoom, i)
            },
            setMaxBounds: function (t) {
                return (t = D(t)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds))
            },
            setMinZoom: function (t) {
                var i = this.options.minZoom;
                return this.options.minZoom = t, this._loaded && i !== t && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(t) : this
            },
            setMaxZoom: function (t) {
                var i = this.options.maxZoom;
                return this.options.maxZoom = t, this._loaded && i !== t && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(t) : this
            },
            panInsideBounds: function (t, i) {
                this._enforcingBounds = !0;
                var e = this.getCenter(),
                    n = this._limitCenter(e, this._zoom, D(t));
                return e.equals(n) || this.panTo(n, i), this._enforcingBounds = !1, this
            },
            panInside: function (t, i) {
                var e = I((i = i || {}).paddingTopLeft || i.padding || [0, 0]),
                    n = I(i.paddingBottomRight || i.padding || [0, 0]),
                    o = this.getCenter(),
                    s = this.project(o),
                    r = this.project(t),
                    a = this.getPixelBounds(),
                    h = a.getSize().divideBy(2),
                    u = R([a.min.add(e), a.max.subtract(n)]);
                if (!u.contains(r)) {
                    this._enforcingBounds = !0;
                    var l = s.subtract(r),
                        c = I(r.x + l.x, r.y + l.y);
                    (r.x < u.min.x || r.x > u.max.x) && (c.x = s.x - l.x, 0 < l.x ? c.x += h.x - e.x : c.x -= h.x - n.x), (r.y < u.min.y || r.y > u.max.y) && (c.y = s.y - l.y, 0 < l.y ? c.y += h.y - e.y : c.y -= h.y - n.y), this.panTo(this.unproject(c), i), this._enforcingBounds = !1
                }
                return this
            },
            invalidateSize: function (t) {
                if (!this._loaded) return this;
                t = h({
                    animate: !1,
                    pan: !0
                }, !0 === t ? {
                    animate: !0
                } : t);
                var i = this.getSize();
                this._sizeChanged = !0, this._lastCenter = null;
                var e = this.getSize(),
                    n = i.divideBy(2).round(),
                    o = e.divideBy(2).round(),
                    s = n.subtract(o);
                return s.x || s.y ? (t.animate && t.pan ? this.panBy(s) : (t.pan && this._rawPanBy(s), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(a(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
                    oldSize: i,
                    newSize: e
                })) : this
            },
            stop: function () {
                return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop()
            },
            locate: function (t) {
                if (t = this._locateOptions = h({
                    timeout: 1e4,
                    watch: !1
                }, t), !("geolocation" in navigator)) return this._handleGeolocationError({
                    code: 0,
                    message: "Geolocation not supported."
                }), this;
                var i = a(this._handleGeolocationResponse, this),
                    e = a(this._handleGeolocationError, this);
                return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(i, e, t) : navigator.geolocation.getCurrentPosition(i, e, t), this
            },
            stopLocate: function () {
                return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
            },
            _handleGeolocationError: function (t) {
                var i = t.code,
                    e = t.message || (1 === i ? "permission denied" : 2 === i ? "position unavailable" : "timeout");
                this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
                    code: i,
                    message: "Geolocation error: " + e + "."
                })
            },
            _handleGeolocationResponse: function (t) {
                var i = new j(t.coords.latitude, t.coords.longitude),
                    e = i.toBounds(2 * t.coords.accuracy),
                    n = this._locateOptions;
                if (n.setView) {
                    var o = this.getBoundsZoom(e);
                    this.setView(i, n.maxZoom ? Math.min(o, n.maxZoom) : o)
                }
                var s = {
                    latlng: i,
                    bounds: e,
                    timestamp: t.timestamp
                };
                for (var r in t.coords) "number" == typeof t.coords[r] && (s[r] = t.coords[r]);
                this.fire("locationfound", s)
            },
            addHandler: function (t, i) {
                if (!i) return this;
                var e = this[t] = new i(this);
                return this._handlers.push(e), this.options[t] && e.enable(), this
            },
            remove: function () {
                if (this._initEvents(!0), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
                try {
                    delete this._container._leaflet_id, delete this._containerId
                } catch (t) {
                    this._container._leaflet_id = void 0, this._containerId = void 0
                }
                var t;
                for (t in void 0 !== this._locationWatchId && this.stopLocate(), this._stop(), ui(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (C(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload"), this._layers) this._layers[t].remove();
                for (t in this._panes) ui(this._panes[t]);
                return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this
            },
            createPane: function (t, i) {
                var e = hi("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), i || this._mapPane);
                return t && (this._panes[t] = e), e
            },
            getCenter: function () {
                return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
            },
            getZoom: function () {
                return this._zoom
            },
            getBounds: function () {
                var t = this.getPixelBounds();
                return new N(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()))
            },
            getMinZoom: function () {
                return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom
            },
            getMaxZoom: function () {
                return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
            },
            getBoundsZoom: function (t, i, e) {
                t = D(t), e = I(e || [0, 0]);
                var n = this.getZoom() || 0,
                    o = this.getMinZoom(),
                    s = this.getMaxZoom(),
                    r = t.getNorthWest(),
                    a = t.getSouthEast(),
                    h = this.getSize().subtract(e),
                    u = R(this.project(a, n), this.project(r, n)).getSize(),
                    l = yt ? this.options.zoomSnap : 1,
                    c = h.x / u.x,
                    _ = h.y / u.y,
                    d = i ? Math.max(c, _) : Math.min(c, _);
                return n = this.getScaleZoom(d, n), l && (n = Math.round(n / (l / 100)) * (l / 100), n = i ? Math.ceil(n / l) * l : Math.floor(n / l) * l), Math.max(o, Math.min(s, n))
            },
            getSize: function () {
                return this._size && !this._sizeChanged || (this._size = new B(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone()
            },
            getPixelBounds: function (t, i) {
                var e = this._getTopLeftPoint(t, i);
                return new O(e, e.add(this.getSize()))
            },
            getPixelOrigin: function () {
                return this._checkIfLoaded(), this._pixelOrigin
            },
            getPixelWorldBounds: function (t) {
                return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t)
            },
            getPane: function (t) {
                return "string" == typeof t ? this._panes[t] : t
            },
            getPanes: function () {
                return this._panes
            },
            getContainer: function () {
                return this._container
            },
            getZoomScale: function (t, i) {
                var e = this.options.crs;
                return i = void 0 === i ? this._zoom : i, e.scale(t) / e.scale(i)
            },
            getScaleZoom: function (t, i) {
                var e = this.options.crs;
                i = void 0 === i ? this._zoom : i;
                var n = e.zoom(t * e.scale(i));
                return isNaN(n) ? 1 / 0 : n
            },
            project: function (t, i) {
                return i = void 0 === i ? this._zoom : i, this.options.crs.latLngToPoint(W(t), i)
            },
            unproject: function (t, i) {
                return i = void 0 === i ? this._zoom : i, this.options.crs.pointToLatLng(I(t), i)
            },
            layerPointToLatLng: function (t) {
                var i = I(t).add(this.getPixelOrigin());
                return this.unproject(i)
            },
            latLngToLayerPoint: function (t) {
                return this.project(W(t))._round()._subtract(this.getPixelOrigin())
            },
            wrapLatLng: function (t) {
                return this.options.crs.wrapLatLng(W(t))
            },
            wrapLatLngBounds: function (t) {
                return this.options.crs.wrapLatLngBounds(D(t))
            },
            distance: function (t, i) {
                return this.options.crs.distance(W(t), W(i))
            },
            containerPointToLayerPoint: function (t) {
                return I(t).subtract(this._getMapPanePos())
            },
            layerPointToContainerPoint: function (t) {
                return I(t).add(this._getMapPanePos())
            },
            containerPointToLatLng: function (t) {
                var i = this.containerPointToLayerPoint(I(t));
                return this.layerPointToLatLng(i)
            },
            latLngToContainerPoint: function (t) {
                return this.layerPointToContainerPoint(this.latLngToLayerPoint(W(t)))
            },
            mouseEventToContainerPoint: function (t) {
                return Wi(t, this._container)
            },
            mouseEventToLayerPoint: function (t) {
                return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
            },
            mouseEventToLatLng: function (t) {
                return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
            },
            _initContainer: function (t) {
                var i = this._container = ri(t);
                if (!i) throw new Error("Map container not found.");
                if (i._leaflet_id) throw new Error("Map container is already initialized.");
                Ei(i, "scroll", this._onScroll, this), this._containerId = u(i)
            },
            _initLayout: function () {
                var t = this._container;
                this._fadeAnimated = this.options.fadeAnimation && yt, pi(t, "leaflet-container" + (Tt ? " leaflet-touch" : "") + (Ct ? " leaflet-retina" : "") + (et ? " leaflet-oldie" : "") + (_t ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
                var i = ai(t, "position");
                "absolute" !== i && "relative" !== i && "fixed" !== i && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
            },
            _initPanes: function () {
                var t = this._panes = {};
                this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), wi(this._mapPane, new B(0, 0)), this.createPane("tilePane"), this.createPane("shadowPane"), this.createPane("overlayPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (pi(t.markerPane, "leaflet-zoom-hide"), pi(t.shadowPane, "leaflet-zoom-hide"))
            },
            _resetView: function (t, i) {
                wi(this._mapPane, new B(0, 0));
                var e = !this._loaded;
                this._loaded = !0, i = this._limitZoom(i), this.fire("viewprereset");
                var n = this._zoom !== i;
                this._moveStart(n, !1)._move(t, i)._moveEnd(n), this.fire("viewreset"), e && this.fire("load")
            },
            _moveStart: function (t, i) {
                return t && this.fire("zoomstart"), i || this.fire("movestart"), this
            },
            _move: function (t, i, e) {
                void 0 === i && (i = this._zoom);
                var n = this._zoom !== i;
                return this._zoom = i, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), (n || e && e.pinch) && this.fire("zoom", e), this.fire("move", e)
            },
            _moveEnd: function (t) {
                return t && this.fire("zoomend"), this.fire("moveend")
            },
            _stop: function () {
                return C(this._flyToFrame), this._panAnim && this._panAnim.stop(), this
            },
            _rawPanBy: function (t) {
                wi(this._mapPane, this._getMapPanePos().subtract(t))
            },
            _getZoomSpan: function () {
                return this.getMaxZoom() - this.getMinZoom()
            },
            _panInsideMaxBounds: function () {
                this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
            },
            _checkIfLoaded: function () {
                if (!this._loaded) throw new Error("Set map center and zoom first.")
            },
            _initEvents: function (t) {
                this._targets = {};
                var i = t ? Bi : Ei;
                i((this._targets[u(this._container)] = this)._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && i(window, "resize", this._onResize, this), yt && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd)
            },
            _onResize: function () {
                C(this._resizeRequest), this._resizeRequest = M(function () {
                    this.invalidateSize({
                        debounceMoveend: !0
                    })
                }, this)
            },
            _onScroll: function () {
                this._container.scrollTop = 0, this._container.scrollLeft = 0
            },
            _onMoveEnd: function () {
                var t = this._getMapPanePos();
                Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom())
            },
            _findEventTargets: function (t, i) {
                for (var e, n = [], o = "mouseout" === i || "mouseover" === i, s = t.target || t.srcElement, r = !1; s;) {
                    if ((e = this._targets[u(s)]) && ("click" === i || "preclick" === i) && !t._simulated && this._draggableMoved(e)) {
                        r = !0;
                        break
                    }
                    if (e && e.listens(i, !0)) {
                        if (o && !Ki(s, t)) break;
                        if (n.push(e), o) break
                    }
                    if (s === this._container) break;
                    s = s.parentNode
                }
                return n.length || r || o || !Ki(s, t) || (n = [this]), n
            },
            _handleDOMEvent: function (t) {
                if (this._loaded && !Gi(t)) {
                    var i = t.type;
                    "mousedown" !== i && "keypress" !== i && "keyup" !== i && "keydown" !== i || zi(t.target || t.srcElement), this._fireDOMEvent(t, i)
                }
            },
            _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
            _fireDOMEvent: function (t, i, e) {
                if ("click" === t.type) {
                    var n = h({}, t);
                    n.type = "preclick", this._fireDOMEvent(n, n.type, e)
                }
                if (!t._stopped && (e = (e || []).concat(this._findEventTargets(t, i))).length) {
                    var o = e[0];
                    "contextmenu" === i && o.listens(i, !0) && Di(t);
                    var s = {
                        originalEvent: t
                    };
                    if ("keypress" !== t.type && "keydown" !== t.type && "keyup" !== t.type) {
                        var r = o.getLatLng && (!o._radius || o._radius <= 10);
                        s.containerPoint = r ? this.latLngToContainerPoint(o.getLatLng()) : this.mouseEventToContainerPoint(t), s.layerPoint = this.containerPointToLayerPoint(s.containerPoint), s.latlng = r ? o.getLatLng() : this.layerPointToLatLng(s.layerPoint)
                    }
                    for (var a = 0; a < e.length; a++)
                        if (e[a].fire(i, s, !0), s.originalEvent._stopped || !1 === e[a].options.bubblingMouseEvents && -1 !== y(this._mouseEvents, i)) return
                }
            },
            _draggableMoved: function (t) {
                return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved()
            },
            _clearHandlers: function () {
                for (var t = 0, i = this._handlers.length; t < i; t++) this._handlers[t].disable()
            },
            whenReady: function (t, i) {
                return this._loaded ? t.call(i || this, {
                    target: this
                }) : this.on("load", t, i), this
            },
            _getMapPanePos: function () {
                return Pi(this._mapPane) || new B(0, 0)
            },
            _moved: function () {
                var t = this._getMapPanePos();
                return t && !t.equals([0, 0])
            },
            _getTopLeftPoint: function (t, i) {
                return (t && void 0 !== i ? this._getNewPixelOrigin(t, i) : this.getPixelOrigin()).subtract(this._getMapPanePos())
            },
            _getNewPixelOrigin: function (t, i) {
                var e = this.getSize()._divideBy(2);
                return this.project(t, i)._subtract(e)._add(this._getMapPanePos())._round()
            },
            _latLngToNewLayerPoint: function (t, i, e) {
                var n = this._getNewPixelOrigin(e, i);
                return this.project(t, i)._subtract(n)
            },
            _latLngBoundsToNewLayerBounds: function (t, i, e) {
                var n = this._getNewPixelOrigin(e, i);
                return R([this.project(t.getSouthWest(), i)._subtract(n), this.project(t.getNorthWest(), i)._subtract(n), this.project(t.getSouthEast(), i)._subtract(n), this.project(t.getNorthEast(), i)._subtract(n)])
            },
            _getCenterLayerPoint: function () {
                return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
            },
            _getCenterOffset: function (t) {
                return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
            },
            _limitCenter: function (t, i, e) {
                if (!e) return t;
                var n = this.project(t, i),
                    o = this.getSize().divideBy(2),
                    s = new O(n.subtract(o), n.add(o)),
                    r = this._getBoundsOffset(s, e, i);
                return r.round().equals([0, 0]) ? t : this.unproject(n.add(r), i)
            },
            _limitOffset: function (t, i) {
                if (!i) return t;
                var e = this.getPixelBounds(),
                    n = new O(e.min.add(t), e.max.add(t));
                return t.add(this._getBoundsOffset(n, i))
            },
            _getBoundsOffset: function (t, i, e) {
                var n = R(this.project(i.getNorthEast(), e), this.project(i.getSouthWest(), e)),
                    o = n.min.subtract(t.min),
                    s = n.max.subtract(t.max);
                return new B(this._rebound(o.x, -s.x), this._rebound(o.y, -s.y))
            },
            _rebound: function (t, i) {
                return 0 < t + i ? Math.round(t - i) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(i))
            },
            _limitZoom: function (t) {
                var i = this.getMinZoom(),
                    e = this.getMaxZoom(),
                    n = yt ? this.options.zoomSnap : 1;
                return n && (t = Math.round(t / n) * n), Math.max(i, Math.min(e, t))
            },
            _onPanTransitionStep: function () {
                this.fire("move")
            },
            _onPanTransitionEnd: function () {
                mi(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
            },
            _tryAnimatedPan: function (t, i) {
                var e = this._getCenterOffset(t)._trunc();
                return !(!0 !== (i && i.animate) && !this.getSize().contains(e)) && (this.panBy(e, i), !0)
            },
            _createAnimProxy: function () {
                var t = this._proxy = hi("div", "leaflet-proxy leaflet-zoom-animated");
                this._panes.mapPane.appendChild(t), this.on("zoomanim", function (t) {
                    var i = ni,
                        e = this._proxy.style[i];
                    xi(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), e === this._proxy.style[i] && this._animatingZoom && this._onZoomTransitionEnd()
                }, this), this.on("load moveend", function () {
                    var t = this.getCenter(),
                        i = this.getZoom();
                    xi(this._proxy, this.project(t, i), this.getZoomScale(i, 1))
                }, this), this._on("unload", this._destroyAnimProxy, this)
            },
            _destroyAnimProxy: function () {
                ui(this._proxy), delete this._proxy
            },
            _catchTransitionEnd: function (t) {
                this._animatingZoom && 0 <= t.propertyName.indexOf("transform") && this._onZoomTransitionEnd()
            },
            _nothingToAnimate: function () {
                return !this._container.getElementsByClassName("leaflet-zoom-animated").length
            },
            _tryAnimatedZoom: function (t, i, e) {
                if (this._animatingZoom) return !0;
                if (e = e || {}, !this._zoomAnimated || !1 === e.animate || this._nothingToAnimate() || Math.abs(i - this._zoom) > this.options.zoomAnimationThreshold) return !1;
                var n = this.getZoomScale(i),
                    o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
                return !(!0 !== e.animate && !this.getSize().contains(o)) && (M(function () {
                    this._moveStart(!0, !1)._animateZoom(t, i, !0)
                }, this), !0)
            },
            _animateZoom: function (t, i, e, n) {
                this._mapPane && (e && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = i, pi(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
                    center: t,
                    zoom: i,
                    noUpdate: n
                }), setTimeout(a(this._onZoomTransitionEnd, this), 250))
            },
            _onZoomTransitionEnd: function () {
                this._animatingZoom && (this._mapPane && mi(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom), M(function () {
                    this._moveEnd(!0)
                }, this))
            }
        });

    function $i(t) {
        return new Qi(t)
    }
    var Qi = Z.extend({
        options: {
            position: "topright"
        },
        initialize: function (t) {
            p(this, t)
        },
        getPosition: function () {
            return this.options.position
        },
        setPosition: function (t) {
            var i = this._map;
            return i && i.removeControl(this), this.options.position = t, i && i.addControl(this), this
        },
        getContainer: function () {
            return this._container
        },
        addTo: function (t) {
            this.remove(), this._map = t;
            var i = this._container = this.onAdd(t),
                e = this.getPosition(),
                n = t._controlCorners[e];
            return pi(i, "leaflet-control"), -1 !== e.indexOf("bottom") ? n.insertBefore(i, n.firstChild) : n.appendChild(i), this._map.on("unload", this.remove, this), this
        },
        remove: function () {
            return this._map && (ui(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null), this
        },
        _refocusOnMap: function (t) {
            this._map && t && 0 < t.screenX && 0 < t.screenY && this._map.getContainer().focus()
        }
    });
    Ji.include({
        addControl: function (t) {
            return t.addTo(this), this
        },
        removeControl: function (t) {
            return t.remove(), this
        },
        _initControlPos: function () {
            var n = this._controlCorners = {},
                o = "leaflet-",
                s = this._controlContainer = hi("div", o + "control-container", this._container);

            function t(t, i) {
                var e = o + t + " " + o + i;
                n[t + i] = hi("div", e, s)
            }
            t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right")
        },
        _clearControlPos: function () {
            for (var t in this._controlCorners) ui(this._controlCorners[t]);
            ui(this._controlContainer), delete this._controlCorners, delete this._controlContainer
        }
    });
    var te = Qi.extend({
        options: {
            collapsed: !0,
            position: "topright",
            autoZIndex: !0,
            hideSingleBase: !1,
            sortLayers: !1,
            sortFunction: function (t, i, e, n) {
                return e < n ? -1 : n < e ? 1 : 0
            }
        },
        initialize: function (t, i, e) {
            for (var n in p(this, e), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, t) this._addLayer(t[n], n);
            for (n in i) this._addLayer(i[n], n, !0)
        },
        onAdd: function (t) {
            this._initLayout(), this._update(), (this._map = t).on("zoomend", this._checkDisabledLayers, this);
            for (var i = 0; i < this._layers.length; i++) this._layers[i].layer.on("add remove", this._onLayerChange, this);
            return this._container
        },
        addTo: function (t) {
            return Qi.prototype.addTo.call(this, t), this._expandIfNotCollapsed()
        },
        onRemove: function () {
            this._map.off("zoomend", this._checkDisabledLayers, this);
            for (var t = 0; t < this._layers.length; t++) this._layers[t].layer.off("add remove", this._onLayerChange, this)
        },
        addBaseLayer: function (t, i) {
            return this._addLayer(t, i), this._map ? this._update() : this
        },
        addOverlay: function (t, i) {
            return this._addLayer(t, i, !0), this._map ? this._update() : this
        },
        removeLayer: function (t) {
            t.off("add remove", this._onLayerChange, this);
            var i = this._getLayer(u(t));
            return i && this._layers.splice(this._layers.indexOf(i), 1), this._map ? this._update() : this
        },
        expand: function () {
            pi(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
            var t = this._map.getSize().y - (this._container.offsetTop + 50);
            return t < this._section.clientHeight ? (pi(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = t + "px") : mi(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this
        },
        collapse: function () {
            return mi(this._container, "leaflet-control-layers-expanded"), this
        },
        _initLayout: function () {
            var t = "leaflet-control-layers",
                i = this._container = hi("div", t),
                e = this.options.collapsed;
            i.setAttribute("aria-haspopup", !0), Ni(i), Ri(i);
            var n = this._section = hi("section", t + "-list");
            e && (this._map.on("click", this.collapse, this), st || Ei(i, {
                mouseenter: this.expand,
                mouseleave: this.collapse
            }, this));
            var o = this._layersLink = hi("a", t + "-toggle", i);
            o.href = "#", o.title = "Layers", Tt ? (Ei(o, "click", ji), Ei(o, "click", this.expand, this)) : Ei(o, "focus", this.expand, this), e || this.expand(), this._baseLayersList = hi("div", t + "-base", n), this._separator = hi("div", t + "-separator", n), this._overlaysList = hi("div", t + "-overlays", n), i.appendChild(n)
        },
        _getLayer: function (t) {
            for (var i = 0; i < this._layers.length; i++)
                if (this._layers[i] && u(this._layers[i].layer) === t) return this._layers[i]
        },
        _addLayer: function (t, i, e) {
            this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
                layer: t,
                name: i,
                overlay: e
            }), this.options.sortLayers && this._layers.sort(a(function (t, i) {
                return this.options.sortFunction(t.layer, i.layer, t.name, i.name)
            }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed()
        },
        _update: function () {
            if (!this._container) return this;
            li(this._baseLayersList), li(this._overlaysList), this._layerControlInputs = [];
            var t, i, e, n, o = 0;
            for (e = 0; e < this._layers.length; e++) n = this._layers[e], this._addItem(n), i = i || n.overlay, t = t || !n.overlay, o += n.overlay ? 0 : 1;
            return this.options.hideSingleBase && (t = t && 1 < o, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = i && t ? "" : "none", this
        },
        _onLayerChange: function (t) {
            this._handlingClick || this._update();
            var i = this._getLayer(u(t.target)),
                e = i.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
            e && this._map.fire(e, i)
        },
        _createRadioElement: function (t, i) {
            var e = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (i ? ' checked="checked"' : "") + "/>",
                n = document.createElement("div");
            return n.innerHTML = e, n.firstChild
        },
        _addItem: function (t) {
            var i, e = document.createElement("label"),
                n = this._map.hasLayer(t.layer);
            t.overlay ? ((i = document.createElement("input")).type = "checkbox", i.className = "leaflet-control-layers-selector", i.defaultChecked = n) : i = this._createRadioElement("leaflet-base-layers_" + u(this), n), this._layerControlInputs.push(i), i.layerId = u(t.layer), Ei(i, "click", this._onInputClick, this);
            var o = document.createElement("span");
            o.innerHTML = " " + t.name;
            var s = document.createElement("div");
            return e.appendChild(s), s.appendChild(i), s.appendChild(o), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(e), this._checkDisabledLayers(), e
        },
        _onInputClick: function () {
            var t, i, e = this._layerControlInputs,
                n = [],
                o = [];
            this._handlingClick = !0;
            for (var s = e.length - 1; 0 <= s; s--) t = e[s], i = this._getLayer(t.layerId).layer, t.checked ? n.push(i) : t.checked || o.push(i);
            for (s = 0; s < o.length; s++) this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
            for (s = 0; s < n.length; s++) this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
            this._handlingClick = !1, this._refocusOnMap()
        },
        _checkDisabledLayers: function () {
            for (var t, i, e = this._layerControlInputs, n = this._map.getZoom(), o = e.length - 1; 0 <= o; o--) t = e[o], i = this._getLayer(t.layerId).layer, t.disabled = void 0 !== i.options.minZoom && n < i.options.minZoom || void 0 !== i.options.maxZoom && n > i.options.maxZoom
        },
        _expandIfNotCollapsed: function () {
            return this._map && !this.options.collapsed && this.expand(), this
        },
        _expand: function () {
            return this.expand()
        },
        _collapse: function () {
            return this.collapse()
        }
    }),
        ie = Qi.extend({
            options: {
                position: "topleft",
                zoomInText: "+",
                zoomInTitle: "Zoom in",
                zoomOutText: "&#x2212;",
                zoomOutTitle: "Zoom out"
            },
            onAdd: function (t) {
                var i = "leaflet-control-zoom",
                    e = hi("div", i + " leaflet-bar"),
                    n = this.options;
                return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, i + "-in", e, this._zoomIn), this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, i + "-out", e, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), e
            },
            onRemove: function (t) {
                t.off("zoomend zoomlevelschange", this._updateDisabled, this)
            },
            disable: function () {
                return this._disabled = !0, this._updateDisabled(), this
            },
            enable: function () {
                return this._disabled = !1, this._updateDisabled(), this
            },
            _zoomIn: function (t) {
                !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
            },
            _zoomOut: function (t) {
                !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
            },
            _createButton: function (t, i, e, n, o) {
                var s = hi("a", e, n);
                return s.innerHTML = t, s.href = "#", s.title = i, s.setAttribute("role", "button"), s.setAttribute("aria-label", i), Ni(s), Ei(s, "click", ji), Ei(s, "click", o, this), Ei(s, "click", this._refocusOnMap, this), s
            },
            _updateDisabled: function () {
                var t = this._map,
                    i = "leaflet-disabled";
                mi(this._zoomInButton, i), mi(this._zoomOutButton, i), !this._disabled && t._zoom !== t.getMinZoom() || pi(this._zoomOutButton, i), !this._disabled && t._zoom !== t.getMaxZoom() || pi(this._zoomInButton, i)
            }
        });
    Ji.mergeOptions({
        zoomControl: !0
    }), Ji.addInitHook(function () {
        this.options.zoomControl && (this.zoomControl = new ie, this.addControl(this.zoomControl))
    });
    var ee = Qi.extend({
        options: {
            position: "bottomleft",
            maxWidth: 100,
            metric: !0,
            imperial: !0
        },
        onAdd: function (t) {
            var i = "leaflet-control-scale",
                e = hi("div", i),
                n = this.options;
            return this._addScales(n, i + "-line", e), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), e
        },
        onRemove: function (t) {
            t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
        },
        _addScales: function (t, i, e) {
            t.metric && (this._mScale = hi("div", i, e)), t.imperial && (this._iScale = hi("div", i, e))
        },
        _update: function () {
            var t = this._map,
                i = t.getSize().y / 2,
                e = t.distance(t.containerPointToLatLng([0, i]), t.containerPointToLatLng([this.options.maxWidth, i]));
            this._updateScales(e)
        },
        _updateScales: function (t) {
            this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t)
        },
        _updateMetric: function (t) {
            var i = this._getRoundNum(t),
                e = i < 1e3 ? i + " m" : i / 1e3 + " km";
            this._updateScale(this._mScale, e, i / t)
        },
        _updateImperial: function (t) {
            var i, e, n, o = 3.2808399 * t;
            5280 < o ? (i = o / 5280, e = this._getRoundNum(i), this._updateScale(this._iScale, e + " mi", e / i)) : (n = this._getRoundNum(o), this._updateScale(this._iScale, n + " ft", n / o))
        },
        _updateScale: function (t, i, e) {
            t.style.width = Math.round(this.options.maxWidth * e) + "px", t.innerHTML = i
        },
        _getRoundNum: function (t) {
            var i = Math.pow(10, (Math.floor(t) + "").length - 1),
                e = t / i;
            return i * (e = 10 <= e ? 10 : 5 <= e ? 5 : 3 <= e ? 3 : 2 <= e ? 2 : 1)
        }
    }),
        ne = Qi.extend({
            options: {
                position: "bottomright",
                prefix: '<a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
            },
            initialize: function (t) {
                p(this, t), this._attributions = {}
            },
            onAdd: function (t) {
                for (var i in (t.attributionControl = this)._container = hi("div", "leaflet-control-attribution"), Ni(this._container), t._layers) t._layers[i].getAttribution && this.addAttribution(t._layers[i].getAttribution());
                return this._update(), this._container
            },
            setPrefix: function (t) {
                return this.options.prefix = t, this._update(), this
            },
            addAttribution: function (t) {
                return t && (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update()), this
            },
            removeAttribution: function (t) {
                return t && this._attributions[t] && (this._attributions[t]--, this._update()), this
            },
            _update: function () {
                if (this._map) {
                    var t = [];
                    for (var i in this._attributions) this._attributions[i] && t.push(i);
                    var e = [];
                    this.options.prefix && e.push(this.options.prefix), t.length && e.push(t.join(", ")), this._container.innerHTML = e.join(" | ")
                }
            }
        });
    Ji.mergeOptions({
        attributionControl: !0
    }), Ji.addInitHook(function () {
        this.options.attributionControl && (new ne).addTo(this)
    });
    Qi.Layers = te, Qi.Zoom = ie, Qi.Scale = ee, Qi.Attribution = ne, $i.layers = function (t, i, e) {
        return new te(t, i, e)
    }, $i.zoom = function (t) {
        return new ie(t)
    }, $i.scale = function (t) {
        return new ee(t)
    }, $i.attribution = function (t) {
        return new ne(t)
    };
    var oe = Z.extend({
        initialize: function (t) {
            this._map = t
        },
        enable: function () {
            return this._enabled || (this._enabled = !0, this.addHooks()), this
        },
        disable: function () {
            return this._enabled && (this._enabled = !1, this.removeHooks()), this
        },
        enabled: function () {
            return !!this._enabled
        }
    });
    oe.addTo = function (t, i) {
        return t.addHandler(i, this), this
    };
    var se, re = {
        Events: E
    },
        ae = Tt ? "touchstart mousedown" : "mousedown",
        he = {
            mousedown: "mouseup",
            touchstart: "touchend",
            pointerdown: "touchend",
            MSPointerDown: "touchend"
        },
        ue = {
            mousedown: "mousemove",
            touchstart: "touchmove",
            pointerdown: "touchmove",
            MSPointerDown: "touchmove"
        },
        le = k.extend({
            options: {
                clickTolerance: 3
            },
            initialize: function (t, i, e, n) {
                p(this, n), this._element = t, this._dragStartTarget = i || t, this._preventOutline = e
            },
            enable: function () {
                this._enabled || (Ei(this._dragStartTarget, ae, this._onDown, this), this._enabled = !0)
            },
            disable: function () {
                this._enabled && (le._dragging === this && this.finishDrag(), Bi(this._dragStartTarget, ae, this._onDown, this), this._enabled = !1, this._moved = !1)
            },
            _onDown: function (t) {
                if (!t._simulated && this._enabled && (this._moved = !1, !di(this._element, "leaflet-zoom-anim") && !(le._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || ((le._dragging = this)._preventOutline && zi(this._element), bi(), $t(), this._moving)))) {
                    this.fire("down");
                    var i = t.touches ? t.touches[0] : t,
                        e = Ci(this._element);
                    this._startPoint = new B(i.clientX, i.clientY), this._parentScale = Si(e), Ei(document, ue[t.type], this._onMove, this), Ei(document, he[t.type], this._onUp, this)
                }
            },
            _onMove: function (t) {
                if (!t._simulated && this._enabled)
                    if (t.touches && 1 < t.touches.length) this._moved = !0;
                    else {
                        var i = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                            e = new B(i.clientX, i.clientY)._subtract(this._startPoint);
                        (e.x || e.y) && (Math.abs(e.x) + Math.abs(e.y) < this.options.clickTolerance || (e.x /= this._parentScale.x, e.y /= this._parentScale.y, Di(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = Pi(this._element).subtract(e), pi(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), pi(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(e), this._moving = !0, C(this._animRequest), this._lastEvent = t, this._animRequest = M(this._updatePosition, this, !0)))
                    }
            },
            _updatePosition: function () {
                var t = {
                    originalEvent: this._lastEvent
                };
                this.fire("predrag", t), wi(this._element, this._newPos), this.fire("drag", t)
            },
            _onUp: function (t) {
                !t._simulated && this._enabled && this.finishDrag()
            },
            finishDrag: function () {
                for (var t in mi(document.body, "leaflet-dragging"), this._lastTarget && (mi(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), ue) Bi(document, ue[t], this._onMove, this), Bi(document, he[t], this._onUp, this);
                Ti(), Qt(), this._moved && this._moving && (C(this._animRequest), this.fire("dragend", {
                    distance: this._newPos.distanceTo(this._startPos)
                })), this._moving = !1, le._dragging = !1
            }
        });

    function ce(t, i) {
        if (!i || !t.length) return t.slice();
        var e = i * i;
        return t = function (t, i) {
            var e = t.length,
                n = new (typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(e);
            n[0] = n[e - 1] = 1,
                function t(i, e, n, o, s) {
                    var r, a, h, u = 0;
                    for (a = o + 1; a <= s - 1; a++) h = fe(i[a], i[o], i[s], !0), u < h && (r = a, u = h);
                    n < u && (e[r] = 1, t(i, e, n, o, r), t(i, e, n, r, s))
                }(t, n, i, 0, e - 1);
            var o, s = [];
            for (o = 0; o < e; o++) n[o] && s.push(t[o]);
            return s
        }(t = function (t, i) {
            for (var e = [t[0]], n = 1, o = 0, s = t.length; n < s; n++) r = t[n], a = t[o], void 0, h = a.x - r.x, u = a.y - r.y, i < h * h + u * u && (e.push(t[n]), o = n);
            var r, a, h, u;
            o < s - 1 && e.push(t[s - 1]);
            return e
        }(t, e), e)
    }

    function _e(t, i, e) {
        return Math.sqrt(fe(t, i, e, !0))
    }

    function de(t, i, e, n, o) {
        var s, r, a, h = n ? se : me(t, e),
            u = me(i, e);
        for (se = u; ;) {
            if (!(h | u)) return [t, i];
            if (h & u) return !1;
            a = me(r = pe(t, i, s = h || u, e, o), e), s === h ? (t = r, h = a) : (i = r, u = a)
        }
    }

    function pe(t, i, e, n, o) {
        var s, r, a = i.x - t.x,
            h = i.y - t.y,
            u = n.min,
            l = n.max;
        return 8 & e ? (s = t.x + a * (l.y - t.y) / h, r = l.y) : 4 & e ? (s = t.x + a * (u.y - t.y) / h, r = u.y) : 2 & e ? (s = l.x, r = t.y + h * (l.x - t.x) / a) : 1 & e && (s = u.x, r = t.y + h * (u.x - t.x) / a), new B(s, r, o)
    }

    function me(t, i) {
        var e = 0;
        return t.x < i.min.x ? e |= 1 : t.x > i.max.x && (e |= 2), t.y < i.min.y ? e |= 4 : t.y > i.max.y && (e |= 8), e
    }

    function fe(t, i, e, n) {
        var o, s = i.x,
            r = i.y,
            a = e.x - s,
            h = e.y - r,
            u = a * a + h * h;
        return 0 < u && (1 < (o = ((t.x - s) * a + (t.y - r) * h) / u) ? (s = e.x, r = e.y) : 0 < o && (s += a * o, r += h * o)), a = t.x - s, h = t.y - r, n ? a * a + h * h : new B(s, r)
    }

    function ge(t) {
        return !v(t[0]) || "object" != typeof t[0][0] && void 0 !== t[0][0]
    }

    function ve(t) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), ge(t)
    }
    var ye = (Object.freeze || Object)({
        simplify: ce,
        pointToSegmentDistance: _e,
        closestPointOnSegment: function (t, i, e) {
            return fe(t, i, e)
        },
        clipSegment: de,
        _getEdgeIntersection: pe,
        _getBitCode: me,
        _sqClosestPointOnSegment: fe,
        isFlat: ge,
        _flat: ve
    });

    function xe(t, i, e) {
        var n, o, s, r, a, h, u, l, c, _ = [1, 4, 2, 8];
        for (o = 0, u = t.length; o < u; o++) t[o]._code = me(t[o], i);
        for (r = 0; r < 4; r++) {
            for (l = _[r], n = [], o = 0, s = (u = t.length) - 1; o < u; s = o++) a = t[o], h = t[s], a._code & l ? h._code & l || ((c = pe(h, a, l, i, e))._code = me(c, i), n.push(c)) : (h._code & l && ((c = pe(h, a, l, i, e))._code = me(c, i), n.push(c)), n.push(a));
            t = n
        }
        return t
    }
    var we, Pe = (Object.freeze || Object)({
        clipPolygon: xe
    }),
        Le = {
            project: function (t) {
                return new B(t.lng, t.lat)
            },
            unproject: function (t) {
                return new j(t.y, t.x)
            },
            bounds: new O([-180, -90], [180, 90])
        },
        be = {
            R: 6378137,
            R_MINOR: 6356752.314245179,
            bounds: new O([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
            project: function (t) {
                var i = Math.PI / 180,
                    e = this.R,
                    n = t.lat * i,
                    o = this.R_MINOR / e,
                    s = Math.sqrt(1 - o * o),
                    r = s * Math.sin(n),
                    a = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - r) / (1 + r), s / 2);
                return n = -e * Math.log(Math.max(a, 1e-10)), new B(t.lng * i * e, n)
            },
            unproject: function (t) {
                for (var i, e = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, s = Math.sqrt(1 - o * o), r = Math.exp(-t.y / n), a = Math.PI / 2 - 2 * Math.atan(r), h = 0, u = .1; h < 15 && 1e-7 < Math.abs(u); h++) i = s * Math.sin(a), i = Math.pow((1 - i) / (1 + i), s / 2), a += u = Math.PI / 2 - 2 * Math.atan(r * i) - a;
                return new j(a * e, t.x * e / n)
            }
        },
        Te = (Object.freeze || Object)({
            LonLat: Le,
            Mercator: be,
            SphericalMercator: q
        }),
        ze = h({}, U, {
            code: "EPSG:3395",
            projection: be,
            transformation: (we = .5 / (Math.PI * be.R), K(we, .5, -we, .5))
        }),
        Me = h({}, U, {
            code: "EPSG:4326",
            projection: Le,
            transformation: K(1 / 180, 1, -1 / 180, .5)
        }),
        Ce = h({}, F, {
            projection: Le,
            transformation: K(1, 0, -1, 0),
            scale: function (t) {
                return Math.pow(2, t)
            },
            zoom: function (t) {
                return Math.log(t) / Math.LN2
            },
            distance: function (t, i) {
                var e = i.lng - t.lng,
                    n = i.lat - t.lat;
                return Math.sqrt(e * e + n * n)
            },
            infinite: !0
        });
    F.Earth = U, F.EPSG3395 = ze, F.EPSG3857 = X, F.EPSG900913 = J, F.EPSG4326 = Me, F.Simple = Ce;
    var Se = k.extend({
        options: {
            pane: "overlayPane",
            attribution: null,
            bubblingMouseEvents: !0
        },
        addTo: function (t) {
            return t.addLayer(this), this
        },
        remove: function () {
            return this.removeFrom(this._map || this._mapToAdd)
        },
        removeFrom: function (t) {
            return t && t.removeLayer(this), this
        },
        getPane: function (t) {
            return this._map.getPane(t ? this.options[t] || t : this.options.pane)
        },
        addInteractiveTarget: function (t) {
            return this._map._targets[u(t)] = this
        },
        removeInteractiveTarget: function (t) {
            return delete this._map._targets[u(t)], this
        },
        getAttribution: function () {
            return this.options.attribution
        },
        _layerAdd: function (t) {
            var i = t.target;
            if (i.hasLayer(this)) {
                if (this._map = i, this._zoomAnimated = i._zoomAnimated, this.getEvents) {
                    var e = this.getEvents();
                    i.on(e, this), this.once("remove", function () {
                        i.off(e, this)
                    }, this)
                }
                this.onAdd(i), this.getAttribution && i.attributionControl && i.attributionControl.addAttribution(this.getAttribution()), this.fire("add"), i.fire("layeradd", {
                    layer: this
                })
            }
        }
    });
    Ji.include({
        addLayer: function (t) {
            if (!t._layerAdd) throw new Error("The provided object is not a Layer.");
            var i = u(t);
            return this._layers[i] || ((this._layers[i] = t)._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t)), this
        },
        removeLayer: function (t) {
            var i = u(t);
            return this._layers[i] && (this._loaded && t.onRemove(this), t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()), delete this._layers[i], this._loaded && (this.fire("layerremove", {
                layer: t
            }), t.fire("remove")), t._map = t._mapToAdd = null), this
        },
        hasLayer: function (t) {
            return !!t && u(t) in this._layers
        },
        eachLayer: function (t, i) {
            for (var e in this._layers) t.call(i, this._layers[e]);
            return this
        },
        _addLayers: function (t) {
            for (var i = 0, e = (t = t ? v(t) ? t : [t] : []).length; i < e; i++) this.addLayer(t[i])
        },
        _addZoomLimit: function (t) {
            !isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[u(t)] = t, this._updateZoomLevels())
        },
        _removeZoomLimit: function (t) {
            var i = u(t);
            this._zoomBoundLayers[i] && (delete this._zoomBoundLayers[i], this._updateZoomLevels())
        },
        _updateZoomLevels: function () {
            var t = 1 / 0,
                i = -1 / 0,
                e = this._getZoomSpan();
            for (var n in this._zoomBoundLayers) {
                var o = this._zoomBoundLayers[n].options;
                t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom), i = void 0 === o.maxZoom ? i : Math.max(i, o.maxZoom)
            }
            this._layersMaxZoom = i === -1 / 0 ? void 0 : i, this._layersMinZoom = t === 1 / 0 ? void 0 : t, e !== this._getZoomSpan() && this.fire("zoomlevelschange"), void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom)
        }
    });
    var Ze = Se.extend({
        initialize: function (t, i) {
            var e, n;
            if (p(this, i), this._layers = {}, t)
                for (e = 0, n = t.length; e < n; e++) this.addLayer(t[e])
        },
        addLayer: function (t) {
            var i = this.getLayerId(t);
            return this._layers[i] = t, this._map && this._map.addLayer(t), this
        },
        removeLayer: function (t) {
            var i = t in this._layers ? t : this.getLayerId(t);
            return this._map && this._layers[i] && this._map.removeLayer(this._layers[i]), delete this._layers[i], this
        },
        hasLayer: function (t) {
            return !!t && (t in this._layers || this.getLayerId(t) in this._layers)
        },
        clearLayers: function () {
            return this.eachLayer(this.removeLayer, this)
        },
        invoke: function (t) {
            var i, e, n = Array.prototype.slice.call(arguments, 1);
            for (i in this._layers) (e = this._layers[i])[t] && e[t].apply(e, n);
            return this
        },
        onAdd: function (t) {
            this.eachLayer(t.addLayer, t)
        },
        onRemove: function (t) {
            this.eachLayer(t.removeLayer, t)
        },
        eachLayer: function (t, i) {
            for (var e in this._layers) t.call(i, this._layers[e]);
            return this
        },
        getLayer: function (t) {
            return this._layers[t]
        },
        getLayers: function () {
            var t = [];
            return this.eachLayer(t.push, t), t
        },
        setZIndex: function (t) {
            return this.invoke("setZIndex", t)
        },
        getLayerId: function (t) {
            return u(t)
        }
    }),
        Ee = Ze.extend({
            addLayer: function (t) {
                return this.hasLayer(t) ? this : (t.addEventParent(this), Ze.prototype.addLayer.call(this, t), this.fire("layeradd", {
                    layer: t
                }))
            },
            removeLayer: function (t) {
                return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), Ze.prototype.removeLayer.call(this, t), this.fire("layerremove", {
                    layer: t
                })) : this
            },
            setStyle: function (t) {
                return this.invoke("setStyle", t)
            },
            bringToFront: function () {
                return this.invoke("bringToFront")
            },
            bringToBack: function () {
                return this.invoke("bringToBack")
            },
            getBounds: function () {
                var t = new N;
                for (var i in this._layers) {
                    var e = this._layers[i];
                    t.extend(e.getBounds ? e.getBounds() : e.getLatLng())
                }
                return t
            }
        }),
        ke = Z.extend({
            options: {
                popupAnchor: [0, 0],
                tooltipAnchor: [0, 0]
            },
            initialize: function (t) {
                p(this, t)
            },
            createIcon: function (t) {
                return this._createIcon("icon", t)
            },
            createShadow: function (t) {
                return this._createIcon("shadow", t)
            },
            _createIcon: function (t, i) {
                var e = this._getIconUrl(t);
                if (!e) {
                    if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
                    return null
                }
                var n = this._createImg(e, i && "IMG" === i.tagName ? i : null);
                return this._setIconStyles(n, t), n
            },
            _setIconStyles: function (t, i) {
                var e = this.options,
                    n = e[i + "Size"];
                "number" == typeof n && (n = [n, n]);
                var o = I(n),
                    s = I("shadow" === i && e.shadowAnchor || e.iconAnchor || o && o.divideBy(2, !0));
                t.className = "leaflet-marker-" + i + " " + (e.className || ""), s && (t.style.marginLeft = -s.x + "px", t.style.marginTop = -s.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px")
            },
            _createImg: function (t, i) {
                return (i = i || document.createElement("img")).src = t, i
            },
            _getIconUrl: function (t) {
                return Ct && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
            }
        });
    var Be = ke.extend({
        options: {
            iconUrl: "marker-icon.png",
            iconRetinaUrl: "marker-icon-2x.png",
            shadowUrl: "marker-shadow.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            tooltipAnchor: [16, -28],
            shadowSize: [41, 41]
        },
        _getIconUrl: function (t) {
            return Be.imagePath || (Be.imagePath = this._detectIconPath()), (this.options.imagePath || Be.imagePath) + ke.prototype._getIconUrl.call(this, t)
        },
        _detectIconPath: function () {
            var t = hi("div", "leaflet-default-icon-path", document.body),
                i = ai(t, "background-image") || ai(t, "backgroundImage");
            return document.body.removeChild(t), i = null === i || 0 !== i.indexOf("url") ? "" : i.replace(/^url\(["']?/, "").replace(/marker-icon\.png["']?\)$/, "")
        }
    }),
        Ae = oe.extend({
            initialize: function (t) {
                this._marker = t
            },
            addHooks: function () {
                var t = this._marker._icon;
                this._draggable || (this._draggable = new le(t, t, !0)), this._draggable.on({
                    dragstart: this._onDragStart,
                    predrag: this._onPreDrag,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                }, this).enable(), pi(t, "leaflet-marker-draggable")
            },
            removeHooks: function () {
                this._draggable.off({
                    dragstart: this._onDragStart,
                    predrag: this._onPreDrag,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                }, this).disable(), this._marker._icon && mi(this._marker._icon, "leaflet-marker-draggable")
            },
            moved: function () {
                return this._draggable && this._draggable._moved
            },
            _adjustPan: function (t) {
                var i = this._marker,
                    e = i._map,
                    n = this._marker.options.autoPanSpeed,
                    o = this._marker.options.autoPanPadding,
                    s = Pi(i._icon),
                    r = e.getPixelBounds(),
                    a = e.getPixelOrigin(),
                    h = R(r.min._subtract(a).add(o), r.max._subtract(a).subtract(o));
                if (!h.contains(s)) {
                    var u = I((Math.max(h.max.x, s.x) - h.max.x) / (r.max.x - h.max.x) - (Math.min(h.min.x, s.x) - h.min.x) / (r.min.x - h.min.x), (Math.max(h.max.y, s.y) - h.max.y) / (r.max.y - h.max.y) - (Math.min(h.min.y, s.y) - h.min.y) / (r.min.y - h.min.y)).multiplyBy(n);
                    e.panBy(u, {
                        animate: !1
                    }), this._draggable._newPos._add(u), this._draggable._startPos._add(u), wi(i._icon, this._draggable._newPos), this._onDrag(t), this._panRequest = M(this._adjustPan.bind(this, t))
                }
            },
            _onDragStart: function () {
                this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup().fire("movestart").fire("dragstart")
            },
            _onPreDrag: function (t) {
                this._marker.options.autoPan && (C(this._panRequest), this._panRequest = M(this._adjustPan.bind(this, t)))
            },
            _onDrag: function (t) {
                var i = this._marker,
                    e = i._shadow,
                    n = Pi(i._icon),
                    o = i._map.layerPointToLatLng(n);
                e && wi(e, n), i._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, i.fire("move", t).fire("drag", t)
            },
            _onDragEnd: function (t) {
                C(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t)
            }
        }),
        Ie = Se.extend({
            options: {
                icon: new Be,
                interactive: !0,
                keyboard: !0,
                title: "",
                alt: "",
                zIndexOffset: 0,
                opacity: 1,
                riseOnHover: !1,
                riseOffset: 250,
                pane: "markerPane",
                shadowPane: "shadowPane",
                bubblingMouseEvents: !1,
                draggable: !1,
                autoPan: !1,
                autoPanPadding: [50, 50],
                autoPanSpeed: 10
            },
            initialize: function (t, i) {
                p(this, i), this._latlng = W(t)
            },
            onAdd: function (t) {
                this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update()
            },
            onRemove: function (t) {
                this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow()
            },
            getEvents: function () {
                return {
                    zoom: this.update,
                    viewreset: this.update
                }
            },
            getLatLng: function () {
                return this._latlng
            },
            setLatLng: function (t) {
                var i = this._latlng;
                return this._latlng = W(t), this.update(), this.fire("move", {
                    oldLatLng: i,
                    latlng: this._latlng
                })
            },
            setZIndexOffset: function (t) {
                return this.options.zIndexOffset = t, this.update()
            },
            getIcon: function () {
                return this.options.icon
            },
            setIcon: function (t) {
                return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this
            },
            getElement: function () {
                return this._icon
            },
            update: function () {
                if (this._icon && this._map) {
                    var t = this._map.latLngToLayerPoint(this._latlng).round();
                    this._setPos(t)
                }
                return this
            },
            _initIcon: function () {
                var t = this.options,
                    i = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
                    e = t.icon.createIcon(this._icon),
                    n = !1;
                e !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (e.title = t.title), "IMG" === e.tagName && (e.alt = t.alt || "")), pi(e, i), t.keyboard && (e.tabIndex = "0"), this._icon = e, t.riseOnHover && this.on({
                    mouseover: this._bringToFront,
                    mouseout: this._resetZIndex
                });
                var o = t.icon.createShadow(this._shadow),
                    s = !1;
                o !== this._shadow && (this._removeShadow(), s = !0), o && (pi(o, i), o.alt = ""), this._shadow = o, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), o && s && this.getPane(t.shadowPane).appendChild(this._shadow)
            },
            _removeIcon: function () {
                this.options.riseOnHover && this.off({
                    mouseover: this._bringToFront,
                    mouseout: this._resetZIndex
                }), ui(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null
            },
            _removeShadow: function () {
                this._shadow && ui(this._shadow), this._shadow = null
            },
            _setPos: function (t) {
                wi(this._icon, t), this._shadow && wi(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
            },
            _updateZIndex: function (t) {
                this._icon.style.zIndex = this._zIndex + t
            },
            _animateZoom: function (t) {
                var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
                this._setPos(i)
            },
            _initInteraction: function () {
                if (this.options.interactive && (pi(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Ae)) {
                    var t = this.options.draggable;
                    this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new Ae(this), t && this.dragging.enable()
                }
            },
            setOpacity: function (t) {
                return this.options.opacity = t, this._map && this._updateOpacity(), this
            },
            _updateOpacity: function () {
                var t = this.options.opacity;
                this._icon && vi(this._icon, t), this._shadow && vi(this._shadow, t)
            },
            _bringToFront: function () {
                this._updateZIndex(this.options.riseOffset)
            },
            _resetZIndex: function () {
                this._updateZIndex(0)
            },
            _getPopupAnchor: function () {
                return this.options.icon.options.popupAnchor
            },
            _getTooltipAnchor: function () {
                return this.options.icon.options.tooltipAnchor
            }
        });
    var Oe = Se.extend({
        options: {
            stroke: !0,
            color: "#3388ff",
            weight: 3,
            opacity: 1,
            lineCap: "round",
            lineJoin: "round",
            dashArray: null,
            dashOffset: null,
            fill: !1,
            fillColor: null,
            fillOpacity: .2,
            fillRule: "evenodd",
            interactive: !0,
            bubblingMouseEvents: !0
        },
        beforeAdd: function (t) {
            this._renderer = t.getRenderer(this)
        },
        onAdd: function () {
            this._renderer._initPath(this), this._reset(), this._renderer._addPath(this)
        },
        onRemove: function () {
            this._renderer._removePath(this)
        },
        redraw: function () {
            return this._map && this._renderer._updatePath(this), this
        },
        setStyle: function (t) {
            return p(this, t), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && t.hasOwnProperty("weight") && this._updateBounds()), this
        },
        bringToFront: function () {
            return this._renderer && this._renderer._bringToFront(this), this
        },
        bringToBack: function () {
            return this._renderer && this._renderer._bringToBack(this), this
        },
        getElement: function () {
            return this._path
        },
        _reset: function () {
            this._project(), this._update()
        },
        _clickTolerance: function () {
            return (this.options.stroke ? this.options.weight / 2 : 0) + this._renderer.options.tolerance
        }
    }),
        Re = Oe.extend({
            options: {
                fill: !0,
                radius: 10
            },
            initialize: function (t, i) {
                p(this, i), this._latlng = W(t), this._radius = this.options.radius
            },
            setLatLng: function (t) {
                return this._latlng = W(t), this.redraw(), this.fire("move", {
                    latlng: this._latlng
                })
            },
            getLatLng: function () {
                return this._latlng
            },
            setRadius: function (t) {
                return this.options.radius = this._radius = t, this.redraw()
            },
            getRadius: function () {
                return this._radius
            },
            setStyle: function (t) {
                var i = t && t.radius || this._radius;
                return Oe.prototype.setStyle.call(this, t), this.setRadius(i), this
            },
            _project: function () {
                this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds()
            },
            _updateBounds: function () {
                var t = this._radius,
                    i = this._radiusY || t,
                    e = this._clickTolerance(),
                    n = [t + e, i + e];
                this._pxBounds = new O(this._point.subtract(n), this._point.add(n))
            },
            _update: function () {
                this._map && this._updatePath()
            },
            _updatePath: function () {
                this._renderer._updateCircle(this)
            },
            _empty: function () {
                return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
            },
            _containsPoint: function (t) {
                return t.distanceTo(this._point) <= this._radius + this._clickTolerance()
            }
        });
    var Ne = Re.extend({
        initialize: function (t, i, e) {
            if ("number" == typeof i && (i = h({}, e, {
                radius: i
            })), p(this, i), this._latlng = W(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
            this._mRadius = this.options.radius
        },
        setRadius: function (t) {
            return this._mRadius = t, this.redraw()
        },
        getRadius: function () {
            return this._mRadius
        },
        getBounds: function () {
            var t = [this._radius, this._radiusY || this._radius];
            return new N(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)))
        },
        setStyle: Oe.prototype.setStyle,
        _project: function () {
            var t = this._latlng.lng,
                i = this._latlng.lat,
                e = this._map,
                n = e.options.crs;
            if (n.distance === U.distance) {
                var o = Math.PI / 180,
                    s = this._mRadius / U.R / o,
                    r = e.project([i + s, t]),
                    a = e.project([i - s, t]),
                    h = r.add(a).divideBy(2),
                    u = e.unproject(h).lat,
                    l = Math.acos((Math.cos(s * o) - Math.sin(i * o) * Math.sin(u * o)) / (Math.cos(i * o) * Math.cos(u * o))) / o;
                !isNaN(l) && 0 !== l || (l = s / Math.cos(Math.PI / 180 * i)), this._point = h.subtract(e.getPixelOrigin()), this._radius = isNaN(l) ? 0 : h.x - e.project([u, t - l]).x, this._radiusY = h.y - r.y
            } else {
                var c = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
                this._point = e.latLngToLayerPoint(this._latlng), this._radius = this._point.x - e.latLngToLayerPoint(c).x
            }
            this._updateBounds()
        }
    });
    var De = Oe.extend({
        options: {
            smoothFactor: 1,
            noClip: !1
        },
        initialize: function (t, i) {
            p(this, i), this._setLatLngs(t)
        },
        getLatLngs: function () {
            return this._latlngs
        },
        setLatLngs: function (t) {
            return this._setLatLngs(t), this.redraw()
        },
        isEmpty: function () {
            return !this._latlngs.length
        },
        closestLayerPoint: function (t) {
            for (var i, e, n = 1 / 0, o = null, s = fe, r = 0, a = this._parts.length; r < a; r++)
                for (var h = this._parts[r], u = 1, l = h.length; u < l; u++) {
                    var c = s(t, i = h[u - 1], e = h[u], !0);
                    c < n && (n = c, o = s(t, i, e))
                }
            return o && (o.distance = Math.sqrt(n)), o
        },
        getCenter: function () {
            if (!this._map) throw new Error("Must add layer to map before using getCenter()");
            var t, i, e, n, o, s, r, a = this._rings[0],
                h = a.length;
            if (!h) return null;
            for (i = t = 0; t < h - 1; t++) i += a[t].distanceTo(a[t + 1]) / 2;
            if (0 === i) return this._map.layerPointToLatLng(a[0]);
            for (n = t = 0; t < h - 1; t++)
                if (o = a[t], s = a[t + 1], i < (n += e = o.distanceTo(s))) return r = (n - i) / e, this._map.layerPointToLatLng([s.x - r * (s.x - o.x), s.y - r * (s.y - o.y)])
        },
        getBounds: function () {
            return this._bounds
        },
        addLatLng: function (t, i) {
            return i = i || this._defaultShape(), t = W(t), i.push(t), this._bounds.extend(t), this.redraw()
        },
        _setLatLngs: function (t) {
            this._bounds = new N, this._latlngs = this._convertLatLngs(t)
        },
        _defaultShape: function () {
            return ge(this._latlngs) ? this._latlngs : this._latlngs[0]
        },
        _convertLatLngs: function (t) {
            for (var i = [], e = ge(t), n = 0, o = t.length; n < o; n++) e ? (i[n] = W(t[n]), this._bounds.extend(i[n])) : i[n] = this._convertLatLngs(t[n]);
            return i
        },
        _project: function () {
            var t = new O;
            this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t), this._bounds.isValid() && t.isValid() && (this._rawPxBounds = t, this._updateBounds())
        },
        _updateBounds: function () {
            var t = this._clickTolerance(),
                i = new B(t, t);
            this._pxBounds = new O([this._rawPxBounds.min.subtract(i), this._rawPxBounds.max.add(i)])
        },
        _projectLatlngs: function (t, i, e) {
            var n, o, s = t[0] instanceof j,
                r = t.length;
            if (s) {
                for (o = [], n = 0; n < r; n++) o[n] = this._map.latLngToLayerPoint(t[n]), e.extend(o[n]);
                i.push(o)
            } else
                for (n = 0; n < r; n++) this._projectLatlngs(t[n], i, e)
        },
        _clipPoints: function () {
            var t = this._renderer._bounds;
            if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
                if (this.options.noClip) this._parts = this._rings;
                else {
                    var i, e, n, o, s, r, a, h = this._parts;
                    for (n = i = 0, o = this._rings.length; i < o; i++)
                        for (e = 0, s = (a = this._rings[i]).length; e < s - 1; e++)(r = de(a[e], a[e + 1], t, e, !0)) && (h[n] = h[n] || [], h[n].push(r[0]), r[1] === a[e + 1] && e !== s - 2 || (h[n].push(r[1]), n++))
                }
        },
        _simplifyPoints: function () {
            for (var t = this._parts, i = this.options.smoothFactor, e = 0, n = t.length; e < n; e++) t[e] = ce(t[e], i)
        },
        _update: function () {
            this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath())
        },
        _updatePath: function () {
            this._renderer._updatePoly(this)
        },
        _containsPoint: function (t, i) {
            var e, n, o, s, r, a, h = this._clickTolerance();
            if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
            for (e = 0, s = this._parts.length; e < s; e++)
                for (n = 0, o = (r = (a = this._parts[e]).length) - 1; n < r; o = n++)
                    if ((i || 0 !== n) && _e(t, a[o], a[n]) <= h) return !0;
            return !1
        }
    });
    De._flat = ve;
    var je = De.extend({
        options: {
            fill: !0
        },
        isEmpty: function () {
            return !this._latlngs.length || !this._latlngs[0].length
        },
        getCenter: function () {
            if (!this._map) throw new Error("Must add layer to map before using getCenter()");
            var t, i, e, n, o, s, r, a, h, u = this._rings[0],
                l = u.length;
            if (!l) return null;
            for (s = r = a = 0, t = 0, i = l - 1; t < l; i = t++) e = u[t], n = u[i], o = e.y * n.x - n.y * e.x, r += (e.x + n.x) * o, a += (e.y + n.y) * o, s += 3 * o;
            return h = 0 === s ? u[0] : [r / s, a / s], this._map.layerPointToLatLng(h)
        },
        _convertLatLngs: function (t) {
            var i = De.prototype._convertLatLngs.call(this, t),
                e = i.length;
            return 2 <= e && i[0] instanceof j && i[0].equals(i[e - 1]) && i.pop(), i
        },
        _setLatLngs: function (t) {
            De.prototype._setLatLngs.call(this, t), ge(this._latlngs) && (this._latlngs = [this._latlngs])
        },
        _defaultShape: function () {
            return ge(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0]
        },
        _clipPoints: function () {
            var t = this._renderer._bounds,
                i = this.options.weight,
                e = new B(i, i);
            if (t = new O(t.min.subtract(e), t.max.add(e)), this._parts = [], this._pxBounds && this._pxBounds.intersects(t))
                if (this.options.noClip) this._parts = this._rings;
                else
                    for (var n, o = 0, s = this._rings.length; o < s; o++)(n = xe(this._rings[o], t, !0)).length && this._parts.push(n)
        },
        _updatePath: function () {
            this._renderer._updatePoly(this, !0)
        },
        _containsPoint: function (t) {
            var i, e, n, o, s, r, a, h, u = !1;
            if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
            for (o = 0, a = this._parts.length; o < a; o++)
                for (s = 0, r = (h = (i = this._parts[o]).length) - 1; s < h; r = s++) e = i[s], n = i[r], e.y > t.y != n.y > t.y && t.x < (n.x - e.x) * (t.y - e.y) / (n.y - e.y) + e.x && (u = !u);
            return u || De.prototype._containsPoint.call(this, t, !0)
        }
    });
    var We = Ee.extend({
        initialize: function (t, i) {
            p(this, i), this._layers = {}, t && this.addData(t)
        },
        addData: function (t) {
            var i, e, n, o = v(t) ? t : t.features;
            if (o) {
                for (i = 0, e = o.length; i < e; i++)((n = o[i]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
                return this
            }
            var s = this.options;
            if (s.filter && !s.filter(t)) return this;
            var r = He(t, s);
            return r ? (r.feature = Ke(t), r.defaultOptions = r.options, this.resetStyle(r), s.onEachFeature && s.onEachFeature(t, r), this.addLayer(r)) : this
        },
        resetStyle: function (t) {
            return t.options = h({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this
        },
        setStyle: function (i) {
            return this.eachLayer(function (t) {
                this._setLayerStyle(t, i)
            }, this)
        },
        _setLayerStyle: function (t, i) {
            t.setStyle && ("function" == typeof i && (i = i(t.feature)), t.setStyle(i))
        }
    });

    function He(t, i) {
        var e, n, o, s, r = "Feature" === t.type ? t.geometry : t,
            a = r ? r.coordinates : null,
            h = [],
            u = i && i.pointToLayer,
            l = i && i.coordsToLatLng || Fe;
        if (!a && !r) return null;
        switch (r.type) {
            case "Point":
                return e = l(a), u ? u(t, e) : new Ie(e);
            case "MultiPoint":
                for (o = 0, s = a.length; o < s; o++) e = l(a[o]), h.push(u ? u(t, e) : new Ie(e));
                return new Ee(h);
            case "LineString":
            case "MultiLineString":
                return n = Ue(a, "LineString" === r.type ? 0 : 1, l), new De(n, i);
            case "Polygon":
            case "MultiPolygon":
                return n = Ue(a, "Polygon" === r.type ? 1 : 2, l), new je(n, i);
            case "GeometryCollection":
                for (o = 0, s = r.geometries.length; o < s; o++) {
                    var c = He({
                        geometry: r.geometries[o],
                        type: "Feature",
                        properties: t.properties
                    }, i);
                    c && h.push(c)
                }
                return new Ee(h);
            default:
                throw new Error("Invalid GeoJSON object.")
        }
    }

    function Fe(t) {
        return new j(t[1], t[0], t[2])
    }

    function Ue(t, i, e) {
        for (var n, o = [], s = 0, r = t.length; s < r; s++) n = i ? Ue(t[s], i - 1, e) : (e || Fe)(t[s]), o.push(n);
        return o
    }

    function Ve(t, i) {
        return i = "number" == typeof i ? i : 6, void 0 !== t.alt ? [c(t.lng, i), c(t.lat, i), c(t.alt, i)] : [c(t.lng, i), c(t.lat, i)]
    }

    function qe(t, i, e, n) {
        for (var o = [], s = 0, r = t.length; s < r; s++) o.push(i ? qe(t[s], i - 1, e, n) : Ve(t[s], n));
        return !i && e && o.push(o[0]), o
    }

    function Ge(t, i) {
        return t.feature ? h({}, t.feature, {
            geometry: i
        }) : Ke(i)
    }

    function Ke(t) {
        return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
            type: "Feature",
            properties: {},
            geometry: t
        }
    }
    var Ye = {
        toGeoJSON: function (t) {
            return Ge(this, {
                type: "Point",
                coordinates: Ve(this.getLatLng(), t)
            })
        }
    };

    function Xe(t, i) {
        return new We(t, i)
    }
    Ie.include(Ye), Ne.include(Ye), Re.include(Ye), De.include({
        toGeoJSON: function (t) {
            var i = !ge(this._latlngs);
            return Ge(this, {
                type: (i ? "Multi" : "") + "LineString",
                coordinates: qe(this._latlngs, i ? 1 : 0, !1, t)
            })
        }
    }), je.include({
        toGeoJSON: function (t) {
            var i = !ge(this._latlngs),
                e = i && !ge(this._latlngs[0]),
                n = qe(this._latlngs, e ? 2 : i ? 1 : 0, !0, t);
            return i || (n = [n]), Ge(this, {
                type: (e ? "Multi" : "") + "Polygon",
                coordinates: n
            })
        }
    }), Ze.include({
        toMultiPoint: function (i) {
            var e = [];
            return this.eachLayer(function (t) {
                e.push(t.toGeoJSON(i).geometry.coordinates)
            }), Ge(this, {
                type: "MultiPoint",
                coordinates: e
            })
        },
        toGeoJSON: function (n) {
            var t = this.feature && this.feature.geometry && this.feature.geometry.type;
            if ("MultiPoint" === t) return this.toMultiPoint(n);
            var o = "GeometryCollection" === t,
                s = [];
            return this.eachLayer(function (t) {
                if (t.toGeoJSON) {
                    var i = t.toGeoJSON(n);
                    if (o) s.push(i.geometry);
                    else {
                        var e = Ke(i);
                        "FeatureCollection" === e.type ? s.push.apply(s, e.features) : s.push(e)
                    }
                }
            }), o ? Ge(this, {
                geometries: s,
                type: "GeometryCollection"
            }) : {
                    type: "FeatureCollection",
                    features: s
                }
        }
    });
    var Je = Xe,
        $e = Se.extend({
            options: {
                opacity: 1,
                alt: "",
                interactive: !1,
                crossOrigin: !1,
                errorOverlayUrl: "",
                zIndex: 1,
                className: ""
            },
            initialize: function (t, i, e) {
                this._url = t, this._bounds = D(i), p(this, e)
            },
            onAdd: function () {
                this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (pi(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset()
            },
            onRemove: function () {
                ui(this._image), this.options.interactive && this.removeInteractiveTarget(this._image)
            },
            setOpacity: function (t) {
                return this.options.opacity = t, this._image && this._updateOpacity(), this
            },
            setStyle: function (t) {
                return t.opacity && this.setOpacity(t.opacity), this
            },
            bringToFront: function () {
                return this._map && ci(this._image), this
            },
            bringToBack: function () {
                return this._map && _i(this._image), this
            },
            setUrl: function (t) {
                return this._url = t, this._image && (this._image.src = t), this
            },
            setBounds: function (t) {
                return this._bounds = D(t), this._map && this._reset(), this
            },
            getEvents: function () {
                var t = {
                    zoom: this._reset,
                    viewreset: this._reset
                };
                return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
            },
            setZIndex: function (t) {
                return this.options.zIndex = t, this._updateZIndex(), this
            },
            getBounds: function () {
                return this._bounds
            },
            getElement: function () {
                return this._image
            },
            _initImage: function () {
                var t = "IMG" === this._url.tagName,
                    i = this._image = t ? this._url : hi("img");
                pi(i, "leaflet-image-layer"), this._zoomAnimated && pi(i, "leaflet-zoom-animated"), this.options.className && pi(i, this.options.className), i.onselectstart = l, i.onmousemove = l, i.onload = a(this.fire, this, "load"), i.onerror = a(this._overlayOnError, this, "error"), !this.options.crossOrigin && "" !== this.options.crossOrigin || (i.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), t ? this._url = i.src : (i.src = this._url, i.alt = this.options.alt)
            },
            _animateZoom: function (t) {
                var i = this._map.getZoomScale(t.zoom),
                    e = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
                xi(this._image, e, i)
            },
            _reset: function () {
                var t = this._image,
                    i = new O(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
                    e = i.getSize();
                wi(t, i.min), t.style.width = e.x + "px", t.style.height = e.y + "px"
            },
            _updateOpacity: function () {
                vi(this._image, this.options.opacity)
            },
            _updateZIndex: function () {
                this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex)
            },
            _overlayOnError: function () {
                this.fire("error");
                var t = this.options.errorOverlayUrl;
                t && this._url !== t && (this._url = t, this._image.src = t)
            }
        }),
        Qe = $e.extend({
            options: {
                autoplay: !0,
                loop: !0,
                keepAspectRatio: !0
            },
            _initImage: function () {
                var t = "VIDEO" === this._url.tagName,
                    i = this._image = t ? this._url : hi("video");
                if (pi(i, "leaflet-image-layer"), this._zoomAnimated && pi(i, "leaflet-zoom-animated"), i.onselectstart = l, i.onmousemove = l, i.onloadeddata = a(this.fire, this, "load"), t) {
                    for (var e = i.getElementsByTagName("source"), n = [], o = 0; o < e.length; o++) n.push(e[o].src);
                    this._url = 0 < e.length ? n : [i.src]
                } else {
                    v(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && i.style.hasOwnProperty("objectFit") && (i.style.objectFit = "fill"), i.autoplay = !!this.options.autoplay, i.loop = !!this.options.loop;
                    for (var s = 0; s < this._url.length; s++) {
                        var r = hi("source");
                        r.src = this._url[s], i.appendChild(r)
                    }
                }
            }
        });
    var tn = $e.extend({
        _initImage: function () {
            var t = this._image = this._url;
            pi(t, "leaflet-image-layer"), this._zoomAnimated && pi(t, "leaflet-zoom-animated"), t.onselectstart = l, t.onmousemove = l
        }
    });
    var en = Se.extend({
        options: {
            offset: [0, 7],
            className: "",
            pane: "popupPane"
        },
        initialize: function (t, i) {
            p(this, t), this._source = i
        },
        onAdd: function (t) {
            this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && vi(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && vi(this._container, 1), this.bringToFront()
        },
        onRemove: function (t) {
            t._fadeAnimated ? (vi(this._container, 0), this._removeTimeout = setTimeout(a(ui, void 0, this._container), 200)) : ui(this._container)
        },
        getLatLng: function () {
            return this._latlng
        },
        setLatLng: function (t) {
            return this._latlng = W(t), this._map && (this._updatePosition(), this._adjustPan()), this
        },
        getContent: function () {
            return this._content
        },
        setContent: function (t) {
            return this._content = t, this.update(), this
        },
        getElement: function () {
            return this._container
        },
        update: function () {
            this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
        },
        getEvents: function () {
            var t = {
                zoom: this._updatePosition,
                viewreset: this._updatePosition
            };
            return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
        },
        isOpen: function () {
            return !!this._map && this._map.hasLayer(this)
        },
        bringToFront: function () {
            return this._map && ci(this._container), this
        },
        bringToBack: function () {
            return this._map && _i(this._container), this
        },
        _prepareOpen: function (t, i, e) {
            if (i instanceof Se || (e = i, i = t), i instanceof Ee)
                for (var n in t._layers) {
                    i = t._layers[n];
                    break
                }
            if (!e)
                if (i.getCenter) e = i.getCenter();
                else {
                    if (!i.getLatLng) throw new Error("Unable to get source layer LatLng.");
                    e = i.getLatLng()
                } return this._source = i, this.update(), e
        },
        _updateContent: function () {
            if (this._content) {
                var t = this._contentNode,
                    i = "function" == typeof this._content ? this._content(this._source || this) : this._content;
                if ("string" == typeof i) t.innerHTML = i;
                else {
                    for (; t.hasChildNodes();) t.removeChild(t.firstChild);
                    t.appendChild(i)
                }
                this.fire("contentupdate")
            }
        },
        _updatePosition: function () {
            if (this._map) {
                var t = this._map.latLngToLayerPoint(this._latlng),
                    i = I(this.options.offset),
                    e = this._getAnchor();
                this._zoomAnimated ? wi(this._container, t.add(e)) : i = i.add(t).add(e);
                var n = this._containerBottom = -i.y,
                    o = this._containerLeft = -Math.round(this._containerWidth / 2) + i.x;
                this._container.style.bottom = n + "px", this._container.style.left = o + "px"
            }
        },
        _getAnchor: function () {
            return [0, 0]
        }
    }),
        nn = en.extend({
            options: {
                maxWidth: 300,
                minWidth: 50,
                maxHeight: null,
                autoPan: !0,
                autoPanPaddingTopLeft: null,
                autoPanPaddingBottomRight: null,
                autoPanPadding: [5, 5],
                keepInView: !1,
                closeButton: !0,
                autoClose: !0,
                closeOnEscapeKey: !0,
                className: ""
            },
            openOn: function (t) {
                return t.openPopup(this), this
            },
            onAdd: function (t) {
                en.prototype.onAdd.call(this, t), t.fire("popupopen", {
                    popup: this
                }), this._source && (this._source.fire("popupopen", {
                    popup: this
                }, !0), this._source instanceof Oe || this._source.on("preclick", Oi))
            },
            onRemove: function (t) {
                en.prototype.onRemove.call(this, t), t.fire("popupclose", {
                    popup: this
                }), this._source && (this._source.fire("popupclose", {
                    popup: this
                }, !0), this._source instanceof Oe || this._source.off("preclick", Oi))
            },
            getEvents: function () {
                var t = en.prototype.getEvents.call(this);
                return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t
            },
            _close: function () {
                this._map && this._map.closePopup(this)
            },
            _initLayout: function () {
                var t = "leaflet-popup",
                    i = this._container = hi("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated"),
                    e = this._wrapper = hi("div", t + "-content-wrapper", i);
                if (this._contentNode = hi("div", t + "-content", e), Ni(e), Ri(this._contentNode), Ei(e, "contextmenu", Oi), this._tipContainer = hi("div", t + "-tip-container", i), this._tip = hi("div", t + "-tip", this._tipContainer), this.options.closeButton) {
                    var n = this._closeButton = hi("a", t + "-close-button", i);
                    n.href = "#close", n.innerHTML = "&#215;", Ei(n, "click", this._onCloseButtonClick, this)
                }
            },
            _updateLayout: function () {
                var t = this._contentNode,
                    i = t.style;
                i.width = "", i.whiteSpace = "nowrap";
                var e = t.offsetWidth;
                e = Math.min(e, this.options.maxWidth), e = Math.max(e, this.options.minWidth), i.width = e + 1 + "px", i.whiteSpace = "", i.height = "";
                var n = t.offsetHeight,
                    o = this.options.maxHeight,
                    s = "leaflet-popup-scrolled";
                o && o < n ? (i.height = o + "px", pi(t, s)) : mi(t, s), this._containerWidth = this._container.offsetWidth
            },
            _animateZoom: function (t) {
                var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
                    e = this._getAnchor();
                wi(this._container, i.add(e))
            },
            _adjustPan: function () {
                if (this.options.autoPan) {
                    this._map._panAnim && this._map._panAnim.stop();
                    var t = this._map,
                        i = parseInt(ai(this._container, "marginBottom"), 10) || 0,
                        e = this._container.offsetHeight + i,
                        n = this._containerWidth,
                        o = new B(this._containerLeft, -e - this._containerBottom);
                    o._add(Pi(this._container));
                    var s = t.layerPointToContainerPoint(o),
                        r = I(this.options.autoPanPadding),
                        a = I(this.options.autoPanPaddingTopLeft || r),
                        h = I(this.options.autoPanPaddingBottomRight || r),
                        u = t.getSize(),
                        l = 0,
                        c = 0;
                    s.x + n + h.x > u.x && (l = s.x + n - u.x + h.x), s.x - l - a.x < 0 && (l = s.x - a.x), s.y + e + h.y > u.y && (c = s.y + e - u.y + h.y), s.y - c - a.y < 0 && (c = s.y - a.y), (l || c) && t.fire("autopanstart").panBy([l, c])
                }
            },
            _onCloseButtonClick: function (t) {
                this._close(), ji(t)
            },
            _getAnchor: function () {
                return I(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0])
            }
        });
    Ji.mergeOptions({
        closePopupOnClick: !0
    }), Ji.include({
        openPopup: function (t, i, e) {
            return t instanceof nn || (t = new nn(e).setContent(t)), i && t.setLatLng(i), this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = t, this.addLayer(t))
        },
        closePopup: function (t) {
            return t && t !== this._popup || (t = this._popup, this._popup = null), t && this.removeLayer(t), this
        }
    }), Se.include({
        bindPopup: function (t, i) {
            return t instanceof nn ? (p(t, i), (this._popup = t)._source = this) : (this._popup && !i || (this._popup = new nn(i, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
            }), this._popupHandlersAdded = !0), this
        },
        unbindPopup: function () {
            return this._popup && (this.off({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
            }), this._popupHandlersAdded = !1, this._popup = null), this
        },
        openPopup: function (t, i) {
            return this._popup && this._map && (i = this._popup._prepareOpen(this, t, i), this._map.openPopup(this._popup, i)), this
        },
        closePopup: function () {
            return this._popup && this._popup._close(), this
        },
        togglePopup: function (t) {
            return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this
        },
        isPopupOpen: function () {
            return !!this._popup && this._popup.isOpen()
        },
        setPopupContent: function (t) {
            return this._popup && this._popup.setContent(t), this
        },
        getPopup: function () {
            return this._popup
        },
        _openPopup: function (t) {
            var i = t.layer || t.target;
            this._popup && this._map && (ji(t), i instanceof Oe ? this.openPopup(t.layer || t.target, t.latlng) : this._map.hasLayer(this._popup) && this._popup._source === i ? this.closePopup() : this.openPopup(i, t.latlng))
        },
        _movePopup: function (t) {
            this._popup.setLatLng(t.latlng)
        },
        _onKeyPress: function (t) {
            13 === t.originalEvent.keyCode && this._openPopup(t)
        }
    });
    var on = en.extend({
        options: {
            pane: "tooltipPane",
            offset: [0, 0],
            direction: "auto",
            permanent: !1,
            sticky: !1,
            interactive: !1,
            opacity: .9
        },
        onAdd: function (t) {
            en.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", {
                tooltip: this
            }), this._source && this._source.fire("tooltipopen", {
                tooltip: this
            }, !0)
        },
        onRemove: function (t) {
            en.prototype.onRemove.call(this, t), t.fire("tooltipclose", {
                tooltip: this
            }), this._source && this._source.fire("tooltipclose", {
                tooltip: this
            }, !0)
        },
        getEvents: function () {
            var t = en.prototype.getEvents.call(this);
            return Tt && !this.options.permanent && (t.preclick = this._close), t
        },
        _close: function () {
            this._map && this._map.closeTooltip(this)
        },
        _initLayout: function () {
            var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
            this._contentNode = this._container = hi("div", t)
        },
        _updateLayout: function () { },
        _adjustPan: function () { },
        _setPosition: function (t) {
            var i = this._map,
                e = this._container,
                n = i.latLngToContainerPoint(i.getCenter()),
                o = i.layerPointToContainerPoint(t),
                s = this.options.direction,
                r = e.offsetWidth,
                a = e.offsetHeight,
                h = I(this.options.offset),
                u = this._getAnchor();
            t = "top" === s ? t.add(I(-r / 2 + h.x, -a + h.y + u.y, !0)) : "bottom" === s ? t.subtract(I(r / 2 - h.x, -h.y, !0)) : "center" === s ? t.subtract(I(r / 2 + h.x, a / 2 - u.y + h.y, !0)) : "right" === s || "auto" === s && o.x < n.x ? (s = "right", t.add(I(h.x + u.x, u.y - a / 2 + h.y, !0))) : (s = "left", t.subtract(I(r + u.x - h.x, a / 2 - u.y - h.y, !0))), mi(e, "leaflet-tooltip-right"), mi(e, "leaflet-tooltip-left"), mi(e, "leaflet-tooltip-top"), mi(e, "leaflet-tooltip-bottom"), pi(e, "leaflet-tooltip-" + s), wi(e, t)
        },
        _updatePosition: function () {
            var t = this._map.latLngToLayerPoint(this._latlng);
            this._setPosition(t)
        },
        setOpacity: function (t) {
            this.options.opacity = t, this._container && vi(this._container, t)
        },
        _animateZoom: function (t) {
            var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
            this._setPosition(i)
        },
        _getAnchor: function () {
            return I(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0])
        }
    });
    Ji.include({
        openTooltip: function (t, i, e) {
            return t instanceof on || (t = new on(e).setContent(t)), i && t.setLatLng(i), this.hasLayer(t) ? this : this.addLayer(t)
        },
        closeTooltip: function (t) {
            return t && this.removeLayer(t), this
        }
    }), Se.include({
        bindTooltip: function (t, i) {
            return t instanceof on ? (p(t, i), (this._tooltip = t)._source = this) : (this._tooltip && !i || (this._tooltip = new on(i, this)), this._tooltip.setContent(t)), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this
        },
        unbindTooltip: function () {
            return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this
        },
        _initTooltipInteractions: function (t) {
            if (t || !this._tooltipHandlersAdded) {
                var i = t ? "off" : "on",
                    e = {
                        remove: this.closeTooltip,
                        move: this._moveTooltip
                    };
                this._tooltip.options.permanent ? e.add = this._openTooltip : (e.mouseover = this._openTooltip, e.mouseout = this.closeTooltip, this._tooltip.options.sticky && (e.mousemove = this._moveTooltip), Tt && (e.click = this._openTooltip)), this[i](e), this._tooltipHandlersAdded = !t
            }
        },
        openTooltip: function (t, i) {
            return this._tooltip && this._map && (i = this._tooltip._prepareOpen(this, t, i), this._map.openTooltip(this._tooltip, i), this._tooltip.options.interactive && this._tooltip._container && (pi(this._tooltip._container, "leaflet-clickable"), this.addInteractiveTarget(this._tooltip._container))), this
        },
        closeTooltip: function () {
            return this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (mi(this._tooltip._container, "leaflet-clickable"), this.removeInteractiveTarget(this._tooltip._container))), this
        },
        toggleTooltip: function (t) {
            return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this
        },
        isTooltipOpen: function () {
            return this._tooltip.isOpen()
        },
        setTooltipContent: function (t) {
            return this._tooltip && this._tooltip.setContent(t), this
        },
        getTooltip: function () {
            return this._tooltip
        },
        _openTooltip: function (t) {
            var i = t.layer || t.target;
            this._tooltip && this._map && this.openTooltip(i, this._tooltip.options.sticky ? t.latlng : void 0)
        },
        _moveTooltip: function (t) {
            var i, e, n = t.latlng;
            this._tooltip.options.sticky && t.originalEvent && (i = this._map.mouseEventToContainerPoint(t.originalEvent), e = this._map.containerPointToLayerPoint(i), n = this._map.layerPointToLatLng(e)), this._tooltip.setLatLng(n)
        }
    });
    var sn = ke.extend({
        options: {
            iconSize: [12, 12],
            html: !1,
            bgPos: null,
            className: "leaflet-div-icon"
        },
        createIcon: function (t) {
            var i = t && "DIV" === t.tagName ? t : document.createElement("div"),
                e = this.options;
            if (e.html instanceof Element ? (li(i), i.appendChild(e.html)) : i.innerHTML = !1 !== e.html ? e.html : "", e.bgPos) {
                var n = I(e.bgPos);
                i.style.backgroundPosition = -n.x + "px " + -n.y + "px"
            }
            return this._setIconStyles(i, "icon"), i
        },
        createShadow: function () {
            return null
        }
    });
    ke.Default = Be;
    var rn = Se.extend({
        options: {
            tileSize: 256,
            opacity: 1,
            updateWhenIdle: xt,
            updateWhenZooming: !0,
            updateInterval: 200,
            zIndex: 1,
            bounds: null,
            minZoom: 0,
            maxZoom: void 0,
            maxNativeZoom: void 0,
            minNativeZoom: void 0,
            noWrap: !1,
            pane: "tilePane",
            className: "",
            keepBuffer: 2
        },
        initialize: function (t) {
            p(this, t)
        },
        onAdd: function () {
            this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView(), this._update()
        },
        beforeAdd: function (t) {
            t._addZoomLimit(this)
        },
        onRemove: function (t) {
            this._removeAllTiles(), ui(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = void 0
        },
        bringToFront: function () {
            return this._map && (ci(this._container), this._setAutoZIndex(Math.max)), this
        },
        bringToBack: function () {
            return this._map && (_i(this._container), this._setAutoZIndex(Math.min)), this
        },
        getContainer: function () {
            return this._container
        },
        setOpacity: function (t) {
            return this.options.opacity = t, this._updateOpacity(), this
        },
        setZIndex: function (t) {
            return this.options.zIndex = t, this._updateZIndex(), this
        },
        isLoading: function () {
            return this._loading
        },
        redraw: function () {
            return this._map && (this._removeAllTiles(), this._update()), this
        },
        getEvents: function () {
            var t = {
                viewprereset: this._invalidateAll,
                viewreset: this._resetView,
                zoom: this._resetView,
                moveend: this._onMoveEnd
            };
            return this.options.updateWhenIdle || (this._onMove || (this._onMove = o(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t
        },
        createTile: function () {
            return document.createElement("div")
        },
        getTileSize: function () {
            var t = this.options.tileSize;
            return t instanceof B ? t : new B(t, t)
        },
        _updateZIndex: function () {
            this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
        },
        _setAutoZIndex: function (t) {
            for (var i, e = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, s = e.length; o < s; o++) i = e[o].style.zIndex, e[o] !== this._container && i && (n = t(n, +i));
            isFinite(n) && (this.options.zIndex = n + t(-1, 1), this._updateZIndex())
        },
        _updateOpacity: function () {
            if (this._map && !et) {
                vi(this._container, this.options.opacity);
                var t = +new Date,
                    i = !1,
                    e = !1;
                for (var n in this._tiles) {
                    var o = this._tiles[n];
                    if (o.current && o.loaded) {
                        var s = Math.min(1, (t - o.loaded) / 200);
                        vi(o.el, s), s < 1 ? i = !0 : (o.active ? e = !0 : this._onOpaqueTile(o), o.active = !0)
                    }
                }
                e && !this._noPrune && this._pruneTiles(), i && (C(this._fadeFrame), this._fadeFrame = M(this._updateOpacity, this))
            }
        },
        _onOpaqueTile: l,
        _initContainer: function () {
            this._container || (this._container = hi("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container))
        },
        _updateLevels: function () {
            var t = this._tileZoom,
                i = this.options.maxZoom;
            if (void 0 !== t) {
                for (var e in this._levels) this._levels[e].el.children.length || e === t ? (this._levels[e].el.style.zIndex = i - Math.abs(t - e), this._onUpdateLevel(e)) : (ui(this._levels[e].el), this._removeTilesAtZoom(e), this._onRemoveLevel(e), delete this._levels[e]);
                var n = this._levels[t],
                    o = this._map;
                return n || ((n = this._levels[t] = {}).el = hi("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = i, n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, o.getCenter(), o.getZoom()), n.el.offsetWidth, this._onCreateLevel(n)), this._level = n
            }
        },
        _onUpdateLevel: l,
        _onRemoveLevel: l,
        _onCreateLevel: l,
        _pruneTiles: function () {
            if (this._map) {
                var t, i, e = this._map.getZoom();
                if (e > this.options.maxZoom || e < this.options.minZoom) this._removeAllTiles();
                else {
                    for (t in this._tiles) (i = this._tiles[t]).retain = i.current;
                    for (t in this._tiles)
                        if ((i = this._tiles[t]).current && !i.active) {
                            var n = i.coords;
                            this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2)
                        } for (t in this._tiles) this._tiles[t].retain || this._removeTile(t)
                }
            }
        },
        _removeTilesAtZoom: function (t) {
            for (var i in this._tiles) this._tiles[i].coords.z === t && this._removeTile(i)
        },
        _removeAllTiles: function () {
            for (var t in this._tiles) this._removeTile(t)
        },
        _invalidateAll: function () {
            for (var t in this._levels) ui(this._levels[t].el), this._onRemoveLevel(t), delete this._levels[t];
            this._removeAllTiles(), this._tileZoom = void 0
        },
        _retainParent: function (t, i, e, n) {
            var o = Math.floor(t / 2),
                s = Math.floor(i / 2),
                r = e - 1,
                a = new B(+o, +s);
            a.z = +r;
            var h = this._tileCoordsToKey(a),
                u = this._tiles[h];
            return u && u.active ? u.retain = !0 : (u && u.loaded && (u.retain = !0), n < r && this._retainParent(o, s, r, n))
        },
        _retainChildren: function (t, i, e, n) {
            for (var o = 2 * t; o < 2 * t + 2; o++)
                for (var s = 2 * i; s < 2 * i + 2; s++) {
                    var r = new B(o, s);
                    r.z = e + 1;
                    var a = this._tileCoordsToKey(r),
                        h = this._tiles[a];
                    h && h.active ? h.retain = !0 : (h && h.loaded && (h.retain = !0), e + 1 < n && this._retainChildren(o, s, e + 1, n))
                }
        },
        _resetView: function (t) {
            var i = t && (t.pinch || t.flyTo);
            this._setView(this._map.getCenter(), this._map.getZoom(), i, i)
        },
        _animateZoom: function (t) {
            this._setView(t.center, t.zoom, !0, t.noUpdate)
        },
        _clampZoom: function (t) {
            var i = this.options;
            return void 0 !== i.minNativeZoom && t < i.minNativeZoom ? i.minNativeZoom : void 0 !== i.maxNativeZoom && i.maxNativeZoom < t ? i.maxNativeZoom : t
        },
        _setView: function (t, i, e, n) {
            var o = this._clampZoom(Math.round(i));
            (void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom) && (o = void 0);
            var s = this.options.updateWhenZooming && o !== this._tileZoom;
            n && !s || (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== o && this._update(t), e || this._pruneTiles(), this._noPrune = !!e), this._setZoomTransforms(t, i)
        },
        _setZoomTransforms: function (t, i) {
            for (var e in this._levels) this._setZoomTransform(this._levels[e], t, i)
        },
        _setZoomTransform: function (t, i, e) {
            var n = this._map.getZoomScale(e, t.zoom),
                o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(i, e)).round();
            yt ? xi(t.el, o, n) : wi(t.el, o)
        },
        _resetGrid: function () {
            var t = this._map,
                i = t.options.crs,
                e = this._tileSize = this.getTileSize(),
                n = this._tileZoom,
                o = this._map.getPixelWorldBounds(this._tileZoom);
            o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = i.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, i.wrapLng[0]], n).x / e.x), Math.ceil(t.project([0, i.wrapLng[1]], n).x / e.y)], this._wrapY = i.wrapLat && !this.options.noWrap && [Math.floor(t.project([i.wrapLat[0], 0], n).y / e.x), Math.ceil(t.project([i.wrapLat[1], 0], n).y / e.y)]
        },
        _onMoveEnd: function () {
            this._map && !this._map._animatingZoom && this._update()
        },
        _getTiledPixelBounds: function (t) {
            var i = this._map,
                e = i._animatingZoom ? Math.max(i._animateToZoom, i.getZoom()) : i.getZoom(),
                n = i.getZoomScale(e, this._tileZoom),
                o = i.project(t, this._tileZoom).floor(),
                s = i.getSize().divideBy(2 * n);
            return new O(o.subtract(s), o.add(s))
        },
        _update: function (t) {
            var i = this._map;
            if (i) {
                var e = this._clampZoom(i.getZoom());
                if (void 0 === t && (t = i.getCenter()), void 0 !== this._tileZoom) {
                    var n = this._getTiledPixelBounds(t),
                        o = this._pxBoundsToTileRange(n),
                        s = o.getCenter(),
                        r = [],
                        a = this.options.keepBuffer,
                        h = new O(o.getBottomLeft().subtract([a, -a]), o.getTopRight().add([a, -a]));
                    if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y))) throw new Error("Attempted to load an infinite number of tiles");
                    for (var u in this._tiles) {
                        var l = this._tiles[u].coords;
                        l.z === this._tileZoom && h.contains(new B(l.x, l.y)) || (this._tiles[u].current = !1)
                    }
                    if (1 < Math.abs(e - this._tileZoom)) this._setView(t, e);
                    else {
                        for (var c = o.min.y; c <= o.max.y; c++)
                            for (var _ = o.min.x; _ <= o.max.x; _++) {
                                var d = new B(_, c);
                                if (d.z = this._tileZoom, this._isValidTile(d)) {
                                    var p = this._tiles[this._tileCoordsToKey(d)];
                                    p ? p.current = !0 : r.push(d)
                                }
                            }
                        if (r.sort(function (t, i) {
                            return t.distanceTo(s) - i.distanceTo(s)
                        }), 0 !== r.length) {
                            this._loading || (this._loading = !0, this.fire("loading"));
                            var m = document.createDocumentFragment();
                            for (_ = 0; _ < r.length; _++) this._addTile(r[_], m);
                            this._level.el.appendChild(m)
                        }
                    }
                }
            }
        },
        _isValidTile: function (t) {
            var i = this._map.options.crs;
            if (!i.infinite) {
                var e = this._globalTileRange;
                if (!i.wrapLng && (t.x < e.min.x || t.x > e.max.x) || !i.wrapLat && (t.y < e.min.y || t.y > e.max.y)) return !1
            }
            if (!this.options.bounds) return !0;
            var n = this._tileCoordsToBounds(t);
            return D(this.options.bounds).overlaps(n)
        },
        _keyToBounds: function (t) {
            return this._tileCoordsToBounds(this._keyToTileCoords(t))
        },
        _tileCoordsToNwSe: function (t) {
            var i = this._map,
                e = this.getTileSize(),
                n = t.scaleBy(e),
                o = n.add(e);
            return [i.unproject(n, t.z), i.unproject(o, t.z)]
        },
        _tileCoordsToBounds: function (t) {
            var i = this._tileCoordsToNwSe(t),
                e = new N(i[0], i[1]);
            return this.options.noWrap || (e = this._map.wrapLatLngBounds(e)), e
        },
        _tileCoordsToKey: function (t) {
            return t.x + ":" + t.y + ":" + t.z
        },
        _keyToTileCoords: function (t) {
            var i = t.split(":"),
                e = new B(+i[0], +i[1]);
            return e.z = +i[2], e
        },
        _removeTile: function (t) {
            var i = this._tiles[t];
            i && (ui(i.el), delete this._tiles[t], this.fire("tileunload", {
                tile: i.el,
                coords: this._keyToTileCoords(t)
            }))
        },
        _initTile: function (t) {
            pi(t, "leaflet-tile");
            var i = this.getTileSize();
            t.style.width = i.x + "px", t.style.height = i.y + "px", t.onselectstart = l, t.onmousemove = l, et && this.options.opacity < 1 && vi(t, this.options.opacity), st && !rt && (t.style.WebkitBackfaceVisibility = "hidden")
        },
        _addTile: function (t, i) {
            var e = this._getTilePos(t),
                n = this._tileCoordsToKey(t),
                o = this.createTile(this._wrapCoords(t), a(this._tileReady, this, t));
            this._initTile(o), this.createTile.length < 2 && M(a(this._tileReady, this, t, null, o)), wi(o, e), this._tiles[n] = {
                el: o,
                coords: t,
                current: !0
            }, i.appendChild(o), this.fire("tileloadstart", {
                tile: o,
                coords: t
            })
        },
        _tileReady: function (t, i, e) {
            i && this.fire("tileerror", {
                error: i,
                tile: e,
                coords: t
            });
            var n = this._tileCoordsToKey(t);
            (e = this._tiles[n]) && (e.loaded = +new Date, this._map._fadeAnimated ? (vi(e.el, 0), C(this._fadeFrame), this._fadeFrame = M(this._updateOpacity, this)) : (e.active = !0, this._pruneTiles()), i || (pi(e.el, "leaflet-tile-loaded"), this.fire("tileload", {
                tile: e.el,
                coords: t
            })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), et || !this._map._fadeAnimated ? M(this._pruneTiles, this) : setTimeout(a(this._pruneTiles, this), 250)))
        },
        _getTilePos: function (t) {
            return t.scaleBy(this.getTileSize()).subtract(this._level.origin)
        },
        _wrapCoords: function (t) {
            var i = new B(this._wrapX ? r(t.x, this._wrapX) : t.x, this._wrapY ? r(t.y, this._wrapY) : t.y);
            return i.z = t.z, i
        },
        _pxBoundsToTileRange: function (t) {
            var i = this.getTileSize();
            return new O(t.min.unscaleBy(i).floor(), t.max.unscaleBy(i).ceil().subtract([1, 1]))
        },
        _noTilesToLoad: function () {
            for (var t in this._tiles)
                if (!this._tiles[t].loaded) return !1;
            return !0
        }
    });
    var an = rn.extend({
        options: {
            minZoom: 0,
            maxZoom: 18,
            subdomains: "abc",
            errorTileUrl: "",
            zoomOffset: 0,
            tms: !1,
            zoomReverse: !1,
            detectRetina: !1,
            crossOrigin: !1
        },
        initialize: function (t, i) {
            this._url = t, (i = p(this, i)).detectRetina && Ct && 0 < i.maxZoom && (i.tileSize = Math.floor(i.tileSize / 2), i.zoomReverse ? (i.zoomOffset--, i.minZoom++) : (i.zoomOffset++, i.maxZoom--), i.minZoom = Math.max(0, i.minZoom)), "string" == typeof i.subdomains && (i.subdomains = i.subdomains.split("")), st || this.on("tileunload", this._onTileRemove)
        },
        setUrl: function (t, i) {
            return this._url === t && void 0 === i && (i = !0), this._url = t, i || this.redraw(), this
        },
        createTile: function (t, i) {
            var e = document.createElement("img");
            return Ei(e, "load", a(this._tileOnLoad, this, i, e)), Ei(e, "error", a(this._tileOnError, this, i, e)), !this.options.crossOrigin && "" !== this.options.crossOrigin || (e.crossOrigin = !0 === this.options.crossOrigin ? "" : this.options.crossOrigin), e.alt = "", e.setAttribute("role", "presentation"), e.src = this.getTileUrl(t), e
        },
        getTileUrl: function (t) {
            var i = {
                r: Ct ? "@2x" : "",
                s: this._getSubdomain(t),
                x: t.x,
                y: t.y,
                z: this._getZoomForUrl()
            };
            if (this._map && !this._map.options.crs.infinite) {
                var e = this._globalTileRange.max.y - t.y;
                this.options.tms && (i.y = e), i["-y"] = e
            }
            return g(this._url, h(i, this.options))
        },
        _tileOnLoad: function (t, i) {
            et ? setTimeout(a(t, this, null, i), 0) : t(null, i)
        },
        _tileOnError: function (t, i, e) {
            var n = this.options.errorTileUrl;
            n && i.getAttribute("src") !== n && (i.src = n), t(e, i)
        },
        _onTileRemove: function (t) {
            t.tile.onload = null
        },
        _getZoomForUrl: function () {
            var t = this._tileZoom,
                i = this.options.maxZoom;
            return this.options.zoomReverse && (t = i - t), t + this.options.zoomOffset
        },
        _getSubdomain: function (t) {
            var i = Math.abs(t.x + t.y) % this.options.subdomains.length;
            return this.options.subdomains[i]
        },
        _abortLoading: function () {
            var t, i;
            for (t in this._tiles) this._tiles[t].coords.z !== this._tileZoom && ((i = this._tiles[t].el).onload = l, i.onerror = l, i.complete || (i.src = x, ui(i), delete this._tiles[t]))
        },
        _removeTile: function (t) {
            var i = this._tiles[t];
            if (i) return ht || i.el.setAttribute("src", x), rn.prototype._removeTile.call(this, t)
        },
        _tileReady: function (t, i, e) {
            if (this._map && (!e || e.getAttribute("src") !== x)) return rn.prototype._tileReady.call(this, t, i, e)
        }
    });

    function hn(t, i) {
        return new an(t, i)
    }
    var un = an.extend({
        defaultWmsParams: {
            service: "WMS",
            request: "GetMap",
            layers: "",
            styles: "",
            format: "image/jpeg",
            transparent: !1,
            version: "1.1.1"
        },
        options: {
            crs: null,
            uppercase: !1
        },
        initialize: function (t, i) {
            this._url = t;
            var e = h({}, this.defaultWmsParams);
            for (var n in i) n in this.options || (e[n] = i[n]);
            var o = (i = p(this, i)).detectRetina && Ct ? 2 : 1,
                s = this.getTileSize();
            e.width = s.x * o, e.height = s.y * o, this.wmsParams = e
        },
        onAdd: function (t) {
            this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
            var i = 1.3 <= this._wmsVersion ? "crs" : "srs";
            this.wmsParams[i] = this._crs.code, an.prototype.onAdd.call(this, t)
        },
        getTileUrl: function (t) {
            var i = this._tileCoordsToNwSe(t),
                e = this._crs,
                n = R(e.project(i[0]), e.project(i[1])),
                o = n.min,
                s = n.max,
                r = (1.3 <= this._wmsVersion && this._crs === Me ? [o.y, o.x, s.y, s.x] : [o.x, o.y, s.x, s.y]).join(","),
                a = an.prototype.getTileUrl.call(this, t);
            return a + m(this.wmsParams, a, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + r
        },
        setParams: function (t, i) {
            return h(this.wmsParams, t), i || this.redraw(), this
        }
    });
    an.WMS = un, hn.wms = function (t, i) {
        return new un(t, i)
    };
    var ln = Se.extend({
        options: {
            padding: .1,
            tolerance: 0
        },
        initialize: function (t) {
            p(this, t), u(this), this._layers = this._layers || {}
        },
        onAdd: function () {
            this._container || (this._initContainer(), this._zoomAnimated && pi(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this)
        },
        onRemove: function () {
            this.off("update", this._updatePaths, this), this._destroyContainer()
        },
        getEvents: function () {
            var t = {
                viewreset: this._reset,
                zoom: this._onZoom,
                moveend: this._update,
                zoomend: this._onZoomEnd
            };
            return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t
        },
        _onAnimZoom: function (t) {
            this._updateTransform(t.center, t.zoom)
        },
        _onZoom: function () {
            this._updateTransform(this._map.getCenter(), this._map.getZoom())
        },
        _updateTransform: function (t, i) {
            var e = this._map.getZoomScale(i, this._zoom),
                n = Pi(this._container),
                o = this._map.getSize().multiplyBy(.5 + this.options.padding),
                s = this._map.project(this._center, i),
                r = this._map.project(t, i).subtract(s),
                a = o.multiplyBy(-e).add(n).add(o).subtract(r);
            yt ? xi(this._container, a, e) : wi(this._container, a)
        },
        _reset: function () {
            for (var t in this._update(), this._updateTransform(this._center, this._zoom), this._layers) this._layers[t]._reset()
        },
        _onZoomEnd: function () {
            for (var t in this._layers) this._layers[t]._project()
        },
        _updatePaths: function () {
            for (var t in this._layers) this._layers[t]._update()
        },
        _update: function () {
            var t = this.options.padding,
                i = this._map.getSize(),
                e = this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();
            this._bounds = new O(e, e.add(i.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom()
        }
    }),
        cn = ln.extend({
            getEvents: function () {
                var t = ln.prototype.getEvents.call(this);
                return t.viewprereset = this._onViewPreReset, t
            },
            _onViewPreReset: function () {
                this._postponeUpdatePaths = !0
            },
            onAdd: function () {
                ln.prototype.onAdd.call(this), this._draw()
            },
            _initContainer: function () {
                var t = this._container = document.createElement("canvas");
                Ei(t, "mousemove", o(this._onMouseMove, 32, this), this), Ei(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), Ei(t, "mouseout", this._handleMouseOut, this), this._ctx = t.getContext("2d")
            },
            _destroyContainer: function () {
                C(this._redrawRequest), delete this._ctx, ui(this._container), Bi(this._container), delete this._container
            },
            _updatePaths: function () {
                if (!this._postponeUpdatePaths) {
                    for (var t in this._redrawBounds = null, this._layers) this._layers[t]._update();
                    this._redraw()
                }
            },
            _update: function () {
                if (!this._map._animatingZoom || !this._bounds) {
                    ln.prototype._update.call(this);
                    var t = this._bounds,
                        i = this._container,
                        e = t.getSize(),
                        n = Ct ? 2 : 1;
                    wi(i, t.min), i.width = n * e.x, i.height = n * e.y, i.style.width = e.x + "px", i.style.height = e.y + "px", Ct && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update")
                }
            },
            _reset: function () {
                ln.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths())
            },
            _initPath: function (t) {
                this._updateDashArray(t);
                var i = (this._layers[u(t)] = t)._order = {
                    layer: t,
                    prev: this._drawLast,
                    next: null
                };
                this._drawLast && (this._drawLast.next = i), this._drawLast = i, this._drawFirst = this._drawFirst || this._drawLast
            },
            _addPath: function (t) {
                this._requestRedraw(t)
            },
            _removePath: function (t) {
                var i = t._order,
                    e = i.next,
                    n = i.prev;
                e ? e.prev = n : this._drawLast = n, n ? n.next = e : this._drawFirst = e, delete t._order, delete this._layers[u(t)], this._requestRedraw(t)
            },
            _updatePath: function (t) {
                this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t)
            },
            _updateStyle: function (t) {
                this._updateDashArray(t), this._requestRedraw(t)
            },
            _updateDashArray: function (t) {
                if ("string" == typeof t.options.dashArray) {
                    var i, e, n = t.options.dashArray.split(/[, ]+/),
                        o = [];
                    for (e = 0; e < n.length; e++) {
                        if (i = Number(n[e]), isNaN(i)) return;
                        o.push(i)
                    }
                    t.options._dashArray = o
                } else t.options._dashArray = t.options.dashArray
            },
            _requestRedraw: function (t) {
                this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || M(this._redraw, this))
            },
            _extendRedrawBounds: function (t) {
                if (t._pxBounds) {
                    var i = (t.options.weight || 0) + 1;
                    this._redrawBounds = this._redrawBounds || new O, this._redrawBounds.extend(t._pxBounds.min.subtract([i, i])), this._redrawBounds.extend(t._pxBounds.max.add([i, i]))
                }
            },
            _redraw: function () {
                this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null
            },
            _clear: function () {
                var t = this._redrawBounds;
                if (t) {
                    var i = t.getSize();
                    this._ctx.clearRect(t.min.x, t.min.y, i.x, i.y)
                } else this._ctx.clearRect(0, 0, this._container.width, this._container.height)
            },
            _draw: function () {
                var t, i = this._redrawBounds;
                if (this._ctx.save(), i) {
                    var e = i.getSize();
                    this._ctx.beginPath(), this._ctx.rect(i.min.x, i.min.y, e.x, e.y), this._ctx.clip()
                }
                this._drawing = !0;
                for (var n = this._drawFirst; n; n = n.next) t = n.layer, (!i || t._pxBounds && t._pxBounds.intersects(i)) && t._updatePath();
                this._drawing = !1, this._ctx.restore()
            },
            _updatePoly: function (t, i) {
                if (this._drawing) {
                    var e, n, o, s, r = t._parts,
                        a = r.length,
                        h = this._ctx;
                    if (a) {
                        for (h.beginPath(), e = 0; e < a; e++) {
                            for (n = 0, o = r[e].length; n < o; n++) s = r[e][n], h[n ? "lineTo" : "moveTo"](s.x, s.y);
                            i && h.closePath()
                        }
                        this._fillStroke(h, t)
                    }
                }
            },
            _updateCircle: function (t) {
                if (this._drawing && !t._empty()) {
                    var i = t._point,
                        e = this._ctx,
                        n = Math.max(Math.round(t._radius), 1),
                        o = (Math.max(Math.round(t._radiusY), 1) || n) / n;
                    1 != o && (e.save(), e.scale(1, o)), e.beginPath(), e.arc(i.x, i.y / o, n, 0, 2 * Math.PI, !1), 1 != o && e.restore(), this._fillStroke(e, t)
                }
            },
            _fillStroke: function (t, i) {
                var e = i.options;
                e.fill && (t.globalAlpha = e.fillOpacity, t.fillStyle = e.fillColor || e.color, t.fill(e.fillRule || "evenodd")), e.stroke && 0 !== e.weight && (t.setLineDash && t.setLineDash(i.options && i.options._dashArray || []), t.globalAlpha = e.opacity, t.lineWidth = e.weight, t.strokeStyle = e.color, t.lineCap = e.lineCap, t.lineJoin = e.lineJoin, t.stroke())
            },
            _onClick: function (t) {
                for (var i, e, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next)(i = o.layer).options.interactive && i._containsPoint(n) && !this._map._draggableMoved(i) && (e = i);
                e && (qi(t), this._fireEvent([e], t))
            },
            _onMouseMove: function (t) {
                if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
                    var i = this._map.mouseEventToLayerPoint(t);
                    this._handleMouseHover(t, i)
                }
            },
            _handleMouseOut: function (t) {
                var i = this._hoveredLayer;
                i && (mi(this._container, "leaflet-interactive"), this._fireEvent([i], t, "mouseout"), this._hoveredLayer = null)
            },
            _handleMouseHover: function (t, i) {
                for (var e, n, o = this._drawFirst; o; o = o.next)(e = o.layer).options.interactive && e._containsPoint(i) && (n = e);
                n !== this._hoveredLayer && (this._handleMouseOut(t), n && (pi(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._hoveredLayer && this._fireEvent([this._hoveredLayer], t)
            },
            _fireEvent: function (t, i, e) {
                this._map._fireDOMEvent(i, e || i.type, t)
            },
            _bringToFront: function (t) {
                var i = t._order;
                if (i) {
                    var e = i.next,
                        n = i.prev;
                    e && ((e.prev = n) ? n.next = e : e && (this._drawFirst = e), i.prev = this._drawLast, (this._drawLast.next = i).next = null, this._drawLast = i, this._requestRedraw(t))
                }
            },
            _bringToBack: function (t) {
                var i = t._order;
                if (i) {
                    var e = i.next,
                        n = i.prev;
                    n && ((n.next = e) ? e.prev = n : n && (this._drawLast = n), i.prev = null, i.next = this._drawFirst, this._drawFirst.prev = i, this._drawFirst = i, this._requestRedraw(t))
                }
            }
        });

    function _n(t) {
        return St ? new cn(t) : null
    }
    var dn = function () {
        try {
            return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                function (t) {
                    return document.createElement("<lvml:" + t + ' class="lvml">')
                }
        } catch (t) {
            return function (t) {
                return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
            }
        }
    }(),
        pn = {
            _initContainer: function () {
                this._container = hi("div", "leaflet-vml-container")
            },
            _update: function () {
                this._map._animatingZoom || (ln.prototype._update.call(this), this.fire("update"))
            },
            _initPath: function (t) {
                var i = t._container = dn("shape");
                pi(i, "leaflet-vml-shape " + (this.options.className || "")), i.coordsize = "1 1", t._path = dn("path"), i.appendChild(t._path), this._updateStyle(t), this._layers[u(t)] = t
            },
            _addPath: function (t) {
                var i = t._container;
                this._container.appendChild(i), t.options.interactive && t.addInteractiveTarget(i)
            },
            _removePath: function (t) {
                var i = t._container;
                ui(i), t.removeInteractiveTarget(i), delete this._layers[u(t)]
            },
            _updateStyle: function (t) {
                var i = t._stroke,
                    e = t._fill,
                    n = t.options,
                    o = t._container;
                o.stroked = !!n.stroke, o.filled = !!n.fill, n.stroke ? (i || (i = t._stroke = dn("stroke")), o.appendChild(i), i.weight = n.weight + "px", i.color = n.color, i.opacity = n.opacity, n.dashArray ? i.dashStyle = v(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : i.dashStyle = "", i.endcap = n.lineCap.replace("butt", "flat"), i.joinstyle = n.lineJoin) : i && (o.removeChild(i), t._stroke = null), n.fill ? (e || (e = t._fill = dn("fill")), o.appendChild(e), e.color = n.fillColor || n.color, e.opacity = n.fillOpacity) : e && (o.removeChild(e), t._fill = null)
            },
            _updateCircle: function (t) {
                var i = t._point.round(),
                    e = Math.round(t._radius),
                    n = Math.round(t._radiusY || e);
                this._setPath(t, t._empty() ? "M0 0" : "AL " + i.x + "," + i.y + " " + e + "," + n + " 0,23592600")
            },
            _setPath: function (t, i) {
                t._path.v = i
            },
            _bringToFront: function (t) {
                ci(t._container)
            },
            _bringToBack: function (t) {
                _i(t._container)
            }
        },
        mn = Et ? dn : $,
        fn = ln.extend({
            getEvents: function () {
                var t = ln.prototype.getEvents.call(this);
                return t.zoomstart = this._onZoomStart, t
            },
            _initContainer: function () {
                this._container = mn("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = mn("g"), this._container.appendChild(this._rootGroup)
            },
            _destroyContainer: function () {
                ui(this._container), Bi(this._container), delete this._container, delete this._rootGroup, delete this._svgSize
            },
            _onZoomStart: function () {
                this._update()
            },
            _update: function () {
                if (!this._map._animatingZoom || !this._bounds) {
                    ln.prototype._update.call(this);
                    var t = this._bounds,
                        i = t.getSize(),
                        e = this._container;
                    this._svgSize && this._svgSize.equals(i) || (this._svgSize = i, e.setAttribute("width", i.x), e.setAttribute("height", i.y)), wi(e, t.min), e.setAttribute("viewBox", [t.min.x, t.min.y, i.x, i.y].join(" ")), this.fire("update")
                }
            },
            _initPath: function (t) {
                var i = t._path = mn("path");
                t.options.className && pi(i, t.options.className), t.options.interactive && pi(i, "leaflet-interactive"), this._updateStyle(t), this._layers[u(t)] = t
            },
            _addPath: function (t) {
                this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path)
            },
            _removePath: function (t) {
                ui(t._path), t.removeInteractiveTarget(t._path), delete this._layers[u(t)]
            },
            _updatePath: function (t) {
                t._project(), t._update()
            },
            _updateStyle: function (t) {
                var i = t._path,
                    e = t.options;
                i && (e.stroke ? (i.setAttribute("stroke", e.color), i.setAttribute("stroke-opacity", e.opacity), i.setAttribute("stroke-width", e.weight), i.setAttribute("stroke-linecap", e.lineCap), i.setAttribute("stroke-linejoin", e.lineJoin), e.dashArray ? i.setAttribute("stroke-dasharray", e.dashArray) : i.removeAttribute("stroke-dasharray"), e.dashOffset ? i.setAttribute("stroke-dashoffset", e.dashOffset) : i.removeAttribute("stroke-dashoffset")) : i.setAttribute("stroke", "none"), e.fill ? (i.setAttribute("fill", e.fillColor || e.color), i.setAttribute("fill-opacity", e.fillOpacity), i.setAttribute("fill-rule", e.fillRule || "evenodd")) : i.setAttribute("fill", "none"))
            },
            _updatePoly: function (t, i) {
                this._setPath(t, Q(t._parts, i))
            },
            _updateCircle: function (t) {
                var i = t._point,
                    e = Math.max(Math.round(t._radius), 1),
                    n = "a" + e + "," + (Math.max(Math.round(t._radiusY), 1) || e) + " 0 1,0 ",
                    o = t._empty() ? "M0 0" : "M" + (i.x - e) + "," + i.y + n + 2 * e + ",0 " + n + 2 * -e + ",0 ";
                this._setPath(t, o)
            },
            _setPath: function (t, i) {
                t._path.setAttribute("d", i)
            },
            _bringToFront: function (t) {
                ci(t._path)
            },
            _bringToBack: function (t) {
                _i(t._path)
            }
        });

    function gn(t) {
        return Zt || Et ? new fn(t) : null
    }
    Et && fn.include(pn), Ji.include({
        getRenderer: function (t) {
            var i = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
            return i || (i = this._renderer = this._createRenderer()), this.hasLayer(i) || this.addLayer(i), i
        },
        _getPaneRenderer: function (t) {
            if ("overlayPane" === t || void 0 === t) return !1;
            var i = this._paneRenderers[t];
            return void 0 === i && (i = this._createRenderer({
                pane: t
            }), this._paneRenderers[t] = i), i
        },
        _createRenderer: function (t) {
            return this.options.preferCanvas && _n(t) || gn(t)
        }
    });
    var vn = je.extend({
        initialize: function (t, i) {
            je.prototype.initialize.call(this, this._boundsToLatLngs(t), i)
        },
        setBounds: function (t) {
            return this.setLatLngs(this._boundsToLatLngs(t))
        },
        _boundsToLatLngs: function (t) {
            return [(t = D(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
        }
    });
    fn.create = mn, fn.pointsToPath = Q, We.geometryToLayer = He, We.coordsToLatLng = Fe, We.coordsToLatLngs = Ue, We.latLngToCoords = Ve, We.latLngsToCoords = qe, We.getFeature = Ge, We.asFeature = Ke, Ji.mergeOptions({
        boxZoom: !0
    });
    var yn = oe.extend({
        initialize: function (t) {
            this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this)
        },
        addHooks: function () {
            Ei(this._container, "mousedown", this._onMouseDown, this)
        },
        removeHooks: function () {
            Bi(this._container, "mousedown", this._onMouseDown, this)
        },
        moved: function () {
            return this._moved
        },
        _destroy: function () {
            ui(this._pane), delete this._pane
        },
        _resetState: function () {
            this._resetStateTimeout = 0, this._moved = !1
        },
        _clearDeferredResetState: function () {
            0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0)
        },
        _onMouseDown: function (t) {
            if (!t.shiftKey || 1 !== t.which && 1 !== t.button) return !1;
            this._clearDeferredResetState(), this._resetState(), $t(), bi(), this._startPoint = this._map.mouseEventToContainerPoint(t), Ei(document, {
                contextmenu: ji,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
            }, this)
        },
        _onMouseMove: function (t) {
            this._moved || (this._moved = !0, this._box = hi("div", "leaflet-zoom-box", this._container), pi(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
            var i = new O(this._point, this._startPoint),
                e = i.getSize();
            wi(this._box, i.min), this._box.style.width = e.x + "px", this._box.style.height = e.y + "px"
        },
        _finish: function () {
            this._moved && (ui(this._box), mi(this._container, "leaflet-crosshair")), Qt(), Ti(), Bi(document, {
                contextmenu: ji,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
            }, this)
        },
        _onMouseUp: function (t) {
            if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
                this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(a(this._resetState, this), 0);
                var i = new N(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
                this._map.fitBounds(i).fire("boxzoomend", {
                    boxZoomBounds: i
                })
            }
        },
        _onKeyDown: function (t) {
            27 === t.keyCode && this._finish()
        }
    });
    Ji.addInitHook("addHandler", "boxZoom", yn), Ji.mergeOptions({
        doubleClickZoom: !0
    });
    var xn = oe.extend({
        addHooks: function () {
            this._map.on("dblclick", this._onDoubleClick, this)
        },
        removeHooks: function () {
            this._map.off("dblclick", this._onDoubleClick, this)
        },
        _onDoubleClick: function (t) {
            var i = this._map,
                e = i.getZoom(),
                n = i.options.zoomDelta,
                o = t.originalEvent.shiftKey ? e - n : e + n;
            "center" === i.options.doubleClickZoom ? i.setZoom(o) : i.setZoomAround(t.containerPoint, o)
        }
    });
    Ji.addInitHook("addHandler", "doubleClickZoom", xn), Ji.mergeOptions({
        dragging: !0,
        inertia: !rt,
        inertiaDeceleration: 3400,
        inertiaMaxSpeed: 1 / 0,
        easeLinearity: .2,
        worldCopyJump: !1,
        maxBoundsViscosity: 0
    });
    var wn = oe.extend({
        addHooks: function () {
            if (!this._draggable) {
                var t = this._map;
                this._draggable = new le(t._mapPane, t._container), this._draggable.on({
                    dragstart: this._onDragStart,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this))
            }
            pi(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = []
        },
        removeHooks: function () {
            mi(this._map._container, "leaflet-grab"), mi(this._map._container, "leaflet-touch-drag"), this._draggable.disable()
        },
        moved: function () {
            return this._draggable && this._draggable._moved
        },
        moving: function () {
            return this._draggable && this._draggable._moving
        },
        _onDragStart: function () {
            var t = this._map;
            if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
                var i = D(this._map.options.maxBounds);
                this._offsetLimit = R(this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(i.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))
            } else this._offsetLimit = null;
            t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
        },
        _onDrag: function (t) {
            if (this._map.options.inertia) {
                var i = this._lastTime = +new Date,
                    e = this._lastPos = this._draggable._absPos || this._draggable._newPos;
                this._positions.push(e), this._times.push(i), this._prunePositions(i)
            }
            this._map.fire("move", t).fire("drag", t)
        },
        _prunePositions: function (t) {
            for (; 1 < this._positions.length && 50 < t - this._times[0];) this._positions.shift(), this._times.shift()
        },
        _onZoomEnd: function () {
            var t = this._map.getSize().divideBy(2),
                i = this._map.latLngToLayerPoint([0, 0]);
            this._initialWorldOffset = i.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x
        },
        _viscousLimit: function (t, i) {
            return t - (t - i) * this._viscosity
        },
        _onPreDragLimit: function () {
            if (this._viscosity && this._offsetLimit) {
                var t = this._draggable._newPos.subtract(this._draggable._startPos),
                    i = this._offsetLimit;
                t.x < i.min.x && (t.x = this._viscousLimit(t.x, i.min.x)), t.y < i.min.y && (t.y = this._viscousLimit(t.y, i.min.y)), t.x > i.max.x && (t.x = this._viscousLimit(t.x, i.max.x)), t.y > i.max.y && (t.y = this._viscousLimit(t.y, i.max.y)), this._draggable._newPos = this._draggable._startPos.add(t)
            }
        },
        _onPreDragWrap: function () {
            var t = this._worldWidth,
                i = Math.round(t / 2),
                e = this._initialWorldOffset,
                n = this._draggable._newPos.x,
                o = (n - i + e) % t + i - e,
                s = (n + i + e) % t - i - e,
                r = Math.abs(o + e) < Math.abs(s + e) ? o : s;
            this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = r
        },
        _onDragEnd: function (t) {
            var i = this._map,
                e = i.options,
                n = !e.inertia || this._times.length < 2;
            if (i.fire("dragend", t), n) i.fire("moveend");
            else {
                this._prunePositions(+new Date);
                var o = this._lastPos.subtract(this._positions[0]),
                    s = (this._lastTime - this._times[0]) / 1e3,
                    r = e.easeLinearity,
                    a = o.multiplyBy(r / s),
                    h = a.distanceTo([0, 0]),
                    u = Math.min(e.inertiaMaxSpeed, h),
                    l = a.multiplyBy(u / h),
                    c = u / (e.inertiaDeceleration * r),
                    _ = l.multiplyBy(-c / 2).round();
                _.x || _.y ? (_ = i._limitOffset(_, i.options.maxBounds), M(function () {
                    i.panBy(_, {
                        duration: c,
                        easeLinearity: r,
                        noMoveStart: !0,
                        animate: !0
                    })
                })) : i.fire("moveend")
            }
        }
    });
    Ji.addInitHook("addHandler", "dragging", wn), Ji.mergeOptions({
        keyboard: !0,
        keyboardPanDelta: 80
    });
    var Pn = oe.extend({
        keyCodes: {
            left: [37],
            right: [39],
            down: [40],
            up: [38],
            zoomIn: [187, 107, 61, 171],
            zoomOut: [189, 109, 54, 173]
        },
        initialize: function (t) {
            this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta)
        },
        addHooks: function () {
            var t = this._map._container;
            t.tabIndex <= 0 && (t.tabIndex = "0"), Ei(t, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            }, this), this._map.on({
                focus: this._addHooks,
                blur: this._removeHooks
            }, this)
        },
        removeHooks: function () {
            this._removeHooks(), Bi(this._map._container, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            }, this), this._map.off({
                focus: this._addHooks,
                blur: this._removeHooks
            }, this)
        },
        _onMouseDown: function () {
            if (!this._focused) {
                var t = document.body,
                    i = document.documentElement,
                    e = t.scrollTop || i.scrollTop,
                    n = t.scrollLeft || i.scrollLeft;
                this._map._container.focus(), window.scrollTo(n, e)
            }
        },
        _onFocus: function () {
            this._focused = !0, this._map.fire("focus")
        },
        _onBlur: function () {
            this._focused = !1, this._map.fire("blur")
        },
        _setPanDelta: function (t) {
            var i, e, n = this._panKeys = {},
                o = this.keyCodes;
            for (i = 0, e = o.left.length; i < e; i++) n[o.left[i]] = [-1 * t, 0];
            for (i = 0, e = o.right.length; i < e; i++) n[o.right[i]] = [t, 0];
            for (i = 0, e = o.down.length; i < e; i++) n[o.down[i]] = [0, t];
            for (i = 0, e = o.up.length; i < e; i++) n[o.up[i]] = [0, -1 * t]
        },
        _setZoomDelta: function (t) {
            var i, e, n = this._zoomKeys = {},
                o = this.keyCodes;
            for (i = 0, e = o.zoomIn.length; i < e; i++) n[o.zoomIn[i]] = t;
            for (i = 0, e = o.zoomOut.length; i < e; i++) n[o.zoomOut[i]] = -t
        },
        _addHooks: function () {
            Ei(document, "keydown", this._onKeyDown, this)
        },
        _removeHooks: function () {
            Bi(document, "keydown", this._onKeyDown, this)
        },
        _onKeyDown: function (t) {
            if (!(t.altKey || t.ctrlKey || t.metaKey)) {
                var i, e = t.keyCode,
                    n = this._map;
                if (e in this._panKeys) n._panAnim && n._panAnim._inProgress || (i = this._panKeys[e], t.shiftKey && (i = I(i).multiplyBy(3)), n.panBy(i), n.options.maxBounds && n.panInsideBounds(n.options.maxBounds));
                else if (e in this._zoomKeys) n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);
                else {
                    if (27 !== e || !n._popup || !n._popup.options.closeOnEscapeKey) return;
                    n.closePopup()
                }
                ji(t)
            }
        }
    });
    Ji.addInitHook("addHandler", "keyboard", Pn), Ji.mergeOptions({
        scrollWheelZoom: !0,
        wheelDebounceTime: 40,
        wheelPxPerZoomLevel: 60
    });
    var Ln = oe.extend({
        addHooks: function () {
            Ei(this._map._container, "mousewheel", this._onWheelScroll, this), this._delta = 0
        },
        removeHooks: function () {
            Bi(this._map._container, "mousewheel", this._onWheelScroll, this)
        },
        _onWheelScroll: function (t) {
            var i = Fi(t),
                e = this._map.options.wheelDebounceTime;
            this._delta += i, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date);
            var n = Math.max(e - (+new Date - this._startTime), 0);
            clearTimeout(this._timer), this._timer = setTimeout(a(this._performZoom, this), n), ji(t)
        },
        _performZoom: function () {
            var t = this._map,
                i = t.getZoom(),
                e = this._map.options.zoomSnap || 0;
            t._stop();
            var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
                o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2,
                s = e ? Math.ceil(o / e) * e : o,
                r = t._limitZoom(i + (0 < this._delta ? s : -s)) - i;
            this._delta = 0, this._startTime = null, r && ("center" === t.options.scrollWheelZoom ? t.setZoom(i + r) : t.setZoomAround(this._lastMousePos, i + r))
        }
    });
    Ji.addInitHook("addHandler", "scrollWheelZoom", Ln), Ji.mergeOptions({
        tap: !0,
        tapTolerance: 15
    });
    var bn = oe.extend({
        addHooks: function () {
            Ei(this._map._container, "touchstart", this._onDown, this)
        },
        removeHooks: function () {
            Bi(this._map._container, "touchstart", this._onDown, this)
        },
        _onDown: function (t) {
            if (t.touches) {
                if (Di(t), this._fireClick = !0, 1 < t.touches.length) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
                var i = t.touches[0],
                    e = i.target;
                this._startPos = this._newPos = new B(i.clientX, i.clientY), e.tagName && "a" === e.tagName.toLowerCase() && pi(e, "leaflet-active"), this._holdTimeout = setTimeout(a(function () {
                    this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", i))
                }, this), 1e3), this._simulateEvent("mousedown", i), Ei(document, {
                    touchmove: this._onMove,
                    touchend: this._onUp
                }, this)
            }
        },
        _onUp: function (t) {
            if (clearTimeout(this._holdTimeout), Bi(document, {
                touchmove: this._onMove,
                touchend: this._onUp
            }, this), this._fireClick && t && t.changedTouches) {
                var i = t.changedTouches[0],
                    e = i.target;
                e && e.tagName && "a" === e.tagName.toLowerCase() && mi(e, "leaflet-active"), this._simulateEvent("mouseup", i), this._isTapValid() && this._simulateEvent("click", i)
            }
        },
        _isTapValid: function () {
            return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
        },
        _onMove: function (t) {
            var i = t.touches[0];
            this._newPos = new B(i.clientX, i.clientY), this._simulateEvent("mousemove", i)
        },
        _simulateEvent: function (t, i) {
            var e = document.createEvent("MouseEvents");
            e._simulated = !0, i.target._simulatedClick = !0, e.initMouseEvent(t, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), i.target.dispatchEvent(e)
        }
    });
    Tt && !bt && Ji.addInitHook("addHandler", "tap", bn), Ji.mergeOptions({
        touchZoom: Tt && !rt,
        bounceAtZoomLimits: !0
    });
    var Tn = oe.extend({
        addHooks: function () {
            pi(this._map._container, "leaflet-touch-zoom"), Ei(this._map._container, "touchstart", this._onTouchStart, this)
        },
        removeHooks: function () {
            mi(this._map._container, "leaflet-touch-zoom"), Bi(this._map._container, "touchstart", this._onTouchStart, this)
        },
        _onTouchStart: function (t) {
            var i = this._map;
            if (t.touches && 2 === t.touches.length && !i._animatingZoom && !this._zooming) {
                var e = i.mouseEventToContainerPoint(t.touches[0]),
                    n = i.mouseEventToContainerPoint(t.touches[1]);
                this._centerPoint = i.getSize()._divideBy(2), this._startLatLng = i.containerPointToLatLng(this._centerPoint), "center" !== i.options.touchZoom && (this._pinchStartLatLng = i.containerPointToLatLng(e.add(n)._divideBy(2))), this._startDist = e.distanceTo(n), this._startZoom = i.getZoom(), this._moved = !1, this._zooming = !0, i._stop(), Ei(document, "touchmove", this._onTouchMove, this), Ei(document, "touchend", this._onTouchEnd, this), Di(t)
            }
        },
        _onTouchMove: function (t) {
            if (t.touches && 2 === t.touches.length && this._zooming) {
                var i = this._map,
                    e = i.mouseEventToContainerPoint(t.touches[0]),
                    n = i.mouseEventToContainerPoint(t.touches[1]),
                    o = e.distanceTo(n) / this._startDist;
                if (this._zoom = i.getScaleZoom(o, this._startZoom), !i.options.bounceAtZoomLimits && (this._zoom < i.getMinZoom() && o < 1 || this._zoom > i.getMaxZoom() && 1 < o) && (this._zoom = i._limitZoom(this._zoom)), "center" === i.options.touchZoom) {
                    if (this._center = this._startLatLng, 1 == o) return
                } else {
                    var s = e._add(n)._divideBy(2)._subtract(this._centerPoint);
                    if (1 == o && 0 === s.x && 0 === s.y) return;
                    this._center = i.unproject(i.project(this._pinchStartLatLng, this._zoom).subtract(s), this._zoom)
                }
                this._moved || (i._moveStart(!0, !1), this._moved = !0), C(this._animRequest);
                var r = a(i._move, i, this._center, this._zoom, {
                    pinch: !0,
                    round: !1
                });
                this._animRequest = M(r, this, !0), Di(t)
            }
        },
        _onTouchEnd: function () {
            this._moved && this._zooming ? (this._zooming = !1, C(this._animRequest), Bi(document, "touchmove", this._onTouchMove), Bi(document, "touchend", this._onTouchEnd), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1
        }
    });
    Ji.addInitHook("addHandler", "touchZoom", Tn), Ji.BoxZoom = yn, Ji.DoubleClickZoom = xn, Ji.Drag = wn, Ji.Keyboard = Pn, Ji.ScrollWheelZoom = Ln, Ji.Tap = bn, Ji.TouchZoom = Tn, Object.freeze = i, t.version = "1.5.1", t.Control = Qi, t.control = $i, t.Browser = Bt, t.Evented = k, t.Mixin = re, t.Util = S, t.Class = Z, t.Handler = oe, t.extend = h, t.bind = a, t.stamp = u, t.setOptions = p, t.DomEvent = Yi, t.DomUtil = Zi, t.PosAnimation = Xi, t.Draggable = le, t.LineUtil = ye, t.PolyUtil = Pe, t.Point = B, t.point = I, t.Bounds = O, t.bounds = R, t.Transformation = G, t.transformation = K, t.Projection = Te, t.LatLng = j, t.latLng = W, t.LatLngBounds = N, t.latLngBounds = D, t.CRS = F, t.GeoJSON = We, t.geoJSON = Xe, t.geoJson = Je, t.Layer = Se, t.LayerGroup = Ze, t.layerGroup = function (t, i) {
        return new Ze(t, i)
    }, t.FeatureGroup = Ee, t.featureGroup = function (t) {
        return new Ee(t)
    }, t.ImageOverlay = $e, t.imageOverlay = function (t, i, e) {
        return new $e(t, i, e)
    }, t.VideoOverlay = Qe, t.videoOverlay = function (t, i, e) {
        return new Qe(t, i, e)
    }, t.SVGOverlay = tn, t.svgOverlay = function (t, i, e) {
        return new tn(t, i, e)
    }, t.DivOverlay = en, t.Popup = nn, t.popup = function (t, i) {
        return new nn(t, i)
    }, t.Tooltip = on, t.tooltip = function (t, i) {
        return new on(t, i)
    }, t.Icon = ke, t.icon = function (t) {
        return new ke(t)
    }, t.DivIcon = sn, t.divIcon = function (t) {
        return new sn(t)
    }, t.Marker = Ie, t.marker = function (t, i) {
        return new Ie(t, i)
    }, t.TileLayer = an, t.tileLayer = hn, t.GridLayer = rn, t.gridLayer = function (t) {
        return new rn(t)
    }, t.SVG = fn, t.svg = gn, t.Renderer = ln, t.Canvas = cn, t.canvas = _n, t.Path = Oe, t.CircleMarker = Re, t.circleMarker = function (t, i) {
        return new Re(t, i)
    }, t.Circle = Ne, t.circle = function (t, i, e) {
        return new Ne(t, i, e)
    }, t.Polyline = De, t.polyline = function (t, i) {
        return new De(t, i)
    }, t.Polygon = je, t.polygon = function (t, i) {
        return new je(t, i)
    }, t.Rectangle = vn, t.rectangle = function (t, i) {
        return new vn(t, i)
    }, t.Map = Ji, t.map = function (t, i) {
        return new Ji(t, i)
    };
    var zn = window.L;
    t.noConflict = function () {
        return window.L = zn, this
    }, window.L = t
});;
/*!
 Leaflet.TileLayer.Fallback 1.0.4+e36cde9
 (c) 2015-2018 Boris Seang
 License Apache-2.0
 */
! function (i, e) {
    "function" == typeof define && define.amd ? define(["leaflet"], e) : e("object" == typeof module && module.exports ? require("leaflet") : i.L)
}(this, function (i) {
    i.TileLayer.Fallback = i.TileLayer.extend({
        options: {
            minNativeZoom: 0
        },
        initialize: function (e, r) {
            i.TileLayer.prototype.initialize.call(this, e, r)
        },
        createTile: function (e, r) {
            var t = i.TileLayer.prototype.createTile.call(this, e, r);
            return t._originalCoords = e, t._originalSrc = t.src, t
        },
        _createCurrentCoords: function (i) {
            var e = this._wrapCoords(i);
            return e.fallback = !0, e
        },
        _originalTileOnError: i.TileLayer.prototype._tileOnError,
        _tileOnError: function (i, e, r) {
            var t, l, o, a = this,
                n = e._originalCoords,
                c = e._currentCoords = e._currentCoords || a._createCurrentCoords(n),
                s = e._fallbackZoom = void 0 === e._fallbackZoom ? n.z - 1 : e._fallbackZoom - 1,
                f = e._fallbackScale = 2 * (e._fallbackScale || 1),
                p = a.getTileSize(),
                u = e.style;
            if (s < a.options.minNativeZoom) return this._originalTileOnError(i, e, r);
            c.z = s, c.x = Math.floor(c.x / 2), c.y = Math.floor(c.y / 2), t = a.getTileUrl(c), u.width = p.x * f + "px", u.height = p.y * f + "px", l = (n.y - c.y * f) * p.y, u.marginTop = -l + "px", o = (n.x - c.x * f) * p.x, u.marginLeft = -o + "px", u.clip = "rect(" + l + "px " + (o + p.x) + "px " + (l + p.y) + "px " + o + "px)", a.fire("tilefallback", {
                tile: e,
                url: e._originalSrc,
                urlMissing: e.src,
                urlFallback: t
            }), e.src = t
        },
        getTileUrl: function (e) {
            var r = e.z = e.fallback ? e.z : this._getZoomForUrl(),
                t = {
                    r: i.Browser.retina ? "@2x" : "",
                    s: this._getSubdomain(e),
                    x: e.x,
                    y: e.y,
                    z: r
                };
            if (this._map && !this._map.options.crs.infinite) {
                var l = this._globalTileRange.max.y - e.y;
                this.options.tms && (t.y = l), t["-y"] = l
            }
            return i.Util.template(this._url, i.extend(t, this.options))
        }
    }), i.tileLayer.fallback = function (e, r) {
        return new i.TileLayer.Fallback(e, r)
    }
});;
/*! Hammer.JS - v2.0.8 - 2016-04-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
! function (a, b, c, d) {
    "use strict";

    function e(a, b, c) {
        return setTimeout(j(a, c), b)
    }

    function f(a, b, c) {
        return Array.isArray(a) ? (g(a, c[b], c), !0) : !1
    }

    function g(a, b, c) {
        var e;
        if (a)
            if (a.forEach) a.forEach(b, c);
            else if (a.length !== d)
                for (e = 0; e < a.length;) b.call(c, a[e], e, a), e++;
            else
                for (e in a) a.hasOwnProperty(e) && b.call(c, a[e], e, a)
    }

    function h(b, c, d) {
        var e = "DEPRECATED METHOD: " + c + "\n" + d + " AT \n";
        return function () {
            var c = new Error("get-stack-trace"),
                d = c && c.stack ? c.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                f = a.console && (a.console.warn || a.console.log);
            return f && f.call(a.console, e, d), b.apply(this, arguments)
        }
    }

    function i(a, b, c) {
        var d, e = b.prototype;
        d = a.prototype = Object.create(e), d.constructor = a, d._super = e, c && la(d, c)
    }

    function j(a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    }

    function k(a, b) {
        return typeof a == oa ? a.apply(b ? b[0] || d : d, b) : a
    }

    function l(a, b) {
        return a === d ? b : a
    }

    function m(a, b, c) {
        g(q(b), function (b) {
            a.addEventListener(b, c, !1)
        })
    }

    function n(a, b, c) {
        g(q(b), function (b) {
            a.removeEventListener(b, c, !1)
        })
    }

    function o(a, b) {
        for (; a;) {
            if (a == b) return !0;
            a = a.parentNode
        }
        return !1
    }

    function p(a, b) {
        return a.indexOf(b) > -1
    }

    function q(a) {
        return a.trim().split(/\s+/g)
    }

    function r(a, b, c) {
        if (a.indexOf && !c) return a.indexOf(b);
        for (var d = 0; d < a.length;) {
            if (c && a[d][c] == b || !c && a[d] === b) return d;
            d++
        }
        return -1
    }

    function s(a) {
        return Array.prototype.slice.call(a, 0)
    }

    function t(a, b, c) {
        for (var d = [], e = [], f = 0; f < a.length;) {
            var g = b ? a[f][b] : a[f];
            r(e, g) < 0 && d.push(a[f]), e[f] = g, f++
        }
        return c && (d = b ? d.sort(function (a, c) {
            return a[b] > c[b]
        }) : d.sort()), d
    }

    function u(a, b) {
        for (var c, e, f = b[0].toUpperCase() + b.slice(1), g = 0; g < ma.length;) {
            if (c = ma[g], e = c ? c + f : b, e in a) return e;
            g++
        }
        return d
    }

    function v() {
        return ua++
    }

    function w(b) {
        var c = b.ownerDocument || b;
        return c.defaultView || c.parentWindow || a
    }

    function x(a, b) {
        var c = this;
        this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function (b) {
            k(a.options.enable, [a]) && c.handler(b)
        }, this.init()
    }

    function y(a) {
        var b, c = a.options.inputClass;
        return new (b = c ? c : xa ? M : ya ? P : wa ? R : L)(a, z)
    }

    function z(a, b, c) {
        var d = c.pointers.length,
            e = c.changedPointers.length,
            f = b & Ea && d - e === 0,
            g = b & (Ga | Ha) && d - e === 0;
        c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, A(a, c), a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c
    }

    function A(a, b) {
        var c = a.session,
            d = b.pointers,
            e = d.length;
        c.firstInput || (c.firstInput = D(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = D(b) : 1 === e && (c.firstMultiple = !1);
        var f = c.firstInput,
            g = c.firstMultiple,
            h = g ? g.center : f.center,
            i = b.center = E(d);
        b.timeStamp = ra(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = I(h, i), b.distance = H(h, i), B(c, b), b.offsetDirection = G(b.deltaX, b.deltaY);
        var j = F(b.deltaTime, b.deltaX, b.deltaY);
        b.overallVelocityX = j.x, b.overallVelocityY = j.y, b.overallVelocity = qa(j.x) > qa(j.y) ? j.x : j.y, b.scale = g ? K(g.pointers, d) : 1, b.rotation = g ? J(g.pointers, d) : 0, b.maxPointers = c.prevInput ? b.pointers.length > c.prevInput.maxPointers ? b.pointers.length : c.prevInput.maxPointers : b.pointers.length, C(c, b);
        var k = a.element;
        o(b.srcEvent.target, k) && (k = b.srcEvent.target), b.target = k
    }

    function B(a, b) {
        var c = b.center,
            d = a.offsetDelta || {},
            e = a.prevDelta || {},
            f = a.prevInput || {};
        b.eventType !== Ea && f.eventType !== Ga || (e = a.prevDelta = {
            x: f.deltaX || 0,
            y: f.deltaY || 0
        }, d = a.offsetDelta = {
            x: c.x,
            y: c.y
        }), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y)
    }

    function C(a, b) {
        var c, e, f, g, h = a.lastInterval || b,
            i = b.timeStamp - h.timeStamp;
        if (b.eventType != Ha && (i > Da || h.velocity === d)) {
            var j = b.deltaX - h.deltaX,
                k = b.deltaY - h.deltaY,
                l = F(i, j, k);
            e = l.x, f = l.y, c = qa(l.x) > qa(l.y) ? l.x : l.y, g = G(j, k), a.lastInterval = b
        } else c = h.velocity, e = h.velocityX, f = h.velocityY, g = h.direction;
        b.velocity = c, b.velocityX = e, b.velocityY = f, b.direction = g
    }

    function D(a) {
        for (var b = [], c = 0; c < a.pointers.length;) b[c] = {
            clientX: pa(a.pointers[c].clientX),
            clientY: pa(a.pointers[c].clientY)
        }, c++;
        return {
            timeStamp: ra(),
            pointers: b,
            center: E(b),
            deltaX: a.deltaX,
            deltaY: a.deltaY
        }
    }

    function E(a) {
        var b = a.length;
        if (1 === b) return {
            x: pa(a[0].clientX),
            y: pa(a[0].clientY)
        };
        for (var c = 0, d = 0, e = 0; b > e;) c += a[e].clientX, d += a[e].clientY, e++;
        return {
            x: pa(c / b),
            y: pa(d / b)
        }
    }

    function F(a, b, c) {
        return {
            x: b / a || 0,
            y: c / a || 0
        }
    }

    function G(a, b) {
        return a === b ? Ia : qa(a) >= qa(b) ? 0 > a ? Ja : Ka : 0 > b ? La : Ma
    }

    function H(a, b, c) {
        c || (c = Qa);
        var d = b[c[0]] - a[c[0]],
            e = b[c[1]] - a[c[1]];
        return Math.sqrt(d * d + e * e)
    }

    function I(a, b, c) {
        c || (c = Qa);
        var d = b[c[0]] - a[c[0]],
            e = b[c[1]] - a[c[1]];
        return 180 * Math.atan2(e, d) / Math.PI
    }

    function J(a, b) {
        return I(b[1], b[0], Ra) + I(a[1], a[0], Ra)
    }

    function K(a, b) {
        return H(b[0], b[1], Ra) / H(a[0], a[1], Ra)
    }

    function L() {
        this.evEl = Ta, this.evWin = Ua, this.pressed = !1, x.apply(this, arguments)
    }

    function M() {
        this.evEl = Xa, this.evWin = Ya, x.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }

    function N() {
        this.evTarget = $a, this.evWin = _a, this.started = !1, x.apply(this, arguments)
    }

    function O(a, b) {
        var c = s(a.touches),
            d = s(a.changedTouches);
        return b & (Ga | Ha) && (c = t(c.concat(d), "identifier", !0)), [c, d]
    }

    function P() {
        this.evTarget = bb, this.targetIds = {}, x.apply(this, arguments)
    }

    function Q(a, b) {
        var c = s(a.touches),
            d = this.targetIds;
        if (b & (Ea | Fa) && 1 === c.length) return d[c[0].identifier] = !0, [c, c];
        var e, f, g = s(a.changedTouches),
            h = [],
            i = this.target;
        if (f = c.filter(function (a) {
            return o(a.target, i)
        }), b === Ea)
            for (e = 0; e < f.length;) d[f[e].identifier] = !0, e++;
        for (e = 0; e < g.length;) d[g[e].identifier] && h.push(g[e]), b & (Ga | Ha) && delete d[g[e].identifier], e++;
        return h.length ? [t(f.concat(h), "identifier", !0), h] : void 0
    }

    function R() {
        x.apply(this, arguments);
        var a = j(this.handler, this);
        this.touch = new P(this.manager, a), this.mouse = new L(this.manager, a), this.primaryTouch = null, this.lastTouches = []
    }

    function S(a, b) {
        a & Ea ? (this.primaryTouch = b.changedPointers[0].identifier, T.call(this, b)) : a & (Ga | Ha) && T.call(this, b)
    }

    function T(a) {
        var b = a.changedPointers[0];
        if (b.identifier === this.primaryTouch) {
            var c = {
                x: b.clientX,
                y: b.clientY
            };
            this.lastTouches.push(c);
            var d = this.lastTouches,
                e = function () {
                    var a = d.indexOf(c);
                    a > -1 && d.splice(a, 1)
                };
            setTimeout(e, cb)
        }
    }

    function U(a) {
        for (var b = a.srcEvent.clientX, c = a.srcEvent.clientY, d = 0; d < this.lastTouches.length; d++) {
            var e = this.lastTouches[d],
                f = Math.abs(b - e.x),
                g = Math.abs(c - e.y);
            if (db >= f && db >= g) return !0
        }
        return !1
    }

    function V(a, b) {
        this.manager = a, this.set(b)
    }

    function W(a) {
        if (p(a, jb)) return jb;
        var b = p(a, kb),
            c = p(a, lb);
        return b && c ? jb : b || c ? b ? kb : lb : p(a, ib) ? ib : hb
    }

    function X() {
        if (!fb) return !1;
        var b = {},
            c = a.CSS && a.CSS.supports;
        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function (d) {
            b[d] = c ? a.CSS.supports("touch-action", d) : !0
        }), b
    }

    function Y(a) {
        this.options = la({}, this.defaults, a || {}), this.id = v(), this.manager = null, this.options.enable = l(this.options.enable, !0), this.state = nb, this.simultaneous = {}, this.requireFail = []
    }

    function Z(a) {
        return a & sb ? "cancel" : a & qb ? "end" : a & pb ? "move" : a & ob ? "start" : ""
    }

    function $(a) {
        return a == Ma ? "down" : a == La ? "up" : a == Ja ? "left" : a == Ka ? "right" : ""
    }

    function _(a, b) {
        var c = b.manager;
        return c ? c.get(a) : a
    }

    function aa() {
        Y.apply(this, arguments)
    }

    function ba() {
        aa.apply(this, arguments), this.pX = null, this.pY = null
    }

    function ca() {
        aa.apply(this, arguments)
    }

    function da() {
        Y.apply(this, arguments), this._timer = null, this._input = null
    }

    function ea() {
        aa.apply(this, arguments)
    }

    function fa() {
        aa.apply(this, arguments)
    }

    function ga() {
        Y.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
    }

    function ha(a, b) {
        return b = b || {}, b.recognizers = l(b.recognizers, ha.defaults.preset), new ia(a, b)
    }

    function ia(a, b) {
        this.options = la({}, ha.defaults, b || {}), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = a, this.input = y(this), this.touchAction = new V(this, this.options.touchAction), ja(this, !0), g(this.options.recognizers, function (a) {
            var b = this.add(new a[0](a[1]));
            a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3])
        }, this)
    }

    function ja(a, b) {
        var c = a.element;
        if (c.style) {
            var d;
            g(a.options.cssProps, function (e, f) {
                d = u(c.style, f), b ? (a.oldCssProps[d] = c.style[d], c.style[d] = e) : c.style[d] = a.oldCssProps[d] || ""
            }), b || (a.oldCssProps = {})
        }
    }

    function ka(a, c) {
        var d = b.createEvent("Event");
        d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d)
    }
    var la, ma = ["", "webkit", "Moz", "MS", "ms", "o"],
        na = b.createElement("div"),
        oa = "function",
        pa = Math.round,
        qa = Math.abs,
        ra = Date.now;
    la = "function" != typeof Object.assign ? function (a) {
        if (a === d || null === a) throw new TypeError("Cannot convert undefined or null to object");
        for (var b = Object(a), c = 1; c < arguments.length; c++) {
            var e = arguments[c];
            if (e !== d && null !== e)
                for (var f in e) e.hasOwnProperty(f) && (b[f] = e[f])
        }
        return b
    } : Object.assign;
    var sa = h(function (a, b, c) {
        for (var e = Object.keys(b), f = 0; f < e.length;)(!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;
        return a
    }, "extend", "Use `assign`."),
        ta = h(function (a, b) {
            return sa(a, b, !0)
        }, "merge", "Use `assign`."),
        ua = 1,
        va = /mobile|tablet|ip(ad|hone|od)|android/i,
        wa = "ontouchstart" in a,
        xa = u(a, "PointerEvent") !== d,
        ya = wa && va.test(navigator.userAgent),
        za = "touch",
        Aa = "pen",
        Ba = "mouse",
        Ca = "kinect",
        Da = 25,
        Ea = 1,
        Fa = 2,
        Ga = 4,
        Ha = 8,
        Ia = 1,
        Ja = 2,
        Ka = 4,
        La = 8,
        Ma = 16,
        Na = Ja | Ka,
        Oa = La | Ma,
        Pa = Na | Oa,
        Qa = ["x", "y"],
        Ra = ["clientX", "clientY"];
    x.prototype = {
        handler: function () { },
        init: function () {
            this.evEl && m(this.element, this.evEl, this.domHandler), this.evTarget && m(this.target, this.evTarget, this.domHandler), this.evWin && m(w(this.element), this.evWin, this.domHandler)
        },
        destroy: function () {
            this.evEl && n(this.element, this.evEl, this.domHandler), this.evTarget && n(this.target, this.evTarget, this.domHandler), this.evWin && n(w(this.element), this.evWin, this.domHandler)
        }
    };
    var Sa = {
        mousedown: Ea,
        mousemove: Fa,
        mouseup: Ga
    },
        Ta = "mousedown",
        Ua = "mousemove mouseup";
    i(L, x, {
        handler: function (a) {
            var b = Sa[a.type];
            b & Ea && 0 === a.button && (this.pressed = !0), b & Fa && 1 !== a.which && (b = Ga), this.pressed && (b & Ga && (this.pressed = !1), this.callback(this.manager, b, {
                pointers: [a],
                changedPointers: [a],
                pointerType: Ba,
                srcEvent: a
            }))
        }
    });
    var Va = {
        pointerdown: Ea,
        pointermove: Fa,
        pointerup: Ga,
        pointercancel: Ha,
        pointerout: Ha
    },
        Wa = {
            2: za,
            3: Aa,
            4: Ba,
            5: Ca
        },
        Xa = "pointerdown",
        Ya = "pointermove pointerup pointercancel";
    a.MSPointerEvent && !a.PointerEvent && (Xa = "MSPointerDown", Ya = "MSPointerMove MSPointerUp MSPointerCancel"), i(M, x, {
        handler: function (a) {
            var b = this.store,
                c = !1,
                d = a.type.toLowerCase().replace("ms", ""),
                e = Va[d],
                f = Wa[a.pointerType] || a.pointerType,
                g = f == za,
                h = r(b, a.pointerId, "pointerId");
            e & Ea && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Ga | Ha) && (c = !0), 0 > h || (b[h] = a, this.callback(this.manager, e, {
                pointers: b,
                changedPointers: [a],
                pointerType: f,
                srcEvent: a
            }), c && b.splice(h, 1))
        }
    });
    var Za = {
        touchstart: Ea,
        touchmove: Fa,
        touchend: Ga,
        touchcancel: Ha
    },
        $a = "touchstart",
        _a = "touchstart touchmove touchend touchcancel";
    i(N, x, {
        handler: function (a) {
            var b = Za[a.type];
            if (b === Ea && (this.started = !0), this.started) {
                var c = O.call(this, a, b);
                b & (Ga | Ha) && c[0].length - c[1].length === 0 && (this.started = !1), this.callback(this.manager, b, {
                    pointers: c[0],
                    changedPointers: c[1],
                    pointerType: za,
                    srcEvent: a
                })
            }
        }
    });
    var ab = {
        touchstart: Ea,
        touchmove: Fa,
        touchend: Ga,
        touchcancel: Ha
    },
        bb = "touchstart touchmove touchend touchcancel";
    i(P, x, {
        handler: function (a) {
            var b = ab[a.type],
                c = Q.call(this, a, b);
            c && this.callback(this.manager, b, {
                pointers: c[0],
                changedPointers: c[1],
                pointerType: za,
                srcEvent: a
            })
        }
    });
    var cb = 2500,
        db = 25;
    i(R, x, {
        handler: function (a, b, c) {
            var d = c.pointerType == za,
                e = c.pointerType == Ba;
            if (!(e && c.sourceCapabilities && c.sourceCapabilities.firesTouchEvents)) {
                if (d) S.call(this, b, c);
                else if (e && U.call(this, c)) return;
                this.callback(a, b, c)
            }
        },
        destroy: function () {
            this.touch.destroy(), this.mouse.destroy()
        }
    });
    var eb = u(na.style, "touchAction"),
        fb = eb !== d,
        gb = "compute",
        hb = "auto",
        ib = "manipulation",
        jb = "none",
        kb = "pan-x",
        lb = "pan-y",
        mb = X();
    V.prototype = {
        set: function (a) {
            a == gb && (a = this.compute()), fb && this.manager.element.style && mb[a] && (this.manager.element.style[eb] = a), this.actions = a.toLowerCase().trim()
        },
        update: function () {
            this.set(this.manager.options.touchAction)
        },
        compute: function () {
            var a = [];
            return g(this.manager.recognizers, function (b) {
                k(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()))
            }), W(a.join(" "))
        },
        preventDefaults: function (a) {
            var b = a.srcEvent,
                c = a.offsetDirection;
            if (this.manager.session.prevented) return void b.preventDefault();
            var d = this.actions,
                e = p(d, jb) && !mb[jb],
                f = p(d, lb) && !mb[lb],
                g = p(d, kb) && !mb[kb];
            if (e) {
                var h = 1 === a.pointers.length,
                    i = a.distance < 2,
                    j = a.deltaTime < 250;
                if (h && i && j) return
            }
            return g && f ? void 0 : e || f && c & Na || g && c & Oa ? this.preventSrc(b) : void 0
        },
        preventSrc: function (a) {
            this.manager.session.prevented = !0, a.preventDefault()
        }
    };
    var nb = 1,
        ob = 2,
        pb = 4,
        qb = 8,
        rb = qb,
        sb = 16,
        tb = 32;
    Y.prototype = {
        defaults: {},
        set: function (a) {
            return la(this.options, a), this.manager && this.manager.touchAction.update(), this
        },
        recognizeWith: function (a) {
            if (f(a, "recognizeWith", this)) return this;
            var b = this.simultaneous;
            return a = _(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this
        },
        dropRecognizeWith: function (a) {
            return f(a, "dropRecognizeWith", this) ? this : (a = _(a, this), delete this.simultaneous[a.id], this)
        },
        requireFailure: function (a) {
            if (f(a, "requireFailure", this)) return this;
            var b = this.requireFail;
            return a = _(a, this), -1 === r(b, a) && (b.push(a), a.requireFailure(this)), this
        },
        dropRequireFailure: function (a) {
            if (f(a, "dropRequireFailure", this)) return this;
            a = _(a, this);
            var b = r(this.requireFail, a);
            return b > -1 && this.requireFail.splice(b, 1), this
        },
        hasRequireFailures: function () {
            return this.requireFail.length > 0
        },
        canRecognizeWith: function (a) {
            return !!this.simultaneous[a.id]
        },
        emit: function (a) {
            function b(b) {
                c.manager.emit(b, a)
            }
            var c = this,
                d = this.state;
            qb > d && b(c.options.event + Z(d)), b(c.options.event), a.additionalEvent && b(a.additionalEvent), d >= qb && b(c.options.event + Z(d))
        },
        tryEmit: function (a) {
            return this.canEmit() ? this.emit(a) : void (this.state = tb)
        },
        canEmit: function () {
            for (var a = 0; a < this.requireFail.length;) {
                if (!(this.requireFail[a].state & (tb | nb))) return !1;
                a++
            }
            return !0
        },
        recognize: function (a) {
            var b = la({}, a);
            return k(this.options.enable, [this, b]) ? (this.state & (rb | sb | tb) && (this.state = nb), this.state = this.process(b), void (this.state & (ob | pb | qb | sb) && this.tryEmit(b))) : (this.reset(), void (this.state = tb))
        },
        process: function (a) { },
        getTouchAction: function () { },
        reset: function () { }
    }, i(aa, Y, {
        defaults: {
            pointers: 1
        },
        attrTest: function (a) {
            var b = this.options.pointers;
            return 0 === b || a.pointers.length === b
        },
        process: function (a) {
            var b = this.state,
                c = a.eventType,
                d = b & (ob | pb),
                e = this.attrTest(a);
            return d && (c & Ha || !e) ? b | sb : d || e ? c & Ga ? b | qb : b & ob ? b | pb : ob : tb
        }
    }), i(ba, aa, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: Pa
        },
        getTouchAction: function () {
            var a = this.options.direction,
                b = [];
            return a & Na && b.push(lb), a & Oa && b.push(kb), b
        },
        directionTest: function (a) {
            var b = this.options,
                c = !0,
                d = a.distance,
                e = a.direction,
                f = a.deltaX,
                g = a.deltaY;
            return e & b.direction || (b.direction & Na ? (e = 0 === f ? Ia : 0 > f ? Ja : Ka, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? Ia : 0 > g ? La : Ma, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction
        },
        attrTest: function (a) {
            return aa.prototype.attrTest.call(this, a) && (this.state & ob || !(this.state & ob) && this.directionTest(a))
        },
        emit: function (a) {
            this.pX = a.deltaX, this.pY = a.deltaY;
            var b = $(a.direction);
            b && (a.additionalEvent = this.options.event + b), this._super.emit.call(this, a)
        }
    }), i(ca, aa, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function () {
            return [jb]
        },
        attrTest: function (a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & ob)
        },
        emit: function (a) {
            if (1 !== a.scale) {
                var b = a.scale < 1 ? "in" : "out";
                a.additionalEvent = this.options.event + b
            }
            this._super.emit.call(this, a)
        }
    }), i(da, Y, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9
        },
        getTouchAction: function () {
            return [hb]
        },
        process: function (a) {
            var b = this.options,
                c = a.pointers.length === b.pointers,
                d = a.distance < b.threshold,
                f = a.deltaTime > b.time;
            if (this._input = a, !d || !c || a.eventType & (Ga | Ha) && !f) this.reset();
            else if (a.eventType & Ea) this.reset(), this._timer = e(function () {
                this.state = rb, this.tryEmit()
            }, b.time, this);
            else if (a.eventType & Ga) return rb;
            return tb
        },
        reset: function () {
            clearTimeout(this._timer)
        },
        emit: function (a) {
            this.state === rb && (a && a.eventType & Ga ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = ra(), this.manager.emit(this.options.event, this._input)))
        }
    }), i(ea, aa, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function () {
            return [jb]
        },
        attrTest: function (a) {
            return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & ob)
        }
    }), i(fa, aa, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .3,
            direction: Na | Oa,
            pointers: 1
        },
        getTouchAction: function () {
            return ba.prototype.getTouchAction.call(this)
        },
        attrTest: function (a) {
            var b, c = this.options.direction;
            return c & (Na | Oa) ? b = a.overallVelocity : c & Na ? b = a.overallVelocityX : c & Oa && (b = a.overallVelocityY), this._super.attrTest.call(this, a) && c & a.offsetDirection && a.distance > this.options.threshold && a.maxPointers == this.options.pointers && qa(b) > this.options.velocity && a.eventType & Ga
        },
        emit: function (a) {
            var b = $(a.offsetDirection);
            b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a)
        }
    }), i(ga, Y, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
        },
        getTouchAction: function () {
            return [ib]
        },
        process: function (a) {
            var b = this.options,
                c = a.pointers.length === b.pointers,
                d = a.distance < b.threshold,
                f = a.deltaTime < b.time;
            if (this.reset(), a.eventType & Ea && 0 === this.count) return this.failTimeout();
            if (d && f && c) {
                if (a.eventType != Ga) return this.failTimeout();
                var g = this.pTime ? a.timeStamp - this.pTime < b.interval : !0,
                    h = !this.pCenter || H(this.pCenter, a.center) < b.posThreshold;
                this.pTime = a.timeStamp, this.pCenter = a.center, h && g ? this.count += 1 : this.count = 1, this._input = a;
                var i = this.count % b.taps;
                if (0 === i) return this.hasRequireFailures() ? (this._timer = e(function () {
                    this.state = rb, this.tryEmit()
                }, b.interval, this), ob) : rb
            }
            return tb
        },
        failTimeout: function () {
            return this._timer = e(function () {
                this.state = tb
            }, this.options.interval, this), tb
        },
        reset: function () {
            clearTimeout(this._timer)
        },
        emit: function () {
            this.state == rb && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
    }), ha.VERSION = "2.0.8", ha.defaults = {
        domEvents: !1,
        touchAction: gb,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [
            [ea, {
                enable: !1
            }],
            [ca, {
                enable: !1
            },
                ["rotate"]
            ],
            [fa, {
                direction: Na
            }],
            [ba, {
                direction: Na
            },
                ["swipe"]
            ],
            [ga],
            [ga, {
                event: "doubletap",
                taps: 2
            },
                ["tap"]
            ],
            [da]
        ],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };
    var ub = 1,
        vb = 2;
    ia.prototype = {
        set: function (a) {
            return la(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this
        },
        stop: function (a) {
            this.session.stopped = a ? vb : ub
        },
        recognize: function (a) {
            var b = this.session;
            if (!b.stopped) {
                this.touchAction.preventDefaults(a);
                var c, d = this.recognizers,
                    e = b.curRecognizer;
                (!e || e && e.state & rb) && (e = b.curRecognizer = null);
                for (var f = 0; f < d.length;) c = d[f], b.stopped === vb || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (ob | pb | qb) && (e = b.curRecognizer = c), f++
            }
        },
        get: function (a) {
            if (a instanceof Y) return a;
            for (var b = this.recognizers, c = 0; c < b.length; c++)
                if (b[c].options.event == a) return b[c];
            return null
        },
        add: function (a) {
            if (f(a, "add", this)) return this;
            var b = this.get(a.options.event);
            return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a
        },
        remove: function (a) {
            if (f(a, "remove", this)) return this;
            if (a = this.get(a)) {
                var b = this.recognizers,
                    c = r(b, a); - 1 !== c && (b.splice(c, 1), this.touchAction.update())
            }
            return this
        },
        on: function (a, b) {
            if (a !== d && b !== d) {
                var c = this.handlers;
                return g(q(a), function (a) {
                    c[a] = c[a] || [], c[a].push(b)
                }), this
            }
        },
        off: function (a, b) {
            if (a !== d) {
                var c = this.handlers;
                return g(q(a), function (a) {
                    b ? c[a] && c[a].splice(r(c[a], b), 1) : delete c[a]
                }), this
            }
        },
        emit: function (a, b) {
            this.options.domEvents && ka(a, b);
            var c = this.handlers[a] && this.handlers[a].slice();
            if (c && c.length) {
                b.type = a, b.preventDefault = function () {
                    b.srcEvent.preventDefault()
                };
                for (var d = 0; d < c.length;) c[d](b), d++
            }
        },
        destroy: function () {
            this.element && ja(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
        }
    }, la(ha, {
        INPUT_START: Ea,
        INPUT_MOVE: Fa,
        INPUT_END: Ga,
        INPUT_CANCEL: Ha,
        STATE_POSSIBLE: nb,
        STATE_BEGAN: ob,
        STATE_CHANGED: pb,
        STATE_ENDED: qb,
        STATE_RECOGNIZED: rb,
        STATE_CANCELLED: sb,
        STATE_FAILED: tb,
        DIRECTION_NONE: Ia,
        DIRECTION_LEFT: Ja,
        DIRECTION_RIGHT: Ka,
        DIRECTION_UP: La,
        DIRECTION_DOWN: Ma,
        DIRECTION_HORIZONTAL: Na,
        DIRECTION_VERTICAL: Oa,
        DIRECTION_ALL: Pa,
        Manager: ia,
        Input: x,
        TouchAction: V,
        TouchInput: P,
        MouseInput: L,
        PointerEventInput: M,
        TouchMouseInput: R,
        SingleTouchInput: N,
        Recognizer: Y,
        AttrRecognizer: aa,
        Tap: ga,
        Pan: ba,
        Swipe: fa,
        Pinch: ca,
        Rotate: ea,
        Press: da,
        on: m,
        off: n,
        each: g,
        merge: ta,
        extend: sa,
        assign: la,
        inherit: i,
        bindFn: j,
        prefixed: u
    });
    var wb = "undefined" != typeof a ? a : "undefined" != typeof self ? self : {};
    wb.Hammer = ha, "function" == typeof define && define.amd ? define(function () {
        return ha
    }) : "undefined" != typeof module && module.exports ? module.exports = ha : a[c] = ha
}(window, document, "Hammer");
//# sourceMappingURL=hammer.min.js.map;// TinyColor v1.4.1
// https://github.com/bgrins/TinyColor
// 2016-07-07, Brian Grinstead, MIT License
! function (a) {
    function b(a, d) {
        if (a = a ? a : "", d = d || {}, a instanceof b) return a;
        if (!(this instanceof b)) return new b(a, d);
        var e = c(a);
        this._originalInput = a, this._r = e.r, this._g = e.g, this._b = e.b, this._a = e.a, this._roundA = P(100 * this._a) / 100, this._format = d.format || e.format, this._gradientType = d.gradientType, this._r < 1 && (this._r = P(this._r)), this._g < 1 && (this._g = P(this._g)), this._b < 1 && (this._b = P(this._b)), this._ok = e.ok, this._tc_id = O++
    }

    function c(a) {
        var b = {
            r: 0,
            g: 0,
            b: 0
        },
            c = 1,
            e = null,
            g = null,
            i = null,
            j = !1,
            k = !1;
        return "string" == typeof a && (a = K(a)), "object" == typeof a && (J(a.r) && J(a.g) && J(a.b) ? (b = d(a.r, a.g, a.b), j = !0, k = "%" === String(a.r).substr(-1) ? "prgb" : "rgb") : J(a.h) && J(a.s) && J(a.v) ? (e = G(a.s), g = G(a.v), b = h(a.h, e, g), j = !0, k = "hsv") : J(a.h) && J(a.s) && J(a.l) && (e = G(a.s), i = G(a.l), b = f(a.h, e, i), j = !0, k = "hsl"), a.hasOwnProperty("a") && (c = a.a)), c = z(c), {
            ok: j,
            format: a.format || k,
            r: Q(255, R(b.r, 0)),
            g: Q(255, R(b.g, 0)),
            b: Q(255, R(b.b, 0)),
            a: c
        }
    }

    function d(a, b, c) {
        return {
            r: 255 * A(a, 255),
            g: 255 * A(b, 255),
            b: 255 * A(c, 255)
        }
    }

    function e(a, b, c) {
        a = A(a, 255), b = A(b, 255), c = A(c, 255);
        var d, e, f = R(a, b, c),
            g = Q(a, b, c),
            h = (f + g) / 2;
        if (f == g) d = e = 0;
        else {
            var i = f - g;
            switch (e = h > .5 ? i / (2 - f - g) : i / (f + g), f) {
                case a:
                    d = (b - c) / i + (c > b ? 6 : 0);
                    break;
                case b:
                    d = (c - a) / i + 2;
                    break;
                case c:
                    d = (a - b) / i + 4
            }
            d /= 6
        }
        return {
            h: d,
            s: e,
            l: h
        }
    }

    function f(a, b, c) {
        function d(a, b, c) {
            return 0 > c && (c += 1), c > 1 && (c -= 1), 1 / 6 > c ? a + 6 * (b - a) * c : .5 > c ? b : 2 / 3 > c ? a + 6 * (b - a) * (2 / 3 - c) : a
        }
        var e, f, g;
        if (a = A(a, 360), b = A(b, 100), c = A(c, 100), 0 === b) e = f = g = c;
        else {
            var h = .5 > c ? c * (1 + b) : c + b - c * b,
                i = 2 * c - h;
            e = d(i, h, a + 1 / 3), f = d(i, h, a), g = d(i, h, a - 1 / 3)
        }
        return {
            r: 255 * e,
            g: 255 * f,
            b: 255 * g
        }
    }

    function g(a, b, c) {
        a = A(a, 255), b = A(b, 255), c = A(c, 255);
        var d, e, f = R(a, b, c),
            g = Q(a, b, c),
            h = f,
            i = f - g;
        if (e = 0 === f ? 0 : i / f, f == g) d = 0;
        else {
            switch (f) {
                case a:
                    d = (b - c) / i + (c > b ? 6 : 0);
                    break;
                case b:
                    d = (c - a) / i + 2;
                    break;
                case c:
                    d = (a - b) / i + 4
            }
            d /= 6
        }
        return {
            h: d,
            s: e,
            v: h
        }
    }

    function h(b, c, d) {
        b = 6 * A(b, 360), c = A(c, 100), d = A(d, 100);
        var e = a.floor(b),
            f = b - e,
            g = d * (1 - c),
            h = d * (1 - f * c),
            i = d * (1 - (1 - f) * c),
            j = e % 6,
            k = [d, h, g, g, i, d][j],
            l = [i, d, d, h, g, g][j],
            m = [g, g, i, d, d, h][j];
        return {
            r: 255 * k,
            g: 255 * l,
            b: 255 * m
        }
    }

    function i(a, b, c, d) {
        var e = [F(P(a).toString(16)), F(P(b).toString(16)), F(P(c).toString(16))];
        return d && e[0].charAt(0) == e[0].charAt(1) && e[1].charAt(0) == e[1].charAt(1) && e[2].charAt(0) == e[2].charAt(1) ? e[0].charAt(0) + e[1].charAt(0) + e[2].charAt(0) : e.join("")
    }

    function j(a, b, c, d, e) {
        var f = [F(P(a).toString(16)), F(P(b).toString(16)), F(P(c).toString(16)), F(H(d))];
        return e && f[0].charAt(0) == f[0].charAt(1) && f[1].charAt(0) == f[1].charAt(1) && f[2].charAt(0) == f[2].charAt(1) && f[3].charAt(0) == f[3].charAt(1) ? f[0].charAt(0) + f[1].charAt(0) + f[2].charAt(0) + f[3].charAt(0) : f.join("")
    }

    function k(a, b, c, d) {
        var e = [F(H(d)), F(P(a).toString(16)), F(P(b).toString(16)), F(P(c).toString(16))];
        return e.join("")
    }

    function l(a, c) {
        c = 0 === c ? 0 : c || 10;
        var d = b(a).toHsl();
        return d.s -= c / 100, d.s = B(d.s), b(d)
    }

    function m(a, c) {
        c = 0 === c ? 0 : c || 10;
        var d = b(a).toHsl();
        return d.s += c / 100, d.s = B(d.s), b(d)
    }

    function n(a) {
        return b(a).desaturate(100)
    }

    function o(a, c) {
        c = 0 === c ? 0 : c || 10;
        var d = b(a).toHsl();
        return d.l += c / 100, d.l = B(d.l), b(d)
    }

    function p(a, c) {
        c = 0 === c ? 0 : c || 10;
        var d = b(a).toRgb();
        return d.r = R(0, Q(255, d.r - P(255 * -(c / 100)))), d.g = R(0, Q(255, d.g - P(255 * -(c / 100)))), d.b = R(0, Q(255, d.b - P(255 * -(c / 100)))), b(d)
    }

    function q(a, c) {
        c = 0 === c ? 0 : c || 10;
        var d = b(a).toHsl();
        return d.l -= c / 100, d.l = B(d.l), b(d)
    }

    function r(a, c) {
        var d = b(a).toHsl(),
            e = (d.h + c) % 360;
        return d.h = 0 > e ? 360 + e : e, b(d)
    }

    function s(a) {
        var c = b(a).toHsl();
        return c.h = (c.h + 180) % 360, b(c)
    }

    function t(a) {
        var c = b(a).toHsl(),
            d = c.h;
        return [b(a), b({
            h: (d + 120) % 360,
            s: c.s,
            l: c.l
        }), b({
            h: (d + 240) % 360,
            s: c.s,
            l: c.l
        })]
    }

    function u(a) {
        var c = b(a).toHsl(),
            d = c.h;
        return [b(a), b({
            h: (d + 90) % 360,
            s: c.s,
            l: c.l
        }), b({
            h: (d + 180) % 360,
            s: c.s,
            l: c.l
        }), b({
            h: (d + 270) % 360,
            s: c.s,
            l: c.l
        })]
    }

    function v(a) {
        var c = b(a).toHsl(),
            d = c.h;
        return [b(a), b({
            h: (d + 72) % 360,
            s: c.s,
            l: c.l
        }), b({
            h: (d + 216) % 360,
            s: c.s,
            l: c.l
        })]
    }

    function w(a, c, d) {
        c = c || 6, d = d || 30;
        var e = b(a).toHsl(),
            f = 360 / d,
            g = [b(a)];
        for (e.h = (e.h - (f * c >> 1) + 720) % 360; --c;) e.h = (e.h + f) % 360, g.push(b(e));
        return g
    }

    function x(a, c) {
        c = c || 6;
        for (var d = b(a).toHsv(), e = d.h, f = d.s, g = d.v, h = [], i = 1 / c; c--;) h.push(b({
            h: e,
            s: f,
            v: g
        })), g = (g + i) % 1;
        return h
    }

    function y(a) {
        var b = {};
        for (var c in a) a.hasOwnProperty(c) && (b[a[c]] = c);
        return b
    }

    function z(a) {
        return a = parseFloat(a), (isNaN(a) || 0 > a || a > 1) && (a = 1), a
    }

    function A(b, c) {
        D(b) && (b = "100%");
        var d = E(b);
        return b = Q(c, R(0, parseFloat(b))), d && (b = parseInt(b * c, 10) / 100), a.abs(b - c) < 1e-6 ? 1 : b % c / parseFloat(c)
    }

    function B(a) {
        return Q(1, R(0, a))
    }

    function C(a) {
        return parseInt(a, 16)
    }

    function D(a) {
        return "string" == typeof a && -1 != a.indexOf(".") && 1 === parseFloat(a)
    }

    function E(a) {
        return "string" == typeof a && -1 != a.indexOf("%")
    }

    function F(a) {
        return 1 == a.length ? "0" + a : "" + a
    }

    function G(a) {
        return 1 >= a && (a = 100 * a + "%"), a
    }

    function H(b) {
        return a.round(255 * parseFloat(b)).toString(16)
    }

    function I(a) {
        return C(a) / 255
    }

    function J(a) {
        return !!V.CSS_UNIT.exec(a)
    }

    function K(a) {
        a = a.replace(M, "").replace(N, "").toLowerCase();
        var b = !1;
        if (T[a]) a = T[a], b = !0;
        else if ("transparent" == a) return {
            r: 0,
            g: 0,
            b: 0,
            a: 0,
            format: "name"
        };
        var c;
        return (c = V.rgb.exec(a)) ? {
            r: c[1],
            g: c[2],
            b: c[3]
        } : (c = V.rgba.exec(a)) ? {
            r: c[1],
            g: c[2],
            b: c[3],
            a: c[4]
        } : (c = V.hsl.exec(a)) ? {
            h: c[1],
            s: c[2],
            l: c[3]
        } : (c = V.hsla.exec(a)) ? {
            h: c[1],
            s: c[2],
            l: c[3],
            a: c[4]
        } : (c = V.hsv.exec(a)) ? {
            h: c[1],
            s: c[2],
            v: c[3]
        } : (c = V.hsva.exec(a)) ? {
            h: c[1],
            s: c[2],
            v: c[3],
            a: c[4]
        } : (c = V.hex8.exec(a)) ? {
            r: C(c[1]),
            g: C(c[2]),
            b: C(c[3]),
            a: I(c[4]),
            format: b ? "name" : "hex8"
        } : (c = V.hex6.exec(a)) ? {
            r: C(c[1]),
            g: C(c[2]),
            b: C(c[3]),
            format: b ? "name" : "hex"
        } : (c = V.hex4.exec(a)) ? {
            r: C(c[1] + "" + c[1]),
            g: C(c[2] + "" + c[2]),
            b: C(c[3] + "" + c[3]),
            a: I(c[4] + "" + c[4]),
            format: b ? "name" : "hex8"
        } : (c = V.hex3.exec(a)) ? {
            r: C(c[1] + "" + c[1]),
            g: C(c[2] + "" + c[2]),
            b: C(c[3] + "" + c[3]),
            format: b ? "name" : "hex"
        } : !1
    }

    function L(a) {
        var b, c;
        return a = a || {
            level: "AA",
            size: "small"
        }, b = (a.level || "AA").toUpperCase(), c = (a.size || "small").toLowerCase(), "AA" !== b && "AAA" !== b && (b = "AA"), "small" !== c && "large" !== c && (c = "small"), {
            level: b,
            size: c
        }
    }
    var M = /^\s+/,
        N = /\s+$/,
        O = 0,
        P = a.round,
        Q = a.min,
        R = a.max,
        S = a.random;
    b.prototype = {
        isDark: function () {
            return this.getBrightness() < 128
        },
        isLight: function () {
            return !this.isDark()
        },
        isValid: function () {
            return this._ok
        },
        getOriginalInput: function () {
            return this._originalInput
        },
        getFormat: function () {
            return this._format
        },
        getAlpha: function () {
            return this._a
        },
        getBrightness: function () {
            var a = this.toRgb();
            return (299 * a.r + 587 * a.g + 114 * a.b) / 1e3
        },
        getLuminance: function () {
            var b, c, d, e, f, g, h = this.toRgb();
            return b = h.r / 255, c = h.g / 255, d = h.b / 255, e = .03928 >= b ? b / 12.92 : a.pow((b + .055) / 1.055, 2.4), f = .03928 >= c ? c / 12.92 : a.pow((c + .055) / 1.055, 2.4), g = .03928 >= d ? d / 12.92 : a.pow((d + .055) / 1.055, 2.4), .2126 * e + .7152 * f + .0722 * g
        },
        setAlpha: function (a) {
            return this._a = z(a), this._roundA = P(100 * this._a) / 100, this
        },
        toHsv: function () {
            var a = g(this._r, this._g, this._b);
            return {
                h: 360 * a.h,
                s: a.s,
                v: a.v,
                a: this._a
            }
        },
        toHsvString: function () {
            var a = g(this._r, this._g, this._b),
                b = P(360 * a.h),
                c = P(100 * a.s),
                d = P(100 * a.v);
            return 1 == this._a ? "hsv(" + b + ", " + c + "%, " + d + "%)" : "hsva(" + b + ", " + c + "%, " + d + "%, " + this._roundA + ")"
        },
        toHsl: function () {
            var a = e(this._r, this._g, this._b);
            return {
                h: 360 * a.h,
                s: a.s,
                l: a.l,
                a: this._a
            }
        },
        toHslString: function () {
            var a = e(this._r, this._g, this._b),
                b = P(360 * a.h),
                c = P(100 * a.s),
                d = P(100 * a.l);
            return 1 == this._a ? "hsl(" + b + ", " + c + "%, " + d + "%)" : "hsla(" + b + ", " + c + "%, " + d + "%, " + this._roundA + ")"
        },
        toHex: function (a) {
            return i(this._r, this._g, this._b, a)
        },
        toHexString: function (a) {
            return "#" + this.toHex(a)
        },
        toHex8: function (a) {
            return j(this._r, this._g, this._b, this._a, a)
        },
        toHex8String: function (a) {
            return "#" + this.toHex8(a)
        },
        toRgb: function () {
            return {
                r: P(this._r),
                g: P(this._g),
                b: P(this._b),
                a: this._a
            }
        },
        toRgbString: function () {
            return 1 == this._a ? "rgb(" + P(this._r) + ", " + P(this._g) + ", " + P(this._b) + ")" : "rgba(" + P(this._r) + ", " + P(this._g) + ", " + P(this._b) + ", " + this._roundA + ")"
        },
        toPercentageRgb: function () {
            return {
                r: P(100 * A(this._r, 255)) + "%",
                g: P(100 * A(this._g, 255)) + "%",
                b: P(100 * A(this._b, 255)) + "%",
                a: this._a
            }
        },
        toPercentageRgbString: function () {
            return 1 == this._a ? "rgb(" + P(100 * A(this._r, 255)) + "%, " + P(100 * A(this._g, 255)) + "%, " + P(100 * A(this._b, 255)) + "%)" : "rgba(" + P(100 * A(this._r, 255)) + "%, " + P(100 * A(this._g, 255)) + "%, " + P(100 * A(this._b, 255)) + "%, " + this._roundA + ")"
        },
        toName: function () {
            return 0 === this._a ? "transparent" : this._a < 1 ? !1 : U[i(this._r, this._g, this._b, !0)] || !1
        },
        toFilter: function (a) {
            var c = "#" + k(this._r, this._g, this._b, this._a),
                d = c,
                e = this._gradientType ? "GradientType = 1, " : "";
            if (a) {
                var f = b(a);
                d = "#" + k(f._r, f._g, f._b, f._a)
            }
            return "progid:DXImageTransform.Microsoft.gradient(" + e + "startColorstr=" + c + ",endColorstr=" + d + ")"
        },
        toString: function (a) {
            var b = !!a;
            a = a || this._format;
            var c = !1,
                d = this._a < 1 && this._a >= 0,
                e = !b && d && ("hex" === a || "hex6" === a || "hex3" === a || "hex4" === a || "hex8" === a || "name" === a);
            return e ? "name" === a && 0 === this._a ? this.toName() : this.toRgbString() : ("rgb" === a && (c = this.toRgbString()), "prgb" === a && (c = this.toPercentageRgbString()), ("hex" === a || "hex6" === a) && (c = this.toHexString()), "hex3" === a && (c = this.toHexString(!0)), "hex4" === a && (c = this.toHex8String(!0)), "hex8" === a && (c = this.toHex8String()), "name" === a && (c = this.toName()), "hsl" === a && (c = this.toHslString()), "hsv" === a && (c = this.toHsvString()), c || this.toHexString())
        },
        clone: function () {
            return b(this.toString())
        },
        _applyModification: function (a, b) {
            var c = a.apply(null, [this].concat([].slice.call(b)));
            return this._r = c._r, this._g = c._g, this._b = c._b, this.setAlpha(c._a), this
        },
        lighten: function () {
            return this._applyModification(o, arguments)
        },
        brighten: function () {
            return this._applyModification(p, arguments)
        },
        darken: function () {
            return this._applyModification(q, arguments)
        },
        desaturate: function () {
            return this._applyModification(l, arguments)
        },
        saturate: function () {
            return this._applyModification(m, arguments)
        },
        greyscale: function () {
            return this._applyModification(n, arguments)
        },
        spin: function () {
            return this._applyModification(r, arguments)
        },
        _applyCombination: function (a, b) {
            return a.apply(null, [this].concat([].slice.call(b)))
        },
        analogous: function () {
            return this._applyCombination(w, arguments)
        },
        complement: function () {
            return this._applyCombination(s, arguments)
        },
        monochromatic: function () {
            return this._applyCombination(x, arguments)
        },
        splitcomplement: function () {
            return this._applyCombination(v, arguments)
        },
        triad: function () {
            return this._applyCombination(t, arguments)
        },
        tetrad: function () {
            return this._applyCombination(u, arguments)
        }
    }, b.fromRatio = function (a, c) {
        if ("object" == typeof a) {
            var d = {};
            for (var e in a) a.hasOwnProperty(e) && (d[e] = "a" === e ? a[e] : G(a[e]));
            a = d
        }
        return b(a, c)
    }, b.equals = function (a, c) {
        return a && c ? b(a).toRgbString() == b(c).toRgbString() : !1
    }, b.random = function () {
        return b.fromRatio({
            r: S(),
            g: S(),
            b: S()
        })
    }, b.mix = function (a, c, d) {
        d = 0 === d ? 0 : d || 50;
        var e = b(a).toRgb(),
            f = b(c).toRgb(),
            g = d / 100,
            h = {
                r: (f.r - e.r) * g + e.r,
                g: (f.g - e.g) * g + e.g,
                b: (f.b - e.b) * g + e.b,
                a: (f.a - e.a) * g + e.a
            };
        return b(h)
    }, b.readability = function (c, d) {
        var e = b(c),
            f = b(d);
        return (a.max(e.getLuminance(), f.getLuminance()) + .05) / (a.min(e.getLuminance(), f.getLuminance()) + .05)
    }, b.isReadable = function (a, c, d) {
        var e, f, g = b.readability(a, c);
        switch (f = !1, e = L(d), e.level + e.size) {
            case "AAsmall":
            case "AAAlarge":
                f = g >= 4.5;
                break;
            case "AAlarge":
                f = g >= 3;
                break;
            case "AAAsmall":
                f = g >= 7
        }
        return f
    }, b.mostReadable = function (a, c, d) {
        var e, f, g, h, i = null,
            j = 0;
        d = d || {}, f = d.includeFallbackColors, g = d.level, h = d.size;
        for (var k = 0; k < c.length; k++) e = b.readability(a, c[k]), e > j && (j = e, i = b(c[k]));
        return b.isReadable(a, i, {
            level: g,
            size: h
        }) || !f ? i : (d.includeFallbackColors = !1, b.mostReadable(a, ["#fff", "#000"], d))
    };
    var T = b.names = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "0ff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000",
        blanchedalmond: "ffebcd",
        blue: "00f",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        burntsienna: "ea7e5d",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "0ff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkgrey: "a9a9a9",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkslategrey: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dimgrey: "696969",
        dodgerblue: "1e90ff",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "f0f",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        grey: "808080",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgray: "d3d3d3",
        lightgreen: "90ee90",
        lightgrey: "d3d3d3",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslategray: "789",
        lightslategrey: "789",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "0f0",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "f0f",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370db",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "db7093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        rebeccapurple: "663399",
        red: "f00",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        slategrey: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        wheat: "f5deb3",
        white: "fff",
        whitesmoke: "f5f5f5",
        yellow: "ff0",
        yellowgreen: "9acd32"
    },
        U = b.hexNames = y(T),
        V = function () {
            var a = "[-\\+]?\\d+%?",
                b = "[-\\+]?\\d*\\.\\d+%?",
                c = "(?:" + b + ")|(?:" + a + ")",
                d = "[\\s|\\(]+(" + c + ")[,|\\s]+(" + c + ")[,|\\s]+(" + c + ")\\s*\\)?",
                e = "[\\s|\\(]+(" + c + ")[,|\\s]+(" + c + ")[,|\\s]+(" + c + ")[,|\\s]+(" + c + ")\\s*\\)?";
            return {
                CSS_UNIT: new RegExp(c),
                rgb: new RegExp("rgb" + d),
                rgba: new RegExp("rgba" + e),
                hsl: new RegExp("hsl" + d),
                hsla: new RegExp("hsla" + e),
                hsv: new RegExp("hsv" + d),
                hsva: new RegExp("hsva" + e),
                hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
            }
        }();
    "undefined" != typeof module && module.exports ? module.exports = b : "function" == typeof define && define.amd ? define(function () {
        return b
    }) : window.tinycolor = b
}(Math);;
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
    if (a == Array.prototype || a == Object.prototype) return a;
    a[b] = c.value;
    return a
};
$jscomp.getGlobal = function (a) {
    a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
    for (var b = 0; b < a.length; ++b) {
        var c = a[b];
        if (c && c.Math == Math) return c
    }
    throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function (a, b) {
    var c = $jscomp.propertyToPolyfillSymbol[b];
    if (null == c) return a[b];
    c = a[c];
    return void 0 !== c ? c : a[b]
};
$jscomp.polyfill = function (a, b, c, d) {
    b && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, b, c, d) : $jscomp.polyfillUnisolated(a, b, c, d))
};
$jscomp.polyfillUnisolated = function (a, b, c, d) {
    c = $jscomp.global;
    a = a.split(".");
    for (d = 0; d < a.length - 1; d++) {
        var e = a[d];
        if (!(e in c)) return;
        c = c[e]
    }
    a = a[a.length - 1];
    d = c[a];
    b = b(d);
    b != d && null != b && $jscomp.defineProperty(c, a, {
        configurable: !0,
        writable: !0,
        value: b
    })
};
$jscomp.polyfillIsolated = function (a, b, c, d) {
    var e = a.split(".");
    a = 1 === e.length;
    d = e[0];
    d = !a && d in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
    for (var f = 0; f < e.length - 1; f++) {
        var g = e[f];
        if (!(g in d)) return;
        d = d[g]
    }
    e = e[e.length - 1];
    c = $jscomp.IS_SYMBOL_NATIVE && "es6" === c ? d[e] : null;
    b = b(c);
    null != b && (a ? $jscomp.defineProperty($jscomp.polyfills, e, {
        configurable: !0,
        writable: !0,
        value: b
    }) : b !== c && (void 0 === $jscomp.propertyToPolyfillSymbol[e] && ($jscomp.propertyToPolyfillSymbol[e] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(e) :
        $jscomp.POLYFILL_PREFIX + e), $jscomp.defineProperty(d, $jscomp.propertyToPolyfillSymbol[e], {
            configurable: !0,
            writable: !0,
            value: b
        })))
};
$jscomp.underscoreProtoCanBeSet = function () {
    var a = {
        a: !0
    },
        b = {};
    try {
        return b.__proto__ = a, b.a
    } catch (c) { }
    return !1
};
$jscomp.setPrototypeOf = $jscomp.TRUST_ES6_POLYFILLS && "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function (a, b) {
    a.__proto__ = b;
    if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
    return a
} : null;
$jscomp.arrayIteratorImpl = function (a) {
    var b = 0;
    return function () {
        return b < a.length ? {
            done: !1,
            value: a[b++]
        } : {
            done: !0
        }
    }
};
$jscomp.arrayIterator = function (a) {
    return {
        next: $jscomp.arrayIteratorImpl(a)
    }
};
$jscomp.makeIterator = function (a) {
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return b ? b.call(a) : $jscomp.arrayIterator(a)
};
$jscomp.generator = {};
$jscomp.generator.ensureIteratorResultIsObject_ = function (a) {
    if (!(a instanceof Object)) throw new TypeError("Iterator result " + a + " is not an object");
};
$jscomp.generator.Context = function () {
    this.isRunning_ = !1;
    this.yieldAllIterator_ = null;
    this.yieldResult = void 0;
    this.nextAddress = 1;
    this.finallyAddress_ = this.catchAddress_ = 0;
    this.finallyContexts_ = this.abruptCompletion_ = null
};
$jscomp.generator.Context.prototype.start_ = function () {
    if (this.isRunning_) throw new TypeError("Generator is already running");
    this.isRunning_ = !0
};
$jscomp.generator.Context.prototype.stop_ = function () {
    this.isRunning_ = !1
};
$jscomp.generator.Context.prototype.jumpToErrorHandler_ = function () {
    this.nextAddress = this.catchAddress_ || this.finallyAddress_
};
$jscomp.generator.Context.prototype.next_ = function (a) {
    this.yieldResult = a
};
$jscomp.generator.Context.prototype.throw_ = function (a) {
    this.abruptCompletion_ = {
        exception: a,
        isException: !0
    };
    this.jumpToErrorHandler_()
};
$jscomp.generator.Context.prototype.return = function (a) {
    this.abruptCompletion_ = {
        return: a
    };
    this.nextAddress = this.finallyAddress_
};
$jscomp.generator.Context.prototype.jumpThroughFinallyBlocks = function (a) {
    this.abruptCompletion_ = {
        jumpTo: a
    };
    this.nextAddress = this.finallyAddress_
};
$jscomp.generator.Context.prototype.yield = function (a, b) {
    this.nextAddress = b;
    return {
        value: a
    }
};
$jscomp.generator.Context.prototype.yieldAll = function (a, b) {
    a = $jscomp.makeIterator(a);
    var c = a.next();
    $jscomp.generator.ensureIteratorResultIsObject_(c);
    if (c.done) this.yieldResult = c.value, this.nextAddress = b;
    else return this.yieldAllIterator_ = a, this.yield(c.value, b)
};
$jscomp.generator.Context.prototype.jumpTo = function (a) {
    this.nextAddress = a
};
$jscomp.generator.Context.prototype.jumpToEnd = function () {
    this.nextAddress = 0
};
$jscomp.generator.Context.prototype.setCatchFinallyBlocks = function (a, b) {
    this.catchAddress_ = a;
    void 0 != b && (this.finallyAddress_ = b)
};
$jscomp.generator.Context.prototype.setFinallyBlock = function (a) {
    this.catchAddress_ = 0;
    this.finallyAddress_ = a || 0
};
$jscomp.generator.Context.prototype.leaveTryBlock = function (a, b) {
    this.nextAddress = a;
    this.catchAddress_ = b || 0
};
$jscomp.generator.Context.prototype.enterCatchBlock = function (a) {
    this.catchAddress_ = a || 0;
    a = this.abruptCompletion_.exception;
    this.abruptCompletion_ = null;
    return a
};
$jscomp.generator.Context.prototype.enterFinallyBlock = function (a, b, c) {
    c ? this.finallyContexts_[c] = this.abruptCompletion_ : this.finallyContexts_ = [this.abruptCompletion_];
    this.catchAddress_ = a || 0;
    this.finallyAddress_ = b || 0
};
$jscomp.generator.Context.prototype.leaveFinallyBlock = function (a, b) {
    b = this.finallyContexts_.splice(b || 0)[0];
    if (b = this.abruptCompletion_ = this.abruptCompletion_ || b) {
        if (b.isException) return this.jumpToErrorHandler_();
        void 0 != b.jumpTo && this.finallyAddress_ < b.jumpTo ? (this.nextAddress = b.jumpTo, this.abruptCompletion_ = null) : this.nextAddress = this.finallyAddress_
    } else this.nextAddress = a
};
$jscomp.generator.Context.prototype.forIn = function (a) {
    return new $jscomp.generator.Context.PropertyIterator(a)
};
$jscomp.generator.Context.PropertyIterator = function (a) {
    this.object_ = a;
    this.properties_ = [];
    for (var b in a) this.properties_.push(b);
    this.properties_.reverse()
};
$jscomp.generator.Context.PropertyIterator.prototype.getNext = function () {
    for (; 0 < this.properties_.length;) {
        var a = this.properties_.pop();
        if (a in this.object_) return a
    }
    return null
};
$jscomp.generator.Engine_ = function (a) {
    this.context_ = new $jscomp.generator.Context;
    this.program_ = a
};
$jscomp.generator.Engine_.prototype.next_ = function (a) {
    this.context_.start_();
    if (this.context_.yieldAllIterator_) return this.yieldAllStep_(this.context_.yieldAllIterator_.next, a, this.context_.next_);
    this.context_.next_(a);
    return this.nextStep_()
};
$jscomp.generator.Engine_.prototype.return_ = function (a) {
    this.context_.start_();
    var b = this.context_.yieldAllIterator_;
    if (b) return this.yieldAllStep_("return" in b ? b["return"] : function (c) {
        return {
            value: c,
            done: !0
        }
    }, a, this.context_.return);
    this.context_.return(a);
    return this.nextStep_()
};
$jscomp.generator.Engine_.prototype.throw_ = function (a) {
    this.context_.start_();
    if (this.context_.yieldAllIterator_) return this.yieldAllStep_(this.context_.yieldAllIterator_["throw"], a, this.context_.next_);
    this.context_.throw_(a);
    return this.nextStep_()
};
$jscomp.generator.Engine_.prototype.yieldAllStep_ = function (a, b, c) {
    try {
        var d = a.call(this.context_.yieldAllIterator_, b);
        $jscomp.generator.ensureIteratorResultIsObject_(d);
        if (!d.done) return this.context_.stop_(), d;
        var e = d.value
    } catch (f) {
        return this.context_.yieldAllIterator_ = null, this.context_.throw_(f), this.nextStep_()
    }
    this.context_.yieldAllIterator_ = null;
    c.call(this.context_, e);
    return this.nextStep_()
};
$jscomp.generator.Engine_.prototype.nextStep_ = function () {
    for (; this.context_.nextAddress;) try {
        var a = this.program_(this.context_);
        if (a) return this.context_.stop_(), {
            value: a.value,
            done: !1
        }
    } catch (b) {
        this.context_.yieldResult = void 0, this.context_.throw_(b)
    }
    this.context_.stop_();
    if (this.context_.abruptCompletion_) {
        a = this.context_.abruptCompletion_;
        this.context_.abruptCompletion_ = null;
        if (a.isException) throw a.exception;
        return {
            value: a.return,
            done: !0
        }
    }
    return {
        value: void 0,
        done: !0
    }
};
$jscomp.generator.Generator_ = function (a) {
    this.next = function (b) {
        return a.next_(b)
    };
    this.throw = function (b) {
        return a.throw_(b)
    };
    this.return = function (b) {
        return a.return_(b)
    };
    this[Symbol.iterator] = function () {
        return this
    }
};
$jscomp.generator.createGenerator = function (a, b) {
    b = new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(b));
    $jscomp.setPrototypeOf && a.prototype && $jscomp.setPrototypeOf(b, a.prototype);
    return b
};
$jscomp.asyncExecutePromiseGenerator = function (a) {
    function b(d) {
        return a.next(d)
    }

    function c(d) {
        return a.throw(d)
    }
    return new Promise(function (d, e) {
        function f(g) {
            g.done ? d(g.value) : Promise.resolve(g.value).then(b, c).then(f, e)
        }
        f(a.next())
    })
};
$jscomp.asyncExecutePromiseGeneratorFunction = function (a) {
    return $jscomp.asyncExecutePromiseGenerator(a())
};
$jscomp.asyncExecutePromiseGeneratorProgram = function (a) {
    return $jscomp.asyncExecutePromiseGenerator(new $jscomp.generator.Generator_(new $jscomp.generator.Engine_(a)))
};
L.Polyline.plotter = L.Polyline.extend({
    _lineMarkers: [],
    _editIcon: L.divIcon({
        className: "leaflet-div-icon leaflet-editing-icon"
    }),
    _halfwayPointMarkers: [],
    _existingLatLngs: [],
    options: {
        weight: 2,
        color: "#000",
        readOnly: !1
    },
    initialize: function (a, b) {
        this._lineMarkers = [];
        this._halfwayPointMarkers = [];
        this._setExistingLatLngs(a);
        L.Polyline.prototype.initialize.call(this, [], b)
    },
    onAdd: function (a) {
        L.Polyline.prototype.onAdd.call(this, a);
        this._map = a;
        this._plotExisting();
        this.options.readOnly || this._bindMapClick()
    },
    onRemove: function (a) {
        this._halfwayPointMarkers.forEach(function (b) {
            b.remove()
        });
        this._lineMarkers.forEach(function (b) {
            b.remove()
        });
        this._halfwayPointMarkers = this._lineMarkers = [];
        this._unbindMapClick();
        L.Polyline.prototype.onRemove.call(this, a)
    },
    setLatLngs: function (a) {
        L.Polyline.prototype.setLatLngs.call(this, a)
    },
    setReadOnly: function (a) {
        if (a && !this.options.readOnly) {
            var b = "_unbindMarkerEvents",
                c = "_unbindHalfwayMarker";
            this._unbindMapClick()
        } else !a && this.options.readOnly && (c = b = "_bindMarkerEvents", this._bindMapClick());
        if ("undefined" !== typeof b) {
            this.options.readOnly = a;
            for (index in this._halfwayPointMarkers) this[c](this._halfwayPointMarkers[index]);
            for (index in this._lineMarkers) this[b](this._lineMarkers[index])
        }
    },
    _bindMapClick: function () {
        this._map.on("click", this._onMapClick, this)
    },
    _unbindMapClick: function () {
        this._map.off("click", this._onMapClick, this)
    },
    _setExistingLatLngs: function (a) {
        this._existingLatLngs = a
    },
    _replot: function () {
        this._redraw();
        this._redrawHalfwayPoints()
    },
    _getNewMarker: function (a, b) {
        return new L.marker(a,
            b)
    },
    _unbindMarkerEvents: function (a) {
        a.off("click", this._removePoint, this);
        a.off("drag", this._replot, this);
        a.dragging.disable()
    },
    _bindMarkerEvents: function (a) {
        var b = this;
        a.on("mousedown", function () {
            b._screwedUpLeafletEventsBubblingCancellation = !0
        }, this);
        a.on("click", this._removePoint, this);
        a.on("drag", this._replot, this);
        a.dragging.enable()
    },
    _bindHalfwayMarker: function (a) {
        a.on("click", this._addHalfwayPoint, this)
    },
    _unbindHalfwayMarker: function (a) {
        a.off("click", this._addHalfwayPoint, this)
    },
    _addToMapAndBindMarker: function (a) {
        a.addTo(this._map);
        this.options.readOnly || this._bindMarkerEvents(a)
    },
    _removePoint: function (a) {
        this._map.removeLayer(this._lineMarkers[this._lineMarkers.indexOf(a.target)]);
        this._lineMarkers.splice(this._lineMarkers.indexOf(a.target), 1);
        this._replot()
    },
    _onMapClick: function (a) {
        this._screwedUpLeafletEventsBubblingCancellation ? this._screwedUpLeafletEventsBubblingCancellation = !1 : (this._addNewMarker(a), this._replot())
    },
    _addNewMarker: function (a) {
        a = this._getNewMarker(a.latlng, {
            icon: this._editIcon
        });
        this._addToMapAndBindMarker(a);
        this._lineMarkers.push(a)
    },
    _redrawHalfwayPoints: function () {
        for (index in this._halfwayPointMarkers) this._map.removeLayer(this._halfwayPointMarkers[index]);
        this._halfwayPointMarkers = [];
        for (index in this._lineMarkers) {
            index = parseInt(index);
            if ("undefined" === typeof this._lineMarkers[index + 1]) break;
            var a = (new L.Marker([(this._lineMarkers[index].getLatLng().lat + this._lineMarkers[index + 1].getLatLng().lat) / 2, (this._lineMarkers[index].getLatLng().lng + this._lineMarkers[index + 1].getLatLng().lng) / 2], {
                icon: this._editIcon,
                opacity: .5
            })).addTo(this._map);
            a.index = index;
            this.options.readOnly || this._bindHalfwayMarker(a);
            this._halfwayPointMarkers.push(a)
        }
    },
    _addHalfwayPoint: function (a) {
        var b = this._getNewMarker(a.latlng, {
            icon: this._editIcon
        });
        this._addToMapAndBindMarker(b);
        this._lineMarkers.splice(a.target.index + 1, 0, b);
        this._replot()
    },
    _plotExisting: function () {
        for (index in this._existingLatLngs) this._addNewMarker({
            latlng: new L.LatLng(this._existingLatLngs[index][0], this._existingLatLngs[index][1])
        });
        this._replot()
    },
    _redraw: function () {
        this.setLatLngs([]);
        this.redraw();
        for (index in this._lineMarkers) this.addLatLng(this._lineMarkers[index].getLatLng());
        this.redraw()
    }
});
L.Polyline.Plotter = function (a, b) {
    return new L.Polyline.plotter(a, b)
};
V2 = {
    add: function (a, b) {
        return [a[0] + b[0], a[1] + b[1]]
    },
    sub: function (a, b) {
        return [a[0] - b[0], a[1] - b[1]]
    },
    length: function (a) {
        return Math.sqrt(a[0] * a[0] + a[1] * a[1])
    },
    fastLengthApprox: function (a) {
        var b = a[0];
        a = a[1];
        return Math.max(b, a) + Math.min(b, a) / 2
    },
    scale: function (a, b) {
        return [a[0] * b, a[1] * b]
    }
};
V3 = {
    isValid: function (a) {
        if (!a) return !1;
        for (var b = 0; 2 >= b; b++)
            if (null === a[b] || isNaN(a[b])) return !1;
        return !0
    },
    dup: function (a) {
        return [a[0], a[1], a[2]]
    },
    toString: function (a) {
        return "[" + a[0] + ", " + a[1] + ", " + a[2] + "]"
    },
    nearlyEqual: function (a, b, c) {
        c || (c = 1E-6);
        return Math.abs(a[0] - b[0]) <= c && Math.abs(a[1] - b[1]) <= c && Math.abs(a[2] - b[2]) <= c
    },
    abs: function (a) {
        return [Math.abs(a[0]), Math.abs(a[1]), Math.abs(a[2])]
    },
    cross: function (a, b) {
        var c = a[0],
            d = a[1];
        a = a[2];
        var e = b[0],
            f = b[1];
        b = b[2];
        return [d * b - a * f, a * e - c * b, c * f - d * e]
    },
    dot: function (a,
        b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
    },
    add: function (a, b) {
        return [a[0] + b[0], a[1] + b[1], a[2] + b[2]]
    },
    addAngles: function (a, b) {
        return [fixAngle(a[0] + b[0]), fixAngle(a[1] + b[1]), fixAngle(a[2] + b[2])]
    },
    sub: function (a, b) {
        return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]
    },
    mult: function (a, b) {
        return [a[0] * b[0], a[1] * b[1], a[2] * b[2]]
    },
    scale: function (a, b) {
        return [a[0] * b, a[1] * b, a[2] * b]
    },
    length: function (a) {
        return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2])
    },
    normalize: function (a) {
        var b = V3.length(a);
        return 0 >= b ? [NaN, NaN, NaN] : V3.scale(a,
            1 / b)
    },
    bisect: function (a, b) {
        return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2]
    },
    rotate: function (a, b, c) {
        var d = V3.dot(a, b);
        a = V3.sub(a, V3.scale(b, d));
        var e = V3.cross(b, a);
        return V3.add(V3.scale(b, d), V3.add(V3.scale(a, Math.cos(c)), V3.scale(e, Math.sin(c))))
    },
    toRadians: function (a) {
        return [a[0] * DEGREES_TO_RAD, a[1] * DEGREES_TO_RAD, a[2] * DEGREES_TO_RAD]
    },
    toDegrees: function (a) {
        return [a[0] * RAD_TO_DEGREES, a[1] * RAD_TO_DEGREES, a[2] * RAD_TO_DEGREES]
    },
    clamp: function (a, b, c) {
        return [clamp(a[0], b, c), clamp(a[1], b, c), clamp(a[2],
            b, c)]
    },
    span: function (a, b, c) {
        return [span(a[0], b, c), span(a[1], b, c), span(a[2], b, c)]
    },
    exponentialSmoothing: function (a, b, c) {
        return [exponentialSmoothing(a + "0", b[0], c), exponentialSmoothing(a + "1", b[1], c), exponentialSmoothing(a + "2", b[2], c)]
    },
    sqrt: function (a) {
        return [Math.sqrt(Math.abs(a[0])) * Math.sign(a[0]), Math.sqrt(Math.abs(a[1])) * Math.sign(a[1]), Math.sqrt(Math.abs(a[2])) * Math.sign(a[2])]
    }
};
M33 = {
    toString: function (a) {
        return "[" + V3.toString(a[0]) + ", " + V3.toString(a[1]) + ", " + V3.toString(a[2]) + "]"
    },
    toM4: function (a) {
        return [a[0][0], a[0][1], a[0][2], 0, a[1][0], a[1][1], a[1][2], 0, a[2][0], a[2][1], a[2][2], 0, 0, 0, 0, 0]
    },
    toArray: function (a) {
        return [a[0][0], a[0][1], a[0][2], a[1][0], a[1][1], a[1][2], a[2][0], a[2][1], a[2][2]]
    },
    toRowMajorArray: function (a) {
        return [a[0][0], a[1][0], a[2][0], a[0][1], a[1][1], a[2][1], a[0][2], a[1][2], a[2][2]]
    },
    fromColumnMajorArray: function (a) {
        return [
            [a[0], a[3], a[6]],
            [a[1], a[4], a[7]],
            [a[2], a[5], a[8]]
        ]
    },
    fromRowMajorArray: function (a) {
        return [
            [a[0], a[1], a[2]],
            [a[3], a[4], a[5]],
            [a[6], a[7], a[8]]
        ]
    },
    identity: function () {
        return [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]
        ]
    },
    dup: function (a) {
        return [V3.dup(a[0]), V3.dup(a[1]), V3.dup(a[2])]
    },
    nearlyEqual: function (a, b) {
        return V3.nearlyEqual(a[0], b[0]) && V3.nearlyEqual(a[1], b[1]) && V3.nearlyEqual(a[2], b[2])
    },
    transpose: function (a) {
        return [
            [a[0][0], a[1][0], a[2][0]],
            [a[0][1], a[1][1], a[2][1]],
            [a[0][2], a[1][2], a[2][2]]
        ]
    },
    add: function (a, b) {
        return [V3.add(a[0], b[0]), V3.add(a[1],
            b[1]), V3.add(a[2], b[2])]
    },
    multiplyV: function (a, b) {
        var c = b[0],
            d = b[1];
        b = b[2];
        var e = a[0],
            f = a[1];
        a = a[2];
        return [e[0] * c + e[1] * d + e[2] * b, f[0] * c + f[1] * d + f[2] * b, a[0] * c + a[1] * d + a[2] * b]
    },
    multiply: function (a, b) {
        var c = a[0][0],
            d = a[0][1],
            e = a[0][2],
            f = a[1][0],
            g = a[1][1],
            k = a[1][2],
            m = a[2][0],
            n = a[2][1];
        a = a[2][2];
        var x = b[0][0],
            q = b[0][1],
            z = b[0][2],
            r = b[1][0],
            p = b[1][1],
            F = b[1][2],
            H = b[2][0],
            B = b[2][1];
        b = b[2][2];
        return [
            [c * x + f * q + m * z, d * x + g * q + n * z, e * x + k * q + a * z],
            [c * r + f * p + m * F, d * r + g * p + n * F, e * r + k * p + a * F],
            [c * H + f * B + m * b, d * H + g * B + n * b, e * H + k * B + a *
                b
            ]
        ]
    },
    scaled: function (a, b) {
        return [
            [a[0][0] * b[0], a[0][1] * b[1], a[0][2] * b[2]],
            [a[1][0] * b[0], a[1][1] * b[1], a[1][2] * b[2]],
            [a[2][0] * b[0], a[2][1] * b[1], a[2][2] * b[2]]
        ]
    },
    transform: function (a, b) {
        var c = a[0],
            d = a[1];
        a = a[2];
        var e = b[0],
            f = b[1];
        b = b[2];
        return [c[0] * e + d[0] * f + a[0] * b, c[1] * e + d[1] * f + a[1] * b, c[2] * e + d[2] * f + a[2] * b]
    },
    rotationXYZ: function (a, b) {
        b = M33.setFromEuler(b);
        return b = M33.multiply(a, b)
    },
    rotationX: function (a, b) {
        var c = Math.cos(b);
        b = Math.sin(b);
        return M33.multiply(a, [
            [1, 0, 0],
            [0, c, -b],
            [0, b, c]
        ])
    },
    rotationY: function (a,
        b) {
        var c = Math.cos(b);
        b = Math.sin(b);
        return M33.multiply(a, [
            [c, 0, b],
            [0, 1, 0],
            [-b, 0, c]
        ])
    },
    rotationZ: function (a, b) {
        var c = Math.cos(b);
        b = Math.sin(b);
        return M33.multiply(a, [
            [c, -b, 0],
            [b, c, 0],
            [0, 0, 1]
        ])
    },
    rotationParentFrameX: function (a, b) {
        var c = Math.cos(b);
        b = Math.sin(b);
        return M33.multiply([
            [1, 0, 0],
            [0, c, -b],
            [0, b, c]
        ], a)
    },
    rotationParentFrameY: function (a, b) {
        var c = Math.cos(b);
        b = Math.sin(b);
        return M33.multiply([
            [c, 0, b],
            [0, 1, 0],
            [-b, 0, c]
        ], a)
    },
    rotationParentFrameZ: function (a, b) {
        var c = Math.cos(b);
        b = Math.sin(b);
        return M33.multiply([
            [c,
                -b, 0
            ],
            [b, c, 0],
            [0, 0, 1]
        ], a)
    },
    rotate: function (a, b, c) {
        var d = b[0],
            e = b[1];
        b = b[2];
        var f = Math.cos(c),
            g = 1 - f;
        c = Math.sin(c);
        return M33.multiply(a, [
            [d * d * g + f, e * d * g + b * c, b * d * g - e * c],
            [d * e * g - b * c, e * e * g + f, e * b * g + d * c],
            [d * b * g + e * c, e * b * g - d * c, b * b * g + f]
        ])
    },
    transformByTranspose: function (a, b) {
        return [a[0][0] * b[0] + a[0][1] * b[1] + a[0][2] * b[2], a[1][0] * b[0] + a[1][1] * b[1] + a[1][2] * b[2], a[2][0] * b[0] + a[2][1] * b[1] + a[2][2] * b[2]]
    },
    makeOrthonormalFrame: function (a, b) {
        a = V3.normalize(a);
        b = V3.normalize(V3.cross(b, a));
        var c = V3.cross(b, a);
        return [b,
            a, c
        ]
    },
    setFromEuler: function (a) {
        var b = Math.cos(a[0]),
            c = Math.sin(a[0]),
            d = Math.cos(a[1]),
            e = Math.sin(a[1]),
            f = Math.cos(a[2]);
        a = Math.sin(a[2]);
        return [
            [f * d + a * c * e, -a * d + f * c * e, b * e],
            [a * b, f * b, -c],
            [f * -e + a * c * d, -a * -e + f * c * d, b * d]
        ]
    },
    getOrientation: function (a) {
        if (.998 < a[1][2]) {
            var b = Math.atan2(-a[2][0], -a[2][1]);
            var c = -HALF_PI;
            a = 0
        } else - .998 > a[1][2] ? (b = Math.atan2(a[2][0], a[2][1]), c = HALF_PI, a = 0) : (b = Math.atan2(a[1][0], a[1][1]), c = Math.asin(-a[1][2]), a = Math.atan2(a[0][2], a[2][2]));
        return [b * RAD_TO_DEGREES, c * RAD_TO_DEGREES,
        a * RAD_TO_DEGREES
        ]
    },
    toMatrix: function (a) {
        return a
    }
};
M33.toEuler = M33.getOrientation;
M3 = {
    identity: function () {
        return [0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    sub: function (a, b) {
        for (var c = [], d = 0; 9 > d; d++) c[d] = a[d] - b[d];
        return c
    },
    add: function (a, b) {
        for (var c = [], d = 0; 9 > d; d++) c[d] = a[d] + b[d];
        return c
    },
    dup: function (a) {
        return [a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8]]
    },
    scale: function (a, b) {
        for (var c = [], d = 0; 9 > d; d++) c[d] = a[d] * b;
        return c
    },
    toM33: function (a) {
        return [
            [a[0], a[1], a[2]],
            [a[3], a[4], a[5]],
            [a[6], a[7], a[8]]
        ]
    }
};
M4 = {
    fromRowMajorArray: function (a) {
        return [
            [a[0], a[1], a[2], a[4]],
            [a[5], a[6], a[7], a[8]],
            [a[9], a[10], a[11], a[12]],
            [a[13], a[14], a[15], a[16]]
        ]
    },
    fromColumnMajorArray: function (a) {
        return [
            [a[0], a[4], a[8], a[12]],
            [a[1], a[5], a[9], a[13]],
            [a[2], a[6], a[10], a[14]],
            [a[3], a[7], a[11], a[15]]
        ]
    }
};
var SMALL_NUM = 1E-8;

function intersect_RayTriangle(a, b) {
    var c = b.u;
    var d = b.v;
    var e = b.n;
    var f = V3.sub(a[1], a[0]);
    var g = V3.sub(a[0], b[0]);
    g = -V3.dot(e, g);
    e = V3.dot(e, f);
    if (Math.abs(e) < SMALL_NUM) return null;
    e = g / e;
    if (0 > e || 1 < e) return null;
    f = V3.scale(f, e);
    a = V3.add(a[0], f);
    f = V3.dot(c, c);
    e = V3.dot(c, d);
    g = V3.dot(d, d);
    b = V3.sub(a, b[0]);
    c = V3.dot(b, c);
    d = V3.dot(b, d);
    b = e * e - f * g;
    g = (e * d - g * c) / b;
    if (0 > g || 1 < g) return null;
    d = (e * c - f * d) / b;
    return 0 > d || 1 < g + d ? null : {
        point: a
    }
}
S2 = {
    identity: function () {
        return {
            x: 1,
            y: 1
        }
    },
    mult: function (a, b) {
        return {
            x: a.x * b.x,
            y: a.y * b.y
        }
    },
    add: function (a, b) {
        return {
            x: a.x + b.x,
            y: a.y + b.y
        }
    },
    scale: function (a, b) {
        return {
            x: a.x * b,
            y: a.y * b
        }
    }
};
Math.sign = function (a) {
    return 0 > a ? -1 : 1
};
Math.arrayToPrecision = function (a, b) {
    for (var c = a.length; 0 <= c; c--) a[c] && a[c].toFixed && (a[c] = parseFloat(a[c].toFixed(b)));
    return a
};
"use strict";
window.geofs = window.geofs || {};
var GRAVITY = 9.81,
    DEGREES_TO_RAD = Math.PI / 180,
    RAD_TO_DEGREES = 180 / Math.PI,
    KMH_TO_MS = 1 / 3.6,
    METERS_TO_FEET = 3.2808399,
    FEET_TO_METERS = .3048,
    LONGITUDE_TO_HOURS = .0666,
    EPSILON = 1E-7,
    MERIDIONAL_RADIUS = 6378137,
    EARTH_CIRCUMFERENCE = 2 * MERIDIONAL_RADIUS * Math.PI,
    METERS_TO_LOCAL_LAT = 1 / (EARTH_CIRCUMFERENCE / 360),
    WGS84_TO_EGM96 = -37,
    EGM96_TO_WGS84 = 37,
    PI = Math.PI,
    HALF_PI = PI / 2,
    TWO_PI = 2 * PI,
    MS_TO_KNOTS = 1.94384449,
    KNOTS_TO_MS = .514444444,
    KMH_TO_KNOTS = .539956803,
    AXIS_TO_INDEX = {
        X: 0,
        Y: 1,
        Z: 2
    },
    AXIS_TO_VECTOR = {
        X: [1, 0, 0],
        Y: [0, 1, 0],
        Z: [0,
            0, 1
        ]
    },
    KELVIN_OFFSET = 273.15,
    TEMPERATURE_LAPSE_RATE = .0065,
    AIR_DENSITY_SL = 1.22,
    AIR_PRESSURE_SL = 101325,
    AIR_TEMP_SL = 15,
    DRAG_CONSTANT = .07,
    MIN_DRAG_COEF = .02,
    PLANFORM_EFFICIENCY_FACTOR = .7,
    TOTAL_DRAG_CONSTANT = DRAG_CONSTANT + MIN_DRAG_COEF,
    IDEAL_GAS_CONSTANT = 8.31447,
    MOLAR_MASS_DRY_AIR = .0289644,
    GAS_CONSTANT = IDEAL_GAS_CONSTANT / MOLAR_MASS_DRY_AIR,
    GM_RL = GRAVITY * MOLAR_MASS_DRY_AIR / (IDEAL_GAS_CONSTANT * TEMPERATURE_LAPSE_RATE),
    DEFAULT_AIRFOIL_ASPECT_RATIO = 7,
    FOV = 60,
    VIEWPORT_REFERENCE_WIDTH = 1800,
    VIEWPORT_REFERENCE_HEIGHT =
        800,
    SMOOTH_BUFFER = {},
    SMOOTHING_FACTOR = .2,
    SIX_STEP_WARNING = "#18a400 #2b9100 #487300 #835b00 #933700 #a71500".split(" ");
"use strict";
var Object3D = function (a) {
    a = a || {};
    this._name = a.name;
    this._nodeName = a.node;
    this._children = [];
    a["3dmodel"] && this.setModel(a["3dmodel"]);
    a.entity && this.setEntity(a.entity);
    this.setLight(a);
    this._points = a.points || {};
    this._collisionPoints = a.collisionPoints || [];
    var b = this._points,
        c;
    for (c in b) b[c].worldPosition = [0, 0, 0];
    b = this._collisionPoints;
    for (c in b) b[c].worldPosition = [0, 0, 0];
    this.setInitiallRotation(a.rotation);
    this.setInitialPosition(a.position);
    this.setInitialScale(a.scale);
    this.setScale(a.scale);
    this.visible = !0;
    this._options = Object.assign({}, a)
};
Object3D.prototype = {
    reset: function () {
        this.setInitiallRotation(this._options.rotation);
        this.setInitialPosition(this._options.position);
        this.worldRotation = this._rotation;
        this.worldPosition = this._position
    },
    setInitiallRotation: function (a) {
        this._initialRotation = M33.identity();
        this._initialRotation = M33.rotationXYZ(this._initialRotation, a || [0, 0, 0]);
        this._rotation = M33.dup(this._initialRotation)
    },
    rotateInitialRotation: function (a) {
        this._initialRotation = M33.rotationXYZ(this._initialRotation, a || [0, 0, 0]);
        this._rotation =
            M33.dup(this._initialRotation)
    },
    rotate: function (a) {
        this._rotation = M33.rotationXYZ(this._rotation, a)
    },
    rotateX: function (a) {
        this._rotation = M33.rotationX(this._rotation, a)
    },
    rotateY: function (a) {
        this._rotation = M33.rotationY(this._rotation, a)
    },
    rotateZ: function (a) {
        this._rotation = M33.rotationZ(this._rotation, a)
    },
    setRotationX: function (a) {
        this._rotation = M33.rotationX(this._initialRotation, a)
    },
    setRotationY: function (a) {
        this._rotation = M33.rotationY(this._initialRotation, a)
    },
    setRotationZ: function (a) {
        this._rotation =
            M33.rotationZ(this._initialRotation, a)
    },
    rotateParentFrameX: function (a) {
        this._rotation = M33.rotationParentFrameX(this._rotation, a)
    },
    rotateParentFrameY: function (a) {
        this._rotation = M33.rotationParentFrameY(this._rotation, a)
    },
    rotateParentFrameZ: function (a) {
        this._rotation = M33.rotationParentFrameZ(this._rotation, a)
    },
    getRotation: function () {
        return this._rotation
    },
    setInitialPosition: function (a) {
        this._nodeName && (this._nodeOrigin = a, a = [0, 0, 0]);
        a = a || [0, 0, 0];
        this._initialPosition = V3.dup(a);
        this._position = V3.dup(this._initialPosition)
    },
    setInitialScale: function (a) {
        a = a || 1;
        a.length || (a = [a, a, a]);
        this._initialScale = a
    },
    scale: function (a, b) {
        a = a || 1;
        a.length || (a = [a, a, a]);
        this._scale = V3.mult(this._initialScale, a);
        b && this.propagateToTree("scale", [a, b])
    },
    setPosition: function (a) {
        this._position = a
    },
    translate: function (a) {
        this._position = V3.add(this._position, a)
    },
    setTranslation: function (a) {
        this._position = V3.add(this._initialPosition, a)
    },
    setScale: function (a, b) {
        a = a || 1;
        a.length || (a = [a, a, a]);
        this._scale = a;
        b && this.propagateToTree("setScale", [a, b])
    },
    setOpacity: function (a) {
        geofs.api.setModelOpacity(this._model,
            a || 1)
    },
    setScaleOffset: function (a, b) {
        this._scaleOffset = a;
        b && this.propagateToTree("setScaleOffset", [a, b])
    },
    getPosition: function () {
        return this._position
    },
    getLocalPosition: function () {
        var a = this._position;
        this._parent && (a = V3.add(a, this._parent.getLocalPosition()));
        return a
    },
    resetAnimatedTransform: function () {
        this._rotation = M33.dup(this._initialRotation);
        this._position = V3.dup(this._initialPosition)
    },
    resetRotationMatrix: function () {
        if (this.htr) {
            var a = V3.toRadians(this.htr);
            this.setInitiallRotation([a[1], a[2],
            a[0]
            ])
        }
    },
    setVectorWorldPosition: function (a) {
        a.worldPosition = M33.transform(this.worldRotation, a);
        a.worldPosition = V3.add(this.worldPosition, a.worldPosition);
        return a.worldPosition
    },
    compute: function (a) {
        if (this._parent) {
            this.worldRotation = M33.multiply(this._parent.worldRotation, this._rotation);
            var b = this._position;
            this._nodeName && (this._nodeOrigin = this._nodeOrigin || this.getNodePosition()) && (b = V3.add(this._position, this._nodeOrigin));
            this.worldPosition = M33.transform(this._parent.worldRotation, b);
            this.worldPosition =
                V3.add(this.worldPosition, this._parent.worldPosition)
        } else this.worldRotation = this._initialRotation, this.worldPosition = M33.transform(this._initialRotation, this._position);
        b = this._points;
        for (var c in b) this.setVectorWorldPosition(b[c]);
        b = this._collisionPoints;
        c = 0;
        for (var d = b.length; c < d; c++) this.setVectorWorldPosition(b[c]);
        !this._nodeName && (c = this._scaleOffset ? V3.scale(this.worldPosition, this._scaleOffset) : this.worldPosition, this._model || this._entity || "root" == this._name) && (this.htr = M33.toEuler(this.worldRotation),
            this.lla = V3.add(a, xyz2lla(c, a)));
        this.propagateToTree("compute", [a])
    },
    render: function (a) {
        var b = this._scaleOffset ? V3.scale(this.worldPosition, this._scaleOffset) : this.worldPosition;
        if (this.visible) {
            if (this._model)
                if (this._nodeName) {
                    var c = this.getNode();
                    c && geofs.api.setNodeRotationTranslationScale(c, this.getRotation(), this._position, this._scale)
                } else geofs.api.setModelPositionOrientationAndScale(this._model, this.lla, this.htr, this._scale, this);
            this._entity && geofs.api.setEntityPositionOrientation(this._entity,
                this.lla, this.htr);
            this._light && (this.lla = V3.add(a, xyz2lla(b, a)), this._light && this._light.setLocation(this.lla))
        }
        this.propagateToTree("render", [a])
    },
    setModel: function (a) {
        this._model = a
    },
    setEntity: function (a) {
        this._entity = a
    },
    getModel: function (a) {
        return this._model
    },
    getNode: function () {
        if (!this._node) {
            if (!this._model || !this._model.ready) return;
            this._node = geofs.api.getModelNode(this._model, this._nodeName)
        }
        return this._node
    },
    getNodePosition: function () {
        var a = this.getNode();
        return a ? geofs.api.getNodePosition(a) :
            null
    },
    getNodeRotation: function () {
        var a = this.getNode();
        return a ? geofs.api.getNodeRotation(a) : M33.identity()
    },
    setLight: function (a) {
        a.lightBillboard && (this._light = a.lightBillboard)
    },
    getWorldFrame: function () {
        return this.worldRotation
    },
    getWorldPosition: function () {
        return this.worldPosition
    },
    getLlaLocation: function () {
        return this.lla
    },
    addChild: function (a) {
        a._parent = this;
        this._children.push(a)
    },
    setVisibility: function (a, b) {
        var c = !0;
        if (a && !b)
            for (b = this._parent; b && "root" != b._options.type;) c = c && b.visible, b = b._parent;
        b = !0;
        c && (this._model && (b = this._nodeName ? geofs.api.setNodeVisibility(this.getNode(), a) : geofs.api.setModelVisibility(this._model, a)), this._light && (b = this._light.setVisibility(a)), this._entity && (this._entity.show = a, b = !0), this.propagateToTree("setVisibility", [a, !0]));
        b && (this.visible = a)
    },
    findModelInAncestry: function () {
        for (var a = this; a;) {
            var b = a.getModel();
            if (b) return b;
            a = a.getParent()
        }
    },
    getParent: function () {
        return this._parent
    },
    propagateToTree: function (a, b) {
        for (var c = this._children, d = 0, e = c.length; d < e; d++) {
            var f =
                c[d];
            f[a].apply(f, b)
        }
    },
    destroy: function () {
        this._node = null;
        this._model && (geofs.api.destroyModel(this._model), this._model = null)
    }
};
Object3D.utilities = {
    getPointLla: function (a, b) {
        return a.lla ? a.lla : a.worldPosition ? V3.add(b, xyz2lla(a.worldPosition, b)) : a
    }
};
geofs.runways = {
    runwayNumberLimit: 4,
    refreshRate: 1E4,
    refreshDistanceThreshold: .1,
    modelVisibility: !1,
    defaultPadding: 1E3,
    defaultWidth: 60,
    tileLength: 582,
    modelRunwayWidth: 60,
    thresholdLength: 582,
    modelVerticalOffset: .1,
    imageryLayers: [],
    imageryOpacity: .7,
    redraw: function () {
        geofs.runways.modelVisibility && (geofs.runways.setRunwayModelVisibility(!1), geofs.runways.setRunwayModelVisibility(!0))
    },
    refresh: function () {
        var a = geofs.aircraft.instance.llaLocation;
        clearInterval(geofs.runwaysCheckTimeout);
        geofs.runwaysCheckTimeout =
            setInterval(geofs.runways.refresh, geofs.runways.refreshRate);
        if (!(V2.length(V2.sub(a, geofs.fx.lastRunwayTestLocation)) < geofs.runways.refreshDistanceThreshold)) {
            geofs.fx.lastRunwayTestLocation = a;
            a = geofs.runways.getNearRunways(a, geofs.runways.runwayNumberLimit);
            for (var b = {}, c = 0; c < a.length; c++) {
                var d = geofs.runways.generateRunwayId(a[c]);
                b[d] || (b[d] = new geofs.runways.runway(a[c], d))
            }
            for (c in geofs.runways.nearRunways) b[c] || geofs.runways.nearRunways[c].destroy();
            geofs.runways.nearRunways = Object.assign({},
                b);
            $("body").trigger("runwayUpdate")
        }
    },
    reset: function () {
        Object.keys(geofs.runways.nearRunways).forEach(function (a) {
            return geofs.runways.nearRunways[a].destroy()
        });
        geofs.runways.nearRunways = {};
        geofs.runways.refresh()
    },
    getNearestRunway: function (a) {
        var b = 0;
        do var c = geofs.runways.getNearRunways(a, 1, b++); while (!c.length && 5 > b);
        return c[0] ? (a = c[0], b = geofs.runways.generateRunwayId(a), geofs.runways.nearRunways[b] || (geofs.runways.nearRunways[b] = new geofs.runways.runway(a, b)), geofs.runways.nearRunways[b]) : null
    },
    getNearRunways: function (a, b, c) {
        c = c || 0;
        b = b || geofs.runways.runwayNumberLimit;
        for (var d = parseInt(a[0]), e = parseInt(a[1]), f = [], g, k = -c; k <= c; k++) {
            g = geofs.majorRunwayGrid[e + k] || {};
            for (var m = -c; m <= c; m++) g[d + m] && (f = f.concat(g[d + m]))
        }
        geofs.runways.setRunwayDistance(a, f);
        f.sort(function (n, x) {
            return n.distance - x.distance
        });
        return f.slice(0, b)
    },
    setRunwayDistance: function (a, b) {
        for (var c = 0, d = b.length; c < d; c++) {
            var e = b[c];
            e.distance = geofs.utils.llaDistanceInMeters(a, [e[4], e[5]])
        }
    },
    setRunwayModelVisibility: function (a) {
        Object.keys(geofs.runways.nearRunways).forEach(function (b) {
            geofs.runways.nearRunways[b].destroyRunwayModel();
            a && geofs.runways.nearRunways[b].generateRunwayModel()
        });
        geofs.runways.modelVisibility = a
    },
    env: {},
    getRotationCanvas: function (a) {
        geofs.runways.env[a] || (geofs.runways.env[a] = {}, geofs.runways.env[a].promise = new Promise(function (b) {
            var c = document.createElement("img");
            c.onload = function (d) {
                d = d.currentTarget;
                var e = document.createElement("canvas");
                e.width = d.width;
                e.height = d.width;
                geofs.runways.env[a].image = d;
                geofs.runways.env[a].canvas = e;
                geofs.runways.env[a].context = e.getContext("2d");
                geofs.runways.env[a].context.translate(d.width /
                    2, d.width / 2);
                b(geofs.runways.env[a])
            };
            c.src = a
        }), geofs.runways.env[a].promise.then(function (b) {
            return b
        }));
        return geofs.runways.env[a].promise
    },
    asyncSetImageLayerRotationPosition: function (a, b, c, d) {
        var e, f, g;
        return $jscomp.asyncExecutePromiseGeneratorProgram(function (k) {
            if (1 == k.nextAddress) return k.yield(geofs.runways.getRotationCanvas(a), 2);
            e = k.yieldResult;
            e.context.clearRect(-e.image.width, -e.image.width, 2 * e.image.width, 2 * e.image.width);
            e.context.save();
            e.context.rotate(b);
            e.context.drawImage(e.image,
                -e.image.width / 2, -(e.image.height / 2));
            f = {
                rectangle: c,
                alpha: geofs.runways.imageryOpacity,
                minimumTerrainLevel: 12
            };
            e.canvas.toBlob ? e.canvas.toBlob(function (m) {
                m = new Cesium.ImageryLayer(new Cesium.SingleTileImageryProvider({
                    url: URL.createObjectURL(m),
                    rectangle: c
                }), f);
                geofs.api.viewer.imageryLayers.add(m);
                d.imageryLayers.push(m)
            }) : (g = new Cesium.ImageryLayer(new Cesium.SingleTileImageryProvider({
                url: e.canvas.toDataURL(),
                rectangle: c
            }), f), geofs.api.viewer.imageryLayers.add(g), d.imageryLayers.push(g));
            e.context.restore();
            k.jumpToEnd()
        })
    }
};
geofs.runways.generateRunwayId = function (a) {
    return a[0] + a[1] + a[3]
};
geofs.runways.runway = function (a, b) {
    this.id = b || geofs.runways.generateRunwayId(a);
    this.icao = a[0];
    this.location = [a[4], a[5], 0];
    this.heading = fixAngle(a[3]);
    this.headingRad = this.heading * DEGREES_TO_RAD;
    this.lengthFeet = a[1];
    this.widthFeet = a[2];
    this.lengthMeters = this.lengthFeet * FEET_TO_METERS;
    this.widthMeters = (this.widthFeet || geofs.runways.defaultWidth) * FEET_TO_METERS;
    this.threshold1 = this.location;
    this.padding = a[6] || geofs.runways.defaultPadding;
    this.meterlla = xy2ll([Math.sin(this.headingRad), Math.cos(this.headingRad)],
        this.threshold1);
    this.lengthInLla = V2.scale(this.meterlla, this.lengthMeters);
    this.widthInLla = xy2ll([-Math.cos(this.headingRad) * this.widthMeters, Math.sin(this.headingRad) * this.widthMeters], this.threshold1);
    this.meterAcrossInLla = V3.scale(this.widthInLla, 1 / this.widthMeters);
    this.threshold2 = V2.add(this.threshold1, this.lengthInLla);
    this.imageryLayers = [];
    geofs.runways.modelVisibility && this.generateRunwayModel()
};
geofs.runways.runway.prototype = {
    generateRunwayModel: function () {
        if (!this.modelExists) {
            var a = clamp(this.widthMeters / geofs.runways.modelRunwayWidth, .5, 10),
                b = new Cesium.Color(.5, .5, .5, .7);
            if (geofs.retroOn) b = new Cesium.GeometryInstance({
                geometry: new Cesium.GroundPolylineGeometry({
                    positions: Cesium.Cartesian3.fromDegreesArray([this.threshold1[1] - this.widthInLla[1], this.threshold1[0] - this.widthInLla[0], this.threshold1[1] + this.widthInLla[1], this.threshold1[0] + this.widthInLla[0], this.threshold2[1] + this.widthInLla[1],
                    this.threshold2[0] + this.widthInLla[0], this.threshold2[1] - this.widthInLla[1], this.threshold2[0] - this.widthInLla[0]
                    ]),
                    width: 10,
                    loop: !0
                }),
                attributes: {
                    color: Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.fromCssColorString("#2caecf"))
                }
            }), geofs.api.viewer.scene.groundPrimitives.add(new Cesium.GroundPolylinePrimitive({
                geometryInstances: b,
                appearance: new Cesium.PolylineColorAppearance
            }));
            else if (!Cesium.Entity.supportsMaterialsforEntitiesOnTerrain(geofs.api.viewer.scene) || geofs.isApp || geofs.api.renderingSettings.lowResRunways) {
                b =
                    .5 * this.lengthMeters;
                V2.scale(this.meterlla, b);
                var c = .5 * b;
                b = V2.scale(this.meterlla, c);
                c = xy2ll([c, c], this.threshold1);
                var d = [this.threshold1[0] + b[0], this.threshold1[1] + b[1]];
                d = Cesium.Rectangle.fromDegrees(d[1] - c[1], d[0] - c[0], d[1] + c[1], d[0] + c[0]);
                geofs.runways.asyncSetImageLayerRotationPosition("models/objects/runway/full.jpg", this.headingRad - HALF_PI, d, this);
                d = [this.threshold2[0] - b[0], this.threshold2[1] - b[1]];
                d = Cesium.Rectangle.fromDegrees(d[1] - c[1], d[0] - c[0], d[1] + c[1], d[0] + c[0]);
                geofs.runways.asyncSetImageLayerRotationPosition("models/objects/runway/full.jpg",
                    this.headingRad + HALF_PI, d, this)
            } else {
                this.entities = [];
                var e = V2.scale(this.meterlla, geofs.runways.thresholdLength * a);
                c = geofs.api.viewer.entities.add({
                    polygon: {
                        hierarchy: {
                            positions: [new Cesium.Cartesian3.fromDegrees(this.threshold1[1] - this.widthInLla[1], this.threshold1[0] - this.widthInLla[0], 0), new Cesium.Cartesian3.fromDegrees(this.threshold1[1] + e[1] - this.widthInLla[1], this.threshold1[0] + e[0] - this.widthInLla[0], 0), new Cesium.Cartesian3.fromDegrees(this.threshold1[1] + e[1] + this.widthInLla[1], this.threshold1[0] +
                                e[0] + this.widthInLla[0], 0), new Cesium.Cartesian3.fromDegrees(this.threshold1[1] + this.widthInLla[1], this.threshold1[0] + this.widthInLla[0], 0)]
                        },
                        material: new Cesium.ImageMaterialProperty({
                            image: "models/objects/runway/threshold2.jpg",
                            color: b
                        }),
                        classificationType: Cesium.ClassificationType.TERRAIN,
                        stRotation: this.headingRad - HALF_PI,
                        shadows: Cesium.ShadowMode.ENABLED
                    },
                    interleave: !1,
                    allowPicking: !1
                });
                this.entities.push(c);
                c = geofs.api.viewer.entities.add({
                    polygon: {
                        hierarchy: {
                            positions: [new Cesium.Cartesian3.fromDegrees(this.threshold2[1] -
                                this.widthInLla[1], this.threshold2[0] - this.widthInLla[0], 0), new Cesium.Cartesian3.fromDegrees(this.threshold2[1] - e[1] - this.widthInLla[1], this.threshold2[0] - e[0] - this.widthInLla[0], 0), new Cesium.Cartesian3.fromDegrees(this.threshold2[1] - e[1] + this.widthInLla[1], this.threshold2[0] - e[0] + this.widthInLla[0], 0), new Cesium.Cartesian3.fromDegrees(this.threshold2[1] + this.widthInLla[1], this.threshold2[0] + this.widthInLla[0], 0)]
                        },
                        material: new Cesium.ImageMaterialProperty({
                            image: "models/objects/runway/threshold2.jpg",
                            color: b
                        }),
                        classificationType: Cesium.ClassificationType.TERRAIN,
                        stRotation: this.headingRad + HALF_PI,
                        shadows: Cesium.ShadowMode.ENABLED
                    },
                    interleave: !1,
                    allowPicking: !1
                });
                this.entities.push(c);
                d = Math.floor((this.lengthMeters - 2 * geofs.runways.thresholdLength * a) / (geofs.runways.tileLength * a));
                a = V2.scale(this.meterlla, geofs.runways.tileLength * a);
                e = [this.threshold1[0] + e[0], this.threshold1[1] + e[1]];
                for (var f = 0; f <= d; f++) c = geofs.api.viewer.entities.add({
                    polygon: {
                        hierarchy: {
                            positions: [new Cesium.Cartesian3.fromDegrees(e[1] -
                                this.widthInLla[1], e[0] - this.widthInLla[0], 0), new Cesium.Cartesian3.fromDegrees(e[1] + a[1] - this.widthInLla[1], e[0] + a[0] - this.widthInLla[0], 0), new Cesium.Cartesian3.fromDegrees(e[1] + a[1] + this.widthInLla[1], e[0] + a[0] + this.widthInLla[0], 0), new Cesium.Cartesian3.fromDegrees(e[1] + this.widthInLla[1], e[0] + this.widthInLla[0], 0)]
                        },
                        material: new Cesium.ImageMaterialProperty({
                            image: "models/objects/runway/tile2.jpg",
                            color: b
                        }),
                        classificationType: Cesium.ClassificationType.TERRAIN,
                        stRotation: this.headingRad + HALF_PI,
                        shadows: Cesium.ShadowMode.ENABLED
                    },
                    interleave: !1,
                    allowPicking: !1
                }), e = V2.add(e, a), this.entities.push(c)
            }
        }
    },
    destroyRunwayModel: function () {
        this.entities && this.entities.forEach(function (a) {
            geofs.api.viewer.entities.remove(a)
        });
        this.entities = null;
        this.imageryLayers && (this.imageryLayers.forEach(function (a) {
            geofs.api.viewer.imageryLayers.remove(a, !0)
        }), this.imageryLayers = []);
        this.creationTime = null;
        this.modelExists = !1
    },
    destroy: function () {
        this.destroyRunwayModel()
    }
};
"use strict";
window.geofs = window.geofs || {};
geofs.api = {};
geofs.api.march2019theTwentyFirst = 2458563;
geofs.api.halfADayInSeconds = 43200;
geofs.api.overlayBaseZIndex = 60;
geofs.api.ALTITUDE_RELATIVE = "ALTITUDE_RELATIVE";
geofs.api.CLAMP_TO_GROUND = "CLAMP_TO_GROUND";
geofs.api.nativeMouseHandling = !1;
geofs.api.initWorld = function (a, b) {
    b = b || {};
    Cesium.Ion.defaultAccessToken = geofs.ionkey;
    var c = {
        animation: !1,
        geocoder: !1,
        homeButton: !1,
        infoBox: !1,
        selectionIndicator: !1,
        sceneModePicker: !1,
        baseLayerPicker: !1,
        timeline: !1,
        imageryProvider: new Cesium.UrlTemplateImageryProvider({
            url: Cesium.buildModuleUrl("Assets/Textures/NaturalEarthII/{z}/{x}/{reverseY}.jpg")
        }),
        navigationHelpButton: !1,
        navigationInstructionsInitiallyVisible: !1,
        fullscreenButton: !1,
        scene3DOnly: !0,
        clock: new Cesium.Clock({
            currentTime: new Cesium.JulianDate(geofs.api.march2019theTwentyFirst,
                43200)
        }),
        showRenderLoopErrors: geofs.debugOn,
        requestRenderMode: !0,
        useBrowserRecommendedResolution: !1,
        contextOptions: {
            webgl: {
                xrCompatible: !0
            }
        },
        orderIndependentTranslucency: !1,
        useDefaultRenderLoop: !0
    };
    geofs.androidViewerOptions = geofs.androidViewerOptions || {};
    geofs.iosViewerOptions = geofs.iosViewerOptions || {};
    Object.assign(c, geofs.androidViewerOptions, geofs.iosViewerOptions, b);
    try {
        geofs.api.viewer = new Cesium.Viewer(a, c), c.useDefaultRenderLoop || (geofs.renderLoop = function () {
            geofs.pause || geofs.api.viewer.render();
            requestAnimationFrame(geofs.renderLoop)
        }, geofs.renderLoop())
    } catch (d) {
        geofs.debug.error(d, "geofs.api.initWorld");
        geofs.api.notify('An error occured while creating the WebGL environment. Please visit the <a href="/pages/instructions.php">instructions page</a> or contact support@geo-fs.com for more details');
        return
    }
    geofs.api.blackMarble = geofs.api.viewer.imageryLayers.addImageryProvider(new Cesium.UrlTemplateImageryProvider({
        url: geofs.dataServer + "bm/{z}/{x}/{reverseY}.png",
        credit: "Black Marble imagery courtesy NASA Earth Observatory",
        maximumLevel: 8
    }));
    geofs.api.blackMarble.alpha = 0;
    geofs.api.blackMarble.hue = 3.5;
    geofs.api.blackMarble.saturation = .7;
    geofs.api.blackMarble.brightness = 4;
    geofs.api.blackMarble.show = !1;
    geofs.api.viewer.scene.skyBox = new Cesium.SkyBox({
        sources: {
            positiveX: "images/skybox/tycho2t3_80_px.png",
            negativeX: "images/skybox/tycho2t3_80_mx.png",
            positiveY: "images/skybox/tycho2t3_80_py.png",
            negativeY: "images/skybox/tycho2t3_80_my.png",
            positiveZ: "images/skybox/tycho2t3_80_pz.png",
            negativeZ: "images/skybox/tycho2t3_80_mz.png"
        }
    });
    geofs.api.viewer.scene.moon.textureUrl = "images/moonSmall.jpg";
    geofs.api.flatRunwayTerrainProviderInstance = new geofs.api.FlatRunwayTerrainProvider({
        baseProvider: new Cesium.EllipsoidTerrainProvider
    });
    geofs.api.viewer.terrainProvider = geofs.api.flatRunwayTerrainProviderInstance;
    geofs.api.viewer.scene.globe.enableLighting = !1;
    geofs.api.viewer.scene.globe.depthTestAgainstTerrain = !0;
    geofs.api.viewer.scene.globe.showWaterEffect = !1;
    geofs.api.labels = geofs.api.viewer.scene.primitives.add(new Cesium.LabelCollection);
    geofs.api.billboards = {
        "default": geofs.api.viewer.scene.primitives.add(new Cesium.BillboardCollection({
            scene: geofs.api.viewer.scene,
            blendOption: Cesium.BlendOption.OPAQUE_AND_TRANSLUCENT
        })),
        opaque: geofs.api.viewer.scene.primitives.add(new Cesium.BillboardCollection({
            scene: geofs.api.viewer.scene,
            blendOption: Cesium.BlendOption.OPAQUE
        })),
        translucent: geofs.api.viewer.scene.primitives.add(new Cesium.BillboardCollection({
            scene: geofs.api.viewer.scene,
            blendOption: Cesium.BlendOption.TRANSLUCENT
        }))
    };
    geofs.api.models =
        geofs.api.viewer.scene.primitives.add(new Cesium.PrimitiveCollection({
            destroyPrimitives: !1
        }));
    geofs.api.viewer.scene.preRender.addEventListener(geofs.api.frameCallbackWrapper);
    $(".geofs-ui-3dview").trigger("rendererInitDone");
    geofs.api.viewer.scene.renderError.addEventListener(function (d) {
        geofs.debug.error(d, "geofs.api.viewer.scene.renderError");
        geofs.api.notify("GeoFS encountered an error. If this persists, try to reset preferences to default and refresh the page.")
    })
};
geofs.api.destroyWorld = function () {
    geofs.api.viewer.scene.preRender.removeEventListener(geofs.api.frameCallbackWrapper)
};
geofs.api.triggerExplicitRendering = function () {
    geofs.api.viewer.scene.requestRender()
};
geofs.frameCallbackStack = {};
geofs.api.addFrameCallback = function (a, b, c) {
    b = b || "global";
    geofs.frameCallbackStack[b] || (geofs.frameCallbackStack[b] = {
        callbacks: {},
        lastId: 0,
        maxExecutionTime: c,
        lastIndex: 1
    });
    geofs.frameCallbackStack[b].lastId++;
    geofs.frameCallbackStack[b].callbacks[geofs.frameCallbackStack[b].lastId] = a;
    return geofs.frameCallbackStack[b].lastId
};
geofs.api.removeFrameCallback = function (a, b) {
    b = b || "global";
    geofs.frameCallbackStack[b] && delete geofs.frameCallbackStack[b].callbacks[a]
};
geofs.api.frameCallbackWrapper = function (a, b) {
    a = geofs.utils.now();
    for (var c in geofs.frameCallbackStack)
        if (b = geofs.frameCallbackStack[c], 0 < b.maxExecutionTime) {
            var d = b.lastIndex;
            do {
                try {
                    b.callbacks[d](a)
                } catch (e) {
                    geofs.debug.error(e, "geofs.api.frameCallbackWrapper maxExecutionTime"), geofs.debug.throw(e)
                }
                d++;
                d > b.lastId && (d = 1)
            } while (a + b.maxExecutionTime > geofs.utils.now());
            b.lastIndex = d
        } else
            for (d in b.callbacks) try {
                b.callbacks[d](a)
            } catch (e) {
                geofs.debug.error(e, "geofs.api.frameCallbackWrapper general"),
                    geofs.debug.throw(e)
            }
};
geofs.api.configureOutsideView = function () {
    geofs.api.viewer.shadowMap.maximumDistance = geofs.aircraft.instance.definition.oustsideShadowMapMaxDistance || 1E3;
    geofs.api.viewer.shadowMap.darkness = .6;
    geofs.api.camera.frustum.near = 1
};
geofs.api.configureInsideView = function () {
    geofs.api.viewer.shadowMap.maximumDistance = geofs.aircraft.instance.definition.cockpitShadowMapMaxDistance || 100;
    geofs.api.viewer.shadowMap.darkness = .5;
    geofs.api.camera.frustum.near = .2
};
geofs.api.setGlobeLighting = function (a) {
    geofs.api.viewer.scene.globe.enableLighting = a
};
geofs.api.setWaterEffect = function (a) {
    a ? (geofs.fx.water.create(), geofs.api.waterDetection.create(), geofs.fx.wake.create()) : (geofs.fx.water.destroy(), geofs.api.waterDetection.destroy(), geofs.fx.wake.destroy())
};
geofs.api.setHD = function (a) {
    if (geofs.api.hdOn !== a) {
        a = {
            method: "doGeoIp",
            nohd: a ? "false" : "true"
        };
        if (geofs.isApp) {
            if (!geofs.userRecord.sessionId) return;
            a.sessionId = geofs.userRecord.sessionId
        }
        $(".geofs-apiResponse").htmlView("load", geofs.url + "/backend/accounts/hd.php", a)
    }
};
geofs.api.setImageryProvider = function (a, b, c, d, e) {
    var f = geofs.api.viewer.imageryLayers,
        g = f.get(0);
    f.remove(g);
    a = f.addImageryProvider(a, 0);
    geofs.runways.setRunwayModelVisibility(b);
    geofs.api.setImageryColorModifier("multiplier", {
        brightness: c || 1,
        contrast: d || 1,
        saturation: e || 1
    });
    geofs.preferences && geofs.preferences.graphics && geofs.api.enhanceColors(geofs.preferences.graphics.enhanceColors);
    return a
};
geofs.api.setDebugImageryProvider = function () {
    geofs.api.viewer.imageryLayers.addImageryProvider(new Cesium.TileCoordinatesImageryProvider({
        tilingScheme: new Cesium.GeographicTilingScheme({
            numberOfLevelZeroTilesX: 2,
            numberOfLevelZeroTilesY: 1
        })
    }))
};
geofs.api.setTimeAndDate = function (a, b) {
    geofs.api.viewer.clock.shouldAnimate = !0;
    return geofs.api.viewer.clock.currentTime = new Cesium.JulianDate(geofs.api.march2019theTwentyFirst + (b || 0), a - geofs.api.halfADayInSeconds)
};
geofs.api.setClock = function (a) {
    geofs.api.viewer.clock.multiplier = 1;
    geofs.api.viewer.clock.currentTime = Cesium.JulianDate.fromDate(a);
    geofs.api.viewer.clock.shouldAnimate = !0
};
geofs.api.isWebXRAvailable = function () {
    return !!navigator.xr
};
geofs.api.toggleVr = function () {
    function a(d, e) {
        d = e.session;
        d.requestAnimationFrame(a);
        if (e = e.getViewerPose(b)) !geofs.XRFov && e.views && e.views[0] && (geofs.XRFov = 360 * Math.atan(1 / e.views[0].projectionMatrix[5]) / PI, geofs.api.setFOV(geofs.camera.cam, geofs.XRFov)), d = d.renderState.baseLayer, c.bindFramebuffer(c.FRAMEBUFFER, d.framebuffer), c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT), geofs.api.viewer.scene._defaultView.passState.XRViews = e.views, geofs.api.viewer.scene._defaultView.passState.XRglLayer = d, geofs.api.viewer.scene.render()
    }
    if (navigator.xr)
        if (geofs.vrOn) geofs.vrOn = !1, geofs.api.viewer.scene.useWebVR = !1, geofs.api.XRSession && geofs.api.XRSession.end();
        else {
            geofs.vrOn = !0;
            geofs.api.viewer.scene.useWebVR = !0;
            geofs.camera.set(null, "cockpit");
            var b, c;
            navigator.xr.requestSession("immersive-vr").then(function (d) {
                c = geofs.api.viewer.scene._context._gl;
                geofs.api.XRSession = d;
                d.addEventListener("end", function () {
                    geofs.XRFov = null
                });
                d.updateRenderState({
                    baseLayer: new XRWebGLLayer(d, c)
                });
                d.requestReferenceSpace("local").then(function (e) {
                    b =
                        e;
                    d.requestAnimationFrame(a)
                })
            })
        }
};
geofs.api.enhanceColors = function (a) {
    a = a || 0;
    geofs.api.setImageryColorModifier("enhancement", {
        contrast: 1 + .4 * a,
        saturation: 1 + .4 * a
    });
    geofs.api.setAtmosphereColorModifier("enhancement", {
        brightnessShift: .4,
        saturationShift: 0,
        groundBrightnessShift: .2,
        groundHueShift: .1,
        fogBrightness: 0,
        groundSaturationShift: -1
    })
};
geofs.api.defaultImageryColorModifier = {
    brightness: 1,
    contrast: 1,
    saturation: 1,
    gamma: 1,
    hue: 0
};
geofs.api.imageryColorModifiers = {};
geofs.api.setImageryColorModifier = function (a, b) {
    b = Object.assign({}, geofs.api.defaultImageryColorModifier, b);
    geofs.api.imageryColorModifiers[a || "base"] = b;
    geofs.api.applyImageryColorModifiers()
};
geofs.api.removeImageryColorModifier = function (a) {
    delete geofs.api.imageryColorModifiers[a];
    geofs.api.applyImageryColorModifiers()
};
geofs.api.applyImageryColorModifiers = function () {
    geofs.api.imageryColors = Object.assign({}, geofs.api.defaultImageryColorModifier);
    for (var a in geofs.api.imageryColorModifiers) geofs.api.imageryColors.brightness *= geofs.api.imageryColorModifiers[a].brightness, geofs.api.imageryColors.contrast *= geofs.api.imageryColorModifiers[a].contrast, geofs.api.imageryColors.saturation *= geofs.api.imageryColorModifiers[a].saturation, geofs.api.imageryColors.gamma *= geofs.api.imageryColorModifiers[a].gamma, geofs.api.imageryColors.hue +=
        geofs.api.imageryColorModifiers[a].hue;
    geofs.api.setImageryBrightness(geofs.api.imageryColors.brightness);
    geofs.api.setImageryContrast(geofs.api.imageryColors.contrast);
    geofs.api.setImagerySaturation(geofs.api.imageryColors.saturation);
    geofs.api.setImageryGamma(geofs.api.imageryColors.gamma);
    geofs.api.setImageryHue(geofs.api.imageryColors.hue)
};
geofs.api.setImageryBrightness = function (a) {
    var b = geofs.api.viewer.imageryLayers.get(0);
    a && (b.brightness = a);
    return b.brightness
};
geofs.api.setImageryContrast = function (a) {
    var b = geofs.api.viewer.imageryLayers.get(0);
    a && (b.contrast = a);
    return b.contrast
};
geofs.api.setImagerySaturation = function (a) {
    var b = geofs.api.viewer.imageryLayers.get(0);
    a && (b.saturation = a);
    return b.saturation
};
geofs.api.setImageryHue = function (a) {
    var b = geofs.api.viewer.imageryLayers.get(0);
    a && (b.hue = a);
    return b.hue
};
geofs.api.setImageryGamma = function (a) {
    var b = geofs.api.viewer.imageryLayers.get(0);
    a && (b.gamma = a);
    return b.gamma
};
geofs.api.defaultAtmosphereColorModifier = {
    brightnessShift: 0,
    saturationShift: 0,
    hueShift: 0,
    groundBrightnessShift: 0,
    groundSaturationShift: 0,
    groundHueShift: 0,
    fogBrightness: 1,
    cloudsBrightness: 1
};
geofs.api.atmosphereColorModifiers = {};
geofs.api.setAtmosphereColorModifier = function (a, b) {
    a = a || "base";
    b = Object.assign({}, geofs.api.defaultAtmosphereColorModifier, geofs.api.atmosphereColorModifiers[a] || {}, b);
    geofs.api.atmosphereColorModifiers[a] = b;
    geofs.api.applyAtmosphereColorModifiers()
};
geofs.api.removeAtmosphereColorModifier = function (a) {
    delete geofs.api.atmosphereColorModifiers[a];
    geofs.api.applyAtmosphereColorModifiers()
};
geofs.api.applyAtmosphereColorModifiers = function () {
    geofs.api.atmosphereColors = Object.assign({}, geofs.api.defaultAtmosphereColorModifier);
    for (var a in geofs.api.atmosphereColorModifiers) geofs.api.atmosphereColors.brightnessShift += geofs.api.atmosphereColorModifiers[a].brightnessShift, geofs.api.atmosphereColors.saturationShift += geofs.api.atmosphereColorModifiers[a].saturationShift, geofs.api.atmosphereColors.hueShift += geofs.api.atmosphereColorModifiers[a].hueShift, geofs.api.atmosphereColors.groundBrightnessShift +=
        geofs.api.atmosphereColorModifiers[a].groundBrightnessShift, geofs.api.atmosphereColors.groundHueShift += geofs.api.atmosphereColorModifiers[a].groundHueShift, geofs.api.atmosphereColors.groundSaturationShift += geofs.api.atmosphereColorModifiers[a].groundSaturationShift, geofs.api.atmosphereColors.fogBrightness *= geofs.api.atmosphereColorModifiers[a].fogBrightness, geofs.api.atmosphereColors.cloudsBrightness *= geofs.api.atmosphereColorModifiers[a].cloudsBrightness;
    geofs.api.viewer.scene.skyAtmosphere.brightnessShift =
        geofs.api.atmosphereColors.brightnessShift;
    geofs.api.viewer.scene.skyAtmosphere.saturationShift = geofs.api.atmosphereColors.saturationShift;
    geofs.api.viewer.scene.skyAtmosphere.hueShift = geofs.api.atmosphereColors.hueShift;
    geofs.api.viewer.scene.globe.atmosphereBrightnessShift = clamp(geofs.api.atmosphereColors.groundBrightnessShift, -1, 1);
    geofs.api.viewer.scene.globe.atmosphereHueShift = clamp(geofs.api.atmosphereColors.groundHueShift, -1, 1);
    geofs.api.viewer.scene.globe.atmosphereSaturationShift = clamp(geofs.api.atmosphereColors.groundSaturationShift,
        -1, 1);
    geofs.api.viewer.scene.fog.minimumBrightness = geofs.api.atmosphereColors.fogBrightness;
    geofs.fx.cloudManager.setCloudsBrightness(geofs.api.atmosphereColors.cloudsBrightness)
};
geofs.api.showSun = function () {
    geofs.api.viewer.scene.sun.show = !0
};
geofs.api.hideSun = function () {
    geofs.api.viewer.scene.sun.show = !1
};
geofs.api.maxRenderingQualityLevel = 6;
geofs.api.renderingQualityLevels = {
    0: {
        resolutionScale: .7,
        tileCacheSize: 0,
        fxaa: !1,
        maximumScreenSpaceError: 10,
        globeLighting: !1,
        dropShadow: !1,
        cloudCoverToCloudNumber: 15,
        fogScreenSpaceErrorFactor: 2.1,
        fogDensity: 5E-4,
        shadowMapSize: 1024,
        waterResolution: 1,
        viewingDistance: 1,
        degradedCollisions: !1,
        lowResRunways: !1
    },
    1: {
        resolutionScale: .8,
        tileCacheSize: 100,
        fxaa: !1,
        maximumScreenSpaceError: 6,
        globeLighting: !1,
        dropShadow: !1,
        cloudCoverToCloudNumber: 1,
        fogScreenSpaceErrorFactor: 2,
        fogDensity: 3.2E-4,
        shadowMapSize: 1024,
        waterResolution: 1,
        viewingDistance: .1,
        degradedCollisions: !0,
        lowResRunways: !0
    },
    2: {
        resolutionScale: .9,
        tileCacheSize: 100,
        fxaa: !0,
        maximumScreenSpaceError: 4,
        globeLighting: !1,
        dropShadow: !1,
        cloudCoverToCloudNumber: 5,
        fogScreenSpaceErrorFactor: 2,
        fogDensity: 3E-4,
        shadowMapSize: 1024,
        waterResolution: 2,
        viewingDistance: .2,
        degradedCollisions: !0,
        lowResRunways: !0
    },
    3: {
        resolutionScale: 1,
        tileCacheSize: 250,
        fxaa: !0,
        maximumScreenSpaceError: 2,
        globeLighting: !0,
        dropShadow: !0,
        cloudCoverToCloudNumber: 10,
        fogScreenSpaceErrorFactor: 2,
        fogDensity: 2.5E-4,
        shadowMapSize: 1024,
        waterResolution: 4,
        viewingDistance: .3,
        degradedCollisions: !1,
        lowResRunways: !0
    },
    4: {
        resolutionScale: 1,
        tileCacheSize: 500,
        fxaa: !0,
        maximumScreenSpaceError: 2,
        globeLighting: !0,
        dropShadow: !0,
        cloudCoverToCloudNumber: 12,
        fogScreenSpaceErrorFactor: 1.8,
        fogDensity: 2E-4,
        shadowMapSize: 2048,
        waterResolution: 8,
        viewingDistance: .5,
        degradedCollisions: !1,
        lowResRunways: !1
    },
    5: {
        resolutionScale: 1,
        tileCacheSize: 1E3,
        fxaa: !0,
        maximumScreenSpaceError: 2,
        globeLighting: !0,
        dropShadow: !0,
        cloudCoverToCloudNumber: 14,
        fogScreenSpaceErrorFactor: 1.5,
        fogDensity: 1E-4,
        shadowMapSize: 2048,
        waterResolution: 16,
        viewingDistance: .7,
        degradedCollisions: !1,
        lowResRunways: !1
    },
    6: {
        resolutionScale: 1,
        tileCacheSize: 2E3,
        fxaa: !0,
        maximumScreenSpaceError: 2,
        globeLighting: !0,
        dropShadow: !0,
        cloudCoverToCloudNumber: 15,
        fogScreenSpaceErrorFactor: 1,
        fogDensity: 5E-5,
        shadowMapSize: 4096,
        waterResolution: 32,
        viewingDistance: .9,
        degradedCollisions: !1,
        lowResRunways: !1
    },
    7: {
        resolutionScale: 1,
        tileCacheSize: 2E3,
        fxaa: !0,
        maximumScreenSpaceError: .5,
        globeLighting: !0,
        dropShadow: !0,
        cloudCoverToCloudNumber: 15,
        fogScreenSpaceErrorFactor: 1,
        fogDensity: 5E-5,
        shadowMapSize: 4096,
        waterResolution: 32,
        viewingDistance: 1,
        degradedCollisions: !1,
        lowResRunways: !1
    }
};
geofs.api.renderingSettings = Object.assign({}, geofs.api.renderingQualityLevels[0]);
geofs.api.advancedRenderingQuality = function () {
    geofs.api.renderingQuality(null, !0)
};
geofs.api.renderingQuality = function (a, b) {
    geofs.api.viewer.scene.highDynamicRange = !1;
    a = a || geofs.preferences.graphics.quality;
    geofs.preferences.graphics.quality = a;
    0 == a && (b = !0);
    geofs.api.renderingQualityLevels[a] || (geofs.api.notify("An error occurred while applying preferences. Settings are reset to default."), geofs.resetPreferences());
    geofs.api.renderingSettings.resolutionScale = geofs.api.renderingQualityLevels[a].resolutionScale;
    geofs.api.renderingSettings.tileCacheSize = geofs.api.renderingQualityLevels[a].tileCacheSize;
    geofs.api.renderingSettings.fxaa = geofs.api.renderingQualityLevels[a].fxaa;
    geofs.api.renderingSettings.maximumScreenSpaceError = geofs.api.renderingQualityLevels[a].maximumScreenSpaceError;
    geofs.api.renderingSettings.globeLighting = geofs.api.renderingQualityLevels[a].globeLighting;
    geofs.api.renderingSettings.dropShadow = geofs.api.renderingQualityLevels[a].dropShadow;
    geofs.api.renderingSettings.cloudCoverToCloudNumber = geofs.api.renderingQualityLevels[a].cloudCoverToCloudNumber;
    geofs.api.renderingSettings.fogScreenSpaceErrorFactor =
        geofs.api.renderingQualityLevels[a].fogScreenSpaceErrorFactor;
    geofs.api.renderingSettings.fogDensity = geofs.api.renderingQualityLevels[a].fogDensity;
    geofs.api.renderingSettings.shadowMapSize = geofs.api.renderingQualityLevels[a].shadowMapSize;
    geofs.api.renderingSettings.waterResolution = geofs.api.renderingQualityLevels[a].waterResolution;
    geofs.api.renderingSettings.degradedCollisions = geofs.api.renderingQualityLevels[a].degradedCollisions;
    geofs.api.renderingSettings.lowResRunways = geofs.api.renderingQualityLevels[a].lowResRunways;
    b ? ($('[gespref="geofs.preferences.graphics.quality"]').addClass("geofs-disabled"), $(".geofs-advancedGraphics .slider").removeClass("geofs-disabled"), $(".geofs-advancedGraphics.geofs-advanced").addClass("geofs-expanded"), geofs.preferences.graphics.quality = 0, geofs.api.renderingSettings.resolutionScale = geofs.preferences.graphics.advanced.resolutionScale, a = 10 * geofs.preferences.graphics.advanced.viewingDistance, geofs.api.renderingSettings.fogDensity = geofs.api.renderingQualityLevels[0].fogDensity / a, geofs.api.renderingSettings.maximumScreenSpaceError =
        geofs.api.renderingQualityLevels[0].maximumScreenSpaceError / a, geofs.api.renderingSettings.fogScreenSpaceErrorFactor = geofs.api.renderingQualityLevels[0].fogScreenSpaceErrorFactor - geofs.preferences.graphics.advanced.viewingDistance, geofs.api.renderingSettings.degradedCollisions = .3 > geofs.preferences.graphics.advanced.viewingDistance, geofs.api.renderingSettings.lowResRunways = .3 >= geofs.preferences.graphics.advanced.viewingDistance, geofs.api.renderingSettings.fxaa = geofs.preferences.graphics.advanced.fxaa,
        geofs.api.renderingSettings.tileCacheSize = geofs.preferences.graphics.advanced.tileCacheSize, geofs.api.renderingSettings.globeLighting = geofs.preferences.graphics.advanced.globeLighting, geofs.api.renderingSettings.dropShadow = geofs.preferences.graphics.advanced.dropShadow, geofs.api.renderingSettings.waterResolution = geofs.preferences.graphics.advanced.waterResolution, geofs.api.renderingSettings.cloudCoverToCloudNumber = geofs.api.renderingQualityLevels[0].cloudCoverToCloudNumber * geofs.preferences.graphics.advanced.cloudDensity,
        geofs.api.renderingSettings.shadowMapSize = geofs.api.renderingQualityLevels[0].shadowMapSize * geofs.preferences.graphics.advanced.shadowQuality) : ($('[gespref="geofs.preferences.graphics.quality"]').removeClass("geofs-disabled"), $(".geofs-advancedGraphics .slider").addClass("geofs-disabled"), geofs.preferences.graphics.advanced.resolutionScale = geofs.api.renderingSettings.resolutionScale, geofs.preferences.graphics.advanced.viewingDistance = geofs.api.renderingQualityLevels[a].viewingDistance, geofs.preferences.graphics.advanced.tileCacheSize =
            geofs.api.renderingSettings.tileCacheSize, geofs.preferences.graphics.advanced.fxaa = geofs.api.renderingSettings.fxaa, geofs.preferences.graphics.advanced.globeLighting = geofs.api.renderingSettings.globeLighting, geofs.preferences.graphics.advanced.dropShadow = geofs.api.renderingSettings.dropShadow, geofs.preferences.graphics.advanced.shadowQuality = geofs.api.renderingSettings.shadowMapSize / geofs.api.renderingQualityLevels[0].shadowMapSize, geofs.preferences.graphics.advanced.cloudDensity = geofs.api.renderingSettings.cloudCoverToCloudNumber /
            geofs.api.renderingQualityLevels[0].cloudCoverToCloudNumber, geofs.setPreferenceValues($(".geofs-advancedGraphics"), !0));
    geofs.api.viewer.resolutionScale = geofs.api.renderingSettings.resolutionScale;
    geofs.api.viewer.scene.globe.tileCacheSize = geofs.api.renderingSettings.tileCacheSize;
    geofs.api.viewer.scene.postProcessStages.fxaa.enabled = geofs.api.renderingSettings.fxaa;
    geofs.api.viewer.scene.globe.maximumScreenSpaceError = geofs.api.renderingSettings.maximumScreenSpaceError;
    geofs.api.setGlobeLighting(geofs.api.renderingSettings.globeLighting);
    geofs.api.viewer.scene.fog.screenSpaceErrorFactor = geofs.api.renderingSettings.fogScreenSpaceErrorFactor;
    geofs.api.viewer.scene.fog.density = geofs.api.renderingSettings.fogDensity;
    geofs.api.viewer.shadowMap.size = geofs.api.renderingSettings.shadowMapSize;
    geofs.fx.cloudManager.setCloudCoverToCloudNumber(geofs.api.renderingSettings.cloudCoverToCloudNumber);
    geofs.api.flatRunwayTerrainProviderInstance.setMaximumLevel(12);
    geofs.useSimpleShadow(!geofs.api.renderingSettings.dropShadow);
    geofs.fx.water.reset();
    geofs.runways.redraw();
    geofs.api.viewer.resize()
};
geofs.api.adaptativeMaxMaximumScreenSpaceError = 6;
geofs.api.adaptativeTopSpeed = 100;
geofs.api.adaptativeTopAltitude = 500;
geofs.api.adaptativeTurnrateRatio = 5E-4;
geofs.api.adaptativeRenderingQuality = function () {
    var a = Math.abs(geofs.animation.values.turnrate) || 0,
        b = geofs.api.renderingSettings.maximumScreenSpaceError,
        c = geofs.animation.values.kias / geofs.api.adaptativeTopSpeed,
        d = clamp((geofs.api.adaptativeTopAltitude - (geofs.relativeAltitude || 0)) / geofs.api.adaptativeTopAltitude, 0, 1);
    b += c * d + a * geofs.api.adaptativeTurnrateRatio;
    geofs.api.viewer.scene.globe.maximumScreenSpaceError = clamp(b, geofs.api.renderingSettings.maximumScreenSpaceError, geofs.api.adaptativeMaxMaximumScreenSpaceError)
};
geofs.api.useNativeShadows = function (a) {
    geofs.api.viewer.shadows = a
};
geofs.api.addLabel = function (a, b, c) {
    b = b || [0, 0, 0];
    c = c || {};
    if (V3.isValid(b)) return a = {
        position: new Cesium.Cartesian3.fromDegrees(b[1], b[0], b[2]),
        text: geofs.api.makeLabelTextSafe(a)
    }, c = Object.assign(c, a), geofs.api.labels.add(c);
    geofs.debug.debugger()
};
geofs.api.updateLabelText = function (a, b) {
    a.text = geofs.api.makeLabelTextSafe(b)
};
geofs.api.makeLabelTextSafe = function (a) {
    return a.replace(/[^\x20-\x7E]+/g, "")
};
geofs.api.removeLabel = function (a) {
    a && geofs.api.labels.remove(a)
};
geofs.api.setLabelPosition = function (a, b) {
    a && (V3.isValid(b) ? a.position = new Cesium.Cartesian3.fromDegrees(b[1], b[0], b[2]) : geofs.debug.debugger())
};
geofs.api.getGuarantiedGroundAltitude = function (a) {
    var b = objects.getAltitudeAtLocation(a[0], a[1]);
    return b ? new Promise(function (c, d) {
        c([{
            height: b.location[2]
        }])
    }) : Cesium.sampleTerrain(geofs.api.viewer.terrainProvider, geofs.api.viewer.terrainProvider.maximumLevel, [Cesium.Cartographic.fromDegrees(a[1], a[0])])
};
geofs.api.altitudeErrorThreshold = 1;
geofs.api.wrongAltitudeTries = 1;
geofs.api.getGroundAltitude = function (a, b) {
    if (geofs.debugOn && !V3.isValid(a)) debugger;
    var c = geofs.groundElevation || 0;
    a = geofs.api.viewer.scene.globe.getHeight(new Cesium.Cartographic.fromDegrees(a[1], a[0], c)); - 1E3 > a && (a = void 0);
    if (void 0 == a) b ? (a = b.lastGroundAltitude || 0, b.wrongAltitude = !0, b.wrongValue = "undefined") : a = c;
    else if (b) {
        if (Math.abs(b.lastGroundAltitude - a) > geofs.api.altitudeErrorThreshold && b.wrongAltitudeTries <= geofs.api.wrongAltitudeTries) return b.wrongAltitudeTries++, b.wrongAltitude = !0, b.wrongValue =
            a, b.lastGroundAltitude || 0;
        b.wrongAltitudeTries = 0;
        b.lastGroundAltitude = a;
        b.wrongAltitude = null
    }
    return a
};
geofs.api.oldNormal = [0, 0, 1];
geofs.api.normalDotThreshold = .95;
geofs.api.wrongNormalTries = 3;
geofs.api.getGroundNormal = function (a, b) {
    b = b || {};
    b.oldNormal = b.oldNormal || [0, 0, 1];
    a = V3.dup(a);
    var c = xyz2lla([1, 1, a[2]], a),
        d = V3.add(a, [c[0], 0, a[2]]);
    c = V3.add(a, [0, c[1], a[2]]);
    a[2] = geofs.api.getGroundAltitude(a);
    d[2] = geofs.api.getGroundAltitude(d);
    c[2] = geofs.api.getGroundAltitude(c);
    d = V3.sub(d, a);
    c = V3.sub(c, a);
    d = lla2xyz(d, a);
    c = lla2xyz(c, a);
    a = V3.normalize(V3.cross(c, d));
    if (V3.dot(a, b.oldNormal) < geofs.api.normalDotThreshold && b.wrongNormal < geofs.api.wrongNormalTries) return b.wrongNormal += 1, b.oldNormal;
    b.wrongNormal = 0;
    b.oldNormal = a;
    return geofs.api.oldNormal = a
};
geofs.api.shadowOffset = .1;
geofs.api.createShadow = function (a, b) {
    this.scale = V3.scale(b, 2);
    this.scale[2] = 1;
    return geofs.api.loadModel({
        url: a
    })
};
geofs.api.setShadowLocationRotation = function (a, b, c, d) {
    b[2] += geofs.api.shadowOffset;
    geofs.api.setModelPositionOrientationAndScale(a, b, c, this.scale)
};
geofs.api.Model = function (a, b) {
    b = b || {};
    b.url = b.url || a;
    this._model = geofs.api.loadModel(b);
    this.setPositionOrientationAndScale(b.location, b.rotation, null)
};
geofs.api.Model.prototype.setOpacity = function (a) {
    this._opacity = this._model.color.alpha = a
};
geofs.api.Model.prototype.setRotation = function (a, b) {
    var c = [0, 0, 0];
    c[b || 0] = a;
    this.setPositionOrientationAndScale(null, c, null)
};
geofs.api.Model.prototype.setScale = function (a) {
    this.setPositionOrientationAndScale(null, null, a)
};
geofs.api.Model.prototype.setPositionOrientationAndScale = function (a, b, c) {
    this._lla = a;
    return geofs.api.setModelPositionOrientationAndScale(this._model, a, b, c)
};
geofs.api.Model.prototype.setLocation = function (a) {
    this.setPositionOrientationAndScale(a)
};
geofs.api.Model.prototype.setColor = function (a) {
    this._model.color = Cesium.Color.clone(a);
    this._model.color.alpha = this._opacity || a.alpha
};
geofs.api.Model.prototype.setCssColor = function (a) {
    this._model.color = Cesium.Color.fromCssColorString(a)
};
geofs.api.Model.prototype.changeTexture = function (a, b, c) {
    c = c || this._model;
    var d = c._rendererResources.textures[b];
    Cesium.Resource.fetchImage({
        url: a
    }).then(function (e) {
        d.copyFrom(e);
        d.generateMipmap()
    })
};
geofs.api.Model.prototype.hide = function () {
    geofs.api.setModelVisibility(this._model, !1)
};
geofs.api.Model.prototype.show = function () {
    geofs.api.setModelVisibility(this._model, !0)
};
geofs.api.Model.prototype.destroy = function () {
    geofs.api.destroyModel(this._model)
};
geofs.api.Model.prototype.remove = function () {
    geofs.api.removeFromWorld(this._model)
};
geofs.api.loadModel = function (a) {
    "string" == typeof a && (a = {
        url: a
    });
    a = Object.assign({}, {
        castShadows: !1,
        receiveShadows: !1
    }, a);
    var b = Cesium.ShadowMode.DISABLED;
    a.castShadows && (b = Cesium.ShadowMode.CAST_ONLY);
    a.receiveShadows && (b = Cesium.ShadowMode.RECEIVE_ONLY);
    a.castShadows && a.receiveShadows && (b = Cesium.ShadowMode.ENABLED);
    a.shadows = b;
    b = Cesium.Model.fromGltf(a);
    a.justLoad || geofs.api.addModelToWorld(b);
    return b
};
geofs.api.addModelToWorld = function (a) {
    a && (a.isDestroyed() || geofs.api.models.add(a))
};
geofs.api.changeModelTexture = function (a, b, c) {
    return geofs.api.Model.prototype.changeTexture(b, c, a)
};
geofs.api.toggleModelShadow = function (a, b) {
    geofs.api.viewer.shadows && a && !a.isDestroyed() && (a.shadows = b ? Cesium.ShadowMode.CAST_ONLY : Cesium.ShadowMode.DISABLED)
};
geofs.api.removeModelFromWorld = function (a) {
    a && (a.isDestroyed() || geofs.api.models.remove(a))
};
geofs.api.setModelVisibility = function (a, b) {
    if (!a || a.isDestroyed()) return !1;
    a.show = b;
    return !0
};
geofs.api.setModelOpacity = function (a, b) {
    if (!a || a.isDestroyed()) return !1;
    a.color.alpha = b;
    return !0
};
geofs.api.destroyModel = function (a) {
    a && (geofs.api.removeModelFromWorld(a), a.isDestroyed() || a.destroy())
};
geofs.api.getModelFromScreenCoords = function (a, b) {
    return geofs.api.viewer.scene.pick(new Cesium.Cartesian2(a, b))
};
geofs.fromHeadingPitchRoll = function (a, b, c, d) {
    d = Cesium.Quaternion.fromAxisAngle(Cesium.Cartesian3.UNIT_X, -b);
    c = Cesium.Quaternion.fromAxisAngle(Cesium.Cartesian3.UNIT_Y, -c);
    d = Cesium.Quaternion.multiply(d, c, c);
    a = Cesium.Quaternion.fromAxisAngle(Cesium.Cartesian3.UNIT_Z, -a);
    return Cesium.Quaternion.multiply(a, d, d)
};
geofs.headingPitchRollScaleToFixedFrame = function (a, b, c, d, e) {
    var f = new Cesium.Quaternion;
    e = new Cesium.Cartesian3(e[0], e[1], e[2]);
    var g = new Cesium.Matrix4;
    b = geofs.fromHeadingPitchRoll(b, c, d, f);
    b = Cesium.Matrix4.fromTranslationQuaternionRotationScale(Cesium.Cartesian3.ZERO, b, e, g);
    a = Cesium.Transforms.eastNorthUpToFixedFrame(a);
    return Cesium.Matrix4.multiply(a, b, a)
};
geofs.api.getPositionOrientationAndScaleMatrix = function (a, b, c) {
    c = c || [1, 1, 1];
    b = b || [0, 0, 0];
    a = a || [0, 0, 0];
    a = Cesium.Cartesian3.fromDegrees(a[1], a[0], a[2]);
    return geofs.headingPitchRollScaleToFixedFrame(a, b[0] * DEGREES_TO_RAD, b[1] * DEGREES_TO_RAD, b[2] * DEGREES_TO_RAD, c)
};
geofs.api.setModelElevation = function (a, b) {
    geofs.api.setModelPositionOrientationAndScale(a, [a._apiLla[0], a._apiLla[1], b])
};
geofs.api.setModelPositionOrientationAndScale = function (a, b, c, d) {
    a && !a.isDestroyed() && (d = d || a._apiScale || [1, 1, 1], Array.isArray(d) || (d = [d, d, d]), c = c || a._apiHtr || [0, 0, 0], b = b || a._apiLla || [0, 0, 0], V3.isValid(c) ? V3.isValid(d) ? V3.isValid(b) ? (a.modelMatrix = geofs.api.getPositionOrientationAndScaleMatrix(b, c, d), a._apiScale = d, a._apiHtr = c, a._apiLla = b) : geofs.debug.debugger() : geofs.debug.debugger() : geofs.debug.debugger())
};
geofs.api.getModelNode = function (a, b) {
    a._geofsNodes = a._geofsNodes || {};
    if (!a._geofsNodes[b]) {
        if (!a || !a.ready) return !1;
        a._geofsNodes[b] = a.getNode(b)
    }
    return a._geofsNodes[b]
};
geofs.api.setModelRotationPosition = function (a, b, c) {
    a.originalTranform || (a.originalTranform = a.modelMatrix.clone(a.originalTranform));
    if (b) var d = Cesium.Matrix3.fromColumnMajorArray(M33.toArray(b));
    if (c) var e = Cesium.Cartesian3.fromDegrees(c[1], c[0], c[2]);
    a.modelMatrix = Cesium.Matrix4.fromRotationTranslation(d, e);
    b = Cesium.Transforms.eastNorthUpToFixedFrame(e);
    a.modelMatrix = Cesium.Matrix4.multiply(b, a.modelMatrix, b)
};
geofs.api.setNodeRotationTranslationScale = function (a, b, c, d) {
    a.originalTranform || (a.originalTranform = a.matrix.clone(a.originalTranform));
    if (b) var e = Cesium.Matrix3.fromColumnMajorArray(M33.toArray(b));
    if (c) var f = new Cesium.Cartesian3(c[0], c[1], c[2]);
    b = Cesium.Matrix4.fromRotationTranslation(e, f);
    if (d && 1 != d[0] || 1 != d[1] || 1 != d[2]) d = Cesium.Matrix4.fromScale(new Cesium.Cartesian3(d[0], d[1], d[2])), b = Cesium.Matrix4.multiply(b, d, b);
    a.matrix = Cesium.Matrix4.multiply(a.originalTranform, b, a.matrix)
};
geofs.api.setNodeScale = function (a, b) {
    b = Cesium.Matrix4.fromScale(new Cesium.Cartesian3(b[0], b[1], b[2]));
    a.matrix = Cesium.Matrix4.multiply(a.matrix, b, a.matrix)
};
geofs.api.setNodeVisibility = function (a, b) {
    if (!a) return !1;
    a.show = b;
    return !0
};
geofs.api.getNodePosition = function (a) {
    a = Cesium.Matrix4.getTranslation(a.originalMatrix, new Cesium.Cartesian3);
    return [a.x, a.y, a.z]
};
geofs.api.getNodeRotation = function (a) {
    return M33.identity()
};
geofs.api.setEntityPositionOrientation = function (a, b, c) {
    if (a)
        if (c = c || a._apiHtr || [0, 0, 0], b = b || a._apiLla || [0, 0, 0], V3.isValid(c))
            if (V3.isValid(b)) {
                var d = Cesium.Cartesian3.fromDegrees(b[1], b[0], b[2]),
                    e = new Cesium.ConstantProperty(Cesium.Transforms.headingPitchRollQuaternion(d, new Cesium.HeadingPitchRoll(c[0] * DEGREES_TO_RAD, c[1] * DEGREES_TO_RAD, c[2] * DEGREES_TO_RAD)));
                a.position = d;
                a.orientation = e;
                geofs.debug.watch("x", d.x);
                geofs.debug.watch("y", d.y);
                geofs.debug.watch("z", d.z);
                a._apiHtr = c;
                a._apiLla = b
            } else geofs.debug.debugger();
        else geofs.debug.debugger()
};
geofs.api.initAndGetCamera = function () {
    geofs.api.camera = geofs.api.viewer.camera;
    return geofs.api.camera
};
geofs.api.getFOV = function (a) {
    return a.frustum.fov
};
geofs.api.setFOV = function (a, b) {
    a.frustum.fov = b
};
geofs.api.setCameraPositionAndOrientation = function (a, b, c) {
    V3.isValid(b) ? V3.isValid(c) ? (a.position = Cesium.Cartesian3.fromDegrees(b[1], b[0], b[2]), a.setView({
        orientation: {
            heading: Cesium.Math.toRadians(c[0]),
            pitch: Cesium.Math.toRadians(c[1]),
            roll: Cesium.Math.toRadians(c[2])
        }
    })) : geofs.debug.debugger() : geofs.debug.debugger()
};
geofs.api.getCameraLla = function (a) {
    a = a.positionCartographic;
    return [a.latitude * RAD_TO_DEGREES, a.longitude * RAD_TO_DEGREES, a.height]
};
geofs.api.setCameraLookAt = function (a, b) {
    a.lookAt(Cesium.Cartesian3.fromDegrees(b[1], b[0], b[2]))
};
geofs.api.getHeading = function (a) {
    return a.heading * RAD_TO_DEGREES
};
geofs.api.debug = function (a) {
    geofs.api.viewer && (geofs.api.viewer.scene.debugShowFramesPerSecond = a ? !0 : !1)
};
geofs.api.getLlaFromScreencoordDepth = function (a, b, c) {
    a = geofs.camera.cam.getPickRay(new Cesium.Cartesian2(a, b));
    c = Cesium.Ray.getPoint(a, c);
    if (!isNaN(c.x)) return c = Cesium.Cartographic.fromCartesian(c, null, new Cesium.Cartographic), [c.latitude * RAD_TO_DEGREES, c.longitude * RAD_TO_DEGREES, c.height]
};
geofs.api.getScreenCoordFromLla = function (a) {
    return Cesium.SceneTransforms.wgs84ToWindowCoordinates(geofs.api.viewer.scene, Cesium.Cartesian3.fromDegrees(a[1], a[0], a[2]))
};
geofs.api.xyz2lla = function (a, b) {
    var c = new Cesium.Matrix4,
        d = geofs.api.viewer.scene.globe.ellipsoid,
        e = Cesium.Cartesian3.fromDegrees(b[1], b[0], b[2]);
    Cesium.Transforms.eastNorthUpToFixedFrame(e, d, c);
    a = new Cesium.Cartesian3(a[0], a[1], a[2]);
    c = Cesium.Matrix4.multiplyByPoint(c, a, new Cesium.Cartesian3);
    return (d = Cesium.Cartographic.fromCartesian(c, d, new Cesium.Cartographic)) ? [d.latitude * RAD_TO_DEGREES - b[0], d.longitude * RAD_TO_DEGREES - b[1], d.height - b[2]] : [0, 0, 0]
};
geofs.api.cssTransform = function () {
    this._$element = $('<div class="geofs-overlay"></div>').appendTo(".geofs-overlay-container");
    this.positionY = this.positionX = this.rotation = 0;
    this.offset = {
        x: 0,
        y: 0
    }
};
geofs.api.cssTransform.rotationThreshold = 0;
geofs.api.cssTransform.translationThreshold = 0;
geofs.api.cssTransform.prototype = {
    setDrawOrder: function (a) {
        this._$element.css("z-index", a + geofs.api.overlayBaseZIndex)
    },
    setUrl: function (a) {
        var b = this;
        a && (this.image = new Image, this.image.src = a, this.image.onload = function () {
            b.loaded()
        }, this._$element.css("background-image", 'url("' + a + '")'))
    },
    setText: function (a) {
        this._$element.html(a);
        this._$element.addClass("geofs-textOverlay")
    },
    setTitle: function (a) {
        this._$element.attr("title", a)
    },
    setClass: function (a) {
        this._$element.addClass(a)
    },
    setStyle: function (a) {
        this._$element.attr("style",
            a)
    },
    loaded: function () {
        this.naturalSize = {
            x: this.image.width,
            y: this.image.height
        };
        $(this).trigger("load")
    },
    setFrameSize: function (a) {
        this._$element.css("width", a.x + "px");
        this._$element.css("height", a.y + "px")
    },
    setVisibility: function (a) {
        a ? this._$element.css("display", "block") : this._$element.css("display", "none")
    },
    setAnchor: function (a) {
        this._$element.css("margin-left", -a.x + "px ");
        this._$element.css("margin-bottom", -a.y + "px ")
    },
    setRotationCenter: function (a) {
        this._$element.css("transform-origin", a.x + "px " +
            a.y + "px")
    },
    setSize: function (a) {
        if (!this._$element) debugger;
        this._$element.css("background-size", a.x + "px " + a.y + "px")
    },
    setPosition: function (a) {
        this._$element.css("left", a.x + "px");
        this._$element.css("bottom", a.y + "px")
    },
    setPositionX: function (a) {
        Math.abs(a - this.positionX) < geofs.api.cssTransform.translationThreshold || (this._$element.css("left", a + "px"), this.positionX = a)
    },
    setPositionY: function (a) {
        Math.abs(a - this.positionY) < geofs.api.cssTransform.translationThreshold || (this._$element.css("bottom", a + "px"),
            this.positionY = a)
    },
    setPositionOffset: function (a) {
        Math.abs(a.x - this.offset.x) < geofs.api.cssTransform.translationThreshold && Math.abs(a.y - this.offset.y) < geofs.api.cssTransform.translationThreshold || (this._$element.css("background-position", a.x + "px " + a.y + "px"), this.offset.x = a.x, this.offset.y = a.y)
    },
    setOpacity: function (a) {
        this._$element.css("opacity", a)
    },
    setRotation: function (a) {
        if (!(Math.abs(a - this.rotation) < geofs.api.cssTransform.rotationThreshold)) {
            var b = "rotate(" + fixAngle360(-a) + "deg)";
            this._$element.css("transform",
                b);
            this.rotation = a
        }
    },
    destroy: function () {
        this._$element.remove();
        this._$element = null
    }
};
geofs.api.billboard = function (a, b, c) {
    c = Object.assign({
        collection: "default"
    }, c);
    a = a || [0, 0, 0];
    c.image = c.image || b;
    c.image += geofs.killCache;
    c.position = Cesium.Cartesian3.fromDegrees(a[1], a[0], a[2]);
    geofs.api.billboards[c.collection] || (geofs.api.billboards[c.collection] = geofs.api.viewer.scene.primitives.add(new Cesium.BillboardCollection({
        scene: geofs.api.viewer.scene,
        blendOption: Cesium.BlendOption.TRANSLUCENT
    })));
    this._billboard = geofs.api.billboards[c.collection].add(c);
    this._lla = a;
    c.altitudeMode == geofs.api.ALTITUDE_RELATIVE &&
        (this._billboard.heightReference = Cesium.HeightReference.RELATIVE_TO_GROUND);
    c.altitudeMode == geofs.api.CLAMP_TO_GROUND && (this._billboard.heightReference = Cesium.HeightReference.CLAMP_TO_GROUND);
    c.opacity && this.setOpacity(c.opacity);
    c.scale && this.setScale(c.scale);
    c.rotation && this.setRotation(c.rotation);
    c.geofsFixCameraRotation && this.fixCameraRotation();
    this._options = c
};
geofs.api.billboard.prototype = {
    setUrl: function (a) { },
    setVisibility: function (a) {
        this._billboard && (this._billboard.show = a)
    },
    setColor: function (a) {
        this._billboard && (a.alpha = this.opacity || 1, this._billboard.color = a)
    },
    setCssColor: function (a) {
        this._billboard && (this._billboard.color = Cesium.Color.fromCssColorString(a))
    },
    setOpacity: function (a) {
        if (this._billboard) {
            var b = this._billboard.color || new Cesium.Color(1, 1, 1, 1);
            b.alpha = a;
            this._billboard.color = b;
            this.opacity = a
        }
    },
    setRotation: function (a) {
        this._billboard &&
            (this._billboard.rotation = a)
    },
    setScale: function (a) {
        this._billboard && (this._billboard.scale = a)
    },
    setLocation: function (a) {
        this._billboard && (V3.isValid(a) ? (this._lla = a, this._billboard.position = Cesium.Cartesian3.fromDegrees(a[1], a[0], a[2])) : geofs.debug.debugger())
    },
    getLla: function (a) {
        return this._lla
    },
    fixCameraRotation: function () {
        var a = this;
        this.rotationFixCallback = geofs.api.addFrameCallback(function () {
            a._billboard.rotation = geofs.camera.radianRoll
        }, "billboardsRotationFix")
    },
    destroy: function () {
        this._billboard &&
            (geofs.api.removeFrameCallback(this.rotationFixCallback, "billboardsRotationFix"), geofs.api.billboards[this._options.collection].remove(this._billboard), this._billboard = null)
    }
};
geofs.api.groundTexture = function (a, b, c) {
    c = Object.assign({
        width: .001
    }, c);
    a = a || [0, 0, 0];
    c.image = c.image || b;
    c.image += geofs.killCache;
    c.position = Cesium.Cartesian3.fromDegrees(a[1], a[0], a[2]);
    this._entity = geofs.api.viewer.entities.add({
        polygon: {
            hierarchy: {
                positions: [new Cesium.Cartesian3.fromDegrees(a[1] - c.width, a[0] - c.width, 0), new Cesium.Cartesian3.fromDegrees(a[1] + c.width, a[0] - c.width, 0), new Cesium.Cartesian3.fromDegrees(a[1] + c.width, a[0] + c.width, 0), new Cesium.Cartesian3.fromDegrees(a[1] - c.width, a[0] +
                    c.width, 0)]
            },
            material: new Cesium.ImageMaterialProperty({
                image: c.image
            }),
            classificationType: Cesium.ClassificationType.TERRAIN,
            stRotation: 0,
            shadows: Cesium.ShadowMode.ENABLED
        },
        interleave: !1,
        allowPicking: !1
    });
    this.lla = a;
    this._options = c;
    c.opacity && this.setOpacity(c.opacity);
    c.scale && this.setScale(c.scale);
    c.rotation && this.setRotation(c.rotation)
};
geofs.api.groundTexture.prototype = {
    setUrl: function (a) {
        this._entity && (this._entity.polygon.material.image = a)
    },
    setVisibility: function (a) {
        this._entity && (this._entity.show = a)
    },
    setColor: function (a) {
        this._entity && (a.alpha = this.opacity || 1, this._entity.polygon.material.color = a)
    },
    setOpacity: function (a) {
        if (this._entity) {
            var b = this._entity.polygon.material.color || new Cesium.Color(1, 1, 1, 1);
            b.alpha = a;
            this._entity.polygon.material.color = b;
            this.opacity = a
        }
    },
    setRotation: function (a) {
        this._entity && (this._entity.stRotation =
            a)
    },
    setScale: function (a) {
        this._entity && (this.scale = a, this.setLocation(this.lla))
    },
    setLocation: function (a) {
        if (this._entity)
            if (V3.isValid(a)) {
                this.lla = a;
                var b = this._options.width * this.scale;
                this._entity.hierarchy = [new Cesium.Cartesian3.fromDegrees(a[1] - b, a[0] - b, 0), new Cesium.Cartesian3.fromDegrees(a[1] + b, a[0] - b, 0), new Cesium.Cartesian3.fromDegrees(a[1] + b, a[0] + b, 0), new Cesium.Cartesian3.fromDegrees(a[1] - b, a[0] + b, 0)]
            } else geofs.debug.debugger()
    },
    getLla: function (a) {
        return this.lla
    },
    destroy: function () {
        this._entity &&
            (geofs.api.viewer.entities.remove(this._entity), this._entity = null)
    }
};
geofs.api.notify = function (a, b, c) {
    $.haring.create(a, b || "OK", c)
};
geofs.api.analytics = {
    init: function () { },
    event: function (a, b, c, d) {
        window.gtag && window.gtag("event", b, {
            event_category: a,
            event_label: c,
            value: d
        })
    }
};
geofs.api.postMessage = function (a) {
    window.top.postMessage(a, "*")
};
geofs.api.Canvas = function (a) {
    this.canvas = document.createElement("canvas");
    this.canvas.width = a.width;
    this.canvas.height = a.height;
    this.context = this.canvas.getContext("2d");
    a.color = a.color || "#000000";
    this._options = a;
    this.patchSize = a.patchSize || a.width;
    this.context.fillStyle = a.color;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this._imageElements = []
};
geofs.api.Canvas.prototype = {
    loadImage: function (a) {
        var b = this;
        Array.isArray(a) || (a = [a]);
        this.imagesToLoad = a.length;
        this.imagesLoaded = 0;
        this.context.fillStyle = this._options.color;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this._options.blur && (this.context.filter = "blur(" + this._options.blur + "px)");
        return new Promise(function (c) {
            a.forEach(function (d, e) {
                b._imageElements[e] || (b._imageElements[e] = b.makeImageElement());
                b._imageElements[e].onload = function (f) {
                    ++b.imagesLoaded == b.imagesToLoad &&
                        b.paintAndResolve(c)
                };
                b._imageElements[e].onerror = function (f) {
                    ++b.imagesLoaded == b.imagesToLoad && b.paintAndResolve(c)
                };
                b._imageElements[e].src = d
            })
        })
    },
    paintAndResolve: function (a) {
        var b = this,
            c = this.canvas.width / this.patchSize;
        this._imageElements.forEach(function (d, e) {
            try {
                b.context.drawImage(d, e % c * b.patchSize, b.patchSize * Math.floor(e / c), b.patchSize, b.patchSize)
            } catch (f) { }
        });
        a(this.canvas)
    },
    makeImageElement: function () {
        var a = document.createElement("img");
        a.crossOrigin = "Anonymous";
        return a
    },
    getImageAsURLData: function () {
        if (this.canvas.toBlob) this.canvas.toBlob(function (a) {
            return URL.createObjectURL(a)
        });
        else return this.canvas.toDataURL()
    },
    destroy: function () {
        this._imageElements.forEach(function (a, b) {
            $(a).remove()
        });
        this._imageElements = [];
        $(this.canvas).remove()
    }
};
window.Cesium && (Cesium.sampleTerrainMostDetailed = function (a, b) {
    return a.readyPromise.then(function () {
        for (var c = [], d = a.availability, e = 0; e < b.length; ++e) {
            var f = b[e],
                g = a.maximumLevel;
            d && (g = d.computeMaximumLevelAtPosition(f));
            g = Math.min(g, a.maximumLevel);
            var k = c[g];
            k || (c[g] = k = []);
            k.push(f)
        }
        return Cesium.when.all(c.map(function (m, n) {
            if (m) return Cesium.sampleTerrain(a, n, m)
        })).then(function () {
            return b
        })
    })
});
geofs.api.FlatRunwayTerrainProvider = function (a) {
    var b = this;
    this.baseProvider = a.baseProvider;
    this.regions = {};
    this.tiles = {};
    this.minFlatteningLevel = this.defaultMinFlatteningLevel = 6;
    this.maximumLevel = 12;
    this.defaultMaximumLevel = a.maximumLevel || this.maximumLevel;
    this.flatten = !a.bypass;
    this.setMaximumLevel(this.maximumLevel);
    a = function () {
        b.regions = {};
        for (var c in geofs.runways.nearRunways) b.addRunway(geofs.runways.nearRunways[c])
    };
    $(document).on("runwayUpdate", a);
    a()
};
geofs.api.FlatRunwayTerrainProvider.prototype = {
    aName: "FlatRunwayTerrainProvider",
    get availability() {
        return this.baseProvider.availability
    },
    get credit() {
        return this.baseProvider.credit
    },
    get errorEvent() {
        return this.baseProvider.errorEvent
    },
    get hasVertexNormals() {
        return this.baseProvider.hasVertexNormals
    },
    get hasWaterMask() {
        return this.baseProvider.hasWaterMask
    },
    get ready() {
        return this.baseProvider.ready
    },
    get readyPromise() {
        return this.baseProvider.readyPromise
    },
    get tilingScheme() {
        return this.baseProvider.tilingScheme
    },
    getLevelMaximumGeometricError: function (a) {
        return this.baseProvider.getLevelMaximumGeometricError(a)
    },
    getTileDataAvailable: function (a, b, c) {
        return c > this.maximumLevel || c > this.defaultMaximumLevel ? !1 : this.baseProvider.getTileDataAvailable(a, b, c)
    },
    setMaximumLevel: function (a) {
        a > this.defaultMaximumLevel && (a = this.defaultMaximumLevel);
        this.minFlatteningLevel = a < this.defaultMinFlatteningLevel ? a : this.defaultMinFlatteningLevel;
        this.maximumLevel = a
    },
    addRunway: function (a) {
        var b = xy2ll([a.padding, a.padding], a.threshold1);
        a.rec = Cesium.Rectangle.fromDegrees(Math.min(a.threshold1[1], a.threshold2[1]) - b[1], Math.min(a.threshold1[0], a.threshold2[0]) - b[0], Math.max(a.threshold1[1], a.threshold2[1]) + b[1], Math.max(a.threshold1[0], a.threshold2[0]) + b[0]);
        a.threshold1Cartesian = Cesium.Cartesian3.fromDegrees(a.threshold1[1], a.threshold1[0]);
        a.threshold2Cartesian = Cesium.Cartesian3.fromDegrees(a.threshold2[1], a.threshold2[0]);
        a.direction = Cesium.Cartesian3.subtract(a.threshold1Cartesian, a.threshold2Cartesian, new Cesium.Cartesian3);
        a = {
            name: a.id,
            rec: a.rec,
            runways: [a],
            vertices: {}
        };
        for (var c in this.regions) b = this.regions[c], void 0 !== Cesium.Rectangle.intersection(b.rec, a.rec) && (a.rec = Cesium.Rectangle.union(a.rec, b.rec), a.name += b.name, a.runways = a.runways.concat(b.runways), delete this.regions[c]);
        this.regions[a.name] = a
    },
    requestTileGeometry: function (a, b, c, d) {
        if (c >= this.minFlatteningLevel && this.flatten) {
            var e = this.baseProvider.tilingScheme.tileXYToRectangle(a, b, c),
                f;
            for (f in this.regions)
                if (void 0 !== Cesium.Rectangle.intersection(this.regions[f].rec,
                    e)) return a = this.baseProvider.requestTileGeometry(a, b, c, d), void 0 === a ? void 0 : this.getPromise(a, e, this.regions[f])
        }
        return this.baseProvider.requestTileGeometry(a, b, c, d)
    },
    getPromise: function (a, b, c) {
        var d = this;
        if (void 0 !== a) {
            var e = new Promise(function (f, g) {
                c.referenceElevation ? f(c.referenceElevation) : Cesium.sampleTerrain(d.baseProvider, d.maximumLevel, [Cesium.Cartographic.fromDegrees(c.runways[0].threshold1[1], c.runways[0].threshold1[0])]).then(function (k) {
                    k[0] && k[0].height ? (c.referenceElevation = k[0].height,
                        f(c.referenceElevation)) : g("no value")
                })
            });
            return Cesium.when.all([e, a]).then(function (f) {
                try {
                    var g = f[0],
                        k = f[1];
                    for (f = 0; f < c.runways.length; f++) {
                        var m = c.runways[f],
                            n = !1;
                        k._oldMinimumHeight = k._minimumHeight;
                        k._oldMaximumHeight = k._maximumHeight;
                        var x = 32767 / (k._oldMaximumHeight - k._oldMinimumHeight);
                        g > k._maximumHeight && (k._maximumHeight = g, n = !0);
                        g < k._minimumHeight && (k._minimumHeight = g, n = !0);
                        for (var q = k._oldMinimumHeight - k._minimumHeight, z = 32767 / (k._maximumHeight - k._minimumHeight), r = (g - k._minimumHeight) *
                            z, p = 0; p < k._heightValues.length; p++) {
                            var F = b.south + k._quantizedVertices[k._heightValues.length + p] / 32767 * b.height,
                                H = b.west + k._quantizedVertices[p] / 32767 * b.width;
                            if (Cesium.Rectangle.contains(c.rec, new Cesium.Cartographic(H, F, 0))) {
                                var B = Cesium.Cartesian3.fromRadians(H, F);
                                Cesium.Cartesian3.subtract(m.threshold1Cartesian, B, B);
                                var W = Cesium.Cartesian3.magnitude(B),
                                    X = Cesium.Cartesian3.multiplyByScalar(m.direction, Cesium.Cartesian3.dot(B, m.direction) / Cesium.Cartesian3.dot(m.direction, m.direction), new Cesium.Cartesian3),
                                    Y = Cesium.Cartesian3.subtract(B, X, new Cesium.Cartesian3);
                                if (Math.sqrt(Cesium.Cartesian3.dot(Y, Y)) < m.padding && W < m.lengthMeters + m.padding) {
                                    k._heightValues[p] = r;
                                    continue
                                }
                            }
                            n && (k._heightValues[p] = (k._heightValues[p] / x + q) * z)
                        }
                    }
                    return k
                } catch (ea) {
                    geofs.debug.log("FlatRunwayTerrainProvider promise: " + ea)
                }
            })
        }
    }
};
geofs.api.waterDetection = {
    initialized: !1,
    canvasAPI: null,
    blur: 2,
    waterColour: "#000000",
    depthSlope: .01,
    depthOffset: 1.5,
    waterBlueColorRange: [210, 255],
    waterRedColorRange: [0, 220],
    tileSize: 256,
    zoomLevel: 11,
    lastTileURL: null,
    lastDepth: 0,
    create: function () {
        this.canvasAPI = new geofs.api.Canvas({
            width: this.tileSize,
            height: this.tileSize,
            color: this.waterColour
        });
        this.initialized = !0
    },
    reset: function () {
        this.lastDepth = 0
    },
    getWaterDepth: function (a, b) {
        if (!this.initialized) return null;
        var c = geofs.coord2tile(a, b, this.zoomLevel),
            d = geofs.waterServer + this.zoomLevel + "/" + c.x + "/" + c.y + ".png";
        if (this.lastTileURL != d) return this.canvasAPI.context.filter = "blur(" + this.blur + "px)", this.canvasAPI.loadImage(d), this.lastTileURL = d, this.tileOrigin = geofs.tile2coord(c.x, c.y, this.zoomLevel), a = geofs.tile2coord(c.x + 1, c.y + 1, this.zoomLevel), this.pixelGeographicSize = {
            lat: (a.lat - this.tileOrigin.lat) / this.tileSize,
            lon: (a.lon - this.tileOrigin.lon) / this.tileSize
        }, this.lastDepth;
        b = Math.round((b - this.tileOrigin.lon) / this.pixelGeographicSize.lon);
        a = Math.round((a -
            this.tileOrigin.lat) / this.pixelGeographicSize.lat);
        geofs.debugOn && $(".redpixel").css({
            top: a + "px",
            left: b + "px"
        });
        a = this.canvasAPI.context.getImageData(b, a, 1, 1).data;
        a = this.depthSlope * a[2] - this.depthOffset;
        geofs.cautiousWithTerrain && (a = 0);
        return this.lastDepth = a
    },
    destroy: function () {
        this.canvasAPI && (this.canvasAPI.destroy(), this.canvasAPI = null);
        this.initialized = !1
    }
};
geofs.api.tileLayerConstructor = L.tileLayer.fallback;
geofs.api.mapMaxZoom = 13;
geofs.api.mapOption = {
    minZoom: 3,
    maxZoom: geofs.api.mapMaxZoom,
    markerZoomAnimation: !1,
    worldCopyJump: !0,
    preferCanvas: !1
};
geofs.api.mapTooltipOptions = {
    permanent: !1
};
geofs.api.toolTipPositioning = [{
    direction: "top",
    offset: L.point(0, -15)
}, {
    direction: "right",
    offset: L.point(15, 0)
}, {
    direction: "bottom",
    offset: L.point(0, 15)
}, {
    direction: "left",
    offset: L.point(-15, 0)
}];
geofs.api.map = function (a, b, c) {
    var d = this;
    a.zoom = a.zoom || 10;
    this._holder = a.holder || $(".geofs-map-viewport")[0];
    this.map = L.map(this._holder, geofs.api.mapOption);
    geofs.api.tileLayerConstructor(geofs.osmTileProvider, {
        attribution: "\u00a9 OpenStreetMap contributors - Made with Natural Earth."
    }).addTo(this.map);
    this.icons = {
        yellow: [],
        blue: [],
        traffic: []
    };
    this.icons.yellow = L.icon({
        iconUrl: geofs.localUrl + "images/map/icons/yellow.png",
        iconSize: [40, 40],
        iconAnchor: [20, 20],
        popupAnchor: [0, 0],
        className: "geofs-map-icon"
    });
    this.icons.blue = L.icon({
        iconUrl: geofs.localUrl + "images/map/icons/blue.png",
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, 0],
        className: "geofs-map-icon"
    });
    this.icons.traffic = L.icon({
        iconUrl: geofs.localUrl + "images/map/icons/blue.png",
        iconSize: [20, 20],
        iconAnchor: [10, 10],
        popupAnchor: [0, 0],
        className: "geofs-traffic-icon"
    });
    this.map.on("load zoomend resize moveend", function () {
        d.updateMarkerLayers()
    });
    this.map.on("zoomend", function () {
        for (var e in ui.playerMarkers) {
            var f = ui.playerMarkers[e]._marker;
            f._icon.style.transform +=
                " rotate(" + f._geofsRotation + "deg)"
        }
    });
    this.map.getPane("tooltipPane").style.opacity = .9;
    this.map.getPane("overlayPane").style.opacity = .7;
    this.map.setView(L.latLng(b, c), a.zoom);
    this.map.on("mouseup", controls.mouseUpHandler);
    $(document).on("click", ".geofs-createPath", function () {
        geofs.api.map.flightPathOn ? geofs.api.map.stopCreatePath(d) : geofs.api.map.createPath(d)
    }).on("click", ".geofs-clearPath", function () {
        geofs.api.map.clearPath(d)
    })
};
geofs.api.map.runwayMarkerRadius = 7;
geofs.api.map.defaultLayer = {
    minZoom: 0,
    maxZoom: 15,
    tileSize: 10,
    tiles: {}
};
geofs.api.map.prototype = {
    init: function () {
        this.updateMarkerLayers();
        geofs.api.map.instance = this
    },
    updateMap: function (a, b) {
        this.map.panTo(L.latLng(a, b))
    },
    getCenterLla: function (a, b) {
        a = this.map.getCenter();
        return [a.lat, a.lng]
    },
    addLayeredMarker: function (a, b, c, d) {
        c = geofs.getLatLonMatrixcoord(c, d, geofs.api.map.runwayLayers[a].tileSize);
        geofs.api.map.runwayLayers[a] || (geofs.api.map.runwayLayers[a] = Object.assign({}, geofs.api.map.defaultLayer));
        geofs.api.map.runwayLayers[a].visibileTiles = {};
        geofs.api.map.runwayLayers[a].tiles[c] ||
            (geofs.api.map.runwayLayers[a].tiles[c] = []);
        geofs.api.map.runwayLayers[a].tiles[c].push(b)
    },
    getVisibleTiles: function (a, b) {
        var c = a.getNorthEast().wrap(),
            d = a.getSouthWest().wrap();
        a = Math.floor(d.lng / b);
        var e = Math.floor(d.lat / b),
            f = (parseInt((c.lng - d.lng) / b) || 1) + 2;
        b = (parseInt((c.lat - d.lat) / b) || 1) + 2;
        c = {};
        for (d = a; d < a + f; d++)
            for (var g = e; g < e + b; g++) c[g + "/" + d] = !0;
        return c
    },
    showTile: function (a, b) {
        var c = this;
        a.visibileTiles && !a.visibileTiles[b] && a.tiles[b] && (a.tiles[b].forEach(function (d) {
            d.marker || (d.marker =
                geofs.api.map.makeRunwayMarker(d, c));
            d.marker.addTo(c.map)
        }), a.visibileTiles[b] = a.tiles[b])
    },
    hideTile: function (a, b) {
        a.visibileTiles && a.visibileTiles[b] && a.tiles[b] && (a.tiles[b].forEach(function (c) {
            c.marker && (c.marker.unbindPopup(), c.marker.remove(), c.marker = null)
        }), delete a.visibileTiles[b])
    },
    updateMarkerLayers: function () {
        var a = this.map.getZoom(),
            b;
        for (b in geofs.api.map.runwayLayers) {
            var c = geofs.api.map.runwayLayers[b];
            if (a > c.minZoom && a < c.maxZoom) {
                var d = this.getVisibleTiles(this.map.getBounds(),
                    c.tileSize),
                    e;
                for (e in c.visibileTiles) d[e] || this.hideTile(c, e);
                for (e in d) this.showTile(c, e)
            } else
                for (e in c.visibileTiles) this.hideTile(c, e)
        }
    },
    setGenericLocationPopup: function () {
        var a = this,
            b = L.popup();
        this.map.on("contextmenu click", function (c) {
            if (2 == c.originalEvent.button || geofs.isApp) {
                b.closePopup();
                var d = c.latlng.lat + "," + c.latlng.lng;
                b.setContent('<div class="geofs-map-popup"><button class="mdl-button mdl-js-button" href="http://flyto://' + d + ', 0, 0, true">Ground</button><button class="mdl-button mdl-js-button" href="http://flyto://' +
                    d + ', 304, 0, true">1,000 feet</button><button class="mdl-button mdl-js-button" href="http://flyto://' + d + ', 914, 0, true">3,000 feet</button><button class="mdl-button mdl-js-button" href="http://flyto://' + d + ', 3048, 0, true">10,000 feet</button><button class="mdl-button mdl-js-button" href="http://flyto://' + d + ', 6096, 0, true">20,000 feet</button><button class="mdl-button mdl-js-button" href="http://flyto://' + d + ', 9144, 0, true">30,000 Feet</button><button class="mdl-button mdl-js-button" href="http://flyto://' +
                    d + ', 12192, 0, true">40,000 Feet</button></div>').setLatLng(c.latlng).openOn(a.map);
                c.originalEvent.preventDefault()
            }
        })
    },
    mapClickHandler: function (a) {
        var b = $(a.target).closest("[href]").attr("href");
        if (b && (b = b.split("://"), "flyto" == b[1])) {
            b = b[2].split(",");
            var c = parseFloat(b[3]),
                d = [parseFloat(b[0]), parseFloat(b[1]), parseFloat(b[2]), c];
            "approach" == b[4] ? (c *= DEGREES_TO_RAD, c = xy2ll(V2.scale([Math.sin(c), Math.cos(c)], parseFloat(b[5])), d), d[0] -= c[0], d[1] -= c[1], d[2] = d[2] * FEET_TO_METERS + parseFloat(b[6]), d[4] = !0) : d[4] = b[4];
            geofs.flyTo(d);
            a.preventDefault()
        }
    },
    setTooltipVisibility: function (a) {
        geofs.api.mapTooltipOptions.permanent = a
    }
};
geofs.api.map.runwayLayers = {
    major: {
        minZoom: 6,
        maxZoom: 15,
        tileSize: 5,
        tiles: {}
    },
    minor: {
        minZoom: 8,
        maxZoom: 15,
        tileSize: 5,
        tiles: {}
    }
};
geofs.api.map.majorRunwayMarkers = [];
geofs.api.map.minorRunwayMarkers = [];
geofs.api.map.runwayMarkerPopup = function (a) {
    a = a.options.runway;
    var b = a[2] + "," + a[3],
        c = a[0].split("|");
    return '<div class="geofs-map-popup"><header><span class="mdl-chip"><span class="mdl-chip__text"><b>' + c[0] + "</b> " + c[1] + "(" + c[2] + ')</span></span></header><button class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored" href="http://flyto://' + b + ",0," + a[1] + '" title="Take-off from"><i class="material-icons">flight_takeoff</i></button><button class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored" href="http://flyto://' +
        b + ",1000," + a[1] + '" title="Fly by"><i class="material-icons">flight</i></button><button class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored" href="http://flyto://' + b + "," + a[4] + "," + a[1] + ',approach,4800,450" title="Approach"><i class="material-icons">flight_land</i></button></div>'
};
geofs.api.map.addRunwayMarker = function (a, b) {
    b.addLayeredMarker(a[5] ? "major" : "minor", a, a[2], a[3])
};
geofs.api.map.makeRunwayMarker = function (a, b) {
    return L.circleMarker([a[2], a[3]], {
        radius: geofs.api.map.runwayMarkerRadius,
        color: "#ffffff",
        weight: 2,
        fillColor: a[5] ? "#184888" : "#ffd200",
        fillOpacity: 1,
        pane: "overlayPane",
        runway: a
    }).bindPopup(geofs.api.map.runwayMarkerPopup, {
        minWidth: 200
    })
};
geofs.api.map.planeMarker = function (a, b, c, d, e, f) {
    this.style = d = d || "blue";
    this.apiMap = c;
    this.label = f;
    this._marker = L.marker(L.latLng(a, b), {
        icon: c.icons[d],
        riseOnHover: !0
    }).addTo(c.map);
    f && (a = Object.assign({}, geofs.api.mapTooltipOptions, geofs.api.toolTipPositioning[Math.floor(4 * Math.random())]), this._marker.bindTooltip(f, a))
};
geofs.api.map.planeMarker.prototype = {
    updatePlaneMarker: function (a, b, c, d) {
        this._marker.setLatLng(L.latLng(a, b));
        d && (this.label = d, this._marker.setTooltipContent(d));
        this._marker._geofsRotation = c;
        this._marker._icon.style.transform += " rotate(" + this._marker._geofsRotation + "deg)"
    },
    destroyPlaneMarker: function (a) {
        this._marker && (this._marker.unbindTooltip(), this._marker.remove())
    },
    resetTooltip: function () {
        if (this._marker) {
            this._marker.unbindTooltip();
            var a = Object.assign({}, geofs.api.mapTooltipOptions, geofs.api.toolTipPositioning[Math.floor(4 *
                Math.random())]);
            this._marker.bindTooltip(this.label, a)
        }
    }
};
geofs.api.map.flightPath = null;
geofs.api.map.flightPathOn = !1;
geofs.api.map.createPath = function (a, b) {
    var c = {
        weight: 5
    };
    geofs.api.map.flightPath || (geofs.api.map.flightPath = L.Polyline.Plotter(b || [], c).addTo(a.map));
    geofs.api.map.flightPath.setReadOnly(!1);
    $(".geofs-createPath").addClass("on");
    $(".geofs-clearPath").show();
    geofs.api.map.flightPathOn = !0
};
geofs.api.map.stopCreatePath = function () {
    geofs.api.map.flightPath && (geofs.api.map.flightPath.setReadOnly(!0), $(".geofs-createPath").removeClass("on"), geofs.api.map.flightPathOn = !1)
};
geofs.api.map.clearPath = function () {
    geofs.api.map.flightPath && (geofs.api.map.stopCreatePath(), geofs.api.map.flightPath.remove(), geofs.api.map.flightPath = null, $(".geofs-clearPath").hide())
};
geofs.api.map.getPathPoints = function () {
    if (geofs.api.map.flightPath) {
        var a = [];
        geofs.api.map.flightPath.getLatLngs().forEach(function (b) {
            a.push([b.lat, b.lng])
        });
        return a
    }
};
geofs.api.map.setPathPoints = function (a) {
    geofs.api.map.instance && (geofs.api.map.clearPath(), geofs.api.map.createPath(geofs.api.map.instance, a))
};
geofs.api.reverserGeocode = function (a, b) {
    jQuery.getJSON(geofs.url + "/backend/geocode/geocode.php?query=" + a, function (c) {
        try {
            c.lat && c.lon && b(c.lat, c.lon)
        } catch (d) { }
    })
};
geofs.api.checkIfMobile = function () {
    geofs.api.isMobile() ? ($("body").addClass("geofs-mobile"), geofs.isMobile = !0) : $("body").removeClass("geofs-mobile")
};
geofs.api.isMobile = function () {
    return geofs.isApp || 550 >= window.innerWidth
};
geofs.api.hasOrientation = function () {
    return window.DeviceOrientationEvent ? !0 : !1
};
geofs.api.getPlatform = function () {
    return geofs.platform ? geofs.platform : null
};
geofs.api.doRetro = function () {
    geofs.retroOn || (geofs.aircraftList[2E3] = {
        name: "Retro 172",
        dir: "|models|aircraft|retro|c172|",
        multiplayerFiles: "multiplayer.gltf,multiplayer-low.gltf",
        path: "/models/aircraft/retro/c172/"
    }, geofs.retroOn = !0, clearInterval(weather.interval), weather.refresh = function () { }, weather.update = function () { }, geofs.aircraft.instance.change(2E3).then(function () {
        audio.impl.html5.playFile("/sounds/retro/chiptune.mp3", 1E3);
        geofs.useSimpleShadow(!0);
        var a = Cesium.Color.fromCssColorString("#2caecf"),
            b = new Cesium.Material({
                fabric: {
                    type: "SlopeColorContour",
                    materials: {
                        contourMaterial: {
                            type: "ElevationContour"
                        },
                        colorMaterial: {
                            type: "Color"
                        }
                    },
                    components: {
                        diffuse: "contourMaterial.alpha == 0.0 ? colorMaterial.diffuse : contourMaterial.diffuse",
                        alpha: "1.0"
                    }
                },
                translucent: !1
            });
        b.materials.contourMaterial.uniforms.width = 1;
        b.materials.contourMaterial.uniforms.spacing = 30;
        b.materials.contourMaterial.uniforms.color = a;
        b.materials.colorMaterial.uniforms.color = Cesium.Color.fromCssColorString("#0a243b");
        geofs.api.viewer.scene.globe.material =
            b;
        var c = geofs.api.viewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(0, 0, 1E6),
            billboard: {
                image: "images/retro/sun.png",
                show: !0,
                pixelOffset: new Cesium.Cartesian2(0, 0),
                eyeOffset: new Cesium.Cartesian3(0, 0, 0),
                horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
                verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
                width: 256,
                height: 256
            }
        });
        geofs.api.addFrameCallback(function () {
            c.position = new Cesium.Cartesian3.fromDegrees(geofs.aircraft.instance.llaLocation[1] - 10, geofs.aircraft.instance.llaLocation[0], 1E4)
        });
        geofs.api.viewer.scene.skyAtmosphere.hueShift =
            .3;
        geofs.api.viewer.scene.skyAtmosphere.brightnessShift = -.2;
        geofs.api.viewer.scene.skyAtmosphere.saturationShift = .2;
        geofs.api.viewer.scene.skyBox.show = !1;
        geofs.api.viewer.scene.sun.destroy();
        geofs.api.viewer.scene.fog.density = 8E-5;
        geofs.runways.modelVisibility = !0;
        geofs.runways.redraw()
    }))
};
"use strict";
geofs.animation = {};
geofs.animation.init = function () { };
geofs.animation.getRampRatio = function (a, b) {
    if (0 > b || 1 < b) return 0;
    var c = a.length - 1,
        d = 1 / c,
        e = Math.ceil(b / d),
        f = clamp(e - 1, 0, c - 1);
    e = clamp(e, 1, c);
    c = a[f];
    a = a[e];
    return a > c ? c + (b - f * d) / d * (a - c) : a + (d - (b - f * d)) / d * (c - a)
};
geofs.animation.getRampValue = function (a, b) {
    var c = 0;
    b > a[0] && b < a[3] && (c = b < a[1] ? 1 / (a[1] - a[0]) * (b - a[0]) : b > a[2] ? 1 - 1 / (a[3] - a[2]) * (b - a[2]) : 1);
    return c
};
geofs.animation.values = {};
geofs.animation.resetValues = function (a) {
    geofs.animation.values = Object.assign({}, geofs.animation.values, a)
};
geofs.animation.getValue = function (a) {
    return geofs.animation.values[a] || 0
};
geofs.animation.filter = function (a, b) {
    if ("random" == a.value) b = Math.random();
    else if (a["function"]) {
        if (b = 0, !geofs.aircraft.instance.aircraftRecord.isCommunity) try {
            b = Function(a["function"])()
        } catch (f) {
            b = 0
        }
    } else b = b || geofs.animation.values[a.value] || 0;
    if (a.ramp) b = geofs.animation.getRampValue(a.ramp, b);
    else if (a.valueRamp) b = geofs.animation.getRampRatio(a.valueRamp, b);
    else if (a.ratioRamp) {
        var c = geofs.animation.getRampRatio(a.ratioRamp, b);
        b *= c
    }
    "strobe" == a.value ? (b = 0, 1400 < geofs.utils.fastNow() % 1500 && (b = 1)) :
        "strobe2" == a.value ? (b = 0, 1700 < geofs.utils.fastNow() % 1800 && (b = 1)) : "strobe3" == a.value && (b = 0, c = geofs.utils.fastNow() % 1800, 100 < c && 200 > c || 1700 < c) && (b = 1);
    a.floor && (b = Math.floor(b));
    a.abs && (b = Math.abs(b));
    a.between && (b = b > a.between[0] && b < a.between[1] ? 1 : 0);
    a.delay && (b -= a.delay, b = clamp(b, 0, 1), 0 > a.delay && (b += a.delay));
    a.threshold && (b = b < a.threshold ? 0 : b - a.threshold);
    a.negthreshold && (b = b > a.negthreshold ? 0 : b - a.negthreshold);
    a.eq && (b = b == a.eq ? 1 : 0);
    a.notEq && (b = b != a.notEq ? 1 : 0);
    a.gt && (b = b > a.gt ? 1 : 0);
    a.lt && (b = b < a.lt ? 1 : 0);
    a.min && b < a.min && (b = a.min);
    a.max && b > a.max && (b = a.max);
    c = !1;
    if (a.when) {
        for (var d = 0, e = a.when.length; d < e; d++)
            if (a.when[d] == b) {
                c = !0;
                break
            } b = c
    } else if (a.whenNot) {
        c = !0;
        d = 0;
        for (e = a.whenNot.length; d < e; d++)
            if (a.whenNot[d] == b) {
                c = !1;
                break
            } b = c
    }
    a.preoffset && (b += a.preoffset);
    a.log && (b = Math.log(b));
    a.ratio && (b *= a.ratio);
    a.power && (b = Math.pow(b, a.power));
    a.offset && (b += a.offset);
    a.set && (b = b ? a.set : a.unset || 0);
    a.fmin && b < a.fmin && (b = a.fmin);
    a.fmax && b > a.fmax && (b = a.fmax);
    a.concat && (Array.isArray(a.concat) || (a.concat = [a.concat]),
        a.concat.forEach(function (f) {
            b += geofs.animation.values[f] || f
        }));
    return b
};
"use strict";
window.geofs = window.geofs || {};
geofs.utils = {
    timeProvider: window.performance || window.Date
};
geofs.utils.lastNow = geofs.utils.timeProvider.now();
geofs.utils.fastNow = function () {
    return geofs.utils.lastNow
};
geofs.utils.now = function () {
    geofs.utils.lastNow = geofs.utils.timeProvider.now();
    return geofs.utils.lastNow
};
geofs.utils.llaDistanceInMeters = function (a, b, c) {
    return V2.length(ll2xy(V3.sub(a, b), c || a))
};
geofs.utils.pivotArray = function (a) {
    var b = {};
    try {
        for (i = 0, l = a.length; i < l; i++) b[a[i]] = 1
    } catch (c) { }
    return b
};
geofs.utils.htrFromHeadingNormal = function (a, b) {
    a *= DEGREES_TO_RAD;
    a = V3.normalize(V3.cross([Math.sin(a), Math.cos(a), 0], b));
    var c = V3.cross(b, a);
    return M33.getOrientation([a, c, b])
};
geofs.utils.hashCode = function (a) {
    var b = 0,
        c;
    if (0 === a.length) return b;
    for (c = 0; c < a.length; c++) {
        var d = a.charCodeAt(c);
        b = (b << 5) - b + d;
        b |= 0
    }
    return b + ""
};
geofs.utils.displayAltitude = function (a) {
    return a = 18E3 < a ? "FL" + 5 * Math.round(a / 500) : a + "ft."
};
geofs.utils.bearingBetweenLocations = function (a, b) {
    return Math.atan2(a[1] - b[1], a[0] - b[0]) * RAD_TO_DEGREES
};
geofs.utils.lookAt = function (a, b, c) {
    a = lla2xyz(V3.sub(a, b), b);
    c = M33.makeOrthonormalFrame(a, c);
    return M33.getOrientation(c)
};
geofs.utils.limitRate = function (a, b, c, d) {
    var e = b - a;
    return Math.abs(e * d) > c ? a + e * c * d : b
};
geofs.utils.easingFunctions = {
    linear: function (a) {
        return a
    },
    easeInQuad: function (a) {
        return a * a
    },
    easeOutQuad: function (a) {
        return a * (2 - a)
    },
    easeInOutQuad: function (a) {
        return .5 > a ? 2 * a * a : -1 + (4 - 2 * a) * a
    },
    easeInCubic: function (a) {
        return a * a * a
    },
    easeOutCubic: function (a) {
        return --a * a * a + 1
    },
    easeInOutCubic: function (a) {
        return .5 > a ? 4 * a * a * a : (a - 1) * (2 * a - 2) * (2 * a - 2) + 1
    },
    easeInQuart: function (a) {
        return a * a * a * a
    },
    easeOutQuart: function (a) {
        return 1 - --a * a * a * a
    },
    easeInOutQuart: function (a) {
        return .5 > a ? 8 * a * a * a * a : 1 - 8 * --a * a * a * a
    },
    easeInQuint: function (a) {
        return a *
            a * a * a * a
    },
    easeOutQuint: function (a) {
        return 1 + --a * a * a * a * a
    },
    easeInOutQuint: function (a) {
        return .5 > a ? 16 * a * a * a * a * a : 1 + 16 * --a * a * a * a * a
    }
};
geofs.utils.isWebglSupported = function () {
    try {
        var a = document.createElement("canvas");
        return !!window.WebGLRenderingContext && a.getContext("webgl")
    } catch (b) {
        return !1
    }
};

function absMin(a, b) {
    asbA = Math.abs(a);
    asbB = Math.abs(b);
    return asbA < asbB ? a : b
}

function span(a, b, c) {
    return void 0 == b || void 0 == c ? a : a > b && a < c ? a - b > c - a ? b : c : a
}

function boundHours24(a) {
    a %= 24;
    0 > a && (a = 24 + a);
    return a
}

function fixAngle(a) {
    return fixAngle360(a + 180) - 180
}

function fixAngle360(a) {
    a %= 360;
    return 0 <= a ? a : a + 360
}

function fixAngles360(a) {
    for (var b = a.length - 1; 0 <= b; b--) a[b] = fixAngle(a[b]);
    return a
}

function fixAngles(a) {
    for (var b = a.length - 1; 0 <= b; b--) a[b] = fixAngle(a[b]);
    return a
}

function exponentialSmoothingV3(a, b, c, d) {
    return [exponentialSmoothing(a, b[0], c, d), exponentialSmoothing(a, b[1], c, d), exponentialSmoothing(a, b[2], c, d)]
}

function exponentialSmoothing(a, b, c, d) {
    SMOOTH_BUFFER[a] || (SMOOTH_BUFFER[a] = {
        Stm1: d || 0,
        Xtm1: d || 0
    }, c ? (SMOOTH_BUFFER[a].smoothingFactor = c, SMOOTH_BUFFER[a].invSmoothingFactor = 1 - c) : (SMOOTH_BUFFER[a].smoothingFactor = SMOOTHING_FACTOR, SMOOTH_BUFFER[a].invSmoothingFactor = 1 - SMOOTHING_FACTOR));
    a = SMOOTH_BUFFER[a];
    c = a.Xtm1 * a.smoothingFactor + a.invSmoothingFactor * a.Stm1;
    a.Stm1 = c;
    a.Xtm1 = b;
    return c
}

function getBuildingCollision(a) {
    return null
}

function xyz2lla(a, b) {
    return geofs.api.xyz2lla(a, b)
}

function xy2ll(a, b) {
    var c = [];
    c[0] = a[1] * METERS_TO_LOCAL_LAT;
    c[1] = a[0] / (Math.cos((b[0] + c[0]) * DEGREES_TO_RAD) * MERIDIONAL_RADIUS * DEGREES_TO_RAD);
    return c
}

function lla2xyz(a, b) {
    b = ll2xy(a, b);
    b[2] = a[2];
    return b
}

function ll2xy(a, b) {
    var c = [];
    c[1] = a[0] / METERS_TO_LOCAL_LAT;
    c[0] = a[1] / (1 / (Math.cos((b[0] + a[0]) * DEGREES_TO_RAD) * MERIDIONAL_RADIUS * DEGREES_TO_RAD));
    return c
}

function clamp(a, b, c) {
    return a > c ? c : a < b ? b : a
}

function geoDecodeLocation(a, b) {
    geofs.api.reverserGeocode(a, b)
}

function Overlay(a, b) {
    var c = this;
    this.definition = {
        url: "",
        anchor: {
            x: 0,
            y: 0
        },
        position: {
            x: 0,
            y: 0
        },
        rotation: 0,
        size: {
            x: 0,
            y: 0
        },
        offset: {
            x: 0,
            y: 0
        },
        visibility: !0,
        opacity: b ? b.definition.opacity : 1,
        scale: {
            x: 1,
            y: 1
        },
        rescale: b ? b.definition.rescale : !1,
        rescalePosition: !1,
        alignment: {
            x: "left",
            y: "bottom"
        },
        overlays: []
    };
    this.children = [];
    this.definition = $.extend(!0, {}, this.definition, a);
    this.position = this.definition.position;
    this.size = this.definition.size;
    this.iconFrame = {
        x: 0,
        y: 0
    };
    this.scale = this.definition.scale;
    this.positionOffset =
        this.definition.offset;
    this._offset = {
        x: 0,
        y: 0
    };
    this._sizeScale = 1;
    this.rotation = this.definition.rotation;
    this.opacity = this.definition.opacity;
    this.anchor = this.definition.anchor;
    this.visibility = this.definition.visibility;
    this.overlay = new geofs.api.cssTransform;
    this.overlay.setUrl(this.definition.url);
    this.overlay.setText(this.definition.text);
    this.overlay.setClass(this.definition.class);
    this.overlay.setStyle(this.definition.style);
    this.overlay.setDrawOrder(this.definition.drawOrder || 0);
    $(this.overlay).one("load",
        function (e) {
            var f = c.definition.size.x / e.currentTarget.naturalSize.x;
            c.definition.size = e.currentTarget.naturalSize;
            c._sizeScale = f;
            c.scaleAndPlace()
        });
    this.overlay.setVisibility(this.definition.visibility);
    if (this.definition.animations)
        for (a = 0, b = this.definition.animations.length; a < b; a++) {
            var d = this.definition.animations[a];
            "rotate" == d.type && (this.definition.animateRotation = !0);
            "show" == d.type && (this.animateVisibility = !0, this.animationVisibility = this.definition.visibility)
        }
    for (a = 0; a < this.definition.overlays.length; a++) b =
        new Overlay(this.definition.overlays[a], this), b.parent = this, this.children[a] = b
}
Overlay.prototype.setVisibility = function (a) {
    this.animateVisibility && !this.animationVisibility || this.overlay.setVisibility(a);
    this.visibility = a;
    for (var b = 0; b < this.children.length; b++) this.children[b].setVisibility(a)
};
Overlay.prototype.setOpacity = function (a) {
    this.overlay.setOpacity(a);
    this.opacity = a;
    for (var b = 0; b < this.children.length; b++) this.children[b].setOpacity(a)
};
Overlay.prototype.scaleAllProperties = function (a) {
    a = a || this.scale;
    var b = 1,
        c = 1,
        d = {
            x: 1 * this._sizeScale,
            y: 1 * this._sizeScale
        };
    this.definition.rescalePosition && (b = a.x, c = a.y);
    this.definition.rescale && (d = {
        x: d.x * a.x,
        y: d.y * a.y
    });
    this.position = {
        x: this.definition.position.x * b,
        y: this.definition.position.y * c
    };
    this.size = {
        x: this.definition.size.x * d.x,
        y: this.definition.size.y * d.y
    };
    this.overlay.setSize(this.size);
    this.positionOffset = {
        x: this.definition.offset.x * d.x,
        y: this.definition.offset.y * d.y
    };
    this.overlay.setPositionOffset(this.positionOffset);
    this.definition.iconFrame ? (this.iconFrame = {
        x: this.definition.iconFrame.x * d.x,
        y: this.definition.iconFrame.y * d.y
    }, this.overlay.setFrameSize(this.iconFrame)) : (this.iconFrame = this.size, this.overlay.setFrameSize(this.size));
    this.anchor = {
        x: this.definition.anchor.x * d.x,
        y: this.definition.anchor.y * d.y
    };
    this.overlay.setAnchor(this.anchor);
    this.rotationCenter = {
        x: this.anchor.x,
        y: this.iconFrame.y - this.anchor.y
    };
    this.overlay.setRotationCenter(this.rotationCenter)
};
Overlay.prototype.scaleAndPlace = function (a, b, c) {
    (this.definition.rescale && !this.parent || this.definition.rescalePosition) && !c ? (this.scale = this.scaleFromParent(a), a = clamp(geofs.viewportWidth / VIEWPORT_REFERENCE_WIDTH, .3, 1), c = clamp(geofs.viewportHeight / VIEWPORT_REFERENCE_HEIGHT, .3, 1), this.scale = S2.scale(this.scale, Math.min(a, c))) : this.scale = this.scaleFromParent(a);
    this.offset = {
        x: 0,
        y: 0
    };
    this.scaleAllProperties();
    this.place(b);
    for (b = 0; b < this.children.length; b++) this.children[b].scaleAndPlace()
};
Overlay.prototype.place = function (a) {
    this.parent ? (this.definition.animateRotation || (this.rotation = this.definition.rotation + this.parent.rotation), this.position = {
        x: this.parent.position.x + this.definition.position.x * this.scale.x,
        y: this.parent.position.y + this.definition.position.y * this.scale.y
    }) : (a = a || this.definition.position, "cockpit" == geofs.camera.currentModeName && this.definition.cockpit ? this.position = a : this.definition.alignment && ("right" == this.definition.alignment.x && (this.position.x = geofs.viewportWidth -
        a.x * this.scale.x), "center" == this.definition.alignment.x && (this.position.x = geofs.viewportWidth / 2 - a.x * this.scale.x), "top" == this.definition.alignment.y && (this.position.y = geofs.viewportHeight - a.y * this.scale.y), "center" == this.definition.alignment.y && (this.position.y = geofs.viewportHeight / 2 - a.y * this.scale.y)));
    this.overlay.setPosition(this.position);
    this.overlay.setOpacity(this.opacity);
    this.overlay.setRotation(this.rotation)
};
Overlay.prototype.scaleFromParent = function (a) {
    a = a || {
        x: 1,
        y: 1
    };
    var b = this.parent ? this.parent.scale : a;
    return {
        x: this.definition.scale.x * b.x * a.x,
        y: this.definition.scale.y * b.y * a.y
    }
};
Overlay.prototype.positionFromParentRotation = function () {
    var a = [this.position.x, this.position.y, 0],
        b = M33.identity();
    b = M33.rotationZ(b, -this.parent.rotation * DEGREES_TO_RAD);
    a = M33.transform(b, a);
    return {
        x: a[0],
        y: a[1]
    }
};
Overlay.prototype.animate = function (a) {
    if (this.definition.animations)
        for (var b = 0; b < this.definition.animations.length; b++) {
            var c = this.definition.animations[b],
                d = geofs.animation.filter(c);
            if (c.lastValue != d || a) switch (c.lastValue = d, c.type) {
                case "moveY":
                    this.visibility && this.overlay.setPositionY(this.position.y + d * this.scale.y);
                    break;
                case "translateY":
                    this.visibility && this.translateIcon(d, "Y");
                    break;
                case "translateX":
                    this.visibility && this.translateIcon(d, "X");
                    break;
                case "scaleX":
                    this.visibility && (this.size.x =
                        d * this.scale.x, this.overlay.setSize(this.size));
                    break;
                case "text":
                    this.overlay.setText(d);
                    break;
                case "title":
                    this.overlay.setTitle(d);
                    break;
                case "opacity":
                    this.setOpacity(d);
                case "show":
                    this.visibility && this.overlay.setVisibility(d);
                    this.animationVisibility = d;
                    break;
                default:
                    d && this.visibility && this.rotate(d)
            }
        }
    for (b = 0; b < this.children.length; b++) this.children[b].animate(a)
};
Overlay.prototype.translateIcon = function (a, b) {
    "Y" == b ? this._offset.y = a * this.scale.y * this._sizeScale - this.size.y + this.iconFrame.y : this._offset.x = a * this.scale.x * this._sizeScale;
    this.overlay.setPositionOffset(S2.add(this.positionOffset, this._offset))
};
Overlay.prototype.rotate = function (a) {
    this.rotation = a;
    this.parent && (this.rotation += this.parent.rotation);
    this.overlay.setRotation(this.rotation)
};
Overlay.prototype.setText = function (a) {
    this.overlay.setText(a)
};
Overlay.prototype.setTitle = function (a) {
    this.overlay.setTitle(a)
};
Overlay.prototype.destroy = function () {
    geofs.removeResizeHandler(this.resizeHandler);
    this.overlay && this.overlay.destroy()
};
geofs.ajax = {};
geofs.ajax.post = function (a, b, c, d) {
    b = JSON.stringify(b);
    return $.ajax({
        type: "POST",
        url: a,
        crossDomain: !0,
        data: b,
        dataType: "json",
        success: c,
        error: function (e, f, g) {
            try {
                d(e, f, g)
            } catch (k) { }
            geofs.debug.error(g, "geofs.ajax.post. POST failed" + f + " - " + g)
        }
    })
};

function lookAt(a, b, c) {
    return geofs.utils.lookAt(a, b, c)
}

function getURLParameters() {
    var a = {};
    if (window.location.search) {
        var b = window.location.search.substring(1, window.location.search.length);
        b = b.split("&");
        for (var c = 0; c < b.length; c++) {
            var d = b[c].split("=");
            a[d[0]] = d[1]
        }
    }
    return a
}

function clone(a) {
    if ("object" == typeof a)
        if (geofs.isArray(a)) {
            var b = [];
            for (var c = 0; c < a.length; c++) b[c] = clone(a[c])
        } else
            for (c in b = {}, a) b[c] = clone(a[c]);
    else b = a;
    return b
}
geofs.selectDropdown = function (a, b) {
    for (var c = 0; c < a.options.length; c++)
        if (a.options[c].value == b) {
            a.selectedIndex = c;
            break
        }
};
geofs.getLink = function () {
    var a = geofs.aircraft.instance.llaLocation[2];
    geofs.aircraft.instance.groundContact && (a = 0);
    new URL(window.location.href);
    var b = geofs.masterDomain + "/fly?";
    b += "a=" + geofs.aircraft.instance.id;
    b += "&lo=" + geofs.aircraft.instance.llaLocation[1].toFixed(5);
    b += "&la=" + geofs.aircraft.instance.llaLocation[0].toFixed(5);
    b += "&al=" + a.toFixed();
    b += "&h=" + geofs.aircraft.instance.htr[0].toFixed();
    a = "Use this link to start the simulator at the current location:<textarea>" + b + "</textarea>";
    $(".geofs-linkOutput").html(a)
};
geofs.isArray = function (a) {
    return a.constructor === Array
};
geofs.loadModel = function (a, b) {
    b = b || {};
    b.url = a + geofs.killCache;
    return geofs.api.loadModel(b)
};
geofs.setModelLocation = function (a, b) {
    geofs.api.setModelPositionOrientationAndScale(a, b)
};
geofs.getGroundAltitude = function (a, b, c) {
    var d = objects.getAltitudeAtLocation(a, b);
    if (d) return d;
    c = geofs.api.getGroundAltitude([a, b, 0], c);
    return {
        location: [a, b, c]
    }
};
geofs.getCollisionResult = function (a, b, c, d) {
    b && c && (geofs.isApp || geofs.api.renderingSettings.degradedCollisions || geofs.cautiousWithTerrain) ? (b = geofs.getAltitudeAtPointFromCollisionResult(c, [b[0], b[1], 0]), a = {
        location: [a[0], a[1], b],
        normal: V3.dup(c.normal),
        object: c.object
    }) : a = geofs.getGroundAltitude(a[0], a[1], d);
    return a
};
geofs.getAltitudeAtPointFromCollisionResult = function (a, b) {
    return a.location[2] + -a.normal[0] / a.normal[2] * b[0] + -a.normal[1] / a.normal[2] * b[1]
};
geofs.getNormalFromCollision = function (a, b) {
    return a.normal ? a.normal : geofs.api.getGroundNormal(a.location, b)
};
var PID = function (a, b, c) {
    this._kp = a;
    this._ki = b;
    this._kd = c;
    this.reset()
};
PID.prototype.reset = function () {
    this._maxOutput = this._minOutput = this._setPoint = this._integral = this._previousError = this._previousInput = 0
};
PID.prototype.initialize = function (a, b) {
    this._integral = a || 0;
    this._previousInput = b || 0
};
PID.prototype.set = function (a, b, c) {
    this._minOutput = b;
    this._maxOutput = c;
    this._setPoint = a
};
PID.prototype.compute = function (a, b) {
    var c = this._setPoint - a;
    this._integral += c * b * this._ki;
    this._integral = clamp(this._integral, this._minOutput, this._maxOutput);
    b = -(a - this._previousInput);
    this._previousInput = a;
    return clamp(this._kp * c + this._integral + this._kd * b, this._minOutput, this._maxOutput)
};
geofs.useSimpleShadow = function (a) {
    0 == a && !1 !== geofs.simpleShadowOn ? (geofs.aircraft.instance && geofs.aircraft.instance.removeShadow(), geofs.api.useNativeShadows(!0), geofs.simpleShadowOn = !1) : 1 == a && !geofs.simpleShadowOn && geofs.aircraft.instance && geofs.aircraft.instance.addShadow() && (geofs.api.useNativeShadows(!1), geofs.simpleShadowOn = !0)
};
geofs.disableShadows = function () {
    geofs.shadowsDisabled || (geofs.useSimpleShadow(!0), geofs.shadowsDisabled = !0)
};
geofs.enableShadows = function () {
    !1 !== geofs.shadowsDisabled && (geofs.useSimpleShadow(geofs.preferences.graphics.forceSimpleShadow || geofs.preferences.graphics.simpleShadow), geofs.shadowsDisabled = !1)
};
geofs.shadow = function (a, b) {
    this.shadow = geofs.api.createShadow(a + geofs.killCache, b);
    this.context = {}
};
geofs.shadow.prototype = {
    setLocationRotation: function (a, b) {
        b = geofs.getCollisionResult(a, [0, 0, 0], geofs.aircraft.instance.collResult, this.context);
        var c = geofs.getNormalFromCollision(b, this),
            d = geofs.aircraft.instance.object3d.getWorldFrame()[1];
        d = V3.normalize(V3.cross(d, c));
        var e = V3.cross(c, d);
        d = M33.getOrientation([d, e, c]);
        geofs.api.setShadowLocationRotation(this.shadow, [a[0], a[1], b.location[2]], d, c)
    },
    destroy: function () {
        geofs.api.destroyModel(this.shadow);
        this.context = this.shadowBox = null
    }
};
geofs.CesiumCoord2tilePatch = function (a, b, c, d, e) {
    a = e.positionToTileXY(new Cesium.Cartographic.fromDegrees(b, a, 0), c);
    d = Math.floor(d / 2);
    b = [];
    for (c = -d; c <= d; c++)
        for (e = -d; e <= d; e++) b.push({
            x: a.x + e,
            y: a.y + c
        });
    return b
};
geofs.WGS84TileSize = 256;
geofs.WGS84Coord2tile = function (a, b, c) {
    c = Math.pow(2, c);
    b = fixAngle360(b + 180) * c;
    return {
        x: Math.floor(b / geofs.WGS84TileSize),
        y: Math.floor((90 - a) * c / geofs.WGS84TileSize)
    }
};
geofs.WGS84Coord2tileQuad = function (a, b, c) {
    a = geofs.WGS84Coord2tile(a, b, c);
    return [{
        x: a.x - 1,
        y: a.y - 1
    }, {
        x: a.x,
        y: a.y - 1
    }, {
        x: a.x - 1,
        y: a.y
    }, {
        x: a.x,
        y: a.y
    }]
};
geofs.WGS84Tile2coord = function (a, b, c) {
    c = Math.pow(2, c);
    return {
        lon: a * geofs.WGS84TileSize / c - 180,
        lat: 90 - b * geofs.WGS84TileSize / c
    }
};
geofs.coord2tile = function (a, b, c) {
    c = Math.pow(2, c);
    return {
        x: Math.floor((b + 180) / 360 * c),
        y: Math.floor((1 - Math.log(Math.tan(a * DEGREES_TO_RAD) + 1 / Math.cos(a * DEGREES_TO_RAD)) / Math.PI) / 2 * c)
    }
};
geofs.coord2CenterTile = function (a, b, c) {
    c = Math.pow(2, c);
    return [{
        x: Math.round((b + 180) / 360 * c),
        y: Math.round((1 - Math.log(Math.tan(a * DEGREES_TO_RAD) + 1 / Math.cos(a * DEGREES_TO_RAD)) / Math.PI) / 2 * c)
    }]
};
geofs.coord2tileQuad = function (a, b, c) {
    a = geofs.coord2CenterTile(a, b, c)[0];
    return [{
        x: a.x - 1,
        y: a.y - 1
    }, {
        x: a.x,
        y: a.y - 1
    }, {
        x: a.x - 1,
        y: a.y
    }, {
        x: a.x,
        y: a.y
    }]
};
geofs.tile2coord = function (a, b, c) {
    c = Math.pow(2, c);
    b = Math.PI - 2 * Math.PI * b / c;
    return {
        lat: RAD_TO_DEGREES * Math.atan(.5 * (Math.exp(b) - Math.exp(-b))),
        lon: a / c * 360 - 180
    }
};
geofs.getLatLonMatrixcoord = function (a, b, c) {
    return parseInt(a / c) + "/" + parseInt(b / c)
};
geofs.perlin = {
    size: 100,
    gradient: [],
    normalizationRatio: 1 / Math.sqrt(.5),
    lerp: function (a, b, c) {
        return (1 - c) * a + c * b
    },
    dotGridGradient: function (a, b, c, d) {
        return (c - a) * geofs.perlin.gradient[b][a][0] + (d - b) * geofs.perlin.gradient[b][a][1]
    },
    get: function (a, b, c) {
        a = Math.abs(a * c) % geofs.perlin.size;
        b = Math.abs(b * c) % geofs.perlin.size;
        var d = parseInt(a),
            e = d + 1,
            f = parseInt(b),
            g = f + 1,
            k = a - d;
        c = b - f;
        var m = geofs.perlin.dotGridGradient(d, f, a, b);
        var n = geofs.perlin.dotGridGradient(e, f, a, b);
        f = geofs.perlin.lerp(m, n, k);
        m = geofs.perlin.dotGridGradient(d,
            g, a, b);
        n = geofs.perlin.dotGridGradient(e, g, a, b);
        a = geofs.perlin.lerp(m, n, k);
        a = geofs.perlin.lerp(f, a, c);
        return geofs.perlin.normalizationRatio * a
    }
};
for (var w = 0; w <= geofs.perlin.size; w++) {
    geofs.perlin.gradient[w] = [];
    for (var h = 0; h <= geofs.perlin.size; h++) {
        var theta = Math.random() * TWO_PI;
        geofs.perlin.gradient[w][h] = [Math.cos(theta), Math.sin(theta)]
    }
}
"use strict";
window.geofs = window.geofs || {};
var PAGE_PATH = document.location.href.replace(/\/[^\/]+$/, "/");
geofs.includes = {};
geofs.initialRunways = [
    [33.93726741762918, -118.38364975124578, 0, -96.50347129433592],
    [42.36021520436057, -70.98767662157663, 0, -103.54],
    [25.800717256450998, -80.30116643603567, 0, 87.65],
    [43.66555302435758, 7.228367855065596, 0, -135.67487141768297]
];
geofs.lastFlightDefault = {};
geofs.init = function () {
    geofs.PRODUCTION = geofs.PRODUCTION || !1;
    geofs.PRODUCTION || (geofs.killCache = "?kc=" + Date.now(), geofs.debug.init());
    geofs.api.checkIfMobile();
    geofs.api.analytics.init();
    geofs.doPause(1);
    geofs.viewport = $(".geofs-canvas-mouse-overlay")[0];
    geofs.canvas = $(".geofs-ui-3dview");
    geofs.resizeHandlers = {};
    geofs.resizeHandlersIndex = 0;
    geofs.addResizeHandler(geofs.getViewportDimentions, geofs);
    $(window).resize(geofs.handleResize);
    geofs.getViewportDimentions();
    geofs.lastTime = geofs.utils.now();
    $(window).on("unload",
        geofs.unload);
    geofs.initPreferences();
    geofs.readPreferences(function () {
        ui.init();
        controls.init();
        geofs.preferences.aircraft || geofs.isApp || geofs.autoStart ? geofs.manualStart || geofs.start() : ($(".geofs-startModal").show(), $(".geofs-startModal .geofs-fly-button").one("click", function () {
            $(".geofs-startModal").hide();
            geofs.start()
        }))
    })
};
geofs.start = function (a, b) {
    try {
        geofs.world = geofs.api.initWorld("geofs-ui-3dview")
    } catch (f) {
        geofs.debug.error(f)
    }
    window.fireBasicEvent("geofsStarted");
    geofs.api.renderingQuality(geofs.preferences.graphics.quality);
    geofs.api.enhanceColors(geofs.preferences.graphics.enhanceColors);
    geofs.api.setWaterEffect(geofs.preferences.graphics.waterEffect);
    geofs.debug.afterWorldInit();
    var c = JSON.parse(geofs.localStorage.getItem("flight")) || {};
    geofs.lastFlight = $.extend(!0, {}, geofs.lastFlightDefault, c);
    c = geofs.initialRunways[Math.floor(Math.random() *
        geofs.initialRunways.length)];
    var d = getURLParameters(),
        e = d.alt || d.al;
    e = [parseFloat(d.lat) || parseFloat(d.la) || void 0, parseFloat(d.lon) || parseFloat(d.lo) || void 0, void 0 != e ? parseFloat(e) : void 0, parseFloat(d.heading) || parseFloat(d.h) || void 0, !0];
    geofs.initialCoordinates = $.extend({}, b, c, geofs.lastFlight.coordinates, e);
    geofs.initialCoordinates && (-90 > geofs.initialCoordinates[0] || 90 < geofs.initialCoordinates[0] || !geofs.initialCoordinates[0] || -180 > geofs.initialCoordinates[1] || 180 < geofs.initialCoordinates[1] ||
        !geofs.initialCoordinates[1] || 1E5 < geofs.initialCoordinates[2]) && (geofs.initialCoordinates = [0, 0, 0]);
    geofs.aircraft.instance = new geofs.aircraft.Aircraft(geofs.initialCoordinates);
    a = a || d.aircraft || d.a || geofs.lastFlight.aircraftId || 1;
    geofs.doPause(1);
    geofs.probeTerrain();
    geofs.aircraft.instance.loadWithLivery(a, geofs.initialCoordinates, geofs.lastFlight.liveryId);
    geofs.camera.init();
    objects.init();
    weather.init(geofs.initialCoordinates);
    multiplayer.init();
    geofs.fx.init();
    geofs.initLoggedInUser();
    geofs.api.addFrameCallback(geofs.frameCallback)
};
geofs.unload = function () {
    geofs.api.destroyWorld();
    geofs.saveFlight();
    if (geofs.PRODUCTION) try {
        multiplayer.avgPing && geofs.api.analytics.event("system", "networkLatency", 50 * Math.ceil(multiplayer.avgPing / 50) + "", Math.floor(multiplayer.avgPing)), geofs.api.analytics.event("system", "framerate", 5 * Math.ceil(geofs.debug.fps / 5) + "", 1 * geofs.debug.fps)
    } catch (a) {
        geofs.debug.error(a, "geofs.unload")
    }
};
geofs.initLoggedInUser = function () {
    geofs.userRecord.muteList = geofs.utils.pivotArray(geofs.userRecord.mutelist);
    var a = 0;
    setInterval(function () {
        if (!geofs.pause) {
            var b = {
                action: "keeptime"
            };
            a == controls.rawPitch || controls.autopilot.on || (b.activeFlying = !0);
            $(".geofs-apiResponse").htmlView("load", geofs.url + "/backend/accounts/api.php", b)
        }
        a = controls.rawPitch
    }, 6E4)
};
geofs.terrainProbbingDone = function () {
    geofs.cautiousWithTerrain && (geofs.cautiousWithTerrain = !1, $(geofs.viewport).trigger("terrainStable"))
};
geofs.terrainProbingDuration = 6E3;
geofs.probeTerrain = function () {
    geofs.cautiousWithTerrain || $(geofs.viewport).trigger("terrainUnstable");
    geofs.cautiousWithTerrain = !0;
    clearTimeout(geofs.probbingTimeout);
    geofs.probbingTimeout = setTimeout(geofs.terrainProbbingDone, geofs.terrainProbingDuration)
};
$(document).on("terrainProviderUpdate", function () {
    geofs.probeTerrain()
});
geofs.togglePause = function () {
    geofs.pause ? geofs.undoPause(2) : geofs.doPause(2)
};
geofs.isPaused = function () {
    if (geofs.absolutePause || geofs.pause) return !0
};
geofs.doPause = function (a, b) {
    a = a || 0;
    geofs.pauses = geofs.pauses || {};
    2 == a && (geofs.userPause = !0);
    a < geofs.pauseLevel || (b || multiplayer.stopUpdates(), audio.stop(), ui.toggleButton(".geofs-button-pause", !0), geofs.pause = !0, geofs.pauseLevel = a)
};
geofs.undoPause = function (a) {
    a = a || 0;
    2 == a && (geofs.userPause = !1);
    if (!(a < geofs.pauseLevel))
        if (geofs.userPause) geofs.pauseLevel = 2;
        else {
            geofs.lastTime = null;
            if (geofs.cautiousWithTerrain) $(geofs.viewport).one("terrainStable", multiplayer.startUpdates);
            else multiplayer.startUpdates();
            geofs.pause = !1;
            ui.toggleButton(".geofs-button-pause", !1);
            geofs.pauseLevel = 0;
            geofs.api.triggerExplicitRendering()
        }
};
geofs.frameCallback = function (a) {
    var b = a - geofs.lastTime;
    geofs.lastTime = a;
    0 >= b && (b = 1);
    1E3 < b && (b = 100);
    a = b / 1E3;
    geofs.pause || (flight.terrainElevationManagement(), controls.update(a), flight.tick(a, b), multiplayer.update(b), geofs.debug.update(b), instruments.update(), audio.update(), geofs.fx.update(b), ui.updateMap());
    3 > geofs.pauseLevel && (geofs.camera.update(a), weather.update(a), geofs.api.triggerExplicitRendering())
};
geofs.flyTo = function (a, b) {
    if (a) {
        geofs.doPause(1);
        var c = geofs.aircraft.instance;
        a[0] = a[0] || geofs.initialRunways[0][0];
        a[1] = a[1] || geofs.initialRunways[0][1];
        a[2] = a[2] || 0;
        a[3] = a[3] || 0;
        c.absoluteStartAltitude = a[4] ? !0 : !1;
        c.startAltitude = a[2];
        geofs.lastFlightCoordinates = a;
        var d = a[0],
            e = a[1],
            f = a[2],
            g = [0, 0, 0];
        g[0] = a[3];
        var k = 0 == f;
        c.llaLocation = [d, e, f];
        b ? geofs.camera.set(geofs.camera.currentMode) : (geofs.probeTerrain(), geofs.camera.reset(), controls.reset(), weather.reset(), weather.refresh());
        geofs.api.waterDetection.reset();
        c.reset(k);
        flight.reset();
        objects.updateVisibility();
        objects.updateCollidables();
        geofs.runways.refresh();
        geofs.runwaysLights.updateAll();
        ui.hideCrashNotification();
        geofs.api.getGuarantiedGroundAltitude([d, e, 0]).then(function (m) {
            m = m[0].height || 0;
            geofs.groundElevation = m;
            k ? (c.startAltitude = geofs.groundElevation + c.definition.startAltitude, c.absoluteStartAltitude = !1) : c.absoluteStartAltitude || (c.startAltitude += geofs.groundElevation);
            c.llaLocation[2] = c.startAltitude;
            flight.elevationAtPreviousLocation = m;
            k ? (g[1] = c.definition.startTilt || 0, c.startOnGround = !0, c.groundContact = !0, c.place(c.llaLocation, g), c.object3d.compute(c.llaLocation), c.render()) : (c.startOnGround = !1, c.place(c.llaLocation, g), c.object3d.compute(c.llaLocation), m = c.definition.minimumSpeed / 1.94 * c.definition.mass, c.rigidBody.applyCentralImpulse(V3.scale(c.object3d.getWorldFrame()[1], m)));
            geofs.undoPause(1);
            geofs.camera.setToNeutral();
            geofs.camera.update(2);
            flight.recorder.clear();
            $(document).trigger("flyto")
        })
    }
};
geofs.flyToCamera = function () {
    geofs.flyTo(geofs.camera.getFlytToCoordinates())
};
geofs.resetFlight = function () {
    geofs.flyTo(geofs.lastFlightCoordinates || geofs.initialCoordinates, !0)
};
window.addEventListener("deferredload", function () {
    $(document).on("loginChange", function () {
        geofs.api.setHD(geofs.preferences.graphics.HD)
    });
    $(document).on("preferenceRead", function () {
        geofs.api.setHD(geofs.preferences.graphics.HD)
    });
    geofs.init()
});
"use strict";
geofs.preferences = {};
geofs.userRecord = geofs.userRecord || {};
geofs.preferencesDefault = {
    aircraft: "",
    coordinates: "",
    controlMode: "mouse",
    keyboard: {
        sensitivity: 1,
        exponential: 0,
        mixYawRoll: !0,
        mixYawRollQuantity: 1,
        keys: {
            "Toggle Autopilot": {
                keycode: 65,
                label: "<A>"
            },
            "Bank left": {
                keycode: 37,
                label: "<Left Arrow>"
            },
            "Bank right": {
                keycode: 39,
                label: "<Right Arrow>"
            },
            "Pitch down": {
                keycode: 38,
                label: "<Up Arrow>"
            },
            "Pitch up": {
                keycode: 40,
                label: "<Down Arrow>"
            },
            "Steer left": {
                keycode: 188,
                label: "<"
            },
            "Steer right": {
                keycode: 190,
                label: ">"
            },
            Brakes: {
                keycode: 32,
                label: "<Space bar>"
            },
            "Parking brake": {
                keycode: 186,
                label: ";"
            },
            "Increase throttle": {
                keycode: 107,
                label: "+"
            },
            "Decrease throttle": {
                keycode: 109,
                label: "-"
            },
            PgUp: {
                keycode: 33,
                label: "<Page up>"
            },
            PgDwn: {
                keycode: 34,
                label: "<Page down>"
            },
            "Elevator trim up": {
                keycode: 36,
                label: "<Home>"
            },
            "Elevator trim down": {
                keycode: 35,
                label: "<End>"
            },
            "Elevator trim neutral": {
                keycode: 46,
                label: "<Delete>"
            },
            "Engine switch (on/off)": {
                keycode: 69,
                label: "E"
            },
            "Gear toggle (up/down)": {
                keycode: 71,
                label: "G"
            },
            "Lower flaps": {
                keycode: 219,
                label: "["
            },
            "Raise flaps": {
                keycode: 221,
                label: "]"
            },
            "Airbrake toggle (on/off)": {
                keycode: 66,
                label: "B"
            },
            "Optional Animated Part toggle (on/off)": {
                keycode: 88,
                label: "X"
            }
        }
    },
    mouse: {
        sensitivity: 1,
        exponential: 1,
        mixYawRoll: !0,
        mixYawRollQuantity: 1
    },
    joystick: {
        sensitivity: 1,
        exponential: 1,
        mixYawRoll: !1,
        mixYawRollQuantity: 1,
        axis: {
            pitch: 1,
            roll: 0,
            yaw: 5,
            throttle: 6
        },
        multiplier: {
            pitch: !1,
            roll: !1,
            yaw: !1,
            throttle: !1
        },
        buttons: {
            0: "setBrakes",
            1: "setElevatorTrimDown",
            2: "setElevatorTrimUp",
            3: "setFlapsUp",
            4: "setFlapsDown",
            5: "setGear",
            6: "setAirbrakes",
            7: "setOptionalAnimatedPart"
        }
    },
    orientation: {
        sensitivity: 1,
        exponential: 1,
        mixYawRoll: !0,
        mixYawRollQuantity: 1,
        axis: {
            pitch: 0,
            roll: 1,
            yaw: 2
        },
        multiplier: {
            pitch: !1,
            roll: !1,
            yaw: !1
        }
    },
    touch: {
        sensitivity: .2,
        exponential: 1.5,
        mixYawRoll: !0,
        mixYawRollQuantity: 1,
        axis: {
            pitch: 0,
            roll: 1,
            yaw: 2
        },
        multiplier: {
            pitch: !1,
            roll: !1,
            yaw: !1
        }
    },
    camera: {
        headMotion: !1
    },
    weather: {
        sun: !1,
        localTime: 12,
        season: 1,
        manual: !0,
        quality: 0,
        advanced: {
            clouds: 0,
            fog: 0,
            windSpeed: 0,
            windDirection: 0,
            turbulences: 0
        }
    },
    graphics: {
        quality: 3,
        enhanceColors: .7,
        cloudShadows: !1,
        waterEffect: !1,
        contrails: !1,
        HD: !0,
        advanced: {
            resolutionScale: 1,
            viewingDistance: .3,
            tileCacheSize: 250,
            fxaa: !0,
            globeLighting: !0,
            shadowQuality: 1,
            dropShadow: !0,
            cloudDensity: .6,
            waterResolution: 32
        }
    },
    "interface": {
        transparent: !1
    },
    crashDetection: !1,
    showPapi: !0,
    multiplayer: !0,
    showCommunityMultiplayer: !1,
    adsb: !0,
    chat: !1,
    sound: !0
};
geofs.preferencesKeycodeLookup = {
    8: "<Back space>",
    9: "<Tab>",
    13: "<Enter>",
    16: "<Shift>",
    17: "<Control>",
    18: "<Alt>",
    19: "<Break>",
    20: "<Caps Lock>",
    32: "<Space bar>",
    33: "<Page up>",
    34: "<Page down>",
    35: "<End>",
    36: "<Home>",
    37: "<Left Arrow>",
    38: "<Up Arrow>",
    39: "<Right Arrow>",
    40: "<Down Arrow>",
    44: "<Print scr>",
    45: "<Insert>",
    46: "<Delete>",
    110: "<Delete>",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "<Num lock>",
    145: "<Scroll Lock>"
};
geofs.initPreferences = function () {
    geofs.$preferencePanel = $(".geofs-preferences");
    var a = function (b) {
        b.stopPropagation()
    };
    geofs.$preferencePanel.keydown(a);
    geofs.$preferencePanel.keyup(a);
    geofs.localStorage = window.localStorage || {};
    $(document).on("expanded", ".geofs-preference-controls", function () {
        geofs.preferencesStartFeedback()
    }).on("collapsed", ".geofs-preference-controls", function () {
        geofs.preferencesStopFeedback()
    })
};
geofs.isPreferencePanelOpen = function () {
    return geofs.$preferencePanel.is(":visible")
};
geofs.saveFlight = function () {
    if (geofs.aircraft.instance) {
        var a = geofs.aircraft.instance.getCurrentCoordinates();
        geofs.aircraft.instance.groundContact ? a[2] = 0 : a[4] = !0;
        geofs.localStorage.setItem("flight", JSON.stringify({
            coordinates: a,
            aircraftId: geofs.aircraft.instance.aircraftRecord.id,
            liveryId: geofs.aircraft.instance.liveryId
        }))
    }
};
geofs.savePreferences = function () {
    try {
        var a = JSON.stringify(geofs.preferences);
        geofs.localStorage.setItem("settings", a)
    } catch (b) {
        geofs.debug.error(b, "Could not save preferences")
    }
    $(document).trigger("preferenceSaved")
};
geofs.resetPreferences = function () {
    geofs.preferences = clone(geofs.preferencesDefault);
    geofs.preferences.version = geofs.version;
    geofs.savePreferences();
    geofs.initializePreferencesPanel()
};
geofs.readPreferences = function (a) {
    var b = {};
    try {
        (b = JSON.parse(geofs.localStorage.getItem("settings"))) && !b.version && (geofs.debug.error(null, "geofs.readPreferences - !savedPreferences.version"), geofs.api.notify("Unable to read saved preferences. Preferences are reset to default."), geofs.resetPreferences())
    } catch (d) {
        geofs.debug.error(d, "geofs.readPreferences - Unable to read saved preferences. Preferences are reset to default."), geofs.api.notify("Error while reading saved preferences. Preferences are reset to default."),
            geofs.resetPreferences()
    }
    if (geofs.localStorage.getItem("preferences")) {
        try {
            b = eval(geofs.localStorage.getItem("preferences")), b = b[0]
        } catch (d) { }
        geofs.localStorage.removeItem("preferences")
    }
    geofs.preferences = $.extend(!0, {}, geofs.preferencesDefault, b);
    geofs.preferences.version = geofs.version;
    geofs.userRecord.id || (geofs.preferences.chat = !1);
    try {
        var c = JSON.parse(geofs.localStorage.getItem("flight")) || {};
        geofs.preferences.coordinates = c.coordinates;
        geofs.preferences.aircraft = c.aircraftId
    } catch (d) {
        geofs.debug.error(d,
            "geofs.readPreferences: could not read/parse saved flight")
    }
    if (a) try {
        a()
    } catch (d) {
        geofs.debug.error(d, "geofs.readPreferences>callback"), geofs.api.notify("Error during GeoFS initialization. Try to reset preferences to default. Please contact support if this error keeps occurring.")
    }
    $(document).trigger("preferenceRead")
};
geofs.populateButtonAssignments = function () {
    var a = $(".geofs-joystick-button-container", geofs.$preferencePanel);
    if (a) {
        var b = "";
        for (i in controls.setters) b += '<option value="' + i + '">' + controls.setters[i].label + "</option>";
        b += "</select>";
        var c = "",
            d;
        for (d in controls.joystick.buttons) c += '<div class="geofs-feedback-wrapper"><label>Button ' + controls.joystick.buttons[d].globalId + '</label><div class="geofs-feedback" button="' + d + '"></div>', c += '<select data-gespref="geofs.preferences.joystick.buttons.' + d + '" data-update="{controls.joystick.configure()}">' +
            b + "</div>";
        a.html(c)
    }
};
geofs.populateAxesAssignments = function () {
    var a = $(".geofs-joystick-axes-container", geofs.$preferencePanel);
    if (a) {
        var b = "";
        for (i in controls.axisSetters) b += '<option value="' + i + '">' + controls.axisSetters[i].label + "</option>";
        b += "</select>";
        var c = "",
            d;
        for (d in controls.joystick.axes) c += '<div class="geofs-feedback-wrapper"><label>Axis ' + controls.joystick.axes[d].globalId + "</label>", c += '<select data-gespref="geofs.preferences.joystick.axis.' + d + '">' + b, c += '<div class="progress" axis="' + d + '"><div class="bar"></div></div>',
            c += '<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" title="Inverse axis">', c += '<input type="checkbox" class="mdl-switch__input" data-gespref="geofs.preferences.joystick.multiplier.' + d + '" data-update="{controls.setMode()}">', c += '<span class="mdl-switch__label">Inverse</span>', c += "</label>";
        a.html(c)
    }
};
geofs.populateKeyAssignments = function () {
    var a = $(".geofs-keyboard-keys-container", geofs.$preferencePanel),
        b = "",
        c;
    for (c in geofs.preferences.keyboard.keys) {
        var d = "keyInput" + geofs.preferences.keyboard.keys[c].keycode;
        b += '<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"><input id="' + d + '" class="geofs-preferences-key-detect mdl-textfield__input" type="text" data-type="keydetect" data-gespref="geofs.preferences.keyboard.keys.' + c + '" keycode="' + geofs.preferences.keyboard.keys[c].keycode +
            '" value="' + geofs.preferences.keyboard.keys[c].label + '"/><label class="mdl-textfield__label" for="' + d + '">' + c + "</label></div>"
    }
    a.html(b);
    componentHandler.upgradeDom();
    a.on("click focus", ".geofs-preferences-key-detect", function (e) {
        $(".geofs-preference-key-detecting", a).each(function (f, g) {
            g.value = g._originalValue;
            $(g).removeClass("geofs-preference-key-detecting")
        });
        e.currentTarget._originalValue = e.currentTarget.value;
        e.currentTarget.value = "";
        $(e.currentTarget).addClass("geofs-preference-key-detecting")
    }).on("keyup",
        ".geofs-preferences-key-detect",
        function (e) {
            var f = e.currentTarget;
            if ($(f).hasClass("geofs-preference-key-detecting")) {
                if (27 != e.which) {
                    var g = geofs.preferencesKeycodeLookup[e.which] ? geofs.preferencesKeycodeLookup[e.which] : f.value.toUpperCase();
                    f.value = g;
                    f.setAttribute("keycode", e.which);
                    geofs.setPreferenceFromInput(f)
                } else f.value = f._originalValue;
                $(f).removeClass("geofs-preference-key-detecting");
                $(f).blur();
                e.stopPropagation();
                e.preventDefault()
            }
        }).on("keydown", ".geofs-preferences-key-detect", function (e) {
            $(e.currentTarget).hasClass("geofs-preference-key-detecting") &&
                9 == e.which && (e.stopPropagation(), e.preventDefault())
        }).on("blur", ".geofs-preferences-key-detect", function (e) {
            $(e.currentTarget).hasClass("geofs-preference-key-detecting") && ("" == e.currentTarget.value && (e.currentTarget.value = e.currentTarget._originalValue), $(e.currentTarget).removeClass("geofs-preference-key-detecting"), e.stopPropagation(), e.preventDefault())
        })
};
geofs.preferencesDebugInfo = function () {
    geofs.api.debug(!0);
    for (var a = "Network Latency (avg): " + multiplayer.avgPing + " ms<br/>Frame rate (avg): " + geofs.debug.fps + " fps<br/>--------------<br/><b>Last 10 log messages:</b><br/>", b = 0; b < geofs.debug.logStack.length; b++) a += geofs.debug.logStack[b] + "<br/>";
    try {
        var c = $(".geofs-ui-3dview canvas")[0].getContext("webgl");
        a += "--------------<br/><b>WebGL info:</b><br/>";
        a += "gl.VERSION: " + c.getParameter(c.VERSION) + "<br/>";
        a += "gl.SHADING_LANGUAGE_VERSION: " + c.getParameter(c.SHADING_LANGUAGE_VERSION) +
            "<br/>";
        a += "gl.VENDOR: " + c.getParameter(c.VENDOR) + "<br/>";
        a += "gl.RENDERER: " + c.getParameter(c.RENDERER) + "<br/>";
        var d = c.getExtension("WEBGL_debug_renderer_info");
        a += "UNMASKED_RENDERER_WEBGL: " + c.getParameter(d.UNMASKED_RENDERER_WEBGL) + "<br/>";
        a += "UNMASKED_VENDOR_WEBGL: " + c.getParameter(d.UNMASKED_VENDOR_WEBGL) + "<br/>"
    } catch (e) { }
    $(".geofs-debug-info", geofs.$preferencePanel).html(a)
};
geofs.preferencesTestJoystick = function () {
    var a = controls.joystick.poll();
    a ? ($(".geofs-preferences-joystick-status .alert-success").show().html(controls.joystick.info), $(".geofs-preferences-joystick-status .alert-warning").hide(), $(".geofs-preferences-joystick-status .alert-error").hide()) : (controls.joystick.api ? ($(".geofs-preferences-joystick-status .alert-error").hide(), $(".geofs-preferences-joystick-status .alert-warning").show()) : $(".geofs-preferences-joystick-status .alert-error").show(), $(".geofs-preferences-joystick-status .alert-success").hide());
    return a
};
geofs.preferencesTestOrientation = function () {
    if (controls.orientation.isAvailable()) return $(".geofs-preferences-orientation").show(), !0;
    $(".geofs-preferences-orientation").hide();
    return !1
};
geofs.preferencesStartFeedback = function () {
    geofs.preferencesFeedbackInterval || (geofs.preferencesFeedbackInterval = setInterval(function () {
        geofs.preferencesTestJoystick() && ($(".geofs-preferences-joystick .progress[axis]", geofs.$preferencePanel).each(function (a, b) {
            a = controls.joystick.getAxisValue(b.getAttribute("axis"));
            a = 50 * (a + 1);
            $(b).find(".bar").css("width", a + "%")
        }), $(".geofs-preferences-joystick .geofs-feedback[button]", geofs.$preferencePanel).each(function (a, b) {
            controls.joystick.checkButton(parseInt(b.getAttribute("button"))) ?
                $(b).addClass("on") : $(b).removeClass("on")
        }));
        geofs.preferencesTestOrientation() && $(".geofs-preferences-orientation .progress[axis]", geofs.$preferencePanel).each(function (a, b) {
            a = controls.orientation.getNormalizedAxis(geofs.preferences.orientation.axis[b.getAttribute("axis")]);
            a *= 100;
            b.getAttribute("centered") && (a = (a + 100) / 2);
            $(b).find(".bar").css("width", a + "%")
        })
    }, 100))
};
geofs.preferencesStopFeedback = function () {
    clearInterval(geofs.preferencesFeedbackInterval);
    geofs.preferencesFeedbackInterval = null
};
geofs.initializePreferencesPanel = function () {
    geofs.preferencesDebugInfo();
    geofs.preferenceInitialized || (controls.joystick.ready && (geofs.populateButtonAssignments(), geofs.populateAxesAssignments()), $(controls.joystick).on("joystickReady", function () {
        geofs.populateButtonAssignments();
        geofs.populateAxesAssignments();
        geofs.setPreferenceValues(geofs.$preferencePanel.find(".geofs-preferences-joystick"));
        geofs.setInputHandlers(geofs.$preferencePanel.find(".geofs-preferences-joystick"))
    }), geofs.setPreferenceValues(geofs.$preferencePanel),
        geofs.setInputHandlers(geofs.$preferencePanel), geofs.populateKeyAssignments(), geofs.preferencesTestJoystick(), geofs.preferencesTestOrientation(), geofs.preferenceInitialized = !0)
};
geofs.setPreferenceValues = function (a, b) {
    $(a).find("[data-gespref]").each(function (c, d) {
        var e = $(d),
            f = d.getAttribute("data-type") || d.getAttribute("type");
        "SELECT" == d.nodeName && (f = "select");
        f = f.toLowerCase();
        var g = d.getAttribute("data-gespref").split("."),
            k = window;
        for (c = 0; c < g.length - 1; c++) k = k[g[c]];
        c = k[g[c]];
        switch (f) {
            case "slider":
                e.slider("value", c, b ? "none" : null);
                break;
            case "select":
                geofs.selectDropdown(d, c);
                break;
            case "radio-button":
                (d = d.getAttribute("data-matchvalue")) && d == c && e.addClass("is-checked");
                break;
            case "checkbox":
            case "radio":
                d = (d = d.getAttribute("data-matchvalue")) ? d == c : 1 == c;
                e.prop("checked", d);
                d ? e.parent(".mdl-radio, .mdl-switch").addClass("is-checked") : e.parent(".mdl-radio, .mdl-switch").removeClass("is-checked");
                break;
            case "keydetect":
                break;
            default:
                d.value = c
        }
    })
};
geofs.setInputHandlers = function (a) {
    $(a).find("[data-gespref]").each(function (b, c) {
        b = $(c);
        var d = c.getAttribute("data-type") || c.getAttribute("type");
        "SELECT" == c.nodeName && (d = "select");
        d = d.toLowerCase();
        switch (d) {
            case "slider":
                b.handlerSet || (b.on("change", function (e, f) {
                    geofs.setPreferenceFromInput(e.currentTarget)
                }), b.handlerSet = !0);
                break;
            case "select":
                c.onchange = function () {
                    geofs.setPreferenceFromInput(event.currentTarget)
                };
                break;
            case "radio-button":
                c.onclick = function (e) {
                    geofs.setPreferenceFromInput(e.currentTarget)
                };
                break;
            case "checkbox":
            case "radio":
                c.onchange = function (e) {
                    geofs.setPreferenceFromInput(e.currentTarget)
                };
                break;
            case "keydetect":
                break;
            default:
                c.onchange = function (e) {
                    geofs.setPreferenceFromInput(e.currentTarget)
                }
        }
    })
};
geofs.destroyPreferencePanel = function () {
    geofs.api.debug(!1);
    geofs.preferencesStopFeedback()
};
geofs.cancelPreferencesPanel = function () {
    geofs.destroyPreferencePanel();
    ui.closePreferencePanel()
};
geofs.setPreferenceFromInput = function (a) {
    try {
        var b = a.getAttribute("data-gespref");
        if (b) {
            var c = a.getAttribute("data-type") || a.getAttribute("type");
            "SELECT" == a.nodeName && (c = "select");
            c = c.toLowerCase();
            var d = b.split(".");
            b = window;
            for (var e = 0; e < d.length - 1; e++) b = b[d[e]];
            switch (c) {
                case "radio-button":
                    $(a).is(".is-checked") && (b[d[e]] = a.getAttribute("data-matchvalue"));
                    break;
                case "checkbox":
                    var f = a.getAttribute("data-matchvalue");
                    var g = a.checked;
                    f ? g && (b[d[e]] = f) : b[d[e]] = g;
                    break;
                case "radio":
                    f = a.getAttribute("data-matchvalue");
                    g = a.checked;
                    f ? g && (g = b[d[e]] = f) : b[d[e]] = g;
                    break;
                case "slider":
                    g = parseFloat($(a).slider("value"));
                    b[d[e]] = g;
                    break;
                case "keydetect":
                    g = a.value;
                    b[d[e]].keycode = parseInt(a.getAttribute("keycode"));
                    b[d[e]].label = g;
                    break;
                default:
                    g = a.value, b[d[e]] = g
            }
            var k = a.getAttribute("data-update");
            if (k) {
                var m = new Function("value", k);
                try {
                    m.call(a, g)
                } catch (n) {
                    geofs.debug.error(n, "setPreferenceFromInput updateFunction.call")
                }
            }
        }
    } catch (n) {
        geofs.debug.error(n, "geofs.setPreferenceFromInput")
    }
};
geofs.savePreferencesPanel = function () {
    geofs.destroyPreferencePanel();
    geofs.savePreferences()
};
"use strict";
var ui = ui || {};
ui.playerMarkers = {};
ui.playerSymbols = {};
ui.mouseUpHandlers = [];
ui.svgPlanePath = "M250.2,59.002c11.001,0,20.176,9.165,20.176,20.777v122.24l171.12,95.954v42.779l-171.12-49.501v89.227l40.337,29.946v35.446l-60.52-20.18-60.502,20.166v-35.45l40.341-29.946v-89.227l-171.14,49.51v-42.779l171.14-95.954v-122.24c0-11.612,9.15-20.777,20.16-20.777z";
ui.svgPlaneStyles = {
    traffic: {
        path: ui.svgPlanePath,
        fillColor: "#9abcc8",
        fillOpacity: 1,
        scale: .05,
        strokeColor: "#4a68b8",
        strokeWeight: 1,
        anchor: [250, 250]
    },
    blue: {
        path: ui.svgPlanePath,
        fillColor: "#19abff",
        fillOpacity: 1,
        scale: .06,
        strokeColor: "#162b63",
        strokeWeight: 1,
        anchor: [250, 250]
    },
    yellow: {
        path: ui.svgPlanePath,
        fillColor: "#dbb33c",
        fillOpacity: 1,
        scale: .07,
        strokeColor: "#5d4c1a",
        strokeWeight: 1,
        anchor: [250, 250]
    }
};
ui.init = function () {
    ui.mouseUpHandler = function (a) {
        if (ui.dragging) {
            if (ui.resizeV || ui.resizeH) ui.dragging.resize && ui.dragging.resize(), ui.resizeV = null, ui.resizeH = null, ui.dragging.style.cursor = "default";
            ui.dragging = null
        }
        ui.runMouseUpHandlers(a)
    };
    $(document).mouseup(ui.mouseUpHandler);
    $(".geofs-ui-3dview, .geofs-canvas-mouse-overlay").on("click", function () {
        window.focus();
        document.activeElement && document.activeElement.blur()
    });
    $(document).on("contextmenu", ".geofs-canvas-mouse-overlay", function (a) {
        a.preventDefault()
    });
    ui.panel.init();
    ui.hud.init();
    ui.userDialog.init();
    ui.chat.init();
    ui.vr.init();
    $(document).on("keydown", ".geofs-stopKeyboardPropagation", function (a) {
        a.stopImmediatePropagation()
    });
    $(document).on("keyup", ".geofs-stopKeyupPropagation", function (a) {
        a.stopImmediatePropagation()
    });
    $(document).on("click mousedown", ".geofs-stopMousePropagation", function (a) {
        a.stopImmediatePropagation()
    });
    $(document).on("click", "[data-aircraft]", function (a) {
        geofs.aircraft.instance.change(a.currentTarget.getAttribute("data-aircraft"),
            a.currentTarget.getAttribute("data-livery"));
        ui.panel.hide(null, !0);
        a.stopPropagation()
    });
    $(document).on("click", "[data-camera]", function (a) {
        a = a.currentTarget.getAttribute("data-camera");
        Number.isInteger(parseInt(a)) ? geofs.camera.set(parseInt(a)) : geofs.camera.set(null, a)
    });
    $(document).on("click", ".geofs-crashed", function () {
        geofs.resetFlight()
    });
    $(document).on("click", "[data-location]", function (a) {
        Function("{" + a.currentTarget.getAttribute("data-location") + "}")();
        ui.panel.hide(null, !0);
        a.stopPropagation()
    });
    $(document).on("keydown", ".address-input", function (a) {
        a.stopImmediatePropagation()
    });
    $(document).on("submit", ".geofs-locationForm", function (a) {
        geoDecodeLocation($(".address-input").val(), function (b, c) {
            null != geofs && null != geofs.aircraft.instance && geofs.flyTo([b, c, 1E3, 0])
        });
        $(".address-input").val("");
        ui.collapseLeft();
        a.preventDefault()
    });
    ui.applyPreferences()
};
ui.showCrashNotification = function () {
    $(".geofs-crashOverlay").addClass("geofs-crashed");
    geofs.camera.animations.orbitHorizontal.active = !0
};
ui.hideCrashNotification = function () {
    $(".geofs-crashOverlay").removeClass("geofs-crashed");
    geofs.camera.animations.orbitHorizontal.active = !1
};
ui.toggleFullscreen = function () {
    ui.isFullscreen ? (document.exitFullscreen(), ui.isFullscreen = !1, $("body").removeClass("fullscreen")) : (document.body.requestFullscreen(), ui.isFullscreen = !0, $("body").addClass("fullscreen"))
};
ui.applyPreferences = function () {
    geofs.preferences.interface.transparent ? $("body").addClass("geofs-transparentUI") : $("body").removeClass("geofs-transparentUI");
    geofs.handleResize()
};
ui.toggleButton = function (a, b) {
    (b = void 0 == b ? !$(a).hasClass("mdl-button--colored") : b) ? $(a).addClass("mdl-button--colored") : $(a).removeClass("mdl-button--colored")
};
ui.expandLeft = function () {
    $("body").addClass("geofs-expand-left");
    geofs.handleResize()
};
ui.collapseLeft = function (a) {
    $("body").removeClass("geofs-expand-left");
    geofs.handleResize()
};
ui.addMouseUpHandler = function (a) {
    ui.mouseUpHandlers.push(a)
};
ui.runMouseUpHandlers = function (a) {
    for (var b = 0; b < ui.mouseUpHandlers.length; b++) try {
        ui.mouseUpHandlers[b](a)
    } catch (c) {
        geofs.debug.error(c, "ui.runMouseUpHandlers")
    }
};
ui.panel = {
    init: function () {
        $(document).on("click", "[data-toggle-panel]", function (a) {
            ui.panel.toggle($(a.currentTarget).attr("data-toggle-panel"));
            a.stopImmediatePropagation()
        });
        $(document).on("click", function () {
            ui.panel.hide($(".geofs-toggle-panel.geofs-visible").not("[data-noblur]"), !0)
        });
        $(document).on("click", ".geofs-list-collapsible-item", function (a) {
            ui.panel.toggleItem(a.currentTarget, a);
            a.preventDefault();
            a.stopImmediatePropagation()
        });
        $(document).on("click", ".geofs-collapsible", function (a) {
            a.stopImmediatePropagation()
        });
        $(document).on("click", ".geofs-advanced", function (a) {
            $(a.currentTarget).toggleClass("geofs-expanded")
        })
    },
    toggleItem: function (a, b) {
        var c = $(a),
            d = c.parents(".geofs-list").first();
        d.find(".geofs-list-item-expanded").not(b.target).removeClass("geofs-list-item-expanded");
        c.toggleClass("geofs-list-item-expanded");
        c.hasClass("geofs-list-item-expanded") ? c.trigger("expanded") : c.trigger("collapsed");
        d.scrollTop(a.offsetTop)
    },
    expendItem: function (a, b) {
        var c = $(a),
            d = c.parents(".geofs-list").first();
        d.find(".geofs-list-item-expanded").not(b.target).removeClass("geofs-list-item-expanded");
        c.addClass("geofs-list-item-expanded");
        c.trigger("expanded");
        d.scrollTop(a.offsetTop)
    },
    toggle: function (a) {
        $(a).hasClass("geofs-visible") ? ui.panel.hide(a, !0) : ui.panel.show(a)
    },
    show: function (a) {
        a = $(a);
        if (ui.panel.hide()) {
            ui.expandLeft("panel");
            a.addClass("geofs-visible");
            try {
                Function(a.attr("data-onshow"))()
            } catch (b) {
                geofs.debug.throw(b)
            }
            a.find(".geofs-list-item-expanded").trigger("expanded")
        }
    },
    hide: function (a, b) {
        var c = !0,
            d = $(a || ".geofs-toggle-panel.geofs-visible");
        $(d).each(function (e, f) {
            e = $(f);
            if (!a &&
                e.attr("data-modal")) return c = !1;
            e.removeClass("geofs-visible");
            try {
                Function(e.attr("data-onhide"))()
            } catch (g) {
                geofs.debug.throw(g)
            }
        });
        d.length && b && ui.collapseLeft(a);
        d.find(".geofs-list-collapsible-item").trigger("collapsed");
        return c
    }
};
ui.closePreferencePanel = function () {
    ui.panel.hide(".geofs-preference-list", !0)
};
geofs.map = {};
ui.createMap = function (a) {
    a = a || {};
    if (geofs.aircraft && geofs.aircraft.instance) {
        var b = geofs.aircraft.instance.llaLocation[0];
        var c = geofs.aircraft.instance.llaLocation[1]
    } else b = a.lat || 0, c = a.lon || 0;
    ui.mapInstance ? (ui.mapInstance.lastMapUpdate = 0, ui.mapInstance.startMap(), ui.mapInstance.updateMap(b, c)) : ui.mapInstance = new geofs.map(a, b, c)
};
ui.stopMap = function () {
    ui.mapInstance && ui.mapInstance.stopMap()
};
ui.updateMap = function () {
    ui.mapInstance && ui.mapInstance.updateMap(geofs.aircraft.instance.llaLocation[0], geofs.aircraft.instance.llaLocation[1])
};
geofs.map = function (a, b, c) {
    var d = this;
    b = b || 0;
    c = c || 0;
    this.dontMoveTimeoutValue = 1E4;
    this.mapUpdateInterval = 1E3;
    this.minimumPanDistance = 2E3;
    this._options = a = a || {};
    this.apiMap = new geofs.api.map(a, b, c);
    a.standalone || (this.planeMarker = new geofs.api.map.planeMarker(b, c, this.apiMap, "yellow", 100, null));
    this.setMapInfoWindow();
    a.norunways || this.addRunways();
    a.standalone ? this.mapActive = !0 : this.startMap();
    this.apiMap.init();
    this.ATCMode = !1;
    $(document).on("click", ".geofs-map-atc-button", function (e) {
        d.toggleATCMode();
        e.preventDefault();
        e.stopPropagation()
    })
};
geofs.map.prototype = {
    resize: function () {
        this.apiMap.map.invalidateSize()
    },
    addRunways: function () {
        var a = this;
        $.getJSON("/data/runways.json" + geofs.killCache, function (b) {
            b.forEach(function (c) {
                geofs.api.map.addRunwayMarker(c, a.apiMap)
            });
            a.apiMap.updateMarkerLayers()
        })
    },
    setMapInfoWindow: function () {
        var a = this;
        this.apiMap.setGenericLocationPopup();
        $(this.apiMap._holder).on("click", function (b) {
            try {
                a.apiMap.mapClickHandler && (a.apiMap.mapClickHandler(b), a.stopMovingMap())
            } catch (c) { }
        }).mousedown(function () {
            a.stopMovingMap(!0)
        }).mouseup(function () {
            a.stopMovingMap()
        })
    },
    stopMap: function () {
        this.mapActive = !1
    },
    startMap: function () {
        this.stopMap();
        this.resize();
        this.mapActive = !0
    },
    stopMovingMap: function (a) {
        var b = this;
        clearTimeout(this.dontMoveTimeout);
        a || (this.dontMoveTimeout = setTimeout(function () {
            b.dontMove = !1
        }, this.dontMoveTimeoutValue));
        this.dontMove = !0
    },
    updateMap: function (a, b) {
        var c = geofs.utils.now();
        c - this.lastMapUpdate < this.mapUpdateInterval || (this.lastMapUpdate = c, this.apiMap && this.mapActive && (this.dontMove || (c = this.apiMap.getCenterLla(), geofs.utils.llaDistanceInMeters(c,
            [a, b]) > this.minimumPanDistance && this.apiMap.updateMap(a, b)), this.planeMarker.updatePlaneMarker(a, b, geofs.aircraft.instance.htr[0])))
    },
    addPlayerMarker: function (a, b, c) {
        b = new geofs.api.map.planeMarker(0, 0, this.apiMap, b, 1, c || "-");
        return this.apiMap.map && this.mapActive && b ? ui.playerMarkers[a] = b : ui.playerMarkers[a] = null
    },
    updatePlayerMarker: function (a, b, c, d, e, f) {
        if (this.apiMap.map && this.mapActive && (ui.playerMarkers[a] || this.addPlayerMarker(a, d, c), ui.playerMarkers[a])) {
            var g = parseInt(b[2] * METERS_TO_FEET);
            d = fixAngle360(b[3]);
            c = (c || "-") + "<br/>" + ("unknown" != e ? "" + e + "<br/>" : "") + f + "kt " + parseInt(d) + "dg<br/>" + geofs.utils.displayAltitude(g);
            ui.playerMarkers[a].updatePlaneMarker(b[0], b[1], d, c)
        }
    },
    deletePlayerMarker: function (a) {
        this.apiMap.map && ui.playerMarkers[a] && ui.playerMarkers[a].destroyPlaneMarker();
        ui.playerMarkers[a] = null;
        delete ui.playerMarkers[a]
    },
    toggleATCMode: function () {
        this.ATCMode = !this.ATCMode;
        this.setTooltipVisibility(this.ATCMode);
        $(this.apiMap._holder).toggleClass("geofs-atc-map")
    },
    setTooltipVisibility: function (a) {
        this.tooltipVisibility =
            a;
        this.apiMap.setTooltipVisibility(a);
        if (this.apiMap.map && this.mapActive)
            for (var b in ui.playerMarkers) ui.playerMarkers[b].resetTooltip()
    }
};
ui.Text = function (a, b) {
    b = Object.assign({}, this.defaultOptions, b);
    b.text = a + "";
    this._overlay = new geofs.api.cssTransform(b)
};
ui.Text.prototype = {
    defaultOptions: {
        rescale: !1,
        anchor: {
            x: 0,
            y: 0
        }
    },
    show: function () {
        this._overlay.setVisibility(!0)
    },
    hide: function () {
        this._overlay.setVisibility(!1)
    },
    setText: function (a) {
        this._overlay.setText(a)
    },
    destroy: function () {
        this._overlay.destroy()
    }
};
ui.clearPlayerList = function () {
    $(".geofs-player-list").html("")
};
ui.initPlayerList = function () { };
ui.userDialog = {
    init: function () {
        $(document).on("click", "[data-player]", function (b) {
            b = b.currentTarget.getAttribute("data-player");
            b != geofs.userRecord.id && ui.userDialog.open(b)
        });
        var a = $(".geofs-user-dialog");
        a.on("click", ".geofs-join-user", function (b) {
            b = a.data("user");
            b = multiplayer.users[b.uid];
            var c = b.getCoordinates();
            c[0] -= .003 * Math.cos(c[3] * DEGREES_TO_RAD);
            c[1] -= .003 * Math.sin(c[3] * DEGREES_TO_RAD);
            b.isOnGround() && (c[2] = 0);
            c && (c[4] = !0, geofs.flyTo(c));
            ui.userDialog.close()
        }).on("click", ".geofs-ignore-user",
            function () {
                var b = a.data("user");
                multiplayer.blockUser(b.acid);
                ui.userDialog.close()
            }).on("click", ".geofs-share-user", function () {
                var b = a.data("user");
                multiplayer.flightSharing.request(multiplayer.getUser(b.uid));
                ui.userDialog.close()
            }).on("click", ".geofs-ban-user", function () {
                var b = a.data("user");
                multiplayer.banUser(b.acid);
                ui.userDialog.close()
            }).on("click", ".geofs-cancel", function () {
                ui.userDialog.close()
            })
    },
    open: function (a) {
        var b = multiplayer.getUser(a);
        b && $(".geofs-user-dialog").data("user", {
            callsign: b.callsign,
            uid: a,
            acid: b.acid
        }).css("display", "flex").find(".geofs-user-callsign").html(b.callsign)
    },
    close: function () {
        $(".geofs-user-dialog").data("user", null).css("display", "none")
    }
};
ui.chat = {};
ui.chat.maxNumberMessages = 30;
ui.chat.init = function () {
    $(".geofs-chat-input").keydown(function (a) {
        27 == a.which && ui.chat.hideInput(!0)
    }).mousedown(function (a) {
        a.preventDefault()
    });
    $(".geofs-chat-form").submit(function (a) {
        multiplayer.setChatMessage($(".geofs-chat-input").val());
        ui.chat.hideInput(!0);
        a.preventDefault()
    });
    $(".geofs-chat-button").mouseup(function (a) {
        ui.chat.showInput();
        a.stopPropagation()
    });
    $(".geofs-chat-send-button").mouseup(function (a) {
        a.stopPropagation()
    });
    ui.addMouseUpHandler(ui.chat.hideInput)
};
ui.chat.showInput = function () {
    0 == geofs.preferences.chat ? ui.notification.show("Chat is disabled. You can enable it in the option panel.") : ($(".geofs-chat-input-section").addClass("geofs-visible"), $(".geofs-chat-input").focus())
};
ui.chat.hideInput = function (a) {
    $(".geofs-chat-input-section").removeClass("geofs-visible");
    $(".geofs-chat-input").val("");
    !0 === a && $(".geofs-chat-input").blur()
};
ui.chat.publish = function (a) {
    if (geofs.preferences.chat) {
        var b = decodeURIComponent(a.msg);
        ui.chat.$container = ui.chat.$container || $(".geofs-chat-messages");
        var c = "";
        a.acid == geofs.userRecord.id && (c = "myself");
        ui.chat.$container.prepend('<div class="geofs-chat-message ' + a.cls + '" data-player="' + a.uid + '" acid="' + a.acid + '" callsign="' + a.cs + '"><b class="label ' + c + '">' + a.cs + ":</b> " + b + "</div>");
        ui.chat.$container.find(".geofs-chat-message").each(function (d, e) {
            $(e).css("opacity", (ui.chat.maxNumberMessages - d) /
                ui.chat.maxNumberMessages)
        }).eq(ui.chat.maxNumberMessages).remove()
    }
};
ui.chat.removeUserMessages = function (a) {
    ui.chat.$container && ui.chat.$container.find("[acid=" + a + "]").remove()
};
ui.chat.hide = function () {
    $(".geofs-chat-messages").hide()
};
ui.chat.show = function () {
    $(".geofs-chat-messages").show()
};
ui.vr = {};
ui.vr.init = function () {
    geofs.api.isWebXRAvailable() && $(".geofs-button-vr").css("display", "inline-block")
};
ui.vr.toggle = function () {
    geofs.api.toggleVr();
    ui.toggleButton(".geofs-button-vr", geofs.vrOn)
};
ui.hud = {};
ui.hud.init = function () {
    ui.hud.stall = new Overlay({
        name: "stall",
        url: "images/instruments/stall.png",
        visibility: !1,
        size: {
            x: 60,
            y: 20
        },
        anchor: {
            x: 30,
            y: 0
        },
        position: {
            x: 0,
            y: 100
        },
        rescale: !1,
        alignment: {
            x: "center",
            y: "top"
        }
    });
    ui.hud.stallAlarmSet = !1;
    ui.hud.stallAlarmOn = !1;
    geofs.addResizeHandler(function () {
        ui.hud.stall.scaleAndPlace()
    });
    ui.hud.stall.scaleAndPlace()
};
ui.hud.stallAlarm = function (a) {
    !1 === a ? (ui.hud.stallAlarmSet || (clearTimeout(ui.hud.stallAlarmOnTimeout), ui.hud.stall && ui.hud.stall.setVisibility(!1), ui.hud.stallAlarmOn = !1), ui.hud.stallAlarmSet = !1) : ui.hud.stallAlarmSet = !0;
    a && !geofs.aircraft.instance.groundContact && ui.hud.stall && !ui.hud.stallAlarmOn && (clearTimeout(ui.hud.stallAlarmOnTimeout), ui.hud.stallAlarmOnTimeout = setTimeout(function () {
        ui.hud.stall && ui.hud.stall.setVisibility(!0)
    }, 100), ui.hud.stallAlarmOn = !0)
};
ui.notification = {};
ui.notification.show = function (a) {
    geofs.api.notify(a)
};
geofs.handleResize = function () {
    clearTimeout(geofs.resizingTimeout);
    geofs.resizingTimeout = setTimeout(function () {
        for (var a in geofs.resizeHandlers) try {
            geofs.resizeHandlers[a]()
        } catch (b) {
            geofs.debug.error(b, "geofs.handleResize")
        }
    }, 300)
};
geofs.addResizeHandler = function (a, b) {
    if (!b || !b.resizeHandlerId) return geofs.resizeHandlers[geofs.resizeHandlersIndex] = a, a = geofs.resizeHandlersIndex++, b && (b.resizeHandlerId = a), a
};
geofs.removeResizeHandler = function (a) {
    delete geofs.resizeHandlers[a]
};
geofs.getViewportDimentions = function () {
    geofs.viewportWidth = geofs.viewport.offsetWidth;
    geofs.viewportHeight = geofs.viewport.offsetHeight;
    geofs.camera.cam && (geofs.fovScale = Math.pow(geofs.viewportWidth / VIEWPORT_REFERENCE_WIDTH, .5), geofs.fovScale /= Math.pow(geofs.api.getFOV(geofs.camera.cam), .6))
};
ui.hud.autopilotIndicator = function (a) {
    a ? $(document).trigger("autopilotOn") : $(document).trigger("autopilotOff")
};
"use strict";
geofs.fx = geofs.fx || {};
geofs.fx.texture2url = {
    smoke: "images/particles/smoke-light.png",
    whitesmoke: "images/particles/smoke-white.png",
    darkSmoke: "images/particles/smoke-dark.png",
    contrails: "images/particles/contrails.png",
    1: "images/lights/yellowflare.png",
    2: "images/lights/redflare.png",
    3: "images/lights/greenflare.png",
    white: "images/lights/whitelight.png",
    red: "images/lights/redlight.png",
    green: "images/lights/greenlight.png",
    whitepapi: "images/lights/whitepapi.png",
    redpapi: "images/lights/redpapi.png"
};
geofs.fx.particles = {};
geofs.fx.particleEmitters = {};
geofs.fx.init = function () {
    geofs.fx.lightBillboardOptions = {
        altitudeMode: geofs.api.ALTITUDE_RELATIVE,
        sizeInMeters: !1,
        scaleByDistance: new Cesium.NearFarScalar(1, 1, 4E3, .15)
    };
    geofs.fx.papiBillboardOptions = {
        altitudeMode: geofs.api.ALTITUDE_RELATIVE,
        sizeInMeters: !1,
        scaleByDistance: new Cesium.NearFarScalar(1, .15, 4E3, .05)
    }
};
geofs.fx.update = function (a) {
    for (var b in geofs.fx.particleEmitters) geofs.fx.particleEmitters[b].update(a);
    for (b in geofs.fx.particles) geofs.fx.particles[b].update(a);
    geofs.preferences.graphics.waterEffect && (geofs.fx.wake.update(), geofs.fx.water.update(geofs.camera.lla[0], geofs.camera.lla[1], geofs.camera.lla[2]))
};
geofs.fx.setParticlesColor = function (a) {
    for (var b in geofs.fx.particles) geofs.fx.particles[b].setColor(a)
};
geofs.fx.maxTimeSinceLastParticleEmission = 5E3;
geofs.fx.ParticleEmitter = function (a) {
    this._birth = geofs.utils.fastNow();
    this._id = this._birth + Math.random();
    this._lastEmission = this._birth;
    this._on = !a.off;
    this._options = a;
    this._options.location = this._options.location || [0, 0, 0];
    geofs.fx.particleEmitters[this._id] = this;
    this._options.anchor && geofs.aircraft.instance && (this._options.location = V3.dup(Object3D.utilities.getPointLla(this._options.anchor, geofs.aircraft.instance.llaLocation)))
};
geofs.fx.ParticleEmitter.prototype = {
    update: function () {
        if (this._on) {
            var a = geofs.utils.fastNow();
            if (a - this._birth > this._options.duration) this.destroy();
            else {
                var b = a - this._lastEmission,
                    c = b * this._options.rate;
                b > geofs.fx.maxTimeSinceLastParticleEmission && (c = 2);
                b = null;
                this._options.anchor && (b = V3.dup(Object3D.utilities.getPointLla(this._options.anchor, geofs.aircraft.instance.llaLocation)));
                if (this._options.followPath)
                    if (this._lastEmissionLocation) {
                        var d = V3.sub(b, this._lastEmissionLocation);
                        c = V2.length(lla2xyz(d,
                            this._lastEmissionLocation));
                        c > this._options.pathStep && (this._options.location = b, this._options.startRotation = geofs.utils.lookAt(b, this._lastEmissionLocation, [0, 0, 1]), this._options.startScale = c, new geofs.fx.Particle(this._options, this), this._lastEmissionLocation = V3.dup(b), this._lastEmission = a)
                    } else this._lastEmissionLocation = V3.dup(b);
                else {
                    d = null;
                    b && (d = V3.sub(b, this._options.location), d = V3.scale(d, 1 / c));
                    for (var e = 0; e < c - 1; e++) d && (this._options.location = V3.add(this._options.location, d)), new geofs.fx.Particle(this._options,
                        this), this._lastEmission = a
                }
                b && (this._options.location = b)
            }
        }
    },
    isOn: function () {
        return this._on
    },
    turnOn: function () {
        this._on = !0
    },
    turnOff: function () {
        this._on = !1
    },
    destroy: function () {
        delete geofs.fx.particleEmitters[this._id]
    }
};
geofs.fx.ParticuleEmitter = geofs.fx.ParticleEmitter;
geofs.fx.Particle = function (a, b) {
    a = Object.assign({}, a);
    this._birth = geofs.utils.fastNow();
    this._id = this._birth + Math.random();
    this._emitter = b;
    geofs.fx.particles[this._id] = this;
    a.url = a.url || geofs.fx.texture2url[a.texture];
    a.startOpacity = a.startOpacity || 1;
    a.endOpacity = a.endOpacity || a.startOpacity;
    a.startScale = a.startScale || 1;
    a.endScale = a.endScale || a.startScale;
    a.easing = a.easing || "linear";
    a.randomizeStartScale && (a.startScale += Math.random() * a.randomizeStartScale);
    a.randomizeEndScale && (a.endScale += Math.random() *
        a.randomizeEndScale);
    "random" == a.startRotation && (a.startRotation = Math.random() * TWO_PI);
    "random" == a.endRotation && (a.endRotation = Math.random() * TWO_PI);
    a.startRotation = a.startRotation || 0;
    a.endRotation = a.endRotation || a.startRotation;
    this.currentLocation = V3.dup(a.location);
    a.dtOpacity = a.endOpacity - a.startOpacity;
    a.dtScale = a.endScale - a.startScale;
    a.dtRotation = a.endRotation - a.startRotation;
    this._options = a;
    this.create()
};
geofs.fx.Particle.prototype = {
    create: function () {
        this._currentScale = this._options.startScale;
        this._currentOpacity = this._options.startOpacity;
        this._currentRotation = this._options.startRotation;
        this._options = Object.assign(this._options, {
            opacity: this._currentOpacity,
            scale: this._currentScale,
            rotation: this._currentRotation,
            color: geofs.fx.cloudManager.cloudColor
        }, geofs.fx.particleBillboardOptions);
        this._options.model ? (this._options.rotation = [this._currentRotation, 0, 0], this._APIElement = new geofs.api.Model(this._options.model,
            this._options)) : this._options.groundTexture ? this._APIElement = new geofs.api.groundTexture(this.currentLocation, this._options.groundTexture, this._options) : (this._options.distanceDisplayCondition = new Cesium.DistanceDisplayCondition(this._options.near || 50, this._options.far || 1E6), this._APIElement = new geofs.api.billboard(this.currentLocation, this._options.url, this._options))
    },
    setColor: function (a) {
        this._APIElement && this._APIElement.setColor(a)
    },
    setLocation: function (a) {
        this._APIElement && (this.currentLocation =
            a, this._APIElement.setLocation(this.currentLocation))
    },
    setRotation: function (a, b) {
        this._APIElement && (this._currentRotation = a, this._APIElement.setRotation(this._currentRotation, b))
    },
    setScale: function (a) {
        this._APIElement && this._APIElement.setScale(a)
    },
    setPositionOrientationAndScale: function (a, b, c) {
        this._APIElement && this._APIElement.setPositionOrientationAndScale(a, b, c)
    },
    update: function (a) {
        var b = (geofs.utils.fastNow() - this._birth) / this._options.life;
        1 < b ? this.destroy() : this._APIElement && (b = geofs.utils.easingFunctions[this._options.easing](b),
            this._options.dtOpacity && (this._currentOpacity = clamp(this._options.startOpacity + this._options.dtOpacity * b, 0, 1), this._APIElement.setOpacity(this._currentOpacity)), this._options.dtScale && (this._currentScale = this._options.startScale + this._options.dtScale * b, this._APIElement.setScale(this._currentScale)), this._options.dtRotation && (this._currentRotation = this._options.startRotation + this._options.dtRotation * b, this._APIElement.setRotation(this._currentRotation)), this._options.velocity && this._options.direction &&
            (this._options.velocityDamper && (this._options.velocity = this._options.velocity * this._options.velocityDamper * a), this.currentLocation = V3.add(this.currentLocation, V3.scale(this._options.direction, this._options.velocity)), this._APIElement.setLocation(this.currentLocation)))
    },
    destroy: function () {
        this._APIElement && (this._APIElement.destroy(), this._APIElement = null);
        this._emitter = null;
        geofs.fx.particles[this._id] = null;
        delete geofs.fx.particles[this._id]
    }
};
geofs.fx.lastRunwayTestLocation = [0, 0];
geofs.runways.nearRunways = {};
geofs.fx.litRunways = {};
geofs.fx.particleBillboardOptions = {
    sizeInMeters: !0
};
geofs.fx.thresholdLightTemplate = [
    [
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], "length"
    ],
    [
        [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1], 12
    ],
    [
        [3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3, 0, 3], 1
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0], 5
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0], 1
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0], 5
    ],
    [
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
            0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1
        ], 1
    ],
    [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 5
    ]
];
geofs.fx.templateCenter = [17, 2];
$("body").on("runwayUpdate", function () {
    geofs.runwaysLights.updateAll()
});
$("body").on("nightChange", function () {
    geofs.runwaysLights.updateAll()
});
geofs.runwaysLights = function (a) {
    this.runway = a;
    this.on = !1;
    this.lights = [];
    this.papis = [];
    this.localStepXm = a.widthMeters / 33;
    this.localStepYm = 50;
    var b = M33.identity();
    b = M33.rotationZ(b, a.headingRad);
    this.stepX = xy2ll(V2.scale(b[0], this.localStepXm), a.threshold1);
    this.stepY = xy2ll(V2.scale(b[1], this.localStepYm), a.threshold1);
    var c = xy2ll(V2.scale(b[0], 9), a.threshold1),
        d = V2.add(a.threshold1, xy2ll(V2.scale(b[0], a.widthMeters / 2 + 15), a.threshold1));
    d = V2.add(d, V2.scale(this.stepY, 5));
    this.addPapi(d, c);
    c = xy2ll(V2.scale(b[0],
        -9), a.threshold2);
    d = V2.add(a.threshold2, xy2ll(V2.scale(b[0], -a.widthMeters / 2 - 15), a.threshold2));
    d = V2.add(d, V2.scale(this.stepY, -5));
    this.addPapi(d, c)
};
geofs.runwaysLights.turnAllOff = function () {
    for (var a in geofs.fx.litRunways) geofs.fx.litRunways[a].turnOff()
};
geofs.runwaysLights.turnAllOn = function () {
    for (var a in geofs.fx.litRunways) geofs.fx.litRunways[a].turnOn()
};
geofs.runwaysLights.updateAll = function () {
    for (var a in geofs.runways.nearRunways) {
        var b = geofs.runways.nearRunways[a];
        geofs.fx.litRunways[b.id] || (geofs.fx.litRunways[b.id] = new geofs.runwaysLights(b))
    }
    for (a in geofs.fx.litRunways) geofs.runways.nearRunways[a] || (geofs.fx.litRunways[a].destroy(), geofs.fx.litRunways[a] = null, delete geofs.fx.litRunways[a]);
    geofs.isNight ? geofs.runwaysLights.turnAllOn() : geofs.runwaysLights.turnAllOff()
};
geofs.runwaysLights.prototype = {
    turnOn: function () {
        if (!this.on) {
            var a = geofs.fx.templateCenter[1] - 1,
                b = geofs.fx.thresholdLightTemplate[a],
                c = b[1];
            b = -c;
            for (var d = a, e = geofs.fx.thresholdLightTemplate.length; d < e; d++) {
                var f = geofs.fx.thresholdLightTemplate[d];
                a = f[0];
                var g = b;
                for (f = b + f[1]; g < f; g++) this.addRow(this.runway.threshold1, a, -g), b++
            }
            d = V2.add(this.runway.threshold1, V2.scale(this.stepY, c));
            c = (this.runway.lengthMeters - this.localStepYm * c) / this.localStepYm;
            a = geofs.fx.thresholdLightTemplate[0][0];
            for (b = 0; b <
                c; b++) this.addRow(d, a, b);
            a = geofs.fx.templateCenter[1] - 1;
            b = geofs.fx.thresholdLightTemplate[a];
            c = b[1];
            b = -c;
            d = a;
            for (e = geofs.fx.thresholdLightTemplate.length; d < e; d++)
                for (f = geofs.fx.thresholdLightTemplate[d], a = f[0], g = b, f = b + f[1]; g < f; g++) this.addRow(this.runway.threshold2, a, g), b++;
            this.on = !0
        }
    },
    turnOff: function () {
        if (this.on) {
            for (var a = 0; a < this.lights.length; a++) this.lights[a].destroy(), this.lights[a] = null;
            this.lights = [];
            this.on = !1
        }
    },
    addRow: function (a, b, c) {
        a = V2.add(a, V2.scale(this.stepY, c));
        c = 0;
        for (var d =
            b.length; c < d; c++) {
            var e = b[c];
            if (e) {
                var f = V2.add(a, V3.scale(this.stepX, c - geofs.fx.templateCenter[0]));
                this.addLight(f, e)
            }
        }
    },
    addPapi: function (a, b) {
        this.papis = this.papis || [];
        a[2] = .5;
        this.papis.push(new geofs.fx.papi(a, b))
    },
    addLight: function (a, b) {
        a[2] = .2;
        this.lights.push(new geofs.fx.light(a, b, geofs.fx.lightBillboardOptions))
    },
    destroy: function () {
        if (this.lights) {
            for (var a = 0; a < this.lights.length; a++) this.lights[a].destroy();
            this.lights = null
        }
        if (this.papis) {
            for (a = 0; a < this.papis.length; a++) this.papis[a].destroy();
            this.papis = null
        }
        this.runway = null
    }
};
geofs.fx.papi = function (a, b) {
    var c = this;
    this.lights = [];
    for (var d = 0; 4 > d; d++) a[2] = .5, this.lights[d] = {
        white: new geofs.fx.light(a, "whitepapi", geofs.fx.papiBillboardOptions),
        red: new geofs.fx.light(a, "redpapi", geofs.fx.papiBillboardOptions)
    }, a = V2.add(a, b);
    this.location = a;
    geofs.api.viewer.terrainProvider.readyPromise.then(function () {
        var e = Cesium.sampleTerrainMostDetailed(geofs.api.viewer.terrainProvider, [Cesium.Cartographic.fromDegrees(a[1], a[0])]);
        Cesium.when(e, function (f) {
            c.location[2] = f[0].height
        })
    });
    this.refresh()
};
geofs.fx.papi.prototype = {
    refresh: function () {
        var a = this;
        clearInterval(this.papiInterval);
        this.papiInterval = setInterval(function () {
            var b = geofs.utils.llaDistanceInMeters([geofs.aircraft.instance.llaLocation[0], geofs.aircraft.instance.llaLocation[1], a.location[2]], a.location, a.location),
                c = Math.atan2(geofs.aircraft.instance.llaLocation[2] - a.location[2], b) * RAD_TO_DEGREES;
            b = 2 > c;
            var d = 2.5 > c,
                e = 3.5 > c;
            c = 4 > c;
            a.lights[3].white.setVisibility(!b);
            a.lights[3].red.setVisibility(b);
            a.lights[2].white.setVisibility(!d);
            a.lights[2].red.setVisibility(d);
            a.lights[1].white.setVisibility(!e);
            a.lights[1].red.setVisibility(e);
            a.lights[0].white.setVisibility(!c);
            a.lights[0].red.setVisibility(c)
        }, 1E3)
    },
    destroy: function () {
        clearInterval(this.papiInterval);
        for (var a = 0; 4 > a; a++) this.lights[a].red.destroy(), this.lights[a].white.destroy();
        this.lights = this.location = null
    }
};
geofs.fx.light = function (a, b, c) {
    a = a || [0, 0, 0];
    this._billboard = new geofs.api.billboard(a, geofs.fx.texture2url[b], c)
};
geofs.fx.light.prototype = {
    setVisibility: function (a) {
        this._billboard.setVisibility(a);
        return !0
    },
    setLocation: function (a) {
        this._billboard.setLocation(a)
    },
    destroy: function () {
        this._billboard.destroy();
        this._billboard = null
    }
};
geofs.light = geofs.fx.light;
geofs.fx.dayNightManager = {
    illumination: 1,
    saturation: {
        valueRamp: [.12, .12, .12, .5, 1, 1, 1]
    },
    brightness: {
        valueRamp: [4, 4, 4, 2, 1, 1, 1]
    },
    gamma: {
        valueRamp: [.18, .18, .18, .5, 1, 1, 1]
    },
    brightnessShift: {
        valueRamp: [-.6, -.6, -.2, 0, 0]
    },
    groundBrightnessShift: {
        valueRamp: [-1.5, -1.5, -1, 0, 0]
    },
    groundAtmoSaturationShift: {
        valueRamp: [-.6, -.6, 0, 0, 0]
    },
    groundHueShift: {
        valueRamp: [0, 0, 0, 0, 0]
    },
    cloudsBrightness: {
        valueRamp: [0, 0, 0, .5, 1, 1]
    },
    fogBrightness: {
        valueRamp: [.1, .1, .1, .5, 1, 1]
    },
    blackMarbleVisibility: {
        valueRamp: [1, 1, 1, 0, 0]
    },
    blackMarbleAlpha: {
        valueRamp: [.1,
            .1, .1, 0, 0
        ]
    },
    init: function () {
        geofs.api.viewer.scene.moon.show = .55 < weather.timeRatio ? !0 : !1
    },
    update: function (a, b) {
        a = clamp(1 - weather.timeRatio + Math.sin(a[0] * DEGREES_TO_RAD) * weather.seasonRatio * .2, 0, 1);
        if (this.illumination != a) {
            geofs.api.blackMarble && (geofs.api.blackMarble.show = .3 < geofs.animation.filter(this.blackMarbleVisibility, a), geofs.api.blackMarble.alpha = geofs.animation.filter(this.blackMarbleAlpha, a));
            geofs.api.setImageryColorModifier("time", {
                brightness: geofs.animation.filter(this.brightness, a),
                saturation: geofs.animation.filter(this.saturation, a),
                gamma: geofs.animation.filter(this.gamma, a)
            });
            geofs.api.setAtmosphereColorModifier("time", {
                groundBrightnessShift: geofs.animation.filter(this.groundBrightnessShift, a),
                fogBrightness: geofs.animation.filter(this.fogBrightness, a),
                groundHueShift: geofs.animation.filter(this.groundHueShift, a),
                cloudsBrightness: geofs.animation.filter(this.cloudsBrightness, a),
                brightnessShift: geofs.animation.filter(this.brightnessShift, a)
            });
            b = parseInt(geofs.animation.filter(geofs.fx.cloudManager.redAnimation,
                weather.timeRatio));
            var c = parseInt(geofs.animation.filter(geofs.fx.cloudManager.greenAnimation, weather.timeRatio)),
                d = parseInt(geofs.animation.filter(geofs.fx.cloudManager.blueAnimation, weather.timeRatio));
            geofs.fx.cloudManager.setCloudColors(b, c, d);
            this.illumination = a
        }
    }
};
geofs.fx.fog = {
    baseColor: new Cesium.Color(1, 1, 1, 1),
    adjustedColor: new Cesium.Color(1, 1, 1, 1),
    brightness: 1,
    create: function () {
        geofs.fx.fog.ppStage || (geofs.fx.fog.ppStage = new Cesium.PostProcessStage({
            fragmentShader: "uniform sampler2D colorTexture; \nuniform sampler2D depthTexture; \nuniform vec4 fogColor; \nuniform float fogDensity; \nvarying vec2 v_textureCoordinates; \nvoid main(void) \n{ \n    vec4 color = texture2D(colorTexture, v_textureCoordinates); \n    vec4 depth = texture2D(depthTexture, v_textureCoordinates); \n    gl_FragColor = mix(color, fogColor, clamp(depth.r * fogDensity, 0.0, 1.0)); \n} \n",
            uniforms: {
                fogColor: this.adjustedColor ||
                    this.baseColor,
                fogDensity: this.density || 0
            }
        }), geofs.api.viewer.scene.postProcessStages.add(geofs.fx.fog.ppStage))
    },
    setBrightness: function (a) {
        this.brightness = a || this.brightness;
        this.adjustedColor = new Cesium.Color(this.baseColor.red * this.brightness, this.baseColor.green * this.brightness, this.baseColor.blue * this.brightness, 1);
        geofs.fx.fog.ppStage && (geofs.fx.fog.ppStage.uniforms.fogColor = this.adjustedColor)
    },
    setColor: function (a, b, c) {
        this.baseColor.red = a / 255 || this.baseColor.red;
        this.baseColor.green = b / 255 ||
            this.baseColor.green;
        this.baseColor.blue = c / 255 || this.baseColor.blue;
        this.adjustedColor = new Cesium.Color(this.adjustedColor.red * this.brightness, this.adjustedColor.green * this.brightness, this.adjustedColor.blue * this.brightness, 1);
        geofs.fx.fog.ppStage && (geofs.fx.fog.ppStage.uniforms.fogColor = this.adjustedColor)
    },
    setDensity: function (a) {
        this.density != a && (this.density = a || 0, 0 < a ? geofs.fx.fog.ppStage ? geofs.fx.fog.ppStage.uniforms.fogDensity = a : this.create() : this.destroy())
    },
    destroy: function () {
        geofs.fx.fog.ppStage &&
            (geofs.api.viewer.scene.postProcessStages.remove(geofs.fx.fog.ppStage), geofs.fx.fog.ppStage = null)
    }
};
geofs.fx.volumetricFog = {
    color: new Cesium.Color(1, 1, 1),
    bottom: 0,
    ceiling: 0,
    defaultRamp: {
        opacity: 0,
        cutoff: 0
    },
    getCanvas: function () {
        this.canvases || (this.canvases = {}, this.canvases.a = document.createElement("canvas"), this.canvases.a.width = 100, this.canvases.a.height = 1, this.canvases.b = document.createElement("canvas"), this.canvases.b.width = 100, this.canvases.b.height = 1);
        if (this.canvases.a.used) return this.canvases.a.used = !1, this.canvases.b;
        this.canvases.a.used = !0;
        return this.canvases.a
    },
    getColorRamp: function (a) {
        this.ramp =
            Object.assign({}, this.defaultRamp, this.ramp, a);
        a = this.getCanvas();
        var b = a.getContext("2d");
        b.clearRect(0, 0, a.width, a.height);
        var c = b.createLinearGradient(0, 0, 100, 0);
        c.addColorStop(0, this.color.withAlpha(this.ramp.opacity).toCssColorString());
        c.addColorStop(this.ramp.cutoff, this.color.withAlpha(this.ramp.opacity).toCssColorString());
        c.addColorStop(1, this.color.withAlpha(0).toCssColorString());
        b.fillStyle = c;
        b.fillRect(0, 0, 100, 1);
        return a
    },
    create: function () {
        geofs.api.viewer.shadows = !1;
        this.material =
            new Cesium.Material({
                fabric: {
                    type: "ElevationRamp",
                    uniforms: {
                        minimumHeight: 0,
                        maximumHeight: 0
                    }
                }
            });
        geofs.api.viewer.scene.globe.material = this.material;
        geofs.api.viewer.shadows = !geofs.simpleShadowOn
    },
    set: function (a, b, c, d) {
        this.ceiling = b || this.ceiling || weather.definition.ceiling;
        b < a && (b = a);
        this.material || this.create(a, b, c);
        this.setRampValue(c);
        this.setColorValue(d);
        this.setBottom(a);
        this.setCeiling(b);
        this.applyRamp()
    },
    setRampValue: function (a) {
        this.ramp = Object.assign({}, this.defaultRamp, a)
    },
    setRamp: function (a) {
        this.setRampValue(a);
        this.applyRamp()
    },
    applyRamp: function () {
        this.material && (this.material.uniforms.image = this.getColorRamp(this.ramp))
    },
    setColorValue: function (a) {
        this.color = a || this.color
    },
    setColor: function (a) {
        this.setColorValue(a);
        this.material && (this.material.uniforms.image = this.getColorRamp(this.ramp))
    },
    setBottom: function (a) {
        this.bottom = a || this.bottom;
        geofs.api.viewer.scene.globe.material && (this.material.uniforms.minimumHeight = this.bottom)
    },
    setCeiling: function (a) {
        this.ceiling = a || this.ceiling;
        geofs.api.viewer.scene.globe.material &&
            (this.material.uniforms.maximumHeight = this.ceiling)
    },
    destroy: function () {
        geofs.api.viewer.scene.globe.material = null;
        this.material && (this.material.destroy(), this.material = null)
    }
};
geofs.fx.cloudManager = {
    cloudCoverToCloudNumber: 15,
    clouds: {},
    numberOfClouds: 0,
    currentID: 0,
    maxNumberOfClouds: 0,
    refreshDistance: 1E3,
    currentCenter: [0, 0, 0],
    redAnimation: {
        valueRamp: [255, 255, 250, 100, 100]
    },
    greenAnimation: {
        valueRamp: [255, 255, 230, 100, 100]
    },
    blueAnimation: {
        valueRamp: [255, 255, 200, 100, 100]
    },
    fogBrightnessRamp: [0, 0, 0, 1],
    groundBrightnessRamp: [-.4, -.4, -.4, 0],
    setCloudCoverToCloudNumber: function (a) {
        this.cloudCoverToCloudNumber = a || this.cloudCoverToCloudNumber;
        geofs.fx.cloudManager.instance && this.setCloudCover(geofs.fx.cloudManager.instance.percentCoverage)
    },
    init: function (a) {
        this.cloudSituation = null;
        var b = lla2xyz(V3.sub(this.currentCenter, a), geofs.aircraft.instance.llaLocation);
        V3.length(b) > this.refreshDistance && this.destroyAllClouds();
        this.currentCenter = a;
        this.numberOfClouds = 0;
        geofs.fx.cloudManager.instance = this
    },
    spawnClouds: function () {
        var a = this.maxNumberOfClouds - this.numberOfClouds;
        if (0 < a)
            for (var b = 0; b < a; b++) new geofs.fx.Cloud;
        else if (0 > a)
            for (; 0 > a;) this.destroyLastCloud(), a++
    },
    triggerUpdate: function () {
        this.cloudSituation = null
    },
    update: function (a, b) {
        if (geofs.fx.cloudManager.instance) {
            geofs.fx.cloudManager.instance.currentCenter =
                a;
            b = clamp((a[2] - (weather.definition.ceiling - weather.definition.coverHalfThickness)) / weather.definition.cloudCoverThickness, weather.belowCeilingBrightness, 1);
            var c = a[2] < weather.definition.ceiling - weather.definition.coverHalfThickness ? 2 : a[2] < weather.definition.ceiling ? 6 : a[2] < weather.definition.ceiling + weather.definition.coverHalfThickness ? 12 : 8;
            a[2] < weather.definition.fogCeiling && (c += 1);
            this.cloudSituation != c && (0 < weather.definition.fog ? (geofs.fx.volumetricFog.set(weather.definition.fogBottom, weather.definition.fogCeiling, {
                opacity: weather.definition.fog,
                cutoff: 0
            }), a[2] < weather.definition.fogCeiling ? geofs.fx.fog.setDensity(Math.max(weather.definition.backgroundFogDensity, weather.definition.fog)) : geofs.fx.fog.setDensity(weather.definition.backgroundFogDensity)) : geofs.fx.volumetricFog.destroy(), 7 >= c ? this.fullCover ? (geofs.fx.precipitation.show(), this.fullCover.entity.show(), geofs.disableShadows(), geofs.api.hideSun(), geofs.api.setImageryColorModifier("cloudcover", {
                saturation: clamp(b, .2, 1),
                brightness: clamp(b, .2, 1)
            }), geofs.api.setAtmosphereColorModifier("cloudcover", {
                saturationShift: -2,
                brightnessShift: b - .9,
                groundBrightnessShift: b - 1.2,
                groundSaturationShift: b - 1
            })) : (geofs.enableShadows(), geofs.api.showSun(), geofs.api.removeImageryColorModifier("cloudcover"), geofs.api.removeAtmosphereColorModifier("cloudcover")) : c & 8 && (this.fullCover && (this.fullCover.entity.show(), geofs.fx.volumetricFog.set(0, weather.definition.ceiling + weather.definition.coverHalfThickness, {
                opacity: 1,
                cutoff: .95
            })), geofs.fx.fog.setDensity(0), geofs.fx.precipitation.hide(), geofs.enableShadows(), geofs.api.showSun(),
                geofs.api.removeImageryColorModifier("cloudcover"), geofs.api.removeAtmosphereColorModifier("cloudcover")));
            if (c & 4 && this.fullCover) {
                var d = 0;
                8 > c && (d = weather.definition.backgroundFogDensity);
                a = clamp(.1 * (weather.definition.coverHalfThickness - Math.abs(weather.definition.ceiling - a[2])), d, 1);
                geofs.fx.fog.setDensity(a);
                .5 < a ? this.fullCover.entity.hide() : this.fullCover.entity.show()
            }
            b != this.lastBrightness && (geofs.api.setAtmosphereColorModifier("clouds", {
                cloudsBrightness: b,
                groundBrightnessShift: geofs.animation.getRampRatio(this.groundBrightnessRamp,
                    b),
                fogBrightness: geofs.animation.getRampRatio(this.fogBrightnessRamp, b)
            }), this.lastBrightness = b);
            this.cloudSituation = c
        }
    },
    setCloudsBrightness: function (a) {
        geofs.fx.cloudManager.instance && this.setCloudColors(null, null, null, a)
    },
    setCloudColors: function (a, b, c, d) {
        if (geofs.fx.cloudManager.instance) {
            a && b && c ? this.cloudColor = Cesium.Color.fromBytes(a, b, c) : this.cloudColor || (this.cloudColor = Cesium.Color.fromBytes(255, 255, 255));
            this.brightness = d || this.brightness || 1;
            var e = this.cloudColor.darken(1 - this.brightness,
                new Cesium.Color),
                f;
            for (f in geofs.fx.cloudManager.instance.clouds) geofs.fx.cloudManager.instance.clouds[f].setColor(e);
            this.fullCover && this.fullCover.setColor(e);
            geofs.fx.fog.setColor(a, b, c);
            geofs.fx.fog.setBrightness(clamp(d, 0, 1));
            geofs.fx.volumetricFog.setColor(e);
            geofs.fx.setParticlesColor(e)
        }
    },
    setCloudCover: function (a) {
        geofs.fx.cloudManager.instance && (this.percentCoverage = a || 0, a *= .01, 100 <= this.percentCoverage ? this.fullCover || (this.fullCover = new geofs.fx.CloudCover([geofs.camera.lla[0], geofs.camera.lla[1],
        weather.definition.ceiling
        ])) : this.fullCover && (this.fullCover.destroy(), this.fullCover = null), geofs.api.setAtmosphereColorModifier("weatherHaze", {
            groundBrightnessShift: clamp(.5 * a, 0, .1),
            fogBrightness: clamp(1 + a, 1, 1.2),
            brightnessShift: clamp(.5 * a, 0, .1)
        }), this.setNumberOfClouds(this.percentCoverage * this.cloudCoverToCloudNumber), this.cloudSituation = null)
    },
    setNumberOfClouds: function (a) {
        geofs.fx.cloudManager.instance && (this.maxNumberOfClouds = a, this.spawnClouds())
    },
    setCeiling: function (a) {
        this.fullCover && this.fullCover.update();
        for (var b in this.clouds) this.clouds[b].setCeiling(a)
    },
    destroyLastCloud: function () {
        geofs.fx.cloudManager.instance.currentID--;
        this.clouds[geofs.fx.cloudManager.instance.currentID].destroy()
    },
    destroyAllClouds: function () {
        if (geofs.fx.cloudManager.instance) {
            for (var a in this.clouds) this.clouds[a].destroy();
            this.fullCover && (this.fullCover.destroy(), this.fullCover = null);
            geofs.fx.cloudManager.instance.currentID = 0
        }
    },
    destroy: function () {
        geofs.fx.cloudManager.instance && (this.destroyAllClouds(), geofs.fx.cloudManager.instance =
            null)
    }
};
geofs.fx.Cloud = function (a, b) {
    this._id = geofs.fx.cloudManager.instance.currentID++;
    this._type = Object.assign({}, this.defaultType, this.types[Math.floor(Math.random() * this.types.length)]);
    geofs.fx.cloudManager.instance.numberOfClouds++;
    geofs.fx.cloudManager.instance.clouds[this._id] = this;
    this.create(a)
};
geofs.fx.Cloud.prototype = {
    shadowSize: .002,
    shadowTexture: "images/weather/clouds/shadow1.png",
    defaultType: {
        belowCeiling: 0,
        aboveCeiling: 1E3,
        opacity: .8,
        minRadius: 1,
        maxRadius: 1E5,
        rotationMultiplier: 0,
        brightnessDelta: 0
    },
    types: [{
        billboard: "images/weather/clouds/1.png",
        belowCeiling: 500,
        aboveCeiling: 1E3,
        minScale: 6,
        maxScale: 10,
        maxRadius: 5E4,
        opacity: .9,
        shadow: !0
    }, {
        billboard: "images/weather/clouds/6.png",
        belowCeiling: 500,
        aboveCeiling: 1E3,
        minScale: 10,
        maxScale: 15,
        maxRadius: 5E4,
        opacity: .9,
        shadow: !0
    }, {
        billboard: "images/weather/clouds/1.png",
        belowCeiling: 500,
        aboveCeiling: 1500,
        maxRadius: 1E5,
        minScale: 10,
        maxScale: 15,
        opacity: .9,
        shadow: !0
    }, {
        billboard: "images/weather/clouds/5.png",
        belowCeiling: 500,
        aboveCeiling: 1E3,
        maxRadius: 1E5,
        minScale: 6,
        maxScale: 10,
        opacity: .9,
        shadow: !0
    }, {
        billboard: "images/weather/clouds/cumuloniumbus.png",
        belowCeiling: 500,
        aboveCeiling: 100,
        maxRadius: 1E5,
        minScale: 6,
        maxScale: 10,
        opacity: .9,
        shadow: !0
    }, {
        model: "models/clouds/flat1.gltf",
        belowCeiling: 2E3,
        aboveCeiling: 9E3,
        minScale: 4E4,
        maxScale: 45E3,
        maxRadius: 3E5,
        rotationMultiplier: 360,
        opacity: 1
    }, {
        model: "models/clouds/flat2.gltf",
        belowCeiling: 2E3,
        aboveCeiling: 9E3,
        minScale: 4E4,
        maxScale: 45E3,
        maxRadius: 3E5,
        rotationMultiplier: 360,
        opacity: 1
    }],
    billboardOptions: {
        sizeInMeters: !0,
        collection: "default",
        geofsFixCameraRotation: !0
    },
    modelOptions: {},
    create: function (a) {
        if (!a) {
            a = Math.random() * TWO_PI;
            var b = Math.sqrt(Math.random()) * (this._type.maxRadius - this._type.minRadius) + this._type.minRadius;
            a = V3.add(geofs.aircraft.instance.llaLocation, xy2ll([Math.cos(a) * b, Math.sin(a) * b], geofs.aircraft.instance.llaLocation));
            a[2] = Math.random() * (this._type.aboveCeiling - this._type.belowCeiling) + (weather.definition.ceiling + this._type.belowCeiling)
        }
        this._location = a;
        if (this._type.billboard) {
            var c = Object.assign({}, this.billboardOptions);
            c.scale = clamp(Math.random() * (this._type.maxScale - this._type.minScale) + this._type.minScale, this._type.minScale, this._type.maxScale);
            c.translucencyByDistance = new Cesium.NearFarScalar(this._type.maxRadius / 2, this._type.opacity, this._type.maxRadius, .3);
            c.opacity = this._type.billboardOpacity;
            this._entity =
                new geofs.api.billboard(a, this._type.billboard, c)
        } else this._type.model && (c = Object.assign({}, this.modelOptions), c.scale = clamp(Math.random() * (this._type.maxScale - this._type.minScale) + this._type.minScale, this._type.minScale, this._type.maxScale), c.rotation = [Math.random() * this._type.rotationMultiplier, 0, 0], c.location = a, this._entity = new geofs.api.Model(this._type.model, c));
        geofs.preferences.graphics.cloudShadows && this._type.shadow && (this._cloudShadowAppearance = this._cloudShadowAppearance || new Cesium.EllipsoidSurfaceAppearance({
            material: new Cesium.Material({
                fabric: {
                    type: "Image",
                    uniforms: {
                        image: this.shadowTexture
                    }
                }
            })
        }), c = geofs.fx.Cloud.prototype.shadowSize * c.scale, this._shadowPrimitive = new Cesium.GroundPrimitive({
            allowPicking: !1,
            geometryInstances: new Cesium.GeometryInstance({
                geometry: new Cesium.RectangleGeometry({
                    rectangle: Cesium.Rectangle.fromDegrees(this._location[1] - c, this._location[0] - c, this._location[1] + c, this._location[0] + c)
                })
            }),
            appearance: this._cloudShadowAppearance
        }), geofs.api.viewer.scene.groundPrimitives.add(this._shadowPrimitive));
        this.update()
    },
    setCeiling: function (a) {
        a =
            a || weather.definition.ceiling;
        this._entity.setLocation([this._entity._lla[0], this._entity._lla[1], Math.random() * (this._type.aboveCeiling - this._type.belowCeiling) + (a + this._type.belowCeiling)])
    },
    setColor: function (a) {
        this._entity.setColor(a)
    },
    move: function (a) {
        this._location = V3.add(this._location, a);
        this._entity.setLocation(this._location)
    },
    setLocation: function (a) {
        this._location = a;
        this._entity.setLocation(a)
    },
    update: function () {
        var a = this,
            b = ll2xy(V3.sub(this._location, geofs.aircraft.instance.llaLocation),
                geofs.aircraft.instance.llaLocation);
        b[2] = 0;
        if (V2.length(b) > this._type.maxRadius)
            if (geofs.fx.cloudManager.instance.numberOfClouds <= geofs.fx.cloudManager.instance.maxNumberOfClouds) b = V3.scale(V3.normalize(b), .9 * this._type.maxRadius), b = V3.add(geofs.aircraft.instance.llaLocation, xyz2lla([-b[0], -b[1], b[2]], geofs.aircraft.instance.llaLocation)), b[2] = this._location[2], this.setLocation(b);
            else {
                this.destroy();
                return
            } clearTimeout(this._updateTimeout);
        this._updateTimeout = setTimeout(function () {
            a.update()
        }, 2E4 +
        2E4 * Math.random())
    },
    destroy: function () {
        clearTimeout(this._updateTimeout);
        delete geofs.fx.cloudManager.instance.clouds[this._id];
        geofs.fx.cloudManager.instance.numberOfClouds--;
        this._entity && this._entity.destroy();
        this._shadowPrimitive && (geofs.api.viewer.scene.groundPrimitives.remove(this._shadowPrimitive), this._shadowPrimitive.destroy());
        this._shadowEntity && geofs.api.viewer.entities.remove(this._shadowEntity)
    }
};
geofs.fx.CloudCover = function (a) {
    this.create(a)
};
geofs.fx.CloudCover.prototype = {
    texture: "models/clouds/cover.jpg",
    size: 1,
    options: {
        url: "models/clouds/cover.gltf",
        scale: 4E5
    },
    create: function (a) {
        if (!this.entity) {
            var b = Object.assign({}, this.options);
            b.location = a;
            this.entity = new geofs.api.Model(null, b);
            this.update()
        }
    },
    setColor: function (a) {
        this.entity.setColor(a);
        geofs.fx.volumetricFog.setColor(a)
    },
    setLocation: function (a) {
        this.entity.setLocation(a)
    },
    update: function () {
        var a = this;
        this.setLocation([geofs.camera.lla[0], geofs.camera.lla[1], weather.definition.ceiling]);
        clearTimeout(this._updateTimeout);
        this._updateTimeout = setTimeout(function () {
            a.update()
        }, 2E4)
    },
    destroy: function () {
        clearTimeout(this._updateTimeout);
        this.entity && this.entity.destroy();
        this.entity = null
    }
};
geofs.fx.precipitation = {
    types: {
        snow: {
            speed: .001,
            model: "models/precipitations/snow.gltf?k=1"
        },
        rain: {
            speed: .1,
            model: "models/precipitations/rain.gltf?k=1"
        }
    },
    visible: !0,
    init: function () { },
    create: function (a, b) {
        a != geofs.fx.precipitation.type && (geofs.fx.precipitation.apiModel && geofs.fx.precipitation.destroy(), geofs.fx.precipitation.type = a, geofs.fx.precipitation.amount = b, geofs.fx.precipitation.apiModel = new geofs.api.Model(geofs.fx.precipitation.types[a].model), geofs.fx.precipitation.motionOffset = 0)
    },
    update: function (a,
        b) {
        if (geofs.fx.precipitation.apiModel && this.visible) {
            !geofs.fx.precipitation._material && geofs.fx.precipitation.apiModel._model && geofs.fx.precipitation.apiModel._model.ready && (geofs.fx.precipitation._material = geofs.fx.precipitation.apiModel._model.getMaterial("rainMaterial"));
            if ("chase" == geofs.camera.currentModeName || "free" == geofs.camera.currentModeName) {
                var c = weather.currentWindSpeedMs;
                a = weather.currentWindDirection + 180;
                var d = 90
            } else c = geofs.aircraft.instance.trueAirSpeed, a = Math.atan2(geofs.aircraft.instance.veldir[0],
                geofs.aircraft.instance.veldir[1]) * RAD_TO_DEGREES, d = Math.acos(geofs.aircraft.instance.veldir[2]) * RAD_TO_DEGREES;
            2 > c && (a = 0);
            a = [a, 2 * c, 0];
            a[1] = clamp(a[1], 0, d);
            c = [2, 2, clamp(2 + .5 * c, 2, 50)];
            geofs.fx.precipitation.apiModel.setPositionOrientationAndScale(geofs.camera.lla, a, c);
            geofs.fx.precipitation._material && !geofs.pause && (geofs.fx.precipitation.motionOffset -= Math.min(.9, .01 + b * geofs.aircraft.instance.trueAirSpeed * geofs.fx.precipitation.types[geofs.fx.precipitation.type].speed), 0 > geofs.fx.precipitation.motionOffset &&
                (geofs.fx.precipitation.motionOffset += 1), geofs.fx.precipitation._material.setValue("motion", geofs.fx.precipitation.motionOffset))
        }
    },
    show: function () {
        geofs.fx.precipitation.apiModel && (geofs.api.setModelVisibility(geofs.fx.precipitation.apiModel._model, !0), this.visible = !0)
    },
    hide: function () {
        geofs.fx.precipitation.apiModel && (geofs.api.setModelVisibility(geofs.fx.precipitation.apiModel._model, !1), this.visible = !1)
    },
    destroy: function () {
        geofs.fx.precipitation.apiModel && (geofs.fx.precipitation.type = "none", geofs.fx.precipitation._material =
            null, geofs.fx.precipitation.apiModel.destroy(), geofs.fx.precipitation.apiModel = null)
    }
};
geofs.fx.retro = function (a) {
    function b() {
        geofs.aircraft.instance.parts.root.object3d._model && (geofs.aircraft.instance.parts.root.object3d._model.color = c, geofs.aircraft.instance.parts.root.object3d._model.colorBlendAmount = 1, geofs.aircraft.instance.parts.root.object3d._model.colorBlendMode = 2, geofs.aircraft.instance.parts.root.object3d._model.shadows = 2, geofs.aircraft.instance.parts.root.object3d._model.debugWireframe = !0)
    }
    weather.set = function () { };
    geofs.retroOn = !0;
    var c = Cesium.Color.fromCssColorString("#2caecf");
    a = new Cesium.Material({
        fabric: {
            type: "SlopeColorContour",
            materials: {
                contourMaterial: {
                    type: "ElevationContour"
                },
                colorMaterial: {
                    type: "Color"
                }
            },
            components: {
                diffuse: "contourMaterial.alpha == 0.0 ? colorMaterial.diffuse : contourMaterial.diffuse",
                alpha: "1.0"
            }
        },
        translucent: !1
    });
    a.materials.contourMaterial.uniforms.width = 1;
    a.materials.contourMaterial.uniforms.spacing = 30;
    a.materials.contourMaterial.uniforms.color = c;
    a.materials.colorMaterial.uniforms.color = Cesium.Color.fromCssColorString("#0a243b");
    geofs.api.viewer.scene.globe.material =
        a;
    var d = geofs.api.viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(0, 0, 1E6),
        billboard: {
            image: "images/retro/sun.png",
            show: !0,
            pixelOffset: new Cesium.Cartesian2(0, 0),
            eyeOffset: new Cesium.Cartesian3(0, 0, 0),
            horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            width: 256,
            height: 256
        }
    });
    geofs.api.addFrameCallback(function () {
        d.position = new Cesium.Cartesian3.fromDegrees(geofs.aircraft.instance.llaLocation[1] - 10, geofs.aircraft.instance.llaLocation[0], 1E4)
    });
    geofs.api.viewer.scene.skyAtmosphere.hueShift =
        .3;
    geofs.api.viewer.scene.skyAtmosphere.brightnessShift = -.2;
    geofs.api.viewer.scene.skyAtmosphere.saturationShift = .2;
    geofs.api.viewer.scene.skyBox.show = !1;
    geofs.api.viewer.scene.sun.destroy();
    geofs.api.viewer.scene.fog.density = 8E-5;
    geofs.runways.redraw();
    b();
    $(document).on("flyto", function () {
        b()
    })
};
geofs.fx.water = {
    tileSize: 256,
    lods: [],
    lodDefinitions: [{
        zoomLevel: 10,
        size: 2,
        specularIntensity: 7,
        shininess: 50,
        amplitude: 2,
        frequency: 512,
        altitudeOpacityRamp: [0, 0, 1E3, 4E3],
        animationSpeed: 1E-4,
        alpha: .12,
        baseColour: "#001e281e",
        blendColour: "#00000000"
    }, {
        zoomLevel: 7,
        size: 2,
        specularIntensity: 10,
        shininess: 50,
        amplitude: 2,
        frequency: 256,
        altitudeOpacityRamp: [1E3, 3E3, 1E5, 1E5],
        animationSpeed: 1E-4,
        alpha: .12,
        baseColour: "#001e281e",
        blendColour: "#00000000"
    }],
    reset: function () {
        this.lods.forEach(function (a) {
            a.tiles.forEach(function (b) {
                b.x =
                    null;
                b.y = null
            })
        })
    },
    create: function () {
        var a = this;
        this.tilingScheme = new Cesium.WebMercatorTilingScheme({
            numberOfLevelZeroTilesX: 1,
            numberOfLevelZeroTilesY: 1
        });
        this.lodDefinitions.forEach(function (b, c) {
            b = Object.assign({}, b);
            a.lods.push(b);
            b.tiles = [];
            c = b.size * b.size;
            b.centerTileIndex = Math.floor(c / 2);
            for (var d = 0; d < c; d++) {
                var e = {};
                b.tiles.push(e);
                e.canvasAPI = new geofs.api.Canvas({
                    width: a.tileSize,
                    height: a.tileSize,
                    color: "#ffffff",
                    blur: b.blur
                })
            }
        })
    },
    update: function (a, b, c) {
        var d = this;
        this.lods.forEach(function (e,
            f) {
            var g = geofs.coord2tileQuad(a, b, e.zoomLevel, e.size, d.tilingScheme),
                k;
            e.altitudeOpacityRamp && (k = e.alpha * geofs.animation.getRampValue(e.altitudeOpacityRamp, c));
            e.tiles.forEach(function (n, x) {
                void 0 != k && n.primitive && (.05 > k ? n.primitive.show = !1 : (n.primitive.show = !0, n.primitive.appearance.material.uniforms.baseWaterColor.alpha = k));
                if (n.x != g[x].x || n.y != g[x].y) {
                    n.x = g[x].x;
                    n.y = g[x].y;
                    n.rectangle = d.tilingScheme.tileXYToRectangle(n.x, n.y, e.zoomLevel);
                    n.url = geofs.waterServer + e.zoomLevel + "/" + n.x + "/" + n.y + ".png";
                    var q = new Cesium.GroundPrimitive({
                        interleave: !0,
                        allowPicking: !1,
                        classificationType: Cesium.ClassificationType.TERRAIN,
                        geometryInstances: new Cesium.GeometryInstance({
                            geometry: new Cesium.RectangleGeometry({
                                vertexFormat: Cesium.EllipsoidSurfaceAppearance.VERTEX_FORMAT,
                                arcType: Cesium.ArcType.RHUMB,
                                rectangle: n.rectangle
                            })
                        })
                    });
                    n.canvasAPI.loadImage(n.url).then(function (z) {
                        if (e.blurMargin) {
                            var r = n.canvasAPI.context.getImageData(e.blurMargin, e.blurMargin, z.width - 2 * e.blurMargin, z.height - 2 * e.blurMargin);
                            n.canvasAPI.context.filter =
                                "blur(0px)";
                            n.canvasAPI.context.drawImage(n.canvasAPI._imageElements[0], 0, 0);
                            n.canvasAPI.context.putImageData(r, e.blurMargin, e.blurMargin)
                        }
                        z = new Cesium.Material({
                            fabric: {
                                type: "MyWater",
                                source: "czm_material czm_getMaterial(czm_materialInput materialInput) { czm_material material = czm_getDefaultMaterial(materialInput); float time = czm_frameNumber * animationSpeed_5; float specularMapValue = texture2D(specularMap_2, materialInput.st).r; specularMapValue = specularMapValue * specularMapValue; vec4 noise = czm_getWaterNoise(normalMap_3, materialInput.st * frequency_4, time, 0.0); vec3 normalTangentSpace = noise.xyz * vec3(1.0, 1.0, (1.0 / amplitude_6)); normalTangentSpace = normalize(normalTangentSpace); material.alpha = mix(blendColor_1.a, baseWaterColor_0.a, specularMapValue) * specularMapValue; material.diffuse = mix(blendColor_1.rgb, baseWaterColor_0.rgb, specularMapValue); material.normal = normalize(materialInput.tangentToEyeMatrix * normalTangentSpace); material.specular = specularIntensity_7; material.shininess = shininess_9; return material; }",
                                uniforms: {
                                    baseWaterColor: Cesium.Color.fromCssColorString(e.baseColour),
                                    blendColor: Cesium.Color.fromCssColorString(e.blendColour),
                                    specularMap: z,
                                    normalMap: 8 > geofs.api.renderingSettings.waterResolution ? "/shaders/oceannormal2.jpg" : "/shaders/oceannormal.jpg",
                                    frequency: e.frequency * geofs.api.renderingSettings.waterResolution,
                                    animationSpeed: e.animationSpeed * geofs.api.renderingSettings.waterResolution,
                                    amplitude: e.amplitude,
                                    specularIntensity: e.specularIntensity,
                                    fadeFactor: 1,
                                    shininess: e.shininess
                                }
                            }
                        });
                        z = new Cesium.EllipsoidSurfaceAppearance({
                            material: z
                        });
                        q.appearance = z;
                        geofs.api.viewer.scene.groundPrimitives.add(q);
                        geofs.api.viewer.scene.requestRender();
                        q.readyPromise.then(function () {
                            geofs.api.viewer.scene.groundPrimitives.remove(n.primitive);
                            n.primitive = q
                        })
                    })
                }
            });
            f = e.size - 1;
            var m = e.size * f;
            e.rectangle = new Cesium.Rectangle(e.tiles[m].rectangle.west, e.tiles[m].rectangle.south, e.tiles[f].rectangle.east, e.tiles[f].rectangle.north)
        })
    },
    destroy: function () {
        this.lods.forEach(function (a) {
            a.tiles.forEach(function (b) {
                geofs.api.viewer.scene.groundPrimitives.remove(b.primitive);
                b.canvasAPI.destroy();
                a.tiles = null
            })
        });
        this.lods = []
    }
};
geofs.fx.wake = {
    anchor: [0, 0, 0],
    altitude: .2,
    create: function () {
        geofs.fx.wake.emitter || (geofs.fx.wake.emitter = new geofs.fx.ParticleEmitter({
            off: !0,
            anchor: geofs.fx.wake.anchor,
            location: geofs.fx.wake.anchor,
            duration: 1E10,
            rate: .001,
            life: 1E4,
            easing: "easeOutQuart",
            startOpacity: 1,
            endOpacity: .001,
            startScale: 1,
            endScale: 50,
            model: "models/wake/wake.gltf",
            rotationAxis: 0,
            maximumScale: 2E4
        }))
    },
    update: function () {
        geofs.aircraft.instance.waterContact && geofs.preferences.graphics.waterEffect ? (geofs.fx.wake.anchor[0] = geofs.aircraft.instance.llaLocation[0],
            geofs.fx.wake.anchor[1] = geofs.aircraft.instance.llaLocation[1], geofs.fx.wake.anchor[2] = geofs.groundElevation + geofs.fx.wake.altitude, geofs.fx.wake.emitter._options.startRotation = geofs.fx.wake.emitter._options.endRotation = geofs.aircraft.instance.htr[0], geofs.fx.wake.emitter._options.rate = clamp(2E-4 * geofs.aircraft.instance.velocityScalar, .001, .01), geofs.fx.wake.emitter._options.startScale = clamp(.1 * geofs.aircraft.instance.velocityScalar, 1, 5), geofs.fx.wake.emitter._options.endScale = clamp(1E-4 * geofs.aircraft.instance.definition.mass,
                50, 150), geofs.fx.wake.emitter.turnOn()) : geofs.fx.wake.emitter && geofs.fx.wake.emitter.turnOff()
    },
    destroy: function () {
        geofs.fx.wake.emitter && geofs.fx.wake.emitter.turnOff()
    }
};
"use strict";
window.flight = window.flight || {};
flight.minPenetrationThreshold = .001;
flight.arrestingHookDiscardVelocity = .1;
flight.arrestingHookDiscardLength = 100;
flight.currentAltitudeTestContext = {};
flight.pastAltitudeTestContext = {};
flight.tick = function (a, b) {
    var c = clamp(Math.floor(b / (geofs.PHYSICS_DELTA_MS || 10)), 1, 10),
        d = a / c,
        e = 1 / a,
        f = geofs.aircraft.instance,
        g = geofs.animation.values;
    f.totalThrust = 0;
    var k = 1,
        m = 1,
        n = f.definition.zeroThrustAltitude,
        x = f.definition.zeroRPMAltitude;
    n ? k = clamp(n - g.altitude, 0, n) / n : x && (m = clamp(x - g.altitude, 0, x) / x);
    for (var q = geofs.aircraft.instance.engines, z = q.length, r = 0; r < z; r++) {
        var p = q[r],
            F = controls.throttle,
            H = 1,
            B = p.animations;
        if (B)
            for (var W = 0; W < B.length; W++) {
                var X = B[W];
                switch (X.type) {
                    case "throttle":
                        F = geofs.animation.filter(X);
                        break;
                    case "pitch":
                        H = geofs.animation.filter(X)
                }
            }
        if (f.engine.on) {
            var Y = (f.definition.maxRPM - f.definition.minRPM) * F + f.definition.minRPM;
            Y *= m;
            p.rpm += (Y - p.rpm) * f.definition.engineInertia * a;
            geofs.aircraft.instance.definition.reverse && (p.rpm < f.definition.minRPM && 0 < p.rpm && !f.engine.startup && (p.rpm = -f.definition.minRPM), p.rpm > -f.definition.minRPM && 0 > p.rpm && !f.engine.startup && (p.rpm = f.definition.minRPM));
            p.contrailEmitter && (geofs.preferences.graphics.contrails && f.llaLocation[2] > weather.contrailAltitude ? p.contrailEmitter.turnOn() :
                p.contrailEmitter.turnOff())
        } else p.rpm = 1E-5 > p.rpm ? 0 : p.rpm - p.rpm * f.definition.engineInertia * a;
        var ea = Math.abs(p.rpm),
            oa = p.thrust;
        p.afterBurnerThrust && .9 < F && (oa = p.afterBurnerThrust);
        0 > p.rpm && (oa = p.reverseThrust ? -p.reverseThrust : 0);
        var fa = oa * clamp(ea - f.definition.minRPM, 0, f.definition.maxRPM) * f.engine.invRPMRange;
        fa *= k;
        fa *= H;
        p.currentThrust = fa;
        f.totalThrust += fa
    }
    0 < z && (f.engine.rpm = parseInt(ea));
    var I = 0;
    r = 0;
    for (var C = geofs.aircraft.instance.balloons.length; r < C; r++) {
        var D = geofs.aircraft.instance.balloons[r],
            $a = clamp(controls[D.controller.name] * D.controller.ratio, 0, 1);
        I = D.temperature;
        I += $a * D.heatingSpeed * a;
        I -= D.coolingSpeed * (I - weather.atmosphere.airTempAtAltitude) * a;
        I = clamp(I, 0, 300);
        D.temperature = I;
        D.liftingForce = (weather.atmosphere.airDensityAtAltitude - weather.atmosphere.airPressureAtAltitude / (GAS_CONSTANT * (I + KELVIN_OFFSET))) * D.volume * GRAVITY;
        f.envelopeTemp = I
    }
    weather.atmosphere.update(f.llaLocation[2]);
    ui.hud.stallAlarm(!1);
    for (var Ea = 0; Ea < c; Ea++) {
        f.velocity = f.rigidBody.v_linearVelocity;
        f.velocityScalar =
            V3.length(f.velocity);
        var ab = f.velocityScalar * d;
        f.airVelocity = V3.sub(f.velocity, weather.currentWindVector);
        f.veldir = V3.normalize(f.airVelocity);
        f.trueAirSpeed = V3.length(f.airVelocity);
        r = 0;
        for (C = f.balloons.length; r < C; r++) D = f.balloons[r], f.rigidBody.applyForce([0, 0, D.liftingForce], D.points.forceSourcePoint.worldPosition);
        for (r = 0; r < f.engines.length; r++) {
            p = f.engines[r];
            var bb = p.object3d.getWorldFrame()[p.forceDirection];
            f.rigidBody.applyForce(V3.scale(bb, p.currentThrust), p.points.forceSourcePoint.worldPosition)
        }
        if (.01 <
            f.trueAirSpeed) {
            var Fa = f.trueAirSpeed * f.trueAirSpeed,
                Z = V3.scale(f.veldir, -(f.definition.dragCoefficient ? .5 * f.definition.dragCoefficient * weather.atmosphere.airDensityAtAltitude * Fa : f.definition.dragFactor * Fa * weather.atmosphere.airDensityAtAltitude));
            f.rigidBody.applyCentralForce(Z);
            r = 0;
            for (C = f.airfoils.length; r < C; r++) {
                var t = f.airfoils[r],
                    ha = t.points.forceSourcePoint,
                    cb = t.object3d.getWorldFrame(),
                    E = f.rigidBody.getVelocityInLocalPoint(ha.worldPosition);
                if (t.propwash) {
                    var Ga = f.engine.rpm * t.propwash,
                        db =
                            V3.dot(E, f.object3d.worldRotation[1]);
                    E = V3.add(E, V3.scale(f.object3d.worldRotation[1], clamp(Ga - db, 0, Ga)))
                }
                E = V3.sub(E, weather.currentWindVector);
                E = V3.sub(E, weather.thermals.currentVector);
                var eb = Object3D.utilities.getPointLla(ha, f.llaLocation);
                E = V3.add(E, weather.getLocalTurbulence(eb));
                t.velocity = V3.length(E);
                var pa = V3.normalize(E),
                    ia = t.velocity * t.velocity,
                    qa = cb[t.forceDirection],
                    N = -V3.dot(qa, pa),
                    fb = V3.cross(qa, pa),
                    gb = V3.rotate(qa, fb, N);
                if (t.span) {
                    var ra = t.aspectRatio || t.span / t.chord,
                        hb = t.span * t.chord,
                        ja = ra / (ra + 2) * TWO_PI * N,
                        ib = ja * ja / (PI * ra * (t.efficiencyFactor || PLANFORM_EFFICIENCY_FACTOR));
                    if (1 == t.stalls) {
                        f.angleOfAttackDeg = N * RAD_TO_DEGREES;
                        var K = Math.abs(f.angleOfAttackDeg);
                        K > t.stallIncidence && (ui.hud.stallAlarm(!0), ja *= 1 - clamp(K - t.stallIncidence, 0, .9 * t.zeroLiftIncidence) / t.zeroLiftIncidence)
                    }
                    var Ha = .5 * weather.atmosphere.airDensityAtAltitude * ia * hb;
                    Z = ib * Ha;
                    var ka = ja * Ha
                } else if (t.area) {
                    var la = N * TWO_PI;
                    1 == t.stalls && (f.angleOfAttackDeg = N * RAD_TO_DEGREES, K = Math.abs(f.angleOfAttackDeg), K > t.stallIncidence &&
                        (ui.hud.stallAlarm(!0), la *= 1 - clamp(K - t.stallIncidence, 0, .9 * t.zeroLiftIncidence) / t.zeroLiftIncidence));
                    Z = .5 * ia * (MIN_DRAG_COEF + DRAG_CONSTANT * la * la) * weather.atmosphere.airDensityAtAltitude;
                    ka = weather.atmosphere.airDensityAtAltitude * ia * .5 * t.area * la
                } else {
                    var Ia = t.liftFactor,
                        jb = t.dragFactor;
                    1 == t.stalls && (f.angleOfAttackDeg = N * RAD_TO_DEGREES, K = Math.abs(f.angleOfAttackDeg), K > t.stallIncidence && (ui.hud.stallAlarm(!0), Ia *= .9 - clamp(K - t.stallIncidence, 0, t.zeroLiftIncidence) / t.zeroLiftIncidence));
                    var Ja = N * ia;
                    ka =
                        Ia * Ja * weather.atmosphere.airDensityAtAltitude;
                    Z = jb * Math.abs(Ja) * weather.atmosphere.airDensityAtAltitude
                }
                t.lift = ka;
                f.rigidBody.applyForce(V3.scale(gb, ka), ha.worldPosition);
                f.rigidBody.applyForce(V3.scale(pa, -Z), ha.worldPosition)
            }
        }
        var sa = 0;
        f.groundContact = !1;
        f.waterContact = !1;
        f.rigidBody.applyCentralForce(f.rigidBody.gravityForce);
        geofs.relativeAltitude = f.llaLocation[2] - geofs.groundElevation;
        geofs.waterDepth = geofs.api.waterDetection.getWaterDepth(f.llaLocation[0], f.llaLocation[1]);
        if (geofs.relativeAltitude <
            geofs.aircraft.instance.boundingSphereRadius + ab) {
            var Ka = geofs.aircraft.instance.collisionPoints,
                O = [],
                P = 0;
            r = 0;
            for (C = Ka.length; r < C; r++) {
                var y = Ka[r],
                    u = y.part;
                u.contact = null;
                var R = V3.add(f.llaLocation, xyz2lla(y.worldPosition, f.llaLocation));
                f.rigidBody.getVelocityInLocalPoint(y.worldPosition);
                var S = geofs.getCollisionResult(R, y.worldPosition, f.collResult, y),
                    T = S.location[2],
                    Q = u.object3d.getWorldFrame(),
                    G = f.collResult.normal;
                if (0 < geofs.waterDepth && !S.object) {
                    var ma = T - R[2];
                    if (0 <= ma && !y.wrongAltitude) {
                        var v = {
                            collisionPoint: y,
                            normal: [0, 0, 1],
                            depth: ma,
                            force: ma * ma * u.buoyancy,
                            type: "buoyancy"
                        };
                        u.contact = v;
                        O.push(v)
                    }
                    T -= geofs.waterDepth
                } else if (u.suspension) {
                    var ta = u.points.suspensionOrigin,
                        ua = u.suspension.restLength - (ta.worldPosition[2] + f.llaLocation[2] - T),
                        va = clamp(ua / u.suspension.restLength, 0, 1),
                        kb = va * u.suspension.restLength;
                    if (0 < va && ta.worldPosition[2] >= y.worldPosition[2] && !y.wrongAltitude) {
                        var lb = V3.dot(G, Q[2]);
                        v = {
                            collisionPoint: y,
                            normal: G,
                            force: u.suspension.stiffness * kb,
                            type: "raycast",
                            contactFwdDir: V3.cross(G,
                                V3.normalize(Q[0])),
                            contactSideDir: V3.cross(G, V3.normalize(Q[1]))
                        };
                        if (va >= u.suspension.hardPoint || .4 > lb) v.type = "hardpoint", v.penetration = T - (y.worldPosition[2] + f.llaLocation[2]), P = Math.max(P, v.penetration);
                        u.contact = v;
                        O.push(v);
                        ta[2] = -ua;
                        var aa = u.name + "Suspension";
                        g[aa] = ua;
                        u.suspension.rest = !1
                    } else u.suspension.rest || (aa = u.name + "Suspension", g[aa] = 0, u.points.suspensionOrigin[2] = 0, u.suspension.rest = !0);
                    var La = {};
                    La[u.name] = u;
                    f.placeParts(La)
                } else if (u.hook) {
                    if (S.object && S.object.arrestingCable && !f.arrestingCableContact) {
                        var ba =
                            T - R[2];
                        ba >= -S.object.arrestingCableHeight && (f.arrestingCableContact = {
                            collisionPoint: y,
                            normal: G,
                            type: "arrestingCable",
                            object: S.object,
                            contactFwdDir: V3.cross(G, V3.normalize(Q[0])),
                            contactSideDir: V3.cross(G, V3.normalize(Q[1]))
                        })
                    }
                    if (f.arrestingCableContact) {
                        var Ma = geofs.utils.llaDistanceInMeters(R, f.arrestingCableContact.object.location);
                        f.velocityScalar < flight.arrestingHookDiscardVelocity || Ma > flight.arrestingHookDiscardLength ? (geofs.api.setModelPositionOrientationAndScale(f.arrestingCableContact.object.model,
                            f.arrestingCableContact.object.location, null, 1), f.arrestingCableContact = null) : (u.contact = f.arrestingCableContact, O.push(f.arrestingCableContact), geofs.api.setModelPositionOrientationAndScale(f.arrestingCableContact.object.model, R, null, [1.6 * Ma, 1, 1]))
                    }
                } else ba = T - R[2], 0 <= ba && !y.wrongAltitude && (P = Math.max(P, ba), v = {
                    collisionPoint: y,
                    normal: G,
                    penetration: ba,
                    type: "standard",
                    contactFwdDir: V3.cross(G, V3.normalize(Q[0])),
                    contactSideDir: V3.cross(G, V3.normalize(Q[1]))
                }, u.contact = v, O.push(v))
            }
            if (O.length && (f.groundContact = !0, !flight.skipCollisionResponse)) {
                P > flight.minPenetrationThreshold && !geofs.cautiousWithTerrain && (f.llaLocation[2] += P, P = 0);
                var wa = 0;
                for (C = O.length; wa < C; wa++) {
                    v = O[wa];
                    y = v.collisionPoint;
                    u = y.part;
                    var M = y.contactProperties,
                        U = f.rigidBody.getVelocityInLocalPoint(y.worldPosition),
                        ca = V3.dot(v.normal, U);
                    sa = Math.max(sa, Math.abs(ca));
                    var da = 0;
                    if ("buoyancy" == v.type) {
                        var V = v.force;
                        f.rigidBody.applyForce(V3.scale(v.normal, V), y.worldPosition);
                        f.waterContact = !0
                    }
                    if ("raycast" == v.type || "hardpoint" == v.type) V = v.force -
                        u.suspension.damping * ca, da = V * f.rigidBody.mass * d, 0 < da && f.rigidBody.applyImpulse(V3.scale(v.normal, da), y.worldPosition);
                    "arrestingCable" == v.type && (f.arrestingCableContact.force = V3.scale(U, -u.hook.strength), f.rigidBody.applyForce(f.arrestingCableContact.force, y.worldPosition));
                    if (("standard" == v.type || "hardpoint" == v.type) && 0 > ca) {
                        var Na = f.rigidBody.computeJacobian(0, ca, y.worldPosition, v.normal),
                            mb = V3.scale(v.normal, Na);
                        f.rigidBody.applyImpulse(mb, y.worldPosition);
                        da = Na
                    }
                    var J = da * M.frictionCoef;
                    J = clamp(J,
                        J, 2 * f.rigidBody.mass * d * M.frictionCoef);
                    if ("buoyancy" == v.type) f.rigidBody.applyForce(V3.mult(U, [.04 * -V, .04 * -V, .05 * -V]), y.worldPosition);
                    else if ("wheel" == u.type) {
                        var xa = v.contactFwdDir,
                            ya = v.contactSideDir,
                            Oa = V3.dot(ya, U),
                            za = V3.dot(xa, U);
                        v.forwardProjVel = za;
                        v.sideProjVel = Oa;
                        var Pa = f.rigidBody.computeJacobian(0, Oa, y.worldPosition, ya),
                            Qa = f.rigidBody.computeJacobian(0, za, y.worldPosition, xa),
                            Aa = Math.abs(Pa),
                            Ba = Math.abs(Qa),
                            Ra = 1,
                            na = 1;
                        Math.abs(za) > M.lockSpeed && (na = M.rollingFriction);
                        var Sa = u.brakesController;
                        if (Sa && 0 < Ba) {
                            var nb = clamp(g[Sa] * u.brakesControllerRatio, 0, 1);
                            na = clamp(J / (Ba * M.frictionCoef), 0, 1) * nb
                        }
                        var ob = f.definition.brakeDamping || 3;
                        .05 < controls.brakes && (na = clamp(J / (Ba * M.frictionCoef * ob) * controls.brakes, 0, 1));
                        if (Aa > J) {
                            var Ca = J / (Aa * Aa);
                            Ra = clamp(Ca, M.dynamicFriction, 1)
                        }
                        f.rigidBody.applyImpulse(V3.scale(ya, Pa * Ra), y.worldPosition);
                        f.rigidBody.applyImpulse(V3.scale(xa, Qa * na), y.worldPosition)
                    } else {
                        var Ta = V3.sub(U, V3.scale(v.normal, ca)),
                            Ua = V3.normalize(Ta),
                            Va = V3.length(Ta);
                        if (Va) {
                            var Wa = f.rigidBody.computeJacobian(0,
                                Va, y.worldPosition, Ua),
                                Da = Math.abs(Wa),
                                Xa = 1;
                            Da > J && (Ca = J / (Da * Da), Xa = clamp(Ca, M.dynamicFriction, 1));
                            f.rigidBody.applyImpulse(V3.scale(Ua, Xa * Wa), y.worldPosition)
                        }
                    }
                }
            }
        } else
            for (r = 0, C = geofs.aircraft.instance.suspensions.length; r < C; r++) u = geofs.aircraft.instance.suspensions[r], u.suspension && !u.suspension.rest && (aa = u.name + "Suspension", g[aa] = 0, u.points.suspensionOrigin[2] = 0, u.suspension.rest = !0);
        flight.recorder.playing || flight.sharing.on || (f.rigidBody.integrateVelocities(d), f.rigidBody.integrateTransform(d),
            geofs.aircraft.instance.object3d.compute(f.llaLocation), flight.setAnimationValues(d), controls.autopilot.update(d), flight.recorder.record())
    }
    1 == flight.recorder.playing ? (flight.recorder.play(b), flight.setAnimationValues(a)) : flight.sharing.on ? (flight.sharing.update(b), flight.setAnimationValues(a)) : (f.rigidBody.setCurrentAcceleration(e, a), f.placeParts());
    f.render();
    geofs.preferences.crashDetection && 10 < sa && !f.crashed && (f.crashNotified = !0, ui.showCrashNotification(), f.crash());
    f.htrAngularSpeed = V3.sub(f.object3d.htr,
        f.htr);
    f.htrAngularSpeed = fixAngles(f.htrAngularSpeed);
    f.htrAngularSpeed = V3.scale(f.htrAngularSpeed, 1 / b);
    f.htr = f.object3d.htr;
    r = f.maxAngularVRatio = 0;
    for (C = f.wheels.length; r < C; r++) {
        var A = f.wheels[r];
        A.oldAngularVelocity = A.angularVelocity;
        if (A.contact) {
            A.angularVelocity = A.contact.forwardProjVel * a / A.arcDegree;
            var Ya = A.angularVelocity / A.oldAngularVelocity;
            30 < A.contact.forwardProjVel && 40 < Ya && new geofs.fx.ParticleEmitter({
                anchor: A.contact.collisionPoint,
                duration: 200,
                rate: .05,
                life: 2E3,
                startScale: .001,
                endScale: .05,
                startOpacity: .3,
                endOpacity: .001,
                startRotation: "random",
                endRotation: "random",
                texture: "smoke"
            });
            f.maxAngularVRatio = Math.max(f.maxAngularVRatio, Ya)
        } else .01 < A.angularVelocity && (A.angularVelocity *= .9);
        var Za = A.name + "Rotation";
        g[Za] = fixAngle360((g[Za] || 0) + A.angularVelocity)
    }
};
flight.setAnimationValues = function (a) {
    var b = geofs.aircraft.instance,
        c = geofs.animation.values,
        d = b.llaLocation[2] * METERS_TO_FEET,
        e = 60 * (d - b.oldAltitude * METERS_TO_FEET) / a;
    b.oldAltitude = b.llaLocation[2];
    var f = fixAngle(weather.currentWindDirection - b.htr[0]),
        g = b.engine.rpm * b.definition.RPM2PropAS * a;
    c.acceleration = M33.transform(M33.transpose(b.object3d._rotation), b.rigidBody.v_acceleration);
    c.accX = c.acceleration[0];
    c.accY = c.acceleration[1];
    c.accZ = c.acceleration[2];
    c.ktas = 1.94 * b.trueAirSpeed;
    c.kias = c.ktas;
    c.altitudeMeters = b.llaLocation[2];
    c.altitude = d;
    c.haglMeters = geofs.relativeAltitude;
    c.haglFeet = geofs.relativeAltitude * METERS_TO_FEET;
    c.climbrate = e;
    c.aoa = b.angleOfAttackDeg;
    c.heading = b.htr[0];
    c.heading360 = fixAngle360(b.htr[0]);
    c.atilt = b.htr[1];
    c.aroll = b.htr[2];
    c.enginesOn = b.engine.on;
    c.prop = fixAngle360(c.prop + g);
    c.thrust = b.totalThrust;
    c.rpm = b.engine.rpm;
    c.throttle = controls.throttle;
    c.pitch = controls.pitch;
    c.rawPitch = controls.rawPitch;
    c.roll = controls.roll;
    c.yaw = controls.yaw;
    c.rawYaw = controls.rawYaw;
    c.trim =
        controls.elevatorTrim;
    c.brakes = controls.brakes;
    c.gearPosition = controls.gear.position;
    c.invGearPosition = 1 - controls.gear.position;
    c.gearTarget = controls.gear.target;
    c.flapsValue = controls.flaps.position / controls.flaps.maxPosition;
    c.flapsPosition = controls.flaps.position;
    c.flapsTarget = controls.flaps.target;
    c.flapsPositionTarget = controls.flaps.positionTarget;
    c.flapsMaxPosition = controls.flaps.maxPosition;
    c.airbrakesPosition = controls.airbrakes.position;
    c.optionalAnimatedPartPosition = controls.optionalAnimatedPart.position;
    c.airbrakesTarget = controls.airbrakes.target;
    c.parkingBrake = b.brakesOn;
    c.groundContact = b.groundContact ? 1 : 0;
    c.arrestingHookTension = b.arrestingCableContact ? V3.length(b.arrestingCableContact.force) : 0;
    c.turnrate = 60 * fixAngle(b.htr[0] - c.heading) / a;
    c.mach = b.trueAirSpeed / (331.3 + .606 * weather.atmosphere.airTempAtAltitude);
    c.machUnits = Math.floor(c.mach);
    c.machTenth = Math.floor(10 * (c.mach % 1).toPrecision(2));
    c.machHundredth = Math.floor(100 * (c.mach % .1).toPrecision(2));
    c.altTenThousands = d % 1E5;
    c.altThousands = d % 1E4;
    c.altHundreds = d % 1E3;
    c.altTens = d % 100;
    c.altTensShift = Math.floor(d % 1E5 / 1E4);
    c.altUnits = d % 10;
    c.relativeWind = f;
    c.windSpeed = weather.currentWindSpeed;
    c.windSpeedLabel = parseInt(weather.currentWindSpeed) + " kts";
    c.view = geofs.camera.currentView;
    c.envelopeTemp = b.envelopeTemp;
    c["aircraft.maxAngularVRatio"] = b.maxAngularVRatio;
    c.rollingSpeed = b.groundContact ? b.velocityScalar : 0;
    "free" == geofs.camera.currentModeName || "chase" == geofs.camera.currentModeName ? (b = geofs.utils.llaDistanceInMeters(geofs.camera.lla, b.llaLocation),
        c.cameraAircraftSpeed = (c.cameraAircraftDistance - b) / a, c.cameraAircraftDistance = b) : (c.cameraAircraftSpeed = 0, c.cameraAircraftDistance = 0);
    geofs.api.postMessage({
        animationValues: c
    })
};
$(".geofs-recordPlayer-slider").on("userchange", function (a, b) {
    flight.recorder.setStep(parseInt(b), "slide")
}).on("dragstart", function () {
    flight.recorder.pausePlayback();
    geofs.api.nativeMouseHandling = !0
}).on("dragend", function () {
    flight.recorder.unpausePlayback();
    geofs.api.nativeMouseHandling = !1
});
flight.recorder = {
    tape: [],
    rate: 4,
    frequency: 250,
    maxLength: 1E3,
    playing: !1,
    lastRecordTime: 0,
    record: function () {
        var a = geofs.utils.now();
        if (!(a - flight.recorder.lastRecordTime < flight.recorder.frequency)) {
            flight.recorder.lastRecordTime = a;
            var b = geofs.aircraft.instance.llaLocation,
                c = geofs.aircraft.instance.htr;
            a = {
                time: a,
                coord: [b[0], b[1], b[2], c[0], c[1], c[2]],
                controls: [controls.rawPitch, controls.roll, controls.yaw, controls.throttle, controls.gear.position, controls.flaps.position, controls.airbrakes.position],
                state: [geofs.aircraft.instance.engine.on,
                geofs.aircraft.instance.groundContact
                ],
                velocities: geofs.aircraft.instance.rigidBody.getLinearVelocity().concat(geofs.aircraft.instance.rigidBody.getAngularVelocity())
            };
            flight.recorder.tape.push(a);
            flight.recorder.tape.length > flight.recorder.maxLength && flight.recorder.tape.shift()
        }
    },
    clear: function () {
        flight.recorder.tape = []
    },
    enterPlayback: function () {
        $(".geofs-recordPlayer-slider").attr("data-max", flight.recorder.tape.length - 2);
        $("body").addClass("geofs-record-playing");
        flight.recorder.currentStep = 0;
        flight.recorder.startPlayback()
    },
    exitPlayback: function () {
        geofs.doPause();
        flight.recorder.playing = !1;
        geofs.aircraft.instance.rigidBody.clearForces();
        flight.recorder.setStep(flight.recorder.currentStep, "set");
        flight.recorder.tape.splice(flight.recorder.currentStep);
        geofs.aircraft.instance.object3d.resetRotationMatrix();
        $("body").removeClass("geofs-record-playing")
    },
    pausePlayback: function () {
        flight.recorder.paused = !0
    },
    unpausePlayback: function () {
        flight.recorder.startPlayback()
    },
    startPlayback: function () {
        flight.recorder.playing = !0;
        flight.recorder.paused = !1;
        flight.recorder.setStep(flight.recorder.currentStep, "set");
        geofs.undoPause(2)
    },
    setStep: function (a, b) {
        a > flight.recorder.tape.length - 2 && (a = flight.recorder.tape.length - 2, flight.recorder.pausePlayback(), geofs.doPause());
        0 > a && (a = 0);
        if (!flight.recorder.tape[a]) return geofs.doPause(), !1;
        flight.recorder.currentStep = a;
        if ("slide" == b || "set" == b) flight.recorder.liveRecord = Object.assign({}, flight.recorder.tape[a]), flight.interpolator.setAircraft(flight.recorder.liveRecord), geofs.aircraft.instance.render();
        b && "set" != b || $(".geofs-recordPlayer-slider").slider("value", a);
        b = clamp(flight.recorder.tape[a + 1].time - flight.recorder.liveRecord.time, 1, 1E3);
        flight.recorder.deltaRecord = flight.interpolator.computeDeltaRecord(flight.recorder.liveRecord, flight.recorder.tape[a + 1], b);
        return !0
    },
    play: function (a) {
        if (!flight.recorder.paused) {
            flight.interpolator.increment(flight.recorder.liveRecord, flight.recorder.deltaRecord, a);
            for (a = flight.recorder.currentStep; flight.recorder.tape[a + 1] && flight.recorder.tape[a + 1].time - flight.recorder.liveRecord.time <
                flight.recorder.frequency;) a++;
            a > flight.recorder.currentStep ? flight.recorder.setStep(a) : 1E3 < flight.recorder.tape[a + 1].time - flight.recorder.liveRecord.time && flight.recorder.setStep(a + 1, "set")
        }
    }
};
flight.sharing = {
    minSafeTimeDelta: 250,
    start: function () {
        flight.sharing.reset();
        flight.sharing.on = !0
    },
    stop: function () {
        flight.sharing.reset();
        flight.sharing.on = !1
    },
    reset: function () {
        flight.sharing.liveRecord = null;
        flight.sharing.deltaRecord = null;
        geofs.aircraft.instance.rigidBody.clearForces();
        flight.sharing.lastRecord && flight.sharing.on && flight.interpolator.setAircraft(flight.sharing.lastRecord)
    },
    peerUpdate: function (a) {
        if (flight.sharing.lastRecord)
            if (flight.sharing.liveRecord) {
                var b = a.time - flight.sharing.liveRecord.time;
                Math.abs(flight.sharing.liveRecord.time - flight.sharing.lastRecord.time) > flight.sharing.minSafeTimeDelta && (flight.sharing.liveRecord = Object.assign({}, flight.sharing.lastRecord), b = a.time - flight.sharing.liveRecord.time);
                0 != b && (flight.sharing.lastRecord = Object.assign({}, a), flight.sharing.deltaRecord = flight.interpolator.computeDeltaRecord(flight.sharing.liveRecord, flight.sharing.lastRecord, b))
            } else flight.sharing.liveRecord = Object.assign({}, a);
        else flight.sharing.lastRecord = Object.assign({}, a)
    },
    update: function (a) {
        flight.sharing.liveRecord &&
            flight.sharing.deltaRecord && flight.interpolator.increment(flight.sharing.liveRecord, flight.sharing.deltaRecord, a)
    }
};
flight.interpolator = {
    computeDeltaRecord: function (a, b, c) {
        c = 1 / c;
        var d = M3.sub(b.coord, a.coord);
        d[3] = fixAngle(d[3]);
        d[4] = fixAngle(d[4]);
        d[5] = fixAngle(d[5]);
        var e = M3.sub(b.controls, a.controls);
        a = M3.sub(b.velocities, a.velocities);
        d = M3.scale(d, c);
        e = M3.scale(e, c);
        a = M3.scale(a, c);
        return {
            coord: d,
            controls: e,
            velocities: a
        }
    },
    increment: function (a, b, c) {
        a.time += c;
        a.coord = M3.add(a.coord, M3.scale(b.coord, c));
        a.coord[3] = fixAngle(a.coord[3]);
        a.coord[4] = fixAngle(a.coord[4]);
        a.coord[5] = fixAngle(a.coord[5]);
        a.controls = M3.add(a.controls,
            M3.scale(b.controls, c));
        a.velocities = M3.add(a.velocities, M3.scale(b.velocities, c));
        flight.interpolator.setAircraft(a)
    },
    setAircraft: function (a) {
        var b = a.coord,
            c = [b[0], b[1], b[2]];
        b = [b[3], b[4], b[5]];
        var d = a.controls;
        controls.rawPitch = d[0];
        controls.pitch = d[0];
        controls.roll = d[1];
        controls.yaw = d[2];
        controls.throttle = d[3];
        controls.gear.position = d[4];
        controls.flaps.position = d[5];
        controls.airbrakes.position = d[6];
        geofs.aircraft.instance.engine.on = a.state[0];
        d = [a.velocities[3], a.velocities[4], a.velocities[5]];
        geofs.aircraft.instance.rigidBody.setLinearVelocity([a.velocities[0], a.velocities[1], a.velocities[2]]);
        geofs.aircraft.instance.rigidBody.setAngularVelocity(d);
        geofs.aircraft.instance.object3d.compute(c);
        geofs.aircraft.instance.place(c, b)
    }
};
flight.terrainElevationManagement = function () {
    var a = geofs.aircraft.instance;
    a.collResult = geofs.getCollisionResult([a.llaLocation[0], a.llaLocation[1], 0], null, null, flight.currentAltitudeTestContext);
    a.collResult.normal = geofs.getNormalFromCollision(a.collResult, flight.currentAltitudeTestContext);
    var b = a.collResult.location[2];
    geofs.groundElevation = b;
    var c = geofs.getGroundAltitude(a.lastLlaLocation[0], a.lastLlaLocation[1], flight.pastAltitudeTestContext).location[2];
    if (!flight.recorder.playing) {
        var d = c -
            flight.elevationAtPreviousLocation;
        flight.skipCollisionResponse = !1;
        if (.2 < Math.abs(d) && geofs.cautiousWithTerrain) {
            if (a.absoluteStartAltitude) 0 > d && (a.llaLocation[2] = a.startAltitude);
            else if (geofs.cautiousWithTerrain || c > a.llaLocation[2]) a.llaLocation[2] += d;
            a.groundContact && (a.llaLocation[2] = b + a.definition.startAltitude, flight.skipCollisionResponse = !0);
            geofs.probeTerrain()
        }
        geofs.cautiousWithTerrain && a.absoluteStartAltitude && b + a.definition.startAltitude > a.llaLocation[2] && (a.llaLocation[2] = b + a.definition.startAltitude +
            100, flight.skipCollisionResponse = !0);
        flight.elevationAtPreviousLocation = b;
        a.lastLlaLocation = a.llaLocation
    }
};
flight.reset = function () {
    flight.currentAltitudeTestContext = {};
    flight.pastAltitudeTestContext = {}
};
"use strict";
var physics = window.physics || {};

function rigidBody() {
    this.s_inverseMass = this.mass = 0;
    this.reset();
    this.minLinearVelocity = .1;
    this.minAngularVelocity = .01
}
rigidBody.prototype.reset = function () {
    this.v_linearVelocity = [0, 0, 0];
    this.v_angularVelocity = [0, 0, 0];
    this.v_totalForce = [0, 0, 0];
    this.v_totalTorque = [0, 0, 0];
    this.v_prevLinearVelocity = [0, 0, 0];
    this.v_prevTotalTorque = [0, 0, 0];
    this.v_acceleration = [0, 0, 0];
    this.v_torque = [0, 0, 0]
};
rigidBody.prototype.setMassProps = function (a, b) {
    b = b || .1;
    $.isArray(b) || (b = [b, b, b]);
    this.mass = a;
    this.s_inverseMass = 1 / a;
    this.v_localInvInertia = [b[0] / a, b[1] / a, b[2] / a];
    this.m_localInvInertiaTensor = [
        [this.v_localInvInertia[0], 0, 0],
        [0, this.v_localInvInertia[1], 0],
        [0, 0, this.v_localInvInertia[2]]
    ];
    this.m_worldInvInertiaTensor = M33.dup(this.m_localInvInertiaTensor);
    this.gravityForce = [0, 0, -GRAVITY * a]
};
rigidBody.prototype.getLinearVelocity = function () {
    return this.v_linearVelocity
};
rigidBody.prototype.getAngularVelocity = function () {
    return this.v_angularVelocity
};
rigidBody.prototype.setLinearVelocity = function (a) {
    this.v_linearVelocity = a
};
rigidBody.prototype.setAngularVelocity = function (a) {
    this.v_angularVelocity = a
};
rigidBody.prototype.getVelocityInLocalPoint = function (a) {
    return V3.add(this.v_linearVelocity, V3.cross(a, this.v_angularVelocity))
};
rigidBody.prototype.getForceInLocalPoint = function (a) {
    var b = V3.add(this.v_totalForce, V3.cross(a, this.v_totalTorque));
    return V3.add(b, V3.scale(this.getVelocityInLocalPoint(a), this.mass))
};
rigidBody.prototype.applyCentralForce = function (a) {
    this.v_totalForce = V3.add(this.v_totalForce, a)
};
rigidBody.prototype.applyTorque = function (a) {
    this.v_totalTorque = V3.add(this.v_totalTorque, a)
};
rigidBody.prototype.applyForce = function (a, b) {
    this.applyCentralForce(a);
    this.applyTorque(V3.cross(a, b))
};
rigidBody.prototype.applyCentralImpulse = function (a) {
    this.v_linearVelocity = V3.add(this.v_linearVelocity, V3.scale(a, this.s_inverseMass))
};
rigidBody.prototype.applyTorqueImpulse = function (a) {
    this.v_angularVelocity = V3.add(this.v_angularVelocity, M33.multiplyV(this.m_worldInvInertiaTensor, a))
};
rigidBody.prototype.applyImpulse = function (a, b) {
    this.applyCentralImpulse(a);
    this.applyTorqueImpulse(V3.cross(a, b))
};
rigidBody.prototype.computeJacobian = function (a, b, c, d) {
    a = -(1 + a) * b;
    b = this.s_inverseMass;
    c = V3.dot(d, V3.cross(c, M33.multiplyV(this.m_worldInvInertiaTensor, V3.cross(d, c))));
    return a / (b + c)
};
rigidBody.prototype.computeImpulse = function (a, b, c, d) {
    a = this.computeJacobian(a, b, c, d);
    return V3.scale(d, a)
};
rigidBody.prototype.integrateVelocities = function (a) {
    this.v_linearVelocity = V3.add(this.v_linearVelocity, V3.scale(this.v_totalForce, this.s_inverseMass * a));
    this.v_angularVelocity = V3.add(this.v_angularVelocity, M33.multiplyV(this.m_worldInvInertiaTensor, V3.scale(this.v_totalTorque, a)))
};
rigidBody.prototype.integrateTransform = function (a) {
    var b = V3.length(this.v_linearVelocity),
        c = V3.length(this.v_angularVelocity);
    if (b > this.minLinearVelocity || c > this.minAngularVelocity) b = geofs.aircraft.instance, c = xyz2lla(V3.scale(this.v_linearVelocity, a), b.llaLocation), b.llaLocation = V3.add(b.llaLocation, c), a = V3.scale(this.v_angularVelocity, a), a = M33.transformByTranspose(b.object3d._initialRotation, a), b.object3d.rotateInitialRotation(a);
    this.clearForces()
};
rigidBody.prototype.setCurrentAcceleration = function (a, b) {
    this.v_acceleration = V3.scale(V3.sub(this.v_linearVelocity, this.v_prevLinearVelocity), a);
    this.v_acceleration = V3.add([0, 0, GRAVITY], this.v_acceleration);
    this.v_torque = V3.scale(V3.sub(this.v_angularVelocity, this.v_prevTotalTorque), a);
    this.v_prevLinearVelocity = V3.dup(this.v_linearVelocity);
    this.v_prevTotalTorque = V3.dup(this.v_angularVelocity)
};
setInterval(function () {
    if (geofs.aircraft.instance && geofs.aircraft.instance.object3d) try {
        geofs.aircraft.instance.object3d.resetRotationMatrix()
    } catch (a) {
        geofs.debug.error(a, "resetRotationMatrix interval")
    }
}, 1E4);
rigidBody.prototype.clearForces = function () {
    this.v_totalForce = [0, 0, 0];
    this.v_totalTorque = [0, 0, 0]
};
rigidBody.prototype.saveState = function () {
    this.savedLinearVelocity = V3.dup(this.v_linearVelocity);
    this.savedAngularVelocity = V3.dup(this.v_angularVelocity)
};
rigidBody.prototype.restoreState = function () {
    this.clearForces();
    this.v_linearVelocity = V3.dup(this.savedLinearVelocity);
    this.v_angularVelocity = V3.dup(this.savedAngularVelocity)
};
"use strict";
geofs.aircraft = {
    "default": 1
};
geofs.aircraft.Aircraft = function (a) {
    geofs.aircraft.instance = this;
    this.engine = {};
    this.engine.rpm = 0;
    this.engine.on = !0;
    this.brakesOn = !1;
    this.groundContact = !0;
    this.lastLlaLocation = this.llaLocation = [a[0], a[1], a[2]];
    this.collResult = {
        location: [0, 0, 0],
        normal: [0, 0, 1]
    };
    this.relativeAltitude = 0;
    this.htr = [0, 0, 0];
    this.htrAngularSpeed = [0, 0, 0];
    this.veldir = [0, 0, 0];
    this.trueAirSpeed = 0;
    this.reset()
};
geofs.aircraft.Aircraft.prototype.getCurrentCoordinates = function () {
    var a = [];
    a[0] = this.llaLocation[0];
    a[1] = this.llaLocation[1];
    a[2] = this.llaLocation[2];
    .5 > a[2] || this.groundContact ? (this.groundContact = !0, a[2] = 0) : a[4] = !0;
    a[3] = geofs.aircraft.instance.htr[0];
    return a
};
geofs.aircraft.Aircraft.prototype.addShadow = function () {
    this.removeShadow();
    if (!this.aircraftRecord) return !1;
    var a = this.aircraftRecord.fullPath + (this.definition.shadowFile || "shadow.glb"),
        b = V3.scale(this.definition.shadowBox, this.definition.scale);
    b[2] = 0;
    this.shadow = new geofs.shadow(a, b);
    return !0
};
geofs.aircraft.Aircraft.prototype.removeShadow = function () {
    this.shadow && (this.shadow.destroy(), this.shadow = null)
};
geofs.aircraft.Aircraft.prototype.loadDefault = function (a) {
    a && ui.notification.show(a);
    geofs.aircraft.instance.change(geofs.aircraft.default, null, !0)
};
geofs.aircraft.Aircraft.prototype.parseRecord = function (a) {
    try {
        var b = JSON.parse(a);
        this.aircraftRecord = b;
        if (b.definition) {
            var c = atob(b.definition);
            var d = JSON.parse(c)[0]
        }
        if (b.error) {
            this.loadDefault(b.error);
            return
        }
    } catch (e) {
        return
    }
    return d
};
geofs.aircraft.Aircraft.prototype.change = function (a, b, c, d) {
    var e = this;
    a = a || this.aircraftRecord.id;
    c = this.load(a, this.getCurrentCoordinates(), c, d);
    c.then(function () {
        e.loadLivery(b)
    });
    geofs.api.analytics.event("aircraft", geofs.aircraftList[a].name);
    return c
};
geofs.aircraft.Aircraft.prototype.loadLivery = function (a) {
    var b = this;
    if (a) {
        this.liveryId = a;
        var c = "cockpit" == geofs.camera.currentModeName ? "cockpit" : "root",
            d = this.parts[c]["3dmodel"];
        d && d.readyPromise.then(function () {
            b.parts[c].textures.forEach(function (e) {
                geofs.api.changeModelTexture(d, b.aircraftRecord.fullPath + e.filename + a + ".jpg", e.index)
            })
        })
    } else this.liveryId = null
};
geofs.aircraft.Aircraft.prototype.loadWithLivery = function (a, b, c) {
    var d = this;
    a = this.load(a, b);
    c && a.then(function () {
        d.loadLivery(c)
    })
};
geofs.aircraft.Aircraft.prototype.load = function (a, b, c, d) {
    var e = this,
        f = geofs.aircraftList[a] && geofs.aircraftList[a].local ? geofs.aircraftList[a].path + "aircraft.json" : geofs.url + "/models/aircraft/load.php";
    return new Promise(function (g, k) {
        e.id != a || c ? (geofs.doPause(1), e.unloadAircraft(), $.ajax(f, {
            data: {
                id: a,
                kc: geofs.killCache
            },
            dataType: "text",
            success: function (m, n, x) {
                if ("error" != n) {
                    geofs.aircraftList[a] && geofs.aircraftList[a].local && (m = JSON.stringify({
                        id: a,
                        name: geofs.aircraftList[a].name,
                        fullPath: geofs.aircraftList[a].path,
                        isPremium: !1,
                        isCommunity: !1,
                        definition: btoa(m)
                    }));
                    var q = e.parseRecord(m)
                }
                q ? (geofs.aircraftList[a] && !geofs.aircraftList[a].local && (e.fullPath = geofs.url + e.aircraftRecord.fullPath), e.id = a, e.init(q, b, c, d)) : e.loadDefault("Could not load aircraft file");
                g()
            },
            error: function (m, n, x) {
                a != geofs.aircraft.default && e.loadDefault("Could not load aircraft file" + x);
                k()
            }
        })) : g()
    })
};
geofs.aircraft.Aircraft.prototype.init = function (a, b, c, d) {
    this.setup = this.definition = a;
    this.controllers = {
        pitch: {
            recenter: !1,
            sensitivity: 1,
            ratio: 1
        },
        roll: {
            recenter: !0,
            sensitivity: 1,
            ratio: 1
        },
        yaw: {
            recenter: !0,
            sensitivity: 1,
            ratio: 1
        }
    };
    this.parts = {};
    this.airfoils = [];
    this.engines = [];
    this.balloons = [];
    this.wheels = [];
    this.collisionPoints = [];
    this.lights = [];
    this.suspensions = [];
    this.definition.scale = this.definition.scale || 1;
    this.definition.startupTime = this.definition.startupTime || 1;
    this.definition.com = this.definition.com || [0, 0, 0];
    this.definition.startAltitude *= this.definition.scale;
    this.definition.cockpitScaleFix = this.definition.cockpitScaleFix || 1;
    this.definition.motionSensitivity = this.definition.motionSensitivity || 1;
    for (var e in this.definition.cameras) a = this.definition.cameras[e], a.distance *= this.definition.scale, a.position && (a.position = V3.scale(a.position, this.definition.scale));
    for (e = 0; e < this.definition.parts.length; e++) this.parts[this.definition.parts[e].name] = this.definition.parts[e];
    this.parts.root || (e = {
        name: "root",
        position: this.definition.com || [0, 0, 0]
    }, this.definition.parts.push(e), this.parts.root = e);
    geofs.isApp && (this.parts.camera = {
        name: "camera",
        position: [.25, 0, 0]
    }, this.parts.camera.object3d = new Object3D(this.parts.camera));
    instruments.init(this.definition.instruments);
    this.addParts(this.definition.parts, this.aircraftRecord.fullPath, this.definition.scale);
    this.object3d = this.parts.root.object3d;
    e = this.boundingSphereRadius = 0;
    for (a = this.collisionPoints.length; e < a; e++) this.boundingSphereRadius = Math.max(this.boundingSphereRadius,
        V3.length(this.collisionPoints[e]));
    this.boundingSphereRadius *= 1.5;
    for (e in this.definition.contactProperties) a = this.definition.contactProperties[e], a.lockSpeed = a.lockSpeed || .01;
    this.object3d.compute(this.llaLocation);
    this.object3d.render(this.llaLocation);
    this.rigidBody || (this.rigidBody = new rigidBody);
    this.rigidBody.setMassProps(this.definition.mass, this.definition.tensorFactor);
    this.definition.RPM2PropAS = this.definition.driveRatio / 60 * 360;
    this.engine.invRPMRange = 1 / (this.definition.maxRPM - this.definition.minRPM);
    geofs.simpleShadowOn = !1;
    geofs.useSimpleShadow(!geofs.api.renderingSettings.dropShadow);
    this._cockpitLoaded = !1;
    audio.init(this.definition.sounds);
    if (!c || d) controls.reset(), geofs.camera.reset();
    this.definition.autopilot ? controls.autopilot.init && controls.autopilot.init() : controls.autopilot.turnOff();
    geofs.flyTo(b, !0)
};
geofs.aircraft.Aircraft.prototype.loadCockpit = function () {
    var a = this,
        b = geofs.aircraft.instance.aircraftRecord.id,
        c = geofs.aircraftList[b] && geofs.aircraftList[b].local ? geofs.aircraftList[b].path + "cockpit/cockpit.json" : geofs.url + "/models/aircraft/load.php",
        d = new Promise(function (e, f) {
            a._cockpitLoaded ? e() : geofs.aircraft.instance.definition.cockpitModel ? $.ajax(c, {
                data: {
                    id: b,
                    kc: geofs.killCache,
                    cockpit: !0
                },
                dataType: "text",
                success: function (g, k) {
                    geofs.aircraftList[b] && geofs.aircraftList[b].local && (g = JSON.stringify({
                        id: b,
                        name: geofs.aircraftList[b].name,
                        fullPath: geofs.aircraftList[b].path,
                        isPremium: !1,
                        isCommunity: !1,
                        definition: btoa(g)
                    }));
                    if (g = a.parseRecord(g)) a.cockpitSetup = g, a._cockpitLoaded = !0, geofs.aircraftList[b].local || (a.aircraftRecord.fullPath = geofs.url + a.aircraftRecord.fullPath), a.addParts(g.parts, a.aircraftRecord.fullPath + "cockpit/", a.cockpitSetup.scale), instruments.rescale(), a.definition.cockpitScaleFix && a.fixCockpitScale(a.definition.cockpitScaleFix), a.object3d.compute(a.llaLocation), a.placeParts(), a.render();
                    e()
                },
                error: function (g, k) {
                    f()
                }
            }) : (geofs.aircraft.instance._cockpitLoaded = !0, f())
        });
    d.then(function () {
        a.loadLivery(a.liveryId)
    });
    return d
};
geofs.aircraft.Aircraft.prototype.addParts = function (a, b, c) {
    c = c || 1;
    for (var d = 0; d < a.length; d++) {
        var e = a[d];
        if (e.include) {
            var f = geofs.includes[e.include];
            e = Object.assign(e, f[0]);
            for (var g = 1; g < f.length; g++) {
                var k = Object.assign({}, f[g], {
                    parent: e.name
                });
                k.name = e.name + k.name;
                a.push(k)
            }
        }
        if (e.indices && 0 < e.indices) {
            for (g = 2; g <= e.indices; g++) k = Object.assign({}, e, {
                indices: null
            }), k.name = e.name + g, k.node += g, a.push(k);
            e.name += "1";
            e.node += "1"
        }
    }
    for (d = 0; d < a.length; d++) {
        e = a[d];
        e.points = e.points || {};
        e.type = e.type || !1;
        e.brakesController = e.brakesController || !1;
        e.animations = e.animations || [];
        geofs.aircraft.instance.parts[e.name] = e;
        geofs.aircraft.instance.addOffsets(e, c);
        e.forceDirection && (e.forceDirection = AXIS_TO_INDEX[e.forceDirection]);
        e.rotation && (e.rotation = V3.toRadians(e.rotation));
        e.scale = e.scale || [1, 1, 1];
        e.scale = V3.scale(e.scale, c);
        e.originalScale = e.scale;
        e.model && (f = e.model, b && "/" != e.model[0] && !e.include && (f = b + e.model), e["3dmodel"] = geofs.loadModel(f, {
            castShadows: e.noCastShadows ? !1 : !0,
            receiveShadows: e.noReceiveShadows ?
                !1 : !0,
            incrementallyLoadTextures: !1
        }));
        "GlassPanel" == e.type && (f = new geofs.GlassPanel(e), e.entity = f.entity, instruments.add(f, e.name));
        e.light && (e.lightBillboard = new geofs.fx.light(null, e.light, {
            scale: .2
        }), geofs.aircraft.instance.lights.push(e));
        e.object3d = new Object3D(e);
        e.suspension && (e.suspension.length ? (e.suspension.origin = [e.collisionPoints[0][0], e.collisionPoints[0][1], e.collisionPoints[0][2] + e.suspension.length], f = e.suspension.length) : (e.suspension.origin = [e.collisionPoints[0][0], e.collisionPoints[0][1],
            0
        ], f = -e.collisionPoints[0][2]), e.suspension.restLength = f, "rotation" == e.suspension.motion ? (f = V3.length(e.collisionPoints[0]), f = Math.atan2(e.collisionPoints[0][0] / f, e.collisionPoints[0][2] / f), f = {
            type: "rotate",
            axis: e.suspension.axis || "Y",
            value: e.name + "Suspension",
            ratio: (0 > f ? f + HALF_PI : f - HALF_PI) * RAD_TO_DEGREES * (e.suspension.ratio || 1)
        }) : f = {
            type: "translate",
            axis: e.suspension.axis || "Z",
            value: e.name + "Suspension",
            ratio: e.suspension.ratio || 1
        }, e.animations.push(f), e.suspension.hardPoint = e.suspension.hardPoint ||
        .5, e.points.suspensionOrigin = V3.dup(e.suspension.origin), geofs.aircraft.instance.suspensions.push(e));
        for (g = 0; g < e.animations.length; g++) f = e.animations[g], f.ratio = f.ratio || 1, f.offset = f.offset || 0, f.currentValue = null, f.delay && (f.ratio /= 1 - Math.abs(f.delay)), "rotate" == f.type && (k = f.method || "rotate", "parent" == f.frame && (k = "rotateParentFrame"), f.rotationMethod = e.object3d[k + f.axis]), "translate" == f.type && (geofs.isArray(f.axis) || (f.axis = AXIS_TO_VECTOR[f.axis]));
        "wheel" == e.type && (e.radius = e.radius || 1, e.arcDegree =
            e.radius * TWO_PI / 360, e.angularVelocity = 0, geofs.aircraft.instance.wheels.push(e));
        "airfoil" == e.type && (e.lift = 0, geofs.aircraft.instance.airfoils.push(e), e.stalls = e.stalls || !1, e.stallIncidence = e.stallIncidence || 12, e.zeroLiftIncidence = e.zeroLiftIncidence || 16, e.aspectRatio = e.aspectRatio || DEFAULT_AIRFOIL_ASPECT_RATIO, e.aspectRatioCoefficient = e.aspectRatio / e.aspectRatio + 2);
        "engine" == e.type && (e.rpm = 0, geofs.aircraft.instance.definition.originalInertia = geofs.aircraft.instance.definition.engineInertia, geofs.aircraft.instance.engines.push(e),
            e.contrail && (e.contrailEmitter = new geofs.fx.ParticleEmitter({
                off: !0,
                anchor: e.points.contrailAnchor,
                duration: 1E10,
                rate: .05,
                life: 4E4,
                easing: "easeOutQuart",
                startScale: .01,
                endScale: .01,
                randomizeStartScale: .02,
                randomizeEndScale: .15,
                startOpacity: .1,
                endOpacity: 1E-5,
                startRotation: "random",
                texture: "whitesmoke"
            })));
        "balloon" == e.type && (e.temperature = e.initialTemperature || 0, e.coolingSpeed = e.coolingSpeed || 0, geofs.aircraft.instance.balloons.push(e));
        if (e.collisionPoints) {
            f = e.collisionPoints;
            g = geofs.aircraft.instance.definition.contactProperties[e.contactType ||
                e.type];
            for (k = 0; k < f.length; k++) f[k].part = e, f[k].contactProperties = g, geofs.aircraft.instance.collisionPoints.push(f[k]);
            e.buoyancy || (e.buoyancy = "airfoil" == e.type ? Math.min(this.definition.mass, 2E4) : 1)
        }
        e.controller && (geofs.aircraft.instance.controllers[e.controller.name] = e.controller)
    }
    for (d = 0; d < a.length; d++) e = a[d], "root" != e.name && (e.parent || (e.parent = "root"), geofs.aircraft.instance.parts[e.parent].object3d.addChild(e.object3d)), e.node && e.object3d.setModel(e.object3d.findModelInAncestry())
};
geofs.aircraft.Aircraft.prototype.setVisibility = function (a) {
    this.object3d && this.object3d.setVisibility(a)
};
geofs.aircraft.Aircraft.prototype.unloadAircraft = function () {
    for (var a in geofs.aircraft.instance.parts) {
        var b = geofs.aircraft.instance.parts[a];
        b.object3d && (b.object3d.destroy(), delete geofs.aircraft.instance.parts[a].object3d);
        b.contrailEmitter && b.contrailEmitter.destroy()
    }
    geofs.aircraft.instance.parts = null;
    this.removeShadow();
    if (geofs.aircraft.instance.lights)
        for (a = 0, b = geofs.aircraft.instance.lights.length; a < b; a++) geofs.aircraft.instance.lights[a].lightBillboard.destroy()
};
geofs.aircraft.Aircraft.prototype.reset = function (a) {
    this.crashNotified = this.crashed = !1;
    this.groundContact = a;
    this.arrestingCableContact = null;
    for (var b in this.collisionPoints) this.collisionPoints[b].lastGroundAltitude = null, this.collisionPoints[b].part.contact = null;
    a ? (geofs.animation.values.gearPosition = 0, controls.gear.position = 0, controls.gear.target = 0) : (geofs.animation.values.gearPosition = 1, controls.gear.position = 1, controls.gear.target = 1);
    this.rigidBody && this.rigidBody.reset();
    for (b in this.parts) {
        a =
            this.parts[b];
        a.object3d && a.object3d.reset();
        if (a.animations)
            for (var c = 0; c < a.animations.length; c++) a.animations[c].currentValue = null;
        "wheel" == a.type && (a.angularVelocity = .01, a.oldAngularVelocity = .01)
    }
    this.engine.on = !0;
    if (this.engines)
        for (b = 0; b < this.engines.length; b++) this.engines[b].rpm = this.definition.minRPM;
    this.engine.rpm = 0;
    geofs.animation.resetValues({
        altitude: 0,
        altitudeMeters: 0,
        prop: 0,
        throttle: 0,
        yaw: 0,
        pitch: 0,
        roll: 0,
        atilt: 0,
        aroll: 0,
        cameraAircraftDistance: 0,
        kias: 0,
        mach: 0,
        heading: 0,
        climbrate: 0,
        optionalAnimatedPartPosition: 0,
        turnrate: 0
    });
    this.animationValue = geofs.animation.values;
    controls.autopilot.resetPIDs && controls.autopilot.resetPIDs()
};
geofs.aircraft.Aircraft.prototype.place = function (a, b) {
    this.lastLlaLocation = this.llaLocation = a;
    b && (this.htr = V3.dup(b), b = V3.toRadians(b), this.object3d.setInitiallRotation([b[1], b[2], b[0]]));
    this.placeParts()
};
geofs.aircraft.Aircraft.prototype.placeParts = function (a) {
    a = a || geofs.aircraft.instance.parts;
    for (var b in a) this.placePart(a[b])
};
geofs.aircraft.Aircraft.prototype.placePart = function (a) {
    if (a.animations) {
        a.object3d.resetAnimatedTransform();
        for (var b = 0, c = a.animations.length; b < c; b++) {
            var d = a.animations[b],
                e = geofs.animation.filter(d);
            switch (d.type) {
                case "rotate":
                    e *= DEGREES_TO_RAD;
                    d.rotationMethod.call(a.object3d, e);
                    e = null;
                    break;
                case "scale":
                    var f = V3.add(a.originalScale, V3.scale(d.axis, e));
                    a.object3d.setScale(f);
                    break;
                case "translate":
                    a.object3d.translate(V3.scale(d.axis, e));
                    e = null;
                    break;
                case "opacity":
                    a.object3d.setOpacity(e);
                    break;
                case "show":
                    0 >= e && a.object3d.visible && a.object3d.setVisibility(!1);
                case "justshow":
                    0 < e && (a.object3d.visible || a.object3d.setVisibility(!0));
                    break;
                case "hide":
                    0 >= e && !a.object3d.visible && a.object3d.setVisibility(!0);
                case "justhide":
                    0 < e && a.object3d.visible && a.object3d.setVisibility(!1);
                    break;
                case "sound":
                    0 < e ? d.playing || (d.playing = !0, f = function () {
                        audio.playSoundLoop(d.name, d.loop)
                    }, d.retard ? (clearTimeout(d.timeOut), d.timeOut = setTimeout(f, d.retard)) : f()) : d.playing && (clearTimeout(d.timeOut), audio.stopSoundLoop(d.name),
                        d.playing = !1);
                    break;
                case "property":
                    a[d.name] = e
            }
            d.currentValue = e
        }
    }
};
geofs.aircraft.Aircraft.prototype.render = function () {
    this.object3d.render(this.llaLocation);
    this.shadow && this.shadow.setLocationRotation(this.llaLocation, this.htr)
};
geofs.aircraft.Aircraft.prototype.startEngine = function () {
    this.engine.on || !0 === geofs.aircraft.instance.crashed || (this.engine.on = !0, this.engine.startup = !0, geofs.aircraft.instance.definition.engineInertia = 2 / this.definition.startupTime, setTimeout(function () {
        geofs.aircraft.instance.engine.startup = !1;
        geofs.aircraft.instance.definition.engineInertia = geofs.aircraft.instance.definition.originalInertia
    }, 1E3 * this.definition.startupTime), audio.playStartup())
};
geofs.aircraft.Aircraft.prototype.stopEngine = function () {
    this.engine.on && (geofs.aircraft.instance.definition.engineInertia = 2 / (this.definition.shutdownTime || 1), controls.throttle = 0, this.engine.on = !1, audio.playShutdown())
};
geofs.aircraft.Aircraft.prototype.addOffsets = function (a, b) {
    a.position && !a.doNotScalePosition && (a.position = V3.scale(a.position, b));
    a.points.forceSourcePoint && (a.points.forceSourcePoint = V3.scale(a.points.forceSourcePoint, b));
    if (a.collisionPoints)
        for (var c = 0; c < a.collisionPoints.length; c++) a.collisionPoints[c] = V3.scale(a.collisionPoints[c], b);
    if (a.animations)
        for (c = 0; c < a.animations.length; c++) "translate" == a.animations[c].type && (a.animations[c].ratio *= b)
};
geofs.aircraft.Aircraft.prototype.fixCockpitScale = function (a) {
    if (a)
        for (var b in this.parts) {
            var c = this.parts[b];
            c.model && (c.object3d.setScale(V3.scale(c.originalScale, a)), 1 == a ? c.object3d.setScaleOffset(null) : c.object3d.setScaleOffset(a))
        }
};
geofs.aircraft.Aircraft.prototype.crash = function () {
    this.engine.on = !1;
    this.crashed = !0;
    new geofs.fx.ParticleEmitter({
        anchor: {
            worldPosition: [0, 0, 0]
        },
        duration: 1E3,
        rate: .01,
        life: 1E4,
        near: 10,
        startScale: .05,
        endScale: 1,
        startOpacity: .5,
        endOpacity: 1E-4,
        texture: "darkSmoke"
    })
};
"use strict";
window.objects = window.objects || {};
objects.clusterSize = 2;
objects.currentCellId;
objects.matrix = {};
objects.visible = [];
objects.list = {
    arrestingcable1: {
        location: [37.77972426349971, -122.60906294017778, 20.9],
        htr: [81, 0, 0],
        rotateModelOnly: !0,
        url: "models/objects/carrier/arrestingcable.glb",
        collisionRadius: 100,
        collisionTriangles: [
            [
                [-19, 0, 0],
                [16, -5, 0],
                [-17, 5, 0]
            ],
            [
                [16, -5, 0],
                [18, 0, 0],
                [-17, 5, 0]
            ]
        ],
        options: {
            castShadows: !1,
            receiveShadows: !1
        },
        arrestingCable: !0,
        arrestingCableHeight: .1
    },
    arrestingcable2: {
        location: [37.77961368856157, -122.6090416001922, 20.9],
        htr: [81, 0, 0],
        rotateModelOnly: !0,
        url: "models/objects/carrier/arrestingcable.glb",
        collisionRadius: 100,
        collisionTriangles: [
            [
                [-19, 0, 0],
                [16, -5, 0],
                [-17, 5, 0]
            ],
            [
                [16, -5, 0],
                [18, 0, 0],
                [-17, 5, 0]
            ]
        ],
        options: {
            castShadows: !1,
            receiveShadows: !1
        },
        arrestingCable: !0,
        arrestingCableHeight: .1
    },
    arrestingcable3: {
        location: [37.77949839257998, -122.6090189208378, 20.9],
        htr: [81, 0, 0],
        rotateModelOnly: !0,
        url: "models/objects/carrier/arrestingcable.glb",
        collisionRadius: 100,
        collisionTriangles: [
            [
                [-19, 0, 0],
                [16, -5, 0],
                [-17, 5, 0]
            ],
            [
                [16, -5, 0],
                [18, 0, 0],
                [-17, 5, 0]
            ]
        ],
        options: {
            castShadows: !1,
            receiveShadows: !1
        },
        arrestingCable: !0,
        arrestingCableHeight: .1
    },
    arrestingcable4: {
        location: [37.77938722299855, -122.6089982620678, 20.9],
        htr: [81, 0, 0],
        rotateModelOnly: !0,
        url: "models/objects/carrier/arrestingcable.glb",
        collisionRadius: 100,
        collisionTriangles: [
            [
                [-19, 0, 0],
                [16, -5, 0],
                [-17, 5, 0]
            ],
            [
                [16, -5, 0],
                [18, 0, 0],
                [-17, 5, 0]
            ]
        ],
        options: {
            castShadows: !1,
            receiveShadows: !1
        },
        arrestingCable: !0,
        arrestingCableHeight: .1
    },
    carrier: {
        location: [37.777228, -122.609482, 0],
        url: "models/objects/carrier/carrier.gltf",
        collisionRadius: 400,
        collisionTriangles: [
            [
                [12.6, 330,
                    20.9
                ],
                [0, 99.5, 20.9],
                [56, 334, 20.9]
            ],
            [
                [56, 334, 20.9],
                [0, 99.5, 20.9],
                [49, 0, 20.9]
            ],
            [
                [55, 295, 20.9],
                [49, 75, 20.9],
                [74.5, 288, 20.9]
            ],
            [
                [74.5, 288, 20.9],
                [49, 75, 20.9],
                [77.5, 107, 20.9]
            ],
            [
                [18, 63, 20.9],
                [23, 1, 20.9],
                [49, 1, 20.9]
            ],
            [
                [0, 330, 20.9],
                [75, 330, 20.9],
                [75, 330, 0]
            ],
            [
                [0, 330, 20.9],
                [75, 330, 0],
                [0, 330, 0]
            ]
        ],
        options: {
            castShadows: !0,
            receiveShadows: !0
        }
    },
    meigs: {
        location: [41.85875, -87.60812, 186],
        htr: [358, 0, 0],
        url: "models/objects/runway/meigs.gltf",
        options: {
            castShadows: !1,
            receiveShadows: !0
        },
        collisionRadius: 800,
        collisionTriangles: [
            [
                [-30,
                -600, 0
                ],
                [30, 600, 0],
                [-30, 600, 0]
            ],
            [
                [-30, -600, 0],
                [30, -600, 0],
                [30, 600, 0]
            ]
        ],
        intersectionCallback: function (a) {
            geofs.aircraft.instance.groundContact && geofs.api.doRetro()
        }
    }
};
objects.collidableObjectList = [];
objects.collidableObject = !1;
objects.init = function () {
    objects.preProcessObjects();
    setInterval(objects.updateVisibility, 1E4);
    setInterval(objects.updateCollidables, 2E3)
};
objects.preProcessObjects = function () {
    for (var a in objects.list) {
        var b = objects.list[a],
            c = (b.location[0] / objects.clusterSize).toFixed(0) + "/" + (b.location[1] / objects.clusterSize).toFixed(0);
        objects.matrix[c] = objects.matrix[c] || {};
        objects.matrix[c][a] = b;
        b.collisionTriangles = b.collisionTriangles || [];
        b.htr = b.htr || [0, 0, 0];
        c = b.rotateModelOnly ? M33.setFromEuler(V3.toRadians([0, 0, 0])) : M33.setFromEuler(V3.toRadians([b.htr[1], b.htr[2], b.htr[0]]));
        for (var d = 0, e = b.collisionTriangles.length; d < e; d++) {
            for (var f = b.collisionTriangles[d],
                g = 0; 3 > g; g++) f[g] = M33.transform(c, f[g]);
            f.u = V3.sub(f[1], f[0]);
            f.v = V3.sub(f[2], f[0]);
            f.n = V3.cross(f.u, f.v)
        }
    }
};
objects.updateVisibility = function () {
    var a = (geofs.aircraft.instance.llaLocation[0] / objects.clusterSize).toFixed(0) + "/" + (geofs.aircraft.instance.llaLocation[1] / objects.clusterSize).toFixed(0);
    a != objects.currentCellId && (objects.unloadMatrixModels(objects.currentCellId), objects.loadMatrixModels(a), objects.currentCellId = a)
};
objects.unloadMatrixModels = function (a) {
    for (var b in objects.matrix[a]) objects.matrix[a][b].model && (geofs.api.destroyModel(objects.matrix[a][b].model), objects.matrix[a][b].model = null)
};
objects.loadMatrixModels = function (a) {
    for (var b in objects.matrix[a]) {
        var c = objects.matrix[a][b];
        c.url && (c.model = geofs.loadModel(c.url, c.options), geofs.api.setModelPositionOrientationAndScale(c.model, c.location, c.htr))
    }
};
objects.updateCollidables = function () {
    objects.collidableObjectList = [];
    objects.collidableObject = !1;
    for (var a in objects.matrix[objects.currentCellId]) {
        var b = objects.matrix[objects.currentCellId][a],
            c = lla2xyz(V3.sub(geofs.aircraft.instance.llaLocation, b.location), geofs.aircraft.instance.llaLocation);
        V3.length(c) < b.collisionRadius && (b.metricOffset = c, objects.collidableObject = !0, objects.collidableObjectList.push(b))
    }
};
objects.getAltitudeAtLocation = function (a, b) {
    if (objects.collidableObject)
        for (var c = [a, b, 1E5], d = 0, e = objects.collidableObjectList.length; d < e; d++)
            for (var f = objects.collidableObjectList[d], g = lla2xyz(V3.sub(c, f.location), f.location), k = [g[0], g[1], 0], m = 0, n = f.collisionTriangles.length; m < n; m++) {
                var x = f.collisionTriangles[m],
                    q = intersect_RayTriangle([g, k], x);
                if (q) {
                    if (f.intersectionCallback) try {
                        f.intersectionCallback(q)
                    } catch (z) {
                        geofs.debug.error(z, "objects.getAltitudeAtLocation")
                    }
                    return {
                        location: [a, b, q.point[2] +
                            f.location[2]
                        ],
                        normal: V3.normalize(x.n),
                        object: f
                    }
                }
            }
};
"use strict";
var controls = window.controls || {};
controls = {
    states: {},
    mouse: {}
};
controls.mouse.down = !1;
controls.mouse.orbit = {};
controls.mouse.offset = {
    ratioX: .01,
    ratioY: .01
};
controls.keyboard = {};
controls.keyboard.rollIncrement = .5;
controls.keyboard.pitchIncrement = .5;
controls.keyboard.yawIncrement = .5;
controls.keyboard.throttleIncrement = .8;
controls.keyboard.recenterRatio = .05;
controls.keyboard.override = !1;
controls.keyboard.overrideRudder = !1;
controls.keyboard.exponential = 0;
controls.touch = {
    pitch: 0,
    roll: 0,
    yaw: 0,
    throttle: 0
};
controls.orientation = {
    values: [0, 0, 0],
    generalMultiplier: 1
};
controls.mixYawRoll = !0;
controls.exponential = 1;
controls.mixYawRollQuantity = 1;
controls.mode = "mouse";
controls.init = function () {
    controls.reset();
    geofs.addResizeHandler(controls.initViewportDimensions, controls);
    $(document).on("keydown", controls.keyDown).on("keyup", controls.keyUp);
    window.onfocus = function () {
        controls.controlKeyPressed = !1
    };
    controls.mouseHandler = function (a) {
        if (!1 === controls.mouse.down || geofs.api.nativeMouseHandling) "mouse" == controls.mode && (controls.mouse.xValue = clamp((a.pageX - controls.mouse.oX - controls.mouse.cX) * controls.mouse.rX, -1, 1), controls.mouse.yValue = clamp((a.pageY - controls.mouse.tY -
            controls.mouse.cY) * controls.mouse.rY, -1, 1), controls.keyboard.override = !1);
        else {
            var b = controls.mouse.lastX - a.pageX,
                c = controls.mouse.lastY - a.pageY;
            1 == controls.mouse.down && (controls.controlKeyPressed ? geofs.camera.translate(b * controls.mouse.offset.ratioX, 0, -c * controls.mouse.offset.ratioY) && (a.preventDefault(), a.stopPropagation && a.stopPropagation(), a.stopImmediatePropagation && a.stopImmediatePropagation()) : geofs.camera.rotate(b * controls.mouse.orbit.ratioX, c * controls.mouse.orbit.ratioY) && (a.preventDefault(),
                a.stopPropagation && a.stopPropagation(), a.stopImmediatePropagation && a.stopImmediatePropagation()));
            3 == controls.mouse.down && geofs.camera.translate(0, -c * controls.mouse.orbit.ratioZ, 0) && (a.preventDefault(), a.stopImmediatePropagation && a.stopImmediatePropagation());
            controls.mouse.lastX = a.pageX;
            controls.mouse.lastY = a.pageY
        }
    };
    $(document).on("click", ".geofs-orientationReset, .geofs-orientationCalibrate", function () {
        controls.orientation.recenter()
    });
    $(document).on("mousemove", function (a) {
        controls.mouseHandler(a)
    });
    controls.mouseDownHandler = function (a) {
        controls.mouse.down = a.which;
        0 === controls.mouse.down && (controls.mouse.down = 1);
        geofs.camera.isHandlingMouseRotation() && (a.preventDefault(), a.stopImmediatePropagation && a.stopImmediatePropagation(), controls.mouse.originalX = a.pageX, controls.mouse.originalY = a.pageY, controls.mouse.lastX = controls.mouse.originalX, controls.mouse.lastY = controls.mouse.originalY, geofs.camera.saveRotation(), geofs.camera.saveOffset());
        controls.mouse.clickedNode = geofs.api.getModelFromScreenCoords(a.pageX -
            controls.mouse.oX, a.pageY - controls.mouse.oY)
    };
    controls.mouseUpHandler = function (a) {
        geofs.camera.isHandlingMouseRotation() && geofs.camera.saveRotation();
        controls.mouse.down = !1;
        controls.mouse.clickedNode = null;
        a && a.preventDefault && a.preventDefault()
    };
    $(document).on("mousedown", ".geofs-canvas-mouse-overlay", controls.mouseDownHandler);
    $(document).on("mouseup", ".geofs-canvas-mouse-overlay", controls.mouseUpHandler);
    $(".geofs-canvas-mouse-overlay").on("wheel", function (a) {
        0 > a.originalEvent.deltaY / 120 ? geofs.camera.decreaseFOV() :
            geofs.camera.increaseFOV();
        a.preventDefault();
        a.stopPropagation()
    });
    controls.joystick.init();
    controls.autopilot.initUI();
    controls.setMode(geofs.preferences.controlMode)
};
controls.addHammerHandlers = function () {
    controls.addHammerHandlersAreSet || (controls.addHammerHandlersAreSet = !0, function () {
        var a = $(".geofs-view-pad")[0],
            b = new Hammer(a);
        b.get("pinch").set({
            enable: !0
        });
        b.on("pinchstart", function (c) {
            b.geoFSFOV = geofs.api.getFOV(geofs.camera.cam);
            c.preventDefault()
        });
        b.on("doubletap", function (c) {
            geofs.camera.setToNeutral();
            c.preventDefault()
        });
        b.on("pinchmove", function (c) {
            geofs.camera.setFOV(1 / c.scale * b.geoFSFOV);
            controls.mouse.down = !1;
            c.preventDefault()
        });
        b.get("pan").set({
            threshold: 0,
            direction: Hammer.DIRECTION_ALL
        });
        b.on("panstart", function (c) {
            c.which = 1;
            c.pageX = 0;
            c.pageY = 0;
            controls.mouseDownHandler(c);
            c.preventDefault()
        });
        b.on("panmove", function (c) {
            c.pageX = c.deltaX;
            c.pageY = c.deltaY;
            controls.mouseHandler(c);
            c.preventDefault()
        });
        b.on("panend pancancel", function (c) {
            controls.mouseUpHandler(c)
        })
    }(), function () {
        function a() {
            b.css("left", "0px");
            b.css("top", 15 * controls.elevatorTrim + "px")
        }
        var b = $(".geofs-control-cursor"),
            c = $(".geofs-control-pad");
        c = new Hammer(c[0]);
        c.get("pinch").set({
            enable: !0
        });
        c.get("pan").set({
            threshold: 0
        });
        c.on("panstart", function (d) {
            controls.mouseDownHandler(d);
            d.preventDefault()
        });
        c.on("panmove", function (d) {
            var e = clamp(d.deltaX, -controls.controlPad.eX, controls.controlPad.eX),
                f = clamp(d.deltaY, -controls.controlPad.hY, controls.controlPad.hY);
            controls.touch.roll = e * controls.controlPad.rX;
            controls.touch.pitch = f * controls.controlPad.rY;
            b.css("left", e + "px");
            b.css("top", f + "px");
            d.preventDefault()
        });
        c.on("panend pancancel", function (d) {
            controls.touch.roll = 0;
            controls.touch.pitch =
                0;
            a();
            d.preventDefault()
        });
        c.on("tap", function (d) {
            var e = $(d.target);
            e.hasClass("geofs-control-trimup") && controls.trimUp();
            e.hasClass("geofs-control-trimdown") && controls.trimDown();
            e.addClass("geofs-control-flash");
            clearTimeout(e.flashtimeout);
            e.flashtimeout = setTimeout(function () {
                e.removeClass("geofs-control-flash")
            }, 100);
            a();
            d.preventDefault()
        })
    }(), function () {
        var a = $(".geofs-throttle-cursor");
        $(".geofs-throttle-pad");
        var b = new Hammer(a[0]);
        controls.hammerThrottle = b;
        b.get("pinch").set({
            enable: !0
        });
        b.get("pan").set({
            threshold: 0
        });
        $(document).on("flyto", function () {
            a.css("bottom", "0%");
            b.lastY = 0
        });
        geofs.api.addFrameCallback(function () {
            if (controls.autopilot.on) {
                var c = clamp(100 * controls.throttle, 5, 90);
                a.css("bottom", c + "%");
                b.lastY = controls.throttle * controls.throttlePad.hY
            }
        });
        b.on("panstart", function (c) {
            b.startY = b.lastY || 0;
            c.preventDefault()
        });
        b.on("pan", function (c) {
            var d = b.startY - c.deltaY;
            d = clamp(d, 0, controls.throttlePad.hY);
            b.lastY = d;
            d = clamp(d * controls.throttlePad.rY, 0, 1);
            controls.throttle = d;
            a.css("bottom",
                clamp(100 * d, 5, 90) + "%");
            c.preventDefault()
        })
    }(), function () {
        var a = $(".geofs-rudder-cursor"),
            b = $(".geofs-rudder-pad");
        $(document).on("preferenceRead preferenceSaved", function () {
            "touch" == geofs.preferences.controlMode && !geofs.preferences.touch.mixYawRoll || "orientation" == geofs.preferences.controlMode && !geofs.preferences.orientation.mixYawRoll ? ($(".geofs-throttle-pad").addClass("geofs-rudder-on"), b.show()) : ($(".geofs-throttle-pad").removeClass("geofs-rudder-on"), b.hide())
        });
        var c = new Hammer(a[0]);
        c.get("pinch").set({
            enable: !0
        });
        c.get("pan").set({
            threshold: 0
        });
        c.on("panstart", function (d) {
            controls.mouseDownHandler(d);
            d.preventDefault()
        });
        c.on("panmove", function (d) {
            var e = clamp(d.deltaX, -controls.rudderPad.eX, controls.rudderPad.eX);
            controls.touch.yaw = e * controls.rudderPad.rX;
            controls.orientation.yaw = controls.touch.yaw;
            a.css("left", e + "px");
            d.preventDefault()
        });
        c.on("panend pancancel", function (d) {
            controls.touch.yaw = 0;
            controls.orientation.yaw = 0;
            a.css("left", "0px");
            d.preventDefault()
        })
    }(), (new Hammer($(".geofs-overlay-container")[0])).on("tap",
        function (a) {
            var b = $(a.target);
            b.hasClass("control-pad") && (b.hasClass("gear-overlay") && controls.setters.setGear.set(), b.hasClass("flaps-overlay") && controls.setters.cycleFlaps.set(), b.hasClass("spoiler-overlay") && controls.setters.setAirbrakes.set(), b.hasClass("brakes-overlay") && controls.setters.toggleParkingBrake.set(), a.preventDefault())
        }))
};
controls.initViewportDimensions = function () {
    var a = $(".geofs-canvas-mouse-overlay"),
        b = a[0];
    controls.mouse.oX = a.offset().left;
    controls.mouse.oY = a.offset().top;
    controls.mouse.cX = b.offsetWidth / 2;
    controls.mouse.rX = 1 / controls.mouse.cX;
    controls.mouse.tY = a.offset().top;
    controls.mouse.cY = b.offsetHeight / 2;
    controls.mouse.rY = 1 / controls.mouse.cY;
    controls.throttlePad = $(".geofs-throttle-pad")[0];
    controls.throttlePad && (controls.throttlePad.tY = controls.throttlePad.offsetTop, controls.throttlePad.hY = controls.throttlePad.offsetHeight,
        controls.throttlePad.rY = 1 / controls.throttlePad.hY);
    controls.controlPad = $(".geofs-control-pad")[0];
    controls.controlPad && (controls.controlPad.tY = controls.controlPad.offsetTop, controls.controlPad.hY = 75, controls.controlPad.rY = 1 / controls.controlPad.hY, controls.controlPad.oX = controls.controlPad.offsetLeft, controls.controlPad.eX = 75, controls.controlPad.rX = 1 / controls.controlPad.eX);
    controls.rudderPad = $(".geofs-rudder-pad")[0];
    controls.rudderPad && (controls.rudderPad.oX = controls.rudderPad.offsetLeft, controls.rudderPad.eX =
        50, controls.rudderPad.rX = 1 / controls.rudderPad.eX);
    controls.viewportWidth = b.offsetWidth;
    controls.viewportHeight = b.offsetHeight;
    controls.mouse.orbit.ratioX = 360 / controls.viewportWidth;
    controls.mouse.orbit.ratioY = 360 / controls.viewportHeight;
    controls.mouse.orbit.ratioZ = .1;
    geofs.isMobile && controls.addHammerHandlers()
};
controls.resetWithAircraftDefinition = function () {
    controls.flaps.maxPosition = geofs.aircraft.instance.definition.flapsPositions ? geofs.aircraft.instance.definition.flapsPositions.length : geofs.aircraft.instance.definition.flapsSteps
};
controls.reset = function () {
    controls.roll = 0;
    controls.rawPitch = 0;
    controls.pitch = 0;
    controls.yaw = 0;
    controls.throttle = 0;
    controls.reverse = 0;
    controls.brakes = 0;
    controls.engine = {};
    controls.engine.on = !1;
    controls.elevatorTrim = 0;
    controls.elevatorTrimMin = -.5;
    controls.elevatorTrimMax = .5;
    controls.elevatorTrimStep = .01;
    controls.gear = {};
    controls.gear.position = 0;
    controls.gear.target = 0;
    controls.flaps = {};
    controls.flaps.position = 0;
    controls.flaps.target = 0;
    controls.flaps.maxPosition = 1;
    controls.airbrakes = {};
    controls.airbrakes.position =
        0;
    controls.airbrakes.target = 0;
    controls.optionalAnimatedPart = {};
    controls.optionalAnimatedPart.position = 0;
    controls.optionalAnimatedPart.target = 0;
    controls.states.left = !1;
    controls.states.right = !1;
    controls.states.up = !1;
    controls.states.down = !1;
    controls.states.rudderLeft = !1;
    controls.states.rudderRight = !1;
    controls.states.increaseThrottle = !1;
    controls.states.decreaseThrottle = !1;
    controls.mouse.xValue = 0;
    controls.mouse.yValue = 0;
    controls.initViewportDimensions();
    geofs.aircraft.instance && geofs.aircraft.instance.definition &&
        controls.resetWithAircraftDefinition()
};
controls.setMode = function (a) {
    a = a || geofs.preferences.controlMode || "mouse";
    controls.mode = a;
    "orientation" == controls.mode ? (controls.orientation.init(), controls.orientation.available ? $("body").addClass("geofs-orientation") : (controls.setMode("touch"), $("body").removeClass("geofs-orientation")), controls.exponential = geofs.preferences.orientation.exponential, controls.mixYawRoll = geofs.preferences.orientation.mixYawRoll, controls.mixYawRollQuantity = geofs.preferences.orientation.mixYawRollQuantity, controls.sensitivity =
        geofs.preferences.orientation.sensitivity, controls.multiplier = {
            pitch: geofs.preferences.orientation.multiplier.pitch ? -1 : 1,
            roll: geofs.preferences.orientation.multiplier.roll ? -1 : 1,
            yaw: 1
        }) : $("body").removeClass("geofs-orientation");
    "touch" == controls.mode ? (controls.exponential = geofs.preferences.touch.exponential, controls.mixYawRoll = geofs.preferences.touch.mixYawRoll, controls.mixYawRollQuantity = geofs.preferences.touch.mixYawRollQuantity, controls.sensitivity = geofs.preferences.touch.sensitivity, controls.multiplier = {
        pitch: 1,
        roll: 1,
        yaw: 1
    }, $("body").addClass("geofs-touch")) : $("body").removeClass("geofs-touch");
    "joystick" == controls.mode && (controls.exponential = geofs.preferences.joystick.exponential, controls.mixYawRoll = geofs.preferences.joystick.mixYawRoll, controls.mixYawRollQuantity = geofs.preferences.joystick.mixYawRollQuantity, controls.sensitivity = geofs.preferences.joystick.sensitivity, controls.multiplier = {
        pitch: 1,
        roll: 1,
        yaw: 1,
        throttle: geofs.preferences.joystick.multiplier.throttle ? -1 : 1
    });
    "mouse" == controls.mode &&
        (controls.exponential = geofs.preferences.mouse.exponential, controls.mixYawRoll = geofs.preferences.mouse.mixYawRoll, controls.mixYawRollQuantity = geofs.preferences.mouse.mixYawRollQuantity, controls.sensitivity = geofs.preferences.mouse.sensitivity, controls.multiplier = {
            pitch: 1,
            roll: 1,
            yaw: 1
        });
    "keyboard" == controls.mode && (controls.exponential = 0, controls.mixYawRoll = geofs.preferences.keyboard.mixYawRoll, controls.mixYawRollQuantity = geofs.preferences.keyboard.mixYawRollQuantity, controls.sensitivity = geofs.preferences.keyboard.sensitivity,
        controls.multiplier = {
            pitch: 1,
            roll: 1,
            yaw: 1
        });
    geofs.preferences.controlMode = a
};
controls.axisSetters = {
    none: {
        label: "none",
        value: null
    },
    pitch: {
        label: "Pitch",
        process: function (a) {
            return controls.rawPitch = a * geofs.preferences.joystick.sensitivity
        }
    },
    roll: {
        label: "Roll",
        process: function (a) {
            return controls.roll = a * geofs.preferences.joystick.sensitivity
        }
    },
    yaw: {
        label: "Yaw",
        process: function (a) {
            return controls.yaw = a * geofs.preferences.joystick.sensitivity
        }
    },
    throttle: {
        label: "Throttle",
        process: function (a) {
            return controls.throttle = (a + 1) / 2
        }
    },
    reverse: {
        label: "Reverse",
        process: function (a) {
            return controls.reverse =
                (a + 1) / 2
        }
    },
    throttlereverse: {
        label: "Throttle & Reverse",
        process: function (a) {
            return geofs.aircraft.instance.definition.reverse ? controls.throttle = a : controls.throttle = (a + 1) / 2
        }
    },
    brakes: {
        label: "Brakes",
        process: function (a) {
            return controls.brakes = a
        }
    },
    airbrakesPosition: {
        label: "Air Brakes",
        process: function (a) {
            controls.airbrakes.target = (a + 1) / 2;
            controls.setPartAnimationDelta(controls.airbrakes)
        }
    },
    hatView: {
        label: "Hat Button View",
        max: 3,
        process: function (a, b) {
            var c = 0,
                d = 0; - 1 < a && 0 > a && (c = -40); - .4 < a && .7 > a && (d = -40);
            .4 <
                a && 1.1 > a && (c = 40);
            if (1 == a || -.7 > a && -1.1 < a) d = 40;
            if (c || d) geofs.camera.rotate(c * b, d * b), geofs.camera.saveRotation()
        }
    },
    lookAround: {
        label: "Look left/right",
        process: function (a) {
            a != geofs.lookAroundValue && (geofs.camera.lookAround(90 * a), geofs.lookAroundValue = a)
        }
    },
    lookUpDown: {
        label: "Look up/down",
        process: function (a) {
            a != geofs.lookUpDownValue && (geofs.camera.lookAround(null, -90 * a), geofs.lookUpDownValue = a)
        }
    }
};
controls.setters = {
    none: {
        label: "none",
        set: function () { },
        unset: function () { }
    },
    setBrakes: {
        label: "Brakes",
        set: function () {
            geofs.aircraft.instance.brakesOn = !0;
            controls.brakes = 1
        },
        unset: function () {
            geofs.aircraft.instance.brakesOn = !1;
            controls.brakes = 0
        }
    },
    toggleAutoPilot: {
        label: "Autopilot",
        set: function () {
            controls.autopilot.toggle()
        }
    },
    toggleParkingBrake: {
        label: "Parking brake",
        set: function () {
            geofs.aircraft.instance.brakesOn ? (geofs.aircraft.instance.brakesOn = !1, controls.brakes = 0) : (geofs.aircraft.instance.brakesOn = !0, controls.brakes = 1)
        }
    },
    setAirbrakes: {
        label: "Air Brakes",
        set: function () {
            controls.airbrakes.target = 0 == controls.airbrakes.target ? 1 : 0;
            controls.setPartAnimationDelta(controls.airbrakes)
        }
    },
    setOptionalAnimatedPart: {
        label: "Optional Animated Parts",
        set: function () {
            controls.optionalAnimatedPart.target = 0 == controls.optionalAnimatedPart.target ? 1 : 0;
            controls.setPartAnimationDelta(controls.optionalAnimatedPart)
        }
    },
    setFlapsUp: {
        label: "Flaps Up",
        set: function () {
            0 < controls.flaps.target && (controls.flaps.target--, geofs.aircraft.instance.definition.flapsPositions &&
                (controls.flaps.positionTarget = geofs.aircraft.instance.definition.flapsPositions[controls.flaps.target]), controls.setPartAnimationDelta(controls.flaps))
        }
    },
    setFlapsDown: {
        label: "Flaps down",
        set: function () {
            controls.flaps.target < geofs.aircraft.instance.definition.flapsSteps && (controls.flaps.target++, geofs.aircraft.instance.definition.flapsPositions && (controls.flaps.positionTarget = geofs.aircraft.instance.definition.flapsPositions[controls.flaps.target]), controls.setPartAnimationDelta(controls.flaps))
        }
    },
    cycleFlaps: {
        label: "Cycle Flaps",
        set: function () {
            controls.flaps.target < geofs.aircraft.instance.definition.flapsSteps ? controls.flaps.target++ : controls.flaps.target = 0;
            geofs.aircraft.instance.definition.flapsPositions && (controls.flaps.positionTarget = geofs.aircraft.instance.definition.flapsPositions[controls.flaps.target]);
            controls.setPartAnimationDelta(controls.flaps)
        }
    },
    setGear: {
        label: "Toggle Gear (up/down)",
        set: function () {
            if (!geofs.aircraft.instance.groundContact || geofs.debugOn) controls.gear.target = 0 ==
                controls.gear.target ? 1 : 0, controls.setPartAnimationDelta(controls.gear)
        }
    },
    increaseThrottle: {
        label: "Increase Throttle",
        set: function () {
            controls.throttle += controls.keyboard.throttleIncrement
        }
    },
    decreaseThrottle: {
        label: "Decrease Throttle",
        set: function () {
            controls.throttle -= controls.keyboard.throttleIncrement
        }
    },
    setReverseNone: {
        label: "Set reverse to none",
        set: function () {
            controls.reverse = 0
        }
    },
    setReverseFull: {
        label: "Set reverse to full",
        set: function () {
            controls.reverse = 1
        }
    },
    toggleReverse: {
        label: "Toggle Reverse (full/none)",
        set: function () {
            controls.reverse = 0 < controls.reverse ? 0 : 1
        }
    },
    setReverseOnThrottleAxis: {
        label: "Set reverse on throttle axis",
        set: function () {
            controls.throttleAsReverse = 1
        },
        unset: function () {
            controls.throttleAsReverse = 0
        }
    },
    setElevatorTrimUp: {
        label: "Elevator Trim Up",
        set: function () {
            controls.states.elevatorTrimUp = !0
        },
        unset: function () {
            controls.states.elevatorTrimUp = !1
        }
    },
    setElevatorTrimDown: {
        label: "Elevator Trim Down",
        set: function () {
            controls.states.elevatorTrimDown = !0
        },
        unset: function () {
            controls.states.elevatorTrimDown = !1
        }
    },
    setElevatorTrimNeutral: {
        label: "Elevator Trim Neutral",
        set: function () {
            controls.elevatorTrim = 0
        }
    }
};
controls.trimUp = function (a) {
    controls.elevatorTrim < controls.elevatorTrimMax && (controls.elevatorTrim += controls.elevatorTrimStep * (a || 1))
};
controls.trimDown = function (a) {
    controls.elevatorTrim > controls.elevatorTrimMin && (controls.elevatorTrim -= controls.elevatorTrimStep * (a || 1))
};
controls.update = function (a) {
    controls.updateKeyboard(a);
    "joystick" == controls.mode && controls.updateJoystick(a);
    if (controls.autopilot.on) controls.autopilot.update(a);
    else {
        controls.states.elevatorTrimUp ? controls.trimUp(2 * a) : controls.states.elevatorTrimDown && controls.trimDown(2 * a);
        controls.elevatorTrim = clamp(controls.elevatorTrim, controls.elevatorTrimMin, controls.elevatorTrimMax);
        "mouse" != controls.mode && "touch" != controls.mode || controls.keyboard.override || controls.updateMouse(a);
        "orientation" == controls.mode &&
            controls.updateOrientation(a);
        "touch" == controls.mode && controls.updateTouch(a);
        var b = controls.exponential;
        controls.keyboard.override && (b = controls.keyboard.exponential);
        controls.roll *= controls.multiplier.roll;
        controls.rawPitch *= controls.multiplier.pitch;
        controls.yaw *= controls.multiplier.yaw;
        controls.roll *= Math.pow(Math.abs(controls.roll), b);
        controls.rawPitch *= Math.pow(Math.abs(controls.rawPitch), b);
        controls.rawYaw = controls.yaw;
        controls.mixYawRoll ? controls.yaw = controls.roll * controls.mixYawRollQuantity :
            (controls.keyboard.overrideRudder && (b = geofs.preferences.keyboard.exponential), controls.yaw *= Math.pow(Math.abs(controls.yaw), b), controls.rawYaw = controls.yaw)
    }
    controls.roll = clamp(controls.roll, -1, 1);
    controls.rawPitch = clamp(controls.rawPitch, -1, 1);
    controls.yaw = clamp(controls.yaw, -1, 1);
    controls.pitch = controls.rawPitch + controls.elevatorTrim;
    b = 0;
    geofs.aircraft.instance.definition.reverse && (b = -1, 0 < controls.throttle && (controls.reverse = 0));
    controls.throttle = controls.throttleAsReverse ? clamp(-controls.throttle,
        b, 0) : clamp(controls.throttle - controls.reverse, b, 1);
    controls.animatePart("gear", a);
    controls.animatePart("flaps", a);
    controls.animatePart("airbrakes", a);
    controls.animatePart("optionalAnimatedPart", a)
};
controls.setPartAnimationDelta = function (a) {
    a.delta = a.positionTarget ? a.positionTarget - a.position : a.target - a.position
};
controls.animatePart = function (a, b) {
    var c = controls[a];
    var d = c.positionTarget ? c.positionTarget : c.target;
    c.position != d && geofs.aircraft.instance.definition[a + "TravelTime"] && (c.position += c.delta / (geofs.aircraft.instance.definition[a + "TravelTime"] / b), 0 > c.delta && c.position <= d && (c.position = d, c.delta = null), 0 < c.delta && c.position >= d && (c.position = d, c.delta = null))
};
controls.updateMouse = function (a) {
    controls.roll = controls.mouse.xValue * geofs.preferences.mouse.sensitivity;
    controls.rawPitch = controls.mouse.yValue * geofs.preferences.mouse.sensitivity
};
controls.updateKeyboard = function (a) {
    var b = controls.keyboard.rollIncrement * a * geofs.preferences.keyboard.sensitivity;
    controls.states.left ? controls.roll -= b : controls.states.right ? controls.roll += b : geofs.aircraft.instance.controllers.roll.recenter && (controls.roll -= [controls.roll - 0] * controls.keyboard.recenterRatio * geofs.preferences.keyboard.sensitivity);
    b = controls.keyboard.pitchIncrement * a * geofs.preferences.keyboard.sensitivity * geofs.aircraft.instance.controllers.pitch.sensitivity;
    controls.states.up ? controls.rawPitch -=
        b * geofs.aircraft.instance.controllers.pitch.ratio : controls.states.down ? controls.rawPitch += b * geofs.aircraft.instance.controllers.pitch.ratio : geofs.aircraft.instance.controllers.pitch.recenter && (controls.rawPitch -= [controls.rawPitch - 0] * b);
    b = controls.keyboard.yawIncrement * a * geofs.preferences.keyboard.sensitivity;
    controls.states.rudderLeft ? controls.yaw -= b : controls.states.rudderRight ? controls.yaw += b : geofs.aircraft.instance.controllers.yaw.recenter && (controls.yaw -= [controls.yaw - 0] * controls.keyboard.recenterRatio *
        geofs.preferences.keyboard.sensitivity);
    a *= controls.keyboard.throttleIncrement;
    controls.states.increaseThrottle ? controls.throttle += a : controls.states.decreaseThrottle && (controls.throttle -= a)
};
controls.recenter = function () {
    controls.mouse.xValue = 0;
    controls.mouse.yValue = 0;
    controls.yaw = 0;
    controls.roll = 0;
    controls.rawPitch = 0
};
controls.keyDown = function (a) {
    switch (a.which) {
        case geofs.preferences.keyboard.keys["Toggle Autopilot"].keycode:
            controls.setters.toggleAutoPilot.set();
            break;
        case geofs.preferences.keyboard.keys["Bank left"].keycode:
            controls.states.left = !0;
            a.returnValue = !1;
            controls.keyboard.override = !0;
            break;
        case geofs.preferences.keyboard.keys["Bank right"].keycode:
            controls.states.right = !0;
            a.returnValue = !1;
            controls.keyboard.override = !0;
            break;
        case geofs.preferences.keyboard.keys["Pitch down"].keycode:
            controls.states.up = !0;
            a.returnValue = !1;
            controls.keyboard.override = !0;
            break;
        case geofs.preferences.keyboard.keys["Pitch up"].keycode:
            controls.states.down = !0;
            a.returnValue = !1;
            controls.keyboard.override = !0;
            break;
        case geofs.preferences.keyboard.keys["Steer left"].keycode:
            controls.states.rudderLeft = !0;
            a.returnValue = !1;
            controls.keyboard.overrideRudder = !0;
            break;
        case geofs.preferences.keyboard.keys["Steer right"].keycode:
            controls.states.rudderRight = !0;
            a.returnValue = !1;
            controls.keyboard.overrideRudder = !0;
            break;
        case geofs.preferences.keyboard.keys["Increase throttle"].keycode:
        case geofs.preferences.keyboard.keys.PgUp.keycode:
            controls.states.increaseThrottle = !0;
            a.returnValue = !1;
            break;
        case geofs.preferences.keyboard.keys["Decrease throttle"].keycode:
        case geofs.preferences.keyboard.keys.PgDwn.keycode:
            controls.states.decreaseThrottle = !0;
            a.returnValue = !1;
            break;
        case geofs.preferences.keyboard.keys.Brakes.keycode:
            controls.setters.setBrakes.set();
            break;
        case geofs.preferences.keyboard.keys["Parking brake"].keycode:
            controls.setters.toggleParkingBrake.set();
            break;
        case geofs.preferences.keyboard.keys["Engine switch (on/off)"].keycode:
            geofs.aircraft.instance.engine.on ?
                geofs.aircraft.instance.stopEngine() : geofs.aircraft.instance.startEngine();
            break;
        case geofs.preferences.keyboard.keys["Gear toggle (up/down)"].keycode:
            controls.setters.setGear.set();
            break;
        case geofs.preferences.keyboard.keys["Lower flaps"].keycode:
            controls.setters.setFlapsDown.set();
            break;
        case geofs.preferences.keyboard.keys["Raise flaps"].keycode:
            controls.setters.setFlapsUp.set();
            break;
        case geofs.preferences.keyboard.keys["Airbrake toggle (on/off)"].keycode:
            controls.setters.setAirbrakes.set();
            break;
        case geofs.preferences.keyboard.keys["Optional Animated Part toggle (on/off)"].keycode:
            controls.setters.setOptionalAnimatedPart.set();
            break;
        case geofs.preferences.keyboard.keys["Elevator trim up"].keycode:
            controls.setters.setElevatorTrimUp.set();
            break;
        case geofs.preferences.keyboard.keys["Elevator trim down"].keycode:
            controls.setters.setElevatorTrimDown.set();
            break;
        case geofs.preferences.keyboard.keys["Elevator trim neutral"].keycode:
            controls.setters.setElevatorTrimNeutral.set();
            break;
        case 13:
            controls.recenter();
            break;
        case 17:
            controls.controlKeyPressed = !0;
            break;
        case 27:
            flight.recorder.playing && (flight.recorder.exitPlayback(), a.preventDefault());
            break;
        case 86:
            flight.recorder.enterPlayback();
            break;
        case 83:
            audio.toggleMute();
            break;
        case 80:
            geofs.togglePause();
            break;
        case 67:
            geofs.camera.cycle();
            break;
        case 78:
            ui.panel.toggle(".geofs-map-list");
            break;
        case 79:
            ui.panel.toggle(".geofs-preference-list");
            break;
        case 9:
            geofs.flyToCamera();
            break;
        case 72:
            instruments.toggle();
            break;
        case 77:
            controls.setMode("mouse");
            break;
        case 75:
            controls.setMode("keyboard");
            break;
        case 74:
            controls.setMode("joystick");
            break;
        case 81:
            controls.controlKeyPressed && (geofs.camera.animations.orbitHorizontal.active = !geofs.camera.animations.orbitHorizontal.active);
            break;
        case 82:
            geofs.resetFlight();
            break;
        case 87:
            controls.controlKeyPressed && (geofs.camera.animations.orbitVertical.active = !geofs.camera.animations.orbitVertical.active);
            break;
        case 97:
            geofs.camera.setRotation(45);
            break;
        case 98:
            geofs.camera.setRotation(0);
            break;
        case 99:
            geofs.camera.setRotation(-45);
            break;
        case 100:
            geofs.camera.setRotation(90);
            break;
        case 101:
            geofs.camera.setToNeutral();
            break;
        case 102:
            geofs.camera.setRotation(-90);
            break;
        case 103:
            geofs.camera.setRotation(135);
            break;
        case 104:
            geofs.camera.setRotation(180);
            break;
        case 105:
            geofs.camera.setRotation(-135)
    }
    48 <= a.keyCode && 57 >= a.keyCode && (controls.throttle = (a.keyCode - 48) / 9)
};
controls.keyUp = function (a) {
    switch (a.which) {
        case geofs.preferences.keyboard.keys["Bank left"].keycode:
            controls.states.left = !1;
            a.returnValue = !1;
            break;
        case geofs.preferences.keyboard.keys["Bank right"].keycode:
            controls.states.right = !1;
            a.returnValue = !1;
            break;
        case geofs.preferences.keyboard.keys["Pitch down"].keycode:
            controls.states.up = !1;
            a.returnValue = !1;
            break;
        case geofs.preferences.keyboard.keys["Pitch up"].keycode:
            controls.states.down = !1;
            a.returnValue = !1;
            break;
        case geofs.preferences.keyboard.keys["Steer left"].keycode:
            controls.states.rudderLeft = !1;
            a.returnValue = !1;
            break;
        case geofs.preferences.keyboard.keys["Steer right"].keycode:
            controls.states.rudderRight = !1;
            a.returnValue = !1;
            break;
        case geofs.preferences.keyboard.keys["Increase throttle"].keycode:
        case geofs.preferences.keyboard.keys.PgUp.keycode:
            controls.states.increaseThrottle = !1;
            a.returnValue = !1;
            break;
        case geofs.preferences.keyboard.keys["Decrease throttle"].keycode:
        case geofs.preferences.keyboard.keys.PgDwn.keycode:
            controls.states.decreaseThrottle = !1;
            a.returnValue = !1;
            break;
        case geofs.preferences.keyboard.keys["Elevator trim up"].keycode:
            controls.setters.setElevatorTrimUp.unset();
            break;
        case geofs.preferences.keyboard.keys["Elevator trim down"].keycode:
            controls.setters.setElevatorTrimDown.unset();
            break;
        case geofs.preferences.keyboard.keys.Brakes.keycode:
            controls.setters.setBrakes.unset();
            break;
        case 17:
            controls.controlKeyPressed = !1;
            break;
        case 84:
            ui.chat.showInput()
    }
};
controls.joystick = {};
controls.joystick.deadZoneUp = .1;
controls.joystick.deadZoneDown = -.1;
controls.joystick.ready = !1;
controls.joystick.sticksNumber = 0;
controls.joystick.poll = function () {
    controls.joystick.sticks = [];
    if (!controls.joystick.api) return !1;
    var a = controls.joystick.api.call(navigator);
    if (0 < a.length) {
        for (var b = 0; a[b] && 5 > b;) controls.joystick.sticks.push(a[b]), b++;
        controls.joystick.sticksNumber != controls.joystick.sticks.length && (controls.joystick.info = "", controls.joystick.sticks.forEach(function (c) {
            controls.joystick.info += c.id + "<br/>"
        }), controls.joystick.ready = !0, controls.joystick.configure(), $(controls.joystick).trigger("joystickReady"), controls.joystick.sticksNumber =
            controls.joystick.sticks.length);
        return !0
    }
    return controls.joystick.ready = !1
};
controls.joystick.init = function () {
    controls.joystick.api = ("function" == typeof navigator.getGamepads ? navigator.getGamepads : null) || ("function" == typeof navigator.webkitGetGamepads ? navigator.webkitGetGamepads : null) || null;
    controls.joystick.poll()
};
controls.joystick.configure = function () {
    controls.joystick.oldButtonsValue = 0;
    controls.joystick.buttons = {};
    controls.joystick.axes = {};
    controls.joystick.buttonHandlers = [];
    var a = 0,
        b = 0;
    controls.joystick.sticks.forEach(function (c, d) {
        c.hash = geofs.utils.hashCode(c.id);
        for (var e in c.buttons) {
            var f = c.hash + e;
            if (geofs.preferences.joystick.buttons[f] && controls.setters[geofs.preferences.joystick.buttons[f]]) {
                var g = controls.setters[geofs.preferences.joystick.buttons[f]].set,
                    k = controls.setters[geofs.preferences.joystick.buttons[f]].unset;
                g && controls.joystick.addButtonListener(f, "buttondown", g);
                k && controls.joystick.addButtonListener(f, "buttonup", k)
            }
            controls.joystick.buttons[f] = {
                stick: d,
                globalId: a,
                id: e
            };
            a++
        }
        for (var m in c.axes) f = c.hash + m, controls.joystick.axes[f] = {
            stick: d,
            globalId: b,
            id: m,
            enabled: 0 != c.axes[m]
        }, b++
    })
};
controls.joystick.checkButton = function (a) {
    if (a = controls.joystick.buttons[a]) return controls.joystick.sticks[a.stick].buttons[a.id].pressed
};
controls.joystick.getAxisValue = function (a, b, c) {
    if (controls.joystick.axes && (a = controls.joystick.axes[a])) return clamp(controls.joystick.sticks[a.stick].axes[a.id], b || -1, c || 1)
};
controls.updateJoystick = function (a) {
    if (controls.joystick.poll()) {
        for (var b in controls.joystick.axes) {
            var c = geofs.preferences.joystick.axis[b];
            if ("none" != c && (c = controls.axisSetters[c])) {
                var d = controls.joystick.getAxisValue(b, c.min, c.max);
                geofs.preferences.joystick.multiplier[b] && (d *= -1);
                d < controls.joystick.deadZoneUp && d > controls.joystick.deadZoneDown && (d = 0);
                c.process && c.process(d, a)
            }
        }
        if (controls.joystick.buttons)
            for (b in controls.joystick.buttons)
                if ((a = controls.joystick.buttons[b]) && "none" != geofs.preferences.joystick.buttons[b] &&
                    (d = a.oldValue, c = controls.joystick.checkButton(b), c != d)) {
                    try {
                        var e = c ? controls.joystick.buttonHandlers.buttondown[b] : controls.joystick.buttonHandlers.buttonup[b]
                    } catch (f) { }
                    if (e)
                        for (d = 0; d < e.length; d++) e[d]();
                    a.oldValue = c
                }
    }
};
controls.joystick.addButtonListener = function (a, b, c) {
    controls.joystick.buttonHandlers[b] = controls.joystick.buttonHandlers[b] || [];
    controls.joystick.buttonHandlers[b][a] = controls.joystick.buttonHandlers[a] || [];
    controls.joystick.buttonHandlers[b][a].push(c)
};
controls.orientation.init = function () {
    controls.orientation.eventListenerSet || (controls.orientation.centers = null, $(".geofs-orientationCalibrate").show(), geofs.api.hasOrientation() ? (controls.orientation.available = !0, window.addEventListener("deviceorientation", function (a) {
        controls.orientation.available = !0;
        controls.orientation.values = [a.gamma, a.beta, a.alpha];
        controls.orientation.centers || (controls.orientation.centers = V3.dup(controls.orientation.values), controls.orientation.fixPitch(controls.orientation.centers))
    }),
        controls.orientation.eventListenerSet = !0) : controls.orientation.available = !1)
};
controls.orientation.fixPitch = function (a) {
    a && 90 < Math.abs(a[1]) && (0 > a[0] && (a[0] += 180), 0 < a[0] && (a[0] -= 180))
};
controls.orientation.recenter = function () {
    controls.orientation.centers = null;
    $(".geofs-orientationCalibrate").hide()
};
controls.orientation.isAvailable = function () {
    return controls.orientation.available
};
controls.orientation.getNormalizedAxis = function (a) {
    if (controls.orientation.values) {
        if (0 == a) return controls.orientation.fixPitch(controls.orientation.values), a = controls.orientation.values[0] - controls.orientation.centers[0], geofs.debug.watch("beta", controls.orientation.values[0]), geofs.debug.watch("centeredPitch", a), a / -30;
        if (1 == a) return a = controls.orientation.values[1], 90 < a && (a = 180 - a), -90 > a && (a = -180 - a), geofs.debug.watch("gamma", controls.orientation.values[1]), a / 30
    }
};
controls.orientation.getHtr = function () {
    return [controls.orientation.values[2], controls.orientation.values[1] + 270, controls.orientation.values[0]]
};
controls.updateOrientation = function (a) {
    if (controls.orientation.centers) {
        a = controls.orientation.getNormalizedAxis(geofs.preferences.orientation.axis.pitch);
        var b = controls.orientation.getNormalizedAxis(geofs.preferences.orientation.axis.roll);
        controls.rawPitch = a * controls.orientation.generalMultiplier;
        controls.roll = b * controls.orientation.generalMultiplier;
        controls.yaw = controls.orientation.yaw;
        controls.keyboard.overrideRudder = !1
    }
};
controls.updateTouch = function (a) {
    controls.rawPitch = controls.touch.pitch;
    controls.roll = controls.touch.roll;
    controls.yaw = controls.touch.yaw
};
controls.autopilot = {
    on: !1,
    defaults: {
        maxBankAngle: 30,
        maxPitchAngle: 20,
        minPitchAngle: -20,
        baseClimbrate: 500,
        baseDescentrate: -500,
        maxClimbrate: 6E3,
        maxDescentrate: -6E3,
        verticalSpeedHoldMargin: 1E3,
        targetBankAngleRatio: 2,
        heading: 0,
        altitude: 0,
        kias: 0,
        climbrate: 0,
        yawBankAngleRatio: .005,
        pitchAnglePID: [.01, .002, .01],
        elevatorPitchPID: [.01, .001, 1E-7],
        bankAnglePID: [.15, .001, .01],
        aileronsRollPID: [.1, .001, 1E-7],
        throttlePID: [.5, .01, 0],
        effectivenessRatioMaximum: 1.5
    },
    PIDs: {}
};
controls.autopilot.init = function () {
    var a = Object.assign({}, controls.autopilot.defaults, geofs.aircraft.instance.definition.autopilot);
    controls.autopilot.PIDs.pitchAngle = new PID(a.pitchAnglePID[0], a.pitchAnglePID[1], a.pitchAnglePID[2]);
    controls.autopilot.PIDs.elevatorPitch = new PID(a.elevatorPitchPID[0], a.elevatorPitchPID[1], a.elevatorPitchPID[2]);
    controls.autopilot.PIDs.bankAngle = new PID(a.bankAnglePID[0], a.bankAnglePID[1], a.bankAnglePID[2]);
    controls.autopilot.PIDs.aileronsRoll = new PID(a.aileronsRollPID[0],
        a.aileronsRollPID[1], a.aileronsRollPID[2]);
    controls.autopilot.PIDs.throttle = new PID(a.throttlePID[0], a.throttlePID[1], a.throttlePID[2]);
    controls.autopilot.definition = a
};
controls.autopilot.update = function (a) {
    if (controls.autopilot.on) {
        var b = geofs.animation.values,
            c = controls.autopilot,
            d = c.definition,
            e = clamp(b.kias / 150, 1, 5),
            f = clamp(b.kias / 100, 1, d.effectivenessRatioMaximum);
        geofs.debug.watch("speedRatio", e);
        geofs.debug.watch("effectivenessRatio", f);
        var g = fixAngle(fixAngle360(b.heading) - c.heading);
        g = clamp(g * d.targetBankAngleRatio, -d.maxBankAngle, d.maxBankAngle);
        c.PIDs.bankAngle.set(g, -d.maxBankAngle, d.maxBankAngle);
        var k = c.PIDs.bankAngle.compute(b.aroll, a);
        c.PIDs.aileronsRoll.set(k,
            -1, 1);
        controls.roll = -c.PIDs.aileronsRoll.compute(controls.roll, a) / f;
        controls.yaw = -g * d.yawBankAngleRatio;
        geofs.debug.watch("-> bankangle target", g);
        geofs.debug.watch("bankangle", b.aroll);
        geofs.debug.watch("-> roll target", k);
        geofs.debug.watch("roll", b.roll);
        g = c.altitude - b.altitude;
        k = clamp(e * d.baseClimbrate, 0, d.maxClimbrate);
        var m = clamp(e * d.baseDescentrate, d.maxDescentrate, 0);
        controls.autopilot.targetClimbrate = clamp(2 * g * e, m, k);
        controls.autopilot.climbrate && (Math.abs(g) < d.verticalSpeedHoldMargin && Math.abs(controls.autopilot.targetClimbrate) <
            Math.abs(controls.autopilot.climbrate) ? controls.autopilot.setClimbrate(null) : controls.autopilot.targetClimbrate = controls.autopilot.climbrate);
        c.PIDs.pitchAngle.set(controls.autopilot.targetClimbrate, d.minPitchAngle, d.maxPitchAngle);
        d = c.PIDs.pitchAngle.compute(b.climbrate, a);
        c.PIDs.elevatorPitch.set(d, -1, 1);
        controls.rawPitch = c.PIDs.elevatorPitch.compute(-b.atilt, a) / f;
        geofs.debug.watch("-> climbrate target", controls.autopilot.targetClimbrate);
        geofs.debug.watch("climbrate", b.climbrate);
        geofs.debug.watch("-> pitchAngle target",
            d);
        geofs.debug.watch("pitchAngle", -b.atilt);
        geofs.debug.watch("rawPitch", controls.rawPitch);
        c.PIDs.throttle.set(c.kias, 0, 1);
        controls.throttle = exponentialSmoothing("apThrottle", c.PIDs.throttle.compute(b.kias, a), .9);
        controls.throttle = clamp(controls.throttle, 0, 1)
    }
};
ui.hud.autopilotIndicator = function () { };
controls.autopilot.initUI = function () {
    controls.autopilot.$autopilotPad = $(".geofs-autopilot-pad .control-pad-label");
    controls.autopilot.setHeading = function (a) {
        var b = controls.autopilot.heading;
        try {
            controls.autopilot.heading = fixAngle360(parseInt(a, 10)), $(".geofs-autopilot-heading").val(controls.autopilot.heading)
        } catch (c) {
            controls.autopilot.heading = b
        }
    };
    controls.autopilot.setAltitude = function (a) {
        var b = controls.autopilot.altitude;
        try {
            controls.autopilot.altitude = parseInt(a, 10), $(".geofs-autopilot-altitude").val(controls.autopilot.altitude)
        } catch (c) {
            controls.autopilot.altitude =
                b
        }
    };
    controls.autopilot.setKias = function (a) {
        var b = controls.autopilot.kias;
        try {
            controls.autopilot.kias = parseInt(a, 10), $(".geofs-autopilot-kias").val(controls.autopilot.kias)
        } catch (c) {
            controls.autopilot.kias = b
        }
    };
    controls.autopilot.setClimbrate = function (a) {
        var b = controls.autopilot.climbrate;
        if (a) {
            controls.autopilot.climbrate || (a = controls.autopilot.targetClimbrate || 0, $(".geofs-autopilot-climbrate").val(a));
            try {
                controls.autopilot.climbrate = clamp(parseInt(a, 10), controls.autopilot.definition.maxDescentrate,
                    controls.autopilot.definition.maxClimbrate), $(".geofs-autopilot-climbrate").val(controls.autopilot.climbrate)
            } catch (c) {
                controls.autopilot.climbrate = b
            }
        } else controls.autopilot.climbrate = null, $(".geofs-autopilot-climbrate").val("-----")
    };
    $(document).on("autopilotOn", function () {
        clearTimeout(controls.autopilot.autopilotPadTimeout);
        controls.autopilot.$autopilotPad.removeClass("red-pad").addClass("green-pad");
        $(".geofs-autopilot-controls").show();
        $(".geofs-autopilot-toggle").html("Engaged").addClass("mdl-button--colored")
    });
    $(document).on("autopilotOff", function () {
        controls.autopilot.$autopilotPad.removeClass("green-pad").addClass("red-pad");
        $(".geofs-autopilot-controls").hide();
        $(".geofs-autopilot-toggle").html("Disengaged").removeClass("mdl-button--colored");
        clearTimeout(controls.autopilot.autopilotPadTimeout);
        controls.autopilot.autopilotPadTimeout = setTimeout(function () {
            controls.autopilot.$autopilotPad.removeClass("red-pad").removeClass("green-pad")
        }, 3E3)
    });
    $(document).on("pointerdown keydown change", ".numberUp, .numberDown, .numberValue",
        function (a) {
            var b = $(a.currentTarget),
                c = $(a.currentTarget).parent().find(".numberValue"),
                d = parseInt(c.attr("step")),
                e = parseInt(c.attr("min")),
                f = parseInt(c.attr("max")),
                g = 0;
            if (b.hasClass("numberUp") || 38 == a.which) g = d;
            if (b.hasClass("numberDown") || 40 == a.which) g = -d;
            var k = c.attr("data-loop"),
                m = c.attr("data-method"),
                n = function (q) {
                    q = parseInt(c.val()) || 0;
                    if (g) {
                        var z = q % g;
                        0 < z ? q = 0 < g ? q + (g - z) : q - z : (q += g, q = Math.floor(q / d) * d)
                    }
                    q = k && q > f ? e : k && q < e ? f : clamp(q, e, f);
                    c.val(q);
                    controls.autopilot[m](q)
                },
                x = function () {
                    n();
                    clearTimeout(window.spinnerRepeat);
                    window.spinnerRepeat = setTimeout(x, 50)
                };
            clearTimeout(window.spinnerRepeat);
            g && (window.spinnerRepeat = setTimeout(x, 500), n());
            "change" == a.type && n();
            a.stopImmediatePropagation()
        }).on("pointerup pointercancel mouseleave touchend", ".numberUp, .numberDown", function () {
            clearTimeout(window.spinnerRepeat)
        }).on("click", ".geofs-autopilot-pad", function (a) {
            controls.autopilot.toggle()
        }).on("keyup", ".numberValue", function (a) {
            clearTimeout(window.spinnerRepeat);
            a.stopImmediatePropagation()
        })
};
controls.autopilot.toggle = function () {
    controls.autopilot.on ? controls.autopilot.turnOff() : controls.autopilot.turnOn()
};
controls.autopilot.resetPIDs = function () {
    for (var a in controls.autopilot.PIDs) controls.autopilot.PIDs[a].reset()
};
controls.autopilot.turnOn = function () {
    if (geofs.aircraft.instance.definition.autopilot) {
        var a = geofs.animation.values;
        controls.autopilot.resetPIDs();
        controls.autopilot.setAltitude(a.altitude);
        controls.autopilot.setHeading(a.heading);
        controls.autopilot.setKias(a.kias);
        controls.autopilot.setClimbrate(a.climbrate);
        var b = clamp(a.kias / 100, 1, controls.autopilot.definition.effectivenessRatioMaximum);
        controls.autopilot.PIDs.pitchAngle.initialize(-a.atilt, a.climbrate);
        controls.autopilot.PIDs.elevatorPitch.initialize(controls.rawPitch *
            b, -a.atilt);
        controls.autopilot.PIDs.throttle.initialize(controls.throttle, a.kias);
        controls.autopilot.on = !0;
        $(document).trigger("autopilotOn")
    }
};
controls.autopilot.turnOff = function () {
    controls.autopilot.on = !1;
    $(document).trigger("autopilotOff")
};
"use strict";
var weather = window.weather || {};
weather.dataProxy = geofs.url + "/backend/weather/metar.php?icao=";
weather.minimumCloudCover = 10;
weather.updateRate = 6E4;
weather.timeRatio = 1;
weather.seasonRatio = 1;
weather.contrailTemperatureThreshold = -30;
weather.contrailAltitude = 1E4;
weather.defaults = {
    cloudCover: 0,
    ceiling: 1E3,
    cloudCoverThickness: 200,
    fogDensity: 0,
    fogCeiling: 1E3,
    fogBottom: 0,
    precipitationType: "none",
    precipitationAmount: 0,
    thunderstorm: 0,
    visibility: 1E4,
    windDirection: 0,
    windSpeedMS: 0,
    windGustMS: 0,
    windLayerHeight: 7E3,
    windLayerNb: 3,
    turbulences: 0,
    thermals: 0,
    airPressureSL: AIR_PRESSURE_SL,
    airTemperatureSL: AIR_TEMP_SL
};
weather.definitionBounds = {
    cloudCover: [0, 100],
    ceiling: [0, 1E4],
    fogDensity: [0, 1],
    precipitationAmount: [0, 1],
    thunderstorm: [0, 1],
    windDirection: [0, 360],
    windSpeedMS: [0, 100],
    windGustMS: [0, 100],
    turbulences: [0, 1],
    thermals: [0, 1]
};
weather.init = function (a) {
    weather.currentWindVector = [0, 0, 0];
    weather.currentWindDirection = 0;
    weather.currentWindSpeed = 0;
    weather.currentWindSpeedMs = 0;
    weather.activeWindLayer = 0;
    weather.windLayers = [];
    geofs.fx.cloudManager.init(a);
    weather.reset(a);
    weather.interval = setInterval(function () {
        weather.refresh()
    }, weather.updateRate);
    weather.generateDefinition(a);
    weather.refresh(a);
    weather.atmosphere.init();
    a = function (b, c) {
        b = ("00" + parseInt(60 * (c % 1).toFixed(2))).slice(-2);
        c = parseInt(c);
        $(this).find(".slider-input-overlay").html(c +
            ":" + b)
    };
    $(document).on("change", ".geofs-timeSlider", a);
    a.call($(".geofs-timeSlider"), null, geofs.preferences.weather.localTime);
    a = function (b, c) {
        var d;
        0 <= c && (d = "Spring");
        25 < c && (d = "Summer");
        50 < c && (d = "Autumn");
        75 < c && (d = "Winter");
        $(this).find(".slider-input-overlay").html(d)
    };
    $(document).on("change", ".geofs-seasonSlider", a);
    a.call($(".geofs-seasonSlider"), null, geofs.preferences.weather.season);
    weather.manualWeatherUIContainer = $(".geofs-manualWeather")
};
weather.reset = function (a) {
    weather.set(Object.assign({}, weather.defaults), a);
    weather.refresh(a)
};
weather.refresh = function (a) {
    a = a || geofs.camera.lla;
    var b = function (e) {
        try {
            var f = JSON.parse(e)
        } catch (g) {
            geofs.debug.error(g, "weather.refresh error parsing JSON data")
        }
        f = f || [];
        f.timestamp = geofs.utils.now();
        weather.set(Object.assign({}, weather.defaults, weather.definition, f), a)
    };
    if (geofs.preferences.weather.manual) weather.generateDefinition(a), weather.set(weather.manualDefinition, a);
    else {
        var c = [];
        geofs.runways.getNearRunways(a).map(function (e) {
            c.push(e[0])
        });
        c = c.join(",");
        if ("" != c) {
            var d = weather.dataProxy +
                c + "&kc" + geofs.utils.now();
            $.ajax(d, {
                success: b,
                error: b
            })
        } else b()
    }
};
weather.sanitizedDefinition = function (a) {
    for (var b in weather.definitionBounds) a[b] = clamp(a[b], weather.definitionBounds[0], weather.definitionBounds[1]);
    return a
};
weather.generateDefinition = function (a, b) {
    a = a || geofs.camera.lla;
    a = parseInt(Math.abs(a[0]));
    var c = geofs.preferences.weather.localTime,
        d = weather.timeRatio,
        e = geofs.preferences.weather.quality,
        f = e / 100,
        g = geofs.preferences.weather.season;
    weather.roundedLatitude = a;
    weather.manualQuality = e;
    weather.manualSeason = g;
    weather.manualTimeOfDay = c;
    b && (geofs.preferences.weather.advanced.clouds = Math.min(100, 2 * e), geofs.preferences.weather.advanced.ceiling = weather.defaults.ceiling, geofs.preferences.weather.advanced.fog =
        (1 - 2 * Math.abs(d - .5)) * (.45 < f ? 1 - f : 0) * 100, geofs.preferences.weather.advanced.fogCeiling = 2 * geofs.groundElevation + 50 || 0, geofs.preferences.weather.advanced.precipitationAmount = 50 < e ? 2 * (e - 50) : 0, geofs.preferences.weather.advanced.windDirection = 360 * Math.random(), geofs.preferences.weather.advanced.windSpeedMS = e / 6, geofs.preferences.weather.advanced.turbulences = f * Math.abs(d - .5) * 2, geofs.preferences.weather.advanced.thermals = Math.min(1, 4 * f) * Math.abs(d - .5) * 2);
    weather.manualDefinition = {
        cloudCover: geofs.preferences.weather.advanced.clouds ||
            weather.defaults.cloudCover,
        ceiling: geofs.preferences.weather.advanced.ceiling || weather.defaults.ceiling,
        fogDensity: geofs.preferences.weather.advanced.fog || weather.defaults.fogDensity,
        fogBottom: 0,
        fogCeiling: geofs.preferences.weather.advanced.fogCeiling || weather.defaults.fogCeiling,
        precipitationAmount: geofs.preferences.weather.advanced.precipitationAmount || weather.defaults.precipitationAmount,
        precipitationType: 75 < g && 30 < Math.abs(a) ? "snow" : "rain",
        thunderstorm: 90 < e ? 10 * (e - 90) : 0,
        visibility: 1E4,
        windDirection: geofs.preferences.weather.advanced.windDirection ||
            weather.defaults.windDirection,
        windSpeedMS: geofs.preferences.weather.advanced.windSpeedMS || weather.defaults.windSpeedMS,
        windGustMS: (geofs.preferences.weather.advanced.windSpeedMS || weather.defaults.windSpeedMS) / 4,
        windLayerHeight: 7E3,
        windLayerNb: 3,
        turbulences: geofs.preferences.weather.advanced.turbulences || weather.defaults.turbulences,
        thermals: geofs.preferences.weather.advanced.thermals || weather.defaults.thermals,
        airTemperatureSL: clamp(.4 * (100 - g - Math.abs(a)) * (1 - d), -50, 50),
        timestamp: geofs.utils.now()
    };
    return weather.manualDefinition
};
weather.setManual = function () {
    $('[gespref="geofs.preferences.weather.quality"]').removeClass("geofs-disabled");
    $(".geofs-advancedWeather .slider").addClass("geofs-disabled");
    var a = weather.generateDefinition(null, !0);
    weather.set(a);
    geofs.setPreferenceValues(weather.manualWeatherUIContainer, !0)
};
weather.setAdvanced = function () {
    $('[gespref="geofs.preferences.weather.quality"]').addClass("geofs-disabled");
    $(".geofs-advancedWeather .slider").removeClass("geofs-disabled");
    0 < geofs.preferences.weather.advanced.precipitationAmount && (geofs.preferences.weather.advanced.clouds = Math.max(geofs.preferences.weather.advanced.clouds, 2 * geofs.preferences.weather.advanced.precipitationAmount));
    geofs.setPreferenceValues(weather.manualWeatherUIContainer, !0);
    var a = weather.generateDefinition();
    weather.set(a)
};
weather.set = function (a, b) {
    a = weather.sanitizedDefinition(a || weather.definition || {});
    b = b || geofs.camera.lla;
    weather.setDateAndTime(b);
    geofs.fx.dayNightManager.init();
    geofs.preferences.weather.manual ? ($(".geofs-manualWeather").show(), $(".geofs-metarDisplay").html("").parent().hide(), weather.generateDefinition()) : ($(".geofs-manualWeather").hide(), $(".geofs-metarDisplay").html(a.METAR).parent().show());
    weather.definition = Object.assign({}, weather.defaults, a);
    a = .01 * weather.definition.precipitationAmount;
    0 < weather.definition.windSpeedMS ? (weather.initWind(weather.definition.windDirection, weather.definition.windSpeedMS), weather.windActive = !0, weather.setWindIndicatorVisibility(!0)) : (weather.windActive = !1, weather.windOff(), weather.setWindIndicatorVisibility(!1));
    weather.definition.fog = .01 * weather.definition.fogDensity;
    weather.definition.backgroundFogDensity = clamp(4 * (a - .5), 0, .9);
    weather.definition.coverHalfThickness = weather.definition.cloudCoverThickness / 2;
    b = weather.definition.cloudCover;
    b < weather.minimumCloudCover &&
        (weather.definition.cloudCover = 0);
    geofs.fx.cloudManager.instance.setCloudCover(b);
    0 < weather.definition.precipitationAmount ? geofs.fx.precipitation.create(weather.definition.precipitationType, weather.definition.precipitationAmount) : geofs.fx.precipitation.destroy();
    weather.belowCeilingBrightness = clamp(1.2 - a, 0, 1);
    "snow" == weather.definition.precipitationType ? geofs.api.setImageryColorModifier("snow", {
        brightness: 2.5,
        contrast: 1.5,
        saturation: .1
    }) : geofs.api.removeImageryColorModifier("snow");
    geofs.fx.cloudManager.instance.triggerUpdate()
};
weather.update = function (a) {
    var b = geofs.camera.lla;
    if (0 < weather.windLayers.length) {
        for (var c = geofs.aircraft.instance.llaLocation[2], d = 0, e = 1; e < weather.windLayers.length && !(c < weather.windLayers[e].floor); e++) d = e;
        weather.windLayers[d].computeAndSet(b);
        weather.activeWindLayer = d
    }
    weather.setThermals(b, a);
    geofs.fx.cloudManager.update(b, a);
    geofs.fx.precipitation.update(b, a);
    geofs.fx.dayNightManager.update(b, a)
};
weather.setWindIndicatorVisibility = function (a) {
    instruments.list.wind && (a ? instruments.visible && instruments.list.wind.show() : instruments.list.wind.hide())
};
weather.setDateAndTime = function (a) {
    a = a || geofs.camera.lla || [0, 0, 0];
    a = a[1] * LONGITUDE_TO_HOURS;
    if (geofs.preferences.weather.manual) weather.localTime = geofs.preferences.weather.localTime || 12, weather.localSeason = geofs.preferences.weather.season, weather.zuluTime = boundHours24(weather.localTime - a), geofs.api.setTimeAndDate(3600 * weather.zuluTime, Math.floor(3.65 * weather.localSeason));
    else {
        var b = new Date;
        geofs.api.setClock(b);
        weather.zuluTime = b.getUTCHours();
        weather.localTime = boundHours24(weather.zuluTime + a);
        a = (Date.UTC(b.getFullYear(), b.getMonth(), b.getDate()) - Date.UTC(b.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1E3;
        weather.localSeason = .27 * a
    }
    weather.timeRatio = Math.abs(weather.localTime / 12 - 1);
    weather.timeRatio = Number.parseFloat(weather.timeRatio.toFixed(2));
    weather.seasonRatio = Math.sin(2.7 * weather.localSeason * DEGREES_TO_RAD);
    geofs.isNight = .4 < weather.timeRatio;
    geofs.animation.values.night != geofs.isNight && $("body").trigger("nightChange");
    geofs.animation.values.night = geofs.isNight;
    geofs.animation.values.minutes = 60 * (weather.localTime %
        1).toFixed(2);
    geofs.animation.values.hours = weather.localTime;
    $("body").trigger("geofsTimeChange")
};
weather.getLocalTurbulence = function (a) {
    return [0, 0, geofs.perlin.get(a[0], a[1], 2500) * weather.definition.turbulences * 4]
};
weather.thermals = {
    currentVector: [0, 0, 0],
    minradius: 200,
    maxradius: 1E3,
    minspeed: -.5,
    maxspeed: 7,
    invertionRange: 500
};
weather.setThermals = function (a) {
    weather.thermals.currentVector = weather.getLocalThermal(a)
};
weather.getLocalThermal = function (a) {
    if (0 == weather.definition.thermals) return [0, 0, 0];
    var b = clamp(a[2] / (weather.definition.ceiling - geofs.groundElevation), 0, 1),
        c = clamp(5 * (1 - b), 0, 1);
    b = 3 - b - weather.definition.thermals;
    a = V3.sub(a, V3.scale(weather.currentWindVectorLla, .1 * a[2]));
    a = geofs.perlin.get(a[0], a[1], 200);
    c *= clamp(Math.pow(a, b) * Math.sign(a) * weather.thermals.maxspeed * weather.definition.thermals, weather.thermals.minspeed, weather.thermals.maxspeed);
    isNaN(c) && (c = 0);
    return [0, 0, c]
};
weather.Wind = function (a, b, c, d) {
    this.mainDirection = a;
    this.speedKnots = b * MS_TO_KNOTS;
    this.speedMs = b;
    a = this.mainDirection * DEGREES_TO_RAD;
    this.vector = [Math.sin(a), Math.cos(a), 0];
    this.vectorMs = V3.scale(this.vector, this.speedMs);
    this.vectorCross = V3.cross(this.vector, [0, 0, 1]);
    this.floor = c;
    this.ceiling = d;
    this.direction = this.mainDirection;
    this.speed = this.speedMs
};
weather.Wind.prototype.randomize = function () {
    var a = clamp(weather.definition.ceiling / geofs.animation.values.altitudeMeters, 0, 1);
    this.speed = this.speedMs + exponentialSmoothing("windGust", weather.definition.windGustMS * (Math.random() - .5) * a, .1)
};
weather.Wind.prototype.computeAndSet = function (a) {
    a = a || [0, 0, 0];
    this.randomize();
    var b = this.computeTerrainLift();
    weather.currentWindVector = V3.scale(b, this.speed);
    weather.currentWindVectorLla = xyz2lla(weather.currentWindVector, a);
    weather.currentWindDirection = this.direction;
    weather.currentWindSpeedMs = this.speed;
    weather.currentWindSpeed = this.speed * MS_TO_KNOTS
};
weather.Wind.prototype.computeTerrainLift = function (a) {
    a = a || geofs.aircraft.instance.llaLocation;
    var b = V3.sub(a, xyz2lla(V3.scale(this.vector, 100), a)),
        c = geofs.getGroundAltitude(a[0], a[1]).location[2],
        d = geofs.getGroundAltitude(b[0], b[1]).location[2];
    geofs.debugOn && geofs.debug.placeProbe([b[0], b[1], d]);
    b = a[2] - c;
    var e = c - d;
    d = clamp(5 * e, 10, 500);
    e = Math.atan(e / 100);
    b = clamp(d - b, 0, d) / d;
    b = V3.rotate(this.vector, this.vectorCross, e * b);
    b.origin = [a[0], a[2], c];
    return b
};
weather.initWind = function (a, b) {
    weather.windLayers = [];
    a = fixAngle(a + 180);
    var c = weather.definition.windLayerHeight + Math.random() * weather.definition.windLayerHeight;
    weather.windLayers.push(new weather.Wind(a, b, 0, c));
    weather.windLayers[0].computeAndSet();
    if (b)
        for (var d = 1; d < weather.windLayerNb; d++) {
            var e = c;
            c = e + weather.windLayerHeight + Math.random() * weather.definition.windLayerHeight;
            var f = b + (10 * Math.random() - 5),
                g = fixAngle(a + 360 * Math.random());
            weather.windLayers.push(new weather.Wind(g, f, e, c))
        }
};
weather.windOff = function () {
    weather.windLayers = [];
    weather.currentWindVector = [0, 0, 0];
    weather.currentWindDirection = 0;
    weather.currentWindSpeed = 0;
    weather.currentWindSpeedMs = 0
};
weather.atmosphere = {};
weather.atmosphere.init = function () {
    weather.atmosphere.update()
};
weather.atmosphere.update = function (a) {
    a = a || geofs.aircraft.instance.altitude || 0;
    var b = weather.definition.airTemperatureSL + KELVIN_OFFSET;
    weather.atmosphere.airTempAtAltitude = weather.definition.airTemperatureSL - a * TEMPERATURE_LAPSE_RATE;
    weather.atmosphere.airTempAtAltitudeKelvin = weather.atmosphere.airTempAtAltitude + KELVIN_OFFSET;
    weather.atmosphere.airPressureAtAltitude = weather.definition.airPressureSL * Math.pow(clamp(1 - a * TEMPERATURE_LAPSE_RATE / b, 0, 1), GM_RL);
    weather.atmosphere.airDensityAtAltitude = weather.atmosphere.airPressureAtAltitude *
        MOLAR_MASS_DRY_AIR / (IDEAL_GAS_CONSTANT * weather.atmosphere.airTempAtAltitudeKelvin);
    weather.contrailAltitude = (weather.contrailTemperatureThreshold - weather.definition.airTemperatureSL) / -TEMPERATURE_LAPSE_RATE
};
"use strict";
window.geofs = window.geofs || {};
geofs.camera = {
    animations: {
        orbitHorizontal: {
            rate: 5
        },
        orbitVertical: {
            rate: 2,
            min: -60,
            max: 60
        }
    },
    currentMode: 0,
    urrentModeName: "follow",
    currentDefinition: {},
    lastCurrentMode: 0,
    worldPosition: [0, 0, 0],
    openSlave: !1,
    motionRange: [.5, .5, .5],
    FOVIncrement: .1,
    defaultFOV: 1,
    currentFOV: 1,
    minFOV: .2,
    maxFOV: 2.5,
    groundAvoidanceMargin: 1,
    groundAvoidanceIgnore: 100,
    shortestDistance: 5,
    init: function () {
        geofs.camera.cam = geofs.api.initAndGetCamera();
        geofs.camera.lla = [0, 0, 0];
        geofs.camera.htr = [0, 0, 0];
        geofs.camera.hasMoved = !1;
        $(document).on("click",
            "[data-cameraanim]",
            function (a) {
                a = $(a.currentTarget).attr("data-cameraAnim");
                geofs.camera.animations[a].active = !geofs.camera.animations[a].active
            }).on("click", ".geofs-stopAllAnim", function () {
                for (var a in geofs.camera.animations) geofs.camera.animations[a].active = !1
            }).on("click", ".geofs-startAllAnim", function () {
                for (var a in geofs.camera.animations) geofs.camera.animations[a].active = !0
            })
    },
    setFOV: function (a) {
        geofs.camera.currentFOV = a || geofs.camera.currentFOV || geofs.camera.defaultFOV;
        geofs.camera.currentFOV =
            clamp(geofs.camera.currentFOV, geofs.camera.minFOV, geofs.camera.maxFOV);
        geofs.api.setFOV(geofs.camera.cam, geofs.camera.currentFOV);
        geofs.getViewportDimentions();
        "cockpit" == geofs.camera.currentModeName && instruments.updateCockpitPositions()
    },
    increaseFOV: function (a) {
        var b = geofs.api.getFOV(geofs.camera.cam);
        b += a || geofs.camera.FOVIncrement;
        b > geofs.camera.maxFOV && (b = geofs.camera.maxFOV);
        geofs.camera.setFOV(b)
    },
    decreaseFOV: function (a) {
        var b = geofs.api.getFOV(geofs.camera.cam);
        b -= a || geofs.camera.FOVIncrement;
        b < geofs.camera.minFOV && (b = geofs.camera.minFOV);
        geofs.camera.setFOV(b)
    },
    reset: function () {
        geofs.camera.definitions = {
            follow: {
                distance: 5,
                orientation: [0, 5, 0]
            },
            cockpit: {
                offsetBounds: [0, 0, 0, 0, 0, 0]
            },
            cockpitless: {},
            chase: {
                reset: !0
            },
            free: {
                reset: !0
            },
            fixed: {}
        };
        var a = "",
            b;
        for (b in geofs.aircraft.instance.definition.cameras) geofs.camera.definitions[b] || (a += '<li class="mdl-menu__item" data-camera="' + b + '">' + b + "</li>");
        a.length ? $(".geofs-extra-views").show().find(".geofs-extra-views-holder").html(a) : $(".geofs-extra-views").hide();
        a = $.extend(!0, {}, geofs.camera.definitions, geofs.aircraft.instance.definition.cameras);
        var c = 0;
        geofs.camera.modes = [];
        for (b in a) {
            var d = a[b];
            d.name = b;
            d.mode = c;
            d.view = d.view || d.name;
            d.position = d.position || [0, 0, 0];
            d.orientations = {};
            d.orientations.neutral = d.orientation || [0, 0, 0];
            d.orientations.current = V3.dup(d.orientations.neutral);
            d.orientations.last = V3.dup(d.orientations.neutral);
            d.offsets = {};
            d.offsets.neutral = [0, 0, 0 + (d.lookAtHeight || 0)];
            d.offsets.current = V3.dup(d.offsets.neutral);
            d.offsets.last = V3.dup(d.offsets.neutral);
            geofs.camera.definitions[b] = d;
            geofs.camera.modes.push(geofs.camera.definitions[b]);
            c++
        }
        for (b in geofs.camera.definitions) d = geofs.camera.definitions[b], d.orientations.current = V3.dup(d.orientations.neutral), d.orientations.last = V3.dup(d.orientations.neutral), d.offsets.current = V3.dup(d.offsets.neutral), d.offsets.last = V3.dup(d.offsets.neutral);
        geofs.camera.definitions.follow.lastUsedHtr = V3.dup(geofs.aircraft.instance.htr);
        geofs.camera.definitions.fixed.lastUsedHtr = V3.dup(geofs.aircraft.instance.htr);
        geofs.camera.definitions.fixed.distance =
            geofs.camera.definitions.follow.distance;
        geofs.camera.definitions.fixed.offsets.neutral[1] = -geofs.camera.definitions.follow.distance;
        geofs.camera.definitions.fixed.offsets.current[1] = -geofs.camera.definitions.follow.distance;
        geofs.camera.definitions.fixed.offsets.last[1] = -geofs.camera.definitions.follow.distance;
        geofs.camera.set(0);
        geofs.camera.setToNeutral();
        geofs.camera.lla = [0, 0, 0];
        geofs.camera.htr = [0, 0, 0];
        geofs.camera.update(0)
    },
    cycle: function () {
        var a = geofs.camera.currentMode + 1;
        a >= geofs.camera.modes.length &&
            (a = 0);
        geofs.camera.set(a)
    },
    set: function (a, b) {
        if (-1 == a) geofs.camera.reset();
        else {
            geofs.camera.currentDefinition = geofs.camera.modes[a] || geofs.camera.definitions[b] || geofs.camera.definitions[0];
            geofs.camera.currentMode = geofs.camera.currentDefinition.mode;
            geofs.camera.currentModeName = geofs.camera.currentDefinition.name;
            geofs.camera.currentView = geofs.camera.currentDefinition.view;
            geofs.camera.setFOV(geofs.camera.currentDefinition.FOV);
            if ("follow" == geofs.camera.currentModeName || "fixed" == geofs.camera.currentModeName) a =
                V3.scale(geofs.aircraft.instance.object3d.getWorldFrame()[1], -geofs.camera.definitions.follow.distance), a = xyz2lla(a, geofs.aircraft.instance.llaLocation), geofs.camera.lla = V3.add(geofs.aircraft.instance.llaLocation, a), geofs.camera.avoidGround(), a = lookAt(geofs.aircraft.instance.llaLocation, geofs.camera.lla, [0, 0, 1]), a = [a[0], -a[1] + 90, 0], geofs.api.setCameraPositionAndOrientation(geofs.camera.cam, geofs.camera.lla, a), instruments.updateScreenPositions();
            "free" == geofs.camera.currentModeName || "chase" == geofs.camera.currentModeName ?
                ($(".geofs-canvas-mouse-overlay").css("pointer-events", "none"), geofs.api.nativeMouseHandling = !0) : ($(".geofs-canvas-mouse-overlay").css("pointer-events", "auto"), geofs.api.nativeMouseHandling = !1);
            geofs.aircraft.instance && ("cockpitless" == geofs.camera.currentModeName ? (geofs.aircraft.instance.setVisibility(!1), instruments.updateScreenPositions()) : geofs.aircraft.instance.setVisibility(!0));
            "cockpit" == geofs.camera.currentModeName || geofs.camera.currentDefinition.nearClipping ? (geofs.aircraft.instance.definition.cockpitScaleFix &&
                geofs.aircraft.instance.fixCockpitScale(geofs.aircraft.instance.definition.cockpitScaleFix), geofs.aircraft.instance.loadCockpit(), instruments.updateCockpitPositions(), geofs.api.configureInsideView(), geofs.camera.motionOffset = [0, 0, 0], geofs.animation.values.overlaysVisibility = "hidden") : (geofs.aircraft.instance.fixCockpitScale(1), geofs.camera.currentDefinition.insideView ? geofs.api.configureInsideView() : geofs.api.configureOutsideView(), geofs.animation.values.overlaysVisibility = "visible");
            geofs.animation.values.view =
                geofs.camera.currentView;
            geofs.animation.values.cameraMode = geofs.camera.currentModeName;
            geofs.aircraft.instance.placeParts();
            geofs.aircraft.instance.render();
            instruments.updateScreenPositions();
            instruments.update();
            $(document).trigger("cameraChange");
            geofs.camera.hasMoved = !0
        }
    },
    lookAround: function (a, b) {
        if (geofs.camera.isHandlingMouseRotation()) {
            var c = geofs.camera.definitions[geofs.camera.currentModeName];
            void 0 != a && (c.orientations.current[0] = a);
            void 0 != b && (c.orientations.current[1] = b);
            geofs.camera.saveRotation();
            "cockpit" == geofs.camera.currentModeName && (geofs.camera.hasMoved = !0);
            return !0
        }
        return !1
    },
    rotate: function (a, b, c) {
        a = a || 0;
        b = b || 0;
        c = c || 0;
        if (geofs.camera.isHandlingMouseRotation()) {
            var d = geofs.camera.definitions[geofs.camera.currentModeName];
            d.orientations.current[0] -= a;
            d.orientations.current[1] += b;
            d.orientations.current[2] += c || 0;
            "cockpit" == geofs.camera.currentModeName && (geofs.camera.hasMoved = !0);
            return !0
        }
        return !1
    },
    translate: function (a, b, c) {
        a = a || 0;
        b = b || 0;
        c = c || 0;
        if (geofs.camera.isHandlingMouseRotation()) {
            var d =
                geofs.camera.definitions[geofs.camera.currentModeName],
                e = geofs.aircraft.instance.object3d.getWorldFrame(),
                f = M33.rotationXYZ(M33.identity(), [-geofs.camera.htr[1] * DEGREES_TO_RAD, 0, geofs.camera.htr[0] * DEGREES_TO_RAD]);
            "follow" == geofs.camera.currentModeName ? (d.distance += b, a = [a, 0, c]) : (a = M33.transform(f, [a, b, c]), a = M33.transformByTranspose(e, a));
            d.offsets.current = V3.add(d.offsets.current, a);
            d.offsetBounds && (d.offsets.current[0] = clamp(d.offsets.current[0], d.offsetBounds[0], d.offsetBounds[1]), d.offsets.current[1] =
                clamp(d.offsets.current[1], d.offsetBounds[2], d.offsetBounds[3]), d.offsets.current[2] = clamp(d.offsets.current[2], d.offsetBounds[4], d.offsetBounds[5]));
            "cockpit" == geofs.camera.currentModeName && (geofs.camera.hasMoved = !0);
            return !0
        }
        return !1
    },
    setPosition: function (a, b, c) {
        a = a || 0;
        b = b || 0;
        c = c || 0;
        if (geofs.camera.isHandlingMouseRotation()) {
            var d = geofs.camera.definitions[geofs.camera.currentModeName],
                e = geofs.aircraft.instance.object3d.getWorldFrame(),
                f = M33.rotationXYZ(M33.identity(), [-geofs.camera.htr[1] * DEGREES_TO_RAD,
                    0, geofs.camera.htr[0] * DEGREES_TO_RAD
                ]);
            "follow" == geofs.camera.currentModeName ? (d.distance += b, a = [a, 0, c]) : (a = M33.transform(f, [a, b, c]), a = M33.transformByTranspose(e, a));
            d.offsets.current = V3.dup(a);
            "cockpit" == geofs.camera.currentModeName && (geofs.camera.hasMoved = !0);
            return !0
        }
        return !1
    },
    isHandlingMouseRotation: function () {
        return "follow" == geofs.camera.currentModeName || "cockpit" == geofs.camera.currentModeName || "fixed" == geofs.camera.currentModeName || geofs.camera.currentDefinition.rotatable ? !0 : !1
    },
    setRotation: function (a,
        b, c) {
        var d = geofs.camera.definitions[geofs.camera.currentModeName];
        return "follow" == geofs.camera.currentModeName || "fixed" == geofs.camera.currentModeName ? (d.orientations.current[0] = a, d.orientations.current[1] = b || d.orientations.last[1], d.orientations.current[2] = c || d.orientations.last[2], !0) : "cockpit" == geofs.camera.currentModeName ? (d.orientations.current[0] = a || d.orientations.last[0], d.orientations.current[1] = b || d.orientations.last[1], d.orientations.current[2] = c || d.orientations.last[2], geofs.camera.hasMoved = !0) : !1
    },
    saveRotation: function () {
        if (geofs.camera.definitions) {
            var a = geofs.camera.definitions[geofs.camera.currentModeName];
            a.orientations.last = V3.dup(a.orientations.current)
        }
    },
    saveOffset: function () {
        if (geofs.camera.definitions) {
            var a = geofs.camera.definitions[geofs.camera.currentModeName];
            a.offsets.last = V3.dup(a.offsets.current)
        }
    },
    setToNeutral: function () {
        var a = geofs.camera.definitions[geofs.camera.currentModeName];
        a.orientations.current = V3.dup(a.orientations.neutral);
        a.orientations.last = V3.dup(a.orientations.neutral);
        a.offsets.current = V3.dup(a.offsets.neutral);
        a.offsets.last = V3.dup(a.offsets.neutral);
        geofs.camera.setFOV(a.FOV || geofs.camera.defaultFOV);
        "cockpit" == geofs.camera.currentModeName && (geofs.camera.hasMoved = !0)
    },
    avoidGround: function () {
        var a = geofs.getCollisionResult(geofs.camera.lla, geofs.camera.worldPosition, geofs.aircraft.instance.collResult, geofs.camera);
        geofs.camera.groundAltitude = a.location[2];
        a = geofs.camera.lla[2] - geofs.camera.groundAltitude;
        geofs.cautiousWithTerrain && Math.abs(a) > geofs.camera.groundAvoidanceIgnore ||
            (a <= geofs.camera.groundAvoidanceMargin && (geofs.camera.lla[2] = geofs.camera.groundAltitude + geofs.camera.groundAvoidanceMargin), geofs.camera.hasMoved = !0)
    },
    getFlytToCoordinates: function () {
        var a = clone(geofs.camera.lla);
        a[2] = clamp(a[2], 0, 3E4);
        a[3] = geofs.camera.htr[0];
        geofs.camera.lla[2] - geofs.camera.groundAltitude < geofs.camera.groundAvoidanceMargin ? (a[2] = 0, a[4] = !1) : a[4] = !0;
        return a
    },
    update: function (a) {
        var b = geofs.aircraft.instance;
        if (geofs.aircraft.instance.object3d) {
            var c = geofs.aircraft.instance.object3d.getWorldFrame(),
                d = geofs.camera.currentDefinition;
            geofs.camera.animations.orbitHorizontal.active && (geofs.camera.rotate(geofs.camera.animations.orbitHorizontal.rate * a), geofs.camera.saveRotation());
            if (geofs.camera.animations.orbitVertical.active) {
                var e = geofs.camera.animations.orbitVertical;
                fixAngle(geofs.camera.htr[1]);
                geofs.camera.rotate(null, e.rate * a);
                geofs.camera.saveRotation()
            }
            if ("follow" == geofs.camera.currentModeName) {
                e = d.orientations.current[0];
                c = d.orientations.current[1];
                var f = 1 - Math.exp(-a / .5);
                a = d.lastUsedHtr[0] +
                    fixAngle(b.htr[0] - d.lastUsedHtr[0]) * f;
                f = d.lastUsedHtr[1] + fixAngle(b.htr[1] - d.lastUsedHtr[1]) * f;
                d.lastUsedHtr = [a, f, 0];
                e = a + e;
                a = f + c;
                c = M33.rotationXYZ(M33.identity(), [a * DEGREES_TO_RAD, 0, e * DEGREES_TO_RAD]);
                geofs.camera.worldPosition = V3.add(d.position, d.offsets.current);
                e = M33.transform(c, geofs.camera.worldPosition);
                b = V3.add(b.llaLocation, xyz2lla(e, b.llaLocation));
                d = V3.scale(c[1], -d.distance);
                d = xyz2lla(d, b);
                geofs.camera.lla = V3.add(b, d);
                geofs.camera.avoidGround();
                geofs.camera.htr = lookAt(b, geofs.camera.lla,
                    [0, 0, 1]);
                geofs.camera.htr = [fixAngle360(geofs.camera.htr[0]), fixAngle360(-geofs.camera.htr[1]), 0];
                geofs.api.setCameraPositionAndOrientation(geofs.camera.cam, geofs.camera.lla, geofs.camera.htr)
            } else "chase" == geofs.camera.currentModeName ? (geofs.camera.avoidGround(), geofs.camera.lla = geofs.api.getCameraLla(geofs.camera.cam), controls.mouse.down || (geofs.camera.htr = lookAt(b.llaLocation, geofs.camera.lla, [0, 0, 1]), geofs.camera.htr = [fixAngle360(geofs.camera.htr[0]), fixAngle360(-geofs.camera.htr[1]), 0], geofs.api.setCameraPositionAndOrientation(geofs.camera.cam,
                geofs.camera.lla, geofs.camera.htr))) : "free" == geofs.camera.currentModeName ? (geofs.camera.avoidGround(), geofs.camera.lla = geofs.api.getCameraLla(geofs.camera.cam), geofs.camera.htr[0] = geofs.api.getHeading(geofs.camera.cam)) : (e = d.orientations.current[0], a = d.orientations.current[1], f = d.orientations.current[2], d.parent && (c = geofs.aircraft.instance.parts[d.parent].object3d.getWorldFrame()), c = M33.rotationXYZ(c, [-a * DEGREES_TO_RAD, f * DEGREES_TO_RAD, e * DEGREES_TO_RAD]), geofs.camera.htr = M33.getOrientation(c), geofs.camera.worldPosition =
                    V3.add(d.position, d.offsets.current), "cockpit" == geofs.camera.currentModeName && geofs.preferences.camera.headMotion && (c = V3.scale([-geofs.animation.values.accX, -geofs.animation.values.accY, -geofs.animation.values.accZ], .001 * b.definition.motionSensitivity), c = V3.exponentialSmoothing("gsmooth", c, .1), geofs.camera.motionOffset[0] = c[0] / (geofs.camera.motionRange[0] / (geofs.camera.motionRange[0] - geofs.camera.motionOffset[0])), geofs.camera.motionOffset[1] = c[1] / (geofs.camera.motionRange[1] / (geofs.camera.motionRange[1] -
                        geofs.camera.motionOffset[1])), geofs.camera.motionOffset[2] = c[2] / (geofs.camera.motionRange[2] / (geofs.camera.motionRange[2] - geofs.camera.motionOffset[2])), geofs.camera.motionOffset = V3.clamp(geofs.camera.motionOffset, -.2, .2), geofs.camera.worldPosition = V3.add(geofs.camera.worldPosition, geofs.camera.motionOffset), geofs.camera.hasMoved = !0), geofs.camera.worldPosition = b.object3d.setVectorWorldPosition(geofs.camera.worldPosition), "cockpit" == geofs.camera.currentModeName && (geofs.camera.worldPosition = V3.scale(geofs.camera.worldPosition,
                            geofs.aircraft.instance.definition.cockpitScaleFix)), d.parent && (geofs.camera.worldPosition = V3.add(geofs.camera.worldPosition, geofs.aircraft.instance.parts[d.parent].object3d.getWorldPosition())), geofs.camera.lla = V3.add(b.llaLocation, xyz2lla(geofs.camera.worldPosition, b.llaLocation)), geofs.camera.avoidGround(), geofs.camera.htr = [fixAngle360(geofs.camera.htr[0]), fixAngle360(-geofs.camera.htr[1]), -geofs.camera.htr[2]], geofs.api.setCameraPositionAndOrientation(geofs.camera.cam, geofs.camera.lla, geofs.camera.htr));
            geofs.camera.radianRoll = geofs.camera.htr[2] * DEGREES_TO_RAD;
            geofs.camera.openSlave && geofs.camera.updateSlaveData();
            "cockpit" == geofs.camera.currentModeName && geofs.camera.hasMoved && (instruments.updateCockpitPositions(), geofs.camera.hasMoved = !1);
            geofs.camera.update3DOverlayPosition()
        }
    },
    update3DOverlayPosition: function () {
        if (geofs.aircraft.instance.parts && geofs.aircraft.instance.parts.camera && geofs.aircraft.instance.parts.camera.object3d) {
            var a = V3.toRadians(geofs.camera.htr);
            geofs.aircraft.instance.parts.camera.object3d.setInitiallRotation([-a[1],
            -a[2], a[0]
            ]);
            if (a = geofs.api.getLlaFromScreencoordDepth(instruments.gaugeOverlayPosition[0], instruments.gaugeOverlayPosition[1], instruments.gaugeOverlayPosition[2])) geofs.aircraft.instance.parts.camera.object3d.compute(a), geofs.aircraft.instance.parts.camera.object3d.render(a)
        }
    },
    openSlaveWindow: function (a) {
        var b = "left=" + ((window.screenX || window.screenLeft) + a * (window.outerWidth || 1024));
        window.open("slave.html?order=" + a, ("geofsSlave" + a).replace("-", "l"), b) && (geofs.camera.openSlave = !0)
    },
    updateSlaveData: function () {
        geofs.camera.transform =
            M33.setFromEuler([-geofs.camera.htr[1] * DEGREES_TO_RAD, -geofs.camera.htr[2] * DEGREES_TO_RAD, geofs.camera.htr[0] * DEGREES_TO_RAD])
    }
};
"use strict";
var instruments = window.instruments || {};
instruments.stackPosition = {
    x: 0,
    y: 0
};
instruments.margins = [0, 0, 0, 0];
instruments.defaultMargin = 10;
instruments.visible = !0;
instruments.list = {};
instruments.gaugeOverlayPosition = [0, 0, 0];
instruments.gaugeOverlayOrigin = [20, 200, .8];
instruments.definitions = {
    airspeed: {
        stackX: !0,
        overlay: {
            url: "images/instruments/airspeed.png",
            size: {
                x: 200,
                y: 200
            },
            anchor: {
                x: 100,
                y: 100
            },
            position: {
                x: 0,
                y: 110
            },
            rescale: !0,
            rescalePosition: !0,
            overlays: [{
                animations: [{
                    type: "rotate",
                    value: "kias",
                    ratio: -1.5,
                    min: 0
                }],
                url: "images/instruments/airspeed-hand.png",
                anchor: {
                    x: 10,
                    y: 34
                },
                size: {
                    x: 20,
                    y: 120
                },
                position: {
                    x: 0,
                    y: 0
                }
            }]
        }
    },
    airspeedJet: {
        stackX: !0,
        overlay: {
            url: "images/instruments/airspeed-high.png",
            size: {
                x: 200,
                y: 200
            },
            anchor: {
                x: 100,
                y: 100
            },
            position: {
                x: 0,
                y: 110
            },
            rescale: !0,
            rescalePosition: !0,
            overlays: [{
                animations: [{
                    type: "rotate",
                    value: "kias",
                    ratio: -.6,
                    min: 0
                }],
                url: "images/instruments/airspeed-hand.png",
                anchor: {
                    x: 10,
                    y: 34
                },
                size: {
                    x: 20,
                    y: 120
                },
                position: {
                    x: 0,
                    y: 0
                }
            }]
        }
    },
    airspeedSupersonic: {
        stackX: !0,
        overlay: {
            url: "images/instruments/airspeed-supersonic.png",
            size: {
                x: 200,
                y: 200
            },
            anchor: {
                x: 100,
                y: 100
            },
            position: {
                x: 0,
                y: 110
            },
            rescale: !0,
            rescalePosition: !0,
            overlays: [{
                animations: [{
                    type: "rotate",
                    value: "kias",
                    ratio: -.3,
                    min: 0
                }],
                url: "images/instruments/airspeed-hand.png",
                anchor: {
                    x: 10,
                    y: 34
                },
                size: {
                    x: 20,
                    y: 120
                },
                position: {
                    x: 0,
                    y: 0
                }
            }, {
                animations: [{
                    type: "rotate",
                    value: "mach",
                    ratio: -72,
                    min: 0
                }],
                url: "images/instruments/mach-hand.png",
                anchor: {
                    x: 5,
                    y: 5
                },
                size: {
                    x: 11,
                    y: 31
                },
                position: {
                    x: -70,
                    y: -70
                }
            }]
        }
    },
    altitude_legacy: {
        stackX: !0,
        overlay: {
            url: "images/instruments/altitude.png",
            size: {
                x: 200,
                y: 200
            },
            anchor: {
                x: 100,
                y: 100
            },
            position: {
                x: 0,
                y: 110
            },
            rescale: !0,
            rescalePosition: !0,
            overlays: [{
                animations: [{
                    type: "rotate",
                    value: "altitude",
                    ratio: -.0036
                }],
                url: "images/instruments/tenthousandhand.png",
                anchor: {
                    x: 8,
                    y: 0
                },
                size: {
                    x: 16,
                    y: 91
                },
                position: {
                    x: 0,
                    y: 0
                }
            }, {
                animations: [{
                    type: "rotate",
                    value: "altitude",
                    ratio: -.036
                }],
                url: "images/instruments/small-hand.png",
                anchor: {
                    x: 10,
                    y: 28
                },
                size: {
                    x: 20,
                    y: 87
                },
                position: {
                    x: 0,
                    y: 0
                }
            }, {
                animations: [{
                    type: "rotate",
                    value: "altitude",
                    ratio: -.36
                }],
                url: "images/instruments/airspeed-hand.png",
                anchor: {
                    x: 10,
                    y: 34
                },
                size: {
                    x: 20,
                    y: 120
                },
                position: {
                    x: 0,
                    y: 0
                }
            }]
        }
    },
    altitude: {
        stackX: !0,
        overlay: {
            url: "images/instruments/altitude2/background.png",
            size: {
                x: 200,
                y: 200
            },
            anchor: {
                x: 100,
                y: 100
            },
            position: {
                x: 0,
                y: 110
            },
            rescale: !0,
            rescalePosition: !0,
            overlays: [{
                animations: [{
                    type: "rotate",
                    value: "altitude",
                    ratio: -.011,
                    preoffset: -1E4,
                    min: 1E4,
                    max: 15E3
                }],
                url: "images/instruments/altitude2/stripe_mask.png",
                anchor: {
                    x: 58,
                    y: 54
                },
                size: {
                    x: 116,
                    y: 111
                },
                position: {
                    x: 0,
                    y: 0
                }
            }, {
                animations: [{
                    type: "rotate",
                    value: "altitude",
                    ratio: -.0036
                }],
                url: "images/instruments/tenthousandhand.png",
                anchor: {
                    x: 8,
                    y: 0
                },
                size: {
                    x: 16,
                    y: 91
                },
                position: {
                    x: 0,
                    y: 0
                }
            }, {
                animations: [{
                    type: "rotate",
                    value: "altitude",
                    ratio: -.036
                }],
                url: "images/instruments/small-hand.png",
                anchor: {
                    x: 10,
                    y: 28
                },
                size: {
                    x: 20,
                    y: 87
                },
                position: {
                    x: 0,
                    y: 0
                }
            }, {
                animations: [{
                    type: "rotate",
                    value: "altitude",
                    ratio: -.36
                }],
                url: "images/instruments/airspeed-hand.png",
                anchor: {
                    x: 10,
                    y: 34
                },
                size: {
                    x: 20,
                    y: 120
                },
                position: {
                    x: 0,
                    y: 0
                }
            }, {
                url: "images/instruments/altitude2/shine.png",
                size: {
                    x: 200,
                    y: 200
                },
                anchor: {
                    x: 100,
                    y: 100
                },
                position: {
                    x: 0,
                    y: 0
                }
            }]
        }
    },
    vario: {
        stackX: !0,
        overlay: {
            url: "images/instruments/vario.png",
            size: {
                x: 200,
                y: 200
            },
            anchor: {
                x: 100,
                y: 100
            },
            position: {
                x: 0,
                y: 110
            },
            rescale: !0,
            rescalePosition: !0,
            overlays: [{
                animations: [{
                    type: "rotate",
                    value: "climbrate",
                    ratio: -.09,
                    max: 1900,
                    min: -1900,
                    offset: 90
                }],
                url: "images/instruments/airspeed-hand.png",
                anchor: {
                    x: 10,
                    y: 34
                },
                size: {
                    x: 20,
                    y: 120
                },
                position: {
                    x: 0,
                    y: 0
                }
            }]
        }
    },
    varioJet: {
        stackX: !0,
        overlay: {
            url: "images/instruments/vario-high.png",
            size: {
                x: 200,
                y: 200
            },
            anchor: {
                x: 100,
                y: 100
            },
            position: {
                x: 0,
                y: 110
            },
            rescale: !0,
            rescalePosition: !0,
            overlays: [{
                animations: [{
                    type: "rotate",
                    value: "climbrate",
                    ratio: -.025,
                    max: 6E3,
                    min: -6E3,
                    offset: 90
                }],
                url: "images/instruments/airspeed-hand.png",
                anchor: {
                    x: 10,
                    y: 34
                },
                size: {
                    x: 20,
                    y: 120
                },
                position: {
                    x: 0,
                    y: 0
                }
            }]
        }
    },
    compass: {
        stackX: !0,
        overlay: {
            url: "images/instruments/compass.png",
            size: {
                x: 200,
                y: 200
            },
            anchor: {
                x: 100,
                y: 100
            },
            position: {
                x: 0,
                y: 110
            },
            rescale: !0,
            rescalePosition: !0,
            overlays: [{
                animations: [{
                    type: "rotate",
                    value: "heading",
                    ratio: 1
                }],
                url: "images/instruments/compass-grad.png",
                anchor: {
                    x: 90,
                    y: 90
                },
                size: {
                    x: 181,
                    y: 181
                },
                position: {
                    x: 0,
                    y: 0
                }
            }, {
                url: "images/instruments/compass-hand.png",
                anchor: {
                    x: 25,
                    y: 26
                },
                size: {
                    x: 50,
                    y: 109
                },
                position: {
                    x: 0,
                    y: 0
                }
            }]
        }
    },
    attitude: {
        stackX: !0,
        overlay: {
            url: "images/instruments/attitude.png",
            size: {
                x: 200,
                y: 200
            },
            anchor: {
                x: 100,
                y: 100
            },
            position: {
                x: 0,
                y: 110
            },
            rescale: !0,
            rescalePosition: !0,
            overlays: [{
                animations: [{
                    type: "rotate",
                    value: "aroll",
                    name: "attitude",
                    ratio: -1,
                    min: -50,
                    max: 50
                }, {
                    type: "translateY",
                    value: "atilt",
                    ratio: -2,
                    offset: 75,
                    min: -25,
                    max: 25
                }],
                url: "images/instruments/attitude-hand.png",
                anchor: {
                    x: 100,
                    y: 75
                },
                size: {
                    x: 200,
                    y: 300
                },
                position: {
                    x: 0,
                    y: 0
                },
                iconFrame: {
                    x: 200,
                    y: 150
                }
            }, {
                animations: [{
                    type: "rotate",
                    value: "aroll",
                    ratio: -1,
                    min: -60,
                    max: 60
                }],
                url: "images/instruments/attitude-grad.png",
                anchor: {
                    x: 100,
                    y: 100
                },
                size: {
                    x: 200,
                    y: 200
                },
                position: {
                    x: 0,
                    y: 0
                }
            }, {
                url: "images/instruments/attitude-pointer.png",
                anchor: {
                    x: 100,
                    y: 100
                },
                size: {
                    x: 200,
                    y: 200
                },
                position: {
                    x: 0,
                    y: 0
                }
            }]
        }
    },
    attitudeJet: {
        stackX: !0,
        overlay: {
            url: "images/instruments/attitude-jet.png",
            size: {
                x: 200,
                y: 200
            },
            anchor: {
                x: 100,
                y: 100
            },
            position: {
                x: 0,
                y: 110
            },
            rescale: !0,
            rescalePosition: !0,
            overlays: [{
                animations: [{
                    type: "rotate",
                    value: "aroll",
                    ratio: -1,
                    min: -180,
                    max: 180
                }, {
                    type: "translateY",
                    value: "atilt",
                    ratio: -2,
                    offset: 330,
                    min: -90,
                    max: 90
                }],
                url: "images/instruments/attitude-jet-hand.png",
                anchor: {
                    x: 100,
                    y: 70
                },
                size: {
                    x: 200,
                    y: 800
                },
                position: {
                    x: 0,
                    y: 0
                },
                iconFrame: {
                    x: 200,
                    y: 140
                }
            }, {
                animations: [{
                    type: "rotate",
                    value: "aroll",
                    ratio: -1,
                    min: -60,
                    max: 60
                }],
                url: "images/instruments/attitude-jet-pointer.png",
                anchor: {
                    x: 100,
                    y: 100
                },
                size: {
                    x: 200,
                    y: 200
                },
                position: {
                    x: 0,
                    y: 0
                }
            }, {
                url: "images/instruments/attitude-jet.png",
                anchor: {
                    x: 100,
                    y: 100
                },
                size: {
                    x: 200,
                    y: 200
                },
                position: {
                    x: 0,
                    y: 0
                }
            }]
        }
    },
    rpmJet: {
        stackX: !0,
        overlay: {
            url: "images/instruments/jet-rpm.png",
            size: {
                x: 200,
                y: 200
            },
            anchor: {
                x: 100,
                y: 100
            },
            position: {
                x: 0,
                y: 110
            },
            rescale: !0,
            rescalePosition: !0,
            overlays: [{
                animations: [{
                    type: "rotate",
                    value: "rpm",
                    ratio: -.036,
                    offset: 0
                }],
                url: "images/instruments/jet-rpm-hand.png",
                anchor: {
                    x: 6,
                    y: 15
                },
                size: {
                    x: 14,
                    y: 34
                },
                position: {
                    x: -38,
                    y: 45
                }
            }, {
                animations: [{
                    type: "rotate",
                    value: "rpm",
                    ratio: -.027,
                    offset: 0
                }],
                url: "images/instruments/airspeed-hand.png",
                anchor: {
                    x: 10,
                    y: 34
                },
                size: {
                    x: 20,
                    y: 120
                },
                position: {
                    x: 0,
                    y: 0
                }
            }]
        }
    },
    rpm: {
        stackX: !0,
        overlay: {
            url: "images/instruments/rpm.png",
            size: {
                x: 100,
                y: 100
            },
            anchor: {
                x: 50,
                y: 50
            },
            position: {
                x: 0,
                y: 110
            },
            rescale: !0,
            rescalePosition: !0,
            overlays: [{
                animations: [{
                    type: "rotate",
                    value: "rpm",
                    ratio: -.03,
                    offset: 120
                }],
                url: "images/instruments/rpm-hand.png",
                anchor: {
                    x: 14,
                    y: 14
                },
                size: {
                    x: 28,
                    y: 55
                },
                position: {
                    x: 0,
                    y: 0
                }
            }]
        }
    },
    jetfuel: {
        overlay: {
            class: "geofs-authenticated",
            url: "images/instruments/jet-fuel-gauge.png",
            opacity: 1,
            alignment: {
                x: "right",
                y: "bottom"
            },
            size: {
                x: 100,
                y: 100
            },
            anchor: {
                x: 60,
                y: 50
            },
            position: {
                x: 80,
                y: 110
            },
            rescale: !0,
            rescalePosition: !0,
            animations: [{
                type: "opacity",
                value: function () {
                    return 0 == geofs.animation.values.jetfuel ? .5 : 1
                }
            }],
            overlays: [{
                animations: [{
                    type: "rotate",
                    value: "jetfuel",
                    ratio: -.118,
                    offset: 120,
                    min: 0,
                    max: 1E3
                }],
                class: "geofs-authenticated",
                url: "images/instruments/jet-fuel-hand.png",
                anchor: {
                    x: 10,
                    y: 10
                },
                size: {
                    x: 19,
                    y: 47
                },
                position: {
                    x: 0,
                    y: 0
                }
            }, {
                class: "geofs-authenticated",
                url: "images/instruments/jet-fuel.png",
                anchor: {
                    x: 0,
                    y: 0
                },
                scale: {
                    x: .85,
                    y: .85
                },
                size: {
                    x: 100,
                    y: 100
                },
                position: {
                    x: -20,
                    y: -70
                }
            }, {
                class: "geofs-authenticated",
                size: {
                    x: 100,
                    y: 100
                },
                anchor: {
                    x: 50,
                    y: 50
                },
                animations: [{
                    type: "title",
                    value: "jetfuel",
                    concat: " liters"
                }]
            }]
        }
    },
    wind: {
        overlay: {
            url: "images/instruments/wind-body.png",
            opacity: .5,
            scale: {
                x: .5,
                y: .5
            },
            position: {
                x: 120,
                y: 400
            },
            anchor: {
                x: 100,
                y: 100
            },
            size: {
                x: 200,
                y: 200
            },
            alignment: {
                x: "right",
                y: "top"
            },
            rescale: !0,
            rescalePosition: !0,
            overlays: [{
                animations: [{
                    type: "rotate",
                    value: "relativeWind",
                    ratio: -1
                }],
                url: "images/instruments/wind-hand.png",
                anchor: {
                    x: 100,
                    y: 100
                },
                size: {
                    x: 200,
                    y: 200
                },
                position: {
                    x: 0,
                    y: 0
                }
            }, {
                animations: [{
                    type: "text",
                    value: "windSpeedLabel"
                }],
                text: "-",
                class: "geofs-center",
                anchor: {
                    x: 100,
                    y: 0
                },
                size: {
                    x: 200,
                    y: 60
                },
                position: {
                    x: 0,
                    y: -140
                }
            }]
        }
    },
    spoilers: {
        overlay: {
            url: "images/instruments/spoilers.png",
            visibility: !0,
            anchor: {
                x: 85,
                y: 0
            },
            alignment: {
                x: "right",
                y: "bottom"
            },
            position: {
                x: 20,
                y: 195
            },
            size: {
                x: 85,
                y: 21
            },
            rescale: !0,
            rescalePosition: !0,
            animations: [{
                value: "airbrakesPosition",
                type: "show",
                gt: .1
            }]
        }
    },
    brakes: {
        overlay: {
            url: "images/instruments/brakes.png",
            visibility: !0,
            anchor: {
                x: 73,
                y: 0
            },
            alignment: {
                x: "right",
                y: "bottom"
            },
            position: {
                x: 20,
                y: 170
            },
            size: {
                x: 73,
                y: 19
            },
            rescale: !0,
            rescalePosition: !0,
            animations: [{
                value: "brakes",
                type: "show",
                gt: .5
            }]
        }
    },
    gear: {
        overlay: {
            url: "images/instruments/gear.png",
            anchor: {
                x: 60,
                y: 0
            },
            alignment: {
                x: "right",
                y: "bottom"
            },
            position: {
                x: 30,
                y: 230
            },
            size: {
                x: 46,
                y: 16
            },
            class: "gear-overlay",
            rescale: !0,
            rescalePosition: !0,
            overlays: [{
                animations: [{
                    value: "gearPosition",
                    type: "show",
                    when: [0]
                }],
                url: "images/instruments/led-green.png",
                anchor: {
                    x: 0,
                    y: 0
                },
                size: {
                    x: 12,
                    y: 12
                },
                position: {
                    x: -10,
                    y: 2
                }
            }, {
                animations: [{
                    value: "gearPosition",
                    type: "show",
                    when: [1]
                }],
                url: "images/instruments/led-red.png",
                anchor: {
                    x: 0,
                    y: 0
                },
                size: {
                    x: 12,
                    y: 12
                },
                position: {
                    x: -10,
                    y: 2
                }
            }, {
                animations: [{
                    value: "gearPosition",
                    type: "show",
                    whenNot: [0, 1]
                }],
                url: "images/instruments/led-orange.png",
                anchor: {
                    x: 0,
                    y: 0
                },
                size: {
                    x: 12,
                    y: 12
                },
                position: {
                    x: -10,
                    y: 2
                }
            }]
        }
    },
    flaps: {
        overlay: {
            url: "images/instruments/flaps.png",
            anchor: {
                x: 74,
                y: 0
            },
            alignment: {
                x: "right",
                y: "bottom"
            },
            position: {
                x: 20,
                y: 260
            },
            size: {
                x: 74,
                y: 23
            },
            class: "flaps-overlay",
            rescale: !0,
            rescalePosition: !0,
            overlays: [{
                animations: [{
                    type: "rotate",
                    value: "flapsValue",
                    ratio: -90
                }],
                url: "images/instruments/flaps-hand.png",
                anchor: {
                    x: 0,
                    y: 5
                },
                size: {
                    x: 17,
                    y: 6
                },
                position: {
                    x: -23,
                    y: 25
                }
            }]
        }
    }
};
instruments.definitionsMobile = {
    airspeed_mini: {
        group: "mini",
        stackX: !0,
        visibility: !1,
        overlay: {
            anchor: {
                x: 0,
                y: 0
            },
            position: {
                x: 0,
                y: 20
            },
            size: {
                x: 100,
                y: 19
            },
            opacity: .5,
            class: "control-pad",
            overlays: [{
                text: "IAS",
                class: "geofs-instrument-display-label",
                anchor: {
                    x: 0,
                    y: 0
                },
                size: {
                    x: 50,
                    y: 20
                },
                position: {
                    x: 5,
                    y: 0
                }
            }, {
                text: "kts",
                class: "geofs-instrument-display-label",
                anchor: {
                    x: 0,
                    y: 0
                },
                size: {
                    x: 20,
                    y: 20
                },
                position: {
                    x: 80,
                    y: 0
                }
            }, {
                animations: [{
                    type: "text",
                    value: "kias",
                    floor: !0
                }],
                text: "0",
                class: "geofs-instrument-display-value",
                anchor: {
                    x: 0,
                    y: 0
                },
                size: {
                    x: 75,
                    y: 20
                },
                position: {
                    x: 0,
                    y: 0
                }
            }]
        },
        animations: [{
            value: "view",
            type: "show",
            notEq: "cockpit"
        }]
    },
    altitude_mini: {
        group: "mini",
        stackX: !0,
        visibility: !1,
        overlay: {
            anchor: {
                x: 0,
                y: 0
            },
            position: {
                x: 0,
                y: 20
            },
            size: {
                x: 120,
                y: 19
            },
            opacity: .5,
            class: "control-pad",
            overlays: [{
                text: "ALT",
                class: "geofs-instrument-display-label",
                anchor: {
                    x: 0,
                    y: 0
                },
                size: {
                    x: 50,
                    y: 20
                },
                position: {
                    x: 5,
                    y: 0
                }
            }, {
                text: "ft",
                class: "geofs-instrument-display-label",
                anchor: {
                    x: 0,
                    y: 0
                },
                size: {
                    x: 15,
                    y: 20
                },
                position: {
                    x: 105,
                    y: 0
                }
            }, {
                animations: [{
                    type: "text",
                    value: "altitude",
                    floor: !0
                }],
                text: "0",
                class: "geofs-instrument-display-value",
                anchor: {
                    x: 0,
                    y: 0
                },
                size: {
                    x: 100,
                    y: 20
                },
                position: {
                    x: 0,
                    y: 0
                }
            }]
        },
        animations: [{
            value: "view",
            type: "show",
            notEq: "cockpit"
        }]
    },
    compass_mini: {
        group: "mini",
        stackX: !0,
        visibility: !1,
        overlay: {
            anchor: {
                x: 0,
                y: 0
            },
            position: {
                x: 0,
                y: 20
            },
            size: {
                x: 80,
                y: 19
            },
            opacity: .5,
            class: "control-pad",
            overlays: [{
                text: "HDG",
                class: "geofs-instrument-display-label",
                anchor: {
                    x: 0,
                    y: 0
                },
                size: {
                    x: 50,
                    y: 20
                },
                position: {
                    x: 5,
                    y: 0
                }
            }, {
                animations: [{
                    type: "text",
                    value: "heading360",
                    floor: !0
                }],
                text: "0",
                class: "geofs-instrument-display-value",
                anchor: {
                    x: 0,
                    y: 0
                },
                size: {
                    x: 35,
                    y: 20
                },
                position: {
                    x: 40,
                    y: 0
                }
            }]
        },
        animations: [{
            value: "view",
            type: "show",
            notEq: "cockpit"
        }]
    },
    brakes: {
        group: "controls",
        overlay: {
            anchor: {
                x: 50,
                y: 0
            },
            alignment: {
                x: "right",
                y: "bottom"
            },
            position: {
                x: 10,
                y: 10
            },
            size: {
                x: 50,
                y: 50
            },
            opacity: .5,
            class: "control-pad brakes-overlay",
            overlays: [{
                animations: [{
                    value: "brakes",
                    type: "show",
                    when: [1]
                }],
                class: "control-pad-label orange-pad",
                text: "ON",
                anchor: {
                    x: 50,
                    y: 0
                },
                size: {
                    x: 50,
                    y: 50
                },
                position: {
                    x: 0,
                    y: 0
                }
            }, {
                text: "BRAKE",
                class: "control-pad-label",
                anchor: {
                    x: 50,
                    y: 0
                },
                size: {
                    x: 50,
                    y: 20
                },
                position: {
                    x: 0,
                    y: 25
                }
            }]
        }
    },
    flaps: {
        group: "controls",
        overlay: {
            anchor: {
                x: 50,
                y: 0
            },
            alignment: {
                x: "right",
                y: "bottom"
            },
            position: {
                x: 70,
                y: 10
            },
            size: {
                x: 50,
                y: 50
            },
            opacity: .5,
            class: "control-pad flaps-overlay",
            overlays: [{
                text: "FLAPS",
                class: "control-pad-label",
                anchor: {
                    x: 50,
                    y: 0
                },
                size: {
                    x: 50,
                    y: 20
                },
                position: {
                    x: 0,
                    y: 25
                }
            }, {
                animations: [{
                    type: "text",
                    value: "flapsTarget",
                    concat: [" / ", "flapsMaxPosition"]
                }],
                class: "control-pad-label",
                text: "0",
                anchor: {
                    x: 50,
                    y: 0
                },
                size: {
                    x: 50,
                    y: 20
                },
                position: {
                    x: 0,
                    y: 5
                }
            }]
        }
    },
    gear: {
        group: "controls",
        overlay: {
            anchor: {
                x: 50,
                y: 0
            },
            alignment: {
                x: "right",
                y: "bottom"
            },
            position: {
                x: 130,
                y: 10
            },
            size: {
                x: 50,
                y: 50
            },
            opacity: .5,
            class: "control-pad gear-overlay",
            overlays: [{
                animations: [{
                    value: "gearPosition",
                    type: "show",
                    when: [0]
                }],
                class: "control-pad-label green-pad",
                text: "DOWN",
                anchor: {
                    x: 50,
                    y: 0
                },
                size: {
                    x: 50,
                    y: 50
                },
                position: {
                    x: 0,
                    y: 0
                }
            }, {
                animations: [{
                    value: "gearPosition",
                    type: "show",
                    when: [1]
                }],
                class: "control-pad-label red-pad",
                text: "UP",
                anchor: {
                    x: 50,
                    y: 0
                },
                size: {
                    x: 50,
                    y: 50
                },
                position: {
                    x: 0,
                    y: 0
                }
            }, {
                animations: [{
                    value: "gearPosition",
                    type: "show",
                    whenNot: [0, 1]
                }],
                class: "control-pad-label orange-pad",
                text: "TRANS",
                anchor: {
                    x: 50,
                    y: 0
                },
                size: {
                    x: 50,
                    y: 50
                },
                position: {
                    x: 0,
                    y: 0
                }
            }, {
                text: "GEAR",
                class: "control-pad-label",
                anchor: {
                    x: 50,
                    y: 0
                },
                size: {
                    x: 50,
                    y: 20
                },
                position: {
                    x: 0,
                    y: 25
                }
            }]
        }
    },
    spoilers: {
        group: "controls",
        overlay: {
            anchor: {
                x: 50,
                y: 0
            },
            alignment: {
                x: "right",
                y: "bottom"
            },
            position: {
                x: 190,
                y: 10
            },
            size: {
                x: 50,
                y: 50
            },
            opacity: .5,
            class: "control-pad spoiler-overlay",
            overlays: [{
                animations: [{
                    value: "airbrakesPosition",
                    type: "show",
                    when: [0]
                }],
                class: "control-pad-label transp-pad",
                text: "RET",
                anchor: {
                    x: 50,
                    y: 0
                },
                size: {
                    x: 50,
                    y: 50
                },
                position: {
                    x: 0,
                    y: 0
                }
            }, {
                animations: [{
                    value: "airbrakesPosition",
                    type: "show",
                    whenNot: [0]
                }],
                class: "control-pad-label orange-pad",
                text: "DEP",
                anchor: {
                    x: 50,
                    y: 0
                },
                size: {
                    x: 50,
                    y: 50
                },
                position: {
                    x: 0,
                    y: 0
                }
            }, {
                text: "SPLR",
                class: "control-pad-label",
                anchor: {
                    x: 50,
                    y: 0
                },
                size: {
                    x: 50,
                    y: 20
                },
                position: {
                    x: 0,
                    y: 25
                }
            }]
        }
    }
};
instruments.definitions3DOverlay = {
    airspeed: {
        name: "3d-ias-overlay",
        group: "3doverlays",
        include: "3d-ias",
        parent: "camera",
        type: "none",
        position: [-.2, 0, 0],
        rotation: [0, 0, 0]
    },
    airspeedJet: {
        name: "3d-ias-high-overlay",
        group: "3doverlays",
        include: "3d-ias-high",
        parent: "camera",
        type: "none",
        position: [-.2, 0, 0],
        rotation: [0, 0, 0]
    },
    airspeedSupersonic: {
        name: "3d-ias-supersonic-overlay",
        group: "3doverlays",
        include: "3d-ias-supersonic",
        parent: "camera",
        type: "none",
        position: [-.2, 0, 0],
        rotation: [0, 0, 0]
    },
    altitude: {
        name: "3d-altimeter-overlay",
        group: "3doverlays",
        include: "3d-altimeter",
        parent: "camera",
        type: "none",
        position: [-.1, 0, -0],
        rotation: [0, 0, 0]
    },
    attitude: {
        name: "3d-attitude-overlay",
        group: "3doverlays",
        include: "3d-attitude",
        parent: "camera",
        type: "none",
        position: [0, 0, 0],
        rotation: [0, 0, 0]
    },
    attitudeJet: {
        name: "3d-attitude-jet-overlay",
        group: "3doverlays",
        include: "3d-attitude-jet",
        parent: "camera",
        type: "none",
        position: [0, 0, 0],
        rotation: [0, 0, 0]
    },
    attitudeJet2: {
        name: "3d-attitude-jet2-overlay",
        group: "3doverlays",
        include: "3d-attitude-jet2",
        parent: "camera",
        type: "none",
        position: [0, 0, 0],
        rotation: [0, 0, 0]
    },
    compass: {
        name: "3d-compass-overlay",
        group: "3doverlays",
        include: "3d-compass",
        parent: "camera",
        type: "none",
        position: [.1, 0, 0],
        rotation: [0, 0, 0]
    },
    vario: {
        name: "3d-vario-overlay",
        group: "3doverlays",
        include: "3d-vario",
        parent: "camera",
        type: "none",
        position: [.2, 0, 0],
        rotation: [0, 0, 0]
    },
    varioJet: {
        name: "3d-vario-high-overlay",
        group: "3doverlays",
        include: "3d-vario-high",
        parent: "camera",
        type: "none",
        position: [.2, 0, 0],
        rotation: [0, 0, 0]
    },
    rpm: {
        disabled: !0
    },
    rpmJet: {
        disabled: !0
    }
};
instruments.includesDefinitions = {
    "3d-altimeter": [{
        model: "models/gauges/altimeter/altimeter.gltf"
    }, {
        name: "hundreds",
        node: "hundreds",
        animations: [{
            type: "rotate",
            axis: "Y",
            value: "altitude",
            ratio: -.36
        }]
    }, {
        name: "thousands ",
        node: "thousands",
        animations: [{
            type: "rotate",
            axis: "Y",
            value: "altitude",
            ratio: -.036
        }]
    }, {
        name: "tenthousands ",
        node: "tenthousands",
        animations: [{
            type: "rotate",
            axis: "Y",
            value: "altitude",
            ratio: -.0036
        }]
    }, {
        name: "stripe_hand ",
        node: "stripe_hand",
        animations: [{
            type: "rotate",
            axis: "Y",
            value: "altitude",
            ratio: -.011,
            preoffset: -1E4,
            min: 1E4,
            max: 15E3
        }]
    }],
    "3d-ias": [{
        model: "models/gauges/ias/ias.gltf"
    }, {
        name: "hand ",
        node: "hand",
        animations: [{
            type: "rotate",
            axis: "Y",
            value: "kias",
            ratio: -1.5,
            min: 0
        }]
    }],
    "3d-ias-high": [{
        model: "models/gauges/kias-high/kiashigh.gltf"
    }, {
        name: "hand ",
        node: "kiashand",
        animations: [{
            type: "rotate",
            axis: "Y",
            value: "kias",
            ratio: -.6,
            min: 0
        }]
    }],
    "3d-ias-supersonic": [{
        model: "models/gauges/kias-supersonic/kiassupersonic.gltf"
    }, {
        name: "hand ",
        node: "kiashand",
        animations: [{
            type: "rotate",
            axis: "Y",
            value: "kias",
            ratio: -.3,
            min: 0
        }]
    }],
    "3d-compass": [{
        model: "models/gauges/compass/compass.gltf"
    }, {
        name: "compass-hand ",
        node: "compass-hand",
        animations: [{
            type: "rotate",
            axis: "Y",
            value: "heading",
            ratio: 1
        }]
    }],
    "3d-vario": [{
        model: "models/gauges/vario/vario.gltf"
    }, {
        name: "hand ",
        node: "hand",
        animations: [{
            type: "rotate",
            axis: "Y",
            value: "climbrate",
            ratio: -.09,
            max: 1900,
            min: -1900,
            offset: 90
        }]
    }],
    "3d-vario-high": [{
        model: "models/gauges/vario-high/vario-high.gltf"
    }, {
        name: "hand ",
        node: "hand",
        animations: [{
            type: "rotate",
            axis: "Y",
            value: "climbrate",
            ratio: -.025,
            max: 6E3,
            min: -6E3,
            offset: 90
        }]
    }],
    "3d-attitude-jet": [{
        model: "models/gauges/attitude-jet/attitude.gltf"
    }, {
        name: "ball",
        node: "ball",
        animations: [{
            type: "rotate",
            axis: "Y",
            value: "aroll",
            ratio: -1
        }, {
            type: "rotate",
            axis: "X",
            value: "atilt",
            ratio: 1
        }]
    }, {
        name: "hand",
        node: "hand",
        animations: [{
            type: "rotate",
            axis: "Y",
            value: "aroll",
            ratio: -1,
            min: -50,
            max: 50
        }]
    }],
    "3d-attitude-jet2": [{
        model: "models/gauges/attitude-jet2/attitudejet.gltf"
    }, {
        name: "ball",
        node: "ball",
        animations: [{
            type: "rotate",
            axis: "Y",
            value: "aroll",
            ratio: -1
        },
        {
            type: "rotate",
            axis: "X",
            value: "atilt",
            ratio: 1
        }
        ]
    }, {
        name: "hand",
        node: "hand",
        animations: [{
            type: "rotate",
            axis: "Y",
            value: "aroll",
            ratio: -1,
            min: -50,
            max: 50
        }]
    }],
    "3d-rpm": [{
        model: "models/gauges/rpm/rpm.gltf"
    }, {
        name: "hand",
        node: "hand",
        animations: [{
            type: "rotate",
            axis: "Y",
            value: "rpm",
            ratio: -.03,
            offset: 120
        }]
    }],
    "3d-jet-rpm": [{
        model: "models/gauges/jet-rpm/rpm.gltf"
    }, {
        name: "hand",
        node: "hand",
        animations: [{
            type: "rotate",
            axis: "Y",
            value: "rpm",
            ratio: -.027
        }]
    }, {
        name: "smallhand",
        node: "smallhand",
        animations: [{
            type: "rotate",
            axis: "Z",
            value: "rpm",
            ratio: .036
        }]
    }],
    "3d-attitude": [{
        model: "models/gauges/attitude/attitude.gltf"
    }, {
        name: "hand",
        node: "hand",
        animations: [{
            type: "rotate",
            axis: "Y",
            value: "aroll",
            ratio: -1,
            min: -50,
            max: 50
        }, {
            type: "translate",
            axis: "Z",
            value: "atilt",
            ratio: 7E-4,
            min: -25,
            max: 25
        }]
    }, {
        name: "ring",
        node: "ring",
        animations: [{
            type: "rotate",
            axis: "Y",
            value: "aroll",
            ratio: -1,
            min: -50,
            max: 50
        }]
    }],
    "3d-turn-coordinator": [{
        model: "models/gauges/turn-coordinator/turncoordinator.gltf"
    }, {
        name: "turn-rate-hand",
        node: "turn-rate-hand",
        animations: [{
            type: "rotate",
            axis: "Y",
            value: "turnrate",
            ratio: -.11,
            fmin: -40,
            fmax: 40
        }]
    }, {
        name: "ball",
        node: "ball",
        animations: [{
            type: "rotate",
            axis: "Y",
            value: "accX",
            ratio: -4,
            fmin: -15,
            fmax: 15
        }]
    }],
    "3d-gmeter": [{
        model: "models/gauges/gmeter/gmeter.gltf"
    }, {
        name: "hand ",
        node: "hand",
        animations: [{
            type: "rotate",
            axis: "Y",
            value: "accZ",
            ratio: -2.25,
            min: -30,
            max: 180,
            offset: 0
        }]
    }],
    "3d-compassball": [{
        model: "models/gauges/compassball/compassball.gltf"
    }, {
        name: "ball ",
        node: "ball",
        animations: [{
            type: "rotate",
            axis: "X",
            value: "atilt",
            ratio: -1,
            fmin: -10,
            fmax: 10
        }, {
            type: "rotate",
            axis: "Y",
            value: "aroll",
            ratio: 1,
            fmin: -10,
            fmax: 10
        }, {
            type: "rotate",
            axis: "Z",
            value: "heading360",
            ratio: -1,
            offset: 0
        }]
    }],
    "3d-manifold": [{
        model: "models/gauges/manifold/manifold.gltf"
    }, {
        name: "handmanifoldpressure",
        node: "handmanifoldpressure",
        animations: [{
            type: "rotate",
            axis: "Y",
            value: "rpm",
            ratio: -.018,
            offset: 0
        }]
    }, {
        name: "handfuelflow",
        node: "handfuelflow",
        animations: [{
            type: "rotate",
            axis: "Y",
            value: "rpm",
            ratio: -.028,
            offset: 0
        }]
    }],
    "3d-oil": [{
        model: "models/gauges/oil/oil.gltf"
    },
    {
        name: "handoilpressure",
        node: "handoilpressure",
        animations: [{
            type: "rotate",
            axis: "Y",
            value: "rpm",
            ratio: -.3,
            offset: 0,
            fmin: -120
        }]
    }, {
        name: "handoiltemp",
        node: "handoiltemp",
        animations: [{
            type: "rotate",
            axis: "Y",
            value: "rpm",
            ratio: -.1,
            offset: 0,
            fmin: -120
        }]
    }
    ],
    "3d-PFD": [{}]
};
instruments.init = function (a) {
    geofs.api.isMobile() ? (instruments.definitions = Object.assign(instruments.definitions, instruments.definitionsMobile), geofs.isApp && (instruments.definitions = Object.assign(instruments.definitions, instruments.definitions3DOverlay), instruments.margins = [0, 0, 35, 0]), instruments.stackPosition = {
        x: 120,
        y: 100
    }) : instruments.stackPosition = {
        x: 110,
        y: 100
    };
    geofs.includes = Object.assign(geofs.includes, instruments.includesDefinitions);
    a && "default" != a || (a = {
        airspeed: "",
        altitude2: "",
        altitude: "",
        vario: "",
        compass: "",
        rpm: "",
        brakes: ""
    });
    "jet" == a && (a = {
        airspeedJet: "",
        attitudeJet: "",
        altitude2: {
            center: !0
        },
        varioJet: "",
        compass: "",
        rpmJet: "",
        brakes: ""
    });
    for (var b in instruments.list) instruments.list[b].destroy();
    instruments.list = {};
    instruments.groups = {};
    for (b in a) {
        var c = $.extend(!0, {}, instruments.definitions[b], a[b]);
        c && (c.overlay ? (instruments.list[b] = new Indicator(c), c = c.group || "all", instruments.groups[c] = instruments.groups[c] || {}, instruments.groups[c][b] = instruments.list[b]) : c.include && (geofs.aircraft.instance.addParts([c]),
            geofs.aircraft.instance.parts[c.name].animations.push({
                value: "overlaysVisibility",
                type: "hide",
                eq: "hidden"
            })))
    }
    instruments.list.wind || geofs.isApp || (instruments.definitions.wind.visibility = weather.windActive ? !0 : !1, instruments.list.wind = new Indicator($.extend(!0, {}, instruments.definitions.wind)));
    instruments.resizeHandler || (instruments.resizeHandler = geofs.addResizeHandler(function () {
        instruments.updateScreenPositions()
    }))
};
instruments.toggle = function () {
    instruments.visible ? instruments.hide() : instruments.show()
};
instruments.add = function (a, b) {
    instruments.list[b] = a
};
instruments.hide = function (a) {
    var b = instruments.list;
    a && (b = instruments.groups[a] || {});
    for (var c in b) b[c].hide();
    a && "3doverlays" != a || (geofs.animation.values.overlaysVisibility = "hidden");
    instruments.visible = !1
};
instruments.show = function (a) {
    var b = instruments.list;
    a && (b = instruments.groups[a] || {});
    for (var c in b) b[c].show();
    a && "3doverlays" != a || (geofs.animation.values.overlaysVisibility = "visible");
    instruments.visible = !0
};
instruments.rescale = function () {
    for (var a in instruments.list) instruments.list[a].scale();
    instruments.updateCockpitPositions()
};
instruments.update = function (a) {
    for (var b in instruments.list) instruments.list[b].update(a)
};
instruments.updateCockpitPositions = function () {
    for (var a in instruments.list) instruments.list[a].updateCockpitPosition();
    instruments.update(!0)
};
instruments.updateScreenPositions = function () {
    for (var a in instruments.list) {
        var b = instruments.list[a];
        "cockpit" == geofs.camera.currentModeName && b.definition.cockpit ? b.updateCockpitPosition() : b.overlay && (b.overlay.rotation = 0, b.overlay.scaleAndPlace())
    }
    a = clamp(geofs.viewportWidth / VIEWPORT_REFERENCE_WIDTH, .3, 1);
    b = clamp(geofs.viewportHeight / VIEWPORT_REFERENCE_HEIGHT, .3, 1);
    a = Math.min(a, b);
    instruments.gaugeOverlayPosition[0] = instruments.gaugeOverlayOrigin[0] * a;
    instruments.gaugeOverlayPosition[1] = geofs.viewportHeight -
        instruments.gaugeOverlayOrigin[1] * a;
    instruments.gaugeOverlayPosition[2] = instruments.gaugeOverlayOrigin[2]
};
var Indicator = function (a) {
    this.definition = Object.assign({}, this.definition, a);
    this.scale();
    var b = a.overlay;
    b.cockpit = !!this.definition.cockpit;
    this.visibility = void 0 != a.visibility ? a.visibility : !0;
    if (a.stackX) {
        var c = b.position.x;
        b.position.x = instruments.stackPosition.x + c;
        instruments.stackPosition.x += b.size.x + instruments.defaultMargin + c
    }
    a.stackY && (a = b.position.y, b.position.y = instruments.stackPosition.y + b.size.y / 2 + a, instruments.stackPosition.y += b.size.y + instruments.defaultMargin + a);
    b.position.y = b.alignment &&
        "top" == b.alignment.y ? b.position.y + instruments.margins[0] : b.position.y + instruments.margins[2];
    b.position.x = b.alignment && "right" == b.alignment.x ? b.position.x + instruments.margins[1] : b.position.x + instruments.margins[3];
    this.overlay = new Overlay(b);
    this.setVisibility(this.visibility);
    return this
};
Indicator.prototype.scale = function () {
    if (this.definition.cockpit && this.definition.cockpit.position) {
        var a = geofs.aircraft.instance.definition.scale * geofs.aircraft.instance.definition.cockpitScaleFix;
        this.definition.cockpit.originalScale = this.definition.cockpit.originalScale || this.definition.cockpit.scale;
        this.definition.cockpit.scale = this.definition.cockpit.originalScale * a
    }
};
Indicator.prototype.show = function () {
    this.overlay.setVisibility(!0);
    this.visibility = !0
};
Indicator.prototype.hide = function () {
    this.overlay.setVisibility(!1);
    this.visibility = !1
};
Indicator.prototype.setVisibility = function (a) {
    this.overlay.setVisibility(a);
    this.visibility = a
};
Indicator.prototype.updateCockpitPosition = function () {
    if (this.definition.cockpit) {
        var a = this.definition.cockpit.position;
        geofs.aircraft.instance.object3d.setVectorWorldPosition(a);
        a.worldPosition = V3.scale(a.worldPosition, geofs.aircraft.instance.definition.cockpitScaleFix);
        var b = V3.add(geofs.aircraft.instance.llaLocation, xyz2lla(a.worldPosition, geofs.aircraft.instance.llaLocation)),
            c = geofs.api.getScreenCoordFromLla(b);
        c && (b = c.x, c = c.y, a = .8 / V3.length(V3.sub(geofs.camera.worldPosition, a.worldPosition)) *
            this.definition.cockpit.scale, this.overlay.scale = {
                x: a * geofs.fovScale,
                y: a * geofs.fovScale
            }, this.overlay.position = {
                x: b,
                y: geofs.viewportHeight - c
            }, this.overlay.rotation = .3 * fixAngle(geofs.camera.currentDefinition.orientations.current[0]), this.overlay.scaleAndPlace(this.overlay.scale, this.overlay.position, !0))
    }
};
Indicator.prototype.update = function (a) {
    this.overlay.animate(a);
    if (this.definition.animations)
        for (a = 0; a < this.definition.animations.length; a++) {
            var b = this.definition.animations[a],
                c = geofs.animation.filter(b);
            switch (b.type) {
                case "show":
                    this.visibility && this.overlay.setVisibility(c)
            }
        }
};
Indicator.prototype.destroy = function () {
    this.overlay && this.overlay.destroy();
    for (var a = 0; a < this.overlay.children.length; a++) this.overlay.children[a].destroy()
};
geofs.GlassPanel = function (a) {
    this.canvas = new geofs.api.Canvas({
        height: 100,
        width: 100
    });
    this.entity = geofs.api.viewer.entities.add({
        box: {
            dimensions: new Cesium.Cartesian3(1, 1, 1),
            material: this.canvas.getImageAsURLData()
        }
    });
    return this
};
geofs.GlassPanel.prototype = {
    update: function () { },
    updateCockpitPosition: function () { },
    destroy: function () { }
};
"use strict";
var audio = window.audio || {};
audio.init = function (a) {
    a = a || [];
    audio.soundplayer = audio.impl.webAudio.createPlayer() || audio.impl.html5.createPlayer();
    audio.sounds = {};
    for (var b = 0, c = a.length; b < c; b++) {
        var d = a[b];
        audio.sounds[d.id] = d;
        d.cut = d.cut || [0, 0];
        d.playing = !1;
        d.loading = !1;
        d.loaded = !1;
        d = d.effects;
        for (var e in d) {
            var f = d[e];
            f.lastValue = null;
            "volume" == e && (f.ratio = 100 * (f.ratio || 1))
        }
    }
    geofs.preferences.sound ? !1 !== audio.on && (audio.on = !0) : audio.mute()
};
audio.loaded = function (a) {
    audio.sounds[a].loaded = !0
};
audio.stopped = function (a) {
    audio.sounds[a].playing = !1
};
audio.update = function () {
    if (audio.on && audio.soundplayer && !geofs.pause)
        for (var a in audio.sounds) {
            var b = audio.sounds[a],
                c = b.effects;
            if (b.file && !b.loading && !b.loaded && audio.soundplayer.loadMP3) b.file = b.file.replace(".ogg", ".mp3"), audio.soundplayer.loadMP3(b.id, b.file + geofs.killCache, b.cut[0], b.cut[1], b.lowLatency || !1, b.fadeDuration || 0), b.loading = !0;
            else if (b.loaded)
                for (var d in c) {
                    var e = c[d],
                        f = geofs.animation.filter(e);
                    if (e.lastValue != f) {
                        switch (d) {
                            case "volume":
                                f -= .01 * geofs.animation.values.cameraAircraftDistance;
                                if (0 >= f && !0 === b.playing) try {
                                    b.playing = "stopping", audio.soundplayer.stopSound(b.id)
                                } catch (k) { }
                                if (0 < f) {
                                    if (!b.playing) try {
                                        b.playing = !0, audio.soundplayer.playSound(b.id)
                                    } catch (k) { }
                                    try {
                                        audio.soundplayer.setVolume(b.id, f)
                                    } catch (k) { }
                                }
                                break;
                            case "pitch":
                                f += .001 * geofs.animation.values.cameraAircraftSpeed;
                                try {
                                    audio.soundplayer.setRate(b.id, f)
                                } catch (k) { }
                                break;
                            case "play":
                                if (0 < f && !b.playing) try {
                                    b.playing = !0;
                                    audio.soundplayer.playSound(b.id, !1);
                                    var g = b.id;
                                    setTimeout(function () {
                                        audio.sounds[g].playing = !1
                                    }, e.duration)
                                } catch (k) { }
                                break;
                            case "start":
                                if (0 < f) {
                                    if (!b.playing) try {
                                        b.playing = !0, audio.soundplayer.playSound(b.id, b.loop)
                                    } catch (k) { }
                                } else if (!0 === b.playing) try {
                                    b.playing = "stopping", audio.soundplayer.setVolume(b.id, 0), audio.soundplayer.stopSound(b.id)
                                } catch (k) { }
                                break;
                            case "stop":
                                if (0 < f) {
                                    if (!0 === b.playing) try {
                                        b.playing = "stopping", audio.soundplayer.setVolume(b.id, 0), audio.soundplayer.stopSound(b.id)
                                    } catch (k) { }
                                } else if (!b.playing) try {
                                    b.playing = !0, audio.soundplayer.playSound(b.id, b.loop)
                                } catch (k) { }
                        }
                        e.lastValue = f
                    }
                }
        }
};
audio.toggleMute = function () {
    audio.on ? audio.mute() : audio.unmute();
    geofs.savePreferences()
};
audio.stop = function () {
    try {
        if (audio.soundplayer && audio.soundplayer.stopSound)
            for (var a in audio.sounds) {
                var b = audio.sounds[a];
                audio.soundplayer.stopSound(b.id);
                b.playing = !1;
                var c = b.effects,
                    d;
                for (d in c) c[d].lastValue = null
            }
    } catch (e) { }
};
audio.mute = function () {
    audio.stop();
    audio.on = !1;
    geofs.preferences.sound = !1;
    ui.toggleButton(".geofs-button-mute", !0)
};
audio.unmute = function () {
    audio.on = !0;
    geofs.preferences.sound = !0;
    ui.toggleButton(".geofs-button-mute", !1)
};
audio.playStartup = function () {
    if (audio.on && audio.soundplayer && audio.soundplayer.playSound) try {
        audio.soundplayer.playSound("startup", !1)
    } catch (a) { }
};
audio.playShutdown = function () {
    if (audio.on && audio.soundplayer && audio.soundplayer.playSound) try {
        audio.soundplayer.playSound("shutdown", !1)
    } catch (a) { }
};
audio.playSoundLoop = function (a, b) {
    if (audio.on && audio.soundplayer && audio.soundplayer.playSound) try {
        audio.soundplayer.playSound(a, b)
    } catch (c) { }
};
audio.stopSoundLoop = function (a) {
    if (audio.soundplayer && audio.soundplayer.stopSound) try {
        audio.soundplayer.stopSound(a)
    } catch (b) { }
};
audio.impl = {};
audio.impl.webAudio = {
    decodingStack: [],
    createPlayer: function () {
        audio.impl.webAudio.destroyPlayer();
        if (!window.AudioContext && !window.webkitAudioContext) return null;
        audio.impl.webAudio.context = audio.impl.webAudio.context || new (window.AudioContext || window.webkitAudioContext);
        return audio.impl.webAudio.context ? audio.impl.webAudio : null
    },
    stackDecoding: function (a, b) {
        audio.impl.webAudio.decodingStack.push(function () {
            a();
            audio.impl.webAudio.decodingStack.shift();
            if (0 < audio.impl.webAudio.decodingStack.length) audio.impl.webAudio.decodingStack[0]()
        });
        if (1 == audio.impl.webAudio.decodingStack.length) audio.impl.webAudio.decodingStack[0]()
    },
    loadMP3: function (a, b) {
        var c = audio.sounds[a],
            d = new XMLHttpRequest;
        d.open("GET", b, !0);
        d.responseType = "arraybuffer";
        d.onload = function () {
            audio.impl.webAudio.stackDecoding(function () {
                audio.impl.webAudio.context.decodeAudioData(d.response, function (e) {
                    c.buffer = e;
                    audio.loaded(a)
                }, function (e) {
                    throw "Error with decoding audio data" + e;
                })
            }, a)
        };
        d.send()
    },
    playSound: function (a, b) {
        a = audio.sounds[a];
        a.buffer && (b = a.loop || b, a.sourceNode =
            audio.impl.webAudio.context.createBufferSource(), a.sourceNode.loop = !1 !== b, a.sourceNode.buffer = a.buffer, a.gainNode = audio.impl.webAudio.context.createGain(), a.sourceNode.connect(a.gainNode), a.gainNode.connect(audio.impl.webAudio.context.destination), a.sourceNode.start(0))
    },
    stopSound: function (a) {
        var b = audio.sounds[a];
        b.sourceNode && (b.sourceNode.stop(), b.sourceNode = null);
        audio.stopped(a)
    },
    setVolume: function (a, b) {
        a = audio.sounds[a];
        a.gainNode && (a.gainNode.gain.value = b / 100)
    },
    setRate: function (a, b) {
        a = audio.sounds[a];
        a.sourceNode && (a.sourceNode.playbackRate.value = b)
    },
    destroyPlayer: function () {
        for (var a in audio.sounds) this.stopSound(a), audio.sounds[a] = null, delete audio.sounds[a]
    }
};
audio.impl.html5 = {
    player: null,
    createPlayer: function () {
        audio.impl.html5.destroyPlayer();
        return window.Audio ? audio.impl.html5 : null
    },
    loadMP3: function (a, b, c) {
        a = audio.sounds[a] || {};
        a.element = new Audio(b);
        a.loop && a.element.addEventListener("timeupdate", function () {
            this.currentTime > this.duration - 3 && (this.currentTime = 0, this.play())
        }, !1);
        a.loaded = !0;
        c && a.element.play();
        return a
    },
    playFile: function (a, b) {
        geofs.preferences.sound && (a = new Audio(a), b && a.addEventListener("timeupdate", function () {
            this.currentTime > this.duration -
                3 && (this.currentTime = 0, this.play())
        }, !1), a.play())
    },
    playSound: function (a) {
        a = audio.sounds[a];
        a.element && a.element.play()
    },
    stopSound: function (a) {
        var b = audio.sounds[a];
        b.element && b.element.pause();
        audio.stopped(a)
    },
    setVolume: function (a, b) {
        a = audio.sounds[a];
        a.element && (a.element.volume = b / 100)
    },
    setRate: function (a, b) { },
    destroyPlayer: function () {
        for (var a in audio.sounds) {
            var b = audio.sounds[a].element;
            b && b.close && b.close()
        }
    }
};
audio.impl.cordova = {
    player: null,
    decodingStack: [],
    createPlayer: function () {
        audio.impl.cordova.destroyPlayer();
        return window.Media ? audio.impl.cordova : null
    },
    loadMP3: function (a, b) {
        b = geofs.url + "/" + b;
        var c = audio.sounds[a];
        c.media = new Media(b, function () {
            c.media.loop && c.media.play()
        }, function (d) {
            geofs.debug.log("loadMP3: " + d)
        });
        c.loaded = !0
    },
    playSound: function (a, b) {
        a = audio.sounds[a];
        a.media && (a.media.play(), a.media.loop = !1 !== (a.loop || b))
    },
    stopSound: function (a) {
        var b = audio.sounds[a];
        b.media && b.media.stop();
        b.media.loop = !1;
        audio.stopped(a)
    },
    setVolume: function (a, b) {
        a = audio.sounds[a];
        a.media && a.setVolume(b / 100)
    },
    setRate: function (a, b) {
        a = audio.sounds[a];
        a.media && a.setRate(b / 100)
    },
    destroyPlayer: function () {
        if (this.player) {
            for (var a in audio.sounds) audio.sounds[a].media.release();
            this.player = null
        }
    }
};
audio.peer2peer = {
    init: function (a) {
        this.webRTCiFrame = document.createElement("iframe");
        webRTCiFrame.src = "https://appr.tc/r/" + a + "?audio=true&video=false"
    },
    destroy: function () {
        this.webRTCiFrame.remove()
    }
};
"use strict";
var multiplayer = window.multiplayer || {};
geofs.multiplayerHost = geofs.multiplayerHost || "https://net.geo-fs.com:8080";
multiplayer.nbUsers = 0;
multiplayer.users = {};
multiplayer.visibleUsers = {};
multiplayer.numberOfLOD = 3;
multiplayer.captainIconUrl = "images/captain-tag.png";
multiplayer.premiumIconUrl = "images/premium-tag.png";
multiplayer.minUpdateDelay = 500;
multiplayer.hearbeatTimeout;
multiplayer.hearbeatLife = 9E3;
multiplayer.userLife = 2E4;
multiplayer.userHalfLife = 1E4;
multiplayer.userHeartBeatPeriod = 1E3;
multiplayer.trafficLife = 4E4;
multiplayer.trafficHalfLife = 2E4;
multiplayer.trafficHeartBeatPeriod = 1E4;
multiplayer.contrailEmitters = {
    1: {
        lod: 2,
        anchor: null,
        duration: 1E10,
        rate: .01,
        life: 3E4,
        startScale: .05,
        endScale: .1,
        randomizeStartScale: .1,
        randomizeEndScale: .4,
        startOpacity: .1,
        endOpacity: 1E-5,
        startRotation: "random",
        texture: "whitesmoke"
    },
    2: {
        lod: 2,
        anchor: null,
        duration: 1E10,
        rate: .01,
        life: 6E4,
        startScale: .05,
        endScale: .1,
        randomizeStartScale: .1,
        randomizeEndScale: .4,
        startOpacity: .1,
        endOpacity: 1E-5,
        startRotation: "random",
        texture: "whitesmoke"
    },
    3: {
        lod: 3,
        anchor: null,
        duration: 1E10,
        rate: 1E-4,
        pathStep: 100,
        followPath: !0,
        life: 5E4,
        easing: "easeOutQuart",
        startOpacity: .8,
        endOpacity: 1E-5,
        model: "models/clouds/contrails.gltf",
        rotationAxis: 0
    }
};
multiplayer.mapUpdatePeriod = 1E4;
multiplayer.myId = "";
multiplayer.lastRequest = null;
multiplayer.lastResponse = null;
multiplayer.lastJoinedCoordinates = "";
multiplayer.lastRequestTime = Date.now();
multiplayer.serverTimeOffset = null;
multiplayer.labelVisibilityRange = 5E4;
multiplayer.farVisibilityRange = 1E4;
multiplayer.lowVisibilityRange = 1E3;
multiplayer.nearVisibilityRange = 10;
multiplayer.chatMessage = "";
multiplayer.chatMessageId = 0;
multiplayer.on = !1;
multiplayer.started = !1;
multiplayer.callsignPlacemarkAltitude = 5;
multiplayer.updateFunctions = [];
multiplayer.init = function () {
    multiplayer.labelOptions = {
        "default": {
            font: "bold 12pt sans-serif",
            style: Cesium.LabelStyle.FILL_AND_OUTLINE,
            horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            eyeOffset: new Cesium.Cartesian3(0, 6, 0),
            fillColor: Cesium.Color.WHITE,
            outlineColor: Cesium.Color.BLACK,
            outlineWidth: 2,
            translucencyByDistance: new Cesium.NearFarScalar(200, .8, multiplayer.labelVisibilityRange, .2)
        },
        xavier: {
            font: "bold 12pt sans-serif",
            style: Cesium.LabelStyle.FILL_AND_OUTLINE,
            horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            eyeOffset: new Cesium.Cartesian3(0, 6, 0),
            fillColor: Cesium.Color.fromCssColorString("#ffc107"),
            outlineColor: Cesium.Color.BLACK,
            outlineWidth: 2,
            translucencyByDistance: new Cesium.NearFarScalar(200, .8, multiplayer.labelVisibilityRange, .2)
        },
        premium: {
            font: "bold 12pt sans-serif",
            style: Cesium.LabelStyle.FILL_AND_OUTLINE,
            horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            eyeOffset: new Cesium.Cartesian3(0,
                6, 0),
            fillColor: Cesium.Color.fromCssColorString("#ffc107"),
            outlineColor: Cesium.Color.BLACK,
            outlineWidth: 2,
            translucencyByDistance: new Cesium.NearFarScalar(200, .8, multiplayer.labelVisibilityRange, .2)
        },
        traffic: {
            font: "bold 11pt sans-serif",
            style: Cesium.LabelStyle.FILL_AND_OUTLINE,
            horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            eyeOffset: new Cesium.Cartesian3(0, 6, 0),
            fillColor: Cesium.Color.fromCssColorString("#79abbd"),
            outlineColor: Cesium.Color.BLACK,
            outlineWidth: 1,
            translucencyByDistance: new Cesium.NearFarScalar(200, .8, multiplayer.labelVisibilityRange, .2)
        }
    };
    multiplayer.iconOptions = {
        premium: {
            image: multiplayer.premiumIconUrl,
            horizontalOrigin: Cesium.HorizontalOrigin.RIGHT,
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            eyeOffset: new Cesium.Cartesian3(0, 6, 0),
            pixelOffset: new Cesium.Cartesian2(-25, 1),
            translucencyByDistance: new Cesium.NearFarScalar(200, .8, multiplayer.labelVisibilityRange, .2),
            width: 25,
            height: 25
        },
        xavier: {
            image: multiplayer.captainIconUrl,
            horizontalOrigin: Cesium.HorizontalOrigin.RIGHT,
            verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            eyeOffset: new Cesium.Cartesian3(0, 6, 0),
            pixelOffset: new Cesium.Cartesian2(-25, 1),
            translucencyByDistance: new Cesium.NearFarScalar(200, .8, multiplayer.labelVisibilityRange, .2),
            width: 25,
            height: 25
        }
    };
    multiplayer.flightSharing.init()
};
multiplayer.stop = function () {
    multiplayer.stopUpdates();
    for (var a in multiplayer.users) multiplayer.users[a].remove();
    $(".geofs-player-count").hide()
};
multiplayer.start = function () {
    multiplayer.startUpdates();
    $(".geofs-player-count").show()
};
multiplayer.startUpdates = function () {
    geofs.preferences.multiplayer && !multiplayer.started && (multiplayer.started = !0, multiplayer.nextUpdateTime = Date.now(), multiplayer.sendUpdate(), multiplayer.startMapUpdate())
};
multiplayer.stopUpdates = function (a) {
    clearTimeout(multiplayer.hearbeatTimeout);
    clearInterval(multiplayer.mapInterval);
    multiplayer.nextUpdateTime = null;
    multiplayer.started = !1
};
multiplayer.getServerTime = function () {
    return Date.now() - multiplayer.serverTimeOffset
};
multiplayer.getUser = function (a) {
    return multiplayer.users[a]
};
multiplayer.flightSharing = {
    requestTimeout: 3E4,
    host: !1,
    control: !1,
    status: null,
    willpeer: null,
    waspeer: null,
    peer: null,
    init: function () {
        $(document).on("click", ".geofs-stopSharing", multiplayer.flightSharing.stop).on("click", ".geofs-acceptSharing", function () {
            multiplayer.flightSharing.accept(multiplayer.flightSharing.willpeer)
        }).on("click", ".geofs-refuseSharing", function () {
            multiplayer.flightSharing.refuse(multiplayer.flightSharing.willpeer)
        }).on("click", ".geofs-blockUser", function () {
            multiplayer.blockUser(multiplayer.flightSharing.willpeer.acid)
        }).on("click",
            ".geofs-controlSwap",
            function () {
                multiplayer.flightSharing.swapControl()
            })
    },
    request: function (a) {
        multiplayer.flightSharing.peer = a;
        a.isPeer = !0;
        multiplayer.flightSharing.control = !0;
        multiplayer.flightSharing.host = !0;
        multiplayer.flightSharing.status = "requested";
        $(".geofs-flightSharing-status").html('Flight sharing requested.<br/>Waiting for<span class="geofs-callsign">' + a.callsign + '</span><button class="geofs-stopSharing mdl-button mdl-button--raised">Cancel</button>').show();
        clearTimeout(multiplayer.flightSharing.timeout);
        multiplayer.flightSharing.timeout = setTimeout(multiplayer.flightSharing.stop, multiplayer.flightSharing.requestTimeout)
    },
    incoming: function (a) {
        "established" != multiplayer.flightSharing.status && "incoming" != multiplayer.flightSharing.status && (multiplayer.flightSharing.host ? a.isPeer && multiplayer.flightSharing.accepted(a) : geofs.userRecord.muteList[a.acid] || (multiplayer.flightSharing.willpeer = a, multiplayer.flightSharing.peer = null, multiplayer.flightSharing.status = "incoming", $(".geofs-flightSharing-status").html('Flight sharing request from<span class="geofs-callsign">' +
            a.callsign + '</span><button class="geofs-acceptSharing mdl-button mdl-button--raised">accept</button><button class="geofs-refuseSharing mdl-button mdl-button--raised">refuse</button><button class="geofs-blockUser mdl-button mdl-button--raised mdl-button--colored">block user</button>').show(), clearTimeout(multiplayer.flightSharing.timeout), multiplayer.flightSharing.timeout = setTimeout(multiplayer.flightSharing.stop, multiplayer.flightSharing.requestTimeout)))
    },
    accept: function (a) {
        flight.sharing.start();
        multiplayer.flightSharing.status = "established";
        multiplayer.flightSharing.control = !1;
        multiplayer.flightSharing.willpeer = null;
        multiplayer.flightSharing.peer = a;
        multiplayer.flightSharing.waspeer = a;
        a.isPeer = !0;
        a.aircraft != geofs.aircraft.instance.aircraftRecord.id && geofs.aircraft.instance.change(a.aircraft, a.currentLivery);
        $(".geofs-flightSharing-status").addClass("geofs-established").html('Sharing flight with<span class="geofs-callsign">' + a.callsign + '</span><span class="geofs-controlStatus">Peer has control</span><button class="geofs-stopSharing mdl-button mdl-button--raised">stop sharing</button>').show()
    },
    accepted: function (a) {
        multiplayer.flightSharing.status = "established";
        multiplayer.flightSharing.waspeer = a;
        multiplayer.flightSharing.control = !0;
        $(".geofs-flightSharing-status").addClass("geofs-established").html('Sharing flight with<span class="geofs-callsign">' + a.callsign + '</span><span class="geofs-controlStatus">You have control</span><button class="geofs-controlSwap mdl-button mdl-button--accent mdl-button--raised">give control</button><button class="geofs-stopSharing mdl-button mdl-button--raised">stop sharing</button>').show()
    },
    peerUpdate: function (a) {
        if ("established" == multiplayer.flightSharing.status) {
            var b = a.st.sh;
            b && b.pe == geofs.userRecord.id ? (multiplayer.flightSharing.host || !!b.ct == multiplayer.flightSharing.control && multiplayer.flightSharing.swapControl(!b.ct), multiplayer.flightSharing.control || flight.sharing.peerUpdate({
                time: a.ti,
                coord: a.co,
                controls: a.st.sh.ct,
                state: [a.st.sh.st[0], a.st.gr],
                velocities: a.st.sh.ve
            })) : multiplayer.flightSharing.stop();
            clearTimeout(multiplayer.flightSharing.timeout);
            multiplayer.flightSharing.timeout =
                setTimeout(multiplayer.flightSharing.stop, multiplayer.flightSharing.requestTimeout)
        }
    },
    swapControl: function (a) {
        multiplayer.flightSharing.host && (a = !multiplayer.flightSharing.control, $(".geofs-flightSharing-status").find(".geofs-controlSwap").text(a ? "Give control" : "take control"));
        $(".geofs-flightSharing-status").find(".geofs-controlStatus").text(a ? "You have control" : "Peer has control");
        (multiplayer.flightSharing.control = a) ? flight.sharing.stop() : flight.sharing.start()
    },
    refuse: function (a) {
        multiplayer.flightSharing.stop()
    },
    stop: function () {
        flight.sharing.stop();
        multiplayer.flightSharing.willpeer = null;
        multiplayer.flightSharing.waspeer = null;
        multiplayer.flightSharing.peer && (multiplayer.flightSharing.peer.isPeer = !1, multiplayer.flightSharing.peer = null);
        multiplayer.flightSharing.status = null;
        multiplayer.flightSharing.control = !1;
        multiplayer.flightSharing.host = !1;
        clearTimeout(multiplayer.flightSharing.timeout);
        $(".geofs-flightSharing-status").html("Flight sharing has ended").show().delay(3E3).hide()
    }
};
multiplayer.updateUsers = function (a) {
    a = a || [];
    for (var b = 0, c = a.length; b < c; b++) {
        var d = a[b],
            e = d.id;
        if (!d.ad || geofs.preferences.adsb) try {
            multiplayer.users[e] ? multiplayer.users[e].update(d) : multiplayer.users[e] = new multiplayer.User(d)
        } catch (f) {
            geofs.debug.error(f, "exception in multiplayer.updateUsers")
        }
    }
};
multiplayer.startMapUpdate = function () {
    var a = function (b) {
        multiplayer.setNbUsers(b.userCount);
        if (b && b.users) {
            b.users.sort(function (q, z) {
                q = q.cs.toLowerCase();
                z = z.cs.toLowerCase();
                return q > z ? 1 : q < z ? -1 : 0
            });
            for (var c = $(".geofs-player-list"), d = c.is(":visible"), e = 0, f = "", g = 0, k = b.users.length; g < k; g++) {
                var m = b.users[g],
                    n = m.id;
                if (multiplayer.myId != n) {
                    var x = multiplayer.users[n] || new multiplayer.User(m);
                    x.update(m, !0);
                    d && ("Foo" == x.callsign ? e++ : f += '<li data-player="' + n + '">' + x.callsign + " (" + x.aircraftName + ")</li>")
                }
            }
            d &&
                (0 < e && (f += "<li>    ...and " + e + " Foos</li>"), c.html(f))
        }
    };
    clearInterval(multiplayer.mapInterval);
    multiplayer.mapInterval = setInterval(function () {
        geofs.ajax.post(geofs.multiplayerHost + "/map", {
            id: multiplayer.myId,
            gid: geofs.userRecord.schoolid
        }, a)
    }, multiplayer.mapUpdatePeriod);
    geofs.ajax.post(geofs.multiplayerHost + "/map", {
        id: multiplayer.myId,
        gid: geofs.userRecord.schoolid
    }, a)
};
multiplayer.update = function (a) {
    try {
        multiplayer.lastResponse && (multiplayer.updateUsers(multiplayer.lastResponse.users), multiplayer.lastResponse = null);
        multiplayer.nextUpdateTime && Date.now() > multiplayer.nextUpdateTime && multiplayer.sendUpdate();
        for (var b in multiplayer.visibleUsers) {
            var c = multiplayer.visibleUsers[b];
            c.currentServerTime = multiplayer.getServerTime();
            if (c.model || c.isPeer && c.referenceCoord) {
                c.elapsedTime += a;
                var d = M3.add(c.referenceCoord, M3.scale(c.correctedVelocity, c.elapsedTime));
                d[3] = fixAngle(d[3]);
                d[4] = fixAngle(d[4]);
                d[5] = fixAngle(d[5]);
                c.currentInterpolatedCoord = d;
                c.referencePoint.lla = c.currentInterpolatedCoord;
                geofs.api.setModelPositionOrientationAndScale(c.model, [d[0], d[1], d[2]], [d[3], d[4], d[5]])
            } else d = c.lastUpdate.co;
            var e = [d[0], d[1], d[2]];
            geofs.api.setLabelPosition(c.label, e);
            c.icon && c.icon.setLocation(e)
        }
    } catch (f) {
        geofs.debug.error(f, "multiplayer.update")
    }
};
multiplayer.errorCallback = function (a) {
    multiplayer.lastRequest = null;
    multiplayer.sendUpdate()
};
multiplayer.updateCallback = function (a) {
    multiplayer.lastResponse = a;
    multiplayer.lastRequest = null;
    var b = Date.now(),
        c = b - multiplayer.lastRequestTime;
    multiplayer.avgPing = exponentialSmoothing("avgPing", c).toPrecision(2);
    multiplayer.minPing = Math.min(multiplayer.minPing, c).toPrecision(2);
    multiplayer.serverTimeOffset = exponentialSmoothing("serverTimeOffset", b - (a.serverTime + c / 2), null, .01);
    c = clamp(multiplayer.minUpdateDelay - c, 0, multiplayer.minUpdateDelay);
    multiplayer.myId = a.myId || null;
    multiplayer.chatMessageId =
        a.lastMsgId;
    multiplayer.started && (multiplayer.nextUpdateTime = b + c);
    if (a.chatMessages)
        for (b = 0, c = a.chatMessages.length; b < c; b++) {
            var d = a.chatMessages[b];
            geofs.userRecord.muteList[d.acid] || ui.chat.publish(d)
        }
};
multiplayer.sendUpdate = function () {
    try {
        if (!multiplayer.lastRequest && !flight.recorder.playing) {
            var a = geofs.aircraft.instance,
                b = Date.now();
            multiplayer.lastRequestTime = b;
            var c = $.merge($.merge([], a.llaLocation), a.htr),
                d = V3.scale(xyz2lla(a.rigidBody.getLinearVelocity(), a.llaLocation), .001),
                e = $.merge(d, a.htrAngularSpeed),
                f = {
                    gr: a.groundContact,
                    as: Math.round(geofs.animation.values.kias)
                };
            a.liveryId && (f.lv = a.liveryId);
            var g = {
                acid: geofs.userRecord.id,
                sid: geofs.userRecord.sessionId,
                id: multiplayer.myId,
                ac: a.aircraftRecord.id,
                co: c,
                ve: e,
                st: f,
                ti: multiplayer.getServerTime(),
                m: multiplayer.chatMessage,
                ci: multiplayer.chatMessageId
            };
            multiplayer.flightSharing.status && multiplayer.flightSharing.peer && (g.st.sh = {
                pe: multiplayer.flightSharing.peer.acid
            }, multiplayer.flightSharing.control && (g.st.sh.ct = [controls.rawPitch, controls.roll, controls.yaw, controls.throttle, controls.gear.position, controls.flaps.position, controls.airbrakes.position], g.st.sh.ve = geofs.aircraft.instance.rigidBody.getLinearVelocity().concat(geofs.aircraft.instance.rigidBody.getAngularVelocity()),
                g.st.sh.st = [geofs.aircraft.instance.engine.on]));
            multiplayer.chatMessage = "";
            multiplayer.lastRequest = geofs.ajax.post(geofs.multiplayerHost + "/update", g, multiplayer.updateCallback, multiplayer.errorCallback)
        }
    } catch (k) {
        geofs.debug.error(k, "multiplayer.sendUpdate")
    }
};
multiplayer.User = function (a) {
    var b = a.id;
    multiplayer.users[b] = this;
    this.id = b;
    this.acid = a.acid;
    this.callsign = geofs.userRecord.muteList && !geofs.userRecord.muteList[this.id] ? a.cs : "";
    ui.mapInstance && ui.mapInstance.addPlayerMarker(b, a.ad ? "traffic" : null, this.callsign);
    this.aircraft = null;
    this.lod = 0;
    this.model = this.lastUpdate = null;
    this.visibleGear = !0;
    this.referencePoint = {
        lla: [0, 0, 0]
    };
    this.currentServerTime = multiplayer.getServerTime();
    this.lastHeartbeatTime = Date.now();
    this.isTraffic = a.ad;
    this.updated = !0;
    this.heartBeat()
};
multiplayer.User.prototype = {
    heartBeat: function () {
        var a = this,
            b = Date.now(),
            c = b - this.lastHeartbeatTime;
        if (this.updated) this.updated = !1, this.lastHeartbeatTime = b;
        else if (c > (this.isTraffic ? multiplayer.trafficHalfLife : multiplayer.userHalfLife) && this.removeFromWorld(), c > (this.isTraffic ? multiplayer.trafficLife : multiplayer.userLife)) {
            this.remove();
            return
        }
        clearTimeout(this.heartBeatTimeout);
        this.heartBeatTimeout = setTimeout(function () {
            a.heartBeat()
        }, this.isTraffic ? multiplayer.trafficHeartBeatPeriod : multiplayer.userHeartBeatPeriod)
    },
    update: function (a, b) {
        var c = a.st.sh;
        c ? c.pe == geofs.userRecord.id && "established" != multiplayer.flightSharing.status && multiplayer.flightSharing.incoming(this) : b || (multiplayer.flightSharing.willpeer && multiplayer.flightSharing.willpeer.acid == this.acid || multiplayer.flightSharing.waspeer && multiplayer.flightSharing.waspeer.acid == this.acid) && multiplayer.flightSharing.stop();
        this.updateAircraft(a);
        if (!this.lastUpdate)
            if (this.lastUpdate = Object.assign({}, a), b) var d = !0;
            else return;
        if (!(0 >= a.ti - this.lastUpdate.ti) ||
            d)
            if (ui.mapInstance && ui.mapInstance.mapActive && ui.mapInstance.updatePlayerMarker(a.id, a.co, this.callsign, a.ad ? "traffic" : null, this.aircraftName, this.lastUpdate.st.as), this.isPeer && (multiplayer.visibleUsers[this.id] = this, multiplayer.flightSharing.peerUpdate(a)), this.updated = !0, !b) {
                this.lastUpdate = Object.assign({}, a);
                this.updateModel(a);
                if (this.model || this.isPeer) this.lastUpdate.ad && 0 != this.lastUpdate.co[2] && !this.lastUpdate.st.gr && (this.lastUpdate.co[2] += EGM96_TO_WGS84), this.model && this.visibleGear !=
                    this.lastUpdate.st.gr && geofs.api.setNodeVisibility(geofs.api.getModelNode(this.model, "gear"), this.lastUpdate.st.gr) && (this.visibleGear = this.lastUpdate.st.gr), this.elapsedTime = this.currentServerTime - this.lastUpdate.ti, this.correctedVelocity = M3.dup(this.lastUpdate.ve), this.currentInterpolatedCoord && (b = M3.add(this.lastUpdate.co, M3.scale(this.lastUpdate.ve, this.elapsedTime)), a = M3.sub(b, this.currentInterpolatedCoord), a[3] = fixAngle(a[3]), a[4] = fixAngle(a[4]), a[5] = fixAngle(a[5]), b = Math.abs(V3.length(lla2xyz(a,
                        b))), c = Math.max(Math.abs(a[3]), Math.abs(a[4]), Math.abs(a[5])), this.lastUpdate.ad ? 5E3 < b || 30 < c ? (this.currentInterpolatedCoord = null, this.deviationFix = [0, 0, 0, 0, 0, 0]) : (this.deviationFix = M3.scale(a, 1E-5), this.correctedVelocity = M3.add(this.correctedVelocity, this.deviationFix)) : 40 < b || 30 < c ? this.deviationFix = this.currentInterpolatedCoord = null : (b = 10 * multiplayer.minUpdateDelay, this.deviationFix = M3.scale(a, 1 / b), this.correctedVelocity = M3.add(this.correctedVelocity, this.deviationFix))), this.currentInterpolatedCoord ?
                        (this.elapsedTime = 0, this.referenceCoord = this.currentInterpolatedCoord) : this.referenceCoord = this.lastUpdate.co;
                this.referencePoint.lla = this.currentInterpolatedCoord || this.lastUpdate.co;
                this.currentInterpolatedCoord = null;
                this.updateContrails()
            }
    },
    getLOD: function (a) {
        this.distance = geofs.utils.llaDistanceInMeters(this.currentInterpolatedCoord || a.co, geofs.aircraft.instance.llaLocation, geofs.aircraft.instance.llaLocation);
        if (this.distance > multiplayer.nearVisibilityRange) {
            if (this.distance < multiplayer.farVisibilityRange) return this.distance >
                multiplayer.lowVisibilityRange ? 2 : 1;
            if (this.distance < multiplayer.labelVisibilityRange) return 3
        }
        return 0
    },
    updateAircraft: function (a) {
        this.aircraft != a.ac && (this.removeModels(), this.aircraft = a.ac, this.aircraftName = null, this.isPeer && geofs.aircraft.instance.change(this.aircraft, this.currentLivery));
        this.aircraftName || (this.aircraftName = geofs.aircraftList[this.aircraft] ? geofs.aircraftList[this.aircraft].name : "unknown")
    },
    updateContrails: function () {
        if (geofs.preferences.graphics.contrails && this.referencePoint.lla[2] >
            weather.contrailAltitude) {
            if (this.contrailEmitter && this.contrailLod != this.lod && (this.contrailEmitter.destroy(), this.contrailEmitter = null), this.contrailLod != this.lod && multiplayer.contrailEmitters[this.lod]) {
                var a = Object.assign({}, multiplayer.contrailEmitters[this.lod]);
                a.anchor = this.referencePoint;
                this.contrailEmitter = new geofs.fx.ParticleEmitter(a)
            }
        } else this.contrailEmitter && (this.contrailEmitter.destroy(), this.contrailEmitter = null);
        this.contrailLod = this.lod
    },
    updateModel: function (a) {
        var b = this.getLOD(a);
        if (this.isPeer) this.removeModels(), multiplayer.visibleUsers[this.id] = this, this.lod = b;
        else {
            var c = !(!geofs.preferences.showCommunityMultiplayer && geofs.aircraftList[this.aircraft] && geofs.aircraftList[this.aircraft].community);
            this.models && 0 != this.models.length ? c || this.removeModels() : 0 < b && b < multiplayer.numberOfLOD && c && (this.models = multiplayer.loadModels(a.ac), this.lod = null);
            b != this.lod && (this.removeFromWorld(), 0 < b && b <= multiplayer.numberOfLOD ? multiplayer.visibleUsers[this.id] = this : delete multiplayer.visibleUsers[this.id],
                c = b - 1, this.models.length > c && 0 <= c && (this.model = this.models[c], geofs.api.addModelToWorld(this.model)), this.lod = b);
            multiplayer.visibleUsers[this.id] && 1 == this.lod && a.st.lv && this.currentLivery != a.st.lv && this.model.ready && (this.currentLivery = a.st.lv, geofs.api.changeModelTexture(this.model, geofs.url + geofs.aircraftList[this.aircraft].path + "texture-low_" + this.currentLivery + ".jpg", 0));
            if (this.premium != a.p || this.callsign != a.cs) this.premium = a.p, this.callsign = a.cs, this.removeCallsign();
            this.label || (b = a.p ? "premium" :
                "default", b = this.isTraffic ? "traffic" : b, b = 1 == a.acid ? "xavier" : b, this.addCallsign(this.callsign, b))
        }
    },
    addCallsign: function (a, b) {
        this.label = geofs.api.addLabel(a, null, multiplayer.labelOptions[b]);
        multiplayer.iconOptions[b] && (a = Object.assign({}, multiplayer.iconOptions[b], {
            pixelOffset: new Cesium.Cartesian2(-(4 * a.length + 5), 2)
        }), this.icon = new geofs.api.billboard(null, null, a))
    },
    removeCallsign: function () {
        geofs.api.removeLabel(this.label);
        this.label = null;
        this.icon && (this.icon.destroy(), this.icon = null)
    },
    removeFromWorld: function () {
        geofs.api.removeModelFromWorld(this.model);
        this.lod = this.model = null;
        this.removeCallsign()
    },
    removeModels: function () {
        this.removeFromWorld();
        if (this.models)
            for (var a = 0; a < this.models.length; a++) geofs.api.destroyModel(this.models[a]);
        this.currentLivery = this.lod = null;
        this.models = []
    },
    remove: function () {
        clearTimeout(this.heartBeatTimeout);
        this.removeModels();
        this.contrailEmitter && (this.contrailEmitter.destroy(), this.contrailEmitter = null);
        ui.mapInstance && ui.mapInstance.deletePlayerMarker(this.id);
        delete multiplayer.visibleUsers[this.id];
        delete multiplayer.users[this.id]
    },
    getCoordinates: function () {
        return this.lastUpdate.co
    },
    isOnGround: function () {
        return this.lastUpdate.st.gr
    }
};
multiplayer.blockUser = function (a) {
    ui.chat.removeUserMessages(a);
    $.ajax(geofs.url + "/backend/accounts/api.php?action=muteplayer&offenderid=" + a);
    geofs.userRecord.muteList[a] = 1
};
multiplayer.banUser = function (a) {
    $.ajax(geofs.url + "/backend/accounts/api.php?action=ban&offenderid=" + a)
};
multiplayer.loadModels = function (a) {
    var b = [];
    if (geofs.aircraftList[a]) {
        var c = ["multiplayer.glb", "multiplayer-low.glb"];
        geofs.aircraftList[a].multiplayerFiles && (c = geofs.aircraftList[a].multiplayerFiles.split(","));
        var d = geofs.url + geofs.aircraftList[a].path + c[0];
        a = geofs.url + geofs.aircraftList[a].path + c[1];
        b.push(geofs.loadModel(d, {
            justLoad: !0,
            castShadows: !0,
            incrementallyLoadTextures: !1,
            cacheKey: Math.random()
        }));
        b.push(geofs.loadModel(a, {
            justLoad: !0,
            castShadows: !0,
            incrementallyLoadTextures: !1
        }))
    }
    return b
};
multiplayer.setNbUsers = function (a) {
    --a;
    multiplayer.nbUsers != a && ($(".geofs-player-count").html(a + " pilots online"), multiplayer.nbUsers = a)
};
multiplayer.setChatMessage = function (a) {
    multiplayer.chatMessage = a
};
"use strict";
geofs.debug = {};
geofs.debug.logStack = [];
geofs.debug.logStackMaxLength = 10;
geofs.debug.init = function () {
    geofs.debug.$panel = $(".geofs-debug");
    geofs.debug.axis = null;
    var a = function (b) {
        b.stopPropagation()
    };
    geofs.debug.$panel.keydown(a);
    geofs.debug.$panel.keyup(a)
};
geofs.debug.turnOn = function () {
    geofs.debug.$panel || geofs.debug.init();
    geofs.debug.$debugFrame = $(".geofs-debugFrame");
    geofs.debug.$debugWatch = $(".geofs-debugWatch");
    geofs.debug.$debugLog = $(".geofs-debugLog");
    geofs.debugOn = !0
};
geofs.debug.afterWorldInit = function () {
    geofs.api.debug(geofs.debugOn)
};
geofs.debug.turnOff = function () {
    geofs.debugOn = !1;
    geofs.api.debug(!1)
};
geofs.debug.watch = function (a, b) {
    geofs.debugOn && geofs.debug.$debugFrame && (geofs.debug[a] || (geofs.debug[a] = document.createElement("div"), geofs.debug.$debugFrame.append(geofs.debug[a])), geofs.debug[a].innerHTML = a + ": " + b)
};
geofs.debug.error = function (a, b) {
    b = b || "unknown";
    a ? (b = b + ": " + a.message, geofs.debug.log(b), geofs.debug.throw(a)) : geofs.debug.log(b)
};
geofs.debug.log = function (a) {
    geofs.debugOn && (geofs.debug.$debugLog && geofs.debug.$debugLog.html(geofs.debug.$debugLog.html() + "<br/>" + a), window.console && window.console.log && console.log(a));
    geofs.debug.stackLog(a)
};
geofs.debug.debugger = function () {
    if (geofs.debugOn) debugger
};
geofs.debug.throw = function (a) {
    geofs.debugOn && a && setTimeout(function () {
        throw a;
    }, 0)
};
geofs.debug.alert = function (a, b) {
    if (geofs.debugOn && b) throw b;
    geofs.debug.stackLog(a)
};
geofs.debug.stackLog = function (a) {
    geofs.debug.logStack.push(a);
    geofs.debug.logStack.length > geofs.debug.logStackMaxLength && geofs.debug.logStack.shift()
};
geofs.debug.update = function (a) {
    geofs.debug.fps = exponentialSmoothing("fps", 1E3 / a).toPrecision(2);
    if (geofs.debugOn && (a = $(".debugPointName")[0])) {
        a = a.value;
        var b = geofs.aircraft.instance.parts[a],
            c = instruments.list[a];
        if (b) {
            var d = $(".debugCollisionPointIndex")[0].value;
            d ? (d = b.collisionPoints[parseInt(d)] || b.points[d], geofs.debug.placeAxis(b.object3d.getWorldFrame(), d.worldPosition)) : ($(".debugShowForceSource")[0].checked && geofs.debug.placeAxis(b.object3d.getWorldFrame(), b.points.forceSourcePoint.worldPosition),
                $(".debugShowForceDirection")[0].checked && geofs.debug.placeAxis(b.object3d.getWorldFrame(), b.points.forceDirection.worldPosition), $(".debugShowLocalPosition")[0].checked && geofs.debug.placeAxis(b.object3d.getWorldFrame(), b.object3d.worldPosition), $(".debugShowsuspensionOrigin")[0].checked && geofs.debug.placeAxis(b.object3d.getWorldFrame(), b.points.suspensionOrigin.worldPosition));
            $(".debugPartData").html("Node Origin: " + b.object3d._nodeOrigin)
        }
        c && c.definition.cockpit && (b = c.definition.cockpit.position,
            geofs.debug.placeAxis(geofs.aircraft.instance.object3d.getWorldFrame(), b.worldPosition));
        "camera" == a && (b = geofs.aircraft.instance.definition.camera.cockpit, geofs.aircraft.instance.object3d.setVectorWorldPosition(b), geofs.debug.placeAxis(geofs.aircraft.instance.object3d.getWorldFrame(), b.worldPosition))
    }
};
geofs.debug.loadAxis = function () {
    geofs.debug.axis = {};
    geofs.debug.axis.model = geofs.loadModel("models/debug/axis.glb")
};
geofs.debug.placeProbe = function (a) {
    geofs.debug.probe ? geofs.api.setModelPositionOrientationAndScale(geofs.debug.probe.model, [a[0], a[1], a[2]]) : geofs.debug.loadProbe()
};
geofs.debug.loadProbe = function () {
    geofs.debug.probe = {};
    geofs.debug.probe.model = geofs.loadModel("models/debug/probe.glb")
};
geofs.debug.placeAxis = function (a, b) {
    geofs.debug.axis || geofs.debug.loadAxis();
    try {
        var c = V3.add(geofs.aircraft.instance.llaLocation, xyz2lla(b, geofs.aircraft.instance.llaLocation)),
            d = M33.getOrientation(a);
        geofs.api.setModelPositionOrientationAndScale(geofs.debug.axis.model, c, d)
    } catch (e) {
        geofs.debug.error(e, "placeAxis")
    }
};
geofs.debug.toggleDebug = function () {
    ui.panel.toggle(".geofs-debug")
};
geofs.debug.atmosphereSize = [.02, .02, 1500];
geofs.debug.atmosphereResolution = [.001, .001, 200];
geofs.debug.drawAtmosphere = function (a) {
    geofs.debug.dataSource ? geofs.debug.dataSource.entities.removeAll() : (geofs.debug.dataSource = new Cesium.CustomDataSource("windDebug"), geofs.api.viewer.dataSources.add(geofs.debug.dataSource));
    a = a || geofs.aircraft.instance.llaLocation;
    for (var b = weather.windLayers[weather.activeWindLayer], c = a[0] - geofs.debug.atmosphereSize[0]; c <= a[0] + geofs.debug.atmosphereSize[0]; c += geofs.debug.atmosphereResolution[0])
        for (var d = a[1] - geofs.debug.atmosphereSize[1]; d <= a[1] + geofs.debug.atmosphereSize[1]; d +=
            geofs.debug.atmosphereResolution[1])
            for (var e = 50; e <= geofs.debug.atmosphereSize[2]; e += geofs.debug.atmosphereResolution[2]) {
                var f = [c, d, e],
                    g = b.computeTerrainLift(f);
                f[2] = g.origin[2] + e;
                g = V3.scale(g, b.speed);
                var k = weather.getLocalThermal(f);
                g = V3.add(g, k);
                var m = clamp(g[2], .5, 10);
                k = Cesium.Color.fromHsl(clamp(.7 - .5 * k[2], 0, .9), clamp(.5 + .5 * g[2], 0, 1), .5);
                g = V3.scale(g, 15);
                var n = Cesium.Cartesian3.fromDegrees(f[1], f[0], f[2]);
                f = V3.add(f, xyz2lla(g, f));
                f = Cesium.Cartesian3.fromDegrees(f[1], f[0], f[2]);
                g = new Cesium.PolylineGraphics;
                g.material = new Cesium.ColorMaterialProperty(k);
                g.width = new Cesium.ConstantProperty(m);
                g.arcType = new Cesium.ConstantProperty(Cesium.ArcType.NONE);
                g.positions = new Cesium.ConstantProperty([n, f]);
                m = new Cesium.Entity({
                    show: !0,
                    polyline: g
                });
                geofs.debug.dataSource.entities.add(m)
            }
};