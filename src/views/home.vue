<template>
    <div>
        <h2>home</h2>
        <el-button type="primary" @click="testAxios()">测试axios调用</el-button>
        <el-button type="primary" @click="getUser()">获取用户信息</el-button>
        <el-button type="primary" @click="getMenu()">获取菜单信息</el-button>
    </div>
</template>
<script>
// import func from '../../vue-temp/vue-editor-bridge';
import axios from 'axios'
import mock from '@/mock/mock.js'
export default {
    name: 'Home',
    methods:{
        testAxios(){
            axios.get('http://localhost:8081').then(function(res){
                alert(res.data)
            }).catch(function(res){
                alert(res)
            });
        },
        getUser(){
            axios.get('http://localhost:8081/user').then(function(res){
                alert(JSON.stringify(res.data))
            }).catch(function(res){
                alert(res)
            });
        },
        getMenu(){
            axios.get('http://localhost:8081/menu').then(function(res){
                alert(JSON.stringify(res.data))
            }).catch(function(res){
                alert(res)
            });
        },
    }
}
</script>
<style lang="scss" scoped>

</style>


