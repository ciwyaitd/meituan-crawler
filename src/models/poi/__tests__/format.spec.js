'use strict'

describe('models.poi.format', () => {
  it('should match the snap shot when work as expected', () => {
    const poiPayload = require('../../../test/mock_data/poi_payload.json')
    const format = require('../format')
    const result = format(poiPayload)
    expect(result).toMatchSnapshot()
  })
})
