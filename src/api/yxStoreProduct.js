import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'mall/yxStoreProduct/addOrSave',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'mall/yxStoreProduct/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'mall/yxStoreProduct',
    method: 'put',
    data
  })
}

export function onsale(id, data) {
  return request({
    url: 'mall/yxStoreProduct/onsale/' + id,
    method: 'post',
    data
  })
}

export function recovery(id) {
  return request({
    url: 'mall/yxStoreProduct/recovery/' + id,
    method: 'delete'
  })
}

export function isFormatAttr(id, data) {
  return request({
    url: 'mall/yxStoreProduct/isFormatAttr/' + id,
    method: 'post',
    data
  })
}

export function isFormatAttrForActivity(id, data) {
  return request({
    url: 'mall/yxStoreProduct/isFormatAttrForActivity/' + id,
    method: 'post',
    data
  })
}
export function setAttr(id, data) {
  return request({
    url: 'mall/yxStoreProduct/setAttr/' + id,
    method: 'post',
    data
  })
}

export function clearAttr(id) {
  return request({
    url: 'mall/yxStoreProduct/clearAttr/' + id,
    method: 'post'
  })
}

export function getAttr(id) {
  return request({
    url: 'mall/yxStoreProduct/attr/' + id,
    method: 'get'
  })
}

export function getInfo(id) {
  return request({
    url: 'mall/yxStoreProduct/info/' + id,
    method: 'get'
  })
}
