var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass')(require('sass'));

// gulp.task('sass', function() {
//   // Gets all files ending with .scss in app/scss and children dirs
//   return gulp.src('sources/sass/**/*.scss') 
//     .pipe(sass())
//     .pipe(gulp.dest('styles'))
// })


gulp.task('media-sass', function() {
  // Gets all files ending with .scss in app/scss and children dirs
  return gulp.src('media-scss/**/*.scss') 
    .pipe(sass())
    .pipe(concat('media.css'))
    .pipe(gulp.dest('media-css'))
});

gulp.task('style-sass', function() {
  // Gets all files ending with .scss in app/scss and children dirs
  return gulp.src('style-scss/**/*.scss') 
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('style-css'))
});

// .pipe(browserSync.reload({
//   stream: true
// }))


// gulp.task("watch", function() {
//     // gulp.watch('app/scss/styles.scss', gulp.parallel('sass')); to one file
//     gulp.watch('sources/sass/**/*.scss', gulp.parallel('sass'));
// });

gulp.task("media-watch", function() {
  // gulp.watch('app/scss/styles.scss', gulp.parallel('sass')); to one file
  gulp.watch('media-scss/**/*.scss', gulp.parallel('media-sass'));
});

gulp.task("style-watch", function() {
  // gulp.watch('app/scss/styles.scss', gulp.parallel('sass')); to one file
  gulp.watch('style-scss/**/*.scss', gulp.parallel('style-sass'));
});