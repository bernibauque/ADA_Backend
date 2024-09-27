// Crear una tupla para almacenar información personal
export let persona: [string, number, string] = ["Juan", 30, "Argentina"];

// Cambiar el país de origen
persona[2] = "Brasil";

// Desestructurar la tupla
let [nombre, edad, pais] = persona;

// Mostrar los valores
console.log(nombre);  // "Juan"
console.log(edad);    // 30
console.log(pais);    // "Brasil"
