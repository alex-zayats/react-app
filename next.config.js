const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common');

module.exports = {
  webpack(config, options) {
    config.resolve.alias['src'] = path.join(__dirname, '/src');
    return config;
  },
  future: {
    webpack5: true
  }
}