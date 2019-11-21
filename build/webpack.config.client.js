const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const isDev = process.env.NODE_ENV === 'development'
const merge=require('webpack-merge')
const baseConfig=require('./webpack.config.base')
const VueClientPlugin = require('vue-server-renderer/client-plugin')
const devServer = {
    port: 9001,
    host: '0.0.0.0',
    overlay: {
      warnings: true,
      errors: true,
    },
    historyApiFallback: {
      index: '/public/index.html',
    },
  };
  let defaultPlugin=[
    new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: isDev ? '"development"' : '"production"'
        }
      }),
      new HtmlWebpackPlugin({
template: path.resolve(__dirname, '../build/template.html'),
      }  
      ),
      new VueClientPlugin()
  ];
  let config;
  if(isDev){
    config = {
        devtool: 'cheap-module-eval-source-map',
        devServer,
        module:{
          rules:[
            {
              test: /\.css$/,
              use: [
                'vue-style-loader',
               {
                loader: 'css-loader'
               }
              ],
             }
          ]
        },
        plugins: defaultPlugin.concat([
           // HMR插件将HMR Runtime代码嵌入到bundle中，能够操作APP代码，完成代码替换
            new webpack.HotModuleReplacementPlugin(),
              // 报错提示插件:报错不阻塞，但是编译后给出提示
            new webpack.NoEmitOnErrorsPlugin(),
        ]
        )
      }
  }
  else{
    config = {
        entry: {
            app: path.join(__dirname, '../app/view/web/client-entry.js'),
            vendor: [ 'vue' ],
          },
          output: {
            filename: '[name].[hash:8].js',
            publicPath: '/public/',
          },
          module:{
            rules:[
              {
                test: /\.css$/,
                use: [
                  'vue-style-loader',
                 {
                  loader: 'css-loader'
                 }
                ],
               }
            ]
          },
          plugins: defaultPlugin,
    optimization: {
      splitChunks: {
        cacheGroups: {
          vender: {
            name: 'vender',
            minChunks: 2,
          },
        },
      },
    },
      }
  }
 
module.exports = merge(baseConfig,config)