!
function() {
	return function t(e, i, n) {
		function r(s, o) {
			if (!i[s]) {
				if (!e[s]) {
					var u = "function" == typeof require && require;
					if (!o && u) return u(s, !0);
					if (a) return a(s, !0);
					var l = new Error("Cannot find module '" + s + "'");
					throw l.code = "MODULE_NOT_FOUND", l
				}
				var c = i[s] = {
					exports: {}
				};
				e[s][0].call(c.exports, function(t) {
					return r(e[s][1][t] || t)
				}, c, c.exports, t, e, i, n)
			}
			return i[s].exports
		}
		for (var a = "function" == typeof require && require, s = 0; s < n.length; s++) r(n[s]);
		return r
	}
}()({
	1: [function(t, e, i) {
		e.exports = function(t) {
			if (Array.isArray(t)) return t
		}
	}, {}],
	2: [function(t, e, i) {
		e.exports = function(t) {
			if (Array.isArray(t)) {
				for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e];
				return i
			}
		}
	}, {}],
	3: [function(t, e, i) {
		e.exports = function(t) {
			if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return t
		}
	}, {}],
	4: [function(t, e, i) {
		function n(t, e, i, n, r, a, s) {
			try {
				var o = t[a](s),
					u = o.value
			} catch (l) {
				return void i(l)
			}
			o.done ? e(u) : Promise.resolve(u).then(n, r)
		}
		e.exports = function(t) {
			return function() {
				var e = this,
					i = arguments;
				return new Promise(function(r, a) {
					var s = t.apply(e, i);

					function o(t) {
						n(s, r, a, o, u, "next", t)
					}
					function u(t) {
						n(s, r, a, o, u, "throw", t)
					}
					o(void 0)
				})
			}
		}
	}, {}],
	5: [function(t, e, i) {
		e.exports = function(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}
	}, {}],
	6: [function(t, e, i) {
		var n = t(18);

		function r(t, i, a) {
			return function() {
				if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
				if (Reflect.construct.sham) return !1;
				if ("function" == typeof Proxy) return !0;
				try {
					return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), !0
				} catch (t) {
					return !1
				}
			}() ? e.exports = r = Reflect.construct : e.exports = r = function(t, e, i) {
				var r = [null];
				r.push.apply(r, e);
				var a = new(Function.bind.apply(t, r));
				return i && n(a, i.prototype), a
			}, r.apply(null, arguments)
		}
		e.exports = r
	}, {
		18: 18
	}],
	18: [function(t, e, i) {
		function n(t, i) {
			return e.exports = n = Object.setPrototypeOf ||
			function(t, e) {
				return t.__proto__ = e, t
			}, n(t, i)
		}
		e.exports = n
	}, {}],
	7: [function(t, e, i) {
		function n(t, e) {
			for (var i = 0; i < e.length; i++) {
				var n = e[i];
				n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
			}
		}
		e.exports = function(t, e, i) {
			return e && n(t.prototype, e), i && n(t, i), t
		}
	}, {}],
	8: [function(t, e, i) {
		e.exports = function(t, e, i) {
			return e in t ? Object.defineProperty(t, e, {
				value: i,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : t[e] = i, t
		}
	}, {}],
	9: [function(t, e, i) {
		t(10);
		var n = t(20);

		function r(t, i, a) {
			return "undefined" != typeof Reflect && Reflect.get ? e.exports = r = Reflect.get : e.exports = r = function(t, e, i) {
				var r = n(t, e);
				if (r) {
					var a = Object.getOwnPropertyDescriptor(r, e);
					return a.get ? a.get.call(i) : a.value
				}
			}, r(t, i, a || t)
		}
		e.exports = r
	}, {
		10: 10,
		20: 20
	}],
	10: [function(t, e, i) {
		function n(t) {
			return e.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
				return t.__proto__ || Object.getPrototypeOf(t)
			}, n(t)
		}
		e.exports = n
	}, {}],
	20: [function(t, e, i) {
		var n = t(10);
		e.exports = function(t, e) {
			for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = n(t)););
			return t
		}
	}, {
		10: 10
	}],
	11: [function(t, e, i) {
		var n = t(18);
		e.exports = function(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					writable: !0,
					configurable: !0
				}
			}), e && n(t, e)
		}
	}, {
		18: 18
	}],
	12: [function(t, e, i) {
		e.exports = function(t) {
			return t && t.__esModule ? t : {
			default:
				t
			}
		}
	}, {}],
	13: [function(t, e, i) {
		e.exports = function(t) {
			if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
		}
	}, {}],
	14: [function(t, e, i) {
		e.exports = function(t, e) {
			var i = [],
				n = !0,
				r = !1,
				a = void 0;
			try {
				for (var s, o = t[Symbol.iterator](); !(n = (s = o.next()).done) && (i.push(s.value), !e || i.length !== e); n = !0) ;
			} catch (u) {
				r = !0, a = u
			} finally {
				try {
					n || null == o.
					return ||o.
					return ()
				} finally {
					if (r) throw a
				}
			}
			return i
		}
	}, {}],
	15: [function(t, e, i) {
		e.exports = function() {
			throw new TypeError("Invalid attempt to destructure non-iterable instance")
		}
	}, {}],
	16: [function(t, e, i) {
		e.exports = function() {
			throw new TypeError("Invalid attempt to spread non-iterable instance")
		}
	}, {}],
	17: [function(t, e, i) {
		var n = t(22),
			r = t(3);
		e.exports = function(t, e) {
			return !e || "object" !== n(e) && "function" != typeof e ? r(t) : e
		}
	}, {
		22: 22,
		3: 3
	}],
	22: [function(t, e, i) {
		function n(t) {
			return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
			function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			})(t)
		}
		function r(t) {
			return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? e.exports = r = function(t) {
				return n(t)
			} : e.exports = r = function(t) {
				return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t)
			}, r(t)
		}
		e.exports = r
	}, {}],
	19: [function(t, e, i) {
		var n = t(1),
			r = t(14),
			a = t(15);
		e.exports = function(t, e) {
			return n(t) || r(t, e) || a()
		}
	}, {
		1: 1,
		14: 14,
		15: 15
	}],
	21: [function(t, e, i) {
		var n = t(2),
			r = t(13),
			a = t(16);
		e.exports = function(t) {
			return n(t) || r(t) || a()
		}
	}, {
		13: 13,
		16: 16,
		2: 2
	}],
	23: [function(t, e, i) {
		e.exports = t(43)
	}, {
		43: 43
	}],
	43: [function(t, e, i) {
		var n = function() {
				return this || "object" == typeof self && self
			}() || Function("return this")(),
			r = n.regeneratorRuntime && Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime") >= 0,
			a = r && n.regeneratorRuntime;
		if (n.regeneratorRuntime = void 0, e.exports = t(44), r) n.regeneratorRuntime = a;
		else try {
			delete n.regeneratorRuntime
		} catch (s) {
			n.regeneratorRuntime = void 0
		}
	}, {
		44: 44
	}],
	24: [function(t, e, i) {
		"use strict";
		i.toByteArray = function(t) {
			for (var e, i = l(t), n = i[0], s = i[1], o = new a(function(t, e, i) {
				return 3 * (e + i) / 4 - i
			}(0, n, s)), u = 0, c = s > 0 ? n - 4 : n, f = 0; f < c; f += 4) e = r[t.charCodeAt(f)] << 18 | r[t.charCodeAt(f + 1)] << 12 | r[t.charCodeAt(f + 2)] << 6 | r[t.charCodeAt(f + 3)], o[u++] = e >> 16 & 255, o[u++] = e >> 8 & 255, o[u++] = 255 & e;
			return 2 === s && (e = r[t.charCodeAt(f)] << 2 | r[t.charCodeAt(f + 1)] >> 4, o[u++] = 255 & e), 1 === s && (e = r[t.charCodeAt(f)] << 10 | r[t.charCodeAt(f + 1)] << 4 | r[t.charCodeAt(f + 2)] >> 2, o[u++] = e >> 8 & 255, o[u++] = 255 & e), o
		}, i.fromByteArray = function(t) {
			for (var e, i = t.length, r = i % 3, a = [], s = 0, o = i - r; s < o; s += 16383) a.push(c(t, s, s + 16383 > o ? o : s + 16383));
			return 1 === r ? (e = t[i - 1], a.push(n[e >> 2] + n[e << 4 & 63] + "==")) : 2 === r && (e = (t[i - 2] << 8) + t[i - 1], a.push(n[e >> 10] + n[e >> 4 & 63] + n[e << 2 & 63] + "=")), a.join("")
		};
		for (var n = [], r = [], a = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = 0, u = s.length; o < u; ++o) n[o] = s[o], r[s.charCodeAt(o)] = o;

		function l(t) {
			var e = t.length;
			if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
			var i = t.indexOf("=");
			return -1 === i && (i = e), [i, i === e ? 0 : 4 - i % 4]
		}
		function c(t, e, i) {
			for (var r, a, s = [], o = e; o < i; o += 3) r = (t[o] << 16 & 16711680) + (t[o + 1] << 8 & 65280) + (255 & t[o + 2]), s.push(n[(a = r) >> 18 & 63] + n[a >> 12 & 63] + n[a >> 6 & 63] + n[63 & a]);
			return s.join("")
		}
		r["-".charCodeAt(0)] = 62, r["_".charCodeAt(0)] = 63
	}, {}],
	25: [function(t, e, i) {
		"use strict";
		var n = t(24),
			r = t(28);
		i.Buffer = o, i.INSPECT_MAX_BYTES = 50;
		var a = 2147483647;

		function s(t) {
			if (t > a) throw new RangeError('The value "' + t + '" is invalid for option "size"');
			var e = new Uint8Array(t);
			return e.__proto__ = o.prototype, e
		}
		function o(t, e, i) {
			if ("number" == typeof t) {
				if ("string" == typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
				return c(t)
			}
			return u(t, e, i)
		}
		function u(t, e, i) {
			if ("string" == typeof t) return function(t, e) {
				if ("string" == typeof e && "" !== e || (e = "utf8"), !o.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
				var i = 0 | _(t, e),
					n = s(i),
					r = n.write(t, e);
				return r !== i && (n = n.slice(0, r)), n
			}(t, e);
			if (ArrayBuffer.isView(t)) return f(t);
			if (null == t) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
			if (V(t, ArrayBuffer) || t && V(t.buffer, ArrayBuffer)) return function(t, e, i) {
				if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
				if (t.byteLength < e + (i || 0)) throw new RangeError('"length" is outside of buffer bounds');
				var n;
				return (n = void 0 === e && void 0 === i ? new Uint8Array(t) : void 0 === i ? new Uint8Array(t, e) : new Uint8Array(t, e, i)).__proto__ = o.prototype, n
			}(t, e, i);
			if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
			var n = t.valueOf && t.valueOf();
			if (null != n && n !== t) return o.from(n, e, i);
			var r = function(t) {
					if (o.isBuffer(t)) {
						var e = 0 | h(t.length),
							i = s(e);
						return 0 === i.length ? i : (t.copy(i, 0, 0, e), i)
					}
					return void 0 !== t.length ? "number" != typeof t.length || D(t.length) ? s(0) : f(t) : "Buffer" === t.type && Array.isArray(t.data) ? f(t.data) : void 0
				}(t);
			if (r) return r;
			if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return o.from(t[Symbol.toPrimitive]("string"), e, i);
			throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
		}
		function l(t) {
			if ("number" != typeof t) throw new TypeError('"size" argument must be of type number');
			if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"')
		}
		function c(t) {
			return l(t), s(t < 0 ? 0 : 0 | h(t))
		}
		function f(t) {
			for (var e = t.length < 0 ? 0 : 0 | h(t.length), i = s(e), n = 0; n < e; n += 1) i[n] = 255 & t[n];
			return i
		}
		function h(t) {
			if (t >= a) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a.toString(16) + " bytes");
			return 0 | t
		}
		function _(t, e) {
			if (o.isBuffer(t)) return t.length;
			if (ArrayBuffer.isView(t) || V(t, ArrayBuffer)) return t.byteLength;
			if ("string" != typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
			var i = t.length,
				n = arguments.length > 2 && !0 === arguments[2];
			if (!n && 0 === i) return 0;
			for (var r = !1;;)
			switch (e) {
			case "ascii":
			case "latin1":
			case "binary":
				return i;
			case "utf8":
			case "utf-8":
				return M(t).length;
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le":
				return 2 * i;
			case "hex":
				return i >>> 1;
			case "base64":
				return B(t).length;
			default:
				if (r) return n ? -1 : M(t).length;
				e = ("" + e).toLowerCase(), r = !0
			}
		}
		function d(t, e, i) {
			var n = t[e];
			t[e] = t[i], t[i] = n
		}
		function p(t, e, i, n, r) {
			if (0 === t.length) return -1;
			if ("string" == typeof i ? (n = i, i = 0) : i > 2147483647 ? i = 2147483647 : i < -2147483648 && (i = -2147483648), D(i = +i) && (i = r ? 0 : t.length - 1), i < 0 && (i = t.length + i), i >= t.length) {
				if (r) return -1;
				i = t.length - 1
			} else if (i < 0) {
				if (!r) return -1;
				i = 0
			}
			if ("string" == typeof e && (e = o.from(e, n)), o.isBuffer(e)) return 0 === e.length ? -1 : v(t, e, i, n, r);
			if ("number" == typeof e) return e &= 255, "function" == typeof Uint8Array.prototype.indexOf ? r ? Uint8Array.prototype.indexOf.call(t, e, i) : Uint8Array.prototype.lastIndexOf.call(t, e, i) : v(t, [e], i, n, r);
			throw new TypeError("val must be string, number or Buffer")
		}
		function v(t, e, i, n, r) {
			var a, s = 1,
				o = t.length,
				u = e.length;
			if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
				if (t.length < 2 || e.length < 2) return -1;
				s = 2, o /= 2, u /= 2, i /= 2
			}
			function l(t, e) {
				return 1 === s ? t[e] : t.readUInt16BE(e * s)
			}
			if (r) {
				var c = -1;
				for (a = i; a < o; a++) if (l(t, a) === l(e, -1 === c ? 0 : a - c)) {
					if (-1 === c && (c = a), a - c + 1 === u) return c * s
				} else - 1 !== c && (a -= a - c), c = -1
			} else for (i + u > o && (i = o - u), a = i; a >= 0; a--) {
				for (var f = !0, h = 0; h < u; h++) if (l(t, a + h) !== l(e, h)) {
					f = !1;
					break
				}
				if (f) return a
			}
			return -1
		}
		function g(t, e, i, n) {
			i = Number(i) || 0;
			var r = t.length - i;
			n ? (n = Number(n)) > r && (n = r) : n = r;
			var a = e.length;
			n > a / 2 && (n = a / 2);
			for (var s = 0; s < n; ++s) {
				var o = parseInt(e.substr(2 * s, 2), 16);
				if (D(o)) return s;
				t[i + s] = o
			}
			return s
		}
		function m(t, e, i, n) {
			return U(M(e, t.length - i), t, i, n)
		}
		function y(t, e, i, n) {
			return U(function(t) {
				for (var e = [], i = 0; i < t.length; ++i) e.push(255 & t.charCodeAt(i));
				return e
			}(e), t, i, n)
		}
		function b(t, e, i, n) {
			return y(t, e, i, n)
		}
		function k(t, e, i, n) {
			return U(B(e), t, i, n)
		}
		function w(t, e, i, n) {
			return U(function(t, e) {
				for (var i, n, r, a = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) n = (i = t.charCodeAt(s)) >> 8, r = i % 256, a.push(r), a.push(n);
				return a
			}(e, t.length - i), t, i, n)
		}
		function x(t, e, i) {
			return 0 === e && i === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, i))
		}
		function A(t, e, i) {
			i = Math.min(t.length, i);
			for (var n = [], r = e; r < i;) {
				var a, s, o, u, l = t[r],
					c = null,
					f = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
				if (r + f <= i) switch (f) {
				case 1:
					l < 128 && (c = l);
					break;
				case 2:
					128 == (192 & (a = t[r + 1])) && (u = (31 & l) << 6 | 63 & a) > 127 && (c = u);
					break;
				case 3:
					a = t[r + 1], s = t[r + 2], 128 == (192 & a) && 128 == (192 & s) && (u = (15 & l) << 12 | (63 & a) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (c = u);
					break;
				case 4:
					a = t[r + 1], s = t[r + 2], o = t[r + 3], 128 == (192 & a) && 128 == (192 & s) && 128 == (192 & o) && (u = (15 & l) << 18 | (63 & a) << 12 | (63 & s) << 6 | 63 & o) > 65535 && u < 1114112 && (c = u)
				}
				null === c ? (c = 65533, f = 1) : c > 65535 && (c -= 65536, n.push(c >>> 10 & 1023 | 55296), c = 56320 | 1023 & c), n.push(c), r += f
			}
			return function(t) {
				var e = t.length;
				if (e <= S) return String.fromCharCode.apply(String, t);
				for (var i = "", n = 0; n < e;) i += String.fromCharCode.apply(String, t.slice(n, n += S));
				return i
			}(n)
		}
		o.TYPED_ARRAY_SUPPORT = function() {
			try {
				var t = new Uint8Array(1);
				return t.__proto__ = {
					__proto__: Uint8Array.prototype,
					foo: function() {
						return 42
					}
				}, 42 === t.foo()
			} catch (e) {
				return !1
			}
		}(), o.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(o.prototype, "parent", {
			enumerable: !0,
			get: function() {
				if (o.isBuffer(this)) return this.buffer
			}
		}), Object.defineProperty(o.prototype, "offset", {
			enumerable: !0,
			get: function() {
				if (o.isBuffer(this)) return this.byteOffset
			}
		}), "undefined" != typeof Symbol && null != Symbol.species && o[Symbol.species] === o && Object.defineProperty(o, Symbol.species, {
			value: null,
			configurable: !0,
			enumerable: !1,
			writable: !1
		}), o.poolSize = 8192, o.from = function(t, e, i) {
			return u(t, e, i)
		}, o.prototype.__proto__ = Uint8Array.prototype, o.__proto__ = Uint8Array, o.alloc = function(t, e, i) {
			return function(t, e, i) {
				return l(t), t <= 0 ? s(t) : void 0 !== e ? "string" == typeof i ? s(t).fill(e, i) : s(t).fill(e) : s(t)
			}(t, e, i)
		}, o.allocUnsafe = function(t) {
			return c(t)
		}, o.allocUnsafeSlow = function(t) {
			return c(t)
		}, o.isBuffer = function(t) {
			return null != t && !0 === t._isBuffer && t !== o.prototype
		}, o.compare = function(t, e) {
			if (V(t, Uint8Array) && (t = o.from(t, t.offset, t.byteLength)), V(e, Uint8Array) && (e = o.from(e, e.offset, e.byteLength)), !o.isBuffer(t) || !o.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
			if (t === e) return 0;
			for (var i = t.length, n = e.length, r = 0, a = Math.min(i, n); r < a; ++r) if (t[r] !== e[r]) {
				i = t[r], n = e[r];
				break
			}
			return i < n ? -1 : n < i ? 1 : 0
		}, o.isEncoding = function(t) {
			switch (String(t).toLowerCase()) {
			case "hex":
			case "utf8":
			case "utf-8":
			case "ascii":
			case "latin1":
			case "binary":
			case "base64":
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le":
				return !0;
			default:
				return !1
			}
		}, o.concat = function(t, e) {
			if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
			if (0 === t.length) return o.alloc(0);
			var i;
			if (void 0 === e) for (e = 0, i = 0; i < t.length; ++i) e += t[i].length;
			var n = o.allocUnsafe(e),
				r = 0;
			for (i = 0; i < t.length; ++i) {
				var a = t[i];
				if (V(a, Uint8Array) && (a = o.from(a)), !o.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
				a.copy(n, r), r += a.length
			}
			return n
		}, o.byteLength = _, o.prototype._isBuffer = !0, o.prototype.swap16 = function() {
			var t = this.length;
			if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
			for (var e = 0; e < t; e += 2) d(this, e, e + 1);
			return this
		}, o.prototype.swap32 = function() {
			var t = this.length;
			if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
			for (var e = 0; e < t; e += 4) d(this, e, e + 3), d(this, e + 1, e + 2);
			return this
		}, o.prototype.swap64 = function() {
			var t = this.length;
			if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
			for (var e = 0; e < t; e += 8) d(this, e, e + 7), d(this, e + 1, e + 6), d(this, e + 2, e + 5), d(this, e + 3, e + 4);
			return this
		}, o.prototype.toString = function() {
			var t = this.length;
			return 0 === t ? "" : 0 === arguments.length ? A(this, 0, t) : function(t, e, i) {
				var n = !1;
				if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
				if ((void 0 === i || i > this.length) && (i = this.length), i <= 0) return "";
				if ((i >>>= 0) <= (e >>>= 0)) return "";
				for (t || (t = "utf8");;) switch (t) {
				case "hex":
					return C(this, e, i);
				case "utf8":
				case "utf-8":
					return A(this, e, i);
				case "ascii":
					return E(this, e, i);
				case "latin1":
				case "binary":
					return T(this, e, i);
				case "base64":
					return x(this, e, i);
				case "ucs2":
				case "ucs-2":
				case "utf16le":
				case "utf-16le":
					return R(this, e, i);
				default:
					if (n) throw new TypeError("Unknown encoding: " + t);
					t = (t + "").toLowerCase(), n = !0
				}
			}.apply(this, arguments)
		}, o.prototype.toLocaleString = o.prototype.toString, o.prototype.equals = function(t) {
			if (!o.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
			return this === t || 0 === o.compare(this, t)
		}, o.prototype.inspect = function() {
			var t = "",
				e = i.INSPECT_MAX_BYTES;
			return t = this.toString("hex", 0, e).replace(/(.{2})/g, "$1 ").trim(), this.length > e && (t += " ... "), "<Buffer " + t + ">"
		}, o.prototype.compare = function(t, e, i, n, r) {
			if (V(t, Uint8Array) && (t = o.from(t, t.offset, t.byteLength)), !o.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
			if (void 0 === e && (e = 0), void 0 === i && (i = t ? t.length : 0), void 0 === n && (n = 0), void 0 === r && (r = this.length), e < 0 || i > t.length || n < 0 || r > this.length) throw new RangeError("out of range index");
			if (n >= r && e >= i) return 0;
			if (n >= r) return -1;
			if (e >= i) return 1;
			if (this === t) return 0;
			for (var a = (r >>>= 0) - (n >>>= 0), s = (i >>>= 0) - (e >>>= 0), u = Math.min(a, s), l = this.slice(n, r), c = t.slice(e, i), f = 0; f < u; ++f) if (l[f] !== c[f]) {
				a = l[f], s = c[f];
				break
			}
			return a < s ? -1 : s < a ? 1 : 0
		}, o.prototype.includes = function(t, e, i) {
			return -1 !== this.indexOf(t, e, i)
		}, o.prototype.indexOf = function(t, e, i) {
			return p(this, t, e, i, !0)
		}, o.prototype.lastIndexOf = function(t, e, i) {
			return p(this, t, e, i, !1)
		}, o.prototype.write = function(t, e, i, n) {
			if (void 0 === e) n = "utf8", i = this.length, e = 0;
			else if (void 0 === i && "string" == typeof e) n = e, i = this.length, e = 0;
			else {
				if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
				e >>>= 0, isFinite(i) ? (i >>>= 0, void 0 === n && (n = "utf8")) : (n = i, i = void 0)
			}
			var r = this.length - e;
			if ((void 0 === i || i > r) && (i = r), t.length > 0 && (i < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
			n || (n = "utf8");
			for (var a = !1;;) switch (n) {
			case "hex":
				return g(this, t, e, i);
			case "utf8":
			case "utf-8":
				return m(this, t, e, i);
			case "ascii":
				return y(this, t, e, i);
			case "latin1":
			case "binary":
				return b(this, t, e, i);
			case "base64":
				return k(this, t, e, i);
			case "ucs2":
			case "ucs-2":
			case "utf16le":
			case "utf-16le":
				return w(this, t, e, i);
			default:
				if (a) throw new TypeError("Unknown encoding: " + n);
				n = ("" + n).toLowerCase(), a = !0
			}
		}, o.prototype.toJSON = function() {
			return {
				type: "Buffer",
				data: Array.prototype.slice.call(this._arr || this, 0)
			}
		};
		var S = 4096;

		function E(t, e, i) {
			var n = "";
			i = Math.min(t.length, i);
			for (var r = e; r < i; ++r) n += String.fromCharCode(127 & t[r]);
			return n
		}
		function T(t, e, i) {
			var n = "";
			i = Math.min(t.length, i);
			for (var r = e; r < i; ++r) n += String.fromCharCode(t[r]);
			return n
		}
		function C(t, e, i) {
			var n, r = t.length;
			(!e || e < 0) && (e = 0), (!i || i < 0 || i > r) && (i = r);
			for (var a = "", s = e; s < i; ++s) a += (n = t[s]) < 16 ? "0" + n.toString(16) : n.toString(16);
			return a
		}
		function R(t, e, i) {
			for (var n = t.slice(e, i), r = "", a = 0; a < n.length; a += 2) r += String.fromCharCode(n[a] + 256 * n[a + 1]);
			return r
		}
		function I(t, e, i) {
			if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
			if (t + e > i) throw new RangeError("Trying to access beyond buffer length")
		}
		function L(t, e, i, n, r, a) {
			if (!o.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
			if (e > r || e < a) throw new RangeError('"value" argument is out of bounds');
			if (i + n > t.length) throw new RangeError("Index out of range")
		}
		function F(t, e, i, n, r, a) {
			if (i + n > t.length) throw new RangeError("Index out of range");
			if (i < 0) throw new RangeError("Index out of range")
		}
		function P(t, e, i, n, a) {
			return e = +e, i >>>= 0, a || F(t, 0, i, 4), r.write(t, e, i, n, 23, 4), i + 4
		}
		function N(t, e, i, n, a) {
			return e = +e, i >>>= 0, a || F(t, 0, i, 8), r.write(t, e, i, n, 52, 8), i + 8
		}
		o.prototype.slice = function(t, e) {
			var i = this.length;
			(t = ~~t) < 0 ? (t += i) < 0 && (t = 0) : t > i && (t = i), (e = void 0 === e ? i : ~~e) < 0 ? (e += i) < 0 && (e = 0) : e > i && (e = i), e < t && (e = t);
			var n = this.subarray(t, e);
			return n.__proto__ = o.prototype, n
		}, o.prototype.readUIntLE = function(t, e, i) {
			t >>>= 0, e >>>= 0, i || I(t, e, this.length);
			for (var n = this[t], r = 1, a = 0; ++a < e && (r *= 256);) n += this[t + a] * r;
			return n
		}, o.prototype.readUIntBE = function(t, e, i) {
			t >>>= 0, e >>>= 0, i || I(t, e, this.length);
			for (var n = this[t + --e], r = 1; e > 0 && (r *= 256);) n += this[t + --e] * r;
			return n
		}, o.prototype.readUInt8 = function(t, e) {
			return t >>>= 0, e || I(t, 1, this.length), this[t]
		}, o.prototype.readUInt16LE = function(t, e) {
			return t >>>= 0, e || I(t, 2, this.length), this[t] | this[t + 1] << 8
		}, o.prototype.readUInt16BE = function(t, e) {
			return t >>>= 0, e || I(t, 2, this.length), this[t] << 8 | this[t + 1]
		}, o.prototype.readUInt32LE = function(t, e) {
			return t >>>= 0, e || I(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
		}, o.prototype.readUInt32BE = function(t, e) {
			return t >>>= 0, e || I(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
		}, o.prototype.readIntLE = function(t, e, i) {
			t >>>= 0, e >>>= 0, i || I(t, e, this.length);
			for (var n = this[t], r = 1, a = 0; ++a < e && (r *= 256);) n += this[t + a] * r;
			return n >= (r *= 128) && (n -= Math.pow(2, 8 * e)), n
		}, o.prototype.readIntBE = function(t, e, i) {
			t >>>= 0, e >>>= 0, i || I(t, e, this.length);
			for (var n = e, r = 1, a = this[t + --n]; n > 0 && (r *= 256);) a += this[t + --n] * r;
			return a >= (r *= 128) && (a -= Math.pow(2, 8 * e)), a
		}, o.prototype.readInt8 = function(t, e) {
			return t >>>= 0, e || I(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
		}, o.prototype.readInt16LE = function(t, e) {
			t >>>= 0, e || I(t, 2, this.length);
			var i = this[t] | this[t + 1] << 8;
			return 32768 & i ? 4294901760 | i : i
		}, o.prototype.readInt16BE = function(t, e) {
			t >>>= 0, e || I(t, 2, this.length);
			var i = this[t + 1] | this[t] << 8;
			return 32768 & i ? 4294901760 | i : i
		}, o.prototype.readInt32LE = function(t, e) {
			return t >>>= 0, e || I(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
		}, o.prototype.readInt32BE = function(t, e) {
			return t >>>= 0, e || I(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
		}, o.prototype.readFloatLE = function(t, e) {
			return t >>>= 0, e || I(t, 4, this.length), r.read(this, t, !0, 23, 4)
		}, o.prototype.readFloatBE = function(t, e) {
			return t >>>= 0, e || I(t, 4, this.length), r.read(this, t, !1, 23, 4)
		}, o.prototype.readDoubleLE = function(t, e) {
			return t >>>= 0, e || I(t, 8, this.length), r.read(this, t, !0, 52, 8)
		}, o.prototype.readDoubleBE = function(t, e) {
			return t >>>= 0, e || I(t, 8, this.length), r.read(this, t, !1, 52, 8)
		}, o.prototype.writeUIntLE = function(t, e, i, n) {
			t = +t, e >>>= 0, i >>>= 0, n || L(this, t, e, i, Math.pow(2, 8 * i) - 1, 0);
			var r = 1,
				a = 0;
			for (this[e] = 255 & t; ++a < i && (r *= 256);) this[e + a] = t / r & 255;
			return e + i
		}, o.prototype.writeUIntBE = function(t, e, i, n) {
			t = +t, e >>>= 0, i >>>= 0, n || L(this, t, e, i, Math.pow(2, 8 * i) - 1, 0);
			var r = i - 1,
				a = 1;
			for (this[e + r] = 255 & t; --r >= 0 && (a *= 256);) this[e + r] = t / a & 255;
			return e + i
		}, o.prototype.writeUInt8 = function(t, e, i) {
			return t = +t, e >>>= 0, i || L(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
		}, o.prototype.writeUInt16LE = function(t, e, i) {
			return t = +t, e >>>= 0, i || L(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
		}, o.prototype.writeUInt16BE = function(t, e, i) {
			return t = +t, e >>>= 0, i || L(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
		}, o.prototype.writeUInt32LE = function(t, e, i) {
			return t = +t, e >>>= 0, i || L(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
		}, o.prototype.writeUInt32BE = function(t, e, i) {
			return t = +t, e >>>= 0, i || L(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
		}, o.prototype.writeIntLE = function(t, e, i, n) {
			if (t = +t, e >>>= 0, !n) {
				var r = Math.pow(2, 8 * i - 1);
				L(this, t, e, i, r - 1, -r)
			}
			var a = 0,
				s = 1,
				o = 0;
			for (this[e] = 255 & t; ++a < i && (s *= 256);) t < 0 && 0 === o && 0 !== this[e + a - 1] && (o = 1), this[e + a] = (t / s >> 0) - o & 255;
			return e + i
		}, o.prototype.writeIntBE = function(t, e, i, n) {
			if (t = +t, e >>>= 0, !n) {
				var r = Math.pow(2, 8 * i - 1);
				L(this, t, e, i, r - 1, -r)
			}
			var a = i - 1,
				s = 1,
				o = 0;
			for (this[e + a] = 255 & t; --a >= 0 && (s *= 256);) t < 0 && 0 === o && 0 !== this[e + a + 1] && (o = 1), this[e + a] = (t / s >> 0) - o & 255;
			return e + i
		}, o.prototype.writeInt8 = function(t, e, i) {
			return t = +t, e >>>= 0, i || L(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
		}, o.prototype.writeInt16LE = function(t, e, i) {
			return t = +t, e >>>= 0, i || L(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
		}, o.prototype.writeInt16BE = function(t, e, i) {
			return t = +t, e >>>= 0, i || L(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
		}, o.prototype.writeInt32LE = function(t, e, i) {
			return t = +t, e >>>= 0, i || L(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
		}, o.prototype.writeInt32BE = function(t, e, i) {
			return t = +t, e >>>= 0, i || L(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
		}, o.prototype.writeFloatLE = function(t, e, i) {
			return P(this, t, e, !0, i)
		}, o.prototype.writeFloatBE = function(t, e, i) {
			return P(this, t, e, !1, i)
		}, o.prototype.writeDoubleLE = function(t, e, i) {
			return N(this, t, e, !0, i)
		}, o.prototype.writeDoubleBE = function(t, e, i) {
			return N(this, t, e, !1, i)
		}, o.prototype.copy = function(t, e, i, n) {
			if (!o.isBuffer(t)) throw new TypeError("argument should be a Buffer");
			if (i || (i = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < i && (n = i), n === i) return 0;
			if (0 === t.length || 0 === this.length) return 0;
			if (e < 0) throw new RangeError("targetStart out of bounds");
			if (i < 0 || i >= this.length) throw new RangeError("Index out of range");
			if (n < 0) throw new RangeError("sourceEnd out of bounds");
			n > this.length && (n = this.length), t.length - e < n - i && (n = t.length - e + i);
			var r = n - i;
			if (this === t && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(e, i, n);
			else if (this === t && i < e && e < n) for (var a = r - 1; a >= 0; --a) t[a + e] = this[a + i];
			else Uint8Array.prototype.set.call(t, this.subarray(i, n), e);
			return r
		}, o.prototype.fill = function(t, e, i, n) {
			if ("string" == typeof t) {
				if ("string" == typeof e ? (n = e, e = 0, i = this.length) : "string" == typeof i && (n = i, i = this.length), void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
				if ("string" == typeof n && !o.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
				if (1 === t.length) {
					var r = t.charCodeAt(0);
					("utf8" === n && r < 128 || "latin1" === n) && (t = r)
				}
			} else "number" == typeof t && (t &= 255);
			if (e < 0 || this.length < e || this.length < i) throw new RangeError("Out of range index");
			if (i <= e) return this;
			var a;
			if (e >>>= 0, i = void 0 === i ? this.length : i >>> 0, t || (t = 0), "number" == typeof t) for (a = e; a < i; ++a) this[a] = t;
			else {
				var s = o.isBuffer(t) ? t : o.from(t, n),
					u = s.length;
				if (0 === u) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
				for (a = 0; a < i - e; ++a) this[a + e] = s[a % u]
			}
			return this
		};
		var O = /[^+\/0-9A-Za-z-_]/g;

		function M(t, e) {
			var i;
			e = e || 1 / 0;
			for (var n = t.length, r = null, a = [], s = 0; s < n; ++s) {
				if ((i = t.charCodeAt(s)) > 55295 && i < 57344) {
					if (!r) {
						if (i > 56319) {
							(e -= 3) > -1 && a.push(239, 191, 189);
							continue
						}
						if (s + 1 === n) {
							(e -= 3) > -1 && a.push(239, 191, 189);
							continue
						}
						r = i;
						continue
					}
					if (i < 56320) {
						(e -= 3) > -1 && a.push(239, 191, 189), r = i;
						continue
					}
					i = 65536 + (r - 55296 << 10 | i - 56320)
				} else r && (e -= 3) > -1 && a.push(239, 191, 189);
				if (r = null, i < 128) {
					if ((e -= 1) < 0) break;
					a.push(i)
				} else if (i < 2048) {
					if ((e -= 2) < 0) break;
					a.push(i >> 6 | 192, 63 & i | 128)
				} else if (i < 65536) {
					if ((e -= 3) < 0) break;
					a.push(i >> 12 | 224, i >> 6 & 63 | 128, 63 & i | 128)
				} else {
					if (!(i < 1114112)) throw new Error("Invalid code point");
					if ((e -= 4) < 0) break;
					a.push(i >> 18 | 240, i >> 12 & 63 | 128, i >> 6 & 63 | 128, 63 & i | 128)
				}
			}
			return a
		}
		function B(t) {
			return n.toByteArray(function(t) {
				if ((t = (t = t.split("=")[0]).trim().replace(O, "")).length < 2) return "";
				for (; t.length % 4 != 0;) t += "=";
				return t
			}(t))
		}
		function U(t, e, i, n) {
			for (var r = 0; r < n && !(r + i >= e.length || r >= t.length); ++r) e[r + i] = t[r];
			return r
		}
		function V(t, e) {
			return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
		}
		function D(t) {
			return t != t
		}
	}, {
		24: 24,
		28: 28
	}],
	28: [function(t, e, i) {
		i.read = function(t, e, i, n, r) {
			var a, s, o = 8 * r - n - 1,
				u = (1 << o) - 1,
				l = u >> 1,
				c = -7,
				f = i ? r - 1 : 0,
				h = i ? -1 : 1,
				_ = t[e + f];
			for (f += h, a = _ & (1 << -c) - 1, _ >>= -c, c += o; c > 0; a = 256 * a + t[e + f], f += h, c -= 8);
			for (s = a & (1 << -c) - 1, a >>= -c, c += n; c > 0; s = 256 * s + t[e + f], f += h, c -= 8);
			if (0 === a) a = 1 - l;
			else {
				if (a === u) return s ? NaN : 1 / 0 * (_ ? -1 : 1);
				s += Math.pow(2, n), a -= l
			}
			return (_ ? -1 : 1) * s * Math.pow(2, a - n)
		}, i.write = function(t, e, i, n, r, a) {
			var s, o, u, l = 8 * a - r - 1,
				c = (1 << l) - 1,
				f = c >> 1,
				h = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
				_ = n ? 0 : a - 1,
				d = n ? 1 : -1,
				p = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
			for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (o = isNaN(e) ? 1 : 0, s = c) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (e += s + f >= 1 ? h / u : h * Math.pow(2, 1 - f)) * u >= 2 && (s++, u /= 2), s + f >= c ? (o = 0, s = c) : s + f >= 1 ? (o = (e * u - 1) * Math.pow(2, r), s += f) : (o = e * Math.pow(2, f - 1) * Math.pow(2, r), s = 0)); r >= 8; t[i + _] = 255 & o, _ += d, o /= 256, r -= 8);
			for (s = s << r | o, l += r; l > 0; t[i + _] = 255 & s, _ += d, s /= 256, l -= 8);
			t[i + _ - d] |= 128 * p
		}
	}, {}],
	26: [function(t, e, i) {
		(function(t) {
			var i = function() {
					"use strict";

					function e(t, e) {
						return null != e && t instanceof e
					}
					var i, n, r;
					try {
						i = Map
					} catch (u) {
						i = function() {}
					}
					try {
						n = Set
					} catch (u) {
						n = function() {}
					}
					try {
						r = Promise
					} catch (u) {
						r = function() {}
					}
					function a(s, u, l, c, f) {
						"object" == typeof u && (l = u.depth, c = u.prototype, f = u.includeNonEnumerable, u = u.circular);
						var h = [],
							_ = [],
							d = void 0 !== t;
						return void 0 === u && (u = !0), void 0 === l && (l = 1 / 0), function s(l, p) {
							if (null === l) return null;
							if (0 === p) return l;
							var v, g;
							if ("object" != typeof l) return l;
							if (e(l, i)) v = new i;
							else if (e(l, n)) v = new n;
							else if (e(l, r)) v = new r(function(t, e) {
								l.then(function(e) {
									t(s(e, p - 1))
								}, function(t) {
									e(s(t, p - 1))
								})
							});
							else if (a.__isArray(l)) v = [];
							else if (a.__isRegExp(l)) v = new RegExp(l.source, o(l)), l.lastIndex && (v.lastIndex = l.lastIndex);
							else if (a.__isDate(l)) v = new Date(l.getTime());
							else {
								if (d && t.isBuffer(l)) return v = t.allocUnsafe ? t.allocUnsafe(l.length) : new t(l.length), l.copy(v), v;
								e(l, Error) ? v = Object.create(l) : void 0 === c ? (g = Object.getPrototypeOf(l), v = Object.create(g)) : (v = Object.create(c), g = c)
							}
							if (u) {
								var m = h.indexOf(l);
								if (-1 != m) return _[m];
								h.push(l), _.push(v)
							}
							for (var y in e(l, i) && l.forEach(function(t, e) {
								var i = s(e, p - 1),
									n = s(t, p - 1);
								v.set(i, n)
							}), e(l, n) && l.forEach(function(t) {
								var e = s(t, p - 1);
								v.add(e)
							}), l) {
								var b;
								g && (b = Object.getOwnPropertyDescriptor(g, y)), b && null == b.set || (v[y] = s(l[y], p - 1))
							}
							if (Object.getOwnPropertySymbols) {
								var k = Object.getOwnPropertySymbols(l);
								for (y = 0; y < k.length; y++) {
									var w = k[y];
									(!(A = Object.getOwnPropertyDescriptor(l, w)) || A.enumerable || f) && (v[w] = s(l[w], p - 1), A.enumerable || Object.defineProperty(v, w, {
										enumerable: !1
									}))
								}
							}
							if (f) {
								var x = Object.getOwnPropertyNames(l);
								for (y = 0; y < x.length; y++) {
									var A, S = x[y];
									(A = Object.getOwnPropertyDescriptor(l, S)) && A.enumerable || (v[S] = s(l[S], p - 1), Object.defineProperty(v, S, {
										enumerable: !1
									}))
								}
							}
							return v
						}(s, l)
					}
					function s(t) {
						return Object.prototype.toString.call(t)
					}
					function o(t) {
						var e = "";
						return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), e
					}
					return a.clonePrototype = function(t) {
						if (null === t) return null;
						var e = function() {};
						return e.prototype = t, new e
					}, a.__objToStr = s, a.__isDate = function(t) {
						return "object" == typeof t && "[object Date]" === s(t)
					}, a.__isArray = function(t) {
						return "object" == typeof t && "[object Array]" === s(t)
					}, a.__isRegExp = function(t) {
						return "object" == typeof t && "[object RegExp]" === s(t)
					}, a.__getRegExpFlags = o, a
				}();
			"object" == typeof e && e.exports && (e.exports = i)
		}).call(this, t(25).Buffer)
	}, {
		25: 25
	}],
	27: [function(t, e, i) {
		"use strict";

		function n(t, e, i) {
			i = i || 2;
			var n, o, u, l, c, _, p, v = e && e.length,
				g = v ? e[0] * i : t.length,
				m = r(t, 0, g, i, !0),
				y = [];
			if (!m) return y;
			if (v && (m = function(t, e, i, n) {
				var s, o, u, l = [];
				for (s = 0, o = e.length; s < o; s++)(u = r(t, e[s] * n, s < o - 1 ? e[s + 1] * n : t.length, n, !1)) === u.next && (u.steiner = !0), l.push(d(u));
				for (l.sort(f), s = 0; s < l.length; s++) h(l[s], i), i = a(i, i.next);
				return i
			}(t, e, m, i)), t.length > 80 * i) {
				n = u = t[0], o = l = t[1];
				for (var b = i; b < g; b += i)(c = t[b]) < n && (n = c), (_ = t[b + 1]) < o && (o = _), c > u && (u = c), _ > l && (l = _);
				p = 0 !== (p = Math.max(u - n, l - o)) ? 1 / p : 0
			}
			return s(m, y, i, n, o, p), y
		}
		function r(t, e, i, n, r) {
			var a, s;
			if (r === S(t, e, i, n) > 0) for (a = e; a < i; a += n) s = w(a, t[a], t[a + 1], s);
			else for (a = i - n; a >= e; a -= n) s = w(a, t[a], t[a + 1], s);
			return s && m(s, s.next) && (x(s), s = s.next), s
		}
		function a(t, e) {
			if (!t) return t;
			e || (e = t);
			var i, n = t;
			do {
				if (i = !1, n.steiner || !m(n, n.next) && 0 !== g(n.prev, n, n.next)) n = n.next;
				else {
					if (x(n), (n = e = n.prev) === n.next) break;
					i = !0
				}
			} while (i || n !== e);
			return e
		}
		function s(t, e, i, n, r, f, h) {
			if (t) {
				!h && f &&
				function(t, e, i, n) {
					var r = t;
					do {
						null === r.z && (r.z = _(r.x, r.y, e, i, n)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next
					} while (r !== t);
					r.prevZ.nextZ = null, r.prevZ = null, function(t) {
						var e, i, n, r, a, s, o, u, l = 1;
						do {
							for (i = t, t = null, a = null, s = 0; i;) {
								for (s++, n = i, o = 0, e = 0; e < l && (o++, n = n.nextZ); e++);
								for (u = l; o > 0 || u > 0 && n;) 0 !== o && (0 === u || !n || i.z <= n.z) ? (r = i, i = i.nextZ, o--) : (r = n, n = n.nextZ, u--), a ? a.nextZ = r : t = r, r.prevZ = a, a = r;
								i = n
							}
							a.nextZ = null, l *= 2
						} while (s > 1)
					}(r)
				}(t, n, r, f);
				for (var d, p, v = t; t.prev !== t.next;) if (d = t.prev, p = t.next, f ? u(t, n, r, f) : o(t)) e.push(d.i / i), e.push(t.i / i), e.push(p.i / i), x(t), t = p.next, v = p.next;
				else if ((t = p) === v) {
					h ? 1 === h ? s(t = l(t, e, i), e, i, n, r, f, 2) : 2 === h && c(t, e, i, n, r, f) : s(a(t), e, i, n, r, f, 1);
					break
				}
			}
		}
		function o(t) {
			var e = t.prev,
				i = t,
				n = t.next;
			if (g(e, i, n) >= 0) return !1;
			for (var r = t.next.next; r !== t.prev;) {
				if (p(e.x, e.y, i.x, i.y, n.x, n.y, r.x, r.y) && g(r.prev, r, r.next) >= 0) return !1;
				r = r.next
			}
			return !0
		}
		function u(t, e, i, n) {
			var r = t.prev,
				a = t,
				s = t.next;
			if (g(r, a, s) >= 0) return !1;
			for (var o = r.x < a.x ? r.x < s.x ? r.x : s.x : a.x < s.x ? a.x : s.x, u = r.y < a.y ? r.y < s.y ? r.y : s.y : a.y < s.y ? a.y : s.y, l = r.x > a.x ? r.x > s.x ? r.x : s.x : a.x > s.x ? a.x : s.x, c = r.y > a.y ? r.y > s.y ? r.y : s.y : a.y > s.y ? a.y : s.y, f = _(o, u, e, i, n), h = _(l, c, e, i, n), d = t.prevZ, v = t.nextZ; d && d.z >= f && v && v.z <= h;) {
				if (d !== t.prev && d !== t.next && p(r.x, r.y, a.x, a.y, s.x, s.y, d.x, d.y) && g(d.prev, d, d.next) >= 0) return !1;
				if (d = d.prevZ, v !== t.prev && v !== t.next && p(r.x, r.y, a.x, a.y, s.x, s.y, v.x, v.y) && g(v.prev, v, v.next) >= 0) return !1;
				v = v.nextZ
			}
			for (; d && d.z >= f;) {
				if (d !== t.prev && d !== t.next && p(r.x, r.y, a.x, a.y, s.x, s.y, d.x, d.y) && g(d.prev, d, d.next) >= 0) return !1;
				d = d.prevZ
			}
			for (; v && v.z <= h;) {
				if (v !== t.prev && v !== t.next && p(r.x, r.y, a.x, a.y, s.x, s.y, v.x, v.y) && g(v.prev, v, v.next) >= 0) return !1;
				v = v.nextZ
			}
			return !0
		}
		function l(t, e, i) {
			var n = t;
			do {
				var r = n.prev,
					a = n.next.next;!m(r, a) && y(r, n, n.next, a) && b(r, a) && b(a, r) && (e.push(r.i / i), e.push(n.i / i), e.push(a.i / i), x(n), x(n.next), n = t = a), n = n.next
			} while (n !== t);
			return n
		}
		function c(t, e, i, n, r, o) {
			var u = t;
			do {
				for (var l = u.next.next; l !== u.prev;) {
					if (u.i !== l.i && v(u, l)) {
						var c = k(u, l);
						return u = a(u, u.next), c = a(c, c.next), s(u, e, i, n, r, o), void s(c, e, i, n, r, o)
					}
					l = l.next
				}
				u = u.next
			} while (u !== t)
		}
		function f(t, e) {
			return t.x - e.x
		}
		function h(t, e) {
			if (e = function(t, e) {
				var i, n = e,
					r = t.x,
					a = t.y,
					s = -1 / 0;
				do {
					if (a <= n.y && a >= n.next.y && n.next.y !== n.y) {
						var o = n.x + (a - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
						if (o <= r && o > s) {
							if (s = o, o === r) {
								if (a === n.y) return n;
								if (a === n.next.y) return n.next
							}
							i = n.x < n.next.x ? n : n.next
						}
					}
					n = n.next
				} while (n !== e);
				if (!i) return null;
				if (r === s) return i.prev;
				var u, l = i,
					c = i.x,
					f = i.y,
					h = 1 / 0;
				for (n = i.next; n !== l;) r >= n.x && n.x >= c && r !== n.x && p(a < f ? r : s, a, c, f, a < f ? s : r, a, n.x, n.y) && ((u = Math.abs(a - n.y) / (r - n.x)) < h || u === h && n.x > i.x) && b(n, t) && (i = n, h = u), n = n.next;
				return i
			}(t, e)) {
				var i = k(e, t);
				a(i, i.next)
			}
		}
		function _(t, e, i, n, r) {
			return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - i) * r) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - n) * r) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1
		}
		function d(t) {
			var e = t,
				i = t;
			do {
				e.x < i.x && (i = e), e = e.next
			} while (e !== t);
			return i
		}
		function p(t, e, i, n, r, a, s, o) {
			return (r - s) * (e - o) - (t - s) * (a - o) >= 0 && (t - s) * (n - o) - (i - s) * (e - o) >= 0 && (i - s) * (a - o) - (r - s) * (n - o) >= 0
		}
		function v(t, e) {
			return t.next.i !== e.i && t.prev.i !== e.i && !
			function(t, e) {
				var i = t;
				do {
					if (i.i !== t.i && i.next.i !== t.i && i.i !== e.i && i.next.i !== e.i && y(i, i.next, t, e)) return !0;
					i = i.next
				} while (i !== t);
				return !1
			}(t, e) && b(t, e) && b(e, t) &&
			function(t, e) {
				var i = t,
					n = !1,
					r = (t.x + e.x) / 2,
					a = (t.y + e.y) / 2;
				do {
					i.y > a != i.next.y > a && i.next.y !== i.y && r < (i.next.x - i.x) * (a - i.y) / (i.next.y - i.y) + i.x && (n = !n), i = i.next
				} while (i !== t);
				return n
			}(t, e)
		}
		function g(t, e, i) {
			return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y)
		}
		function m(t, e) {
			return t.x === e.x && t.y === e.y
		}
		function y(t, e, i, n) {
			return !!(m(t, e) && m(i, n) || m(t, n) && m(i, e)) || g(t, e, i) > 0 != g(t, e, n) > 0 && g(i, n, t) > 0 != g(i, n, e) > 0
		}
		function b(t, e) {
			return g(t.prev, t, t.next) < 0 ? g(t, e, t.next) >= 0 && g(t, t.prev, e) >= 0 : g(t, e, t.prev) < 0 || g(t, t.next, e) < 0
		}
		function k(t, e) {
			var i = new A(t.i, t.x, t.y),
				n = new A(e.i, e.x, e.y),
				r = t.next,
				a = e.prev;
			return t.next = e, e.prev = t, i.next = r, r.prev = i, n.next = i, i.prev = n, a.next = n, n.prev = a, n
		}
		function w(t, e, i, n) {
			var r = new A(t, e, i);
			return n ? (r.next = n.next, r.prev = n, n.next.prev = r, n.next = r) : (r.prev = r, r.next = r), r
		}
		function x(t) {
			t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
		}
		function A(t, e, i) {
			this.i = t, this.x = e, this.y = i, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
		}
		function S(t, e, i, n) {
			for (var r = 0, a = e, s = i - n; a < i; a += n) r += (t[s] - t[a]) * (t[a + 1] + t[s + 1]), s = a;
			return r
		}
		e.exports = n, e.exports.
	default = n, n.deviation = function(t, e, i, n) {
			var r = e && e.length,
				a = r ? e[0] * i : t.length,
				s = Math.abs(S(t, 0, a, i));
			if (r) for (var o = 0, u = e.length; o < u; o++) {
				var l = e[o] * i,
					c = o < u - 1 ? e[o + 1] * i : t.length;
				s -= Math.abs(S(t, l, c, i))
			}
			var f = 0;
			for (o = 0; o < n.length; o += 3) {
				var h = n[o] * i,
					_ = n[o + 1] * i,
					d = n[o + 2] * i;
				f += Math.abs((t[h] - t[d]) * (t[_ + 1] - t[h + 1]) - (t[h] - t[_]) * (t[d + 1] - t[h + 1]))
			}
			return 0 === s && 0 === f ? 0 : Math.abs((f - s) / s)
		}, n.flatten = function(t) {
			for (var e = t[0][0].length, i = {
				vertices: [],
				holes: [],
				dimensions: e
			}, n = 0, r = 0; r < t.length; r++) {
				for (var a = 0; a < t[r].length; a++) for (var s = 0; s < e; s++) i.vertices.push(t[r][a][s]);
				r > 0 && (n += t[r - 1].length, i.holes.push(n))
			}
			return i
		}
	}, {}],
	29: [function(t, e, i) {
		"function" == typeof Object.create ? e.exports = function(t, e) {
			t.super_ = e, t.prototype = Object.create(e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			})
		} : e.exports = function(t, e) {
			t.super_ = e;
			var i = function() {};
			i.prototype = e.prototype, t.prototype = new i, t.prototype.constructor = t
		}
	}, {}],
	30: [function(t, e, i) {
		"use strict";
		var n = t(38),
			r = t(31),
			a = t(32),
			s = t(34),
			o = t(40),
			u = t(41),
			l = t(36),
			c = Object.prototype.toString;

		function f(t) {
			if (!(this instanceof f)) return new f(t);
			this.options = r.assign({
				chunkSize: 16384,
				windowBits: 0,
				to: ""
			}, t || {});
			var e = this.options;
			e.raw && e.windowBits >= 0 && e.windowBits < 16 && (e.windowBits = -e.windowBits, 0 === e.windowBits && (e.windowBits = -15)), !(e.windowBits >= 0 && e.windowBits < 16) || t && t.windowBits || (e.windowBits += 32), e.windowBits > 15 && e.windowBits < 48 && 0 == (15 & e.windowBits) && (e.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new u, this.strm.avail_out = 0;
			var i = n.inflateInit2(this.strm, e.windowBits);
			if (i !== s.Z_OK) throw new Error(o[i]);
			this.header = new l, n.inflateGetHeader(this.strm, this.header)
		}
		function h(t, e) {
			var i = new f(e);
			if (i.push(t, !0), i.err) throw i.msg || o[i.err];
			return i.result
		}
		f.prototype.push = function(t, e) {
			var i, o, u, l, f, h, _ = this.strm,
				d = this.options.chunkSize,
				p = this.options.dictionary,
				v = !1;
			if (this.ended) return !1;
			o = e === ~~e ? e : !0 === e ? s.Z_FINISH : s.Z_NO_FLUSH, "string" == typeof t ? _.input = a.binstring2buf(t) : "[object ArrayBuffer]" === c.call(t) ? _.input = new Uint8Array(t) : _.input = t, _.next_in = 0, _.avail_in = _.input.length;
			do {
				if (0 === _.avail_out && (_.output = new r.Buf8(d), _.next_out = 0, _.avail_out = d), (i = n.inflate(_, s.Z_NO_FLUSH)) === s.Z_NEED_DICT && p && (h = "string" == typeof p ? a.string2buf(p) : "[object ArrayBuffer]" === c.call(p) ? new Uint8Array(p) : p, i = n.inflateSetDictionary(this.strm, h)), i === s.Z_BUF_ERROR && !0 === v && (i = s.Z_OK, v = !1), i !== s.Z_STREAM_END && i !== s.Z_OK) return this.onEnd(i), this.ended = !0, !1;
				_.next_out && (0 !== _.avail_out && i !== s.Z_STREAM_END && (0 !== _.avail_in || o !== s.Z_FINISH && o !== s.Z_SYNC_FLUSH) || ("string" === this.options.to ? (u = a.utf8border(_.output, _.next_out), l = _.next_out - u, f = a.buf2string(_.output, u), _.next_out = l, _.avail_out = d - l, l && r.arraySet(_.output, _.output, u, l, 0), this.onData(f)) : this.onData(r.shrinkBuf(_.output, _.next_out)))), 0 === _.avail_in && 0 === _.avail_out && (v = !0)
			} while ((_.avail_in > 0 || 0 === _.avail_out) && i !== s.Z_STREAM_END);
			return i === s.Z_STREAM_END && (o = s.Z_FINISH), o === s.Z_FINISH ? (i = n.inflateEnd(this.strm), this.onEnd(i), this.ended = !0, i === s.Z_OK) : o !== s.Z_SYNC_FLUSH || (this.onEnd(s.Z_OK), _.avail_out = 0, !0)
		}, f.prototype.onData = function(t) {
			this.chunks.push(t)
		}, f.prototype.onEnd = function(t) {
			t === s.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = r.flattenChunks(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg
		}, i.inflate = h
	}, {
		31: 31,
		32: 32,
		34: 34,
		36: 36,
		38: 38,
		40: 40,
		41: 41
	}],
	31: [function(t, e, i) {
		"use strict";
		var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;

		function r(t, e) {
			return Object.prototype.hasOwnProperty.call(t, e)
		}
		i.assign = function(t) {
			for (var e = Array.prototype.slice.call(arguments, 1); e.length;) {
				var i = e.shift();
				if (i) {
					if ("object" != typeof i) throw new TypeError(i + "must be non-object");
					for (var n in i) r(i, n) && (t[n] = i[n])
				}
			}
			return t
		}, i.shrinkBuf = function(t, e) {
			return t.length === e ? t : t.subarray ? t.subarray(0, e) : (t.length = e, t)
		};
		var a = {
			arraySet: function(t, e, i, n, r) {
				if (e.subarray && t.subarray) t.set(e.subarray(i, i + n), r);
				else for (var a = 0; a < n; a++) t[r + a] = e[i + a]
			},
			flattenChunks: function(t) {
				var e, i, n, r, a, s;
				for (n = 0, e = 0, i = t.length; e < i; e++) n += t[e].length;
				for (s = new Uint8Array(n), r = 0, e = 0, i = t.length; e < i; e++) a = t[e], s.set(a, r), r += a.length;
				return s
			}
		},
			s = {
				arraySet: function(t, e, i, n, r) {
					for (var a = 0; a < n; a++) t[r + a] = e[i + a]
				},
				flattenChunks: function(t) {
					return [].concat.apply([], t)
				}
			};
		i.setTyped = function(t) {
			t ? (i.Buf8 = Uint8Array, i.Buf16 = Uint16Array, i.Buf32 = Int32Array, i.assign(i, a)) : (i.Buf8 = Array, i.Buf16 = Array, i.Buf32 = Array, i.assign(i, s))
		}, i.setTyped(n)
	}, {}],
	34: [function(t, e, i) {
		"use strict";
		e.exports = {
			Z_NO_FLUSH: 0,
			Z_SYNC_FLUSH: 2,
			Z_FINISH: 4,
			Z_OK: 0,
			Z_STREAM_END: 1,
			Z_NEED_DICT: 2,
			Z_BUF_ERROR: -5
		}
	}, {}],
	40: [function(t, e, i) {
		"use strict";
		e.exports = {
			2: "need dictionary",
			1: "stream end",
			0: "",
			"-1": "file error",
			"-2": "stream error",
			"-3": "data error",
			"-4": "insufficient memory",
			"-5": "buffer error",
			"-6": "incompatible version"
		}
	}, {}],
	41: [function(t, e, i) {
		"use strict";
		e.exports = function() {
			this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
		}
	}, {}],
	36: [function(t, e, i) {
		"use strict";
		e.exports = function() {
			this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1
		}
	}, {}],
	32: [function(t, e, i) {
		"use strict";
		var n = t(31),
			r = !0,
			a = !0;
		try {
			String.fromCharCode.apply(null, [0])
		} catch (l) {
			r = !1
		}
		try {
			String.fromCharCode.apply(null, new Uint8Array(1))
		} catch (l) {
			a = !1
		}
		for (var s = new n.Buf8(256), o = 0; o < 256; o++) s[o] = o >= 252 ? 6 : o >= 248 ? 5 : o >= 240 ? 4 : o >= 224 ? 3 : o >= 192 ? 2 : 1;

		function u(t, e) {
			if (e < 65537 && (t.subarray && a || !t.subarray && r)) return String.fromCharCode.apply(null, n.shrinkBuf(t, e));
			for (var i = "", s = 0; s < e; s++) i += String.fromCharCode(t[s]);
			return i
		}
		s[254] = s[254] = 1, i.string2buf = function(t) {
			var e, i, r, a, s, o = t.length,
				u = 0;
			for (a = 0; a < o; a++) 55296 == (64512 & (i = t.charCodeAt(a))) && a + 1 < o && 56320 == (64512 & (r = t.charCodeAt(a + 1))) && (i = 65536 + (i - 55296 << 10) + (r - 56320), a++), u += i < 128 ? 1 : i < 2048 ? 2 : i < 65536 ? 3 : 4;
			for (e = new n.Buf8(u), s = 0, a = 0; s < u; a++) 55296 == (64512 & (i = t.charCodeAt(a))) && a + 1 < o && 56320 == (64512 & (r = t.charCodeAt(a + 1))) && (i = 65536 + (i - 55296 << 10) + (r - 56320), a++), i < 128 ? e[s++] = i : i < 2048 ? (e[s++] = 192 | i >>> 6, e[s++] = 128 | 63 & i) : i < 65536 ? (e[s++] = 224 | i >>> 12, e[s++] = 128 | i >>> 6 & 63, e[s++] = 128 | 63 & i) : (e[s++] = 240 | i >>> 18, e[s++] = 128 | i >>> 12 & 63, e[s++] = 128 | i >>> 6 & 63, e[s++] = 128 | 63 & i);
			return e
		}, i.binstring2buf = function(t) {
			for (var e = new n.Buf8(t.length), i = 0, r = e.length; i < r; i++) e[i] = t.charCodeAt(i);
			return e
		}, i.buf2string = function(t, e) {
			var i, n, r, a, o = e || t.length,
				l = new Array(2 * o);
			for (n = 0, i = 0; i < o;) if ((r = t[i++]) < 128) l[n++] = r;
			else if ((a = s[r]) > 4) l[n++] = 65533, i += a - 1;
			else {
				for (r &= 2 === a ? 31 : 3 === a ? 15 : 7; a > 1 && i < o;) r = r << 6 | 63 & t[i++], a--;
				a > 1 ? l[n++] = 65533 : r < 65536 ? l[n++] = r : (r -= 65536, l[n++] = 55296 | r >> 10 & 1023, l[n++] = 56320 | 1023 & r)
			}
			return u(l, n)
		}, i.utf8border = function(t, e) {
			var i;
			for ((e = e || t.length) > t.length && (e = t.length), i = e - 1; i >= 0 && 128 == (192 & t[i]);) i--;
			return i < 0 ? e : 0 === i ? e : i + s[t[i]] > e ? i : e
		}
	}, {
		31: 31
	}],
	38: [function(t, e, i) {
		"use strict";
		var n = t(31),
			r = t(33),
			a = t(35),
			s = t(37),
			o = t(39),
			u = 1,
			l = 2,
			c = 0,
			f = -2,
			h = 1,
			_ = 852,
			d = 592;

		function p(t) {
			return (t >>> 24 & 255) + (t >>> 8 & 65280) + ((65280 & t) << 8) + ((255 & t) << 24)
		}
		function v() {
			this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new n.Buf16(320), this.work = new n.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
		}
		function g(t) {
			var e;
			return t && t.state ? (e = t.state, t.total_in = t.total_out = e.total = 0, t.msg = "", e.wrap && (t.adler = 1 & e.wrap), e.mode = h, e.last = 0, e.havedict = 0, e.dmax = 32768, e.head = null, e.hold = 0, e.bits = 0, e.lencode = e.lendyn = new n.Buf32(_), e.distcode = e.distdyn = new n.Buf32(d), e.sane = 1, e.back = -1, c) : f
		}
		function m(t) {
			var e;
			return t && t.state ? ((e = t.state).wsize = 0, e.whave = 0, e.wnext = 0, g(t)) : f
		}
		function y(t, e) {
			var i, n;
			return t && t.state ? (n = t.state, e < 0 ? (i = 0, e = -e) : (i = 1 + (e >> 4), e < 48 && (e &= 15)), e && (e < 8 || e > 15) ? f : (null !== n.window && n.wbits !== e && (n.window = null), n.wrap = i, n.wbits = e, m(t))) : f
		}
		function b(t, e) {
			var i, n;
			return t ? (n = new v, t.state = n, n.window = null, (i = y(t, e)) !== c && (t.state = null), i) : f
		}
		var k, w, x = !0;

		function A(t) {
			if (x) {
				var e;
				for (k = new n.Buf32(512), w = new n.Buf32(32), e = 0; e < 144;) t.lens[e++] = 8;
				for (; e < 256;) t.lens[e++] = 9;
				for (; e < 280;) t.lens[e++] = 7;
				for (; e < 288;) t.lens[e++] = 8;
				for (o(u, t.lens, 0, 288, k, 0, t.work, {
					bits: 9
				}), e = 0; e < 32;) t.lens[e++] = 5;
				o(l, t.lens, 0, 32, w, 0, t.work, {
					bits: 5
				}), x = !1
			}
			t.lencode = k, t.lenbits = 9, t.distcode = w, t.distbits = 5
		}
		function S(t, e, i, r) {
			var a, s = t.state;
			return null === s.window && (s.wsize = 1 << s.wbits, s.wnext = 0, s.whave = 0, s.window = new n.Buf8(s.wsize)), r >= s.wsize ? (n.arraySet(s.window, e, i - s.wsize, s.wsize, 0), s.wnext = 0, s.whave = s.wsize) : ((a = s.wsize - s.wnext) > r && (a = r), n.arraySet(s.window, e, i - r, a, s.wnext), (r -= a) ? (n.arraySet(s.window, e, i - r, r, 0), s.wnext = r, s.whave = s.wsize) : (s.wnext += a, s.wnext === s.wsize && (s.wnext = 0), s.whave < s.wsize && (s.whave += a))), 0
		}
		i.inflateInit2 = b, i.inflate = function(t, e) {
			var i, _, d, v, g, m, y, b, k, w, x, E, T, C, R, I, L, F, P, N, O, M, B, U, V = 0,
				D = new n.Buf8(4),
				Y = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
			if (!t || !t.state || !t.output || !t.input && 0 !== t.avail_in) return f;
			12 === (i = t.state).mode && (i.mode = 13), g = t.next_out, d = t.output, y = t.avail_out, v = t.next_in, _ = t.input, m = t.avail_in, b = i.hold, k = i.bits, w = m, x = y, M = c;
			t: for (;;) switch (i.mode) {
			case h:
				if (0 === i.wrap) {
					i.mode = 13;
					break
				}
				for (; k < 16;) {
					if (0 === m) break t;
					m--, b += _[v++] << k, k += 8
				}
				if (2 & i.wrap && 35615 === b) {
					i.check = 0, D[0] = 255 & b, D[1] = b >>> 8 & 255, i.check = a(i.check, D, 2, 0), b = 0, k = 0, i.mode = 2;
					break
				}
				if (i.flags = 0, i.head && (i.head.done = !1), !(1 & i.wrap) || (((255 & b) << 8) + (b >> 8)) % 31) {
					t.msg = "incorrect header check", i.mode = 30;
					break
				}
				if (8 != (15 & b)) {
					t.msg = "unknown compression method", i.mode = 30;
					break
				}
				if (k -= 4, O = 8 + (15 & (b >>>= 4)), 0 === i.wbits) i.wbits = O;
				else if (O > i.wbits) {
					t.msg = "invalid window size", i.mode = 30;
					break
				}
				i.dmax = 1 << O, t.adler = i.check = 1, i.mode = 512 & b ? 10 : 12, b = 0, k = 0;
				break;
			case 2:
				for (; k < 16;) {
					if (0 === m) break t;
					m--, b += _[v++] << k, k += 8
				}
				if (i.flags = b, 8 != (255 & i.flags)) {
					t.msg = "unknown compression method", i.mode = 30;
					break
				}
				if (57344 & i.flags) {
					t.msg = "unknown header flags set", i.mode = 30;
					break
				}
				i.head && (i.head.text = b >> 8 & 1), 512 & i.flags && (D[0] = 255 & b, D[1] = b >>> 8 & 255, i.check = a(i.check, D, 2, 0)), b = 0, k = 0, i.mode = 3;
			case 3:
				for (; k < 32;) {
					if (0 === m) break t;
					m--, b += _[v++] << k, k += 8
				}
				i.head && (i.head.time = b), 512 & i.flags && (D[0] = 255 & b, D[1] = b >>> 8 & 255, D[2] = b >>> 16 & 255, D[3] = b >>> 24 & 255, i.check = a(i.check, D, 4, 0)), b = 0, k = 0, i.mode = 4;
			case 4:
				for (; k < 16;) {
					if (0 === m) break t;
					m--, b += _[v++] << k, k += 8
				}
				i.head && (i.head.xflags = 255 & b, i.head.os = b >> 8), 512 & i.flags && (D[0] = 255 & b, D[1] = b >>> 8 & 255, i.check = a(i.check, D, 2, 0)), b = 0, k = 0, i.mode = 5;
			case 5:
				if (1024 & i.flags) {
					for (; k < 16;) {
						if (0 === m) break t;
						m--, b += _[v++] << k, k += 8
					}
					i.length = b, i.head && (i.head.extra_len = b), 512 & i.flags && (D[0] = 255 & b, D[1] = b >>> 8 & 255, i.check = a(i.check, D, 2, 0)), b = 0, k = 0
				} else i.head && (i.head.extra = null);
				i.mode = 6;
			case 6:
				if (1024 & i.flags && ((E = i.length) > m && (E = m), E && (i.head && (O = i.head.extra_len - i.length, i.head.extra || (i.head.extra = new Array(i.head.extra_len)), n.arraySet(i.head.extra, _, v, E, O)), 512 & i.flags && (i.check = a(i.check, _, E, v)), m -= E, v += E, i.length -= E), i.length)) break t;
				i.length = 0, i.mode = 7;
			case 7:
				if (2048 & i.flags) {
					if (0 === m) break t;
					E = 0;
					do {
						O = _[v + E++], i.head && O && i.length < 65536 && (i.head.name += String.fromCharCode(O))
					} while (O && E < m);
					if (512 & i.flags && (i.check = a(i.check, _, E, v)), m -= E, v += E, O) break t
				} else i.head && (i.head.name = null);
				i.length = 0, i.mode = 8;
			case 8:
				if (4096 & i.flags) {
					if (0 === m) break t;
					E = 0;
					do {
						O = _[v + E++], i.head && O && i.length < 65536 && (i.head.comment += String.fromCharCode(O))
					} while (O && E < m);
					if (512 & i.flags && (i.check = a(i.check, _, E, v)), m -= E, v += E, O) break t
				} else i.head && (i.head.comment = null);
				i.mode = 9;
			case 9:
				if (512 & i.flags) {
					for (; k < 16;) {
						if (0 === m) break t;
						m--, b += _[v++] << k, k += 8
					}
					if (b !== (65535 & i.check)) {
						t.msg = "header crc mismatch", i.mode = 30;
						break
					}
					b = 0, k = 0
				}
				i.head && (i.head.hcrc = i.flags >> 9 & 1, i.head.done = !0), t.adler = i.check = 0, i.mode = 12;
				break;
			case 10:
				for (; k < 32;) {
					if (0 === m) break t;
					m--, b += _[v++] << k, k += 8
				}
				t.adler = i.check = p(b), b = 0, k = 0, i.mode = 11;
			case 11:
				if (0 === i.havedict) return t.next_out = g, t.avail_out = y, t.next_in = v, t.avail_in = m, i.hold = b, i.bits = k, 2;
				t.adler = i.check = 1, i.mode = 12;
			case 12:
				if (5 === e || 6 === e) break t;
			case 13:
				if (i.last) {
					b >>>= 7 & k, k -= 7 & k, i.mode = 27;
					break
				}
				for (; k < 3;) {
					if (0 === m) break t;
					m--, b += _[v++] << k, k += 8
				}
				switch (i.last = 1 & b, k -= 1, 3 & (b >>>= 1)) {
				case 0:
					i.mode = 14;
					break;
				case 1:
					if (A(i), i.mode = 20, 6 === e) {
						b >>>= 2, k -= 2;
						break t
					}
					break;
				case 2:
					i.mode = 17;
					break;
				case 3:
					t.msg = "invalid block type", i.mode = 30
				}
				b >>>= 2, k -= 2;
				break;
			case 14:
				for (b >>>= 7 & k, k -= 7 & k; k < 32;) {
					if (0 === m) break t;
					m--, b += _[v++] << k, k += 8
				}
				if ((65535 & b) != (b >>> 16 ^ 65535)) {
					t.msg = "invalid stored block lengths", i.mode = 30;
					break
				}
				if (i.length = 65535 & b, b = 0, k = 0, i.mode = 15, 6 === e) break t;
			case 15:
				i.mode = 16;
			case 16:
				if (E = i.length) {
					if (E > m && (E = m), E > y && (E = y), 0 === E) break t;
					n.arraySet(d, _, v, E, g), m -= E, v += E, y -= E, g += E, i.length -= E;
					break
				}
				i.mode = 12;
				break;
			case 17:
				for (; k < 14;) {
					if (0 === m) break t;
					m--, b += _[v++] << k, k += 8
				}
				if (i.nlen = 257 + (31 & b), b >>>= 5, k -= 5, i.ndist = 1 + (31 & b), b >>>= 5, k -= 5, i.ncode = 4 + (15 & b), b >>>= 4, k -= 4, i.nlen > 286 || i.ndist > 30) {
					t.msg = "too many length or distance symbols", i.mode = 30;
					break
				}
				i.have = 0, i.mode = 18;
			case 18:
				for (; i.have < i.ncode;) {
					for (; k < 3;) {
						if (0 === m) break t;
						m--, b += _[v++] << k, k += 8
					}
					i.lens[Y[i.have++]] = 7 & b, b >>>= 3, k -= 3
				}
				for (; i.have < 19;) i.lens[Y[i.have++]] = 0;
				if (i.lencode = i.lendyn, i.lenbits = 7, B = {
					bits: i.lenbits
				}, M = o(0, i.lens, 0, 19, i.lencode, 0, i.work, B), i.lenbits = B.bits, M) {
					t.msg = "invalid code lengths set", i.mode = 30;
					break
				}
				i.have = 0, i.mode = 19;
			case 19:
				for (; i.have < i.nlen + i.ndist;) {
					for (; I = (V = i.lencode[b & (1 << i.lenbits) - 1]) >>> 16 & 255, L = 65535 & V, !((R = V >>> 24) <= k);) {
						if (0 === m) break t;
						m--, b += _[v++] << k, k += 8
					}
					if (L < 16) b >>>= R, k -= R, i.lens[i.have++] = L;
					else {
						if (16 === L) {
							for (U = R + 2; k < U;) {
								if (0 === m) break t;
								m--, b += _[v++] << k, k += 8
							}
							if (b >>>= R, k -= R, 0 === i.have) {
								t.msg = "invalid bit length repeat", i.mode = 30;
								break
							}
							O = i.lens[i.have - 1], E = 3 + (3 & b), b >>>= 2, k -= 2
						} else if (17 === L) {
							for (U = R + 3; k < U;) {
								if (0 === m) break t;
								m--, b += _[v++] << k, k += 8
							}
							k -= R, O = 0, E = 3 + (7 & (b >>>= R)), b >>>= 3, k -= 3
						} else {
							for (U = R + 7; k < U;) {
								if (0 === m) break t;
								m--, b += _[v++] << k, k += 8
							}
							k -= R, O = 0, E = 11 + (127 & (b >>>= R)), b >>>= 7, k -= 7
						}
						if (i.have + E > i.nlen + i.ndist) {
							t.msg = "invalid bit length repeat", i.mode = 30;
							break
						}
						for (; E--;) i.lens[i.have++] = O
					}
				}
				if (30 === i.mode) break;
				if (0 === i.lens[256]) {
					t.msg = "invalid code -- missing end-of-block", i.mode = 30;
					break
				}
				if (i.lenbits = 9, B = {
					bits: i.lenbits
				}, M = o(u, i.lens, 0, i.nlen, i.lencode, 0, i.work, B), i.lenbits = B.bits, M) {
					t.msg = "invalid literal/lengths set", i.mode = 30;
					break
				}
				if (i.distbits = 6, i.distcode = i.distdyn, B = {
					bits: i.distbits
				}, M = o(l, i.lens, i.nlen, i.ndist, i.distcode, 0, i.work, B), i.distbits = B.bits, M) {
					t.msg = "invalid distances set", i.mode = 30;
					break
				}
				if (i.mode = 20, 6 === e) break t;
			case 20:
				i.mode = 21;
			case 21:
				if (m >= 6 && y >= 258) {
					t.next_out = g, t.avail_out = y, t.next_in = v, t.avail_in = m, i.hold = b, i.bits = k, s(t, x), g = t.next_out, d = t.output, y = t.avail_out, v = t.next_in, _ = t.input, m = t.avail_in, b = i.hold, k = i.bits, 12 === i.mode && (i.back = -1);
					break
				}
				for (i.back = 0; I = (V = i.lencode[b & (1 << i.lenbits) - 1]) >>> 16 & 255, L = 65535 & V, !((R = V >>> 24) <= k);) {
					if (0 === m) break t;
					m--, b += _[v++] << k, k += 8
				}
				if (I && 0 == (240 & I)) {
					for (F = R, P = I, N = L; I = (V = i.lencode[N + ((b & (1 << F + P) - 1) >> F)]) >>> 16 & 255, L = 65535 & V, !(F + (R = V >>> 24) <= k);) {
						if (0 === m) break t;
						m--, b += _[v++] << k, k += 8
					}
					b >>>= F, k -= F, i.back += F
				}
				if (b >>>= R, k -= R, i.back += R, i.length = L, 0 === I) {
					i.mode = 26;
					break
				}
				if (32 & I) {
					i.back = -1, i.mode = 12;
					break
				}
				if (64 & I) {
					t.msg = "invalid literal/length code", i.mode = 30;
					break
				}
				i.extra = 15 & I, i.mode = 22;
			case 22:
				if (i.extra) {
					for (U = i.extra; k < U;) {
						if (0 === m) break t;
						m--, b += _[v++] << k, k += 8
					}
					i.length += b & (1 << i.extra) - 1, b >>>= i.extra, k -= i.extra, i.back += i.extra
				}
				i.was = i.length, i.mode = 23;
			case 23:
				for (; I = (V = i.distcode[b & (1 << i.distbits) - 1]) >>> 16 & 255, L = 65535 & V, !((R = V >>> 24) <= k);) {
					if (0 === m) break t;
					m--, b += _[v++] << k, k += 8
				}
				if (0 == (240 & I)) {
					for (F = R, P = I, N = L; I = (V = i.distcode[N + ((b & (1 << F + P) - 1) >> F)]) >>> 16 & 255, L = 65535 & V, !(F + (R = V >>> 24) <= k);) {
						if (0 === m) break t;
						m--, b += _[v++] << k, k += 8
					}
					b >>>= F, k -= F, i.back += F
				}
				if (b >>>= R, k -= R, i.back += R, 64 & I) {
					t.msg = "invalid distance code", i.mode = 30;
					break
				}
				i.offset = L, i.extra = 15 & I, i.mode = 24;
			case 24:
				if (i.extra) {
					for (U = i.extra; k < U;) {
						if (0 === m) break t;
						m--, b += _[v++] << k, k += 8
					}
					i.offset += b & (1 << i.extra) - 1, b >>>= i.extra, k -= i.extra, i.back += i.extra
				}
				if (i.offset > i.dmax) {
					t.msg = "invalid distance too far back", i.mode = 30;
					break
				}
				i.mode = 25;
			case 25:
				if (0 === y) break t;
				if (E = x - y, i.offset > E) {
					if ((E = i.offset - E) > i.whave && i.sane) {
						t.msg = "invalid distance too far back", i.mode = 30;
						break
					}
					E > i.wnext ? (E -= i.wnext, T = i.wsize - E) : T = i.wnext - E, E > i.length && (E = i.length), C = i.window
				} else C = d, T = g - i.offset, E = i.length;
				E > y && (E = y), y -= E, i.length -= E;
				do {
					d[g++] = C[T++]
				} while (--E);
				0 === i.length && (i.mode = 21);
				break;
			case 26:
				if (0 === y) break t;
				d[g++] = i.length, y--, i.mode = 21;
				break;
			case 27:
				if (i.wrap) {
					for (; k < 32;) {
						if (0 === m) break t;
						m--, b |= _[v++] << k, k += 8
					}
					if (x -= y, t.total_out += x, i.total += x, x && (t.adler = i.check = i.flags ? a(i.check, d, x, g - x) : r(i.check, d, x, g - x)), x = y, (i.flags ? b : p(b)) !== i.check) {
						t.msg = "incorrect data check", i.mode = 30;
						break
					}
					b = 0, k = 0
				}
				i.mode = 28;
			case 28:
				if (i.wrap && i.flags) {
					for (; k < 32;) {
						if (0 === m) break t;
						m--, b += _[v++] << k, k += 8
					}
					if (b !== (4294967295 & i.total)) {
						t.msg = "incorrect length check", i.mode = 30;
						break
					}
					b = 0, k = 0
				}
				i.mode = 29;
			case 29:
				M = 1;
				break t;
			case 30:
				M = -3;
				break t;
			case 31:
				return -4;
			case 32:
			default:
				return f
			}
			return t.next_out = g,
			t.avail_out = y,
			t.next_in = v,
			t.avail_in = m,
			i.hold = b,
			i.bits = k,
			(i.wsize || x !== t.avail_out && i.mode < 30 && (i.mode < 27 || 4 !== e)) && S(t, t.output, t.next_out, x - t.avail_out) ? (i.mode = 31, -4) : (w -= t.avail_in, x -= t.avail_out, t.total_in += w, t.total_out += x, i.total += x, i.wrap && x && (t.adler = i.check = i.flags ? a(i.check, d, x, t.next_out - x) : r(i.check, d, x, t.next_out - x)), t.data_type = i.bits + (i.last ? 64 : 0) + (12 === i.mode ? 128 : 0) + (20 === i.mode || 15 === i.mode ? 256 : 0), (0 === w && 0 === x || 4 === e) && M === c && (M = -5), M)
		}, i.inflateEnd = function(t) {
			if (!t || !t.state) return f;
			var e = t.state;
			return e.window && (e.window = null), t.state = null, c
		}, i.inflateGetHeader = function(t, e) {
			var i;
			return t && t.state ? 0 == (2 & (i = t.state).wrap) ? f : (i.head = e, e.done = !1, c) : f
		}, i.inflateSetDictionary = function(t, e) {
			var i, n = e.length;
			return t && t.state ? 0 !== (i = t.state).wrap && 11 !== i.mode ? f : 11 === i.mode && r(1, e, n, 0) !== i.check ? -3 : S(t, e, n, n) ? (i.mode = 31, -4) : (i.havedict = 1, c) : f
		}
	}, {
		31: 31,
		33: 33,
		35: 35,
		37: 37,
		39: 39
	}],
	33: [function(t, e, i) {
		"use strict";
		e.exports = function(t, e, i, n) {
			for (var r = 65535 & t | 0, a = t >>> 16 & 65535 | 0, s = 0; 0 !== i;) {
				i -= s = i > 2e3 ? 2e3 : i;
				do {
					a = a + (r = r + e[n++] | 0) | 0
				} while (--s);
				r %= 65521, a %= 65521
			}
			return r | a << 16 | 0
		}
	}, {}],
	35: [function(t, e, i) {
		"use strict";
		var n = function() {
				for (var t, e = [], i = 0; i < 256; i++) {
					t = i;
					for (var n = 0; n < 8; n++) t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
					e[i] = t
				}
				return e
			}();
		e.exports = function(t, e, i, r) {
			var a = n,
				s = r + i;
			t ^= -1;
			for (var o = r; o < s; o++) t = t >>> 8 ^ a[255 & (t ^ e[o])];
			return -1 ^ t
		}
	}, {}],
	37: [function(t, e, i) {
		"use strict";
		e.exports = function(t, e) {
			var i, n, r, a, s, o, u, l, c, f, h, _, d, p, v, g, m, y, b, k, w, x, A, S, E;
			i = t.state, n = t.next_in, S = t.input, r = n + (t.avail_in - 5), a = t.next_out, E = t.output, s = a - (e - t.avail_out), o = a + (t.avail_out - 257), u = i.dmax, l = i.wsize, c = i.whave, f = i.wnext, h = i.window, _ = i.hold, d = i.bits, p = i.lencode, v = i.distcode, g = (1 << i.lenbits) - 1, m = (1 << i.distbits) - 1;
			t: do {
				d < 15 && (_ += S[n++] << d, d += 8, _ += S[n++] << d, d += 8), y = p[_ & g];
				e: for (;;) {
					if (_ >>>= b = y >>> 24, d -= b, 0 == (b = y >>> 16 & 255)) E[a++] = 65535 & y;
					else {
						if (!(16 & b)) {
							if (0 == (64 & b)) {
								y = p[(65535 & y) + (_ & (1 << b) - 1)];
								continue e
							}
							if (32 & b) {
								i.mode = 12;
								break t
							}
							t.msg = "invalid literal/length code", i.mode = 30;
							break t
						}
						k = 65535 & y, (b &= 15) && (d < b && (_ += S[n++] << d, d += 8), k += _ & (1 << b) - 1, _ >>>= b, d -= b), d < 15 && (_ += S[n++] << d, d += 8, _ += S[n++] << d, d += 8), y = v[_ & m];
						i: for (;;) {
							if (_ >>>= b = y >>> 24, d -= b, !(16 & (b = y >>> 16 & 255))) {
								if (0 == (64 & b)) {
									y = v[(65535 & y) + (_ & (1 << b) - 1)];
									continue i
								}
								t.msg = "invalid distance code", i.mode = 30;
								break t
							}
							if (w = 65535 & y, d < (b &= 15) && (_ += S[n++] << d, (d += 8) < b && (_ += S[n++] << d, d += 8)), (w += _ & (1 << b) - 1) > u) {
								t.msg = "invalid distance too far back", i.mode = 30;
								break t
							}
							if (_ >>>= b, d -= b, w > (b = a - s)) {
								if ((b = w - b) > c && i.sane) {
									t.msg = "invalid distance too far back", i.mode = 30;
									break t
								}
								if (x = 0, A = h, 0 === f) {
									if (x += l - b, b < k) {
										k -= b;
										do {
											E[a++] = h[x++]
										} while (--b);
										x = a - w, A = E
									}
								} else if (f < b) {
									if (x += l + f - b, (b -= f) < k) {
										k -= b;
										do {
											E[a++] = h[x++]
										} while (--b);
										if (x = 0, f < k) {
											k -= b = f;
											do {
												E[a++] = h[x++]
											} while (--b);
											x = a - w, A = E
										}
									}
								} else if (x += f - b, b < k) {
									k -= b;
									do {
										E[a++] = h[x++]
									} while (--b);
									x = a - w, A = E
								}
								for (; k > 2;) E[a++] = A[x++], E[a++] = A[x++], E[a++] = A[x++], k -= 3;
								k && (E[a++] = A[x++], k > 1 && (E[a++] = A[x++]))
							} else {
								x = a - w;
								do {
									E[a++] = E[x++], E[a++] = E[x++], E[a++] = E[x++], k -= 3
								} while (k > 2);
								k && (E[a++] = E[x++], k > 1 && (E[a++] = E[x++]))
							}
							break
						}
					}
					break
				}
			}
			while (n < r && a < o);
			n -= k = d >> 3, _ &= (1 << (d -= k << 3)) - 1, t.next_in = n, t.next_out = a, t.avail_in = n < r ? r - n + 5 : 5 - (n - r), t.avail_out = a < o ? o - a + 257 : 257 - (a - o), i.hold = _, i.bits = d
		}
	}, {}],
	39: [function(t, e, i) {
		"use strict";
		var n = t(31),
			r = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
			a = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
			s = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
			o = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
		e.exports = function(t, e, i, u, l, c, f, h) {
			var _, d, p, v, g, m, y, b, k, w = h.bits,
				x = 0,
				A = 0,
				S = 0,
				E = 0,
				T = 0,
				C = 0,
				R = 0,
				I = 0,
				L = 0,
				F = 0,
				P = null,
				N = 0,
				O = new n.Buf16(16),
				M = new n.Buf16(16),
				B = null,
				U = 0;
			for (x = 0; x <= 15; x++) O[x] = 0;
			for (A = 0; A < u; A++) O[e[i + A]]++;
			for (T = w, E = 15; E >= 1 && 0 === O[E]; E--);
			if (T > E && (T = E), 0 === E) return l[c++] = 20971520, l[c++] = 20971520, h.bits = 1, 0;
			for (S = 1; S < E && 0 === O[S]; S++);
			for (T < S && (T = S), I = 1, x = 1; x <= 15; x++) if (I <<= 1, (I -= O[x]) < 0) return -1;
			if (I > 0 && (0 === t || 1 !== E)) return -1;
			for (M[1] = 0, x = 1; x < 15; x++) M[x + 1] = M[x] + O[x];
			for (A = 0; A < u; A++) 0 !== e[i + A] && (f[M[e[i + A]]++] = A);
			if (0 === t ? (P = B = f, m = 19) : 1 === t ? (P = r, N -= 257, B = a, U -= 257, m = 256) : (P = s, B = o, m = -1), F = 0, A = 0, x = S, g = c, C = T, R = 0, p = -1, v = (L = 1 << T) - 1, 1 === t && L > 852 || 2 === t && L > 592) return 1;
			for (;;) {
				y = x - R, f[A] < m ? (b = 0, k = f[A]) : f[A] > m ? (b = B[U + f[A]], k = P[N + f[A]]) : (b = 96, k = 0), _ = 1 << x - R, S = d = 1 << C;
				do {
					l[g + (F >> R) + (d -= _)] = y << 24 | b << 16 | k | 0
				} while (0 !== d);
				for (_ = 1 << x - 1; F & _;) _ >>= 1;
				if (0 !== _ ? (F &= _ - 1, F += _) : F = 0, A++, 0 == --O[x]) {
					if (x === E) break;
					x = e[i + f[A]]
				}
				if (x > T && (F & v) !== p) {
					for (0 === R && (R = T), g += S, I = 1 << (C = x - R); C + R < E && !((I -= O[C + R]) <= 0);) C++, I <<= 1;
					if (L += 1 << C, 1 === t && L > 852 || 2 === t && L > 592) return 1;
					l[p = F & v] = T << 24 | C << 16 | g - c | 0
				}
			}
			return 0 !== F && (l[g + F] = x - R << 24 | 64 << 16 | 0), h.bits = T, 0
		}
	}, {
		31: 31
	}],
	42: [function(t, e, i) {
		var n, r, a = e.exports = {};

		function s() {
			throw new Error("setTimeout has not been defined")
		}
		function o() {
			throw new Error("clearTimeout has not been defined")
		}
		function u(t) {
			if (n === setTimeout) return setTimeout(t, 0);
			if ((n === s || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
			try {
				return n(t, 0)
			} catch (e) {
				try {
					return n.call(null, t, 0)
				} catch (e) {
					return n.call(this, t, 0)
				}
			}
		}!
		function() {
			try {
				n = "function" == typeof setTimeout ? setTimeout : s
			} catch (t) {
				n = s
			}
			try {
				r = "function" == typeof clearTimeout ? clearTimeout : o
			} catch (t) {
				r = o
			}
		}();
		var l, c = [],
			f = !1,
			h = -1;

		function _() {
			f && l && (f = !1, l.length ? c = l.concat(c) : h = -1, c.length && d())
		}
		function d() {
			if (!f) {
				var t = u(_);
				f = !0;
				for (var e = c.length; e;) {
					for (l = c, c = []; ++h < e;) l && l[h].run();
					h = -1, e = c.length
				}
				l = null, f = !1, function(t) {
					if (r === clearTimeout) return clearTimeout(t);
					if ((r === o || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
					try {
						r(t)
					} catch (e) {
						try {
							return r.call(null, t)
						} catch (e) {
							return r.call(this, t)
						}
					}
				}(t)
			}
		}
		function p(t, e) {
			this.fun = t, this.array = e
		}
		function v() {}
		a.nextTick = function(t) {
			var e = new Array(arguments.length - 1);
			if (arguments.length > 1) for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
			c.push(new p(t, e)), 1 !== c.length || f || u(d)
		}, p.prototype.run = function() {
			this.fun.apply(null, this.array)
		}, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = v, a.addListener = v, a.once = v, a.off = v, a.removeListener = v, a.removeAllListeners = v, a.emit = v, a.prependListener = v, a.prependOnceListener = v, a.listeners = function(t) {
			return []
		}, a.binding = function(t) {
			throw new Error("process.binding is not supported")
		}, a.cwd = function() {
			return "/"
		}, a.chdir = function(t) {
			throw new Error("process.chdir is not supported")
		}, a.umask = function() {
			return 0
		}
	}, {}],
	44: [function(t, e, i) {
		!
		function(t) {
			"use strict";
			var i, n = Object.prototype,
				r = n.hasOwnProperty,
				a = "function" == typeof Symbol ? Symbol : {},
				s = a.iterator || "@@iterator",
				o = a.asyncIterator || "@@asyncIterator",
				u = a.toStringTag || "@@toStringTag",
				l = "object" == typeof e,
				c = t.regeneratorRuntime;
			if (c) l && (e.exports = c);
			else {
				(c = t.regeneratorRuntime = l ? e.exports : {}).wrap = b;
				var f = "suspendedStart",
					h = "suspendedYield",
					_ = "executing",
					d = "completed",
					p = {},
					v = {};
				v[s] = function() {
					return this
				};
				var g = Object.getPrototypeOf,
					m = g && g(g(L([])));
				m && m !== n && r.call(m, s) && (v = m);
				var y = A.prototype = w.prototype = Object.create(v);
				x.prototype = y.constructor = A, A.constructor = x, A[u] = x.displayName = "GeneratorFunction", c.isGeneratorFunction = function(t) {
					var e = "function" == typeof t && t.constructor;
					return !!e && (e === x || "GeneratorFunction" === (e.displayName || e.name))
				}, c.mark = function(t) {
					return Object.setPrototypeOf ? Object.setPrototypeOf(t, A) : (t.__proto__ = A, u in t || (t[u] = "GeneratorFunction")), t.prototype = Object.create(y), t
				}, c.awrap = function(t) {
					return {
						__await: t
					}
				}, S(E.prototype), E.prototype[o] = function() {
					return this
				}, c.AsyncIterator = E, c.async = function(t, e, i, n) {
					var r = new E(b(t, e, i, n));
					return c.isGeneratorFunction(e) ? r : r.next().then(function(t) {
						return t.done ? t.value : r.next()
					})
				}, S(y), y[u] = "Generator", y[s] = function() {
					return this
				}, y.toString = function() {
					return "[object Generator]"
				}, c.keys = function(t) {
					var e = [];
					for (var i in t) e.push(i);
					return e.reverse(), function i() {
						for (; e.length;) {
							var n = e.pop();
							if (n in t) return i.value = n, i.done = !1, i
						}
						return i.done = !0, i
					}
				}, c.values = L, I.prototype = {
					constructor: I,
					reset: function(t) {
						if (this.prev = 0, this.next = 0, this.sent = this._sent = i, this.done = !1, this.delegate = null, this.method = "next", this.arg = i, this.tryEntries.forEach(R), !t) for (var e in this)"t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = i)
					},
					stop: function() {
						this.done = !0;
						var t = this.tryEntries[0].completion;
						if ("throw" === t.type) throw t.arg;
						return this.rval
					},
					dispatchException: function(t) {
						if (this.done) throw t;
						var e = this;

						function n(n, r) {
							return o.type = "throw", o.arg = t, e.next = n, r && (e.method = "next", e.arg = i), !! r
						}
						for (var a = this.tryEntries.length - 1; a >= 0; --a) {
							var s = this.tryEntries[a],
								o = s.completion;
							if ("root" === s.tryLoc) return n("end");
							if (s.tryLoc <= this.prev) {
								var u = r.call(s, "catchLoc"),
									l = r.call(s, "finallyLoc");
								if (u && l) {
									if (this.prev < s.catchLoc) return n(s.catchLoc, !0);
									if (this.prev < s.finallyLoc) return n(s.finallyLoc)
								} else if (u) {
									if (this.prev < s.catchLoc) return n(s.catchLoc, !0)
								} else {
									if (!l) throw new Error("try statement without catch or finally");
									if (this.prev < s.finallyLoc) return n(s.finallyLoc)
								}
							}
						}
					},
					abrupt: function(t, e) {
						for (var i = this.tryEntries.length - 1; i >= 0; --i) {
							var n = this.tryEntries[i];
							if (n.tryLoc <= this.prev && r.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
								var a = n;
								break
							}
						}
						a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
						var s = a ? a.completion : {};
						return s.type = t, s.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, p) : this.complete(s)
					},
					complete: function(t, e) {
						if ("throw" === t.type) throw t.arg;
						return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), p
					},
					finish: function(t) {
						for (var e = this.tryEntries.length - 1; e >= 0; --e) {
							var i = this.tryEntries[e];
							if (i.finallyLoc === t) return this.complete(i.completion, i.afterLoc), R(i), p
						}
					},
					catch: function(t) {
						for (var e = this.tryEntries.length - 1; e >= 0; --e) {
							var i = this.tryEntries[e];
							if (i.tryLoc === t) {
								var n = i.completion;
								if ("throw" === n.type) {
									var r = n.arg;
									R(i)
								}
								return r
							}
						}
						throw new Error("illegal catch attempt")
					},
					delegateYield: function(t, e, n) {
						return this.delegate = {
							iterator: L(t),
							resultName: e,
							nextLoc: n
						}, "next" === this.method && (this.arg = i), p
					}
				}
			}
			function b(t, e, i, n) {
				var r = e && e.prototype instanceof w ? e : w,
					a = Object.create(r.prototype),
					s = new I(n || []);
				return a._invoke = function(t, e, i) {
					var n = f;
					return function(r, a) {
						if (n === _) throw new Error("Generator is already running");
						if (n === d) {
							if ("throw" === r) throw a;
							return F()
						}
						for (i.method = r, i.arg = a;;) {
							var s = i.delegate;
							if (s) {
								var o = T(s, i);
								if (o) {
									if (o === p) continue;
									return o
								}
							}
							if ("next" === i.method) i.sent = i._sent = i.arg;
							else if ("throw" === i.method) {
								if (n === f) throw n = d, i.arg;
								i.dispatchException(i.arg)
							} else "return" === i.method && i.abrupt("return", i.arg);
							n = _;
							var u = k(t, e, i);
							if ("normal" === u.type) {
								if (n = i.done ? d : h, u.arg === p) continue;
								return {
									value: u.arg,
									done: i.done
								}
							}
							"throw" === u.type && (n = d, i.method = "throw", i.arg = u.arg)
						}
					}
				}(t, i, s), a
			}
			function k(t, e, i) {
				try {
					return {
						type: "normal",
						arg: t.call(e, i)
					}
				} catch (n) {
					return {
						type: "throw",
						arg: n
					}
				}
			}
			function w() {}
			function x() {}
			function A() {}
			function S(t) {
				["next", "throw", "return"].forEach(function(e) {
					t[e] = function(t) {
						return this._invoke(e, t)
					}
				})
			}
			function E(t) {
				var e;
				this._invoke = function(i, n) {
					function a() {
						return new Promise(function(e, a) {
							!
							function e(i, n, a, s) {
								var o = k(t[i], t, n);
								if ("throw" !== o.type) {
									var u = o.arg,
										l = u.value;
									return l && "object" == typeof l && r.call(l, "__await") ? Promise.resolve(l.__await).then(function(t) {
										e("next", t, a, s)
									}, function(t) {
										e("throw", t, a, s)
									}) : Promise.resolve(l).then(function(t) {
										u.value = t, a(u)
									}, function(t) {
										return e("throw", t, a, s)
									})
								}
								s(o.arg)
							}(i, n, e, a)
						})
					}
					return e = e ? e.then(a, a) : a()
				}
			}
			function T(t, e) {
				var n = t.iterator[e.method];
				if (n === i) {
					if (e.delegate = null, "throw" === e.method) {
						if (t.iterator.
						return &&(e.method = "return", e.arg = i, T(t, e), "throw" === e.method)) return p;
						e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
					}
					return p
				}
				var r = k(n, t.iterator, e.arg);
				if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, p;
				var a = r.arg;
				return a ? a.done ? (e[t.resultName] = a.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = i), e.delegate = null, p) : a : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, p)
			}
			function C(t) {
				var e = {
					tryLoc: t[0]
				};
				1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
			}
			function R(t) {
				var e = t.completion || {};
				e.type = "normal", delete e.arg, t.completion = e
			}
			function I(t) {
				this.tryEntries = [{
					tryLoc: "root"
				}], t.forEach(C, this), this.reset(!0)
			}
			function L(t) {
				if (t) {
					var e = t[s];
					if (e) return e.call(t);
					if ("function" == typeof t.next) return t;
					if (!isNaN(t.length)) {
						var n = -1,
							a = function e() {
								for (; ++n < t.length;) if (r.call(t, n)) return e.value = t[n], e.done = !1, e;
								return e.value = i, e.done = !0, e
							};
						return a.next = a
					}
				}
				return {
					next: F
				}
			}
			function F() {
				return {
					value: i,
					done: !0
				}
			}
		}(function() {
			return this || "object" == typeof self && self
		}() || Function("return this")())
	}, {}],
	45: [function(t, e, i) {
		!
		function() {
			"use strict";
			var t = {
				not_string: /[^s]/,
				not_bool: /[^t]/,
				not_type: /[^T]/,
				not_primitive: /[^v]/,
				number: /[diefg]/,
				numeric_arg: /[bcdiefguxX]/,
				json: /[j]/,
				not_json: /[^j]/,
				text: /^[^\x25]+/,
				modulo: /^\x25{2}/,
				placeholder: /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
				key: /^([a-z_][a-z_\d]*)/i,
				key_access: /^\.([a-z_][a-z_\d]*)/i,
				index_access: /^\[(\d+)\]/,
				sign: /^[\+\-]/
			};

			function e(i) {
				return function(i, n) {
					var r, a, s, o, u, l, c, f, h, _ = 1,
						d = i.length,
						p = "";
					for (a = 0; a < d; a++) if ("string" == typeof i[a]) p += i[a];
					else if (Array.isArray(i[a])) {
						if ((o = i[a])[2]) for (r = n[_], s = 0; s < o[2].length; s++) {
							if (!r.hasOwnProperty(o[2][s])) throw new Error(e('[sprintf] property "%s" does not exist', o[2][s]));
							r = r[o[2][s]]
						} else r = o[1] ? n[o[1]] : n[_++];
						if (t.not_type.test(o[8]) && t.not_primitive.test(o[8]) && r instanceof Function && (r = r()), t.numeric_arg.test(o[8]) && "number" != typeof r && isNaN(r)) throw new TypeError(e("[sprintf] expecting number but found %T", r));
						switch (t.number.test(o[8]) && (f = r >= 0), o[8]) {
						case "b":
							r = parseInt(r, 10).toString(2);
							break;
						case "c":
							r = String.fromCharCode(parseInt(r, 10));
							break;
						case "d":
						case "i":
							r = parseInt(r, 10);
							break;
						case "j":
							r = JSON.stringify(r, null, o[6] ? parseInt(o[6]) : 0);
							break;
						case "e":
							r = o[7] ? parseFloat(r).toExponential(o[7]) : parseFloat(r).toExponential();
							break;
						case "f":
							r = o[7] ? parseFloat(r).toFixed(o[7]) : parseFloat(r);
							break;
						case "g":
							r = o[7] ? String(Number(r.toPrecision(o[7]))) : parseFloat(r);
							break;
						case "o":
							r = (parseInt(r, 10) >>> 0).toString(8);
							break;
						case "s":
							r = String(r), r = o[7] ? r.substring(0, o[7]) : r;
							break;
						case "t":
							r = String( !! r), r = o[7] ? r.substring(0, o[7]) : r;
							break;
						case "T":
							r = Object.prototype.toString.call(r).slice(8, -1).toLowerCase(), r = o[7] ? r.substring(0, o[7]) : r;
							break;
						case "u":
							r = parseInt(r, 10) >>> 0;
							break;
						case "v":
							r = r.valueOf(), r = o[7] ? r.substring(0, o[7]) : r;
							break;
						case "x":
							r = (parseInt(r, 10) >>> 0).toString(16);
							break;
						case "X":
							r = (parseInt(r, 10) >>> 0).toString(16).toUpperCase()
						}
						t.json.test(o[8]) ? p += r : (!t.number.test(o[8]) || f && !o[3] ? h = "" : (h = f ? "+" : "-", r = r.toString().replace(t.sign, "")), l = o[4] ? "0" === o[4] ? "0" : o[4].charAt(1) : " ", c = o[6] - (h + r).length, u = o[6] && c > 0 ? l.repeat(c) : "", p += o[5] ? h + r + u : "0" === l ? h + u + r : u + h + r)
					}
					return p
				}(function(e) {
					if (r[e]) return r[e];
					for (var i, n = e, a = [], s = 0; n;) {
						if (null !== (i = t.text.exec(n))) a.push(i[0]);
						else if (null !== (i = t.modulo.exec(n))) a.push("%");
						else {
							if (null === (i = t.placeholder.exec(n))) throw new SyntaxError("[sprintf] unexpected placeholder");
							if (i[2]) {
								s |= 1;
								var o = [],
									u = i[2],
									l = [];
								if (null === (l = t.key.exec(u))) throw new SyntaxError("[sprintf] failed to parse named argument key");
								for (o.push(l[1]);
								"" !== (u = u.substring(l[0].length));) if (null !== (l = t.key_access.exec(u))) o.push(l[1]);
								else {
									if (null === (l = t.index_access.exec(u))) throw new SyntaxError("[sprintf] failed to parse named argument key");
									o.push(l[1])
								}
								i[2] = o
							} else s |= 2;
							if (3 === s) throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");
							a.push(i)
						}
						n = n.substring(i[0].length)
					}
					return r[e] = a
				}(i), arguments)
			}
			function n(t, i) {
				return e.apply(null, [t].concat(i || []))
			}
			var r = Object.create(null);
			void 0 !== i && (i.sprintf = e), "undefined" != typeof window && (window.sprintf = e, window.vsprintf = n, "function" == typeof define && define.amd && define(function() {
				return {
					sprintf: e,
					vsprintf: n
				}
			}))
		}()
	}, {}],
	46: [function(t, e, i) {
		function n(t) {
			var e = this;
			e._t = e.transform, e.a = e.d = 1, e.b = e.c = e.e = e.f = 0, t && (e.context = t).setTransform(1, 0, 0, 1, 0, 0)
		}
		n.from = function(t, e, i, r, a, s, o) {
			var u = new n(o);
			if ("number" == typeof t) u.setTransform(t, e, i, r, a, s);
			else {
				if ("boolean" == typeof t.is2D && !t.is2D) throw "Cannot use 3D DOMMatrix.";
				e && (u.context = e), u.multiply(t)
			}
			return u
		}, n.prototype = {
			reset: function() {
				return this.setTransform(1, 0, 0, 1, 0, 0)
			},
			rotate: function(t) {
				var e = Math.cos(t),
					i = Math.sin(t);
				return this._t(e, i, -i, e, 0, 0)
			},
			rotateFromVector: function(t, e) {
				return this.rotate("number" == typeof t ? Math.atan2(e, t) : Math.atan2(t.y, t.x))
			},
			scale: function(t, e) {
				return this._t(t, 0, 0, e, 0, 0)
			},
			shear: function(t, e) {
				return this._t(1, e, t, 1, 0, 0)
			},
			skew: function(t, e) {
				return this.shear(Math.tan(t), Math.tan(e))
			},
			setTransform: function(t, e, i, n, r, a) {
				var s = this;
				return s.a = t, s.b = e, s.c = i, s.d = n, s.e = r, s.f = a, s._x()
			},
			translate: function(t, e) {
				return this._t(1, 0, 0, 1, t, e)
			},
			transform: function(t, e, i, n, r, a) {
				var s = this,
					o = s.a,
					u = s.b,
					l = s.c,
					c = s.d,
					f = s.e,
					h = s.f;
				return s.a = o * t + l * e, s.b = u * t + c * e, s.c = o * i + l * n, s.d = u * i + c * n, s.e = o * r + l * a + f, s.f = u * r + c * a + h, s._x()
			},
			multiply: function(t) {
				return this._t(t.a, t.b, t.c, t.d, t.e, t.f)
			},
			inverse: function(t) {
				var e = this,
					i = new n(t ? e.context : null),
					r = e.determinant();
				if (0 === r) throw "Matrix not invertible.";
				return i.a = e.d / r, i.b = -e.b / r, i.c = -e.c / r, i.d = e.a / r, i.e = (e.c * e.f - e.d * e.e) / r, i.f = -(e.a * e.f - e.b * e.e) / r, i
			},
			decompose: function() {
				var t, e, i = this,
					n = i.a,
					r = i.b,
					a = i.c,
					s = i.d,
					o = Math.acos,
					u = Math.atan,
					l = Math.sqrt,
					c = Math.PI,
					f = {
						x: i.e,
						y: i.f
					},
					h = 0,
					_ = {
						x: 1,
						y: 1
					},
					d = {
						x: 0,
						y: 0
					},
					p = n * s - r * a;
				return n || r ? (t = l(n * n + r * r), h = r > 0 ? o(n / t) : -o(n / t), _ = {
					x: t,
					y: p / t
				}, d.x = u((n * a + r * s) / (t * t))) : a || s ? (e = l(a * a + s * s), h = .5 * c - (s > 0 ? o(-a / e) : -o(a / e)), _ = {
					x: p / e,
					y: e
				}, d.y = u((n * a + r * s) / (e * e))) : _ = {
					x: 0,
					y: 0
				}, {
					translate: f,
					rotation: h,
					scale: _,
					skew: d
				}
			},
			determinant: function() {
				return this.a * this.d - this.b * this.c
			},
			applyToPoint: function(t, e) {
				var i = this;
				return {
					x: t * i.a + e * i.c + i.e,
					y: t * i.b + e * i.d + i.f
				}
			},
			applyToContext: function(t) {
				var e = this;
				return t.setTransform(e.a, e.b, e.c, e.d, e.e, e.f), e
			},
			isIdentity: function() {
				var t = this;
				return !(1 !== t.a || t.b || t.c || 1 !== t.d || t.e || t.f)
			},
			isInvertible: function() {
				return !this._q(this.determinant(), 0)
			},
			isValid: function() {
				return !(this.a * this.d)
			},
			isEqual: function(t) {
				var e = this,
					i = e._q;
				return i(e.a, t.a) && i(e.b, t.b) && i(e.c, t.c) && i(e.d, t.d) && i(e.e, t.e) && i(e.f, t.f)
			},
			clone: function(t) {
				return new n(t ? null : this.context).multiply(this)
			},
			toCSS: function() {
				return "matrix(" + this.toArray() + ")"
			},
			toCSS3D: function() {
				var t = this;
				return "matrix3d(" + t.a + "," + t.b + ",0,0," + t.c + "," + t.d + ",0,0,0,0,1,0," + t.e + "," + t.f + ",0,1)"
			},
			toJSON: function() {
				var t = this;
				return '{"a":' + t.a + ',"b":' + t.b + ',"c":' + t.c + ',"d":' + t.d + ',"e":' + t.e + ',"f":' + t.f + "}"
			},
			_q: function(t, e) {
				return Math.abs(t - e) < 1e-14
			},
			_x: function() {
				var t = this;
				return t.context && t.context.setTransform(t.a, t.b, t.c, t.d, t.e, t.f), t
			}
		}, void 0 !== i && (i.MatrixLT = n)
	}, {}],
	47: [function(t, e, i) {
		e.exports = function(t) {
			return t && "object" == typeof t && "function" == typeof t.copy && "function" == typeof t.fill && "function" == typeof t.readUInt8
		}
	}, {}],
	48: [function(t, e, i) {
		(function(e, n) {
			var r = /%[sdj%]/g;
			i.format = function(t) {
				if (!p(t)) {
					for (var e = [], i = 0; i < arguments.length; i++) e.push(a(arguments[i]));
					return e.join(" ")
				}
				i = 1;
				for (var n = arguments, s = n.length, o = String(t).replace(r, function(t) {
					if ("%%" === t) return "%";
					if (i >= s) return t;
					switch (t) {
					case "%s":
						return String(n[i++]);
					case "%d":
						return Number(n[i++]);
					case "%j":
						try {
							return JSON.stringify(n[i++])
						} catch (e) {
							return "[Circular]"
						}
					default:
						return t
					}
				}), u = n[i]; i < s; u = n[++i]) _(u) || !m(u) ? o += " " + u : o += " " + a(u);
				return o
			}, i.deprecate = function(t, r) {
				if (v(n.process)) return function() {
					return i.deprecate(t, r).apply(this, arguments)
				};
				if (!0 === e.noDeprecation) return t;
				var a = !1;
				return function() {
					if (!a) {
						if (e.throwDeprecation) throw new Error(r);
						e.traceDeprecation ? console.trace(r) : console.error(r), a = !0
					}
					return t.apply(this, arguments)
				}
			};

			function a(t, e) {
				var n = {
					seen: [],
					stylize: o
				};
				return arguments.length >= 3 && (n.depth = arguments[2]), arguments.length >= 4 && (n.colors = arguments[3]), h(e) ? n.showHidden = e : e && i._extend(n, e), v(n.showHidden) && (n.showHidden = !1), v(n.depth) && (n.depth = 2), v(n.colors) && (n.colors = !1), v(n.customInspect) && (n.customInspect = !0), n.colors && (n.stylize = s), u(n, t, n.depth)
			}
			function s(t, e) {
				var i = a.styles[e];
				return i ? "\x1b[" + a.colors[i][0] + "m" + t + "\x1b[" + a.colors[i][1] + "m" : t
			}
			function o(t, e) {
				return t
			}
			function u(t, e, n) {
				if (t.customInspect && e && k(e.inspect) && e.inspect !== i.inspect && (!e.constructor || e.constructor.prototype !== e)) {
					var r = e.inspect(n, t);
					return p(r) || (r = u(t, r, n)), r
				}
				var a = function(t, e) {
						if (v(e)) return t.stylize("undefined", "undefined");
						if (p(e)) {
							var i = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
							return t.stylize(i, "string")
						}
						return d(e) ? t.stylize("" + e, "number") : h(e) ? t.stylize("" + e, "boolean") : _(e) ? t.stylize("null", "null") : void 0
					}(t, e);
				if (a) return a;
				var s, o = Object.keys(e),
					m = (s = {}, o.forEach(function(t, e) {
						s[t] = !0
					}), s);
				if (t.showHidden && (o = Object.getOwnPropertyNames(e)), b(e) && (o.indexOf("message") >= 0 || o.indexOf("description") >= 0)) return l(e);
				if (0 === o.length) {
					if (k(e)) {
						var w = e.name ? ": " + e.name : "";
						return t.stylize("[Function" + w + "]", "special")
					}
					if (g(e)) return t.stylize(RegExp.prototype.toString.call(e), "regexp");
					if (y(e)) return t.stylize(Date.prototype.toString.call(e), "date");
					if (b(e)) return l(e)
				}
				var A, S = "",
					E = !1,
					T = ["{", "}"];
				return f(e) && (E = !0, T = ["[", "]"]), k(e) && (S = " [Function" + (e.name ? ": " + e.name : "") + "]"), g(e) && (S = " " + RegExp.prototype.toString.call(e)), y(e) && (S = " " + Date.prototype.toUTCString.call(e)), b(e) && (S = " " + l(e)), 0 !== o.length || E && 0 != e.length ? n < 0 ? g(e) ? t.stylize(RegExp.prototype.toString.call(e), "regexp") : t.stylize("[Object]", "special") : (t.seen.push(e), A = E ?
				function(t, e, i, n, r) {
					for (var a = [], s = 0, o = e.length; s < o; ++s) x(e, String(s)) ? a.push(c(t, e, i, n, String(s), !0)) : a.push("");
					return r.forEach(function(r) {
						r.match(/^\d+$/) || a.push(c(t, e, i, n, r, !0))
					}), a
				}(t, e, n, m, o) : o.map(function(i) {
					return c(t, e, n, m, i, E)
				}), t.seen.pop(), function(t, e, i) {
					return t.reduce(function(t, e) {
						return e.indexOf("\n"), t + e.replace(/\u001b\[\d\d?m/g, "").length + 1
					}, 0) > 60 ? i[0] + ("" === e ? "" : e + "\n ") + " " + t.join(",\n  ") + " " + i[1] : i[0] + e + " " + t.join(", ") + " " + i[1]
				}(A, S, T)) : T[0] + S + T[1]
			}
			function l(t) {
				return "[" + Error.prototype.toString.call(t) + "]"
			}
			function c(t, e, i, n, r, a) {
				var s, o, l;
				if ((l = Object.getOwnPropertyDescriptor(e, r) || {
					value: e[r]
				}).get ? o = l.set ? t.stylize("[Getter/Setter]", "special") : t.stylize("[Getter]", "special") : l.set && (o = t.stylize("[Setter]", "special")), x(n, r) || (s = "[" + r + "]"), o || (t.seen.indexOf(l.value) < 0 ? (o = _(i) ? u(t, l.value, null) : u(t, l.value, i - 1)).indexOf("\n") > -1 && (o = a ? o.split("\n").map(function(t) {
					return "  " + t
				}).join("\n").substr(2) : "\n" + o.split("\n").map(function(t) {
					return "   " + t
				}).join("\n")) : o = t.stylize("[Circular]", "special")), v(s)) {
					if (a && r.match(/^\d+$/)) return o;
					(s = JSON.stringify("" + r)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2), s = t.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s = t.stylize(s, "string"))
				}
				return s + ": " + o
			}
			function f(t) {
				return Array.isArray(t)
			}
			function h(t) {
				return "boolean" == typeof t
			}
			function _(t) {
				return null === t
			}
			function d(t) {
				return "number" == typeof t
			}
			function p(t) {
				return "string" == typeof t
			}
			function v(t) {
				return void 0 === t
			}
			function g(t) {
				return m(t) && "[object RegExp]" === w(t)
			}
			function m(t) {
				return "object" == typeof t && null !== t
			}
			function y(t) {
				return m(t) && "[object Date]" === w(t)
			}
			function b(t) {
				return m(t) && ("[object Error]" === w(t) || t instanceof Error)
			}
			function k(t) {
				return "function" == typeof t
			}
			function w(t) {
				return Object.prototype.toString.call(t)
			}
			i.inspect = a, a.colors = {
				bold: [1, 22],
				italic: [3, 23],
				underline: [4, 24],
				inverse: [7, 27],
				white: [37, 39],
				grey: [90, 39],
				black: [30, 39],
				blue: [34, 39],
				cyan: [36, 39],
				green: [32, 39],
				magenta: [35, 39],
				red: [31, 39],
				yellow: [33, 39]
			}, a.styles = {
				special: "cyan",
				number: "yellow",
				boolean: "yellow",
				undefined: "grey",
				null: "bold",
				string: "green",
				date: "magenta",
				regexp: "red"
			}, t(47);

			function x(t, e) {
				return Object.prototype.hasOwnProperty.call(t, e)
			}
			t(29), i._extend = function(t, e) {
				if (!e || !m(e)) return t;
				for (var i = Object.keys(e), n = i.length; n--;) t[i[n]] = e[i[n]];
				return t
			}
		}).call(this, t(42), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
	}, {
		29: 29,
		42: 42,
		47: 47
	}],
	49: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(23)),
			a = n(t(4)),
			s = n(t(5)),
			o = n(t(7)),
			u = n(t(17)),
			l = n(t(10)),
			c = n(t(11)),
			f = t(50),
			h = t(30),
			_ = function(t) {
				function e() {
					return (0, s.
				default)(this, e), (0, u.
				default)(this, (0, l.
				default)(e).apply(this, arguments))
				}
				var i;
				return (0, c.
			default)(e, t), (0, o.
			default)(e, [{
					key: "__unzipImpl",
					value: (i = (0, a.
				default)(r.
				default.mark(function t(e) {
						return r.
					default.wrap(function(t) {
							for (;;) switch (t.prev = t.next) {
							case 0:
								return t.abrupt("return", h.inflate(e).buffer);
							case 1:
							case "end":
								return t.stop()
							}
						}, t, this)
					})), function(t) {
						return i.apply(this, arguments)
					})
				}, {
					key: "webglLoadTexture",
					value: function(t) {
						var e, i, n = this.image;
						switch (t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), this.pixelFormat) {
						case 0:
							return e = t.UNSIGNED_SHORT_5_6_5, i = new Uint16Array(n), void t.texImage2D(t.TEXTURE_2D, 0, t.RGB, this.width, this.height, 0, t.RGB, e, i);
						case 1:
							e = t.UNSIGNED_SHORT_5_5_5_1, i = new Uint16Array(n);
							break;
						case 2:
							e = t.UNSIGNED_SHORT_4_4_4_4, i = new Uint16Array(n);
							break;
						case 3:
							e = t.UNSIGNED_BYTE, i = new Uint8Array(n)
						}
						t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this.width, this.height, 0, t.RGBA, e, i)
					}
				}]), e
			}(f);
		e.exports = _
	}, {
		10: 10,
		11: 11,
		12: 12,
		17: 17,
		23: 23,
		30: 30,
		4: 4,
		5: 5,
		50: 50,
		7: 7
	}],
	50: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(23)),
			a = n(t(4)),
			s = n(t(5)),
			o = n(t(7)),
			u = t(51),
			l = t(146),
			c = {
				0: function(t, e, i) {
					var n = t.u16le();
					e.data[i << 2] = 8 * (n >> 11 & 31) + parseInt(n >> 11 & 7.75), e.data[1 + (i << 2)] = 4 * (n >> 5 & 63) + parseInt(n & 31 / 16), e.data[2 + (i << 2)] = 8 * (31 & n) + parseInt(7.75 & n), e.data[3 + (i << 2)] = 255
				},
				1: function(t, e, i) {
					var n = t.u16le();
					e.data[i << 2] = 8 * (n >> 11 & 31) + parseInt(n >> 11 & 7.75), e.data[1 + (i << 2)] = 8 * (n >> 6 & 31) + parseInt(n >> 6 & 7.75), e.data[2 + (i << 2)] = 8 * (n >> 1 & 31) + parseInt(n >> 1 & 7.75), e.data[3 + (i << 2)] = n ? 255 : 0
				},
				2: function(t, e, i) {
					var n = t.u16();
					e.data[i << 2] = 16 * (n >> 4 & 15) + (n >> 4 & 15), e.data[1 + (i << 2)] = 16 * (15 & n) + (15 & n), e.data[2 + (i << 2)] = 16 * (n >> 12 & 15) + (n >> 12 & 15), e.data[3 + (i << 2)] = 16 * (n >> 8 & 15) + (n >> 8 & 15)
				},
				3: function(t, e, i) {
					e.data[i << 2] = t.u8(), e.data[1 + (i << 2)] = t.u8(), e.data[2 + (i << 2)] = t.u8(), e.data[3 + (i << 2)] = t.u8()
				}
			},
			f = function() {
				function t(e) {
					(0, s.
				default)(this, t), this.timg = [];
					var i = l(e);
					if ("TEXB" !== i.string(4)) throw new Error("Invalid TEXB");
					i.u32();
					var n = i.string(i.u16()),
						r = n.indexOf("\0"); - 1 == r && (r = n.length), n = n.substring(1, r), this.filename = n, this.width = i.u16(), this.height = i.u16();
					var a = i.u16();
					this.compressed = a >> 3 & 1, this.pixelFormat = a >> 6, i.u16(), i.u16();
					for (var o = i.u16(), c = 1; c <= o; c++) this.timg.push(new u(i, this.width, this.height));
					this.image = i.slice(i.position)
				}
				var e, i;
				return (0, o.
			default)(t, [{
					key: "unzip",
					value: (i = (0, a.
				default)(r.
				default.mark(function t() {
						var e;
						return r.
					default.wrap(function(t) {
							for (;;) switch (t.prev = t.next) {
							case 0:
								if (!this.compressed) {
									t.next = 5;
									break
								}
								return this.image = this.image.slice(4), t.next = 4, this.__unzipImpl(this.image);
							case 4:
								this.image = t.sent;
							case 5:
								if ((e = this.width * this.height * (3 == this.pixelFormat ? 4 : 2)) === this.image.byteLength) {
									t.next = 8;
									break
								}
								throw new Error("Image size error: " + this.image.byteLength + "\nExcepted: " + e);
							case 8:
							case "end":
								return t.stop()
							}
						}, t, this)
					})), function() {
						return i.apply(this, arguments)
					})
				}, {
					key: "getImage",
					value: function(t) {
						l(this.image);
						for (var e = c[this.pixelFormat], i = 0; i < t.width * t.height; i++) e(this.image, t, i)
					}
				}, {
					key: "__unzipImpl",
					value: (e = (0, a.
				default)(r.
				default.mark(function t() {
						return r.
					default.wrap(function(t) {
							for (;;) switch (t.prev = t.next) {
							case 0:
								throw new Error("Please require TEXB-node or TEXB-browser!");
							case 1:
							case "end":
								return t.stop()
							}
						}, t, this)
					})), function() {
						return e.apply(this, arguments)
					})
				}]), t
			}();
		e.exports = f
	}, {
		12: 12,
		146: 146,
		23: 23,
		4: 4,
		5: 5,
		51: 51,
		7: 7
	}],
	146: [function(t, e, i) {
		"use strict";
		e.exports = function(t) {
			return void 0 !== t.__view ? t : (t.__view = new DataView(t), t.position = 0, t.u8 = function() {
				return !(this.position > this.length - 1) && this.__view.getUint8(this.position++)
			}, t.u16 = function() {
				return !(this.position > this.length - 2) && this.__view.getUint16((this.position += 2) - 2)
			}, t.u16le = function() {
				return !(this.position > this.length - 2) && this.__view.getUint16((this.position += 2) - 2, !0)
			}, t.u32 = function() {
				return !(this.position > this.length - 4) && this.__view.getUint32((this.position += 4) - 4)
			}, t.s32 = function() {
				return !(this.position > this.length - 4) && this.__view.getInt32((this.position += 4) - 4)
			}, t.float = function() {
				return !(this.position > this.length - 4) && this.__view.getFloat32((this.position += 4) - 4)
			}, t.string = function(t) {
				return !(this.position > this.length - t) && decodeURIComponent(escape(String.fromCharCode.apply(null, new Uint8Array(this.slice((this.position += t) - t, this.position))).replace("\0", "")))
			}, t)
		}
	}, {}],
	51: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(5)),
			a = n(t(7)),
			s = t(146),
			o = function() {
				function t(e, i, n) {
					(0, r.
				default)(this, t);
					var a = s(e);
					if ("TIMG" !== a.string(4)) throw new Error("Invalid TIMG");
					a.u16();
					var o = a.string(a.u16()),
						u = o.indexOf("\0"); - 1 == u && (u = o.length), o = o.substring(1, u), this.filename = o, this.scrollbar = {}, this.scale9 = {};
					var l = a.u16();
					if (65535 == l) {
						for (var c = a.u16(), f = 0; f < c; f++) {
							var h = a.u8(),
								_ = void 0;
							switch (a.u8()) {
							case 0:
								_ = a.u32();
								break;
							case 1:
								_ = a.float();
								break;
							case 2:
								var d = a.u16();
								d && (_ = a.string(d))
							}
							if (11 == h) throw new Error("Unsupported extension: 3D Model");
							switch (h) {
							case 1:
								this.scrollbar.left = _;
								break;
							case 2:
								this.scrollbar.middle = _;
								break;
							case 3:
								this.scrollbar.right = _;
								break;
							case 4:
								this.scrollbar.existSelected = _;
								break;
							case 12:
								this.scrollbar.vertical = _;
								break;
							case 5:
								this.scale9.xleft = _;
								break;
							case 6:
								this.scale9.xmiddle = _;
								break;
							case 7:
								this.scale9.xright = _;
								break;
							case 8:
								this.scale9.ytop = _;
								break;
							case 9:
								this.scale9.ymiddle = _;
								break;
							case 10:
								this.scale9.ybottom = _
							}
						}
						l = a.u16()
					}
					if (l > 1) throw new Error("Sub tile count > 1 not supported.");
					var p = a.u8(),
						v = a.u8(),
						g = a.u16(),
						m = a.u16(),
						y = a.u16(),
						b = a.u16(),
						k = i,
						w = n,
						x = 0,
						A = 0,
						S = 1,
						E = 1,
						T = !1;
					this.vertex = [], this.uv = [], this.index = [];
					for (var C = 0; C < p; C++) {
						this.vertex.push(a.u32() / 65536), this.vertex.push(a.u32() / 65536);
						var R = a.u32() / 65536,
							I = a.u32() / 65536;
						this.uv.push(R), this.uv.push(I), 0 == C && (y = R * i, b = I * n), k = Math.min(k, R * i), x = Math.max(x, R * i), w = Math.min(w, I * n), A = Math.max(A, I * n), S = Math.min(S, R), E = Math.min(E, I)
					}
					for (var L = 0; L < v; L++) this.index.push(a.u8());
					var F = x - k,
						P = A - w;
					F < P && g > m || F > P && g < m ? T = !0 : g === x - k && m == A - w || (g = x - k, m = A - w), y = Math.floor(y), b = Math.floor(b), this.x = y, this.y = b, this.u = S, this.v = E, this.width = g, this.height = m, this.switchXY = T, this.texbWidth = i, this.texbHeight = n
				}
				return (0, a.
			default)(t, [{
					key: "__getTexbPos",
					value: function(t, e, i) {
						if (this.switchXY) {
							var n = [i, e];
							e = n[0], i = n[1]
						}
						return 4 * (t.width * (this.y + i) + this.x + e)
					}
				}, {
					key: "getImage",
					value: function(t, e) {
						for (var i = 0; i < this.height; ++i) for (var n = 0; n < this.width; ++n) {
							var r = this.__getTexbPos(t, n, i),
								a = 4 * (this.width * i + n);
							e.data[a] = t.data[r], e.data[a + 1] = t.data[r + 1], e.data[a + 2] = t.data[r + 2], e.data[a + 3] = t.data[r + 3]
						}
					}
				}, {
					key: "getVertex",
					value: function() {
						var t = [],
							e = !0,
							i = !1,
							n = void 0;
						try {
							for (var r, a = this.index[Symbol.iterator](); !(e = (r = a.next()).done); e = !0) {
								var s = r.value;
								t.push(this.vertex[2 * s]), t.push(this.vertex[2 * s + 1])
							}
						} catch (o) {
							i = !0, n = o
						} finally {
							try {
								e || null == a.
								return ||a.
								return ()
							} finally {
								if (i) throw n
							}
						}
						return t
					}
				}, {
					key: "getUV",
					value: function() {
						var t = [],
							e = !0,
							i = !1,
							n = void 0;
						try {
							for (var r, a = this.index[Symbol.iterator](); !(e = (r = a.next()).done); e = !0) {
								var s = r.value;
								t.push(this.uv[2 * s]), t.push(this.uv[2 * s + 1])
							}
						} catch (o) {
							i = !0, n = o
						} finally {
							try {
								e || null == a.
								return ||a.
								return ()
							} finally {
								if (i) throw n
							}
						}
						return t
					}
				}]), t
			}();
		e.exports = o
	}, {
		12: 12,
		146: 146,
		5: 5,
		7: 7
	}],
	52: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(21)),
			a = n(t(5)),
			s = n(t(7)),
			o = t(58),
			u = function() {
				function t() {
					(0, a.
				default)(this, t), this.__queue = []
				}
				return (0, s.
			default)(t, [{
					key: "add",
					value: function(t) {
						this.__queue.push(t)
					}
				}, {
					key: "loop",
					value: function(t) {
						for (var e = this.__queue.slice(0); t > 0;) {
							var i;
							(i = this.__queue).push.apply(i, (0, r.
						default)(e)), --t
						}
					}
				}, {
					key: "run",
					value: function() {
						var t = this;
						!this.stopped && this.__queue.length && this.__queue.shift()(function() {
							t.run()
						})
					}
				}, {
					key: "stop",
					value: function() {
						this.stopped = !0
					}
				}]), t
			}(),
			l = function() {
				function t(e) {
					var i = this;
					(0, a.
				default)(this, t), this.__queue = new u;
					var n = [],
						r = e;
					do {
						n = n.concat(Object.getOwnPropertyNames(r))
					} while ((r = Object.getPrototypeOf(r)) && Object.getPrototypeOf(r));
					var s = !0,
						o = !1,
						l = void 0;
					try {
						for (var c, f = function() {
								var t = c.value;
								i[t] = function() {
									var i = arguments;
									return this.__queue.add(function(n) {
										e[t].apply(e, i), n()
									}), this
								}
							}, h = n[Symbol.iterator](); !(s = (c = h.next()).done); s = !0) f()
					} catch (_) {
						o = !0, l = _
					} finally {
						try {
							s || null == h.
							return ||h.
							return ()
						} finally {
							if (o) throw l
						}
					}
				}
				return (0, s.
			default)(t, [{
					key: "delay",
					value: function(t) {
						return this.__queue.add(function(e) {
							o.setTimeout(e, t)
						}), this
					}
				}, {
					key: "call",
					value: function(t) {
						return this.__queue.add(function(e) {
							t(), e()
						}), this
					}
				}, {
					key: "loop",
					value: function(t) {
						return this.__queue.loop(t), this
					}
				}, {
					key: "run",
					value: function() {
						this.__queue.run()
					}
				}, {
					key: "run_sysload_safe",
					value: function() {
						this.__queue.run()
					}
				}, {
					key: "quit",
					value: function() {
						this.__queue.stop()
					}
				}]), t
			}();
		e.exports = function(t) {
			return new l(t)
		}
	}, {
		12: 12,
		21: 21,
		5: 5,
		58: 58,
		7: 7
	}],
	58: [function(t, e, i) {
		"use strict";
		var n = t(74);

		function r(t, e) {
			return new n(e, t)
		}
		e.exports = {
			daemon: r,
			waitFrames: function(t, e) {
				var i = 0,
					n = r(function(r) {
						(i += 1) >= e && (t(), n.kill())
					});
				return n
			},
			setTimeout: function(t, e) {
				var i = 0,
					n = r(function(r) {
						(i = Math.min(e, i + r)) === e && (t(), n.kill())
					});
				return n
			}
		}
	}, {
		74: 74
	}],
	53: [function(t, e, i) {
		"use strict";
		var n = t(96),
			r = new Image;
		r.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=", e.exports = {
			create: function(t, e) {
				var i = new n(t, e, -88, 0, r);
				return i.setScale(1136, 640), i.show = function(t) {
					i.setAnimSpline([{
						target: "SPL_MODIFY_A",
						keys: [
							[0, 0],
							[300, .375]
						]
					}]), i.setAnimCallback(t), i.animPlay()
				}, i.hide = function() {
					i.kill(), i = null
				}, i.disappear = function(t) {
					i.setAnimSpline([{
						target: "SPL_MODIFY_A",
						keys: [
							[0, .375],
							[300, 0]
						]
					}]), i.setAnimCallback(function() {
						i.hide(), t && t()
					}), i.animPlay()
				}, i
			}
		}
	}, {
		96: 96
	}],
	96: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(5)),
			a = n(t(17)),
			s = n(t(10)),
			o = n(t(11)),
			u = t(87),
			l = t(60),
			c = t(62),
			f = function(t) {
				function e(t, i, n, o, u) {
					var f, h;
					(0, r.
				default)(this, e);
					for (var _ = arguments.length, d = new Array(_ > 5 ? _ - 5 : 0), p = 5; p < _; p++) d[p - 5] = arguments[p];
					h = (0, a.
				default)(this, (f = (0, s.
				default)(e)).call.apply(f, [this, t, i, n, o].concat(d)));
					var v = l.get(u),
						g = new c(i);
					return h.getNode().addNode(g), g.changeAsset(v), h
				}
				return (0, o.
			default)(e, t), e
			}(u);
		e.exports = f
	}, {
		10: 10,
		11: 11,
		12: 12,
		17: 17,
		5: 5,
		60: 60,
		62: 62,
		87: 87
	}],
	54: [function(t, e, i) {
		"use strict";
		e.exports = {
			SKILL_TRIGGER_TYPE: {
				time: 1,
				life_reduced: 2,
				notes_count: 3,
				combo_count: 4,
				score: 5,
				perfect_count: 6,
				great_count: 7,
				good_count: 8,
				bad_count: 9,
				miss_count: 10,
				heal_count: 11,
				star_perfect: 12,
				star_success: 13,
				same_timing_perfect: 14,
				heal_value: 15,
				chain: 100
			},
			SKILL_DURATION: {
				immediate: 1,
				duration: 2
			},
			ACCURACY: {
				PERFECT: "perfect",
				GREAT: "great",
				GOOD: "good",
				BAD: "bad",
				MISS: "miss"
			},
			SKILL_EFFECT: {
				level_up: 1,
				score_up: 2,
				skill_up: 3,
				great_to_perfect: 4,
				good_to_perfect: 5,
				damage_down: 6,
				bomb_clear: 7,
				to_skill_note: 8,
				hp_restore: 9,
				revive: 10,
				score_plus: 11,
				score_restore: 12,
				score_plus_smile: 1e3,
				score_plus_pure: 1001,
				score_plus_cool: 1002,
				score_plus_all: 1003,
				score_plus_max_hp: 1004,
				score_plus_rest_hp: 1005,
				damage: 99999,
				skill_rate_up: 2e3,
				mimic: 2100,
				perfect_bonus_ratio: 2200,
				perfect_bonus_fixed_value: 2201,
				combo_bonus: 2300,
				sync_status: 2400,
				gain_skill_level: 2500,
				gain_status: 2600,
				damage_and_score_plus: 5500,
				score_restore_with_damage_and_score_plus: 5501
			}
		}
	}, {}],
	55: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(5)),
			a = n(t(7)),
			s = n(t(17)),
			o = n(t(10)),
			u = n(t(9)),
			l = n(t(11)),
			c = t(59),
			f = t(89),
			h = 0,
			_ = function(t) {
				function e() {
					return (0, r.
				default)(this, e), (0, s.
				default)(this, (0, o.
				default)(e).apply(this, arguments))
				}
				return (0, l.
			default)(e, t), (0, a.
			default)(e, [{
					key: "__kill",
					value: function() {
						--h, (0, u.
					default)((0, o.
					default)(e.prototype), "__kill", this).call(this)
					}
				}, {
					key: "hide",
					value: function() {
						this.kill()
					}
				}, {
					key: "disappear",
					value: function(t) {
						this.kill(), t && t()
					}
				}, {
					key: "setOk",
					value: function(t) {
						t = t ? c.onClick(t) : nothing, this.setCallback("button_ok_center", t), this.setCallback("button_ok_left", t)
					}
				}, {
					key: "setCancel",
					value: function(t) {
						t = t ? c.onClick(t) : nothing, this.setCallback("button_cancel_right", t)
					}
				}, {
					key: "setClose",
					value: function(t) {
						t = t ? c.onClick(t) : nothing, this.setCallback("button_close", t)
					}
				}, {
					key: "changeBackground",
					value: function(t) {
						this.setVaritemChangeAssetNode("background", t)
					}
				}]), e
			}(f),
			d = {
				none: "none",
				ok: "node_ok",
				ok_cancel: "node_ok_cancel",
				yes: "node_ok",
				yes_no: "node_ok_cancel",
				close: "node_close"
			},
			p = "assets/image/ui/common/com_button_21.png.imag",
			v = "assets/image/ui/common/com_button_21se.png.imag",
			g = function() {
				function t() {
					(0, r.
				default)(this, t), this.__reset()
				}
				return (0, a.
			default)(t, [{
					key: "__reset",
					value: function() {
						this.vdoc_scheme = null, this.font = null, this.font_size = null, this.align = null, this.auto_vdoc_str = null, this.button_type = "none", this.ui = null
					}
				}, {
					key: "with_vdoc",
					value: function(t, e, i, n) {
						return this.vdoc_scheme = t, this.font = e || "sans-serif", this.font_size = i || 26, this.align = n || "left", this
					}
				}, {
					key: "with_auto_vdoc",
					value: function(t, e, i, n) {
						return this.auto_vdoc_str = t, this.font = e || "sans-serif", this.font_size = i || 26, this.align = n || "left", this
					}
				}, {
					key: "with_webview",
					value: function() {
						throw new Error("Dialog.with_webview not support")
					}
				}, {
					key: "with_strings_errors",
					value: function() {
						throw new Error("Dialog.with_strings_errors not support")
					}
				}, {
					key: "with_strings",
					value: function() {
						throw new Error("Dialog.with_strings not support, use with_auto_vdoc")
					}
				}, {
					key: "appear",
					value: function(t, e, i, n) {
						var r = this;
						++h;
						var a = new _(t, e, i, n, this.ui),
							s = c.onClick(function() {
								r.disappear()
							});
						a.setCallback("button_ok_center", s), a.setCallback("button_ok_left", s), a.setCallback("button_cancel_right", s), a.setCallback("button_close", s);
						var o = [];
						for (var u in d)"none" != u && (u == this.button_type ? (a.setNodeVisible(d[u], !0), o.push(d[u]), "yes" == u ? (a.setNodeAsset("button_ok_center", p, "FORM_ASSET_NORMAL"), a.setNodeAsset("button_ok_center", v, "FORM_ASSET_PUSHED")) : "yes_no" == u && (a.setNodeAsset("button_ok_left", p, "FORM_ASSET_NORMAL"), a.setNodeAsset("button_ok_left", v, "FORM_ASSET_PUSHED"), a.setNodeAsset("button_cancel_right", "assets/image/ui/common/com_button_27.png.imag", "FORM_ASSET_NORMAL"), a.setNodeAsset("button_cancel_right", "assets/image/ui/common/com_button_27se.png.imag", "FORM_ASSET_PUSHED"))) : o.includes(d[u]) || a.setNodeVisible(d[u], !1));
						if (this.vdoc_scheme || this.auto_vdoc_str) {
							var l = a.getWrappedVirtualDocNodeTask("task_virtualdoc");
							this.auto_vdoc_str ? (l.alignLeft(), l.setSimpleText(this.auto_vdoc_str, this.font_size, null, this.font)) : ("left" == this.align ? l.alignLeft() : "center" == this.align ? l.alignCenter() : "right" == this.align && l.alignRight(), l.setFont(0, this.font, this.font_size), l.setClearColor(0, 16777215), l.setViewPosition(0, 0), l.draw(this.vdoc_scheme))
						}
						return a.setNodeVisible("task_webview", !1), this.__reset(), a
					}
				}, {
					key: "getDialogRefCount",
					value: function() {
						return h
					}
				}, {
					key: "none",
					get: function() {
						return this.button_type = "none", this
					}
				}, {
					key: "ok",
					get: function() {
						return this.button_type = "ok", this
					}
				}, {
					key: "ok_cancel",
					get: function() {
						return this.button_type = "ok_cancel", this
					}
				}, {
					key: "yes",
					get: function() {
						return this.button_type = "yes", this
					}
				}, {
					key: "yes_no",
					get: function() {
						return this.button_type = "yes_no", this
					}
				}, {
					key: "close",
					get: function() {
						return this.button_type = "close", this
					}
				}, {
					key: "big",
					get: function() {
						return this.ui = "assets/ui/common/dialog/ui_dialog_big.json", this
					}
				}, {
					key: "middle",
					get: function() {
						return this.ui = "assets/ui/common/dialog/ui_dialog_middle.json", this
					}
				}, {
					key: "small",
					get: function() {
						return this.ui = "assets/ui/common/dialog/ui_dialog_small.json", this
					}
				}, {
					key: "middle_upper",
					get: function() {
						return this.ui = "assets/ui/common/dialog/ui_dialog_middle_upper.json", this
					}
				}, {
					key: "middle_limited",
					get: function() {
						return this.ui = "assets/ui/common/dialog/ui_dialog_middle_limited.json", this
					}
				}]), t
			}();
		e.exports = new g
	}, {
		10: 10,
		11: 11,
		12: 12,
		17: 17,
		5: 5,
		59: 59,
		7: 7,
		89: 89,
		9: 9
	}],
	59: [function(t, e, i) {
		"use strict";
		var n = t(12)(t(22)),
			r = {
				onClick: function(t) {
					return function(e, i, n) {
						"ACTION_CLICK" == i && t(e, i, n)
					}
				},
				findTableByCondition: function(t, e) {
					var i = e.key,
						r = e.value;
					if (t[i] == r) return {
						table: t
					};
					for (var a = Object.values(t), s = 0; s < a.length; s++) {
						var o = a[s];
						if ("object" == (0, n.
					default)(o)) {
							var u = this.findTableByCondition(o, e);
							if (u) return u
						}
					}
					return null
				}
			};
		e.exports = r
	}, {
		12: 12,
		22: 22
	}],
	89: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(21)),
			a = n(t(5)),
			s = n(t(17)),
			o = n(t(10)),
			u = n(t(7)),
			l = n(t(11)),
			c = n(t(3)),
			f = t(60),
			h = t(87),
			_ = t(65),
			d = t(62),
			p = t(61),
			v = t(63),
			g = t(91),
			m = t(98),
			y = t(95),
			b = t(94),
			k = t(99),
			w = {
				FORM_ASSET_NORMAL: 0,
				FORM_ASSET_PUSHED: 1,
				FORM_ASSET_DISABLE: 2,
				ASSET_DEFAULT: 0,
				ASSET_SELECT: 1,
				ASSET_DISABLE: 2
			},
			x = function(t) {
				function e(t, i, n, r, u) {
					var l;
					return (0, a.
				default)(this, e), l = (0, s.
				default)(this, (0, o.
				default)(e).call(this, t, i, n, r)), u = f.get(u) || ("string" == typeof u ? JSON.parse(u) : u), l.nodes = new Map, l.animnodes = new Set, l.anim_name_ref = new Map, l.anim_end_callback = nothing, function t(e, n) {
						var r = !0,
							a = !1,
							s = void 0;
						try {
							for (var o, u = n[Symbol.iterator](); !(r = (o = u.next()).done); r = !0) {
								var f = o.value,
									h = Object.assign({
										priority: e.order
									}, f);
								if ("number" == typeof f.priority && (h.priority += i), h.anchor) switch (h.anchor) {
								case 1:
									h.x = 960 - h.x, h.width && (h.x -= h.width);
									break;
								case 2:
									h.y = 640 - h.y, h.height && (h.y -= h.height);
									break;
								case 3:
									h.x = 960 - h.x, h.y = 640 - h.y, h.width && (h.x -= h.width), h.height && (h.y -= h.height)
								}
								var w = void 0;
								switch (h.class) {
								case "animnode":
									w = p.fromJson(h);
									break;
								case "button":
									w = v.fromJson(h);
									break;
								case "task_group":
									w = g.fromJson((0, c.
								default)((0, c.
								default)(l)), h);
									break;
								case "task_varitem":
									w = m.fromJson((0, c.
								default)((0, c.
								default)(l)), h);
									break;
								case "task_score":
									w = y.fromJson((0, c.
								default)((0, c.
								default)(l)), h);
									break;
								case "task_progressbar":
									w = b.fromJson((0, c.
								default)((0, c.
								default)(l)), h);
									break;
								case "task_virtualdoc":
									w = k.fromJson((0, c.
								default)((0, c.
								default)(l)), h);
									break;
								default:
									w = h.
								default ?d.fromJson(h):
									_.fromJson(h)
								}
								if (e.addNode(w.getNode()), l.nodes.set(h.name, w), "animnode" == h.class) {
									l.animnodes.add(w);
									var x = !0,
										A = !1,
										S = void 0;
									try {
										for (var E, T = h.states[Symbol.iterator](); !(x = (E = T.next()).done); x = !0) {
											var C = E.value,
												R = l.anim_name_ref.get(C.type);
											R || (R = new Set, l.anim_name_ref.set(C.type, R)), R.add(w)
										}
									} catch (I) {
										A = !0, S = I
									} finally {
										try {
											x || null == T.
											return ||T.
											return ()
										} finally {
											if (A) throw S
										}
									}
									w.form = (0, c.
								default)((0, c.
								default)(l))
								}
								h.sub && t(w.getNode(), h.sub)
							}
						} catch (I) {
							a = !0, s = I
						} finally {
							try {
								r || null == u.
								return ||u.
								return ()
							} finally {
								if (a) throw s
							}
						}
					}(l.getNode(), u.sub), l
				}
				return (0, l.
			default)(e, t), (0, u.
			default)(e, null, [{
					key: "getJson",
					value: function(t) {
						return JSON.parse(JSON.stringify(f.get(t)))
					}
				}]), (0, u.
			default)(e, [{
					key: "setEnabled",
					value: function(t) {
						throw new Error("not implement")
					}
				}, {
					key: "existNode",
					value: function(t) {
						return !!this.getNodeTask(t)
					}
				}, {
					key: "setNodeTrans",
					value: function(t, e, i) {
						var n = this.getNodePointer(t);
						n.x = e, n.y = i
					}
				}, {
					key: "setNodeScale",
					value: function(t, e, i) {
						var n = this.getNodePointer(t);
						n.scaleX = e, n.scaleY = i
					}
				}, {
					key: "setNodeRotation",
					value: function(t, e) {
						this.getNodePointer(t).rot = e
					}
				}, {
					key: "setNodeColor",
					value: function(t, e, i) {
						var n = this.getNodePointer(t);
						n.alpha = e, n.color = i
					}
				}, {
					key: "setNodeVisible",
					value: function(t, e) {
						this.getNodePointer(t).visible = !! e
					}
				}, {
					key: "getNodePriority",
					value: function(t) {
						return this.getNodePointer(t).order
					}
				}, {
					key: "setNodePriority",
					value: function(t, e) {
						this.getNodePointer(t).order = e
					}
				}, {
					key: "getNodeTask",
					value: function(t) {
						for (var i = [this]; i.length;) {
							var n = i.shift();
							if (n instanceof e && n.nodes.has(t)) return n.nodes.get(t);
							i = i.concat((0, r.
						default)(n._child))
						}
						return null
					}
				}, {
					key: "getNodePointer",
					value: function(t) {
						return this.getNodeTask(t).getNode()
					}
				}, {
					key: "getWrappedProgressBarNodeTask",
					value: function(t) {
						return this.getNodeTask(t)
					}
				}, {
					key: "getWrappedScoreNodeTask",
					value: function(t) {
						return this.getNodeTask(t)
					}
				}, {
					key: "getWrappedLabelNodeTask",
					value: function(t) {
						return this.getNodeTask(t)
					}
				}, {
					key: "getWrappedVirtualDocNodeTask",
					value: function(t) {
						return this.getNodeTask(t)
					}
				}, {
					key: "getWrappedGroupNodeTask",
					value: function(t) {
						return this.getNodeTask(t)
					}
				}, {
					key: "getWrappedVaritemTask",
					value: function(t) {
						return this.getNodeTask(t)
					}
				}, {
					key: "setVaritemChangeAssetNode",
					value: function(t, e) {
						this.getNodeTask(t).changeAsset(e)
					}
				}, {
					key: "setNodeEnabled",
					value: function(t, e) {
						this.getNodePointer(t).setEnabled(e)
					}
				}, {
					key: "getNodeEnabled",
					value: function(t) {
						this.getNodePointer(t).getEnabled()
					}
				}, {
					key: "setNodeAsset",
					value: function(t, e, i) {
						void 0 !== w[i] && (i = w[i]), this.getNodePointer(t).setAsset(e, i)
					}
				}, {
					key: "getNodeAssetName",
					value: function(t) {
						throw new Error("not implement")
					}
				}, {
					key: "setNodeClick",
					value: function(t, e, i, n, r) {
						this.getNodePointer(t).setClick(e, i, n, r)
					}
				}, {
					key: "setCallback",
					value: function(t, e) {
						this.getNodePointer(t).setCallback(function() {
							for (var i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
							return e.apply(void 0, [t].concat(n))
						})
					}
				}, {
					key: "setNodeLabelText",
					value: function(t, e) {
						this.getNodeTask(t).setText(e)
					}
				}, {
					key: "setNodeLabelColor",
					value: function(t, e) {
						this.getNodeTask(t).setColor(e)
					}
				}, {
					key: "setNodeLabelFont",
					value: function(t, e, i) {
						this.getNodeTask(t).setFont(e, i)
					}
				}, {
					key: "setNodeVirtualDocText",
					value: function(t) {
						for (var e, i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) n[r - 1] = arguments[r];
						(e = this.getNodeTask(t)).setSimpleText.apply(e, n)
					}
				}, {
					key: "setNodeVirtualDocAlignLeft",
					value: function(t) {
						this.getNodeTask(t).alignLeft()
					}
				}, {
					key: "setNodeVirtualDocAlignCenter",
					value: function(t) {
						this.getNodeTask(t).alignCenter()
					}
				}, {
					key: "setNodeVirtualDocAlignRight",
					value: function(t) {
						this.getNodeTask(t).alignRight()
					}
				}, {
					key: "setAnim",
					value: function(t) {
						var e = this.anim_name_ref.get(t);
						if (e) {
							var i = !0,
								n = !1,
								r = void 0;
							try {
								for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done); i = !0) a.value.setAnim(t)
							} catch (o) {
								n = !0, r = o
							} finally {
								try {
									i || null == s.
									return ||s.
									return ()
								} finally {
									if (n) throw r
								}
							}
						}
					}
				}, {
					key: "skipAnim",
					value: function(t) {
						var e = this.anim_name_ref.get(t);
						if (e) {
							var i = !0,
								n = !1,
								r = void 0;
							try {
								for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done); i = !0) a.value.skipAnim()
							} catch (o) {
								n = !0, r = o
							} finally {
								try {
									i || null == s.
									return ||s.
									return ()
								} finally {
									if (n) throw r
								}
							}
						}
					}
				}, {
					key: "isAnim",
					value: function(t) {
						if (t) {
							var e = this.anim_name_ref.get(t);
							return !!e && e[0].isAnim(t)
						}
						var i = !0,
							n = !1,
							r = void 0;
						try {
							for (var a, s = this.animnodes[Symbol.iterator](); !(i = (a = s.next()).done); i = !0) if (a.value.isAnim()) return !0
						} catch (o) {
							n = !0, r = o
						} finally {
							try {
								i || null == s.
								return ||s.
								return ()
							} finally {
								if (n) throw r
							}
						}
						return !1
					}
				}, {
					key: "setAnimCallback",
					value: function(t) {
						this.anim_end_callback = t
					}
				}]), e
			}(h);
		e.exports = x
	}, {
		10: 10,
		11: 11,
		12: 12,
		17: 17,
		21: 21,
		3: 3,
		5: 5,
		60: 60,
		61: 61,
		62: 62,
		63: 63,
		65: 65,
		7: 7,
		87: 87,
		91: 91,
		94: 94,
		95: 95,
		98: 98,
		99: 99
	}],
	56: [function(t, e, i) {
		"use strict";
		var n = {},
			r = {
				perfect: 4,
				great: 3,
				good: 2,
				bad: 1,
				miss: 0,
				ignored: 9
			},
			a = null;
		!
		function() {
			for (var t in a = {}, r) {
				var e = r[t];
				a[e] = t, n[t] = e
			}
		}(), n.get = function(t) {
			return r[t]
		}, n.valueToKey = function(t) {
			return a[t]
		}, e.exports = n
	}, {}],
	57: [function(t, e, i) {
		"use strict";
		var n = t(12)(t(8)),
			r = {
				rarity: 1,
				attribute: 2,
				unit_type: 3,
				member_tag: 10,
				sifce_unit_type_member_tag: -100,
				create: function(t) {
					var e, i = {},
						a = (e = {}, (0, n.
					default)(e, r.rarity, []), (0, n.
					default)(e, r.attribute, []), (0, n.
					default)(e, r.unit_type, []), (0, n.
					default)(e, r.member_tag, []), (0, n.
					default)(e, r.sifce_unit_type_member_tag, []), e);
					return function() {
						var e = !0,
							n = !1,
							s = void 0;
						try {
							for (var o, u = t[Symbol.iterator](); !(e = (o = u.next()).done); e = !0) {
								var l = o.value;
								a[l.reference_type].push(l.target)
							}
						} catch (c) {
							n = !0, s = c
						} finally {
							try {
								e || null == u.
								return ||u.
								return ()
							} finally {
								if (n) throw s
							}
						}
						i.hasRecord = function() {
							for (var t in a) if (a[t].length > 0) return !0;
							return !1
						}, i.getRarityList = function() {
							return a[r.rarity]
						}, i.getAttributeList = function() {
							return a[r.attribute]
						}, i.getUnitTypeList = function() {
							return a[r.unit_type]
						}, i.getMemberTagList = function() {
							return a[r.member_tag]
						}, i.isSatisfiedRarity = function(t) {
							var e = i.getRarityList();
							if (e.length < 1) return !0;
							var n = !0,
								r = !1,
								a = void 0;
							try {
								for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done); n = !0) {
									var u = s.value;
									if (t.rarity == u) return !0
								}
							} catch (c) {
								r = !0, a = c
							} finally {
								try {
									n || null == o.
									return ||o.
									return ()
								} finally {
									if (r) throw a
								}
							}
							return !1
						}, i.isSatisfiedAttribute = function(t) {
							var e = i.getAttributeList();
							if (e.length < 1) return !0;
							var n = !0,
								r = !1,
								a = void 0;
							try {
								for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done); n = !0) {
									var u = s.value;
									if (t.attribute_id == u) return !0
								}
							} catch (c) {
								r = !0, a = c
							} finally {
								try {
									n || null == o.
									return ||o.
									return ()
								} finally {
									if (r) throw a
								}
							}
							return !1
						}, i.isSatisfiedUnitType = function(t) {
							var e = i.getUnitTypeList();
							if (e.length < 1) return !0;
							var n = !0,
								r = !1,
								a = void 0;
							try {
								for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done); n = !0) {
									var u = s.value;
									if (t.unit_type_id == u) return !0
								}
							} catch (c) {
								r = !0, a = c
							} finally {
								try {
									n || null == o.
									return ||o.
									return ()
								} finally {
									if (r) throw a
								}
							}
							return !1
						}, i.isSatisfiedMemberTag = function(t) {
							var e = i.getMemberTagList();
							if (e.length < 1) return !0;
							var n = !0,
								r = !1,
								a = void 0;
							try {
								for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done); n = !0) {
									var u = s.value;
									if (!t.member_tag.includes(u)) return !1
								}
							} catch (c) {
								r = !0, a = c
							} finally {
								try {
									n || null == o.
									return ||o.
									return ()
								} finally {
									if (r) throw a
								}
							}
							return !0
						}, i.isSatisfiedEverything = function(t) {
							return i.isSatisfiedRarity(t) && i.isSatisfiedAttribute(t) && i.isSatisfiedUnitType(t) && i.isSatisfiedMemberTag(t)
						}, i.sifceGetUnitTypeListByMemberTag = function() {
							return a[r.sifce_unit_type_member_tag]
						}
					}(), i
				}
			};
		e.exports = r
	}, {
		12: 12,
		8: 8
	}],
	74: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(5)),
			a = n(t(7)),
			s = n(t(17)),
			o = n(t(10)),
			u = n(t(9)),
			l = n(t(11)),
			c = t(73),
			f = function(t) {
				function e(t, i, n) {
					var a;
					return (0, r.
				default)(this, e), (a = (0, s.
				default)(this, (0, o.
				default)(e).call(this, t, c.phase.P_NORMAL))).cb = i, a.kill_cb = n || nothing, a
				}
				return (0, l.
			default)(e, t), (0, a.
			default)(e, [{
					key: "__execute",
					value: function(t) {
						this.cb(t)
					}
				}, {
					key: "__kill",
					value: function() {
						this.kill_cb(this), (0, u.
					default)((0, o.
					default)(e.prototype), "__kill", this).call(this)
					}
				}]), e
			}(c.Task);
		e.exports = f
	}, {
		10: 10,
		11: 11,
		12: 12,
		17: 17,
		5: 5,
		7: 7,
		73: 73,
		9: 9
	}],
	60: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(23)),
			a = n(t(4)),
			s = n(t(5)),
			o = n(t(7)),
			u = t(77),
			l = t(78),
			c = t(76),
			f = t(49),
			h = t(82),
			_ = t(67),
			d = t(26);

		function p(t, e, i) {
			for (var n = [t], r = []; n.length;) {
				var a = n.shift(),
					s = !0,
					o = !1,
					u = void 0;
				try {
					for (var l, c = e[Symbol.iterator](); !(s = (l = c.next()).done); s = !0) {
						var f = l.value;
						if (a[f]) {
							var h = a[f];
							".imag" == h.substr(-5) && (h = h.substr(0, h.length - 5)), r.push(h + (i || ""))
						}
					}
				} catch (_) {
					o = !0, u = _
				} finally {
					try {
						s || null == c.
						return ||c.
						return ()
					} finally {
						if (o) throw u
					}
				}
				a.sub && (n = n.concat(a.sub))
			}
			return r
		}
		var v = function() {
				function t() {
					(0, s.
				default)(this, t), this.assets = new Map, this.canvas_cache = []
				}
				var e, i;
				return (0, o.
			default)(t, [{
					key: "__pretreatPath",
					value: function(t) {
						return "asset://" == t.substr(0, 8) && (t = t.substr(8)), "/asset/" == t.substr(0, 7) && (t = t.substr(7)), ".imag" == t.substr(t.length - 5) && (t = t.substr(0, t.length - 5)), t
					}
				}, {
					key: "__set",
					value: function(t, e) {
						t = this.__pretreatPath(t), this.assets.set(t, e)
					}
				}, {
					key: "deleteAsset",
					value: function(t) {
						t = this.__pretreatPath(t);
						var e = this.assets.get(t);
						_.getInstance().releaseTexture(e.getTexture()), this.assets.delete(t)
					}
				}, {
					key: "isLoaded",
					value: function(t) {
						return t = this.__pretreatPath(t), this.assets.has(t)
					}
				}, {
					key: "loadImage",
					value: (i = (0, a.
				default)(r.
				default.mark(function t(e, i) {
						var n;
						return r.
					default.wrap(function(t) {
							for (;;) switch (t.prev = t.next) {
							case 0:
								n = _.getInstance().createTexture(i), e.includes("?gettexb") && (e = e.substr(0, e.indexOf("?gettexb"))), this.__set(e, new u(i, n));
							case 3:
							case "end":
								return t.stop()
							}
						}, t, this)
					})), function(t, e) {
						return i.apply(this, arguments)
					})
				}, {
					key: "loadTexb",
					value: (e = (0, a.
				default)(r.
				default.mark(function t(e, i) {
						var n, a, s, o, u, c, h, d, p;
						return r.
					default.wrap(function(t) {
							for (;;) switch (t.prev = t.next) {
							case 0:
								return n = new f(i), t.next = 3, n.unzip();
							case 3:
								for (this.__set(e, !0), a = _.getInstance().createTextureFromTexb(n), s = !0, o = !1, u = void 0, t.prev = 8, c = n.timg[Symbol.iterator](); !(s = (h = c.next()).done); s = !0) d = h.value, p = d.filename.substr(0, d.filename.length - 5), this.__set(p, new l(d, a));
								t.next = 16;
								break;
							case 12:
								t.prev = 12, t.t0 = t.
								catch (8), o = !0, u = t.t0;
							case 16:
								t.prev = 16, t.prev = 17, s || null == c.
								return ||c.
								return ();
							case 19:
								if (t.prev = 19, !o) {
									t.next = 22;
									break
								}
								throw u;
							case 22:
								return t.finish(19);
							case 23:
								return t.finish(16);
							case 24:
							case "end":
								return t.stop()
							}
						}, t, this, [
							[8, 12, 16, 24],
							[17, , 19, 23]
						])
					})), function(t, i) {
						return e.apply(this, arguments)
					})
				}, {
					key: "loadFlsh",
					value: function(t, e) {
						var i = h(e);
						return this.__set(i.name, i), this.__set(t, i), [i.movies.filter(function(t) {
							return "image" == t.type && ".imag" == t.name.substr(-5)
						}).map(function(t) {
							return t.name.substr(0, t.name.length - 5)
						}), i.sounds.map(function(t) {
							return t.substr(8) + ".mp3"
						})]
					}
				}, {
					key: "loadUI",
					value: function(t, e) {
						return e = JSON.parse(e), this.__set(t, e), [p(e, ["default", "select", "disable", "asset0", "asset1", "asset2", "asset3", "asset4", "asset5", "asset6", "asset7", "asset8", "asset9"]), p(e, ["soundup", "sounddown"], ".mp3")]
					}
				}, {
					key: "get",
					value: function(t) {
						if (t instanceof window.Image) {
							var e = _.getInstance().createTexture(t);
							return new u(t, e)
						}
						if ("string" != typeof t) return !1;
						t = this.__pretreatPath(t);
						var i = this.assets.get(t);
						return ".json" == t.substr(t.length - 5) && (i = d(i)), i
					}
				}, {
					key: "has",
					value: function(t) {
						return t = this.__pretreatPath(t), this.assets.has(t)
					}
				}, {
					key: "getTemporaryCanvasAsset",
					value: function() {
						return this.canvas_cache.length ? this.canvas_cache.pop() : new c(document.createElement("canvas"))
					}
				}, {
					key: "freeTemporaryCanvasAsset",
					value: function(t) {
						this.canvas_cache.push(t)
					}
				}]), t
			}();
		e.exports = new v
	}, {
		12: 12,
		23: 23,
		26: 26,
		4: 4,
		49: 49,
		5: 5,
		67: 67,
		7: 7,
		76: 76,
		77: 77,
		78: 78,
		82: 82
	}],
	67: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(21)),
			a = n(t(5)),
			s = n(t(7)),
			o = n(t(17)),
			u = n(t(10)),
			l = n(t(11)),
			c = t(73),
			f = t(46).MatrixLT,
			h = t(79),
			_ = ["a_position", "a_texCoord", "a_colorTrans"],
			d = [2, 2, 4],
			p = null,
			v = 0,
			g = function(e) {
				function i(t, e) {
					var n;
					(0, a.
				default)(this, i), n = (0, o.
				default)(this, (0, u.
				default)(i).call(this, c.phase.P_DRAW)), function(t) {
						var e = window.navigator.userAgent.includes("MSIE");
						if (!document.createElement("canvas").getContext) throw t || window.alert("Your browser does not support Canvas!"), new Error("Canvas not supported");
						if (e) throw t || window.alert("Not compatibile with Internet Explorer 10 or lower!"), new Error("Incompatibile IE version")
					}(e), n.canvas = t;
					var r = n.canvas.getContext("webgl");
					if (!r) throw window.alert("Your browser doesn't support WebGL!"), new Error("WebGL not supported");
					return n.gl = r, r.enable(r.BLEND), r.blendFunc(r.SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA), n.glData = function(t) {
						var e = t.createShader(t.VERTEX_SHADER);
						t.shaderSource(e, "attribute highp vec2 a_position;\n  attribute mediump vec2 a_texCoord;\n  attribute lowp vec4 a_colorTrans;\n  varying lowp vec4 v_colorTrans;\n  varying mediump vec2 v_texCoord;\n\n  void main() {\n\n    gl_Position = vec4(a_position, 0, 1);\n\n    v_texCoord = a_texCoord;\n    v_colorTrans = a_colorTrans;\n  }"), t.compileShader(e), t.getShaderParameter(e, t.COMPILE_STATUS) || console.error(t.getShaderInfoLog(e));
						var i = t.createShader(t.FRAGMENT_SHADER);
						// 纹理；从顶点着色器传入的纹理坐标
						t.shaderSource(i, "precision mediump float;\n  \n  // \u7eb9\u7406\n  uniform sampler2D u_image;\n  \n  // \u4ece\u9876\u70b9\u7740\u8272\u5668\u4f20\u5165\u7684\u7eb9\u7406\u5750\u6807\n  varying mediump vec2 v_texCoord;\n  varying lowp vec4 v_colorTrans;\n  \n  void main() {\n    gl_FragColor = texture2D(u_image, v_texCoord) * v_colorTrans;\n  }"), t.compileShader(i), t.getShaderParameter(i, t.COMPILE_STATUS) || console.error(t.getShaderInfoLog(i));
						var n = t.createProgram();
						t.attachShader(n, e), t.attachShader(n, i), t.linkProgram(n), t.getProgramParameter(n, t.LINK_STATUS) || console.error(t.getProgramInfoLog(n)), t.useProgram(n);
						var r = {};
						for (var a in _) {
							var s = t.getAttribLocation(n, _[a]),
								o = t.createBuffer();
							t.bindBuffer(t.ARRAY_BUFFER, o), t.vertexAttribPointer(s, d[a], t.FLOAT, !1, 0, 0), t.enableVertexAttribArray(s), r[_[a]] = o
						}
						var u = t.getUniformLocation(n, "u_image");
						return t.uniform1i(u, 0), {
							vertexShader: e,
							fragmentShader: i,
							program: n,
							buffer: r
						}
					}(r), r.viewport(0, 0, 1136, 640), r.clearColor(0, 0, 0, 1), n.imageList = [], n.animList = [], n.txRef = new Set, n.root = {
						treeColor: 16777215,
						treeAlpha: 255,
						treeVisible: !0,
						treeMatrix: f.from(1, 0, 0, 1, 88, 0),
						_child: new Set,
						addNode: function(t) {
							this._child.add(t)
						},
						removeNode: function(t) {
							this._child.delete(t)
						}
					}, n.__recalculate_order_nodes = [], n
				}
				return (0, l.
			default)(i, e), (0, s.
			default)(i, [{
					key: "addToRecomputeList",
					value: function(t) {
						var e = 1;
						t._parent.__recalculate_order && (e = t._parent.__recalculate_order + 1), t.__recalculate_order = e, this.__recalculate_order_nodes[e] || (this.__recalculate_order_nodes[e] = new Set), this.__recalculate_order_nodes[e].add(t)
					}
				}, {
					key: "removeFromRecomputeList",
					value: function(t) {
						this.__recalculate_order_nodes[t.__recalculate_order].delete(t)
					}
				}, {
					key: "__execute",
					value: function(t) {
						this.paused || (this.resize(), this.updateAnim(t), this.recompute(), this.draw())
					}
				}, {
					key: "resize",
					value: function() {
						if (960 == this.fixWidth) return this.canvas.setAttribute("width", "960px"), void this.gl.viewport(-88, 0, 1136, 640);
						if (1136 == this.fixWidth) return this.canvas.setAttribute("width", "1136px"), void this.gl.viewport(0, 0, 1136, 640);
						var t, e, i = window.innerHeight / window.innerWidth;
						if (e = i < 640 / 960 ? (t = window.innerWidth) * i : (t = window.innerWidth) * (640 / 960), t != this.__lastWidth || e != this.__lastHeight) {
							var n = 960;
							i < 640 / 960 ? (n = Math.floor(640 / i), this.canvas.setAttribute("width", n + "px")) : this.canvas.setAttribute("width", "960px"), this.canvas.style.width = t + "px", this.canvas.style.height = e + "px", this.__lastWidth = t, this.__lastHeight = e, this.gl.viewport(Math.floor((n - 1136) / 2), 0, 1136, 640)
						}
					}
				}, {
					key: "updateAnim",
					value: function(t) {
						var e = !0,
							i = !1,
							n = void 0;
						try {
							for (var r, a = this.animList[Symbol.iterator](); !(e = (r = a.next()).done); e = !0) r.value.update(t)
						} catch (s) {
							i = !0, n = s
						} finally {
							try {
								e || null == a.
								return ||a.
								return ()
							} finally {
								if (i) throw n
							}
						}
					}
				}, {
					key: "recompute",
					value: function() {
						var t = !0,
							e = !1,
							i = void 0;
						try {
							for (var n, r = this.__recalculate_order_nodes[Symbol.iterator](); !(t = (n = r.next()).done); t = !0) {
								var a = n.value;
								if (a) {
									var s = !0,
										o = !1,
										u = void 0;
									try {
										for (var l, c = a[Symbol.iterator](); !(s = (l = c.next()).done); s = !0) l.value.__recalculateMatrix()
									} catch (f) {
										o = !0, u = f
									} finally {
										try {
											s || null == c.
											return ||c.
											return ()
										} finally {
											if (o) throw u
										}
									}
								}
							}
						} catch (f) {
							e = !0, i = f
						} finally {
							try {
								t || null == r.
								return ||r.
								return ()
							} finally {
								if (e) throw i
							}
						}
					}
				}, {
					key: "__drawResetTmpVal",
					value: function() {
						this.__draw_texture = null, this.__draw_attr = {
							a_position: [],
							a_texCoord: [],
							a_colorTrans: []
						}
					}
				}, {
					key: "__drawSwitchTexture",
					value: function(t) {
						this.__draw_texture != t && (this.__drawDispatch(), this.__drawResetTmpVal(), this.__draw_texture = t)
					}
				}, {
					key: "__drawPushArray",
					value: function(t, e) {
						this.__draw_attr[t].push.apply(this.__draw_attr[t], e)
					}
				}, {
					key: "__drawDispatch",
					value: function() {
						if (this.__draw_texture) {
							var t = this.gl;
							t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, this.__draw_texture);
							var e = this.__draw_attr;
							for (var i in e) t.bindBuffer(t.ARRAY_BUFFER, this.glData.buffer[i]), t.bufferData(t.ARRAY_BUFFER, new Float32Array(e[i]), t.DYNAMIC_DRAW);
							t.drawArrays(t.TRIANGLES, 0, e.a_position.length / 2)
						}
					}
				}, {
					key: "draw",
					value: function() {
						var t = this.gl;
						t.clear(t.COLOR_BUFFER_BIT), this.imageList = this.imageList.sort(function(t, e) {
							return t.order == e.order ? t.getAsset().getTexture().__id - e.getAsset().getTexture().__id : t.order - e.order
						}), this.__drawResetTmpVal();
						var e = !0,
							i = !1,
							n = void 0;
						try {
							for (var r, a = this.imageList[Symbol.iterator](); !(e = (r = a.next()).done); e = !0) {
								var s = r.value;
								s.shouldDraw() && (this.__drawSwitchTexture(s.getAsset().getTexture()), this.__drawPushArray("a_position", s.getComputedVerticies()), this.__drawPushArray("a_texCoord", s.getTextureUV()), this.__drawPushArray("a_colorTrans", s.getColorTransform()))
							}
						} catch (o) {
							i = !0, n = o
						} finally {
							try {
								e || null == a.
								return ||a.
								return ()
							} finally {
								if (i) throw n
							}
						}
						this.__drawDispatch()
					}
				}, {
					key: "__die",
					value: function() {
						var t = this.gl,
							e = !0,
							i = !1,
							n = void 0;
						try {
							for (var r, a = this.txRef[Symbol.iterator](); !(e = (r = a.next()).done); e = !0) {
								var s = r.value;
								t.deleteTexture(s)
							}
						} catch (c) {
							i = !0, n = c
						} finally {
							try {
								e || null == a.
								return ||a.
								return ()
							} finally {
								if (i) throw n
							}
						}
						for (var o = Object.values(this.glData.buffer), u = 0; u < o.length; u++) {
							var l = o[u];
							t.deleteBuffer(l)
						}
						t.deleteProgram(this.glData.program), t.deleteShader(this.glData.vertexShader), t.deleteShader(this.glData.fragmentShader), p = null
					}
				}, {
					key: "pause",
					value: function() {
						var t = this;
						window.requestAnimationFrame(function() {
							return t.paused = !0
						})
					}
				}, {
					key: "resume",
					value: function() {
						this.paused = !1
					}
				}, {
					key: "fixWidth",
					value: function(t) {
						this.fixWidth = 960
					}
				}, {
					key: "setClearColor",
					value: function(t, e) {
						var i;
						(i = this.gl).clearColor.apply(i, (0, r.
					default)(h.toColorTransform(t, e)))
					}
				}, {
					key: "createTexture",
					value: function(t) {
						var e = this.gl,
							i = e.createTexture();
						return i.__id = v++, e.bindTexture(e.TEXTURE_2D, i), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t), this.txRef.add(i), i
					}
				}, {
					key: "createTextureFromTexb",
					value: function(t) {
						var e = this.gl,
							i = e.createTexture();
						return i.__id = v++, e.bindTexture(e.TEXTURE_2D, i), t.webglLoadTexture(e), this.txRef.add(i), i
					}
				}, {
					key: "updateTexture",
					value: function(t, e) {
						var i = this.gl;
						i.bindTexture(i.TEXTURE_2D, t), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, i.RGBA, i.UNSIGNED_BYTE, e)
					}
				}, {
					key: "addItem",
					value: function(t) {
						this.imageList.push(t)
					}
				}, {
					key: "removeItem",
					value: function(t) {
						for (; this.imageList.includes(t);) this.imageList.splice(this.imageList.indexOf(t), 1)
					}
				}, {
					key: "addAnim",
					value: function(t) {
						this.animList.includes(t) || this.animList.push(t)
					}
				}, {
					key: "removeAnim",
					value: function(t) {
						for (; this.animList.includes(t);) this.animList.splice(this.animList.indexOf(t), 1)
					}
				}, {
					key: "setCustomFlushDisplay",
					value: function(t) {
						this.__customFlushDisplay = t
					}
				}, {
					key: "getAssetInfo",
					value: function(e) {
						return [(e = t(60).get(e)).getAssetWidth(), e.getAssetHeight()]
					}
				}, {
					key: "releaseTexture",
					value: function(t) {
						this.txRef.delete(t), this.gl.deleteTexture(t)
					}
				}]), i
			}(c.BaseTask);
		e.exports = {
			init: function(t, e) {
				p = new g(t, e)
			},
			getInstance: function() {
				return p
			}
		}
	}, {
		10: 10,
		11: 11,
		12: 12,
		17: 17,
		21: 21,
		46: 46,
		5: 5,
		60: 60,
		7: 7,
		73: 73,
		79: 79
	}],
	82: [function(t, e, i) {
		"use strict";
		var n = t(146);
		e.exports = function(t) {
			var e = n(t),
				i = [],
				r = [],
				a = [],
				s = [],
				o = [],
				u = [],
				l = [],
				c = [],
				f = [],
				h = {},
				_ = [],
				d = {};
			if ("FLSH" !== e.string(4)) throw new Error("Invalid FLSH: " + t);
			e.u32(), d.name = e.string(e.u16()).substr(1), d.msPerFrame = e.u16();
			var p = e.u16();
			if (e.u16(), 65535 == p) {
				var v = e.u16();
				if (v) do {
					var g = e.u16();
					i.push(g)
				} while (--v);
				var m = e.u32(),
					y = e.u16();
				if (m && y) for (var b = 0; b < y; b++) {
					for (var k = {
						shapeID: e.u16(),
						styleCount: e.u16(),
						indexBuffer: e.u32(),
						indexCount: e.u16(),
						texture: null,
						fillColor: null
					}, w = 0; w < k.indexCount; w++) _[k.indexBuffer + w] = e.u16();
					switch (k.vertexCount = e.u16(), k.XYBuffer = e.u32(), k.UVBuffer = e.u32(), k.styleType = e.u8(), k.styleType) {
					case 2:
						k.texture = e.slice(e.position, 256), e.position += 256;
						break;
					case 3:
						e.slice(e.position, 256), e.position += 256;
						break;
					case 1:
						k.fillColor = e.u32();
						break;
					default:
						shpe.fillColor = 4294967295
					}
					h[k.shapeID] = k
				}
				p = e.u16()
			}
			do {
				var x = e.string(e.u16());
				r.push(x)
			} while (--p);
			var A = e.u32(),
				S = e.u32();
			do {
				a.push(e.s32() / 65535)
			} while (--S);
			do {
				s.push(e.u8()), o.push(e.u32())
			} while (--A);
			var E = e.u32();
			do {
				u.push(e.u32())
			} while (--E);
			for (var T = e.u16(), C = 0; C < 4 * T; C++) l.push(e.u32());
			for (var R = 0; R < T; R++) {
				var I = l[4 * R];
				65535 != I && 65535 != l[4 * R + 1] && c.unshift({
					name: r[I],
					refMovieID: R
				})
			}
			d.sounds = i.map(function(t, e) {
				return r[t]
			}), d.movies = f;
			for (var L = 0; L < T; L++) {
				var F = 4 * L,
					P = l[F + 1];
				if (P < 32768) {
					var N = {
						id: L,
						type: "movie",
						movieStartCode: l[F + 2],
						movieEndCode: l[F + 3]
					};
					for (var O in c) if (c[O].refMovieID == L) {
						N.name = c[O].name.substr(1);
						break
					}
					f.push(N)
				} else if (65535 == P) {
					var M = {
						id: L,
						type: "image",
						name: r[l[F]].substr(1),
						offX: 65535 & l[F + 2],
						offY: 65535 & l[F + 3]
					};
					M.offX > 32767 && (M.offX -= 65536), M.offY > 32767 && (M.offY -= 65536), f.push(M)
				} else if (32768 == (61440 & P)) {
					var B = h[4095 & P],
						U = {
							id: L,
							type: "shape",
							vertexCount: B.vertexCount,
							indexCount: B.indexCount,
							index: _.slice(B.indexBuffer, B.indexCount),
							xy: a.slice(B.XYBuffer, 2 * B.vertexCount),
							uv: a.slice(B.UVBuffer, 2 * B.vertexCount),
							texture: B.texture && B.texture.toString("base64"),
							fillColor: 1 == B.styleType && B.fillColor
						};
					f.push(U)
				}
			}
			for (var V in f) if ("movie" == f[V].type) {
				f[V].frames = [];
				for (var D = f[V].movieStartCode + 4, Y = 1, H = u[f[V].movieStartCode + 1]; D != f[V].movieEndCode;) {
					var G = {
						frameId: Y++
					};
					65535 != H && (G.label = r[H]), G.instructions = [];
					for (var j = G.instructions, z = !0; z;) {
						var X = {},
							W = u[D++];
						if (2048 & W) throw console.log("FLSH Parser: ERROR Movie format not supported by OSSEngine"), new Error("FLSH Parser: ERROR Movie format not supported by OSSEngine");
						switch (W) {
						case 0:
							switch (X.type = "NextFrame", H = 65535 & u[D++], 65535 & u[D++]) {
							case 0:
								X.action = "StopMovie", D++;
								break;
							case 1:
								X.action = "gotoAndPlay", X.destFrameId = u[D++] + 2;
								break;
							case 2:
								X.action = "gotoAndStop", X.destFrameId = u[D++] + 2;
								break;
							default:
								D++
							}
							z = !1;
							break;
						case 1:
						case 4:
							X.type = "PlaceObject";
							var K = u[D++],
								q = u[D++],
								Z = u[D++];
							if (X.layer = u[D++], 4 == W && (X.type = "PlaceObjectClip", X.clipLayer = u[D++]), 65535 != K && (X.movieId = K), 65535 != q) {
								var J = {},
									Q = o[q];
								switch (s[q]) {
								case 3:
									J.a = a[Q++], J.d = a[Q++], J.b = a[Q++], J.c = a[Q++];
								case 1:
									J.tx = Math.round(a[Q++]), J.ty = Math.round(a[Q++]);
									break;
								case 2:
									J.a = a[Q++], J.d = a[Q++], J.tx = Math.round(a[Q++]), J.ty = Math.round(a[Q++]), J.b = 0, J.c = 0;
									break;
								case 0:
									J.a = 1, J.d = 1, J.tx = 0, J.ty = 0, J.b = 0, J.c = 0
								}
								for (var $ in J) J[$] > 32767 && (J[$] -= 65536), J[$] = Math.round(1e3 * J[$]) / 1e3;
								X.transform = J
							}
							if (65535 != Z) {
								var tt = [1, 1, 1, 1];
								if (0 != s[Z]) {
									var et = o[Z];
									tt = [a[et++], a[et++], a[et++], a[et++]].map(function(t) {
										return Math.round(1e3 * t) / 1e3
									})
								}
								X.color = tt
							}
							break;
						case 2:
							X.type = "RemoveObject", X.layer = u[D++];
							break;
						case 3:
							X.type = "PlaySound", X.soundId = u[D++];
							break;
						default:
							console.log("FLSH Parser: ERROR unsupported opcode")
						}
						j.push(X)
					}
					f[V].frames.push(G)
				}
				delete f[V].movieStartCode, delete f[V].movieEndCode
			}
			return d
		}
	}, {
		146: 146
	}],
	78: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(5)),
			a = n(t(7)),
			s = n(t(17)),
			o = n(t(10)),
			u = n(t(11)),
			l = function(t) {
				function e(t, i) {
					var n;
					return (0, r.
				default)(this, e), (n = (0, s.
				default)(this, (0, o.
				default)(e).call(this, i))).timg = t, n
				}
				return (0, u.
			default)(e, t), (0, a.
			default)(e, [{
					key: "getAssetU",
					value: function() {
						return this.timg.u
					}
				}, {
					key: "getAssetV",
					value: function() {
						return this.timg.v
					}
				}, {
					key: "getAssetWidth",
					value: function() {
						return this.timg.width
					}
				}, {
					key: "getAssetHeight",
					value: function() {
						return this.timg.height
					}
				}, {
					key: "getTextureWidth",
					value: function() {
						return this.timg.texbWidth
					}
				}, {
					key: "getTextureHeight",
					value: function() {
						return this.timg.texbHeight
					}
				}, {
					key: "getVertices",
					value: function() {
						return this.timg.getVertex()
					}
				}, {
					key: "getUV",
					value: function() {
						return this.timg.getUV()
					}
				}]), e
			}(t(75));
		e.exports = l
	}, {
		10: 10,
		11: 11,
		12: 12,
		17: 17,
		5: 5,
		7: 7,
		75: 75
	}],
	77: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(5)),
			a = n(t(7)),
			s = n(t(17)),
			o = n(t(10)),
			u = n(t(11)),
			l = function(t) {
				function e(t, i) {
					var n;
					return (0, r.
				default)(this, e), (n = (0, s.
				default)(this, (0, o.
				default)(e).call(this, i))).image = t, n
				}
				return (0, u.
			default)(e, t), (0, a.
			default)(e, [{
					key: "getAssetWidth",
					value: function() {
						return this.image.width
					}
				}, {
					key: "getAssetHeight",
					value: function() {
						return this.image.height
					}
				}]), e
			}(t(75));
		e.exports = l
	}, {
		10: 10,
		11: 11,
		12: 12,
		17: 17,
		5: 5,
		7: 7,
		75: 75
	}],
	76: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(5)),
			a = n(t(7)),
			s = n(t(17)),
			o = n(t(10)),
			u = n(t(11)),
			l = t(75),
			c = t(67),
			f = function(t) {
				function e(t, i) {
					var n;
					return (0, r.
				default)(this, e), i || (i = c.getInstance().createTexture(t)), (n = (0, s.
				default)(this, (0, o.
				default)(e).call(this, i))).canvas = t, n
				}
				return (0, u.
			default)(e, t), (0, a.
			default)(e, [{
					key: "getAssetWidth",
					value: function() {
						return this.canvas.width
					}
				}, {
					key: "getAssetHeight",
					value: function() {
						return this.canvas.height
					}
				}, {
					key: "getCanvas",
					value: function() {
						return this.canvas
					}
				}, {
					key: "updateTexture",
					value: function() {
						c.getInstance().updateTexture(this.__texture, this.canvas)
					}
				}]), e
			}(l);
		e.exports = f
	}, {
		10: 10,
		11: 11,
		12: 12,
		17: 17,
		5: 5,
		67: 67,
		7: 7,
		75: 75
	}],
	61: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(5)),
			a = n(t(7)),
			s = n(t(17)),
			o = n(t(10)),
			u = n(t(9)),
			l = n(t(11)),
			c = n(t(3)),
			f = t(65),
			h = t(66),
			_ = t(79);

		function d(t) {
			var e = t.length,
				i = t.timeshift,
				n = t.pingpong,
				r = function(t, r, a) {
					var s = [
						[0, r]
					];
					return i && s.push([i, r]), s.push([i + e, a]), n && (s.push([i + 2 * e, r]), i && s.push([2 * i + 2 * e, r])), {
						target: t,
						keys: s
					}
				},
				a = [];
			if (t.fromx != t.tox && a.push(r("SPL_MODIFY_X", t.fromx, t.tox)), t.fromy != t.toy && a.push(r("SPL_MODIFY_Y", t.fromy, t.toy)), t.fromalpha != t.toalpha && a.push(r("SPL_MODIFY_A", t.fromalpha / 255, t.toalpha / 255)), t.fromscalex != t.toscalex && a.push(r("SPL_MODIFY_XSCALE", t.fromscalex, t.toscalex)), t.fromscaley != t.toscaley && a.push(r("SPL_MODIFY_YSCALE", t.fromscaley, t.toscaley)), t.fromrotation != t.torotation && a.push(r("SPL_MODIFY_ROT", t.fromrotation, t.torotation)), t.fromcolor != t.tocolor) {
				var s = _.toRGB(t.fromcolor),
					o = _.toRGB(t.tocolor);
				a.push(r("SPL_MODIFY_R", s[0] / 255, o[0] / 255)), a.push(r("SPL_MODIFY_G", s[1] / 255, o[1] / 255)), a.push(r("SPL_MODIFY_B", s[2] / 255, o[2] / 255))
			}
			return a
		}
		var p = function(t) {
				function e(t, i, n, a) {
					var u, l;
					(0, r.
				default)(this, e);
					for (var f = arguments.length, _ = new Array(f > 4 ? f - 4 : 0), p = 4; p < f; p++) _[p - 4] = arguments[p];
					(l = (0, s.
				default)(this, (u = (0, o.
				default)(e)).call.apply(u, [this, t, i, n].concat(_)))).states = {};
					var v = !0,
						g = !1,
						m = void 0;
					try {
						for (var y, b = a[Symbol.iterator](); !(v = (y = b.next()).done); v = !0) {
							var k = y.value;
							l.states[k.type] = {
								json: k,
								spline: new h((0, c.
							default)((0, c.
							default)(l)), d(k))
							}
						}
					} catch (w) {
						g = !0, m = w
					} finally {
						try {
							v || null == b.
							return ||b.
							return ()
						} finally {
							if (g) throw m
						}
					}
					return l.current_anim = null, l.loop = !1, l
				}
				return (0, l.
			default)(e, t), (0, a.
			default)(e, [{
					key: "hasAnim",
					value: function(t) {
						return !!this.states[t]
					}
				}, {
					key: "setAnim",
					value: function(t) {
						this.animPlay(this.states[t]), this.current_anim = t
					}
				}, {
					key: "skipAnim",
					value: function() {
						this.animStop()
					}
				}, {
					key: "isAnim",
					value: function(t) {
						return t ? this.current_anim == t : this.anim_is_playing
					}
				}, {
					key: "__onAnimEnd",
					value: function() {
						if (this.loop)(0, u.
					default)((0, o.
					default)(e.prototype), "animPlay", this).call(this);
						else {
							var t = this.current_anim;
							this.anim_is_playing = !1, this.current_anim = null, this.loop = !1, this.form && this.form.anim_end_callback(t)
						}
					}
				}, {
					key: "animPlay",
					value: function(t) {
						this.animStop(), this.spline = t.spline, this.x = t.json.fromx, this.y = t.json.fromy, this.scaleX = t.json.fromscalex, this.scaleY = t.json.fromscaley, this.rot = t.json.fromrotation, this.alpha = t.json.fromalpha, this.color = t.json.fromcolor, (0, u.
					default)((0, o.
					default)(e.prototype), "animPlay", this).call(this), this.loop = t.json.loop
					}
				}, {
					key: "animStop",
					value: function() {
						(0, u.
					default)((0, o.
					default)(e.prototype), "animStop", this).call(this), this.current_anim = null, this.loop = !1
					}
				}], [{
					key: "fromJson",
					value: function(t) {
						return new e(t.priority, t.x, t.y, t.states, t.xscale, t.yscale, t.rotation, t.color, t.alpha, t.visible)
					}
				}]), e
			}(f);
		e.exports = p
	}, {
		10: 10,
		11: 11,
		12: 12,
		17: 17,
		3: 3,
		5: 5,
		65: 65,
		66: 66,
		7: 7,
		79: 79,
		9: 9
	}],
	79: [function(t, e, i) {
		"use strict";
		var n = t(45).sprintf;

		function r(t) {
			return "string" == typeof t ? ("#" == t[0] && (t = t.substr(1)), t = parseInt(t, 16)) : t instanceof Array && (t = (t[0] << 16) + (t[1] << 8) + t[2]), t
		}
		function a(t) {
			return t instanceof Array ? t : ((t = r(t)) < 0 && (t += 16777216), [t >> 16, t >> 8 & 255, 255 & t])
		}
		e.exports = {
			toString: function(t) {
				return "number" == typeof t ? (t < 0 && (t += 16777216), t = n("#%06x", t)) : t instanceof Array && (t = n("#%02x%02x%02x", 255 * t[0], 255 * t[1], 255 * t[2])), t
			},
			toNumber: r,
			toRGB: a,
			toColorTransform: function(t, e) {
				return (t = a(t).map(function(t) {
					return t / 255
				})).push(e / 255), t
			},
			multiply: function(t, e) {
				return t = a(t).map(function(t) {
					return t / 255
				}), e = a(e), r([t[0] * e[0], t[1] * e[1], t[2] * e[2]])
			}
		}
	}, {
		45: 45
	}],
	65: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(17)),
			a = n(t(10)),
			s = n(t(9)),
			o = n(t(11)),
			u = n(t(5)),
			l = n(t(7)),
			c = t(66),
			f = t(46).MatrixLT,
			h = t(79),
			_ = t(67),
			d = 0,
			p = function(t) {
				function e() {
					var t, i;
					(0, u.
				default)(this, e);
					for (var n = arguments.length, s = new Array(n), o = 0; o < n; o++) s[o] = arguments[o];
					return (i = (0, r.
				default)(this, (t = (0, a.
				default)(e)).call.apply(t, [this].concat(s)))).spline = null, i.anim_end_callback = null, i.anim_is_playing = !1, i
				}
				return (0, o.
			default)(e, t), (0, l.
			default)(e, [{
					key: "__kill",
					value: function() {
						return this.spline && this.spline.stop(), (0, s.
					default)((0, a.
					default)(e.prototype), "__kill", this).call(this)
					}
				}, {
					key: "setAnimSpline",
					value: function(t) {
						this.spline && this.spline.stop(), this.spline = new c(this, t)
					}
				}, {
					key: "setAnimCallback",
					value: function(t) {
						this.anim_end_callback = t
					}
				}, {
					key: "isAnim",
					value: function() {
						return this.anim_is_playing
					}
				}, {
					key: "__onAnimEnd",
					value: function() {
						this.anim_is_playing = !1, this.anim_end_callback && this.anim_end_callback()
					}
				}, {
					key: "animPlay",
					value: function() {
						var t = this;
						this.spline && (this.spline.play(function() {
							t.__onAnimEnd()
						}), this.anim_is_playing = !0)
					}
				}, {
					key: "animStop",
					value: function() {
						this.spline && this.spline.stop(), this.anim_is_playing = !1
					}
				}]), e
			}(function() {
				function t(e, i, n, r, a, s, o, l, c) {
					(0, u.
				default)(this, t), this._parent = _.getInstance().root, this._parent.addNode(this), this._child = new Set, this.id = d++, this.order = e, this.__x = i || 0, this.__y = n || 0, this.__scaleX = r || 1, this.__scaleY = a || 1, this.__rot = s || 0, this.__color = o ? h.toNumber(o) : 16777215, this.__alpha = l || 255, this.__visible = void 0 === c || !! c, this.treeMatrix = new f, this.dirty = !0, this.__needRecalculate = !0, this.__needRecalculateAsset = !1, this.task = null, this.useMatrix = !1, this.matrix = new f, _.getInstance().addToRecomputeList(this)
				}
				return (0, l.
			default)(t, [{
					key: "__killSub",
					value: function() {
						var t = !0,
							e = !1,
							i = void 0;
						try {
							for (var n, r = new Set(this._child)[Symbol.iterator](); !(t = (n = r.next()).done); t = !0) n.value.__kill()
						} catch (a) {
							e = !0, i = a
						} finally {
							try {
								t || null == r.
								return ||r.
								return ()
							} finally {
								if (e) throw i
							}
						}
					}
				}, {
					key: "__kill",
					value: function() {
						this.task, this.__killSub(), this._parent && this._parent.removeNode(this), this.task = null, _.getInstance().removeFromRecomputeList(this)
					}
				}, {
					key: "setUseMatrix",
					value: function(t) {
						!this.useMatrix && t ? (this.useMatrix = !0, this.matrix = new f, this.__markDirty()) : this.useMatrix && !t && (this.useMatrix = !1, this.matrix = new f, this.__markRecalculate())
					}
				}, {
					key: "setMatrix",
					value: function(t, e, i, n, r, a) {
						t = "number" == typeof t ? t : this.matrix.a, e = "number" == typeof e ? e : this.matrix.b, i = "number" == typeof i ? i : this.matrix.c, n = "number" == typeof n ? n : this.matrix.d, r = "number" == typeof r ? r : this.matrix.e, a = "number" == typeof a ? a : this.matrix.f, this.matrix = f.from(t, e, i, n, r, a), this.__markDirty()
					}
				}, {
					key: "getNode",
					value: function() {
						return this
					}
				}, {
					key: "addNode",
					value: function(t) {
						t._parent && t._parent.removeNode(t), this._child.add(t), t._parent = this
					}
				}, {
					key: "removeNode",
					value: function(t) {
						this._child.delete(t), t._parent = null
					}
				}, {
					key: "setTask",
					value: function(t) {
						this.task = t
					}
				}, {
					key: "__markDirty",
					value: function() {
						if (!this.dirty) {
							this.dirty = !0;
							var t = !0,
								e = !1,
								i = void 0;
							try {
								for (var n, r = this._child[Symbol.iterator](); !(t = (n = r.next()).done); t = !0) n.value.__markDirty()
							} catch (a) {
								e = !0, i = a
							} finally {
								try {
									t || null == r.
									return ||r.
									return ()
								} finally {
									if (e) throw i
								}
							}
						}
					}
				}, {
					key: "__markRecalculate",
					value: function() {
						this.__markDirty(), this.__needRecalculate = !0
					}
				}, {
					key: "__markRecalculateAsset",
					value: function() {
						this.dirty = !0, this.__needRecalculateAsset = !0
					}
				}, {
					key: "__recalculateMatrix",
					value: function() {
						this.dirty && (this.__needRecalculate && !this.useMatrix && (this.matrix = (new f).translate(this.x, this.y).rotate(this.rot * Math.PI / 180).scale(this.scaleX, this.scaleY)), this.treeMatrix = this._parent.treeMatrix.clone().multiply(this.matrix), this.treeColor = this.color, 16777215 != this._parent.treeColor && (this.treeColor = h.multiply(this._parent.treeColor, this.color)), this.treeAlpha = this._parent.treeAlpha * this.alpha / 255, this.treeVisible = this.visible && this._parent.treeVisible, this.__applyMatrixToAsset(), this.dirty = !1, this.__needRecalculate = !1, this.__needRecalculateAsset = !1)
					}
				}, {
					key: "__applyMatrixToAsset",
					value: function() {}
				}, {
					key: "x",
					get: function() {
						return this.__x
					},
					set: function(t) {
						this.__x = t, this.__markRecalculate()
					}
				}, {
					key: "y",
					get: function() {
						return this.__y
					},
					set: function(t) {
						this.__y = t, this.__markRecalculate()
					}
				}, {
					key: "scaleX",
					get: function() {
						return this.__scaleX
					},
					set: function(t) {
						this.__scaleX = t, this.__markRecalculate()
					}
				}, {
					key: "scaleY",
					get: function() {
						return this.__scaleY
					},
					set: function(t) {
						this.__scaleY = t, this.__markRecalculate()
					}
				}, {
					key: "rot",
					get: function() {
						return this.__rot
					},
					set: function(t) {
						this.__rot = t, this.__markRecalculate()
					}
				}, {
					key: "color",
					get: function() {
						return this.__color
					},
					set: function(t) {
						this.__color = h.toNumber(t), this.__markRecalculate()
					}
				}, {
					key: "alpha",
					get: function() {
						return this.__alpha
					},
					set: function(t) {
						this.__alpha = t, this.__markRecalculate()
					}
				}, {
					key: "visible",
					get: function() {
						return this.__visible
					},
					set: function(t) {
						this.__visible = t, this.__markRecalculate()
					}
				}], [{
					key: "fromJson",
					value: function(e) {
						return new t(e.priority, e.x, e.y, e.xscale, e.yscale, e.rotation, e.color, e.alpha, e.visible)
					}
				}]), t
			}());
		e.exports = p
	}, {
		10: 10,
		11: 11,
		12: 12,
		17: 17,
		46: 46,
		5: 5,
		66: 66,
		67: 67,
		7: 7,
		79: 79,
		9: 9
	}],
	66: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(21)),
			a = n(t(5)),
			s = n(t(7)),
			o = t(67),
			u = t(79),
			l = 0,
			c = function() {
				function t(e) {
					(0, a.
				default)(this, t), this.keys = e.sort(function(t, e) {
						return t[l] - e[l]
					})
				}
				return (0, s.
			default)(t, [{
					key: "get",
					value: function(t) {
						var e, i, n = !0,
							r = !1,
							a = void 0;
						try {
							for (var s, o = this.keys[Symbol.iterator](); !(n = (s = o.next()).done); n = !0) {
								var u = s.value;
								if (u[l] == t) return u[1];
								if (u[l] > t) {
									i = u;
									break
								}
								e = u
							}
						} catch (h) {
							r = !0, a = h
						} finally {
							try {
								n || null == o.
								return ||o.
								return ()
							} finally {
								if (r) throw a
							}
						}
						if (!i) return e[1];
						var c = t - e[l],
							f = i[l] - e[l];
						return e[1] + (i[1] - e[1]) * (c / f)
					}
				}, {
					key: "getFinal",
					value: function() {
						return this.keys[this.keys.length - 1][1]
					}
				}, {
					key: "length",
					value: function() {
						return this.keys[this.keys.length - 1][l]
					}
				}]), t
			}();

		function f(t, e, i) {
			var n = -1,
				r = -1,
				a = -1,
				s = !1,
				o = !0,
				l = !1,
				c = void 0;
			try {
				for (var f, h = e[Symbol.iterator](); !(o = (f = h.next()).done); o = !0) {
					var _ = f.value,
						d = "number" == typeof i ? _.keys.get(i) : _.keys.getFinal();
					switch (_.target) {
					case "SPL_MODIFY_X":
						t.x = d;
						break;
					case "SPL_MODIFY_Y":
						t.y = d;
						break;
					case "SPL_MODIFY_SCALE":
						t.scaleX = d, t.scaleY = d;
						break;
					case "SPL_MODIFY_R":
						n = 255 * d, s = !0;
						break;
					case "SPL_MODIFY_G":
						r = 255 * d, s = !0;
						break;
					case "SPL_MODIFY_B":
						a = 255 * d, s = !0;
						break;
					case "SPL_MODIFY_A":
						t.alpha = 255 * d;
						break;
					case "SPL_MODIFY_ROT":
						t.rot = d;
						break;
					case "SPL_MODIFY_XSCALE":
						t.scaleX = d;
						break;
					case "SPL_MODIFY_YSCALE":
						t.scaleY = d
					}
				}
			} catch (v) {
				l = !0, c = v
			} finally {
				try {
					o || null == h.
					return ||h.
					return ()
				} finally {
					if (l) throw c
				}
			}
			if (s) {
				var p = u.toRGB(t.color); - 1 == n && (n = p[0]), -1 == r && (r = p[1]), -1 == a && (a = p[2]), t.color = u.toNumber([n, r, a])
			}
		}
		var h = function() {
				function t(e, i) {
					(0, a.
				default)(this, t), this.node = e, this.modifiers = [];
					var n = !0,
						s = !1,
						o = void 0;
					try {
						for (var u, l = i[Symbol.iterator](); !(n = (u = l.next()).done); n = !0) {
							var f = u.value;
							this.modifiers.push({
								target: f.target,
								keys: new c(f.keys)
							})
						}
					} catch (h) {
						s = !0, o = h
					} finally {
						try {
							n || null == l.
							return ||l.
							return ()
						} finally {
							if (s) throw o
						}
					}
					this.pos = 0, this.length = Math.max.apply(Math, (0, r.
				default)(this.modifiers.map(function(t) {
						return t.keys.length()
					}))), this.playing = !1, this.anim_callback = nothing
				}
				return (0, s.
			default)(t, [{
					key: "play",
					value: function(t) {
						this.stop(), this.playing = !0, this.pos = 0, this.anim_callback = t, o.getInstance().addAnim(this)
					}
				}, {
					key: "update",
					value: function(t) {
						if (this.pos += t, this.pos >= this.length) {
							var e = this.anim_callback;
							this.stop(), e()
						} else f(this.node, this.modifiers, this.pos)
					}
				}, {
					key: "stop",
					value: function() {
						this.playing && this.pos && (o.getInstance().removeAnim(this), f(this.node, this.modifiers, null), this.anim_callback = nothing, this.playing = !1)
					}
				}]), t
			}();
		e.exports = h
	}, {
		12: 12,
		21: 21,
		5: 5,
		67: 67,
		7: 7,
		79: 79
	}],
	62: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(21)),
			a = n(t(19)),
			s = n(t(5)),
			o = n(t(7)),
			u = n(t(17)),
			l = n(t(10)),
			c = n(t(9)),
			f = n(t(11)),
			h = t(65),
			_ = (t(75), t(67)),
			d = t(60),
			p = t(79),
			v = t(46).MatrixLT,
			g = function(t) {
				function e() {
					var t, i;
					(0, s.
				default)(this, e);
					for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
					return (i = (0, u.
				default)(this, (t = (0, l.
				default)(e)).call.apply(t, [this].concat(r)))).asset = null, i.asset_wh = null, i.asset_verticies = null, i.texture_uv = null, i.texture_xywh = null, i
				}
				return (0, f.
			default)(e, t), (0, o.
			default)(e, [{
					key: "__kill",
					value: function() {
						return this.asset && _.getInstance().removeItem(this), (0, c.
					default)((0, l.
					default)(e.prototype), "__kill", this).call(this)
					}
				}, {
					key: "changeAsset",
					value: function(t) {
						this.asset && (_.getInstance().removeItem(this), this.asset = null), t && (("string" == typeof t || t instanceof window.Image) && (t = d.get(t)), this.asset = t, _.getInstance().addItem(this), this.__markRecalculateAsset())
					}
				}, {
					key: "__calcVerticiesFromAssetWH",
					value: function() {
						if (this.asset_wh) {
							var t = (0, a.
						default)(this.asset_wh, 2),
								e = t[0],
								i = t[1],
								n = 1,
								r = 1; - 1 != e && (n = e / this.asset.getAssetWidth()), -1 != i && (r = i / this.asset.getAssetHeight()), this.asset_verticies = this.asset.getVertices().map(function(t, e) {
								return e % 2 == 0 ? t * n : t * r
							})
						}
					}
				}, {
					key: "__calcTextureUVFromTextureXYWH",
					value: function() {
						if (this.texture_xywh) {
							var t = (0, a.
						default)(this.texture_xywh, 4),
								e = t[0],
								i = t[1],
								n = t[2],
								r = t[3],
								s = this.asset.getTextureWidth(),
								o = this.asset.getTextureHeight(),
								u = this.asset.getAssetWidth(),
								l = this.asset.getAssetHeight(),
								c = this.asset.getAssetU(),
								f = this.asset.getAssetV(); - 1 == n && (n = u), -1 == r && (r = l);
							var h = (new v).scale(n / u, r / l).translate(e / s, i / o);
							this.texture_uv = [];
							for (var _ = this.asset.getUV(), d = 0; d < _.length / 2; ++d) {
								var p = h.applyToPoint(_[2 * d] - c, _[2 * d + 1] - f),
									g = p.x,
									m = p.y;
								this.texture_uv.push(g + c, m + f)
							}
						}
					}
				}, {
					key: "__computeVerticies",
					value: function() {
						for (var t = this.asset_verticies ? this.asset_verticies.slice(0) : this.asset.getVertices().slice(0), e = 0; e < t.length / 2; ++e) {
							var i = this.treeMatrix.applyToPoint(t[2 * e], t[2 * e + 1]),
								n = i.x,
								r = i.y;
							t[2 * e] = n / 1136 * 2 - 1, t[2 * e + 1] = 1 - r / 640 * 2
						}
						this.computedVerticies = t
					}
				}, {
					key: "__computeColorTransfrom",
					value: function() {
						var t = [];
						if (this.vertex_colors) {
							var e = !0,
								i = !1,
								n = void 0;
							try {
								for (var s, o = this.vertex_colors[Symbol.iterator](); !(e = (s = o.next()).done); e = !0) {
									var u = (0, a.
								default)(s.value, 2),
										l = u[0],
										c = u[1];
									l = p.multiply(this.treeColor, l), c = c * this.treeAlpha / 255, t.push.apply(t, (0, r.
								default)(p.toColorTransform(l, c)))
								}
							} catch (_) {
								i = !0, n = _
							} finally {
								try {
									e || null == o.
									return ||o.
									return ()
								} finally {
									if (i) throw n
								}
							}
						} else for (var f = p.toColorTransform(this.treeColor, this.treeAlpha), h = 0; h < this.computedVerticies.length / 2; ++h) t.push.apply(t, (0, r.
					default)(f));
						this.computedColorTransform = t
					}
				}, {
					key: "__applyMatrixToAsset",
					value: function() {
						this.asset && (this.__needRecalculateAsset && (this.__calcVerticiesFromAssetWH(), this.__calcTextureUVFromTextureXYWH()), this.__computeVerticies(), this.__computeColorTransfrom())
					}
				}, {
					key: "setVertices",
					value: function(t) {
						this.__markRecalculateAsset(), this.asset_wh = null, this.asset_verticies = t
					}
				}, {
					key: "setAssetWH",
					value: function(t, e) {
						this.__markRecalculateAsset(), this.asset_verticies = null, this.asset_wh = -1 != t || -1 != e ? [t, e] : null
					}
				}, {
					key: "setTextureUV",
					value: function(t) {
						this.__markRecalculateAsset(), this.texture_xywh = null, this.texture_uv = t
					}
				}, {
					key: "setTextureXYWH",
					value: function(t, e, i, n) {
						this.__markRecalculateAsset(), this.texture_uv = null, this.texture_xywh = null != t ? [t, e, i, n] : null
					}
				}, {
					key: "setColors",
					value: function(t) {
						if (this.__markRecalculateAsset(), t) for (this.vertex_colors = []; t.length;) {
							var e = t.shift(),
								i = t.shift();
							this.vertex_colors.push([i, e])
						} else this.vertex_colors = null
					}
				}, {
					key: "getAsset",
					value: function() {
						return this.asset
					}
				}, {
					key: "shouldDraw",
					value: function() {
						return this.treeVisible && 0 != this.treeAlpha
					}
				}, {
					key: "getComputedVerticies",
					value: function() {
						return this.computedVerticies
					}
				}, {
					key: "getColorTransform",
					value: function() {
						return this.computedColorTransform
					}
				}, {
					key: "getTextureUV",
					value: function() {
						return this.texture_uv || this.asset.getUV()
					}
				}], [{
					key: "fromJson",
					value: function(t) {
						var i = new e(t.priority, t.x, t.y, t.xscale, t.yscale, t.rotation, t.color, t.alpha, t.visible);
						return i.changeAsset(t.
					default), i
					}
				}]), e
			}(h);
		e.exports = g
	}, {
		10: 10,
		11: 11,
		12: 12,
		17: 17,
		19: 19,
		21: 21,
		46: 46,
		5: 5,
		60: 60,
		65: 65,
		67: 67,
		7: 7,
		75: 75,
		79: 79,
		9: 9
	}],
	75: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(5)),
			a = n(t(7)),
			s = function() {
				function t(e) {
					(0, r.
				default)(this, t), this.__texture = e
				}
				return (0, a.
			default)(t, [{
					key: "getTexture",
					value: function() {
						return this.__texture
					}
				}, {
					key: "getAssetU",
					value: function() {
						return 0
					}
				}, {
					key: "getAssetV",
					value: function() {
						return 0
					}
				}, {
					key: "getAssetWidth",
					value: function() {
						throw new Error("getAssetWidth() not implemented")
					}
				}, {
					key: "getAssetHeight",
					value: function() {
						throw new Error("getAssetHeight() not implemented")
					}
				}, {
					key: "getVertices",
					value: function() {
						var t = this.getAssetWidth(),
							e = this.getAssetHeight();
						return [0, 0, t, 0, 0, e, 0, e, t, 0, t, e]
					}
				}, {
					key: "getUV",
					value: function() {
						return [0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]
					}
				}, {
					key: "getTextureWidth",
					value: function() {
						return this.getAssetWidth()
					}
				}, {
					key: "getTextureHeight",
					value: function() {
						return this.getAssetHeight()
					}
				}]), t
			}();
		e.exports = s
	}, {
		12: 12,
		5: 5,
		7: 7
	}],
	63: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(5)),
			a = n(t(7)),
			s = n(t(17)),
			o = n(t(10)),
			u = n(t(9)),
			l = n(t(11)),
			c = n(t(3)),
			f = t(62),
			h = t(69),
			_ = t(84),
			d = 0,
			p = function(t) {
				function e(t, i, n, a, u, l, f, _, p, v, g, m) {
					var y, b;
					(0, r.
				default)(this, e);
					for (var k = arguments.length, w = new Array(k > 12 ? k - 12 : 0), x = 12; x < k; x++) w[x - 12] = arguments[x];
					return (b = (0, s.
				default)(this, (y = (0, o.
				default)(e)).call.apply(y, [this, t, i, n].concat(w)))).sx = a, b.sy = u, b.sw = l, b.sh = f, b.sounddown = g, b.soundup = m, _ = _ || blank, p = p || blank, v = v || blank, b.assets = [_, p, v], b.enabled = !0, b.current_asset = d, b.callback = nothing, h.getInstance().addTouchItem((0, c.
				default)((0, c.
				default)(b))), b.changeAsset(_), b
				}
				return (0, l.
			default)(e, t), (0, a.
			default)(e, [{
					key: "__kill",
					value: function() {
						return h.getInstance().removeTouchItem(this), (0, u.
					default)((0, o.
					default)(e.prototype), "__kill", this).call(this)
					}
				}, {
					key: "internalSetAsset",
					value: function(t) {
						this.changeAsset(this.assets[t]), this.current_asset = t
					}
				}, {
					key: "detect",
					value: function(t, e) {
						return !(!this.treeVisible || !this.enabled) && t >= this.clickX && t <= this.clickX + this.sw && e >= this.clickY && e <= this.clickY + this.sh
					}
				}, {
					key: "touch",
					value: function(t) {
						this.treeVisible && this.enabled && (2 == t.type ? (this.soundup && _.playSE(this.soundup), this.internalSetAsset(d), this.callback("ACTION_RELEASE"), this.callback("ACTION_CLICK")) : 0 == t.type && (this.sounddown && _.playSE(this.sounddown), this.internalSetAsset(1), this.callback("ACTION_PUSH")))
					}
				}, {
					key: "cancel",
					value: function(t) {
						this.enabled && (this.internalSetAsset(d), this.callback("ACTION_RELEASE"))
					}
				}, {
					key: "setEnabled",
					value: function(t) {
						this.enabled = t, this.internalSetAsset(t ? d : 2)
					}
				}, {
					key: "getEnabled",
					value: function() {
						return this.enabled
					}
				}, {
					key: "setAsset",
					value: function(t, e) {
						this.assets[e] = t, e == this.current_asset && this.changeAsset(t)
					}
				}, {
					key: "setCallback",
					value: function(t) {
						this.callback = t
					}
				}, {
					key: "setClick",
					value: function(t, e, i, n) {
						this.sx = t, this.sy = e, this.sw = i, this.sh = n
					}
				}, {
					key: "clickX",
					get: function() {
						return this.treeMatrix.e - 88 + this.sx
					}
				}, {
					key: "clickY",
					get: function() {
						return this.treeMatrix.f + this.sy
					}
				}], [{
					key: "fromJson",
					value: function(t) {
						return t.sounddown && ".mp3" != t.sounddown.substr(t.sounddown.length - 4) && (t.sounddown += ".mp3"), t.soundup && ".mp3" != t.soundup.substr(t.soundup.length - 4) && (t.soundup += ".mp3"), new e(t.priority, t.x, t.y, t.sx, t.sy, t.sw, t.sh, t.
					default, t.select, t.disable, t.sounddown, t.soundup, t.xscale, t.yscale, t.rotation, t.color, t.alpha, t.visible)
					}
				}]), e
			}(f);
		e.exports = p
	}, {
		10: 10,
		11: 11,
		12: 12,
		17: 17,
		3: 3,
		5: 5,
		62: 62,
		69: 69,
		7: 7,
		84: 84,
		9: 9
	}],
	84: [function(t, e, i) {
		(function(i) {
			"use strict";
			var n = i.config || {},
				r = {
					webaudio: t(86),
					nosound: t(85)
				},
				a = !1,
				s = window.AudioContext || window.webkitAudioContext;
			if (n.noLoadSound || window.__sifceTmpNoLoadSound) a = r.nosound;
			else if (s) a = r.webaudio;
			else {
				if (n.breakOnNoWebAudio && !window.__sifceTmpContinueOnNoSound) throw window.alert("Your browser doesn't support Web Audio!"), new Error("Web Audio not supported");
				a = r.nosound
			}
			a.init(), e.exports = a
		}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
	}, {
		85: 85,
		86: 86
	}],
	69: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(5)),
			a = n(t(7)),
			s = n(t(17)),
			o = n(t(10)),
			u = n(t(11)),
			l = t(73),
			c = t(71),
			f = null,
			h = function(t) {
				function e() {
					var t;
					return (0, r.
				default)(this, e), (t = (0, s.
				default)(this, (0, o.
				default)(e).call(this, l.phase.P_UIPREV))).touch_items = [], t.trackedTouch = {}, t
				}
				return (0, u.
			default)(e, t), (0, a.
			default)(e, [{
					key: "addTouchItem",
					value: function(t) {
						this.touch_items.push(t)
					}
				}, {
					key: "removeTouchItem",
					value: function(t) {
						this.touch_items.splice(this.touch_items.indexOf(t), 1)
					}
				}, {
					key: "hookQueue",
					value: function(t) {
						c.getInstance().hook = t || nothing
					}
				}, {
					key: "__execute",
					value: function(t) {
						var e = c.getInstance(),
							i = !0,
							n = !1,
							r = void 0;
						try {
							for (var a, s = e.get()[Symbol.iterator](); !(i = (a = s.next()).done); i = !0) {
								var o = a.value;
								this.touchCallback(o)
							}
						} catch (u) {
							n = !0, r = u
						} finally {
							try {
								i || null == s.
								return ||s.
								return ()
							} finally {
								if (n) throw r
							}
						}
					}
				}, {
					key: "touchCallback",
					value: function(t) {
						if (0 == t.type) {
							var e = this.touch_items.slice(0).sort(function(t, e) {
								return t.order === e.order ? e.id - t.id : e.order - t.order
							}),
								i = !0,
								n = !1,
								r = void 0;
							try {
								for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done); i = !0) {
									var o = a.value;
									if (o.detect(t.x, t.y)) return this.trackedTouch[t.id] = o, void o.touch(t)
								}
							} catch (l) {
								n = !0, r = l
							} finally {
								try {
									i || null == s.
									return ||s.
									return ()
								} finally {
									if (n) throw r
								}
							}
						} else {
							var u = this.trackedTouch[t.id];
							u && (u.detect(t.x, t.y) ? (u.touch(t), 2 == t.type && delete this.trackedTouch[t.id]) : (u.cancel(t), delete this.trackedTouch[t.id]))
						}
					}
				}, {
					key: "__die",
					value: function() {
						f = null
					}
				}]), e
			}(l.BaseTask);
		e.exports = {
			init: function() {
				f = new h
			},
			getInstance: function() {
				return f
			}
		}
	}, {
		10: 10,
		11: 11,
		12: 12,
		17: 17,
		5: 5,
		7: 7,
		71: 71,
		73: 73
	}],
	64: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(21)),
			a = n(t(3)),
			s = n(t(5)),
			o = n(t(7)),
			u = n(t(17)),
			l = n(t(10)),
			c = n(t(9)),
			f = n(t(11)),
			h = t(65),
			_ = t(62),
			d = t(60),
			p = t(67),
			v = t(84),
			g = function(t) {
				function e(t, i, n) {
					var r;
					return (0, s.
				default)(this, e), (r = (0, u.
				default)(this, (0, l.
				default)(e).call(this))).offX = i || 0, r.offY = n || 0, r.changeAsset(t), r.setUseMatrix(!0), r
				}
				return (0, f.
			default)(e, t), (0, o.
			default)(e, [{
					key: "setMatrix",
					value: function() {
						for (var t, i = arguments.length, n = new Array(i), r = 0; r < i; r++) n[r] = arguments[r];
						(t = (0, c.
					default)((0, l.
					default)(e.prototype), "setMatrix", this)).call.apply(t, [this].concat(n)), this.matrix = this.matrix.translate(this.offX, this.offY)
					}
				}, {
					key: "setColor",
					value: function(t, e, i, n) {
						this.alpha = 255 * n, this.color = [255 * t, 255 * e, 255 * i]
					}
				}]), e
			}(_),
			m = function(t) {
				function e(t, i, n, r, o) {
					var c;
					return (0, s.
				default)(this, e), (c = (0, u.
				default)(this, (0, l.
				default)(e).call(this, n, r, o))).order = t, c.isPlaying = !0, c.frameLen = i, c.pos = 0, c.endCallback = null, c.frameCallback = {}, p.getInstance().addAnim((0, a.
				default)((0, a.
				default)(c))), c
				}
				return (0, f.
			default)(e, t), (0, o.
			default)(e, [{
					key: "__kill",
					value: function() {
						p.getInstance().removeAnim(this), (0, c.
					default)((0, l.
					default)(e.prototype), "__kill", this).call(this)
					}
				}, {
					key: "update",
					value: function(t) {
						var e = Math.floor(this.pos / this.frameLen);
						this.pos += t;
						for (var i = Math.floor(this.pos / this.frameLen) - e; i--;) this.isPlaying ? this.nextFrame() : this.updateSub()
					}
				}, {
					key: "gotoFrame",
					value: function(t) {
						for (var e in this.framelist) if (this.framelist[e].label == t) return this.skipToFrame(parseInt(e)), void(this.isPlaying = !0);
						this.frame = 0, this.pos = 0, this.isPlaying = !0
					}
				}, {
					key: "stop",
					value: function() {
						this.isPlaying = !1
					}
				}, {
					key: "play",
					value: function() {
						this.isPlaying = !0
					}
				}, {
					key: "emitStop",
					value: function() {
						this.stop(), this.endCallback && this.endCallback()
					}
				}, {
					key: "emitReachFrame",
					value: function(t) {
						this.frameCallback[t] && this.frameCallback[t]()
					}
				}, {
					key: "setEndCallback",
					value: function(t) {
						this.endCallback = t
					}
				}, {
					key: "setFrameCallback",
					value: function(t, e) {
						this.frameCallback[t] = e
					}
				}, {
					key: "__recalculateMatrix",
					value: function() {
						var t = function(t) {
								for (var e = t.layers.filter(function(t) {
									return t
								}), i = []; e.length;) {
									var n = e.shift();
									i.push(n), n.layers && (e = n.layers.filter(function(t) {
										return t
									}).concat(e))
								}
								return i
							}(this);
						for (var i in t) t[i].order = this.order + i / t.length;
						(0, c.
					default)((0, l.
					default)(e.prototype), "__recalculateMatrix", this).call(this)
					}
				}]), e
			}(function(t) {
				function e(t, i, n) {
					var r;
					return (0, s.
				default)(this, e), (r = (0, u.
				default)(this, (0, l.
				default)(e).call(this))).setUseMatrix(!0), r.layers = [], r.id = t.id, r.framelist = t.frames, r.frame = 0, r.flsh = i, r.replace_list = n, r.isClip = !1, delete r._child, Object.defineProperty((0, a.
				default)((0, a.
				default)(r)), "_child", {
						get: function() {
							return new Set(this.layers.filter(function(t) {
								return t
							}))
						}
					}), r
				}
				return (0, f.
			default)(e, t), (0, o.
			default)(e, [{
					key: "addNode",
					value: function(t, e) {
						t._parent && t._parent.removeNode(t), this.layers[e] = t, t._parent = this
					}
				}, {
					key: "removeNode",
					value: function(t) {
						this.layers[this.layers.indexOf(t)] = null, t._parent = null
					}
				}, {
					key: "setColor",
					value: function(t, e, i, n) {
						this.alpha = 255 * n, this.color = [255 * t, 255 * e, 255 * i]
					}
				}, {
					key: "clearLayers",
					value: function() {
						this.__killSub()
					}
				}, {
					key: "addLayer",
					value: function(t, i, n) {
						var r = this.flsh.movies.filter(function(e) {
							return e.id == t
						})[0];
						switch (r.type) {
						case "shape":
							r = new g;
							break;
						case "image":
							var a = d.get(this.replace_list[r.name] || r.name);
							r = new g(a, r.offX, r.offY);
							break;
						case "movie":
							r = new e(r, this.flsh, this.replace_list);
							break;
						default:
							assertAlways("Not implemented: " + r.type)
						}
						this.addNode(r, i), n && (r.isClip = n, this.addNode(new g, n))
					}
				}, {
					key: "removeLayer",
					value: function(t) {
						var e = this.layers[t];
						e.isClip && this.layers[e.isClip].__kill(), e.__kill()
					}
				}, {
					key: "nextFrame",
					value: function(t) {
						0 == this.frame && this.clearLayers();
						var e = this.framelist[this.frame++],
							i = !1,
							n = !1,
							a = !0,
							s = !1,
							o = void 0;
						try {
							for (var u, l = e.instructions[Symbol.iterator](); !(a = (u = l.next()).done); a = !0) {
								var c = u.value;
								switch (c.type) {
								case "NextFrame":
									if (!t) switch (c.action) {
									case "StopMovie":
										i = !0;
										break;
									case "gotoAndStop":
										i = !0;
									case "gotoAndPlay":
										n = c.destFrameId
									}
									break;
								case "PlaceObject":
								case "PlaceObjectClip":
									c.movieId && this.addLayer(c.movieId, c.layer, c.clipLayer);
									var f = this.layers[c.layer];
									if (!f) break;
									if (c.transform) {
										var h = c.transform;
										void 0 === h.a && (h.a = 1), void 0 === h.b && (h.b = 0), void 0 === h.c && (h.c = 0), void 0 === h.d && (h.d = 1), f.setMatrix(h.a, h.c, h.b, h.d, h.tx, h.ty)
									}
									c.color && f.setColor.apply(f, (0, r.
								default)(c.color));
									break;
								case "RemoveObject":
									this.removeLayer(c.layer);
									break;
								case "PlaySound":
									t || v.playSE(this.flsh.sounds[c.soundId].substr(8) + ".mp3")
								}
							}
						} catch (_) {
							s = !0, o = _
						} finally {
							try {
								a || null == l.
								return ||l.
								return ()
							} finally {
								if (s) throw o
							}
						}
						if (t || (this.updateSub(), e.label && this.emitReachFrame(e.label)), this.framelist[this.frame] || (this.frame = 0), n) return this.skipToFrame(n);
						!t && i && this.emitStop()
					}
				}, {
					key: "emitStop",
					value: function() {}
				}, {
					key: "emitReachFrame",
					value: function() {}
				}, {
					key: "updateSub",
					value: function() {
						var t = !0,
							e = !1,
							i = void 0;
						try {
							for (var n, r = this.submovies[Symbol.iterator](); !(t = (n = r.next()).done); t = !0) n.value.nextFrame()
						} catch (a) {
							e = !0, i = a
						} finally {
							try {
								t || null == r.
								return ||r.
								return ()
							} finally {
								if (e) throw i
							}
						}
					}
				}, {
					key: "skipToFrame",
					value: function(t) {
						for (t > this.framelist.length - 1 && (t = this.framelist.length - 1); this.frame != t;) this.nextFrame(!0)
					}
				}, {
					key: "submovies",
					get: function() {
						return this.layers.filter(function(t) {
							return t instanceof e
						})
					}
				}]), e
			}(h));
		e.exports = m
	}, {
		10: 10,
		11: 11,
		12: 12,
		17: 17,
		21: 21,
		3: 3,
		5: 5,
		60: 60,
		62: 62,
		65: 65,
		67: 67,
		7: 7,
		84: 84,
		9: 9
	}],
	73: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(17)),
			a = n(t(10)),
			s = n(t(9)),
			o = n(t(11)),
			u = n(t(3)),
			l = n(t(5)),
			c = n(t(7)),
			f = {
				P_BEGIN: 0,
				P_INPUT: 1,
				P_UIPREV: 5,
				P_SCRIPT: 6,
				P_UIPROC: 7,
				P_UIAFTER: 8,
				P_MENU: 9,
				P_PREV: 10,
				P_NORMAL: 11,
				P_AFTER: 12,
				P_JUDGE: 13,
				P_DRAW: 14,
				P_END: 16,
				P_MAX: 17
			},
			h = t(72),
			_ = function() {
				function t(e) {
					(0, l.
				default)(this, t), this.is_killed = !1, this._killCb = null, "number" != typeof e && (e = f.P_NORMAL), h.getInstance().regist(e, this)
				}
				return (0, c.
			default)(t, [{
					key: "__kill",
					value: function() {
						var t = h.getInstance();
						this.performKillCallback(), t.remove(this), this.is_killed = !0
					}
				}, {
					key: "kill",
					value: function() {
						this.is_killed || this.__kill()
					}
				}, {
					key: "__die",
					value: function() {}
				}, {
					key: "setKillCallback",
					value: function(t) {
						this._killCb = t
					}
				}, {
					key: "performKillCallback",
					value: function() {
						this._killCb && (this._killCb(this), this._killCb = null)
					}
				}, {
					key: "stageOnly",
					value: function() {
						h.getInstance().registStageTask(this)
					}
				}, {
					key: "safelyKill",
					value: function() {
						this.__kill()
					}
				}, {
					key: "isAlive",
					value: function() {
						return !this.is_killed
					}
				}]), t
			}(),
			d = function(t) {
				function e(t, i) {
					var n;
					return (0, l.
				default)(this, e), (n = (0, r.
				default)(this, (0, a.
				default)(e).call(this, i)))._parent = null, n._child = new Set, t && (n._parent = t, t._child.add((0, u.
				default)((0, u.
				default)(n)))), n
				}
				return (0, o.
			default)(e, t), (0, c.
			default)(e, [{
					key: "__kill",
					value: function() {
						h.getInstance();
						var t = !0,
							i = !1,
							n = void 0;
						try {
							for (var r, o = new Set(this._child)[Symbol.iterator](); !(t = (r = o.next()).done); t = !0) r.value.__kill()
						} catch (u) {
							i = !0, n = u
						} finally {
							try {
								t || null == o.
								return ||o.
								return ()
							} finally {
								if (i) throw n
							}
						}
						this._parent && this._parent._child.delete(this), (0, s.
					default)((0, a.
					default)(e.prototype), "__kill", this).call(this)
					}
				}]), e
			}(_);
		e.exports = {
			BaseTask: _,
			Task: d,
			phase: f
		}
	}, {
		10: 10,
		11: 11,
		12: 12,
		17: 17,
		3: 3,
		5: 5,
		7: 7,
		72: 72,
		9: 9
	}],
	68: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(5)),
			a = n(t(7)),
			s = n(t(17)),
			o = n(t(10)),
			u = n(t(11)),
			l = t(73),
			c = t(81),
			f = function(t) {
				function e() {
					var t;
					return (0, r.
				default)(this, e), (t = (0, s.
				default)(this, (0, o.
				default)(e).call(this, l.phase.P_SCRIPT))).script = {
						setup: nothing,
						execute: nothing,
						leave: nothing
					}, t.setupFlag = !1, t.setupArg = null, t
				}
				return (0, u.
			default)(e, t), (0, a.
			default)(e, [{
					key: "__execute",
					value: function(t) {
						this.setupFlag && c.frameId() > this.setupFlag && (this.script.setup(this.setupArg), this.setupFlag = !1, this.setupArg = null), this.script.execute(t)
					}
				}, {
					key: "loadScript",
					value: function(t, e) {
						this.script.leave(), this.script = t, this.setupFlag = c.frameId(), this.setupArg = e
					}
				}]), e
			}(l.BaseTask);
		e.exports = f
	}, {
		10: 10,
		11: 11,
		12: 12,
		17: 17,
		5: 5,
		7: 7,
		73: 73,
		81: 81
	}],
	81: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(5)),
			a = n(t(7));
		t(80);
		var s = t(72),
			o = t(67),
			u = t(70),
			l = t(69),
			c = null;

		function f() {
			return window.performance ? window.performance.now() : (new Date).getTime()
		}
		var h = function() {
				function e() {
					(0, r.
				default)(this, e), this._init = !1, this._stopped = !1
				}
				return (0, a.
			default)(e, [{
					key: "init",
					value: function(e, i) {
						this._init || (c || (c = t(68)), this.canvas = e, s.kill(), s.getInstance(), o.init(e, i), new u(e), l.init(), this.script = new c, this._init = !0, this._stopped = !0)
					}
				}, {
					key: "go",
					value: function() {
						var t = this;
						this._stopped && (this._stopped = !1, this.timer = f(), window.requestAnimationFrame(catchErr(function() {
							t.frameFlip()
						})))
					}
				}, {
					key: "pause",
					value: function() {
						this._stopped = !0
					}
				}, {
					key: "kill",
					value: function() {
						var t = this;
						return new Promise(function(e) {
							if (!t._init) return t._stopped = !1, e();
							t._init = !1, t._stopped = !1, t._killCallback = e
						})
					}
				}, {
					key: "frameFlip",
					value: function() {
						var t = this,
							e = f();
						if (s.getInstance().execute(e - this.timer), this.timer = e, this._init && !this._stopped && window.requestAnimationFrame(catchErr(function() {
							t.frameFlip()
						})), !this._init) {
							s.kill();
							var i = this._killCallback;
							delete this._killCallback, window.requestAnimationFrame(i)
						}
					}
				}, {
					key: "switchFullscreen",
					value: function() {
						if (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement) document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen();
						else {
							var t = this.canvas;
							t.requestFullscreen ? t.requestFullscreen() : t.msRequestFullscreen ? t.msRequestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen && t.webkitRequestFullscreen()
						}
					}
				}, {
					key: "initSoundAndSysload",
					value: function(e) {
						var i = this,
							n = t(84);
						if (!this.__soundInitStat && n.needInit()) {
							//点击屏幕开始播放
							var r = l.getInstance(),
								a = new(t(92))(null, 60, 480, 305, 255, "#FFFFFF", "sans-serif", 20, config.localize.tap_to_play || "\u70b9\u51fb\u5c4f\u5e55\u5f00\u59cb\u64ad\u653e");
							r.hookQueue(function(t) {
								return 2 != t.type || (r.hookQueue(nothing), a.kill(), n.initOnClick(), i.__soundInitStat = !0, i.sysLoad(e), !0)
							})
						} else this.sysLoad(e)
					}
				}, {
					key: "sysLoad",
					value: function(t, e) {
						this.script.loadScript(t, e)
					}
				}, {
					key: "stageClear",
					value: function() {
						s.getInstance().clearStageTask()
					}
				}, {
					key: "frameId",
					value: function() {
						return s.getInstance()._frameId
					}
				}]), e
			}();
		e.exports = new h
	}, {
		12: 12,
		5: 5,
		67: 67,
		68: 68,
		69: 69,
		7: 7,
		70: 70,
		72: 72,
		80: 80,
		84: 84,
		92: 92
	}],
	71: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(5)),
			a = n(t(7)),
			s = null,
			o = function() {
				function t(e) {
					var i, n, a;
					if ((0, r.
				default)(this, t), this.canvas = e, this.touches = [], this.last_touches = [], e.oncontextmenu = function(t) {
						t.returnValue = !1
					}, this.hook = nothing, void 0 !== window.PointerEvent) i = this.procPointer(0), n = this.procPointer(1), a = this.procPointer(2), e.onpointerdown = i, e.onpointerup = a, e.onpointercancel = a, e.onpointerleave = a, e.onpointermove = n;
					else {
						i = this.procTouch(0), n = this.procTouch(1), a = this.procTouch(2);
						var s = this.procPointer(0),
							o = this.procPointer(1),
							u = this.procPointer(2);
						e.ontouchstart = i, e.ontouchend = a, e.ontouchcancel = a, e.ontouchleave = a, e.ontouchmove = n, e.onmousedown = s, e.onmouseup = u, e.onmouseout = u, e.onmousemove = o
					}
				}
				return (0, a.
			default)(t, [{
					key: "procTouch",
					value: function(t) {
						var e = this;
						return catchErr(function(i) {
							var n = e.canvas.offsetHeight / 640,
								r = (960 - e.canvas.width) / 2,
								a = 0,
								s = parseInt(e.canvas.style.height || "640");
							e.canvas.offsetHeight > s && (a = (e.canvas.offsetHeight - s) / 2, n = e.canvas.offsetWidth / 960);
							var o = e.canvas.getBoundingClientRect();
							i.preventDefault(), [].forEach.call(i.changedTouches, function(i) {
								var s = (i.clientX - o.left) / n + r,
									u = (i.clientY - o.top - a) / n,
									l = {
										id: i.identifier,
										x: s,
										y: u,
										type: t
									};
								e.hook(l) || e.touches.push(l)
							})
						})
					}
				}, {
					key: "procPointer",
					value: function(t) {
						var e = this;
						return catchErr(function(i) {
							if (i.preventDefault(), (1 != t || i.pressure) && (2 != t || "pointerleave" != i.type || i.pressure)) {
								var n = e.canvas.offsetHeight / 640,
									r = (960 - e.canvas.width) / 2,
									a = 0,
									s = parseInt(e.canvas.style.height || "640");
								e.canvas.offsetHeight > s && (a = (e.canvas.offsetHeight - s) / 2, n = e.canvas.offsetWidth / 960);
								var o = e.canvas.getBoundingClientRect(),
									u = (i.clientX - o.left) / n + r,
									l = (i.clientY - o.top - a) / n,
									c = {
										id: i.pointerId || -1,
										x: u,
										y: l,
										type: t
									};
								e.hook(c) || e.touches.push(c)
							}
						})
					}
				}, {
					key: "kill",
					value: function() {
						this.canvas.ontouchstart = null, this.canvas.ontouchend = null, this.canvas.ontouchcancel = null, this.canvas.ontouchleave = null, this.canvas.ontouchmove = null, this.canvas.onmousedown = null, this.canvas.onmouseup = null, this.canvas.onmouseout = null, this.canvas.onmousemove = null, this.canvas.onpointerdown = null, this.canvas.onpointerup = null, this.canvas.onpointercancel = null, this.canvas.onpointerleave = null, this.canvas.onpointermove = null, s = null
					}
				}, {
					key: "fixLimit",
					value: function() {
						this.last_touches = this.touches, this.touches = []
					}
				}, {
					key: "get",
					value: function(t) {
						return t ? this.last_touches.slice(0) : this.last_touches.filter(function(t) {
							return !t.used
						})
					}
				}, {
					key: "setUse",
					value: function(t) {
						t.used = !0
					}
				}]), t
			}();
		e.exports = e.exports = {
			init: function(t) {
				s = new o(t)
			},
			getInstance: function() {
				return s
			}
		}
	}, {
		12: 12,
		5: 5,
		7: 7
	}],
	70: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(5)),
			a = n(t(7)),
			s = n(t(17)),
			o = n(t(10)),
			u = n(t(11)),
			l = t(73),
			c = t(71),
			f = function(t) {
				function e(t) {
					var i;
					return (0, r.
				default)(this, e), i = (0, s.
				default)(this, (0, o.
				default)(e).call(this, l.phase.P_INPUT)), c.init(t), i
				}
				return (0, u.
			default)(e, t), (0, a.
			default)(e, [{
					key: "__execute",
					value: function(t) {
						c.getInstance().fixLimit()
					}
				}, {
					key: "__die",
					value: function() {
						c.getInstance().kill()
					}
				}]), e
			}(l.BaseTask);
		e.exports = f
	}, {
		10: 10,
		11: 11,
		12: 12,
		17: 17,
		5: 5,
		7: 7,
		71: 71,
		73: 73
	}],
	72: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(5)),
			a = n(t(7)),
			s = null,
			o = !1,
			u = function() {
				function e() {
					(0, r.
				default)(this, e), s || (s = t(73)), this._frameId = 0, this._stageClear = !1, this._killing = !1, this._taskList = [];
					for (var i = 0; i < s.phase.P_MAX; i++) this._taskList.push(new Set);
					this._stageList = new Set, this._removeList = []
				}
				return (0, a.
			default)(e, [{
					key: "regist",
					value: function(t, e) {
						e._phase = t, this._taskList[t].add(e)
					}
				}, {
					key: "clearTaskList",
					value: function() {
						for (var t = 0; t < s.phase.P_MAX; t++) {
							var e = !0,
								i = !1,
								n = void 0;
							try {
								for (var r, a = this._taskList[t][Symbol.iterator](); !(e = (r = a.next()).done); e = !0) r.value.__kill()
							} catch (u) {
								i = !0, n = u
							} finally {
								try {
									e || null == a.
									return ||a.
									return ()
								} finally {
									if (i) throw n
								}
							}
						}
						this.remove_killlist();
						for (var o = 0; o < s.phase.P_MAX; o++) this._taskList[o].clear()
					}
				}, {
					key: "registStageTask",
					value: function(t) {
						this._stageList.add(t)
					}
				}, {
					key: "clearStageTask",
					value: function() {
						this._stageClear = !0
					}
				}, {
					key: "isExistTask",
					value: function(t) {
						for (var e = 0; e < s.phase.P_MAX; e++) if (this._taskList[e].has(t)) return !0;
						return !1
					}
				}, {
					key: "is_remove",
					value: function(t) {
						return this._removeList.includes(t)
					}
				}, {
					key: "remove",
					value: function(t) {
						this.is_remove(t) || this._removeList.push(t)
					}
				}, {
					key: "remove_killlist",
					value: function() {
						this._killing = !0;
						var t = !0,
							e = !1,
							i = void 0;
						try {
							for (var n, r = this._removeList[Symbol.iterator](); !(t = (n = r.next()).done); t = !0) {
								var a = n.value;
								a.__die && a.__die(), this._taskList[a._phase].delete(a), a._parent && (a._parent._child.delete(a), a._parent = null), this._stageList.delete(a)
							}
						} catch (s) {
							e = !0, i = s
						} finally {
							try {
								t || null == r.
								return ||r.
								return ()
							} finally {
								if (e) throw i
							}
						}
						this._removeList = [], this._killing = !1
					}
				}, {
					key: "execute",
					value: function(t) {
						++this._frameId;
						for (var e = 0; e < s.phase.P_MAX; e++) {
							var i = new Set(this._taskList[e]),
								n = !0,
								r = !1,
								a = void 0;
							try {
								for (var o, u = i[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) {
									var l = o.value;
									l.__execute && l.__execute(t)
								}
							} catch (p) {
								r = !0, a = p
							} finally {
								try {
									n || null == u.
									return ||u.
									return ()
								} finally {
									if (r) throw a
								}
							}
						}
						if (this._stageClear) {
							var c = !0,
								f = !1,
								h = void 0;
							try {
								for (var _, d = this._stageList[Symbol.iterator](); !(c = (_ = d.next()).done); c = !0) _.value.__kill()
							} catch (p) {
								f = !0, h = p
							} finally {
								try {
									c || null == d.
									return ||d.
									return ()
								} finally {
									if (f) throw h
								}
							}
							this._stageClear = !1
						}
						this.remove_killlist()
					}
				}, {
					key: "kill",
					value: function() {
						for (var t = 0; t < s.phase.P_MAX; t++) {
							var e = !0,
								i = !1,
								n = void 0;
							try {
								for (var r, a = this._taskList[t][Symbol.iterator](); !(e = (r = a.next()).done); e = !0) r.value.kill()
							} catch (o) {
								i = !0, n = o
							} finally {
								try {
									e || null == a.
									return ||a.
									return ()
								} finally {
									if (i) throw n
								}
							}
						}
						this.remove_killlist()
					}
				}, {
					key: "isKilling",
					value: function() {
						return this._killing
					}
				}]), e
			}();
		e.exports = {
			getInstance: function() {
				return o || (o = new u), o
			},
			kill: function() {
				o && (o = o.kill())
			}
		}
	}, {
		12: 12,
		5: 5,
		7: 7,
		73: 73
	}],
	80: [function(t, e, i) {
		"use strict";
		window.assert = function(t, e) {
			if (window.onerror = null, e || (e = ""), !t) throw window.alert("Assert failure: " + new Error(e).stack), new Error(e)
		}, window.assertAlways = function(t) {
			window.assert(!1, t)
		}, window.nothing = function() {}, window.onerror = function(t, e, i, n, r) {
			//未捕获的异常
			window.alert("\u672a\u6355\u83b7\u7684\u5f02\u5e38\uff1a" + (r.stack || t))
		}, window.blank = new Image, window.blank.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=", window.white = new Image, window.white.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=", window.UI_ORDER = {
			HEAVEN: 5e5,
			TUTORIAL: 8e4,
			DIALOG: 20500,
			FLOAT: 2e4,
			FRONT: 8e3,
			MAIN: 5e3,
			BACK: 1e3
		}, window.alertErr = function(t) {
			//未捕获的异常
			window.alert("\u672a\u6355\u83b7\u7684\u5f02\u5e38\uff1a" + (t.stack || t))
		}, window.catchErr = function(t) {
			return function() {
				try {
					t.apply(void 0, arguments)
				} catch (e) {
					alertErr(e)
				}
			}
		}, Math.polar = function(t, e, i, n) {
			return [Math.cos(t) * e + i, Math.sin(t) * e + n]
		}, Math.bipolar = function(t, e, i, n) {
			return [Math.rad2deg(Math.atan2(e - n, t - i)), Math.sqrt((t - i) * (t - i) + (e - n) * (e - n))]
		}, Math.deg2rad = function(t) {
			return Math.PI * t / 180
		}, Math.rad2deg = function(t) {
			return t / Math.PI * 180
		}, Math.aboutEqual = function(t, e, i) {
			return t >= e - i && t <= e + i
		}, Math.range = function(t, e, i) {
			return Math.max(Math.min(i, e), t)
		}
	}, {}],
	92: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(5)),
			a = n(t(7)),
			s = n(t(17)),
			o = n(t(10)),
			u = n(t(9)),
			l = n(t(11)),
			c = t(87),
			f = (t(79), t(60)),
			h = t(62),
			_ = function(t) {
				function e(t, i, n, a, u, l, c, _, d, p, v, g, m) {
					var y;
					(0, r.
				default)(this, e), (y = (0, s.
				default)(this, (0, o.
				default)(e).call(this, t, i, n, a, p, v, g, l, u, m))).asset = f.getTemporaryCanvasAsset(), y.canvas = y.asset.getCanvas(), y.text = d, y.font = _ + "pt " + c, y.align = "start";
					var b = new h(i);
					return y.getNode().addNode(b), b.changeAsset(y.asset), y.asset_node = b, y.dirty = !0, y
				}
				return (0, l.
			default)(e, t), (0, a.
			default)(e, [{
					key: "__execute",
					value: function(t) {
						this.dirty && (this.draw(), this.dirty = !1)
					}
				}, {
					key: "__die",
					value: function() {
						f.freeTemporaryCanvasAsset(this.asset), (0, u.
					default)((0, o.
					default)(e.prototype), "__die", this).call(this)
					}
				}, {
					key: "setText",
					value: function(t) {
						this.text = t, this.dirty = !0
					}
				}, {
					key: "setColor",
					value: function(t) {
						this.getNode().color = t
					}
				}, {
					key: "setFont",
					value: function(t, e) {
						this.font = e + "pt " + t, this.dirty = !0
					}
				}, {
					key: "setPosition",
					value: function(t, e) {
						this.getNode().x = t, this.getNode().y = e
					}
				}, {
					key: "setAlign",
					value: function(t) {
						this.align = t, this.dirty = !0
					}
				}, {
					key: "draw",
					value: function() {
						var t = this.canvas.getContext("2d");
						t.font = this.font;
						var e = this.text.split("\n"),
							i = 0,
							n = !0,
							r = !1,
							a = void 0;
						try {
							for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done); n = !0) {
								var u = s.value;
								i = Math.max(i, 1.2 * t.measureText(u).width)
							}
						} catch (m) {
							r = !0, a = m
						} finally {
							try {
								n || null == o.
								return ||o.
								return ()
							} finally {
								if (r) throw a
							}
						}
						var l = 1.2 * parseInt(t.font) * (e.length + 1);
						0 == i && (i = 1), this.canvas.setAttribute("width", i + "px"), this.canvas.setAttribute("height", l + "px"), t.font = this.font, t.fillStyle = "#FFFFFF", t.textAlign = this.align, t.textBaseline = "top", t.clearRect(0, 0, i, l);
						var c = 0,
							f = 0;
						switch (this.align) {
						case "center":
							this.asset_node.x = -i / 2, c = i / 2;
							break;
						case "right":
							this.asset_node.x = -i, c = i
						}
						var h = !0,
							_ = !1,
							d = void 0;
						try {
							for (var p, v = e[Symbol.iterator](); !(h = (p = v.next()).done); h = !0) {
								var g = p.value;
								t.fillText(g, c, f), f += 1.2 * parseInt(t.font)
							}
						} catch (m) {
							_ = !0, d = m
						} finally {
							try {
								h || null == v.
								return ||v.
								return ()
							} finally {
								if (_) throw d
							}
						}
						this.asset.updateTexture()
					}
				}], [{
					key: "fromJson",
					value: function(t, e) {
						throw new Error("todo")
					}
				}]), e
			}(c);
		e.exports = _
	}, {
		10: 10,
		11: 11,
		12: 12,
		17: 17,
		5: 5,
		60: 60,
		62: 62,
		7: 7,
		79: 79,
		87: 87,
		9: 9
	}],
	83: [function(t, e, i) {
		"use strict";
		var n, r = t(12),
			a = r(t(19)),
			s = r(t(23)),
			o = r(t(4)),
			u = t(60),
			l = t(84),
			c = t(92),
			f = null;

		function h(t) {
			return function(e) {
				return new Promise(function(i, n) {
					var r = new window.XMLHttpRequest;
					r.open("GET", e, !0), r.responseType = t, r.onreadystatechange = catchErr(function() {
						4 === r.readyState && (200 === r.status ? i(r.response) : n("Download failed"))
					}), r.send()
				})
			}
		}
		function _(t) {
			return new Promise(function(e, i) {
				var n = new window.Image;
				n.src = t, n.onload = function() {
					e(this)
				}, n.onerror = function() {
					i("Download failed")
				}
			})
		}
		function d(t, e, i, n, r, u) {
			return function() {
				return (0, o.
			default)(s.
			default.mark(function t(e, i, n, r, u, l) {
					var c, f, h, _, d, p, v, g, m;
					return s.
				default.wrap(function(t) {
						for (;;) switch (t.prev = t.next) {
						case 0:
							for (r.setText("Loading ".concat(u, "... 0/").concat(e.length)), c = [], f = 0, h = !1, _ = !0, d = !1, p = void 0, t.prev = 7, v = function() {
								var t = (0, a.
							default)(m.value, 2),
									_ = (t[0], t[1]);
								c.push((0, o.
							default)(s.
							default.mark(function t() {
									var a;
									return s.
								default.wrap(function(t) {
										for (;;) switch (t.prev = t.next) {
										case 0:
											return t.prev = 0, t.next = 3, i(_);
										case 3:
											return a = t.sent, "/asset/" == _.substr(0, 7) && (_ = _.substr(7)), t.next = 7, n(_, a);
										case 7:
											++f, h || r.setText("Loading ".concat(u, "... ").concat(f, "/").concat(e.length)), t.next = 17;
											break;
										case 11:
											throw t.prev = 11, t.t0 = t.
											catch (0), !h && !l && window.alert("Asset " + _ + " cannot be loaded"), r.setText("Loading ".concat(u, "... ERROR!")), h = !0, t.t0;
										case 17:
										case "end":
											return t.stop()
										}
									}, t, this, [
										[0, 11]
									])
								}))())
							}, g = e.entries()[Symbol.iterator](); !(_ = (m = g.next()).done); _ = !0) v();
							t.next = 16;
							break;
						case 12:
							t.prev = 12, t.t0 = t.
							catch (7), d = !0, p = t.t0;
						case 16:
							t.prev = 16, t.prev = 17, _ || null == g.
							return ||g.
							return ();
						case 19:
							if (t.prev = 19, !d) {
								t.next = 22;
								break
							}
							throw p;
						case 22:
							return t.finish(19);
						case 23:
							return t.finish(16);
						case 24:
							return t.next = 26, Promise.all(c);
						case 26:
						case "end":
							return t.stop()
						}
					}, t, this, [
						[7, 12, 16, 24],
						[17, , 19, 23]
					])
				})).apply(this, arguments)
			}.apply(this, arguments)
		}
		function p(t, e) {
			return function() {
				return (0, o.
			default)(s.
			default.mark(function t(e, i) {
					var n, r, o, l;
					return s.
				default.wrap(function(t) {
						for (;;) switch (t.prev = t.next) {
						case 0:
							n = u.loadFlsh(e, i), r = (0, a.
						default)(n, 2), o = r[0], l = r[1], f.addImageArray(o.map(function(t) {
								return "/asset/" + t
							})), f.addSoundArray(l.map(function(t) {
								return "/asset/" + t
							}));
						case 3:
						case "end":
							return t.stop()
						}
					}, t, this)
				})).apply(this, arguments)
			}.apply(this, arguments)
		}
		function v(t, e) {
			return function() {
				return (0, o.
			default)(s.
			default.mark(function t(e, i) {
					var n, r, o, l;
					return s.
				default.wrap(function(t) {
						for (;;) switch (t.prev = t.next) {
						case 0:
							n = u.loadUI(e, i), r = (0, a.
						default)(n, 2), o = r[0], l = r[1], f.addImageArray(o.map(function(t) {
								return "/asset/" + t
							})), f.addSoundArray(l.map(function(t) {
								return "/asset/" + t
							}));
						case 3:
						case "end":
							return t.stop()
						}
					}, t, this)
				})).apply(this, arguments)
			}.apply(this, arguments)
		}
		f = {
			img: [],
			snd: [],
			flsh: [],
			texb: [],
			ui: [],
			__isLoaded: function(t) {
				return u.isLoaded(t) || l.isLoaded(u.__pretreatPath(t))
			},
			__addCommon: function(t, e, i) {
				e && window.assert(t, e), !t || this.__isLoaded(t) || i.includes(t) || i.push(t)
			},
			__addCommonArray: function(t, e, i, n) {
				var r = this;
				if (e && i) window.assert(t.length === e, i);
				else if (e) {
					window.assert(t, e);
					var a = !0,
						s = !1,
						o = void 0;
					try {
						for (var u, l = t[Symbol.iterator](); !(a = (u = l.next()).done); a = !0) {
							var c = u.value;
							window.assert(c, e)
						}
					} catch (f) {
						s = !0, o = f
					} finally {
						try {
							a || null == l.
							return ||l.
							return ()
						} finally {
							if (s) throw o
						}
					}
				}
				t instanceof Array && t.forEach(function(t) {
					r.__addCommon(t, !1, n)
				})
			},
			addImage: function(t, e) {
				return this.__addCommon(t, e, this.img)
			},
			addSound: function(t, e) {
				return this.__addCommon(t, e, this.snd)
			},
			addFlsh: function(t, e) {
				return this.__addCommon(t, e, this.flsh)
			},
			addTexb: function(t, e) {
				return this.__addCommon(t, e, this.texb)
			},
			addUI: function(t, e) {
				return this.__addCommon(t, e, this.ui)
			},
			addImageArray: function(t, e, i) {
				return this.__addCommonArray(t, e, i, this.img)
			},
			addSoundArray: function(t, e, i) {
				return this.__addCommonArray(t, e, i, this.snd)
			},
			addFlshArray: function(t, e, i) {
				return this.__addCommonArray(t, e, i, this.flsh)
			},
			addTexbArray: function(t, e, i) {
				return this.__addCommonArray(t, e, i, this.texb)
			},
			addUIArray: function(t, e, i) {
				return this.__addCommonArray(t, e, i, this.ui)
			},
			preload: (n = (0, o.
		default)(s.
		default.mark(function t(e) {
				var i, n;
				return s.
			default.wrap(function(t) {
					for (;;) switch (t.prev = t.next) {
					case 0:
						return e ? i = {
							setText: nothing,
							kill: nothing
						} : (i = new c(null, 60, 480, 305, 255, "#FFFFFF", "sans-serif", 20, "")).setAlign("center"), t.next = 4, d(this.texb, h("arraybuffer"), function(t, e) {
							return u.loadTexb(t, e)
						}, i, "TEXB", e);
					case 4:
						return this.texb = [], n = this.img, this.img = [], this.addImageArray(n), t.next = 10, d(this.flsh, h("arraybuffer"), p, i, "FLSH", e);
					case 10:
						return this.flsh = [], t.next = 13, d(this.ui, h("text"), v, i, "UI", e);
					case 13:
						return this.ui = [], t.next = 16, d(this.img, _, function(t, e) {
							return u.loadImage(t, e)
						}, i, "image", e);
					case 16:
						if (this.img = [], !l.isEnabled()) {
							t.next = 20;
							break
						}
						return t.next = 20, d(this.snd, h("arraybuffer"), function(t, e) {
							return l.load(u.__pretreatPath(t), e)
						}, i, "sound", e);
					case 20:
						this.snd = [], i = i.kill();
					case 22:
					case "end":
						return t.stop()
					}
				}, t, this)
			})), function(t) {
				return n.apply(this, arguments)
			})
		}, e.exports = f
	}, {
		12: 12,
		19: 19,
		23: 23,
		4: 4,
		60: 60,
		84: 84,
		92: 92
	}],
	85: [function(t, e, i) {
		"use strict";
		e.exports = {
			init: function() {},
			isLoaded: function() {
				return !0
			},
			load: function(t, e) {},
			playSE: function() {
				return !1
			},
			playVoice: function() {
				return !1
			},
			playBGM: function() {},
			stopBGM: function() {},
			prepareLive: function() {},
			initOnClickForLive: function() {},
			initOnClick: function() {},
			needInit: function() {
				return !1
			},
			lengthLive: function() {
				return 0
			},
			playLive: function() {},
			tellLive: function() {
				return 0
			},
			pauseLive: function() {},
			resumeLive: function() {},
			stopLive: function() {},
			getLength: function() {
				return 0
			},
			isEnabled: function() {
				return !1
			}
		}
	}, {}],
	86: [function(t, e, i) {
		"use strict";
		var n, r, a, s, o = !1,
			u = {},
			l = !1,
			c = navigator.userAgent.includes("Android"),
			f = navigator.userAgent.includes("Firefox");

		function h() {
			if (o.getOutputTimestamp) {
				var t = o.getOutputTimestamp(),
					e = window.performance.now() - t.performanceTime;
				return t.contextTime + .001 * e
			}
			var i = o.baseLatency;
			return i || (i = c && !f ? 1 : 0), i < .015 ? o.currentTime : window.performance && window.performance.now ? .001 * window.performance.now() : .001 * Date.now()
		}
		function _(t) {
			"/asset/" == t.substr(0, 7) && (t = t.substr(7)), window.assert(u[t], "Sound asset " + t + " not loaded");
			var e = o.createBufferSource();
			return e.buffer = u[t], e.connect(o.destination), e
		}
		e.exports = {
			init: function() {
				var t = window.AudioContext || window.webkitAudioContext;
				o = new t
			},
			isLoaded: function(t) {
				return !!u[t]
			},
			load: function(t, e) {
				return new Promise(function(i, n) {
					o.decodeAudioData(e, function(e) {
						u[t] = e, i()
					}, n)
				})
			},
			playSE: function(t) {
				var e = _(t);
				return e.start(), e
			},
			playVoice: function(t) {
				var e = _(t);
				return e.start(), e.playing = !0, e.onended = function() {
					e.playing = !1
				}, e
			},
			playBGM: function(t) {
				l && this.stopBGM();
				var e = _(t);
				e.loop = !0, e.start(), l = e
			},
			stopBGM: function() {
				try {
					l.stop()
				} catch (t) {}
				l = !1
			},
			prepareLive: function(t) {
				r && r.stop(), a = t, r = _(t), n = !1
			},
			initOnClickForLive: function() {
				// Finder:00003
				try {
					console.log('00003');
					o.resume()
				} catch (t) {}
			},
			initOnClick: function() {
				try {
					o.resume()
				} catch (t) {}
			},
			needInit: function() {
				return "running" != o.state || /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)
			},
			lengthLive: function() {
				return window.assert(r.buffer.duration, "Can't get live length"), r.buffer.duration
			},
			playLive: function() {
				window.assert(r, "Live not prepared"), n = h(), r.start()
			},
			tellLive: function() {
				return n ? h() - n : 0
			},
			pauseLive: function() {
				if (!s && n) {
					try {
						r.stop()
					} catch (t) {}
					s = h()
				}
			},
			resumeLive: function() {
				window.assert(s, "Live not paused"), r = _(a);
				var t = s - n;
				n = h() - t, s = !1, t < 0 ? r.start(o.currentTime - t) : r.start(o.currentTime, t)
			},
			stopLive: function() {
				try {
					r.stop()
				} catch (t) {}
				s = !1, n = !1, r = !1, a = !1
			},
			getLength: function(t) {
				return t.buffer.duration
			},
			isEnabled: function() {
				return !0
			}
		}
	}, {}],
	87: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(6)),
			a = n(t(5)),
			s = n(t(7)),
			o = n(t(17)),
			u = n(t(10)),
			l = n(t(9)),
			c = n(t(11)),
			f = n(t(3)),
			h = t(73),
			_ = t(65),
			d = function(t) {
				function e(t) {
					var i;
					(0, a.
				default)(this, e), i = (0, o.
				default)(this, (0, u.
				default)(e).call(this, t, h.phase.P_UIPROC));
					for (var n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++) s[l - 1] = arguments[l];
					return i.node = (0, r.
				default)(_, s), i.node.setTask((0, f.
				default)((0, f.
				default)(i))), t && t.node && t.node.addNode(i.node), i
				}
				return (0, c.
			default)(e, t), (0, s.
			default)(e, [{
					key: "__kill",
					value: function() {
						(0, l.
					default)((0, u.
					default)(e.prototype), "__kill", this).call(this), this.node = this.node.__kill()
					}
				}, {
					key: "getNode",
					value: function() {
						return this.node
					}
				}, {
					key: "setProperty",
					value: function(t) {
						var e = ["x", "y", "scaleX", "scaleY", "rot", "alpha", "visible", "color", "order"];
						for (var i in e) void 0 !== t[e[i]] && (this.node[e[i]] = t[e[i]])
					}
				}, {
					key: "getProperty",
					value: function() {
						return {
							x: this.node.x,
							y: this.node.y,
							scaleX: this.node.scaleX,
							scaleY: this.node.scaleY,
							rot: this.node.rot,
							color: this.node.color,
							alpha: this.node.alpha,
							visible: this.node.visible,
							order: this.node.order
						}
					}
				}, {
					key: "setVisible",
					value: function(t) {
						this.node.visible = !! t
					}
				}, {
					key: "reconnect",
					value: function(t, e) {
						t.getNodePointer(e).addNode(this.getNode())
					}
				}, {
					key: "setColor",
					value: function(t, e) {
						this.node.alpha = t, this.node.color = e
					}
				}, {
					key: "setScale",
					value: function(t, e) {
						this.node.scaleX = t, this.node.scaleY = e
					}
				}, {
					key: "setRotation",
					value: function(t) {
						this.node.rot = t
					}
				}, {
					key: "setName",
					value: function() {
						throw new Error("not support")
					}
				}, {
					key: "isVisible",
					value: function() {
						return this.node.visible
					}
				}, {
					key: "setAnimSpline",
					value: function(t) {
						this.node.setAnimSpline(t)
					}
				}, {
					key: "setAnimCallback",
					value: function(t) {
						this.node.setAnimCallback(t)
					}
				}, {
					key: "isAnim",
					value: function() {
						return this.node.isAnim()
					}
				}, {
					key: "animPlay",
					value: function() {
						this.node.animPlay()
					}
				}, {
					key: "animStop",
					value: function() {
						this.node.animStop()
					}
				}]), e
			}(h.Task);
		e.exports = d
	}, {
		10: 10,
		11: 11,
		12: 12,
		17: 17,
		3: 3,
		5: 5,
		6: 6,
		65: 65,
		7: 7,
		73: 73,
		9: 9
	}],
	88: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(5)),
			a = n(t(7)),
			s = n(t(17)),
			o = n(t(10)),
			u = n(t(9)),
			l = n(t(11)),
			c = n(t(3)),
			f = t(73),
			h = t(69),
			_ = 0,
			d = function(t) {
				function e(t, i, n, a, u, l, d) {
					var p;
					return (0, r.
				default)(this, e), (p = (0, s.
				default)(this, (0, o.
				default)(e).call(this, t, f.phase.P_UIPREV))).id = _++, p.x = i, p.y = n, p.width = a, p.height = u, p.order = l, p.callback = d, h.getInstance().addTouchItem((0, c.
				default)((0, c.
				default)(p))), p
				}
				return (0, l.
			default)(e, t), (0, a.
			default)(e, [{
					key: "__kill",
					value: function() {
						(0, u.
					default)((0, o.
					default)(e.prototype), "__kill", this).call(this), h.getInstance().removeTouchItem(this)
					}
				}, {
					key: "kill",
					value: function() {
						this.__kill()
					}
				}, {
					key: "detect",
					value: function(t, e) {
						return t >= this.treeX && t <= this.treeX + this.width && e >= this.treeY && e <= this.treeY + this.height
					}
				}, {
					key: "touch",
					value: function(t) {
						this.callback(t)
					}
				}, {
					key: "cancel",
					value: function(t) {
						t.type = 3, this.callback(t)
					}
				}, {
					key: "treeX",
					get: function() {
						return this._parent ? this._parent.treeX + this.x : this.x
					}
				}, {
					key: "treeY",
					get: function() {
						return this._parent ? this._parent.treeY + this.y : this.y
					}
				}]), e
			}(f.Task);
		e.exports = d
	}, {
		10: 10,
		11: 11,
		12: 12,
		17: 17,
		3: 3,
		5: 5,
		69: 69,
		7: 7,
		73: 73,
		9: 9
	}],
	91: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(5)),
			a = n(t(7)),
			s = n(t(17)),
			o = n(t(10)),
			u = n(t(11)),
			l = function(t) {
				function e() {
					return (0, r.
				default)(this, e), (0, s.
				default)(this, (0, o.
				default)(e).apply(this, arguments))
				}
				return (0, u.
			default)(e, t), (0, a.
			default)(e, [{
					key: "setAnimCallback",
					value: function() {
						throw new Error("not support")
					}
				}, {
					key: "isAnim",
					value: function() {
						return !1
					}
				}], [{
					key: "fromJson",
					value: function(t, i) {
						return new e(t, i.priority, i.x, i.y, i.xscale, i.yscale, i.rotation, i.color, i.alpha, i.visible)
					}
				}]), e
			}(t(87));
		e.exports = l
	}, {
		10: 10,
		11: 11,
		12: 12,
		17: 17,
		5: 5,
		7: 7,
		87: 87
	}],
	98: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(5)),
			a = n(t(7)),
			s = n(t(17)),
			o = n(t(10)),
			u = n(t(11)),
			l = t(87),
			c = t(60),
			f = t(62),
			h = function(t) {
				function e(t, i, n, a, u, l, h) {
					var _, d;
					(0, r.
				default)(this, e);
					for (var p = arguments.length, v = new Array(p > 7 ? p - 7 : 0), g = 7; g < p; g++) v[g - 7] = arguments[g];
					d = (0, s.
				default)(this, (_ = (0, o.
				default)(e)).call.apply(_, [this, t, i, n, a].concat(v)));
					var m = c.get(h),
						y = new f(i);
					return d.getNode().addNode(y), y.changeAsset(m), y.setAssetWH(u, l), d.asset_node = y, d
				}
				return (0, u.
			default)(e, t), (0, a.
			default)(e, [{
					key: "changeAsset",
					value: function(t) {
						var e = c.get(t);
						this.asset_node.changeAsset(e)
					}
				}, {
					key: "setUV",
					value: function(t, e, i, n) {
						this.asset_node.setTextureXYWH(t, e, i, n)
					}
				}, {
					key: "resetUV",
					value: function() {
						this.asset_node.setTextureXYWH(null)
					}
				}], [{
					key: "fromJson",
					value: function(t, i) {
						return new e(t, i.priority, i.x, i.y, i.width, i.height, i.
					default, i.xscale, i.yscale, i.rotation, i.color, i.alpha, i.visible)
					}
				}]), e
			}(l);
		e.exports = h
	}, {
		10: 10,
		11: 11,
		12: 12,
		17: 17,
		5: 5,
		60: 60,
		62: 62,
		7: 7,
		87: 87
	}],
	95: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(19)),
			a = n(t(5)),
			s = n(t(7)),
			o = n(t(17)),
			u = n(t(10)),
			l = n(t(11)),
			c = t(87),
			f = t(62),
			h = function(t) {
				function e(t, i, n, r, s, l, c, h, _, d, p, v, g) {
					var m, y;
					(0, a.
				default)(this, e);
					for (var b = arguments.length, k = new Array(b > 13 ? b - 13 : 0), w = 13; w < b; w++) k[w - 13] = arguments[w];
					(y = (0, o.
				default)(this, (m = (0, u.
				default)(e)).call.apply(m, [this, t, i, r, s].concat(k)))).assets = l, y.stepX = c, y.stepY = h, y.fillzero = d || !1, y.align = v || 0, y.countclip = g || !1, y.value = 0, y.images = [];
					for (var x = 0; x < _; x++) {
						var A = new f(i);
						A.changeAsset(y.assets[0]), y.getNode().addNode(A), y.images.push(A)
					}
					return y.__update(), y
				}
				return (0, l.
			default)(e, t), (0, s.
			default)(e, [{
					key: "__update",
					value: function() {
						for (var t = this.value.toString(); this.fillzero && t.length < this.images.length;) t = "0" + t;
						if (t.length > this.images.length) if (this.countclip) {
							t = "";
							for (var e = 0; e < this.images.length; ++e) t += "9"
						} else t = t.substr(t.length - this.images.length);
						var i = t.length,
							n = this.stepX * this.images.length,
							a = this.stepX * i,
							s = 0;
						switch (this.align) {
						case 0:
							s = s + n - a;
							break;
						case 1:
							s = s + n / 2 - a / 2
						}
						var o = !0,
							u = !1,
							l = void 0;
						try {
							for (var c, f = this.images.entries()[Symbol.iterator](); !(o = (c = f.next()).done); o = !0) {
								var h = (0, r.
							default)(c.value, 2),
									_ = h[0],
									d = h[1];
								_ < i ? (d.x = s + this.stepX * _, d.y = this.stepY * _, d.changeAsset(this.assets[t[_]]), d.visible = !0) : d.visible = !1
							}
						} catch (p) {
							u = !0, l = p
						} finally {
							try {
								o || null == f.
								return ||f.
								return ()
							} finally {
								if (u) throw l
							}
						}
					}
				}, {
					key: "set",
					value: function(t) {
						this.value = t, this.__update()
					}
				}, {
					key: "get",
					value: function(t) {
						return this.value
					}
				}], [{
					key: "fromJson",
					value: function(t, i) {
						for (var n = [], r = 0; r < 10; ++r) n.push(i["asset" + r]);
						var a = new e(t, i.priority, i.priorityoffset, i.x, i.y, n, i.stepx, i.stepy, i.numbercount, i.fillzero, i.animate, i.align, i.countclip, i.xscale, i.yscale, i.rotation, i.color, i.alpha, i.visible);
						return a.set(i.value), a
					}
				}]), e
			}(c);
		e.exports = h
	}, {
		10: 10,
		11: 11,
		12: 12,
		17: 17,
		19: 19,
		5: 5,
		62: 62,
		7: 7,
		87: 87
	}],
	94: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(5)),
			a = n(t(7)),
			s = n(t(17)),
			o = n(t(10)),
			u = n(t(11)),
			l = t(87),
			c = t(60),
			f = t(62),
			h = function(t) {
				function e(t, i, n, a, u, l, c, h, _, d, p, v, g) {
					var m, y;
					(0, r.
				default)(this, e);
					for (var b = arguments.length, k = new Array(b > 13 ? b - 13 : 0), w = 13; w < b; w++) k[w - 13] = arguments[w];
					return (y = (0, s.
				default)(this, (m = (0, o.
				default)(e)).call.apply(m, [this, t, i, n, a].concat(k)))).startPixel = _ || 0, y.endPixel = d || u, y.animTime = p || 0, y.width = u, y.height = l, y.progress = 0, y.anim = null, y.node_full = new f(i + .001), y.node_empty = new f(i), y.getNode().addNode(y.node_full), y.getNode().addNode(y.node_empty), y.setImage(!1, c), y.setImage(!0, h), y.__updateWidth(0), y
				}
				return (0, u.
			default)(e, t), (0, a.
			default)(e, [{
					key: "__displayWidth",
					value: function(t, e) {
						var i = (this.endPixel - this.startPixel) * t + this.startPixel;
						return e || (i = i * this.node_full.getAsset().getAssetWidth() / this.width), i
					}
				}, {
					key: "__updateWidth",
					value: function(t) {
						this.node_full.setAssetWH(this.__displayWidth(t, !1), -1), this.node_full.setTextureXYWH(0, 0, this.__displayWidth(t, !0), -1)
					}
				}, {
					key: "set",
					value: function(t) {
						this.progress = t, this.animTime ? this.anim = {
							pos: 0,
							from: this.progress,
							to: t
						} : this.__updateWidth(t)
					}
				}, {
					key: "__execute",
					value: function(t) {
						if (this.anim) {
							this.anim.pos += t;
							var e = this.anim.to;
							if (this.anim.pos >= this.animTime) this.anim = null;
							else {
								var i = this.anim.to - this.anim.from;
								e = this.anim.from + i * this.anim.pos / this.animTime
							}
							this.__updateWidth(e)
						}
					}
				}, {
					key: "reset",
					value: function() {
						this.set(0)
					}
				}, {
					key: "max",
					value: function() {
						this.set(100)
					}
				}, {
					key: "get",
					value: function() {
						return this.progress
					}
				}, {
					key: "setImage",
					value: function(t, e) {
						var i = c.get(e);
						t ? this.node_empty.changeAsset(i) : this.node_full.changeAsset(i)
					}
				}], [{
					key: "fromJson",
					value: function(t, i) {
						var n = new e(t, i.priority, i.x, i.y, i.width, i.height, i.
					default, i.disable, i.startpixel, i.endpixel, i.animtime, i.orientation, null, i.xscale, i.yscale, i.rotation, i.color, i.alpha, i.visible);
						return n.progress = i.value, n
					}
				}]), e
			}(l);
		e.exports = h
	}, {
		10: 10,
		11: 11,
		12: 12,
		17: 17,
		5: 5,
		60: 60,
		62: 62,
		7: 7,
		87: 87
	}],
	99: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(21)),
			a = n(t(5)),
			s = n(t(7)),
			o = n(t(17)),
			u = n(t(10)),
			l = n(t(9)),
			c = n(t(11)),
			f = t(87),
			h = t(62),
			_ = t(60),
			d = t(79);

		function p(t, e, i, n, r, a, s) {
			//not here
			//console.log(t.fillStyle);
			t.globalAlpha = a / 255, t.strokeStyle = d.toString(s), t.beginPath(), t.moveTo(e, i), t.lineTo(n, r), t.stroke()
		}
		function v(t, e, i, n, r, a, s, o) {
			// not here
			//console.log(t.fillStyle);
			t.globalAlpha = a / 255, t.rect(e, i, n, r), o ? (t.fillStyle = d.toString(s), t.fill()) : (t.strokeStyle = d.toString(s), t.stroke())
		}
		function g(t, e, i, n, r) {
			t.globalAlpha = r / 255, _.get(n).draw(t, e, i)
		}
		function m(t, e, i, n, r, a, s, o) {
			e.font = t.fonts[o];
			var u = t._canvas.width;
			switch (e.globalAlpha = a / 255, e.fillStyle = d.toString(s), t.align) {
			case "left":
				e.textAlign = "left";
				break;
			case "center":
				e.textAlign = "center", i += u / 2;
				break;
			case "right":
				e.textAlign = "right", i += u
			}
			e.textBaseline = "alphabetic", r.split("\n").forEach(function(t) {
				e.fillText(t, i, n), n += 1.2 * parseInt(e.font)
			})
		}
		var y = function(t) {
				function e(t, i, n, r, s, l, c, f, d, p, v) {
					var g, m;
					(0, a.
				default)(this, e);
					for (var y = arguments.length, b = new Array(y > 11 ? y - 11 : 0), k = 11; k < y; k++) b[k - 11] = arguments[k];
					(m = (0, o.
				default)(this, (g = (0, u.
				default)(e)).call.apply(g, [this, t, i, n, r].concat(b)))).asset = _.getTemporaryCanvasAsset(), m._canvas = m.asset.getCanvas(), m._canvas.width = s, m._canvas.height = l, m.vw = c, m.vh = f, m.clearAlpha = 0, m.clearColor = 0, m.commands = [], m.fonts = {}, m.align = "left", m.dirty = !0;
					var w = new h(i);
					return m.getNode().addNode(w), w.changeAsset(m.asset), w.setAssetWH(c, f), w.setTextureXYWH(0, 0, c, f), m.asset_node = w, m
				}
				return (0, c.
			default)(e, t), (0, s.
			default)(e, [{
					key: "__execute",
					value: function(t) {
						this.dirty && (this.__refresh(), this.dirty = !1)
					}
				}, {
					key: "__die",
					value: function() {
						_.freeTemporaryCanvasAsset(this.asset), (0, l.
					default)((0, u.
					default)(e.prototype), "__die", this).call(this)
					}
				}, {
					key: "getProperty",
					value: function() {
						return Object.assign((0, l.
					default)((0, u.
					default)(e.prototype), "getProperty", this).call(this), {
							view_width: this.vw,
							view_height: this.vh
						})
					}
				}, {
					key: "setClearColor",
					value: function(t, e) {
						this.clearAlpha = t, this.clearColor = e, this.dirty = !0
					}
				}, {
					key: "setFont",
					value: function(t, e, i) {
						this.fonts[t] = i + "px " + (e || "")
					}
				}, {
					key: "setViewPosition",
					value: function(t, e) {
						this.asset_node.setTextureXYWH(t, e, this.vw, this.vh)
					}
				}, {
					key: "alignLeft",
					value: function() {
						this.align = "left", this.dirty = !0
					}
				}, {
					key: "alignRight",
					value: function() {
						this.align = "right", this.dirty = !0
					}
				}, {
					key: "alignCenter",
					value: function() {
						this.align = "center", this.dirty = !0
					}
				}, {
					key: "draw",
					value: function(t) {
						this.commands = t, this.dirty = !0
					}
				}, {
					key: "setSimpleText",
					value: function(t, e, i, n, r, a) {
						t = t || "", e = e || 26, n = n || "sans-serif", i = i || 0, this.setFont(0, n, e), this.setClearColor(0, 16777215), this.setViewPosition(0, 0);
						var s = [];
						if (r) {
							var o = this._canvas.getContext("2d");
							for (o.font = this.fonts[0]; t.length;) {
								if (o.measureText(t).width <= this.width) {
									s.push(t);
									break
								}
								var u = void 0;
								for (u = 1; u <= t.length && !(o.measureText(t.substr(0, u)).width > this._canvas.width); ++u);
								u = Math.max(1, u - 1), s.push(t.substr(0, u)), t = t.substr(u)
							}
						} else s = [t];
						this.draw([
							["VD_DRAW_TEXT", 0, e, s.join("\n"), 255, i, 0]
						])
					}
				}, {
					key: "__refresh",
					value: function() {
						var t = this._canvas.getContext("2d");
						// The following line is perhaps blackifying; Finder: 00001
						//console.log(lives[0].non_black)
						//window.alert('????')
						//console.log(d.toString(this.clearColor));
						t.clearRect(0, 0, this._canvas.width, this._canvas.height), this.clearAlpha && (t.globalAlpha = this.clearAlpha / 255, t.fillStyle = d.toString(this.clearColor), t.fillRect(0, 0, this._canvas.width, this._canvas.height));
						var e = !0,
							i = !1,
							n = void 0;
						try {
							for (var a, s = this.commands[Symbol.iterator](); !(e = (a = s.next()).done); e = !0) {
								var o = a.value;
								switch (o[0]) {
								case "VD_DRAW_LINE":
									p.apply(void 0, [t].concat((0, r.
								default)(o.slice(1))));
									break;
								case "VD_DRAW_TEXT":
									m.apply(void 0, [this, t].concat((0, r.
								default)(o.slice(1))));
									break;
								case "VD_FILL_RECT":
									v.apply(void 0, [t].concat((0, r.
								default)(o.slice(1))));
									break;
								case "VD_DRAW_IMAG":
									g.apply(void 0, [t].concat((0, r.
								default)(o.slice(1))))
								}
							}
						} catch (u) {
							i = !0, n = u
						} finally {
							try {
								e || null == s.
								return ||s.
								return ()
							} finally {
								if (i) throw n
							}
						}
						this.asset.updateTexture()
					}
				}], [{
					key: "fromJson",
					value: function(t, i) {
						var n = new e(t, i.priority, i.x, i.y, i.docwidth || i.width, i.docheight || i.height, i.width, i.height, i.maxcommandcount, i.orientation, nothing, i.xscale, i.yscale, i.rotation, 16777215, i.alpha, i.visible);
						return n.setSimpleText(i.text, i.fontsize, i.color, i.font), n
					}
				}]), e
			}(f);
		e.exports = y
	}, {
		10: 10,
		11: 11,
		12: 12,
		17: 17,
		21: 21,
		5: 5,
		60: 60,
		62: 62,
		7: 7,
		79: 79,
		87: 87,
		9: 9
	}],
	90: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(5)),
			a = n(t(7)),
			s = n(t(17)),
			o = n(t(10)),
			u = n(t(11)),
			l = t(87),
			c = t(60),
			f = t(62),
			h = function(t) {
				function e(t, i, n, a, u, l) {
					var h;
					(0, r.
				default)(this, e), h = (0, s.
				default)(this, (0, o.
				default)(e).call(this, t, i, n, a)), u || (u = white);
					var _ = c.get(u),
						d = new f(i);
					return h.getNode().addNode(d), d.changeAsset(_), h.asset_node = d, h.setVertices(l), h
				}
				return (0, u.
			default)(e, t), (0, a.
			default)(e, [{
					key: "setVertices",
					value: function(t) {
						this.asset_node.setVertices([t[0], t[1], t[2], t[3], t[6], t[7], t[6], t[7], t[2], t[3], t[4], t[5]])
					}
				}, {
					key: "setColors",
					value: function(t) {
						this.asset_node.setColors([t[0], t[1], t[2], t[3], t[6], t[7], t[6], t[7], t[2], t[3], t[4], t[5]])
					}
				}]), e
			}(l);
		e.exports = h
	}, {
		10: 10,
		11: 11,
		12: 12,
		17: 17,
		5: 5,
		60: 60,
		62: 62,
		7: 7,
		87: 87
	}],
	93: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(5)),
			a = n(t(7)),
			s = n(t(17)),
			o = n(t(10)),
			u = n(t(11)),
			l = t(87),
			c = t(62),
			f = t(27),
			h = function(t) {
				function e(t, i, n, a, u) {
					var l;
					(0, r.
				default)(this, e), (l = (0, s.
				default)(this, (0, o.
				default)(e).call(this, t, i, n, a))).points = u || [];
					var f = new c(i);
					return l.getNode().addNode(f), l.asset_node = f, l
				}
				return (0, u.
			default)(e, t), (0, a.
			default)(e, [{
					key: "setVertices",
					value: function(t) {
						this.points = t, this.dirty = !0
					}
				}, {
					key: "addPoint",
					value: function(t, e) {
						this.points.push(t), this.points.push(e), this.dirty = !0
					}
				}, {
					key: "setTexture",
					value: function(t) {
						this.asset_node.changeAsset(t), this.dirty = !0
					}
				}, {
					key: "__execute",
					value: function() {
						this.dirty && (this.__recalculate(), this.dirty = !1)
					}
				}, {
					key: "__recalculate",
					value: function() {
						if (this.asset_node.getAsset()) {
							var t = [],
								e = f(this.points),
								i = 0,
								n = 0,
								r = 0,
								a = 0,
								s = !0,
								o = !1,
								u = void 0;
							try {
								for (var l, c = e[Symbol.iterator](); !(s = (l = c.next()).done); s = !0) {
									var h = l.value,
										_ = this.points[2 * h],
										d = this.points[2 * h + 1];
									t.push(_), t.push(d), i = Math.min(i, _), n = Math.max(n, _), r = Math.min(r, d), a = Math.max(a, d)
								}
							} catch (m) {
								o = !0, u = m
							} finally {
								try {
									s || null == c.
									return ||c.
									return ()
								} finally {
									if (o) throw u
								}
							}
							var p = n - i,
								v = a - r,
								g = t.map(function(t, e) {
									return e % 2 == 0 ? (t - i) / p : (t - r) / v
								});
							this.asset_node.setVertices(t), this.asset_node.setTextureUV(g)
						}
					}
				}]), e
			}(l);
		e.exports = h
	}, {
		10: 10,
		11: 11,
		12: 12,
		17: 17,
		27: 27,
		5: 5,
		62: 62,
		7: 7,
		87: 87
	}],
	97: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(5)),
			a = n(t(7)),
			s = n(t(17)),
			o = n(t(10)),
			u = n(t(11)),
			l = t(87),
			c = t(60),
			f = t(64),
			h = function(t) {
				function e(t, i, n, a, u, l, h, _) {
					var d;
					(0, r.
				default)(this, e), d = (0, s.
				default)(this, (0, o.
				default)(e).call(this, t, i, n, a));
					var p = c.get(u),
						v = p.movies.filter(function(t) {
							return "movie" == t.type && t.name == l
						})[0];
					if (_ instanceof Array) {
						var g = _;
						for (_ = {}; g.length;) _[g.shift()] = g.shift()
					}
					return d.movie = new f(i, p.msPerFrame, v, p, _ || {}), d.getNode().addNode(d.movie), d.movie.setEndCallback(h), d
				}
				return (0, u.
			default)(e, t), (0, a.
			default)(e, [{
					key: "setFrameRate",
					value: function(t) {
						this.framerate = t
					}
				}, {
					key: "stop",
					value: function() {
						this.movie.stop()
					}
				}, {
					key: "play",
					value: function() {
						this.movie.play()
					}
				}, {
					key: "gotoFrame",
					value: function(t) {
						this.movie.gotoFrame(t)
					}
				}, {
					key: "reachFrame",
					value: function(t, e) {
						this.movie.setFrameCallback(t, e)
					}
				}, {
					key: "framerate",
					get: function() {
						return Math.round(1e3 / this.movie.frameLen)
					},
					set: function(t) {
						this.movie.frameLen = 1e3 / t
					}
				}]), e
			}(l);
		e.exports = h
	}, {
		10: 10,
		11: 11,
		12: 12,
		17: 17,
		5: 5,
		60: 60,
		64: 64,
		7: 7,
		87: 87
	}],
	100: [function(t, e, i) {
		"use strict";
		var n = t(12)(t(22));
		window.LivePlayer = function(e, i) {
			//Finder 00002 Liveplayer!
			window.config = i, i.breakOnNoWebAudio = !0;
			var r = t(81);
			r.init(e), r.go();
			var a = t(83);
			a.addTexbArray(["/assetRaw/assets/image/live/notes/notes_icon/tx_notes_icon.texb", "/assetRaw/assets/image/ui/live/tx_live_play.texb", "/assetRaw/assets/image/ui/live/tx_live.texb", "/assetRaw/assets/image/ui/live/tx_l_gauge_19.texb", "/assetRaw/assets/image/ui/common/tx_common_others.texb", "/assetRaw/assets/image/ui/common/tx_com_win_07.texb", "/assetRaw/assets/flash/ui/live/img/tx_live_play.texb", "/assetRaw/assets/flash/ui/live/img/tx_skill_effect.texb", "/assetRaw/assets/flash/ui/live/img/tx_live.texb", "/assetRaw/assets/flash/ui/live/img/tx_combo_number.texb", "/assetRaw/assets/flash/ui/live/img/tx_all_perfect.texb", "/assetRaw/assets/flash/ui/live/img/tx_all_perfect2.texb", "/assetRaw/assets/flash/ui/live/img/tx_effort_point_box_others.texb", "/assetRaw/assets/flash/ui/live/img/tx_ef_312.texb", "/assetRaw/assets/flash/ui/live/img/tx_ef_306_1.texb", "/assetRaw/assets/flash/ui/event/img/tx_ef_815_challenge.texb", "/assetRaw/assets/flash/ui/event/img/tx_quest.texb", "/assetRaw/assets/flash/ui/event/img/tx_team.texb", "/assetRaw/assets/flash/ui/event/img/tx_ef_808.texb"]), a.addUIArray(["/asset/assets/ui/live/game/ui_live.json", "/asset/assets/ui/live/game/ui_in_game_menu.json", "/asset/assets/ui/live/game/elements/ui_count_down.json", "/asset/assets/ui/live/game/ui_gain_score.json", "/asset/assets/ui/live/game/ui_character.json", "/asset/assets/ui/common/dialog/ui_dialog_middle.json"]), i.show_mission_target && (a.addUI("/asset/assets/ui/live/game/elements/mission_target/ui_number.json"), a.addUI([null, "/asset/assets/ui/live/game/elements/mission_target/ui_perfect.json", "/asset/assets/ui/live/game/elements/mission_target/ui_great.json", "/asset/assets/ui/live/game/elements/mission_target/ui_good.json", "/asset/assets/ui/live/game/elements/mission_target/ui_love.json"][i.show_mission_target]));
			var s = "/assetRaw/assets/flash/ui/live/";
			a.addFlsh(s + "live_timing.flsh"), a.addFlsh(s + "live_combo_number.flsh"), a.addFlsh(s + "live_notes.flsh"), a.addFlsh(s + "live_fullcombo.flsh"), a.addFlsh(s + "live_result_perfect.flsh"), a.addFlsh(s + "live_title.flsh"), a.addFlsh(s + "live_clear.flsh"), a.addFlsh(s + "live_scoregauge.flsh"), a.addFlsh(s + "live_notes_hold_circle.flsh"), i.effect_flag && -1 != i.cutin_setting && a.addFlsh(s + "live_combo_cheer.flsh"), -1 != i.cutin_setting && (a.addFlsh(s + "live_notes_bomb.flsh"), a.addFlsh(s + "live_notes_hold_effect.flsh"), a.addFlsh(s + "live_center.flsh")), i.base_score && (a.addFlsh(s + "live_skill_motion.flsh"), a.addFlsh(s + "live_skill_ef_01.flsh"), a.addFlsh(s + "live_skill_ef_02.flsh"), 0 == i.cutin_setting ? a.addFlsh(s + "live_cut_in.flsh") : 1 == i.cutin_setting && a.addFlsh(s + "live_cut_in_midium.flsh")), i.show_mission_target && a.addFlsh("/assetRaw/assets/flash/ui/event/event_ef_31.flsh"), a.addImageArray(i.lives.map(function(t) {
				return t.bg
			})), a.addImageArray(i.lives.filter(function(t) {
				return t.jacket_icon
			}).map(function(t) {
				return t.jacket_icon
			})), a.addImageArray(i.lives.filter(function(t) {
				return t.jacket_frame
			}).map(function(t) {
				return t.jacket_frame
			})), a.addImageArray(i.lives.filter(function(t) {
				return t.jacket_text
			}).map(function(t) {
				return t.jacket_text
			})), i.character && (window.assert(9 === i.character.length, "Character count must be 9!"), i.character.forEach(function(t) {
				"string" == typeof t ? a.addImage(t) : (a.addImage(t.live_asset), t.skill && t.skill.navi && a.addImage(t.skill.navi + "?gettexb"))
			})), i.ui_auto && a.addImage(i.ui_auto);
			for (var o = ["smile", "pure", "cool"], u = 0; u < o.length; u++) {
				var l = o[u];
				a.addImageArray([i["ui_" + l], i["ui_" + l + "_arrow"], i["ui_" + l + "_parallel"]])
			}
			a.addSoundArray(i.lives.map(function(t) {
				return t.sound
			})), i.character.forEach(function(t) {
				"object" === (0, n.
			default)(t) && t.skill && a.addSound(t.skill.voice_asset_path)
			}), i.ve_clear && a.addSound(i.ve_clear), a.addSoundArray([i.se_perfect, i.se_great, i.se_good, i.se_bad], "Accuracy sound not defined!"), a.addSound("/asset/assets/sound/ui/se/SE_326.mp3"), a.addSound("/asset/assets/sound/ui/se/SE_001.mp3"), a.addSound("/asset/assets/sound/ui/se/SE_004.mp3"), a.addSound("/asset/assets/sound/ui/se/SE_704.mp3"), a.addSound("/asset/assets/sound/ui/se/SE_862.mp3"), a.preload().then(function() {
				r.sysLoad(t(101))
			})
		}
	}, {
		101: 101,
		12: 12,
		22: 22,
		81: 81,
		83: 83
	}],
	101: [function(t, e, i) {
		"use strict";
		var n = t(12)(t(19)),
			r = t(81),
			a = t(69),
			s = t(96),
			o = t(92),
			u = t(97),
			l = t(84),
			c = t(144),
			f = config.localize,
			h = null,
			_ = !1;

		function d() {
			//点击屏幕开始游戏；点此自动播放；点击全屏
			var t = new o(null, 60, 480, 75, 255, "#FFFFFF", "sans-serif", 20, f.startGame || "\u70b9\u6b64\u5f00\u59cb\u6e38\u620f"),
				e = new o(null, 60, 480, 535, 255, "#FFFFFF", "sans-serif", 20, f.autoPlay || "\u70b9\u6b64\u770b\u8c31\uff08\u81ea\u52a8\u64ad\u653e\uff09"),
				i = new o(null, 60, 480, 305, 255, "#FFFFFF", "sans-serif", 20, f.fullScreen || "\u70b9\u6b64\u5207\u6362\u5168\u5c4f");
			t.setAlign("center"), e.setAlign("center"), i.setAlign("center"), t.stageOnly(), e.stageOnly(), i.stageOnly(), h.hookQueue(function(t) {
				return 2 == t.type && (t.y > 500 ? (config.is_auto = !0, l.initOnClickForLive(), _ = !0) : t.y < 140 ? (config.is_auto = !1, l.initOnClickForLive(), _ = !0) : t.y > 280 && t.y < 360 && r.switchFullscreen(), !0)
			})
		}
		e.exports = {
			setup: function(e) {
				h = a.getInstance();
				var i = new s(null, 0, -88, 0, config.lives[0].bg);
				i.stageOnly(), i.setColor(127, 16777215), e ?
				function(e) {
					var i = new o(null, 60, 300, 85, 255, "#FFFFFF", "sans-serif", 20, ""),
						r = new o(null, 60, 480, 535, 255, "#FFFFFF", "sans-serif", 20, "Replay"),
						a = new o(null, 60, 660, 85, 255, "#FFFFFF", "sans-serif", 20, "");
					i.setAlign("center"), r.setAlign("center"), a.setAlign("center");
					var s = !1;
					if (h.hookQueue(function(t) {
						return 2 == t.type && (t.y > 500 && (s && (s = s.kill()), i = i.kill(), r = r.kill(), a = a.kill(), d()), !0)
					}), !config.is_auto) {
						var c = "",
							_ = t(109).AccuracyLog.getInstance().getPreciseStats();
						c += (f.score || "\u5f97\u5206") + ": " + e.score + "\n", c += (f.combo || "Combo") + ": " + e.max_combo + "\n", c += "PERFECT: " + e.perfect + "\n", c += "GREAT: " + e.great + "\n", c += "GOOD: " + e.good + "\n", c += "BAD: " + e.bad + "\n", c += "MISS: " + e.miss + "\n", c += "\n", c += (f.losthp || "\u5931\u8840") + ": " + e.damage + "\n", c += (f.kizuna || "\u83b7\u5f97\u7eca") + ": " + e.love + "\n" + (f.icon || "\u83b7\u5f97\u6d3b\u52a8\u9053\u5177") + ": " + e.eventpoint + "\n";
						var p = t(136).create(440, 240, 100),
							v = (0, n.
						default)(p, 2);
						if (s = v[0], v[1]) {
							var g = "";
							g += (f.pfNormal || "\u5355\u70b9PERFECT") + ": " + _.getNormal().result + " / " + _.getNormal().total + "\n", g += (f.pfSameTiming || "\u540c\u65f6\u62bcPERFECT") + ": " + _.getSameTiming().result + " / " + _.getSameTiming().total + "\n", g += (f.pfHold || "\u957f\u62bcPERFECT") + ": " + _.getHold().result + " / " + _.getHold().total + "\n", g += (f.pfSlide || "\u6ed1\u952ePERFECT") + ": " + _.getSlide().result + " / " + _.getSlide().total + "\n", a.setText(g)
						} else if (c += "\n" + (f.preciseResultMF || "\u7ec4\u66f2\u6a21\u5f0f\u6682\u4e0d\u652f\u6301\u67e5\u770bPERFECT\u6570\u5206\u5e03\u548c\u5224\u5b9a\u5206\u5e03\u56fe"), i.x = 480, e.is_all_perfect) {
							var m = new u(s, 300, 40, 80, "assets/flash/ui/live/live_result_perfect.flsh", "ef_360", function() {
								m = m.kill()
							});
							l.playSE("assets/sound/ui/se/SE_704.mp3")
						}
						i.setText(c)
					}
				}(e) : d()
			},
			execute: function() {
				_ && (_ = !1, r.sysLoad(c))
			},
			leave: function() {
				h.hookQueue(nothing), r.stageClear()
			}
		}
	}, {
		109: 109,
		12: 12,
		136: 136,
		144: 144,
		19: 19,
		69: 69,
		81: 81,
		84: 84,
		92: 92,
		96: 96,
		97: 97
	}],
	136: [function(t, e, i) {
		"use strict";
		var n = t(12)(t(19)),
			r = t(91),
			a = t(96),
			s = t(97),
			o = t(93),
			u = t(84),
			l = t(134),
			c = t(109).AccuracyLog.getInstance(),
			f = t(56);

		function h(t) {
			t == f.ignored && (t = f.miss);
			var e = Math.abs(t - f.perfect);
			return e > f.perfect ? f.miss : e
		}
		var _ = 4,
			d = 90,
			p = 360,
			v = 25;
		e.exports = {
			create: function(t, e, i) {
				var f = new r(null, i, t, e);
				if (config.lives.length > 1) return [f, !1];
				if (c.isAllPerfect()) {
					var g = new s(f, 300, 480 - t, 320 - e, "assets/flash/ui/live/live_result_perfect.flsh", "ef_360", function() {
						g = g.kill()
					});
					u.playSE("assets/sound/ui/se/SE_704.mp3")
				}
				return new a(f, 1, 160, 3, "assets/image/ui/live/l_etc_02.png"), new a(f, 50, 50, 30, "assets/image/ui/live/l_gauge_12.png"), new a(f, 2, 50, 30, "assets/image/ui/live/l_gauge_11.png"), c.isAllPerfect() ||
				function(t) {
					var e = function(t) {
							var e = [];
							if (t.length > d) for (var i = 0, n = Math.floor(t.length / d * 100) / 100, r = 1; r <= d; ++r) {
								var a = i,
									s = Math.floor(n * r) - i;
								i += s;
								for (var o = 0, u = a; u <= a + s - 1; u++) o += h(t[u].accuracy);
								e.push({
									position_x: (r - 1) * _,
									position_y: v * o / s
								})
							} else {
								var l = Math.floor(p / t.length * 100) / 100;
								for (var c in t) e.push({
									position_x: c * l,
									position_y: v * h(t[c].accuracy)
								})
							}
							return e
						}(l.note_log[0].map(function(t) {
							return {
								count: t.note_number,
								effect: t.effect,
								accuracy: t.accuracy,
								tap: t.time,
								is_same: t.is_same_timing,
								release: t.release_time,
								position: t.position
							}
						})),
						i = new o(t, 60, 61, 41, []);
					i.setColor(255, 10921638), i.addPoint(p, 0), i.addPoint(0, 0);
					var r = !0,
						a = !1,
						s = void 0;
					try {
						for (var u, c = e.entries()[Symbol.iterator](); !(r = (u = c.next()).done); r = !0) {
							var f = (0, n.
						default)(u.value, 2),
								g = f[0],
								m = f[1];
							i.addPoint(m.position_x, m.position_y), g == e.length - 1 && m.position_x < p && i.addPoint(p, m.position_y)
						}
					} catch (y) {
						a = !0, s = y
					} finally {
						try {
							r || null == c.
							return ||c.
							return ()
						} finally {
							if (a) throw s
						}
					}
					i.setTexture("assets/image/ui/live/l_gauge_19.png")
				}(f), [f, !0]
			}
		}
	}, {
		109: 109,
		12: 12,
		134: 134,
		19: 19,
		56: 56,
		84: 84,
		91: 91,
		93: 93,
		96: 96,
		97: 97
	}],
	109: [function(t, e, i) {
		"use strict";
		e.exports = {
			Trigger: {}
		}, t(111), t(113), t(112), t(114), t(129), t(128), t(110), t(130), t(116), t(126), t(127), t(122), t(121), t(123), t(124), t(117), t(118), t(119), t(120), t(125), t(115)
	}, {
		110: 110,
		111: 111,
		112: 112,
		113: 113,
		114: 114,
		115: 115,
		116: 116,
		117: 117,
		118: 118,
		119: 119,
		120: 120,
		121: 121,
		122: 122,
		123: 123,
		124: 124,
		125: 125,
		126: 126,
		127: 127,
		128: 128,
		129: 129,
		130: 130
	}],
	144: [function(t, e, i) {
		"use strict";
		var n, r, a, s, o = t(12)(t(19)),
			u = t(81),
			l = t(89),
			c = t(96),
			f = t(98),
			h = t(97),
			_ = t(88),
			d = t(55),
			p = t(58),
			v = t(84),
			g = t(139),
			m = t(138),
			y = t(134),
			b = t(141),
			k = t(142),
			w = t(103),
			x = t(143),
			A = t(137),
			S = t(52),
			E = t(106),
			T = t(59),
			C = !1,
			R = {
				loading: 1,
				loaded: 2,
				live_title: 3,
				playing: 4,
				paused: 5,
				game_over: 6,
				finalized: 7,
				count_down: 8
			},
			I = 0;

		function L(t, e) {
			var i = Math.bipolar(t, e, g.X, g.Y),
				n = (0, o.
			default)(i, 2),
				r = n[0],
				a = n[1];
			return r += g.CHARACTER_ANGLE / 2, (r = Math.floor(r / g.CHARACTER_ANGLE) * g.CHARACTER_ANGLE) >= -180 && r < -90 && (r += 360), [r, a]
		}
		var F = null,
			P = {},
			N = [],
			O = {};

		function M() {
			a = R.count_down, E.CountDown.create(C.getWrappedGroupNodeTask("task_group_count_down")).show(function() {
				C.setNodeVisible("button_pause", !0), v.resumeLive(), a = R.playing
			})
		}
		function B() {
			var e = 1200;
			config.ve_clear && (e = 1e3 * v.getLength(v.playSE(config.ve_clear)));
			var i = null;
			S({
				showFlash: function() {
					i = new h(C, 2950, 480, 320, "assets/flash/ui/live/live_clear.flsh", "ef_311", nothing, {}), a = R.game_over
				},
				func: function() {
					i = i.kill(), u.sysLoad(t(101), {
						score: m.getScore("smile") + m.getScore("cute") + m.getScore("cool"),
						damage: m.getMaxTotalHp() - m.getTotalHp(),
						love: m.getLove(),
						eventpoint: m.getEventPoint(),
						combo: m.getCombo(),
						max_combo: m.getMaxCombo(),
						perfect: m.getAccuracyCount("perfect"),
						great: m.getAccuracyCount("great"),
						good: m.getAccuracyCount("good"),
						bad: m.getAccuracyCount("bad"),
						miss: m.getAccuracyCount("miss"),
						starperfect: m.getStarPerfectCount(),
						starsuccess: m.getStarSuccessCount(),
						starfail: m.star_accuracy_count.good + m.star_accuracy_count.bad + m.star_accuracy_count.miss,
						sametimingperfect: m.getSameTimingPerfectCount(),
						is_all_perfect: m.getAccuracyCount("perfect") == I
					})
				}
			}).showFlash().delay(e).func().run_sysload_safe()
		}
		function U() {
			config.__currentLive.bg && (r && (r = r.kill()), (r = new f(null, 0, -88, 0, -1, -1, config.__currentLive.bg)).stageOnly())
		}
		function V(t) {
			var e = config.__currentLive,
				i = [null, "smile", "pure", "cool"][e.attribute] || "smile",
				n = new h(null, 2950, 480, 320, "assets/flash/ui/live/live_title.flsh", "ef_314", nothing, {
					"%title_jacket": e.jacket_icon,
					"%title_text": e.jacket_text || blank,
					"%title_frame": e.jacket_frame || blank
				});
			return n.play(), n.gotoFrame(i + "_start"), n.reachFrame(i + "_end", t), n
		}
		function D(t, e) {
			var i = L(t.x, t.y),
				n = (0, o.
			default)(i, 2),
				r = n[0],
				a = n[1];
			if (!(r < 0 || r > 180)) {
				var s = w.angleToOrdinal(r);
				y.touch_map && Math.aboutEqual(a, g.R, 128) && (y.tap(s), P[e] = {
					x: t.x,
					y: t.y,
					position: s
				})
			}
		}
		function Y(t, e, i) {
			var n = L(t.x, t.y),
				r = (0, o.
			default)(n, 2),
				a = r[0],
				s = r[1];
			if (!(a < 0 || a > 180)) {
				var u = w.angleToOrdinal(a);
				if (y.touch_map && Math.aboutEqual(s, g.R, 128)) {
					if (!i) return void y.drag(u);
					if (P[e] && y.touch_map[P[e].position] != y.TOUCH_STATE.HOLDING) {
						u != P[e].position && y.drag(u), P[e] = {
							x: t.x,
							y: t.y,
							position: u
						};
						var l = L(i.x, i.y),
							c = (0, o.
						default)(l, 2),
							f = c[0],
							h = (c[1], w.angleToOrdinal(f));
						u != h && y.clear(h)
					}
				}
			}
		}
		function H(t, e) {
			var i = L(t.x, t.y),
				n = (0, o.
			default)(i, 2),
				r = n[0];
			n[1], w.angleToOrdinal(r), y.touch_map && P[e] && (y.isolate(P[e].position), delete P[e])
		}
		var G = 0,
			j = 1,
			z = 2,
			X = 3,
			W = [];

		function K(t) {
			W.push(t)
		}
		function q(t) {
			for (var e in config.key_config) if (t.key == config.key_config[e]) return t.preventDefault(), void("keydown" == t.type ? y.tap(9 - e) : y.isolate(9 - e))
		}
		function Z() {
			config.is_auto && config.ui_auto && new c(C, 1e4, 357, 120, config.ui_auto), a = R.playing, config.character ? (r.setAnimSpline([{
				target: "SPL_MODIFY_R",
				keys: [
					[0, 1],
					[500, .4375]
				]
			}, {
				target: "SPL_MODIFY_G",
				keys: [
					[0, 1],
					[500, .4375]
				]
			}, {
				target: "SPL_MODIFY_B",
				keys: [
					[0, 1],
					[500, .4375]
				]
			}]), r.setAnimCallback(function() {
				C.setVisible(!0), v.playLive(), b.updatePerfectSupportView()
			}), r.animPlay()) : (C.setVisible(!0), v.playLive(), b.updatePerfectSupportView())
		}
		e.exports = {
			setup: function() {
				a = R.loading, n = 0, config.is_auto || (s = new _(null, -88, 0, 1136, 640, 1, K), window.onkeydown = catchErr(q), window.onkeyup = catchErr(q)), (C = new l(null, g.BACKGROUND_PRIORITY, 0, 0, "assets/ui/live/game/ui_live.json")).setNodeVisible("button_pause", !0), C.setCallback("button_pause", T.onClick(function() {
					v.playSE("assets/sound/ui/se/SE_001.mp3"), a = R.paused, v.pauseLive(), P = {}, N = [], O = {}, y.clearTouchMap(), function() {
						C.setNodeVisible("button_pause", !1);
						var e = d.middle.close.appear(null, g.PAUSEMENU_PRIORITY, 0, 0);
						e.setClose(function() {
							e.disappear(), M()
						});
						var i = new l(e, g.PAUSEMENU_PRIORITY + 100, 0, 0, "assets/ui/live/game/ui_in_game_menu.json");
						i.setNodeVisible("button_ok", !1), i.setNodeVisible("button_cancel", !1), i.setNodeVirtualDocAlignCenter("label_live_name"), i.setNodeVirtualDocText("label_live_name", config.__currentLive.title || "LIVE PAUSED", 30), i.setNodeVirtualDocAlignCenter("label_live_rank"), i.setNodeVirtualDocText("label_live_rank", config.__currentLive.difficulty || "", 30), i.setCallback("button_resume", T.onClick(function() {
							v.playSE("assets/sound/ui/se/SE_004.mp3"), e.disappear(), M()
						})), i.setCallback("button_giveup", T.onClick(function() {
							v.playSE("assets/sound/ui/se/SE_004.mp3"), e.disappear(), u.sysLoad(t(101))
						}))
					}()
				})), C.stageOnly(), C.setAnim("bar_effect_default"), C.setAnim("score_effect_default"), C.setVisible(!1), function() {
					if (config.__currentLiveIndex = 0, config.__currentLive = config.lives[0], I = config.lives.reduce(function(t, e) {
						return t + e.notes_list.length
					}, 0), v.prepareLive(config.__currentLive.sound), 1 == config.random ? A.generateRandom(config.__currentLive.notes_list) : 2 == config.random && A.generateOldRandom(config.__currentLive.notes_list), -1 != config.cutin_setting && (F = x.init(C)), b.init(C), m.init(C, config.rank || !1), m.prepareForLive(), w.init(C), y.initializeLog(), k.initialize(config.no_skill), C.setAnim("hide_effect"), y.init(C), y.initBonusScoreRate(), C.setNodeVisible("button_seek", !1), C.setNodeVisible("task_score_timer", !1), U(), C.mission_target = E.MissionTarget.create(C.getWrappedGroupNodeTask("task_group_mission_target"), config.show_mission_target, m), a = R.loaded, config.__currentLive.jacket_icon) var t = V(function() {
						t = t.kill(), Z()
					});
					else Z()
				}()
			},
			execute: function(t) {
				!
				function(t) {
					if (a == R.playing) {
						for (; N.length;) t.unshift(N.pop());
						var e = {};
						for (var i in t) {
							var n = t[i],
								r = n.id;
							if (n.type == G) e[r] = !0, D(n, r), O[r] || (O[r] = {}), O[r].x = n.x, O[r].y = n.y, O[r].type = n.type;
							else if (n.type == z || n.type == X) e[r] ? N.push(n) : H(n, r);
							else if (n.type == j) {
								if (O[r]) {
									var s = n.x - O[r].x,
										o = n.y - O[r].y;
									s * s + o * o > 16384 ? (H(O[r], r), D(n, r)) : e[r] ? N.push(n) : Y(n, r, O[r])
								}
								O[r] || (O[r] = {}), O[r].x = n.x, O[r].y = n.y, O[r].type = n.type
							}
						}
					}
				}(W), W = [], a === R.playing ? (function(t) {
					if (y) if (n += t, y.update(t, n)) y.raiseDelayedSkill(t);
					else {
						if (a = R.game_over, C.setNodeVisible("button_pause", !1), config.lives[config.__currentLiveIndex + 1]) return config.__currentLiveIndex += 1, function() {
							m.resetHealValue(), config.__currentLive = config.lives[config.__currentLiveIndex], 1 == config.random ? A.generateRandom(config.__currentLive.notes_list) : 2 == config.random && A.generateOldRandom(config.__currentLive.notes_list), y.initBonusScoreRate(), k.initBonusActivationRate();
							var t = V(function() {
								t = t.kill(), m.commitChangeHp(), C.setAnim("showAll"), v.playLive(), a = R.playing, F && F.show(), C.setNodeVisible("button_pause", !0), b.updatePerfectSupportView(), m.prepareForLive(), w.resetSkill()
							});
							t.stop(), t.setVisible(!1), n = 0, v.stopLive(), v.prepareLive(config.__currentLive.sound), y.init(C), b.enable(), w.clearSkillCounter();
							var e = v.getLength(v.playSE("assets/sound/ui/se/SE_704.mp3"));
							p.setTimeout(function() {
								F && F.hide(), C.setAnim("hideAll"), config.__currentLiveIndex < 1 || (U(), r.setAnimSpline([{
									target: "SPL_MODIFY_R",
									keys: [
										[0, .4375],
										[500, .4375]
									]
								}, {
									target: "SPL_MODIFY_G",
									keys: [
										[0, .4375],
										[500, .4375]
									]
								}, {
									target: "SPL_MODIFY_B",
									keys: [
										[0, .4375],
										[500, .4375]
									]
								}]), r.setAnimCallback(null), r.animPlay()), t.setVisible(!0), t.play()
							}, 1e3 * e)
						}();
						if (m.isFullCombo(I)) {
							var e = new h(C, 2950, 480, 320, "assets/flash/ui/live/live_fullcombo.flsh", "ef_329");
							p.setTimeout(function() {
								e = e.kill(), B()
							}, g.FULLCOMBO_DISPLAY_MSEC)
						} else B()
					}
				}(1e3 * (v.tellLive() - n / 1e3)), config.base_hp && F && F.update(m.getTotalHpRatio()), m.commitScore(), y.clearTouchMapJustReleasedOnly(), C.mission_target && C.mission_target.update()) : a === R.paused || a === R.game_over ? v.pauseLive() : a == R.count_down && y.keepHoldEffect()
			},
			leave: function() {
				v.stopLive(), m.release(), b.release(), y.release(), w.release(), E.CountDown.reset(), s = s && s.kill(), u.stageClear(), r = null, window.onkeydown = null, window.onkeyup = null, delete config.__currentLiveIndex, delete config.__currentLive
			}
		}
	}, {
		101: 101,
		103: 103,
		106: 106,
		12: 12,
		134: 134,
		137: 137,
		138: 138,
		139: 139,
		141: 141,
		142: 142,
		143: 143,
		19: 19,
		52: 52,
		55: 55,
		58: 58,
		59: 59,
		81: 81,
		84: 84,
		88: 88,
		89: 89,
		96: 96,
		97: 97,
		98: 98
	}],
	102: [function(t, e, i) {
		"use strict";
		var n = t(140),
			r = t(138),
			a = {},
			s = 1,
			o = [null, "smile", "cute", "cool", null, "all"];
		a.view_class = t(145), a.create = function(t, e, i, a) {
			var u = {};
			u.position = t, u.rarity = e.rarity || 1, u.attribute_id = e.attribute || 5, u.attribute = o[u.attribute_id], u.unit_type_id = e.unit_type_id || 0, u.member_tag = e.member_tag || [], u.member_category = e.member_category || 0;
			var l = e.status || [];
			u.status = {
				smile: l[1],
				cute: l[2],
				cool: l[3]
			}, u.sync_status = null, u.buffed_status = null, u.unit_owning_user_id = s++, u.buff_rate = 1, u.is_hidden = u.position > 9, u.view = this.view_class.create(t, e, i, a), u.setSkill = function(t) {
				this.skill = n.create(t, u), this.mimic = null, this.__skill_params = t
			}, u.initializeView = function() {
				this.view.setSkill(this.skill, this.position, this.__skill_params)
			}, u.resetSkill = function(t) {
				this.skill && this.skill.reset(t)
			}, u.reapplySkillEffect = function() {
				this.skill && this.skill.applyEffectOnly()
			}, u.activateSkill = function(t, e) {
				u.activateSkillEffect(), u.showSkillEffect(t, e)
			}, u.activateSkillEffect = function() {
				u.skill.is_active || u.skill.activate(null, u.is_hidden)
			}, u.showSkillEffect = function(t, e) {
				u.skill.active && u.view.activateSkill(t, e, u.skill.is_boosted, u.skill.effect_type)
			}, u.activateMimicEffect = function(t) {
				t && (u.mimic = n.create(t, u, !0), u.mimic.overrideEffect(t), u.skill.is_boosted = t.is_boosted, u.mimic.activate(null, !0))
			}, u.showMimicEffect = function(t) {
				if (u.mimic && u.mimic.active) {
					u.skill.is_active = !0;
					var e = u.mimic.boosted || {},
						i = u.skill.is_boosted || e.level;
					this.view.activateMimic(this.skill, u.mimic, t, i)
				}
			}, u.showIndicator = function(t, e) {
				this.view.showIndicator(t, e), this.skill && this.skill.accuracyEnhanceSkillStart(t)
			}, u.deactivateSkill = function(t) {
				if (this.skill) {
					var e = this.skill.active,
						i = this.skill.update(t),
						n = e && !i;
					return this.mimic && (this.mimic.update(t) || (this.mimic = null, this.skill.is_active = !1)), n
				}
			}, u.hideIndicator = function(t) {
				this.view.hideIndicator(t), this.skill && this.skill.accuracyEnhanceSkillEnd()
			}, u.bomb = function() {
				this.view.bomb()
			}, u.release = function() {
				this.view.release(), this.skill && this.skill.release()
			}, u.clearSkillCounter = function() {
				this.skill && this.skill.clearTriggerCounter()
			}, u.deactivateEffect = function() {
				this.view.deactivateEffect()
			}, u.activateEffect = function() {
				this.view.activateEffect()
			}, u.gainActivationRate = function(t) {
				this.skill && this.skill.gainActivationRate(t)
			}, u.resetActivationRate = function() {
				this.skill && this.skill.resetActivationRate()
			}, u.canSync = function(t, e) {
				if (u.unit_owning_user_id == e.unit_owning_user_id) return !1;
				if (!t.effect_target.hasRecord()) return !0;
				var i = t.effect_target.getMemberTagList(),
					n = !0,
					r = !1,
					a = void 0;
				try {
					for (var s, o = i[Symbol.iterator](); !(n = (s = o.next()).done); n = !0) {
						var l = s.value;
						if (!u.member_tag.includes(l)) return !1
					}
				} catch (c) {
					r = !0, a = c
				} finally {
					try {
						n || null == o.
						return ||o.
						return ()
					} finally {
						if (r) throw a
					}
				}
				return !0
			};
			var c = function(t, e) {
					t && e && r.updateTotalStatus({
						smile: e.smile - t.smile,
						cute: e.cute - t.cute,
						cool: e.cool - t.cool
					})
				};
			return u.getSyncStatus = function() {
				return u.sync_status || u.buffed_status || u.status
			}, u.syncStatus = function(t, e) {
				u.sync_status = t, c(u.status, u.sync_status)
			}, u.restoreStatus = function() {
				c(u.sync_status, u.status), u.sync_status = null
			}, u.canAcceptBuff = function(t) {
				return !t.effect_target.hasRecord() || t.effect_target.isSatisfiedEverything(u)
			}, u.reapplyBuff = function() {
				u.isBuffed() && (u.buffed_status = {
					smile: u.status.smile * u.buff_rate,
					cute: u.status.cute * u.buff_rate,
					cool: u.status.cool * u.buff_rate
				}, c(u.status, u.buffed_status))
			}, u.applyBuff = function(t) {
				u.isBuffed() || (u.buff_rate = t, u.buffed_status = {
					smile: u.status.smile * t,
					cute: u.status.cute * t,
					cool: u.status.cool * t
				}, c(u.status, u.buffed_status))
			}, u.resetBuff = function() {
				u.isBuffed() && (c(u.buffed_status, u.status), u.buff_rate = 1, u.buffed_status = null)
			}, u.isBuffed = function() {
				return this.buff_rate > 1
			}, u.showSyncEffect = function(t) {
				this.view.startSyncEffect(t)
			}, u.stopSyncEffect = function(t) {
				this.view.stopSyncEffect(t)
			}, u.resetAccuracyEnhanceSkill = function() {
				this.skill && this.skill.resetAccuracyEnhanceSkill()
			}, u.isCenterPosition = function() {
				return 5 == this.position
			}, u.getComboPatternId = function() {
				if (u.skill) return (u.mimic || u.skill).getComboPatternId()
			}, u.getSkillEffectValue = function() {
				return u.skill ? (u.mimic || u.skill).getEffectValue() : 0
			}, u
		}, e.exports = a
	}, {
		138: 138,
		140: 140,
		145: 145
	}],
	138: [function(t, e, i) {
		"use strict";
		var n, r = t(12),
			a = r(t(19)),
			s = r(t(8)),
			o = t(97),
			u = t(104),
			l = t(109),
			c = t(108),
			f = t(52),
			h = {
				view: {}
			};

		function _(t, e, i) {
			t = Math.floor(t * e / 100), h.addScore(t, i), h.updateClearGauge()
		}
		h.setCalcClearGauge = function(t) {
			this.calcClearGauge = function(t) {
				var e, i = (e = {}, (0, s.
			default)(e, 1, 457), (0, s.
			default)(e, 2, 620), (0, s.
			default)(e, 3, 744), (0, s.
			default)(e, 4, 827), e),
					n = i[1],
					r = i[2],
					a = i[3],
					o = i[4],
					u = n,
					l = r - n,
					c = a - r,
					f = o - a,
					h = t[0],
					_ = t[1],
					d = t[2],
					p = t[3],
					v = _ - h,
					g = d - _,
					m = p - d;
				return function(t) {
					var e = null,
						i = null;
					return t >= p ? (e = o, i = 4) : t >= d ? (e = a + f * ((t - d) / m), i = 3) : t >= _ ? (e = r + c * ((t - _) / g), i = 2) : t >= h ? (e = n + l * ((t - h) / v), i = 1) : (e = u * (t / h), i = 0), [e / o * 100, i]
				}
			}(t)
		}, h.updateHpGauge = function() {
			this.hp_gauge_image = this.view.updateHpGauge(this.total_hp, this.max_total_hp)
		}, h.view.updateHpGauge = function(t, e) {
			var i = Math.max(t, 0) / e;
			i > 1 && (i = 1);
			var n;
			return n = i >= .8 ? "assets/image/ui/live/live_gauge_02_02.png" : i >= .6 ? "assets/image/ui/live/live_gauge_02_03.png" : i >= .4 ? "assets/image/ui/live/live_gauge_02_04.png" : i >= .2 ? "assets/image/ui/live/live_gauge_02_05.png" : "assets/image/ui/live/live_gauge_02_06.png", this.hp_progressbar.set(i), this.hp_gauge_image != n && (this.hp_progressbar.setImage(!1, n), "assets/image/ui/live/live_gauge_02_05.png" == n ? (this.task_form.setNodeVisible("animnode_blink", !0), this.task_form.setAnim("blink")) : "assets/image/ui/live/live_gauge_02_06.png" == n ? (this.task_form.setNodeVisible("animnode_blink", !0), this.task_form.setAnim("blink_fast")) : this.task_form.setNodeVisible("animnode_blink", !1)), n
		}, h.view.init = function(t) {
			this.task_form = t, this.clear_progressbar = this.task_form.getWrappedProgressBarNodeTask("clear_progressbar"), this.hp_progressbar = this.task_form.getWrappedProgressBarNodeTask("hp_progressbar"), this.hp_score = this.task_form.getWrappedScoreNodeTask("task_score_hp"), this.task_form.setNodeVisible("animnode_blink", !1), this.group_gain_score = this.task_form.getWrappedGroupNodeTask("task_group_gain_score"), this.task_form.setAnim("hide_damage"), this.hp_change_score = this.task_form.getWrappedScoreNodeTask("task_score_hp_change"), this.score_label = this.task_form.getWrappedScoreNodeTask("score"), this.score_label.set(0), this.effect_on = config.effect_flag, this.b_clear_max = !1, this.combo_flash = u.init(t)
		}, h.view.setTotalHp = function(t) {
			this.hp_score.set(t)
		}, h.init = function(t, e) {
			this.view.init(t), this.score = 0, this.clear = 0, this.combo = 0, this.total_damage = 0, this.change_hp = 0, this.change_score = 0, this.heal_count = 0, this.heal_value = 0, this.star_accuracy_count = {
				perfect: 0,
				great: 0,
				good: 0,
				bad: 0,
				miss: 0
			}, this.max_total_hp = null, this.total_hp = null, this.max_combo = 0, this.sum_combo = 0, this.same_timing_count = {
				perfect: 0,
				committed: 0,
				total: 0
			}, this.attribute_score = {
				cute: 0,
				cool: 0,
				smile: 0
			}, l.Combo.initialize(), this.combo_increment_per_success = 1, this.event_point = 0, this.rank_info = e, this.rank = 0, this.setCalcClearGauge(e), l.SkillEffect.PerfectBonus.initialize()
		}, h.calculateScore = function(t, e, i) {
			var n = {
				perfect: 1.25,
				great: 1.1,
				good: 1,
				bad: .5,
				miss: 0
			},
				r = this.total_scores[t.attribute - 1] || 0;
			return r *= n[i] || 1, r *= l.Combo.getScoreRate(), r = l.SkillEffect.PerfectBonus.apply(r), this.live_member_category == e.member_category && (r *= 1.1), t.is_hold && (r *= n[t.first_touch] || 1), this.score_factor_map[t.effect] && (r *= this.score_factor_map[t.effect]), t.color !== e.attribute && 5 !== e.attribute_id || (r *= 1.1), r = Math.floor(r / 100), r += l.SkillEffect.PerfectBonus.sumBonus(i), l.Combo.applyFixedValueBonus(r)
		}, h.getMaxTotalHp = function() {
			return this.max_total_hp
		}, h.getLove = function() {
			return l.Combo.getLove()
		}, h.getEventPoint = function() {
			return this.event_point
		}, h.getScore = function(t) {
			return this.attribute_score[t] || 0
		}, h.getTotalHp = function() {
			return this.total_hp
		}, h.getTotalHpRatio = function() {
			return this.total_hp / this.max_total_hp
		}, h.view.commitScore = function(t, e) {
			this.effect_on && c.showScore(this.group_gain_score, t), this.task_form.setAnim("score_increment"), this.score_label.set(e)
		}, h.commitScore = function() {
			this.change_score < 1 || (this.score += this.change_score, this.view.commitScore(this.change_score, this.score), this.change_score = 0, this.updateClearGauge())
		}, h.addScore = function(t, e) {
			t < 1 || (this.change_score += t, this.attribute_score[e] += t)
		}, h.addScoreBySmile = function(t) {
			_(this.deck.total_smile, t, "smile")
		}, h.addScoreByPure = function(t) {
			_(this.deck.total_cute, t, "cute")
		}, h.addScoreByCool = function(t) {
			_(this.deck.total_cool, t, "cool")
		}, h.addScoreByAll = function(t, e) {
			_(this.deck.total_smile + this.deck.total_cute + this.deck.total_cool, t, e)
		}, h.addScoreByMaxHp = function(t, e) {
			_(this.deck.total_hp, t, e)
		}, h.addScoreByRestHp = function(t, e) {
			_(this.total_hp, t, e)
		}, h.getTotalScore = function() {
			return this.score
		};
		var d = (n = {}, (0, s.
	default)(n, 0, "assets/image/ui/live/live_gauge_03_03.png"), (0, s.
	default)(n, 1, "assets/image/ui/live/live_gauge_03_04.png"), (0, s.
	default)(n, 2, "assets/image/ui/live/live_gauge_03_05.png"), (0, s.
	default)(n, 3, "assets/image/ui/live/live_gauge_03_06.png"), (0, s.
	default)(n, 4, "assets/image/ui/live/live_gauge_03_07.png"), n);
		h.view.updateClearGauge = function(t, e, i) {
			i != e && this.clear_progressbar.setImage(!1, d[i]), i >= 4 && !this.b_clear_max && (this.b_clear_max = !0, new o(this.task_form.getWrappedGroupNodeTask("task_group_gauge_max_anchor"), UI_ORDER.MAIN, 0, 0, "assets/flash/ui/live/live_scoregauge.flsh", "ef_318")), this.b_clear_max || this.task_form.setAnim("clear_increment"), this.clear_progressbar.set(t / 100)
		}, h.updateClearGauge = function() {
			var t = this.calcClearGauge(this.score),
				e = (0, a.
			default)(t, 2),
				i = e[0],
				n = e[1];
			i > 100 && (i = 100), this.clear = i, this.view.updateClearGauge(this.clear, this.rank, n), this.rank = n
		}, h.getTotalDamage = function() {
			return this.total_damage
		}, h.view.addTotalHp = function(t, e, i) {
			var n = t - e;
			n > 0 ? (f(this.task_form).setAnim("hp_gauge_damage").delay(500).setAnim("hp_gauge_default").run_sysload_safe(), this.hp_change_score.set(n), this.effect_on && (this.task_form.setNodeVisible("node_plus", !1), this.task_form.setNodeVisible("node_minus", !0), this.task_form.setAnim("show_damage"))) : t < i && n < 0 && (this.hp_change_score.set(-1 * n), this.effect_on && (this.task_form.setNodeVisible("node_plus", !0), this.task_form.setNodeVisible("node_minus", !1), this.task_form.setAnim("show_heal"))), this.hp_score.set(Math.max(e, 0), 100)
		}, h.addTotalHp = function(t) {
			if (t) {
				var e = this.total_hp,
					i = this.max_total_hp;
				this.total_hp += t, i < this.total_hp && (this.total_hp = i), this.total_damage -= t, this.view.addTotalHp(e, this.total_hp, this.max_total_hp), this.updateHpGauge()
			}
		}, h.recoverTotalHp = function() {
			this.change_hp = 0, this.total_hp = 0, this.addTotalHp(this.max_total_hp), this.total_hp = this.max_total_hp
		}, h.addEventPoint = function(t) {
			this.event_point += t || 0
		}, h.setEventPoint = function(t) {
			this.event_point = t || 0
		}, h.view.addCombo = function(t) {
			this.combo_flash.show(t)
		}, h.addCombo = function() {
			this.combo += +this.combo_increment_per_success, this.view.addCombo(this.combo), l.Combo.update(this.combo), this.sum_combo = this.sum_combo + +this.combo_increment_per_success, this.combo > this.max_combo && (this.max_combo = this.combo)
		}, h.getCombo = function() {
			return this.combo
		}, h.view.resetCombo = function(t) {
			this.combo_flash.show(t)
		}, h.resetCombo = function() {
			this.combo = 0, this.view.resetCombo(this.combo), l.Combo.resetScoreRate()
		}, h.getAccuracyCount = function(t) {
			return l.AccuracyLog.getCount(t)
		}, h.getMaxCombo = function() {
			return this.max_combo
		}, h.setMaxCombo = function(t) {
			this.max_combo = t
		}, h.commitChangeHp = function(t) {
			this.addTotalHp(this.change_hp), this.change_hp = 0
		}, h.damage = function(t) {
			this.change_hp -= t
		}, h.heal = function(t) {
			this.change_hp += t, this.heal_count += 1, this.heal_value += t
		}, h.getHealCount = function() {
			return this.heal_count
		}, h.getHealValue = function() {
			return this.heal_value
		}, h.getStarPerfectCount = function() {
			return this.star_accuracy_count.perfect
		}, h.getStarSuccessCount = function() {
			return this.star_accuracy_count.perfect + this.star_accuracy_count.great
		}, h.addStarAccuracyCount = function(t) {
			void 0 !== this.star_accuracy_count[t] && (this.star_accuracy_count[t] += 1)
		}, h.addSameTimingPerfectCount = function(t) {
			"perfect" === t && (this.same_timing_count[t] += 1), this.same_timing_count.total += 1
		}, h.commitSameTimingPerfectCount = function() {
			this.same_timing_count.total > 1 && this.same_timing_count.perfect === this.same_timing_count.total && (this.same_timing_count.committed += 1), this.resetSameTimingPerfectCount()
		}, h.getSameTimingPerfectCount = function() {
			return this.same_timing_count.committed
		}, h.resetSameTimingPerfectCount = function() {
			this.same_timing_count.perfect = 0, this.same_timing_count.total = 0
		}, h.release = function() {
			c.clear()
		}, h.playable = function() {
			return this.total_hp > 0
		}, h.isHpFull = function() {
			return this.max_total_hp === this.total_hp
		}, h.healOrAddScore = function(t, e, i) {
			h.isHpFull() ? h.addScore(t || 0, e) : h.heal(i)
		}, h.damageAndAddScore = function(t, e, i) {
			h.damage(i), h.addScore(t || 0, e)
		}, h.isFullCombo = function(t) {
			return !!this.isFullComboNotes() && !! this.isSameNotesNum(t)
		}, h.getExecutedNotesNum = function() {
			return this.getAccuracyCount("perfect") + this.getAccuracyCount("great") + this.getAccuracyCount("good") + this.getAccuracyCount("bad") + this.getAccuracyCount("miss")
		}, h.isFullComboNotes = function() {
			return this.getAccuracyCount("good") + this.getAccuracyCount("bad") + this.getAccuracyCount("miss") == 0
		}, h.isSameNotesNum = function(t) {
			return this.getExecutedNotesNum() == t
		}, h.initializeHp = function() {
			if (this.max_total_hp) {
				var t = this.max_total_hp - this.total_hp;
				this.max_total_hp = config.base_hp, this.total_hp = Math.min(this.max_total_hp, Math.max(this.max_total_hp - t, this.total_hp))
			} else this.max_total_hp = config.base_hp || 0, this.total_hp = this.max_total_hp
		}, h.resetHealValue = function() {
			this.heal_value = 0
		}, h.prepareForLive = function() {
			this.initializeHp(), this.view.setTotalHp(this.total_hp), this.updateHpGauge(), this.total_scores = config.base_score || [5e4, 5e4, 5e4], this.live_member_category = config.__currentLive.member_category, this.score_factor_map = {
				11: .5,
				12: .5,
				13: .5
			}
		}, h.getRemainHp = function() {
			return Math.max(0, h.total_hp)
		}, h.updateTotalStatus = function(t) {
			h.total_scores.smile = h.total_scores.smile + t.smile, h.total_scores.cute = h.total_scores.cute + t.cute, h.total_scores.cool = h.total_scores.cool + t.cool
		}, e.exports = h
	}, {
		104: 104,
		108: 108,
		109: 109,
		12: 12,
		19: 19,
		52: 52,
		8: 8,
		97: 97
	}],
	145: [function(t, e, i) {
		"use strict";
		var n, r, a, s, o = t(12)(t(8)),
			u = t(89),
			l = t(96),
			c = t(97),
			f = t(58),
			h = t(139),
			_ = t(84),
			d = t(54),
			p = t(109),
			v = "assets/flash/ui/live/live_skill_ef_01.flsh",
			g = "assets/flash/ui/live/img/",
			m = "assets/image/ui/live/",
			y = (n = {}, (0, o.
		default)(n, d.SKILL_EFFECT.great_to_perfect, g + "ef_320_skill_004.png"), (0, o.
		default)(n, d.SKILL_EFFECT.good_to_perfect, g + "ef_320_skill_005.png"), (0, o.
		default)(n, d.SKILL_EFFECT.score_plus, g + "ef_320_skill_011.png"), (0, o.
		default)(n, d.SKILL_EFFECT.hp_restore, g + "ef_320_skill_009.png"), (0, o.
		default)(n, d.SKILL_EFFECT.skill_rate_up, g + "ef_320_skill_001.png"), (0, o.
		default)(n, d.SKILL_EFFECT.sync_status, g + "ef_320_skill_002.png"), (0, o.
		default)(n, d.SKILL_EFFECT.gain_status, g + "ef_320_skill_002.png"), (0, o.
		default)(n, d.SKILL_EFFECT.gain_skill_level, g + "ef_320_skill_001.png"), (0, o.
		default)(n, d.SKILL_EFFECT.mimic, g + "ef_320_skill_001.png"), (0, o.
		default)(n, d.SKILL_EFFECT.perfect_bonus_ratio, g + "ef_320_skill_011.png"), (0, o.
		default)(n, d.SKILL_EFFECT.perfect_bonus_fixed_value, g + "ef_320_skill_011.png"), (0, o.
		default)(n, d.SKILL_EFFECT.combo_bonus, g + "ef_320_skill_013.png"), (0, o.
		default)(n, d.SKILL_EFFECT.score_restore, g + "ef_320_skill_012.png"), (0, o.
		default)(n, d.SKILL_EFFECT.score_restore_with_damage_and_score_plus, g + "ef_320_skill_011.png"), (0, o.
		default)(n, d.SKILL_EFFECT.damage_and_score_plus, g + "ef_320_skill_011.png"), n),
			b = (r = {}, (0, o.
		default)(r, d.SKILL_EFFECT.score_up, m + "l_skill_03.png"), (0, o.
		default)(r, d.SKILL_EFFECT.great_to_perfect, m + "l_skill_02.png"), (0, o.
		default)(r, d.SKILL_EFFECT.good_to_perfect, m + "l_skill_01.png"), (0, o.
		default)(r, d.SKILL_EFFECT.skill_rate_up, m + "l_skill_06.png"), (0, o.
		default)(r, d.SKILL_EFFECT.sync_status, m + "l_skill_10.png"), (0, o.
		default)(r, d.SKILL_EFFECT.gain_status, m + "l_skill_08.png"), (0, o.
		default)(r, d.SKILL_EFFECT.perfect_bonus_ratio, m + "l_skill_04.png"), (0, o.
		default)(r, d.SKILL_EFFECT.perfect_bonus_fixed_value, m + "l_skill_04.png"), (0, o.
		default)(r, d.SKILL_EFFECT.combo_bonus, m + "l_skill_07.png"), r),
			k = (a = {}, (0, o.
		default)(a, d.SKILL_EFFECT.great_to_perfect, g + "ef_320_002.png"), (0, o.
		default)(a, d.SKILL_EFFECT.good_to_perfect, g + "ef_320_001.png"), (0, o.
		default)(a, d.SKILL_EFFECT.score_plus, g + "ef_320_003.png"), (0, o.
		default)(a, d.SKILL_EFFECT.hp_restore, g + "ef_320_004.png"), (0, o.
		default)(a, d.SKILL_EFFECT.score_restore, ""), (0, o.
		default)(a, d.SKILL_EFFECT.damage_and_score_plus, g + "ef_320_003.png"), (0, o.
		default)(a, d.SKILL_EFFECT.skill_rate_up, g + "ef_320_005.png"), (0, o.
		default)(a, d.SKILL_EFFECT.sync_status, g + "ef_320_010.png"), (0, o.
		default)(a, d.SKILL_EFFECT.gain_status, g + "ef_320_009.png"), (0, o.
		default)(a, d.SKILL_EFFECT.gain_skill_level, g + "ef_320_011.png"), (0, o.
		default)(a, d.SKILL_EFFECT.mimic, g + "ef_320_006.png"), (0, o.
		default)(a, d.SKILL_EFFECT.perfect_bonus_ratio, g + "ef_320_007.png"), (0, o.
		default)(a, d.SKILL_EFFECT.perfect_bonus_fixed_value, g + "ef_320_007.png"), (0, o.
		default)(a, d.SKILL_EFFECT.combo_bonus, g + "ef_320_008.png"), a),
			w = {
				1: "ef_305",
				2: "ef_305",
				3: "ef_306",
				5: "ef_308",
				4: "ef_307",
				PRIORITY: h.BACKGROUND_PRIORITY + 1,
				PATH: "assets/flash/ui/live/live_cut_in.flsh"
			},
			x = {
				1: "ef_305_2",
				2: "ef_305_2",
				3: "ef_306_2",
				5: "ef_308_2",
				4: "ef_307_2",
				PRIORITY: h.STAR_PRIORITY + 1,
				PATH: "assets/flash/ui/live/live_cut_in_midium.flsh"
			},
			A = {
				1: "cut_in_r_start",
				2: "cut_in_r_start",
				3: "cut_in_sr_start",
				5: "cut_in_ssr_start",
				4: "cut_in_ur_start"
			};
		s = {
			create: function(t, e, i, n) {
				var r, a, s, o = {},
					d = config.effect_flag ? "show_clear_effect" : "show_effect",
					g = !0,
					m = config.effect_flag ? "show_clear_double_effect" : "show_double_effect";
				o.is_boosted = !1, o.node = null, o.startSyncEffect = nothing, o.stopSyncEffect = nothing, o.skill_indicators = {}, n && (o.node = new u(n, h.CHARACTER_PRIORITY, 0, 0, "assets/ui/live/game/ui_character.json"), o.node.setNodeVisible("task_score_activation_rate", !1), o.node.setNodeVisible("task_score_remaining", !1), r = o.node.getWrappedGroupNodeTask("task_group_icon"), a = o.node.getProperty().order - 4, new l(r, a, 0, 0, e.live_asset), s = function() {
					o.bomb_flash.gotoFrame("bomb"), o.bomb_flash.setVisible(!1), o.bomb_flash.stop()
				}, o.bomb_flash = new c(o.node, h.CHARACTER_PRIORITY + 10, h.ICON_OFFSET_X, h.ICON_OFFSET_Y, "assets/flash/ui/live/live_notes_bomb.flsh", "ef_317"), s(), o.bomb_flash.reachFrame("end", s), function() {
					if (config.base_score) for (var t = 1; t <= 12; t++) o.skill_indicators[t] = o.node.getWrappedVaritemTask("task_varitem_indicator" + t)
				}());
				var S = function() {
						p.CutinController.deactivate(o.position)
					};
				o.setSkill = function(t, n, r) {
					var a = this;
					if (this.skill_flash = null, this.node &&
					function() {
						if (p.SkillController.mayActivateSyncEffect()) {
							var t = new c(o.node, h.CHARACTER_PRIORITY + 11, h.ICON_OFFSET_X, h.ICON_OFFSET_Y, v, "ef_356"),
								e = new c(o.node, h.CHARACTER_PRIORITY + 10, h.ICON_OFFSET_X, h.ICON_OFFSET_Y, v, "ef_357");
							o.startSyncEffect = function(i) {
								var n = i ? e : t;
								n.play(), n.gotoFrame("start"), n.setVisible(!0)
							}, o.stopSyncEffect = function(i) {
								var n = i ? e : t;
								n.stop(), n.setVisible(!1)
							}, o.stopSyncEffect(!1), o.stopSyncEffect(!0)
						}
					}(), t) {
						var s, u;
						this.node && (s = t.effect_type, u = null, p.SkillController.mayActivateBoostEffect() && ((u = new c(o.node, h.CHARACTER_PRIORITY + 4, h.ICON_OFFSET_X, h.ICON_OFFSET_Y, "assets/flash/ui/live/live_skill_ef_02.flsh", "ef_358", function() {
							u.setVisible(!1), u.gotoFrame("start"), u.stop()
						})).setVisible(!1), u.stop()), o.skill_flash = new c(o.node, h.CHARACTER_PRIORITY + 3, h.ICON_OFFSET_X, h.ICON_OFFSET_Y, "assets/flash/ui/live/live_skill_motion.flsh", "ef_320", function() {
							o.skill_flash.setVisible(!1), o.skill_flash.gotoFrame("motion_1"), o.skill_flash.stop(), u && o.is_boosted && (u.setVisible(!0), u.play())
						}, {
							"%skill_motion": y[s]
						}), o.skill_flash.setVisible(!1), o.skill_flash.gotoFrame("motion_1"), o.skill_flash.setScale(2, 2), o.skill_flash.stop()), g = r.navi && (0 == config.cutin_setting || 1 == config.cutin_setting), this.position = n, this.cutin_flash = null, this.varitem_effect = i.getWrappedVaritemTask("task_varitem_effect"), this.varitem_sub_effect = i.getWrappedVaritemTask("task_varitem_sub_effect"), this.varitem_second_effect = i.getWrappedVaritemTask("task_varitem_effect_second"), this.varitem_second_effect.setVisible(!1), this.varitem_boost = i.getWrappedVaritemTask("task_varitem_boost"), this.varitem_boost.setVisible(!1);
						var l = !1;
						if (0 == config.cutin_setting ? l = w : 1 == config.cutin_setting ? l = x : g = !1, g) {
							if (this.cutin_flash = new c(i, l.PRIORITY, h.CHARACTER_CUTIN_OFFSET_X, h.CHARACTER_CUTIN_OFFSET_Y, l.PATH, l[e.rarity || 1], function() {
								S(), a.cutin_flash.setVisible(!1), a.cutin_flash.gotoFrame(A[e.rarity || 1]), a.cutin_flash.stop()
							}, {
								"%skill_text": blank,
								"%skill_chara": r.navi
							}), 0 == config.cutin_setting) {
								var f = [null, 150, 190, 255][config.cutin_color || 3];
								this.cutin_flash.setColor(255, 65536 * f + 256 * f + f)
							}
							this.cutin_flash.setVisible(!1), this.cutin_flash.gotoFrame(A[e.rarity || 1]), this.cutin_flash.stop()
						}
						this.voice_asset_path = r.voice_asset_path
					}
				}, o.playVoice = function() {
					if (this.voice_asset_path) {
						var t = _.playSE(this.voice_asset_path);
						if (g) return;
						var e = t.buffer.duration || 0;
						f.setTimeout(S, 1e3 * e)
					} else g || S()
				};
				var E = !0,
					T = function(t) {
						o.is_boosted = t || !1, o.skill_flash && (o.skill_flash.setVisible(!0), o.skill_flash.play())
					},
					C = function() {
						o.varitem_boost.setVisible(o.is_boosted)
					};
				return o.activateSkill = function(t, e, n, r) {
					E && (T(n), t && (function(t) {
						t = t || 0, p.CutinController.activate(o.position, t), f.waitFrames(function() {
							o.cutin_flash && (o.cutin_flash.setVisible(!0), o.cutin_flash.play()), o.playVoice()
						}, t)
					}(e), (e = e || 0) > 0 && (e += 30), f.waitFrames(function() {
						o.varitem_effect.changeAsset(k[r]), C(), i.setAnim(d)
					}, e)))
				}, o.activateMimic = function(t, e, n, r) {
					E && (T(r), n && (this.varitem_effect.changeAsset(k[t.effect_type]), this.varitem_second_effect.changeAsset(k[e.effect_type]), this.varitem_second_effect.setVisible(!0), C(), i.setAnim(m)))
				}, o.showIndicator = function(t, e) {
					var i = this.skill_indicators[e],
						n = b[t];
					i && n && (i.setVisible(!0), i.changeAsset(n))
				}, o.hideIndicator = function(t) {
					t && this.skill_indicators[t] && this.skill_indicators[t].setVisible(!1)
				}, o.bomb = function() {
					this.bomb_flash.setVisible(!0), this.bomb_flash.play()
				}, o.release = function() {
					this.skill_indicators = {}
				}, o.deactivateEffect = function() {
					E = !1
				}, o.activateEffect = function() {
					E = !0
				}, o.node.setNodeVisible("task_score_activation_rate", !1), o
			}
		}, e.exports = s
	}, {
		109: 109,
		12: 12,
		139: 139,
		54: 54,
		58: 58,
		8: 8,
		84: 84,
		89: 89,
		96: 96,
		97: 97
	}],
	140: [function(t, e, i) {
		"use strict";
		var n = t(12)(t(8)),
			r = t(109),
			a = t(142),
			s = t(138),
			o = t(54),
			u = t(57),
			l = !1,
			c = {
				create: function(e, i, c) {
					var f;
					l || (l = t(134));
					var h = {
						active: !1,
						position: i.position,
						attribute: i.attribute || "smile",
						remaining_time_ms: 0,
						enabled: !1,
						enhance: !1
					},
						_ = null,
						d = [],
						p = (f = {}, (0, n.
					default)(f, o.SKILL_EFFECT.hp_restore, function() {
							s.heal(h.getEffectValue())
						}), (0, n.
					default)(f, o.SKILL_EFFECT.score_plus, function() {
							s.addScore(h.getEffectValue(!0) || 0, h.attribute), s.updateClearGauge()
						}), f),
						v = function() {
							var t = d[Math.floor(Math.random() * d.length)];
							h.skill_id = t.skill_id, h.skill_level = t.skill_level, h.max_level = t.max_level, h.effect_type = t.skill_effect_type, h.effect_value = t.effect_value, h.discharge_type = t.discharge_type, h.discharge_time = t.discharge_time, h.unit_skill_combo_pattern_id = t.unit_skill_combo_pattern_id, h.heal_score_value = t.heal_score_value, h.damage_score_value = t.damage_score_value, t.effect_target = u.create(e.effect_target), t.trigger_target = u.create(e.trigger_target), _ = r.SkillEffect.create(t, i), h.effect_target = t.effect_target, h.trigger_target = t.trigger_target, !c && h.isScorePlusEffect() ? (h.bonus_rate = t.score_bonus_rate || 1, h.bonus_fixed = h.score_bonus_fixed || 0) : (h.bonus_rate = 1, h.bonus_fixed = 0), _.onActivate || (_.onActivate = p[t.skill_effect_type] || nothing), e.combo_patterns && (_.__combo_patterns = e.combo_patterns)
						},
						g = !1;
					h.isBoostEffect = function() {
						return h.effect_type == o.SKILL_EFFECT.gain_skill_level
					}, h.isScorePlusEffect = function() {
						return h.effect_type == o.SKILL_EFFECT.score_plus
					}, h.isRepeatEffect = function() {
						return h.effect_type == o.SKILL_EFFECT.mimic
					}, h.isSyncEffect = function() {
						return h.effect_type == o.SKILL_EFFECT.sync_status
					}, h.isPassive = function() {
						var t;
						return (t = {}, (0, n.
					default)(t, o.SKILL_TRIGGER_TYPE.heal_count, !0), (0, n.
					default)(t, o.SKILL_TRIGGER_TYPE.heal_value, !0), (0, n.
					default)(t, o.SKILL_TRIGGER_TYPE.chain, !0), t)[h.trigger_type]
					}, h.isLevelMax = function() {
						return h.skill_level == h.max_level
					};
					var m = function() {
							h.boosted = {
								skill_level: null,
								effect_value: null,
								discharge_time: null,
								unit_skill_combo_pattern_id: null
							}
						};

					function y() {
						h.remaining_time_ms = h.duration_ms
					}
					function b() {
						h.active = !1, _.onFinish && _.onFinish(), g && (v(), h.resetDuration())
					}
					return h.resetSkillData = function(t) {
						d = t.effect_list || [], g = d.length > 1, v(), h.trigger_type = t.trigger_type, h.trigger_value = t.trigger_value, h.activation_rate = t.activation_rate, m()
					}, h.getSkillLevel = function() {
						return h.boosted.skill_level || h.skill_level
					}, h.getEffectValue = function(t) {
						var e = h.boosted.effect_value || h.effect_value;
						return t ? Math.ceil(e * h.bonus_rate) + h.bonus_fixed : e * h.bonus_rate + h.bonus_fixed
					}, h.getDischargeTime = function() {
						return h.boosted.discharge_time || h.discharge_time
					}, h.getComboPatternId = function() {
						return h.boosted.unit_skill_combo_pattern_id || h.unit_skill_combo_pattern_id
					}, h.overrideEffect = function(t) {
						h.skill_level = t.skill_level, h.effect_value = t.effect_value, h.discharge_time = t.discharge_time, h.duration_ms = t.duration_ms, y()
					}, h.resetSkillData(e), h.trigger = a.new(h, i, s), h.resetDuration = function() {
						h.duration_ms = 0;
						var t = 1e3 * h.discharge_time;
						t > h.duration_ms && (h.duration_ms = t)
					}, h.resetDuration(), h.activate = function(t, n) {
						_.canActivate() && (this.active = !0, this.is_boosted = !1, r.Trigger.OtherMember.update(i, h), m(), n ? y() : (function(t) {
							if (t || (t = r.SkillBoostQueue.pop(i.position)), t) {
								var n = Math.min(h.max_level, h.skill_level + t),
									a = e.levels[n];
								a ? (h.is_boosted = !0, h.boosted = {
									skill_level: n,
									effect_value: a.effect_value,
									discharge_time: a.discharge_time,
									unit_skill_combo_pattern_id: a.unit_skill_combo_pattern_id
								}, h.duration_ms = 1e3 * a.discharge_time, y()) : y()
							} else y()
						}(t), r.SkillStack.push({
							skill_id: h.skill_id,
							skill_level: h.getSkillLevel(),
							max_level: h.max_level,
							effect_target: e.effect_target,
							trigger_target: e.trigger_target,
							skill_effect_type: h.effect_type,
							effect_value: h.getEffectValue(),
							discharge_time: h.getDischargeTime(),
							discharge_type: h.discharge_type,
							duration_ms: 1e3 * h.getDischargeTime(),
							unit_skill_combo_pattern_id: h.getComboPatternId(),
							is_boosted: h.is_boosted,
							boosted: h.boosted,
							effect_list: d,
							sub_skill_list: h.sub_skill_list,
							heal_score_value: h.heal_score_value,
							damage_score_value: h.damage_score_value,
							trigger_type: -1,
							trigger_value: 999999,
							activation_rate: 0
						}, l.current_time)), _.onActivate())
					}, h.applyEffectOnly = function() {
						_.reapply()
					}, h.dispatch = function(t, e) {
						var i = !1;
						return this.active || (i = this.trigger.update(t, e)), i
					}, h.update = function(t) {
						return this.active && (2 === h.discharge_type ? (this.remaining_time_ms = this.remaining_time_ms - t, this.remaining_time_ms < 0 && b()) : 1 === h.discharge_type && b()), this.active
					}, h.accuracyEnhanceSkillStart = function(t) {}, h.accuracyEnhanceSkillEnd = function() {}, h.resetAccuracyEnhanceSkill = function() {}, h.release = function() {
						_.reset()
					}, h.clearTriggerCounter = function() {
						this.trigger.clearCounter()
					}, h.reset = function(t) {
						this.resetSkillData(t), this.resetDuration(), this.trigger && this.trigger.reset(this.trigger_value, this.activation_rate)
					}, h.getRawActivationRate = function() {
						return this.trigger.getRawActivationRate()
					}, h.gainActivationRate = function(t) {
						this.trigger.gainActivationRate(t)
					}, h.resetActivationRate = function() {
						this.trigger.resetActivationRate()
					}, h
				}
			};
		e.exports = c
	}, {
		109: 109,
		12: 12,
		134: 134,
		138: 138,
		142: 142,
		54: 54,
		57: 57,
		8: 8
	}],
	103: [function(t, e, i) {
		"use strict";
		var n = t(12)(t(19)),
			r = t(139),
			a = t(102),
			s = t(109),
			o = (t(54), {
				view: {
					setupCharacterGetTaskGroup: function(t) {
						return this.task_form.getWrappedGroupNodeTask("task_group_character" + t)
					},
					setupCharacter: function(t) {
						var e = r.LIVE_IMAGE_SCALE[config.size_setting] || 1,
							i = this.task_form.getWrappedVaritemTask("task_varitem_effect"),
							n = this.task_form.getWrappedVaritemTask("task_varitem_boost"),
							a = this.task_form.getWrappedVaritemTask("task_varitem_effect_second");
						i.setScale(e, e), a.setScale(e, e);
						var s = i.getProperty(),
							o = n.getProperty(),
							u = a.getProperty();
						2 == config.size_setting ? (s.x = s.x + 5, o.y = o.y - 2, u.x = u.x + 5) : 3 == config.size_setting && (s.x = s.x + 12, o.y = o.y - 5, u.x = u.x + 12), i.setProperty(s), n.setProperty(o), a.setProperty(u)
					},
					init: function(t) {
						this.task_form = t
					}
				},
				setupCharacter: function(t, e) {
					"string" == typeof e && (e = {
						live_asset: e
					}), this.view.setupCharacter(e), this.characters[t] = a.create(t, e, this.view.task_form, this.view.setupCharacterGetTaskGroup(t))
				},
				setupCharacterSkill: function(t, e) {
					e.skill && this.characters[t].setSkill(e.skill)
				},
				init: function(t) {
					if (this.active_skill_characters = [], this.passive_skill_characters = [], this.characters = {}, this.view.init(t), config.character) {
						var e = !0,
							i = !1,
							r = void 0;
						try {
							for (var a, o = config.character.entries()[Symbol.iterator](); !(e = (a = o.next()).done); e = !0) {
								var u = (0, n.
							default)(a.value, 2),
									l = u[0],
									c = u[1];
								this.setupCharacter(9 - l, c)
							}
						} catch (y) {
							i = !0, r = y
						} finally {
							try {
								e || null == o.
								return ||o.
								return ()
							} finally {
								if (i) throw r
							}
						}
						var f = !0,
							h = !1,
							_ = void 0;
						try {
							for (var d, p = config.character.entries()[Symbol.iterator](); !(f = (d = p.next()).done); f = !0) {
								var v = (0, n.
							default)(d.value, 2),
									g = v[0];
								c = v[1], this.setupCharacterSkill(9 - g, c)
							}
						} catch (y) {
							h = !0, _ = y
						} finally {
							try {
								f || null == p.
								return ||p.
								return ()
							} finally {
								if (h) throw _
							}
						}
						for (var m in s.SkillController.initialize(this.characters, []), this.characters) this.characters[m].initializeView()
					}
				},
				resetCharacterSkill: function(t, e) {
					e.skill && this.characters[t].resetSkill(e.skill)
				},
				resetSkill: function() {
					if (config.character) {
						var t = !0,
							e = !1,
							i = void 0;
						try {
							for (var r, a = config.character.entries()[Symbol.iterator](); !(t = (r = a.next()).done); t = !0) {
								var s = (0, n.
							default)(r.value, 2),
									o = s[0],
									u = s[1];
								this.resetCharacterSkill(9 - o, u)
							}
						} catch (l) {
							e = !0, i = l
						} finally {
							try {
								t || null == a.
								return ||a.
								return ()
							} finally {
								if (e) throw i
							}
						}
						this.reapplySkillEffect()
					}
				},
				bomb: function(t) {
					this.characters[t] && this.characters[t].bomb()
				},
				showIndicator: function(t, e) {
					if (t && e) for (var i in this.characters) this.characters[i].showIndicator(t, e)
				},
				hideIndicator: function(t) {
					for (var e in this.characters) this.characters[e].hideIndicator(t)
				},
				angleToOrdinal: function(t) {
					var e = t / r.CHARACTER_ANGLE + 1;
					return e < 1 && (e = 1), e > 9 && (e = 9), e
				},
				release: function() {
					for (var t in this.characters) this.characters[t] && this.characters[t].release()
				},
				clearSkillCounter: function(t) {
					for (var e in this.characters) this.characters[e].clearSkillCounter(t)
				},
				deactivateEffect: function() {
					for (var t in this.characters) this.characters[t].deactivateEffect()
				},
				activateEffect: function() {
					for (var t in this.characters) this.characters[t].activateEffect()
				},
				gainActivationRate: function(t) {
					for (var e in this.characters) this.characters[e].gainActivationRate(t)
				},
				resetActivationRate: function() {
					for (var t in this.characters) this.characters[t].resetActivationRate()
				},
				findSyncTargetList: function(t, e) {
					var i = [];
					for (var n in this.characters) this.characters[n].canSync(t, e) && i.push(this.characters[n]);
					return i
				},
				findBuffTargetList: function(t) {
					var e = [];
					for (var i in this.characters) this.characters[i].canAcceptBuff(t) && e.push(this.characters[i]);
					return e
				},
				reapplySkillEffect: function() {
					for (var t in this.characters) this.characters[t].resetAccuracyEnhanceSkill(), this.characters[t].reapplySkillEffect()
				}
			});
		e.exports = o
	}, {
		102: 102,
		109: 109,
		12: 12,
		139: 139,
		19: 19,
		54: 54
	}],
	139: [function(t, e, i) {
		"use strict";
		e.exports = {
			BACKGROUND_PRIORITY: 0,
			STAR_PRIORITY: 2800,
			COMBO_PRIORITY: 2900,
			NOTE_PRIORITY: 2950,
			PAUSEMENU_PRIORITY: 3e3,
			CHARACTER_PRIORITY: 2405,
			CHARACTER_COUNT: 9,
			CHARACTER_ANGLE: 22.5,
			CHARACTER_CUTIN_OFFSET_X: 480,
			CHARACTER_CUTIN_OFFSET_Y: 320,
			ICON_OFFSET_X: 64,
			ICON_OFFSET_Y: 64,
			FULLCOMBO_DISPLAY_MSEC: 2e3,
			X: 480,
			Y: 160,
			R: 400,
			SCORE_X: 480,
			SCORE_Y: 320,
			SCORE_PRIORITY: 3e3,
			ACCURACY: {
				perfect: 16,
				great: 40,
				good: 64,
				bad: 112,
				miss: 128
			},
			ACCURACY_LIMIT_SPEED: .8,
			LIVE_IMAGE_SCALE: {
				2: .8,
				3: .5
			},
			Priority: {
				Elements: 2900
			}
		}
	}, {}],
	104: [function(t, e, i) {
		"use strict";
		var n = t(12)(t(8)),
			r = t(97),
			a = t(139),
			s = {
				COMBO: "assets/flash/ui/live/live_combo_number.flsh",
				CHEER: "assets/flash/ui/live/live_combo_cheer.flsh"
			};

		function o(t) {
			var e, i, o, u = this;
			this.task_form = t;
			var l = 1,
				c = (e = {}, (0, n.
			default)(e, 0, 1), (0, n.
			default)(e, 50, 2), (0, n.
			default)(e, 100, 3), (0, n.
			default)(e, 200, 4), (0, n.
			default)(e, 300, 5), (0, n.
			default)(e, 400, 6), (0, n.
			default)(e, 500, 7), (0, n.
			default)(e, 600, 8), (0, n.
			default)(e, 1e3, 9), (0, n.
			default)(e, 2e3, 10), e);
			this.flashes = {};
			for (var f = {
				50: "ef_302",
				100: "ef_303",
				200: "ef_304"
			}, h = 335, _ = 300; _ <= 1500; _ += 100) f[_] = "ef_" + h, ++h;
			h = 360;
			for (var d = 1600; d <= 2500; d += 100) f[d] = "ef_" + h, ++h;
			for (var p = {}, v = 1; v <= 9; v++) p[v] = "no0" + v;
			p[10] = "no10";
			var g = t.getWrappedGroupNodeTask("task_group_combo_1000_anchor"),
				m = t.getWrappedGroupNodeTask("task_group_combo_100_anchor"),
				y = t.getWrappedGroupNodeTask("task_group_combo_10_anchor"),
				b = t.getWrappedGroupNodeTask("task_group_combo_1_anchor"),
				k = t.getWrappedGroupNodeTask("task_group_combo_text_anchor"),
				w = t.getWrappedGroupNodeTask("task_group_combo_special_anchor"),
				x = (i = {}, (0, n.
			default)(i, 50, t.getWrappedGroupNodeTask("task_group_combo_special_anchor_50")), (0, n.
			default)(i, 100, t.getWrappedGroupNodeTask("task_group_combo_special_anchor_100")), (0, n.
			default)(i, 1e3, t.getWrappedGroupNodeTask("task_group_combo_special_anchor_1000")), i),
				A = a.LIVE_IMAGE_SCALE[config.size_setting || 0];
			if (A) if (t.setNodeScale("node_combo", A, A), 2 == config.size_setting) {
				var S = t.getWrappedGroupNodeTask("task_group_med").getProperty();
				t.setNodeTrans("node_combo", S.x, S.y)
			} else if (3 == config.size_setting) {
				var E = t.getWrappedGroupNodeTask("task_group_small").getProperty();
				t.setNodeTrans("node_combo", E.x, E.y)
			}
			var T = function() {
					for (var t in u.flashes) u.flashes[t] = u.flashes[t].kill();
					var e = "ef_301_" + l,
						i = "ef_301_combo_" + l;
					for (var n in u.flashes = {
						fourth: new r(g, a.COMBO_PRIORITY, 0, 0, s.COMBO, e),
						third: new r(m, a.COMBO_PRIORITY, 0, 0, s.COMBO, e),
						second: new r(y, a.COMBO_PRIORITY, 0, 0, s.COMBO, e),
						first: new r(b, a.COMBO_PRIORITY, 0, 0, s.COMBO, e),
						combo: new r(k, a.COMBO_PRIORITY, 0, 0, s.COMBO, i)
					}, u.flashes) u.flashes[n].setVisible(!1), config.effect_flag || u.flashes[n].setColor(127, 16777215)
				},
				C = !1,
				R = null;
			config.effect_flag && -1 != config.cutin_setting && (R = new r(t, a.COMBO_PRIORITY, 480, 320, s.CHEER, "ef_350")).setVisible(!1);
			var I = (o = {}, (0, n.
		default)(o, 100, {
				show: "cut_01_loop",
				leave: "cut_01_end"
			}), (0, n.
		default)(o, 200, {
				show: "cut_02_loop",
				leave: "cut_02_end"
			}), (0, n.
		default)(o, 300, {
				show: "cut_03_loop",
				leave: "cut_03_end"
			}), o);
			R && t.setAnimCallback(function(t) {
				"hideAll" == t ? R.setVisible(!1) : "showAll" == t && C && R.setVisible(!0)
			}), T();
			this.show = function(t) {
				(function(t) {
					var e = c[t];
					e && e != l && (l = e, config.effect_flag && T()), function(t) {
						R && (t < 1 ? (C = !1, R.setVisible(!1), R.gotoFrame("cut_03_end")) : I[t] && (R.gotoFrame("cut_03_end"), R.setVisible(!0), R.gotoFrame(I[t].show), C = !0))
					}(t)
				})(t), function(t) {
					var e = Math.floor(t / 1e3),
						i = Math.floor(t % 1e3 / 100),
						n = Math.floor(t % 100 / 10),
						r = Math.floor(t % 10);
					t >= 1e3 ? (u.flashes.fourth.setVisible(!0), u.flashes.fourth.gotoFrame(p[e + 1])) : u.flashes.fourth.setVisible(!1), t >= 100 ? (u.flashes.third.setVisible(!0), u.flashes.third.gotoFrame(p[i + 1])) : u.flashes.third.setVisible(!1), t >= 10 ? (u.flashes.second.setVisible(!0), u.flashes.second.gotoFrame(p[n + 1])) : u.flashes.second.setVisible(!1), t >= 1 ? (u.flashes.first.setVisible(!0), u.flashes.first.gotoFrame(p[r + 1]), u.flashes.combo.setVisible(!0), u.flashes.combo.gotoFrame("combo_start")) : (u.flashes.first.setVisible(!1), u.flashes.combo.setVisible(!1))
				}(t), function(t) {
					var e = f[t];
					if (e && config.effect_flag) {
						var i = null;
						i = new r(x[t] || w, a.COMBO_PRIORITY, 0, 0, s.COMBO, e, function() {
							i = i.kill()
						})
					}
				}(t)
			}
		}
		e.exports = {
			init: function(t) {
				return new o(t)
			}
		}
	}, {
		12: 12,
		139: 139,
		8: 8,
		97: 97
	}],
	105: [function(t, e, i) {
		"use strict";
		var n = t(52),
			r = (t(106), t(53)),
			a = t(89),
			s = {
				instance: null,
				create: function(t) {
					if (s.instance) return s.instance;
					var e = UI_ORDER.MAIN,
						i = new a(t, e, 0, 0, "assets/ui/live/game/elements/ui_count_down.json");
					return i.show = function(t) {
						var a = i.getWrappedScoreNodeTask("task_score_count_down"),
							s = function() {
								i.setAnim("count_down_start")
							},
							o = r.create(null, e - 1);
						o.show(), n(a).setVisible(!0).set(3).call(s).delay(1e3).set(2).call(s).delay(1e3).set(1).call(s).delay(1e3).setVisible(!1).call(function() {
							o.hide(), t && t()
						}).run_sysload_safe()
					}, i.setNodeVisible("task_score_count_down", !1), s.instance = i, i
				},
				reset: function() {
					s.instance && s.instance.kill(), s.instance = null
				}
			};
		e.exports = s
	}, {
		106: 106,
		52: 52,
		53: 53,
		89: 89
	}],
	106: [function(t, e, i) {
		"use strict";
		e.exports = {
			CountDown: t(105),
			MissionTarget: t(107)
		}
	}, {
		105: 105,
		107: 107
	}],
	107: [function(t, e, i) {
		"use strict";
		var n = t(12)(t(8)),
			r = t(89),
			a = t(97),
			s = t(139),
			o = "asset://assets/ui/live/game/elements/mission_target/ui_perfect.json",
			u = "asset://assets/ui/live/game/elements/mission_target/ui_great.json",
			l = "asset://assets/ui/live/game/elements/mission_target/ui_good.json",
			c = "asset://assets/ui/live/game/elements/mission_target/ui_love.json",
			f = "asset://assets/ui/live/game/elements/mission_target/ui_number.json",
			h = "asset://assets/flash/ui/event/event_ef_31.flsh",
			_ = {
				create: function(t, e, i) {
					var _, d, p, v = (_ = {}, (0, n.
				default)(_, 1, {
						asset: o,
						getValue: function() {
							return i.getAccuracyCount("perfect")
						}
					}), (0, n.
				default)(_, 2, {
						asset: u,
						getValue: function() {
							return i.getAccuracyCount("great")
						}
					}), (0, n.
				default)(_, 3, {
						asset: l,
						getValue: function() {
							return i.getAccuracyCount("good")
						}
					}), (0, n.
				default)(_, 4, {
						asset: c,
						getValue: function() {
							return i.getLove()
						}
					}), _)[e];
					if (v) {
						var g = new r(t, s.Priority.Elements, 0, 0, v.asset),
							m = [null, "no02", "no03", "no04", "no05", "no06", "no07", "no08", "no09", "no10"],
							y = null,
							b = null,
							k = null;
						new r(g.getWrappedGroupNodeTask("task_group_number"), s.Priority.Elements, 0, 0, f), y = new a(g.getWrappedGroupNodeTask("task_group_100"), s.Priority.Elements + 1, 0, 0, h, "ef_834"), b = new a(g.getWrappedGroupNodeTask("task_group_10"), s.Priority.Elements + 1, 0, 0, h, "ef_834"), k = new a(g.getWrappedGroupNodeTask("task_group_1"), s.Priority.Elements + 1, 0, 0, h, "ef_834");
						var w = (d = {}, (0, n.
					default)(d, 1, function(t) {
							k.gotoFrame(m[t] || "no01")
						}), (0, n.
					default)(d, 2, function(t) {
							var e = Number(t.toString().substr(0, 1)),
								i = Number(t.toString().substr(1, 1));
							b.gotoFrame(m[e] || "no01"), k.gotoFrame(m[i] || "no01")
						}), (0, n.
					default)(d, 3, function(t) {
							var e = Number(t.toString().substr(0, 1)),
								i = Number(t.toString().substr(1, 1)),
								n = Number(t.toString().substr(2, 1));
							y.gotoFrame(m[e] || "no01"), b.gotoFrame(m[i] || "no01"), k.gotoFrame(m[n] || "no01")
						}), d),
							x = (p = {}, (0, n.
						default)(p, 50, "ef_835"), (0, n.
						default)(p, 100, "ef_836_01"), (0, n.
						default)(p, 200, "ef_836_02"), (0, n.
						default)(p, 300, "ef_836_03"), (0, n.
						default)(p, 400, "ef_836_04"), (0, n.
						default)(p, 500, "ef_836_05"), (0, n.
						default)(p, 600, "ef_836_06"), (0, n.
						default)(p, 700, "ef_836_07"), (0, n.
						default)(p, 800, "ef_836_08"), (0, n.
						default)(p, 900, "ef_836_09"), p),
							A = 0;
						return g.update = function() {
							var t = v.getValue() || 0;
							if (!(t <= A || t > 999)) {
								A = t;
								var e = t.toString().length;
								w[e](t), function(e) {
									var i = x[t];
									if (i) {
										var n = null;
										n = new a(g.getWrappedGroupNodeTask("task_group_effect"), s.Priority.Elements + 10, 0, 0, h, i, function() {
											n && n.safelyKill()
										})
									}
								}()
							}
						}, g
					}
				}
			};
		e.exports = _
	}, {
		12: 12,
		139: 139,
		8: 8,
		89: 89,
		97: 97
	}],
	108: [function(t, e, i) {
		"use strict";
		var n = t(12)(t(8)),
			r = t(89),
			a = t(48),
			s = {
				show_count: 1,
				base_start_anim: "start_score%s",
				base_second_anim: "second_score%s",
				base_third_anim: "third_score%s",
				base_anim: "score_increment%s",
				max_count: 10,
				form_list: [],
				showScore: function(t, e) {
					if (config.effect_flag && -1 != config.cutin_setting && !(e < 1)) {
						var i = a.format(s.base_start_anim, s.show_count),
							o = s.form_list[s.show_count - 1];
						if (!o) {
							var u, l, c = a.format(s.base_second_anim, s.show_count),
								f = a.format(s.base_third_anim, s.show_count),
								h = a.format(s.base_anim, s.show_count),
								_ = (u = {}, (0, n.
							default)(u, s.base_start_anim, i), (0, n.
							default)(u, s.base_second_anim, c), (0, n.
							default)(u, s.base_third_anim, f), (0, n.
							default)(u, s.base_anim, h), u),
								d = (l = {}, (0, n.
							default)(l, i, c), (0, n.
							default)(l, c, f), (0, n.
							default)(l, f, h), l),
								p = r.getJson("assets/ui/live/game/ui_gain_score.json"),
								v = p.sub.filter(function(t) {
									return "animnode" == t.name
								})[0];
							if (v) {
								var g = !0,
									m = !1,
									y = void 0;
								try {
									for (var b, k = v.states[Symbol.iterator](); !(g = (b = k.next()).done); g = !0) {
										var w = b.value;
										w.type = _[w.type]
									}
								} catch (x) {
									m = !0, y = x
								} finally {
									try {
										g || null == k.
										return ||k.
										return ()
									} finally {
										if (m) throw y
									}
								}
							}(o = new r(t, UI_ORDER.MAIN + s.show_count, 0, 0, p)).setVisible(!1), o.setAnimCallback(function(t) {
								var e = d[t];
								e && o.setAnim(e)
							}), s.form_list.push(o)
						}
						o.getWrappedScoreNodeTask("task_score_gain_score").set(e), o.setVisible(!0), o.setAnim(i), s.show_count = s.show_count + 1 > s.max_count ? 1 : s.show_count + 1
					}
				},
				clear: function() {
					s.show_count = 1, s.form_list = []
				}
			};
		e.exports = s
	}, {
		12: 12,
		48: 48,
		8: 8,
		89: 89
	}],
	114: [function(t, e, i) {
		"use strict";
		var n = null,
			r = {
				importModule: function() {
					n || (n = t(134))
				},
				initialize: function() {
					r.queue = [], r.importModule(), r.use_timestamp = !0
				},
				push: function(t, e) {
					"number" == typeof t && "number" == typeof e && r.queue.push({
						position: e,
						value: t,
						timestamp: n.current_time
					})
				},
				canPush: function() {
					return r.queue.length < 1 || r.queue[0].timestamp < n.current_time
				},
				pop: function(t) {
					if (!(r.queue.length < 1 || r.use_timestamp && r.queue[0].timestamp == n.current_time)) return r.queue.pop().value
				},
				ignoreTimestamp: function() {
					r.use_timestamp = !1
				},
				useTimestamp: function() {
					r.use_timestamp = !0
				}
			};
		t(109).SkillBoostQueue = r
	}, {
		109: 109,
		134: 134
	}],
	112: [function(t, e, i) {
		"use strict";
		var n = {
			map: {},
			initialize: function() {
				n.map = {}
			},
			isActive: function() {
				return Object.keys(n.map).length > 0
			},
			activate: function(t, e) {
				!e && n.isActive() || (n.map[t] = !0)
			},
			deactivate: function(t) {
				delete n.map[t]
			}
		};
		t(109).CutinController = n
	}, {
		109: 109
	}],
	113: [function(t, e, i) {
		"use strict";
		var n = t(109),
			r = {
				random: 0,
				note_normal: 1,
				note_event: 2,
				note_hold: 3,
				note_bomb_1: 4,
				note_bomb_3: 5,
				note_bomb_5: 6,
				note_bomb_9: 7,
				note_slide: 11,
				note_slide_event: 12,
				note_slide_hold: 13,
				isHold: function(t) {
					return t == r.note_hold || t == r.note_slide_hold
				},
				isSlide: function(t) {
					return t >= r.note_slide && t <= r.note_slide_hold
				}
			};
		n.NoteEffect = r
	}, {
		109: 109
	}],
	111: [function(t, e, i) {
		"use strict";
		var n = t(109),
			r = {
				initialize: function() {
					r.sum_love = 0, r.score_rate = 1, r.combo_list = {}, function() {
						for (var t = [], e = function(e) {
								t.push({
									combo_cnt: 10 * e,
									score_rate: [
										[5, 1.1],
										[10, 1.15],
										[20, 1.2],
										[40, 1.25],
										[60, 1.3],
										[80, 1.35]
									].reduce(function(t, i) {
										return e >= i[0] ? i[1] : t
									}, 1),
									add_love_cnt: e % 10 == 0 ? 10 : e % 5 == 0 ? 5 : e > 200 ? 2 : 1
								})
							}, i = 1; i <= 200; i++) e(i);
						return t
					}().forEach(function(t) {
						r.combo_list[t.combo_cnt] = t
					}), n.SkillEffect.ComboBonus.initialize()
				},
				resetScoreRate: function() {
					r.score_rate = 1
				},
				find: function(t) {
					return r.combo_list[t]
				},
				update: function(t) {
					var e = r.find(t);
					e && (r.sum_love = r.sum_love + e.add_love_cnt, r.score_rate = e.score_rate)
				},
				getLove: function() {
					return r.sum_love
				},
				getScoreRate: function() {
					return r.score_rate
				},
				applyFixedValueBonus: function(t) {
					return t + n.SkillEffect.ComboBonus.getFixedValueBonus()
				}
			};
		n.Combo = r
	}, {
		109: 109
	}],
	128: [function(t, e, i) {
		"use strict";
		var n = {
			initialize: function() {
				n.current_skill_id = 1, n.skill_id_mapper = {};
				for (var t = 1; t <= 12; t++) n.skill_id_mapper[t] = !0
			},
			getNewSkillId: function() {
				for (var t = function(t) {
						return n.current_skill_id = t + 1, n.skill_id_mapper[t] = !1, t
					}, e = n.current_skill_id; e <= 12; e++) if (n.skill_id_mapper[e]) return t(e);
				for (var i = 1; i <= n.current_skill_id; i++) if (n.skill_id_mapper[i]) return t(i);
				return 0
			},
			resetSkillMap: function(t) {
				n.skill_id_mapper[t] = !0
			}
		};
		t(109).SkillIndicator = n, e.exports = n
	}, {
		109: 109
	}],
	115: [function(t, e, i) {
		"use strict";
		var n = t(109),
			r = {};

		function a(t) {
			if (t.length < 1) return [];
			var e = [],
				i = !0,
				r = !1,
				a = void 0;
			try {
				for (var s, o = t[Symbol.iterator](); !(i = (s = o.next()).done); i = !0) {
					var u = s.value;
					u.activateSkillEffect(), u.skill.active && e.push(u)
				}
			} catch (g) {
				r = !0, a = g
			} finally {
				try {
					i || null == o.
					return ||o.
					return ()
				} finally {
					if (r) throw a
				}
			}
			var l = e.reverse(),
				c = !0,
				f = !1,
				h = void 0;
			try {
				for (var _, d = l[Symbol.iterator](); !(c = (_ = d.next()).done); c = !0) {
					var p = _.value,
						v = !n.CutinController.isActive();
					p.showSkillEffect(v), p.showMimicEffect(v)
				}
			} catch (g) {
				f = !0, h = g
			} finally {
				try {
					c || null == d.
					return ||d.
					return ()
				} finally {
					if (f) throw h
				}
			}
			return l
		}
		r.initialize = function(t, e) {
			for (var i in r.boost_list = [], r.active_list = [], r.repeat_list = [], r.passive_list = [], r.clearDispatchList(), r.sync_effect_count = 0, t) r.separateBySkill(t[i]);
			r.hidden_character_list = e, r.random_value = Math.random()
		}, r.mayActivateBoostEffect = function() {
			return r.boost_list.length > 0
		}, r.mayActivateSyncEffect = function() {
			return r.sync_effect_count > 0
		}, r.clearDispatchList = function() {
			r.dispatched_list = [], r.boost_dispatched_list = [], r.repeat_dispatched_list = [], r.passive_dispatched_list = [], r.hidden_dispatched_list = []
		}, r.separateBySkill = function(t) {
			var e = t.skill;
			e && (e.isSyncEffect() && (r.sync_effect_count = r.sync_effect_count + 1), e.isBoostEffect() ? r.boost_list.push(t) : e.isPassive() ? r.passive_list.push(t) : e.isRepeatEffect() ? r.repeat_list.push(t) : r.active_list.push(t))
		}, r.deactivate = function(t) {
			var e = function(e) {
					var i = !0,
						n = !1,
						r = void 0;
					try {
						for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done); i = !0) a.value.deactivateSkill(t)
					} catch (o) {
						n = !0, r = o
					} finally {
						try {
							i || null == s.
							return ||s.
							return ()
						} finally {
							if (n) throw r
						}
					}
				};
			e(r.boost_list), e(r.active_list), e(r.repeat_list), e(r.passive_list), e(r.hidden_character_list)
		}, r.dispatchHiddenCharacterList = function(t, e) {
			var i = {};
			if (r.hidden_character_list.length > 1) for (var n = r.hidden_character_list.map(function(t) {
				return t
			}); n.legnth > 0;) i.push(n.splice(Math.floor(Math.random() * n.length), 1)[0]);
			else i = r.hidden_character_list;
			var a = !0,
				s = !1,
				o = void 0;
			try {
				for (var u, l = i[Symbol.iterator](); !(a = (u = l.next()).done); a = !0) {
					var c = u.value,
						f = c.skill;
					f.dispatch(t, e) && (f.isPassive() ? r.passive_dispatched_list : r.hidden_dispatched_list).push(c)
				}
			} catch (h) {
				s = !0, o = h
			} finally {
				try {
					a || null == l.
					return ||l.
					return ()
				} finally {
					if (s) throw o
				}
			}
		}, r.dispatch = function(t, e) {
			var i = function(i, n) {
					var r = !0,
						a = !1,
						s = void 0;
					try {
						for (var o, u = i[Symbol.iterator](); !(r = (o = u.next()).done); r = !0) {
							var l = o.value;
							l.skill.dispatch(t, e) && n.push(l)
						}
					} catch (c) {
						a = !0, s = c
					} finally {
						try {
							r || null == u.
							return ||u.
							return ()
						} finally {
							if (a) throw s
						}
					}
				};
			i(r.boost_list, r.boost_dispatched_list), i(r.active_list, r.dispatched_list), i(r.repeat_list, r.repeat_dispatched_list), i(r.passive_list, r.passive_dispatched_list), r.dispatchHiddenCharacterList(t, e)
		}, r.activatePassiveSkill = function() {
			var t = r.passive_dispatched_list.length;
			if (!(t < 1)) {
				n.SkillBoostQueue.ignoreTimestamp();
				var e = Math.floor(Math.random() * t);
				r.passive_dispatched_list.splice(e, 1)[0].activateSkill(!0, 80);
				var i = !0,
					a = !1,
					s = void 0;
				try {
					for (var o, u = r.passive_dispatched_list[Symbol.iterator](); !(i = (o = u.next()).done); i = !0) o.value.activateSkill(!1)
				} catch (l) {
					a = !0, s = l
				} finally {
					try {
						i || null == u.
						return ||u.
						return ()
					} finally {
						if (a) throw s
					}
				}
				n.SkillBoostQueue.useTimestamp()
			}
		}, r.activateBoostSkill = function() {
			return a(r.boost_dispatched_list)
		}, r.activateRepeatSkill = function() {
			return a(r.repeat_dispatched_list)
		}, r.activateOtherSkill = function() {
			var t = !0,
				e = !1,
				i = void 0;
			try {
				for (var a, s = r.dispatched_list[Symbol.iterator](); !(t = (a = s.next()).done); t = !0) a.value.activateSkill(!n.CutinController.isActive())
			} catch (o) {
				e = !0, i = o
			} finally {
				try {
					t || null == s.
					return ||s.
					return ()
				} finally {
					if (e) throw i
				}
			}
		}, r.activateHiddenSkill = function() {
			var t = !0,
				e = !1,
				i = void 0;
			try {
				for (var a, s = r.hidden_dispatched_list[Symbol.iterator](); !(t = (a = s.next()).done); t = !0) a.value.activateSkill(!n.CutinController.isActive())
			} catch (o) {
				e = !0, i = o
			} finally {
				try {
					t || null == s.
					return ||s.
					return ()
				} finally {
					if (e) throw i
				}
			}
		}, r.activate = function() {
			r.random_value < .5 ? (r.activateBoostSkill(), r.activateOtherSkill()) : (r.activateOtherSkill(), r.activateBoostSkill()), r.activateRepeatSkill(), r.activatePassiveSkill(), r.activateHiddenSkill()
		}, r.start = function(t, e, i) {
			r.current_time = i, r.deactivate(t), r.dispatch(t, e), r.activate(), r.clearDispatchList()
		}, n.SkillController = r
	}, {
		109: 109
	}],
	130: [function(t, e, i) {
		"use strict";
		var n = t(54),
			r = t(109),
			a = null,
			s = {
				instance_list: [],
				initialize: function() {
					s.instance_list = []
				},
				create: function(e, i) {
					a || (a = t(142));
					var r = {
						unit_type_map: {},
						initialize: function() {
							var t = !0,
								n = !1,
								a = void 0;
							try {
								for (var s, o = e.trigger_target.sifceGetUnitTypeListByMemberTag()[Symbol.iterator](); !(t = (s = o.next()).done); t = !0) {
									var u = s.value;
									u != i.unit_type_id && (r.unit_type_map[u] = !1)
								}
							} catch (l) {
								n = !0, a = l
							} finally {
								try {
									t || null == o.
									return ||o.
									return ()
								} finally {
									if (n) throw a
								}
							}
						},
						clearMap: function() {
							for (var t in r.unit_type_map) r.unit_type_map[t] = !1
						},
						isReady: function() {
							if (Object.keys(r.unit_type_map).length < 1) return !1;
							for (var t in r.unit_type_map) if (!r.unit_type_map[t]) return !1;
							return !0
						},
						dispatch: function() {
							return function() {
								var t = !1;
								return r.isReady() && (t = a.judgeActivation(this.getActivationRate()), r.clearMap()), t
							}
						},
						updateMap: function(t, e) {
							if (e.trigger_type != n.SKILL_TRIGGER_TYPE.chain) {
								var i = t.unit_type_id;
								"boolean" == typeof r.unit_type_map[i] && (r.unit_type_map[i] = !0)
							}
						}
					};
					return r.initialize(), s.instance_list.push(r), r
				},
				update: function(t, e) {
					var i = !0,
						n = !1,
						r = void 0;
					try {
						for (var a, o = s.instance_list[Symbol.iterator](); !(i = (a = o.next()).done); i = !0) a.value.updateMap(t, e)
					} catch (u) {
						n = !0, r = u
					} finally {
						try {
							i || null == o.
							return ||o.
							return ()
						} finally {
							if (n) throw r
						}
					}
				}
			};
		r.Trigger.OtherMember = s
	}, {
		109: 109,
		142: 142,
		54: 54
	}],
	118: [function(t, e, i) {
		"use strict";
		var n = t(109),
			r = {
				apply: function(t) {
					var e = n.SkillEffect.EnhanceAccuracyStrong;
					if (e.isActive()) return e.apply(t);
					var i = n.SkillEffect.EnhanceAccuracyWeak;
					return i.isActive() ? i.apply(t) : t
				},
				isActive: function() {
					return n.SkillEffect.EnhanceAccuracyStrong.isActive() || n.SkillEffect.EnhanceAccuracyWeak.isActive()
				}
			};
		n.SkillEffect.EnhanceAccuracy = r
	}, {
		109: 109
	}],
	110: [function(t, e, i) {
		"use strict";
		var n = t(12)(t(19)),
			r = t(54),
			a = t(56),
			s = t(109),
			o = {},
			u = null;
		o.getInstance = function() {
			return u
		}, o.initialize = function(t) {
			u = {};
			var e = {};
			for (var i in r.ACCURACY) e[r.ACCURACY[i]] = 0;
			var s = {
				normal: {
					total: 0,
					result: 0
				},
				same_timing: {
					total: 0,
					result: 0
				},
				hold: {
					total: 0,
					result: 0
				},
				slide: {
					total: 0,
					result: 0
				}
			},
				o = function(t) {
					return t.is_same_timing ? s.same_timing : t.is_slide ? s.slide : t.is_hold ? s.hold : s.normal
				},
				l = !0,
				c = !1,
				f = void 0;
			try {
				for (var h, _ = t.entries()[Symbol.iterator](); !(l = (h = _.next()).done); l = !0) {
					var d = (0, n.
				default)(h.value, 2),
						p = (d[0], d[1]),
						v = o(p);
					v.total = v.total + 1
				}
			} catch (g) {
				c = !0, f = g
			} finally {
				try {
					l || null == _.
					return ||_.
					return ()
				} finally {
					if (c) throw f
				}
			}
			return u.getPreciseStats = function() {
				return {
					getNormal: function() {
						return s.normal
					},
					getSameTiming: function() {
						return s.same_timing
					},
					getHold: function() {
						return s.hold
					},
					getSlide: function() {
						return s.slide
					}
				}
			}, u.parse = function() {
				var e = {},
					i = {
						perfect: 0,
						great: 0,
						good: 0,
						bad: 0,
						miss: 0
					},
					r = !0,
					s = !1,
					l = void 0;
				try {
					for (var c, f = t.entries()[Symbol.iterator](); !(r = (c = f.next()).done); r = !0) {
						var h = (0, n.
					default)(c.value, 2),
							_ = (h[0], h[1]),
							d = a.valueToKey(_.accuracy);
						if (d && i[d] && (i[d] = i[d] + 1), _.accuracy == a.perfect) {
							var p = o(_);
							p.result = p.result + 1
						}
					}
				} catch (g) {
					s = !0, l = g
				} finally {
					try {
						r || null == f.
						return ||f.
						return ()
					} finally {
						if (s) throw l
					}
				}
				return e.accuracy = i, e.stats = u.getPreciseStats(), e
			}, u.isAllPerfect = function() {
				for (var t in s) if (s[t].result < s[t].total) return !1;
				return !0
			}, u.update = function(t, i) {
				if (null != e[t] && (e[t] = e[t] + 1, i && t == r.ACCURACY.PERFECT)) {
					var n = o(i);
					n.result = n.result + 1
				}
			}, u.getCount = function(t) {
				return e[t] || 0
			}, u
		}, o.parse = function(t) {
			return o.initialize(t).parse()
		}, o.update = function(t, e) {
			return o.getInstance().update(t, e)
		}, o.getCount = function(t) {
			return o.getInstance().getCount(t)
		}, s.AccuracyLog = o
	}, {
		109: 109,
		12: 12,
		19: 19,
		54: 54,
		56: 56
	}],
	116: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(8)),
			a = n(t(5)),
			s = n(t(7)),
			o = t(54),
			u = t(128),
			l = t(109),
			c = null,
			f = function() {
				function t(e) {
					(0, a.
				default)(this, t), this.skill = e
				}
				return (0, s.
			default)(t, [{
					key: "onFinish",
					value: function() {}
				}, {
					key: "canActivate",
					value: function() {
						return !0
					}
				}, {
					key: "reset",
					value: function() {}
				}, {
					key: "reapply",
					value: function() {}
				}, {
					key: "showIndicator",
					value: function() {
						var t = u.getNewSkillId();
						return c.showIndicator(this.skill.skill_effect_type, t), t
					}
				}, {
					key: "hideIndicator",
					value: function(t) {
						u.resetSkillMap(t), c.hideIndicator(t)
					}
				}]), t
			}();
		l.SkillEffect = {
			base: f,
			create: function(e, i) {
				var n;
				c || (c = t(103));
				var a = (n = {}, (0, r.
			default)(n, o.SKILL_EFFECT.skill_rate_up, this.SkillRate), (0, r.
			default)(n, o.SKILL_EFFECT.sync_status, this.SyncStatus), (0, r.
			default)(n, o.SKILL_EFFECT.gain_status, this.GainStatus), (0, r.
			default)(n, o.SKILL_EFFECT.gain_skill_level, this.GainSkillLevel), (0, r.
			default)(n, o.SKILL_EFFECT.mimic, this.Mimic), (0, r.
			default)(n, o.SKILL_EFFECT.perfect_bonus_ratio, this.PerfectBonus), (0, r.
			default)(n, o.SKILL_EFFECT.perfect_bonus_fixed_value, this.PerfectBonus), (0, r.
			default)(n, o.SKILL_EFFECT.combo_bonus, this.ComboBonus), (0, r.
			default)(n, o.SKILL_EFFECT.good_to_perfect, this.EnhanceAccuracyStrong), (0, r.
			default)(n, o.SKILL_EFFECT.great_to_perfect, this.EnhanceAccuracyWeak), (0, r.
			default)(n, o.SKILL_EFFECT.score_up, this.ScoreBonus), n)[e.skill_effect_type];
				return a ? a.create(e, i) : new f(e)
			}
		}, t(126), t(127), t(123), t(124), t(117), t(118), t(119), t(120), t(125)
	}, {
		103: 103,
		109: 109,
		117: 117,
		118: 118,
		119: 119,
		12: 12,
		120: 120,
		123: 123,
		124: 124,
		125: 125,
		126: 126,
		127: 127,
		128: 128,
		5: 5,
		54: 54,
		7: 7,
		8: 8
	}],
	129: [function(t, e, i) {
		"use strict";
		var n = t(12)(t(22)),
			r = t(54),
			a = (t(109), {
				initialize: function() {
					a.reset()
				},
				reset: function() {
					a.stack = [], a.pushed_timestamp = 0, a.popped_timestamp = 0
				},
				push: function(t, e) {
					"object" === (0, n.
				default)(t) && "number" == typeof e && t.skill_effect_type != r.SKILL_EFFECT.mimic && (e > a.pushed_timestamp && (a.stack = []), a.pushed_timestamp = e, a.stack.push(t))
				},
				pop: function(t) {
					if (a.isStacked()) {
						if (t = t || 0, a.popped_timestamp == t) return a.stack[0];
						if (!(a.popped_timestamp > a.pushed_timestamp)) return a.popped_timestamp = t, a.stack[0];
						a.stack = []
					}
				},
				isStacked: function() {
					return a.stack.length > 0
				}
			});
		t(109).SkillStack = a
	}, {
		109: 109,
		12: 12,
		22: 22,
		54: 54
	}],
	126: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(5)),
			a = n(t(7)),
			s = n(t(17)),
			o = n(t(10)),
			u = n(t(11)),
			l = t(109),
			c = null,
			f = {
				is_active: !1,
				skill_id: null
			},
			h = function(t) {
				function e(t, i) {
					var n;
					return (0, r.
				default)(this, e), (n = (0, s.
				default)(this, (0, o.
				default)(e).call(this, t))).character = i, n
				}
				return (0, u.
			default)(e, t), (0, a.
			default)(e, [{
					key: "onActivate",
					value: function() {
						f.is_active || (f.is_active = !0, f.skill_id = this.showIndicator(), c.gainActivationRate(this.character.getSkillEffectValue()))
					}
				}, {
					key: "onFinish",
					value: function() {
						c.resetActivationRate(), this.hideIndicator(f.skill_id), f.skill_id = null, f.is_active = !1
					}
				}, {
					key: "canActivate",
					value: function() {
						return !f.is_active
					}
				}, {
					key: "reset",
					value: function() {
						f.is_active = !1
					}
				}]), e
			}(l.SkillEffect.base);
		f.create = function(e, i) {
			return c || (c = t(103)), new h(e, i)
		}, l.SkillEffect.SkillRate = f
	}, {
		10: 10,
		103: 103,
		109: 109,
		11: 11,
		12: 12,
		17: 17,
		5: 5,
		7: 7
	}],
	127: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(5)),
			a = n(t(7)),
			s = n(t(17)),
			o = n(t(10)),
			u = n(t(11)),
			l = t(109),
			c = null,
			f = {
				position_count_map: {}
			},
			h = function(t) {
				function e(t, i) {
					var n;
					return (0, r.
				default)(this, e), (n = (0, s.
				default)(this, (0, o.
				default)(e).call(this, t))).character = i, n.targets = c.findSyncTargetList(t, i), n.no_target = n.targets.length < 1, n.target = null, n
				}
				return (0, u.
			default)(e, t), (0, a.
			default)(e, [{
					key: "random_pick_target",
					value: function() {
						return this.targets[Math.floor(Math.random() * this.targets.length)]
					}
				}, {
					key: "reapply",
					value: function() {
						this.target && this.character.syncStatus(this.target.getSyncStatus(), this.target.position)
					}
				}, {
					key: "onActivate",
					value: function() {
						this.no_target || (this.target = this.random_pick_target(), this.character.syncStatus(this.target.getSyncStatus(), this.target.position), this.character.showSyncEffect(!1), f.activatePosition(this.target), this.target.showSyncEffect(!0))
					}
				}, {
					key: "onFinish",
					value: function() {
						this.character.restoreStatus(), this.character.stopSyncEffect(!1), this.target && (f.deactivatePosition(this.target), f.position_count_map[this.target.position] < 1 && this.target.stopSyncEffect(!0))
					}
				}, {
					key: "canActivate",
					value: function() {
						return !this.no_target
					}
				}]), e
			}(l.SkillEffect.base);
		f.initialize = function() {
			f.position_count_map = {};
			for (var t = 1; t <= 9; t++) f.position_count_map[t] = 0
		}, f.activatePosition = function(t) {
			f.position_count_map[t.position] = f.position_count_map[t.position] + 1
		}, f.deactivatePosition = function(t) {
			f.position_count_map[t.position] = f.position_count_map[t.position] - 1
		}, f.create = function(e, i) {
			return c || (c = t(103)), new h(e, i)
		}, l.SkillEffect.SyncStatus = f
	}, {
		10: 10,
		103: 103,
		109: 109,
		11: 11,
		12: 12,
		17: 17,
		5: 5,
		7: 7
	}],
	124: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(5)),
			a = n(t(7)),
			s = n(t(17)),
			o = n(t(10)),
			u = n(t(11)),
			l = t(54),
			c = t(109),
			f = {
				rate_bonus_queue: [],
				fixed_value_bonus_queue: [],
				skill_id: null,
				initialize: function() {
					f.rate_bonus_queue = [], f.fixed_value_bonus_queue = [], f.skill_id = null
				}
			},
			h = function(t) {
				function e(t, i) {
					var n;
					return (0, r.
				default)(this, e), (n = (0, s.
				default)(this, (0, o.
				default)(e).call(this, t))).by_ratio = t.skill_effect_type == l.SKILL_EFFECT.perfect_bonus_ratio, n.character = i, n
				}
				return (0, u.
			default)(e, t), (0, a.
			default)(e, [{
					key: "onActivate",
					value: function() {
						f.isActive() || (f.skill_id = this.showIndicator());
						var t = this.character.getSkillEffectValue();
						this.by_ratio ? f.rate_bonus_queue.push(t) : f.fixed_value_bonus_queue.push(t)
					}
				}, {
					key: "onFinish",
					value: function() {
						f.isActive() && (this.by_ratio ? f.rate_bonus_queue.pop() : f.fixed_value_bonus_queue.pop(), f.isActive() || (this.hideIndicator(f.skill_id), f.skill_id = null))
					}
				}, {
					key: "reset",
					value: function() {
						f.rate_bonus_queue = [], f.fixed_value_bonus_queue = [], f.skill_id = null
					}
				}]), e
			}(c.SkillEffect.base);
		f.create = function(t, e) {
			return new h(t, e)
		}, f.sumBonus = function(t) {
			if (t != l.ACCURACY.PERFECT) return 0;
			var e = 0,
				i = !0,
				n = !1,
				r = void 0;
			try {
				for (var a, s = f.fixed_value_bonus_queue[Symbol.iterator](); !(i = (a = s.next()).done); i = !0) e += a.value
			} catch (u) {
				n = !0, r = u
			} finally {
				try {
					i || null == s.
					return ||s.
					return ()
				} finally {
					if (n) throw r
				}
			}
			var o = config.skill_control.perfect_bonus_fixed;
			return Math.min(e, o)
		}, f.isActive = function() {
			return f.rate_bonus_queue.length > 0 || f.fixed_value_bonus_queue.length > 0
		}, f.apply = function(t) {
			var e = 1,
				i = !0,
				n = !1,
				r = void 0;
			try {
				for (var a, s = f.rate_bonus_queue[Symbol.iterator](); !(i = (a = s.next()).done); i = !0) e += a.value
			} catch (u) {
				n = !0, r = u
			} finally {
				try {
					i || null == s.
					return ||s.
					return ()
				} finally {
					if (n) throw r
				}
			}
			var o = config.skill_control.perfect_bonus;
			return t * Math.min(e, Math.max(1, o))
		}, c.SkillEffect.PerfectBonus = f
	}, {
		10: 10,
		109: 109,
		11: 11,
		12: 12,
		17: 17,
		5: 5,
		54: 54,
		7: 7
	}],
	122: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(5)),
			a = n(t(7)),
			s = n(t(17)),
			o = n(t(10)),
			u = n(t(11)),
			l = t(109),
			c = null,
			f = {
				active_count: 0,
				skill_id: null
			},
			h = function(t) {
				function e(t, i) {
					var n;
					return (0, r.
				default)(this, e), (n = (0, s.
				default)(this, (0, o.
				default)(e).call(this, t))).targets = c.findBuffTargetList(t), n.no_target = n.targets.length < 1, n.character = i, n
				}
				return (0, u.
			default)(e, t), (0, a.
			default)(e, [{
					key: "reapply",
					value: function() {
						var t = !0,
							e = !1,
							i = void 0;
						try {
							for (var n, r = this.targets[Symbol.iterator](); !(t = (n = r.next()).done); t = !0) n.value.reapplyBuff()
						} catch (a) {
							e = !0, i = a
						} finally {
							try {
								t || null == r.
								return ||r.
								return ()
							} finally {
								if (e) throw i
							}
						}
					}
				}, {
					key: "onActivate",
					value: function() {
						if (!this.no_target) {
							f.isActive() || (f.skill_id = l.SkillIndicator.getNewSkillId()), f.active_count = f.active_count + 1;
							var t = this.character.getSkillEffectValue(),
								e = !0,
								i = !1,
								n = void 0;
							try {
								for (var r, a = this.targets[Symbol.iterator](); !(e = (r = a.next()).done); e = !0) {
									var s = r.value;
									s.applyBuff(t), f.skill_id && s.showIndicator(this.skill.skill_effect_type, f.skill_id)
								}
							} catch (o) {
								i = !0, n = o
							} finally {
								try {
									e || null == a.
									return ||a.
									return ()
								} finally {
									if (i) throw n
								}
							}
						}
					}
				}, {
					key: "onFinish",
					value: function() {
						f.active_count = f.active_count - 1;
						var t = !0,
							e = !1,
							i = void 0;
						try {
							for (var n, r = this.targets[Symbol.iterator](); !(t = (n = r.next()).done); t = !0) {
								var a = n.value;
								a.resetBuff(), a.hideIndicator(f.skill_id)
							}
						} catch (s) {
							e = !0, i = s
						} finally {
							try {
								t || null == r.
								return ||r.
								return ()
							} finally {
								if (e) throw i
							}
						}
						f.isActive() || (l.SkillIndicator.resetSkillMap(f.skill_id), f.skill_id = null)
					}
				}, {
					key: "canActivate",
					value: function() {
						if (this.no_target) return !1;
						var t = !0,
							e = !1,
							i = void 0;
						try {
							for (var n, r = this.targets[Symbol.iterator](); !(t = (n = r.next()).done); t = !0) if (!n.value.isBuffed()) return !0
						} catch (a) {
							e = !0, i = a
						} finally {
							try {
								t || null == r.
								return ||r.
								return ()
							} finally {
								if (e) throw i
							}
						}
						return !1
					}
				}, {
					key: "reset",
					value: function() {
						f.active_count = 0, f.skill_id = null
					}
				}]), e
			}(l.SkillEffect.base);
		f.create = function(e, i) {
			return c || (c = t(103)), new h(e, i)
		}, f.isActive = function() {
			return f.active_count > 0
		}, l.SkillEffect.GainStatus = f
	}, {
		10: 10,
		103: 103,
		109: 109,
		11: 11,
		12: 12,
		17: 17,
		5: 5,
		7: 7
	}],
	121: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(5)),
			a = n(t(7)),
			s = n(t(17)),
			o = n(t(10)),
			u = n(t(11)),
			l = t(109),
			c = {},
			f = function(t) {
				function e(t, i) {
					var n;
					return (0, r.
				default)(this, e), (n = (0, s.
				default)(this, (0, o.
				default)(e).call(this, t))).character = i, n
				}
				return (0, u.
			default)(e, t), (0, a.
			default)(e, [{
					key: "onActivate",
					value: function() {
						var t = this.character.mimic || this.character.skill;
						l.SkillBoostQueue.push(t.getEffectValue(), this.character.position)
					}
				}, {
					key: "canActivate",
					value: function() {
						return l.SkillBoostQueue.canPush()
					}
				}]), e
			}(l.SkillEffect.base);
		c.create = function(t, e) {
			return new f(t, e)
		}, l.SkillEffect.GainSkillLevel = c
	}, {
		10: 10,
		109: 109,
		11: 11,
		12: 12,
		17: 17,
		5: 5,
		7: 7
	}],
	123: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(5)),
			a = n(t(7)),
			s = n(t(17)),
			o = n(t(10)),
			u = n(t(11)),
			l = t(54),
			c = t(109),
			f = null,
			h = {},
			_ = function(t) {
				function e(t, i) {
					var n;
					return (0, r.
				default)(this, e), (n = (0, s.
				default)(this, (0, o.
				default)(e).call(this, t))).character = i, n
				}
				return (0, u.
			default)(e, t), (0, a.
			default)(e, [{
					key: "canActivate",
					value: function() {
						var t = c.SkillStack.pop(f.current_time);
						return !!t && (t.skill_effect_type != l.SKILL_EFFECT.gain_skill_level || c.SkillBoostQueue.canPush())
					}
				}, {
					key: "onActivate",
					value: function() {
						var t = c.SkillStack.pop(f.current_time);
						t && this.character.activateMimicEffect(t)
					}
				}]), e
			}(c.SkillEffect.base);
		h.create = function(e, i) {
			return f || (f = t(134)), new _(e, i)
		}, c.SkillEffect.Mimic = h
	}, {
		10: 10,
		109: 109,
		11: 11,
		12: 12,
		134: 134,
		17: 17,
		5: 5,
		54: 54,
		7: 7
	}],
	117: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(5)),
			a = n(t(7)),
			s = n(t(17)),
			o = n(t(10)),
			u = n(t(11)),
			l = (t(54), t(109)),
			c = null,
			f = {
				skill_id: null,
				effect_map: {}
			},
			h = function(t) {
				function e(t, i) {
					var n;
					return (0, r.
				default)(this, e), (n = (0, s.
				default)(this, (0, o.
				default)(e).call(this, t))).character = i, n
				}
				return (0, u.
			default)(e, t), (0, a.
			default)(e, [{
					key: "getBonusValue",
					value: function() {
						if (!f.position_effect_map[this.character.position]) return 0;
						var t = this.character.getSkillEffectValue(),
							e = this.character.getComboPatternId();
						if (!e) return t;
						var i = function(t, e) {
								if (!t) return 0;
								var i = t.sort(function(t, e) {
									return e.combo_count - t.combo_count
								}).filter(function(t) {
									return t.combo_count <= e
								})[0];
								return i ? i.bonus_rate : 0
							}(this.__combo_patterns[e], c.getCombo());
						return i ? t * i : t
					}
				}, {
					key: "onActivate",
					value: function() {
						f.isActive() || (f.skill_id = l.SkillIndicator.getNewSkillId()), f.position_effect_map[this.character.position] = !0, f.skill_id && this.character.showIndicator(this.skill.skill_effect_type, f.skill_id)
					}
				}, {
					key: "onFinish",
					value: function() {
						delete f.position_effect_map[this.character.position], this.character.hideIndicator(f.skill_id), f.isActive() || (l.SkillIndicator.resetSkillMap(f.skill_id), f.skill_id = null)
					}
				}]), e
			}(l.SkillEffect.base);
		f.initialize = function() {
			f.position_effect_map = {}, f.effect_map = {}
		}, f.create = function(e, i) {
			c || (c = t(138));
			var n = new h(e, i);
			return f.effect_map[i.position] = n, n
		}, f.isActive = function() {
			return Object.keys(f.position_effect_map).length > 0
		}, f.getFixedValueBonus = function() {
			if (!f.isActive()) return 0;
			var t = 0;
			for (var e in f.effect_map) t += f.effect_map[e].getBonusValue();
			var i = config.skill_control.combo_bonus_fixed;
			return Math.min(i, Math.ceil(t))
		}, l.SkillEffect.ComboBonus = f
	}, {
		10: 10,
		109: 109,
		11: 11,
		12: 12,
		138: 138,
		17: 17,
		5: 5,
		54: 54,
		7: 7
	}],
	119: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(5)),
			a = n(t(7)),
			s = n(t(17)),
			o = n(t(10)),
			u = n(t(11)),
			l = t(54),
			c = t(109),
			f = {
				active_count: 0,
				skill_id: null
			},
			h = function(t) {
				function e() {
					return (0, r.
				default)(this, e), (0, s.
				default)(this, (0, o.
				default)(e).apply(this, arguments))
				}
				return (0, u.
			default)(e, t), (0, a.
			default)(e, [{
					key: "onActivate",
					value: function() {
						f.isActive() || (f.skill_id = this.showIndicator()), f.active_count = f.active_count + 1
					}
				}, {
					key: "onFinish",
					value: function() {
						f.active_count = f.active_count - 1, f.isActive() || (this.hideIndicator(f.skill_id), f.skill_id = null)
					}
				}, {
					key: "reset",
					value: function() {
						f.active_count = 0, f.skill_id = null
					}
				}]), e
			}(c.SkillEffect.base);
		f.create = function(t) {
			return new h(t)
		}, f.isActive = function() {
			return f.active_count > 0
		}, f.apply = function(t) {
			return !f.isActive() || t != l.ACCURACY.GOOD && t != l.ACCURACY.GREAT ? t : l.ACCURACY.PERFECT
		}, c.SkillEffect.EnhanceAccuracyStrong = f
	}, {
		10: 10,
		109: 109,
		11: 11,
		12: 12,
		17: 17,
		5: 5,
		54: 54,
		7: 7
	}],
	125: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(5)),
			a = n(t(7)),
			s = n(t(17)),
			o = n(t(10)),
			u = n(t(11)),
			l = t(109),
			c = {
				bonus_queue: []
			},
			f = function(t) {
				function e() {
					return (0, r.
				default)(this, e), (0, s.
				default)(this, (0, o.
				default)(e).apply(this, arguments))
				}
				return (0, u.
			default)(e, t), (0, a.
			default)(e, [{
					key: "onActivate",
					value: function() {
						c.bonus_queue.push(this.skill.effect_value)
					}
				}, {
					key: "onFinish",
					value: function() {
						c.isActive() && c.bonus_queue.pop()
					}
				}, {
					key: "reset",
					value: function() {
						c.bonus_queue = []
					}
				}]), e
			}(l.SkillEffect.base);
		c.initialize = function() {
			c.bonus_queue = []
		}, c.create = function(t) {
			return new f(t)
		}, c.apply = function(t) {
			var e = 1,
				i = !0,
				n = !1,
				r = void 0;
			try {
				for (var a, s = c.bonus_queue[Symbol.iterator](); !(i = (a = s.next()).done); i = !0) {
					var o = a.value;
					e += Math.max(0, o - 1)
				}
			} catch (u) {
				n = !0, r = u
			} finally {
				try {
					i || null == s.
					return ||s.
					return ()
				} finally {
					if (n) throw r
				}
			}
			return t * e
		}, c.isActive = function() {
			return c.bonus_queue.length > 0
		}, l.SkillEffect.ScoreBonus = c
	}, {
		10: 10,
		109: 109,
		11: 11,
		12: 12,
		17: 17,
		5: 5,
		7: 7
	}],
	120: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(5)),
			a = n(t(7)),
			s = n(t(17)),
			o = n(t(10)),
			u = n(t(11)),
			l = t(54),
			c = t(109),
			f = {
				active_count: 0,
				skill_id: null
			},
			h = function(t) {
				function e() {
					return (0, r.
				default)(this, e), (0, s.
				default)(this, (0, o.
				default)(e).apply(this, arguments))
				}
				return (0, u.
			default)(e, t), (0, a.
			default)(e, [{
					key: "onActivate",
					value: function() {
						f.isActive() || (f.skill_id = this.showIndicator()), f.active_count = f.active_count + 1
					}
				}, {
					key: "onFinish",
					value: function() {
						f.active_count = f.active_count - 1, f.isActive() || (this.hideIndicator(f.skill_id), f.skill_id = null)
					}
				}, {
					key: "reset",
					value: function() {
						f.active_count = 0, f.skill_id = null
					}
				}]), e
			}(c.SkillEffect.base);
		f.create = function(t) {
			return new h(t)
		}, f.isActive = function() {
			return f.active_count > 0
		}, f.apply = function(t) {
			return f.isActive() && t == l.ACCURACY.GREAT ? l.ACCURACY.PERFECT : t
		}, c.SkillEffect.EnhanceAccuracyWeak = f
	}, {
		10: 10,
		109: 109,
		11: 11,
		12: 12,
		17: 17,
		5: 5,
		54: 54,
		7: 7
	}],
	134: [function(t, e, i) {
		"use strict";
		var n = t(12),
			r = n(t(8)),
			a = n(t(19)),
			s = t(81),
			o = t(97),
			u = t(58),
			l = t(131),
			c = t(133),
			f = t(135),
			h = t(139),
			_ = t(84),
			d = t(103),
			p = t(138),
			v = t(141),
			g = t(109),
			m = t(56),
			y = {
				miss: 0,
				bad: 1,
				good: 2,
				great: 3,
				perfect: 4
			},
			b = {
				TOUCH_STATE: {
					TAPPED: 1,
					DRAGGING: 0,
					HOLDING: -1,
					RELEASED: -2,
					CLEARED: -3
				},
				_setupAccuracyEffect: function() {
					this.accuracy_flash = new o(this.task_form, h.SCORE_PRIORITY, h.SCORE_X, h.SCORE_Y, "assets/flash/ui/live/live_timing.flsh", "ef_313"), config.effect_flag || this.accuracy_flash.setColor(127, 16777215);
					var t = h.LIVE_IMAGE_SCALE[config.size_setting];
					t && this.accuracy_flash.setScale(t, t), this.accuracy_flash.framerate = 30, this.accuracy_flash.setVisible(!1), this.accuracy_flash.stop()
				},
				_setupNotesAppearance: function() {
					var t = {
						1: config.ui_smile,
						2: config.ui_pure,
						3: config.ui_cool
					},
						e = {
							1: config.ui_smile_arrow,
							2: config.ui_pure_arrow,
							3: config.ui_cool_arrow
						},
						i = {
							1: config.ui_smile_parallel,
							2: config.ui_pure_parallel,
							3: config.ui_cool_parallel
						};
					this.notes_appearance_model = {
						normal_id: config.ui_custom_note_flag,
						getNormalPathByAttribute: function(e) {
							return t[e]
						},
						getSlidePathByAttribute: function(t) {
							return e[t]
						},
						getSamePathByAttribute: function(t) {
							return i[t]
						}
					}
				},
				initializeNotes: function() {
					this.notes = {}, this.touch_map = {};
					for (var t = 1; t <= h.CHARACTER_COUNT; t++) this.touch_map[t] = this.TOUCH_STATE.CLEARED, this.notes[t] = []
				},
				_setupNotes: function() {
					this.track_length = _.lengthLive(), this.notes_speed = config.__currentLive.notes_speed, this.initializeNotes(), this.current_time = 0, this.last_time = 0, this.current_note = 0, this.accuracy = null, this.event_note_asset = null, this.prev_timing_sec = -1, this.notes_list = config.__currentLive.notes_list;
					var t = !0,
						e = !1,
						i = void 0;
					try {
						for (var n, r = this.notes_list[Symbol.iterator](); !(t = (n = r.next()).done); t = !0) {
							var s = n.value;
							s.timing_sec = Math.floor(1e3 * s.timing_sec) / 1e3, s.appear_time = s.timing_sec - this.notes_speed * (s.speed || 1) - .1
						}
					} catch (T) {
						e = !0, i = T
					} finally {
						try {
							t || null == r.
							return ||r.
							return ()
						} finally {
							if (e) throw i
						}
					}
					this.notes_list = this.notes_list.sort(function(t, e) {
						return t.appear_time - e.appear_time
					}), this.same_map = {};
					var o = {},
						u = !0,
						l = !1,
						c = void 0;
					try {
						for (var f, h = this.notes_list.entries()[Symbol.iterator](); !(u = (f = h.next()).done); u = !0) {
							var d = (0, a.
						default)(f.value, 2),
								p = d[0],
								v = d[1];
							v.order = p;
							var m = o[v.timing_sec];
							m && (this.same_map[m.order] = !0, this.same_map[p] = !0), o[v.timing_sec] = v
						}
					} catch (T) {
						l = !0, c = T
					} finally {
						try {
							u || null == h.
							return ||h.
							return ()
						} finally {
							if (l) throw c
						}
					}
					this.group_map = {};
					var y = !0,
						b = !1,
						k = void 0;
					try {
						for (var w, x = this.notes_list.entries()[Symbol.iterator](); !(y = (w = x.next()).done); y = !0) {
							var A = (0, a.
						default)(w.value, 2),
								S = (p = A[0], A[1]);
							1 < S.notes_level && (this.group_map[S.notes_level] || (this.group_map[S.notes_level] = []), this.group_map[S.notes_level].push({
								number: p,
								position: S.position
							}));
							var E = S.effect;
							S.is_hold = g.NoteEffect.isHold(E), S.is_slide = g.NoteEffect.isSlide(E), this.same_map[p] && (S.is_same_timing = !0)
						}
					} catch (T) {
						b = !0, k = T
					} finally {
						try {
							y || null == x.
							return ||x.
							return ()
						} finally {
							if (b) throw k
						}
					}
					0 == this.medley_index && g.AccuracyLog.initialize(this.notes_list)
				},
				_setupCaches: function() {
					f.go(this.track_length, this.notes_list, this.notes_speed, this.distributions, this.event_note_asset, this.same_map, this.group_map, this.notes_appearance_model)
				},
				_setupEffectController: function() {
					var t = this;
					this.last_play_accurcy_frame = {}, this.bomb_query_queue = [], this.delay_query = null, this.delay_daemon = u.daemon(function() {
						t.bomb_query_queue[0] && s.frameId() % 2 == 0 && t.bomb_query_queue.shift()(), t.delay_query && t.delay_query.frame_id !== s.frameId() && s.frameId() % 2 != 1 && (t.delay_query.func(), t.delay_query = null)
					}, this.task_form)
				},
				initializeLog: function() {
					this.note_log = {}, this.note_log_difference = []
				},
				init: function(t) {
					this.setMedleyIndex(config.__currentLiveIndex), c.init(t), this.task_form = t, this._setupAccuracyEffect(), this._setupEffectController(), this._setupNotesAppearance(), this._setupNotes(), this._setupCaches()
				},
				remainingTime: function() {
					return Math.max(1e3 * (this.track_length - this.current_time), 0)
				},
				release: function() {
					if (this.notes) {
						for (var t in this.notes) {
							for (var e in this.notes[t]) this.notes[t][e] && (this.notes[t][e].kill(), this.notes[t][e] = null);
							this.notes[t] = null
						}
						this.accuracy_flash = this.accuracy_flash && this.accuracy_flash.kill()
					}
					c.release()
				},
				newNote: function(t, e) {
					var i = l.create(t, this.notes_speed, this.distributions, this.current_note, this.event_note_asset, e, this.notes_appearance_model);
					if (i) {
						if (this.group_map[i.group]) {
							var n = this.group_map[i.group];
							i.is_head = n[0].number == i.number, i.is_tail = n[n.length - 1].number == i.number, n.forEach(function(t, e) {
								t.number == i.number && (i.sequence = e, n[e + 1] ? i.next_pos = n[e + 1].position : n[e - 1] && (i.next_pos = n[e].position > n[e - 1].position ? i.pos + 1 : i.pos - 1))
							})
						}
						return i.addNode(), this.notes[i.pos].push(i), t.speed && (this.notes[t.position] = this.notes[t.position].sort(function(t, e) {
							return t.time - e.time
						})), i
					}
				},
				showAccuracy: function(t) {
					var e = this;
					this.accuracy = t, this.delay_query = {
						frame_id: s.frameId(),
						func: function() {
							e.accuracy_flash && (e.accuracy_flash.setVisible(!0), e.accuracy_flash.gotoFrame(t), e.accuracy_flash.play())
						}
					}, this.last_play_accurcy_frame !== s.frameId() && (this.last_play_accurcy_frame = s.frameId(), config["se_" + t] && _.playSE(config["se_" + t]))
				},
				unleashBombs: function(t) {
					var e, i = this,
						n = [],
						a = t.pos - 1,
						s = 0,
						o = h.CHARACTER_COUNT,
						u = (e = {}, (0, r.
					default)(e, l.EFFECTS.note_bomb_1, 0), (0, r.
					default)(e, l.EFFECTS.note_bomb_3, 1), (0, r.
					default)(e, l.EFFECTS.note_bomb_5, 2), (0, r.
					default)(e, l.EFFECTS.note_bomb_9, 4), e)[t.effect];
					if (void 0 !== u) {
						n.push(a);
						for (var c = 1; c <= u; c++) n.push((a + c) % o), n.push((a - c + o) % o);
						for (var f = function() {
								var t = n[p];
								i.bomb_query_queue.push(function() {
									d.bomb(t + 1)
								}), s += 2
							}, p = 0; p < n.length; p++) f();
						_.playSE("assets/sound/ui/se/SE_326.mp3")
					}
					return s
				},
				presumeTappedTime: function() {
					return (this.last_time + this.current_time) / 2
				},
				upgradeAccuracy: function(t, e) {
					e = e || 1;
					for (var i = 1; i <= e; i++)"great" == t ? t = "perfect" : "good" == t ? t = "great" : "bad" == t && (t = "good");
					return t
				},
				addScore: function(t, e) {
					var i = null,
						n = null,
						r = this.presumeTappedTime(),
						a = function(t, e) {
							return e && (t = b.upgradeAccuracy(t, 1)), g.SkillEffect.EnhanceAccuracy.apply(t)
						};
					if (t.is_first_touch ? i = t.first_touch : t.is_hold ? (i = a(t.getReleaseAccuracy(r), t.is_slide), t.first_touch = t.first_touch || "miss", n = y[i] > y[t.first_touch] ? t.first_touch : i) : n = i = a(t.getTapAccuracy(r), t.is_slide), t.is_same_timing ? (t.timing_sec === this.prev_timing_sec ? (p.addSameTimingPerfectCount(i), p.commitSameTimingPerfectCount()) : (p.resetSameTimingPerfectCount(), p.addSameTimingPerfectCount(i)), this.prev_timing_sec = t.timing_sec) : p.resetSameTimingPerfectCount(), t.isBomb() && p.addStarAccuracyCount(i), !t.is_first_touch) {
						var s = p.calculateScore(t, d.characters[t.pos], i);
						if (s = g.SkillEffect.ScoreBonus.apply(s), s = Math.ceil(s * this.bonus_score_rate), p.addScore(s, t.color), i) {
							this.showAccuracy(i), n && g.AccuracyLog.update(n, t);
							var o = t.score(i);
							o.combo && (o.combo > 0 ? p.addCombo() : p.resetCombo());
							var u = o.damage || 0;
							o.bomb && (u += this.unleashBombs(t)), o.accuracy && (this.accuracy = o.accuracy), u > 0 && (p.damage(u), p.commitChangeHp())
						}
						return v.go(0), n
					}
				},
				raiseDelayedSkill: function(t) {
					v.go(t)
				},
				tap: function(t) {
					this.touch_map && (this.touch_map[t] = this.TOUCH_STATE.TAPPED)
				},
				drag: function(t) {
					this.touch_map && (this.touch_map[t] = this.TOUCH_STATE.DRAGGING)
				},
				hold: function(t) {
					this.touch_map && (this.touch_map[t] = this.TOUCH_STATE.HOLDING)
				},
				isolate: function(t) {
					this.touch_map && (this.touch_map[t] = this.TOUCH_STATE.RELEASED)
				},
				clear: function(t) {
					this.touch_map && (this.touch_map[t] = this.TOUCH_STATE.CLEARED)
				},
				clearTouchMap: function() {
					this.touch_map = {};
					for (var t = 1; t <= h.CHARACTER_COUNT; t++) this.clear(t)
				},
				clearTouchMapJustReleasedOnly: function() {
					for (var t = 1; t <= h.CHARACTER_COUNT; t++) this.touch_map[t] == this.TOUCH_STATE.RELEASE && this.clear(t)
				},
				updateNote: function(t, e, i) {
					var n = this.notes[t][e],
						r = 0 == e,
						a = this.touch_map[t];
					r || (a = this.TOUCH_STATE.CLEARED);
					var s = n.update(this.current_time, a);
					s.first_touch ? (this.processHoldNote(s, n, i), this.hold(t)) : (n.is_first_touch = !1, s.tapped ? this.processTappedNote(n, i) : s.miss && this.processMissedNote(n, e)), p.commitChangeHp()
				},
				processHoldNote: function(t, e, i) {
					var n = b.presumeTappedTime(),
						r = e.getTapAccuracy(this.presumeTappedTime());
					e.is_slide && (r = this.upgradeAccuracy(r, 1)), r = g.SkillEffect.EnhanceAccuracy.apply(r), this.showAccuracy(r, e, n);
					var a = e.score(r);
					a.combo && a.combo < 0 && p.resetCombo();
					var s = a.damage;
					s && s > 0 && s > 0 && p.damage(s), e.is_first_touch = !0, e.first_touch = r, this.addScore(e, i), b.updateNoteLog(e, {
						status: t.miss ? l.RESULT.miss : l.RESULT.not_processed,
						note_index: 1,
						first_touch: r
					})
				},
				processTappedNote: function(t, e) {
					var i = t.pos,
						n = this.addScore(t, e);
					t.playTap(), t.cleanupOnTap(), this.notes[i].shift(), this.clear(i), t.isEvent() && p.addEventPoint(1), b.updateNoteLog(t, {
						status: l.RESULT.tapped,
						note_index: 1,
						first_touch: t.first_touch,
						accuracy: m.get(n)
					})
				},
				processMissedNote: function(t, e) {
					var i = t.pos;
					this.clear(i), this.notes[i].shift(), p.resetCombo(), g.AccuracyLog.update("miss"), this.showAccuracy("miss", t, 0);
					var n = 2;
					t.isBomb() && (n += this.unleashBombs(t)), p.resetSameTimingPerfectCount(), n > 0 && p.damage(n), b.updateNoteLog(t, {
						status: l.RESULT.miss,
						note_index: e,
						first_touch: t.first_touch,
						accuracy: m.miss
					}), t.kill()
				},
				checkNextNote: function() {
					var t = this.notes_list[this.current_note];
					t ? t.appear_time <= this.current_time && (this.newNote(t, this.same_map[this.current_note]), this.current_note = this.current_note + 1) : (v.noMoreSkills(), p.commitSameTimingPerfectCount())
				},
				destroyCurrentNotes: function() {
					for (var t in this.notes) {
						for (var e in this.notes[t]) this.notes[t][e] && (b.updateNoteLog(this.notes[t][e], {
							status: l.RESULT.recovered,
							note_index: e,
							accuracy: m.ignored
						}), this.notes[t][e].kill(), this.notes[t][e] = null);
						this.notes[t] = []
					}
				},
				getCurrentNotes: function() {
					return this.current_note
				},
				resetAllNote: function() {
					var t = function() {
							for (var t in b.notes) for (var e in b.notes[t]) b.notes[t][e] && (b.notes[t][e].kill(), b.notes[t].pop())
						};
					t(), function() {
						b.current_note = 0;
						var t = !0,
							e = !1,
							i = void 0;
						try {
							for (var n, r = b.notes_list[Symbol.iterator](); !(t = (n = r.next()).done); t = !0) {
								if (n.value.appear_time > b.current_time) return;
								b.checkNextNote()
							}
						} catch (a) {
							e = !0, i = a
						} finally {
							try {
								t || null == r.
								return ||r.
								return ()
							} finally {
								if (e) throw i
							}
						}
					}(), t(), b.initializeNotes()
				},
				update: function(t, e) {
					if (void 0 === e) return !1;
					this.current_time = e / 1e3;
					var i = this.notes_list[this.notes_list.length - 1],
						n = i.timing_sec + this.notes_speed * (1 + h.ACCURACY.miss / h.R);
					if (i.effect != l.EFFECTS.note_hold && i.effect != l.EFFECTS.note_slide_hold || (n += i.effect_value), this.current_time >= Math.max(_.lengthLive(), n)) return !1;
					for (var r in this.notes) for (var a in this.notes[r]) {
						var s = this.notes[r][a];
						s && s.node && this.updateNote(r, parseInt(a), t)
					}
					return this.checkNextNote(), this.last_time = this.current_time, !0
				},
				initBonusScoreRate: function(t) {
					this.bonus_score_rate = t || 1
				},
				setBonusScoreRate: function(t) {
					this.bonus_score_rate *= t
				},
				getCurrentNotesNum: function() {
					return this.notes_list.length
				},
				keepHoldEffect: function() {
					if (this.notes instanceof Array) for (var t in this.notes) {
						var e = !0,
							i = !1,
							n = void 0;
						try {
							for (var r, a = this.notes[t][Symbol.iterator](); !(e = (r = a.next()).done); e = !0) {
								var s = r.value;
								s && s.node && s._updateTrailProperties()
							}
						} catch (o) {
							i = !0, n = o
						} finally {
							try {
								e || null == a.
								return ||a.
								return ()
							} finally {
								if (i) throw n
							}
						}
					}
				},
				updateLogIndex: function(t) {
					this.note_log[t] = [], this.resetNoteLogDifference()
				},
				resetNoteLogDifference: function() {
					this.note_log_difference = []
				},
				setMedleyIndex: function(t) {
					this.medley_index = t, this.updateLogIndex(t)
				},
				updateNoteLog: function(t, e) {
					if (t && e) {
						var i = this.note_log[this.medley_index][t.number];
						i ? (e.time = i.time, e.release_time = b.presumeTappedTime()) : e.time = b.presumeTappedTime(), e.live_count = this.medley_index, e.note_number = t.number, e.position = t.pos, e.last_time = this.last_time, e.effect = t.effect, e.is_same_timing = t.is_same_timing, this.note_log[this.medley_index][t.number] = e, this.note_log_difference.push(e)
					}
				},
				getNoteLogDifference: function() {
					return this.note_log_difference
				},
				getNoteLog: function() {
					return this.note_log
				}
			};
		e.exports = b
	}, {
		103: 103,
		109: 109,
		12: 12,
		131: 131,
		133: 133,
		135: 135,
		138: 138,
		139: 139,
		141: 141,
		19: 19,
		56: 56,
		58: 58,
		8: 8,
		81: 81,
		84: 84,
		97: 97
	}],
	142: [function(t, e, i) {
		"use strict";
		var n, r = t(12)(t(8)),
			a = t(109),
			s = t(54),
			o = {
				is_disabled: !1
			};

		function u(t) {
			return !o.is_disabled && (t = Math.max(t, t * o.bonus_activation_rate), t = Math.min(o.max_activation_rate, t), 100 * Math.random() < t)
		}
		function l(t) {
			return function(e, i) {
				var n = !1,
					r = i.getAccuracyCount(t);
				return r < this.prev_total_count ? this.delta_count = 0 : this.delta_count = r - this.prev_total_count + this.delta_count, this.prev_total_count = r, this.delta_count >= this.trigger_value && (n = u(this.getActivationRate()), this.delta_count = this.delta_count % this.trigger_value), n
			}
		}
		o.initialize = function(t) {
			o.is_disabled = t || !1
		}, o.judgeActivation = u;
		var c = (n = {}, (0, r.
	default)(n, s.SKILL_TRIGGER_TYPE.time, {
			trigger: function() {
				return function(t, e, i) {
					if (i) return !1;
					if (t <= 0) return !1;
					var n = !1;
					return this.delta_count = this.delta_count + t, this.delta_count >= 1e3 * this.trigger_value && (n = u(this.getActivationRate()), this.delta_count = 0), n
				}
			},
			clear: function() {
				return function() {
					this.delta_count = 0
				}
			}
		}), (0, r.
	default)(n, s.SKILL_TRIGGER_TYPE.life_reduced, {
			trigger: function() {
				return function(t, e) {
					var i = !1,
						n = e.getTotalDamage();
					return this.delta_count = n - this.prev_total_count + this.delta_count, this.prev_total_count = n, this.delta_count >= this.trigger_value && (i = u(this.getActivationRate()), this.delta_count = this.delta_count % this.trigger_value), i
				}
			},
			clear: nothing
		}), (0, r.
	default)(n, s.SKILL_TRIGGER_TYPE.notes_count, {
			trigger: function() {
				var e = t(134);
				return function() {
					var t = !1,
						i = e.getCurrentNotes();
					return this.delta_count = i - this.prev_total_count + this.delta_count, this.prev_total_count = i, this.delta_count >= this.trigger_value && (t = u(this.getActivationRate()), this.delta_count = this.delta_count % this.trigger_value), t
				}
			},
			clear: function() {
				return function() {
					this.prev_total_count = 0
				}
			}
		}), (0, r.
	default)(n, s.SKILL_TRIGGER_TYPE.combo_count, {
			trigger: function() {
				return function(t, e) {
					var i = !1,
						n = e.getCombo();
					return n - this.prev_total_count < 0 ? this.delta_count = 0 : this.delta_count = n - this.prev_total_count + this.delta_count, this.prev_total_count = n, this.delta_count >= this.trigger_value && (i = u(this.getActivationRate()), this.delta_count = this.delta_count % this.trigger_value), i
				}
			},
			clear: nothing
		}), (0, r.
	default)(n, s.SKILL_TRIGGER_TYPE.score, {
			trigger: function() {
				return function(t, e) {
					var i = !1,
						n = e.getTotalScore();
					return this.delta_count = n - this.prev_total_count + this.delta_count, this.prev_total_count = n, this.delta_count >= this.trigger_value && (i = u(this.getActivationRate()), this.delta_count = this.delta_count % this.trigger_value), i
				}
			},
			clear: nothing
		}), (0, r.
	default)(n, s.SKILL_TRIGGER_TYPE.perfect_count, {
			trigger: l.bind(void 0, "perfect"),
			clear: nothing
		}), (0, r.
	default)(n, s.SKILL_TRIGGER_TYPE.great_count, {
			trigger: l.bind(void 0, "great"),
			clear: nothing
		}), (0, r.
	default)(n, s.SKILL_TRIGGER_TYPE.good_count, {
			trigger: l.bind(void 0, "good"),
			clear: nothing
		}), (0, r.
	default)(n, s.SKILL_TRIGGER_TYPE.bad_count, {
			trigger: l.bind(void 0, "bad"),
			clear: nothing
		}), (0, r.
	default)(n, s.SKILL_TRIGGER_TYPE.miss_count, {
			trigger: l.bind(void 0, "miss"),
			clear: nothing
		}), (0, r.
	default)(n, s.SKILL_TRIGGER_TYPE.heal_count, {
			trigger: function() {
				return function(t, e) {
					var i = !1,
						n = e.getHealCount();
					return n < this.prev_total_count ? this.delta_count = 0 : this.delta_count = n - this.prev_total_count + this.delta_count, this.prev_total_count = n, this.delta_count >= this.trigger_value && (i = u(this.getActivationRate()), this.delta_count = this.delta_count % this.trigger_value), i
				}
			},
			clear: nothing
		}), (0, r.
	default)(n, s.SKILL_TRIGGER_TYPE.star_perfect, {
			trigger: function() {
				return function(t, e) {
					var i = !1,
						n = e.getStarPerfectCount();
					return n < this.prev_total_count ? this.delta_count = 0 : this.delta_count = n - this.prev_total_count + this.delta_count, this.prev_total_count = n, this.delta_count >= this.trigger_value && (i = u(this.getActivationRate()), this.delta_count = this.delta_count % this.trigger_value), i
				}
			},
			clear: nothing
		}), (0, r.
	default)(n, s.SKILL_TRIGGER_TYPE.star_success, {
			trigger: function() {
				return function(t, e) {
					var i = !1,
						n = e.getStarSuccessCount();
					return n < this.prev_total_count ? this.delta_count = 0 : this.delta_count = n - this.prev_total_count + this.delta_count, this.prev_total_count = n, this.delta_count >= this.trigger_value && (i = u(this.getActivationRate()), this.delta_count = this.delta_count % this.trigger_value), i
				}
			},
			clear: nothing
		}), (0, r.
	default)(n, s.SKILL_TRIGGER_TYPE.same_timing_perfect, {
			trigger: function() {
				return function(t, e) {
					var i = !1,
						n = e.getSameTimingPerfectCount();
					return n < this.prev_total_count ? this.delta_count = 0 : this.delta_count = n - this.prev_total_count + this.delta_count, this.prev_total_count = n, this.delta_count >= this.trigger_value && (i = u(this.getActivationRate()), this.delta_count = this.delta_count % this.trigger_value), i
				}
			},
			clear: nothing
		}), (0, r.
	default)(n, s.SKILL_TRIGGER_TYPE.heal_value, {
			trigger: function() {
				return function(t, e) {
					var i = !1,
						n = e.getHealValue();
					return n < this.prev_total_count ? this.delta_count = 0 : this.delta_count = n - this.prev_total_count + this.delta_count, this.prev_total_count = n, this.delta_count >= this.trigger_value && (i = u(this.getActivationRate()), this.delta_count = this.delta_count % this.trigger_value), i
				}
			},
			clear: nothing
		}), n);
		o.new = function(t, e, i) {
			var n = t.trigger_type,
				r = t.trigger_value,
				u = t.activation_rate;
			this.bonus_activation_rate = 1, this.max_activation_rate = 100;
			var l = {};
			if (n == s.SKILL_TRIGGER_TYPE.chain) {
				var f = a.Trigger.OtherMember.create(t, e);
				c[n] = {
					trigger: f.dispatch
				}
			}
			var h = nothing,
				_ = nothing,
				d = c[n];
			return d && (h = d.trigger || nothing, _ = d.clear || nothing), l.trigger = h(), l.trigger_type = n, l.trigger_value = r, l.activation_rate = u, l.delta_count = 0, l.prev_total_count = 0, l.clear = _(), l.activation_modifier = 1, l.update = function(t, e) {
				if (this.trigger) return this.trigger(t, i, e)
			}, l.clearCounter = function() {
				this.clear && this.clear()
			}, l.reset = function(t, e) {
				this.triggerValue = t, this.activationRate = e
			}, l.getRawActivationRate = function() {
				return Math.floor(l.activation_rate * l.activation_modifier * o.bonus_activation_rate)
			}, l.gainActivationRate = function(t) {
				l.activation_modifier = l.activation_modifier * t
			}, l.resetActivationRate = function() {
				l.activation_modifier = 1
			}, l.getActivationRate = function() {
				return l.activation_rate * l.activation_modifier
			}, l
		}, o.initBonusActivationRate = function(t) {
			this.bonus_activation_rate = t || 1
		}, o.setBonusActivationRate = function(t) {
			this.bonus_activation_rate && (this.bonus_activation_rate = this.bonus_activation_rate * t)
		}, o.setMaxActivationRate = function(t) {
			this.max_activation_rate && (this.max_activation_rate = t)
		}, e.exports = o
	}, {
		109: 109,
		12: 12,
		134: 134,
		54: 54,
		8: 8
	}],
	131: [function(t, e, i) {
		"use strict";
		var n = t(139),
			r = t(133),
			a = t(109),
			s = {};
		s.NOTE_X = n.X, s.NOTE_Y = n.Y, s.START_SCALE = 0, s.RADIUS = 64, s.RANDOM = 0, s.RESULT = {
			miss: 0,
			tapped: 1,
			recovered: 2,
			not_processed: 9
		}, s.EFFECTS = a.NoteEffect, s.ATTRIBUTES = {
			random: 0,
			smile: 1,
			cute: 2,
			cool: 3
		}, s.HOLD_TRAIL_COLOR = {
			1: "#FFA0A0",
			2: "#A0FFA0",
			3: "#A0A0FF"
		}, s.VANISH = {
			hidden: 1,
			sudden: 2
		}, s.VANISH_ADJUST = {
			hidden_start: .66,
			hidden_range: .2,
			sudden_start: .4,
			sudden_range: .2
		};
		var o = function() {
				return config.is_auto
			};
		s.create = function(t, e, i, a, u, l, c) {
			var f = t.timing_sec,
				h = t.notes_attribute || s.ATTRIBUTES.random,
				_ = null;
			h === s.ATTRIBUTES.random ? (_ = Math.floor(3 * Math.random()) + 1, h = attribute_num[_]) : _ = [null, "smile", "cute", "cool"][h];
			var d = t.effect || 1,
				p = t.effect_value || 0,
				v = t.position || s.RANDOM;
			t.mirror && (v = 10 - v);
			var g = {};
			g.x = s.NOTE_X, g.y = s.NOTE_Y, g.number = a, g.timing_sec = t.timing_sec, g.pos = v, g.theta = function(t) {
				return (t - 1) * n.CHARACTER_ANGLE % 360
			}(v), g.r = 0, g.color = _, g.attribute = h, g.scale = s.START_SCALE, g.time = f - .1, g.effect = d, g.effect_value = p, g.is_hold = t.is_hold, g.is_slide = t.is_slide, g.group = g.is_slide ? t.notes_level : null, g.vanish = t.vanish, g.is_same_timing = !! t.is_same_timing, g.is_bomb = g.effect === s.EFFECTS.note_bomb_1 || g.effect === s.EFFECTS.note_bomb_3 || g.effect === s.EFFECTS.note_bomb_5 || g.effect === s.EFFECTS.note_bomb_9, g.speed = e * (t.speed || 1), g.inv_v = g.speed / n.R;
			var m = n.R / Math.max(g.speed, n.ACCURACY_LIMIT_SPEED);
			return g.accuracy_tbl = [null, n.ACCURACY.perfect / m, n.ACCURACY.great / m, n.ACCURACY.good / m, n.ACCURACY.bad / m, n.ACCURACY.miss / m], g.node = null, g.hold_trail = null, g.hold_effect = null, g.hold_circle = null, g.hold_out = !1, g.trail_color = "#FFFFA0", g.tapDistance = function(t) {
				return (1 - (this.time - t) / this.speed) * n.R
			}, g.releaseDistance = function(t) {
				return (1 - (this.time + this.effect_value - t) / this.speed) * n.R
			}, g.update = function(t, e) {
				return this.is_hold ? this._updateHold(t, e) : this._updateNormal(t, e)
			}, g._updateNormal = function(t, e) {
				var i = {},
					r = this.tapDistance(t),
					a = s.START_SCALE + (1 - s.START_SCALE) / n.R * r;
				return o() && r >= n.R && (e = 1), r >= n.R + n.ACCURACY.miss ? i.miss = !0 : r > n.R - n.ACCURACY.miss && r < n.R + n.ACCURACY.miss && (1 === e || g.is_slide && 0 === e) && (i.tapped = !0), this._updateProperties(r, a, t), i.bomb = this.isBomb(), i.event = this.isEvent(), i
			}, g._updateHoldAfterTap = function(t, e, i, r, a) {
				var s = {};
				return o() ? (e >= n.R ? s.tapped = !0 : s.tapped = !1, s) : (e < n.R - n.ACCURACY.miss ? -2 == a && (s.miss = !0) : e >= n.R - n.ACCURACY.miss && e <= n.R + n.ACCURACY.miss ? -2 == a && (s.tapped = !0) : e > n.R + n.ACCURACY.miss && (s.miss = !0), s)
			}, g._updateHoldBeforeTap = function(t, e, i, r, a) {
				var s = {};
				return o() && t >= n.R ? (s.first_touch = !0, this.hold_trail && (this.hold_trail_off = this.hold_trail_off.kill(), this.hold_trail = this.hold_trail_on, this.hold_trail.setVisible(!0), this.hold_trail.animPlay()), this.hold_effect && (this.hold_effect.play(), this.hold_effect.gotoFrame("effect_start"), this.hold_effect.setVisible(!0), this.hold_effect_enable = !0), s) : (t >= n.R - n.ACCURACY.miss && t <= n.R + n.ACCURACY.miss ? (1 === a || g.is_slide && 0 === a) && (this.hold_trail && (this.hold_trail_off = this.hold_trail_off.kill(), this.hold_trail = this.hold_trail_on, this.hold_trail.setVisible(!0), this.hold_trail.animPlay()), this.hold_effect && (this.hold_effect.play(), this.hold_effect.gotoFrame("effect_start"), this.hold_effect.setVisible(!0), this.hold_effect_enable = !0), s.first_touch = !0) : t > n.R + n.ACCURACY.miss && (s.miss = !0), s)
			}, g._updateHold = function(t, e) {
				var i, r, a = this.tapDistance(t),
					o = this.releaseDistance(t),
					u = s.START_SCALE + (1 - s.START_SCALE) / n.R * a;
				return i = o < 0 ? 0 : s.START_SCALE + (1 - s.START_SCALE) / n.R * o, u > 1 && (u = 1), u < 0 && (u = 0), r = this.first_touch ? this._updateHoldAfterTap(a, o, u, i, e) : this._updateHoldBeforeTap(a, o, u, i, e), a >= n.R && (a = n.R), a < 0 && (a = 0), this._updateProperties(a, u, t), o > 0 && (this.hold_out || (this.hold_out = !0), this._updateHoldProperties(o, i)), o >= n.R && (o = n.R), o < 0 && (o = 0), i > 1 && (i = 1), i < 0 && (i = 0), this._updateTrailProperties(), r
			}, g.kill = function() {
				this.node && (this.node = this.node.kill()), this.cleanupOnTap()
			}, g.cleanupOnTap = function() {
				this.hold_effect && (this.hold_effect = this.hold_effect.kill()), this.hold_trail_off && (this.hold_trail_off = this.hold_trail_off.kill()), this.hold_trail_on && (this.hold_trail_on = this.hold_trail_on.kill()), this.hold_trail = null, this.hold_circle && (this.hold_circle = this.hold_circle.kill())
			}, g.isBomb = function() {
				return this.is_bomb
			}, g.isHold = function() {
				return this.is_hold
			}, g.isEvent = function() {
				return this.effect === s.EFFECTS.note_event || d === s.EFFECTS.note_slide_event
			}, g.getAccuracy = function(t) {
				var e = null,
					i = t * this.inv_v;
				return i < this.accuracy_tbl[1] ? e = "perfect" : i < this.accuracy_tbl[2] ? e = "great" : i < this.accuracy_tbl[3] ? e = "good" : i < this.accuracy_tbl[4] ? e = "bad" : i < this.accuracy_tbl[5] && (e = "bad"), o() && (e = "perfect"), e
			}, g.getTapAccuracy = function(t) {
				var e = this.tapDistance(t);
				return this.getAccuracy(Math.abs(e - n.R)) || "bad"
			}, g.getReleaseAccuracy = function(t) {
				var e = this.releaseDistance(t);
				return this.getAccuracy(Math.abs(e - n.R)) || "miss"
			}, g.calculateDamage = function(t) {
				return {
					bad: 1,
					miss: 2
				}[t] || 0
			}, g.isComboContinued = function(t) {
				return "perfect" == t || "great" == t
			}, g.score = function(t) {
				var e = {};
				return e.accuracy = t, this.effect === s.EFFECTS.note_normal || (this.isBomb() ? "perfect" !== t && "great" !== t && (e.bomb = !0, e.accuracy = null) : this.is_hold || (e.accuracy = null)), this.isBomb() || (e.damage = {
					bad: 1,
					miss: 2
				}[t]), e.combo = "perfect" === t || "great" === t ? 1 : -1, e
			}, g.addNode = function() {
				if (this.node = r.getNote(this.attribute, this.is_same_timing, this.is_slide, this.effect % 10, c), this.is_hold) {
					this.hold_trail_off = r.getHoldTrailOff(), this.hold_trail_on = r.getHoldTrailOn(), this.hold_trail = this.hold_trail_off, this.hold_trail_on.setVisible(!1), this.hold_circle = r.getHoldCircle(), this.trail_color = "#FFFFA0", this.hold_trail_on.setColor(255, this.trail_color);
					var t = this.hold_circle.getProperty();
					t.x = n.X, t.y = n.Y, t.scaleX = 0, t.scaleY = 0, this.hold_circle.setProperty(t), this.hold_effect = r.getHoldEffect()
				}
				this.node.adjust(this.pos, this.next_pos), this.node_prop = this.node.getAdjustedProperty()
			}, g._calcAlpha = function() {
				return 255
			}, g.vanish === s.VANISH.hidden ? g._calcAlpha = function(t) {
				return Math.floor(255 * Math.range(0, (s.VANISH_ADJUST.hidden_start - t) / s.VANISH_ADJUST.hidden_range, 1))
			} : g.vanish === s.VANISH.sudden && (g._calcAlpha = function(t) {
				return Math.floor(255 * Math.range(0, (t - s.VANISH_ADJUST.sudden_start) / s.VANISH_ADJUST.sudden_range, 1))
			}), g._updateTrailProperties = function() {
				if (this.hold_trail) {
					var t = this.hold_circle.getProperty(),
						e = this.node_prop,
						i = t.x - n.X,
						r = t.y - n.Y,
						a = e.x - n.X,
						o = e.y - n.Y,
						u = Math.bipolar(e.x, e.y, t.x, t.y)[0],
						l = Math.deg2rad((u + 450) % 360) - Math.PI,
						c = t.scaleX,
						f = Math.abs(e.scaleX);
					if (c >= 1) return void this.hold_trail.setVisible(!1);
					var h = Math.max(1, s.RADIUS * c),
						_ = Math.max(1, s.RADIUS * f);
					if (this.hold_effect_enable) {
						var d = this.hold_effect.getProperty();
						d.x = this.x, d.y = this.y, d.rot = (u + 180) % 360, this.hold_effect.setProperty(d), this.hold_effect.setVisible(!0), this.hold_effect.play()
					}
					var p, v, g, m, y = Math.polar(l, h, 0, 0);
					if (g = (p = y[0]) * _ / h, m = (v = y[1]) * _ / h, this.hold_trail.setVertices([a + g, o + m, i + p, r + v, i - p, r - v, a - g, o - m]), this.vanish === s.VANISH.hidden || this.vanish === s.VANISH.sudden) {
						var b = this._calcAlpha(c),
							k = this._calcAlpha(f);
						this.hold_trail_off ? this.hold_trail.setColors([k, 16777215, b, 16777215, b, 16777215, k, 16777215]) : this.hold_trail.setColors([k, this.trail_color, b, this.trail_color, b, this.trail_color, k, this.trail_color])
					}
					this.hold_trail_off || this.hold_trail.isAnim() || this.hold_trail.animPlay()
				}
			}, g._updateHoldProperties = function(t, e) {
				if (this.hold_circle) {
					var i = Math.polar(Math.deg2rad(this.theta), t, s.NOTE_X, s.NOTE_Y),
						n = i[0],
						r = i[1],
						a = this.hold_circle.getProperty();
					a.x = n, a.y = r, a.scaleX = e, a.scaleY = e, a.visible = !0, a.alpha = this._calcAlpha(e), this.hold_circle.setProperty(a)
				}
			}, g._updateProperties = function(t, e, i) {
				var n = !1;
				if (this.r === t && this.scale === e || (this.r = t, this.scale = e, this.scale > 1 && (this.scale = 1), n = !0), void 0 !== this.first_theta && this.is_hold && (n = !0), n) {
					var r = this.theta;
					void 0 !== this.first_theta && (this.is_hold ? this.scale < 1 ? r = this.first_theta : (r = this.move_speed_factor * (this.theta - this.first_theta) * ((i - this.time) / this.effect_value) + this.first_theta, (this.theta - this.first_theta) * (r - this.theta) >= 0 && (r = this.theta)) : r = (this.theta - this.first_theta) * (e * e + 2 * e * (1 - e) * .775) + this.first_theta);
					var a = Math.polar(Math.deg2rad(r), this.r, s.NOTE_X, s.NOTE_Y);
					if (this.x = a[0], this.y = a[1], this.node) {
						var o = this.node_prop;
						o.visible = !0, o.x = this.x, o.y = this.y, o.scaleX = this.scale * (this.node.flips(this.pos, this.next_pos) ? -1 : 1), o.scaleY = this.scale, o.alpha = this._calcAlpha(e), this.node.setProperty(o)
					}
					for (var u in this.node.icons) this.node.icons[u].setVisible(!0)
				}
			}, g.playTap = function() {
				this.node.kill();
				var t = r.getPop();
				this.vanish == s.VANISH.hidden && (this.node_prop.alpha = 255, this.node_prop.visible = !0), t.setProperty(this.node_prop), t.play(), t.gotoFrame("tap"), t.reachFrame("end", function() {
					t.kill()
				})
			}, g
		}, e.exports = s
	}, {
		109: 109,
		133: 133,
		139: 139
	}],
	133: [function(t, e, i) {
		"use strict";
		var n = t(90),
			r = t(97),
			a = t(139),
			s = t(132),
			o = function(t) {
				return t instanceof Array ? t.length : Object.keys(t).length
			},
			u = {
				4: "assets/flash/ui/live/img/ef_315_effect_0004.png",
				5: "assets/flash/ui/live/img/ef_315_effect_0005.png",
				6: "assets/flash/ui/live/img/ef_315_effect_0006.png",
				7: "assets/flash/ui/live/img/ef_315_effect_0007.png"
			},
			l = {
				_note_cache_circle: [],
				_note_cache_trail_on: [],
				_note_cache_trail_off: [],
				_note_cache_hold_effect: [],
				_note_cache_note: {},
				_note_cache_pop: [],
				release: function() {
					this._note_cache_circle = [], this._note_cache_trail_on = [], this._note_cache_trail_off = [], this._note_cache_hold_effect = [], this._note_cache_note = {}, this._note_cache_pop = [], this._task_form = null
				},
				init: function(t) {
					this.release(), this._task_form = t
				},
				_genericGet: function(t, e, i) {
					if (i = i || "", 0 === o(t)) {
						var n = e.create();
						t.push(n), n.kill = function() {
							e.kill(n), t.push(n)
						}
					}
					var r = t.shift();
					return e.reinit(r), r
				},
				getNote: function(t, e, i, n, r) {
					var o = 65536 * (e ? 1 : 0) + 32768 * (i ? 1 : 0) + 16384 + 256 * t + n;
					this._note_cache_note[o] = this._note_cache_note[o] || [];
					var l = this;
					return this._genericGet(this._note_cache_note[o], {
						create: function() {
							var o = a.NOTE_PRIORITY,
								c = s.createNode(l._task_form, o + 2, t, i, e, r);
							return 2 === n && c.addIcon("assets/flash/ui/live/img/e_icon_01.png"), n >= 4 && c.addIcon(u[n]), c
						},
						kill: function(t) {
							t.setVisible(!1)
						},
						reinit: function(t) {
							t.setVisible(!1)
						}
					}, "note:" + o)
				},
				getPop: function() {
					var t = this;
					return this._genericGet(this._note_cache_pop, {
						create: function() {
							var e = new r(t._task_form, a.NOTE_PRIORITY, 0, 0, "assets/flash/ui/live/live_notes.flsh");
							return e.stop(), e
						},
						kill: function(t) {
							t.setVisible(!1), t.stop()
						},
						reinit: function(t) {
							t.setVisible(!0)
						}
					}, "pop")
				},
				getHoldCircle: function() {
					var t = this;
					return this._genericGet(this._note_cache_circle, {
						create: function() {
							return new r(t._task_form, a.NOTE_PRIORITY + 5, 0, 0, "assets/flash/ui/live/live_notes_hold_circle.flsh", "ef_326_circle")
						},
						kill: function(t) {
							t.setVisible(!1), t.stop()
						},
						reinit: function(t) {
							t.gotoFrame("hold_circle"), t.setVisible(!0), t.setColor(255, 16777215)
						}
					}, "circle")
				},
				getHoldEffect: function() {
					var t = this;
					return -1 == config.cutin_setting ? this._genericGet(this._note_cache_hold_effect, {
						create: function() {
							return {
								kill: nothing,
								play: nothing,
								gotoFrame: nothing,
								stop: nothing
							}
						},
						kill: nothing,
						reinit: nothing
					}, "hold_effect") : this._genericGet(this._note_cache_hold_effect, {
						create: function() {
							return new r(t._task_form, a.NOTE_PRIORITY + 10, 0, 0, "assets/flash/ui/live/live_notes_hold_effect.flsh", "ef_326_effect")
						},
						kill: function(t) {
							t.setVisible(!1), t.stop()
						},
						reinit: function(t) {
							t.setVisible(!1), t.gotoFrame("effect_start"), t.stop(), t.setColor(255, 16777215)
						}
					}, "hold_effect")
				},
				getHoldTrailOn: function() {
					var t = this,
						e = [{
							target: "SPL_MODIFY_A",
							keys: [
								[0, 0],
								[200, 1],
								[400, 1],
								[600, 0]
							]
						}];
					return this._genericGet(this._note_cache_trail_on, {
						create: function() {
							return new n(t._task_form, a.NOTE_PRIORITY - 1, a.X, a.Y, "assets/image/ui/live/ef_326_000.png", [0, 0, 0, 0, 0, 0, 0, 0])
						},
						kill: function(t) {
							t.setVisible(!1), t.setVertices([0, 0, 0, 0, 0, 0, 0, 0])
						},
						reinit: function(t) {
							t.setVisible(!1), t.setAnimSpline(e)
						}
					}, "trail_on")
				},
				getHoldTrailOff: function() {
					var t = this;
					return this._genericGet(this._note_cache_trail_off, {
						create: function() {
							return new n(t._task_form, a.NOTE_PRIORITY - 1, a.X, a.Y, "assets/image/ui/live/ef_326_000.png", [0, 0, 0, 0, 0, 0, 0, 0])
						},
						kill: function(t) {
							t.setVisible(!1), t.setVertices([0, 0, 0, 0, 0, 0, 0, 0])
						},
						reinit: function(t) {
							t.setVisible(!0), t.setColor(255, 16777215)
						}
					}, "trail_off")
				},
				countPopEffects: function() {
					return o(this._note_cache_pop)
				}
			};
		e.exports = l
	}, {
		132: 132,
		139: 139,
		90: 90,
		97: 97
	}],
	132: [function(t, e, i) {
		"use strict";
		var n, r = t(12),
			a = r(t(19)),
			s = r(t(8)),
			o = t(67).getInstance(),
			u = t(96),
			l = t(91),
			c = {};

		function f(t, e, i) {
			var n = o.getAssetInfo(i),
				r = (0, a.
			default)(n, 2),
				s = r[0],
				l = r[1],
				c = new u(t, e, -s, -l, i);
			return c.offset_w = Math.floor(s / 2), c.offset_h = Math.floor(l / 2), c
		}
		function h(t, e, i, n) {
			var r = o.getAssetInfo(n),
				s = (0, a.
			default)(r, 2),
				c = s[0],
				f = s[1],
				h = new l(t, e, t.offset_w, t.offset_h),
				_ = Math.floor(c / 2),
				d = Math.floor(f / 2);
			return new u(h, e + i, -_, -d, n), h
		}
		n = {}, (0, s.
	default)(n, 1, "assets/flash/ui/live/img/ef_315_notes_0111.png"), (0, s.
	default)(n, 2, "assets/flash/ui/live/img/ef_315_notes_0112.png"), (0, s.
	default)(n, 3, "assets/flash/ui/live/img/ef_315_notes_0113.png"), c.createNode = function(t, e, i, n, r, a) {
			var s = null;
			return (s = 1 == a.normal_id ?
			function(t, e, i, n, r, a) {
				var s = new l(t, e, -1e3, -1e3);
				return s.adjust = function(t, e) {
					if (null != t && null != e && s.arrow) {
						var i = s.arrow.getProperty();
						i.rot = function(t, e) {
							return 90 + (t < e ? 20 * (e - 1) : -20 * (9 - e))
						}(t, e), s.arrow.setProperty(i)
					}
				}, s.flips = function(t, e) {
					return !1
				}, function() {
					var t = a.getNormalPathByAttribute(i);
					s.base = f(s, e, t);
					var r = a.getSlidePathByAttribute(i);
					n && (s.arrow = h(s.base, e, 1, r))
				}(), s
			}(t, e, i, n, 0, a) : function(t, e, i, n, r, a) {
				var s = new l(t, e, -1e3, -1e3);
				return s.adjust = function(t, e) {
					if (null != t) {
						s.adjusted_property = s.getProperty(), s.adjusted_property.scaleX = 1, s.adjusted_property.scaleY = 1, s.adjusted_property.rot = e ?
						function(t, e) {
							return 90 + -20 * ((t < e ? 10 : 9) - e)
						}(t, e) : function(t) {
							return 22.5 * (t - 1) - 90
						}(t);
						var i = e && t < e ? s.adjusted_property.rot : -s.adjusted_property.rot,
							n = !0,
							r = !1,
							a = void 0;
						try {
							for (var o, u = s.icons[Symbol.iterator](); !(n = (o = u.next()).done); n = !0) o.value.setRotation(i)
						} catch (l) {
							r = !0, a = l
						} finally {
							try {
								n || null == u.
								return ||u.
								return ()
							} finally {
								if (r) throw a
							}
						}
					}
				}, s.flips = function(t, e) {
					return !!e && t < e
				}, function() {
					if (n && 2 == a.normal_id) {
						var t = a.getSlidePathByAttribute(i);
						s.base = f(s, e, t)
					} else {
						var r = a.getNormalPathByAttribute(i);
						s.base = f(s, e, r);
						var o = a.getSlidePathByAttribute(i);
						n && (s.arrow = h(s.base, e, 1, o))
					}
				}(), s
			}(t, e, i, n, 0, a)).addIcon = function(t) {
				var i = h(s.base, e, s.icons.length + 1, t);
				s.icons.push(i)
			}, s.getAdjustedProperty = function() {
				return s.adjusted_property
			}, s.adjusted_property = s.getProperty(), s.icons = [], r && s.addIcon(a.getSamePathByAttribute(i)), s.base.setScale(2, 2), s
		}, e.exports = c
	}, {
		12: 12,
		19: 19,
		67: 67,
		8: 8,
		91: 91,
		96: 96
	}],
	141: [function(t, e, i) {
		"use strict";
		var n = t(103),
			r = t(109),
			a = {
				init: function(t) {
					this.no_more_skills = !1, this.activate_heal_skill = !1, this.damage_guard_count = 0, this.bad_to_perfect_count = 0, r.CutinController.initialize(), r.SkillEffect.SyncStatus.initialize(), r.SkillEffect.ScoreBonus.initialize(), r.SkillBoostQueue.initialize(), r.SkillStack.initialize(), r.SkillIndicator.initialize(), r.Trigger.OtherMember.initialize()
				},
				enable: function() {
					this.no_more_skills = !1
				},
				noMoreSkills: function() {
					this.no_more_skills = !0
				},
				go: function(t) {
					return r.SkillController.start(t, this.no_more_skills)
				},
				activateSkill: function(t) {
					var e = n.characters[t];
					e.skill && e.activateSkill(!0)
				},
				release: function() {},
				setBadToPerfectCount: function(t) {
					this.bad_to_perfect_count = this.bad_to_perfect_count + t
				},
				useGuestBonusForAccuracy: function() {
					return !1
				},
				updatePerfectSupportView: function() {},
				skillUpdatePerfectSupportView: function(t) {}
			};
		e.exports = a
	}, {
		103: 103,
		109: 109
	}],
	135: [function(t, e, i) {
		"use strict";
		var n = t(131),
			r = t(133),
			a = t(139),
			s = function(t, e, i, s, o, u) {
				var l = {},
					c = t.timing_sec,
					f = t.effect || 1;
				return l.velocity = a.R / ((t.speed || 1) * e), l.last_time = c + a.ACCURACY.miss / l.velocity, l.pop_start = c - a.ACCURACY.good / l.velocity, l.pop_end = c + a.ACCURACY.good / l.velocity + .8, l.is_slide = f >= n.EFFECTS.note_slide && f <= n.EFFECTS.note_slide_hold, l.node = r.getNote(t.notes_attribute, o, l.is_slide, f % 10, u), f !== n.EFFECTS.note_hold && f !== n.EFFECTS.note_slide_hold || (l.hold_trail_off = r.getHoldTrailOff(), l.hold_trail_on = r.getHoldTrailOn(), l.hold_circle = r.getHoldCircle(), l.hold_effect = r.getHoldEffect(), l.last_time = l.last_time + t.effect_value, l.pop_start = l.pop_start + t.effect_value, l.pop_end = l.pop_end + t.effect_value), l.simulateExecute = function(t) {
					return !this.pop && t >= this.pop_start && t <= this.pop_end && (this.simulateKill(), this.pop = r.getPop()), t < Math.max(this.last_time, this.pop_end)
				}, l.simulateKill = function() {
					this.node && (this.node = this.node.kill()), this.pop && (this.pop = this.pop.kill()), this.hold_trail_on && (this.hold_trail_on = this.hold_trail_on.kill()), this.hold_trail_off && (this.hold_trail_off = this.hold_trail_off.kill()), this.hold_trail = null, this.hold_circle && (this.hold_circle = this.hold_circle.kill()), this.hold_effect && (this.hold_effect = this.hold_effect.kill())
				}, l
			},
			o = {
				go: function(t, e, i, n, r, a, o, u) {
					for (var l = 0, c = 0, f = []; l <= t && e[c];) {
						for (; e[c].appear_time <= l && (f.push(s(e[c], i, 0, 0, a[c], u)), e[c += 1]););
						f.forEach(function(t, e) {
							t.simulateExecute(l) || (t.simulateKill(), f.splice(e, 1))
						}), l += .016
					}
					f.forEach(function(t, e) {
						t.simulateKill()
					})
				}
			};
		e.exports = o
	}, {
		131: 131,
		133: 133,
		139: 139
	}],
	137: [function(t, e, i) {
		"use strict";

		function n(t, e) {
			return Math.floor(Math.random() * (e - t + 1)) + t
		}
		function r(t) {
			var e = {};
			t.forEach(function(t) {
				e[t.timing_sec] ? ++e[t.timing_sec] : e[t.timing_sec] = 1
			}), t.forEach(function(t) {
				e[t.timing_sec] > 1 && (t.is_same_timing = !0)
			})
		}
		e.exports = {
			generateOldRandom: function(t) {
				var e = t.sort(function(t, e) {
					return t.timing_sec - e.timing_sec
				});
				r(e);
				var i = 0;
				e.forEach(function(t) {
					3 == t.effect && (i = Math.max(t.timing_sec + t.effect_value, i)), t.timing_sec <= i + .01 || t.is_same_timing || (t.position = n(1, 9), delete t.is_same_timing)
				})
			},
			generateRandom: function(t) {
				var e = t.sort(function(t, e) {
					if (t.timing_sec == e.timing_sec) {
						var i = 3 == t.effect ? 1 : 0;
						return (3 == e.effect ? 1 : 0) - i
					}
					return t.timing_sec - e.timing_sec
				});
				r(e);
				var i = {},
					a = [];
				e.reduce(function(t, e) {
					var r = a.filter(function(t) {
						return !(t.timing_sec + t.effect_value < e.timing_sec - .01)
					});
					a = a.filter(function(t) {
						return !(t.timing_sec + t.effect_value < e.timing_sec - .2)
					});
					var s = t.position,
						o = !1;
					1 == r.length ? (s = r[0].position, o = !0) : r.length > 1 && (s = 0, o = !0);
					var u = {};
					a.forEach(function(t) {
						return u[t.position] = !0
					});
					do {
						switch (!o && e.timing_sec - t.timing_sec >= .3 && (s = e.is_same_timing || 3 == e.effect ? 5 : 0), s) {
						case 1:
						case 2:
						case 3:
						case 4:
							e.position = n(6, 9);
							break;
						case 6:
						case 7:
						case 8:
						case 9:
							e.position = n(1, 4);
							break;
						case 5:
							e.position = n(1, 8), e.position > 4 && ++e.position;
							break;
						default:
							e.position = n(1, 9)
						}
					} while (i[e.position] || u[e.position]);
					return e.timing_sec != t.timing_sec && (i = {}), e.is_same_timing && (i[e.position] = !0), 3 == e.effect && a.push(e), delete e.is_same_timing, e
				}, {
					timing_sec: 0,
					effect: 1,
					position: 0
				})
			}
		}
	}, {}],
	143: [function(t, e, i) {
		"use strict";
		var n = t(97),
			r = t(139),
			a = {
				init: function(t) {
					var e = {},
						i = 1,
						a = 2,
						s = 3,
						o = {};
					return o[i] = "normal", o[a] = "dying01", o[s] = "dying02", e.flash = null, e.pinch = i, e.flash = new n(t, r.STAR_PRIORITY, r.X, r.Y, "assets/flash/ui/live/live_center.flsh", "ef_308"), e.flash.framerate = 30, e.update = function(t) {
						var e, n = this;
						e = t <= .2 ? s : t <= .4 ? a : i, n.pinch != e && (n.pinch == s && n.flash.gotoFrame(o[s]), n.pinch = e, n.flash.gotoFrame(o[n.pinch]))
					}, e.show = function() {
						e.flash && e.flash.setVisible(!0)
					}, e.hide = function() {
						e.flash && e.flash.setVisible(!1)
					}, e.release = function() {
						e.flash && e.flash.kill()
					}, e
				}
			};
		e.exports = a
	}, {
		139: 139,
		97: 97
	}]
}, {}, [100]);