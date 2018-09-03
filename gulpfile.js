const gulp = require('gulp')
const browserSync = require('browser-sync')

gulp.task('server', function () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })

  gulp.watch("./*").on('change', browserSync.reload)
})

gulp.task('default', ['server'])

