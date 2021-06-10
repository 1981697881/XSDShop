import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'mall/yxExpress',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'mall/yxExpress/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'mall/yxExpress',
    method: 'put',
    data
  })
}

