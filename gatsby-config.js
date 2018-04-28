loadFont = {
  resolve: `gatsby-plugin-google-fonts`,
  options: {
    fonts: [
      `roboto\:400,700`,
    ]
  }
}


module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    loadFont,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`
      }
    }
  ],
}