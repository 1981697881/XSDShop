import request from '@/utils/request'

export function resetEmail(data) {
  return request({
    url: 'mall/code/resetEmail',
    method: 'post',
    data
  })
}

export function updatePass(pass) {
  return request({
    url: 'mall/users/updatePass/' + pass,
    method: 'get'
  })
}
