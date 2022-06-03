const { src, dest } = require('gulp');    // Para solicitar las dependecias de gulp instaladas
const sass = require('gulp-sass')(require('sass'));
/* src: funcion que identifica el archivo principal */
// dest: usada para almacenar los archivos


function css ( done ) {
    // Identificar archivo principal
    src('src/scss/app.scss')
    .pipe( sass() )      // Compilar SASS
    .pipe( dest('build/css') )              // Exportarlo o guardarlo en una ubicacion

    // 'pipe': es necesario para buscar la ruta y compilar sass

    done();

}

exports.css = css;