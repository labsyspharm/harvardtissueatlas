const path =  require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: [
        './src/js/index.js'
    ],
    externals: {
        'jquery': 'jQuery'
    },
    output: {
        path: path.resolve(__dirname, 'assets/js'),
        filename: 'bundle.js'
    },
    optimization: {
        minimizer: [
            // We use the TerserPlugin to minimize our Javascript
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
            })
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader'],
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        },
                    }, {
                        loader: 'eslint-loader'
                    }
                ]
            }
        ]
    },
    devtool: 'nosources-source-map',
}