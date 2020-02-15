const path = require("path")
const AddAssetHtmlCdnPlugin = require('add-asset-html-cdn-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')


const config = {
    // mode: "development",
    mode: "production",
    // 入口文件
    entry: path.resolve( __dirname, "./src/index.jsx" ),
    // 打包输出文件
    output: {
        path: path.resolve( __dirname, "react" ),
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [ 
                            [
                                "@babel/preset-env", {
                                    "useBuiltIns":"usage", // 按需加载
                                    "corejs":2 // corejs 替代了以前的pollyfill
                                }
                            ], 
                            "@babel/preset-react" ],
                        // 配置 babel 插件
                        plugins: [ 
                            ["@babel/plugin-proposal-decorators", { "legacy": true }], 
                            "transform-class-properties"
                        ]
                    }
                }
            }
        ]
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: "static",
            reportFilename: "./bundle/index.html"
        }),
        new HtmlWebpackPlugin({
            filename:'index.html', // 打包出来的文件名
            template:path.resolve(__dirname,'./index.html'),
            hash:true, // 在引用资源的后面增加hash戳
            minify:{
                removeAttributeQuotes:true // 删除属性双引号
            },
            inject: true
        }),
        new AddAssetHtmlCdnPlugin(true,{
            'React':'https://cdn.bootcss.com/react/16.10.2/umd/react.production.min.js',
            'mobx': 'https://cdn.bootcss.com/mobx/5.14.0/mobx.umd.min.js',
            'ReactDOM': 'https://cdn.bootcss.com/react-dom/16.10.2/umd/react-dom.production.min.js'
        })
    ],
    // 配置 map 文件
    // devtool: "inline-source-map"
    resolve: {
        extensions: [ ".js", ".jsx" ]
    },
    externals: {
        react: 'React',
        mobx: 'mobx',
        'react-dom': 'ReactDOM'
    }
}

module.exports = config
