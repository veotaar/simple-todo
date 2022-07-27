const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const isProduction = process.env.NODE_ENV === "production";

const config = {
  entry: "./src/index.js",
  devtool: "inline-source-map",
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 600,
  },
  devServer: {
    static: "./dist",
    open: true,
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "./dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    new FaviconsWebpackPlugin("./src/assets/favicon/logo.png"),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(eot|ttf|woff|woff2|png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
