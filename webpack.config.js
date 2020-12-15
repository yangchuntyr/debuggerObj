const pkg = require("./package.json");
const Webpack = require("webpack");
const Path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
console.log(
  Path.resolve(__dirname, "./src/debuggerObj.min.d.ts"),
  Path.resolve(__dirname, "./dist/debuggerObj.min.d.ts")
);
module.exports = {
  mode: "production",
  devtool: false,
  entry: {
    debuggerObj: Path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    path: Path.resolve(__dirname, "./dist"),
    filename: "[name].min.js",
    library: "DebuggerObj",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
      },
    ],
  },
  stats: {
    colors: true,
  },
  plugins: [
    /**生成版本说明信息 */
    new Webpack.BannerPlugin(
      ["debuggerObj v" + pkg.version + " (" + ")", "谢谢大家使用"].join("\n")
    ),
    new CopyWebpackPlugin([
      {
        from: "@/src/debuggerObj.min.d.ts",
        to: "",
      },
    ]),
  ],
};
