import request from '@/utils/request'

export function count() {
  return request({
    url: 'mall/visits',
    method: 'post'
  })
}

export function get() {
  return request({
    url: 'mall/visits',
    method: 'get'
  })
}

export function getChartData() {
  return request({
    url: 'mall/visits/chartData',
    method: 'get'
  })
}

export function gett() {
  return request({
    url: 'mall/data/count',
    method: 'get'
  })
}

export function chart() {
  return request({
    url: 'mall/data/chart',
    method: 'get'
  })
}

export function getOrderCount() {
  return request({
    url: 'mall/yxStoreOrder/orderCount',
    method: 'get'
  })
}
