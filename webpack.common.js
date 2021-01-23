const HtmlWebpackPlugin = require('html-webpack-plugin');
const template = require('html-webpack-template');
const path = require('path');

const SRC_DIR = path.join(__dirname, 'client', 'src');
const DIST_DIR = path.join(__dirname, 'client', 'dist');

module.exports = {
  context: SRC_DIR,
  entry: './index.jsx',
  output: {
    path: DIST_DIR,
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
    }],
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'App Name',
    // inject: false,
    template,
    appMountId: 'app',
  })],
};
