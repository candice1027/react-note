var path = require('path');
module.exports = {
    entry: {
        index: './lib/index.tsx'
    },
    output: {
        path: path.resolve(__dirname,'dist/lib'),
        library: 'reactui',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            { 
                test: /\.tsx?$/ ,
                loader: 'awesome-typescript-loader'
            }
        ]
    }, 
}