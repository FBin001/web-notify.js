const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const path = require('path');

module.exports = Merge(CommonConfig, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: "[name].min.js",
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
});
