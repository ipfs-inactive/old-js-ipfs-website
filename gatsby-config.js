'use strict'

module.exports = {
  siteMetadata: {
    title: 'JS IPFS'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        include: /media/
      }
    }
  ]
}
