// Ejemplo basico For In con un objeto
export let alumna = {
    nombre: 'Lucia',
    edad: 22,
    curso: 'Carrera Back'
};

for (let propiedad in alumna) {
    console.log(`Clave: ${propiedad}, Valor: ${alumna[propiedad as keyof typeof alumna]}`);
}

// Primer Ejemplo: Se itera las propiedades del objeto alumna que representan una estudiante
// llamada Lucia, con edad y el curso que esta tomando. Se imprimen las claves y los valores
// correspondientes.

// Propiedad keyof typeof alumna: Con esto, le decimos al compilador que la variable propiedad
// es una clave valida de las propiedades del objeto alumna, es decir una de las 
// propiedades alumna (nombre, edad y curso)

console.log('-------------------------------------------------');

// Ejemplo con un array
let lenguajes = ['Javascript', 'Python', 'Java'];

for (let indice in lenguajes) {
    console.log(`Indice: ${indice}, Valor: ${lenguajes[indice]}`);
}

// Segundo Ejemplo: El array lenguajes contiene tres lenguajes de programacion y el for in
// recorre sus indices, mostrando el indice y el valor del lenguaje correspondiente en cada 
// iteracion