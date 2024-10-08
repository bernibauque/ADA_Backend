// Ejemplo básico con un objeto 
let alumna = {
    nombre: "Lucía",
    edad: 22,
    curso: "Programación"
};

for (let propiedad in alumna) {
    console.log(`Clave: ${propiedad}, Valor: ${alumna[propiedad as keyof typeof alumna]}`);
}
// Primer ejemplo: Se itera sobre las propiedades del objeto alumna, que representa una estudiante 
// llamada Lucía, con edad y el curso que está tomando. Se imprimen las claves y los valores 
// correspondientes.

// propiedad as keyof typeof alumna: Con esto, le decimos al compilador que la variable propiedad
// es una clave válida de las propiedades del objeto alumna, es decir, una de las propiedades de 
// alumna (nombre, edad o curso).


// Ejemplo con un array 
let lenguajes = ["JavaScript", "Python", "TypeScript"];

for (let indice in lenguajes) {
    console.log(`Índice: ${indice}, Valor: ${lenguajes[indice]}`);
}
// Segundo ejemplo: El array lenguajes contiene tres lenguajes de programación, y for...in recorre 
// sus índices, mostrando el índice y el valor del lenguaje correspondiente en cada iteración.

