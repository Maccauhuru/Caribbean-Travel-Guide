const gulp          = require('gulp'),
      watch         = require('gulp-watch'),
      postcss       = require('gulp-postcss'),
      autoprefixer  = require('autoprefixer'),
      cssvars       = require('postcss-simple-vars'),
      nested        = require('postcss-nested')
      cssImport     = require('postcss-import'),
      browserSync   = require('browser-sync').create();

//create a default task
gulp.task('default',()=>console.log("Hooray - Gulp File Successfully created!"));

//create a HTML handle task
gulp.task('html',()=>browserSync.reload());

//Create a Styles Handle task
browserSync.init({
    notify : false,
    server : {
        baseDir : "app"
    }
})


gulp.task('styles',()=>{
gulp.src('./app/assets/styles/style.css')
.pipe(postcss([cssImport , cssvars , nested , autoprefixer]))
.pipe(gulp.dest('./app/temp/styles/'))
});


//create watch tasks here
gulp.task('watch',()=>{
    watch('./app/index.html',()=> {
         gulp.start('html');
     });
    watch('./app/assets/styles/**/*.css',()=>{
        gulp.start('cssInject')
    })

});

gulp.task('cssInject',['styles'],()=>{
    gulp.src('./app/temp/styles/style.css')
    .pipe(browserSync.stream());
});