"use strict";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/app.js",
    mode: "development",
    devtool: "eval-source-map",
    devServer: {
        static: path.resolve(__dirname, "dist"),
        port: 5001,
        open: true,
        hot: true,
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        // clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Weather App",
            filename: "index.html",
            template: path.resolve(__dirname, "src/template.html"),
        }),
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.html$/i, use: "html-loader" },
            {
                test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/,
                type: "asset/resource",
                generator: {
                    // filename: "assets/images/[name]-[hash][ext]",
                    filename: "assets/images/[name][ext]",
                },
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
};
