'use strict'

const Request = require('../utils/request')

const host = 'http://api.meituan.com/'

const path = '/group/v4/deal/select/city/30/cate/1'

const headers = {
  'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15G77 MicroMessenger/6.7.2 NetType/WIFI Language/en'
}

const request = new Request(host, headers)

/**
 *
 * @param {Number} offset
 * @param {Number} limit
 */
async function send (offset, limit) {
  const query = {
    sort: 'solds',
    hasGroup: true,
    mpt_cate1: 1,
    offset: offset,
    limit: limit
  }

  const res = await request.get(path, query)

  return res
}

module.exports = send
