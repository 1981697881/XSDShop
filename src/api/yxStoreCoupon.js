import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'mall/yxStoreCoupon',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'mall/yxStoreCoupon/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'mall/yxStoreCoupon',
    method: 'put',
    data
  })
}
