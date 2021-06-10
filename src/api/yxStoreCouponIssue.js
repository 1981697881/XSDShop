import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'mall/yxStoreCouponIssue',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'mall/yxStoreCouponIssue/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'mall/yxStoreCouponIssue',
    method: 'put',
    data
  })
}
