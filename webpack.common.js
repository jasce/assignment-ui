var path = require('path');

var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {

  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: [ /\.js|jsx$/ ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react', {
              'plugins': ['@babel/plugin-proposal-class-properties']
            }],
            
            cacheDirectory: true,
          }
        },
      },
      { 
        test: /\.json$/,
        use: [
          'json-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      },
      {
        test:/\.(s*)css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css'],
    alias: {
      src: path.resolve(__dirname, 'src/')
    },
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },
  performance: {
    hints: false,
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html')
    })
  ]

};
