'use strict'

describe('utils.redis', () => {
  beforeAll(() => {
    process.env.NODE_ENV = 'production'
  })
  beforeEach(() => jest.resetModules())

  it('should throw error when process.env.REDIS_DATABASE is undefined', () => {
    expect.assertions(2)
    try {
      require('../redis')
    } catch (e) {
      expect(e).toBeInstanceOf(Error)
      expect(e).toMatchSnapshot()
    }
  })

  it('should throw error when process.env.REDIS_HOST is undefined', () => {
    process.env.REDIS_DATABASE = 0
    expect.assertions(2)
    try {
      require('../redis')
    } catch (e) {
      expect(e).toBeInstanceOf(Error)
      expect(e).toMatchSnapshot()
    }
  })

  it('should throw error when process.env.REDIS_PORT is undefined', () => {
    process.env.REDIS_DATABASE = 0
    process.env.REDIS_HOST = '127.0.0.1'
    expect.assertions(2)
    try {
      require('../redis')
    } catch (e) {
      expect(e).toBeInstanceOf(Error)
      expect(e).toMatchSnapshot()
    }
  })
})
