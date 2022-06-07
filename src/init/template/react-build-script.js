module.exports = {
  // host: 'localhost.vrtbbs.com',
  proxy: {
    // 配置代理
    '/ums': {
      // pathRewrite: {'^/api' : ''},
      // target: 'http://yupao-develop-intranet.vrtbbs.com/',
      target: 'http://yupao-develop.vrtbbs.com',
      // target: 'http://localhost:8080/',
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
