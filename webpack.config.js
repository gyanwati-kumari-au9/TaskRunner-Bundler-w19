const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
// const webpack = require("webpack");

module.exports = {
    mode:"development", //production
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: __dirname + '/src/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
                    
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            // {
            //     test: /\.(png|jpe?g|gif)$/,
            //     loader: 'url-loader?limit=10000&name=img/[name].[ext]'
            // }

        ]
    }
}

