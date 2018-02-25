const path = require('path');
const webpack = require('webpack');

const SRC_DIR = path.resolve(__dirname, 'public', 'javascripts');
const STATIC_DIR = path.resolve(__dirname, 'static');

module.exports = {
    entry: {
        entry: `${SRC_DIR}/scoreentry`,
        board: `${SRC_DIR}/scoreboard`
    },
    output: {
        path: STATIC_DIR,
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks(module) {
                var context = module.context;
                return context && context.indexOf('node_modules') >= 0;
            },
        }),
    ]
};
