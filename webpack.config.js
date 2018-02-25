const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'public', 'javascripts');
const STATIC_DIR = path.resolve(__dirname, 'static');

module.exports = {
    entry: `${SRC_DIR}/scoreentry`,
    output: {
        path: STATIC_DIR,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};
