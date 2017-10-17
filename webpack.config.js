const webpack = require('webpack');
const path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

const sourcePath = path.join(__dirname, './client');
const staticsPath = path.join(__dirname, './static');

var webpackConfig = {
    devtool: 'eval-source-map',
    context: sourcePath,
    entry: {
        js: './index.js',
    },
    output: {
        path: staticsPath,
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
        new OpenBrowserPlugin({
            url: 'http://localhost:3000'
        }),
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