module.exports = {
    entry: './client.js',
    output: {
        filename: 'bundle.js',
        path: 'public'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'es2017']
                }
            }
        ]
    }
};
