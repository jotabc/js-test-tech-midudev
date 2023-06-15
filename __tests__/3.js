import { test, expect } from 'vitest'
import { maxTaskDuration } from '../3'

test('maxTaskDuration', () => {
  expect(
    maxTaskDuration([[5, 2, 1]])
  ).toStrictEqual([6])

  expect(
    maxTaskDuration([[7, 3, 2]])
  ).toStrictEqual([9])

  expect(
    maxTaskDuration([[4, 1, 1], [6, 2, 2]])
  ).toStrictEqual([1, 2])
})

// same array
// 4 tareas
// 1 horas
// 1 minimo => 4h - 3h = 1h

// 6 tareas
// 2 horas
// 2 minimo => 12h - 10h = 2h
