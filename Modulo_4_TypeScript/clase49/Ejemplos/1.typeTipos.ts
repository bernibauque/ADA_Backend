// Definición: Alias de tipos en TypeScript
// Un alias de tipo permite crear un nombre descriptivo para un tipo ya existente.
// Esto mejora la legibilidad del código y permite definir estructuras complejas de forma sencilla.

// --- 1. Alias de Tipos Primitivos ---
// Alias para tipos básicos o primitivos como number, string y boolean
type ID = number;    // Alias para números (ID representa un número)
type Nombre = string; // Alias para cadenas (Nombre representa un string)
type Activo = boolean; // Alias para booleanos (Activo representa un booleano)

// Usando los alias para declarar variables
let usuarioID: ID = 123;          // Variable de tipo ID (number)
let nombreUsuario: Nombre = "Lucía"; // Variable de tipo Nombre (string)
let cuentaActiva: Activo = true;     // Variable de tipo Activo (booleano)

console.log(`Usuario: ${nombreUsuario}, ID: ${usuarioID}, Activa: ${cuentaActiva}`); 


// --- 2. Alias para Objetos ---
// Alias para definir un tipo de objeto complejo
// En este caso, una dirección con tres propiedades: calle, ciudad, y código postal
type Direccion = {
    calle: string;        // Propiedad "calle" de tipo string
    ciudad: string;       // Propiedad "ciudad" de tipo string
    codigoPostal: number; // Propiedad "codigoPostal" de tipo number
};

// Usamos el alias 'Direccion' para crear un objeto con las propiedades especificadas
let miDireccion: Direccion = {
    calle: "Avenida Principal",
    ciudad: "Buenos Aires",
    codigoPostal: 12345
};

console.log(`Vivo en ${miDireccion.calle}, ${miDireccion.ciudad}, ${miDireccion.codigoPostal}`); 


// --- 3. Alias para Uniones de Tipos ---
// Alias para uniones de tipos, donde una variable puede tener uno de varios tipos posibles
type Resultado = "éxito" | "error"; // 'Resultado' solo puede ser "éxito" o "error"
type IdUsuario = string | number;   // 'IdUsuario' puede ser un número o una cadena (string)

// Usamos el alias 'Resultado' y 'IdUsuario' para definir variables
let estadoOperacion: Resultado = "éxito";  // Puede ser "éxito" o "error"
let idUsuario1: IdUsuario = 456;           // Puede ser un número
let idUsuario2: IdUsuario = "123abc";      // También puede ser una cadena

console.log(`Estado de operación: ${estadoOperacion}, Usuario ID: ${idUsuario1}, Usuario ID: ${idUsuario2}`); 


// --- 4. Alias para Funciones ---
// Alias para una función que toma dos números como argumentos y devuelve un número
// Esto se usa para definir la "firma" de funciones que deben cumplir un cierto formato
type OperacionMatematica = (a: number, b: number) => number;

// Implementación de dos funciones que siguen el formato de 'OperacionMatematica'
const sumar: OperacionMatematica = (a, b) => a + b;   // Función que suma dos números
const restar: OperacionMatematica = (a, b) => a - b;  // Función que resta dos números

console.log(`Suma: ${sumar(5, 3)}, Resta: ${restar(5, 3)}`); 


// --- 5. Alias para Arrays ---
// Alias para un array de números y un array de cadenas
type ListaDeNumeros = number[];  // Alias para un array que solo puede contener números
type ListaDeCadenas = string[];  // Alias para un array que solo puede contener cadenas (strings)

// Usamos los alias para crear arrays de números y cadenas
 export let numeros: ListaDeNumeros = [1, 2, 3, 4, 5];    // Array de números
let cadenas: ListaDeCadenas = ["uno", "dos", "tres"];  // Array de cadenas

// Mostramos los arrays en consola
console.log(`Numeros: ${numeros.join(", ")}`);   
console.log(`Cadenas: ${cadenas.join(", ")}`);  


// --- 6. Alias para Objetos Complejos ---
// Alias para describir objetos más complejos, que pueden incluir otros alias
// Este alias 'Producto' describe un objeto con varias propiedades de diferentes tipos
type Producto = {
    id: ID;                // Reutilizando el alias 'ID' (número)
    nombre: string;        // Nombre del producto (cadena)
    precio: number;        // Precio del producto (número)
    disponible: boolean;   // Indica si el producto está disponible (booleano)
    categorias: ListaDeCadenas;  // Usando el alias 'ListaDeCadenas' (array de cadenas)
    direccionEnvio: Direccion;   // Reutilizando el alias 'Direccion' (objeto complejo)
};

// Creamos un objeto 'producto' que sigue la estructura del alias 'Producto'
let producto: Producto = {
    id: 101,                                 // ID del producto
    nombre: "Computadora portátil",          // Nombre del producto
    precio: 1500.99,                         // Precio del producto
    disponible: true,                        // Si está disponible o no
    categorias: ["Electrónica", "Computación"], // Categorías a las que pertenece
    direccionEnvio: {                        // Dirección de envío del producto
        calle: "Calle Falsa 123",            // Calle de la dirección de envío
        ciudad: "Madrid",                    // Ciudad de la dirección de envío
        codigoPostal: 28001                  // Código postal de la dirección de envío
    }
};

console.log(`Producto: ${producto.nombre}, Precio: ${producto.precio}, Categorías: ${producto.categorias.join(", ")}`);

console.log(`Dirección de Envío: ${producto.direccionEnvio.calle}, ${producto.direccionEnvio.ciudad}, ${producto.direccionEnvio.codigoPostal}`);
