module.exports = {
    entry: "./NotesSpec.js",
    output: {
        filename: "spec.js"
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            }
        ]
    }
};