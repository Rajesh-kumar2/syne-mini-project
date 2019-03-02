const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const path = require('path');
const rootDir = path.resolve(__dirname, '..');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',
    
    output: {
        path: path.resolve(rootDir, 'dist'),
        publicPath: 'http://localhost:3000/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    devServer: {
        inline: true,
        port: 3000,
        historyApiFallback: true,
        stats: {
            colors: true,
            entrypoints: false,
            hash: false,
            version: false,
            timings: false,
            assets: false,
            chunks: false,
            modules: false,
            reasons: false,
            children: false,
            source: false,
            errors: false,
            errorDetails: false,
            warnings: false,
            publicPath: false
        }
    }
});