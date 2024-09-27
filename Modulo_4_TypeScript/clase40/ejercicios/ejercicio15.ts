// Declarar un array multidimensional para almacenar las notas
let tablaNotas: [string, number, number, number][] = [
    ["Maria", 8, 9, 7],
    ["Pedro", 6, 5, 7],
    ["Luis", 9, 8, 9]
  ];
  
  // Imprimir las notas de Pedro
  console.log(tablaNotas[1]);
  
  // Calcular y mostrar el promedio de cada estudiante
  tablaNotas.forEach(estudiante => {
    let promedio = (estudiante[1] + estudiante[2] + estudiante[3]) / 3;
    console.log(`${estudiante[0]} tiene un promedio de ${promedio.toFixed(2)}`);
  });
  