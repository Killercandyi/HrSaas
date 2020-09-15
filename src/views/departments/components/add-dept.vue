<template>
  <!-- 新增部门的弹窗 -->
  <el-dialog title="新增部门" :visible="showDialog">
    <el-form label-width="120px" :model="formData" :rules="rules">
      <el-form-item label="部门名称" prop="name">
        <el-input v-model="formData.name" style="width:80%" placeholder="1-50个字符" />
      </el-form-item>
      <el-form-item label="部门编码" prop="code">
        <el-input v-model="formData.code" style="width:80%" placeholder="1-50个字符" />
      </el-form-item>
      <el-form-item label="部门负责人" prop="manager">
        <el-select v-model="formData.manager" style="width:80%" placeholder="请选择" />
      </el-form-item>
      <el-form-item label="部门介绍" prop="introduce">
        <el-input v-model="formData.introduce" style="width:80%" placeholder="1-300个字符" type="textarea" :rows="3" />
      </el-form-item>
    </el-form>
    <el-row slot="footer" type="flex" justify="center">
      <el-col :span="6">
        <el-button type="primary" size="small" @click="btnOK">确定</el-button>
        <el-button size="small">取消</el-button>
      </el-col>
    </el-row>
  </el-dialog>
</template>

<script>
import { getDepartments } from '@/api/departments'
export default {
  props: {
    showDialog: {
      type: Boolean,
      default: false
    },
    treeNode: {
      type: Object,
      default: null
    }
  },
  data() {
    // 部门名称校验重复
    const checkNameRepeat = async(rule, value, callback) => {
      // 先获取最新的组合结构数据,以便不会出错 以最新的数据为准
      const { depts } = await getDepartments()
      // depts 是获取到所有部门的数据,但是我们不需要全部的数据
      console.log(this)
      const isRepeat = depts.filter(item => item.pid === this.treeNode.id).some(item => item.name === value)
      // 得出结果 callback
      isRepeat ? callback(new Error(`当前部门中已经存在${value}的部门了`)) : callback()
    }

    // 校验部门编码是否重复
    const checkCodeRepeat = async(rule, value, callback) => {
      // 一样的先要获取最先的组织架构数据
      const { depts } = await getDepartments()
      // 这里会加一个value不能为空,因为有些部门有可能没有code
      const isRepeat = depts.some(item => item.code === value && value)
      isRepeat ? callback(new Error(`部门编码重复`)) : callback()
    }

    return {
      formData: {
        name: '', // 部门名称
        code: '', // 部门编码
        manager: '', // 部门管理员
        introduce: '' // 部门介绍
      },
      // 校验规则
      rules: {
        name: [{ required: true, message: '部门名称不能为空', trigger: 'blur' }, { min: 1, max: 50, message: '部门名称要求输入1-50个字符', trigger: 'blur' }, { validator: checkNameRepeat, trigger: 'blur' }],

        code: [{ required: true, message: '部门编码不能为空', trigger: 'blur' }, { min: 1, max: 50, message: '部门编码要求输入1-50个字符', trigger: 'blur' }, { validator: checkCodeRepeat, trigger: 'blur' }],

        manager: [{ required: true, message: '部门负责人不能为空', trigger: 'blur' }],

        introduce: [{ required: true, message: '部门介绍不能为空', trigger: 'blur' }, { min: 1, max: 5, message: '部门介绍要求输入1-300个字符' }]
      }
    }
  },

  methods: {
    btnOK() {
      console.log(this.treeNode)
      console.log(this.showDialog)
    }
  }
}
</script>

<style>

</style>
