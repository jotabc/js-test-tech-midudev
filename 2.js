/* Ricardo es miembro de nuestro equipo, y aunque suele ser muy productivo
sufre de un de funciones que borrará Ricardo cada día al finalizar su trabajo.

Cada día es capáz de escribir F cantidad de funcionesnuevas, pero su impulso lo lleva
el mismo día a borrar R cantidad de las funciones, y así cada día, increiblementeç
cuando termina su trabajo no vuelve a refactorizar ninguna función, si no que envia
el pull Reques.

todos amana el trabajo de ricardo,pero el arquitecto del equipo está preoucpado
por el plazo (fecha entrega) de las historias que le asignan a Ricardo
y te pide ayuda con un programa que determina si Ricardo podrá cumplir con su
presupuesto.

Para ello el arquitecto te entregará un número D correspondientes al número
de días del plazo de entrega, T la cantidad de funciones totales que espera el
cliente que realice ricardo, F la cantidad de funciones nuevas que escribirá
ricardo por día, r la cantidad de funciones que borrará ricardo cada día al
finalizar su trabajo.

Calcule si Ricardo puede o no cumplir con las tareas indicadas:

cierto Lo logrará
false no lo logrará

La plantilla cambiará el verdadero en 1 y falso en 0 automáticamente
*/

// F, cantidad de funciones nuevas que escribe ricardo por día
// R, cantidad de funciones borra ricardo cada día al finalizar su trabajo
// D, número de días de plazo de entrega
// T, cantidad de funciones totales que espera el cliente que realice ricardo.

export function willRicardoMakeItAndNotBeFired (D, T, F, R) {
  const functionsPerDay = F - R
  const functionsDone = functionsPerDay * D
  return functionsDone >= T
}
