// Declarar el enum
export enum Colores {
  Rojo,     // El valor 'Rojo' tiene el valor numérico 0
  Verde,    // El valor 'Verde' tiene el valor numérico 1
  Azul      // El valor 'Azul' tiene el valor numérico 2
  // Los valores por defecto del enum son asignados automáticamente comenzando en 0
}

// Crear un array de tuplas
// Este array llamado 'arrayColores' está compuesto por tuplas. Cada tupla contiene:
// - Un string (nombre del color).
// - Un valor del enum 'Colores', que representa uno de los valores enumerados (Rojo, Verde o Azul).
let arrayColores: [string, Colores][] = [
  ["Rojo", Colores.Rojo],   // Tupla con el string "Rojo" y su valor correspondiente en el enum (0)
  ["Verde", Colores.Verde], // Tupla con el string "Verde" y su valor correspondiente en el enum (1)
  ["Azul", Colores.Azul]    // Tupla con el string "Azul" y su valor correspondiente en el enum (2)
];

// Añadir una tupla más al array
// Usamos el método 'push' para agregar otra tupla. En este caso agregamos:
// - El string "Amarillo".
// - El valor del enum 'Colores.Rojo' que tiene asociado el valor 0.
// Esto se hace aunque "Amarillo" no sea originalmente parte del enum.
arrayColores.push(["Amarillo", Colores.Rojo]);

// Mostrar el array de tuplas en la consola
// Aquí se muestra todo el contenido del array 'arrayColores' en la consola.
// Cada elemento del array es una tupla que contiene el nombre de un color y su valor correspondiente del enum.
console.log(arrayColores);

  