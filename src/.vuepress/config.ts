import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite'

import theme from "./theme.js";

export default defineUserConfig({
  
  bundler: viteBundler({
    viteOptions: {
      assetsInclude: ['**/*.PNG'],
    },
    vuePluginOptions: {},
  }),

  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "GrafnusOSS",
      description: "GrafnusOSS documentation",
    },/**
    "/de/": {
      lang: "de-DE",
      title: "GrafnusOSS",
      description: "GrafnusOSS Dokumentation",
    },*/
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
