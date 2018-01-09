var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('./src/assets/scss/**/*.scss')
               .pipe(sass())
               .pipe(cleanCSS())
               .pipe(gulp.dest('./src/assets/css'));
});

gulp.task('watch', function(){
    gulp.watch('./src/assets/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass']);