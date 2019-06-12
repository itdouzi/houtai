<template>
  <div class="menu-container" @click="getStoreState">
      <!-- 导航菜单 -->
      <el-menu default-active="1" @open="handleopen" @close="handleclose" @select="handleselect" class="menu-content">
        <!-- 导航菜单树组件，动态加载菜单 -->
        <menu-tree v-for="item in navTree" :key="item.id" :menu="item"></menu-tree>
      </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import MenuTree from "@/components/MenuTree/MenuTree"
export default {
  data() {
    return {

    };
  },
  components:{
    MenuTree
  },
  computed:{
    ...mapState({
      // appName:state=>state.app.appName,
      collapse:state=>state.app.collapse,
      navTree:state=>state.menu.navTree,
    })
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
    },
    getStoreState(){
      console.log(this.collapse)
      console.log('点击获取store的数据collapse(...mapState里面的collapse)')
    },
    findMenuTree(){
      console.log('菜单初始化了')
      console.log(this.$api.menu)
      this.$api.menu.findNavTree()
      .then((res)=>{
        this.$store.commit('setNavTree',res.data)
      }).catch((res)=>{
        alert(res)
      });
    },
  },
  mounted() {
    this.findMenuTree()
  }
};
</script>

<style scoped lang="scss">
.menu-container{
    width: 18%;
    min-width: 200px;
    background-color: #fff;
    height: calc(100vh - 61px);
    overflow-y:auto;
    .menu-content{
      width: 100%;
      height: 100%;
      float:left;
      border: none;
    }
    
}
</style>