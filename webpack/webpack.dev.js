const webpack = require("webpack")
const path = require("path")
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, '..', 'build'),
    compress: true,
    port: 4000,
    open: true,
    hot: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('DevelopmentManh')
    }),
    new ReactRefreshWebpackPlugin()
  ]
}