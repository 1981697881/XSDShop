import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'mall/yxStoreCouponIssue',
    method: 'post',
    data
  })
}
//指定人员优惠券
export function couponIssueGetLimit(data) {
  return request({
    url: 'mall/yxStoreCouponIssueGetLimit',
    method: 'post',
    data
  })
}
//指定人员已发送优惠券
export function getCouponIssueGetLimit(data) {
  return request({
    url: 'mall/getYxStoreCouponIssueGetLimit',
    method: 'get',
    params: data
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
