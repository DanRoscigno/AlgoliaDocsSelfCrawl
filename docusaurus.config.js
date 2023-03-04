const lightTheme = require('prism-react-renderer/themes/vsLight');
const darkTheme = require('prism-react-renderer/themes/vsDark');

const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ClickHouse Docs',
  tagline: 'Documentation, quick starts, user guides, technical references, FAQs and more...',
  url: 'https://danroscigno.github.io/',
  baseUrl: '/AlgoliaDocsSelfCrawl/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'ignore',
  favicon: 'img/favicon.ico',
  organizationName: 'ClickHouse',
  projectName: 'clickhouse-docs',

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  scripts: [
    '/docs/js/analytics.js',
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editCurrentVersion: true,
          editUrl: ({ docPath }) => {
            if (docPath.includes('en/development') ||
              docPath.includes('en/engines') ||
              docPath.includes('en/getting-started') ||
              docPath.includes('en/interfaces') ||
              docPath.includes('en/operations') ||
              docPath.includes('en/sql-reference') ||
              docPath.startsWith('ru') ||
              docPath.startsWith('zh')
            ) {
              return 'https://github.com/ClickHouse/ClickHouse/tree/master/docs/' + docPath;

            } else {
              return 'https://github.com/ClickHouse/clickhouse-docs/blob/main/docs/' + docPath;
            }
          },
          showLastUpdateTime: false,
          sidebarCollapsed: true,
          routeBasePath: '/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-KF1LLRTQ5Q',
        }
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: '62VCH2MD74',
        apiKey: '2363bec2ff1cf20b0fcac675040107c3',
        indexName: 'clickhouse',
        contextualSearch: false,
        searchPagePath: 'search',
      },
      image: 'img/logo.png',
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        }
      },
      //      autoCollapseSidebarCategories: true,
      navbar: {
        hideOnScroll: false,
        title: 'ClickHouse',
        logo: {
          alt: 'ClickHouse',
          src: 'img/logo_without_text.svg',
          href: 'https://clickhouse.com/',
        },
        items: [
          {
            type: 'dropdown',
            label: 'Product',
            className: 'ch-menu',
            position: 'left',
            items: [
              {
                label: 'ClickHouse Cloud',
                to: 'https://clickhouse.com/cloud'
              },
              {
                label: 'ClickHouse Open Source',
                to: 'https://clickhouse.com/clickhouse'
              },
            ]
          },
          {
            position: 'left',
            label: 'Use Cases',
            className: 'ch-menu',
            to: 'https://clickhouse.com/customer-stories'
          },
          {
            type: 'dropdown',
            label: 'Company',
            className: 'ch-menu',
            position: 'left',
            items: [
              {
                label: 'Blog',
                to: 'https://clickhouse.com/blog',
              },
              {
                label: 'Our story',
                to: 'https://clickhouse.com/company/our-story'
              },
              {
                label: 'Careers',
                to: 'https://clickhouse.com/company/careers'
              },
              {
                label: 'Contact us',
                to: 'https://clickhouse.com/company/contact'
              },
              {
                label: 'News and events',
                to: 'https://clickhouse.com/company/news-events'
              },
            ]
          },
          {
            type: 'dropdown',
            label: 'Learn',
            className: 'ch-menu',
            position: 'left',
            items: [
              {
                type: 'doc',
                docId: 'en/coverpages/what-is-clickhouse',
                label: 'Docs',
              },
              {
                label: 'ClickHouse Academy',
                to: 'https://clickhouse.com/learn'
              },
            ]
          },
          {
            position: 'left',
            label: 'Pricing',
            className: 'ch-menu',
            to: 'https://clickhouse.com/pricing',
          },
          {
            href: 'https://clickhouse.cloud/signUp',
            position: 'right',
            className: 'header-signup-button',
            label: 'Try for Free',
          },
          {
            type: 'dropdown',
            label: 'Language',
            position: 'right',
            items: [
              {
                label: 'English',
                to: '/en/intro',
              },
            ]
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'ClickHouse',
            items: [
              {
                label: 'Company',
                to: 'https://clickhouse.com/',
              },
              {
                label: 'ClickHouse as a Service',
                to: 'https://clickhouse.com/cloud/',
              },
              {
                label: 'Careers',
                to: 'https://clickhouse.com/careers/',
              },
              {
                label: 'Learn ClickHouse',
                to: 'https://clickhouse.com/learn/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ClickHouse/ClickHouse',
              },
              {
                label: 'Blog',
                href: 'https://clickhouse.com/blog/',
              },
              {
                label: 'Meetup',
                href: 'https://www.meetup.com/pro/clickhouse/',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/c/ClickHouseDB',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ClickHouseDB',
              },
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/clickhousedb/shared_invite/zt-rxm3rdrk-lIUmhLC3V8WTaL0TGxsOmg',
              },
            ],
          },
          {
            title: 'Policies',
            items: [
              {
                label: 'Trademark Policy',
                to: 'https://clickhouse.com/legal/trademark-policy/',
              },
              {
                label: 'Privacy Policy',
                to: 'https://clickhouse.com/legal/privacy-policy/',
              },
              {
                label: 'Cookie Policy',
                to: 'https://clickhouse.com/legal/cookie-policy/',
              },
            ],
          },
        ],
        logo: {
          alt: 'ClickHouse Documentation',
          src: 'img/logo_without_text.svg',
        },
        copyright: `Copyright &copy; 2016&ndash;${new Date().getFullYear()} ClickHouse, Inc. ClickHouse Docs provided under the Creative Commons CC BY-NC-SA 4.0 license. ClickHouse&reg; is a registered trademark of ClickHouse, Inc.`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
        additionalLanguages: ['java', 'cpp'],
        magicComments: [
          // Remember to extend the default highlight class name as well!
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: { start: 'highlight-start', end: 'highlight-end' },
          },
        ],
      },
      colorMode: {
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      /*      announcementBar: {
              id: 'support_us',
              content:
                'Check out our new 25-minute video on <a href="https://clickhouse.com/company/events/getting-started-with-clickhouse/" target="_blank"> Getting Started with ClickHouse</a>',
              backgroundColor: '#0057b7',
              textColor: '#ffffff',
              isCloseable: false,
            },
      */
    }),

  plugins: [
    'remark-docusaurus-tabs',
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          { from: '/en/integrations', to: '/en/integrations/intro' },
        ],
      },
    ]
  ],
};

module.exports = config;
