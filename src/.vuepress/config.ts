import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";

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

  plugins: [
    searchProPlugin({
      indexContent: true,
      customFields: [
        {
          getter: ({ frontmatter }) => frontmatter.tag as string[],
          formatter: `Tag: $content`,
        },
        {
          getter: ({ frontmatter }) => frontmatter.category as string[],
          formatter: `Category: $content`,
        },
      ],
    }),
  ],

  shouldPrefetch: false,
});
