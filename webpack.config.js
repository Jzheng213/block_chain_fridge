const path = require("path");
const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");

const backConfig = {
  target: "node",
  mode: "development",
  entry: {
    app: ["./server/back.js"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle-back.js"
  },
  externals: [nodeExternals()],
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};

module.exports = [backConfig];
