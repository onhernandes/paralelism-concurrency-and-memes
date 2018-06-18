const gulp = require('gulp');

// Default task
module.exports = gulp.task(
  'default',
  ['js', 'pug', 'notes', 'stylus', 'imagemin', 'watch', 'browser-sync', 'js'],
  function() {
    if (process.env.GENERATE || process.env.generate) {
      process.exit(0)
    }
  }
);
