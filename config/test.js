'use strict'

const env = process.env
const { name } = require('../package.json')

module.exports = {
  app: `testing_${name}`,
  services: {
    redis: {
      db: env.COURIERS_DATA_REDIS_DATABASE_NUMBER,
      host: env.COURIERS_DATA_REDIS_HOST,
      port: env.COURIERS_DATA_REDIS_PORT
    }
  }
}
