import request from '@/utils/request'

export function get(tableName) {
  return request({
    url: 'gen/genConfig/' + tableName,
    method: 'get'
  })
}

export function update(data) {
  return request({
    url: 'gen/genConfig',
    data,
    method: 'put'
  })
}
