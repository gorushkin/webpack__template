const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.config');
const path = require('path');


const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  contentBase: baseWebpackConfig.externals.paths.dist,
  devtool: '#@cheap-module-eval-source-map',
  devServer: {
    port: 8081,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig);
})
