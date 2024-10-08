// Comparación entre for...in y for...of

// Ejemplo 1: Recorrer un array de autos con for...in y for...of
let autos = ["Toyota", "Honda", "Tesla"];

console.log("=== Recorrido de un array de autos ===");

// Uso de for...in (Recorre los índices)
console.log("Usando for...in (índices):");
for (let indice in autos) {
    console.log(`Índice: ${indice}, Auto: ${autos[indice]}`);
}

// Uso de for...of (Recorre los valores)
console.log("Usando for...of (valores):");
for (let auto of autos) {
    console.log(`Auto: ${auto}`);
}

// Recorrido de un array de autos:
// for...in: Recorre los índices del array (0, 1, 2) y se accede a los 
// nombres de los autos a través de esos índices.
// for...of: Recorre directamente los nombres de los autos 
// ("Toyota", "Honda", "Tesla") sin necesidad de acceder a los índices.

console.log("\n=== Recorrido de un objeto de un auto ===");

// Ejemplo 2: Recorrer un objeto de un auto con for...in
export let auto = {
    marca: "Tesla",
    modelo: "Model S",
    año: 2023
};

// Uso de for...in (Recorre las claves del objeto)
console.log("Usando for...in (claves de un objeto auto):");
for (let propiedad in auto) {
    console.log(`Clave: ${propiedad}, Valor: ${auto[propiedad as keyof typeof auto]}`);
}

// Uso de for...of NO es posible en un objeto regular
// Forzar for...of en un objeto arrojaría un error
// El siguiente código daría error:
// for (let valor of auto) {
//     console.log(valor);
// }

// Recorrido de un objeto de un auto:
// for...in: Se usa para recorrer las claves de un objeto que representa un auto 
// (marca, modelo, año) y se imprime tanto la clave como el valor correspondiente.
// for...of: No es posible usarlo con un objeto porque los objetos no son iterables.


