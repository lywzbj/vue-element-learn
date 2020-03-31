<template>
    <div class="login-contanier">
        <!-- 头像区域 -->
        <div class="login-box">
            <div class="avater-box">
                <img src="../assets/logo.png" />
            </div>

        
        <!-- 登录表单区域 -->
        <el-form  label-width="0px" class="login-form">
            <!-- 用户名 -->
            <el-form-item>
                 <el-input prefix-icon="el-icon-s-custom" ></el-input>
                </el-form-item>
            <!-- 密码 -->
            <el-form-item >
                 <el-input   prefix-icon="el-icon-lock"></el-input>
                </el-form-item>
                <!-- 按钮 -->
            <el-form-item class="btn">
                 <el-button type="primary">登录</el-button>
                 <el-button type="info">重置</el-button>
                </el-form-item>
        </el-form>

        </div>

    </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.login-contanier{
        background-color: #2b4b6b;
        height: 100%;
                    }
.login-box{ 
width: 450px;
height: 300px;
background-color: #fff;
border-radius: 3px;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%,-50%);

    .avater-box{
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 10px #ddd;
        position: absolute;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: #fff;
        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #eee;
        }
    }

 }
 .login-form{
     position: absolute;
     bottom: 0;
     width: 100%;
     padding: 0 20px;
     box-sizing: border-box;
 }
 .btn{
     display: flex;
     justify-content: flex-end;

 }
</style>
