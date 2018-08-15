const HTMLWebpackPlugin = require("html-webpack-plugin"),
      path              = require("path");

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin(
    {
        template: "./src/index.html",
        filename: "./index.html"
    }
);

module.exports = {
    // If we add this entry and output point, then we need to look on the outputh 
    // filename in the file path we defined namely ./dist/bundle.js
    /*
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    */
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [HTMLWebpackPluginConfig]
};