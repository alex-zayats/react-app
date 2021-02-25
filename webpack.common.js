const webpack = require('webpack');
const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const PATH = {
  SRC: path.join(__dirname, '/src'),
  DIST: path.join(__dirname, '/dist'),
  FONTS: path.join(__dirname, '/assets/fonts'),
  ASSETS: path.join(__dirname, '/assets')
};

module.exports = {
  entry: {
    main: path.join(PATH.SRC, 'index.js')
  },
  output: {
    path: PATH.DIST,
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      assets: path.resolve(PATH.ASSETS),
      src: path.resolve(PATH.SRC)
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(scss|css)$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: { name: 'assets/fonts/[name].[ext]' }
      },
      {
        test: /\.(jpeg|png|gif)$/i,
        loader: 'file-loader',
        options: { name: 'assets/img/[name].[ext]' }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
};
