'use strict'

const { name } = require('../package.json')

module.exports = {
  app: `test_${name}`,
  logLevel: 'debug',
  services: {
    redis: {
      db: 1,
      host: 'localhost',
      port: 6379
    },
    postgres: {
      user: 'postgres',
      host: 'localhost',
      database: 'test_food_express',
      password: '123456',
      port: 5432
    }
  }
}
