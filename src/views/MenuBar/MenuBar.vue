<template>
    <!-- 导航菜单 -->
    <el-menu default-active="1-1" @open="handleopen" @close="handleclose" @select="handleselect" class="menu-container">

      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">系统管理</span>
        </template>
        <el-menu-item index="1-1" @click="$router.push('user')">用户管理</el-menu-item>
        <el-menu-item index="1-2" @click="$router.push('dept')">机构管理</el-menu-item>
        <el-menu-item index="1-3" @click="$router.push('role')">角色管理</el-menu-item>
        <el-menu-item index="1-2" @click="$router.push('menu')">菜单管理</el-menu-item>
        <el-menu-item index="1-5" @click="$router.push('log')">日志管理</el-menu-item>
      </el-submenu>

      <el-menu-item index="2">
        <i class="el-icon-view"></i>
        <span slot="title">系统监控</span>
      </el-menu-item>

      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>

      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  methods: {
    handleopen() {
      console.log('handleopen');
    },
    handleclose() {
      console.log('handleclose');
    },
    handleselect(a, b) {
      console.log('handleselect');
    }
  },
  mounted() {

  }
};
</script>

<style scoped lang="scss">
.menu-container{
    width: 18%;
    min-width: 200px;
    background-color: #fff;
    height: calc(100vh - 61px);
    float:left;
    overflow:hidden;
    padding-bottom:9999px; 
    margin-bottom:-9999px;
    border: none;
}
</style>