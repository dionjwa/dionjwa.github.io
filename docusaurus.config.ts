import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';

const { themes } = require("prism-react-renderer");
const lightTheme = themes.github;
const darkTheme = themes.dracula;

const config: Config = {
  title: "Dion Whitehead",
  tagline: "evolution of complex systems happens right now",
  favicon: "favicon.ico",

  // Set the production url of your site here
  url: "https://evolvedeeptimecomplex.systems",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "dionjwa", // Usually your GitHub org/user name.
  projectName: "dionjwa.github.io", // Usually your repo name.

  onBrokenLinks: "warn",
  // onBrokenMarkdownLinks: "throw",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  themes: ["@docusaurus/theme-mermaid", "@docusaurus/theme-live-codeblock"],

  markdown: {
    mermaid: true,
  },

  

  presets: [
    [
      "classic",
      {
        docs: false,
        blog: {
          showReadingTime: false,
          blogSidebarCount: 0,
          routeBasePath: "/",
        },

        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("./src/css/notion-to-markdown-columns.css"),
          ],
        },
      },
    ],
  ],

  themeConfig: {
    metadata: [
      {
        name: "keywords",
        content:
          "metapages, docker, justfile, mermaid, deno, whales, cetaceans, simulations, evolution, superslides, gestures, hand control, deep time",
      },
    ],
    mermaid: {
      theme: {
        light: "neutral",
        dark: "forest",
      },
      options: {
        securityLevel: "loose",
        flowchart: {
          useMaxWidth: false,
          htmlLabels: false,
        },
      },
    },

    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "",
      // logo: {
      //   alt: "Logo",
      //   src: "dion-profile-github.jpg",
      // },
      items: [
        { to: "/", label: "Dion Whitehead, PhD", position: "left" },
        {
          href: "https://github.com/dionjwa",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Tutorial',
        //       to: '/docs/intro',
        //     },
        //   ],
        // },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: '/blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} metapages, LLC. Built with Docusaurus.`,
    } satisfies Preset.ThemeConfig,
    prism: {
      theme: lightTheme,
      darkTheme: darkTheme,
      additionalLanguages: [
        "bash",
        "json",
        "python",
        "typescript",
        "javascript",
        "yaml",
        "markdown",
        "mermaid",
      ],
    },
  },
};

export default config;
