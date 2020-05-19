const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')


module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9991,
        // compress: true,
        // filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [MiniCssExtractPlugin.loader, 'scss-loader'],
            }
        ],
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@': path.join(__dirname, 'src'),
            '@core': path.join(__dirname, 'src/core'),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: './src/index.html',
    }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                { from: path.join(__dirname, 'src/js-icon-48x48.ico'),
                    to: path.join(__dirname, 'dist')
                }
            ],
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.[hash].css'
        })
    ]
};