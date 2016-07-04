var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var addsrc = require('gulp-add-src');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var plumber = require('gulp-plumber');
var changed = require('gulp-changed');
var gulpif = require('gulp-if');
var rename = require('gulp-rename');

module.exports = function(gulp, config) {
	'use strict';

	config.check_modules('scripts');

	gulp.task('scripts', function() {
		return gulp.src(config.scripts.source)
			.pipe(plumber())
			.pipe(gulpif(config.sourcemaps === true, sourcemaps.init()))
			.pipe(changed(config.scripts.destination))
			.pipe(gulpif(config.ecmascript === 6, babel({'presets': 'es2015'})))
			.pipe(gulpif(config.lintjs === true, jshint({
				lookup: false,
				browser: true,
				devel: true
			})))
			.pipe(gulpif(config.lintjs === true, jshint.reporter(stylish)))
			.pipe(addsrc(config.scripts.modules))
			.pipe(concat('main.js'))
			.pipe(gulpif(config.minify === true, uglify()))
			.pipe(gulpif(config.minify === true, rename({suffix: '.min'})))
			.pipe(gulpif(config.sourcemaps === true, sourcemaps.write('.')))
			.pipe(gulp.dest(config.scripts.destination));
	});
};
