const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const config = {
 
  target: 'web',
  // entry: path.join(__dirname, '../app/view/web/index.js'),
  // output: {
  //   filename: 'bundle.[hash:8].js',
  //   path: path.join(__dirname, '../public'),
  //   publicPath: 'http://0.0.0.0:9000/public/',
  // },
  mode: process.env.NODE_ENV || 'production',
  entry: path.join(__dirname, '../app/view/web/client-entry.js'),
  output: {
     filename: 'bundle.[hash:8].js',
    path: path.join(__dirname, '../public'),
    publicPath: 'http://0.0.0.0:9001/public/',
  },
  module: {
    rules: [
      {
        test: /\.vue$/, 
        loader: 'vue-loader'
      },
     
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024, // 图片小于1024转义成base64代码插入到代码中
              name: 'resources/[path][name]-[hash:8].[ext]',
            },

          },
        ],
      },
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
module.exports = config