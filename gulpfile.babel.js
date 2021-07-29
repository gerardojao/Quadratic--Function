//js
import gulp from "gulp"
//vamos a crear una tarea, como primer parametro es la tarea y el segundo es lo que hara la tarea
import babel from "gulp-babel"
import terser from "gulp-terser"
//common
 import concat from "gulp-concat" 

// html 
import htmlmin from 'gulp-htmlmin'
//css
import postcss from 'gulp-postcss';
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer'; 
//pug
import pug from "gulp-pug"
const production= true;
//sass
import sass from "gulp-sass"
//clear css
import clean from 'gulp-purgecss';
//cache-bust
import cacheBust from "gulp-cache-bust"
//optimizacion imagenes
/* import imagemin from "gulp-imagemin" */
import {init as server, stream, reload} from "browser-sync"
//plumber, avisa de un error pero no cuelga la aplicacion
import plumber from "gulp-plumber"

//variables/constantes
const cssPlugins = [cssnano(), autoprefixer()];


gulp.task('clean', () => {
    return gulp
      .src('./public/css/style.css')
      .pipe(
        clean({
            //esta es la ruta de los archivos que tiene que analizar
          content: ['./public/*.html']
        })
      )
      .pipe(gulp.dest('./public/css'));
  });
 
gulp.task('html-min', () => {
    return gulp
      .src('./src/*.html')
      .pipe(
        htmlmin({
          collapseWhitespace: true,
          removeComments: true
        })
      )
      .pipe(gulp.dest('./public'));
  });
gulp.task('styles', () => {
    return gulp
      .src('./src/css/*.css')
      /* .pipe(plumber()) */
      .pipe(concat('styles-min.css'))
      .pipe(postcss(cssPlugins))
      .pipe(gulp.dest('./public/css'))
      .pipe(stream());
     
  });
//esta tarea convertira el codigo a compatible con todos los navegadores
gulp.task("babel",()=>{
    return gulp
    .src("./src/js/*js")
    .pipe(concat("script-min.js")) 
    .pipe(babel())
    .pipe(terser())
    .pipe(gulp.dest("./public/js"))
})
//actualizar cada vez que salves
gulp.task("default",()=>{
  server({
    server:'./public/'
  })
//como tenemos una sola tarea a ejecutar usaremos series, la diferencia con parallel, es con esta se ejecutan todas las tareas en paralelo
    gulp.watch("./src/js/*js", gulp.series("babel")).on("change",reload)
    gulp.watch("./src/*html", gulp.series("html-min")).on("change",reload)
    gulp.watch("./src/css/*css", gulp.series("styles"))

   
}) 