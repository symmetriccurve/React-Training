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
    watchOptions: {
        poll: true
    },
    output: {
        path: staticsPath,
        filename: 'bundle.js',
    },
    module: {
        rules: [{
            test: /\.html$/,
            exclude: /node_modules/,
            use: {
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]'
                },
            },
        },
            {
                test: /\.css$/,
                //exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(sass|scss)$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ],
            },
            {
                test: /\.png$/,
                exclude: /node_modules/,
                use: [
                    'file-loader?name=images/[name].[ext]'
                ]
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
        stats: {
            assets: true,
            children: false,
            chunks: false,
            hash: false,
            modules: false,
            publicPath: false,
            timings: true,
            version: false,
            warnings: true,
            colors: {
                green: '\u001b[32m',
            }
        },
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