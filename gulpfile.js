const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('cssnano');
const terser = require('gulp-terser-js');
const plumber = require('gulp-plumber');
const imagemin = require('gulp-imagemin'); // Minificar imagenes
const notify = require('gulp-notify');
const cache = require('gulp-cache');
const webp = require('gulp-webp');

const paths = {
	scss: 'src/scss/**/*.scss',
	js: 'src/js/**/*.js',
	imagenes: 'src/img/**/*',
};

function css() {
	return (
		src(paths.scss)
			.pipe(sourcemaps.init())
			// .pipe(plumber())
			.pipe(sass())
			.pipe(postcss([autoprefixer(), cssnano()]))
			.pipe(postcss([autoprefixer()]))
			.pipe(sourcemaps.write('.'))
			.pipe(dest('build/css'))
	);
}

function javascript() {
	return src(paths.js).pipe(terser()).pipe(sourcemaps.write('.')).pipe(dest('build/js'));
}

function imagenes() {
	return src(paths.imagenes)
		.pipe(cache(imagemin({ optimizationLevel: 3 })))
		.pipe(dest('build/img'))
		.pipe(notify({ message: 'Imagen Completada' }));
}

function versionWebp() {
	return src(paths.imagenes)
		.pipe(webp())
		.pipe(dest('build/img'))
		.pipe(notify({ message: 'Imagen Completada' }));
}

function watchArchivos() {
	watch(paths.scss, css);
	watch(paths.js, javascript);
	watch(paths.imagenes, imagenes);
	watch(paths.imagenes, versionWebp);
}

exports.css = css;
exports.javascript = javascript;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.watchArchivos = watchArchivos;

exports.default = parallel(css, javascript, imagenes, versionWebp, watchArchivos); //javascript, imagenes, versionWebp,
