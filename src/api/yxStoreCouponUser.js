import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'mall/yxStoreCouponUser',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'mall/yxStoreCouponUser/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'mall/yxStoreCouponUser',
    method: 'put',
    data
  })
}
