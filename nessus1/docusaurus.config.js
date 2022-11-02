// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ramiro Torres',
  /* tagline: 'Dinosaurs are cool',*/
  url: 'https://Ramixter.io',
  baseUrl: '/nessus1/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/1650555362623.jpg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Ramixter', // Usually your GitHub org/user name.
  projectName: 'nessus1', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en' , 'es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Ramiro Torres',
        logo: {
          alt: 'Ramiro Torres',
          src: 'img/1650555362623.jpg',
          srcDark: 'img/1650555362623.jpg',
          target: '_self',
          width: 32,
          height: 32,
          className: 'custom-navbar-logo-class',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: "Let's Start",
          },
          // {
          //   type: 'docsVersionDropdown',
          //   position: 'right',
          // },
          {
            type: 'localeDropdown',
            position: 'left',
          },
          {
            type: 'dropdown',
            label: 'Related',
            position: 'right',
            items: [
              {
                label: 'Google',
                href: 'https://www.google.com',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com',
              },
              // ... more items
            ],
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://ramitorres.com/',
            label: 'My Web',
            position: 'right',
          },
          // {
          //   href: "https://github.com/Ramixter/",
          //   position: "right",
          //   className: "header-github-link",
          //   "aria-label": "GitHub repository",
          // },
          {
            href: "https://es.linkedin.com/in/ramitorres",
            position: "right",
            className: "header-linkedin-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Docs',
      //       items: [
      //         {
      //           label: 'Tutorial',
      //           to: '/docs/intro',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Stack Overflow',
      //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //         },
      //         {
      //           label: 'Discord',
      //           href: 'https://discordapp.com/invite/docusaurus',
      //         },
      //         {
      //           label: 'Twitter',
      //           href: 'https://twitter.com/docusaurus',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'Blog',
      //           to: '/blog',
      //         },
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/facebook/docusaurus',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
