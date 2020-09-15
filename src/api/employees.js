import request from '@/utils/request'

/**
* @description: 获取员工的简单裂变
* @param {type}
* @return:
*/
export function getEmployeeSimple() {
  return request({
    url: '/sys/user/simple'
  })
}
