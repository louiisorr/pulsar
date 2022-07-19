const defaultConfig = require('@wordpress/scripts/config/webpack.config')
const { getWebpackEntryPoints } = require('@wordpress/scripts/utils/config')
const path = require('path')

module.exports = {
  ...defaultConfig,
  entry: {
    ...getWebpackEntryPoints(),
    'app': ['./src/css/app.css', './src/js/app.js'],
    'editor': ['./src/css/editor.css', './src/js/editor.js'],
  },
  devServer: {
    // watchFiles: ['./**/*.php', './dist/**/*'], // TODO not sure this is doing anything
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 9000,
    host: "localhost",
    devMiddleware: {
      writeToDisk: true,
    },
    proxy: {
      '/': {
        publicPath: '/app/themes/pulsar/dist', // TODO dynamic path
        overlay: true,
        target: "https://wordpress.test", // TODO dynamic target
        secure: false,
        changeOrigin: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
          'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization, text/html, text/css'
          ,
        },
      }
    },
  }
}
