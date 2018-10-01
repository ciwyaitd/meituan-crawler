'use strict'

const { createDatabase, createTestingDatabase, createTable } = require('./sqls')
const { Client } = require('pg')
const config = require('config')
const logger = require('../src/utils/logger')

const pgConfig = {
  user: config.services.postgres.user,
  password: config.services.postgres.password,
  host: config.services.postgres.host,
  port: config.services.postgres.port
}

async function exec () {
  let client = new Client({
    ...pgConfig,
    database: 'postgres'
  })
  client.connect()

  logger.info('-- Develpoment Environment --')
  // create database
  await client.query(createDatabase)
    .then(() => logger.info('-- created database --'))
    .catch(err => logger.error(err.message))

  // switch database
  client = new Client({
    ...pgConfig,
    database: config.services.postgres.database
  })
  client.connect()

  // create table
  await client.query(createTable)
    .then(() => logger.info('-- created tables --'))
    .catch(err => logger.error(err.message))

  logger.info('-- Testing Environment --')
  // create database
  await client.query(createTestingDatabase)
    .then(() => logger.info('-- created testing database --'))
    .catch(err => logger.error(err.message))

  // switch database
  client = new Client({
    ...pgConfig,
    database: config.services.postgres.test_database
  })
  client.connect()

  // create table
  await client.query(createTable)
    .then(() => logger.info('-- created tables --'))
    .catch(err => logger.error(err.message))

  logger.info('Finish')
  process.exit(0)
}

exec()
