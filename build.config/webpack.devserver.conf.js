
'use strict'
const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base.conf')

const parseConfigXml = require('../shared/scripts/parseConfigXml.js')
const sharedApi = require('../shared/sim/devapi')
// const parseConfigXml = require('./parseConfigXml.js')
const userConfig = require('./webpack.variable.js')
const fs = require('fs')
// const xml2js = require ('xml2js')

// const { readResource } = require('./devserver_api')

// function assetsPath (_path) {
//   return path.posix.join(userConfig.dev_server.assetsSubDirectory, _path)
// }

// function resolve (dir) {
//   return path.resolve(__dirname, '..', dir)
// }

const webpackDevServerConfig = merge(webpackBaseConfig, {
  mode: 'development',
  entry: path.resolve(__dirname, userConfig.base.entry),
  output: {
    path: path.resolve(__dirname, userConfig.dev_server.assetsRoot),
    filename: '[name].js'
    // publicPath: userConfig.dev_server.assetsPublicPath
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    host: 'localhost',
    // contentBase: [userConfig.dev_server.assetsRoot, path.join(__dirname, '../mockdata/' + path.basename(userConfig.dev_server.obigoConfigPath))],
    contentBase: [userConfig.dev_server.assetsRoot, path.join(__dirname, '../mockdata/'), path.join(__dirname, userConfig.dev_server.locales)],
    publicPath: userConfig.dev_server.assetsPublicPath,
    // historyApiFallback: {
    //   rewrites: [
    //     { from: /.*/, to: path.posix.join(userConfig.dev_server.assetsPublicPath, 'index.html') }
    //   ]
    // },
    // hot: true,
    // contentBase: [userConfig.dev_server.assetsRoot, path.join(__dirname, '../dummy/resource')],
    // publicPath: userConfig.dev_server.assetsPublicPath,
    // historyApiFallback: {
    //   rewrites: [
    //     { from: /.*/, to: path.posix.join(userConfig.dev_server.assetsPublicPath, 'index.html') }
    //   ]
    // },
    before: (app) => {
      // const mockdataPath = userConfig.dev_server.assetsRoot
      const mockdataPath = 'mockdata'
      sharedApi(app)

      app.get('/dev/configxml/:appname', (req, res, _next) => {
        const widgetInfo = parseConfigXml(`config/${req.params.appname}/config.xml`)
        if (widgetInfo) {
          res.send(JSON.stringify(widgetInfo))
        } else {
          res.sendStatus(500)
        }
      })

      app.get('/dev/store/:location', (req, res, _next) => {
        try {
          const location = req.params.location
          if (location !== 'server' && location !== 'local') {
            res.sendStatus(500)
            return
          }
          const widgets = []

          const BASE_DIR = `${mockdataPath}/widgets/${location}`
          let widgetDirs = fs.readdirSync(BASE_DIR)
          // 런처 스토어
          // const defApps = ['config/store/config.xml']
          // defApps.forEach(xmlDir => {
          //   const widgetInfo = parseConfigXml(xmlDir)
          //   const storeApp = {
          //     id: widgetInfo.id,
          //     name: widgetInfo.name,
          //     shortName: widgetInfo.shortName,
          //     desc: widgetInfo.description,
          //     icon: widgetInfo.localURI + '/' + widgetInfo.iconSrcPath,
          //     version: widgetInfo.version,
          //     archive: widgetInfo.archive,
          //     reserved: Math.floor(Math.random() * 2) === 0 ? false : true
          //   }
          //   if (location === 'sever') {
          //     storeApp.version = '2.8.33'
          //   }
          //   widgets.push(storeApp)
          // })

          if (location === 'server') {
            const localWidgetDirs = fs.readdirSync(`${mockdataPath}/widgets/local`)
            widgetDirs = widgetDirs.concat(localWidgetDirs)
          }
          console.log('-------config dirs-------------')
          console.log(widgetDirs)

          for (let i = 0; i < widgetDirs.length; i += 1) {
            const widgetPath = BASE_DIR + '/' + widgetDirs[i]
            const configXmlPath = widgetPath + '/' + 'config.xml'
            const widgetInfo = parseConfigXml(configXmlPath)
            if (widgetInfo) {
              // 이미 추가된 위젯은 재 추가하지 않음 (서버 앱 우선 처리)
              if (widgets.find(w => w.id === widgetInfo.id)) {
                continue
              }

              // IStoreAppInfo
              const storeApp = {
                id: widgetInfo.id,
                name: widgetInfo.name,
                shortName: widgetInfo.shortName,
                desc: widgetInfo.description,
                icon: widgetInfo.localURI + '/' + widgetInfo.iconSrcPath,
                version: widgetInfo.version,
                archive: widgetInfo.archive,
                reserved: Math.floor(Math.random() * 2) === 0 ? false : true,
                service: widgetInfo.service
              }

              if (location === 'server' && (storeApp.id.indexOf('launcher') > -1 || storeApp.id.indexOf('store') > -1)) {
                storeApp.version = '2.8.8'
              }

              if (location === 'server' && fs.existsSync(widgetPath + '/update.json')) {
                const updateInfo = JSON.parse(fs.readFileSync(widgetPath + '/update.json').toString())
                try {
                  // IStoreServerAppInfo
                  Object.keys(updateInfo).forEach((key) => {
                    storeApp[key] = updateInfo[key]
                  })
                } catch (e) {
                  console.warn(e)
                }
              }
              widgets.push(storeApp)
            }
          }
          res.send(JSON.stringify(widgets))
        } catch (e) {
          console.warn(`parse failure (${e.message})`)
          res.send(JSON.stringify([]))
        }
      })

      app.get('/dev/widgets', (req, res, _next) => {
        try {
          const widgets = []

          const storeInfo = parseConfigXml('config/store/config.xml')
          if (storeInfo) {
            widgets.push(storeInfo)
          }

          const BASE_DIR = `${mockdataPath}/widgets/local`
          const widgetDirs = fs.readdirSync(BASE_DIR)

          for (let i = 0; i < widgetDirs.length; i += 1) {
            // const widgetPath = widgetDirs[i]
            const configXmlPath = BASE_DIR + '/' + widgetDirs[i] + '/' + 'config.xml'
            const widgetInfo = parseConfigXml(configXmlPath)
            if (widgetInfo) {
              widgets.push(widgetInfo)
            }
          }
          res.send(JSON.stringify(widgets))
        } catch (e) {
          console.warn(`parse failure (${e.message})`)
          res.send(JSON.stringify([]))
        }
      })

      app.get('/dev/notice', (req, res, _next) => {
        try {
          const noticePath = `${mockdataPath}/store/notice.json`
          if (fs.existsSync(noticePath)) {
            // 파싱 가능한 형태인지 확인 후 전달
            const updateInfo = JSON.parse(fs.readFileSync(noticePath).toString())
            res.send(JSON.stringify(updateInfo))
            return
          } else {
            console.warn('notice.json not exist')
          }
        } catch (e) {
          console.warn(`parse failure (${e.message})`)
        }
        res.send(JSON.stringify([]))
      })

      app.get('/policy', (req, res, _next) => {
        try {
          const policy = `${mockdataPath}/policy/policy.txt`
          if (fs.existsSync(policy)) {
            // 파싱 가능한 형태인지 확인 후 전달
            const policyStr = fs.readFileSync(policy).toString()
            res.send(policyStr)
            return
          } else {
            console.warn('notice.json not exist')
          }
        } catch (e) {
          console.warn(`parse failure (${e.message})`)
        }
        res.send('')
      })

      // app.get('/locales/:lan', (req, res, _next) => {
      //   try {
      //     const language = `${req.params.lan}.json`
      //     if (fs.existsSync(language)) {
      //       // 파싱 가능한 형태인지 확인 후 전달
      //       const data = JSON.parse(fs.readFileSync(language).toString())
      //       res.send(JSON.stringify(data))
      //       return
      //     } else {
      //       console.warn('notice.json not exist')
      //     }
      //   } catch (e) {
      //     console.warn(`parse failure (${e.message})`)
      //   }
      //   res.send(JSON.stringify([]))
      // })
      // // app.get('/method/app/:method', async (req, res, next) => {
      //   res.send('ok')
      // })
      // app.get('/prop/app/:prop', async (req, res, next) => {
      //   res.send('ok')
      // })
      // app.get('/event/app/:event', async (req, res, next) => {
      //   res.send('ok')
      // })
      // app.get('/dummy/playlist/:category', async (req, res, next) => {
      //   const category = req.params.category ? req.params.category : 'music'
      //   const contents = await readResource(category)
      //   res.send(JSON.stringify(contents))
      // })
      // app.get('/create/:category', async (req, res) => {
      //   const category = req.params.category ? req.params.category : 'top100'
      //   const contents = await makeResource(category)

      //   res.send(JSON.stringify(contents))
      // })
    }
  },
  module: {
    rules: [
    ]
  },
  resolve: {
    alias: {
      // 'ailogic': resolve('src/shared/AiService/fake')
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.DEV_OWN_WIDGET': JSON.stringify(parseConfigXml(userConfig.dev_server.obigoConfigPath + '/config.xml'))
    })
  ]
})

module.exports = webpackDevServerConfig
