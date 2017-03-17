var webpack = require('webpack');

module.exports = {
	watch: true,
  entry: './assets/js/entry.js',
  output: {
     path: '/dist/assets/js/',
     filename: 'app.bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      beautify: true,
      compress: {
        warnings: false,
        },
        output: {
          comments: false,
        },
    }),
  ]
};