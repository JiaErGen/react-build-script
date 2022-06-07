/*
 * @Date: 2022-05-25 16:59:26
 * @Description: 开发环境
 */

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const devConfig = require('./webpack/webpack.dev')
const { spawn } = require('cross-spawn')
const path = require('path')

const cwd = process.cwd()

const customOptions = require(path.join(cwd, 'react-build-script.js'))

const compiler = webpack(devConfig)
const devServerOptions = {
  ...customOptions,
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
}

const server = new WebpackDevServer(devServerOptions, compiler)
server.startCallback(() => {
  if (process.argv.includes('--mock')) {
    spawn('node', [path.join(__dirname, './mock-serve/index.js'), 'port=8080'], {
      stdio: 'inherit',
    })
  }
})
