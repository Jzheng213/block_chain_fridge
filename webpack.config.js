const path = require("path");
const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");

const frontConfig = {
  target: "web",
  mode: "development",
  entry: {
    app: ["./frontend/src/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle-front.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env']
        }
      }
    ]
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
