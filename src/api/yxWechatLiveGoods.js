import request from '@/utils/request'

export function add(data) {
  return request({
    url: 'weixin/yxWechatLiveGoods',
    method: 'post',
    data
  })
}

export function del(ids) {
  return request({
    url: 'weixin/yxWechatLiveGoods/',
    method: 'delete',
    data: ids
  })
}

export function edit(data) {
  return request({
    url: 'weixin/yxWechatLiveGoods',
    method: 'put',
    data
  })
}
export function sync(ids) {
  return request({
    url: 'weixin/yxWechatLiveGoods/synchro',
    method: 'post',
    data: ids
  })
}
export default { add, edit, del, sync }
