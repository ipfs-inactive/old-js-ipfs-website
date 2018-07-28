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
    'gatsby-plugin-ipfs'
  ]
}
