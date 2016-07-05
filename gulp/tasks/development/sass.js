var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var gulpif = require('gulp-if');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');

module.exports = function(gulp, config) {
	'use strict';

	config.check_modules('sass');

	gulp.task('sass', function() {
		return gulp.src(config.sass.sources)
			.pipe(plumber())
			.pipe(changed(config.sass.destination))
			.pipe(gulpif(config.sourcemaps === true, sourcemaps.init()))
			// Compiles synchronously
			.pipe(sass.sync({
				includePaths: config.sass.modules
			})
			.on('error', sass.logError))
			.pipe(autoprefixer({
				browsers: config.browsers
			}))
			.pipe(concat('main.css'))
			.pipe(gulpif(config.minify === true, cssnano()))
			.pipe(gulpif(config.minify === true, rename({suffix: '.min'})))
			.pipe(gulpif(config.sourcemaps === true, sourcemaps.write('.')))
			.pipe(gulp.dest(config.sass.destination))
			.pipe(browserSync.stream());
	});
};
