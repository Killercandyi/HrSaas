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
              <el-table
                v-loading="loading"
                :data="list"
                border=""
              >
                <el-table-column
                  header-align="center"
                  align="center"
                  label="序号"
                  width="120"
                  type="index"
                />
                <el-table-column
                  header-align="center"
                  align="center"
                  prop="name"
                  label="角色名称"
                  width="120"
                />
                <el-table-column
                  label="描述"
                  header-align="center"
                  prop="description"
                />
                <el-table-column
                  label="操作"
                  header-align="center"
                  align="center"
                >
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
              <el-pagination
                layout="prev,pager,next"
                :total="page.total"
                :page-size="page.pagesize"
                :current-page="page.page"
                @current-change="changePage"
              />
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
                <el-input v-model="formData.name" disabled style="width:400px" />
              </el-form-item>
              <el-form-item label="公司地址">
                <el-input v-model="formData.companyAddress" disabled style="width:400px" />
              </el-form-item>
              <el-form-item label="邮箱">
                <el-input v-model="formData.mailbox" disabled style="width:400px" />
              </el-form-item>
              <el-form-item label="备注">
                <el-input
                  v-model="formData.remarks"
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
import { getRoleList, getCompanyInfo } from '@/api/setting'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      loading: false, // loading 加载 默认不显示
      list: [], // 角色数据
      page: {
        // 分页数据
        page: 1,
        pagesize: 3,
        total: 0 // 总条数
      },
      formData: {}
    }
  },
  computed: {
    ...mapGetters(['companyId'])
  },
  created() {
    this.getRoleList()
    this.getCompanyInfo()
    console.log(this.companyId)
  },
  methods: {
    async getRoleList() {
      // 获取数据前 loading 加载
      this.loading = true
      const { total, rows } = await getRoleList(this.page)
      this.page.total = total
      this.list = rows
      this.loading = false
    },
    async getCompanyInfo() {
      this.formData = await getCompanyInfo(this.companyId)
    },
    changePage(newPage) {
      this.page.page = newPage
      this.getRoleList()
    }
  }
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
