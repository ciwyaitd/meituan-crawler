'use strict'

const redis = require('./utils/redis')
const postgres = require('./utils/postgres')

async function bootstrap () {
  await redis.getAsync('test')
  console.info('[REDIS] connected.')

  await postgres.query('SELECT 1')
  console.info('[POSTGRES] connected.')
}

module.exports = bootstrap
