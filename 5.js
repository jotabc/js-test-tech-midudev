/*
A tu equipo de desarrollo el cliente les ha pedido realizar un algorítmo
de indexación y optimización de almacenamiento en el proceso de inventario

Sin embargo el equipo tiene problemas cn un método que no saben como
realizar de forma óptima y te han pedido ayuda para resolverlo.

siguiendo el Principio de responsabilidad única (SRP), vas a construir una
función que tiene como única responsabilidad calcular la cantidad de
números diff dentro de una lista dada.

Funcion descriptiva
La función recibe la lista de tareas, y debe devolver la cantidad de
valores único que existen

restrincciones
el arreglo puede tener más de 100 mil elementos y y cada elemento
puede ser de 0 hast mil millones
*/

// usando SET. tercera más rápida puede ser que en algún caso la 2 más rápida.
export function countUniqueNumbersSet (numbers) {
  // con el set no podemos tener valores duplicados
  const uniqueNumbers = new Set(numbers)
  return uniqueNumbers.size
}

// 1era mas rápida para arrays pequeños y 2da para arrays grandes
export function countUniqueNumbersForEach (numbers) {
  const uniqueNumbers = {}
  numbers.forEach(number => {
    uniqueNumbers[number] = true
  })
  return Object.keys(uniqueNumbers).length
}

// 1era más rápida para arrays grandes y 2da para arrays pequeños
export function countUniqueNumbersFor (numbers) {
  const uniqueNumbers = {}

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i]
    uniqueNumbers[number] = true
  }

  return Object.keys(uniqueNumbers).length
}

// lmás lenta de lejos
export function countUniqueNumbersReduce (numbers) {
  const uniqueNumbers = numbers.reduce((acc, current) => {
    if (!acc.includes(current)) {
      acc.push(current)
    }
    return acc
  }, [])

  return uniqueNumbers.length
}
