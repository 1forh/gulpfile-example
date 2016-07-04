var imagemin = require('gulp-imagemin');
var addsrc = require('gulp-add-src');
var gulpif = require('gulp-if');

module.exports = function(gulp, config) {
	'use strict';

	config.check_modules('images');

	gulp.task('images', function() {
		return gulp.src(config.images.source)
			.pipe(addsrc(config.images.modules))
			.pipe(gulpif(config.minify === true, imagemin({
				verbose: true,
				progressive: true
			})))
			.pipe(gulp.dest(config.images.destination));
	});
};
