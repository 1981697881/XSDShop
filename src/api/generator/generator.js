import request from '@/utils/request'

export function getAllTable() {
  return request({
    url: 'gen/generator/tables/all',
    method: 'get'
  })
}

export function generator(tableName, type) {
  return request({
    url: 'gen/generator/' + tableName + '/' + type,
    method: 'post',
    responseType: type === 2 ? 'blob' : ''
  })
}

export function save(data) {
  return request({
    url: 'gen/generator',
    data,
    method: 'put'
  })
}

export function sync(tables) {
  return request({
    url: 'gen/generator/sync',
    method: 'post',
    data: tables
  })
}

