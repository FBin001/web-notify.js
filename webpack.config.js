const webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: {
    WebNotify: "./src/index.js",
  },
  output: {
    path: __dirname + "/bin",
    filename: "[name].js",
  },
  module: {
    rules:[
      {
        test: /\.js$/,
        use: [{
          loader: "babel-loader",
          options: { presets: ["es2015"] }
        }],
      },
    ]
  }
};