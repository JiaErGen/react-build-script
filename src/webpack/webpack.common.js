/*
 * @Date: 2022-05-25 14:11:41
 * @Description: 通用配置
 */

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBar = require('webpackbar')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const webpack = require('webpack')

const cwd = process.cwd()

module.exports = {
  stats: 'errors-warnings',
  entry: {
    index: path.join(cwd, './src/index.tsx'),
  },
  output: {
    publicPath: '/',
    clean: true,
    filename: '[name].[contenthash].js',
    // hashDigestLength: 4,
    path: path.join(cwd, 'dist'),
  },
  resolve: {
    extensions: ['.js', 'jsx', '.ts', '.tsx'],
    alias: {
      '@': path.join(cwd, './src'),
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'ENV_MODE': JSON.stringify(process.env.NODE_ENV),
    }),
    new MiniCssExtractPlugin(),
    new WebpackBar(),
    new HtmlWebpackPlugin({
      title: 'index',
      template: path.join(cwd, './src/index.html'),
      chunks: ['index']
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [
          // 'style-loader', // 不要同时使用 style-loader 与 mini-css-extract-plugin。
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: /\.module\.\w+$/i,
              },
            },
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                // 修改antd主题色
                // modifyVars: {
                //   'primary-color': '#1DA57A',
                //   'link-color': '#1DA57A',
                //   'border-radius-base': '2px',
                // },
                javascriptEnabled: true,
              }
            },
          },
        ]
      },
      {
        test: /\.(js|ts|jsx|tsx)$/,
        exclude: /(node_modules)/,
        use: [
          'thread-loader',
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|snap|txt|ttf|woff|woff2)$/i,
        use: [
          'file-loader'
        ]
      }
    ]
  },
}
