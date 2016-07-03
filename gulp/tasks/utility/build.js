var sequence = require('run-sequence');

module.exports = function(gulp, config) {
  'use strict';

  gulp.task('build', function(done) {
   sequence('clean', ['sass', 'scripts', 'fonts'], done);
  });
};
