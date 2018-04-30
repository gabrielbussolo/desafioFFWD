const gulp = require('gulp')
const sass = require('gulp-sass')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const browserSync = require('browser-sync').create();

/* TASKS */

/*
  Copy all .html
*/
gulp.task('copyHTML', () => {
  gulp.src('src/*.html')
    .pipe(gulp.dest('public'))
    .pipe(browserSync.stream())
})

/*
  Compile and minify sass
  lib: https://github.com/dlmanning/gulp-sass
*/
gulp.task('sassCompileMinify', () => {
  gulp.src('src/assets/sass/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.stream())
})

/*
  Concat and Uglify JS
  libs: https://github.com/gulp-community/gulp-concat
        https://github.com/terinjokes/gulp-uglify
*/
gulp.task('jsConcatUglify', function(){
  gulp.src('src/assets/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'))
    .pipe(browserSync.stream())
})

/*
  Browser Sync
  doc: https://browsersync.io/docs/gulp
*/
gulp.task('serve', ['copyHTML', 'sassCompileMinify', 'jsConcatUglify'], ()=>{
  browserSync.init({
    server: './public'
  })

  gulp.watch('src/*.html', ['copyHTML'])
  gulp.watch('src/assets/sass/*', ['sassCompileMinify'])
  gulp.watch('src/assets/js/*', ['jsConcatUglify'])
})

// Default  task
gulp.task('default', ['copyHTML', 'sassCompileMinify', 'jsConcatUglify'])