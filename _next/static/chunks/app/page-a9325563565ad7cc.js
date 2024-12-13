(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    7091: function (e, t, l) {
      Promise.resolve().then(l.bind(l, 4911)),
        Promise.resolve().then(l.bind(l, 1854)),
        Promise.resolve().then(l.bind(l, 661)),
        Promise.resolve().then(l.bind(l, 6031)),
        Promise.resolve().then(l.bind(l, 7912)),
        Promise.resolve().then(l.bind(l, 6741)),
        // Promise.resolve().then(l.bind(l, 9100)),
        // Promise.resolve().then(l.bind(l, 7763)),
        // Promise.resolve().then(l.bind(l, 3090)),
        // Promise.resolve().then(l.bind(l, 1138)),
        Promise.resolve().then(l.bind(l, 1894)),
        Promise.resolve().then(l.bind(l, 5580)),
        Promise.resolve().then(l.bind(l, 1121));
    },
    828: function (e, t, l) {
      "use strict";
      var s = l(7437),
        a = l(2265),
        r = l(6648),
        i = l(9424);
      l(1239);
      var n = l(9459);
      t.Z = (e) => {
        let { cardColor: t, cards: l } = e,
          c = 100 / l.length,
          [o, x] = (0, a.useState)(0);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(i.default, {
              responsive: n.m_,
              className: "w-full",
              arrows: !1,
              ssr: !0,
              afterChange: (e, t) => {
                let { currentSlide: l } = t;
                return x(l);
              },
              children: l.map((e, l) =>
                (0, s.jsx)(
                  "div",
                  {
                    className:
                      "w-[95%] h-[128px] mx-2 flex justify-center items-center rounded-3xl "
                        .concat(t, " ")
                        .concat(e.link.length > 0 ? "cursor-pointer" : ""),
                    onClick: () => {
                      e.link.length > 0 && window.open(e.link, "_blank");
                    },
                    children: (0, s.jsx)(r.default, {
                      className: "".concat(0 === l ? "max-w-28" : "scale-125"),
                      src: e.icon,
                      alt: "Supported by ".concat(l),
                      unoptimized: !0,
                      loading: "eager",
                    }),
                  },
                  l
                )
              ),
            }),
            (0, s.jsxs)("div", {
              className:
                "w-[95%] h-1 flex lg:hidden flex-col justify-center items-center relative mt-8",
              children: [
                (0, s.jsx)("div", {
                  className:
                    "w-[14.29%] h-[2px] rounded-t-sm bg-textBlack absolute transition-all duration-300 ease-in-out -translate-y-[1px]",
                  style: { left: "".concat(o * c, "%") },
                }),
                (0, s.jsx)("div", { className: "w-full h-[1px] bg-[#C8CDE1]" }),
              ],
            }),
          ],
        });
      };
    },
    2171: function (e, t, l) {
      "use strict";
      l.d(t, {
        default: function () {
          return p;
        },
      });
      var s = l(7437),
        a = l(2265),
        r = l(9459),
        i = l(5267),
        n = l(3101),
        c = l(6648),
        o = {
          src: "/_next/static/media/disclaimer.12fa1a7d.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        x = {
          src: "/_next/static/media/crossDisabled.c26af0e0.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        d = {
          src: "/_next/static/media/crossEnabled.40728f90.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        u = l(810),
        g = (e) => {
          let { open: t, setOpen: l } = e,
            [g, p] = (0, a.useState)(!1),
            { windowWidth: f } = (0, u.Z)();
          return (0, s.jsx)(i.Z, {
            open: t,
            onClose: (e, t) => {
              "clickaway" !== t && l(!1);
            },
            sx: { marginLeft: "16px", marginRight: "16px" },
            children: (0, s.jsxs)("div", {
              className:
                "w-full lg:w-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3 p-8 rounded-3xl items-start outline-none bg-lightGray",
              children: [
                (0, s.jsxs)("div", {
                  className: "w-full flex justify-between items-center",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "flex items-center gap-2",
                      children: [
                        (0, s.jsx)(c.default, { src: o, alt: "disclaimer" }),
                        (0, s.jsx)("h1", {
                          className: "font-medium text-textBlack",
                          children: "legal disclaimer:",
                        }),
                      ],
                    }),
                    (0, s.jsx)(c.default, {
                      onMouseEnter: () => p(!0),
                      onMouseLeave: () => p(!1),
                      src: g ? d : x,
                      onClick: () => l(!1),
                      className: "-translate-y-5 translate-x-5 cursor-pointer",
                      alt: "cross",
                    }),
                  ],
                }),
                (0, s.jsxs)("p", {
                  className: "max-w-96 text-sm text-justify text-textBlack",
                  children: [
                    r.ZL,
                    " For inquiries, contact",
                    " ",
                    (0, s.jsx)(n.Z, {
                      className: "no-underline text-purple",
                      href: "mailto:info@FlowAI.trade",
                      children: "info@FlowAI.trade",
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        p = (e) => {
          let { isSticky: t = !0 } = e,
            [l, i] = (0, a.useState)(!1);
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsxs)("div", {
                id: "disclaimer",
                className: "w-screen h-[38px] lg:h-7 2xl:h-9 ".concat(
                  t ? "fixed top-0" : "",
                  " px-4 lg:px-16 flex justify-between lg:justify-center items-center gap-8 z-50 bg-lightGray"
                ),
                children: [
                  (0, s.jsx)("p", {
                    className: "hidden lg:flex truncate text-xs text-textBlack",
                    children: r.ZL,
                  }),
                  (0, s.jsx)("p", {
                    className:
                      "flex lg:hidden text-sm tracking-widest text-textBlack uppercase",
                    children: "Legal Disclaimer",
                  }),
                  (0, s.jsx)("p", {
                    className:
                      "flex 3xl:hidden text-sm lg:text-xs font-normal lg:font-medium text-nowrap cursor-pointer text-textBlack",
                    onClick: () => i(!0),
                    children: "Read more",
                  }),
                ],
              }),
              (0, s.jsx)(g, { open: l, setOpen: i }),
            ],
          });
        };
    },
    4911: function (e, t, l) {
      "use strict";
      l.d(t, {
        default: function () {
          return u;
        },
      });
      var s = l(7437),
        a = l(2265),
        r = l(9582),
        i = l(6648),
        n = l(6098),
        c = l.n(n),
        o = l(8377),
        x = l(810),
        d = {
          src: "/_next/static/media/rightArrow.79e0cfd5.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        };
      r.p8.registerPlugin(c());
      var u = () => {
        let e = (0, a.useRef)(null),
          t = (0, a.useRef)(null),
          l = (0, a.useRef)(null),
          { windowWidth: n } = (0, x.Z)();
        return (
          (0, a.useEffect)(() => {
            let s = r.p8.timeline({
              scrollTrigger: {
                trigger: e.current,
                toggleActions: "play none none reverse",
                start:
                  n && n > 1536
                    ? "top-=80px 80%"
                    : n && n > 1100
                    ? "bottom 90%"
                    : "bottom center",
                endTrigger: "#FooterContent",
                end: "".concat(
                  n && n > 1100 ? "center-=80px" : "center-=300px",
                  " bottom"
                ),
                onLeave: () => s.reverse(),
                onEnterBack: () => s.restart(),
              },
            });
            return (
              n &&
                (s.fromTo(
                  t.current,
                  { y: 100, opacity: 0 },
                  { y: 0, opacity: 1, duration: 0.2 }
                ),
                s.fromTo(
                  e.current,
                  { width: 0, backgroundColor: "" },
                  {
                    delay: 0.2,
                    width: n > 1100 ? 355 : 245,
                    backgroundColor: "#1F242C",
                    duration: 0.5,
                  }
                ),
                s.fromTo(l.current, { opacity: 0 }, { opacity: 1 })),
              () => {
                s.kill();
              }
            );
          }, [n]),
          (0, s.jsx)("div", {
            className: "w-screen h-12 fixed bottom-4 flex justify-center z-50",
            children: (0, s.jsxs)("div", {
              ref: e,
              className:
                "relative flex justify-between items-center gap-5 rounded-[48px]",
              children: [
                (0, s.jsx)("p", {
                  ref: l,
                  className:
                    "text-xs tracking-widest uppercase text-nowrap ml-5 opacity-0 text-white",
                  children: "Earn $FlowAI on Eth",
                }),
                (0, s.jsxs)("div", {
                  ref: t,
                  className: "absolute right-0 opacity-0",
                  children: [
                    (0, s.jsx)(o.Z, {
                      label: "Start Trading",
                      extraStyle:
                        "hidden lg:flex justify-center bg-primary hover:bg-primaryHover py-3 px-8",
                      textColor: "text-textBlack",
                      handleClick: () =>
                        window.open("https://app-flowx-ai.vercel.app/", "_blank"),
                    }),
                    (0, s.jsx)("div", {
                      className:
                        "flex justify-center lg:hidden p-[14px] rounded-full bg-primary",
                      children: (0, s.jsx)(i.default, {
                        src: d,
                        alt: "right arrow",
                        onClick: () =>
                          window.open("https://app-flowx-ai.vercel.app/", "_blank"),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
    },
    4385: function (e, t, l) {
      "use strict";
      l.d(t, {
        default: function () {
          return b;
        },
      });
      var s = l(7437),
        a = l(3297),
        r = l(3038),
        i = l(6648),
        n = l(7138),
        c = l(3276),
        o = {
          src: "/_next/static/media/smallLogo.de34c269.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        x = l(8377),
        d = l(2265),
        u = l(2030),
        g = l(5169),
        p = {
          src: "/_next/static/media/hamburger.875c1eba.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        f = {
          src: "/_next/static/media/cross.d0a2373f.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        m = l(565),
        h = () => {
          let [e, t] = (0, d.useState)(!1),
            { navigation: l, socials: n } = (0, m.Z)();
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(i.default, {
                className: "lg:hidden cursor-pointer",
                src: p,
                alt: "Hamburger",
                onClick: () => t(!0),
              }),
              (0, s.jsx)(g.ZP, {
                anchor: "right",
                open: e,
                onClose: () => t(!1),
                PaperProps: { sx: { backgroundColor: "#E6EBFF" } },
                children: (0, s.jsxs)("div", {
                  className: "w-screen h-full flex flex-col justify-between",
                  children: [
                    (0, s.jsxs)("div", {
                      children: [
                        (0, s.jsxs)("div", {
                          className:
                            "flex justify-between items-center py-4 px-6",
                          children: [
                            (0, s.jsx)(i.default, {
                              src: c.Z,
                              alt: "Logo",
                              width: 139,
                              height: 24,
                            }),
                            (0, s.jsx)(i.default, {
                              className: "cursor-pointer",
                              src: f,
                              alt: "Cross",
                              onClick: () => t(!1),
                            }),
                          ],
                        }),
                        (0, s.jsx)(u.Z, {
                          sx: { marginBottom: "32px" },
                          className: "bg-divider",
                        }),
                        (0, s.jsx)("div", {
                          className: "flex flex-col gap-8 px-6",
                          children:
                            null == l
                              ? void 0
                              : l.map((e) =>
                                  (0, s.jsx)(
                                    a.PrismicNextLink,
                                    {
                                      field: e.link,
                                      className: "text-xl text-textBlack",
                                      onClick: () => t(!1),
                                      children: e.label,
                                    },
                                    e.label
                                  )
                                ),
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      children: [
                        (0, s.jsxs)("div", {
                          className: "flex flex-col gap-4 px-6",
                          children: [
                            (0, s.jsx)(x.Z, {
                              label: "Buy $FlowAI",
                              extraStyle: "bg-textBlack py-6",
                              textColor: "text-white",
                              handleClick: () => {
                                t(!1),
                                  window.open(
                                    "https://doc.FlowAI.trade/",
                                    "_blank"
                                  );
                              },
                            }),
                            (0, s.jsx)(x.Z, {
                              label: "Start Trading",
                              extraStyle: "bg-primary py-6",
                              textColor: "text-textBlack",
                              handleClick: () => {
                                window.open(
                                  "https://app-flowx-ai.vercel.app/",
                                  "_blank"
                                );
                              },
                            }),
                          ],
                        }),
                        (0, s.jsx)(u.Z, {
                          sx: { marginTop: "16px" },
                          className: "bg-divider",
                        }),
                        (0, s.jsx)("div", {
                          className: "flex justify-center gap-4 py-4 px-6",
                          children:
                            null == n
                              ? void 0
                              : n.map((e, l) =>
                                  (0, s.jsx)(
                                    a.PrismicNextLink,
                                    {
                                      field: e.link,
                                      className: "".concat(
                                        Object.keys(e.link).length < 2 &&
                                          "pointer-events-none"
                                      ),
                                      onClick: () => t(!1),
                                      children: (0, s.jsx)(r.PrismicNextImage, {
                                        field: e.logo,
                                      }),
                                    },
                                    l
                                  )
                                ),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        w = l(810),
        j = l(9459),
        b = (e) => {
          let { isSticky: t = !0 } = e,
            { windowWidth: l } = (0, w.Z)(),
            { navigation: d, socials: u } = (0, m.Z)();
          return (0, s.jsxs)("div", {
            id: "navbar",
            className: "w-screen h-fit lg:h-[72px] 2xl:h-20 ".concat(
              t ? "fixed top-[36px] lg:top-7 2xl:top-9" : "",
              " flex justify-between items-center px-4 xl:px-12 2xl:px-16 py-4 lg:py-0 z-50 bg-background"
            ),
            children: [
              (0, s.jsxs)("div", {
                className: "flex items-center gap-6 xl:gap-9 2xl:gap-16",
                children: [
                  (0, s.jsx)(n.default, {
                    href: "/",
                    children: (0, s.jsx)(i.default, {
                      src: l && l < 1100 ? o : c.Z,
                      alt: "Logo",
                      priority: !0,
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className: "hidden lg:flex gap-4 xl:gap-6 2xl:gap-8",
                    children:
                      null == d
                        ? void 0
                        : d.map((e) =>
                            (0, s.jsx)(
                              a.PrismicNextLink,
                              {
                                field: e.link,
                                className: "text-textBlack",
                                children: e.label,
                              },
                              e.label
                            )
                          ),
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "flex items-center gap-6 xl:gap-9 2xl:gap-16",
                children: [
                  (0, s.jsx)("div", {
                    className: "hidden lg:flex gap-4",
                    children:
                      null == u
                        ? void 0
                        : u.map((e, t) =>
                            (0, s.jsx)(
                              a.PrismicNextLink,
                              {
                                field: e.link,
                                className: "".concat(
                                  Object.keys(e.link).length < 2 &&
                                    "pointer-events-none"
                                ),
                                children: (0, s.jsx)(r.PrismicNextImage, {
                                  field: e.logo,
                                }),
                              },
                              t
                            )
                          ),
                  }),
                  (0, s.jsxs)("div", {
                    className: "hidden lg:flex gap-4",
                    children: [
                      (0, s.jsx)(x.Z, {
                        label: "Buy $FlowAI",
                        extraStyle:
                          "h-12 min-w-[159px] bg-textBlack hover:bg-transparent hover:text-textBlack px-8 hover:outline hover:outline-textBlack",
                        textColor: "text-white",
                        handleClick: () => window.open(j.h1, "_blank"),
                      }),
                      (0, s.jsx)(x.Z, {
                        label: "",
                        extraStyle:
                          "h-12 min-w-[159px] bg-primary hover:bg-primaryHover px-8 before:content-['Start_Trading'] ".concat(
                            !1
                          ),
                        textColor: "text-textBlack",
                        handleClick: () => {
                          window.open("https://app-flowx-ai.vercel.app/", "_blank");
                        },
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)(h, {}),
            ],
          });
        };
    },
    565: function (e, t, l) {
      "use strict";
      var s = l(2265),
        a = l(9413);
      t.Z = function () {
        let [e, t] = (0, s.useState)([]),
          [l, r] = (0, s.useState)([]);
        return (
          (0, s.useEffect)(() => {
            (async () => {
              let e = (0, a.e)(),
                l = await e.getSingle("settings");
              t([l.data.navigation[2]]),
                r([l.data.socials[1], l.data.socials[4]]);
            })();
          }, []),
          { navigation: e, socials: l }
        );
      };
    },
    1854: function (e, t, l) {
      "use strict";
      l.d(t, {
        default: function () {
          return g;
        },
      });
      var s = l(7437),
        a = l(2265),
        r = l(5267),
        i = l(9582),
        n = l(6648),
        c = l(6098),
        o = l.n(c),
        x = l(2088),
        d = {
          src: "/_next/static/media/playButton.a9316783.svg",
          height: 72,
          width: 72,
          blurWidth: 0,
          blurHeight: 0,
        },
        u = l(810);
      i.p8.registerPlugin(o());
      var g = () => {
        let [e, t] = (0, a.useState)(!1),
          { windowWidth: l } = (0, u.Z)(),
          c = (e) => {
            document.dispatchEvent(
              new CustomEvent("watchingVideo", { detail: { isPlaying: e } })
            );
          };
        return (
          (0, a.useEffect)(() => {
            let e = i.p8.timeline({}),
              t = new x.Z(".paragraph", { types: "words" });
            return (
              l && l > 1100
                ? (e.set("#AboutSection", {
                    scrollTrigger: {
                      trigger: "#AboutSection",
                      start: l && l > 1536 ? "top top" : "top+=100px top",
                      end: l && l > 1536 ? "bottom bottom" : "95% bottom",
                      pin: !0,
                      pinnedContainer: "#AboutSection",
                      scrub: 1,
                    },
                  }),
                  e.fromTo(
                    t.words,
                    { color: "#AAB9D0" },
                    {
                      color: "#1F242C",
                      stagger: 0.8,
                      scrollTrigger: {
                        trigger: "#AboutSection",
                        start: "top-=20% top",
                        end: "center top",
                        scrub: 1,
                      },
                    }
                  ))
                : l &&
                  l < 1100 &&
                  e.fromTo(
                    t.words,
                    { color: "#AAB9D0" },
                    {
                      color: "#1F242C",
                      stagger: 0.8,
                      scrollTrigger: {
                        trigger: "#AboutSection",
                        start: "top-=20% center",
                        end: "bottom 80%",
                        scrub: 1,
                      },
                    }
                  ),
              () => {
                e.kill();
              }
            );
          }, [l]),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)("div", {
                className:
                  "w-screen lg:h-[200vh] flex justify-center items-start py-32 lg:pt-64 px-4 lg:px-12",
                id: "AboutSection",
                children: (0, s.jsxs)("div", {
                  className:
                    "max-w-[1034px] flex flex-col justify-center items-center",
                  children: [
                    (0, s.jsx)("h1", {
                      className:
                        "font-medium text-[32px] lg:text-5xl text-textBlack",
                      children: "what is FlowAI?",
                    }),
                    (0, s.jsxs)("p", {
                      className:
                        "paragraph mt-6 lg:mt-12 text-xl lg:text-4xl text-center text-gray",
                      children: [
                        "FlowAI is an under development AI DEX that will disrupt the RWA and crypto trading space.",
                        (0, s.jsx)("br", {}),
                        (0, s.jsx)("br", {}),
                        "FlowAI is designed for intelligent execution, featuring a neural network-driven order book, deep liquidity through adaptive pools, utilizing on-chain verification systems.",
                      ],
                    }),
                    (0, s.jsx)("p", {
                      className: "font-medium hidden",
                      children: "Read More",
                    }),
                    // (0, s.jsx)(n.default, {
                    //   className: "mt-16 cursor-pointer",
                    //   src: d,
                    //   alt: "Play Button",
                    //   onClick: () => {
                    //     t(!0), c(!0);
                    //   },
                    // }),
                    // (0, s.jsx)("p", {
                    //   className:
                    //     "mt-6 mb-[6px] uppercase text-sm text-textBlack",
                    //   children: "what is FlowAI?",
                    // }),
                    // (0, s.jsx)("p", {
                    //   className: "text-sm text-gray",
                    //   children: "1:26",
                    // }),
                  ],
                }),
              }),
              (0, s.jsx)(r.Z, {
                open: e,
                onClose: () => {
                  t(!1), c(!1);
                },
                children: (0, s.jsx)("div", {
                  className:
                    "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:w-3/4 outline-none p-0 m-0",
                  children: (0, s.jsx)("div", {
                    className: "relative w-full h-0 pb-[56.25%]",
                    children: (0, s.jsx)("iframe", {
                      src: "https://www.youtube-nocookie.com/embed/Ur_sK8qGx0E?modestbranding=1&rel=0&autoplay=1",
                      frameBorder: "0",
                      allowFullScreen: !0,
                      className: "absolute top-0 left-0 w-full h-full",
                      allow: "autoplay",
                    }),
                  }),
                }),
              }),
            ],
          })
        );
      };
    },
    661: function (e, t, l) {
      "use strict";
      var s = l(7437),
        a = l(9582),
        r = l(2265),
        i = l(6098),
        n = l.n(i),
        c = l(2126);
      a.p8.registerPlugin(n());
      let o = [
        { header: "Total Trades", value: "300", change: "+250" },
        { header: "Todays Volume", value: "$442,586,183", change: "+10%" },
        { header: "Today's trades", value: "306,204", change: "-12%" },
        { header: "TOTAL VOLUME", value: "$127,068,300", change: "+1.7%" },
      ];
      t.default = () => {
        let [e, t] = (0, r.useState)(o),
          l = (0, r.useRef)(null);
        return (
          (0, r.useEffect)(() => {
            let e = a.p8.fromTo(
              l.current,
              { y: 100, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.75,
                scrollTrigger: { trigger: l.current, start: "top 80%" },
              }
            );
            return () => {
              e.kill();
            };
          }, []),
          (0, r.useEffect)(() => {
            let e;
            let l = async (e) => {
                try {
                  let l = await c.Z.get(
                    "".concat("https://api.FlowAI.trade", "/dashboard-data"),
                    { signal: e }
                  );
                  t(
                    l.data.landingPageStats.map((e) => {
                      var t;
                      return {
                        ...e,
                        value:
                          "$" === e.value[0]
                            ? "$".concat(
                                Number(
                                  null === (t = e.value.split("$")) ||
                                    void 0 === t
                                    ? void 0
                                    : t[1]
                                ).toLocaleString()
                              )
                            : Number(e.value).toLocaleString(),
                      };
                    })
                  );
                } catch (e) {
                  console.log("Error fetching data: ", e);
                }
              },
              s = new AbortController(),
              { signal: a } = s;
            return (
              l(a),
              (e = setInterval(() => {
                l(a);
              }, 1e4)),
              () => {
                s.abort(), clearInterval(e);
              }
            );
          }, []),
          (0, s.jsx)("div", {
            className:
              "w-screen flex justify-center items-start pb-0 pt-24 lg:pt-32 px-4 lg:px-12",
            id: "DataSection",
            children: (0, s.jsxs)("div", {
              ref: l,
              className:
                "w-full max-w-[1408px] flex flex-col justify-center items-center",
              children: [
                (0, s.jsx)("h1", {
                  className:
                    "font-medium text-[32px] lg:text-5xl text-textBlack",
                  children: "Ethereum stats",
                }),
                (0, s.jsx)("div", {
                  className:
                    "w-full flex flex-wrap justify-center items-center gap-4 md:gap-8 mt-6 lg:mt-12",
                  children:
                    null == e
                      ? void 0
                      : e.map((e, t) =>
                          (0, s.jsxs)(
                            "div",
                            {
                              className:
                                "flex-1 flex flex-col items-center sm:items-start gap-3 rounded-2xl p-8 bg-lightGray",
                              children: [
                                (0, s.jsx)("h1", {
                                  className:
                                    "text-sm font-normal leading-[100%] tracking-[10%] uppercase text-textBlack",
                                  children: "e.header",
                                }),
                                (0, s.jsxs)("div", {
                                  className: "flex items-end gap-2",
                                  children: [
                                    (0, s.jsx)("h1", {
                                      className:
                                        "text-2xl font-medium leading-[100%] tracking-[0%] text-textBlack",
                                      children: "-----",
                                    }),
                                    (0, s.jsx)("p", {
                                      className:
                                        "text-sm font-normal leading-[100%] tracking-[10%] ".concat(
                                          "+" === e.change[0]
                                            ? "text-textGreen"
                                            : "text-textRed"
                                        ),
                                      children: "-----",
                                    }),
                                  ],
                                }),
                              ],
                            },
                            t
                          )
                        ),
                }),
              ],
            }),
          })
        );
      };
    },
    6031: function (e, t, l) {
      "use strict";
      var s = l(7437),
        a = l(4204),
        r = l(3196),
        i = l(4907),
        n = l(2030),
        c = l(2265),
        o = l(9582),
        x = l(6098),
        d = l.n(x),
        u = l(8125),
        g = l(9459),
        p = l(8377),
        f = l(810);
      o.p8.registerPlugin(d()),
        (t.default = () => {
          let { windowWidth: e } = (0, f.Z)(),
            [t, l] = (0, c.useState)([]),
            x = (0, c.useRef)(null);
          (0, c.useEffect)(() => {
            let e = o.p8.fromTo(
              x.current,
              { y: 100, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.75,
                scrollTrigger: { trigger: x.current, start: "top 80%" },
              }
            );
            return () => {
              e.kill();
            };
          }, []);
          let d = (c, o, x) =>
            (0, s.jsxs)(
              a.Z,
              {
                style: {
                  marginTop: e && e > 1100 ? "24px" : "16px",
                  backgroundColor:
                    -1 !== t.findIndex((e) => e === x) ? "#1F242C" : "#DCE1F5",
                  color:
                    -1 !== t.findIndex((e) => e === x) ? "#FFFFFF" : "#1F242C",
                  borderRadius: "16px",
                  boxShadow: "none",
                  width: "100%",
                },
                onChange: (e, s) => {
                  if (s) l((e) => [...e, x]);
                  else {
                    let e = t.findIndex((e) => e === x),
                      s = [...t];
                    s.splice(e, 1), l(s);
                  }
                },
                sx: {
                  "&:before": { display: "none" },
                  ".css-i4bv87-MuiSvgIcon-root": {
                    color:
                      -1 !== t.findIndex((e) => e === x)
                        ? "#4FDFFF"
                        : "#1F242C",
                  },
                  ".css-vubbuv": {
                    color:
                      -1 !== t.findIndex((e) => e === x)
                        ? "#4FDFFF"
                        : "#1F242C",
                  },
                },
                children: [
                  (0, s.jsx)(r.Z, {
                    className:
                      "font-medium text-xl lg:text-2xl lowercase py-3 px-6 lg:px-8",
                    expandIcon: (0, s.jsx)(u.Z, {}),
                    "aria-controls": "panel1-content",
                    id: "panel1-header",
                    children: c,
                  }),
                  (0, s.jsxs)(i.Z, {
                    className: "text-basic ",
                    style: { fontSize: "16px" },
                    children: [
                      (0, s.jsx)(n.Z, {
                        style: { marginBottom: "24px" },
                        className: "static bg-divider",
                      }),
                      (0, s.jsx)("div", {
                        className: "flex flex-col gap-4",
                        children: o.map((e, t) =>
                          (0, s.jsx)("p", { children: e }, t)
                        ),
                      }),
                    ],
                  }),
                ],
              },
              c
            );
          return (0, s.jsx)("div", {
            ref: x,
            className:
              "w-screen max-w-[1664px] mb-24 lg:mb-32 flex justify-center items-center px-0 1.5xl:px-12 opacity-0",
            children: (0, s.jsxs)("div", {
              className:
                "w-full flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between items-start px-4 lg:px-16 1.5xl:px-32",
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "w-full lg:min-w-[350px] lg:max-w-[350px] flex flex-col justify-center items-center lg:items-start gap-6 lg:gap-12",
                  children: [
                    (0, s.jsx)("h1", {
                      className:
                        "font-medium text-[32px] text-center lg:text-start lg:text-5xl text-textBlack",
                      children: "frequently asked questions",
                    }),
                    (0, s.jsx)(p.Z, {
                      label: "Document",
                      extraStyle: "".concat(
                        e && e < 1100 ? "w-full" : "w-fit",
                        " bg-background hover:bg-lightGray outline px-8 py-4"
                      ),
                      textColor: "text-textBlack",
                      handleClick: () =>
                        window.open("https://doc.FlowAI.trade/", "_blank"),
                    }),
                  ],
                }),
                (0, s.jsx)("div", {
                  className:
                    "w-full lg:max-w-[900px] flex flex-col justify-center items-start",
                  children: g.Ty.map((e, t) => d(e.question, e.answer, t)),
                }),
              ],
            }),
          });
        });
    },
    7912: function (e, t, l) {
      "use strict";
      l.d(t, {
        default: function () {
          return g;
        },
      });
      var s = l(7437),
        a = l(2265),
        r = l(9582),
        i = l(6098),
        n = l.n(i),
        c = l(9459),
        o = l(828),
        x = l(6648),
        d = l(9424);
      l(1239);
      var u = (e) => {
        let { cardColor: t, cards: l } = e;
        return (0, s.jsx)(d.default, {
          responsive: c.m_,
          className: "w-full",
          arrows: !1,
          ssr: !0,
          autoPlay: !0,
          autoPlaySpeed: 2e3,
          customTransition: "transform 2000ms ease-in-out",
          infinite: !0,
          rewind: !1,
          rewindWithAnimation: !1,
          rtl: !1,
          shouldResetAutoplay: !1,
          transitionDuration: 2e3,
          slidesToSlide: 3,
          swipeable: !1,
          draggable: !1,
          children: l.map((e, l) =>
            (0, s.jsx)(
              "div",
              {
                className:
                  "w-[95%] h-[128px] mx-2 flex justify-center items-center rounded-3xl "
                    .concat(t, " ")
                    .concat(e.link.length > 0 ? "cursor-pointer" : ""),
                onClick: () => {
                  e.link.length > 0 && window.open(e.link, "_blank");
                },
                children: (0, s.jsx)(x.default, {
                  className: "".concat(0 === l ? "max-w-28" : "scale-125"),
                  src: e.icon,
                  alt: "Supported by ".concat(l),
                  unoptimized: !0,
                  loading: "eager",
                }),
              },
              l
            )
          ),
        });
      };
      r.p8.registerPlugin(n());
      var g = () => {
        let e = (0, a.useRef)(null);
        return (
          (0, a.useEffect)(() => {
            let t = r.p8.fromTo(
              e.current,
              { y: 100, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.75,
                scrollTrigger: { trigger: e.current, start: "top 80%" },
              }
            );
            return () => {
              t.kill();
            };
          }, []),
          (0, a.useEffect)(() => {
            let e = r.p8.to(".ticker-content", {
              xPercent: -100,
              repeat: -1,
              duration: 30,
              ease: "linear",
              modifiers: { xPercent: r.p8.utils.wrap(-100, 0) },
            });
            return () => {
              e.kill();
            };
          }, [])
        );
      };
    },
    6741: function (e, t, l) {
      "use strict";
      l.d(t, {
        default: function () {
          return b;
        },
      });
      var s = l(7437),
        a = l(2265),
        r = l(6648),
        i = l(9582),
        n = l(6098),
        c = l.n(n),
        o = l(810),
        x = (e) => {
          let { id: t, size: l, backgroundColor: a, children: r } = e,
            { windowWidth: i } = (0, o.Z)();
          return (0, s.jsx)("div", {
            id: t,
            className:
              "my-2 mx-0 lg:m-4 px-6 lg:px-8 py-6 lg:py-8 pb-0 rounded-[32px] opacity-0 ".concat(
                a,
                " cursor-pointer hover:scale-105 duration-200"
              ),
            style: {
              gridRowEnd:
                "small" === l
                  ? i && i > 1100
                    ? "span 35"
                    : "span 28"
                  : i && i > 1100
                  ? "span 70"
                  : "span 55",
            },
            children: r,
          });
        },
        d = {
          src: "/_next/static/media/bento1.25ac11ab.png",
          height: 1104,
          width: 1344,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAV1BMVEVMaXF42PHc4fPX3O/e1ORZ1fGK2vHo5vjU2OvL0OPN0+bEydzV2OnBy92d4Pnd2OpTpsI1ss6J2vNd0e15yOIux+dT3vlNw97f5/rV1+rb4PTM5PmMyuG7CQPqAAAAGHRSTlMA/sajRPz7/Flt/OKlNv6hN/vWubs3hH2vVBQxAAAACXBIWXMAACE4AAAhOAFFljFgAAAAOklEQVR4nAXBCwKAEBBAwaew9ENUS93/nM0AxG4B7LZqBLLXvowA1blXxgT3Vw7RGS5jvGgAnnamHX5CcwJB2Odv5QAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 7,
        },
        u = {
          src: "/_next/static/media/bento2.e0813d7d.svg",
          height: 48,
          width: 48,
          blurWidth: 0,
          blurHeight: 0,
        },
        g = {
          src: "/_next/static/media/bento3.815e5785.png",
          height: 674,
          width: 716,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAUVBMVEVMaXHL0OXGytvu5vrT3O/h1ejr8/vN1efn5+fb2+Xg6fuWnKjP1eagobDKzuGqrr9v0+6/w9VPyeW3vMyu4Pbn6/7p7f/M5/yS3vXHx9hc0/DXttqwAAAAGHRSTlMAGFyH+iTnLwcQ/Syxsol8/HT72vng//4CYFMkAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAQElEQVR4nCXIWQ6AIAwA0QFaC7hvgN7/oIY4Xy8DEEd6us7PFMGdInVIYCVvr2hHPdp/SrsCYPkOui8OLIH38QNN1AI3LQpEXQAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 8,
        },
        p = {
          src: "/_next/static/media/bento4.a54f2fa9.svg",
          height: 48,
          width: 48,
          blurWidth: 0,
          blurHeight: 0,
        },
        f = {
          src: "/_next/static/media/bento5.bae0136b.svg",
          height: 48,
          width: 48,
          blurWidth: 0,
          blurHeight: 0,
        },
        m = {
          src: "/_next/static/media/bento6.f356dd6c.png",
          height: 1680,
          width: 1344,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAM1BMVEVMaXGkqaalqq/07vDU1dzg5eqwtrtaXHLm3+Pw8vTc3uPy9PZiYonR0trMzNL9/P308/WsHxmxAAAAD3RSTlMAMRzx6P5pFhv66P4N0MHzwpEcAAAACXBIWXMAACE4AAAhOAFFljFgAAAALklEQVR4nGNggAImNj4mBgYeXlZuRgYGdhZ+TjAlwMoGojgFODkY2Ln4+ZlhFAAaAgE2O7CqkgAAAABJRU5ErkJggg==",
          blurWidth: 6,
          blurHeight: 8,
        },
        h = {
          src: "/_next/static/media/bento7.4fb93090.svg",
          height: 48,
          width: 48,
          blurWidth: 0,
          blurHeight: 0,
        },
        w = {
          src: "/_next/static/media/bento8.47baa1ff.png",
          height: 597,
          width: 1344,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAOVBMVEVMaXHQ1elEvNiC0+0xdozF0eNK0u9RfZvM2ek8yOba2utK2PfV2Oqe6vug2fDL0uPw8vxN2PFd+f8IvXoJAAAAEHRSTlMApn+eJ5LrCng966Sy/sRKYYRVlwAAAAlwSFlzAAAhOAAAITgBRZYxYAAAAChJREFUeJwFwQkCABAIAMFFVM74/2PNAIhUU9RH22GQ71sRCdRLn0f5D2YA9tQHZj8AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 4,
        };
      i.p8.registerPlugin(c());
      let j = (e) => [
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          scrollTrigger: { trigger: e, start: "top 75%" },
        },
      ];
      var b = () => {
        let { windowWidth: e } = (0, o.Z)(),
          t = (0, a.useRef)(null);
        return (
          (0, a.useEffect)(() => {
            let l = i.p8.timeline({
              scrollTrigger: { trigger: "#FeatureSection", start: "top 70%" },
            });
            l.fromTo(
              t.current,
              { y: 100, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.75 }
            );
            let s = i.p8.fromTo(
                "#firstCard",
                j("#firstCard")[0],
                j("#firstCard")[1]
              ),
              a = i.p8.fromTo("#secondCard", j("#secondCard")[0], {
                y: 0,
                opacity: 1,
                duration: 0.75,
                delay: 0.1,
                scrollTrigger: { trigger: "#secondCard", start: "top 75%" },
              }),
              r = i.p8.fromTo(
                "#thirdCard",
                j("#thirdCard")[0],
                j("#thirdCard")[1]
              ),
              n = i.p8.fromTo(
                "#fourthCard",
                j("#fourthCard")[0],
                j("#fourthCard")[1]
              ),
              c = i.p8.fromTo(
                "#fifthCard",
                j("#fifthCard")[0],
                j("#fifthCard")[1]
              ),
              o = i.p8.fromTo(
                "#sixthCard",
                j("#sixthCard")[0],
                j("#sixthCard")[1]
              ),
              x = i.p8.fromTo("#seventhCard", j("#seventhCard")[0], {
                y: 0,
                opacity: 1,
                duration: 0.75,
                delay: e && e > 1100 ? 0.3 : 0,
                scrollTrigger: { trigger: "#seventhCard", start: "top 75%" },
              }),
              d = i.p8.fromTo(
                "#eighthCard",
                j("#eighthCard")[0],
                j("#eighthCard")[1]
              );
            return () => {
              l.kill(),
                s.kill(),
                a.kill(),
                r.kill(),
                n.kill(),
                c.kill(),
                o.kill(),
                x.kill(),
                d.kill();
            };
          }, [e]),
          (0, s.jsx)("div", {
            id: "FeatureSection",
            className:
              "w-screen max-w-[1664px] lg:my-32 flex justify-center items-center my-24 z-20",
            children: (0, s.jsxs)("div", {
              className:
                "w-full flex flex-col gap-8 lg:gap-12 justify-center items-center px-4 rounded-[48px] bg-backgroun",
              children: [
                (0, s.jsxs)("div", {
                  className: "flex flex-col gap-4 opacity-0",
                  ref: t,
                  children: [
                    (0, s.jsx)("h1", {
                      className:
                        "max-w-[600px] font-medium text-[32px] lg:text-5xl text-center lowercase text-textBlack",
                      children:
                        "Imagine Trading on a DEX With the Intelligence of AI",
                    }),
                    (0, s.jsx)("p", {
                      className:
                        "text-xl lg:text-2xl text-center text-textBlack",
                      children:
                        "All the intelligence of AI, on-chain and fully decentralized.",
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className: "w-full m-0 p-0 grid justify-center",
                  style: {
                    gridTemplateColumns: "repeat(auto-fill,".concat(
                      e && e < 1100 ? "100%" : "448px",
                      ")"
                    ),
                    gridAutoRows: "10px",
                  },
                  children: [
                    (0, s.jsx)(x, {
                      id: "firstCard",
                      size: "large",
                      backgroundColor: "bg-textBlack",
                      children: (0, s.jsxs)("div", {
                        className:
                          "w-full h-full flex flex-col gap-14 lg:gap-24 justify-start items-start",
                        children: [
                          (0, s.jsxs)("div", {
                            className: "flex flex-col gap-4",
                            children: [
                              (0, s.jsx)("h1", {
                                className:
                                  "text-xl lg:text-2xl font-medium lowercase text-white",
                                children: "global real world asset marketplace",
                              }),
                              (0, s.jsx)("p", {
                                className: "text-white",
                                children:
                                  "The first RWA enabled global marketplace for trading real world assets, fully on-chain and completely decentralized.",
                              }),
                            ],
                          }),
                          (0, s.jsx)(r.default, {
                            src: d,
                            alt: "Image",
                            unoptimized: !0,
                            loading: "lazy",
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsx)(x, {
                      id: "secondCard",
                      size: "small",
                      backgroundColor: "bg-background border border-textBlack",
                      children: (0, s.jsxs)("div", {
                        className:
                          "w-full h-full flex flex-col gap-6 lg:gap-0 justify-start lg:justify-between items-start",
                        children: [
                          (0, s.jsx)(r.default, { src: u, alt: "Image" }),
                          (0, s.jsxs)("div", {
                            className: "flex flex-col gap-4",
                            children: [
                              (0, s.jsx)("h1", {
                                className:
                                  "text-xl lg:text-2xl font-medium lowercase text-textBlack",
                                children: "P2P Repo Lending",
                              }),
                              (0, s.jsx)("p", {
                                className: "text-textBlack",
                                children:
                                  "Revolutionizing decentralized finance by\xa0facilitating direct, peer-to-peer lending transactions with unmatched efficiency.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsx)(x, {
                      id: "thirdCard",
                      size: "large",
                      backgroundColor: "bg-textBlack",
                      children: (0, s.jsxs)("div", {
                        className:
                          "w-full h-full flex flex-col gap-28 lg:gap-48 justify-start items-start",
                        children: [
                          (0, s.jsxs)("div", {
                            className: "flex flex-col gap-4",
                            children: [
                              (0, s.jsxs)("h1", {
                                className:
                                  "text-xl lg:text-2xl font-medium lowercase text-white",
                                children: ["Zero Price Impact Auctions", " "],
                              }),
                              (0, s.jsx)("p", {
                                className: "text-white",
                                children:
                                  "Experience seamless trading with auctions, designed for zero price impact and optimal execution.",
                              }),
                            ],
                          }),
                          (0, s.jsx)(r.default, {
                            src: w,
                            alt: "Image",
                            unoptimized: !0,
                            loading: "lazy",
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsx)(x, {
                      id: "fourthCard",
                      size: "large",
                      backgroundColor: "bg-primary",
                      children: (0, s.jsxs)("div", {
                        className:
                          "w-full h-full flex flex-col gap-0 lg:gap-8 justify-start items-start",
                        children: [
                          (0, s.jsxs)("div", {
                            className: "flex flex-col gap-4",
                            children: [
                              (0, s.jsx)("h1", {
                                className:
                                  "text-xl lg:text-2xl font-medium lowercase text-textBlack",
                                children:
                                  "Fully trustless on-chain\xa0Order Book",
                              }),
                              (0, s.jsx)("p", {
                                className: "text-textBlack",
                                children:
                                  "On-chain order book handling 1b+ orders/cancellations per tick price, enhanced by Dynamic Bracket Pools for improved market liquidity.",
                              }),
                            ],
                          }),
                          (0, s.jsx)(r.default, {
                            src: m,
                            alt: "Image",
                            unoptimized: !0,
                            loading: "lazy",
                            className: "overflow-hidden lg:translate-y-8",
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsx)(x, {
                      id: "fifthCard",
                      size: "large",
                      backgroundColor: "bg-lightGray",
                      children: (0, s.jsxs)("div", {
                        className:
                          "w-full h-full flex flex-col gap-14 lg:gap-24 justify-start items-start",
                        children: [
                          (0, s.jsxs)("div", {
                            className: "flex flex-col gap-4",
                            children: [
                              (0, s.jsx)("h1", {
                                className:
                                  "text-xl lg:text-2xl font-medium lowercase text-textBlack",
                                children: "Trustless RFQs",
                              }),
                              (0, s.jsx)("p", {
                                className: "text-textBlack",
                                children:
                                  "Experience trustless RFQs, where decentralized protocols ensure transparent and secure quote requests.",
                              }),
                            ],
                          }),
                          (0, s.jsx)(r.default, {
                            src: g,
                            alt: "Image",
                            unoptimized: !0,
                            loading: "lazy",
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsx)(x, {
                      id: "sixthCard",
                      size: "small",
                      backgroundColor: "bg-background border border-textBlack",
                      children: (0, s.jsxs)("div", {
                        className:
                          "w-full h-full flex flex-col gap-6 lg:gap-0 justify-start lg:justify-between items-start",
                        children: [
                          (0, s.jsx)(r.default, { src: h, alt: "Image" }),
                          (0, s.jsxs)("div", {
                            className: "flex flex-col gap-4",
                            children: [
                              (0, s.jsxs)("h1", {
                                className:
                                  "text-xl lg:text-2xl font-medium lowercase text-textBlack",
                                children: ["MEV Bot Protection", " "],
                              }),
                              (0, s.jsx)("p", {
                                className: "text-textBlack",
                                children:
                                  "Trade confidently and dodge front-runners with our robust MEV bot protection.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsx)(x, {
                      id: "seventhCard",
                      size: "small",
                      backgroundColor: "bg-lightGray",
                      children: (0, s.jsxs)("div", {
                        className:
                          "w-full h-full flex flex-col gap-6 lg:gap-0 justify-start lg:justify-between items-start",
                        children: [
                          (0, s.jsx)(r.default, { src: p, alt: "Image" }),
                          (0, s.jsxs)("div", {
                            className: "flex flex-col gap-4",
                            children: [
                              (0, s.jsx)("h1", {
                                className:
                                  "text-xl lg:text-2xl font-medium lowercase text-textBlack",
                                children: "Low Latency Networks",
                              }),
                              (0, s.jsx)("p", {
                                className: "text-textBlack",
                                children:
                                  "Our advanced low-latency networks ensure lightning-fast trade executions, optimizing your trading experience.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsx)(x, {
                      id: "eighthCard",
                      size: "small",
                      backgroundColor: "bg-lightGray",
                      children: (0, s.jsxs)("div", {
                        className:
                          "w-full h-full flex flex-col gap-6 lg:gap-0 justify-start lg:justify-between items-start",
                        children: [
                          (0, s.jsx)(r.default, { src: f, alt: "Image" }),
                          (0, s.jsxs)("div", {
                            className: "flex flex-col gap-4",
                            children: [
                              (0, s.jsx)("h1", {
                                className:
                                  "text-xl lg:text-2xl font-medium lowercase text-textBlack",
                                children: "Industry Standard FIX APIs",
                              }),
                              (0, s.jsx)("p", {
                                className: "text-textBlack",
                                children:
                                  "We offer FIX APIs, ensuring seamless and efficient connectivity for professional trading environments.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      };
    },
    9100: function (e, t, l) {
      "use strict";
      l.d(t, {
        default: function () {
          return m;
        },
      });
      var s = l(7437),
        a = l(2265),
        r = l(9582),
        i = l(2801),
        n = l(6648),
        c = l(6098),
        o = l.n(c),
        x = l(9459),
        d = l(8377),
        u = {
          src: "/_next/static/media/heroImage.336a58d0.png",
          height: 3080,
          width: 3008,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEUkKDA9QkwkKjMgKTJHS1QlKjMzOUIpMDk7QUrJj7V8AAAABXRSTlM/vVVW+Dvy0wYAAAAJcEhZcwAALEsAACxLAaU9lqkAAAAuSURBVHicJcq3EQAwDMNAOjDsP7GP1lcogC2zcOQPS1EhbNiIYnJi5lgTVwv1ADT8AVtV09syAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 8,
        },
        g = l(828),
        p = l(2171),
        f = l(4385);
      r.p8.registerPlugin(o(), i.L);
      var m = () => {
        let [e, t] = (0, a.useState)(!1),
          l = (0, a.useRef)(null);
        return (
          (0, a.useEffect)(() => {
            let e = r.p8.fromTo(
              l.current,
              { y: 100, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.75,
                scrollTrigger: { trigger: l.current, start: "top 80%" },
              }
            );
            return () => {
              e.kill();
            };
          }, []),
          (0, a.useEffect)(() => {
            let e = () => {
              let e = document.getElementById("hero-section");
              e && t(e.getBoundingClientRect().top <= 0);
            };
            return (
              window.addEventListener("scroll", e),
              () => window.removeEventListener("scroll", e)
            );
          }, []),
          (0, s.jsxs)("div", {
            id: "hero-section",
            className:
              "relative w-screen min-h-screen tall:min-h-full flex justify-center items-start gap-16 px-4 lg:px-12 pt-[124px] tall:pt-56 2xl:pt-[140px] overflow-x-hidden overflow-y-hidden",
            children: [
              (0, s.jsxs)("div", {
                className: "absolute top-0 left-0",
                children: [
                  // (0, s.jsx)(p.default, { isSticky: e }),
                  (0, s.jsx)(f.default, { isSticky: e }),
                ],
              }),
              (0, s.jsxs)("div", {
                ref: l,
                className: "w-full lg:w-fit flex flex-col opacity-0",
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "w-full flex flex-col lg:flex-row justify-center lg:justify-start 1.5xl:justify-center items-center",
                    children: [
                      (0, s.jsxs)("div", {
                        className:
                          "lg:min-w-[580px] lg:max-w-[619px] flex flex-grow flex-col",
                        children: [
                          (0, s.jsxs)("h1", {
                            className:
                              "static lg:hidden font-medium text-[40px] lg:text-[64px] text-textBlack",
                            children: [
                              "the DEX with ",
                              (0, s.jsx)("br", {}),
                              "AI appeal",
                            ],
                          }),
                          (0, s.jsxs)("h1", {
                            className:
                              "hidden lg:flex justify-start font-medium text-[40px] lg:text-[64px] leading-[1.2] 2xl:leading-tight  text-textBlack",
                            children: [
                              "the DEX with ",
                              (0, s.jsx)("br", {}),
                              "AI appeal",
                            ],
                          }),
                          (0, s.jsx)("p", {
                            className:
                              "max-w-[548px] mt-4 mb-6 lg:mb-6 text-xl lg:text-2xl text-textBlack",
                            children:
                              "FlowAI is a DeFi protocol for the next generation intelligent trading. Trade crypto & RWAs with AI driven execution & max institutional liquidity on FlowAI, fully on chain.",
                          }),
                          (0, s.jsxs)("div", {
                            className:
                              "flex flex-col lg:flex-row gap-4 lg:mb-16 2xl:mb-24",
                            children: [
                              (0, s.jsx)(d.Z, {
                                label: "",
                                extraStyle:
                                  "min-w-[191px] bg-primary hover:bg-primaryHover py-6 px-12 before:content-['Start_Trading'] ".concat(
                                    !1
                                  ),
                                textColor: "text-textBlack",
                                handleClick: () => {
                                  window.open(
                                    "https://app-flowx-ai.vercel.app/",
                                    "_blank"
                                  );
                                },
                              }),
                              (0, s.jsx)(d.Z, {
                                label: "Buy $FlowAI",
                                extraStyle:
                                  "bg-transparent hover:bg-lightGray outline py-6 px-12",
                                textColor: "text-textBlack",
                                handleClick: () => window.open(x.h1, "_blank"),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsx)(n.default, {
                        src: u,
                        alt: "Hero Image",
                        unoptimized: !0,
                        className:
                          "lg:max-w-[480px] 2xl:max-w-[580px] scale-110 translate-x-4 lg:translate-x-0 lg:scale-100 mt-20 lg:mt-0",
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "w-full h-full lg:hidden flex flex-col items-center justify-center mt-12",
                        children: [
                          (0, s.jsx)("p", {
                            className: "uppercase text-sm mb-8 text-gray",
                            children: "supported by",
                          }),
                          (0, s.jsx)(g.Z, {
                            cardColor: "bg-lightGray",
                            cards: x.Z9,
                          }),
                        ],
                      }),
                    ],
                  }),

                ],
              }),
            ],
          })
        );
      };
    },
    7763: function (e, t, l) {
      "use strict";
      var s = l(7437),
        a = l(9582),
        r = l(2265),
        i = l(3297),
        n = l(3038),
        c = l(6098),
        o = l.n(c),
        x = l(9424);
      l(1239);
      var d = l(9459),
        u = l(414),
        g = l(8377),
        p = l(810);
      let f = 100 / 3;
      a.p8.registerPlugin(o()),
        (t.default = () => {
          let { allBlogPosts: e } = (0, u.b)(),
            { windowWidth: t } = (0, p.Z)(),
            [l, c] = (0, r.useState)(0),
            [o, m] = (0, r.useState)([]),
            h = (0, r.useRef)(null);
          return (
            (0, r.useEffect)(() => {
              let e = a.p8.fromTo(
                h.current,
                { y: 100, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.75,
                  scrollTrigger: { trigger: h.current, start: "top 80%" },
                }
              );
              return () => {
                e.kill();
              };
            }, []),
            (0, r.useEffect)(() => {
              e.length > 0 && m(e.slice(0, 3));
            }, [e]),
            (0, s.jsx)("div", {
              ref: h,
              className:
                "w-screen max-w-[1664px] mb-24 lg:mb-32 flex justify-center items-center px-0 1.5xl:px-12 opacity-0 hidden",
              children: (0, s.jsxs)("div", {
                className:
                  "w-full flex flex-col gap-8 lg:gap-12 justify-center items-center lg:px-16 1.5xl:px-32",
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "w-full flex flex-col lg:flex-row justify-center items-center lg:justify-between gap-6 lg:gap-0",
                    children: [
                      (0, s.jsxs)("div", {
                        className:
                          "w-full flex flex-col lg:flex-row gap-4 lg:gap-6",
                        children: [
                          (0, s.jsx)("h1", {
                            className:
                              "font-medium text-[32px] text-center lg:text-start lg:text-5xl px-4 text-textBlack",
                            children: "the FlowAI blog",
                          }),
                          (0, s.jsx)("p", {
                            className:
                              "w-full lg:max-w-[450px] text-xl lg:text-2xl text-center lg:text-start px-4 text-textBlack",
                            children:
                              "the ideas, innovation, and technology shaping a trustless trading future",
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className: "w-full lg:w-fit flex justify-end px-4",
                        children: (0, s.jsx)(g.Z, {
                          label: "Read Blog",
                          extraStyle: "".concat(
                            t && t > 1100 ? "w-fit" : "w-full",
                            " bg-background hover:bg-lightGray outline whitespace-nowrap py-4 px-8 mx-4"
                          ),
                          textColor: "text-textBlack",
                          handleClick: () => window.open("/blog", "_self"),
                        }),
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "".concat(
                      t && t > 1100 ? "flex" : "hidden",
                      " w-full flex gap-8 justify-center items-stretch flex-wrap lg:flex-nowrap"
                    ),
                    children: o.map((e) =>
                      (0, s.jsxs)(
                        i.PrismicNextLink,
                        {
                          field: e.url,
                          className:
                            "w-full flex flex-col justify-start items-start rounded-3xl px-4 pt-4 pb-8 cursor-pointer bg-lightGray hover:outline hover:outline-textBlack",
                          children: [
                            (0, s.jsx)(n.PrismicNextImage, {
                              field: e.blogImage,
                              className: "rounded-[4px]",
                            }),
                            (0, s.jsx)("p", {
                              className:
                                "uppercase text-sm mt-8 mb-4 text-textBlack",
                              children: e.date,
                            }),
                            (0, s.jsx)("h1", {
                              className: "text-2xl font-medium text-textBlack",
                              children: e.title,
                            }),
                          ],
                        },
                        e.id
                      )
                    ),
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "sm:hidden w-full h-full flex flex-col items-center justify-center gap-8",
                    children: [
                      (0, s.jsx)(x.default, {
                        responsive: d.m_,
                        className: "w-full",
                        arrows: !1,
                        ssr: !0,
                        afterChange: (e, t) => {
                          let { currentSlide: l } = t;
                          return c(l);
                        },
                        children: o.map((e) =>
                          (0, s.jsxs)(
                            i.PrismicNextLink,
                            {
                              field: e.url,
                              className:
                                "w-fit mx-4 min-h-[430px] flex flex-col justify-start items-start rounded-3xl px-4 pt-4 pb-8 cursor-pointer bg-lightGray",
                              children: [
                                (0, s.jsx)(n.PrismicNextImage, {
                                  field: e.blogImage,
                                  className: "rounded-[4px]",
                                }),
                                (0, s.jsx)("p", {
                                  className:
                                    "uppercase text-sm mt-8 mb-4 text-textBlack",
                                  children: e.date,
                                }),
                                (0, s.jsx)("h1", {
                                  className:
                                    "text-2xl font-medium text-textBlack",
                                  children: e.title,
                                }),
                              ],
                            },
                            e.id
                          )
                        ),
                      }),
                      (0, s.jsx)("div", {
                        className: "w-full px-4",
                        children: (0, s.jsxs)("div", {
                          className:
                            "w-full h-1 flex flex-col justify-center items-center relative",
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "w-1/3 h-[2px] rounded-t-sm bg-textBlack absolute transition-all duration-300 ease-in-out -translate-y-[1px]",
                              style: { left: "".concat(l * f, "%") },
                            }),
                            (0, s.jsx)("div", {
                              className: "w-full h-[1px] bg-[#C8CDE1]",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        });
    },
    3090: function (e, t, l) {
      "use strict";
      l.d(t, {
        default: function () {
          return g;
        },
      });
      var s = l(7437),
        a = l(2265),
        r = l(9582),
        i = l(6098),
        n = l.n(i),
        c = l(6648),
        o = l(2126),
        x = l(9459),
        d = l(8377),
        u = {
          src: "/_next/static/media/envelope.e025710b.png",
          height: 492,
          width: 716,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAQlBMVEVMaXHV2OuS3vdD0O/o6/zf6PnZ2etJs8xAvtpNy+jm4fQ9y+zW3O7q6Pdd5PzBzNYuttC0ydy30eXx9/9K4P+05/mdJOMMAAAAE3RSTlMAUP1i/udiWxvb+Ta44vQZfmD3/Rz+aAAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAACxJREFUeJwFwYUBACAMwLCiG+7/v0oCjBoRARNOS0lZx+fXC0jw9jqAuKcCHxsxASmR95lWAAAAAElFTkSuQmCC",
          blurWidth: 8,
          blurHeight: 5,
        };
      r.p8.registerPlugin(n());
      var g = () => {
        let [e, t] = (0, a.useState)(""),
          [l, i] = (0, a.useState)(!1),
          [n, g] = (0, a.useState)(!1),
          [p, f] = (0, a.useState)("Sign Up"),
          m = (0, a.useRef)(null);
        return (
          (0, a.useEffect)(() => {
            let e = r.p8.fromTo(
              m.current,
              { y: 100, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.75,
                scrollTrigger: { trigger: m.current, start: "top 80%" },
              }
            );
            return () => {
              e.kill();
            };
          }, []),
          (0, a.useEffect)(() => {
            if (l) {
              let e = setTimeout(() => {
                f(x.Y5);
              }, 400);
              return () => clearTimeout(e);
            }
            f("Sign Up");
          }, [l]),
          (0, a.useEffect)(() => {
            let t = async () => {
              g(!1);
              try {
                await o.Z.post("/api", { email: e });
              } catch (e) {
                console.log("Error:", e);
              }
            };
            URL && l && t();
          }, [l]),
          (0, s.jsx)("div", {
            id: "newsletter-section",
            ref: m,
            className:
              "w-screen max-w-[1664px] mb-24 lg:mb-32 flex justify-center items-center px-0 1.5xl:px-12 opacity-0 hidden",
            children: (0, s.jsxs)("div", {
              className:
                "w-full flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between items-center py-24 lg:py-14 px-4 lg:px-12 1.5xl:px-32 rounded-[48px] bg-lightGray",
              children: [
                (0, s.jsxs)("div", {
                  className: "flex flex-col",
                  children: [
                    (0, s.jsx)("h1", {
                      className:
                        "font-medium text-[32px] text-center lg:text-start lg:text-5xl text-textBlack",
                      children: "newsletter",
                    }),
                    (0, s.jsx)("p", {
                      className:
                        "mt-4 lg:mt-[18px] mb-8 lg:mb-12 text-xl lg:text-2xl text-center lg:text-start text-textBlack",
                      children: "Sign up for updates, news and more from FlowAI",
                    }),
                    (0, s.jsxs)("div", {
                      className:
                        "max-w-[448px] flex rounded-[64px] bg-offWhite",
                      children: [
                        (0, s.jsx)("input", {
                          className: "".concat(
                            l
                              ? "w-0 transition-all duration-300 ease-in-out opacity-0 pl-0"
                              : "w-full opacity-100 pl-8",
                            " py-6 rounded-[64px] grow outline-none bg-offWhite"
                          ),
                          placeholder: "Email",
                          type: "email",
                          value: e,
                          onChange: (e) => t(e.target.value),
                        }),
                        (0, s.jsx)(d.Z, {
                          id: "newsletter-signup-button",
                          label: p,
                          extraStyle: "".concat(
                            l
                              ? "w-full transition-all ease-in-out duration-300 pointer-events-none"
                              : "",
                            " bg-primary hover:bg-primaryHover py-6 px-12"
                          ),
                          textColor: "text-textBlack",
                          handleClick: () => (x.HN.test(e) ? i(!0) : g(!0)),
                        }),
                      ],
                    }),
                    (0, s.jsx)("p", {
                      className: "".concat(
                        n ? "opacity-1" : "opacity-0",
                        " ml-8 mt-1 text-xs text-red-500"
                      ),
                      children: "Invalid email",
                    }),
                  ],
                }),
                (0, s.jsx)(c.default, {
                  className: "max-w-[358px] lg:max-w-[500px]",
                  src: u,
                  alt: "Envelope",
                  unoptimized: !0,
                  loading: "lazy",
                }),
              ],
            }),
          })
        );
      };
    },
    1138: function (e, t, l) {
      "use strict";
      l.d(t, {
        default: function () {
          return g;
        },
      });
      var s = l(7437),
        a = l(2265),
        r = l(9582),
        i = l(2801),
        n = l(6098),
        c = l.n(n),
        o = l(6648),
        x = l(8377),
        d = l(3276),
        u = {
          src: "/_next/static/media/arrowDown.abb20ac0.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        };
      l(7700), r.p8.registerPlugin(c(), i.L);
      var g = () => {
        let e = (0, a.useRef)(null);
        (0, a.useEffect)(() => {
          let t = r.p8.fromTo(
            e.current,
            { y: 100, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.75 }
          );
          return () => {
            t.kill();
          };
        }, []);
        let t = (e) => {
          let t = document.getElementById(e);
          if (t) {
            let e = t.clientHeight;
            window.scrollTo({ top: t.offsetTop + e, behavior: "smooth" });
          }
        };
        return (0, s.jsxs)("div", {
          id: "notification-section",
          className:
            "relative max-w-screen w-screen h-screen bg-cover bg-center bg-primary overflow-hidden",
          children: [
            (0, s.jsxs)("div", {
              className:
                "relative w-full h-full flex flex-col gap-4 justify-center items-center text-4xl opacity-0 z-10",
              ref: e,
              children: [
                (0, s.jsx)(o.default, { src: d.Z, alt: "Logo" }),
                (0, s.jsx)("h1", {
                  className:
                    "text-textBlack font-bold text-5xl sm:text-8xl leading-[110%] tracking-[8%]",
                  children: "GET SMART",
                }),
                (0, s.jsx)("p", {
                  className:
                    "font-normal text-2xl text-center leading-6 tracking-[8%] uppercase text-textBlack",
                  children: "Dive into AI-powered trading, now on Eth",
                }),
                (0, s.jsx)("p", {
                  className:
                    "font-normal text-xl text-center leading-6 tracking-[8%] uppercase text-textBlack",
                  children: "CA: 0x0000000000000000000000000000000",
                }),
                (0, s.jsx)(x.Z, {
                  label: "Start Trading",
                  extraStyle:
                    "text-base font-medium bg-textBlack hover:bg-transparent hover:text-textBlack mt-12 px-12 py-6 hover:outline hover:outline-textBlack transition-all duration-150",
                  textColor: "text-white",
                  handleClick: () => {
                    window.open("https://app-flowx-ai.vercel.app/", "_blank");
                  },
                }),
                (0, s.jsxs)("div", {
                  className:
                    "absolute bottom-8 flex flex-col items-center cursor-pointer",
                  onClick: () => {
                    t("notification-section");
                  },
                  children: [
                    (0, s.jsx)("p", {
                      className: "text-base font-normal text-textBlack",
                      children: "Scroll Down",
                    }),
                    (0, s.jsx)(o.default, {
                      src: u,
                      alt: "Arrow Down",
                      className: "bounce-arrow",
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsxs)("div", {
              className: "ocean",
              children: [
                (0, s.jsx)("div", { className: "wave " }),
                (0, s.jsx)("div", { className: "wave wave2 " }),
                (0, s.jsx)("div", { className: "wave wave3 " }),
              ],
            }),
          ],
        });
      };
    },
    1894: function (e, t, l) {
      "use strict";
      var s = l(7437),
        a = l(2265),
        r = l(9582),
        i = l(6648),
        n = l(6098),
        c = l.n(n),
        o = l(9459),
        x = l(828);
      r.p8.registerPlugin(c()),
        (t.default = () => {
          let e = (0, a.useRef)(null);
          return (
            (0, a.useEffect)(() => {
              let t = r.p8.fromTo(
                e.current,
                { y: 100, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 0.75,
                  scrollTrigger: { trigger: e.current, start: "top 80%" },
                }
              );
              return () => {
                t.kill();
              };
            }, [])
          );
        });
    },
    5580: function (e, t, l) {
      "use strict";
      l.d(t, {
        default: function () {
          return x;
        },
      });
      var s = l(7437),
        a = l(2265),
        r = l(9582),
        i = l(6648),
        n = l(6098),
        c = l.n(n),
        o = {
          src: "/_next/static/media/tradingView.ba0b2406.svg",
          height: 48,
          width: 48,
          blurWidth: 0,
          blurHeight: 0,
        };
      r.p8.registerPlugin(c());
      var x = () => {
        let e = (0, a.useRef)(null);
        return (
          (0, a.useEffect)(() => {
            let t = r.p8.fromTo(
              e.current,
              { y: 100, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.75,
                scrollTrigger: { trigger: e.current, start: "top 80%" },
              }
            );
            return () => {
              t.kill();
            };
          }, []),
          (0, s.jsx)("div", {
            ref: e,
            className:
              "w-screen max-w-[1069px] mb-24 lg:mb-32 flex justify-center items-center px-4 lg:px-0 1.5xl:px-12 opacity-0",
            children: (0, s.jsxs)("div", {
              className:
                "w-full flex flex-col lg:flex-row gap-8 justify-center items-center px-6 py-8 lg:p-16 rounded-3xl bg-lightGray",
              children: [
                (0, s.jsx)(i.default, { src: o, alt: "Trading View Logo" }),
                (0, s.jsxs)("p", {
                  className:
                    "text-base text-textBlack text-center lg:text-start",
                  children: [
                    "FlowAI.trade utilizes TradingView technology, a\xa0popular charting platform for traders and investors. It offers advanced charting tools and access to the screener, enabling users to learn",
                    " ",
                    (0, s.jsx)("span", {
                      className: "font-bold cursor-pointer",
                      // onClick: () => {
                      //   window.open(
                      //     "https://www.tradingview.com/screener/",
                      //     "_blank"
                      //   );
                      // },
                      children: "how to use a stock screener",
                    }),
                    " ",
                    "and plan trades.",
                  ],
                }),
              ],
            }),
          })
        );
      };
    },
    1121: function (e, t, l) {
      "use strict";
      var s = l(7437),
        a = l(2265),
        r = l(9582),
        i = l(6098),
        n = l.n(i),
        c = l(9459),
        o = l(810);
      r.p8.registerPlugin(n()),
        (t.default = () => {
          let [e, t] = (0, a.useState)(0),
            [l, i] = (0, a.useState)(0),
            { windowWidth: n } = (0, o.Z)();
          return (
            (0, a.useEffect)(() => {
              let t = document.getElementById("scrollableDiv"),
                l =
                  ((null == t ? void 0 : t.scrollHeight) || 0) -
                  ((null == t ? void 0 : t.clientHeight) || 0);
              null == t || t.scrollTo(0, (e / 100) * l);
            }, [e]),
            (0, a.useEffect)(() => {
              let e = r.p8.timeline({});
              return (
                n &&
                  n > 1100 &&
                  e.set("#TrustlessSection", {
                    scrollTrigger: {
                      trigger: "#TrustlessSection",
                      start: n && n > 1536 ? "top 20%" : "top top+=116px",
                      end: "bottom bottom",
                      pin: !0,
                      pinnedContainer: "#TrustlessSection",
                      scrub: 0,
                      onUpdate: (e) => {
                        let l = 100 * e.progress;
                        t(l <= 10 ? 0 : l >= 90 ? 100 : (l - 10) * 1.25);
                      },
                    },
                  }),
                () => {
                  e.kill();
                }
              );
            }, [n]),
            (0, a.useEffect)(() => {
              let e = () => {
                  let e = document.querySelector(".scroll-container");
                  e &&
                    i((e.scrollTop / (e.scrollHeight - e.clientHeight)) * 100);
                },
                t = document.querySelector(".scroll-container");
              return (
                null == t || t.addEventListener("scroll", e),
                () => {
                  null == t || t.removeEventListener("scroll", e);
                }
              );
            }, []),
            (0, s.jsx)("div", {
              id: "TrustlessSection",
              className:
                "h-fit lg:h-[300vh] w-screen max-w-[1664px] lg:pb-32 flex justify-center items-start pb-24 px-0 1.5xl:px-12",
              children: (0, s.jsxs)("div", {
                className:
                  "w-full flex flex-col lg:flex-row gap-0 lg:gap-6 justify-between items-center py-24 lg:py-14 px-4 lg:px-12 1.5xl:px-32 rounded-[48px] bg-textBlack",
                children: [
                  (0, s.jsxs)("div", {
                    className: "w/1/3 flex flex-col pb-8 lg:py-14",
                    children: [
                      (0, s.jsx)("h1", {
                        className:
                          "font-medium text-[32px] text-center lg:text-start lg:text-5xl text-white",
                        children: "a trustless trading future",
                      }),
                      (0, s.jsx)("p", {
                        className:
                          "max-w-[580px] mt-4 text-xl lg:text-2xl text-center lg:text-start text-white",
                        children:
                          "The trading future where the feature set of CEXs meets the trustless nature of DEXs, fully on-chain.",
                      }),
                    ],
                  }),
                  (0, s.jsx)("p", {
                    className: "".concat(
                      n && n > 1100 ? "hidden" : "static",
                      " text-sm uppercase text-nowrap pb-6 text-white"
                    ),
                    children: "trusted 2010",
                  }),
                  (0, s.jsxs)("div", {
                    className: "w-full lg:w-2/3 h-full lg:h-[547px] flex",
                    children: [
                      (0, s.jsx)("div", {
                        onScroll: () => {},
                        id: "scrollableDiv",
                        className:
                          "w-full flex flex-col justify-start items-center gap-8 overflow-hidden no-scrollbar scroll-container scroll-container",
                        children: c.jN.map((e, t) =>
                          (0, s.jsxs)(
                            "div",
                            {
                              className:
                                "w-full p-6 lg:p-12 flex flex-col justify-center items-start rounded-[32px] ".concat(
                                  t === c.jN.length - 1
                                    ? "bg-primary"
                                    : "bg-darkCard"
                                ),
                              children: [
                                (0, s.jsxs)("div", {
                                  className:
                                    "w-full flex justify-between items-start",
                                  children: [
                                    (0, s.jsx)("div", {
                                      className:
                                        "text-sm p-3 rounded-[10px] uppercase ".concat(
                                          t === c.jN.length - 1
                                            ? "bg-textBlack text-white"
                                            : "bg-primary text-textBlack"
                                        ),
                                      children: e.tag,
                                    }),
                                    (0, s.jsx)("p", {
                                      className: "text-sm ".concat(
                                        t === c.jN.length - 1
                                          ? "text-textBlack"
                                          : "text-white"
                                      ),
                                      children: e.age,
                                    }),
                                  ],
                                }),
                                (0, s.jsx)("h1", {
                                  className:
                                    "text-4xl mt-4 mb-6 lg:mb-8 lowercase ".concat(
                                      t === c.jN.length - 1
                                        ? "text-textBlack"
                                        : "text-white"
                                    ),
                                  children: e.heading,
                                }),
                                (0, s.jsx)("p", {
                                  className:
                                    t === c.jN.length - 1
                                      ? "text-textBlack text-xl"
                                      : "text-white",
                                  children: e.description,
                                }),
                              ],
                            },
                            t
                          )
                        ),
                      }),
                      (0, s.jsx)("div", {
                        className: "".concat(
                          n && n < 1100 ? "hidden" : "relative",
                          " top-[20%] h-full lg:h-[355px] w-[6px] rounded-[50px] ml-8 mr-4 bg-darkGray"
                        ),
                        children: (0, s.jsx)("div", {
                          className: "w-full rounded-[50px] bg-primary",
                          style: { height: "".concat(l, "%") },
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        className: "".concat(
                          n && n < 1100 ? "hidden" : "flex flex-col",
                          " justify-between mt-[193px] mb-[78px]"
                        ),
                        children: [
                          (0, s.jsx)("p", {
                            className:
                              "w-2 text-sm uppercase -rotate-90 text-nowrap p-0 text-white",
                            children: "trusted 2010",
                          }),
                          (0, s.jsx)("p", {
                            className:
                              "w-2 text-sm uppercase -rotate-90 text-nowrap p-0 text-white",
                            children: "trustless 2024+",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)("p", {
                    className: "".concat(
                      n && n > 1100 ? "hidden" : "static",
                      " text-sm uppercase text-nowrap pt-6 text-white"
                    ),
                    children: "trustless 2024+",
                  }),
                ],
              }),
            })
          );
        });
    },
    7700: function () {},
    3276: function (e, t) {
      "use strict";
      t.Z = {
        src: "/_next/static/media/fullLogo.f005d312.svg",
        height: 32,
        width: 183,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
  },
  function (e) {
    e.O(
      0,
      [804, 922, 763, 213, 18, 313, 909, 126, 442, 969, 971, 23, 744],
      function () {
        return e((e.s = 7091));
      }
    ),
      (_N_E = e.O());
  },
]);
