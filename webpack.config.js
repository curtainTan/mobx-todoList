const path = require("path")


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
                        presets: [ "@babel/preset-env", "@babel/preset-react" ],
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
    // 配置 map 文件
    // devtool: "inline-source-map"
}

module.exports = config
