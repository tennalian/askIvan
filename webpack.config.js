var webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
	// entry: [
	// 	'webpack/hot/dev-server',
	// 	'./app/index'
	// ],
	entry: './app/index',
	output: {
		path: './',
		filename: 'build.js'
	},
	resolve: {
        extensions: ['', '.js', '.jsx'],
    },
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react']
				},
				exclude: /\/node_modules/
			},
			{
				test: /\.scss$/,
				// loader: ExtractTextPlugin.extract('style-loader', 'css-loader','sass-loader')
				loader: 'style!css!sass',
				exclude: /\/node_modules/
			},
			{
		    	test: /\.(png|jpg|svg|ttf|woff|woff2|eot)$/,
		    	loader: 'file?name=[path][name].[ext]',
		    	exclude: /\/node_modules/
		    },
		]
	},
	plugins: [
		new BrowserSyncPlugin({
			host: 'localhost',
			port: 3000,
			server: { baseDir: ['./'] },
			tunnel: "tenn"
	    })
	],
	// devServer:{
	// 	contentBase: './',
	// 	port: 3000,
	// 	hot: true,
	// 	historyApiFallback: true
	// }
};
