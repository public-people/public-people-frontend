const loadFont = {
  resolve: "gatsby-plugin-google-fonts",
  options: {
    fonts: ["roboto:400,700"]
  }
};

const loadPurgeCss = {
  resolve: "gatsby-plugin-purgecss",
  options: {
    rejected: true
  }
};

module.exports = {
  siteMetadata: {
    language: "en"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-next",
    loadFont,
    loadPurgeCss
  ]
};
