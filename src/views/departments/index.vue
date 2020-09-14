<template>
  <div class="dashboard-container">
    <div class="app-container">
      <!-- 卡片组件  页面基本布局 -->
      <el-card class="tree-card">
        <!-- element 行列布局 -->
        <tree-tools :tree-node="company" :is-root="true" />
        <el-tree :data="departs" :props="defaultProps" default-expand-all>
          <tree-tools slot-scope="{ data }" :tree-node="data" />
        </el-tree>
      </el-card>
    </div>
  </div>
</template>

<script>
import TreeTools from './components/tree-tools'
export default {
  components: {
    TreeTools
  },
  data() {
    return {
      defaultProps: {
        label: 'name'
      },
      departs: [{ name: '总裁办', children: [{ name: '董事会' }] },
        { name: '行政部' }, { name: '人事部' }],
      company: {
        name: '江苏传智播客教育科技股份有限公司',
        manager: '负责人'
      }
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
