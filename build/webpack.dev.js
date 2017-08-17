const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const path = require('path');

module.exports = Merge(CommonConfig, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: "[name].js",
    //组件需选择umd
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
});
