export const config = {
	styles: {
		sources: './test/assets/styles/**/*.scss',
		output: {
			destination: './dist'
		},
		browsers: ['last 2 versions', 'ie >= 9']
	},
	scripts: {
		sources: './test/assets/scripts/**/*.js',
		output: {
			destination: './dist',
			filename: 'main.js',
		},
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
		server: './src'
	},
	clean: {
		directory: './dist'
	}
};
