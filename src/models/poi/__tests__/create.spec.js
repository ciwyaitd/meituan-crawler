'use strict'

const truncate = require('../../../test/truncate_table')
const TABLES = require('../../../constants/tables')

describe('models.poi.create()', () => {
  it('should return 1 when create date successfully', async () => {
    const format = require('../format')
    const poiPayload = require('../../../test/mock_data/poi_payload.json')
    const data = format(poiPayload)

    const create = require('../create')
    const result = await create(data)
    expect(result).toBe(1)
    await truncate(TABLES.MEITUAN)
  })

  it('should return 0 when create date failed', async () => {
    const format = require('../format')
    const poiPayload = require('../../../test/mock_data/poi_payload.json')
    const data = format(poiPayload)

    const create = require('../create')
    await create(data)
    const result = await create(data)
    expect(result).toBe(0)
    await truncate(TABLES.MEITUAN)
  })
})
