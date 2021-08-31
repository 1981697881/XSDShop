import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'mall/getPojectOdForm',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'mall/getPojectOdForm/',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'mall/getPojectOdForm',
    method: 'put',
    data
  })
}

export default { add, edit, del }
