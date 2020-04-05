<template>


  <el-container class="home-container">
      <!-- 头部 -->
    <el-header>
        <div>
          <img src="../assets/logo.png" alt="">
          <span>电商后台管理系统</span>
        </div>
      <el-button type="info" @click="logout">退出</el-button></el-header>
    <!-- 主体 -->
    <el-container>
        <!-- 侧边栏菜单 -->
      <el-aside :width="isCollapse ? '64px':'200px'">
        <div class="collapse-button" @click="collapse">|||</div>
        <el-menu
      class="el-menu-vertical-demo" background-color="#333744" text-color="#fff" active-text-color="#ffd04b"
       unique-opened :collapse="isCollapse" :collapse-transition="false" router :default-active="activePath">
      <!-- 一级菜单 -->
      <el-submenu :index="item.id+''" v-for="item in menus" :key="item.id">
        <!-- 一级菜单模板区域 -->
        <template slot="title">
          <!-- 图标 -->
          <i :class="item.icon"></i>
          <!-- 文本 -->
          <span v-text="item.menuName"></span>
        </template>
        <!-- 二级菜单 -->
         <el-menu-item :index="'/'+sub.path" v-for="sub in item.subMunus" :key="sub.id" 
         @click="saveActivePath('/'+sub.path)">
            <template slot="title">
          <!-- 图标 -->
            <i class="el-icon-menu"></i>
          <!-- 文本 -->
          <span v-text="sub.menuName"></span>
            </template>
         </el-menu-item>
      </el-submenu>

    </el-menu>
      </el-aside>
      <!-- 页面主体 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>


  
</template>

<script>
export default {
  data() {
    return {
      menus:[
        {id:1,menuName:'用户管理',icon:'el-icon-user-solid',subMunus:[
          {id:33,menuName:'用户列表',path:'users'},
        ]},
        {id:2,menuName:'权限管理',icon:'el-icon-key',subMunus:[
          {id:22,menuName:'权限列表',path:'powers'},
          {id:23,menuName:'权限设置',path:'setting'},
        ]},
        {id:3,menuName:'商品管理',icon:'el-icon-s-goods',subMunus:[
          {id:55,menuName:'商品管理',path:'goods'}
        ]},
        {id:4,menuName:'订单管理',icon:"el-icon-money",subMunus:[
          {id:44,menuName:'订单列表',path:'orders'}
        ]},
        {id:5,menuName:'数据统计',icon:'el-icon-s-data',subMunus:[
          {id:48,menuName:'销量统计',path:'count'}
        ]},
      ],
      isCollapse:false,
      activePath:''
    };
  },
  created(){
      this.getMenus();
      this.activePath = window.sessionStorage.getItem('activePath');
  },
  methods: {
    logout() {
      //清除token
      window.sessionStorage.clear();
      //跳转到登录页面
      this.$router.push("/login");
    },
    async getMenus(){

    },
    //点击按钮
    collapse(){
        this.isCollapse = !this.isCollapse;
    },
    saveActivePath(path){
        window.sessionStorage.setItem('activePath',path);
        this.activePath = path;
    }


  }
};
</script>

<style scoped lang='less'>
.home-container{
    height: 100%;
    width: 100%;
}
.el-header{
    background-color: #373d41;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    align-items: center;
    color: #fff;
    font-size: 20px;
    > div{
      display: flex;
      align-items: center;
      span{
        margin-left: 15px;
      }
    }
}
.el-aside{
    background-color: #333744;
    .el-menu{
      border: 0;
    }
}
.el-main{
    background-color: #EAEDF1;
}
.collapse-button{
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.3em;
  cursor: pointer;
}
</style>