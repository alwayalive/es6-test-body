var path = require('path');
var webpack = require('webpack');
    //定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(__dirname, 'public/styles');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// 与nodejs一起使用热加载服务插件
var HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;

module.exports = {
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    // devtool: 'eval-source-map', //显示原始报错位置；默认显示bundle.js中的错误
    resolve: {
        alias : {
            "images": ROOT_PATH + "/assets/reduces",
            "scripts": ROOT_PATH + "/assets/components/common",
            "styles": ROOT_PATH + "/public/styles",
        }
    },
    module: {
        loaders: [
            // { test: /\.js?$/, loaders: ['jsx-loader?harmony'] },
            {
                test: /\.js?$/,
                loaders: ['babel-loader']
            }, {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('css!less'),
            },{
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css'),
            }
        ]
    },
    entry: {
        index : [ "./public/scripts/index.js" ]
    },
    output: {
        path: __dirname + '/build/',
        publicPath: '/build/',
        filename: 'scripts/[name]_bundle.js'
    },
    plugins:[
        new ExtractTextPlugin("styles/[name]_bundle.css"),
        new HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV" : JSON.stringify( process.env.NODE_ENV || "development" )
        })
    ]
};