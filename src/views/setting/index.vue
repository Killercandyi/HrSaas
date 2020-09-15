<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card>
        <!-- element 标签页 -->
        <el-tabs>
          <el-tab-pane label="角色管理">
            <el-row>
              <el-button type="primary" size="small" icon="el-icon-plus">新增角色</el-button>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="公司信息" />
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>

</style>
