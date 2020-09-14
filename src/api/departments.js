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
