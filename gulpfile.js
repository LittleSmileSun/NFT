var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

gulp.task('sass', function() {
  // Gets all files ending with .scss in app/scss and children dirs
  return gulp.src('sources/sass/**/*.scss') 
    .pipe(sass())
    .pipe(gulp.dest('styles'))
})


gulp.task("watch", function() {
    // gulp.watch('app/scss/styles.scss', gulp.parallel('sass')); to one file
    gulp.watch('sources/sass/**/*.scss', gulp.parallel('sass'));
});