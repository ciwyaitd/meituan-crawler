'use strict'

const bootstrap = require('./bootstrap')
const crawl = require('./services/crawl')

async function main () {
  await bootstrap()
  await crawl()
}

main()
