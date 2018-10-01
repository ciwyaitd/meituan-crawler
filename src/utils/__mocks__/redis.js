'use strict'

const redis = require('redis-mock')
const { promisify } = require('util')

const client = redis.createClient()

const getAsync = jest.fn(promisify(client.get).bind(client))
const setAsync = jest.fn(promisify(client.set).bind(client))
const keysAsync = jest.fn(promisify(client.keys).bind(client))
const hgetAsync = jest.fn(promisify(client.hget).bind(client))
const hsetAsync = jest.fn(promisify(client.hset).bind(client))
const hkeysAsync = jest.fn(promisify(client.hkeys).bind(client))
const hdelAsync = jest.fn(promisify(client.hdel).bind(client))
const hgetallAsync = jest.fn(promisify(client.hgetall).bind(client))
const delAsync = jest.fn(promisify(client.del).bind(client))
const saddAsync = promisify(client.sadd).bind(client)
const sismenberAsync = promisify(client.sismember).bind(client)

module.exports = {
  client,
  getAsync,
  setAsync,
  keysAsync,
  hgetAsync,
  hsetAsync,
  hkeysAsync,
  hdelAsync,
  hgetallAsync,
  delAsync,
  saddAsync,
  sismenberAsync
}
