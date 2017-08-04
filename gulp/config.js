/**
 * Created by yn on 19/05/17.
 */

var gutil = require('gulp-util');

exports.paths = {
    src: 'src',
    dist: 'dist',
    server:'server',
    tmp: '.tmp'
};

/**
 *  错误处理
 */
exports.errorHandler = function() {
    return function (err) {
        gutil.beep();
        gutil.log(err.toString());
    };
};
