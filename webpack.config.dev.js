module.exports = {
    entry: "./scripts/news/app.js",
    output: {
        path: __dirname,
        filename: "./public/javascripts/news/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { 
                test: /\.(js|jsx)$/,
                include: 
                    [
                        /scripts/
                    ],
                loader: 'babel-loader', 
                query: { 
                    presets: ['react-es2015']
                }              
            }
        ]
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300
    },
    cache: true,
    devtool: "source-map"
};