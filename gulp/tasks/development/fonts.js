var flatten = require('gulp-flatten');
var addsrc = require('gulp-add-src');

module.exports = function(gulp, config) {
	'use strict';

	console.log(config.modules.fonts);

	gulp.task('fonts', function() {
		return gulp.src(config.sources.fonts)
			.pipe(addsrc(config.modules.fonts))
			.pipe(flatten())
			.pipe(gulp.dest(config.destinations.fonts));
	});
};
