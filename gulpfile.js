var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var bulkSass = require('gulp-sass-bulk-import');
var autoprefixer = require('autoprefixer');

var postcss = require('gulp-postcss');
/*var cssnano = require('cssnano');*/


gulp.task('sass', function () {
    var plugins = [
        autoprefixer({browsers: ['last 1 version']})/*,
        cssnano()*/
    ];
    return gulp.src('./scss/app.scss')
        .pipe(sourcemaps.init())
        .pipe(bulkSass())
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./css'));
});


gulp.task('default', ['sass'], function () {
    gulp.watch(['./scss/**/*.scss'], ['sass']);
});