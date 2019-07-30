const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

let isProd = process.env.NODE_ENV === 'production';

// good config for react, express full stack projects
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
				loaders: [ 'file-loader', 'image-webpack-loader' ]
			}
		]
	},
	resolve: {
		extensions: [ '.js', '.jsx', '.json' ]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'style.css'
		})
	],
	devtool: isProd ? 'source-map' : 'cheap-module-source-map',
	watch: true,
	devServer: {
		contentBase: path.join(__dirname, 'build'),
		compress: true,
		historyApiFallback: true,
		proxy: {
			'*': {
				target: 'http://localhost:3001',
				secure: false
			}
		}
	}
};
