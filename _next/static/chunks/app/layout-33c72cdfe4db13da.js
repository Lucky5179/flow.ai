(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    2431: function () {},
    272: function (e, t, l) {
      Promise.resolve().then(l.bind(l, 4404)),
        Promise.resolve().then(l.bind(l, 7640)),
        Promise.resolve().then(l.bind(l, 239)),
        Promise.resolve().then(l.bind(l, 3038)),
        Promise.resolve().then(l.bind(l, 3297)),
        Promise.resolve().then(l.bind(l, 5738)),
        Promise.resolve().then(l.t.bind(l, 4080, 23)),
        Promise.resolve().then(l.t.bind(l, 9521, 23)),
        Promise.resolve().then(l.t.bind(l, 3054, 23)),
        // Promise.resolve().then(l.bind(l, 2171)),
        Promise.resolve().then(l.bind(l, 9486)),
        Promise.resolve().then(l.bind(l, 4385)),
        Promise.resolve().then(l.bind(l, 414));
    },
    239: function (e, t, l) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let i = l(7437),
        a = l(2265);
      t.default = function (e) {
        let {
          html: t,
          height: l = null,
          width: s = null,
          children: n,
          dataNtpc: r = "",
        } = e;
        return (
          (0, a.useEffect)(() => {
            r &&
              performance.mark("mark_feature_usage", {
                detail: { feature: "next-third-parties-".concat(r) },
              });
          }, [r]),
          (0, i.jsxs)(i.Fragment, {
            children: [
              n,
              t
                ? (0, i.jsx)("div", {
                    style: {
                      height: null != l ? "".concat(l, "px") : "auto",
                      width: null != s ? "".concat(s, "px") : "auto",
                    },
                    "data-ntpc": r,
                    dangerouslySetInnerHTML: { __html: t },
                  })
                : null,
            ],
          })
        );
      };
    },
    4404: function (e, t, l) {
      "use strict";
      var i;
      let a;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sendGAEvent = t.GoogleAnalytics = void 0);
      let s = l(7437),
        n = l(2265),
        r = (i = l(1877)) && i.__esModule ? i : { default: i };
      (t.GoogleAnalytics = function (e) {
        let { gaId: t, dataLayerName: l = "dataLayer" } = e;
        return (
          void 0 === a && (a = l),
          (0, n.useEffect)(() => {
            performance.mark("mark_feature_usage", {
              detail: { feature: "next-third-parties-ga" },
            });
          }, []),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(r.default, {
                id: "_next-ga-init",
                dangerouslySetInnerHTML: {
                  __html: "\n          window['"
                    .concat(l, "'] = window['")
                    .concat(l, "'] || [];\n          function gtag(){window['")
                    .concat(
                      l,
                      "'].push(arguments);}\n          gtag('js', new Date());\n\n          gtag('config', '"
                    )
                    .concat(t, "');"),
                },
              }),
              (0, s.jsx)(r.default, {
                id: "_next-ga",
                src: "https://www.googletagmanager.com/gtag/js?id=".concat(t),
              }),
            ],
          })
        );
      }),
        (t.sendGAEvent = function () {
          for (var e = arguments.length, t = Array(e), l = 0; l < e; l++)
            t[l] = arguments[l];
          if (void 0 === a) {
            console.warn("@next/third-parties: GA has not been initialized");
            return;
          }
          window[a]
            ? window[a].push(arguments)
            : console.warn(
                "@next/third-parties: GA dataLayer ".concat(
                  a,
                  " does not exist"
                )
              );
        });
    },
    7640: function (e, t, l) {
      "use strict";
      var i;
      let a;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sendGTMEvent = t.GoogleTagManager = void 0);
      let s = l(7437),
        n = l(2265),
        r = (i = l(1877)) && i.__esModule ? i : { default: i };
      (t.GoogleTagManager = function (e) {
        let {
          gtmId: t,
          dataLayerName: l = "dataLayer",
          auth: i,
          preview: c,
          dataLayer: o,
        } = e;
        void 0 === a && (a = l);
        let d = "dataLayer" !== l ? "&l=".concat(l) : "";
        return (
          (0, n.useEffect)(() => {
            performance.mark("mark_feature_usage", {
              detail: { feature: "next-third-parties-gtm" },
            });
          }, []),
          (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)(r.default, {
                id: "_next-gtm-init",
                dangerouslySetInnerHTML: {
                  __html:
                    "\n      (function(w,l){\n        w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});\n        "
                      .concat(
                        o ? "w[l].push(".concat(JSON.stringify(o), ")") : "",
                        "\n      })(window,'"
                      )
                      .concat(l, "');"),
                },
              }),
              (0, s.jsx)(r.default, {
                id: "_next-gtm",
                "data-ntpc": "GTM",
                src: "https://www.googletagmanager.com/gtm.js?id="
                  .concat(t)
                  .concat(d)
                  .concat(i ? "&gtm_auth=".concat(i) : "")
                  .concat(
                    c ? "&gtm_preview=".concat(c, "&gtm_cookies_win=x") : ""
                  ),
              }),
            ],
          })
        );
      }),
        (t.sendGTMEvent = (e) => {
          if (void 0 === a) {
            console.warn("@next/third-parties: GTM has not been initialized");
            return;
          }
          window[a]
            ? window[a].push(e)
            : console.warn(
                "@next/third-parties: GTM dataLayer ".concat(
                  a,
                  " does not exist"
                )
              );
        });
    },
    1877: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return a.a;
          },
        });
      var i = l(4080),
        a = l.n(i),
        s = {};
      for (var n in i)
        "default" !== n &&
          (s[n] = function (e) {
            return i[e];
          }.bind(0, n));
      l.d(t, s);
    },
    2171: function (e, t, l) {
      "use strict";
      l.d(t, {
        default: function () {
          return u;
        },
      });
      var i = l(7437),
        a = l(2265),
        s = l(9459),
        n = l(5267),
        r = l(3101),
        c = l(6648),
        o = {
          src: "/_next/static/media/disclaimer.12fa1a7d.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        d = {
          src: "/_next/static/media/crossDisabled.c26af0e0.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        x = {
          src: "/_next/static/media/crossEnabled.40728f90.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        m = l(810),
        h = (e) => {
          let { open: t, setOpen: l } = e,
            [h, u] = (0, a.useState)(!1),
            { windowWidth: f } = (0, m.Z)();
          return (0, i.jsx)(n.Z, {
            open: t,
            onClose: (e, t) => {
              "clickaway" !== t && l(!1);
            },
            sx: { marginLeft: "16px", marginRight: "16px" },
            children: (0, i.jsxs)("div", {
              className:
                "w-full lg:w-fit absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-3 p-8 rounded-3xl items-start outline-none bg-lightGray",
              children: [
                (0, i.jsxs)("div", {
                  className: "w-full flex justify-between items-center",
                  children: [
                    (0, i.jsxs)("div", {
                      className: "flex items-center gap-2",
                      children: [
                        (0, i.jsx)(c.default, { src: o, alt: "disclaimer" }),
                        (0, i.jsx)("h1", {
                          className: "font-medium text-textBlack",
                          children: "legal disclaimer:",
                        }),
                      ],
                    }),
                    (0, i.jsx)(c.default, {
                      onMouseEnter: () => u(!0),
                      onMouseLeave: () => u(!1),
                      src: h ? x : d,
                      onClick: () => l(!1),
                      className: "-translate-y-5 translate-x-5 cursor-pointer",
                      alt: "cross",
                    }),
                  ],
                }),
                (0, i.jsxs)("p", {
                  className: "max-w-96 text-sm text-justify text-textBlack",
                  children: [
                    s.ZL,
                    " For inquiries, contact",
                    " ",
                    (0, i.jsx)(r.Z, {
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
        u = (e) => {
          let { isSticky: t = !0 } = e,
            [l, n] = (0, a.useState)(!1);
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)("div", {
                id: "disclaimer",
                className: "w-screen h-[38px] lg:h-7 2xl:h-9 ".concat(
                  t ? "fixed top-0" : "",
                  " px-4 lg:px-16 flex justify-between lg:justify-center items-center gap-8 z-50 bg-lightGray"
                ),
                children: [
                  (0, i.jsx)("p", {
                    className: "hidden lg:flex truncate text-xs text-textBlack",
                    children: s.ZL,
                  }),
                  (0, i.jsx)("p", {
                    className:
                      "flex lg:hidden text-sm tracking-widest text-textBlack uppercase",
                    children: "Legal Disclaimer",
                  }),
                  (0, i.jsx)("p", {
                    className:
                      "flex 3xl:hidden text-sm lg:text-xs font-normal lg:font-medium text-nowrap cursor-pointer text-textBlack",
                    onClick: () => n(!0),
                    children: "Read more",
                  }),
                ],
              }),
              (0, i.jsx)(h, { open: l, setOpen: n }),
            ],
          });
        };
    },
    9486: function (e, t, l) {
      "use strict";
      l.d(t, {
        default: function () {
          return g;
        },
      });
      var i = l(7437),
        a = l(2265),
        s = l(3297),
        n = l(3038),
        r = l(2030),
        c = l(2126),
        o = l(7138),
        d = l(6648),
        x = l(9459),
        m = l(8377),
        h = {
          src: "/_next/static/media/footerLogo.2dcd701e.svg",
          height: 64,
          width: 64,
          blurWidth: 0,
          blurHeight: 0,
        },
        u = l(810),
        f = l(565),
        g = () => {
          let { windowWidth: e } = (0, u.Z)(),
            { navigation: t, socials: l } = (0, f.Z)(),
            [g, p] = (0, a.useState)(""),
            [j, w] = (0, a.useState)(!1),
            [v, b] = (0, a.useState)(!1),
            [y, N] = (0, a.useState)("Sign Up");
          return (
            (0, a.useEffect)(() => {
              if (j) {
                let e = setTimeout(() => {
                  N(x.Y5);
                }, 400);
                return () => clearTimeout(e);
              }
              N("Sign Up");
            }, [j]),
            (0, a.useEffect)(() => {
              let e = async () => {
                b(!1);
                try {
                  await c.Z.post("/api", { email: g });
                } catch (e) {
                  console.log("Error:", e);
                }
              };
              URL && j && e();
            }, [j]),
            (0, i.jsxs)("div", {
              className:
                "w-full flex flex-col justify-center items-center bg-textBlack",
              children: [
                (0, i.jsxs)("div", {
                  id: "FooterContent",
                  className:
                    "w-full max-w-[1664px] flex flex-col lg:flex-row gap-8 lg:gap-0 2xl:gap-0 justify-between items-center lg:items-end lg:mt-32 pt-24 pb-6 lg:pt-14 px-4 lg:px-16 1.5xl:px-44",
                  children: [
                    (0, i.jsxs)("div", {
                      className:
                        "w-full md:w-1/2 flex flex-col items-center lg:items-start",
                      children: [
                        (0, i.jsx)(d.default, { src: h, alt: "Logo" }),
                        (0, i.jsxs)("div", {
                          className: "lg:w-[619px] mt-8 lg:mt-6 mb-4 lg:mb-12 ",
                          children: [
                            (0, i.jsxs)("h1", {
                              className:
                                "text-center lg:text-start static lg:hidden font-medium text-[40px] lg:text-[64px] lowercase text-white",
                              children: [
                                "the DEX with ",
                                (0, i.jsx)("br", {}),
                                "AI appeal",
                              ],
                            }),
                            (0, i.jsx)("h1", {
                              className:
                                "text-center lg:text-start hidden lg:flex justify-start font-medium text-[40px] lg:text-[64px] lowercase text-white",
                              children: "the DEX with",
                            }),
                            (0, i.jsx)("h1", {
                              className:
                                "lg:text-start hidden lg:flex justify-start text-start font-medium text-[40px] lg:text-[64px] text-white",
                              children: "AI appeal",
                            }),
                          ],
                        }),
                        (0, i.jsx)("p", {
                          className: "max-w-60 ".concat(
                            e && e > 1100 ? "hidden" : "static",
                            " text-xl text-white text-center mb-6"
                          ),
                          children:
                            "The DEX with the first fully trustless order book",
                        }),
                        (0, i.jsxs)("div", {
                          className: "w-full flex flex-col lg:flex-row gap-4",
                          children: [
                            (0, i.jsx)(m.Z, {
                              label: "",
                              extraStyle:
                                "bg-primary hover:bg-primaryHover min-w-[191px] hover:text-textBlack hover:outline hover:outline-textBlack py-6 px-12 before:content-['Start_Trading'] ".concat(
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
                            (0, i.jsx)(m.Z, {
                              label: "Buy $FlowAI",
                              extraStyle:
                                "bg-background hover:bg-lightGray min-w-[191px] py-6 px-12 ",
                              textColor: "text-textBlack",
                              handleClick: () => window.open(x.h1, "_blank"),
                            }),
                          ],
                        }),
                        (0, i.jsx)("div", {
                          className: "".concat(
                            e && e < 1100 ? "hidden" : "flex",
                            " gap-6 2xl:gap-8 mt-32"
                          ),
                          children:
                            null == t
                              ? void 0
                              : t.map((e) =>
                                  (0, i.jsx)(
                                    s.PrismicNextLink,
                                    {
                                      field: e.link,
                                      className: "text-white",
                                      children: e.label,
                                    },
                                    e.label
                                  )
                                ),
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className:
                        "w-full md:w-1/2 flex flex-col justify-center items-center lg:items-end",
                      children: [
                        (0, i.jsx)(r.Z, {
                          className: "w-screen ".concat(
                            e && e > 1100 ? "hidden" : "static",
                            " bg-darkDivider"
                          ),
                          style: { marginBottom: "24px" },
                        }),
                        (0, i.jsxs)("div", {
                          children: [
                            (0, i.jsx)("p", {
                              className:
                                "w-full max-w-full lg:max-w-full mb-5 lg:mb-6 text-xl lg:text-2xl text-center lg:text-start text-white",
                              children:
                                "FlowAI is a cutting-edge DEX transforming the trading landscape for RWAs and cryptocurrencies.",
                            }),
                            (0, i.jsx)("p", {
                              className: "".concat(
                                v ? "opacity-1" : "opacity-0",
                                " mt-1 text-xs ml-8 text-red-500"
                              ),
                              children: "Invalid emails",
                            }),
                            (0, i.jsxs)("div", {
                              className: "".concat(
                                e && e < 1100 ? "hidden" : "flex",
                                " gap-8 2xl:gap-12 mt-32"
                              ),
                              children: [
                                (0, i.jsx)("div", {
                                  className: "flex gap-2 2xl:gap-4",
                                  children:
                                    null == l
                                      ? void 0
                                      : l.map((e, t) =>
                                          (0, i.jsx)(
                                            s.PrismicNextLink,
                                            {
                                              field: e.link,
                                              className: "".concat(
                                                Object.keys(e.link).length <
                                                  2 && "pointer-events-none"
                                              ),
                                              children: (0, i.jsx)(
                                                n.PrismicNextImage,
                                                { field: e.logo }
                                              ),
                                            },
                                            t
                                          )
                                        ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, i.jsx)(r.Z, {
                          className: "w-screen ".concat(
                            e && e > 1100 ? "hidden" : "static",
                            " bg-darkDivider"
                          ),
                          style: { marginTop: "24px", marginBottom: "24px" },
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className: "w-full max-w-96 ".concat(
                        e && e > 1100 ? "hidden" : "flex",
                        " justify-between items-start"
                      ),
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            "w-full flex flex-col justify-start items-start gap-8",
                          children:
                            null == t
                              ? void 0
                              : t.map((e) =>
                                  (0, i.jsx)(
                                    s.PrismicNextLink,
                                    {
                                      field: e.link,
                                      className: "text-white",
                                      children: e.label,
                                    },
                                    e.label
                                  )
                                ),
                        }),
                        (0, i.jsxs)("div", {
                          className:
                            "w-fit flex flex-col justify-start items-start gap-8",
                          children: [
                            (0, i.jsx)(o.default, {
                              className: "text-white",
                              href: "mailto:info@FlowAI.trade",
                              children: "Contact",
                            }),
                            (0, i.jsx)(o.default, {
                              className: "text-white",
                              href: "mailto:press@FlowAI.trade",
                              children: "Press & Сooperation",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsx)(r.Z, {
                      className: "w-screen ".concat(
                        e && e > 1100 ? "hidden" : "static",
                        " bg-darkDivider"
                      ),
                    }),
                    (0, i.jsx)("div", {
                      className: "".concat(
                        e && e > 1100 ? "hidden" : "flex",
                        " gap-4"
                      ),
                      children:
                        null == l
                          ? void 0
                          : l.map((e, t) =>
                              (0, i.jsx)(
                                s.PrismicNextLink,
                                {
                                  field: e.link,
                                  className: "".concat(
                                    Object.keys(e.link).length < 2 &&
                                      "pointer-events-none"
                                  ),
                                  children: (0, i.jsx)(n.PrismicNextImage, {
                                    field: e.logo,
                                    width: 32,
                                    height: 32,
                                  }),
                                },
                                t
                              )
                            ),
                    }),
                    (0, i.jsx)(r.Z, {
                      className: "w-screen ".concat(
                        e && e > 1100 ? "hidden" : "static",
                        " bg-darkDivider"
                      ),
                    }),
                    (0, i.jsxs)("div", {
                      className: "w-full max-w-[1664px] ".concat(
                        e && e > 1100 ? "hidden" : "flex flex-col lg:flex-row",
                        " justify-center lg:justify-between items-center"
                      ),
                      children: [
                        (0, i.jsx)("p", {
                          className: "text-[#768398] text-center lg:text-start",
                          children:
                            "\xa9 2023-2024 FlowAI. All rights reserved.",
                        }),
                        (0, i.jsxs)("p", {
                          className:
                            "text-center mt-2 opacity-50 text-[#768398] text-xs",
                          children: [
                            "Legal Disclaimer: ",
                            x.ZL,
                            " ",
                            (0, i.jsx)(o.default, {
                              href: "mailto:info@FlowAI.trade",
                              children: "info@FlowAI.trade",
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: "flex gap-6 lg:gap-8 mt-4 lg:mt-0 hidden",
                          children: [
                            (0, i.jsx)("p", {
                              className: "text-[#768398]",
                              children: "Privacy Policy",
                            }),
                            (0, i.jsx)("p", {
                              className: "text-[#768398]",
                              children: "Terms & Conditions",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)(r.Z, {
                  className: "w-screen ".concat(
                    e && e < 1100 ? "hidden" : "static",
                    "  bg-[#323B48]"
                  ),
                  style: { marginTop: "32px", marginBottom: "32px" },
                }),
                (0, i.jsxs)("div", {
                  className: "w-full max-w-[1600px] ".concat(
                    e && e < 1100 ? "hidden" : "flex flex-col",
                    " justify-center items-center px-4 lg:px-16 1.5xl:px-44 mb-8"
                  ),
                  children: [
                    (0, i.jsx)("p", {
                      className: "text-[#768398]",
                      children: "\xa9 2023-2024 FlowAI. All rights reserved.",
                    }),
                    (0, i.jsxs)("p", {
                      className:
                        "text-center mt-2 opacity-50 text-[#768398] text-xs",
                      children: [
                        "Legal Disclaimer: ",
                        x.ZL,
                        " For inquiries, contact",
                        " ",
                        (0, i.jsx)(o.default, {
                          href: "mailto:info@FlowAI.trade",
                          children: "info@FlowAI.trade",
                        }),
                      ],
                    }),
                    (0, i.jsx)("div", {
                      className: "flex gap-12 hidden",
                      children: (0, i.jsxs)("div", {
                        className: "flex gap-8",
                        children: [
                          (0, i.jsx)("p", {
                            className: "text-[#768398]",
                            children: "Privacy Policy",
                          }),
                          (0, i.jsx)("p", {
                            className: "text-[#768398]",
                            children: "Terms & Conditions",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            })
          );
        };
    },
    4385: function (e, t, l) {
      "use strict";
      l.d(t, {
        default: function () {
          return v;
        },
      });
      var i = l(7437),
        a = l(3297),
        s = l(3038),
        n = l(6648),
        r = l(7138),
        c = l(3276),
        o = {
          src: "/_next/static/media/smallLogo.de34c269.svg",
          height: 32,
          width: 32,
          blurWidth: 0,
          blurHeight: 0,
        },
        d = l(8377),
        x = l(2265),
        m = l(2030),
        h = l(5169),
        u = {
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
        g = l(565),
        p = () => {
          let [e, t] = (0, x.useState)(!1),
            { navigation: l, socials: r } = (0, g.Z)();
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(n.default, {
                className: "lg:hidden cursor-pointer",
                src: u,
                alt: "Hamburger",
                onClick: () => t(!0),
              }),
              (0, i.jsx)(h.ZP, {
                anchor: "right",
                open: e,
                onClose: () => t(!1),
                PaperProps: { sx: { backgroundColor: "#E6EBFF" } },
                children: (0, i.jsxs)("div", {
                  className: "w-screen h-full flex flex-col justify-between",
                  children: [
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsxs)("div", {
                          className:
                            "flex justify-between items-center py-4 px-6",
                          children: [
                            (0, i.jsx)(n.default, {
                              src: c.Z,
                              alt: "Logo",
                              width: 139,
                              height: 24,
                            }),
                            (0, i.jsx)(n.default, {
                              className: "cursor-pointer",
                              src: f,
                              alt: "Cross",
                              onClick: () => t(!1),
                            }),
                          ],
                        }),
                        (0, i.jsx)(m.Z, {
                          sx: { marginBottom: "32px" },
                          className: "bg-divider",
                        }),
                        (0, i.jsx)("div", {
                          className: "flex flex-col gap-8 px-6",
                          children:
                            null == l
                              ? void 0
                              : l.map((e) =>
                                  (0, i.jsx)(
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
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsxs)("div", {
                          className: "flex flex-col gap-4 px-6",
                          children: [
                            (0, i.jsx)(d.Z, {
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
                            (0, i.jsx)(d.Z, {
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
                        (0, i.jsx)(m.Z, {
                          sx: { marginTop: "16px" },
                          className: "bg-divider",
                        }),
                        (0, i.jsx)("div", {
                          className: "flex justify-center gap-4 py-4 px-6",
                          children:
                            null == r
                              ? void 0
                              : r.map((e, l) =>
                                  (0, i.jsx)(
                                    a.PrismicNextLink,
                                    {
                                      field: e.link,
                                      className: "".concat(
                                        Object.keys(e.link).length < 2 &&
                                          "pointer-events-none"
                                      ),
                                      onClick: () => t(!1),
                                      children: (0, i.jsx)(s.PrismicNextImage, {
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
        j = l(810),
        w = l(9459),
        v = (e) => {
          let { isSticky: t = !0 } = e,
            { windowWidth: l } = (0, j.Z)(),
            { navigation: x, socials: m } = (0, g.Z)();
          return (0, i.jsxs)("div", {
            id: "navbar",
            className: "w-screen h-fit lg:h-[72px] 2xl:h-20 ".concat(
              t ? "fixed top-[36px] lg:top-7 2xl:top-9" : "",
              " flex justify-between items-center px-4 xl:px-12 2xl:px-16 py-4 lg:py-0 z-50 bg-background"
            ),
            children: [
              (0, i.jsxs)("div", {
                className: "flex items-center gap-6 xl:gap-9 2xl:gap-16",
                children: [
                  (0, i.jsx)(r.default, {
                    href: "/",
                    children: (0, i.jsx)(n.default, {
                      src: l && l < 1100 ? o : c.Z,
                      alt: "Logo",
                      priority: !0,
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "hidden lg:flex gap-4 xl:gap-6 2xl:gap-8",
                    children:
                      null == x
                        ? void 0
                        : x.map((e) =>
                            (0, i.jsx)(
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
              (0, i.jsxs)("div", {
                className: "flex items-center gap-6 xl:gap-9 2xl:gap-16",
                children: [
                  (0, i.jsx)("div", {
                    className: "hidden lg:flex gap-4",
                    children:
                      null == m
                        ? void 0
                        : m.map((e, t) =>
                            (0, i.jsx)(
                              a.PrismicNextLink,
                              {
                                field: e.link,
                                className: "".concat(
                                  Object.keys(e.link).length < 2 &&
                                    "pointer-events-none"
                                ),
                                children: (0, i.jsx)(s.PrismicNextImage, {
                                  field: e.logo,
                                }),
                              },
                              t
                            )
                          ),
                  }),
                  (0, i.jsxs)("div", {
                    className: "hidden lg:flex gap-4",
                    children: [
                      (0, i.jsx)(d.Z, {
                        label: "Buy $FlowAI",
                        extraStyle:
                          "h-12 min-w-[159px] bg-textBlack hover:bg-transparent hover:text-textBlack px-8 hover:outline hover:outline-textBlack",
                        textColor: "text-white",
                        handleClick: () => window.open(w.h1, "_blank"),
                      }),
                      (0, i.jsx)(d.Z, {
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
              (0, i.jsx)(p, {}),
            ],
          });
        };
    },
    565: function (e, t, l) {
      "use strict";
      var i = l(2265),
        a = l(9413);
      t.Z = function () {
        let [e, t] = (0, i.useState)([]),
          [l, s] = (0, i.useState)([]);
        return (
          (0, i.useEffect)(() => {
            (async () => {
              let e = (0, a.e)(),
                l = await e.getSingle("settings");
              l.data.navigation[2].link.url = "https://doc.FlowAI.trade";
              l.data.socials[1].link.url = "https://x.com/FlowAI_eth";
              l.data.socials[4].link.url = "https://t.me/FlowAI_eth";
              console.log(l.data.navigation[2]);
              console.log(l.data.socials[1]);

                s([l.data.socials[1], l.data.socials[4]]);
            })();
          }, []),
          { navigation: e, socials: l }
        );
      };
    },
    3054: function () {},
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
    9521: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__Outfit_ad50fd', '__Outfit_Fallback_ad50fd'",
          fontStyle: "normal",
        },
        className: "__className_ad50fd",
      };
    },
  },
  function (e) {
    e.O(0, [714, 763, 213, 313, 126, 738, 969, 971, 23, 744], function () {
      return e((e.s = 272));
    }),
      (_N_E = e.O());
  },
]);
