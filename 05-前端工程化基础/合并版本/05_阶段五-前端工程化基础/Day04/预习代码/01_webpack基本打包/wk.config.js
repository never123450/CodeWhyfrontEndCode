const path = require("path")
const { VueLoaderPlugin } = require("vue-loader/dist/index")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { DefinePlugin } = require("webpack")

module.exports = {
  mode: "development",
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js"
  },
  devServer: {
    // hot: true
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // { loader: "style-loader" },
          // { loader: "css-loader" },
          // { loader: "postcss-loader" }
          "style-loader", "css-loader", 
        ]
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader" },
          "postcss-loader"
        ]
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        type: "asset/resource",
        generator: {
          filename: "img/[name]_[hash:6][ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 40 * 1024
          }
        }
      },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "webpack项目",
      template: "./index.html"
    }),
    new DefinePlugin({
      BASE_URL: "'./'",
      VERSION: "1+1",
      MY_NAME: "'coderwhy'",
      __VUE_OPTIONS_API__: "true",
      __VUE_PROD_DEVTOOLS__: "false"
    })
  ]
}