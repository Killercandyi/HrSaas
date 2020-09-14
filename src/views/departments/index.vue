<template>
  <div class="dashboard-container">
    <div class="app-container">
      <!-- 卡片组件  页面基本布局 -->
      <el-card class="tree-card">
        <!-- element 行列布局 -->
        <tree-tools :tree-node="company" :is-root="true" />
        <el-tree :data="departs" :props="defaultProps" default-expand-all>
          <tree-tools slot-scope="{ data }" :tree-node="data" @removeDepts="getDepartments" />
        </el-tree>
      </el-card>
    </div>
  </div>
</template>

<script>
import TreeTools from './components/tree-tools'
import { getDepartments } from '@/api/departments'
import { transListToTreeData } from '@/utils'
export default {
  components: {
    TreeTools
  },
  data() {
    return {
      defaultProps: {
        label: 'name'
      },
      departs: [],
      company: {}
    }
  },
  created() {
    this.getDepartments() // 调用 methods 方法
  },
  methods: {
    async getDepartments() {
      const res = await getDepartments() // 调用 api 接口
      this.company = { name: res.companyName, manager: '负责人' }
      this.departs = transListToTreeData(res.depts, '')
    }
  }
}
</script>

<style>
.tree-card {
  padding: 30px  140px;
  font-size:14px;
}
</style>
