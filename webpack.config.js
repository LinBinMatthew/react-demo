const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin'); //将js代码通过<script>标签注入到HTML文件中

const webpack = require('webpack');

let env = process.env.NODE_ENV == 'development' ? 'development' : 'production';

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
        test: /\.js$/, // 匹配.js文件，遇到js文件用babel解析
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: { // 通过监听文件变化，自动更新页面
    hot: true, // 热替换  devServer的默认行为是在发现源代码被变更后，通过自动刷新整个页面来做到事实预览，
    //开启hot后，将在不刷新整个页面的情况下通过新模块替换老模块来做到实时预览
    contentBase: path.join(__dirname, 'dist'), // server文件的根目录
    compress: true, // 开启gzip
    // host: 配置devServer服务监听的地址，例如如果想让局域网内的其他用户访问自己的设备，可以将host配置为自己本机的IP地址
    port: 8080, // 端口
    open: true, // 在devServer启动且第一次构建完成时，自动用我们的系统的默认浏览器去打开要开发的网页
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // HMR允许在运行时更新各种模块，而无需进行完全刷新，模块热替换
    new HtmlWebPackPlugin({
      template: './index.html', // html模版
      filename: path.resolve(__dirname, 'dist/index.html') // 目标html文件
    })
  ]
};