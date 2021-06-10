import request from '@/utils/request'

export function getErrDetail(id) {
  return request({
    url: 'mall/logs/error/' + id,
    method: 'get'
  })
}

export function delAllError() {
  return request({
    url: 'mall/logs/del/error',
    method: 'delete'
  })
}

export function delAllInfo() {
  return request({
    url: 'mall/logs/del/info',
    method: 'delete'
  })
}
