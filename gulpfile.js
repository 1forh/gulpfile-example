/**
 * All tasks are imported from ./gulp/index.js
 * Gulp task configuation in ./gulpconfig.js
 */
var gulp = require('gulp');
var config = require('./gulpconfig');

require('./gulp/index')(gulp, config);