const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const commonConfig = require('./webpack.common.js');
const helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

const BASE_URL = "http://connectukraine.com";

const API_URL = BASE_URL + "/possible/api.php";

const APP_NAME = "Connect Ukraine";

module.exports = webpackMerge(
    commonConfig, {

        output: {
            path:'../dist',
            publicPath: '../',
            filename: '[name].js',
            chunkFilename: '[id].chunk.js'
        },

        htmlLoader: {
            minimize: false
        },

        babelLoader:{
            minified:false,
        },

        plugins: [
            // new webpack.NoErrorsPlugin(),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin({
                compress:false,
                mangle:false
            }),
            new ExtractTextPlugin('./css/[name].css'),
            new webpack.DefinePlugin(
                {
                    'process.env': {
                        'ENV': JSON.stringify(ENV),
                        'BASE_URL': JSON.stringify(BASE_URL),
                        'API_URL': JSON.stringify(API_URL),
                        'APP_NAME': JSON.stringify(APP_NAME)
                    }
                }
            )
        ]
    }
);