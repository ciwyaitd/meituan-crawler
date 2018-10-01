'use strict'

const { name } = require('../package.json')

module.exports = {
  app: `default_${name}`,
  logLevel: 'debug',
  services: {
    postgres: {
      user: 'postgres',
      host: 'localhost',
      database: 'food_express',
      testing_database: 'test_food_express',
      password: '123456',
      port: 5432
    }
  }
}
