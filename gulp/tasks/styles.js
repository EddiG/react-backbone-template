'use strict'

const gulp = require('gulp');
const debug = require('gulp-debug');

gulp.task('styles', () => {
    return gulp.src('./frontend/styles/**')
        .pipe(debug({ title: 'styles' }))
        .pipe(gulp.dest('public/styles'));
});