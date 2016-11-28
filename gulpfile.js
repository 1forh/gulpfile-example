'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const rimraf = require('rimraf');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync').create();

const styles = function styles() {
	return gulp.src('./test/assets/styles/**/*.scss')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions', 'ie >= 9']
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./dist/css'))
		.pipe(browserSync.stream());
};

const clean = function clean(error) {
	rimraf('./dist', error);
};

const serve = function serve() {
	browserSync.init({
		port: 5000,
		server: './src'
	});

	gulp.watch('./test/assets/styles/**/*.scss', ['styles']);
};

gulp.task('clean', clean);
gulp.task('styles', styles);
gulp.task('serve', ['styles'], serve);
gulp.task('default', ['serve']);
