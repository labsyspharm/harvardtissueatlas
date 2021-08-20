const path =  require('path');

module.exports = {
    mode: 'development',  // default is production
    watch: true,
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
}