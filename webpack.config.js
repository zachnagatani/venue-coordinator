module.exports = {
    entry: './client/app.js',
    output: {
        filename: './client/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react']
                }
            }
        ]
    },
    watch: true
};