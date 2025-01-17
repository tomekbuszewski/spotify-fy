const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const Dotenv = require("dotenv-webpack");

const getPaths = require("../../src/services/moduleAlias");

const PROD = process.env.NODE_ENV === "production";
const ENV = PROD ? "production" : "development";

const mode = PROD ? "production" : "development";
const devtool = PROD ? "none" : "inline-source-map";

const resolve = {
  extensions: [".ts", ".tsx", ".js", ".jsx"],
  alias: getPaths(),
};

const entry = ["./src/index.tsx"];

const output = isProd => ({
  path: path.resolve("public", "assets"),
  filename: isProd ? "[name].[hash].js" : "[name].js",
  hotUpdateChunkFilename: ".hot/[id].[hash].hot-update.js",
  hotUpdateMainFilename: ".hot/[hash].hot-update.json",
  publicPath: "/assets/",
});

const rules = [
  {
    test: /\.[tj]s(x?)$/,
    exclude: /node_modules/,
    use: [
      { loader: "babel-loader" },
      { loader: "react-hot-loader/webpack" },
      { loader: "react-docgen-typescript-loader" },
    ],
  },
];

const optimization = isProd => ({
  minimize: isProd,
  nodeEnv: isProd ? "production" : "development",
  mergeDuplicateChunks: true,
  splitChunks: {
    chunks: "all",
    minSize: 30000,
    maxSize: 0,
    minChunks: 1,
    maxAsyncRequests: 5,
    maxInitialRequests: 3,
    automaticNameDelimiter: "-",
    name: true,
    cacheGroups: {
      vendor: {
        chunks: "initial",
        test: "vendor",
        name: "vendor",
        enforce: true,
      },
    },
  },
});

const plugins = [
  new webpack.DefinePlugin({
    "process.env": {
      NODE_ENV: JSON.stringify(ENV),
    },
  }),

  new ManifestPlugin({
    filter: ({ isInitial }) => isInitial,
  }),

  new HtmlWebpackPlugin({
    template: path.resolve("src", "templates", "index.html"),
    filename: path.resolve("public", "index.html"),
    minify: true,
    hash: true,
    inject: "body",
    title: "",
  }),

  new ScriptExtHtmlWebpackPlugin({
    defaultAttribute: "async",
  }),

  new Dotenv(),
];

module.exports = {
  entry,
  mode,
  devtool,
  resolve,
  output,
  rules,
  optimization,
  plugins,
};
