module.exports = {
  siteMetadata: {
    title: 'JS IPFS'
  },
  pathPrefix: '.',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-ipfs',
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
    }
  ]
}
