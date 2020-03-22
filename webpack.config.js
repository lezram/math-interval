const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        'math-interval': './src/index.ts',
        'math-interval.min': './src/index.ts'
    },
    mode: "production",
    devtool: 'source-map',
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: true,
                include: /\.min\.js$/,
            }),
        ],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "awesome-typescript-loader",
                exclude: /node_modules/,
                options: {
                    configFileName: 'tsconfig.browser.json'
                },
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist', 'browser'),
        libraryTarget: 'var',
        library: 'MathInterval',
        umdNamedDefine: true
    },
};
