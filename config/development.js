'use strict'

const { name } = require('../package.json')

module.exports = {
  app: `dev_${name}`,
  logLevel: 'debug',
  services: {
    redis: {
      db: 0,
      host: 'localhost',
      port: 6379
    },
    postgres: {
      user: 'postgres',
      host: 'localhost',
      database: 'food_deliver_info',
      password: '123456',
      port: 5432
    }
  }
}
