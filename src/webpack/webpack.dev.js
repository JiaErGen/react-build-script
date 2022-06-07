const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.common')

module.exports = merge(webpackConfig, {
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    }
  },
  mode: 'development',
  devtool: 'inline-source-map',
  optimization: {
    runtimeChunk: 'single',
  },
})
