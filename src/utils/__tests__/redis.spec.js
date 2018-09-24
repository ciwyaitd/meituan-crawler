'use strict'

describe('utils.redis', () => {
  beforeEach(() => jest.resetModules())
  it('should throw error when process.env.COURIERS_DATA_REDIS_DATABASE_NUMBER is undefined', () => {
    expect.assertions(2)
    try {
      require('../redis')
    } catch (e) {
      expect(e).toBeInstanceOf(Error)
      expect(e.message).toEqual('Please set environment variable COURIERS_DATA_REDIS_DATABASE_NUMBER')
    }
  })

  it('should throw error when process.env.COURIERS_DATA_REDIS_HOST is undefined', () => {
    process.env.COURIERS_DATA_REDIS_DATABASE_NUMBER = 0
    expect.assertions(2)
    try {
      require('../redis')
    } catch (e) {
      expect(e).toBeInstanceOf(Error)
      expect(e.message).toEqual('Please set environment variable COURIERS_DATA_REDIS_HOST')
    }
  })

  it('should throw error when process.env.COURIERS_DATA_REDIS_PORT is undefined', () => {
    process.env.COURIERS_DATA_REDIS_DATABASE_NUMBER = 0
    process.env.COURIERS_DATA_REDIS_HOST = '127.0.0.1'
    expect.assertions(2)
    try {
      require('../redis')
    } catch (e) {
      expect(e).toBeInstanceOf(Error)
      expect(e.message).toEqual('Please set environment variable COURIERS_DATA_REDIS_PORT')
    }
  })
})
