import request from '@/utils/request'

export function del(ids) {
  return request({
    url: 'mall/pictures',
    method: 'delete',
    data: ids
  })
}

export function sync() {
  return request({
    url: 'mall/pictures/synchronize',
    method: 'post'
  })
}

export default { del, sync }
