// Declarar el enum
export enum Colores {
    Rojo,
    Verde,
    Azul
  }
  
  // Crear un array de tuplas
  let arrayColores: [string, Colores][] = [
    ["Rojo", Colores.Rojo],
    ["Verde", Colores.Verde],
    ["Azul", Colores.Azul]
  ];
  
  // Añadir una tupla más
  arrayColores.push(["Amarillo", Colores.Rojo]);
  
  // Mostrar el array de tuplas
  console.log(arrayColores);
  