import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'mall/yxStoreOrder',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'mall/yxStoreOrder/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'mall/yxStoreOrder',
    method: 'put',
    data
  })
}
export function updateDelivery(data) {
  return request({
    url: 'mall/yxStoreOrder/updateDelivery',
    method: 'put',
    data
  })
}
export function editT(data) {
  return request({
    url: 'mall/yxStoreOrder/check',
    method: 'put',
    data
  })
}

export function refund(data) {
  return request({
    url: 'mall/yxStoreOrder/refund',
    method: 'post',
    data
  })
}

export function editOrder(data) {
  return request({
    url: 'mall/yxStoreOrder/edit',
    method: 'post',
    data
  })
}

export function remark(data) {
  return request({
    url: 'mall/yxStoreOrder/remark',
    method: 'post',
    data
  })
}

export function get() {
  return request({
    url: 'mall/yxExpress',
    method: 'get'
  })
}

export function express(data) {
  return request({
    url: 'mall/yxStoreOrder/express',
    method: 'post',
    data
  })
}

export function getOrderDetail(id) {
  return request({
    url: 'mall/getStoreOrderDetail/' + id,
    method: 'get'
  })
}

export function getNowOrderStatus(id) {
  return request({
    url: 'mall/getNowOrderStatus/' + id,
    method: 'get'
  })
}
