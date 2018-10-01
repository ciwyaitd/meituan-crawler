'use strict'

const { name } = require('../package.json')
const development = require('./development')
const test = require('./test')

module.exports = {
  app: `default_${name}`,
  logLevel: 'debug',
  services: {
    postgres: {
      user: 'postgres',
      host: 'localhost',
      database: development.services.postgres.database,
      test_database: test.services.postgres.database,
      password: '123456',
      port: 5432
    }
  }
}
