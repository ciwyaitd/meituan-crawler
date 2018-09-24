'use strict'

describe('utils.postgres', () => {
  beforeEach(() => jest.resetModules())
  it('should throw error when process.env.POSTGRES_USER is undefined', () => {
    expect.assertions(2)
    try {
      require('../postgres')
    } catch (e) {
      expect(e).toBeInstanceOf(Error)
      expect(e).toMatchSnapshot()
    }
  })

  it('should throw error when process.env.POSTGRES_PASSWORD is undefined', () => {
    process.env.POSTGRES_USER = 'postgres'
    expect.assertions(2)
    try {
      require('../postgres')
    } catch (e) {
      expect(e).toBeInstanceOf(Error)
      expect(e).toMatchSnapshot()
    }
  })

  it('should throw error when process.env.POSTGRES_HOST is undefined', () => {
    process.env.POSTGRES_USER = 'postgres'
    process.env.POSTGRES_PASSWORD = '123456'
    expect.assertions(2)
    try {
      require('../postgres')
    } catch (e) {
      expect(e).toBeInstanceOf(Error)
      expect(e).toMatchSnapshot()
    }
  })

  it('should throw error when process.env.POSTGRES_PORT is undefined', () => {
    process.env.POSTGRES_USER = 'postgres'
    process.env.POSTGRES_PASSWORD = '123456'
    process.env.POSTGRES_HOST = 'localhost'
    expect.assertions(2)
    try {
      require('../postgres')
    } catch (e) {
      expect(e).toBeInstanceOf(Error)
      expect(e).toMatchSnapshot()
    }
  })

  it('should throw error when process.env.POSTGRES_DATABASE is undefined', () => {
    process.env.POSTGRES_USER = 'postgres'
    process.env.POSTGRES_PASSWORD = '123456'
    process.env.POSTGRES_HOST = 'localhost'
    process.env.POSTGRES_PORT = 5432
    expect.assertions(2)
    try {
      require('../postgres')
    } catch (e) {
      expect(e).toBeInstanceOf(Error)
      expect(e).toMatchSnapshot()
    }
  })
})
