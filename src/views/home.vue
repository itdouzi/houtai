<template>
    <div>
        <h2>home</h2>
        <el-button type="primary" @click="testAxios()">测试axios调用</el-button>
    </div>
</template>
<script>
// import func from '../../vue-temp/vue-editor-bridge';
import axios from 'axios'
export default {
    name: 'Home',
    methods:{
        testAxios(){
            axios.get('http://localhost:8086').then(function(res){
                alert(res.data)
            }).catch(function(res){
                alert(res)
            });
        }
    }
}
</script>
<style lang="scss" scoped>

</style>


