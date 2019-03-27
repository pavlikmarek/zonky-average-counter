module.exports = {
  devServer: {
    proxy: "https://api.zonky.cz/"
  },
  publicPath:
    process.env.NODE_ENV === "production" ? "/zonky-average-counter/" : "/"
};
