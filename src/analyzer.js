/*
 * @Date: 2022-05-25 16:59:33
 * @Description: 包分析
 */

const webpack = require('webpack')
const prodConfig = require('./webpack/webpack.analyzer')

const compiler = webpack(prodConfig)
compiler.run((err, stats) => {
  if (err) {
    console.error(err);
    return;
  }
  if (stats.hasErrors() || stats.hasWarnings()) {
    console.log(stats.toString('errors-warnings'));
  }
  compiler.close((closeErr) => {
    closeErr && console.log(closeErr);
  });
});