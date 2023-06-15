import { test, expect } from 'vitest'
import {
  countUniqueNumbersFor,
  countUniqueNumbersForEach,
  countUniqueNumbersSet,
  countUniqueNumbersReduce
} from '../5'

test('countUniqueNumbers', () => {
  expect(
    countUniqueNumbersForEach([1, 2, 2, 1])
  ).toBe(2)

  expect(
    countUniqueNumbersFor([1, 2, 2, 1])
  ).toBe(2)

  expect(
    countUniqueNumbersSet([1, 2, 2, 1])
  ).toBe(2)

  expect(
    countUniqueNumbersReduce([1, 2, 2, 1])
  ).toBe(2)
})
