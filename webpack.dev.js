const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common.js');

require('dotenv').config();

const DIST_DIR = path.join(__dirname, '../public');

module.exports = merge(common, {
  // dev stuff
  devServer: {
    contentBase: DIST_DIR,
    proxy: {
      '/': `http://${process.env.HOST}:${process.env.PORT}`,
      changeOrigin: true,
    },
  },
  optimization: {
    nodeEnv: 'development',
  },
  devtool: 'inline-source-map',
  mode: 'development',
});
