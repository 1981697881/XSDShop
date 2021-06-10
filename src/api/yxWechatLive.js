import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'weixin/yxWechatLive',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'weixin/yxWechatLive/',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'weixin/yxWechatLive',
    method: 'put',
    data
  })
}

export function sync() {
  return request({
    url: 'weixin/yxWechatLive/synchro',
    method: 'get'
  })
}
export default { add, edit, del, sync }
