import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'mall/yxSystemGroupData',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'mall/yxSystemGroupData/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'mall/yxSystemGroupData',
    method: 'put',
    data
  })
}

export function get() {
  return request({
    url: 'mall/yxSystemGroupData',
    method: 'get'
  })
}
