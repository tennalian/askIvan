const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TARGET = process.env.npm_lifecycle_event;

let common = {
		context: path.resolve(__dirname, 'src'),
    entry: {
	    index: ['./index.js','webpack-dev-server/client?http://localhost:5000/']
	  },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "app.js",
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [{
            loader: 'babel-loader',
            options: {
              presets: ["es2015", "react"]
            }
          }],
        }, {
          test: /\.scss$/,
          exclude: /\/node_modules/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader?importLoaders=1' },
            { loader: 'autoprefixer-loader?browsers=last 2 versions' },
            { loader: 'sass-loader' }
          ]
        }, {
          test: /\.css$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' }
          ]
        }, {
          test: /\.(eot|woff|woff2|ttf|svg)?$/,
          use: [
            { loader: "file-loader?name=[path][name].[ext]" }
          ]
        }
      ]
    },
    devtool: "source-map",
    plugins: [
    	new CopyWebpackPlugin([
        { from: __dirname + '/src/img/1.jpg', to: __dirname + '/dist/img/1.jpg' },
        { from: __dirname + '/src/img/2.jpg', to: __dirname + '/dist/img/2.jpg' }
      ]),
      new htmlWebpackPlugin({
	      template: 'index.ejs',
	      baseUrl: (TARGET === 'build') ? '/dist' : '',
	      inject: true
	    }),
    ],
    devServer: {
      contentBase: './',
      host: 'localhost',
      open: false,
      port: 5000,
      hot: true,
      historyApiFallback: true,
      noInfo: true
    }
};

if (TARGET !== undefined && TARGET.startsWith('build')) {
	common.entry = {
    index: ['./index.js']
  };
	common.plugins.push(new webpack.NoEmitOnErrorsPlugin());
}


module.exports = common;