require('dotenv').config()
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const port = process.env.PORT

module.exports = {
   mode: 'development',
   entry: './src/index.js',
   output: {
      filename: 'bundle.[hash].js',
      publicPath: '/'
   },
   resolve: {
      alias: {
         "react-dom": "@hot-loader/react-dom"
      },
      extensions: ['js', 'jsx']
   },
   devtool: 'inline-source-map',
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
         },
         {
            test: /\.css$/,
            use: [
               {
                  loader: 'style-loader'
               },
               {
                  loader: 'css-loader',
                  options: {
                     url: true,
                     import: true,
                     modules: {
                        exportLocalsConvention: 'camelCase'
                     },
                     sourceMap: true
                  }
               }
            ]
         }
      ]
   },
   plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HTMLWebpackPlugin({
         template: 'public/index.html',
         favicon: 'public/favicon.ico'
      })
   ],
   devServer: {
      host: 'localhost',
      port: port,
      historyApiFallback: true,
      open: true,
      hot: true
   }
}