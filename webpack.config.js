var webpack = require('webpack');
var path = require('path');
module.exports = {
  entry: './src/main.ts',

  output: {
    filename: './bundle.js'
  },

  resolve: {
    //root: [ path.join(__dirname, 'src') ], //报错
    //modules: [__dirname, 'node_modules'], //方式1
    alias: { //方式2
      js: path.join(__dirname, "src")
    },
    extensions: ['.ts', '.js']
  },

  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
};
