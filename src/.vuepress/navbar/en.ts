import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  "/blog/",
  {
    text: "PortalShard",
    icon: "dungeon",
    prefix: "/portalshard/",
    children: [
      {
        text: "User Documentation",
        icon: "user",
        prefix: "userdocs/",
        children: [
          {
            text: "Portal Creation",
            icon: "user",
            link: "portal_creation",
          },
          {
            text: "Portal Management",
            icon: "user",
            link: "portal_management",
          },
          {
            text: "Portal Upgrades",
            icon: "user",
            link: "portal_upgrades",
          },
        ],
      },
      {
        text: "Admin Documentation",
        icon: "pen-to-square",
        prefix: "admindocs/",
        children: [
          {
            text: "Overview",
            icon: "gear",
            link: "admin_overview",
          },
          {
            text: "Install",
            icon: "gear",
            link: "admin_install",
          },
          {
            text: "Configuration",
            icon: "gear",
            link: "admin_configuration",
          },
        ],
      },
      {
        text: "Developer Documentation",
        icon: "code",
        prefix: "devdocs/",
        children: [
          {
            text: "Overview",
            icon: "code",
            link: "overview",
          }
        ],
      },
    ],
  },
]);
