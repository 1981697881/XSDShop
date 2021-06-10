import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'mall/yxStorePink',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'mall/yxStorePink/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'mall/yxStorePink',
    method: 'put',
    data
  })
}
