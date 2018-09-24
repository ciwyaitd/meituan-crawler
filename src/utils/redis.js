'use strict'

const redis = require('redis')
const config = require('config')
const { promisify } = require('util')
const logger = require('../utils/logger')

const redisConfig = {
  db: config.services.redis.db,
  host: config.services.redis.host,
  port: config.services.redis.port
}

if (config.services.redis.db === undefined || config.services.redis.db === null) {
  throw new Error('Please set environment variable COURIERS_DATA_REDIS_DATABASE_NUMBER')
}

if (config.services.redis.host === undefined || config.services.redis.host === null) {
  throw new Error('Please set environment variable COURIERS_DATA_REDIS_HOST')
}

if (config.services.redis.port === undefined || config.services.redis.port === null) {
  throw new Error('Please set environment variable COURIERS_DATA_REDIS_PORT')
}

let client = redis.createClient(redisConfig)

client.on('connect', () => {
  logger.info('[redis] Connect to redis.')
})

client.on('reconnecting', () => {
  logger.info('[redis] Reconnecting to redis.')
})

client.on('error', (err) => {
  logger.error(`[redis] Redis has some error: ${err.stack}`)
})

client.on('ready', () => {
  logger.info('[redis] Redis is ready.')
})

client.on('end', () => {
  logger.info('[redis] Redis is end.')
  client = redis.createClient(redisConfig)
})

const getAsync = promisify(client.get).bind(client)
const setAsync = promisify(client.set).bind(client)
const keysAsync = promisify(client.keys).bind(client)
const hgetAsync = promisify(client.hget).bind(client)
const hsetAsync = promisify(client.hset).bind(client)
const hkeysAsync = promisify(client.hkeys).bind(client)
const hgetallAsync = promisify(client.hgetall).bind(client)
const hdelAsync = promisify(client.hdel).bind(client)
const delAsync = promisify(client.del).bind(client)

module.exports = {
  client,
  getAsync,
  setAsync,
  keysAsync,
  hgetAsync,
  hsetAsync,
  hkeysAsync,
  hgetallAsync,
  hdelAsync,
  delAsync
}
