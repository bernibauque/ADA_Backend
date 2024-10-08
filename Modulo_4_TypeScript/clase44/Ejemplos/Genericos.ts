// Ejemplo: Función genérica
function identidad<T>(valor: T): T {
    return valor;
}
// Ejemplos de uso:
let numero = identidad<number>(10);  // T es número
export let texto = identidad<string>("Hola");  // T es string
console.log(numero, texto); // "Texto genérico"

// Cuando se llama a identidad, le decimos a TypeScript cuál es el tipo 
// que va a usar. Por ejemplo, al llamar identidad<number>(10), le 
// indicamos que T será un número, y al llamar identidad<string>("Hola"), 
// T será una cadena.

console.log('-----------------------------------------------');

// Ejemplo 2: Clase genérica
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
let cajaNumeros = new Caja<number>(100);  // T es number
console.log(cajaNumeros.obtenerContenido()); // 100
  
let cajaTexto = new Caja<string>("Texto genérico");  // T es string
console.log(cajaTexto.obtenerContenido()); // Texto genérico

// Caja<T> define una clase que puede contener cualquier tipo, determinado 
// en el momento de la creación de la instancia. Al crear cajaNumeros, se
// le asigna el tipo number, mientras que cajaTexto es de tipo string.

console.log('-----------------------------------------------');

// Ejemplo 3: interface genérica
interface Par<T, U> {
    primero: T;
    segundo: U;
  }
  
  // Ejemplo de uso
  let miPar: Par<string, number> = {
    primero: "edad",
    segundo: 30
  };
  console.log(miPar); // { primero: 'edad', segundo: 30 }

// Par<T, U> define una interfaz genérica con dos parámetros de tipo, T y U.
// Al instanciar miPar, le especificamos que primero es de tipo string y 
// segundo es de tipo number.
  



