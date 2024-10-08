// Ejemplo: Funcion Generica
function identidad<T>(valor: T) {
    return valor;
}

// Ejemplo de uso
let numero = identidad<number>(10); // El valor de T es un numero
export let texto = identidad<string>("Hola") // El valor de T es un string
console.log(numero, texto);

// Cuando se llama a identidad, le decimos a typeScript cual es el tipo
// que va a usar. Por ejemplo, al llamar identidad<number>(10), le 
// indicamos que T sera un numero, y al llamar a identidad<string>("Hola") 
// le indicamos que T es un string.

console.log('-------------------------------------------------');

// Ejemplo: Clase generica
class Caja<T> {
    contenido: T;

    constructor(valor: T) {
        this.contenido = valor;
    }

    obtenerContenido(): T {
        return this.contenido;
    }
}

// Ejemplo de uso
let cajaNumeros = new Caja<number>(100) // T es number
console.log(cajaNumeros.obtenerContenido());

let cajaTexto = new Caja<string>("Hola Chicas"); // T es un string
console.log(cajaTexto.obtenerContenido());

//Caja<T> define una clase que puede contener cualquier tipo, determinando
// en el momento de la creacion de la instacia.

console.log('-------------------------------------------------');

// Ejemplo: Interface generica
interface Par<T,U> {
    primero: T;
    segundo: U;
}

// Ejemplo de uso
let miPar: Par<string, number> = {
    primero: "Edad",
    segundo: 22
}
console.log(miPar);

// Par<T, U> define una interfaz generica con dos parametros de tipo : T y U
// Al instanciar miPar, le especificamos que primero es de tipo string y
// segundo es de tipo number
