import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'mall/yxStoreSeckill',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'mall/yxStoreSeckill/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'mall/yxStoreSeckill',
    method: 'put',
    data
  })
}

export function getSecKillInfo(id) {
  return request({
    url: 'mall/yxStoreSecKill/info/' + id,
    method: 'get'
  })
}
