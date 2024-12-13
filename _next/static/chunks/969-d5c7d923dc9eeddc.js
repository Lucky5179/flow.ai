"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [969],
  {
    8377: function (e, t, i) {
      var n = i(7437);
      i(2265),
        (t.Z = (e) => {
          let {
            id: t = "",
            label: i,
            extraStyle: r,
            textColor: a,
            styles: o,
            handleClick: s,
          } = e;
          return (0, n.jsx)("button", {
            id: t,
            className:
              "rounded-[100px] text-center font-medium cursor-pointer text-nowrap "
                .concat(r, " ")
                .concat(a),
            style: o,
            onClick: s,
            children: i,
          });
        });
    },
    9459: function (e, t, i) {
      var n, r;
      i.d(t, {
        m_: function () {
          return b;
        },
        Y5: function () {
          return o;
        },
        Ty: function () {
          return d;
        },
        si: function () {
          return u;
        },
        ZL: function () {
          return l;
        },
        Z9: function () {
          return h;
        },
        _y: function () {
          return c;
        },
        jN: function () {
          return g;
        },
        Nl: function () {
          return n;
        },
        h1: function () {
          return a;
        },
        HN: function () {
          return s;
        },
      });
      let a =
          "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x0000000000000000000000000000000",
        o = "Check your Email to Confirm Subscription",
        s =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        l =
          "All content on this site is for informational purposes only and does not constitute financial advice. Trading cryptocurrencies involves significant risk and can result in the loss of your invested capital. You are solely responsible for your trading decisions. FlowAI is not liable for any losses you may incur. Use of this site confirms your acceptance of these terms.";
      ((r = n || (n = {})).all = "All"),
        (r.news = "News"),
        (r.development = "Development"),
        (r.education = "Education");
      let c = [
          {
            icon: {
              src: "/_next/static/media/copy.88e1fed3.svg",
              height: 24,
              width: 24,
              blurWidth: 0,
              blurHeight: 0,
            },
            hoverIcon: {
              src: "/_next/static/media/hoverCopy.1f70da5b.svg",
              height: 24,
              width: 24,
              blurWidth: 0,
              blurHeight: 0,
            },
            link: "",
            label: "Copy",
            hoverText: "Copy Url",
          },
          {
            icon: {
              src: "/_next/static/media/x.7663fab3.svg",
              height: 24,
              width: 24,
              blurWidth: 0,
              blurHeight: 0,
            },
            hoverIcon: {
              src: "/_next/static/media/hoverX.37fdb8ca.svg",
              height: 24,
              width: 24,
              blurWidth: 0,
              blurHeight: 0,
            },
            link: "https://x.com/intent/tweet?url=",
            label: "X",
            hoverText: "Share to X",
          },
          {
            icon: {
              src: "/_next/static/media/facebook.d24b7915.svg",
              height: 24,
              width: 24,
              blurWidth: 0,
              blurHeight: 0,
            },
            hoverIcon: {
              src: "/_next/static/media/hoverFacebook.6e8b50c2.svg",
              height: 24,
              width: 24,
              blurWidth: 0,
              blurHeight: 0,
            },
            link: "https://www.facebook.com/sharer/sharer.php?u=",
            label: "Facebook",
            hoverText: "Share to Facebook",
          },
          {
            icon: {
              src: "/_next/static/media/linkedin.6d1d0868.svg",
              height: 24,
              width: 24,
              blurWidth: 0,
              blurHeight: 0,
            },
            hoverIcon: {
              src: "/_next/static/media/hoverLinkedIn.b70e571a.svg",
              height: 24,
              width: 24,
              blurWidth: 0,
              blurHeight: 0,
            },
            link: "https://www.linkedin.com/sharing/share-offsite/?url=",
            label: "LinkedIn",
            hoverText: "Share to LinkedIn",
          },
        ],
        h = [
          {
            icon: {
              src: "/_next/static/media/bso.7e0cd0bb.png",
              height: 160,
              width: 356,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAG1BMVEUdIytMaXEfKyseIyseIyseIysbJi4eJCwfJSuxSK0kAAAACXRSTlNsAAqJY3cYQisAQED4AAAACXBIWXMAACxLAAAsSwGlPZapAAAAI0lEQVR4nAXBhwEAAAjCsAKu/y82QZImW9j2cUCa3gxUqkd6BuUAZgH9nTAAAAAASUVORK5CYII=",
              blurWidth: 8,
              blurHeight: 4,
            },
            link: "https://www.bso.co/",
          },
          {
            icon: {
              src: "/_next/static/media/tokinvest.b4cd7c91.svg",
              height: 32,
              width: 182,
              blurWidth: 0,
              blurHeight: 0,
            },
            link: "https://tokinvest.capital/",
          },
          {
            icon: {
              src: "/_next/static/media/mobilum.cff2b638.svg",
              height: 32,
              width: 178,
              blurWidth: 0,
              blurHeight: 0,
            },
            link: "https://www.mobilum.com/",
          },
          {
            icon: {
              src: "/_next/static/media/kronos.c163b881.svg",
              height: 40,
              width: 123,
              blurWidth: 0,
              blurHeight: 0,
            },
            link: "https://kronosresearch.com/",
          },
          {
            icon: {
              src: "/_next/static/media/nxgen.62df076d.svg",
              height: 28,
              width: 104,
              blurWidth: 0,
              blurHeight: 0,
            },
            link: "https://www.nxgen.xyz/",
          },
          {
            icon: {
              src: "/_next/static/media/immin8Labs.bfae0c85.svg",
              height: 36,
              width: 115,
              blurWidth: 0,
              blurHeight: 0,
            },
            link: "",
          },
          {
            icon: {
              src: "/_next/static/media/hacken.43b81185.svg",
              height: 30,
              width: 122,
              blurWidth: 0,
              blurHeight: 0,
            },
            link: "https://hacken.io/audits/multipool/",
          },
          {
            icon: {
              src: "/_next/static/media/fjord.3a8680b3.svg",
              height: 24,
              width: 81,
              blurWidth: 0,
              blurHeight: 0,
            },
            link: "https://app.fjordfoundry.com/pools/0x519A39d5FB7778f72e085a72Fee2Fe2948996E09 ",
          },
          {
            icon: {
              src: "/_next/static/media/ethereum.bbc20c33.svg",
              height: 40,
              width: 167,
              blurWidth: 0,
              blurHeight: 0,
            },
            link: "https://ethereum.org/",
          },
        ],
        u = [
          {
            icon: {
              src: "/_next/static/media/investing.89de8e1b.svg",
              height: 32,
              width: 180,
              blurWidth: 0,
              blurHeight: 0,
            },
            link: "https://www.investing.com/news/cryptocurrency-news/multipool-announces-lbp-after-raising-650k-in-vc-round-led-by-nxgen-3442375",
          },
          {
            icon: {
              src: "/_next/static/media/benzinga.b64351ff.svg",
              height: 20,
              width: 153,
              blurWidth: 0,
              blurHeight: 0,
            },
            link: "https://www.benzinga.com/pressreleases/24/05/38854135/multipool-announces-lbp-after-raising-650k-in-vc-round-led-by-nxgen",
          },
          {
            icon: {
              src: "/_next/static/media/marketInsider.2e757409.svg",
              height: 42,
              width: 122,
              blurWidth: 0,
              blurHeight: 0,
            },
            link: "https://markets.businessinsider.com/news/currencies/multipool-announces-lbp-after-raising-650k-in-vc-round-led-by-nxgen-1033386301",
          },
          {
            icon: {
              src: "/_next/static/media/coinMarketCap.4ac76e9d.svg",
              height: 36,
              width: 208,
              blurWidth: 0,
              blurHeight: 0,
            },
            link: "https://coinmarketcap.com/community/articles/6644ff063415e146a81774b1/",
          },
          {
            icon: {
              src: "/_next/static/media/binance.978b1dce.svg",
              height: 32,
              width: 162,
              blurWidth: 0,
              blurHeight: 0,
            },
            link: "https://www.binance.com/en-GB/square/post/8144271758857",
          },
          {
            icon: {
              src: "/_next/static/media/theStreet.451dfd31.svg",
              height: 42,
              width: 107,
              blurWidth: 0,
              blurHeight: 0,
            },
            link: "https://www.thestreet.com/crypto/newsroom/multipool-announces-lbp-after-raising-650k-in-vc-round-led-by-nxgen",
          },
          {
            icon: {
              src: "/_next/static/media/hackernoon.27898954.svg",
              height: 28,
              width: 216,
              blurWidth: 0,
              blurHeight: 0,
            },
            link: "https://hackernoon.com/multipool-announces-lbp-after-raising-$650k-in-vc-round-led-by-nxgen",
          },
          {
            icon: {
              src: "/_next/static/media/globalBanking.0c3789ae.svg",
              height: 36,
              width: 144,
              blurWidth: 0,
              blurHeight: 0,
            },
            link: "https://www.globalbankingandfinance.com/multipool-announces-lbp-after-raising-650k-in-vc-round-led-by-nxgen/",
          },
          {
            icon: {
              src: "/_next/static/media/decrypt.73f84013.svg",
              height: 42,
              width: 127,
              blurWidth: 0,
              blurHeight: 0,
            },
            link: "https://decrypt.co/230899/multipool-announces-lbp-after-raising-650k-in-vc-round-led-by-nxgen",
          },
          {
            icon: {
              src: "/_next/static/media/cryptoSlate.91de22cc.svg",
              height: 32,
              width: 153,
              blurWidth: 0,
              blurHeight: 0,
            },
            link: "https://cryptoslate.com/press-releases/multipool-announces-lbp-after-raising-650k-in-vc-round-led-by-nxgen/",
          },
          {
            icon: {
              src: "/_next/static/media/cryptoPotato.e68ef00b.svg",
              height: 25,
              width: 156,
              blurWidth: 0,
              blurHeight: 0,
            },
            link: "https://cryptopotato.com/multipool-announces-lbp-after-raising-650k-in-vc-round-led-by-nxgen/",
          },
        ],
        d = [
          {
            question: "What is FlowAI and how does it work?",
            answer: [
              "FlowAI is a cutting-edge DEX transforming the trading landscape for RWAs and cryptocurrencies.",
              "FlowAI is designed for fairness and equality, featuring a fully decentralized on-chain order book, deep liquidity through dynamic bracket pools, utilizing on-chain compliance tools.",
            ],
          },
          {
            question:
              "What are the benefits of buying and holding $FlowAI token?",
            answer: [
              "$FlowAI is an ERC20 token on the ethereum blockchain. Holders enjoy both governance rights and exclusive membership privileges.",
              "Governance - $FlowAI holders wield significant influence, actively shaping the future of FlowAI through their governance rights.",
              "Memberships - $FlowAI tokens serve as a gateway to exclusive memberships, unlocking premium features and benefits within the FlowAI ecosystem.",
              "",
            ],
          },
          {
            question: "how can I get involved in the FlowAI community?",
            answer: [
              "You can stay updated on news and developments through our website and official X account, as well as by joining the Telegram community.",
            ],
          },
        ],
        g = [
          {
            tag: "CEX",
            heading: "Fully featured, trusted",
            description:
              "Although offering a fully featured trading experience. CEXs have lost all trust due to the revelations from tier 1 exchanges such as FTX and Binance. Traders are signalling by their shift to DEXs that going fully trustless is the future",
            age: "2010",
          },
          {
            tag: "AMM",
            heading: "Basic swaps, trustless",
            description:
              "With the mass adoption of AMMs like Uniswap. The market has signalled that going trustless  is the future. However due to the minimal feature set they have, many professional and institutional traders still choose to use CEXs.",
            age: "2014",
          },
          {
            tag: "Hybrid",
            heading: "Fully featured, semi-trustless",
            description:
              "DYDX and other hybrid exchanges are bridging the gap between CEXs\xa0&\xa0DEXs however do not offer a\xa0fully on-chain order book and thus are still semi-trustless and lack\xa0full decentralization.",
            age: "2018",
          },
          {
            tag: "FlowAI",
            heading: "Fully featured, trustless",
            description:
              "FlowAI is a fully featured exchange that is 100% on-chain, fully decentralised, and trustless.",
            age: "2024",
          },
        ],
        b = {
          desktop: { breakpoint: { max: 1e4, min: 1024 }, items: 4 },
          tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
          mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
        };
    },
    414: function (e, t, i) {
      i.d(t, {
        GlobalContextProvider: function () {
          return s;
        },
        b: function () {
          return l;
        },
      });
      var n = i(7437),
        r = i(2265),
        a = i(9413);
      let o = (0, r.createContext)({ allBlogPosts: [] }),
        s = (e) => {
          let { children: t } = e,
            [i, s] = (0, r.useState)([]);
          return (
            (0, r.useEffect)(() => {
              (async () => {
                let e = (0, a.e)();
                s(
                  (await e.getAllByType("blog_post"))
                    .map((e) => ({
                      id: e.uid,
                      title: e.data.title,
                      blogImage: e.data.blog_image,
                      date: e.data.date,
                      url: e.data.url,
                      content: e.data.content,
                      readTime: e.data.read_time,
                      topic: e.data.topic,
                      highlight_blog: e.data.highlight_blog,
                    }))
                    .sort((e, t) => {
                      let i = new Date(e.date),
                        n = new Date(t.date);
                      return i > n ? -1 : i < n ? 1 : 0;
                    })
                );
              })();
            }, []),
            (0, n.jsx)(o.Provider, { value: { allBlogPosts: i }, children: t })
          );
        },
        l = () => (0, r.useContext)(o);
    },
    810: function (e, t, i) {
      var n = i(2265);
      t.Z = function () {
        let [e, t] = (0, n.useState)();
        return (
          (0, n.useEffect)(() => {
            let e = () => {
              t(window.innerWidth);
            };
            return (
              t(window.innerWidth),
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          { windowWidth: e }
        );
      };
    },
    9413: function (e, t, i) {
      i.d(t, {
        e: function () {
          return l;
        },
      });
      var n = i(2022),
        r = i(8274),
        a = JSON.parse('{"AF":"multipool-finance"}');
      let o = i(357).env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || a.AF,
        s = [],
        l = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            t = n.eI(o, {
              routes: s,
              fetchOptions: {
                next: { tags: ["prismic"] },
                cache: "force-cache",
              },
              ...e,
            });
          return r.L({ client: t, previewData: e.previewData, req: e.req }), t;
        };
    },
  },
]);
