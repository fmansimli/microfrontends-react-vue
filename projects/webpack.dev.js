const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const { merge } = require("webpack-merge");

const commonConfig = require("./webpack.common");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8082,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "projects",
      filename: "remoteEntry.js",
      exposes: {
        "./ProjectsApp": "./main",
      },
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
