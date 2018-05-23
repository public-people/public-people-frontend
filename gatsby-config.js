const loadFont = {
  resolve: 'gatsby-plugin-google-fonts',
  options: {
    fonts: [
      'roboto:400,700',
    ],
  },
};


module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    loadFont,
  ],
};
