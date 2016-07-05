var sequence = require('run-sequence');

module.exports = function(gulp, config) {
  'use strict';

  gulp.task('build', function(done) {
   sequence('clean', 'lint', ['sass', 'scripts', 'fonts', 'images'], done);
  });
};
