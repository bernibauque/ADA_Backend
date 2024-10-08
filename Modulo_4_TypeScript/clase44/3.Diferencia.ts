// Comparacion entre for in y for of

// Ejemplo 1: Recorrer un array de autos con for in y con for of
export let  auto = ['Toyota', 'Honda', 'Tesla'];

console.log('=== RECORRIDO DE UN ARRAY DE AUTOS ===');

// Uso de for in (recorre indices)
console.log("Usando for in - Indice");
for (let indice in auto) {
    console.log(`Indice: ${indice}, Auto: ${auto[indice]}`);   
}

// Recorrido de un array de autos: Recorre los indices (0, 1, 2) y se accede
// a los nombres de los autos a traves de esos indices/

// Uso de for of (Recorrer valores)
console.log("Usando for of - Valores");
for (let autos of auto) {
    console.log(`Auto: ${autos}`);
}

// For of recorre directamente los nombres de los autos, sin necesidad
// de acceder a los indices.

console.log('\n=== RECORRIDO DE UN OBJETO AUTO ===');

// Ejemplo 2: Recorrer un objeto auto con for in
let autito = {
    marca: 'Fiat',
    modelo: '1',
    anio: 1998
};

// Uso de for in
console.log("Usando for in (claves de un objeto");
for (let propiedad in autito) {
    console.log(`Clave: ${propiedad}, Valor: ${autito[propiedad as keyof typeof autito]}`);
}

// Uso de for of NO es posible con un objeto regular (ERROR)
// for (let valor of autito) {
//     console.log(valor);
// }

// Recorrido de objeto autito:
// for in: Se usa para recorrer las claves de un objeto que representa un auto (marca, modelo, 
// anio) y se imprimen tanto la clave como el valor correspondiente
// for of: No es posible usarlo con un objeto porque los objetos no son iterables.

