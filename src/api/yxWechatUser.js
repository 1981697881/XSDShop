import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'weixin/yxWechatUser',
    method: 'post',
    data
  })
}

export function del(uid) {
  return request({
    url: 'weixin/yxWechatUser/' + uid,
    method: 'delete'
  })
}

export function edit(data) {
  return request({
    url: 'weixin/yxWechatUser',
    method: 'put',
    data
  })
}
