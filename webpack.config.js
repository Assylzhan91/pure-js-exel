const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')
const isProd = process.env.NODE_ENV === 'production'
const isDev = !isProd
console.log('isProd', isProd)
console.log('isDev', isDev)

module.exports = {
    mode: 'development',
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        filename: isDev ? 'bundle.js' : 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
    },
    optimization: {
        minimize: false,
    },

    devtool: isDev ? 'source-map' : false,
    devServer: {
        port: 9991,
        contentBase: './dist',
        open: true,
        hot: isDev,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                    },

                    {
                        loader: isDev ? 'eslint-loader' : null,
                    },

                ],
            },

            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev,
                            reloadAll: true,
                        },
                    },
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            sassOptions: {
                                outputStyle: 'compressed',
                            },
                        },
                    },
                ],
            }, //SCSS

            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                        },
                    },
                ],
            }, //HTML
            {
                test: /\.(png|jpg)$/,
                include: path.join(__dirname, '/assets/images'),
                loader: 'file-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            '@': path.join(__dirname, 'src'),
            '@core': path.join(__dirname, 'src/core'),
        },
    },

    plugins: [
        new HtmlWebpackPlugin({
        template: './src/index.html',
        title: 'Weather Forecaster',
        minify: {
            removeComments: isProd,
            collapseWhitespace: isProd,
        },
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [
                {from: path.join(__dirname, 'src/js-icon-48x48.ico'),
                    to: path.join(__dirname, 'dist'),
                },
            ],
        }),
        new MiniCssExtractPlugin({
            filename: isDev ? 'bundle.css' : 'bundle.[hash].css',
        }),
    ],
}
