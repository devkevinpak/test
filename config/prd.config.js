const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  productionSourceMap: false,
  lintOnSave: false,
  configureWebpack: {
    optimization: {
      minimizer: [new UglifyJsPlugin()] // js minify
    }
  },
  css: {
    sourceMap: false
  }
}