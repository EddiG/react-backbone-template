'use strict'

const gulp = require('gulp');
const debug = require('gulp-debug');

gulp.task('assets', function () {
    return gulp.src('./frontend/assets/**')
        .pipe(debug({ title: 'assets' }))
        .pipe(gulp.dest('public'));
});