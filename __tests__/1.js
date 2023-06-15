import { test, expect } from 'vitest'
import { maxInstrucctions } from '../1'

test('maxInstrucctions', () => {
  expect(
    maxInstrucctions(['R', 'R', 'U', 'U'])
  ).toBe(4)

  expect(
    maxInstrucctions(['R', 'R', 'U', 'L'])
  ).toBe(3)

  expect(
    maxInstrucctions(['L', 'L', 'L', 'L', 'L'])
  ).toBe(5)

  expect(
    maxInstrucctions(['R', 'U', 'L', 'D'])
  ).toBe(2)

  expect(
    maxInstrucctions(['R', 'U'])
  ).toBe(2)

  expect(
    maxInstrucctions(['L', 'D'])
  ).toBe(2)
})
