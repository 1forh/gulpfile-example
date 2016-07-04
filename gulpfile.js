/**
 * All tasks are imported from ./gulp/index.js
 * Gulp task configuation in ./gulp/config.json
 */

// Require Gulp module
var gulp = require('gulp');
var config = require('./gulp/config');

require('./gulp/index')(gulp, config);