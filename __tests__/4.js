import { calculateDaysToPayDebts } from '../4'
import { expect, test } from 'vitest'

// comparación profunda de array no solo del valor toStrictEqual

test('calculateDaysToPayDebts', () => {
  expect(
    calculateDaysToPayDebts([1])
  ).toStrictEqual([1])

  expect(
    calculateDaysToPayDebts([2])
  ).toStrictEqual([2])

  expect(
    calculateDaysToPayDebts([3])
  ).toStrictEqual([2])

  // me prestan 5 dólares
  // 1 día -> 1 dólar
  // 2 día -> 2 dólares
  // 3 día -> 5 dólares pero solo pangando 2 pesos

  expect(
    calculateDaysToPayDebts([5])
  ).toStrictEqual([3])

  // me prestan 10 dólares
  // 1 día -> 1 dólar
  // 2 día -> 2 dólares
  // 3 día -> 4 dólares
  // 4 día -> pagaría 10 pero solo pagando 3

  expect(
    calculateDaysToPayDebts([10])
  ).toStrictEqual([4])

  // me prestan 20 dólares
  // 1 día -> 1 dólar
  // 2 día -> 2 dólares
  // 3 día -> 4 dólares
  // 4 día -> 8 dólares
  // 5 día -> 20 pagaría pero solo pagando 5

  expect(
    calculateDaysToPayDebts([20])
  ).toStrictEqual([5])
})
