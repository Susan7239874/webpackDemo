// webpack.prod.js
const {merge} = require('webpack-merge');// 引入webpack-merge功能模块,从webpack-merge5.0.3 及更高版本起，需要{merge}低版本merge即可
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 引入CleanWebpackPlugin插件

module.exports = merge(common, { // 将webpack.common.js合并到当前文件
    devtool: 'source-map',  // 会生成对于调试的完整的.map文件，但同时也会减慢打包速度
    plugins: [
        new CleanWebpackPlugin(),
    ]
})
