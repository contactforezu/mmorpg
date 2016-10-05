var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('styles', function() {
    gulp.src('app/sass/**/*.scss')
        .pipe(concat('base.css'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./styles/'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('app/sass/**/*.scss',['styles']);
});
