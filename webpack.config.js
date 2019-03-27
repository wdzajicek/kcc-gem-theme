const path = require('path');
//const HashPlugin = require('hash-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  watch: true,
  entry: path.join(__dirname, 'webpack', 'main'),
  entry: {
    'kcc-theme': './assets/js/script/all.js'
  },
  output: {
    filename: '[name].bundle.js', // Leave out the [hash] naming for this
    path: path.resolve(__dirname, 'assets', 'js', 'dist')
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env']
        }
      }
    ]
  },
  plugins: [
    //new HashPlugin({ path: './_data/', fileName: 'hash.yml' }),
    new CleanWebpackPlugin({ path: './assets/js/dist/' })
  ],
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  }
};
