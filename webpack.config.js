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
        presets: ['es2015','react', 'stage-0']
      }
    }]
  },

  devtool: 'eval-source-map',

  devServer:{
    inline:true,
    contentBase:'./public',
    port:3000
  },

  resolve:{
    extensions:['', '.js', '.jsx']
  }

};