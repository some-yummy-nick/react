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
      loader:'babel'
    }]
  },

  devtool: 'eval-source-map',

  devServer:{
    inline:true,
    contentBase:'./public',
    hot: true,
    port:3000
  },

  resolve:{
    extensions:['', '.js', '.jsx']
  }

};