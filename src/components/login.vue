<template>
    <div class="login-contanier">
        <!-- 头像区域 -->
        <div class="login-box">
            <div class="avater-box">
                <img src="../assets/logo.png" />
            </div>

        
        <!-- 登录表单区域 -->
        <el-form :model="user"  ref="loginRef" :rules="userRules" label-width="0px" class="login-form">
            <!-- 用户名 -->
            <el-form-item prop="username">
                 <el-input v-model="user.username" prefix-icon="el-icon-s-custom" ></el-input>
                </el-form-item>
            <!-- 密码 -->
            <el-form-item prop="password" >
                 <el-input  v-model="user.password"  type="password" prefix-icon="el-icon-lock"></el-input>
                </el-form-item>
                <!-- 按钮 -->
            <el-form-item class="btn">
                 <el-button type="primary" @click="login">登录</el-button>
                 <el-button type="info" @click="resetForm">重置</el-button>
                </el-form-item>
        </el-form>

        </div>

    </div>
</template>
<script>
export default {

    data(){
        return{
            //绑定的表单对象
            user:{
                username:"",
                password:""
            },
            //验证规则
            userRules:{
                username:[
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                     { min: 4, max: 11, message: '长度在 4 到 11 个字符', trigger: 'blur' }
                ],
                password:[
                    { required: true, message: '请输入用户密码', trigger: 'blur' },
                     { min: 4, max: 11, message: '长度在 4 到 11 个字符', trigger: 'blur' }
                ]
            }
        }
    },
    methods:{
        //点击重置按钮，重置登录表单
        resetForm(){
            //获取表单对象，执行重置方法
            this.$refs.loginRef.resetFields();
        },
        //登录方法
        login(){
            //调用表单校验回调函数
            this.$refs.loginRef.validate((valid) =>{
                
                if(!valid){
                    return;
                }
            //表单的验证是根据之前添加的验证规则进行判断的,如果满足验证规则
            //valid为true  否则为false


            })
              

        }
    }

}
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
