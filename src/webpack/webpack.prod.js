const { merge } = require('webpack-merge');
const webpackConfig = require('./webpack.common')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

module.exports = merge(webpackConfig, {
  mode: 'production',
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all',
    },
  },
  plugins: [
    new CssMinimizerPlugin({
      test: /\.(css)$/i,
    }),
  ]
})
