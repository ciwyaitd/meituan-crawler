'use strict'

const { Client } = require('pg')
const config = require('config')
const logger = require('../utils/logger')

if (!config.services.postgres.user) {
  throw new Error('Please set environment variable POSTGRES_USER')
}

if (!config.services.postgres.password) {
  throw new Error('Please set environment variable POSTGRES_PASSWORD')
}

if (!config.services.postgres.host) {
  throw new Error('Please set environment variable POSTGRES_HOST')
}

if (!config.services.postgres.port) {
  throw new Error('Please set environment variable POSTGRES_PORT')
}

if (!config.services.postgres.database) {
  throw new Error('Please set environment variable POSTGRES_DATABASE')
}

const client = new Client({
  user: config.services.postgres.user,
  password: config.services.postgres.password,
  host: config.services.postgres.host,
  port: config.services.postgres.port,
  database: config.services.postgres.database
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
