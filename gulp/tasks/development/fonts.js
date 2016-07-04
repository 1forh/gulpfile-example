var flatten = require('gulp-flatten');
var addsrc = require('gulp-add-src');

module.exports = function(gulp, config) {
	'use strict';

	config.check_modules('fonts');

	gulp.task('fonts', function() {
		return gulp.src(config.fonts.source)
			.pipe(addsrc(config.fonts.modules))
			.pipe(flatten())
			.pipe(gulp.dest(config.fonts.destination));
	});
};
