const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.svg'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }, {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[hash].[ext]'
        }
      }, {
        test: /\.(png|svg|pdf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[hash].[ext]'
        }
      }
    ]
  },
  mode: 'production'
}
