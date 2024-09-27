// Declaración e inicialización de una tupla
export let persona: [string, number];

// Inicializando la tupla con nombre y edad
persona = ["Ana", 25];

// Accediendo a los elementos de la tupla
console.log("Nombre:", persona[0]);  // Imprime "Ana"
console.log("Edad:", persona[1]);    // Imprime 25

// Modificando la tupla
persona[1] = 26;
console.log("Edad actualizada:", persona[1]);  // Imprime 26

// Desestructurando la tupla
let [nombre, edad] = persona;
console.log(`La persona se llama ${nombre} y tiene ${edad} años.`);





