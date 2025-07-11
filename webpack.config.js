const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    header: path.resolve(__dirname, "src/header.js"),
    homepage: path.resolve(__dirname, "src/homepage.js"),
    articles: path.resolve(__dirname, "src/articles.js"),
    news: path.resolve(__dirname, "src/news.js"),
    single_news: path.resolve(__dirname, "src/single_news.js"),
    single_article: path.resolve(__dirname, "src/single_article.js"),
    current_issue: path.resolve(__dirname, "src/current.js"),
    archives: path.resolve(__dirname, "src/archives.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
};
