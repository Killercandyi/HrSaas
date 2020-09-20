<template>
  <div class="dashboard-container">
    <div class="app-container">
      <!-- 放置tabs -->
      <el-card>
        <el-tabs>
          <el-tab-pane label="登陆账户设置">
            <el-form label-width="120px" style="margin-left120px">
              <el-form-item label="姓名">
                <el-input style="width: 300px" />
              </el-form-item>
              <el-form-item label="登陆密码">
                <el-input style="width: 300px" />
              </el-form-item>
              <el-form-item>
                <el-button size="small" type="primary">保存</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="个人详情">
            <!-- 放置个人详情 -->
          </el-tab-pane>
          <el-tab-pane label="岗位详情">
            <!-- 岗位详情 -->
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
