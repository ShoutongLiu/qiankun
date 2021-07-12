const packageName = require('./package').name;
const dev = process.env.NODE_ENV === 'development'
const port = 8081; // dev port

module.exports = {
  publicPath: `//localhost:${port}`,
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    output: {
      library: 'vue-app',
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${packageName}`
    },
  }
};