const { defineConfig } = require('@vue/cli-service')
const path = require("path")

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  pages:{
    index: {
      entry: path.join(__dirname, "src/main.js"),
      title: "环境变量"
    }
  },
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  devServer: {
    host: "localhost",
    port: "8081"
  },
})
