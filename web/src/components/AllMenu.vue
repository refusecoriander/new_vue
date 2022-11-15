<template>
  <div class="allmenu">
    <el-affix position="top" :offset="200">
      <el-button type="primary" :icon="Menu" @click="drawer = true" circle></el-button>
    </el-affix>
  </div>
  <el-drawer v-model="drawer" :direction="direction" :with-header="false">
    <el-menu :router="true" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-menu-item style="padding:0px" @click="CloseDrawer" index="/navigation">
        <span slot="title">主页</span>
      </el-menu-item>
      <el-menu-item style="padding:0px" @click="CloseDrawer" index="/watermark">
        <span slot="title">X-UI面板</span>
      </el-menu-item>
      <el-menu-item style="padding:0px" @click="CloseDrawer" index="/baota">
        <span slot="title">宝塔面板</span>
      </el-menu-item>
      <el-menu-item style="padding:0px" @click="CloseDrawer" index="/racknerd">
        <span slot="title">Racknerd</span>
      </el-menu-item>
    </el-menu>
  </el-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Menu } from '@element-plus/icons-vue'

const drawer = ref(false)
const direction = ref('ltr')

function OpenDrawer() {
  drawer.value = true
}
function CloseDrawer() {
  drawer.value = false
}

const handleOpen = (key: string, keyPath: string[]) => {
  
}
const handleClose = (key: string, keyPath: string[]) => {
 
}
</script>
<style>
.allmenu {
  z-index: 9000;
  position: fixed;
  /* 设置fixed固定定位 */
  bottom: 40px;
  /* 距离浏览器窗口下边框20px */
  right: 24px;
  /* 距离浏览器窗口右边框20px */
}

.el-drawer.ltr {
  padding: 0;
  background: rgba(9, 9, 9, 0.397);
  ;
}

.el-drawer__body {
  padding-right: 0;
  padding-left: 0;
}

.el-menu {
  background: rgba(48, 49, 48, 0);
  border-right-color: #04040423;
}

.el-menu-item {
  color: #F8F8FF;
  justify-content: center;
}

.el-menu-item:hover {
  background-color: #04040463;
}

.el-menu-item.is-active {
  background-color: #04040463;
}
</style>