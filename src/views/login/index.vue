<template>
    <div class="login-container">
      <el-card class="login-card">
        <template #header>
          <h2 class="login-title">系统登录</h2>
        </template>
        
        <el-form :model="loginForm" :rules="rules" ref="loginFormRef">
          <el-form-item prop="username">
            <el-input
              v-model="loginForm.username"
              placeholder="请输入用户名"
              prefix-icon="User"
            />
          </el-form-item>
          
          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              type="password"
              placeholder="请输入密码"
              prefix-icon="Lock"
              show-password
            />
          </el-form-item>
          
          <el-form-item>
            <el-button type="primary" class="login-button" @click="handleLogin">
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, reactive } from 'vue'
  import { User, Lock } from '@element-plus/icons-vue'
  import type { FormInstance } from 'element-plus'
  
  const loginFormRef = ref<FormInstance>()
  const loginForm = reactive({
    username: '',
    password: ''
  })
  
  const rules = {
    username: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
      { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
    ]
  }
  
  const handleLogin = async () => {
    if (!loginFormRef.value) return
    await loginFormRef.value.validate((valid) => {
      if (valid) {
        console.log('登录成功', loginForm)
        // 这里添加登录逻辑
      }
    })
  }
  </script>
  
  <style scoped>
  .login-container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f7fa;
  }
  
  .login-card {
    width: 400px;
  }
  
  .login-title {
    text-align: center;
    color: #303133;
    margin: 0;
  }
  
  .login-button {
    width: 100%;
  }
  
  :deep(.el-input__wrapper) {
    background-color: #f5f7fa;
  }
  
  :deep(.el-card__header) {
    padding: 15px;
  }
  </style>