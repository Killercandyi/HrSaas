<template>
  <div class="dashboard-container">
    <div class="app-container">
      <!-- 卡片组件  页面基本布局 -->
      <el-card class="tree-card">
        <!-- 头部(公司名称) -->
        <tree-tools :tree-node="company" :is-root="true" @addDepts="addDepts" />
        <el-tree :data="departs" :props="defaultProps" default-expand-all>
          <!-- 主体 -->
          <tree-tools slot-scope="{ data }" :tree-node="data" @removeDepts="getDepartments" @addDepts="addDepts" />
        </el-tree>
      </el-card>
      <addDept :show-dialog="showDialog" />
    </div>
  </div>
</template>

<script>
import TreeTools from './components/tree-tools'
import addDept from './components/add-dept'
import { getDepartments } from '@/api/departments'
import { transListToTreeData } from '@/utils'
export default {
  components: {
    TreeTools,
    addDept
  },
  data() {
    return {
      defaultProps: {
        label: 'name'
      },
      departs: [],
      company: {},
      showDialog: false, // 显示新增窗体
      node: null
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
    },
    addDepts(node) {
      this.showDialog = true
      this.node = node
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
