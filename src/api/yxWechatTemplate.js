import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'weixin/yxWechatTemplate',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'weixin/yxWechatTemplate/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'weixin/yxWechatTemplate',
    method: 'put',
    data
  })
}

export function get() {
  return request({
    url: 'weixin/yxWechatTemplate',
    method: 'get'
  })
}

