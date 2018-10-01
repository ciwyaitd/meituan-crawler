'use strict'

const { client: pg } = require('../../utils/postgres')
const tables = require('../../constants/tables')
const logger = require('../../utils/logger')

async function find (query) {
  const text = `
    SELECT * FROM 
    ${tables.MEITUAN}
    WHERE poi_id = $1
    `
  const values = [
    query.poi_id
  ]

  try {
    const result = await pg.query(text, values)
    logger.info(`[SQL] Found data - poi_id: ${query.poi_id} - rowCount: ${result.rowCount}`)
    return result.rows
  } catch (err) {
    logger.error(`[SQL] Found data - poi_id: ${query.poi_id} with err: ${err.message}`)
    return []
  }
}

module.exports = find
