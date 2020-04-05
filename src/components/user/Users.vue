<template>
  <div>
    <!-- 麵包屑導航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用戶列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!--  卡片視圖  -->
    <el-card class="box-card">
    <el-row :gutter="20">
        <el-col :span="5">
        <el-input  placeholder="请输入内容">
         <el-button slot="append" icon="el-icon-search"></el-button>
     </el-input>
        </el-col>
        <el-col :span="4">
            <el-button type="primary">添加用戶</el-button>
        </el-col>

    </el-row>
    </el-card>





  </div>
</template>

<script>
export default {};
</script>

<style  lang="less" scoped>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .box-card {
    
  }


</style>