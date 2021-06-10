import request from '@/utils/request'

export function getAllJob(deptId) {
  const params = {
    deptId,
    page: 0,
    size: 9999
  }
  return request({
    url: 'system/job',
    method: 'get',
    params
  })
}

export function add(data) {
  return request({
    url: 'system/job',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'system/job',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'system/job',
    method: 'put',
    data
  })
}

export default { add, edit, del }
