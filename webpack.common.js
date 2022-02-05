// webpack.common.js
const path = require('path');
const webpack = require('webpack');  // 这个插件不需要安装，是基于webpack的，需要引入webpack模块
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 引入HtmlWebpackPlugin插件
module.exports = {
    entry:{
        index:path.join(__dirname, "/src/index.js"), // 入口文件
        index2:path.join(__dirname,"/src/index2.js")
    },
    output: {
        path: path.join(__dirname, "/dist"), // 打包后的文件存放的地方
        filename: "[name].js" // 打包后输出文件的文件名,一个entry文件命名一个bundle之类的即可，多个entry要写成[name]否则报错
    },
    module: {
        rules: [
            {
                test: /\.css$/,   // 正则匹配以.css结尾的文件
                use: ['style-loader', 'css-loader']  // 需要用的loader，一定是这个顺序，因为调用loader是从右往左编译的
            },
            {
                test: /\.(scss|sass)$/,   // 正则匹配以.scss和.sass结尾的文件
                use: ['style-loader', 'css-loader', 'sass-loader']  // 需要用的loader，一定是这个顺序，因为调用loader是从右往左编译的
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),  // new一个插件的实例
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "/src/index.html")// new一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin() // 热更新插件
    ]
}
