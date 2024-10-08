const path = require('path')
// let entry = '../src/main/main.ts'
// let outputDir = '../build'
// let obigoConfigPath = './config'
const excludeSrc = []
// let rmIgnore = 'gadgets/*'

let copyWebpackFiles = [
]

const cleanExcludeDirs = [
]

const isDev = process.env.BUILD_ENV.includes('dev:')
const evn = process.env.BUILD_ENV.replace('dev:', '').split('--')
const appName = evn[0]
const project = evn[1]
const headerTitle = process.env.BUILD_ENV

const outputDir = `../build/${appName}`
const obigoConfigPath = `./config/${project}/${appName}`
let entry = `../src/${appName}/main.ts`

if (!isDev) {
  copyWebpackFiles = [
    { from: `./config/${project}/${appName}/config.xml`, flatten: true },
    { from: `./config/${project}/${appName}/icon.png`, flatten: true },
    { from: `./config/${project}/${appName}/splash.png`, flatten: true },
    { from: `./src/${appName}/ui/assets/locales/ko.json`, flatten: true, to: 'locales' }
  ]
}

if (process.env.BUILD_ENV.includes('dev:')) {
  entry = `../src/${appName}/dev_main.ts`
}

const userConfig = {
  base: {
    entry: entry,
    excludeSrc: excludeSrc,
    headerTitle: headerTitle,
    assetsPath: `../src/${appName}/ui/assets`,
    imagePath: `src/${appName}/ui/img/${project}`,
    stylePath: `src/${appName}/ui/style/${project}`,
    srcDrirectory: `src/${appName}`
  },
  dev_server: {
    // assetsRoot: 'mockdata/' + path.basename(obigoConfigPath),
    assetsRoot: './',
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    copyWebpackFiles: [],
    cleanExcludeDirs: [],
    obigoConfigPath,
    locales: `../src/${appName}/ui/assets`
  },
  dev: {
    assetsRoot: outputDir,
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    copyWebpackFiles: copyWebpackFiles,
    cleanExcludeDirs: cleanExcludeDirs
  },
  prod: {
    assetsRoot: outputDir,
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
    copyWebpackFiles: copyWebpackFiles,
    cleanExcludeDirs: cleanExcludeDirs
  }
}

module.exports = userConfig