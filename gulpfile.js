const gulp          = require('gulp'),
      watch         = require('gulp-watch'),
      postcss       = require('gulp-postcss'),
      autoprefixer  = require('autoprefixer'),
      cssvars       = require('postcss-simple-vars'),
      nested        = require('postcss-nested');

//create a default task
gulp.task('default',()=>console.log("Hooray - Gulp File Successfully created!"));

//create a HTML handle task
gulp.task('html',()=>console.log("Do something useful with the HTML file here!"));

//Create a Styles Handle task
gulp.task('styles',()=>{
gulp.src('./app/assets/styles/style.css')
.pipe(postcss([cssvars , nested ,autoprefixer]))
.pipe(gulp.dest('./app/temp/styles/'))
});


//create watch tasks here
gulp.task('watch',()=>{
    watch('./app/index.html',()=> {
         gulp.start('html');
     });
    watch('./app/assets/styles/**/*.css',()=>{
        gulp.start('styles')
    })

});