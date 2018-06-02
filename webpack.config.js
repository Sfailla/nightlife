const path = require('path');
const webpack = require('webpack');

// good config for react, express full stack projects

module.exports = {
    entry: {
        app: './client/src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['react', 'env', 'es2015'],
                plugins: ['transform-class-properties'],
            },
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        hot: true,
        inline: true,
        historyApiFallback: true,
        proxy: {
            '*': { 
                target: 'http://localhost:3001',
                secure: false
            }
        }
    }
};