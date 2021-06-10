import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'mall/yxUser',
    method: 'post',
    data
  })
}

export function del(uid) {
  return request({
    url: 'mall/yxUser/' + uid,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'mall/yxUser',
    method: 'put',
    data
  })
}

export function onStatus(id, data) {
  return request({
    url: 'mall/yxUser/onStatus/' + id,
    method: 'post',
    data
  })
}

export function editp(data) {
  return request({
    url: 'mall/yxUser/money',
    method: 'post',
    data
  })
}

export function getSpread(data) {
  return request({
    url: 'mall/yxUser/spread',
    method: 'post',
    data
  })
}
