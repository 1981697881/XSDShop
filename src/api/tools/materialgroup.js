import request from '@/utils/request'

export function getPage(query) {
  return request({
    url: 'mall/materialgroup/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: 'mall/materialgroup',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: 'mall/materialgroup/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: 'mall/materialgroup/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: 'mall/materialgroup',
    method: 'put',
    data: obj
  })
}
