/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  english: [
    'en/coverpages/what-is-clickhouse',
    {
      type: 'category',
      label: 'About Us',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'en/about-us',
        }
      ]
    },
    {
      type: 'category',
      label: 'Get Started',
      link: {
        type: 'doc',
        id: 'en/get-started/cloud-quick-start',
      },
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'en/get-started/cloud-quick-start',
        },
    {
      type: 'category',
      label: 'SQL console',
      link: {
        type: 'doc',
        id: 'en/get-started/sql-console/opening',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'en/get-started/sql-console',
        },
      ]
    },
        {
          type: 'category',
          label: 'Tutorials and Datasets',
          link: {
            type: 'doc',
            id: 'en/getting-started/index',
          },
          collapsed: true,
          items: [
        {
          type: 'doc',
          id: 'en/quick-start',
        },
            {
              type: 'doc',
              id: 'en/tutorial'
            },
            {
              type: 'autogenerated',
              dirName: 'en/getting-started/example-datasets',
            },
            {
              type: 'doc',
              id: 'en/getting-started/playground',
            },
          ]
        },
        {
          type: 'doc',
          id: 'en/integrations/index',
        },
        {
          type: 'doc',
          id: 'en/getting-started/install',
        },
      ]
    },
  ],
};

module.exports = sidebars;
