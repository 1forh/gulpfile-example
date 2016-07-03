var browserSync = require('browser-sync').create();

module.exports = function(gulp, config) {
	'use strict';

	gulp.task('serve', ['build'], function() {
		browserSync.init({
			proxy: config.proxy
		});

		gulp.watch(config.sources.sass, ['sass']);
		gulp.watch(config.sources.scripts, ['scripts', browserSync.reload]);
	});
};
