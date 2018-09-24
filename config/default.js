'use strict'

const env = process.env
const { name } = require('../package.json')

module.exports = {
  app: `default_${name}`,
  logLevel: 'debug',
  services: {
    redis: {
      db: env.REDIS_DATABASE,
      host: env.REDIS_HOST,
      port: env.REDIS_PORT
    },
    postgres: {
      user: env.POSTGRES_USER,
      host: env.POSTGRES_HOST,
      database: env.POSTGRES_DATABASE,
      password: env.POSTGRES_PASSWORD,
      port: env.POSTGRES_PORT
    }
  }
}
