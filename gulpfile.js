// Requirements
// ==================================================================
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function(){
    console.log('wassup?');
});

gulp.task('compile-sass', function(){
    return gulp.src('styles/*.scss')
    // TODO: sass error handling...?
    .pipe(sass())
    .pipe(gulp.dest('styles'));
});

gulp.task('watch', function(){
    gulp.watch('**/*.scss', ['compile-sass']); 
})
