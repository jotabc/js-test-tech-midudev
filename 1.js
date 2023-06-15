/*
La NASA nos ha contratado y como empresa llevaremos a cabo nuestro primer robot a Marte.

Nuestro robot se mueve 1 metro en cada dirección con el comando
Izquiera (L) Derecha (R) Arriba(u) Abajo(D)

La NASA prepara una lista de indicaciones para el movimiento del robot desde la base de carga
en el ejm marcado como punto 0.

sin embargo están preocupados porque en el caso de una emergencia el robot puede regresar a tiempo
a la base de carga y quieren que evaluemos el número de movimiento en un simulador, y les digamos la cantidad de instrucciones máximas
que deberíamos enviar al robot cuando se encuentre en su punto más lejano para que pueda regresar a la base.

Calcule le número de instrucciones máximo que debería enviarse al robot para que en algún
punto del recorrido regrese a la base.

Complete la función abajo para completar la tarea requerida, la función tendrá una lista de planes a ejecutar, evalue
cada uno y retorne una lista con el número máximo de instrucciones.

 */

// enum
const Direction = {
  Left: 'L',
  Right: 'R',
  Up: 'U',
  Down: 'D'
}

export function maxInstrucctions (movements) {
  // let x = 0 // eje horizontal
  // let y = 0 // eje vertical
  let distance = 0
  let max = 0 // max movimientos

  movements.forEach(mov => {
    /* if (mov === 'L') distance--
    if (mov === 'R') distance++
    if (mov === 'U') distance++
    if (mov === 'D') distance-- */

    // simplify
    if (mov === Direction.Right || mov === Direction.Up) distance++
    if (mov === Direction.Left || mov === Direction.Down) distance--

    /* Esto es poque si habalamos de dinstancia no tenemos valores
      negativos por lo cual el calculo debería ser con el abs, osea
      nos quedamos con el valor absoluto es decir si es -1 será 1 */
    // const current = Math.abs(x) + Math.abs(y)
    const current = Math.abs(distance)
    if (current > max) max = current
  })

  return max
}
