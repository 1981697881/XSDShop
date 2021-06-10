import request from '@/utils/request'

export function add(data, id) {
  return request({
    url: `mall/yxStoreProductRule/save/${id}`,
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'mall/yxStoreProductRule/',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'mall/yxStoreProductRule',
    method: 'put',
    data
  })
}

export function info(id) {
  return request({
    url: `mall/yxStoreProductRule/rule/${id}`,
    method: 'get'
  })
}

export default { add, edit, del, info }
