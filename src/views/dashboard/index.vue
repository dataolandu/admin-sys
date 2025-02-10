<template>
  <div class="dashboard-container">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <template #header>
            <div class="card-header">
              <span>用户总数</span>
            </div>
          </template>
          <div class="card-body">
            <el-statistic :value="1234">
              <template #prefix>
                <el-icon><User /></el-icon>
              </template>
            </el-statistic>
          </div>
        </el-card>
      </el-col>
      <!-- 可以添加更多统计卡片 -->
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User } from '@element-plus/icons-vue'
</script>

<style scoped>
.dashboard-container {
  padding: 20px;
}
.card-header {
  font-weight: bold;
}
.card-body {
  text-align: center;
  padding: 20px 0;
}
</style> 