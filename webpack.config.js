const defaultConfig = require('@wordpress/scripts/config/webpack.config')
const { getWebpackEntryPoints } = require('@wordpress/scripts/utils/config')

module.exports = {
	...defaultConfig,
	entry: {
		...getWebpackEntryPoints(),
		'app-css': ['./src/css/app.css'],
		'app-js': ['./src/js/app.js'],
		'editor-css': ['./src/css/app.css'],
		'editor-js': ['./src/js/editor.js'],
	},
	output: {
		path: __dirname + "/dist",
		filename: '[name].js',
		publicPath: "http://localhost:9000/",
	},
	mode: 'development',
	// plugins: [
	// 	...defaultConfig.plugins,
	// ],
	// module: {
	//   rules: [
	// 		...defaultConfig.module.rules,
	//   ],
	// },
	devServer: {
		hot: true,
		static: __dirname + "/dist/",
		watchFiles: ['./**/*.php', './src/**/*', './src/app-css.css'], // TODO not sure this is doing anything
		// devMiddleware: {
		// 	writeToDisk: true,
		// },
		allowedHosts: 'all',
		host: 'localhost',
		port: 9000,
		proxy: {
			'*': {
				target: 'https://wordpress.test',
				secure: false,
				autoRewrite: true,
				changeOrigin: true,
				headers: {
					'X-ProxiedBy-Webpack': true,
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
					'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization, text/html, text/css, text/json'
					,
				},
			},
		},
	},
}
