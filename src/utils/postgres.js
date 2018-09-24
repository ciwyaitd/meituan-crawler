'use strict'

const { Client } = require('pg')
const config = require('config')
const logger = require('../utils/logger')

const client = new Client({
  user: config.services.postgres.user,
  host: config.services.postgres.host,
  database: config.services.postgres.database,
  password: config.services.postgres.password,
  port: config.services.postgres.port
})

client.connect()

client.on('error', (err) => {
  logger.error(`[postgres] Postgres has some error: ${err.stack}`)
})

client.on('end', () => {
  logger.info('[postgres] Postgres is end.')
  client.connect()
})

async function testConnect () {
  await client.query('SELECT 1')
  logger.info('[postgres] Postgres is ready.')
}

module.exports = {
  client,
  testConnect
}
