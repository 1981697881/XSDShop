import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'mall/yxStoreProductReply',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'mall/yxStoreProductReply/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'mall/yxStoreProductReply',
    method: 'put',
    data
  })
}
