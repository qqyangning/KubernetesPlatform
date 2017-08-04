var path = require('path');

var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        index: [
            path.resolve('./src/index.js')
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: "/",
        // publicPath:"http://127.0.0.1:3000/",
    },
    module: {
        preLoaders: [{
            test: /\.jsx?$/, loader: "eslint-loader", exclude: /node_modules|src\/lib/
        }
        ],
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['react-hot', 'babel'],
            include: [path.join(__dirname, 'src')]
       },
            {
            test: /\.scss$/,
            loader: 'style!css!postcss!sass'
        },
            {
           test: /\.css$/,
           loader: 'style!css!postcss'
  //
	//       test:/\.css$/,
	//       use:[
	//       	'style-loader',
  //             {loader:'css-loader',option:{importLoaders:1} },
  //             'postcss-loader'
  //         ]
            }, {
            test: /\.(jpe?g|png|gif)$/i,
            loaders: [
                'url?limit=10000&name=images/[hash:8].[name].[ext]',
                'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
            ]
        }, {
            test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url?limit=10000&name=fonts/[hash:8].[name].[ext]'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },
    eslint: {
        configFile: './.eslintrc.json'
    },
    babel: {
        presets: ['react', 'es2015', 'stage-0']
    },
    postcss: [autoprefixer()],
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        // new ExtractTextPlugin("[name].css")
    ]
};

