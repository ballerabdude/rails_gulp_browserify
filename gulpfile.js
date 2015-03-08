var gulp = require('gulp');
var browserify = require('gulp-browserify');
var plumber = require('gulp-plumber');

gulp.task('default', function() {
    console.log('This is cool!');
});

gulp.task('scripts', function(){
    gulp.src('app/assets/javascripts/file1.js')
        .pipe(browserify())
        .pipe(gulp.dest('./app/assets/javascripts/build/js'));
})
