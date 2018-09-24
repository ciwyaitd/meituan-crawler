'use strict'

const axios = require('axios')
const qs = require('querystring')

class Request {
  constructor (host, headers) {
    this.instance = axios.create({
      baseURL: host,
      timeout: 10000,
      headers: headers
    })
  }

  get (url, query) {
    const dest = url + '?' + qs.stringify(query)
    return this.instance.get(dest)
      .then(res => {
        return {
          data: res.data,
          status: res.status
        }
      })
      .catch(err => {
        throw err
      })
  }

  post (url, data) {
    return this.instance.post(url, data)
      .then(res => {
        return {
          data: res.data,
          status: res.status
        }
      })
      .catch(err => {
        throw err
      })
  }
}

module.exports = Request
