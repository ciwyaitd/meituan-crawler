'use strict'

const { client: pg } = require('../utils/postgres')
const logger = require('../utils/logger')
const config = require('config')

async function truncate (table) {
  const text = `
    TRUNCATE ${table}
  `

  try {
    await pg.query(text)
    logger.info(`[test] Truncate table: ${config.services.postgres.database} - ${table}`)
  } catch (err) {
    logger.error(`[test] Truncate table: ${config.services.postgres.database} - ${table} with err: ${err.message}`)
  }
}

module.exports = truncate
