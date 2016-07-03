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

	gulp.task('sass', function() {
		return gulp.src(config.sources.sass)
			.pipe(plumber())
			.pipe(changed(config.destinations.sass))
			.pipe(gulpif(config.sourcemaps === true, sourcemaps.init()))
			// Compiles synchronously
			.pipe(sass.sync({
				includePaths: config.modules.sass
			})
			.on('error', sass.logError))
			.pipe(autoprefixer({
				browsers: config.browsers,
				cascade: false
			}))
			.pipe(concat('main.css'))
			.pipe(gulpif(config.minify === true, cssnano()))
			.pipe(gulpif(config.minify === true, rename({suffix: '.min'})))
			.pipe(gulpif(config.sourcemaps === true, sourcemaps.write('.')))
			.pipe(gulp.dest(config.destinations.sass))
			.pipe(browserSync.stream());
	});
};
