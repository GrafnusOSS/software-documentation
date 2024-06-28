import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Blog",
      icon: "book",
      prefix: "blog/",
      link: "blog/",
      children: "structure",
    },
  ],
  "/portalshard/": [
    {
      text: "PortalShard",
      icon: "laptop-code",
      children: "structure",
    },
  ],
});
