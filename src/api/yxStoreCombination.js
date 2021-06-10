import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'mall/yxStoreCombination',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'mall/yxStoreCombination/' + id,
    method: 'delete'
  })
}

export function getCombinationInfo(id) {
  return request({
    url: 'mall/yxStoreCombination/info/' + id,
    method: 'get'
  })
}

export function onsale(id, data) {
  return request({
    url: 'mall/yxStoreCombination/onsale/' + id,
    method: 'post',
    data
  })
}
