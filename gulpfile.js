'use strict';

var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var gutil = require('gulp-util');
var path = require('path');
var del = require('del');
var webpack = require('webpack');
var gulpWebpack = require('gulp-webpack');
var WebpackDevServer = require("webpack-dev-server");
var proxy = require('proxy-middleware');
var runSequence = require('run-sequence');
var url = require('url');


//////////////////
// SHARED TASKS //
//////////////////

gulp.task('clean', function () {
  return del([__dirname + '/dist/**/*']);
});

//////////////////////
// DEVELOPMENT TASK //
//////////////////////

// Building our bundle (include js, css & less)
gulp.task('webpack:dev', function () {
  return gulp.src(__dirname + '/app/main.js')
 .pipe(gulpWebpack(require('./webpacks/development.config.js')))
 .pipe(gulp.dest(__dirname + '/dist'));
});

// Starting webpack-dev-server on port 8090
// When we make change in our code,
// our bundle will be auto reloaded
gulp.task('webpack:server', function() {
  var devConfig = require('./webpacks/development.config.js');
  var server = new WebpackDevServer(webpack(devConfig), {
    contentBase: "dist",
    publicPath: "assets",
   stats: { colors: true },
   hot: true
 });
  server.listen(8090, "localhost", function (err) {
    if (err) {
      throw new gutil.PluginError('webpack-dev-server', err);
    }
    gutil.log('[webpack-dev-server]', 'started on port 8090');
  });
});

// Proxy `/assets` requests to
// served files from `webpack-dev-server`
var webpackProxy = function () {
  var options = url.parse('http://localhost:8090');
  options.route = '/assets';
  return proxy(options);
};

// Proxy `/` to the `express` server started
var expressProxy = function () {
  var options = url.parse('http://localhost:3000');
  options.route = '/';
  return proxy(options);
};

// Sync browser for testing
gulp.task('sync', function () {
  browserSync.init({
    port: 8080,
    server: {
      baseDir: __dirname,
      middleware: [
        webpackProxy(),
        expressProxy()
      ]
    },
  });
});

/////////////////////
// DEPLOYMENT TASK //
/////////////////////

// In fact, we just need run till webpack:dev task
// But we also want the bundle is reloaded (along with the broswer)
// when we made changes in code. So we make 'webpack:server', 'sync'
gulp.task('dev', ['clean', 'webpack:dev', 'webpack:server', 'sync']);

////////////////
// BUILD TASK //
////////////////
gulp.task('webpack:build', function () {
  return gulp.src(__dirname + '/app/main.js')
 .pipe(gulpWebpack(require('./webpacks/production.config.js')))
 .pipe(gulp.dest(__dirname + '/dist'));
});

gulp.task('build', ['clean', 'webpack:build']);
