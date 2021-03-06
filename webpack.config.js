const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

let isProd = process.env.NODE_ENV === 'production';

module.exports = {
	entry: './client/src/app.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: [ '@babel/preset-react', '@babel/preset-env' ],
					plugins: [
						'@babel/plugin-proposal-class-properties',
						'@babel/plugin-proposal-object-rest-spread',
						'@babel/plugin-transform-runtime'
					]
				}
			},
			{
				test: /\.s?css$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							disable: true
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: [ '.js', '.jsx', '.json' ]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'style.css'
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html'
		}),
		new Dotenv(),
		new webpack.DefinePlugin({
			'process.env': {
				API_KEY: JSON.stringify(process.env.API_KEY)
			}
		})
	],
	devtool: isProd ? 'source-map' : 'cheap-module-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'build'),
		compress: true,
		inline: false,
		historyApiFallback: true,
		proxy: {
			'*': {
				target: 'http://localhost:3001',
				secure: false
			}
		}
	}
};
