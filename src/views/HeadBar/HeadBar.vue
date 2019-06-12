<template> 
    <!-- 导航菜单 -->
    <div class="header-container">
        <div class="logo-warp">
            <i class="logo"></i>
            <span>后台管理系统</span>
        </div>
        <div class="navbar">
            <el-menu :default-active="activeIndex" class="el-menu-demo" 
                text-color="#fff" active-text-color="#ffd04b" mode="horizontal" background-color="#545c64" @select="selectNavBar()">
                <el-menu-item index="1" @click="$router.push('/')"><i class="fa fa-home fa-lg"></i>home</el-menu-item>
                <el-menu-item index="2" @click="openWindow('')">项目</el-menu-item>
                <el-menu-item index="3" @click="openWindow('')">文档</el-menu-item>
                <el-menu-item index="4" @click="openWindow('')">博客</el-menu-item>
            </el-menu>
        </div>
        <div class="center-warp">
            <div class="left">left</div>
            <div class="mid">mid</div>
            <div class="right">right</div>
        </div>
    </div>
</template>

<script>
import mock from "@/mock/index.js";
export default {
    data() {
        return {
        user: {
            name: "Louis",
            avatar: "",
            role: "超级管理员",
            registeInfo: "注册时间：2018-12-20 "
        },
        activeIndex: '1',
        langVisible: false
        };
    },
    methods: {
        openWindow(url) {
            // window.open(url)
        },
        selectNavBar(key, keyPath) {
            console.log(key, keyPath)
        },
    },
    mounted() {
        var user = sessionStorage.getItem("user");
        if (user) {
        this.userName = user;
        this.userAvatar = require("@/assets/user.png");
        }
  }
};
</script>

<style scoped lang="scss">
.header-container{
    background-color: #545c64;
    color: #fff;
    .logo-warp{
        width:18%;
        min-width: 200px;
        height: 60px;
        float: left;
        .logo{
            float: left;
            width: 50px;
            height: 50px;
            background: url('../../assets/logo.png');
            background-size: cover;
            margin: 5px;
        }
        span{
            float: left;
            height: 60px;
            line-height: 60px;
            font-size: 16px;
            font-weight: bold;
        }
    }
    .navbar{
        width:70%;
        float: left;
        .el-menu{
            background-color: transparent;
            border: none;
        }
    }
    .center-warp{
        width:calc(100% - 88%);
        float: right;
        height: 60px;
        line-height: 60px;
        display: flex;
        div{
            flex:1;
        }
    }
}
</style>