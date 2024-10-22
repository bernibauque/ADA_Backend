// DEFINICION: Alias de tipos en typescript
// Un alias de tipos permite crear un nombre descriptivo para un tipo ya existente
//Esto mejora la legibilidad del codigo

// 1. Alias de tipos primitivos: Ejemplo: String, number, etc
type ID = number; 
type Nombre = string;
type Activo = boolean;

// Usamos los alias para declarar variable
let usuarioId: ID = 123;
let nombreUsuario: Nombre = "Sofi";
let cuentaActiva: Activo = true;

console.log(`Usuario ID: ${usuarioId}, Nombre del usuario: ${nombreUsuario} y cuenta Activa: ${cuentaActiva}`);

// 2. Alias para Objetos
type Direccion = {
    calle: string;
    ciudad: string;
    codigoPostal: number;
}

// Usamos el alias "direccion"
export let miDireccion: Direccion = {
    calle: "Avenida America",
    ciudad: "Neuquen",
    codigoPostal: 12345,
};

console.log(`Vivo en ${miDireccion.calle} en la ciudad de ${miDireccion.ciudad} y mi codigo postal es ${miDireccion.codigoPostal}`);

// 3. Alias para uniones de tipos
type Resultado = "Exito" | "Error"
type IdUsuario = string | number;

// Usamos los alias para definir variables
let estadoOperacion: Resultado = "Exito";
let IdUsuario1: IdUsuario = 456;
let IdUsuario2: IdUsuario = "123abc"

console.log(`Estado de operacion: ${estadoOperacion}, Usuario Id: ${IdUsuario1}, Usuario Id con letras: ${IdUsuario2}`);


// 4. Alias para funciones
// Alias para las funcion que se toma dos numeros como argumentos y devuelve un numero
// Esto se usa para definir lo "firma" de funciones que deben cumplir con cierto formato
type OperacionMatematica = (a: number, b: number) => number;

// Implementacion de dos funciones que siguen el formato de "operacionMatematica"
const sumar: OperacionMatematica = (a, b) => a + b;
const restar: OperacionMatematica = (a, b) => a - b;

console.log(`Suma: ${sumar(5,3)}, Resta: ${restar(4,2)}`);

// 5. Alias para array
type ListaDeNumeros = number[];
type ListaDeCadenas = string[];

let numeros: ListaDeNumeros = [1, 2, 3, 4];
let cadenas: ListaDeCadenas = ["uno", "dos", "tres"];

console.log(`Numeros: ${numeros.join(", ")}`);
console.log(`Cadenas: ${cadenas.join(", ")}`);

// 6. Alias para objetos complejos
type Producto = {
    id: ID;
    nombre: string;
    precio: number;
    disponible: boolean;
    categoria: ListaDeCadenas;
    direccioEnvio: Direccion;
}

// Creamos el objeto "Producto"
let producto: Producto = {
    id: 101, 
    nombre: "Computadora laptop",
    precio: 800,
    disponible: true,
    categoria: ["Electronica", "Computacion"],
    direccioEnvio: {
        calle: "Avenida America",
        ciudad: "Tucuman",
        codigoPostal: 1234
    }
}

console.log(`Producto ${producto.nombre}, ID: ${producto.id}, Precio: ${producto.precio}, Disponibilidad: ${producto.disponible}, Categorias: ${producto.categoria.join(", ")}`);
console.log(`Direccion para envios: ${producto.direccioEnvio.calle}, ${producto.direccioEnvio.ciudad} y ${producto.direccioEnvio.codigoPostal}`);





