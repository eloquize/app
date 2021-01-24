const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const template = require('html-webpack-template');
const path = require('path');

const SRC_DIR = path.join(__dirname, 'client', 'src');
const BUILD_DIR = path.join(__dirname, 'client', 'build');

module.exports = {
  context: SRC_DIR,
  entry: './index.jsx',
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: [
        'babel-loader',
      ],
    }, {
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader, 'css-loader'],
    }, {
      test: /\.svg$/,
      loader: 'svg-inline-loader',
    }],
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'App Name',
    template,
    links: [
      'https://fonts.googleapis.com/css2?family=Comfortaa&display=swap',
    ],
    appMountId: 'app',
  }), new MiniCssExtractPlugin()],
};
