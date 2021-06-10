import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'weixin/YxWechatMenu',
    method: 'post',
    data
  })
}

export function del(key) {
  return request({
    url: 'weixin/YxWechatMenu/' + key,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'weixin/YxWechatMenu',
    method: 'put',
    data
  })
}

export function get() {
  return request({
    url: 'weixin/YxWechatMenu',
    method: 'get'
  })
}
