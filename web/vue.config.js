const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  outputDir: __dirname + '/../server/web',
  transpileDependencies: true,
  lintOnSave: false
})
 