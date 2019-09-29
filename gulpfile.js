var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    return gulp.src('assets/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('browser-sync', gulp.series('sass'), function() {
    browserSync.init({
        server: {
            baseDir: './'
        },
    })
})

gulp.task('watch', gulp.parallel('browser-sync'), function(){
    gulp.watch('assets/scss/**/*.scss', gulp.series('sass')); 
    gulp.watch('/*.html', browserSync.reload);
    gulp.watch('assets/js/**/*.js', browserSync.reload);
    // Other watchers
  });

gulp.task('run', gulp.series('watch'), function() {
    return gulp.src(console.log("Gulp build succeded."));
})