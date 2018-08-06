module.exports = {
  siteMetadata: {
    title: 'JS IPFS'
  },
  pathPrefix: '.',
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        include: /media/
      }
    },
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
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }
  ]
}
