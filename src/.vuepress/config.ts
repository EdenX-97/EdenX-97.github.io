import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Eden's Knowledge Base",
      description: "Eden's personal knowledge base and blog",
    },
  },

  theme,

  shouldPrefetch: false,
});
