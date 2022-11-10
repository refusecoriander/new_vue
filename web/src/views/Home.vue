<template>
  <el-container class="container">
    <el-main class="main">
      <el-row>
        <el-col :span="24">
          <h1 class="Mytools">Mytools</h1>
        </el-col>
        <el-col :span="24">
          <h1 style="margin-bottom: 2em; color:#35495e">拒绝香菜的小工具箱</h1>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-button class="ToolBt" color="#2597d8" @click="cimsInputClick1" plain>刘明野工具集</el-button>
        </el-col>
        <el-col style="margin-top:20px" :span="24">
          <el-button class="ToolBt" color="#2597d8" @click="cimsInputClick2" plain>去水印</el-button>
        </el-col>
        <el-col style="margin-top:20px" :span="24">
          <el-button class="ToolBt" color="#2597d8" @click="cimsInputClick3" plain>推特视频下载</el-button>
        </el-col>
        <el-col style="margin-top:20px" :span="24">
          <el-button class="ToolBt" color="#2597d8" @click="cimsInputClick4" plain>二维码生成识别</el-button>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'navigation',
  components: {
  },
  data() {
    return {
      headTitle: '主页'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
    },
    cimsInputClick1() {
      window.open('http://tools.liumingye.cn/', '_blank')
    },
    cimsInputClick2() {
      this.$router.push({ path: '/watermark' })
    },
    cimsInputClick3() {
      this.$router.push({ path: '/twitterdown' })
    },
    cimsInputClick4() {
      this.$router.push({ path: '/qrcode' })
    }
  }
}
</script>

<style scoped>
.container {
  height: 100%;
  padding: 0px;
  background-color: white;
}
.main {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  padding: 0px;
  height: 100%;
  width: 100%;
}
.el-col{
  padding-left: 1rem;
  padding-right: 1rem;
}
.Mytools {
  font-size: 4rem;
  color: #2597d8;
  text-shadow: 1px 1px #35495e;
  margin-top: 0.5em;
  margin-bottom: 0em;
}
.ToolBt{
  left:1em;
  right:1em;
  padding: 1em;
  width: 100%;
  height: 7em;
  /* color: #26ac6f; */
}
</style>