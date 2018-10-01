'use strict'

const data = require('../../test/mock_data/response_data.json')

describe('services.crawl.request', () => {
  it('should match the snap when request as expected', async () => {
    jest.mock('axios')
    const axios = require('axios')
    const mockGet = jest.fn(async () => {
      return {
        status: 200,
        data: data
      }
    })
    axios.create = () => {
      return {
        get: mockGet
      }
    }

    const send = require('../send')
    const response = await send(0, 10)
    expect(mockGet).toHaveBeenCalledTimes(1)
    expect(response).toMatchSnapshot()
  })
})
