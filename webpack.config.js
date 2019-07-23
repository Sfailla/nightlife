const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let isProd = process.env.NODE_ENV === 'production';

// good config for react, express full stack projects
module.exports = {
	entry: './client/src/app.js',
	output: {
		path: path.resolve(__dirname, 'client', 'public', 'build'),
		filename: 'bundle.js',
		publicPath: '/build/'
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				styles: {
					name: 'styles',
					test: /\.css$/,
					chunks: 'all',
					enforce: true
				}
			}
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: [ 'react', 'env' ],
					plugins: [
						'transform-class-properties',
						'transform-object-rest-spread',
						'transform-runtime'
					]
				}
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							// you can specify a publicPath here
							// by default it uses publicPath in webpackOptions.output
							publicPath: '/build/',
							hmr: !isProd
						}
					},
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					'file-loader',
					{
						loader: 'image-webpack-loader'
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
			sourceMap: true,
			filename: 'style.css',
			chunkFilename: !isProd ? '[id].css' : '[id].[hash].css'
		})
	],
	devtool: isProd ? 'source-map' : 'eval-cheap-module-source-map',
	watch: true,
	devServer: {
		contentBase: path.join(__dirname, 'client', 'public'),
		publicPath: '/build/',
		inline: true,
		historyApiFallback: true,
		proxy: {
			'*': {
				target: 'http://localhost:3001',
				secure: true
			}
		}
	}
};
