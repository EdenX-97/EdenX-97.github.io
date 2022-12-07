import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    {
      icon: "note",
      text: "Notes",
      prefix: "notes/",
      link: "notes/",
      children: "structure",
    },
  ],
});
