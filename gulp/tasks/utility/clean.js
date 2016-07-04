var rimraf = require('rimraf');

module.exports = function(gulp, config) {
	'use strict';

	gulp.task('clean', function(error) {
		rimraf('./test/dist', error);
	});

};
