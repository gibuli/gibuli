import request from '@/utils/request'

export function login(user_name, password) {
  return request({
    url: '/h/login',
    method: 'post',
    data: {
      user_name,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    // params: { token }
  })
}

export function logout() {
  return request({
    url: '/h/logout',
    method: 'get'
  })
}
