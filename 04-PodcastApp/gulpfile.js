const { src, dest, watch, series } = require('gulp');    // Para solicitar las dependecias de gulp instaladas

// Compilar CSS
const sass = require('gulp-sass')(require('sass'));
/* src: funcion que identifica el archivo principal */
// dest: usada para almacenar los archivos
// watch: tomara un archivo para revisar los cambios constantes
// series: ejecuta multiples tareas al mismo tiempo
const purgecss = require('gulp-purgecss');
const rename = require('gulp-rename');

// Imagenes
const imagemin = require('gulp-imagemin');


function css ( done ) {
    // Identificar archivo principal
    src('src/scss/app.scss')
        .pipe( sass() )      // Compilar SASS
        .pipe( dest('build/css') )              // Exportarlo o guardarlo en una ubicacion

    // 'pipe': es necesario para buscar la ruta y compilar sass

    done();

}

function cssbuild ( done ) {
    src('build/css/app.css')
        .pipe( rename({
            suffix: '.min'                  
        }))
        .pipe ( purgecss({
            content: ['index.html']
        }))
        .pipe ( dest('build/css'))    

    done();
}

// 'suffix': que nombre se le va ha agregar despues del nombre a este archivo

function dev( ) {
    watch('src/scss/**/*.scss', css);       // Arg-1: direccion del archivo a revisar; Arg-2: funcion ha ejecutar
}

function imagenes (done) {
    src('src/img/**/*')
        .pipe( imagemin({ optimizationLevel: 3}))
        .pipe( dest('build/img'))
    done();    
}

exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;
exports.default = series( imagenes, css, dev );
exports.build = series( cssbuild );

// comando: gulp dev -- para compilar
// comando: gulp imagenes -- para aligerar imagenes
// comando: gulp -- para ejecutar series