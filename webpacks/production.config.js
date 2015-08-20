// webpack config for production
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: [ __dirname + '/../app/main.js']
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader?experimental']},
      {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
      {test: /\.less$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")},
      {test: /\.(png|jpg)$/, loader: 'url-loader?name=images/[name].[ext]&limit=8192'},
      {test: /\.(woff|svg|ttf|eot)([\?]?.*)$/, loader: "file-loader?name=fonts/[name].[ext]"}
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin("[name].css"),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ],
  resolve: {
    modulesDirectories: ['node_modules', 'app']
  }
};