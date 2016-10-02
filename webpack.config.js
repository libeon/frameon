var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: "./app/frameon.js",
  output: {
    filename: "dist/frameon.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: process.cwd(),
      verbose: true,
      dry: false,
      exclude: ['index.html']
    })
  ]
}