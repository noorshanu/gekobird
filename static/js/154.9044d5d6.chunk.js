"use strict";
(self.webpackChunkmy_app = self.webpackChunkmy_app || []).push([
  [154],
  {
    39247: (e, n, t) => {
      t.d(n, { Z: () => i });
      t(47313);
      const i =
        t.p + "static/media/iconFire.4f0a457341c5d94b3fb927faea883243.svg";
    },
    94367: (e, n, t) => {
      t.d(n, { MZ: () => l, _c: () => r, wi: () => o });
      var i = t(40056),
        s = t(98457);
      function l(e) {
        let n =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "allChain";
        return (0, i.useQuery)(
          ["useGetSearchResult", e, n],
          () => (0, s.s)(e, n),
          { enabled: !(null === e || void 0 === e || !e.trim()) }
        );
      }
      function r(e, n) {
        return (0, i.useQuery)(
          ["useNativePerformanceChart", e, n],
          () => (0, s.Yg)(e, n),
          { enabled: !!e || !!n }
        );
      }
      function o(e, n, t, l) {
        return (0, i.useQuery)(["useGetLaunchPad", e, n, t, l], () =>
          (0, s.f7)(e, n, t, l)
        );
      }
    },
    70154: (e, n, t) => {
      t.r(n), t.d(n, { default: () => Ne });
      var i = t(68197),
        s = t(59624),
        l = t(58467),
        r = t(65964),
        o = t(84358),
        a = t(47313),
        c = t(2135),
        d = t(39180),
        h = t(56880),
        x = t(82977),
        u = t(78588),
        j = t(68530),
        p = t(46417);
      const v = {
          limit: 10,
          offset: 0,
          sortBy: "v24hUSD",
          sortType: "desc",
          page: "home",
        },
        m = (e) => {
          var n;
          let { chain: t } = e;
          const [i, s] = (0, a.useState)(v),
            [l, r] = (0, a.useState)("v24hUSD"),
            { userInfo: m } = (0, a.useContext)(x.Il),
            { data: g, isFetching: f } = (0, h.QI)(
              {
                ...i,
                userToken: null === m || void 0 === m ? void 0 : m.token,
              },
              !0,
              t
            );
          return (0, p.jsxs)(o.Od, {
            children: [
              (0, p.jsxs)(o.c$, {
                children: [
                  (0, p.jsx)(o.us, { children: "Find Gems" }),
                  (0, p.jsx)(c.rU, {
                    to: "/find-gems?chain=".concat(t),
                    onClick: () => {
                      var e, n;
                      null === (e = window) ||
                        void 0 === e ||
                        null === (n = e.mixpanel) ||
                        void 0 === n ||
                        n.track(
                          null === j.v3 || void 0 === j.v3
                            ? void 0
                            : j.v3.HOMEPAGE_FIND_GEMS_CLICK_FIND_MORE
                        );
                    },
                    children: "Find more",
                  }),
                ],
              }),
              (0, p.jsx)(o.Pv, {
                children: (0, p.jsxs)(d.ZP.Group, {
                  onChange: (e) => {
                    if (e.target.value) {
                      var n, t, l;
                      null === (n = window) ||
                        void 0 === n ||
                        null === (t = n.mixpanel) ||
                        void 0 === t ||
                        null === (l = t.track) ||
                        void 0 === l ||
                        l.call(t, j.v3.HOMEPAGE_FIND_GEMS_SELECT_FILTER);
                      const u = e.target.value;
                      if ((r(u), "top_loser" === u))
                        s({
                          ...i,
                          sortBy: "priceChange24hPercent",
                          sortType: "asc",
                        });
                      else {
                        var o, a, c, d, h, x;
                        if ("v24hUSD" === e.target.value)
                          null === (o = window) ||
                            void 0 === o ||
                            null === (a = o.mixpanel) ||
                            void 0 === a ||
                            null === (c = a.track) ||
                            void 0 === c ||
                            c.call(
                              a,
                              j.v3.HOMEPAGE_FIND_GEMS_SELECT_HIGHEST_24H_VOLUME
                            );
                        if ("priceChange24hPercent" === e.target.value)
                          null === (d = window) ||
                            void 0 === d ||
                            null === (h = d.mixpanel) ||
                            void 0 === h ||
                            null === (x = h.track) ||
                            void 0 === x ||
                            x.call(
                              h,
                              j.v3.HOMEPAGE_FIND_GEMS_SELECT_TOP_GAINERS
                            );
                        s({ ...i, sortBy: u, sortType: "desc" });
                      }
                    }
                  },
                  value: l,
                  style: { display: "flex", gap: 10, flexWrap: "wrap" },
                  children: [
                    (0, p.jsx)(d.ZP, {
                      value: "v24hUSD",
                      children: "Highest 24h Volume",
                    }),
                    (0, p.jsx)(d.ZP, {
                      value: "priceChange24hPercent",
                      children: "Top gainers",
                    }),
                  ],
                }),
              }),
              (0, p.jsx)(o.o8, {
                className: "bordered",
                dataSource:
                  (null === g ||
                  void 0 === g ||
                  null === (n = g.data) ||
                  void 0 === n
                    ? void 0
                    : n.items) || [],
                loading: f,
                columns: u.U4,
                pagination: !1,
                scroll: { x: "100%" },
              }),
            ],
          });
        },
        g = (e) => {
          var n, t, i;
          let { chain: s } = e;
          const l = (0, a.useMemo)(() => ("allChain" === s ? j.Iw : s), [s]),
            [r, x] = (0, a.useState)(1e4),
            { data: v, isFetching: m } = (0, h.RG)(r, s);
          return (0, p.jsxs)(o.Od, {
            children: [
              (0, p.jsxs)(o.c$, {
                children: [
                  (0, p.jsx)(o.us, { children: "Large Trades" }),
                  (0, p.jsx)(c.rU, {
                    to: "/find-trades/"
                      .concat(
                        null === (n = j.EO[l]) ||
                          void 0 === n ||
                          null === (t = n.wrapNative) ||
                          void 0 === t
                          ? void 0
                          : t.address,
                        "?chain="
                      )
                      .concat(l),
                    onClick: () => {
                      var e, n, t;
                      null === (e = window) ||
                        void 0 === e ||
                        null === (n = e.mixpanel) ||
                        void 0 === n ||
                        null === (t = n.track) ||
                        void 0 === t ||
                        t.call(n, j.v3.HOMEPAGE_LARGE_TRADES_CLICK_FIND_MORE);
                    },
                    children: "Find more",
                  }),
                ],
              }),
              (0, p.jsx)(o.Pv, {
                children: (0, p.jsxs)(d.ZP.Group, {
                  onChange: (e) => {
                    if (e.target.value) {
                      var n, t, i, s, l, r, o, a, c, d, h, u, p, v, m;
                      if (
                        (null === (n = window) ||
                          void 0 === n ||
                          null === (t = n.mixpanel) ||
                          void 0 === t ||
                          null === (i = t.track) ||
                          void 0 === i ||
                          i.call(
                            t,
                            null === j.v3 || void 0 === j.v3
                              ? void 0
                              : j.v3.HOMEPAGE_LARGE_TRADES_SELECT_FILTER
                          ),
                        1e4 === e.target.value)
                      )
                        null === (s = window) ||
                          void 0 === s ||
                          null === (l = s.mixpanel) ||
                          void 0 === l ||
                          null === (r = l.track) ||
                          void 0 === r ||
                          r.call(
                            l,
                            null === j.v3 || void 0 === j.v3
                              ? void 0
                              : j.v3.HOMEPAGE_LARGE_TRADES_SELECT_MIN_10K
                          );
                      if (5e4 === e.target.value)
                        null === (o = window) ||
                          void 0 === o ||
                          null === (a = o.mixpanel) ||
                          void 0 === a ||
                          null === (c = a.track) ||
                          void 0 === c ||
                          c.call(
                            a,
                            null === j.v3 || void 0 === j.v3
                              ? void 0
                              : j.v3.HOMEPAGE_LARGE_TRADES_SELECT_MIN_50K
                          );
                      if (1e5 === e.target.value)
                        null === (d = window) ||
                          void 0 === d ||
                          null === (h = d.mixpanel) ||
                          void 0 === h ||
                          null === (u = h.track) ||
                          void 0 === u ||
                          u.call(
                            h,
                            null === j.v3 || void 0 === j.v3
                              ? void 0
                              : j.v3.HOMEPAGE_LARGE_TRADES_SELECT_MIN_100K
                          );
                      if (1e6 === e.target.value)
                        null === (p = window) ||
                          void 0 === p ||
                          null === (v = p.mixpanel) ||
                          void 0 === v ||
                          null === (m = v.track) ||
                          void 0 === m ||
                          m.call(
                            v,
                            null === j.v3 || void 0 === j.v3
                              ? void 0
                              : j.v3.HOMEPAGE_LARGE_TRADES_SELECT_MIN_1M
                          );
                      x(e.target.value);
                    }
                  },
                  value: r,
                  style: { display: "flex", gap: 10, flexWrap: "wrap" },
                  children: [
                    (0, p.jsx)(d.ZP, { value: 1e4, children: "> $10k" }),
                    (0, p.jsx)(d.ZP, { value: 5e4, children: "> $50k" }),
                    (0, p.jsx)(d.ZP, { value: 1e5, children: "> $100k" }),
                    (0, p.jsx)(d.ZP, { value: 1e6, children: "> $1M" }),
                  ],
                }),
              }),
              (0, p.jsx)(o.o8, {
                className: "bordered",
                dataSource:
                  (null === v ||
                  void 0 === v ||
                  null === (i = v.data) ||
                  void 0 === i
                    ? void 0
                    : i.items) || [],
                loading: m,
                columns: u.E0,
                pagination: !1,
                scroll: { x: "100%" },
              }),
            ],
          });
        };
      var f = t(19706),
        Z = t(45705),
        y = t(32357),
        E = t(39247),
        b = t(34713),
        w = t(98503),
        k = t(86716);
      const P = { gradient: !1, pauseOnHover: !0, speed: 40, delay: 5 },
        _ = (e) => {
          let { type: n, chain: t } = e;
          const [i] = (0, h.iP)(),
            [s, l] = (0, a.useState)(t),
            { userInfo: r } = (0, a.useContext)(x.Il),
            { data: d, isFetching: v } = (0, h.lQ)(
              null === r || void 0 === r ? void 0 : r.token,
              t
            ),
            m = (0, a.useMemo)(() => {
              if (d && d.data) {
                return d.data.map((e, n) => ({ ...e, rank: n + 1 }));
              }
              return [];
            }, [d]),
            [g, _] = (0, a.useState)(!1);
          return (
            (0, a.useEffect)(() => {
              l(t);
            }, [g]),
            "table" === n
              ? (0, p.jsxs)(o.uv, {
                  children: [
                    (0, p.jsxs)(o.u2, {
                      children: [
                        (0, p.jsxs)(o.hs, {
                          children: [
                            (0, p.jsx)(y.l0, {
                              url: E.Z,
                              size: 20,
                              isToken: !1,
                            }),
                            (0, p.jsx)("span", { children: "Trending tokens" }),
                          ],
                        }),
                        (0, p.jsx)(o.zw, {
                          type: "text",
                          onClick: () => {
                            var e, n;
                            null === (e = window) ||
                              void 0 === e ||
                              null === (n = e.mixpanel) ||
                              void 0 === n ||
                              n.track(
                                j.v3.HOMEPAGE_TRENDING_TOKENS_CLICK_VIEW_MORE
                              ),
                              _(!0);
                          },
                          children: "View more",
                        }),
                      ],
                    }),
                    (0, p.jsx)(o.o8, {
                      dataSource: m || [],
                      loading: v,
                      columns: u.uB,
                      pagination: !1,
                      scroll: i > 991 ? { y: 240 } : { y: 400 },
                    }),
                    (0, p.jsx)(w.Gk, {
                      title: (0, p.jsxs)(Z.Z, {
                        children: [
                          "Trending Tokens",
                          (0, p.jsx)(k.h5, {
                            chain: t,
                            setChain: l,
                            children: (0, p.jsx)(k.EO, { chain: s }),
                          }),
                        ],
                      }),
                      visible: g,
                      onOk: () => {
                        _(!1);
                      },
                      onCancel: () => {
                        _(!1);
                      },
                      footer: null,
                      width: 720,
                      style: { top: 0 },
                      children: (0, p.jsx)(b.Z, { chain: s }),
                    }),
                  ],
                })
              : (0, p.jsxs)(Z.Z, {
                  children: [
                    (0, p.jsxs)(Z.Z, {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        padding: "12px 16px",
                        backgroundColor: "#24211F",
                        fontWeight: "600",
                        height: "100%",
                      },
                      children: [
                        (0, p.jsx)(y.l0, { url: E.Z, size: 20, isToken: !1 }),
                        (0, p.jsx)("span", {
                          className: "sm-none text-light ellipsis",
                          children: "Trending",
                        }),
                      ],
                    }),
                    (0, p.jsx)(f.Z, {
                      ...P,
                      children:
                        m &&
                        m.length > 0 &&
                        m.map((e, n) =>
                          (0, p.jsxs)(
                            c.rU,
                            {
                              to: "/token/".concat(e.token),
                              style: { marginLeft: "25px" },
                              children: [
                                (0, p.jsxs)("span", {
                                  style: {
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: "5px",
                                    color: "#1890ff",
                                    cursor: "pointer",
                                    whiteSpace: "nowrap",
                                    marginRight: "5px",
                                  },
                                  children: [
                                    "#",
                                    e.rank,
                                    (0, p.jsx)(y.l0, {
                                      bd: !1,
                                      url: e.tokenData.icon,
                                      size: "15px",
                                    }),
                                    e.tokenData.symbol || "Unknown",
                                  ],
                                }),
                                (0, p.jsx)(y.w6, {
                                  value: e.priceChange24hPercent,
                                }),
                              ],
                            },
                            n
                          )
                        ),
                    }),
                  ],
                })
          );
        };
      const C =
          t.p + "static/media/icon-wallet.4035e9650ba069bc32f97b27ed807bd6.svg",
        O = (e) => {
          let { duration: n, chain: t } = e;
          const [i] = (0, h.iP)(),
            { data: s, isFetching: l } = (0, h.HR)("gainers", n, t),
            r = (0, a.useMemo)(() => {
              var e;
              if (
                null !== s &&
                void 0 !== s &&
                null !== (e = s.data) &&
                void 0 !== e &&
                e.items
              ) {
                return s.data.items.map((e, n) => ({ ...e, rank: n + 1 }));
              }
              return [];
            }, [s]);
          return (0, p.jsxs)(o.WP, {
            children: [
              (0, p.jsxs)(o.u2, {
                children: [
                  (0, p.jsxs)(o.hs, {
                    children: [
                      (0, p.jsx)(y.l0, { url: C, size: 20, isToken: !1 }),
                      (0, p.jsx)("span", { children: "Profitable traders" }),
                    ],
                  }),
                  (0, p.jsx)(c.rU, {
                    to: "/leaderboard/7D?chain=".concat(t),
                    style: { color: "#1990FF", fontWeight: "normal" },
                    type: "text",
                    children: "View more",
                  }),
                ],
              }),
              (0, p.jsx)(o.o8, {
                dataSource: r || [],
                loading: l,
                columns: u.BT,
                pagination: !1,
                scroll: i > 991 ? { y: 240 } : {},
              }),
            ],
          });
        };
      var N = t(46155);
      const R = () => {
        const [e] = (0, h.iP)();
        return (0, p.jsxs)(o.Od, {
          children: [
            (0, p.jsx)(o.c$, {
              children: (0, p.jsx)(o.us, {
                children: "Enrich your products with our data ",
              }),
            }),
            (0, p.jsxs)(i.Z, {
              gutter: [16, 16],
              children: [
                (0, p.jsx)(s.Z, {
                  span: 12,
                  lg: 6,
                  children: (0, p.jsx)(o.jj, {
                    color: "#24211F",
                    style: { height: "100%" },
                    children: (0, p.jsxs)(o.fG, {
                      children: [
                        (0, p.jsx)(y.qY, {
                          width: e < 992 ? 35 : 73,
                          height: e < 992 ? 35 : 72,
                        }),
                        (0, p.jsx)("span", { children: "APIs" }),
                      ],
                    }),
                  }),
                }),
                (0, p.jsx)(s.Z, {
                  span: 12,
                  lg: 6,
                  children: (0, p.jsx)(o.jj, {
                    color: "#24211F",
                    style: { height: "100%" },
                    children: (0, p.jsxs)(o.fG, {
                      children: [
                        (0, p.jsx)(y.pg, {
                          width: e < 992 ? 35 : 73,
                          height: e < 992 ? 35 : 72,
                        }),
                        (0, p.jsx)("span", { children: "Web socket" }),
                      ],
                    }),
                  }),
                }),
                (0, p.jsx)(s.Z, {
                  span: 12,
                  lg: 6,
                  children: (0, p.jsx)(o.jj, {
                    color: "#24211F",
                    style: { height: "100%" },
                    children: (0, p.jsxs)(o.fG, {
                      children: [
                        (0, p.jsx)(y.y9, {
                          width: e < 992 ? 35 : 73,
                          height: e < 992 ? 35 : 72,
                        }),
                        (0, p.jsx)("span", { children: "IFrame" }),
                      ],
                    }),
                  }),
                }),
                (0, p.jsx)(s.Z, {
                  span: 12,
                  lg: 6,
                  children: (0, p.jsx)(o.jj, {
                    color: "#24211F",
                    style: { height: "100%" },
                    children: (0, p.jsxs)(o.fG, {
                      children: [
                        (0, p.jsx)(y.Z8, {
                          width: e < 992 ? 35 : 73,
                          height: e < 992 ? 35 : 72,
                        }),
                        (0, p.jsx)("span", { children: "Price bots" }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
            (0, p.jsxs)(o.tZ, {
              children: [
                (0, p.jsx)(c.rU, {
                  to: "/pro#builders",
                  children: "Detail & Pricing",
                }),
                (0, p.jsx)(N.Z, { type: "vertical" }),
                (0, p.jsx)("a", {
                  href: "#",
                  target: "_blank",
                  rel: "noreferrer",
                  children: "Documentations",
                }),
              ],
            }),
          ],
        });
      };
      var T = t(98457);
      const I = { gradient: !1, pauseOnHover: !0, speed: 40, delay: 5 },
        M = () => {
          const [e, n] = (0, a.useState)([]);
          (0, a.useEffect)(() => {
            (async () => {
              try {
                const e = await (0, T.kW)();
                e && e.length > 0 && n(e);
              } catch (e) {
                console.log(e);
              }
            })();
          }, []);
          const t = (0, a.useMemo)(() => {
            const n = [];
            for (let t = 0; t < e.length; t += 2) {
              const i = [e[t], e[t + 1]].filter(Boolean);
              n.push(i);
            }
            return n;
          }, [e]);
          return (0, p.jsxs)(o.Od, {
            children: [
              (0, p.jsx)(o.c$, {
                children: (0, p.jsx)(o.us, { children: "Trusted by the best" }),
              }),
              (0, p.jsx)(i.Z, {
                gutter: [16, 16],
                children: (0, p.jsx)(f.Z, {
                  ...I,
                  children:
                    t &&
                    t.length > 0 &&
                    t.map((e, n) =>
                      (0, p.jsx)(
                        s.Z,
                        {
                          children: e.map((e) =>
                            (0, p.jsx)(
                              o.jj,
                              {
                                color: "#24211F",
                                style: { marginBottom: 16 },
                                children: (0, p.jsxs)(o.Zq, {
                                  href: e.url,
                                  target: "_blank",
                                  rel: "noreferrer",
                                  children: [
                                    (0, p.jsx)(y.l0, {
                                      url: e.logo,
                                      size: 28,
                                      isToken: !1,
                                    }),
                                    (0, p.jsx)("span", { children: e.name }),
                                  ],
                                }),
                              },
                              e.name
                            )
                          ),
                        },
                        n
                      )
                    ),
                }),
              }),
              (0, p.jsx)(o.tL, {
                children: (0, p.jsx)("a", {
                  href: "mailto:admin@birdeye.so",
                  children: "Get in touch",
                }),
              }),
            ],
          });
        };
      var S = t(3929);
      const D = () =>
          (0, p.jsxs)(o.Od, {
            style: { height: "100%" },
            children: [
              (0, p.jsx)(o.c$, {
                style: { marginBottom: "16px" },
                children: (0, p.jsxs)(Z.Z, {
                  style: { flexDirection: "column" },
                  children: [
                    (0, p.jsx)(o.us, { children: "Join our community" }),
                    "Visit our social channels",
                  ],
                }),
              }),
              (0, p.jsxs)(o.XA, {
                children: [
                  (0, p.jsx)(o.nE, {
                    children: (0, p.jsxs)("a", {
                      href: "https://twitter.com/",
                      rel: "noreferrer",
                      target: "_blank",
                      children: [
                        (0, p.jsx)(y.Zm, {}),
                        (0, p.jsx)("div", { children: "Twitter" }),
                      ],
                    }),
                  }),
                  (0, p.jsx)(o.nE, {
                    children: (0, p.jsxs)("a", {
                      href: "https://discord.gg/",
                      rel: "noreferrer",
                      target: "_blank",
                      children: [
                        (0, p.jsx)(y.D7, {}),
                        (0, p.jsx)("div", { children: "Discord" }),
                      ],
                    }),
                  }),
                  (0, p.jsx)(o.nE, {
                    children: (0, p.jsxs)("a", {
                      href: "https://t.me/",
                      rel: "noreferrer",
                      target: "_blank",
                      children: [
                        (0, p.jsx)(y.YG, {}),
                        (0, p.jsx)("div", { children: "Telegram" }),
                      ],
                    }),
                  }),
                  (0, p.jsx)(o.nE, {
                    children: (0, p.jsxs)("a", {
                      href: "https://medium.com/",
                      rel: "noreferrer",
                      target: "_blank",
                      children: [
                        (0, p.jsx)(S.Z, { style: { color: "#f6f6f6" } }),
                        (0, p.jsx)("div", { children: "Medium" }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, p.jsx)(o.jl, {
                children: (0, p.jsxs)(i.Z, {
                  gutter: 16,
                  children: [
                    (0, p.jsx)(s.Z, {
                      span: 12,
                      children: (0, p.jsx)(o.F_, {
                        children: (0, p.jsx)("a", {
                          href: "#",
                          rel: "noreferrer",
                          target: "_blank",
                          children: (0, p.jsxs)(y.sA, {
                            children: [
                              (0, p.jsx)(y.lY, {}),
                              (0, p.jsx)("span", {
                                children: "Documentations",
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    (0, p.jsx)(s.Z, {
                      span: 12,
                      children: (0, p.jsx)(o.F_, {
                        children: (0, p.jsx)(c.rU, {
                          to: "/privacy",
                          children: (0, p.jsxs)(y.sA, {
                            children: [
                              (0, p.jsx)(y.mB, {}),
                              (0, p.jsx)("span", {
                                children: "Privacy Policy",
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    (0, p.jsx)(s.Z, {
                      span: 12,
                      children: (0, p.jsx)(o.F_, {
                        children: (0, p.jsx)(c.rU, {
                          to: "/terms",
                          children: (0, p.jsxs)(y.sA, {
                            children: [
                              (0, p.jsx)(y.vJ, {}),
                              (0, p.jsx)("span", {
                                children: "Terms of Service",
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    (0, p.jsx)(s.Z, {
                      span: 12,
                      children: (0, p.jsx)(o.F_, {
                        children: (0, p.jsx)(c.rU, {
                          to: "/disclaimer",
                          children: (0, p.jsxs)(y.sA, {
                            children: [
                              (0, p.jsx)(y.fo, {}),
                              (0, p.jsx)("span", { children: "Disclaimer" }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        A = (e) => {
          let { chain: n } = e;
          const [t] = (0, h.iP)(),
            [i, s] = (0, a.useState)(""),
            l = (0, a.useMemo)(() => ("allChain" === n ? j.Iw : n), [n]);
          return (0, p.jsx)(o.rJ, {
            children: (0, p.jsxs)(o.cg, {
              children: [
                (0, p.jsxs)(o.t$, {
                  children: [
                    (0, p.jsx)(o.Ng, {
                      onMouseEnter: () => s("FIND_GEMS"),
                      onMouseLeave: () => s(""),
                      children: (0, p.jsxs)(c.rU, {
                        to: "/find-gems?chain=".concat(n),
                        children: [
                          (0, p.jsxs)(o.Qi, {
                            children: [
                              (0, p.jsx)(o.Em, {
                                ds:
                                  "FIND_GEMS" === i || t < 992
                                    ? "block"
                                    : "none",
                                children: (0, p.jsx)(y.iw, {}),
                              }),
                              (0, p.jsx)(o.hh, {
                                size: "32px",
                                isHovered: "FIND_GEMS" === i,
                                children: (0, p.jsx)(y.F, {}),
                              }),
                            ],
                          }),
                          (0, p.jsx)("span", { children: "FIND GEMS" }),
                        ],
                      }),
                    }),
                    (0, p.jsx)(o.Ng, {
                      onMouseEnter: () => s("LEADERBOARD"),
                      onMouseLeave: () => s(""),
                      children: (0, p.jsxs)(c.rU, {
                        to: "/leaderboard/7D?chain=".concat(n),
                        children: [
                          (0, p.jsxs)(o.Qi, {
                            children: [
                              (0, p.jsx)(o.Em, {
                                ds:
                                  "LEADERBOARD" === i || t < 992
                                    ? "block"
                                    : "none",
                                children: (0, p.jsx)(y.iw, {}),
                              }),
                              (0, p.jsx)(o.hh, {
                                size: "32px",
                                isHovered: "LEADERBOARD" === i,
                                children: (0, p.jsx)(y.Gx, {}),
                              }),
                            ],
                          }),
                          (0, p.jsx)("span", { children: "LEADERBOARD" }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, p.jsxs)(o.t$, {
                  children: [
                    (0, p.jsx)(o.Ng, {
                      onMouseEnter: () => s("FIND_TRADES"),
                      onMouseLeave: () => s(""),
                      children: (0, p.jsxs)(c.rU, {
                        to: "/find-trades?chain=".concat(l),
                        children: [
                          (0, p.jsxs)(o.Qi, {
                            children: [
                              (0, p.jsx)(o.Em, {
                                ds:
                                  "FIND_TRADES" === i || t < 992
                                    ? "block"
                                    : "none",
                                children: (0, p.jsx)(y.iw, {}),
                              }),
                              (0, p.jsx)(o.hh, {
                                size: "32px",
                                isHovered: "FIND_TRADES" === i,
                                children: (0, p.jsx)(y.uP, {}),
                              }),
                            ],
                          }),
                          (0, p.jsx)("span", { children: "FIND TRADES" }),
                        ],
                      }),
                    }),
                    (0, p.jsx)(o.Ng, {
                      onMouseEnter: () => s("NEW_PAIRS"),
                      onMouseLeave: () => s(""),
                      children: (0, p.jsxs)(c.rU, {
                        to: "/new-pairs?chain=".concat(n),
                        children: [
                          (0, p.jsxs)(o.Qi, {
                            children: [
                              (0, p.jsx)(o.Em, {
                                ds:
                                  "NEW_PAIRS" === i || t < 992
                                    ? "block"
                                    : "none",
                                children: (0, p.jsx)(y.iw, {}),
                              }),
                              (0, p.jsx)(o.hh, {
                                size: "32px",
                                isHovered: "NEW_PAIRS" === i,
                                children: (0, p.jsx)(y.BN, {}),
                              }),
                            ],
                          }),
                          (0, p.jsx)("span", { children: "NEW PAIRS" }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, p.jsxs)(o.t$, {
                  children: [
                    (0, p.jsx)(o.Ng, {
                      onMouseEnter: () => s("LIMIT_ORDER"),
                      onMouseLeave: () => s(""),
                      children: (0, p.jsxs)(c.rU, {
                        to: "/limit-order/".concat(
                          j.s.address,
                          "?chain=solana"
                        ),
                        children: [
                          (0, p.jsxs)(o.Qi, {
                            children: [
                              (0, p.jsx)(o.Em, {
                                ds:
                                  "LIMIT_ORDER" === i || t < 992
                                    ? "block"
                                    : "none",
                                children: (0, p.jsx)(y.iw, {}),
                              }),
                              (0, p.jsx)(o.hh, {
                                size: "32px",
                                isHovered: "LIMIT_ORDER" === i,
                                children: (0, p.jsx)(y.h7, {}),
                              }),
                            ],
                          }),
                          (0, p.jsx)("span", { children: "LIMIT ORDER" }),
                        ],
                      }),
                    }),
                    (0, p.jsx)(o.Ng, {
                      onMouseEnter: () => s("PRO_UPGRADE"),
                      onMouseLeave: () => s(""),
                      children: (0, p.jsxs)(c.rU, {
                        to: "/pro#traders",
                        children: [
                          (0, p.jsxs)(o.Qi, {
                            children: [
                              (0, p.jsx)(o.Em, {
                                ds:
                                  "PRO_UPGRADE" === i || t < 992
                                    ? "block"
                                    : "none",
                                children: (0, p.jsx)(y.iw, {}),
                              }),
                              (0, p.jsx)(o.hh, {
                                size: "32px",
                                isHovered: "PRO_UPGRADE" === i,
                                children: (0, p.jsx)(y.Z_, {}),
                              }),
                            ],
                          }),
                          (0, p.jsx)("span", { children: "PRO UPGRADE" }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      var L = t(75819),
        G = t(40737),
        F = t(61677);
      const U = (e) => {
          let { changeChain: n, chainList: t } = e;
          return (0, p.jsx)(p.Fragment, {
            children: t.map((e) =>
              (0, p.jsxs)(
                o.I4,
                {
                  onClick: () => n(e.network),
                  children: [
                    (0, p.jsx)(y.l0, { size: 25, url: e.logoURI }),
                    (0, p.jsx)("span", { children: e.name }),
                  ],
                },
                e.network
              )
            ),
          });
        },
        z = (e) => {
          let { chain: n, setChain: t, chainList: i } = e;
          const [s, l] = (0, a.useState)(!1),
            { visibilityChainList: r, hiddenChainList: c } = (0,
            a.useMemo)(() => {
              let e =
                null === i || void 0 === i
                  ? void 0
                  : i.filter((e) => {
                      var t;
                      return (
                        (null === e ||
                        void 0 === e ||
                        null === (t = e.network) ||
                        void 0 === t
                          ? void 0
                          : t.toLowerCase()) !=
                        (null === n || void 0 === n ? void 0 : n.toLowerCase())
                      );
                    });
              return (
                (e = [j.EO[n], ...e]),
                {
                  visibilityChainList: e.slice(0, 2),
                  hiddenChainList: e.slice(2),
                }
              );
            }, [n, i]);
          return (0, p.jsxs)(o.gd, {
            children: [
              null === r || void 0 === r
                ? void 0
                : r.map((e, i) =>
                    (0, p.jsx)(
                      o.ZK,
                      {
                        children: (0, p.jsxs)(o.Ov, {
                          className: n === e.network ? "active" : "",
                          type: "text",
                          onClick: () => t(e.network),
                          children: [
                            (0, p.jsx)(y.l0, { url: e.logoURI, isToken: !1 }),
                            e.name,
                          ],
                        }),
                      },
                      i
                    )
                  ),
              (0, p.jsx)(F.Z, {
                placement: "bottomRight",
                trigger: "click",
                open: s,
                content: (0, p.jsx)(U, {
                  changeChain: (e) => {
                    t(e), l(!1);
                  },
                  chainList: c,
                }),
                onOpenChange: (e) => {
                  l(e);
                },
                children: (0, p.jsx)(o.Ov, {
                  type: "text",
                  children: (0, p.jsxs)("span", {
                    children: ["Others ", (0, p.jsx)(G.Z, {})],
                  }),
                }),
              }),
            ],
          });
        },
        H = (e) => {
          let { chain: n, setChain: t, chainList: i } = e;
          const [s] = (0, h.iP)();
          return (0, p.jsx)(o.hv, {
            children:
              s < 992
                ? (0, p.jsx)(z, { chain: n, setChain: t, chainList: i })
                : (0, p.jsx)("div", {
                    className: "isDesktop",
                    children:
                      i &&
                      i.length > 0 &&
                      i.map((e, i) =>
                        (0, p.jsxs)(
                          o.ZK,
                          {
                            children: [
                              (0, p.jsxs)(o.mx, {
                                className: n === e.network ? "active" : "",
                                type: "text",
                                onClick: () => t(e.network),
                                children: [
                                  e.logoURI &&
                                    (0, p.jsx)(y.l0, {
                                      url: e.logoURI,
                                      isToken: !1,
                                    }),
                                  e.name,
                                ],
                              }),
                              (0, p.jsx)(N.Z, { type: "vertical" }),
                            ],
                          },
                          i
                        )
                      ),
                  }),
          });
        };
      const $ =
        t.p + "static/media/pie_icon.f8866330c145dd67d483903beebf9848.svg";
      var B,
        V,
        K,
        W,
        Q,
        Y,
        q,
        J,
        X,
        ee = t(61858),
        ne = t(49959),
        te = t(60222),
        ie = t(30168),
        se = t(44781),
        le = t(59491);
      const re = se.ZP.div(
          B ||
            (B = (0, ie.Z)([
              "\n  position: relative;\n  width: 100%;\n  height: 100%;\n  height: 240px;\n",
            ]))
        ),
        oe = se.ZP.div(V || (V = (0, ie.Z)(["\n  height: 240px;\n"]))),
        ae = se.ZP.div(
          K ||
            (K = (0, ie.Z)([
              "\n  width: 250px;\n  min-height: 60px;\n  border-radius: 5px;\n  padding: 8px;\n  color: #c0c0c0;\n  background-color: #1A1714;\n",
            ]))
        ),
        ce =
          (se.ZP.div(W || (W = (0, ie.Z)(["\n  text-align: center;\n"]))),
          se.ZP.span(Q || (Q = (0, ie.Z)(["\n  color: #878685;\n"])))),
        de = se.ZP.div(
          Y ||
            (Y = (0, ie.Z)([
              "\n  display: flex;\n  justify-content: center;\n  margin-bottom: 2px;\n",
            ]))
        ),
        he = se.ZP.span(
          q ||
            (q = (0, ie.Z)([
              "\n  position: relative;\n  text-align: center;\n  font-size: 16px;\n  font-weight: 700;\n",
            ]))
        ),
        xe = se.ZP.span(
          J ||
            (J = (0, ie.Z)([
              "\n  position: absolute;\n  top: -5px;\n  right: -15px;\n",
            ]))
        ),
        ue =
          ((0, se.ZP)(le.Z)(
            X || (X = (0, ie.Z)(["\n  border-radius: 4px;\n"]))
          ),
          (e) => {
            let { active: n, payload: t, chain: l } = e;
            if (n && t && t.length) {
              var r;
              const { payload: e } = t[0];
              return (0, p.jsxs)(ae, {
                children: [
                  (0, p.jsx)(de, {
                    children: (0, p.jsxs)(he, {
                      children: [
                        (null === e || void 0 === e ? void 0 : e.address) ===
                        j.s.address
                          ? j.s.symbol
                          : null !== e && void 0 !== e && e.symbol
                          ? e.symbol
                          : "Unknown",
                        "allChain" === l &&
                          (null === e || void 0 === e ? void 0 : e.network) &&
                          (0, p.jsx)(xe, {
                            children: (0, p.jsx)(y.l0, {
                              size: 15,
                              bd: !1,
                              url:
                                null ===
                                  (r =
                                    j.EO[
                                      null === e || void 0 === e
                                        ? void 0
                                        : e.network
                                    ]) || void 0 === r
                                  ? void 0
                                  : r.logoURI,
                            }),
                          }),
                      ],
                    }),
                  }),
                  !(null === e || void 0 === e || !e.price) &&
                    (0, p.jsxs)(i.Z, {
                      children: [
                        (0, p.jsx)(s.Z, {
                          span: 9,
                          children: (0, p.jsx)(ce, { children: "Price" }),
                        }),
                        (0, p.jsxs)(s.Z, {
                          span: 15,
                          style: {
                            display: "flex",
                            gap: "5px",
                            alignItems: "end",
                          },
                          children: [
                            (0, p.jsxs)("span", {
                              children: ["$", (0, te.uf)(e.price)],
                            }),
                            (0, p.jsx)(y.w6, {
                              value: e.priceChange24hPercent,
                            }),
                          ],
                        }),
                      ],
                    }),
                  !(null === e || void 0 === e || !e.liquidity) &&
                    (0, p.jsxs)(i.Z, {
                      children: [
                        (0, p.jsx)(s.Z, {
                          span: 9,
                          children: (0, p.jsx)(ce, { children: "TVL" }),
                        }),
                        (0, p.jsx)(s.Z, {
                          span: 15,
                          children: (0, p.jsxs)("span", {
                            children: ["$", (0, te.Hr)(e.liquidity)],
                          }),
                        }),
                      ],
                    }),
                  !(null === e || void 0 === e || !e.v24hUSD) &&
                    (0, p.jsxs)(i.Z, {
                      children: [
                        (0, p.jsx)(s.Z, {
                          span: 9,
                          children: (0, p.jsx)(ce, { children: "24h Volume" }),
                        }),
                        (0, p.jsx)(s.Z, {
                          span: 15,
                          children: (0, p.jsxs)("span", {
                            children: ["$", (0, te.Hr)(e.v24hUSD)],
                          }),
                        }),
                      ],
                    }),
                ],
              });
            }
            return null;
          }),
        je = (e) => {
          var n, t;
          let { chain: i, limit: s } = e;
          const { data: l } = (0, h.Oc)(
              { sortBy: "v24hUSD", sortType: "desc", offset: 0, limit: s },
              i
            ),
            r = (0, a.useMemo)(() => {
              var e, n;
              return null === l ||
                void 0 === l ||
                null === (e = l.data) ||
                void 0 === e ||
                null === (n = e.items) ||
                void 0 === n
                ? void 0
                : n.map(
                    (e, n) => (
                      (e.key = n + 1),
                      (e.size = e.v24hUSD),
                      "allChain" !== i && j.EO[i] && (e.network = i),
                      e
                    )
                  );
            }, [
              null === l ||
              void 0 === l ||
              null === (n = l.data) ||
              void 0 === n
                ? void 0
                : n.items,
            ]);
          return null !== l &&
            void 0 !== l &&
            null !== (t = l.data) &&
            void 0 !== t &&
            t.items
            ? (0, p.jsx)(oe, {
                children: (0, p.jsx)(y.WD, {
                  data: r,
                  customTooltip: (0, p.jsx)(ue, { chain: i }),
                  chain: i,
                }),
              })
            : (0, p.jsx)(re, {
                children: (0, p.jsx)(y.gb, { pos: "absolute" }),
              });
        };
      var pe = t(71978),
        ve = t(72257),
        me = t(37169),
        ge = t(26236),
        fe = t(75767),
        Ze = t(45163),
        ye = t(52885),
        Ee = t(67684),
        be = t(94367),
        we = t(40161);
      const ke = [
          { title: "7D", value: "7D" },
          { title: "1M", value: "1M" },
          { title: "2M", value: "2M" },
          { title: "3M", value: "3M" },
          { title: "6M", value: "6M" },
          { title: "1Y", value: "1Y" },
        ],
        Pe = (e) => {
          var n;
          const {
            x: t,
            y: i,
            value: s,
            data: l,
            lastIndex: r,
            index: o,
            color: a,
          } = e;
          return r !== o
            ? null
            : (0, p.jsxs)("g", {
                overflow: "hidden",
                children: [
                  (0, p.jsx)("rect", {
                    x: t - 9,
                    y: i - 9,
                    rx: "2",
                    ry: "2",
                    width: "100",
                    height: "18",
                    fill: a,
                  }),
                  (0, p.jsxs)("text", {
                    x: t - 6,
                    y: i + 4,
                    fill: "#0D0701",
                    fontSize: 12,
                    textAnchor: "left",
                    children: [
                      null === l ||
                      void 0 === l ||
                      null === (n = l.networkCurrency) ||
                      void 0 === n
                        ? void 0
                        : n.symbol,
                      ":",
                      ""
                        .concat(s > 0 ? "+" : s < 0 ? "-" : "")
                        .concat((0, te.uf)(Math.abs(s), 2)),
                      "%",
                    ],
                  }),
                ],
              });
        },
        _e = (e) => {
          let { active: n, payload: t } = e;
          if (n && (null === t || void 0 === t ? void 0 : t.length) > 0) {
            const e = t.sort((e, n) => n.value - e.value);
            return (0, p.jsxs)(o.hN, {
              children: [
                (0, p.jsx)(we.wr, {
                  style: { fontSize: 13, marginBottom: 5 },
                  children: (0, te.K6)(
                    t[0].payload.unixTime,
                    "MM/dd/yy HH:mm:ss"
                  ),
                }),
                e.map((e, n) =>
                  (0, p.jsx)(
                    "div",
                    {
                      children: (0, p.jsxs)(Z.Z, {
                        style: {
                          alignItems: "center",
                          justifyContent: "space-between",
                        },
                        children: [
                          (0, p.jsxs)("span", {
                            style: {
                              minWidth: "70px",
                              display: "block",
                              color: "".concat(e.stroke),
                            },
                            children: [
                              j.EO[
                                null === e || void 0 === e ? void 0 : e.dataKey
                              ].networkCurrency.symbol,
                              ":",
                            ],
                          }),
                          (0, p.jsx)(y.w6, { value: e.value, symbol: "%" }),
                        ],
                      }),
                    },
                    n
                  )
                ),
              ],
            });
          }
          return null;
        },
        Ce = (e) => {
          var n;
          let { chain: t } = e;
          const [i, s] = (0, a.useState)(ke[0].value),
            { data: l } = (0, be._c)(i, t),
            r = (0, a.useMemo)(
              () =>
                Object.values(j.EO).filter(
                  (e) =>
                    "allChain" !== e.network &&
                    "base" !== e.network &&
                    "zksync" !== e.network
                ),
              [t]
            );
          return (0, p.jsxs)(p.Fragment, {
            children: [
              (0, p.jsx)(o.vR, {
                children: ke.map((e, n) =>
                  (0, p.jsx)(
                    le.Z,
                    {
                      type: "text",
                      onClick: () => s(e.value),
                      className: i === e.value ? "active" : "",
                      children: e.title,
                    },
                    n
                  )
                ),
              }),
              (0, p.jsx)(pe.h, {
                height: 200,
                children: (0, p.jsxs)(ve.w, {
                  data:
                    (null === l ||
                    void 0 === l ||
                    null === (n = l.data) ||
                    void 0 === n
                      ? void 0
                      : n.items) || [],
                  margin: { top: 10, right: 3, left: -20, bottom: 5 },
                  children: [
                    (0, p.jsx)(me.q, {
                      strokeWidth: 0.5,
                      strokeDasharray: "7",
                      vertical: !1,
                    }),
                    (0, p.jsx)(ge.K, {
                      padding: { right: 95 },
                      tick: { fontSize: "13px" },
                      tickFormatter: te.vh,
                      axisLine: !1,
                      tickLine: !1,
                      dataKey: "unixTime",
                    }),
                    (0, p.jsx)(fe.B, {
                      tick: { fontSize: "13px" },
                      axisLine: !1,
                      tickLine: !1,
                      yAxisId: "percent",
                      orientation: "left",
                      unit: "%",
                    }),
                    (0, p.jsx)(Ze.u, { content: (0, p.jsx)(_e, {}) }),
                    null === r || void 0 === r
                      ? void 0
                      : r.map((e, n) => {
                          var i, s;
                          return "allChain" !== t && e.network !== t
                            ? null
                            : (0, p.jsx)(
                                ye.x,
                                {
                                  yAxisId: "percent",
                                  type: "monotone",
                                  dataKey: e.network,
                                  stroke: j.DM[n] ? j.DM[n] : "#555555",
                                  dot: !1,
                                  children: (0, p.jsx)(Ee.e, {
                                    content: (0, p.jsx)(Pe, {
                                      data: e,
                                      lastIndex:
                                        (null === l ||
                                        void 0 === l ||
                                        null === (i = l.data) ||
                                        void 0 === i ||
                                        null === (s = i.items) ||
                                        void 0 === s
                                          ? void 0
                                          : s.length) - 1,
                                      color: j.DM[n] ? j.DM[n] : "#555555",
                                    }),
                                  }),
                                },
                                e.network
                              );
                        }),
                  ],
                }),
              }),
            ],
          });
        },
        Oe = (e) => {
          let { chain: n } = e;
          const [t, i] = (0, a.useState)("nativeToken");
          return (
            (0, a.useEffect)(() => {
              ["base", "zksync"].includes(n) && i("coin360");
            }, [n]),
            (0, p.jsxs)(o.jj, {
              style: {
                height: "100%",
                display: "flex",
                flexDirection: "column",
              },
              children: [
                (0, p.jsx)(o.u2, {
                  children: (0, p.jsxs)(Z.Z, {
                    children: [
                      (0, p.jsx)(y.l0, { url: $, size: 20, isToken: !1 }),
                      (0, p.jsx)("span", { children: "Performance Charts" }),
                    ],
                  }),
                }),
                (0, p.jsxs)(o.JY, {
                  children: [
                    (0, p.jsx)(o.zu, {
                      children: (0, p.jsxs)(o.E5, {
                        onChange: (e) => {
                          var n, t, s, l, r, o;
                          e.target.value &&
                            ("nativeToken" === e.target.value
                              ? null === (n = window) ||
                                void 0 === n ||
                                null === (t = n.mixpanel) ||
                                void 0 === t ||
                                null === (s = t.track) ||
                                void 0 === s ||
                                s.call(
                                  t,
                                  j.v3
                                    .HOMEPAGE_PERFORMANCE_CHART_SELECT_NATIVE_TOKEN
                                )
                              : null === (l = window) ||
                                void 0 === l ||
                                null === (r = l.mixpanel) ||
                                void 0 === r ||
                                null === (o = r.track) ||
                                void 0 === o ||
                                o.call(
                                  r,
                                  j.v3.HOMEPAGE_PERFORMANCE_CHART_SELECT_COIN360
                                ),
                            i(e.target.value));
                        },
                        value: t,
                        children: [
                          !["base", "zksync"].includes(n) &&
                            (0, p.jsx)(d.ZP, {
                              value: "nativeToken",
                              children: "Native token",
                            }),
                          (0, p.jsx)(d.ZP, {
                            value: "coin360",
                            children: (0, p.jsxs)(o.hs, {
                              children: [
                                "Coin360",
                                (0, p.jsx)(ee.Z, {
                                  title: "Top ".concat(
                                    100,
                                    " tokens by 24h volume"
                                  ),
                                  children: (0, p.jsx)(ne.Z, {
                                    style: { color: "#878685" },
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                    "nativeToken" === t &&
                      !["base", "zksync"].includes(n) &&
                      (0, p.jsx)(Ce, { chain: n }),
                    "coin360" === t && (0, p.jsx)(je, { chain: n, limit: 100 }),
                  ],
                }),
              ],
            })
          );
        },
        Ne = () => {
          (0, a.useEffect)(() => {
            var e, n;
            null === (e = window) ||
              void 0 === e ||
              null === (n = e.mixpanel) ||
              void 0 === n ||
              n.track(j.v3.HOMEPAGE_ENTER);
          }, []);
          const e = (0, l.s0)(),
            n = Object.values(j.EO),
            { network: t } = (0, h.HG)("allChain");
          return (0, p.jsxs)(o.Hq, {
            children: [
              (0, p.jsxs)(r.ql, {
                children: [
                  (0, p.jsx)("title", { children: j.IS.home.socialTitle }),
                  (0, p.jsx)("meta", {
                    name: "description",
                    content: j.IS.home.socialDes,
                  }),
                ],
              }),
              (0, p.jsx)(L.Z, {}),
              (0, p.jsx)(H, {
                chain: t,
                setChain: (n) => {
                  Object.keys(j.EO).includes(n) && e("?chain=".concat(n));
                },
                chainList: n,
              }),
              (0, p.jsx)(o.gT, {
                children: (0, p.jsxs)(i.Z, {
                  gutter: [16, 16],
                  children: [
                    (0, p.jsx)(s.Z, {
                      span: 24,
                      lg: 18,
                      children: (0, p.jsx)(o.Od, {
                        children: (0, p.jsxs)(i.Z, {
                          gutter: [16, 16],
                          children: [
                            (0, p.jsx)(s.Z, {
                              span: 24,
                              lg: 7,
                              children: (0, p.jsx)(_, {
                                type: "table",
                                chain: t,
                              }),
                            }),
                            (0, p.jsx)(s.Z, {
                              span: 24,
                              lg: 7,
                              children: (0, p.jsx)(O, {
                                duration: "7D",
                                chain: t,
                              }),
                            }),
                            (0, p.jsx)(s.Z, {
                              span: 24,
                              lg: 10,
                              children: (0, p.jsx)(Oe, { chain: t }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, p.jsx)(s.Z, {
                      span: 24,
                      lg: 6,
                      children: (0, p.jsx)(A, { chain: t }),
                    }),
                  ],
                }),
              }),
              (0, p.jsx)(o.gT, {
                children: (0, p.jsxs)(i.Z, {
                  gutter: [16, 16],
                  children: [
                    (0, p.jsx)(s.Z, {
                      span: 24,
                      lg: 12,
                      children: (0, p.jsx)(m, { chain: t }),
                    }),
                    (0, p.jsx)(s.Z, {
                      span: 24,
                      lg: 12,
                      children: (0, p.jsx)(g, { chain: t }),
                    }),
                  ],
                }),
              }),
              (0, p.jsx)(o.gT, {
                children: (0, p.jsxs)(i.Z, {
                  gutter: [16, 16],
                  children: [
                    (0, p.jsx)(s.Z, {
                      span: 24,
                      lg: 8,
                      children: (0, p.jsx)(R, {}),
                    }),
                    (0, p.jsx)(s.Z, {
                      span: 24,
                      lg: 8,
                      children: (0, p.jsx)(M, {}),
                    }),
                    (0, p.jsx)(s.Z, {
                      span: 24,
                      lg: 8,
                      children: (0, p.jsx)(D, {}),
                    }),
                  ],
                }),
              }),
            ],
          });
        };
    },
    34713: (e, n, t) => {
      t.d(n, { Z: () => Q });
      var i,
        s,
        l,
        r,
        o,
        a,
        c,
        d,
        h,
        x,
        u,
        j,
        p,
        v,
        m,
        g,
        f = t(47313),
        Z = t(2135),
        y = t(98276),
        E = t(61858),
        b = t(32357),
        w = t(60222),
        k = t(30168),
        P = t(44781),
        _ = t(41068),
        C = t(41282);
      (0, P.ZP)(_.Z.Ribbon)(i || (i = (0, k.Z)(["\n  font-size: 12px;\n"])));
      const O = P.ZP.span(
          s ||
            (s = (0, k.Z)([
              "\n  position: ",
              ";\n  right: 0;\n  top: 0;\n  display: inline-flex;\n  padding: 0 4px;\n  background: #FF7A00;\n  border-radius: 2px;\n  font-size: 8px;\n  font-weight: 700;\n  line-height: 12px;\n  color: #0D0701;\n",
            ])),
          (e) => {
            let { pos: n } = e;
            return n || "static";
          }
        ),
        N = P.ZP.div(
          l ||
            (l = (0, k.Z)([
              "\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n",
            ]))
        ),
        R = P.ZP.div(r || (r = (0, k.Z)([""]))),
        T = P.ZP.div(
          o ||
            (o = (0, k.Z)([
              "\n  max-height: 65vh;\n  overflow: auto;\n\n  @media only screen and (max-width: 768px) {\n    max-height: calc(100vh - 100px);\n  }\n",
            ]))
        ),
        I = P.ZP.div(
          a ||
            (a = (0, k.Z)([
              "\n  font-size: 14px;\n  text-align: center;\n  padding: 24px 0 16px 0;\n  border-top: 1px solid #24211F;\n",
            ]))
        ),
        M = P.ZP.div(
          c ||
            (c = (0, k.Z)([
              "\n  display: flex;\n  gap: 8px;\n  align-items: center;\n",
            ]))
        ),
        S = P.ZP.div(
          d ||
            (d = (0, k.Z)([
              "\n  width: calc(100% - 35px - 8px); // - token icon's width - gap\n",
            ]))
        ),
        D = (0, P.ZP)(N)(
          h || (h = (0, k.Z)(["\n  color: #EAEAEA;\n  font-weight: 500;\n"]))
        ),
        A = (0, P.ZP)(N)(
          x || (x = (0, k.Z)(["\n  color: #878685;\n  font-size: 12px;\n"]))
        ),
        L = (0, P.ZP)(N)(u || (u = (0, k.Z)([""]))),
        G = (0, P.ZP)(C.Z)(
          j ||
            (j = (0, k.Z)([
              "\n  table {\n    border-radius: 4px;\n    border: 1px solid #24211F !important;\n  }\n\n  table > thead > tr:first-child th:first-child {\n    border-top-left-radius: 4px;\n  }\n\n  table > thead > tr:first-child th:last-child {\n    border-top-right-radius: 4px;\n  }\n\n  table > tbody > tr:last-child td:first-child {\n    border-bottom-left-radius: 4px;\n  }\n\n  table > tbody > tr:last-child td:last-child {\n    border-bottom-right-radius: 4px;\n  }\n\n  .ant-table-thead > tr > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not([colspan])::before {\n    display: none;\n  }\n\n  .ant-table-thead > tr > th {\n    height: 40px;\n    padding: 0 6px;\n    background: #0D0701 !important;\n    border-bottom: 1px solid #24211F !important;\n  }\n\n  .ant-table-tbody > tr > td {\n    height: 56px;\n    padding: 0 6px;\n    border-bottom: 1px solid #24211F !important;\n  }\n\n  .ant-table-tbody > tr:last-child > td {\n    border-bottom: none !important;\n  }\n",
            ]))
        ),
        F = P.ZP.div(
          p ||
            (p = (0, k.Z)([
              "\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 0;\n\n  @media only screen and (max-width: 768px) {\n    flex-wrap: wrap;\n  }\n",
            ]))
        ),
        U = P.ZP.div(v || (v = (0, k.Z)(["\n  font-size: 15px;\n"]))),
        z = (0, P.ZP)(U)(m || (m = (0, k.Z)(["\n  font-weight: 700;\n"]))),
        H = P.ZP.span(
          g ||
            (g = (0, k.Z)([
              "\n  cursor: pointer;  \n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  height: 40px;\n  width: 220px;\n  background: rgba(255, 248, 242, 0.1);\n  border: 1px solid #565452;\n  border-radius: 4px;\n  color: #565452;\n  position: relative;\n  overflow: hidden;\n",
            ]))
        );
      var $ = t(68530),
        B = t(46417);
      const V = [
        {
          title: "",
          dataIndex: "key",
          width: 55,
          align: "center",
          fixed: "left",
          render: (e) =>
            e ? (0, B.jsxs)(B.Fragment, { children: ["#", e] }) : "__",
        },
        {
          title: "Token",
          dataIndex: "tokenData",
          width: 130,
          ellipsis: !0,
          fixed: "left",
          render: (e, n) =>
            e
              ? (0, B.jsx)(Z.rU, {
                  to: "/token/".concat(n.token, "?chain=").concat(n.network),
                  children: (0, B.jsxs)(M, {
                    children: [
                      (0, B.jsx)(b.TY, {
                        token: e,
                        children: (0, B.jsx)(b.l0, { size: 32, url: e.icon }),
                      }),
                      (0, B.jsxs)(S, {
                        children: [
                          (0, B.jsx)(D, {
                            children: (0, B.jsx)(N, {
                              children: e.symbol || "Unknown",
                            }),
                          }),
                          (0, B.jsx)(A, {
                            children: (0, B.jsx)(N, {
                              children: e.name || "Unknown",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                })
              : "__",
        },
        {
          title: "",
          dataIndex: "network",
          width: 40,
          align: "center",
          render: (e) =>
            e
              ? (0, B.jsx)(E.Z, {
                  title: $.EO[e].name,
                  children: (0, B.jsx)("span", {
                    children: (0, B.jsx)(b.l0, {
                      url: $.EO[e].logoURI,
                      isToken: !1,
                    }),
                  }),
                })
              : "__",
        },
        {
          title: "24h Price",
          dataIndex: "price",
          width: 110,
          align: "right",
          render: (e, n) =>
            e
              ? (0, B.jsxs)("div", {
                  children: [
                    (0, B.jsxs)(L, { children: ["$", (0, w.T4)(e)] }),
                    (0, B.jsx)(L, {
                      children: (0, B.jsx)(b.w6, {
                        value: n.priceChange24hPercent,
                      }),
                    }),
                  ],
                })
              : "__",
        },
        {
          title: "24h Volume",
          dataIndex: "volume24h",
          width: 130,
          align: "right",
          render: (e, n) =>
            e
              ? (0, B.jsxs)("div", {
                  children: [
                    (0, B.jsxs)(L, { children: ["$", (0, w.Hr)(e)] }),
                    (0, B.jsx)(L, {
                      children: (0, B.jsx)(b.w6, {
                        value: n.volume24hChangePercent,
                      }),
                    }),
                  ],
                })
              : "__",
        },
        {
          title: "24h Views",
          dataIndex: "view24h",
          width: 100,
          align: "right",
          render: (e, n) =>
            e
              ? (0, B.jsxs)("div", {
                  children: [
                    (0, B.jsx)(L, { children: (0, w.Hr)(e) }),
                    (0, B.jsx)(L, {
                      children: (0, B.jsx)(b.w6, {
                        value: n.view24hChangePercent,
                      }),
                    }),
                  ],
                })
              : "__",
        },
        {
          title: "TVL",
          dataIndex: "liquidity",
          width: 100,
          align: "right",
          render: (e) =>
            e ? (0, B.jsxs)(L, { children: ["$", (0, w.Hr)(e)] }) : "__",
        },
      ];
      var K = t(82977),
        W = t(25385);
      const Q = (e) => {
        let { chain: n } = e;
        const { userInfo: t } = (0, f.useContext)(K.Il),
          i = (0, W.UL)(null === t || void 0 === t ? void 0 : t.token, n),
          s = (0, f.useMemo)(() => i.map((e, n) => ((e.key = n + 1), e)), [i]);
        return 0 === s.length
          ? (0, B.jsx)(y.Z, {})
          : (0, B.jsxs)(R, {
              children: [
                (0, B.jsxs)(T, {
                  children: [
                    (0, B.jsx)(G, {
                      columns: V,
                      dataSource: s.slice(0, 10),
                      pagination: !1,
                      scroll: { x: "100%" },
                    }),
                    !(0, w.bg)(t) &&
                      (0, B.jsxs)(F, {
                        children: [
                          (0, B.jsxs)(U, {
                            children: [
                              (0, B.jsx)(Z.rU, {
                                to: "/pro#traders",
                                children: "Upgrade PRO Account",
                              }),
                              " to view TOP 100 trending tokens",
                            ],
                          }),
                          (0, B.jsx)(Z.rU, {
                            to: "/user/sign-in",
                            children: (0, B.jsxs)(H, {
                              children: [
                                "View More",
                                (0, B.jsx)(O, {
                                  pos: "absolute",
                                  children: "PRO",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    (0, w.bg)(t) &&
                      ((0, w.OA)(t) || (0, w.$G)(t)) &&
                      (0, B.jsxs)(F, {
                        children: [
                          (0, B.jsxs)(U, {
                            children: [
                              (0, B.jsx)(Z.rU, {
                                to: "/pro#traders",
                                children: "Upgrade to PRO",
                              }),
                              " to view TOP 100 trending tokens",
                            ],
                          }),
                          (0, B.jsx)(Z.rU, {
                            to: "/user/profile",
                            children: (0, B.jsxs)(H, {
                              children: [
                                "View More",
                                (0, B.jsx)(O, {
                                  pos: "absolute",
                                  children: "PRO",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    (0, w.bg)(t) &&
                      (0, w.rz)(t) &&
                      (0, B.jsxs)(B.Fragment, {
                        children: [
                          (0, B.jsx)(F, {
                            children: (0, B.jsx)(E.Z, {
                              title: "Only PRO Accounts can view this",
                              children: (0, B.jsxs)(z, {
                                children: [
                                  "More Tokens ",
                                  (0, B.jsx)(O, { children: "PRO" }),
                                ],
                              }),
                            }),
                          }),
                          (0, B.jsx)(G, {
                            columns: V,
                            dataSource: s.slice(10),
                            pagination: !1,
                            scroll: { x: "100%" },
                          }),
                        ],
                      }),
                  ],
                }),
                (0, w.rz)(t) &&
                  (0, B.jsxs)(I, {
                    children: [
                      "View more trending token in ",
                      (0, B.jsx)(Z.rU, {
                        to: "/find-gems",
                        children: "Find Gems",
                      }),
                    ],
                  }),
              ],
            });
      };
    },
    86716: (e, n, t) => {
      t.d(n, { dS: () => C, h5: () => P, EO: () => O });
      var i,
        s,
        l,
        r,
        o,
        a,
        c,
        d = t(47313),
        h = t(61677),
        x = t(68530),
        u = t(32357),
        j = t(30168),
        p = t(44781);
      const v = p.ZP.span(i || (i = (0, j.Z)(["\n  display: inline-flex;\n"]))),
        m = p.ZP.span(
          s ||
            (s = (0, j.Z)([
              "\n  display: inline-flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 4px 8px;\n  cursor: pointer;\n  border: 1px solid #ff7a00;\n  border-radius: 4px;\n  min-width: 120px;\n",
            ]))
        ),
        g = p.ZP.span(
          l ||
            (l = (0, j.Z)([
              "\n  display: inline-flex;\n  gap: 5px;\n  align-items: center;\n  font-size: 12px;\n  font-weight: 400;\n",
            ]))
        ),
        f = p.ZP.span(
          r ||
            (r = (0, j.Z)([
              "\n  display: inline-flex;\n  padding: 0 2px 0 8px;\n  align-items: center;\n  cursor: pointer;\n",
            ]))
        ),
        Z = p.ZP.span(o || (o = (0, j.Z)(["\n  white-space: nowrap;\n"]))),
        y = p.ZP.div(a || (a = (0, j.Z)([""]))),
        E = p.ZP.div(
          c ||
            (c = (0, j.Z)([
              "\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px;\n  border-radius: 4px;\n  cursor: pointer;\n  min-width: 180px;\n\n  &:hover {\n    box-shadow: 0 0 0 1px #ff7a00;\n    background-color: #0d0701;\n  }\n",
            ]))
        );
      var b = t(56880),
        w = t(46417);
      const k = (e) => {
          let { changeChain: n } = e;
          const t = (0, b.lc)();
          return (0, w.jsx)(y, {
            children: Object.keys(t).map((e) =>
              (0, w.jsxs)(
                E,
                {
                  onClick: () => n(e),
                  children: [
                    (0, w.jsx)(u.l0, { size: 25, url: x.EO[e].logoURI }),
                    (0, w.jsx)("span", { children: x.EO[e].name }),
                  ],
                },
                x.EO[e].network
              )
            ),
          });
        },
        P = (e) => {
          let { setChain: n, children: t } = e;
          const [i, s] = (0, d.useState)(!1);
          return (0, w.jsx)(h.Z, {
            placement: "bottomLeft",
            trigger: "hover",
            open: i,
            content: (0, w.jsx)(k, {
              changeChain: (e) => {
                n(e), s(!1);
              },
            }),
            onOpenChange: (e) => {
              s(e);
            },
            children: (0, w.jsx)(v, { children: t }),
          });
        };
      var _ = t(40737);
      const C = (e) => {
          let { chain: n } = e;
          return (0, w.jsxs)(f, {
            children: [
              (0, w.jsx)(u.l0, { url: x.EO[n].logoURI, size: 25 }),
              (0, w.jsx)(_.Z, {}),
            ],
          });
        },
        O = (e) => {
          let { chain: n } = e;
          return (0, w.jsxs)(m, {
            children: [
              (0, w.jsxs)(g, {
                children: [
                  (0, w.jsx)(u.l0, { url: x.EO[n].logoURI }),
                  (0, w.jsx)(Z, { children: x.EO[n].name }),
                ],
              }),
              (0, w.jsx)(_.Z, {}),
            ],
          });
        };
    },
    41068: (e, n, t) => {
      t.d(n, { Z: () => b });
      var i = t(85623),
        s = t(38442),
        l = t(83963),
        r = t(46123),
        o = t.n(r),
        a = t(43346),
        c = t(47313),
        d = t(74714),
        h = t(48138),
        x = t(20238);
      function u(e) {
        return x.Y.includes(e);
      }
      const j = function (e) {
        var n,
          t = e.className,
          s = e.prefixCls,
          r = e.style,
          a = e.color,
          h = e.children,
          x = e.text,
          j = e.placement,
          p = void 0 === j ? "end" : j,
          v = c.useContext(d.E_),
          m = v.getPrefixCls,
          g = v.direction,
          f = m("ribbon", s),
          Z = u(a),
          y = o()(
            f,
            "".concat(f, "-placement-").concat(p),
            ((n = {}),
            (0, i.Z)(n, "".concat(f, "-rtl"), "rtl" === g),
            (0, i.Z)(n, "".concat(f, "-color-").concat(a), Z),
            n),
            t
          ),
          E = {},
          b = {};
        return (
          a && !Z && ((E.background = a), (b.color = a)),
          c.createElement(
            "div",
            { className: "".concat(f, "-wrapper") },
            h,
            c.createElement(
              "div",
              { className: y, style: (0, l.Z)((0, l.Z)({}, E), r) },
              c.createElement("span", { className: "".concat(f, "-text") }, x),
              c.createElement("div", {
                className: "".concat(f, "-corner"),
                style: b,
              })
            )
          )
        );
      };
      var p = t(34093);
      function v(e) {
        var n,
          t = e.prefixCls,
          i = e.value,
          s = e.current,
          l = e.offset,
          r = void 0 === l ? 0 : l;
        return (
          r &&
            (n = { position: "absolute", top: "".concat(r, "00%"), left: 0 }),
          c.createElement(
            "span",
            {
              style: n,
              className: o()("".concat(t, "-only-unit"), { current: s }),
            },
            i
          )
        );
      }
      function m(e, n, t) {
        for (var i = e, s = 0; (i + 10) % 10 !== n; ) (i += t), (s += t);
        return s;
      }
      function g(e) {
        var n,
          t,
          i = e.prefixCls,
          s = e.count,
          r = e.value,
          o = Number(r),
          a = Math.abs(s),
          d = c.useState(o),
          h = (0, p.Z)(d, 2),
          x = h[0],
          u = h[1],
          j = c.useState(a),
          g = (0, p.Z)(j, 2),
          f = g[0],
          Z = g[1],
          y = function () {
            u(o), Z(a);
          };
        if (
          (c.useEffect(
            function () {
              var e = setTimeout(function () {
                y();
              }, 1e3);
              return function () {
                clearTimeout(e);
              };
            },
            [o]
          ),
          x === o || Number.isNaN(o) || Number.isNaN(x))
        )
          (n = [c.createElement(v, (0, l.Z)({}, e, { key: o, current: !0 }))]),
            (t = { transition: "none" });
        else {
          n = [];
          for (var E = o + 10, b = [], w = o; w <= E; w += 1) b.push(w);
          var k = b.findIndex(function (e) {
            return e % 10 === x;
          });
          (n = b.map(function (n, t) {
            var i = n % 10;
            return c.createElement(
              v,
              (0, l.Z)({}, e, {
                key: n,
                value: i,
                offset: t - k,
                current: t === k,
              })
            );
          })),
            (t = {
              transform: "translateY(".concat(-m(x, o, f < a ? 1 : -1), "00%)"),
            });
        }
        return c.createElement(
          "span",
          { className: "".concat(i, "-only"), style: t, onTransitionEnd: y },
          n
        );
      }
      var f = function (e, n) {
        var t = {};
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) &&
            n.indexOf(i) < 0 &&
            (t[i] = e[i]);
        if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
          var s = 0;
          for (i = Object.getOwnPropertySymbols(e); s < i.length; s++)
            n.indexOf(i[s]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, i[s]) &&
              (t[i[s]] = e[i[s]]);
        }
        return t;
      };
      const Z = function (e) {
        var n = e.prefixCls,
          t = e.count,
          i = e.className,
          s = e.motionClassName,
          r = e.style,
          a = e.title,
          x = e.show,
          u = e.component,
          j = void 0 === u ? "sup" : u,
          p = e.children,
          v = f(e, [
            "prefixCls",
            "count",
            "className",
            "motionClassName",
            "style",
            "title",
            "show",
            "component",
            "children",
          ]),
          m = (0, c.useContext(d.E_).getPrefixCls)("scroll-number", n),
          Z = (0, l.Z)((0, l.Z)({}, v), {
            "data-show": x,
            style: r,
            className: o()(m, i, s),
            title: a,
          }),
          y = t;
        if (t && Number(t) % 1 === 0) {
          var E = String(t).split("");
          y = E.map(function (e, n) {
            return c.createElement(g, {
              prefixCls: m,
              count: Number(t),
              value: e,
              key: E.length - n,
            });
          });
        }
        return (
          r &&
            r.borderColor &&
            (Z.style = (0, l.Z)((0, l.Z)({}, r), {
              boxShadow: "0 0 0 1px ".concat(r.borderColor, " inset"),
            })),
          p
            ? (0, h.Tm)(p, function (e) {
                return {
                  className: o()(
                    "".concat(m, "-custom-component"),
                    null === e || void 0 === e ? void 0 : e.className,
                    s
                  ),
                };
              })
            : c.createElement(j, Z, y)
        );
      };
      var y = function (e, n) {
          var t = {};
          for (var i in e)
            Object.prototype.hasOwnProperty.call(e, i) &&
              n.indexOf(i) < 0 &&
              (t[i] = e[i]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var s = 0;
            for (i = Object.getOwnPropertySymbols(e); s < i.length; s++)
              n.indexOf(i[s]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, i[s]) &&
                (t[i[s]] = e[i[s]]);
          }
          return t;
        },
        E = function (e) {
          var n,
            t,
            r = e.prefixCls,
            x = e.scrollNumberPrefixCls,
            j = e.children,
            p = e.status,
            v = e.text,
            m = e.color,
            g = e.count,
            f = void 0 === g ? null : g,
            E = e.overflowCount,
            b = void 0 === E ? 99 : E,
            w = e.dot,
            k = void 0 !== w && w,
            P = e.size,
            _ = void 0 === P ? "default" : P,
            C = e.title,
            O = e.offset,
            N = e.style,
            R = e.className,
            T = e.showZero,
            I = void 0 !== T && T,
            M = y(e, [
              "prefixCls",
              "scrollNumberPrefixCls",
              "children",
              "status",
              "text",
              "color",
              "count",
              "overflowCount",
              "dot",
              "size",
              "title",
              "offset",
              "style",
              "className",
              "showZero",
            ]),
            S = c.useContext(d.E_),
            D = S.getPrefixCls,
            A = S.direction,
            L = D("badge", r),
            G = f > b ? "".concat(b, "+") : f,
            F = "0" === G || 0 === G,
            U =
              ((null !== p && void 0 !== p) || (null !== m && void 0 !== m)) &&
              (null === f || (F && !I)),
            z = k && !F,
            H = z ? "" : G,
            $ = (0, c.useMemo)(
              function () {
                return (
                  (null === H || void 0 === H || "" === H || (F && !I)) && !z
                );
              },
              [H, F, I, z]
            ),
            B = (0, c.useRef)(f);
          $ || (B.current = f);
          var V = B.current,
            K = (0, c.useRef)(H);
          $ || (K.current = H);
          var W = K.current,
            Q = (0, c.useRef)(z);
          $ || (Q.current = z);
          var Y = (0, c.useMemo)(
              function () {
                if (!O) return (0, l.Z)({}, N);
                var e = { marginTop: O[1] };
                return (
                  "rtl" === A
                    ? (e.left = parseInt(O[0], 10))
                    : (e.right = -parseInt(O[0], 10)),
                  (0, l.Z)((0, l.Z)({}, e), N)
                );
              },
              [A, O, N]
            ),
            q =
              null !== C && void 0 !== C
                ? C
                : "string" === typeof V || "number" === typeof V
                ? V
                : void 0,
            J =
              $ || !v
                ? null
                : c.createElement(
                    "span",
                    { className: "".concat(L, "-status-text") },
                    v
                  ),
            X =
              V && "object" === (0, s.Z)(V)
                ? (0, h.Tm)(V, function (e) {
                    return { style: (0, l.Z)((0, l.Z)({}, Y), e.style) };
                  })
                : void 0,
            ee = o()(
              ((n = {}),
              (0, i.Z)(n, "".concat(L, "-status-dot"), U),
              (0, i.Z)(n, "".concat(L, "-status-").concat(p), !!p),
              (0, i.Z)(n, "".concat(L, "-status-").concat(m), u(m)),
              n)
            ),
            ne = {};
          m && !u(m) && (ne.background = m);
          var te = o()(
            L,
            ((t = {}),
            (0, i.Z)(t, "".concat(L, "-status"), U),
            (0, i.Z)(t, "".concat(L, "-not-a-wrapper"), !j),
            (0, i.Z)(t, "".concat(L, "-rtl"), "rtl" === A),
            t),
            R
          );
          if (!j && U) {
            var ie = Y.color;
            return c.createElement(
              "span",
              (0, l.Z)({}, M, { className: te, style: Y }),
              c.createElement("span", { className: ee, style: ne }),
              v &&
                c.createElement(
                  "span",
                  {
                    style: { color: ie },
                    className: "".concat(L, "-status-text"),
                  },
                  v
                )
            );
          }
          return c.createElement(
            "span",
            (0, l.Z)({}, M, { className: te }),
            j,
            c.createElement(
              a.Z,
              {
                visible: !$,
                motionName: "".concat(L, "-zoom"),
                motionAppear: !1,
                motionDeadline: 1e3,
              },
              function (e) {
                var n,
                  t = e.className,
                  s = D("scroll-number", x),
                  r = Q.current,
                  a = o()(
                    ((n = {}),
                    (0, i.Z)(n, "".concat(L, "-dot"), r),
                    (0, i.Z)(n, "".concat(L, "-count"), !r),
                    (0, i.Z)(n, "".concat(L, "-count-sm"), "small" === _),
                    (0, i.Z)(
                      n,
                      "".concat(L, "-multiple-words"),
                      !r && W && W.toString().length > 1
                    ),
                    (0, i.Z)(n, "".concat(L, "-status-").concat(p), !!p),
                    (0, i.Z)(n, "".concat(L, "-status-").concat(m), u(m)),
                    n)
                  ),
                  d = (0, l.Z)({}, Y);
                return (
                  m && !u(m) && ((d = d || {}).background = m),
                  c.createElement(
                    Z,
                    {
                      prefixCls: s,
                      show: !$,
                      motionClassName: t,
                      className: a,
                      count: W,
                      title: q,
                      style: d,
                      key: "scrollNumber",
                    },
                    X
                  )
                );
              }
            ),
            J
          );
        };
      E.Ribbon = j;
      const b = E;
    },
  },
]);
