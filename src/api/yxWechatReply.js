import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'weixin/yxWechatReply',
    method: 'post',
    data
  })
}

export function del(id) {
  return request({
    url: 'weixin/yxWechatReply/' + id,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'weixin/yxWechatReply',
    method: 'put',
    data
  })
}

export function get() {
  return request({
    url: 'weixin/yxWechatReply',
    method: 'get'
  })
}

