var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var plumber = require('gulp-plumber');
var gulpif = require('gulp-if');

module.exports = function(gulp, config) {
	'use strict';

	gulp.task('lint', function() {
		return gulp.src(config.scripts.sources)
			.pipe(plumber())
			.pipe(gulpif(config.lintjs === true, jshint({
				lookup: false,
				browser: true,
				devel: true,
				esversion: 6
			})))
			.pipe(gulpif(config.lintjs === true, jshint.reporter(stylish)));
	});
};
