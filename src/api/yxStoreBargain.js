import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'mall/yxStoreBargain',
    method: 'put',
    data
  })
}

export function del(id) {
  return request({
    url: 'mall/yxStoreBargain/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'mall/yxStoreBargain',
    method: 'put',
    data
  })
}
