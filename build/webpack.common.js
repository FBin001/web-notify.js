const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');

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
  },
  plugins: [
    new CleanWebpackPlugin(
      ['dist'],　                               //匹配删除的文件
      {
        root: path.resolve(__dirname,'../'),    //根目录
        verbose: true,        　　　　　　　　　　//开启在控制台输出信息
        dry: false        　　　　　　　　　　    //启用删除文件
      }
    )
  ]
};
