// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  productionSourceMap: true,
  lintOnSave: true,
  configureWebpack: {
    // plugins: [new BundleAnalyzerPlugin()] // 분석시 사용
  },
  css: {
    sourceMap: true
  }
}