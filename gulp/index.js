module.exports = function(gulp, config){
	'use strict';

	require('./tasks/default')(gulp, config);

	// Asset development tasks
	require('./tasks/development/sass')(gulp, config);
	require('./tasks/development/scripts')(gulp, config);
	require('./tasks/development/images')(gulp, config);
	require('./tasks/development/fonts')(gulp, config);

	// Utility tasks
	require('./tasks/utility/build')(gulp, config);
	require('./tasks/utility/serve')(gulp, config);
	require('./tasks/utility/lint')(gulp, config);
	require('./tasks/utility/clean')(gulp, config);

	return gulp;
};
