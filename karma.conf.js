var webpackConfig = require('./webpack.config');

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: ['test/*-spec.js', 'test/**/*-spec.js'],

        preprocessors: {
            'test/*-spec.js': ['webpack'],
            'test/**/*-spec.js': ['webpack']
        },

        webpack: webpackConfig,
        port: 9876,
        colors: true,
        autoWatch: true,
        reporters: ['mocha'],
        browsers: ['PhantomJS'],

        webpackMiddleware: {
            noInfo: true,
            stats: 'errors-only'
        },

        plugins: [
            require("karma-webpack"),
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-mocha-reporter'
        ]
    });
};