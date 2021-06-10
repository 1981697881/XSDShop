import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'mall/yxSystemUserTask',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'mall/yxSystemUserTask/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'mall/yxSystemUserTask',
    method: 'put',
    data
  })
}
