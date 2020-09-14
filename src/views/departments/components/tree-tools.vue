<template>
  <el-row type="flex" justify="space-between" align="middle" style="height: 40px;width: 100%">
    <el-col>
      <!-- 此时 data 应该换成 treeNode-->
      <span>{{ treeNode.name }}</span>
    </el-col>
    <el-col :span="4">
      <el-row type="flex" justify="end">
        <el-col>{{ treeNode.manager }}</el-col>
        <el-col>
          <!-- 下拉菜单的提示文字 -->
          <el-dropdown>
            <span>
              操作<i class="el-icon-arrow-down" />
            </span>
            <!-- 下拉菜单 -->
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>添加子部门</el-dropdown-item>
              <!-- 编辑部门和删除部门只会在子节点上显示 -->
              <el-dropdown-item v-if="!isRoot">编辑部门</el-dropdown-item>
              <el-dropdown-item v-if="!isRoot">删除部门</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
  // 定义props
  props: {
    treeNode: {
      type: Object, // 对象的类型
      required: true // 要求父组件调用时必须要传一个 treeNode 属性,否则报错
    },
    isRoot: { // 控制组件显示与影藏
      type: Boolean,
      default: false // 因为节点用的多 所以默认值给false
    }
  }
}
</script>

<style>

</style>
