const path = require('path');
// const SmartBannerPlugin = require('smart-banner-webpack-plugin');
// const banner = require('./../license');
// const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    name: "jsstore",
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',{
                    loader: 'sass-loader'
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.ts'] // '' is needed to find modules like "jquery"
    },
    plugins: [
        // new SmartBannerPlugin(banner),
        // new CopyPlugin({
        //     patterns: [
        //         { from: 'build_helper', to: '' },
        //     ],
        // }),
    ]
}