module.exports = {
	minify: true,
	sourcemaps: true,
	lintjs: true,
	ecmascript: 6,
	browsers: [
		'last 2 versions',
		'ie >= 9'
	],
	sass: {
		sources: './test/assets/styles/**/*.scss',
		destination: './test/dist/',
		modules: [
			'node_modules/slick-carousel/slick',
			'node_modules/bootstrap/scss'
		]
	},
	scripts: {
		sources: './test/assets/scripts/**/*.js',
		destination: './test/dist/',
		modules: [
			'node_modules/bootstrap/dist/js/bootstrap.min.js',
			'node_modules/slick-carousel/slick/slick.js'
		]
	},
	fonts: {
		source: './test/assets/fonts/**',
		destination: './test/dist/fonts/',
		modules: [
			'node_modules/slick-carousel/slick/fonts/**'
		]
	},
	images: {
		source: './test/assets/images/**',
		destination: './test/dist/images/'
	},
	check_modules: function(type) {
		if(this[type].modules === undefined) {
			this[type].modules = '';
		}
	}
};