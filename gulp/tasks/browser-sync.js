'use strict'

const browserSync = require('browser-sync').create();
const gulp = require('gulp');

gulp.task('serve', ['build'], () => {
    browserSync.init({
        server: 'public'
    });

    browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});