require("dotenv/config")

const path = require("path")
const webpack = require("webpack")

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "target"),
    filename: "app.bundle.js",
    publicPath: "/target/"
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  },
  plugins: [new webpack.EnvironmentPlugin(["USER_IDS"])],
  devServer: {
    historyApiFallback: true
  }
}
