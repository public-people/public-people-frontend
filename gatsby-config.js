const loadFont = {
  resolve: `gatsby-plugin-google-fonts`,
  options: {
    fonts: [
      `roboto\:400,700`,
    ]
  }
}

const fileSystem = {
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `content`,
    path: `${__dirname}/content`
  }
}

module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    fileSystem,
    `gatsby-transformer-remark`,
    loadFont,
  ],
}