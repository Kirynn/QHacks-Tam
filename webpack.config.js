var path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
    // Change to your "entry-point".
    entry: './src/index',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
        alias: {
            '~': path.resolve(__dirname),
            '@assets': path.resolve(__dirname, 'src/assets/'),
            '@js': path.resolve(__dirname, 'src/js/')
        },
    },
    node : {
        __dirname: true
    },
    module: {
        rules: [{
            // Include ts, tsx, js, and jsx files.
            test: /\.(ts|js)x?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: "style-loader"
                },
                {
                    loader: "css-loader"
                },
                {
                    loader: "postcss-loader",
                    options: {
                        ident: "postcss",
                    }
                }
            ]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        },
        {
            // Loads the javacript into html template provided.
            // Entry point is set below in HtmlWebPackPlugin in Plugins 
            test: /\.html$/,
            use: [{loader: "html-loader"}]
          }],
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: "./src/html/index.html",
          filename: "./index.html",
          excludeChunks: [ 'server' ]
        })
      ]
};