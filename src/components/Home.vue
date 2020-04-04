<template>


  <el-container class="home-container">
      <!-- 头部 -->
    <el-header><el-button type="info" @click="logout">退出</el-button></el-header>
    <!-- 主体 -->
    <el-container>
        <!-- 左边栏目 -->
      <el-aside width="200px">Aside</el-aside>
      <!-- 页面主体 -->
      <el-main>Main</el-main>
    </el-container>
  </el-container>


  
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      //清除token
      window.sessionStorage.clear();
      //跳转到登录页面
      this.$router.push("/login");
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
}
.el-aside{
    background-color: #333744;
}
.el-main{
    background-color: #EAEDF1;
}
</style>