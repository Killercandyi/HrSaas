import request from '@/utils/request'

/**
* @description: 获取组织结构数据
* @param {type}
* @return:
*/
export function getDepartments() {
  return request({
    url: '/company/department'
  })
}

/**
* @description: 删除部门
* @param {Number} id 部门 id
* @return:
*/
export function removeDepartments(id) {
  return request({
    url: `/company/department/${id}`,
    method: 'DELETE'
  })
}

/**
* @description: 新增部门
* @param {Object} data
* @return:
*/
export function addDepartments(data) {
  return request({
    url: '/company/department',
    method: 'post',
    data
  })
}
