__webpack_public_path__ = "/docs/"

module.exports = {
    title: 'Loft',
    tagline: 'The tagline of my site',
    url: 'https://loft.sh',
    baseUrl: __webpack_public_path__,
    favicon: '/media/loft-favicon.png',
    organizationName: 'loft-sh', // Usually your GitHub org/user name.
    projectName: 'loft', // Usually your repo name.
    themeConfig: {
        zoomSelector: '.markdown figure > img',
        colorMode: {
            disableSwitch: true,
        },
        tableOfContents: {
            minHeadingLevel: 2,
            maxHeadingLevel: 4,
        },
        navbar: {
            logo: {
                alt: 'loft',
                src: '/media/loft-logo.svg',
                href: 'https://loft.sh/',
                target: '_self',
            },
            items: [
                {
                    type: 'docsVersionDropdown',
                    position: 'left',
                },
                {
                    href: 'https://loft.sh/',
                    label: 'Website',
                    position: 'left',
                    target: '_self'
                },
                {
                    href: 'https://loft.sh/blog',
                    label: 'Blog',
                    position: 'left',
                    target: '_self'
                },
                {
                    href: 'https://slack.loft.sh/',
                    className: 'slack-link',
                    'aria-label': 'Slack',
                    position: 'right',
                },
                {
                    href: 'https://github.com/loft-sh/loft',
                    className: 'github-link',
                    'aria-label': 'GitHub',
                    position: 'right',
                },
            ],
        },
        algolia: {
            apiKey: "044d3602ef54884ee5061ee6bc6a397b",
            appId: 'JMCOHI0J0S',
            indexName: "loft-sh",
            placeholder: "Search...",
        },
        footer: {
            style: 'light',
            links: [],
            copyright: `Copyright © ${new Date().getFullYear()} Loft Labs, Inc.`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    path: 'pages',
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                    showLastUpdateTime: true,
                    editUrl: 'https://github.com/loft-sh/loft/edit/master/docs/',
                    lastVersion: "current",
                    versions: {
                        current: {
                            label: "2.0 (Latest)",
                            path: ""
                        }
                    },
                    remarkPlugins: [
                        [
                            require('mdx-mermaid'),
                            {
                                mermaid: {
                                    securityLevel: "loose",
                                    theme: 'neutral',
                                    themeVariables: {
                                        primaryColor: '#00bdff',
                                        lineColor: '#bdd6f3',
                                        arrowheadColor: '#bdd6f3',
                                        mainBkg: '#6c89ad',
                                        contrast: '#3e5371',
                                        textColor: '#fff',
                                        primaryTextColor: '#fff',
                                        secondaryTextColor: '#fff',
                                        tertiaryTextColor: '#fff',
                                        border1: 'transparent',
                                        border2: 'transparent',
                                        clusterBkg: 'transparent',
                                        clusterBorder: '#bdd6f3',
                                        edgeLabelBackground: '#bcd6f3',

                                    },
                                    flowchart: {
                                        curve: 'basis',
                                        nodeSpacing: 20,
                                        rankSpacing: 50,
                                    }
                                }
                            }
                        ]
                    ],
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.scss'),
                },
            },
        ],
        [
            'redocusaurus',
            {
                specs: [
                    {
                        spec: '../api/openapi-spec/openapi.yaml',
                    },
                ],
                theme: {
                    primaryColor: '#00bdff',
                    redocOptions: {
                        hideDownloadButton: false,
                        disableSearch: true,
                        colors: {
                            border: {
                                dark: '#00bdff',
                                light: '#00bdff',
                            }
                        }
                    },
                },
            },
        ],
    ],
    themes: [
        '@saucelabs/theme-github-codeblock'
    ],
    plugins: [
        'docusaurus-plugin-sass',
        'plugin-image-zoom',
    ],
    scripts: [
        {
            src:
                'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
            async: true,
        },
        {
            src:
                '/docs/js/custom.js',
            async: true,
        },
    ],
};
