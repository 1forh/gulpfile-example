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
			'node_modules/slick-carousel/slick/fonts/**'
		]
	}
};
