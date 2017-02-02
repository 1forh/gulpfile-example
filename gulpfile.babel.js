import gulp from 'gulp';
import sass from 'gulp-sass';
import cssnano from 'gulp-cssnano';
import autoprefixer from 'gulp-autoprefixer';
import sourcemaps from 'gulp-sourcemaps';
import rimraf from 'rimraf';
import plumber from 'gulp-plumber';
import browserSync from 'browser-sync';
import concat from 'gulp-concat';
import jshint from 'gulp-jshint';
import stylish from 'jshint-stylish';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import gulpif from 'gulp-if';
import yargs from 'yargs';

import { config } from './gulpfile.config.babel';

const argv = yargs.argv;

gulp.task('styles', () => {
	return gulp.src(config.styles.source)
		.pipe(plumber())
		.pipe(gulpif(!argv.prod, sourcemaps.init()))
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: config.styles.browsers
		}))
		.pipe(gulpif(argv.prod, cssnano()))
		.pipe(gulpif(!argv.prod, sourcemaps.write('.')))
		.pipe(gulp.dest(config.destination))
		.pipe(browserSync.stream());
});

gulp.task('scripts', ['lint'], () => {
	return gulp.src(config.scripts.source)
		.pipe(plumber())
		.pipe(gulpif(!argv.prod, sourcemaps.init()))
		.pipe(concat('bundle.js'))
		.pipe(gulpif(config.scripts.babel.compile === true, babel(config.babel)))
		.pipe(gulpif(argv.prod, uglify()))
		.pipe(gulpif(!argv.prod, sourcemaps.write('.')))
		.pipe(gulp.dest(config.destination));
});

gulp.task('modules', () => {
	return gulp.src(config.scripts.modules)
		.pipe(plumber())
		.pipe(gulpif(!argv.prod, sourcemaps.init()))
		.pipe(concat('vendor.js'))
		.pipe(gulpif(argv.prod, uglify()))
		.pipe(gulpif(!argv.prod, sourcemaps.write('.')))
		.pipe(gulp.dest(config.destination));
});

gulp.task('lint', () => {
	return gulp.src(config.scripts.source)
		.pipe(plumber())
		.pipe(jshint(config.scripts.jshint))
		.pipe(jshint.reporter(stylish));
});

gulp.task('clean', error => {
	rimraf(config.destination, error);
});

gulp.task('serve', ['build'], () => {
	browserSync.init({
		port: config.browserSync.port,
		server: config.browserSync.server
	});

	gulp.watch(config.styles.source, ['styles']);
	gulp.watch(config.scripts.source, ['scripts', browserSync.reload]);
});

gulp.task('build', [
	'clean',
	'styles',
	'scripts',
	'modules'
]);
