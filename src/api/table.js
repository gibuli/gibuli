import request from '@/utils/request'

export function getMerchantList(params) {
  return request({
    url: '/h/merchant/list',
    method: 'get',
    params
  })
}

export function addMerchant(data) {
  return request({
    url: '/h/merchant/add',
    method: 'post',
    data
  })
}

export function modifyMerchant(data) {
  return request({
    url: '/h/merchant/modify',
    method: 'post',
    data
  })
}

export function getMerchantDetail(params) {
  return request({
    url: '/h/merchant/detail',
    method: 'get',
    params
  })
}


export function getPriceList(params) {
  return request({
    url: '/h/wash/price/list',
    method: 'get',
    params
  })
}

export function addPrice(data) {
  return request({
    url: '/h/wash/price/add',
    method: 'post',
    data
  })
}

export function modifyPrice(data) {
  return request({
    url: '/h/wash/price/modify',
    method: 'post',
    data
  })
}

export function getOrderList(params) {
  return request({
    url: '/h/order/list',
    method: 'get',
    params
  })
}

export function cancelOrder(data) {
  return request({
    url: '/h/order/cancel',
    method: 'post',
    data
  })
}

export function getRechargeList(params) {
  return request({
    url: '/h/recharge/list',
    method: 'get',
    params
  })
}

export function addRecharge(data) {
  return request({
    url: '/h/recharge/add',
    method: 'post',
    data
  })
}

export function modifyRecharge(data) {
  return request({
    url: '/h/recharge/modify',
    method: 'post',
    data
  })
}

