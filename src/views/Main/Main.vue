<template>
  <div class="main-container">
    <!-- 主内容区域 -->
    <div class="main-content">
      <keep-alive>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {

  },
  mounted() {

  }
};
</script>

<style scoped lang="scss">
.main-container{
    background-color: #efefef;
    width: 82%;
    height: calc(100vh - 61px);
    float:right; 
    height:auto;
    div{
      text-align: center;
      color: #333;
      h2{
        font-size: 80px;
      }
    }
}
</style>