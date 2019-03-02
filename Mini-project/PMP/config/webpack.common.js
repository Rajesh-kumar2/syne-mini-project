const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');

module.exports = {
    entry: {
        'polyfills': './polyfills.ts',
        'vendor': './vendor.ts',
        'app': './src/main.ts',
    },

    resolve: {
        extensions: ['.js', '.ts']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: { configFileName: './tsconfig.json' }
                    }, 'angular2-template-loader', 'angular-router-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { 
                            minimize: true,
                            caseSensitive: true,
                            removeAttributeQuotes: false
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(jpg|eot|svg|ttf|woff|woff2)$/,
                use: "file-loader?name=public/fonts/[name].[ext]"
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core/,
            path.resolve(__dirname)
        ),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": 'jquery'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new webpack.DefinePlugin({
            config: JSON.stringify({
              apiUrl: 'http://localhost:8000'
            })
          })
    ],

    optimization: {
        splitChunks: {
            chunks: "all"
        }
    }
};