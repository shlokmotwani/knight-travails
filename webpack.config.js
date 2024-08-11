const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new HtmlWebpackPlugin(
        {
            title: 'Knight Travails',
            filename: 'index.html',
        }
    )],
    mode: 'none',
    devtool: 'inline-source-map',
}