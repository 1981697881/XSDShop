import request from '@/utils/request'

export function get() {
  return request({
    url: 'system/qiNiuContent/config',
    method: 'get'
  })
}

export function update(data) {
  return request({
    url: 'system/qiNiuContent/config',
    data,
    method: 'put'
  })
}

export function download(id) {
  return request({
    url: 'system/qiNiuContent/download/' + id,
    method: 'get'
  })
}

export function sync() {
  return request({
    url: 'system/qiNiuContent/synchronize',
    method: 'post'
  })
}

export function del(ids) {
  return request({
    url: 'system/qiNiuContent',
    method: 'delete',
    data: ids
  })
}

export default { del, download, sync }
