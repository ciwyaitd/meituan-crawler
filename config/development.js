'use strict'

const env = process.env
const { name } = require('../package.json')

module.exports = {
  app: `development_${name}`,
  logLevel: 'debug',
  services: {
    redis: {
      db: env.REDIS_DATABASE || 0,
      host: env.REDIS_HOST || 'localhost',
      port: env.REDIS_PORT || 6379
    },
    postgres: {
      user: env.POSTGRES_USER || 'postgres',
      host: env.POSTGRES_HOST || 'localhost',
      database: env.POSTGRES_DATABASE || 'food_express',
      password: env.POSTGRES_PASSWORD || '123456',
      port: env.POSTGRES_PORT || 5432
    }
  }
}
