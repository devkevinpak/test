
'use strict'
const path = require('path')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.conf')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const userConfig = require('./webpack.variable.js')

// function assetsPath (_path) {
//   return path.posix.join(userConfig.dev.assetsSubDirectory, _path)
// }

let webpackDevConfig = merge(webpackBaseConfig, {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, userConfig.dev.assetsRoot),
    filename: '[name].js',
    publicPath: userConfig.dev.assetsPublicPath
  },
  // devtool: 'cheap-module-source-map',
  module: {
    rules: [
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
})

if (userConfig.dev.copyWebpackFiles.length > 0) {
  webpackDevConfig = merge(webpackDevConfig, {
    plugins: [
      // copy custom static assets
      new CopyWebpackPlugin(
        userConfig.dev.copyWebpackFiles
      )
    ]
  })
}
module.exports = webpackDevConfig
