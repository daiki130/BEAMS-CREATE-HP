const path = require("path");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: "./js/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
  },
};
