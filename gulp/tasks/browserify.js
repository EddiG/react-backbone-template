'use strict'

const browserify = require('browserify');
const gulp = require('gulp');
const babelify = require('babelify');
const source = require('vinyl-source-stream');

const sourceFile = './frontend/scripts/App/App.jsx';
const destFolder = './public/scripts/App/';
const destFile = 'App.js';
const extensions = '.jsx';
const debug = true;

gulp.task('browserify', function () {
    var bundler = browserify({
        entries: sourceFile,
        extensions: extensions,
        debug: debug
    }).transform(babelify, { presets: ['es2015', 'react'] });

    return bundler
        .bundle()
        .on('error', function (e) {
            console.log('ERROR in browserify: ' + e.message);
        })
        .pipe(source(destFile))
        .pipe(gulp.dest(destFolder));
});