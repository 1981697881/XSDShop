import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'mall/yxSystemStoreStaff',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'mall/yxSystemStoreStaff/',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'mall/yxSystemStoreStaff',
    method: 'put',
    data
  })
}

export default { add, edit, del }
