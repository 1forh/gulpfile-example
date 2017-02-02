export const config = {
	destination: './dist',
	styles: {
		source: './test/assets/styles/**/*.scss',
		browsers: ['last 2 versions', 'ie >= 9']
	},
	scripts: {
		source: [
			'./test/assets/scripts/**/*.js'
		],
		modules: [
			'node_modules/jquery/dist/jquery.js'
		],
		babel: {
			compile: true,
			presets: ['es2015']
		},
		jshint: {
			lookup: true,
			browser: true,
			devel: true,
			esversion: 6
		}
	},
	browserSync: {
		port: 5000,
		server: './test/assets'
	}
};
