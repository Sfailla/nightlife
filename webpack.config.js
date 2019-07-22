const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// good config for react, express full stack projects
module.exports = {
	entry: './client/src/app.js',
	output: {
		path: path.resolve(__dirname, 'client', 'public', 'build'),
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
				test: /\.(gif|png|jpe?g)$/i,
				exclude: [ /node_modules/ ],
				loaders: [ 'file-loader', 'image-webpack-loader' ]
			}
		]
	},
	resolve: {
		extensions: [ '.js', '.jsx', '.json' ]
	},
	plugins: [
		new MiniCssExtractPlugin({
			sourceMap: true,
			filename: 'style.css'
		})
	],
	devtool: 'inline-cheap-module-source-map ',
	watch: true,
	devServer: {
		contentBase: path.join(__dirname, 'client', 'public'),
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
