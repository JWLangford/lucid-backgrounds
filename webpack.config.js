const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  mode: "development",

  entry: ["./src/index.tsx"],

  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js",
  },

  resolve: { extensions: [".js", ".jsx", ".tsx", ".ts", ".json"] },

  devServer: {
    stats: "minimal",
    clientLogLevel: "error",
    contentBase: "./public",
    watchContentBase: true,
    historyApiFallback: true,
    hot: true,
    hotOnly: true,
    port: 8080,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],
}
