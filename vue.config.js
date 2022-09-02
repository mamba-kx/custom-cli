const { defineConfig } = require("@vue/cli-service");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const CDN_URL = `cdn地址`;

module.exports = defineConfig({
  publicPath: process.env.VUE_APP_ENV === "prod" ? CDN_URL : "./",
  productionSourceMap: false,
  lintOnSave: "warning",
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "./src/style/mixin.scss";` //注意“;”是必须的，./src/styles/init 的"init"是根据自己创建的文件名称
      }
    }
  },

  chainWebpack: (config) => {
    if (process.env.VUE_APP_ENV === "prod") {
      config
        .plugin("webpack-report")
        .use(BundleAnalyzerPlugin, [{ analyzerMode: "static" }]);
      // 图片压缩
      config.module
        .rule("images")
        .test(/(?<!\.apng)\.(gif|png|jpe?g|svg)$/i)
        .use("image-webpack-loader")
        .loader("image-webpack-loader")
        .options({
          bypassOnDebug: true,
          mozjpeg: {
            progressive: true
          },
          optipng: {
            enabled: false
          },
          pngquant: {
            quality: [0.65, 0.9],
            speed: 4
          },
          gifsicle: {
            interlaced: false
          },
          // the webp option will enable WEBP
          webp: {
            quality: 75
          }
        })
        .end();
    }
  },
  devServer: {
    open: {
      target: "http://localhost:8080/?debug=true#/"
    }
  }
});
