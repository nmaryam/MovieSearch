/*
    ./webpack.config.js
*/
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './app/initApp.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    publicPath: "/dist/"
  },
  resolve: {
        extensions: ['.js', '.jsx', '.css'],    
    },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  devServer: {
      historyApiFallback: true
  },
  // plugins: plugins,
}