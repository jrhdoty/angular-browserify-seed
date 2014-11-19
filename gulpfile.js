var gulp        = require('gulp'),
    $           = require('gulp-load-plugins')(),
    browserify  = require('browserify'),
    source      = require('vinyl-source-stream');



gulp.task('lint', function(){
  return gulp.src('./client/scripts/**/*.js')
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.notify({message: 'Linting Done'}))
    .pipe($.livereload());
});



gulp.task('browserify', function(){
  return browserify('./client/scripts/app.js')
  .bundle()
  //pass output filename to vinyl-source-stream
  .pipe(source('bundle.js'))
  //start piping stream to tasks
  .pipe(gulp.dest('./client/dist/'));
});



gulp.task('clean', function(){
  return gulp.src('./client/dist', {read:false})
  .pipe($.clean());
});