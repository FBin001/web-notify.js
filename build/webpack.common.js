module.exports = {
  entry: {
    WebNotify: "./src/index.js",
  },
  module: {
    rules: [
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