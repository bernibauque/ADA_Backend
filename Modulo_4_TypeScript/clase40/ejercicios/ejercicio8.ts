// Declarar un array con los nombres de los países
let paises: string[] = ["Argentina", "Brasil", "Chile", "Perú", "México"];

// Ordenar el array en orden alfabético
paises.sort();

// Añadir otro país al inicio
paises.unshift("Colombia");

// Eliminar el último país
paises.pop();

// Recorrer el array y mostrar cada país
paises.forEach(pais => console.log(pais));
