var path = require('path'),
    webpack = require('webpack'),
    //定义了一些文件夹的路径
    ROOT_PATH = path.resolve(__dirname),
    APP_PATH = path.resolve(__dirname, 'public/styles'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    // 与nodejs一起使用热加载服务插件
    HotModuleReplacementPlugin = webpack.HotModuleReplacementPlugin;
    DefinePlugin = webpack.DefinePlugin;

module.exports = {
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    // devtool: 'eval-source-map', //显示原始报错位置；默认显示bundle.js中的错误
    resolve: {
        alias: {
            "reducers": ROOT_PATH + "/public/scripts/reducers",
            "store": ROOT_PATH + "/public/scripts/store",
            "actions": ROOT_PATH + "/public/scripts/actions",
            "components": ROOT_PATH + "/public/scripts/components",
            "utils": ROOT_PATH + "/public/utils",
            "scripts": ROOT_PATH + "/public/scripts",
            "styles": ROOT_PATH + "/public/styles",
        }
    },
    module: {
        loaders: [
            // { test: /\.js?$/, loaders: ['jsx-loader?harmony'] },
            {
                test: /\.js?$/,
                loaders: ['babel-loader'],
                exclude: /(node_modules|bower_components)/,
            }, {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('css!less'),
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css'),
            }
        ]
    },
    entry: {
        index: ["./public/scripts/index.js"]
    },
    output: {
        path: __dirname + '/build/',
        publicPath: '/build/',
        filename: 'scripts/[name]_bundle.js'
    },
    plugins: [
        new ExtractTextPlugin("styles/[name]_bundle.css"),
        new HotModuleReplacementPlugin(),
        new DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development")
        })
    ]
};
