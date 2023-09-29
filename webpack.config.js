path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.min.js",
  },
  devServer: {
    port: 777,
    client: {
      logging: "none",
    },
  },
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-react']],
          },
        },
      },
    ],
  },
};
