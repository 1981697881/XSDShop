import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'mall/yxStoreOrderStatus',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'mall/yxStoreOrderStatus/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'mall/yxStoreOrderStatus',
    method: 'put',
    data
  })
}
