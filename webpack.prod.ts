/***********************************************************
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License
 **********************************************************/
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin; // tslint:disable-line: no-var-requires
import WebpackShellPlugin from 'webpack-shell-plugin';
import * as webpack from 'webpack';
import * as merge from 'webpack-merge';
import common from './configs/webpack.common';
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // tslint:disable-line: no-var-requires
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // tslint:disable-line: no-var-requires
const TerserPlugin = require('terser-webpack-plugin'); // tslint:disable-line: no-var-requires

const config: webpack.Configuration = merge(common, {

    mode: 'production',

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
            {
                test: /\.(scss|css)$/,
                use: [
                    { loader: 'style-loader'},
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { sourceMap: false}},
                    { loader: 'sass-loader', options: {sourceMap: false}}]
            }
        ]
    },

    optimization: {
        minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})]
    },

    plugins: [
        // new BundleAnalyzerPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            chunkFilename: '[id].[hash].optimize.css',
            filename: '[name].[hash].optimize.css',
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new OptimizeCSSAssetsPlugin({
            assetNameRegExp: /\.optimize\.css$/g,
            canPrint: true,
            cssProcessor: require('cssnano'), // tslint:disable-line
            cssProcessorPluginOptions: {
              preset: ['default', { discardComments: { removeAll: true } }],
            },
        })
    ]
});

export default config;
