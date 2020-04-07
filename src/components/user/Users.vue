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

    <el-table :data="users" :stripe="true" max-height="700px">
        <el-table-column type="index"></el-table-column>
        <el-table-column label="用户名" prop="username"></el-table-column>
        <el-table-column label="密码" prop="password"></el-table-column>
        <el-table-column label="时间" prop="lastvisitdate"></el-table-column>
        <el-table-column label="角色" prop="role"></el-table-column>
        <el-table-column label="标志" >
          <template slot-scope="scope">  
        <el-switch v-model="scope.row.flag">
                          </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template >
            <!-- 需要按钮 -->
            <el-tooltip  effect="light" content="编辑用户" placement="top" :enterable="false">
              <el-button type="primary" icon="el-icon-edit"></el-button>
            </el-tooltip>
              <!-- 分配权限按钮 -->
              <el-tooltip  effect="light" content="分配权限" placement="top" :enterable="false">
              <el-button type="warning" icon="el-icon-setting" ></el-button>
              </el-tooltip>
              <!-- 删除按钮 -->
              <el-tooltip  effect="light" content="删除用户" placement="top" :enterable="false">
              <el-button type="danger" icon="el-icon-delete"></el-button>
              </el-tooltip>
          </template>
        </el-table-column>

    </el-table>

    <!-- 分页 -->
<template>
  <div class="block">
    <!-- <span class="demonstration">完整功能</span> -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

    </el-card>





  </div>
</template>

<script>
export default {
  data(){
    return {
          pageNum:1,
          pageSize:30,
          users:[],
          currentPage:1,
          total:0,
    }
  },
  created(){
    this.getUsers();
  },
  methods:{
   async getUsers(){
      const {data:res} = await this.$axios.get('http://localhost:8088/user/list/'+this.pageNum+'/'+this.pageSize);
      // if(res.meta.status !== 200){
      //   return this.message.error("数据获取失败!");
      // }
      this.users = res.data;
      this.total=res.pager.total;
      this.totalPage = this.total/this.pageSize;
    },
    handleSizeChange(newPageSize){
        this.pageSize = newPageSize;
        this.pageNum = 1;
        this.getUsers();
    },
    handleCurrentChange(currentPage){
      this.currentPage = currentPage;
      this.getUsers();
    }
  }
};
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
  .el-table{
    margin-top:15px;
    font-size: 16px;
  }

</style>