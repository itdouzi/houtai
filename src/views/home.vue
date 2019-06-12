<template>

  <el-container class="is-vertical">
    <!-- 头部区域 -->
    <HeadBar></HeadBar>
    <el-container>
      <!-- 导航菜单栏 -->
      <MenuBar></MenuBar>
      <!-- 主内容区域 -->
      <Main></Main>
    </el-container>
  </el-container>

</template>
<script>
import HeadBar from "./HeadBar/HeadBar"
import MenuBar from "./MenuBar/MenuBar"
import Main from "./Main/Main"
export default {
  components:{
        HeadBar,
        MenuBar,
        Main
  }
};
</script>
<style lang="scss" scoped>
.el-container{
  &.is-vertical{
    min-width: 1200px;
  }
}
</style>


