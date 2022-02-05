// webpack.dev.js
const path = require('path');
const {merge} = require('webpack-merge');  // 引入webpack-merge功能模块,从webpack-merge5.0.3 及更高版本起，需要{merge}低版本merge即可
const common = require('./webpack.common.js'); // 引入webpack.common.js

module.exports = merge(common, {   // 将webpack.common.js合并到当前文件
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        hot: true,
        port: '8080',
        inline: true,
        open: true,
        overlay: true,
        proxy: {
            '/api': {
                target: 'https://www.google.com.hk/',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/api'
                }
            }
    },
    }
})
