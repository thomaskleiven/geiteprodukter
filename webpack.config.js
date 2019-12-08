const path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './js/email.js',
    mode: 'production',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'var',
        library: 'email'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
          }]
    },
    devtool: 'source-map'
};
