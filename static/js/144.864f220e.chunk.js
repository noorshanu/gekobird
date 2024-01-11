/*!For license information please see 144.864f220e.chunk.js.LICENSE.txt*/ (self.webpackChunkmy_app =
  self.webpackChunkmy_app || []).push([
  [144],
  {
    44519: (e, t, n) => {
      "use strict";
      t.Xx = t._w = t.aP = t.KS = t.jQ = void 0;
      const r = n(14701),
        i = n(21956),
        s = n(63227);
      function o(e) {
        const t = new Float64Array(16);
        if (e) for (let n = 0; n < e.length; n++) t[n] = e[n];
        return t;
      }
      (t.jQ = 64), (t.KS = 64), (t.aP = 32);
      new Uint8Array(32)[0] = 9;
      const a = o(),
        c = o([1]),
        u = o([
          30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585,
          16505, 36039, 65139, 11119, 27886, 20995,
        ]),
        h = o([
          61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171,
          33010, 6542, 64743, 22239, 55772, 9222,
        ]),
        l = o([
          54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982,
          57905, 49316, 21502, 52590, 14035, 8553,
        ]),
        p = o([
          26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
          26214, 26214, 26214, 26214, 26214, 26214,
        ]),
        d = o([
          41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867,
          153, 11085, 57099, 20417, 9344, 11139,
        ]);
      function f(e, t) {
        for (let n = 0; n < 16; n++) e[n] = 0 | t[n];
      }
      function g(e) {
        let t = 1;
        for (let n = 0; n < 16; n++) {
          let r = e[n] + t + 65535;
          (t = Math.floor(r / 65536)), (e[n] = r - 65536 * t);
        }
        e[0] += t - 1 + 37 * (t - 1);
      }
      function v(e, t, n) {
        const r = ~(n - 1);
        for (let i = 0; i < 16; i++) {
          const n = r & (e[i] ^ t[i]);
          (e[i] ^= n), (t[i] ^= n);
        }
      }
      function y(e, t) {
        const n = o(),
          r = o();
        for (let i = 0; i < 16; i++) r[i] = t[i];
        g(r), g(r), g(r);
        for (let i = 0; i < 2; i++) {
          n[0] = r[0] - 65517;
          for (let t = 1; t < 15; t++)
            (n[t] = r[t] - 65535 - ((n[t - 1] >> 16) & 1)), (n[t - 1] &= 65535);
          n[15] = r[15] - 32767 - ((n[14] >> 16) & 1);
          const e = (n[15] >> 16) & 1;
          (n[14] &= 65535), v(r, n, 1 - e);
        }
        for (let i = 0; i < 16; i++)
          (e[2 * i] = 255 & r[i]), (e[2 * i + 1] = r[i] >> 8);
      }
      function m(e, t) {
        let n = 0;
        for (let r = 0; r < 32; r++) n |= e[r] ^ t[r];
        return (1 & ((n - 1) >>> 8)) - 1;
      }
      function w(e, t) {
        const n = new Uint8Array(32),
          r = new Uint8Array(32);
        return y(n, e), y(r, t), m(n, r);
      }
      function _(e) {
        const t = new Uint8Array(32);
        return y(t, e), 1 & t[0];
      }
      function b(e, t, n) {
        for (let r = 0; r < 16; r++) e[r] = t[r] + n[r];
      }
      function E(e, t, n) {
        for (let r = 0; r < 16; r++) e[r] = t[r] - n[r];
      }
      function I(e, t, n) {
        let r,
          i,
          s = 0,
          o = 0,
          a = 0,
          c = 0,
          u = 0,
          h = 0,
          l = 0,
          p = 0,
          d = 0,
          f = 0,
          g = 0,
          v = 0,
          y = 0,
          m = 0,
          w = 0,
          _ = 0,
          b = 0,
          E = 0,
          I = 0,
          S = 0,
          P = 0,
          O = 0,
          R = 0,
          N = 0,
          T = 0,
          A = 0,
          C = 0,
          x = 0,
          U = 0,
          j = 0,
          D = 0,
          L = n[0],
          M = n[1],
          q = n[2],
          k = n[3],
          z = n[4],
          H = n[5],
          V = n[6],
          K = n[7],
          B = n[8],
          W = n[9],
          F = n[10],
          G = n[11],
          J = n[12],
          Q = n[13],
          Y = n[14],
          $ = n[15];
        (r = t[0]),
          (s += r * L),
          (o += r * M),
          (a += r * q),
          (c += r * k),
          (u += r * z),
          (h += r * H),
          (l += r * V),
          (p += r * K),
          (d += r * B),
          (f += r * W),
          (g += r * F),
          (v += r * G),
          (y += r * J),
          (m += r * Q),
          (w += r * Y),
          (_ += r * $),
          (r = t[1]),
          (o += r * L),
          (a += r * M),
          (c += r * q),
          (u += r * k),
          (h += r * z),
          (l += r * H),
          (p += r * V),
          (d += r * K),
          (f += r * B),
          (g += r * W),
          (v += r * F),
          (y += r * G),
          (m += r * J),
          (w += r * Q),
          (_ += r * Y),
          (b += r * $),
          (r = t[2]),
          (a += r * L),
          (c += r * M),
          (u += r * q),
          (h += r * k),
          (l += r * z),
          (p += r * H),
          (d += r * V),
          (f += r * K),
          (g += r * B),
          (v += r * W),
          (y += r * F),
          (m += r * G),
          (w += r * J),
          (_ += r * Q),
          (b += r * Y),
          (E += r * $),
          (r = t[3]),
          (c += r * L),
          (u += r * M),
          (h += r * q),
          (l += r * k),
          (p += r * z),
          (d += r * H),
          (f += r * V),
          (g += r * K),
          (v += r * B),
          (y += r * W),
          (m += r * F),
          (w += r * G),
          (_ += r * J),
          (b += r * Q),
          (E += r * Y),
          (I += r * $),
          (r = t[4]),
          (u += r * L),
          (h += r * M),
          (l += r * q),
          (p += r * k),
          (d += r * z),
          (f += r * H),
          (g += r * V),
          (v += r * K),
          (y += r * B),
          (m += r * W),
          (w += r * F),
          (_ += r * G),
          (b += r * J),
          (E += r * Q),
          (I += r * Y),
          (S += r * $),
          (r = t[5]),
          (h += r * L),
          (l += r * M),
          (p += r * q),
          (d += r * k),
          (f += r * z),
          (g += r * H),
          (v += r * V),
          (y += r * K),
          (m += r * B),
          (w += r * W),
          (_ += r * F),
          (b += r * G),
          (E += r * J),
          (I += r * Q),
          (S += r * Y),
          (P += r * $),
          (r = t[6]),
          (l += r * L),
          (p += r * M),
          (d += r * q),
          (f += r * k),
          (g += r * z),
          (v += r * H),
          (y += r * V),
          (m += r * K),
          (w += r * B),
          (_ += r * W),
          (b += r * F),
          (E += r * G),
          (I += r * J),
          (S += r * Q),
          (P += r * Y),
          (O += r * $),
          (r = t[7]),
          (p += r * L),
          (d += r * M),
          (f += r * q),
          (g += r * k),
          (v += r * z),
          (y += r * H),
          (m += r * V),
          (w += r * K),
          (_ += r * B),
          (b += r * W),
          (E += r * F),
          (I += r * G),
          (S += r * J),
          (P += r * Q),
          (O += r * Y),
          (R += r * $),
          (r = t[8]),
          (d += r * L),
          (f += r * M),
          (g += r * q),
          (v += r * k),
          (y += r * z),
          (m += r * H),
          (w += r * V),
          (_ += r * K),
          (b += r * B),
          (E += r * W),
          (I += r * F),
          (S += r * G),
          (P += r * J),
          (O += r * Q),
          (R += r * Y),
          (N += r * $),
          (r = t[9]),
          (f += r * L),
          (g += r * M),
          (v += r * q),
          (y += r * k),
          (m += r * z),
          (w += r * H),
          (_ += r * V),
          (b += r * K),
          (E += r * B),
          (I += r * W),
          (S += r * F),
          (P += r * G),
          (O += r * J),
          (R += r * Q),
          (N += r * Y),
          (T += r * $),
          (r = t[10]),
          (g += r * L),
          (v += r * M),
          (y += r * q),
          (m += r * k),
          (w += r * z),
          (_ += r * H),
          (b += r * V),
          (E += r * K),
          (I += r * B),
          (S += r * W),
          (P += r * F),
          (O += r * G),
          (R += r * J),
          (N += r * Q),
          (T += r * Y),
          (A += r * $),
          (r = t[11]),
          (v += r * L),
          (y += r * M),
          (m += r * q),
          (w += r * k),
          (_ += r * z),
          (b += r * H),
          (E += r * V),
          (I += r * K),
          (S += r * B),
          (P += r * W),
          (O += r * F),
          (R += r * G),
          (N += r * J),
          (T += r * Q),
          (A += r * Y),
          (C += r * $),
          (r = t[12]),
          (y += r * L),
          (m += r * M),
          (w += r * q),
          (_ += r * k),
          (b += r * z),
          (E += r * H),
          (I += r * V),
          (S += r * K),
          (P += r * B),
          (O += r * W),
          (R += r * F),
          (N += r * G),
          (T += r * J),
          (A += r * Q),
          (C += r * Y),
          (x += r * $),
          (r = t[13]),
          (m += r * L),
          (w += r * M),
          (_ += r * q),
          (b += r * k),
          (E += r * z),
          (I += r * H),
          (S += r * V),
          (P += r * K),
          (O += r * B),
          (R += r * W),
          (N += r * F),
          (T += r * G),
          (A += r * J),
          (C += r * Q),
          (x += r * Y),
          (U += r * $),
          (r = t[14]),
          (w += r * L),
          (_ += r * M),
          (b += r * q),
          (E += r * k),
          (I += r * z),
          (S += r * H),
          (P += r * V),
          (O += r * K),
          (R += r * B),
          (N += r * W),
          (T += r * F),
          (A += r * G),
          (C += r * J),
          (x += r * Q),
          (U += r * Y),
          (j += r * $),
          (r = t[15]),
          (_ += r * L),
          (b += r * M),
          (E += r * q),
          (I += r * k),
          (S += r * z),
          (P += r * H),
          (O += r * V),
          (R += r * K),
          (N += r * B),
          (T += r * W),
          (A += r * F),
          (C += r * G),
          (x += r * J),
          (U += r * Q),
          (j += r * Y),
          (D += r * $),
          (s += 38 * b),
          (o += 38 * E),
          (a += 38 * I),
          (c += 38 * S),
          (u += 38 * P),
          (h += 38 * O),
          (l += 38 * R),
          (p += 38 * N),
          (d += 38 * T),
          (f += 38 * A),
          (g += 38 * C),
          (v += 38 * x),
          (y += 38 * U),
          (m += 38 * j),
          (w += 38 * D),
          (i = 1),
          (r = s + i + 65535),
          (i = Math.floor(r / 65536)),
          (s = r - 65536 * i),
          (r = o + i + 65535),
          (i = Math.floor(r / 65536)),
          (o = r - 65536 * i),
          (r = a + i + 65535),
          (i = Math.floor(r / 65536)),
          (a = r - 65536 * i),
          (r = c + i + 65535),
          (i = Math.floor(r / 65536)),
          (c = r - 65536 * i),
          (r = u + i + 65535),
          (i = Math.floor(r / 65536)),
          (u = r - 65536 * i),
          (r = h + i + 65535),
          (i = Math.floor(r / 65536)),
          (h = r - 65536 * i),
          (r = l + i + 65535),
          (i = Math.floor(r / 65536)),
          (l = r - 65536 * i),
          (r = p + i + 65535),
          (i = Math.floor(r / 65536)),
          (p = r - 65536 * i),
          (r = d + i + 65535),
          (i = Math.floor(r / 65536)),
          (d = r - 65536 * i),
          (r = f + i + 65535),
          (i = Math.floor(r / 65536)),
          (f = r - 65536 * i),
          (r = g + i + 65535),
          (i = Math.floor(r / 65536)),
          (g = r - 65536 * i),
          (r = v + i + 65535),
          (i = Math.floor(r / 65536)),
          (v = r - 65536 * i),
          (r = y + i + 65535),
          (i = Math.floor(r / 65536)),
          (y = r - 65536 * i),
          (r = m + i + 65535),
          (i = Math.floor(r / 65536)),
          (m = r - 65536 * i),
          (r = w + i + 65535),
          (i = Math.floor(r / 65536)),
          (w = r - 65536 * i),
          (r = _ + i + 65535),
          (i = Math.floor(r / 65536)),
          (_ = r - 65536 * i),
          (s += i - 1 + 37 * (i - 1)),
          (i = 1),
          (r = s + i + 65535),
          (i = Math.floor(r / 65536)),
          (s = r - 65536 * i),
          (r = o + i + 65535),
          (i = Math.floor(r / 65536)),
          (o = r - 65536 * i),
          (r = a + i + 65535),
          (i = Math.floor(r / 65536)),
          (a = r - 65536 * i),
          (r = c + i + 65535),
          (i = Math.floor(r / 65536)),
          (c = r - 65536 * i),
          (r = u + i + 65535),
          (i = Math.floor(r / 65536)),
          (u = r - 65536 * i),
          (r = h + i + 65535),
          (i = Math.floor(r / 65536)),
          (h = r - 65536 * i),
          (r = l + i + 65535),
          (i = Math.floor(r / 65536)),
          (l = r - 65536 * i),
          (r = p + i + 65535),
          (i = Math.floor(r / 65536)),
          (p = r - 65536 * i),
          (r = d + i + 65535),
          (i = Math.floor(r / 65536)),
          (d = r - 65536 * i),
          (r = f + i + 65535),
          (i = Math.floor(r / 65536)),
          (f = r - 65536 * i),
          (r = g + i + 65535),
          (i = Math.floor(r / 65536)),
          (g = r - 65536 * i),
          (r = v + i + 65535),
          (i = Math.floor(r / 65536)),
          (v = r - 65536 * i),
          (r = y + i + 65535),
          (i = Math.floor(r / 65536)),
          (y = r - 65536 * i),
          (r = m + i + 65535),
          (i = Math.floor(r / 65536)),
          (m = r - 65536 * i),
          (r = w + i + 65535),
          (i = Math.floor(r / 65536)),
          (w = r - 65536 * i),
          (r = _ + i + 65535),
          (i = Math.floor(r / 65536)),
          (_ = r - 65536 * i),
          (s += i - 1 + 37 * (i - 1)),
          (e[0] = s),
          (e[1] = o),
          (e[2] = a),
          (e[3] = c),
          (e[4] = u),
          (e[5] = h),
          (e[6] = l),
          (e[7] = p),
          (e[8] = d),
          (e[9] = f),
          (e[10] = g),
          (e[11] = v),
          (e[12] = y),
          (e[13] = m),
          (e[14] = w),
          (e[15] = _);
      }
      function S(e, t) {
        I(e, t, t);
      }
      function P(e, t) {
        const n = o();
        let r;
        for (r = 0; r < 16; r++) n[r] = t[r];
        for (r = 253; r >= 0; r--) S(n, n), 2 !== r && 4 !== r && I(n, n, t);
        for (r = 0; r < 16; r++) e[r] = n[r];
      }
      function O(e, t) {
        const n = o(),
          r = o(),
          i = o(),
          s = o(),
          a = o(),
          c = o(),
          u = o(),
          l = o(),
          p = o();
        E(n, e[1], e[0]),
          E(p, t[1], t[0]),
          I(n, n, p),
          b(r, e[0], e[1]),
          b(p, t[0], t[1]),
          I(r, r, p),
          I(i, e[3], t[3]),
          I(i, i, h),
          I(s, e[2], t[2]),
          b(s, s, s),
          E(a, r, n),
          E(c, s, i),
          b(u, s, i),
          b(l, r, n),
          I(e[0], a, c),
          I(e[1], l, u),
          I(e[2], u, c),
          I(e[3], a, l);
      }
      function R(e, t, n) {
        for (let r = 0; r < 4; r++) v(e[r], t[r], n);
      }
      function N(e, t) {
        const n = o(),
          r = o(),
          i = o();
        P(i, t[2]), I(n, t[0], i), I(r, t[1], i), y(e, r), (e[31] ^= _(n) << 7);
      }
      function T(e, t, n) {
        f(e[0], a), f(e[1], c), f(e[2], c), f(e[3], a);
        for (let r = 255; r >= 0; --r) {
          const i = (n[(r / 8) | 0] >> (7 & r)) & 1;
          R(e, t, i), O(t, e), O(e, e), R(e, t, i);
        }
      }
      function A(e, t) {
        const n = [o(), o(), o(), o()];
        f(n[0], l), f(n[1], p), f(n[2], c), I(n[3], l, p), T(e, n, t);
      }
      function C(e) {
        if (e.length !== t.aP)
          throw new Error("ed25519: seed must be ".concat(t.aP, " bytes"));
        const n = (0, i.hash)(e);
        (n[0] &= 248), (n[31] &= 127), (n[31] |= 64);
        const r = new Uint8Array(32),
          s = [o(), o(), o(), o()];
        A(s, n), N(r, s);
        const a = new Uint8Array(64);
        return a.set(e), a.set(r, 32), { publicKey: r, secretKey: a };
      }
      t._w = C;
      const x = new Float64Array([
        237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222,
        20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
      ]);
      function U(e, t) {
        let n, r, i, s;
        for (r = 63; r >= 32; --r) {
          for (n = 0, i = r - 32, s = r - 12; i < s; ++i)
            (t[i] += n - 16 * t[r] * x[i - (r - 32)]),
              (n = Math.floor((t[i] + 128) / 256)),
              (t[i] -= 256 * n);
          (t[i] += n), (t[r] = 0);
        }
        for (n = 0, i = 0; i < 32; i++)
          (t[i] += n - (t[31] >> 4) * x[i]), (n = t[i] >> 8), (t[i] &= 255);
        for (i = 0; i < 32; i++) t[i] -= n * x[i];
        for (r = 0; r < 32; r++) (t[r + 1] += t[r] >> 8), (e[r] = 255 & t[r]);
      }
      function j(e) {
        const t = new Float64Array(64);
        for (let n = 0; n < 64; n++) t[n] = e[n];
        for (let n = 0; n < 64; n++) e[n] = 0;
        U(e, t);
      }
      function D(e, t) {
        const n = o(),
          r = o(),
          i = o(),
          s = o(),
          h = o(),
          l = o(),
          p = o();
        return (
          f(e[2], c),
          (function (e, t) {
            for (let n = 0; n < 16; n++) e[n] = t[2 * n] + (t[2 * n + 1] << 8);
            e[15] &= 32767;
          })(e[1], t),
          S(i, e[1]),
          I(s, i, u),
          E(i, i, e[2]),
          b(s, e[2], s),
          S(h, s),
          S(l, h),
          I(p, l, h),
          I(n, p, i),
          I(n, n, s),
          (function (e, t) {
            const n = o();
            let r;
            for (r = 0; r < 16; r++) n[r] = t[r];
            for (r = 250; r >= 0; r--) S(n, n), 1 !== r && I(n, n, t);
            for (r = 0; r < 16; r++) e[r] = n[r];
          })(n, n),
          I(n, n, i),
          I(n, n, s),
          I(n, n, s),
          I(e[0], n, s),
          S(r, e[0]),
          I(r, r, s),
          w(r, i) && I(e[0], e[0], d),
          S(r, e[0]),
          I(r, r, s),
          w(r, i)
            ? -1
            : (_(e[0]) === t[31] >> 7 && E(e[0], a, e[0]),
              I(e[3], e[0], e[1]),
              0)
        );
      }
      t.Xx = function (e, t) {
        const n = new Float64Array(64),
          r = [o(), o(), o(), o()],
          s = (0, i.hash)(e.subarray(0, 32));
        (s[0] &= 248), (s[31] &= 127), (s[31] |= 64);
        const a = new Uint8Array(64);
        a.set(s.subarray(32), 32);
        const c = new i.SHA512();
        c.update(a.subarray(32)), c.update(t);
        const u = c.digest();
        c.clean(),
          j(u),
          A(r, u),
          N(a, r),
          c.reset(),
          c.update(a.subarray(0, 32)),
          c.update(e.subarray(32)),
          c.update(t);
        const h = c.digest();
        j(h);
        for (let i = 0; i < 32; i++) n[i] = u[i];
        for (let i = 0; i < 32; i++)
          for (let e = 0; e < 32; e++) n[i + e] += h[i] * s[e];
        return U(a.subarray(32), n), a;
      };
    },
    21956: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var r = n(79734),
        i = n(63227);
      (t.DIGEST_LENGTH = 64), (t.BLOCK_SIZE = 128);
      var s = (function () {
        function e() {
          (this.digestLength = t.DIGEST_LENGTH),
            (this.blockSize = t.BLOCK_SIZE),
            (this._stateHi = new Int32Array(8)),
            (this._stateLo = new Int32Array(8)),
            (this._tempHi = new Int32Array(16)),
            (this._tempLo = new Int32Array(16)),
            (this._buffer = new Uint8Array(256)),
            (this._bufferLength = 0),
            (this._bytesHashed = 0),
            (this._finished = !1),
            this.reset();
        }
        return (
          (e.prototype._initState = function () {
            (this._stateHi[0] = 1779033703),
              (this._stateHi[1] = 3144134277),
              (this._stateHi[2] = 1013904242),
              (this._stateHi[3] = 2773480762),
              (this._stateHi[4] = 1359893119),
              (this._stateHi[5] = 2600822924),
              (this._stateHi[6] = 528734635),
              (this._stateHi[7] = 1541459225),
              (this._stateLo[0] = 4089235720),
              (this._stateLo[1] = 2227873595),
              (this._stateLo[2] = 4271175723),
              (this._stateLo[3] = 1595750129),
              (this._stateLo[4] = 2917565137),
              (this._stateLo[5] = 725511199),
              (this._stateLo[6] = 4215389547),
              (this._stateLo[7] = 327033209);
          }),
          (e.prototype.reset = function () {
            return (
              this._initState(),
              (this._bufferLength = 0),
              (this._bytesHashed = 0),
              (this._finished = !1),
              this
            );
          }),
          (e.prototype.clean = function () {
            i.wipe(this._buffer),
              i.wipe(this._tempHi),
              i.wipe(this._tempLo),
              this.reset();
          }),
          (e.prototype.update = function (e, n) {
            if ((void 0 === n && (n = e.length), this._finished))
              throw new Error(
                "SHA512: can't update because hash was finished."
              );
            var r = 0;
            if (((this._bytesHashed += n), this._bufferLength > 0)) {
              for (; this._bufferLength < t.BLOCK_SIZE && n > 0; )
                (this._buffer[this._bufferLength++] = e[r++]), n--;
              this._bufferLength === this.blockSize &&
                (a(
                  this._tempHi,
                  this._tempLo,
                  this._stateHi,
                  this._stateLo,
                  this._buffer,
                  0,
                  this.blockSize
                ),
                (this._bufferLength = 0));
            }
            for (
              n >= this.blockSize &&
              ((r = a(
                this._tempHi,
                this._tempLo,
                this._stateHi,
                this._stateLo,
                e,
                r,
                n
              )),
              (n %= this.blockSize));
              n > 0;

            )
              (this._buffer[this._bufferLength++] = e[r++]), n--;
            return this;
          }),
          (e.prototype.finish = function (e) {
            if (!this._finished) {
              var t = this._bytesHashed,
                n = this._bufferLength,
                i = (t / 536870912) | 0,
                s = t << 3,
                o = t % 128 < 112 ? 128 : 256;
              this._buffer[n] = 128;
              for (var c = n + 1; c < o - 8; c++) this._buffer[c] = 0;
              r.writeUint32BE(i, this._buffer, o - 8),
                r.writeUint32BE(s, this._buffer, o - 4),
                a(
                  this._tempHi,
                  this._tempLo,
                  this._stateHi,
                  this._stateLo,
                  this._buffer,
                  0,
                  o
                ),
                (this._finished = !0);
            }
            for (c = 0; c < this.digestLength / 8; c++)
              r.writeUint32BE(this._stateHi[c], e, 8 * c),
                r.writeUint32BE(this._stateLo[c], e, 8 * c + 4);
            return this;
          }),
          (e.prototype.digest = function () {
            var e = new Uint8Array(this.digestLength);
            return this.finish(e), e;
          }),
          (e.prototype.saveState = function () {
            if (this._finished)
              throw new Error("SHA256: cannot save finished state");
            return {
              stateHi: new Int32Array(this._stateHi),
              stateLo: new Int32Array(this._stateLo),
              buffer:
                this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
              bufferLength: this._bufferLength,
              bytesHashed: this._bytesHashed,
            };
          }),
          (e.prototype.restoreState = function (e) {
            return (
              this._stateHi.set(e.stateHi),
              this._stateLo.set(e.stateLo),
              (this._bufferLength = e.bufferLength),
              e.buffer && this._buffer.set(e.buffer),
              (this._bytesHashed = e.bytesHashed),
              (this._finished = !1),
              this
            );
          }),
          (e.prototype.cleanSavedState = function (e) {
            i.wipe(e.stateHi),
              i.wipe(e.stateLo),
              e.buffer && i.wipe(e.buffer),
              (e.bufferLength = 0),
              (e.bytesHashed = 0);
          }),
          e
        );
      })();
      t.SHA512 = s;
      var o = new Int32Array([
        1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
        3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
        2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
        310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
        1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317,
        3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
        264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
        1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
        2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
        3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
        113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964,
        773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
        1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142,
        2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273,
        3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
        3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
        430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593,
        883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403,
        1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
        2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
        2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
        3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
        3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
        174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
        685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
        1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
        1607167915, 987167468, 1816402316, 1246189591,
      ]);
      function a(e, t, n, i, s, a, c) {
        for (
          var u,
            h,
            l,
            p,
            d,
            f,
            g,
            v,
            y = n[0],
            m = n[1],
            w = n[2],
            _ = n[3],
            b = n[4],
            E = n[5],
            I = n[6],
            S = n[7],
            P = i[0],
            O = i[1],
            R = i[2],
            N = i[3],
            T = i[4],
            A = i[5],
            C = i[6],
            x = i[7];
          c >= 128;

        ) {
          for (var U = 0; U < 16; U++) {
            var j = 8 * U + a;
            (e[U] = r.readUint32BE(s, j)), (t[U] = r.readUint32BE(s, j + 4));
          }
          for (U = 0; U < 80; U++) {
            var D,
              L,
              M = y,
              q = m,
              k = w,
              z = _,
              H = b,
              V = E,
              K = I,
              B = P,
              W = O,
              F = R,
              G = N,
              J = T,
              Q = A,
              Y = C;
            if (
              ((d = 65535 & (h = x)),
              (f = h >>> 16),
              (g = 65535 & (u = S)),
              (v = u >>> 16),
              (d +=
                65535 &
                (h =
                  ((T >>> 14) | (b << 18)) ^
                  ((T >>> 18) | (b << 14)) ^
                  ((b >>> 9) | (T << 23)))),
              (f += h >>> 16),
              (g +=
                65535 &
                (u =
                  ((b >>> 14) | (T << 18)) ^
                  ((b >>> 18) | (T << 14)) ^
                  ((T >>> 9) | (b << 23)))),
              (v += u >>> 16),
              (d += 65535 & (h = (T & A) ^ (~T & C))),
              (f += h >>> 16),
              (g += 65535 & (u = (b & E) ^ (~b & I))),
              (v += u >>> 16),
              (u = o[2 * U]),
              (d += 65535 & (h = o[2 * U + 1])),
              (f += h >>> 16),
              (g += 65535 & u),
              (v += u >>> 16),
              (u = e[U % 16]),
              (f += (h = t[U % 16]) >>> 16),
              (g += 65535 & u),
              (v += u >>> 16),
              (g += (f += (d += 65535 & h) >>> 16) >>> 16),
              (d = 65535 & (h = p = (65535 & d) | (f << 16))),
              (f = h >>> 16),
              (g = 65535 & (u = l = (65535 & g) | ((v += g >>> 16) << 16))),
              (v = u >>> 16),
              (d +=
                65535 &
                (h =
                  ((P >>> 28) | (y << 4)) ^
                  ((y >>> 2) | (P << 30)) ^
                  ((y >>> 7) | (P << 25)))),
              (f += h >>> 16),
              (g +=
                65535 &
                (u =
                  ((y >>> 28) | (P << 4)) ^
                  ((P >>> 2) | (y << 30)) ^
                  ((P >>> 7) | (y << 25)))),
              (v += u >>> 16),
              (f += (h = (P & O) ^ (P & R) ^ (O & R)) >>> 16),
              (g += 65535 & (u = (y & m) ^ (y & w) ^ (m & w))),
              (v += u >>> 16),
              (D =
                (65535 & (g += (f += (d += 65535 & h) >>> 16) >>> 16)) |
                ((v += g >>> 16) << 16)),
              (L = (65535 & d) | (f << 16)),
              (d = 65535 & (h = G)),
              (f = h >>> 16),
              (g = 65535 & (u = z)),
              (v = u >>> 16),
              (f += (h = p) >>> 16),
              (g += 65535 & (u = l)),
              (v += u >>> 16),
              (m = M),
              (w = q),
              (_ = k),
              (b = z =
                (65535 & (g += (f += (d += 65535 & h) >>> 16) >>> 16)) |
                ((v += g >>> 16) << 16)),
              (E = H),
              (I = V),
              (S = K),
              (y = D),
              (O = B),
              (R = W),
              (N = F),
              (T = G = (65535 & d) | (f << 16)),
              (A = J),
              (C = Q),
              (x = Y),
              (P = L),
              U % 16 === 15)
            )
              for (j = 0; j < 16; j++)
                (u = e[j]),
                  (d = 65535 & (h = t[j])),
                  (f = h >>> 16),
                  (g = 65535 & u),
                  (v = u >>> 16),
                  (u = e[(j + 9) % 16]),
                  (d += 65535 & (h = t[(j + 9) % 16])),
                  (f += h >>> 16),
                  (g += 65535 & u),
                  (v += u >>> 16),
                  (l = e[(j + 1) % 16]),
                  (d +=
                    65535 &
                    (h =
                      (((p = t[(j + 1) % 16]) >>> 1) | (l << 31)) ^
                      ((p >>> 8) | (l << 24)) ^
                      ((p >>> 7) | (l << 25)))),
                  (f += h >>> 16),
                  (g +=
                    65535 &
                    (u =
                      ((l >>> 1) | (p << 31)) ^
                      ((l >>> 8) | (p << 24)) ^
                      (l >>> 7))),
                  (v += u >>> 16),
                  (l = e[(j + 14) % 16]),
                  (f +=
                    (h =
                      (((p = t[(j + 14) % 16]) >>> 19) | (l << 13)) ^
                      ((l >>> 29) | (p << 3)) ^
                      ((p >>> 6) | (l << 26))) >>> 16),
                  (g +=
                    65535 &
                    (u =
                      ((l >>> 19) | (p << 13)) ^
                      ((p >>> 29) | (l << 3)) ^
                      (l >>> 6))),
                  (v += u >>> 16),
                  (v += (g += (f += (d += 65535 & h) >>> 16) >>> 16) >>> 16),
                  (e[j] = (65535 & g) | (v << 16)),
                  (t[j] = (65535 & d) | (f << 16));
          }
          (d = 65535 & (h = P)),
            (f = h >>> 16),
            (g = 65535 & (u = y)),
            (v = u >>> 16),
            (u = n[0]),
            (f += (h = i[0]) >>> 16),
            (g += 65535 & u),
            (v += u >>> 16),
            (v += (g += (f += (d += 65535 & h) >>> 16) >>> 16) >>> 16),
            (n[0] = y = (65535 & g) | (v << 16)),
            (i[0] = P = (65535 & d) | (f << 16)),
            (d = 65535 & (h = O)),
            (f = h >>> 16),
            (g = 65535 & (u = m)),
            (v = u >>> 16),
            (u = n[1]),
            (f += (h = i[1]) >>> 16),
            (g += 65535 & u),
            (v += u >>> 16),
            (v += (g += (f += (d += 65535 & h) >>> 16) >>> 16) >>> 16),
            (n[1] = m = (65535 & g) | (v << 16)),
            (i[1] = O = (65535 & d) | (f << 16)),
            (d = 65535 & (h = R)),
            (f = h >>> 16),
            (g = 65535 & (u = w)),
            (v = u >>> 16),
            (u = n[2]),
            (f += (h = i[2]) >>> 16),
            (g += 65535 & u),
            (v += u >>> 16),
            (v += (g += (f += (d += 65535 & h) >>> 16) >>> 16) >>> 16),
            (n[2] = w = (65535 & g) | (v << 16)),
            (i[2] = R = (65535 & d) | (f << 16)),
            (d = 65535 & (h = N)),
            (f = h >>> 16),
            (g = 65535 & (u = _)),
            (v = u >>> 16),
            (u = n[3]),
            (f += (h = i[3]) >>> 16),
            (g += 65535 & u),
            (v += u >>> 16),
            (v += (g += (f += (d += 65535 & h) >>> 16) >>> 16) >>> 16),
            (n[3] = _ = (65535 & g) | (v << 16)),
            (i[3] = N = (65535 & d) | (f << 16)),
            (d = 65535 & (h = T)),
            (f = h >>> 16),
            (g = 65535 & (u = b)),
            (v = u >>> 16),
            (u = n[4]),
            (f += (h = i[4]) >>> 16),
            (g += 65535 & u),
            (v += u >>> 16),
            (v += (g += (f += (d += 65535 & h) >>> 16) >>> 16) >>> 16),
            (n[4] = b = (65535 & g) | (v << 16)),
            (i[4] = T = (65535 & d) | (f << 16)),
            (d = 65535 & (h = A)),
            (f = h >>> 16),
            (g = 65535 & (u = E)),
            (v = u >>> 16),
            (u = n[5]),
            (f += (h = i[5]) >>> 16),
            (g += 65535 & u),
            (v += u >>> 16),
            (v += (g += (f += (d += 65535 & h) >>> 16) >>> 16) >>> 16),
            (n[5] = E = (65535 & g) | (v << 16)),
            (i[5] = A = (65535 & d) | (f << 16)),
            (d = 65535 & (h = C)),
            (f = h >>> 16),
            (g = 65535 & (u = I)),
            (v = u >>> 16),
            (u = n[6]),
            (f += (h = i[6]) >>> 16),
            (g += 65535 & u),
            (v += u >>> 16),
            (v += (g += (f += (d += 65535 & h) >>> 16) >>> 16) >>> 16),
            (n[6] = I = (65535 & g) | (v << 16)),
            (i[6] = C = (65535 & d) | (f << 16)),
            (d = 65535 & (h = x)),
            (f = h >>> 16),
            (g = 65535 & (u = S)),
            (v = u >>> 16),
            (u = n[7]),
            (f += (h = i[7]) >>> 16),
            (g += 65535 & u),
            (v += u >>> 16),
            (v += (g += (f += (d += 65535 & h) >>> 16) >>> 16) >>> 16),
            (n[7] = S = (65535 & g) | (v << 16)),
            (i[7] = x = (65535 & d) | (f << 16)),
            (a += 128),
            (c -= 128);
        }
        return a;
      }
      t.hash = function (e) {
        var t = new s();
        t.update(e);
        var n = t.digest();
        return t.clean(), n;
      };
    },
    32760: (e, t, n) => {
      "use strict";
      function r() {
        return (
          (null === n.g || void 0 === n.g ? void 0 : n.g.crypto) ||
          (null === n.g || void 0 === n.g ? void 0 : n.g.msCrypto) ||
          {}
        );
      }
      function i() {
        const e = r();
        return e.subtle || e.webkitSubtle;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isBrowserCryptoAvailable =
          t.getSubtleCrypto =
          t.getBrowerCrypto =
            void 0),
        (t.getBrowerCrypto = r),
        (t.getSubtleCrypto = i),
        (t.isBrowserCryptoAvailable = function () {
          return !!r() && !!i();
        });
    },
    34300: (e, t, n) => {
      "use strict";
      var r = n(7490);
      function i() {
        return (
          "undefined" === typeof document &&
          "undefined" !== typeof navigator &&
          "ReactNative" === navigator.product
        );
      }
      function s() {
        return (
          "undefined" !== typeof r &&
          "undefined" !== typeof r.versions &&
          "undefined" !== typeof r.versions.node
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.isBrowser = t.isNode = t.isReactNative = void 0),
        (t.isReactNative = i),
        (t.isNode = s),
        (t.isBrowser = function () {
          return !i() && !s();
        });
    },
    55503: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const r = n(66797);
      r.__exportStar(n(32760), t), r.__exportStar(n(34300), t);
    },
    17144: (e, t, n) => {
      "use strict";
      n.r(t),
        n.d(t, {
          EthereumProvider: () => pc,
          OPTIONAL_EVENTS: () => Xa,
          OPTIONAL_METHODS: () => $a,
          REQUIRED_EVENTS: () => Za,
          REQUIRED_METHODS: () => Ya,
          default: () => lc,
        });
      var r = n(68041),
        i = n.n(r),
        s = n(74533),
        o = n(81791),
        a = n(14701),
        c = n(49900),
        u = n(23539),
        h = n(91696),
        l = n(93659),
        p = n(38783),
        d = n(55210),
        f = n(31172),
        g = n(10947);
      n(7490);
      Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      Object.defineProperty,
        Object.defineProperties,
        Object.getOwnPropertyDescriptors,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      const v = {
        INVALID_METHOD: { message: "Invalid method.", code: 1001 },
        INVALID_EVENT: { message: "Invalid event.", code: 1002 },
        INVALID_UPDATE_REQUEST: {
          message: "Invalid update request.",
          code: 1003,
        },
        INVALID_EXTEND_REQUEST: {
          message: "Invalid extend request.",
          code: 1004,
        },
        INVALID_SESSION_SETTLE_REQUEST: {
          message: "Invalid session settle request.",
          code: 1005,
        },
        UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
        UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
        UNAUTHORIZED_UPDATE_REQUEST: {
          message: "Unauthorized update request.",
          code: 3003,
        },
        UNAUTHORIZED_EXTEND_REQUEST: {
          message: "Unauthorized extend request.",
          code: 3004,
        },
        USER_REJECTED: { message: "User rejected.", code: 5e3 },
        USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 },
        USER_REJECTED_METHODS: {
          message: "User rejected methods.",
          code: 5002,
        },
        USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 },
        UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
        UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
        UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
        UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 },
        UNSUPPORTED_NAMESPACE_KEY: {
          message: "Unsupported namespace key.",
          code: 5104,
        },
        USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
        SESSION_SETTLEMENT_FAILED: {
          message: "Session settlement failed.",
          code: 7e3,
        },
        WC_METHOD_UNSUPPORTED: {
          message: "Unsupported wc_ method.",
          code: 10001,
        },
      };
      function y(e, t) {
        const { message: n, code: r } = v[e];
        return { message: t ? "".concat(n, " ").concat(t) : n, code: r };
      }
      function m(e, t) {
        return (
          !!Array.isArray(e) && (!(typeof t < "u" && e.length) || e.every(t))
        );
      }
      const w =
          /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
        _ =
          /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
        b = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
      function E(e, t) {
        if (
          !(
            "__proto__" === e ||
            ("constructor" === e &&
              t &&
              "object" === typeof t &&
              "prototype" in t)
          )
        )
          return t;
        !(function (e) {
          console.warn(
            '[destr] Dropping "'.concat(
              e,
              '" key to prevent prototype pollution.'
            )
          );
        })(e);
      }
      function I(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if ("string" !== typeof e) return e;
        const n = e.trim();
        if ('"' === e[0] && '"' === e.at(-1) && !e.includes("\\"))
          return n.slice(1, -1);
        if (n.length <= 9) {
          const e = n.toLowerCase();
          if ("true" === e) return !0;
          if ("false" === e) return !1;
          if ("undefined" === e) return;
          if ("null" === e) return null;
          if ("nan" === e) return Number.NaN;
          if ("infinity" === e) return Number.POSITIVE_INFINITY;
          if ("-infinity" === e) return Number.NEGATIVE_INFINITY;
        }
        if (!b.test(e)) {
          if (t.strict) throw new SyntaxError("[destr] Invalid JSON");
          return e;
        }
        try {
          if (w.test(e) || _.test(e)) {
            if (t.strict)
              throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(e, E);
          }
          return JSON.parse(e);
        } catch (r) {
          if (t.strict) throw r;
          return e;
        }
      }
      var S = n(40918).Buffer;
      function P(e) {
        return e && "function" === typeof e.then ? e : Promise.resolve(e);
      }
      function O(e) {
        try {
          for (
            var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
            r < t;
            r++
          )
            n[r - 1] = arguments[r];
          return P(e(...n));
        } catch (i) {
          return Promise.reject(i);
        }
      }
      function R(e) {
        if (
          (function (e) {
            const t = typeof e;
            return null === e || ("object" !== t && "function" !== t);
          })(e)
        )
          return String(e);
        if (
          (function (e) {
            const t = Object.getPrototypeOf(e);
            return !t || t.isPrototypeOf(Object);
          })(e) ||
          Array.isArray(e)
        )
          return JSON.stringify(e);
        if ("function" === typeof e.toJSON) return R(e.toJSON());
        throw new Error("[unstorage] Cannot stringify value!");
      }
      function N() {
        if (void 0 === typeof S)
          throw new TypeError("[unstorage] Buffer is not supported!");
      }
      const T = "base64:";
      function A(e) {
        if ("string" === typeof e) return e;
        N();
        const t = S.from(e).toString("base64");
        return T + t;
      }
      function C(e) {
        return "string" !== typeof e
          ? e
          : e.startsWith(T)
          ? (N(), S.from(e.slice(T.length), "base64"))
          : e;
      }
      function x(e) {
        return e
          ? e
              .split("?")[0]
              .replace(/[/\\]/g, ":")
              .replace(/:+/g, ":")
              .replace(/^:|:$/g, "")
          : "";
      }
      function U() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return x(t.join(":"));
      }
      function j(e) {
        return (e = x(e)) ? e + ":" : "";
      }
      const D = () => {
        const e = new Map();
        return {
          name: "memory",
          options: {},
          hasItem: (t) => e.has(t),
          getItem(t) {
            var n;
            return null !== (n = e.get(t)) && void 0 !== n ? n : null;
          },
          getItemRaw(t) {
            var n;
            return null !== (n = e.get(t)) && void 0 !== n ? n : null;
          },
          setItem(t, n) {
            e.set(t, n);
          },
          setItemRaw(t, n) {
            e.set(t, n);
          },
          removeItem(t) {
            e.delete(t);
          },
          getKeys: () => Array.from(e.keys()),
          clear() {
            e.clear();
          },
          dispose() {
            e.clear();
          },
        };
      };
      function L(e, t, n) {
        return e.watch ? e.watch((e, r) => t(e, n + r)) : () => {};
      }
      async function M(e) {
        "function" === typeof e.dispose && (await O(e.dispose));
      }
      function q(e) {
        return new Promise((t, n) => {
          (e.oncomplete = e.onsuccess = () => t(e.result)),
            (e.onabort = e.onerror = () => n(e.error));
        });
      }
      function k(e, t) {
        const n = indexedDB.open(e);
        n.onupgradeneeded = () => n.result.createObjectStore(t);
        const r = q(n);
        return (e, n) => r.then((r) => n(r.transaction(t, e).objectStore(t)));
      }
      let z;
      function H() {
        return z || (z = k("keyval-store", "keyval")), z;
      }
      function V(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H();
        return t("readonly", (t) => q(t.get(e)));
      }
      function K(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : H();
        return n("readwrite", (n) => (n.put(t, e), q(n.transaction)));
      }
      function B(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H();
        return t("readwrite", (t) => (t.delete(e), q(t.transaction)));
      }
      function W() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : H();
        return e("readwrite", (e) => (e.clear(), q(e.transaction)));
      }
      function F(e, t) {
        return (
          (e.openCursor().onsuccess = function () {
            this.result && (t(this.result), this.result.continue());
          }),
          q(e.transaction)
        );
      }
      function G() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : H();
        return e("readonly", (e) => {
          if (e.getAllKeys) return q(e.getAllKeys());
          const t = [];
          return F(e, (e) => t.push(e.key)).then(() => t);
        });
      }
      function J(e) {
        if ("string" !== typeof e)
          throw new Error(
            "Cannot safe json parse value of type ".concat(typeof e)
          );
        try {
          return JSON.parse(e);
        } catch (t) {
          return e;
        }
      }
      function Q(e) {
        return "string" === typeof e ? e : JSON.stringify(e);
      }
      const Y = "idb-keyval";
      var $ = function () {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const t = e.base && e.base.length > 0 ? "".concat(e.base, ":") : "",
          n = (e) => t + e;
        let r;
        return (
          e.dbName && e.storeName && (r = k(e.dbName, e.storeName)),
          {
            name: Y,
            options: e,
            hasItem: async (e) => !(typeof (await V(n(e), r)) > "u"),
            async getItem(e) {
              var t;
              return null !== (t = await V(n(e), r)) && void 0 !== t ? t : null;
            },
            setItem: (e, t) => K(n(e), t, r),
            removeItem: (e) => B(n(e), r),
            getKeys: () => G(r),
            clear: () => W(r),
          }
        );
      };
      class Z {
        constructor() {
          this.indexedDb = (function () {
            const e = {
                mounts: {
                  "":
                    (arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {}
                    ).driver || D(),
                },
                mountpoints: [""],
                watching: !1,
                watchListeners: [],
                unwatch: {},
              },
              t = (t) => {
                for (const n of e.mountpoints)
                  if (t.startsWith(n))
                    return {
                      base: n,
                      relativeKey: t.slice(n.length),
                      driver: e.mounts[n],
                    };
                return { base: "", relativeKey: t, driver: e.mounts[""] };
              },
              n = (t, n) =>
                e.mountpoints
                  .filter((e) => e.startsWith(t) || (n && t.startsWith(e)))
                  .map((n) => ({
                    relativeBase:
                      t.length > n.length ? t.slice(n.length) : void 0,
                    mountpoint: n,
                    driver: e.mounts[n],
                  })),
              r = (t, n) => {
                if (e.watching) {
                  n = x(n);
                  for (const r of e.watchListeners) r(t, n);
                }
              },
              i = async () => {
                if (!e.watching) {
                  e.watching = !0;
                  for (const t in e.mounts)
                    e.unwatch[t] = await L(e.mounts[t], r, t);
                }
              },
              s = async () => {
                if (e.watching) {
                  for (const t in e.unwatch) await e.unwatch[t]();
                  (e.unwatch = {}), (e.watching = !1);
                }
              },
              o = (e, n, r) => {
                const i = new Map(),
                  s = (e) => {
                    let t = i.get(e.base);
                    return (
                      t ||
                        ((t = { driver: e.driver, base: e.base, items: [] }),
                        i.set(e.base, t)),
                      t
                    );
                  };
                for (const o of e) {
                  const e = "string" === typeof o,
                    r = x(e ? o : o.key),
                    i = e ? void 0 : o.value,
                    a = e || !o.options ? n : { ...n, ...o.options },
                    c = t(r);
                  s(c).items.push({
                    key: r,
                    value: i,
                    relativeKey: c.relativeKey,
                    options: a,
                  });
                }
                return Promise.all([...i.values()].map((e) => r(e))).then((e) =>
                  e.flat()
                );
              },
              a = {
                hasItem(e) {
                  let n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  e = x(e);
                  const { relativeKey: r, driver: i } = t(e);
                  return O(i.hasItem, r, n);
                },
                getItem(e) {
                  let n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  e = x(e);
                  const { relativeKey: r, driver: i } = t(e);
                  return O(i.getItem, r, n).then((e) => I(e));
                },
                getItems: (e, t) =>
                  o(e, t, (e) =>
                    e.driver.getItems
                      ? O(
                          e.driver.getItems,
                          e.items.map((e) => ({
                            key: e.relativeKey,
                            options: e.options,
                          })),
                          t
                        ).then((t) =>
                          t.map((t) => ({
                            key: U(e.base, t.key),
                            value: I(t.value),
                          }))
                        )
                      : Promise.all(
                          e.items.map((t) =>
                            O(e.driver.getItem, t.relativeKey, t.options).then(
                              (e) => ({ key: t.key, value: I(e) })
                            )
                          )
                        )
                  ),
                getItemRaw(e) {
                  let n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  e = x(e);
                  const { relativeKey: r, driver: i } = t(e);
                  return i.getItemRaw
                    ? O(i.getItemRaw, r, n)
                    : O(i.getItem, r, n).then((e) => C(e));
                },
                async setItem(e, n) {
                  let i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                  if (void 0 === n) return a.removeItem(e);
                  e = x(e);
                  const { relativeKey: s, driver: o } = t(e);
                  o.setItem &&
                    (await O(o.setItem, s, R(n), i), o.watch || r("update", e));
                },
                async setItems(e, t) {
                  await o(e, t, async (e) => {
                    e.driver.setItems &&
                      (await O(
                        e.driver.setItems,
                        e.items.map((e) => ({
                          key: e.relativeKey,
                          value: R(e.value),
                          options: e.options,
                        })),
                        t
                      )),
                      e.driver.setItem &&
                        (await Promise.all(
                          e.items.map((t) =>
                            O(
                              e.driver.setItem,
                              t.relativeKey,
                              R(t.value),
                              t.options
                            )
                          )
                        ));
                  });
                },
                async setItemRaw(e, n) {
                  let i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                  if (void 0 === n) return a.removeItem(e, i);
                  e = x(e);
                  const { relativeKey: s, driver: o } = t(e);
                  if (o.setItemRaw) await O(o.setItemRaw, s, n, i);
                  else {
                    if (!o.setItem) return;
                    await O(o.setItem, s, A(n), i);
                  }
                  o.watch || r("update", e);
                },
                async removeItem(e) {
                  let n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  "boolean" === typeof n && (n = { removeMeta: n }), (e = x(e));
                  const { relativeKey: i, driver: s } = t(e);
                  s.removeItem &&
                    (await O(s.removeItem, i, n),
                    (n.removeMeta || n.removeMata) &&
                      (await O(s.removeItem, i + "$", n)),
                    s.watch || r("remove", e));
                },
                async getMeta(e) {
                  let n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  "boolean" === typeof n && (n = { nativeOnly: n }), (e = x(e));
                  const { relativeKey: r, driver: i } = t(e),
                    s = Object.create(null);
                  if (
                    (i.getMeta && Object.assign(s, await O(i.getMeta, r, n)),
                    !n.nativeOnly)
                  ) {
                    const e = await O(i.getItem, r + "$", n).then((e) => I(e));
                    e &&
                      "object" === typeof e &&
                      ("string" === typeof e.atime &&
                        (e.atime = new Date(e.atime)),
                      "string" === typeof e.mtime &&
                        (e.mtime = new Date(e.mtime)),
                      Object.assign(s, e));
                  }
                  return s;
                },
                setMeta(e, t) {
                  let n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {};
                  return this.setItem(e + "$", t, n);
                },
                removeMeta(e) {
                  let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  return this.removeItem(e + "$", t);
                },
                async getKeys(e) {
                  let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  e = j(e);
                  const r = n(e, !0);
                  let i = [];
                  const s = [];
                  for (const n of r) {
                    const e = (await O(n.driver.getKeys, n.relativeBase, t))
                      .map((e) => n.mountpoint + x(e))
                      .filter((e) => !i.some((t) => e.startsWith(t)));
                    s.push(...e),
                      (i = [
                        n.mountpoint,
                        ...i.filter((e) => !e.startsWith(n.mountpoint)),
                      ]);
                  }
                  return e
                    ? s.filter((t) => t.startsWith(e) && !t.endsWith("$"))
                    : s.filter((e) => !e.endsWith("$"));
                },
                async clear(e) {
                  let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  (e = j(e)),
                    await Promise.all(
                      n(e, !1).map(async (e) => {
                        if (e.driver.clear)
                          return O(e.driver.clear, e.relativeBase, t);
                        if (e.driver.removeItem) {
                          const n = await e.driver.getKeys(
                            e.relativeBase || "",
                            t
                          );
                          return Promise.all(
                            n.map((n) => e.driver.removeItem(n, t))
                          );
                        }
                      })
                    );
                },
                async dispose() {
                  await Promise.all(Object.values(e.mounts).map((e) => M(e)));
                },
                watch: async (t) => (
                  await i(),
                  e.watchListeners.push(t),
                  async () => {
                    (e.watchListeners = e.watchListeners.filter(
                      (e) => e !== t
                    )),
                      0 === e.watchListeners.length && (await s());
                  }
                ),
                async unwatch() {
                  (e.watchListeners = []), await s();
                },
                mount(t, n) {
                  if ((t = j(t)) && e.mounts[t])
                    throw new Error("already mounted at ".concat(t));
                  return (
                    t &&
                      (e.mountpoints.push(t),
                      e.mountpoints.sort((e, t) => t.length - e.length)),
                    (e.mounts[t] = n),
                    e.watching &&
                      Promise.resolve(L(n, r, t))
                        .then((n) => {
                          e.unwatch[t] = n;
                        })
                        .catch(console.error),
                    a
                  );
                },
                async unmount(t) {
                  let n =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  (t = j(t)) &&
                    e.mounts[t] &&
                    (e.watching &&
                      t in e.unwatch &&
                      (e.unwatch[t](), delete e.unwatch[t]),
                    n && (await M(e.mounts[t])),
                    (e.mountpoints = e.mountpoints.filter((e) => e !== t)),
                    delete e.mounts[t]);
                },
                getMount() {
                  let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : "";
                  e = x(e) + ":";
                  const n = t(e);
                  return { driver: n.driver, base: n.base };
                },
                getMounts() {
                  let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "",
                    t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
                  return (
                    (e = x(e)),
                    n(e, t.parents).map((e) => ({
                      driver: e.driver,
                      base: e.mountpoint,
                    }))
                  );
                },
              };
            return a;
          })({
            driver: $({
              dbName: "WALLET_CONNECT_V2_INDEXED_DB",
              storeName: "keyvaluestorage",
            }),
          });
        }
        async getKeys() {
          return this.indexedDb.getKeys();
        }
        async getEntries() {
          return (
            await this.indexedDb.getItems(await this.indexedDb.getKeys())
          ).map((e) => [e.key, e.value]);
        }
        async getItem(e) {
          const t = await this.indexedDb.getItem(e);
          if (null !== t) return t;
        }
        async setItem(e, t) {
          await this.indexedDb.setItem(e, Q(t));
        }
        async removeItem(e) {
          await this.indexedDb.removeItem(e);
        }
      }
      var X =
          typeof globalThis < "u"
            ? globalThis
            : typeof window < "u"
            ? window
            : typeof n.g < "u"
            ? n.g
            : typeof self < "u"
            ? self
            : {},
        ee = { exports: {} };
      function te(e) {
        var t;
        return [e[0], J(null != (t = e[1]) ? t : "")];
      }
      !(function () {
        let e;
        function t() {}
        (e = t),
          (e.prototype.getItem = function (e) {
            return this.hasOwnProperty(e) ? String(this[e]) : null;
          }),
          (e.prototype.setItem = function (e, t) {
            this[e] = String(t);
          }),
          (e.prototype.removeItem = function (e) {
            delete this[e];
          }),
          (e.prototype.clear = function () {
            const e = this;
            Object.keys(e).forEach(function (t) {
              (e[t] = void 0), delete e[t];
            });
          }),
          (e.prototype.key = function (e) {
            return (e = e || 0), Object.keys(this)[e];
          }),
          e.prototype.__defineGetter__("length", function () {
            return Object.keys(this).length;
          }),
          typeof X < "u" && X.localStorage
            ? (ee.exports = X.localStorage)
            : typeof window < "u" && window.localStorage
            ? (ee.exports = window.localStorage)
            : (ee.exports = new t());
      })();
      class ne {
        constructor() {
          this.localStorage = ee.exports;
        }
        async getKeys() {
          return Object.keys(this.localStorage);
        }
        async getEntries() {
          return Object.entries(this.localStorage).map(te);
        }
        async getItem(e) {
          const t = this.localStorage.getItem(e);
          if (null !== t) return J(t);
        }
        async setItem(e, t) {
          this.localStorage.setItem(e, Q(t));
        }
        async removeItem(e) {
          this.localStorage.removeItem(e);
        }
      }
      const re = async (e, t) => {
        t.length &&
          t.forEach(async (t) => {
            await e.removeItem(t);
          });
      };
      class ie {
        constructor() {
          (this.initialized = !1),
            (this.setInitialized = (e) => {
              (this.storage = e), (this.initialized = !0);
            });
          const e = new ne();
          this.storage = e;
          try {
            (async (e, t, n) => {
              const r = "wc_storage_version",
                i = await t.getItem(r);
              if (i && i >= 1) return void n(t);
              const s = await e.getKeys();
              if (!s.length) return void n(t);
              const o = [];
              for (; s.length; ) {
                const n = s.shift();
                if (!n) continue;
                const r = n.toLowerCase();
                if (
                  r.includes("wc@") ||
                  r.includes("walletconnect") ||
                  r.includes("wc_") ||
                  r.includes("wallet_connect")
                ) {
                  const r = await e.getItem(n);
                  await t.setItem(n, r), o.push(n);
                }
              }
              await t.setItem(r, 1), n(t), re(e, o);
            })(e, new Z(), this.setInitialized);
          } catch {
            this.initialized = !0;
          }
        }
        async getKeys() {
          return await this.initialize(), this.storage.getKeys();
        }
        async getEntries() {
          return await this.initialize(), this.storage.getEntries();
        }
        async getItem(e) {
          return await this.initialize(), this.storage.getItem(e);
        }
        async setItem(e, t) {
          return await this.initialize(), this.storage.setItem(e, t);
        }
        async removeItem(e) {
          return await this.initialize(), this.storage.removeItem(e);
        }
        async initialize() {
          this.initialized ||
            (await new Promise((e) => {
              const t = setInterval(() => {
                this.initialized && (clearInterval(t), e());
              }, 20);
            }));
        }
      }
      var se = n(1345),
        oe = n(91451),
        ae = n(23375);
      class ce extends ae.q {
        constructor(e) {
          super(), (this.opts = e), (this.protocol = "wc"), (this.version = 2);
        }
      }
      class ue extends ae.q {
        constructor(e, t) {
          super(),
            (this.core = e),
            (this.logger = t),
            (this.records = new Map());
        }
      }
      class he extends ae.q {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class le extends ae.q {
        constructor(e) {
          super();
        }
      }
      class pe extends ae.q {
        constructor(e, t) {
          super(), (this.relayer = e), (this.logger = t);
        }
      }
      class de extends ae.q {
        constructor(e, t) {
          super(), (this.core = e), (this.logger = t);
        }
      }
      function fe(e) {
        if ("string" !== typeof e)
          throw new Error(
            "Cannot safe json parse value of type ".concat(typeof e)
          );
        try {
          return ((e) => {
            const t = e.replace(
              /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
              '$1"$2n"$3'
            );
            return JSON.parse(t, (e, t) =>
              "string" === typeof t && t.match(/^\d+n$/)
                ? BigInt(t.substring(0, t.length - 1))
                : t
            );
          })(e);
        } catch (t) {
          return e;
        }
      }
      function ge(e) {
        return "string" === typeof e
          ? e
          : ((t = e),
            JSON.stringify(t, (e, t) =>
              "bigint" === typeof t ? t.toString() + "n" : t
            ) || "");
        var t;
      }
      var ve = n(44519);
      const ye = "EdDSA",
        me = "base64url",
        we = "did",
        _e = "key",
        be = "base58btc";
      var Ee = n(45201),
        Ie = n(74233),
        Se = n(49324);
      function Pe(e) {
        return "string" === typeof e ? e : JSON.stringify(e);
      }
      function Oe(e) {
        return (0, Ie.B)((0, Se.m)(Pe(e), "utf8"), me);
      }
      function Re(e) {
        const t = (0, Se.m)("K36", be),
          n = "z" + (0, Ie.B)((0, Ee.z)([t, e]), be);
        return [we, _e, n].join(":");
      }
      function Ne(e) {
        return (0, Se.m)([Oe(e.header), Oe(e.payload)].join("."), "utf8");
      }
      function Te(e) {
        return [
          Oe(e.header),
          Oe(e.payload),
          ((t = e.signature), (0, Ie.B)(t, me)),
        ].join(".");
        var t;
      }
      function Ae() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : (0, a.randomBytes)(32);
        return ve._w(e);
      }
      n(16395);
      var Ce = n(7490),
        xe = function (e, t, n) {
          if (n || 2 === arguments.length)
            for (var r, i = 0, s = t.length; i < s; i++)
              (!r && i in t) ||
                (r || (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
          return e.concat(r || Array.prototype.slice.call(t));
        },
        Ue = function (e, t, n) {
          (this.name = e),
            (this.version = t),
            (this.os = n),
            (this.type = "browser");
        },
        je = function (e) {
          (this.version = e),
            (this.type = "node"),
            (this.name = "node"),
            (this.os = Ce.platform);
        },
        De = function (e, t, n, r) {
          (this.name = e),
            (this.version = t),
            (this.os = n),
            (this.bot = r),
            (this.type = "bot-device");
        },
        Le = function () {
          (this.type = "bot"),
            (this.bot = !0),
            (this.name = "bot"),
            (this.version = null),
            (this.os = null);
        },
        Me = function () {
          (this.type = "react-native"),
            (this.name = "react-native"),
            (this.version = null),
            (this.os = null);
        },
        qe =
          /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
        ke = [
          ["aol", /AOLShield\/([0-9\._]+)/],
          ["edge", /Edge\/([0-9\._]+)/],
          ["edge-ios", /EdgiOS\/([0-9\._]+)/],
          ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
          ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
          ["samsung", /SamsungBrowser\/([0-9\.]+)/],
          ["silk", /\bSilk\/([0-9._-]+)\b/],
          ["miui", /MiuiBrowser\/([0-9\.]+)$/],
          ["beaker", /BeakerBrowser\/([0-9\.]+)/],
          ["edge-chromium", /EdgA?\/([0-9\.]+)/],
          [
            "chromium-webview",
            /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
          ],
          ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
          ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
          ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
          ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
          ["fxios", /FxiOS\/([0-9\.]+)/],
          ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
          ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
          ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
          ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
          [
            "pie",
            /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/,
          ],
          ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
          ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
          ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
          ["ie", /MSIE\s(7\.0)/],
          ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
          ["android", /Android\s([0-9\.]+)/],
          ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
          ["safari", /Version\/([0-9\._]+).*Safari/],
          ["facebook", /FB[AS]V\/([0-9\.]+)/],
          ["instagram", /Instagram\s([0-9\.]+)/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
          ["curl", /^curl\/([0-9\.]+)$/],
          [
            "searchbot",
            /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
          ],
        ],
        ze = [
          ["iOS", /iP(hone|od|ad)/],
          ["Android OS", /Android/],
          ["BlackBerry OS", /BlackBerry|BB10/],
          ["Windows Mobile", /IEMobile/],
          ["Amazon OS", /Kindle/],
          ["Windows 3.11", /Win16/],
          ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
          ["Windows 98", /(Windows 98)|(Win98)/],
          ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
          ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
          ["Windows Server 2003", /(Windows NT 5.2)/],
          ["Windows Vista", /(Windows NT 6.0)/],
          ["Windows 7", /(Windows NT 6.1)/],
          ["Windows 8", /(Windows NT 6.2)/],
          ["Windows 8.1", /(Windows NT 6.3)/],
          ["Windows 10", /(Windows NT 10.0)/],
          ["Windows ME", /Windows ME/],
          ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
          ["Open BSD", /OpenBSD/],
          ["Sun OS", /SunOS/],
          ["Chrome OS", /CrOS/],
          ["Linux", /(Linux)|(X11)/],
          ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
          ["QNX", /QNX/],
          ["BeOS", /BeOS/],
          ["OS/2", /OS\/2/],
        ];
      function He(e) {
        return e
          ? Ke(e)
          : "undefined" === typeof document &&
            "undefined" !== typeof navigator &&
            "ReactNative" === navigator.product
          ? new Me()
          : "undefined" !== typeof navigator
          ? Ke(navigator.userAgent)
          : "undefined" !== typeof Ce && Ce.version
          ? new je(Ce.version.slice(1))
          : null;
      }
      function Ve(e) {
        return (
          "" !== e &&
          ke.reduce(function (t, n) {
            var r = n[0],
              i = n[1];
            if (t) return t;
            var s = i.exec(e);
            return !!s && [r, s];
          }, !1)
        );
      }
      function Ke(e) {
        var t = Ve(e);
        if (!t) return null;
        var n = t[0],
          r = t[1];
        if ("searchbot" === n) return new Le();
        var i = r[1] && r[1].split(".").join("_").split("_").slice(0, 3);
        i
          ? i.length < 3 &&
            (i = xe(
              xe([], i, !0),
              (function (e) {
                for (var t = [], n = 0; n < e; n++) t.push("0");
                return t;
              })(3 - i.length),
              !0
            ))
          : (i = []);
        var s = i.join("."),
          o = (function (e) {
            for (var t = 0, n = ze.length; t < n; t++) {
              var r = ze[t],
                i = r[0];
              if (r[1].exec(e)) return i;
            }
            return null;
          })(e),
          a = qe.exec(e);
        return a && a[1] ? new De(n, s, o, a[1]) : new Ue(n, s, o);
      }
      var Be = n(7490);
      const We = "base10",
        Fe = "base16",
        Ge = "base64pad",
        Je = "utf8";
      function Qe() {
        const e = (0, a.randomBytes)(32);
        return (0, h.BB)(e, Fe);
      }
      function Ye(e) {
        const t = (0, c.vp)((0, h.mL)(e, Je));
        return (0, h.BB)(t, Fe);
      }
      function $e(e) {
        return Number((0, h.BB)(e, We));
      }
      function Ze(e) {
        const t = (function (e) {
          return (0, h.mL)("".concat(e), We);
        })(typeof e.type < "u" ? e.type : 0);
        if (1 === $e(t) && typeof e.senderPublicKey > "u")
          throw new Error("Missing sender public key for type 1 envelope");
        const n =
            typeof e.senderPublicKey < "u"
              ? (0, h.mL)(e.senderPublicKey, Fe)
              : void 0,
          r = typeof e.iv < "u" ? (0, h.mL)(e.iv, Fe) : (0, a.randomBytes)(12);
        return (function (e) {
          if (1 === $e(e.type)) {
            if (typeof e.senderPublicKey > "u")
              throw new Error("Missing sender public key for type 1 envelope");
            return (0, h.BB)(
              (0, h.zo)([e.type, e.senderPublicKey, e.iv, e.sealed]),
              Ge
            );
          }
          return (0, h.BB)((0, h.zo)([e.type, e.iv, e.sealed]), Ge);
        })({
          type: t,
          sealed: new s.OK((0, h.mL)(e.symKey, Fe)).seal(
            r,
            (0, h.mL)(e.message, Je)
          ),
          iv: r,
          senderPublicKey: n,
        });
      }
      function Xe(e) {
        const t = (0, h.mL)(e, Ge),
          n = t.slice(0, 1);
        if (1 === $e(n)) {
          const e = 33,
            r = e + 12,
            i = t.slice(1, e),
            s = t.slice(e, r);
          return { type: n, sealed: t.slice(r), iv: s, senderPublicKey: i };
        }
        const r = t.slice(1, 13);
        return { type: n, sealed: t.slice(13), iv: r };
      }
      function et(e) {
        const t = (null === e || void 0 === e ? void 0 : e.type) || 0;
        if (1 === t) {
          if (
            typeof (null === e || void 0 === e ? void 0 : e.senderPublicKey) >
            "u"
          )
            throw new Error("missing sender public key");
          if (
            typeof (null === e || void 0 === e ? void 0 : e.receiverPublicKey) >
            "u"
          )
            throw new Error("missing receiver public key");
        }
        return {
          type: t,
          senderPublicKey:
            null === e || void 0 === e ? void 0 : e.senderPublicKey,
          receiverPublicKey:
            null === e || void 0 === e ? void 0 : e.receiverPublicKey,
        };
      }
      function tt(e) {
        return (
          1 === e.type &&
          "string" == typeof e.senderPublicKey &&
          "string" == typeof e.receiverPublicKey
        );
      }
      var nt = Object.defineProperty,
        rt = Object.getOwnPropertySymbols,
        it = Object.prototype.hasOwnProperty,
        st = Object.prototype.propertyIsEnumerable,
        ot = (e, t, n) =>
          t in e
            ? nt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        at = (e, t) => {
          for (var n in t || (t = {})) it.call(t, n) && ot(e, n, t[n]);
          if (rt) for (var n of rt(t)) st.call(t, n) && ot(e, n, t[n]);
          return e;
        };
      const ct = "react-native",
        ut = "node",
        ht = "browser",
        lt = "unknown",
        pt = "js";
      function dt() {
        return (
          typeof Be < "u" &&
          typeof Be.versions < "u" &&
          typeof Be.versions.node < "u"
        );
      }
      function ft() {
        return (
          !(0, p.getDocument)() &&
          !!(0, p.getNavigator)() &&
          "ReactNative" === navigator.product
        );
      }
      function gt() {
        return !dt() && !!(0, p.getNavigator)();
      }
      function vt() {
        return ft() ? ct : dt() ? ut : gt() ? ht : lt;
      }
      function yt(e, t, r) {
        const i = (function () {
            if (
              vt() === ct &&
              typeof n.g < "u" &&
              typeof (null == n.g ? void 0 : n.g.Platform) < "u"
            ) {
              const { OS: e, Version: t } = n.g.Platform;
              return [e, t].join("-");
            }
            const e = He();
            if (null === e) return "unknown";
            const t = e.os ? e.os.replace(" ", "").toLowerCase() : "unknown";
            return "browser" === e.type
              ? [t, e.name, e.version].join("-")
              : [t, e.version].join("-");
          })(),
          s = (function () {
            var e;
            const t = vt();
            return t === ht
              ? [
                  t,
                  (null == (e = (0, p.getLocation)()) ? void 0 : e.host) ||
                    "unknown",
                ].join(":")
              : t;
          })();
        return [[e, t].join("-"), [pt, r].join("-"), i, s].join("/");
      }
      function mt(e) {
        let {
          protocol: t,
          version: n,
          relayUrl: r,
          sdkVersion: i,
          auth: s,
          projectId: o,
          useOnCloseEvent: a,
          bundleId: c,
        } = e;
        const u = r.split("?"),
          h = {
            auth: s,
            ua: yt(t, n, i),
            projectId: o,
            useOnCloseEvent: a || void 0,
            origin: c || void 0,
          },
          l = (function (e, t) {
            let n = f.parse(e);
            return (n = at(at({}, n), t)), f.stringify(n);
          })(u[1] || "", h);
        return u[0] + "?" + l;
      }
      function wt(e) {
        return Object.fromEntries(e.entries());
      }
      function _t(e) {
        return new Map(Object.entries(e));
      }
      function bt(e, t, n) {
        return new Promise(async (r, i) => {
          const s = setTimeout(() => i(new Error(n)), t);
          try {
            r(await e);
          } catch (o) {
            i(o);
          }
          clearTimeout(s);
        });
      }
      function Et(e, t) {
        if ("string" == typeof t && t.startsWith("".concat(e, ":"))) return t;
        if ("topic" === e.toLowerCase()) {
          if ("string" != typeof t)
            throw new Error(
              'Value must be "string" for expirer target type: topic'
            );
          return "topic:".concat(t);
        }
        if ("id" === e.toLowerCase()) {
          if ("number" != typeof t)
            throw new Error(
              'Value must be "number" for expirer target type: id'
            );
          return "id:".concat(t);
        }
        throw new Error("Unknown expirer target type: ".concat(e));
      }
      function It(e, t) {
        return (0, l.fromMiliseconds)(
          (t || Date.now()) + (0, l.toMiliseconds)(e)
        );
      }
      function St(e) {
        return Date.now() >= (0, l.toMiliseconds)(e);
      }
      function Pt(e, t) {
        return "".concat(e).concat(t ? ":".concat(t) : "");
      }
      function Ot(e) {
        return (
          (null === e || void 0 === e ? void 0 : e.relay) || { protocol: "irn" }
        );
      }
      function Rt(e) {
        const t = g.RELAY_JSONRPC[e];
        if (typeof t > "u")
          throw new Error("Relay Protocol not supported: ".concat(e));
        return t;
      }
      var Nt = Object.defineProperty,
        Tt = Object.getOwnPropertySymbols,
        At = Object.prototype.hasOwnProperty,
        Ct = Object.prototype.propertyIsEnumerable,
        xt = (e, t, n) =>
          t in e
            ? Nt(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
      function Ut(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "-";
        const n = {},
          r = "relay" + t;
        return (
          Object.keys(e).forEach((t) => {
            if (t.startsWith(r)) {
              const i = t.replace(r, ""),
                s = e[t];
              n[i] = s;
            }
          }),
          n
        );
      }
      function jt(e) {
        const t = (e = (e = e.includes("wc://")
            ? e.replace("wc://", "")
            : e).includes("wc:")
            ? e.replace("wc:", "")
            : e).indexOf(":"),
          n = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0,
          r = e.substring(0, t),
          i = e.substring(t + 1, n).split("@"),
          s = typeof n < "u" ? e.substring(n) : "",
          o = f.parse(s);
        return {
          protocol: r,
          topic: Dt(i[0]),
          version: parseInt(i[1], 10),
          symKey: o.symKey,
          relay: Ut(o),
        };
      }
      function Dt(e) {
        return e.startsWith("//") ? e.substring(2) : e;
      }
      function Lt(e) {
        return (
          ""
            .concat(e.protocol, ":")
            .concat(e.topic, "@")
            .concat(e.version, "?") +
          f.stringify(
            ((e, t) => {
              for (var n in t || (t = {})) At.call(t, n) && xt(e, n, t[n]);
              if (Tt) for (var n of Tt(t)) Ct.call(t, n) && xt(e, n, t[n]);
              return e;
            })(
              { symKey: e.symKey },
              (function (e) {
                let t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : "-";
                const n = "relay",
                  r = {};
                return (
                  Object.keys(e).forEach((i) => {
                    const s = n + t + i;
                    e[i] && (r[s] = e[i]);
                  }),
                  r
                );
              })(e.relay)
            )
          )
        );
      }
      Object.defineProperty,
        Object.defineProperties,
        Object.getOwnPropertyDescriptors,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      const Mt = {
          INVALID_METHOD: { message: "Invalid method.", code: 1001 },
          INVALID_EVENT: { message: "Invalid event.", code: 1002 },
          INVALID_UPDATE_REQUEST: {
            message: "Invalid update request.",
            code: 1003,
          },
          INVALID_EXTEND_REQUEST: {
            message: "Invalid extend request.",
            code: 1004,
          },
          INVALID_SESSION_SETTLE_REQUEST: {
            message: "Invalid session settle request.",
            code: 1005,
          },
          UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
          UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
          UNAUTHORIZED_UPDATE_REQUEST: {
            message: "Unauthorized update request.",
            code: 3003,
          },
          UNAUTHORIZED_EXTEND_REQUEST: {
            message: "Unauthorized extend request.",
            code: 3004,
          },
          USER_REJECTED: { message: "User rejected.", code: 5e3 },
          USER_REJECTED_CHAINS: {
            message: "User rejected chains.",
            code: 5001,
          },
          USER_REJECTED_METHODS: {
            message: "User rejected methods.",
            code: 5002,
          },
          USER_REJECTED_EVENTS: {
            message: "User rejected events.",
            code: 5003,
          },
          UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
          UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
          UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
          UNSUPPORTED_ACCOUNTS: {
            message: "Unsupported accounts.",
            code: 5103,
          },
          UNSUPPORTED_NAMESPACE_KEY: {
            message: "Unsupported namespace key.",
            code: 5104,
          },
          USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
          SESSION_SETTLEMENT_FAILED: {
            message: "Session settlement failed.",
            code: 7e3,
          },
          WC_METHOD_UNSUPPORTED: {
            message: "Unsupported wc_ method.",
            code: 10001,
          },
        },
        qt = {
          NOT_INITIALIZED: { message: "Not initialized.", code: 1 },
          NO_MATCHING_KEY: { message: "No matching key.", code: 2 },
          RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 },
          RESUBSCRIBED: { message: "Resubscribed.", code: 4 },
          MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 },
          EXPIRED: { message: "Expired.", code: 6 },
          UNKNOWN_TYPE: { message: "Unknown type.", code: 7 },
          MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 },
          NON_CONFORMING_NAMESPACES: {
            message: "Non conforming namespaces.",
            code: 9,
          },
        };
      function kt(e, t) {
        const { message: n, code: r } = qt[e];
        return { message: t ? "".concat(n, " ").concat(t) : n, code: r };
      }
      function zt(e, t) {
        const { message: n, code: r } = Mt[e];
        return { message: t ? "".concat(n, " ").concat(t) : n, code: r };
      }
      function Ht(e, t) {
        return (
          !!Array.isArray(e) && (!(typeof t < "u" && e.length) || e.every(t))
        );
      }
      function Vt(e) {
        return typeof e > "u";
      }
      function Kt(e, t) {
        return !(!t || !Vt(e)) || ("string" == typeof e && !!e.trim().length);
      }
      function Bt(e) {
        return typeof e < "u" && null !== typeof e;
      }
      function Wt() {
        const e = vt();
        return new Promise((t) => {
          switch (e) {
            case ht:
              t(
                (function () {
                  var e;
                  return (
                    gt() &&
                    (null === (e = navigator) || void 0 === e
                      ? void 0
                      : e.onLine)
                  );
                })()
              );
              break;
            case ct:
              t(
                (async function () {
                  if (ft() && typeof n.g < "u" && null != n.g && n.g.NetInfo) {
                    const e = await (null == n.g
                      ? void 0
                      : n.g.NetInfo.fetch());
                    return null === e || void 0 === e ? void 0 : e.isConnected;
                  }
                  return !0;
                })()
              );
              break;
            default:
              t(!0);
          }
        });
      }
      function Ft(e) {
        switch (vt()) {
          case ht:
            !(function (e) {
              !ft() &&
                gt() &&
                (window.addEventListener("online", () => e(!0)),
                window.addEventListener("offline", () => e(!1)));
            })(e);
            break;
          case ct:
            !(function (e) {
              var t;
              ft() &&
                typeof n.g < "u" &&
                null != n.g &&
                n.g.NetInfo &&
                (null === (t = n.g) ||
                  void 0 === t ||
                  t.NetInfo.addEventListener((t) =>
                    e(null === t || void 0 === t ? void 0 : t.isConnected)
                  ));
            })(e);
        }
      }
      const Gt = "INTERNAL_ERROR",
        Jt = "SERVER_ERROR",
        Qt = [-32700, -32600, -32601, -32602, -32603],
        Yt = {
          PARSE_ERROR: { code: -32700, message: "Parse error" },
          INVALID_REQUEST: { code: -32600, message: "Invalid Request" },
          METHOD_NOT_FOUND: { code: -32601, message: "Method not found" },
          INVALID_PARAMS: { code: -32602, message: "Invalid params" },
          [Gt]: { code: -32603, message: "Internal error" },
          [Jt]: { code: -32e3, message: "Server error" },
        };
      function $t(e) {
        return Qt.includes(e);
      }
      function Zt(e) {
        return Object.keys(Yt).includes(e) ? Yt[e] : Yt.SERVER_ERROR;
      }
      function Xt(e) {
        const t = Object.values(Yt).find((t) => t.code === e);
        return t || Yt.SERVER_ERROR;
      }
      n(55503);
      function en() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
        const t = Date.now() * Math.pow(10, e),
          n = Math.floor(Math.random() * Math.pow(10, e));
        return t + n;
      }
      function tn() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 6;
        return BigInt(en(e));
      }
      function nn(e, t, n) {
        return { id: n || en(), jsonrpc: "2.0", method: e, params: t };
      }
      function rn(e, t) {
        return { id: e, jsonrpc: "2.0", result: t };
      }
      function sn(e, t, n) {
        return { id: e, jsonrpc: "2.0", error: on(t, n) };
      }
      function on(e, t) {
        return "undefined" === typeof e
          ? Zt(Gt)
          : ("string" === typeof e &&
              (e = Object.assign(Object.assign({}, Zt(Jt)), { message: e })),
            "undefined" !== typeof t && (e.data = t),
            $t(e.code) && (e = Xt(e.code)),
            e);
      }
      function an(e) {
        return (
          "object" === typeof e &&
          "id" in e &&
          "jsonrpc" in e &&
          "2.0" === e.jsonrpc
        );
      }
      function cn(e) {
        return an(e) && "method" in e;
      }
      function un(e) {
        return an(e) && (hn(e) || ln(e));
      }
      function hn(e) {
        return "result" in e;
      }
      function ln(e) {
        return "error" in e;
      }
      class pn extends class extends class extends class {} {
        constructor() {
          super();
        }
      } {
        constructor(e) {
          super();
        }
      } {
        constructor(e) {
          super(e),
            (this.events = new r.EventEmitter()),
            (this.hasRegisteredEventListeners = !1),
            (this.connection = this.setConnection(e)),
            this.connection.connected && this.registerEventListeners();
        }
        async connect() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.connection;
          await this.open(e);
        }
        async disconnect() {
          await this.close();
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async request(e, t) {
          return this.requestStrict(
            nn(e.method, e.params || [], e.id || tn().toString()),
            t
          );
        }
        async requestStrict(e, t) {
          return new Promise(async (n, r) => {
            if (!this.connection.connected)
              try {
                await this.open();
              } catch (i) {
                r(i);
              }
            this.events.on("".concat(e.id), (e) => {
              ln(e) ? r(e.error) : n(e.result);
            });
            try {
              await this.connection.send(e, t);
            } catch (i) {
              r(i);
            }
          });
        }
        setConnection() {
          return arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : this.connection;
        }
        onPayload(e) {
          this.events.emit("payload", e),
            un(e)
              ? this.events.emit("".concat(e.id), e)
              : this.events.emit("message", { type: e.method, data: e.params });
        }
        onClose(e) {
          e &&
            3e3 === e.code &&
            this.events.emit(
              "error",
              new Error(
                "WebSocket connection closed abnormally with code: "
                  .concat(e.code, " ")
                  .concat(e.reason ? "(".concat(e.reason, ")") : "")
              )
            ),
            this.events.emit("disconnect");
        }
        async open() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.connection;
          (this.connection === e && this.connection.connected) ||
            (this.connection.connected && this.close(),
            "string" === typeof e &&
              (await this.connection.open(e), (e = this.connection)),
            (this.connection = this.setConnection(e)),
            await this.connection.open(),
            this.registerEventListeners(),
            this.events.emit("connect"));
        }
        async close() {
          await this.connection.close();
        }
        registerEventListeners() {
          this.hasRegisteredEventListeners ||
            (this.connection.on("payload", (e) => this.onPayload(e)),
            this.connection.on("close", (e) => this.onClose(e)),
            this.connection.on("error", (e) => this.events.emit("error", e)),
            this.connection.on("register_error", (e) => this.onClose()),
            (this.hasRegisteredEventListeners = !0));
        }
      }
      function dn(e) {
        if ("string" !== typeof e)
          throw new Error(
            "Cannot safe json parse value of type ".concat(typeof e)
          );
        try {
          return ((e) => {
            const t = e.replace(
              /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
              '$1"$2n"$3'
            );
            return JSON.parse(t, (e, t) =>
              "string" === typeof t && t.match(/^\d+n$/)
                ? BigInt(t.substring(0, t.length - 1))
                : t
            );
          })(e);
        } catch (t) {
          return e;
        }
      }
      function fn(e) {
        return "string" === typeof e
          ? e
          : ((t = e),
            JSON.stringify(t, (e, t) =>
              "bigint" === typeof t ? t.toString() + "n" : t
            ) || "");
        var t;
      }
      var gn = n(86524);
      const vn = (e) => e.split("?")[0],
        yn =
          typeof WebSocket < "u"
            ? WebSocket
            : typeof n.g < "u" && typeof n.g.WebSocket < "u"
            ? n.g.WebSocket
            : typeof window < "u" && typeof window.WebSocket < "u"
            ? window.WebSocket
            : typeof self < "u" && typeof self.WebSocket < "u"
            ? self.WebSocket
            : n(78720);
      class mn {
        constructor(e) {
          if (
            ((this.url = e),
            (this.events = new r.EventEmitter()),
            (this.registering = !1),
            !(0, gn.isWsUrl)(e))
          )
            throw new Error(
              "Provided URL is not compatible with WebSocket connection: ".concat(
                e
              )
            );
          this.url = e;
        }
        get connected() {
          return typeof this.socket < "u";
        }
        get connecting() {
          return this.registering;
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async open() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.url;
          await this.register(e);
        }
        async close() {
          return new Promise((e, t) => {
            typeof this.socket > "u"
              ? t(new Error("Connection already closed"))
              : ((this.socket.onclose = (t) => {
                  this.onClose(t), e();
                }),
                this.socket.close());
          });
        }
        async send(e) {
          typeof this.socket > "u" && (this.socket = await this.register());
          try {
            this.socket.send(fn(e));
          } catch (t) {
            this.onError(e.id, t);
          }
        }
        register() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.url;
          if (!(0, gn.isWsUrl)(e))
            throw new Error(
              "Provided URL is not compatible with WebSocket connection: ".concat(
                e
              )
            );
          if (this.registering) {
            const e = this.events.getMaxListeners();
            return (
              (this.events.listenerCount("register_error") >= e ||
                this.events.listenerCount("open") >= e) &&
                this.events.setMaxListeners(e + 1),
              new Promise((e, t) => {
                this.events.once("register_error", (e) => {
                  this.resetMaxListeners(), t(e);
                }),
                  this.events.once("open", () => {
                    if ((this.resetMaxListeners(), typeof this.socket > "u"))
                      return t(
                        new Error("WebSocket connection is missing or invalid")
                      );
                    e(this.socket);
                  });
              })
            );
          }
          return (
            (this.url = e),
            (this.registering = !0),
            new Promise((t, r) => {
              const i = new URLSearchParams(e).get("origin"),
                s = (0, gn.isReactNative)()
                  ? { headers: { origin: i } }
                  : { rejectUnauthorized: !(0, gn.isLocalhostUrl)(e) },
                o = new yn(e, [], s);
              typeof WebSocket < "u" ||
              (typeof n.g < "u" && typeof n.g.WebSocket < "u") ||
              (typeof window < "u" && typeof window.WebSocket < "u") ||
              (typeof self < "u" && typeof self.WebSocket < "u")
                ? (o.onerror = (e) => {
                    const t = e;
                    r(this.emitError(t.error));
                  })
                : o.on("error", (e) => {
                    r(this.emitError(e));
                  }),
                (o.onopen = () => {
                  this.onOpen(o), t(o);
                });
            })
          );
        }
        onOpen(e) {
          (e.onmessage = (e) => this.onPayload(e)),
            (e.onclose = (e) => this.onClose(e)),
            (this.socket = e),
            (this.registering = !1),
            this.events.emit("open");
        }
        onClose(e) {
          (this.socket = void 0),
            (this.registering = !1),
            this.events.emit("close", e);
        }
        onPayload(e) {
          if (typeof e.data > "u") return;
          const t = "string" == typeof e.data ? dn(e.data) : e.data;
          this.events.emit("payload", t);
        }
        onError(e, t) {
          const n = this.parseError(t),
            r = n.message || n.toString(),
            i = (0, gn.formatJsonRpcError)(e, r);
          this.events.emit("payload", i);
        }
        parseError(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this.url;
          return (0, gn.parseConnectionError)(e, vn(t), "WS");
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
        }
        emitError(e) {
          const t = this.parseError(
            new Error(
              (null === e || void 0 === e ? void 0 : e.message) ||
                "WebSocket connection failed for host: ".concat(vn(this.url))
            )
          );
          return this.events.emit("register_error", t), t;
        }
      }
      var wn = n(23108),
        _n = n.n(wn);
      var bn = function (e, t) {
          if (e.length >= 255) throw new TypeError("Alphabet too long");
          for (var n = new Uint8Array(256), r = 0; r < n.length; r++)
            n[r] = 255;
          for (var i = 0; i < e.length; i++) {
            var s = e.charAt(i),
              o = s.charCodeAt(0);
            if (255 !== n[o]) throw new TypeError(s + " is ambiguous");
            n[o] = i;
          }
          var a = e.length,
            c = e.charAt(0),
            u = Math.log(a) / Math.log(256),
            h = Math.log(256) / Math.log(a);
          function l(e) {
            if ("string" != typeof e) throw new TypeError("Expected String");
            if (0 === e.length) return new Uint8Array();
            var t = 0;
            if (" " !== e[t]) {
              for (var r = 0, i = 0; e[t] === c; ) r++, t++;
              for (
                var s = ((e.length - t) * u + 1) >>> 0, o = new Uint8Array(s);
                e[t];

              ) {
                var h = n[e.charCodeAt(t)];
                if (255 === h) return;
                for (
                  var l = 0, p = s - 1;
                  (0 !== h || l < i) && -1 !== p;
                  p--, l++
                )
                  (h += (a * o[p]) >>> 0),
                    (o[p] = h % 256 >>> 0),
                    (h = (h / 256) >>> 0);
                if (0 !== h) throw new Error("Non-zero carry");
                (i = l), t++;
              }
              if (" " !== e[t]) {
                for (var d = s - i; d !== s && 0 === o[d]; ) d++;
                for (var f = new Uint8Array(r + (s - d)), g = r; d !== s; )
                  f[g++] = o[d++];
                return f;
              }
            }
          }
          return {
            encode: function (t) {
              if (
                (t instanceof Uint8Array ||
                  (ArrayBuffer.isView(t)
                    ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                    : Array.isArray(t) && (t = Uint8Array.from(t))),
                !(t instanceof Uint8Array))
              )
                throw new TypeError("Expected Uint8Array");
              if (0 === t.length) return "";
              for (
                var n = 0, r = 0, i = 0, s = t.length;
                i !== s && 0 === t[i];

              )
                i++, n++;
              for (
                var o = ((s - i) * h + 1) >>> 0, u = new Uint8Array(o);
                i !== s;

              ) {
                for (
                  var l = t[i], p = 0, d = o - 1;
                  (0 !== l || p < r) && -1 !== d;
                  d--, p++
                )
                  (l += (256 * u[d]) >>> 0),
                    (u[d] = l % a >>> 0),
                    (l = (l / a) >>> 0);
                if (0 !== l) throw new Error("Non-zero carry");
                (r = p), i++;
              }
              for (var f = o - r; f !== o && 0 === u[f]; ) f++;
              for (var g = c.repeat(n); f < o; ++f) g += e.charAt(u[f]);
              return g;
            },
            decodeUnsafe: l,
            decode: function (e) {
              var n = l(e);
              if (n) return n;
              throw new Error("Non-".concat(t, " character"));
            },
          };
        },
        En = bn;
      const In = (e) => {
        if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name)
          return e;
        if (e instanceof ArrayBuffer) return new Uint8Array(e);
        if (ArrayBuffer.isView(e))
          return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
        throw new Error("Unknown type, must be binary type");
      };
      class Sn {
        constructor(e, t, n) {
          (this.name = e), (this.prefix = t), (this.baseEncode = n);
        }
        encode(e) {
          if (e instanceof Uint8Array)
            return "".concat(this.prefix).concat(this.baseEncode(e));
          throw Error("Unknown type, must be binary type");
        }
      }
      class Pn {
        constructor(e, t, n) {
          if (((this.name = e), (this.prefix = t), void 0 === t.codePointAt(0)))
            throw new Error("Invalid prefix character");
          (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = n);
        }
        decode(e) {
          if ("string" == typeof e) {
            if (e.codePointAt(0) !== this.prefixCodePoint)
              throw Error(
                "Unable to decode multibase string "
                  .concat(JSON.stringify(e), ", ")
                  .concat(
                    this.name,
                    " decoder only supports inputs prefixed with "
                  )
                  .concat(this.prefix)
              );
            return this.baseDecode(e.slice(this.prefix.length));
          }
          throw Error("Can only multibase decode strings");
        }
        or(e) {
          return Rn(this, e);
        }
      }
      class On {
        constructor(e) {
          this.decoders = e;
        }
        or(e) {
          return Rn(this, e);
        }
        decode(e) {
          const t = e[0],
            n = this.decoders[t];
          if (n) return n.decode(e);
          throw RangeError(
            "Unable to decode multibase string "
              .concat(JSON.stringify(e), ", only inputs prefixed with ")
              .concat(Object.keys(this.decoders), " are supported")
          );
        }
      }
      const Rn = (e, t) =>
        new On({
          ...(e.decoders || { [e.prefix]: e }),
          ...(t.decoders || { [t.prefix]: t }),
        });
      class Nn {
        constructor(e, t, n, r) {
          (this.name = e),
            (this.prefix = t),
            (this.baseEncode = n),
            (this.baseDecode = r),
            (this.encoder = new Sn(e, t, n)),
            (this.decoder = new Pn(e, t, r));
        }
        encode(e) {
          return this.encoder.encode(e);
        }
        decode(e) {
          return this.decoder.decode(e);
        }
      }
      const Tn = (e) => {
          let { name: t, prefix: n, encode: r, decode: i } = e;
          return new Nn(t, n, r, i);
        },
        An = (e) => {
          let { prefix: t, name: n, alphabet: r } = e;
          const { encode: i, decode: s } = En(r, n);
          return Tn({ prefix: t, name: n, encode: i, decode: (e) => In(s(e)) });
        },
        Cn = (e) => {
          let { name: t, prefix: n, bitsPerChar: r, alphabet: i } = e;
          return Tn({
            prefix: n,
            name: t,
            encode: (e) =>
              ((e, t, n) => {
                const r = "=" === t[t.length - 1],
                  i = (1 << n) - 1;
                let s = "",
                  o = 0,
                  a = 0;
                for (let c = 0; c < e.length; ++c)
                  for (a = (a << 8) | e[c], o += 8; o > n; )
                    (o -= n), (s += t[i & (a >> o)]);
                if ((o && (s += t[i & (a << (n - o))]), r))
                  for (; (s.length * n) & 7; ) s += "=";
                return s;
              })(e, i, r),
            decode: (e) =>
              ((e, t, n, r) => {
                const i = {};
                for (let h = 0; h < t.length; ++h) i[t[h]] = h;
                let s = e.length;
                for (; "=" === e[s - 1]; ) --s;
                const o = new Uint8Array(((s * n) / 8) | 0);
                let a = 0,
                  c = 0,
                  u = 0;
                for (let h = 0; h < s; ++h) {
                  const t = i[e[h]];
                  if (void 0 === t)
                    throw new SyntaxError("Non-".concat(r, " character"));
                  (c = (c << n) | t),
                    (a += n),
                    a >= 8 && ((a -= 8), (o[u++] = 255 & (c >> a)));
                }
                if (a >= n || 255 & (c << (8 - a)))
                  throw new SyntaxError("Unexpected end of data");
                return o;
              })(e, i, r, t),
          });
        },
        xn = Tn({
          prefix: "\0",
          name: "identity",
          encode: (e) => ((e) => new TextDecoder().decode(e))(e),
          decode: (e) => ((e) => new TextEncoder().encode(e))(e),
        });
      var Un = Object.freeze({ __proto__: null, identity: xn });
      const jn = Cn({
        prefix: "0",
        name: "base2",
        alphabet: "01",
        bitsPerChar: 1,
      });
      var Dn = Object.freeze({ __proto__: null, base2: jn });
      const Ln = Cn({
        prefix: "7",
        name: "base8",
        alphabet: "01234567",
        bitsPerChar: 3,
      });
      var Mn = Object.freeze({ __proto__: null, base8: Ln });
      const qn = An({ prefix: "9", name: "base10", alphabet: "0123456789" });
      var kn = Object.freeze({ __proto__: null, base10: qn });
      const zn = Cn({
          prefix: "f",
          name: "base16",
          alphabet: "0123456789abcdef",
          bitsPerChar: 4,
        }),
        Hn = Cn({
          prefix: "F",
          name: "base16upper",
          alphabet: "0123456789ABCDEF",
          bitsPerChar: 4,
        });
      var Vn = Object.freeze({ __proto__: null, base16: zn, base16upper: Hn });
      const Kn = Cn({
          prefix: "b",
          name: "base32",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567",
          bitsPerChar: 5,
        }),
        Bn = Cn({
          prefix: "B",
          name: "base32upper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
          bitsPerChar: 5,
        }),
        Wn = Cn({
          prefix: "c",
          name: "base32pad",
          alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
          bitsPerChar: 5,
        }),
        Fn = Cn({
          prefix: "C",
          name: "base32padupper",
          alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
          bitsPerChar: 5,
        }),
        Gn = Cn({
          prefix: "v",
          name: "base32hex",
          alphabet: "0123456789abcdefghijklmnopqrstuv",
          bitsPerChar: 5,
        }),
        Jn = Cn({
          prefix: "V",
          name: "base32hexupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
          bitsPerChar: 5,
        }),
        Qn = Cn({
          prefix: "t",
          name: "base32hexpad",
          alphabet: "0123456789abcdefghijklmnopqrstuv=",
          bitsPerChar: 5,
        }),
        Yn = Cn({
          prefix: "T",
          name: "base32hexpadupper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
          bitsPerChar: 5,
        }),
        $n = Cn({
          prefix: "h",
          name: "base32z",
          alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
          bitsPerChar: 5,
        });
      var Zn = Object.freeze({
        __proto__: null,
        base32: Kn,
        base32upper: Bn,
        base32pad: Wn,
        base32padupper: Fn,
        base32hex: Gn,
        base32hexupper: Jn,
        base32hexpad: Qn,
        base32hexpadupper: Yn,
        base32z: $n,
      });
      const Xn = An({
          prefix: "k",
          name: "base36",
          alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
        }),
        er = An({
          prefix: "K",
          name: "base36upper",
          alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        });
      var tr = Object.freeze({ __proto__: null, base36: Xn, base36upper: er });
      const nr = An({
          name: "base58btc",
          prefix: "z",
          alphabet:
            "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
        }),
        rr = An({
          name: "base58flickr",
          prefix: "Z",
          alphabet:
            "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
        });
      var ir = Object.freeze({
        __proto__: null,
        base58btc: nr,
        base58flickr: rr,
      });
      const sr = Cn({
          prefix: "m",
          name: "base64",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          bitsPerChar: 6,
        }),
        or = Cn({
          prefix: "M",
          name: "base64pad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          bitsPerChar: 6,
        }),
        ar = Cn({
          prefix: "u",
          name: "base64url",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
          bitsPerChar: 6,
        }),
        cr = Cn({
          prefix: "U",
          name: "base64urlpad",
          alphabet:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
          bitsPerChar: 6,
        });
      var ur = Object.freeze({
        __proto__: null,
        base64: sr,
        base64pad: or,
        base64url: ar,
        base64urlpad: cr,
      });
      const hr = Array.from(
          "\ud83d\ude80\ud83e\ude90\u2604\ud83d\udef0\ud83c\udf0c\ud83c\udf11\ud83c\udf12\ud83c\udf13\ud83c\udf14\ud83c\udf15\ud83c\udf16\ud83c\udf17\ud83c\udf18\ud83c\udf0d\ud83c\udf0f\ud83c\udf0e\ud83d\udc09\u2600\ud83d\udcbb\ud83d\udda5\ud83d\udcbe\ud83d\udcbf\ud83d\ude02\u2764\ud83d\ude0d\ud83e\udd23\ud83d\ude0a\ud83d\ude4f\ud83d\udc95\ud83d\ude2d\ud83d\ude18\ud83d\udc4d\ud83d\ude05\ud83d\udc4f\ud83d\ude01\ud83d\udd25\ud83e\udd70\ud83d\udc94\ud83d\udc96\ud83d\udc99\ud83d\ude22\ud83e\udd14\ud83d\ude06\ud83d\ude44\ud83d\udcaa\ud83d\ude09\u263a\ud83d\udc4c\ud83e\udd17\ud83d\udc9c\ud83d\ude14\ud83d\ude0e\ud83d\ude07\ud83c\udf39\ud83e\udd26\ud83c\udf89\ud83d\udc9e\u270c\u2728\ud83e\udd37\ud83d\ude31\ud83d\ude0c\ud83c\udf38\ud83d\ude4c\ud83d\ude0b\ud83d\udc97\ud83d\udc9a\ud83d\ude0f\ud83d\udc9b\ud83d\ude42\ud83d\udc93\ud83e\udd29\ud83d\ude04\ud83d\ude00\ud83d\udda4\ud83d\ude03\ud83d\udcaf\ud83d\ude48\ud83d\udc47\ud83c\udfb6\ud83d\ude12\ud83e\udd2d\u2763\ud83d\ude1c\ud83d\udc8b\ud83d\udc40\ud83d\ude2a\ud83d\ude11\ud83d\udca5\ud83d\ude4b\ud83d\ude1e\ud83d\ude29\ud83d\ude21\ud83e\udd2a\ud83d\udc4a\ud83e\udd73\ud83d\ude25\ud83e\udd24\ud83d\udc49\ud83d\udc83\ud83d\ude33\u270b\ud83d\ude1a\ud83d\ude1d\ud83d\ude34\ud83c\udf1f\ud83d\ude2c\ud83d\ude43\ud83c\udf40\ud83c\udf37\ud83d\ude3b\ud83d\ude13\u2b50\u2705\ud83e\udd7a\ud83c\udf08\ud83d\ude08\ud83e\udd18\ud83d\udca6\u2714\ud83d\ude23\ud83c\udfc3\ud83d\udc90\u2639\ud83c\udf8a\ud83d\udc98\ud83d\ude20\u261d\ud83d\ude15\ud83c\udf3a\ud83c\udf82\ud83c\udf3b\ud83d\ude10\ud83d\udd95\ud83d\udc9d\ud83d\ude4a\ud83d\ude39\ud83d\udde3\ud83d\udcab\ud83d\udc80\ud83d\udc51\ud83c\udfb5\ud83e\udd1e\ud83d\ude1b\ud83d\udd34\ud83d\ude24\ud83c\udf3c\ud83d\ude2b\u26bd\ud83e\udd19\u2615\ud83c\udfc6\ud83e\udd2b\ud83d\udc48\ud83d\ude2e\ud83d\ude46\ud83c\udf7b\ud83c\udf43\ud83d\udc36\ud83d\udc81\ud83d\ude32\ud83c\udf3f\ud83e\udde1\ud83c\udf81\u26a1\ud83c\udf1e\ud83c\udf88\u274c\u270a\ud83d\udc4b\ud83d\ude30\ud83e\udd28\ud83d\ude36\ud83e\udd1d\ud83d\udeb6\ud83d\udcb0\ud83c\udf53\ud83d\udca2\ud83e\udd1f\ud83d\ude41\ud83d\udea8\ud83d\udca8\ud83e\udd2c\u2708\ud83c\udf80\ud83c\udf7a\ud83e\udd13\ud83d\ude19\ud83d\udc9f\ud83c\udf31\ud83d\ude16\ud83d\udc76\ud83e\udd74\u25b6\u27a1\u2753\ud83d\udc8e\ud83d\udcb8\u2b07\ud83d\ude28\ud83c\udf1a\ud83e\udd8b\ud83d\ude37\ud83d\udd7a\u26a0\ud83d\ude45\ud83d\ude1f\ud83d\ude35\ud83d\udc4e\ud83e\udd32\ud83e\udd20\ud83e\udd27\ud83d\udccc\ud83d\udd35\ud83d\udc85\ud83e\uddd0\ud83d\udc3e\ud83c\udf52\ud83d\ude17\ud83e\udd11\ud83c\udf0a\ud83e\udd2f\ud83d\udc37\u260e\ud83d\udca7\ud83d\ude2f\ud83d\udc86\ud83d\udc46\ud83c\udfa4\ud83d\ude47\ud83c\udf51\u2744\ud83c\udf34\ud83d\udca3\ud83d\udc38\ud83d\udc8c\ud83d\udccd\ud83e\udd40\ud83e\udd22\ud83d\udc45\ud83d\udca1\ud83d\udca9\ud83d\udc50\ud83d\udcf8\ud83d\udc7b\ud83e\udd10\ud83e\udd2e\ud83c\udfbc\ud83e\udd75\ud83d\udea9\ud83c\udf4e\ud83c\udf4a\ud83d\udc7c\ud83d\udc8d\ud83d\udce3\ud83e\udd42"
        ),
        lr = hr.reduce((e, t, n) => ((e[n] = t), e), []),
        pr = hr.reduce((e, t, n) => ((e[t.codePointAt(0)] = n), e), []);
      const dr = Tn({
        prefix: "\ud83d\ude80",
        name: "base256emoji",
        encode: function (e) {
          return e.reduce((e, t) => (e += lr[t]), "");
        },
        decode: function (e) {
          const t = [];
          for (const n of e) {
            const e = pr[n.codePointAt(0)];
            if (void 0 === e)
              throw new Error("Non-base256emoji character: ".concat(n));
            t.push(e);
          }
          return new Uint8Array(t);
        },
      });
      var fr = Object.freeze({ __proto__: null, base256emoji: dr }),
        gr = function e(t, n, r) {
          n = n || [];
          for (var i = (r = r || 0); t >= vr; )
            (n[r++] = (255 & t) | 128), (t /= 128);
          for (; -128 & t; ) (n[r++] = (255 & t) | 128), (t >>>= 7);
          return (n[r] = 0 | t), (e.bytes = r - i + 1), n;
        },
        vr = Math.pow(2, 31);
      var yr = function e(t, n) {
        var r,
          i = 0,
          s = 0,
          o = (n = n || 0),
          a = t.length;
        do {
          if (o >= a)
            throw ((e.bytes = 0), new RangeError("Could not decode varint"));
          (r = t[o++]),
            (i += s < 28 ? (127 & r) << s : (127 & r) * Math.pow(2, s)),
            (s += 7);
        } while (r >= 128);
        return (e.bytes = o - n), i;
      };
      var mr = Math.pow(2, 7),
        wr = Math.pow(2, 14),
        _r = Math.pow(2, 21),
        br = Math.pow(2, 28),
        Er = Math.pow(2, 35),
        Ir = Math.pow(2, 42),
        Sr = Math.pow(2, 49),
        Pr = Math.pow(2, 56),
        Or = Math.pow(2, 63),
        Rr = {
          encode: gr,
          decode: yr,
          encodingLength: function (e) {
            return e < mr
              ? 1
              : e < wr
              ? 2
              : e < _r
              ? 3
              : e < br
              ? 4
              : e < Er
              ? 5
              : e < Ir
              ? 6
              : e < Sr
              ? 7
              : e < Pr
              ? 8
              : e < Or
              ? 9
              : 10;
          },
        };
      const Nr = function (e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          return Rr.encode(e, t, n), t;
        },
        Tr = (e) => Rr.encodingLength(e),
        Ar = (e, t) => {
          const n = t.byteLength,
            r = Tr(e),
            i = r + Tr(n),
            s = new Uint8Array(i + n);
          return Nr(e, s, 0), Nr(n, s, r), s.set(t, i), new Cr(e, n, t, s);
        };
      class Cr {
        constructor(e, t, n, r) {
          (this.code = e), (this.size = t), (this.digest = n), (this.bytes = r);
        }
      }
      const xr = (e) => {
        let { name: t, code: n, encode: r } = e;
        return new Ur(t, n, r);
      };
      class Ur {
        constructor(e, t, n) {
          (this.name = e), (this.code = t), (this.encode = n);
        }
        digest(e) {
          if (e instanceof Uint8Array) {
            const t = this.encode(e);
            return t instanceof Uint8Array
              ? Ar(this.code, t)
              : t.then((e) => Ar(this.code, e));
          }
          throw Error("Unknown type, must be binary type");
        }
      }
      const jr = (e) => async (t) =>
          new Uint8Array(await crypto.subtle.digest(e, t)),
        Dr = xr({ name: "sha2-256", code: 18, encode: jr("SHA-256") }),
        Lr = xr({ name: "sha2-512", code: 19, encode: jr("SHA-512") });
      Object.freeze({ __proto__: null, sha256: Dr, sha512: Lr });
      const Mr = In,
        qr = {
          code: 0,
          name: "identity",
          encode: Mr,
          digest: (e) => Ar(0, Mr(e)),
        };
      Object.freeze({ __proto__: null, identity: qr });
      new TextEncoder(), new TextDecoder();
      const kr = {
        ...Un,
        ...Dn,
        ...Mn,
        ...kn,
        ...Vn,
        ...Zn,
        ...tr,
        ...ir,
        ...ur,
        ...fr,
      };
      function zr(e) {
        return null != globalThis.Buffer
          ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
          : e;
      }
      function Hr(e, t, n, r) {
        return {
          name: e,
          prefix: t,
          encoder: { name: e, prefix: t, encode: n },
          decoder: { decode: r },
        };
      }
      const Vr = Hr(
          "utf8",
          "u",
          (e) => "u" + new TextDecoder("utf8").decode(e),
          (e) => new TextEncoder().encode(e.substring(1))
        ),
        Kr = Hr(
          "ascii",
          "a",
          (e) => {
            let t = "a";
            for (let n = 0; n < e.length; n++) t += String.fromCharCode(e[n]);
            return t;
          },
          (e) => {
            const t = (function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0;
              return null != globalThis.Buffer &&
                null != globalThis.Buffer.allocUnsafe
                ? zr(globalThis.Buffer.allocUnsafe(e))
                : new Uint8Array(e);
            })((e = e.substring(1)).length);
            for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
            return t;
          }
        ),
        Br = {
          utf8: Vr,
          "utf-8": Vr,
          hex: kr.base16,
          latin1: Kr,
          ascii: Kr,
          binary: Kr,
          ...kr,
        };
      const Wr = "core",
        Fr = "".concat("wc", "@2:").concat(Wr, ":"),
        Gr = "error",
        Jr = { database: ":memory:" },
        Qr = "client_ed25519_seed",
        Yr = l.ONE_DAY,
        $r = l.SIX_HOURS,
        Zr = "wss://relay.walletconnect.com",
        Xr = "wss://relay.walletconnect.org",
        ei = "relayer_message",
        ti = "relayer_message_ack",
        ni = "relayer_connect",
        ri = "relayer_disconnect",
        ii = "relayer_error",
        si = "relayer_connection_stalled",
        oi = "relayer_publish",
        ai = "payload",
        ci = "connect",
        ui = "disconnect",
        hi = "error",
        li = l.ONE_SECOND,
        pi = "subscription_created",
        di = "subscription_deleted",
        fi = "subscription_sync",
        gi = "subscription_resubscribed",
        vi = 1e3 * l.FIVE_SECONDS,
        yi = {
          wc_pairingDelete: {
            req: { ttl: l.ONE_DAY, prompt: !1, tag: 1e3 },
            res: { ttl: l.ONE_DAY, prompt: !1, tag: 1001 },
          },
          wc_pairingPing: {
            req: { ttl: l.THIRTY_SECONDS, prompt: !1, tag: 1002 },
            res: { ttl: l.THIRTY_SECONDS, prompt: !1, tag: 1003 },
          },
          unregistered_method: {
            req: { ttl: l.ONE_DAY, prompt: !1, tag: 0 },
            res: { ttl: l.ONE_DAY, prompt: !1, tag: 0 },
          },
        },
        mi = "pairing_create",
        wi = "pairing_expire",
        _i = "pairing_delete",
        bi = "pairing_ping",
        Ei = "history_created",
        Ii = "history_updated",
        Si = "history_deleted",
        Pi = "history_sync",
        Oi = "expirer_created",
        Ri = "expirer_deleted",
        Ni = "expirer_expired",
        Ti = "expirer_sync",
        Ai = "verify-api",
        Ci = "https://verify.walletconnect.com",
        xi = "https://verify.walletconnect.org",
        Ui = [Ci, xi];
      class ji {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            (this.keychain = new Map()),
            (this.name = "keychain"),
            (this.version = "0.3"),
            (this.initialized = !1),
            (this.storagePrefix = Fr),
            (this.init = async () => {
              if (!this.initialized) {
                const e = await this.getKeyChain();
                typeof e < "u" && (this.keychain = e), (this.initialized = !0);
              }
            }),
            (this.has = (e) => (this.isInitialized(), this.keychain.has(e))),
            (this.set = async (e, t) => {
              this.isInitialized(),
                this.keychain.set(e, t),
                await this.persist();
            }),
            (this.get = (e) => {
              this.isInitialized();
              const t = this.keychain.get(e);
              if (typeof t > "u") {
                const { message: t } = kt(
                  "NO_MATCHING_KEY",
                  "".concat(this.name, ": ").concat(e)
                );
                throw new Error(t);
              }
              return t;
            }),
            (this.del = async (e) => {
              this.isInitialized(),
                this.keychain.delete(e),
                await this.persist();
            }),
            (this.core = e),
            (this.logger = (0, oe.generateChildLogger)(t, this.name));
        }
        get context() {
          return (0, oe.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        async setKeyChain(e) {
          await this.core.storage.setItem(this.storageKey, wt(e));
        }
        async getKeyChain() {
          const e = await this.core.storage.getItem(this.storageKey);
          return typeof e < "u" ? _t(e) : void 0;
        }
        async persist() {
          await this.setKeyChain(this.keychain);
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = kt("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
      }
      class Di {
        constructor(e, t, n) {
          (this.core = e),
            (this.logger = t),
            (this.name = "crypto"),
            (this.initialized = !1),
            (this.init = async () => {
              this.initialized ||
                (await this.keychain.init(), (this.initialized = !0));
            }),
            (this.hasKeys = (e) => (
              this.isInitialized(), this.keychain.has(e)
            )),
            (this.getClientId = async () => {
              this.isInitialized();
              return Re(Ae(await this.getClientSeed()).publicKey);
            }),
            (this.generateKeyPair = () => {
              this.isInitialized();
              const e = (function () {
                const e = u.Au();
                return {
                  privateKey: (0, h.BB)(e.secretKey, Fe),
                  publicKey: (0, h.BB)(e.publicKey, Fe),
                };
              })();
              return this.setPrivateKey(e.publicKey, e.privateKey);
            }),
            (this.signJWT = async (e) => {
              this.isInitialized();
              const t = Ae(await this.getClientSeed()),
                n = Qe(),
                r = Yr;
              return await (async function (e, t, n, r) {
                let i =
                  arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : (0, l.fromMiliseconds)(Date.now());
                const s = { alg: ye, typ: "JWT" },
                  o = Re(r.publicKey),
                  a = { iss: o, sub: e, aud: t, iat: i, exp: i + n },
                  c = Ne({ header: s, payload: a }),
                  u = ve.Xx(r.secretKey, c);
                return Te({ header: s, payload: a, signature: u });
              })(n, e, r, t);
            }),
            (this.generateSharedKey = (e, t, n) => {
              this.isInitialized();
              const r = (function (e, t) {
                const n = u.gi((0, h.mL)(e, Fe), (0, h.mL)(t, Fe), !0),
                  r = new o.t(c.mE, n).expand(32);
                return (0, h.BB)(r, Fe);
              })(this.getPrivateKey(e), t);
              return this.setSymKey(r, n);
            }),
            (this.setSymKey = async (e, t) => {
              this.isInitialized();
              const n =
                t ||
                (function (e) {
                  const t = (0, c.vp)((0, h.mL)(e, Fe));
                  return (0, h.BB)(t, Fe);
                })(e);
              return await this.keychain.set(n, e), n;
            }),
            (this.deleteKeyPair = async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            (this.deleteSymKey = async (e) => {
              this.isInitialized(), await this.keychain.del(e);
            }),
            (this.encode = async (e, t, n) => {
              this.isInitialized();
              const r = et(n),
                i = ge(t);
              if (tt(r)) {
                const t = r.senderPublicKey,
                  n = r.receiverPublicKey;
                e = await this.generateSharedKey(t, n);
              }
              const s = this.getSymKey(e),
                { type: o, senderPublicKey: a } = r;
              return Ze({ type: o, symKey: s, message: i, senderPublicKey: a });
            }),
            (this.decode = async (e, t, n) => {
              this.isInitialized();
              const r = (function (e, t) {
                const n = Xe(e);
                return et({
                  type: $e(n.type),
                  senderPublicKey:
                    typeof n.senderPublicKey < "u"
                      ? (0, h.BB)(n.senderPublicKey, Fe)
                      : void 0,
                  receiverPublicKey:
                    null === t || void 0 === t ? void 0 : t.receiverPublicKey,
                });
              })(t, n);
              if (tt(r)) {
                const t = r.receiverPublicKey,
                  n = r.senderPublicKey;
                e = await this.generateSharedKey(t, n);
              }
              try {
                const n = (function (e) {
                  const t = new s.OK((0, h.mL)(e.symKey, Fe)),
                    { sealed: n, iv: r } = Xe(e.encoded),
                    i = t.open(r, n);
                  if (null === i) throw new Error("Failed to decrypt");
                  return (0, h.BB)(i, Je);
                })({ symKey: this.getSymKey(e), encoded: t });
                return fe(n);
              } catch (i) {
                this.logger.error(
                  "Failed to decode message from topic: '"
                    .concat(e, "', clientId: '")
                    .concat(await this.getClientId(), "'")
                ),
                  this.logger.error(i);
              }
            }),
            (this.getPayloadType = (e) => $e(Xe(e).type)),
            (this.getPayloadSenderPublicKey = (e) => {
              const t = Xe(e);
              return t.senderPublicKey
                ? (0, h.BB)(t.senderPublicKey, Fe)
                : void 0;
            }),
            (this.core = e),
            (this.logger = (0, oe.generateChildLogger)(t, this.name)),
            (this.keychain = n || new ji(this.core, this.logger));
        }
        get context() {
          return (0, oe.getLoggerContext)(this.logger);
        }
        async setPrivateKey(e, t) {
          return await this.keychain.set(e, t), e;
        }
        getPrivateKey(e) {
          return this.keychain.get(e);
        }
        async getClientSeed() {
          let e = "";
          try {
            e = this.keychain.get(Qr);
          } catch {
            (e = Qe()), await this.keychain.set(Qr, e);
          }
          return (function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "utf8";
            const n = Br[t];
            if (!n) throw new Error('Unsupported encoding "'.concat(t, '"'));
            return ("utf8" !== t && "utf-8" !== t) ||
              null == globalThis.Buffer ||
              null == globalThis.Buffer.from
              ? n.decoder.decode("".concat(n.prefix).concat(e))
              : zr(globalThis.Buffer.from(e, "utf-8"));
          })(e, "base16");
        }
        getSymKey(e) {
          return this.keychain.get(e);
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = kt("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
      }
      class Li extends class {
        constructor(e, t) {
          (this.logger = e), (this.core = t);
        }
      } {
        constructor(e, t) {
          super(e, t),
            (this.logger = e),
            (this.core = t),
            (this.messages = new Map()),
            (this.name = "messages"),
            (this.version = "0.3"),
            (this.initialized = !1),
            (this.storagePrefix = Fr),
            (this.init = async () => {
              if (!this.initialized) {
                this.logger.trace("Initialized");
                try {
                  const e = await this.getRelayerMessages();
                  typeof e < "u" && (this.messages = e),
                    this.logger.debug(
                      "Successfully Restored records for ".concat(this.name)
                    ),
                    this.logger.trace({
                      type: "method",
                      method: "restore",
                      size: this.messages.size,
                    });
                } catch (e) {
                  this.logger.debug(
                    "Failed to Restore records for ".concat(this.name)
                  ),
                    this.logger.error(e);
                } finally {
                  this.initialized = !0;
                }
              }
            }),
            (this.set = async (e, t) => {
              this.isInitialized();
              const n = Ye(t);
              let r = this.messages.get(e);
              return (
                typeof r > "u" && (r = {}),
                typeof r[n] < "u" ||
                  ((r[n] = t), this.messages.set(e, r), await this.persist()),
                n
              );
            }),
            (this.get = (e) => {
              this.isInitialized();
              let t = this.messages.get(e);
              return typeof t > "u" && (t = {}), t;
            }),
            (this.has = (e, t) => {
              this.isInitialized();
              return typeof this.get(e)[Ye(t)] < "u";
            }),
            (this.del = async (e) => {
              this.isInitialized(),
                this.messages.delete(e),
                await this.persist();
            }),
            (this.logger = (0, oe.generateChildLogger)(e, this.name)),
            (this.core = t);
        }
        get context() {
          return (0, oe.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        async setRelayerMessages(e) {
          await this.core.storage.setItem(this.storageKey, wt(e));
        }
        async getRelayerMessages() {
          const e = await this.core.storage.getItem(this.storageKey);
          return typeof e < "u" ? _t(e) : void 0;
        }
        async persist() {
          await this.setRelayerMessages(this.messages);
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = kt("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
      }
      class Mi extends he {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            (this.events = new r.EventEmitter()),
            (this.name = "publisher"),
            (this.queue = new Map()),
            (this.publishTimeout = (0, l.toMiliseconds)(l.TEN_SECONDS)),
            (this.needsTransportRestart = !1),
            (this.publish = async (e, t, n) => {
              var r;
              this.logger.debug("Publishing Payload"),
                this.logger.trace({
                  type: "method",
                  method: "publish",
                  params: { topic: e, message: t, opts: n },
                });
              try {
                const i = (null === n || void 0 === n ? void 0 : n.ttl) || $r,
                  s = Ot(n),
                  o = (null === n || void 0 === n ? void 0 : n.prompt) || !1,
                  a = (null === n || void 0 === n ? void 0 : n.tag) || 0,
                  c =
                    (null === n || void 0 === n ? void 0 : n.id) ||
                    tn().toString(),
                  u = {
                    topic: e,
                    message: t,
                    opts: { ttl: i, relay: s, prompt: o, tag: a, id: c },
                  },
                  h = setTimeout(
                    () => this.queue.set(c, u),
                    this.publishTimeout
                  );
                try {
                  await await bt(
                    this.rpcPublish(e, t, i, s, o, a, c),
                    this.publishTimeout,
                    "Failed to publish payload, please try again."
                  ),
                    this.removeRequestFromQueue(c),
                    this.relayer.events.emit(oi, u);
                } catch (he) {
                  if (
                    (this.logger.debug("Publishing Payload stalled"),
                    (this.needsTransportRestart = !0),
                    null !=
                      (r = null === n || void 0 === n ? void 0 : n.internal) &&
                      r.throwOnFailedPublish)
                  )
                    throw (this.removeRequestFromQueue(c), he);
                  return;
                } finally {
                  clearTimeout(h);
                }
                this.logger.debug("Successfully Published Payload"),
                  this.logger.trace({
                    type: "method",
                    method: "publish",
                    params: { topic: e, message: t, opts: n },
                  });
              } catch (i) {
                throw (
                  (this.logger.debug("Failed to Publish Payload"),
                  this.logger.error(i),
                  i)
                );
              }
            }),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.relayer = e),
            (this.logger = (0, oe.generateChildLogger)(t, this.name)),
            this.registerEventListeners();
        }
        get context() {
          return (0, oe.getLoggerContext)(this.logger);
        }
        rpcPublish(e, t, n, r, i, s, o) {
          var a, c, u, h;
          const l = {
            method: Rt(r.protocol).publish,
            params: { topic: e, message: t, ttl: n, prompt: i, tag: s },
            id: o,
          };
          return (
            Vt(null == (a = l.params) ? void 0 : a.prompt) &&
              (null == (c = l.params) || delete c.prompt),
            Vt(null == (u = l.params) ? void 0 : u.tag) &&
              (null == (h = l.params) || delete h.tag),
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "message",
              direction: "outgoing",
              request: l,
            }),
            this.relayer.request(l)
          );
        }
        removeRequestFromQueue(e) {
          this.queue.delete(e);
        }
        checkQueue() {
          this.queue.forEach(async (e) => {
            const { topic: t, message: n, opts: r } = e;
            await this.publish(t, n, r);
          });
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(se.HEARTBEAT_EVENTS.pulse, () => {
            if (this.needsTransportRestart)
              return (
                (this.needsTransportRestart = !1),
                void this.relayer.events.emit(si)
              );
            this.checkQueue();
          }),
            this.relayer.on(ti, (e) => {
              this.removeRequestFromQueue(e.id.toString());
            });
        }
      }
      class qi {
        constructor() {
          (this.map = new Map()),
            (this.set = (e, t) => {
              const n = this.get(e);
              this.exists(e, t) || this.map.set(e, [...n, t]);
            }),
            (this.get = (e) => this.map.get(e) || []),
            (this.exists = (e, t) => this.get(e).includes(t)),
            (this.delete = (e, t) => {
              if (typeof t > "u") return void this.map.delete(e);
              if (!this.map.has(e)) return;
              const n = this.get(e);
              if (!this.exists(e, t)) return;
              const r = n.filter((e) => e !== t);
              r.length ? this.map.set(e, r) : this.map.delete(e);
            }),
            (this.clear = () => {
              this.map.clear();
            });
        }
        get topics() {
          return Array.from(this.map.keys());
        }
      }
      var ki = Object.defineProperty,
        zi = Object.defineProperties,
        Hi = Object.getOwnPropertyDescriptors,
        Vi = Object.getOwnPropertySymbols,
        Ki = Object.prototype.hasOwnProperty,
        Bi = Object.prototype.propertyIsEnumerable,
        Wi = (e, t, n) =>
          t in e
            ? ki(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        Fi = (e, t) => {
          for (var n in t || (t = {})) Ki.call(t, n) && Wi(e, n, t[n]);
          if (Vi) for (var n of Vi(t)) Bi.call(t, n) && Wi(e, n, t[n]);
          return e;
        },
        Gi = (e, t) => zi(e, Hi(t));
      class Ji extends pe {
        constructor(e, t) {
          super(e, t),
            (this.relayer = e),
            (this.logger = t),
            (this.subscriptions = new Map()),
            (this.topicMap = new qi()),
            (this.events = new r.EventEmitter()),
            (this.name = "subscription"),
            (this.version = "0.3"),
            (this.pending = new Map()),
            (this.cached = []),
            (this.initialized = !1),
            (this.pendingSubscriptionWatchLabel = "pending_sub_watch_label"),
            (this.pollingInterval = 20),
            (this.storagePrefix = Fr),
            (this.subscribeTimeout = 1e4),
            (this.restartInProgress = !1),
            (this.batchSubscribeTopicsLimit = 500),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                this.registerEventListeners(),
                (this.clientId = await this.relayer.core.crypto.getClientId()));
            }),
            (this.subscribe = async (e, t) => {
              await this.restartToComplete(),
                this.isInitialized(),
                this.logger.debug("Subscribing Topic"),
                this.logger.trace({
                  type: "method",
                  method: "subscribe",
                  params: { topic: e, opts: t },
                });
              try {
                const n = Ot(t),
                  r = { topic: e, relay: n };
                this.pending.set(e, r);
                const i = await this.rpcSubscribe(e, n);
                return (
                  this.onSubscribe(i, r),
                  this.logger.debug("Successfully Subscribed Topic"),
                  this.logger.trace({
                    type: "method",
                    method: "subscribe",
                    params: { topic: e, opts: t },
                  }),
                  i
                );
              } catch (ce) {
                throw (
                  (this.logger.debug("Failed to Subscribe Topic"),
                  this.logger.error(ce),
                  ce)
                );
              }
            }),
            (this.unsubscribe = async (e, t) => {
              await this.restartToComplete(),
                this.isInitialized(),
                typeof (null === t || void 0 === t ? void 0 : t.id) < "u"
                  ? await this.unsubscribeById(e, t.id, t)
                  : await this.unsubscribeByTopic(e, t);
            }),
            (this.isSubscribed = async (e) =>
              !!this.topics.includes(e) ||
              (await new Promise((t, n) => {
                const r = new l.Watch();
                r.start(this.pendingSubscriptionWatchLabel);
                const i = setInterval(() => {
                  !this.pending.has(e) &&
                    this.topics.includes(e) &&
                    (clearInterval(i),
                    r.stop(this.pendingSubscriptionWatchLabel),
                    t(!0)),
                    r.elapsed(this.pendingSubscriptionWatchLabel) >= vi &&
                      (clearInterval(i),
                      r.stop(this.pendingSubscriptionWatchLabel),
                      n(new Error("Subscription resolution timeout")));
                }, this.pollingInterval);
              }).catch(() => !1))),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.restart = async () => {
              (this.restartInProgress = !0),
                await this.restore(),
                await this.reset(),
                (this.restartInProgress = !1);
            }),
            (this.relayer = e),
            (this.logger = (0, oe.generateChildLogger)(t, this.name)),
            (this.clientId = "");
        }
        get context() {
          return (0, oe.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.relayer.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.subscriptions.size;
        }
        get ids() {
          return Array.from(this.subscriptions.keys());
        }
        get values() {
          return Array.from(this.subscriptions.values());
        }
        get topics() {
          return this.topicMap.topics;
        }
        hasSubscription(e, t) {
          let n = !1;
          try {
            n = this.getSubscription(e).topic === t;
          } catch {}
          return n;
        }
        onEnable() {
          (this.cached = []), (this.initialized = !0);
        }
        onDisable() {
          (this.cached = this.values),
            this.subscriptions.clear(),
            this.topicMap.clear();
        }
        async unsubscribeByTopic(e, t) {
          const n = this.topicMap.get(e);
          await Promise.all(
            n.map(async (n) => await this.unsubscribeById(e, n, t))
          );
        }
        async unsubscribeById(e, t, n) {
          this.logger.debug("Unsubscribing Topic"),
            this.logger.trace({
              type: "method",
              method: "unsubscribe",
              params: { topic: e, id: t, opts: n },
            });
          try {
            const r = Ot(n);
            await this.rpcUnsubscribe(e, t, r);
            const i = zt(
              "USER_DISCONNECTED",
              "".concat(this.name, ", ").concat(e)
            );
            await this.onUnsubscribe(e, t, i),
              this.logger.debug("Successfully Unsubscribed Topic"),
              this.logger.trace({
                type: "method",
                method: "unsubscribe",
                params: { topic: e, id: t, opts: n },
              });
          } catch (r) {
            throw (
              (this.logger.debug("Failed to Unsubscribe Topic"),
              this.logger.error(r),
              r)
            );
          }
        }
        async rpcSubscribe(e, t) {
          const n = { method: Rt(t.protocol).subscribe, params: { topic: e } };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: n,
            });
          try {
            await await bt(this.relayer.request(n), this.subscribeTimeout);
          } catch {
            this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
              this.relayer.events.emit(si);
          }
          return Ye(e + this.clientId);
        }
        async rpcBatchSubscribe(e) {
          if (!e.length) return;
          const t = {
            method: Rt(e[0].relay.protocol).batchSubscribe,
            params: { topics: e.map((e) => e.topic) },
          };
          this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: t,
            });
          try {
            return await await bt(
              this.relayer.request(t),
              this.subscribeTimeout
            );
          } catch {
            this.logger.debug("Outgoing Relay Payload stalled"),
              this.relayer.events.emit(si);
          }
        }
        rpcUnsubscribe(e, t, n) {
          const r = {
            method: Rt(n.protocol).unsubscribe,
            params: { topic: e, id: t },
          };
          return (
            this.logger.debug("Outgoing Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "outgoing",
              request: r,
            }),
            this.relayer.request(r)
          );
        }
        onSubscribe(e, t) {
          this.setSubscription(e, Gi(Fi({}, t), { id: e })),
            this.pending.delete(t.topic);
        }
        onBatchSubscribe(e) {
          e.length &&
            e.forEach((e) => {
              this.setSubscription(e.id, Fi({}, e)),
                this.pending.delete(e.topic);
            });
        }
        async onUnsubscribe(e, t, n) {
          this.events.removeAllListeners(t),
            this.hasSubscription(t, e) && this.deleteSubscription(t, n),
            await this.relayer.messages.del(e);
        }
        async setRelayerSubscriptions(e) {
          await this.relayer.core.storage.setItem(this.storageKey, e);
        }
        async getRelayerSubscriptions() {
          return await this.relayer.core.storage.getItem(this.storageKey);
        }
        setSubscription(e, t) {
          this.subscriptions.has(e) ||
            (this.logger.debug("Setting subscription"),
            this.logger.trace({
              type: "method",
              method: "setSubscription",
              id: e,
              subscription: t,
            }),
            this.addSubscription(e, t));
        }
        addSubscription(e, t) {
          this.subscriptions.set(e, Fi({}, t)),
            this.topicMap.set(t.topic, e),
            this.events.emit(pi, t);
        }
        getSubscription(e) {
          this.logger.debug("Getting subscription"),
            this.logger.trace({
              type: "method",
              method: "getSubscription",
              id: e,
            });
          const t = this.subscriptions.get(e);
          if (!t) {
            const { message: t } = kt(
              "NO_MATCHING_KEY",
              "".concat(this.name, ": ").concat(e)
            );
            throw new Error(t);
          }
          return t;
        }
        deleteSubscription(e, t) {
          this.logger.debug("Deleting subscription"),
            this.logger.trace({
              type: "method",
              method: "deleteSubscription",
              id: e,
              reason: t,
            });
          const n = this.getSubscription(e);
          this.subscriptions.delete(e),
            this.topicMap.delete(n.topic, e),
            this.events.emit(di, Gi(Fi({}, n), { reason: t }));
        }
        async persist() {
          await this.setRelayerSubscriptions(this.values), this.events.emit(fi);
        }
        async reset() {
          if (this.cached.length) {
            const e = Math.ceil(
              this.cached.length / this.batchSubscribeTopicsLimit
            );
            for (let t = 0; t < e; t++) {
              const e = this.cached.splice(0, this.batchSubscribeTopicsLimit);
              await this.batchSubscribe(e);
            }
          }
          this.events.emit(gi);
        }
        async restore() {
          try {
            const e = await this.getRelayerSubscriptions();
            if (typeof e > "u" || !e.length) return;
            if (this.subscriptions.size) {
              const { message: e } = kt("RESTORE_WILL_OVERRIDE", this.name);
              throw (
                (this.logger.error(e),
                this.logger.error(
                  "".concat(this.name, ": ").concat(JSON.stringify(this.values))
                ),
                new Error(e))
              );
            }
            (this.cached = e),
              this.logger.debug(
                "Successfully Restored subscriptions for ".concat(this.name)
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                subscriptions: this.values,
              });
          } catch (e) {
            this.logger.debug(
              "Failed to Restore subscriptions for ".concat(this.name)
            ),
              this.logger.error(e);
          }
        }
        async batchSubscribe(e) {
          if (!e.length) return;
          const t = await this.rpcBatchSubscribe(e);
          Ht(t) &&
            this.onBatchSubscribe(t.map((t, n) => Gi(Fi({}, e[n]), { id: t })));
        }
        async onConnect() {
          this.restartInProgress || (await this.restart(), this.onEnable());
        }
        onDisconnect() {
          this.onDisable();
        }
        async checkPending() {
          if (!this.initialized || this.relayer.transportExplicitlyClosed)
            return;
          const e = [];
          this.pending.forEach((t) => {
            e.push(t);
          }),
            await this.batchSubscribe(e);
        }
        registerEventListeners() {
          this.relayer.core.heartbeat.on(
            se.HEARTBEAT_EVENTS.pulse,
            async () => {
              await this.checkPending();
            }
          ),
            this.relayer.on(ni, async () => {
              await this.onConnect();
            }),
            this.relayer.on(ri, () => {
              this.onDisconnect();
            }),
            this.events.on(pi, async (e) => {
              const t = pi;
              this.logger.info("Emitting ".concat(t)),
                this.logger.debug({ type: "event", event: t, data: e }),
                await this.persist();
            }),
            this.events.on(di, async (e) => {
              const t = di;
              this.logger.info("Emitting ".concat(t)),
                this.logger.debug({ type: "event", event: t, data: e }),
                await this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = kt("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
        async restartToComplete() {
          this.restartInProgress &&
            (await new Promise((e) => {
              const t = setInterval(() => {
                this.restartInProgress || (clearInterval(t), e());
              }, this.pollingInterval);
            }));
        }
      }
      var Qi = Object.defineProperty,
        Yi = Object.getOwnPropertySymbols,
        $i = Object.prototype.hasOwnProperty,
        Zi = Object.prototype.propertyIsEnumerable,
        Xi = (e, t, n) =>
          t in e
            ? Qi(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n);
      class es extends le {
        constructor(e) {
          super(e),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.events = new r.EventEmitter()),
            (this.name = "relayer"),
            (this.transportExplicitlyClosed = !1),
            (this.initialized = !1),
            (this.connectionAttemptInProgress = !1),
            (this.connectionStatusPollingInterval = 20),
            (this.staleConnectionErrors = ["socket hang up", "socket stalled"]),
            (this.hasExperiencedNetworkDisruption = !1),
            (this.request = async (e) => {
              this.logger.debug("Publishing Request Payload");
              try {
                return (
                  await this.toEstablishConnection(),
                  await this.provider.request(e)
                );
              } catch (t) {
                throw (
                  (this.logger.debug("Failed to Publish Request"),
                  this.logger.error(t),
                  t)
                );
              }
            }),
            (this.onPayloadHandler = (e) => {
              this.onProviderPayload(e);
            }),
            (this.onConnectHandler = () => {
              this.events.emit(ni);
            }),
            (this.onDisconnectHandler = () => {
              this.onProviderDisconnect();
            }),
            (this.onProviderErrorHandler = (e) => {
              this.logger.error(e),
                this.events.emit(ii, e),
                this.logger.info(
                  "Fatal socket error received, closing transport"
                ),
                this.transportClose();
            }),
            (this.registerProviderListeners = () => {
              this.provider.on(ai, this.onPayloadHandler),
                this.provider.on(ci, this.onConnectHandler),
                this.provider.on(ui, this.onDisconnectHandler),
                this.provider.on(hi, this.onProviderErrorHandler);
            }),
            (this.core = e.core),
            (this.logger =
              typeof e.logger < "u" && "string" != typeof e.logger
                ? (0, oe.generateChildLogger)(e.logger, this.name)
                : (0, oe.pino)(
                    (0, oe.getDefaultLoggerOptions)({
                      level: e.logger || "error",
                    })
                  )),
            (this.messages = new Li(this.logger, e.core)),
            (this.subscriber = new Ji(this, this.logger)),
            (this.publisher = new Mi(this, this.logger)),
            (this.relayUrl =
              (null === e || void 0 === e ? void 0 : e.relayUrl) || Zr),
            (this.projectId = e.projectId),
            (this.bundleId = (function () {
              var e;
              try {
                return ft() &&
                  typeof n.g < "u" &&
                  typeof (null == n.g ? void 0 : n.g.Application) < "u"
                  ? null == (e = n.g.Application)
                    ? void 0
                    : e.applicationId
                  : void 0;
              } catch {
                return;
              }
            })()),
            (this.provider = {});
        }
        async init() {
          this.logger.trace("Initialized"),
            this.registerEventListeners(),
            await this.createProvider(),
            await Promise.all([this.messages.init(), this.subscriber.init()]);
          try {
            await this.transportOpen();
          } catch {
            this.logger.warn(
              "Connection via "
                .concat(
                  this.relayUrl,
                  " failed, attempting to connect via failover domain "
                )
                .concat(Xr, "...")
            ),
              await this.restartTransport(Xr);
          }
          (this.initialized = !0),
            setTimeout(async () => {
              0 === this.subscriber.topics.length &&
                (this.logger.info(
                  "No topics subscribed to after init, closing transport"
                ),
                await this.transportClose(),
                (this.transportExplicitlyClosed = !1));
            }, 1e4);
        }
        get context() {
          return (0, oe.getLoggerContext)(this.logger);
        }
        get connected() {
          return this.provider.connection.connected;
        }
        get connecting() {
          return this.provider.connection.connecting;
        }
        async publish(e, t, n) {
          this.isInitialized(),
            await this.publisher.publish(e, t, n),
            await this.recordMessageEvent({
              topic: e,
              message: t,
              publishedAt: Date.now(),
            });
        }
        async subscribe(e, t) {
          var n;
          this.isInitialized();
          let r,
            i =
              (null == (n = this.subscriber.topicMap.get(e)) ? void 0 : n[0]) ||
              "";
          if (i) return i;
          const s = (t) => {
            t.topic === e && (this.subscriber.off(pi, s), r());
          };
          return (
            await Promise.all([
              new Promise((e) => {
                (r = e), this.subscriber.on(pi, s);
              }),
              new Promise(async (n) => {
                (i = await this.subscriber.subscribe(e, t)), n();
              }),
            ]),
            i
          );
        }
        async unsubscribe(e, t) {
          this.isInitialized(), await this.subscriber.unsubscribe(e, t);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async transportClose() {
          (this.transportExplicitlyClosed = !0),
            this.hasExperiencedNetworkDisruption && this.connected
              ? await bt(
                  this.provider.disconnect(),
                  1e3,
                  "provider.disconnect()"
                ).catch(() => this.onProviderDisconnect())
              : this.connected && (await this.provider.disconnect());
        }
        async transportOpen(e) {
          if (
            ((this.transportExplicitlyClosed = !1),
            await this.confirmOnlineStateOrThrow(),
            !this.connectionAttemptInProgress)
          ) {
            e &&
              e !== this.relayUrl &&
              ((this.relayUrl = e),
              await this.transportClose(),
              await this.createProvider()),
              (this.connectionAttemptInProgress = !0);
            try {
              await Promise.all([
                new Promise((e) => {
                  if (!this.initialized) return e();
                  this.subscriber.once(gi, () => {
                    e();
                  });
                }),
                new Promise(async (e, t) => {
                  try {
                    await bt(
                      this.provider.connect(),
                      1e4,
                      "Socket stalled when trying to connect to ".concat(
                        this.relayUrl
                      )
                    );
                  } catch (n) {
                    return void t(n);
                  }
                  e();
                }),
              ]);
            } catch (t) {
              this.logger.error(t);
              const e = t;
              if (!this.isConnectionStalled(e.message)) throw t;
              this.provider.events.emit(ui);
            } finally {
              (this.connectionAttemptInProgress = !1),
                (this.hasExperiencedNetworkDisruption = !1);
            }
          }
        }
        async restartTransport(e) {
          await this.confirmOnlineStateOrThrow(),
            !this.connectionAttemptInProgress &&
              ((this.relayUrl = e || this.relayUrl),
              await this.transportClose(),
              await this.createProvider(),
              await this.transportOpen());
        }
        async confirmOnlineStateOrThrow() {
          if (!(await Wt()))
            throw new Error(
              "No internet connection detected. Please restart your network and try again."
            );
        }
        isConnectionStalled(e) {
          return this.staleConnectionErrors.some((t) => e.includes(t));
        }
        async createProvider() {
          this.provider.connection && this.unregisterProviderListeners();
          const e = await this.core.crypto.signJWT(this.relayUrl);
          (this.provider = new pn(
            new mn(
              mt({
                sdkVersion: "2.10.6",
                protocol: this.protocol,
                version: this.version,
                relayUrl: this.relayUrl,
                projectId: this.projectId,
                auth: e,
                useOnCloseEvent: !0,
                bundleId: this.bundleId,
              })
            )
          )),
            this.registerProviderListeners();
        }
        async recordMessageEvent(e) {
          const { topic: t, message: n } = e;
          await this.messages.set(t, n);
        }
        async shouldIgnoreMessageEvent(e) {
          const { topic: t, message: n } = e;
          if (!n || 0 === n.length)
            return (
              this.logger.debug("Ignoring invalid/empty message: ".concat(n)),
              !0
            );
          if (!(await this.subscriber.isSubscribed(t)))
            return (
              this.logger.debug(
                "Ignoring message for non-subscribed topic ".concat(t)
              ),
              !0
            );
          const r = this.messages.has(t, n);
          return (
            r && this.logger.debug("Ignoring duplicate message: ".concat(n)), r
          );
        }
        async onProviderPayload(e) {
          if (
            (this.logger.debug("Incoming Relay Payload"),
            this.logger.trace({
              type: "payload",
              direction: "incoming",
              payload: e,
            }),
            cn(e))
          ) {
            if (!e.method.endsWith("_subscription")) return;
            const t = e.params,
              { topic: n, message: r, publishedAt: i } = t.data,
              s = { topic: n, message: r, publishedAt: i };
            this.logger.debug("Emitting Relayer Payload"),
              this.logger.trace(
                ((e, t) => {
                  for (var n in t || (t = {})) $i.call(t, n) && Xi(e, n, t[n]);
                  if (Yi) for (var n of Yi(t)) Zi.call(t, n) && Xi(e, n, t[n]);
                  return e;
                })({ type: "event", event: t.id }, s)
              ),
              this.events.emit(t.id, s),
              await this.acknowledgePayload(e),
              await this.onMessageEvent(s);
          } else un(e) && this.events.emit(ti, e);
        }
        async onMessageEvent(e) {
          (await this.shouldIgnoreMessageEvent(e)) ||
            (this.events.emit(ei, e), await this.recordMessageEvent(e));
        }
        async acknowledgePayload(e) {
          const t = rn(e.id, !0);
          await this.provider.connection.send(t);
        }
        unregisterProviderListeners() {
          this.provider.off(ai, this.onPayloadHandler),
            this.provider.off(ci, this.onConnectHandler),
            this.provider.off(ui, this.onDisconnectHandler),
            this.provider.off(hi, this.onProviderErrorHandler);
        }
        async registerEventListeners() {
          this.events.on(si, () => {
            this.restartTransport().catch((e) => this.logger.error(e));
          });
          let e = await Wt();
          Ft(async (t) => {
            this.initialized &&
              e !== t &&
              ((e = t),
              t
                ? await this.restartTransport().catch((e) =>
                    this.logger.error(e)
                  )
                : ((this.hasExperiencedNetworkDisruption = !0),
                  await this.transportClose().catch((e) =>
                    this.logger.error(e)
                  )));
          });
        }
        onProviderDisconnect() {
          this.events.emit(ri), this.attemptToReconnect();
        }
        attemptToReconnect() {
          this.transportExplicitlyClosed ||
            (this.logger.info("attemptToReconnect called. Connecting..."),
            setTimeout(async () => {
              await this.restartTransport().catch((e) => this.logger.error(e));
            }, (0, l.toMiliseconds)(li)));
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = kt("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
        async toEstablishConnection() {
          if ((await this.confirmOnlineStateOrThrow(), !this.connected)) {
            if (this.connectionAttemptInProgress)
              return await new Promise((e) => {
                const t = setInterval(() => {
                  this.connected && (clearInterval(t), e());
                }, this.connectionStatusPollingInterval);
              });
            await this.restartTransport();
          }
        }
      }
      var ts = Object.defineProperty,
        ns = Object.getOwnPropertySymbols,
        rs = Object.prototype.hasOwnProperty,
        is = Object.prototype.propertyIsEnumerable,
        ss = (e, t, n) =>
          t in e
            ? ts(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        os = (e, t) => {
          for (var n in t || (t = {})) rs.call(t, n) && ss(e, n, t[n]);
          if (ns) for (var n of ns(t)) is.call(t, n) && ss(e, n, t[n]);
          return e;
        };
      class as extends class {
        constructor(e, t, n, r) {
          (this.core = e), (this.logger = t), (this.name = n);
        }
      } {
        constructor(e, t, n) {
          let r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : Fr,
            i =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : void 0;
          super(e, t, n, r),
            (this.core = e),
            (this.logger = t),
            (this.name = n),
            (this.map = new Map()),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = Fr),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => {
                  this.getKey && null !== e && !Vt(e)
                    ? this.map.set(this.getKey(e), e)
                    : (function (e) {
                        var t;
                        return null ==
                          (t = null === e || void 0 === e ? void 0 : e.proposer)
                          ? void 0
                          : t.publicKey;
                      })(e)
                    ? this.map.set(e.id, e)
                    : (function (e) {
                        return null === e || void 0 === e ? void 0 : e.topic;
                      })(e) && this.map.set(e.topic, e);
                }),
                (this.cached = []),
                (this.initialized = !0));
            }),
            (this.set = async (e, t) => {
              this.isInitialized(),
                this.map.has(e)
                  ? await this.update(e, t)
                  : (this.logger.debug("Setting value"),
                    this.logger.trace({
                      type: "method",
                      method: "set",
                      key: e,
                      value: t,
                    }),
                    this.map.set(e, t),
                    await this.persist());
            }),
            (this.get = (e) => (
              this.isInitialized(),
              this.logger.debug("Getting value"),
              this.logger.trace({ type: "method", method: "get", key: e }),
              this.getData(e)
            )),
            (this.getAll = (e) => (
              this.isInitialized(),
              e
                ? this.values.filter((t) =>
                    Object.keys(e).every((n) => _n()(t[n], e[n]))
                  )
                : this.values
            )),
            (this.update = async (e, t) => {
              this.isInitialized(),
                this.logger.debug("Updating value"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  key: e,
                  update: t,
                });
              const n = os(os({}, this.getData(e)), t);
              this.map.set(e, n), await this.persist();
            }),
            (this.delete = async (e, t) => {
              this.isInitialized(),
                this.map.has(e) &&
                  (this.logger.debug("Deleting value"),
                  this.logger.trace({
                    type: "method",
                    method: "delete",
                    key: e,
                    reason: t,
                  }),
                  this.map.delete(e),
                  await this.persist());
            }),
            (this.logger = (0, oe.generateChildLogger)(t, this.name)),
            (this.storagePrefix = r),
            (this.getKey = i);
        }
        get context() {
          return (0, oe.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.map.size;
        }
        get keys() {
          return Array.from(this.map.keys());
        }
        get values() {
          return Array.from(this.map.values());
        }
        async setDataStore(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getDataStore() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getData(e) {
          const t = this.map.get(e);
          if (!t) {
            const { message: t } = kt(
              "NO_MATCHING_KEY",
              "".concat(this.name, ": ").concat(e)
            );
            throw (this.logger.error(t), new Error(t));
          }
          return t;
        }
        async persist() {
          await this.setDataStore(this.values);
        }
        async restore() {
          try {
            const e = await this.getDataStore();
            if (typeof e > "u" || !e.length) return;
            if (this.map.size) {
              const { message: e } = kt("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(e), new Error(e));
            }
            (this.cached = e),
              this.logger.debug(
                "Successfully Restored value for ".concat(this.name)
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                value: this.values,
              });
          } catch (e) {
            this.logger.debug("Failed to Restore value for ".concat(this.name)),
              this.logger.error(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = kt("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
      }
      class cs {
        constructor(e, t) {
          (this.core = e),
            (this.logger = t),
            (this.name = "pairing"),
            (this.version = "0.3"),
            (this.events = new (i())()),
            (this.initialized = !1),
            (this.storagePrefix = Fr),
            (this.ignoredPayloadTypes = [1]),
            (this.registeredMethods = []),
            (this.init = async () => {
              this.initialized ||
                (await this.pairings.init(),
                await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                (this.initialized = !0),
                this.logger.trace("Initialized"));
            }),
            (this.register = (e) => {
              let { methods: t } = e;
              this.isInitialized(),
                (this.registeredMethods = [
                  ...new Set([...this.registeredMethods, ...t]),
                ]);
            }),
            (this.create = async () => {
              this.isInitialized();
              const e = Qe(),
                t = await this.core.crypto.setSymKey(e),
                n = It(l.FIVE_MINUTES),
                r = { protocol: "irn" },
                i = { topic: t, expiry: n, relay: r, active: !1 },
                s = Lt({
                  protocol: this.core.protocol,
                  version: this.core.version,
                  topic: t,
                  symKey: e,
                  relay: r,
                });
              return (
                await this.pairings.set(t, i),
                await this.core.relayer.subscribe(t),
                this.core.expirer.set(t, n),
                { topic: t, uri: s }
              );
            }),
            (this.pair = async (e) => {
              this.isInitialized(), this.isValidPair(e);
              const { topic: t, symKey: n, relay: r } = jt(e.uri);
              let i;
              if (
                this.pairings.keys.includes(t) &&
                ((i = this.pairings.get(t)), i.active)
              )
                throw new Error(
                  "Pairing already exists: ".concat(
                    t,
                    ". Please try again with a new connection URI."
                  )
                );
              const s = It(l.FIVE_MINUTES),
                o = { topic: t, relay: r, expiry: s, active: !1 };
              return (
                await this.pairings.set(t, o),
                this.core.expirer.set(t, s),
                e.activatePairing && (await this.activate({ topic: t })),
                this.events.emit(mi, o),
                this.core.crypto.keychain.has(t) ||
                  (await this.core.crypto.setSymKey(n, t),
                  await this.core.relayer.subscribe(t, { relay: r })),
                o
              );
            }),
            (this.activate = async (e) => {
              let { topic: t } = e;
              this.isInitialized();
              const n = It(l.THIRTY_DAYS);
              await this.pairings.update(t, { active: !0, expiry: n }),
                this.core.expirer.set(t, n);
            }),
            (this.ping = async (e) => {
              this.isInitialized(), await this.isValidPing(e);
              const { topic: t } = e;
              if (this.pairings.keys.includes(t)) {
                const e = await this.sendRequest(t, "wc_pairingPing", {}),
                  {
                    done: n,
                    resolve: r,
                    reject: i,
                  } = (function () {
                    let e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : l.FIVE_MINUTES,
                      t = arguments.length > 1 ? arguments[1] : void 0;
                    const n = (0, l.toMiliseconds)(e || l.FIVE_MINUTES);
                    let r, i, s;
                    return {
                      resolve: (e) => {
                        s && r && (clearTimeout(s), r(e));
                      },
                      reject: (e) => {
                        s && i && (clearTimeout(s), i(e));
                      },
                      done: () =>
                        new Promise((e, o) => {
                          (s = setTimeout(() => {
                            o(new Error(t));
                          }, n)),
                            (r = e),
                            (i = o);
                        }),
                    };
                  })();
                this.events.once(Pt("pairing_ping", e), (e) => {
                  let { error: t } = e;
                  t ? i(t) : r();
                }),
                  await n();
              }
            }),
            (this.updateExpiry = async (e) => {
              let { topic: t, expiry: n } = e;
              this.isInitialized(),
                await this.pairings.update(t, { expiry: n });
            }),
            (this.updateMetadata = async (e) => {
              let { topic: t, metadata: n } = e;
              this.isInitialized(),
                await this.pairings.update(t, { peerMetadata: n });
            }),
            (this.getPairings = () => (
              this.isInitialized(), this.pairings.values
            )),
            (this.disconnect = async (e) => {
              this.isInitialized(), await this.isValidDisconnect(e);
              const { topic: t } = e;
              this.pairings.keys.includes(t) &&
                (await this.sendRequest(
                  t,
                  "wc_pairingDelete",
                  zt("USER_DISCONNECTED")
                ),
                await this.deletePairing(t));
            }),
            (this.sendRequest = async (e, t, n) => {
              const r = nn(t, n),
                i = await this.core.crypto.encode(e, r),
                s = yi[t].req;
              return (
                this.core.history.set(e, r),
                this.core.relayer.publish(e, i, s),
                r.id
              );
            }),
            (this.sendResult = async (e, t, n) => {
              const r = rn(e, n),
                i = await this.core.crypto.encode(t, r),
                s = await this.core.history.get(t, e),
                o = yi[s.request.method].res;
              await this.core.relayer.publish(t, i, o),
                await this.core.history.resolve(r);
            }),
            (this.sendError = async (e, t, n) => {
              const r = sn(e, n),
                i = await this.core.crypto.encode(t, r),
                s = await this.core.history.get(t, e),
                o = yi[s.request.method]
                  ? yi[s.request.method].res
                  : yi.unregistered_method.res;
              await this.core.relayer.publish(t, i, o),
                await this.core.history.resolve(r);
            }),
            (this.deletePairing = async (e, t) => {
              await this.core.relayer.unsubscribe(e),
                await Promise.all([
                  this.pairings.delete(e, zt("USER_DISCONNECTED")),
                  this.core.crypto.deleteSymKey(e),
                  t ? Promise.resolve() : this.core.expirer.del(e),
                ]);
            }),
            (this.cleanup = async () => {
              const e = this.pairings.getAll().filter((e) => St(e.expiry));
              await Promise.all(e.map((e) => this.deletePairing(e.topic)));
            }),
            (this.onRelayEventRequest = (e) => {
              const { topic: t, payload: n } = e;
              switch (n.method) {
                case "wc_pairingPing":
                  return this.onPairingPingRequest(t, n);
                case "wc_pairingDelete":
                  return this.onPairingDeleteRequest(t, n);
                default:
                  return this.onUnknownRpcMethodRequest(t, n);
              }
            }),
            (this.onRelayEventResponse = async (e) => {
              const { topic: t, payload: n } = e,
                r = (await this.core.history.get(t, n.id)).request.method;
              return "wc_pairingPing" === r
                ? this.onPairingPingResponse(t, n)
                : this.onUnknownRpcMethodResponse(r);
            }),
            (this.onPairingPingRequest = async (e, t) => {
              const { id: n } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult(n, e, !0),
                  this.events.emit(bi, { id: n, topic: e });
              } catch (r) {
                await this.sendError(n, e, r), this.logger.error(r);
              }
            }),
            (this.onPairingPingResponse = (e, t) => {
              const { id: n } = t;
              setTimeout(() => {
                hn(t)
                  ? this.events.emit(Pt("pairing_ping", n), {})
                  : ln(t) &&
                    this.events.emit(Pt("pairing_ping", n), { error: t.error });
              }, 500);
            }),
            (this.onPairingDeleteRequest = async (e, t) => {
              const { id: n } = t;
              try {
                this.isValidDisconnect({ topic: e }),
                  await this.deletePairing(e),
                  this.events.emit(_i, { id: n, topic: e });
              } catch (r) {
                await this.sendError(n, e, r), this.logger.error(r);
              }
            }),
            (this.onUnknownRpcMethodRequest = async (e, t) => {
              const { id: n, method: r } = t;
              try {
                if (this.registeredMethods.includes(r)) return;
                const t = zt("WC_METHOD_UNSUPPORTED", r);
                await this.sendError(n, e, t), this.logger.error(t);
              } catch (i) {
                await this.sendError(n, e, i), this.logger.error(i);
              }
            }),
            (this.onUnknownRpcMethodResponse = (e) => {
              this.registeredMethods.includes(e) ||
                this.logger.error(zt("WC_METHOD_UNSUPPORTED", e));
            }),
            (this.isValidPair = (e) => {
              var t;
              if (!Bt(e)) {
                const { message: t } = kt(
                  "MISSING_OR_INVALID",
                  "pair() params: ".concat(e)
                );
                throw new Error(t);
              }
              if (
                !(function (e) {
                  if (Kt(e, !1))
                    try {
                      return typeof new URL(e) < "u";
                    } catch {
                      return !1;
                    }
                  return !1;
                })(e.uri)
              ) {
                const { message: t } = kt(
                  "MISSING_OR_INVALID",
                  "pair() uri: ".concat(e.uri)
                );
                throw new Error(t);
              }
              const n = jt(e.uri);
              if (
                null == (t = null === n || void 0 === n ? void 0 : n.relay) ||
                !t.protocol
              ) {
                const { message: e } = kt(
                  "MISSING_OR_INVALID",
                  "pair() uri#relay-protocol"
                );
                throw new Error(e);
              }
              if (null == n || !n.symKey) {
                const { message: e } = kt(
                  "MISSING_OR_INVALID",
                  "pair() uri#symKey"
                );
                throw new Error(e);
              }
            }),
            (this.isValidPing = async (e) => {
              if (!Bt(e)) {
                const { message: t } = kt(
                  "MISSING_OR_INVALID",
                  "ping() params: ".concat(e)
                );
                throw new Error(t);
              }
              const { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            (this.isValidDisconnect = async (e) => {
              if (!Bt(e)) {
                const { message: t } = kt(
                  "MISSING_OR_INVALID",
                  "disconnect() params: ".concat(e)
                );
                throw new Error(t);
              }
              const { topic: t } = e;
              await this.isValidPairingTopic(t);
            }),
            (this.isValidPairingTopic = async (e) => {
              if (!Kt(e, !1)) {
                const { message: t } = kt(
                  "MISSING_OR_INVALID",
                  "pairing topic should be a string: ".concat(e)
                );
                throw new Error(t);
              }
              if (!this.pairings.keys.includes(e)) {
                const { message: t } = kt(
                  "NO_MATCHING_KEY",
                  "pairing topic doesn't exist: ".concat(e)
                );
                throw new Error(t);
              }
              if (St(this.pairings.get(e).expiry)) {
                await this.deletePairing(e);
                const { message: t } = kt(
                  "EXPIRED",
                  "pairing topic: ".concat(e)
                );
                throw new Error(t);
              }
            }),
            (this.core = e),
            (this.logger = (0, oe.generateChildLogger)(t, this.name)),
            (this.pairings = new as(
              this.core,
              this.logger,
              this.name,
              this.storagePrefix
            ));
        }
        get context() {
          return (0, oe.getLoggerContext)(this.logger);
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = kt("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
        registerRelayerEvents() {
          this.core.relayer.on(ei, async (e) => {
            const { topic: t, message: n } = e;
            if (
              !this.pairings.keys.includes(t) ||
              this.ignoredPayloadTypes.includes(
                this.core.crypto.getPayloadType(n)
              )
            )
              return;
            const r = await this.core.crypto.decode(t, n);
            try {
              cn(r)
                ? (this.core.history.set(t, r),
                  this.onRelayEventRequest({ topic: t, payload: r }))
                : un(r) &&
                  (await this.core.history.resolve(r),
                  await this.onRelayEventResponse({ topic: t, payload: r }),
                  this.core.history.delete(t, r.id));
            } catch (ce) {
              this.logger.error(ce);
            }
          });
        }
        registerExpirerEvents() {
          this.core.expirer.on(Ni, async (e) => {
            const { topic: t } = (function (e) {
              const [t, n] = e.split(":"),
                r = { id: void 0, topic: void 0 };
              if ("topic" === t && "string" == typeof n) r.topic = n;
              else {
                if ("id" !== t || !Number.isInteger(Number(n)))
                  throw new Error(
                    "Invalid target, expected id:number or topic:string, got "
                      .concat(t, ":")
                      .concat(n)
                  );
                r.id = Number(n);
              }
              return r;
            })(e.target);
            t &&
              this.pairings.keys.includes(t) &&
              (await this.deletePairing(t, !0),
              this.events.emit(wi, { topic: t }));
          });
        }
      }
      class us extends ue {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            (this.records = new Map()),
            (this.events = new r.EventEmitter()),
            (this.name = "history"),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = Fr),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => this.records.set(e.id, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            (this.set = (e, t, n) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Setting JSON-RPC request history record"),
                this.logger.trace({
                  type: "method",
                  method: "set",
                  topic: e,
                  request: t,
                  chainId: n,
                }),
                this.records.has(t.id))
              )
                return;
              const r = {
                id: t.id,
                topic: e,
                request: { method: t.method, params: t.params || null },
                chainId: n,
                expiry: It(l.THIRTY_DAYS),
              };
              this.records.set(r.id, r), this.events.emit(Ei, r);
            }),
            (this.resolve = async (e) => {
              if (
                (this.isInitialized(),
                this.logger.debug("Updating JSON-RPC response history record"),
                this.logger.trace({
                  type: "method",
                  method: "update",
                  response: e,
                }),
                !this.records.has(e.id))
              )
                return;
              const t = await this.getRecord(e.id);
              typeof t.response > "u" &&
                ((t.response = ln(e)
                  ? { error: e.error }
                  : { result: e.result }),
                this.records.set(t.id, t),
                this.events.emit(Ii, t));
            }),
            (this.get = async (e, t) => (
              this.isInitialized(),
              this.logger.debug("Getting record"),
              this.logger.trace({
                type: "method",
                method: "get",
                topic: e,
                id: t,
              }),
              await this.getRecord(t)
            )),
            (this.delete = (e, t) => {
              this.isInitialized(),
                this.logger.debug("Deleting record"),
                this.logger.trace({ type: "method", method: "delete", id: t }),
                this.values.forEach((n) => {
                  if (n.topic === e) {
                    if (typeof t < "u" && n.id !== t) return;
                    this.records.delete(n.id), this.events.emit(Si, n);
                  }
                });
            }),
            (this.exists = async (e, t) => (
              this.isInitialized(),
              !!this.records.has(t) && (await this.getRecord(t)).topic === e
            )),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = (0, oe.generateChildLogger)(t, this.name));
        }
        get context() {
          return (0, oe.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get size() {
          return this.records.size;
        }
        get keys() {
          return Array.from(this.records.keys());
        }
        get values() {
          return Array.from(this.records.values());
        }
        get pending() {
          const e = [];
          return (
            this.values.forEach((t) => {
              if (typeof t.response < "u") return;
              const n = {
                topic: t.topic,
                request: nn(t.request.method, t.request.params, t.id),
                chainId: t.chainId,
              };
              return e.push(n);
            }),
            e
          );
        }
        async setJsonRpcRecords(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getJsonRpcRecords() {
          return await this.core.storage.getItem(this.storageKey);
        }
        getRecord(e) {
          this.isInitialized();
          const t = this.records.get(e);
          if (!t) {
            const { message: t } = kt(
              "NO_MATCHING_KEY",
              "".concat(this.name, ": ").concat(e)
            );
            throw new Error(t);
          }
          return t;
        }
        async persist() {
          await this.setJsonRpcRecords(this.values), this.events.emit(Pi);
        }
        async restore() {
          try {
            const e = await this.getJsonRpcRecords();
            if (typeof e > "u" || !e.length) return;
            if (this.records.size) {
              const { message: e } = kt("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(e), new Error(e));
            }
            (this.cached = e),
              this.logger.debug(
                "Successfully Restored records for ".concat(this.name)
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                records: this.values,
              });
          } catch (e) {
            this.logger.debug(
              "Failed to Restore records for ".concat(this.name)
            ),
              this.logger.error(e);
          }
        }
        registerEventListeners() {
          this.events.on(Ei, (e) => {
            const t = Ei;
            this.logger.info("Emitting ".concat(t)),
              this.logger.debug({ type: "event", event: t, record: e }),
              this.persist();
          }),
            this.events.on(Ii, (e) => {
              const t = Ii;
              this.logger.info("Emitting ".concat(t)),
                this.logger.debug({ type: "event", event: t, record: e }),
                this.persist();
            }),
            this.events.on(Si, (e) => {
              const t = Si;
              this.logger.info("Emitting ".concat(t)),
                this.logger.debug({ type: "event", event: t, record: e }),
                this.persist();
            }),
            this.core.heartbeat.on(se.HEARTBEAT_EVENTS.pulse, () => {
              this.cleanup();
            });
        }
        cleanup() {
          try {
            this.records.forEach((e) => {
              (0, l.toMiliseconds)(e.expiry || 0) - Date.now() <= 0 &&
                (this.logger.info(
                  "Deleting expired history log: ".concat(e.id)
                ),
                this.delete(e.topic, e.id));
            });
          } catch (e) {
            this.logger.warn(e);
          }
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = kt("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
      }
      class hs extends de {
        constructor(e, t) {
          super(e, t),
            (this.core = e),
            (this.logger = t),
            (this.expirations = new Map()),
            (this.events = new r.EventEmitter()),
            (this.name = "expirer"),
            (this.version = "0.3"),
            (this.cached = []),
            (this.initialized = !1),
            (this.storagePrefix = Fr),
            (this.init = async () => {
              this.initialized ||
                (this.logger.trace("Initialized"),
                await this.restore(),
                this.cached.forEach((e) => this.expirations.set(e.target, e)),
                (this.cached = []),
                this.registerEventListeners(),
                (this.initialized = !0));
            }),
            (this.has = (e) => {
              try {
                const t = this.formatTarget(e);
                return typeof this.getExpiration(t) < "u";
              } catch {
                return !1;
              }
            }),
            (this.set = (e, t) => {
              this.isInitialized();
              const n = this.formatTarget(e),
                r = { target: n, expiry: t };
              this.expirations.set(n, r),
                this.checkExpiry(n, r),
                this.events.emit(Oi, { target: n, expiration: r });
            }),
            (this.get = (e) => {
              this.isInitialized();
              const t = this.formatTarget(e);
              return this.getExpiration(t);
            }),
            (this.del = (e) => {
              if ((this.isInitialized(), this.has(e))) {
                const t = this.formatTarget(e),
                  n = this.getExpiration(t);
                this.expirations.delete(t),
                  this.events.emit(Ri, { target: t, expiration: n });
              }
            }),
            (this.on = (e, t) => {
              this.events.on(e, t);
            }),
            (this.once = (e, t) => {
              this.events.once(e, t);
            }),
            (this.off = (e, t) => {
              this.events.off(e, t);
            }),
            (this.removeListener = (e, t) => {
              this.events.removeListener(e, t);
            }),
            (this.logger = (0, oe.generateChildLogger)(t, this.name));
        }
        get context() {
          return (0, oe.getLoggerContext)(this.logger);
        }
        get storageKey() {
          return (
            this.storagePrefix +
            this.version +
            this.core.customStoragePrefix +
            "//" +
            this.name
          );
        }
        get length() {
          return this.expirations.size;
        }
        get keys() {
          return Array.from(this.expirations.keys());
        }
        get values() {
          return Array.from(this.expirations.values());
        }
        formatTarget(e) {
          if ("string" == typeof e)
            return (function (e) {
              return Et("topic", e);
            })(e);
          if ("number" == typeof e)
            return (function (e) {
              return Et("id", e);
            })(e);
          const { message: t } = kt(
            "UNKNOWN_TYPE",
            "Target type: ".concat(typeof e)
          );
          throw new Error(t);
        }
        async setExpirations(e) {
          await this.core.storage.setItem(this.storageKey, e);
        }
        async getExpirations() {
          return await this.core.storage.getItem(this.storageKey);
        }
        async persist() {
          await this.setExpirations(this.values), this.events.emit(Ti);
        }
        async restore() {
          try {
            const e = await this.getExpirations();
            if (typeof e > "u" || !e.length) return;
            if (this.expirations.size) {
              const { message: e } = kt("RESTORE_WILL_OVERRIDE", this.name);
              throw (this.logger.error(e), new Error(e));
            }
            (this.cached = e),
              this.logger.debug(
                "Successfully Restored expirations for ".concat(this.name)
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                expirations: this.values,
              });
          } catch (e) {
            this.logger.debug(
              "Failed to Restore expirations for ".concat(this.name)
            ),
              this.logger.error(e);
          }
        }
        getExpiration(e) {
          const t = this.expirations.get(e);
          if (!t) {
            const { message: t } = kt(
              "NO_MATCHING_KEY",
              "".concat(this.name, ": ").concat(e)
            );
            throw (this.logger.error(t), new Error(t));
          }
          return t;
        }
        checkExpiry(e, t) {
          const { expiry: n } = t;
          (0, l.toMiliseconds)(n) - Date.now() <= 0 && this.expire(e, t);
        }
        expire(e, t) {
          this.expirations.delete(e),
            this.events.emit(Ni, { target: e, expiration: t });
        }
        checkExpirations() {
          this.core.relayer.connected &&
            this.expirations.forEach((e, t) => this.checkExpiry(t, e));
        }
        registerEventListeners() {
          this.core.heartbeat.on(se.HEARTBEAT_EVENTS.pulse, () =>
            this.checkExpirations()
          ),
            this.events.on(Oi, (e) => {
              const t = Oi;
              this.logger.info("Emitting ".concat(t)),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            }),
            this.events.on(Ni, (e) => {
              const t = Ni;
              this.logger.info("Emitting ".concat(t)),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            }),
            this.events.on(Ri, (e) => {
              const t = Ri;
              this.logger.info("Emitting ".concat(t)),
                this.logger.debug({ type: "event", event: t, data: e }),
                this.persist();
            });
        }
        isInitialized() {
          if (!this.initialized) {
            const { message: e } = kt("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
        }
      }
      class ls extends class {
        constructor(e, t) {
          (this.projectId = e), (this.logger = t);
        }
      } {
        constructor(e, t) {
          super(e, t),
            (this.projectId = e),
            (this.logger = t),
            (this.name = Ai),
            (this.initialized = !1),
            (this.queue = []),
            (this.verifyDisabled = !1),
            (this.init = async (e) => {
              if (this.verifyDisabled || ft() || !gt()) return;
              const t = this.getVerifyUrl(
                null === e || void 0 === e ? void 0 : e.verifyUrl
              );
              this.verifyUrl !== t && this.removeIframe(), (this.verifyUrl = t);
              try {
                await this.createIframe();
              } catch (ce) {
                this.logger.info(
                  "Verify iframe failed to load: ".concat(this.verifyUrl)
                ),
                  this.logger.info(ce);
              }
              if (!this.initialized) {
                this.removeIframe(), (this.verifyUrl = xi);
                try {
                  await this.createIframe();
                } catch (ce) {
                  this.logger.info(
                    "Verify iframe failed to load: ".concat(this.verifyUrl)
                  ),
                    this.logger.info(ce),
                    (this.verifyDisabled = !0);
                }
              }
            }),
            (this.register = async (e) => {
              this.initialized
                ? this.sendPost(e.attestationId)
                : (this.addToQueue(e.attestationId), await this.init());
            }),
            (this.resolve = async (e) => {
              if (this.isDevEnv) return "";
              const t = this.getVerifyUrl(
                null === e || void 0 === e ? void 0 : e.verifyUrl
              );
              let n;
              try {
                n = await this.fetchAttestation(e.attestationId, t);
              } catch (r) {
                this.logger.info(
                  "failed to resolve attestation: "
                    .concat(e.attestationId, " from url: ")
                    .concat(t)
                ),
                  this.logger.info(r),
                  (n = await this.fetchAttestation(e.attestationId, xi));
              }
              return n;
            }),
            (this.fetchAttestation = async (e, t) => {
              this.logger.info(
                "resolving attestation: ".concat(e, " from url: ").concat(t)
              );
              const n = this.startAbortTimer(2 * l.ONE_SECOND),
                r = await fetch("".concat(t, "/attestation/").concat(e), {
                  signal: this.abortController.signal,
                });
              return (
                clearTimeout(n), 200 === r.status ? await r.json() : void 0
              );
            }),
            (this.addToQueue = (e) => {
              this.queue.push(e);
            }),
            (this.processQueue = () => {
              0 !== this.queue.length &&
                (this.queue.forEach((e) => this.sendPost(e)),
                (this.queue = []));
            }),
            (this.sendPost = (e) => {
              var t;
              try {
                if (!this.iframe) return;
                null == (t = this.iframe.contentWindow) ||
                  t.postMessage(e, "*"),
                  this.logger.info(
                    "postMessage sent: ".concat(e, " ").concat(this.verifyUrl)
                  );
              } catch {}
            }),
            (this.createIframe = async () => {
              let e;
              const t = (n) => {
                "verify_ready" === n.data &&
                  ((this.initialized = !0),
                  this.processQueue(),
                  window.removeEventListener("message", t),
                  e());
              };
              await Promise.race([
                new Promise((n) => {
                  if (document.getElementById(Ai)) return n();
                  window.addEventListener("message", t);
                  const r = document.createElement("iframe");
                  (r.id = Ai),
                    (r.src = ""
                      .concat(this.verifyUrl, "/")
                      .concat(this.projectId)),
                    (r.style.display = "none"),
                    document.body.append(r),
                    (this.iframe = r),
                    (e = n);
                }),
                new Promise((e, n) =>
                  setTimeout(() => {
                    window.removeEventListener("message", t),
                      n("verify iframe load timeout");
                  }, (0, l.toMiliseconds)(l.FIVE_SECONDS))
                ),
              ]);
            }),
            (this.removeIframe = () => {
              this.iframe &&
                (this.iframe.remove(),
                (this.iframe = void 0),
                (this.initialized = !1));
            }),
            (this.getVerifyUrl = (e) => {
              let t = e || Ci;
              return (
                Ui.includes(t) ||
                  (this.logger.info(
                    "verify url: "
                      .concat(
                        t,
                        ", not included in trusted list, assigning default: "
                      )
                      .concat(Ci)
                  ),
                  (t = Ci)),
                t
              );
            }),
            (this.logger = (0, oe.generateChildLogger)(t, this.name)),
            (this.verifyUrl = Ci),
            (this.abortController = new AbortController()),
            (this.isDevEnv =
              dt() &&
              {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
                REACT_APP_BSC_PAYMENT_CONTRACT:
                  "0x9fBC5B0Dc2C99BC4169524825f88015B8A7577b9",
                REACT_APP_GOERLI_PAYMENT_CONTRACT:
                  "0x9c093f7a0d973db8cf5e5f478d3a6a0bfb6ab470",
                REACT_APP_ETHEREUM_PAYMENT_CONTRACT:
                  "0x9fBC5B0Dc2C99BC4169524825f88015B8A7577b9",
                REACT_APP_WS_URL: "wss://multichain-socket.birdeye.so/",
                REACT_APP_PUBLIC_API_URL: "https://public-api.birdeye.so/",
                REACT_APP_TRADINGVIEW_STORAGE_URL:
                  "https://chart-storage.birdeye.so",
                REACT_APP_API_URL: "https://multichain-api.birdeye.so/",
              }.IS_VITEST);
        }
        get context() {
          return (0, oe.getLoggerContext)(this.logger);
        }
        startAbortTimer(e) {
          return (
            (this.abortController = new AbortController()),
            setTimeout(
              () => this.abortController.abort(),
              (0, l.toMiliseconds)(e)
            )
          );
        }
      }
      var ps = Object.defineProperty,
        ds = Object.getOwnPropertySymbols,
        fs = Object.prototype.hasOwnProperty,
        gs = Object.prototype.propertyIsEnumerable,
        vs = (e, t, n) =>
          t in e
            ? ps(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        ys = (e, t) => {
          for (var n in t || (t = {})) fs.call(t, n) && vs(e, n, t[n]);
          if (ds) for (var n of ds(t)) gs.call(t, n) && vs(e, n, t[n]);
          return e;
        };
      class ms extends ce {
        constructor(e) {
          super(e),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.name = Wr),
            (this.events = new r.EventEmitter()),
            (this.initialized = !1),
            (this.on = (e, t) => this.events.on(e, t)),
            (this.once = (e, t) => this.events.once(e, t)),
            (this.off = (e, t) => this.events.off(e, t)),
            (this.removeListener = (e, t) => this.events.removeListener(e, t)),
            (this.projectId =
              null === e || void 0 === e ? void 0 : e.projectId),
            (this.relayUrl =
              (null === e || void 0 === e ? void 0 : e.relayUrl) || Zr),
            (this.customStoragePrefix =
              null != e && e.customStoragePrefix
                ? ":".concat(e.customStoragePrefix)
                : "");
          const t =
            typeof (null === e || void 0 === e ? void 0 : e.logger) < "u" &&
            "string" != typeof (null === e || void 0 === e ? void 0 : e.logger)
              ? e.logger
              : (0, oe.pino)(
                  (0, oe.getDefaultLoggerOptions)({
                    level:
                      (null === e || void 0 === e ? void 0 : e.logger) || Gr,
                  })
                );
          (this.logger = (0, oe.generateChildLogger)(t, this.name)),
            (this.heartbeat = new se.HeartBeat()),
            (this.crypto = new Di(
              this,
              this.logger,
              null === e || void 0 === e ? void 0 : e.keychain
            )),
            (this.history = new us(this, this.logger)),
            (this.expirer = new hs(this, this.logger)),
            (this.storage =
              null != e && e.storage
                ? e.storage
                : new ie(
                    ys(
                      ys({}, Jr),
                      null === e || void 0 === e ? void 0 : e.storageOptions
                    )
                  )),
            (this.relayer = new es({
              core: this,
              logger: this.logger,
              relayUrl: this.relayUrl,
              projectId: this.projectId,
            })),
            (this.pairing = new cs(this, this.logger)),
            (this.verify = new ls(this.projectId || "", this.logger));
        }
        static async init(e) {
          const t = new ms(e);
          await t.initialize();
          const n = await t.crypto.getClientId();
          return await t.storage.setItem("WALLETCONNECT_CLIENT_ID", n), t;
        }
        get context() {
          return (0, oe.getLoggerContext)(this.logger);
        }
        async start() {
          this.initialized || (await this.initialize());
        }
        async initialize() {
          this.logger.trace("Initialized");
          try {
            await this.crypto.init(),
              await this.history.init(),
              await this.expirer.init(),
              await this.relayer.init(),
              await this.heartbeat.init(),
              await this.pairing.init(),
              (this.initialized = !0),
              this.logger.info("Core Initialization Success");
          } catch (e) {
            throw (
              (this.logger.warn(
                "Core Initialization Failure at epoch ".concat(Date.now()),
                e
              ),
              this.logger.error(e.message),
              e)
            );
          }
        }
      }
      const ws = ms;
      var _s = n(7490);
      function bs(e, t) {
        return e.includes(":") ? [e] : t.chains || [];
      }
      const Es = "base16",
        Is = "utf8";
      function Ss(e) {
        const t = (0, c.vp)((0, h.mL)(e, Is));
        return (0, h.BB)(t, Es);
      }
      Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      const Ps = "react-native",
        Os = "node",
        Rs = "browser",
        Ns = "unknown";
      function Ts() {
        return (
          typeof _s < "u" &&
          typeof _s.versions < "u" &&
          typeof _s.versions.node < "u"
        );
      }
      function As() {
        return (
          !(0, p.getDocument)() &&
          !!(0, p.getNavigator)() &&
          "ReactNative" === navigator.product
        );
      }
      function Cs() {
        return !Ts() && !!(0, p.getNavigator)();
      }
      function xs() {
        return As() ? Ps : Ts() ? Os : Cs() ? Rs : Ns;
      }
      function Us(e, t) {
        return e.filter((e) => t.includes(e)).length === e.length;
      }
      function js() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : l.FIVE_MINUTES,
          t = arguments.length > 1 ? arguments[1] : void 0;
        const n = (0, l.toMiliseconds)(e || l.FIVE_MINUTES);
        let r, i, s;
        return {
          resolve: (e) => {
            s && r && (clearTimeout(s), r(e));
          },
          reject: (e) => {
            s && i && (clearTimeout(s), i(e));
          },
          done: () =>
            new Promise((e, o) => {
              (s = setTimeout(() => {
                o(new Error(t));
              }, n)),
                (r = e),
                (i = o);
            }),
        };
      }
      function Ds(e, t) {
        return (0, l.fromMiliseconds)(
          (t || Date.now()) + (0, l.toMiliseconds)(e)
        );
      }
      function Ls(e) {
        return Date.now() >= (0, l.toMiliseconds)(e);
      }
      function Ms(e, t) {
        return "".concat(e).concat(t ? ":".concat(t) : "");
      }
      Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      Object.defineProperty,
        Object.defineProperties,
        Object.getOwnPropertyDescriptors,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      function qs(e) {
        const t = [];
        return (
          e.forEach((e) => {
            const [n, r] = e.split(":");
            t.push("".concat(n, ":").concat(r));
          }),
          t
        );
      }
      const ks = {
          INVALID_METHOD: { message: "Invalid method.", code: 1001 },
          INVALID_EVENT: { message: "Invalid event.", code: 1002 },
          INVALID_UPDATE_REQUEST: {
            message: "Invalid update request.",
            code: 1003,
          },
          INVALID_EXTEND_REQUEST: {
            message: "Invalid extend request.",
            code: 1004,
          },
          INVALID_SESSION_SETTLE_REQUEST: {
            message: "Invalid session settle request.",
            code: 1005,
          },
          UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
          UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
          UNAUTHORIZED_UPDATE_REQUEST: {
            message: "Unauthorized update request.",
            code: 3003,
          },
          UNAUTHORIZED_EXTEND_REQUEST: {
            message: "Unauthorized extend request.",
            code: 3004,
          },
          USER_REJECTED: { message: "User rejected.", code: 5e3 },
          USER_REJECTED_CHAINS: {
            message: "User rejected chains.",
            code: 5001,
          },
          USER_REJECTED_METHODS: {
            message: "User rejected methods.",
            code: 5002,
          },
          USER_REJECTED_EVENTS: {
            message: "User rejected events.",
            code: 5003,
          },
          UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
          UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
          UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
          UNSUPPORTED_ACCOUNTS: {
            message: "Unsupported accounts.",
            code: 5103,
          },
          UNSUPPORTED_NAMESPACE_KEY: {
            message: "Unsupported namespace key.",
            code: 5104,
          },
          USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
          SESSION_SETTLEMENT_FAILED: {
            message: "Session settlement failed.",
            code: 7e3,
          },
          WC_METHOD_UNSUPPORTED: {
            message: "Unsupported wc_ method.",
            code: 10001,
          },
        },
        zs = {
          NOT_INITIALIZED: { message: "Not initialized.", code: 1 },
          NO_MATCHING_KEY: { message: "No matching key.", code: 2 },
          RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 },
          RESUBSCRIBED: { message: "Resubscribed.", code: 4 },
          MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 },
          EXPIRED: { message: "Expired.", code: 6 },
          UNKNOWN_TYPE: { message: "Unknown type.", code: 7 },
          MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 },
          NON_CONFORMING_NAMESPACES: {
            message: "Non conforming namespaces.",
            code: 9,
          },
        };
      function Hs(e, t) {
        const { message: n, code: r } = zs[e];
        return { message: t ? "".concat(n, " ").concat(t) : n, code: r };
      }
      function Vs(e, t) {
        const { message: n, code: r } = ks[e];
        return { message: t ? "".concat(n, " ").concat(t) : n, code: r };
      }
      function Ks(e, t) {
        return (
          !!Array.isArray(e) && (!(typeof t < "u" && e.length) || e.every(t))
        );
      }
      function Bs(e) {
        return (
          Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length
        );
      }
      function Ws(e) {
        return typeof e > "u";
      }
      function Fs(e, t) {
        return !(!t || !Ws(e)) || ("string" == typeof e && !!e.trim().length);
      }
      function Gs(e, t) {
        return !(!t || !Ws(e)) || ("number" == typeof e && !isNaN(e));
      }
      function Js(e) {
        return !(!Fs(e, !1) || !e.includes(":")) && 2 === e.split(":").length;
      }
      function Qs(e) {
        let t = !0;
        return (
          Ks(e) ? e.length && (t = e.every((e) => Fs(e, !1))) : (t = !1), t
        );
      }
      function Ys(e, t, n) {
        let r = null;
        return (
          Object.entries(e).forEach((e) => {
            let [i, s] = e;
            if (r) return;
            const o = (function (e, t, n) {
              let r = null;
              return (
                Ks(t) && t.length
                  ? t.forEach((e) => {
                      r ||
                        Js(e) ||
                        (r = Vs(
                          "UNSUPPORTED_CHAINS",
                          ""
                            .concat(n, ", chain ")
                            .concat(
                              e,
                              ' should be a string and conform to "namespace:chainId" format'
                            )
                        ));
                    })
                  : Js(e) ||
                    (r = Vs(
                      "UNSUPPORTED_CHAINS",
                      "".concat(
                        n,
                        ', chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }'
                      )
                    )),
                r
              );
            })(i, bs(i, s), "".concat(t, " ").concat(n));
            o && (r = o);
          }),
          r
        );
      }
      function $s(e, t) {
        let n = null;
        return (
          Ks(e)
            ? e.forEach((e) => {
                n ||
                  (function (e) {
                    if (Fs(e, !1) && e.includes(":")) {
                      const t = e.split(":");
                      if (3 === t.length) {
                        const e = t[0] + ":" + t[1];
                        return !!t[2] && Js(e);
                      }
                    }
                    return !1;
                  })(e) ||
                  (n = Vs(
                    "UNSUPPORTED_ACCOUNTS",
                    ""
                      .concat(t, ", account ")
                      .concat(
                        e,
                        ' should be a string and conform to "namespace:chainId:address" format'
                      )
                  ));
              })
            : (n = Vs(
                "UNSUPPORTED_ACCOUNTS",
                "".concat(
                  t,
                  ', accounts should be an array of strings conforming to "namespace:chainId:address" format'
                )
              )),
          n
        );
      }
      function Zs(e, t) {
        let n = null;
        return (
          Object.values(e).forEach((e) => {
            if (n) return;
            const r = (function (e, t) {
              let n = null;
              return (
                Qs(null === e || void 0 === e ? void 0 : e.methods)
                  ? Qs(null === e || void 0 === e ? void 0 : e.events) ||
                    (n = Vs(
                      "UNSUPPORTED_EVENTS",
                      "".concat(
                        t,
                        ", events should be an array of strings or empty array for no events"
                      )
                    ))
                  : (n = Vs(
                      "UNSUPPORTED_METHODS",
                      "".concat(
                        t,
                        ", methods should be an array of strings or empty array for no methods"
                      )
                    )),
                n
              );
            })(e, "".concat(t, ", namespace"));
            r && (n = r);
          }),
          n
        );
      }
      function Xs(e, t) {
        let n = null;
        if (e && Bs(e)) {
          const r = Zs(e, t);
          r && (n = r);
          const i = (function (e, t) {
            let n = null;
            return (
              Object.values(e).forEach((e) => {
                if (n) return;
                const r = $s(
                  null === e || void 0 === e ? void 0 : e.accounts,
                  "".concat(t, " namespace")
                );
                r && (n = r);
              }),
              n
            );
          })(e, t);
          i && (n = i);
        } else
          n = Hs(
            "MISSING_OR_INVALID",
            "".concat(t, ", namespaces should be an object with data")
          );
        return n;
      }
      function eo(e) {
        return Fs(e.protocol, !0);
      }
      function to(e) {
        return typeof e < "u" && null !== typeof e;
      }
      function no(e, t) {
        return !(
          !Js(t) ||
          !(function (e) {
            const t = [];
            return (
              Object.values(e).forEach((e) => {
                t.push(...qs(e.accounts));
              }),
              t
            );
          })(e).includes(t)
        );
      }
      function ro(e, t, n) {
        return (
          !!Fs(n, !1) &&
          (function (e, t) {
            const n = [];
            return (
              Object.values(e).forEach((e) => {
                qs(e.accounts).includes(t) && n.push(...e.methods);
              }),
              n
            );
          })(e, t).includes(n)
        );
      }
      function io(e, t, n) {
        return (
          !!Fs(n, !1) &&
          (function (e, t) {
            const n = [];
            return (
              Object.values(e).forEach((e) => {
                qs(e.accounts).includes(t) && n.push(...e.events);
              }),
              n
            );
          })(e, t).includes(n)
        );
      }
      function so(e, t, n) {
        let r = null;
        const i = (function (e) {
            const t = {};
            return (
              Object.keys(e).forEach((n) => {
                var r;
                n.includes(":")
                  ? (t[n] = e[n])
                  : null == (r = e[n].chains) ||
                    r.forEach((r) => {
                      t[r] = { methods: e[n].methods, events: e[n].events };
                    });
              }),
              t
            );
          })(e),
          s = (function (e) {
            const t = {};
            return (
              Object.keys(e).forEach((n) => {
                if (n.includes(":")) t[n] = e[n];
                else {
                  const r = qs(e[n].accounts);
                  null === r ||
                    void 0 === r ||
                    r.forEach((r) => {
                      t[r] = {
                        accounts: e[n].accounts.filter((e) =>
                          e.includes("".concat(r, ":"))
                        ),
                        methods: e[n].methods,
                        events: e[n].events,
                      };
                    });
                }
              }),
              t
            );
          })(t),
          o = Object.keys(i),
          a = Object.keys(s),
          c = oo(Object.keys(e)),
          u = oo(Object.keys(t)),
          h = c.filter((e) => !u.includes(e));
        return (
          h.length &&
            (r = Hs(
              "NON_CONFORMING_NAMESPACES",
              ""
                .concat(
                  n,
                  " namespaces keys don't satisfy requiredNamespaces.\n      Required: "
                )
                .concat(h.toString(), "\n      Received: ")
                .concat(Object.keys(t).toString())
            )),
          Us(o, a) ||
            (r = Hs(
              "NON_CONFORMING_NAMESPACES",
              ""
                .concat(
                  n,
                  " namespaces chains don't satisfy required namespaces.\n      Required: "
                )
                .concat(o.toString(), "\n      Approved: ")
                .concat(a.toString())
            )),
          Object.keys(t).forEach((e) => {
            if (!e.includes(":") || r) return;
            const i = qs(t[e].accounts);
            i.includes(e) ||
              (r = Hs(
                "NON_CONFORMING_NAMESPACES",
                ""
                  .concat(
                    n,
                    " namespaces accounts don't satisfy namespace accounts for "
                  )
                  .concat(e, "\n        Required: ")
                  .concat(e, "\n        Approved: ")
                  .concat(i.toString())
              ));
          }),
          o.forEach((e) => {
            r ||
              (Us(i[e].methods, s[e].methods)
                ? Us(i[e].events, s[e].events) ||
                  (r = Hs(
                    "NON_CONFORMING_NAMESPACES",
                    ""
                      .concat(
                        n,
                        " namespaces events don't satisfy namespace events for "
                      )
                      .concat(e)
                  ))
                : (r = Hs(
                    "NON_CONFORMING_NAMESPACES",
                    ""
                      .concat(
                        n,
                        " namespaces methods don't satisfy namespace methods for "
                      )
                      .concat(e)
                  )));
          }),
          r
        );
      }
      function oo(e) {
        return [
          ...new Set(e.map((e) => (e.includes(":") ? e.split(":")[0] : e))),
        ];
      }
      const ao = {};
      class co {
        static get(e) {
          return ao[e];
        }
        static set(e, t) {
          ao[e] = t;
        }
        static delete(e) {
          delete ao[e];
        }
      }
      const uo = "client",
        ho = "".concat("wc", "@").concat(2, ":").concat(uo, ":"),
        lo = uo,
        po = "error",
        fo = "WALLETCONNECT_DEEPLINK_CHOICE",
        go = "Proposal expired",
        vo = l.SEVEN_DAYS,
        yo = {
          wc_sessionPropose: {
            req: { ttl: l.FIVE_MINUTES, prompt: !0, tag: 1100 },
            res: { ttl: l.FIVE_MINUTES, prompt: !1, tag: 1101 },
          },
          wc_sessionSettle: {
            req: { ttl: l.FIVE_MINUTES, prompt: !1, tag: 1102 },
            res: { ttl: l.FIVE_MINUTES, prompt: !1, tag: 1103 },
          },
          wc_sessionUpdate: {
            req: { ttl: l.ONE_DAY, prompt: !1, tag: 1104 },
            res: { ttl: l.ONE_DAY, prompt: !1, tag: 1105 },
          },
          wc_sessionExtend: {
            req: { ttl: l.ONE_DAY, prompt: !1, tag: 1106 },
            res: { ttl: l.ONE_DAY, prompt: !1, tag: 1107 },
          },
          wc_sessionRequest: {
            req: { ttl: l.FIVE_MINUTES, prompt: !0, tag: 1108 },
            res: { ttl: l.FIVE_MINUTES, prompt: !1, tag: 1109 },
          },
          wc_sessionEvent: {
            req: { ttl: l.FIVE_MINUTES, prompt: !0, tag: 1110 },
            res: { ttl: l.FIVE_MINUTES, prompt: !1, tag: 1111 },
          },
          wc_sessionDelete: {
            req: { ttl: l.ONE_DAY, prompt: !1, tag: 1112 },
            res: { ttl: l.ONE_DAY, prompt: !1, tag: 1113 },
          },
          wc_sessionPing: {
            req: { ttl: l.THIRTY_SECONDS, prompt: !1, tag: 1114 },
            res: { ttl: l.THIRTY_SECONDS, prompt: !1, tag: 1115 },
          },
        },
        mo = { min: l.FIVE_MINUTES, max: l.SEVEN_DAYS },
        wo = "IDLE",
        _o = "ACTIVE",
        bo = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
      var Eo = Object.defineProperty,
        Io = Object.defineProperties,
        So = Object.getOwnPropertyDescriptors,
        Po = Object.getOwnPropertySymbols,
        Oo = Object.prototype.hasOwnProperty,
        Ro = Object.prototype.propertyIsEnumerable,
        No = (e, t, n) =>
          t in e
            ? Eo(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        To = (e, t) => {
          for (var n in t || (t = {})) Oo.call(t, n) && No(e, n, t[n]);
          if (Po) for (var n of Po(t)) Ro.call(t, n) && No(e, n, t[n]);
          return e;
        },
        Ao = (e, t) => Io(e, So(t));
      class Co extends class {
        constructor(e) {
          this.client = e;
        }
      } {
        constructor(e) {
          var t;
          super(e),
            (t = this),
            (this.name = "engine"),
            (this.events = new (i())()),
            (this.initialized = !1),
            (this.ignoredPayloadTypes = [1]),
            (this.requestQueue = { state: wo, queue: [] }),
            (this.sessionRequestQueue = { state: wo, queue: [] }),
            (this.requestQueueDelay = l.ONE_SECOND),
            (this.init = async () => {
              this.initialized ||
                (await this.cleanup(),
                this.registerRelayerEvents(),
                this.registerExpirerEvents(),
                this.registerPairingEvents(),
                this.client.core.pairing.register({ methods: Object.keys(yo) }),
                (this.initialized = !0),
                setTimeout(() => {
                  (this.sessionRequestQueue.queue =
                    this.getPendingSessionRequests()),
                    this.processSessionRequestQueue();
                }, (0, l.toMiliseconds)(this.requestQueueDelay)));
            }),
            (this.connect = async (e) => {
              await this.isInitialized();
              const t = Ao(To({}, e), {
                requiredNamespaces: e.requiredNamespaces || {},
                optionalNamespaces: e.optionalNamespaces || {},
              });
              await this.isValidConnect(t);
              const {
                pairingTopic: n,
                requiredNamespaces: r,
                optionalNamespaces: i,
                sessionProperties: s,
                relays: o,
              } = t;
              let a,
                c = n,
                u = !1;
              if (
                (c && (u = this.client.core.pairing.pairings.get(c).active),
                !c || !u)
              ) {
                const { topic: e, uri: t } =
                  await this.client.core.pairing.create();
                (c = e), (a = t);
              }
              const h = await this.client.core.crypto.generateKeyPair(),
                p = To(
                  {
                    requiredNamespaces: r,
                    optionalNamespaces: i,
                    relays:
                      null !== o && void 0 !== o ? o : [{ protocol: "irn" }],
                    proposer: { publicKey: h, metadata: this.client.metadata },
                  },
                  s && { sessionProperties: s }
                ),
                { reject: d, resolve: f, done: g } = js(l.FIVE_MINUTES, go);
              if (
                (this.events.once(Ms("session_connect"), async (e) => {
                  let { error: t, session: n } = e;
                  if (t) d(t);
                  else if (n) {
                    n.self.publicKey = h;
                    const e = Ao(To({}, n), {
                      requiredNamespaces: n.requiredNamespaces,
                      optionalNamespaces: n.optionalNamespaces,
                    });
                    await this.client.session.set(n.topic, e),
                      await this.setExpiry(n.topic, n.expiry),
                      c &&
                        (await this.client.core.pairing.updateMetadata({
                          topic: c,
                          metadata: n.peer.metadata,
                        })),
                      f(e);
                  }
                }),
                !c)
              ) {
                const { message: e } = Hs(
                  "NO_MATCHING_KEY",
                  "connect() pairing topic: ".concat(c)
                );
                throw new Error(e);
              }
              const v = await this.sendRequest({
                  topic: c,
                  method: "wc_sessionPropose",
                  params: p,
                }),
                y = Ds(l.FIVE_MINUTES);
              return (
                await this.setProposal(v, To({ id: v, expiry: y }, p)),
                { uri: a, approval: g }
              );
            }),
            (this.pair = async (e) => (
              await this.isInitialized(), await this.client.core.pairing.pair(e)
            )),
            (this.approve = async (e) => {
              await this.isInitialized(), await this.isValidApprove(e);
              const {
                  id: t,
                  relayProtocol: n,
                  namespaces: r,
                  sessionProperties: i,
                } = e,
                s = this.client.proposal.get(t);
              let {
                pairingTopic: o,
                proposer: a,
                requiredNamespaces: c,
                optionalNamespaces: u,
              } = s;
              (o = o || ""),
                Bs(c) ||
                  (c = (function (e, t) {
                    const n = Xs(e, t);
                    if (n) throw new Error(n.message);
                    const r = {};
                    for (const [i, s] of Object.entries(e))
                      r[i] = {
                        methods: s.methods,
                        events: s.events,
                        chains: s.accounts.map((e) =>
                          ""
                            .concat(e.split(":")[0], ":")
                            .concat(e.split(":")[1])
                        ),
                      };
                    return r;
                  })(r, "approve()"));
              const h = await this.client.core.crypto.generateKeyPair(),
                l = a.publicKey,
                p = await this.client.core.crypto.generateSharedKey(h, l);
              o &&
                t &&
                (await this.client.core.pairing.updateMetadata({
                  topic: o,
                  metadata: a.metadata,
                }),
                await this.sendResult({
                  id: t,
                  topic: o,
                  result: {
                    relay: { protocol: null !== n && void 0 !== n ? n : "irn" },
                    responderPublicKey: h,
                  },
                }),
                await this.client.proposal.delete(t, Vs("USER_DISCONNECTED")),
                await this.client.core.pairing.activate({ topic: o }));
              const d = To(
                {
                  relay: { protocol: null !== n && void 0 !== n ? n : "irn" },
                  namespaces: r,
                  requiredNamespaces: c,
                  optionalNamespaces: u,
                  pairingTopic: o,
                  controller: { publicKey: h, metadata: this.client.metadata },
                  expiry: Ds(vo),
                },
                i && { sessionProperties: i }
              );
              await this.client.core.relayer.subscribe(p),
                await this.sendRequest({
                  topic: p,
                  method: "wc_sessionSettle",
                  params: d,
                  throwOnFailedPublish: !0,
                });
              const f = Ao(To({}, d), {
                topic: p,
                pairingTopic: o,
                acknowledged: !1,
                self: d.controller,
                peer: { publicKey: a.publicKey, metadata: a.metadata },
                controller: h,
              });
              return (
                await this.client.session.set(p, f),
                await this.setExpiry(p, Ds(vo)),
                {
                  topic: p,
                  acknowledged: () =>
                    new Promise((e) =>
                      setTimeout(() => e(this.client.session.get(p)), 500)
                    ),
                }
              );
            }),
            (this.reject = async (e) => {
              await this.isInitialized(), await this.isValidReject(e);
              const { id: t, reason: n } = e,
                { pairingTopic: r } = this.client.proposal.get(t);
              r &&
                (await this.sendError(t, r, n),
                await this.client.proposal.delete(t, Vs("USER_DISCONNECTED")));
            }),
            (this.update = async (e) => {
              await this.isInitialized(), await this.isValidUpdate(e);
              const { topic: t, namespaces: n } = e,
                r = await this.sendRequest({
                  topic: t,
                  method: "wc_sessionUpdate",
                  params: { namespaces: n },
                }),
                { done: i, resolve: s, reject: o } = js();
              return (
                this.events.once(Ms("session_update", r), (e) => {
                  let { error: t } = e;
                  t ? o(t) : s();
                }),
                await this.client.session.update(t, { namespaces: n }),
                { acknowledged: i }
              );
            }),
            (this.extend = async (e) => {
              await this.isInitialized(), await this.isValidExtend(e);
              const { topic: t } = e,
                n = await this.sendRequest({
                  topic: t,
                  method: "wc_sessionExtend",
                  params: {},
                }),
                { done: r, resolve: i, reject: s } = js();
              return (
                this.events.once(Ms("session_extend", n), (e) => {
                  let { error: t } = e;
                  t ? s(t) : i();
                }),
                await this.setExpiry(t, Ds(vo)),
                { acknowledged: r }
              );
            }),
            (this.request = async (t) => {
              await this.isInitialized(), await this.isValidRequest(t);
              const { chainId: r, request: i, topic: s, expiry: o } = t,
                a = en(),
                {
                  done: c,
                  resolve: u,
                  reject: h,
                } = js(o, "Request expired. Please try again.");
              return (
                this.events.once(Ms("session_request", a), (e) => {
                  let { error: t, result: n } = e;
                  t ? h(t) : u(n);
                }),
                await Promise.all([
                  new Promise(async (e) => {
                    await this.sendRequest({
                      clientRpcId: a,
                      topic: s,
                      method: "wc_sessionRequest",
                      params: { request: i, chainId: r },
                      expiry: o,
                      throwOnFailedPublish: !0,
                    }).catch((e) => h(e)),
                      this.client.events.emit("session_request_sent", {
                        topic: s,
                        request: i,
                        chainId: r,
                        id: a,
                      }),
                      e();
                  }),
                  new Promise(async (t) => {
                    const r = await (async function (e, t) {
                      try {
                        return (
                          (await e.getItem(t)) ||
                          (Cs() ? localStorage.getItem(t) : void 0)
                        );
                      } catch (i) {
                        console.error(i);
                      }
                    })(this.client.core.storage, fo);
                    (async function (t) {
                      let { id: r, topic: i, wcDeepLink: s } = t;
                      try {
                        if (!s) return;
                        const e = "string" == typeof s ? JSON.parse(s) : s;
                        let t = null === e || void 0 === e ? void 0 : e.href;
                        if ("string" != typeof t) return;
                        t.endsWith("/") && (t = t.slice(0, -1));
                        const o = ""
                            .concat(t, "/wc?requestId=")
                            .concat(r, "&sessionTopic=")
                            .concat(i),
                          a = xs();
                        a === Rs
                          ? o.startsWith("https://")
                            ? window.open(o, "_blank", "noreferrer noopener")
                            : window.open(o, "_self", "noreferrer noopener")
                          : a === Ps &&
                            typeof (null == n.g ? void 0 : n.g.Linking) < "u" &&
                            (await n.g.Linking.openURL(o));
                      } catch (e) {
                        console.error(e);
                      }
                    })({ id: a, topic: s, wcDeepLink: r }),
                      t();
                  }),
                  c(),
                ]).then((e) => e[2])
              );
            }),
            (this.respond = async (e) => {
              await this.isInitialized(), await this.isValidRespond(e);
              const { topic: t, response: n } = e,
                { id: r } = n;
              hn(n)
                ? await this.sendResult({
                    id: r,
                    topic: t,
                    result: n.result,
                    throwOnFailedPublish: !0,
                  })
                : ln(n) && (await this.sendError(r, t, n.error)),
                this.cleanupAfterResponse(e);
            }),
            (this.ping = async (e) => {
              await this.isInitialized(), await this.isValidPing(e);
              const { topic: t } = e;
              if (this.client.session.keys.includes(t)) {
                const e = await this.sendRequest({
                    topic: t,
                    method: "wc_sessionPing",
                    params: {},
                  }),
                  { done: n, resolve: r, reject: i } = js();
                this.events.once(Ms("session_ping", e), (e) => {
                  let { error: t } = e;
                  t ? i(t) : r();
                }),
                  await n();
              } else
                this.client.core.pairing.pairings.keys.includes(t) &&
                  (await this.client.core.pairing.ping({ topic: t }));
            }),
            (this.emit = async (e) => {
              await this.isInitialized(), await this.isValidEmit(e);
              const { topic: t, event: n, chainId: r } = e;
              await this.sendRequest({
                topic: t,
                method: "wc_sessionEvent",
                params: { event: n, chainId: r },
              });
            }),
            (this.disconnect = async (e) => {
              await this.isInitialized(), await this.isValidDisconnect(e);
              const { topic: t } = e;
              this.client.session.keys.includes(t)
                ? (await this.sendRequest({
                    topic: t,
                    method: "wc_sessionDelete",
                    params: Vs("USER_DISCONNECTED"),
                    throwOnFailedPublish: !0,
                  }),
                  await this.deleteSession(t))
                : await this.client.core.pairing.disconnect({ topic: t });
            }),
            (this.find = (e) => (
              this.isInitialized(),
              this.client.session.getAll().filter((t) =>
                (function (e, t) {
                  const { requiredNamespaces: n } = t,
                    r = Object.keys(e.namespaces),
                    i = Object.keys(n);
                  let s = !0;
                  return (
                    !!Us(i, r) &&
                    (r.forEach((t) => {
                      const {
                          accounts: r,
                          methods: i,
                          events: o,
                        } = e.namespaces[t],
                        a = qs(r),
                        c = n[t];
                      (!Us(bs(t, c), a) ||
                        !Us(c.methods, i) ||
                        !Us(c.events, o)) &&
                        (s = !1);
                    }),
                    s)
                  );
                })(t, e)
              )
            )),
            (this.getPendingSessionRequests = () => (
              this.isInitialized(), this.client.pendingRequest.getAll()
            )),
            (this.cleanupDuplicatePairings = async (e) => {
              if (e.pairingTopic)
                try {
                  const t = this.client.core.pairing.pairings.get(
                      e.pairingTopic
                    ),
                    n = this.client.core.pairing.pairings
                      .getAll()
                      .filter((n) => {
                        var r, i;
                        return (
                          (null == (r = n.peerMetadata) ? void 0 : r.url) &&
                          (null == (i = n.peerMetadata) ? void 0 : i.url) ===
                            e.peer.metadata.url &&
                          n.topic &&
                          n.topic !== t.topic
                        );
                      });
                  if (0 === n.length) return;
                  this.client.logger.info(
                    "Cleaning up ".concat(n.length, " duplicate pairing(s)")
                  ),
                    await Promise.all(
                      n.map((e) =>
                        this.client.core.pairing.disconnect({ topic: e.topic })
                      )
                    ),
                    this.client.logger.info(
                      "Duplicate pairings clean up finished"
                    );
                } catch (t) {
                  this.client.logger.error(t);
                }
            }),
            (this.deleteSession = async (e, t) => {
              const { self: n } = this.client.session.get(e);
              await this.client.core.relayer.unsubscribe(e),
                this.client.session.delete(e, Vs("USER_DISCONNECTED")),
                this.client.core.crypto.keychain.has(n.publicKey) &&
                  (await this.client.core.crypto.deleteKeyPair(n.publicKey)),
                this.client.core.crypto.keychain.has(e) &&
                  (await this.client.core.crypto.deleteSymKey(e)),
                t || this.client.core.expirer.del(e),
                this.client.core.storage
                  .removeItem(fo)
                  .catch((e) => this.client.logger.warn(e));
            }),
            (this.deleteProposal = async (e, t) => {
              await Promise.all([
                this.client.proposal.delete(e, Vs("USER_DISCONNECTED")),
                t ? Promise.resolve() : this.client.core.expirer.del(e),
              ]);
            }),
            (this.deletePendingSessionRequest = async function (e, n) {
              let r =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              await Promise.all([
                t.client.pendingRequest.delete(e, n),
                r ? Promise.resolve() : t.client.core.expirer.del(e),
              ]),
                (t.sessionRequestQueue.queue =
                  t.sessionRequestQueue.queue.filter((t) => t.id !== e)),
                r && (t.sessionRequestQueue.state = wo);
            }),
            (this.setExpiry = async (e, t) => {
              this.client.session.keys.includes(e) &&
                (await this.client.session.update(e, { expiry: t })),
                this.client.core.expirer.set(e, t);
            }),
            (this.setProposal = async (e, t) => {
              await this.client.proposal.set(e, t),
                this.client.core.expirer.set(e, t.expiry);
            }),
            (this.setPendingSessionRequest = async (e) => {
              const t = yo.wc_sessionRequest.req.ttl,
                { id: n, topic: r, params: i, verifyContext: s } = e;
              await this.client.pendingRequest.set(n, {
                id: n,
                topic: r,
                params: i,
                verifyContext: s,
              }),
                t && this.client.core.expirer.set(n, Ds(t));
            }),
            (this.sendRequest = async (e) => {
              const {
                  topic: t,
                  method: n,
                  params: r,
                  expiry: i,
                  relayRpcId: s,
                  clientRpcId: o,
                  throwOnFailedPublish: a,
                } = e,
                c = nn(n, r, o);
              if (Cs() && bo.includes(n)) {
                const e = Ss(JSON.stringify(c));
                this.client.core.verify.register({ attestationId: e });
              }
              const u = await this.client.core.crypto.encode(t, c),
                h = yo[n].req;
              return (
                i && (h.ttl = i),
                s && (h.id = s),
                this.client.core.history.set(t, c),
                a
                  ? ((h.internal = Ao(To({}, h.internal), {
                      throwOnFailedPublish: !0,
                    })),
                    await this.client.core.relayer.publish(t, u, h))
                  : this.client.core.relayer
                      .publish(t, u, h)
                      .catch((e) => this.client.logger.error(e)),
                c.id
              );
            }),
            (this.sendResult = async (e) => {
              const { id: t, topic: n, result: r, throwOnFailedPublish: i } = e,
                s = rn(t, r),
                o = await this.client.core.crypto.encode(n, s),
                a = await this.client.core.history.get(n, t),
                c = yo[a.request.method].res;
              i
                ? ((c.internal = Ao(To({}, c.internal), {
                    throwOnFailedPublish: !0,
                  })),
                  await this.client.core.relayer.publish(n, o, c))
                : this.client.core.relayer
                    .publish(n, o, c)
                    .catch((e) => this.client.logger.error(e)),
                await this.client.core.history.resolve(s);
            }),
            (this.sendError = async (e, t, n) => {
              const r = sn(e, n),
                i = await this.client.core.crypto.encode(t, r),
                s = await this.client.core.history.get(t, e),
                o = yo[s.request.method].res;
              this.client.core.relayer.publish(t, i, o),
                await this.client.core.history.resolve(r);
            }),
            (this.cleanup = async () => {
              const e = [],
                t = [];
              this.client.session.getAll().forEach((t) => {
                Ls(t.expiry) && e.push(t.topic);
              }),
                this.client.proposal.getAll().forEach((e) => {
                  Ls(e.expiry) && t.push(e.id);
                }),
                await Promise.all([
                  ...e.map((e) => this.deleteSession(e)),
                  ...t.map((e) => this.deleteProposal(e)),
                ]);
            }),
            (this.onRelayEventRequest = async (e) => {
              this.requestQueue.queue.push(e),
                await this.processRequestsQueue();
            }),
            (this.processRequestsQueue = async () => {
              if (this.requestQueue.state !== _o) {
                for (
                  this.client.logger.info(
                    "Request queue starting with ".concat(
                      this.requestQueue.queue.length,
                      " requests"
                    )
                  );
                  this.requestQueue.queue.length > 0;

                ) {
                  this.requestQueue.state = _o;
                  const t = this.requestQueue.queue.shift();
                  if (t)
                    try {
                      this.processRequest(t),
                        await new Promise((e) => setTimeout(e, 300));
                    } catch (e) {
                      this.client.logger.warn(e);
                    }
                }
                this.requestQueue.state = wo;
              } else
                this.client.logger.info(
                  "Request queue already active, skipping..."
                );
            }),
            (this.processRequest = (e) => {
              const { topic: t, payload: n } = e,
                r = n.method;
              switch (r) {
                case "wc_sessionPropose":
                  return this.onSessionProposeRequest(t, n);
                case "wc_sessionSettle":
                  return this.onSessionSettleRequest(t, n);
                case "wc_sessionUpdate":
                  return this.onSessionUpdateRequest(t, n);
                case "wc_sessionExtend":
                  return this.onSessionExtendRequest(t, n);
                case "wc_sessionPing":
                  return this.onSessionPingRequest(t, n);
                case "wc_sessionDelete":
                  return this.onSessionDeleteRequest(t, n);
                case "wc_sessionRequest":
                  return this.onSessionRequest(t, n);
                case "wc_sessionEvent":
                  return this.onSessionEventRequest(t, n);
                default:
                  return this.client.logger.info(
                    "Unsupported request method ".concat(r)
                  );
              }
            }),
            (this.onRelayEventResponse = async (e) => {
              const { topic: t, payload: n } = e,
                r = (await this.client.core.history.get(t, n.id)).request
                  .method;
              switch (r) {
                case "wc_sessionPropose":
                  return this.onSessionProposeResponse(t, n);
                case "wc_sessionSettle":
                  return this.onSessionSettleResponse(t, n);
                case "wc_sessionUpdate":
                  return this.onSessionUpdateResponse(t, n);
                case "wc_sessionExtend":
                  return this.onSessionExtendResponse(t, n);
                case "wc_sessionPing":
                  return this.onSessionPingResponse(t, n);
                case "wc_sessionRequest":
                  return this.onSessionRequestResponse(t, n);
                default:
                  return this.client.logger.info(
                    "Unsupported response method ".concat(r)
                  );
              }
            }),
            (this.onRelayEventUnknownPayload = (e) => {
              const { topic: t } = e,
                { message: n } = Hs(
                  "MISSING_OR_INVALID",
                  "Decoded payload on topic ".concat(
                    t,
                    " is not identifiable as a JSON-RPC request or a response."
                  )
                );
              throw new Error(n);
            }),
            (this.onSessionProposeRequest = async (e, t) => {
              const { params: n, id: r } = t;
              try {
                this.isValidConnect(To({}, t.params));
                const i = Ds(l.FIVE_MINUTES),
                  s = To({ id: r, pairingTopic: e, expiry: i }, n);
                await this.setProposal(r, s);
                const o = Ss(JSON.stringify(t)),
                  a = await this.getVerifyContext(o, s.proposer.metadata);
                this.client.events.emit("session_proposal", {
                  id: r,
                  params: s,
                  verifyContext: a,
                });
              } catch (ce) {
                await this.sendError(r, e, ce), this.client.logger.error(ce);
              }
            }),
            (this.onSessionProposeResponse = async (e, t) => {
              const { id: n } = t;
              if (hn(t)) {
                const { result: r } = t;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  result: r,
                });
                const i = this.client.proposal.get(n);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  proposal: i,
                });
                const s = i.proposer.publicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  selfPublicKey: s,
                });
                const o = r.responderPublicKey;
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  peerPublicKey: o,
                });
                const a = await this.client.core.crypto.generateSharedKey(s, o);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  sessionTopic: a,
                });
                const c = await this.client.core.relayer.subscribe(a);
                this.client.logger.trace({
                  type: "method",
                  method: "onSessionProposeResponse",
                  subscriptionId: c,
                }),
                  await this.client.core.pairing.activate({ topic: e });
              } else
                ln(t) &&
                  (await this.client.proposal.delete(
                    n,
                    Vs("USER_DISCONNECTED")
                  ),
                  this.events.emit(Ms("session_connect"), { error: t.error }));
            }),
            (this.onSessionSettleRequest = async (e, t) => {
              const { id: n, params: r } = t;
              try {
                this.isValidSessionSettleRequest(r);
                const {
                    relay: n,
                    controller: i,
                    expiry: s,
                    namespaces: o,
                    requiredNamespaces: a,
                    optionalNamespaces: c,
                    sessionProperties: u,
                    pairingTopic: h,
                  } = t.params,
                  l = To(
                    {
                      topic: e,
                      relay: n,
                      expiry: s,
                      namespaces: o,
                      acknowledged: !0,
                      pairingTopic: h,
                      requiredNamespaces: a,
                      optionalNamespaces: c,
                      controller: i.publicKey,
                      self: { publicKey: "", metadata: this.client.metadata },
                      peer: { publicKey: i.publicKey, metadata: i.metadata },
                    },
                    u && { sessionProperties: u }
                  );
                await this.sendResult({ id: t.id, topic: e, result: !0 }),
                  this.events.emit(Ms("session_connect"), { session: l }),
                  this.cleanupDuplicatePairings(l);
              } catch (ce) {
                await this.sendError(n, e, ce), this.client.logger.error(ce);
              }
            }),
            (this.onSessionSettleResponse = async (e, t) => {
              const { id: n } = t;
              hn(t)
                ? (await this.client.session.update(e, { acknowledged: !0 }),
                  this.events.emit(Ms("session_approve", n), {}))
                : ln(t) &&
                  (await this.client.session.delete(e, Vs("USER_DISCONNECTED")),
                  this.events.emit(Ms("session_approve", n), {
                    error: t.error,
                  }));
            }),
            (this.onSessionUpdateRequest = async (e, t) => {
              const { params: n, id: r } = t;
              try {
                const t = "".concat(e, "_session_update"),
                  i = co.get(t);
                if (i && this.isRequestOutOfSync(i, r))
                  return void this.client.logger.info(
                    "Discarding out of sync request - ".concat(r)
                  );
                this.isValidUpdate(To({ topic: e }, n)),
                  await this.client.session.update(e, {
                    namespaces: n.namespaces,
                  }),
                  await this.sendResult({ id: r, topic: e, result: !0 }),
                  this.client.events.emit("session_update", {
                    id: r,
                    topic: e,
                    params: n,
                  }),
                  co.set(t, r);
              } catch (ce) {
                await this.sendError(r, e, ce), this.client.logger.error(ce);
              }
            }),
            (this.isRequestOutOfSync = (e, t) =>
              parseInt(t.toString().slice(0, -3)) <=
              parseInt(e.toString().slice(0, -3))),
            (this.onSessionUpdateResponse = (e, t) => {
              const { id: n } = t;
              hn(t)
                ? this.events.emit(Ms("session_update", n), {})
                : ln(t) &&
                  this.events.emit(Ms("session_update", n), { error: t.error });
            }),
            (this.onSessionExtendRequest = async (e, t) => {
              const { id: n } = t;
              try {
                this.isValidExtend({ topic: e }),
                  await this.setExpiry(e, Ds(vo)),
                  await this.sendResult({ id: n, topic: e, result: !0 }),
                  this.client.events.emit("session_extend", {
                    id: n,
                    topic: e,
                  });
              } catch (r) {
                await this.sendError(n, e, r), this.client.logger.error(r);
              }
            }),
            (this.onSessionExtendResponse = (e, t) => {
              const { id: n } = t;
              hn(t)
                ? this.events.emit(Ms("session_extend", n), {})
                : ln(t) &&
                  this.events.emit(Ms("session_extend", n), { error: t.error });
            }),
            (this.onSessionPingRequest = async (e, t) => {
              const { id: n } = t;
              try {
                this.isValidPing({ topic: e }),
                  await this.sendResult({ id: n, topic: e, result: !0 }),
                  this.client.events.emit("session_ping", { id: n, topic: e });
              } catch (r) {
                await this.sendError(n, e, r), this.client.logger.error(r);
              }
            }),
            (this.onSessionPingResponse = (e, t) => {
              const { id: n } = t;
              setTimeout(() => {
                hn(t)
                  ? this.events.emit(Ms("session_ping", n), {})
                  : ln(t) &&
                    this.events.emit(Ms("session_ping", n), { error: t.error });
              }, 500);
            }),
            (this.onSessionDeleteRequest = async (e, t) => {
              const { id: n } = t;
              try {
                this.isValidDisconnect({ topic: e, reason: t.params }),
                  await Promise.all([
                    new Promise((t) => {
                      this.client.core.relayer.once(oi, async () => {
                        t(await this.deleteSession(e));
                      });
                    }),
                    this.sendResult({ id: n, topic: e, result: !0 }),
                  ]),
                  this.client.events.emit("session_delete", {
                    id: n,
                    topic: e,
                  });
              } catch (r) {
                this.client.logger.error(r);
              }
            }),
            (this.onSessionRequest = async (e, t) => {
              const { id: n, params: r } = t;
              try {
                this.isValidRequest(To({ topic: e }, r));
                const t = Ss(JSON.stringify(nn("wc_sessionRequest", r, n))),
                  i = this.client.session.get(e),
                  s = {
                    id: n,
                    topic: e,
                    params: r,
                    verifyContext: await this.getVerifyContext(
                      t,
                      i.peer.metadata
                    ),
                  };
                await this.setPendingSessionRequest(s),
                  this.addSessionRequestToSessionRequestQueue(s),
                  this.processSessionRequestQueue();
              } catch (ce) {
                await this.sendError(n, e, ce), this.client.logger.error(ce);
              }
            }),
            (this.onSessionRequestResponse = (e, t) => {
              const { id: n } = t;
              hn(t)
                ? this.events.emit(Ms("session_request", n), {
                    result: t.result,
                  })
                : ln(t) &&
                  this.events.emit(Ms("session_request", n), {
                    error: t.error,
                  });
            }),
            (this.onSessionEventRequest = async (e, t) => {
              const { id: n, params: r } = t;
              try {
                const t = "".concat(e, "_session_event_").concat(r.event.name),
                  i = co.get(t);
                if (i && this.isRequestOutOfSync(i, n))
                  return void this.client.logger.info(
                    "Discarding out of sync request - ".concat(n)
                  );
                this.isValidEmit(To({ topic: e }, r)),
                  this.client.events.emit("session_event", {
                    id: n,
                    topic: e,
                    params: r,
                  }),
                  co.set(t, n);
              } catch (ce) {
                await this.sendError(n, e, ce), this.client.logger.error(ce);
              }
            }),
            (this.addSessionRequestToSessionRequestQueue = (e) => {
              this.sessionRequestQueue.queue.push(e);
            }),
            (this.cleanupAfterResponse = (e) => {
              this.deletePendingSessionRequest(e.response.id, {
                message: "fulfilled",
                code: 0,
              }),
                setTimeout(() => {
                  (this.sessionRequestQueue.state = wo),
                    this.processSessionRequestQueue();
                }, (0, l.toMiliseconds)(this.requestQueueDelay));
            }),
            (this.processSessionRequestQueue = () => {
              if (this.sessionRequestQueue.state === _o)
                return void this.client.logger.info(
                  "session request queue is already active."
                );
              const e = this.sessionRequestQueue.queue[0];
              if (e)
                try {
                  (this.sessionRequestQueue.state = _o),
                    this.client.events.emit("session_request", e);
                } catch (t) {
                  this.client.logger.error(t);
                }
              else this.client.logger.info("session request queue is empty.");
            }),
            (this.onPairingCreated = (e) => {
              if (e.active) return;
              const t = this.client.proposal
                .getAll()
                .find((t) => t.pairingTopic === e.topic);
              t &&
                this.onSessionProposeRequest(
                  e.topic,
                  nn(
                    "wc_sessionPropose",
                    {
                      requiredNamespaces: t.requiredNamespaces,
                      optionalNamespaces: t.optionalNamespaces,
                      relays: t.relays,
                      proposer: t.proposer,
                      sessionProperties: t.sessionProperties,
                    },
                    t.id
                  )
                );
            }),
            (this.isValidConnect = async (e) => {
              if (!to(e)) {
                const { message: t } = Hs(
                  "MISSING_OR_INVALID",
                  "connect() params: ".concat(JSON.stringify(e))
                );
                throw new Error(t);
              }
              const {
                pairingTopic: t,
                requiredNamespaces: n,
                optionalNamespaces: r,
                sessionProperties: i,
                relays: s,
              } = e;
              if (
                (Ws(t) || (await this.isValidPairingTopic(t)),
                !(function (e, t) {
                  let n = !1;
                  return (
                    t && !e
                      ? (n = !0)
                      : e &&
                        Ks(e) &&
                        e.length &&
                        e.forEach((e) => {
                          n = eo(e);
                        }),
                    n
                  );
                })(s, !0))
              ) {
                const { message: e } = Hs(
                  "MISSING_OR_INVALID",
                  "connect() relays: ".concat(s)
                );
                throw new Error(e);
              }
              !Ws(n) &&
                0 !== Bs(n) &&
                this.validateNamespaces(n, "requiredNamespaces"),
                !Ws(r) &&
                  0 !== Bs(r) &&
                  this.validateNamespaces(r, "optionalNamespaces"),
                Ws(i) || this.validateSessionProps(i, "sessionProperties");
            }),
            (this.validateNamespaces = (e, t) => {
              const n = (function (e, t, n) {
                let r = null;
                if (e && Bs(e)) {
                  const i = Zs(e, t);
                  i && (r = i);
                  const s = Ys(e, t, n);
                  s && (r = s);
                } else
                  r = Hs(
                    "MISSING_OR_INVALID",
                    ""
                      .concat(t, ", ")
                      .concat(n, " should be an object with data")
                  );
                return r;
              })(e, "connect()", t);
              if (n) throw new Error(n.message);
            }),
            (this.isValidApprove = async (e) => {
              if (!to(e))
                throw new Error(
                  Hs(
                    "MISSING_OR_INVALID",
                    "approve() params: ".concat(e)
                  ).message
                );
              const {
                id: t,
                namespaces: n,
                relayProtocol: r,
                sessionProperties: i,
              } = e;
              await this.isValidProposalId(t);
              const s = this.client.proposal.get(t),
                o = Xs(n, "approve()");
              if (o) throw new Error(o.message);
              const a = so(s.requiredNamespaces, n, "approve()");
              if (a) throw new Error(a.message);
              if (!Fs(r, !0)) {
                const { message: e } = Hs(
                  "MISSING_OR_INVALID",
                  "approve() relayProtocol: ".concat(r)
                );
                throw new Error(e);
              }
              Ws(i) || this.validateSessionProps(i, "sessionProperties");
            }),
            (this.isValidReject = async (e) => {
              if (!to(e)) {
                const { message: t } = Hs(
                  "MISSING_OR_INVALID",
                  "reject() params: ".concat(e)
                );
                throw new Error(t);
              }
              const { id: t, reason: n } = e;
              if (
                (await this.isValidProposalId(t),
                !(function (e) {
                  return !(
                    !e ||
                    "object" != typeof e ||
                    !e.code ||
                    !Gs(e.code, !1) ||
                    !e.message ||
                    !Fs(e.message, !1)
                  );
                })(n))
              ) {
                const { message: e } = Hs(
                  "MISSING_OR_INVALID",
                  "reject() reason: ".concat(JSON.stringify(n))
                );
                throw new Error(e);
              }
            }),
            (this.isValidSessionSettleRequest = (e) => {
              if (!to(e)) {
                const { message: t } = Hs(
                  "MISSING_OR_INVALID",
                  "onSessionSettleRequest() params: ".concat(e)
                );
                throw new Error(t);
              }
              const { relay: t, controller: n, namespaces: r, expiry: i } = e;
              if (!eo(t)) {
                const { message: e } = Hs(
                  "MISSING_OR_INVALID",
                  "onSessionSettleRequest() relay protocol should be a string"
                );
                throw new Error(e);
              }
              const s = (function (e, t) {
                let n = null;
                return (
                  Fs(null === e || void 0 === e ? void 0 : e.publicKey, !1) ||
                    (n = Hs(
                      "MISSING_OR_INVALID",
                      "".concat(t, " controller public key should be a string")
                    )),
                  n
                );
              })(n, "onSessionSettleRequest()");
              if (s) throw new Error(s.message);
              const o = Xs(r, "onSessionSettleRequest()");
              if (o) throw new Error(o.message);
              if (Ls(i)) {
                const { message: e } = Hs(
                  "EXPIRED",
                  "onSessionSettleRequest()"
                );
                throw new Error(e);
              }
            }),
            (this.isValidUpdate = async (e) => {
              if (!to(e)) {
                const { message: t } = Hs(
                  "MISSING_OR_INVALID",
                  "update() params: ".concat(e)
                );
                throw new Error(t);
              }
              const { topic: t, namespaces: n } = e;
              await this.isValidSessionTopic(t);
              const r = this.client.session.get(t),
                i = Xs(n, "update()");
              if (i) throw new Error(i.message);
              const s = so(r.requiredNamespaces, n, "update()");
              if (s) throw new Error(s.message);
            }),
            (this.isValidExtend = async (e) => {
              if (!to(e)) {
                const { message: t } = Hs(
                  "MISSING_OR_INVALID",
                  "extend() params: ".concat(e)
                );
                throw new Error(t);
              }
              const { topic: t } = e;
              await this.isValidSessionTopic(t);
            }),
            (this.isValidRequest = async (e) => {
              if (!to(e)) {
                const { message: t } = Hs(
                  "MISSING_OR_INVALID",
                  "request() params: ".concat(e)
                );
                throw new Error(t);
              }
              const { topic: t, request: n, chainId: r, expiry: i } = e;
              await this.isValidSessionTopic(t);
              const { namespaces: s } = this.client.session.get(t);
              if (!no(s, r)) {
                const { message: e } = Hs(
                  "MISSING_OR_INVALID",
                  "request() chainId: ".concat(r)
                );
                throw new Error(e);
              }
              if (
                !(function (e) {
                  return !(Ws(e) || !Fs(e.method, !1));
                })(n)
              ) {
                const { message: e } = Hs(
                  "MISSING_OR_INVALID",
                  "request() ".concat(JSON.stringify(n))
                );
                throw new Error(e);
              }
              if (!ro(s, r, n.method)) {
                const { message: e } = Hs(
                  "MISSING_OR_INVALID",
                  "request() method: ".concat(n.method)
                );
                throw new Error(e);
              }
              if (
                i &&
                !(function (e, t) {
                  return Gs(e, !1) && e <= t.max && e >= t.min;
                })(i, mo)
              ) {
                const { message: e } = Hs(
                  "MISSING_OR_INVALID",
                  "request() expiry: "
                    .concat(
                      i,
                      ". Expiry must be a number (in seconds) between "
                    )
                    .concat(mo.min, " and ")
                    .concat(mo.max)
                );
                throw new Error(e);
              }
            }),
            (this.isValidRespond = async (e) => {
              if (!to(e)) {
                const { message: t } = Hs(
                  "MISSING_OR_INVALID",
                  "respond() params: ".concat(e)
                );
                throw new Error(t);
              }
              const { topic: t, response: n } = e;
              if (
                (await this.isValidSessionTopic(t),
                !(function (e) {
                  return !(
                    Ws(e) ||
                    (Ws(e.result) && Ws(e.error)) ||
                    !Gs(e.id, !1) ||
                    !Fs(e.jsonrpc, !1)
                  );
                })(n))
              ) {
                const { message: e } = Hs(
                  "MISSING_OR_INVALID",
                  "respond() response: ".concat(JSON.stringify(n))
                );
                throw new Error(e);
              }
            }),
            (this.isValidPing = async (e) => {
              if (!to(e)) {
                const { message: t } = Hs(
                  "MISSING_OR_INVALID",
                  "ping() params: ".concat(e)
                );
                throw new Error(t);
              }
              const { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            (this.isValidEmit = async (e) => {
              if (!to(e)) {
                const { message: t } = Hs(
                  "MISSING_OR_INVALID",
                  "emit() params: ".concat(e)
                );
                throw new Error(t);
              }
              const { topic: t, event: n, chainId: r } = e;
              await this.isValidSessionTopic(t);
              const { namespaces: i } = this.client.session.get(t);
              if (!no(i, r)) {
                const { message: e } = Hs(
                  "MISSING_OR_INVALID",
                  "emit() chainId: ".concat(r)
                );
                throw new Error(e);
              }
              if (
                !(function (e) {
                  return !(Ws(e) || !Fs(e.name, !1));
                })(n)
              ) {
                const { message: e } = Hs(
                  "MISSING_OR_INVALID",
                  "emit() event: ".concat(JSON.stringify(n))
                );
                throw new Error(e);
              }
              if (!io(i, r, n.name)) {
                const { message: e } = Hs(
                  "MISSING_OR_INVALID",
                  "emit() event: ".concat(JSON.stringify(n))
                );
                throw new Error(e);
              }
            }),
            (this.isValidDisconnect = async (e) => {
              if (!to(e)) {
                const { message: t } = Hs(
                  "MISSING_OR_INVALID",
                  "disconnect() params: ".concat(e)
                );
                throw new Error(t);
              }
              const { topic: t } = e;
              await this.isValidSessionOrPairingTopic(t);
            }),
            (this.getVerifyContext = async (e, t) => {
              const n = {
                verified: {
                  verifyUrl: t.verifyUrl || Ci,
                  validation: "UNKNOWN",
                  origin: t.url || "",
                },
              };
              try {
                const r = await this.client.core.verify.resolve({
                  attestationId: e,
                  verifyUrl: t.verifyUrl,
                });
                r &&
                  ((n.verified.origin = r.origin),
                  (n.verified.isScam = r.isScam),
                  (n.verified.validation =
                    r.origin === new URL(t.url).origin ? "VALID" : "INVALID"));
              } catch (r) {
                this.client.logger.info(r);
              }
              return (
                this.client.logger.info(
                  "Verify context: ".concat(JSON.stringify(n))
                ),
                n
              );
            }),
            (this.validateSessionProps = (e, t) => {
              Object.values(e).forEach((e) => {
                if (!Fs(e, !1)) {
                  const { message: n } = Hs(
                    "MISSING_OR_INVALID",
                    ""
                      .concat(
                        t,
                        " must be in Record<string, string> format. Received: "
                      )
                      .concat(JSON.stringify(e))
                  );
                  throw new Error(n);
                }
              });
            });
        }
        async isInitialized() {
          if (!this.initialized) {
            const { message: e } = Hs("NOT_INITIALIZED", this.name);
            throw new Error(e);
          }
          await this.client.core.relayer.confirmOnlineStateOrThrow();
        }
        registerRelayerEvents() {
          this.client.core.relayer.on(ei, async (e) => {
            const { topic: t, message: n } = e;
            if (
              this.ignoredPayloadTypes.includes(
                this.client.core.crypto.getPayloadType(n)
              )
            )
              return;
            const r = await this.client.core.crypto.decode(t, n);
            try {
              cn(r)
                ? (this.client.core.history.set(t, r),
                  this.onRelayEventRequest({ topic: t, payload: r }))
                : un(r)
                ? (await this.client.core.history.resolve(r),
                  await this.onRelayEventResponse({ topic: t, payload: r }),
                  this.client.core.history.delete(t, r.id))
                : this.onRelayEventUnknownPayload({ topic: t, payload: r });
            } catch (i) {
              this.client.logger.error(i);
            }
          });
        }
        registerExpirerEvents() {
          this.client.core.expirer.on(Ni, async (e) => {
            const { topic: t, id: n } = (function (e) {
              const [t, n] = e.split(":"),
                r = { id: void 0, topic: void 0 };
              if ("topic" === t && "string" == typeof n) r.topic = n;
              else {
                if ("id" !== t || !Number.isInteger(Number(n)))
                  throw new Error(
                    "Invalid target, expected id:number or topic:string, got "
                      .concat(t, ":")
                      .concat(n)
                  );
                r.id = Number(n);
              }
              return r;
            })(e.target);
            if (n && this.client.pendingRequest.keys.includes(n))
              return await this.deletePendingSessionRequest(
                n,
                Hs("EXPIRED"),
                !0
              );
            t
              ? this.client.session.keys.includes(t) &&
                (await this.deleteSession(t, !0),
                this.client.events.emit("session_expire", { topic: t }))
              : n &&
                (await this.deleteProposal(n, !0),
                this.client.events.emit("proposal_expire", { id: n }));
          });
        }
        registerPairingEvents() {
          this.client.core.pairing.events.on(mi, (e) =>
            this.onPairingCreated(e)
          );
        }
        isValidPairingTopic(e) {
          if (!Fs(e, !1)) {
            const { message: t } = Hs(
              "MISSING_OR_INVALID",
              "pairing topic should be a string: ".concat(e)
            );
            throw new Error(t);
          }
          if (!this.client.core.pairing.pairings.keys.includes(e)) {
            const { message: t } = Hs(
              "NO_MATCHING_KEY",
              "pairing topic doesn't exist: ".concat(e)
            );
            throw new Error(t);
          }
          if (Ls(this.client.core.pairing.pairings.get(e).expiry)) {
            const { message: t } = Hs("EXPIRED", "pairing topic: ".concat(e));
            throw new Error(t);
          }
        }
        async isValidSessionTopic(e) {
          if (!Fs(e, !1)) {
            const { message: t } = Hs(
              "MISSING_OR_INVALID",
              "session topic should be a string: ".concat(e)
            );
            throw new Error(t);
          }
          if (!this.client.session.keys.includes(e)) {
            const { message: t } = Hs(
              "NO_MATCHING_KEY",
              "session topic doesn't exist: ".concat(e)
            );
            throw new Error(t);
          }
          if (Ls(this.client.session.get(e).expiry)) {
            await this.deleteSession(e);
            const { message: t } = Hs("EXPIRED", "session topic: ".concat(e));
            throw new Error(t);
          }
        }
        async isValidSessionOrPairingTopic(e) {
          if (this.client.session.keys.includes(e))
            await this.isValidSessionTopic(e);
          else {
            if (!this.client.core.pairing.pairings.keys.includes(e)) {
              if (Fs(e, !1)) {
                const { message: t } = Hs(
                  "NO_MATCHING_KEY",
                  "session or pairing topic doesn't exist: ".concat(e)
                );
                throw new Error(t);
              }
              {
                const { message: t } = Hs(
                  "MISSING_OR_INVALID",
                  "session or pairing topic should be a string: ".concat(e)
                );
                throw new Error(t);
              }
            }
            this.isValidPairingTopic(e);
          }
        }
        async isValidProposalId(e) {
          if ("number" != typeof e) {
            const { message: t } = Hs(
              "MISSING_OR_INVALID",
              "proposal id should be a number: ".concat(e)
            );
            throw new Error(t);
          }
          if (!this.client.proposal.keys.includes(e)) {
            const { message: t } = Hs(
              "NO_MATCHING_KEY",
              "proposal id doesn't exist: ".concat(e)
            );
            throw new Error(t);
          }
          if (Ls(this.client.proposal.get(e).expiry)) {
            await this.deleteProposal(e);
            const { message: t } = Hs("EXPIRED", "proposal id: ".concat(e));
            throw new Error(t);
          }
        }
      }
      class xo extends as {
        constructor(e, t) {
          super(e, t, "proposal", ho), (this.core = e), (this.logger = t);
        }
      }
      class Uo extends as {
        constructor(e, t) {
          super(e, t, "session", ho), (this.core = e), (this.logger = t);
        }
      }
      class jo extends as {
        constructor(e, t) {
          super(e, t, "request", ho, (e) => e.id),
            (this.core = e),
            (this.logger = t);
        }
      }
      class Do extends class {
        constructor(e) {
          (this.opts = e), (this.protocol = "wc"), (this.version = 2);
        }
      } {
        constructor(e) {
          super(e),
            (this.protocol = "wc"),
            (this.version = 2),
            (this.name = lo),
            (this.events = new r.EventEmitter()),
            (this.on = (e, t) => this.events.on(e, t)),
            (this.once = (e, t) => this.events.once(e, t)),
            (this.off = (e, t) => this.events.off(e, t)),
            (this.removeListener = (e, t) => this.events.removeListener(e, t)),
            (this.removeAllListeners = (e) =>
              this.events.removeAllListeners(e)),
            (this.connect = async (e) => {
              try {
                return await this.engine.connect(e);
              } catch (t) {
                throw (this.logger.error(t.message), t);
              }
            }),
            (this.pair = async (e) => {
              try {
                return await this.engine.pair(e);
              } catch (t) {
                throw (this.logger.error(t.message), t);
              }
            }),
            (this.approve = async (e) => {
              try {
                return await this.engine.approve(e);
              } catch (t) {
                throw (this.logger.error(t.message), t);
              }
            }),
            (this.reject = async (e) => {
              try {
                return await this.engine.reject(e);
              } catch (t) {
                throw (this.logger.error(t.message), t);
              }
            }),
            (this.update = async (e) => {
              try {
                return await this.engine.update(e);
              } catch (t) {
                throw (this.logger.error(t.message), t);
              }
            }),
            (this.extend = async (e) => {
              try {
                return await this.engine.extend(e);
              } catch (t) {
                throw (this.logger.error(t.message), t);
              }
            }),
            (this.request = async (e) => {
              try {
                return await this.engine.request(e);
              } catch (t) {
                throw (this.logger.error(t.message), t);
              }
            }),
            (this.respond = async (e) => {
              try {
                return await this.engine.respond(e);
              } catch (t) {
                throw (this.logger.error(t.message), t);
              }
            }),
            (this.ping = async (e) => {
              try {
                return await this.engine.ping(e);
              } catch (t) {
                throw (this.logger.error(t.message), t);
              }
            }),
            (this.emit = async (e) => {
              try {
                return await this.engine.emit(e);
              } catch (t) {
                throw (this.logger.error(t.message), t);
              }
            }),
            (this.disconnect = async (e) => {
              try {
                return await this.engine.disconnect(e);
              } catch (t) {
                throw (this.logger.error(t.message), t);
              }
            }),
            (this.find = (e) => {
              try {
                return this.engine.find(e);
              } catch (t) {
                throw (this.logger.error(t.message), t);
              }
            }),
            (this.getPendingSessionRequests = () => {
              try {
                return this.engine.getPendingSessionRequests();
              } catch (e) {
                throw (this.logger.error(e.message), e);
              }
            }),
            (this.name = (null === e || void 0 === e ? void 0 : e.name) || lo),
            (this.metadata = (null === e || void 0 === e
              ? void 0
              : e.metadata) ||
              (0, d.D)() || {
                name: "",
                description: "",
                url: "",
                icons: [""],
              });
          const t =
            typeof (null === e || void 0 === e ? void 0 : e.logger) < "u" &&
            "string" != typeof (null === e || void 0 === e ? void 0 : e.logger)
              ? e.logger
              : (0, oe.pino)(
                  (0, oe.getDefaultLoggerOptions)({
                    level:
                      (null === e || void 0 === e ? void 0 : e.logger) || po,
                  })
                );
          (this.core =
            (null === e || void 0 === e ? void 0 : e.core) || new ws(e)),
            (this.logger = (0, oe.generateChildLogger)(t, this.name)),
            (this.session = new Uo(this.core, this.logger)),
            (this.proposal = new xo(this.core, this.logger)),
            (this.pendingRequest = new jo(this.core, this.logger)),
            (this.engine = new Co(this));
        }
        static async init(e) {
          const t = new Do(e);
          return await t.initialize(), t;
        }
        get context() {
          return (0, oe.getLoggerContext)(this.logger);
        }
        get pairing() {
          return this.core.pairing.pairings;
        }
        async initialize() {
          this.logger.trace("Initialized");
          try {
            await this.core.start(),
              await this.session.init(),
              await this.proposal.init(),
              await this.pendingRequest.init(),
              await this.engine.init(),
              this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }),
              this.logger.info("SignClient Initialization Success");
          } catch (e) {
            throw (
              (this.logger.info("SignClient Initialization Failure"),
              this.logger.error(e.message),
              e)
            );
          }
        }
      }
      n(7490);
      const Lo = ":";
      function Mo(e) {
        const [t, n] = e.split(Lo);
        return { namespace: t, reference: n };
      }
      Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      function qo() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return [...new Set([...e, ...t])];
      }
      Object.defineProperty,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      Object.defineProperty,
        Object.defineProperties,
        Object.getOwnPropertyDescriptors,
        Object.getOwnPropertySymbols,
        Object.prototype.hasOwnProperty,
        Object.prototype.propertyIsEnumerable;
      function ko(e) {
        return e.includes(":");
      }
      function zo(e) {
        return ko(e) ? e.split(":")[0] : e;
      }
      const Ho = {
        INVALID_METHOD: { message: "Invalid method.", code: 1001 },
        INVALID_EVENT: { message: "Invalid event.", code: 1002 },
        INVALID_UPDATE_REQUEST: {
          message: "Invalid update request.",
          code: 1003,
        },
        INVALID_EXTEND_REQUEST: {
          message: "Invalid extend request.",
          code: 1004,
        },
        INVALID_SESSION_SETTLE_REQUEST: {
          message: "Invalid session settle request.",
          code: 1005,
        },
        UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
        UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
        UNAUTHORIZED_UPDATE_REQUEST: {
          message: "Unauthorized update request.",
          code: 3003,
        },
        UNAUTHORIZED_EXTEND_REQUEST: {
          message: "Unauthorized extend request.",
          code: 3004,
        },
        USER_REJECTED: { message: "User rejected.", code: 5e3 },
        USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 },
        USER_REJECTED_METHODS: {
          message: "User rejected methods.",
          code: 5002,
        },
        USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 },
        UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
        UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
        UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
        UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 },
        UNSUPPORTED_NAMESPACE_KEY: {
          message: "Unsupported namespace key.",
          code: 5104,
        },
        USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
        SESSION_SETTLEMENT_FAILED: {
          message: "Session settlement failed.",
          code: 7e3,
        },
        WC_METHOD_UNSUPPORTED: {
          message: "Unsupported wc_ method.",
          code: 10001,
        },
      };
      function Vo(e, t) {
        const { message: n, code: r } = Ho[e];
        return { message: t ? "".concat(n, " ").concat(t) : n, code: r };
      }
      function Ko(e, t) {
        return (
          !!Array.isArray(e) && (!(typeof t < "u" && e.length) || e.every(t))
        );
      }
      function Bo(e) {
        return (
          Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length
        );
      }
      var Wo = n(7605),
        Fo = n.n(Wo);
      const Go = "INTERNAL_ERROR",
        Jo = "SERVER_ERROR",
        Qo = [-32700, -32600, -32601, -32602, -32603],
        Yo = {
          PARSE_ERROR: { code: -32700, message: "Parse error" },
          INVALID_REQUEST: { code: -32600, message: "Invalid Request" },
          METHOD_NOT_FOUND: { code: -32601, message: "Method not found" },
          INVALID_PARAMS: { code: -32602, message: "Invalid params" },
          [Go]: { code: -32603, message: "Internal error" },
          [Jo]: { code: -32e3, message: "Server error" },
        };
      function $o(e) {
        return Qo.includes(e);
      }
      function Zo(e) {
        return Object.keys(Yo).includes(e) ? Yo[e] : Yo.SERVER_ERROR;
      }
      function Xo(e) {
        const t = Object.values(Yo).find((t) => t.code === e);
        return t || Yo.SERVER_ERROR;
      }
      function ea(e, t) {
        return "undefined" === typeof e
          ? Zo(Go)
          : ("string" === typeof e &&
              (e = Object.assign(Object.assign({}, Zo(Jo)), { message: e })),
            "undefined" !== typeof t && (e.data = t),
            $o(e.code) && (e = Xo(e.code)),
            e);
      }
      n(31379);
      function ta(e, t) {
        const n = (function (e) {
          const t = e.match(new RegExp(/^\w+:/, "gi"));
          if (t && t.length) return t[0];
        })(e);
        return "undefined" !== typeof n && new RegExp(t).test(n);
      }
      function na(e) {
        return ta(e, "^https?:");
      }
      const ra = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
      };
      class ia {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          if (
            ((this.url = e),
            (this.disableProviderPing = t),
            (this.events = new r.EventEmitter()),
            (this.isAvailable = !1),
            (this.registering = !1),
            !na(e))
          )
            throw new Error(
              "Provided URL is not compatible with HTTP connection: ".concat(e)
            );
          (this.url = e), (this.disableProviderPing = t);
        }
        get connected() {
          return this.isAvailable;
        }
        get connecting() {
          return this.registering;
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        async open() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.url;
          await this.register(e);
        }
        async close() {
          if (!this.isAvailable) throw new Error("Connection already closed");
          this.onClose();
        }
        async send(e, t) {
          this.isAvailable || (await this.register());
          try {
            const t = Pe(e),
              n = await Fo()(
                this.url,
                Object.assign(Object.assign({}, ra), { body: t })
              ),
              r = await n.json();
            this.onPayload({ data: r });
          } catch (n) {
            this.onError(e.id, n);
          }
        }
        async register() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : this.url;
          if (!na(e))
            throw new Error(
              "Provided URL is not compatible with HTTP connection: ".concat(e)
            );
          if (this.registering) {
            const e = this.events.getMaxListeners();
            return (
              (this.events.listenerCount("register_error") >= e ||
                this.events.listenerCount("open") >= e) &&
                this.events.setMaxListeners(e + 1),
              new Promise((e, t) => {
                this.events.once("register_error", (e) => {
                  this.resetMaxListeners(), t(e);
                }),
                  this.events.once("open", () => {
                    if (
                      (this.resetMaxListeners(),
                      "undefined" === typeof this.isAvailable)
                    )
                      return t(
                        new Error("HTTP connection is missing or invalid")
                      );
                    e();
                  });
              })
            );
          }
          (this.url = e), (this.registering = !0);
          try {
            if (!this.disableProviderPing) {
              const t = Pe({
                id: 1,
                jsonrpc: "2.0",
                method: "test",
                params: [],
              });
              await Fo()(e, Object.assign(Object.assign({}, ra), { body: t }));
            }
            this.onOpen();
          } catch (t) {
            const e = this.parseError(t);
            throw (this.events.emit("register_error", e), this.onClose(), e);
          }
        }
        onOpen() {
          (this.isAvailable = !0),
            (this.registering = !1),
            this.events.emit("open");
        }
        onClose() {
          (this.isAvailable = !1),
            (this.registering = !1),
            this.events.emit("close");
        }
        onPayload(e) {
          if ("undefined" === typeof e.data) return;
          const t =
            "string" === typeof e.data
              ? (function (e) {
                  if ("string" !== typeof e)
                    throw new Error(
                      "Cannot safe json parse value of type ".concat(typeof e)
                    );
                  try {
                    return JSON.parse(e);
                  } catch (t) {
                    return e;
                  }
                })(e.data)
              : e.data;
          this.events.emit("payload", t);
        }
        onError(e, t) {
          const n = this.parseError(t),
            r = (function (e, t, n) {
              return { id: e, jsonrpc: "2.0", error: ea(t, n) };
            })(e, n.message || n.toString());
          this.events.emit("payload", r);
        }
        parseError(e) {
          return (function (e, t, n) {
            return e.message.includes("getaddrinfo ENOTFOUND") ||
              e.message.includes("connect ECONNREFUSED")
              ? new Error("Unavailable ".concat(n, " RPC url at ").concat(t))
              : e;
          })(
            e,
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : this.url,
            "HTTP"
          );
        }
        resetMaxListeners() {
          this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10);
        }
      }
      const sa = ia,
        oa = "error",
        aa = "".concat("wc", "@2:").concat("universal_provider", ":"),
        ca = "default_chain_changed";
      var ua =
          typeof globalThis < "u"
            ? globalThis
            : typeof window < "u"
            ? window
            : typeof n.g < "u"
            ? n.g
            : typeof self < "u"
            ? self
            : {},
        ha = { exports: {} };
      !(function (e, t) {
        (function () {
          var n,
            r = "Expected a function",
            i = "__lodash_hash_undefined__",
            s = "__lodash_placeholder__",
            o = 16,
            a = 32,
            c = 64,
            u = 128,
            h = 256,
            l = 1 / 0,
            p = 9007199254740991,
            d = NaN,
            f = 4294967295,
            g = [
              ["ary", u],
              ["bind", 1],
              ["bindKey", 2],
              ["curry", 8],
              ["curryRight", o],
              ["flip", 512],
              ["partial", a],
              ["partialRight", c],
              ["rearg", h],
            ],
            v = "[object Arguments]",
            y = "[object Array]",
            m = "[object Boolean]",
            w = "[object Date]",
            _ = "[object Error]",
            b = "[object Function]",
            E = "[object GeneratorFunction]",
            I = "[object Map]",
            S = "[object Number]",
            P = "[object Object]",
            O = "[object Promise]",
            R = "[object RegExp]",
            N = "[object Set]",
            T = "[object String]",
            A = "[object Symbol]",
            C = "[object WeakMap]",
            x = "[object ArrayBuffer]",
            U = "[object DataView]",
            j = "[object Float32Array]",
            D = "[object Float64Array]",
            L = "[object Int8Array]",
            M = "[object Int16Array]",
            q = "[object Int32Array]",
            k = "[object Uint8Array]",
            z = "[object Uint8ClampedArray]",
            H = "[object Uint16Array]",
            V = "[object Uint32Array]",
            K = /\b__p \+= '';/g,
            B = /\b(__p \+=) '' \+/g,
            W = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
            F = /&(?:amp|lt|gt|quot|#39);/g,
            G = /[&<>"']/g,
            J = RegExp(F.source),
            Q = RegExp(G.source),
            Y = /<%-([\s\S]+?)%>/g,
            $ = /<%([\s\S]+?)%>/g,
            Z = /<%=([\s\S]+?)%>/g,
            X = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            ee = /^\w*$/,
            te =
              /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            ne = /[\\^$.*+?()[\]{}|]/g,
            re = RegExp(ne.source),
            ie = /^\s+/,
            se = /\s/,
            oe = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
            ae = /\{\n\/\* \[wrapped with (.+)\] \*/,
            ce = /,? & /,
            ue = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
            he = /[()=,{}\[\]\/\s]/,
            le = /\\(\\)?/g,
            pe = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
            de = /\w*$/,
            fe = /^[-+]0x[0-9a-f]+$/i,
            ge = /^0b[01]+$/i,
            ve = /^\[object .+?Constructor\]$/,
            ye = /^0o[0-7]+$/i,
            me = /^(?:0|[1-9]\d*)$/,
            we = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
            _e = /($^)/,
            be = /['\n\r\u2028\u2029\\]/g,
            Ee = "\\ud800-\\udfff",
            Ie = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
            Se = "\\u2700-\\u27bf",
            Pe = "a-z\\xdf-\\xf6\\xf8-\\xff",
            Oe = "A-Z\\xc0-\\xd6\\xd8-\\xde",
            Re = "\\ufe0e\\ufe0f",
            Ne =
              "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
            Te = "['\u2019]",
            Ae = "[" + Ee + "]",
            Ce = "[" + Ne + "]",
            xe = "[" + Ie + "]",
            Ue = "\\d+",
            je = "[" + Se + "]",
            De = "[" + Pe + "]",
            Le = "[^" + Ee + Ne + Ue + Se + Pe + Oe + "]",
            Me = "\\ud83c[\\udffb-\\udfff]",
            qe = "[^" + Ee + "]",
            ke = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            ze = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            He = "[" + Oe + "]",
            Ve = "\\u200d",
            Ke = "(?:" + De + "|" + Le + ")",
            Be = "(?:" + He + "|" + Le + ")",
            We = "(?:['\u2019](?:d|ll|m|re|s|t|ve))?",
            Fe = "(?:['\u2019](?:D|LL|M|RE|S|T|VE))?",
            Ge = "(?:" + xe + "|" + Me + ")" + "?",
            Je = "[" + Re + "]?",
            Qe =
              Je +
              Ge +
              ("(?:\\u200d(?:" + [qe, ke, ze].join("|") + ")" + Je + Ge + ")*"),
            Ye = "(?:" + [je, ke, ze].join("|") + ")" + Qe,
            $e = "(?:" + [qe + xe + "?", xe, ke, ze, Ae].join("|") + ")",
            Ze = RegExp(Te, "g"),
            Xe = RegExp(xe, "g"),
            et = RegExp(Me + "(?=" + Me + ")|" + $e + Qe, "g"),
            tt = RegExp(
              [
                He +
                  "?" +
                  De +
                  "+" +
                  We +
                  "(?=" +
                  [Ce, He, "$"].join("|") +
                  ")",
                Be + "+" + Fe + "(?=" + [Ce, He + Ke, "$"].join("|") + ")",
                He + "?" + Ke + "+" + We,
                He + "+" + Fe,
                "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
                "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
                Ue,
                Ye,
              ].join("|"),
              "g"
            ),
            nt = RegExp("[" + Ve + Ee + Ie + Re + "]"),
            rt =
              /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
            it = [
              "Array",
              "Buffer",
              "DataView",
              "Date",
              "Error",
              "Float32Array",
              "Float64Array",
              "Function",
              "Int8Array",
              "Int16Array",
              "Int32Array",
              "Map",
              "Math",
              "Object",
              "Promise",
              "RegExp",
              "Set",
              "String",
              "Symbol",
              "TypeError",
              "Uint8Array",
              "Uint8ClampedArray",
              "Uint16Array",
              "Uint32Array",
              "WeakMap",
              "_",
              "clearTimeout",
              "isFinite",
              "parseInt",
              "setTimeout",
            ],
            st = -1,
            ot = {};
          (ot[j] =
            ot[D] =
            ot[L] =
            ot[M] =
            ot[q] =
            ot[k] =
            ot[z] =
            ot[H] =
            ot[V] =
              !0),
            (ot[v] =
              ot[y] =
              ot[x] =
              ot[m] =
              ot[U] =
              ot[w] =
              ot[_] =
              ot[b] =
              ot[I] =
              ot[S] =
              ot[P] =
              ot[R] =
              ot[N] =
              ot[T] =
              ot[C] =
                !1);
          var at = {};
          (at[v] =
            at[y] =
            at[x] =
            at[U] =
            at[m] =
            at[w] =
            at[j] =
            at[D] =
            at[L] =
            at[M] =
            at[q] =
            at[I] =
            at[S] =
            at[P] =
            at[R] =
            at[N] =
            at[T] =
            at[A] =
            at[k] =
            at[z] =
            at[H] =
            at[V] =
              !0),
            (at[_] = at[b] = at[C] = !1);
          var ct = {
              "\\": "\\",
              "'": "'",
              "\n": "n",
              "\r": "r",
              "\u2028": "u2028",
              "\u2029": "u2029",
            },
            ut = parseFloat,
            ht = parseInt,
            lt = "object" == typeof ua && ua && ua.Object === Object && ua,
            pt =
              "object" == typeof self && self && self.Object === Object && self,
            dt = lt || pt || Function("return this")(),
            ft = t && !t.nodeType && t,
            gt = ft && e && !e.nodeType && e,
            vt = gt && gt.exports === ft,
            yt = vt && lt.process,
            mt = (function () {
              try {
                return (
                  (gt && gt.require && gt.require("util").types) ||
                  (yt && yt.binding && yt.binding("util"))
                );
              } catch {}
            })(),
            wt = mt && mt.isArrayBuffer,
            _t = mt && mt.isDate,
            bt = mt && mt.isMap,
            Et = mt && mt.isRegExp,
            It = mt && mt.isSet,
            St = mt && mt.isTypedArray;
          function Pt(e, t, n) {
            switch (n.length) {
              case 0:
                return e.call(t);
              case 1:
                return e.call(t, n[0]);
              case 2:
                return e.call(t, n[0], n[1]);
              case 3:
                return e.call(t, n[0], n[1], n[2]);
            }
            return e.apply(t, n);
          }
          function Ot(e, t, n, r) {
            for (var i = -1, s = null == e ? 0 : e.length; ++i < s; ) {
              var o = e[i];
              t(r, o, n(o), e);
            }
            return r;
          }
          function Rt(e, t) {
            for (
              var n = -1, r = null == e ? 0 : e.length;
              ++n < r && !1 !== t(e[n], n, e);

            );
            return e;
          }
          function Nt(e, t) {
            for (
              var n = null == e ? 0 : e.length;
              n-- && !1 !== t(e[n], n, e);

            );
            return e;
          }
          function Tt(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
              if (!t(e[n], n, e)) return !1;
            return !0;
          }
          function At(e, t) {
            for (
              var n = -1, r = null == e ? 0 : e.length, i = 0, s = [];
              ++n < r;

            ) {
              var o = e[n];
              t(o, n, e) && (s[i++] = o);
            }
            return s;
          }
          function Ct(e, t) {
            return !!(null == e ? 0 : e.length) && Ht(e, t, 0) > -1;
          }
          function xt(e, t, n) {
            for (var r = -1, i = null == e ? 0 : e.length; ++r < i; )
              if (n(t, e[r])) return !0;
            return !1;
          }
          function Ut(e, t) {
            for (
              var n = -1, r = null == e ? 0 : e.length, i = Array(r);
              ++n < r;

            )
              i[n] = t(e[n], n, e);
            return i;
          }
          function jt(e, t) {
            for (var n = -1, r = t.length, i = e.length; ++n < r; )
              e[i + n] = t[n];
            return e;
          }
          function Dt(e, t, n, r) {
            var i = -1,
              s = null == e ? 0 : e.length;
            for (r && s && (n = e[++i]); ++i < s; ) n = t(n, e[i], i, e);
            return n;
          }
          function Lt(e, t, n, r) {
            var i = null == e ? 0 : e.length;
            for (r && i && (n = e[--i]); i--; ) n = t(n, e[i], i, e);
            return n;
          }
          function Mt(e, t) {
            for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
              if (t(e[n], n, e)) return !0;
            return !1;
          }
          var qt = Wt("length");
          function kt(e, t, n) {
            var r;
            return (
              n(e, function (e, n, i) {
                if (t(e, n, i)) return (r = n), !1;
              }),
              r
            );
          }
          function zt(e, t, n, r) {
            for (var i = e.length, s = n + (r ? 1 : -1); r ? s-- : ++s < i; )
              if (t(e[s], s, e)) return s;
            return -1;
          }
          function Ht(e, t, n) {
            return t === t
              ? (function (e, t, n) {
                  for (var r = n - 1, i = e.length; ++r < i; )
                    if (e[r] === t) return r;
                  return -1;
                })(e, t, n)
              : zt(e, Kt, n);
          }
          function Vt(e, t, n, r) {
            for (var i = n - 1, s = e.length; ++i < s; )
              if (r(e[i], t)) return i;
            return -1;
          }
          function Kt(e) {
            return e !== e;
          }
          function Bt(e, t) {
            var n = null == e ? 0 : e.length;
            return n ? Jt(e, t) / n : d;
          }
          function Wt(e) {
            return function (t) {
              return null == t ? n : t[e];
            };
          }
          function Ft(e) {
            return function (t) {
              return null == e ? n : e[t];
            };
          }
          function Gt(e, t, n, r, i) {
            return (
              i(e, function (e, i, s) {
                n = r ? ((r = !1), e) : t(n, e, i, s);
              }),
              n
            );
          }
          function Jt(e, t) {
            for (var r, i = -1, s = e.length; ++i < s; ) {
              var o = t(e[i]);
              o !== n && (r = r === n ? o : r + o);
            }
            return r;
          }
          function Qt(e, t) {
            for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
            return r;
          }
          function Yt(e) {
            return e && e.slice(0, fn(e) + 1).replace(ie, "");
          }
          function $t(e) {
            return function (t) {
              return e(t);
            };
          }
          function Zt(e, t) {
            return Ut(t, function (t) {
              return e[t];
            });
          }
          function Xt(e, t) {
            return e.has(t);
          }
          function en(e, t) {
            for (var n = -1, r = e.length; ++n < r && Ht(t, e[n], 0) > -1; );
            return n;
          }
          function tn(e, t) {
            for (var n = e.length; n-- && Ht(t, e[n], 0) > -1; );
            return n;
          }
          function nn(e, t) {
            for (var n = e.length, r = 0; n--; ) e[n] === t && ++r;
            return r;
          }
          var rn = Ft({
              "\xc0": "A",
              "\xc1": "A",
              "\xc2": "A",
              "\xc3": "A",
              "\xc4": "A",
              "\xc5": "A",
              "\xe0": "a",
              "\xe1": "a",
              "\xe2": "a",
              "\xe3": "a",
              "\xe4": "a",
              "\xe5": "a",
              "\xc7": "C",
              "\xe7": "c",
              "\xd0": "D",
              "\xf0": "d",
              "\xc8": "E",
              "\xc9": "E",
              "\xca": "E",
              "\xcb": "E",
              "\xe8": "e",
              "\xe9": "e",
              "\xea": "e",
              "\xeb": "e",
              "\xcc": "I",
              "\xcd": "I",
              "\xce": "I",
              "\xcf": "I",
              "\xec": "i",
              "\xed": "i",
              "\xee": "i",
              "\xef": "i",
              "\xd1": "N",
              "\xf1": "n",
              "\xd2": "O",
              "\xd3": "O",
              "\xd4": "O",
              "\xd5": "O",
              "\xd6": "O",
              "\xd8": "O",
              "\xf2": "o",
              "\xf3": "o",
              "\xf4": "o",
              "\xf5": "o",
              "\xf6": "o",
              "\xf8": "o",
              "\xd9": "U",
              "\xda": "U",
              "\xdb": "U",
              "\xdc": "U",
              "\xf9": "u",
              "\xfa": "u",
              "\xfb": "u",
              "\xfc": "u",
              "\xdd": "Y",
              "\xfd": "y",
              "\xff": "y",
              "\xc6": "Ae",
              "\xe6": "ae",
              "\xde": "Th",
              "\xfe": "th",
              "\xdf": "ss",
              "\u0100": "A",
              "\u0102": "A",
              "\u0104": "A",
              "\u0101": "a",
              "\u0103": "a",
              "\u0105": "a",
              "\u0106": "C",
              "\u0108": "C",
              "\u010a": "C",
              "\u010c": "C",
              "\u0107": "c",
              "\u0109": "c",
              "\u010b": "c",
              "\u010d": "c",
              "\u010e": "D",
              "\u0110": "D",
              "\u010f": "d",
              "\u0111": "d",
              "\u0112": "E",
              "\u0114": "E",
              "\u0116": "E",
              "\u0118": "E",
              "\u011a": "E",
              "\u0113": "e",
              "\u0115": "e",
              "\u0117": "e",
              "\u0119": "e",
              "\u011b": "e",
              "\u011c": "G",
              "\u011e": "G",
              "\u0120": "G",
              "\u0122": "G",
              "\u011d": "g",
              "\u011f": "g",
              "\u0121": "g",
              "\u0123": "g",
              "\u0124": "H",
              "\u0126": "H",
              "\u0125": "h",
              "\u0127": "h",
              "\u0128": "I",
              "\u012a": "I",
              "\u012c": "I",
              "\u012e": "I",
              "\u0130": "I",
              "\u0129": "i",
              "\u012b": "i",
              "\u012d": "i",
              "\u012f": "i",
              "\u0131": "i",
              "\u0134": "J",
              "\u0135": "j",
              "\u0136": "K",
              "\u0137": "k",
              "\u0138": "k",
              "\u0139": "L",
              "\u013b": "L",
              "\u013d": "L",
              "\u013f": "L",
              "\u0141": "L",
              "\u013a": "l",
              "\u013c": "l",
              "\u013e": "l",
              "\u0140": "l",
              "\u0142": "l",
              "\u0143": "N",
              "\u0145": "N",
              "\u0147": "N",
              "\u014a": "N",
              "\u0144": "n",
              "\u0146": "n",
              "\u0148": "n",
              "\u014b": "n",
              "\u014c": "O",
              "\u014e": "O",
              "\u0150": "O",
              "\u014d": "o",
              "\u014f": "o",
              "\u0151": "o",
              "\u0154": "R",
              "\u0156": "R",
              "\u0158": "R",
              "\u0155": "r",
              "\u0157": "r",
              "\u0159": "r",
              "\u015a": "S",
              "\u015c": "S",
              "\u015e": "S",
              "\u0160": "S",
              "\u015b": "s",
              "\u015d": "s",
              "\u015f": "s",
              "\u0161": "s",
              "\u0162": "T",
              "\u0164": "T",
              "\u0166": "T",
              "\u0163": "t",
              "\u0165": "t",
              "\u0167": "t",
              "\u0168": "U",
              "\u016a": "U",
              "\u016c": "U",
              "\u016e": "U",
              "\u0170": "U",
              "\u0172": "U",
              "\u0169": "u",
              "\u016b": "u",
              "\u016d": "u",
              "\u016f": "u",
              "\u0171": "u",
              "\u0173": "u",
              "\u0174": "W",
              "\u0175": "w",
              "\u0176": "Y",
              "\u0177": "y",
              "\u0178": "Y",
              "\u0179": "Z",
              "\u017b": "Z",
              "\u017d": "Z",
              "\u017a": "z",
              "\u017c": "z",
              "\u017e": "z",
              "\u0132": "IJ",
              "\u0133": "ij",
              "\u0152": "Oe",
              "\u0153": "oe",
              "\u0149": "'n",
              "\u017f": "s",
            }),
            sn = Ft({
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;",
            });
          function on(e) {
            return "\\" + ct[e];
          }
          function an(e) {
            return nt.test(e);
          }
          function cn(e) {
            var t = -1,
              n = Array(e.size);
            return (
              e.forEach(function (e, r) {
                n[++t] = [r, e];
              }),
              n
            );
          }
          function un(e, t) {
            return function (n) {
              return e(t(n));
            };
          }
          function hn(e, t) {
            for (var n = -1, r = e.length, i = 0, o = []; ++n < r; ) {
              var a = e[n];
              (a === t || a === s) && ((e[n] = s), (o[i++] = n));
            }
            return o;
          }
          function ln(e) {
            var t = -1,
              n = Array(e.size);
            return (
              e.forEach(function (e) {
                n[++t] = e;
              }),
              n
            );
          }
          function pn(e) {
            return an(e)
              ? (function (e) {
                  for (var t = (et.lastIndex = 0); et.test(e); ) ++t;
                  return t;
                })(e)
              : qt(e);
          }
          function dn(e) {
            return an(e)
              ? (function (e) {
                  return e.match(et) || [];
                })(e)
              : (function (e) {
                  return e.split("");
                })(e);
          }
          function fn(e) {
            for (var t = e.length; t-- && se.test(e.charAt(t)); );
            return t;
          }
          var gn = Ft({
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"',
            "&#39;": "'",
          });
          var vn = (function e(t) {
            var se = (t =
                null == t ? dt : vn.defaults(dt.Object(), t, vn.pick(dt, it)))
                .Array,
              Ee = t.Date,
              Ie = t.Error,
              Se = t.Function,
              Pe = t.Math,
              Oe = t.Object,
              Re = t.RegExp,
              Ne = t.String,
              Te = t.TypeError,
              Ae = se.prototype,
              Ce = Se.prototype,
              xe = Oe.prototype,
              Ue = t["__core-js_shared__"],
              je = Ce.toString,
              De = xe.hasOwnProperty,
              Le = 0,
              Me = (function () {
                var e = /[^.]+$/.exec(
                  (Ue && Ue.keys && Ue.keys.IE_PROTO) || ""
                );
                return e ? "Symbol(src)_1." + e : "";
              })(),
              qe = xe.toString,
              ke = je.call(Oe),
              ze = dt._,
              He = Re(
                "^" +
                  je
                    .call(De)
                    .replace(ne, "\\$&")
                    .replace(
                      /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                      "$1.*?"
                    ) +
                  "$"
              ),
              Ve = vt ? t.Buffer : n,
              Ke = t.Symbol,
              Be = t.Uint8Array,
              We = Ve ? Ve.allocUnsafe : n,
              Fe = un(Oe.getPrototypeOf, Oe),
              Ge = Oe.create,
              Je = xe.propertyIsEnumerable,
              Qe = Ae.splice,
              Ye = Ke ? Ke.isConcatSpreadable : n,
              $e = Ke ? Ke.iterator : n,
              et = Ke ? Ke.toStringTag : n,
              nt = (function () {
                try {
                  var e = ls(Oe, "defineProperty");
                  return e({}, "", {}), e;
                } catch {}
              })(),
              ct = t.clearTimeout !== dt.clearTimeout && t.clearTimeout,
              lt = Ee && Ee.now !== dt.Date.now && Ee.now,
              pt = t.setTimeout !== dt.setTimeout && t.setTimeout,
              ft = Pe.ceil,
              gt = Pe.floor,
              yt = Oe.getOwnPropertySymbols,
              mt = Ve ? Ve.isBuffer : n,
              qt = t.isFinite,
              Ft = Ae.join,
              yn = un(Oe.keys, Oe),
              mn = Pe.max,
              wn = Pe.min,
              _n = Ee.now,
              bn = t.parseInt,
              En = Pe.random,
              In = Ae.reverse,
              Sn = ls(t, "DataView"),
              Pn = ls(t, "Map"),
              On = ls(t, "Promise"),
              Rn = ls(t, "Set"),
              Nn = ls(t, "WeakMap"),
              Tn = ls(Oe, "create"),
              An = Nn && new Nn(),
              Cn = {},
              xn = qs(Sn),
              Un = qs(Pn),
              jn = qs(On),
              Dn = qs(Rn),
              Ln = qs(Nn),
              Mn = Ke ? Ke.prototype : n,
              qn = Mn ? Mn.valueOf : n,
              kn = Mn ? Mn.toString : n;
            function zn(e) {
              if (na(e) && !Wo(e) && !(e instanceof Bn)) {
                if (e instanceof Kn) return e;
                if (De.call(e, "__wrapped__")) return ks(e);
              }
              return new Kn(e);
            }
            var Hn = (function () {
              function e() {}
              return function (t) {
                if (!ta(t)) return {};
                if (Ge) return Ge(t);
                e.prototype = t;
                var r = new e();
                return (e.prototype = n), r;
              };
            })();
            function Vn() {}
            function Kn(e, t) {
              (this.__wrapped__ = e),
                (this.__actions__ = []),
                (this.__chain__ = !!t),
                (this.__index__ = 0),
                (this.__values__ = n);
            }
            function Bn(e) {
              (this.__wrapped__ = e),
                (this.__actions__ = []),
                (this.__dir__ = 1),
                (this.__filtered__ = !1),
                (this.__iteratees__ = []),
                (this.__takeCount__ = f),
                (this.__views__ = []);
            }
            function Wn(e) {
              var t = -1,
                n = null == e ? 0 : e.length;
              for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1]);
              }
            }
            function Fn(e) {
              var t = -1,
                n = null == e ? 0 : e.length;
              for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1]);
              }
            }
            function Gn(e) {
              var t = -1,
                n = null == e ? 0 : e.length;
              for (this.clear(); ++t < n; ) {
                var r = e[t];
                this.set(r[0], r[1]);
              }
            }
            function Jn(e) {
              var t = -1,
                n = null == e ? 0 : e.length;
              for (this.__data__ = new Gn(); ++t < n; ) this.add(e[t]);
            }
            function Qn(e) {
              var t = (this.__data__ = new Fn(e));
              this.size = t.size;
            }
            function Yn(e, t) {
              var n = Wo(e),
                r = !n && Bo(e),
                i = !n && !r && Qo(e),
                s = !n && !r && !i && ha(e),
                o = n || r || i || s,
                a = o ? Qt(e.length, Ne) : [],
                c = a.length;
              for (var u in e)
                (t || De.call(e, u)) &&
                  (!o ||
                    !(
                      "length" == u ||
                      (i && ("offset" == u || "parent" == u)) ||
                      (s &&
                        ("buffer" == u ||
                          "byteLength" == u ||
                          "byteOffset" == u)) ||
                      ms(u, c)
                    )) &&
                  a.push(u);
              return a;
            }
            function $n(e) {
              var t = e.length;
              return t ? e[Jr(0, t - 1)] : n;
            }
            function Zn(e, t) {
              return Ds(Ti(e), ar(t, 0, e.length));
            }
            function Xn(e) {
              return Ds(Ti(e));
            }
            function er(e, t, r) {
              ((r !== n && !Ho(e[t], r)) || (r === n && !(t in e))) &&
                sr(e, t, r);
            }
            function tr(e, t, r) {
              var i = e[t];
              (!De.call(e, t) || !Ho(i, r) || (r === n && !(t in e))) &&
                sr(e, t, r);
            }
            function nr(e, t) {
              for (var n = e.length; n--; ) if (Ho(e[n][0], t)) return n;
              return -1;
            }
            function rr(e, t, n, r) {
              return (
                pr(e, function (e, i, s) {
                  t(r, e, n(e), s);
                }),
                r
              );
            }
            function ir(e, t) {
              return e && Ai(t, xa(t), e);
            }
            function sr(e, t, n) {
              "__proto__" == t && nt
                ? nt(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    value: n,
                    writable: !0,
                  })
                : (e[t] = n);
            }
            function or(e, t) {
              for (
                var r = -1, i = t.length, s = se(i), o = null == e;
                ++r < i;

              )
                s[r] = o ? n : Ra(e, t[r]);
              return s;
            }
            function ar(e, t, r) {
              return (
                e === e &&
                  (r !== n && (e = e <= r ? e : r),
                  t !== n && (e = e >= t ? e : t)),
                e
              );
            }
            function cr(e, t, r, i, s, o) {
              var a,
                c = 1 & t,
                u = 2 & t,
                h = 4 & t;
              if ((r && (a = s ? r(e, i, s, o) : r(e)), a !== n)) return a;
              if (!ta(e)) return e;
              var l = Wo(e);
              if (l) {
                if (
                  ((a = (function (e) {
                    var t = e.length,
                      n = new e.constructor(t);
                    return (
                      t &&
                        "string" == typeof e[0] &&
                        De.call(e, "index") &&
                        ((n.index = e.index), (n.input = e.input)),
                      n
                    );
                  })(e)),
                  !c)
                )
                  return Ti(e, a);
              } else {
                var p = fs(e),
                  d = p == b || p == E;
                if (Qo(e)) return Ii(e, c);
                if (p == P || p == v || (d && !s)) {
                  if (((a = u || d ? {} : vs(e)), !c))
                    return u
                      ? (function (e, t) {
                          return Ai(e, ds(e), t);
                        })(
                          e,
                          (function (e, t) {
                            return e && Ai(t, Ua(t), e);
                          })(a, e)
                        )
                      : (function (e, t) {
                          return Ai(e, ps(e), t);
                        })(e, ir(a, e));
                } else {
                  if (!at[p]) return s ? e : {};
                  a = (function (e, t, n) {
                    var r = e.constructor;
                    switch (t) {
                      case x:
                        return Si(e);
                      case m:
                      case w:
                        return new r(+e);
                      case U:
                        return (function (e, t) {
                          var n = t ? Si(e.buffer) : e.buffer;
                          return new e.constructor(
                            n,
                            e.byteOffset,
                            e.byteLength
                          );
                        })(e, n);
                      case j:
                      case D:
                      case L:
                      case M:
                      case q:
                      case k:
                      case z:
                      case H:
                      case V:
                        return Pi(e, n);
                      case I:
                        return new r();
                      case S:
                      case T:
                        return new r(e);
                      case R:
                        return (function (e) {
                          var t = new e.constructor(e.source, de.exec(e));
                          return (t.lastIndex = e.lastIndex), t;
                        })(e);
                      case N:
                        return new r();
                      case A:
                        return (function (e) {
                          return qn ? Oe(qn.call(e)) : {};
                        })(e);
                    }
                  })(e, p, c);
                }
              }
              o || (o = new Qn());
              var f = o.get(e);
              if (f) return f;
              o.set(e, a),
                aa(e)
                  ? e.forEach(function (n) {
                      a.add(cr(n, t, r, n, e, o));
                    })
                  : ra(e) &&
                    e.forEach(function (n, i) {
                      a.set(i, cr(n, t, r, i, e, o));
                    });
              var g = l ? n : (h ? (u ? is : rs) : u ? Ua : xa)(e);
              return (
                Rt(g || e, function (n, i) {
                  g && (n = e[(i = n)]), tr(a, i, cr(n, t, r, i, e, o));
                }),
                a
              );
            }
            function ur(e, t, r) {
              var i = r.length;
              if (null == e) return !i;
              for (e = Oe(e); i--; ) {
                var s = r[i],
                  o = t[s],
                  a = e[s];
                if ((a === n && !(s in e)) || !o(a)) return !1;
              }
              return !0;
            }
            function hr(e, t, i) {
              if ("function" != typeof e) throw new Te(r);
              return Cs(function () {
                e.apply(n, i);
              }, t);
            }
            function lr(e, t, n, r) {
              var i = -1,
                s = Ct,
                o = !0,
                a = e.length,
                c = [],
                u = t.length;
              if (!a) return c;
              n && (t = Ut(t, $t(n))),
                r
                  ? ((s = xt), (o = !1))
                  : t.length >= 200 && ((s = Xt), (o = !1), (t = new Jn(t)));
              e: for (; ++i < a; ) {
                var h = e[i],
                  l = null == n ? h : n(h);
                if (((h = r || 0 !== h ? h : 0), o && l === l)) {
                  for (var p = u; p--; ) if (t[p] === l) continue e;
                  c.push(h);
                } else s(t, l, r) || c.push(h);
              }
              return c;
            }
            (zn.templateSettings = {
              escape: Y,
              evaluate: $,
              interpolate: Z,
              variable: "",
              imports: { _: zn },
            }),
              (zn.prototype = Vn.prototype),
              (zn.prototype.constructor = zn),
              (Kn.prototype = Hn(Vn.prototype)),
              (Kn.prototype.constructor = Kn),
              (Bn.prototype = Hn(Vn.prototype)),
              (Bn.prototype.constructor = Bn),
              (Wn.prototype.clear = function () {
                (this.__data__ = Tn ? Tn(null) : {}), (this.size = 0);
              }),
              (Wn.prototype.delete = function (e) {
                var t = this.has(e) && delete this.__data__[e];
                return (this.size -= t ? 1 : 0), t;
              }),
              (Wn.prototype.get = function (e) {
                var t = this.__data__;
                if (Tn) {
                  var r = t[e];
                  return r === i ? n : r;
                }
                return De.call(t, e) ? t[e] : n;
              }),
              (Wn.prototype.has = function (e) {
                var t = this.__data__;
                return Tn ? t[e] !== n : De.call(t, e);
              }),
              (Wn.prototype.set = function (e, t) {
                var r = this.__data__;
                return (
                  (this.size += this.has(e) ? 0 : 1),
                  (r[e] = Tn && t === n ? i : t),
                  this
                );
              }),
              (Fn.prototype.clear = function () {
                (this.__data__ = []), (this.size = 0);
              }),
              (Fn.prototype.delete = function (e) {
                var t = this.__data__,
                  n = nr(t, e);
                return (
                  !(n < 0) &&
                  (n == t.length - 1 ? t.pop() : Qe.call(t, n, 1),
                  --this.size,
                  !0)
                );
              }),
              (Fn.prototype.get = function (e) {
                var t = this.__data__,
                  r = nr(t, e);
                return r < 0 ? n : t[r][1];
              }),
              (Fn.prototype.has = function (e) {
                return nr(this.__data__, e) > -1;
              }),
              (Fn.prototype.set = function (e, t) {
                var n = this.__data__,
                  r = nr(n, e);
                return (
                  r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this
                );
              }),
              (Gn.prototype.clear = function () {
                (this.size = 0),
                  (this.__data__ = {
                    hash: new Wn(),
                    map: new (Pn || Fn)(),
                    string: new Wn(),
                  });
              }),
              (Gn.prototype.delete = function (e) {
                var t = us(this, e).delete(e);
                return (this.size -= t ? 1 : 0), t;
              }),
              (Gn.prototype.get = function (e) {
                return us(this, e).get(e);
              }),
              (Gn.prototype.has = function (e) {
                return us(this, e).has(e);
              }),
              (Gn.prototype.set = function (e, t) {
                var n = us(this, e),
                  r = n.size;
                return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
              }),
              (Jn.prototype.add = Jn.prototype.push =
                function (e) {
                  return this.__data__.set(e, i), this;
                }),
              (Jn.prototype.has = function (e) {
                return this.__data__.has(e);
              }),
              (Qn.prototype.clear = function () {
                (this.__data__ = new Fn()), (this.size = 0);
              }),
              (Qn.prototype.delete = function (e) {
                var t = this.__data__,
                  n = t.delete(e);
                return (this.size = t.size), n;
              }),
              (Qn.prototype.get = function (e) {
                return this.__data__.get(e);
              }),
              (Qn.prototype.has = function (e) {
                return this.__data__.has(e);
              }),
              (Qn.prototype.set = function (e, t) {
                var n = this.__data__;
                if (n instanceof Fn) {
                  var r = n.__data__;
                  if (!Pn || r.length < 199)
                    return r.push([e, t]), (this.size = ++n.size), this;
                  n = this.__data__ = new Gn(r);
                }
                return n.set(e, t), (this.size = n.size), this;
              });
            var pr = Ui(_r),
              dr = Ui(br, !0);
            function fr(e, t) {
              var n = !0;
              return (
                pr(e, function (e, r, i) {
                  return (n = !!t(e, r, i));
                }),
                n
              );
            }
            function gr(e, t, r) {
              for (var i = -1, s = e.length; ++i < s; ) {
                var o = e[i],
                  a = t(o);
                if (null != a && (c === n ? a === a && !ua(a) : r(a, c)))
                  var c = a,
                    u = o;
              }
              return u;
            }
            function vr(e, t) {
              var n = [];
              return (
                pr(e, function (e, r, i) {
                  t(e, r, i) && n.push(e);
                }),
                n
              );
            }
            function yr(e, t, n, r, i) {
              var s = -1,
                o = e.length;
              for (n || (n = ys), i || (i = []); ++s < o; ) {
                var a = e[s];
                t > 0 && n(a)
                  ? t > 1
                    ? yr(a, t - 1, n, r, i)
                    : jt(i, a)
                  : r || (i[i.length] = a);
              }
              return i;
            }
            var mr = ji(),
              wr = ji(!0);
            function _r(e, t) {
              return e && mr(e, t, xa);
            }
            function br(e, t) {
              return e && wr(e, t, xa);
            }
            function Er(e, t) {
              return At(t, function (t) {
                return Zo(e[t]);
              });
            }
            function Ir(e, t) {
              for (var r = 0, i = (t = wi(t, e)).length; null != e && r < i; )
                e = e[Ms(t[r++])];
              return r && r == i ? e : n;
            }
            function Sr(e, t, n) {
              var r = t(e);
              return Wo(e) ? r : jt(r, n(e));
            }
            function Pr(e) {
              return null == e
                ? e === n
                  ? "[object Undefined]"
                  : "[object Null]"
                : et && et in Oe(e)
                ? (function (e) {
                    var t = De.call(e, et),
                      r = e[et];
                    try {
                      e[et] = n;
                      var i = !0;
                    } catch {}
                    var s = qe.call(e);
                    return i && (t ? (e[et] = r) : delete e[et]), s;
                  })(e)
                : (function (e) {
                    return qe.call(e);
                  })(e);
            }
            function Or(e, t) {
              return e > t;
            }
            function Rr(e, t) {
              return null != e && De.call(e, t);
            }
            function Nr(e, t) {
              return null != e && t in Oe(e);
            }
            function Tr(e, t, r) {
              for (
                var i = r ? xt : Ct,
                  s = e[0].length,
                  o = e.length,
                  a = o,
                  c = se(o),
                  u = 1 / 0,
                  h = [];
                a--;

              ) {
                var l = e[a];
                a && t && (l = Ut(l, $t(t))),
                  (u = wn(l.length, u)),
                  (c[a] =
                    !r && (t || (s >= 120 && l.length >= 120))
                      ? new Jn(a && l)
                      : n);
              }
              l = e[0];
              var p = -1,
                d = c[0];
              e: for (; ++p < s && h.length < u; ) {
                var f = l[p],
                  g = t ? t(f) : f;
                if (
                  ((f = r || 0 !== f ? f : 0), !(d ? Xt(d, g) : i(h, g, r)))
                ) {
                  for (a = o; --a; ) {
                    var v = c[a];
                    if (!(v ? Xt(v, g) : i(e[a], g, r))) continue e;
                  }
                  d && d.push(g), h.push(f);
                }
              }
              return h;
            }
            function Ar(e, t, r) {
              var i = null == (e = Rs(e, (t = wi(t, e)))) ? e : e[Ms(Ys(t))];
              return null == i ? n : Pt(i, e, r);
            }
            function Cr(e) {
              return na(e) && Pr(e) == v;
            }
            function xr(e, t, r, i, s) {
              return (
                e === t ||
                (null == e || null == t || (!na(e) && !na(t))
                  ? e !== e && t !== t
                  : (function (e, t, r, i, s, o) {
                      var a = Wo(e),
                        c = Wo(t),
                        u = a ? y : fs(e),
                        h = c ? y : fs(t),
                        l = (u = u == v ? P : u) == P,
                        p = (h = h == v ? P : h) == P,
                        d = u == h;
                      if (d && Qo(e)) {
                        if (!Qo(t)) return !1;
                        (a = !0), (l = !1);
                      }
                      if (d && !l)
                        return (
                          o || (o = new Qn()),
                          a || ha(e)
                            ? ts(e, t, r, i, s, o)
                            : (function (e, t, n, r, i, s, o) {
                                switch (n) {
                                  case U:
                                    if (
                                      e.byteLength != t.byteLength ||
                                      e.byteOffset != t.byteOffset
                                    )
                                      return !1;
                                    (e = e.buffer), (t = t.buffer);
                                  case x:
                                    return !(
                                      e.byteLength != t.byteLength ||
                                      !s(new Be(e), new Be(t))
                                    );
                                  case m:
                                  case w:
                                  case S:
                                    return Ho(+e, +t);
                                  case _:
                                    return (
                                      e.name == t.name && e.message == t.message
                                    );
                                  case R:
                                  case T:
                                    return e == t + "";
                                  case I:
                                    var a = cn;
                                  case N:
                                    var c = 1 & r;
                                    if ((a || (a = ln), e.size != t.size && !c))
                                      return !1;
                                    var u = o.get(e);
                                    if (u) return u == t;
                                    (r |= 2), o.set(e, t);
                                    var h = ts(a(e), a(t), r, i, s, o);
                                    return o.delete(e), h;
                                  case A:
                                    if (qn) return qn.call(e) == qn.call(t);
                                }
                                return !1;
                              })(e, t, u, r, i, s, o)
                        );
                      if (!(1 & r)) {
                        var f = l && De.call(e, "__wrapped__"),
                          g = p && De.call(t, "__wrapped__");
                        if (f || g) {
                          var b = f ? e.value() : e,
                            E = g ? t.value() : t;
                          return o || (o = new Qn()), s(b, E, r, i, o);
                        }
                      }
                      return (
                        !!d &&
                        (o || (o = new Qn()),
                        (function (e, t, r, i, s, o) {
                          var a = 1 & r,
                            c = rs(e),
                            u = c.length,
                            h = rs(t).length;
                          if (u != h && !a) return !1;
                          for (var l = u; l--; ) {
                            var p = c[l];
                            if (!(a ? p in t : De.call(t, p))) return !1;
                          }
                          var d = o.get(e),
                            f = o.get(t);
                          if (d && f) return d == t && f == e;
                          var g = !0;
                          o.set(e, t), o.set(t, e);
                          for (var v = a; ++l < u; ) {
                            var y = e[(p = c[l])],
                              m = t[p];
                            if (i)
                              var w = a
                                ? i(m, y, p, t, e, o)
                                : i(y, m, p, e, t, o);
                            if (!(w === n ? y === m || s(y, m, r, i, o) : w)) {
                              g = !1;
                              break;
                            }
                            v || (v = "constructor" == p);
                          }
                          if (g && !v) {
                            var _ = e.constructor,
                              b = t.constructor;
                            _ != b &&
                              "constructor" in e &&
                              "constructor" in t &&
                              !(
                                "function" == typeof _ &&
                                _ instanceof _ &&
                                "function" == typeof b &&
                                b instanceof b
                              ) &&
                              (g = !1);
                          }
                          return o.delete(e), o.delete(t), g;
                        })(e, t, r, i, s, o))
                      );
                    })(e, t, r, i, xr, s))
              );
            }
            function Ur(e, t, r, i) {
              var s = r.length,
                o = s,
                a = !i;
              if (null == e) return !o;
              for (e = Oe(e); s--; ) {
                var c = r[s];
                if (a && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1;
              }
              for (; ++s < o; ) {
                var u = (c = r[s])[0],
                  h = e[u],
                  l = c[1];
                if (a && c[2]) {
                  if (h === n && !(u in e)) return !1;
                } else {
                  var p = new Qn();
                  if (i) var d = i(h, l, u, e, t, p);
                  if (!(d === n ? xr(l, h, 3, i, p) : d)) return !1;
                }
              }
              return !0;
            }
            function jr(e) {
              return (
                !(
                  !ta(e) ||
                  (function (e) {
                    return !!Me && Me in e;
                  })(e)
                ) && (Zo(e) ? He : ve).test(qs(e))
              );
            }
            function Dr(e) {
              return "function" == typeof e
                ? e
                : null == e
                ? ic
                : "object" == typeof e
                ? Wo(e)
                  ? Hr(e[0], e[1])
                  : zr(e)
                : dc(e);
            }
            function Lr(e) {
              if (!Is(e)) return yn(e);
              var t = [];
              for (var n in Oe(e))
                De.call(e, n) && "constructor" != n && t.push(n);
              return t;
            }
            function Mr(e) {
              if (!ta(e))
                return (function (e) {
                  var t = [];
                  if (null != e) for (var n in Oe(e)) t.push(n);
                  return t;
                })(e);
              var t = Is(e),
                n = [];
              for (var r in e)
                ("constructor" == r && (t || !De.call(e, r))) || n.push(r);
              return n;
            }
            function qr(e, t) {
              return e < t;
            }
            function kr(e, t) {
              var n = -1,
                r = Go(e) ? se(e.length) : [];
              return (
                pr(e, function (e, i, s) {
                  r[++n] = t(e, i, s);
                }),
                r
              );
            }
            function zr(e) {
              var t = hs(e);
              return 1 == t.length && t[0][2]
                ? Ps(t[0][0], t[0][1])
                : function (n) {
                    return n === e || Ur(n, e, t);
                  };
            }
            function Hr(e, t) {
              return _s(e) && Ss(t)
                ? Ps(Ms(e), t)
                : function (r) {
                    var i = Ra(r, e);
                    return i === n && i === t ? Na(r, e) : xr(t, i, 3);
                  };
            }
            function Vr(e, t, r, i, s) {
              e !== t &&
                mr(
                  t,
                  function (o, a) {
                    if ((s || (s = new Qn()), ta(o)))
                      !(function (e, t, r, i, s, o, a) {
                        var c = Ts(e, r),
                          u = Ts(t, r),
                          h = a.get(u);
                        if (h) return void er(e, r, h);
                        var l = o ? o(c, u, r + "", e, t, a) : n,
                          p = l === n;
                        if (p) {
                          var d = Wo(u),
                            f = !d && Qo(u),
                            g = !d && !f && ha(u);
                          (l = u),
                            d || f || g
                              ? Wo(c)
                                ? (l = c)
                                : Jo(c)
                                ? (l = Ti(c))
                                : f
                                ? ((p = !1), (l = Ii(u, !0)))
                                : g
                                ? ((p = !1), (l = Pi(u, !0)))
                                : (l = [])
                              : sa(u) || Bo(u)
                              ? ((l = c),
                                Bo(c)
                                  ? (l = ma(c))
                                  : (!ta(c) || Zo(c)) && (l = vs(u)))
                              : (p = !1);
                        }
                        p && (a.set(u, l), s(l, u, i, o, a), a.delete(u)),
                          er(e, r, l);
                      })(e, t, a, r, Vr, i, s);
                    else {
                      var c = i ? i(Ts(e, a), o, a + "", e, t, s) : n;
                      c === n && (c = o), er(e, a, c);
                    }
                  },
                  Ua
                );
            }
            function Kr(e, t) {
              var r = e.length;
              if (r) return ms((t += t < 0 ? r : 0), r) ? e[t] : n;
            }
            function Br(e, t, n) {
              t = t.length
                ? Ut(t, function (e) {
                    return Wo(e)
                      ? function (t) {
                          return Ir(t, 1 === e.length ? e[0] : e);
                        }
                      : e;
                  })
                : [ic];
              var r = -1;
              return (
                (t = Ut(t, $t(cs()))),
                (function (e, t) {
                  var n = e.length;
                  for (e.sort(t); n--; ) e[n] = e[n].value;
                  return e;
                })(
                  kr(e, function (e, n, i) {
                    return {
                      criteria: Ut(t, function (t) {
                        return t(e);
                      }),
                      index: ++r,
                      value: e,
                    };
                  }),
                  function (e, t) {
                    return (function (e, t, n) {
                      for (
                        var r = -1,
                          i = e.criteria,
                          s = t.criteria,
                          o = i.length,
                          a = n.length;
                        ++r < o;

                      ) {
                        var c = Oi(i[r], s[r]);
                        if (c)
                          return r >= a ? c : c * ("desc" == n[r] ? -1 : 1);
                      }
                      return e.index - t.index;
                    })(e, t, n);
                  }
                )
              );
            }
            function Wr(e, t, n) {
              for (var r = -1, i = t.length, s = {}; ++r < i; ) {
                var o = t[r],
                  a = Ir(e, o);
                n(a, o) && Xr(s, wi(o, e), a);
              }
              return s;
            }
            function Fr(e, t, n, r) {
              var i = r ? Vt : Ht,
                s = -1,
                o = t.length,
                a = e;
              for (e === t && (t = Ti(t)), n && (a = Ut(e, $t(n))); ++s < o; )
                for (
                  var c = 0, u = t[s], h = n ? n(u) : u;
                  (c = i(a, h, c, r)) > -1;

                )
                  a !== e && Qe.call(a, c, 1), Qe.call(e, c, 1);
              return e;
            }
            function Gr(e, t) {
              for (var n = e ? t.length : 0, r = n - 1; n--; ) {
                var i = t[n];
                if (n == r || i !== s) {
                  var s = i;
                  ms(i) ? Qe.call(e, i, 1) : li(e, i);
                }
              }
              return e;
            }
            function Jr(e, t) {
              return e + gt(En() * (t - e + 1));
            }
            function Qr(e, t) {
              var n = "";
              if (!e || t < 1 || t > p) return n;
              do {
                t % 2 && (n += e), (t = gt(t / 2)) && (e += e);
              } while (t);
              return n;
            }
            function Yr(e, t) {
              return xs(Os(e, t, ic), e + "");
            }
            function $r(e) {
              return $n(Ha(e));
            }
            function Zr(e, t) {
              var n = Ha(e);
              return Ds(n, ar(t, 0, n.length));
            }
            function Xr(e, t, r, i) {
              if (!ta(e)) return e;
              for (
                var s = -1, o = (t = wi(t, e)).length, a = o - 1, c = e;
                null != c && ++s < o;

              ) {
                var u = Ms(t[s]),
                  h = r;
                if (
                  "__proto__" === u ||
                  "constructor" === u ||
                  "prototype" === u
                )
                  return e;
                if (s != a) {
                  var l = c[u];
                  (h = i ? i(l, u, c) : n) === n &&
                    (h = ta(l) ? l : ms(t[s + 1]) ? [] : {});
                }
                tr(c, u, h), (c = c[u]);
              }
              return e;
            }
            var ei = An
                ? function (e, t) {
                    return An.set(e, t), e;
                  }
                : ic,
              ti = nt
                ? function (e, t) {
                    return nt(e, "toString", {
                      configurable: !0,
                      enumerable: !1,
                      value: tc(t),
                      writable: !0,
                    });
                  }
                : ic;
            function ni(e) {
              return Ds(Ha(e));
            }
            function ri(e, t, n) {
              var r = -1,
                i = e.length;
              t < 0 && (t = -t > i ? 0 : i + t),
                (n = n > i ? i : n) < 0 && (n += i),
                (i = t > n ? 0 : (n - t) >>> 0),
                (t >>>= 0);
              for (var s = se(i); ++r < i; ) s[r] = e[r + t];
              return s;
            }
            function ii(e, t) {
              var n;
              return (
                pr(e, function (e, r, i) {
                  return !(n = t(e, r, i));
                }),
                !!n
              );
            }
            function si(e, t, n) {
              var r = 0,
                i = null == e ? r : e.length;
              if ("number" == typeof t && t === t && i <= 2147483647) {
                for (; r < i; ) {
                  var s = (r + i) >>> 1,
                    o = e[s];
                  null !== o && !ua(o) && (n ? o <= t : o < t)
                    ? (r = s + 1)
                    : (i = s);
                }
                return i;
              }
              return oi(e, t, ic, n);
            }
            function oi(e, t, r, i) {
              var s = 0,
                o = null == e ? 0 : e.length;
              if (0 === o) return 0;
              for (
                var a = (t = r(t)) !== t,
                  c = null === t,
                  u = ua(t),
                  h = t === n;
                s < o;

              ) {
                var l = gt((s + o) / 2),
                  p = r(e[l]),
                  d = p !== n,
                  f = null === p,
                  g = p === p,
                  v = ua(p);
                if (a) var y = i || g;
                else
                  y = h
                    ? g && (i || d)
                    : c
                    ? g && d && (i || !f)
                    : u
                    ? g && d && !f && (i || !v)
                    : !f && !v && (i ? p <= t : p < t);
                y ? (s = l + 1) : (o = l);
              }
              return wn(o, 4294967294);
            }
            function ai(e, t) {
              for (var n = -1, r = e.length, i = 0, s = []; ++n < r; ) {
                var o = e[n],
                  a = t ? t(o) : o;
                if (!n || !Ho(a, c)) {
                  var c = a;
                  s[i++] = 0 === o ? 0 : o;
                }
              }
              return s;
            }
            function ci(e) {
              return "number" == typeof e ? e : ua(e) ? d : +e;
            }
            function ui(e) {
              if ("string" == typeof e) return e;
              if (Wo(e)) return Ut(e, ui) + "";
              if (ua(e)) return kn ? kn.call(e) : "";
              var t = e + "";
              return "0" == t && 1 / e == -l ? "-0" : t;
            }
            function hi(e, t, n) {
              var r = -1,
                i = Ct,
                s = e.length,
                o = !0,
                a = [],
                c = a;
              if (n) (o = !1), (i = xt);
              else if (s >= 200) {
                var u = t ? null : Qi(e);
                if (u) return ln(u);
                (o = !1), (i = Xt), (c = new Jn());
              } else c = t ? [] : a;
              e: for (; ++r < s; ) {
                var h = e[r],
                  l = t ? t(h) : h;
                if (((h = n || 0 !== h ? h : 0), o && l === l)) {
                  for (var p = c.length; p--; ) if (c[p] === l) continue e;
                  t && c.push(l), a.push(h);
                } else i(c, l, n) || (c !== a && c.push(l), a.push(h));
              }
              return a;
            }
            function li(e, t) {
              return null == (e = Rs(e, (t = wi(t, e)))) || delete e[Ms(Ys(t))];
            }
            function pi(e, t, n, r) {
              return Xr(e, t, n(Ir(e, t)), r);
            }
            function di(e, t, n, r) {
              for (
                var i = e.length, s = r ? i : -1;
                (r ? s-- : ++s < i) && t(e[s], s, e);

              );
              return n
                ? ri(e, r ? 0 : s, r ? s + 1 : i)
                : ri(e, r ? s + 1 : 0, r ? i : s);
            }
            function fi(e, t) {
              var n = e;
              return (
                n instanceof Bn && (n = n.value()),
                Dt(
                  t,
                  function (e, t) {
                    return t.func.apply(t.thisArg, jt([e], t.args));
                  },
                  n
                )
              );
            }
            function gi(e, t, n) {
              var r = e.length;
              if (r < 2) return r ? hi(e[0]) : [];
              for (var i = -1, s = se(r); ++i < r; )
                for (var o = e[i], a = -1; ++a < r; )
                  a != i && (s[i] = lr(s[i] || o, e[a], t, n));
              return hi(yr(s, 1), t, n);
            }
            function vi(e, t, r) {
              for (var i = -1, s = e.length, o = t.length, a = {}; ++i < s; ) {
                var c = i < o ? t[i] : n;
                r(a, e[i], c);
              }
              return a;
            }
            function yi(e) {
              return Jo(e) ? e : [];
            }
            function mi(e) {
              return "function" == typeof e ? e : ic;
            }
            function wi(e, t) {
              return Wo(e) ? e : _s(e, t) ? [e] : Ls(wa(e));
            }
            var _i = Yr;
            function bi(e, t, r) {
              var i = e.length;
              return (r = r === n ? i : r), !t && r >= i ? e : ri(e, t, r);
            }
            var Ei =
              ct ||
              function (e) {
                return dt.clearTimeout(e);
              };
            function Ii(e, t) {
              if (t) return e.slice();
              var n = e.length,
                r = We ? We(n) : new e.constructor(n);
              return e.copy(r), r;
            }
            function Si(e) {
              var t = new e.constructor(e.byteLength);
              return new Be(t).set(new Be(e)), t;
            }
            function Pi(e, t) {
              var n = t ? Si(e.buffer) : e.buffer;
              return new e.constructor(n, e.byteOffset, e.length);
            }
            function Oi(e, t) {
              if (e !== t) {
                var r = e !== n,
                  i = null === e,
                  s = e === e,
                  o = ua(e),
                  a = t !== n,
                  c = null === t,
                  u = t === t,
                  h = ua(t);
                if (
                  (!c && !h && !o && e > t) ||
                  (o && a && u && !c && !h) ||
                  (i && a && u) ||
                  (!r && u) ||
                  !s
                )
                  return 1;
                if (
                  (!i && !o && !h && e < t) ||
                  (h && r && s && !i && !o) ||
                  (c && r && s) ||
                  (!a && s) ||
                  !u
                )
                  return -1;
              }
              return 0;
            }
            function Ri(e, t, n, r) {
              for (
                var i = -1,
                  s = e.length,
                  o = n.length,
                  a = -1,
                  c = t.length,
                  u = mn(s - o, 0),
                  h = se(c + u),
                  l = !r;
                ++a < c;

              )
                h[a] = t[a];
              for (; ++i < o; ) (l || i < s) && (h[n[i]] = e[i]);
              for (; u--; ) h[a++] = e[i++];
              return h;
            }
            function Ni(e, t, n, r) {
              for (
                var i = -1,
                  s = e.length,
                  o = -1,
                  a = n.length,
                  c = -1,
                  u = t.length,
                  h = mn(s - a, 0),
                  l = se(h + u),
                  p = !r;
                ++i < h;

              )
                l[i] = e[i];
              for (var d = i; ++c < u; ) l[d + c] = t[c];
              for (; ++o < a; ) (p || i < s) && (l[d + n[o]] = e[i++]);
              return l;
            }
            function Ti(e, t) {
              var n = -1,
                r = e.length;
              for (t || (t = se(r)); ++n < r; ) t[n] = e[n];
              return t;
            }
            function Ai(e, t, r, i) {
              var s = !r;
              r || (r = {});
              for (var o = -1, a = t.length; ++o < a; ) {
                var c = t[o],
                  u = i ? i(r[c], e[c], c, r, e) : n;
                u === n && (u = e[c]), s ? sr(r, c, u) : tr(r, c, u);
              }
              return r;
            }
            function Ci(e, t) {
              return function (n, r) {
                var i = Wo(n) ? Ot : rr,
                  s = t ? t() : {};
                return i(n, e, cs(r, 2), s);
              };
            }
            function xi(e) {
              return Yr(function (t, r) {
                var i = -1,
                  s = r.length,
                  o = s > 1 ? r[s - 1] : n,
                  a = s > 2 ? r[2] : n;
                for (
                  o = e.length > 3 && "function" == typeof o ? (s--, o) : n,
                    a && ws(r[0], r[1], a) && ((o = s < 3 ? n : o), (s = 1)),
                    t = Oe(t);
                  ++i < s;

                ) {
                  var c = r[i];
                  c && e(t, c, i, o);
                }
                return t;
              });
            }
            function Ui(e, t) {
              return function (n, r) {
                if (null == n) return n;
                if (!Go(n)) return e(n, r);
                for (
                  var i = n.length, s = t ? i : -1, o = Oe(n);
                  (t ? s-- : ++s < i) && !1 !== r(o[s], s, o);

                );
                return n;
              };
            }
            function ji(e) {
              return function (t, n, r) {
                for (var i = -1, s = Oe(t), o = r(t), a = o.length; a--; ) {
                  var c = o[e ? a : ++i];
                  if (!1 === n(s[c], c, s)) break;
                }
                return t;
              };
            }
            function Di(e) {
              return function (t) {
                var r = an((t = wa(t))) ? dn(t) : n,
                  i = r ? r[0] : t.charAt(0),
                  s = r ? bi(r, 1).join("") : t.slice(1);
                return i[e]() + s;
              };
            }
            function Li(e) {
              return function (t) {
                return Dt(Za(Ba(t).replace(Ze, "")), e, "");
              };
            }
            function Mi(e) {
              return function () {
                var t = arguments;
                switch (t.length) {
                  case 0:
                    return new e();
                  case 1:
                    return new e(t[0]);
                  case 2:
                    return new e(t[0], t[1]);
                  case 3:
                    return new e(t[0], t[1], t[2]);
                  case 4:
                    return new e(t[0], t[1], t[2], t[3]);
                  case 5:
                    return new e(t[0], t[1], t[2], t[3], t[4]);
                  case 6:
                    return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                  case 7:
                    return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
                }
                var n = Hn(e.prototype),
                  r = e.apply(n, t);
                return ta(r) ? r : n;
              };
            }
            function qi(e) {
              return function (t, r, i) {
                var s = Oe(t);
                if (!Go(t)) {
                  var o = cs(r, 3);
                  (t = xa(t)),
                    (r = function (e) {
                      return o(s[e], e, s);
                    });
                }
                var a = e(t, r, i);
                return a > -1 ? s[o ? t[a] : a] : n;
              };
            }
            function ki(e) {
              return ns(function (t) {
                var i = t.length,
                  s = i,
                  o = Kn.prototype.thru;
                for (e && t.reverse(); s--; ) {
                  var a = t[s];
                  if ("function" != typeof a) throw new Te(r);
                  if (o && !c && "wrapper" == os(a)) var c = new Kn([], !0);
                }
                for (s = c ? s : i; ++s < i; ) {
                  var u = os((a = t[s])),
                    h = "wrapper" == u ? ss(a) : n;
                  c =
                    h && bs(h[0]) && 424 == h[1] && !h[4].length && 1 == h[9]
                      ? c[os(h[0])].apply(c, h[3])
                      : 1 == a.length && bs(a)
                      ? c[u]()
                      : c.thru(a);
                }
                return function () {
                  var e = arguments,
                    n = e[0];
                  if (c && 1 == e.length && Wo(n)) return c.plant(n).value();
                  for (var r = 0, s = i ? t[r].apply(this, e) : n; ++r < i; )
                    s = t[r].call(this, s);
                  return s;
                };
              });
            }
            function zi(e, t, r, i, s, o, a, c, h, l) {
              var p = t & u,
                d = 1 & t,
                f = 2 & t,
                g = 24 & t,
                v = 512 & t,
                y = f ? n : Mi(e);
              return function n() {
                for (var u = arguments.length, m = se(u), w = u; w--; )
                  m[w] = arguments[w];
                if (g)
                  var _ = as(n),
                    b = nn(m, _);
                if (
                  (i && (m = Ri(m, i, s, g)),
                  o && (m = Ni(m, o, a, g)),
                  (u -= b),
                  g && u < l)
                ) {
                  var E = hn(m, _);
                  return Gi(e, t, zi, n.placeholder, r, m, E, c, h, l - u);
                }
                var I = d ? r : this,
                  S = f ? I[e] : e;
                return (
                  (u = m.length),
                  c ? (m = Ns(m, c)) : v && u > 1 && m.reverse(),
                  p && h < u && (m.length = h),
                  this && this !== dt && this instanceof n && (S = y || Mi(S)),
                  S.apply(I, m)
                );
              };
            }
            function Hi(e, t) {
              return function (n, r) {
                return (function (e, t, n, r) {
                  return (
                    _r(e, function (e, i, s) {
                      t(r, n(e), i, s);
                    }),
                    r
                  );
                })(n, e, t(r), {});
              };
            }
            function Vi(e, t) {
              return function (r, i) {
                var s;
                if (r === n && i === n) return t;
                if ((r !== n && (s = r), i !== n)) {
                  if (s === n) return i;
                  "string" == typeof r || "string" == typeof i
                    ? ((r = ui(r)), (i = ui(i)))
                    : ((r = ci(r)), (i = ci(i))),
                    (s = e(r, i));
                }
                return s;
              };
            }
            function Ki(e) {
              return ns(function (t) {
                return (
                  (t = Ut(t, $t(cs()))),
                  Yr(function (n) {
                    var r = this;
                    return e(t, function (e) {
                      return Pt(e, r, n);
                    });
                  })
                );
              });
            }
            function Bi(e, t) {
              var r = (t = t === n ? " " : ui(t)).length;
              if (r < 2) return r ? Qr(t, e) : t;
              var i = Qr(t, ft(e / pn(t)));
              return an(t) ? bi(dn(i), 0, e).join("") : i.slice(0, e);
            }
            function Wi(e) {
              return function (t, r, i) {
                return (
                  i && "number" != typeof i && ws(t, r, i) && (r = i = n),
                  (t = fa(t)),
                  r === n ? ((r = t), (t = 0)) : (r = fa(r)),
                  (function (e, t, n, r) {
                    for (
                      var i = -1, s = mn(ft((t - e) / (n || 1)), 0), o = se(s);
                      s--;

                    )
                      (o[r ? s : ++i] = e), (e += n);
                    return o;
                  })(t, r, (i = i === n ? (t < r ? 1 : -1) : fa(i)), e)
                );
              };
            }
            function Fi(e) {
              return function (t, n) {
                return (
                  ("string" == typeof t && "string" == typeof n) ||
                    ((t = ya(t)), (n = ya(n))),
                  e(t, n)
                );
              };
            }
            function Gi(e, t, r, i, s, o, u, h, l, p) {
              var d = 8 & t;
              (t |= d ? a : c), 4 & (t &= ~(d ? c : a)) || (t &= -4);
              var f = [
                  e,
                  t,
                  s,
                  d ? o : n,
                  d ? u : n,
                  d ? n : o,
                  d ? n : u,
                  h,
                  l,
                  p,
                ],
                g = r.apply(n, f);
              return bs(e) && As(g, f), (g.placeholder = i), Us(g, e, t);
            }
            function Ji(e) {
              var t = Pe[e];
              return function (e, n) {
                if (
                  ((e = ya(e)), (n = null == n ? 0 : wn(ga(n), 292)) && qt(e))
                ) {
                  var r = (wa(e) + "e").split("e");
                  return +(
                    (r = (wa(t(r[0] + "e" + (+r[1] + n))) + "e").split(
                      "e"
                    ))[0] +
                    "e" +
                    (+r[1] - n)
                  );
                }
                return t(e);
              };
            }
            var Qi =
              Rn && 1 / ln(new Rn([, -0]))[1] == l
                ? function (e) {
                    return new Rn(e);
                  }
                : uc;
            function Yi(e) {
              return function (t) {
                var n = fs(t);
                return n == I
                  ? cn(t)
                  : n == N
                  ? (function (e) {
                      var t = -1,
                        n = Array(e.size);
                      return (
                        e.forEach(function (e) {
                          n[++t] = [e, e];
                        }),
                        n
                      );
                    })(t)
                  : (function (e, t) {
                      return Ut(t, function (t) {
                        return [t, e[t]];
                      });
                    })(t, e(t));
              };
            }
            function $i(e, t, i, l, p, d, f, g) {
              var v = 2 & t;
              if (!v && "function" != typeof e) throw new Te(r);
              var y = l ? l.length : 0;
              if (
                (y || ((t &= -97), (l = p = n)),
                (f = f === n ? f : mn(ga(f), 0)),
                (g = g === n ? g : ga(g)),
                (y -= p ? p.length : 0),
                t & c)
              ) {
                var m = l,
                  w = p;
                l = p = n;
              }
              var _ = v ? n : ss(e),
                b = [e, t, i, l, p, m, w, d, f, g];
              if (
                (_ &&
                  (function (e, t) {
                    var n = e[1],
                      r = t[1],
                      i = n | r,
                      o = i < 131,
                      a =
                        (r == u && 8 == n) ||
                        (r == u && n == h && e[7].length <= t[8]) ||
                        (384 == r && t[7].length <= t[8] && 8 == n);
                    if (!o && !a) return e;
                    1 & r && ((e[2] = t[2]), (i |= 1 & n ? 0 : 4));
                    var c = t[3];
                    if (c) {
                      var l = e[3];
                      (e[3] = l ? Ri(l, c, t[4]) : c),
                        (e[4] = l ? hn(e[3], s) : t[4]);
                    }
                    (c = t[5]) &&
                      ((l = e[5]),
                      (e[5] = l ? Ni(l, c, t[6]) : c),
                      (e[6] = l ? hn(e[5], s) : t[6])),
                      (c = t[7]) && (e[7] = c),
                      r & u && (e[8] = null == e[8] ? t[8] : wn(e[8], t[8])),
                      null == e[9] && (e[9] = t[9]),
                      (e[0] = t[0]),
                      (e[1] = i);
                  })(b, _),
                (e = b[0]),
                (t = b[1]),
                (i = b[2]),
                (l = b[3]),
                (p = b[4]),
                !(g = b[9] =
                  b[9] === n ? (v ? 0 : e.length) : mn(b[9] - y, 0)) &&
                  24 & t &&
                  (t &= -25),
                t && 1 != t)
              )
                E =
                  8 == t || t == o
                    ? (function (e, t, r) {
                        var i = Mi(e);
                        return function s() {
                          for (
                            var o = arguments.length,
                              a = se(o),
                              c = o,
                              u = as(s);
                            c--;

                          )
                            a[c] = arguments[c];
                          var h =
                            o < 3 && a[0] !== u && a[o - 1] !== u
                              ? []
                              : hn(a, u);
                          return (o -= h.length) < r
                            ? Gi(e, t, zi, s.placeholder, n, a, h, n, n, r - o)
                            : Pt(
                                this && this !== dt && this instanceof s
                                  ? i
                                  : e,
                                this,
                                a
                              );
                        };
                      })(e, t, g)
                    : (t != a && 33 != t) || p.length
                    ? zi.apply(n, b)
                    : (function (e, t, n, r) {
                        var i = 1 & t,
                          s = Mi(e);
                        return function t() {
                          for (
                            var o = -1,
                              a = arguments.length,
                              c = -1,
                              u = r.length,
                              h = se(u + a),
                              l =
                                this && this !== dt && this instanceof t
                                  ? s
                                  : e;
                            ++c < u;

                          )
                            h[c] = r[c];
                          for (; a--; ) h[c++] = arguments[++o];
                          return Pt(l, i ? n : this, h);
                        };
                      })(e, t, i, l);
              else
                var E = (function (e, t, n) {
                  var r = 1 & t,
                    i = Mi(e);
                  return function t() {
                    return (
                      this && this !== dt && this instanceof t ? i : e
                    ).apply(r ? n : this, arguments);
                  };
                })(e, t, i);
              return Us((_ ? ei : As)(E, b), e, t);
            }
            function Zi(e, t, r, i) {
              return e === n || (Ho(e, xe[r]) && !De.call(i, r)) ? t : e;
            }
            function Xi(e, t, r, i, s, o) {
              return (
                ta(e) &&
                  ta(t) &&
                  (o.set(t, e), Vr(e, t, n, Xi, o), o.delete(t)),
                e
              );
            }
            function es(e) {
              return sa(e) ? n : e;
            }
            function ts(e, t, r, i, s, o) {
              var a = 1 & r,
                c = e.length,
                u = t.length;
              if (c != u && !(a && u > c)) return !1;
              var h = o.get(e),
                l = o.get(t);
              if (h && l) return h == t && l == e;
              var p = -1,
                d = !0,
                f = 2 & r ? new Jn() : n;
              for (o.set(e, t), o.set(t, e); ++p < c; ) {
                var g = e[p],
                  v = t[p];
                if (i) var y = a ? i(v, g, p, t, e, o) : i(g, v, p, e, t, o);
                if (y !== n) {
                  if (y) continue;
                  d = !1;
                  break;
                }
                if (f) {
                  if (
                    !Mt(t, function (e, t) {
                      if (!Xt(f, t) && (g === e || s(g, e, r, i, o)))
                        return f.push(t);
                    })
                  ) {
                    d = !1;
                    break;
                  }
                } else if (g !== v && !s(g, v, r, i, o)) {
                  d = !1;
                  break;
                }
              }
              return o.delete(e), o.delete(t), d;
            }
            function ns(e) {
              return xs(Os(e, n, Ws), e + "");
            }
            function rs(e) {
              return Sr(e, xa, ps);
            }
            function is(e) {
              return Sr(e, Ua, ds);
            }
            var ss = An
              ? function (e) {
                  return An.get(e);
                }
              : uc;
            function os(e) {
              for (
                var t = e.name + "",
                  n = Cn[t],
                  r = De.call(Cn, t) ? n.length : 0;
                r--;

              ) {
                var i = n[r],
                  s = i.func;
                if (null == s || s == e) return i.name;
              }
              return t;
            }
            function as(e) {
              return (De.call(zn, "placeholder") ? zn : e).placeholder;
            }
            function cs() {
              var e = zn.iteratee || sc;
              return (
                (e = e === sc ? Dr : e),
                arguments.length ? e(arguments[0], arguments[1]) : e
              );
            }
            function us(e, t) {
              var n = e.__data__;
              return (function (e) {
                var t = typeof e;
                return "string" == t ||
                  "number" == t ||
                  "symbol" == t ||
                  "boolean" == t
                  ? "__proto__" !== e
                  : null === e;
              })(t)
                ? n["string" == typeof t ? "string" : "hash"]
                : n.map;
            }
            function hs(e) {
              for (var t = xa(e), n = t.length; n--; ) {
                var r = t[n],
                  i = e[r];
                t[n] = [r, i, Ss(i)];
              }
              return t;
            }
            function ls(e, t) {
              var r = (function (e, t) {
                return null == e ? n : e[t];
              })(e, t);
              return jr(r) ? r : n;
            }
            var ps = yt
                ? function (e) {
                    return null == e
                      ? []
                      : ((e = Oe(e)),
                        At(yt(e), function (t) {
                          return Je.call(e, t);
                        }));
                  }
                : vc,
              ds = yt
                ? function (e) {
                    for (var t = []; e; ) jt(t, ps(e)), (e = Fe(e));
                    return t;
                  }
                : vc,
              fs = Pr;
            function gs(e, t, n) {
              for (var r = -1, i = (t = wi(t, e)).length, s = !1; ++r < i; ) {
                var o = Ms(t[r]);
                if (!(s = null != e && n(e, o))) break;
                e = e[o];
              }
              return s || ++r != i
                ? s
                : !!(i = null == e ? 0 : e.length) &&
                    ea(i) &&
                    ms(o, i) &&
                    (Wo(e) || Bo(e));
            }
            function vs(e) {
              return "function" != typeof e.constructor || Is(e)
                ? {}
                : Hn(Fe(e));
            }
            function ys(e) {
              return Wo(e) || Bo(e) || !!(Ye && e && e[Ye]);
            }
            function ms(e, t) {
              var n,
                r = typeof e;
              return (
                !!(t = null !== (n = t) && void 0 !== n ? n : p) &&
                ("number" == r || ("symbol" != r && me.test(e))) &&
                e > -1 &&
                e % 1 == 0 &&
                e < t
              );
            }
            function ws(e, t, n) {
              if (!ta(n)) return !1;
              var r = typeof t;
              return (
                !!("number" == r
                  ? Go(n) && ms(t, n.length)
                  : "string" == r && t in n) && Ho(n[t], e)
              );
            }
            function _s(e, t) {
              if (Wo(e)) return !1;
              var n = typeof e;
              return (
                !(
                  "number" != n &&
                  "symbol" != n &&
                  "boolean" != n &&
                  null != e &&
                  !ua(e)
                ) ||
                ee.test(e) ||
                !X.test(e) ||
                (null != t && e in Oe(t))
              );
            }
            function bs(e) {
              var t = os(e),
                n = zn[t];
              if ("function" != typeof n || !(t in Bn.prototype)) return !1;
              if (e === n) return !0;
              var r = ss(n);
              return !!r && e === r[0];
            }
            ((Sn && fs(new Sn(new ArrayBuffer(1))) != U) ||
              (Pn && fs(new Pn()) != I) ||
              (On && fs(On.resolve()) != O) ||
              (Rn && fs(new Rn()) != N) ||
              (Nn && fs(new Nn()) != C)) &&
              (fs = function (e) {
                var t = Pr(e),
                  r = t == P ? e.constructor : n,
                  i = r ? qs(r) : "";
                if (i)
                  switch (i) {
                    case xn:
                      return U;
                    case Un:
                      return I;
                    case jn:
                      return O;
                    case Dn:
                      return N;
                    case Ln:
                      return C;
                  }
                return t;
              });
            var Es = Ue ? Zo : yc;
            function Is(e) {
              var t = e && e.constructor;
              return e === (("function" == typeof t && t.prototype) || xe);
            }
            function Ss(e) {
              return e === e && !ta(e);
            }
            function Ps(e, t) {
              return function (r) {
                return null != r && r[e] === t && (t !== n || e in Oe(r));
              };
            }
            function Os(e, t, r) {
              return (
                (t = mn(t === n ? e.length - 1 : t, 0)),
                function () {
                  for (
                    var n = arguments,
                      i = -1,
                      s = mn(n.length - t, 0),
                      o = se(s);
                    ++i < s;

                  )
                    o[i] = n[t + i];
                  i = -1;
                  for (var a = se(t + 1); ++i < t; ) a[i] = n[i];
                  return (a[t] = r(o)), Pt(e, this, a);
                }
              );
            }
            function Rs(e, t) {
              return t.length < 2 ? e : Ir(e, ri(t, 0, -1));
            }
            function Ns(e, t) {
              for (var r = e.length, i = wn(t.length, r), s = Ti(e); i--; ) {
                var o = t[i];
                e[i] = ms(o, r) ? s[o] : n;
              }
              return e;
            }
            function Ts(e, t) {
              if (
                ("constructor" !== t || "function" != typeof e[t]) &&
                "__proto__" != t
              )
                return e[t];
            }
            var As = js(ei),
              Cs =
                pt ||
                function (e, t) {
                  return dt.setTimeout(e, t);
                },
              xs = js(ti);
            function Us(e, t, n) {
              var r = t + "";
              return xs(
                e,
                (function (e, t) {
                  var n = t.length;
                  if (!n) return e;
                  var r = n - 1;
                  return (
                    (t[r] = (n > 1 ? "& " : "") + t[r]),
                    (t = t.join(n > 2 ? ", " : " ")),
                    e.replace(oe, "{\n/* [wrapped with " + t + "] */\n")
                  );
                })(
                  r,
                  (function (e, t) {
                    return (
                      Rt(g, function (n) {
                        var r = "_." + n[0];
                        t & n[1] && !Ct(e, r) && e.push(r);
                      }),
                      e.sort()
                    );
                  })(
                    (function (e) {
                      var t = e.match(ae);
                      return t ? t[1].split(ce) : [];
                    })(r),
                    n
                  )
                )
              );
            }
            function js(e) {
              var t = 0,
                r = 0;
              return function () {
                var i = _n(),
                  s = 16 - (i - r);
                if (((r = i), s > 0)) {
                  if (++t >= 800) return arguments[0];
                } else t = 0;
                return e.apply(n, arguments);
              };
            }
            function Ds(e, t) {
              var r = -1,
                i = e.length,
                s = i - 1;
              for (t = t === n ? i : t; ++r < t; ) {
                var o = Jr(r, s),
                  a = e[o];
                (e[o] = e[r]), (e[r] = a);
              }
              return (e.length = t), e;
            }
            var Ls = (function (e) {
              var t = Do(e, function (e) {
                  return 500 === n.size && n.clear(), e;
                }),
                n = t.cache;
              return t;
            })(function (e) {
              var t = [];
              return (
                46 === e.charCodeAt(0) && t.push(""),
                e.replace(te, function (e, n, r, i) {
                  t.push(r ? i.replace(le, "$1") : n || e);
                }),
                t
              );
            });
            function Ms(e) {
              if ("string" == typeof e || ua(e)) return e;
              var t = e + "";
              return "0" == t && 1 / e == -l ? "-0" : t;
            }
            function qs(e) {
              if (null != e) {
                try {
                  return je.call(e);
                } catch {}
                try {
                  return e + "";
                } catch {}
              }
              return "";
            }
            function ks(e) {
              if (e instanceof Bn) return e.clone();
              var t = new Kn(e.__wrapped__, e.__chain__);
              return (
                (t.__actions__ = Ti(e.__actions__)),
                (t.__index__ = e.__index__),
                (t.__values__ = e.__values__),
                t
              );
            }
            var zs = Yr(function (e, t) {
                return Jo(e) ? lr(e, yr(t, 1, Jo, !0)) : [];
              }),
              Hs = Yr(function (e, t) {
                var r = Ys(t);
                return (
                  Jo(r) && (r = n),
                  Jo(e) ? lr(e, yr(t, 1, Jo, !0), cs(r, 2)) : []
                );
              }),
              Vs = Yr(function (e, t) {
                var r = Ys(t);
                return (
                  Jo(r) && (r = n), Jo(e) ? lr(e, yr(t, 1, Jo, !0), n, r) : []
                );
              });
            function Ks(e, t, n) {
              var r = null == e ? 0 : e.length;
              if (!r) return -1;
              var i = null == n ? 0 : ga(n);
              return i < 0 && (i = mn(r + i, 0)), zt(e, cs(t, 3), i);
            }
            function Bs(e, t, r) {
              var i = null == e ? 0 : e.length;
              if (!i) return -1;
              var s = i - 1;
              return (
                r !== n &&
                  ((s = ga(r)), (s = r < 0 ? mn(i + s, 0) : wn(s, i - 1))),
                zt(e, cs(t, 3), s, !0)
              );
            }
            function Ws(e) {
              return (null == e ? 0 : e.length) ? yr(e, 1) : [];
            }
            function Fs(e) {
              return e && e.length ? e[0] : n;
            }
            var Gs = Yr(function (e) {
                var t = Ut(e, yi);
                return t.length && t[0] === e[0] ? Tr(t) : [];
              }),
              Js = Yr(function (e) {
                var t = Ys(e),
                  r = Ut(e, yi);
                return (
                  t === Ys(r) ? (t = n) : r.pop(),
                  r.length && r[0] === e[0] ? Tr(r, cs(t, 2)) : []
                );
              }),
              Qs = Yr(function (e) {
                var t = Ys(e),
                  r = Ut(e, yi);
                return (
                  (t = "function" == typeof t ? t : n) && r.pop(),
                  r.length && r[0] === e[0] ? Tr(r, n, t) : []
                );
              });
            function Ys(e) {
              var t = null == e ? 0 : e.length;
              return t ? e[t - 1] : n;
            }
            var $s = Yr(Zs);
            function Zs(e, t) {
              return e && e.length && t && t.length ? Fr(e, t) : e;
            }
            var Xs = ns(function (e, t) {
              var n = null == e ? 0 : e.length,
                r = or(e, t);
              return (
                Gr(
                  e,
                  Ut(t, function (e) {
                    return ms(e, n) ? +e : e;
                  }).sort(Oi)
                ),
                r
              );
            });
            function eo(e) {
              return null == e ? e : In.call(e);
            }
            var to = Yr(function (e) {
                return hi(yr(e, 1, Jo, !0));
              }),
              no = Yr(function (e) {
                var t = Ys(e);
                return Jo(t) && (t = n), hi(yr(e, 1, Jo, !0), cs(t, 2));
              }),
              ro = Yr(function (e) {
                var t = Ys(e);
                return (
                  (t = "function" == typeof t ? t : n),
                  hi(yr(e, 1, Jo, !0), n, t)
                );
              });
            function io(e) {
              if (!e || !e.length) return [];
              var t = 0;
              return (
                (e = At(e, function (e) {
                  if (Jo(e)) return (t = mn(e.length, t)), !0;
                })),
                Qt(t, function (t) {
                  return Ut(e, Wt(t));
                })
              );
            }
            function so(e, t) {
              if (!e || !e.length) return [];
              var r = io(e);
              return null == t
                ? r
                : Ut(r, function (e) {
                    return Pt(t, n, e);
                  });
            }
            var oo = Yr(function (e, t) {
                return Jo(e) ? lr(e, t) : [];
              }),
              ao = Yr(function (e) {
                return gi(At(e, Jo));
              }),
              co = Yr(function (e) {
                var t = Ys(e);
                return Jo(t) && (t = n), gi(At(e, Jo), cs(t, 2));
              }),
              uo = Yr(function (e) {
                var t = Ys(e);
                return (
                  (t = "function" == typeof t ? t : n), gi(At(e, Jo), n, t)
                );
              }),
              ho = Yr(io);
            var lo = Yr(function (e) {
              var t = e.length,
                r = t > 1 ? e[t - 1] : n;
              return (r = "function" == typeof r ? (e.pop(), r) : n), so(e, r);
            });
            function po(e) {
              var t = zn(e);
              return (t.__chain__ = !0), t;
            }
            function fo(e, t) {
              return t(e);
            }
            var go = ns(function (e) {
              var t = e.length,
                r = t ? e[0] : 0,
                i = this.__wrapped__,
                s = function (t) {
                  return or(t, e);
                };
              return !(t > 1 || this.__actions__.length) &&
                i instanceof Bn &&
                ms(r)
                ? ((i = i.slice(r, +r + (t ? 1 : 0))).__actions__.push({
                    func: fo,
                    args: [s],
                    thisArg: n,
                  }),
                  new Kn(i, this.__chain__).thru(function (e) {
                    return t && !e.length && e.push(n), e;
                  }))
                : this.thru(s);
            });
            var vo = Ci(function (e, t, n) {
              De.call(e, n) ? ++e[n] : sr(e, n, 1);
            });
            var yo = qi(Ks),
              mo = qi(Bs);
            function wo(e, t) {
              return (Wo(e) ? Rt : pr)(e, cs(t, 3));
            }
            function _o(e, t) {
              return (Wo(e) ? Nt : dr)(e, cs(t, 3));
            }
            var bo = Ci(function (e, t, n) {
              De.call(e, n) ? e[n].push(t) : sr(e, n, [t]);
            });
            var Eo = Yr(function (e, t, n) {
                var r = -1,
                  i = "function" == typeof t,
                  s = Go(e) ? se(e.length) : [];
                return (
                  pr(e, function (e) {
                    s[++r] = i ? Pt(t, e, n) : Ar(e, t, n);
                  }),
                  s
                );
              }),
              Io = Ci(function (e, t, n) {
                sr(e, n, t);
              });
            function So(e, t) {
              return (Wo(e) ? Ut : kr)(e, cs(t, 3));
            }
            var Po = Ci(
              function (e, t, n) {
                e[n ? 0 : 1].push(t);
              },
              function () {
                return [[], []];
              }
            );
            var Oo = Yr(function (e, t) {
                if (null == e) return [];
                var n = t.length;
                return (
                  n > 1 && ws(e, t[0], t[1])
                    ? (t = [])
                    : n > 2 && ws(t[0], t[1], t[2]) && (t = [t[0]]),
                  Br(e, yr(t, 1), [])
                );
              }),
              Ro =
                lt ||
                function () {
                  return dt.Date.now();
                };
            function No(e, t, r) {
              return (
                (t = r ? n : t),
                (t = e && null == t ? e.length : t),
                $i(e, u, n, n, n, n, t)
              );
            }
            function To(e, t) {
              var i;
              if ("function" != typeof t) throw new Te(r);
              return (
                (e = ga(e)),
                function () {
                  return (
                    --e > 0 && (i = t.apply(this, arguments)),
                    e <= 1 && (t = n),
                    i
                  );
                }
              );
            }
            var Ao = Yr(function (e, t, n) {
                var r = 1;
                if (n.length) {
                  var i = hn(n, as(Ao));
                  r |= a;
                }
                return $i(e, r, t, n, i);
              }),
              Co = Yr(function (e, t, n) {
                var r = 3;
                if (n.length) {
                  var i = hn(n, as(Co));
                  r |= a;
                }
                return $i(t, r, e, n, i);
              });
            function xo(e, t, i) {
              var s,
                o,
                a,
                c,
                u,
                h,
                l = 0,
                p = !1,
                d = !1,
                f = !0;
              if ("function" != typeof e) throw new Te(r);
              function g(t) {
                var r = s,
                  i = o;
                return (s = o = n), (l = t), (c = e.apply(i, r));
              }
              function v(e) {
                return (l = e), (u = Cs(m, t)), p ? g(e) : c;
              }
              function y(e) {
                var r = e - h;
                return h === n || r >= t || r < 0 || (d && e - l >= a);
              }
              function m() {
                var e = Ro();
                if (y(e)) return w(e);
                u = Cs(
                  m,
                  (function (e) {
                    var n = t - (e - h);
                    return d ? wn(n, a - (e - l)) : n;
                  })(e)
                );
              }
              function w(e) {
                return (u = n), f && s ? g(e) : ((s = o = n), c);
              }
              function _() {
                var e = Ro(),
                  r = y(e);
                if (((s = arguments), (o = this), (h = e), r)) {
                  if (u === n) return v(h);
                  if (d) return Ei(u), (u = Cs(m, t)), g(h);
                }
                return u === n && (u = Cs(m, t)), c;
              }
              return (
                (t = ya(t) || 0),
                ta(i) &&
                  ((p = !!i.leading),
                  (a = (d = "maxWait" in i) ? mn(ya(i.maxWait) || 0, t) : a),
                  (f = "trailing" in i ? !!i.trailing : f)),
                (_.cancel = function () {
                  u !== n && Ei(u), (l = 0), (s = h = o = u = n);
                }),
                (_.flush = function () {
                  return u === n ? c : w(Ro());
                }),
                _
              );
            }
            var Uo = Yr(function (e, t) {
                return hr(e, 1, t);
              }),
              jo = Yr(function (e, t, n) {
                return hr(e, ya(t) || 0, n);
              });
            function Do(e, t) {
              if (
                "function" != typeof e ||
                (null != t && "function" != typeof t)
              )
                throw new Te(r);
              var n = function () {
                var r = arguments,
                  i = t ? t.apply(this, r) : r[0],
                  s = n.cache;
                if (s.has(i)) return s.get(i);
                var o = e.apply(this, r);
                return (n.cache = s.set(i, o) || s), o;
              };
              return (n.cache = new (Do.Cache || Gn)()), n;
            }
            function Lo(e) {
              if ("function" != typeof e) throw new Te(r);
              return function () {
                var t = arguments;
                switch (t.length) {
                  case 0:
                    return !e.call(this);
                  case 1:
                    return !e.call(this, t[0]);
                  case 2:
                    return !e.call(this, t[0], t[1]);
                  case 3:
                    return !e.call(this, t[0], t[1], t[2]);
                }
                return !e.apply(this, t);
              };
            }
            Do.Cache = Gn;
            var Mo = _i(function (e, t) {
                var n = (t =
                  1 == t.length && Wo(t[0])
                    ? Ut(t[0], $t(cs()))
                    : Ut(yr(t, 1), $t(cs()))).length;
                return Yr(function (r) {
                  for (var i = -1, s = wn(r.length, n); ++i < s; )
                    r[i] = t[i].call(this, r[i]);
                  return Pt(e, this, r);
                });
              }),
              qo = Yr(function (e, t) {
                var r = hn(t, as(qo));
                return $i(e, a, n, t, r);
              }),
              ko = Yr(function (e, t) {
                var r = hn(t, as(ko));
                return $i(e, c, n, t, r);
              }),
              zo = ns(function (e, t) {
                return $i(e, h, n, n, n, t);
              });
            function Ho(e, t) {
              return e === t || (e !== e && t !== t);
            }
            var Vo = Fi(Or),
              Ko = Fi(function (e, t) {
                return e >= t;
              }),
              Bo = Cr(
                (function () {
                  return arguments;
                })()
              )
                ? Cr
                : function (e) {
                    return (
                      na(e) && De.call(e, "callee") && !Je.call(e, "callee")
                    );
                  },
              Wo = se.isArray,
              Fo = wt
                ? $t(wt)
                : function (e) {
                    return na(e) && Pr(e) == x;
                  };
            function Go(e) {
              return null != e && ea(e.length) && !Zo(e);
            }
            function Jo(e) {
              return na(e) && Go(e);
            }
            var Qo = mt || yc,
              Yo = _t
                ? $t(_t)
                : function (e) {
                    return na(e) && Pr(e) == w;
                  };
            function $o(e) {
              if (!na(e)) return !1;
              var t = Pr(e);
              return (
                t == _ ||
                "[object DOMException]" == t ||
                ("string" == typeof e.message &&
                  "string" == typeof e.name &&
                  !sa(e))
              );
            }
            function Zo(e) {
              if (!ta(e)) return !1;
              var t = Pr(e);
              return (
                t == b ||
                t == E ||
                "[object AsyncFunction]" == t ||
                "[object Proxy]" == t
              );
            }
            function Xo(e) {
              return "number" == typeof e && e == ga(e);
            }
            function ea(e) {
              return "number" == typeof e && e > -1 && e % 1 == 0 && e <= p;
            }
            function ta(e) {
              var t = typeof e;
              return null != e && ("object" == t || "function" == t);
            }
            function na(e) {
              return null != e && "object" == typeof e;
            }
            var ra = bt
              ? $t(bt)
              : function (e) {
                  return na(e) && fs(e) == I;
                };
            function ia(e) {
              return "number" == typeof e || (na(e) && Pr(e) == S);
            }
            function sa(e) {
              if (!na(e) || Pr(e) != P) return !1;
              var t = Fe(e);
              if (null === t) return !0;
              var n = De.call(t, "constructor") && t.constructor;
              return (
                "function" == typeof n && n instanceof n && je.call(n) == ke
              );
            }
            var oa = Et
              ? $t(Et)
              : function (e) {
                  return na(e) && Pr(e) == R;
                };
            var aa = It
              ? $t(It)
              : function (e) {
                  return na(e) && fs(e) == N;
                };
            function ca(e) {
              return "string" == typeof e || (!Wo(e) && na(e) && Pr(e) == T);
            }
            function ua(e) {
              return "symbol" == typeof e || (na(e) && Pr(e) == A);
            }
            var ha = St
              ? $t(St)
              : function (e) {
                  return na(e) && ea(e.length) && !!ot[Pr(e)];
                };
            var la = Fi(qr),
              pa = Fi(function (e, t) {
                return e <= t;
              });
            function da(e) {
              if (!e) return [];
              if (Go(e)) return ca(e) ? dn(e) : Ti(e);
              if ($e && e[$e])
                return (function (e) {
                  for (var t, n = []; !(t = e.next()).done; ) n.push(t.value);
                  return n;
                })(e[$e]());
              var t = fs(e);
              return (t == I ? cn : t == N ? ln : Ha)(e);
            }
            function fa(e) {
              return e
                ? (e = ya(e)) === l || e === -l
                  ? 17976931348623157e292 * (e < 0 ? -1 : 1)
                  : e === e
                  ? e
                  : 0
                : 0 === e
                ? e
                : 0;
            }
            function ga(e) {
              var t = fa(e),
                n = t % 1;
              return t === t ? (n ? t - n : t) : 0;
            }
            function va(e) {
              return e ? ar(ga(e), 0, f) : 0;
            }
            function ya(e) {
              if ("number" == typeof e) return e;
              if (ua(e)) return d;
              if (ta(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = ta(t) ? t + "" : t;
              }
              if ("string" != typeof e) return 0 === e ? e : +e;
              e = Yt(e);
              var n = ge.test(e);
              return n || ye.test(e)
                ? ht(e.slice(2), n ? 2 : 8)
                : fe.test(e)
                ? d
                : +e;
            }
            function ma(e) {
              return Ai(e, Ua(e));
            }
            function wa(e) {
              return null == e ? "" : ui(e);
            }
            var _a = xi(function (e, t) {
                if (Is(t) || Go(t)) Ai(t, xa(t), e);
                else for (var n in t) De.call(t, n) && tr(e, n, t[n]);
              }),
              ba = xi(function (e, t) {
                Ai(t, Ua(t), e);
              }),
              Ea = xi(function (e, t, n, r) {
                Ai(t, Ua(t), e, r);
              }),
              Ia = xi(function (e, t, n, r) {
                Ai(t, xa(t), e, r);
              }),
              Sa = ns(or);
            var Pa = Yr(function (e, t) {
                e = Oe(e);
                var r = -1,
                  i = t.length,
                  s = i > 2 ? t[2] : n;
                for (s && ws(t[0], t[1], s) && (i = 1); ++r < i; )
                  for (
                    var o = t[r], a = Ua(o), c = -1, u = a.length;
                    ++c < u;

                  ) {
                    var h = a[c],
                      l = e[h];
                    (l === n || (Ho(l, xe[h]) && !De.call(e, h))) &&
                      (e[h] = o[h]);
                  }
                return e;
              }),
              Oa = Yr(function (e) {
                return e.push(n, Xi), Pt(Da, n, e);
              });
            function Ra(e, t, r) {
              var i = null == e ? n : Ir(e, t);
              return i === n ? r : i;
            }
            function Na(e, t) {
              return null != e && gs(e, t, Nr);
            }
            var Ta = Hi(function (e, t, n) {
                null != t &&
                  "function" != typeof t.toString &&
                  (t = qe.call(t)),
                  (e[t] = n);
              }, tc(ic)),
              Aa = Hi(function (e, t, n) {
                null != t &&
                  "function" != typeof t.toString &&
                  (t = qe.call(t)),
                  De.call(e, t) ? e[t].push(n) : (e[t] = [n]);
              }, cs),
              Ca = Yr(Ar);
            function xa(e) {
              return Go(e) ? Yn(e) : Lr(e);
            }
            function Ua(e) {
              return Go(e) ? Yn(e, !0) : Mr(e);
            }
            var ja = xi(function (e, t, n) {
                Vr(e, t, n);
              }),
              Da = xi(function (e, t, n, r) {
                Vr(e, t, n, r);
              }),
              La = ns(function (e, t) {
                var n = {};
                if (null == e) return n;
                var r = !1;
                (t = Ut(t, function (t) {
                  return (t = wi(t, e)), r || (r = t.length > 1), t;
                })),
                  Ai(e, is(e), n),
                  r && (n = cr(n, 7, es));
                for (var i = t.length; i--; ) li(n, t[i]);
                return n;
              });
            var Ma = ns(function (e, t) {
              return null == e
                ? {}
                : (function (e, t) {
                    return Wr(e, t, function (t, n) {
                      return Na(e, n);
                    });
                  })(e, t);
            });
            function qa(e, t) {
              if (null == e) return {};
              var n = Ut(is(e), function (e) {
                return [e];
              });
              return (
                (t = cs(t)),
                Wr(e, n, function (e, n) {
                  return t(e, n[0]);
                })
              );
            }
            var ka = Yi(xa),
              za = Yi(Ua);
            function Ha(e) {
              return null == e ? [] : Zt(e, xa(e));
            }
            var Va = Li(function (e, t, n) {
              return (t = t.toLowerCase()), e + (n ? Ka(t) : t);
            });
            function Ka(e) {
              return $a(wa(e).toLowerCase());
            }
            function Ba(e) {
              return (e = wa(e)) && e.replace(we, rn).replace(Xe, "");
            }
            var Wa = Li(function (e, t, n) {
                return e + (n ? "-" : "") + t.toLowerCase();
              }),
              Fa = Li(function (e, t, n) {
                return e + (n ? " " : "") + t.toLowerCase();
              }),
              Ga = Di("toLowerCase");
            var Ja = Li(function (e, t, n) {
              return e + (n ? "_" : "") + t.toLowerCase();
            });
            var Qa = Li(function (e, t, n) {
              return e + (n ? " " : "") + $a(t);
            });
            var Ya = Li(function (e, t, n) {
                return e + (n ? " " : "") + t.toUpperCase();
              }),
              $a = Di("toUpperCase");
            function Za(e, t, r) {
              return (
                (e = wa(e)),
                (t = r ? n : t) === n
                  ? (function (e) {
                      return rt.test(e);
                    })(e)
                    ? (function (e) {
                        return e.match(tt) || [];
                      })(e)
                    : (function (e) {
                        return e.match(ue) || [];
                      })(e)
                  : e.match(t) || []
              );
            }
            var Xa = Yr(function (e, t) {
                try {
                  return Pt(e, n, t);
                } catch (r) {
                  return $o(r) ? r : new Ie(r);
                }
              }),
              ec = ns(function (e, t) {
                return (
                  Rt(t, function (t) {
                    (t = Ms(t)), sr(e, t, Ao(e[t], e));
                  }),
                  e
                );
              });
            function tc(e) {
              return function () {
                return e;
              };
            }
            var nc = ki(),
              rc = ki(!0);
            function ic(e) {
              return e;
            }
            function sc(e) {
              return Dr("function" == typeof e ? e : cr(e, 1));
            }
            var oc = Yr(function (e, t) {
                return function (n) {
                  return Ar(n, e, t);
                };
              }),
              ac = Yr(function (e, t) {
                return function (n) {
                  return Ar(e, n, t);
                };
              });
            function cc(e, t, n) {
              var r = xa(t),
                i = Er(t, r);
              null == n &&
                (!ta(t) || (!i.length && r.length)) &&
                ((n = t), (t = e), (e = this), (i = Er(t, xa(t))));
              var s = !(ta(n) && "chain" in n) || !!n.chain,
                o = Zo(e);
              return (
                Rt(i, function (n) {
                  var r = t[n];
                  (e[n] = r),
                    o &&
                      (e.prototype[n] = function () {
                        var t = this.__chain__;
                        if (s || t) {
                          var n = e(this.__wrapped__),
                            i = (n.__actions__ = Ti(this.__actions__));
                          return (
                            i.push({ func: r, args: arguments, thisArg: e }),
                            (n.__chain__ = t),
                            n
                          );
                        }
                        return r.apply(e, jt([this.value()], arguments));
                      });
                }),
                e
              );
            }
            function uc() {}
            var hc = Ki(Ut),
              lc = Ki(Tt),
              pc = Ki(Mt);
            function dc(e) {
              return _s(e)
                ? Wt(Ms(e))
                : (function (e) {
                    return function (t) {
                      return Ir(t, e);
                    };
                  })(e);
            }
            var fc = Wi(),
              gc = Wi(!0);
            function vc() {
              return [];
            }
            function yc() {
              return !1;
            }
            var mc = Vi(function (e, t) {
                return e + t;
              }, 0),
              wc = Ji("ceil"),
              _c = Vi(function (e, t) {
                return e / t;
              }, 1),
              bc = Ji("floor");
            var Ec = Vi(function (e, t) {
                return e * t;
              }, 1),
              Ic = Ji("round"),
              Sc = Vi(function (e, t) {
                return e - t;
              }, 0);
            return (
              (zn.after = function (e, t) {
                if ("function" != typeof t) throw new Te(r);
                return (
                  (e = ga(e)),
                  function () {
                    if (--e < 1) return t.apply(this, arguments);
                  }
                );
              }),
              (zn.ary = No),
              (zn.assign = _a),
              (zn.assignIn = ba),
              (zn.assignInWith = Ea),
              (zn.assignWith = Ia),
              (zn.at = Sa),
              (zn.before = To),
              (zn.bind = Ao),
              (zn.bindAll = ec),
              (zn.bindKey = Co),
              (zn.castArray = function () {
                if (!arguments.length) return [];
                var e = arguments[0];
                return Wo(e) ? e : [e];
              }),
              (zn.chain = po),
              (zn.chunk = function (e, t, r) {
                t = (r ? ws(e, t, r) : t === n) ? 1 : mn(ga(t), 0);
                var i = null == e ? 0 : e.length;
                if (!i || t < 1) return [];
                for (var s = 0, o = 0, a = se(ft(i / t)); s < i; )
                  a[o++] = ri(e, s, (s += t));
                return a;
              }),
              (zn.compact = function (e) {
                for (
                  var t = -1, n = null == e ? 0 : e.length, r = 0, i = [];
                  ++t < n;

                ) {
                  var s = e[t];
                  s && (i[r++] = s);
                }
                return i;
              }),
              (zn.concat = function () {
                var e = arguments.length;
                if (!e) return [];
                for (var t = se(e - 1), n = arguments[0], r = e; r--; )
                  t[r - 1] = arguments[r];
                return jt(Wo(n) ? Ti(n) : [n], yr(t, 1));
              }),
              (zn.cond = function (e) {
                var t = null == e ? 0 : e.length,
                  n = cs();
                return (
                  (e = t
                    ? Ut(e, function (e) {
                        if ("function" != typeof e[1]) throw new Te(r);
                        return [n(e[0]), e[1]];
                      })
                    : []),
                  Yr(function (n) {
                    for (var r = -1; ++r < t; ) {
                      var i = e[r];
                      if (Pt(i[0], this, n)) return Pt(i[1], this, n);
                    }
                  })
                );
              }),
              (zn.conforms = function (e) {
                return (function (e) {
                  var t = xa(e);
                  return function (n) {
                    return ur(n, e, t);
                  };
                })(cr(e, 1));
              }),
              (zn.constant = tc),
              (zn.countBy = vo),
              (zn.create = function (e, t) {
                var n = Hn(e);
                return null == t ? n : ir(n, t);
              }),
              (zn.curry = function e(t, r, i) {
                var s = $i(t, 8, n, n, n, n, n, (r = i ? n : r));
                return (s.placeholder = e.placeholder), s;
              }),
              (zn.curryRight = function e(t, r, i) {
                var s = $i(t, o, n, n, n, n, n, (r = i ? n : r));
                return (s.placeholder = e.placeholder), s;
              }),
              (zn.debounce = xo),
              (zn.defaults = Pa),
              (zn.defaultsDeep = Oa),
              (zn.defer = Uo),
              (zn.delay = jo),
              (zn.difference = zs),
              (zn.differenceBy = Hs),
              (zn.differenceWith = Vs),
              (zn.drop = function (e, t, r) {
                var i = null == e ? 0 : e.length;
                return i
                  ? ri(e, (t = r || t === n ? 1 : ga(t)) < 0 ? 0 : t, i)
                  : [];
              }),
              (zn.dropRight = function (e, t, r) {
                var i = null == e ? 0 : e.length;
                return i
                  ? ri(
                      e,
                      0,
                      (t = i - (t = r || t === n ? 1 : ga(t))) < 0 ? 0 : t
                    )
                  : [];
              }),
              (zn.dropRightWhile = function (e, t) {
                return e && e.length ? di(e, cs(t, 3), !0, !0) : [];
              }),
              (zn.dropWhile = function (e, t) {
                return e && e.length ? di(e, cs(t, 3), !0) : [];
              }),
              (zn.fill = function (e, t, r, i) {
                var s = null == e ? 0 : e.length;
                return s
                  ? (r &&
                      "number" != typeof r &&
                      ws(e, t, r) &&
                      ((r = 0), (i = s)),
                    (function (e, t, r, i) {
                      var s = e.length;
                      for (
                        (r = ga(r)) < 0 && (r = -r > s ? 0 : s + r),
                          (i = i === n || i > s ? s : ga(i)) < 0 && (i += s),
                          i = r > i ? 0 : va(i);
                        r < i;

                      )
                        e[r++] = t;
                      return e;
                    })(e, t, r, i))
                  : [];
              }),
              (zn.filter = function (e, t) {
                return (Wo(e) ? At : vr)(e, cs(t, 3));
              }),
              (zn.flatMap = function (e, t) {
                return yr(So(e, t), 1);
              }),
              (zn.flatMapDeep = function (e, t) {
                return yr(So(e, t), l);
              }),
              (zn.flatMapDepth = function (e, t, r) {
                return (r = r === n ? 1 : ga(r)), yr(So(e, t), r);
              }),
              (zn.flatten = Ws),
              (zn.flattenDeep = function (e) {
                return (null == e ? 0 : e.length) ? yr(e, l) : [];
              }),
              (zn.flattenDepth = function (e, t) {
                return (null == e ? 0 : e.length)
                  ? yr(e, (t = t === n ? 1 : ga(t)))
                  : [];
              }),
              (zn.flip = function (e) {
                return $i(e, 512);
              }),
              (zn.flow = nc),
              (zn.flowRight = rc),
              (zn.fromPairs = function (e) {
                for (
                  var t = -1, n = null == e ? 0 : e.length, r = {};
                  ++t < n;

                ) {
                  var i = e[t];
                  r[i[0]] = i[1];
                }
                return r;
              }),
              (zn.functions = function (e) {
                return null == e ? [] : Er(e, xa(e));
              }),
              (zn.functionsIn = function (e) {
                return null == e ? [] : Er(e, Ua(e));
              }),
              (zn.groupBy = bo),
              (zn.initial = function (e) {
                return (null == e ? 0 : e.length) ? ri(e, 0, -1) : [];
              }),
              (zn.intersection = Gs),
              (zn.intersectionBy = Js),
              (zn.intersectionWith = Qs),
              (zn.invert = Ta),
              (zn.invertBy = Aa),
              (zn.invokeMap = Eo),
              (zn.iteratee = sc),
              (zn.keyBy = Io),
              (zn.keys = xa),
              (zn.keysIn = Ua),
              (zn.map = So),
              (zn.mapKeys = function (e, t) {
                var n = {};
                return (
                  (t = cs(t, 3)),
                  _r(e, function (e, r, i) {
                    sr(n, t(e, r, i), e);
                  }),
                  n
                );
              }),
              (zn.mapValues = function (e, t) {
                var n = {};
                return (
                  (t = cs(t, 3)),
                  _r(e, function (e, r, i) {
                    sr(n, r, t(e, r, i));
                  }),
                  n
                );
              }),
              (zn.matches = function (e) {
                return zr(cr(e, 1));
              }),
              (zn.matchesProperty = function (e, t) {
                return Hr(e, cr(t, 1));
              }),
              (zn.memoize = Do),
              (zn.merge = ja),
              (zn.mergeWith = Da),
              (zn.method = oc),
              (zn.methodOf = ac),
              (zn.mixin = cc),
              (zn.negate = Lo),
              (zn.nthArg = function (e) {
                return (
                  (e = ga(e)),
                  Yr(function (t) {
                    return Kr(t, e);
                  })
                );
              }),
              (zn.omit = La),
              (zn.omitBy = function (e, t) {
                return qa(e, Lo(cs(t)));
              }),
              (zn.once = function (e) {
                return To(2, e);
              }),
              (zn.orderBy = function (e, t, r, i) {
                return null == e
                  ? []
                  : (Wo(t) || (t = null == t ? [] : [t]),
                    Wo((r = i ? n : r)) || (r = null == r ? [] : [r]),
                    Br(e, t, r));
              }),
              (zn.over = hc),
              (zn.overArgs = Mo),
              (zn.overEvery = lc),
              (zn.overSome = pc),
              (zn.partial = qo),
              (zn.partialRight = ko),
              (zn.partition = Po),
              (zn.pick = Ma),
              (zn.pickBy = qa),
              (zn.property = dc),
              (zn.propertyOf = function (e) {
                return function (t) {
                  return null == e ? n : Ir(e, t);
                };
              }),
              (zn.pull = $s),
              (zn.pullAll = Zs),
              (zn.pullAllBy = function (e, t, n) {
                return e && e.length && t && t.length ? Fr(e, t, cs(n, 2)) : e;
              }),
              (zn.pullAllWith = function (e, t, r) {
                return e && e.length && t && t.length ? Fr(e, t, n, r) : e;
              }),
              (zn.pullAt = Xs),
              (zn.range = fc),
              (zn.rangeRight = gc),
              (zn.rearg = zo),
              (zn.reject = function (e, t) {
                return (Wo(e) ? At : vr)(e, Lo(cs(t, 3)));
              }),
              (zn.remove = function (e, t) {
                var n = [];
                if (!e || !e.length) return n;
                var r = -1,
                  i = [],
                  s = e.length;
                for (t = cs(t, 3); ++r < s; ) {
                  var o = e[r];
                  t(o, r, e) && (n.push(o), i.push(r));
                }
                return Gr(e, i), n;
              }),
              (zn.rest = function (e, t) {
                if ("function" != typeof e) throw new Te(r);
                return Yr(e, (t = t === n ? t : ga(t)));
              }),
              (zn.reverse = eo),
              (zn.sampleSize = function (e, t, r) {
                return (
                  (t = (r ? ws(e, t, r) : t === n) ? 1 : ga(t)),
                  (Wo(e) ? Zn : Zr)(e, t)
                );
              }),
              (zn.set = function (e, t, n) {
                return null == e ? e : Xr(e, t, n);
              }),
              (zn.setWith = function (e, t, r, i) {
                return (
                  (i = "function" == typeof i ? i : n),
                  null == e ? e : Xr(e, t, r, i)
                );
              }),
              (zn.shuffle = function (e) {
                return (Wo(e) ? Xn : ni)(e);
              }),
              (zn.slice = function (e, t, r) {
                var i = null == e ? 0 : e.length;
                return i
                  ? (r && "number" != typeof r && ws(e, t, r)
                      ? ((t = 0), (r = i))
                      : ((t = null == t ? 0 : ga(t)),
                        (r = r === n ? i : ga(r))),
                    ri(e, t, r))
                  : [];
              }),
              (zn.sortBy = Oo),
              (zn.sortedUniq = function (e) {
                return e && e.length ? ai(e) : [];
              }),
              (zn.sortedUniqBy = function (e, t) {
                return e && e.length ? ai(e, cs(t, 2)) : [];
              }),
              (zn.split = function (e, t, r) {
                return (
                  r && "number" != typeof r && ws(e, t, r) && (t = r = n),
                  (r = r === n ? f : r >>> 0)
                    ? (e = wa(e)) &&
                      ("string" == typeof t || (null != t && !oa(t))) &&
                      !(t = ui(t)) &&
                      an(e)
                      ? bi(dn(e), 0, r)
                      : e.split(t, r)
                    : []
                );
              }),
              (zn.spread = function (e, t) {
                if ("function" != typeof e) throw new Te(r);
                return (
                  (t = null == t ? 0 : mn(ga(t), 0)),
                  Yr(function (n) {
                    var r = n[t],
                      i = bi(n, 0, t);
                    return r && jt(i, r), Pt(e, this, i);
                  })
                );
              }),
              (zn.tail = function (e) {
                var t = null == e ? 0 : e.length;
                return t ? ri(e, 1, t) : [];
              }),
              (zn.take = function (e, t, r) {
                return e && e.length
                  ? ri(e, 0, (t = r || t === n ? 1 : ga(t)) < 0 ? 0 : t)
                  : [];
              }),
              (zn.takeRight = function (e, t, r) {
                var i = null == e ? 0 : e.length;
                return i
                  ? ri(
                      e,
                      (t = i - (t = r || t === n ? 1 : ga(t))) < 0 ? 0 : t,
                      i
                    )
                  : [];
              }),
              (zn.takeRightWhile = function (e, t) {
                return e && e.length ? di(e, cs(t, 3), !1, !0) : [];
              }),
              (zn.takeWhile = function (e, t) {
                return e && e.length ? di(e, cs(t, 3)) : [];
              }),
              (zn.tap = function (e, t) {
                return t(e), e;
              }),
              (zn.throttle = function (e, t, n) {
                var i = !0,
                  s = !0;
                if ("function" != typeof e) throw new Te(r);
                return (
                  ta(n) &&
                    ((i = "leading" in n ? !!n.leading : i),
                    (s = "trailing" in n ? !!n.trailing : s)),
                  xo(e, t, { leading: i, maxWait: t, trailing: s })
                );
              }),
              (zn.thru = fo),
              (zn.toArray = da),
              (zn.toPairs = ka),
              (zn.toPairsIn = za),
              (zn.toPath = function (e) {
                return Wo(e) ? Ut(e, Ms) : ua(e) ? [e] : Ti(Ls(wa(e)));
              }),
              (zn.toPlainObject = ma),
              (zn.transform = function (e, t, n) {
                var r = Wo(e),
                  i = r || Qo(e) || ha(e);
                if (((t = cs(t, 4)), null == n)) {
                  var s = e && e.constructor;
                  n = i ? (r ? new s() : []) : ta(e) && Zo(s) ? Hn(Fe(e)) : {};
                }
                return (
                  (i ? Rt : _r)(e, function (e, r, i) {
                    return t(n, e, r, i);
                  }),
                  n
                );
              }),
              (zn.unary = function (e) {
                return No(e, 1);
              }),
              (zn.union = to),
              (zn.unionBy = no),
              (zn.unionWith = ro),
              (zn.uniq = function (e) {
                return e && e.length ? hi(e) : [];
              }),
              (zn.uniqBy = function (e, t) {
                return e && e.length ? hi(e, cs(t, 2)) : [];
              }),
              (zn.uniqWith = function (e, t) {
                return (
                  (t = "function" == typeof t ? t : n),
                  e && e.length ? hi(e, n, t) : []
                );
              }),
              (zn.unset = function (e, t) {
                return null == e || li(e, t);
              }),
              (zn.unzip = io),
              (zn.unzipWith = so),
              (zn.update = function (e, t, n) {
                return null == e ? e : pi(e, t, mi(n));
              }),
              (zn.updateWith = function (e, t, r, i) {
                return (
                  (i = "function" == typeof i ? i : n),
                  null == e ? e : pi(e, t, mi(r), i)
                );
              }),
              (zn.values = Ha),
              (zn.valuesIn = function (e) {
                return null == e ? [] : Zt(e, Ua(e));
              }),
              (zn.without = oo),
              (zn.words = Za),
              (zn.wrap = function (e, t) {
                return qo(mi(t), e);
              }),
              (zn.xor = ao),
              (zn.xorBy = co),
              (zn.xorWith = uo),
              (zn.zip = ho),
              (zn.zipObject = function (e, t) {
                return vi(e || [], t || [], tr);
              }),
              (zn.zipObjectDeep = function (e, t) {
                return vi(e || [], t || [], Xr);
              }),
              (zn.zipWith = lo),
              (zn.entries = ka),
              (zn.entriesIn = za),
              (zn.extend = ba),
              (zn.extendWith = Ea),
              cc(zn, zn),
              (zn.add = mc),
              (zn.attempt = Xa),
              (zn.camelCase = Va),
              (zn.capitalize = Ka),
              (zn.ceil = wc),
              (zn.clamp = function (e, t, r) {
                return (
                  r === n && ((r = t), (t = n)),
                  r !== n && (r = (r = ya(r)) === r ? r : 0),
                  t !== n && (t = (t = ya(t)) === t ? t : 0),
                  ar(ya(e), t, r)
                );
              }),
              (zn.clone = function (e) {
                return cr(e, 4);
              }),
              (zn.cloneDeep = function (e) {
                return cr(e, 5);
              }),
              (zn.cloneDeepWith = function (e, t) {
                return cr(e, 5, (t = "function" == typeof t ? t : n));
              }),
              (zn.cloneWith = function (e, t) {
                return cr(e, 4, (t = "function" == typeof t ? t : n));
              }),
              (zn.conformsTo = function (e, t) {
                return null == t || ur(e, t, xa(t));
              }),
              (zn.deburr = Ba),
              (zn.defaultTo = function (e, t) {
                return null == e || e !== e ? t : e;
              }),
              (zn.divide = _c),
              (zn.endsWith = function (e, t, r) {
                (e = wa(e)), (t = ui(t));
                var i = e.length,
                  s = (r = r === n ? i : ar(ga(r), 0, i));
                return (r -= t.length) >= 0 && e.slice(r, s) == t;
              }),
              (zn.eq = Ho),
              (zn.escape = function (e) {
                return (e = wa(e)) && Q.test(e) ? e.replace(G, sn) : e;
              }),
              (zn.escapeRegExp = function (e) {
                return (e = wa(e)) && re.test(e) ? e.replace(ne, "\\$&") : e;
              }),
              (zn.every = function (e, t, r) {
                var i = Wo(e) ? Tt : fr;
                return r && ws(e, t, r) && (t = n), i(e, cs(t, 3));
              }),
              (zn.find = yo),
              (zn.findIndex = Ks),
              (zn.findKey = function (e, t) {
                return kt(e, cs(t, 3), _r);
              }),
              (zn.findLast = mo),
              (zn.findLastIndex = Bs),
              (zn.findLastKey = function (e, t) {
                return kt(e, cs(t, 3), br);
              }),
              (zn.floor = bc),
              (zn.forEach = wo),
              (zn.forEachRight = _o),
              (zn.forIn = function (e, t) {
                return null == e ? e : mr(e, cs(t, 3), Ua);
              }),
              (zn.forInRight = function (e, t) {
                return null == e ? e : wr(e, cs(t, 3), Ua);
              }),
              (zn.forOwn = function (e, t) {
                return e && _r(e, cs(t, 3));
              }),
              (zn.forOwnRight = function (e, t) {
                return e && br(e, cs(t, 3));
              }),
              (zn.get = Ra),
              (zn.gt = Vo),
              (zn.gte = Ko),
              (zn.has = function (e, t) {
                return null != e && gs(e, t, Rr);
              }),
              (zn.hasIn = Na),
              (zn.head = Fs),
              (zn.identity = ic),
              (zn.includes = function (e, t, n, r) {
                (e = Go(e) ? e : Ha(e)), (n = n && !r ? ga(n) : 0);
                var i = e.length;
                return (
                  n < 0 && (n = mn(i + n, 0)),
                  ca(e)
                    ? n <= i && e.indexOf(t, n) > -1
                    : !!i && Ht(e, t, n) > -1
                );
              }),
              (zn.indexOf = function (e, t, n) {
                var r = null == e ? 0 : e.length;
                if (!r) return -1;
                var i = null == n ? 0 : ga(n);
                return i < 0 && (i = mn(r + i, 0)), Ht(e, t, i);
              }),
              (zn.inRange = function (e, t, r) {
                return (
                  (t = fa(t)),
                  r === n ? ((r = t), (t = 0)) : (r = fa(r)),
                  (function (e, t, n) {
                    return e >= wn(t, n) && e < mn(t, n);
                  })((e = ya(e)), t, r)
                );
              }),
              (zn.invoke = Ca),
              (zn.isArguments = Bo),
              (zn.isArray = Wo),
              (zn.isArrayBuffer = Fo),
              (zn.isArrayLike = Go),
              (zn.isArrayLikeObject = Jo),
              (zn.isBoolean = function (e) {
                return !0 === e || !1 === e || (na(e) && Pr(e) == m);
              }),
              (zn.isBuffer = Qo),
              (zn.isDate = Yo),
              (zn.isElement = function (e) {
                return na(e) && 1 === e.nodeType && !sa(e);
              }),
              (zn.isEmpty = function (e) {
                if (null == e) return !0;
                if (
                  Go(e) &&
                  (Wo(e) ||
                    "string" == typeof e ||
                    "function" == typeof e.splice ||
                    Qo(e) ||
                    ha(e) ||
                    Bo(e))
                )
                  return !e.length;
                var t = fs(e);
                if (t == I || t == N) return !e.size;
                if (Is(e)) return !Lr(e).length;
                for (var n in e) if (De.call(e, n)) return !1;
                return !0;
              }),
              (zn.isEqual = function (e, t) {
                return xr(e, t);
              }),
              (zn.isEqualWith = function (e, t, r) {
                var i = (r = "function" == typeof r ? r : n) ? r(e, t) : n;
                return i === n ? xr(e, t, n, r) : !!i;
              }),
              (zn.isError = $o),
              (zn.isFinite = function (e) {
                return "number" == typeof e && qt(e);
              }),
              (zn.isFunction = Zo),
              (zn.isInteger = Xo),
              (zn.isLength = ea),
              (zn.isMap = ra),
              (zn.isMatch = function (e, t) {
                return e === t || Ur(e, t, hs(t));
              }),
              (zn.isMatchWith = function (e, t, r) {
                return (r = "function" == typeof r ? r : n), Ur(e, t, hs(t), r);
              }),
              (zn.isNaN = function (e) {
                return ia(e) && e != +e;
              }),
              (zn.isNative = function (e) {
                if (Es(e))
                  throw new Ie(
                    "Unsupported core-js use. Try https://npms.io/search?q=ponyfill."
                  );
                return jr(e);
              }),
              (zn.isNil = function (e) {
                return null == e;
              }),
              (zn.isNull = function (e) {
                return null === e;
              }),
              (zn.isNumber = ia),
              (zn.isObject = ta),
              (zn.isObjectLike = na),
              (zn.isPlainObject = sa),
              (zn.isRegExp = oa),
              (zn.isSafeInteger = function (e) {
                return Xo(e) && e >= -p && e <= p;
              }),
              (zn.isSet = aa),
              (zn.isString = ca),
              (zn.isSymbol = ua),
              (zn.isTypedArray = ha),
              (zn.isUndefined = function (e) {
                return e === n;
              }),
              (zn.isWeakMap = function (e) {
                return na(e) && fs(e) == C;
              }),
              (zn.isWeakSet = function (e) {
                return na(e) && "[object WeakSet]" == Pr(e);
              }),
              (zn.join = function (e, t) {
                return null == e ? "" : Ft.call(e, t);
              }),
              (zn.kebabCase = Wa),
              (zn.last = Ys),
              (zn.lastIndexOf = function (e, t, r) {
                var i = null == e ? 0 : e.length;
                if (!i) return -1;
                var s = i;
                return (
                  r !== n &&
                    (s = (s = ga(r)) < 0 ? mn(i + s, 0) : wn(s, i - 1)),
                  t === t
                    ? (function (e, t, n) {
                        for (var r = n + 1; r--; ) if (e[r] === t) return r;
                        return r;
                      })(e, t, s)
                    : zt(e, Kt, s, !0)
                );
              }),
              (zn.lowerCase = Fa),
              (zn.lowerFirst = Ga),
              (zn.lt = la),
              (zn.lte = pa),
              (zn.max = function (e) {
                return e && e.length ? gr(e, ic, Or) : n;
              }),
              (zn.maxBy = function (e, t) {
                return e && e.length ? gr(e, cs(t, 2), Or) : n;
              }),
              (zn.mean = function (e) {
                return Bt(e, ic);
              }),
              (zn.meanBy = function (e, t) {
                return Bt(e, cs(t, 2));
              }),
              (zn.min = function (e) {
                return e && e.length ? gr(e, ic, qr) : n;
              }),
              (zn.minBy = function (e, t) {
                return e && e.length ? gr(e, cs(t, 2), qr) : n;
              }),
              (zn.stubArray = vc),
              (zn.stubFalse = yc),
              (zn.stubObject = function () {
                return {};
              }),
              (zn.stubString = function () {
                return "";
              }),
              (zn.stubTrue = function () {
                return !0;
              }),
              (zn.multiply = Ec),
              (zn.nth = function (e, t) {
                return e && e.length ? Kr(e, ga(t)) : n;
              }),
              (zn.noConflict = function () {
                return dt._ === this && (dt._ = ze), this;
              }),
              (zn.noop = uc),
              (zn.now = Ro),
              (zn.pad = function (e, t, n) {
                e = wa(e);
                var r = (t = ga(t)) ? pn(e) : 0;
                if (!t || r >= t) return e;
                var i = (t - r) / 2;
                return Bi(gt(i), n) + e + Bi(ft(i), n);
              }),
              (zn.padEnd = function (e, t, n) {
                e = wa(e);
                var r = (t = ga(t)) ? pn(e) : 0;
                return t && r < t ? e + Bi(t - r, n) : e;
              }),
              (zn.padStart = function (e, t, n) {
                e = wa(e);
                var r = (t = ga(t)) ? pn(e) : 0;
                return t && r < t ? Bi(t - r, n) + e : e;
              }),
              (zn.parseInt = function (e, t, n) {
                return (
                  n || null == t ? (t = 0) : t && (t = +t),
                  bn(wa(e).replace(ie, ""), t || 0)
                );
              }),
              (zn.random = function (e, t, r) {
                if (
                  (r && "boolean" != typeof r && ws(e, t, r) && (t = r = n),
                  r === n &&
                    ("boolean" == typeof t
                      ? ((r = t), (t = n))
                      : "boolean" == typeof e && ((r = e), (e = n))),
                  e === n && t === n
                    ? ((e = 0), (t = 1))
                    : ((e = fa(e)), t === n ? ((t = e), (e = 0)) : (t = fa(t))),
                  e > t)
                ) {
                  var i = e;
                  (e = t), (t = i);
                }
                if (r || e % 1 || t % 1) {
                  var s = En();
                  return wn(
                    e + s * (t - e + ut("1e-" + ((s + "").length - 1))),
                    t
                  );
                }
                return Jr(e, t);
              }),
              (zn.reduce = function (e, t, n) {
                var r = Wo(e) ? Dt : Gt,
                  i = arguments.length < 3;
                return r(e, cs(t, 4), n, i, pr);
              }),
              (zn.reduceRight = function (e, t, n) {
                var r = Wo(e) ? Lt : Gt,
                  i = arguments.length < 3;
                return r(e, cs(t, 4), n, i, dr);
              }),
              (zn.repeat = function (e, t, r) {
                return (
                  (t = (r ? ws(e, t, r) : t === n) ? 1 : ga(t)), Qr(wa(e), t)
                );
              }),
              (zn.replace = function () {
                var e = arguments,
                  t = wa(e[0]);
                return e.length < 3 ? t : t.replace(e[1], e[2]);
              }),
              (zn.result = function (e, t, r) {
                var i = -1,
                  s = (t = wi(t, e)).length;
                for (s || ((s = 1), (e = n)); ++i < s; ) {
                  var o = null == e ? n : e[Ms(t[i])];
                  o === n && ((i = s), (o = r)), (e = Zo(o) ? o.call(e) : o);
                }
                return e;
              }),
              (zn.round = Ic),
              (zn.runInContext = e),
              (zn.sample = function (e) {
                return (Wo(e) ? $n : $r)(e);
              }),
              (zn.size = function (e) {
                if (null == e) return 0;
                if (Go(e)) return ca(e) ? pn(e) : e.length;
                var t = fs(e);
                return t == I || t == N ? e.size : Lr(e).length;
              }),
              (zn.snakeCase = Ja),
              (zn.some = function (e, t, r) {
                var i = Wo(e) ? Mt : ii;
                return r && ws(e, t, r) && (t = n), i(e, cs(t, 3));
              }),
              (zn.sortedIndex = function (e, t) {
                return si(e, t);
              }),
              (zn.sortedIndexBy = function (e, t, n) {
                return oi(e, t, cs(n, 2));
              }),
              (zn.sortedIndexOf = function (e, t) {
                var n = null == e ? 0 : e.length;
                if (n) {
                  var r = si(e, t);
                  if (r < n && Ho(e[r], t)) return r;
                }
                return -1;
              }),
              (zn.sortedLastIndex = function (e, t) {
                return si(e, t, !0);
              }),
              (zn.sortedLastIndexBy = function (e, t, n) {
                return oi(e, t, cs(n, 2), !0);
              }),
              (zn.sortedLastIndexOf = function (e, t) {
                if (null == e ? 0 : e.length) {
                  var n = si(e, t, !0) - 1;
                  if (Ho(e[n], t)) return n;
                }
                return -1;
              }),
              (zn.startCase = Qa),
              (zn.startsWith = function (e, t, n) {
                return (
                  (e = wa(e)),
                  (n = null == n ? 0 : ar(ga(n), 0, e.length)),
                  (t = ui(t)),
                  e.slice(n, n + t.length) == t
                );
              }),
              (zn.subtract = Sc),
              (zn.sum = function (e) {
                return e && e.length ? Jt(e, ic) : 0;
              }),
              (zn.sumBy = function (e, t) {
                return e && e.length ? Jt(e, cs(t, 2)) : 0;
              }),
              (zn.template = function (e, t, r) {
                var i = zn.templateSettings;
                r && ws(e, t, r) && (t = n),
                  (e = wa(e)),
                  (t = Ea({}, t, i, Zi));
                var s,
                  o,
                  a = Ea({}, t.imports, i.imports, Zi),
                  c = xa(a),
                  u = Zt(a, c),
                  h = 0,
                  l = t.interpolate || _e,
                  p = "__p += '",
                  d = Re(
                    (t.escape || _e).source +
                      "|" +
                      l.source +
                      "|" +
                      (l === Z ? pe : _e).source +
                      "|" +
                      (t.evaluate || _e).source +
                      "|$",
                    "g"
                  ),
                  f =
                    "//# sourceURL=" +
                    (De.call(t, "sourceURL")
                      ? (t.sourceURL + "").replace(/\s/g, " ")
                      : "lodash.templateSources[" + ++st + "]") +
                    "\n";
                e.replace(d, function (t, n, r, i, a, c) {
                  return (
                    r || (r = i),
                    (p += e.slice(h, c).replace(be, on)),
                    n && ((s = !0), (p += "' +\n__e(" + n + ") +\n'")),
                    a && ((o = !0), (p += "';\n" + a + ";\n__p += '")),
                    r &&
                      (p +=
                        "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                    (h = c + t.length),
                    t
                  );
                }),
                  (p += "';\n");
                var g = De.call(t, "variable") && t.variable;
                if (g) {
                  if (he.test(g))
                    throw new Ie(
                      "Invalid `variable` option passed into `_.template`"
                    );
                } else p = "with (obj) {\n" + p + "\n}\n";
                (p = (o ? p.replace(K, "") : p)
                  .replace(B, "$1")
                  .replace(W, "$1;")),
                  (p =
                    "function(" +
                    (g || "obj") +
                    ") {\n" +
                    (g ? "" : "obj || (obj = {});\n") +
                    "var __t, __p = ''" +
                    (s ? ", __e = _.escape" : "") +
                    (o
                      ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n"
                      : ";\n") +
                    p +
                    "return __p\n}");
                var v = Xa(function () {
                  return Se(c, f + "return " + p).apply(n, u);
                });
                if (((v.source = p), $o(v))) throw v;
                return v;
              }),
              (zn.times = function (e, t) {
                if ((e = ga(e)) < 1 || e > p) return [];
                var n = f,
                  r = wn(e, f);
                (t = cs(t)), (e -= f);
                for (var i = Qt(r, t); ++n < e; ) t(n);
                return i;
              }),
              (zn.toFinite = fa),
              (zn.toInteger = ga),
              (zn.toLength = va),
              (zn.toLower = function (e) {
                return wa(e).toLowerCase();
              }),
              (zn.toNumber = ya),
              (zn.toSafeInteger = function (e) {
                return e ? ar(ga(e), -p, p) : 0 === e ? e : 0;
              }),
              (zn.toString = wa),
              (zn.toUpper = function (e) {
                return wa(e).toUpperCase();
              }),
              (zn.trim = function (e, t, r) {
                if ((e = wa(e)) && (r || t === n)) return Yt(e);
                if (!e || !(t = ui(t))) return e;
                var i = dn(e),
                  s = dn(t);
                return bi(i, en(i, s), tn(i, s) + 1).join("");
              }),
              (zn.trimEnd = function (e, t, r) {
                if ((e = wa(e)) && (r || t === n)) return e.slice(0, fn(e) + 1);
                if (!e || !(t = ui(t))) return e;
                var i = dn(e);
                return bi(i, 0, tn(i, dn(t)) + 1).join("");
              }),
              (zn.trimStart = function (e, t, r) {
                if ((e = wa(e)) && (r || t === n)) return e.replace(ie, "");
                if (!e || !(t = ui(t))) return e;
                var i = dn(e);
                return bi(i, en(i, dn(t))).join("");
              }),
              (zn.truncate = function (e, t) {
                var r = 30,
                  i = "...";
                if (ta(t)) {
                  var s = "separator" in t ? t.separator : s;
                  (r = "length" in t ? ga(t.length) : r),
                    (i = "omission" in t ? ui(t.omission) : i);
                }
                var o = (e = wa(e)).length;
                if (an(e)) {
                  var a = dn(e);
                  o = a.length;
                }
                if (r >= o) return e;
                var c = r - pn(i);
                if (c < 1) return i;
                var u = a ? bi(a, 0, c).join("") : e.slice(0, c);
                if (s === n) return u + i;
                if ((a && (c += u.length - c), oa(s))) {
                  if (e.slice(c).search(s)) {
                    var h,
                      l = u;
                    for (
                      s.global || (s = Re(s.source, wa(de.exec(s)) + "g")),
                        s.lastIndex = 0;
                      (h = s.exec(l));

                    )
                      var p = h.index;
                    u = u.slice(0, p === n ? c : p);
                  }
                } else if (e.indexOf(ui(s), c) != c) {
                  var d = u.lastIndexOf(s);
                  d > -1 && (u = u.slice(0, d));
                }
                return u + i;
              }),
              (zn.unescape = function (e) {
                return (e = wa(e)) && J.test(e) ? e.replace(F, gn) : e;
              }),
              (zn.uniqueId = function (e) {
                var t = ++Le;
                return wa(e) + t;
              }),
              (zn.upperCase = Ya),
              (zn.upperFirst = $a),
              (zn.each = wo),
              (zn.eachRight = _o),
              (zn.first = Fs),
              cc(
                zn,
                (function () {
                  var e = {};
                  return (
                    _r(zn, function (t, n) {
                      De.call(zn.prototype, n) || (e[n] = t);
                    }),
                    e
                  );
                })(),
                { chain: !1 }
              ),
              (zn.VERSION = "4.17.21"),
              Rt(
                [
                  "bind",
                  "bindKey",
                  "curry",
                  "curryRight",
                  "partial",
                  "partialRight",
                ],
                function (e) {
                  zn[e].placeholder = zn;
                }
              ),
              Rt(["drop", "take"], function (e, t) {
                (Bn.prototype[e] = function (r) {
                  r = r === n ? 1 : mn(ga(r), 0);
                  var i = this.__filtered__ && !t ? new Bn(this) : this.clone();
                  return (
                    i.__filtered__
                      ? (i.__takeCount__ = wn(r, i.__takeCount__))
                      : i.__views__.push({
                          size: wn(r, f),
                          type: e + (i.__dir__ < 0 ? "Right" : ""),
                        }),
                    i
                  );
                }),
                  (Bn.prototype[e + "Right"] = function (t) {
                    return this.reverse()[e](t).reverse();
                  });
              }),
              Rt(["filter", "map", "takeWhile"], function (e, t) {
                var n = t + 1,
                  r = 1 == n || 3 == n;
                Bn.prototype[e] = function (e) {
                  var t = this.clone();
                  return (
                    t.__iteratees__.push({ iteratee: cs(e, 3), type: n }),
                    (t.__filtered__ = t.__filtered__ || r),
                    t
                  );
                };
              }),
              Rt(["head", "last"], function (e, t) {
                var n = "take" + (t ? "Right" : "");
                Bn.prototype[e] = function () {
                  return this[n](1).value()[0];
                };
              }),
              Rt(["initial", "tail"], function (e, t) {
                var n = "drop" + (t ? "" : "Right");
                Bn.prototype[e] = function () {
                  return this.__filtered__ ? new Bn(this) : this[n](1);
                };
              }),
              (Bn.prototype.compact = function () {
                return this.filter(ic);
              }),
              (Bn.prototype.find = function (e) {
                return this.filter(e).head();
              }),
              (Bn.prototype.findLast = function (e) {
                return this.reverse().find(e);
              }),
              (Bn.prototype.invokeMap = Yr(function (e, t) {
                return "function" == typeof e
                  ? new Bn(this)
                  : this.map(function (n) {
                      return Ar(n, e, t);
                    });
              })),
              (Bn.prototype.reject = function (e) {
                return this.filter(Lo(cs(e)));
              }),
              (Bn.prototype.slice = function (e, t) {
                e = ga(e);
                var r = this;
                return r.__filtered__ && (e > 0 || t < 0)
                  ? new Bn(r)
                  : (e < 0 ? (r = r.takeRight(-e)) : e && (r = r.drop(e)),
                    t !== n &&
                      (r = (t = ga(t)) < 0 ? r.dropRight(-t) : r.take(t - e)),
                    r);
              }),
              (Bn.prototype.takeRightWhile = function (e) {
                return this.reverse().takeWhile(e).reverse();
              }),
              (Bn.prototype.toArray = function () {
                return this.take(f);
              }),
              _r(Bn.prototype, function (e, t) {
                var r = /^(?:filter|find|map|reject)|While$/.test(t),
                  i = /^(?:head|last)$/.test(t),
                  s = zn[i ? "take" + ("last" == t ? "Right" : "") : t],
                  o = i || /^find/.test(t);
                s &&
                  (zn.prototype[t] = function () {
                    var t = this.__wrapped__,
                      a = i ? [1] : arguments,
                      c = t instanceof Bn,
                      u = a[0],
                      h = c || Wo(t),
                      l = function (e) {
                        var t = s.apply(zn, jt([e], a));
                        return i && p ? t[0] : t;
                      };
                    h &&
                      r &&
                      "function" == typeof u &&
                      1 != u.length &&
                      (c = h = !1);
                    var p = this.__chain__,
                      d = !!this.__actions__.length,
                      f = o && !p,
                      g = c && !d;
                    if (!o && h) {
                      t = g ? t : new Bn(this);
                      var v = e.apply(t, a);
                      return (
                        v.__actions__.push({ func: fo, args: [l], thisArg: n }),
                        new Kn(v, p)
                      );
                    }
                    return f && g
                      ? e.apply(this, a)
                      : ((v = this.thru(l)),
                        f ? (i ? v.value()[0] : v.value()) : v);
                  });
              }),
              Rt(
                ["pop", "push", "shift", "sort", "splice", "unshift"],
                function (e) {
                  var t = Ae[e],
                    n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                    r = /^(?:pop|shift)$/.test(e);
                  zn.prototype[e] = function () {
                    var e = arguments;
                    if (r && !this.__chain__) {
                      var i = this.value();
                      return t.apply(Wo(i) ? i : [], e);
                    }
                    return this[n](function (n) {
                      return t.apply(Wo(n) ? n : [], e);
                    });
                  };
                }
              ),
              _r(Bn.prototype, function (e, t) {
                var n = zn[t];
                if (n) {
                  var r = n.name + "";
                  De.call(Cn, r) || (Cn[r] = []),
                    Cn[r].push({ name: t, func: n });
                }
              }),
              (Cn[zi(n, 2).name] = [{ name: "wrapper", func: n }]),
              (Bn.prototype.clone = function () {
                var e = new Bn(this.__wrapped__);
                return (
                  (e.__actions__ = Ti(this.__actions__)),
                  (e.__dir__ = this.__dir__),
                  (e.__filtered__ = this.__filtered__),
                  (e.__iteratees__ = Ti(this.__iteratees__)),
                  (e.__takeCount__ = this.__takeCount__),
                  (e.__views__ = Ti(this.__views__)),
                  e
                );
              }),
              (Bn.prototype.reverse = function () {
                if (this.__filtered__) {
                  var e = new Bn(this);
                  (e.__dir__ = -1), (e.__filtered__ = !0);
                } else (e = this.clone()).__dir__ *= -1;
                return e;
              }),
              (Bn.prototype.value = function () {
                var e = this.__wrapped__.value(),
                  t = this.__dir__,
                  n = Wo(e),
                  r = t < 0,
                  i = n ? e.length : 0,
                  s = (function (e, t, n) {
                    for (var r = -1, i = n.length; ++r < i; ) {
                      var s = n[r],
                        o = s.size;
                      switch (s.type) {
                        case "drop":
                          e += o;
                          break;
                        case "dropRight":
                          t -= o;
                          break;
                        case "take":
                          t = wn(t, e + o);
                          break;
                        case "takeRight":
                          e = mn(e, t - o);
                      }
                    }
                    return { start: e, end: t };
                  })(0, i, this.__views__),
                  o = s.start,
                  a = s.end,
                  c = a - o,
                  u = r ? a : o - 1,
                  h = this.__iteratees__,
                  l = h.length,
                  p = 0,
                  d = wn(c, this.__takeCount__);
                if (!n || (!r && i == c && d == c))
                  return fi(e, this.__actions__);
                var f = [];
                e: for (; c-- && p < d; ) {
                  for (var g = -1, v = e[(u += t)]; ++g < l; ) {
                    var y = h[g],
                      m = y.iteratee,
                      w = y.type,
                      _ = m(v);
                    if (2 == w) v = _;
                    else if (!_) {
                      if (1 == w) continue e;
                      break e;
                    }
                  }
                  f[p++] = v;
                }
                return f;
              }),
              (zn.prototype.at = go),
              (zn.prototype.chain = function () {
                return po(this);
              }),
              (zn.prototype.commit = function () {
                return new Kn(this.value(), this.__chain__);
              }),
              (zn.prototype.next = function () {
                this.__values__ === n && (this.__values__ = da(this.value()));
                var e = this.__index__ >= this.__values__.length;
                return {
                  done: e,
                  value: e ? n : this.__values__[this.__index__++],
                };
              }),
              (zn.prototype.plant = function (e) {
                for (var t, r = this; r instanceof Vn; ) {
                  var i = ks(r);
                  (i.__index__ = 0),
                    (i.__values__ = n),
                    t ? (s.__wrapped__ = i) : (t = i);
                  var s = i;
                  r = r.__wrapped__;
                }
                return (s.__wrapped__ = e), t;
              }),
              (zn.prototype.reverse = function () {
                var e = this.__wrapped__;
                if (e instanceof Bn) {
                  var t = e;
                  return (
                    this.__actions__.length && (t = new Bn(this)),
                    (t = t.reverse()).__actions__.push({
                      func: fo,
                      args: [eo],
                      thisArg: n,
                    }),
                    new Kn(t, this.__chain__)
                  );
                }
                return this.thru(eo);
              }),
              (zn.prototype.toJSON =
                zn.prototype.valueOf =
                zn.prototype.value =
                  function () {
                    return fi(this.__wrapped__, this.__actions__);
                  }),
              (zn.prototype.first = zn.prototype.head),
              $e &&
                (zn.prototype[$e] = function () {
                  return this;
                }),
              zn
            );
          })();
          gt ? (((gt.exports = vn)._ = vn), (ft._ = vn)) : (dt._ = vn);
        }).call(ua);
      })(ha, ha.exports);
      var la = Object.defineProperty,
        pa = Object.defineProperties,
        da = Object.getOwnPropertyDescriptors,
        fa = Object.getOwnPropertySymbols,
        ga = Object.prototype.hasOwnProperty,
        va = Object.prototype.propertyIsEnumerable,
        ya = (e, t, n) =>
          t in e
            ? la(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        ma = (e, t) => {
          for (var n in t || (t = {})) ga.call(t, n) && ya(e, n, t[n]);
          if (fa) for (var n of fa(t)) va.call(t, n) && ya(e, n, t[n]);
          return e;
        },
        wa = (e, t) => pa(e, da(t));
      function _a(e, t, n) {
        var r;
        const i = Mo(e);
        return (
          (null == (r = t.rpcMap) ? void 0 : r[i.reference]) ||
          ""
            .concat("https://rpc.walletconnect.com/v1/", "?chainId=")
            .concat(i.namespace, ":")
            .concat(i.reference, "&projectId=")
            .concat(n)
        );
      }
      function ba(e) {
        return e.includes(":") ? e.split(":")[1] : e;
      }
      function Ea(e) {
        return e.map((e) =>
          "".concat(e.split(":")[0], ":").concat(e.split(":")[1])
        );
      }
      function Ia(e) {
        var t, n, r, i;
        const s = {};
        if (!Bo(e)) return s;
        for (const [o, a] of Object.entries(e)) {
          const e = ko(o) ? [o] : a.chains,
            c = a.methods || [],
            u = a.events || [],
            h = a.rpcMap || {},
            l = zo(o);
          s[l] = wa(ma(ma({}, s[l]), a), {
            chains: qo(e, null == (t = s[l]) ? void 0 : t.chains),
            methods: qo(c, null == (n = s[l]) ? void 0 : n.methods),
            events: qo(u, null == (r = s[l]) ? void 0 : r.events),
            rpcMap: ma(ma({}, h), null == (i = s[l]) ? void 0 : i.rpcMap),
          });
        }
        return s;
      }
      function Sa(e) {
        return e.includes(":") ? e.split(":")[2] : e;
      }
      function Pa(e) {
        const t = {};
        for (const [n, r] of Object.entries(e)) {
          const e = r.methods || [],
            i = r.events || [],
            s = r.accounts || [],
            o = ko(n) ? [n] : r.chains ? r.chains : Ea(r.accounts);
          t[n] = { chains: o, methods: e, events: i, accounts: s };
        }
        return t;
      }
      function Oa(e) {
        return "number" == typeof e
          ? e
          : e.includes("0x")
          ? parseInt(e, 16)
          : e.includes(":")
          ? Number(e.split(":")[1])
          : Number(e);
      }
      const Ra = {},
        Na = (e) => Ra[e],
        Ta = (e, t) => {
          Ra[e] = t;
        };
      class Aa {
        constructor(e) {
          (this.name = "polkadot"),
            (this.namespace = e.namespace),
            (this.events = Na("events")),
            (this.client = Na("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(ca, "".concat(this.name, ":").concat(e));
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return (
            (e &&
              e
                .filter((e) => e.split(":")[1] === this.chainId.toString())
                .map((e) => e.split(":")[2])) ||
            []
          );
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var n;
              const r = ba(t);
              e[r] = this.createHttpProvider(
                r,
                null == (n = this.namespace.rpcMap) ? void 0 : n[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          const e = "".concat(this.name, ":").concat(this.chainId),
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error("JSON-RPC provider for ".concat(e, " not found"));
          return t;
        }
        setHttpProvider(e, t) {
          const n = this.createHttpProvider(e, t);
          n && (this.httpProviders[e] = n);
        }
        createHttpProvider(e, t) {
          const n = t || _a(e, this.namespace, this.client.core.projectId);
          if (!n)
            throw new Error("No RPC url provided for chainId: ".concat(e));
          return new pn(new sa(n, Na("disableProviderPing")));
        }
      }
      class Ca {
        constructor(e) {
          (this.name = "eip155"),
            (this.namespace = e.namespace),
            (this.events = Na("events")),
            (this.client = Na("client")),
            (this.httpProviders = this.createHttpProviders()),
            (this.chainId = parseInt(this.getDefaultChain()));
        }
        async request(e) {
          switch (e.request.method) {
            case "eth_requestAccounts":
            case "eth_accounts":
              return this.getAccounts();
            case "wallet_switchEthereumChain":
              return await this.handleSwitchChain(e);
            case "eth_chainId":
              return parseInt(this.getDefaultChain());
          }
          return this.namespace.methods.includes(e.request.method)
            ? await this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(parseInt(e), t),
            (this.chainId = parseInt(e)),
            this.events.emit(ca, "".concat(this.name, ":").concat(e));
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId.toString();
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        createHttpProvider(e, t) {
          const n =
            t ||
            _a(
              "".concat(this.name, ":").concat(e),
              this.namespace,
              this.client.core.projectId
            );
          if (!n)
            throw new Error("No RPC url provided for chainId: ".concat(e));
          return new pn(new ia(n, Na("disableProviderPing")));
        }
        setHttpProvider(e, t) {
          const n = this.createHttpProvider(e, t);
          n && (this.httpProviders[e] = n);
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var n;
              const r = parseInt(ba(t));
              e[r] = this.createHttpProvider(
                r,
                null == (n = this.namespace.rpcMap) ? void 0 : n[t]
              );
            }),
            e
          );
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        getHttpProvider() {
          const e = this.chainId,
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error("JSON-RPC provider for ".concat(e, " not found"));
          return t;
        }
        async handleSwitchChain(e) {
          var t, n;
          let r = e.request.params
            ? null == (t = e.request.params[0])
              ? void 0
              : t.chainId
            : "0x0";
          r = r.startsWith("0x") ? r : "0x".concat(r);
          const i = parseInt(r, 16);
          if (this.isChainApproved(i)) this.setDefaultChain("".concat(i));
          else {
            if (!this.namespace.methods.includes("wallet_switchEthereumChain"))
              throw new Error(
                "Failed to switch to chain 'eip155:".concat(
                  i,
                  "'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method."
                )
              );
            await this.client.request({
              topic: e.topic,
              request: { method: e.request.method, params: [{ chainId: r }] },
              chainId: null == (n = this.namespace.chains) ? void 0 : n[0],
            }),
              this.setDefaultChain("".concat(i));
          }
          return null;
        }
        isChainApproved(e) {
          return this.namespace.chains.includes(
            "".concat(this.name, ":").concat(e)
          );
        }
      }
      class xa {
        constructor(e) {
          (this.name = "solana"),
            (this.namespace = e.namespace),
            (this.events = Na("events")),
            (this.client = Na("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(ca, "".concat(this.name, ":").concat(e));
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var n;
              const r = ba(t);
              e[r] = this.createHttpProvider(
                r,
                null == (n = this.namespace.rpcMap) ? void 0 : n[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          const e = "".concat(this.name, ":").concat(this.chainId),
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error("JSON-RPC provider for ".concat(e, " not found"));
          return t;
        }
        setHttpProvider(e, t) {
          const n = this.createHttpProvider(e, t);
          n && (this.httpProviders[e] = n);
        }
        createHttpProvider(e, t) {
          const n = t || _a(e, this.namespace, this.client.core.projectId);
          if (!n)
            throw new Error("No RPC url provided for chainId: ".concat(e));
          return new pn(new sa(n, Na("disableProviderPing")));
        }
      }
      class Ua {
        constructor(e) {
          (this.name = "cosmos"),
            (this.namespace = e.namespace),
            (this.events = Na("events")),
            (this.client = Na("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(
              ca,
              "".concat(this.name, ":").concat(this.chainId)
            );
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var n;
              const r = ba(t);
              e[r] = this.createHttpProvider(
                r,
                null == (n = this.namespace.rpcMap) ? void 0 : n[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          const e = "".concat(this.name, ":").concat(this.chainId),
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error("JSON-RPC provider for ".concat(e, " not found"));
          return t;
        }
        setHttpProvider(e, t) {
          const n = this.createHttpProvider(e, t);
          n && (this.httpProviders[e] = n);
        }
        createHttpProvider(e, t) {
          const n = t || _a(e, this.namespace, this.client.core.projectId);
          if (!n)
            throw new Error("No RPC url provided for chainId: ".concat(e));
          return new pn(new sa(n, Na("disableProviderPing")));
        }
      }
      class ja {
        constructor(e) {
          (this.name = "cip34"),
            (this.namespace = e.namespace),
            (this.events = Na("events")),
            (this.client = Na("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(
              ca,
              "".concat(this.name, ":").concat(this.chainId)
            );
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              const n = this.getCardanoRPCUrl(t),
                r = ba(t);
              e[r] = this.createHttpProvider(r, n);
            }),
            e
          );
        }
        getHttpProvider() {
          const e = "".concat(this.name, ":").concat(this.chainId),
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error("JSON-RPC provider for ".concat(e, " not found"));
          return t;
        }
        getCardanoRPCUrl(e) {
          const t = this.namespace.rpcMap;
          if (t) return t[e];
        }
        setHttpProvider(e, t) {
          const n = this.createHttpProvider(e, t);
          n && (this.httpProviders[e] = n);
        }
        createHttpProvider(e, t) {
          const n = t || this.getCardanoRPCUrl(e);
          if (!n)
            throw new Error("No RPC url provided for chainId: ".concat(e));
          return new pn(new sa(n, Na("disableProviderPing")));
        }
      }
      class Da {
        constructor(e) {
          (this.name = "elrond"),
            (this.namespace = e.namespace),
            (this.events = Na("events")),
            (this.client = Na("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(ca, "".concat(this.name, ":").concat(e));
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var n;
              const r = ba(t);
              e[r] = this.createHttpProvider(
                r,
                null == (n = this.namespace.rpcMap) ? void 0 : n[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          const e = "".concat(this.name, ":").concat(this.chainId),
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error("JSON-RPC provider for ".concat(e, " not found"));
          return t;
        }
        setHttpProvider(e, t) {
          const n = this.createHttpProvider(e, t);
          n && (this.httpProviders[e] = n);
        }
        createHttpProvider(e, t) {
          const n = t || _a(e, this.namespace, this.client.core.projectId);
          if (!n)
            throw new Error("No RPC url provided for chainId: ".concat(e));
          return new pn(new sa(n, Na("disableProviderPing")));
        }
      }
      class La {
        constructor(e) {
          (this.name = "multiversx"),
            (this.namespace = e.namespace),
            (this.events = Na("events")),
            (this.client = Na("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          this.httpProviders[e] || this.setHttpProvider(e, t),
            (this.chainId = e),
            this.events.emit(ca, "".concat(this.name, ":").concat(e));
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return e
            ? [
                ...new Set(
                  e
                    .filter((e) => e.split(":")[1] === this.chainId.toString())
                    .map((e) => e.split(":")[2])
                ),
              ]
            : [];
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var n;
              const r = ba(t);
              e[r] = this.createHttpProvider(
                r,
                null == (n = this.namespace.rpcMap) ? void 0 : n[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          const e = "".concat(this.name, ":").concat(this.chainId),
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error("JSON-RPC provider for ".concat(e, " not found"));
          return t;
        }
        setHttpProvider(e, t) {
          const n = this.createHttpProvider(e, t);
          n && (this.httpProviders[e] = n);
        }
        createHttpProvider(e, t) {
          const n = t || _a(e, this.namespace, this.client.core.projectId);
          if (!n)
            throw new Error("No RPC url provided for chainId: ".concat(e));
          return new pn(new sa(n, Na("disableProviderPing")));
        }
      }
      class Ma {
        constructor(e) {
          (this.name = "near"),
            (this.namespace = e.namespace),
            (this.events = Na("events")),
            (this.client = Na("client")),
            (this.chainId = this.getDefaultChain()),
            (this.httpProviders = this.createHttpProviders());
        }
        updateNamespace(e) {
          this.namespace = Object.assign(this.namespace, e);
        }
        requestAccounts() {
          return this.getAccounts();
        }
        getDefaultChain() {
          if (this.chainId) return this.chainId;
          if (this.namespace.defaultChain) return this.namespace.defaultChain;
          const e = this.namespace.chains[0];
          if (!e) throw new Error("ChainId not found");
          return e.split(":")[1];
        }
        request(e) {
          return this.namespace.methods.includes(e.request.method)
            ? this.client.request(e)
            : this.getHttpProvider().request(e.request);
        }
        setDefaultChain(e, t) {
          if (((this.chainId = e), !this.httpProviders[e])) {
            const n =
              t || _a("".concat(this.name, ":").concat(e), this.namespace);
            if (!n)
              throw new Error("No RPC url provided for chainId: ".concat(e));
            this.setHttpProvider(e, n);
          }
          this.events.emit(ca, "".concat(this.name, ":").concat(this.chainId));
        }
        getAccounts() {
          const e = this.namespace.accounts;
          return (
            (e &&
              e
                .filter((e) => e.split(":")[1] === this.chainId.toString())
                .map((e) => e.split(":")[2])) ||
            []
          );
        }
        createHttpProviders() {
          const e = {};
          return (
            this.namespace.chains.forEach((t) => {
              var n;
              e[t] = this.createHttpProvider(
                t,
                null == (n = this.namespace.rpcMap) ? void 0 : n[t]
              );
            }),
            e
          );
        }
        getHttpProvider() {
          const e = "".concat(this.name, ":").concat(this.chainId),
            t = this.httpProviders[e];
          if (typeof t > "u")
            throw new Error("JSON-RPC provider for ".concat(e, " not found"));
          return t;
        }
        setHttpProvider(e, t) {
          const n = this.createHttpProvider(e, t);
          n && (this.httpProviders[e] = n);
        }
        createHttpProvider(e, t) {
          const n = t || _a(e, this.namespace);
          return typeof n > "u"
            ? void 0
            : new pn(new sa(n, Na("disableProviderPing")));
        }
      }
      var qa = Object.defineProperty,
        ka = Object.defineProperties,
        za = Object.getOwnPropertyDescriptors,
        Ha = Object.getOwnPropertySymbols,
        Va = Object.prototype.hasOwnProperty,
        Ka = Object.prototype.propertyIsEnumerable,
        Ba = (e, t, n) =>
          t in e
            ? qa(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        Wa = (e, t) => {
          for (var n in t || (t = {})) Va.call(t, n) && Ba(e, n, t[n]);
          if (Ha) for (var n of Ha(t)) Ka.call(t, n) && Ba(e, n, t[n]);
          return e;
        },
        Fa = (e, t) => ka(e, za(t));
      class Ga {
        constructor(e) {
          (this.events = new (i())()),
            (this.rpcProviders = {}),
            (this.shouldAbortPairingAttempt = !1),
            (this.maxPairingAttempts = 10),
            (this.disableProviderPing = !1),
            (this.providerOpts = e),
            (this.logger =
              typeof (null === e || void 0 === e ? void 0 : e.logger) < "u" &&
              "string" !=
                typeof (null === e || void 0 === e ? void 0 : e.logger)
                ? e.logger
                : (0, oe.pino)(
                    (0, oe.getDefaultLoggerOptions)({
                      level:
                        (null === e || void 0 === e ? void 0 : e.logger) || oa,
                    })
                  )),
            (this.disableProviderPing =
              (null === e || void 0 === e ? void 0 : e.disableProviderPing) ||
              !1);
        }
        static async init(e) {
          const t = new Ga(e);
          return await t.initialize(), t;
        }
        async request(e, t) {
          const [n, r] = this.validateChain(t);
          if (!this.session)
            throw new Error("Please call connect() before request()");
          return await this.getProvider(n).request({
            request: Wa({}, e),
            chainId: "".concat(n, ":").concat(r),
            topic: this.session.topic,
          });
        }
        sendAsync(e, t, n) {
          this.request(e, n)
            .then((e) => t(null, e))
            .catch((e) => t(e, void 0));
        }
        async enable() {
          if (!this.client) throw new Error("Sign Client not initialized");
          return (
            this.session ||
              (await this.connect({
                namespaces: this.namespaces,
                optionalNamespaces: this.optionalNamespaces,
                sessionProperties: this.sessionProperties,
              })),
            await this.requestAccounts()
          );
        }
        async disconnect() {
          var e;
          if (!this.session)
            throw new Error("Please call connect() before enable()");
          await this.client.disconnect({
            topic: null == (e = this.session) ? void 0 : e.topic,
            reason: Vo("USER_DISCONNECTED"),
          }),
            await this.cleanup();
        }
        async connect(e) {
          if (!this.client) throw new Error("Sign Client not initialized");
          if (
            (this.setNamespaces(e),
            await this.cleanupPendingPairings(),
            !e.skipPairing)
          )
            return await this.pair(e.pairingTopic);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        get isWalletConnect() {
          return !0;
        }
        async pair(e) {
          this.shouldAbortPairingAttempt = !1;
          let t = 0;
          do {
            if (this.shouldAbortPairingAttempt)
              throw new Error("Pairing aborted");
            if (t >= this.maxPairingAttempts)
              throw new Error("Max auto pairing attempts reached");
            const { uri: n, approval: r } = await this.client.connect({
              pairingTopic: e,
              requiredNamespaces: this.namespaces,
              optionalNamespaces: this.optionalNamespaces,
              sessionProperties: this.sessionProperties,
            });
            n && ((this.uri = n), this.events.emit("display_uri", n)),
              await r()
                .then((e) => {
                  (this.session = e),
                    this.namespaces ||
                      ((this.namespaces = Pa(e.namespaces)),
                      this.persist("namespaces", this.namespaces));
                })
                .catch((e) => {
                  if (e.message !== go) throw e;
                  t++;
                });
          } while (!this.session);
          return this.onConnect(), this.session;
        }
        setDefaultChain(e, t) {
          try {
            if (!this.session) return;
            const [n, r] = this.validateChain(e);
            this.getProvider(n).setDefaultChain(r, t);
          } catch (pe) {
            if (!/Please call connect/.test(pe.message)) throw pe;
          }
        }
        async cleanupPendingPairings() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.logger.info("Cleaning up inactive pairings...");
          const t = this.client.pairing.getAll();
          if (Ko(t)) {
            for (const n of t)
              e.deletePairings
                ? this.client.core.expirer.set(n.topic, 0)
                : await this.client.core.relayer.subscriber.unsubscribe(
                    n.topic
                  );
            this.logger.info("Inactive pairings cleared: ".concat(t.length));
          }
        }
        abortPairingAttempt() {
          this.shouldAbortPairingAttempt = !0;
        }
        async checkStorage() {
          if (
            ((this.namespaces = await this.getFromStore("namespaces")),
            (this.optionalNamespaces =
              (await this.getFromStore("optionalNamespaces")) || {}),
            this.client.session.length)
          ) {
            const e = this.client.session.keys.length - 1;
            (this.session = this.client.session.get(
              this.client.session.keys[e]
            )),
              this.createProviders();
          }
        }
        async initialize() {
          this.logger.trace("Initialized"),
            await this.createClient(),
            await this.checkStorage(),
            this.registerEventListeners();
        }
        async createClient() {
          (this.client =
            this.providerOpts.client ||
            (await Do.init({
              logger: this.providerOpts.logger || oa,
              relayUrl:
                this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
              projectId: this.providerOpts.projectId,
              metadata: this.providerOpts.metadata,
              storageOptions: this.providerOpts.storageOptions,
              storage: this.providerOpts.storage,
              name: this.providerOpts.name,
            }))),
            this.logger.trace("SignClient Initialized");
        }
        createProviders() {
          if (!this.client) throw new Error("Sign Client not initialized");
          if (!this.session)
            throw new Error(
              "Session not initialized. Please call connect() before enable()"
            );
          const e = [
            ...new Set(Object.keys(this.session.namespaces).map((e) => zo(e))),
          ];
          Ta("client", this.client),
            Ta("events", this.events),
            Ta("disableProviderPing", this.disableProviderPing),
            e.forEach((e) => {
              if (!this.session) return;
              const t = (function (e, t) {
                  const n = Object.keys(t.namespaces).filter((t) =>
                    t.includes(e)
                  );
                  if (!n.length) return [];
                  const r = [];
                  return (
                    n.forEach((e) => {
                      const n = t.namespaces[e].accounts;
                      r.push(...n);
                    }),
                    r
                  );
                })(e, this.session),
                n = Ea(t),
                r = (function () {
                  let e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {};
                  const t = Ia(
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {}
                    ),
                    n = Ia(e);
                  return ha.exports.merge(t, n);
                })(this.namespaces, this.optionalNamespaces),
                i = Fa(Wa({}, r[e]), { accounts: t, chains: n });
              switch (e) {
                case "eip155":
                  this.rpcProviders[e] = new Ca({ namespace: i });
                  break;
                case "solana":
                  this.rpcProviders[e] = new xa({ namespace: i });
                  break;
                case "cosmos":
                  this.rpcProviders[e] = new Ua({ namespace: i });
                  break;
                case "polkadot":
                  this.rpcProviders[e] = new Aa({ namespace: i });
                  break;
                case "cip34":
                  this.rpcProviders[e] = new ja({ namespace: i });
                  break;
                case "elrond":
                  this.rpcProviders[e] = new Da({ namespace: i });
                  break;
                case "multiversx":
                  this.rpcProviders[e] = new La({ namespace: i });
                  break;
                case "near":
                  this.rpcProviders[e] = new Ma({ namespace: i });
              }
            });
        }
        registerEventListeners() {
          if (typeof this.client > "u")
            throw new Error("Sign Client is not initialized");
          this.client.on("session_ping", (e) => {
            this.events.emit("session_ping", e);
          }),
            this.client.on("session_event", (e) => {
              const { params: t } = e,
                { event: n } = t;
              if ("accountsChanged" === n.name) {
                const e = n.data;
                e && Ko(e) && this.events.emit("accountsChanged", e.map(Sa));
              } else if ("chainChanged" === n.name) {
                const e = t.chainId,
                  n = t.event.data,
                  r = zo(e),
                  i = Oa(e) !== Oa(n) ? "".concat(r, ":").concat(Oa(n)) : e;
                this.onChainChanged(i);
              } else this.events.emit(n.name, n.data);
              this.events.emit("session_event", e);
            }),
            this.client.on("session_update", (e) => {
              let { topic: t, params: n } = e;
              var r;
              const { namespaces: i } = n,
                s = null == (r = this.client) ? void 0 : r.session.get(t);
              (this.session = Fa(Wa({}, s), { namespaces: i })),
                this.onSessionUpdate(),
                this.events.emit("session_update", { topic: t, params: n });
            }),
            this.client.on("session_delete", async (e) => {
              await this.cleanup(),
                this.events.emit("session_delete", e),
                this.events.emit(
                  "disconnect",
                  Fa(Wa({}, Vo("USER_DISCONNECTED")), { data: e.topic })
                );
            }),
            this.on(ca, (e) => {
              this.onChainChanged(e, !0);
            });
        }
        getProvider(e) {
          if (!this.rpcProviders[e])
            throw new Error("Provider not found: ".concat(e));
          return this.rpcProviders[e];
        }
        onSessionUpdate() {
          Object.keys(this.rpcProviders).forEach((e) => {
            var t;
            this.getProvider(e).updateNamespace(
              null == (t = this.session) ? void 0 : t.namespaces[e]
            );
          });
        }
        setNamespaces(e) {
          const {
            namespaces: t,
            optionalNamespaces: n,
            sessionProperties: r,
          } = e;
          t && Object.keys(t).length && (this.namespaces = t),
            n && Object.keys(n).length && (this.optionalNamespaces = n),
            (this.sessionProperties = r),
            this.persist("namespaces", t),
            this.persist("optionalNamespaces", n);
        }
        validateChain(e) {
          const [t, n] = (null === e || void 0 === e
            ? void 0
            : e.split(":")) || ["", ""];
          if (!this.namespaces || !Object.keys(this.namespaces).length)
            return [t, n];
          if (
            t &&
            !Object.keys(this.namespaces || {})
              .map((e) => zo(e))
              .includes(t)
          )
            throw new Error(
              "Namespace '".concat(
                t,
                "' is not configured. Please call connect() first with namespace config."
              )
            );
          if (t && n) return [t, n];
          const r = zo(Object.keys(this.namespaces)[0]);
          return [r, this.rpcProviders[r].getDefaultChain()];
        }
        async requestAccounts() {
          const [e] = this.validateChain();
          return await this.getProvider(e).requestAccounts();
        }
        onChainChanged(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          var n;
          if (!this.namespaces) return;
          const [r, i] = this.validateChain(e);
          t || this.getProvider(r).setDefaultChain(i),
            ((null != (n = this.namespaces[r])
              ? n
              : this.namespaces["".concat(r, ":").concat(i)]
            ).defaultChain = i),
            this.persist("namespaces", this.namespaces),
            this.events.emit("chainChanged", i);
        }
        onConnect() {
          this.createProviders(),
            this.events.emit("connect", { session: this.session });
        }
        async cleanup() {
          (this.session = void 0),
            (this.namespaces = void 0),
            (this.optionalNamespaces = void 0),
            (this.sessionProperties = void 0),
            this.persist("namespaces", void 0),
            this.persist("optionalNamespaces", void 0),
            this.persist("sessionProperties", void 0),
            await this.cleanupPendingPairings({ deletePairings: !0 });
        }
        persist(e, t) {
          this.client.core.storage.setItem("".concat(aa, "/").concat(e), t);
        }
        async getFromStore(e) {
          return await this.client.core.storage.getItem(
            "".concat(aa, "/").concat(e)
          );
        }
      }
      const Ja = Ga,
        Qa = "".concat("wc", "@2:").concat("ethereum_provider", ":"),
        Ya = ["eth_sendTransaction", "personal_sign"],
        $a = [
          "eth_accounts",
          "eth_requestAccounts",
          "eth_sendRawTransaction",
          "eth_sign",
          "eth_signTransaction",
          "eth_signTypedData",
          "eth_signTypedData_v3",
          "eth_signTypedData_v4",
          "eth_sendTransaction",
          "personal_sign",
          "wallet_switchEthereumChain",
          "wallet_addEthereumChain",
          "wallet_getPermissions",
          "wallet_requestPermissions",
          "wallet_registerOnboarding",
          "wallet_watchAsset",
          "wallet_scanQRCode",
        ],
        Za = ["chainChanged", "accountsChanged"],
        Xa = [
          "chainChanged",
          "accountsChanged",
          "message",
          "disconnect",
          "connect",
        ];
      var ec = Object.defineProperty,
        tc = Object.defineProperties,
        nc = Object.getOwnPropertyDescriptors,
        rc = Object.getOwnPropertySymbols,
        ic = Object.prototype.hasOwnProperty,
        sc = Object.prototype.propertyIsEnumerable,
        oc = (e, t, n) =>
          t in e
            ? ec(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        ac = (e, t) => {
          for (var n in t || (t = {})) ic.call(t, n) && oc(e, n, t[n]);
          if (rc) for (var n of rc(t)) sc.call(t, n) && oc(e, n, t[n]);
          return e;
        },
        cc = (e, t) => tc(e, nc(t));
      function uc(e) {
        return Number(e[0].split(":")[1]);
      }
      function hc(e) {
        return "0x".concat(e.toString(16));
      }
      class lc {
        constructor() {
          (this.events = new r.EventEmitter()),
            (this.namespace = "eip155"),
            (this.accounts = []),
            (this.chainId = 1),
            (this.STORAGE_KEY = Qa),
            (this.on = (e, t) => (this.events.on(e, t), this)),
            (this.once = (e, t) => (this.events.once(e, t), this)),
            (this.removeListener = (e, t) => (
              this.events.removeListener(e, t), this
            )),
            (this.off = (e, t) => (this.events.off(e, t), this)),
            (this.parseAccount = (e) =>
              this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e),
            (this.signer = {}),
            (this.rpc = {});
        }
        static async init(e) {
          const t = new lc();
          return await t.initialize(e), t;
        }
        async request(e) {
          return await this.signer.request(e, this.formatChainId(this.chainId));
        }
        sendAsync(e, t) {
          this.signer.sendAsync(e, t, this.formatChainId(this.chainId));
        }
        get connected() {
          return (
            !!this.signer.client && this.signer.client.core.relayer.connected
          );
        }
        get connecting() {
          return (
            !!this.signer.client && this.signer.client.core.relayer.connecting
          );
        }
        async enable() {
          return (
            this.session || (await this.connect()),
            await this.request({ method: "eth_requestAccounts" })
          );
        }
        async connect(e) {
          if (!this.signer.client)
            throw new Error("Provider not initialized. Call init() first");
          this.loadConnectOpts(e);
          const { required: t, optional: n } = (function (e) {
            const {
              chains: t,
              optionalChains: n,
              methods: r,
              optionalMethods: i,
              events: s,
              optionalEvents: o,
              rpcMap: a,
            } = e;
            if (!m(t)) throw new Error("Invalid chains");
            const c = {
                chains: t,
                methods: r || Ya,
                events: s || Za,
                rpcMap: ac({}, t.length ? { [uc(t)]: a[uc(t)] } : {}),
              },
              u =
                null === s || void 0 === s
                  ? void 0
                  : s.filter((e) => !Za.includes(e)),
              h =
                null === r || void 0 === r
                  ? void 0
                  : r.filter((e) => !Ya.includes(e));
            if (
              !n &&
              !o &&
              !i &&
              (null == u || !u.length) &&
              (null == h || !h.length)
            )
              return { required: t.length ? c : void 0 };
            const l =
                ((null === u || void 0 === u ? void 0 : u.length) &&
                  (null === h || void 0 === h ? void 0 : h.length)) ||
                !n,
              p = {
                chains: [...new Set(l ? c.chains.concat(n || []) : n)],
                methods: [
                  ...new Set(c.methods.concat(null != i && i.length ? i : $a)),
                ],
                events: [
                  ...new Set(c.events.concat(null != o && o.length ? o : Xa)),
                ],
                rpcMap: a,
              };
            return {
              required: t.length ? c : void 0,
              optional: n.length ? p : void 0,
            };
          })(this.rpc);
          try {
            const r = await new Promise(async (r, i) => {
              var s;
              this.rpc.showQrModal &&
                (null == (s = this.modal) ||
                  s.subscribeModal((e) => {
                    !e.open &&
                      !this.signer.session &&
                      (this.signer.abortPairingAttempt(),
                      i(
                        new Error("Connection request reset. Please try again.")
                      ));
                  })),
                await this.signer
                  .connect(
                    cc(
                      ac(
                        { namespaces: ac({}, t && { [this.namespace]: t }) },
                        n && { optionalNamespaces: { [this.namespace]: n } }
                      ),
                      {
                        pairingTopic:
                          null === e || void 0 === e ? void 0 : e.pairingTopic,
                      }
                    )
                  )
                  .then((e) => {
                    r(e);
                  })
                  .catch((e) => {
                    i(new Error(e.message));
                  });
            });
            if (!r) return;
            const i = (function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : [];
              const n = [];
              return (
                Object.keys(e).forEach((r) => {
                  if (t.length && !t.includes(r)) return;
                  const i = e[r];
                  n.push(...i.accounts);
                }),
                n
              );
            })(r.namespaces, [this.namespace]);
            this.setChainIds(this.rpc.chains.length ? this.rpc.chains : i),
              this.setAccounts(i),
              this.events.emit("connect", { chainId: hc(this.chainId) });
          } catch (ce) {
            throw (this.signer.logger.error(ce), ce);
          } finally {
            this.modal && this.modal.closeModal();
          }
        }
        async disconnect() {
          this.session && (await this.signer.disconnect()), this.reset();
        }
        get isWalletConnect() {
          return !0;
        }
        get session() {
          return this.signer.session;
        }
        registerEventListeners() {
          this.signer.on("session_event", (e) => {
            const { params: t } = e,
              { event: n } = t;
            "accountsChanged" === n.name
              ? ((this.accounts = this.parseAccounts(n.data)),
                this.events.emit("accountsChanged", this.accounts))
              : "chainChanged" === n.name
              ? this.setChainId(this.formatChainId(n.data))
              : this.events.emit(n.name, n.data),
              this.events.emit("session_event", e);
          }),
            this.signer.on("chainChanged", (e) => {
              const t = parseInt(e);
              (this.chainId = t),
                this.events.emit("chainChanged", hc(this.chainId)),
                this.persist();
            }),
            this.signer.on("session_update", (e) => {
              this.events.emit("session_update", e);
            }),
            this.signer.on("session_delete", (e) => {
              this.reset(),
                this.events.emit("session_delete", e),
                this.events.emit(
                  "disconnect",
                  cc(ac({}, y("USER_DISCONNECTED")), {
                    data: e.topic,
                    name: "USER_DISCONNECTED",
                  })
                );
            }),
            this.signer.on("display_uri", (e) => {
              var t, n;
              this.rpc.showQrModal &&
                (null == (t = this.modal) || t.closeModal(),
                null == (n = this.modal) || n.openModal({ uri: e })),
                this.events.emit("display_uri", e);
            });
        }
        switchEthereumChain(e) {
          this.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: e.toString(16) }],
          });
        }
        isCompatibleChainId(e) {
          return (
            "string" == typeof e && e.startsWith("".concat(this.namespace, ":"))
          );
        }
        formatChainId(e) {
          return "".concat(this.namespace, ":").concat(e);
        }
        parseChainId(e) {
          return Number(e.split(":")[1]);
        }
        setChainIds(e) {
          const t = e
            .filter((e) => this.isCompatibleChainId(e))
            .map((e) => this.parseChainId(e));
          t.length &&
            ((this.chainId = t[0]),
            this.events.emit("chainChanged", hc(this.chainId)),
            this.persist());
        }
        setChainId(e) {
          if (this.isCompatibleChainId(e)) {
            const t = this.parseChainId(e);
            (this.chainId = t), this.switchEthereumChain(t);
          }
        }
        parseAccountId(e) {
          const [t, n, r] = e.split(":");
          return { chainId: "".concat(t, ":").concat(n), address: r };
        }
        setAccounts(e) {
          (this.accounts = e
            .filter(
              (e) =>
                this.parseChainId(this.parseAccountId(e).chainId) ===
                this.chainId
            )
            .map((e) => this.parseAccountId(e).address)),
            this.events.emit("accountsChanged", this.accounts);
        }
        getRpcConfig(e) {
          var t, n;
          const r =
              null != (t = null === e || void 0 === e ? void 0 : e.chains)
                ? t
                : [],
            i =
              null !=
              (n = null === e || void 0 === e ? void 0 : e.optionalChains)
                ? n
                : [],
            s = r.concat(i);
          if (!s.length)
            throw new Error(
              "No chains specified in either `chains` or `optionalChains`"
            );
          const o = r.length
              ? (null === e || void 0 === e ? void 0 : e.methods) || Ya
              : [],
            a = r.length
              ? (null === e || void 0 === e ? void 0 : e.events) || Za
              : [],
            c = (null === e || void 0 === e ? void 0 : e.optionalMethods) || [],
            u = (null === e || void 0 === e ? void 0 : e.optionalEvents) || [],
            h =
              (null === e || void 0 === e ? void 0 : e.rpcMap) ||
              this.buildRpcMap(s, e.projectId),
            l =
              (null === e || void 0 === e ? void 0 : e.qrModalOptions) ||
              void 0;
          return {
            chains:
              null === r || void 0 === r
                ? void 0
                : r.map((e) => this.formatChainId(e)),
            optionalChains: i.map((e) => this.formatChainId(e)),
            methods: o,
            events: a,
            optionalMethods: c,
            optionalEvents: u,
            rpcMap: h,
            showQrModal: !(null == e || !e.showQrModal),
            qrModalOptions: l,
            projectId: e.projectId,
            metadata: e.metadata,
          };
        }
        buildRpcMap(e, t) {
          const n = {};
          return (
            e.forEach((e) => {
              n[e] = this.getRpcUrl(e, t);
            }),
            n
          );
        }
        async initialize(e) {
          if (
            ((this.rpc = this.getRpcConfig(e)),
            (this.chainId = this.rpc.chains.length
              ? uc(this.rpc.chains)
              : uc(this.rpc.optionalChains)),
            (this.signer = await Ja.init({
              projectId: this.rpc.projectId,
              metadata: this.rpc.metadata,
              disableProviderPing: e.disableProviderPing,
              relayUrl: e.relayUrl,
              storageOptions: e.storageOptions,
            })),
            this.registerEventListeners(),
            await this.loadPersistedSession(),
            this.rpc.showQrModal)
          ) {
            let e;
            try {
              const { WalletConnectModal: t } = await n
                .e(981)
                .then(n.bind(n, 99981));
              e = t;
            } catch {
              throw new Error(
                "To use QR modal, please install @walletconnect/modal package"
              );
            }
            if (e)
              try {
                this.modal = new e(
                  ac(
                    {
                      walletConnectVersion: 2,
                      projectId: this.rpc.projectId,
                      standaloneChains: this.rpc.chains,
                    },
                    this.rpc.qrModalOptions
                  )
                );
              } catch (t) {
                throw (
                  (this.signer.logger.error(t),
                  new Error("Could not generate WalletConnectModal Instance"))
                );
              }
          }
        }
        loadConnectOpts(e) {
          if (!e) return;
          const { chains: t, optionalChains: n, rpcMap: r } = e;
          t &&
            m(t) &&
            ((this.rpc.chains = t.map((e) => this.formatChainId(e))),
            t.forEach((e) => {
              this.rpc.rpcMap[e] =
                (null === r || void 0 === r ? void 0 : r[e]) ||
                this.getRpcUrl(e);
            })),
            n &&
              m(n) &&
              ((this.rpc.optionalChains = []),
              (this.rpc.optionalChains =
                null === n || void 0 === n
                  ? void 0
                  : n.map((e) => this.formatChainId(e))),
              n.forEach((e) => {
                this.rpc.rpcMap[e] =
                  (null === r || void 0 === r ? void 0 : r[e]) ||
                  this.getRpcUrl(e);
              }));
        }
        getRpcUrl(e, t) {
          var n;
          return (
            (null == (n = this.rpc.rpcMap) ? void 0 : n[e]) ||
            ""
              .concat("https://rpc.walletconnect.com/v1/", "?chainId=eip155:")
              .concat(e, "&projectId=")
              .concat(t || this.rpc.projectId)
          );
        }
        async loadPersistedSession() {
          if (!this.session) return;
          const e = await this.signer.client.core.storage.getItem(
              "".concat(this.STORAGE_KEY, "/chainId")
            ),
            t = this.session.namespaces[
              "".concat(this.namespace, ":").concat(e)
            ]
              ? this.session.namespaces[
                  "".concat(this.namespace, ":").concat(e)
                ]
              : this.session.namespaces[this.namespace];
          this.setChainIds(
            e
              ? [this.formatChainId(e)]
              : null === t || void 0 === t
              ? void 0
              : t.accounts
          ),
            this.setAccounts(null === t || void 0 === t ? void 0 : t.accounts);
        }
        reset() {
          (this.chainId = 1), (this.accounts = []);
        }
        persist() {
          this.session &&
            this.signer.client.core.storage.setItem(
              "".concat(this.STORAGE_KEY, "/chainId"),
              this.chainId
            );
        }
        parseAccounts(e) {
          return "string" == typeof e || e instanceof String
            ? [this.parseAccount(e)]
            : e.map((e) => this.parseAccount(e));
        }
      }
      const pc = lc;
    },
    23375: (e, t, n) => {
      "use strict";
      n.d(t, { q: () => r });
      class r {}
    },
    66727: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { IEvents: () => r.q });
      var r = n(23375);
    },
    3918: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.HEARTBEAT_EVENTS = t.HEARTBEAT_INTERVAL = void 0);
      const r = n(93659);
      (t.HEARTBEAT_INTERVAL = r.FIVE_SECONDS),
        (t.HEARTBEAT_EVENTS = { pulse: "heartbeat_pulse" });
    },
    17122: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      n(66797).__exportStar(n(3918), t);
    },
    80588: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.HeartBeat = void 0);
      const r = n(66797),
        i = n(68041),
        s = n(93659),
        o = n(45326),
        a = n(17122);
      class c extends o.IHeartBeat {
        constructor(e) {
          super(e),
            (this.events = new i.EventEmitter()),
            (this.interval = a.HEARTBEAT_INTERVAL),
            (this.interval =
              (null === e || void 0 === e ? void 0 : e.interval) ||
              a.HEARTBEAT_INTERVAL);
        }
        static init(e) {
          return r.__awaiter(this, void 0, void 0, function* () {
            const t = new c(e);
            return yield t.init(), t;
          });
        }
        init() {
          return r.__awaiter(this, void 0, void 0, function* () {
            yield this.initialize();
          });
        }
        stop() {
          clearInterval(this.intervalRef);
        }
        on(e, t) {
          this.events.on(e, t);
        }
        once(e, t) {
          this.events.once(e, t);
        }
        off(e, t) {
          this.events.off(e, t);
        }
        removeListener(e, t) {
          this.events.removeListener(e, t);
        }
        initialize() {
          return r.__awaiter(this, void 0, void 0, function* () {
            this.intervalRef = setInterval(
              () => this.pulse(),
              s.toMiliseconds(this.interval)
            );
          });
        }
        pulse() {
          this.events.emit(a.HEARTBEAT_EVENTS.pulse);
        }
      }
      t.HeartBeat = c;
    },
    1345: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const r = n(66797);
      r.__exportStar(n(80588), t),
        r.__exportStar(n(45326), t),
        r.__exportStar(n(17122), t);
    },
    61398: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.IHeartBeat = void 0);
      const r = n(66727);
      class i extends r.IEvents {
        constructor(e) {
          super();
        }
      }
      t.IHeartBeat = i;
    },
    45326: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      n(66797).__exportStar(n(61398), t);
    },
    31379: (e, t, n) => {
      "use strict";
      var r = n(52028);
      n.o(r, "isHttpUrl") &&
        n.d(t, {
          isHttpUrl: function () {
            return r.isHttpUrl;
          },
        }),
        n.o(r, "isLocalhostUrl") &&
          n.d(t, {
            isLocalhostUrl: function () {
              return r.isLocalhostUrl;
            },
          }),
        n.o(r, "isReactNative") &&
          n.d(t, {
            isReactNative: function () {
              return r.isReactNative;
            },
          }),
        n.o(r, "isWsUrl") &&
          n.d(t, {
            isWsUrl: function () {
              return r.isWsUrl;
            },
          });
      var i = n(8488);
      n.o(i, "isHttpUrl") &&
        n.d(t, {
          isHttpUrl: function () {
            return i.isHttpUrl;
          },
        }),
        n.o(i, "isLocalhostUrl") &&
          n.d(t, {
            isLocalhostUrl: function () {
              return i.isLocalhostUrl;
            },
          }),
        n.o(i, "isReactNative") &&
          n.d(t, {
            isReactNative: function () {
              return i.isReactNative;
            },
          }),
        n.o(i, "isWsUrl") &&
          n.d(t, {
            isWsUrl: function () {
              return i.isWsUrl;
            },
          });
    },
    52028: () => {},
    8488: () => {},
    99528: (e, t, n) => {
      "use strict";
      n.d(t, {
        O4: () => r,
        CA: () => i,
        dQ: () => s,
        xK: () => o,
        JV: () => a,
      });
      const r = "INTERNAL_ERROR",
        i = "SERVER_ERROR",
        s = [-32700, -32600, -32601, -32602, -32603],
        o = {
          PARSE_ERROR: { code: -32700, message: "Parse error" },
          INVALID_REQUEST: { code: -32600, message: "Invalid Request" },
          METHOD_NOT_FOUND: { code: -32601, message: "Method not found" },
          INVALID_PARAMS: { code: -32602, message: "Invalid params" },
          [r]: { code: -32603, message: "Internal error" },
          [i]: { code: -32e3, message: "Server error" },
        },
        a = i;
    },
    23401: (e, t, n) => {
      "use strict";
      var r = n(55503);
      n.o(r, "formatJsonRpcError") &&
        n.d(t, {
          formatJsonRpcError: function () {
            return r.formatJsonRpcError;
          },
        }),
        n.o(r, "isLocalhostUrl") &&
          n.d(t, {
            isLocalhostUrl: function () {
              return r.isLocalhostUrl;
            },
          }),
        n.o(r, "isReactNative") &&
          n.d(t, {
            isReactNative: function () {
              return r.isReactNative;
            },
          }),
        n.o(r, "isWsUrl") &&
          n.d(t, {
            isWsUrl: function () {
              return r.isWsUrl;
            },
          });
    },
    28233: (e, t, n) => {
      "use strict";
      n.d(t, { i5: () => i, by: () => s, L2: () => o, CX: () => a });
      var r = n(99528);
      function i(e) {
        return r.dQ.includes(e);
      }
      function s(e) {
        return Object.keys(r.xK).includes(e) ? r.xK[e] : r.xK[r.JV];
      }
      function o(e) {
        const t = Object.values(r.xK).find((t) => t.code === e);
        return t || r.xK[r.JV];
      }
      function a(e, t, n) {
        return e.message.includes("getaddrinfo ENOTFOUND") ||
          e.message.includes("connect ECONNREFUSED")
          ? new Error("Unavailable ".concat(n, " RPC url at ").concat(t))
          : e;
      }
    },
    6365: (e, t, n) => {
      "use strict";
      n.d(t, { RI: () => s });
      var r = n(28233),
        i = n(99528);
      function s(e, t, n) {
        return { id: e, jsonrpc: "2.0", error: o(t, n) };
      }
      function o(e, t) {
        return "undefined" === typeof e
          ? (0, r.by)(i.O4)
          : ("string" === typeof e &&
              (e = Object.assign(Object.assign({}, (0, r.by)(i.CA)), {
                message: e,
              })),
            "undefined" !== typeof t && (e.data = t),
            (0, r.i5)(e.code) && (e = (0, r.L2)(e.code)),
            e);
      }
    },
    86524: (e, t, n) => {
      "use strict";
      n.d(t, {
        parseConnectionError: () => r.CX,
        formatJsonRpcError: () => s.RI,
        isLocalhostUrl: () => a.JF,
        isWsUrl: () => a.UZ,
      });
      n(99528);
      var r = n(28233),
        i = n(23401);
      n.o(i, "formatJsonRpcError") &&
        n.d(t, {
          formatJsonRpcError: function () {
            return i.formatJsonRpcError;
          },
        }),
        n.o(i, "isLocalhostUrl") &&
          n.d(t, {
            isLocalhostUrl: function () {
              return i.isLocalhostUrl;
            },
          }),
        n.o(i, "isReactNative") &&
          n.d(t, {
            isReactNative: function () {
              return i.isReactNative;
            },
          }),
        n.o(i, "isWsUrl") &&
          n.d(t, {
            isWsUrl: function () {
              return i.isWsUrl;
            },
          });
      var s = n(6365),
        o = n(90545);
      n.o(o, "isLocalhostUrl") &&
        n.d(t, {
          isLocalhostUrl: function () {
            return o.isLocalhostUrl;
          },
        }),
        n.o(o, "isReactNative") &&
          n.d(t, {
            isReactNative: function () {
              return o.isReactNative;
            },
          }),
        n.o(o, "isWsUrl") &&
          n.d(t, {
            isWsUrl: function () {
              return o.isWsUrl;
            },
          });
      var a = n(77051);
    },
    90545: (e, t, n) => {
      "use strict";
      var r = n(31379);
      n.o(r, "isLocalhostUrl") &&
        n.d(t, {
          isLocalhostUrl: function () {
            return r.isLocalhostUrl;
          },
        }),
        n.o(r, "isReactNative") &&
          n.d(t, {
            isReactNative: function () {
              return r.isReactNative;
            },
          }),
        n.o(r, "isWsUrl") &&
          n.d(t, {
            isWsUrl: function () {
              return r.isWsUrl;
            },
          });
    },
    77051: (e, t, n) => {
      "use strict";
      n.d(t, { UZ: () => i, JF: () => s });
      function r(e, t) {
        const n = (function (e) {
          const t = e.match(new RegExp(/^\w+:/, "gi"));
          if (t && t.length) return t[0];
        })(e);
        return "undefined" !== typeof n && new RegExp(t).test(n);
      }
      function i(e) {
        return r(e, "^wss?:");
      }
      function s(e) {
        return new RegExp("wss?://localhost(:d{2,5})?").test(e);
      }
    },
    82923: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.PINO_CUSTOM_CONTEXT_KEY = t.PINO_LOGGER_DEFAULTS = void 0),
        (t.PINO_LOGGER_DEFAULTS = { level: "info" }),
        (t.PINO_CUSTOM_CONTEXT_KEY = "custom_context");
    },
    91451: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }), (t.pino = void 0);
      const r = n(66797),
        i = r.__importDefault(n(53243));
      Object.defineProperty(t, "pino", {
        enumerable: !0,
        get: function () {
          return i.default;
        },
      }),
        r.__exportStar(n(82923), t),
        r.__exportStar(n(41067), t);
    },
    41067: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.generateChildLogger =
          t.formatChildLoggerContext =
          t.getLoggerContext =
          t.setBrowserLoggerContext =
          t.getBrowserLoggerContext =
          t.getDefaultLoggerOptions =
            void 0);
      const r = n(82923);
      function i(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : r.PINO_CUSTOM_CONTEXT_KEY;
        return e[t] || "";
      }
      function s(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : r.PINO_CUSTOM_CONTEXT_KEY;
        return (e[n] = t), e;
      }
      function o(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : r.PINO_CUSTOM_CONTEXT_KEY,
          n = "";
        return (
          (n =
            "undefined" === typeof e.bindings
              ? i(e, t)
              : e.bindings().context || ""),
          n
        );
      }
      function a(e, t) {
        let n =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : r.PINO_CUSTOM_CONTEXT_KEY;
        const i = o(e, n),
          s = i.trim() ? "".concat(i, "/").concat(t) : t;
        return s;
      }
      (t.getDefaultLoggerOptions = function (e) {
        return Object.assign(Object.assign({}, e), {
          level:
            (null === e || void 0 === e ? void 0 : e.level) ||
            r.PINO_LOGGER_DEFAULTS.level,
        });
      }),
        (t.getBrowserLoggerContext = i),
        (t.setBrowserLoggerContext = s),
        (t.getLoggerContext = o),
        (t.formatChildLoggerContext = a),
        (t.generateChildLogger = function (e, t) {
          let n =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : r.PINO_CUSTOM_CONTEXT_KEY;
          const i = a(e, t, n),
            o = e.child({ context: i });
          return s(o, i, n);
        });
    },
    16395: () => {},
    7605: function (e, t) {
      var n = "undefined" !== typeof self ? self : this,
        r = (function () {
          function e() {
            (this.fetch = !1), (this.DOMException = n.DOMException);
          }
          return (e.prototype = n), new e();
        })();
      !(function (e) {
        !(function (t) {
          var n = "URLSearchParams" in e,
            r = "Symbol" in e && "iterator" in Symbol,
            i =
              "FileReader" in e &&
              "Blob" in e &&
              (function () {
                try {
                  return new Blob(), !0;
                } catch (e) {
                  return !1;
                }
              })(),
            s = "FormData" in e,
            o = "ArrayBuffer" in e;
          if (o)
            var a = [
                "[object Int8Array]",
                "[object Uint8Array]",
                "[object Uint8ClampedArray]",
                "[object Int16Array]",
                "[object Uint16Array]",
                "[object Int32Array]",
                "[object Uint32Array]",
                "[object Float32Array]",
                "[object Float64Array]",
              ],
              c =
                ArrayBuffer.isView ||
                function (e) {
                  return e && a.indexOf(Object.prototype.toString.call(e)) > -1;
                };
          function u(e) {
            if (
              ("string" !== typeof e && (e = String(e)),
              /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))
            )
              throw new TypeError("Invalid character in header field name");
            return e.toLowerCase();
          }
          function h(e) {
            return "string" !== typeof e && (e = String(e)), e;
          }
          function l(e) {
            var t = {
              next: function () {
                var t = e.shift();
                return { done: void 0 === t, value: t };
              },
            };
            return (
              r &&
                (t[Symbol.iterator] = function () {
                  return t;
                }),
              t
            );
          }
          function p(e) {
            (this.map = {}),
              e instanceof p
                ? e.forEach(function (e, t) {
                    this.append(t, e);
                  }, this)
                : Array.isArray(e)
                ? e.forEach(function (e) {
                    this.append(e[0], e[1]);
                  }, this)
                : e &&
                  Object.getOwnPropertyNames(e).forEach(function (t) {
                    this.append(t, e[t]);
                  }, this);
          }
          function d(e) {
            if (e.bodyUsed)
              return Promise.reject(new TypeError("Already read"));
            e.bodyUsed = !0;
          }
          function f(e) {
            return new Promise(function (t, n) {
              (e.onload = function () {
                t(e.result);
              }),
                (e.onerror = function () {
                  n(e.error);
                });
            });
          }
          function g(e) {
            var t = new FileReader(),
              n = f(t);
            return t.readAsArrayBuffer(e), n;
          }
          function v(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)), t.buffer;
          }
          function y() {
            return (
              (this.bodyUsed = !1),
              (this._initBody = function (e) {
                var t;
                (this._bodyInit = e),
                  e
                    ? "string" === typeof e
                      ? (this._bodyText = e)
                      : i && Blob.prototype.isPrototypeOf(e)
                      ? (this._bodyBlob = e)
                      : s && FormData.prototype.isPrototypeOf(e)
                      ? (this._bodyFormData = e)
                      : n && URLSearchParams.prototype.isPrototypeOf(e)
                      ? (this._bodyText = e.toString())
                      : o && i && (t = e) && DataView.prototype.isPrototypeOf(t)
                      ? ((this._bodyArrayBuffer = v(e.buffer)),
                        (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                      : o && (ArrayBuffer.prototype.isPrototypeOf(e) || c(e))
                      ? (this._bodyArrayBuffer = v(e))
                      : (this._bodyText = e = Object.prototype.toString.call(e))
                    : (this._bodyText = ""),
                  this.headers.get("content-type") ||
                    ("string" === typeof e
                      ? this.headers.set(
                          "content-type",
                          "text/plain;charset=UTF-8"
                        )
                      : this._bodyBlob && this._bodyBlob.type
                      ? this.headers.set("content-type", this._bodyBlob.type)
                      : n &&
                        URLSearchParams.prototype.isPrototypeOf(e) &&
                        this.headers.set(
                          "content-type",
                          "application/x-www-form-urlencoded;charset=UTF-8"
                        ));
              }),
              i &&
                ((this.blob = function () {
                  var e = d(this);
                  if (e) return e;
                  if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                  if (this._bodyArrayBuffer)
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                  if (this._bodyFormData)
                    throw new Error("could not read FormData body as blob");
                  return Promise.resolve(new Blob([this._bodyText]));
                }),
                (this.arrayBuffer = function () {
                  return this._bodyArrayBuffer
                    ? d(this) || Promise.resolve(this._bodyArrayBuffer)
                    : this.blob().then(g);
                })),
              (this.text = function () {
                var e = d(this);
                if (e) return e;
                if (this._bodyBlob)
                  return (function (e) {
                    var t = new FileReader(),
                      n = f(t);
                    return t.readAsText(e), n;
                  })(this._bodyBlob);
                if (this._bodyArrayBuffer)
                  return Promise.resolve(
                    (function (e) {
                      for (
                        var t = new Uint8Array(e),
                          n = new Array(t.length),
                          r = 0;
                        r < t.length;
                        r++
                      )
                        n[r] = String.fromCharCode(t[r]);
                      return n.join("");
                    })(this._bodyArrayBuffer)
                  );
                if (this._bodyFormData)
                  throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText);
              }),
              s &&
                (this.formData = function () {
                  return this.text().then(_);
                }),
              (this.json = function () {
                return this.text().then(JSON.parse);
              }),
              this
            );
          }
          (p.prototype.append = function (e, t) {
            (e = u(e)), (t = h(t));
            var n = this.map[e];
            this.map[e] = n ? n + ", " + t : t;
          }),
            (p.prototype.delete = function (e) {
              delete this.map[u(e)];
            }),
            (p.prototype.get = function (e) {
              return (e = u(e)), this.has(e) ? this.map[e] : null;
            }),
            (p.prototype.has = function (e) {
              return this.map.hasOwnProperty(u(e));
            }),
            (p.prototype.set = function (e, t) {
              this.map[u(e)] = h(t);
            }),
            (p.prototype.forEach = function (e, t) {
              for (var n in this.map)
                this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this);
            }),
            (p.prototype.keys = function () {
              var e = [];
              return (
                this.forEach(function (t, n) {
                  e.push(n);
                }),
                l(e)
              );
            }),
            (p.prototype.values = function () {
              var e = [];
              return (
                this.forEach(function (t) {
                  e.push(t);
                }),
                l(e)
              );
            }),
            (p.prototype.entries = function () {
              var e = [];
              return (
                this.forEach(function (t, n) {
                  e.push([n, t]);
                }),
                l(e)
              );
            }),
            r && (p.prototype[Symbol.iterator] = p.prototype.entries);
          var m = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
          function w(e, t) {
            var n = (t = t || {}).body;
            if (e instanceof w) {
              if (e.bodyUsed) throw new TypeError("Already read");
              (this.url = e.url),
                (this.credentials = e.credentials),
                t.headers || (this.headers = new p(e.headers)),
                (this.method = e.method),
                (this.mode = e.mode),
                (this.signal = e.signal),
                n ||
                  null == e._bodyInit ||
                  ((n = e._bodyInit), (e.bodyUsed = !0));
            } else this.url = String(e);
            if (
              ((this.credentials =
                t.credentials || this.credentials || "same-origin"),
              (!t.headers && this.headers) || (this.headers = new p(t.headers)),
              (this.method = (function (e) {
                var t = e.toUpperCase();
                return m.indexOf(t) > -1 ? t : e;
              })(t.method || this.method || "GET")),
              (this.mode = t.mode || this.mode || null),
              (this.signal = t.signal || this.signal),
              (this.referrer = null),
              ("GET" === this.method || "HEAD" === this.method) && n)
            )
              throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(n);
          }
          function _(e) {
            var t = new FormData();
            return (
              e
                .trim()
                .split("&")
                .forEach(function (e) {
                  if (e) {
                    var n = e.split("="),
                      r = n.shift().replace(/\+/g, " "),
                      i = n.join("=").replace(/\+/g, " ");
                    t.append(decodeURIComponent(r), decodeURIComponent(i));
                  }
                }),
              t
            );
          }
          function b(e) {
            var t = new p();
            return (
              e
                .replace(/\r?\n[\t ]+/g, " ")
                .split(/\r?\n/)
                .forEach(function (e) {
                  var n = e.split(":"),
                    r = n.shift().trim();
                  if (r) {
                    var i = n.join(":").trim();
                    t.append(r, i);
                  }
                }),
              t
            );
          }
          function E(e, t) {
            t || (t = {}),
              (this.type = "default"),
              (this.status = void 0 === t.status ? 200 : t.status),
              (this.ok = this.status >= 200 && this.status < 300),
              (this.statusText = "statusText" in t ? t.statusText : "OK"),
              (this.headers = new p(t.headers)),
              (this.url = t.url || ""),
              this._initBody(e);
          }
          (w.prototype.clone = function () {
            return new w(this, { body: this._bodyInit });
          }),
            y.call(w.prototype),
            y.call(E.prototype),
            (E.prototype.clone = function () {
              return new E(this._bodyInit, {
                status: this.status,
                statusText: this.statusText,
                headers: new p(this.headers),
                url: this.url,
              });
            }),
            (E.error = function () {
              var e = new E(null, { status: 0, statusText: "" });
              return (e.type = "error"), e;
            });
          var I = [301, 302, 303, 307, 308];
          (E.redirect = function (e, t) {
            if (-1 === I.indexOf(t))
              throw new RangeError("Invalid status code");
            return new E(null, { status: t, headers: { location: e } });
          }),
            (t.DOMException = e.DOMException);
          try {
            new t.DOMException();
          } catch (P) {
            (t.DOMException = function (e, t) {
              (this.message = e), (this.name = t);
              var n = Error(e);
              this.stack = n.stack;
            }),
              (t.DOMException.prototype = Object.create(Error.prototype)),
              (t.DOMException.prototype.constructor = t.DOMException);
          }
          function S(e, n) {
            return new Promise(function (r, s) {
              var o = new w(e, n);
              if (o.signal && o.signal.aborted)
                return s(new t.DOMException("Aborted", "AbortError"));
              var a = new XMLHttpRequest();
              function c() {
                a.abort();
              }
              (a.onload = function () {
                var e = {
                  status: a.status,
                  statusText: a.statusText,
                  headers: b(a.getAllResponseHeaders() || ""),
                };
                e.url =
                  "responseURL" in a
                    ? a.responseURL
                    : e.headers.get("X-Request-URL");
                var t = "response" in a ? a.response : a.responseText;
                r(new E(t, e));
              }),
                (a.onerror = function () {
                  s(new TypeError("Network request failed"));
                }),
                (a.ontimeout = function () {
                  s(new TypeError("Network request failed"));
                }),
                (a.onabort = function () {
                  s(new t.DOMException("Aborted", "AbortError"));
                }),
                a.open(o.method, o.url, !0),
                "include" === o.credentials
                  ? (a.withCredentials = !0)
                  : "omit" === o.credentials && (a.withCredentials = !1),
                "responseType" in a && i && (a.responseType = "blob"),
                o.headers.forEach(function (e, t) {
                  a.setRequestHeader(t, e);
                }),
                o.signal &&
                  (o.signal.addEventListener("abort", c),
                  (a.onreadystatechange = function () {
                    4 === a.readyState &&
                      o.signal.removeEventListener("abort", c);
                  })),
                a.send("undefined" === typeof o._bodyInit ? null : o._bodyInit);
            });
          }
          (S.polyfill = !0),
            e.fetch ||
              ((e.fetch = S),
              (e.Headers = p),
              (e.Request = w),
              (e.Response = E)),
            (t.Headers = p),
            (t.Request = w),
            (t.Response = E),
            (t.fetch = S),
            Object.defineProperty(t, "__esModule", { value: !0 });
        })({});
      })(r),
        (r.fetch.ponyfill = !0),
        delete r.fetch.polyfill;
      var i = r;
      ((t = i.fetch).default = i.fetch),
        (t.fetch = i.fetch),
        (t.Headers = i.Headers),
        (t.Request = i.Request),
        (t.Response = i.Response),
        (e.exports = t);
    },
    68041: (e) => {
      "use strict";
      var t,
        n = "object" === typeof Reflect ? Reflect : null,
        r =
          n && "function" === typeof n.apply
            ? n.apply
            : function (e, t, n) {
                return Function.prototype.apply.call(e, t, n);
              };
      t =
        n && "function" === typeof n.ownKeys
          ? n.ownKeys
          : Object.getOwnPropertySymbols
          ? function (e) {
              return Object.getOwnPropertyNames(e).concat(
                Object.getOwnPropertySymbols(e)
              );
            }
          : function (e) {
              return Object.getOwnPropertyNames(e);
            };
      var i =
        Number.isNaN ||
        function (e) {
          return e !== e;
        };
      function s() {
        s.init.call(this);
      }
      (e.exports = s),
        (e.exports.once = function (e, t) {
          return new Promise(function (n, r) {
            function i(n) {
              e.removeListener(t, s), r(n);
            }
            function s() {
              "function" === typeof e.removeListener &&
                e.removeListener("error", i),
                n([].slice.call(arguments));
            }
            g(e, t, s, { once: !0 }),
              "error" !== t &&
                (function (e, t, n) {
                  "function" === typeof e.on && g(e, "error", t, n);
                })(e, i, { once: !0 });
          });
        }),
        (s.EventEmitter = s),
        (s.prototype._events = void 0),
        (s.prototype._eventsCount = 0),
        (s.prototype._maxListeners = void 0);
      var o = 10;
      function a(e) {
        if ("function" !== typeof e)
          throw new TypeError(
            'The "listener" argument must be of type Function. Received type ' +
              typeof e
          );
      }
      function c(e) {
        return void 0 === e._maxListeners
          ? s.defaultMaxListeners
          : e._maxListeners;
      }
      function u(e, t, n, r) {
        var i, s, o, u;
        if (
          (a(n),
          void 0 === (s = e._events)
            ? ((s = e._events = Object.create(null)), (e._eventsCount = 0))
            : (void 0 !== s.newListener &&
                (e.emit("newListener", t, n.listener ? n.listener : n),
                (s = e._events)),
              (o = s[t])),
          void 0 === o)
        )
          (o = s[t] = n), ++e._eventsCount;
        else if (
          ("function" === typeof o
            ? (o = s[t] = r ? [n, o] : [o, n])
            : r
            ? o.unshift(n)
            : o.push(n),
          (i = c(e)) > 0 && o.length > i && !o.warned)
        ) {
          o.warned = !0;
          var h = new Error(
            "Possible EventEmitter memory leak detected. " +
              o.length +
              " " +
              String(t) +
              " listeners added. Use emitter.setMaxListeners() to increase limit"
          );
          (h.name = "MaxListenersExceededWarning"),
            (h.emitter = e),
            (h.type = t),
            (h.count = o.length),
            (u = h),
            console && console.warn && console.warn(u);
        }
        return e;
      }
      function h() {
        if (!this.fired)
          return (
            this.target.removeListener(this.type, this.wrapFn),
            (this.fired = !0),
            0 === arguments.length
              ? this.listener.call(this.target)
              : this.listener.apply(this.target, arguments)
          );
      }
      function l(e, t, n) {
        var r = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n },
          i = h.bind(r);
        return (i.listener = n), (r.wrapFn = i), i;
      }
      function p(e, t, n) {
        var r = e._events;
        if (void 0 === r) return [];
        var i = r[t];
        return void 0 === i
          ? []
          : "function" === typeof i
          ? n
            ? [i.listener || i]
            : [i]
          : n
          ? (function (e) {
              for (var t = new Array(e.length), n = 0; n < t.length; ++n)
                t[n] = e[n].listener || e[n];
              return t;
            })(i)
          : f(i, i.length);
      }
      function d(e) {
        var t = this._events;
        if (void 0 !== t) {
          var n = t[e];
          if ("function" === typeof n) return 1;
          if (void 0 !== n) return n.length;
        }
        return 0;
      }
      function f(e, t) {
        for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
        return n;
      }
      function g(e, t, n, r) {
        if ("function" === typeof e.on) r.once ? e.once(t, n) : e.on(t, n);
        else {
          if ("function" !== typeof e.addEventListener)
            throw new TypeError(
              'The "emitter" argument must be of type EventEmitter. Received type ' +
                typeof e
            );
          e.addEventListener(t, function i(s) {
            r.once && e.removeEventListener(t, i), n(s);
          });
        }
      }
      Object.defineProperty(s, "defaultMaxListeners", {
        enumerable: !0,
        get: function () {
          return o;
        },
        set: function (e) {
          if ("number" !== typeof e || e < 0 || i(e))
            throw new RangeError(
              'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
                e +
                "."
            );
          o = e;
        },
      }),
        (s.init = function () {
          (void 0 !== this._events &&
            this._events !== Object.getPrototypeOf(this)._events) ||
            ((this._events = Object.create(null)), (this._eventsCount = 0)),
            (this._maxListeners = this._maxListeners || void 0);
        }),
        (s.prototype.setMaxListeners = function (e) {
          if ("number" !== typeof e || e < 0 || i(e))
            throw new RangeError(
              'The value of "n" is out of range. It must be a non-negative number. Received ' +
                e +
                "."
            );
          return (this._maxListeners = e), this;
        }),
        (s.prototype.getMaxListeners = function () {
          return c(this);
        }),
        (s.prototype.emit = function (e) {
          for (var t = [], n = 1; n < arguments.length; n++)
            t.push(arguments[n]);
          var i = "error" === e,
            s = this._events;
          if (void 0 !== s) i = i && void 0 === s.error;
          else if (!i) return !1;
          if (i) {
            var o;
            if ((t.length > 0 && (o = t[0]), o instanceof Error)) throw o;
            var a = new Error(
              "Unhandled error." + (o ? " (" + o.message + ")" : "")
            );
            throw ((a.context = o), a);
          }
          var c = s[e];
          if (void 0 === c) return !1;
          if ("function" === typeof c) r(c, this, t);
          else {
            var u = c.length,
              h = f(c, u);
            for (n = 0; n < u; ++n) r(h[n], this, t);
          }
          return !0;
        }),
        (s.prototype.addListener = function (e, t) {
          return u(this, e, t, !1);
        }),
        (s.prototype.on = s.prototype.addListener),
        (s.prototype.prependListener = function (e, t) {
          return u(this, e, t, !0);
        }),
        (s.prototype.once = function (e, t) {
          return a(t), this.on(e, l(this, e, t)), this;
        }),
        (s.prototype.prependOnceListener = function (e, t) {
          return a(t), this.prependListener(e, l(this, e, t)), this;
        }),
        (s.prototype.removeListener = function (e, t) {
          var n, r, i, s, o;
          if ((a(t), void 0 === (r = this._events))) return this;
          if (void 0 === (n = r[e])) return this;
          if (n === t || n.listener === t)
            0 === --this._eventsCount
              ? (this._events = Object.create(null))
              : (delete r[e],
                r.removeListener &&
                  this.emit("removeListener", e, n.listener || t));
          else if ("function" !== typeof n) {
            for (i = -1, s = n.length - 1; s >= 0; s--)
              if (n[s] === t || n[s].listener === t) {
                (o = n[s].listener), (i = s);
                break;
              }
            if (i < 0) return this;
            0 === i
              ? n.shift()
              : (function (e, t) {
                  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                  e.pop();
                })(n, i),
              1 === n.length && (r[e] = n[0]),
              void 0 !== r.removeListener &&
                this.emit("removeListener", e, o || t);
          }
          return this;
        }),
        (s.prototype.off = s.prototype.removeListener),
        (s.prototype.removeAllListeners = function (e) {
          var t, n, r;
          if (void 0 === (n = this._events)) return this;
          if (void 0 === n.removeListener)
            return (
              0 === arguments.length
                ? ((this._events = Object.create(null)),
                  (this._eventsCount = 0))
                : void 0 !== n[e] &&
                  (0 === --this._eventsCount
                    ? (this._events = Object.create(null))
                    : delete n[e]),
              this
            );
          if (0 === arguments.length) {
            var i,
              s = Object.keys(n);
            for (r = 0; r < s.length; ++r)
              "removeListener" !== (i = s[r]) && this.removeAllListeners(i);
            return (
              this.removeAllListeners("removeListener"),
              (this._events = Object.create(null)),
              (this._eventsCount = 0),
              this
            );
          }
          if ("function" === typeof (t = n[e])) this.removeListener(e, t);
          else if (void 0 !== t)
            for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
          return this;
        }),
        (s.prototype.listeners = function (e) {
          return p(this, e, !0);
        }),
        (s.prototype.rawListeners = function (e) {
          return p(this, e, !1);
        }),
        (s.listenerCount = function (e, t) {
          return "function" === typeof e.listenerCount
            ? e.listenerCount(t)
            : d.call(e, t);
        }),
        (s.prototype.listenerCount = d),
        (s.prototype.eventNames = function () {
          return this._eventsCount > 0 ? t(this._events) : [];
        });
    },
    23108: (e, t, n) => {
      e = n.nmd(e);
      var r = "__lodash_hash_undefined__",
        i = 9007199254740991,
        s = "[object Arguments]",
        o = "[object Array]",
        a = "[object Boolean]",
        c = "[object Date]",
        u = "[object Error]",
        h = "[object Function]",
        l = "[object Map]",
        p = "[object Number]",
        d = "[object Object]",
        f = "[object Promise]",
        g = "[object RegExp]",
        v = "[object Set]",
        y = "[object String]",
        m = "[object Symbol]",
        w = "[object WeakMap]",
        _ = "[object ArrayBuffer]",
        b = "[object DataView]",
        E = /^\[object .+?Constructor\]$/,
        I = /^(?:0|[1-9]\d*)$/,
        S = {};
      (S["[object Float32Array]"] =
        S["[object Float64Array]"] =
        S["[object Int8Array]"] =
        S["[object Int16Array]"] =
        S["[object Int32Array]"] =
        S["[object Uint8Array]"] =
        S["[object Uint8ClampedArray]"] =
        S["[object Uint16Array]"] =
        S["[object Uint32Array]"] =
          !0),
        (S[s] =
          S[o] =
          S[_] =
          S[a] =
          S[b] =
          S[c] =
          S[u] =
          S[h] =
          S[l] =
          S[p] =
          S[d] =
          S[g] =
          S[v] =
          S[y] =
          S[w] =
            !1);
      var P = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
        O = "object" == typeof self && self && self.Object === Object && self,
        R = P || O || Function("return this")(),
        N = t && !t.nodeType && t,
        T = N && e && !e.nodeType && e,
        A = T && T.exports === N,
        C = A && P.process,
        x = (function () {
          try {
            return C && C.binding && C.binding("util");
          } catch (e) {}
        })(),
        U = x && x.isTypedArray;
      function j(e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r; )
          if (t(e[n], n, e)) return !0;
        return !1;
      }
      function D(e) {
        var t = -1,
          n = Array(e.size);
        return (
          e.forEach(function (e, r) {
            n[++t] = [r, e];
          }),
          n
        );
      }
      function L(e) {
        var t = -1,
          n = Array(e.size);
        return (
          e.forEach(function (e) {
            n[++t] = e;
          }),
          n
        );
      }
      var M,
        q,
        k = Array.prototype,
        z = Function.prototype,
        H = Object.prototype,
        V = R["__core-js_shared__"],
        K = z.toString,
        B = H.hasOwnProperty,
        W = (function () {
          var e = /[^.]+$/.exec((V && V.keys && V.keys.IE_PROTO) || "");
          return e ? "Symbol(src)_1." + e : "";
        })(),
        F = H.toString,
        G = RegExp(
          "^" +
            K.call(B)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        ),
        J = A ? R.Buffer : void 0,
        Q = R.Symbol,
        Y = R.Uint8Array,
        $ = H.propertyIsEnumerable,
        Z = k.splice,
        X = Q ? Q.toStringTag : void 0,
        ee = Object.getOwnPropertySymbols,
        te = J ? J.isBuffer : void 0,
        ne =
          ((M = Object.keys),
          (q = Object),
          function (e) {
            return M(q(e));
          }),
        re = Ce(R, "DataView"),
        ie = Ce(R, "Map"),
        se = Ce(R, "Promise"),
        oe = Ce(R, "Set"),
        ae = Ce(R, "WeakMap"),
        ce = Ce(Object, "create"),
        ue = De(re),
        he = De(ie),
        le = De(se),
        pe = De(oe),
        de = De(ae),
        fe = Q ? Q.prototype : void 0,
        ge = fe ? fe.valueOf : void 0;
      function ve(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      function ye(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      function me(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var r = e[t];
          this.set(r[0], r[1]);
        }
      }
      function we(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.__data__ = new me(); ++t < n; ) this.add(e[t]);
      }
      function _e(e) {
        var t = (this.__data__ = new ye(e));
        this.size = t.size;
      }
      function be(e, t) {
        var n = qe(e),
          r = !n && Me(e),
          i = !n && !r && ke(e),
          s = !n && !r && !i && Be(e),
          o = n || r || i || s,
          a = o
            ? (function (e, t) {
                for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
                return r;
              })(e.length, String)
            : [],
          c = a.length;
        for (var u in e)
          (!t && !B.call(e, u)) ||
            (o &&
              ("length" == u ||
                (i && ("offset" == u || "parent" == u)) ||
                (s &&
                  ("buffer" == u || "byteLength" == u || "byteOffset" == u)) ||
                je(u, c))) ||
            a.push(u);
        return a;
      }
      function Ee(e, t) {
        for (var n = e.length; n--; ) if (Le(e[n][0], t)) return n;
        return -1;
      }
      function Ie(e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : X && X in Object(e)
          ? (function (e) {
              var t = B.call(e, X),
                n = e[X];
              try {
                e[X] = void 0;
                var r = !0;
              } catch (s) {}
              var i = F.call(e);
              r && (t ? (e[X] = n) : delete e[X]);
              return i;
            })(e)
          : (function (e) {
              return F.call(e);
            })(e);
      }
      function Se(e) {
        return Ke(e) && Ie(e) == s;
      }
      function Pe(e, t, n, r, i) {
        return (
          e === t ||
          (null == e || null == t || (!Ke(e) && !Ke(t))
            ? e !== e && t !== t
            : (function (e, t, n, r, i, h) {
                var f = qe(e),
                  w = qe(t),
                  E = f ? o : Ue(e),
                  I = w ? o : Ue(t),
                  S = (E = E == s ? d : E) == d,
                  P = (I = I == s ? d : I) == d,
                  O = E == I;
                if (O && ke(e)) {
                  if (!ke(t)) return !1;
                  (f = !0), (S = !1);
                }
                if (O && !S)
                  return (
                    h || (h = new _e()),
                    f || Be(e)
                      ? Ne(e, t, n, r, i, h)
                      : (function (e, t, n, r, i, s, o) {
                          switch (n) {
                            case b:
                              if (
                                e.byteLength != t.byteLength ||
                                e.byteOffset != t.byteOffset
                              )
                                return !1;
                              (e = e.buffer), (t = t.buffer);
                            case _:
                              return !(
                                e.byteLength != t.byteLength ||
                                !s(new Y(e), new Y(t))
                              );
                            case a:
                            case c:
                            case p:
                              return Le(+e, +t);
                            case u:
                              return e.name == t.name && e.message == t.message;
                            case g:
                            case y:
                              return e == t + "";
                            case l:
                              var h = D;
                            case v:
                              var d = 1 & r;
                              if ((h || (h = L), e.size != t.size && !d))
                                return !1;
                              var f = o.get(e);
                              if (f) return f == t;
                              (r |= 2), o.set(e, t);
                              var w = Ne(h(e), h(t), r, i, s, o);
                              return o.delete(e), w;
                            case m:
                              if (ge) return ge.call(e) == ge.call(t);
                          }
                          return !1;
                        })(e, t, E, n, r, i, h)
                  );
                if (!(1 & n)) {
                  var R = S && B.call(e, "__wrapped__"),
                    N = P && B.call(t, "__wrapped__");
                  if (R || N) {
                    var T = R ? e.value() : e,
                      A = N ? t.value() : t;
                    return h || (h = new _e()), i(T, A, n, r, h);
                  }
                }
                if (!O) return !1;
                return (
                  h || (h = new _e()),
                  (function (e, t, n, r, i, s) {
                    var o = 1 & n,
                      a = Te(e),
                      c = a.length,
                      u = Te(t).length;
                    if (c != u && !o) return !1;
                    var h = c;
                    for (; h--; ) {
                      var l = a[h];
                      if (!(o ? l in t : B.call(t, l))) return !1;
                    }
                    var p = s.get(e);
                    if (p && s.get(t)) return p == t;
                    var d = !0;
                    s.set(e, t), s.set(t, e);
                    var f = o;
                    for (; ++h < c; ) {
                      var g = e[(l = a[h])],
                        v = t[l];
                      if (r)
                        var y = o ? r(v, g, l, t, e, s) : r(g, v, l, e, t, s);
                      if (!(void 0 === y ? g === v || i(g, v, n, r, s) : y)) {
                        d = !1;
                        break;
                      }
                      f || (f = "constructor" == l);
                    }
                    if (d && !f) {
                      var m = e.constructor,
                        w = t.constructor;
                      m == w ||
                        !("constructor" in e) ||
                        !("constructor" in t) ||
                        ("function" == typeof m &&
                          m instanceof m &&
                          "function" == typeof w &&
                          w instanceof w) ||
                        (d = !1);
                    }
                    return s.delete(e), s.delete(t), d;
                  })(e, t, n, r, i, h)
                );
              })(e, t, n, r, Pe, i))
        );
      }
      function Oe(e) {
        return (
          !(
            !Ve(e) ||
            (function (e) {
              return !!W && W in e;
            })(e)
          ) && (ze(e) ? G : E).test(De(e))
        );
      }
      function Re(e) {
        if (
          !(function (e) {
            var t = e && e.constructor,
              n = ("function" == typeof t && t.prototype) || H;
            return e === n;
          })(e)
        )
          return ne(e);
        var t = [];
        for (var n in Object(e))
          B.call(e, n) && "constructor" != n && t.push(n);
        return t;
      }
      function Ne(e, t, n, r, i, s) {
        var o = 1 & n,
          a = e.length,
          c = t.length;
        if (a != c && !(o && c > a)) return !1;
        var u = s.get(e);
        if (u && s.get(t)) return u == t;
        var h = -1,
          l = !0,
          p = 2 & n ? new we() : void 0;
        for (s.set(e, t), s.set(t, e); ++h < a; ) {
          var d = e[h],
            f = t[h];
          if (r) var g = o ? r(f, d, h, t, e, s) : r(d, f, h, e, t, s);
          if (void 0 !== g) {
            if (g) continue;
            l = !1;
            break;
          }
          if (p) {
            if (
              !j(t, function (e, t) {
                if (((o = t), !p.has(o) && (d === e || i(d, e, n, r, s))))
                  return p.push(t);
                var o;
              })
            ) {
              l = !1;
              break;
            }
          } else if (d !== f && !i(d, f, n, r, s)) {
            l = !1;
            break;
          }
        }
        return s.delete(e), s.delete(t), l;
      }
      function Te(e) {
        return (function (e, t, n) {
          var r = t(e);
          return qe(e)
            ? r
            : (function (e, t) {
                for (var n = -1, r = t.length, i = e.length; ++n < r; )
                  e[i + n] = t[n];
                return e;
              })(r, n(e));
        })(e, We, xe);
      }
      function Ae(e, t) {
        var n = e.__data__;
        return (function (e) {
          var t = typeof e;
          return "string" == t ||
            "number" == t ||
            "symbol" == t ||
            "boolean" == t
            ? "__proto__" !== e
            : null === e;
        })(t)
          ? n["string" == typeof t ? "string" : "hash"]
          : n.map;
      }
      function Ce(e, t) {
        var n = (function (e, t) {
          return null == e ? void 0 : e[t];
        })(e, t);
        return Oe(n) ? n : void 0;
      }
      (ve.prototype.clear = function () {
        (this.__data__ = ce ? ce(null) : {}), (this.size = 0);
      }),
        (ve.prototype.delete = function (e) {
          var t = this.has(e) && delete this.__data__[e];
          return (this.size -= t ? 1 : 0), t;
        }),
        (ve.prototype.get = function (e) {
          var t = this.__data__;
          if (ce) {
            var n = t[e];
            return n === r ? void 0 : n;
          }
          return B.call(t, e) ? t[e] : void 0;
        }),
        (ve.prototype.has = function (e) {
          var t = this.__data__;
          return ce ? void 0 !== t[e] : B.call(t, e);
        }),
        (ve.prototype.set = function (e, t) {
          var n = this.__data__;
          return (
            (this.size += this.has(e) ? 0 : 1),
            (n[e] = ce && void 0 === t ? r : t),
            this
          );
        }),
        (ye.prototype.clear = function () {
          (this.__data__ = []), (this.size = 0);
        }),
        (ye.prototype.delete = function (e) {
          var t = this.__data__,
            n = Ee(t, e);
          return (
            !(n < 0) &&
            (n == t.length - 1 ? t.pop() : Z.call(t, n, 1), --this.size, !0)
          );
        }),
        (ye.prototype.get = function (e) {
          var t = this.__data__,
            n = Ee(t, e);
          return n < 0 ? void 0 : t[n][1];
        }),
        (ye.prototype.has = function (e) {
          return Ee(this.__data__, e) > -1;
        }),
        (ye.prototype.set = function (e, t) {
          var n = this.__data__,
            r = Ee(n, e);
          return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
        }),
        (me.prototype.clear = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new ve(),
              map: new (ie || ye)(),
              string: new ve(),
            });
        }),
        (me.prototype.delete = function (e) {
          var t = Ae(this, e).delete(e);
          return (this.size -= t ? 1 : 0), t;
        }),
        (me.prototype.get = function (e) {
          return Ae(this, e).get(e);
        }),
        (me.prototype.has = function (e) {
          return Ae(this, e).has(e);
        }),
        (me.prototype.set = function (e, t) {
          var n = Ae(this, e),
            r = n.size;
          return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
        }),
        (we.prototype.add = we.prototype.push =
          function (e) {
            return this.__data__.set(e, r), this;
          }),
        (we.prototype.has = function (e) {
          return this.__data__.has(e);
        }),
        (_e.prototype.clear = function () {
          (this.__data__ = new ye()), (this.size = 0);
        }),
        (_e.prototype.delete = function (e) {
          var t = this.__data__,
            n = t.delete(e);
          return (this.size = t.size), n;
        }),
        (_e.prototype.get = function (e) {
          return this.__data__.get(e);
        }),
        (_e.prototype.has = function (e) {
          return this.__data__.has(e);
        }),
        (_e.prototype.set = function (e, t) {
          var n = this.__data__;
          if (n instanceof ye) {
            var r = n.__data__;
            if (!ie || r.length < 199)
              return r.push([e, t]), (this.size = ++n.size), this;
            n = this.__data__ = new me(r);
          }
          return n.set(e, t), (this.size = n.size), this;
        });
      var xe = ee
          ? function (e) {
              return null == e
                ? []
                : ((e = Object(e)),
                  (function (e, t) {
                    for (
                      var n = -1, r = null == e ? 0 : e.length, i = 0, s = [];
                      ++n < r;

                    ) {
                      var o = e[n];
                      t(o, n, e) && (s[i++] = o);
                    }
                    return s;
                  })(ee(e), function (t) {
                    return $.call(e, t);
                  }));
            }
          : function () {
              return [];
            },
        Ue = Ie;
      function je(e, t) {
        return (
          !!(t = null == t ? i : t) &&
          ("number" == typeof e || I.test(e)) &&
          e > -1 &&
          e % 1 == 0 &&
          e < t
        );
      }
      function De(e) {
        if (null != e) {
          try {
            return K.call(e);
          } catch (t) {}
          try {
            return e + "";
          } catch (t) {}
        }
        return "";
      }
      function Le(e, t) {
        return e === t || (e !== e && t !== t);
      }
      ((re && Ue(new re(new ArrayBuffer(1))) != b) ||
        (ie && Ue(new ie()) != l) ||
        (se && Ue(se.resolve()) != f) ||
        (oe && Ue(new oe()) != v) ||
        (ae && Ue(new ae()) != w)) &&
        (Ue = function (e) {
          var t = Ie(e),
            n = t == d ? e.constructor : void 0,
            r = n ? De(n) : "";
          if (r)
            switch (r) {
              case ue:
                return b;
              case he:
                return l;
              case le:
                return f;
              case pe:
                return v;
              case de:
                return w;
            }
          return t;
        });
      var Me = Se(
          (function () {
            return arguments;
          })()
        )
          ? Se
          : function (e) {
              return Ke(e) && B.call(e, "callee") && !$.call(e, "callee");
            },
        qe = Array.isArray;
      var ke =
        te ||
        function () {
          return !1;
        };
      function ze(e) {
        if (!Ve(e)) return !1;
        var t = Ie(e);
        return (
          t == h ||
          "[object GeneratorFunction]" == t ||
          "[object AsyncFunction]" == t ||
          "[object Proxy]" == t
        );
      }
      function He(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= i;
      }
      function Ve(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      }
      function Ke(e) {
        return null != e && "object" == typeof e;
      }
      var Be = U
        ? (function (e) {
            return function (t) {
              return e(t);
            };
          })(U)
        : function (e) {
            return Ke(e) && He(e.length) && !!S[Ie(e)];
          };
      function We(e) {
        return null != (t = e) && He(t.length) && !ze(t) ? be(e) : Re(e);
        var t;
      }
      e.exports = function (e, t) {
        return Pe(e, t);
      };
    },
    75960: (e) => {
      "use strict";
      function t(e) {
        try {
          return JSON.stringify(e);
        } catch (t) {
          return '"[Circular]"';
        }
      }
      e.exports = function (e, n, r) {
        var i = (r && r.stringify) || t;
        if ("object" === typeof e && null !== e) {
          var s = n.length + 1;
          if (1 === s) return e;
          var o = new Array(s);
          o[0] = i(e);
          for (var a = 1; a < s; a++) o[a] = i(n[a]);
          return o.join(" ");
        }
        if ("string" !== typeof e) return e;
        var c = n.length;
        if (0 === c) return e;
        for (
          var u = "", h = 0, l = -1, p = (e && e.length) || 0, d = 0;
          d < p;

        ) {
          if (37 === e.charCodeAt(d) && d + 1 < p) {
            switch (((l = l > -1 ? l : 0), e.charCodeAt(d + 1))) {
              case 100:
              case 102:
                if (h >= c) break;
                if (null == n[h]) break;
                l < d && (u += e.slice(l, d)),
                  (u += Number(n[h])),
                  (l = d + 2),
                  d++;
                break;
              case 105:
                if (h >= c) break;
                if (null == n[h]) break;
                l < d && (u += e.slice(l, d)),
                  (u += Math.floor(Number(n[h]))),
                  (l = d + 2),
                  d++;
                break;
              case 79:
              case 111:
              case 106:
                if (h >= c) break;
                if (void 0 === n[h]) break;
                l < d && (u += e.slice(l, d));
                var f = typeof n[h];
                if ("string" === f) {
                  (u += "'" + n[h] + "'"), (l = d + 2), d++;
                  break;
                }
                if ("function" === f) {
                  (u += n[h].name || "<anonymous>"), (l = d + 2), d++;
                  break;
                }
                (u += i(n[h])), (l = d + 2), d++;
                break;
              case 115:
                if (h >= c) break;
                l < d && (u += e.slice(l, d)),
                  (u += String(n[h])),
                  (l = d + 2),
                  d++;
                break;
              case 37:
                l < d && (u += e.slice(l, d)),
                  (u += "%"),
                  (l = d + 2),
                  d++,
                  h--;
            }
            ++h;
          }
          ++d;
        }
        if (-1 === l) return e;
        l < p && (u += e.slice(l));
        return u;
      };
    },
    78720: (e) => {
      "use strict";
      e.exports = function () {
        throw new Error(
          "ws does not work in the browser. Browser clients must use the native WebSocket object"
        );
      };
    },
    53243: (e, t, n) => {
      "use strict";
      const r = n(75960);
      e.exports = o;
      const i =
          (function () {
            function e(e) {
              return "undefined" !== typeof e && e;
            }
            try {
              return (
                "undefined" !== typeof globalThis ||
                  Object.defineProperty(Object.prototype, "globalThis", {
                    get: function () {
                      return (
                        delete Object.prototype.globalThis,
                        (this.globalThis = this)
                      );
                    },
                    configurable: !0,
                  }),
                globalThis
              );
            } catch (t) {
              return e(self) || e(window) || e(this) || {};
            }
          })().console || {},
        s = {
          mapHttpRequest: f,
          mapHttpResponse: f,
          wrapRequestSerializer: g,
          wrapResponseSerializer: g,
          wrapErrorSerializer: g,
          req: f,
          res: f,
          err: function (e) {
            const t = {
              type: e.constructor.name,
              msg: e.message,
              stack: e.stack,
            };
            for (const n in e) void 0 === t[n] && (t[n] = e[n]);
            return t;
          },
        };
      function o(e) {
        (e = e || {}).browser = e.browser || {};
        const t = e.browser.transmit;
        if (t && "function" !== typeof t.send)
          throw Error("pino: transmit option must have a send function");
        const n = e.browser.write || i;
        e.browser.write && (e.browser.asObject = !0);
        const r = e.serializers || {},
          s = (function (e, t) {
            if (Array.isArray(e))
              return e.filter(function (e) {
                return "!stdSerializers.err" !== e;
              });
            return !0 === e && Object.keys(t);
          })(e.browser.serialize, r);
        let c = e.browser.serialize;
        Array.isArray(e.browser.serialize) &&
          e.browser.serialize.indexOf("!stdSerializers.err") > -1 &&
          (c = !1);
        "function" === typeof n &&
          (n.error = n.fatal = n.warn = n.info = n.debug = n.trace = n),
          !1 === e.enabled && (e.level = "silent");
        const l = e.level || "info",
          f = Object.create(n);
        f.log || (f.log = v),
          Object.defineProperty(f, "levelVal", {
            get: function () {
              return "silent" === this.level
                ? 1 / 0
                : this.levels.values[this.level];
            },
          }),
          Object.defineProperty(f, "level", {
            get: function () {
              return this._level;
            },
            set: function (e) {
              if ("silent" !== e && !this.levels.values[e])
                throw Error("unknown level " + e);
              (this._level = e),
                a(g, f, "error", "log"),
                a(g, f, "fatal", "error"),
                a(g, f, "warn", "error"),
                a(g, f, "info", "log"),
                a(g, f, "debug", "log"),
                a(g, f, "trace", "log");
            },
          });
        const g = {
          transmit: t,
          serialize: s,
          asObject: e.browser.asObject,
          levels: ["error", "fatal", "warn", "info", "debug", "trace"],
          timestamp: d(e),
        };
        return (
          (f.levels = o.levels),
          (f.level = l),
          (f.setMaxListeners =
            f.getMaxListeners =
            f.emit =
            f.addListener =
            f.on =
            f.prependListener =
            f.once =
            f.prependOnceListener =
            f.removeListener =
            f.removeAllListeners =
            f.listeners =
            f.listenerCount =
            f.eventNames =
            f.write =
            f.flush =
              v),
          (f.serializers = r),
          (f._serialize = s),
          (f._stdErrSerialize = c),
          (f.child = function (n, i) {
            if (!n) throw new Error("missing bindings for child Pino");
            (i = i || {}),
              s && n.serializers && (i.serializers = n.serializers);
            const o = i.serializers;
            if (s && o) {
              var a = Object.assign({}, r, o),
                c = !0 === e.browser.serialize ? Object.keys(a) : s;
              delete n.serializers, u([n], c, a, this._stdErrSerialize);
            }
            function l(e) {
              (this._childLevel = 1 + (0 | e._childLevel)),
                (this.error = h(e, n, "error")),
                (this.fatal = h(e, n, "fatal")),
                (this.warn = h(e, n, "warn")),
                (this.info = h(e, n, "info")),
                (this.debug = h(e, n, "debug")),
                (this.trace = h(e, n, "trace")),
                a && ((this.serializers = a), (this._serialize = c)),
                t && (this._logEvent = p([].concat(e._logEvent.bindings, n)));
            }
            return (l.prototype = this), new l(this);
          }),
          t && (f._logEvent = p()),
          f
        );
      }
      function a(e, t, n, r) {
        const s = Object.getPrototypeOf(t);
        (t[n] =
          t.levelVal > t.levels.values[n]
            ? v
            : s[n]
            ? s[n]
            : i[n] || i[r] || v),
          (function (e, t, n) {
            if (!e.transmit && t[n] === v) return;
            t[n] =
              ((r = t[n]),
              function () {
                const s = e.timestamp(),
                  a = new Array(arguments.length),
                  h =
                    Object.getPrototypeOf && Object.getPrototypeOf(this) === i
                      ? i
                      : this;
                for (var p = 0; p < a.length; p++) a[p] = arguments[p];
                if (
                  (e.serialize &&
                    !e.asObject &&
                    u(
                      a,
                      this._serialize,
                      this.serializers,
                      this._stdErrSerialize
                    ),
                  e.asObject ? r.call(h, c(this, n, a, s)) : r.apply(h, a),
                  e.transmit)
                ) {
                  const r = e.transmit.level || t.level,
                    i = o.levels.values[r],
                    c = o.levels.values[n];
                  if (c < i) return;
                  l(
                    this,
                    {
                      ts: s,
                      methodLevel: n,
                      methodValue: c,
                      transmitLevel: r,
                      transmitValue:
                        o.levels.values[e.transmit.level || t.level],
                      send: e.transmit.send,
                      val: t.levelVal,
                    },
                    a
                  );
                }
              });
            var r;
          })(e, t, n);
      }
      function c(e, t, n, i) {
        e._serialize && u(n, e._serialize, e.serializers, e._stdErrSerialize);
        const s = n.slice();
        let a = s[0];
        const c = {};
        i && (c.time = i), (c.level = o.levels.values[t]);
        let h = 1 + (0 | e._childLevel);
        if ((h < 1 && (h = 1), null !== a && "object" === typeof a)) {
          for (; h-- && "object" === typeof s[0]; ) Object.assign(c, s.shift());
          a = s.length ? r(s.shift(), s) : void 0;
        } else "string" === typeof a && (a = r(s.shift(), s));
        return void 0 !== a && (c.msg = a), c;
      }
      function u(e, t, n, r) {
        for (const i in e)
          if (r && e[i] instanceof Error) e[i] = o.stdSerializers.err(e[i]);
          else if ("object" === typeof e[i] && !Array.isArray(e[i]))
            for (const r in e[i])
              t && t.indexOf(r) > -1 && r in n && (e[i][r] = n[r](e[i][r]));
      }
      function h(e, t, n) {
        return function () {
          const r = new Array(1 + arguments.length);
          r[0] = t;
          for (var i = 1; i < r.length; i++) r[i] = arguments[i - 1];
          return e[n].apply(this, r);
        };
      }
      function l(e, t, n) {
        const r = t.send,
          i = t.ts,
          s = t.methodLevel,
          o = t.methodValue,
          a = t.val,
          c = e._logEvent.bindings;
        u(
          n,
          e._serialize || Object.keys(e.serializers),
          e.serializers,
          void 0 === e._stdErrSerialize || e._stdErrSerialize
        ),
          (e._logEvent.ts = i),
          (e._logEvent.messages = n.filter(function (e) {
            return -1 === c.indexOf(e);
          })),
          (e._logEvent.level.label = s),
          (e._logEvent.level.value = o),
          r(s, e._logEvent, a),
          (e._logEvent = p(c));
      }
      function p(e) {
        return {
          ts: 0,
          messages: [],
          bindings: e || [],
          level: { label: "", value: 0 },
        };
      }
      function d(e) {
        return "function" === typeof e.timestamp
          ? e.timestamp
          : !1 === e.timestamp
          ? y
          : m;
      }
      function f() {
        return {};
      }
      function g(e) {
        return e;
      }
      function v() {}
      function y() {
        return !1;
      }
      function m() {
        return Date.now();
      }
      (o.levels = {
        values: {
          fatal: 60,
          error: 50,
          warn: 40,
          info: 30,
          debug: 20,
          trace: 10,
        },
        labels: {
          10: "trace",
          20: "debug",
          30: "info",
          40: "warn",
          50: "error",
          60: "fatal",
        },
      }),
        (o.stdSerializers = s),
        (o.stdTimeFunctions = Object.assign(
          {},
          {
            nullTime: y,
            epochTime: m,
            unixTime: function () {
              return Math.round(Date.now() / 1e3);
            },
            isoTime: function () {
              return new Date(Date.now()).toISOString();
            },
          }
        ));
    },
  },
]);
