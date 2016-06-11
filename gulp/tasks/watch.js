'use strict'

const gulp = require('gulp');

gulp.task('watch', function () {
    gulp.watch('frontend/styles/**/*.*', gulp.series('styles'));
    gulp.watch('frontend/assets/**/*.*', gulp.series('assets'));
});