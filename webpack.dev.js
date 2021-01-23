const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

require('dotenv').config();

const BUILD_DIR = path.join(__dirname, '../public');

module.exports = merge(common, {
  devServer: {
    contentBase: BUILD_DIR,
    proxy: {
      '/': `http://${process.env.HOST}:${process.env.PORT}`,
    },
  },
  optimization: {
    nodeEnv: 'development',
  },
  devtool: 'inline-source-map',
  mode: 'development',
});
