<template>
    <div class="user-container">
        <h2>用户管理</h2> 
        <el-button type="primary" @click="tomenu()">跳转到菜单管理</el-button>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        tomenu(){
            this.$router.push({path:'/sys/menu'})
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
