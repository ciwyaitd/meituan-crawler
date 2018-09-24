'use strict'

const config = require('config')
const winston = require('winston')

// https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#logseverity
const levels = {
  emergency: 0,
  alert: 1,
  critical: 2,
  error: 3,
  warning: 4,
  notice: 5,
  info: 6,
  debug: 7
}

const colors = {
  emergency: 'red',
  alert: 'red',
  critical: 'red',
  error: 'red',
  warning: 'yellow',
  notice: 'blue',
  info: 'cyan',
  debug: 'magenta'
}
winston.addColors(colors)

const { createLogger, format, transports } = require('winston')
const { combine, timestamp, printf } = format

const myFormat = printf(info => {
  return `${info.timestamp} [${info.level}] ${info.message}`
})

const logger = createLogger({
  levels,
  level: config.logLevel,
  format: combine(
    winston.format.colorize(),
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    myFormat
  ),
  transports: [new transports.Console()]
})

module.exports = logger
