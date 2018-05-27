"use strict";

const path = require("path");
const webpack = require("webpack");
// const autoprefixer = require("autoprefixer");

module.exports = {
    entry: "./main.js",

    output: {
        path: path.resolve(__dirname, "./public/"),
        filename: "app.js"
    },

    watch: false,

    devtool: "source-map",

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                options: { presets: ["es2015"] }
            },
            {
                test: /\.pug$/,
                loader: "pug-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    }
};
