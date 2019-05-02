// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = (env) => {
    console.log('env: ', env);
    
    return {
        mode: 'development',
        devtool: false,
        plugins: [
            new HtmlWebpackPlugin({
                template: './static/index.html'
            })
        ]
    }
}