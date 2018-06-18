const gulp       = require('gulp'),
      watch      = require('gulp-watch');

//create a default task
gulp.task('default',()=>console.log("Hooray - Gulp File Successfully created!"));

//create a HTML handle task
gulp.task('html',()=>console.log("Do something useful with the HTML file here!"));

//Create a Styles Handle task
gulp.task('styles',()=>console.log("SASS PostCSS tasks can run here!"));


//create watch tasks here
gulp.task('watch',()=>{
    watch('./app/index.html',()=> {
         gulp.start('html');
     });
    watch('./app/assets/styles/**/*.css',()=>{
        gulp.start('styles')
    })

});