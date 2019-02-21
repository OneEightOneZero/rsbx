const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: "development",
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js|jsx$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    // presets: ['@babel/preset-env']
                    plugins: ["transform-react-jsx","@babel/plugin-proposal-class-properties"]
                }
            },
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.(png|jpg|gif|jpeg|psd|bmp)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }]
    },
    node: {
        fs: 'empty'
    },
    plugins: [
        new UglifyJsPlugin()
    ],
    devServer: {
        //publicPath: '/dist/',
        contentBase: path.resolve(__dirname, 'dist'),
        historyApiFallback: true,
        host: 'localhost',
        inline: true,
        // port: 8090,
        open: true
    },
};