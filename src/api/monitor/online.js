import request from '@/utils/request'

export function del(keys) {
  return request({
    url: 'auth/online',
    method: 'delete',
    data: keys
  })
}

export function delT(keys) {
  return request({
    url: 'system/online/delete',
    method: 'post',
    data: keys
  })
}

