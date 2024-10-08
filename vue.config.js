const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})


// const path = require('path')
// const merge = require('webpack-merge')

// const buildConfig = process.env.NODE_ENV === 'prd' ? require('./config/prd.config.js') : require('./config/dev.config.js')
// // 빌드 모드의 따른 웹팩 설정

// module.exports = merge(buildConfig, {
//   outputDir: 'dist',
//   configureWebpack: {
//     output: { // 빌드시마다 js파일명 변경
//       filename: 'js/[name].[hash].js',
//       chunkFilename: 'js/[id].[hash].js'
//     },
//     resolve: {
//       alias: {
//         '@': path.join(__dirname, 'src/')
//       }
//     }
//   }
// })