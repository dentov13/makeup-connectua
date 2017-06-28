const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./helpers');

module.exports = {

    entry: {
        'vendor': './src/vendor.js',
        'app': './src/index.js'
    },

    resolve: {
        extensions: [ '', '.js', '.less' ]
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel?presets[]=es2015',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            },
            {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                loader: 'raw'
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style', 'css?importLoaders=1&sourceMap!less?sourceMap')
            },
            {
                test: /\.html$/,
                loader: 'html'
            }
            ,
            {
                test: /\.(png|jpe?g|gif|ico)$/,
                loader: 'file?name=./assets/images/[name].[ext]',
            }
            ,
            {
                test: /\.svg$/,
                exclude: /fonts?/,
                loader: 'file?name=assets/images/[name].[ext]'
            }
            ,
            {
                test: /\.(woff|woff2|ttf|eot)(\?[\s\S]+)?$/,
                loader: 'file?name=assets/fonts/[name].[ext]'
            }
            ,
            {
                test: /\.svg(\?[\s\S]+)?$/,
                include: /fonts?/,
                loader: 'file?name=assets/fonts/[name].[ext]'
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin(
            {
                name: [ 'app', 'vendor' ]
            }
        ),

        new HtmlWebpackPlugin(
            {
                template: 'src/index.html'
            }
        ), 

        new webpack.ProvidePlugin(
            {
              $: "jquery",
              jQuery: "jquery"
            }
        )
    ]
}
;