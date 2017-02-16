var path = require('path');

module.exports = {
    entry: ['./src/main.js'],

    output: {
        path: __dirname + '/public',
        filename: 'main.js',
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
                presets: ['es2015', 'stage-0'],
            },
        }, {
            test: /\.scss$/,
            loaders: ["style-loader", "css-loader", "sass-loader"]
        }],
    },

    devtool: 'source-map'
};
