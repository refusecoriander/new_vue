<template>
  <el-container class="layout-container-demo" style="height: 100vh;">
    <el-main>
      <el-menu mode="horizontal" class=" el-menu-demo" background-color="#545c64" text-color="#fff"
        active-text-color="#ffd04b" @select="handleSelect" router unique-opened :default-active="$route.path">
        <!-- <el-menu-item index="1">后台主页</el-menu-item> -->
        <el-sub-menu index="1">
          <template #title>
            用户管理
          </template>
          <el-menu-item-group>
            <el-menu-item index="/users/list">用户列表</el-menu-item>
            <el-menu-item index="/users/creat">添加用户</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="3">添加管理员</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
      <router-view :key="$route.path"></router-view>
    </el-main>
  </el-container>
</template>

<script>
</script>

<style scoped>
.layout-container-demo {
  height: 100%;
}

.layout-container-demo .el-header {
  position: relative;
  background-color: var(--el-color-primary-light-7);
  color: var(--el-text-color-primary);
}

/* .layout-container-demo .el-aside {
  color: var(--el-text-color-primary);
  background: rgb(184, 184, 184);
} */
/* .layout-container-demo .el-menu {
  border-right: none;
} */
.layout-container-demo .el-main {
  padding: 0;
}

.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}

.el-main {
  background-color: rgb(236, 244, 250);
}
</style>
