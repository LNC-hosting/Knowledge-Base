import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "LNC",
  tagline: "Internal Documentation and Projects Overview",
  favicon: "img/favicon.ico",

  url: "https://lnc-knowledge-base.vercel.app/",
  baseUrl: "/",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  headTags: [
    {
      tagName: "script",
      attributes: {
        async: "true",
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5587965043502846",
        crossorigin: "anonymous",
      },
    },
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "ignore",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    algolia: {
      appId: "9V55KHWV0Y",
      apiKey: "2779c44d60b89fe93fac8c68e2074d6b",
      indexName: "lnc-knowledge-base",
      contextualSearch: true,
      externalUrlRegex: "external\\.com|domain\\.com",
      searchParameters: {},
      searchPagePath: "false",
      insights: false,
    },
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "",
      logo: {
        alt: "My Site Logo",
        src: "img/favicon.ico",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        {
          to: "/blog",
          label: "Articles",
          position: "left",
        },
        {
          href: "https://lnc-community.vercel.app/",
          label: "LNC Community",
          position: "right",
        },
        {
          href: "https://github.com/LNC-Network/Knowledge-Base",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    /* footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/company/late-night-coders",
            },
            {
              label: "Gmail",
              href: "mailto:latenightcoders1@gmail.com",
            },
            {
              label: "X",
              href: "https://x.com/LNC_Community",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} LNC.`,
    }, */
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
