<template>
  <div class="user-container">
    <el-card>
      <template #header>
        <div class="header">
          <el-button type="primary" @click="handleAdd">
            <el-icon><Plus /></el-icon>新增用户
          </el-button>
          <el-input
            v-model="searchQuery"
            placeholder="请输入用户名搜索"
            style="width: 200px"
            clearable
          />
        </div>
      </template>

      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="username" label="用户名" />
        <el-table-column prop="realName" label="真实姓名" />
        <el-table-column prop="phone" label="手机号" />
        <el-table-column prop="email" label="邮箱" />
        <el-table-column prop="status" label="状态">
          <template #default="{ row }">
            <el-tag :type="row.status ? 'success' : 'danger'">
              {{ row.status ? '启用' : '禁用' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template #default="{ row }">
            <el-button type="primary" link @click="handleEdit(row)">编辑</el-button>
            <el-button type="danger" link @click="handleDelete(row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="pagination">
        <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :total="total"
          :page-sizes="[10, 20, 30, 50]"
          layout="total, sizes, prev, pager, next"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'

interface UserData {
  username: string
  realName: string
  phone: string
  email: string
  status: boolean
}

const searchQuery = ref('')
const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(100)

// 模拟数据
const tableData = ref<UserData[]>([
  {
    username: 'admin',
    realName: '管理员',
    phone: '13800138000',
    email: 'admin@example.com',
    status: true
  }
])

const handleAdd = () => {
  // 处理新增用户
}

const handleEdit = (row: UserData) => {
  // 处理编辑用户
  console.log(row)
}

const handleDelete = (row: UserData) => {
  ElMessageBox.confirm('确认删除该用户吗？', '提示', {
    type: 'warning'
  }).then(() => {
    ElMessage.success('删除成功')
  })
}

const handleSizeChange = (val: number) => {
  pageSize.value = val
  // 重新加载数据
}

const handleCurrentChange = (val: number) => {
  currentPage.value = val
  // 重新加载数据
}
</script>

<style scoped>
.user-container {
  padding: 20px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}
</style> 