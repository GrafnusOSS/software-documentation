import { hopeTheme } from "vuepress-theme-hope";

import { enNavbar, deNavbar } from "./navbar/index.js";
import { enSidebar, deSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://oss.grafnus.de",

  author: {
    name: "Grafnus",
    url: "https://grafnus.de",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "https://oss.grafnus.de/Grafnus.svg",

  repo: "GrafnusOSS/software-documentation",

  docsDir: "src",

  blog: {
    medias: {
      Discord: "https://discord.com",
      //Email: "mailto:grafnus@grafnus.de",
      GitHub: "https://github.com/Grafnus"
    },
  },

  locales: {
    "/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "GrafnusOSS - To extend on vanilla Minecraft",

      displayFooter: true,

      blog: {
        description: "A young software developer",
        intro: "/intro.html",
      },

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },

    /**
     * German locale config
    "/de/": {
      // navbar
      navbar: deNavbar,

      // sidebar
      sidebar: deSidebar,

      footer: "GrafnusOSS - To extend on the exsiting",

      displayFooter: true,

      blog: {
        description: "Ein junder Software Entwickler",
        intro: "/de/intro.html",
      },

      // page meta
      metaLocales: {
        editLink: "Bearbeite diese Seite auf Github",
      },
    },
     */
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      //"/de/demo/encrypt.html": ["1234"],
    },
  },

  // enable it to preview all changes in time
  // hotReload: true,

  plugins: {
    blog: true,

    // Install @waline/client before enabling it
    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },

    components: {
      components: ["Badge", "VPCard"],
    },

    // These features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      alert: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true, //yes
      imgLazyload: true, //yes
      // Enable image mark
      imgMark: true,
      imgSize: true, //yes
      include: true,
      mark: true,
      hint: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,

      // install chart.js before enabling it
      // chart: true,

      // insert component easily

      // install echarts before enabling it
      // echarts: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // install katex before enabling it
      // katex: true,

      // install mathjax-full before enabling it
      // mathjax: true,

      // install mermaid before enabling it
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // install @vue/repl before enabling it
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
