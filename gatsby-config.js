const loadFont = {
  resolve: "gatsby-plugin-google-fonts",
  options: {
    fonts: ["roboto:400,700"]
  }
};

module.exports = {
  polyfill: false,
  siteMetadata: {
    language: "en"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-next",
    loadFont
  ]
};
