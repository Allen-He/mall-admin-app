module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  // 防止npm run build后出现空白页面
  publicPath: './',
};
