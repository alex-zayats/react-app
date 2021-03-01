const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const PATH = {
  SRC: path.join(__dirname, '/src')
};

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    compress: true,
    hot: true,
    https: true,
    open: true,
    port: process.env.PORT || 3000,
    overlay: {
      warnings: true,
      errors: true
    },
    stats: {
      colors: true
    },
    historyApiFallback: true
  }
});
