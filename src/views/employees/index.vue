<template>
  <div v-loading="loading" class="dashboard-container">
    <div class="app-container">
      <!-- 顶部栏 -->
      <page-tools :show-before="true">
        <span slot="before">共{{ page.total }}条记录</span>
        <template slot="after">
          <el-button size="small" type="warning">导入</el-button>
          <el-button size="small" type="danger">导出</el-button>
          <el-button size="small" type="primary">新增员工</el-button>
        </template>
      </page-tools>
      <!-- 主体表格分页 -->
      <el-card>
        <el-table
          border=""
          :data="list"
        >
          <el-table-column
            label="序号"
            sortable=""
            type="index"
          />
          <el-table-column
            header-align="center"
            align="center"
            label="姓名"
            sortable=""
            prop="username"
          />
          <el-table-column
            header-align="center"
            align="center"
            label="工号"
            sortable=""
            prop="workNumber"
          />
          <el-table-column
            header-align="center"
            align="center"
            label="聘用形式"
            sortable=""
            prop="formOfEmployment"
          />
          <el-table-column
            header-align="center"
            align="center"
            label="部门"
            sortable=""
            prop="departmentName"
          />
          <el-table-column
            header-align="center"
            align="center"
            label="入职时间"
            sortable=""
            prop="timeOfEntry"
          />
          <el-table-column
            header-align="center"
            align="center"
            label="账号状态"
            sortable=""
            prop="enableState"
          />
          <el-table-column
            header-align="center"
            align="center"
            label="操作"
            fixed="right"
            width="280"
          >
            <template>

              <el-button
                type="text"
                size="small"
              >查看</el-button>
              <el-button
                type="text"
                size="small"
              >转正</el-button>
              <el-button
                type="text"
                size="small"
              >调岗</el-button>
              <el-button
                type="text"
                size="small"
              >离职</el-button>
              <el-button
                type="text"
                size="small"
              >角色</el-button>
              <el-button
                type="text"
                size="small"
              >删除</el-button>

            </template>
          </el-table-column>
        </el-table>
        <el-row
          type="flex"
          justify="center"
          align="middle"
          style="height: 60px"
        >
          <el-pagination
            layout="prev,pager,next"
            :page-size="page.size"
            :current-page="page.page"
            :total="page.total"
            @current-change="changePage"
          />
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script>
import { getEmployeesList } from '@/api/employees'
export default {
  data() {
    return {
      loading: false,
      list: [],
      page: {
        page: 1,
        size: 10,
        total: 0
      }
    }
  },
  created() {
    this.getEmployeesList()
  },
  methods: {
    changePage(newPage) {
      this.page.page = newPage // 设置页码
      this.getEmployeesList() // 重新拉取数据
    },
    async getEmployeesList() {
      this.loading = true // 数据请求回来之前显示loading
      const { total, rows } = await getEmployeesList(this.page)
      this.page.total = total // 赋值总条数
      this.list = rows // 所有的列表数据
      this.loading = false // 隐藏
    }
  }
}
</script>

<style lang="less" scoped>
</style>
