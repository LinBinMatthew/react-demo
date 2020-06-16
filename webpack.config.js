const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');

module.exports = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/, // 匹配.js文件
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    hot: true, // 热替换
    contentBase: path.join(__dirname, 'dist'), // server文件的根目录
    compress: true, // 开启gzip
    port: 8080, // 端口
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // HMR允许在运行时更新各种模块，而无需进行完全刷新
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: path.resolve(__dirname, 'dist/index.html')
    })
  ]
};