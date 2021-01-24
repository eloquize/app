const HtmlWebpackPlugin = require('html-webpack-plugin');
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
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }],
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'App Name',
    template,
    appMountId: 'app',
  })],
};
