const path = require('path');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {

                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',

            },
        ],
    },

    plugins: [
        new FaviconsWebpackPlugin({
            logo:'./src/icons/sun.svg',
        }),

    ]

};