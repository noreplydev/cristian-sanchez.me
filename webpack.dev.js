const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dev'),
    filename: 'bundle.js'
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
        type: 'asset/resource'
      }, {
        test: /\.(png|svg|pdf)$/i,
        type: 'asset/resource'
      }
    ]
  },
  mode: 'development',
  infrastructureLogging: { level: 'error' },
  stats: 'minimal',
  devServer: {
    historyApiFallback: true,
    hot: true,
    port: 5000
  }
}
