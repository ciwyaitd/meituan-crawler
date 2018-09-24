'use strict'

const { Client } = require('pg')
const config = require('config')

const client = new Client({
  user: config.services.postgres.user,
  host: config.services.postgres.host,
  database: config.services.postgres.database,
  password: config.services.postgres.password,
  port: config.services.postgres.port
})

client.connect()

module.exports = client
