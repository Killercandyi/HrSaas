import request from '@/utils/request'

/**
* @description: 获取员工的简单列表
* @param {type}
* @return:
*/
export function getEmployeeSimple() {
  return request({
    url: '/sys/user/simple'
  })
}

/**
* @description: 获取员工的列表数据
* @param {Object} params query参数 分页数据对象
* @return: request 对象
*/
export function getEmployeesList(params) {
  return request({
    url: '/sys/user',
    params
  })
}

/**
* @description: 删除员工
* @param {Number} id
* @return: request 对象
*/
export function removeEmployee(id) {
  return request({
    url: `/sys/user/${id}`,
    method: 'delete'
  })
}

/**
* @description: 新增员工
* @param {Object} data 新增员工数据对象
* @return: request 对象
*/
export function addEmployee(data) {
  return request({
    url: '/sys/user/',
    method: 'post',
    data
  })
}
