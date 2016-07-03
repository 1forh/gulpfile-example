# [straw](https://github.com/1forh/straw)
An advanced Gulp workflow.

## Requirements
TBD

## Quick start
TBD

## What's included
- [Bootstrap 4](https://github.com/twbs/bootstrap)
- [Slick](https://github.com/kenwheeler/slick)

## Gulp tasks
All Gulp tasks are located in `./gulp/tasks`

- Default task `gulp/tasks/default.js` (called when you run `gulp`)

- Sass task `gulp/tasks/sass.js` (called when you run `gulp sass`)
	- [Gulp-sass](https://www.npmjs.com/package/gulp-sass): Compiles Sass with LibSass
	- [Autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer): Parse CSS and add vendor prefixes to rules by Can I Use
	- [Source maps](https://www.npmjs.com/package/gulp-sourcemaps): Maps code within a compressed file back to it’s original position in a source file
	- [Gulp-cssnano](https://www.npmjs.com/package/gulp-cssnano): Minify CSS

- Scripts task `gulp/tasks/scripts.js` (called when you run `gulp scripts`)
	- [Gulp-concat](https://www.npmjs.com/package/gulp-concat): Concatenates files
	- [Source maps](https://www.npmjs.com/package/gulp-sourcemaps): Maps code within a compressed file back to it’s original position in a source file
	- [Gulp-jshint](https://www.npmjs.com/package/gulp-jshint): Helps to detect errors and potential problems in your JavaScript
	- [Gulp-uglify](https://www.npmjs.com/package/gulp-uglify): Minify files with UglifyJS.
	- [Gulp-babel](https://www.npmjs.com/package/gulp-babel): Babel has support for the latest version of JavaScript through syntax transformers.

- Serve task `gulp/tasks/scripts.js` (called when you run `gulp serve`)
	- [Browsersync](https://www.browsersync.io/docs/gulp): Synchronizes URLs, interactions and code changes across multiple devices.

### Gulp task configuration
All Gulp task configuration is located in `./gulpconfig.js`. You can control all gulp tasks using this configuration file.

### Example `gulpconfig.js`
```javascript
module.exports = {
	proxy: 'http://example.dev',
	minify: true,
	sourcemaps: true,
	lintjs: true,
	ecmascript: 6,
	browsers: [
		'last 2 versions',
		'ie >= 9'
	],
	sources: {
		sass: './test/assets/styles/**/*.scss',
		scripts: [
			'./test/assets/scripts/test.js',
			'./test/assets/scripts/main.js'
		],
		fonts: './test/assets/fonts/**'
	},
	destinations: {
		sass: './test/dist/',
		scripts: './test/dist/',
		fonts: './test/dist/fonts/'
	},
	modules: {
		sass: [
			'node_modules/slick-carousel/slick',
			'node_modules/bootstrap/scss'
		],
		scripts: [
			'node_modules/bootstrap/dist/js/bootstrap.min.js',
			'node_modules/slick-carousel/slick/slick.js'
		],
		fonts: [
			'node_modules/slick-carousel/slick/fonts/slick.eot',
			'node_modules/slick-carousel/slick/fonts/slick.svg',
			'node_modules/slick-carousel/slick/fonts/slick.ttf',
			'node_modules/slick-carousel/slick/fonts/slick.woff'
		]
	}
};
```

## License
[MIT](https://github.com/1forh/straw/blob/master/LICENSE)
