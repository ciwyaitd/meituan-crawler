'use strict'

const env = process.env
const { name } = require('../package.json')

module.exports = {
  app: `development_${name}`,
  services: {
    redis: {
      db: env.COURIERS_DATA_REDIS_DATABASE_NUMBER || 0,
      host: env.COURIERS_DATA_REDIS_HOST || '127.0.0.1',
      port: env.COURIERS_DATA_REDIS_PORT || 6379
    }
  }
}
