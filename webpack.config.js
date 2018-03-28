const webpack = require('webpack');
const path = require('path');

const sourcePath = path.join(__dirname, './client');
const distPath = path.join(__dirname, './dist');

var webpackConfig = {
    entry: sourcePath + '/index.js',
    output: {
        path: distPath,
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ],
            }
        ],
    },
    devServer: {
        contentBase: './client',
        historyApiFallback: true,
        port: 3000,
        compress: false,
        inline: true,
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            sourcePath
        ]
    }
}

module.exports = webpackConfig