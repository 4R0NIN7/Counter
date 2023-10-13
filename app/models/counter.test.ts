import { ICounter } from '@models/counter.types'
import { describe, it, beforeEach, expect } from '@jest/globals'
import { Counter } from '@models/counter'
import { when } from 'mobx'

describe('Counter', () => {
  let counter: ICounter

  beforeEach(() => {
    counter = Counter.create({})
  })

  it('Defines properties and defaults', () => {
    expect(counter.value).toEqual(0)
    expect(counter.canIncrement).toBeTruthy()
    expect(counter.canDecrement).toBeFalsy()
  })

  it('Increment value', () => {
    counter.increment(false)
    expect(counter.value).toEqual(1)
    expect(counter.canIncrement).toBeTruthy()
    expect(counter.canDecrement).toBeTruthy()
  })

  it('Decrement value', () => {
    counter.increment(false)
    counter.increment(false)
    counter.decrement(false)
    expect(counter.value).toEqual(1)
    expect(counter.canIncrement).toBeTruthy()
    expect(counter.canDecrement).toBeTruthy()
  })

  it('Upper bounds', () => {
    counter = Counter.create({ value: 99 })
    counter.increment(false)
    expect(counter.value).toEqual(100)
    expect(counter.canIncrement).toBeFalsy()
    expect(counter.canDecrement).toBeTruthy()
  })

  it('First time test', async () => {
    counter.increment(true)
    await when(() => counter.value === 1)
    expect(counter.value).toEqual(1)
    expect(counter.canIncrement).toBeTruthy()
    expect(counter.canDecrement).toBeTruthy()
  })
})
