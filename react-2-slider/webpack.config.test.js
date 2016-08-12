//import HtmlWebpackPlugin from 'html-webpack-plugin';
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //devtool: 'cheap-module-eval-source-map',
  entry: {
    index: './__tests__/test-slider.js'
  },
  output: {
    path: './build',
    filename: 'bundle-[name].js'
  },
  module: {
    loaders: [
      {test: /\.js/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
      {test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html'
    })
  ]
};
