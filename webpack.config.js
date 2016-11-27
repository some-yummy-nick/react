const webpack = require('webpack');

module.exports = {
  entry: './source/main.jsx',

  output: {
    filename: 'bundle.js',
    path: './public'
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader:'babel',
      query: {
        presets: ['es2015','react']
      }
    }]
  },

  devtool: '#cheap-module-source-map'
};