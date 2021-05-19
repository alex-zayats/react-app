const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common');

module.exports = {
  webpack(config, options) {
    config.resolve.alias['src'] = path.join(__dirname, '/src');
    config.module.rules = config.module.rules.concat(
      [
        // {
        //   test: /\.(js|jsx)$/,
        //   exclude: /node_modules/,
        //   loader: 'babel-loader'
        // },
        // {
        //   test: /\.(scss|css)$/,
        //   exclude: /node_modules/,
        //   use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
        // },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
           filename: 'fonts/[hash][ext][query]'
          }
        },
        {
          test: /\.(jpg|jpeg|png|gif)$/i,
          type: 'asset/resource'
        }
      ]
    );
    return config;
  },
  future: {
    webpack5: true
  }
}