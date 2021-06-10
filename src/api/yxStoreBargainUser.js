import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'mall/yxStoreBargainUser',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'mall/yxStoreBargainUser/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'mall/yxStoreBargainUser',
    method: 'put',
    data
  })
}
