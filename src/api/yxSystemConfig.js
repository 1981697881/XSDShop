import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'mall/yxSystemConfig',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'mall/yxSystemConfig/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'mall/yxSystemConfig',
    method: 'put',
    data
  })
}

export function get() {
  return request({
    url: 'mall/yxSystemConfig?size=500',
    method: 'get'
  })
}

