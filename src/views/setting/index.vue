<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card>
        <!-- element 标签页 -->
        <el-tabs>
          <el-tab-pane label="角色管理">
            <el-row class="padding-el-row">
              <el-row>
                <el-button
                  type="primary"
                  size="small"
                  icon="el-icon-plus"
                >新增角色</el-button>
              </el-row>
              <!-- 展示数据表格 -->
              <el-table border="">
                <el-table-column label="序号" width="120" />
                <el-table-column label="角色名称" width="120" />
                <el-table-column label="描述" />
                <el-table-column label="操作">
                  <el-button
                    size="small"
                    type="success"
                  >分配权限</el-button>
                  <el-button
                    size="small"
                    type="primary"
                  >编辑</el-button>
                  <el-button
                    size="small"
                    type="danger"
                  >删除</el-button>
                </el-table-column>
              </el-table>
            </el-row>
            <!-- 分页组件 -->
            <el-row type="flex" justify="center">
              <el-pagination layout="prev,pager,next" />
            </el-row>
          </el-tab-pane>
          <!-- 公司信息 -->
          <el-tab-pane label="公司信息">
            <el-alert
              title="对公司名称、公司地址、营业执照、公司地区的更新，将使得公司资料被重新审核，请谨慎修改"
              type="info"
              show-icon=""
              :closable="false"
            />
            <el-form
              label-width="100px"
              style="margin-top: 20px"
            >
              <el-form-item label="公司名称">
                <el-input disabled style="width:400px" />
              </el-form-item>
              <el-form-item label="公司地址">
                <el-input disabled style="width:400px" />
              </el-form-item>
              <el-form-item label="邮箱">
                <el-input disabled style="width:400px" />
              </el-form-item>
              <el-form-item label="备注">
                <el-input
                  type="textarea"
                  :rows="3"
                  disabled
                  style="width:400px"
                />
              </el-form-item>
            </el-form>
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

<style lang="less" scoped>

</style>

<style>
/* 修改 element-ui 部分样式 */

  .el-tabs__item {
  font-size: 18px;
}

.padding-el-row {
  padding: 30px;
}

.el-table {
  margin-top: 15px;
}

.el-table th {
  background-color: #fafafa;
  height: 60px;
}

.el-alert .el-alert__icon{
  margin-left: 275px;
}

.el-form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
}

.el-form-item {
  margin-bottom: 15px;
  margin-right: 40px;
}
</style>
