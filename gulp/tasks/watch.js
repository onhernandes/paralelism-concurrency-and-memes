const gulp   = require('gulp')
    , paths  = require('../paths');

// Call Watch
module.exports = gulp.task('watch', () => {
  if (process.env.GENERATE || process.env.generate) {
    return;
  }

  gulp.watch([paths.source.slides, paths.source.templates], ['pug']);
  gulp.watch(paths.source.js, ['js']);
  gulp.watch(paths.source.styl, ['stylus']);
  gulp.watch(paths.source.img, ['imagemin']);
});
