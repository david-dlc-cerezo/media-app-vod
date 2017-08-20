var webpack = require("webpack");
module.exports = {
  entry: './app/scripts/main.js',
  output: {
    filename: './app/scripts/main.bundle.js'
  },
  resolve: {
    modules: ['bower_components', 'node_modules'],
    descriptionFiles: ['bower.json', 'package.json'],
    alias: {
      'jquery': 'jquery/src/jquery',
      'bootstrap': 'bootstrap-sass/assets/javascripts/bootstrap'
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    }]
  }
};
