const watch       = require('gulp-watch'),
      gulp        = require('gulp'),
      browserSync = require('browser-sync').create();

gulp.task('watch', () => {

    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    })

    watch('./app/index.html', () => {
        browserSync.reload();
    });
    
    watch('./app/assets/styles/**/*.css', () => {
        gulp.start('cssInject')
    });
});

gulp.task('cssInject', ['styles'], () => {
    gulp.src('./app/temp/styles/style.css')
        .pipe(browserSync.stream());
});