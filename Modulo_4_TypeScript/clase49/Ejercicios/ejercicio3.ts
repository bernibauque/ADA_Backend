// Definimos un type que acepta números o cadenas
type NumeroOCadena = number | string;

// Función que devuelve una tupla con los tipos de cada argumento
function identificarTipos(a: NumeroOCadena, b: NumeroOCadena): [string, string] {
    return [typeof a, typeof b];
}

// Ejemplo de uso
console.log(identificarTipos(5, "hola")); // Resultado: ["number", "string"]
