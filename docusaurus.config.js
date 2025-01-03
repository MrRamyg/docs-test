// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NexArisDS Documentation',
  tagline: 'Elevate your business with NexAris Digital Systems. From web-development, discord bot development, and more',
  favicon: 'https://ik.imagekit.io/crunch/Assets/NexArisDigitalSystems%20(1)_SBmwl7r2W.jpeg?updatedAt=1734129950663',

  // Set the production url of your site here
  url: 'https://docs.nexarisds.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',


  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MrRamyg', // Usually your GitHub org/user name.
  projectName: 'docs-test', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/MrRamyg/docs-test',
        },
      // blog: {  // Blog feature commented out
      //   showReadingTime: true,
      //   feedOptions: {
      //     type: ['rss', 'atom'],
      //     xslt: true,
      //   },
      //   // Please change this to your repo.
      //   // Remove this to remove the "edit this page" links.
      //   editUrl:
      //     'https://github.com/MrRamyg/docs-test',
      //   // Useful options to enforce blogging best practices
      //   onInlineTags: 'warn',
      //   onInlineAuthors: 'warn',
      //   onUntruncatedBlogPosts: 'warn',
      // },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'NexArisDS - Docs',
        logo: {
          alt: 'NexArisDS',
          src: 'https://ik.imagekit.io/crunch/Assets/NexArisDigitalSystems%20(1)_SBmwl7r2W.jpeg?updatedAt=1734129950663',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'QUICK LINKS',
            items: [
              {
                label: 'Home',
                to: 'https://nexarisds.org',
              },
              {
                label: 'Helpdesk',
                to: 'https://helpdesk.nexarisds.org',
              },
            ],
          },
          {
            title: 'About Us & Resources',
            items: [
              {
                label: 'Meet the Team',
                href: 'https://nexarisds.org/team',
              },
              {
                label: 'Forum',
                href: 'https://forum.nexarisds.org/',
              },
              {
                label: 'Documentation',
                href: 'https://docs.nexarisds.org/',
              },
              {
                label: 'Discord',
                href: 'https://nexarisds.org/dc',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Terms of Service',
                to: '/',
              },
              {
                label: 'Privacy Policy',
                href: 'https://github.com/NexAris-Digital-Systems',
              },
              {
                label: 'Cookie Policy',
                href: 'https://forum.nexarisds.org/public/d/10-cookie-policy',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NexAris Digital Systems. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
