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



gulp.task('sass', function(){
  gulp.src('./client/sass/**/*.scss')
  .pipe($.sass())
  .pipe(gulp.dest('./client/dist'));
});



gulp.task('annotate', function(){
  return gulp.src('./client/scripts/**/*.js')
  .pipe($.ngAnnotate())
  .pipe(gulp.dest('./client/annotate'));
});


//for use during dev
gulp.task('browserify', function(){
  return browserify('./client/scripts/app.js')
  .bundle()
  //pass output filename to vinyl-source-stream
  .pipe(source('app.js'))
  //start piping stream to tasks
  .pipe(gulp.dest('./client/dist/'));
});


//for actual dist build
gulp.task('browserify-min', ['annotate'], function(){
  return browserify('./client/annotate/app.js')
  .bundle()
  //pass output filename to vinyl-source-stream
  .pipe(source('app.min.js'))
  //uglify the bundled file
  .pipe($.streamify($.uglify({mangle:false})))
  //start piping stream to tasks
  .pipe(gulp.dest('./client/dist/'));
});



gulp.task('clean', function(){
  return gulp.src(['./client/dist', './client/annotate'], {read:false})
  .pipe($.clean());
});