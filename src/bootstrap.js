'use strict'

const redis = require('./utils/redis')
const postgres = require('./utils/postgres')

async function bootstrap () {
  await redis.getAsync('test')

  await postgres.testConnect()
}

module.exports = bootstrap
