'use strict'

const truncate = require('../../../test/truncate_table')
const TABLES = require('../../../constants/tables')

describe('models.poi.find()', () => {
  it('should return a not empty Array when create date successfully', async () => {
    const format = require('../format')
    const poiPayload = require('../../../test/mock_data/poi_payload.json')
    const data = format(poiPayload)

    const create = require('../create')
    await create(data)

    const find = require('../find')
    const { poi_id: poiId } = data
    const result = await find({ poi_id: poiId })
    expect(result).toBeInstanceOf(Array)
    expect(result.length).toBeGreaterThanOrEqual(1)
    await truncate(TABLES.MEITUAN)
  })

  it('should return an empty Array when create date failed', async () => {
    const format = require('../format')
    const poiPayload = require('../../../test/mock_data/poi_payload.json')
    const data = format(poiPayload)

    const find = require('../find')
    const { poi_id: poiId } = data
    const result = await find({ poi_id: poiId })
    expect(result).toBeInstanceOf(Array)
    expect(result.length).toEqual(0)
    await truncate(TABLES.MEITUAN)
  })
})
