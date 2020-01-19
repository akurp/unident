var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');
var tinypng = require('gulp-tinypng-compress');
gulp.task('default', defaultTask);

function defaultTask(done)
{
  console.log("Задание выполнено!");
  done();
}
gulp.task('minify-css', function(done)
{
  gulp.src('./src/css/*.css')
  .pipe(cleanCSS({
    compatibility: 'ie10'
  }))
  .pipe(gulp.dest('dist/css'))
  done();
})
gulp.task('minify-js', function(done)
{
  gulp.src('./src/js/*.js')
  .pipe(jsmin())
  .pipe(rename({suffix:'.min'}))
  .pipe(gulp.dest('dist/js'))
  done();
})
gulp.task('minify-html', function(done)
{
  gulp.src('./src/*.html')
  .pipe(htmlmin({
    collapseWhitespace: true
  }))
  .pipe(gulp.dest('dist/'))
  done();
})
gulp.task('tinypng', function (done) {
  gulp.src('./src/img/**/*.{png,jpg,jpeg}')
  .pipe(tinypng({
    key: 'wyw4Z4XSEDRaf1eeGnxENiHvTxhUJoer'
  }))
  .pipe(gulp.dest('dist/img/'));
  done()
});
