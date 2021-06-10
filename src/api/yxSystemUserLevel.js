import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'mall/yxSystemUserLevel',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'mall/yxSystemUserLevel/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'mall/yxSystemUserLevel',
    method: 'put',
    data
  })
}
