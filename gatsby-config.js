module.exports = {
  siteMetadata: {
    title: 'JS IPFS'
  },
  pathPrefix: '__GATSBY_IPFS_PATH_PREFIX__',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    'gatsby-plugin-ipfs',
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'JS.IPFS',
        short_name: 'JS.IPFS',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'favicon/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'favicon/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        analyzerPort: 3000,
        openAnalyzer: false
      }
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          'UA-96910779-5'
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_name: 'gaCookie',
          cookie_domain: 'js.ipfs.io',
          cookie_expires: 0
        },
        pluginConfig: {
          head: true,
          respectDNT: true
        }
      }
    }
  ]
}
