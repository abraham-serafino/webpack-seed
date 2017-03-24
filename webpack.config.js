var path = require('path');

module.exports = {
  entry: ['./src/main.js'],

  output: {
    filename: 'bundle.js',
  },

  module: {
    preLoaders: [{
      test: /\.js$/,
      loader: "eslint-loader",
      exclude: /node_modules/,
    }],

    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',

      query: {
        cacheDirectory: true,
        presets: ['latest', 'stage-0'],
      },
    }, {
      test: /\.scss$/,
      loaders: ["style-loader", "css-loader", "sass-loader"]
    }, {
      test: /\.html$/,
      loaders: ["html-loader"]
    }],
  },

  devtool: 'source-map'
};
