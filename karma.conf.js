var webpackConfig = require('./webpack.config');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: ['src/*[sS]pec.js', 'src/**/*[sS]pec.js'],

    preprocessors: {
      'src/*[sS]pec.js': ['webpack'],
      'src/**/*[sS]pec.js': ['webpack']
    },

    webpack: webpackConfig,
    port: 9876,
    colors: true,
    autoWatch: true,
    reporters: ['spec'],
    browsers: ['PhantomJS'],

    specReporter: {
      suppressErrorSummary: true
    },

    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only'
    },

    plugins: [
      require("karma-webpack"),
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-spec-reporter'
    ]
  });
};
