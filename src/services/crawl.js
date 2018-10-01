'use strict'

const send = require('./send')
const poiModel = require('../models/poi')
const redis = require('../utils/redis')
const logger = require('../utils/logger')
const EventEmitter = require('events')

class Emitter extends EventEmitter { }

const POIS_REDIS_KEY = 'pois'
const OFFSET_REDIS_KEY = 'offset'
const LIMIT = 20
const emitter = new Emitter()

emitter.on('crawl', () => {
  crawl()
})

async function crawl () {
  const offset = await getOffsetCache()
  const res = await send(offset, LIMIT)
  const { paging, data } = res.data
  const count = paging.count
  if (offset >= count) {
    await setOffsetCache(0)
    logger.info('Finish')
    process.exit(0)
  } else {
    logger.info(`In Process - offset: ${offset}`)
  }

  if (res.status === 200 && data && data.length > 0) {
    const pois = data.map(item => item.poi)

    await Promise.all(pois.map(poi => update(poi)))

    await setOffsetCache(offset + LIMIT)

    emitter.emit('crawl')
  }
}

async function update (poiPayload) {
  const poi = poiModel.format(poiPayload)
  const isMenber = await isPoiSetMember(poi.poi_id)
  if (isMenber) {
    return poiModel.update(poi)
  } else {
    const rows = await poiModel.find({ poi_id: poi.poi_id })
    if (rows.length > 0) {
      await addPoiSetMember(poi.poi_id)
      return poiModel.update(poi)
    }
    const result = await poiModel.create(poi)
    if (result > 0) {
      await addPoiSetMember(poi.poi_id)
    }
  }
}

async function isPoiSetMember (poiId) {
  return redis.sismenberAsync(POIS_REDIS_KEY, String(poiId))
}

async function addPoiSetMember (poiId) {
  await redis.saddAsync(POIS_REDIS_KEY, poiId)
}

async function setOffsetCache (offset) {
  await redis.setAsync(OFFSET_REDIS_KEY, String(offset))
}

async function getOffsetCache () {
  const offset = await redis.getAsync(OFFSET_REDIS_KEY)
  if (offset) {
    return Number(offset)
  }
  return 0
}

module.exports = crawl
