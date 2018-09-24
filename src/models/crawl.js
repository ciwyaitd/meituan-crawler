'use strict'

const Request = require('../utils/request')

const host = 'http://api.meituan.com/'

const path = '/group/v4/deal/select/city/30/cate/1'

const query = {
  sort: 'solds',
  hasGroup: true,
  mpt_cate1: 1,
  offset: 0,
  limit: 10
}

const request = new Request(host, null)

// async function crawl () {
//   return request.get(path, query)
// }

// module.exports = crawl

request.get(path, query)
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.error(err)
  })
