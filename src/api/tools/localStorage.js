import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'system/localStorage',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'system/localStorage/',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'system/localStorage',
    method: 'put',
    data
  })
}

export default { add, edit, del }
