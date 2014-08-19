var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');

var paths = {
    scripts: ['src/js/**/*.js', '!src/js/vendor/**/*.js'],
    scss: ['src/scss/**/*.scss'],
    output: {
        scss: 'public/css/',
        scripts: 'public/js/'
    }
};

gulp.task('scripts', function () {
    'use strict';
    return gulp.src('src/js/main.js')
        .pipe(plumber())
        .pipe(browserify())
        .pipe(rename('main.js'))
        .pipe(gulp.dest(paths.output.scripts));
});

gulp.task('scss', function () {
    'use strict';
    gulp.src(paths.scss)
        .pipe(plumber())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest(paths.output.scss));
});

gulp.task('default', ['scss'], function () {
    'use strict';
    gulp.watch(paths.styles, ['scss']);
    gulp.watch(paths.scripts, ['scripts']);
});
