/*
Una nueva app de préstamos sin cuotas ded manejo, ni intereses, quiere probar
una nueva modalidad de pagos en los préstamos, la misma consiste en que el
primer día del préstamo, la persona debe pagar solo 1 peso, y cada día que pasa
deberá pagarel doble de lo que pagó el día anterior y así sucesivamente.
El último día solo deberá pagar lo que le falte.

Los interesados en la app quieren hacer un pequeño simulador, que permitan
conocer la cantidad de días que se requeiren para pagar una deuda en totalidad con
este sistema, dada la cantidad a prestar inicialmente.

Dado un número N deberás devolver un entero indicando la cantidad de días necesarios
para resolverlo

Funcion descriptiva:
Complete la función que reciba la lista de deudas, y debe deolver una lista
que representa el número de días necesarios para pagar cada deuda.

// me prestan 4 dólares
// 1 día -> 1 dólar
// 2 día -> 2 dólares
// 3 día -> 4 dólares

*/

export function calculateDaysToPayDebts (debts) {
  return debts.map(debt => {
    let payment = 1
    let days = 0
    let pendingDebt = debt

    while (pendingDebt > 0) {
      // más basica
      days = days + 1
      pendingDebt = pendingDebt - payment
      payment = payment * 2

      // más "avanzada"
      /* days++
      pendingDebt -= payment
      payment *= 2 */
    }

    return days
  })
}
