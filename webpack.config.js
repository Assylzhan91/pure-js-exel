const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin')
const path = require('path')


module.exports = {
    mode: 'development',
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
    },
    devServer: {
        // contentBase: path.join(__dirname, 'dist'),
        port: 9991,
        // compress: true,
        // filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            },

            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            sassOptions: {
                                outputStyle: 'compressed',
                            }
                        }
                    }
                ],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            minimize: true,
                        },
                    }
                ]
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
    ],

};