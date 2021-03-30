const path = require('path');
const baseConfig = require('./webpack.config');
const {merge} = require('webpack-merge');
var webpack = require('webpack');

function createConfigsForAllLibraryTarget() {
    const libraryTarget = [{
        type: "var",
        name: 'widget.js'
    }, {
        type: "commonjs2",
        name: 'widget.commonjs2.js'
    }];
    const getConfigForTaget = function (target) {
        return {
            output: {
                path: path.join(__dirname, "./../build"),
                filename: target.name,
                library: 'MaticWidget',
                libraryTarget: target.type
            },
            plugins: [
                new webpack.DefinePlugin({
                    'process.env.NODE_ENV': JSON.stringify("development")
                }),
            ],
            mode: "development",
            devtool: 'source-map',
        }
    }
    var configs = [];
    libraryTarget.forEach(function (target) {
        configs.push(merge(baseConfig, getConfigForTaget(target)));
    })
    return configs;
}

module.exports = createConfigsForAllLibraryTarget()