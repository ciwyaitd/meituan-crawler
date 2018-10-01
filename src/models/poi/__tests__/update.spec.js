'use strict'

const truncate = require('../../../test/truncate_table')
const TABLES = require('../../../constants/tables')

describe('models.poi.update()', () => {
  it('should return 1 when update date successfully', async () => {
    const format = require('../format')
    const poiPayload = require('../../../test/mock_data/poi_payload.json')
    const data = format(poiPayload)

    const create = require('../create')
    await create(data)

    const update = require('../update')
    const result = await update(data)
    expect(result).toBe(1)
    await truncate(TABLES.MEITUAN)
  })

  it('should return 0 when update date failed', async () => {
    const format = require('../format')
    const poiPayload = require('../../../test/mock_data/poi_payload.json')
    const data = format(poiPayload)

    const update = require('../update')
    const result = await update(data)
    expect(result).toBe(0)
    await truncate(TABLES.MEITUAN)
  })
})
