'use strict'

const fs = require('fs')
const path = require('path')

/**
 * transform sql file to be string
 * @param {*} filename
 */
function exportSQL (filename) {
  const dest = path.resolve(__dirname, filename)
  const sql = fs.readFileSync(dest, 'utf8')
  return sql
}

module.exports = {
  createDatabase: exportSQL('create_database.sql'),
  createTestingDatabase: exportSQL('create_testing_database.sql'),
  createTable: exportSQL('create_table.sql')
}
