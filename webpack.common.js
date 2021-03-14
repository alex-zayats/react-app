const webpack = require('webpack');
const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    publicPath: '/',
    assetModuleFilename: 'assets/[hash][ext][query]'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
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
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: `${PATH.SRC}/index.html`
    }),
    new webpack.ProgressPlugin()
  ]
};
