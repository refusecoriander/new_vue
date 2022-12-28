const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  outputDir: __dirname + '/../server/web',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  transpileDependencies: true,
  lintOnSave: false
})
 