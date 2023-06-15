/*
Diego es un líder de proyectos, que muy juiciosos llevó el control de las
estimaciones de las tareas asignadas a los diff equipos y personas en un excel,
pero por desgracia el archivo quedó corrupto y no pudo ser rescatado.

Sin embargo, diego tenía un resumen que entregaba a su jefe cada semana, donde
le contaba por equipo, la cantidad de tareas que dicho equipo tenía, el promedio
aritmético de las estimaciones de tareas definidas en horas, y la duración
de la tarea con menor valor estimado.

diego necesita saber para una presentación hoy con el cliente, Cúal es la máxima
duración que puede tener una de las tareas?

Función descriptiva:
Complete la función que recibe la lista de equipos
con 3 valores (N,R,T) y debe devolver una lista que representa la duración máxima
de las tareas de cada equipo

- equipoL[i][0] = (N) número de tareas asignadas en el equipo.
- equipoL[i][1] = (T) número de horas promedio de las tareas en el equipo
- equipoL[i][2] = (R) duración en horas de la tarea más pequeña en el equipo
*/

// tareas definidas en horas => total de horas.
// duracion tarea con menos valor estimado
// return maxima duración que puede tener una tarea

// const teams = [[2, 2, 1], [3, 2, 1], [4, 2, 1]]

export function maxTaskDuration (teams) {
  return teams.map(team => {
    const [totalTasks, averageTask, minDuration] = team
    // calculamos el total de horas que representan todas las tareas
    const totalHours = totalTasks * averageTask

    // calculamos el total de horas que representan todas la tareas más cortas
    // (ménos la que puede ser más larga)
    const shortestTasksTotal = minDuration * (totalTasks - 1)

    // restamos todas las horas ménos las horas de las tareas más cortas
    return totalHours - shortestTasksTotal
  })
}
