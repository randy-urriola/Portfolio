const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const paths = {
	scss: 'src/scss/**/*.scss',
	js: 'src/js/**/*.js',
	imagenes: 'src/img/**/*',
};

function css() {
	return src(paths.scss).pipe(sass()).pipe(dest('build/css'));
	// done();
}

function watchArchivos() {
	watch(paths.scss, css);
	// watch(paths.js, javascript);
	// watch(paths.imagenes, imagenes);
	// watch(paths.imagenes, versionWebp);
}

exports.css = css;
exports.watchArchivos = watchArchivos;

exports.default = parallel(css, watchArchivos); //javascript, imagenes, versionWebp,
