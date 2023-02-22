const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  outputDir: __dirname + '/../server/admin',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/admin/'
    : '/',
  transpileDependencies: true,
  lintOnSave:false
})
