/*
 * @Date: 2022-05-25 16:59:26
 * @Description: 开发环境
 */

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const devConfig = require('./webpack/webpack.dev')
const { spawn } = require('cross-spawn')
const path = require('path')

const compiler = webpack(devConfig)
const devServerOptions = {
  host: 'localhost.vrtbbs.com',
  client: {
    logging: 'info',
    overlay: true, // 浏览器显示错误
    progress: true, // 浏览器显示进度
  },
  historyApiFallback: true, // 修复路由刷新404问题
  // hot: true, // 热更新
  // magicHtml: true,
  open: false, // 自动打开浏览器
  port: 9000, // 端口号
  compress: true, // 开启gzip压缩
  static: false, // 静态资源的本地路径
  proxy: {
    // 配置代理
    '/ums': {
      // pathRewrite: {'^/api' : ''},
      // target: 'http://yupao-develop-intranet.vrtbbs.com/',
      target: 'http://yupao-develop.vrtbbs.com',
      //target: 'http://localhost:8080/',
      // target: 'https://yupao-test.vrtbbs.com/',
      changeOrigin: true, // target是域名的话，需要这个参数，
      secure: false, // 不检查安全问题。 设置后，可以接受运行在 HTTPS 上，可以使用无效证书的后端服务器
    },
    '/uaa': {
      // target: 'http://yupao-develop-intranet.vrtbbs.com/',
      target: 'http://yupao-develop.vrtbbs.com',
      changeOrigin: true, // target是域名的话，需要这个参数，
      secure: false, // 不检查安全问题。 设置后，可以接受运行在 HTTPS 上，可以使用无效证书的后端服务器
    },
  },
}

const server = new WebpackDevServer(devServerOptions, compiler)
server.startCallback(() => {
  if (process.argv.includes('--mock')) {
    spawn('node', [path.join(__dirname, './mock-serve/index.js'), 'port=8080'], {
      stdio: 'inherit',
    })
  }
})
