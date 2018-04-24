const path = require("path");
const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");

const frontConfig = {
  target: "web",
  mode: "development",
  entry: {
    app: ["./frontend/front.js"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle-front.js"
  },
  devtool: "inline-source-map",
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};

const backConfig = {
  target: "node",
  mode: "development",
  entry: {
    app: ["./back.js"]
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

module.exports = [frontConfig, backConfig];
