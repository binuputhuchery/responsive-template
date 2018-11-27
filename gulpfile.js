const gulp = require('gulp');
const sass = require('gulp-sass');
const csso = require('gulp-csso');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');

// Compile Sass
gulp.task('styles', function(done){
  gulp.src('assets/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(csso())
    .pipe(gulp.dest('dist/css'));
  done();
});

// Minify and create bundle
gulp.task('scripts', function(done){
  //gulp.src('assets/scripts/*.js')
  gulp.src([
    'assets/scripts/jquery-1.9.1.js',
    'assets/scripts/slick.min.js',
    'assets/scripts/main.js'
    ])
    .pipe(concat('bundle.js'))
    //.pipe(uglify())
    .pipe(uglify().on('error', function(e){
      console.log(e);
    }))
    .pipe(gulp.dest('dist/js'));
  done();
});

// Optmize images
gulp.task('images', function(done){
  gulp.src('assets/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'));
  done();
});

// Copy Html and Vendor files
gulp.task('copy', function(done){
  gulp.src([
    'assets/*.html',
    'assets/vendor/**'
    ])
    .pipe(gulp.dest('dist/'));
  done();
});

// Watcher
gulp.task('watch', function(completed){
  gulp.watch('assets/styles/*.scss', gulp.series('styles'));
  gulp.watch('assets/scripts/*.js', gulp.series('scripts'));
  gulp.watch('assets/images/*', gulp.series('images'));
  gulp.watch('assets/*.html', gulp.series('copy'));
  completed();
});

// Default tasks
gulp.task('default', gulp.series('styles', 'scripts', 'images', 'copy', 'watch'));

