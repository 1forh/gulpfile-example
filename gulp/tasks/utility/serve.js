var browserSync = require('browser-sync').create();

module.exports = function(gulp, config) {
	'use strict';

	gulp.task('serve', ['build'], function() {
		browserSync.init({
			proxy: config.proxy
		});

		gulp.watch(config.sass.source, ['sass']);
		gulp.watch(config.scripts.source, ['scripts', browserSync.reload]);
	});
};
