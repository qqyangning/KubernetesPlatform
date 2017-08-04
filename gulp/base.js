var path = require('path');
var gulp = require('gulp');
var gutil = require('gulp-util');
var config = require('./config');
var pug = require('gulp-pug');
var gulpSequence= require('gulp-sequence');
var WebpackDevServer = require('webpack-dev-server');
var webpack  = require('webpack');
var open = require('open');
var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'event-stream', 'main-bower-files', 'uglify-save-license', 'del', 'imagemin-pngquant']
});
var DEV_PORT = 3000, PROD_PORT = 8400;

gulp.task('clean', function () {
    $.del.sync([path.join(config.paths.dist, '/')]);
    $.del.sync([path.join(config.paths.src, 'app/*.html'), path.join(config.paths.src, 'app/**/*.html')]);
});

/************编译pug******************/
// gulp.task('pug', function() {
//     gulp.src([
//         path.join(config.paths.src, '/**/*.pug')
//     ])
//         .pipe($.plumber(config.errorHandler()))
//         .pipe(pug({
//             pretty: true
//         }))
//         .pipe(gulp.dest(config.paths.dist));
// });
gulp.task('webpack', function(cb) {
    var webpackConfig = require('../webpack.config')
    var myConfig = Object.create(webpackConfig)
    webpack(myConfig, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err)
        gutil.log("[webpack]", stats.toString({
            // output options
        }))
        cb()
    })
});

gulp.task('serve', ['build'], function(cb) {
    var webpackConfig = require('../webpack.config')
    var myConfig = Object.create(webpackConfig)
    myConfig.entry.index.unshift('webpack/hot/only-dev-server')
    myConfig.entry.index.unshift('webpack-dev-server/client?http://localhost:' + DEV_PORT)
        new WebpackDevServer(webpack(myConfig), {
            contentBase: config.paths.dist,
            noInfo: false,
            hot: true,
            inline: true,
            historyApiFallback: true,
            publicPath: myConfig.output.publicPath,
            stats: {
                colors: true
            }
    }).listen(DEV_PORT, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err)
        gutil.log("[webpack-dev-server]", "==> 🌎  http://localhost:" + DEV_PORT)
        open('http://localhost:' + DEV_PORT)
    });
});

gulp.task('build', function(cb) {
    return gulpSequence('clean', 'webpack')(function() {
        gulp.src('./src/index.pug')
            .pipe($.inject(gulp.src([path.join(config.paths.dist, 'index.js')], {read: false}), {
                ignorePath: [config.paths.dist],
                addRootSlash: false
            }))
            .pipe(pug({
                pretty: true
            }))
            .pipe(gulp.dest(config.paths.dist))
        cb()
    })
})
gulp.task('default', ['serve'])

// function browserSyncInit (baseDir) {
//     browserSync.use(browserSyncSpa({
//         selector: ''
//     }));
//     //起动browserSync
//     browserSync.init({
//         startPath:'/',
//         server:{
//             baseDir: baseDir
//         }
//     });
// }

